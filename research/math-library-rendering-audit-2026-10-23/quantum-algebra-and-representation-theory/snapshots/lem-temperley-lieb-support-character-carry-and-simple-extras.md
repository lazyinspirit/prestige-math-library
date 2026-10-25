---
id: lem-temperley-lieb-support-character-carry-and-simple-extras
kind: lemma
title: "Support-character carry recursion has only simple extra standards"
status: published
dependency_level: 9
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-spencer-digit-support
  - lem-temperley-lieb-critical-gram-unit-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§8, signed support sets and their upper-bound use. The local Laurent-character carry proof replaces the source's critical-wall upper-bound argument."
---

## Statement

Let $\chi_j(x)=(x^{j+1}-x^{-j-1})/(x-x^{-1})$ for $j\ge0$, and set $\chi_{-1}=0$. These are integer Laurent polynomials. Put $F_0=0$ and, for $M>0$,
$$F_M(x)=\sum_{m\in\operatorname{Supp}(M-1)}\chi_m(x).$$
For every $n\ge1$, there are nonnegative integers $\beta_{n,r}$, for the labels $0\le r\le n$ of parity $n$, with $\beta_{n,n}=1$, such that
$$ (x+x^{-1})F_n(x)=\sum_{r}\beta_{n,r}F_{r+1}(x).$$
Whenever $r<n$ and $\beta_{n,r}>0$, the actual module $W_{n,r}(K,\delta)$ is simple. If $\delta=0$, $n>0$ is even, and the field is arbitrary, then $\beta_{n,0}=0$. Equivalently, writing $d(r,m)=1$ for $m\in\operatorname{Supp}(r)$ and $0$ otherwise,
$$d(n-1,m-1)+d(n-1,m+1)=\sum_{r\ge m}d(r,m)\beta_{n,r},$$
with out-of-range labels interpreted as zero.

## Facts & Assumptions

**Given:** A field and loop parameter, their recurrence quantum characteristic, the support sets, and the Laurent polynomials in the Statement.

[F1] Support is formed from digits of $M$ with highest sign positive ([[def-temperley-lieb-spencer-digit-support]]).

[F2] Critical standards are simple under the divided-label digit interval, all critical standards are simple in characteristic zero, all standards are simple if $\ell=\infty$, and $W_{n,n-2}$ is simple if $[n]_\delta\ne0$ ([[lem-temperley-lieb-critical-gram-unit-interval]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Put $z_a(x)=x^a+x^{-a}$ for $a>0$, and use $z_0=2$ in identities involving it. Summing over the lower digit signs gives $F_M(x)=\chi_{n_rs_r-1}(x)\prod_{j<r,\ n_j>0}z_{n_js_j}(x).$ Indeed the positive highest exponential times the sign product minus its negative counterpart, divided by $x-x^{-1}$, is exactly the sum of the indicated $\chi_m$. The lower signed sums cannot make the exponent negative, since their absolute sum is at most $s_r-1$, while the highest contribution is at least $s_r$. No zero digit contributes a factor $2$, since the support is a set. [F1, given, algebra]

2.1 In positive characteristic $p$, define $C_A(y)$ by the same formula as step 1.1 using ordinary base-$p$ digits of the positive integer $A$, and put $C_0=0$. If $A=hp+d$ with $h\ge1$ and $0\le d<p$, this formula gives $C_A(y)=\chi_{p-1}(y)C_h(y^p)$ times $z_d(y)$ when $d>0$, and times $1$ when $d=0$. When $1\le A<p$, it gives $C_A=\chi_{A-1}$. For $A\ge2$, write $z_1 C_{A-1}=C_A+\sum_{0<B<A}\gamma_{A,B}C_B.$ The coefficients are defined recursively as follows. If $A-1<p$, the only extra is $B=A-2$ with coefficient $1$ when $B>0$. Otherwise write $A-1=hp+d$. If $d=0$, there are no extras. If $1\le d\le p-2$, the only extra is $B=A-2$, with coefficient $2$ for $d=1$ and $1$ otherwise. If $d=p-1$, take the extra $B=A-2$ with coefficient $2$ for $p=2$ and $1$ otherwise, and add the extras $B=pB'$ with coefficients $\gamma_{h+1,B'}$. This recursion decreases $A$ and proves the displayed identity: use $z_1\chi_j=\chi_{j+1}+\chi_{j-1}$ at the base, and $z_1z_d=z_{d+1}+z_{d-1}$ at the other stages, remembering $z_0=2$. All coefficients are nonnegative, and every extra has $B\equiv A\pmod2$. In characteristic zero define $C_A=\chi_{A-1}$ and use just the base recurrence with extra $B=A-2$. [step 1.1, construct, algebra]

3.1 In positive characteristic every extra of step 2.1 satisfies $\frac{A-B}{2}<p^{\nu_p(B)}(p-b),\qquad b\equiv B/p^{\nu_p(B)}\pmod p,\quad1\le b<p.$ For an unscaled extra $B=A-2$, the left side is $1$. In the base case $1\le B\le p-2$, the right side is at least $2$. In the noncarry case, either $d=1$ and $p\mid B$, making the right side at least $p\ge2$, or $B\bmod p=d-1\le p-3$, making it at least $3$. In the carry case $p>2$ gives $B\bmod p=p-2$ and right side $2$; when $p=2$, $B$ is positive and even, so the right side is again at least $2$. A scaled extra $A=p(h+1),B=pB'$ multiplies both sides of the inductive inequality for $(h+1,B')$ by $p$. This proves the assertion by induction. [step 2.1, algebra]

