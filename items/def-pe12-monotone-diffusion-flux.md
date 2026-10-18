---
id: def-pe12-monotone-diffusion-flux
kind: definition
title: Coercive monotone p-growth diffusion fluxes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-pe12-gelfand-triple, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-pe12-w1p-compact-l2-embedding, lem-pe12-w0p-separable-reflexive, thm-poincare-inequality-for-w-one-p-zero, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-ultrafilter-lemma, thm-hahn-banach-dominated-extension, lem-caratheodory-composition-is-measurable, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS 2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: §§3–4, especially the Nemytskii and quasilinear elliptic flux hypotheses, PDF pp. 10–17
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Theorem 5.16 (Minty–Browder), PDF p. 159; Chapter 9, Sobolev spaces and Rellich compactness
verification:
  precheck: n/a
justified_by:
  - thm-pe12-backward-euler-galerkin-existence-energy
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $d\ge1$, let $\Omega\subset\mathbb R^d$ be a bounded open set, and
let $1<p<\infty$ satisfy $p>\max(1,2d/(d+2))$. Put
$V=W_0^{1,p}(\Omega;\mathbb R)$ with norm
$\|v\|_V=\|\nabla v\|_{L^p(\Omega)}$, $H=L^2(\Omega;\mathbb R)$, and
$p'=p/(p-1)$. The Poincaré inequality makes this norm equivalent to the full
$W^{1,p}$ norm. [[lem-pe12-w0p-separable-reflexive]] gives separability and
reflexivity, while [[lem-pe12-w1p-compact-l2-embedding]] gives the dense
continuous compact inclusion $V\Subset H$; these are the hypotheses of the
evolution triple in [[def-pe12-gelfand-triple]]. The compact-inclusion result
uses the stated threshold also when $d=1$, where it reduces to $p>1$.

A measurable flux $a:\Omega\times\mathbb R^d\to\mathbb R^d$ is an admissible
**coercive monotone diffusion flux of p-growth** if it is Carathéodory (for
each $\xi$, $x\mapsto a(x,\xi)$ is measurable, and for almost every $x$,
$\xi\mapsto a(x,\xi)$ is continuous), and there are constants $C<\infty$,
$\alpha>0$, nonnegative functions $g\in L^{p'}(\Omega)$ and
$h\in L^1(\Omega)$, and one
null set outside which, for all $\xi,\eta\in\mathbb R^d$,
$$|a(x,\xi)|\le C\bigl(g(x)+|\xi|^{p-1}\bigr),\qquad a(x,\xi)\cdot\xi\ge\alpha|\xi|^p-h(x),$$
$$\bigl(a(x,\xi)-a(x,\eta)\bigr)\cdot(\xi-\eta)\ge0.$$
The induced operator $A:V\to V^*$ is
$$\langle A(v),w\rangle_{V^*,V} =\int_\Omega a(x,\nabla v(x))\cdot\nabla w(x)\,dx.$$
The growth bound and Hölder's inequality make this pairing finite and give
$\|A(v)\|_{V^*}\le C_1(\|g\|_{p'}+\|v\|_V^{p-1})$ for a constant $C_1$.
The finite-dimensional test-coordinate continuity used in the backward Euler
existence argument follows from the stated Carathéodory and growth conditions
by dominated convergence, as proved in
[[thm-pe12-backward-euler-galerkin-existence-energy]]. No additional global
operator-continuity hypothesis is imposed.

For $f\in L^{p'}(0,T;V^*)$, a weak evolution solution is a function
$u\in W_p(0,T;V)\cap L^\infty(0,T;H)$ with a continuous $H$ representative
such that $u'+A(u)=f$ in $L^{p'}(0,T;V^*)$ and $u(0)=u_0\in H$.

## Remarks

The $L^2$ state space is available exactly on the stated strict subcritical
branch. The growth, coercivity, and monotonicity conditions are explicit; no smoothness or error rate for degenerate fronts
is implicit. No boundary regularity is assumed: the Poincaré and compact
embedding suppliers used above hold on bounded open sets.

For $v\in V$, apply [[lem-caratheodory-composition-is-measurable]] to each
component of $a$ (independent of its scalar argument) and the measurable map
$\nabla v$; this makes $x\mapsto a(x,\nabla v(x))$ measurable. The growth
condition gives
$$\|a(\cdot,\nabla v)\|_{L^{p'}(\Omega)}\le C\bigl(\|g\|_{L^{p'}(\Omega)}+\|\nabla v\|_{L^p(\Omega)}^{p-1}\bigr),$$
because $(p-1)p'=p$. Thus Hölder's inequality makes the displayed pairing a
bounded linear functional of $w$, so $A(v)\in V^*$ with the stated norm
bound.

The choice assumptions of the Sobolev suppliers are met under the stated
Axiom of Choice: it implies Countable and Dependent Choice by
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
the ultrafilter lemma by [[thm-ultrafilter-lemma]], and Hahn–Banach by
[[thm-hahn-banach-dominated-extension]].
