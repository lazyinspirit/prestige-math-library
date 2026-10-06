---
page: tensor-product-multiplicities-and-littlewood-richardson
title: Tensor Product Multiplicities and Littlewood Richardson
status: published
requires: [weyl-character-and-multiplicity-formulas, semisimple-lie-algebras-cohomology-and-levi-theory, symmetric-functions-hall-inner-product-and-schur-bases, the-branching-rule-and-the-young-graph]
items:
  - def-tensor-product-multiplicity-for-highest-weight-modules
  - prop-tensor-product-multiplicities-are-character-structure-constants
  - lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient
  - thm-steinberg-tensor-product-multiplicity-formula
  - cor-racah-speiser-tensor-product-algorithm
  - def-minuscule-weight
  - lem-minuscule-weights-are-the-weyl-orbit
  - cor-minuscule-tensor-product-rule
  - def-polynomial-glr-highest-weights-as-partitions
  - def-schur-module-and-schur-polynomial-character
  - prop-semistandard-tableaux-expand-schur-characters
  - def-littlewood-richardson-tableau-and-coefficient
  - lem-bender-knuth-involutions-on-semistandard-tableaux
  - lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux
  - thm-littlewood-richardson-tensor-product-rule
  - cor-horizontal-pieri-rule
  - cor-vertical-pieri-rule
  - prop-determinant-twists-translate-glr-highest-weights
  - prop-littlewood-richardson-coefficients-stabilize-with-rank
examples: []
---

The page turns character multiplication into a general alternating
tensor-multiplicity formula and then specializes it to type $A$, proving the
Littlewood–Richardson and Pieri rules. Tensor-product multiplicities of
finite-dimensional simple modules are first named and shown to be the
structure constants of formal characters in the completed character ring;
the weight-multiplicity formula and the equivalent Schur-lemma description of
each multiplicity are recorded on the same footing. Weyl alternation then
extracts the multiplicity of any simple summand from the alternation of the
product of characters, and multiplying by the Weyl numerator and comparing coefficients
yields Steinberg's alternating multiplicity formula and its
Racah–Speiser regrouping, in which each weight of one factor is reflected to
the dominant chamber and wall weights are discarded.

Minuscule weights are treated next: the definition by coroot pairings, its
equivalence with the Weyl orbit of the highest weight, and the orbit-sum
character are proved in full, giving the multiplicity-free tensor rule for
minuscule weights as a corollary.

The type-$A$ half of the page starts from the classification of polynomial
representations of $\operatorname{GL}_r$ by partitions with at most $r$ parts.
Schur modules are identified as the multiplicity spaces of Schur–Weyl duality,
their characters are expanded in semistandard tableaux by Schur–Weyl and
Young's rule, and the Littlewood–Richardson tableaux are defined by the
lattice-word condition on the reading word. Bender–Knuth involutions supply
the symmetry of the tableau generating series; the sign-reversing-involution
and bi-alternant argument then counts admissible tableaux. The lattice-word
Littlewood–Richardson count is supplied by the explicitly cited theorem and
complete proof in Macdonald §I.9; equality of character coefficients relates
the two counts and gives the tensor-product rule. No tableau bijection is
constructed on this page. The horizontal and vertical Pieri
rules, the translation of highest weights by determinant twists, and the
stabilization of the coefficients with the rank of the tensor factors are
consequences proved here as well.

The companion gives complete direct calculations: the Clebsch–Gordan
decomposition for $\mathfrak{sl}_2$ with its Racah–Speiser sum, the
$\mathfrak{sl}_3$ computation $3\otimes3=6\oplus\bar3$ by the minuscule rule,
the Pieri product $s_{(2,1)}s_{(1)}$, the smallest coefficient greater than
one, and the two boundary counterexamples on the lattice-word condition and
the rank bound.

The Axiom of Choice is stated where the general arguments use the character
ring and the classification of finite-dimensional simple modules; the
tableau-theoretic items (the Littlewood–Richardson definition, the
Bender–Knuth involutions and the tableau-only counterexample) are choice-free
and carry no such assumption.