4.1 Suppose $\ell<\infty$. Put $S_\ell(x)=\chi_{\ell-1}(x)$. For $M=h\ell+d$ with $h\ge1$ and $0\le d<\ell$, step 1.1 factors $F_M=S_\ell(x)C_h(x^\ell)$ times $z_d(x)$ if $d>0$ and times $1$ otherwise. If $n<\ell$, then $z_1F_n=F_{n+1}+F_{n-1}$, omitting $F_0$, including $n=\ell-1$. If $n\ge\ell$, write $n=h\ell+d$. For $d=0$ one gets just $F_{n+1}$. For $1\le d\le\ell-2$ one gets $F_{n+1}$ and the extra $F_{n-1}$ with coefficient $2$ if $d=1$ and $1$ otherwise. For $d=\ell-1$, put $A=h+1$: step 2.1 gives $F_{n+1}$, the extras $F_{B\ell}$ with coefficients $\gamma_{A,B}$, and $F_{n-1}$ with coefficient $2$ if $\ell=2$ and $1$ otherwise. These are the asserted $\beta$; if two indices coincide their coefficients add. Immediate extras have $r=n-2$ and $\ell\nmid n$, so [F2] makes $W_{n,r}$ simple. The scaled extras have $n+1=A\ell,r+1=B\ell$ and satisfy the interval of [F2] by step 3.1, so are also simple; in characteristic zero use the critical clause of [F2]. If $\ell=\infty$, the recurrence $z_1\chi_{n-1}=\chi_n+\chi_{n-2}$ gives the claim and [F2] gives simplicity of every extra. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 The Laurent polynomials $\chi_m$ are linearly independent over $\mathbb Z$: the largest exponent of $\chi_m$ is $m$ with coefficient $1$, so a finite nonzero combination has nonzero coefficient at its largest index. Comparing their coefficients in step 4.1, using $z_1\chi_0=\chi_1$ and the out-of-range convention, proves the last identity of the Statement. Finally $\delta=0$ gives $[2]_\delta=0$ and $[1]_\delta=1$, hence $\ell=2$. When $n>0$ is even one has $n\ge\ell$ and $d=0$ in step 4.1, so its only term is $F_{n+1}$ and $\beta_{n,0}=0$. [F1, step 1.1, step 4.1, algebra] ∎
