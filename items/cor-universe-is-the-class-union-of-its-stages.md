---
id: cor-universe-is-the-class-union-of-its-stages
kind: corollary
title: "The universe is the class union of its stages"
status: draft
origin: pipeline
deps: ["thm-membership-rank-and-hierarchy-levels"]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 Theorem 40 p.100."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

In ZF every set $x$ belongs to $V_{\operatorname{rank}(x)+1}$. Consequently $V=\bigcup_{\alpha\in\operatorname{Ord}}V_\alpha$ in the class sense: every set lies in a stage. This is not a union indexed by a set of all ordinals.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every set $x$ and ordinal $\alpha$, $$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$ Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$. ([[thm-membership-rank-and-hierarchy-levels]])

## Proof

1.1 For $\rho=\operatorname{rank}(x)$, the ordinal inequality $\rho<\rho+1$ and the membership characterization give $x\in V_{\rho+1}$. [F1]

2.1 Every member of a stage is a set, and step 1.1 gives a stage containing every set. Thus the two class descriptions agree. Neither statement asserts that their collection is a set. [step 1.1] ∎

