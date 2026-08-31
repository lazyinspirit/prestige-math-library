---
id: ex-dirichlet-hyperbola-lattice-decomposition
kind: example
title: "A small lattice decomposition for Dirichlet's hyperbola method"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-dirichlet-hyperbola-method,
       prop-divisor-functions-under-dirichlet-convolution]
justified_by: []
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
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Example

Take $x=12$, $U=3$, and $V=4$, so $UV=12$. For $\tau=\mathbf1*\mathbf1$,
Dirichlet's hyperbola identity becomes

$$
\sum_{n\le12}\tau(n)=\sum_{a\le3}\left\lfloor\frac{12}{a}\right\rfloor+\sum_{b\le4}\left\lfloor\frac{12}{b}\right\rfloor-3\cdot4.
$$

Numerically this is

$$
35=(12+6+4)+(12+6+4+3)-12.
$$

## Facts & Assumptions

**Given:** The value $x=12$ and the split $U=3$, $V=4$.

## Verification

**Proof technique:** direct.

1.1 By [[prop-divisor-functions-under-dirichlet-convolution]], $\tau=\mathbf1*\mathbf1$. Therefore [[thm-dirichlet-hyperbola-method]] applies with $F(y)=G(y)=\lfloor y\rfloor$. [given]

2.1 The two arm sums are $$\sum_{a\le3}\left\lfloor\frac{12}{a}\right\rfloor=12+6+4=22,\qquad \sum_{b\le4}\left\lfloor\frac{12}{b}\right\rfloor=12+6+4+3=25,$$ and the overlap is $F(3)G(4)=3\cdot4=12$. [step 1.1, given, algebra]

3.1 Hence the hyperbola identity gives $\sum_{n\le12}\tau(n)=22+25-12=35$. This matches the direct total $1+2+2+3+2+4+2+4+3+4+2+6=35$. [step 2.1, given, algebra] ∎
