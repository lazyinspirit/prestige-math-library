---
id: ex-a-two-point-retract-that-is-not-a-deformation-retract
kind: example
title: "A singleton is a retract but not a deformation retract of the two-point discrete space"
status: published
origin: session
deps: [fs-a-retract-must-be-a-deformation-retract, def-standard-topologies, def-path-connected, def-retraction-and-deformation-retract]
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

Let $X=\{0,1\}$ have the discrete topology and let $A=\{0\}$. The constant map $r:X\to A$ is a retraction, but $A$ is not a deformation retract of $X$.

## Facts & Assumptions

**Given:** The two-point discrete space $X$ and its singleton subspace $A$.

[L1] Every map out of a discrete space is continuous ([[def-standard-topologies]]).

[A1] A deformation retraction would give a homotopy from $\operatorname{id}_X$ to the constant map at $0$ ([[def-retraction-and-deformation-retract]]).

[L2] The refutation in [[fs-a-retract-must-be-a-deformation-retract]] proves that this $A$ is a retract of $X$ but not a deformation retract, because such a deformation would force the disconnected space $X$ to be path-connected ([[def-path-connected]]).

## Verification

**Proof technique:** direct.

1.1 The map $r(0)=r(1)=0$ is continuous by [L1] and fixes the point of $A$, so it is a retraction. [L1, A1]

1.2 If a deformation retraction existed, [A1] would make $\operatorname{id}_X$ homotopic to the constant map at $0$; the full contradiction with the separation $X=\{0\}\cup\{1\}$ is established in [L2]. [assume-hyp, A1, L2]

2.1 Therefore $A$ is a retract but not a deformation retract of $X$. [step 1.1, step 1.2] ∎
