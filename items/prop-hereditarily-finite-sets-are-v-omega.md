---
id: prop-hereditarily-finite-sets-are-v-omega
kind: proposition
title: "H_omega equals V_omega"
status: published
origin: pipeline
deps: ["thm-h-kappa-is-a-transitive-set", "def-cumulative-hierarchy-stages"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 Theorem 42, omega case pp.101\u2013102."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

In ZF, $H_\omega=V_\omega$. These are exactly the sets whose root-inclusive transitive closure is finite, called hereditarily finite sets.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every infinite initial ordinal $\kappa$, $H_\kappa$ is a transitive set and $H_\kappa\subseteq V_\kappa$. For infinite initial ordinals $\kappa\le\mu$, one has $H_\kappa\subseteq H_\mu$. ([[thm-h-kappa-is-a-transitive-set]])

[F2] In ZF without Foundation define the cumulative hierarchy by $$V_0=\varnothing,\qquad V_{\alpha+1}=\mathcal P(V_\alpha),\qquad V_\lambda=\bigcup_{\beta<\lambda}V_\beta\quad(\lambda\text{ a nonzero limit ordinal}).$$ For each ordinal $\theta$, use the set well-order recursion schema on $\theta+1$. On histories of domain $0$ return $\varnothing$; on domain $\beta+1$ return the power set of the last value; on nonzero limit domains return the union of the range. Each is a unique set. Recursions on different ordinal intervals agree on overlaps by the uniqueness clause applied to the smaller interval. Hence the definition of $V_\alpha$ as the value at $\alpha$ is uniform and independent of the chosen interval. Power Set is used at successors and Replacement and Union at limits. The notation $\langle V_\alpha:\alpha\in\operatorname{Ord}\rangle$ denotes a definable class function, not a set sequence. Conventions and prerequisites: thm-transfinite-recursion, lem-ordinal-basics, def-limit-ordinal. ([[def-cumulative-hierarchy-stages]])

## Proof

1.1 The general bound gives $H_\omega\subseteq V_\omega$. The definition of $H_\omega$ says its root closure injects into a finite ordinal, exactly finiteness: a subset of a finite ordinal can be enumerated in increasing order, and a finite set injects into its size. [F1]

1.2 Every $V_n$ is finite by natural induction. $V_0$ is empty. If $V_n$ has $m$ elements, membership bits relative to a finite enumeration biject its power set with the length-$m$ binary words. Those form a finite set: for zero length there is one word, and appending either bit doubles the previous finite number. Thus $V_{n+1}$ is finite. [F2]

2.1 If $x\in V_\omega$, choose $n<\omega$ with $x\in V_n$. The finite transitive set $V_n$ contains $x$ as an element, hence contains $\operatorname{TC}(\{x\})$ by minimality. That closure is finite, so $x\in H_\omega$. Together with step 1.1 this proves equality. [F1, F2, step 1.2] ∎
