---
id: "lem-conditional-expectation-process-is-a-martingale"
kind: "lemma"
title: "Conditional expectation process is a martingale"
deps: ["def-martingale-submartingale-and-supermartingale", "thm-tower-property-of-conditional-expectation", "def-conditional-expectation-as-an-ae-class", "thm-finite-and-countable-subadditivity-of-measures", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. For $X\in L^1(P)$ on a discrete filtered probability space, choose at each $n\ge0$ a real $\mathcal F_n$-measurable version $M_n$ of $E[X\mid\mathcal F_n]$. Then $M$ is a martingale.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F2] Conditional expectations on nested sigma-algebras satisfy the tower identity. [[thm-tower-property-of-conditional-expectation]].

[F3] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

[F4] A countable union of measurable null sets is null. [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Proof technique:** direct.

1.1 By conditional existence the set of real measurable integrable versions at every time is nonempty. AC selects one member for each $n\in\mathbb N_0$. Thus each $M_n$ is $\mathcal F_n$-measurable and integrable, so $M$ is an integrable adapted process. AC also covers the RN existence assumption. [given, F1, F3]

2.1 Since $\mathcal F_n\subseteq\mathcal F_{n+1}$, the tower identity gives $E[M_{n+1}\mid\mathcal F_n]=E[E[X\mid\mathcal F_{n+1}]\mid\mathcal F_n]=E[X\mid\mathcal F_n]=M_n$ a.s. for each $n\ge0$. This is the martingale condition [[def-martingale-submartingale-and-supermartingale]]. If representatives of these identities are specified, their measurable failure sets have probability zero; their countable union is measurable and null. This does not complete any $\mathcal F_n$ or alter its representatives. [F1, F2, F4, step 1.1] ∎
