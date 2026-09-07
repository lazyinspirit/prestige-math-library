---
id: lem-zeta-horizontal-logarithmic-derivative-comparison
title: "Zeta horizontal logarithmic derivative comparison"
kind: lemma
status: published
origin: pipeline
deps: [thm-riemann-zeta-classical-zero-free-region, lem-local-logarithmic-derivative-zeta, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.7, equations (6.9)\u2013(6.11), pp.174\u2013175"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

There are absolute $d>0,C>0$, with $d<c_0$, such that for $|t|\ge3$ and $\sigma\ge1-d/\log(|t|+2)$,
$$\left|\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}\right|\le C\log(|t|+2).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-riemann-zeta-classical-zero-free-region]]: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

[F2] [[lem-local-logarithmic-derivative-zeta]]: Uniformly for $-1\le\sigma\le2$ and $s=\sigma+it\ne1$ whose ordinate is not that of a nontrivial zero, $\frac{\zeta'}\zeta(s)=-\frac1{s-1}+\sum_{\rho:\,|t-\Im\rho|<1}\frac1{s-\rho}+O(\log(|t|+2)),$ where zeros occur with multiplicity. For $|t|\ge2$ the pole term is absorbed into the error, giving the usual large-height local formula.

[F3] [[lem-zeta-logarithmic-derivative-zero-bound]]: Write $s=\sigma+it$ and let $\rho$ range over nontrivial zeta zeros with multiplicity. With the Hadamard constant $B$, $\frac{\zeta'}{\zeta}(s)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right)-\frac1{s-1}+\frac{\log\pi}{2}-\frac{\Gamma'(1+s/2)}{2\Gamma(1+s/2)}.$ This is a meromorphic identity, using convergent genus-one terms. Uniformly for $-1\le\sigma\le2$, $|t|\ge3$ and $\zeta(s)\ne0$, $\operatorname{Re}\frac{\zeta'}\zeta(s)=\sum_\rho\operatorname{Re}\frac1{s-\rho}-\frac12\log|t|+O(1),$ and this real series is absolutely convergent.

[F4] [[thm-von-mangoldt-logarithmic-derivative-zeta]]: For $\Re s>1$, if $\zeta(s):=\sum_{n \ge 1} n^{-s},$ then $-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)n^{-s}.$

## Proof

1.1 Put $L=\log(|t|+2)$, $s_1=1+L^{-1}+it$. The Euler series and the real-axis simple-pole expansion give $|\zeta'/\zeta(s_1)|\le-\zeta'/\zeta(1+L^{-1})=O(L)$. The same comparison holds for every $\sigma\ge1+L^{-1}$; for $\sigma\ge2$ it is even bounded by the convergent series at two. The real-part formula now gives $\sum_\rho\operatorname{Re}(1/(s_1-\rho))=O(L)$, all summands being positive. [F3, F4]

1.2 For $|\operatorname{Im}\rho-t|\le1$, the region theorem implies $1-\operatorname{Re}\rho\ge c_0/(K L)$ with an absolute $K$, since $\log(|\operatorname{Im}\rho|+2)\le K L$. Choose $d<c_0/(2K)$. For $1-d/L\le\sigma\le1+1/L$, the positive real parts of $s-\rho$ and $s_1-\rho$ are comparable, hence $|s-\rho|\ge c|s_1-\rho|$. Consequently $|1/(s-\rho)-1/(s_1-\rho)|\le C/(L|s_1-\rho|^2)\le C\operatorname{Re}(1/(s_1-\rho))$. [F1, algebra]

2.1 For ordinates off the zero ordinates, subtract the two local logarithmic-derivative formulas. Their pole terms are bounded at these heights. Sum the preceding comparison over the common local zero set and use its positive-sum bound to obtain $O(L)$. The constants do not depend on the distance of t from an ordinate. Taking limits from non-ordinates extends the bound to all t, because the entire horizontal segment is zero-free. Together with the Euler-series range this proves the assertion. [F2, step 1.1, step 1.2] ∎
