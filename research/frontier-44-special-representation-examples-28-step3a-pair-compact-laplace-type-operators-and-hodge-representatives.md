# Step 3a scope review — pair `compact-laplace-type-operators-and-hodge-representatives`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-compact-laplace-type-operators-and-hodge-representatives-38a8ca7d67990377`.
- A page: `compact-laplace-type-operators-and-hodge-representatives` (order 1797,
  7 items); B page: `compact-laplace-type-operators-and-hodge-representatives-examples`
  (order 1803, 1 item); batch 31; category `differential-geometry`.
- **Scope decision: `sufficient`.** Review receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-compact-laplace-type-operators-and-hodge-representatives.json`.
  No scaffold, item approval, or owner record was written. This review assesses
  scope only, not proof correctness.

## Inputs read

- `research/frontier-44-special-representation-examples-28-batch-31.pages.json`
  (all 8 item statements, strategies, axiom-use, dependency lists),
  `...-batch-31.coverage.json` (all source rows and decline reasons),
  `...-batch-31.notes.md` (design/plan conflict, owner update 2026-10-09),
  `...-batch-31.cross-batch-dependencies.json`.
- Design prose and plan: section `## Compact Laplace Type Operators And Hodge
  Representatives` of `research/plan-klr-foundation-prerequisites.md` (full
  designed statements for the three theorems and the example); `research/plan-spec.json`
  entries for both pages; draft page prose and item drafts under
  `research/frontier-44-special-representation-examples-28-klr-foundation-elliptic-drafts/`.
- The eight `...-step1-<id>.json` readiness records (def-second-order read in
  full, the others sampled for their readiness reasons), the step-3a scope state
  (`tools/step3-decisions.mjs check` — 50 pairs, 0 decisions recorded before this one),
  and the published item `items/prop-flat-torus-model-geometry.md`.
- Consumers, by manifest scan of every `batch-*.pages.json` in this run, plus the
  item lists of batch-35 `compact-kahler-hodge-foundations` and batch-39
  `projective-hodge-polarization-foundations`.

## Scope vs design

The design inventory is 3 theorems + 1 example; the manifest carries them under
the designed IDs/kinds/titles with statements preserved as designed (spot-checked
against the plan text, including the full statements of `thm-elliptic-...`,
`thm-sobolev-...`, `thm-hodge-laplacian-...` and the flat-torus example), plus four
local prerequisites added at scaffold to make the claims well defined:

| manifest item | level | role in the pair |
|---|---|---|
| `def-second-order-laplace-type-operators-on-vector-bundles` | 0 | class of operators, principal symbol, formal symmetry |
| `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` | 1 | supplies `d*`, `bar partial_E*`, local formula, symbol identities |
| `def-complex-manifolds-and-holomorphic-vector-bundles` | 0 | general `m>=1` complex manifolds, Hermitian metrics, holomorphic bundles |
| `def-e-valued-dolbeault-operators-and-ltwo-structure` | 2 | `(p,q)`-forms, `bar partial_E`, `bar partial_E^2=0`, L2 pairing, Dolbeault Laplacian and its symbol |
| `thm-elliptic-...-parametrices-and-regularity` | 8 | designed |
| `thm-sobolev-compactness-...-fredholm-hodge-decomposition` | 9 | designed |
| `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology` | 10 | designed |
| `ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates` (B) | 11 | designed |

The four additions are the minimal closure for the two known well-definedness gaps
(no general complex-manifold/Hermitian-bundle/Dolbeault items and no formal-adjoint
item existed; the published library has only the `m=1` Riemann-surface analogue).
They keep the design's general-`m` claim rather than narrowing it, and their own
statements, deps and strategies are consistent with the designed theorems they
serve. The pair covers the intended subject: definitions of the operator class,
elliptic regularity and parametrices, the Fredholm/Green decomposition, de Rham and
Dolbeault harmonic representatives, and the flat-torus computation of the harmonic
kernel and de Rham dimensions. The B page matches the designed example inventory
(one example) and illustrates exactly the A-page mechanism described in the prose
("the elliptic energy identity determines the full harmonic kernel").

## Intended role and consumers

- Prose role: "supplies compact analysis for subsequent Kähler Hodge theory" — realised
  by items 5–7 (levels 8–10) and consumed in-run by:
  - batch-35 `compact-kahler-hodge-foundations`: `lem-formal-adjoints-...` (its
    Kähler-convention definition and `lem-kahler-commutators-...`),
    `def-complex-manifolds-...` (its convention definition), `thm-sobolev-...`
    (its `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`);
  - batch-39 `projective-hodge-polarization-foundations`: `def-complex-manifolds-...`;
  - the pair's own B example: `thm-hodge-laplacian-...`.
- No other item in the run consumes this pair. The Dolbeault-resolution comparison
  (smooth Dolbeault cohomology vs sheaf cohomology) is deliberately *not* in this
  pair and is supplied by the consumer (batch-35 depends on its own Dolbeault-lemma
  and acyclic-resolution items); the A-page theorem states this boundary explicitly.

## Source coverage

- A page: Demailly, *Complex Analytic and Differential Geometry* (monograph,
  Ch. I §3.C, §10–§11; Ch. VI §1, §2, §3.3, §7.1), Hunter *Notes on PDE* (§4.7–§4.11),
  Schnell *Complex Manifolds* classes 4, 5, 7, 9. B page: Demailly §3.3 plus the
  published flat-torus item's sources. Recorded stamps: `source-fetch-check` 8/8
  resolved, `url-sweep` 7/7 live (run by the batch author; not re-run here).
- The engine advisory `coverage-31` ("6/21 harvested results scaffolded; confirm the
  declines with Alpha") is answered: I confirm all six `out-of-scope` declines
  (Fredholm alternative/spectrum §4.9–4.10; geometric-space formalism; Riemann
  surfaces/lattices/complex tori; blow-up lemmas; implicit-function/analytic-set
  results; metric examples) are genuinely unconsumed by these items, each has an
  item-specific reason, and the `already-published` rows resolve to published items.
- Independent spot-check of the primary locators: the fetched Demailly table of
  contents has Chapter VI "Hodge Theory" with §1 (p. 287), §2 (p. 289), §3 (p. 290)
  and §7 "Groups H^{p,q}(X,E) and Serre Duality" (p. 309), and the text at printed
  p. 310 contains the (7.2) finite-dimensional Dolbeault/Hodge isomorphism — consistent
  with the recorded locators. Hunter/Schnell/Datar were not re-fetched by me.
- Previously recorded published-item defect (Datar locator in
  `prop-flat-torus-model-geometry`) is resolved on disk: the item now cites
  "§9.2, pp. 55–56; Example 11.1.5, p. 72" with repair receipt
  `research/...-klr-foundation-elliptic-native31-locator/integration-receipt.json`.
  No defect-ledger entry currently names this pair or any of its dependency targets.

## Prerequisites and closure

- All 61 dependency targets of the 8 items (declared deps plus statement/strategy
  wikilinks) resolve: 54 are published items (each `items/<id>.md` verified
  `status: published`) and 7 are this pair's own scaffolded items. None is absent
  from both the published library and the run scaffold; **no unmet prerequisite is
  confirmed**.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` passes for both
  pages (only the inherited `redundant-prereq` advisories about
  `countability-and-uncountability`); the manifest and `plan-spec.json` `requires`
  sets are now identical for both pages (owner reconciliation of 2026-10-09).
- Non-blocking notes (uncertainty, stated honestly):
  1. the four added items are still manifest-only in `plan-spec.json`; the batch
     notes reserve this for splice-time reconciliation (Step 4 bookkeeping, not a
     scope gap — the owner update reconciled only the `requires` additions);
  2. `thm-elliptic-...` carries the definition and basic theory of `H^k(M,E)`
     inside its statement, so transfer of the published R^n Sobolev/Rellich/
     interior-regularity results to bundles is a proof-stage obligation (Step 5),
     not a missing planned claim;
  3. the general-`m` E-valued Dolbeault items overlap the published `m=1`
     Riemann-surface Dolbeault page (`the-dbar-complex-and-integral-solutions`);
     authoring should confirm the shared conventions (first-variable-linear L2
     pairing, `bar partial*` signs) directly against those published items, since
     the new definitions cite only the atlas definition as precedent.

## Decision and owner action

- `sufficient` for `compact-laplace-type-operators-and-hodge-representatives`:
  planned definitions, results and examples adequately cover the intended subject;
  source coverage is adequate and all declines are confirmed; consumer interfaces
  are planned.
- Owner action requested: none for scope. Only the Step-4 splice reconciliation of
  the four manifest-only prerequisite items (note 1) remains as bookkeeping.
