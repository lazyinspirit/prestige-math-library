---
id: "lem-afem-data-oscillation-reduction-under-marked-refinement"
kind: "lemma"
title: "Data oscillation reduction under three-generation refinement"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound, PDF pp. 1–5."
---
## Statement

Assume Countable Choice for the $L^2$ projection convention.

Suppose the three-generation marked refinement call completes and returns $\mathcal T_*\ge\mathcal T$, and let $\operatorname{osc}_\mathcal T(K)^2=h_K^2\|f-\Pi_K^0f\|_2^2$. For a Dörfler set $M_O$ with parameter $\theta_O\in(0,1]$,
$$\operatorname{osc}_{\mathcal T_*}^2\le\gamma_O\operatorname{osc}_{\mathcal T}^2,\qquad \gamma_O=1-\frac34\theta_O<1.$$

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, $f\in L^2(\Omega)$, nested matching cells, P0 projections, and a three-generation refinement of every $K\in M_O$.

[F1] Three generations give each descendant of a marked parent diameter at most half its diameter ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

[F2] The Dörfler set satisfies $\sum_{K\in M_O}\operatorname{osc}_\mathcal T(K)^2\ge\theta_O\operatorname{osc}_\mathcal T^2$ by its construction ([[alg-dorfler-marking-and-conforming-nvb-refinement]]).

## Proof

1.1 For any parent $K$ subdivided into children $K'$, nestedness of the piecewise-constant spaces gives $\sum_{K'\subset K}\|f-\Pi_{K'}^0f\|_{L^2(K')}^2\le\|f-\Pi_K^0f\|_{L^2(K)}^2.$ Indeed, the childwise projection space contains the parent constant space, and the $L^2$ orthogonal projection minimizes squared error. By [F1], $h_{K'}^2\le h_K^2/4$, so the sum of child oscillations is at most one quarter of the parent oscillation. Unrefined cells retain their contribution. [A1, F1, given, algebra]

2.1 Summing step 1.1 over refined parents gives $\operatorname{osc}_{\mathcal T_*}^2\le\operatorname{osc}_{\mathcal T}^2-\frac34\sum_{K\in M_O}\operatorname{osc}_{\mathcal T}(K)^2.$ Apply the bulk inequality [F2] to obtain the stated $\gamma_O$. If all oscillations vanish, both sides are zero and the same inequality holds. [A1, F2, step 1.1, algebra] ∎
