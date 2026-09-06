---
id: thm-shapiro-lemma-for-group-cohomology
kind: theorem
title: "Shapiro lemma for group cohomology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction, lem-the-group-ring-is-free-over-a-subgroup-ring]
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
    - title: "Weibel, Shapiro Lemma 6.3.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For $H\le G$, a left $H$-module $M$, and $n\ge0$, there is a natural isomorphism $H^n(G;\operatorname{Coind}_H^GM)\cong H^n(H;M)$.

## Proof

**Given:** A projective $\mathbb Z[G]$-resolution $P\to\mathbb Z$.

1.1 Restriction takes $P$ to a projective $\mathbb Z[H]$-resolution because $\mathbb Z[G]$ is free over $\mathbb Z[H]$. [given]

2.1 Coinduction--restriction adjunction identifies $\operatorname{Hom}_G(P,\operatorname{Coind}M)$ with $\operatorname{Hom}_H(\operatorname{Res}P,M)$ as cochain complexes. Taking cohomology gives the claimed natural isomorphism. [step 1.1] ∎
