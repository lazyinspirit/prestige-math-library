---
id: lem-exponential-series-of-a-bounded-operator
kind: lemma
title: "The exponential series of a bounded operator"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-bounded-linear-operator
  - def-operator-norm
  - lem-operator-norm-is-a-norm
  - lem-composition-operator-norm-inequality
  - thm-bounded-operator-space-is-banach
  - def-series-and-absolute-convergence-in-a-normed-space
  - thm-banach-series-criterion
  - lem-absolutely-convergent-series-is-cauchy
  - def-real-exponential-function-and-e
  - cor-exponential-is-a-bijection-onto-positive-reals
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.2, Theorem 11.4, printed pp. 250-252"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 3, Theorem 3.7 (uniformly continuous semigroups), printed pp. 20-23"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $X$ be a real or complex Banach space and let $A\in\mathcal B(X)$ ([[def-bounded-linear-operator]]). For $t\in\mathbb R$ define $E(t):=\sum_{n=0}^\infty\frac{t^n}{n!}A^n$. Then the series converges absolutely in the operator norm $\|\cdot\|$ of $\mathcal B(X)$, uniformly for $t$ in compact subsets of $\mathbb R$; $E(t)\in\mathcal B(X)$ with $\|E(t)\| \le e^{|t|\|A\|}$; $E(0)=I$ and $E(t+s)=E(t)E(s)$ for all $s,t\in\mathbb R$; $t\mapsto E(t)$ is of class $C^\infty$ in the operator norm with $$E'(t)=AE(t)=E(t)A,$$ and $\|E(t)-I-tA\| \le\frac{t^2}{2}\|A\|^2e^{|t|\|A\|}$, so that $\frac{E(t)-I}{t}\to A$ in operator norm as $t\to0$. In particular $E$ is a uniformly continuous (hence strongly continuous) group of bounded operators on $X$ whose generator is the bounded operator $A$.

## Facts & Assumptions

**Given:** A real or complex Banach space $X$, an operator $A\in\mathcal B(X)$, and for $t\in\mathbb R$ and $N\in\mathbb N$ the partial sums $s_N(t):=\sum_{n=0}^{N}\frac{t^n}{n!}A^n$ and the series $E(t):=\sum_{n=0}^{\infty}\frac{t^n}{n!}A^n$.

[F1] The operator norm $\|\cdot\|$ is a norm on $\mathcal B(X)$ ([[def-operator-norm]], [[lem-operator-norm-is-a-norm]], [[def-bounded-linear-operator]]), and $\mathcal B(X)$ is complete for it because $X$ is a Banach space ([[thm-bounded-operator-space-is-banach]]).

[F2] Composition in $\mathcal B(X)$ is associative and bilinear, $I$ is its identity, and $\|ST\|\le\|S\|\,\|T\|$ for all $S,T\in\mathcal B(X)$ ([[lem-composition-operator-norm-inequality]]); consequently $\|A^n\|\le\|A\|^n$ for every $n\ge0$. Completeness of $\mathcal B(X)$ for the operator norm [F1] together with these facts is all the structure used below; no separate Banach-algebra packaging is needed, and the estimates are identical over $\mathbb R$ and $\mathbb C$.

[F3] In a Banach space a series converges whenever it converges absolutely, i.e. whenever the series of norms converges; its partial sums are then Cauchy ([[thm-banach-series-criterion]], [[lem-absolutely-convergent-series-is-cauchy]], [[def-series-and-absolute-convergence-in-a-normed-space]]).

[F4] For real $u\ge0$ the exponential series satisfies $\sum_{n\ge0}u^n/n!=e^{u}<\infty$, and $e^{u}>0$ ([[def-real-exponential-function-and-e]], [[cor-exponential-is-a-bijection-onto-positive-reals]]); by $n!\ge2\,(n-2)!$ for $n\ge2$, its tail obeys $\sum_{n\ge2}u^n/n!\le\frac{u^2}{2}e^{u}$.



## Proof

**Proof technique:** direct, by norm estimates on the exponential series and an elementary Cauchy-product lemma.

1.1 The series converges absolutely for every real $t$: by [F2] the general term obeys $\|t^nA^n/n!\|\le|t|^n\|A\|^n/n!$, so with $u:=|t|\,\|A\|$ the comparison series $\sum_n u^n/n!$ is the scalar exponential of [F4] and converges. [F2, F4]

1.2 **Cauchy-product step.** If $\sum_kx_k$ and $\sum_jy_j$ converge absolutely in $\mathcal B(X)$ and $z_n:=\sum_{k+j=n}x_ky_j$, then $\sum_nz_n$ converges absolutely with sum $\bigl(\sum_kx_k\bigr)\bigl(\sum_jy_j\bigr)$. Indeed $\sum_n\|z_n\|\le\sum_n\sum_{k+j=n}\|x_k\|\,\|y_j\|=\bigl(\sum_k\|x_k\|\bigr)\bigl(\sum_j\|y_j\|\bigr)<\infty$ by [F2], so $\sum_nz_n$ converges by [F3]. Writing $P_N:=\sum_{k\le N}x_k$, $Q_N:=\sum_{j\le N}y_j$, $T_N:=\sum_{n\le N}z_n$, the product $P_NQ_N=\sum_{n\le2N}\sum_{k+j=n,\ k,j\le N}x_ky_j$ differs from $T_{2N}$ only by the terms with $k>N$ or $j>N$, so $\|P_NQ_N-T_{2N}\|\le\bigl(\sum_{k>N}\|x_k\|\bigr)\bigl(\sum_j\|y_j\|\bigr)+\bigl(\sum_k\|x_k\|\bigr)\bigl(\sum_{j>N}\|y_j\|\bigr)\to0$ by [F2] and absolute convergence; since $P_NQ_N\to\bigl(\sum x_k\bigr)\bigl(\sum y_j\bigr)$ by continuity of the product, the subsequence $T_{2N}$ converges to that product, and a subsequence of a convergent sequence has the same limit, so $\sum_nz_n=\bigl(\sum_kx_k\bigr)\bigl(\sum_jy_j\bigr)$. [F1, F2, F3]

