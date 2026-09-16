---
id: def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group
kind: definition
title: Convolution operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, convolution and the operator T_k"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z §Z.2"
---

## Definition

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$, and let $L^2(G)$ be the complex Hilbert space of the left and
right regular representations
([[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]]).
For a continuous function $k\in C(G,\mathbb C)$ the **convolution operator**
with kernel $k$ is
$$(T_kf)(x):=\int_Gk(x^{-1}y)f(y)\,dy,\qquad x\in G,\ f\in L^2(G).$$
This is the right-convolution convention fixed for the whole page. The integral
converges absolutely for every $f\in L^2(G)$ by Cauchy–Schwarz, because $k$ is
bounded and $G$ has finite measure, and $T_kf$ is a well-defined element of
$L^2(G)$: the bound $\|T_kf\|_2\le\|k\|_2\|f\|_2$ is proved together with the
Hilbert–Schmidt property on this page. The assignment $f\mapsto T_kf$ is linear,
so $T_k$ is a bounded linear operator on $L^2(G)$ with $\|T_k\|\le\|k\|_\infty$
and also $\|T_k\|\le\|k\|_2$.

The **right translate** and **left translate** of a kernel are
$$k_h^{\mathrm R}(x):=k(xh),\qquad k_h^{\mathrm L}(x):=k(h^{-1}x),$$
and the **adjoint kernel** is $k^*(x):=\overline{k(x^{-1})}$.

## Remarks

- The convention $(T_kf)(x)=\int_Gk(x^{-1}y)f(y)\,dy$ makes $T_k$ the operator
  of right convolution by $k$: equivalently
  $T_kf(x)=\int_Gf(y)k(y^{-1}x)\,dy$ after the substitution $y\mapsto x^{-1}y$
  and use of invariance of $dy$, so $T_k$ acts on the *right* variable of the
  two-sided action.
- The kernel $K(x,y)=k(x^{-1}y)$ of $T_k$ is continuous on $G\times G$; it is
  the kernel whose square-integrability is proved on this page.
- Convolution is commutative on central functions, and for $k$ central the
  operator $T_k$ commutes with both regular actions; this is used in the
  approximate-identity and Peter–Weyl arguments.
