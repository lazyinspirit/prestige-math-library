---
id: thm-five-lemma-for-a-morphism-of-long-exact-sequences
kind: theorem
title: "Five lemma for a morphism of long exact sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sharp-five-lemma-in-an-abelian-category,
       thm-an-abelian-category-is-balanced]
justified_by: []
landmark: false
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

Let
$$\cdots \to A_{n-1} \to A_n \to A_{n+1} \to A_{n+2} \to A_{n+3} \to \cdots$$
and
$$\cdots \to B_{n-1} \to B_n \to B_{n+1} \to B_{n+2} \to B_{n+3} \to \cdots$$
be long exact sequences in an abelian category, together with a morphism of
these sequences. If the four comparison maps at $A_{n-1},A_n,A_{n+2},A_{n+3}$
are isomorphisms, then the comparison map $A_{n+1} \to B_{n+1}$ is an
isomorphism.

## Facts & Assumptions

**Given:** The morphism of long exact sequences in the statement.

[L1] Every five-term exact window satisfies the sharp five lemma ([[thm-sharp-five-lemma-in-an-abelian-category]]).

[L2] In an abelian category, a morphism that is both monic and epic is an isomorphism ([[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 Extract the five-term window $$A_{n-1} \to A_n \to A_{n+1} \to A_{n+2} \to A_{n+3}$$ and the corresponding window in the $B$-sequence. Exactness of the long sequences makes both rows exact. [L1, given]

2.1 Because the four surrounding comparison maps are isomorphisms, they satisfy both halves of the hypotheses of [L1]. Hence the middle comparison map $A_{n+1} \to B_{n+1}$ is both monic and epic. [L1, step 1.1]

3.1 Therefore that middle comparison map is an isomorphism by [L2]. [L2, step 2.1] ∎
