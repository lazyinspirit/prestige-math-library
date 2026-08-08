---
id: ex-a-cylinder-deformation-retracts-onto-an-end
kind: example
title: "For every space $X$, the cylinder $X\\times[0,1]$ deformation retracts onto $X\\times\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-retraction-and-deformation-retract, thm-product-universal-property, def-product-topology, lem-straight-line-homotopies-are-continuous, thm-continuity-characterisations-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

For every topological space $X$, put $Z=X\times I$ and $A=X\times\{0\}$. The maps

$$r(x,t)=(x,0),\qquad K((x,t),s)=(x,(1-s)t)$$

form a deformation retraction of $Z$ onto $A$.

## Facts & Assumptions

**Given:** A topological space $X$, the product $Z=X\times I$, and its subspace $A=X\times\{0\}$.

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]], [[def-product-topology]]).

[L2] Straight-line homotopies between continuous maps into the convex interval $I\subseteq\mathbb R$ are continuous ([[lem-straight-line-homotopies-are-continuous]]).

[L3] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

[A1] A deformation retraction consists of a retraction and a homotopy from the identity to the inclusion followed by it, fixed pointwise on the retract ([[def-retraction-and-deformation-retract]]).

## Verification

**Proof technique:** direct.

1.1 The map $r:Z\to A$, $r(x,t)=(x,0)$, is continuous: its composite with the inclusion $A\hookrightarrow Z$ has the continuous components $(x,t)\mapsto x$ and the constant $0$, so [L1] applies. It fixes every $(x,0)\in A$, hence is a retraction. [L1, A1]

1.2 On the source $Z$, the second projection $p_I:Z\to I$ and the constant zero map are continuous. Since $I$ is convex, [L2] makes $L:Z\times I\to I$, $L((x,t),s)=(1-s)t$, continuous. [L1, L2]

1.3 One has $K((x,t),0)=(x,t)$, $K((x,t),1)=(x,0)$, and $K((x,0),s)=(x,0)$ for every $s\in I$. [algebra]

2.1 The first component $((x,t),s)\mapsto x$ is continuous as a composite of product projections, since the preimage of an open set is an iterated preimage and hence open by [L3]. Together with step 1.2, [L1] makes $K((x,t),s)=(x,L((x,t),s))$ continuous into $Z$. [step 1.2, L1, L3]

3.1 Steps 1.1, 2.1 and 1.3 satisfy [A1], so $(r,K)$ is a deformation retraction of $Z$ onto $A$. [step 1.1, step 2.1, step 1.3, A1] ∎
