---
id: thm-ab5-is-equivalent-to-exactness-of-filtered-colimits
kind: theorem
title: "AB5 is equivalent to exactness of filtered colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       thm-degenerate-exactness-criteria,
       def-the-axioms-ab5-and-ab5-star,
       def-filtered-category-and-filtered-colimit,
       def-small-finite-and-large-limits-completeness-and-cocompleteness,
       def-exact-functor-between-abelian-categories,
       thm-the-meet-of-subobjects-is-their-pullback,
       thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4.6"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-23
---

## Statement

Let $\mathcal A$ be a cocomplete abelian category. Then $\mathcal A$ satisfies
AB5 if and only if for every small filtered category $\mathcal J$, the filtered
colimit functor
$$\operatorname*{colim}_{\mathcal J} : \mathcal A^{\mathcal J} \to \mathcal A$$
is exact.

## Facts & Assumptions

**Given:** A cocomplete abelian category $\mathcal A$.

[L1] AB5 is the directed-family lattice identity of [[def-the-axioms-ab5-and-ab5-star]].

[L2] An exact functor preserves the finite limits and finite colimits of its source, and in particular preserves short exact sequences ([[def-exact-functor-between-abelian-categories]], [[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]], [[thm-degenerate-exactness-criteria]]).

[L3] A filtered colimit is a colimit indexed by a small filtered category ([[def-filtered-category-and-filtered-colimit]], [[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L4] The meet of two subobjects is represented by their pullback, and the image of a morphism is the least subobject through which that morphism factors ([[thm-the-meet-of-subobjects-is-their-pullback]], [[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]]).

[L5] Weibel, Appendix A.4.6, states for a cocomplete abelian category that
exactness of filtered colimits is equivalent to the directed-subobject identity
$$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C).$$

## Proof

**Proof technique:** direct.

1.1 Assume AB5. Its defining identity [L1] is exactly the directed-subobject identity in [L5]. The forward implication of the cited equivalence therefore says that every filtered colimit functor is exact. [L1, L3, L5, assume-hyp]

1.2 Conversely, assume every filtered colimit functor is exact. Let $I$ be a small directed poset indexing a family of monomorphisms $b_i:B_i\rightarrowtail A$, and let $c:C\rightarrowtail A$ represent a fixed subobject of $A$. For each $i\in I$, form the pullback square ```tikzcd P_i \arrow[r] \arrow[d] & C \arrow[d, "c"] \\ B_i \arrow[r, "b_i"'] & A. ``` By [L4], the top-left leg represents $B_i\wedge C$. These pullback squares assemble into a diagram in $\mathcal A^I$. Because the filtered colimit functor $\operatorname*{colim}_I$ is exact, [L2] and [L3] say that it preserves finite limits, so its colimit square ```tikzcd P \arrow[r] \arrow[d] & C \arrow[d, "c"] \\ B \arrow[r, "b"'] & A ``` is again a pullback. [L2, L3, L4, assume-hyp, construct]

2.1 The image of $b:B\to A$ is the join $\bigvee_i B_i$: each $b_i$ factors through $b$, so every $B_i$ lies below $\operatorname{im}(b)$, and any common upper bound of the family receives $b$ by the colimit universal property, so [L4] makes $\operatorname{im}(b)$ the least such upper bound. The same argument inside $C$ shows that the image of $P\to C$ is $\bigvee_i(B_i\wedge C)$. [L4, step 1.2, algebra]

3.1 Because the square of step 1.2 is a pullback, [L4] identifies the image of $P\to C$ with the meet of the subobject represented by $\operatorname{im}(b)$ and the fixed subobject $C$. Using step 2.1, this gives $$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C),$$ which is exactly AB5 by [L1]. [L1, L4, step 1.2, step 2.1]

4.1 Therefore AB5 is equivalent to exactness of filtered colimits. [step 1.1, step 3.1] ∎
