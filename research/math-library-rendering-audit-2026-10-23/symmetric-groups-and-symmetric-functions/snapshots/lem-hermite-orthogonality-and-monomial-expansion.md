---
id: lem-hermite-orthogonality-and-monomial-expansion
kind: lemma
title: "Gaussian orthogonality and the monomial expansion of the Hermite polynomials"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-monic-probabilists-hermite-polynomials, def-standard-normal-and-normal-laws, lem-characteristic-function-of-a-normal-law, lem-moments-give-derivatives-of-the-characteristic-function, lem-gaussian-even-moment-bound-for-brownian-increments, cor-cauchy-schwarz-for-random-variables, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-factorial-and-falling-factorial, def-axiom-of-choice, thm-binomial-closed-formula, cor-expectation-linearity-monotonicity-and-modulus-bound]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§6, (6.3) and the orthogonality of the monic Hermite polynomials with respect to the standard Gaussian, printed p. 30"
---

## Statement

Assume AC, and let $Z\sim N(0,1)$ ([[def-standard-normal-and-normal-laws]]). For the monic Hermite polynomials $H_m$ of [[def-monic-probabilists-hermite-polynomials]]:

(i) $\mathbb E[H_m(Z)]=0$ for every $m\ge1$, and $\mathbb E[H_m(Z)H_n(Z)]=m!\,\delta_{mn}$ for all $m,n\ge0$;

(ii) for every $m\ge0$, $x^m=\sum_{j=0}^{\lfloor m/2\rfloor}c_{m,j}H_{m-2j}(x)$ with $c_{m,0}=1$ and
$$c_{m,j}=\frac{m!}{2^j\,j!\,(m-2j)!}=\binom{m}{2j}(2j-1)!!\in\mathbb Z\qquad(0\le j\le\lfloor m/2\rfloor);$$
equivalently, the monomials and the Hermite polynomials are related by a unitriangular change of basis in each finite degree;

(iii) consequently, for any $N\ge1$ and any $m_1,\dots,m_N\in\mathbb N$, the mixed monomial $\prod_{k=1}^Nx_k^{m_k}$ is a $\mathbb Z$-linear combination of products $\prod_kH_{m'_k}(x_k)$ with $m'_k\le m_k$ and $m'_k\equiv m_k\pmod2$, the coefficient of $\prod_kH_{m_k}$ being $1$.

## Facts & Assumptions

**Given:** AC; a random variable $Z\sim N(0,1)$; the polynomials $H_m$ defined by $H_0=1$, $H_1(x)=x$ and $xH_m=H_{m+1}+mH_{m-1}$ ([[def-monic-probabilists-hermite-polynomials]]); $\varphi_Z(t)=\mathbb E[e^{itZ}]$ is the characteristic function of $Z$.

[F1] For $Z\sim N(0,1)$ and every real $t$, $\varphi_Z(t)=e^{-t^2/2}$ ([[lem-characteristic-function-of-a-normal-law]]).

[F2] If $\mathbb E|Y|^k<\infty$ then $\varphi_Y\in C^k(\mathbb R)$ with $\varphi_Y^{(j)}(t)=\mathbb E[(iY)^je^{itY}]$ for $0\le j\le k$; in particular $\varphi_Y^{(j)}(0)=i^j\mathbb E[Y^j]$ ([[lem-moments-give-derivatives-of-the-characteristic-function]]).

[F3] For $Z\sim N(0,1)$, $\mathbb E|Z|^{2m}=(2m-1)!!$ for every $m\ge1$ ([[lem-gaussian-even-moment-bound-for-brownian-increments]]); and $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$ for square-integrable $X,Y$ ([[cor-cauchy-schwarz-for-random-variables]]).

[F4] Derivative rules: if $g$ is differentiable then $t\mapsto g(-t)$ has derivative $-g'(-t)$, and $(fg)'=f'g+fg'$, $(\alpha f)'=\alpha f'$ ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F5] Factorials: $m!$ is the product of $1,\dots,m$ with $0!=1$, and $\binom{m}{2j}=\frac{m!}{(2j)!(m-2j)!}$ ([[def-factorial-and-falling-factorial]], [[thm-binomial-closed-formula]]).

