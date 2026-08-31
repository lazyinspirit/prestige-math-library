---
id: ex-a-monoid-object-written-with-and-without-associators
kind: example
title: "A monoid object written with and without associators"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-monoid-object-and-comonoid-object-in-a-monoidal-category, thm-the-monoid-object-axioms-may-be-written-without-associators]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Example

Let $(M,\mu,\eta)$ be a monoid object in a monoidal category. Its associativity
axiom can be displayed either with explicit bracket-changing data or with the
unbracketed shorthand licensed by coherence.

## Facts & Assumptions

**Given:** A monoid object $(M,\mu,\eta)$.

[L1] The definition of monoid object writes the associativity and unit diagrams with explicit associator and unitor morphisms ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

[L2] After coherence, those axioms may be written without explicit associators ([[thm-the-monoid-object-axioms-may-be-written-without-associators]]).

## Verification

**Proof technique:** direct.

1.1 The explicit associativity axiom is $\mu\circ(\mu\otimes1_M)=\mu\circ(1_M\otimes\mu)\circ\alpha_{M,M,M}$, and the unit axioms are $\mu\circ(\eta\otimes1_M)=\lambda_M$ and $\mu\circ(1_M\otimes\eta)=\rho_M$. [L1]

1.2 By [L2], the same relations may be written as $\mu(\mu\otimes1_M)=\mu(1_M\otimes\mu)$ and $\mu(\eta\otimes1_M)=1_M=\mu(1_M\otimes\eta)$, with the bracket suppressions understood canonically. [L2]

2.1 Thus the two notations express the same monoid-object structure; the second is shorter only because coherence has already absorbed the bracket changes. [step 1.1, step 1.2] ∎
