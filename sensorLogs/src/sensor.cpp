#include "sensor.h"
#include <iostream>
#include <fstream>
#include <ctime>
#include <cstdlib>
#include <sstream>
#include <algorithm>

float simulateTemperature()
{
    return 20.0 + static_cast<float>(rand()) / RAND_MAX * 10.0; // 20 - 30°C
}

void logReading(float temp, const std::string &filename)
{
    std::ofstream file(filename, std::ios::app);
    std::time_t now = std::time(nullptr);
    file << now << "," << temp << "\n";
    std::cout << "Logged: " << temp << " at " << std::ctime(&now);
}

std::vector<float> readLog(const std::string &filename)
{
    std::ifstream file(filename);
    std::string line;
    std::vector<float> data;

    while (getline(file, line))
    {
        std::stringstream ss(line);
        std::string timestamp, tempStr;
        getline(ss, timestamp, ',');
        getline(ss, tempStr);
        if (!tempStr.empty())
        {
            data.push_back(std::stof(tempStr));
        }
    }

    return data;
}

void showStats(const std::vector<float> &data)
{
    if (data.empty())
    {
        std::cout << "No data available.\n";
        return;
    }

    float sum = 0, minVal = data[0], maxVal = data[0];

    for (float val : data)
    {
        sum += val;
        minVal = std::min(minVal, val);
        maxVal = std::max(maxVal, val);
    }

    std::cout << "Avg: " << (sum / data.size())
              << ", Min: " << minVal
              << ", Max: " << maxVal << "\n";
}

void exportCSV(const std::string &filename, const std::string &outFile)
{
    std::ifstream in(filename);
    std::ofstream out(outFile);
    out << "timestamp,temperature\n";
    std::string line;
    while (getline(in, line))
    {
        out << line << "\n";
    }
    std::cout << "Exported to " << outFile << "\n";
}

void exportJSON(const std::string &filename, const std::string &outFile)
{
    std::ifstream in(filename);
    std::ofstream out(outFile);
    out << "[\n";
    std::string line;
    bool first = true;

    while (getline(in, line))
    {
        std::stringstream ss(line);
        std::string timestamp, temp;
        getline(ss, timestamp, ',');
        getline(ss, temp);

        if (!first)
            out << ",\n";
        out << "  {\"timestamp\": " << timestamp << ", \"temperature\": " << temp << "}";
        first = false;
    }

    out << "\n]\n";
    std::cout << "Exported to " << outFile << "\n";
}
