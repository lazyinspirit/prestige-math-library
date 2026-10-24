---
id: lem-local-linear-normalized-moment-matrix-converges-in-probability
kind: lemma
title: Local-linear moment matrix converges to a positive-definite limit
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-convergence-in-probability
  - def-identically-distributed-and-iid-random-variables
  - def-measure-with-density
  - def-moments-variance-and-covariance
  - def-random-element-and-real-random-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Whitney K. Newey, Locally Linear Regression, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/40cac15c5fb98b5bf72b8cfaab90c273_local_lin_reg.pdf"
---

## Statement

Let $X_i$ be iid real random variables with density $f$ continuous and
positive at a fixed point $x$. Let $K$ be finite-valued Borel, nonnegative,
symmetric, with $\int K=1$ and $0<\mu_2=\int u^2K(u)\,du<\infty$.
Assume compact kernel support, a globally bounded density $f$, or a bounded
rapid-tail kernel satisfying $\sup_{|u|\ge A}|u|^3K(u)\to0$.
For $h=h_n\to0$ with $nh_n\to\infty$, set $U_i=(x-X_i)/h_n$ and
$$M_n=\frac1{nh_n}\sum_{i=1}^nK(U_i)\begin{pmatrix}1\\U_i\end{pmatrix}(1,U_i).$$
Then
$$M_n\longrightarrow f(x)\begin{pmatrix}1&0\\0&\mu_2\end{pmatrix}\quad\text{in probability},$$
and $\mathbb P(M_n\text{ is nonsingular})\to1$.
More generally, the proof establishes $(nh_n)^{-1}\sum_i L(U_i)\to f(x)\int L$
for any integrable Borel function $L$, if $f$ is bounded globally or $L$
has compact support. Boundedness or square integrability of $L$ is unnecessary.

## Facts & Assumptions

**Given:** The sampling, density, kernel and bandwidth hypotheses in the statement.

[F1] IID means a common law and mutual independence. [[def-identically-distributed-and-iid-random-variables]].

[F2] Density integration uses $f\,d\lambda$. [[def-measure-with-density]].

[F3] A square-integrable variable has variance $\mathbb E[(V-\mathbb EV)^2]$. [[def-moments-variance-and-covariance]].

[F4] Convergence in probability is convergence of each fixed-error event probability to zero. [[def-convergence-in-probability]].

## Proof



1.1 For the general assertion truncate $L$ to $L_A=L\mathbf1_{\{|u|\le A,\ |L(u)|\le A\}}$. The expectation of $(nh)^{-1}\sum_iL_A(U_i)$ is $\int L_A(u)f(x-hu)\,du\to f(x)\int L_A$ by uniform density convergence on its fixed compact support. Its variance is at most $(nh)^{-1}\int L_A(u)^2f(x-hu)\,du=O_A((nh)^{-1})\to0$. The elementary bound $\mathbb P(|V-\mathbb EV|>\epsilon)\le\operatorname{Var}(V)/\epsilon^2$ follows by integrating $\epsilon^2\mathbf1_{\{|V-\mathbb EV|>\epsilon\}}\le(V-\mathbb EV)^2$. Thus the truncated average converges in probability. [given, F1, F2, F3, F4, algebra]

2.1 The expectation of the absolute difference between the full and truncated averages is at most $C\int|L-L_A|$, using the global density bound or its bound on the shrinking image of the compact support of $L$. This tends to zero as $A\to\infty$. Markov's bound, obtained from $\epsilon\mathbf1_{\{Z>\epsilon\}}\le Z$ for $Z\ge0$, makes this difference uniformly small in probability. Also $\int L_A\to\int L$. First choosing $A$ large and then $n$ large proves the general assertion. [given, F2, F4, step 1.1, algebra]

3.1 For the rapid-tail case and $L(u)=u^jK(u)$, $j=0,1,2$, restrict first to $|x-X_i|\le\delta$, where the density is bounded. The same truncation proof works there. The expected absolute contribution of the remaining observations is at most $\epsilon_h h^{2-j}\int_{|z-x|>\delta}|z-x|^{j-3}f(z)\,dz\to0$, where $\epsilon_h=\sup_{|u|\ge\delta/h}|u|^3K(u)\to0$. Thus the same scalar limits hold for these three moments without a global density bound. [given, F2, F4, step 1.1, step 2.1, algebra]

4.1 Apply steps 1.1–3.1 to $L(u)=K(u)u^j$ for $j=0,1,2$, all integrable by the finite second moment. Symmetry gives $\int uK=0$. The entries of $M_n$ therefore have the displayed limits. Its determinant tends in probability to $f(x)^2\mu_2>0$, since it is a polynomial in the entries. A zero determinant lies outside a fixed neighborhood of this positive limit, so its probability tends to zero. [given, F4, step 2.1, algebra, step 3.1] ∎

