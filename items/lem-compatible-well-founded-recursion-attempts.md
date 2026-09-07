---
id: lem-compatible-well-founded-recursion-attempts
kind: lemma
title: "Compatible recursion attempts"
status: published
origin: pipeline
deps: ["thm-induction-on-well-founded-relations", "lem-finite-predecessor-closure-is-a-set"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 Theorem 6.6 proof p.31."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

Let $R$ be well-founded and setlike on $X$, and let a definable rule $G(x,h)$ assign a unique set whenever $x\in X$ and $h$ is a set function on $\operatorname{pred}_R(x)$. An attempt is a set function $f$ on a predecessor-closed set $D\subseteq X$ satisfying $f(z)=G(z,f\restriction\operatorname{pred}_R(z))$ for every $z\in D$.

Any two attempts agree on the intersection of their domains. If for every $yRx$ an attempt exists on the canonical cone $C(y)$, there is a unique attempt on $C(x)$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $R$ be well-founded and setlike on a definable class $X$. If a definable property $P$ is progressive, meaning that for every $x\in X$, $[\forall yRx\ P(y)]\Rightarrow P(x)$, then $P(x)$ holds for all $x\in X$. Set parameters in $P$ are allowed. This holds without Foundation. ([[thm-induction-on-well-founded-relations]])

[F2] For every setlike relation $R$ on a definable class $X$ and $x\in X$, there is a least predecessor-closed set $C(x)\subseteq X$ containing $x$. It consists exactly of nodes reachable from $x$ by a finite sequence of predecessor steps. Well-foundedness is not needed. ([[lem-finite-predecessor-closure-is-a-set]])

## Proof

1.1 The intersection of two attempt domains is predecessor-closed. At a point of the intersection, agreement at all predecessors makes their restricted functions equal; functionality of $G$ then makes their values equal. Well-founded induction on this intersection proves agreement throughout. [F1]

2.1 For each $yRx$, the attempt on $C(y)$ is unique by step 1.1. Since the predecessor set is a set, Replacement collects these uniquely specified attempts. Their union $h$ is a function on $D=\bigcup_{yRx}C(y)$ by agreement on overlaps. Its domain is predecessor-closed and it satisfies the attempt equation, because each point and all its predecessors lie in a constituent cone. [F2, step 1.1]

3.1 There is no finite R-cycle: the finitely many nodes of such a cycle would form a nonempty set with no minimal member. Thus $x\notin D$. The finite-path description gives $C(x)=D\cup\{x\}$. Extend $h$ by the single pair $(x,G(x,h\restriction\operatorname{pred}_R(x)))$. The extension obeys the rule at $x$, and it does not alter any predecessor restriction of a point in $D$. It is an attempt on $C(x)$, unique by step 1.1. If the predecessor set is empty, the same construction starts with $h=\varnothing$. [F2, step 1.1, step 2.1, given] ∎
