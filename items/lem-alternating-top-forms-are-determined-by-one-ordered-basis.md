---
id: lem-alternating-top-forms-are-determined-by-one-ordered-basis
kind: lemma
title: "An alternating top-degree form is determined by its value on one ordered basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coordinate-column-and-matrix-of-a-linear-map, def-dimension,
       lem-rigidity-of-alternating-multilinear-matrix-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be an $n$-dimensional vector space over a field $F$, where $n\geq 1$,
and let $\mathcal B=(b_0,\ldots,b_{n-1})$ be an ordered basis. If
$\omega:V^n\to F$ is alternating and linear in each argument, then

$$\omega(v_0,\ldots,v_{n-1}) =\omega(b_0,\ldots,b_{n-1}) \det M_{\mathcal B}(v_0,\ldots,v_{n-1}),$$

where $M_{\mathcal B}(v_0,\ldots,v_{n-1})$ has the $\mathcal B$-coordinate
column of $v_j$ as column $j$. Thus $\omega$ is determined by its value on
$\mathcal B$.

## Facts & Assumptions

**Given:** $V,F,n,\mathcal B,\omega$, and $v_0,\ldots,v_{n-1}$ as in the
statement.

[F1] An $n$-dimensional vector space has an ordered basis of $n$ vectors
([[def-dimension]]).

[F2] Every vector has a unique coordinate column in an ordered basis
([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L1] If $G:M_n(F)\to F$ is alternating and column-multilinear, then
$G(A)=G(I_n)\det(A)$ ([[lem-rigidity-of-alternating-multilinear-matrix-functions]]).

## Proof

**Proof technique:** direct.

1.1 For $A\in M_n(F)$, let $w_j$ be the unique vector whose $\mathcal B$-coordinate column is column $j$ of $A$, and define $G(A):=\omega(w_0,\ldots,w_{n-1})$. This is well defined, alternating, and column-multilinear. [F1, F2, given]

2.1 The rigidity lemma gives $G(A)=G(I_n)\det(A)$. [step 1.1, L1]

3.1 For $A=M_{\mathcal B}(v_0,\ldots,v_{n-1})$, one has $G(A)=\omega(v_0,\ldots,v_{n-1})$ and $G(I_n)=\omega(b_0,\ldots,b_{n-1})$. Substitution in step 2.1 proves the formula and the final determination claim. [step 2.1, F2] ∎