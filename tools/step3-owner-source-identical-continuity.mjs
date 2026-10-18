// Explicit continuity of an existing native acceptance; never new audit coverage.
import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import {
  splitFrontmatter,
  sectionText,
  numberedProofSteps,
} from "./facts-block.mjs";
import { yaml } from "./pathway-lib.mjs";
import {
  loadStep3OwnerRehomes,
  ownerRehomeCarrierBatch,
} from "./step3-owner-rehomes.mjs";
const canonical = (x) =>
  Array.isArray(x)
    ? x.map(canonical)
    : x && typeof x === "object"
      ? Object.fromEntries(
          Object.keys(x)
            .sort()
            .map((k) => [k, canonical(x[k])]),
        )
      : x;
const sha = (x) => createHash("sha256").update(x).digest("hex");
const hash = (x) => sha(JSON.stringify(canonical(x)) ?? "undefined");
const norm = (x) =>
  String(x ?? "")
    .replace(/\s+/g, " ")
    .trim();
const refText = (root, ref) => {
  if (
    typeof ref?.path !== "string" ||
    !ref.path.startsWith("research/") ||
    (!ref.path.endsWith(".json") && !ref.path.endsWith(".md"))
  )
    return null;
  const p = resolve(root, ref.path);
  if (!p.startsWith(resolve(root) + "/")) return null;
  if (!existsSync(p)) return null;
  const raw = readFileSync(p, "utf8");
  return sha(raw) === ref.sha256 ? raw : null;
};
export function sourceIdenticalAcceptanceContinuity(
  root,
  run,
  decision,
  target,
  before,
  current,
  entry,
) {
  // Most entries belong to another decision. Reject them before any source or
  // whole-frontier rehome reads; the full checks below still govern a match.
  if (
    !entry ||
    entry.version !== 1 ||
    entry.policy !== "step3-source-identical-acceptance-continuity-v1" ||
    entry.run !== run ||
    entry.id !== decision?.id ||
    entry.obligation !== decision?.obligation
  )
    return false;
  try {
    const rehomes = loadStep3OwnerRehomes(root, run);
    const currentBatch = ownerRehomeCarrierBatch(
      rehomes,
      decision.id,
      target.batch,
    );
    const rehome = rehomes.find(
      (row) =>
        row.id === decision.id && row.from_batch === String(target.batch),
    );
    const unchangedMechanicalSource = (text) =>
      text
        .replace(/^dependency_level:.*\n/gm, "")
        .replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, "");
    const rehomeBefore = rehome ? refText(root, rehome.before_source) : null;
    const rehomeAfter = rehome ? refText(root, rehome.after_source) : null;
    const liveText = readFileSync(
      join(root, "items", decision.id + ".md"),
      "utf8",
    );
    // This separate branch requires a complete hash-proven source preimage.
    // A changed hash alone never proves that a source change was metadata.
    const metadataBefore = entry?.source_metadata_before
      ? refText(root, entry.source_metadata_before)
      : null;
    const metadataSourceContinuous = (() => {
      if (!metadataBefore || sha(metadataBefore) !== before.item_sha256)
        return false;
      const oldSource = splitFrontmatter(metadataBefore);
      const newSource = splitFrontmatter(liveText);
      if (oldSource.body !== newSource.body) return false;
      const oldMeta = yaml().parse(oldSource.fm) ?? {};
      const newMeta = yaml().parse(newSource.fm) ?? {};
      // Continuity does not create owner/delegated publication or source audits.
      for (const field of [
        "audited",
        "verified",
        "sources_checked",
        "repair",
      ]) {
        if (
          hash(oldMeta.verification?.[field]) !==
          hash(newMeta.verification?.[field])
        )
          return false;
      }
      const projection = (fm) => {
        const {
          dependency_level,
          verification,
          provenance,
          ...mathematicalMetadata
        } = yaml().parse(fm) ?? {};
        return mathematicalMetadata;
      };
      return hash(projection(oldSource.fm)) === hash(projection(newSource.fm));
    })();
    const rawSourceContinuous =
      current.item_sha256 === before.item_sha256 ||
      metadataSourceContinuous ||
      (rehomeBefore &&
        rehomeAfter &&
        sha(rehomeBefore) === before.item_sha256 &&
        unchangedMechanicalSource(rehomeBefore) ===
          unchangedMechanicalSource(rehomeAfter) &&
        unchangedMechanicalSource(rehomeAfter) ===
          unchangedMechanicalSource(liveText));
    if (
      !entry ||
      entry.version !== 1 ||
      entry.policy !== "step3-source-identical-acceptance-continuity-v1" ||
      entry.run !== run ||
      entry.id !== decision.id ||
      entry.obligation !== decision.obligation ||
      decision.verdict !== "accepted_repair" ||
      target.route !== "touched" ||
      target.stabilized ||
      target.added ||
      !before ||
      !current ||
      !before.item_sha256 ||
      !rawSourceContinuous ||
      entry.post_reader_carrier_sha256 !== hash(before) ||
      entry.target_sha256 !== hash(target) ||
      entry.current_carrier_sha256 !== hash(current) ||
      entry.historical_manifest_delta_unknown !== true ||
      entry.independent_execution_coverage_adopted !== false
    )
      return false;
    if (
      entry.post_reader_snapshot?.path !==
        `research/${run}-step3-hash-${target.batch}-post.json` ||
      entry.native_result?.path !==
        `research/${run}-dispatch/alpha-3a-batch-${target.batch}.result.json` ||
      entry.native_report?.path !==
        `research/${run}-alpha-batch-${target.batch}-3a.md` ||
      entry.native_assignment?.path !==
        `research/${run}-alpha-batch-${target.batch}-3a-order.task.md`
    )
      return false;
    const snapshotText = refText(root, entry.post_reader_snapshot),
      nativeText = refText(root, entry.native_result),
      reportText = refText(root, entry.native_report),
      acceptedText = refText(root, entry.accepted_decision_archive),
      assignmentText = refText(root, entry.native_assignment);
    if (
      !snapshotText ||
      !nativeText ||
      !reportText ||
      !acceptedText ||
      !assignmentText
    )
      return false;
    const snap = JSON.parse(snapshotText),
      result = JSON.parse(nativeText),
      accepted = JSON.parse(acceptedText);
    if (
      snap.version !== 2 ||
      snap.run !== run ||
      String(snap.batch) !== String(target.batch) ||
      snap.label !== "post" ||
      hash(snap.hashes?.[target.id]) !== hash(before) ||
      result.run !== run ||
      result.role !== "alpha" ||
      result.ok !== true ||
      result.exit_code !== 0 ||
      result.timed_out === true ||
      !result.covers?.map(String).includes(String(target.batch)) ||
      result.terminal_summary?.task_completed !== true ||
      result.terminal_summary?.task_aborted === true ||
      !assignmentText.includes(target.id) ||
      accepted.run !== run ||
      !accepted.decisions?.some(
        (d) =>
          d.obligation === decision.obligation &&
          d.id === decision.id &&
          d.verdict === "accepted_repair" &&
          hash(d) === entry.accepted_decision_sha256,
      )
    )
      return false;
    const item = readFileSync(join(root, "items", decision.id + ".md"), "utf8");
    if (sha(item) !== current.item_sha256) return false;
    const { fm, body } = splitFrontmatter(item),
      meta = yaml().parse(fm);
    const manifests = JSON.parse(
      readFileSync(
        join(root, "research", `${run}-batch-${currentBatch}.pages.json`),
        "utf8",
      ),
    );
    const pages = Array.isArray(manifests) ? manifests : manifests.pages;
    let row = null;
    for (const page of pages)
      for (const item of page.items ?? [])
        if (item.id === decision.id) {
          if (row) return false;
          row = { ...item, __step4_page_id: page.id };
        }
    const contractFile = join(
      root,
      "research",
      `${run}-batch-${currentBatch}.proof-contracts.json`,
    );
    const contract = JSON.parse(readFileSync(contractFile, "utf8")).contracts?.[
      decision.id
    ];
    if (
      !row ||
      hash(row) !== current.manifest_sha256 ||
      hash(contract ?? null) !== current.contract_sha256 ||
      hash(row.deps ?? []) !== hash(meta.deps ?? [])
    )
      return false;
    const heading =
      meta.kind === "definition" || meta.kind === "algorithm"
        ? "Definition"
        : meta.kind === "example" && sectionText(body, "Example")
          ? "Example"
          : meta.kind === "counterexample"
            ? /^##\s+Statement refuted\s*$/m.test(body) ||
              !norm(sectionText(body, "Statement")) ||
              !norm(sectionText(body, "Proof"))
              ? "Statement refuted"
              : "Statement"
            : meta.kind === "remark" &&
                !sectionText(body, "Statement") &&
                sectionText(body, "Remarks")
              ? "Remarks"
              : "Statement";
    if (
      !norm(sectionText(body, heading)) ||
      norm(row.statement) !== norm(sectionText(body, heading))
    )
      return false;
    if (contract == null) {
      return (
        ["definition", "algorithm", "remark"].includes(meta.kind) &&
        numberedProofSteps(body).length === 0 &&
        before.contract_sha256 === hash(null) &&
        current.contract_sha256 === hash(null)
      );
    }
    // The actual strict validator checks every mapped input, exact citation quote,
    // source declaration and numbered proof step. A receipt asserting pass is insufficient.
    const check = spawnSync(
      process.execPath,
      [
        join(root, "tools", "proof-contract.mjs"),
        contractFile,
        "--strict",
        "--items",
        decision.id,
        "--json",
      ],
      {
        cwd: root,
        encoding: "utf8",
        timeout: 120000,
        maxBuffer: 8 * 1024 * 1024,
      },
    );
    if (check.status !== 0 || check.error) return false;
    const out = JSON.parse(check.stdout);
    return (
      out.ok === true &&
      out.checked?.length === 1 &&
      out.checked[0] === decision.id
    );
  } catch {
    return false;
  }
}
