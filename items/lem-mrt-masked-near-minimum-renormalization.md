---
id: lem-mrt-masked-near-minimum-renormalization
kind: lemma
title: Correctly signed renormalization uniform over small-prime masks
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - lem-mrt-uniform-twist-renormalization
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
sources:
  references:
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, v3, Lemma A.7 and its proof, pp. 24–25; sign corrected as in the first display of its proof"
      url: https://arxiv.org/pdf/1503.05121v3
    - title: "Granville–Soundararajan, Decay of mean-values of multiplicative functions, Lemma 7.1, pp. 22–23"
      url: https://arxiv.org/pdf/math/9911246v1
---

## Statement

There exist absolute constants $X_0,C>0$ with the following property. Let $X\ge X_0$ be real, let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative with $f(1)=1$ and $|f(n)|\le1$, and fix a real $t_1$ such that
$$D_X(t_1):=\sum_{p\le X}\frac{1-\operatorname{Re}(f(p)p^{-it_1})}{p}\le\frac18\log\log X.$$
Let $\mathcal P$ be any set of primes contained in $[2,\exp(\sqrt{\log X})]$. Define $g_{\mathcal P}(n)=1$ if no prime of $\mathcal P$ divides $n$, and $g_{\mathcal P}(n)=0$ otherwise. Then simultaneously for every real $x\in[X,2X]$ and every real $t$ with $|t-t_1|\le(\log X)^{1/16}$,
$$\sum_{n\le x}g_{\mathcal P}(n)f(n)n^{-it} =\frac{x^{i(t_1-t)}}{1+i(t_1-t)} \sum_{n\le x}g_{\mathcal P}(n)f(n)n^{-it_1}+R_{\mathcal P}(x,t), \qquad |R_{\mathcal P}(x,t)|\le C\frac{x}{(\log X)^{1/10}}.$$
The constants are independent of $f,t_1,t,x,\mathcal P$. In particular $t_1$ may be a fixed minimizer of $D_X$ on $[-X,X]$, if its minimum satisfies the displayed bound; it is not reselected at $x$ or for a mask. For finitely many masks $\mathcal P_r$ and complex scalars $c_r$, the same identity summed with coefficients $c_r$ has absolute error at most $Cx(\log X)^{-1/10}\sum_r|c_r|$. No choice axiom is required.

## Statement references

[MRT, Lemma A.7, pp. 24–25](https://arxiv.org/pdf/1503.05121v3)

## Facts & Assumptions

**Given:** The data and conventions in the Statement; sums over $n$ are over positive integers. The twist convention is $u^{iv}=\exp(iv\log u)$ for $u>0$.

[F1] [[lem-mrt-uniform-twist-renormalization]] applies uniformly to all complex 1-bounded multiplicative functions and real twists, with the error expressed in their prime deviations from $1$.

[F2] [[lem-reciprocal-prime-sum-from-mertens-first-theorem]] gives $\sum_{p\le u}1/p=\log\log u+O(1)$ for $u\ge3$, with an absolute constant.



## Proof

1.1 Set $L=\log\log X$, $B=\sum_{p\le x}1/p$, and $A=\sum_{p\in\mathcal P}1/p$. For sufficiently large $X$, every prime of $\mathcal P$ is at most $X$, and [F2] gives $0\le A\le L/2+C_0$ and $B\le L+C_0$ with an absolute $C_0$, uniformly in $x\in[X,2X]$. Nonnegativity of each summand of $D_x(t_1)$ and $|f(p)|\le1$ give $$D_x(t_1)\le D_X(t_1)+2\sum_{X<p\le2X}\frac1p\le L/8+4.$$ For the last inequality use $1/p\le1/X$ and at most $X+1$ integers in $(X,2X]$; no distance minimization at $x$ is used. [given, F2, algebra]

2.1 Write $z_p=f(p)p^{-it_1}$, so $|z_p|\le1$ and $|1-z_p|^2\le2(1-\operatorname{Re}z_p)$. Finite Cauchy–Schwarz gives $$S:=\sum_{p\le x}\frac{|1-g_{\mathcal P}(p)z_p|}{p} =A+\sum_{p\le x,\ p\notin\mathcal P}\frac{|1-z_p|}{p} \le A+\sqrt{2D_x(t_1)(B-A)}.$$ Here the finite inequality follows directly from $\sum_p(u_p-\lambda v_p)^2\ge0$ for all real $\lambda$, with $u_p=p^{-1/2}$ and $v_p=\sqrt{(1-\operatorname{Re}z_p)/p}$ on the unmasked primes; if $\sum v_p^2=0$ the assertion is immediate. For nonnegative $D,H$, the elementary inequality $\sqrt{2DH}\le H/(2\sqrt2)+\sqrt2D$ follows by squaring the difference of the square roots of the two terms on the right. Apply it with $H=B-A$, $D=D_x(t_1)$, and then step 1.1. All three coefficients below are positive, so $$S\le\left(1-\frac1{2\sqrt2}\right)A+\frac B{2\sqrt2}+\sqrt2D_x(t_1) \le\left(\frac12+\frac1{2\sqrt2}\right)L+C_1.$$ Since $\frac12+\frac1{2\sqrt2}<7/8$, increasing the absolute threshold $X_0$ ensures $S\le(7/8)L$ for every allowed mask and $x$. [step 1.1, given, algebra]

3.1 The function $b(n)=g_{\mathcal P}(n)f(n)n^{-it_1}$ is multiplicative, has $b(1)=1$, and is 1-bounded: avoidance of a fixed prime set is multiplicative, and the twist is completely multiplicative. Apply [F1] with $\alpha=t_1-t$. Its left side is exactly the sum at $t$, and its main coefficient is $x^{i(t_1-t)}/(1+i(t_1-t))$. By step 2.1 its error is at most $$C_2\frac{x}{\log x}\log(e+|t-t_1|)(\log X)^{7/8} \le C_3x\frac{\log\log X}{(\log X)^{1/8}} \le C_4\frac{x}{(\log X)^{1/10}}.$$ Indeed $\log x\ge\log X$, $|t-t_1|\le(\log X)^{1/16}$, and $\log\log X=O((\log X)^{1/40})$. This proves the asserted absolute uniform error with a common threshold and constant. [F1, step 2.1, given, algebra]

4.1 Multiply the identity of step 3.1 by $c_r$ for each of the finitely many masks and add. The coefficient depends only on $x,t,t_1$, so it factors out of the sum. The triangle inequality bounds the total error by $Cx(\log X)^{-1/10}\sum_r|c_r|$. In particular, inclusion–exclusion over $J$ masks with coefficients $(-1)^{|I|}$ costs at most $C2^Jx(\log X)^{-1/10}$; this assertion does not assume or prove a bound on $J$. The empty prime mask and $t=t_1$ are included. [step 3.1, algebra] ∎

## Remarks

The factor in MRT's displayed (A.8) has the opposite sign from the factor in the first display of its proof. Step 2.1 derives the latter sign directly. Both magnitudes equal $(1+(t-t_1)^2)^{-1/2}$, but the complex identities differ.

The statement permits any exact prime mask below the stated cutoff, including closed or half-open prime intervals. It does not identify two different masks. A consumer must fix its actual prime set consistently in every other argument. The lemma supplies renormalization, not the remaining resonant mean estimate or the full near-minimum route.
