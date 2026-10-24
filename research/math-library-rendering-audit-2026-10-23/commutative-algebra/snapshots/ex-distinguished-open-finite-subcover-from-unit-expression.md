---
id: ex-distinguished-open-finite-subcover-from-unit-expression
kind: example
title: "A unit-ideal expression gives a finite distinguished-open cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-spectrum-compactness-unit-expression-finite-subcover]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (13.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

In $\mathbb Z$ one has $$ 1=(-1)\cdot 2+1\cdot 3. $$ Therefore $$ \operatorname{Spec}(\mathbb Z)=D(2)\cup D(3). $$

## Facts & Assumptions

**Given:** The ring $R=\mathbb Z$.

[L1] A finite unit expression yields a finite distinguished-open cover of the spectrum ([[lem-spectrum-compactness-unit-expression-finite-subcover]]).

## Verification

**Proof technique:** direct.

1.1 The displayed identity is a unit expression of the form required by [L1], with $f_1=2$ and $f_2=3$. [L1, given]

2.1 Applying [L1] gives $\operatorname{Spec}(\mathbb Z)=D(2)\cup D(3)$. Concretely, every prime ideal of $\mathbb Z$ omits at least one of $2$ and $3$, because no prime ideal contains their linear combination $1$. [L1, step 1.1, algebra]

3.1 Thus one explicit unit-ideal expression produces a finite distinguished-open cover. [step 2.1] ∎
