---
id: ex-formal-series-over-zmod-four
kind: example
title: "Nonzero constant series can multiply to zero in $(\\mathbb Z/4\\mathbb Z)\\llbracket x\\rrbracket$"
status: draft
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

**Given:** The quotient classes and their equality criterion from [[def-integers-modulo-n]], the multiplication rule $[a]_n[b]_n=[ab]_n$ from [[def-addition-and-multiplication-modulo-n]], the ring laws from [[thm-integers-modulo-n-basic-algebra]], the domain-qualified order law [[lem-formal-order-laws]], and the constant embedding of [[thm-formal-power-series-ring-and-polynomial-embedding]].

## Verification

**Proof technique:** compute the only coefficient.

1.1 The residue class of $2$ modulo $4$ is nonzero because $2\not\equiv0\pmod4$, while its square is $[2]_4[2]_4=[4]_4=[0]_4$. The constant-series embedding preserves multiplication, so the two nonzero constant series multiply to the zero series. [given]

2.1 Each factor has formal order $0$, whereas the product has order $+\infty$. This does not contradict the exact product law because $\mathbb Z/4\mathbb Z$ is not an integral domain. [step 1.1, given] ∎
