---
id: thm-boone-special-word-equivalence
kind: theorem
title: "Boone special word equivalence"
status: draft
origin: pipeline
deps: ["lem-boone-positive-history-pushing", "lem-boone-commutator-extracts-an-auxiliary-history", "lem-boone-positive-history-reconstruction", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, p.431, Lemma 12.7; pp.432\u2013447, both proof directions"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Assume AC. For every special word $\Sigma=X^\#q_jY$, with $X,Y$ positive tape words, possibly empty,
$$W(\Sigma)=1\text{ in }\mathcal B\quad\Longleftrightarrow\quad\Sigma^*=Xq_jY=q\text{ in }\Gamma.$$

## Facts & Assumptions

**Given:** A positive special word $\Sigma$ in the stated domain.

[F1] A positive semigroup history $\Sigma^*=q$ gives $\Sigma=LqR$ and $W(\Sigma)=1$. ([[lem-boone-positive-history-pushing]])

[F2] $W(\Sigma)=1$ gives $L\Sigma R=q$ in the embedded $G_2$ for freely reduced auxiliary words. ([[lem-boone-commutator-extracts-an-auxiliary-history]])

[F3] Such an auxiliary equation for a special word gives $\Sigma^*=q$ in $\Gamma$. ([[lem-boone-positive-history-reconstruction]])

[A1] Assume AC for the HNN arguments in these facts. ([[def-axiom-of-choice]])

## Proof

1.1 Suppose $W(\Sigma)=1$. The given positive special spelling satisfies the domain of [F2], so it supplies auxiliary $L,R$ with equality in $G_2$. This is exactly the group and equation required by [F3], and that fact yields $\Sigma^*=q$ in $\Gamma$. [F2, F3, A1, given]

2.1 Conversely, suppose $\Sigma^*=q$. Equality in the presented semigroup is a finite symmetric history, and the special spelling has positive contexts. Thus [F1] applies and gives $W(\Sigma)=1$. The two implications include $X=Y=\varepsilon$; for $q_j=q$ they reduce to the defining commutation of $k$ and $q^{-1}tq$. This proves the stated equivalence on precisely the positive special-word domain. [F1, A1, step 1.1, given] ∎

## Source locator

Rotman, printed p.431, Lemma 12.7; proofs on pp.432–433 and pp.438–447. No equivalence for arbitrary signed tape words is asserted here.
