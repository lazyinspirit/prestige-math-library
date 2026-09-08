---
id: lem-euclidean-chart-measure-agrees-with-polar-surface-measure
kind: lemma
title: Agreement with the existing polar sphere measure
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.11, Proposition 1.45 and its preceding sphere parametrization, printed pp. 16–17 (PDF pp. 22–23). The identification with the existing cone-defined measure is proved here.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-surface-integral-is-independent-of-c-one-boundary-charts", "thm-polar-coordinates-formula-for-lebesgue-measure", "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness", "thm-monotone-convergence-for-the-integral"]
---

## Statement

Assume $\mathrm{AC}_\omega$ and $n\ge2$. The chart surface measure on $S^{n-1}$ equals the polar measure $\sigma$. Orthogonal transformations preserve it. The map $\omega\mapsto a+R\omega$, $R>0$, multiplies surface measure by $R^{n-1}$, and $|S^{n-1}|=n|B_1|$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$. Compare the chart measure and existing polar measure on the unit sphere. For scaling take $R>0$ and $a\in\mathbb R^n$.

[F1] Chart integrals are independent of charts and partitions. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F2] The polar formula holds for every nonnegative Borel function. ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] Borel substitution holds for C1 diffeomorphisms. ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F4] Increasing simple approximation justifies the separated product integration and passage from set measures to integrals. ([[thm-monotone-convergence-for-the-integral]]).

## Proof

1.1 Write $m$ for chart measure and take a finite sphere atlas $X_j:U_j\to S^{n-1}$ with a subordinate partition $\chi_j$. Since $|X_j|^2=1$, differentiation gives $X_j\cdot\partial_iX_j=0$. For $T_j(r,y)=rX_j(y)$, $1<r<2$, the derivative has columns $X_j,r\partial_1X_j,\ldots,r\partial_{n-1}X_j$. Its Gram determinant is $r^{2n-2}\det(DX_j^TDX_j)$, hence $|\det DT_j|=r^{n-1}J_j(y)$ with $J_j=\sqrt{\det(DX_j^TDX_j)}>0$. The inverse is $z\mapsto(|z|,X_j^{-1}(z/|z|))$, so $T_j$ is a $C^1$ diffeomorphism onto its open annular sector. [given, F1, algebra]

2.1 For a Borel set $A\subset S^{n-1}$, apply F3 on each sector to $h_j(z)=1_A(z/|z|)\chi_j(z/|z|)$. Its pullback times the Jacobian is the separated nonnegative function $r^{n-1}1_A(X_j(y))\chi_j(X_j(y))J_j(y)$. Integrating this product gives $C\int_{U_j}1_A(X_j)\chi_j(X_j)J_j\,dy$, where $C=\int_1^2r^{n-1}dr=(2^n-1)/n>0$. The product integration identity follows first for simple functions of y by the defining product measure of rectangles, then by increasing simple approximation. Summing j, the partition identity shows that the volume of $\{z:1<|z|<2,\ z/|z|\in A\}$ equals $Cm(A)$. [step 1.1, F3, F1, algebra, F4]

3.1 Applying F2 to the indicator of that same annular cone gives its volume as $C\sigma(A)$. Thus $Cm(A)=C\sigma(A)$ for every Borel A, and division by the strictly positive C gives $m=\sigma$. For an orthogonal O, $D(OX)^TD(OX)=DX^TX$, while $D(a+RX)^TD(a+RX)=R^2DX^TDX$. Applying F1 chartwise proves orthogonal invariance and the factor $R^{n-1}$, also for integrals by simple approximation. [step 2.1, F2, F1, algebra, F4]

4.1 Use F2 with $1_{B_1}$: $|B_1|=\int_0^1r^{n-1}\sigma(S^{n-1})\,dr=\sigma(S^{n-1})/n$. A possible contribution at the origin is absent because the polar formula already applies to this indicator. Step 3.1 now yields the asserted chart area $|S^{n-1}|=n|B_1|$. [step 3.1, F2, algebra] ∎

## Source notes

Hunter §1.11, Proposition 1.45 and its preceding sphere parametrization, printed pp. 16–17 (PDF pp. 22–23). The identification with the existing cone-defined measure is proved here.

