---
id: lem-countably-coded-noetherian-completion-without-choice
kind: lemma
title: Exact and faithfully flat completion of a countably coded Noetherian ring in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-noetherian-ring
  - def-adic-completion-of-a-module
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-local-ring
proof_strategy: direct
axiom_use: No choice principle is assumed. All recursive lifts use the least code in the explicitly supplied enumeration.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, More on Algebra, Lemma 15.43.1
      url: https://stacks.math.columbia.edu/tag/07NU
      locator: Classical Noetherian local completion context only; this page was not independently read in this draft. The countably-coded no-choice proof is locally reconstructed.
---

## Statement

Let $R$ be a commutative Noetherian ring with a specified surjection $\mathbb N\to R$, let $I$ be a specified finitely generated ideal, and put $C=\varprojlim_n R/I^n$. In ZF, completion is exact on finite $R$-modules, $C/I^nC\cong R/I^n$, $C$ is Noetherian, and $R\to C$ is flat. If $R$ is local and $I$ is its maximal ideal, $C$ is local with the same residue field and the completion map is faithfully flat.

## Statement references

[[def-noetherian-ring]]

[[def-adic-completion-of-a-module]]

[[def-flat-and-faithfully-flat-modules-and-ring-maps]]

[[def-local-ring]]

## Facts & Assumptions

**Given:** The Noetherian ring, its specified enumeration, and the finitely generated ideal.

[F1] Noetherian means every ideal is finitely generated; the completion is the specified inverse limit and flatness has its finite equational formulation. [[def-noetherian-ring]] [[def-adic-completion-of-a-module]] [[def-flat-and-faithfully-flat-modules-and-ring-maps]]

[F2] Finite sums, polynomial division by a leading coefficient and recursion on the least natural-number code are available in ZF. [[def-local-ring]]

## Proof

**Proof technique:** finite Noetherian algebra and least-coded compatible lifts.

1.1 Submodules of a finite R-module are finite without a choice axiom. For R^r, induct on the finite r: project a submodule to its last coordinate, choose a finite generating list for that ideal, choose lifts of this finite list, and use the induction hypothesis on the kernel in R^(r−1). Quotients give the assertion for a finite module. Only finitely many existential choices occur in each assertion. They do not form an indexed family of unrelated choices. [F1, given, construct, algebra]

2.1 Hilbert basis also has a finite proof here. For an ideal J⊂R[X], its leading coefficients together with zero form an ideal of R (align degrees before addition). Choose finitely many polynomials f_i whose leading coefficients generate it, and let d bound their degrees. Every polynomial of J of degree at least d can have its leading term cancelled by a combination of shifted f_i. Finite induction on its degree leaves a member of J of degree less than d. The module of these remaining polynomials is a submodule of the finite free module of degree less than d and is finite by step 1.1. Its finite generators and the f_i generate J. Inducting on finitely many variables proves the needed polynomial-ring Noetherianity. No infinite family of degreewise generators is chosen. [F1, step 1.1, construct, algebra]

3.1 If M is finite, N⊂M and I=(a_1,…,a_t), the Rees algebra R[IT] is a quotient of R[T_1,…,T_t] and the Rees module ⊕ I^nM T^n is finite over it. Its graded submodule ⊕(N∩I^nM)T^n has a finite homogeneous generating list by steps 1.1–2.1; replace finite generators by their finitely many homogeneous components. Let c bound their degrees. Then for n≥c, N∩I^nM=I^(n−c)(N∩I^cM). Indeed a generator of degree d≤c contributes I^(n−d) times that generator, which factors through I^(n−c) times its degree-c multiples. This is the exact Artin–Rees cofinality needed below. It uses no prime ideal, maximal ideal or Zorn argument. [F1, step 1.1, step 2.1, construct, algebra]

4.1 A finite module M with one fixed finite generating list has a specified enumeration: enumerate finite tuples of R-coefficients and take their linear combinations. Every finite quotient of M inherits such an enumeration. The list for a particular module is chosen once, a finite existential choice. In an assertion involving finitely many modules their lists may be chosen together finitely; no family indexed by all modules is selected. [F2, given, construct, step 3.1]

