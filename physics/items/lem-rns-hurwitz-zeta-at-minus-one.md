---
id: lem-rns-hurwitz-zeta-at-minus-one
kind: lemma
title: Hurwitz Zeta Values for RNS Normal Ordering
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §25.11 Hurwitz Zeta Function"
      url: "https://dlmf.nist.gov/25.11"
      locator: "Equations 25.11.1 and 25.11.14; Hurwitz zeta definition and Bernoulli-polynomial value at negative integers."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

For the Hurwitz zeta function $\zeta(s,a)$, continued meromorphically from $\sum_{n=0}^\infty(n+a)^{-s}$ with $a>0$, and $B_2(a)=a^2-a+\frac16$, one has
$$\zeta(-1,a)=-\frac12B_2(a).$$
In particular, $\zeta(-1,1)=-1/12$ and $\zeta(-1,1/2)=1/24$.

## Statement references

[NIST Digital Library of Mathematical Functions, §25.11](https://dlmf.nist.gov/25.11)

## Facts & Assumptions

**Given:** Fix real $a>0$. For $\operatorname{Re}s>1$, define $\zeta(s,a)=\sum_{n=0}^{\infty}(n+a)^{-s}$ and use its meromorphic continuation. Let $\widetilde B_4(t)=B_4(t-\lfloor t\rfloor)$ be the bounded periodic fourth Bernoulli function; Euler–Maclaurin with two Bernoulli corrections continues the tail integral to a neighborhood of $s=-1$.

[A1] $B_2(a)=a^2-a+1/6$ and $B_4(x)=x^4-2x^3+x^2-1/30$; the Hurwitz zeta uses the positive-real branch of $(n+a)^{-s}$.

## Proof

1.1 Fix an integer $N\ge1$, put $x=N+a$, and take $f(t)=t^{-s}$ for $\operatorname{Re}s>1$ and $t\ge x$. Then $f$ is $C^4$, its derivatives through order three tend to zero at infinity, and $f^{(4)}$ is integrable. Four integrations by parts on each interval $[x+n,x+n+1]$ against the periodic Bernoulli polynomials, summed over $n\ge0$, give the Euler–Maclaurin tail identity
$$\sum_{n=0}^{\infty}f(x+n)=\int_x^\infty f(t)\,dt+\frac12f(x)-\frac{B_2}{2!}f'(x)-\frac{B_4}{4!}f'''(x)-\frac1{4!}\int_x^\infty\widetilde B_4(t-x)f^{(4)}(t)\,dt,$$
where $B_2=1/6$, $B_4=-1/30$, and $\widetilde B_4(t)=B_4(t-\lfloor t\rfloor)$. The endpoint terms telescope because the periodic Bernoulli polynomials agree at consecutive integer endpoints; the last integral is the remaining integration-by-parts term. Here $\int_x^\infty t^{-s}\,dt=x^{1-s}/(s-1)$, and substitution of the derivatives gives
$$\zeta(s,a)=\sum_{n=0}^{N-1}(n+a)^{-s}+\frac{x^{1-s}}{s-1}+\frac12x^{-s}+\frac{s}{12}x^{-s-1}-\frac{s(s+1)(s+2)}{720}x^{-s-3}+R_2(s,x),$$
with $R_2(s,x)=-\frac{s(s+1)(s+2)(s+3)}{24}\int_x^\infty\widetilde B_4(t-x)t^{-s-4}\,dt$. The integral converges locally uniformly for $\operatorname{Re}s>-3$, so this expression continues the defining series there (apart from its pole at $s=1$). At $s=-1$, both the third-derivative correction and $R_2$ vanish because they contain a factor $s+1$. [given, A1, algebra]

2.1 At $s=-1$, the finite sum in step 1.1 is $\sum_{n=0}^{N-1}(n+a)=N(N-1)/2+Na$, the integral term is $-x^2/2$, the endpoint term is $x/2$, and the $B_2$ correction is $-1/12$. The $B_4$ correction and remainder vanish because they contain a factor $s+1$. Therefore
$$\zeta(-1,a)=\frac{N(N-1)}2+Na-\frac{(N+a)^2}{2}+\frac{N+a}{2}-\frac1{12}=-\frac12\left(a^2-a+\frac16\right)=-\frac12B_2(a).$$
The right side is independent of $N$, as required for the continuation value. [given, A1, step 1.1, algebra]

3.1 Substitution gives $B_2(1)=1/6$, so $\zeta(-1,1)=-1/12$. Also $B_2(1/2)=1/4-1/2+1/6=-1/12$, so $\zeta(-1,1/2)=1/24$. These are exactly the integer and half-integer vacuum sums used in the oscillator calculation. [given, A1, step 2.1, algebra] ∎

## Remarks

The NIST formula 25.11.14 independently records the general negative-integer value. The proof above uses the Euler–Maclaurin continuation directly, so the RNS intercept calculation does not take its own target value as a premise.
