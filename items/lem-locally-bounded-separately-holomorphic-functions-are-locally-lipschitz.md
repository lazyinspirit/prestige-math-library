---
id: lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz
kind: lemma
title: "A bounded separately holomorphic function on a polydisc is Lipschitz on every smaller polydisc"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-separately-holomorphic-function, def-balls-and-polydiscs-in-complex-euclidean-space, cor-cauchy-inequalities, lem-holomorphic-difference-quotient-segment-formula, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, def-vector-valued-derivative-and-integral, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-cauchy-integral-formula-higher-derivatives, cor-complex-differentiability-implies-continuity, def-convex-subset-of-euclidean-space, lem-finite-sum-laws, def-finite-sum, rem-complex-euclidean-space-dictionary, lem-complex-conjugation-and-modulus-laws, def-metric-ball, thm-induction-principle, def-infimum, thm-infimum-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $a\in\mathbb C^m$, let $\rho$ be a polyradius, let
$f:\Delta_\rho(a)\to\mathbb C$ be separately holomorphic
([[def-separately-holomorphic-function]]) with $|f|\le M$ throughout
$\Delta_\rho(a)$, and let $0<\theta<1$. Then for all
$z,w\in\overline\Delta_{\theta\rho}(a)$

$$|f(w)-f(z)|\ \le\ \frac{M}{1-\theta}\sum_{k<m}\frac{|w_k-z_k|}{\rho_k} \ \le\ \frac{M}{1-\theta}\Bigl(\sum_{k<m}\frac1{\rho_k}\Bigr)\lVert w-z\rVert .$$

In particular $f$ is Lipschitz, hence continuous, on
$\overline\Delta_{\theta\rho}(a)$. No continuity of $f$ in the remaining
variables is assumed at any point of the argument.

## Facts & Assumptions

**Given:** A separately holomorphic $f$ on $\Delta_\rho(a)$ with $|f|\le M$ there, and $0<\theta<1$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] $f$ is separately holomorphic when for every point of the open set and every $k<m$ the $k$th slice is holomorphic on the open set of $\zeta$ for which the point lies in the domain ([[def-separately-holomorphic-function]]).

[L2] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$, $\le r_k$ and $=r_k$, and polydiscs are convex ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[def-convex-subset-of-euclidean-space]]).

[L3] For $g$ holomorphic on $D(a',R)$, $0<r'<R$ and $|g|\le K$ on the circle $|\zeta-a'|=r'$, one has $|g^{(n)}(a')|\le n!K/r'^n$ ([[cor-cauchy-inequalities]]).

[L4] For an open convex $V\subseteq\mathbb C$, a holomorphic $g$ on $V$ and $z',w'\in V$, $g(w')-g(z')=(w'-z')\int_0^1g'(z'+t(w'-z'))\,dt$ ([[lem-holomorphic-difference-quotient-segment-formula]]).

[L5] For an integrable $F:[a',b']\to\mathbb R^n$ with $a'\le b'$, $\lVert\int_{a'}^{b'}F\rVert_2\le\int_{a'}^{b'}\lVert F\rVert_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]); vector-valued integrals are componentwise and real-linear ([[def-vector-valued-derivative-and-integral]]); and $\int_{a'}^{b'}h\le\int_{a'}^{b'}H$ when $h\le H$ pointwise ([[thm-monotonicity-of-the-integral]]).

[L6] A holomorphic $g=u+iv$ on an open subset of $\mathbb C$ has $(u,v)$ of class $C^k$ for every natural $k$, hence smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and every holomorphic function has complex derivatives of every natural order ([[thm-cauchy-integral-formula-higher-derivatives]]); in particular $g'$ is holomorphic and therefore continuous ([[cor-complex-differentiability-implies-continuity]]).

[L7] Finite sums are additive, scale and telescope ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L8] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]), and $B(x,s)=\{y:d(x,y)<s\}$ ([[def-metric-ball]]).

[L9] If a property holds at $0$ and passes from $k$ to $k+1$, it holds for every natural number ([[thm-induction-principle]]).

[L10] A nonempty set of reals bounded below has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z,w\in\overline\Delta_{\theta\rho}(a)$ and define points $v^{(0)},\dots,v^{(m)}$ by $v^{(0)}=z$ and, for $k<m$, letting $v^{(k+1)}$ agree with $v^{(k)}$ except that its $k$th coordinate is $w_k$; this is a finite recursion and $v^{(m)}=w$. Every coordinate of every $v^{(k)}$ is a coordinate of $z$ or of $w$, so $|v^{(k)}_j-a_j|\le\theta\rho_j$ for every $j<m$ and each $v^{(k)}$ lies in $\overline\Delta_{\theta\rho}(a)\subseteq\Delta_\rho(a)$ by [L2]. [given, L2, L9]

2.1 By [L7] the difference telescopes: $f(w)-f(z)=\sum_{k<m}\bigl(f(v^{(k+1)})-f(v^{(k)})\bigr)$. [step 1.1, L7]

2.2 Fix $k<m$ and let $g_k(\xi)$ be the value of $f$ at the point agreeing with $v^{(k)}$ except in its $k$th coordinate, which is $\xi$. By step 1.1 and [L2] that point lies in $\Delta_\rho(a)$ whenever $|\xi-a_k|<\rho_k$, so [L1] makes $g_k$ holomorphic on the disc $D(a_k,\rho_k)$, and $|g_k|\le M$ there. [step 1.1, L1, L2]

3.1 Let $|\xi-a_k|\le\theta\rho_k$ and let $0<s<(1-\theta)\rho_k$. For $|\zeta-\xi|<(1-\theta)\rho_k$ one has $|\zeta-a_k|<\rho_k$ by [L8], so $g_k$ is holomorphic on $D(\xi,(1-\theta)\rho_k)$ and bounded by $M$ on the circle $|\zeta-\xi|=s$; [L3] with $n=1$ gives $|g_k'(\xi)|\le M/s$. The set of such $s$ is nonempty and the bound holds for each, so taking the infimum over $s\in(0,(1-\theta)\rho_k)$ by [L10] gives $|g_k'(\xi)|\le M/((1-\theta)\rho_k)$. [step 2.2, L3, L8, L10]

4.1 The disc $D(a_k,\rho_k)$ is convex by [L2] and [L8], and $z_k,w_k$ lie in the closed disc of radius $\theta\rho_k$ about $a_k$ by step 1.1, so the whole segment between them satisfies $|\xi-a_k|\le\theta\rho_k$ by [L8]. By [L4], [L6] and [L5], $|g_k(w_k)-g_k(z_k)|\le|w_k-z_k|\int_0^1|g_k'(z_k+t(w_k-z_k))|\,dt\le|w_k-z_k|\cdot\frac{M}{(1-\theta)\rho_k}$, using step 3.1 on the segment. [step 1.1, step 3.1, L2, L4, L5, L6, L8]

5.1 Since $f(v^{(k+1)})-f(v^{(k)})=g_k(w_k)-g_k(z_k)$ by the definition of $g_k$ in step 2.2, summing step 4.1 over $k<m$ and using step 2.1 and [L7] gives $|f(w)-f(z)|\le\frac{M}{1-\theta}\sum_{k<m}|w_k-z_k|/\rho_k$; each $|w_k-z_k|\le\lVert w-z\rVert$ by the dictionary, which yields the second displayed bound and makes $f$ Lipschitz on $\overline\Delta_{\theta\rho}(a)$. Only the slices of $f$ and the uniform bound $M$ were used, never continuity of $f$ in the remaining variables. [step 2.1, step 2.2, step 4.1, L7, L8] ∎
