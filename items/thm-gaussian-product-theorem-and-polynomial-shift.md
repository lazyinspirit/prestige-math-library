---
id: thm-gaussian-product-theorem-and-polynomial-shift
kind: theorem
title: Gaussian product theorem and finite polynomial shifts
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-cartesian-gaussian-primitives-and-contractions]
proof_strategy: direct
axiom_use: None. The proof is an identity of finite-dimensional real vectors and finite polynomials.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Gaussian product rule and overlap-distribution shifts, pp. 11–13."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; Gaussian product identity and polynomial shifts, §II, pp. 5–7."
---

## Statement

Let $a,b>0$, $A,B\in\mathbb R^3$, $p=a+b$, $\mu=ab/p$, and $P=(aA+bB)/p$. Then for every $x\in\mathbb R^3$,
$$\exp(-a\|x-A\|_2^2)\exp(-b\|x-B\|_2^2)=\exp(-\mu\|A-B\|_2^2)\exp(-p\|x-P\|_2^2).$$
For any multi-indices $\alpha,\beta\in\mathbb N_0^3$, the polynomial factor $(x-A)^\alpha(x-B)^\beta$ is a finite polynomial in $x-P$ of total degree at most $|\alpha|+|\beta|$. Moreover, $P=(a/p)A+(b/p)B$ lies on the closed segment from $A$ to $B$.

## Facts & Assumptions

**Given:** $a,b>0$, centers $A,B\in\mathbb R^3$, and multi-indices $\alpha,\beta\in\mathbb N_0^3$ as in [[def-cartesian-gaussian-primitives-and-contractions]].

[F1] [[def-cartesian-gaussian-primitives-and-contractions]]: a primitive has exponential factor $\exp(-a\|x-A\|_2^2)$ and polynomial factor $(x-A)^\alpha$.

## Proof

1.1 Since $p=a+b>0$, expand the left exponent using $\|x-A\|^2=\|x\|^2-2A\cdot x+\|A\|^2$. The quadratic and linear terms agree with $p\|x-P\|^2$ because $pP=aA+bB$. The remaining constant satisfies $$a\|A\|^2+b\|B\|^2-p\|P\|^2=\frac{ab}{p}\|A-B\|^2=\mu\|A-B\|^2,$$ by substituting $P=(aA+bB)/p$ and expanding the inner products. Thus $a\|x-A\|^2+b\|x-B\|^2=p\|x-P\|^2+\mu\|A-B\|^2$, which gives the exponential identity. [given, F1, algebra]

1.2 Each coordinate obeys $x_j-A_j=(x_j-P_j)+(P_j-A_j)$ and $x_j-B_j=(x_j-P_j)+(P_j-B_j)$. The finite binomial theorem expands each integer power as a polynomial in $x_j-P_j$ of no larger degree; multiplying the six coordinate polynomials gives a finite polynomial of total degree at most $|\alpha|+|\beta|$. [given, F1, algebra]

2.1 The coefficients $a/p$ and $b/p$ are positive and sum to one. Hence $P$ is a convex combination of $A$ and $B$, so it lies on their closed line segment, including the case $A=B$. [given, algebra] ∎
