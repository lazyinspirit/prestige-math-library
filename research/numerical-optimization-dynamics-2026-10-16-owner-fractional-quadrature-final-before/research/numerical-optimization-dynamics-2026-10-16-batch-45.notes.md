# Batch 45 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `fractional-evolution-and-convolution-quadrature`  
Role: beta; batch dependency level 2; prerequisite batch 20.

## Controlling direction and plan conflicts

The owner authoring direction and Step 1 instructions control the work. T09 is
draft-only in its assigned A/B pair. The plan/spec manifest declares the A-page
prerequisite `composite-quadrature-rules`. The incorporated T09 contract at
`research/plan-numerical-dynamics-track.md:1363` describes NA-12 as an interface
only for the exact fractional-derivative convention, while the T09 prerequisite
bullet at `:576` maps NA-12 to composite midpoint/Simpson quadrature. The
controlling plan/spec and
generated batch-45 manifest require `composite-quadrature-rules`; that page
edge remains open in `batch-45.cross-batch-dependencies.json`.

The actual composite-quadrature page and current supplier bodies were checked.
They provide generic midpoint and Simpson formulas, C2/C4 smooth-integrand
bounds, and cubic exactness. None supplies an error theorem for the singular
Caputo kernel. T09 derives its L1 panel weights analytically; no T09 proof uses
the generic composite-rule error bounds. The owner must reconcile whether this
is a context-only page edge or add a T09-owned singular-kernel supplier before
the pair can be declared ready.

The dispatch lists scheduling input
`6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`. The shared
`batch-dependency-levels.json` currently records `input_sha256`
`0ecaf1a31f963bac7ee43e7cb38e87b3737a6b4a1f8c2e69c8a7a3efada36d91`; these
values differ. Its batch-45 row still states level 2 and `requires: [20]`, in
agreement with the dispatch. The shared artifact was not rewritten.

## Inventory and item dependency levels

The A page contains 16 items and the B page contains 3, for 19 assigned items
(below the 100-item page cap). Batch-scoped recomputation from the manifest
dependencies gives levels 0–6: level 0 has 1 item, level 1 has 1, level 2 has 4,
level 3 has 6, level 4 has 3, level 5 has 3, and level 6 has 1. The frontmatter
dependencies and levels match the manifest for all 19 items; the graph is
acyclic.

The new
`lem-backward-euler-cq-principal-branch-generating-function` is level 3. The CQ
chain is backward-Euler algorithm (2), principal-branch identity (3), weights
and partial sums (4), coefficient estimate and scalar resolvent (5), then the
compatible quadratic first-order theorem (6). The new lemma proves the full
complex-disc identity, filling the gap between the recurrence and the weights
lemma; it does not use the unresolved composite-quadrature page.

## Source retrieval and disposition

The A-page source set uses full-text treatments by Lin–Xu, Jin–Lazarov–Zhou,
Webb, Lubich, and Hiptmair, including Hiptmair's full lecture notes. Their cited
sections were read. `coverage.json` records locators, supported items, harvested
results, dispositions, and fetch evidence. Lubich §1.1 and Hiptmair
§§3.3.2.24–3.3.2.27 (printed pp. 294–295) support the backward-Euler symbol
and convolution-quadrature coefficient route; the CQ identity and estimates
are also proved locally.

Stynes–O'Riordan–Gracia was read through its author-uploaded full-text web
reader, including its regularity warning, L1 formula, smooth-grid theorem,
graded stability, and graded convergence proof. The publisher/archive PDF
failed; Zaragoza repository PDF attempts timed out; a CSRC candidate was an
unrelated 79-page annual report and was rejected. Exact-title and DOI searches
located the author-uploaded ResearchGate text. The source-fetch checker returned
HTTP 403 on its initial attempt and five recovery retries. The URL is recorded
as a certain source drop with all six attempts, searches, and alternative item
arguments/dependencies in `coverage.json`. The five other full-text sources and
the local proofs retain the mathematical coverage; no claim is dropped.

For the weakly singular Grönwall result, Webb §1 identifies the iterated-kernel
approach and Theorem 8.2 treats a related doubly singular inequality. That
theorem is not substituted for the T09 claim: the local proof iterates the
fractional-integral semigroup and directly bounds the Gamma-series remainder.

## Scoped checks

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 45`: pass. Precheck: 16 proof-bearing items, 0 failures; rendercheck: 21 files; content policy: 19 items, 0 errors/warnings; strict proof contracts: 19/19, 0 errors/warnings. Evidence: `research/numerical-optimization-dynamics-2026-10-16-author-check-45.json`.
- `node tools/proof-layout.mjs` on all 19 assigned item paths: pass, 19 items, 63 steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-45.proof-contracts.json --strict --json`: pass, 19/19 items, 0 errors and 0 warnings.
- Batch-scoped dependency recomputation and frontmatter/manifest comparison: pass, 19 items, exact dependency matches, no cycles or level mismatches.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-45.coverage.json --require-destination --json`: pass, 29 harvested results, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-45.coverage.json --stamp`: 5/6 sources fetch-verified, 0 newly stamped; all 6/6 resolved, with one documented drop.
- Imported `sourceResolutionErrors` from `tools/source-resolution.mjs` to check the dropped-source record: 1 record, 0 errors.
- `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: run-wide failure outside this batch. It reports 3 duplicate items (`ex-parareal-dissipative-scalar-heat-mode`, `ex-parareal-oscillatory-coarse-phase-error`, and `ex-parareal-nonlinear-tube-escape`), 52 empty scaffold inventories, and two level mismatches (`lem-tamed-euler-uniform-moment-bounds`, `thm-tamed-euler-strong-order-half`). Batch 45 has no reported level errors.

The official `step1-decisions.mjs check` and an attempted `record` for the new
lemma both stop in `loadStep3` with `Duplicate item
ex-parareal-dissipative-scalar-heat-mode`, before checking or writing any batch
45 record. Seven prior ready records need refreshed hashes after assigned-item
changes: `alg-backward-euler-convolution-quadrature`,
`lem-weakly-singular-fractional-gronwall`,
`lem-backward-euler-cq-weights-and-partial-sums`,
`thm-lipschitz-local-existence-for-caputo-volterra-equation`,
`lem-cq-quadratic-generating-coefficient-estimate`,
`thm-backward-euler-cq-scalar-resolvent-stability`, and
`thm-backward-euler-cq-compatible-quadratic-first-order-error`. The new
principal-branch lemma needs its initial ready record. These eight records could
not be updated through the required command until the runwide duplicate is
reconciled. The six existing escalations for the L1 claims and their B-page
consumers were left intact; none was overwritten with `--owner`.

## Open reconciliation

The pair is not declared ready because the required page-level edge to
`composite-quadrature-rules` remains unresolved. The exact supplier excerpts,
required smoothness hypotheses, affected L1 claims and three B consumers, and
local proof route are recorded in
`research/numerical-optimization-dynamics-2026-10-16-batch-45.cross-batch-dependencies.json`.
The batch checks and readiness records are author evidence, not independent
approval.
