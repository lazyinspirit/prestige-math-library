---
id: def-synchronous-trees-and-projection-bodies
kind: definition
title: "Synchronous trees and projection bodies"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets", "def-baire-sequence-space"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 5.1"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Work in ZF, using [[def-trees-and-bodies-on-discrete-alphabets]] and [[def-baire-sequence-space]]. A **synchronous tree** is

$$T\subseteq\bigcup_{n\in\mathbb N}(\mathbb N^n\times\mathbb N^n)$$

such that $(s\upharpoonright m,t\upharpoonright m)\in T$ whenever $(s,t)\in T$ and $m\leq |s|=|t|$. Its body and projection body are

$$[T]=\{(x,y)\in\mathcal N\times\mathcal N:(\forall n)\ (x\upharpoonright n,y\upharpoonright n)\in T\},\qquad p[T]=\{x\in\mathcal N:(\exists y\in\mathcal N)\ (x,y)\in[T]\}.$$

Both coordinates are restricted to the same length, including length zero. For $x\in\mathcal N$ its **section tree** is $T_x=\{t:(x\upharpoonright |t|,t)\in T\}$. Restricting a pair proves that $T_x$ is a tree on $\mathbb N$. Direct substitution gives $y\in[T_x]$ exactly when $(x,y)\in[T]$. Thus $x\in p[T]$ exactly when $[T_x]\ne\varnothing$. This is an existential equivalence, not a selection of branches. An empty tree has empty body and projection; a root-only synchronous tree has the same empty body and projection.
