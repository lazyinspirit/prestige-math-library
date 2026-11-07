---
id: def-canonical-height-of-a-morphism-on-projective-line
kind: definition
title: Canonical height of a degree-at-least-two morphism of the projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-algebraic-closure
  - def-projective-space-points
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - thm-absolute-height-is-invariant-under-field-extension
  - thm-product-formula-for-number-fields
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, §1, Theorem 1.1, printed pp. 166–167"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §§4.1 and 5.2, printed pp. 9–15"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field, fix an algebraic closure $\overline K$, and let $d\ge2$. The projective line $\mathbb P^1(L)$ over a finite extension $L/K$ is the set of nonzero pairs $(x,y)\in L^2$ modulo common scaling by $L^\times$. Let
$$F_i(X,Y)=\sum_{j=0}^{d}a_{ij}X^{d-j}Y^j\in K[X,Y]\qquad(i=0,1)$$
be homogeneous forms with no common zero in $\mathbb P^1(\overline K)$. For every finite extension $L/K$, the rule
$$\phi_L([x:y])=[F_0(x,y):F_1(x,y)]$$
defines a self-map of $\mathbb P^1(L)$: the output pair is nonzero by the no-common-zero hypothesis, and replacing $(x,y)$ by $(\lambda x,\lambda y)$ multiplies both outputs by $\lambda^d$. These maps commute with extension of scalars; write $\phi$ for the resulting map on algebraic points.

For $P=[x:y]\in\mathbb P^1(L)$, define its absolute logarithmic projective height by
$$h(P)=\frac{1}{[L:\mathbb Q]}\sum_{w\in M_L}\log\max\{|x|_w,|y|_w\},$$
where $M_L$ consists of the nonzero prime ideals $\mathfrak p$ of $\mathcal O_L$ (the integral closure of $\mathbb Z$ in $L$), the real embeddings of $L$, and one embedding from each complex-conjugate pair; at a finite place $\mathfrak p$, $|a|_{\mathfrak p}=(N\mathfrak p)^{-\operatorname{ord}_{\mathfrak p}(a)}$, at a real place $|a|_w=|\sigma(a)|$, and at a complex place $|a|_w=|\tau(a)|^2$. The product formula makes this expression independent of the representative $[x:y]$, and the absolute-height field-invariance theorem makes it independent of the finite extension $L$ used to represent $P$.

The **canonical dynamical-height candidate** of $\phi$ at $P$ is
$$\widehat h_\phi(P)=\lim_{n\to\infty}d^{-n}h(\phi^n(P))$$
whenever this limit exists, where $\phi^0$ is the identity and $\phi^{n+1}=\phi\circ\phi^n$.

## Definition references

[[def-number-field|Number field]]

[[def-ring-of-integers-of-a-number-field|Ring of integers]]

[[def-algebraic-closure|Chosen algebraic closure]]

[[def-projective-space-points|Projective points as coordinate tuples modulo nonzero scaling]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field|Absolute logarithmic height, its place-sum normalization, and coordinate invariance]]

[[thm-absolute-height-is-invariant-under-field-extension|Independence of absolute height under finite field extension]]

[[thm-product-formula-for-number-fields|Number-field product formula]]

[Call and Silverman, §1, Theorem 1.1, printed pp. 166–167](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §§4.1 and 5.2, printed pp. 9–15](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)
