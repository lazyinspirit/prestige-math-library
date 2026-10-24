---
id: thm-qa-modular-multiplication-circuit-correctness
kind: theorem
title: Correctness of the reversible modular multiplier
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-modular-multiplication-circuit
  - thm-qc-reversible-embedding-cost
  - thm-qc-reversible-xor-oracle-unitary
  - def-qc-coherent-function-oracle
  - thm-unit-criterion-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-clean-and-dirty-ancillas
justified_by: []
axiom_use: "None; finite basis permutations and the explicit reversible compiler suffice."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp. 14–22; clean reversible computation"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3–§2.4, PDF pp. 15–18; XOR oracle unitarity"
---

## Statement

For $N\ge2$, $n=\lceil\log_2N\rceil$, and a unit $a\pmod N$ with supplied inverse $a^{-1}$, the circuit of [[alg-qa-modular-multiplication-circuit]] is unitary. On a computational-basis state it fixes the control bit, sends $|z\rangle$ to $|az\bmod N\rangle$ if $c=1$ and $z<N$, and fixes $z$ if $c=0$ or $z\ge N$. All Boolean value, target, and scratch registers return to zero. Its action therefore extends coherently to superpositions.

## Facts & Assumptions

**Given:** $N\ge2$, a unit $a\pmod N$ and inverse $a^{-1}$, a one-bit control and an $n$-bit data register, and the construction in [[alg-qa-modular-multiplication-circuit]].

[F1] The circuit computes the total function $f_a(c,z)$ into a clean target by an XOR oracle, swaps that target with $z$, then computes $f_{a^{-1}}$ on the new data to clear the old-data target ([[alg-qa-modular-multiplication-circuit]]). Its gate list acts in the declared chronological order on the stated wires ([[def-qc-circuit-denotational-semantics]]).

[F2] Reversible embedding maps $|x,y,0^w\rangle$ to $|x,y\oplus f(x),0^w\rangle$ for every basis input and target, restores clean work, and extends to superpositions; a clean register begins in its all-zero basis vector ([[thm-qc-reversible-embedding-cost]], [[def-qc-clean-and-dirty-ancillas]]).

[F3] A coherent XOR oracle acts as $|x,y\rangle\mapsto|x,y\oplus f(x)\rangle$ and is a unitary involution for every total Boolean $f$ on the ordered computational-basis register ([[def-qc-coherent-function-oracle]], [[thm-qc-reversible-xor-oracle-unitary]], [[def-qc-register-and-computational-basis]]).

[F4] A residue class is a unit exactly when its representative is coprime to $N$; multiplication by a unit has its stated inverse in $\mathbb Z/N$ ([[thm-unit-criterion-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof


1.1 The DAG's XOR formula is $(u\lor v)\land\neg(u\land v)$, which is $u+v$ modulo $2$ for each of the four input pairs. In its adder, $U_i+V_i+d_i=s_i+2d_{i+1}$: if both input bits are $1$ the carry is $1$, if exactly one is $1$ the carry is $d_i$, and if both are $0$ the carry is $0$; the displayed sum bit has the corresponding parity. Multiplying by $2^i$ and summing proves $U+V+d_0=S+2^w d_w$. Subtraction therefore represents $U+(2^w-1-V)+1=U-V+2^w$; its carry is $1$ exactly when $U\ge V$, and its low bits are $U-V$ modulo $2^w$. The selector's disjoint branches give $U$ for $h=1$ and $V$ for $h=0$. [given, F1, algebra]

2.1 After the first $i$ product rows, the accumulator is $z\sum_{j<i}a_j2^j$. This holds initially and is preserved by step 1.1; no overflow occurs because every partial sum is at most $az<2^{2n}$. Thus the final product bits represent $az$ even for invalid input encodings. In the remainder loop, the invariant is that $R$ is the remainder modulo $N$ of the already scanned product prefix and $0\le R<N$. Appending bit $P_\ell$ gives $V=2R+P_\ell<2N$. Subtraction and selection from step 1.1 give $V-N$ if $V\ge N$ and $V$ otherwise, so the next value lies in $[0,N)$ and is the new prefix remainder. It fits $n$ bits, making the discarded high bit zero, even when $N=2^n$. Induction proves the final $R=az\bmod N$. The final no-borrow comparison gives $v=1$ exactly when $z<N$, and selection by $c\land v$ therefore computes precisely $f_a(c,z)$. The same argument applies to $a^{-1}$. [F1, step 1.1, induction, algebra]

3.1 Fix $c,z$. If $c=0$ or $z\ge N$, the defining function and its inverse-function counterpart both return $z$. If $c=1$ and $z<N$, the first function returns $z'=az\bmod N<N$ and the inverse function returns $a^{-1}z'\bmod N=z$, by [F4]. Thus in every case $f_{a^{-1}}(c,f_a(c,z))=z$. [given, F1, F4, step 2.1, algebra]

4.1 By [F2] and [F3], the first computation adds $f_a(c,z)$ into a clean target and restores all value-computation work. A bitwise swap made from CNOTs acts as $(u,v)\mapsto(u,u\oplus v)\mapsto(v,u\oplus v)\mapsto(v,u)$, so after the three CNOTs per bit the data register contains $f_a(c,z)$ and the target contains the old $z$. [F1, F2, F3, step 3.1, algebra]

5.1 Apply the clean XOR computation for $f_{a^{-1}}$ to the new data and the target holding old $z$. Step 3.1 says its output is exactly that old $z$, so XOR changes the target to $z\oplus z=0$ and restores its computation work by [F2]. Hence all temporary registers are clean and the data/control action is the claimed one. [F1, F2, step 3.1, step 4.1, algebra]

6.1 On valid residue encodings, multiplication by $a$ is a bijection of the residue register because $a^{-1}$ is its inverse; on invalid encodings and at control $0$ the map is the identity. It is therefore a permutation of the full finite computational basis. A basis permutation is unitary, and [F2] supplies the same action on arbitrary superpositions with clean work. This proves the statement. [F2, F4, step 5.1, algebra] ∎

