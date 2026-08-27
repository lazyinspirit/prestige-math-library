---
id: prop-basic-properties-of-the-nonnegative-simple-integral
kind: proposition
title: "The simple integral is monotone, homogeneous, and additive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-of-a-nonnegative-simple-function, lem-well-definedness-of-the-simple-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $s,t$ be nonnegative simple measurable functions and let $c\ge0$.

1. If $s\le t$ pointwise, then $\int s\,d\mu\le\int t\,d\mu$.
2. $\int cs\,d\mu=c\int s\,d\mu$.
3. $\int(s+t)\,d\mu=\int s\,d\mu+\int t\,d\mu$.

## Facts & Assumptions

**Given:** Nonnegative simple measurable functions $s,t$ and a scalar $c\ge0$.

[L1] The simple integral is well defined, so any convenient common refinement of the chosen simple representations may be used to compute it ([[lem-well-definedness-of-the-simple-integral]]).

[L2] The simple integral of $\sum_j a_j\chi_{E_j}$ is $\sum_j a_j\mu(E_j)$ with $0\cdot(+\infty)=0$ ([[def-integral-of-a-nonnegative-simple-function]]).

## Proof

**Proof technique:** direct.

1.1 Choose one finite measurable partition $(E_r)$ on which both $s$ and $t$ [L1, construct]
are constant, say $s=\sum_r a_r\chi_{E_r}$ and $t=\sum_r b_r\chi_{E_r}$.
Then $a_r\le b_r$ for every $r$ because $s\le t$.

2.1 Using the common partition from step 1.1 and [L2], [step 1.1, L2, algebra]
$$\int s\,d\mu=\sum_r a_r\mu(E_r),\qquad \int t\,d\mu=\sum_r b_r\mu(E_r),\qquad \int cs\,d\mu=\sum_r ca_r\mu(E_r),$$
and
$$\int(s+t)\,d\mu=\sum_r(a_r+b_r)\mu(E_r).$$
Termwise comparison gives monotonicity, while ordinary finite-sum algebra gives
homogeneity and additivity.

3.1 Therefore all three properties hold for the simple integral. [step 2.1] ∎
