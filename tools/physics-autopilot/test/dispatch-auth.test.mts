import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { persistRotatedCodexAuth } from '../../physics-support/dispatch-auth.mjs';

test('unchanged isolated auth cannot overwrite a newer login', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dispatch-auth-'));
  try {
    const source = join(dir, 'auth.json');
    const temporary = join(dir, 'isolated.json');
    const initial = Buffer.from('old');
    writeFileSync(source, 'new-login');
    writeFileSync(temporary, initial);
    assert.equal(persistRotatedCodexAuth({ source, temporary, initial, succeeded: true }), false);
    assert.equal(readFileSync(source, 'utf8'), 'new-login');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('only the first successful rotation of a launch snapshot persists', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dispatch-auth-'));
  try {
    const source = join(dir, 'auth.json');
    const first = join(dir, 'first.json');
    const second = join(dir, 'second.json');
    const initial = Buffer.from('old');
    writeFileSync(source, initial);
    writeFileSync(first, 'first-rotation');
    writeFileSync(second, 'second-rotation');
    assert.equal(persistRotatedCodexAuth({ source, temporary: first, initial, succeeded: true }), true);
    assert.equal(persistRotatedCodexAuth({ source, temporary: second, initial, succeeded: true }), false);
    assert.equal(readFileSync(source, 'utf8'), 'first-rotation');
    assert.equal(statSync(source).mode & 0o777, 0o600);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('failed dispatch cannot persist its isolated auth', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dispatch-auth-'));
  try {
    const source = join(dir, 'auth.json');
    const temporary = join(dir, 'isolated.json');
    const initial = Buffer.from('old');
    writeFileSync(source, initial);
    writeFileSync(temporary, 'rotated');
    assert.equal(persistRotatedCodexAuth({ source, temporary, initial, succeeded: false }), false);
    assert.equal(readFileSync(source, 'utf8'), 'old');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
