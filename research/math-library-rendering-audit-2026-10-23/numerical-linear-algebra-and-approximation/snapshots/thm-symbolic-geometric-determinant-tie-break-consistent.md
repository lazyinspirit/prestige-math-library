---
id: thm-symbolic-geometric-determinant-tie-break-consistent
kind: theorem
title: The formal determinant tie-break is nondegenerate and consistent
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 4
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-symbolic-geometric-determinant-tie-break, def-certified-geometric-predicate-determinants, lem-lifted-determinant-sign-matches-sphere-side, def-complete-ordered-real-field, lem-of-abs-value, lem-of-triangle-inequality]
sources:
  references:
    - title: "Herbert Edelsbrunner and Ernst Peter Mücke, Simulation of Simplicity, §§2–3.2"
      url: "https://arxiv.org/pdf/math/9410209"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

For a finite set of uniquely indexed dyadic points and any ordered predicate
tuple of pairwise distinct IDs of the required size, every orientation,
incircle, and insphere determinant after the shared formal perturbation in
[[alg-symbolic-geometric-determinant-tie-break]] is a nonzero polynomial in
$\varepsilon$. Its first nonzero coefficient gives the sign for all
sufficiently small positive $\varepsilon$. One sufficiently small value works
simultaneously for the finite set of predicates, so the signs are consistent
and every originally nonzero determinant retains its sign.

## Facts & Assumptions

**Given:** A finite set of points with distinct stable integer IDs, an ordered predicate tuple with pairwise distinct IDs, and the coordinate and determinant conventions in [[def-certified-geometric-predicate-determinants]].

[F1] [[def-certified-geometric-predicate-determinants]]: orientation determinants use rows $(p_i,1)$ and lifted sphere determinants use rows $(p_i,\sum_jp_{i,j}^2,1)$.

[F2] [[alg-symbolic-geometric-determinant-tie-break]]: coordinate slot $k$ is replaced by $x+\varepsilon^{3^k}$; the returned sign is the coefficient sign at the least exponent with nonzero coefficient.

[F3] [[lem-lifted-determinant-sign-matches-sphere-side]]: for a nondegenerate base simplex, the lifted determinant is nonzero whenever a point is strictly inside or outside its sphere.

[F4] [[def-complete-ordered-real-field]]: coefficient comparisons and positive thresholds are taken in the ordered real field.

[F5] [[lem-of-abs-value]]: absolute value is nonnegative and multiplicative.

[F6] [[lem-of-triangle-inequality]]: the absolute value of a finite sum is at most the sum of the absolute values.

## Proof

1.1 Regard one requested determinant as a polynomial in independent coordinate increments $z_{i,j}$. It is not the zero polynomial: for orientation choose the perturbed points $0,e_1,\ldots,e_d$, whose homogeneous determinant is nonzero. For a lifted determinant choose the first $d+1$ perturbed points $0,e_1,\ldots,e_d$ and the last point $(2,\ldots,2)$. The base sphere has center $(1/2,\ldots,1/2)$ and squared radius $d/4$, while the last point has squared distance $9d/4$ from that center; [F3] therefore gives a nonzero lifted determinant. These coordinate assignments are available because the $z_{i,j}$ are independent variables. [F1, F3, given, construct]

2.1 In every orientation determinant each coordinate increment has degree at most one. In a lifted determinant it has degree at most two, because it can occur squared in one lifted entry and a determinant term selects only one entry from that row. Thus every monomial exponent vector has digits $a_k\in\{0,1,2\}$. Under the substitution in [F2], its $\varepsilon$ exponent is $\sum_k a_k3^k$. Uniqueness of base-three expansion makes this map injective, so distinct monomials cannot merge or cancel. The nonzero polynomial from [step 1.1] remains nonzero after substitution. [F1, F2, step 1.1, algebra]

3.1 Write any resulting polynomial as $P(\varepsilon)=c_m\varepsilon^m+\sum_{j>m}c_j\varepsilon^j$, with $c_m\ne0$. If $B=\sum_{j>m}|c_j|$ is positive, then for $0<\varepsilon<\min(1,|c_m|/(2B))$ the tail after dividing by $\varepsilon^m$ has absolute value at most $\varepsilon B<|c_m|/2$ by [F5] and [F6]. If $B=0$, its sign is already constant. In either case the sign for sufficiently small positive $\varepsilon$ is the sign of $c_m$. If the original determinant is nonzero, its constant coefficient is nonzero and is the first coefficient, so its sign is preserved. [F4, F5, F6, step 2.1, algebra]

4.1 A finite point set has only finitely many ordered orientation and lifted predicate tuples. For each resulting polynomial with tail bound $B>0$ in [step 3.1], form its positive threshold $t_P=\min(1,|c_m|/(2B))$. If the finite set of these thresholds is nonempty, let $t$ be its minimum and choose $\varepsilon=t/2$; then [step 3.1] applies to every such polynomial. Every remaining polynomial has $B=0$, so it is a single nonzero monomial and has its first-coefficient sign for every $\varepsilon>0$. If there are no thresholds, choose $\varepsilon=1$; the same reasoning covers the case of an empty predicate family. Thus one positive value realizes all returned signs simultaneously and no declared determinant is zero. The algorithm returns exactly these first-coefficient signs without selecting or evaluating that $\varepsilon$, so the tie-break is consistent and uses no arbitrary epsilon threshold. [given, F2, F4, step 3.1, construct, algebra] ∎

