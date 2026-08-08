---
id: lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
kind: lemma
title: "The graph of a continuous map into a Hausdorff space is closed in the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       lem-continuity-is-local-and-pastes, def-hausdorff-space, def-continuous-map-top]
justified_by: []
aliases: [lem-closed-graph-of-a-continuous-map]
landmark: true
short: "a continuous map into a Hausdorff space has closed graph"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be Hausdorff
([[def-hausdorff-space]]) and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Then the **graph**

$$G_f \;:=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\} \;=\; \{\, (x, f(x)) : x \in X \,\}$$

is closed in $X \times Y$ with the product topology ([[def-product-topology]]).

No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and
the continuity hypothesis is on $f$; both are used, and the converse implication
— that a closed graph forces continuity — needs a *different* hypothesis on the
codomain and is treated separately.

## Facts & Assumptions

**Given:** A topological space $X$, a Hausdorff space $Y$, a continuous map $f : X \to Y$, and the product $X \times Y$ with the product topology and projections $\pi_0, \pi_1$.

[A1] $G_f = \{\, z \in X \times Y : (f \circ \pi_0)(z) = \pi_1(z) \,\}$, since $(f \circ \pi_0)(z) = f(z_0)$ and $\pi_1(z) = z_1$ ([[def-product-topology]], [[def-the-diagonal-of-a-space]]).

[L1] The projections $\pi_0 : X \times Y \to X$ and $\pi_1 : X \times Y \to Y$ are continuous ([[thm-product-universal-property]], claim 1).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] If $Y$ is Hausdorff and $u, v : Z \to Y$ are continuous, then $\{\, z \in Z : u(z) = v(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 $\pi_0$ and $\pi_1$ are continuous. [L1]

2.1 $f \circ \pi_0 : X \times Y \to Y$ is continuous, being a composite of the continuous $\pi_0$ with the continuous $f$. [step 1.1, L2]

3.1 By [A1] the graph $G_f$ is the agreement set of the two continuous maps $f \circ \pi_0$ and $\pi_1$ from $X \times Y$ to the Hausdorff space $Y$, so it is closed in $X \times Y$. [step 1.1, step 2.1, A1, L3] ∎

## Remarks

- **The graph is an agreement set, and that is the whole proof.** Writing $G_f$ as the set where $f \circ \pi_0$ and $\pi_1$ agree turns a statement about a map into a statement about two maps out of one space, which is exactly the shape [[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]] handles. Equivalently $G_f = \langle f \circ \pi_0, \pi_1 \rangle^{-1}[\Delta_Y]$, the preimage of the diagonal ([[def-the-diagonal-of-a-space]]).

- **The Hausdorff hypothesis is not removable.** Let $X$ be a one-point space and let $Y = \{a,b\}$ with $a \ne b$ carry the indiscrete topology ([[def-standard-topologies]]). Every function $X \to Y$ is continuous, the only preimages to check being those of $\varnothing$ and $Y$. The product $X \times Y$ has as its open boxes only $\varnothing$ and itself, so its only closed sets are $\varnothing$ and itself; and $G_f$ is a single point, hence neither. The argument above breaks at [L3] and nowhere else.

- **Continuity of $f$ is used, and only through the composite.** Step 2.1 is the only appearance of the hypothesis; everything else is a property of the product.
