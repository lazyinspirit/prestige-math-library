---
id: fs-an-intersection-of-connected-sets-is-connected
kind: false-statement
title: "FALSE: the intersection of two connected subspaces is connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-connected-space, def-path-connected, thm-path-connected-implies-connected,
       thm-unions-of-connected-sets, lem-connected-subsets-and-separated-sets,
       thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line,
       lem-product-topology-on-rn, def-product-topology, thm-product-universal-property,
       lem-continuity-is-local-and-pastes, def-interval, def-subspace-topology-top,
       def-metrizable-space, lem-metrics-on-rn, def-metric-topology,
       def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: false
short: "an intersection of two connected sets need not be connected"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

**False claim:** if $A$ and $B$ are connected subsets of a topological space $X$
([[def-connected-space]], [[def-subspace-topology-top]]) then $A \cap B$ is
connected.

The corresponding statement for **unions** is true under a meeting hypothesis
([[thm-unions-of-connected-sets]]); there is no such repair for intersections,
and the witness below has $A \cap B \neq \varnothing$, so nonemptiness is not
what is missing.

**Witness.** In $X = \mathbb{R}^2$ with the product topology
([[lem-product-topology-on-rn]], [[def-product-topology]]) put

$$S_0 := \{0\} \times [0,1], \qquad S_1 := \{1\} \times [0,1], \qquad T_0 := [0,1] \times \{0\}, \qquad T_1 := [0,1] \times \{1\},$$

and let $A := T_0 \cup S_0 \cup S_1$ and $B := T_1 \cup S_0 \cup S_1$: the three
sides of the unit square other than the top, and the three other than the bottom.
Both are connected, and $A \cap B = S_0 \cup S_1$ is disconnected, being two
disjoint closed segments.

## Facts & Assumptions

**Given:** $\mathbb{R}^2$ with the product topology and the sets $S_0, S_1, T_0, T_1, A, B$ above; subsets carry the subspace topology.

[A1] $[0,1]$ is order-convex, hence a connected subset of $\mathbb{R}$; a subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[cor-connected-subsets-of-the-line]], [[def-interval]]).

[A2] A map into $\mathbb{R}^2$ is continuous exactly when both components are, and a constant map and the identity are continuous; a continuous image of a connected space is a connected subset of the target ([[thm-product-universal-property]], [[thm-continuous-image-of-a-connected-space]], [[lem-continuity-is-local-and-pastes]], [[def-metrizable-space]], [[lem-metrics-on-rn]], [[def-metric-topology]]).

[A3] A union of connected subsets each meeting a fixed connected subset, together with that subset, is connected ([[thm-unions-of-connected-sets]], claim 2).

[A4] A subset $E$ of a space is disconnected exactly when $E = E_1 \cup E_2$ with $E_1, E_2$ nonempty and separated, that is neither meeting the other's closure ([[lem-connected-subsets-and-separated-sets]], [[def-interior-closure-boundary-top]]).

[A5] A product of closed sets is closed in $\mathbb{R}^2$, and $\{c\}$ and $[0,1]$ are closed in $\mathbb{R}$; a closed set equals its own closure ([[def-interior-closure-boundary-top]], [[def-product-topology]], [[def-interval]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the claim holds: the intersection of two connected subsets is connected. [assume-contra]

1.2 Each of $S_0, S_1, T_0, T_1$ is a connected subset of $\mathbb{R}^2$: for instance $S_0$ is the image of $[0,1]$ under $t \mapsto (0,t)$, whose components are a constant map and the identity, hence continuous by [A2], and $[0,1]$ is connected by [A1]; the other three are the images of $t \mapsto (1,t)$, $t \mapsto (t,0)$ and $t \mapsto (t,1)$. [A1, A2]

1.3 Each of $S_0, S_1, T_0, T_1$ is closed in $\mathbb{R}^2$ by [A5], being a product of two closed subsets of $\mathbb{R}$, so each equals its own closure. [A5]

1.4 $A \cap B = S_0 \cup S_1$: each of $S_0, S_1$ lies in both $A$ and $B$; and a point of $T_0$ not in $S_0 \cup S_1$ has second coordinate $0$ and first coordinate strictly between $0$ and $1$, so it lies in neither $T_1$ nor $S_0$ nor $S_1$, hence not in $B$; symmetrically for $T_1$. [given]

2.1 $A = T_0 \cup S_0 \cup S_1$ is connected: $T_0$ is connected by step 1.2, and $S_0$ and $S_1$ are connected and meet $T_0$, in $(0,0)$ and $(1,0)$ respectively; so [A3] applies with $T_0$ as the fixed connected set. Symmetrically $B = T_1 \cup S_0 \cup S_1$ is connected, $S_0$ and $S_1$ meeting $T_1$ in $(0,1)$ and $(1,1)$. [step 1.2, A3]

2.2 $S_0$ and $S_1$ are nonempty, disjoint, and separated in $\mathbb{R}^2$: by step 1.3 each is its own closure, and $S_0 \cap S_1 = \varnothing$ because a common point would have first coordinate both $0$ and $1$. So $A \cap B$ is disconnected by [A4] and step 1.4. [step 1.3, step 1.4, A4]

3.1 By step 2.1 both $A$ and $B$ are connected, so the supposed claim of step 1.1 makes $A \cap B$ connected, contradicting step 2.2. The claim is therefore false. [step 1.1, step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

- **Nonemptiness is not the missing hypothesis.** In the witness $A \cap B = S_0 \cup S_1$ is nonempty, and it is even a union of two connected sets — they simply do not meet. Nor does convexity of the pieces help: each of $A$ and $B$ is a union of three straight segments.

- **Why unions behave and intersections do not.** [A3] works because a point common to two connected sets welds them: a continuous two-valued function must agree on both. An intersection has no such welding point available, and indeed the intersection of two connected sets can be split as badly as one likes; taking longer chains of segments makes $A \cap B$ a union of any number of disjoint segments while keeping $A$ and $B$ connected.

- **Both witnesses are as simple as the plane allows.** $A$ and $B$ are the boundary of the unit square with one side removed, in the two ways of doing so that leave the two vertical sides. Each is path-connected, hence connected by [[thm-path-connected-implies-connected]] and [[def-path-connected]], so the failure has nothing to do with the pathologies of the zigzag curve elsewhere on this page.
