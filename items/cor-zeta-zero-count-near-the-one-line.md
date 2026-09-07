---
id: cor-zeta-zero-count-near-the-one-line
title: "Zeta zero count near the one line"
kind: corollary
status: draft
origin: pipeline
deps: [thm-riemann-zeta-classical-zero-free-region, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta, cor-zeta-zero-count-unit-interval]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.8, p.175"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

For $t\in\mathbb R$ and $0<r\le3/4$, let $n(r;t)$ count nontrivial zeros with $|\rho-(1+it)|\le r$, including multiplicity. Then $n(r;t)=O(r\log(|t|+2))$, uniformly.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-riemann-zeta-classical-zero-free-region]]: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

[F2] [[lem-zeta-logarithmic-derivative-zero-bound]]: Write $s=\sigma+it$ and let $\rho$ range over nontrivial zeta zeros with multiplicity. With the Hadamard constant $B$, $\frac{\zeta'}{\zeta}(s)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right)-\frac1{s-1}+\frac{\log\pi}{2}-\frac{\Gamma'(1+s/2)}{2\Gamma(1+s/2)}.$ This is a meromorphic identity, using convergent genus-one terms. Uniformly for $-1\le\sigma\le2$, $|t|\ge3$ and $\zeta(s)\ne0$, $\operatorname{Re}\frac{\zeta'}\zeta(s)=\sum_\rho\operatorname{Re}\frac1{s-\rho}-\frac12\log|t|+O(1),$ and this real series is absolutely convergent.

[F3] [[thm-von-mangoldt-logarithmic-derivative-zeta]]: For $\Re s>1$, if $\zeta(s):=\sum_{n \ge 1} n^{-s},$ then $-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)n^{-s}.$

[F4] [[cor-zeta-zero-count-unit-interval]]: The number of nontrivial zeta zeros, with multiplicity, whose ordinates lie in $[T,T+1]$ is $O(\log(T+2))$ for $T\ge0$.

## Proof

1.1 Write $L=\log(|t|+2)$. For a sufficiently small absolute $a>0$, $r<a/L$ makes the disc zero-free: within it $\log(|\operatorname{Im}\rho|+2)\le K L$, whereas $1-\operatorname{Re}\rho\le r$. This contradicts the region bound if a zero occurs. [F1]

2.1 For $|t|\ge3$ and $a/L\le r\le1/6$, evaluate at $s_1=1+r+it$. The Euler series gives $|\zeta'/\zeta(s_1)|=O(1/r)$, using its simple-pole expansion on the real axis. The positive real zero sum is thus $O(1/r+L)$. Every counted zero contributes at least $r/(4r^2+r^2)=1/(5r)$, since its real separation is between r and 2r and its imaginary separation at most r. Hence $n(r;t)=O(1+rL)=O(rL)$. [F2, F3, step 1.1]

3.1 If $r\ge1/6$ and $|t|\ge3$, finitely many adjacent unit ordinate bands give $n(r;t)=O(L)=O(rL)$. Negative bands have the same count by conjugation of zeta. For $|t|\le3$, all counted zeros lie in one compact rectangle and are finite in number, while a nonempty disc must have $r\ge a/L\ge a/\log5$. Enlarging the constant handles these remaining cases. [F4, step 1.1] ∎
