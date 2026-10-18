---
id: thm-pade-solvable-system-gives-local-order
kind: theorem
title: A solvable Padé moment system gives the stated Taylor order
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - alg-pade-coefficient-matching
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pedro Gonnet, Stefan Güttel, and Lloyd N. Trefethen, Robust Padé
        Approximation via SVD, Section 2
      url: https://people.maths.ox.ac.uk/trefethen/gonnet_guettel_trefethen.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $m,n\ge0$, $R>0$, and
$f(z)=\sum_{k=0}^\infty c_kz^k$ for $|z|<R$, with the series convergent
there. Suppose $q_0=1,q_1,\ldots,q_n$ solve the full normalized
Padé moment equations of [[alg-pade-coefficient-matching]]. Define
$p_k=\sum_{j=0}^{\min(k,n)}q_jc_{k-j}$ for $0\le k\le m$, and
$p(z)=\sum_{k=0}^mp_kz^k$, $q(z)=\sum_{j=0}^nq_jz^j$. Then
$$
f(z)-\frac{p(z)}{q(z)}=O(z^{m+n+1})\quad\text{as }z\to0.
$$
This is a local Taylor-matching statement only; it gives no pole-location
claim and no guarantee about analytic continuation beyond the neighborhood
where $f$ is given.

Here $h(z)=O(z^M)$ as $z\to0$ means there are constants $C,\delta>0$ such
that $|h(z)|\le C|z|^M$ whenever $0<|z|<\delta$.

## Facts & Assumptions

**Given:** Integers $m,n\ge0$, a radius $R>0$, a convergent power series $f(z)=\sum_{k=0}^\infty c_kz^k$ for $|z|<R$, and a normalized denominator solution $q_0=1,q_1,\ldots,q_n$.

[F1] [[alg-pade-coefficient-matching]]: the moment equations make coefficients of $qf$ vanish in degrees $m+1,\ldots,m+n$, while $p_k$ equals the coefficient of $qf$ for $0\le k\le m$.

[A1] Since $q(0)=q_0=1$, continuity gives a neighborhood of $0$ on which $|q(z)|\ge1/2$, so $1/q$ is bounded there.

## Proof

1.1 Multiplication of the Taylor series of $f$ by $q$ gives coefficient $\sum_{j=0}^{\min(k,n)}q_jc_{k-j}$ at degree $k$. By [F1], for each $0\le k\le m$ this coefficient is $p_k$, so the coefficients of $qf-p$ through degree $m$ vanish. [given, F1, algebra]

2.1 For each $m<k\le m+n$, write $k=m+\ell$ with $1\le\ell\le n$. The moment equation in [F1] says $\sum_{j=1}^nq_jc_{k-j}=-c_k$, exactly the assertion that the degree-$k$ coefficient of $qf$ is zero, because $q_0=1$. Therefore every coefficient of $qf-p$ through degree $m+n$ vanishes. [given, F1, step 1.1, algebra]

3.1 Analyticity implies $qf-p$ has a Taylor expansion whose first possibly nonzero term has degree at least $m+n+1$, so $qf-p=O(z^{m+n+1})$. By [A1], divide by the nonvanishing $q$ near zero to obtain the asserted local order for $f-p/q$. This proof uses only the solvable coefficient equations; it makes no claim about zeros of $q$ away from $0$. [given, A1, step 2.1, algebra] ∎

