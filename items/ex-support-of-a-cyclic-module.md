---
id: ex-support-of-a-cyclic-module
kind: example
title: "The support of Z/12Z is the pair of primes (2) and (3)"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-support-of-a-cyclic-module-is-its-vanishing-set, def-support-of-a-module]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (13.27)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

As a $\mathbb Z$-module,
$$
\operatorname{Supp}_{\mathbb Z}(\mathbb Z/12\mathbb Z)=\{(2),(3)\}.
$$

## Facts & Assumptions

**Given:** The $\mathbb Z$-module $\mathbb Z/12\mathbb Z$.

[L1] The support of $R/I$ is the set of prime ideals containing $I$ ([[lem-support-of-a-cyclic-module-is-its-vanishing-set]]).

[L2] The support of a module is a set of prime ideals ([[def-support-of-a-module]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $R=\mathbb Z$ and $I=(12)$. A prime ideal of $\mathbb Z$ contains $(12)$ exactly when its prime generator divides $12$, so the only such prime ideals are $(2)$ and $(3)$. [L1, algebra]

2.1 Therefore $\operatorname{Supp}_{\mathbb Z}(\mathbb Z/12\mathbb Z)=\{(2),(3)\}$, as claimed. [step 1.1, L2] ∎
