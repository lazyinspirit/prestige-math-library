# Quality controls for future levels

This file defines the permanent, **pre-judge** quality layer added after the
frontier-6 audit. It complements `SCHEMA.md`, `LEVELS.md`, and the human audit;
it does not alter the item frontmatter schema or claim to mechanically prove a
theorem.

## Per-level proof contracts

At Step 1, each Beta creates its namespaced
`research/level<n>-batch-<i>.proof-contracts.json`. Its `scope` is every
proof-bearing item in that batch (including proof-bearing examples,
counterexamples, and false statements). Step 5 keeps it current as the Beta
personally authors the final text. Before every whole-level gate, the
orchestrator merges the batch files into `research/level<n>-proof-contracts.json`
with `tools/merge-proof-contracts.mjs`. The merged file has this version-1
shape:

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
entry. `quote` must occur in the cited item's actual `Statement`, `Statement
refuted`, `Definition`, or `Example`, and `uses` lists every proof step which
cites that fact. This enforces faithful citation without pretending that a
substring test establishes the implication from the fact to its use.

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

## Gates

Run after Step 5 and again after all Step-6 repairs, before the frozen Step-7
judge context. First merge the current namespaced batch contracts:

```sh
node tools/merge-proof-contracts.mjs --level frontier-<n> research/level<n>-proof-contracts.json research/level<n>-batch-*.proof-contracts.json
node tools/proof-contract.mjs research/level<n>-proof-contracts.json --strict
node tools/finite-smoke.mjs research/level<n>-proof-contracts.json
node tools/risk-report.mjs research/level<n>-proof-contracts.json --require-reviewed
```

The first command is hard for the declared scope. Finite smoke is hard only for
the selected tests; it does not require every abstract result to have a finite
model. The risk command makes the routing record hard for high/critical items.
Use `--items id-a,id-b` only for a targeted post-repair rerun; the initial gate
always covers the whole level.
