---
id: ex-liouville-square-indicator
kind: example
title: "Working out the square-indicator convolution for prime powers"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-liouville-function, prop-liouville-convolution-square-indicator]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Example

For a prime $p$,

$$
(\mathbf 1*\lambda)(p^4)=1-1+1-1+1=1
$$

and

$$
(\mathbf 1*\lambda)(p^3)=1-1+1-1=0.
$$

So the convolution distinguishes the square prime power $p^4$ from the
nonsquare prime power $p^3$.

## Facts & Assumptions

**Given:** A prime $p$.

## Verification

**Proof technique:** direct.

1.1 By [[def-liouville-function]], $\lambda(p^j)=(-1)^j$ for every $j\ge0$. Therefore $(\mathbf 1*\lambda)(p^4)=\sum_{j=0}^{4}\lambda(p^j)=\sum_{j=0}^{4}(-1)^j=1$. [given, algebra]

1.2 The same computation gives $(\mathbf 1*\lambda)(p^3)=\sum_{j=0}^{3}\lambda(p^j)=\sum_{j=0}^{3}(-1)^j=0$. [given, algebra]

2.1 These explicit values match the square-indicator statement of [[prop-liouville-convolution-square-indicator]] for an even and an odd exponent. [step 1.1, step 1.2] ∎
