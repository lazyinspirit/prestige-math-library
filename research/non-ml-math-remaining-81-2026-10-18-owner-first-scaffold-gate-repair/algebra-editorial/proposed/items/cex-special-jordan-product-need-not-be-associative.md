---
id: cex-special-jordan-product-need-not-be-associative
kind: counterexample
title: The symmetrized product need not be associative
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-associative-jordan-product, thm-associative-symmetrization-satisfies-jordan-identity, def-jordan-algebra]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, PDF p. 20"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

The symmetrized product $A^+$ of an associative algebra need not be
associative. In $M_2(\mathbb R)^+$, put
$x=E_{12}$, $y=E_{21}$, and $z=E_{11}$. Then
$(x\circ y)\circ z=\tfrac12E_{11}$ while
$x\circ(y\circ z)=\tfrac14I_2$.

## Facts & Assumptions

**Given:** $M_2(\mathbb R)$ with usual matrix multiplication and
$a\circ b=(ab+ba)/2$.

[F1] The symmetrized product is $a\circ b=(ab+ba)/2$
([[def-associative-jordan-product]]).

[F2] For $a,b\in\{1,2\}$, $E_{ab}$ is the matrix with $1$ in position
$(a,b)$ and zeros elsewhere; these units satisfy
$E_{ab}E_{cd}=\delta_{bc}E_{ad}$. The symmetrized product of an associative
algebra is Jordan
([[thm-associative-symmetrization-satisfies-jordan-identity]]).

## Proof
1.1 The matrix-unit rule gives $x\circ y=I_2/2$ and $y\circ z=E_{21}/2$. Therefore $(x\circ y)\circ z=(I_2/2)\circ E_{11}=E_{11}/2$. [given, F1, F2, algebra]

2.1 It also gives $x\circ(y\circ z)=E_{12}\circ(E_{21}/2) =\tfrac14(E_{11}+E_{22})=I_2/4.$ These differ, since their $(1,1)$ entries are $1/2$ and $1/4$. Thus the product is not associative; it is nevertheless a Jordan product by [F2]. [given, F1, F2, step 1.1, algebra] ∎
