---
id: lem-nontrivial-knot-exterior-boundary-incompressible
kind: lemma
title: The boundary of a nontrivial knot exterior is incompressible
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic
  - def-axiom-of-choice
  - def-countable-choice
  - lem-knot-genus-zero-iff-unknot
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
proof_strategy: direct
axiom_use: Assumes full AC through the knot-exterior homology supplier; the
  torus-slope and annulus arguments are finite, and the final disk-to-unknot
  step inherits countable choice from the genus-zero supplier.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and
        Applications: Lecture Notes, §4.4"
      url: https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf
      locator: §4.4, Lemma 4.4.1, Exercise 4.4.2, and Theorem 4.4.8.
    - title: P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §4.3
      url: https://arxiv.org/pdf/0807.4891
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth knot that is not ambient isotopic to the standard unknot, let $E_K$ be its chosen compact exterior, and let $T_K=\partial E_K$. There is no properly embedded disk $D\subset E_K$ whose boundary is a simple closed curve in $T_K$ that is not null-homotopic in $T_K$.

## Statement references

[[def-knot-exterior|Chosen compact knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[thm-knot-exterior-homology-and-longitude|Exterior homology and the preferred longitude]]

[Cattabriga–Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.4](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), §4.3](https://arxiv.org/pdf/0807.4891)

## Facts & Assumptions

**Given:** Full AC, a smooth nontrivial knot $K$, its chosen exterior $E_K$, and a properly embedded disk $D$ whose boundary $c=\partial D$ is essential on $T_K$.

[F1] The Axiom of Choice is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] The boundary torus has a basis $[\mu],[\lambda]$ for which $[\mu]$ generates $H_1(E_K;\mathbb Z)$ and the kernel of $H_1(T_K;\mathbb Z)\to H_1(E_K;\mathbb Z)$ is $\mathbb Z[\lambda]$; the preferred longitude has degree one under projection to the oriented core ([[thm-knot-exterior-homology-and-longitude]], Statement; [[def-knot-meridian-and-preferred-longitude]], Definition).

[F3] Essential simple curves on a torus with the same primitive homology class up to orientation are isotopic on the torus ([[lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic]], Statement).

[F4] Under countable choice a smooth knot has Seifert genus zero exactly when it is smoothly ambient isotopic to the unknot ([[lem-knot-genus-zero-iff-unknot]]). Full AC in [F1] supplies countable choice by restriction to any countable family.

[F5] A compact smooth boundary-preimage disk in the compact smooth exterior can be made neat by a smooth isotopy of embeddings fixing its boundary pointwise. Only the resulting disk, not a smooth ambient extension at an original tangency, is needed. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]]

## Proof

1.1 Under the full-AC hypothesis [F1], the supplier in [F2] applies. Since $c$ is essential on the torus, it is nonseparating: a separating simple curve on a genus-one surface cuts off a disk on one side and is null-homotopic. Cutting the torus along $c$ therefore gives a connected orientable surface with two boundary circles and Euler characteristic zero, hence an annulus. An embedded arc joining its two boundary circles closes after regluing to a loop meeting $c$ transversely once. The algebraic intersection is therefore $\pm1$, so $[c]$ is primitive in $H_1(T_K;\mathbb Z)$. [F1, F2, given, construct, algebra]

2.1 Because $c=\partial D$, its image in $H_1(E_K;\mathbb Z)$ is zero. By [F2], write $[c]=q[\lambda]$ for an integer $q$. Since both $[c]$ and $[\lambda]$ are primitive, $q=\pm1$. Orient $c$ to make $[c]=[\lambda]$. By [F3], $c$ is isotopic on $T_K$ to a chosen simple representative of the preferred longitude. [F2, F3, step 1.1, algebra]

3.1 In product coordinates $N(K)\cong S^1\times D^2$, the curve $c$ has core degree one by [F2], so its torus class is $(1,k)$ for an integer $k$. The graph $\gamma_k(t)=(e^{it},e^{ikt})$ has that class. By [F3], choose a smooth isotopy $c_s(t)=(u_s(t),z_s(t))$ on the boundary torus from $c$ to $\gamma_k$, stationary near its final time after smooth reparametrization. This isotopy need not trace an embedded annulus on the torus itself. Instead choose a smooth strictly decreasing radius $r(s)$ from $1$ to $1/2$ with nonzero derivative, and use $(s,t)\mapsto(u_s(t),r(s)z_s(t))$ in the tube. Distinct $s$ have distinct radii, while each fixed-$s$ curve is embedded; moreover the time derivative has nonzero radial component and is independent of its circle tangent. This gives a smooth embedded annulus with outer boundary exactly $c$ and inner boundary the radius-$1/2$ copy of $\gamma_k$. Continue it inward by $(r,t)\mapsto(e^{it},r e^{ikt})$ for $0\le r\le1/2$. The stationary final curve makes the collars agree; the inward annulus is smooth and regular even at $r=0$ and has core boundary $K$. The resulting annulus lies otherwise in the interior of $N(K)$. [F2, F3, step 2.1, construct]

4.1 If the given disk is only boundary-preimage embedded, first replace it using [F5] by a neat smooth disk in $E_K$ with the same boundary $c$. The annulus of step 3.1 has nonzero inward radial derivative at $c$ on the tube side. The resulting proper disk $D$ on the exterior side and this annulus on the tube side meet only along $c$. Their union is an embedded disk with boundary $K$; smoothing the corner along $c$ in a product collar leaves that boundary fixed. Thus $K$ bounds a smooth disk, which is a genus-zero Seifert surface. Full AC supplies the countable-choice hypothesis of [F4], so [F4] makes $K$ ambient isotopic to the unknot, contrary to the hypothesis. Therefore no such disk $D$ exists. [F1, F4, F5, given, step 3.1, construct] ∎
