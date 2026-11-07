---
id: lem-torsion-h0-has-finite-constructible-witnesses-on-curves-in-zf
kind: lemma
title: Torsion H⁰ sections have finite constructible witnesses on curves in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-small-etale-site-of-a-scheme
  - def-constructible-etale-sheaf-of-finite-modules
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - lem-finite-etale-generators-on-curves-have-constructible-torsion-in-zf
proof_strategy: direct
axiom_use: No choice is assumed. Only one specified finite family of sections and equations is handled, using finite affine refinements.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Étale Cohomology, Section 59.73
      url: https://stacks.math.columbia.edu/tag/0F0C
      locator: The existing AC-qualified coefficient-witness carrier cites this context. The degree-zero finite-generator and finite-relation construction below is locally supplied and uses no derived cohomology.
---

## Statement

In ZF, let $C$ be a finite-type scheme of dimension at most one over a field $k$, let $F$ be a torsion abelian sheaf on its small étale site, and let $K/k$ be a specified field extension. For any specified finite family of global sections of $F_K$ and finitely many specified equalities between finite integer combinations of them, there are an integer $n\ge1$, a finite constructible $\mathbb Z/n$-module sheaf $G$ on $C$ that is the cokernel of a specified finite diagram of quasi-compact separated étale generators, a morphism $G\to F$, and lifts of all those sections to $\Gamma(C_K,G_K)$ such that all specified equalities already hold among the lifts.

For a finite family of base sections in $\Gamma(C,F)$ and specified equalities after pullback to $K$, their lifts can be chosen already in $\Gamma(C,G)$, with those equalities holding after pullback. This is an $H^0$-only witness statement; it makes no claim about injective resolutions or higher cohomology.

## Statement references

[[def-small-etale-site-of-a-scheme]]

[[def-constructible-etale-sheaf-of-finite-modules]]

## Facts & Assumptions

**Given:** The finite-type curve, torsion sheaf, specified field extension, and the one finite family of sections and equalities.

[F1] Étale maps have finite standard charts and are open in ZF. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F2] Finite cokernel diagrams of quasi-compact separated étale generators on a finite-type curve give finite constructible $\mathbb Z/n$-module sheaves in ZF. [[lem-finite-etale-generators-on-curves-have-constructible-torsion-in-zf]]

[F3] The small étale site and its covering families are as specified. [[def-small-etale-site-of-a-scheme]]

[L1] For an étale object $V/C_K$, the pullback presheaf is the colimit of $F(U)$ over étale $U/C$ equipped with $V\to U_K$. Its sheafification is $F_K$: the maps from the colimit give precisely the natural transformations required by the inverse-image universal property. On the quasi-compact affine étale basis used below, form sheafification by the two finite-cover plus constructions: take matching families over each finite cover modulo finite common refinements, then repeat. Finite fibre products give common refinements, and both local equality and the universal property follow directly from these finite matching diagrams. Thus equality in the pullback has the stated finite local witnesses.

## Proof

**Proof technique:** retain finitely many local representatives and the finitely many relation witnesses needed for the specified equations.

1.1 By [L1] and sheafification [F3], each specified section of $F_K$ has local representatives given by sections $f_i\in F(U_i)$ on étale $C$-schemes and maps from étale objects over $C_K$ to $(U_i)_K$. Refine all objects by affine standard charts [F1]. Their images are open, and the finite-type $C_K$ and the finitely many affine overlap schemes are quasi-compact, so finitely many of these charts suffice for this one finite family. Choose each retained $U_i$ affine étale over an affine open of $C$; then $U_i\to C$ is quasi-compact and separated. [F1, F3, L1, given, construct]

2.1 Torsion means each $f_i$ is locally killed by a positive integer. Refine its one quasi-compact source by finitely many affine étale objects on which such annihilators are specified, and replace the retained representatives by their restrictions. The product of the finitely many positive integers gives one $n$ with $nf_i=0$ for all retained generators. Their sections therefore define a morphism from the finite direct sum $P=\bigoplus_i\mathbb Z/n[U_i]$ to $F$. [F1, F3, step 1.1, given, construct, algebra]

3.1 On the finitely many pairwise overlaps, and for each of the finitely many specified linear equalities, the relevant combinations of the images of the $f_i$ agree in the inverse-image sheaf. By the local equality rule in the sheafification construction [F3] and the common-refinement description [L1], refine by finitely many quasi-compact separated étale objects over $C_K$ on which each equality is witnessed by an actual equality of pullbacks of finitely many base sections on a quasi-compact separated étale $C$-object $V_j$. Use [F1] to take affine standard charts and finite refinements. Each relation is a morphism from $\mathbb Z/n[V_j]$ to $P$ whose composite to $F$ is zero; the finite family of those morphisms forms $R\to P$. No unlisted or infinite family of relations is selected. [F1, F3, L1, step 2.1, given, construct, algebra]

4.1 Put $G=\operatorname{coker}(R\to P)$. By [F2] it is a finite constructible $\mathbb Z/n$-module sheaf, and the generator map factors through $G\to F$. The chosen local generators now agree on each specified overlap in $G_K$, because precisely those finite relation witnesses were imposed. The sheaf condition glues them to global sections of $G_K$; the additional specified linear equalities hold by the same relations. Their images in $F_K$ are the given sections. For a base section, add $C\to C$ itself as a generator and map its canonical element to that section. The quasi-compact torsion argument in step 2.1 supplies a common annihilator, so this is a genuine base section of $G$; the imposed finite relations make its specified equalities hold after extension. This proves the final clause. The construction uses only finite covers and relations and does not invoke higher cohomology or injectives. [F2, F3, step 3.1, given, construct, algebra] ∎
