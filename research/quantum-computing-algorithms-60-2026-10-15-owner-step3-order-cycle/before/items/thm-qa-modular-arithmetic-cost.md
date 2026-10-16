---
id: thm-qa-modular-arithmetic-cost
kind: theorem
title: Gate and bit cost of modular multiplication and powering
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-modular-multiplication-circuit
  - thm-qa-modular-multiplication-circuit-correctness
  - thm-qc-reversible-embedding-cost
  - def-qc-circuit-cost-model
  - def-qa-classical-bit-cost
  - def-regular-continued-fraction
  - def-convergents-of-regular-continued-fraction
  - thm-rational-continued-fraction-termination
  - thm-division-algorithm-in-z
  - thm-bezout-identity
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
justified_by: []
axiom_use: "None; this is a finite gate and multitape transition count."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; modular exponentiation and order finding"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§3, PDF pp. 8–11; reversible modular arithmetic and modular-exponentiation cost"
---

## Statement

Let $N\ge2$, $n=\lceil\log_2N\rceil$, and let $1\le x<N$ be the standard representative of a known unit modulo $N$. In the explicit schoolbook Boolean construction of [[alg-qa-modular-multiplication-circuit]], each controlled multiplication by a known unit has a Boolean DAG with $S,E=O(n^2)$. Under the compiler of [[thm-qc-reversible-embedding-cost]], the complete clean circuit, including both XOR computations, $n$ swaps, and inverse cleanup, uses $O(n^2)$ elementary gates and $O(n^2)$ clean work bits. Repeated-squaring constants $x^{2^j}\bmod N$ and their inverses for $O(n)$ powers can be computed in $O(n^3)$ deterministic multitape bit transitions. No depth bound is asserted.

## Facts & Assumptions

**Given:** $N\ge2$, $1\le x<N$ a standard unit representative, the stated schoolbook arithmetic, the reversible circuit in [[alg-qa-modular-multiplication-circuit]], and the resource models in [[def-qc-circuit-cost-model]] and [[def-qa-classical-bit-cost]].

[F1] The reversible compiler uses at most $6S+4E+m$ elementary gates and at most $S+E$ clean work bits for an $m$-bit output Boolean DAG ([[thm-qc-reversible-embedding-cost]]).

[F2] The multiplier computes a controlled constant product, a remainder, a validity condition, the inverse cleanup, and $n$ swaps; its correctness is established by [[thm-qa-modular-multiplication-circuit-correctness]] and its circuit stages are specified in [[alg-qa-modular-multiplication-circuit]].

[F3] Bit cost counts multitape Turing-machine transitions and charges classical arithmetic, address/input work, and output writing; it is separate from gate and query costs ([[def-qa-classical-bit-cost]], [[def-qc-circuit-cost-model]]).

[F4] The Euclidean algorithm on a rational terminates with its continued-fraction quotient list, and the convergent numerator/denominator recurrences use those same positive quotients ([[thm-rational-continued-fraction-termination]], [[def-regular-continued-fraction]], [[def-convergents-of-regular-continued-fraction]], [[thm-division-algorithm-in-z]]).

[F5] Bézout's identity says that when $\gcd(x,N)=1$, there exist integers $s,t$ with $sx+tN=1$ ([[thm-bezout-identity]]).

[F6] A residue class modulo $N$ is a unit exactly when its representative is coprime to $N$ ([[thm-unit-criterion-modulo-n]]).

[F7] Every residue class modulo positive $N$ has a unique standard representative $x$ with $0\le x<N$ ([[thm-standard-representatives-modulo-n]]).

## Proof

1.1 In the explicit DAG of [F2], XOR emits four nodes, each adder bit emits two XORs and three carry nodes, hence $11$ nodes, and subtraction emits one additional NOT per bit, hence $12w$ nodes at width $w$. Selection emits $1+3w$ nodes. The product uses $n^2$ partial-product AND nodes and $n$ adders of width $2n$, totaling $23n^2$ nodes. Its $2n$ remainder stages use $2n(12(n+1)+1+3(n+1))$ nodes. The final comparison uses $12(n+1)$ nodes, validity/control uses two more, final selection uses $1+3n$, and the two shared constant nodes complete the count. Thus $S\le100(n+1)^2$ suffices for all $n\ge1$; every gate has at most two input ports, so $E\le2S$. The correctness supplier in [F2] proves that the row sums never overflow and that each remainder stage needs only one conditional subtraction; these are exactly the loops just counted. [given, F2, algebra]

2.1 Step 1.1 counts the complete Boolean function DAG, including the validity comparison, control, and conditional output, and gives $S,E=O(n^2)$. Apply [F1] separately to the forward and inverse functions; the two compiled XOR maps and their clean work each cost $O(n^2)$. The swap uses $3n$ CNOT gates. Adding these counts proves the claimed $O(n^2)$ gate and clean-work bounds; [F2] ensures they implement the required map. [F1, F2, step 1.1, algebra]

2.2 By [F7], choose the specified integer representative, which satisfies $1\le x<N$ since the zero class is not a unit when $N\ge2$. For Euclid on the $O(n)$-bit pair $(N,x)$, write successive remainders as $r_{i-1}=a_ir_i+r_{i+1}$ with $a_i\ge1$ and $0\le r_{i+1}<r_i$. Reading backward, $r_{i-2}\ge r_{i-1}+r_i\ge2r_i$, so there are $O(n)$ divisions; each has $O(n)$-bit operands and costs $O(n^2)$ by long division from [F3]. The back-substitution coefficients obey the same recurrence as the convergents in [F4]; they are signed convergent numerators or denominators for $N/x$. These sequences are nondecreasing in absolute value and end at the reduced numerator $N$ and denominator $x$, so every coefficient has $O(n)$ bits. Each coefficient update multiplies two $O(n)$-bit integers and costs $O(n^2)$ transitions. Reversing the recorded divisions expresses the final gcd as $sx+tN$; [F6] gives $\gcd(x,N)=1$, and [F5] supplies $sx+tN=1$, so the computed coefficient $s$ is $x^{-1}\bmod N$. Thus one extended-Euclid computation costs $O(n^3)$ transitions. Set $b_0=x^{-1}$ and $b_{j+1}=b_j^2\bmod N$ alongside $a_0=x$ and $a_{j+1}=a_j^2\bmod N$. Each of the $O(n)$ stages uses a constant number of schoolbook modular products, each $O(n^2)$, so all powers and their inverses are generated in $O(n^3)$ transitions. [F2, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The resource definition [F3] keeps gate count, classical bit transitions, and oracle queries separate. The preceding counts establish only gate/work and stated classical arithmetic bounds; no circuit layering or depth estimate follows from them. [F1, F3, step 2.1, step 2.2] ∎
