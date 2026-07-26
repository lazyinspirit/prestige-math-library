---
id: def-homeomorphism-and-open-maps
kind: definition
title: "Homeomorphism, open map, closed map, embedding, and what it means for a property to be topological"
status: published
origin: session
deps: [def-continuous-map-top, def-injection-surjection-bijection, def-topological-space, def-subspace-topology-top, def-standard-topologies]
justified_by: []
aliases: [def-homeomorphism-top, def-open-map-top, def-closed-map-top, def-embedding-top]
landmark: true
short: "homeomorphism, open/closed map, embedding"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Homeomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homeomorphism"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Embedding"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let
$f : X \to Y$ be a function. Continuity is as in [[def-continuous-map-top]],
injections, surjections and bijections as in
[[def-injection-surjection-bijection]].

- $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U \subseteq X$.
- $f$ is a **closed map** if $f[F]$ is closed in $Y$ for every closed
  $F \subseteq X$.
- $f$ is a **homeomorphism** if $f$ is a continuous bijection whose inverse
  $f^{-1} : Y \to X$ is also continuous. The spaces are **homeomorphic**, written
  $X \cong Y$, when a homeomorphism $X \to Y$ exists.
- $f$ is an **embedding** if $f$ is injective and the corestriction
  $f_0 : X \to f[X]$, $f_0(x) = f(x)$, is a homeomorphism onto $f[X]$ carrying
  the subspace topology inherited from $Y$ ([[def-subspace-topology-top]]).

**The inverse in the third clause exists because $f$ is a bijection**, and it is
the unique two-sided inverse ([[def-injection-surjection-bijection]]); no choice
principle is involved. Continuity of $f^{-1}$ is a genuine additional demand: a
continuous bijection need not be a homeomorphism, and this page records that
failure as a false statement with a two-point witness.

**Open, closed and homeomorphism are three different conditions.** A
homeomorphism is continuous by definition, but an open map need not be continuous
and a closed map need not be continuous; and continuity implies neither openness
nor closedness. An open map need
not be closed and a closed map need not be open, and Sierpinski space
$S = \{a,b\}$ with open point $b$ ([[def-standard-topologies]]) witnesses both
failures at once: the constant map $S \to S$ with value $b$ is open, since the
image of every nonempty set is the open set $\{b\}$, and is not closed, since the
image of the closed set $\{a\}$ is $\{b\}$, whose complement $\{a\}$ is not open;
the constant map with value $a$ is closed and not open by the same computation
read the other way. What is true
is that for a **continuous bijection** the three notions collapse: it is a
homeomorphism exactly when it is open, exactly when it is closed. That is proved
in the next item and is not assumed here.

**Topological properties.** A **property of topological spaces** is a condition
$P$ that is either true or false of each space. $P$ is a **topological property**
(one is also said to be *preserved by homeomorphism*, or *invariant*) when
$X \cong Y$ implies that $P(X)$ and $P(Y)$ have the same truth value. Since
$\cong$ is an equivalence relation on spaces — the identity is a homeomorphism,
inverses and composites of homeomorphisms are homeomorphisms, all three verified
in the next item — a topological property is exactly one that is constant on each
$\cong$-class.

**What a homeomorphism transports.** If $h : X \to Y$ is a homeomorphism then
$U \mapsto h[U]$ is a bijection from $\mathcal{T}_X$ onto $\mathcal{T}_Y$, with
inverse $V \mapsto h^{-1}[V]$: both maps are well defined because $h$ and
$h^{-1}$ are continuous, and they are mutually inverse because $h$ is a
bijection. So a homeomorphism is an isomorphism of the structure "a set together
with a distinguished family of subsets", and every notion defined from the open
sets alone — closed, closure, interior, boundary, dense, convergence of
sequences, continuity of maps into and out of the space — is carried across by
it. Anything defined from extra data, such as a metric or an order, is not, and
that distinction is exactly what the phrase *topological property* is for.

## Remarks

- **Being an embedding is not the same as being injective and continuous.** The
  identity from a set with the discrete topology to the same set with a coarser
  topology is injective and continuous, its image is the whole space, and it is
  an embedding only if the two topologies agree. The extra content of "embedding"
  is that the source topology is recovered as the trace of the target one, which
  is precisely the characteristic property of the subspace topology.

- **The inclusion of a subspace is the model embedding.** For $S \subseteq X$
  with the subspace topology, $\iota : S \to X$ is injective and its
  corestriction to $\iota[S] = S$ is the identity of $(S, \mathcal{T}_S)$, hence
  a homeomorphism; so $\iota$ is an embedding
  ([[def-subspace-topology-top]]). Conversely an embedding
  $f : X \to Y$ identifies $X$ with the subspace $f[X]$ of $Y$, which is the
  sense in which "$X$ sits inside $Y$" is ever asserted in this library.

- **The notation $X \cong Y$ hides the map, and sometimes that matters.** Two
  spaces may be homeomorphic by many different homeomorphisms, and no canonical
  one is claimed by the notation. Where a specific map is used it is named.
