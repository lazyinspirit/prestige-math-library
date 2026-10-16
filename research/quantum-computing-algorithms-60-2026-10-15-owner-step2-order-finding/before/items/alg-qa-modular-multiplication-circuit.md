---
id: alg-qa-modular-multiplication-circuit
kind: algorithm
title: Reversible modular multiplication by a unit
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - alg-qc-reversible-embedding
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
axiom_use: "None; the construction is finite and uses a supplied modular inverse."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp. 14–22; reversible arithmetic and compute-copy-uncompute"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3–§2.4, PDF pp. 15–18; reversible computation and XOR oracles"
---

## Definition

**Input.** An integer $N\ge2$, $n=\lceil\log_2N\rceil$, a one-bit control $c$, an $n$-bit data register $z$, and integers $a,a^{-1}$ with $0\le a,a^{-1}<N$ and $aa^{-1}\equiv1\pmod N$. The data encoding is valid when its unsigned value is less than $N$.

Residue addition and multiplication are in $\mathbb Z/N$ with the class operations of [[def-integers-modulo-n]], [[def-addition-and-multiplication-modulo-n]], and [[thm-integers-modulo-n-basic-algebra]]. The inverse condition says $[a]_N$ is a unit, equivalently $\gcd(a,N)=1$ by [[def-unit-group-modulo-n-and-euler-totient]] and [[thm-unit-criterion-modulo-n]]. Kets use [[def-qc-dirac-notation-conversion]]; $c,z$ are ordered computational-basis registers with the unsigned encoding of [[def-qc-register-and-computational-basis]] and [[def-qc-ordered-bitstring-encoding]], tensor order as in [[def-qc-tensor-register-and-permutation]], and circuit denotation as in [[def-qc-circuit-denotational-semantics]]. “Clean work” means initialized and returned to zero under [[def-qc-clean-and-dirty-ancillas]].

**Output.** A reversible circuit on $c,z$ and clean work registers which implements the controlled map $z\mapsto az\bmod N$ for $c=1$ and valid $z$, and is the identity on invalid encodings and when $c=0$.

**Instructions.** Define the total Boolean function on $(c,z)$ by
$$f_a(c,z)=\begin{cases}az\bmod N,&c=1\text{ and }z<N,\\z,&\text{otherwise.}\end{cases}$$
Construct its Boolean circuit by computing the validity comparison, the constant product, and the remainder. Compile the circuit to the clean-target XOR oracle of [[def-qc-coherent-function-oracle]] using [[alg-qc-reversible-embedding]]. That XOR oracle is an involution by [[thm-qc-reversible-xor-oracle-unitary]], so the same pattern clears the output of $f_{a^{-1}}$. Allocate an $n$-bit clean target, compute $f_a(c,z)$ into it, swap the data and target registers with three CNOT gates per bit, then apply the inverse XOR computation for $f_{a^{-1}}$ to clear the old-data target. Return the resulting gate list, including all cleanup gates. Separate items `thm-qa-modular-multiplication-circuit-correctness` and `thm-qa-modular-arithmetic-cost` establish its basis action and gate/work bounds. No depth bound is part of this algorithm.
