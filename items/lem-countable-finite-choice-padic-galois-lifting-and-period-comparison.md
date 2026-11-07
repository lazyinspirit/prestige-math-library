---
id: lem-countable-finite-choice-padic-galois-lifting-and-period-comparison
kind: lemma
title: P-adic Galois lifting and period comparison from countable finite choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-choice-for-pairs-and-countable-finite-choice
  - lem-choice-free-bounded-degree-padic-subfields-and-galois-tower
  - thm-fundamental-theorem-of-finite-galois-theory
  - lem-choice-free-de-rham-invariants-iff-finite-galois-lifting
  - lem-choice-free-semistable-comparison-reduction-to-de-rham-invariants
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice for nonempty finite sets is used only to select one ordering of each finite automorphism fiber; the coherent lift is then defined by deterministic recursion."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Thomas Jech, The Axiom of Choice
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
      locator: Section 8.2, notation for countable choice of finite sets; the p-adic lifting argument is written locally
verification: {}
---

## Statement

Assume $\mathrm{AC}_{\omega,\mathrm{fin}}$, countable choice for nonempty finite sets. Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$ be its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. For every finite Galois $L/\mathbb Q_p$ in $F$, restriction $G_{\mathbb Q_p}\to\operatorname{Gal}(L/\mathbb Q_p)$ is surjective. Consequently for every finite $K\subset F$, $C^{G_K}=K$, $C(i)^{G_K}=0$ for $i\ne0$, $B_{\mathrm{dR}}^{G_K}=K$, and the normalized map $K\otimes_{K_0}B_{\mathrm{st}}\to B_{\mathrm{dR}}$ is injective. No full AC or Kummer root-tower selection is used; the weak choice assumption is explicit.

## Facts & Assumptions

**Given:** The specified countable finite-choice principle, the valued algebraic closure, its completion and the primitive cyclotomic system.

[A1] $\mathrm{AC}_{\omega,\mathrm{fin}}$ selects one element from each member of an indexed countable family of nonempty finite sets. [[def-choice-for-pairs-and-countable-finite-choice]]

[F1] The given closure has a canonical increasing sequence $L_n/\mathbb Q_p$ of finite Galois subfields whose union is $F$, constructed without Choice. [[lem-choice-free-bounded-degree-padic-subfields-and-galois-tower]]

[F2] In a finite Galois tower, restriction to a finite Galois intermediate field is surjective by the finite Galois correspondence. [[thm-fundamental-theorem-of-finite-galois-theory]]

[F3] Finite Galois restriction surjectivity implies the displayed Tate-twist and de Rham fixed-field identities without Choice. [[lem-choice-free-de-rham-invariants-iff-finite-galois-lifting]]

[F4] The normalized semistable comparison has the displayed tensor injectivity whenever $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$, without Choice or Kummer selection. [[lem-choice-free-semistable-comparison-reduction-to-de-rham-invariants]]

## Proof

1.1 Fix one finite Galois $L/\mathbb Q_p$ inside $F$ and one $\sigma\in\operatorname{Gal}(L/\mathbb Q_p)$. By [F1], finitely many generators of $L$ lie together in some $L_N$. For $n\ge N$, let $X_n$ be the finite set of automorphisms of $L_n/\mathbb Q_p$ whose restriction to $L$ is $\sigma$. Each $X_n$ is nonempty by [F2], and every restriction $X_{n+1}\to X_n$ is surjective by the same finite correspondence. [F1, F2, given, construct, algebra]

2.1 For each $n\ge N$, the set of total orderings of the nonempty finite set $X_n$ is itself finite and nonempty. Apply [A1] once to this countable family of ordering sets. Let $\sigma_N$ be the least element of $X_N$ and define $\sigma_{n+1}$ to be the least element of $X_{n+1}$ restricting to $\sigma_n$. Step 1.1 makes this a uniquely defined recursion. The compatible maps $\sigma_n$ and their inverses unite to an automorphism $g$ of $F=\bigcup_nL_n$ fixing $\mathbb Q_p$ and restricting to $\sigma$ on $L$. Thus the required absolute restriction is surjective. [A1, F1, step 1.1, construct, algebra]

3.1 Step 2.1 holds for every finite Galois $L/\mathbb Q_p$. Applying [F3] gives all the asserted Tate-twist and de Rham invariant identities for every finite $K\subset F$. In particular $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$, so [F4] gives the normalized semistable tensor injection. The proof assumes only the displayed weak choice principle, not the full Axiom of Choice. [F3, F4, step 2.1, algebra] ∎

## Source notes

The weak choice principle is stated exactly. The finite Galois tower and de Rham/semistable reductions are local proved suppliers, not imported theorems. This item does not assert the original unqualified fixed-field or comparison theorem.
