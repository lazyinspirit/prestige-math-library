---
id: thm-countable-mode-car-has-inequivalent-irreducible-representations
kind: theorem
title: Countable-Mode CAR Has Inequivalent Irreducible Representations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 9
deps:
  - lem-countable-mode-car-fock-representation-is-irreducible
  - lem-countable-mode-car-particle-hole-automorphism
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Let $\pi_F$ be the countable-mode occupation representation on $\mathcal F_\infty$ and let $\alpha$ be the particle-hole automorphism of [[lem-countable-mode-car-particle-hole-automorphism]]. Then $\pi_F$ and $\pi_{\mathrm h}:=\pi_F\circ\alpha$ are irreducible representations of $\mathsf{CAR}_{\mathbb N}$, and they are not unitarily equivalent. Here two representations are unitarily equivalent if a unitary operator between their Hilbert spaces intertwines their actions. This proves existence of inequivalent irreducible representations; it does not classify all representations.

## Facts & Assumptions
**Given:** The countable-mode CAR algebra, the occupation representation $\pi_F$, and the particle-hole automorphism $\alpha$.

[F1] The occupation representation is irreducible, and no nonzero vector is killed by every creator $c_j^\dagger$ ([[lem-countable-mode-car-fock-representation-is-irreducible]]).

[F2] The particle-hole map $\alpha$ is a surjective $*$-automorphism with $\alpha(a_j)=a_j^\dagger$ ([[lem-countable-mode-car-particle-hole-automorphism]]).

## Proof

1.1 Since $\alpha$ is a $*$-automorphism, $\pi_{\mathrm h}=\pi_F\circ\alpha$ is a representation. If a closed subspace were invariant under $\pi_{\mathrm h}(\mathsf{CAR}_{\mathbb N})$, surjectivity of $\alpha$ would make it invariant under $\pi_F(\mathsf{CAR}_{\mathbb N})$; [F1] therefore makes it trivial or all of $\mathcal F_\infty$. Thus $\pi_{\mathrm h}$ is irreducible. [given, F1, F2, algebra]

2.1 Suppose a unitary $U:\mathcal F_\infty\to\mathcal F_\infty$ intertwines $\pi_F$ with $\pi_{\mathrm h}$. Then for every $j$, $Uc_j=\pi_{\mathrm h}(a_j)U=c_j^\dagger U$. Applying this to the vacuum $\Omega=e_\varnothing$ gives $c_j^\dagger U\Omega=Uc_j\Omega=0$ for every $j$. Since $U\Omega\ne0$, this contradicts the common-creator-kernel statement in [F1]. No such unitary exists. [given, F1, F2, algebra] ∎

## Remarks

The explicit obstruction is the absence of a nonzero vector in the infinite occupation space annihilated by every creator. In finite mode number such a fully occupied vector exists, so this argument is specifically about countably infinitely many modes.
