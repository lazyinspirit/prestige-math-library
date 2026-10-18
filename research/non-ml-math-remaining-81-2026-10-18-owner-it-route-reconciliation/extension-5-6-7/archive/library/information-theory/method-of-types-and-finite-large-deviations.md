---
page: method-of-types-and-finite-large-deviations
title: "Method of Types and Finite Large Deviations"
status: draft
items:
  - def-it-empirical-type-and-type-class
  - def-it-finite-alphabet-product-law
  - lem-it-finite-relative-entropy-continuity-on-simplex
  - lem-it-number-of-n-types-polynomial-bound
  - lem-it-n-type-approximation
  - lem-it-finite-product-law-is-iid
  - lem-it-type-probability-identity
  - lem-it-type-class-cardinality-bounds
  - lem-it-type-class-probability-bounds
  - thm-it-type-class-entropy-approximation
  - thm-it-finite-alphabet-sanov-theorem
examples: []
---

For a finite alphabet, this page defines empirical types, type classes, and the finite product mass; it proves the product law is normalized with iid coordinates, then proves exact type probabilities, polynomially sharp class bounds, and finite-alphabet Sanov bounds on the support simplex. The required finite-entropy page is still unavailable; local entropy and divergence formulas use the published finite definition and its nats and zero-mass conventions. The required measure-theoretic information page is also unavailable, and this page makes no general conditional-information claim. The B page compares a worked Bernoulli tail with the published Hoeffding bound.

The map from words to their empirical types has the type classes as its fibers. In the diagram, $\Phi(x^n)=(\widehat P_{x^n},x^n)$ is a bijection onto the disjoint union of the fibers and $\pi(q,x^n)=q$ is the projection. The diagram records the partition; the proofs on this page establish it directly.

```tikzcd
\mathcal A^n \arrow[r, "\widehat P"] \arrow[d, "\Phi"'] &
\mathcal P_n(\mathcal A) \arrow[d, equal] \\
\coprod_{q\in\mathcal P_n(\mathcal A)}T_q \arrow[r, "\pi"'] &
\mathcal P_n(\mathcal A)
```

