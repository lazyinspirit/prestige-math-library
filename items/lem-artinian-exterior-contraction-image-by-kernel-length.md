---
id: lem-artinian-exterior-contraction-image-by-kernel-length
kind: lemma
title: Exterior contraction image from the kernel length over a principal Artinian ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-core-rank-and-stark-system
proof_strategy: direct
axiom_use: The finite diagonal reduction and exterior-algebra computations use no arbitrary choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barry Mazur and Karl Rubin, Controlling Selmer groups in the higher core rank case
      url: https://arxiv.org/pdf/1312.4052
      locator: Appendix Proposition A.3(ii), printed pp.30–32; the kernel-only diagonal proof is supplied below.
verification: {}
---

## Statement

Let $R$ be a commutative principal Artinian local ring of length $k$, with maximal ideal $\mathfrak m$. Let $f:P\to C$ be an $R$-linear map between finite free modules of ranks $N\ge s$, where $\operatorname{rank}C=s$, and put $M=\ker f$ and $d=N-s$. Choose a generator $\omega$ of $\bigwedge^s C^\vee$. Contracting $\bigwedge^N P$ by the $s$ components of $f$ and $\omega$ gives an element of $\bigwedge^d P$ for each input. Its image lies in the image of $\mathfrak m^t\bigwedge^d M$, where $t=\operatorname{length}_R(M)-dk\ge0$, and the inclusion-induced map on that submodule is injective. Thus there is a unique lift of this contraction to $\mathfrak m^t\bigwedge^d M$, and its image is exactly that submodule. The conclusion includes $s=0$, $d=0$, non-surjective $f$, and $t\ge k$.

## Facts & Assumptions

**Given:** The principal Artinian local ring, finite free modules, linear map, orientation and lengths in the Statement.

[F1] Exterior powers over a commutative ring are tensor quotients by the alternating relations. [[def-core-rank-and-stark-system]]

## Proof

**Proof technique:** diagonalize the map over the finite chain ring and calculate the kernel and contraction in the same bases.

1.1 Choose a generator $\pi$ of $\mathfrak m$. The ideals are exactly $R,\pi R,\ldots,\pi^kR=0$: every nonzero principal ideal has a generator $\pi^a u$ with $u$ a unit, and Artinianness makes the powers terminate. A nonzero matrix entry of least exponent divides every other entry. Use row and column operations to clear its row and column, then repeat on the remaining matrix. This finite procedure gives bases in which $f$ has diagonal entries $\pi^{a_1},\ldots,\pi^{a_s}$, where $0\le a_i\le k$ and $\pi^k=0$, followed by $d$ zero domain columns. [given, choose, construct, algebra]

2.1 Let $e_1,\ldots,e_N$ be the domain basis. The kernel is $M=N_0\oplus\bigoplus_{i=1}^s\pi^{k-a_i}Re_i$, where $N_0=Re_{s+1}\oplus\cdots\oplus Re_N$ is free of rank $d$. The summand $\pi^{k-a_i}R$ has length $a_i$, so $t=\sum_i a_i\ge0$. For each $i$, multiplication by $\pi^t$ kills that summand. Expanding tensor products of the direct sum and imposing the repeated-factor relations in [F1] gives the corresponding direct-sum decomposition of exterior powers; every exterior monomial containing such a summand is killed by $\pi^t$; hence $\mathfrak m^t\bigwedge^d M$ is exactly the image of $\mathfrak m^t\bigwedge^d N_0$. Its map into $\bigwedge^d P$ is injective because $N_0$ is a direct summand of $P$. [F1, step 1.1, algebra]

3.1 In the chosen bases, contracting $e_1\wedge\cdots\wedge e_N$ by the coordinate maps of $f$ yields, up to a unit depending on the chosen orientation, $\pi^{a_1+\cdots+a_s}e_{s+1}\wedge\cdots\wedge e_N$. It therefore generates exactly the image of $\mathfrak m^t\bigwedge^d N_0$ inside $\bigwedge^d P$. By step 2.1 this image has a unique preimage in $\mathfrak m^t\bigwedge^d M$, giving the asserted unique lifted contraction and its exact image. The formulation is independent of the diagonal bases because both the original contraction and the inclusion map are intrinsic. For $s=0$ the empty contraction is the identity; for $d=0$ use $\bigwedge^0R=R$; if $t\ge k$, both asserted images are zero. [F1, step 1.1, step 2.1, algebra] ∎
