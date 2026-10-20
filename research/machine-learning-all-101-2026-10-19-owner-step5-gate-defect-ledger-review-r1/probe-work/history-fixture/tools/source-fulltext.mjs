// A source-fetch-check stamp records a completed full-text fetch. URL
// availability can change later without erasing that reviewed source body.
export function verifiedFullText(source) {
  const stamp = source?.fetch_verified;
  return Boolean(stamp && Number.isFinite(Date.parse(stamp.at))
    && Number.isFinite(stamp.bytes) && stamp.bytes > 0
    && ['pdf', 'html', 'text'].includes(stamp.kind)
    && (/^[a-f0-9]{16}$/.test(stamp.sha256_16 ?? '')
      || /^[a-f0-9]{64}$/.test(stamp.sha256 ?? '')));
}

export function deadUrlBlocks(row) {
  return row?.ok !== true && !row?.previously_fetched;
}
