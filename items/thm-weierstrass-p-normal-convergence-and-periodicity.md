---
id: thm-weierstrass-p-normal-convergence-and-periodicity
kind: theorem
title: "Normal convergence, parity and periodicity of the Weierstrass p function"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-weierstrass-elliptic-p-function
  - def-elliptic-function-for-a-lattice
  - def-complex-lattice-and-complex-torus
  - def-complex-metric-convergence-and-continuity
  - def-isolated-singularity-types
  - thm-weierstrass-convergence-holomorphic-functions
  - cor-locally-uniformly-convergent-holomorphic-series
  - thm-pole-characterizations
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - lem-complex-conjugation-and-modulus-laws
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - thm-extreme-value-metric
  - thm-product-of-countable
  - lem-countable-iff-surjection-from-n
  - thm-rationals-countable
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
  - thm-complex-numbers-are-the-real-coordinate-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass wp-function': convergence, evenness and double periodicity, printed pp. 43-44."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, Theorem 5.1: wp is doubly periodic, with the convergence estimates, printed pp. 80-81."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii), equations 23.2.4, 23.2.7-23.2.10: the wp series, its parity, its poles and its periods."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
complex lattice with oriented basis $(\omega_1,\omega_2)$, and let

$$\wp_\Lambda(z)=\frac{1}{z^{2}}+\sum_{\omega\in\Lambda\setminus\{0\}}\left(\frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}}\right)$$

be the Weierstrass $\wp$-function of
[[def-weierstrass-elliptic-p-function]]. Then:

1. the sum converges absolutely at every $z\in\mathbb C\setminus\Lambda$ and
   uniformly on every compact subset of $\mathbb C\setminus\Lambda$, so it is
   normally convergent there and independent of any enumeration of $\Lambda$;
2. $\wp_\Lambda$ is holomorphic on $\mathbb C\setminus\Lambda$, is even
   ($\wp_\Lambda(-z)=\wp_\Lambda(z)$) and is $\Lambda$-periodic
   ($\wp_\Lambda(z+\lambda)=\wp_\Lambda(z)$ for every $\lambda\in\Lambda$ and
   every $z\in\mathbb C$, with poles matched), so it is a $\Lambda$-elliptic
   function;
3. at each lattice point $\lambda\in\Lambda$ the function $\wp_\Lambda$ has a
   double pole with principal part $(z-\lambda)^{-2}$, and it has no other
   poles;
4. $\wp_\Lambda'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on
   $\mathbb C\setminus\Lambda$, this series being normally convergent there,
   and the derivative $\wp_\Lambda'$ is odd and $\Lambda$-elliptic as well.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis $(\omega_1,\omega_2)$, the summands $h_\omega(z):=(z-\omega)^{-2}-\omega^{-2}$ for $\omega\in\Lambda\setminus\{0\}$, and the function $\wp=\wp_\Lambda$ defined by the displayed unordered sum, with $h_0$ not defined and the term $z^{-2}$ standing separately.

[F1] $\wp_\Lambda(z)=z^{-2}+\sum_{\omega\in\Lambda\setminus\{0\}}h_\omega(z)$ is defined through the finite-subset net over $\Lambda\setminus\{0\}$, with no ordering used; each $h_\omega$ is holomorphic on $|z|<|\omega|$ with $h_\omega(0)=0$; for $|z|\le R$ and $|\omega|\ge2R$ the numerator $|2z\omega-z^2|$ is at most $2R|\omega|+R^2$ and the denominator $|z-\omega|^2|\omega|^2$ is at least $\tfrac14|\omega|^4$, so $h_\omega$ is $O_R(|\omega|^{-3})$; reindexing $\omega\mapsto-\omega$ shows $\wp_\Lambda(-z)=\wp_\Lambda(z)$ once convergence is known, and at a lattice point $\lambda$ the principal part is $(z-\lambda)^{-2}$ ([[def-weierstrass-elliptic-p-function]]).

