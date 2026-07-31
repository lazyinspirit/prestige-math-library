---
id: fs-a-retract-must-be-a-deformation-retract
kind: false-statement
title: "FALSE: every retract is a deformation retract"
status: published
origin: session
deps: [def-retraction-and-deformation-retract, def-standard-topologies, cor-contractible-iff-identity-nullhomotopic, cor-contractible-spaces-are-path-connected, def-path-connected, thm-path-connected-implies-connected, def-connected-space]
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

## Statement

**False claim.** Every retract of a topological space is a deformation retract.

## Facts & Assumptions

**Given:** The two-point set $X=\{0,1\}$ with the discrete topology and its singleton subspace $A=\{0\}$.

[A1] A retraction $r:X\to A$ satisfies $r(a)=a$ on $A$; a deformation retraction additionally supplies a homotopy from $\operatorname{id}_X$ to the inclusion followed by $r$, fixed on $A$ ([[def-retraction-and-deformation-retract]]).

[L1] Every map out of a discrete space is continuous, since every subset of its domain is open ([[def-standard-topologies]]).

[L2] A nonempty space whose identity is nullhomotopic is contractible, and every nonempty contractible space is path-connected ([[cor-contractible-iff-identity-nullhomotopic]], [[cor-contractible-spaces-are-path-connected]], [[def-path-connected]]).

[L3] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[L4] A separation is a pair of disjoint nonempty open sets whose union is the space ([[def-connected-space]]).

## Refutation

**Proof technique:** direct.

1.1 Define $r:X\to A$ by $r(0)=r(1)=0$. This map is continuous by [L1] and satisfies $r(0)=0$, so it is a retraction by [A1]. [L1, A1]

1.2 Suppose $A$ were a deformation retract of $X$. Since the inclusion followed by $r$ is the constant map $c_0:X\to X$, [A1] would give $\operatorname{id}_X\simeq c_0$. Then $X$ would be contractible, hence path-connected by [L2], and hence connected by [L3]. [assume-hyp, A1, L2, L3]

1.3 But $\{0\}$ and $\{1\}$ are disjoint nonempty open subsets of the discrete space $X$ and their union is $X$, so they form a separation by [L4]. Thus $X$ is disconnected. [L1, L4]

2.1 Steps 1.2 and 1.3 contradict one another. Hence $A$ is a retract of $X$ by step 1.1 but is not a deformation retract, refuting the claim. [step 1.1, step 1.2, step 1.3] ∎
