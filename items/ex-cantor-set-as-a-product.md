---
id: ex-cantor-set-as-a-product
kind: example
title: "The Cantor set is homeomorphic to $\\{0,1\\}^{\\mathbb{N}}$ with the product of discrete topologies, the ternary digits being the coordinates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, thm-product-universal-property, def-standard-topologies,
       def-homeomorphism-and-open-maps, lem-homeomorphism-criteria, def-subspace-topology-top,
       def-cantor-set, thm-cantor-set-ternary-description, lem-product-topology-on-rn,
       def-metrizable-space, lem-real-line-is-a-metric-space, cor-metrizability-and-first-countability-are-hereditary,
       def-metric-ball, def-metric-topology, def-series, thm-geometric-series,
       thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, lem-nth-term-test,
       lem-finite-sum-laws, lem-limit-preserves-order, lem-of-abs-value, lem-power-laws,
       def-integer-power, thm-well-ordering-principle, lem-finite-set-has-max,
       def-canonical-natural, lem-of-inverse-positive, lem-rat-embeds-dense, def-interval]
justified_by: []
aliases: []
landmark: true
short: "the Cantor set as $\\{0,1\\}^{\\mathbb{N}}$"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Cantor space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Example

Let $D := \{0,1\}$ carry the discrete topology ([[def-standard-topologies]]) and
let

$$K \;:=\; D^{\mathbb{N}} \;=\; \prod_{j \in \mathbb{N}} D$$

carry the product topology ([[def-product-topology]]). Let $C$ be the Cantor set
([[def-cantor-set]]) with the subspace topology inherited from the usual topology
of $\mathbb{R}$ ([[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]]). Define

$$\Phi : K \to C, \qquad \Phi(b) \;:=\; \sum_{j=0}^{\infty} 2 b_j\, 3^{-(j+1)} .$$

Then:

1. **$\Phi$ is a well defined bijection onto $C$.** Writing
   $\Phi_0(a) := \sum_{k=0}^{\infty} a_k 3^{-k-1}$ for a sequence
   $a : \mathbb{N} \to \{0,2\}$, one has $\Phi(b) = \Phi_0\big((2b_k)_k\big)$,
   and claim 3 of [[thm-cantor-set-ternary-description]] says exactly that this
   assignment is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $C$.
2. **Two estimates control $\Phi$ completely.** For $b, c \in K$ and
   $n \in \mathbb{N}$:
   - if $b_j = c_j$ for every $j < n$, then $|\Phi(b) - \Phi(c)| \le 3^{-n}$;
   - if $b_j = c_j$ for every $j < m$ and $b_m \ne c_m$, then
     $|\Phi(b) - \Phi(c)| \ge 3^{-(m+1)}$.
3. **$\Phi$ is a homeomorphism** ([[def-homeomorphism-and-open-maps]]): it is
   continuous by the first estimate and open onto $C$ by the second, and a
   continuous open bijection is a homeomorphism
   ([[lem-homeomorphism-criteria]]).

So the Cantor set, a subspace of the line, and the space of all binary sequences,
a product of two-point discrete spaces, are the same topological space; the
ternary digits of a point of $C$ are its coordinates in the product.

Compactness is not used anywhere below. The usual argument, that a continuous
bijection from a compact space to a Hausdorff space is a homeomorphism, is not
available at this point in the reading order, and the openness of $\Phi$ is
proved by hand instead.

## Facts & Assumptions

**Given:** $D = \{0,1\}$ discrete, $K = D^{\mathbb{N}}$ with the product topology, the Cantor set $C \subseteq \mathbb{R}$ with the subspace topology, the map $\Phi$ above, and points $b, c \in K$. For $n \in \mathbb{N}$ the **cylinder** at $b$ of depth $n$ is $Z(b,n) := \{\, c \in K : c_j = b_j \text{ for every } j < n \,\}$. Powers $3^{-k}$ are integer powers ([[def-integer-power]]) and $3$ denotes $\iota(3)$ ([[def-canonical-natural]]).

[A1] For a sequence $a : \mathbb{N} \to \{0,2\}$ the series $\sum_{k \ge 0} a_k 3^{-k-1}$ converges, its sum $\Phi_0(a)$ lies in $[0,1]$, the Cantor set is exactly the set of these sums, and $b \mapsto \Phi_0\big((2b_k)_k\big)$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $C$ ([[thm-cantor-set-ternary-description]], claims 1, 2 and 3; [[def-cantor-set]]).

[A2] A basis for the product topology on $K$ is the family of boxes $\prod_j U_j$ with every $U_j \subseteq D$ and $U_j = D$ off a list $j_0,\dots,j_{n-1}$; every subset of $D$ is open ([[def-product-topology]], [[def-standard-topologies]], [[thm-product-universal-property]]).

