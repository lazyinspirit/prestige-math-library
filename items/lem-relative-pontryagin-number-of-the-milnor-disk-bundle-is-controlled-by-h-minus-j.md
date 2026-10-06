---
id: lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j
kind: lemma
title: "Relative Pontryagin square of the Milnor disk bundle"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, lem-euler-and-first-pontryagin-classes-of-xi-h-j, lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting, lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator, lem-relative-pontryagin-square-equals-mixed-evaluation, thm-thom-isomorphism-for-oriented-vector-bundles, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-relative-cup-product, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
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
      locator: "printed p. 403, the relative Pontryagin square of the disk bundle equals 4(h-j)^2"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, Thom class and relative evaluation"
---

## Statement

Assume the Axiom of Choice as inherited from the Thom and characteristic-class
suppliers. Let $h+j=\varepsilon\in\{+1,-1\}$ and $k=h-j$. Then the first
Pontryagin class $p_1(TW_{h,j})$ has a unique relative lift
$\bar p_1\in H^4(W_{h,j},M_{h,j};\mathbb Z)$, and
$$q(W_{h,j}):=\langle\bar p_1\smile\bar p_1,[W_{h,j},M_{h,j}]\rangle=4\varepsilon k^2 .$$

## Facts & Assumptions

**Given:** Integers $h,j$ with $\varepsilon=h+j=\pm1$, $k=h-j$, the disk bundle $W=D(\xi_{h,j})$, its boundary $M=S(\xi_{h,j})$, the projection $\pi$, the classes $x=\pi^*u$ and the Thom generator $U$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] $e(\xi_{h,j})=\varepsilon u$ and $p_1(\xi_{h,j})=2ku$ ([[lem-euler-and-first-pontryagin-classes-of-xi-h-j]]).

[L2] $p_1(TW)=2k\,x$ with $x=\pi^*u$ ([[lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting]]).

[L3] The Thom theorem gives $H^4(W,M;\mathbb Z)=\mathbb Z\cdot U$ and $H^4(W;\mathbb Z)=\mathbb Z\cdot x$. Since the zero section and projection are homotopy inverses, the Euler-class identity $s^*j(U)=e(\xi_{h,j})$ gives $j(U)=\pi^*e(\xi_{h,j})$ in $H^4(W;\mathbb Z)$ ([[thm-thom-isomorphism-for-oriented-vector-bundles]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[def-milnor-sphere-bundle-m-h-j]]).

[L4] The normalized evaluation satisfies $\langle U\smile x,[W,M]\rangle=1$ ([[lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator]]).

[L5] For $a\in H^4(W,M;\mathbb Z)$, $\langle a\smile a,[W,M]\rangle=\langle a\smile j(a),[W,M]\rangle$ and the mixed evaluation uses the relative cup product ([[lem-relative-pontryagin-square-equals-mixed-evaluation]], [[def-relative-cup-product]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] and [L1] the map $j$ sends the generator $U$ to $\varepsilon x$ with $\varepsilon=\pm1$, so it is an isomorphism and $p_1(TW)=2kx$ of [L2] has the unique relative lift $\bar p_1=2k\varepsilon U$. [L1, L2, L3, A1]

2.1 Using [L5] and [L4], $q(W)=\langle(2k\varepsilon U)\smile(2k x),[W,M]\rangle=4\varepsilon k^2\langle U\smile x,[W,M]\rangle=4\varepsilon k^2$, since the mixed evaluation equals the relative square. [step 1.1, L4, L5] ∎