[F2] $\Lambda$ is a subgroup of $\mathbb C$ of the form $\mathbb Z\omega_1+\mathbb Z\omega_2$ with $\omega_1,\omega_2$ real-linearly independent, and an oriented basis satisfies $\operatorname{Im}(\omega_2/\omega_1)>0$; $\mathbb C$ is a real vector space with basis $\{1,i\}$ and an independent set is no larger than a finite spanning set, so $\omega_1,\omega_2$ is a real basis of $\mathbb C$ and every $z\in\mathbb C$ is $z=s\omega_1+t\omega_2$ with unique $s,t\in\mathbb R$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-numbers-are-the-real-coordinate-plane]], [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[F3] For all $z,w\in\mathbb C$ one has $|z|\ge0$, $|z|=0$ exactly for $z=0$, $|zw|=|z|\,|w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); continuity and convergence on $\mathbb C$ are the metric notions for $d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

[F4] In $\mathbb R^n$ every closed box is compact and a subset is compact exactly when it is closed and bounded, and continuous images of compact sets are compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]); a continuous real-valued function on a nonempty compact metric space is bounded and attains a maximum ([[thm-extreme-value-metric]]).

[F5] Let $\Omega\subseteq\mathbb C$ be open and let $g_j:\Omega\to\mathbb C$ be holomorphic with partial sums converging locally uniformly to $g$. Then $g$ is holomorphic, and $g^{(k)}=\sum_j g_j^{(k)}$ for every natural $k$, the derivative series converging locally uniformly ([[cor-locally-uniformly-convergent-holomorphic-series]], [[thm-weierstrass-convergence-holomorphic-functions]]).

[F6] $\mathbb Z\times\mathbb Z$ is at most countable and a nonempty at most countable set admits a surjection from $\mathbb N$ ([[thm-product-of-countable]], [[lem-countable-iff-surjection-from-n]]); the integers are a surjective image of $\mathbb N\times\mathbb N$ ([[thm-rationals-countable]]).

[F7] A holomorphic function on a complex domain with identically zero derivative is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]), and the chain rule gives $(g\circ f)'(a)=g'(f(a))f'(a)$ while derivatives are linear, satisfy the product and reciprocal rules, and the identity has derivative $1$ ([[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F8] If $f$ is holomorphic on a punctured disc around $\lambda$ and $(z-\lambda)^mf(z)$ extends holomorphically to $\lambda$ with a nonzero value, and $m$ is the least such exponent, then $f$ has a pole of order $m$ at $\lambda$; a pole of order $2$ is a double pole ([[def-isolated-singularity-types]], [[thm-pole-characterizations]]).

[F9] A $\Lambda$-elliptic function is a meromorphic $f:\mathbb C\to\widehat{\mathbb C}$ with $f(z+\lambda)=f(z)$ for all $z$ and all $\lambda\in\Lambda$, poles corresponding under translation ([[def-elliptic-function-for-a-lattice]]).

## Proof

**Proof technique:** direct.

1.1 Put $A:=|\omega_1|^2$, $B:=\operatorname{Re}(\omega_1\overline{\omega_2})$, $C:=|\omega_2|^2>0$; expanding with [F3] gives $|s\omega_1+t\omega_2|^2=As^2+2Bst+Ct^2$ for real $s,t$, and $AC-B^2=(\operatorname{Im}(\omega_1\overline{\omega_2}))^2>0$ because real-linear independence forbids $\operatorname{Im}(\omega_1\overline{\omega_2})=0$. Completing the square in each variable gives $|s\omega_1+t\omega_2|^2\ge (AC-B^2)\max(s^2,t^2)/\max(A,C)$, so with $\delta:=\sqrt{(AC-B^2)/\max(A,C)}>0$ one has $|s\omega_1+t\omega_2|\ge\delta\max(|s|,|t|)$; in particular distinct lattice points are at distance at least $\delta$. [F3, F2]

