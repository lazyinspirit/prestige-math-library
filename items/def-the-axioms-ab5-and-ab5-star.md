---
id: def-the-axioms-ab5-and-ab5-star
kind: definition
title: "The axioms AB5 and AB5*"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-the-axioms-ab3-and-ab3-star,
       thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels,
       def-the-quotient-of-an-object-by-a-subobject,
       thm-the-image-is-the-least-subobject-through-which-a-morphism-factors,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.5"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-22
---

## Definition

First fix the small-family operations used below. In an AB3 abelian category,
the join of a small family $(B_i\rightarrowtail A)_{i\in I}$ is the image of
the induced morphism

$$\coprod_{i\in I}B_i\longrightarrow A.$$

In an AB3* abelian category, let $q_i:A\to A/B_i$ be the quotient maps
([[def-the-quotient-of-an-object-by-a-subobject]]). The meet of the family is
the kernel of the induced morphism

$$A\longrightarrow\prod_{i\in I}A/B_i.$$

These constructions have the claimed order properties. Indeed, each component
$B_i\to A$ factors through the image of $\coprod_iB_i\to A$, while any common
upper bound receives the coproduct map; image minimality
([[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]])
therefore makes that image the least upper bound. Dually, the displayed kernel
lies in every $B_i$ because $B_i\rightarrowtail A$ is the kernel of $q_i$
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]), and every common
lower bound is killed by every $q_i$, hence by the product map, so it factors
through the displayed kernel. Thus that kernel is the greatest lower bound.
For a two-member family these constructions agree with the binary operations
of [[thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]].
The empty join is $0$ and the empty meet is $A$.

An abelian category satisfies **AB5** when it satisfies AB3 and for every small
directed family of subobjects $(B_i)$ of an object $A$ and every subobject
$C\le A$ one has

$$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C).$$

It satisfies **AB5*** when it satisfies AB3* and for every small decreasing
family of subobjects $(B_i)$ of an object $A$ and every subobject $C\le A$ one has

$$\left(\bigwedge_i B_i\right)\vee C=\bigwedge_i(B_i\vee C).$$

The joins and meets in these formulas are the small-family constructions above.
