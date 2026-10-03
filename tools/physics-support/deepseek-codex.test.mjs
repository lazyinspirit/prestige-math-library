import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  configureDeepSeekCodexHome,
  DEEPSEEK_CODEX_CATALOG,
  DEEPSEEK_FLASH_MODEL,
} from './deepseek-codex.mjs';

const configure = (env) => {
  const home = mkdtempSync(join(tmpdir(), 'deepseek-codex-test-'));
  const result = configureDeepSeekCodexHome({
    home,
    repo: '/workspace/prestige-math-library',
    env,
    envFile: '/definitely/missing/provider.env',
  });
  return { home, result, config: readFileSync(join(home, 'config.toml'), 'utf8') };
};

test('DeepSeek Codex home selects V4.1 Flash max and prefers Tavily web search', () => {
  const fx = configure({
    DEEPSEEK_API_KEY: 'deepseek-test-secret',
    TAVILY_API_KEY: 'tavily-test-secret',
    FIRECRAWL_API_KEY: 'firecrawl-test-secret',
  });
  try {
    assert.deepEqual(fx.result, { model: 'deepseek-flash', effort: 'max', webProvider: 'tavily' });
    assert.match(fx.config, /model = "deepseek-flash"/);
    assert.match(fx.config, /model_reasoning_effort = "max"/);
    assert.match(fx.config, /wire_api = "responses"/);
    assert.match(fx.config, /default_tools_approval_mode = "approve"/);
    assert.match(fx.config, /enabled_tools = \["web_search"\]/);
    assert.match(fx.config, /TAVILY_API_KEY = "tavily-test-secret"/);
    assert.doesNotMatch(fx.config, /firecrawl-test-secret/);
    assert.equal(statSync(join(fx.home, 'config.toml')).mode & 0o777, 0o600);
    assert.equal(statSync(join(fx.home, 'models.json')).mode & 0o777, 0o600);
  } finally {
    rmSync(fx.home, { recursive: true, force: true });
  }
});

test('DeepSeek Codex home uses Firecrawl when Tavily is unavailable', () => {
  const fx = configure({
    DEEPSEEK_API_KEY: 'deepseek-test-secret',
    FIRECRAWL_API_KEY: 'firecrawl-test-secret',
  });
  try {
    assert.equal(fx.result.webProvider, 'firecrawl');
    assert.match(fx.config, /FIRECRAWL_API_KEY = "firecrawl-test-secret"/);
    assert.doesNotMatch(fx.config, /TAVILY_API_KEY/);
  } finally {
    rmSync(fx.home, { recursive: true, force: true });
  }
});

test('DeepSeek setup refuses to launch without model and live-search credentials', () => {
  for (const [env, pattern] of [
    [{ FIRECRAWL_API_KEY: 'web-only' }, /DEEPSEEK_API_KEY/],
    [{ DEEPSEEK_API_KEY: 'model-only' }, /TAVILY_API_KEY or FIRECRAWL_API_KEY/],
  ]) {
    const home = mkdtempSync(join(tmpdir(), 'deepseek-codex-error-test-'));
    try {
      assert.throws(() => configureDeepSeekCodexHome({
        home,
        repo: '/workspace/prestige-math-library',
        env,
        envFile: '/definitely/missing/provider.env',
      }), pattern);
    } finally {
      rmSync(home, { recursive: true, force: true });
    }
  }
});

test('the local model catalog exposes only the official stable Flash alias at max-capable context', () => {
  assert.equal(DEEPSEEK_FLASH_MODEL, 'deepseek-flash');
  assert.equal(DEEPSEEK_CODEX_CATALOG.models.length, 1);
  const [model] = DEEPSEEK_CODEX_CATALOG.models;
  assert.equal(model.slug, DEEPSEEK_FLASH_MODEL);
  assert.equal(model.context_window, 1_048_576);
  assert.ok(model.supported_reasoning_levels.some(({ effort }) => effort === 'max'));
  assert.equal(model.supports_search_tool, false, 'web access must use the required MCP bridge');
});
