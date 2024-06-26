"use client";
import React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import Link from "next/link";
const settings = [{ url: "/profile", name: "Hồ sơ" }];
export default function UserButton() {
  const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false);

  const handleOpenUserMenu = () => {
    anchorElUser ? setAnchorElUser(false) : setAnchorElUser(true);
  };
  const handleLogout = () => {
    Cookies.remove("user");
  };

  return (
    <>
      <div className="hidden relative ml-3 sm:block">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Trang cá nhân">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://dinoenglish.app/_next/image?url=%2Fassets%2Fdrawable%2Fic_default_ava_male.png&w=1920&q=75"
              />
            </IconButton>
          </Tooltip>
          {anchorElUser && (
            <div className="bg-gray-50 rounded-xl absolute top-12 right-0 w-40 shadow-lg text-gray-600 ">
              {settings.map((setting) => (
                <Link key={setting.url} href={setting.url}>
                  <MenuItem onClick={handleOpenUserMenu}>
                    <Typography
                      textAlign="center"
                      fontSize="14px"
                      fontWeight="500"
                    >
                      {setting.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <a href="http://localhost:3000/" onClick={handleLogout}>
                <MenuItem onClick={handleOpenUserMenu}>
                  <Typography
                    textAlign="center"
                    fontSize="14px"
                    fontWeight="500"
                  >
                    Đăng xuất
                  </Typography>
                </MenuItem>
              </a>
            </div>
          )}
        </Box>
      </div>
    </>
  );
}
