---
id: thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
title: "Unramified representations have a well-defined Frobenius characteristic polynomial"
kind: theorem
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - def-global-field
  - def-continuous-l-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - def-arithmetic-frobenius-coset
  - thm-unramified-frobenius-element-exists-uniquely
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §2.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques, §3.1"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, §8.14"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume AC, DC, and Countable Choice as declared by the global and local
Galois-group interfaces. Let $\ell$ be a prime, let $F$ be a number field,
let $v$ be a finite place of $F$ with residue field of order $q_v$, and let
$\rho:G_F\to\operatorname{GL}_{\mathbb Q_\ell}(V)$ be a continuous
finite-dimensional $\ell$-adic representation that is unramified at $v$.
Choose an extension $\bar v$ of $v$ to a separable closure of $F$. The
arithmetic Frobenius in the residue Galois group is the automorphism
$x\mapsto x^{q_v}$. For any element $\sigma\in D_{\bar v}$ inducing this
automorphism on the separable residue closure, define
$$P_{v,\rho}(T)=\det(1-T\rho(\sigma))\in\mathbb Q_\ell[T].$$
Such a lift exists, the polynomial is independent of the lift, and it is
independent of the choice of $\bar v$. This is the arithmetic Frobenius
characteristic polynomial; using geometric Frobenius replaces the lift by its
inverse.

## Statement references

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §2.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[Pierre Deligne, *Formes modulaires et représentations ℓ-adiques*, §3.1](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, §8.14](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice, a number field $F$, a finite place $v$,
its residue field $\mathbb F_{q_v}$, a separable closure $\bar F$, a chosen
extension $\bar v$, and a continuous finite-dimensional representation $\rho$
unramified at $v$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the global absolute-Galois-group
construction and the global place conventions.

[A2] [[def-countable-choice]]: Countable Choice is assumed by the local
completion and local absolute-Galois-group conventions.

[A3] [[def-dependent-choice]]: DC is retained from the stated consumer hypotheses; the AC global/local proof implies DC and CC, without an additional independent DC use.

[F1] [[def-unramified-galois-representation-at-a-place]]: unramified means
$\rho(I_{\bar v})=\{1\}$.

[F2] [[def-absolute-galois-group-of-a-local-field]]: the current draft
definition gives the local absolute Galois group as an inverse limit of finite
Galois groups, with inverse-limit topology.

[F3] [[def-local-inertia-subgroup-of-absolute-galois-group]]: the current
draft definition gives local inertia as the inverse limit of the finite
inertia groups $G_0(E/F_v)$.

[F12] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: under AC, the global decomposition group at every finite place is the local absolute Galois group; the identification preserves residue kernels, and all prolongations are conjugate with residue maps commuting with arithmetic Frobenius.

[F13] [[thm-local-absolute-galois-group-residue-exact-sequence]]: under AC the local residue action is surjective and has kernel absolute inertia.



[F4] [[thm-absolute-galois-group-of-finite-field-is-procyclic]]: the
arithmetic Frobenius $x\mapsto x^{q_v}$ is a topological generator of the
absolute Galois group of the finite residue field. Its current proof is draft.

[F5] [[def-arithmetic-frobenius-coset]]: for a finite Galois extension of
number fields, the distinguished arithmetic Frobenius coset is the residue
power map $x\mapsto x^{q_v}$; geometric Frobenius is its inverse.

[F6] [[thm-unramified-frobenius-element-exists-uniquely]]: in a finite
unramified Galois extension of number fields, that coset has a unique
representative acting by $x\mapsto x^{q_v}$.


## Proof


1.1 By [F4], arithmetic Frobenius $x\mapsto x^{q_v}$ is an element of the finite-residue absolute Galois group; the surjection in [F13] lifts it to some $\sigma\in D_{\bar v}$. The finite global Frobenius suppliers [F5], [F6] use the same normalization. [A2, A3, F2, F4, F5, F6, F12, F13, given, construct]

2.1 If $\tau$ is another lift, exactness in [F13] gives $\tau\sigma^{-1}\in I_{\bar v}$. Since $\rho$ is unramified by [F1], $\rho(\tau\sigma^{-1})=1$ and $\rho(\tau)=\rho(\sigma)$; thus the determinant is independent of lift. [F1, F3, F12, F13, step 1.1, algebra]

3.1 By the transitivity clause in [F12], for any other extension $\bar v'$ choose $g\in G_F$ with $\bar v'=g\bar v$. Conjugation carries $D_{\bar v}$ and its residue-kernel inertia to the corresponding groups at $\bar v'$. The induced residue-field isomorphism commutes with $q_v$-power, so $g\sigma g^{-1}$ is an arithmetic lift there; its matrix is conjugate to $\rho(\sigma)$ and has the same characteristic polynomial. Step 2.1 handles every other lift. [F1, F2, F3, F12, F13, step 2.1, given, algebra] ∎
