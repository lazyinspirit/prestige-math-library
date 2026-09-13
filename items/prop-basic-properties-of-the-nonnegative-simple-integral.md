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
2. If $c>0$, then $\int cs\,d\mu=c\int s\,d\mu$. If $c=0$,
   then $\int 0s\,d\mu=0$. The second clause avoids forming the globally
   undefined extended-real product $0\cdot(+\infty)$.
3. $\int(s+t)\,d\mu=\int s\,d\mu+\int t\,d\mu$.

## Facts & Assumptions

**Given:** Nonnegative simple measurable functions $s,t$ and a scalar $c\ge0$.

[L1] The simple integral is well defined, so any convenient common refinement of the chosen simple representations may be used to compute it ([[lem-well-definedness-of-the-simple-integral]]).

[L2] The simple integral of $\sum_j a_j\chi_{E_j}$ is $\sum_j a_j\mu(E_j)$ with $0\cdot(+\infty)=0$ ([[def-integral-of-a-nonnegative-simple-function]]).

## Proof

**Proof technique:** direct.

1.1 Complete the representations of $s$ and $t$ with their zero-valued complements. [L1, construct]
Take their finite measurable common refinement $(E_r)$.
On each cell write $s=a_r$ and $t=b_r$. If $s\le t$, then $a_r\le b_r$.

1.2 The zero-scalar case is separate. [L2]
When $c=0$, the function $cs$ is zero. Representing it by $0\chi_X$ gives
$\int 0s\,d\mu=0$, even if $\mu(X)=+\infty$, by the definition's local
zero-times-infinity convention.

2.1 Monotonicity follows cell by cell. [step 1.1, L2]
On the common partition,
$$\int s\,d\mu=\sum_r a_r\mu(E_r),\qquad \int t\,d\mu=\sum_r b_r\mu(E_r).$$
For finite or infinite $\mu(E_r)$, the local simple-integral convention makes
$a_r\mu(E_r)\le b_r\mu(E_r)$ whenever $0\le a_r\le b_r$. Summing these
nonnegative extended-real inequalities proves clause 1.

2.2 Additivity follows on the same partition. [step 1.1, L2]
The coefficient of $s+t$ on $E_r$ is $a_r+b_r$, and
$$(a_r+b_r)\mu(E_r)=a_r\mu(E_r)+b_r\mu(E_r)$$
under the local zero-times-infinity convention. Finite sums in
$[0,+\infty]$ can be regrouped without subtraction, so clause 3 follows.

2.3 For $c>0$, scalar multiplication holds cell by cell. [step 1.1, L2]
The identity $(ca_r)\mu(E_r)=c(a_r\mu(E_r))$ is valid in
$[0,+\infty]$ for positive $c$, and finite summation gives
$\int cs\,d\mu=c\int s\,d\mu$. Together with the preceding cases,
this proves all three clauses. ∎
