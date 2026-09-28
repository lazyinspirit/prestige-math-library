/** Push updates normally; conditional polling also recovers dropped streams and server restarts. */
export function followGraph(getRevision, applyGraph) {
  let running = false, pending = false, closed = false;
  const refresh = async () => {
    if (closed) return;
    if (running) { pending = true; return; }
    running = true;
    try {
      const response = await fetch('/graph.json', {
        headers: { 'If-None-Match': `"${getRevision()}"` }, cache: 'no-store',
        signal: AbortSignal.timeout(20000),
      });
      if (response.status === 304) return;
      if (!response.ok) throw new Error(`Graph refresh failed (${response.status})`);
      const next = await response.json();
      if (!closed && next.revision !== getRevision()) applyGraph(next);
    } catch (error) {
      console.warn('Keeping the displayed galaxy until the next successful refresh.', error);
    } finally {
      running = false;
      if (pending && !closed) { pending = false; void refresh(); }
    }
  };
  const events = new EventSource('/graph-events');
  events.addEventListener('graph', event => {
    if (JSON.parse(event.data).revision !== getRevision()) void refresh();
  });
  const interval = setInterval(() => { if (!document.hidden) void refresh(); }, 30000);
  const onVisibility = () => { if (!document.hidden) void refresh(); };
  document.addEventListener('visibilitychange', onVisibility);
  return () => {
    closed = true; events.close(); clearInterval(interval);
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
