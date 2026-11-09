---
title: Derived cdh localization
status: published
research_item: def-cdh-derived-localization
dependency_level: 12
---

PDF p. 6: Lcdh and truncation in Proposition 2.6

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)


## Definition
Assume the Axiom of Choice and the fixed universe bounds of [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Fix the small cdh site $\mathcal C$ of [def-cdh-topology-interface](item-def-cdh-topology-interface). A presheaf of abelian groups is a contravariant functor $\mathcal C\to\operatorname{Ab}$. A complex-valued presheaf means a cochain complex of such presheaves. Its derived category $D(\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C))$ is obtained by inverting objectwise quasi-isomorphisms: maps inducing isomorphisms on cohomology at every object of $\mathcal C$.

Let $a$ be cdh sheafification of abelian presheaves and $i$ the inclusion of abelian sheaves into abelian presheaves. For a complex $C$, apply $a$ degreewise, choose a quasi-isomorphism $aC\to I$ to a K-injective complex of cdh sheaves, and define $L_{\mathrm{cdh}}C$ to be the object represented by the underlying presheaf complex $iI$. A K-injective complex is one for which every chain map from an acyclic complex is chain-homotopic to zero. The unit $C\to L_{\mathrm{cdh}}C$ is induced by $C\to iaC\to iI$ in the derived category of presheaves.

A morphism of complexes is a **cdh local equivalence** if its degreewise sheafification is a quasi-isomorphism of complexes of cdh sheaves. An object $E$ of the derived presheaf category is **cdh-local** if, for every cdh local equivalence $u:A\to B$, precomposition with $u$ induces a bijection $\operatorname{Hom}(B,E)\to\operatorname{Hom}(A,E)$. Equivalently, $E$ is cdh-local exactly when its unit $E\to L_{\mathrm{cdh}}E$ is an isomorphism. Here equivalence means isomorphism in the indicated derived category, not an objectwise isomorphism of complexes.

For $X$ an object of the chosen site, evaluation of $L_{\mathrm{cdh}}C$ at $X$ is represented by $I(X)$ and hence is $R\Gamma_{\mathrm{cdh}}(X,aC)$ in $D(\operatorname{Ab})$ as defined in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). This convention uses unbounded derived sheaves and their derived sections; it is the hypercomplete derived-sheaf convention. No assertion is made that ordinary Čech descent alone implies locality. The truncation $\tau^{\leq n}C$ is the objectwise cohomological truncation, with degree $n$ equal to the kernel of $d^n$, degrees below $n$ unchanged and degrees above $n$ zero. Sheafification of cohomology presheaves, derived localization, truncation and evaluation are distinct operations; a proposed interchange or comparison with another topology requires its own hypotheses.

## Justification
The already stated Choice premise is used through the imported K-injective resolution-existence construction in [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

The cdh site and its topology are fixed by [def-cdh-topology-interface](item-def-cdh-topology-interface). The plus construction and its universal property in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) apply to abelian-group objects: matching families, restrictions and equivalence on a common covering subsieve are compatible with addition. Thus $a$ is left adjoint to $i$ on abelian groups. It is exact. Indeed, at each object the plus construction is a filtered colimit, over covering sieves ordered by refinement, of matching-family groups. Matching families preserve finite limits, and filtered colimits of abelian groups commute with finite limits; hence $a$ preserves kernels. If a map of presheaves is objectwise surjective, every section of the sheafification of its target locally lifts: represent the section locally by a target-presheaf section and lift that section objectwise. A locally surjective map of sheaves is an epimorphism, since two sheaf morphisms agreeing after local lifts agree on a cover and therefore agree globally. Applying this to the objectwise cokernel factorization shows that $a$ also preserves cokernels.

The supplier [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) gives K-injective resolutions of unbounded complexes of abelian sheaves under the stated size and choice assumptions. Since $a$ is exact, it sends acyclic presheaf complexes to acyclic sheaf complexes. The ordinary adjunction therefore identifies chain maps from an acyclic presheaf complex to $iI$, up to homotopy, with those from its sheafification to $I$; these vanish. Thus $iI$ is K-injective as a presheaf complex. The adjunction on complexes consequently induces the derived adjunction $a:D(\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C))\rightleftarrows D(\operatorname{Sh}_{\operatorname{Ab}}(\mathcal C)):Ri$, where $Ri$ is represented by $iI$. The counit $aRi\to\mathrm{id}$ is an isomorphism, because $aiI=I$ and $aC\to I$ is a quasi-isomorphism. Hence $Ri$ is fully faithful and $Ri\,a$ is a localization, independent up to unique isomorphism of the chosen resolution.

For a local equivalence $u$, the derived adjunction makes precomposition by $u$ bijective on maps into any $RiF$. Conversely, the unit of any object is a local equivalence because applying $a$ identifies it with the resolution map $aC\to I$. If an object is local, applying its defining bijection to its unit produces a retraction; naturality of the unit and the isomorphism of the unit on objects in the image of $Ri$ show that this retraction is also an inverse. This proves the stated characterization. Finally, evaluation of $iI$ at $X$ is $I(X)$, and [def-derived-sections-on-sites](item-def-derived-sections-on-sites) identifies it with derived cdh sections. The definition makes no comparison with Čech descent or with another site.
