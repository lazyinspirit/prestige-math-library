---
id: def-a-infinity-algebra
kind: definition
title: "Uncurved cohomological A∞-algebra in the unsuspended convention"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-koszul-sign-rule-for-graded-tensors
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§9.2.1 and 9.2.5"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $k$ be a field ([[def-field]]) and let
$A=\bigoplus_{j\in\mathbb Z}A^j$ be a $\mathbb{Z}$-graded $k$-vector space; its tensor
maps use the convention in [[def-koszul-sign-rule-for-graded-tensors]]. An
**uncurved cohomological A∞-algebra in the unsuspended convention** is a
sequence of homogeneous $k$-linear maps

$$m_n:A^{\otimes_k n}\longrightarrow A,\qquad |m_n|=2-n, \qquad n\ge1,$$

such that for every $n\ge1$ the following equality of maps
$A^{\otimes_k n}\to A$ holds:

$$\sum_{\substack{r,t\ge0,\ s\ge1\\r+s+t=n}} (-1)^{r+st} m_{r+1+t}\bigl(1^{\otimes r}\otimes m_s\otimes1^{\otimes t}\bigr)=0.$$

Here $1$ denotes the identity map of $A$, the tensor maps use the Koszul rule,
and the displayed sign $(-1)^{r+st}$ is part of the fixed convention. The
degree condition means that for homogeneous inputs of degrees $j_1,\ldots,j_n$,
$m_n$ has output degree $j_1+\cdots+j_n+2-n$.

“Uncurved” means no arity-zero operation $m_0$ is included. “Nonunital” means
that no unit is part of this definition. A unit or a strict-unit condition on
higher operations is additional data and must be stated separately. No graded
commutativity is assumed for $m_2$.

## Remarks

The arity-two identity is the chain-map condition for $m_2$. Its commutative
square is shown below; the downward map on $A^{\otimes2}$ is the tensor
differential with the [[def-koszul-sign-rule-for-graded-tensors|Koszul sign
rule]]. This diagram records the equation only; it is not a proof of any
Stasheff identity.

```tikzcd
A^{\otimes 2} \arrow[r,"m_2"] \arrow[d,"m_1\otimes 1+1\otimes m_1"'] & A \arrow[d,"m_1"] \\
A^{\otimes 2} \arrow[r,"m_2"'] & A
```

