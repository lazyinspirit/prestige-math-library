---
id: thm-weierstrass-p-differential-equation
kind: theorem
title: "Weierstrass cubic differential equation"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - def-elliptic-function-for-a-lattice
  - thm-elliptic-function-divisor-laws
  - thm-removable-singularity-characterizations
  - thm-taylor-expansion-holomorphic-function
  - cor-locally-uniformly-convergent-holomorphic-series
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-product-of-countable
  - lem-countable-iff-surjection-from-n
  - thm-rationals-countable
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass wp-function': the Laurent expansion of wp at the origin and the differential equation wp'^2 = 4wp^3 - g2 wp - g3, printed pp. 43-45."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the Laurent expansion and the derivation of the differential equation (the cubic relation), printed pp. 81-83."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii), equations 23.2.4-23.2.8: the wp series, the invariants g2 = 60G4, g3 = 140G6, and the differential equation."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis $(\omega_1,\omega_2)$
([[def-complex-lattice-and-complex-torus]]), let $\wp=\wp_\Lambda$ be its
Weierstrass function ([[def-weierstrass-elliptic-p-function]]) and let

$$G_4:=G_4(\Lambda)=\sum_{\omega\in\Lambda\setminus\{0\}}\omega^{-4},\qquad G_6:=G_6(\Lambda)=\sum_{\omega\in\Lambda\setminus\{0\}}\omega^{-6},$$

where the sums are the unordered finite-subset sums over the lattice. Then:

1. both families $(\omega^{-4})_{\omega\ne0}$ and $(\omega^{-6})_{\omega\ne0}$
   are absolutely summable, so $G_4$ and $G_6$ are well defined complex numbers;
