---
id: lem-xd-uniformized-matrix-is-stochastic
kind: lemma
title: "The finite uniformized matrix is column stochastic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-xd-finite-column-generator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.4, equations (3.24)–(3.27), PDF pp. 14–15; transpose the row-stochastic matrix to this column convention."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equation (2.5), printed pp. 044104-2–044104-3; nonnegative off-diagonal rates and conservative columns."
---

## Statement

Let $Q$ be a finite column generator and let $\nu\ge\max_{j<n}r_j$. If $\nu>0$, then

$$P:=I+Q/\nu$$

has nonnegative entries and every column sums to one. If $\nu=0$, then $Q=0$.

## Facts & Assumptions

**Given:** A finite column generator $Q=(q_{ij})_{i,j<n}$, its exit rates $r_j$, and $\nu\ge\max_jr_j$.

[F1] [[def-xd-finite-column-generator]]: $q_{ij}\ge0$ for $i\ne j$, $r_j=-q_{jj}=\sum_{i\ne j}q_{ij}$, and $\sum_iq_{ij}=0$ for every column $j$.

## Proof


**Proof technique:** direct.

1.1 Suppose $\nu>0$. For $i\ne j$, $P_{ij}=q_{ij}/\nu\ge0$ by [F1]. For a diagonal entry, $P_{jj}=1-r_j/\nu\ge0$ because $r_j\le\nu$. Thus every entry is nonnegative. [given, F1, algebra]

2.1 For each source column $j$, [F1] gives $\sum_iP_{ij}=\sum_i(\delta_{ij}+q_{ij}/\nu)=1+\nu^{-1}\sum_iq_{ij}=1$. Hence $P$ is column stochastic. [F1, step 1.1, algebra]

3.1 If $\nu=0$, the bound $0\le r_j\le\nu$ gives $r_j=0$ for every $j$. Each finite sum $r_j=\sum_{i\ne j}q_{ij}$ consists of nonnegative terms, so each off-diagonal entry in column $j$ is zero; the column-sum condition then gives $q_{jj}=0$. Therefore $Q=0$. [given, F1, algebra] ∎
