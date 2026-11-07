---
dependency_level: 0
id: lem-compatible-finite-adic-modules-have-finite-complete-limits
kind: lemma
title: Compatible finite adic modules have finitely generated complete limits
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-p-adic-integers-as-compatible-residue-classes
  - thm-exactness-of-inverse-limits-under-mittag-leffler
  - thm-invariant-factor-decomposition-over-a-pid
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, adic systems
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
      locator: Finite adic modules, compatible reductions and finite-generation passage
---

## Statement

Assume the Axiom of Choice. Fix a prime $\ell$, put $A_n=\mathbb Z/\ell^n\mathbb Z$ and $A=\varprojlim_nA_n=\mathbb Z_\ell$, and let $M_n$ be finite $A_n$-modules with transition maps inducing compatible isomorphisms $M_{n+1}/\ell^nM_{n+1}\cong M_n$. Then $M=\varprojlim_nM_n$ is a finitely generated $A$-module, its reductions are canonically $M/\ell^nM\cong M_n$, and its inverse-limit topology is its $\ell$-adic topology. The ring $A$ is a complete local principal ideal domain with maximal ideal $\ell A$. Consequently $M$ is isomorphic as a module to $A^r\oplus T$ for a finite integer $r\geq0$ and a finite module $T$ killed by some power of $\ell$. No equivariant splitting is asserted when a group acts on the system.

## Statement references

[[def-p-adic-integers-as-compatible-residue-classes]]

[[thm-exactness-of-inverse-limits-under-mittag-leffler]]

[[thm-invariant-factor-decomposition-over-a-pid]]

[[def-axiom-of-choice]]

[SGA 5, Exposé VI, adic systems](https://grothendiecksga.com/read/sga5/en/VI-1.html)

## Facts & Assumptions

**Given:** AC and the compatible system in the statement.

[F1] The ring $A$ consists of compatible residue tuples. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Countable inverse limits preserve a short exact sequence when the left tower is Mittag-Leffler, under AC. [[thm-exactness-of-inverse-limits-under-mittag-leffler]]

[F3] A finitely generated module over a principal ideal domain is a finite direct sum of a free module and cyclic torsion modules. [[thm-invariant-factor-decomposition-over-a-pid]]

[A1] AC licenses the compatible lifting of generators and kernels and the inverse-limit theorem. [[def-axiom-of-choice]]

## Proof

1.1 Give $A$ componentwise ring operations. A tuple is a unit exactly when its first residue is nonzero: each residue then has a unique inverse, and these inverses are compatible. Every nonzero tuple has a least index $v+1$ at which its residue is nonzero. Dividing the residue modulo $\ell^{n+v}$ by $\ell^v$ defines a compatible tuple $u$ whose first residue is nonzero and gives the unique expression $\ell^vu$. Thus nonzero elements have additive nonnegative valuations and $A$ is a domain. A nonzero ideal has an element of least valuation $v$; the unit decomposition shows that this ideal is precisely $\ell^vA$. Therefore $A$ is a principal ideal domain with unique maximal ideal $\ell A$. Completeness and separatedness are immediate from the compatible-tuple description: a compatible choice of residues at all levels is exactly an element of $A$. [F1, algebra]

1.2 Choose a finite generating tuple of the finite $A_1$-module $M_1$, of length $s$, and lift it successively through the surjective transition maps, under [A1]. It gives compatible homomorphisms $A_n^s\to M_n$. These are surjective: their cokernel $C_n$ has zero quotient modulo $\ell$, so $C_n=\ell C_n$ and iteration gives $C_n=\ell^nC_n=0$. Denote their kernels by $J_n$. [given, A1, construct, algebra]

2.1 The maps $J_{n+1}\to J_n$ are surjective. For $x\in J_n$, lift it to $\widetilde x\in A_{n+1}^s$. Its image in $M_{n+1}$ is in the kernel of reduction, which is $\ell^nM_{n+1}$. Write it as $\ell^nz$, choose a preimage $y\in A_{n+1}^s$ of $z$ by step 1.2, and replace $\widetilde x$ by $\widetilde x-\ell^ny$. This still reduces to $x$ and now belongs to $J_{n+1}$. Thus $(J_n)$ is a surjective, hence Mittag-Leffler tower. [given, step 1.2, choose, algebra]

3.1 Apply [F2] to $0\to J_n\to A_n^s\to M_n\to0$. It gives $M=A^s/J$ for $J=\varprojlim J_n$, so $M$ is finitely generated. Surjectivity in step 2.1 and recursive lifting under [A1] make $J\to J_n$ surjective for every $n$. Hence reduction of this presentation gives $M/\ell^nM=A_n^s/J_n=M_n$. The topology whose neighborhoods are kernels of $M\to M_n$ is therefore exactly the $\ell$-adic topology. [A1, F2, step 1.2, step 2.1, algebra]

4.1 Apply [F3] over the principal ideal domain established in step 1.1 to the finitely generated module in step 3.1. Each nonzero nonunit coefficient is a unit times a positive power of $\ell$ by its valuation. Thus every torsion cyclic summand is $A/\ell^eA$ for some $e\geq1$, a finite group, and the finitely many torsion summands are killed by one power of $\ell$. The free summand has finite rank. The zero system is included with $s=r=0$ and $T=0$. All decompositions are module decompositions; they assert no equivariance for any additional action. This proves every claim. [F3, step 1.1, step 3.1, algebra] ∎
