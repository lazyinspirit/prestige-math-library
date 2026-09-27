---
id: ex-shapiro-lemma-for-the-trivial-subgroup
kind: example
title: "Shapiro lemma for the trivial subgroup"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-shapiro-lemma-for-group-cohomology, thm-shapiro-lemma-for-group-homology, def-axiom-of-choice]
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
    - title: "Weibel, Corollary 6.3.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

Assume the Axiom of Choice and the supplied resolution conventions for group (co)homology. For an abelian group $M$ and $H=1$, $H^n(G;\operatorname{Coind}_1^GM)=0$ and $H_n(G;\operatorname{Ind}_1^GM)=0$ for $n>0$.

## Verification

**Given:** The Axiom of Choice, the supplied resolution conventions, and the two Shapiro isomorphisms with $H=1$.

1.1 Induction and coinduction from $1$ are respectively $\mathbb Z[G]\otimes M$ and $\operatorname{Hom}_{\mathbb Z}(\mathbb Z[G],M)$. [given]

2.1 The assumed Choice supplies the transversal premise used in the two cited Shapiro theorems. Shapiro identifies their positive (co)homology with positive (co)homology of the trivial group, which vanishes. [step 1.1] ∎
