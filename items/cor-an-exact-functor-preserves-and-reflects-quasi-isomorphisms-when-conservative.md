---
id: cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative
kind: corollary
title: "An exact functor preserves quasi-isomorphisms and reflects them when it is conservative"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-an-exact-functor-commutes-with-homology,
       def-quasi-isomorphism,
       def-conservative-functor]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "Romyar Sharifi, Homological Algebra, Lemma 2.5.2"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian categories.
Then $F$ preserves quasi-isomorphisms. If $F$ is also conservative, then it
reflects quasi-isomorphisms.

## Facts & Assumptions

**Given:** An exact functor $F:\mathcal A\to\mathcal B$ and a chain map $f:C_\bullet\to D_\bullet$.

[L1] A quasi-isomorphism is a chain map inducing isomorphisms on all homology objects ([[def-quasi-isomorphism]]).

[L2] Exact functors commute with homology ([[thm-an-exact-functor-commutes-with-homology]]).

[L3] A conservative functor reflects isomorphisms ([[def-conservative-functor]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is a quasi-isomorphism, then [L1] says each $H_n(f)$ is an isomorphism. By [L2], the induced map on the homology of $F(f)$ is identified with $F(H_n(f))$, hence is an isomorphism. Therefore $F(f)$ is a quasi-isomorphism by [L1]. [L1, L2]

2.1 Now assume $F$ is conservative and $F(f)$ is a quasi-isomorphism. Then [L1] makes each induced map on $H_n(F(f))$ an isomorphism. By [L2], those are the morphisms $F(H_n(f))$. Since $F$ reflects isomorphisms by [L3], each $H_n(f)$ is an isomorphism, so $f$ is a quasi-isomorphism by [L1]. [L1, L2, L3] ∎
