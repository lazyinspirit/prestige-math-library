---
id: ex-divisor-summatory-error-table
kind: example
title: "The divisor summatory estimate through several small values"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-divisor-counting-summatory-estimate]
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
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Example

Let

$$
E(x):=\sum_{n\le x}\tau(n)-x\log x-(2\gamma-1)x.
$$

Using $\gamma\approx0.5772156649$, the theorem predicts $E(x)=O(\sqrt x)$. For
four small values one gets:

| $x$ | $\sum_{n\le x}\tau(n)$ | $x\log x+(2\gamma-1)x$ | $E(x)$ | $E(x)/\sqrt x$ |
| --- | --- | --- | --- | --- |
| $5$ | $10$ | $8.819346$ | $1.180654$ | $0.528004$ |
| $10$ | $27$ | $24.570164$ | $2.429836$ | $0.768382$ |
| $20$ | $66$ | $63.003272$ | $2.996728$ | $0.670089$ |
| $50$ | $207$ | $203.322717$ | $3.677283$ | $0.520046$ |

## Facts & Assumptions

**Given:** The definition of $E(x)$ above.

## Verification

**Proof technique:** direct.

1.1 The exact divisor sums are obtained by direct counting: $\sum_{n\le5}\tau(n)=10$, $\sum_{n\le10}\tau(n)=27$, $\sum_{n\le20}\tau(n)=66$, and $\sum_{n\le50}\tau(n)=207$. [given, algebra]

2.1 Substituting these four values into the displayed definition of $E(x)$ produces the residual column and then the scaled residual column $E(x)/\sqrt x$. [step 1.1, given, algebra]

3.1 The quotients in the last column stay on the scale of a bounded constant rather than growing like a positive power of $x$, which is exactly the $\sqrt x$ scale asserted by [[thm-divisor-counting-summatory-estimate]]. [step 2.1, given] ∎
