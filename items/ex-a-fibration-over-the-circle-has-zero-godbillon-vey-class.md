---
id: ex-a-fibration-over-the-circle-has-zero-godbillon-vey-class
kind: example
title: "A fibration over the circle has zero Godbillon-Vey class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class, def-godbillon-vey-class, prop-mapping-torus-foliations-realize-global-reeb-stable-examples, def-closed-and-exact-differential-forms, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 7
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10"
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$. Let $q:M\to S^1$ be a smooth fibre bundle
with connected fibre and let $F$ be the foliation of $M$ by the fibres of $q$. Then $F$
is a transversely oriented codimension-one foliation defined by the closed nowhere-
vanishing $1$-form $\omega=q^{*}d\theta$, where $d\theta$ is the standard volume form on
$S^1$, and consequently $\mathrm{GV}(F)=0$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$. In
particular the fibre foliation of the mapping torus of a diffeomorphism of a closed
surface has zero Godbillon-Vey class.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. A smooth fibre bundle $q:M\to S^1$ with connected fibre, its fibre foliation $F$, and the volume form $d\theta$ on $S^1$.

[F1] A transversely oriented codimension-one foliation defined by a closed nowhere-vanishing one-form has zero Godbillon-Vey class in $H^3_{\mathrm{dR}}(M;\mathbb R)$. ([[cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class]]).

## Verification

**Proof technique:** direct.

1.1 The pullback $\omega=q^{*}d\theta$ is closed because $d\theta$ is closed and pullback commutes with $d$, and it is nowhere vanishing because $q$ is a submersion and $d\theta$ is a volume form; its kernel foliation has the fibres of $q$ as leaves, and since the fibres are connected they are exactly the leaves, so $F$ is a transversely oriented codimension-one foliation defined by the closed form $\omega$. [given, algebra]

2.1 By [F1] the Godbillon-Vey class vanishes, $\mathrm{GV}(F)=0$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$; in particular for the mapping torus of a diffeomorphism of a closed surface the base projection is the bundle map, so its fibre foliation also has zero Godbillon-Vey class, and only the standing countable choice is used. [F1, step 1.1] ∎