[F6] Expectations of integrable variables are linear, monotone for real variables, and satisfy $|\mathbb E U|\le\mathbb E|U|$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

**Proof technique:** direct.

1.1 Vanishing of odd moments: by [F1] the function $\varphi_Z(t)=e^{-t^2/2}$ is even, and by induction with [F4] each derivative $\varphi_Z^{(j)}$ has parity $(-1)^j$ (differentiating flips parity); hence $\varphi_Z^{(2k+1)}$ is odd and therefore $\varphi_Z^{(2k+1)}(0)=0$ for every $k\ge0$. All absolute moments of $Z$ are finite, since by [F3] $\mathbb E|Z|^{2m}=(2m-1)!!$ and [F3] gives $\mathbb E|Z|^{2m+1}\le(\mathbb E|Z|^{4m+2})^{1/2}<\infty$; so [F2] applies to every order and gives $\mathbb E[Z^{2k+1}]=i^{-(2k+1)}\varphi_Z^{(2k+1)}(0)=0$. [given, F1, F2, F3, F4, algebra]

1.2 Derivative relation: $H_m'=mH_{m-1}$ for every $m\ge1$. This holds for $m=1$, since $H_1'=1=H_0$, and for $m=2$, since $H_2'=2x=2H_1$; for $m\ge2$, if it holds for all indices up to $m$, then differentiating $H_{m+1}=xH_m-mH_{m-1}$ with [F4] gives $H_{m+1}'=H_m+xH_m'-mH_{m-1}'=H_m+m\,xH_{m-1}-m(m-1)H_{m-2}$, and substituting $xH_{m-1}=H_m+(m-1)H_{m-2}$ yields $H_{m+1}'=(m+1)H_m$. [given, F4, algebra]

1.3 Monomial expansion: every $m\ge0$ admits the expansion $x^m=\sum_{j=0}^{\lfloor m/2\rfloor}c_{m,j}H_{m-2j}$ with $c_{m,j}=\frac{m!}{2^jj!(m-2j)!}$. Indeed $x^0=H_0$ gives $m=0$; if the expansion holds for $m-1\ge0$, then multiplying by $x$ and using $xH_l=H_{l+1}+lH_{l-1}$ gives coefficient of $H_{m-2j}$ equal to $c_{m-1,j}+(m+1-2j)c_{m-1,j-1}$ (with $c_{r,l}:=0$ whenever $l<0$ or $2l>r$, and $xH_0=H_1$ supplying the boundary case), which equals $c_{m,j}$: for $j\ge1$ the common denominator $2^jj!(m-2j)!$ turns it into $\frac{(m-1)!(m-2j)+2j\,(m-1)!}{2^jj!(m-2j)!}=\frac{m!}{2^jj!(m-2j)!}$ (using [F5]), and for $j=0$ it gives $c_{m-1,0}=1=c_{m,0}$. By [F5], $c_{m,j}=\binom{m}{2j}(2j-1)!!$ is an integer and $c_{m,0}=1$. Moreover the monicity and degree $\deg H_l=l$ make the matrix of coefficients of $x^0,\dots,x^m$ in the basis $H_0,\dots,H_m$ unitriangular with diagonal entries $c_{m,0}=1$, so the expansion is the unique one and defines an invertible unitriangular change of basis in each finite degree. [given, F5, algebra]

2.1 Stein identity: for every real polynomial $p$, $\mathbb E[Zp(Z)]=\mathbb E[p'(Z)]$. Write $p(x)=\sum_{j=0}^da_jx^j$; then $\mathbb E[Zp(Z)]=\sum_{j=0}^da_j\mathbb E[Z^{j+1}]$ and $\mathbb E[p'(Z)]=\sum_{j=1}^dja_j\mathbb E[Z^{j-1}]$, both finite sums. The constant term contributes $a_0\mathbb E[Z]=0$ on the left and nothing on the right, and for every $j\ge1$ one has $\mathbb E[Z^{j+1}]=j\,\mathbb E[Z^{j-1}]$: when $j$ is even both sides vanish by step 1.1; when $j$ is odd, [F3] gives $\mathbb E[Z^{j+1}]=(j)!!$ and $j\mathbb E[Z^{j-1}]=j(j-2)!!=j!!$; here $(-1)!!:=1$ covers $j=1$, where both sides are $\mathbb E[Z^2]=1$. Hence the two sums are equal. [given, F1, F3, step 1.1, algebra, F6]

