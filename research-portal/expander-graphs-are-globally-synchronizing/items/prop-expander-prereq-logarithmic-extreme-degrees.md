---
id: prop-expander-prereq-logarithmic-extreme-degrees
kind: proposition
title: Extremal degrees at a fixed logarithmic mean
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-degree-law-and-dependence
  - prop-expander-prereq-entropy-root-geometry
  - prop-expander-prereq-binomial-exponential-envelope
  - math:def-erdos-renyi-random-graph
  - math:lem-binomial-count-law
  - math:thm-real-stirling-formula
  - math:thm-chebyshev-inequality
  - math:lem-variance-and-covariance-identities-for-random-variables
  - math:thm-logarithm-derivative-and-integral
  - math:thm-natural-logarithm-laws
  - math:thm-finite-union-bound
dependency_roles:
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  prop-expander-prereq-entropy-root-geometry: mathematical-premise
  prop-expander-prereq-binomial-exponential-envelope: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:lem-binomial-count-law: mathematical-premise
  math:thm-real-stirling-formula: mathematical-premise
  math:thm-chebyshev-inequality: mathematical-premise
  math:lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

Fix $\gamma>1$ and let $p=\gamma\log n/n$. For all sufficiently large integers $n$, let $G(n,p)$ be the random simple graph on $[n]=\{1,\ldots,n\}$ whose distinct possible edges occur independently with probability $p$. Write $d(v)$ for the number of edges incident to $v$, and let $d_{\min}=\min_v d(v)$ and $d_{\max}=\max_v d(v)$. Let $I(a)=a\log a-a+1$ for $a>0$, and let $a_-\in(0,1)$ and $a_+>1$ be the unique solutions of $\gamma I(a)=1$. Then $d_{\min}/(pn)\to a_-$ and $d_{\max}/(pn)\to a_+$ in probability as $n\to\infty$: for each $\varepsilon>0$, the probability that either normalized degree differs from its stated limit by more than $\varepsilon$ tends to zero.

## Facts & Assumptions

[F1] In $G(n,p)$ the edge indicators are independent Bernoulli variables. Each degree has law $\operatorname{Bin}(n-1,p)$; for distinct $u,v$, $d(u)=A_{uv}+R_u$ and $d(v)=A_{uv}+R_v$, where $A_{uv},R_u,R_v$ are independent, $A_{uv}$ is Bernoulli$(p)$ and each residual degree is $\operatorname{Bin}(n-2,p)$ ([[math:def-erdos-renyi-random-graph]], [[prop-expander-prereq-degree-law-and-dependence]]).

[F2] For $X\sim\operatorname{Bin}(N,p)$, $\mathbb P(X=k)=\binom Nk p^k(1-p)^{N-k}$ for $0\le k\le N$. In particular the probability envelope in [[prop-expander-prereq-binomial-exponential-envelope]] applies; the exact mass formula also permits adjacent masses to be compared ([[math:lem-binomial-count-law]]).

[F3] Stirling's formula is $k!\sim\sqrt{2\pi k}(k/e)^k$ as $k\to\infty$ ([[math:thm-real-stirling-formula]]).

[F4] $I$ is strictly decreasing on $(0,1)$ and strictly increasing on $(1,\infty)$, with the two stated roots for $\gamma>1$ ([[prop-expander-prereq-entropy-root-geometry]]).

[F5] For a finite real random variable $Y$ and $t>0$, $\mathbb P(|Y-\mathbb EY|\ge t)\le\operatorname{Var}(Y)/t^2$; variance expands as the sum of pairwise covariances ([[math:thm-chebyshev-inequality]], [[math:lem-variance-and-covariance-identities-for-random-variables]]).

[F6] The logarithm has derivative $1/x$ on $(0,\infty)$ ([[math:thm-logarithm-derivative-and-integral]]). For positive $x,y$, $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$ ([[math:thm-natural-logarithm-laws]]).

[F7] For any finite family of events $E_1,\ldots,E_m$ in one probability space, $\mathbb P(\bigcup_{i=1}^m E_i)\le\sum_{i=1}^m\mathbb P(E_i)$ ([[math:thm-finite-union-bound]]).

## Proof

**Given:** The graph sequence and fixed $\gamma>1$ in the Statement. Put $\mu=np=\gamma\log n$.

