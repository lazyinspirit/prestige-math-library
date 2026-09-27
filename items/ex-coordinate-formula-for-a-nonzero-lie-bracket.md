---
id: ex-coordinate-formula-for-a-nonzero-lie-bracket
kind: example
title: "A coordinate computation of a nonzero Lie bracket"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-lie-bracket-of-smooth-vector-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (ex-coordinate-formula-for-a-nonzero-lie-bracket). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

On $\mathbb R$, let $X=d/dx$ and $Y=x\,d/dx$. Then

$$ [X,Y]=\frac{d}{dx}. $$

## Facts & Assumptions

**Given:** The vector fields $X=d/dx$ and $Y=x\,d/dx$ on $\mathbb R$.

[L1] The Lie bracket is the commutator of vector-field actions on smooth functions ([[def-lie-bracket-of-smooth-vector-fields]]).

## Verification

**Proof technique:** direct.

1.1 For every smooth $h:\mathbb R\to\mathbb R$, the commutator definition [L1] gives $$[X,Y]h=X(xh')-Y(h')=(xh')'-xh''=h'.$$ Thus $[X,Y]$ acts exactly as $d/dx$ on all smooth functions. [L1, given, algebra]

2.1 Hence $[X,Y]=d/dx$, so the Lie bracket is nonzero even though $X$ is constant. [step 1.1] ∎
