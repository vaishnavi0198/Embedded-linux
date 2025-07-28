#ifndef SENSOR_H
#define SENSOR_H

#include <string>
#include <vector>

float simulateTemperature();
void logReading(float temp, const std::string &filename);
std::vector<float> readLog(const std::string &filename);
void showStats(const std::vector<float> &data);
void exportCSV(const std::string &filename, const std::string &outFile);
void exportJSON(const std::string &filename, const std::string &outFile);

#endif
