---
id: def-constant-and-isotrivial-variety-over-function-field
kind: definition
title: Constant and isotrivial curves over function fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-algebraic-curve-over-field
  - def-base-change-morphism-schemes
  - def-extension-degree-and-finite-extension
  - def-function-field-with-exact-constant-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Definition 9.5.8, printed p. 287"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "Pierre Samuel, Compléments à un article de Hans Grauert sur la conjecture de Mordell, Theorems 4–5, printed pp. 58–60"
      url: https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf
verification:
  precheck: n/a
---

## Definition

Let $(K,k)$ be a function field with exact constant field $k$, and let $X$ be
a smooth, proper, geometrically integral curve over $K$. The curve $X$ is
**constant over $k** if there is a smooth, proper, geometrically integral
curve $X_0/k$ and a $K$-isomorphism
$X\cong X_0\times_{\operatorname{Spec}k}\operatorname{Spec}K$. For a finite
field extension $L/K$, write $k_L=\{a\in L:a\text{ is algebraic over }k\}$,
the relative algebraic closure of $k$ in $L$ and hence the exact constant field
of $L$ over $k$. The curve $X$ is **isotrivial over $k** if there are such an $L$, a smooth,
proper, geometrically integral curve $X_0/k_L$, and an $L$-isomorphism
$X\times_{\operatorname{Spec}K}\operatorname{Spec}L\cong
X_0\times_{\operatorname{Spec}k_L}\operatorname{Spec}L$. The extension $L/K$
is not required to be separable.

## Definition references

[[def-algebraic-curve-over-field]]

[[def-base-change-morphism-schemes]]

[[def-extension-degree-and-finite-extension]]

[[def-function-field-with-exact-constant-field]]

[Poonen, Definition 9.5.8, printed p. 287](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Samuel, Theorems 4–5, printed pp. 58–60](https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf)
