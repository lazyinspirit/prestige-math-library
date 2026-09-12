---
id: "lem-distribution-pairing-with-smooth-parameter-families"
kind: "lemma"
title: "Distribution pairing with smooth parameter families"
deps: ["thm-local-finite-order-characterization-of-distributions", "thm-test-function-operations-are-continuous", "lem-fixed-support-test-function-spaces-are-complete", "lem-test-function-cutoffs-and-euclidean-localization", "thm-mean-value-inequality", "thm-integral-triangle-inequality", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-countable-choice", "thm-lebesgue-measure-is-a-complete-measure"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $r,n\ge1$ be integers, let $X\subseteq\mathbb R^r$ and $Y\subseteq\mathbb R^n$ be open, let $u\in\mathcal D'(Y)$, and let $F\in C^\infty(X\times Y;\mathbb C)$. Suppose that for each compact $H\subseteq X$ there is compact $K\subseteq Y$ with $\operatorname{supp}_y F(x,\cdot)\subseteq K$ for every $x\in H$. Then $a(x)=u(F(x,\cdot))$ is smooth and $\partial_x^\alpha a(x)=u(\partial_x^\alpha F(x,\cdot))$.

Assume Countable Choice for the following integral clause. For every compact measurable $E\subseteq X$, the function $G(y)=\int_E F(x,y)\,dx$ is a test in $\mathcal D(Y)$, its $y$ derivatives pass under the integral, and $u(G)=\int_E u(F(x,\cdot))\,dx$. Integrals here are Lebesgue integrals. The smoothness and differentiation claims hold in ZF; Countable Choice supplies Lebesgue measure for the integral clause. Neither clause uses tensor products or distributional mollification.

## Facts & Assumptions

[F1] On each $\mathcal D_K$, $u$ has a finite-order estimate ([[thm-local-finite-order-characterization-of-distributions]]).

[F2] Smooth test operations preserve compact support and commute as ordinary partial derivatives ([[thm-test-function-operations-are-continuous]]).

[F3] Each $\mathcal D_K$ is complete in its derivative-seminorm metric ([[lem-fixed-support-test-function-spaces-are-complete]]).

[F4] A compact parameter set has a smooth compact cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] The mean-value inequality bounds the increment of a differentiable vector-valued curve by its length times a bound on its derivative; use $\mathbb C=\mathbb R^2$ ([[thm-mean-value-inequality]]).

[F6] Absolute integrals bound moduli of integrals ([[thm-integral-triangle-inequality]]), and integration is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] Countable Choice supplies complete Lebesgue measure and finite box volumes ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Given:** integers $r,n\ge1$, $X,Y,u,F$, and the compact-support hypothesis.

1.1 Around a fixed $x_0\in X$ take a closed ball with a slightly larger closed ball still inside $X$. The hypothesis on the larger ball supplies a single compact $K$ for all its slices. Every parameter derivative of $F$ has support in $K$ for parameters in the smaller ball: for $y\notin K$ the function is identically zero for all parameters in a neighborhood, so all parameter derivatives vanish there. On the smaller ball times $K$, every mixed derivative is uniformly continuous by compactness. Thus $p_m(F(x,\cdot)-F(x_0,\cdot))\to0$ for each $m$, and F1 gives continuity of $a$. [given, F1, F2]

2.1 Fix a coordinate $i$. For each $|\beta|\le m$, apply F5 on the segment from $0$ to $h$ (reverse its orientation if $h<0$) to the curve $t\mapsto\partial_y^\beta F(x+te_i,y)-t\partial_i\partial_y^\beta F(x,y)$. The derivative increment is bounded uniformly in $y\in K$ by a modulus of continuity tending to zero with $|h|$. Dividing the resulting inequality by $|h|$ proves [step 1.1, F1, F2, F5]
$$p_m\left(\frac{F(x+he_i,\cdot)-F(x,\cdot)}{h}-\partial_iF(x,\cdot)\right)\longrightarrow0.$$
The F1 estimate passes this limit through $u$. Apply step 1.1 to the parameter derivative slices for continuity of the resulting derivative, and repeat for every multi-index. This proves smoothness and the derivative formula. [step 1.1, F1, F2, F5]

3.1 For this clause assume Countable Choice and use F7 for Lebesgue measure. Fix compact $E\subseteq X$. By F4 choose a smooth cutoff $\theta=1$ near $E$ with compact parameter support in $X$. Extend $\widetilde F=\theta F$ by zero to all parameter space. It is smooth, and the support hypothesis on $\operatorname{supp}\theta$ gives a common compact $K$ for all its slices and their $y$ derivatives. Choose a closed box $Q$ whose interior contains that parameter support. At level $j$ divide each side into $2^j$ equal pieces, disjointify the cells by assigning shared faces in coordinate order, and let $t_C$ be each cell's lower corner. Put [step 2.1, given, F2, F4, F6, F7]
$$S_j(y)=\sum_{C}\lambda_r(E\cap C)\widetilde F(t_C,y).$$
These are tests supported in $K$. For every $m$, uniform continuity of the finitely many $y$ derivatives through order $m$ on $Q\times K$ supplies a modulus $\omega_m(\delta)\to0$. For each derivative and fixed $y$, F6 bounds the error between the grid sum and its scalar integral over $E$ by $\lambda_r(E)\omega_m(\operatorname{mesh}_j)$. The finite sum is exactly the integral of the corresponding step function, and its weights are finite because $E$ lies in a bounded box. [step 2.1, given, F2, F4, F6, F7]

4.1 Comparing two grid sums via their scalar integrals gives $p_m(S_j-S_k)\le\lambda_r(E)(\omega_m(\operatorname{mesh}_j)+\omega_m(\operatorname{mesh}_k))$. Thus F3 gives a limit $S\in\mathcal D_K$. The degree-zero scalar error in step 3.1 identifies $S(y)=\int_E F(x,y)\,dx=G(y)$, and its higher-degree errors identify every derivative of $S$ with the corresponding integral. By F1, $u(S_j)\to u(G)$. By finite linearity $u(S_j)=\sum_C\lambda_r(E\cap C)u(\widetilde F(t_C,\cdot))$, which converges to $\int_E a(x)\,dx$ by the same uniform-continuity integral estimate, since step 2.1 makes that scalar function smooth. This proves interchange. Empty or measure-zero $E$ gives zero sums and integrals; empty $Y$ gives zero slices. All tags and grids are specified, not chosen from an infinite family. $\square$ [step 3.1, step 2.1, F1, F3, F6]
