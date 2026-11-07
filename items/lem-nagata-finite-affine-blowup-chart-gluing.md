---
id: lem-nagata-finite-affine-blowup-chart-gluing
kind: lemma
title: Finite affine blowup charts glue canonically
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - lem-affine-blowup-algebra-properties
  - thm-gluing-affine-schemes
  - thm-separatedness-gluing-overlap-criterion
  - def-rees-algebra-and-rees-module
  - def-graded-ring-and-graded-module
  - def-multiplicative-subset-and-localisation
  - def-locally-finite-type-and-finite-type-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
proof_strategy: direct
axiom_use: No choice principle is assumed. The generating family is finite supplied data, all overlap maps are explicit localization maps, and gluing uses the unqualified affine gluing theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Section 0.1, printed p. 661; explicit affine chart construction used by corrected Lemma 0.3.
---

## Statement

Let $A$ be a commutative ring and $J=(a_1,\ldots,a_m)$ an ideal with a supplied finite nonempty generating family; zero generators are permitted. Let $R=\bigoplus_{n\ge0}J^nt^n\subseteq A[t]$ be its graded Rees algebra. Put $A_i=(R[(a_it)^{-1}])_0=A[J/a_i]$, with the subscript $0$ denoting degree zero, and let $u_{ij}=a_j/a_i\in A_i$. Then the affine schemes $X_i=\operatorname{Spec}A_i$ glue along the open subschemes $D(u_{ij})$ to a scheme $X'$ with a canonical morphism $\beta:X'\to\operatorname{Spec}A$. The overlap maps are the canonical identifications
$$ (A_i)_{u_{ij}}=\bigl(R[(a_it)^{-1},(a_jt)^{-1}]\bigr)_0=(A_j)_{u_{ji}}.$$
The morphism $\beta$ is separated and locally of finite type, its restriction over $\operatorname{Spec}A\setminus V(J)$ is an isomorphism, and $J\mathcal O_{X'}$ is generated on $X_i$ by the nonzerodivisor $a_i$. The resulting $A$-scheme is independent of the supplied finite generating family up to a canonical isomorphism, and its construction commutes with localization of $A$. If $A$ is Noetherian, $X'$ is Noetherian and $\beta$ is of finite type. Zero rings and the zero and unit ideals are included; the zero ideal may be represented by the single generator zero.

## Statement references

[[lem-affine-blowup-algebra-properties]]

[[thm-gluing-affine-schemes]]

[Deligne, Section 0.1, printed p. 661](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

## Facts & Assumptions

**Given:** The ring, finite generating family, Rees algebra, homogeneous localizations and degree-zero rings in the Statement.

[F1] The affine blowup algebra $A[J/a]$ is the degree-zero homogeneous localization of the Rees algebra. The image of $a$ in it is a nonzerodivisor, its extended ideal $J$ is $(a)$, and localizing further at $a$ gives $A_a$. It is generated as an $A$-algebra by the fractions of a finite generating family by $a$. [[lem-affine-blowup-algebra-properties]]

[F2] Affine schemes with open overlap isomorphisms satisfying identity and cocycle conditions glue to a scheme with those affine opens as a cover. [[thm-gluing-affine-schemes]]

[F3] A morphism is separated if, on an affine cover over an affine base, every pairwise intersection is affine and the tensor-product map to its coordinate ring is surjective. [[thm-separatedness-gluing-overlap-criterion]]

[F4] The Rees algebra has degree-$n$ part $J^nt^n$, multiplication is the multiplication inherited from $A[t]$, and localization has its fraction arithmetic. A morphism is of finite type when it is quasi-compact and locally of finite type. [[def-rees-algebra-and-rees-module]] [[def-graded-ring-and-graded-module]] [[def-multiplicative-subset-and-localisation]] [[def-locally-finite-type-and-finite-type-morphism]]

[F5] A finite-type algebra over a Noetherian commutative ring is Noetherian. [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

## Proof

1.1 Inverting the two homogeneous elements $a_it,a_jt$ in either order gives the same graded localization. Its degree-zero part is $(A_i)_{u_{ij}}$: a homogeneous degree-zero fraction has the form $z/((a_it)^p(a_jt)^q)$ with $z\in R_{p+q}$ and $p,q\ge0$, and it equals $(z/(a_it)^{p+q})u_{ij}^{-q}$. Every such term lies in that localized $A_i$, and conversely its generators are degree-zero elements in the doubly localized Rees algebra. The same reasoning with $i,j$ exchanged gives the other identification. In particular $u_{ij}$ corresponds to $u_{ji}^{-1}$; on triple overlaps the identifications are the identical maps into the degree-zero part with all three homogeneous elements inverted. They satisfy the identity and cocycle conditions and preserve the canonical maps from $A$. [F1, F4, given, algebra]

2.1 Apply [F2] to these affine opens and overlap maps. They give $X'$ and a morphism $\beta$ over $\operatorname{Spec}A$. Its chart algebras are generated by the finitely many $a_k/a_i$ by [F1], so $\beta$ is locally of finite type by [F4]. Each intersection is the affine open $D(u_{ij})$ of $X_i$. Its coordinate ring is generated by $A_i$ and $u_{ij}^{-1}$; the latter comes from $u_{ji}\in A_j$. Therefore $A_i\otimes_AA_j\to(A_i)_{u_{ij}}$ is surjective. Criterion [F3] proves separatedness. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 On $X_i$, [F1] proves $J A_i=a_iA_i$ with $a_i$ a nonzerodivisor. Fix a generator $a_k$ of $J$ and restrict the base to $D(a_k)$. In $A_i[1/a_k]$ the relation $a_k=a_i u_{ik}$ makes both $a_i$ and $u_{ik}$ invertible, so $A_i[1/a_k]=A[1/a_i,1/a_k]$ by [F1]. These are exactly the principal opens $D(a_i)$ of $\operatorname{Spec}A[1/a_k]$; the chart $i=k$ is all of that scheme. The gluing identifications of step 1.1 agree with these localization identifications, so $\beta^{-1}(D(a_k))\cong D(a_k)$. The opens $D(a_k)$ cover the complement of $V(J)$, proving the asserted isomorphism there. [F1, F4, step 1.1, step 2.1, algebra, construct]

3.2 If $J=(b_1,\ldots,b_n)$ is a second finite generating family, the functions $b_j/a_i$ generate the unit ideal in $A_i$, since a finite expression $a_i=\sum_jc_jb_j$ gives $1=\sum_jc_j(b_j/a_i)$. Hence the opens $D(b_j/a_i)$ cover $X_i$. The calculation in step 1.1 identifies each with the corresponding open $D(a_i/b_j)$ in the chart $A[J/b_j]$, using the same Rees algebra and doubly homogeneous localization. On every overlap these maps agree by the same three-element localization, so [F2] glues them to a canonical isomorphism between the two constructions. These isomorphisms satisfy transitivity for a third generating family, again by the identical localization maps. Localizing the base ring replaces each Rees coefficient module $J^n$ by its localization and each displayed chart by its base localization; products and fractions commute with this operation. Thus the construction commutes with base localization. [F1, F2, F4, step 1.1, step 2.1, algebra, construct]

4.1 If $A$ is Noetherian, each finitely generated $A$-algebra $A_i$ is Noetherian by [F5]. Here no compactness of an arbitrary affine spectrum is needed: for a Noetherian ring $D$, any family of principal opens has the same union as finitely many members. Indeed the ideal generated by their defining elements is finitely generated, each generator has a finite expression in those elements, and a prime contains the whole ideal exactly when it contains the resulting finite subfamily. Refining an arbitrary open cover by principal opens therefore gives a finite subcover, on every open subset as well. Thus the finite affine cover makes $X'$ Noetherian and quasi-compact. Every inverse image of an affine base open is an open subset of this Noetherian scheme, hence quasi-compact; combined with local finite type from step 2.1, this proves that $\beta$ is of finite type in the Noetherian case. If $J=0$, every $a_i$ is zero, so each homogeneous localization inverts zero, every chart is empty, and $X'$ is empty; all conclusions, including the isomorphism over the empty complement of $V(0)$, hold. If $J=A$, its complement is the whole base, so step 3.1 gives $X'\cong\operatorname{Spec}A$. Zero generators simply add empty charts, and the zero base ring gives the empty scheme. This completes every case. [F1, F2, F4, F5, step 2.1, step 3.1, algebra] ∎

## Remarks

This is the affine-chart construction of blowing up, with the finite algebra and gluing written explicitly. It provides the chart geometry used in the constrained-closure separation argument. It does not assert properness or quasi-domination, which remain separate constructions in the Nagata proof.
