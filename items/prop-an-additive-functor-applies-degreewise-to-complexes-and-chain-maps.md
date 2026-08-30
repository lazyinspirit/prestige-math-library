---
id: prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps
kind: proposition
title: "An additive functor applies degreewise to complexes and chain maps"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-functor,
       prop-an-additive-functor-preserves-zero-morphisms,
       def-chain-complex-in-an-abelian-category,
       def-chain-map]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.7: Additive functors"
      url: "https://stacks.math.columbia.edu/tag/010N"
pipeline_run: frontier-24
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an additive functor between abelian
categories. Applying $F$ degreewise to a chain complex $C_\bullet$ and to a
chain map $f:C_\bullet\to D_\bullet$ produces a chain complex $F(C)_\bullet$
and a chain map $F(f):F(C)_\bullet\to F(D)_\bullet$.

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal A\to\mathcal B$ between abelian categories.

[L1] Additive functors preserve zero morphisms ([[prop-an-additive-functor-preserves-zero-morphisms]]).

[L2] A chain complex satisfies $d_{n-1} d_n=0$ ([[def-chain-complex-in-an-abelian-category]]).

[L3] A chain map commutes with differentials ([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 If $C_\bullet$ is a chain complex, then $$F(d_{n-1}^C)F(d_n^C)=F(d_{n-1}^C d_n^C)=F(0)=0$$ by [L1] and [L2]. Hence the objects $F(C_n)$ with differentials $F(d_n^C)$ form a chain complex. [L1, L2, given, algebra]

2.1 If $f:C\to D$ is a chain map, then [L3] gives $d_n^D f_n=f_{n-1} d_n^C$. Applying $F$ yields $$F(d_n^D)F(f_n)=F(f_{n-1})F(d_n^C),$$ so the family $F(f_n)$ is a chain map $F(C)\to F(D)$. [L3, step 1.1, algebra] ∎
