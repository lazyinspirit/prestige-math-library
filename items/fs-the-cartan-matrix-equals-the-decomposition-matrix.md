---
id: fs-the-cartan-matrix-equals-the-decomposition-matrix
kind: false-statement
title: "FALSE: the Cartan matrix equals the decomposition matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-regular-and-p-singular-elements, def-decomposition-numbers-and-decomposition-matrix, cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes, thm-cartan-matrix-is-d-transpose-d]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

For every finite group and prime, the Cartan matrix equals the decomposition
matrix.

## Facts & Assumptions

**Given:** A splitting $2$-modular system for the cyclic group $C_2=\langle g\mid g^2=1\rangle$, with characteristic-zero fraction field $K$ and residue field of characteristic $2$.

[F1] The decomposition matrix has one row per ordinary irreducible character and one column per irreducible Brauer character ([[def-decomposition-numbers-and-decomposition-matrix]]).

[F2] The number of simple modular modules, hence of irreducible Brauer characters, is the number of $2$-regular conjugacy classes ([[cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes]]). An element is $2$-regular exactly when its order is odd ([[def-p-regular-and-p-singular-elements]]).

[F3] The Cartan matrix satisfies $C=D^{\mathsf T}D$ ([[thm-cartan-matrix-is-d-transpose-d]]).

## Refutation

**Proof technique:** direct.

1.1 The group $C_2$ has exactly two ordinary irreducible characters over $K$: in any representation the operator representing $g$ satisfies $(T-1)(T+1)=0$, and these factors are coprime because $2$ is invertible in $K$, so the representation splits into its $+1$ and $-1$ eigenspaces. An irreducible representation is therefore one-dimensional, with $g$ acting by $+1$ or $-1$; both occur and are distinct. [given, algebra]

2.1 The only $2$-regular element of $C_2$ is the identity, so [F2] gives exactly one irreducible Brauer character. By [F1] and step 1.1, $D$ has two rows and one column; by [F3], $C=D^{\mathsf T}D$ has one row and one column. [F1, F2, F3, step 1.1]

3.1 A $2\times1$ matrix cannot equal a $1\times1$ matrix. Thus this finite group and prime refute the universal statement. [step 2.1] ∎
