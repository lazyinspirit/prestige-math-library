---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-ab5-is-equivalent-to-exactness-of-filtered-colimits.json
  precheck: pass
id: thm-ab5-is-equivalent-to-exactness-of-filtered-colimits
kind: theorem
title: "AB5 is equivalent to exactness of filtered colimits"
status: published
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

[L5] Weibel, Appendix A.4.6, states for a cocomplete abelian category that exactness of filtered colimits is equivalent to the directed-subobject identity $$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C).$$

## Proof

**Proof technique:** direct.

1.1 Assume AB5. Its defining identity [L1] is exactly the directed-subobject identity in [L5]. The forward implication of the cited equivalence therefore says that every filtered colimit functor is exact. [L1, L3, L5, assume-hyp]

1.2 Conversely, assume every filtered colimit functor is exact. Let $I$ be a small directed poset indexing an increasing family of monomorphisms $b_i:B_i\rightarrowtail A$, and let $c:C\rightarrowtail A$ represent a fixed subobject of $A$. For each $i\in I$, form $P_i=B_i\times_A C$ with projections $p_i:P_i\to B_i$ and $q_i:P_i\to C$, so $b_i p_i=cq_i$; the composite represents $B_i\wedge C$ by [L4]. For $i\le j$, the inclusion $u_{ij}:B_i\to B_j$ induces the unique $v_{ij}:P_i\to P_j$ with $p_jv_{ij}=u_{ij}p_i$ and $q_jv_{ij}=q_i$. Thus the pullback squares form a diagram indexed by $I$. Set $B=\operatorname*{colim}_I B_i$ and $P=\operatorname*{colim}_I P_i$, with induced maps $p:P\to B$, $q:P\to C$, and $b:B\to A$. The colimits of the constant diagrams at $A$ and $C$ are canonically $A$ and $C$, since $I$ is nonempty and directed. Exactness and [L2] therefore imply that the induced square, with relation $bp=cq$, is again a pullback, namely $P\cong B\times_A C$. The same preservation of finite limits makes $b$ monic, since the natural transformation $(b_i):(B_i)\to\operatorname{const}_I A$ is pointwise monic. Both squares are illustrated in Remarks. [L2, L3, L4, assume-hyp, construct]

2.1 The image of $b:B\to A$ is the join $\bigvee_i B_i$: each $b_i$ factors through $b$, so every $B_i$ lies below $\operatorname{im}(b)$, and any common upper bound of the family receives $b$ by the colimit universal property, so [L4] makes $\operatorname{im}(b)$ the least such upper bound. The same argument inside $C$ shows that the image of $P\to C$ is $\bigvee_i(B_i\wedge C)$. [L4, step 1.2, algebra]

3.1 Because the square of step 1.2 is a pullback, [L4] identifies the image of $P\to C$ with the meet of the subobject represented by $\operatorname{im}(b)$ and the fixed subobject $C$. Using step 2.1, this gives $$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C),$$ which is exactly AB5 by [L1]. [L1, L4, step 1.2, step 2.1]

4.1 Therefore AB5 is equivalent to exactness of filtered colimits. [step 1.1, step 3.1] ∎


## Remarks

The first square is the pullback defining $P_i$ in step 1.2; the second is its filtered-colimit square. The labels are the maps defined there, and both squares commute: $b_i p_i=cq_i$ and $bp=cq$. In the second square, $B=\operatorname*{colim}_I B_i$ and $P=\operatorname*{colim}_I P_i$, while $A$ and $C$ arise from constant diagrams. The pullback property of the second square uses the assumed exactness of $\operatorname*{colim}_I$.

```tikzcd
P_i \arrow[r, "q_i"] \arrow[d, "p_i"'] & C \arrow[d, "c"] \\
B_i \arrow[r, "b_i"'] & A
```

```tikzcd
P \arrow[r, "q"] \arrow[d, "p"'] & C \arrow[d, "c"] \\
B \arrow[r, "b"'] & A
```
