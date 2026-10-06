---
id: lem-standard-gaussian-is-determined-by-its-moments
kind: lemma
title: "The standard Gaussian law is determined by its moments"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-standard-normal-and-normal-laws, def-moments-variance-and-covariance, def-characteristic-function-of-a-real-random-variable, lem-moments-give-derivatives-of-the-characteristic-function, def-taylor-polynomial-and-remainder, cor-taylor-remainder-bound, cor-cauchy-schwarz-for-random-variables, thm-exponential-definition-equivalence, thm-uniqueness-of-a-law-from-its-characteristic-function, lem-gaussian-even-moment-bound-for-brownian-increments, thm-of-archimedean, def-axiom-of-choice, cor-expectation-linearity-monotonicity-and-modulus-bound]
provenance:
  statement: ai-altered
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
      locator: "Prop. 6.4 and its sketch of proof, printed p. 31 (moment determinacy as the uniqueness hypothesis of the moment method)"
---

## Statement

Assume AC. Let $X$ be a real random variable with $\mathbb E|X|^k<\infty$ for every $k\ge0$ such that $\mathbb E[X^k]=\mathbb E[Z^k]$ for every $k\ge0$, where $Z\sim N(0,1)$ ([[def-standard-normal-and-normal-laws]]). Then $X\sim N(0,1)$. More generally, let $Z$ be a real random variable with moment generating function finite on a neighbourhood of $0$, and set $m_k:=\mathbb E[Z^k]$. If $X$ has all absolute moments finite and $\mathbb E[X^k]=m_k$ for every $k\ge0$, then $X$ has the same law as $Z$.

## Facts & Assumptions

**Given:** AC; real random variables $X$ and $Z$ with $\mathbb E|X|^k<\infty$ and $\mathbb E|Z|^k<\infty$ for every $k\ge0$, and $\mathbb E[X^k]=\mathbb E[Z^k]$ for every $k\ge0$. In the Gaussian case $Z\sim N(0,1)$. In the general case there is a real $r>0$ with $\mathbb E[e^{tZ}]<\infty$ for every real $t$ with $|t|<r$; an "analytic moment generating function on a neighbourhood of $0$" is read as exactly this finiteness assertion, which analyticity on an interval implies. Write $\varphi_X,\varphi_Z$ for the characteristic functions ([[def-characteristic-function-of-a-real-random-variable]]) and $h:=\varphi_X-\varphi_Z$.

[F1] For every $j$, if $\mathbb E|Y|^j<\infty$ then $\varphi_Y\in C^j(\mathbb R)$, $\varphi_Y^{(l)}(t)=\mathbb E[(iY)^le^{itY}]$ for $0\le l\le j$, hence $|\varphi_Y^{(l)}(t)|\le\mathbb E|Y|^l$ and $\varphi_Y^{(l)}(0)=i^l\mathbb E[Y^l]$ ([[lem-moments-give-derivatives-of-the-characteristic-function]]); the moments are those of [[def-moments-variance-and-covariance]].

[F2] If $X,Y\in L^2(\mathbb P)$ are real random variables then $\mathbb E[|XY|]\le(\mathbb E[X^2])^{1/2}(\mathbb E[Y^2])^{1/2}$ ([[cor-cauchy-schwarz-for-random-variables]]).

[F3] For $Z\sim N(0,1)$ one has $\mathbb E[Z^{2m}]=(2m-1)!!=1\cdot3\cdots(2m-1)$ for every integer $m\ge1$, and $\mathbb E[Z^{2m+1}]=0$ for every $m\ge0$ by symmetry of the density $e^{-x^2/2}/\sqrt{2\pi}$ ([[lem-gaussian-even-moment-bound-for-brownian-increments]], [[def-standard-normal-and-normal-laws]]).

[F4] For $v\ge0$, $e^v=\sum_{j\ge0}v^j/j!$, so $e^v\ge v^k/k!$ for every integer $k\ge0$ ([[thm-exponential-definition-equivalence]]).

[F5] Taylor remainder bound: if $f$ has derivatives through order $n+1$ on the closed interval between $a$ and $x$, with $|f^{(n+1)}|\le M$ there, then $|R_{n,a}f(x)|\le M|x-a|^{n+1}/(n+1)!$, where $R_{n,a}f(x)=f(x)-T_{n,a}f(x)$ and $T_{n,a}f$ is the Taylor polynomial of degree at most $n$ ([[def-taylor-polynomial-and-remainder]], [[cor-taylor-remainder-bound]]).

