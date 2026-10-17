import { sourceDropped } from './source-resolution.mjs';

// Extract citation URLs from decoded coverage data, not serialized JSON logs.
export function citationUrls(value, { coverage = false } = {}) {
  const urls = new Set();
  function visit(node) {
    if (typeof node === 'string') {
      for (const match of node.matchAll(/https?:\/\/[^\s"'<>`\]\\]+/g)) {
        const url = match[0].replace(/[,.;:]+$/g, '');
        try { urls.add(new URL(url).href); } catch { /* not a URL */ }
      }
    } else if (Array.isArray(node)) node.forEach(visit);
    else if (node && typeof node === 'object') {
      // A dropped source is retained as evidence, not a reader-facing citation.
      // Its replacement citations must be active source records of their own.
      if (coverage && sourceDropped(node)) return;
      for (const [key, child] of Object.entries(node)) {
        // Diagnostic history is evidence, not a reader-facing citation.
        if (coverage && (key.startsWith('historical_')
          || ['checks', 'recovery_attempts', 'failed_url_attempts', 'source_resolution', 'retrieval_history'].includes(key))) continue;
        if (coverage && key === 'candidate_dispositions' && Array.isArray(child)) {
          // Failed/unselected search candidates are retained as retrieval
          // evidence. Keep included, context-only and unknown dispositions in
          // the sweep; active sources elsewhere are always traversed normally.
          for (const candidate of child) {
            const disposition = candidate?.disposition;
            if (typeof disposition === 'string'
              && (/^retrieval-failed(?:-|$)/.test(disposition)
                || /^not-selected(?:-|$)/.test(disposition)
                || disposition === 'screened-out')) continue;
            visit(candidate);
          }
          continue;
        }
        visit(child);
      }
    }
  }
  visit(value);
  return urls;
}
