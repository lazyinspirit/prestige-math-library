---
title: Uniform localized H2 algebra on a smooth exterior domain
status: draft
research_item: lem-se-exterior-h2-uniform-algebra
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:thm-extension-theorem-for-bounded-smooth-domains](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains)
- [math:cor-sobolev-algebra-above-the-critical-index](https://alphabetamath.cc/item/cor-sobolev-algebra-above-the-critical-index)
- [math:thm-higher-order-sobolev-embedding](https://alphabetamath.cc/item/thm-higher-order-sobolev-embedding)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain)
- [math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface)
- [math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts)
- [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)


## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and let $\Omega=\mathbb R^n\setminus\Theta$ be connected, where $\Theta$ is compact and has smooth boundary in the local graph sense. Let $H^2(\Omega)=W^{2,2}(\Omega;\mathbb C)$, with norm given by the square root of the sum of the squared $L^2$ norms of all weak derivatives through order two. Then there is a constant $C$ depending on $n$ and the fixed obstacle such that, for all $u,v\in H^2(\Omega)$, $$\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^2(\Omega)},\qquad \|uv\|_{H^2(\Omega)}\le C\|u\|_{H^2(\Omega)}\|v\|_{H^2(\Omega)}.$$

For $m\in\{3,5\}$ and $\lambda\in\mathbb R$, put $g(z)=\lambda |z|^{m-1}z$. There is $C_m$ depending also on $m$ such that $$\|g(u)\|_{H^2(\Omega)}\le C_m|\lambda|\|u\|_{H^2(\Omega)}^m$$ and $$\|g(u)-g(v)\|_{H^2(\Omega)}\le C_m|\lambda|(\|u\|_{H^2(\Omega)}+\|v\|_{H^2(\Omega)})^{m-1}\|u-v\|_{H^2(\Omega)}.$$

The obstacle trace of an $H^2(\Omega)$ function means the restriction to $\partial\Theta$ of its bounded-domain $H^1$ trace on $G=\Omega\cap B_R$, for any sufficiently large $R$ with $\Theta\subset B_R$. Its values are classes in $L^2(\partial\Theta,dS;\mathbb C)$, where $dS$ is chart-independent surface measure on the compact smooth hypersurface $\partial\Theta$; zero trace means equality to zero $dS$-almost everywhere. If that trace of $u$ is zero, then the obstacle trace of $g(u)$ is zero.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)

[Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)

[math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain)

[math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface)

[math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts)

[math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)

## Facts & Assumptions

**Given:** The Axiom of Choice, the stated smooth compact obstacle and connected exterior, $n\in\{2,3\}$, and $u,v\in H^2(\Omega)$.

**Goal:** Prove the uniform exterior embedding and multiplication estimates, their polynomial consequences, and preservation of zero obstacle trace.

[F1] A bounded smooth domain is an $H^2$ extension domain by [Bounded $C^k$ domains admit integer-order Sobolev extension](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains). On every bounded $H^2$ extension domain, $H^2$ embeds continuously into bounded continuous functions and is an algebra when $n\in\{2,3\}$, since $4>n$; see [math:thm-higher-order-sobolev-embedding](https://alphabetamath.cc/item/thm-higher-order-sobolev-embedding) and [math:cor-sobolev-algebra-above-the-critical-index](https://alphabetamath.cc/item/cor-sobolev-algebra-above-the-critical-index). The same constants work on translates of one fixed ball.

[F2] Smooth cutoffs with prescribed compact inclusion exist by [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization). Multiplication by a smooth function with bounded derivatives through order two is bounded on $H^2$ by [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor). The $H^2$ norm and weak derivatives are those of [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm).

[F3] On a bounded $C^1$ domain the $H^1$ trace is bounded, agrees with the boundary values of a representative continuous on the closure, and is defined chartwise; see [math:thm-lp-trace-operator-on-a-bounded-c-one-domain](https://alphabetamath.cc/item/thm-lp-trace-operator-on-a-bounded-c-one-domain). The local graph convention is [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts).

[F4] For a compact $C^1$ hypersurface, $dS$ is the chartwise surface measure of [math:def-surface-integral-on-a-compact-c-one-hypersurface](https://alphabetamath.cc/item/def-surface-integral-on-a-compact-c-one-hypersurface), independent of charts and subordinate partitions by [math:lem-surface-integral-is-independent-of-c-one-boundary-charts](https://alphabetamath.cc/item/lem-surface-integral-is-independent-of-c-one-boundary-charts). On the obstacle component of $\partial G$, its restriction agrees with the measure constructed from the same obstacle charts. An $L^2$ boundary class is zero exactly when a representative is zero $dS$-almost everywhere, using [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions).

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Proof technique:** Construct a uniformly locally finite bounded-domain cover and sum the local estimates.

1.1 Put $r=2\sqrt n$ and choose $R$ so large that $\Theta\subset B_{R-4r}$. Set $G=\Omega\cap B_R$ and $A=\{a\in\mathbb Z^n:|a|\ge R-3r\}$. Each $B(a,r)$ with $a\in A$ misses $\Theta$. The sets $G$ and $B(a,r)$ cover $\Omega$: outside $B_{R-2r}$ a nearest lattice point is at distance at most $r/4$ and belongs to $A$, while points inside $B_R$ belong to $G$. Their overlap is bounded by a constant depending only on $n$, since the lattice points within distance $r$ of any point lie in a fixed-size cube. The boundary of $G$ consists of the separated smooth obstacle boundary and sphere. It is connected: an exterior path from any point of $G$ to a point outside $B_R$, stopped at its first sphere crossing, joins it within $G$ to the connected outer annulus; open connected Euclidean sets are path connected. Thus $G$ is a bounded smooth domain. [F3, given, construct]

2.1 The cover also admits a smooth partition with uniformly bounded derivatives. Choose $\chi_0$ equal to one on $B_{R-2r}$ and supported in $B_{R-r}$. Take a nonnegative smooth bump $\rho$ supported in $B(0,r)$ and positive on $\overline{B(0,r/2)}$, and set $S(x)=\sum_{a\in A}\rho(x-a)$. The preceding nearest-lattice argument gives a positive uniform lower bound for $S$ where $1-\chi_0$ is nonzero. Define $\chi_a=(1-\chi_0)\rho(x-a)/S(x)$ there and extend it by zero elsewhere. The locally finite sum is $\chi_0+\sum_a\chi_a=1$ on $\Omega$; finite overlap, the lower bound for $S$, and the fixed bump give uniform bounds on derivatives through order two. Hence the associated localized $H^2$ norms are controlled by bounded overlap and the weak cutoff rule. [F2, step 1.1, construct]

3.1 Restrict $u$ and $v$ to $G$ and to each exterior ball. By [F1], the local algebra and embedding constants are bounded by one fixed constant: use the constant for $G$ and the translation-invariant constant for $B(0,r)$. If $D_j$ denotes these domains and $a_j=\|u\|_{H^2(D_j)}$, $b_j=\|v\|_{H^2(D_j)}$, bounded overlap gives $\sum_j a_j^2\le N\|u\|_{H^2(\Omega)}^2$ and $\sup_j b_j\le\|v\|_{H^2(\Omega)}$. Local weak derivatives agree on overlaps, so the local products define the global weak derivatives. Consequently $$\|uv\|_{H^2(\Omega)}^2\le C^2\sum_j a_j^2b_j^2\le C^2N\|u\|_{H^2(\Omega)}^2\|v\|_{H^2(\Omega)}^2.$$ The local supremum estimates and the cover likewise give $\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^2(\Omega)}$. [F1, F2, step 1.1, step 2.1]

4.1 Complex conjugation commutes with real weak differentiation, as follows by conjugating the test-function identities, and preserves the $H^2$ norm. Since $m$ is odd, $g(u)=\lambda u^{(m+1)/2}\overline u^{(m-1)/2}$. Repeated multiplication gives the stated power bound. Replacing the factors one at a time in the difference of the two products gives a sum of $m$ products, each containing either $u-v$ or its conjugate and $m-1$ factors chosen from $u,v$ and their conjugates; the same algebra estimate proves the stated Lipschitz bound. [F2, step 3.1, algebra]

5.1 By [F1], $u|_G$ has a continuous representative on $\overline G$; the same is true of $g(u)|_G$, whose representative is the polynomial applied to that of $u$. By [F3] and [F4], their obstacle traces are the corresponding boundary values as $L^2(\partial\Theta,dS;\mathbb C)$ classes. If the trace of $u$ vanishes $dS$-almost everywhere, then $g(0)=0$ shows that the trace of $g(u)$ does also. The chartwise trace is local, so enlarging $R$ does not change its restriction to $\partial\Theta$. This proves all assertions. [F1, F3, F4, step 4.1] ∎
