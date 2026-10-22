---
id: lem-smooth-radial-circle-families-bound-standard-ball-disk-pairs
kind: lemma
title: "Smooth radial circle families bound standard ball-disk pairs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-isotopy-extension
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the plane Jordan–Schönflies extension supplier. It implies countable choice for selecting one compact smooth isotopy extension on each dyadic radius interval. No limit of angular homeomorphisms is assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; local surface survival under arc collapse, with the radial-family criterion proved here"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "Carsten Thomassen, The Jordan–Schönflies Theorem and the Classification of Surfaces, Theorem 2.1"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
---

## Statement

Assume full AC. Let $c:S^1\times(0,1]\to S^2$ be smooth, with each $c_r=c(\cdot,r)$ a smooth embedding. Define the radial surface in the closed unit three-ball by
$$D=\{0\}\cup\{r c_r(s):s\in S^1,\ 0<r\le1\}.$$
Then there is a homeomorphism of pairs $(B^3,D)\cong(B^3,B^3\cap\{z=0\})$. In particular $D$ is a properly embedded locally flat closed topological disk with boundary $c_1(S^1)$. No convergence or derivative bound for $c_r$ as $r\downarrow0$ is required.

More precisely there is a homeomorphism of $B^3$ fixing its boundary pointwise and taking $D$ to the cone on $c_1(S^1)$. A further radial homeomorphism takes that cone to the equatorial disk. This is a criterion for a supplied smooth family of radial circles, rather than an assertion that an arbitrary arc-collapse image satisfies that criterion.

## Statement references

[[def-axiom-of-choice]]

[[thm-isotopy-extension]]

[[lem-jordan-schoenflies-extension-for-plane-curves]]

## Facts & Assumptions

**Given:** Full AC and the smooth positive-radius family of embedded circles in the unit two-sphere.

[F1] An isotopy of a compact smooth submanifold in a smooth ambient manifold extends to an ambient isotopy under countable choice. ([[thm-isotopy-extension]])

[F2] Under full AC, every homeomorphism between two plane Jordan curves extends to a homeomorphism of the plane carrying their bounded and unbounded complementary regions to the corresponding regions. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

## Proof

1.1 The map $(s,r)\mapsto r c_r(s)$ extends continuously from $S^1\times(0,1]$ to the cone on $S^1$ by sending its apex to zero. Indeed its norm is exactly $r$, so continuity at that apex is uniform in $s$. Two nonzero images have equal norm only when their radii agree, and then injectivity of $c_r$ makes their circle parameters agree. Thus this is a continuous bijection from a compact disk onto $D$, and hence a homeomorphism to that Hausdorff subspace of $B^3$. Its boundary is exactly $c_1(S^1)$. This proves the intrinsic disk assertion before establishing its ambient local flatness. [given, construct]

1.2 Put $r_n=2^{-n}$ for $n\ge0$. On each compact interval $[r_{n+1},r_n]$ the supplied family is a smooth isotopy of embedded circles. Apply [F1] to the fixed source circle $c_{r_n}(S^1)$, parametrizing its isotope at radius $r$ by $c_r\circ c_{r_n}^{-1}$. Obtain ambient diffeomorphisms $g_{n,r}$ of $S^2$, continuous with continuous inverses in $r$, such that $g_{n,r_n}=\operatorname{id}$ and $g_{n,r}(c_{r_n}(S^1))=c_r(S^1)$. Full AC supplies countable choice to select one such compact extension for each $n$. There is no compact-isotopy theorem being applied at the missing endpoint $r=0$. [given, F1, construct]

2.1 Define $h_1=\operatorname{id}$, and inductively on each interval put $h_r=g_{n,r}\circ h_{r_n}$. Its value at the lower endpoint defines $h_{r_{n+1}}$ for the next interval. At a shared endpoint the next $g$ is the identity, so the definitions agree. Consequently $h_r$ and $h_r^{-1}$ depend continuously on $r>0$, since every positive radius has a neighborhood meeting only finitely many of those intervals. Induction gives $h_r(c_1(S^1))=c_r(S^1)$ for every $r>0$. No angular limit at radius zero has been selected or inferred. [step 1.2, construct]

3.1 On the punctured ball set $H(r\omega)=r h_r^{-1}(\omega)$, and put $H(0)=0$. Its inverse is $H^{-1}(r\omega)=r h_r(\omega)$ with the same value at zero. These maps are continuous away from zero by step 2.1, and are continuous at zero because they retain the norm $r$. Thus $H$ is a homeomorphism of the closed ball. It fixes the boundary because $h_1$ is the identity, and it carries $D$ exactly to the cone on $c_1(S^1)$. Even unbounded angular motion as $r$ decreases causes no continuity issue at zero, since both maps preserve radius. [step 1.1, step 2.1, construct]

4.1 The smooth embedded circle $C=c_1(S^1)$ misses some point $p$ of $S^2$: near any of its points a surface coordinate neighborhood contains just one smooth graph arc, by the immersion property and compact injectivity, and contains points off that arc. Stereographic projection with pole $p$ sends $C$ to a plane Jordan curve. Apply [F2] to a homeomorphism from that curve to the unit circle. The resulting plane homeomorphism extends to the one-point compactifications: for any compact target set its inverse image is compact, so a sufficiently far-out source neighborhood maps outside it, and the same holds for the inverse. Thus it gives a homeomorphism $J:S^2\to S^2$ taking $C$ to the standard equator. Extend it radially by $r\omega\mapsto rJ(\omega)$ and zero to zero. This is a ball homeomorphism, again by radius preservation, and sends the cone on $C$ to the equatorial disk. Compose it with $H$ from step 3.1. The resulting homeomorphism of pairs proves the claimed standard ball-disk pair and therefore local flatness, including at the center and at the boundary. [step 3.1, F2, construct] ∎
