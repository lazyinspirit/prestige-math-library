# Step 3a scope review — finite-coxeter-invariants-and-coinvariant-gradings

Run `frontier-42-coxeter-32`, batch 20, design label CG-15.

- A: `finite-coxeter-invariants-and-coinvariant-gradings` (order 1756)
- B: `finite-coxeter-invariants-and-coinvariant-gradings-examples` (order 1757, leaf)
- **Decision: `sufficient`** for the A page at its current scope. No omission, no merger
  or enrichment required, no owner action needed to close the pair. The B page is a
  dependency leaf and inherits this clearance.

This is a scope review only; proof correctness is Step 3b/5 work and is not assessed here.

## 1. Design comparison (prose design vs manifest)

Binding design inputs read: the A/B page prose
(`library/coxeter-groups/finite-coxeter-invariants-and-coinvariant-gradings{,-examples}.md`),
plan §CG-15 (`research/plan-coxeter-groups-track.md`, from the `CG-15` heading), the
scaffold inventory entry `CG-15` (`research/coxeter-scaffold/inventory.json`, page 16),
the independent audit's repaired route (`research/coxeter-scaffold/independent-audit.md`,
"Invariant degrees and Poincaré exponents" seam), and the owner direction
(`research/frontier-42-coxeter-32-owner-authoring-direction.md`). The run's plan-spec
entries for both pages are deliberately pre-splice (empty item arrays, orders 1756/1757,
A requires `finite-coxeter-diagrams-and-complete-classification`,
`finite-weyl-invariants-bruhat-and-kostant-harmonics`, `relations-functions-and-quotients`,
`bipartite-coxeter-elements-and-ordered-root-complexes`); the manifest items implement the
design's item-level authority.

All six designed local supplier contracts are present with exact ids, kinds and relative
order, and each keeps the designed claim and route (statement-level check):

