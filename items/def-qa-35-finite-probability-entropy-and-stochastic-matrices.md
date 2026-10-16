---
id: def-qa-35-finite-probability-entropy-and-stochastic-matrices
kind: definition
title: "Finite distributions, entropy, divergence, and stochastic matrices"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: ["def-finite-probability-space-and-event"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§5.1.1, Definitions 5.1 and 5.3, printed pp.250–252 (PDF pp.258–260); classical entropy and relative entropy, converted here from base-2 logarithms to natural logarithms."
---

## Definition

For a finite nonempty set identified with $[k]=\{1,\ldots,k\}$, a **probability vector** is $p=(p_i)_{i=1}^k$ with $p_i\ge0$ and $\sum_i p_i=1$; it is the outcome-weight vector of a finite probability space ([[def-finite-probability-space-and-event]]). Its Shannon entropy in natural units is
$$H(p):=-\sum_{i=1}^k p_i\ln p_i,$$
with $0\ln0:=0$. For probability vectors $p,q$ on the same set $[k]$, the relative entropy is
$$D(p\|q):=\sum_{i:p_i>0}p_i\ln(p_i/q_i),$$
with value $+\infty$ if $p_i>0=q_i$ for some $i$. A matrix $A\in[0,1]^{N\times m}$ is **row-stochastic** when each row sums to one. For a probability row vector $p$ on $[m]$ and a row vector $X\in[0,1]^m$, the dot product $pX^{\mathsf T}=\sum_{i=1}^m p_iX_i$ is the acceptance probability under distribution $p$.

These definitions use finite sets only; entropy is between $0$ and $\ln k$, as proved where needed below.
