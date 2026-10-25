---
id: thm-shapiro-lemma-for-group-homology
kind: theorem
title: "Shapiro lemma for group homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-homology-as-a-derived-functor, thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction, lem-the-group-ring-is-free-over-a-subgroup-ring, def-axiom-of-choice]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Weibel, Shapiro Lemma 6.3.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

For $H\le G$, a left $H$-module $M$, and $n\ge0$, there is a natural isomorphism $H_n(G;\operatorname{Ind}_H^GM)\cong H_n(H;M)$.

## Proof

**Given:** The Axiom of Choice and a projective right $\mathbb Z[G]$-resolution $P\to\mathbb Z$.

1.1 Apply the Axiom of Choice to the family of nonempty left cosets $G/H$ to obtain a transversal $T$. The group-ring freeness supplier then gives $\mathbb Z[G]\cong\bigoplus_{t\in T}t\mathbb Z[H]$ as right $\mathbb Z[H]$-modules. Restriction therefore sends free, hence projective, right $\mathbb Z[G]$-modules to projective right $\mathbb Z[H]$-modules. Exactness and the augmentation are unchanged on restriction, so the restricted $P$ is a projective right $\mathbb Z[H]$-resolution of the right trivial module. [given, construct]

2.1 Tensor associativity gives an isomorphism of chain complexes $P\otimes_{\mathbb Z[G]}(\mathbb Z[G]\otimes_{\mathbb Z[H]}M)\cong(\operatorname{Res}P)\otimes_{\mathbb Z[H]}M$. The left and right sides compute respectively $H_n(G;\operatorname{Ind}_H^GM)$ and $H_n(H;M)$, so their homology gives the asserted natural isomorphism. [step 1.1] ∎
