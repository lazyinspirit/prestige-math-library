---
id: fs-isomorphism-between-splitting-fields-is-unique
kind: false-statement
title: 'FALSE: the isomorphism between two splitting fields that fixes the base field is unique'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-splitting-fields-are-unique-up-to-base-isomorphism, ex-splitting-field-of-x-squared-minus-two, lem-an-isomorphism-extends-across-a-simple-root-adjunction, thm-eisenstein-irreducibility-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Corollary 21.14'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

**False statement.** If $E$ and $E'$ are splitting fields of the same polynomial over $F$, there is exactly one isomorphism $E\to E'$ that fixes $F$ pointwise.

## Facts & Assumptions

**Given:** The splitting field $E=\mathbb Q(\sqrt2)$ of $x^2-2$ over $\mathbb Q$.

[F1] Any two splitting fields of the same nonzero polynomial are isomorphic over the base field ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

[F2] The splitting field of $x^2-2$ over $\mathbb Q$ is $E=\mathbb Q(\sqrt2)$, with roots $\sqrt2$ and $-\sqrt2$ ([[ex-splitting-field-of-x-squared-minus-two]]).

[F3] An isomorphism of base fields extends across simple adjunctions when a chosen root is sent to a corresponding root of the transported irreducible polynomial ([[lem-an-isomorphism-extends-across-a-simple-root-adjunction]]).

[F4] Eisenstein's criterion proves a primitive integer polynomial irreducible under its prime-divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

## Refutation

**Proof technique:** counterexample.

1.1 Take both splitting fields to be $E=E'=\mathbb Q(\sqrt2)$ for $x^2-2$. The identity map is one $\mathbb Q$-isomorphism $E\to E$. [F2]

1.2 The polynomial $x^2-2$ satisfies [F4] with the prime $2$, so it is irreducible. Apply [F3] to the identity on $\mathbb Q$ and the corresponding roots $\sqrt2$ and $-\sqrt2$. It gives a $\mathbb Q$-automorphism $\tau:E\to E$ satisfying $\tau(\sqrt2)=-\sqrt2$. [F2, F3, F4]

2.1 The roots are distinct: if $\sqrt2=-\sqrt2$, then $2\sqrt2=0$, and multiplication by $1/2$ would give $\sqrt2=0$, contradicting $(\sqrt2)^2=2$. Hence $\tau$ is not the identity. Thus there are at least two base-fixing isomorphisms, refuting uniqueness while leaving the existence result [F1] intact. [F1, F2, step 1.1, step 1.2, algebra] ∎