**Goal:** Prove convergence in probability of both extreme degrees to the stated roots.

1.1 Fix $a>0$, let $k=\lfloor a\mu\rfloor$, and let $N=n-1$ or $n-2$. For sufficiently large $n$, $1\le k<N$. By [F2] and the logarithm laws in [F6], the logarithm of the mass at $k$ is $\sum_{j=0}^{k-1}\log(N-j)+k\log p-\log(k!)+(N-k)\log(1-p)$. Since $k=O(\log n)$, [F6] gives $\sum_{j=0}^{k-1}\log(N-j)=k\log N+O(k^2/N)$ and $(N-k)\log(1-p)=-Np+O(kp+Np^2)$. By [F3], $\log(k!)=k\log k-k+O(\log k)$. Thus the log mass is $-\mu I(a)+o(\log n)$, because $Np=\mu+o(1)$ and $k/\mu\to a$. Consequently this mass is $n^{-\gamma I(a)+o(1)}$. The same conclusion holds if $k$ is changed by a bounded integer amount. [F2, F3, F6, algebra]

2.1 For $X\sim\operatorname{Bin}(n-1,p)$, [F2] gives $\mathbb P(X=j-1)/\mathbb P(X=j)=j(1-p)/((n-j)p)$ for $1\le j\le n-1$. If $0<a<1$, this ratio is at most a fixed $\rho<1$ for all $j\le\lfloor a\mu\rfloor$ and all sufficiently large $n$. If $a>1$, the reciprocal ratio $\mathbb P(X=j+1)/\mathbb P(X=j)$ is at most a fixed $\rho<1$ for all $j\ge\lfloor a\mu\rfloor$ with $j<n-1$. Summing the corresponding finite geometric bounds and using step 1.1 shows that each respective lower or upper tail is at most $n^{-\gamma I(a)+o(1)}$. If $a<a_-$ or $a>a_+$, [F4] makes $\gamma I(a)>1$; the union bound [F7] over the $n$ vertices then makes the probability of a degree in that respective tail tend to zero. [F1, F2, F4, F7, step 1.1, algebra]

2.2 Fix $a>0$ with $\gamma I(a)<1$, and set $k=\lfloor a\mu\rfloor$. Let $Z$ count vertices of degree exactly $k$, and write $q=\mathbb P(d(v)=k)$. By step 1.1, $\mathbb EZ=nq=n^{1-\gamma I(a)+o(1)}\to\infty$. For distinct $u,v$, let $b_j=\mathbb P(R_u=j)$ and put $r=b_{k-1}/b_k$. The mass formula gives $r=k(1-p)/((n-1-k)p)\to a$. By the independent shared-edge decomposition in [F1], $q=b_k((1-p)+pr)$ and $\mathbb P(d(u)=k,d(v)=k)=b_k^2((1-p)+pr^2)$. Hence the ratio of this joint probability to $q^2$ is $1+p(1-p)(r-1)^2/((1-p)+pr)^2=1+O(p)=1+o(1)$. Expanding the variance using [F5] yields $\operatorname{Var}(Z)/(\mathbb EZ)^2\le 1/(nq)+o(1)\to0$. Chebyshev's inequality therefore gives $\mathbb P(Z=0)\to0$. [F1, F2, F5, step 1.1, algebra]

3.1 Given $\varepsilon>0$, choose $b_-,c_-,b_+,c_+$ with $0<b_-<a_-<c_-<1<c_+<a_+<b_+$, all within $\varepsilon$ of their respective roots. By [F4], the outer choices have $\gamma I>1$ and the inner choices have $\gamma I<1$. Step 2.1 excludes degrees at or below $\lfloor b_-\mu\rfloor$ and at or above $\lfloor b_+\mu\rfloor$ with probability tending to one. Step 2.2 supplies vertices of degrees $\lfloor c_-\mu\rfloor$ and $\lfloor c_+\mu\rfloor$ with probability tending to one. Since $\mu\to\infty$, the floor errors divided by $\mu$ vanish. By [F7], these four bounds hold simultaneously with probability tending to one and bracket $d_{\min}/\mu$ and $d_{\max}/\mu$ within $\varepsilon$ of their respective roots with probability tending to one, proving both asserted convergences. [F4, F7, step 2.1, step 2.2, algebra] ∎
