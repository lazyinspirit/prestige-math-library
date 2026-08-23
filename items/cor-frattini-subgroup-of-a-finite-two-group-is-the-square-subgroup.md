---
id: cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup
kind: corollary
title: "$\\Phi(P)=P^2$ for a finite $2$-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-quotient-abelian-iff-contains-commutator-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Lemma 3.6(iv)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

For every finite $2$-group $P$, $\Phi(P)=P^2$.

## Facts & Assumptions

**Given:** A finite $2$-group $P$.

[L1] For every finite $p$-group $P$, the subgroup $P^p$ is characteristic and $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[F1] The square subgroup is $P^2=\langle g^2:g\in P\rangle$ ([[def-pth-power-subgroup-of-a-group]]).

[L2] For $N\trianglelefteq G$, the quotient $G/N$ is abelian if and only if $G'\le N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $P^2$ is characteristic and hence normal. Every element of $P/P^2$ has square one by [F1]. In any group of exponent at most two, $(xy)^2=e$ gives $xy=(xy)^{-1}=y^{-1}x^{-1}=yx$, so $P/P^2$ is abelian. [given, L1, F1, algebra]

2.1 By [L2], step 1.1 gives $P'\le P^2$. Substituting in [L1] yields $\Phi(P)=P'P^2=P^2$, including $P=1$. [step 1.1, L1, F1, L2, algebra] ∎
