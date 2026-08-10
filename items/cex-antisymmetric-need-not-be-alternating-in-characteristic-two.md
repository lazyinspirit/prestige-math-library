---
id: cex-antisymmetric-need-not-be-alternating-in-characteristic-two
kind: counterexample
title: 'Over $\mathbb Z/2$, an antisymmetric bilinear form need not be alternating'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, thm-z-mod-p-is-a-field, thm-integers-modulo-n-basic-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.19"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement refuted

The false converse is: every antisymmetric bilinear function is alternating. Over $R=\mathbb Z/2$, define $F:M_2(R)\to R$ on columns $x,y\in R^2$ by $F([x\mid y])=x_0y_0$. Then $F$ is bilinear and antisymmetric but not alternating.

## Facts & Assumptions

**Given:** The field $R=\mathbb Z/2$ and the displayed function $F$.

[L1] Antisymmetric means that swapping columns negates the value, while alternating means vanishing on equal columns ([[def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions]]).

[L2] $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] In $\mathbb Z/2$, addition and multiplication are modulo $2$, so $-1=1$ ([[thm-integers-modulo-n-basic-algebra]]).

## Counterexample

**Proof technique:** direct.

1.1 The coordinate product is linear in each column. Moreover $F([y\mid x])=y_0x_0=x_0y_0=-F([x\mid y])$ because multiplication is commutative and $-1=1$ in $R$. Thus $F$ is antisymmetric. [L1, L2, L3, algebra]

2.1 For $e_0=(1,0)^{\mathsf T}$, one has $F([e_0\mid e_0])=1$, so $F$ does not vanish on equal columns and is not alternating. [step 1.1, L1, algebra] ∎
