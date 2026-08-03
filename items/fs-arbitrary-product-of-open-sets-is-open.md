---
id: fs-arbitrary-product-of-open-sets-is-open
kind: false-statement
title: "FALSE: $\\prod_i U_i$ is open in the product topology whenever every $U_i$ is open"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-box-finer-than-product, def-topology-basis-subbasis,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       lem-finite-set-has-max, def-canonical-natural, lem-of-naturals-positive,
       cor-of-one-positive, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "a product of open sets need not be product-open"
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
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
pipeline_run: null
---

## Statement

**False claim:** if $U_i$ is open in $X_i$ for every $i \in I$, then
$\prod_{i \in I} U_i$ is open in $\prod_{i \in I} X_i$ with the product topology
([[def-product-topology]]).

What is true is the version with a restriction on how many factors may be cut
down: $\prod_i U_i$ is open in the product topology when every $U_i$ is open
**and** $U_i = X_i$ for all but finitely many $i$, those being exactly the basic
product-open sets ([[def-product-topology]], [[def-topology-basis-subbasis]]).
The unrestricted claim is the definition of the *box* topology, which is strictly
finer ([[thm-box-finer-than-product]]).

The refutation uses $\mathbb{R}^{\mathbb{N}} = \prod_{k \in \mathbb{N}}\mathbb{R}$
with the usual topology on each factor
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]) and the single
open set $U_k := (0,1)$ in every factor: $\prod_{k} (0,1)$ is not open in the
product topology, although $(0,1)$ is open in $\mathbb{R}$.

## Facts & Assumptions

**Given:** The product $P := \prod_{k \in \mathbb{N}} \mathbb{R}$ with the product topology, the set $C := \prod_{k \in \mathbb{N}} (0,1) \subseteq P$, and the point $c \in P$ with $c_k = 1/2$ for every $k$, where $1/2$ is the inverse of $\iota(2)$ ([[def-canonical-natural]]).

[A1] A basis for the product topology on $P$ is the family of boxes $\prod_k O_k$ with every $O_k$ open in $\mathbb{R}$ and $O_k = \mathbb{R}$ off a list $j_0,\dots,j_{n-1}$ with $n \in \mathbb{N}$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $(0,1) = \{\, t \in \mathbb{R} : 0 < t < 1 \,\}$; it is nonempty and $0 < 1/2 < 1$, since $a < (a+b)/2 < b$ whenever $a < b$; and $(0,1)$ is open in the usual topology of $\mathbb{R}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L1] $0 < 1$, so $1 < 1 + 1 = 2$ ([[cor-of-one-positive]]).

[L2] $\iota$ is strictly increasing on $\mathbb{N}$, hence injective ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L3] For every natural $n \ge 1$ and reals $a_0,\dots,a_{n-1}$ the set $\{a_0,\dots,a_{n-1}\}$ has a maximum ([[lem-finite-set-has-max]]).

[L4] A topology is a family of subsets of the underlying set, and every member of a basis of it is open ([[def-topological-space]]).

## Refutation

**Proof technique:** direct.

1.1 $c \in C$, since $c_k = 1/2 \in (0,1)$ for every $k$ by [A2]. [A2]

1.2 $2 \notin (0,1)$, since $1 < 2$ by [L1] and membership of $(0,1)$ requires $t < 1$ by [A2]. [A2, L1]

1.3 Suppose $C$ were open in the product topology. Then by [A1] there is a basic product-open $O = \prod_k O_k$ with $c \in O \subseteq C$, and $O_k = \mathbb{R}$ for every $k$ outside a list $j_0,\dots,j_{n-1}$ with $n \in \mathbb{N}$. [A1, L4, assume-hyp]

2.1 There is $j \in \mathbb{N}$ with $O_j = \mathbb{R}$: for $n = 0$ the list is empty and $j := 0$ serves; for $n \ge 1$ the set $\{\iota(j_0),\dots,\iota(j_{n-1})\}$ has a maximum by [L3], attained at some $m_0 < n$, and $j := j_{m_0} + 1$ satisfies $\iota(j) > \iota(j_m)$, hence $j \ne j_m$, for every $m < n$ by [L2]. [step 1.3, L2, L3]

3.1 Let $y \in P$ be the point with $y_j := 2$ and $y_k := c_k = 1/2$ for $k \ne j$. Then $y \in O$, since $y_j \in \mathbb{R} = O_j$ and $y_k = c_k \in O_k$ for $k \ne j$, using $c \in O$. [step 1.3, step 2.1]

4.1 $y \notin C$, since $y_j = 2 \notin (0,1)$ by step 1.2. [step 1.2, step 3.1]

5.1 Steps 3.1 and 4.1 contradict $O \subseteq C$ from step 1.3, so $C$ is not open in the product topology although every factor $(0,1)$ is open in $\mathbb{R}$; the claim is therefore false. [step 1.1, step 1.3, step 3.1, step 4.1] ∎

## Remarks

- **The correct statement, and why the finiteness is there.** The basic open sets
  of a product are the finite intersections of the sets $\pi_i^{-1}[U]$, and each
  of those constrains one coordinate only; a finite intersection therefore
  constrains finitely many coordinates. Constraining all of them at once, as $C$
  does, is a box, and a box need not be a union of such finite intersections.

- **Nothing is wrong with $\prod_k (0,1)$ as a set or as a space.** It is a
  perfectly good subspace of $\mathbb{R}^{\mathbb{N}}$, and by claim 1 of
  [[thm-product-of-subspaces-and-closures]] its subspace topology is the product
  of the subspace topologies of the factors. What fails is only that it is not an
  *open* subset of the ambient product.

- **The same computation with shrinking intervals gives the sharper failure.**
  Replacing $(0,1)$ by $(-1/(k+1),\ 1/(k+1))$ produces a box whose only
  product-interior point would have to have all but finitely many coordinates
  unrestricted, and that box separates the two topologies outright; that is the
  false statement immediately before this one.
