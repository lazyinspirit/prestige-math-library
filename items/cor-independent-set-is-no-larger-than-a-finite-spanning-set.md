---
id: cor-independent-set-is-no-larger-than-a-finite-spanning-set
kind: corollary
title: "If $V$ has a spanning set with $n$ elements, then every linearly independent subset of $V$ is finite with at most $n$ elements; in particular $V$ has no linearly independent subset equinumerous with $\\mathbb{N}$"
status: published
origin: session
deps: [thm-steinitz-exchange, def-linear-independence, def-linear-combination-and-span, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [cor-independent-bounded-by-spanning]
landmark: false
short: "independent sets are bounded by a finite spanning set"
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
    - title: "Steinitz exchange lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Steinitz_exchange_lemma"
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and suppose
$V$ has a spanning subset $S$ ([[def-linear-combination-and-span]]) with
$S \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]). Then:

1. every linearly independent subset $L \subseteq V$
   ([[def-linear-independence]]) is finite ([[def-countable]]), and the unique
   $m \in \mathbb{N}$ with $L \approx m$ satisfies $m \le n$;
2. no linearly independent subset of $V$ is equinumerous with $\mathbb{N}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a spanning subset $S \subseteq V$ with $S \approx n$, and a linearly independent subset $L \subseteq V$.

[L1] Steinitz exchange: under these hypotheses $L$ is finite and the unique $m$ with $L \approx m$ satisfies $m \le n$ ([[thm-steinitz-exchange]], claim 1).

[L2] A finite set is equinumerous with exactly one natural number, and $\mathbb{N} \not\approx p$ for every $p \in \mathbb{N}$ ([[lem-pigeonhole]], claims 3 and 4).

[L3] $\approx$ is symmetric and transitive, being carried by bijections; and a set is finite when it is equinumerous with some natural number ([[def-equinumerous]], [[def-injection-surjection-bijection]], [[def-countable]], [[def-natural-numbers]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is exactly claim 1 of the Steinitz exchange lemma, whose hypotheses are the ones assumed here: $S$ spans $V$ and is finite of size $n$, and $L$ is linearly independent. [L1]

1.2 Suppose some linearly independent $L \subseteq V$ satisfied $L \approx \mathbb{N}$. By claim 1 the set $L$ is finite, so $L \approx m$ for some $m \in \mathbb{N}$; by symmetry and transitivity of $\approx$ this gives $\mathbb{N} \approx m$, which is impossible. [L1, L2, L3]

2.1 Claim 1 is step 1.1 and claim 2 is step 1.2. [step 1.1, step 1.2] ∎

## Remarks

- **Claim 2 is the form in which later items say a space is infinite-dimensional.** Exhibiting a linearly independent subset equinumerous with $\mathbb{N}$ shows, by this corollary read backwards, that the space has no finite spanning set at all, hence no finite basis. That is exactly the route taken on the companion page by the explicit infinite basis for the eventually zero families and by the independent set of $F^{\mathbb{N}}$ that does not span it.

- **The bound is on the independent set, not on the spanning set.** A spanning set may be enlarged freely without ceasing to span, so no bound in the other direction holds; what is bounded is how many vectors can be independent, and the bound is the size of *any* finite spanning set.

- **Nothing here assumes $V$ has a basis.** The hypothesis is a finite spanning set, which need not be independent; that a spanning set contains a basis is [[cor-every-spanning-set-contains-a-basis]], proved later and by a different route.
