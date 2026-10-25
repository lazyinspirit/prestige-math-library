---
id: prop-ranks-of-ordinals-and-hierarchy-stages
kind: proposition
title: "Ranks of ordinals and hierarchy stages"
status: published
origin: pipeline
deps: ["thm-membership-rank-and-hierarchy-levels", "prop-cumulative-hierarchy-transitivity-and-growth"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.4 p.34."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

In ZF, for every ordinal $\alpha$, $\operatorname{rank}(\alpha)=\alpha$ and $\operatorname{rank}(V_\alpha)=\alpha$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every set $x$ and ordinal $\alpha$, $$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$ Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$. ([[thm-membership-rank-and-hierarchy-levels]])

[F2] In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$. ([[prop-cumulative-hierarchy-transitivity-and-growth]])

## Proof

1.1 By F2, $\alpha\in V_{\alpha+1}\setminus V_\alpha$. The final equivalence in F1 therefore gives $\operatorname{rank}(\alpha)=\alpha$, including $\alpha=0$. [F1, F2]

2.1 By F2, $V_\alpha\in V_{\alpha+1}\setminus V_\alpha$. Applying the same equivalence in F1 gives $\operatorname{rank}(V_\alpha)=\alpha$, including $V_0=\varnothing$. [F1, F2] ∎
