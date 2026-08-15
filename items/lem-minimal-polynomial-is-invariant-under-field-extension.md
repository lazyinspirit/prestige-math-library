---
id: lem-minimal-polynomial-is-invariant-under-field-extension
kind: lemma
title: "For a matrix over a field, extending the scalar field does not change its minimal polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-field-extension-generated-subfields-and-simple-extension, def-linear-independence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, Potential Diagonalizability, Theorem 4(1)'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/potdiagonalizable.pdf'
pipeline_run: null
---

## Statement

Let $K/F$ be a field extension and let $A\in M_n(F)$. Whether $A$ is viewed over $F$ or over $K$, its minimal polynomial is the same element of $F[x]\subseteq K[x]$. This includes $n=0$, when both minimal polynomials are $1$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and a matrix $A\in M_n(F)$.

[L1] A field extension identifies $F$ with a subfield of $K$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] A finite list is linearly independent when its only vanishing finite linear combination has all coefficients zero ([[def-linear-independence]]).

[L3] The minimal polynomial is the least-degree monic annihilator, equivalently the unique monic generator of all annihilating polynomials ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Proof

**Proof technique:** direct.

1.1 Every polynomial over $F$ that annihilates $A$ still annihilates it over $K$. Hence the $K$-minimal polynomial divides the $F$-minimal polynomial and has no larger degree. [L1, L3]

1.2 Conversely, let $q=\sum_{i=0}^r c_ix^i\in K[x]$ be a nonzero annihilator of $A$. Choose a maximal $F$-linearly independent sublist $d_1,\ldots,d_s$ from the finite list of nonzero coefficients $c_i$; maximality makes it span all the $c_i$. Write $c_i=\sum_j a_{ij}d_j$ with $a_{ij}\in F$. [L1, L2, choose]

2.1 The equality $0=q(A)=\sum_jd_j(\sum_i a_{ij}A^i)$ holds entrywise. Since every entry of each inner matrix lies in $F$ and the $d_j$ are $F$-independent, every matrix $\sum_i a_{ij}A^i$ is zero. At least one corresponding polynomial $q_j=\sum_i a_{ij}x^i$ is nonzero and has degree at most $r$. [step 1.2, L2, algebra]

3.1 Applying step 2.1 to the $K$-minimal polynomial gives a nonzero $F$-annihilator of no larger degree. Thus the two minimal polynomials have equal degree; step 1.1 and monicity then force equality. For $n=0$, [L3] gives $1$ over either field. [step 1.1, step 2.1, L3] ∎
