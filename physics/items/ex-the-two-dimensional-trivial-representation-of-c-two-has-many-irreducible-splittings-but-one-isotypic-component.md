---
id: ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component
kind: example
title: "The two-dimensional trivial representation of $C_2$ has many irreducible splittings but one isotypic component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-trivial-regular-and-permutation-representations, def-subrepresentation-and-irreducible-representation, thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field, let $C_2=\{e,t\}$, and let $V=ke_1\oplus ke_2$ with the
trivial action of $C_2$. Then

$$ V=ke_1\oplus ke_2 = k(e_1+e_2)\oplus ke_2 $$

are two different decompositions into irreducible subrepresentations, but the
unique isotypic component is all of $V$.

## Facts & Assumptions

**Given:** A field $k$, the two-dimensional vector space $V=ke_1\oplus ke_2$, and the trivial action of $C_2$ on $V$.

[L1] The one-dimensional trivial representation is the representation on $k$ in which every group element acts as the identity ([[def-trivial-regular-and-permutation-representations]]).

[L2] A subrepresentation is an invariant subspace, and an irreducible representation is a nonzero representation with no proper nonzero subrepresentation ([[def-subrepresentation-and-irreducible-representation]]).

[L3] The isotypic decomposition of a completely reducible representation is unique ([[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]).

## Verification

**Proof technique:** direct.

1.1 Every line in $V$ is invariant because the action is trivial. Any nonzero line is irreducible by [L2], since a one-dimensional vector space has only the subspaces $0$ and itself. Therefore both displayed decompositions are decompositions into irreducible subrepresentations, and they are different because $ke_1 \ne k(e_1+e_2)$. [L2, given, algebra]

2.1 On every nonzero line the action is trivial, so each line is equivalent to the one-dimensional trivial representation of [L1]. Hence every irreducible summand of $V$ has the same type, and the sum of all irreducible summands of that type is all of $V$. By [L3], this is the unique isotypic component. [L1, L3, step 1.1, given, algebra] ∎
