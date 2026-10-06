---
id: cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity
kind: counterexample
title: "A nonconvex gradient energy can lose weak lower semicontinuity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous, thm-direct-method-for-convex-integral-functionals, def-sobolev-space-wkp-and-its-norm, def-convex-and-strictly-convex-functionals-on-a-banach-space, thm-acl-characterisation-of-w-one-p, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, lem-w-one-p-is-reflexive, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice, def-extended-reals, thm-holder-inequality-for-integrals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 4.1, Theorems 2.46-2.50 and Example 2.54, printed pp. 44-45 and 52"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Example 13.6 (convexity hypothesis), printed p. 298"
verification:
  precheck: pass
---

## Statement refuted

**Counterexample.** Assume the Axiom of Choice, the ultrafilter lemma, DC and HB ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). On $\Omega=(0,1)$ let $w:\mathbb R\to\mathbb R$ be the $1$-periodic function with $w(t)=t$ on $[0,\tfrac12]$ and $w(t)=1-t$ on $[\tfrac12,1]$, and put $u_k(x)=\tfrac1k w(kx)$ for integers $k\ge1$. Then $u_k\to0$ uniformly, $u_k'\in\{\pm1\}$ almost everywhere, and $u_k\rightharpoonup0$ in $H^1(0,1)$. For the nonnegative integrand $f(\xi)=(\xi^2-1)^2$, which is not convex since $f(0)=1>\tfrac12f(-1)+\tfrac12f(1)=0$,
The integral is interpreted in $[0,+\infty]$ on $H^1(0,1)$; it need not be finite for every $H^1$ function.
$$I(u)=\int_0^1\big(u'(x)^2-1\big)^2dx$$
satisfies $I(u_k)=0$ for every $k$, while $I(0)=\int_0^1 1\,dx=1$. Hence $I(0)>\lim_kI(u_k)=0$ and $I$ is not weakly sequentially lower semicontinuous. Also $I$ is not convex: $I(u_1)=I(-u_1)=0<I((u_1-u_1)/2)=1$, so [[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]] does not apply. Nevertheless $I$ attains its minimum $0$ at every $u_k$. This example does not refute the existence conclusion of [[thm-direct-method-for-convex-integral-functionals]] with convexity removed: it also lies outside that theorem's $n\ge2$ and $p=2$ upper-growth hypotheses.

## Facts & Assumptions

**Given:** The Axiom of Choice (for ACL), the ultrafilter lemma, DC and HB; the interval $\Omega=(0,1)$; the $1$-periodic continuous function $w$ with $w(t)=t$ on $[0,\tfrac12]$ and $w(t)=1-t$ on $[\tfrac12,1]$; the functions $u_k(x)=\tfrac1kw(kx)$; and the integrand $f(\xi)=(\xi^2-1)^2$ with $I(u)=\int_0^1(u'(x)^2-1)^2dx$. The weak compactness step uses the ultrafilter lemma, DC and HB ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]).

[F1] The function $w$ is continuous, $1$-periodic, satisfies $|w|\le\tfrac12$ and $w(0)=w(1)=0$, and is piecewise linear with $|w'|=1$ almost everywhere. Hence $u_k(x)=\tfrac1kw(kx)$ is absolutely continuous on $[0,1]$ with a.e. derivative $u_k'(x)=w'(kx)\in\{\pm1\}$; by the ACL characterisation $u_k\in W^{1,2}(0,1)$ with weak derivative $u_k'$ ([[thm-acl-characterisation-of-w-one-p]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] For $\varphi\in L^2(0,1)$ the maps $u\mapsto\int_0^1u\varphi$ and $u\mapsto\int_0^1u'\varphi$ are bounded linear functionals on $W^{1,2}(0,1)$ with operator norm at most $\|\varphi\|_{L^2}$, by Cauchy-Schwarz against the two components of the Sobolev norm ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] $W^{1,2}(0,1)$ is a reflexive Banach space, so every norm-bounded sequence in it has a weakly convergent subsequence under the ultrafilter lemma, DC and HB ([[lem-w-one-p-is-reflexive]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).

[F4] If $y\in L^2(0,1;\mathbb R)$ has $\int y\varphi=0$ for all real $\varphi\in L^2$, take $\varphi=y$ to obtain $\|y\|_2^2=0$, so $y=0$ as an $L^2$ class. This directly identifies the subsequential Sobolev limit; uniqueness of weak probability-measure limits is not used.

[F5] The weak lower semicontinuity lemma assumes convexity of the functional ([[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]). The convex integral existence theorem also assumes $n\ge2$ and a $p$-growth upper bound ([[thm-direct-method-for-convex-integral-functionals]]); the present interval and quartic integrand fail these hypotheses for $p=2$. Nonconvexity is checked by the midpoint inequality ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]), and existence here is decided by the explicit values of $I$.

## Counterexample

**Proof technique:** direct computation along the oscillating sawtooth sequence.

1.1 The sequence and its bounds. By [F1] the functions $u_k$ lie in $W^{1,2}(0,1)$ with $|u_k|\le\tfrac1{2k}$ and $|u_k'|=1$ almost everywhere; hence $\|u_k\|_{L^2}\le\tfrac1{2k}\to0$ and $\|u_k'\|_{L^2}=1$ for every $k$, so $(u_k)$ converges to $0$ in $L^2$ and is norm bounded in $W^{1,2}(0,1)$. [F1, algebra]

1.2 The values of $I$. Since $|u_k'|=1$ almost everywhere, $I(u_k)=\int_0^1(u_k'^2-1)^2=0$ for every $k$; and $I(0)=\int_0^1(0-1)^2dx=1$. Hence $\liminf_kI(u_k)=0<1=I(0)$. [F1, algebra]

2.1 $u_k\rightharpoonup0$ in $W^{1,2}(0,1)$. Suppose not; then there are a bounded linear functional $F$ on $W^{1,2}(0,1)$ and $\varepsilon>0$ with $|F(u_k)|\ge\varepsilon$ for infinitely many $k$. Along that subsequence, which stays norm bounded, [F3] provides a further subsequence with $u_{k_l}\rightharpoonup y$ for some $y\in W^{1,2}(0,1)$. For every $\varphi\in L^2(0,1)$ the bounded functional of [F2] gives $\int_0^1u_{k_l}\varphi\to\int_0^1y\varphi$, while $\int_0^1u_{k_l}\varphi\to0$ because $u_{k_l}\to0$ in $L^2$ by step 1.1; passing to the limit, $\int_0^1y\varphi=0$ for all $\varphi\in L^2$, so $y=0$ by taking $\varphi=y$ in [F4]. But then $F(u_{k_l})\to F(0)=0$, contradicting $|F(u_{k_l})|\ge\varepsilon$. Hence $u_k\rightharpoonup0$ in $W^{1,2}(0,1)$. [F2, F3, F4, step 1.1]

3.1 Conclusion and scope. Steps 1.2 and 2.1 give $I(0)=1>0=\liminf_kI(u_k)$ along a sequence converging weakly to $0$, so $I$ is not weakly sequentially lower semicontinuous. Since $I(-u_1)=I(u_1)=0$ but $I(0)=1$, $I$ is not convex. Yet $I\ge0$ and $I(u_1)=0$, so its minimum is attained. Thus the example shows loss of weak lower semicontinuity for a nonconvex gradient energy, without asserting necessity of convexity for existence; the cited convex integral theorem also has dimensional and growth hypotheses absent here. [F5, step 1.2, step 2.1, algebra] ∎
