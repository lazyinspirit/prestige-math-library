---
title: Endpoint correction and small-ball contraction estimates
status: published
research_item: prop-se-feedback-estimates
dependency_level: 20
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 14: ` Theorem 3.7 proof, endpoint identities and estimates `; PDF p. 15: ` contraction estimate at top `

## Prerequisites

- [def-se-feedback-map](item-def-se-feedback-map)
- [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [lem-se-endpoint-feedback-contraction](item-lem-se-endpoint-feedback-contraction)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)


## Statement

Assume the Axiom of Choice and the geometry, parameters, control space $X_T$, selector $G$, endpoints $v_0,v_T$, and maps $N,h_v,\mathcal T$ of [def-se-feedback-map](item-def-se-feedback-map). In particular, $X_T$ obeys the three estimates of [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses) with $C_0\ge1$, and evaluation into $H=H_D^s(\Omega)$ has norm at most one. Give $H\times H$ the sum norm, and put $C_G=\|G\|$. Let $C_\varphi$ be a bound for multiplication by $\varphi$ on $H$, and define $C_1=C_0+C_0TC_\varphi C_G$ and $C_2=C_0^2(1+C_0TC_\varphi C_G)$.

For every $u,v\in X_T$, $\mathcal T(v)(0)=v_0$ and $\mathcal T(v)(T)=v_T$; also $h_v-h_u=-G(0,N(v)(T)-N(u)(T))$ and $\|N(v)\|_{X_T}\le C_0^2\|v\|_{X_T}^m$. The estimates are

$$\|\mathcal T(v)\|_{X_T}\le C_1(\|v_0\|_H+\|v_T\|_H)+C_2\|v\|_{X_T}^m,$$

$$\|\mathcal T(v)-\mathcal T(u)\|_{X_T}\le C_2(\|v\|_{X_T}^{m-1}+\|u\|_{X_T}^{m-1})\|v-u\|_{X_T}.$$

For $\delta>0$, put $M=4C_1\delta$. If $\|v_0\|_H,\|v_T\|_H\le\delta$ and $4C_2M^{m-1}\le1$, then $\mathcal T$ maps the closed radius-$M$ ball of $X_T$ into itself and is a contraction there with constant at most $1/2$. It consequently has exactly one fixed point in that ball, with endpoints $v_0,v_T$. No uniqueness outside the ball is asserted.

## Facts & Assumptions

[F1] The feedback definition gives $N(v)=D(ig(v))$, $h_v=G(v_0,v_T-N(v)(T))$, and $\mathcal T(v)=W(\cdot)v_0+N(v)+D(-i\varphi h_v)$, where $D$ is the retarded forcing operator. It also gives $N(v)(0)=0$ and identifies the homogeneous and control terms with the linear solution steered by $G$. [def-se-feedback-map](item-def-se-feedback-map)

[F2] The perturbation hypotheses bound $W(\cdot)$ and $D$ by $C_0$, bound the nonlinear size and difference by $C_0$ times the powers displayed in their definition, and bound terminal evaluation by one. [def-se-perturbation-hypotheses](item-def-se-perturbation-hypotheses)

[F3] Multiplication by the real cutoff $\varphi$ is bounded on $H$ under the stated geometry and Choice assumptions. [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The endpoint feedback lemma records the selector identity and endpoint correction for the same homogeneous and control solution maps; its Banach-space formulation applies to complex spaces regarded as real spaces. [lem-se-endpoint-feedback-contraction](item-lem-se-endpoint-feedback-contraction)

[F5] A contraction of a nonempty complete metric space into itself has exactly one fixed point there. [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)

## Proof

**Given:** The stated feedback construction and its hypotheses, with the indicated endpoint data.

**Goal:** Prove the endpoint identities and estimates, and the claimed invariant-ball contraction.

1.1 The selector steers $W(\cdot)v_0+D(-i\varphi h_v)$ from $v_0$ to $v_T-N(v)(T)$. Adding $N(v)$, which vanishes at time zero, gives $\mathcal T(v)(0)=v_0$ and $\mathcal T(v)(T)=v_T$. Linearity of $G$ gives $h_v-h_u=-G(0,N(v)(T)-N(u)(T))$. These are the same solution and selector maps as in the endpoint feedback lemma. [F1, F4]

1.2 Since multiplication by $i$ preserves the norm of $H$, the forcing and nonlinear estimates give $\|N(v)\|_{X_T}\le C_0\|ig(v)\|_{L^1(0,T;H)}\le C_0^2\|v\|_{X_T}^m$. Similarly, $\|N(v)-N(u)\|_{X_T}\le C_0^2(\|v\|_{X_T}^{m-1}+\|u\|_{X_T}^{m-1})\|v-u\|_{X_T}$. These estimates apply to the forcing before $D$ and do not require multiplication by $i$ to preserve a real $X_T$. [F1, F2]

2.1 The selector and multiplier bounds imply $\|\varphi h_v\|_{L^1(0,T;H)}\le TC_\varphi C_G(\|v_0\|_H+\|v_T\|_H+\|N(v)(T)\|_H)$. Terminal evaluation is bounded by one. Combining this with the homogeneous and forcing bounds and step 1.2 yields the asserted size estimate with $C_1,C_2$; $C_1$ also bounds the coefficient of $\|v_T\|_H$. [F1, F2, F3, step 1.2]

2.2 The selector difference in step 1.1, terminal evaluation, and the same forcing and multiplier bounds give $\|\mathcal T(v)-\mathcal T(u)\|_{X_T}\le(1+C_0TC_\varphi C_G)\|N(v)-N(u)\|_{X_T}$. The difference estimate follows from step 1.2 and the definition of $C_2$. [F1, F2, F3, step 1.1, step 1.2]

3.1 If both endpoint norms are at most $\delta$ and $\|v\|_{X_T}\le M$, then step 2.1 gives $\|\mathcal T(v)\|_{X_T}\le2C_1\delta+C_2M^m\le M/2+M/4\le M$. For two points in the ball, step 2.2 gives a Lipschitz constant at most $2C_2M^{m-1}\le1/2$. Because $m>1$ and $C_1,C_2$ are fixed, a positive $\delta$ satisfying the displayed smallness condition exists. [given, step 2.1, step 2.2]

4.1 The ball is nonempty and complete: it contains zero, and a Cauchy sequence in it converges in the Banach space $X_T$ to a point still in the ball by the triangle inequality. The contraction theorem gives exactly one fixed point in this ball. Its endpoint values are those in step 1.1. This proves the stated conclusion without asserting uniqueness outside the ball. [F2, F5, step 1.1, step 3.1] ∎

## Source notes

The frozen article, PDF pages 14–15, is cited for attribution of these estimates and the choice of constants. The deduction above uses the stated definitions and mathematical suppliers.
