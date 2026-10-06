---
id: lem-quotient-map-etale-when-quotient-is-algebraic-space
kind: lemma
title: "Quotient maps of etale equivalence relations are etale surjective"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-quotient-fppf-sheaf-of-a-pre-relation
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-algebraic-space-as-fppf-sheaf
  - def-presentation-of-an-algebraic-space
  - def-representable-morphism-of-presheaves
  - def-etale-morphism-schemes
  - def-axiom-of-choice
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - thm-faithfully-flat-descent-of-flatness
  - thm-etale-equivalent-flat-unramified-fp
  - lem-differentials-base-change
  - lem-etale-stable-base-change-composition
  - thm-flat-finite-presentation-is-open
  - thm-faithfully-flat-ring-map-characterisations
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-quotient-sheaf-base-change-along-flat-lfp-map
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemma 65.10.3"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.10.3 (tag 02WV), printed 15; full proof read, with Remark 4.3 on fppf-local properties"
---

## Statement

Assume the Axiom of Choice inherited from the quotient-sheaf suppliers
([[def-axiom-of-choice]]). Let $j=(s,t)\colon R\to U\times_SU$ be an etale
equivalence relation on an $S$-scheme $U$ over $S$
([[def-groupoid-in-schemes-and-etale-equivalence-relation]]) and let
$F=U/R$ be its fppf quotient sheaf
([[def-quotient-fppf-sheaf-of-a-pre-relation]]). If $F$ is an algebraic space
over $S$ ([[def-algebraic-space-as-fppf-sheaf]]), then the canonical morphism
$c\colon U\to F$ is representable, etale and surjective; hence
$(U,R,U\to F)$ is a presentation of $F$
([[def-presentation-of-an-algebraic-space]]).

## Facts & Assumptions

**Given:** An etale equivalence relation $(U,R,s,t)$ over $S$ with quotient sheaf $F=U/R$, and the assumption that $F$ is an algebraic space; AC.

[F1] $F$ is the sheafification of the naive quotient presheaf; a section $a\colon T\to F$ has an fppf covering $\{\varphi_i\colon T_i\to T\}$ and morphisms $a_i\colon T_i\to U$ with $c\circ a_i=a\circ\varphi_i$, and the pairs $(a_i,a_{i'})$ factor fppf-locally through $R$. Uniqueness from the relation monomorphism makes these transitions agree on overlaps, so the represented sheaf of $R$ descends them to global transitions $r_{ii'}$ ([[def-quotient-fppf-sheaf-of-a-pre-relation]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F2] Under AC, étale morphisms are stable under base change and, for locally finitely presented morphisms, étaleness is equivalent to flatness and vanishing relative differentials. Flatness descends along faithfully flat scalar base change, and differentials commute with scalar base change ([[lem-etale-stable-base-change-composition]], [[thm-etale-equivalent-flat-unramified-fp]], [[thm-faithfully-flat-descent-of-flatness]], [[lem-differentials-base-change]]).

[F3] For an arbitrary morphism $a\colon T\to F$, the fibre product $h_U\times_{F,a}T$ is computed objectwise: its $T'$-points are pairs $(u,\varphi)$ with $u\colon T'\to U$, $\varphi\colon T'\to T$ and $c(u)=a\varphi$ ([[def-representable-morphism-of-presheaves]]).



[F4] Under AC, flat locally finitely presented morphisms are open. A flat ring map with surjective map on spectra is faithfully flat, and faithful flatness reflects exactness, hence detects zero modules ([[thm-flat-finite-presentation-is-open]], [[thm-faithfully-flat-ring-map-characterisations]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

## Proof

1.1 The fibre product is a scheme, fppf-locally on $T$. Let $a\colon T\to F$ and choose the presentation of [F1]. Over $T_i$ the projection $\pi\colon T\times_{a,F,c}U\to T$ base changes to $\pi_i\colon T_i\times_{\varphi_i,T}(T\times_{a,F,c}U)\to T_i$, and by [F3] the source is computed as $T_i\times_{a_i,U,t}R$: a $T'$-point is a pair $(t',r)$ with $t'\colon T'\to T_i$, $r\colon T'\to R$ and $t(r)=a_it'$, which maps to $U$ by $s(r)$ and thus defines a point of the fibre product. Conversely, equality in $F$ gives a local $R$-witness by [F1]; its uniqueness and represented-sheaf descent make it a unique global witness. Thus this map is an isomorphism of presheaves. Since $t$ is étale, $\pi_i$ is the base change of the étale $t$ along $a_i$, hence étale; it is surjective because $t$ is. [F1, F2, F3]

2.1 $\pi$ is representable, etale and surjective. Representability uses the assumed algebraicity of $F$: the sheaf $T\times_FU$ is the pullback of $\Delta_F$ along the scheme $T\times_SU\to F\times F$, hence is a scheme. Each local base change $\pi_i$ is etale by step 1.1. Etaleness descends here as follows. Over an affine target open $\operatorname{Spec}A$, the images of affine opens in the fppf cover form an open covering by [F4]. Quasi-compactness selects finitely many covering affine opens; their disjoint union is an affine fppf refinement $\operatorname{Spec}B\to\operatorname{Spec}A$, and $A\to B$ is faithfully flat by [F4]. For an affine source open $\operatorname{Spec}C$, local finite presentation of the base change means $C\otimes_AB$ is a finitely presented $B$-algebra. Tensor coefficients of its finitely many generators supply finitely many generators of $C$ over $A$, by faithful flat detection of the quotient module. For the resulting presentation $A[x_1,\ldots,x_m]\twoheadrightarrow C$, its kernel extends to the kernel over $B$ by flatness; finitely many tensor coefficients of generators of this extended ideal generate the original ideal by faithful flat detection. Thus $C$ is finitely presented. Flatness descends by [F2], and $\Omega_{C/A}$ vanishes because its scalar extension vanishes by differential base change and faithful flat detection; [F2] then gives etaleness. Surjectivity descends on points, since the cover is onto and each $\pi_i$ is onto. Therefore $c$ is representable, etale and surjective. [F2, F3, F4, step 1.1, given]

3.1 The presentation. By step 2.1 the morphism $c$ is representable, etale and surjective, and $R=U\times_FU$ is the kernel pair of $c$ by the local-witness and descent argument of step 1.1; hence $(U,R,U\to F)$ is a presentation of the algebraic space $F$ in the sense of [[def-presentation-of-an-algebraic-space]]. The Axiom of Choice is inherited from the quotient-sheaf construction of [F1]. [F1, step 1.1, step 2.1] ∎ 