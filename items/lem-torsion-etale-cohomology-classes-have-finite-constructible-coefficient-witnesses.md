---
id: lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
kind: lemma
title: Finite constructible coefficient witnesses for torsion etale cohomology classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-axiom-of-choice
- def-small-etale-site-of-a-scheme
- def-constructible-etale-sheaf-of-finite-modules
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-site-slice-restriction-locality-and-composition
proof_strategy: direct
axiom_use: AC is explicit. It supplies the same finite-cover spectral and actual injective-model foundations as the corrected A1; no assertion of choice-free varying-coefficient continuity or unqualified theorem25 closure is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, More on constructible sheaves and Colimits
    url: https://stacks.math.columbia.edu/tag/03SA
    locator: Full displayed Lemma59.73.2 proof read; finite generator/relation reconstruction below supplies its module-presentation step locally.
  - title: The Stacks Project, Colimits, Lemma59.51.4
    url: https://stacks.math.columbia.edu/tag/03Q5
    locator: Full displayed coefficient-filtered-colimit proof sketch read; finite-degree local-cochain argument supplied below.
  - title: SGA4, ExposeXIV section1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Full section read;1.11 finite-constructible coefficient resolution is contextual. No uninspected SGA/EGA theorem is imported.
---

## Statement

Assume the Axiom of Choice. Let $X$ be a quasi-compact quasi-separated scheme and let $\mathcal F$ be a torsion abelian sheaf on its small étale site. Let $i:Z\hookrightarrow X$ be a closed immersion. For every integer $q\geq0$ and every $\xi\in H^q_{\mathrm{et}}(Z,i^*\mathcal F)$ there exist an integer $n\geq1$, a constructible sheaf $\mathcal G$ of finite $\mathbb Z/n\mathbb Z$-modules on $X$, a morphism $u:\mathcal G\to\mathcal F$, and a class $\zeta\in H^q_{\mathrm{et}}(Z,i^*\mathcal G)$ whose image is $\xi$. No monomorphism requirement is placed on $u$.

More generally, étale cohomology on any quasi-compact quasi-separated scheme commutes with filtered colimits of coefficient sheaves. A torsion abelian sheaf is a filtered colimit of finite-constructible coefficient sheaves through arbitrary morphisms; those morphisms need not be inclusions. Constructible on a possibly non-Noetherian scheme means a finite locally closed constructible stratification with finite locally constant restrictions.

## Statement references

