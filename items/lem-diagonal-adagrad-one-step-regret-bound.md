---
id: lem-diagonal-adagrad-one-step-regret-bound
kind: lemma
title: One-step diagonal AdaGrad regret inequality
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-diagonal-adagrad-online-regret
  - lem-diagonal-adagrad-subproblem-well-defined
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - def-euclidean-inner-product
  - thm-of-square-roots
  - lem-finite-sum-laws
  - lem-of-square-positive
  - def-ordered-field
  - lem-of-sign-rules
  - lem-of-zero-mult
  - lem-of-inverse-positive
  - cor-of-one-positive
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Section 2, mirror-descent one-step bound and composite update.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Sections 3.1–3.3, Euclidean projection variational inequality and telescoping argument.
---

## Statement

Let $A=\operatorname{diag}(a_1,\ldots,a_d)$ with $a_j>0$, let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $x,x^+,u\in C$ where $x^+$ minimizes $\eta\langle g,z\rangle+\tfrac12\|z-x\|_A^2$ over $z\in C$, for $\eta>0$ and $g\in\mathbb R^d$. With $\|w\|_A^2=w^TAw$, $A^{-1}=\operatorname{diag}(1/a_1,\ldots,1/a_d)$, and $\|g\|_{A^{-1}}^2=g^TA^{-1}g$,

$$\langle g,x-u\rangle\le\frac{\|x-u\|_A^2-\|x^+-u\|_A^2}{2\eta}+\frac{\eta}{2}\|g\|_{A^{-1}}^2.$$

## Facts & Assumptions

**Given:** The set, positive diagonal matrix, step size, gradient, comparator, and minimizer in the Statement. In coordinate expansions use the one-based labels $z_j:=z(j-1)$ for $1\le j\le d$, as in [F1].

[F1] [[alg-diagonal-adagrad-online-regret]]: an update minimizes $\eta\langle g,z\rangle+\tfrac12\|z-x\|_A^2$ on $C$, with positive diagonal $A$.

[F2] [[lem-diagonal-adagrad-subproblem-well-defined]]: for these data the minimizer exists and is unique.

[F3] [[def-convex-subset-of-euclidean-space]]: every segment between points of $C$ lies in $C$.

[F4] [[def-metric-topology]]: closed means that the complement is open in the stated metric topology.

[F5] [[def-euclidean-inner-product]]: the inner product is bilinear and the squared Euclidean norm is the sum of coordinate squares.

[F6] [[thm-of-square-roots]]: each positive diagonal entry has a positive square root.

[F7] [[lem-finite-sum-laws]]: a finite sum of nonnegative terms is nonnegative.

[F8] [[lem-of-square-positive]] gives positivity for each nonzero coordinate square; [[lem-of-zero-mult]] gives square zero for a zero coordinate. Thus every coordinate square is nonnegative.

[F9] [[def-ordered-field]] and [[lem-of-sign-rules]], with [[lem-of-zero-mult]] and [[lem-of-inverse-positive]] for zero factors and reciprocals: sums and products of nonnegative reals are nonnegative, and a positive denominator preserves order.

[F10] [[cor-of-one-positive]]: $1>0$.

## Proof

**Given:** The objects and assumptions in the Statement.

1.1 Write $q(z)=\eta\langle g,z\rangle+\tfrac12\|z-x\|_A^2$, $d=u-x^+$, $c=\langle\eta g+A(x^+-x),d\rangle$, and $Q=\|d\|_A^2\ge0$, the last inequality following from [F5], [F7], [F8], and [F9]. Since $C$ is nonempty, closed in the metric topology [F4], and convex, [F2] ensures the unique update minimizer exists. For $0<s\le1$, [F3] gives $x^++sd\in C$, so [F1] minimality gives $0\le q(x^++sd)-q(x^+)=sc+(s^2/2)Q$. If $c<0$, put $a=-c>0$ and $s=a/(Q+a+1)$. By [F9] and [F10], $Q+a+1>a>0$, so $0<s<1$ and $Q<Q+a+1$. Dividing the minimality inequality by $s>0$ gives $0\le c+sQ/2$, whereas $sQ/2=aQ/(2(Q+a+1))<a/2$, so $c+sQ/2<-a/2<0$, a contradiction. Thus $c\ge0$, which rearranges to $\eta\langle g,x^+-u\rangle\le\langle A(x-x^+),x^+-u\rangle$. [F1, F2, F3, F4, F5, F7, F8, F9, F10, given, algebra]

2.1 Expanding gives $2\langle A(x-x^+),x^+-u\rangle=\|x-u\|_A^2-\|x^+-u\|_A^2-\|x-x^+\|_A^2$. Also [F5]–[F8] and nonnegativity of squares give $0\le\sum_j(\sqrt{a_j}(x_j-x_j^+)-\eta g_j/\sqrt{a_j})^2$, hence $\eta\langle g,x-x^+\rangle-\tfrac12\|x-x^+\|_A^2\le(\eta^2/2)\|g\|_{A^{-1}}^2$. Add the inequality from step 1.1 and divide by $\eta>0$ to obtain the Statement. [F5, F6, F7, F8, step 1.1, given, algebra] ∎
