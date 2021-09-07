module.exports = {
  create: () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            success: true,
            message: "Created row successfully",
          }),
        2000
      )
    ),
  update: () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ success: true, message: "DB updated succesfully" }),
        2000
      )
    ),
};
