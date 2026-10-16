---
id: alg-qa-modular-order-finding
kind: algorithm
title: Modular order finding with rational reconstruction
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-quantum-phase-estimation
  - thm-qa-phase-estimation-superposition-law
  - def-qc-dirac-notation-conversion
  - alg-qa-rational-reconstruction-from-phase-sample
  - alg-qa-modular-multiplication-circuit
  - thm-qa-modular-multiplication-circuit-correctness
  - thm-division-algorithm-in-z
  - thm-qa-modular-arithmetic-cost
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
  - lem-order-characterisation
justified_by:
  - thm-qa-modular-order-finding-cost
axiom_use: "None; each run uses finite registers and explicit modular arithmetic."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; order finding and rational reconstruction"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; period finding"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§5, PDF pp. 16–19; modular order finding"
---

## Definition

**Input.** An integer $N\ge3$, the standard representative $x\in\{1,\ldots,N-1\}$ of a unit class modulo $N$, and an integer $b\ge1$ specifying target failure probability $\delta=2^{-b}$.

The representative is the unique one in $0\le x<N$ by [[thm-standard-representatives-modulo-n]]; unit membership is equivalent to $\gcd(x,N)=1$ by [[def-unit-group-modulo-n-and-euler-totient]] and [[thm-unit-criterion-modulo-n]]. The register ket $|1\rangle$ uses [[def-qc-dirac-notation-conversion]]. The superposition output law for applying the QPE gate list to this non-eigenvector input is supplied by [[thm-qa-phase-estimation-superposition-law]].

**Output.** An accepted candidate, or FAIL.

**Instructions.** Set $n=\lceil\log_2N\rceil$, $m=2n+3$, $Q=2^m$, and $t=4(n+1)b$. The inequality $Q>4N^2$ follows from $N\le2^n$. Compute the inverse constant by the following binary-integer loop. Initialize $(R,S,U,V):=(N,x,0,1)$. While $S>0$, use division with remainder to compute $q,r$ with $R=qS+r$ and $0\le r<S$, compute the least residue $h=(U-qV)\bmod N$, and simultaneously replace $(R,S,U,V)$ by $(S,r,V,h)$. Division and least residues use [[thm-division-algorithm-in-z]] and [[thm-standard-representatives-modulo-n]]; use schoolbook binary arithmetic for every update. When the loop stops, return FAIL if $R\ne1$; otherwise set $b_0:=U$ and $a_0:=x$. The inverse identity, termination, and preprocessing bit cost are established in [[thm-qa-modular-arithmetic-cost]]. For $j=0,\ldots,m-2$, compute $a_{j+1}=a_j^2\bmod N$ and $b_{j+1}=b_j^2\bmod N$. Then $a_j=x^{2^j}\bmod N$ and $b_j=a_j^{-1}\bmod N$ for all $j<m$.

Repeat independently for samples $s=1,\ldots,t$. Initialize the system register to the valid residue $|1\rangle$ and apply the QPE phase-estimation circuit with phase-register length $m$. Its controlled $U_x^{2^j}$ gate is implemented by the explicit controlled modular-multiplication circuit for $a_j$ from [[alg-qa-modular-multiplication-circuit]]. This procedure uses the QPE gate list on $|1\rangle$; it does not assert that $|1\rangle$ is an eigenvector. Measure the phase register to obtain $y$. Run [[alg-qa-rational-reconstruction-from-phase-sample]] with $(N,Q,y)$. If it returns FAIL, retain no denominator from this sample. If it returns $p/q$, compute $x^q\bmod N$ as follows: set $v:=1$, $a:=x$, $e:=q$; while $e>0$, if $e$ is odd set $v:=va\bmod N$, then set $a:=a^2\bmod N$ and $e:=\lfloor e/2\rfloor$. Retain $q$ exactly when the final $v=1$.

After all samples, return the smallest retained positive denominator; return FAIL if none was retained. A passing candidate is not called the order unless it is minimal. The exact criterion $x^q=1$ iff the order divides $q$ is [[lem-order-characterisation]]. The separate item `thm-qa-modular-order-finding-success` proves the probability guarantee and the fact that every retained candidate is an order multiple.
