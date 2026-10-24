---
id: thm-cauchy-hadamard-for-complex-power-series
kind: theorem
title: "Cauchy-Hadamard for complex power series, including zero and infinite radius"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-series-power-series-and-absolute-convergence, thm-absolute-convergence-of-complex-series, def-limsup-liminf, lem-limsup-epsilon-characterisation, thm-root-test, lem-metric-convergent-implies-cauchy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For $\sum_{n\ge0}c_n(z-a)^n$, set
$$L:=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}\in[0,+\infty],$$
so no $0$th root occurs, and set
$$R:=\begin{cases}+\infty,&L=0,\\1/L,&0<L<+\infty,\\0,&L=+\infty.\end{cases}$$
Then the series converges absolutely for $|z-a|<R$ and diverges for $|z-a|>R$; no assertion is made on $|z-a|=R$. At $z=a$ it converges to $c_0$, including when $R=0$. The conventions and prerequisite facts used below are recorded in [[def-complex-series-power-series-and-absolute-convergence]], [[thm-absolute-convergence-of-complex-series]], [[def-limsup-liminf]], [[lem-limsup-epsilon-characterisation]], [[thm-root-test]].

## Facts & Assumptions

**Given:** The coefficient sequence and a complex $z$.

[L1] [[thm-root-test]] applies to a real series $\sum_{n\ge1}a_n$ using the defined roots $|a_{k+1}|^{1/(k+1)}$.

[L2] [[lem-limsup-epsilon-characterisation]] states that if a real $L$ is the limit superior of $(b_k)$, then $b_k>L-\varepsilon$ frequently for every real $\varepsilon>0$.

[L3] [[def-limsup-liminf]] defines $\limsup b_k$ as the infimum of the extended-real tail suprema $\sup\{b_j:j\ge k\}$.

[L4] [[thm-absolute-convergence-of-complex-series]] states that every absolutely convergent complex series converges.

[L5] [[lem-metric-convergent-implies-cauchy]] states that every convergent sequence in a metric space is Cauchy.

[L6] [[def-complex-series-power-series-and-absolute-convergence]] defines the partial sums by $S_0=0$ and $S_{N+1}=S_N+a_N$, and defines convergence through the complex metric.

## Proof

**Proof technique:** direct.

1.1 At $z=a$, every positive-index term vanishes, so the series converges to $c_0$. [algebra]

1.2 Suppose $z\ne a$, put $r=|z-a|>0$, and set $b_k=|c_{k+1}|^{1/(k+1)}$. For the real modulus tail $d_n=|c_n|r^n$ $(n\ge1)$, its root family is $d_{k+1}^{1/(k+1)}=b_kr$. [algebra]

2.1 If $r<R$, then $L$ is finite and $L<1/r$. Put $\varepsilon=(1/r-L)/2>0$. The eventual-upper-bound clause of [L2] gives $b_k<L+\varepsilon<1/r$ eventually; by [L3], the limit superior of the root family $b_kr$ is therefore at most $(L+\varepsilon)r<1$. Hence [L1] gives convergence of the modulus tail. (When $L=+\infty$, $R=0$ and $r<R$ is impossible.) [L1, L2, L3, step 1.2, algebra]

2.2 Suppose $0<L<+\infty$ and $r>R=1/L$. Then $\varepsilon:=L-1/r>0$, and [L2] gives $b_k>L-\varepsilon=1/r$ frequently. At those arbitrarily large indices, step 1.2 gives $d_{k+1}=(b_kr)^{k+1}>1$. [L2, step 1.2, algebra]

2.3 Suppose $L=+\infty$ and $r>R=0$. By [L3], every tail supremum of $(b_k)$ is $+\infty$; hence $1/r$ is not an upper bound for any tail, so $b_k>1/r$ frequently. Again $d_{k+1}=(b_kr)^{k+1}>1$ at arbitrarily large indices. [L3, step 1.2, algebra]

3.1 In either divergence case, let $S_N$ be the complex partial sums. If $(S_N)$ converged, [L5] would make it Cauchy; but [L6] gives $d_{\mathbb C}(S_{n+1},S_n)=|c_n(z-a)^n|=d_n>1$ for arbitrarily large $n$, contradicting the Cauchy condition with tolerance $1$. Thus the complex series diverges. [L5, L6, step 2.2, step 2.3]

3.2 In the case $r<R$, step 2.1 says that the complex series is absolutely convergent, so it converges by [L4]. [L4, step 2.1]

4.1 Step 1.1 covers the centre, steps 3.1 and 3.2 cover respectively $|z-a|>R$ and $|z-a|<R$, and none of these arguments asserts anything when $0<L<+\infty$ and $|z-a|=R$. This proves all three radius cases exactly as stated. [step 1.1, step 3.1, step 3.2] ∎
