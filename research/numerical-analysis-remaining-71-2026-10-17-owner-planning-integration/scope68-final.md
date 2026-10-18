# Batch 68: general hp energy bound and local proof repairs

Run: numerical-analysis-remaining-71-2026-10-17. Complete native input read: `scope-review/batch-68/review-0.json`. Read CLAUDE, current owner directions including the controlling 2D PE28 selection, the complete PE28 design, all 25 actual original item carriers and both complete pages. This is owner source work, not native acceptance, independent review, recertification or gate permission.

## Scope and archived originals

Before the first mutation, archived exact bytes of the three changed original items and the A page under `scope68-before/items/` and `scope68-before/library/numerical-pdes-and-spatial-discretization/`. One genuinely new item is authored: `thm-hp-galerkin-h-p-regularity-energy-bound`, with root's prior approval of its exact interface and same-A placement. Root owns manifests, contracts, dependency levels, provenance/readiness integration, hashes and native controls.

All 25 originals remain. Their mathematical Statements are unchanged. The one corrected Example formulation replaces the mismatched one-dimensional interval by the approved square-box instance. No outside source was edited. The final inventory is 26 items: 22 A and the original four B examples/counterexample.

## Native findings and exact resolutions

1. PE17 page relation: the report's draft/publication concern is not a missing prerequisite pair. Actual `curved-mesh-geometry-and-conservative-mesh-transfer` is a current same-frontier page with 18 items; its draft status is expected. Read that actual complete page. Retained the declared page edge. Replaced obsolete reader-facing “remains open at page level” prose with the mathematical distinction between these affine claims and curved geometry's separate mapping/transfer hypotheses. No claim that PE17 has already passed its current native local repair or final review is made; root owns its exact run-level reconciliation.

2. Missing general h,p,regularity energy clause: confirmed. The original fixed-mesh tensor theorem and corner theorem are valid separate branches, but did not state the general composition of the proved varying-degree triangle interpolant and Céa. Added the complete new typed theorem described below, preserving both old branches and all geometric/analytic assumptions.

3. Fixed-box example mismatch: confirmed. The space definition uses d>=2 and the selected tensor scope is quadrilateral/hexahedral. `ex-hp-analytic-p-refinement-on-a-fixed-box` now uses the single square (-1,1)^2 and u(x,y)=1/(4-x), the H1 inner-product form, and the exact bounded load. Its proof checks all multi-indices: y derivatives vanish, and x derivatives satisfy the same factorial bound with M=1/3, R=2, q=3/4. The exponential Galerkin rate is retained. Actual repository searches found no item consumer of this generated example; its sole placement is the B page, whose generic fixed-box description remains accurate.

4. Unsupported stronger edge trace: confirmed. In `lem-hp-simplex-p-explicit-conforming-interpolant`, new proof step 1.1 derives H2-to-H1(edge) from the actual first-order trace theorem rather than citing it as if stated. Smooth H2 approximants have L2-convergent traces of both function and gradient. One-dimensional integration by parts against compactly supported edge tests passes to the limit, giving distributional tangential differentiation equal to the tangential gradient trace. The H1 edge representative agrees with the continuous H2 representative by the uniform one-dimensional H1 estimate and point evaluations. Separate physical value/gradient trace scaling gives exactly h^(-1/2)L2+h^(1/2)H1 and h^(-1/2)H1+h^(1/2)H2. Multiplication by the edge weights yields h^(-1)L2+H1+hH2, the scaled quantity required by the original factorial rate. Existing assembly/energy arguments are retained; their references were updated to the shifted construction step.

5. Interval endpoint FTC omission in the analytic triangle/interval supplier: confirmed. Added the exact proved `thm-ftc-second-part` premise. Step 5.1 now distinguishes orthogonality's equality of the integrals from the FTC evaluation integral(f')=f(1)-f(0), and proves both endpoint identities explicitly. The analytic triangle and endpoint-projector Statements are unchanged.

## New general energy theorem

