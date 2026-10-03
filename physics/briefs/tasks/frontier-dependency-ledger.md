# Physics content contract

This is a physics-workspace assignment. Read SCHEMA.md, CLAUDE.md, and
../PHYSICS-CONTENT-MODEL.md. The class-specific rules below override mathematical
proof-only wording in the inherited task:

- Use domain and library classifications, and dependency_roles on local items.
- postulate (post-): explicit adopted assumption, sources and physical_scope;
  review formulation, scope, sources, non_derivation. No proof required.
- experiment (exp-): reported setup, procedure, observations, uncertainty,
  interpretation and empirical_result. Review every field against retrieved
  source text. Do not fabricate observations or prove measured outcomes.
- physical-theorem (pthm-) and thought-experiment (texp-): identical complete
  conditional proofs, explicit physical_scope, and inherited empirical_premises.
- Mathematical items retain all ordinary mathematical proof obligations and
  cannot depend on physics. Imported mathematical items and pages are read-only.
- Nonproof item contracts use physics_review fields with verdict and concrete
  evidence as specified in SCHEMA.md; do not create fictitious proof worksheets.
- Relations (support/testing/motivation/replication/challenge) are not deps.
- Changes to Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications change the public physical interface and require direct-consumer review. Proofs, citations, and audit stamps alone do not propagate.
- Write only in this workspace. Never modify the root math engine, tools,
  briefs, items, or library. Any genuine math supplier defect is an escalation.

## Required experimental-evidence guidance

Before authoring, reviewing, judging, or adjudicating physical content, read
../PHYSICS-CONTENT-MODEL.md, especially "Statistical evidence and the double-slit
example". Apply its author/judge/adjudicator instructions to every statistical
claim. Separate theoretical distributions, finite observed data, and statistical
inference. Finite agreement does not prove a physical framework, and a rare
outcome or missing visible fringe does not automatically falsify one. Classical
waves also interfere: identify the specific competing model and apparatus
assumptions. Never invent sample sizes, uncertainties, p-values, or power.
Confidence in a source review or conditional proof is not certainty that a theory
is true. Carry sampling and measurement qualifications into downstream claims.

---

# Same-frontier dependency record

The unified ledger is `research/<run>-cross-batch-dependencies.json`.
It covers different batches in this run, including dependencies among pairs
being built in the same frontier. It is separate from the Step-5 verdicts and
the published-consumer ledger.

Step-3 adjudicators must identify every such page prerequisite and item
dependency, including implicit proof uses, well-definedness justifications and
load-bearing forward references. Record exact consumer and supplier IDs, the
required claim/hypotheses, its use/location, and any missing or inadequate support.
An absent declaration is a finding, not permission to omit the dependency.

Write one JSON array per owned consumer batch to
`research/<run>-batch-BATCH.cross-batch-dependencies.json`, even if empty:

```json
[{"kind":"item","consumer":"lem-consumer","supplier":"thm-supplier","status":"open","evidence":"Exact required claim, use/location, mismatch and repair owner."}]
```

Use `kind: page` for page IDs. Use `open`, `verified`, or `removed`; verification
needs a current mathematical check, and removal needs evidence that the use was
actually removed. One row per `(kind, consumer, supplier)`; update it instead of
appending duplicates. Only the consumer's owner edits its input file. Pair
authors sharing a consumer batch run sequentially and preserve existing rows
for sibling pairs. Route outside findings to that owner. Replace inputs
atomically; never edit the unified ledger by hand. Step 8's serial lead may
reconcile all batch inputs after the
owning writers finish. After each input or dependency edit, run:

`node tools/physics-support/frontier-dependency-ledger.mjs refresh --run <run>`

Concurrent refreshes use an exclusive lock; retry a busy lock after the other
merge finishes, never delete another process's lock. Rechecks and later authorized
writers maintain these same rows immediately when dependencies change. Read-only
reviewers report updates to the owning writer and do not write ledger files.
Do not broaden mathematical edit authority to satisfy bookkeeping.

The Step-3b final gate and Step-8 join require an input for every batch and a review
row for every declared cross-batch edge. An empty input is valid only when that
consumer batch has no such dependencies.

Step 8's lead refreshes and reads the unified ledger before reviewing scope or
impact. Reconcile open findings, orphaned reviews, missing batch reviews and any
`removed` row whose declaration/use persists. Verify affected notes against
current files; neither a recorded edge nor an old `verified` note proves adequacy.
Record dispositions in the owning input rows and Step-8 report. Do not replace
the required Step-5 edge verdicts or Step-8 certification with this ledger.
