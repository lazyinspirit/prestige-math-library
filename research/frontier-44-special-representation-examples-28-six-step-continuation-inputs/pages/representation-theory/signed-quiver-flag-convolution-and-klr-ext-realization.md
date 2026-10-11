---
page: signed-quiver-flag-convolution-and-klr-ext-realization
title: "Signed Quiver Flag Convolution And Klr Ext Realization"
status: draft
items: [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
        thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis,
        thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations,
        thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes]
examples: []
requires:
  - chern-and-pontryagin-classes-by-splitting-and-complexification
  - equivariant-borel-moore-correspondence-convolution-and-constructible-ext
  - leray-hirsch-thom-isomorphism-and-gysin-sequences
  - relations-functions-and-quotients
  - topological-vector-bundles-and-grassmannian-classification
---

**Objective.** This page realizes the signed KLR algebra of a finite loopless quiver, with
arbitrary parallel arrows and arrows in both directions, as the equivariant Ext algebra of a
family of quiver-flag incidence complexes, over any characteristic-zero coefficient field.
For a dimension vector $\beta$ and a word $\nu$ of content $\beta$, the total space
$X_\nu\subset E\times F_\nu$ of stable full flags is a smooth vector bundle over the product of
complete flag varieties, with $\pi_\nu:X_\nu\to E$ projective and $d_\nu=\dim_{\mathbb C}X_\nu$;
the normalized complexes $\pi_{\nu!}k[d_\nu]$ and their fiber products $Z_{\eta,\nu}=X_\eta
\times_EX_\nu$ carry an oriented correspondence convolution, and the diagonal, Chern and
explicitly normalized relative-position classes generate it
([[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]). The relative-position
strata of the incidence varieties form an even Borel–Moore filtration whose closure classes are
a free polynomial basis, torus localization makes the action on the shifted polynomial summands
faithful, and weighted inversion multisets give triangular generation by dots and crossings
([[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis]]); the
geometric generators then satisfy every relation of the intrinsic signed presentation — the
equal-color divided difference, the distinct-color Euler powers, and the multiedge braid
correction with the native sign ([[thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]])
— so that the presentation is the equivariant Ext algebra with the shifted product, without
any semisimplicity, purity or decomposition hypothesis ([[thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes]]).
Only relative-position incidence strata are paved; fibers of $\pi_\nu$ over arbitrary
representations are not addressed. The companion page computes the equal-color nil-Hecke case
and the smallest two-direction multiedge braid.
