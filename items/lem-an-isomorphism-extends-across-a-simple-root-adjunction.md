---
id: lem-an-isomorphism-extends-across-a-simple-root-adjunction
kind: lemma
title: 'A base-field isomorphism extends across simple adjunctions of corresponding roots of an irreducible polynomial'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-polynomials-and-roots-transport-along-field-isomorphisms, thm-universal-property-of-adjoining-an-irreducible-root, thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Theorem 21.13'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

Let $\sigma:F\to F'$ be a field isomorphism, let $p\in F[x]$ be monic and irreducible, and put $p'=\sigma_*p$. If $\alpha$ is a root of $p$ in an extension of $F$ and $\beta$ is a root of $p'$ in an extension of $F'$, then there is a unique field isomorphism
$$ \widetilde\sigma:F(\alpha)\longrightarrow F'(\beta) $$
extending $\sigma$ and satisfying $\widetilde\sigma(\alpha)=\beta$.

## Facts & Assumptions

**Given:** The fields, polynomial, roots, and isomorphism in the Statement.

[F1] Coefficient transport along a field isomorphism is a polynomial-ring isomorphism and transports factorizations ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[F2] The minimal polynomial of an algebraic element is the unique monic irreducible polynomial vanishing at it, and it divides every polynomial that vanishes there ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F3] If an algebraic element has minimal polynomial of degree $n$, its simple extension has the unique power basis $1,\alpha,\ldots,\alpha^{n-1}$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[F4] Adjoining a root of a monic irreducible polynomial has the universal property that the root may be sent to any other root, uniquely over the base field ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

## Proof

**Proof technique:** constructive.

1.1 By [F1], $p'$ is monic and irreducible. Since $p(\alpha)=0$ and $p'(\beta)=0$, [F2] identifies $p$ and $p'$ as the respective minimal polynomials. In particular they have the same degree $n$. [F1, F2]

1.2 By [F3], each element of $F(\alpha)$ has a unique form $\sum_{i<n}a_i\alpha^i$. Define $\widetilde\sigma(\sum_{i<n}a_i\alpha^i)=\sum_{i<n}\sigma(a_i)\beta^i$. The quotient and root universal property in [F4], transported through [F1], shows this is a field homomorphism extending $\sigma$ and sending $\alpha$ to $\beta$. [F1, F3, F4, construct]

2.1 Repeating the construction for $\sigma^{-1}$, with $\beta$ and $\alpha$ interchanged, gives an inverse. Hence $\widetilde\sigma$ is an isomorphism. Its values on the unique power-basis expressions are forced, so it is unique. [F3, step 1.2, discharge-construct] ∎
