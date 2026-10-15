# Batch 3 notes — `td-math-ordered-composition` / `td-math-ordered-composition-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, batch 3. This evidence records authoring and scoped checks; it is not an independent mathematical approval.

## Authority and prerequisite reconciliation

The design at `research/plan-thermodynamics-track.md` §“Ordered Composition” reserves twelve named A items, 32 A slots, and 8 B slots. It says “Declared earlier prerequisites: none.” The current `research/plan-spec.json` and batch manifest instead require `linear-independence-bases-and-dimension`, `order-zorn-and-the-axiom-of-choice`, `the-zfc-axioms-and-basic-set-constructions`, and `the-analytic-hahn-banach-theorem`. The alpha drift record identifies these four additions as owner-resolved prerequisite metadata, so the plan controls and the stale design line does not reduce the approved scope.

I read `research/physics-td-qft-rpm-62-2026-10-14-owner-authoring-direction.md` when it appeared in the shared run. It directs the author to complete the assigned conditional arguments even when page-level metadata or another supplier is pending, to put local missing prerequisites on the assigned A page, and to mark an item ready only when its actual dependencies and evidence exist. I did not edit the shared plan, imported mathematics, run state, or verdicts.

The proof audit found additional exact item suppliers used by the new carriers: `def-complete-ordered-field`; `def-vector-space`, `def-function-space`, `def-linear-subspace`, and `def-cartesian-product`; finite-sum definitions/laws/reindexing; set-construction axioms; and `def-axiom-of-choice`. The arbitrary-dimensional offset argument also cites the imported real dominated Hahn–Banach theorem, basis-existence corollary, and basis-extension theorem at their actual published statements. These suppliers are present as published read-only snapshots, are declared directly in item `deps`, and have exact Facts citations and proof-contract excerpts. Their home pages include `foundations-of-the-real-numbers`, `vector-spaces-and-subspaces`, `rings-subrings-and-integral-domains`, and `relations-functions-and-quotients`, in addition to the four plan prerequisites. The page-level `requires` list remains the four plan-approved pages; no shared plan metadata was changed. If the owner wants the additional item-level supplier homes promoted into page-level `requires`, that is a plan-owner metadata decision, not a missing mathematical input to these drafts.

## Inventory and dependency levels

Batch 3 is run level 0 and has no in-run batch suppliers. The A page contains the twelve reserved claims plus four local prerequisite carriers: compound-mass well-definedness, reciprocal naturals tending to zero, the type-offset quotient definition, and its quotient well-definedness proof. This uses 16 of 32 reserved A slots; the four leaf examples use 4 of 8 reserved B slots. No page exceeds the 100-item cap. The B examples depend only on A-page items.

