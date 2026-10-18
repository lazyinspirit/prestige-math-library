# Batch 58 — authoring notes

## Inventory, order, and dependencies

The inventory is in `research/numerical-analysis-remaining-71-2026-10-17-batch-58.pages.json`: 16 A-page items and four B-page examples/counterexamples. The A page is below the 100-item cap. Items were authored in dependency order, and levels were recomputed against the current run manifests after the final dependency edits.

| dependency level | A-page items |
|---:|---|
| 0 | `def-signorini-partial-trace-space` |
| 1 | `lem-signorini-partial-trace-space-bounded`, `lem-signorini-rigid-motion-controlled-by-dirichlet-segment` |
| 3 | `def-signorini-elasticity-contact-model` |
| 4 | `def-signorini-contact-variational-inequality`, `lem-signorini-elasticity-form-bounded` |
| 5 | `def-signorini-nodal-p1-contact-scheme`, `lem-signorini-contact-set-closed-convex-nonempty` |
| 6 | `def-signorini-dual-mortar-contact-pair`, `lem-signorini-contact-nodal-test-functions-surjective`, `lem-signorini-nodal-contact-set-conforming`, `lem-signorini-partial-dirichlet-korn-coercivity` |
| 7 | `lem-signorini-dual-mortar-biorthogonality-and-infsup`, `thm-signorini-continuous-contact-vi-wellposed` |
| 8 | `thm-signorini-mortar-contact-kkt-and-complementarity`, `thm-signorini-nodal-contact-vi-falk-error` |

The B-page levels are 0 (`ex-signorini-one-dimensional-obstacle-free-boundary`), 6 (`cex-signorini-nodal-contact-feasibility-needs-convex-obstacle`), 8 (`ex-signorini-contact-patch-test`), and 9 (`ex-signorini-mortar-active-set-change`). Published dependencies do not raise in-run item levels.

The dispatch assigns batch level 2 and names Batch 35 as its prerequisite. The current batch graph records Batch 31 at level 0, Batch 35 at level 1 with Batch 31 as a prerequisite, and Batch 58 at level 2 with both 31 and 35 in its prerequisite closure. There are two direct item-level edges to other in-run batches: the contact model uses the current Batch 35 definition `def-linear-elasticity-displacement-formulation-and-data` only for its literal strain/form formula, and the local Korn lemma uses Batch 31's `thm-na-bounded-lipschitz-domain-divergence-right-inverse`. The new nodal-test lemma also imports the published `thm-lp-trace-operator-on-a-bounded-c-one-domain` for agreement of the local trace with boundary restriction on continuous H1 fields. The complete page/item cross-batch evidence is in `batch-58.cross-batch-dependencies.json`; current draft bodies were inspected, with no upstream acceptance inferred.

The partial-Dirichlet nodal definition requires both $\Gamma_D$ and $\Gamma_C$ to be unions of boundary facets. This mesh-alignment condition is needed for nodal interpolation to preserve the zero trace on $\Gamma_D$, as well as to define contact nodal constraints. It sharpens the boundary-conforming mesh interface without changing the selected scope.

## Plan comparison and conflict record

The detailed PE20 section in `research/plan-numerical-spatial-track.md` (around lines 1501–1505) says a mortar multiplier pair is not selected and keeps mortar stability/complementarity on hold. The canonical PE20 row in `research/plan-spec.json` explicitly requires a stable mortar/contact discretization and complementarity. The owner authoring direction makes the canonical plan input controlling over stale task/design text. Batch 58 therefore supplies and proves one concrete matching dual-P1 contact pair, including its trace-pair inf-sup and KKT equivalence. The result makes no nonmatching-interface, Coulomb-friction, active-set solver, semismooth Newton, or solver-convergence claim. The B active-set calculation is explicitly an algebraic two-gap model, not a finite-element stiffness realization.

The published scalar obstacle definition has an $H^1_0$ interface and is not a supplier for vector contact with a partial Dirichlet boundary on a polygon. The vector gap set is defined locally using traces on fixed C1 collars. The scalar published interface is used only in the one-dimensional B example. Likewise, PE19's imported elasticity definition uses full-zero-boundary $H^1_0$; only its literal strain and bilinear-form formula are reused. Coercivity and well-posedness on the partial-trace space are proved here. The zero-boundary-specific Strang estimate is not used for this partial-boundary case.

## Proof route and hypotheses

