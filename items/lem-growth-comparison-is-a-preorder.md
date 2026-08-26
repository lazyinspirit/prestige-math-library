---
id: lem-growth-comparison-is-a-preorder
kind: lemma
title: "Growth comparison is a preorder"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-growth-comparison-and-growth-type]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

On nondecreasing functions $\mathbb N \to \mathbb N$, the relation
$\preccurlyeq$ of [[def-growth-comparison-and-growth-type]] is reflexive and
transitive. Consequently $\simeq$ is an equivalence relation.

## Facts & Assumptions

**Given:** Nondecreasing functions $f,g,h : \mathbb N \to \mathbb N$.

[L1] The relation $f \preccurlyeq g$ means that some natural number $C \ge 1$ satisfies $f(n) \le C\, g(Cn+C) + C$ for every $n \in \mathbb N$, and $f \simeq g$ means both $f \preccurlyeq g$ and $g \preccurlyeq f$ ([[def-growth-comparison-and-growth-type]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds with $C=1$, since $f(n) \le f(n+1)+1$ for every $n$ and $f$ is nondecreasing. So $f \preccurlyeq f$. [L1, given]

1.2 Suppose $f \preccurlyeq g$ via $C_1$ and $g \preccurlyeq h$ via $C_2$. Put $C := C_1C_2 + C_1 + C_2$, which is again a natural number with $C \ge 1$. Then $f(n) \le C_1 g(C_1n+C_1)+C_1 \le C_1C_2\, h\bigl(C_2(C_1n+C_1)+C_2\bigr) + C_1C_2 + C_1 + C_2$, and the argument of $h$ is at most $Cn+C$. Since $h$ is nondecreasing and $C \ge C_1C_2$, this gives $f(n) \le C\, h(Cn+C)+C$ for every $n$. Hence $f \preccurlyeq h$. [L1, given, algebra]

2.1 Steps 1.1 and 1.2 make $\preccurlyeq$ a preorder. The relation $\simeq$ is therefore an equivalence relation by definition. [L1, step 1.1, step 1.2] ∎
