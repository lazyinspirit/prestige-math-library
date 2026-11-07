---
id: alg-gowers-density-increment-for-long-progressions
kind: algorithm
title: "Iterate uniformity and approximate-homomorphism density increments"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-finite-density-k-term-arithmetic-progression
  - def-relative-density-in-a-finite-group
  - lem-gowers-fourier-density-increment
  - lem-gowers-freiman-structure-for-approximate-homomorphisms
  - thm-generalized-von-neumann-for-k-term-progressions
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§§3, 9–18; Theorem 18.1 gives the partition density increment used in Theorem 18.2"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 11, §§11.1–11.3 and §11.6, higher-order uniformity and the finite hypergraph route"
verification:
  precheck: n/a
---

## Definition

Fix $k\ge3$, an initial interval $[N_0]$, a set $A_0\subseteq[N_0]$ of density $\rho_0=|A_0|/N_0\ge\delta>0$, and the following schedule data: a number $\varepsilon_*>0$, a function $\varepsilon:[\delta,1]\to[\varepsilon_*,1]$, and an integer-valued function $L(k,\rho,N)$ with $1\le L(k,\rho,N)\le N$. The procedure returns either a proper $k$-term progression or a stalled state.

1. Set the current state to $(N_t,A_t)=(N_0,A_0)$.
2. Enumerate all proper $k$-term arithmetic progressions in $A_t$ by increasing start, then increasing positive difference. If one exists, return the first one and halt.
3. Enumerate all arithmetic progressions $P=\{a,a+d,\ldots,a+(m-1)d\}\subseteq[N_t]$ with $m\ge L(k,\rho_t,N_t)$, where $\rho_t=|A_t|/N_t$, using $d=1$ for singletons and $1\le d\le N_t$ otherwise, by increasing $(m,a,d)$. These conventions enumerate finitely many sets and cover every admissible progression. If a progression satisfies $|A_t\cap P|/|P|\ge\rho_t+\varepsilon(\rho_t)$, choose the first such $P$, put $N_{t+1}=|P|$, and set $A_{t+1}=\{j+1:0\le j<m,\ a+jd\in A_t\cap P\}$. Return to step 2.
4. If no progression qualifies in step 3, return the current state marked stalled.

Every successful increment raises density by at least $\varepsilon_*$. Since density is at most one, the procedure makes at most $\lceil(1-\rho_0)/\varepsilon_*\rceil+1$ increments and terminates. The procedure is a finite driver; a Gowers-specific application must supply schedules for which the stalled outcome is impossible under its density and length hypotheses.

## Definition references

[[def-finite-density-k-term-arithmetic-progression]]

[[def-relative-density-in-a-finite-group]]

[Gowers, *A new proof of Szemerédi’s theorem*, §§3 and 18](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 11](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Remarks

This item defines the finite driver and its stall output. The proof-specific uniformity and approximate-homomorphism transformations that would instantiate the schedules and rule out stalling are not established by this definition; that local obligation is escalated in the batch notes.
