# Quality controls for future levels

This file defines the permanent, **pre-judge** quality layer added after the
frontier-6 audit. It complements `SCHEMA.md`, `LEVELS.md`, and the human audit;
it does not alter the item frontmatter schema or claim to mechanically prove a
theorem.

## Per-level proof contracts

At Step 1, each Beta creates its namespaced
`research/<run>-batch-<i>.proof-contracts.json`. Its `scope` is every
proof-bearing item in that batch (including proof-bearing examples,
counterexamples, and false statements). Step 5 keeps it current as the Beta
personally authors the final text. Before every whole-level gate, the
engine merges the batch files into `research/<run>-proof-contracts.json` with
`tools/merge-proof-contracts.mjs`, as gate zero of the contract group — a merge
that fails means nothing below it claims to have passed over a stale file. The
merge is the deterministic single-writer handoff, so it rejects duplicate
ownership: one id appearing in two batch contracts is `duplicate-item`. The
merged file has this version-1 shape:

```json
{
  "version": 1,
  "level": "frontier-<n>",
  "scope": ["thm-example"],
  "contracts": {
    "thm-example": {
      "citations": [{
        "fact": "L1",
        "source": "lem-source",
        "source_section": "Statement",
        "quote": "Exact clause from that section",
        "uses": ["1.2", "2.1"]
      }],
      "derivations": [{
        "id": "main-argument",
        "claim": "What this block establishes",
        "step": "1.1",
        "inputs": ["L1", "given", "algebra"]
      }],
      "routine_steps": [],
      "boundaries": [{
        "case": "empty",
        "status": "checked",
        "evidence": "step 1.1"
      }],
      "finite_smoke": [],
      "risk_review": {
        "status": "complete",
        "reviewer": "Alpha",
        "notes": "What the extra refuter checked."
      }
    }
  }
}
```

Each direct wikilink in a `[F#]`, `[A#]`, or `[L#]` fact gets one citation
entry. The `source` must be a dependency the item actually declares — a fact
citing an item absent from `deps`/`justified_by` is
`citation-undeclared-dependency`. `quote` must occur in the cited item's actual
`Statement`, `Statement refuted`, `Definition`, or `Example`, and `uses` lists
every proof step which cites that fact. This enforces faithful citation without
pretending that a substring test establishes the implication from the fact to its
use.

`--strict` is the whole-level gate: a scoped item with no contract at all becomes
an error (`scope-missing-contract`) instead of a warning.

Every numbered step is covered exactly once by a `derivations` or
`routine_steps` entry, and every such entry names one step only. Entries record
the exact fact, earlier step, given, or elementary operation used; they are the durable version of Beta's
proof-obligation map. The example file is
`research/quality-controls.example.json`.

## Boundary worksheet

Each contract disposes of all eight cases: `empty`, `zero`, `one`,
`degenerate`, `endpoints`, `nonempty-choice`, `iff-forward`, and `iff-reverse`.
A case is `checked`, with an anchored statement or step reference, or
`not_applicable`, with a specific reason. “Not applicable” must not conceal an
unexamined endpoint or a reversed implication.

## Finite countermodel smoke tests

For a finite/combinatorial claim, Beta selects an independently computed,
bounded check in `finite_smoke`, and supplies `asserts`, an exact excerpt from
the item connecting the test to its claim. Available checks are:

- `tree-characterisation`
- `forest-edge-component-count`
- `induced-complement-commutes`
- `cyclic-subgroup-lagrange`
- `monotone-map-need-not-preserve-meets`
- `full-subposet-meet-differs-from-ambient`

The last two were added on run `frontier-12`. Until then every registered check
was graph- or group-theoretic, so a level of algebra, analysis and category
theory matched none and the gate reported `0 error(s), 0 check(s)` — green,
having executed nothing. **A green `finite-smoke` is not evidence the gate ran;
read the check count.**

They work because a poset **is** a category, with one arrow per related pair, and
in it a product or pullback is exactly a meet — so a finite poset is a genuine
bounded countermodel search for a limit claim rather than a toy. Both back an
*existence* counterexample ("this can fail"), so `ok` means the witness was
verified to fail as claimed; each also refuses the degenerate readings, reporting
"no meet exists" and "the meet IS preserved" as distinct outcomes. Their
parameters default to the witnesses the citing items construct, so `--self-test`
exercises them with no arguments.

The tool enumerates small finite models only. Passing is **never** proof of the
general result; failing supplies a concrete countermodel or exposes an
implementation/convention mismatch that must be adjudicated before Step 6.
New check types need an independently written implementation, a bounded test,
and an update here and in `ARCHITECTURE.md`.

## High-risk routing

`tools/risk-report.mjs` scores transparent structural signals: dependency and
proof-step count, biconditionals, existence/well-definedness, boundary terms,
induction, quotient constructions, and limiting/completeness language. A score
of at least 5 is high risk; 8 is critical. It routes the item to an additional
Alpha proof-refuter and requires an Alpha `risk_review` disposition before Step
7. The score is a triage signal, not a proof defect and not a license to skip
the normal independent-reader audit.

The disposition is `{status: "complete", reviewer, notes}` and the gate reads
**`notes`**. On `frontier-15`, 33 of 125 reported `risk-review-missing` items
already carried complete, substantive reviews written under the key
`disposition`, and the gate could not tell misfiled work from absent work. Read
the artifacts before concluding a large missing-count means the reviews were
never done; and never write, weaken or invent a rationale to clear this gate —
a `risk_review` that exists to make the gate green is worth less than the red.

Note that **repairing a proof can newly route it here**: the score rises with
step and citation count, so a step-6 repair that writes out a real discharge may
push an item from moderate to high. That happened once on `frontier-15`
(`fs-semisimple-rings-are-commutative`, 4 → 5). Re-run `risk-report` after a
repair pass rather than assuming the routed set is fixed.

