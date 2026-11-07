---
id: thm-delignes-galois-representation-has-eigenform-frobenius-polynomial
kind: theorem
title: "Frobenius polynomial of the Galois representation attached to a normalized eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - def-arithmetic-frobenius-coset
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§3.1, 4.8–4.9 and Theorem 4.9, full article; arithmetic/geometric conversion and Frobenius polynomial."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12 §12.5.1, scanned printed pp. 120–121: attached representation and local factor statement."
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
      locator: "Chapter I §§2.1 and 2.3, full 203-page scan; arithmetic Frobenius polynomial and independence of lift."
---

## Statement

Assume AC, DC, and Countable Choice. Let $f(z)=\sum_{n\ge1}a_n e^{2\pi inz}$ be a normalized cuspidal Hecke eigenform of weight $k\ge2$, level $\Gamma_0(N)$, and nebentypus $\chi$ over a number field $E$. Fix a prime $\ell$, an embedding $\iota_\ell:E\hookrightarrow\overline{\mathbb Q}_\ell$, a finite extension $L/\mathbb Q_\ell$ containing its image, and the attached representation $\rho_{f,\ell}:G_{\mathbb Q}\to\operatorname{GL}_L(V_{f,\ell})$. For every prime $p\nmid N\ell$, the representation is unramified at $p$ and its arithmetic Frobenius characteristic polynomial is

$$\det\!\left(XI-\rho_{f,\ell}(\operatorname{Frob}^{\mathrm{arith}}_p)\right)=X^2-\iota_\ell(a_p)X+\iota_\ell(\chi(p))p^{k-1},$$

equivalently

$$\det\!\left(I-T\rho_{f,\ell}(\operatorname{Frob}^{\mathrm{arith}}_p)\right)=1-\iota_\ell(a_p)T+\iota_\ell(\chi(p))p^{k-1}T^2.$$

## Statement references

[[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]

[[thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology]]

[[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]

[[def-arithmetic-frobenius-coset]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§3.1, 4.8–4.9 and Theorem 4.9](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, Chapter 12 §12.5.1](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)

[Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I §§2.1, 2.3](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; $p\nmid N\ell$; the continuous representation attached as the contragredient of the geometric cohomological eigenspace; and its geometric Frobenius polynomial.

[A1] [[def-axiom-of-choice]]: AC is used by the global Galois-group and representation conventions.

[A2] [[def-dependent-choice]]: DC says that for every nonempty set, every everywhere-extendible relation on it, and every starting point, there is an $\mathbb N$-indexed chain following the relation; it is retained as declared by the local-Galois dependency closure of the unramified-Frobenius supplier.

[A3] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is retained as declared by the local completion and Frobenius supplier.

[F1] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the attached representation is the contragredient of the two-dimensional cohomological space with geometric Frobenius action; it is unramified at $p\nmid N\ell$.

[F2] [[thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology]]: geometric Frobenius on that cohomological space has characteristic polynomial $X^2-\iota_\ell(a_p)X+\iota_\ell(\chi(p))p^{k-1}$.

[F3] [[def-arithmetic-frobenius-coset]]: geometric Frobenius is the inverse of arithmetic Frobenius.

[F4] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]: under AC, DC and CC, the arithmetic Frobenius polynomial of an unramified representation is independent of its lift and the chosen prolongation. Its current local proof uses the explicit decomposition-group and residue exact-sequence suppliers.


## Proof

1.1 Let $\phi_p$ be an arithmetic Frobenius lift. By [F3], $\phi_p^{-1}$ is geometric Frobenius. Since $\rho_{f,\ell}$ is the contragredient of the cohomological action, its value at $\phi_p$ is the transpose of the cohomological action at $\phi_p^{-1}$. A matrix and its transpose have the same characteristic polynomial. [F1, F3, given, algebra]

2.1 Applying [F2] to that geometric action gives $\det\!\left(XI-\rho_{f,\ell}(\phi_p)\right)=X^2-\iota_\ell(a_p)X+\iota_\ell(\chi(p))p^{k-1}$. This is the asserted $X$-polynomial for every arithmetic lift. [F1, F2, step 1.1, algebra]

3.1 By [F4], the arithmetic-lift polynomial is independent of the chosen lift and place. This supplies the claimed well-definedness at $p$. [A1, A2, A3, F1, F4, step 2.1, algebra]

4.1 For a two-dimensional endomorphism $M$, $\det(XI-M)=X^2-tX+d$ implies $\det(I-TM)=1-tT+dT^2$ by the $2\times2$ determinant formula. Substituting $t=\iota_\ell(a_p)$ and $d=\iota_\ell(\chi(p))p^{k-1}$ from step 2.1 proves the equivalent $T$-polynomial. [step 2.1, algebra] ∎

## Proof status

The local lift/place-independence argument is supplied by the explicit repaired local Galois and Frobenius chain. This does not prove the attached cohomological representation in F1 or the Eichler–Shimura congruence statement in F2. Their deeper construction and compatibility obligations remain held; no full Deligne theorem acceptance follows from repairing the local interface.
