import React, { useEffect, useState } from "react";
import Service from "../../utils/http";

import {
  Table,
  Paper,
  Title,
  Text,
  ActionIcon,
  Group,
  ScrollArea,
} from "@mantine/core";

import {
  IconTrash,
  IconExternalLink,
  IconEdit,
  IconLink,
  IconPointer,
  IconChartBar,
} from "@tabler/icons-react";

export default function MyUrls() {
  const [data, setData] = useState(null);

  const service = new Service();

  // Fetch URLs
  async function getData() {
    try {
      const response = await service.get(
        "user/my/urls?page=1&limit=10"
      );

      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Delete URL
  const deleteUrl = async (id) => {
    try {
      await service.delete(`s/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit URL
  const handleEdit = (element) => {
    console.log("Edit", element);
  };

  // Table Rows
  const rows = data?.shortURLs?.map((element) => {
    const shortUrl =
      import.meta.env.VITE_DEV_PROXY +
      "/api/s/" +
      element.shortCode;

    return (
      <Table.Tr
        key={element._id}
        style={{
          transition: "0.3s",
        }}
      >
        {/* Original URL */}
        <Table.Td
          style={{
            color: "#2E2E2E",
            fontWeight: "600",
          }}
        >
          {element.originalUrl.length > 40
            ? element.originalUrl.slice(0, 40) + "..."
            : element.originalUrl}
        </Table.Td>

        {/* Short Code */}
        <Table.Td
          style={{
            color: "#0D47A1",
            fontWeight: "700",
          }}
        >
          {element.shortCode}
        </Table.Td>

        {/* Click Count */}
        <Table.Td
          style={{
            color: "#006064",
            fontWeight: "700",
          }}
        >
          {element.clickCount}
        </Table.Td>

        {/* Actions */}
        <Table.Td>
          <Group gap="sm">
            {/* Visit */}
            <ActionIcon
              component="a"
              href={shortUrl}
              target="_blank"
              radius="xl"
              size="xl"
              variant="gradient"
              gradient={{ from: "cyan", to: "blue" }}
              style={{
                boxShadow:
                  "0 4px 15px rgba(0,150,255,0.4)",
              }}
            >
              <IconExternalLink size={22} />
            </ActionIcon>

            {/* Edit */}
            <ActionIcon
              radius="xl"
              size="xl"
              variant="gradient"
              gradient={{ from: "violet", to: "pink" }}
              onClick={() => handleEdit(element)}
              style={{
                boxShadow:
                  "0 4px 15px rgba(180,0,255,0.4)",
              }}
            >
              <IconEdit size={22} />
            </ActionIcon>

            {/* Delete */}
            <ActionIcon
              radius="xl"
              size="xl"
              color="red"
              variant="gradient"
              gradient={{ from: "red", to: "orange" }}
              onClick={() => deleteUrl(element._id)}
              style={{
                boxShadow:
                  "0 4px 15px rgba(255,0,0,0.4)",
              }}
            >
              <IconTrash size={22} />
            </ActionIcon>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",

        // Interactive Animated Background
        background:
          "linear-gradient(-45deg, #d9b3ff, #c9c6ff, #b8ecff, #f7c5ff)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Animation Style */}
      <style>
        {`
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <Paper
        shadow="xl"
        radius="30px"
        p="30px"
        style={{
          width: "95%",
          maxWidth: "1200px",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Heading */}
        <Group justify="space-between" mb="xl">
          <div>
            <Title
              order={1}
              style={{
                color: "#4A148C",
                fontWeight: "800",
                fontSize: "42px",
              }}
            >
              URL Dashboard
            </Title>

            <Text
              c="#2E2E2E"
              size="lg"
              fw={500}
            >
              Manage and monitor your URLs
            </Text>
          </div>
        </Group>

        {/* Analytics */}
        <Group grow mb="xl">
          {/* Total URLs */}
          <Paper
            radius="xl"
            p="lg"
            shadow="md"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
              textAlign: "center",
              backdropFilter: "blur(15px)",
            }}
          >
            <Group justify="center">
              <IconLink
                size={35}
                color="#8E24AA"
              />
            </Group>

            <Text
              size="35px"
              fw={900}
              c="#4A148C"
            >
              {data?.shortURLs?.length || 0}
            </Text>

            <Text fw={700} c="#6A1B9A">
              Total URLs
            </Text>
          </Paper>

          {/* Total Clicks */}
          <Paper
            radius="xl"
            p="lg"
            shadow="md"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
              textAlign: "center",
              backdropFilter: "blur(15px)",
            }}
          >
            <Group justify="center">
              <IconPointer
                size={35}
                color="#1565C0"
              />
            </Group>

            <Text
              size="35px"
              fw={900}
              c="#0D47A1"
            >
              {data?.shortURLs?.reduce(
                (acc, item) =>
                  acc + item.clickCount,
                0
              ) || 0}
            </Text>

            <Text fw={700} c="#1565C0">
              Total Clicks
            </Text>
          </Paper>

          {/* Highest Click */}
          <Paper
            radius="xl"
            p="lg"
            shadow="md"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
              textAlign: "center",
              backdropFilter: "blur(15px)",
            }}
          >
            <Group justify="center">
              <IconChartBar
                size={35}
                color="#00838F"
              />
            </Group>

            <Text
              size="35px"
              fw={900}
              c="#006064"
            >
              {Math.max(
                ...(data?.shortURLs?.map(
                  (item) => item.clickCount
                ) || [0])
              )}
            </Text>

            <Text fw={700} c="#00838F">
              Highest Clicks
            </Text>
          </Paper>
        </Group>

        {/* Table */}
        <ScrollArea>
          <Table
            striped
            highlightOnHover
            withTableBorder
            withColumnBorders
            verticalSpacing="md"
            horizontalSpacing="lg"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background:
                "rgba(255,255,255,0.35)",
            }}
          >
            {/* Header */}
            <Table.Thead
              style={{
                background:
                  "linear-gradient(90deg, #8e44ad, #3498db)",
              }}
            >
              <Table.Tr>
                <Table.Th style={{ color: "white" }}>
                  Original URL
                </Table.Th>

                <Table.Th style={{ color: "white" }}>
                  Short Code
                </Table.Th>

                <Table.Th style={{ color: "white" }}>
                  Click Count
                </Table.Th>

                <Table.Th style={{ color: "white" }}>
                  Actions
                </Table.Th>
              </Table.Tr>
            </Table.Thead>

            {/* Body */}
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </Paper>
    </div>
  );
}