---
id: ex-rn-as-a-product
kind: example
title: "$\\mathbb{R}^n$ as the product of $n$ copies of the real line: the product topology is the Euclidean topology and the projections are continuous, open and surjective"
status: published
origin: session
deps: [lem-product-topology-on-rn, thm-product-universal-property, def-product-topology,
       lem-metrics-on-rn, def-metrizable-space, lem-real-line-is-a-metric-space,
       def-metric-topology, def-metric-ball, def-interval, def-continuous-map-top,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{R}^n$ as a product"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
pipeline_run: null
---

## Example

Fix $n \in \mathbb{N}$ with $n \ge 1$ and give $\mathbb{R}$ its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let
$\mathbb{R}^n = \prod_{k<n} \mathbb{R}$ carry the product topology
([[def-product-topology]]), with projections $\pi_j(x) = x_j$. Then:

1. **The product topology is the Euclidean topology.** It is the metric topology
   of $d_\infty$, and equally of $d_1$ and of $d_2$
   ([[lem-metrics-on-rn]], [[lem-product-topology-on-rn]]); in particular
   $\mathbb{R}^n$ with the product topology is metrizable, and "open in
   $\mathbb{R}^n$" has one meaning.
2. **A basis of open boxes.** The sets
   $\prod_{k<n}(a_k, b_k)$ with $a_k < b_k$ for every $k < n$ form a basis
   ([[def-interval]]), since the $d_\infty$-ball $B(x,r)$ is exactly the box
   $\prod_{k<n}(x_k - r,\ x_k + r)$.
3. **The projections are continuous, open and surjective.** Continuity and
   openness are the general facts ([[thm-product-universal-property]], claims 1
   and 3; [[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]).
   Surjectivity needs no choice principle here: for $t \in \mathbb{R}$ the
   constant function $x$ with $x_k = t$ for every $k<n$ satisfies $\pi_j(x) = t$.
4. **Componentwise continuity.** For a space $Z$, a function
   $h : Z \to \mathbb{R}^n$ is continuous if and only if each of its $n$
   components $h_k = \pi_k \circ h : Z \to \mathbb{R}$ is
   ([[thm-product-universal-property]], claim 2). This is the statement usually
   quoted as "a vector-valued map is continuous exactly when its coordinate
   functions are", and here it is a special case of a theorem about arbitrary
   products.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; $\mathbb{R}^n = \prod_{k<n}\mathbb{R}$ with the product topology; the projections $\pi_j$; a topological space $Z$ and a function $h : Z \to \mathbb{R}^n$; a real $t$ and an index $j < n$.

[A1] $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$ is a metric on it for $n \ge 1$ ([[lem-metrics-on-rn]]).

[L1] The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$, and also of $d_1$ and $d_2$; and $B_{d_\infty}(x,r) = \prod_{k<n}(x_k-r,\ x_k+r)$ ([[lem-product-topology-on-rn]], [[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

[L2] Each projection of a product is continuous and open, and a map into a product is continuous exactly when all its components are ([[thm-product-universal-property]], claims 1, 2 and 3; [[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]).

[L3] In a metric space the balls form a basis of the metric topology ([[def-metric-topology]], [[def-metric-ball]]); $(a,b) = \{s : a < s < b\}$ ([[def-interval]]).

[L4] A basis for the product topology on a product over a natural number is the family of all boxes with open factors ([[def-product-topology]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1 is [L1] verbatim, together with the observation that a topology induced by a metric makes the space metrizable. [A1, L1]

1.2 The constant function $x$ with $x_k := t$ for every $k < n$ is an element of $\mathbb{R}^n$, since it is a function $n \to \mathbb{R}$, and $\pi_j(x) = x_j = t$. [A1]

1.3 Claims 3 and 4, apart from surjectivity, are [L2] read for the family of $n$ projections. [L2]

2.1 Every $d_\infty$-ball is a box of bounded open intervals of equal length, by [L1], and the balls form a basis of the metric topology by [L3]; so the boxes $\prod_{k<n}(a_k,b_k)$ with $a_k < b_k$ include a basis and are themselves open by [L4], hence form a basis. This is claim 2. [step 1.1, L1, L3, L4]

2.2 By step 1.2 the projection $\pi_j$ is surjective, with no appeal to a choice principle, the point $x$ being written down. This completes claim 3 with step 1.3. [step 1.2, step 1.3]

3.1 Steps 1.1, 2.1, 2.2 and 1.3 establish claims 1, 2, 3 and 4 respectively. [step 1.1, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **This is the example the seam lemma exists for.** Without
  [[lem-product-topology-on-rn]] the symbol $\mathbb{R}^2$ would name two spaces
  on these two pages, the product of two lines and the metric space of
  [[lem-metrics-on-rn]], and every sentence about open subsets of it would be
  ambiguous. Claim 1 says the two are one space, so the hyperbola, the square and
  the Sorgenfrey plane below may each be discussed in whichever language is
  shorter.

- **Surjectivity is free here and is not free in general.** For an infinite index
  set, surjectivity of a projection is the Axiom of Choice
  ([[thm-product-universal-property]], claim 4). For $\mathbb{R}^n$ the constant
  function does the work, and the same trick works for any product of copies of
  one nonempty space, over any index set.

- **The Euclidean metric plays no role in the topology.** All three of $d_1$,
  $d_2$ and $d_\infty$ induce the product topology, so nothing topological about
  $\mathbb{R}^n$ singles out $d_2$; what singles it out is metric structure, such
  as which sets are balls, and that is not visible to the topology
  ([[def-metrizable-space]]).
