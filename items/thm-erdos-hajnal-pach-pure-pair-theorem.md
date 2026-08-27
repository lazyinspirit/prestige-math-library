---
id: thm-erdos-hajnal-pach-pure-pair-theorem
kind: theorem
title: "Every $H$-free graph has a polynomial-size pure pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture—A Survey, Theorem 3.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Statement

For every finite graph $H$, there exists a real constant $c_H>0$ such that
every finite $H$-free graph $G$ with $|V(G)|\ge 2$ contains disjoint sets
$A,B\subseteq V(G)$ satisfying

$$|A|\ge \lfloor |V(G)|^{c_H}\rfloor,\qquad |B|\ge \lfloor |V(G)|^{c_H}\rfloor,$$

and such that $(A,B)$ is a pure pair.

## Facts & Assumptions

**Given:** A finite graph $H$ and a finite $H$-free graph $G$ with $|V(G)|\ge 2$.

[F1] The Erdős-Hajnal-Pach theorem gives a real constant $\delta_H>0$ such that every finite $H$-free graph on at least two vertices contains disjoint sets $A,B\subseteq V(G)$ with $$|A|\ge |V(G)|^{\delta_H},\qquad |B|\ge |V(G)|^{\delta_H},$$ and with $A$ complete or anticomplete to $B$.

[L1] A pair of disjoint vertex sets is pure exactly when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose $\delta_H>0$ and disjoint sets $A,B\subseteq V(G)$ with $$|A|\ge |V(G)|^{\delta_H},\qquad |B|\ge |V(G)|^{\delta_H},$$ such that $A$ is complete or anticomplete to $B$. Set $c_H:=\delta_H$. Then $|A|$ and $|B|$ are certainly at least $\lfloor |V(G)|^{c_H}\rfloor$. [F1, choose, algebra]

2.1 By [L1], the pair $(A,B)$ is pure. Therefore the constant $c_H$ has the required property. [step 1.1, L1] ∎