## Scope, provenance, and impact closure

Future batch manifests are the scope of record. Before the normal whole-level
gate, run `tools/content-policy.mjs` on every batch manifest. It requires an
`authorship` tag for every in-flight item and makes the generated-claim rule
mechanical: only recorded proof-decomposition lemmas, direct corollaries, and
checkable examples/counterexamples are allowed; only the named parent proof may
depend on a generated lemma; generated corollaries/examples/counterexamples may
not become dependencies. `literature-derived` and `ai-altered` content also
needs a reader-visible `sources.references` URL. An external fallback must
carry the exact source URL, exact sourced statement, failed local route, and
necessity.
Legacy content is deliberately outside this scope, because retroactive
provenance guesses would be dishonest.

`tools/audit-manifest.mjs` now enumerates logical dependencies, well-definedness
discharges, forward references, and external mentions. Alpha's coverage receipt
is generated and verified by `tools/level-coverage.mjs`, which binds the receipt
to a hash of the actual in-flight items and every such relationship. It also
requires the merged proof contract to include every proof-bearing item and both
judge ledgers to contain a complete paired verdict on the same current frozen
context for every scoped item. A `keep=false` verdict needs Alpha's exact-hash
adjudication: missing or `confirmed_fatal` is an error; `confirmed_nonfatal`
and `false_positive` remain visible warnings. Finally it
compares each item's planned `deps`
from the batch manifest against authored `deps`; any difference must be recorded
in the Alpha receipt with exact before/after lists and a concrete reason.

When an item changes, `touchlog.mjs` records a separate public-interface hash.
`tools/impact-audit.mjs` compares two snapshots, computes the transitive reverse
`deps` closure plus direct citation consumers of every changed interface, and
requires Alpha to record a disposition for every affected item. Proof-only
repairs keep their own audit/judge requirements but do not automatically reopen
the whole downstream cone; changes to statements, definitions, facts, remarks,
titles, or dependency metadata do.

## Dependency-spine proof audit

Before the next future level can close, create the independent, hash-bound
receipt for the highest-blast-radius proofs:

```sh
node tools/spine-audit.mjs --template research/dependency-spine-audit.json
# An independent reader fills reviewer and per-proof attestations from disk.
node tools/spine-audit.mjs --receipt research/dependency-spine-audit.json
```

The tool selects proof-bearing items among the 100 largest transitive `deps`
cones. Its receipt lapses whenever an audited proof's mathematical content, or
the selected high-impact scope, changes. `level-coverage.mjs` requires the
current receipt, so a new level cannot silently rely on an unaudited high-fan-out
proof. This is a focused dependency-proof audit, not a replacement for normal
per-item citation checking.

## Canonical-coverage harvest (owner, 2026-08-11)

The proof contract answers "is every step licensed?". It cannot answer "should
this page have had another theorem on it?" — and two published pairs came out
thin for exactly that reason. Each Beta additionally maintains
`research/<run>-batch-<i>.coverage.json`: per A page, at least two independent
treatments (at least one textbook/monograph/full note set), each with the exact
range read and an enumeration of **that source's own** section and named-result
headings, each heading disposed as `included` / `inline` / `already-published` /
`deferred` / `out-of-scope`, the last two with a written per-result reason.

```sh
node tools/coverage-checklist.mjs research/<run>-batch-*.coverage.json
```

Required at **step 2** and **step 6**; a missing checklist is a missing receipt.
Full mechanism and error codes: `ARCHITECTURE.md` §3.11b.

## Gates

Run after Step 5 and again after all Step-6 repairs, before the frozen Step-7
judge context. First merge the current namespaced batch contracts:

```sh
node tools/merge-proof-contracts.mjs --level frontier-<n> research/<run>-proof-contracts.json research/<run>-batch-*.proof-contracts.json
node tools/proof-contract.mjs research/<run>-proof-contracts.json --strict
node tools/finite-smoke.mjs research/<run>-proof-contracts.json
node tools/risk-report.mjs research/<run>-proof-contracts.json   # add --require-reviewed at STEP 6 only
node tools/coverage-checklist.mjs research/<run>-batch-*.coverage.json
node tools/content-policy.mjs research/<run>-batch-*.pages.json
node tools/audit-manifest.mjs research/<run>-batch-*.pages.json --json > research/<run>-audit-manifest.json
node tools/impact-audit.mjs --touches research/<run>-touches.json --from <baseline> --template research/<run>-impact-audit.json
# Alpha fills the reviewer-facing dispositions; do not alter generated scope arrays.
node tools/impact-audit.mjs --touches research/<run>-touches.json --from <baseline> --receipt research/<run>-impact-audit.json
```

The first command is hard for the declared scope. Finite smoke is hard only for
the selected tests; it does not require every abstract result to have a finite
model. The risk command makes the routing record hard for high/critical items.
Use `--items id-a,id-b` only for a targeted post-repair rerun; the initial gate
always covers the whole level.

After the Step-7 sweep has produced a complete paired ledger, generate and sign
the Alpha receipt, then enforce it against the final disk text:

```sh
node tools/level-coverage.mjs --template research/<run>-audit-coverage.json research/<run>-batch-*.pages.json
# Alpha fills reviewer and attestation only; do not alter the generated scope/hash.
node tools/level-coverage.mjs --contracts research/<run>-proof-contracts.json --judge-ledger research/<run>-judge.jsonl --judge-adjudications research/<run>-judge-adjudications.jsonl --spine-receipt research/dependency-spine-audit.json --audit-receipt research/<run>-audit-coverage.json --verify-current-context research/<run>-batch-*.pages.json
```
