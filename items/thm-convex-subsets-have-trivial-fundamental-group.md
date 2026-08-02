---
id: thm-convex-subsets-have-trivial-fundamental-group
kind: theorem
title: "Every nonempty convex subset of $\\mathbb R^n$ is simply connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simply-connected, def-based-loops-and-fundamental-group,
       lem-straight-line-homotopies-are-continuous,
       cor-contractible-spaces-are-path-connected,
       cor-convex-subsets-of-rn-are-contractible,
       thm-fundamental-group-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Example 1.4"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

Let $n\geq1$ and let $C\subseteq\mathbb R^n$ be nonempty and convex, with its
Euclidean subspace topology. Then $C$ is simply connected. More explicitly,
for every basepoint $x_0\in C$ and every loop $\alpha$ at $x_0$, the formula

$$H(s,t)=(1-t)\alpha(s)+t x_0$$

is a path homotopy relative to the endpoints from $\alpha$ to the constant
loop at $x_0$.

## Facts & Assumptions

**Given:** A nonempty convex subset $C\subseteq\mathbb R^n$, a basepoint $x_0\in C$, and a based loop $\alpha:I\to C$.

[L1] The straight-line formula between two continuous maps into a convex subset is a continuous homotopy ([[lem-straight-line-homotopies-are-continuous]]).

[L2] Every nonempty contractible space is path-connected, and the published straight-line contraction makes a nonempty convex subset contractible ([[cor-contractible-spaces-are-path-connected]] and its dependency [[cor-convex-subsets-of-rn-are-contractible]]).

[L3] A loop class is the identity exactly when the loop is endpoint-homotopic to the constant loop ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L4] Simple connectedness means nonempty path-connectedness and a one-element fundamental group at every basepoint ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the maps $\alpha:I\to C$ and $c_{x_0}:I\to C$; it gives the displayed continuous homotopy $H(s,t)=(1-t)\alpha(s)+t x_0$. [L1]

2.1 Since $\alpha(0)=\alpha(1)=x_0$, one has $H(0,t)=x_0=H(1,t)$ for every $t$, so this homotopy is relative to the endpoints. [step 1.1, L3]

3.1 Steps 1.1 and 2.1 show that every loop at every basepoint represents the constant-loop class, so each fundamental group has one element; [L2] supplies nonempty path-connectedness. [step 1.1, step 2.1, L2, L3]

4.1 Therefore $C$ is simply connected by [L4]. [step 3.1, L4] ∎
