#!/usr/bin/env node

// A single-tool MCP bridge for DeepSeek workflow agents. DeepSeek's Responses
// API currently rejects a continuation when one MCP namespace is represented
// by several tool definitions, so the bridge deliberately exposes one complete
// search-and-fetch operation instead of the larger Firecrawl MCP surface.

const tavilyKey = process.env.TAVILY_API_KEY;
const firecrawlKey = process.env.FIRECRAWL_API_KEY;
if (!tavilyKey && !firecrawlKey) {
  console.error('deepseek-web-mcp: TAVILY_API_KEY or FIRECRAWL_API_KEY is required');
  process.exit(1);
}

const send = (value) => process.stdout.write(`${JSON.stringify(value)}\n`);
const result = (id, value) => send({ jsonrpc: '2.0', id, result: value });
const failure = (id, code, message) => send({ jsonrpc: '2.0', id, error: { code, message } });

const searchTool = {
  name: 'web_search',
  description: 'Search the live web and return titles, URLs, descriptions, and fetched page text. Use this whenever current or authoritative online evidence is needed.',
  inputSchema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      query: { type: 'string', minLength: 1, maxLength: 500 },
      limit: { type: 'integer', minimum: 1, maximum: 10, default: 5 },
      include_domains: { type: 'array', items: { type: 'string' }, maxItems: 20 },
      exclude_domains: { type: 'array', items: { type: 'string' }, maxItems: 20 },
      fetch_content: { type: 'boolean', default: true },
      time_filter: {
        type: 'string',
        description: 'Optional Firecrawl time filter such as qdr:d, qdr:w, qdr:m, or qdr:y.',
      },
    },
    required: ['query'],
  },
  annotations: {
    title: 'Live web search',
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: true,
  },
};

const search = async (args) => {
  if (!args || typeof args.query !== 'string' || !args.query.trim()) {
    throw new Error('query must be a nonempty string');
  }
  if (args.include_domains?.length && args.exclude_domains?.length) {
    throw new Error('include_domains and exclude_domains cannot both be set');
  }
  if (tavilyKey) {
    const timeRange = ({ 'qdr:d': 'day', 'qdr:w': 'week', 'qdr:m': 'month', 'qdr:y': 'year' })[args.time_filter];
    const response = await fetch(process.env.TAVILY_API_URL ?? 'https://api.tavily.com/search', {
      method: 'POST',
      headers: { authorization: `Bearer ${tavilyKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        query: args.query.trim(),
        search_depth: 'advanced',
        max_results: Number.isInteger(args.limit) ? args.limit : 5,
        include_answer: false,
        include_raw_content: args.fetch_content === false ? false : 'markdown',
        ...(args.include_domains?.length ? { include_domains: args.include_domains } : {}),
        ...(args.exclude_domains?.length ? { exclude_domains: args.exclude_domains } : {}),
        ...(timeRange ? { time_range: timeRange } : {}),
      }),
      signal: AbortSignal.timeout(90_000),
    });
    const text = await response.text();
    if (!response.ok) throw new Error(`Tavily HTTP ${response.status}: ${text.slice(0, 500)}`);
    return { provider: 'tavily', ...JSON.parse(text) };
  }

  const body = {
    query: args.query.trim(),
    limit: Number.isInteger(args.limit) ? args.limit : 5,
    sources: [{ type: 'web' }],
    ...(args.include_domains?.length ? { includeDomains: args.include_domains } : {}),
    ...(args.exclude_domains?.length ? { excludeDomains: args.exclude_domains } : {}),
    ...(args.time_filter ? { tbs: args.time_filter } : {}),
    ...(args.fetch_content === false ? {} : { scrapeOptions: { formats: [{ type: 'markdown' }] } }),
  };
  const response = await fetch(process.env.FIRECRAWL_API_URL ?? 'https://api.firecrawl.dev/v2/search', {
    method: 'POST',
    headers: { authorization: `Bearer ${firecrawlKey}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(90_000),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`Firecrawl HTTP ${response.status}: ${text.slice(0, 500)}`);
  const parsed = JSON.parse(text);
  if (parsed.success !== true) throw new Error(parsed.error ?? 'Firecrawl search failed');
  return { provider: 'firecrawl', ...parsed };
};

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  input += chunk;
  for (;;) {
    const newline = input.indexOf('\n');
    if (newline < 0) break;
    const line = input.slice(0, newline).trim();
    input = input.slice(newline + 1);
    if (!line) continue;
    void (async () => {
      let message;
      try { message = JSON.parse(line); }
      catch { return; }
      const { id, method, params } = message;
      if (method === 'notifications/initialized' || method?.startsWith('notifications/')) return;
      if (method === 'initialize') {
        result(id, {
          protocolVersion: params?.protocolVersion ?? '2025-06-18',
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: 'deepseek-web-search', version: '1.0.0' },
        });
      } else if (method === 'ping') {
        result(id, {});
      } else if (method === 'tools/list') {
        result(id, { tools: [searchTool] });
      } else if (method === 'tools/call') {
        if (params?.name !== searchTool.name) {
          failure(id, -32601, `unknown tool ${String(params?.name)}`);
          return;
        }
        try {
          const value = await search(params.arguments);
          result(id, { content: [{ type: 'text', text: JSON.stringify(value) }] });
        } catch (error) {
          result(id, {
            isError: true,
            content: [{ type: 'text', text: String(error?.message ?? error) }],
          });
        }
      } else if (id !== undefined) {
        failure(id, -32601, `unknown method ${String(method)}`);
      }
    })();
  }
});
