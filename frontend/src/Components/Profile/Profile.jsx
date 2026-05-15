import {
  Avatar,
  Container,
  Text,
  Stack,
  Paper,
  BackgroundImage,
  Group,
  Badge,
  Divider,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconMail, IconUser, IconId } from "@tabler/icons-react";
import Service from "../../utils/http";

export default function Profile() {
  const service = new Service();
  const [data, setData] = useState(null);

  const getProfile = async () => {
    try {
      const response = await service.get("user/me");
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #d9b3ff 0%, #c9c6ff 40%, #b8ecff 100%)",
        padding: "20px",
      }}
    >
      <Paper
        shadow="xl"
        radius="30px"
        style={{
          width: "430px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Cover Image */}
        <BackgroundImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          h={180}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
            }}
          />
        </BackgroundImage>

        {/* Profile Content */}
        <Stack align="center" mt={-60} pb="xl" px="xl">
          {/* Avatar */}
          <Avatar
            src={
              data?.avatar ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            size={120}
            radius={120}
            style={{
              border: "5px solid white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          />

          {/* Name */}
          <Text
            size="30px"
            fw={800}
            style={{
              color: "#6A1B9A",
              textShadow: "0 2px 10px rgba(255,255,255,0.3)",
            }}
          >
            {data?.name || "User Name"}
          </Text>

          {/* Badge */}
          <Badge
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{ from: "violet", to: "blue" }}
          >
            User Profile
          </Badge>

          <Divider
            my="sm"
            style={{
              width: "100%",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          />

          {/* User Details */}
          <Stack gap="md" w="100%">
            {/* Full Name */}
            <Paper
              radius="lg"
              p="md"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Group>
                <IconUser color="#6A1B9A" />
                <div>
                  <Text size="sm" fw={700} c="#4A148C">
                    Full Name
                  </Text>
                  <Text c="#2E2E2E" fw={500}>
                    {data?.name || "Not Available"}
                  </Text>
                </div>
              </Group>
            </Paper>

            {/* Email */}
            <Paper
              radius="lg"
              p="md"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Group>
                <IconMail color="#1565C0" />
                <div>
                  <Text size="sm" fw={700} c="#0D47A1">
                    Email Address
                  </Text>
                  <Text c="#2E2E2E" fw={500}>
                    {data?.email || "Not Available"}
                  </Text>
                </div>
              </Group>
            </Paper>

            {/* User ID */}
            <Paper
              radius="lg"
              p="md"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Group>
                <IconId color="#00838F" />
                <div>
                  <Text size="sm" fw={700} c="#006064">
                    User ID
                  </Text>
                  <Text c="#2E2E2E" fw={500}>
                    {data?._id || "Not Available"}
                  </Text>
                </div>
              </Group>
            </Paper>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}