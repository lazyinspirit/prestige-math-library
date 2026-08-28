---
id: thm-a-direct-summand-of-a-projective-is-projective
kind: theorem
title: "A direct summand of a projective is projective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-object-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Every direct summand of a projective object in an abelian category is
projective.

## Facts & Assumptions

**Given:** A projective object $P$ with a decomposition $P\cong Q\oplus Q'$.

[L1] Projective objects are exactly those with the lifting property against
epimorphisms
([[thm-projective-object-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Let $q:E\twoheadrightarrow M$ be epic and let $f:Q\to M$ be any morphism. Write $i:Q\to P$ and $r:P\to Q$ for the split inclusion and retraction, so $r i=1_Q$. The composite $f r:P\to M$ lifts across $q$ by [L1] to a map $\widetilde g:P\to E$. [L1, construct]

2.1 Put $\widetilde f:=\widetilde g i:Q\to E$. Then $$q\widetilde f=q\widetilde g\,i=f r i=f.$$ So $Q$ has the lifting property against every epimorphism, hence is projective by [L1]. [L1, step 1.1] ∎