2.1 For $R>0$, every $\lambda=m\omega_1+n\omega_2\in\Lambda$ with $|\lambda|\le R$ has $|m|,|n|\le R/\delta$ by step 1.1, so $\#(\Lambda\cap\bar B(0,R))\le(2R/\delta+1)^2$; hence $\Lambda\cap\bar B(0,R)$ is finite and $\Lambda$ has no accumulation point. The nonzero lattice points with $|\omega|<1$ are therefore finite. For each $k\ge0$, the shell $2^k\le|\omega|<2^{k+1}$ has at most $(2^{k+2}/\delta+1)^2$ points, so its contribution to $\sum |\omega|^{-3}$ is at most $(2^{k+2}/\delta+1)^2 2^{-3k}$; these bounds form a convergent series, with terms $O(2^{-k})$. Thus $\sum_{\omega\ne0}|\omega|^{-3}<\infty$, and its finite-subset sums have arbitrarily small tails. [F3, step 1.1]

3.1 For an empty compact $K$, the uniform convergence assertion is vacuous. Otherwise let $K\subseteq\mathbb C\setminus\Lambda$ be nonempty and compact and choose $R\ge\max(1,\sup_{z\in K}|z|)$. For $|\omega|\ge2R$ and $z\in K$, the displayed formula for $h_\omega$ gives [F1, F3, F4, step 2.1]
$$|h_\omega(z)|=\frac{|2z\omega-z^2|}{|z-\omega|^2|\omega|^2}\le\frac{\frac52R|\omega|}{\frac14|\omega|^4}=\frac{10R}{|\omega|^3}.$$
Choose a finite $F_0$ containing all $\omega$ with $|\omega|<2R$ and with the remaining finite-subset tails of $\sum|\omega|^{-3}$ smaller than $\varepsilon/(10R)$. Then for finite $F''\supseteq F'\supseteq F_0$,
$$\sup_{z\in K}\left|\sum_{\omega\in F''\setminus F'}h_\omega(z)\right|\le10R\sum_{\omega\in F''\setminus F'}|\omega|^{-3}<\varepsilon.$$
Thus the finite-subset net is uniformly Cauchy on $K$ and pointwise absolutely convergent; its limit is independent of enumeration. Since this holds on every compact subset of $\mathbb C\setminus\Lambda$, the sum is normally convergent there, and $\wp$ is well defined by [F1]. [F1, F3, F4, step 2.1]

3.2 $\mathbb C\setminus\Lambda$ is path-connected. Let $x,y\in\mathbb C\setminus\Lambda$. By step 2.1, the segment $[x,y]$ meets $\Lambda$ in finitely many points $p_1,\dots,p_N$, in their order along the segment. If $N=0$, the segment is already a path in the complement. Otherwise choose $r>0$ smaller than $\delta/3$ and than every distance from a $p_j$ to either endpoint. The discs $B(p_j,r)$ are disjoint, contain no other lattice points, and neither endpoint lies in them. Replace the subsegment through each $p_j$ by one of the two arcs on $\partial B(p_j,r)$ joining its endpoints. Each arc avoids the lattice, and the remaining straight pieces contain no lattice point; the resulting finite path joins $x$ to $y$ in $\mathbb C\setminus\Lambda$. [F3, step 2.1, step 1.1]

4.1 The lattice $\Lambda$ is at most countable: the map $(m,n)\mapsto m\omega_1+n\omega_2$ from $\mathbb Z\times\mathbb Z$ onto $\Lambda$ is surjective by [F2] and $\mathbb Z\times\mathbb Z$ is at most countable by [F6], so [F6] gives a surjection $s:\mathbb N\to\Lambda\setminus\{0\}$. For each lattice point retain only its least preimage, $j(\omega)=\min\{k:s(k)=\omega\}$, as in [F6]. The image of $j$ is an infinite subset of $\mathbb N$ (the distinct points $n\omega_1$, $n\ge1$, already form an infinite subset of the target); list that image in increasing order, recursively taking its least unused element. This list exhausts the image because every natural number has only finitely many predecessors. Applying $s$ gives a repetition-free enumeration $(\omega_j)_{j\ge0}$ of $\Lambda\setminus\{0\}$. Every finite subset is contained in a sufficiently long initial segment of this enumeration; the partial sums $S_N(z):=z^{-2}+\sum_{j<N}h_{\omega_j}(z)$ are holomorphic on $\mathbb C\setminus\Lambda$, and step 3.1 makes them converge locally uniformly to $\wp$. By [F5] the limit $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$ and $\wp'(z)=-2z^{-3}+\sum_{j\ge0}(-2)(z-\omega_j)^{-3}=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$, the last series converging locally uniformly on $\mathbb C\setminus\Lambda$ because $|z-\omega|\ge\tfrac12|\omega|$ for $|\omega|\ge2\max_K|z|$ gives $|z-\omega|^{-3}\le8|\omega|^{-3}$ and step 2.1 applies. [F2, F6, F5, F4, step 3.1, step 2.1]

