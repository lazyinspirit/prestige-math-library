---
id: alg-qa-rational-reconstruction-from-phase-sample
kind: algorithm
title: Rational reconstruction from a phase sample
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-rational-phase-reconstruction
  - def-convergents-of-regular-continued-fraction
  - thm-rational-continued-fraction-termination
  - lem-qa-rational-reconstruction-candidate-uniqueness
  - alg-qa-quantum-phase-estimation
justified_by:
  - thm-qa-rational-reconstruction-bit-cost
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; the routine is a finite Euclidean computation."
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; reconstructing a period from a phase outcome"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; continued-fraction postprocessing"
---

## Definition

**Input.** Integers $N\ge1$, $Q>4N^2$, and $y\in\{0,\ldots,Q-1\}$, with $Q=2^m$ and $y$ the label from [[alg-qa-quantum-phase-estimation]] when this routine is called from QPE.

**Output.** A reduced fraction $p/q$ with $1\le q\le N$, or FAIL.

**Instructions.** Set $u:=y$, $v:=Q$, and $j:=0$. Repeatedly divide $u$ by the positive integer $v$, obtaining the unique quotient $a_j$ and remainder $r_j$ with $u=a_jv+r_j$ and $0\le r_j<v$. Append $a_j$; if $r_j=0$, stop, and otherwise set $(u,v):=(v,r_j)$, increment $j$, and repeat. For $y=0$ this immediately gives the one-digit expansion $[0]$; for every other input, [[thm-rational-continued-fraction-termination]] gives termination and the resulting normalized finite expansion is the one in [[def-qa-rational-phase-reconstruction]]. Starting from $p_{-2}=0,p_{-1}=1,q_{-2}=1,q_{-1}=0$, process the digits in order using $p_j=a_jp_{j-1}+p_{j-2}$ and $q_j=a_jq_{j-1}+q_{j-2}$; this lists all convergents including the terminal one by [[def-convergents-of-regular-continued-fraction]]. For each convergent, reject it if $q>N$; otherwise compute $2|yq-pQ|$ exactly and accept it precisely when this integer is at most $q$. Return the first accepted candidate, or FAIL if none exists. The uniqueness result `lem-qa-rational-reconstruction-candidate-uniqueness` shows there cannot be two. The algorithm makes no floating-point comparison. Its deterministic bit bound is proved separately in `thm-qa-rational-reconstruction-bit-cost`, which also establishes that these instructions terminate.