2. with the invariants
   $$g_2:=60\,G_4,\qquad g_3:=140\,G_6,$$
   the $\Lambda$-elliptic meromorphic functions $(\wp')^2$ and
   $4\wp^3-g_2\wp-g_3$ agree on $\mathbb C\setminus\Lambda$:
   $$(\wp')^2=4\wp^3-g_2\wp-g_3 .$$

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis $(\omega_1,\omega_2)$, its Weierstrass function $\wp=\wp_\Lambda$ and derivative $\wp'$, and the sums $G_k=\sum_{\omega\ne0}\omega^{-k}$ over the finite-subset net.

[F1] $\omega_1,\omega_2$ are real-linearly independent: the only $(a,b)\in\mathbb R^2$ with $a\omega_1+b\omega_2=0$ is $(a,b)=(0,0)$, so in particular $\omega_1\ne0\ne\omega_2$ and $\omega_2\notin\mathbb R\omega_1$ ([[def-complex-lattice-and-complex-torus]]).

[F2] For every $z\in\mathbb C$ one has $z\overline z=|z|^2$, $|z|\ge0$, $|z|=0$ iff $z=0$, $|zw|=|z|\,|w|$, and $|z+w|\le|z|+|w|$; also $\operatorname{Re}z$ and $\operatorname{Im}z$ satisfy $z=\operatorname{Re}z+i\operatorname{Im}z$ and $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] $\wp_\Lambda(z)=z^{-2}+\sum_{\omega\in\Lambda\setminus\{0\}}f_\omega(z)$ with $f_\omega(z)=(z-\omega)^{-2}-\omega^{-2}$, defined through the finite-subset net, and the definition is designed so that the sum is independent of any enumeration ([[def-weierstrass-elliptic-p-function]]). Moreover (the Remarks of the same item): $f_\omega=\dfrac{2z\omega-z^2}{(z-\omega)^2\omega^2}$ is holomorphic in $z$ on the disc $|z|<|\omega|$ with $f_\omega(0)=0$, and for $|z|\le R$, $|\omega|\ge2R$ its modulus is $O_R(|\omega|^{-3})$.

[F4] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, even, and $\Lambda$-periodic; at each lattice point it has a double pole with principal part $(z-\lambda)^{-2}$ and there are no other poles; $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ with this series normally convergent on $\mathbb C\setminus\Lambda$, and $\wp'$ is odd and $\Lambda$-elliptic ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F5] A $\Lambda$-elliptic function is a meromorphic function on $\mathbb C$ with $f(z+\lambda)=f(z)$ for all $z$ and all $\lambda\in\Lambda$; constants are elliptic, and sums, products, constant multiples and quotients with nonvanishing denominator of $\Lambda$-elliptic functions are again $\Lambda$-elliptic ([[def-elliptic-function-for-a-lattice]]).

[F6] A $\Lambda$-elliptic function with no poles is constant ([[thm-elliptic-function-divisor-laws]]).

[F7] If $f$ is holomorphic on a punctured disc $0<|z-a|<R$ and bounded on some punctured neighbourhood of $a$, then $a$ is a removable singularity, and the holomorphic extension satisfies $F(a)=\lim_{z\to a}f(z)$ ([[thm-removable-singularity-characterizations]]).

[F8] A holomorphic $f$ on an open set $\Omega$ equals its Taylor series at $a$ throughout the largest centred disc contained in $\Omega$: $f(z)=\sum_{n\ge0}\frac{f^{(n)}(a)}{n!}(z-a)^n$ for $|z-a|<\rho_a$ ([[thm-taylor-expansion-holomorphic-function]]).

[F9] If $g_j$ are holomorphic on an open $\Omega$ and the partial sums of $\sum_j g_j$ converge locally uniformly to $g$, then $g$ is holomorphic and $g^{(k)}=\sum_j g_j^{(k)}$ for every $k$, the derivative series converging locally uniformly ([[cor-locally-uniformly-convergent-holomorphic-series]]).

[F10] Complex derivatives are linear and satisfy the product rule and the chain rule: $(fg)'=f'g+fg'$ and $(g\circ f)'(a)=g'(f(a))f'(a)$; the derivative of $z\mapsto(z-\omega)^{-2}$ is $-2(z-\omega)^{-3}$, and constant functions have derivative zero ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

[F11] $\mathbb Z\times\mathbb Z$ is at most countable, every nonempty at most countable set admits a surjection from $\mathbb N$, and the integers are a surjective image of $\mathbb N\times\mathbb N$ ([[thm-product-of-countable]], [[lem-countable-iff-surjection-from-n]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** direct.

1.1 (Gap estimate for the lattice.) Put $A:=|\omega_1|^2$, $B:=\operatorname{Re}(\omega_1\overline{\omega_2})$, $C:=|\omega_2|^2$. Expanding with [F2] gives, for real $s,t$, $|s\omega_1+t\omega_2|^2=As^2+2Bst+Ct^2$; completing the square in the two variables gives $As^2+2Bst+Ct^2=A\bigl(s+\frac BA t\bigr)^2+\frac{AC-B^2}{A}t^2\ge\frac{AC-B^2}{A}t^2$ and symmetrically $As^2+2Bst+Ct^2=C\bigl(t+\frac BCs\bigr)^2+\frac{AC-B^2}{C}s^2\ge\frac{AC-B^2}{C}s^2$, hence $|s\omega_1+t\omega_2|^2\ge\frac{AC-B^2}{\max(A,C)}\max(s^2,t^2)$. Here $A,C>0$ by [F1], and $AC-B^2=(\operatorname{Im}(\omega_1\overline{\omega_2}))^2>0$: indeed $AC=|w|^2$ and $w\overline w=|w|^2$ for $w:=\omega_1\overline{\omega_2}$ by [F2], so $AC-B^2=(\operatorname{Im}w)^2$, and $\operatorname{Im}w=0$ would make $\omega_2/\omega_1=\overline w\,/\,|\omega_1|^2$ real, making $\omega_2$ a real multiple of $\omega_1$, contrary to [F1]. Therefore $\delta:=\sqrt{(AC-B^2)/\max(A,C)}$ is positive and $|m\omega_1+n\omega_2|\ge\delta\max(|m|,|n|)$ for all integers $m,n$, so every nonzero lattice point has modulus at least $\delta$ and $\Lambda\cap\{|z|\le R\}$ is finite for every $R$. [F2, F1]

2.1 (Local uniform convergence and derivatives of the corrected series.) The nonzero lattice points with $|\omega|<1$ are finite by step 1.1. For $k\ge0$, the shell $2^k\le|\omega|<2^{k+1}$ contains at most $(2^{k+2}/\delta+1)^2$ points, so its contribution to $\sum|\omega|^{-3}$ is at most $(2^{k+2}/\delta+1)^22^{-3k}=O(2^{-k})$. Thus $\sum_{\omega\ne0}|\omega|^{-3}<\infty$. Put $r:=\delta/2$. For $|z|\le r$ and $\omega\ne0$, one has $|z-\omega|\ge|\omega|/2$ and $|2z\omega-z^2|\le\tfrac52r|\omega|$, so by [F2] and [F2, F3, F9, F11, F10, step 1.1]
$$|f_\omega(z)|=\frac{|2z\omega-z^2|}{|z-\omega|^2|\omega|^2}\le\frac{10r}{|\omega|^3}.$$
Hence the finite-subset net of corrected summands converges uniformly on $|z|\le r$; call its sum $S$. By [F9], $S$ is holomorphic on $|z|<r$, and for $0<|z|<r$ the defining formula gives $S(z)=\wp(z)-z^{-2}$. The lattice is countable by [F11], so choose an enumeration $(\omega_j)$; its partial sums converge locally uniformly to $S$. Applying [F9] gives $S^{(k)}(0)=\sum_jf_{\omega_j}^{(k)}(0)$. For $k\ge1$, [F10] gives $f_\omega^{(k)}(0)=(k+1)!\omega^{-k-2}$, while $f_\omega(0)=0$ by [F3]. Therefore $S^{(k)}(0)/k!=(k+1)G_{k+2}$ for $k\ge1$ and $S(0)=0$. [F2, F3, F9, F10, F11, step 1.1]

3.1 (Absolute convergence of $G_4$ and $G_6$.) By step 2.1, $\sum|\omega|^{-3}$ converges. For $|\omega|\ge1$ and $k\ge3$, $|\omega|^{-k}\le|\omega|^{-3}$, while the lattice points with $0<|\omega|<1$ are finite by step 1.1. Thus the families $(\omega^{-k})$ are absolutely summable for $k=3,4,5,6$. In particular $G_4$ and $G_6$ are well-defined complex numbers, with convergent finite-subset sums. [step 2.1, step 1.1]

4.1 (Odd sums vanish.) The map $\omega\mapsto-\omega$ is a bijection of $\Lambda\setminus\{0\}$ and the families $(\omega^{-3})$ and $(\omega^{-5})$ are absolutely summable by step 3.1, so reindexing gives $G_3=\sum_\omega(-\omega)^{-3}=-\sum_\omega\omega^{-3}=-G_3$ and $G_5=-G_5$; hence $G_3=G_5=0$. [step 3.1]

5.1 (Taylor expansion of $\wp$ at the origin.) By [F8] applied to the holomorphic function $S$ on $|z|<r$, $S(z)=\sum_{k\ge0}\frac{S^{(k)}(0)}{k!}z^k$ for $|z|<r$, so by step 2.1 [F8, step 2.1, step 4.1]
$$S(z)=\sum_{k\ge1}(k+1)G_{k+2}z^k=2G_3z+3G_4z^2+4G_5z^3+5G_6z^4+\sum_{k\ge6}(k+1)G_{k+2}z^k,$$
and since $G_3=G_5=0$ by step 4.1 the last sum is $z^6U(z)$ for a holomorphic $U$ near $0$. Thus, on $0<|z|<r$,
$$\wp(z)=z^{-2}+3G_4z^2+5G_6z^4+z^6U(z).$$

6.1 (Derivative expansion.) Differentiating the identity of step 5.1 termwise, which is legitimate for the locally uniformly convergent power series by [F9], gives [F9, F10, step 5.1]
$$\wp'(z)=-2z^{-3}+6G_4z+20G_6z^3+z^5V(z)$$
for a holomorphic $V$ near $0$ (indeed $\frac{d}{dz}\bigl(z^6U(z)\bigr)=z^5(6U(z)+zU'(z))$ by the product rule of [F10]).

7.1 (Expansions of $(\wp')^2$ and $\wp^3$.) Write steps 5.1 and 6.1 as $\wp(z)=z^{-2}\bigl(1+3G_4z^4+5G_6z^6+z^8U(z)\bigr)$ and $\wp'(z)=-2z^{-3}\bigl(1-3G_4z^4-10G_6z^6+z^8V_1(z)\bigr)$ with $V_1$ holomorphic near $0$ (one has $z^5V(z)=-2z^{-3}\cdot z^8V_1(z)$ with $V_1=-\frac12V$, and the constant term is absorbed since $V$ is holomorphic). Squaring and cubing the brackets with the product rule of [F10] gives [F10, step 5.1, step 6.1]
$$(\wp')^2=4z^{-6}\bigl(1-6G_4z^4-20G_6z^6+z^8W_1(z)\bigr)=4z^{-6}-24G_4z^{-2}-80G_6+z^2W(z),$$
$$4\wp^3=4z^{-6}\bigl(1+9G_4z^4+15G_6z^6+z^8X_1(z)\bigr)=4z^{-6}+36G_4z^{-2}+60G_6+z^2X(z)$$
with $W,X$ holomorphic near $0$; all displayed coefficients are read off by expanding the products $(1+a+b+c)^2$ and $(1+a+b+c)^3$ and using that the resulting remainders are holomorphic.

8.1 (The difference is bounded at the origin.) Put $g_2:=60G_4$, $g_3:=140G_6$ and $F:=(\wp')^2-4\wp^3+g_2\wp+g_3$, a meromorphic function on $\mathbb C\setminus\Lambda$. Using step 7.1 and $\wp(z)=z^{-2}+O(z^2)$ from step 5.1 [F7, step 7.1, step 5.1]
$$F(z)=(-24-36+60)G_4z^{-2}+(-80-60+140)G_6+z^2Y(z)=z^2Y(z)$$
for a holomorphic $Y$ near $0$; in particular $F(z)\to0$ as $z\to0$, so $F$ is bounded on a punctured neighbourhood of $0$. By [F7] the singularity of $F$ at $0$ is removable and the extension has $F(0)=\lim_{z\to0}F(z)=0$.

9.1 ($F$ is elliptic and pole-free.) By [F4], $\wp$ and $\wp'$ are $\Lambda$-elliptic; by [F5] constants are elliptic and sums, products and constant multiples of elliptic functions are elliptic, so $F=(\wp')^2-4\wp^3+g_2\wp+g_3$ is a $\Lambda$-elliptic function. Its poles can only occur where $\wp$ or $\wp'$ has a pole, i.e. at lattice points, by [F4]; but $F$ extends holomorphically at $0$ by step 8.1 and $F$ is $\Lambda$-periodic, so near every $\lambda\in\Lambda$ one has $F(\lambda+u)=F(u)$ for small $u\ne0$, and the holomorphy at $0$ passes to $\lambda$. Hence $F$ is holomorphic on all of $\mathbb C$: a $\Lambda$-elliptic function without poles. [F4, F5, step 8.1]

10.1 (Conclusion.) By [F6] the pole-free elliptic function $F$ is constant, and the constant is $F(0)=0$ by step 8.1. Hence $(\wp')^2-4\wp^3+g_2\wp+g_3=0$ on $\mathbb C\setminus\Lambda$, that is $(\wp')^2=4\wp^3-g_2\wp-g_3$; and the absolute convergence of $G_4$ and $G_6$ is step 3.1. [F6, step 8.1, step 3.1] ∎

## Remarks

The proof never evaluates a conditionally convergent sum: absolute convergence of
$\sum|\omega|^{-3}$ comes from the uniform gap $\delta$ of the lattice, and all
rearrangements (the odd sums $G_3=G_5=0$ and the Taylor coefficients) are made in
absolutely summable families. The invariants are normalised so that the Laurent
coefficients $3G_4$ and $5G_6$ produce $g_2=20\cdot3G_4=60G_4$ and
$g_3=28\cdot5G_6=140G_6$, matching the standard convention; the algebraic identity
itself only uses that $(g_2,g_3)$ is a certain pair of constants, and the specific
normalisation is the one used later for the discriminant $\Delta=g_2^3-27g_3^2$.
The single non-elementary input is the removable-singularity theorem, which turns
the cancellation of the three lowest Laurent terms into holomorphy at the origin.
