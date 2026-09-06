---
id: thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals
kind: theorem
title: "The bounded complex dual of C_0(X) is regular complex measures"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-complex-borel-measure-on-an-lch-space, lem-positive-c-zero-functionals-have-finite-regular-representing-measures, lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals, thm-total-variation-is-a-measure, def-integration-against-a-signed-or-complex-measure]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

For an LCH space $X$, every bounded complex linear functional $L$ on $C_0(X;\mathbb C)$ has a unique representation
$$L(f)=\int_X f\,d\mu$$
by a finite regular complex Borel measure $\mu$. Conversely each such $\mu$ defines a bounded functional and $\|L\|=|\mu|(X)$.

## Facts & Assumptions

**Given:** $L$ is bounded and complex linear.

[L1] Bounded real functionals split into differences of positive functionals. ([[lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals]])

[L2] Positive bounded functionals have finite regular representing measures. ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]])

## Proof

**Proof technique:** direct.

1.1 On the real vector space of real-valued functions put $A(u)=\operatorname{Re}L(u)$ and $B(u)=\operatorname{Im}L(u)$. Apply [L1], then [L2], to the positive decompositions of both $A$ and $B$. This gives finite regular signed measures $\alpha$ and $\beta$ representing $A$ and $B$. Put $\mu=\alpha+i\beta$. If $f=u+iv$, complex linearity gives $L(f)=L(u)+iL(v)$, whose real and imaginary parts agree exactly with those of $\int f\,d(\alpha+i\beta)$; hence $\mu$ represents $L$. [L1, L2]

2.1 If two finite regular complex measures $\mu$ and $\nu$ represent $L$, [step 1.1, L2]
then the real and imaginary signed parts of their difference $\mu-\nu$
integrate every real $C_c$ function to zero. For either signed part, move its
negative Jordan component to the other side; the two resulting positive
Radon measures have equal integrals on $C_c$. The positive-measure
uniqueness in [L2] makes those
positive measures equal, so both signed parts of $\mu-\nu$ vanish and
$\mu=\nu$. [step 1.1]

3.1 Conversely, $|\int f\,d\mu|\le\|f\|_\infty|\mu|(X)$, so integration is bounded with norm at most $|\mu|(X)$. The definition of total variation and regular approximation by compactly supported phase functions gives functions with $\|f\|_\infty\le1$ and integrals arbitrarily close to $|\mu|(X)$; hence equality of norms. [given] ∎
