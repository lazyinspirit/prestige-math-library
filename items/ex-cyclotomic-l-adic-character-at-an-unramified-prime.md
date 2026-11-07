---
id: ex-cyclotomic-l-adic-character-at-an-unramified-prime
title: "Cyclotomic character and Frobenius away from ℓ"
kind: example
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - def-global-field
  - def-continuous-l-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - lem-cyclotomic-character-unramified-away-from-ell
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §§1.2 and 2.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques, §3.1"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
verification: {}
---

## Example

Assume AC, DC, and Countable Choice as declared by the global and local
Galois-group interfaces. Let $F$ be a number field, fix a separable closure
$\bar F/F$, let $\ell$ be a prime, and let $v$ be a finite place whose residue
field has order $q_v$ and characteristic $p_v\ne\ell$. The one-dimensional
$\ell$-adic representation defined by the cyclotomic character
$\chi_\ell:G_F\to\mathbb Q_\ell^\times$ is unramified at $v$. With arithmetic
Frobenius normalized by $x\mapsto x^{q_v}$, its characteristic polynomial is
$1-q_vT$. With geometric Frobenius, which is the inverse convention, the
polynomial is $1-q_v^{-1}T$.

## Example references

[[lem-cyclotomic-character-unramified-away-from-ell]]

[[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §§1.2 and 2.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[Pierre Deligne, *Formes modulaires et représentations ℓ-adiques*, §3.1](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice, a number field $F$, a separable
closure $\bar F/F$, a prime $\ell$, and a finite place $v$ with residue field
$\mathbb F_{q_v}$ and $p_v\ne\ell$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the global absolute-Galois-group
construction and the global place conventions.

[A2] [[def-dependent-choice]]: DC is retained from the stated consumer hypotheses; the AC global/local proof implies DC and CC, without an additional independent DC use.

[A3] [[def-countable-choice]]: Countable Choice is assumed by local completion
and the finite-unramified-extension supplier.

[F1] [[def-global-field]] and
[[def-continuous-l-adic-galois-representation]]: $F$ is a number field and
$G_F$ has its Krull topology; a continuous one-dimensional character into
$\mathbb Q_\ell^\times$ is an $\ell$-adic representation.

[F2] [[lem-cyclotomic-character-unramified-away-from-ell]]: at a finite
place with residue characteristic different from $\ell$, $\chi_\ell$ is
trivial on inertia and arithmetic Frobenius acts by $q_v$.

[F3] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]:
for an unramified representation, the arithmetic Frobenius polynomial is
$\det(1-T\rho(\operatorname{Frob}_v))$ and is independent of the lift.

[F12] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: under AC, the global decomposition group at every finite place is the local absolute Galois group; the identification preserves residue kernels, and all prolongations are conjugate with residue maps commuting with arithmetic Frobenius.

[F13] [[thm-local-absolute-galois-group-residue-exact-sequence]]: under AC the local residue action is surjective and has kernel absolute inertia.


## Proof


1.1 The cyclotomic lemma [F2] gives continuity, trivial inertia action, and arithmetic Frobenius value $q_v$; its hypothesis $p_v\ne\ell$ is the one assumed here. Thus this is an unramified one-dimensional $\ell$-adic representation. [A1, A2, A3, F1, F2, given]

2.1 By [F3], the arithmetic polynomial is $\det(1-T\chi_\ell(\operatorname{Frob}_v))$; in dimension one this is $1-q_vT$. Geometric Frobenius is the inverse, so its character value is $q_v^{-1}$ and its polynomial is $1-q_v^{-1}T$; $q_v$ is an $\ell$-adic unit since $p_v\ne\ell$. [F2, F3, step 1.1, algebra] ∎
