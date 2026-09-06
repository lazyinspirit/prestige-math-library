---
id: ex-shapiro-lemma-for-the-trivial-subgroup
kind: example
title: "Shapiro lemma for the trivial subgroup"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-shapiro-lemma-for-group-cohomology, thm-shapiro-lemma-for-group-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Corollary 6.3.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

For an abelian group $M$ and $H=1$, $H^n(G;\operatorname{Coind}_1^GM)=0$ and $H_n(G;\operatorname{Ind}_1^GM)=0$ for $n>0$.

## Verification

**Given:** The two Shapiro isomorphisms with $H=1$.

1.1 Induction and coinduction from $1$ are respectively $\mathbb Z[G]\otimes M$ and $\operatorname{Hom}_{\mathbb Z}(\mathbb Z[G],M)$. [given]

2.1 Shapiro identifies their positive (co)homology with positive (co)homology of the trivial group, which vanishes. [step 1.1] ∎
