---
id: thm-local-class-field-existence-characteristic-zero
kind: theorem
title: Local class field existence in characteristic zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms
- thm-local-artin-reciprocity-and-norm-index
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: Original AC AND DC scope retained. Explicit power/norm cofinality plus the accepted
  conditional canonical norm correspondence proves full local existence; no LT-action or Hilbert-duality
  premise.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter I §§1–4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (6.2), printed155, full proof read; radical construction uses pure field-Kummer
      plus canonical norm index, not imported Hilbert duality.
verification: {}
---

## Statement

Assume AC and DC. Let $K/\mathbb Q_p$ be a finite extension with
ring of integers $\mathcal O_K$, uniformizer $\pi$, and unit filtration
$U_n=1+\pi^n\mathcal O_K$. Every open finite-index subgroup
$N\le K^\times$ is the norm subgroup of a unique finite abelian extension
$E/K$, and inclusion of subgroups reverses inclusion of the corresponding
extensions.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[J. S. Milne, *Class Field Theory*, Chapter I §§1–4, printed pp. 19–55](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The original $K/\mathbb Q_p$, open finite-index $N$, AC and DC.

[F1] For every $m\ge1$, $K^{\times m}$ is open finite-index and contains
the norm subgroup of some finite SEPARABLE extension $T/K$, including
$p=2$ and all $p$-parts of $m$.
[[lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms]]

[F2] An open finite-index subgroup containing a finite separable norm is
the norm group of a finite abelian extension. These norm groups determine
their fields uniquely, reverse inclusion, and arise from compatible onto
same-base finite canonical Artin quotients with their actual norm kernels.
[[thm-local-artin-reciprocity-and-norm-index]]

[A1] AC AND DC are the original hypotheses and the scope of both suppliers.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** place a finite separable norm in the power subgroup,
then use the canonical conditional correspondence with its original scope.

**Given:** The data above.

1.1 Put $m=[K^\times:N]$. The finite quotient has order $m$, so every element is killed by $m$ and $K^{\times m}\subseteq N$. For $m=1$ the identity field $K/K$ has norm $K^\times=N$. For $m>1$, [F1] supplies finite SEPARABLE $T/K$ with $$N_{T/K}T^\times\subseteq K^{\times m}\subseteq N.$$ The actual openness and finite-index hypotheses on $N$ are Given; we have proved the additional norm-containment premise, not assumed it from an abstract isomorphism. [A1, F1, given, algebra]

2.1 Apply the literal conditional clause [F2] to step 1.1. It produces finite ABELIAN $E/K$ with norm exactly $N$. Its uniqueness and order reversal follow from [F2]: in the compositum of any two candidate fields, their norm groups are the inverse images of their fixing groups under one onto finite canonical map, so equality/inclusion of norm groups gives equality/inclusion of fixing groups and reversed field inclusion. This proves every clause of the original Statement for all primes and all indices. No explicit LT norm/action comparison, cross-base Artin functoriality or Hilbert norm-duality theorem is used. The separate explicit LT-action theorem retains its independent obligation unchanged. [A1, F2, step 1.1, algebra] ∎

