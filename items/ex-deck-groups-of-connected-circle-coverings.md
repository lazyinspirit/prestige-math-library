---
id: ex-deck-groups-of-connected-circle-coverings
kind: example
title: 'Deck groups of connected circle coverings: $\mathbb Z/n\mathbb Z$ for $n\ge1$ and $\mathbb Z$ for the universal cover'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-connected-coverings-of-circle-classified-by-nonnegative-integers,
       cor-every-connected-covering-of-circle-is-regular,
       cor-deck-group-of-a-regular-covering,
       prop-integers-modulo-n-as-a-quotient-group,
       cor-real-line-is-universal-cover-of-circle,
       thm-fundamental-group-of-the-circle,
       prop-real-line-mod-integers-is-compact-and-path-connected,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-locally-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Section 1.3 and Proposition 1.39"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

Let $E_n\to\mathbb R/\mathbb Z$ be the connected circle covering classified by $n\mathbb Z$.

- For $n\ge1$, it has $n$ sheets and $$\operatorname{Deck}(E_n/(\mathbb R/\mathbb Z))\cong(\mathbb Z/n,+).$$
- For $n=0$, it is the real-line universal cover and its deck group is $(\mathbb Z,+)$.

The case $n=1$ has the trivial deck group.

## Facts & Assumptions

**Given:** The connected circle coverings $E_n$ from [[cor-connected-coverings-of-circle-classified-by-nonnegative-integers]].

[L1] A regular connected covering with base group $G$ and induced subgroup $H$ has deck group $G/H$ ([[cor-deck-group-of-a-regular-covering]]).

[F1] For every natural $n$, $(\mathbb Z,+)/n\mathbb Z$ is the same group as $(\mathbb Z/n,+)$, including $n=0,1$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L2] Every connected covering of the quotient circle is regular ([[cor-every-connected-covering-of-circle-is-regular]]).

[L3] The $n=0$ classified cover is the real-line universal cover ([[cor-connected-coverings-of-circle-classified-by-nonnegative-integers]], [[cor-real-line-is-universal-cover-of-circle]]).

[F2] Degree gives an isomorphism from the circle fundamental group to $(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

[F3] The quotient circle is path-connected, and its open quotient arcs are homeomorphic to convex intervals and give arbitrarily small path-connected neighbourhoods, so it is locally path-connected ([[prop-real-line-mod-integers-is-compact-and-path-connected]], [[lem-open-quotient-arcs-in-real-line-mod-integers]], [[thm-convex-subsets-have-trivial-fundamental-group]], [[def-locally-connected]]).

## Verification

**Proof technique:** direct.

1.1 Let $n\ge1$. The base hypotheses for [L1] hold by [F3], and [L2] makes $E_n$ regular, so [L1] gives the quotient of the circle group by $n\mathbb Z$. The degree isomorphism [F2] identifies this with $(\mathbb Z,+)/n\mathbb Z$, and [F1] identifies that quotient with $(\mathbb Z/n,+)$. At $n=1$ this group has one element. [L1, L2, F1, F2, F3]

2.1 For $n=0$, [L3] identifies $E_0$ with the real-line universal cover. It is regular by [L2], and [L1], [F1], and [F2] give its deck group as $(\mathbb Z,+)/0\mathbb Z=(\mathbb Z,+)$. [L1, L2, L3, F1, F2, F3] ∎
