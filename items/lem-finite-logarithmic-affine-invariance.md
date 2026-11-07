---
id: lem-finite-logarithmic-affine-invariance
kind: lemma
title: "Finite logarithmic affine invariance with endpoint error"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Lemma 2.5, PDF pp. 14\u201315; explicit finite form"
---

## Statement

Let $q\ge1$ be an integer, $r\in\mathbb Z$, and $U\ge L\ge2(|r|+q)$ be real. Put $Z=\sum_{L<n\le U}1/n$ and suppose $Z>0$. For any $V:\mathbb Z\to\mathbb C$ with $|V|\le1$,
$$\left|\frac1Z\sum_{\substack{L<n\le U\\n\equiv r\ ({\rm mod}\ q)}}\frac{V(n)}n-\frac1{qZ}\sum_{L<m\le U}\frac{V(qm+r)}m\right|\le\frac{C}{qZ}\left(1+\log q+\frac{|r|+q}{L}\right)$$
for an absolute constant $C$. Moreover $|Z-\log(U/L)|\le2/L$. Thus fixed $q,r$, $L\to\infty$ and $\log(U/L)\to\infty$ give approximate affine invariance uniformly over bounded $V$.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

## Proof

1.1 Substitute $n=qm+r$ in the first sum. Its $m$ interval is $((L-r)/q,(U-r)/q]$, with lower endpoint at least $L/(2q)\ge1$. On that interval $qm+r\ge qm/2$, so $|1/(qm+r)-1/(qm)|\le2|r|/(q^2m^2)$. The sum of $m^{-2}$ over integers $m>L/(2q)$ is at most $Cq/L$. The replacement error before normalization is at most $C|r|/(qL)$. [given, algebra]

2.1 The symmetric difference of this $m$ interval and $(L,U]$ is contained in the intervals between their lower endpoints and between their upper endpoints. The elementary integral bound $\sum_{A<m\le B}1/m\le\log(B/A)+1/A$ for $B\ge A\ge1$ bounds its harmonic mass by $C(1+\log q+(|r|+q)/L)$. Indeed both endpoint ratios are at most $q(1+2|r|/L)$ or its reciprocal, and both smaller endpoints are at least $L/(2q)$. Multiply by $1/q$ and combine with step 1.1. [step 1.1, given, algebra]

3.1 Comparing the decreasing function $1/t$ with its unit-interval upper and lower sums gives $|\sum_{L<n\le U}1/n-\int_L^Udt/t|\le2/L$. Divide the preceding errors by $Z$ to finish. All estimates involve finite sums; there is no choice assumption. [step 2.1, algebra] ∎
