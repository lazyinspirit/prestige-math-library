---
id: def-finite-discrete-memoryless-network-and-code
kind: definition
title: Finite discrete memoryless networks and causal codes
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
aliases: []
axiom_use: No choice axiom is used; all alphabets and message sets in this definition are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 19, discrete memoryless network model and causal encoders, printed lecture pages 3–5.
---

## Definition

A **finite discrete memoryless network (DMN)** has a node set $[N]=\{1,\ldots,N\}$ for an integer $N\ge1$, finite nonempty input alphabets $\mathcal X_k$ and output alphabets $\mathcal Y_k$, and one transition probability vector $W(y_1,\ldots,y_N\mid x_1,\ldots,x_N)$ for each input tuple. At each use, conditional on the current input tuple, the output tuple is drawn from this vector independently of earlier uses.

Node $k$ may have an independent uniform message $M_k$ in a finite nonempty set $\mathcal M_k$ and a destination set $D_k\subseteq[N]$. A length-$n$ **causal code** consists of encoders $X_{k,i}=f_{k,i}(M_k,Y_k^{i-1})$ and, for each destination $d\in D_k$, a decoder $\widehat M_{kd}=g_{kd}(Y_d^n,M_d)$; here $Y_k^{i-1}=(Y_{k,1},\ldots,Y_{k,i-1})$, with the empty tuple at $i=1$. The average error is the probability that any required estimate differs from its message. A rate tuple is achievable if a sequence of such codes has error tending to zero and message-set rates tending to at least that tuple; the capacity region is the closure of achievable tuples.