5.1 In the exact sequence M→P=M/N the finite levels are 0→N/(N∩I^nM)→M/I^nM→P/I^nP→0. Given a specified compatible thread p_n in the right-hand inverse limit, construct compatible lifts m_n. At the first level select the least module code mapping to p_1. If m_n is fixed, a lift of p_(n+1) differs after reduction from m_n by a kernel element represented by N; subtract a representative of that element to obtain a lift compatible with m_n. Thus the set of M-codes representing such a compatible lift is nonempty. Take its least element. This defines the whole compatible lift by unique recursion on ω. It establishes surjectivity on inverse limits without a countable-choice step. [F1, F2, step 4.1, construct, algebra]

6.1 A thread in the kernel is precisely a thread in the left kernel system, by the levelwise injections. Artin–Rees in step 3.1 makes the induced filtration N∩I^nM cofinal with I^nN. The maps n↦n+c give explicit cofinal comparison maps, so their inverse limits agree, with no selected subsequence. Therefore 0→Nhat→Mhat→Phat→0 is exact. These maps are canonical; the particular least-coded construction proves surjectivity and does not alter their definitions. [F1, step 3.1, step 5.1, algebra]

7.1 Completion commutes with finite direct sums by its componentwise definition. Given a finite presentation R^u→R^v→M→0, exactness gives C^u→C^v→Mhat→0. The same cokernel computes C⊗_R M, so C⊗M≅Mhat canonically. For the finite module R/I^n, its completion is itself. Applying exactness to I^n⊂R shows C/I^nC≅R/I^n. In particular C is separated and complete for the IC-adic filtration, and gr_(IC)C≅gr_I R. The latter is Noetherian, being a quotient of the Rees algebra. [F1, step 2.1, step 6.1, algebra]

8.1 Let J be ANY ideal of C. Its associated graded ideal, for the induced I-adic filtration, is an ideal of the Noetherian gr_I R. Choose finitely many homogeneous generators and lift them to finitely many a_i∈J, with respective orders e_i. This is a finite choice from actual representatives. If the graded ideal is zero then J=0 by separation, so suppose this list is nonempty. [F1, step 7.1, construct]

9.1 For a∈J build corrections recursively. Start with r_0=a. If r_n∈J∩I^nC, its degree-n class is a linear combination of the initial a_i classes with coefficients in the corresponding graded pieces of R. Choose the LEAST tuple of R-codes b_i,n such that b_i,n∈I^(n−e_i) for n≥e_i (and b_i,n=0 otherwise) and r_(n+1)=r_n−Σ_i b_i,n a_i ∈I^(n+1)C. This predicate has a solution by the graded-generation assertion and gr C≅gr R. Thus the least code is defined. If the degree-n class is already zero, the zero tuple is a permitted candidate. Each series Σ_n b_i,n is I-adically Cauchy since n−e_i→∞, and hence defines a unique element c_i of C. Separation gives a=Σ_i c_i a_i. Consequently J=(a_i), proving C Noetherian for arbitrary J without recursively choosing an arbitrary generator at each order. [F2, step 7.1, step 8.1, construct, algebra]

10.1 For any ideal J⊂R, Noetherianity makes it finite and finitely presented. The injection Jhat→C from step 6.1 identifies with J⊗C→C by step 7.1. Hence this tensor map is injective for every finitely generated ideal. Here is its finite relation consequence: if Σ_i a_i c_i=0 in C, let K be the kernel of R^r→(a_i). Right exactness of tensor and the ideal injection put the tuple (c_i) in the image of K⊗C. Each tensor element is a FINITE sum, giving coefficients c_i=Σ_j r_ij d_j with Σ_i a_i r_ij=0. This is the equational criterion for flatness, proved by testing the finitely many generators and relations representing any element of a tensor kernel. That proof uses only finite sums in presentations, so no choice axiom is hidden in passing from the criterion to flatness. Thus C is R-flat. [F1, step 6.1, step 7.1, algebra, step 9.1]

11.1 If R is local and I its maximal ideal, every 1−z with z∈IC is a unit by its specified geometric-series thread. Since C/IC=R/I is a field, C is local with maximal ideal IC. A proper ideal J⊂R lies in I, so C/JC surjects onto the nonzero field R/I. If an R-module M is nonzero, pick ONE nonzero element, giving a cyclic submodule R/J⊂M. Its tensor with C is nonzero, and remains a submodule of M⊗C by flatness. Thus C detects zero modules and is faithfully flat. This proves the Statement. [F1, F2, step 7.1, step 10.1, given, construct, algebra] ∎
