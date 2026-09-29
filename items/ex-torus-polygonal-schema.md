---
id: ex-torus-polygonal-schema
kind: example
title: "Torus commutator polygon"
status: published
origin: pipeline
deps: [def-polygonal-schema-and-edge-pairing, def-two-dimensional-torus, def-circle-as-real-line-mod-integers, prop-real-line-mod-integers-is-compact-and-path-connected, prop-real-line-mod-integers-is-hausdorff, lem-products-preserve-t0-t1-and-hausdorff, def-product-topology, thm-product-universal-property, def-quotient-topology, thm-initial-and-final-characteristic-properties, thm-compactness-under-continuous-maps, def-euler-characteristic-of-a-finite-cw-complex, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 1 §1.2 and Chapter 6 §6.2, printed pp.7–9 and 89–91"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3 Theorem 2, printed pp.3–5"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

The square schema of [[def-polygonal-schema-and-edge-pairing]] with boundary
word $a\,b\,a^{-1}b^{-1}$ realizes the torus
$T^2=(\mathbb R/\mathbb Z)^2$ of [[def-two-dimensional-torus]]. It is
orientable and has $V=1$, $E=2$, $F=1$, hence
$\chi(T^2)=1-2+1=0$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).
This direct finite quotient uses no choice axiom.

## Facts & Assumptions

**Given:** The square $Q=[0,1]^2$ with sides paired by $(s,0)\sim(s,1)$ and
$(0,t)\sim(1,t)$, the one-polygon schema whose boundary word is
$a\,b\,a^{-1}b^{-1}$, and the quotient circle $S^1=\mathbb R/\mathbb Z$ with
projection $p$.

[L1] A polygonal schema is finite data of oriented nondegenerate closed
disks with sides paired by specified homeomorphisms, and its realization is
the quotient; a connected surface schema has each edge class incident with
exactly two face-sides and a single cyclic link at each vertex class; its
realization is a nonempty compact connected boundaryless surface whose finite
CW cells are the vertex classes, the edge pairs and the face disks; in a
one-polygon word a pair with opposite exponents is orientation compatible and
a pair with equal exponents is twisted ([[def-polygonal-schema-and-edge-pairing]]).

[L2] The realization carries the quotient topology, for which a map out of
the quotient is continuous exactly when its composite with the quotient map
is continuous ([[def-quotient-topology]], [[thm-initial-and-final-characteristic-properties]]).

[L3] The circle is $S^1=\mathbb R/\mathbb Z$, where $p(x)=p(y)$ exactly when
$x-y\in\mathbb Z$; it is compact, path connected and Hausdorff
([[def-circle-as-real-line-mod-integers]],
[[prop-real-line-mod-integers-is-compact-and-path-connected]],
[[prop-real-line-mod-integers-is-hausdorff]]).

[L4] The torus is $T^2=S^1\times S^1$ with the product topology
([[def-two-dimensional-torus]]), products of Hausdorff spaces are Hausdorff
([[lem-products-preserve-t0-t1-and-hausdorff]]), and a map into a product is
continuous exactly when its components are
([[def-product-topology]], [[thm-product-universal-property]]).

[L5] A continuous bijection from a compact space onto a Hausdorff space is a
homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L6] The Euler characteristic of a space with finitely many cells is
$\chi(X)=\sum_n(-1)^n c_n(X)$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).

[L7] An integral orientation is a continuous section of the local homology
system whose value generates every fiber; the system is trivialized over
coordinate balls, where a continuous generator section is locally constant,
so a generator prescribed on the face continues across an edge exactly when
the pairing is orientation compatible
([[def-r-orientation-of-a-topological-manifold]],
[[def-orientation-local-system-and-orientation-cover]]).

## Verification

**Proof technique:** direct.

1.1 The bottom and top sides of $Q$ form one paired class and the left and right sides form a second; the four corners are all identified, since the horizontal pairing gives $(0,0)\sim(0,1)$ and $(1,0)\sim(1,1)$ while the vertical pairing gives $(0,0)\sim(1,0)$ and $(0,1)\sim(1,1)$, so the four corner sectors join in the single cyclic link $(0,0)$–$(1,0)$–$(1,1)$–$(0,1)$–$(0,0)$. The square schema is therefore a connected surface schema with $V=1$, $E=2$, $F=1$, and its realization $Y$ is a nonempty compact connected boundaryless surface. [L1]

1.2 The map $f:Q\to T^2$, $f(s,t)=(p(s),p(t))$, is continuous because its two components $p\circ\mathrm{pr}_1$ and $p\circ\mathrm{pr}_2$ are continuous, and $f(s,t)=f(s',t')$ holds exactly when $s-s'\in\mathbb Z$ and $t-t'\in\mathbb Z$; for $s,s'\in[0,1]$ this means $s=s'$ or $\{s,s'\}=\{0,1\}$, and likewise in the second coordinate, so the fibres of $f$ are precisely the classes of the relation on $Q$ generated by the two side pairings. Since $f$ is constant on those classes, it induces a continuous bijection $\bar f:Y\to T^2$ out of the quotient. [given, L2, L3, L4]

2.1 The realization $Y$ is compact by [L1] and $T^2$ is Hausdorff by [L4], so the continuous bijection $\bar f$ is a homeomorphism by [L5]; hence the word $a\,b\,a^{-1}b^{-1}$ realizes the torus $T^2$. [L1, L4, L5, step 1.2]

3.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-2+1=0$ by [L6], and this is the Euler characteristic of $T^2$ by step 2.1. [L1, L6, step 1.1, step 2.1]

4.1 Each of the two letters occurs once with exponent $+1$ and once with exponent $-1$, so by [L1] both pairings are orientation compatible; the generator carried by the oriented face continues unchanged across both edge classes, and its locally constant generator classes supply the continuous generating section of [L7]. Hence $Y\cong T^2$ is orientable. Every ingredient is a finite explicit map or pairing, so no choice axiom is used. [L1, L7, step 1.1, step 2.1] ∎

## Remarks

The word $a\,b\,a^{-1}b^{-1}$ is the genus-one case $g=1$ of the commutator
word $\prod_{i=1}^{g}a_ib_ia_i^{-1}b_i^{-1}$, and the computation here is the
$g=1$ instance of the cell count used later on the A page.