The new item treats arbitrary finite matching shape-regular affine triangulations in two dimensions, all cell degrees p_K>=1 and unrestricted degree ratios. It retains the actual effective degree m_K=min incident shared-edge degrees. The exact real bounded coercive Galerkin form carries its actual M_a/alpha_a factor. It covers V=H1 with its full norm and V=H10 with its gradient norm, distinguished by chi=1 or zero. For zero-boundary inputs, the interpolant is genuinely in H10: a boundary-distance cutoff zero on dist<=1/k, one on dist>=2/k, followed by interior mollification proves membership in the Sobolev closure.

For arbitrary continuous piecewise H2 inputs, it states Céa times the square-summed local comparison functional. The seminorm comparison is J_K=H1 error plus the two scaled edge errors; R_K adds h_K^(-1)L2 error. The common energy norm is bounded by the square root of sum[J_K^2+chi h_K^2 R_K^2]. Comparison polynomials lie in P_(m_K) and need not match; the one canonical interpolant uses the common traces of u, so no nonconforming gluing is assumed.

The proved canonical reference Bramble–Hilbert moment polynomial, transported by actual affine scaling, gives for each integer s_K>=2 with m_K>=s_K-1 an explicit h_K^(s_K-1) estimate. Thus piecewise H2 inputs have an O(h) energy estimate for every allowed degree assignment, including degree one. Its exact full-norm square sum retains (1+chi h_K^2), the local Sobolev seminorm and regularity-dependent constant.

For r_K>=5, m_K>=2r_K-4 and n_K=floor(m_K/2), the additional p-dependent refinement uses precisely the available factorial factor sqrt((n_K-r_K+3)!/(n_K+r_K-5)!). For m_K>=4(r_K-2), it can be bounded by (4/m_K)^(r_K-4). The full squared estimate is M_a/alpha_a times the root sum of C_(r_K,gamma)^2(1+chi h_K^2)h_K^(2(r_K-1))eta_K^2|u|_(H^r_K)^2. No optimal p^(-(r-1)) rate, uniform bound in regularity, or 3D corner exponent is invented. The A-page prose now records both the all-degree h bound and this actual conservative p refinement.

## Actual supplier reading

Read the complete actual source carriers of the varying-degree conforming interpolant, ordinary H^r triangle approximation, strong-edge polynomial lift, analytic triangle/interval approximation, fixed-tensor analytic approximation, conformity and fixed-mesh Galerkin theorem. Read the actual canonical Céa, reference-simplex trace/Gauss–Green, all-finite-order smooth density, H2 point-evaluation threshold, affine simplex scaling, Bramble–Hilbert, Sobolev Banach completeness, Poincaré and second FTC statements and proofs. Their exact hypotheses and choice costs are carried: the general triangle branch assumes AC; the retained analytic tensor/corner branches keep their own existing choice assumptions. No new external source retrieval or full-book reading is claimed in this task; the new theorem is a complete local composition of these proved canonical suppliers, not a citation fallback.

## Same-owner consumer dispositions

