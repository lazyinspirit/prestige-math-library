---
id: ex-rational-canonical-form-of-an-explicit-four-by-four-matrix
kind: example
title: "Rational canonical form of an explicit four-by-four matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rational-canonical-form-existence-and-uniqueness, cor-largest-invariant-factor-is-the-minimal-polynomial, cor-product-of-invariant-factors-is-the-characteristic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, companion-block examples"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, rational canonical form examples"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Example

Over $\mathbb Q$, let

$$A=\begin{pmatrix}1&0&0&0\\0&0&0&1\\0&1&0&-1\\0&0&1&1\end{pmatrix}=C(x-1)\oplus C((x-1)(x^2+1)).$$

The invariant factors are $x-1$ and $(x-1)(x^2+1)$. Thus $A$ is already in rational canonical form,

$$\mu_A=(x-1)(x^2+1),\qquad \chi_A=(x-1)^2(x^2+1).$$

## Facts & Assumptions

**Given:** The minimal-polynomial dictionary of [[cor-largest-invariant-factor-is-the-minimal-polynomial]] and the characteristic-polynomial dictionary of [[cor-product-of-invariant-factors-is-the-characteristic-polynomial]].

[L1] In rational canonical form, the blocks are the companion matrices of a divisibility chain of monic invariant factors ([[thm-rational-canonical-form-existence-and-uniqueness]]).

## Verification

**Proof technique:** direct.

1.1 The lower three-by-three block is the companion matrix of $x^3-x^2+x-1=(x-1)(x^2+1)$, while the first block is $C(x-1)=(1)$. Since $x-1$ divides the cubic factor, [L1] gives the displayed polynomial-module summands and confirms that $A$ is in rational canonical form with the stated invariant factors. [L1]

2.1 The largest invariant factor in step 1.1 is $(x-1)(x^2+1)$, so the minimal-polynomial dictionary gives the displayed $\mu_A$. [step 1.1, given]

3.1 The product of the two invariant factors is $(x-1)^2(x^2+1)$, so the characteristic-polynomial dictionary gives the displayed $\chi_A$; their degrees $1$ and $3$ sum to the matrix dimension. [step 1.1, given, algebra] ∎
