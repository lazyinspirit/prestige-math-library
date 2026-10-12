# Step 3b authoring report — pair `cm-math-fluid` / `cm-math-fluid-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 15), Step 1 authoring; 2026-10-11.
- Owned pair: A page `cm-math-fluid` (order 109, category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`); B page `cm-math-fluid-examples` (order 110).
- Owned items in authoring order (dependency level, page):
  1. `def-periodic-vector-sobolev-space-and-leray-projection` (0, A)
  2. `lem-cm-lattice-shell-count-and-weight-sums` (1, A)
  3. `lem-cm-integral-and-ftc-for-continuous-normed-space-curves` (0, A)
  4. `lem-fourier-lattice-sobolev-embedding` (2, A)
  5. `lem-discrete-young-and-sobolev-product` (3, A)
  6. `lem-tame-transport-commutator` (4, A)
  7. `lem-fluid-galerkin-coefficient-ivp` (4, A)
  8. `lem-fluid-energy-common-lifespan` (5, A)
  9. `lem-high-sobolev-norms-share-base-lifespan` (6, A)
  10. `lem-fourier-tail-diagonal-compact-convergence` (2, A)
  11. `lem-cm-strong-solution-smoothness-bootstrap` (4, A)
  12. `thm-local-smooth-periodic-euler-viscous-solution` (7, A)
  13. `lem-periodic-pressure-reconstruction` (4, A)
  14. `thm-fluid-uniqueness-and-continuous-dependence` (8, A)
  15. `rem-local-versus-known-open-global-fluid-scope` (9, A)
  16. `ex-cm-leray-projection-explicit-computations` (3, B)
  17. `ex-cm-plane-wave-and-shear-exact-solutions` (5, B)
  18. `cex-cm-absolute-convergence-fails-in-h-zero` (3, B)
- Artifacts owed at handoff: the 18 item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics-mathematics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-15.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 15: level 3, requires batch 8); the design section `research/plan-non-relativistic-classical-mechanics-track.md` L386; `research/plan-spec.json` entries 109/110; the E30 scaffold `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/local-fluid-wellposedness.md` together with `expansion-proofs.md` and the inventory/closure ledgers.
- Mathematics-only pair: every item carries `domain: mathematics` and only mathematical prerequisites; the consumed published/imported suppliers are read-only and were inspected in place. No physical law, frame, unit or empirical claim is asserted on either page; the physical reading of these equations stays on the consuming classical-mechanics pages (cm17 and later).

## Design versus plan

- The design reserves local proved section E30 with internal local dependencies E2, E24 and names two published canonical suppliers (`def-countable-choice`, `thm-fourier-basis-and-parseval-on-the-n-torus`); both are consumed at item level, and the second's home page `orthonormal-bases-parseval-and-fourier-series` is one of the pair's two declared plan prerequisites. The plan-spec `requires` list controls the page order; the manifest and page carrier extend it to the actual prereq closure (see the notes, item 4), exactly as earlier batches of this run did for their pages.
- Granular split: E30's 12 provisional items were split into 15 A items and 3 B items (budgets 90/30). Three supporting prerequisites were added — the lattice-count/weight-sum lemma, the integral/FTC lemma for curves in complete normed spaces, and the strong-solution smoothness bootstrap — because the complete closure of the stated claims requires them; every claim of the scaffold is preserved, including the common base lifespan, the uniform-in-`N` higher-norm bounds on that same interval, the pressure reconstruction and the continuous-dependence upgrade to `H^{s−1}`.
- Convention reconciliation: the scaffold writes `T³=(R/2πZ)³` with normalized Lebesgue measure; the delivered definition uses `R/Z`, normalized Haar measure and characters `e^{2πik·x}` (rescaling `x -> 2πx`). All constants and symbols are stated for the delivered convention.

## Dependency graph and levels

- Levels are one plus the maximum in-run dependency level; out-of-run suppliers (published root items, imported mathematics) do not raise levels. `item-dependency-levels.mjs check --run` computes the same labels as the manifest and item frontmatter (distribution A: 2/1/2/1/4/1/1/1/1/1 across levels 0–9; B: 3/5/3).
- Same-batch edges were authored supplier-before-consumer; the repair history of `lem-fluid-galerkin-coefficient-ivp` (replacement of an out-of-plan finite-dimensional supplier by the coordinate-map theorem and a locally proved two-sided bound) is recorded in the notes.
- Cross-batch: no item-level dependency on another batch's items; the only in-run edge is the page edge `cm-math-fluid -> cm-math-continuum` (batch 8), reviewed `verified` in `.cross-batch-dependencies.json` as a reading-order prerequisite with no item-level reaching (every induced cross-page edge of the items terminates on published/imported mathematics pages).

## Source handling

- Full texts fetched and inspected; URLs and locators in the carriers and in `.coverage.json`: Wiedemann, *Lecture Notes: Navier–Stokes Equations* §§1.1–1.3, 2.1–2.2, 3.1, 4.1–4.2; Majda–Bertozzi, *Vorticity and Incompressible Flow* §§1.1, 1.4–1.6, 1.9.1, 3.1–3.2; Laugesen, *Harmonic Analysis Lecture Notes* (arXiv:0903.3845) Chapters 1, 2, 5.
- `.coverage.json`: 37 harvested results with dispositions (all included/inline or out-of-scope with reasons); `--require-destination` green; `source-fetch-check` 4/4 fetch-verified, 0 drops.

## Item checkpoints

- Definitions and base analysis: the periodic Sobolev/Leray definition fixes the measure, characters, weights, operators, divergence-free subspaces and the projection with its decomposition clause; the lattice lemma proves the ball/shell counts, weight sums, `ℓ¹` bounds and truncation tails from the measure and Cauchy–Schwarz suppliers; the integral/FTC lemma treats curves in complete normed spaces with explicit uniform-continuity and Heine–Borel inputs.
- Fourier estimates: the embedding lemma proves `H^σ ⊆ C^j` for `σ > j+3/2` and uniqueness of continuous representatives; the discrete-Young/product lemma proves the `ℓ¹*ℓ² -> ℓ²` Young bound, the `H^σ` Banach-algebra property (`σ>3/2`) and the transport bound; the tame-commutator lemma proves the vanishing transport integral, the commutator estimate `‖[Λ^m,u·∇]u‖ ≤ C_m‖u‖_{H^m}‖u‖_{H^s}` and the energy identity.
- Galerkin layer: the coefficient IVP proves finite-dimensional invariance, the local Lipschitz bound with the corrected constant `12π²νN²+6C_sc_NR`, the unique maximal solution and the blow-up alternative (via an explicit ordered basis and the coordinate-map theorem); the energy lemma integrates the higher-order inequality to the common lifespan `T=(2C_sY_0)^{-1}` with `‖u_N(t)‖_{H^s} ≤ 2Y_0`; the higher-norm lemma extends the bound to all `m ≥ s` and the time derivatives on the same interval, uniformly in `N`.
- Compactness and limit: the diagonal-extraction lemma produces one subsequence converging in every `C([0,T],H^{m−1})` from the uniform tail estimate; the smoothness bootstrap upgrades a strong solution with continuous Sobolev norms to `C^∞`; the main theorem assembles a smooth solution on `[0,T]` satisfying the projected equation in every `H^{m−2}` with the uniform bounds, and the pressure lemma reconstructs the mean-zero pressure with `∇p = −(I−P)((u·∇)u)` and `Δp` identity, uniquely.
- Uniqueness and dependence: the L² energy argument gives uniqueness and `L²` stability, and the Hölder interpolation gives continuous dependence in `H^{s−1}`; the scope remark separates the local theorems from the open global-regularity question.
- B page: explicit Leray projection computations; the transverse plane waves, the sheared mode and the Taylor–Green vortex as exact global solutions with the projection and pressure checks (repaired to cite the definition's projection rules only); the `H^0` counterexample showing absolute convergence of Fourier coefficients fails for merely `L²` data.

## Checks run at handoff

- `proof-layout.mjs` (18 items): 18 items, 84 steps, 0 defects. `precheck.mts` (18 items): 16 checked, 0 failing (definition and scope remark not applicable). `rendercheck.mjs` (18 items + 2 page carriers): OK.
- `proof-contract.mjs --strict`: 16/16 items, 0 errors, 0 warnings. `content-policy.mjs`: 18 items, 0 errors, 0 warnings. `manifest-deps.mjs`: 0 errors.
- `coverage-checklist.mjs --require-destination`: 2 pages, 37 results, 0 errors, 0 warnings. `source-fetch-check.mjs`: 4/4 fetch-verified, 4/4 resolved.
- `item-dependency-levels.mjs check --run`: no finding mentions a batch-15 item or page. `depcheck.mjs` / `fwdcheck.mjs` / `extcheck.mjs`: no finding mentions a batch-15 item (global exits are other scopes'). `validate-plan.mjs --run`: exit 0, zero findings for either page. `frontier-dependency-ledger.mjs refresh --run`: batch-15 page edge merged as `verified`.
- **Not an approval.** These are the author's mechanical gate results. Independent Step-2/3 review of the item bodies is still required; the repaired `lem-fluid-galerkin-coefficient-ivp` and the two headline theorems deserve particular attention.
