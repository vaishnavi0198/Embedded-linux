cmake_minimum_required(VERSION 3.10)
project(sensor_tool)

set(CMAKE_CXX_STANDARD 11)

add_executable(sensor_tool
    src/main.cpp
    src/sensor.cpp
)
