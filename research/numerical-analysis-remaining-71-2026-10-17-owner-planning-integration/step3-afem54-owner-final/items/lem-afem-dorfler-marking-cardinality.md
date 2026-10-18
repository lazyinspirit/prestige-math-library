---
id: "lem-afem-dorfler-marking-cardinality"
kind: "lemma"
title: "Dorfler marking is cardinality-optimal up to mesh closure"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 3
deps:
  - "def-afem-p1-approximation-class"
  - "def-afem-nvb-labelled-triangulation-family"
  - "thm-afem-p1-residual-reliability-and-local-efficiency"
  - "lem-afem-common-refinement-overlay-and-cardinality"
  - "lem-afem-localized-galerkin-refinement-estimate"
  - "lem-galerkin-orthogonality-for-conforming-galerkin-approximations"
  - "def-countable-choice"
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "lem-afem-convection-quasi-orthogonality-under-fine-mesh"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 4"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture4.pdf"
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted
        P1 Laplace complexity, PDF pp. 1–4."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for
        an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
---
## Statement

Assume Countable Choice for the Sobolev and residual-estimator suppliers.

Assume $b=0$, $f$ is constant on each initial cell, and $\mathcal T$ is a conforming descendant. Let $e_\mathcal T$ and $\eta_\mathcal T$ be the exact P1 Galerkin energy error and residual estimator. Let $\mathcal T_*$ be another conforming NVB descendant of $\mathcal T_0$ with exact Galerkin solution $U_*$. If $e_{\mathcal T_*}\le\lambda e_\mathcal T$ for some $0<\lambda<1$, then the cells subdivided in the overlay $\mathcal T\oplus\mathcal T_*$ form a Dörfler set with parameter
$$\theta_*=(1-\lambda^2)/(C_{\rm loc}C_{\rm eff})>0,$$
where $C_{\rm loc}$ is the localized refinement constant and $C_{\rm eff}$ the global efficiency constant. Consequently the deterministic smallest-cardinality Dörfler set for any fixed $0<\theta_E\le\min(1,\theta_*)$ has cardinality at most $\#\mathcal T_*-\#\mathcal T_0$.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, the symmetric Laplace problem, $f$ piecewise constant on $\mathcal T_0$, conforming P1 Galerkin solutions on nested meshes, and the comparison error decrease.

[F1] If $f$ is P0 on $\mathcal T_0$, then its projection oscillation vanishes on every descendant; global efficiency and reliability give $C_{\rm eff}^{-1}\eta_\mathcal T^2\le e_\mathcal T^2\le C_{\rm rel}\eta_\mathcal T^2$ ([[def-afem-p1-residual-estimator-and-data-oscillation]], [[thm-afem-p1-residual-reliability-and-local-efficiency]]).

[F2] The energy errors of nested symmetric Galerkin solutions satisfy Pythagorean orthogonality ([[lem-afem-convection-quasi-orthogonality-under-fine-mesh]]).

[F3] A nested refinement localizes the Galerkin correction to the estimator on the coarse cells it subdivides ([[lem-afem-localized-galerkin-refinement-estimate]]).

[F4] The overlay is the smallest common conforming refinement and has the cardinality bound $\#(\mathcal T\oplus\mathcal T_*)\le\#\mathcal T+\#\mathcal T_*-\#\mathcal T_0$ ([[lem-afem-common-refinement-overlay-and-cardinality]]).

## Proof

1.1 Let $\mathcal T^+=\mathcal T\oplus\mathcal T_*$ and let $U,U_*,U^+$ be the exact Galerkin solutions. Best approximation on the overlay gives $e_{\mathcal T^+}\le e_{\mathcal T_*}\le\lambda e_\mathcal T$. By [F2], $\|\nabla(U^+-U)\|_2^2=e_\mathcal T^2-e_{\mathcal T^+}^2\ge(1-\lambda^2)e_\mathcal T^2.$ By [F3], this correction square is at most $C_{\rm loc}\eta_\mathcal T(\mathcal R)^2$, where $\mathcal R$ is the set of coarse cells subdivided in $\mathcal T^+$. By [F1], $\eta_\mathcal T^2\le C_{\rm eff}e_\mathcal T^2$. Combining proves $\eta_\mathcal T(\mathcal R)^2\ge\theta_*\eta_\mathcal T^2$. If $e_\mathcal T=0$, then the comparison condition and all indicators are zero and the empty set is Dörfler. [A1, F1, F2, F3, given, algebra]

2.1 The bulk algorithm sorts nonnegative weights in decreasing order. Among all sets of a fixed size $m$, the first $m$ sorted weights have maximal sum: replacing any omitted larger weight for a selected smaller one cannot decrease the sum, and repeating yields the prefix. Therefore the shortest prefix reaching threshold $\theta_E\eta_\mathcal T^2$ has minimum cardinality among all Dörfler sets. Since $\mathcal R$ is such a set whenever $\theta_E\le\theta_*$, $|M_E|\le|\mathcal R|$. The overlay cardinality bound [F4] gives $|\mathcal R|\le\#\mathcal T^+-\#\mathcal T\le\#\mathcal T_*-\#\mathcal T_0$. [F4, step 1.1, algebra] ∎