- `def-hp-variable-degree-spaces-on-matching-meshes`: unchanged broad d>=2 simplex/box definitions, hierarchy/refinement conventions and trace-minimum degrees. New general theorem is explicitly two-dimensional and does not restrict this definition.
- `def-hp-integrated-legendre-projector` and `thm-hp-reference-interval-integrated-legendre-projection`: unchanged endpoint-anchored formulas and coefficient-scale estimate; the analytic supplier repair now separately justifies its own endpoint FTC use.
- `lem-legendre-gauss-lobatto-nodes-are-distinct`, `def-legendre-gauss-lobatto-rule-on-affine-boxes`: unchanged orthogonality/Rolle node argument and finite cardinal-weight construction; no new approximation premise enters.
- `lem-reference-jacobi-weighted-endpoint-kernel`, `thm-hp-simplex-p-dependent-face-trace-inverse`, `cex-hp-degree-independent-sipdg-penalty-loses-coercivity`: unchanged exact kernel constant, degree-dependent normal trace factor and explicit negative SIPDG witness. Their one-dimensional kernel/counterexample scope is self-contained and does not depend on the box-space example repair.
- `thm-hp-simplex-weighted-spectral-projection`: unchanged explicitly coefficient-defined scale, with no unsupported identification with ordinary Sobolev norms.
- `lem-hp-unweighted-legendre-derivative-tail`, `thm-hp-triangle-unweighted-smooth-approximation`, `lem-hp-triangle-degree-uniform-strong-edge-lift`: unchanged factorial derivative tail, transported scaled H2 error and degree-preserving strong-edge lift. Their actual constants/degree thresholds are exactly those used in the new energy theorem.
- `lem-hp-simplex-p-explicit-conforming-interpolant`: original varying-degree/shared-edge assembly and all Statements retained; new local trace proof supplies its previously overstated F4 use and explicitly justifies the h factors in its last rate.
- `lem-variable-degree-polynomial-spaces-are-h1-conforming`: unchanged finite-degree maximum reduction on simplices and cellwise integration-by-parts on boxes. Both new energy norm branches use its actual cellwise weak gradient.
- `thm-hp-analytic-p-convergence-on-fixed-tensor-mesh`, `thm-hp-galerkin-energy-error-on-fixed-mesh`: preserved full analytic tensor proof and fixed-mesh estimate. The corrected square example now meets their literal dimensional and derivative hypotheses. The general triangle result is an additional theorem, not a false expansion of these fixed-mesh claims.
- `lem-hp-analytic-polynomial-approximation-on-a-triangle` -> `thm-hp-corner-exponential-energy-convergence` -> `ex-hp-reentrant-corner-h-versus-hp`: read this actual consumer chain in full. The supplier's endpoint-preserving derivative projection and exponential H1 error remain exactly the interface used on noncap edges and the cap's opposite edge. The corner theorem's direct weighted-analytic construction, singular-cap estimate, at-most-O(k) count, uniform p~k law and exp(-bN^(1/3)) direction all remain valid. The same L-shaped polygon example's weighted membership, fixed-degree h^(2/3) lower bound and separate global hp upper bound are unchanged. No ordinary H2 assumption is imposed on singular caps.
- `lem-hp-weighted-analytic-corner-pointwise-control`, `lem-hp-corner-uniform-degree-dof-count`: unchanged weighted representative/decay and dimension count; neither is replaced by the ordinary regularity theorem.
- `thm-hp-gll-top-mode-and-puniform-energy-equivalence`, `thm-hp-gll-strang-error-with-aliasing-defect`, `ex-hp-gll-mass-top-mode-correction`: unchanged top-mode correction, tensor p-uniform norm bounds, retained exact Strang defect and p=2 mass calculation. No equivalence of GLL and exact Galerkin assembly is asserted.
- Both pages: read completely. A now places the new theorem and describes the genuine h/p/regularity composition; the declared same-frontier PE17 requirement is unchanged. B's fixed-box, GLL, SIPDG and same-polygon corner summaries remain accurate and require no edit.

Actual item/page searches found no outside logical consumer of either repaired lemma and no logical consumer of the corrected generated example. No original theorem Statement or Definition changed; only the corrected example domain changed formulation, with its actual page disposition above. Root's declared PE17/native reconciliation remains distinct from this mathematical source work.

## Final explicit formatting check

After the final item edits ran:

`node tools/proof-layout.mjs items/lem-hp-simplex-p-explicit-conforming-interpolant.md items/lem-hp-analytic-polynomial-approximation-on-a-triangle.md items/ex-hp-analytic-p-refinement-on-a-fixed-box.md items/thm-hp-galerkin-h-p-regularity-energy-bound.md`

Exit 0: `proof-layout: 4 items, 18 steps, 0 defects`.

All five native findings have concrete mathematical/source or explicit owner-reconciled scope dispositions. No identified mathematical prerequisite remains missing here. No tests, full validators, gates, native report/control edits, outside source edits, publication or commits were performed.
