#include "sensor.h"
#include <iostream>

int main(int argc, char *argv[])
{
    std::string logFile = "logs/data.log";

    if (argc < 2)
    {
        std::cout << "Usage: ./sensor_tool <command>\nCommands: read, log, stats, export_csv, export_json\n";
        return 1;
    }

    std::string command = argv[1];

    if (command == "read")
    {
        std::cout << "Simulated Temperature: " << simulateTemperature() << "\n";
    }
    else if (command == "log")
    {
        float temp = simulateTemperature();
        logReading(temp, logFile);
    }
    else if (command == "stats")
    {
        auto data = readLog(logFile);
        showStats(data);
    }
    else if (command == "export_csv")
    {
        exportCSV(logFile, "logs/data.csv");
    }
    else if (command == "export_json")
    {
        exportJSON(logFile, "logs/data.json");
    }
    else
    {
        std::cout << "Unknown command\n";
    }

    return 0;
}
