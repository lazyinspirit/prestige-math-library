---
id: lem-qc-local-stochastic-fault-witness-bound
kind: lemma
title: "Local-Stochastic Fault-Witness Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-local-stochastic-fault-set-law
dependency_level: 1
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "P. Aliferis, D. Gottesman, J. Preskill, Accuracy Threshold for Postselected Quantum Computation"
      url: "https://arxiv.org/pdf/quant-ph/0703264"
---

## Statement

Let $r\ge0$ and let a finite rooted rectangle hierarchy have every root-to-leaf path of exactly $r$ edges. Each leaf is one elementary location; every internal node has at most $a$ children, and the elementary-location sets of distinct children are disjoint. Let $a,q$ be integers with $1\le q<a$. A leaf is bad exactly when its location is faulty, and an internal node is bad exactly when at least $q+1$ children are bad. Under an $\eta$-local-stochastic fault-set law, with $A=\binom{a}{q+1}$ and $A\eta^q<1$, the probability that the root is bad is at most
$$
A^{-1/q}\bigl(A^{1/q}\eta\bigr)^{(q+1)^r}.
$$
No independence assumption is used.

## Facts & Assumptions


**Given:** A finite location set, an $\eta$-local-stochastic random fault set, an integer $r\ge0$, and the full-depth rooted hierarchy and recursive badness predicate in the statement. Prove the probability bound.

[F1] [[def-qc-local-stochastic-fault-set-law]]: For every specified set $S$ of elementary locations, the probability that all of $S$ fault is at most $\eta^{|S|}$.

## Proof

1.1 For a leaf $v$, its single location is a witness set $S$ whose fault forces $v$ to be bad. At depth zero there is one such witness, its size is $1=(q+1)^0$, and [F1] bounds the bad probability by $\eta$. [given, F1]

2.1 Suppose a depth-$(r+1)$ node is bad. It has a $(q+1)$-subset $J$ of bad children. For each child $j\in J$, select one witness set $S_j$ that forces that child to be bad. The child location sets are disjoint, so $S=\bigcup_{j\in J}S_j$ has size $(q+1)(q+1)^r=(q+1)^{r+1}$ and its occurrence forces the parent to be bad. There are at most $A w_r^{q+1}$ such witness sets if $w_r$ bounds their number at depth $r$. Only finite selection from finite sets is used. [given, step 1.1, construct]

3.1 The witness-count recurrence $w_0=1$, $w_{r+1}\le A w_r^{q+1}$ gives $w_r\le A^{((q+1)^r-1)/q}$. This follows by induction: it is equality at $r=0$, and substituting the bound at level $r$ gives exponent $1+(q+1)((q+1)^r-1)/q=((q+1)^{r+1}-1)/q$. [step 2.1, algebra]

4.1 Each fixed witness set has probability at most $\eta^{(q+1)^r}$ by [F1]. The union bound over all witnesses gives $\mathbb P(\text{root bad})\le A^{((q+1)^r-1)/q}\eta^{(q+1)^r}=A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}$. Since $A\eta^q<1$, the base $A^{1/q}\eta$ is below one, so the bound tends to zero. [F1, step 3.1, algebra] ∎

