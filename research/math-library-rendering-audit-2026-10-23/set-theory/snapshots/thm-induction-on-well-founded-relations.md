---
id: thm-induction-on-well-founded-relations
kind: theorem
title: "Induction on well-founded setlike relations"
status: published
origin: pipeline
deps: ["lem-finite-predecessor-closure-is-a-set"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 Lemma 6.2 and Theorem 6.5 p.30."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

Let $R$ be well-founded and setlike on a definable class $X$. If a definable property $P$ is progressive, meaning that for every $x\in X$, $[\forall yRx\ P(y)]\Rightarrow P(x)$, then $P(x)$ holds for all $x\in X$. Set parameters in $P$ are allowed. This holds without Foundation.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For every setlike relation $R$ on a definable class $X$ and $x\in X$, there is a least predecessor-closed set $C(x)\subseteq X$ containing $x$. It consists exactly of nodes reachable from $x$ by a finite sequence of predecessor steps. Well-foundedness is not needed. ([[lem-finite-predecessor-closure-is-a-set]])

## Proof

1.1 If there is a counterexample $x$, take its predecessor-closed set $C(x)$ and separate the nonempty set $B=\{y\in C(x):\neg P(y)\}$. Well-foundedness gives a minimal $b\in B$. [F1, given]

2.1 Every predecessor of $b$ belongs to $C(x)$, and none belongs to $B$ by minimality. Hence all satisfy $P$. Progressiveness gives $P(b)$, contrary to $b\in B$. Therefore no counterexample exists. [step 1.1, given] ∎
