---
id: thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor
kind: theorem
title: 'The free-group functor is left adjoint to the underlying-set functor'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-group, thm-free-groups-unique-up-to-unique-isomorphism, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint, prop-groups-and-homomorphisms-form-category-grp]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Choosing a free group $(F(X),i_X)$ on every set $X$ defines a functor $F:\mathbf{Set}\to\mathbf{Grp}$, and

$$F\dashv U:\mathbf{Grp}\to\mathbf{Set},$$

where $U$ is the underlying-set functor. The adjunction bijection sends a group homomorphism $\varphi:F(X)\to G$ to the function $U(\varphi)i_X:X\to U(G)$.

## Facts & Assumptions

**Given:** A chosen free group $(F(X),i_X)$ for every set $X$.

[F1] A free group on $X$ has the property that every function $u:X\to G$ extends uniquely to a homomorphism $\widehat u:F(X)\to G$ with $\widehat u\,i_X=u$ ([[def-free-group]]).

[F2] Two free groups on the same set are uniquely isomorphic by an isomorphism preserving the generator maps ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[F3] Groups and group homomorphisms form the locally small category $\mathbf{Grp}$ ([[prop-groups-and-homomorphisms-form-category-grp]]).

[L1] Chosen objectwise universal arrows assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 For a function $a:X\to Y$, apply [F1] to $i_Ya:X\to F(Y)$ and define $F(a)$ as its unique extending homomorphism. [F1, construct]

1.2 For each $G$, restriction along $i_X$ and extension by [F1] are inverse maps between $\mathbf{Grp}(F(X),G)$ and $\mathbf{Set}(X,U(G))$. [F1, F3]

2.1 Uniqueness in [F1] gives $F(1_X)=1_{F(X)}$ and $F(ba)=F(b)F(a)$, since both sides agree with the relevant generator map. Thus $F$ is a functor and $i:1_{\mathbf{Set}}\Rightarrow UF$ is natural. [step 1.1, F1]

3.1 Equivalently, $(F(X),i_X)$ is a universal arrow from $X$ to $U$, so [L1] gives $F\dashv U$ and the asserted natural bijection. [step 1.1, step 2.1, step 1.2, L1]

4.1 For $X=\varnothing$, [F1] says $F(X)$ is initial in $\mathbf{Grp}$, so the same construction applies. By [F2], replacing any chosen free-group model changes $F(X)$ only by the unique generator-preserving isomorphism. [F1, F2] ∎
