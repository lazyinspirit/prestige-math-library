---
id: thm-no-retraction-of-the-closed-disk-onto-the-circle
kind: theorem
title: "There is no retraction of the closed disk onto the unit circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-retracts-inject-fundamental-groups, def-euclidean-spheres-and-closed-balls, thm-convex-subsets-have-trivial-fundamental-group, cor-geometric-unit-circle-has-fundamental-group-z, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: true
short: 'no retraction $D^2\to S^1$'
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.9"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §6"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Write $D^2=\overline B_2(0,1)\subseteq\mathbb R^2$ and $S^1=S_2(0,1)$ ([[def-euclidean-spheres-and-closed-balls]]). There is no continuous retraction from the closed unit disk $D^2$ onto the unit circle $S^1$.

## Facts & Assumptions

**Given:** The closed unit disk $D^2$, the unit circle $S^1$, the common basepoint $e_0=(1,0)$, and the inclusion $i:S^1\hookrightarrow D^2$.

[L1] If $A$ is a retract of $X$, then the inclusion induces an injective homomorphism on fundamental groups at every basepoint of $A$ ([[prop-retracts-inject-fundamental-groups]]).

[F1] The closed unit disk and unit circle are respectively the Euclidean closed ball $\overline B_2(0,1)$ and Euclidean sphere $S_2(0,1)$ ([[def-euclidean-spheres-and-closed-balls]]).

[L2] Every nonempty convex subset of $\mathbb R^n$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[L3] For the geometric unit circle $S^1$ based at $(1,0)$, $\pi_1(S^1,(1,0))\cong(\mathbb Z,+)$ ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

[L4] The Euclidean norm is a norm on $\mathbb R^2$, so it is absolutely homogeneous and satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** contradiction.

1.1 The disk $D^2$ is nonempty and convex: if $x,y\in D^2$ and $0\le t\le1$, then $\lVert(1-t)x+ty\rVert_2\le(1-t)\lVert x\rVert_2+t\lVert y\rVert_2\le1$. Hence $\pi_1(D^2,e_0)$ has one element. [F1, L2, L4, algebra]

1.2 The unit circle has $\pi_1(S^1,e_0)$ isomorphic to the nontrivial group $\mathbb Z$. [F1, L3]

1.3 Suppose a retraction $r:D^2\to S^1$ existed. [assume-contra]

2.1 By [L1], $i_*:\pi_1(S^1,e_0)\to\pi_1(D^2,e_0)$ would be injective, but steps 1.1 and 1.2 make this a homomorphism from a nontrivial group to a one-element group, which cannot be injective. Thus no such retraction exists. [step 1.1, step 1.2, step 1.3, L1, discharge-contradiction] ∎