2.2 Multivariate expansion: let $N\ge1$ and $m_1,\dots,m_N\ge0$. Expanding each factor by step 1.3 and multiplying out, $\prod_kx_k^{m_k}=\sum_{j_1,\dots,j_N}\bigl(\prod_kc_{m_k,j_k}\bigr)\prod_kH_{m_k-2j_k}(x_k)$; each index $m'_k:=m_k-2j_k$ satisfies $m'_k\le m_k$ and $m'_k\equiv m_k\pmod2$, the coefficients are integers by step 1.3, and the single tuple $(j_1,\dots,j_N)=(0,\dots,0)$ contributes $\prod_kH_{m_k}$ with coefficient $1$. [given, step 1.3, algebra]

3.1 Zero means: $\mathbb E[H_0(Z)]=1$ and $\mathbb E[H_m(Z)]=0$ for every $m\ge1$, by induction on $m$: the case $m=1$ is $\mathbb E[Z]=0$ from step 1.1, and for $m\ge1$ the recurrence and step 2.1 give $\mathbb E[H_{m+1}(Z)]=\mathbb E[ZH_m(Z)]-m\mathbb E[H_{m-1}(Z)]=\mathbb E[H_m'(Z)]-m\mathbb E[H_{m-1}(Z)]=m\mathbb E[H_{m-1}(Z)]-m\mathbb E[H_{m-1}(Z)]=0$, where step 1.2 identifies $H_m'=mH_{m-1}$ and the induction hypothesis handles $\mathbb E[H_{m-1}]$. [given, step 1.1, step 1.2, step 2.1, algebra, F6]

4.1 Orthogonality: put $a(M,n):=\mathbb E[H_M(Z)H_n(Z)]$ for $M,n\ge0$. We show $a(M,n)=n!\,\delta_{Mn}$. First $a(0,n)=\mathbb E[H_n(Z)]=\delta_{0n}$ by step 3.1. For $M=1$ and $n\ge1$, step 2.1 gives $a(1,n)=\mathbb E[ZH_n]=\mathbb E[H_n\prime]=n a(0,n-1)$. For $M\ge2$ and $n\ge1$, the recurrence $H_M=xH_{M-1}-(M-1)H_{M-2}$, the Stein identity of step 2.1 applied to $p=H_{M-1}H_n$ and the derivative relation of step 1.2 give $a(M,n)=\mathbb E[ZH_{M-1}H_n]-(M-1)a(M-2,n)=\mathbb E[(H_{M-1}H_n)']-(M-1)a(M-2,n)=(M-1)a(M-2,n)+n\,a(M-1,n-1)-(M-1)a(M-2,n)=n\,a(M-1,n-1)$, while for $n=0$ and $M\ge1$ one has $a(M,0)=\mathbb E[H_M(Z)]=0$ by step 3.1. If $k\le M$ and $k\le n$, iteration gives $a(M,n)=n(n-1)\cdots(n-k+1)\,a(M-k,n-k)$; taking $k=n$ when $n\le M$ yields $a(M,n)=n!\,a(M-n,0)$, which is $0$ for $M>n$ and is $n!\,a(0,0)=n!$ for $M=n$ by step 3.1, while taking $k=M$ when $M<n$ yields $a(M,n)=n(n-1)\cdots(n-M+1)a(0,n-M)=0$ because $n-M\ge1$. Hence $a(M,n)=n!\,\delta_{Mn}$, which is claim (i) together with step 3.1. [given, step 1.2, step 2.1, step 3.1, algebra, F6]

5.1 Conclusion: step 3.1 and step 4.1 prove (i); step 1.3 proves (ii) (including the unitriangularity clause); step 2.2 proves (iii). No step used anything beyond the published derivative, moment and characteristic-function facts listed above. [given, step 1.3, step 2.2, step 3.1, step 4.1] ∎ 