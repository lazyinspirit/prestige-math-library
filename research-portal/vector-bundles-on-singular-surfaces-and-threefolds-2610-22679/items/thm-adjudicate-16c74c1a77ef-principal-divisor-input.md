---
id: thm-adjudicate-16c74c1a77ef-principal-divisor-input
kind: theorem
title: Proper norm and graph formulas for principal divisors
status: published
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Stacks Project, Principal divisors and proper pushforward
      url: https://stacks.math.columbia.edu/tag/02RT
      locator: Situation 42.7.1 (02QL); Lemma 42.18.1 (02RT) or Lemma 42.18.2 (02RQ),
        respectively; live online tag text retrieved and inspected 2026-11-09;
        no pinned commit asserted
      statement: A dominant proper morphism between integral schemes of equal
        dimension over a locally noetherian universally catenary base with a
        dimension function pushes a principal divisor to the divisor of its
        function-field norm.
      hypotheses: Integral schemes locally of finite type over the base in Situation
        42.7.1; the norm formula requires a dominant proper map of equal
        dimension. Here the base is Spec k with dimension function zero. No
        separatedness over k, normality or separability is required.
      reading_limits: Read Situation 42.7.1 and both complete lemma statements and
        displayed proofs in the primary Stacks pages. The underlying
        commutative-algebra norm identity and cited foundational lemmas were not
        reconstructed.
    - title: Stacks Project, Graph formula for a principal divisor
      url: https://stacks.math.columbia.edu/tag/02RQ
      locator: Situation 42.7.1 (02QL); Lemma 42.18.1 (02RT) or Lemma 42.18.2 (02RQ),
        respectively; live online tag text retrieved and inspected 2026-11-09;
        no pinned commit asserted
      statement: The closure of the graph of an invertible rational function in the
        relative projective line is proper birational; its zero-minus-pole
        Cartier-divisor cycle pushes forward to the principal divisor.
      hypotheses: Integral schemes locally of finite type over the base in Situation
        42.7.1; the norm formula requires a dominant proper map of equal
        dimension. Here the base is Spec k with dimension function zero. No
        separatedness over k, normality or separability is required.
      reading_limits: Read Situation 42.7.1 and both complete lemma statements and
        displayed proofs in the primary Stacks pages. The underlying
        commutative-algebra norm identity and cited foundational lemmas were not
        reconstructed.
dependency_level: 0
---

## Statement
Let $k$ be a field. For integral finite-type $k$-schemes $P,Q$, a proper dominant generically finite morphism $p:P\to Q$ and $h\in k(P)^\times$ satisfy
$$p_*\operatorname{div}_P(h)=\operatorname{div}_Q\operatorname{Nm}_{k(P)/k(Q)}(h).$$
Divisor orders use lengths in the one-dimensional local rings, and pushforward includes residue-field degrees.

For an integral finite-type $k$-scheme $Q$ and $f\in k(Q)^\times$, let $G\subset Q\times\mathbf P^1$ be the reduced closure of the graph on any nonempty open where $f$ is invertible. Its projection $p:G\to Q$ is proper birational. The fibers $G_0,G_\infty$ are effective Cartier divisors, allowing the empty divisor, and
$$p_*([G_0]-[G_\infty])=\operatorname{div}_Q(f).$$
Neither scheme is required to be separated over $k$.

## External input
Import exactly the norm and graph formulas of Stacks Lemmas 42.18.1 and 42.18.2. The field base with dimension function zero satisfies Situation 42.7.1. The formulas concern the actual length-weighted cycles; they do not assume a higher-Chow comparison or a localization theorem. These substantial divisor inputs are cited, not locally reconstructed.
