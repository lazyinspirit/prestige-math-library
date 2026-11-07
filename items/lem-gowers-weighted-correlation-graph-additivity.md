---
dependency_level: 0
id: lem-gowers-weighted-correlation-graph-additivity
kind: lemma
title: "Weighted Fourier correlations force simultaneous graph additivity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - thm-finite-parseval-and-plancherel
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Propositions12.1 and14.1, printed pp.536--537 and553--554"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $N\ge1$, $G=\mathbb Z/N\mathbb Z$, $m\ge1$, $\lambda:G\to[0,\infty)$ and $\sigma_1,\ldots,\sigma_m:G\to G$. Write $e_N(x)=\exp(2\pi i\widetilde x/N)$, with any integer representative, and let
$$Q=\sum_{\substack{a+b=c+d\\ \sigma_i(a)+\sigma_i(b)=\sigma_i(c)+\sigma_i(d)\ (1\le i\le m)}}\lambda(a)\lambda(b)\lambda(c)\lambda(d).$$
The following implications hold for every real $\alpha\ge0$, without a primality hypothesis.

(a) For functions $f_i:G\to\mathbb C$ with $|f_i|\le1$, put $C_i(h,r)=\sum_xf_i(x+h)\overline{f_i(x)}e_N(-rx)$. If $\sum_h\lambda(h)\prod_i|C_i(h,\sigma_i(h))|^2\ge\alpha N^{2m+1}$, then $Q\ge\alpha^4N^3$.

(b) For functions $f_i:G^2\to\mathbb C$ with $|f_i|\le1$, put $D_i(h,r)=\sum_{x,y}f_i(x+h,y)\overline{f_i(x,y)}e_N(-ry)$. If $\sum_h\lambda(h)\prod_i|D_i(h,\sigma_i(h))|^2\ge\alpha N^{4m+1}$, then again $Q\ge\alpha^4N^3$.

## Statement references

[Gowers, Propositions12.1 and14.1, printed pp.536--537 and553--554](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The finite cyclic group, nonnegative weights, frequency maps and bounded functions in the respective clause. All Fourier transforms in this proof are unnormalised.

[F1] The character and finite orthogonality conventions are those of [[def-unitary-discrete-fourier-transform-on-z-mod-n]] and [[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]. Thus $\widetilde v(r)=\sum_xv(x)e_N(-rx)$ and $\sum_r|\widetilde v(r)|^2=N\sum_x|v(x)|^2$ by [[thm-finite-parseval-and-plancherel]].

[F2] Holder for finite counting sums, including Cauchy--Schwarz, is [[thm-holder-inequality-for-integrals]].

## Proof

1.1 For any $v:G\to\mathbb C$ with $|v|\le1$ and any $z:G\to\mathbb C$, expand the finite Fourier sums and use [F1] to obtain $\sum_hz(h)\sum_xv(x+h)\overline{v(x)}=N^{-1}\sum_r\widetilde z(-r)|\widetilde v(r)|^2$. Here $|\widetilde v(r)|\le N$ and $\sum_r|\widetilde v(r)|^2\le N^2$. Holder with exponents $4$ and $4/3$ consequently bounds the absolute value by $N^{-1}(\sum_r|\widetilde z(r)|^4)^{1/4}(\sum_r|\widetilde v(r)|^{8/3})^{3/4}\le N(\sum_r|\widetilde z(r)|^4)^{1/4}$, because the second sum is at most $N^{2/3}N^2$. This remains valid for zero functions. [given, F1, F2, algebra]

1.2 For $u=(u_1,\ldots,u_m)\in G^m$, put $z_u(h)=\lambda(h)e_N(-\sum_i u_i\sigma_i(h))$, and let $R=\sum_{u,r}|\widetilde z_u(r)|^4$. Expansion and orthogonality in the independent $m+1$ frequencies give $R=N^{m+1}Q$. The conjugated weights remain $\lambda$, since they are nonnegative real numbers; the surviving equations are exactly the defining graph-additivity equations for $Q$. [F1, construct, algebra]

2.1 If $V:G^d\to\mathbb C$, $d\ge1$, and $|V|\le1$, decompose a point as $(s,s+t_2,\ldots,s+t_d)$. The offsets $(t_2,\ldots,t_d)$ give $N^{d-1}$ diagonal translation orbits. Apply step 1.1 on each orbit and use the triangle inequality. With $\mathbf1=(1,\ldots,1)$ this proves $|\sum_hz(h)\sum_xV(x+h\mathbf1)\overline{V(x)}|\le N^d(\sum_r|\widetilde z(r)|^4)^{1/4}$. [step 1.1, construct, algebra]

3.1 For clause(a), expand its left side $S$ and set $u_i=x_i-y_i$ in the two copies of each correlation. With $V_u(x)=\prod_i f_i(x_i)\overline{f_i(x_i-u_i)}$, the expansion is exactly $S=\sum_u\sum_h z_u(h)\sum_{x\in G^m}V_u(x+h\mathbf1)\overline{V_u(x)}$. Each $V_u$ is bounded by one. Step 2.1 and Holder over $N^m$ values of $u$ give $S\le N^m\sum_u(\sum_r|\widetilde z_u(r)|^4)^{1/4}\le N^{7m/4}R^{1/4}$. Comparing with $S\ge\alpha N^{2m+1}$ yields $R\ge\alpha^4N^{m+4}$. Step 1.2 gives $Q\ge\alpha^4N^3$. [F2, step 2.1, step 1.2, algebra]

4.1 For clause(b), expand its left side $S$ using independent base pairs $(x_i,y_i),(w_i,z_i)$, and put $u_i=y_i-z_i$. Define $V_{u,z}(x,w)=\prod_i f_i(x_i,z_i+u_i)\overline{f_i(w_i,z_i)}$, a function bounded by one on $G^{2m}$. The expansion is $S=\sum_{u,z}\sum_hz_u(h)\sum_{x,w}V_{u,z}(x+h\mathbf1,w+h\mathbf1)\overline{V_{u,z}(x,w)}$. Step 2.1 gives $S\le N^{2m}\sum_{u,z}(\sum_r|\widetilde z_u(r)|^4)^{1/4}=N^{3m}\sum_u(\sum_r|\widetilde z_u(r)|^4)^{1/4}\le N^{15m/4}R^{1/4}$. Its lower bound $\alpha N^{4m+1}$ therefore gives the same $R\ge\alpha^4N^{m+4}$ and hence the same conclusion. All expansions and inequalities hold at $N=1$ and $\alpha=0$ as well; no cancellation of a possibly zero weight was used. [F2, step 2.1, step 1.2, algebra] ∎
