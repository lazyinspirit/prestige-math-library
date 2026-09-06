---
id: thm-shapiro-lemma-for-group-homology
kind: theorem
title: "Shapiro lemma for group homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-homology-as-a-derived-functor, thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction, lem-the-group-ring-is-free-over-a-subgroup-ring]
proof_strategy: direct
verification:
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

For $H\le G$, a left $H$-module $M$, and $n\ge0$, there is a natural isomorphism $H_n(G;\operatorname{Ind}_H^GM)\cong H_n(H;M)$.

## Proof

**Given:** A projective right $\mathbb Z[G]$-resolution $P\to\mathbb Z$.

1.1 Restriction of $P$ is a projective right $\mathbb Z[H]$-resolution of the right trivial module: a left-coset transversal gives $\mathbb Z[G]\cong\bigoplus_{t\in T}t\mathbb Z[H]$ as right $\mathbb Z[H]$-modules, so restriction sends free, hence projective, right $\mathbb Z[G]$-modules to projective right $\mathbb Z[H]$-modules. Exactness and the augmentation are unchanged on restriction. [given]

2.1 Tensor associativity gives an isomorphism of chain complexes $P\otimes_{\mathbb Z[G]}(\mathbb Z[G]\otimes_{\mathbb Z[H]}M)\cong(\operatorname{Res}P)\otimes_{\mathbb Z[H]}M$. The left and right sides compute respectively $H_n(G;\operatorname{Ind}_H^GM)$ and $H_n(H;M)$, so their homology gives the asserted natural isomorphism. [step 1.1] ∎
