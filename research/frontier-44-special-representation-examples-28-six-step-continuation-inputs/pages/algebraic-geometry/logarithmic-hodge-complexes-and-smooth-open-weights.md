---
page: logarithmic-hodge-complexes-and-smooth-open-weights
title: "Logarithmic Hodge Complexes And Smooth Open Weights"
status: draft
requires:
  - analytic-constructible-sheaf-foundations
  - chow-groups-intersection-products-and-grothendieck-riemann-roch
  - compact-kahler-hodge-foundations
  - cup-cap-cross-products-and-cohomology-rings
  - higher-dimensional-resolution-of-singularities
  - mixed-hodge-structures-and-strictness
  - orientations-poincare-lefschetz-and-alexander-duality
  - projective-hodge-polarization-foundations
  - relations-functions-and-quotients
  - relative-homology-excision-and-mayer-vietoris
  - singular-cohomology-and-coefficient-theorems
items: [lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications,
        lem-smooth-projective-modification-preserves-open-cohomology-images,
        thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]
examples: []
---

This page constructs the logarithmic de Rham complex of a smooth quasiprojective
complex variety and reads off the weight filtration on its open cohomology.
[[lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications]]
first supplies the geometric input: every smooth quasiprojective $U$ has a
smooth projective compactification whose reduced boundary is a simple normal
crossings divisor, finitely many compactifications are dominated by another
one restricting to the identity over $U$, and morphisms extend after modifying
the source compactification. Its proof derives the projectivity of the
resolution and principalization blowups from Serre generation and the
graph-closure corollary, so it does not rely on a projectivity clause that the
published resolution statements do not state.
[[lem-smooth-projective-modification-preserves-open-cohomology-images]] then
shows that a proper morphism between smooth projective compactifications of
the same open variety, equal pure dimension and restricting to the identity
over $U$, does not change the image of $H^n(-;\mathbb Q)$ in $H^n(U;\mathbb Q)$;
the proof compares the two restriction maps through Poincare duality, the
cap-cup and projection formulas and the compact-support extension, and its
second sentence records that the compactification-image formula may be
computed from an SNC compactification even when the compactification at hand
is not SNC.

[[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]] is the
page's main result. For an SNC compactification $X$ of $U$ with boundary $D$ it
builds the logarithmic complex $\Omega^\bullet_X(\log D)$ with the pole-count
weight filtration $W$ and the degree Hodge filtration $F$, computes its graded
pieces as the de Rham complexes of the stratum intersections
$D^{[a]}$, exhibits it as a rational cohomological mixed Hodge complex whose
$E_1$-page is $E_1^{-a,q}=H^{q-2a}(D^{[a]};\mathbb Q)(-a)$, and obtains a
functorial rational mixed Hodge structure on $H^n(U,\mathbb Q)$ whose weights
are at least $n$ and whose top weight is the compactification image
$W_nH^n(U,\mathbb Q)=\operatorname{im}(H^n(X,\mathbb Q)\to H^n(U,\mathbb Q))$; the
independence of the compactification combines the domination clause of the
first lemma with the modification lemma, and the arbitrary smooth projective
case is reduced to the SNC one through that same domination.

Open obligations of the main theorem are recorded in its remarks: the detailed
local polydisc computation of the filtered comparison of the logarithmic
complex with the truncated de Rham complex of $U$, and the Hodge-opposition
clause inherited from the mixed Hodge complex lemma of the mixed-Hodge page,
whose remark already records the missing recurrent-versus-induced filtration
comparison. The purely vector-space statements (purity of the $E_1$ and $E_2$
terms, degeneration at $E_2$, the weight bound and the image formula) do not
depend on the second obligation. The companion examples page verifies the
conventions on the punctured line.
