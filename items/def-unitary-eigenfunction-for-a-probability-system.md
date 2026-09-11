---
id: "def-unitary-eigenfunction-for-a-probability-system"
kind: "definition"
title: "Eigenfunction for a probability system"
deps: ["def-koopman-operator-on-l-p", "def-invertible-measure-preserving-system", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-integral-of-a-nonnegative-simple-function", "def-nonnegative-lebesgue-integral", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Definition 3.3 p.90; Definition 3.5 p.91
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Let $(X,\mathcal A,\mu,T)$ be a measure-preserving probability system. Work in complex $L^2(\mu)$ with the pairing $\langle f,g\rangle=\int f\overline g$, linear in its first variable, as in [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]. Set $U_Tf=f\circ T$ on almost-everywhere classes and $H_0=\{f\in L^2(\mu):\int f=0\}$.

An **eigenfunction** is a nonzero class $f\in L^2(\mu)$ for which $U_Tf=\lambda f$ for some $\lambda\in\mathbb C$. It is **nonconstant** when $f\notin\mathbb C\mathbf1$. Here equality and constancy always mean equality almost everywhere.

We verify the integral interface used here directly. For a nonnegative simple function, augment any finite disjoint display by the measurable complement of its displayed sets, with coefficient $0$. Given two such augmented displays, their pairwise intersections partition $X$, and equality of the functions forces the two coefficients to agree on every nonempty intersection. Finite additivity, with $0\cdot(+\infty)=0$, therefore proves representation independence. On a common augmented refinement the simple integral is monotone and additive; homogeneity is direct when the scalar is $0$ and termwise when it is positive. Now let $0\le g_j\uparrow g$ and put $L=\sup_j\int g_j$. For a simple $s\le g$ and $0<c<1$, the sets $A_j=\{g_j\ge cs\}$ increase to $X$, including on the zero level of $s$. Since $A\mapsto\int_A s$ is the finite sum of the measures of the nonzero level sets, continuity from below gives $c\int s=\lim_jc\int_{A_j}s\le L$. Letting $c\uparrow1$ and then taking the supremum over $s$ proves monotone convergence from the definitions in [[def-integral-of-a-nonnegative-simple-function]] and [[def-nonnegative-lebesgue-integral]].

Applying this monotone convergence result to sums of increasing simple approximants gives nonnegative additivity. Positive/negative and real/imaginary decompositions then give finite complex $L^1$ linearity. Applying nonnegative integral invariance to those four parts gives $\int h\circ T=\int h$ for every complex $h\in L^1(\mu)$.

For a measure-preserving $T$, canonical level sets give $\int s\circ T=\int s$ for every nonnegative simple $s$. Choose $s_j\uparrow g$ using [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]] and apply the preceding monotone-convergence argument to $s_j$ and $s_j\circ T$; hence $\int g\circ T=\int g$ for every nonnegative measurable $g$. Applying this to $g=|f|^2$ proves directly that the pullback of [[def-koopman-operator-on-l-p]] is an $L^2$ isometry. Thus $\|f\|_2=|\lambda|\|f\|_2$ forces $|\lambda|=1$. For a system invertible modulo null sets in [[def-invertible-measure-preserving-system]], pullback by the inverse is an inverse isometry, so $U_T$ is unitary. The name does not assume invertibility for every probability system.

Cauchy–Schwarz with $\mathbf1$, whose norm is one, gives $|\int f|\le\|f\|_2$ and integrability of $f$. Thus $H_0$ is a closed linear subspace. The locally proved integral invariance gives $(\lambda-1)\int f=0$. If $\lambda\ne1$, the eigenfunction already lies in $H_0$. If $\lambda=1$ and $f$ is nonconstant, $f-(\int f)\mathbf1$ is a nonzero eigenfunction in $H_0$.

In this page's spectral criterion, a **completed Lebesgue probability space** has the usual interval-and-atoms model modulo null sets, with completed measure; no classification theorem for arbitrary probability spaces is used. The Chacon model below is the completed unit interval. These definitions and the displayed finite calculations make no simultaneous choices of representatives.