4.2 Evenness. For every finite $F\subseteq\Lambda\setminus\{0\}$ one has $\sum_{\omega\in F}h_\omega(-z)=\sum_{\omega\in F}\bigl((z+\omega)^{-2}-\omega^{-2}\bigr)=\sum_{\omega'\in-F}\bigl((z-\omega')^{-2}-\omega'^{-2}\bigr)=\sum_{\omega'\in-F}h_{\omega'}(z)$, and $F\mapsto-F$ is a bijection of the directed set of finite subsets; since the net converges by step 3.1, the two limits agree and $\wp(-z)=\wp(z)$ for every $z\in\mathbb C\setminus\Lambda$, the case $z\in\Lambda$ being the statement that poles correspond. [F1, step 3.1]

4.3 At each lattice point $\lambda$ the principal part is $(z-\lambda)^{-2}$ and there is no other pole. For $\lambda=0$, choose $R<\delta/2$. Every $h_\omega$ is holomorphic on $|z|\le R$, and the bound from step 3.1 together with $\sum|\omega|^{-3}<\infty$ gives uniform convergence on this disc. Since each $h_\omega(0)=0$, the sum is holomorphic near $0$ and vanishes at $0$, so $\wp(z)-z^{-2}$ extends holomorphically there. For $\lambda\ne0$, split off $h_\lambda$ to obtain [F8, F1, step 3.1, step 1.1]
$$\wp(z)-(z-\lambda)^{-2}=z^{-2}-\lambda^{-2}+\sum_{\omega\in\Lambda\setminus\{0,\lambda\}}h_\omega(z).$$
On $B(\lambda,\delta/2)$, $z^{-2}$ is holomorphic and every remaining summand is holomorphic, since distinct lattice points are at least $\delta$ apart. The same tail bound from step 3.1, applied on compact subdiscs of this ball after omitting the finitely many nearby terms, gives local uniform convergence of the remaining series there. Thus the right side extends holomorphically to $\lambda$. In both cases $(z-\lambda)^2\wp(z)$ extends holomorphically with value $1$, so [F8] gives a double pole with principal part $(z-\lambda)^{-2}$. [F1, F8, step 1.1, step 3.1]

5.1 The derivative $\wp'$ is $\Lambda$-periodic. For $\lambda\in\Lambda$ and $z\in\mathbb C\setminus\Lambda$ one has $z+\lambda\notin\Lambda$, and for every finite $F\subseteq\Lambda$ the substitution $\omega\mapsto\omega+\lambda$ turns $\sum_{\omega\in F}(z+\lambda-\omega)^{-3}$ into $\sum_{\omega'\in F-\lambda}(z-\omega')^{-3}$; since $\omega\mapsto\omega+\lambda$ is a bijection of $\Lambda$ and of the directed set of finite subsets, the normally convergent series of step 4.1 gives $\wp'(z+\lambda)=-2\sum_{\omega'}(z-\omega')^{-3}=\wp'(z)$. [step 4.1]

6.1 The basis vectors are periods of $\wp$. For $j\in\{1,2\}$ the function $g_j(z):=\wp(z+\omega_j)-\wp(z)$ is holomorphic on $\mathbb C\setminus\Lambda$, because $z+\omega_j\in\Lambda$ exactly when $z\in\Lambda$ by [F2]; its derivative is $g_j'(z)=\wp'(z+\omega_j)-\wp'(z)=0$ by step 5.1 and the chain rule [F7], and $\mathbb C\setminus\Lambda$ is a domain by step 3.2, so [F7] makes $g_j$ constant. The point $-\omega_j/2$ lies in $\mathbb C\setminus\Lambda$: otherwise $\omega_j/2=m\omega_1+n\omega_2$ with $m,n\in\mathbb Z$, which for $j=1$ reads $\omega_1=2m\omega_1+2n\omega_2$ and contradicts the uniqueness of the real coordinates in [F2], and similarly for $j=2$. Evaluating there with the evenness of step 4.2 gives $g_j(-\omega_j/2)=\wp(\omega_j/2)-\wp(-\omega_j/2)=0$, so $g_j\equiv0$. [F2, F7, step 5.1, step 3.2, step 4.2]

6.2 Oddness and ellipticity of $\wp'$. The series of step 4.1 is normally convergent, so the substitution $\omega\mapsto-\omega$ may be made in its finite-subset net: $\wp'(-z)=-2\sum_\omega(-z-\omega)^{-3}=-2\sum_\omega\bigl(-(z+\omega)\bigr)^{-3}=2\sum_\omega(z+\omega)^{-3}=2\sum_{\omega'}(z-\omega')^{-3}=-\wp'(z)$ for every $z\in\mathbb C\setminus\Lambda$. By step 4.3 the poles of $\wp'$ are exactly the lattice points, each of order $3$, so $\wp'$ is meromorphic on $\mathbb C$, and it is $\Lambda$-periodic by step 5.1; hence $\wp'$ is again $\Lambda$-elliptic by [F9]. [F9, step 4.1, step 4.3, step 5.1]

7.1 Hence $\wp$ is $\Lambda$-periodic: the set $\{\lambda\in\Lambda:\wp(z+\lambda)=\wp(z)\ \text{for all }z\}$ is a subgroup of $\Lambda$ containing $\omega_1,\omega_2$ by step 6.1, so it is all of $\Lambda$; equivalently $\wp(z+m\omega_1+n\omega_2)=\wp(z)$ for all integers $m,n$ and all $z\in\mathbb C\setminus\Lambda$. Since also $z+\lambda\in\Lambda$ exactly when $z\in\Lambda$, the function $\wp$ is meromorphic on $\mathbb C$ with poles matching under translation, so by step 4.1, step 4.3 and [F9] it is a $\Lambda$-elliptic function. [F9, step 6.1, step 4.1, step 4.3]

8.1 Collecting: step 3.1 gives the absolute and locally uniform (normal) convergence, independent of enumeration; step 4.1 gives holomorphy and the derivative formula; step 4.3 gives the double poles with principal part $(z-\lambda)^{-2}$ and no others; step 4.2 gives evenness and steps 6.1 and 7.1 give $\Lambda$-periodicity and the elliptic property of $\wp$; step 6.2 gives the oddness and ellipticity of $\wp'$. [step 3.1, step 4.1, step 4.3, step 4.2, step 6.1, step 7.1, step 6.2] ∎

## Remarks


The only quantitative input is the uniform gap $\delta$ of step 1.1: it counts
the lattice points in each shell and thereby replaces an appeal to the
two-dimensional nature of the lattice. The periodicity proof follows the
classical route through the derivative: $\wp'$ is periodic by reindexing the
absolutely convergent series, whence $z\mapsto\wp(z+\lambda)-\wp(z)$ has zero
derivative and is constant on the domain $\mathbb C\setminus\Lambda$, and the
constant is evaluated at the symmetric point $-\lambda/2$. The path-connectedness
of $\mathbb C\setminus\Lambda$ is proved rather than quoted, since the general
statement that the complement of a discrete set is connected is not available
here. Together with [[thm-elliptic-function-divisor-laws]] this completes the
properties promised in [[def-weierstrass-elliptic-p-function]].
