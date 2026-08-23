---
id: ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc
kind: example
title: "An exact polynomial bound from the boundary maximum principle"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-boundary-maximum-modulus-principle, thm-complex-polynomials-and-rational-functions-are-holomorphic, lem-complex-conjugation-and-modulus-laws]
justified_by: []
forward_refs: []
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §3.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

For $p(z)=z^2-2z+2$ on the closed unit disc,
$$\max_{|z|\le1}|p(z)|=5,$$
and equality is attained at the boundary point $z=-1$.

## Facts & Assumptions

**Given:** The polynomial $p(z)=z^2-2z+2$ and the triangle inequality and multiplicative law for complex modulus ([[lem-complex-conjugation-and-modulus-laws]]).

[L1] If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[L2] Every complex polynomial is entire ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

## Verification

**Proof technique:** direct.

1.1 If $|z|\le1$, then $|p(z)|\le|z|^2+2|z|+2\le1+2+2=5$. [given, algebra]

1.2 By [L2], $p$ is entire, so [L1] applies to the open unit disc and confirms that its maximum on the closed disc occurs on the unit circle. [L1, L2]

2.1 The point $-1$ lies on that circle and $p(-1)=1+2+2=5$. Together with step 1.1, this proves that the exact maximum is $5$. [step 1.1, step 1.2, algebra] ∎