[F6] Two Borel probability laws on $\mathbb R$ with equal characteristic functions are equal ([[thm-uniqueness-of-a-law-from-its-characteristic-function]]).

[F7] For every real $x$ there is a natural number $n\ge1$ with $x<n$ ([[thm-of-archimedean]]).

[F8] Expectations of integrable variables are linear, monotone for real variables, and satisfy $|\mathbb E U|\le\mathbb E|U|$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

**Proof technique:** direct.

1.1 Setup: by [F1], $\varphi_X$ and $\varphi_Z$ are $C^\infty$ on $\mathbb R$ with $|\varphi_Y^{(l)}(t)|\le\mathbb E|Y|^l$ for every $l\ge0$ and every real $t$, and $\varphi_Y^{(l)}(0)=i^l\mathbb E[Y^l]$; consequently $h=\varphi_X-\varphi_Z$ is $C^\infty$ with $h^{(l)}(0)=i^l(\mathbb E[X^l]-\mathbb E[Z^l])=0$ for every $l\ge0$, and $|h^{(l)}(t)|\le\mathbb E|X|^l+\mathbb E|Z|^l$ for all $t$. Also, by the standing hypothesis, in the general case $A_x:=\mathbb E[e^{xZ}]+\mathbb E[e^{-xZ}]<\infty$ for every real $x$ with $0<x<r$. [given, F1, algebra, F8]

1.2 Gaussian moment bounds: let $m\ge0$. The arithmetic inequality $(2m)!\le4^m(m!)^2$ holds for $m=0$ and is preserved by passing from $m$ to $m+1$, since $(2m+2)(2m+1)\le4(m+1)^2$; hence for $m\ge1$, using [F3], $\mathbb E[Z^{2m}]=(2m-1)!!=(2m)!/(2^mm!)\le4^m(m!)^2/(2^mm!)=2^mm!\le(\sqrt2)^{2m}(2m)!$, and for $m\ge1$ the Cauchy-Schwarz bound [F2] gives $\mathbb E|Z|^{2m-1}\le(\mathbb E[Z^{4m-2}])^{1/2}=((4m-3)!!)^{1/2}\le(2^{2m-1}(2m-1)!)^{1/2}\le(\sqrt2)^{2m-1}(2m-1)!$, while $\mathbb E|Z|^0=1$. Therefore $\mathbb E|Z|^k\le(\sqrt2)^kk!$ for every $k\ge0$; and in the Gaussian case $\mathbb E|X|^k\le(\mathbb E[X^{2k}])^{1/2}=(\mathbb E[Z^{2k}])^{1/2}=((2k-1)!!)^{1/2}\le2^{k/2}(k!)^{1/2}\le(\sqrt2)^kk!$ for $k\ge1$, with equality $\mathbb E|X|^0=1$ for $k=0$. Thus $\mathbb E|Y|^k\le4^kk!$ for $Y\in\{X,Z\}$ and every $k\ge0$, in the Gaussian case. [given, F2, F3, algebra]

1.3 Local vanishing: let $g$ be a real-valued $C^\infty$ function on $\mathbb R$ and suppose there are $M>0$, $\tau>0$ with $|g^{(l)}(t)|\le Ml!\tau^{-l}$ for all $l\ge0$ and all real $t$, and let $t_0$ be a point with $g^{(l)}(t_0)=0$ for every $l\ge0$. Then for every real $t$ with $|t-t_0|<\tau$ and every $j\ge0$, the Taylor polynomial satisfies $T_{j,t_0}g(t)=0$, so [F5] applied with $n=j$ and the bound on the $(j+1)$-th derivative gives $|g(t)|=|R_{j,t_0}g(t)|\le M(j+1)!\tau^{-(j+1)}|t-t_0|^{j+1}/(j+1)!=M(|t-t_0|/\tau)^{j+1}$; letting $j\to\infty$ gives $g(t)=0$. Hence $g$ vanishes on $(t_0-\tau,t_0+\tau)$. [given, F5, algebra]

