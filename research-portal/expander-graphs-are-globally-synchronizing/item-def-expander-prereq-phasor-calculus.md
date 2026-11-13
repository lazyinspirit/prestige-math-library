---
title: Phasors, trigonometric identities and periodic derivatives
status: draft
research_item: def-expander-prereq-phasor-calculus
dependency_level: 0
---

## Prerequisites

- [math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)
- [math:def-complex-trigonometric-and-hyperbolic-functions](https://alphabetamath.cc/item/def-complex-trigonometric-and-hyperbolic-functions)
- [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)
- [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)
- [math:cor-complex-trigonometric-and-hyperbolic-derivatives](https://alphabetamath.cc/item/cor-complex-trigonometric-and-hyperbolic-derivatives)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)
- [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)
- [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)


## Definition

For a real angle $u$, its unit phasor is $z(u):=\exp(iu)=e^{iu}$. On $\mathbb R$, define $u\sim v$ when $u-v=2\pi k$ for some $k\in\mathbb Z$. A phase is an equivalence class $[u]=\{v\in\mathbb R:u\sim v\}$ in the quotient set $\mathbb R/{\sim}$; thus it is an angle considered modulo integer multiples of $2\pi$. An angular lift is a real representative of that class, or a locally real-valued representative when the phase varies. The functions $\sin$ and $\cos$ are the usual restrictions to real arguments of the complex trigonometric functions. For $w=a+ib$ with real $a,b$, write $\operatorname{Re}w=a$, $\operatorname{Im}w=b$, and $\overline w=a-ib$.

The following identities hold for real $u,v$: $z(u)=\cos u+i\sin u$, $|z(u)|=1$, $z(u-v)=z(u)\overline{z(v)}$, $\operatorname{Re}z(u-v)=\cos(u-v)$, and $\operatorname{Im}z(u-v)=\sin(u-v)$. With respect to an angular lift, $z'(u)=iz(u)$, $\sin'(u)=\cos u$, and $\cos'(u)=-\sin u$. These identities and derivatives are unchanged when any angle is replaced by a representative differing by an integer multiple of $2\pi$. Finite sums of differentiable complex-valued functions of a real variable may be differentiated termwise, and their real and imaginary parts are the respective sums of the real and imaginary parts.

## Facts & Assumptions

[F1] The complex exponential is defined by its everywhere-convergent power series, so $\exp(0)=1$ ([math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)).

[F2] The complex sine and cosine are defined through the complex exponential ([math:def-complex-trigonometric-and-hyperbolic-functions](https://alphabetamath.cc/item/def-complex-trigonometric-and-hyperbolic-functions)).

[F3] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$; also $\exp(i\pi)=-1$ ([math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)).

[F4] For all complex $a,b$, $\exp(a+b)=\exp(a)\exp(b)$ ([math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)).

[F5] Complex sine and cosine are differentiable with derivatives $\cos$ and $-\sin$, respectively ([math:cor-complex-trigonometric-and-hyperbolic-derivatives](https://alphabetamath.cc/item/cor-complex-trigonometric-and-hyperbolic-derivatives)).

[F6] Real differentiable functions obey the sum rule and scalar multiplication rule, the latter following from the product rule ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F7] Complex conjugation satisfies $w\overline w=|w|^2$; its coordinate definition is $\overline{a+ib}=a-ib$ ([math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)).

[F8] An equivalence relation is reflexive, symmetric and transitive. Its equivalence classes form the quotient set, and a representative of a class is an element whose class is that class ([math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)).

## Justification

**Given:** Real angles $u,v$, and, for the finite-sum assertion, finitely many complex-valued functions with differentiable real and imaginary components.

**Goal:** Establish the phase quotient, the displayed phasor identities, their independence of representatives and the finite-sum rules.

1.1 Set $x=0$ and $y=u$ in [F3]. Since $e^0=\exp(0)=1$, this gives $z(u)=\cos u+i\sin u$ and $|z(u)|=1$. By [F7], $z(v)\overline{z(v)}=1$. Also [F4] and [F1] give $z(v)z(-v)=1$, so $z(-v)=\overline{z(v)}$. Hence $z(u-v)=z(u)\overline{z(v)}$ by [F4], and the stated real and imaginary parts follow by applying the Cartesian formula at $u-v$. [F1, F3, F4, F7, algebra]

1.2 The relation $\sim$ is reflexive because $u-u=2\pi\cdot0$. If $u-v=2\pi k$, then $v-u=2\pi(-k)$, proving symmetry. If $u-v=2\pi k$ and $v-w=2\pi\ell$, then $u-w=2\pi(k+\ell)$, proving transitivity; the witnesses $0,-k,k+\ell$ are integers. Hence [F8] supplies the quotient set of classes used to define phases, with real representatives as angular lifts. [F8, algebra]

2.1 By [F3] and [F4], $z(2\pi)=z(\pi)^2=1$. The addition law, $z(0)=1$, and induction in both integer directions imply $z(u+2\pi k)=z(u)$ for every integer $k$. Equality of the real and imaginary coordinates in step 1.1 makes sine and cosine $2\pi$-periodic as well. Consequently these functions have values independent of the representative of a phase in the quotient from step 1.2. [F1, F3, F4, step 1.1, step 1.2, algebra, induction]

3.1 Restricting [F5] to real arguments gives the stated sine and cosine derivatives. Differentiate the Cartesian expression in step 1.1 componentwise using [F6]; the result is $z'(u)=-\sin u+i\cos u=iz(u)$. The derivative formulas are periodic by step 2.1. A lift changed locally by a constant integer multiple of $2\pi$ therefore gives the same values and derivatives. [F5, F6, step 1.1, step 2.1, algebra]

4.1 For each summand write $f_j=a_j+ib_j$. Coordinate addition gives $\operatorname{Re}\sum_j f_j=\sum_j a_j$ and $\operatorname{Im}\sum_j f_j=\sum_j b_j$. Repeated application of the real sum rule in [F6] gives derivatives of these two finite sums; the complex difference quotient has these component quotients, so its limit is the sum of the component derivatives. This proves termwise differentiation and completes the justification. [F6, algebra, induction] ∎
