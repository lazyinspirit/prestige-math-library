// Summarize the paired session-judge ledger for the Step-10 owner report.
// The ledger keeps every verdict, while the agreement section compares the
// latest usable verdict for each item/model after any targeted re-judging. A
// later null on the same prompt cannot erase an earlier complete verdict; a
// later true/false verdict always remains decisive.
import { existsSync, readFileSync } from "node:fs";

const argv = process.argv.slice(2);
const ledger = argv[0];
const adjudicationsFlag = argv.indexOf("--adjudications");
const adjudicationsPath = adjudicationsFlag < 0 ? "" : argv[adjudicationsFlag + 1];
if (!ledger || (adjudicationsFlag >= 0 && !adjudicationsPath)) {
  console.error("usage: node tools/judge-compare.mjs research/level<n>-judge.jsonl [--adjudications research/level<n>-judge-adjudications.jsonl]");
  process.exit(2);
}

// JUDGE_LINEUP mirrors tools/judge.mts, judge-sweep.mjs and level-coverage.mjs.
// The lineup is resolved, never assumed; `lineup` is emitted so a saved report
// says which two models it actually compared.
const JUDGE_LINEUPS = Object.freeze({
  "deepseek+terra": ["deepseek-v4-pro", "gpt-5.6-terra"],
});
const lineupName = process.env.JUDGE_LINEUP ?? "deepseek+terra";
const models = JUDGE_LINEUPS[lineupName];
if (!models) {
  console.error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(", ")}; got ${lineupName}`);
  process.exit(2);
}
const [PRIMARY, SECOND] = models;
// Stable, lineup-independent key names: the model each one refers to is named
// by `lineup` in the output rather than baked into the key.
const ONLY_REJECT = Object.freeze({ [PRIMARY]: "primary_only_reject", [SECOND]: "second_only_reject" });
const rows = readFileSync(ledger, "utf8").split("\n").filter(Boolean).map((line, index) => {
  try {
    const row = JSON.parse(line);
    if (typeof row.id !== "string" || typeof row.model !== "string" || typeof row.keep !== "boolean" && row.keep !== null) {
      throw new Error("requires id, model, and boolean-or-null keep");
    }
    return row;
  } catch (error) {
    console.error(`${ledger}:${index + 1}: invalid verdict record — ${String(error)}`);
    process.exit(2);
  }
});

const selected = rows.filter((row) => models.includes(row.model));
const candidateKey = (row) => `${row.id}\u0000${row.model}\u0000${row.context_sha256}`;
// A detection is a model rejection of one exact frozen context. Repeated
// transport-safe ledger writes of that same verdict remain one candidate; a
// later re-judge of changed text has a new context hash and is a new candidate.
const rejectionCandidates = new Map();
for (const row of selected) {
  if (row.keep !== false || typeof row.context_sha256 !== "string" || !row.context_sha256) continue;
  rejectionCandidates.set(candidateKey(row), row);
}
const perModel = Object.fromEntries(models.map((model) => {
  const verdicts = selected.filter((row) => row.model === model);
  return [model, {
    calls: verdicts.length,
    passes: verdicts.filter((row) => row.keep === true).length,
    rejections: verdicts.filter((row) => row.keep === false).length,
    nulls: verdicts.filter((row) => row.keep === null).length,
    rejected_ids: [...new Set(verdicts.filter((row) => row.keep === false).map((row) => row.id))].sort(),
  }];
}));

const latest = new Map();
const history = new Map();
for (const row of selected) {
  const byModel = latest.get(row.id) ?? new Map();
  byModel.set(row.model, row);
  latest.set(row.id, byModel);
  const histories = history.get(row.id) ?? new Map();
  const modelRows = histories.get(row.model) ?? [];
  modelRows.push(row);
  histories.set(row.model, modelRows);
  history.set(row.id, histories);
}
const latestAttemptAgreement = {
  both_pass: [],
  both_reject: [],
  primary_only_reject: [],
  second_only_reject: [],
  incomplete_or_null: [],
};
const latestUsableVerdictAgreement = Object.fromEntries(
  Object.keys(latestAttemptAgreement).map((key) => [key, []]),
);
const contextIntegrity = {
  matching_frozen_context: [],
  mismatched_or_unattested_context: [],
};
const classify = (target, id, byModel) => {
  const primary = byModel.get(PRIMARY)?.keep;
  const second = byModel.get(SECOND)?.keep;
  if (primary === true && second === true) target.both_pass.push(id);
  else if (primary === false && second === false) target.both_reject.push(id);
  else if (primary === false && second === true) target[ONLY_REJECT[PRIMARY]].push(id);
  else if (primary === true && second === false) target[ONLY_REJECT[SECOND]].push(id);
  else target.incomplete_or_null.push(id);
};
for (const [id, byModel] of latest) {
  const primaryRow = byModel.get(PRIMARY);
  const secondRow = byModel.get(SECOND);
  if (primaryRow?.context_sha256 && primaryRow.context_sha256 === secondRow?.context_sha256) {
    contextIntegrity.matching_frozen_context.push(id);
  } else {
    contextIntegrity.mismatched_or_unattested_context.push(id);
  }
  classify(latestAttemptAgreement, id, byModel);
  const usable = new Map();
  for (const model of models) {
    const modelRows = history.get(id)?.get(model) ?? [];
    const raw = modelRows.at(-1);
    const effective = raw?.keep === null && raw.context_sha256
      ? [...modelRows].reverse().find((candidate) =>
          typeof candidate.keep === "boolean" && candidate.context_sha256 === raw.context_sha256,
        ) ?? raw
      : raw;
    usable.set(model, effective);
  }
  classify(latestUsableVerdictAgreement, id, usable);
}
for (const ids of Object.values(latestAttemptAgreement)) ids.sort();
for (const ids of Object.values(latestUsableVerdictAgreement)) ids.sort();
for (const ids of Object.values(contextIntegrity)) ids.sort();

const emptyEffectiveness = () => Object.fromEntries(models.map((model) => [model, {
  unique_rejection_candidates: [...rejectionCandidates.values()].filter((row) => row.model === model).length,
  adjudicated_rejections: 0,
  unadjudicated_rejections: [...rejectionCandidates.values()].filter((row) => row.model === model).length,
  confirmed_fatal: 0,
  fatal_logic: 0,
  fatal_dependency_citation: 0,
  fatal_other: 0,
  confirmed_nonfatal: 0,
  false_positives: 0,
  fatal_confirmation_rate: null,
}]));

let adjudicatedDetectionEffectiveness = {
  adjudications: null,
  status: "requires_adjudications",
  interpretation: "Raw rejection counts are not a fatal-error effectiveness measure. Record one outcome for every model rejection, keyed by id, model, and context_sha256.",
  models: emptyEffectiveness(),
};

if (adjudicationsPath) {
  if (!existsSync(adjudicationsPath)) {
    console.error(`${adjudicationsPath}: adjudications file does not exist`);
    process.exit(2);
  }
  const outcomes = new Map();
  for (const [index, line] of readFileSync(adjudicationsPath, "utf8").split("\n").filter(Boolean).entries()) {
    let row;
    try { row = JSON.parse(line); } catch {
      console.error(`${adjudicationsPath}:${index + 1}: invalid JSON adjudication record`);
      process.exit(2);
    }
    const validOutcome = ["confirmed_fatal", "confirmed_nonfatal", "false_positive"].includes(row.outcome);
    const validFatalType = ["logic", "dependency_citation", "other"].includes(row.defect_type);
    if (
      typeof row.id !== "string" || !models.includes(row.model) ||
      typeof row.context_sha256 !== "string" || !row.context_sha256 || !validOutcome ||
      (row.outcome === "confirmed_fatal" && !validFatalType)
    ) {
      console.error(`${adjudicationsPath}:${index + 1}: requires {id, model, context_sha256, outcome}; confirmed_fatal also requires defect_type logic, dependency_citation, or other`);
      process.exit(2);
    }
    const key = candidateKey(row);
    if (!rejectionCandidates.has(key)) {
      console.error(`${adjudicationsPath}:${index + 1}: does not match a DeepSeek/Terra rejection in ${ledger}`);
      process.exit(2);
    }
    // The final owner decision for a candidate is its last ledger entry.
    outcomes.set(key, row);
  }
  const modelsEffectiveness = emptyEffectiveness();
  for (const [key, candidate] of rejectionCandidates) {
    const stats = modelsEffectiveness[candidate.model];
    const outcome = outcomes.get(key);
    if (!outcome) continue;
    stats.adjudicated_rejections += 1;
    stats.unadjudicated_rejections -= 1;
    if (outcome.outcome === "confirmed_fatal") {
      stats.confirmed_fatal += 1;
      if (outcome.defect_type === "logic") stats.fatal_logic += 1;
      else if (outcome.defect_type === "dependency_citation") stats.fatal_dependency_citation += 1;
      else stats.fatal_other += 1;
    } else if (outcome.outcome === "confirmed_nonfatal") {
      stats.confirmed_nonfatal += 1;
    } else {
      stats.false_positives += 1;
    }
  }
  for (const stats of Object.values(modelsEffectiveness)) {
    stats.fatal_confirmation_rate = stats.adjudicated_rejections
      ? stats.confirmed_fatal / stats.adjudicated_rejections
      : null;
  }
  adjudicatedDetectionEffectiveness = {
    adjudications: adjudicationsPath,
    status: [...rejectionCandidates.keys()].every((key) => outcomes.has(key)) ? "complete" : "partial",
    interpretation: "This compares precision among adjudicated rejection candidates. It cannot measure recall without an independently enumerated set of all fatal defects.",
    models: modelsEffectiveness,
  };
}

process.stdout.write(JSON.stringify({
  ledger,
  lineup: { name: lineupName, primary: PRIMARY, second: SECOND },
  models: perModel,
  latest_attempt_agreement: latestAttemptAgreement,
  latest_usable_verdict_agreement: latestUsableVerdictAgreement,
  latest_context_integrity: contextIntegrity,
  adjudicated_detection_effectiveness: adjudicatedDetectionEffectiveness,
}, null, 2) + "\n");
