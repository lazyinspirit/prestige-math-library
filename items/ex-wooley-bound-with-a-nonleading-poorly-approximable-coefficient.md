---
id: ex-wooley-bound-with-a-nonleading-poorly-approximable-coefficient
kind: example
title: "Wooley Bound from a Rational Approximation to a Nonleading Coefficient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-polynomial-weyl-sum
  - def-common-divisor-and-gcd
  - def-coprime
  - def-real-power
  - lem-power-monotone
  - thm-wooley-polynomial-weyl-type-estimate
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "Theorem 1.5, printed p. 1579"
---

## Example

Let $N\ge3$ be an integer, $\varepsilon>0$, and
$\boldsymbol\alpha=(0,1/7,0,0)$, with $e(t):=\exp(2\pi i t)$. Then
$$\left|\sum_{n=1}^Ne(n^2/7)\right|\le C_{4,\varepsilon}N^{1+\varepsilon} \left(\frac17+\frac1N+\frac7{N^2}\right)^{1/24},$$
where $C_{4,\varepsilon}$ is independent of $N$.

## Example references

[[def-polynomial-weyl-sum]]

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-real-power]]

[[thm-wooley-polynomial-weyl-type-estimate]]

## Facts & Assumptions

**Given:** An integer $N\ge3$, and a real
$\varepsilon>0$.

[F1] [[def-polynomial-weyl-sum]]: $f_k(\boldsymbol\alpha;N)=\sum_{n=1}^Ne(\sum_{r=1}^k\alpha_rn^r)$.

[F2] [[thm-wooley-polynomial-weyl-type-estimate]]: for $k\ge3$ and a reduced approximation $a/q$ to a coefficient $\alpha_j$ with $2\le j\le k$, $q\le N^j$, and $|\alpha_j-a/q|\le q^{-2}$,
$$|f_k(\boldsymbol\alpha;N)|\le C_{k,\varepsilon}N^{1+\varepsilon} (q^{-1}+N^{-1}+qN^{-j})^{1/(2k(k-1))}.$$

[F3] [[def-common-divisor-and-gcd]] and [[def-coprime]]: $\gcd(u,v)$ is the nonnegative greatest common divisor and $u,v$ are coprime exactly when $\gcd(u,v)=1$.

[F4] [[def-real-power]]: for a positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F5] [[lem-power-monotone]]: if $0\le a\le b$ and $n\ge1$ is an integer, then $a^n\le b^n$.

## Verification

**Proof technique:** direct.

1.1 Choose $k=4$, $j=2$, $a=1$, and $q=7$. By [F3], $\gcd(1,7)=1$; by [F5], $N^2\ge3^2=9$, so $7\le N^2$; and $|\alpha_2-a/q|=0\le q^{-2}$. [given, F3, F5, algebra]

2.1 Apply [F2] with these values and use [F1] to identify $f_4((0,1/7,0,0);N)=\sum_{n=1}^Ne(n^2/7)$. Since $2\cdot4\cdot(4-1)=24$, this gives the displayed choice-free bound. [given, F1, F2, F4, step 1.1, algebra] ∎

