---
dependency_level: 4
id: lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
kind: lemma
title: Étale module sheaves have exact conservative stalks and enough injectives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-small-etale-site-of-a-scheme
  - lem-etale-coverings-form-a-grothendieck-site
  - def-etale-sheaf-of-finite-modules
  - lem-etale-inverse-image-preserves-geometric-stalks
  - thm-unramified-diagonal-open-immersion
  - lem-etale-residue-extensions-finite-separable
  - cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Lectures on Étale Cohomology
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Sections 6–9, module sheafification, exact geometric stalks, enough injectives and derived cohomology
    - title: The Stacks Project, Cohomology on Sites
      url: https://stacks.math.columbia.edu/download/sites-cohomology.pdf
      locator: Module-sheaf Grothendieck category and geometric-point method
axiom_use: Assume AC for the site foundation, algebraically closed geometric points and module-sheaf injective resolutions. Fix a small presentation and a larger universe for its sheaf category.
---

## Statement

Assume the Axiom of Choice. Fix a scheme $X$, a small presentation of its étale site and a universe containing all the indicated objects and covering families; work in a larger universe for categories of sheaves. Let $B$ be a finite commutative ring and let $\operatorname{Sh}(X,B)$ be the category of sheaves of $B$-modules on that site. This is a locally small Grothendieck abelian category. It has enough injectives and every object admits an injective resolution. For every algebraically closed geometric point $\bar x$ the geometric stalk functor is exact and preserves filtered colimits. The family of all geometric stalks is conservative: a morphism is an isomorphism precisely when all its geometric-stalk maps are isomorphisms. In particular a sheaf is zero if all its geometric stalks are zero. These assertions concern the étale site itself, not a substitution of sheaves on the underlying topological space.

## Statement references

[[def-small-etale-site-of-a-scheme]]

[[lem-etale-coverings-form-a-grothendieck-site]]

[[def-etale-sheaf-of-finite-modules]]

[[lem-etale-inverse-image-preserves-geometric-stalks]]

[[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]]

[Milne, Sections 6–9](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** AC and the site, coefficient ring and universe conventions in the statement.

[F1] The étale covering families satisfy the site axioms under AC. [[def-small-etale-site-of-a-scheme]] [[lem-etale-coverings-form-a-grothendieck-site]]

[F2] Module sheaves satisfy the covering equalizer condition. Geometric stalks are colimits over pointed étale neighborhoods; the plus sheafification construction preserves such stalks. [[def-etale-sheaf-of-finite-modules]] [[lem-etale-inverse-image-preserves-geometric-stalks]]

[F3] The diagonal of an étale morphism is an open immersion, and the residue-field extensions at its points are finite separable. [[thm-unramified-diagonal-open-immersion]] [[lem-etale-residue-extensions-finite-separable]]

[F4] A locally small Grothendieck abelian category has enough injectives and injective resolutions under AC. [[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]]

[A1] AC supplies the hypotheses of the preceding geometric and homological suppliers and the indicated universe-sized selections. [[def-axiom-of-choice]]

## Proof

1.1 For a module presheaf $P$, form $P^+(U)$ from matching families of $P$-sections on covers of $U$, identifying two presentations when they agree after a common covering refinement. The site axioms in [F1] make this an equivalence relation and permit addition and scalar multiplication after a common refinement. The resulting presheaf is separated: if two classes agree on a cover, choose representatives there and the covering refinements witnessing equality, and compose those refinements with the original cover to witness equality over $U$. Applying the construction again gives a sheaf $P^{++}$. Indeed a matching family of $P^+$-classes can be represented locally by $P$-families; their common-overlap equalities admit covering refinements, and composition gives one matching family in the second plus construction. Separatedness makes its glued class unique. The same argument for a matching family of $P^{++}$ uses separatedness of $P^+$ and gives its gluing. A map $P\to G$ to a sheaf sends a matching family to its unique glued section; this defines a unique extension $P^{++}\to G$. Thus $aP=P^{++}$ is the associated module sheaf, left adjoint to inclusion. AC in [A1] allows the set-indexed representative choices used in this construction. [A1, F1, F2, construct, algebra]

2.1 The pointed étale neighborhoods of a geometric point form a filtered indexing category for stalk colimits. Two pointed neighborhoods have their pointed fibre product as a common refinement. For two parallel arrows agreeing on the geometric point, their equalizer is the inverse image of the open diagonal in [F3], an open neighborhood of that point; it is a further refinement on which they agree. Every equality of two germs is therefore witnessed on one neighborhood. A matching-family germ in a plus construction comes from one member above the chosen point, since a cover has such a member and its finite separable residue extension embeds in the algebraically closed geometric field by [F3]. Equality of two such germs is likewise witnessed after a common refinement. This proves directly that $P_{\bar x}\cong(aP)_{\bar x}$ for module presheaves, compatibly with their linear operations. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Kernels of module-sheaf maps are computed objectwise, and cokernels are sheafifications of presheaf cokernels by the universal property in step 1.1. Filtered colimits of modules preserve short exact sequences: a kernel relation or equality involves finitely many representatives and is witnessed at a common later index, while an element of a cokernel has a representative at one index. Apply this elementary fact to the neighborhood colimit in step 2.1. It makes every stalk functor exact, and the same interchange of two colimits shows that it commutes with filtered colimits of sheaves. A section with zero germ at every geometric point is zero: all pointed neighborhoods on which its restriction is zero jointly cover its original étale object, since every point has an algebraically closed geometric lift under [A1]. The sheaf equalizer condition forces the section to be zero. Thus all-zero geometric stalks imply the zero sheaf. Applying this to kernels and cokernels shows that stalks detect isomorphisms and, more generally, exactness. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 The sheaf category is additive with finite products and kernels formed objectwise and cokernels as above. The map from coimage to image has isomorphic stalks, by exactness of module stalks, and is therefore an isomorphism by step 3.1. Hence the category is abelian. All small colimits are sheafifications of presheaf colimits, by the adjunction in step 1.1. Its Hom collections are sets in the chosen larger universe, being subsets of products of sets of linear maps over the small object set. Filtered colimits are exact: applying a stalk gives the filtered colimit of exact module sequences, and step 3.1 detects exactness of the resulting sheaf sequence. This proves cocompleteness, local smallness and AB5. [step 1.1, step 3.1, algebra]

5.1 For an object $U$ of the small site, let $B[h_U]$ be the free $B$-module presheaf on the representable presheaf $h_U$, and let $G_U=a(B[h_U])$. The free-presheaf universal property, Yoneda evaluation and the adjunction in step 1.1 give $\operatorname{Hom}(G_U,F)=F(U)$. Put $G=\bigoplus_U G_U$, a set-indexed coproduct. Two distinct morphisms of sheaves differ on a section over some $U$; its map $G_U\to F$ extends to $G\to F$ by zero on every other summand, so $G$ detects that difference. Thus $G$ is a generator. Together with step 4.1 this proves that the category is Grothendieck. Apply [F4] under [A1] to obtain enough injectives and injective resolutions. The empty scheme and zero coefficient ring give the zero category and satisfy the same conclusions. This proves all assertions. [A1, F4, step 1.1, step 4.1, algebra] ∎

## Remarks

The proof constructs the ordinary module-sheaf foundation used by bounded-below étale derived functors. It does not prove cohomological continuity under inverse limits of schemes, constructible generation by finite pushforwards, proper base change, or the normalized adic six-operation comparison.