| Design contract (plan §CG-15) | Manifest item |
|---|---|
| complexification / hypothesis adapter for the published CST theorem, with AC | `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` |
| definition of degrees, exponents, graded coinvariants, with explicit abstention | `def-cg-coxeter-basic-degrees-and-graded-coinvariants` (justifier `lem-cg-basic-degrees-independent-and-coinvariant-series`, as bound in the scaffold) |
| multiset independence, invariant/coinvariant Hilbert series, prod d_i = \|W\|, Molien | `lem-cg-basic-degrees-independent-and-coinvariant-series` |
| characteristic-zero rational differential bridge, J ≠ 0, no étale/transcendental imports | `lem-cg-formal-rational-differentials-and-invariant-jacobian` |
| Σ(d_i−1) = \|Φ_+\| by Molien pole comparison, J = cΔ, anti-invariants, top sign class, explicit scalar/ordering caveats, no regular-representation import | `thm-cg-coinvariant-top-degree-and-discriminant` |
| regular Coxeter eigenvector determines degrees; A/B/D/I spectra from reflection models; six exceptional exact certificates; trace recurrence | `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, hosted by the two documented local additions `lem-cg-classical-coxeter-spectra-from-reflection-models` and `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` |

The A page carries 8 of its allowed items (5 lemmas, 1 definition, 2 theorems); the two
items beyond the six contracts are the audit-mandated local additions that turn the
design's spectral tables into local proofs (classical types from reflection models;
the six exceptional types from exact matrices matching
`research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json`). No
designed definition, result or example is missing, and the added items are within the
page's declared subject, not scope expansion.

B page: the designed I₂(m) task (invariants x²+y² and Re((x+iy)^m), Jacobian/monomial
algebra generation and independence, coinvariant Hilbert series, noncrystallographic
contrast per `research/coxeter-scaffold/algebraic-source-report.md` §"Finite reflection
invariants") is delivered as `ex-cg-i2m-invariants-and-coinvariant-hilbert-series`. The
two further worked examples (`ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`,
`ex-cg-e6-and-h3-spectra-from-exact-matrices`) instantiate the repaired A-page routes
(J = cΔ with explicit constant; exact exceptional spectra) and use only the A page and
its prerequisite closure. B declares only `finite-coxeter-invariants-and-coinvariant-gradings`
as a requirement, and no item outside batch 20 declares a dependency on a B item — the
leaf contract holds.

## 2. Source coverage

`research/frontier-42-coxeter-32-batch-20.coverage.json` records 4 sources, 27 harvested
rows: **11 `included`, 6 `inline`, 9 `out-of-scope` (with per-row reasons), 1 `deferred`**.
Every harvested result names the consuming item or an explicit reason. The deferred row
(`Cat(W) = ∏(d_i+h)/d_i`, Ripoll slide 4) has destination
`noncrossing-partition-lattices-and-kreweras-complements`, which is present in this run
(batch 31, 6 items). The out-of-scope rows are principled abstentions and each is
consistent with the prose design: the regular-representation strengthening of CST part
II/Swanson Thm 15 and Springer/fake-degree and Shephard–Todd classification material are
not promised by this page; Kostant harmonics are explicitly homed in the published
`finite-weyl-invariants-bruhat-and-kostant-harmonics`; the Cartan-matrix eigenvalue
correspondence is not used. The important positive disposition: the general
complex-reflection case of the published CST theorem is harvested `inline` and is what
the page consumes for noncrystallographic types.

Sourcing strength: Etingof's complete course notes (primary invariant-theory route,
§§10.6, 12.1–12.2) plus three independent lecture-note treatments (Casselman, Swanson,
Ripoll) for the Coxeter-plane/spectral facts; the pair's own 2 local additions are exact
finite computations backed by a same-run certificate with its proof note
(`research/coxeter-scaffold/math-checks/degree-poincare-proof-route.md`,
`finite-degree-poincare-certificates.json`, `finite-degree-poincare.py`).

## 3. Dependencies and prerequisites

- The 11 items declare 69 dep/`justified_by` references and contain 63 wikilinks; all 63
  resolve and every wikilink is declared. No `forward_refs` remain in either page.
- 43 referenced suppliers are published library items; **all** carry
  `status: published` (checked in frontmatter). 26 suppliers are current-run items in
  batches 2, 4, 7, 13, 17, 19 — all scaffolded, and I spot-checked their statements:
  `def-hh-coxeter-matrix-word-group-and-length`,
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-bipartite-coxeter-element-and-root-recursion`,
  `lem-cg-steinberg-bipartite-root-enumeration`,
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`,
  `thm-cg-finite-type-positive-definite-criterion`,
  `thm-cg-finite-chamber-tiling-and-coset-face-identification`,
  `lem-cg-diagram-products-and-invariant-form-comparison`. Each exposes the interface the
  batch-20 items consume.
- Full transitive closure from the 11 items (over published frontmatter deps and run
  manifest deps/justified_by): **1371 items, 0 missing**.
- Published general-case statements re-read at scope level and adequate for the page's
  noncrystallographic uses: `thm-chevalley-shephard-todd-for-finite-weyl-groups` carries
  the explicit "every finite subgroup generated by complex reflections" clause (its
  Etingof source, Theorem 10.6, was independently confirmed against the live notes by
  web check: C[V]^G polynomial iff finite G is a complex reflection group);
  `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` is stated for finite
  complex reflection groups under AC;
  `lem-reflection-basic-invariants-form-a-regular-sequence` is AC-scoped for finite
  complex reflection groups; `lem-finite-reflection-invariant-generators-are-algebraically-independent`
  is choice-free. No consumed clause is narrower than the batch-20 use.
- Post-splice undeclared-prerequisite licensing: every dep home is either a published
  page on disk or a run page with a library page file on disk (the splice check licenses
  on-disk pages by reading order), and all four A-page `requires` resolve to present
  pages. No unmet prerequisite, and no "absent from both the published library and the
  current scaffold" case, is confirmed.
- Intended library role: the page sits in the pathway part "finite-geometry-and-curvature-tools"
  and adapts the published invariant-theory suppliers to Coxeter geometry without
  duplicating their proof home. Its consumers are covered:
  `coxeter-descents-poincare-polynomials-and-growth` (batch 25) consumes the definition
  and the degree-determination theorem for its Poincaré/exponent product and exact
  parabolic certificates (degree tables for all types incl. H₃, H₄, I₂(m), reducible
  products — delivered by the theorem's clauses (1)–(3)); the deferred Cat(W) route
  consumes the degrees in batch 31. No consumer references any withheld clause
  (regular representation, Kostant harmonics, Springer data).

## 4. Checks run (actual results)

| check | command | result |
|---|---|---|
| coverage | `node tools/coverage-checklist.mjs …batch-20.coverage.json --require-destination` | 1 page, 27 rows, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-20.pages.json` | 11 items, 0 normalized, 0 errors |
| source stamps | `node tools/source-fetch-check.mjs --coverage …batch-20.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| design audit | `python3 research/coxeter-scaffold/audit-design-check.py` | 140 contracts, 29 pairs, 58 pages, 0 errors; exact finite certificate comparison true |
| pair status | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` | pair previously unreviewed (this decision is the first) |
| gate scoping | `frontier-gate-pages.json` / `frontier-gate-items.json` | both pages and all 11 items are gate subjects |

## 5. Residual uncertainty (recorded, not blocking)

- Item proofs do not exist yet; this review certifies scope and design coverage only.
  The batch-20 readiness records are step-1 interfaces, not mathematical acceptance.
- I did not personally re-read the four source PDFs in this pass; I verified the recorded
  fetch stamps and harvest rows, re-ran the checks above, and confirmed the one decisive
  source claim (Etingof Theorem 10.6, general complex-reflection direction) against the
  live source. The audit's independent reexecution of the six exceptional certificates
  is recorded in `independent-audit.json`/`audit-checks.json`.
- Supplier pairs `bipartite-coxeter-elements-and-ordered-root-complexes` and
  `finite-coxeter-diagrams-and-complete-classification` have not yet received their own
  Step 3a scope decisions (engine-scheduled). Their items exist in the scaffold with
  matching interfaces; no batch-20 decision depends on their review outcome.

Report path: `research/frontier-42-coxeter-32-step3a-pair-finite-coxeter-invariants-and-coinvariant-gradings.md`.
