# Step 3a reader report — batch 60

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch `60`

## Verdict

Both assigned pages pass after a narrow repair to the A-page load convention. No uneditable defect or blocker remains in the reviewed scope.

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/least-squares-fem-and-practical-dpg.md` (A)
- `library/numerical-pdes-and-spatial-discretization/least-squares-fem-and-practical-dpg-examples.md` (B companion)

Assigned items:

- A page: `lem-na-ultraweak-poisson-rotation-trace-2d`; `def-na-least-squares-poisson-first-order`; `def-na-ultraweak-poisson-dpg-formulation`; `lem-na-least-squares-poisson-residual-norm-equivalence`; `alg-na-practical-dpg-finite-riesz-solves`; `lem-na-hdiv-normal-trace-surjectivity`; `lem-na-ultraweak-poisson-skeleton-quotients`; `rem-na-practical-dpg-roundoff-and-normal-equations`; `lem-na-ultraweak-poisson-bilinear-form-bounded`; `lem-na-ultraweak-poisson-trial-kernel`; `lem-na-least-squares-poisson-space-conformity`; `lem-na-practical-dpg-fortin-p1-r3`; `alg-na-ultraweak-poisson-ideal-trial-to-test`; `thm-na-least-squares-poisson-best-approximation`; `lem-na-ultraweak-poisson-bounded-load-lifting`; `thm-na-practical-dpg-fortin-quasioptimality`; `thm-na-ultraweak-poisson-adjoint-graph-infsup`; `thm-na-ideal-ultraweak-poisson-energy-best-approximation`; `thm-na-practical-dpg-residual-estimator-equivalence`; `cor-na-practical-dpg-poisson-quasioptimality-estimator`.
- B page: `cex-na-least-squares-boundary-omission-nonunique`; `ex-na-least-squares-poisson-residual-certificate`; `cex-na-practical-dpg-too-small-test-space`; `ex-na-ideal-and-practical-dpg-test-vectors`.

Opened page prerequisites `variational-crimes-and-strang-lemmas` and `discrete-de-rham-complexes-and-edge-elements`, and the latter page's cited `lem-na-weak-hcurl-tangential-trace` to check the A-page dimensional qualification.

Opened direct and relevant transitive item suppliers: `def-axiom-of-choice`; `def-countable-choice`; `def-na-contravariant-piola-map`; `def-na-hdiv-space`; `def-na-h0div-space`; `def-na-simplicial-mesh-rt-bdm-spaces`; `def-matching-affine-simplicial-meshes`; `def-sobolev-space-wkp-and-its-norm`; `def-wkp-zero-as-a-sobolev-closure`; `def-broken-and-conforming-polynomial-spaces`; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`; `lem-w-one-two-is-a-hilbert-space`; `lem-na-hdiv-is-hilbert-and-h0div-closed`; `lem-na-hdiv-weak-normal-trace`; `lem-na-homogeneous-dirichlet-poincare`; `lem-na-h1-interior-facet-traces-agree`; `lem-na-simplex-h1-facet-trace-bound`; `lem-na-smooth-neighborhood-dense-in-h1-simplex`; `lem-na-piola-preserves-rt-bdm-spaces`; `lem-na-piola-divergence-and-flux-identities`; `lem-na-rt0-unisolvence-and-global-conformity`; `lem-shape-regular-affine-simplex-scaling`; `lem-affine-simplex-gauss-green-formula`; `thm-affine-piola-differential-and-trace-moment-identities`; `thm-reference-simplex-poincare-wirtinger`; `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`; `thm-lax-milgram`; `thm-na-infsup-bounded-right-inverse-hilbert`; `thm-na-babuska-brezzi-kernel-coercivity`; `thm-normal-equations-square-the-spectral-condition-number`; `thm-riesz-representation-for-hilbert-space`; `thm-riesz-representation-in-finite-dimensions`; `thm-zero-boundary-piecewise-polynomials-in-w10p`.

The batch manifest and batch-60 proof-contract file were inspected. The proof-contract scope has 22 proof-bearing items; the two assigned definitions have no proof-step contract.

## Review and repair

