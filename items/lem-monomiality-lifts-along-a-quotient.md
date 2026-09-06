---
id: lem-monomiality-lifts-along-a-quotient
kind: lemma
title: Monomiality lifts along a quotient
status: published
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, thm-transitivity-of-induction-for-finite-groups, def-quotient-group]
proof_strategy: construct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Lemma 4.3.4
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $N\triangleleft G$. If every irreducible character of $G/N$ is monomial, then every irreducible character of $G$ with $N$ in its kernel is monomial.

## Facts & Assumptions

[F1] The cited prerequisite is [[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]].

## Proof

**Given:** $\chi$ is irreducible with $N\subseteq\ker\chi$.

1.1 Factor $\chi$ through an irreducible character $\bar\chi$ of $G/N$. By hypothesis choose $\bar H\leq G/N$ and a linear $\bar\lambda$ with $\bar\chi=\operatorname{Ind}_{\bar H}^{G/N}\bar\lambda$. [F1, given, construct]

2.1 Let $H$ be the inverse image of $\bar H$ and inflate $\bar\lambda$ to a linear $\lambda$ of $H$. Compatibility of induction with quotient inflation gives $\chi=\operatorname{Ind}_H^G\lambda$. ∎ [step 1.1, discharge-construct]
