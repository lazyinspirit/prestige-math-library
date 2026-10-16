---
id: lem-qc-vmw-finite-precision-sk-compiler
kind: lemma
title: Finite-Bit Compilation into the VMW F/H Alphabet
status: draft
origin: pipeline
dependency_level: 10
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-qc-vmw-fh-density-and-base-net
  - thm-qc-solovay-kitaev-bit-complexity
  - lem-qc-fixed-dimension-interval-arithmetic
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Van Melkebeek and Watson, A Quantum Time-Space Lower Bound for the Counting Hierarchy"
      url: https://arxiv.org/pdf/0712.2545
      locator: Lemma 4, PDF page 13
    - title: "Dawson and Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: Section 3, PDF page 7, precision caveat
---

## Statement

Fix a finite family of one-qubit unitary matrices whose first $b$ real and imaginary coordinate bits are computable in time polynomial in $b$. For every rational $0<\varepsilon<1/2$, each matrix $U$ in this family can be compiled deterministically into a word $W$ over $\{F,F^*,H\}$ with
$$\inf_{|\lambda|=1}\|W-\lambda U\|\le\varepsilon.$$
The expanded word length, bit time including output, and workspace are polynomial in $\log(1/\varepsilon)$ plus the binary encoding length of $\varepsilon$. Constants may depend on the fixed family. In particular, accuracy $1/(Ct)$ for fixed positive rational $C$ has polylogarithmic bit time, workspace and word length in $t$. The output acts on the original qubit and allocates no additional quantum work space.

## Facts & Assumptions

**Given:** The fixed finite gate family, its polynomial-time coordinate Cauchy procedures, and rational $0<\varepsilon<1/2$.

[F1] [[lem-qc-vmw-fh-density-and-base-net]] supplies a fixed algebraic inverse-closed dense $SU(2)$ lift and fixed base-net certificate; phase erasure gives the physical alphabet.

[F2] [[thm-qc-solovay-kitaev-bit-complexity]] compiles an $SU(2)$ Cauchy target with a fixed algebraic gate package and base-net certificate in polynomial bit time, including the expanded output word, with polynomial word length.

[F3] [[lem-qc-fixed-dimension-interval-arithmetic]] supplies finite-bit sums, products, square roots and division with explicit conditioning bounds.

## Proof


1.1 For each fixed $U$, compute $z=\det U$ from its entries; $|z|=1$. Choose once, as part of the finite machine description, one of the constants $a\in\{1,-1,i,-i\}$ for which $\operatorname{Re}(az)>1/2$. Such a constant exists because at least one of $|\operatorname{Re}z|,|\operatorname{Im}z|$ is at least $1/\sqrt2$. On the half-plane $\operatorname{Re}(az)>1/2$, put $r=\sqrt{(1+\operatorname{Re}(az))/2}$ and $v=r+i\operatorname{Im}(az)/(2r)$. Then $r>\sqrt3/2$, $|v|=1$ and $v^2=az$ by direct calculation. Fix one algebraic square root $b$ of $a$ and set $\lambda=b/v$. Thus $|\lambda|=1$ and $\lambda^2z=1$, so $V=\lambda U\in SU(2)$. All denominators in this normalization are bounded below by a fixed positive constant. By [F3], its coordinates have polynomial-time Cauchy procedures. There is no exact-zero test or accuracy-dependent branch selection. [F3, given, choose, construct, algebra]

2.1 Fix, for example, $\eta_0=1/8192$ and the gate package furnished by [F1]. Apply [F2] to $V$ with tolerance $\varepsilon'=\min(\varepsilon,\eta_0/2)$. The fixed algebraic gate descriptions and base-net constants satisfy every gate-package hypothesis. The normalized target's Cauchy query exponent is a fixed constant by step 1.1. Thus the compiler prints a word $S$ in the lifted alphabet with $\|S-V\|\le\varepsilon'$, using polynomial bit time and polynomial expanded word length in the requested bit precision and tolerance-encoding length. Its work space is at most its bit time. This invocation uses the finite-bit theorem, not a unit-cost exact-real arithmetic count. [F1, F2, step 1.1, construct]

3.1 Erase scalar phases letter by letter using [F1]. The resulting physical word $W$ has the same length and differs from $S$ by one scalar of modulus one. Consequently its projective distance to $U$ is at most $\varepsilon'\le\varepsilon$. Printing the physical labels adds linear time in the expanded output length. All quantum letters act on the same one-qubit register. At tolerance $1/(Ct)$ the requested precision and binary encoding length are $O(\log t)$, so every classical resource bound becomes $\mathrm{polylog}(t)$; a fixed family has one uniform maximum exponent and constant over its finitely many members. [F1, step 2.1, algebra] ∎

