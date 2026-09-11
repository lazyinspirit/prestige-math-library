---
id: "def-constructible-hierarchy-and-constructible-rank"
kind: "definition"
title: "The constructible hierarchy and constructible rank"
deps: ["def-definable-subsets-of-a-membership-structure", "thm-transfinite-recursion"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Definitions 5.2,5.4 p14; Marks Definition 20.2 p86
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

In ZF define

$$L_0=\varnothing,\qquad L_{\alpha+1}=\operatorname{Def}(L_\alpha),\qquad L_\lambda=\bigcup_{\beta<\lambda}L_\beta\quad(\lambda\text{ a nonzero limit}).$$

The operation Def is [[def-definable-subsets-of-a-membership-structure]]. For each ordinal $\theta$, apply [[thm-transfinite-recursion]] on $\theta+1$: an empty history gives the empty set, a successor-length history gives Def of its last value, and a nonzero limit-length history gives the union of its range. Each operation returns a unique set. Uniqueness on the shorter interval proves agreement of any two histories on their overlap. Thus $L_\alpha$ is uniformly definable from $\alpha$, independently of the interval chosen. Replacement supplies the set of earlier levels at a limit. No choice is used.

Write $x\in L$ for $\exists\alpha\in\operatorname{Ord}\ (x\in L_\alpha)$. This defines a class, not a set union over all ordinals. For $x\in L$, the first stage containing $x$ is neither zero nor a limit (a member of a union already occurs in a summand). It is uniquely $\alpha+1$. Define the **constructible rank** $\rho_L(x)=\alpha$. This is a partial definable class function with domain $L$.
