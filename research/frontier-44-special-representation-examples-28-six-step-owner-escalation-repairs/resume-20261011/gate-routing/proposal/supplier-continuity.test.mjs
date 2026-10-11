import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
const repo = process.cwd(),
  run = "fixture",
  base = path.dirname(new URL(import.meta.url).pathname),
  sha = (s) => createHash("sha256").update(s).digest("hex"),
  canon = (x) =>
    Array.isArray(x)
      ? x.map(canon)
      : x && typeof x === "object"
        ? Object.fromEntries(
            Object.keys(x)
              .sort()
              .map((k) => [k, canon(x[k])]),
          )
        : x,
  hash = (x) => sha(JSON.stringify(canon(x)));
function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "supplier-continuity-"));
  function write(p, value) {
    fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
    fs.writeFileSync(
      path.join(root, p),
      typeof value === "string" ? value : JSON.stringify(value),
    );
    return { path: p, sha256: sha(fs.readFileSync(path.join(root, p))) };
  }
  const consumer =
      "---\nid: lem-consumer\ndeps: [lem-supplier]\n---\n\n## Statement\nThe supported conclusion.\n",
    before = "---\nid: lem-supplier\ndeps: []\n---\nOld incomplete supplier.\n",
    after =
      "---\nid: lem-supplier\ndeps: [lem-proof]\n---\nCompleted supplier application.\n",
    proof =
      "---\nid: lem-proof\ndeps: []\n---\n\n## Proof\nActual complete proof fixture.\n";
  const source = write("items/lem-consumer.md", consumer),
    old = write("research/before.md", before),
    currentSupplier = write("items/lem-supplier.md", after),
    proofRef = write("items/lem-proof.md", proof);
  const cur = {
      item_sha256: sha(consumer),
      contract_sha256: "a".repeat(64),
      manifest_sha256: "b".repeat(64),
    },
    finding = {
      obligation: "refuter:1:1",
      id: "lem-consumer",
      defect: "unlicensed-inference",
      severity: "fatal",
      observed_sha256: hash(cur),
    },
    target = { ...finding, route: "flagged" },
    decision = {
      obligation: finding.obligation,
      id: "lem-consumer",
      route: "flagged",
      verdict: "confirmed_fatal",
      defect_ids: ["consumer-fixed"],
    },
    row = {
      run,
      defect_id: "consumer-fixed",
      subject: "lem-consumer",
      disposition: "fixed",
    },
    supplierRow = {
      run,
      defect_id: "supplier-fixed",
      subject: "lem-supplier",
      disposition: "fixed",
    };
  write(
    "research/defect-ledger.jsonl",
    JSON.stringify(row) + "\n" + JSON.stringify(supplierRow) + "\n",
  );
  const scope = write("research/scope.json", { refuter_findings: [finding] }),
    snapshot = write("research/snapshot.json", {
      version: 2,
      run,
      label: "post",
      hashes: { "lem-supplier": { item_sha256: sha(before) } },
    }),
    packet = write("research/repair.json", {
      version: 1,
      run,
      records: [
        {
          obligation: finding.obligation,
          subject: "lem-consumer",
          current_raw_sha256: sha(consumer),
          historical_finding: { was_true: true, false_positive: false },
          immutable_source_fields_preserved: true,
          remaining_mathematical_prerequisites: [],
          confidence: { value: 1 },
          resolution:
            "The allocated owner supplied the missing prerequisite and checked its exact unchanged consumer use; this is a synthetic unit fixture, not native audit evidence.",
        },
      ],
      supplier_bindings: { "lem-proof": sha(proof) },
    });
  const entry = {
    version: 1,
    policy: "step3-owner-supplier-repair-continuity-v1",
    run,
    id: "lem-consumer",
    obligation: finding.obligation,
    target_sha256: hash(target),
    current_carrier_sha256: hash(cur),
    historical_finding_preserved: true,
    consumer_source_unchanged: true,
    independent_execution_coverage_adopted: false,
    consumer_defect_id: row.defect_id,
    consumer_ledger_row_sha256: hash(row),
    native_scope: scope,
    consumer_source: source,
    completed_owner_repair: packet,
    completed_supplier_proof: proofRef,
    completed_supplier_proof_id: "lem-proof",
    supplier_id: "lem-supplier",
    supplier_defect_id: supplierRow.defect_id,
    supplier_ledger_row_sha256: hash(supplierRow),
    supplier_before: old,
    supplier_after: currentSupplier,
    supplier_before_snapshot: snapshot,
    supplier_dependency_path: ["lem-supplier"],
  };
  let code = fs
    .readFileSync(
      path.join(base, "step3-owner-supplier-repair-continuity.mjs"),
      "utf8",
    )
    .replace(
      /from ["']\.\/([^"']+)["']/g,
      (_, s) => `from '${pathToFileURL(path.join(repo, "tools", s))}'`,
    );
  write("helper.mjs", code);
  return { root, entry, decision, target, cur, row, supplierRow, write };
}
async function check(f) {
  const m = await import(pathToFileURL(path.join(f.root, "helper.mjs")));
  return m.ownerSupplierRepairContinuity(
    f.root,
    run,
    f.decision,
    f.target,
    f.cur,
    [f.row],
    f.entry,
  );
}
async function runTest(change, wanted) {
  const f = fixture();
  try {
    change(f);
    assert.equal(await check(f), wanted);
  } finally {
    fs.rmSync(f.root, { recursive: true, force: true });
  }
}
test("genuine completed supplier repair permits unchanged consumer", () =>
  runTest(() => {}, true));
test("stale consumer target rejected", () =>
  runTest((f) => {
    f.entry.target_sha256 = "0".repeat(64);
  }, false));
test("changed consumer claim rejected even after source ref refresh", () =>
  runTest((f) => {
    f.entry.consumer_source = f.write(
      "items/lem-consumer.md",
      "Changed consumer claim.",
    );
  }, false));
test("unrepaired supplier ledger disposition rejected", () =>
  runTest((f) => {
    f.supplierRow.disposition = "open";
    f.entry.supplier_ledger_row_sha256 = hash(f.supplierRow);
    f.write(
      "research/defect-ledger.jsonl",
      JSON.stringify(f.row) + "\n" + JSON.stringify(f.supplierRow) + "\n",
    );
  }, false));
test("incomplete owner consumer-use evidence rejected", () =>
  runTest((f) => {
    f.entry.completed_owner_repair = f.write("research/repair.json", {
      version: 1,
      run,
      records: [],
      supplier_bindings: {},
    });
  }, false));
test("unrelated repaired supplier path rejected", () =>
  runTest((f) => {
    f.entry.supplier_dependency_path = ["lem-proof", "lem-supplier"];
  }, false));
test("modified completed proof rejected", () =>
  runTest((f) => {
    f.write("items/lem-proof.md", "Unproved revised helper.");
  }, false));
