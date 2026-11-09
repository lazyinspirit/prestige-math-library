---
title: Seminormality and seminormalization
status: draft
research_item: def-seminormal-scheme-interface
dependency_level: 2
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

- [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)
- [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube)
- [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced)
- [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness)
- [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module)
- [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input)

## Definition
A commutative ring $A$ is **seminormal** if, whenever $x^3=y^2$ in $A$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal if every point has an affine open neighbourhood whose coordinate ring is seminormal. In particular it is reduced: its affine coordinate rings have no nonzero nilpotents.

A morphism $f:Y\to X$ is **subintegral** if it is integral, is bijective on underlying points, and induces an isomorphism $\kappa(x)\to\kappa(y)$ at every point $y$ over $x$. Integral means affine and given on affine inverse images by integral ring maps; an element is integral when it satisfies a monic polynomial over the base ring. A universal homeomorphism is a morphism whose pullback along every scheme morphism is a homeomorphism on underlying spaces. Integral, bijective morphisms inducing residue-field isomorphisms are universal homeomorphisms, and conversely a universal homeomorphism with residue-field isomorphisms is integral and bijective.

For a scheme $X$, its **seminormalization** $X^{\mathrm{sn}}\to X$ is the initial object in the category of subintegral morphisms to $X$: it has a unique $X$-morphism to every object of that category. Its source is seminormal. The construction is functorial: every morphism $h:Y\to X$ induces a unique compatible $h^{\mathrm{sn}}:Y^{\mathrm{sn}}\to X^{\mathrm{sn}}$. The map factors through the reduction $X_{\mathrm{red}}$, the scheme obtained by quotienting the structure sheaf by its nilradical. When $X$ is locally of finite type over a field, the resulting map $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite. In this scope a normal scheme is seminormal, and a reduced scheme is seminormal exactly when every finite subintegral morphism to it from a reduced scheme is an isomorphism.

## Justification
The initial object and functoriality are the established input [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input); [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness) proves uniqueness up to unique isomorphism. The standard characterization of universal homeomorphisms as integral, surjective and universally injective identifies the two formulations: residue-field isomorphisms make the fibers universally injective. A map from a reduced scheme factors uniquely through the reduction, because its structure sheaf has no nonzero nilpotents.

The square-cube condition implies reducedness by [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced), while [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness) explains uniqueness in any reduced ring. As a local illustration, every integrally closed domain satisfies the condition by [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube). The scheme-level normality implication is supplied by the cited input. Its finite-type construction uses an intermediate ring in a finite normalization; [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module) supplies the noetherian finiteness step. If a reduced finite-type scheme passes the finite-morphism test, apply that test to its finite seminormalization; the resulting isomorphism makes it seminormal. Conversely, the input proves the stronger test for all subintegral morphisms with reduced source.
