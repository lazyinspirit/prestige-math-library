---
id: ex-cubic-polynomial-large-circle-loop-has-degree-three
kind: example
title: "The large-circle loop of $z^3-2z+2$ on $|z|=5$ has degree three"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-large-radius-polynomial-circle-loop-has-degree, def-complex-polynomial-degree-and-monic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.8"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

For $p(z)=z^3-2z+2$ and $R=5$, the normalized based loop obtained from $p(5h(u))$ has degree $3$. A coefficient-scaling homotopy is

$$p_s(z)=z^3+s(-2z+2),\qquad 0\le s\le1.$$

## Facts & Assumptions

**Given:** The complex polynomial $p(z)=z^3-2z+2$ and the radius $R=5$.

[F1] For a nonzero polynomial, its degree is its final coefficient index, and it is monic when its leading coefficient is $1$ ([[def-complex-polynomial-degree-and-monic]]).

[L1] For a monic polynomial of positive degree $n$, a radius greater than $1$ and the sum of the moduli of all lower coefficients gives a normalized circle loop of degree $n$; coefficient scaling supplies the homotopy to the standard $n$-fold loop ([[lem-large-radius-polynomial-circle-loop-has-degree]]).

## Verification

**Proof technique:** direct.

1.1 The coefficient list is $(2,-2,0,1)$, so $p$ is monic of degree $3$ and the lower-coefficient modulus sum is $2+2+0=4<5$. [given, F1, algebra]

2.1 The hypotheses of [L1] hold with $n=3$ and $R=5$, so the normalized loop has degree $3$. Explicitly, on $|z|=5$ and for $0\le s\le1$, one has $|s(-2z+2)|\le s(10+2)\le12<125=|z^3|$, so the displayed homotopy never meets zero; its endpoints are $z^3$ and $z^3-2z+2$. [step 1.1, L1, algebra] ∎

