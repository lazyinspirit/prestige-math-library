---
id: cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large
kind: corollary
title: "$W^{2,p}$ regularity implies classical or H\"older regularity when $p$ is large"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 5
deps: [thm-higher-order-sobolev-embedding, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts, thm-extension-theorem-for-bounded-smooth-domains, lem-weak-derivatives-are-unique-almost-everywhere]
sources:
  references:
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.4.4 and §3.5, the embedding-and-Schauder comparison, printed pp. 125-128 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9 and Chapter 9, the comparison of Sobolev and Schauder scales, printed pp. 151-156 (read in full)"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, $1<p<\infty$, and let $\Omega$ be
a bounded $W^{2,p}$-extension domain (the extension property is for this
displayed $k=2$ and exponent $p$). (i) If $p>n/2$, every
$u\in W^{2,p}(\Omega)$ has a representative in $C^{0,\gamma}(\bar\Omega)$
for every $0<\gamma<\min\{1,2-n/p\}$, with the norm controlled by
$\|u\|_{W^{2,p}}$. (ii) If $p>n$, every such $u$ has a representative in
$C^{1,\gamma}(\bar\Omega)$ for every $0<\gamma<1-n/p$, with the
corresponding norm bound; in particular $D^2u\in L^p$. For any
nondivergence expression $Lu=\sum_{|\beta|\le2}a_\beta D^\beta u$ with
$a_\beta\in L^\infty(\Omega)$, this gives $Lu\in L^p(\Omega)$; whenever
$Lu=f$ also holds distributionally for some $f\in L^p(\Omega)$, the equality
then holds almost everywhere. (iii) If $p>n/(1-\alpha)$ for $0<\alpha<1$,
the representative is $C^{1,\alpha}(\bar\Omega)$. No finite $p$ gives
$C^{2,\alpha}$ regularity in general: on a ball, the function
$u(x)=(x_1)_+^2$ belongs to $W^{2,p}$ for every finite $p$, while
$D_{11}u=2\mathbf 1_{\{x_1>0\}}$ has no continuous representative.
## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge2$, $1<p<\infty$, the bounded $W^{2,p}$-extension domain $\Omega$, and $u\in W^{2,p}(\Omega)$.

[A1] The Axiom of Choice is the standing hypothesis, used through the extension operator and the embedding theorem below. ([[def-axiom-of-choice]])

[F1] By the extension property there is a bounded linear $E:W^{2,p}(\Omega)\to W^{2,p}(\mathbb R^n)$ with $(Eu)|_\Omega=u$ almost everywhere and $\|Eu\|_{W^{2,p}(\mathbb R^n)}\le C_E\|u\|_{W^{2,p}(\Omega)}$. ([[def-sobolev-extension-domain-and-extension-operator]])

[F2] Higher-order Sobolev embedding ([[thm-higher-order-sobolev-embedding]]): for a bounded extension domain and $k\ge1$, $1\le q<\infty$, (a) if $kq<n$ then $W^{k,q}\hookrightarrow L^r$ for every $1\le r\le nq/(n-kq)$; (b) if $kq=n$ then $W^{k,q}\hookrightarrow L^r$ for every finite $r$; (c) if $kq>n$ then every $u\in W^{k,q}$ has a representative in $C^{m,\beta}(\bar\Omega)$ for every integer $m\ge0$ and $0<\beta<1$ with $m+\beta<k-n/q$, with the norm bounded by a constant times $\|u\|_{W^{k,q}}$. Applied with $k=2$ and $q=p$, the three cases are $2p<n$, $2p=n$, $2p>n$; the case $2p>n$ is exactly $p>n/2$. ([[thm-higher-order-sobolev-embedding]])

[F3] The witness on the unit ball $\Omega=B(0,1)$: for
$u(x)=(x_1)_+^2:=\max\{x_1,0\}^2$, the weak derivatives are
$\partial_1u=2(x_1)_+$, $\partial_{11}u=2\mathbf 1_{\{x_1>0\}}$ and
$\partial_{ij}u=0$ otherwise. Thus $u\in W^{2,p}(\Omega)$ for every finite
$p$. On the disk section $\Omega\cap\{x_1=0\}$ the one-sided values of
$\partial_{11}u$ differ, so this weak derivative has no continuous
representative; consequently $u\notin C^{2,\alpha}(\bar\Omega)$ for every
$0<\alpha<1$. ([[def-sobolev-space-wkp-and-its-norm]])

[F4] The unit ball is a bounded $C^2$ domain and hence a $W^{2,p}$-extension
domain for every $1\le p\le\infty$
([[def-bounded-c-k-domain-and-boundary-charts]],
[[thm-extension-theorem-for-bounded-smooth-domains]]).

