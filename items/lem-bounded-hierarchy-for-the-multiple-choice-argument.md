---
id: lem-bounded-hierarchy-for-the-multiple-choice-argument
kind: lemma
title: "A bounded hierarchy for the multiple-choice argument"
status: draft
origin: pipeline
deps: ["thm-transfinite-recursion", "def-axiom-of-foundation"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 9.1(b), p.134; bounded hierarchy used in the proof"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "Caicedo, Some choiceless results (5), powersets-of-ordinals theorem and hierarchy proof"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

In ZF, define $V_0=\varnothing$, $V_{\beta+1}=\mathcal P(V_\beta)$ and $V_\lambda=\bigcup_{\beta<\lambda}V_\beta$ for nonzero limit $\lambda$. These stages exist, are transitive and increasing, and for every set $A$ there is a limit ordinal $\theta$ such that $A\subseteq V_\theta$.

## Facts & Assumptions

[F1] [[thm-transfinite-recursion]]: The recursion schema applies on each ordinal with uniquely determined set values.

[F2] [[def-axiom-of-foundation]]: Every nonempty set has a member disjoint from that set.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Transfinite recursion defines the stages on every ordinal, and uniqueness makes overlapping constructions agree. Inductively, transitivity of $V_\beta$ implies $V_\beta\subseteq\mathcal P(V_\beta)$; if $x\in\mathcal P(V_\beta)$ and $y\in x$, then $y\in V_\beta\subseteq\mathcal P(V_\beta)$. A limit union of increasing transitive sets is transitive and contains the previous stages. The empty base is transitive. [F1]

1.2 For any $x$, construct $T_0=\{x\}$, $T_{n+1}=T_n\cup\bigcup T_n$, and $T=\bigcup_{n<\omega}T_n$, a transitive set containing $x$. This is a set by recursion and Replacement (omega recursion is a case of the same schema). Let $B$ be those members of $T$ that belong to no $V_\beta$. [F1]

2.1 If $B$ were nonempty, Foundation would give $b\in B$ with $b\cap B=\varnothing$. Every $y\in b$ lies in $T\setminus B$ and hence in a stage. For each such $y$ take its least stage index; Replacement bounds all these indices by an ordinal $\gamma$. Then $b\subseteq V_\gamma$ and $b\in V_{\gamma+1}$, a contradiction. This also handles $b=\varnothing$, with bound zero. Thus every set belongs to some stage. [F2, step 1.1, step 1.2]

3.1 Apply this to $A$. If $A\in V_\beta$, transitivity gives $A\subseteq V_\beta$. Any limit $\theta>\beta$, for example $\beta+\omega$, is the required bound. The same holds for the empty $A$. [step 1.1, step 2.1] ∎
