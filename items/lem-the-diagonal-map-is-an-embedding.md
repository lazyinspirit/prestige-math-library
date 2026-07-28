---
id: lem-the-diagonal-map-is-an-embedding
kind: lemma
title: "$\\delta_X$ is a topological embedding of $X$ onto $\\Delta_X$, and $\\langle f, g \\rangle$ is continuous whenever $f$ and $g$ are"
status: draft
origin: session
deps: [def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       def-homeomorphism-and-open-maps, def-subspace-topology-top, def-continuous-map-top]
justified_by: []
aliases: []
landmark: true
short: "the diagonal map is an embedding; pairings are continuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Embedding"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$, $Y$ and $Z$ be topological spaces, with $X \times Y$ and $X \times X$
carrying the product topology and $\Delta_X$ the subspace topology
([[def-the-diagonal-of-a-space]], [[def-product-topology]],
[[def-subspace-topology-top]]). Then:

1. **The pairing is continuous exactly when both components are.** For functions
   $f : Z \to X$ and $g : Z \to Y$, the pairing $\langle f, g \rangle$ is
   continuous if and only if $f$ and $g$ are continuous
   ([[def-continuous-map-top]]).
2. **The diagonal map is an embedding.** $\delta_X : X \to X \times X$ is
   injective and continuous, its image is $\Delta_X$, and the corestriction
   $\delta_X^{0} : X \to \Delta_X$, $\delta_X^{0}(x) = (x,x)$, is a homeomorphism.
   So $\delta_X$ is an embedding ([[def-homeomorphism-and-open-maps]]) and
   $X \cong \Delta_X$.
3. The inverse of $\delta_X^{0}$ is the restriction of the projection $\pi_0$ to
   $\Delta_X$, and this restriction agrees with the restriction of $\pi_1$.

Claim 2 is what licenses reading a property of $\Delta_X$ as a property of $X$:
being a topological property is exactly invariance under homeomorphism
([[def-homeomorphism-and-open-maps]]).

## Facts & Assumptions

**Given:** Topological spaces $X$, $Y$, $Z$; the products $X \times Y$ and $X \times X$ with the product topology; functions $f : Z \to X$ and $g : Z \to Y$; the diagonal $\Delta_X$ with the subspace topology; and the maps $\delta_X$, $\langle f, g \rangle$ of [[def-the-diagonal-of-a-space]].

[A1] $\delta_X(x) = (x,x)$ and $\langle f, g \rangle(z) = (f(z), g(z))$; $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$; and $\pi_0 \circ \delta_X = \pi_1 \circ \delta_X = \mathrm{id}_X$, $\pi_0 \circ \langle f, g \rangle = f$, $\pi_1 \circ \langle f, g \rangle = g$ ([[def-the-diagonal-of-a-space]]).

[L1] A map $h$ into a product is continuous if and only if every component $\pi_i \circ h$ is continuous, and every projection is continuous ([[thm-product-universal-property]], claims 1 and 2).

[L2] The identity map of a space is continuous, since the preimage of an open set under it is that open set ([[def-continuous-map-top]]).

[L3] For $S \subseteq W$ with the subspace topology, a function $g_0 : Z \to S$ is continuous if and only if $\iota \circ g_0 : Z \to W$ is continuous, $\iota$ being the inclusion; and the restriction of a continuous map $W \to Y$ to $S$ is continuous ([[def-subspace-topology-top]]).

[L4] A continuous bijection whose inverse is continuous is a homeomorphism, and a map that is injective and restricts to a homeomorphism onto its image with the subspace topology is an embedding ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ and $g$ are continuous; then the components $\pi_0 \circ \langle f, g \rangle = f$ and $\pi_1 \circ \langle f, g \rangle = g$ of $\langle f, g \rangle$ are continuous, so $\langle f, g \rangle$ is continuous. [A1, L1]

1.2 Suppose $\langle f, g \rangle$ is continuous; then its components $f$ and $g$ are continuous. [A1, L1]

1.3 $\delta_X$ is continuous, its two components both being $\mathrm{id}_X$, which is continuous. [A1, L1, L2]

1.4 $\delta_X$ is injective: if $\delta_X(x) = \delta_X(x')$ then reading the coordinate at $0$ gives $x = x'$. [A1]

1.5 The image of $\delta_X$ is $\Delta_X$: each $(x,x)$ lies in $\Delta_X$, and each $z \in \Delta_X$ satisfies $z = (z_0, z_0) = \delta_X(z_0)$. [A1]

1.6 The restriction $p := \pi_0|_{\Delta_X} : \Delta_X \to X$ is continuous, being the restriction of the continuous $\pi_0$ to a subspace; and $\pi_0|_{\Delta_X} = \pi_1|_{\Delta_X}$, since $z_0 = z_1$ for $z \in \Delta_X$. [A1, L1, L3]

2.1 Steps 1.1 and 1.2 together are claim 1. [step 1.1, step 1.2]

2.2 The corestriction $\delta_X^{0} : X \to \Delta_X$ is continuous, since composing it with the inclusion $\Delta_X \to X \times X$ gives $\delta_X$, which is continuous by step 1.3. [step 1.3, L3]

2.3 $\delta_X^{0}$ and $p$ are mutually inverse: $p(\delta_X^{0}(x)) = \pi_0(x,x) = x$ for $x \in X$, and $\delta_X^{0}(p(z)) = (z_0, z_0) = (z_0, z_1) = z$ for $z \in \Delta_X$, the middle equality holding because $z_0 = z_1$. [step 1.5, step 1.6, A1]

3.1 By steps 2.2, 2.3 and 1.6 the map $\delta_X^{0}$ is a continuous bijection with continuous inverse $p$, hence a homeomorphism, and its inverse is $\pi_0|_{\Delta_X} = \pi_1|_{\Delta_X}$; this is claim 3 and, with steps 1.4 and 1.5, claim 2. [step 1.4, step 1.5, step 1.6, step 2.2, step 2.3, L4]

4.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 3.1 respectively, so the lemma is proved. [step 2.1, step 3.1] ∎

## Remarks

- **The projection restricted to the diagonal is the inverse, and that is why no openness argument is needed.** A continuous bijection is in general not a homeomorphism ([[def-homeomorphism-and-open-maps]]); here the candidate inverse is available for free as a restriction of a projection, so the homeomorphism is exhibited rather than deduced.

- **Nothing in claim 2 uses a separation hypothesis.** Every space, Hausdorff or not, sits inside its own square as the homeomorphic copy $\Delta_X$. What the Hausdorff condition decides is a different question, whether that copy is **closed**, and that is the next item.

- **Claim 1 is the binary case of the characteristic property and is stated separately only because it is used constantly.** For a product of two factors the general statement of [[thm-product-universal-property]] specialises to exactly the displayed equivalence, and the pairing notation is what makes the specialisation usable without re-indexing.
