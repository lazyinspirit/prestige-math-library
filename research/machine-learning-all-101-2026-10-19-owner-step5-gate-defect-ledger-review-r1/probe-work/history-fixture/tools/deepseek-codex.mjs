import { chmodSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { providerEnvFile } from './paths.mjs';

export const DEEPSEEK_FLASH_MODEL = 'deepseek-flash';

// Minimal form of DeepSeek's official Codex catalog entry. The stable
// `deepseek-flash` alias serves V4.1 Flash as of 2026-09-10.
export const DEEPSEEK_CODEX_CATALOG = Object.freeze({
  models: [Object.freeze({
    slug: DEEPSEEK_FLASH_MODEL,
    prefer_websockets: false,
    support_verbosity: true,
    default_verbosity: 'low',
    apply_patch_tool_type: 'freeform',
    web_search_tool_type: 'text',
    input_modalities: ['text'],
    supports_image_detail_original: false,
    truncation_policy: { mode: 'tokens', limit: 10_000 },
    supports_parallel_tool_calls: true,
    tool_mode: null,
    multi_agent_version: 'v2',
    use_responses_lite: false,
    include_skills_usage_instructions: false,
    auto_review_model_override: null,
    context_window: 1_048_576,
    max_context_window: 1_048_576,
    effective_context_window_percent: 95,
    auto_compact_token_limit: null,
    comp_hash: '3000',
    reasoning_summary_format: 'experimental',
    default_reasoning_summary: 'none',
    display_name: 'DeepSeek-V4.1-Flash',
    description: 'DeepSeek V4.1 Flash agentic model.',
    default_reasoning_level: 'high',
    supported_reasoning_levels: [
      { effort: 'low', description: 'Fast responses with lighter reasoning' },
      { effort: 'high', description: 'Extra reasoning depth' },
      { effort: 'max', description: 'Maximum reasoning depth' },
    ],
    shell_type: 'shell_command',
    visibility: 'list',
    minimal_client_version: '0.144.0',
    supported_in_api: true,
    availability_nux: null,
    upgrade: null,
    priority: 1,
    model_messages: {
      instructions_template: 'You are Codex, an agent based on DeepSeek-V4.1-Flash. Follow the supplied instructions and complete the task.',
    },
    experimental_supported_tools: [],
    supports_search_tool: false,
    base_instructions: 'You are Codex, an agent based on DeepSeek-V4.1-Flash. Follow the supplied instructions and complete the task.',
  })],
});

const envValue = (name, env = process.env, path = providerEnvFile()) => {
  if (env[name]) return env[name];
  if (!path || !existsSync(path)) return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const line = readFileSync(path, 'utf8').split(/\r?\n/)
    .find((candidate) => new RegExp(`^(?:export\\s+)?${escaped}\\s*=`).test(candidate));
  if (!line) return null;
  return line.replace(new RegExp(`^(?:export\\s+)?${escaped}\\s*=\\s*`), '')
    .replace(/^(["'])(.*)\1$/, '$2').trim();
};

const toml = (value) => JSON.stringify(String(value));

/** Configure one isolated Codex home for DeepSeek and one approved read-only
 * web tool. Tavily is preferred when configured; Firecrawl is the fallback. */
export function configureDeepSeekCodexHome({ home, repo, env = process.env, envFile = providerEnvFile() }) {
  const deepseekKey = envValue('DEEPSEEK_API_KEY', env, envFile);
  if (!deepseekKey) throw new Error(`DeepSeek profile requires DEEPSEEK_API_KEY in the environment or ${envFile}`);
  const tavilyKey = envValue('TAVILY_API_KEY', env, envFile);
  const firecrawlKey = envValue('FIRECRAWL_API_KEY', env, envFile);
  if (!tavilyKey && !firecrawlKey) {
    throw new Error(`DeepSeek profile requires TAVILY_API_KEY or FIRECRAWL_API_KEY for web search in the environment or ${envFile}`);
  }
  const modelsPath = join(home, 'models.json');
  writeFileSync(modelsPath, `${JSON.stringify(DEEPSEEK_CODEX_CATALOG, null, 2)}\n`, { mode: 0o600 });
  const webProvider = tavilyKey ? 'tavily' : 'firecrawl';
  const webKey = tavilyKey ?? firecrawlKey;
  const config = [
    `model = ${toml(DEEPSEEK_FLASH_MODEL)}`,
    'model_provider = "deepseek"',
    'preferred_auth_method = "apikey"',
    'forced_login_method = "api"',
    'model_reasoning_effort = "max"',
    'web_search = "disabled"',
    `model_catalog_json = ${toml(modelsPath)}`,
    '',
    '[model_providers.deepseek]',
    'name = "deepseek"',
    'base_url = "https://api.deepseek.com/"',
    'wire_api = "responses"',
    `experimental_bearer_token = ${toml(deepseekKey)}`,
    '',
    '[mcp_servers.web_search]',
    'command = "node"',
    `args = [${toml(join(repo, 'tools/deepseek-web-mcp.mjs'))}]`,
    'required = true',
    'startup_timeout_sec = 20',
    'tool_timeout_sec = 120',
    'default_tools_approval_mode = "approve"',
    'enabled_tools = ["web_search"]',
    '',
    '[mcp_servers.web_search.env]',
    `${tavilyKey ? 'TAVILY_API_KEY' : 'FIRECRAWL_API_KEY'} = ${toml(webKey)}`,
    '',
  ].join('\n');
  const configPath = join(home, 'config.toml');
  writeFileSync(configPath, config, { mode: 0o600 });
  chmodSync(configPath, 0o600);
  return { model: DEEPSEEK_FLASH_MODEL, effort: 'max', webProvider };
}
