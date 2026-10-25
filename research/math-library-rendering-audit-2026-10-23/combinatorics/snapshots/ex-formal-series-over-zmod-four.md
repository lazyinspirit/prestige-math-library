---
id: ex-formal-series-over-zmod-four
kind: example
title: "Nonzero constant series can multiply to zero in $(\\mathbb Z/4\\mathbb Z)\\llbracket x\\rrbracket$"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-integers-modulo-n, def-addition-and-multiplication-modulo-n, thm-integers-modulo-n-basic-algebra, lem-formal-order-laws, thm-formal-power-series-ring-and-polynomial-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In $(\mathbb Z/4\mathbb Z)\llbracket x\rrbracket$, the nonzero constant series $2$ satisfies

$$2\cdot2=0.$$

Thus exact additivity of formal order cannot be extended from domains to all commutative rings.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Two residue classes are equal exactly when their representatives are congruent ([[def-integers-modulo-n]]).

[F2] Multiplication modulo $n$ is defined by $[a]_n[b]_n=[ab]_n$ ([[def-addition-and-multiplication-modulo-n]]).

[F3] The product on $R\llbracket x\rrbracket$ is the Cauchy product ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[F4] Over an integral domain, formal order is additive on products with the $+\infty$ convention, and the power-series ring is an integral domain ([[lem-formal-order-laws]]).

## Verification

**Proof technique:** compute the only coefficient.

1.1 The residue class of $2$ modulo $4$ is nonzero because $2\not\equiv0\pmod4$, while its square is $[2]_4[2]_4=[4]_4=[0]_4$. The constant-series embedding preserves multiplication, so the two nonzero constant series multiply to the zero series. [given, F1, F2, F3]

2.1 Each factor has formal order $0$, whereas the product has order $+\infty$. This does not contradict the exact product law because $\mathbb Z/4\mathbb Z$ is not an integral domain. [step 1.1, given, F4] ∎
