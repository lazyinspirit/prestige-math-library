---
id: thm-h-kappa-is-a-transitive-set
kind: theorem
title: "H_kappa is a transitive subset of V_kappa"
status: draft
origin: pipeline
deps: ["lem-small-transitive-sets-have-small-ranks", "thm-membership-rank-and-hierarchy-levels"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 Theorem 41(1), Exercise 34(1)\u2013(3), p.101."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

In ZF, for every infinite initial ordinal $\kappa$, $H_\kappa$ is a transitive set and $H_\kappa\subseteq V_\kappa$. For infinite initial ordinals $\kappa\le\mu$, one has $H_\kappa\subseteq H_\mu$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, if a transitive set $T$ injects into an ordinal $\lambda<\kappa$, where $\kappa$ is an infinite initial ordinal, then $\operatorname{rank}(t)<\kappa$ for every $t\in T$. No regularity or Choice is assumed. ([[lem-small-transitive-sets-have-small-ranks]])

[F2] In ZF, for every set $x$ and ordinal $\alpha$, $$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$ Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$. ([[thm-membership-rank-and-hierarchy-levels]])

## Proof

1.1 For $x\in H_\kappa$, let $T=\operatorname{TC}(\{x\})$ and use its witnessing injection into $\lambda<\kappa$. This is a transitive set containing $x$ as an element, so the small-ranks lemma gives $\operatorname{rank}(x)<\kappa$. Rank characterization puts $x\in V_\kappa$. Separation inside $V_\kappa$ now proves that $H_\kappa$ is a set. [F1, F2]

2.1 If $y\in x\in H_\kappa$, the transitive set $\operatorname{TC}(\{x\})$ contains $y$, and hence contains $\operatorname{TC}(\{y\})$ by minimality. Restrict the same witnessing injection to this smaller closure. Thus $y\in H_\kappa$, proving transitivity. [F1, step 1.1]

3.1 If $\kappa\le\mu$, any witnessing ordinal $\lambda<\kappa$ also satisfies $\lambda<\mu$. The same injection proves $x\in H_\mu$. [F1] ∎

