# Step 3a scope review — `lax-milgram-and-weak-elliptic-solutions`

- Run: `frontier-39-analysis-30`
- A page: `lax-milgram-and-weak-elliptic-solutions` (order 458.029, `pde`, batch 10)
- B page: `lax-milgram-and-weak-elliptic-solutions-examples` (order 458.03)
- Owned pair only; no other pair or shared file edited.
- Decision: **insufficient** (one confirmed, bounded omission; everything else passes).
  Receipt: `research/frontier-39-analysis-30-step3a-review-lax-milgram-and-weak-elliptic-solutions.json`
  (`sha256 7891e28899f31fd08750c5ed9abcc20fd4d58e0ab032842cc76ff3163b6af8b5`, recorded
  2026-10-04T19:07:50Z). Engine state: `step3-decisions check --phase scope` reports this pair
  owner-held ("insufficient scope; owner must proceed, merge or enrich") until the owner applies
  the enrichment or reword and records `proceed` for the resulting scope.

## Inputs read

- Manifests `research/frontier-39-analysis-30-batch-10.pages.json` (A: 27 items, B: 11 items),
  `research/plan-spec.json` orders 458.029/458.03 (item lists still empty pre-splice).
- Coverage `research/frontier-39-analysis-30-batch-10.coverage.json`; construction note
  `research/frontier-39-analysis-30-batch-10.notes.md`; dependency input
  `research/frontier-39-analysis-30-batch-10.cross-batch-dependencies.json`; run-level ledger
  `research/frontier-39-analysis-30-cross-batch-dependencies.json`.
- Prose design `research/plan-pde-track.md` PDE-16 (L1638–1696), PDE-16 additions table
  (L3642–3658), seam notes (L85–104, L204–213, L2448–2456), page contract L1638 ff.;
  `research/frontier-39-analysis-30-planning-notes.md` row 10.
- Alpha drift verdict for this page: no-drift (`...-alpha-step1-drift.md`).
- Published library (`items/`): suppliers and their statements were opened for the load-bearing
  uses (Riesz representation, Banach fixed point, sesquilinear-forms convention, Hilbert adjoint,
  trace right inverse, sharp-trace counterexample, `rem-lax-milgram-owned-by-pde`).
- Checks rerun (read-only): `manifest-deps` 38/0; `coverage-checklist` 2 pages / 71 results /
  0 errors / 2 low-yield warnings; `source-fetch-check` 8/8 fetch-verified;
  `splice-plan --verify` findings for this pair quoted below.

## Design crosswalk (scope vs prose plan)

- A page: **17/17** design claims present with matching IDs and kinds (`def-bounded-coercive-…`,
  `lem-form-to-bounded-operator-by-hilbert-riesz`, `lem-coercivity-makes-a-small-form-step-a-contraction`,
  `thm-lax-milgram`, `cor-symmetric-…-energy-minimisation`, `rem-nonsymmetric-…`,
  `def-h-minus-one-…`, `lem-ltwo-and-divergence-data-embed-in-h-minus-one`,
  `def-uniformly-elliptic-…`, `def-weak-dirichlet-…`, `lem-elliptic-form-…-bounded`,
  `lem-coercivity-of-the-principal-dirichlet-form`,
  `thm-existence-and-uniqueness-…-poisson-problem`,
  `thm-lax-milgram-solvability-for-coercive-divergence-form-equations`,
  `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
  `lem-classical-solutions-satisfy-the-weak-formulation`,
  `cor-weak-solution-depends-continuously-on-data`).
- Plus **9/9** PDE-16 additions-table rows (`lem-coercive-form-operator-is-bounded-below`,
  `lem-bounded-below-operator-has-closed-range`, `lem-adjoint-of-a-coercive-…-is-coercive`,
  `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense`,
  `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
  `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form`,
  `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`,
  `cor-positive-reaction-restores-coercivity-without-dirichlet-poincare`,
  `lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound`).
- Plus **1** disclosed local prerequisite `lem-w-one-two-is-a-hilbert-space` (needed by the
  `H^1` and mean-zero-subspace applications; no published item asserts the inner-product
  structure of `W^{1,2}` — `def-hk-and-hk-zero-notation` explicitly declines it,
  `cor-bessel-potential-spaces-are-hilbert-and-complete` is a different space).
