---
id: thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer
kind: theorem
title: "The finite W and degenerate cyclotomic Hecke actions satisfy a double centralizer"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient,
       thm-ordered-monomial-pbw-basis-for-the-shifted-yangian,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       def-degenerate-cyclotomic-hecke-algebra,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 3.5-3.7, Lemmas 3.6-3.8 and Theorems 3.7, 3.9, printed pp. 14-17: the filtered double centralizer for every origin, the stable injectivity condition q_l>=d, and the Morita statement under admissibility."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3 and Chapter 8, printed pp. 24-33 and 88-96: the filtered bimodule structure, the truncation and the admissible-origin comparison used to split the mutual-centralizer statement from the Morita statement."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix the pyramid $\lambda$ with columns
$q_1\ge\cdots\ge q_l$, an origin $c\in\mathbb C^l$, and $d\ge0$, and let
$V_c^{\otimes d}$ be the truncated tensor space of
[[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]. Let
$W_d=\varphi_d(W(\lambda))\subseteq\operatorname{End}(V_c^{\otimes d})$ be the
image of the finite W-algebra and let
$B_d=\psi_d(H_d(\Lambda))$ be the image of the cyclotomic Hecke algebra of
[[def-degenerate-cyclotomic-hecke-algebra]] under the right action. Then:

1. $W_d$ and $B_d$ are mutual centralizers on $V_c^{\otimes d}$, for every
   complex origin $c$ and every $d$, and their associated graded image
   algebras are the corresponding images of $U(\mathfrak g^e)$ and of the
   truncated polynomial/permutation algebra.
2. If $q_l\ge d$, then the action of the full cyclotomic algebra
   $H_d(\mathbf a)$ is faithful.
3. If $c$ is admissible (that is, $c_i-c_j\in\mathbb Z$ implies $c_i=c_j$),
   then the tensor module is a progenerator and
   $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ is a Morita equivalence
   between $W_d$-mod and $B_d$-mod.

Mutual centralizers alone do not imply Morita for arbitrary $c$: the explicit
example with $c=(0,1)$, $q=(1,1)$, $d=2$ on the companion page has a
nonprojective tensor module.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, an origin $c$, the truncated tensor space $V_c^{\otimes d}$, and the image algebras $W_d$, $B_d$.

[F1] The associated graded of the bimodule is the Vust tensor space: left action of $U(\mathfrak g^e)$, right action of the truncated polynomial/permutation algebra; the Vust double centralizer holds for every Jordan type and every $d$ ([[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]], [[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F2] $W(\lambda)$ has a separated loop filtration with associated graded $U(\mathfrak g^e)$, and the cyclotomic quotient has the bounded monomial basis $x_1^{r_1}\cdots x_d^{r_d}w$ with $0\le r_i<l$; both filtrations are compatible with the bimodule structure ([[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-degenerate-cyclotomic-hecke-algebra]]).

[F3] Skryabin's equivalence and the Whittaker functor give the representation-theoretic model in which the tensor module is a module over the relevant Hecke image; the Morita statement under admissibility is proved through the exact quotient and progenerator argument ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]]).

[F4] The stable injectivity criterion: if $e$ has at least $d$ strings of maximum length $l$, the longest-string vector realizes the regular right module, so the right action is injective ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F5] The external standard/Casimir interfaces recorded in [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] supply the admissible character/quotient computations.



## Proof

**Proof technique:** direct.

**Given:** The filtered bimodule $V_c^{\otimes d}$ and its associated graded Vust tensor space.

1.1 Leading symbols commute. If an operator commutes with $W_d$ then its leading symbol in the filtration commutes with the associated graded image of $U(\mathfrak g^e)$; dually for $B_d$. This is immediate from the multiplicativity of the filtration and the fact that the commutator of filtered operators has strictly smaller filtration degree. Hence the two centralizers map into the two Vust centralizers. [F1, F2, algebra]

1.2 Two-sided lifting. By the Vust double centralizer [F1] every element of the $\mathfrak g^e$-centralizer has its leading symbol in the image of the truncated algebra, and every element of the $B$-centralizer has its leading symbol in the image of $U(\mathfrak g^e)$. Choose a lift from the appropriate filtered algebra (the loop PBW basis of $W(\lambda)$ for the first, the bounded monomial basis for the second), subtract it, and descend the finite filtration; repeating finitely many times (the filtration is separated and bounded in each degree of a finite-dimensional endomorphism algebra) expresses the original operator as an element of the opposite image algebra. Hence both centralizer equalities hold, and both associated graded images are as stated. [F1, F2, algebra]

2.1 Stable injectivity. If $q_l\ge d$, then $e$ has at least $d$ strings of maximum length $l$, so by [F4] the right action is injective on the associated graded; a nonzero element of $H_d(\mathbf a)$ has nonzero leading symbol and therefore nonzero image, so the full cyclotomic action is faithful. [F4, step 1.2, algebra]

2.2 Morita under admissibility. Assume $c$ admissible. By [F3] and [F5] the tensor module is a right $B_d$-progenerator on the relevant block: the exact Whittaker quotient and the Morita argument identify $\operatorname{Hom}_W(V_c^{\otimes d},-)$ with an equivalence, and the first centralizer identity of step 1.2 identifies $W_d$ with the endomorphism algebra of the progenerator. This proves the Morita statement; the same argument does not apply to nonadmissible origins. [F3, F5, step 1.2, algebra]

3.1 The nonadmissible boundary. For $c=(0,1)$, $q=(1,1)$, $d=2$, the explicit finite matrix computed from the tensor action shows that the tensor module is not projective over $B_d$, so the progenerator hypothesis fails; the mutual centralizers of step 1.2 still hold. This is the companion-page example separating the two assertions. [step 1.2, given] ∎

## Remarks

- The proof is a two-sided leading-symbol argument: the graded centralizers are known by Vust, the filtered algebras have separated bases, and lifting is finite because the operator spaces are finite-dimensional.

- Admissibility is used only in the Morita passage; the mutual centralizer identities are all-origin. The nonadmissible example shows that the Morita conclusion cannot be inferred from mutual centralizers alone.
