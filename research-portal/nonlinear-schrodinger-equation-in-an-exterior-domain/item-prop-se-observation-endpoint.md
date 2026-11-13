---
title: Lifting zero-order observability to the order-two endpoint
status: published
research_item: prop-se-observation-endpoint
dependency_level: 9
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 12: ` σ=2 part of Proposition 3.5 proof `

## Prerequisites

- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [prop-se-integer-commutator](item-prop-se-integer-commutator)
- [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega=\mathbb R^n\setminus\Theta$ be the smooth connected exterior of a nonempty compact obstacle, and let $\varphi$ be the real control cutoff of [def-se-control-cutoffs](item-def-se-control-cutoffs). Let $\Delta_D$ be the Dirichlet Laplacian, $A=I-\Delta_D$, $H_D^s(\Omega)$ the associated spectral scale with $\|u\|_{H_D^2}=\|Au\|_{L^2}$, and $W(t)=e^{it\Delta_D}$, as in [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) and [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Fix $0<T<\infty$.

Suppose there is $C_0>0$ such that every $f\in L^2(\Omega)$ satisfies the zero-order observability inequality
$$\|f\|_{L^2}^2\le C_0\int_0^T\|\varphi W(t)f\|_{L^2}^2\,dt.$$
Then there is $C>0$, depending on $T$, $C_0$ and the fixed cutoff and scale constants, such that every $v_0\in H_D^2(\Omega)$, with $v(t)=W(t)v_0$, satisfies
$$\|v_0\|_{H_D^2}^2\le C\int_0^T\|\varphi v(t)\|_{H_D^2}^2\,dt.$$
In particular, before absorption there are constants $C_1,C_2>0$ such that
$$\|v_0\|_{H_D^2}^2\le C_1\int_0^T\|\varphi v(t)\|_{H_D^2}^2\,dt+C_2T\|v_0\|_{H_D^1}^2.$$
The zero-order inequality is an explicit hypothesis of this conditional lifting statement.

## Facts & Assumptions

[A1] The zero-order observability inequality in the Statement holds for every $L^2$ initial datum, with the same constant $C_0$.

[F1] The cutoff $\varphi$ is smooth and real, vanishes near the obstacle and has bounded derivatives; $\Delta_D$ has domain $H_D^2=D(A)$, and $\|u\|_{H_D^2}=\|Au\|_2$. [def-se-control-cutoffs](item-def-se-control-cutoffs) [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[F2] Under Choice, $C_\varphi=[\Delta,\varphi]$ extends boundedly from $H_D^1$ to $L^2$. For $u\in D(A)$, $\varphi u\in D(A)$ and $A(\varphi u)=\varphi Au-C_\varphi u$. The domain and identity follow from the integer commutator supplier by writing $u=A^{-1}g$, $g\in L^2$, in its resolvent identity. [prop-se-integer-commutator](item-prop-se-integer-commutator) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Under Choice, $W(t)$ is a strongly continuous unitary group on each scale space. It commutes with the scale powers; in particular $AW(t)u=W(t)Au$ for $u\in D(A)$. Multiplication by $\varphi$ is bounded on $H_D^2$. [prop-se-scale-flow](item-prop-se-scale-flow) [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] For each $\varepsilon>0$, $\|u\|_{H_D^1}^2\le\varepsilon\|u\|_{H_D^2}^2+C_\varepsilon\|u\|_2^2$ for $u\in H_D^2$. Also $\|u\|_2\le\|u\|_{H_D^2}$. [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation)

[F5] The time integrals are integrals of squared norms of strongly measurable scale-valued functions. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

## Proof

[A1] The zero-order observability inequality in the Statement holds for every $L^2$ initial datum, with the same constant $C_0$.

[F1] The cutoff $\varphi$ is smooth and real, vanishes near the obstacle and has bounded derivatives; $\Delta_D$ has domain $H_D^2=D(A)$, and $\|u\|_{H_D^2}=\|Au\|_2$. [def-se-control-cutoffs](item-def-se-control-cutoffs) [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) [def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[F2] Under Choice, $C_\varphi=[\Delta,\varphi]$ extends boundedly from $H_D^1$ to $L^2$. For $u\in D(A)$, $\varphi u\in D(A)$ and $A(\varphi u)=\varphi Au-C_\varphi u$. The domain and identity follow from the integer commutator supplier by writing $u=A^{-1}g$, $g\in L^2$, in its resolvent identity. [prop-se-integer-commutator](item-prop-se-integer-commutator) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Under Choice, $W(t)$ is a strongly continuous unitary group on each scale space. It commutes with the scale powers; in particular $AW(t)u=W(t)Au$ for $u\in D(A)$. Multiplication by $\varphi$ is bounded on $H_D^2$. [prop-se-scale-flow](item-prop-se-scale-flow) [prop-se-cutoff-multipliers](item-prop-se-cutoff-multipliers) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] For each $\varepsilon>0$, $\|u\|_{H_D^1}^2\le\varepsilon\|u\|_{H_D^2}^2+C_\varepsilon\|u\|_2^2$ for $u\in H_D^2$. Also $\|u\|_2\le\|u\|_{H_D^2}$. [prop-se-fractional-interpolation](item-prop-se-fractional-interpolation)

[F5] The time integrals are integrals of squared norms of strongly measurable scale-valued functions. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)



**Given:** The geometry, cutoff, scale, Choice assumption, $T$, the zero-order observability hypothesis, and $v_0\in H_D^2$ in the Statement.

**Goal:** Prove the displayed preliminary estimate and absorb its lower-order term to obtain the order-two observability inequality.

1.1 Put $v(t)=W(t)v_0$. By scale unitarity, $v(t)\in H_D^2$, $\|v(t)\|_{H_D^1}=\|v_0\|_{H_D^1}$, and $Av(t)=W(t)Av_0$. The cutoff multiplier and strong continuity give $\varphi v\in C([0,T];H_D^2)$, so its squared norm is integrable. Apply the zero-order hypothesis to $Av_0\in L^2$ and use the commutator identity to obtain $\|v_0\|_{H_D^2}^2\le C_0\int_0^T(\|\varphi v(t)\|_{H_D^2}+K\|v_0\|_{H_D^1})^2\,dt$, where $K$ is a bound for $C_\varphi:H_D^1\to L^2$. Consequently the preliminary estimate holds with, for example, $C_1=2C_0$ and $C_2=2C_0K^2$, enlarged if necessary to be positive. [A1, F1, F2, F3, F5]

2.1 Apply the absorption inequality to $v_0$, and apply zero-order observability to $v_0$ itself. Since $\|\varphi v(t)\|_2\le\|\varphi v(t)\|_{H_D^2}$, these give $\|v_0\|_{H_D^1}^2\le\varepsilon\|v_0\|_{H_D^2}^2+C_\varepsilon C_0\int_0^T\|\varphi v(t)\|_{H_D^2}^2\,dt$. Choose $\varepsilon>0$ with $C_2T\varepsilon\le1/2$, substitute this estimate into step 1.1, and move the resulting half of $\|v_0\|_{H_D^2}^2$ to the left. The remaining finite constant proves the order-two inequality. [A1, F3, F4, step 1.1] ∎

## Source notes

The article is cited for attribution of the endpoint argument in the proof of Proposition 3.5 on PDF page 12. The proof above uses the stated conditional zero-order hypothesis and the independent mathematical suppliers; it does not assume the article's endpoint conclusion.
