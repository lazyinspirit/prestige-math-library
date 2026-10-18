---
id: "lem-afem-residual-estimator-reduction"
kind: "lemma"
title: "Reduction of the P1 residual estimator after marked refinement"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 3
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
  - "lem-afem-nvb-conforming-closure-and-cumulative-counting"
  - "def-countable-choice"
  - "thm-polynomial-inverse-and-discrete-trace-estimates"
  - "lem-shape-regular-affine-simplex-scaling"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound, PDF pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
---
## Statement

Assume Countable Choice, as in the residual and inverse-estimate suppliers.

Suppose the refinement call completes with a matching descendant $\mathcal T_*\ge\mathcal T$ and every cell in the Dörfler estimator set $M_E$ receives three generations of refinement, with exact Galerkin solutions $U,U_*$. For every $\varepsilon>0$,
$$\eta_{\mathcal T_*}(U_*)^2\le(1+\varepsilon)\eta_\mathcal T(U)^2-\frac12\eta_\mathcal T(U,M_E)^2+ C_\varepsilon(1+|b|^2h_{\max}^2)\|\nabla(U_*-U)\|_2^2.$$
The constant depends only on $\varepsilon$ and the uniform shape bound.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, the P1 residual estimator with $A=I,c=0$, the exact Galerkin solutions, a conforming three-generation refinement of the bulk set, and $\varepsilon>0$.

[F1] Cell and edge residuals are $R_K(U)=f-b\cdot\nabla U$ and the outward flux jumps; their estimator weights are $h_K^2$ and $h_E$ ([[def-afem-p1-residual-estimator-and-data-oscillation]]).

[F2] A marked parent is subdivided with child diameters at most half its diameter, and matching closure preserves the mesh family ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]], [[lem-afem-nvb-conforming-closure-and-cumulative-counting]]).

[F3] Shape-regular affine P1 meshes satisfy a uniform inverse discrete-trace bound for jumps of piecewise gradients ([[thm-polynomial-inverse-and-discrete-trace-estimates]], [[lem-shape-regular-affine-simplex-scaling]]).


## Proof

1.1 Write $d=U_*-U$. On a fine child $K'\subset K$, $R_{K'}(U_*)=R_K(U)-b\cdot\nabla d$. Young's inequality gives $h_{K'}^2\|R_{K'}(U_*)\|_2^2\le(1+\varepsilon)h_{K'}^2\|R_K(U)\|_2^2+(1+\varepsilon^{-1})|b|^2h_{K'}^2\|\nabla d\|_{L^2(K')}^2.$ Unmarked cells retain the same old volume weight. On marked parents, [F2] makes the old residual part at most one quarter its old value. Summing, and charging closure-refined cells to their old parent, bounds the volume contribution by $(1+\varepsilon)$ times the old volume sum minus $\frac34$ of its marked volume sum, plus $C_\varepsilon |b|^2h_{\max}^2\|\nabla d\|_2^2$. [A1, F1, F2, given, algebra]

2.1 On every split old edge, each subedge length is at most half the parent length and the sum of their lengths is the parent length; hence the sum of squared subedge lengths is at most one half the squared parent length. The old jump is constant along each parent edge, so its inherited contribution is reduced by at least one half whenever its marked cell is refined. On new interior edges within one old parent the old affine gradient has zero jump. The new jump is the old jump plus the jump of $\nabla d$; Young's inequality and [F3] give a remainder at most $C_\varepsilon\|\nabla d\|_2^2$. Assign each old edge half to each incident cell as in the definition. Combining this with step 1.1, the marked cell and edge reductions are at least one half of $\eta_\mathcal T(U,M_E)^2$; absorb the remaining nonnegative reduction into the left inequality to obtain the displayed bound. [A1, F1, F2, F3, step 1.1, algebra] ∎
