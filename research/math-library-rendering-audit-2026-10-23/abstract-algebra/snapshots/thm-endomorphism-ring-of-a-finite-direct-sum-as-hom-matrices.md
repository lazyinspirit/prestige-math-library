---
id: thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices
kind: theorem
title: "Endomorphisms of a finite direct sum are matrices of Hom-groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-endomorphism-ring-of-a-module, def-hom-groups-and-induced-hom-maps, thm-universal-property-of-module-direct-sums]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

For $n\in\mathbb N$ and left $R$-modules $M_1,\ldots,M_n$, endomorphisms of $\bigoplus_jM_j$ correspond to $n\times n$ matrices $(f_{ij})$ with $f_{ij}\in\operatorname{Hom}_R(M_j,M_i)$, and composition is matrix multiplication using composition in the entries. For $n=0$, both sides are the one-element zero ring. See [[def-endomorphism-ring-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a left $R$-module $M$, define $$\operatorname{End}_R(M):=\operatorname{Hom}_R(M,M).$$ Addition is pointwise and multiplication is composition, $(fg)(m):=f(g(m))$. The ring laws and the identity endomorphism are established in prop-endomorphisms-form-a-ring. ([[def-endomorphism-ring-of-a-module]]).

[L2] For left $R$-modules $M,N$, the set $\operatorname{Hom}_R(M,N)$ of module homomorphisms is an abelian group under pointwise addition, with zero the zero homomorphism and inverse $(-f)(m)=-f(m)$ (def-module-homomorphism-kernel-image-and-cokernel, def-group). ([[def-hom-groups-and-induced-hom-maps]]).

[L3] Let $(M_i)_{i\in I}$ be left $R$-modules and $N$ a left $R$-module. For every family of homomorphisms $f_i:M_i\to N$, there is a unique homomorphism $$f:\bigoplus_{i\in I}M_i\longrightarrow N$$ such that $f\circ\jmath_i=f_i$ for every $i$. It is given by $$f((m_i))=\sum_{i\in\operatorname{supp}(m)}f_i(m_i).$$ For $I=\varnothing$, this is the unique map $0\to N$. ([[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 We use inclusions and projections to send $f$ to entries $f_{ij}=\pi_i f\iota_j$, and reconstruct $f$ by finite sums. [L1, L2, L3, given, algebra]

2.1 Composition becomes matrix multiplication because $\sum_k\iota_k\pi_k=\operatorname{id}$ on a finite direct sum, so the $(i,j)$ entry of $f\circ g$ is $$\pi_i(f\circ g)\iota_j=\pi_i f\Bigl(\sum_k\iota_k\pi_k\Bigr)g\iota_j=\sum_k(\pi_i f\iota_k)(\pi_k g\iota_j)=\sum_k f_{ik}\circ g_{kj},$$ which is the matrix product with composition in the entries; the sum is finite because $n$ is. [step 1.1, L3, algebra]

3.1 For $n=0$ the direct sum is the zero module, $\operatorname{End}_R(0)$ has one element by [L1], and the set of $0\times0$ matrices also has exactly one element, so both sides are the one-element zero ring as the Statement records. For $n=1$ the matrix is the single entry $f_{11}=\pi_1f\iota_1=f$, and the correspondence is the identity on $\operatorname{End}_R(M_1)$. This proves the stated claim. [step 1.1, step 2.1, L1, algebra] ∎
