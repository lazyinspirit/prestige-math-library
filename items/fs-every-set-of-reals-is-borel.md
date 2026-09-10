---
id: fs-every-set-of-reals-is-borel
kind: false-statement
title: "Every set of reals is Borel"
status: draft
origin: pipeline
deps: ["thm-choice-produces-an-undetermined-natural-number-game", "thm-borel-games-are-determined", "lem-sequence-spaces-continuously-inject-into-the-real-line", "lem-countable-borel-hierarchy-exhaustion-and-pullbacks", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Exercise 6.8, p55, and Borel determinacy Theorem 6.9, p56; the continuous injection transfer is proved locally. This is a derived false-statement witness, not an attributed source claim"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

False assertion: every subset of $\mathbb R$ is Borel.

In ZFC, take an undetermined payoff $A\subseteq\mathbb N^{\mathbb N}$ and the continuous injection $e:\mathbb N^{\mathbb N}\to\mathbb R$ supplied below. The set e[A] is a witness that the assertion fails.

## Facts & Assumptions

[F1] [[thm-choice-produces-an-undetermined-natural-number-game]] supplies A with neither player winning under AC.

[F2] [[lem-sequence-spaces-continuously-inject-into-the-real-line]] gives the continuous injection e in ZF.

[F3] [[lem-countable-borel-hierarchy-exhaustion-and-pullbacks]] makes continuous inverse images of Borel sets Borel in ZFC.

[F4] [[thm-borel-games-are-determined]] determines every Borel natural-number payoff in ZFC.

[A1] Assume [[def-axiom-of-choice]].

## Refutation

**Given:** Work in ZFC throughout this counterexample.

1.1 F1 with A1 supplies A and F2 supplies e. Suppose e[A] were Borel in $\mathbb R$. By continuity of e, F3 with A1 would make $e^{-1}[e[A]]$ Borel in Baire space. This preimage equals A: if e(x)=e(a) for some a in A, injectivity gives x=a; conversely each a in A maps into e[A]. [F1, F2, F3, A1]

2.1 Then F4 with A1 would give a winning strategy for one player for payoff A, contradicting its defining property from F1. Hence e[A] is not Borel and is the required subset of the real line witnessing the failed assertion. QED. [F1, F4, A1, step 1.1]
