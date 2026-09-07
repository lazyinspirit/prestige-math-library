---
id: thm-recursion-on-well-founded-setlike-relations
kind: theorem
title: "Recursion on well-founded setlike relations"
status: draft
origin: pipeline
deps: ["lem-compatible-well-founded-recursion-attempts"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 Theorem 6.6 p.31."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

In ZF without Foundation, let $R$ be a well-founded setlike relation on a definable class $X$. For any definable rule assigning a unique set $G(x,h)$ to every $x\in X$ and every set function $h$ on $\operatorname{pred}_R(x)$, there is a unique definable function $F$ on $X$ satisfying

$$F(x)=G(x,F\restriction\operatorname{pred}_R(x)).$$

Every restriction of $F$ to a set subset of $X$ is a set function. Parameters in $R,X,G$ are allowed; the assertion is a schema, not quantification over class objects.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $R$ be well-founded and setlike on $X$, and let a definable rule $G(x,h)$ assign a unique set whenever $x\in X$ and $h$ is a set function on $\operatorname{pred}_R(x)$. An attempt is a set function $f$ on a predecessor-closed set $D\subseteq X$ satisfying $f(z)=G(z,f\restriction\operatorname{pred}_R(z))$ for every $z\in D$. Any two attempts agree on the intersection of their domains. If for every $yRx$ an attempt exists on the canonical cone $C(y)$, there is a unique attempt on $C(x)$. ([[lem-compatible-well-founded-recursion-attempts]])

## Proof

1.1 Use well-founded induction to prove existence of an attempt on each canonical cone $C(x)$. If attempts exist for all predecessors, the assembly assertion gives the attempt on $C(x)$, including the empty-predecessor case. Thus the property is progressive. [F1]

2.1 Define $F(x)=u$ if some set-domain attempt contains $(x,u)$. Existence follows from step 1.1 and uniqueness from compatibility of attempts. For each set $A\subseteq X$, Replacement applied to this functional definition makes $F\restriction A$ a set. A cone attempt agrees with $F$ at $x$ and all its predecessors, proving the recursion equation. [F1, step 1.1]

3.1 Any rival definable function obeying the equation agrees with $F$ at a point whenever it agrees at all predecessors. Well-founded induction proves equality everywhere. Every definition just used quantifies over set attempts, so it is a first-order definition with the original parameters. [F1, step 2.1] ∎

