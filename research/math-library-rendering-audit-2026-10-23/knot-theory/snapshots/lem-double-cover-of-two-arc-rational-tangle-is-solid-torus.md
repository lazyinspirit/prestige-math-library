---
id: lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
kind: lemma
title: "The double branched cover of the trivial two-arc tangle is a solid torus"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-double-branched-cover-of-an-oriented-link
  - thm-classification-of-connected-covering-spaces
  - def-euler-characteristic-of-a-finite-cw-complex
  - thm-classification-of-compact-connected-surfaces
  - lem-two-disjoint-circles-in-s-two-cobound-an-annulus
  - def-axiom-of-choice
axiom_use: "Assumes AC through compact-surface classification and the annulus supplier; the disk and product branch extensions are constructed explicitly."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §2, proof of Proposition 3.1"
      url: "https://arxiv.org/pdf/math/0309170v1"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $B=D^2\times[0,1]$ be a three-ball and let $A=\{a_1,a_2\}\times[0,1]$ be the trivial pair of vertical properly embedded arcs, with $a_1\ne a_2$ in the interior of $D^2$. The connected two-fold cover of $B\setminus A$ whose meridians about both arcs have monodromy $1\in\mathbb Z/2$ extends across $A$ as a simple branched cover, and its total space is a solid torus.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Two-fold branch-cover convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §2, proof of Proposition 3.1](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** AC, the disk with two marked branch points and its product with an interval.

[F1] A connected two-fold cover of the punctured disk is determined by the homomorphism that sends each puncture meridian to $1$ ([[thm-classification-of-connected-covering-spaces]]).

[F2] The simple branching convention is the local square map in an oriented normal disk ([[def-double-branched-cover-of-an-oriented-link]]). That definition concerns links in $S^3$; the disk and product extensions needed here are constructed below.

[F3] Euler characteristic is the alternating count of cells in a finite CW structure ([[def-euler-characteristic-of-a-finite-cw-complex]]); a compact connected boundaryless orientable surface with Euler characteristic $2$ is $S^2$ ([[thm-classification-of-compact-connected-surfaces]]).

[F4] Under AC, two disjoint smoothly embedded circles on $S^2$ cobound an annulus ([[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]).

## Proof

1.1 Regard $D^2$ as the unit disk in $\mathbb C$. On the Riemann sphere define $q(w)=(a_2w^2+a_1)/(w^2+1)$, with its usual values at the poles and at infinity. This is a degree-two map branched precisely over $a_1,a_2$: $q(w)-a_1=(a_2-a_1)w^2/(1+w^2)$ near $w=0$, and $q(1/v)-a_2=(a_1-a_2)v^2/(1+v^2)$ near $v=0$. The nonzero factors have local square roots, giving exactly the square charts of [F2]. Thus $S=q^{-1}(D^2)$ is a compact oriented surface with smooth boundary and a simple branched map to $D^2$. Its punctured restriction is connected: lifting a meridian about either branch point interchanges the two sheets. By [F1] it is the prescribed disk cover, since the two puncture meridians generate its fundamental group. This constructs the extension rather than assuming it from a link-only definition. [F1, F2, given, construct, algebra]

2.1 Triangulate the disk with both branch points as vertices. A fan triangulation of an $m$-gon has $V=m$, $E=2m-3$, $F=m-2$ and Euler characteristic $1$; inserting interior vertices preserves this count. Each open cell lifts twice except the two branch vertices, which lift once. Consequently $\chi(S)=2\cdot1-2=0$. The boundary monodromy is $1+1=0$, so there are two boundary circles. Capping gives a closed connected orientable surface with Euler characteristic $2$, hence a sphere by [F3]. To apply [F4] with smooth circles in the standard sphere, use the explicit model of step 1.1: the closed exterior disk $\widehat{\mathbb C}\setminus\operatorname{int}D^2$ contains no branch value and is simply connected, so its inverse image consists of two disks by [F1]. Their boundaries are disjoint smooth circles, because $q$ is unramified over $\partial D^2$. Thus $S$ is exactly the closed region between these circles in the standard Riemann sphere, and [F4] identifies it as an annulus. [F1, F3, F4, step 1.1, given, algebra]

3.1 Take $q|_S\times\mathrm{id}_{[0,1]}$. Its local models along the two arcs, including their boundary endpoints, are $(z,t)\mapsto(z^2,t)$ by step 1.1. Away from the arcs it is the connected product cover with the required meridians. Projection of the punctured product to its disk factor induces an isomorphism on fundamental groups, so [F1] identifies this restriction with the specified cover of $B\setminus A$. Transporting the constructed extension along that covering isomorphism proves the required extension. Its total space is $S\times[0,1]\cong S^1\times[0,1]^2$, a solid torus after the usual rounding of product corners. [F1, F2, step 1.1, step 2.1, construct] ∎
