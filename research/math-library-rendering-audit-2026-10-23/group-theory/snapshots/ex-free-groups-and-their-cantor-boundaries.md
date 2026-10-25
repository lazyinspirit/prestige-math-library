---
id: ex-free-groups-and-their-cantor-boundaries
kind: example
title: "Free groups have Cantor-set boundaries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-finite-and-free-groups-are-hyperbolic, thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant, def-boundary-topology-by-gromov-products, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume the Axiom of Choice. If $F_r$ is a free group of rank $r \ge 2$, then its Gromov boundary is a
Cantor set.

## Facts & Assumptions

**Given:** AC and a free group $F_r$ of rank $r \ge 2$.

[L1] Free groups are hyperbolic ([[prop-finite-and-free-groups-are-hyperbolic]]).

[F1] The Gromov-product topology and its representative-independent neighbourhood criterion are defined in [[def-boundary-topology-by-gromov-products]] and verified under AC by [[thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant]].

[A1] AC is used only for the general change-of-generating-set boundary homeomorphism in [F1] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Choose a free basis. By [L1] its unit-edge Cayley graph is a tree, rooted at the identity, with $2r$ choices for the first edge of a nonbacktracking ray and $2r-1$ choices at each later edge. Vertices are finite reduced words. In this tree the Gromov product of two vertices at the root is exactly the length of their longest common initial word: their unique geodesics share that many edges, and the path between them has length equal to the sum of their remaining lengths. [L1, given, algebra]

2.1 Boundary sequences may contain edge-interior points. Round each such point to either endpoint vertex at distance at most $1/2$. Changing one argument of a Gromov product by that much changes its value by at most $1/2$ by the product formula and the reverse triangle inequality. Thus rounding preserves Gromov divergence and asymptoticity. Now let $(x_n)$ be a rounded Gromov sequence of vertices. For each integer $k$, eventually all pairs $(x_n,x_m)$ have product at least $k$. By step 1.1, their first $k$ letters therefore agree, and their lengths are at least $k$. These stabilized prefixes are compatible as $k$ varies, so they determine one infinite reduced word $\omega$. Conversely the length-$n$ prefixes of any infinite reduced word form a Gromov sequence. Two Gromov sequences are equivalent exactly when their stabilized words agree: if they agree, their mixed products tend to infinity, and if the words first differ at position $k+1$, their mixed products eventually equal $k$. This gives a bijection from boundary classes to infinite reduced words without choosing a representative of every class. [step 1.1, F1, algebra]

2.2 Give each finite set of allowed next letters an order. For $d\ge2$ choices encode choices $1,\ldots,d$ respectively by the complete prefix-free binary code $0,10,110,\ldots,1^{d-2}0,1^{d-1}$. Use $d=2r$ at the first letter and $d=2r-1$ thereafter. Concatenation sends an infinite reduced word to an infinite binary sequence. It is injective because the code is prefix-free; it is surjective because every infinite binary tail begins with exactly one listed codeword (inspect the first zero among its first $d-1$ bits, or take the last all-ones codeword). Repeated parsing constructs the inverse infinite reduced word, and every codeword has length between $1$ and $2r-1$. [step 1.1, algebra]

3.1 If two infinite words have a common prefix of length $k$ and next differ, every pair of representing sequences eventually lies beyond the branching vertex at depth $k$ on the two distinct rays. In a tree the geodesic between such points passes through that vertex, so their joint product liminf is exactly $k$, including for edge-interior representatives. For equal words that liminf is infinite by step 2.1. Hence the supremal boundary product of [F1] is the common-prefix length. A threshold neighbourhood $U_o(\omega,R)$ therefore consists exactly of words sharing a sufficiently long finite prefix with $\omega$. The open-set criterion of [F1] is precisely the cylinder topology on infinite reduced words. [step 2.1, F1]

4.1 A fixed finite reduced prefix maps to the binary cylinder specified by its concatenated codewords, and conversely a binary prefix of length $m$ is decided after reading at most $m$ further reduced letters, since each codeword contributes at least one bit. Thus the map and its inverse are continuous for the cylinder topologies; it is a homeomorphism with $\{0,1\}^{\mathbb N}$, the standard Cantor set. By [F1] and [A1], changing the finite generating set gives a homeomorphic group boundary. [step 3.1, step 2.2, F1, A1] ∎
