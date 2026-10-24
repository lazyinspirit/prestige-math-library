---
id: fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction
kind: false-statement
title: "Shapiro lemma needs no induction/coinduction distinction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-shapiro-lemma-for-group-cohomology, thm-shapiro-lemma-for-group-homology, def-restriction-induction-and-coinduction-for-group-modules, def-axiom-of-choice]
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

Shapiro's lemma uses the same change-of-groups functor in homology and cohomology.

## Refutation

**Given:** Assume the Axiom of Choice and use the two Shapiro isomorphisms under that hypothesis.

1.1 Cohomology uses the right adjoint $\operatorname{Coind}_H^G$ through a Hom-complex comparison. [given]

2.1 Homology uses the left adjoint $\operatorname{Ind}_H^G$ through a tensor-complex comparison. [step 1.1, given]

3.1 The two functors need not agree: for $H=\{0\}$, $G=(\mathbb Z,+)$, and $M=\mathbb F_2$, induction has underlying set $\mathbb F_2^{(\mathbb Z)}$ of finitely supported sequences, whereas coinduction has underlying set $\mathbb F_2^{\mathbb Z}$ of all sequences. The first set is countable and the second is uncountable by Cantor's diagonal argument. [step 2.1, algebra] ∎
