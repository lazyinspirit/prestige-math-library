---
title: Proper norm and graph formulas for principal divisors
status: published
research_item: thm-adjudicate-16c74c1a77ef-principal-divisor-input
dependency_level: 0
---

PDF p. 13: Proof of Proposition 6.1: ordinary CH3 identification and degree-seven vanishing

## Prerequisites

None.


## Statement
Let $k$ be a field. For integral finite-type $k$-schemes $P,Q$, a proper dominant generically finite morphism $p:P\to Q$ and $h\in k(P)^\times$ satisfy
$$p_*\operatorname{div}_P(h)=\operatorname{div}_Q\operatorname{Nm}_{k(P)/k(Q)}(h).$$
Divisor orders use lengths in the one-dimensional local rings, and pushforward includes residue-field degrees.

For an integral finite-type $k$-scheme $Q$ and $f\in k(Q)^\times$, let $G\subset Q\times\mathbf P^1$ be the reduced closure of the graph on any nonempty open where $f$ is invertible. Its projection $p:G\to Q$ is proper birational. The fibers $G_0,G_\infty$ are effective Cartier divisors, allowing the empty divisor, and
$$p_*([G_0]-[G_\infty])=\operatorname{div}_Q(f).$$
Neither scheme is required to be separated over $k$.

## External input
Import exactly the norm and graph formulas of Stacks Lemmas 42.18.1 and 42.18.2. The field base with dimension function zero satisfies Situation 42.7.1. The formulas concern the actual length-weighted cycles; they do not assume a higher-Chow comparison or a localization theorem. These substantial divisor inputs are cited, not locally reconstructed.
