---
id: ex-the-published-module-five-lemma-as-an-instance
kind: example
title: "The published module five lemma as an instance"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-five-lemma-in-an-abelian-category,
       thm-five-lemma-for-modules]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Example

Take the ambient abelian category to be $R\text{-}\mathbf{Mod}$. Then the
categorical five lemma is the isomorphism clause of the already-published
module five lemma.

## Facts & Assumptions

**Given:** A commutative five-term diagram with exact rows in $R\text{-}\mathbf{Mod}$.

[L1] The categorical five lemma holds in any abelian category
([[thm-five-lemma-in-an-abelian-category]]).

[L2] The module case is already published under the expected name
([[thm-five-lemma-for-modules]]).

## Verification

1.1 The hypotheses of [L1] specialize verbatim to a commutative exact-row diagram of modules. [L1]

2.1 The conclusion of [L1] is exactly the final, isomorphism clause of [L2]. The separate injective and surjective clauses of [L2] are sharper module statements, while its final clause is the module-valued instance of the categorical five lemma. [L2, step 1.1] ∎
