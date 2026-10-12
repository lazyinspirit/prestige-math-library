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

[F1] In the fixed loop chart, the associated graded left representation is the character-twisted Vust representation $X\mapsto\sum_tX^{(t)}+\kappa_c(X)\operatorname{id}$. Its unital image is exactly the untwisted Vust image, because it is obtained by the automorphism $X\mapsto X+\kappa_c(X)1$ of $U(\mathfrak g^e)$. The right graded image is the ordinary truncated polynomial/permutation image. These image algebras are mutual centralizers for every Jordan type and every degree, including scalar degree zero and the empty-pyramid zero tensor case ([[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]], [[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F2] $W(\lambda)$ has a separated loop filtration with associated graded $U(\mathfrak g^e)$, and the cyclotomic quotient has the bounded monomial basis $x_1^{r_1}\cdots x_d^{r_d}w$ with $0\le r_i<l$; both filtrations are compatible with the bimodule structure ([[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-degenerate-cyclotomic-hecke-algebra]]).

[F3] Skryabin's equivalence and the Whittaker functor give the representation-theoretic model in which the tensor module is a module over the relevant Hecke image; the Morita statement under admissibility is proved through the exact quotient and progenerator argument ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]]).

[F4] The stable injectivity criterion: if $e$ has at least $d$ strings of maximum length $l$, the longest-string vector realizes the regular right module, so the right action is injective ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F5] The external standard/Casimir interfaces recorded in [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] supply the admissible character/quotient computations.

## Proof

**Proof technique:** direct.

**Given:** The filtered bimodule $V_c^{\otimes d}$, its actual character-twisted graded representation and its unchanged unital Vust image algebras.

1.1 The graded unital images. Write $E=V^{\otimes d}$, $C=W_d$, and $D$ for the right Hecke image viewed as an algebra of operators on $E$. The supplied actual tensor model in F1 gives commuting filtered operator algebras, with the graded symbols containing the unital images $A^0$ of $U(\mathfrak g^e)$ and $D^0$ of the truncated polynomial/permutation algebra. The character automorphism in F1 gives exactly the same $A^0$ as the untwisted representation; no equality of the fixed-chart twisted and untwisted modules is inferred. Since $A^0,D^0$ are mutual centralizers, taking leading homogeneous terms of commuting operators gives $A^0\subseteq\operatorname{gr}C\subseteq\operatorname{gr}Z(D)\subseteq Z(\operatorname{gr}D)\subseteq Z(D^0)=A^0$, where $Z$ is the commutant in $\operatorname{End}(E)$. Interchanging $C,D$ gives $D^0\subseteq\operatorname{gr}D\subseteq\operatorname{gr}Z(C)\subseteq Z(\operatorname{gr}C)\subseteq Z(A^0)=D^0$. Thus every inclusion is equality, establishing strict equality of both graded images as well as their commutants. [F1, F2, construct, algebra]

2.1 The filtered centralizers. For an operator in $Z(D)$, equality of the induced graded spaces in step 1.1 supplies a member of $C$ with the same leading symbol. Subtracting lowers its integer filtration degree. The finite grading of $E$ bounds the induced endomorphism filtration below, so this terminates, proving $Z(D)=C$. The same procedure proves $Z(C)=D$. Returning to the right-action opposite convention gives both mutual-centralizer identities and the stated associated graded image algebras. At degree zero both images are scalar, while for an empty pyramid and positive degree $E=0$ and both are zero; these are already covered by the actual tensor model of F1. This proves clause (1) for every origin, without a Morita assumption. [F1, F2, step 1.1, construct, algebra]

3.1 Stable injectivity. If $q_l\ge d$, then $e$ has at least $d$ strings of maximum length $l$, so by [F4] the right action is injective on the associated graded; a nonzero element of $H_d(\mathbf a)$ has nonzero leading symbol and therefore nonzero image, so the full cyclotomic action is faithful. [F4, step 2.1, algebra]

3.2 Morita under admissibility. Assume $c$ admissible. By [F3] and [F5] the tensor module is a right $B_d$-progenerator on the relevant block: the exact Whittaker quotient and the Morita argument identify $\operatorname{Hom}_W(V_c^{\otimes d},-)$ with an equivalence, and the first centralizer identity of step 2.1 identifies $W_d$ with the endomorphism algebra of the progenerator. This proves the Morita statement; the same argument does not apply to nonadmissible origins. [F3, F5, step 2.1, algebra]

4.1 The nonadmissible boundary. For $c=(0,1)$, $q=(1,1)$, $d=2$, the explicit finite matrix computed from the tensor action shows that the tensor module is not projective over $B_d$, so the progenerator hypothesis fails; the mutual centralizers of step 2.1 still hold. This is the companion-page example separating the two assertions. [step 2.1, given] ∎