---
id: thm-johnston-nickel-etnc-negative-tate-motives
kind: theorem
title: Odd-Prime ETNC for Negative Tate Twists with Abelian Sylow Subgroups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 32
deps:
  - def-relative-k-group-and-etnc-for-a-tate-motive
  - thm-johnston-nickel-etnc-p-part-fitting-criterion
  - thm-johnston-nickel-etnc-class-is-torsion
  - thm-johnston-nickel-grw-etnc-induction-reduction
  - thm-johnston-nickel-coates-sinnott-fitting-ideal-identity
  - def-truncated-etale-complex-for-tate-twists
  - def-elementary-one-dimensional-p-adic-lie-groups
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice, and Dependent Choice are carried through the EIMC and global class-field inputs in the local route.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 12.4 and proof, printed p. 36.
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be odd, let $L/K$ be a finite Galois CM extension of number fields, and let $G=\operatorname{Gal}(L/K)$ have an abelian Sylow $p$-subgroup. For every negative integer $r$, the $p$-part of the ETNC holds for the Tate motive $h^0(\operatorname{Spec}L)(r)$ with coefficient ring $e_r\mathbb Z[1/2][G]$, where $e_r=(1-(-1)^rj)/2$ and $j$ is complex conjugation. Thus the plus $p$-part holds for negative odd $r$, and the minus $p$-part holds for negative even $r$.

## Statement references

[Johnston and Nickel, Theorem 12.4](https://arxiv.org/pdf/2010.03186)

[[def-relative-k-group-and-etnc-for-a-tate-motive]]

[[def-elementary-one-dimensional-p-adic-lie-groups]]

## Proof status

The source reduces the ETNC to a truncated-étale-cohomology Fitting criterion and then uses a finite-group induction to reduce to the abelian Fitting identity. Neither the ETNC/Fitting criterion nor the descent argument is reconstructed locally here.

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $p,L/K,G,r$, and the conventions in the Statement.

[F1] In the finite abelian case, Theorem 12.5's Fitting ideal identity supplies the required generator once its local EIMC and étale-cohomology proofs are complete. [[thm-johnston-nickel-coates-sinnott-fitting-ideal-identity]]

[A1] The general finite-group ETNC/Fitting criterion is recorded in the local theorem carrier. Its cohomological, determinant, and noncommutative Fitting proofs remain unsupplied. [[thm-johnston-nickel-etnc-p-part-fitting-criterion]]

[A2] Johnston–Nickel use the Gruenberg–Ritter–Weiss induction step, with the torsion hypothesis, to reduce the finite ETNC claim to selected $p$-elementary extension cases and then to abelian-extension cases. The exact descent proof and selected test family are not reconstructed locally. [[thm-johnston-nickel-grw-etnc-induction-reduction]]

[A3] The finite-group induction also uses the torsion property of the relative ETNC class. Its cited proof is not reconstructed locally. [[thm-johnston-nickel-etnc-class-is-torsion]]

## Proof

**Given:** The Statement hypotheses and the conditional inputs [F1] and [A1]–[A3].

1.1 By [A2] and the torsion input [A3], the source's finite-group induction reduces vanishing of the $p$-part ETNC class to selected $p$-elementary extension tests. This is a finite ETNC descent step, not the separate infinite-level EIMC theorem. [A2, A3, given]

1.2 Let $P_0$ be an abelian Sylow $p$-subgroup of $G$. For any test quotient $G/N$, $P_0N/N$ has order $|G|_p/|N|_p=|G/N|_p$, so it is a Sylow $p$-subgroup of the quotient and is abelian. Its conjugate Sylow subgroups are also abelian, so the $p$-group $P$ in each selected $p$-elementary test group $C_m\times P$ is abelian; since $C_m$ is cyclic, each test group is abelian. The source reduction [A2] places these tests in the finite abelian CM base cases; [A1] identifies ETNC vanishing with Fitting generation there, and [F1] supplies the generator. The local criterion and Fitting proofs remain incomplete. [A1, A2, F1, step 1.1, given, algebra]

2.1 The selected abelian tests satisfy the induction criterion [A2], so the $p$-part ETNC class for $L/K$ vanishes conditional on [A1]–[A3] and [F1]. Their local proofs are incomplete, and the unconditional theorem remains escalated. [A1, A2, A3, F1, step 1.2] ∎

## Proof references

[Johnston and Nickel, §12.2](https://arxiv.org/pdf/2010.03186)
