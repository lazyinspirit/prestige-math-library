---
id: "ex-regular-local-ambient-cover-minimal-dimension"
kind: "example"
title: "regular local ambient cover minimal dimension"
deps: ["def-axiom-of-choice", "def-embedding-dimension-and-regular-local-ring", "lem-regular-local-quotient-by-parameter-is-regular"]
proof_strategy: "Explicit algebraic derivation"
sources:
  references:
    - title: "Exercise 12.18, p.117"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If a nonzero Noetherian local ring $A$ is a quotient of at least one regular local ring, then the least dimension of a regular local ring surjecting onto $A$ is $\operatorname{edim}A$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-quotient-by-parameter-is-regular]]: Under AC, quotienting a regular local ring by an element of a cotangent basis gives a regular local ring of dimension one less.

[F2] [[def-embedding-dimension-and-regular-local-ring]]: Embedding dimension is the dimension of the cotangent vector space, and in a regular local ring it equals ring dimension.

## Verification

1.1 For a surjection $R\to A=R/I$ of local rings the maximal ideal of $A$ is $\mathfrak m_R/I$ and the residue fields agree. Thus its cotangent space is the quotient $\mathfrak m_R/(I+\mathfrak m_R^2)$. If $R$ is regular of dimension $d$, [F2] gives $\operatorname{edim}A\le d$. [F2, algebra]

2.1 For a supplied regular cover put $c=\dim_k((I+\mathfrak m_R^2)/\mathfrak m_R^2)$. Lift a basis of this subspace to $x_1,\ldots,x_c\in I$ and extend their cotangent classes to a basis of $\mathfrak m_R/\mathfrak m_R^2$. Under AC, apply [F1] successively to these $c$ basis members; after each quotient the remaining classes are a cotangent basis. The resulting ring $R/(x_1,\ldots,x_c)$ is regular of dimension $d-c=\operatorname{edim}A$ by the cotangent quotient calculation of step 1.1. It still surjects onto $A$, so the lower bound is attained. If $c=0$ retain the original cover; if $c=d$ the new cover is the residue field. [F1, step 1.1, algebra] ∎
