import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export function Calendar() {
  const [data, setData] = useState([]);

  const getCalendarData = async () => {
    try {
      const response = await fetch(
        "https://api.sunrise-sunset.org/json?lat=42.52213211422513&lng=27.46050179404535&date=today",
      );
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getCalendarData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Днес е 7531 година</Text>
      <Text>изгрев: {data.sunrise}</Text>
    </View>
  );
}
