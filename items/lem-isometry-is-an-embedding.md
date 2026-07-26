---
id: lem-isometry-is-an-embedding
kind: lemma
title: "An isometric embedding is injective and carries the metric topology of the source onto the subspace topology of its image"
status: published
origin: session
deps: [def-isometry-and-metric-embedding, def-metric-continuity,
       thm-metric-continuity-characterisations, def-metric-ball, def-metric-topology,
       def-metric-space, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "isometric embeddings are embeddings"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Embedding"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces and let $f : X \to Y$ be an
isometric embedding ([[def-isometry-and-metric-embedding]]). Write
$Z := f[X] \subseteq Y$ with its subspace metric $d_Z$. Then:

1. $f$ is injective ([[def-injection-surjection-bijection]]).
2. $f$, viewed as a map $X \to Z$, is an isometry.
3. $f[B_X(x,r)] = B_Z(f(x),r)$ for every $x \in X$ and $r > 0$
   ([[def-metric-ball]]).
4. A subset $U \subseteq X$ is open in $(X,d_X)$ if and only if $f[U]$ is open in
   $(Z,d_Z)$ ([[def-metric-topology]]). So $U \mapsto f[U]$ is a bijection from
   the metric topology of $X$ onto the subspace topology of $f[X]$, and $f$ is a
   homeomorphism onto its image.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, an isometric embedding $f : X \to Y$, the image $Z := f[X]$ with the subspace metric $d_Z = d_Y \restriction (Z \times Z)$, and the map $g : Z \to X$ inverse to $f : X \to Z$ once claim 2 is available.

[A1] Isometric embedding: $d_Y(f(x),f(x')) = d_X(x,x')$ for all $x, x' \in X$; the subspace metric on $Z$ is the restriction of $d_Y$ ([[def-isometry-and-metric-embedding]]).

[A2] Separation (M1): $d_X(x,x') = 0$ if and only if $x = x'$ ([[def-metric-space]]).

[L1] Balls: $B_X(x,r) = \{x' : d_X(x,x') < r\}$, and likewise in $Z$ with $d_Z$ ([[def-metric-ball]]).

[L2] Continuity in the $\varepsilon$-$\delta$ form ([[def-metric-continuity]]), and the equivalence of continuity with "preimages of open sets are open" ([[thm-metric-continuity-characterisations]], [[def-metric-topology]]).

[L3] A bijection $h$ and its inverse satisfy $h[S] = (h^{-1})^{-1}[S]$ and $h^{-1}[h[S]] = S$ for every subset $S$ of the domain ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: if $f(x) = f(x')$ then $d_X(x,x') = d_Y(f(x),f(x')) = 0$, hence $x = x'$ by (M1); this is claim 1. [A1, A2]

2.1 As a map $X \to Z$ the function $f$ is surjective, $Z$ being its image by definition, and it is injective by step 1.1, so it is a bijection $X \to Z$; and $d_Z(f(x),f(x')) = d_Y(f(x),f(x')) = d_X(x,x')$, since $d_Z$ is the restriction of $d_Y$, so it is an isometry, which is claim 2. [step 1.1, A1]

3.1 Both $f : X \to Z$ and its inverse $g : Z \to X$ are continuous, with $\delta := \varepsilon$ serving at every point in both directions, because $d_Z(f(x),f(x')) = d_X(x,x')$ and, writing $z = f(x)$, $z' = f(x')$, also $d_X(g(z),g(z')) = d_Z(z,z')$. [step 2.1, A1, L2]

3.2 Claim 3: $f[B_X(x,r)] = \{f(x') : d_X(x,x') < r\} = \{f(x') : d_Z(f(x),f(x')) < r\}$, and as $f$ is onto $Z$ the latter set is $\{z \in Z : d_Z(f(x),z) < r\} = B_Z(f(x),r)$. [step 2.1, A1, L1]

4.1 By [L2] applied to the continuous maps of step 3.1, the preimage under $f : X \to Z$ of every open subset of $Z$ is open in $X$, and the preimage under $g$ of every open subset of $X$ is open in $Z$. [step 3.1, L2]

5.1 Claim 4: for $U \subseteq X$ we have $f[U] = g^{-1}[U]$, so if $U$ is open in $X$ then $f[U]$ is open in $Z$ by step 4.1; conversely $U = f^{-1}[f[U]]$, so if $f[U]$ is open in $Z$ then $U$ is open in $X$ by step 4.1. Hence $U \mapsto f[U]$ maps the topology of $X$ into that of $Z$, is injective because $f$ is, and is onto because any open $W \subseteq Z$ equals $f[f^{-1}[W]]$ with $f^{-1}[W]$ open. [step 2.1, step 4.1, L3]

6.1 Claims 1, 2, 3 and 4 are established by steps 1.1, 2.1, 3.2 and 5.1, so an isometric embedding identifies $X$ with the metric subspace $f[X]$ of $Y$, as a metric space and hence as a topological one. [step 1.1, step 3.2, step 5.1] ∎

## Remarks

- **Only the image carries the right topology.** Claim 4 compares the topology of
  $X$ with the SUBSPACE topology of $f[X]$, not with the topology of $Y$. The
  image of an open set is in general not open in $Y$: the inclusion of $[0,1]$
  into $\mathbb{R}$ is an isometric embedding, and $[0,1]$ is open in itself but
  not in $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]]).
- **This is what licenses treating a subset of a metric space as a space in its
  own right**, and it is used on the companion page whenever a subset of
  $\mathbb{R}$ is called a metric space.
