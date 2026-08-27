---
id: lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets
kind: lemma
title: "A $P_4$-free graph on $q$ vertices has a homogeneous set of size at least $\\sqrt q$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homogeneous-set-and-homogeneous-number, lem-components-are-anticomplete-and-anticomponents-complete, thm-every-nontrivial-graph-is-connected-or-anticonnected]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, §5"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

If $J$ is a $P_4$-free finite graph with $q$ vertices, then

$$\operatorname{hom}(J)\geq\sqrt q.$$

## Facts & Assumptions

**Given:** A $P_4$-free graph $J$ on $q$ vertices.

[L1] Every $P_4$-free graph with more than one vertex admits a partition $V(J)=A\sqcup B$ with $A,B\neq\varnothing$ such that $(A,B)$ is a pure pair (Chudnovsky--Scott--Seymour--Spirkl, "Erdos-Hajnal for graphs with no 5-hole", §5 Blockades, sentence immediately preceding Theorem 5.1).

## Proof

**Proof technique:** direct.

1.1 We prove the stronger inequality. [given]
$$\alpha(J)\omega(J)\ge q$$
by induction on $q$. The cases $q=0$ and $q=1$ are immediate. [given]

2.1 Assume $q\geq2$. By [L1], write $V(J)=A\sqcup B$ with $A,B\neq\varnothing$ and $(A,B)$ pure. Put. [step 1.1, L1]
$$a=\alpha(J[A]),\quad b=\alpha(J[B]),\quad c=\omega(J[A]),\quad d=\omega(J[B]).$$
The induction hypothesis gives $ac\ge|A|$ and $bd\ge|B|$. [step 1.1, L1]

3.1 If $(A,B)$ is complete, then. [step 2.1, algebra]
$\omega(J)=c+d$ and $\alpha(J)=\max\{a,b\}$, whence
$$\alpha(J)\omega(J)=\max\{a,b\}(c+d)\ge ac+bd\ge|A|+|B|=q.$$
If $(A,B)$ is anticomplete, then
$\alpha(J)=a+b$ and $\omega(J)=\max\{c,d\}$, and the same calculation gives
$\alpha(J)\omega(J)\ge ac+bd\ge q$. [step 2.1, algebra]

4.1 The induction closes. Since. [step 1.1, step 3.1, algebra]
$\max\{\alpha(J),\omega(J)\}\ge\sqrt{\alpha(J)\omega(J)}$, one obtains
$\operatorname{hom}(J)\ge\sqrt q$. [step 1.1, step 3.1, algebra] ∎
