---
id: cor-borel-iff-analytic-and-coanalytic
kind: corollary
title: "Borel sets are exactly analytic and coanalytic sets"
status: published
origin: pipeline
deps: ["thm-disjoint-analytic-sets-have-borel-separators", "lem-analytic-countable-operations-and-borel-inclusion", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Corollary 4.14, printed p37"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, a subset of a Polish space is Borel if and only if it is analytic and coanalytic.

## Facts & Assumptions

[F1] [[lem-analytic-countable-operations-and-borel-inclusion]] makes every Borel set analytic and coanalytic.

[F2] [[thm-disjoint-analytic-sets-have-borel-separators]] separates disjoint analytic sets by a Borel set.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** A subset $A$ of Polish $X$, under ZFC.

1.1 If $A$ is Borel, F1, whose ZFC hypothesis is supplied by A1, says exactly that $A$ and its complement are analytic. This is analyticity and coanalyticity. [F1, A1]

2.1 Conversely if $A$ is analytic and coanalytic, both $A$ and $X\setminus A$ are analytic, and they are disjoint. By F2 and A1 take Borel $C$ with $A\subseteq C$ and $C\cap(X\setminus A)=\varnothing$. The second relation gives $C\subseteq A$, so $A=C$ is Borel. This includes $A=\varnothing$ and $A=X$ by the same inclusions. QED. [F2, A1]
