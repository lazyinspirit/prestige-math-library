---
id: ex-weyl-bound-for-a-monomial-phase
kind: example
title: "Classical Weyl Bound for a Cubic Monomial Phase"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-polynomial-weyl-sum
  - def-common-divisor-and-gcd
  - def-coprime
  - def-real-power
  - lem-power-monotone
  - thm-classical-weyl-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Lemma 5.1, printed pp. 28–31"
---

## Example

For an integer $N\ge2$ and $\varepsilon>0$, set
$\boldsymbol\alpha=(0,0,1/7)$ and $e(t):=\exp(2\pi i t)$. Then
$$\left|\sum_{n=1}^Ne(n^3/7)\right|\le C_{3,\varepsilon}N^{1+\varepsilon} \left(\frac17+\frac1N+\frac7{N^3}\right)^{1/4},$$
where $C_{3,\varepsilon}$ is independent of $N$.

## Example references

[[def-polynomial-weyl-sum]]

[[thm-classical-weyl-inequality]]

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-real-power]]

## Facts & Assumptions

**Given:** An integer $N\ge2$ and a real $\varepsilon>0$.

[F1] [[def-polynomial-weyl-sum]]: $f_k(\boldsymbol\alpha;N)=\sum_{n=1}^Ne(\sum_{r=1}^k\alpha_rn^r)$.

[F2] [[def-common-divisor-and-gcd]] and [[def-coprime]]: $\gcd(u,v)$ is the nonnegative greatest common divisor and $u,v$ are coprime exactly when $\gcd(u,v)=1$.

[F3] [[def-real-power]]: for a positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F4] [[thm-classical-weyl-inequality]]: for $k\ge2$, if $q\ge1$, $\gcd(a,q)=1$, $q\le N^k$, and $|\alpha_k-a/q|\le q^{-2}$, then
$$|f_k(\boldsymbol\alpha;N)|\le C_{k,\varepsilon}N^{1+\varepsilon} (q^{-1}+N^{-1}+qN^{-k})^{1/2^{k-1}}.$$

[F5] [[lem-power-monotone]]: if $0\le a\le b$ and $n\ge1$ is an integer, then $a^n\le b^n$.

## Verification

**Proof technique:** direct.

1.1 Take $k=3$, $a=1$, and $q=7$. The integers $1$ and $7$ are coprime. By [F5], $N^3\ge2^3=8$, so $1\le7\le N^3$; moreover $|\alpha_3-a/q|=0\le q^{-2}$. [given, F2, F5, algebra]

2.1 Apply [F4] with these values and use [F1] to identify $f_3((0,0,1/7);N)=\sum_{n=1}^Ne(n^3/7)$. Since $2^{3-1}=4$, the resulting inequality is exactly the Example's bound. [given, F1, F3, F4, step 1.1, algebra] ∎

