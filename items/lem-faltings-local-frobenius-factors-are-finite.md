---
id: lem-faltings-local-frobenius-factors-are-finite
kind: lemma
title: "Only finitely many local Frobenius factors occur at a fixed finite set of places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-abelian-variety-frobenius-weights
  - thm-galois-action-on-primes-above-a-prime-is-transitive
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - def-abelian-variety-over-a-field
  - def-arith-tate-module-and-inertia
  - def-number-field
  - def-good-reduction-and-abelian-scheme-model
  - thm-good-reduction-and-smooth-proper-base-change
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faltings–Wüstholz, *Rational Points*, Chapter V, §2, Lemma 2.6"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Printed pp. 161–162; integrality and Weil-root bounds imply finitely many local factors."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC, CC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC, DC, and CC. Fix a number field $K$, an integer $g\ge1$, a finite place $v$ of residue cardinality $q_v$, and a prime $\ell$ different from the residue characteristic of $v$. Among all abelian varieties $A/K$ of dimension $g$ having good reduction at $v$, only finitely many arithmetic Frobenius characteristic polynomials on $V_\ell(A)$ can occur.

## Statement references

[[def-abelian-variety-over-a-field]]

[[def-arith-tate-module-and-inertia]]

[[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]

[[thm-abelian-variety-frobenius-weights]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, §2, Lemma 2.6](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC, DC, CC, $K,g,v,\ell$ as stated and an abelian variety with good reduction at $v$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A3] [[def-countable-choice]]: CC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[thm-good-reduction-and-smooth-proper-base-change]]: at good reduction and away from the residue characteristic, the Tate module is unramified and its finite torsion specializes to the special fibre.

[F2] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]: an unramified $\ell$-adic representation has a well-defined arithmetic Frobenius characteristic polynomial.

[F3] [[thm-abelian-variety-frobenius-weights]]: at good reduction, the characteristic polynomial has integral coefficients and roots of complex absolute value $q_v^{1/2}$.

## Proof

**Proof technique:** bounded integral coefficients give a finite set of polynomials.

**Given:** [F1]–[F2], fixed $q_v$ and $g$, and an abelian variety with good reduction at $v$.

1.1 By [F1], reduction identifies each $\ell^n$-torsion group with the corresponding special-fibre torsion, equivariantly for the residue Galois action. Thus the global representation is unramified at $v$ and arithmetic Frobenius acts as Frobenius on the special fibre; [F2] defines the degree-$2g$ polynomial. [F1, F2, given]

1.2 By [F3], the polynomial is monic with integer coefficients and its $2g$ roots all have complex absolute value $q_v^{1/2}$. Each coefficient is an elementary symmetric sum of at most $\binom{2g}{j}$ products of $j$ roots, so its absolute value is at most $\binom{2g}{j}q_v^{j/2}$. [F3, step 1.1, algebra]

2.1 For each coefficient position $j$, only finitely many integers satisfy this fixed bound. There are finitely many coefficient positions, so only finitely many such polynomials occur. [step 1.2, algebra] ∎


## Proof status

The local decomposition/residue bridges and the Frobenius-characteristic-polynomial supplier [F2] have since been independently proved and accepted at their literal hypotheses; the acceptance receipts are `local-galois/residue72-weil-repair/foundations68/owner-acceptance.json` and `local-galois/residue72-weil-repair/representations72/owner-acceptance.json` under this run’s escalation directory. This removes the former local-definedness blocker only. The coefficient-counting argument remains conditional on the good-reduction comparison [F1] and the unsupplied Weil-weight proof [F3]. No acceptance of this lemma or of the full good-reduction/weight chain follows from those local receipts.
