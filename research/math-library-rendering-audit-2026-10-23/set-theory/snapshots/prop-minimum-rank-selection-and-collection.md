---
id: prop-minimum-rank-selection-and-collection
kind: proposition
title: "Minimum-rank selection and Collection"
status: published
origin: pipeline
deps: ["thm-membership-rank-and-hierarchy-levels"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 section 7 Scott trick and Exercise 7.8 p.35."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

In ZF every nonempty definable class $C$ has a least member-rank $\alpha$, and $\{x\in C:\operatorname{rank}(x)=\alpha\}$ is a nonempty set. Replacement yields the Collection schema: if $\forall x\in a\ \exists y\ \phi(x,y)$, a set $b$ exists with $\forall x\in a\ \exists y\in b\ \phi(x,y)$. Conversely, Separation and Collection yield Replacement for functional formulas.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every set $x$ and ordinal $\alpha$, $$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$ Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$. ([[thm-membership-rank-and-hierarchy-levels]])

## Proof

1.1 Instantiate one $c\in C$ and minimize the ranks attained in $C$ among ordinals at most $\operatorname{rank}(c)$. Separation on $\operatorname{rank}(c)+1$ and ordinal well-ordering yield a least such $\alpha$, which is globally least. All members of rank $\alpha$ lie in $V_{\alpha+1}$, so Separation inside that stage forms the asserted nonempty set. [F1]

2.1 Given the Collection premise, for each $x\in a$ the class of witnesses has a unique least rank $\alpha_x$ by step 1.1. Replacement collects these ordinals; set $\gamma=\sup\{\alpha_x+1:x\in a\}$. The stage $V_\gamma$ contains at least one witness for each $x$, because the witnesses of its minimum rank lie in $V_{\alpha_x+1}\subseteq V_\gamma$. Thus $b=V_\gamma$ suffices. For $a=\varnothing$, take $\gamma=0$. [F1, step 1.1]

3.1 Conversely assume Separation and Collection, and let $\phi$ be functional on the set $a$. Collection supplies a set $b$ containing a witness for each $x\in a$. Separation gives $\{y\in b:\exists x\in a\ \phi(x,y)\}$. Uniqueness ensures every value of $\phi$ occurs in this set and that every member is such a value, which is the Replacement conclusion. This direction does not use rank or a prior application of Replacement. [given] ∎