- B page: **7/7** design leaves plus **4/4** B additions present (interval model, `L^2⊂H^{-1}`
  computation, nonsymmetric coercive form, bounded-without-coercivity, coercive-nonsymmetric,
  no `H^1` lifting of `L^2` boundary data, non-coercive Neumann on all of `H^1`, complex
  convention, sharp `1/α` example, Neumann kernel, adverse zero-order term).
- No design claim is dropped, weakened, or moved without a written reason. Design conventions
  are honoured: real bilinear case stated separately; complex first-slot-linear convention
  matches `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution` and the published
  Riesz item; `H^{-1}` is the conjugate-linear dual with the Banach-dual identification recorded
  (batch note conflict 2), pairing distinguished from the `L^2` inner product.

## Source coverage

- Five full texts back the pair (Hunter §§4.1–4.7; Laugesen Ch. 3 §3.10 / Ch. 4 §§4.1–4.4 /
  Ch. 5 §5.1; Brezis Ch. 5 §5.3 / Ch. 8 / Ch. 9; Teschl Ch. 10 §§10.1–10.2; Simon Lecture 7);
  `source-fetch-check` reports 8/8 entries fetch-verified.
- 71 harvested headings dispositioned (18 included, 36 inline, 1 already-published, 8 deferred,
  8 out-of-scope). I confirmed the declines: the deferred ranges are owned by the later in-run
  pairs `fredholm-elliptic-problems-and-the-elliptic-spectrum` (PDE-17) and
  `interior-and-boundary-sobolev-elliptic-regularity` (PDE-18) and by the maximum-principles
  pair; the out-of-scope rows (heat flow, semigroup theory, Weyl/nodal material) belong
  elsewhere or are published. The two `coverage-low-yield` warnings are explained by the large
  number of `inline` absorptions and are not silent omissions.
- [ACM] could not be fetched after five attempts (Cloudflare/paywall); no claim depends on it
  and Step 5 may check it if access appears (batch note conflict 8).

## Intended role in the library

- Confirmed seam owner: plan L85–104/L204–213/L2448–2456 and the published remark
  `rem-lax-milgram-owned-by-pde` assign bounded/coercive forms and Lax–Milgram to this PDE page;
  FA supplies only Riesz representation (FA-13) and the abstract machinery. The proof route
  (Riesz operator + strict contraction + published Banach fixed point) matches the design's
  hard-obligation paragraph; the closed-range/density items are kept as the recorded classical
  additions.
- Downstream consumers are supported: PDE-17 (batch 11) consumes `thm-lax-milgram`,
  `cor-lax-milgram-inverse-…`, `lem-adjoint-of-a-coercive-…`, `def-uniformly-elliptic-…`,
  `def-weak-dirichlet-…`; the regularity, maximum-principles and semigroup pairs consume
  `def-weak-dirichlet-…`, `lem-elliptic-form-…-bounded`,
  `lem-classical-solutions-satisfy-the-weak-formulation`,
  `thm-weak-neumann-poisson-solvability-…`, all present. The run-level ledger records these
  edges as open reviews of this batch's suppliers, as expected at Step 3a.

## Unmet prerequisite (confirmed gap; blocks scope)

**Consuming item.** B page `cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity`.
Its statement fixes "the Dirichlet Poincaré constant `C_P=1/π`" on `(0,1)`, compares the
theorem's smallness condition to `θ/C_P²=π²≈9.87`, and asserts a nontrivial homogeneous solution
"at the endpoint of the interval of solvability".

**Required prerequisite claim.** For `I=(0,L)`, `‖u‖_{L²} ≤ (L/π)‖u'‖_{L²}` for
`u∈H^1_0(I)` — equivalently the sharp width-constant `C(2)(b−a)` for the slab — together with the
interval eigenpair `(sin(πx), π²)` (or equivalent optimality), which is what licenses the
`=π²` equality and the endpoint sentence. The plain inequality alone is true; the optimality is
what the wording consumes.

**Evidence of absence from this pair's permitted supply.**

1. The pair's declared supplier `thm-poincare-inequality-for-w-one-p-zero` (batch 4) states only
   `C(p)(b−a)` with unspecified `C(p)`, and its strategy derives `C(p)=1` (no optimality, no
   dimension-free `1/π`).
2. No published item states the sharp 1-D/slab zero-trace constant or the interval eigenpair
   (searches over `items/` for Poincaré/Wirtinger items, `λ₁=π²`, `sin(πx)` eigenfunctions: none).
