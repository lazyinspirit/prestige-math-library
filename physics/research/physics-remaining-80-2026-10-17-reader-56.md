# Step 3a reader report — batch 56

Run: `physics-remaining-80-2026-10-17`  
Role: reader (`reader-56`)

## Scope and inventory

Read the batch-56 manifest, reader brief, batch proof contracts, cross-batch dependency rows, coverage record, and `research/math-imports.json` for import identity. Opened the assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc03.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc03-examples.md`

Also opened the manifest's prerequisite pages: the imported published summaries `library/functional-analysis/schwartz-space-and-the-plancherel-theorem.md`, `library/functional-analysis/tempered-distributions-and-the-fourier-transform.md`, and `library/pde/euclidean-surface-measure-divergence-and-green-identities.md`, and the draft prerequisite `library/thermodynamics-and-general-relativity-mathematics/tgr-mc02.md`.

Reviewed all five assigned items in supplier-before-consumer order, after consulting the direct mathematical and geometric suppliers relevant to their arguments:

1. `items/lem-tgr-constant-linear-energy-causality.md`
2. `items/lem-tgr-perfect-linear-causality.md`
3. `items/lem-tgr-bulk-relaxation-entropy.md`
4. `items/lem-tgr-bulk-linear-causality.md`
5. `items/ex-tgrmath-bulk-speed-parameters.md`

The cited supplier items inspected for this review were `def-countable-choice`, `def-schwartz-space-and-its-seminorms`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-inversion-on-schwartz-space`, `thm-plancherel`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `def-tgr-local-fluid-state`, `lem-tgr-local-gibbs-euler`, `lem-tgr-perfect-fluid-projection`, `lem-tgr-dissipative-entropy-identity`, `lem-gr-observer-projection-decomposition`, and `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`. I also checked the local-implicit-rank, chain-rule, and concavity/Hessian statements used by the Gibbs supplier, and the cited Lorentzian observer, congruence, worldline, and frame definitions.

The contracts' citation-to-step mappings and derivation entries match the current assigned proof bodies. I found no unsupported algebraic step in the symmetrizer, energy, characteristic-root, entropy-cancellation, or parameter-example calculations. The imported supplier pages and exact item statements use the Fourier and surface-integration conventions claimed by the assigned proofs.

## Findings I could not edit

This reader assignment is read-only; no item or page was edited.

1. `lem-tgr-perfect-linear-causality`, Statement, first paragraph: the asserted equivalence with `|d\mathbf{x}/dt| <= c` applies to a free vector `V` but does not define a curve or a coordinate-velocity map for `V`. The statement should define, for `V=(V^0,\mathbf V)` with `V^0>0`, `v(V)=c\mathbf V/V^0`, and then derive `\eta(V,V)<=0` iff `|v(V)|<=c`. The current cone itself is defined, but this coordinate-speed claim is not yet typed by the stated data. Finding class: `ill-formed`.

2. `lem-tgr-bulk-linear-causality`, Statement, first paragraph and the later inside-cone clause: “boundary speed” in `(t,\mathbf{x})` coordinates is used without defining coordinate speed for a vector/null direction. Give the same coordinate-velocity map and state that its norm on the null boundary is `c`; the later comparison of `v_bulk` with `c` then has an explicit geometric meaning. Finding class: `ill-formed`.

3. `lem-tgr-bulk-relaxation-entropy`, Statement, first paragraph: “positive C1 coefficients `\zeta` and `\tau`” has no declared domain or codomain, although `\nabla_a(\beta u^a/T)` differentiates `\beta=\tau/\zeta` as a spacetime scalar field. State, on the open spacetime domain `O` inherited from the fluid data, `\zeta,\tau \in C^1(O;(0,\infty))`. The variable-coefficient entropy identity depends on this being explicit. Finding class: `ill-formed`.

No other mathematical defect was confirmed in the assigned statements, proofs, or example computation. The findings concern omitted definitions/domains in statements, so they are not treated as short proof-step omissions.

## Page dispositions

- `tgr-mc03`: **hold**. Its summary accurately limits the results to the stated constant-coefficient systems, but the assigned perfect and bulk linear items contain the coordinate-speed definition gaps above.
- `tgr-mc03-examples`: **hold pending its supplier**. The example's chosen state, positivity argument, and exact substitution `v_bulk=2c/\sqrt 3>c` are correct. It uses the reference speed supplied by the bulk-linear item, whose coordinate-speed interface needs the definition above.

## Blockers and limitations

The cross-batch rows for the draft Gibbs, perfect-projection, and dissipative-entropy suppliers remain open in the current run evidence because their upstream readiness records are unresolved/stale. I checked their actual statements and conditional arguments for the uses made here; this reader did not alter or close those owner-scoped records, and no readiness or proof approval is inferred from author records.

The cited Bal and Tadmor lecture-note sources were not independently retrieved during this review. The assigned items contain local derivations, and my mathematical conclusions above rest on those derivations and the exact supplier items inspected, not on an unverified claim about those lecture-note locators. I did not re-audit the full transitive mathematical-library closure; I inspected the direct suppliers needed for the assigned proof steps.

No items were repaired, so no proof contract, judge record, reflow, precheck, or proof-layout file was changed or run.
