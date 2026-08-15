---
id: thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant
kind: theorem
title: "The minimal polynomial is unchanged by choosing a matrix representation or replacing a matrix by a similar one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-coordinate-column-and-matrix-of-a-linear-map, thm-matrix-of-a-composite-is-the-product, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §4, Theorem 4.3'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space and let $A=[T]_{\mathcal B}^{\mathcal B}$ in an ordered basis $\mathcal B$. Then $T$ and $A$ have the same minimal polynomial. More generally, similar square matrices have the same minimal polynomial.

## Facts & Assumptions

**Given:** An endomorphism $T$, an ordered basis $\mathcal B$, its matrix $A=[T]_{\mathcal B}^{\mathcal B}$, and square matrices $A,B$ with $B=P^{-1}AP$.

[L1] The matrix of a composite is the product of the matrices in compatible ordered bases ([[thm-matrix-of-a-composite-is-the-product]]).

[L2] Similar matrices are exactly matrix representations of one endomorphism in different ordered bases ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

[L3] The minimal polynomial is the unique monic generator of the annihilator ideal ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L4] The matrix of a linear map has as its columns the coordinate columns of the images of the domain basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 By induction on $k$, [L1] gives $[T^k]_{\mathcal B}^{\mathcal B}=A^k$ for every $k\ge0$; taking the same finite linear combination on both sides yields $[p(T)]_{\mathcal B}^{\mathcal B}=p(A)$ for every $p\in F[x]$. [L1, L4, algebra]

2.1 A linear map is zero exactly when its matrix in a basis is zero, so step 1.1 and [L4] give $p(T)=0$ if and only if $p(A)=0$. The annihilator ideals coincide, hence their unique monic generators coincide by [L3]. [step 1.1, L3, L4]

3.1 If $B=P^{-1}AP$, induction gives $B^k=P^{-1}A^kP$, and therefore $p(B)=P^{-1}p(A)P$. Thus $p(B)=0$ exactly when $p(A)=0$, so [L3] again gives $\mu_B=\mu_A$. This also follows from [L2]. [L2, L3, algebra] ∎
