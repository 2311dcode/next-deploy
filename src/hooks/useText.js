export function useSplitText() {
  return (ref, txt, speed = 0, interval = 0) => {
    let tags = '';
    let count = 0;

    for (let letter of txt) {
      tags += `
        <span style='transition-duration:${speed}s;transition-delay:${
        interval * count
      }s; display:inline-block;'>${letter === ' ' ? '&nbsp' : letter}</span>
      `;
      count++;
    }
    ref.innerHTML = tags;
  };
}

export function useCustomText(type) {
  if (type === 'capitalize') {
    return (txt) => txt.charAt(0).toUpperCase() + txt.slice(1);
  }

  if (type === 'shorten') {
    return (txt, len = 100) => {
      if (txt.length > len) {
        return txt.slice(0, len) + '...';
      } else {
        return txt;
      }
    };
  }

  if (type === 'combined') {
    return (txt, spc = ' ') => {
      const resultText = txt
        .split(/-|_|\+/)
        .map((data) => data.charAt(0).toUpperCase() + data.slice(1))
        .join(spc);
      return resultText;
    };
  }
}