[The Stacks Project, Lemma59.73.2](https://stacks.math.columbia.edu/tag/03SA)

[The Stacks Project, Lemma59.51.4](https://stacks.math.columbia.edu/tag/03Q5)

## Facts & Assumptions

**Given:** AC, the schemes, the coefficient sheaf, the closed immersion and the cohomology class in the Statement. Fix small site presentations and the containing universes.

[A1] AC is the choice-function axiom. [[def-axiom-of-choice]]

[F1] At its CORRECTED explicit-AC scope, the affine-limit witness lemma supplies finite-presentation descent of étale objects and finite-coefficient constructible objects, the finite section/presentation calculation, and the actual finite-degree cohomology model construction. It concerns fixed pulled-back sheaves under scheme limits; coefficient continuity is proved separately below. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F2] Slice restriction is exact, finite cohomology comparison diagrams use actual resolutions, and inverse image is exact and preserves colimits; these are the site-calculus interfaces. [[lem-site-slice-restriction-locality-and-composition]]

## Proof

**Proof technique:** finite coherent-site presentations, coefficient colimits and finite cohomology witnesses.

1.1 Let B be the basis of affine finitely presented étale objects over affine opens of X, with finite coverings and finite affine refinements on intersections. Quasi-compactness of X and quasi-separatedness of its diagonal ensure every covering of a basis object has a finite such refinement and the finitely many matching objects through any fixed degree are quasi-compact and quasi-separated. For a filtered diagram E_a of abelian sheaves, put E(U)=colim_a E_a(U) on this basis. The sheaf equalizer for a finite covering uses only finite products and equalizers, which commute with filtered colimits of abelian groups. Hence this presheaf is already a sheaf on the basis and extends uniquely to colim_a E_a. In particular its value on every qcqs basis object is that filtered colimit, and a fixed section or equality has a finite coefficient-stage witness. [A1, F1, F2, given, construct, algebra]

2.1 Fix degree q. A degree-q cohomology class is represented by sections on a finite truncated étale hypercover through degree q+1; equality is witnessed by a finite refinement and a bounding cochain. Here is the needed model argument. Take an actual injective resolution under [A1], as constructed in [F1]. The augmented free-abelian sheaf chain complex of a hypercover is locally exact: after a cover supplying a matching lift, adjoining that lift gives the extra-degeneracy contraction in that degree. Apply Hom into each injective term to obtain an exact augmented horizontal complex. The total double complex therefore computes the resolution cohomology in degree q, with finitely many diagonals through that degree. A class can be moved to the sheaf-valued row by successively taking local primitives in the exact resolution; at each of the finitely many matching degrees retain a finite affine subcover. The same construction applied to a total boundary proves the equality assertion. This uses hypercover matching refinements, not the false assertion that one Čech cover computes all higher cohomology. [A1, F1, F2, step 1.1, given, construct, algebra]

3.1 Apply the preceding finite model to E=colim_a E_a. A representing degree-q cocycle uses finitely many coefficient sections and cocycle equalities. By step 1.1 they occur at one common a, after increasing the index finitely many times. Thus colim_a H^q(Y,E_a)→H^q(Y,E) is surjective on every qcqs Y. If a stage class becomes zero, the finite refinement and bounding cochain of step 2.1 have their sections and equations at a later coefficient stage by step 1.1, proving injectivity. This proves coefficient-filtered-colimit continuity in every nonnegative degree. Degree zero is already step 1.1. The construction is natural in morphisms of coefficient sheaves. [A1, F1, F2, step 2.1, given, construct, algebra, step 1.1]

4.1 Fix a finite ring Λ. For a qcqs étale U→X let P_U be the free Λ-module sheaf on its represented sheaf h_U; thus Hom(P_U,E)=E(U). These P_U are finite constructible: locally on an affine base they descend, with their finite affine charts and overlaps, to an étale object over a finitely generated Z-subalgebra by the finite étale-descent argument of [F1]. On that Noetherian base, choose generic finite étale charts, clear finitely many denominators in their monic equations, and continue on the closed complement by Noetherian induction. The result is a finite stratification on which h_U has finite locally constant fibres. Pull back this finite stratification. A finite affine cover of X and a common refinement of its finitely many strata give the global constructible stratification. The fibres of P_U are Λ-vector sets of the form Λ[E] with E finite, so P_U is finite locally constant there. This is the finite-coefficient presentation argument, not a claim of local constancy on all of X. [A1, F1, F2, step 3.1, given, construct, algebra]

5.1 Finite limits, kernels, images and cokernels of finite constructible Λ-sheaves are finite constructible. Indeed intersect their finite strata, take a common étale trivialization of the finitely many finite coefficient objects, and refine so the finitely many maps have their fixed finite matrices. Kernel, image and cokernel are then the corresponding fixed finite Λ-modules; the transition maps descend these constructions. For a finite collection of qcqs étale generators this also proves that finite cokernel presentations by the P_U are finite constructible. [A1, F1, F2, step 4.1, given, construct, algebra]

6.1 For an arbitrary sheaf E of Λ-modules, form the canonical epimorphism P=⊕_(U,s) P_U→E indexed by all sections s∈E(U) on the small basis. It is surjective as a sheaf because every local section is included. Generate its kernel K by all maps P_V→K arising from sections over basis objects. A resulting relation map P_V→P factors through a finite subsum of P: Hom(P_V,P)=P(V), and step 1.1 applied to the filtered system of finite subsums says that this section has finite support. Consider ALL such finite factorizations, rather than selecting one for each of an arbitrary family of relations. This gives a set of finite relation witnesses. [A1, F1, F2, step 5.1, given, construct, algebra, step 1.1]

7.1 Let D index a finite set of generator summands together with finitely many of those relation witnesses whose target summands are among the chosen generators. Set G_D=coker(⊕_(chosen relations) P_V→⊕_(chosen generators) P_U). Enlarging the finite data gives a filtered diagram; any two finite data sets admit their union as a common enlargement. Each G_D is finite constructible by step 5.1 and maps to E. Its colimit is E: all generator sections occur, and every kernel relation occurs after a finite enlargement by step 6.1. Equivalently, the cokernel of the full generator/relation presentation is precisely E. No G_D→E is asserted to be monic. [A1, F1, F2, step 6.1, given, construct, algebra, step 5.1]

8.1 For a torsion abelian sheaf F, let F[n]=ker(n:F→F), with n ordered by divisibility. The sheaf colimit of these subsheaves is F: each local germ has finite order by the torsion assumption, and the sheaf colimit expresses precisely that local membership. Equivalently a section over a qcqs object is killed by one integer after a finite covering and an lcm of the finitely many resulting orders. Exact inverse image commutes with this colimit by [F2]. Thus step 3.1 gives ξ as the image of some ξ_n∈H^q(Z,i^*F[n]). The case ξ=0 permits n=1 and the zero sheaf. [A1, F1, F2, step 7.1, given, construct, algebra, step 3.1]

9.1 Apply step 7.1 with Λ=Z/n to F[n]. The closed subscheme Z of qcqs X is qcqs: on each affine chart it is affine, and its finite affine-cover intersections are quasi-compact by base change. Exact inverse image commutes with the filtered presentation colim_D G_D→F[n]. By step 3.1 on Z, the class ξ_n is the image of a class ζ∈H^q(Z,i^*G_D) for one finite D. Compose G_D→F[n]→F to obtain u and put G=G_D. This proves the asserted finite constructible class witness without requiring u to be injective. [A1, F1, F2, step 8.1, given, construct, algebra, step 7.1, step 3.1]

10.1 Finally the categories of pairs (n,G_D→F[n]) admit a common enlargement for any finite collection: pass to an lcm of their n, view the corresponding finite objects as modules over that finite coefficient ring, and enlarge their finite generator/relation data. Their colimit is F by steps7.1–8.1. Consequently the sheaf-level filtered-colimit assertion and the cohomological assertion hold simultaneously, through arbitrary coefficient morphisms rather than through presumed constructible subsheaves. The use of AC is exactly the public scope [A1] and the coherent-site/cohomology foundations of [F1]; no stronger conclusion about the original unqualified proper-base-change theorem follows. [A1, F1, F2, step 9.1, given, construct, algebra, step 8.1] ∎
