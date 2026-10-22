---
id: thm-locally-flat-codimension-three-arc-unknotting
kind: theorem
title: "Locally flat arcs in the four-dimensional product are unknotted"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - lem-locally-flat-collared-arcs-admit-relative-ambient-smoothing
  - lem-smooth-collared-arcs-in-the-four-dimensional-product-are-unknotted
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. L. Bryant, Piecewise Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/pltop.pdf"
      locator: "§7, Theorem 7.8 and Corollary 7.9; §8, Theorems 8.1 and 8.3, pp.30–32"
---

## Statement

Let $M=S^3\times[0,1]$. Let $\alpha:[0,1]\to M$ be a locally flat proper embedding with endpoints $(p,0)$ and $(p,1)$ and with product collars at those endpoints. Then there is a continuous family of homeomorphisms $H_t:M\to M$, $t\in[0,1]$, such that $H_0$ is the identity, every $H_t$ preserves the two boundary levels and is the identity near them, and $H_1(\alpha([0,1]))=\{p\}\times[0,1]$. If in addition $\alpha(s)=(p,s)$ on neighborhoods of $0$ and $1$, the family can be chosen so that $H_1(\alpha(s))=(p,s)$ for every $s$.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|The locally flat pair charts and proper endpoint collars]]

## Facts & Assumptions

**Given:** The locally flat proper arc and its endpoint product collars.

[F1] A locally flat proper parametrized arc in the standard product, smooth near its source endpoints, admits a relative ambient topological isotopy to a smooth parametrized arc, fixed near the two boundary levels. Its finite-chart proof uses explicitly presented controlled smooth embedding classes and inverse-controlled back-and-forth limits, without a choice axiom. [[lem-locally-flat-collared-arcs-admit-relative-ambient-smoothing]]

[F2] A smooth proper arc in this product with endpoints $(p,0),(p,1)$ and image equal to the vertical arc on endpoint product collars is ambiently smoothly isotopic, fixed near the boundary levels, to that vertical arc. With the standard source parametrization near the endpoints, its terminal parametrization is the standard one. [[lem-smooth-collared-arcs-in-the-four-dimensional-product-are-unknotted]]

## Proof

**Given:** $\alpha$ and the specified collars.

1.1 In those collars the image of $\alpha$ is vertical, so write $\alpha(t)=(p,h_0(t))$ near zero and $\alpha(t)=(p,h_1(t))$ near one. Each $h_i$ is an increasing homeomorphism onto its height interval: it is continuous and injective, and the endpoint heights fix its orientation. Choose an increasing homeomorphism $\theta:[0,1]\to[0,1]$ agreeing with the two inverse height functions near the endpoints and interpolate monotonically between them on the remaining middle interval. Then $\beta(s)=\alpha(\theta(s))$ has the same image as $\alpha$ and satisfies $\beta(s)=(p,s)$ on neighborhoods of the source endpoints. In the additional parametrized case take $\theta=\operatorname{id}$. This changes only the parameter used to describe the input image. [given, construct]

2.1 Apply [F1] to $\beta$, obtaining an ambient topological isotopy $A_t$ whose final arc $\gamma(s)=A_1(\beta(s))$ is smoothly embedded. Since $A_t$ is fixed near the boundary levels, $\gamma(s)=(p,s)$ near its endpoints. Apply the parametrized clause of [F2] to $\gamma$, obtaining an ambient smooth isotopy $B_t$ fixed near the boundary levels and satisfying $B_1(\gamma(s))=(p,s)$ for every $s$. [F1, F2, step 1.1, construct]

3.1 Concatenate $A_{2t}$ for $0\le t\le1/2$ with $B_{2t-1}A_1$ for $1/2\le t\le1$. They agree at the joining time. This is a continuous ambient family of homeomorphisms starting at the identity, fixed on a common neighborhood of the two boundary levels. Its terminal map sends the image of $\beta$, and hence the image of $\alpha$, to $\{p\}\times[0,1]$. In the additional parametrized case $\theta=\operatorname{id}$, so it sends $\alpha(s)$ to $(p,s)$ for every $s$. This proves both conclusions without an added choice hypothesis. [step 1.1, step 2.1, construct] ∎

## Parametrization convention

The general conclusion concerns the image of an arc. A boundary-fixed ambient isotopy cannot change a nonstandard source parametrization in its fixed endpoint neighborhood. For example, $\alpha(s)=(p,\varphi(s))$ for an increasing homeomorphism $\varphi$ not equal to the identity near an endpoint already has the required straight image, but cannot satisfy $H_1(\alpha(s))=(p,s)$ there if $H_1$ fixes that neighborhood. The extra endpoint parametrization hypothesis in the second clause is therefore necessary. The image-unknotting assertion is proved above, including the locally flat category.
