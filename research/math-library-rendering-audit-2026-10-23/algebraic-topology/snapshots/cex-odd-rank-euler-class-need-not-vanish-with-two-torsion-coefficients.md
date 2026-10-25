---
id: cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients
kind: counterexample
title: An odd-rank Euler class need not vanish in the presence of two-torsion
status: published
origin: pipeline
deps: ["prop-first-stiefel-whitney-class-classifies-orientability", "ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-axiom-of-choice"]
proof_strategy: construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§§3.1–3.2 sums of universal lines and two-torsion Euler classes, printed pp.77–94"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 Euler class of odd-rank oriented bundles, printed pp.115–124"
---

## Statement refuted

Assume the Axiom of Choice. The slogan "the Euler class of an oriented
odd-rank bundle vanishes" is false.
There is an oriented real rank-three bundle over
$B=\mathbb{RP}^\infty\times\mathbb{RP}^\infty$ whose integral Euler class is
nonzero and of order two. Only the weaker statement $2e=0$ is true in general.

## Facts & Assumptions

**Given:** AC and the base $B=\mathbb{RP}^\infty\times\mathbb{RP}^\infty$ with coordinate projections.

[F1] Real line bundles over a CW complex, and more generally over an admissible base, in particular over $B$ and its factors, correspond bijectively to $H^1(-;\mathbb F_2)$ through their first Stiefel–Whitney class: the correspondence is a natural bijection and the trivial bundle corresponds to $0$ ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F2] $H^*(B;\mathbb F_2)=\mathbb F_2[a,b]$ where $a,b$ are the pullbacks of the generators of the two factors, and $w_1$ of a pullback of the universal line is the corresponding coordinate class ([[ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] The defining rank convention gives $w_i(L)=0$ for $i>1$ for every line bundle, hence $w(L)=1+w_1(L)$. Together with naturality and the Whitney product formula this gives $w_1(E\oplus F)=w_1(E)+w_1(F)$ and $w_3(L_1\oplus L_2\oplus L_3)=w_1(L_1)w_1(L_2)w_1(L_3)$ for line bundles $L_j$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]]).

[F4] A real bundle with $w_1=0$ is orientable, so it admits an orientation; the equivalence between vanishing first Stiefel–Whitney class and orientability is available over admissible bases ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F5] For a real bundle with the canonical $\mathbb F_2$-orientation, $\rho_2(e(E,o))=w_n(E)$ for either integral orientation $o$; the odd-rank Euler class satisfies $2e(E,o)=0$ ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]], [[prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Counterexample
1.1 The line bundles. By [F1] choose line bundles $L_a,L_b,L_{a+b}$ over $B$ with $w_1(L_a)=a$, $w_1(L_b)=b$ and $w_1(L_{a+b})=a+b$; such bundles exist because the classification bijection is surjective and the three displayed classes lie in $H^1(B;\mathbb F_2)$. [F1, F2]

2.1 The witness is orientable. Let $E=L_a\oplus L_b\oplus L_{a+b}$, a real rank-three bundle over $B$. By [F3] and step 1.1, $$w_1(E)=w_1(L_a)+w_1(L_b)+w_1(L_{a+b})=a+b+(a+b)=0$$ in $\mathbb F_2[a,b]$. Hence $E$ is orientable by [F4]; fix an orientation $o$. [F3, F4, step 1.1]

2.2 Its top class does not vanish. Again by [F3], $$w_3(E)=w_1(L_a)w_1(L_b)w_1(L_{a+b})=ab(a+b)\in\mathbb F_2[a,b],$$ which is a nonzero polynomial since it is a sum of the two distinct monomials $a^2b$ and $ab^2$ of degree three. Hence $w_3(E)\neq0$ in $H^3(B;\mathbb F_2)$ by [F2]. [F2, F3, step 1.1]

3.1 The Euler class is nonzero of order two. By [F5] the mod-two reduction of the integral Euler class is the top Stiefel–Whitney class, so $\rho_2(e(E,o))=w_3(E)\neq0$ by step 2.2; in particular $e(E,o)\neq0$ in $H^3(B;\mathbb Z)$. Also by [F5] the odd rank three gives $2e(E,o)=0$. Therefore $e(E,o)$ is a nonzero element of order two, and the slogan of the statement refuted is false. [F5, step 2.1, step 2.2]

4.1 Boundary remarks. The construction uses three line bundles of rank one, so the sum has odd rank three and the two-torsion conclusion applies; if the three line classes summed to a nonzero class the bundle would not be orientable and no integral Euler class would be defined. For the base with the second factor replaced by a point the same computation gives $w_3=0$, so the two factors are both needed for the witness. The orientation $o$ is determined only up to sign, and the statement is sign-independent because both $e\neq0$ and $2e=0$ are invariant under negation. AC is used through the classification of line bundles and the Thom class, as recorded. [F1, F4, F5, A1, step 2.1, step 3.1] ∎
