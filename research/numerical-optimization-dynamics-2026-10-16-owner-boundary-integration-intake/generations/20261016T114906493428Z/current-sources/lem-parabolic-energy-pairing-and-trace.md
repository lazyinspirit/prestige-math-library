---
id: lem-parabolic-energy-pairing-and-trace
kind: lemma
title: The evolution-space energy identity and continuous H trace
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - lem-parabolic-bochner-time-mollification
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §11.1, PDF pp. 100–101: the evolution-space trace and integration-by-parts identity."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–3: the parabolic energy estimate obtained by testing with the solution."
verification: {}
---

## Statement

Assume Countable Choice. Let $(V,H,V^*)$ be the real evolution triple of
[[def-parabolic-evolution-triple-and-energy-space]], and let
$u,v\in W(0,T;V)$. Each has a unique representative in $C([0,T];H)$, and
for all $0\le s\le t\le T$,
$$\|u(t)\|_H^2-\|u(s)\|_H^2 =2\int_s^t\langle u'(r),u(r)\rangle_{V^*,V}\,dr,$$
$$(u(t),v(t))_H-(u(s),v(s))_H =\int_s^t\bigl(\langle u'(r),v(r)\rangle_{V^*,V} +\langle v'(r),u(r)\rangle_{V^*,V}\bigr)\,dr.$$
Writing $c_i=\|i:V\to H\|$, the trace obeys
$$\sup_{0\le t\le T}\|u(t)\|_H^2 \le \frac{c_i^2}{T}\|u\|_{L^2(0,T;V)}^2 +2\|u'\|_{L^2(0,T;V^*)}\|u\|_{L^2(0,T;V)}.$$

## Facts & Assumptions

**Given:** A real evolution triple, $T>0$, and $u,v\in W(0,T;V)$.

[F1] $W(0,T;V)$ consists of $u\in L^2(0,T;V)$ with weak derivative
$u'\in L^2(0,T;V^*)$; the embedding $V\to H$ is continuous
([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] Each such $u$ admits smooth $V$-valued approximants converging in
$L^2(V)$ whose time derivatives converge to $u'$ in $L^2(V^*)$
([[lem-parabolic-bochner-time-mollification]]).

[A1] Countable Choice is required for the scalar translation and Bochner
$L^2$ approximation in [[lem-parabolic-bochner-time-mollification]]
([[def-countable-choice]]).

## Proof

1.1 For a smooth $V$-valued function $w$, the continuous inclusion into $H$ and the ordinary product rule give $\frac{d}{dt}\|w(t)\|_H^2=2(w'(t),w(t))_H =2\langle w'(t),w(t)\rangle_{V^*,V}$ by the canonical embedding [[def-parabolic-evolution-triple-and-energy-space]]. [F1, given]

2.1 For smooth $w$, choose $s$ with $\|w(s)\|_H^2\le T^{-1}\|w\|_{L^2(H)}^2$. Integrating step 1.1 from $s$ to any $t$ gives $\sup_t\|w(t)\|_H^2\le T^{-1}c_i^2\|w\|_{L^2(V)}^2 +2\|w'\|_{L^2(V^*)}\|w\|_{L^2(V)}.$ Apply this to differences of the approximants in [F2]; they are Cauchy in $C([0,T];H)$. Their uniform limit is continuous and agrees with $u$ almost everywhere by their $L^2(H)$ convergence. The same bound passes to the limit. [A1, F1, F2, step 1.1, choose]

2.2 For approximants $u_n$ from [F2], integrate step 1.1 between arbitrary $s,t$. Uniform $H$ convergence passes the two endpoint norms to those of the continuous representative. The integrands converge in $L^1$ because $\|\langle u_n',u_n\rangle-\langle u',u\rangle\|_{L^1} \le \|u_n'-u'\|_{L^2(V^*)}\|u_n\|_{L^2(V)} +\|u'\|_{L^2(V^*)}\|u_n-u\|_{L^2(V)},$ whose right-hand side tends to zero. This proves the energy identity for all $s,t$. [A1, F2, step 1.1, algebra]

3.1 Apply the energy identity from step 2.2 to $u+v$ and $u-v$, subtract, and use the real polarization identity $\|u+v\|_H^2-\|u-v\|_H^2=4(u,v)_H$. Bilinearity gives the asserted integration-by-parts identity. [step 2.2, algebra]

4.1 The trace estimate is the smooth bound in step 2.1 passed through the uniform approximation in [F2], with $\|u\|_{L^2(H)}\le c_i\|u\|_{L^2(V)}$. If two continuous representatives agree almost everywhere, their difference is continuous and zero on a dense subset of $[0,T]$, hence zero everywhere; the representative is unique. [A1, F1, F2, step 2.1] ∎