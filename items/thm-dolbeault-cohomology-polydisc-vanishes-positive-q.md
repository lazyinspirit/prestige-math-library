---
id: thm-dolbeault-cohomology-polydisc-vanishes-positive-q
kind: theorem
title: Positive-degree Dolbeault cohomology vanishes on polydiscs
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - def-dolbeault-cohomology-domain
  - thm-dolbeault-lemma-polydisc
  - thm-d-dbar-decomposition-and-identities
  - def-axiom-of-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - def-holomorphic-function-in-several-complex-variables
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - thm-power-series-expansion-in-several-complex-variables
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-compactly-supported-differential-form
  - rem-complex-euclidean-space-dictionary
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 4.4.5 and complete proof, printed pp. 141–145, PDF text lines 11318–11324 and 11626–11680. The source proves the q>1 gluing case and the q=1 scalar construction; its reduction of q=1 to p=0 cites Exercise 4.4.6, which is only a prompt. This item proves q=1 directly for every p, coefficientwise. The local input is Lemma 4.4.7 and its complete proof, printed p. 143, lines 11547–11620."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume the full axiom of choice. Let $n\ge1$ and let
$P=\prod_{j=1}^n D_j\subseteq\mathbb C^n$, where each $D_j$ is a nonempty
open disc of finite positive radius or is $\mathbb C$. For integers
$0\le p\le n$ and $1\le q\le n$, every smooth
$\eta\in\Omega^{p,q}(P)$ with $\bar\partial\eta=0$ is $\bar\partial$-exact:
there is a smooth $\omega\in\Omega^{p,q-1}(P)$ such that
$\bar\partial\omega=\eta$. Consequently,
$H_{\bar\partial}^{p,q}(P)=0$.

## Facts & Assumptions

**Given:** Full AC; $n\ge1$; $P=\prod_{j=1}^nD_j$ with each factor a nonempty
finite-radius open disc or $\mathbb C$; integers $0\le p\le n$ and
$1\le q\le n$; and a smooth $\bar\partial$-closed
$\eta\in\Omega^{p,q}(P)$.

[F1] Smooth complex forms have a unique finite expansion in the basis
$dz^I\wedge d\bar z^J$, with $0\le p,q\le n$, and $\bar\partial$ is given
coefficientwise by the Wirtinger derivatives
([[def-bigraded-complex-differential-forms]]).

[F2] Under full AC, a smooth closed $(p,q)$ form on a finite polydisc has a
smooth $(p,q-1)$ primitive on every coordinate polydisc whose closed coordinate
discs are compactly contained in the source
([[thm-dolbeault-lemma-polydisc]]).

[F3] $\bar\partial^2=0$
([[thm-d-dbar-decomposition-and-identities]]).

[F4] $H_{\bar\partial}^{p,q}(P)$ is the quotient of closed $(p,q)$ forms by
exact $(p,q)$ forms ([[def-dolbeault-cohomology-domain]]).

[F5] Full AC means that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F6] If $K$ is compact in an open set $W$ of a smooth manifold, there is a
smooth function equal to $1$ on a neighborhood of $K$ whose support lies in
$W$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F7] For a $C^1$ function, the several-variable Cauchy–Riemann system is
equivalent to complex differentiability at every point
([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F8] A function is holomorphic on an open set when it is complex differentiable
at every point ([[def-holomorphic-function-in-several-complex-variables]]).

[F9] A holomorphic function of several variables is continuous and separately
holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[F10] A continuous separately holomorphic function on a polydisc has a power
series that converges uniformly on every strictly smaller closed polydisc
([[thm-power-series-expansion-in-several-complex-variables]]).

[F11] A locally uniform limit of holomorphic functions on an open set is
holomorphic there ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F12] Holomorphic functions of several variables are smooth
([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F13] The support of a smooth form is the closure of its nonzero locus
([[def-compactly-supported-differential-form]]).

[F14] In $\mathbb C^n$, a subset is compact exactly when it is closed and
bounded ([[rem-complex-euclidean-space-dictionary]]).

[F15] Open and closed polydiscs are defined coordinatewise by strict and
non-strict radius inequalities ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F16] $\bar\partial$ obeys the graded product rule
([[thm-d-dbar-decomposition-and-identities]]).

## Proof

**Proof technique:** exhaustion and gluing.

1.1 If $\eta=0$, take $\omega=0$. Otherwise, write each finite-radius factor as $D(a_j,R_j)$ and set $r_{j,k}=(1-2^{-k})R_j$; for each factor equal to $\mathbb C$, use center $a_j=0$ and radius $r_{j,k}=k$. Let $P_k=\prod_{j=1}^nD(a_j,r_{j,k})$. The sequence is increasing, $\bigcup_kP_k=P$, and $\overline{P_k}\subset P_{k+1}$ by [F15]. Each $\overline{P_k}$ is closed and bounded in $\mathbb C^n$, hence compact by [F14]. Thus every successive pair satisfies the compact-containment hypothesis of [F2]. [F2, F14, F15, given, construct]

