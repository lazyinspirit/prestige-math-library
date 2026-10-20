import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
const root = process.cwd(),
  run = "demo",
  id = "lem-continuity-test";
const sha = (s) => createHash("sha256").update(s).digest("hex");
const canon = (x) =>
  Array.isArray(x)
    ? x.map(canon)
    : x && typeof x === "object"
      ? Object.fromEntries(
          Object.keys(x)
            .sort()
            .map((k) => [k, canon(x[k])]),
        )
      : x;
const hash = (x) => sha(JSON.stringify(canon(x)));
const base = path.dirname(new URL(import.meta.url).pathname);
function fixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "step3-continuity-"));
  for (const p of ["tools", "research", "items"])
    fs.mkdirSync(path.join(dir, p));
  const rewrite = (c) =>
    c.replace(
      /from ["']\.\/([^"']+)["']/g,
      (_, p) =>
        `from '${pathToFileURL(p === "step3-owner-rehomes.mjs" && !fs.existsSync(path.join(root, "tools", p)) ? path.join(root, "research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/resume-20261011/integration/gate1-repair/rehome-support", p) : path.join(root, "tools", p))}'`,
    );
  fs.writeFileSync(
    path.join(dir, "tools", "helper.mjs"),
    rewrite(
      fs.readFileSync(
        path.join(base, "step3-owner-source-identical-continuity.mjs"),
        "utf8",
      ),
    ),
  );
  fs.writeFileSync(
    path.join(dir, "tools", "proof-contract.mjs"),
    rewrite(
      fs.readFileSync(path.join(root, "tools", "proof-contract.mjs"), "utf8"),
    ),
  );
  const item = `---\nid: ${id}\nkind: lemma\ndeps: []\n---\n\n## Statement\n\nThe integer zero equals itself.\n\n## Facts & Assumptions\n\n**Given:** Zero.\n\n## Proof\n\n1.1 Zero is zero. [given]\n\n2.1 This is the claim. [step 1.1] ∎\n`;
  fs.writeFileSync(path.join(dir, "items", id + ".md"), item);
  const contract = {
    citations: [],
    derivations: [
      { id: "first", step: "1.1", claim: "Zero is zero.", inputs: ["given"] },
      { id: "last", step: "2.1", claim: "The claim.", inputs: ["1.1"] },
    ],
    routine_steps: [],
    boundaries: [
      "empty",
      "zero",
      "one",
      "degenerate",
      "endpoints",
      "nonempty-choice",
      "iff-forward",
      "iff-reverse",
    ].map((c) => ({
      case: c,
      status: "not_applicable",
      reason: "No additional parameter is asserted.",
    })),
  };
  fs.writeFileSync(
    path.join(dir, "research", `${run}-batch-1.proof-contracts.json`),
    JSON.stringify({ version: 1, scope: [id], contracts: { [id]: contract } }),
  );
  const manifest = {
    id,
    statement: "The integer zero equals itself.",
    deps: [],
    dependency_level: 2,
  };
  fs.writeFileSync(
    path.join(dir, "research", `${run}-batch-1.pages.json`),
    JSON.stringify([{ id: "test", items: [manifest] }]),
  );
  const current = {
      item_sha256: sha(item),
      contract_sha256: hash(contract),
      manifest_sha256: hash({ ...manifest, __step4_page_id: "test" }),
    },
    before = { ...current, manifest_sha256: "0".repeat(64) },
    target = {
      obligation: "touched:1:" + id,
      id,
      batch: "1",
      route: "touched",
      added: false,
    },
    decision = {
      obligation: target.obligation,
      id,
      route: "touched",
      verdict: "accepted_repair",
      defect_ids: ["native-repair"],
      subject_sha256: hash(current),
    };
  function ref(name, value) {
    const file = "research/" + name;
    fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
    fs.writeFileSync(
      path.join(dir, file),
      typeof value === "string" ? value : JSON.stringify(value),
    );
    return { path: file, sha256: sha(fs.readFileSync(path.join(dir, file))) };
  }
  const entry = {
    version: 1,
    policy: "step3-source-identical-acceptance-continuity-v1",
    run,
    id,
    obligation: target.obligation,
    post_reader_carrier_sha256: hash(before),
    target_sha256: hash(target),
    current_carrier_sha256: hash(current),
    historical_manifest_delta_unknown: true,
    independent_execution_coverage_adopted: false,
    post_reader_snapshot: ref(`${run}-step3-hash-1-post.json`, {
      version: 2,
      run,
      batch: "1",
      label: "post",
      hashes: { [id]: before },
    }),
    native_result: ref(`${run}-dispatch/alpha-3a-batch-1.result.json`, {
      run,
      role: "alpha",
      ok: true,
      exit_code: 0,
      covers: ["1"],
      terminal_summary: { task_completed: true, task_aborted: false },
    }),
    native_report: ref(
      `${run}-alpha-batch-1-3a.md`,
      "Native report reviewed " + id,
    ),
    native_assignment: ref(
      `${run}-alpha-batch-1-3a-order.task.md`,
      "Native touched assignment " + id,
    ),
    accepted_decision_archive: ref("decisions.json", {
      run,
      decisions: [decision],
    }),
    accepted_decision_sha256: hash(decision),
  };
  return { dir, entry, decision, target, before, current, contract, ref };
}
async function evaluate(f) {
  const m = await import(
    pathToFileURL(path.join(f.dir, "tools", "helper.mjs"))
  );
  return m.sourceIdenticalAcceptanceContinuity(
    f.dir,
    run,
    f.decision,
    f.target,
    f.before,
    f.current,
    f.entry,
  );
}
test("source-identical native acceptance survives faithful metadata change", async () => {
  const f = fixture();
  try {
    assert.equal(await evaluate(f), true);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
test("stale current carrier fails", async () => {
  const f = fixture();
  f.entry.current_carrier_sha256 = "0".repeat(64);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
test("changed proof bytes fail even if entry is refreshed", async () => {
  const f = fixture();
  fs.appendFileSync(
    path.join(f.dir, "items", id + ".md"),
    "\nChanged proof.\n",
  );
  f.current.item_sha256 = sha(
    fs.readFileSync(path.join(f.dir, "items", id + ".md")),
  );
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
test("missing genuine native coverage fails", async () => {
  const f = fixture();
  f.entry.native_result = f.ref("failed.json", {
    run,
    role: "alpha",
    ok: false,
    exit_code: 1,
    covers: ["1"],
  });
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
test("unsupported contract input fails actual native strict validation", async () => {
  const f = fixture();
  f.contract.derivations[1].inputs.push("F99");
  fs.writeFileSync(
    path.join(f.dir, "research", `${run}-batch-1.proof-contracts.json`),
    JSON.stringify({
      version: 1,
      scope: [id],
      contracts: { [id]: f.contract },
    }),
  );
  f.current.contract_sha256 = hash(f.contract);
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});

test("invalid rehome receipt cannot authorize a new current home", async () => {
  const f = fixture();
  fs.writeFileSync(
    path.join(f.dir, "research", `${run}-step3-owner-rehomes.json`),
    JSON.stringify({ version: 1, run, items: [] }),
  );
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});

test("hash-proven source provenance metadata change preserves identical body", async () => {
  const f = fixture();
  const itemPath = path.join(f.dir, "items", id + ".md");
  const before = fs.readFileSync(itemPath, "utf8");
  fs.writeFileSync(path.join(f.dir, "research", "source-before.md"), before);
  f.entry.source_metadata_before = {
    path: "research/source-before.md",
    sha256: sha(before),
  };
  fs.writeFileSync(
    itemPath,
    before.replace(
      "kind: lemma\n",
      "kind: lemma\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\n",
    ),
  );
  f.current.item_sha256 = sha(fs.readFileSync(itemPath));
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), true);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
test("hash-proven preimage cannot disguise a changed mathematical assumption", async () => {
  const f = fixture();
  const itemPath = path.join(f.dir, "items", id + ".md");
  const before = fs.readFileSync(itemPath, "utf8");
  fs.writeFileSync(path.join(f.dir, "research", "source-before.md"), before);
  f.entry.source_metadata_before = {
    path: "research/source-before.md",
    sha256: sha(before),
  };
  fs.writeFileSync(
    itemPath,
    before.replace(
      "kind: lemma\n",
      "kind: lemma\naxiom_use: Arbitrary Choice newly assumed.\n",
    ),
  );
  f.current.item_sha256 = sha(fs.readFileSync(itemPath));
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});

test("source metadata continuity cannot invent a new audit date", async () => {
  const f = fixture();
  const itemPath = path.join(f.dir, "items", id + ".md");
  const before = fs.readFileSync(itemPath, "utf8");
  fs.writeFileSync(path.join(f.dir, "research", "source-before.md"), before);
  f.entry.source_metadata_before = {
    path: "research/source-before.md",
    sha256: sha(before),
  };
  fs.writeFileSync(
    itemPath,
    before.replace(
      "kind: lemma\n",
      "kind: lemma\nverification:\n  audited: 2026-10-12\n",
    ),
  );
  f.current.item_sha256 = sha(fs.readFileSync(itemPath));
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});

test("missing contract on a proof-bearing lemma is rejected", async () => {
  const f = fixture();
  fs.writeFileSync(
    path.join(f.dir, "research", `${run}-batch-1.proof-contracts.json`),
    JSON.stringify({ version: 1, scope: [], contracts: {} }),
  );
  f.current.contract_sha256 = hash(null);
  f.before.contract_sha256 = hash(null);
  f.entry.post_reader_carrier_sha256 = hash(f.before);
  const postPath = path.join(f.dir, f.entry.post_reader_snapshot.path);
  fs.writeFileSync(
    postPath,
    JSON.stringify({
      version: 2,
      run,
      batch: "1",
      label: "post",
      hashes: { [id]: f.before },
    }),
  );
  f.entry.post_reader_snapshot.sha256 = sha(fs.readFileSync(postPath));
  f.entry.current_carrier_sha256 = hash(f.current);
  try {
    assert.equal(await evaluate(f), false);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});

test("unmatched continuity entries perform no filesystem or rehome reads", async () => {
  const f = fixture();
  try {
    const spyPath = path.join(f.dir, "tools", "read-spy.mjs");
    fs.writeFileSync(spyPath, `export const calls = [];
export function readFileSync() { calls.push("readFileSync"); throw Error("unexpected read"); }
export function existsSync() { calls.push("existsSync"); throw Error("unexpected existence check"); }
export function loadStep3OwnerRehomes() { calls.push("loadStep3OwnerRehomes"); throw Error("unexpected frontier scan"); }
export function ownerRehomeCarrierBatch() { calls.push("ownerRehomeCarrierBatch"); throw Error("unexpected carrier lookup"); }
`);
    const spyUrl = pathToFileURL(spyPath).href;
    const helperPath = path.join(f.dir, "tools", "helper.mjs");
    let code = fs.readFileSync(helperPath, "utf8");
    code = code.replace(/from ["']node:fs["']/g, `from '${spyUrl}'`)
      .replace(/from ["'][^"']*step3-owner-rehomes\.mjs["']/g, `from '${spyUrl}'`);
    fs.writeFileSync(helperPath, code);
    const original = f.entry;
    for (const entry of [
      { ...original, id: "lem-another-subject" },
      { ...original, obligation: "touched:2:" + id },
      { ...original, run: "another-run" },
      null,
    ]) {
      f.entry = entry;
      assert.equal(await evaluate(f), false);
    }
    const spy = await import(spyUrl);
    assert.deepEqual(spy.calls, []);
  } finally {
    fs.rmSync(f.dir, { recursive: true, force: true });
  }
});
