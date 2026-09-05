---
id: prop-the-quadratic-casimir-element-is-central
kind: proposition
title: "The quadratic Casimir element is central"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-casimir-element, lem-the-casimir-element-is-independent-of-dual-bases]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Statement

For every $x\in \mathfrak g$, the quadratic Casimir element $C$ from [[def-quadratic-casimir-element]] satisfies

$$[x,C]=0.$$

Hence $C\in Z(U(\mathfrak g))$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$, its Casimir element $C$, and $x\in \mathfrak g$.

## Proof

**Proof technique:** direct.

1.1 Choose dual bases $x_i,x^i$ for the Killing form. Then $[x,C]=\sum_i [x,x_i]x^i+x_i[x,x^i]$. [given, algebra]

2.1 The basis-independent tensor $\Omega:=\sum_i x_i\otimes x^i$ corresponds, through the Killing-form identification $\mathfrak g\cong\mathfrak g^*$, to the identity endomorphism of $\mathfrak g$. Invariance of the form says that this identity tensor is fixed by the diagonal adjoint action. Hence $$\sum_i [x,x_i]\otimes x^i+x_i\otimes[x,x^i]=0.$$ Multiplying the tensor factors and using step 1.1 gives $[x,C]=0$. [[lem-the-casimir-element-is-independent-of-dual-bases]] [step 1.1, algebra]

3.1 Since $[x,C]=0$ for every $x\in \mathfrak g$, the element $C$ commutes with the generators of $U(\mathfrak g)$ and is therefore central. [step 2.1] ∎
