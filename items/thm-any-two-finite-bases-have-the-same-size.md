---
id: thm-any-two-finite-bases-have-the-same-size
kind: theorem
title: "If $V$ has a basis with $n$ elements and a basis with $m$ elements then $n = m$; and if $V$ has one finite basis then every basis of $V$ is finite"
status: published
origin: session
deps: [cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-steinitz-exchange, def-linear-basis, def-linear-independence, def-linear-combination-and-span, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: [thm-dimension-well-defined, thm-invariance-of-basis-number]
landmark: true
short: "any two finite bases have the same size"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Dimension theorem for vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_theorem_for_vector_spaces"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

1. If $B$ and $B'$ are bases of $V$ ([[def-linear-basis]]) with $B \approx n$ and
   $B' \approx m$ for $n, m \in \mathbb{N}$ ([[def-equinumerous]]), then $n = m$.
2. If $V$ has one finite basis ([[def-countable]]), then every basis of $V$ is
   finite.

**The infinite case is not claimed.** Nothing here asserts that any two infinite
bases of a space are equinumerous. The Steinitz argument gives invariance only
when one of the bases is finite; the infinite case rests on cardinal arithmetic,
which is not available at this point in the reading order, cardinal numbers being
developed much later in the library. What replaces it here is the honest
substitute on the companion page: a proper linear subspace with a basis
equinumerous with a basis of the whole space, which compares two specific
infinite bases through an explicit bijection and assigns no dimension to either
space.

## Facts & Assumptions

**Given:** A field $F$ and a vector space $V$ over $F$.

[L1] A basis of $V$ is a linearly independent subset that spans $V$ ([[def-linear-basis]], [[def-linear-independence]], [[def-linear-combination-and-span]]).

[L2] If $V$ has a spanning subset $S$ with $S \approx p$, then every linearly independent subset $L$ of $V$ is finite and the unique $q$ with $L \approx q$ satisfies $q \le p$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], which is drawn from [[thm-steinitz-exchange]]).

[L3] A finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3); $\approx$ is carried by bijections ([[def-equinumerous]], [[def-injection-surjection-bijection]], [[def-countable]]).

[L4] $\le$ on $\mathbb{N}$ is a total order, in particular antisymmetric ([[thm-nat-linear-order]], [[def-nat-order]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Let $B \approx n$ and $B' \approx m$ be bases of $V$. Then $B$ spans $V$ and is finite of size $n$, while $B'$ is linearly independent, so $B'$ is finite and the unique $q$ with $B' \approx q$ satisfies $q \le n$. Since $B' \approx m$ as well, uniqueness gives $q = m$, so $m \le n$. [L1, L2, L3]

1.2 Exchanging the roles of the two bases, $B'$ spans $V$ and is finite of size $m$ while $B$ is linearly independent, so the unique $q'$ with $B \approx q'$ satisfies $q' \le m$; and $B \approx n$ gives $q' = n$, so $n \le m$. [L1, L2, L3]

1.3 Claim 2. Let $B$ be a finite basis of $V$, say $B \approx p$, and let $B'$ be any basis of $V$. Then $B$ spans $V$ and is finite of size $p$, while $B'$ is linearly independent, so $B'$ is finite. [L1, L2]

2.1 Steps 1.1 and 1.2 give $m \le n$ and $n \le m$, so $n = m$ by antisymmetry, which is claim 1; and claim 2 is step 1.3. [step 1.1, step 1.2, step 1.3, L4] ∎

## Remarks

- **This is the well-definedness obligation for [[def-dimension]].** Without claim 1 the phrase "the dimension of $V$" would name nothing, since a space with a basis of $n$ elements might also have one of $m \ne n$ elements. Claim 2 is the companion statement that finiteness of *some* basis is a property of the space and not of the chosen basis.

- **Both halves come from one corollary, used twice.** The only input is that an independent set cannot outnumber a finite spanning set; applying it in each direction gives the two inequalities, and antisymmetry of the order on $\mathbb{N}$ closes the argument. Nothing here re-runs the exchange.

- **What "not available at this point in the reading order" means.** The infinite invariance statement is a genuine theorem of set theory and algebra, and it is not being denied. It is simply not derivable from anything the library has established so far, since its standard proof compares cardinals; the page states what it can prove and marks the boundary rather than gesturing past it.
