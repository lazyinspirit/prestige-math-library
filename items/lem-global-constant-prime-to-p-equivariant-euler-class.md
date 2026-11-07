---
id: lem-global-constant-prime-to-p-equivariant-euler-class
kind: lemma
title: Equivariant global Euler class of the constant prime-order module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 32
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-global-mu-p-prime-to-p-equivariant-euler-class
  - lem-local-constant-module-prime-to-p-equivariant-euler-class
  - thm-poitou-tate-exact-sequence-for-finite-modules
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are inherited from the stated Poitou–Tate and local/global cohomological interfaces.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 5.1 and Remark 5.2, printed pp.67–70; the equivariant constant-module computation is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC, and the finite-module Poitou–Tate theorem in its stated scope. Let $L/F$ be a finite Galois extension of number fields with group $H$ of order prime to a prime $p$. Assume $L$ is totally imaginary and contains $\mu_p$. Let $S_F$ be a finite set of places of $F$ containing all archimedean places and places above $p$, and let $S_L$ be the set of places of $L$ above $S_F$. Then $H^i(G_{L,S_L},\mathbb F_p)$ is finite for $i=0,1,2$, and in the Grothendieck group of finite-dimensional $\mathbb F_p[H]$-modules,
$$\sum_{i=0}^2(-1)^i[H^i(G_{L,S_L},\mathbb F_p)]=-[F:\mathbb Q]\,[\mathbb F_p[H]]+[\mathbb F_p[S_\infty(L)]].$$
The actions are the natural transport actions. No Euler formula for arbitrary modules is asserted.

## Facts & Assumptions

**Given:** The finite Galois extension, prime, totally imaginary splitting field, finite set $S_F$, explicit choices and assumed Poitou–Tate theorem in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Under these hypotheses, the global cohomology groups of $\mu_p$ in degrees zero through two are finite and their equivariant alternating class is the negative archimedean permutation class. [[lem-global-mu-p-prime-to-p-equivariant-euler-class]]

[F2] For a finite Galois local extension with group of order prime to $p$, the alternating class of the constant $\mathbb F_p$-module is zero away from residue characteristic $p$ and is the stated negative regular class at $p$. [[lem-local-constant-module-prime-to-p-equivariant-euler-class]]

[F3] The assumed Poitou–Tate theorem gives the exact nine-term sequence, canonical local pairings and finite perfect localization-kernel duality. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

## Proof

**Proof technique:** take the equivariant alternating class of the Poitou–Tate sequence and insert the local and $\mu_p$ computations.

1.1 The groups in the Poitou–Tate sequence for $\mathbb F_p$ over $L$ are finite: $S_L$ is finite, each local cohomology group is finite by [F2], the three $\mu_p$ groups are finite by [F1], and the exact sequence [F3] then makes the remaining global groups finite. All maps in [F3] are canonical cup products, localization maps or the connecting maps dual to them. Transport by an automorphism in $H$ permutes the places and commutes with the local invariant and evaluation pairings; hence the entire sequence is $H$-equivariant. [F1, F2, F3, given, construct, algebra]

2.1 The alternating Grothendieck class of the finite exact sequence in step 1.1 is zero. With $e_L(N)=\sum_{i=0}^2(-1)^i[H^i(G_{L,S_L},N)]$ and contragredient $*$, it gives $e_L(\mathbb F_p)+e_L(\mu_p)^*=\sum_{w\in S_L}([H^0_T(L_w,\mathbb F_p)]-[H^1_T(L_w,\mathbb F_p)]+[H^2_T(L_w,\mathbb F_p)])$. At the complex places of totally imaginary $L$ all Tate terms are zero. [F3, step 1.1, construct, algebra]

3.1 For a finite place $v$ of $F$, choose $w\mid v$. The factors over its orbit assemble as the induction from the decomposition subgroup $H_w$ to $H$. By [F2] the local alternating class vanishes unless $v\mid p$, and in that case is $-[F_v:\mathbb Q_p][\mathbb F_p[H_w]]$. Its induction is $-[F_v:\mathbb Q_p][\mathbb F_p[H]]$. Summing over $v\mid p$ gives $-[F:\mathbb Q][\mathbb F_p[H]]$, using $\sum_{v\mid p}[F_v:\mathbb Q_p]=[F:\mathbb Q]$. [F2, step 2.1, given, choose, construct, algebra]

4.1 By [F1], $e_L(\mu_p)=-[\mathbb F_p[S_\infty(L)]]$, and a finite permutation module is self-dual under the place-basis pairing. Substitute this and step 3.1 into step 2.1. The result is the asserted class. The trivial group and $p=2$ are included. [F1, step 2.1, step 3.1, algebra] ∎
