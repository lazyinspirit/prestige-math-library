---
id: lem-csm-examples-smooth-flow-jacobian
kind: lemma
title: "Jacobian identity for a specified smooth diffeomorphic flow"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-cm-determinant-derivative-along-a-matrix-curve
  - thm-clairaut-schwarz-mixed-partials
  - thm-chain-rule-for-total-derivatives
  - thm-trace-of-ab-equals-trace-of-ba
  - cor-mean-value-theorem
  - thm-intermediate-value
dependency_roles:
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §§2.1–2.3"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th edition, Theorem 8.49"
      url: "https://linear.axler.net/LADR4e.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $n\ge1$, let $I\subseteq\mathbb R$ be an open interval containing $0$, and let $U\subseteq\mathbb R^n$ be open. Suppose $\chi:I\times U\to\mathbb R^n$ is jointly $C^2$, each $\chi_t(a):=\chi(t,a)$ is a $C^2$ diffeomorphism from $U$ onto an open set $U_t$, and $\chi_0(a)=a$. Let $D:=\{(t,x):t\in I,\ x\in U_t\}$ be open and let $b:D\to\mathbb R^n$ be $C^1$ with $\partial_t\chi(t,a)=b(t,\chi(t,a))$. Define $F(t,a):=D_a\chi(t,a)$, $J(t,a):=\det F(t,a)$, and $\operatorname{div}b:=\sum_{i=1}^n\partial_{x_i}b_i$. Then

$$\partial_tF=(D_xb)(t,\chi)F,\qquad \partial_tJ=J(\operatorname{div}b)(t,\chi),\qquad J(0,a)=1.$$

In particular $J(t,a)>0$ for all $(t,a)\in I\times U$, and if $\operatorname{div}b=0$ on $D$, then $J(t,a)=1$. The same identities hold on the flat torus $\mathbb T^n:=\mathbb R^n/\Lambda$, where $\Lambda=\mathbb Z\ell_1+\cdots+\mathbb Z\ell_n$ for a linearly independent basis $\ell_1,\ldots,\ell_n$ and the smooth structure and Euclidean metric descend from $\mathbb R^n$. In that clause, let $\chi:I\times\mathbb T^n\to\mathbb T^n$ be jointly $C^2$, with each $\chi_t$ a diffeomorphism and $\chi_0=\operatorname{id}$. Let $\pi:T\mathbb T^n\to\mathbb T^n$ be the tangent-bundle projection, and let $b:I\times\mathbb T^n\to T\mathbb T^n$ have $C^1$ chart coefficients and satisfy $\pi(b(t,a))=a$ and $\partial_t\chi(t,a)=b(t,\chi(t,a))$. In every translation chart write $b=\sum_i b^i\partial_{x^i}$ and define $\operatorname{div}b:=\sum_i\partial_{x^i}b^i$. Define $F(t,a)$ to be the matrix of $D_a\chi_t:T_a\mathbb T^n\to T_{\chi_t(a)}\mathbb T^n$ in the translation frames and $J(t,a):=\det F(t,a)$. Translation-chart changes have derivative $I$, so these matrices, determinants and divergences agree on overlaps. These are identities for supplied flow data; no existence or global-flow theorem is asserted.

## Facts & Assumptions

**Given:** The interval $I$, open set $U$, jointly $C^2$ family $\chi$, diffeomorphism and initial-identity hypotheses, and $C^1$ velocity field $b$ in the Statement.

[F1] [[thm-clairaut-schwarz-mixed-partials]]: the two mixed second partial derivatives of a $C^2$ scalar function on an open Euclidean set agree.

[F2] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps, the derivative of a composite is the composite of the derivatives.

[F3] [[lem-cm-determinant-derivative-along-a-matrix-curve]]: if $A(t)$ is a differentiable invertible real square-matrix curve, then $(\det A)'=\det A\,\operatorname{tr}(A^{-1}A')$.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: for matching finite real square matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.

[F5] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable on its interior has an interior point where its derivative equals the interval's average slope.

[F6] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

## Proof

1.1 For each component $\chi_i$, joint $C^2$ regularity and [F1] give $\partial_t\partial_{a_j}\chi_i=\partial_{a_j}\partial_t\chi_i$. Differentiating the given velocity equation in $a$ and applying [F2] yields $\partial_tF=LF$, where $L(t,a):=(D_xb)(t,\chi(t,a))$. [given, F1, F2, algebra]

2.1 Each $F(t,a)$ is invertible: differentiating $\chi_t^{-1}\circ\chi_t=\operatorname{id}$ by [F2] gives $D\chi_t^{-1}(\chi_t(a))F(t,a)=I$. Thus [F3] applies to the $C^1$ matrix curve $t\mapsto F(t,a)$ and gives $\partial_tJ=J\operatorname{tr}(F^{-1}LF)$. [given, F2, F3, step 1.1]

3.1 By [F4], $\operatorname{tr}(F^{-1}LF)=\operatorname{tr}(FF^{-1}L)=\operatorname{tr}L=\sum_i\partial_{x_i}b_i(t,\chi(t,a))$. Also $F(0,a)=I$, so $J(0,a)=1$. [F4, step 1.1, step 2.1, algebra]

4.1 The determinant $J(t,a)$ is continuous and nonzero on $I$ by step 2.1. If it were negative for some $t$, [F6] on the closed segment with endpoints $0$ and $t$ would give a point where $J=0$, contradicting invertibility. Hence $J>0$. [given, F6, step 2.1, step 3.1]

4.2 If $\operatorname{div}b=0$, step 3.1 gives $\partial_tJ=0$. For each fixed $a$, the case $t=0$ is already $J(0,a)=1$. For $t\ne0$, apply [F5] to $J(\cdot,a)$ on $[\min(0,t),\max(0,t)]$, whose endpoints are distinct; since its derivative is zero, its endpoint difference is zero, so $J(t,a)=J(0,a)=1$. [given, F5, step 3.1, algebra]

5.1 For the torus clause, fix $a\in\mathbb T^n$ and $t_0\in I$. By continuity, choose a time neighborhood of $t_0$ on which $a$ and $\chi_t(a)$ stay in translation charts. Their transition maps are translations, so the coordinate matrices of $D_a\chi_t$, their determinants, and the coordinate divergence of $b$ agree on overlaps. In these charts the Euclidean calculations in steps 1.1–3.1 prove both differential identities, and $\chi_0=\operatorname{id}$ gives $J(0,a)=1$. Since $t_0$ was arbitrary, the identities hold throughout $I$; applying steps 4.1 and 4.2 on the closed segment between $0$ and any $t\in I$ gives positivity and the divergence-free conclusion. [given, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

The hypotheses describe an already supplied family of diffeomorphisms and its velocity field. This lemma does not prove that an ODE generates such a family, that a trajectory is global, or that any physical fluid or Hamiltonian model satisfies the hypotheses.
