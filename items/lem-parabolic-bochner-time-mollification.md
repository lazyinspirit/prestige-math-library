---
id: lem-parabolic-bochner-time-mollification
kind: lemma
title: Time mollification preserves the evolution-space derivative
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bochner-integrable-function
  - def-countable-choice
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-parabolic-evolution-triple-and-energy-space
  - lem-bochner-integral-norm-inequality
  - lem-parabolic-bochner-l2-approximate-identity
  - thm-bochner-integrability-criterion
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §11.1, PDF pp. 100–101: mollification and the evolution-space trace argument."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–2: the weak time derivative in the L²(V*) formulation."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $(V,H,V^*)$ be a real evolution triple and
$u\in W(0,T;V)$. There are smooth $V$-valued functions $u_n$ on a
neighborhood of $[0,T]$ such that
$$u_n\to u\quad\hbox{in }L^2(0,T;V),\qquad u_n'\to u'\quad\hbox{in }L^2(0,T;V^*).$$
The weak time derivative in the definition of $W(0,T;V)$ is unique up to
almost-everywhere equality. No separability assumption on $V$ is needed.

## Facts & Assumptions

**Given:** Countable Choice, the real evolution triple, $T>0$, and a function
$u\in L^2(0,T;V)$ with weak derivative $g\in L^2(0,T;V^*$).

[F1] The evolution-space derivative is defined by testing against every
$v\in V$ and scalar $\phi\in C_c^\infty(0,T)$ in the displayed distribution
identity ([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] Smooth mollifications of a Bochner $L^2$ function converge in $L^2$
and are smooth with values in the target Hilbert space
([[lem-parabolic-bochner-l2-approximate-identity]]).

[F3] Strongly measurable functions with integrable norm are Bochner
integrable, and a bounded linear map commutes with Bochner integration
([[thm-bochner-integrability-criterion]],
[[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F4] Fubini changes the order of integration for an absolutely integrable
scalar function on the finite product interval
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] On $(0,T)$, square-integrable scalar functions are integrable, with
$\|h\|_{L^1}\le\sqrt T\|h\|_{L^2}$
([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is assumed by the Bochner $L^2$ approximation result
([[def-countable-choice]]).

## Proof
1.1 Let $g_1,g_2\in L^2(0,T;V^*)$ both satisfy [F1], and put $h=g_1-g_2$. For every $v\in V$ and $\phi\in C_c^\infty(0,T)$, $\int\langle h(t),v\rangle\phi(t)\,dt=0$. Therefore every Bochner convolution of the zero extension, $h_\epsilon(t)=\int_0^T h(s)\eta_\epsilon(t-s)\,ds$, vanishes on any compact subinterval whose distance from $\{0,T\}$ exceeds $\epsilon$: its scalar pairing against each $v$ is the zero distribution tested by $s\mapsto\eta_\epsilon(t-s)$. By [F2], $h_\epsilon\to h$ in local $L^2(V^*)$, so $h=0$ almost everywhere. [F1, F2, F3, A1, given]

2.1 Regard $u$ as a $V^*$-valued function through the continuous embedding $V\hookrightarrow V^*$ and set $G(t)=\int_0^t g(s)\,ds$. The Bochner integral exists by [F3], and [F5] gives $g\in L^1(0,T;V^*)$. For each fixed $v\in V$, [F4] and scalar integration by parts show that $G$ has weak derivative $g$ in the sense of [F1]. Thus $w:=u-G$ has zero distribution derivative. For any $\psi\in C_c^\infty(0,T)$ with integral zero, its primitive is compactly supported in $(0,T)$, hence $\int w(t)\psi(t)\,dt=0$ in $V^*$. Fix $\eta\in C_c^\infty(0,T)$ with integral one and put $c=\int w(t)\eta(t)\,dt$. Subtracting $(\int\psi)\eta$ shows $\int(w-c)\psi=0$ for every test $\psi$. The convolutions of $w-c$ are therefore zero on compact subintervals as in step 1.1; [F2] makes them converge to $w-c$ in local $L^2(V^*)$. Hence $w=c$ almost everywhere, and $\widetilde u(t):=c+G(t)$ is a continuous $V^*$ representative of $u$. [F1, F2, F3, F4, F5, step 1.1, construct]

3.1 Reflect the $V$-valued $L^2$ class evenly to $(-T,2T)$ across $0$ and $T$, and reflect $g$ oddly. The continuous $V^*$ representative from step 2.1 has matching values at each seam. Integration by parts on the three intervals therefore shows that the reflected function has weak $V^*$ derivative equal to the odd reflection of $g$; the endpoint terms cancel, so there are no point masses. Extend both functions by zero beyond $(-T,2T)$. For $0<\epsilon<T/2$, the convolution on the resulting neighborhood of $[0,T]$ does not see the extension jumps at $-T$ or $2T$. [F1, step 2.1, construct, algebra]

4.1 Let $\eta_\epsilon$ be a nonnegative smooth mollifier of mass one, supported in $(-\epsilon,\epsilon)$, and convolve the reflected functions in time. On a neighborhood of $[0,T]$, $u_\epsilon=\eta_\epsilon*u$ is smooth with values in $V$ by [F2]. Testing the reflected weak derivative identity against a fixed $v\in V$ and integrating by parts in the scalar variable gives $\langle u_\epsilon'(t),v\rangle=\int\langle g(s),v\rangle \eta_\epsilon(t-s)\,ds=\langle(\eta_\epsilon*g)(t),v\rangle$. The bounded inclusion $V\to V^*$ commutes with the Bochner integral by [F3], so $u_\epsilon'=\eta_\epsilon*g$ in $V^*$. [F1, F2, F3, step 3.1, construct]

5.1 Apply the $L^2$ approximation in [F2] to the reflected $V$-valued function and its $V^*$ derivative, then restrict to $(0,T)$. This gives $u_\epsilon\to u$ in $L^2(V)$ and $u_\epsilon'\to g$ in $L^2(V^*)$ as $\epsilon\downarrow0$. [F2, step 3.1, step 4.1]

6.1 Choose any sequence $\epsilon_n\downarrow0$ small enough that each convolution is defined on a neighborhood of $[0,T]$, and set $u_n=u_{\epsilon_n}$. Step 5.1 gives both asserted convergences, and step 4.1 gives $u_n'=\eta_{\epsilon_n}*g$. The uniqueness in step 1.1 identifies $g=u'$. [step 1.1, step 4.1, step 5.1, construct] ∎
