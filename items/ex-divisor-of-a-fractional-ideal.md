---
id: ex-divisor-of-a-fractional-ideal
kind: example
title: "The divisor and class of a fractional ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-principal-divisor-exact-sequence]
justified_by: []
aliases: []
landmark: false
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
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice.

In $R=\mathbb Z$, the fractional ideal
$$
I:=\frac{40}{9}\mathbb Z=(2)^3(5)(3)^{-2}
$$
has divisor
$$
\operatorname{div}(40/9)=3[(2)]+[(5)]-2[(3)],
$$
and its ideal class is trivial.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Dedekind domain $R=\mathbb Z$, and the fractional ideal $I=(40/9)\mathbb Z$.

[L1] For $x\in\mathbb Q^\times$, the principal-divisor sequence sends $x$ to the valuation vector of $(x)$ and then sends that divisor to the trivial class of $(x)$ ([[thm-principal-divisor-exact-sequence]]).

## Verification

**Proof technique:** direct.

1.1 The generator $40/9$ contributes prime exponents $3$ at $(2)$, $1$ at $(5)$, and $-2$ at $(3)$, so $\operatorname{div}(40/9)$ is the displayed valuation vector. [L1, given, algebra]

2.1 Because $I$ is principal, its class is zero in the class group by [L1]. [L1, step 1.1] ∎
