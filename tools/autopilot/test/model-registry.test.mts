import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  MODELS,
  LANES,
  JUDGE_LINEUPS,
  DEFAULT_LINEUP,
  KNOWN_MODEL_IDS,
  KNOWN_JUDGES,
  lane,
  laneFamily,
  resolveLineup,
} from '../../models.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

test('every registered model is a GPT model on the Codex runner', () => {
  for (const model of Object.values(MODELS)) {
    assert.match(model.id, /^gpt-/);
    assert.equal(model.runner, 'codex');
    assert.equal(model.family, 'openai');
  }
});

test('every lineup names unique models the registry knows', () => {
  for (const [name, models] of Object.entries(JUDGE_LINEUPS)) {
    assert.ok(models.length >= 1, `${name} must name at least one judge`);
    assert.equal(new Set(models).size, models.length, `${name} repeats a judge model`);
    for (const id of models) assert.ok(KNOWN_MODEL_IDS.includes(id));
  }
});

test('Terra is the singleton default judge lineup', () => {
  assert.equal(DEFAULT_LINEUP, 'terra');
  assert.deepEqual(resolveLineup().models, [MODELS.terra.id]);
  assert.deepEqual(JUDGE_LINEUPS.terra, [MODELS.terra.id]);
  assert.throws(() => resolveLineup('nonesuch'), /must be one of/);
});

test('every lane resolves through its registered GPT model', () => {
  for (const [laneName, key] of Object.entries(LANES)) {
    const model = MODELS[key as keyof typeof MODELS];
    assert.ok(model, `lane ${laneName} names unknown model ${key}`);
    assert.deepEqual(lane(laneName as any), { runner: 'codex', model: model.id });
    assert.equal(laneFamily(laneName as any), 'openai');
  }
  assert.throws(() => lane('nonesuch' as any), /unknown lane/);
});

test('known judges exactly cover configured lineups', () => {
  assert.deepEqual([...KNOWN_JUDGES], [...new Set(Object.values(JUDGE_LINEUPS).flat())]);
});

test('judge requests xhigh reasoning and the one-million-token window', () => {
  const source = readFileSync(join(REPO, 'tools/judge.mts'), 'utf8');
  assert.match(source, /model_reasoning_effort="xhigh"/);
  assert.match(source, /model_context_window=1000000/);
});

test('the Alpha brief derives model identity from the registry', () => {
  const source = readFileSync(join(REPO, 'briefs/alpha.md'), 'utf8');
  assert.match(source, /tools\/models\.mjs/);
  assert.doesNotMatch(source, /\*\*You are (?:Codex|GPT)/);
});

test('ledger shape checks accept known historical rows independently of active coverage', () => {
  for (const rel of ['tools/level-coverage.mjs', 'tools/step8-guard.mjs']) {
    const source = readFileSync(join(REPO, rel), 'utf8');
    assert.ok(
      !/\bJUDGES\.includes\(record\.model\)/.test(source)
        || /KNOWN_JUDGES\.includes\(record\.model\)/.test(source),
      `${rel} validates adjudication shape against only the active lineup`,
    );
  }
});
