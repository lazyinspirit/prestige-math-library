---
id: lem-torus-knot-enhanced-a-polynomial
kind: lemma
title: "Enhanced A-polynomial of a torus knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - def-enhanced-a-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), Example 2.13"
      url: "https://arxiv.org/html/2405.19197v2"
    - title: "Yi Ni and Xingru Zhang, Characterizing slopes for torus knots, Lemma 2.1"
      url: "https://arxiv.org/abs/1712.04012"
---

## Statement

Assume full AC and let $a>b\ge2$ be coprime positive integers. With the meridian-longitude and exponent conventions used for the enhanced A-polynomial, the enhanced A-polynomial of $T_{a,b}$ is, up to multiplication by a Laurent unit,
$$\widetilde A_{T_{a,b}}(M,L)=\begin{cases}1+M^{2a}L,&b=2,\\-1+M^{2ab}L^2,&b>2.\end{cases}$$
If $K$ is the unknot, then $\widetilde A_K=1$. The nontrivial torus-knot Newton polygon is therefore a line segment whose slope in the $(a,b)\mapsto M^bL^a$ convention is $ab$.

## Statement references

[[def-enhanced-a-polynomial|Enhanced A-polynomial convention]]

[[thm-torus-knot-group-presentation|Torus-knot group and peripheral words]]

[Baldwin and Sivek, Example 2.13](https://arxiv.org/html/2405.19197v2)

[Ni and Zhang, Lemma 2.1](https://arxiv.org/abs/1712.04012)

## Facts & Assumptions

**Given:** Full AC, the oriented positive coprime torus knot and original meridian-longitude and Newton-coordinate conventions.

[F1] The actual torus-knot group/peripheral supplier gives $G=\langle x,y\mid x^a=y^b\rangle$, central $h=x^a=y^b$, positive meridian $\mu=y^\alpha x^\beta$ with $a\alpha+b\beta=1$, and preferred longitude $\lambda=h\mu^{-ab}$ ([[thm-torus-knot-group-presentation]]).

[F2] For exactly these group words, the complete irreducible peripheral eigenvalue-locus ideal is $(1+M^{2a}L)$ for $b=2$ and $(M^{2ab}L^2-1)$ for $b>2$. The proof supplies explicit irreducible matrix families with a cofinite set of meridian values and proves the exact radical ideal, including exceptional representations ([[lem-torus-presentation-irreducible-peripheral-eigenvalue-curves]]).

[F3] The crossing-free unknot has group $\mathbb Z$, by the actual one-generator, no-relator calculation in [[ex-knot-kt-01-worked-cases]].

[F4] The enhanced A-polynomial defines the reduced union of one-dimensional peripheral eigenvalue-image closure components from irreducible characters, with primitive integer normalization ([[def-enhanced-a-polynomial]]).

## Proof

1.1 Apply [F1] with the given positive integers $a,b$. Its meridian and longitude are exactly the words required in [F2], including the sign and order of the positive meridian. For $b=2$, [F2] gives a single graph $L=-M^{-2a}$ with exact ideal $(1+M^{2a}L)$. For $b>2$ it gives the two graphs $L=\pm M^{-ab}$ with exact ideal $(M^{2ab}L^2-1)$. Each graph is a one-dimensional closed copy of $\mathbb C^*$ under its meridian coordinate; the exact graph ideals in [F2] prove that no additional isolated or other-dimensional image component contributes. The reduced union in [F4] therefore has precisely the displayed equation. These integer polynomials are primitive because their nonzero coefficients are $1,-1$, and square-free because [F2] identifies the graph ideals as distinct prime ideals with radical intersection. Thus they have the asserted normalization up to a Laurent unit. [F1, F2, F4, given, construct, algebra]

1.2 For the unknot, [F3] identifies a representation with a single determinant-one matrix. Its complex eigenvector supplies a line invariant under that matrix and all its positive and negative powers. Hence there is no irreducible representation of the unknot group. The defining enhanced curve union in [F4] is empty, with unit vanishing ideal, so its primitive generator is $1$. This argument concerns only the unknot and makes no converse detection claim requiring instanton theory. [F3, F4, given, algebra]

2.1 In the specified exponent coordinates a monomial $M^jL^i$ corresponds to $(i,j)$. The two terms for $b=2$ give points $(0,0)$ and $(1,2a)$, so the segment has slope $2a=ab$. For $b>2$ the points are $(0,0)$ and $(2,2ab)$, so the slope is again $ab$. Multiplication by a Laurent unit translates both points and leaves the slope unchanged. The group/peripheral supplier retains its original full-AC hypothesis, whereas the new finite matrix calculation adds no choice principle. This proves every clause with the original positive-knot and peripheral conventions. [F1, step 1.1, given, algebra] ∎
