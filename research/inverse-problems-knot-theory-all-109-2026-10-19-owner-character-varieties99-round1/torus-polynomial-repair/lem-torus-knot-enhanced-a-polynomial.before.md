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
provenance:
  statement: literature-derived
  proof: not-supplied
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

**Given:** Full AC, a positive coprime pair $a>b\ge2$, the torus-knot group presentation, the meridian and longitude words, and the definition of the enhanced A-polynomial.

[F1] The torus-knot group has presentation $\langle x,y\mid x^a=y^b\rangle$ and the marked peripheral words are specified by coprime Bézout data ([[thm-torus-knot-group-presentation]]).

[A1] Computing the one-dimensional peripheral eigenvalue image of the irreducible representation locus requires solving the $SL_2(\mathbb C)$ representation equations, evaluating the longitude word, and eliminating the representation parameters. The explicit matrix and elimination proof is not supplied locally.

## Proof obligation

The source calculation separates $b=2$ from $b>2$ because the central element $x^a=y^b$ has different possible scalar eigenvalues on irreducible representations. The exact eigenvalue relation and its square-free primitive factor must be derived from the peripheral words, with the sign and meridian-longitude order checked. The citations state the formula but do not replace that local calculation. This lemma is escalated.
