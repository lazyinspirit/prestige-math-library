---
id: def-cassels-tate-polarization-obstruction-class
kind: definition
title: "Obstruction class of a Néron–Severi class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-abelian-variety-over-a-field
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - thm-abelian-variety-dual-and-polarization
  - def-picard-group-scheme
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-contracted-product-and-pushout-of-commutative-fppf-torsors
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, §4"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed pp. 8–9, exact sequence (6) and definition of c_lambda."
verification: {}
---

## Definition

Assume AC and DC as in the dual-abelian-variety convention. Let $K$ be a field and
$A/K$ an abelian variety. Let $\mathcal P_{A/K}$ be the rigidified relative
Picard fppf sheaf; its identity component is represented by the dual abelian
variety $A^\vee$. Define the Néron–Severi quotient sheaf
$\operatorname{NS}_{A/K}:=\mathcal P_{A/K}/A^\vee$. For a section
$\lambda\in\operatorname{NS}_{A/K}(K)$, its **obstruction class**
$c_\lambda\in H^1_{\mathrm{fppf}}(K,A^\vee)$ is the class of the fiber
$P_\lambda=\mathcal P_{A/K}\times_{\operatorname{NS}_{A/K},\lambda}
\operatorname{Spec}K$.

## Definition references

[[def-abelian-variety-over-a-field|Abelian variety over a field]]

[[def-rigidified-relative-picard-functor-and-dual-abelian-variety|Dual abelian variety as the identity component of the Picard functor]]

[[thm-abelian-variety-dual-and-polarization|Representability of the dual abelian variety]]

[[def-picard-group-scheme|Picard group]]

[[def-fppf-h1-of-commutative-group-sheaves-as-torsors|Fppf cohomology as torsor classes]]

[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors|Group law on fppf torsor classes]]

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** AC and DC, a field $K$, an abelian variety $A/K$, its rigidified
relative Picard fppf sheaf, and a section $\lambda\in\operatorname{NS}_{A/K}(K)$.

[A1] AC is assumed by the dual-abelian-variety convention.
([[def-axiom-of-choice]],
[[def-rigidified-relative-picard-functor-and-dual-abelian-variety]])

[A2] DC is assumed by the dual-existence theorem.
([[def-dependent-choice]], [[thm-abelian-variety-dual-and-polarization]])

[F1] The rigidified relative Picard functor is an fppf sheaf and its identity
component is represented by the dual abelian variety.
([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]],
[[thm-abelian-variety-dual-and-polarization]])

[F2] The Néron–Severi sheaf is the quotient of the relative Picard fppf sheaf
by its identity component; the quotient map is an epimorphism of fppf sheaves
with kernel $A^\vee$. ([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]])

[F3] $H^1_{\mathrm{fppf}}(K,A^\vee)$ is the group of isomorphism classes of
fppf $A^\vee$-torsors. ([[def-fppf-h1-of-commutative-group-sheaves-as-torsors]],
[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors]])

## Proof

**Proof technique:** identify the fiber of a quotient sheaf as a torsor under
its kernel.

**Given:** The data above.

1.1 By [F2], the fiber $P_\lambda$ of the quotient sheaf is fppf-locally
nonempty over $\operatorname{Spec}K$. The kernel $A^\vee$ acts on it by
addition in $\mathcal P_{A/K}$. [A1, A2, F1, F2, given]

1.2 Any two sections of $P_\lambda$ differ by a unique section of the
kernel $A^\vee$, and translation by that section carries one to the other.
Thus $P_\lambda$ is an $A^\vee$-torsor for the fppf topology. [F2, step 1.1,
algebra]

2.1 By [F3], the canonical torsor $P_\lambda$ has a well-defined isomorphism
class in $H^1_{\mathrm{fppf}}(K,A^\vee)$. This is $c_\lambda$ and uses no
choice of lift. [F3, step 1.2, algebra] ∎