[A3] $C$ is metrizable, being a subspace of the metrizable space $\mathbb{R}$, and its topology is the metric topology of the restricted metric, whose balls are $B_C(x,r) = (x-r,\ x+r) \cap C$ ([[cor-metrizability-and-first-countability-are-hereditary]], [[def-metrizable-space]], [[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]], [[lem-product-topology-on-rn]]).

[L1] $\sum_{k=0}^{\infty} r^k = 1/(1-r)$ for $|r|<1$ ([[thm-geometric-series]]); a nonnegative series converges iff its partial sums are bounded, and then every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]]); series may be shifted to a general starting index ([[def-series]]); sums are additive and homogeneous ([[lem-series-linearity]]).

[L2] Finite sums are monotone in their terms and satisfy $\sum_{k<n}\lambda = n\lambda$ ([[lem-finite-sum-laws]]); weak inequalities pass to limits ([[lem-limit-preserves-order]]); $|u| \le v$ is equivalent to $-v \le u \le v$ ([[lem-of-abs-value]]).

[L3] $3^{m}3^{n} = 3^{m+n}$ and $3^{-m} = (3^m)^{-1}$ ([[lem-power-laws]], [[def-integer-power]]); $3^k > 0$ and $k \mapsto 3^k$ is nondecreasing for $k \in \mathbb{N}$, so $0 < u \le v$ gives $3^{-v} \le 3^{-u}$ ([[lem-of-inverse-positive]], [[lem-power-laws]]).

[L4] If $\sum a_k$ converges then $a_k \to 0$ ([[lem-nth-term-test]]); below any positive real lies a positive rational, so convergence tested against rational tolerances gives every real tolerance ([[lem-rat-embeds-dense]]).

[L5] Every nonempty set of naturals has a least element ([[thm-well-ordering-principle]]); a listed finite set of reals has a maximum ([[lem-finite-set-has-max]]).

[L6] A continuous bijection is a homeomorphism exactly when it is an open map ([[lem-homeomorphism-criteria]], claim 1; [[def-homeomorphism-and-open-maps]]).

## Verification

**Proof technique:** direct.

1.1 For every $b \in K$ the terms $2b_j 3^{-(j+1)}$ lie between $0$ and $2 \cdot 3^{-(j+1)}$, and $\sum_j 2 \cdot 3^{-(j+1)}$ converges with sum $1$, since it is $2 \cdot 3^{-1}\sum_j 3^{-j} = (2/3)(3/2)$ by [L1] and [L3]. So $\Phi(b)$ is defined and lies in $[0,1]$. [given, L1, L2, L3]

1.2 $3^{-k} \to 0$, since $\sum_k 3^{-k}$ converges by [L1]; hence for every real $\varepsilon > 0$ there is $n \in \mathbb{N}$ with $3^{-n} < \varepsilon$, a positive rational below $\varepsilon$ serving as the tolerance. [L1, L4]

1.3 Each cylinder $Z(b,n)$ is open in $K$: it is the box with factor $\{b_j\}$ at each $j<n$ and $D$ elsewhere, and every subset of $D$ is open. Moreover $Z(c,n) = Z(b,n)$ whenever $c \in Z(b,n)$, the defining condition being agreement of the first $n$ coordinates. [A2]

1.4 The cylinders form a basis of $K$: given a basic box $\prod_j U_j$ with $U_j = D$ off a list $j_0,\dots,j_{r-1}$ and a point $b$ in it, put $n := 1 + j_{m_0}$ where $j_{m_0}$ is the largest of the listed indices, available by [L5] for $r \ge 1$, and $n := 0$ for $r = 0$; then $b \in Z(b,n) \subseteq \prod_j U_j$, since every listed index is $< n$. [A2, L5]

2.1 $\Phi(b) = \Phi_0\big((2b_k)_k\big)$ for every $b \in K$, the two series having the same terms $2b_k 3^{-k-1}$; so by [A1] the map $\Phi$ is a bijection of $K$ onto $C$. This is claim 1. [step 1.1, A1, L1]

2.2 For every $n \in \mathbb{N}$: $\sum_{j \ge n} 2 \cdot 3^{-(j+1)} = 3^{-n}$, by shifting the index and applying [L1] and [L3] as in step 1.1. [step 1.1, L1, L3]