The independent review found one confirmed definition omission. In `def-na-ultraweak-poisson-dpg-formulation`, the formula `F_f(y)=(f,v)` did not specify a space for `f`, so the displayed $L^2$ pairing was not fully defined. The item now states that `f` is a real $L^2(\Omega)$ load. The assigned A-page summary now states the same condition for its right-hand side. This is also the load domain used in Gopalakrishnan and Qiu, *An Analysis of the Practical DPG Method*, §3.2, printed p. 6: the ultraweak form is followed by “for some $f$ in $L^2(\Omega)$” (https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf, §3.2).

I checked the definition's 16 direct and indirect current-run consumers. All are in batch 60: `alg-na-practical-dpg-finite-riesz-solves`; `alg-na-ultraweak-poisson-ideal-trial-to-test`; `cex-na-practical-dpg-too-small-test-space`; `cor-na-practical-dpg-poisson-quasioptimality-estimator`; `lem-na-hdiv-normal-trace-surjectivity`; `lem-na-practical-dpg-fortin-p1-r3`; `lem-na-ultraweak-poisson-bilinear-form-bounded`; `lem-na-ultraweak-poisson-bounded-load-lifting`; `lem-na-ultraweak-poisson-skeleton-quotients`; `lem-na-ultraweak-poisson-trial-kernel`; `thm-na-ideal-ultraweak-poisson-energy-best-approximation`; `thm-na-practical-dpg-fortin-quasioptimality`; `thm-na-practical-dpg-residual-estimator-equivalence`; `thm-na-ultraweak-poisson-adjoint-graph-infsup`; `ex-na-ideal-and-practical-dpg-test-vectors`; `rem-na-practical-dpg-roundoff-and-normal-equations`. Their spaces, bilinear form, and generic-load conclusions are unchanged; statements specifically using $F_f$ already assume $f\in L^2$. No consumer proof repair was needed.

The batch-60 proof-contract file had ten cached Statement quotes for the repaired definition. I refreshed those quotes to match the current Statement. The definition has no proof contract and no `verification.judge` record to remove; no stale judge record was present on its reviewed consumers.

Validation for the changed item: `node tools/tsx-run.mjs tools/reflow.mts items/def-na-ultraweak-poisson-dpg-formulation.md` reported unchanged; `node tools/tsx-run.mjs tools/precheck.mts items/def-na-ultraweak-poisson-dpg-formulation.md` reported 0 checked and 0 failing (the definition has no proof section); `node tools/proof-layout.mjs items/def-na-ultraweak-poisson-dpg-formulation.md` reported 1 item, 0 steps, 0 defects. The ten contract quotes were checked against the current Statement and all ten match.

## Page verdicts

- `least-squares-fem-and-practical-dpg` (A): pass after the load-domain repair. The residual sign convention, planar rotation orientation, least-squares minimization claim, trace quotient description, topology-free right inverse, Fortin moments, and conditional practical-DPG estimates are supported by the reviewed item proofs. The page correctly limits the practical P1/R3 Fortin family to dimension two and distinguishes the cited three-dimensional tangential-trace prerequisite.
- `least-squares-fem-and-practical-dpg-examples` (B): pass. The constant-field nonuniqueness example, square-domain polynomial residual certificate, dimension argument for an undersized test space, and $2\times2$ ideal/practical test-vector calculation are correct under their stated hypotheses.

## Sources and coverage limits

For DPG context I read Gopalakrishnan and Qiu, §2 (abstract Theorem 2.1) and §3.2–§3.4 (ultraweak form, trial/test spaces, Fortin construction and convergence) in their complete 15-page PDF at the URL above. For least-squares context I read Bochev and Gunzburger, *Least-Squares Finite Element Methods*, §2.2.1 and §4.2, especially equations (32)–(38) on the first-order Poisson functional and its residual norm equivalence (https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.pdf). That source uses its own boundary and finite-element hypotheses; the batch proofs establish the claims under their stated hypotheses.

Coverage note: all 24 assigned items, both assigned pages, both declared page prerequisites, the page-linked tangential-trace result, all direct item dependencies, and the listed mesh, Piola, trace, and Hilbert suppliers needed for the reviewed arguments were opened. I did not re-audit every remote foundational dependency beneath those suppliers. No uneditable defect was confirmed in the reviewed scope. The run status command reported the run as `running`, with batch 60 still part of the 3a-read frontier; no dispatch was in flight when checked.

Blocker: none.
