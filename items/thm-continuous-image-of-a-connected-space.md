---
id: thm-continuous-image-of-a-connected-space
kind: theorem
title: "A continuous image of a connected space is connected, and connectedness is a topological property"
status: published
origin: session
deps: [def-connected-space, thm-connectedness-characterisations, def-continuous-map-top,
       def-subspace-topology-top, lem-continuity-is-local-and-pastes,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: true
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §23"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Subsets carry the subspace topology
([[def-subspace-topology-top]]). Then:

1. **Images.** If $A \subseteq X$ is a connected subset of $X$
   ([[def-connected-space]]) then $f[A]$ is a connected subset of $Y$. In
   particular, if $X$ is connected then $f[X]$ is connected, and if $f$ is
   moreover surjective then $Y$ is connected.
2. **Topological invariance.** If $h : X \to Y$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]) then $X$ is connected if and only if
   $Y$ is. So connectedness is a **topological property**.

Nothing is assumed about $f$ beyond continuity: it need not be injective, open,
closed or surjective. Note the direction — a continuous **image** of a connected
space is connected, while a continuous **preimage** need not be, since a constant
map from a disconnected space is continuous.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a continuous map $f : X \to Y$, and a subset $A \subseteq X$.

[A1] A subset $S$ of a space is connected exactly when every continuous map $S \to \mathbf{2}$ is constant, $\mathbf{2}$ being the two-point discrete space ([[thm-connectedness-characterisations]], claim 2, [[def-connected-space]]).

[A2] A restriction $f|_A : A \to Y$ of a continuous map to a subspace is continuous ([[def-subspace-topology-top]]).

[A3] Characteristic property of a map into a subspace: for $S \subseteq Y$ with inclusion $\iota : S \to Y$ and a function $g : Z \to S$, the map $g$ is continuous exactly when $\iota \circ g$ is ([[def-subspace-topology-top]]).

[A4] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[A5] A homeomorphism is a continuous bijection whose inverse is continuous, and a bijection is surjective ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Write $g : A \to f[A]$ for the map $g(a) = f(a)$, which is well defined because $f(a) \in f[A]$ for $a \in A$, and is surjective by the definition of the image $f[A] = \{\, f(a) : a \in A \,\}$. [given]

1.2 The composite of $g$ with the inclusion $\iota : f[A] \to Y$ is the restriction $f|_A$, which is continuous by [A2]; so $g$ is continuous by [A3] applied with $Z = A$ and $S = f[A]$. [A2, A3]

2.1 Assume $A$ is a connected subset of $X$ and let $\chi : f[A] \to \mathbf{2}$ be continuous. Then $\chi \circ g : A \to \mathbf{2}$ is continuous by step 1.2 and [A4], hence constant by [A1] applied to $A$. [step 1.2, A1, A4]

3.1 Since $g$ is surjective by step 1.1, every pair of points of $f[A]$ is of the form $g(a_1), g(a_2)$, and $\chi(g(a_1)) = \chi(g(a_2))$ by step 2.1; so $\chi$ is constant. [step 1.1, step 2.1]

4.1 As $\chi$ was an arbitrary continuous map $f[A] \to \mathbf{2}$, [A1] gives that $f[A]$ is a connected subset of $Y$. Taking $A = X$ gives that $f[X]$ is connected when $X$ is, and if $f$ is surjective then $f[X] = Y$, so $Y$ is connected. This is claim 1. [step 3.1, A1]

5.1 For claim 2 let $h : X \to Y$ be a homeomorphism. If $X$ is connected then $Y = h[X]$ is connected by step 4.1, since $h$ is continuous and surjective by [A5]; and if $Y$ is connected then $X = h^{-1}[Y]$ is connected by step 4.1 applied to the continuous surjection $h^{-1}$, again by [A5]. So connectedness is preserved in both directions by a homeomorphism. [step 4.1, A5] ∎

## Remarks

- **Why the corestriction is the only technical point.** Claim 1 is about $f[A]$ as a **space**, so the map that must be shown continuous is the one landing in $f[A]$, not the one landing in $Y$. The characteristic property of a subspace is exactly the tool that upgrades the second to the first, and it is the reason the proof needs no hypothesis on $f$ at all.

- **The hypothesis cannot be moved to the target.** If $f[X]$ is connected nothing follows about $X$: the constant map from any space whatever has a one-point image, which is connected. So claim 1 is a one-way implication and is used only in that direction below.

- **What the theorem buys immediately.** Any property preserved by continuous images can be checked on a convenient model. That is the whole mechanism behind the intermediate value theorem in the next item, and behind the connectedness of every path-connected space later on this page: both work by pushing a connected interval forward along a continuous map.
