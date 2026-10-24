---
id: lem-zero-section-proves-injectivity-of-the-thom-unit-orbit
kind: lemma
title: "The zero section proves injectivity of the Thom unit orbit"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - lem-stable-squares-on-universal-thom-classes
  - lem-admissible-square-action-has-a-distinct-leading-monomial
  - thm-admissible-composites-present-the-mod-two-square-algebra
  - thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
  - thm-naturality-and-uniqueness-of-thom-classes
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-mod-two-euler-class-is-the-top-stiefel-whitney-class
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - def-tautological-degree-one-class-on-a-real-projective-bundle
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-naturality-of-stiefel-whitney-classes
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§12, printed pp. 22–24: the stable Thom class and Steenrod action; the zero-section detection argument is proved locally."
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 16: Euler class, zero-section pullback, and Thom identity."
verification:
  precheck: pass
---

## Statement

Assume AC. For the stable Thom class U∈M⁰, the map ν:A→M, a↦aU, is injective in every degree.

## Facts & Assumptions

**Given:** AC; a nonzero homogeneous $a\in\mathcal A^d$ expanded in the admissible basis; the integer $r=d+1$; the space $X=(\mathbb{RP}^L)^r$ with $L\ge d+1$; the external sum $E=\bigoplus_{i=1}^r\mathrm{pr}_i^*\gamma_1$; and the based zero section $z_+:X_+\to T(E)$.

[F1] The admissible terms of $a$ have distinct leading monomials on $P=x_1\cdots x_r$, so $a(P)\ne0$ ([[lem-admissible-square-action-has-a-distinct-leading-monomial]], [[thm-admissible-composites-present-the-mod-two-square-algebra]]).

[F2] The stable Grassmannian classification supplies a classifying map $g$ of $E$ with $g^*\gamma_r\cong E$, and the pullback Thom map pulls the universal Thom class back to the Thom class of $E$; the Euler class is the zero-section pullback of the Thom class, the top Stiefel–Whitney class computes the mod-two Euler class, and the Whitney formula gives $w_r(E)=P$ ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-naturality-of-stiefel-whitney-classes]], [[thm-naturality-and-uniqueness-of-thom-classes]], [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]]).

[F3] Squares are natural for pullbacks of Thom classes and act on the inverse limit componentwise ([[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]], [[lem-stable-squares-on-universal-thom-classes]]); AC underlies the choices of models ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Take a nonzero homogeneous a∈A^d. Set r=d+1 and X=(RP^L)^r with L≥d+1. Let x_i be the degree-one generator from factor i and P=x₁⋯x_r. By the leading-monomial lemma, the admissible terms in a have distinct leading monomials on P, so a(P)≠0. [given, F1]

2.1 Let E=⊕_{i=1}^r pr_i^*γ₁ over X. The stable Grassmannian classification gives a classifying map g:X→BO(r) with g^*γ_r≅E. The prespectrum setup’s pullback Thom map T(E)→T_r pulls u_r back to u_E. The based zero section z_+:X_+→T(E) pulls the normalized Thom class back to the mod-two Euler class: z_+^*u_E=e_r(E)=w_r(E)=x₁⋯x_r=P. The first equality is the published Euler definition by zero-section pullback; the second is the published mod-two Euler/top-Stiefel–Whitney theorem; For each line L_i=pr_i^*γ₁, P(L_i)=X and its tautological line is L_i. The rank-one projective-bundle relation is x_(L_i)+w₁(L_i)=0, hence w₁(L_i)=x_(L_i). The factor map X→RP^L→RP^∞ classifies L_i, so the tautological-class definition gives x_(L_i)=x_i. The rank convention gives w_j(L_i)=0 for j>1. The Whitney formula now gives w(E)=∏(1+x_i), whose top-degree part is P. These are precisely the rank-one Stiefel–Whitney definition and the tautological-class definition; no identification of w₁ is inferred from the tautological definition alone. Naturality of every Sq composite, hence of a, now gives z_+^* T(g)^* (a u_r)=a(P)≠0. [step 1.1, F2, F3]

3.1 Thus a u_r≠0. If aU were zero in M, every inverse-limit component would vanish, in particular its rank-r component a u_r; contradiction. So ν is injective in each degree and hence on the graded direct sum. For an inhomogeneous element, its distinct degree components remain distinct in M and cannot cancel. [step 2.1, F3] ∎