2.1 Hence $E(t):=\sum_{n\ge0}t^nA^n/n!\in\mathcal B(X)$ is defined for every $t$ by [F3], the family of series is dominated by the convergent scalar series $\sum_nR^n\|A\|^n/n!$ on every compact interval $|t|\le R$, so the convergence is uniform there and in particular $t\mapsto E(t)$ is continuous in operator norm; and $\|E(t)\|\le\sum_n|t|^n\|A\|^n/n!=e^{|t|\,\|A\|}<\infty$. [F3, F4, step 1.1]

2.2 Applying [step 1.2] to $x_k=\frac{t^k}{k!}A^k$ and $y_j=\frac{s^j}{j!}A^j$, whose series converge absolutely by [step 1.1], gives $E(t)E(s)=\sum_n\bigl(\sum_{k+j=n}\frac{t^ks^j}{k!j!}\bigr)A^n=\sum_n\frac{(t+s)^n}{n!}A^n=E(t+s)$, where $A^kA^j=A^{k+j}$ and the binomial theorem in the commutative subalgebra generated by $A$ were used. [step 1.2, step 1.1, algebra]

2.3 For $h\ne0$ and $n\ge1$, the binomial expansion gives $\frac{(t+h)^n-t^n}{h}-nt^{n-1}=\sum_{j=2}^{n}\binom njh^{j-1}t^{n-j}$; subtracting the two absolutely convergent series and using $\sum_{n\ge1}\frac{nt^{n-1}}{n!}A^n=AE(t)$, the difference quotient obeys $\bigl\|\frac{E(t+h)-E(t)}{h}-AE(t)\bigr\|\le\sum_{n\ge2}\sum_{j=2}^{n}\frac{\binom nj|h|^{j-1}|t|^{n-j}\|A\|^n}{n!}=\Bigl(\sum_{j\ge2}\frac{|h|^{j-1}\|A\|^j}{j!}\Bigr)\Bigl(\sum_{m\ge0}\frac{|t|^m\|A\|^m}{m!}\Bigr)\le\frac{|h|\,\|A\|^2}{2}e^{|h|\,\|A\|}e^{|t|\,\|A\|}$, which tends to $0$ as $h\to0$; the rearrangement of the nonnegative double series is legitimate and the tail estimate is [F4]. [F2, F4, step 1.1, algebra]

3.1 At $t=0$ all terms with $n\ge1$ vanish, so $E(0)=I$; and since multiplication is continuous in the operator norm by [F1] and [F2], the product of the partial sums converges, which is what the next steps quantify. [F1, F2, step 2.1]

3.2 The quadratic remainder is $\|E(t)-I-tA\|=\bigl\|\sum_{n\ge2}\frac{t^n}{n!}A^n\bigr\|\le\sum_{n\ge2}\frac{|t|^n\|A\|^n}{n!}\le\frac{t^2\|A\|^2}{2}e^{|t|\,\|A\|}$ by [F2] and the tail bound of [F4], since $n!\ge2(n-2)!$ for $n\ge2$. [F2, F4, step 2.1]

3.3 Therefore $E$ is differentiable on $\mathbb R$ with $E'(t)=AE(t)$; since $A$ commutes with every power $A^n$, continuity of multiplication and [step 2.1] give $AE(t)=\lim_NA\,s_N(t)=\lim_Ns_N(t)A=E(t)A$ as well. Iterating, if $E$ is $m$ times differentiable with $E^{(m)}=A^mE$, then $t\mapsto A^mE(t)$ is differentiable with derivative $A^mE'(t)=A^{m+1}E(t)$ because $A^m$ is bounded; hence $E^{(m)}=A^mE$ for all $m$, that is $E$ is $C^\infty$ with $E^{(m)}(t)=A^mE(t)$. [step 2.3, F2, algebra]

4.1 Taking $t\to0$ in [step 3.2] gives $\bigl\|\frac{E(t)-I}{t}-A\bigr\|\le\frac{|t|\,\|A\|^2}{2}e^{|t|\,\|A\|}\to0$, so the difference quotients of $E$ at $0$ converge to $A$ in operator norm; consequently $E$ is a uniformly continuous group: by [step 2.2] $E(0)=I$ and $E(t)E(-t)=E(0)=I=E(-t)E(t)$, so each $E(t)$ is invertible with inverse $E(-t)$, and $t\mapsto E(t)$ is norm continuous on $\mathbb R$ by [step 2.1], hence strongly continuous, and the difference-quotient limit at $0$ identifies its generator with the bounded operator $A$. [step 2.1, step 2.2, step 3.2, step 3.3] ∎

Notes. The same estimates give $\|E(t)\|\le e^{|t|\,\|A\|}$ and show the series converges in operator norm uniformly on compact $t$-intervals; nothing here uses a choice principle, and the zero space $X=\{0\}$ is included through the estimates $\|A\|=0$, $E(t)=I=0$.