2.1 MGF moment bounds: fix $0<x<r$ and put $A:=\mathbb E[e^{xZ}]+\mathbb E[e^{-xZ}]\ge2$. Since $e^{x|Z|}\le e^{xZ}+e^{-xZ}$, [F4] gives $\mathbb E|Z|^k\le A k!x^{-k}$ for every $k\ge0$, including $k=0$. By [F2] and moment equality, $\mathbb E|X|^k\le(\mathbb E[X^{2k}])^{1/2}=(\mathbb E[Z^{2k}])^{1/2}\le A^{1/2}\sqrt{(2k)!}\,x^{-k}\le A^{1/2}2^k k!x^{-k}$, using the factorial inequality proved in step 1.2. Hence $\mathbb E|Y|^k\le C k!(x/2)^{-k}$ for $Y\in\{X,Z\}$, with $C:=\max\{A,A^{1/2}\}$. No integral over a zero power is used. [given, F2, F4, step 1.2, algebra, F8]

2.2 Global vanishing: let $g$ be as in step 1.3 and suppose in addition that $g^{(l)}(0)=0$ for every $l\ge0$. Then $g\equiv0$ on $\mathbb R$: step 1.3 with $t_0=0$ gives $g\equiv0$ on $I_0:=(-\tau,\tau)$; suppose $g\equiv0$ on $I_j:=(-(1+j/2)\tau,(1+j/2)\tau)$ for some $j\ge0$ and put $t_\pm:=\pm(j+1)\tau/2$, so $|t_\pm|=(1+j/2)\tau-\tau/2$ lies in the interior of $I_j$ and all derivatives of $g$ vanish at $t_\pm$. Step 1.3 at $t_\pm$ gives $g\equiv0$ on $((j-1)\tau/2,(j+3)\tau/2)$ and on $(-(j+3)\tau/2,-(j-1)\tau/2)$; since $(j+3)\tau/2=(1+(j+1)/2)\tau$ and $(j-1)\tau/2<(1+j/2)\tau$, the union of these intervals with $I_j$ contains $I_{j+1}:=(-(1+(j+1)/2)\tau,(1+(j+1)/2)\tau)$. By induction $g\equiv0$ on $I_j$ for every $j\ge0$; for an arbitrary real $T$, [F7] supplies a natural number $n\ge1$ with $n>2|T|/\tau$, hence $|T|<n\tau/2<(1+(n-1)/2)\tau$ and $T\in I_{n-1}$, so $g(T)=0$. [given, F7, step 1.3, algebra]

3.1 Gaussian case: by step 1.1, $h^{(l)}(0)=0$ for every $l$, and by steps 1.2 and 1.1, $|h^{(l)}(t)|\le\mathbb E|X|^l+\mathbb E|Z|^l\le2\cdot4^ll!=2\,l!(1/4)^{-l}$ for all $t,l$. Thus both $\operatorname{Re}h$ and $\operatorname{Im}h$ satisfy the real Taylor hypotheses of step 2.2 with $M=2$ and $\tau=1/4$; applying it separately to the two components gives $h\equiv0$, that is $\varphi_X=\varphi_Z$. By [F6] the laws of $X$ and $Z$ are equal, so $X\sim N(0,1)$. [given, F6, step 1.1, step 1.2, step 2.2, algebra]

3.2 General case: fix $0<x<r$ and let $C,\tau:=x/2$ be as in step 2.1, so $\mathbb E|Y|^k\le Ck!\tau^{-k}$ for $Y\in\{X,Z\}$ and every $k\ge0$. By steps 1.1 and 2.1, $h^{(l)}(0)=0$ for every $l$ and $|h^{(l)}(t)|\le2C\,l!\tau^{-l}$ for all $t,l$; step 2.2 with $M=2C$, applied separately to $\operatorname{Re}h$ and $\operatorname{Im}h$, gives $h\equiv0$, hence $\varphi_X=\varphi_Z$, and [F6] gives that $X$ and $Z$ have the same law. [given, F6, step 1.1, step 2.1, step 2.2, algebra]

4.1 Conclusion: if $X$ has all moments and $\mathbb E[X^k]=\mathbb E[Z^k]$ for all $k$ with $Z\sim N(0,1)$, step 3.1 shows $X\sim N(0,1)$, which is the first assertion; if $Z$ has an analytic moment generating function on a neighbourhood of $0$ (so that the finiteness hypothesis of step 2.1 holds) and $X$ has all moments with $\mathbb E[X^k]=m_k$, step 3.2 shows that $X$ has the same law as $Z$, which is the general assertion. [given, step 3.1, step 3.2] ∎ 