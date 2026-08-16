---
id: prop-characteristic-polynomial-factors-over-an-invariant-subspace
kind: proposition
title: 'For invariant $W$, $\chi_T=\chi_{T|_W}\chi_{\bar T}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-subspace-and-induced-quotient-operator, prop-induced-quotient-operator-is-well-defined, lem-quotient-basis-lifts-to-an-adapted-basis, lem-characteristic-polynomial-of-block-triangular-matrix, def-characteristic-polynomial-of-an-operator]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 6.4"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space, and let $W\le V$ be $T$-invariant. Then
$$\chi_T(x)=\chi_{T|_W}(x)\,\chi_{\bar T}(x),$$
where $\bar T$ is the endomorphism induced on $V/W$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, an endomorphism $T$, and a $T$-invariant subspace $W$.

[L1] Invariance defines the restriction $T|_W$ and the quotient formula $\bar T(v+W)=T(v)+W$ ([[def-invariant-subspace-and-induced-quotient-operator]]).

[L2] A basis of $W$ followed by representatives of a basis of $V/W$ is a basis of $V$ ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

[L3] A block upper-triangular matrix with diagonal blocks $A,D$ has characteristic polynomial $\chi_A\chi_D$, including zero-sized blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[L4] The characteristic polynomial of an endomorphism is the basis-independent characteristic polynomial of any representing matrix, and it is $1$ on the zero space ([[def-characteristic-polynomial-of-an-operator]]).

[L5] The formula $\bar T(v+W)=T(v)+W$ is well defined and linear ([[prop-induced-quotient-operator-is-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 Choose an ordered basis of $W$, a basis of $V/W$, and representatives of the latter; [L2] gives an adapted basis of $V$, in which invariance makes the matrix of $T$ block upper triangular, with upper-left block representing $T|_W$ and lower-right block representing the well-defined operator $\bar T$. [L1, L2, L5]

2.1 Applying [L3] to that matrix and then [L4] to identify its diagonal-block polynomials gives $\chi_T=\chi_{T|_W}\chi_{\bar T}$; if $W=0$, $W=V$, or $V=0$, the missing block has characteristic polynomial $1$, so the same identity remains valid. [step 1.1, L3, L4] ∎
