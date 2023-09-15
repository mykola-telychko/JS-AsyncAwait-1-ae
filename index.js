async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data fetched');
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log('getData::', data);
  } catch (error) {
    console.error(error);
  }
}

getData();