- The trace definition fixes C1 collars around the two straight boundary segments. The bounded C1 trace theorem supplies the local traces and their agreement with ordinary restriction on continuous H1 fields; no trace claim is extended across polygon corners.
- The partial Korn proof subtracts the mean translation and mean skew rotation, takes $q=\operatorname{curl}z\in L^2_0(\Omega)$, and applies the actual bounded-Lipschitz divergence right inverse. For $R(w)_{i1}=\partial_2w_i$, $R(w)_{i2}=-\partial_1w_i$, the rowwise rotation preserves the Frobenius norm, $\|R(w)\|_2=\|\nabla w\|_2$, and the integration-by-parts identity is proved by density in $H^1_0$. This gives $\|\nabla z\|_2\le(1+\sqrt2C_{\rm div})\|\varepsilon(z)\|_2$. Poincare–Wirtinger controls the full norm of $z$; the direct segment estimate removes the rigid component. With the stated convention $\|v\|_{H^1}\le c_K\|\varepsilon(v)\|_2$, the elasticity coercivity constant is $\alpha=2\mu/c_K^2$.
- The continuous contact set is nonempty, closed, and convex. Stampacchia supplies existence/uniqueness, and the imported stability bound is applied with the same $V,K,a$.
- The nodal result requires a continuous nonpositive obstacle convex along the contact segment. Convexity puts the interpolated obstacle chord above $\psi$, so $K_h\subseteq K$. The Falk estimate keeps $\eta_{\rm feas}(v_h)=a(u,v_h-u)-F(v_h-u)$ explicit. Its convergence clause uses $u\in H^2\cap C(\overline\Omega)$, shape-regular affine meshes with $h\to0$, and the actual two-dimensional Lagrange interpolation threshold with its Axiom of Choice branch.
- The dual basis is $4\phi_L-2\phi_R$ and $-2\phi_L+4\phi_R$ on each contact edge. Exact integration gives local biorthogonality; assembled weights are $d_i=\sum_{e_k\ni a_i}h_k>0$. The local mass eigenvalues give the $1/\sqrt3$ L2 trace-pair inf-sup bound. The new local nodal-test lemma constructs the global P1 hats, checks matching traces and zero Dirichlet trace, and proves contact-coordinate surjectivity. The KKT proof uses it for multiplier existence and uniqueness, proves both VI/KKT directions and exact complementarity, and derives the displacement bound.

Choice branches are kept distinct. The Axiom of Choice is inherited through the C1 trace, Poincare–Wirtinger, scalar obstacle, endpoint trace, and Lagrange nodal-boundedness interfaces. Countable Choice is used by the divergence right inverse, the closure approximation in the Korn proof, Stampacchia/stability, and one-dimensional Poincare. The local finite-dimensional mortar calculations and the rigid-motion segment estimate add no selection principle.

## Sources read and harvested

The complete referenced texts and relevant complete arguments were read. Exact locators, supported item IDs, and a disposition for each harvested result appear in the two-page `batch-58.coverage.json` and its matching `batch-58.source-coverage.json`.

1. **Andersson**, *The Obstacle Problem*, complete 52-page KTH notes, <https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf>, Chapter 3 §3.1, Theorem 3.1, printed pp. 26–28. Used for the scalar obstacle convention and VI context; the vector partial-trace set is local.
2. **Falk**, *Error Estimates for the Approximation of a Class of Variational Inequalities*, complete 10-page paper, <https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf>, §2 Theorem 1 and §3 Lemma 3, printed pp. 964–970. Used as the comparison route for the local vector Falk bound and nodal feasibility argument.
3. **Guermond**, MATH 661 Fall 2025, Chapter 53, complete 16-page chapter, <https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf>, §§53.1–53.2, printed pp. 391–394. Used for linear strain/form conventions and partial Dirichlet terminology only.
4. **Zulehner**, *Numerical Methods for Continuum Mechanics 1*, complete 80-page notes, <https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf>, Chapter 2 §2.1, especially Lemma 2.2 and Corollary 2.1, printed pp. 20–25. Used for rigid-motion and mixed-boundary Korn context; the local proof establishes the exact needed estimate.
5. **Guermond**, MATH 661 Fall 2025, Chapter 11, complete 14-page chapter, <https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf>, §§11.2, 11.4, and 11.5.1, printed pp. 120–128. The complete proof of Theorem 11.13 and its Lagrange application were inspected, including the bounded-functional and shape-regularity hypotheses.
6. **Krause–Wohlmuth**, *Multigrid Methods for Mortar Finite Elements*, complete 7-page paper, <https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf>, §2, printed pp. 2–3. The complete dual-P1 basis and biorthogonality calculations were read; all contact cone, norm, inf-sup, and KKT claims were recomputed locally.

`source-fetch-check --stamp` passed for all 11 source entries (six unique PDFs); there were no retrieval failures and no source-resolution drops or escalations. Byte counts and SHA-256 prefixes are recorded in `batch-58.source-evidence.json`.

## Scoped checks and readiness

The final scoped checks passed: precheck 15/15 proof-bearing items; proof layout 20 items and 42 steps with no defects; strict proof contracts 15/15 with no errors or warnings; depcheck, extcheck, and fwdcheck for all 20 items; rendercheck (20 files); content-policy (20 items); source-fetch-check with stamps (11/11); and coverage-checklist (two pages, 25 harvested results, no errors or warnings). The run-wide item dependency check passes for 1,393 items across 142 pages, maximum level 12. Recomputing the graph with prerequisite batches included confirms all 20 Batch 58 item labels match. `step1-decisions.mjs record` has current ready records for all 20 items with item/dependency hashes, placement, and examined dependency evidence; these are authoring readiness records, not independent approval.

The run-wide `batch-dependency-levels check` cannot load the run because `items/def-maxwell-edge-fem-semidiscretization.md` has an unquoted title beginning “Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element …”; YAML parsing stops at line 23, column 14 before graph validation. The item is owned by Batch 42 and was not edited. The existing batch-level input records Batch 58 at level 2 with prerequisite batches 31 and 35; scoped Batch 58 item levels and the dispatch level are consistent.