3. The run's scaffold touches the fact only downstream of this pair: `ex-rayleigh-quotient-on-an-interval`
   (batch 16 B page, order 458.041) asserts `λ₁=π²` on `(0,1)`; the batch-11 pair (order 458.031)
   supplies the spectral framework, but `cor-poincare-constant-and-first-dirichlet-eigenvalue`
   explicitly asserts "no numerical value" and `ex-dirichlet-laplacian-eigenpairs-on-an-interval`
   gives pairs on `(0,π)` with only `λ₁≤1`. All are consumers of this pair, so using any of them
   as a supplier would create a forward cycle.
4. The coverage record defers the Brezis eigenfunction/spectral material to the Fredholm pair
   (row §9.8, printed pp. 311–312). The explicit one-dimensional example
   (`en=√2 sin(nπx)`, `λn=n²π²` on `(0,1)`) is in Brezis §8.6, printed pp. 232–233, verified in
   the fetched full text (`brezis.pdf`), but that section is outside this pair's cited read
   ranges and is not harvested; batch note conflict 7 concedes first-eigenvalue theory "is not
   available here".

**Proposed owner action (enrichment or reword; owner decides).** Either
(a) add a short scaffold lemma to this pair (or to its declared PDE-14 supplier) that states the
sharp 1-D/slab zero-trace Poincaré constant with its eigenpair/optimality content and a proof
from available Fourier/spectral or sourced classical material, and declare it as a dependency of
the counterexample; or
(b) reword the counterexample to use the supplier's available constant (`C_P≤1` on `(0,1)` in the
form `C(2)(b−a)`; condition `c<θ/C_P²` with that `C_P`) and delete the `=π²` equality and the
endpoint-solution clause, keeping the polynomial witness at `c≥10`.
Either applies a scope change, so the pair stays blocked until the owner records `proceed` for
the resulting scope.

## Non-scope observations for authoring (do not change the scope verdict)

- Two statements contain a literal backslash-`n` by a macro (serialization artefact, broken
  LaTeX): `lem-ltwo-and-divergence-data-embed-in-h-minus-one` (`…\Big)\n\|v\|_{H^1_0}`) and
  `cor-weak-solution-depends-continuously-on-data` (`C(\Omega,a)\n\big(`). Fix at authoring or
  owner repair; if the statement text changes, the scope hash changes.
- Malformed contractions ("pag", "desig", "librar") in the statement of
  `def-h-minus-one-as-the-dual-of-h-one-zero` and in the strategies of
  `def-bounded-coercive-and-symmetric-sesquilinear-forms`,
  `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`,
  `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense`,
  `def-weak-dirichlet-solution-for-a-divergence-form-operator`.
- `splice-plan --verify` reports 6 undeclared immediate page prerequisites from this pair's A
  and B items to PDE-14 `sobolev-poincare-and-morrey-inequalities` (items
  `lem-ltwo-and-divergence-data-embed-in-h-minus-one`, `lem-coercivity-of-the-principal-dirichlet-form`,
  `thm-existence-and-uniqueness-…`, `thm-lax-milgram-solvability-…`, `ex-ltwo-forcing-…`,
  `cex-a-large-adverse-…`). The claims exist in the batch-4 scaffold, so this is a
  declaration/Step-4 splice matter, not an unmet prerequisite; the batch note prescribes adding
  the direct backward `requires` edges.
- The planned PDE-14 addition `cor-dual-sobolev-estimate-from-ltwo-to-h-minus-one` is scaffolded
  nowhere; the estimate is re-homed on this pair (batch note conflict 6). No consumer here is
  unsupported.

## Closure evidence

- Transitive closure of all 38 pair items: 139 nodes (95 published + 44 in-run scaffold
  items), **0 missing IDs**; the only non-pair in-run inputs are the batch-4
  `thm-poincare-inequality-for-w-one-p-zero` and the batch-9
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains`, both declared in the
  cross-batch input (1 page + 7 item rows).
- `manifest-deps` 38/0; `fwdcheck`/`extcheck`/`validate-plan` clean at batch scope per the
  construction note, re-checked where cheap.

## Decision

`insufficient` recorded via `tools/step3-decisions.mjs record-scope` for the A page, citing the
confirmed unmet prerequisite above and the recommended owner action, with this report as the
evidence artifact.
