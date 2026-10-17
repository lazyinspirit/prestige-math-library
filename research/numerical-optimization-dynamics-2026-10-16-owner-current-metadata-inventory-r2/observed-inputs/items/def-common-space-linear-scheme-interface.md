---
id: def-common-space-linear-scheme-interface
kind: definition
title: "Common Banach-space interface for a linear IVP and its time schemes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-strongly-continuous-semigroup, def-operator-norm, def-bounded-linear-operator, def-natural-numbers, def-space-of-bounded-linear-operators, thm-recursion]
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$. A **common-space
linear IVP interface** consists of a Banach space $X$ over $\mathbb K$ and a
strongly continuous semigroup $U(t)\in\mathcal B(X)$, $t\ge0$, as defined in
[[def-strongly-continuous-semigroup]], together with a finite-time bound: for
each $T>0$ there is $M_T<\infty$ such that
$$\sup_{0\le t\le T}\|U(t)\|\le M_T.$$
The solution with initial value $x\in X$ is $u(t)=U(t)x$. This definition
records the solution operators and their continuous dependence in the same
norm; it makes no claim about a generator domain.

A **consistency subspace** is a dense linear subspace $D\subseteq X$ satisfying
$U(t)D\subseteq D$ for every $t\ge0$. Here dense means
$\overline D^{\,X}=X$, and invariant means the displayed inclusion. It need
not be the domain of a differential generator.

A **common-space time-scheme family** is a sequence of positive time steps
$(\tau_\nu)_{\nu\in\mathbb N}$ with $\tau_\nu\to0$ and bounded linear maps
$S_\nu:X\to X$ in the sense of [[def-bounded-linear-operator]]. Write
$S_\nu^0=I_X$ and recursively set $S_\nu^{n+1}=S_\nu S_\nu^n$ for
$n\in\mathbb N$. These powers are uniquely defined by the recursion theorem
([[thm-recursion]]) on the set $\mathcal B(X)$ of bounded linear operators
([[def-space-of-bounded-linear-operators]]): for fixed $S_\nu$, the map
$T\mapsto S_\nu T$ preserves $\mathcal B(X)$ because composition preserves
linearity and multiplies operator bounds, and $I_X\in\mathcal B(X)$ with bound
$1$. All scheme and solution errors below
use the norm of this same space $X$; write $\|\cdot\|$ for that norm and
$\|\cdot\|_{\mathrm{op}}$ for the operator norm of [[def-operator-norm]].

The family is **consistent on $D$** when for every $x\in D$ and $T>0$,
$$\lim_{\nu\to\infty}\max_{\substack{r\in\mathbb N\\r\tau_\nu\le T}}\frac{\|(S_\nu-U(\tau_\nu))U(r\tau_\nu)x\|}{\tau_\nu}=0.$$
The maximum is over a nonempty finite set because it includes $r=0$. This is
the local defect divided by one time step, uniformly over the exact orbit on
the finite time interval.

The family is **stable on finite time intervals** when for every $T>0$ there
is $C_T<\infty$ such that
$$\|S_\nu^n\|_{\mathrm{op}}\le C_T\quad\text{whenever }\nu,n\in\mathbb N\text{ and }n\tau_\nu\le T.$$
It is **convergent on finite time intervals** when for every $x\in X$ and
$T>0$,
$$\lim_{\nu\to\infty}\max_{\substack{n\in\mathbb N\\n\tau_\nu\le T}}\|S_\nu^n x-U(n\tau_\nu)x\|=0.$$
The maximum convention includes time zero. This locally uniform-in-grid-time
convergence is the hypothesis used for the reverse implication in the
equivalence theorem below.

## Remarks

- A finite-dimensional grid update can be used in this interface only after
  it has been represented by bounded operators on the common space. The exact
  projection/reconstruction lift and the norm bounds needed to transfer
  stability are stated separately in
  [[def-finite-grid-common-space-lift]] and
  [[lem-grid-stability-transfers-under-uniform-norm-comparison]].
- A spectral-radius, von Neumann, or CFL calculation is not the stability
  condition in this definition; stability is the displayed uniform bound on
  powers in the declared common norm.
