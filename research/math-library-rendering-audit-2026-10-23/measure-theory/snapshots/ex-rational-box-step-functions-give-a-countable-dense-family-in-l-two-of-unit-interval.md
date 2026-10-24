---
id: ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval
kind: example
title: "A concrete countable dense family in $L^2[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]
landmark: false
proof_strategy: "Specialize the rational-box step family to one-dimensional dyadic or rational intervals in $[0,1]$. The point of the example is to show the abstract separability proof as an actual list of approximants."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Example

Assume the Axiom of Countable Choice.

Inside $L^2([0,1])$, the finite rational linear combinations of indicators of
rational half-open intervals $(a,b] \subseteq [0,1]$ form a countable dense
family.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the space $L^2([0,1])$.

[L1] Rational box-step functions form a countable dense subset of $L^p(\mathbb{R}^n)$ for every finite $p$ ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

## Verification

**Proof technique:** direct.

1.1 Specialize [L1] to $n=1$ and $p=2$. The rational boxes in one dimension are [L1, given] the rational half-open intervals $(a,b]$, and restricting to those contained in $[0,1]$ still leaves a countable family. [L1, given]

2.1 Extend a function on $[0,1]$ by $0$ outside $[0,1]$. Then approximation in [step 1.1, algebra] $L^2(\mathbb{R})$ by rational interval step functions supported in $[0,1]$ restricts back to approximation in $L^2([0,1])$. [step 1.1, algebra]

3.1 Therefore the stated family is an explicit countable dense subset of [step 2.1] $L^2([0,1])$. [step 2.1] ∎
