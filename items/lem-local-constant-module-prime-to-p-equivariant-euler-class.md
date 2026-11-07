---
id: lem-local-constant-module-prime-to-p-equivariant-euler-class
kind: lemma
title: Equivariant local Euler class of a constant prime-order module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-local-principal-unit-prime-to-p-equivariant-lattice
  - thm-local-class-field-existence-characteristic-zero
  - thm-local-artin-reciprocity-and-norm-index
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - lem-hensel-factor-lifting-over-a-complete-valued-field
proof_strategy: direct
axiom_use: AC and DC are inherited from local class field theory and local Tate duality.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 2.8, printed pp.29–31; the prime-to-p equivariant constant-module calculation is supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $E/F$ be a finite Galois extension of nonarchimedean characteristic-zero local fields with group $H$ of order prime to $p$, where $p$ is any prime. Give $H^i(G_E,\mathbb F_p)$ its natural $H$-action by transport. In the Grothendieck group of finite-dimensional $\mathbb F_p[H]$-modules,
$$[H^0(G_E,\mathbb F_p)]-[H^1(G_E,\mathbb F_p)]+[H^2(G_E,\mathbb F_p)]=\begin{cases}-[F:\mathbb Q_p]\,[\mathbb F_p[H]],&\text{if the residue characteristic is }p,\\0,&\text{otherwise.}\end{cases}$$
This is the constant-module local identity only; it asserts no global Euler formula.

## Facts & Assumptions

**Given:** The finite local Galois extension, prime-to-$p$ group and constant coefficient in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For a finite extension of $\mathbb Q_p$ and a prime-to-$p$ Galois group, the principal-unit quotient by its torsion is a free $\mathbb Z_p$-lattice with the stated regular mod-$p$ class. [[lem-local-principal-unit-prime-to-p-equivariant-lattice]]

[F2] Local class field existence and normalized local reciprocity identify finite-order Galois characters with finite-order characters of the local multiplicative group, by actual cyclic pairings. [[thm-local-class-field-existence-characteristic-zero]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F3] Local Tate duality identifies $H^2(G_E,\mathbb F_p)$ with the dual of $\mu_p(E)$, and its finite cohomology and normalized cup-product maps are natural under local field automorphisms. [[thm-local-finite-module-tate-duality-in-characteristic-zero]]

[F4] Simple residue roots lift over complete valued fields. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

**Proof technique:** compare local reciprocity and Tate duality with the valuation, residue-unit and principal-unit filtration.

1.1 By [F2], evaluation of actual reciprocity gives an isomorphism $H^1(G_E,\mathbb F_p)\cong\operatorname{Hom}(E^\times/E^{\times p},\mathbb F_p)$. The exponent-$p$ power subgroup is open of finite index: at residue characteristic $p$ this follows from [F1] and finite residue units, while at a different residue characteristic [F4] gives $p$th roots for every principal unit and the valuation and residue quotients are finite. Cyclic carry invariants and local norms are preserved by field automorphisms, so the isomorphism is $H$-equivariant. By [F3], $H^2(G_E,\mathbb F_p)\cong\operatorname{Hom}(\mu_p(E),\mathbb F_p)$ equivariantly, and $H^0(G_E,\mathbb F_p)=\mathbb F_p$ trivially. [F1, F2, F3, F4, given, construct, algebra]

2.1 The valuation gives a natural $H$-equivariant exact sequence with trivial quotient $\mathbb F_p$ from the unit quotient to $E^\times/E^{\times p}$. If the residue characteristic differs from $p$, [F4] makes every principal unit a $p$th power, so the unit quotient is $k_E^\times/k_E^{\times p}$. The finite cyclic residue multiplicative group has $p$-quotient naturally isomorphic as an $H$-module to $\mu_p(E)$: when nonzero, both carry the same exponent character, and when zero both vanish. Thus the class of $E^\times/E^{\times p}$ is $[\mathbb F_p]+[\mu_p(E)]$. [F4, step 1.1, given, algebra]

2.2 Suppose the residue characteristic is $p$. The residue multiplicative group has order prime to $p$, so reduction leaves the principal-unit quotient. With $T$ the $p$-power roots in $U_E^1$, the exact sequence $0\to T\to U_E^1\to U_E^1/T\to0$ remains exact after quotienting by $p$: [F1] makes the last term a free $\mathbb Z_p$-module. The groups $T/pT$ and $\mu_p(E)$ have the same $H$-character, including when either is zero. Consequently [F1] gives $[E^\times/E^{\times p}]=[\mathbb F_p]+[\mu_p(E)]+[F:\mathbb Q_p][\mathbb F_p[H]]$. [F1, step 1.1, given, algebra]

3.1 Dualize the multiplicative-quotient identities of steps 2.1 and 2.2. The regular representation is canonically self-dual under the coefficient-of-identity pairing, and the valuation module is trivial. Substitution into the three cohomology terms of step 1.1 cancels the trivial and $\mu_p(E)^*$ terms. The result is zero away from residue characteristic $p$ and the negative regular class at $p$, as claimed. The trivial group and $p=2$ are included. [step 1.1, step 2.1, step 2.2, algebra] ∎
