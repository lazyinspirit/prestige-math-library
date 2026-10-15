---
id: lem-holomorphic-difference-quotient-is-jointly-continuous
kind: lemma
title: "The filled difference quotient of a holomorphic function is jointly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-holomorphic-difference-quotient-segment-formula, lem-cauchy-difference-quotient-exceptional-extension, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-cauchy-integral-formula-higher-derivatives, thm-norm-inequality-for-the-vector-valued-integral, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, lem-algebra-of-continuous-real-maps-on-a-space, thm-monotonicity-of-the-integral, rem-complex-plane-euclidean-dictionary, def-metric-ball, def-metric-topology, def-convex-subset-of-euclidean-space, cor-complex-differentiability-implies-continuity, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open and let $f:\Omega\to\mathbb C$ be
holomorphic. Define the **filled difference quotient**
$g:\Omega\times\Omega\to\mathbb C$ by

$$g(\zeta,z)=\begin{cases}\dfrac{f(\zeta)-f(z)}{\zeta-z},&\zeta\ne z,\\[6pt] f'(z),&\zeta=z.\end{cases}$$

Then $g$ is continuous on $\Omega\times\Omega$, the product carrying the
Euclidean metric of $\mathbb R^4$ under the coordinate identification of the
plane. Moreover $g(\zeta,z)=g(z,\zeta)$ for all $\zeta,z\in\Omega$.

## Facts & Assumptions

**Given:** An open $\Omega\subseteq\mathbb C$ and a holomorphic $f:\Omega\to\mathbb C$; products of subsets of $\mathbb C$ are read in $\mathbb R^4$ through [[rem-complex-plane-euclidean-dictionary]].

[L1] For an open convex $V\subseteq\mathbb C$, a holomorphic $f$ on $V$ and $z,w\in V$, $f(w)-f(z)=(w-z)\int_0^1f'(z+t(w-z))\,dt$, and the displayed integral equals $f'(z)$ when $w=z$ ([[lem-holomorphic-difference-quotient-segment-formula]]).

[L2] With $U$ open, $f$ holomorphic on $U$ and $z\in U$ fixed, the function equal to $(f(\zeta)-f(z))/(\zeta-z)$ for $\zeta\ne z$ and to $f'(z)$ at $\zeta=z$ is continuous on $U$ and holomorphic on $U\setminus\{z\}$ ([[lem-cauchy-difference-quotient-exceptional-extension]]).

[L3] A holomorphic function is smooth in the real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]) and has complex derivatives of every natural order ([[thm-cauchy-integral-formula-higher-derivatives]]), and a complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L4] For an integrable $f:[a,b]\to\mathbb R^m$ with $a\le b$, $\lVert\int_a^bf\rVert_2\le\int_a^b\lVert f\rVert_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]); integrals of vector-valued functions are componentwise and real-linear ([[def-vector-valued-derivative-and-integral]]).

[L5] If $a<b$, $h\le H$ pointwise on $[a,b]$, and both are integrable, then $\int_a^bh\le\int_a^bH$ ([[thm-monotonicity-of-the-integral]]).

[L6] A map into $\mathbb R^m$ from a subset of a metric space is continuous at $a$ exactly when the usual $\varepsilon$–$\delta$ condition holds with the Euclidean norm ([[def-vector-valued-functions-limits-and-continuity]]).

[L7] Sums, products and quotients with nonvanishing denominator of continuous real-valued maps on a topological space are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L8] $B(x,\rho)=\{y:d(x,y)<\rho\}$ ([[def-metric-ball]]), a set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]]), and a set is convex when it contains the segment between any two of its points ([[def-convex-subset-of-euclidean-space]]).

[L9] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); for $z=a+bi$ with $a,b$ real, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 Interchanging $\zeta$ and $z$ leaves the off-diagonal formula unchanged, both numerator and denominator changing sign, and leaves the diagonal value $f'(z)$ unchanged; so $g$ is symmetric. [given, algebra]

1.2 A complex-valued map on a topological space is continuous exactly when its real and imaginary parts are, by [L6] and [L9]; the real and imaginary parts of a sum, a product and a quotient with nonvanishing denominator of complex-valued maps are the corresponding real polynomial expressions in the parts, with denominator $|\cdot|^2$, so [L7] makes such combinations of continuous complex-valued maps continuous. [L6, L7, L9]

1.3 Fix $a\in\Omega$ and let $\varepsilon>0$. By [L8] choose $\rho>0$ with $B(a,\rho)\subseteq\Omega$; by [L3] the derivative $f'$ is holomorphic, hence continuous, on $\Omega$, so by [L6] there is $\rho'$ with $0<\rho'\le\rho$ and $|f'(\xi)-f'(a)|\le\varepsilon$ for every $\xi\in B(a,\rho')$. [given, L3, L6, L8, choose]

2.1 On the set $W=\{(\zeta,z)\in\Omega\times\Omega:\zeta\ne z\}$, which is open by [L8], the maps $(\zeta,z)\mapsto f(\zeta)-f(z)$ and $(\zeta,z)\mapsto\zeta-z$ are continuous by [L3] and step 1.2, and [L2] already gives continuity of the filled difference quotient in each variable when the other is fixed; since the second map is nowhere zero on $W$, step 1.2 makes $g$ continuous on $W$. [given, step 1.2, L2, L3, L8]

2.2 Let $\zeta,z\in B(a,\rho')$. The ball $B(a,\rho')$ is convex by [L8] and [L9] and $f$ is holomorphic on it, so [L1] gives $g(\zeta,z)=\int_0^1f'(z+t(\zeta-z))\,dt$ both off and on the diagonal, and every point $z+t(\zeta-z)$ lies in $B(a,\rho')$ by convexity. [step 1.3, L1, L8, L9]

3.1 Subtracting the constant $g(a,a)=f'(a)$ inside the integral of step 2.2 and applying [L4] and [L5] with the bound of step 1.3 gives $|g(\zeta,z)-g(a,a)|\le\int_0^1|f'(z+t(\zeta-z))-f'(a)|\,dt\le\varepsilon$ for all $\zeta,z\in B(a,\rho')$; by [L6] and [L9] this is continuity of $g$ at $(a,a)$, and with step 2.1 it makes $g$ continuous on all of $\Omega\times\Omega$. [step 2.1, step 1.3, step 2.2, L4, L5, L6, L9] ∎