Levels below count in-run `deps`; imported mathematical dependencies are direct declared item dependencies but do not raise this run-local level.

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-tdmath-tagged-scalable-compound` | — | 0 |
| `lem-tdmath-compound-mass-well-defined` | `def-tdmath-tagged-scalable-compound` | 1 |
| `def-tdmath-comparison-and-stability` | compound definition and mass lemma | 2 |
| `def-tdmath-signed-comparison` | comparison definition | 3 |
| `lem-tdmath-spectator-cancellation` | compound, comparison, and signed-comparison definitions | 4 |
| `lem-tdmath-reference-order` | signed comparison and cancellation | 5 |
| `lem-tdmath-reciprocal-naturals-tend-zero` | — | 0 |
| `lem-tdmath-reference-supremum-bounds` | reference order, reciprocal sequence, compound mass | 6 |
| `thm-tdmath-additive-entropy-representation` | supremum bounds and signed-order prerequisites | 7 |
| `thm-tdmath-affine-entropy-uniqueness` | additive representation | 8 |
| `thm-tdmath-common-meter-calibration` | additive representation and cancellation | 8 |
| `thm-tdmath-finite-inequality-alternative` | — | 0 |
| `thm-tdmath-reaction-offset-feasibility` | common-meter calibration and finite alternative | 9 |
| `def-tdmath-type-offset-vector-space` | — | 0 |
| `lem-tdmath-type-offset-vector-space-well-defined` | type-offset definition | 1 |
| `thm-tdmath-infinite-no-sinks-sandwich` | type-offset definition and well-definedness | 2 |

The B levels are `ex-tdmath-reference-order-two-state` 6, `ex-tdmath-common-meter-two-types` 9, `ex-tdmath-reaction-offset-cycle-obstruction` 10, and `ex-tdmath-no-sinks-sandwich-on-r` 3. The scoped dependency-level check recomputed all 20 item levels; the maximum is 10. `research/physics-td-qft-rpm-62-2026-10-14-batch-3.cross-batch-dependencies.json` is empty because there are no in-run cross-batch suppliers.

## Source coverage and retrieval history

`research/physics-td-qft-rpm-62-2026-10-14-batch-3.coverage.json` records item support and dispositions for both pages. The A page’s primary ordered-composition route is the full Lieb–Yngvason Physics Reports treatment, cross-checked against the independent Campión et al. ordered-representation survey. The finite alternative is checked against the complete Stanford Fourier–Motzkin notes. The Hahn–Banach route is cross-checked against the complete MIT notes, Daners lecture notes, and Teschl’s complete text; the exact imported algebraic Hahn–Banach and basis suppliers remain the logical premises, not the treatments’ titles.

The latest `source-fetch-check` reports 12/24 coverage rows fetch-verified and 24/24 resolved, with 12 documented dropped URL copies. The verified rows represent six distinct fetched full texts; the additional verified rows on the B page reuse those stamped source records. Failed copies are kept as retrieval history and explicitly say they were not claimed as read; all supported mathematical items have a verified replacement source and a complete local conditional argument.

One retrieval bookkeeping defect is preserved transparently: the identical ResearchGate URL was entered twice and each row recorded six HTTP 403 attempts (one initial attempt plus five recovery retries), producing twelve requests to that same URL. No further requests were made after identifying the duplicate rows. Both entries are marked dropped, and the publisher MDPI PDF is fetch-verified. The duplicated attempts are a process defect, not a mathematical claim drop; the source-resolution records and alternatives remain intact.

## Mathematical scope and limitations

The entropy representation is conditional on the complete compound-order axioms, CH, and a strict reference pair; the no-strict-pair case is proved separately as the degenerate constant representation. Signed maps are formal bookkeeping, not negative physical systems. No concavity or physical identification follows from the preorder alone.

The common-meter theorem now states the exact signed substitution on disjoint system-reference and meter tags, finite-composition and cancellation conditions, and a strict shared meter order. Separate numerical meter readings do not establish that interface. The finite reaction result is exact for the finite lower-bound inequalities; if the bounds are loose it is sufficient, not necessary, for actual transition gains.

The no-sinks Hahn–Banach theorem applies the published real-valued dominated-extension theorem only to the finite domain subspace, then uses Choice for basis existence and extension. It explicitly cites completeness of the real field because the imported one-step Hahn–Banach argument uses it. The type-offset quotient is built and proved to be a vector space locally. The theorem does not construct a catalyst-chain cost or establish that such a cost is well-defined, sublinear, or no-sinks; the thermodynamic application remains conditional on those inputs.

## Scoped checks

The recorded results after the final item edits are:

- `coverage-checklist`: 2 pages, 45 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 24/24 sources resolved, 12 fetch-verifications and 12 documented drops across the coverage rows.
- `content-policy`: 20 scoped items, 0 errors, 0 warnings.
- `depcheck` with item and page selectors: 0 errors, 0 warnings; 191 prerequisite-closure items and 117 prerequisite pages checked.
- Scoped `item-dependency-levels`: 20 items, maximum level 10.
- Normative `precheck`: 16 proof-bearing items checked, 0 failures after adopting all proposed phase repairs.
- Strict `proof-contract`: 20/20 items checked, 0 errors, 0 warnings; 51 numbered steps mapped.
- `rendercheck`: 22 changed files (20 items and 2 pages), 0 errors, 0 warnings.
- `proof-layout`: 20 items, 51 steps, 0 defects.
- `step1-decisions record`: all 20 assigned items are `ready`, each with its examined direct dependencies, any `justified_by` carrier, page placement, and current contract evidence. The overall run remains open for other batches; this batch did not alter their records.

The first `proof-layout` invocation could not resolve the app’s `@/components` alias because this checkout has no installed app `tsx` loader. The successful run used a temporary app-path alias and `tsx@4.23.1` installation under `/tmp`; it changed no app files or repository tools. No general tests were run.
