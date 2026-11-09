---
id: thm-author-1437578267d2-curve-norm-input
kind: theorem
title: External norm-divisor identity for integral curves
status: draft
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Principal divisors and pushforward
      url: https://stacks.math.columbia.edu/tag/02RT
      locator: Lemma 42.18.1; Situation 42.7.1, tag 02QL, specialized to the spectrum
        of a field with dimension function zero
      statement: For a proper dominant morphism of integral finite-type curves over a
        field, pushforward of the principal divisor of a nonzero rational
        function equals the principal divisor of its field norm, with
        residue-degree weights.
      hypotheses: Both curves are integral and finite type over a field, have
        dimension one, and the morphism is proper and dominant. Normality and
        separability are not assumed.
      reading_limits: Read the full HTML statement and displayed proof, including its
        reduction to the finite-domain formula. The linked finite-morphism
        reduction and wider intersection theory were not reconstructed.
    - title: The Stacks Project, Orders of vanishing
      url: https://stacks.math.columbia.edu/tag/02MJ
      locator: Lemma 10.121.8 and Definition 10.121.2, tag 02MD
      statement: For a finite extension of domains over a one-dimensional noetherian
        local domain, the order of a norm is the sum of upstairs local orders
        weighted by residue-field degrees; orders are differences of quotient
        lengths.
      hypotheses: The base is a one-dimensional noetherian local domain, the extension
        is finite and is a domain, and the element is nonzero in its fraction
        field. Normality and separability are not assumed.
      reading_limits: Read the full statement and displayed proof of Lemma 10.121.8
        and the displayed order definition. The proof of its cited
        determinant-length lemma was not read or reconstructed.
dependency_level: 0
---

## Statement
Let $C,T$ be integral finite-type curves over a field and $p:C\to T$ proper and dominant. For $g\in k(C)^\times$, with $K=k(T)$ and $L=k(C)$,
$$p_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{L/K}(g).$$
Here the norm is the determinant of multiplication by $g$ on the finite-dimensional $K$-vector space $L$; $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$; and orders use differences of local quotient lengths. Neither curve need be normal or smooth, and $L/K$ need not be separable.

## Source contract
**Given:** The field, integral curves, proper dominant morphism and nonzero rational function in the Statement.

**Goal:** Record the established external identity with its singular-curve coefficient convention.

[F1] Stacks Project Lemma 42.18.1 proves the pushforward identity in its dimension-function setup, which includes finite-type curves over a field.

[F2] Stacks Project Lemma 10.121.8 and Definition 10.121.2 give the weighted local norm formula using quotient-length orders without normality.

## External input
Import [F1], with the coefficient convention of [F2]. This is an equality of zero-cycles before quotienting by rational equivalence. The cited proof is not claimed as a local reconstruction.
