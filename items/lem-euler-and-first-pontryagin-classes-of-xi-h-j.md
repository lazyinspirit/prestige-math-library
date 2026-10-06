---
id: lem-euler-and-first-pontryagin-classes-of-xi-h-j
kind: lemma
title: "Euler and first Pontryagin classes of $\\xi_{h,j}$"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two, lem-degree-four-characteristic-numbers-add-under-clutching-product, def-quaternionic-clutching-bundles-xi-h-j-over-s-four, def-kronecker-evaluation-pairing, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 402, e = (h+j) iota and p_1 = 2(h-j) iota in the fixed orientation convention"
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 1.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "clutching functions and characteristic classes of bundles over spheres"
---

## Statement

Assume the Axiom of Choice as inherited from the characteristic-class
suppliers. Under the fixed quaternionic, base and upper-to-lower clutching
orientations of [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]], the
bundle $\xi_{h,j}$ has
$$e(\xi_{h,j})=(h+j)u,\qquad p_1(\xi_{h,j})=2(h-j)u\in H^4(S^4;\mathbb Z),$$
where $u$ is the positive base generator.

## Facts & Assumptions

**Given:** Integers $h,j$, the bundle $\xi_{h,j}$ and the generator $u\in H^4(S^4;\mathbb Z)$ with $\langle u,[S^4]\rangle=1$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] The clutching map satisfies $g_{h,j}(a)v=a^hva^j$, so for $h,j\ge0$ it is the pointwise product of $h$ copies of $g_{1,0}$ and $j$ copies of $g_{0,1}$; for negative exponents the same holds with the corresponding inverse maps, and $g_{-1,0}=g_{1,0}^{-1}$, $g_{0,-1}=g_{0,1}^{-1}$ ([[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]]).

[L2] The Euler and first Pontryagin evaluations of the bundle clutched by a pointwise product are the sums of the evaluations of the factors, and inversion negates them ([[lem-degree-four-characteristic-numbers-add-under-clutching-product]]).

[L3] The basic left and right bundles satisfy $e=u$ and $p_1=+2u$ (left) and $e=u$, $p_1=-2u$ (right) ([[lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two]]).

[L4] Evaluation against the fundamental class is additive and, since $H^4(S^4;\mathbb Z)=\mathbb Z\cdot u$ with $\langle u,[S^4]\rangle=1$, determines a degree-four class ([[def-kronecker-evaluation-pairing]]).

## Proof

**Proof technique:** direct.

1.1 For $h,j\ge0$, [L1] writes $g_{h,j}$ as the pointwise product of $h$ copies of $g_{1,0}$ and $j$ copies of $g_{0,1}$; applying [L2] inductively with the basic values [L3] gives $\langle e(\xi_{h,j}),[S^4]\rangle=h\cdot1+j\cdot1=h+j$ and $\langle p_1(\xi_{h,j}),[S^4]\rangle=h\cdot2+j\cdot(-2)=2(h-j)$. [L1, L2, L3, A1]

2.1 For arbitrary integers $h,j$, write the clutching as the same product with the inverse maps for the negative exponents; the inverse clause of [L2] negates both evaluations, so the displayed evaluations remain $\langle e(\xi_{h,j}),[S^4]\rangle=h+j$ and $\langle p_1(\xi_{h,j}),[S^4]\rangle=2(h-j)$. [step 1.1, L1, L2]

3.1 By [L4] a degree-four integral class on $S^4$ is determined by its evaluation on $[S^4]$, and $\langle (h+j)u,[S^4]\rangle=h+j$, $\langle 2(h-j)u,[S^4]\rangle=2(h-j)$; comparing with step 2.1 gives $e(\xi_{h,j})=(h+j)u$ and $p_1(\xi_{h,j})=2(h-j)u$, as asserted. [step 2.1, L4] ∎