1.2 Suppose first that $q>1$. By [F2], choose a primitive $\omega_1$ on $P_3$ using $\eta$ on $P_4$. Inductively suppose $\omega_k$ is a smooth $(p,q-1)$ form on $P_{k+2}$ with $\bar\partial\omega_k=\eta$. By [F2], choose another primitive $\sigma$ on $P_{k+3}$ using $\eta$ on $P_{k+4}$. The difference $d=\omega_k-\sigma$ on $P_{k+2}$ is a closed $(p,q-1)$ form; because $q-1\ge1$, [F2] gives a $(p,q-2)$ form $v$ on $P_{k+1}$ with $\bar\partial v=d$ there. [F2, given, algebra, choose]

2.1 Since $\overline{P_k}$ is compact and contained in $P_{k+1}$, apply [F6] to obtain a smooth $\chi$ equal to $1$ near $\overline{P_k}$ with $\operatorname{supp}\chi\subset P_{k+1}$. The support is closed by [F13]. Extend $\chi v$ by zero outside $P_{k+1}$; near each boundary point of $P_{k+1}$ the closed support is absent, so this extension is smooth. Define $\omega_{k+1}=\sigma+\bar\partial(\chi v)$ on $P_{k+3}$. By [F3], $\bar\partial^2=0$, so $\bar\partial\omega_{k+1}=\bar\partial\sigma=\eta$. On $P_k$, $\chi=1$ on a neighborhood, so the product rule [F16] gives $\bar\partial(\chi v)=\bar\partial v=d$ and $\omega_{k+1}=\omega_k$. Full AC [F5] supplies choices for the successive nonempty sets of local primitives and corrections at every finite stage. [F3, F5, F6, F13, F16, step 1.2, given, algebra, choose]

2.2 Now suppose $q=1$. Use [F2] to choose $\omega_1$ on $P_3$ with $\bar\partial\omega_1=\eta$ on $P_3$. Given $\omega_k$ on $P_{k+2}$, choose $\sigma$ on $P_{k+3}$ with $\bar\partial\sigma=\eta$. On $P_{k+2}$, $\delta=\sigma-\omega_k$ is a closed $(p,0)$ form. In its unique expansion $\delta=\sum_{|I|=p}\delta_I dz^I$, [F1] and $\bar\partial\delta=0$ imply $\partial_{\bar z_j}\delta_I=0$ for every $I,j$. Each coefficient is smooth, so [F7] and [F8] make it holomorphic; [F9] then makes it continuous and separately holomorphic. Apply [F10] to each of the finitely many coefficients on $P_{k+2}$. Since $\overline{P_k}\subset P_{k+2}$, their Taylor polynomials can be chosen with maximum coefficient error less than $2^{-k}$ on $\overline{P_k}$. Let $Q_k$ be the resulting holomorphic polynomial $(p,0)$ form and set $\omega_{k+1}=\sigma-Q_k$ on $P_{k+3}$. Then $\bar\partial\omega_{k+1}=\eta$ and every coefficient of $\omega_{k+1}-\omega_k$ has absolute value below $2^{-k}$ on $\overline{P_k}$. Full AC [F5] supplies choices throughout this countable recursion. [F1, F2, F5, F7, F8, F9, F10, step 1.1, given, algebra, choose]

3.1 The exact agreement in step 2.1 defines a smooth form $\omega$ on $P$ by $\omega|_{P_k}=\omega_k|_{P_k}$. The sets $P_k$ cover $P$ and the definitions agree on each nested overlap. Locally $\omega$ equals a local primitive $\omega_k$, so $\bar\partial\omega=\eta$ on all of $P$. [step 2.1, given, algebra]

3.2 For any compact $K\subset P$, the increasing open cover $\{P_k\}$ has a finite subcover, so $K\subset P_\ell$ for some $\ell$. If $m>k\ge\ell$, the coefficient error estimate in step 2.2 gives $\|\omega_m-\omega_k\|_{K,\infty}\le\sum_{j=k}^{m-1}2^{-j}<2^{1-k}$, where the norm is the maximum over the finitely many $(p,0)$ coefficients and $K$. Thus the coefficients converge locally uniformly on $P$ to those of a form $\omega$. For each fixed $\ell$, every coefficient of $\omega_m-\omega_\ell$ is holomorphic on $P_\ell$ for $m\ge\ell$, by the closed $(p,0)$ argument in step 2.2. Their locally uniform limit is holomorphic on $P_\ell$ by [F11], and is smooth by [F12]. By [F7], this holomorphic difference has zero $\bar\partial$. Since $\bar\partial\omega_\ell=\eta$, it follows that $\omega$ is smooth and $\bar\partial\omega=\eta$ on every $P_\ell$, hence on $P$. [F7, F11, F12, step 2.2, given, algebra]

4.1 Both cases produce a smooth $\bar\partial$-primitive for every closed $(p,q)$ form on $P$. Therefore every element of the numerator in [F4] belongs to its exact-form denominator, and the quotient is the zero vector space. [F4, step 3.1, step 3.2, given, algebra] ∎
