---
id: thm-shapiro-lemma-for-group-cohomology
kind: theorem
title: "Shapiro lemma for group cohomology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction, lem-the-group-ring-is-free-over-a-subgroup-ring, def-axiom-of-choice]
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

For $H\le G$, a left $H$-module $M$, and $n\ge0$, there is a natural isomorphism $H^n(G;\operatorname{Coind}_H^GM)\cong H^n(H;M)$.

## Proof

**Given:** The Axiom of Choice and a projective $\mathbb Z[G]$-resolution $P\to\mathbb Z$.

1.1 Apply the Axiom of Choice to the family of nonempty right cosets $H\backslash G$ to obtain a transversal $T$. The group-ring freeness supplier then gives $\mathbb Z[G]\cong\bigoplus_{t\in T}\mathbb Z[H]t$ as left $\mathbb Z[H]$-modules. Restriction therefore takes the projective left $\mathbb Z[G]$-resolution $P$ to a projective left $\mathbb Z[H]$-resolution. [given, construct]

2.1 Coinduction--restriction adjunction identifies $\operatorname{Hom}_G(P,\operatorname{Coind}M)$ with $\operatorname{Hom}_H(\operatorname{Res}P,M)$ as cochain complexes. Taking cohomology gives the claimed natural isomorphism. [step 1.1] ∎