[F5] If two locally integrable functions represent the same distribution on
$\Omega$, they agree almost everywhere; this is the uniqueness of the
zeroth weak derivative ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

## Proof

**Proof technique:** direct application of the bounded-domain embedding.

1.1 Domain hypothesis. By the definition of a $W^{2,p}$-extension domain [F1], $\Omega$ satisfies the bounded-domain premise of [F2] for $k=2$ and exponent $p$. The embedding conclusion of [F2] is already on $\bar\Omega$; no embedding on the unbounded space $\mathbb R^n$ is used. [F1, F2, given, A1]

1.2 The ball witness: no finite $p$ gives $C^{2,\alpha}$. On $\Omega=B(0,1)$ let $u(x)=\max\{x_1,0\}^2$. The function is $C^1$ with $\partial_1u=2\max\{x_1,0\}$, and integration by parts on the two sides of $x_1=0$ gives the weak derivative $\partial_{11}u=2\mathbf 1_{\{x_1>0\}}$; the interface term vanishes because $\max\{x_1,0\}$ is continuous there. All second derivatives are bounded, so $u\in W^{2,p}(\Omega)$ for every finite $p$. If $\partial_{11}u$ had a continuous representative, it would equal $0$ on the negative open half-ball and $2$ on the positive open half-ball: the almost-everywhere equalities force these values on each open side by continuity. They cannot extend continuously across the interior disk $\Omega\cap\{x_1=0\}$. Thus $u$ has no $C^{2,\alpha}$ representative for any $0<\alpha<1$. The ball is in the stated extension-domain class by [F4]. [F3, F4, given, algebra]

2.1 Part (i): $p>n/2$. Then $2p>n$. For every $0<\gamma<\min\{1,2-n/p\}$ the embedding [F2] with $k=2$, $q=p$, $m=0$ gives a representative $u^*\in C^{0,\gamma}(\bar\Omega)$ and $\|u^*\|_{C^{0,\gamma}(\bar\Omega)}\le C\|u\|_{W^{2,p}(\Omega)}$. If $2-n/p\ge1$, the same strict inequality allows every $0<\gamma<1$. [step 1.1, F2, algebra]

2.2 Part (ii): $p>n$. Then $2-n/p>1$. For each $0<\gamma<1-n/p$, one has $1+\gamma<2-n/p$, so [F2] with $k=2$, $q=p$, $m=1$ gives a representative $u^*\in C^{1,\gamma}(\bar\Omega)$ and the stated norm bound. The weak derivatives $D^\beta u$ with $|\beta|\le2$ are $L^p$ classes by the definition of $W^{2,p}$. Thus for $L=\sum_{|\beta|\le2}a_\beta D^\beta$ with bounded coefficients, $Lu$ is an $L^p$ class. If also $Lu=f$ distributionally with $f\in L^p$, then [F5] gives equality of the represented classes almost everywhere. [step 1.1, F2, F5, algebra]

2.3 Part (iii): $p>n/(1-\alpha)$. Then $1+\alpha<2-n/p$, so [F2] with $k=2$, $q=p$, $m=1$ and exponent $\alpha$ gives a representative in $C^{1,\alpha}(\bar\Omega)$ with norm bounded by $C\|u\|_{W^{2,p}(\Omega)}$. Parts (i), (ii), (iii) are direct applications of the bounded-domain higher-order embedding. [step 1.1, F2, algebra]

3.1 Conclusion. The higher-order embedding gives the asserted $C^{0,\gamma}$ representatives when $p>n/2$, $C^{1,\gamma}$ representatives when $p>n$, and $C^{1,\alpha}$ representatives when $p>n/(1-\alpha)$. The ball witness of step 1.2 shows that no finite $p$ forces $C^{2,\alpha}$ regularity in general, so the Sobolev and Schauder scales differ at the top order. [step 2.1, step 2.2, step 2.3, step 1.2, F2] ∎


## Remarks

- The hypothesis is indexed by $(k,p)=(2,p)$: a domain that is an extension domain for one pair need not be for another, and the statement uses only the displayed pair. The counterexample on the ball shows that the extension property alone, or any finite $p$, cannot produce two H\"older derivatives.
- The strict exponent ranges in the statement are sufficient, rather than an assertion of optimality. For $p>n$, the endpoint clause of [[thm-higher-order-sobolev-embedding]] also gives $C^{1,1-n/p}(\bar\Omega)$, since $2-n/p\in(1,2)$ is nonintegral; for example $p=2n$ gives $C^{1,1/2}$. The ball witness shows that no finite $p$ forces two Hölder derivatives.