3.1 Suppose $b_j = c_j$ for every $j < n$. For $N \ge n$ the finite sum $\sum_{j<N} 2(b_j - c_j)3^{-(j+1)}$ has vanishing terms for $j < n$, and each remaining term lies between $-2 \cdot 3^{-(j+1)}$ and $2 \cdot 3^{-(j+1)}$, so by [L2] the finite sum lies between $-3^{-n}$ and $3^{-n}$, using step 2.2 and [L1]. Letting $N$ grow and applying [L1] and [L2] gives $|\Phi(b) - \Phi(c)| \le 3^{-n}$. [step 2.2, L1, L2]

3.2 Suppose $b_j = c_j$ for every $j < m$ and $b_m \ne c_m$; interchanging $b$ and $c$ if necessary, take $b_m = 1$ and $c_m = 0$. For $N > m$ the finite sum $\sum_{j<N} 2(b_j-c_j)3^{-(j+1)}$ equals $2 \cdot 3^{-(m+1)}$ plus a term bounded below by $-\sum_{j \ge m+1} 2 \cdot 3^{-(j+1)} = -3^{-(m+1)}$, by step 2.2, [L1] and [L2]; so it is at least $3^{-(m+1)}$. Letting $N$ grow gives $\Phi(b) - \Phi(c) \ge 3^{-(m+1)}$, hence $|\Phi(b)-\Phi(c)| \ge 3^{-(m+1)}$. [step 2.2, L1, L2]

4.1 Steps 3.1 and 3.2 are claim 2. [step 3.1, step 3.2]

4.2 $\Phi$ is continuous: let $V$ be open in $C$ and $b \in \Phi^{-1}[V]$; by [A3] there is $\varepsilon > 0$ with $B_C(\Phi(b),\varepsilon) \subseteq V$, by step 1.2 there is $n$ with $3^{-n} < \varepsilon$, and by step 3.1 every $c \in Z(b,n)$ has $|\Phi(c)-\Phi(b)| \le 3^{-n} < \varepsilon$, so $Z(b,n) \subseteq \Phi^{-1}[V]$; and $Z(b,n)$ is open by step 1.3. [step 1.2, step 1.3, step 3.1, A3]

4.3 For $b \in K$ and $n \in \mathbb{N}$: $B_C(\Phi(b), 3^{-n}) \subseteq \Phi[Z(b,n)]$. Indeed such a point is $\Phi(c)$ for a unique $c \in K$ by step 2.1; if $c \notin Z(b,n)$, let $m$ be the least index with $b_m \ne c_m$, which exists by [L5] and satisfies $m < n$, and then step 3.2 gives $|\Phi(c)-\Phi(b)| \ge 3^{-(m+1)} \ge 3^{-n}$ by [L3], contradicting the choice of $\Phi(c)$. [step 2.1, step 3.2, L3, L5]

5.1 $\Phi$ is an open map onto $C$: by step 1.3 the set $\Phi[Z(b,n)]$ contains, around each of its points $\Phi(c)$ with $c \in Z(b,n)$, the ball $B_C(\Phi(c),3^{-n}) \subseteq \Phi[Z(c,n)] = \Phi[Z(b,n)]$ by step 4.3; so each $\Phi[Z(b,n)]$ is open in $C$ by [A3], and by step 1.4 every open subset of $K$ is a union of cylinders, whose image is the union of their images. [step 1.3, step 1.4, step 4.3, A3]

6.1 By step 2.1 the map $\Phi$ is a bijection onto $C$, by step 4.2 it is continuous and by step 5.1 it is open, so it is a homeomorphism by [L6]. This is claim 3, and with steps 2.1 and 4.1 all three claims are proved. [step 2.1, step 4.1, step 4.2, step 5.1, L6] ∎

## Remarks

- **The two estimates say that $\Phi$ almost preserves distance.** Agreement of
  the first $n$ coordinates forces the images to be within $3^{-n}$, and the
  first disagreement at index $m$ forces them to be at least $3^{-(m+1)}$ apart.
  Together they say that the cylinder $Z(b,n)$ and the trace on $C$ of an interval
  of length about $3^{-n}$ around $\Phi(b)$ determine each other, which is exactly
  what makes $\Phi$ a homeomorphism.

- **Why openness has to be proved and not quoted.** For a continuous bijection,
  openness is equivalent to being a homeomorphism ([[lem-homeomorphism-criteria]])
  and is not automatic; the standard shortcut uses compactness of the source and
  the Hausdorff condition on the target, and compactness is later in the reading
  order. Steps 4.3 and 5.1 replace it with a direct computation.

- **The coordinates are the digits, and the digits are not the point.** A real
  number in $C$ has exactly one ternary expansion with digits in $\{0,2\}$, which
  is what makes $\Phi$ injective; the ambiguity of ternary expansions in general,
  such as two expansions of $1/3$, does not arise inside $C$ because the
  alternative expansion uses the digit $1$.
