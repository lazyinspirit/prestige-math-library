---
id: ex-green-function-disc-with-nonzero-pole
kind: example
title: "Green kernel of the disc at a nonzero pole"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-green-function-plane-domain
  - def-plane-harmonic-function
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-algebra-of-complex-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 184-186: Green function of the unit disc log|(1-zeta-bar z)/(z-zeta)|"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: disc Green function by conformal transport of the punctured-plane kernel"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Example

Let $\mathbb D=\{|z|<1\}$ be the unit disc ([[def-unit-disc-upper-half-plane-and-blaschke-factor]])
and let $a\in\mathbb D$ with $a\ne0$. For $z\in\mathbb D\setminus\{a\}$,
$$g_{\mathbb D}(z,a)=\log\Bigl|\frac{1-\overline a z}{z-a}\Bigr|,$$
with the canonical Green kernel of [[def-green-function-plane-domain]]. The
function $z\mapsto g_{\mathbb D}(z,a)$ is positive on $\mathbb D\setminus\{a\}$,
harmonic there, has logarithmic pole of coefficient one at $a$, is symmetric
$g_{\mathbb D}(z,a)=g_{\mathbb D}(a,z)$, and tends to zero as $|z|\to1$.

## Facts & Assumptions

**Given:** The unit disc $\mathbb D$, a point $a\in\mathbb D$ with $a\ne0$, the Blaschke factor $\varphi_a(z)=(a-z)/(1-\overline az)$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]), modulus and conjugates as in [[def-complex-conjugate-real-imaginary-part-and-modulus]], and harmonicity as in [[def-plane-harmonic-function]].

[F1] The canonical Green function $g_\Omega(\cdot,a)$ is the pointwise least nonnegative logarithmic-pole candidate at $a$: candidates are nonnegative, harmonic on $\Omega\setminus\{a\}$, and have $u+\log|z-a|$ extending harmonically across $a$ ([[def-green-function-plane-domain]]).

[F2] The map $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and if $u$ is harmonic on an open $V$ and $\phi$ holomorphic on an open $U$ with $\phi(U)\subseteq V$, then $u\circ\phi$ is harmonic on $U$ ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F3] Sums, differences and real multiples of $C^2$ functions are $C^2$ and the Laplacian is linear, so sums and differences of harmonic functions are harmonic ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); on the open disc $\mathbb D$, the reciprocal and quotient rules make $z\mapsto(z-a)/(1-\overline az)$ holomorphic wherever $1-\overline az\ne0$ ([[thm-algebra-of-complex-derivatives]]).

[F4] A harmonic function on a bounded domain that extends continuously to the closure attains its infimum on the boundary ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

## Verification

**Proof technique:** direct.

1.1 Put $M(z):=(z-a)/(1-\overline az)=-(\varphi_a(z))$. Since $|\overline az|\le|a|\,|z|<1$ for $z\in\mathbb D$, the denominator does not vanish and $M$ is holomorphic on $\mathbb D$ by [F3]. For $z\in\mathbb D$ with $|z|=r$, $$|1-\overline az|^2-|z-a|^2=(1-|a|^2)(1-r^2)>0,$$ so $|M(z)|<1$. No involution property of $M$ is needed. [F3, algebra]

2.1 Hence $G(z):=\log|1-\overline az|-\log|z-a|=-\log|M(z)|$ satisfies $G(z)>0$ for $z\in\mathbb D\setminus\{a\}$ and $G(z)+\log|z-a|=\log|1-\overline az|$ for $z\ne a$. [step 1.1]

2.2 On the circles $|z|=r$ with $|a|<r<1$ one has $1-|M(z)|^2=(1-|a|^2)(1-r^2)/|1-\overline az|^2$, where $|1-\overline az|\ge1-|a|r\ge1-|a|>0$; consequently $1-|M(z)|^2\le(1-|a|^2)(1-r^2)/(1-|a|)^2\to0$ as $r\uparrow1$, uniformly in the argument. For such $r$, $M(z)\ne0$ on the circle, and $G(z)=-\log|M(z)|=-\tfrac12\log|M(z)|^2$; hence $G\to0$ uniformly on the circles $|z|=r$ as $r\uparrow1$, and in particular $G(z)\to0$ as $|z|\to1$. [step 1.1, algebra]

3.1 $G$ is symmetric in its two arguments: writing $G(z,w)=\log|1-\overline wz|-\log|z-w|$ for the same formula in two variables, the identities $|1-\overline wz|=|\overline{1-w\overline z}|=|1-w\overline z|$ and $|z-w|=|w-z|$ give $G(z,w)=G(w,z)$: the two-variable formula is symmetric. [step 2.1, algebra]

3.2 The two summands of $G$ are harmonic: $z\mapsto\log|1-\overline az|$ is $(\log|\cdot|)\circ(1-\overline az)$ with $1-\overline az$ holomorphic and nowhere zero on $\mathbb D$, and $z\mapsto\log|z-a|$ is $(\log|\cdot|)\circ(z-a)$ with $z-a$ holomorphic and nowhere zero on $\mathbb C\setminus\{a\}$; hence both are harmonic on $\mathbb D\setminus\{a\}$ by [F2], and so is $G$ by [F3]. [F2, F3, step 2.1]

4.1 Leastness: let $u$ be any logarithmic-pole candidate at $a$. Then $u+\log|z-a|$ extends across $a$ to a harmonic function on $\mathbb D$ by [F1], and by step 2.1 the function $G+\log|z-a|$ agrees on $\mathbb D\setminus\{a\}$ with the harmonic function $\log|1-\overline az|$ of step 3.2; hence $D:=u-G$ extends from $\mathbb D\setminus\{a\}$ to the difference of two harmonic functions on $\mathbb D$, which is harmonic by [F3]. Fix $\varepsilon>0$ and let $r<1$ be so close to $1$ that $G<\varepsilon$ on $|z|=r$, as step 2.2 permits. On that circle $D=u-G\ge-\varepsilon$ because $u\ge0$, so the infimum of $D$ over the closed disc $\{|z|\le r\}$ is at least $-\varepsilon$ by [F4]. As $\varepsilon\downarrow0$ and $r\uparrow1$ we get $D\ge0$, that is $u\ge G$ on $\mathbb D\setminus\{a\}$. Hence $G$ is the pointwise least candidate, so $g_{\mathbb D}(\cdot,a)=G$ by [F1]. [F1, F3, F4, step 2.2, step 3.2]

4.2 By step 2.1 the function $G+\log|z-a|$ agrees on $\mathbb D\setminus\{a\}$ with the harmonic function $z\mapsto\log|1-\overline az|$ of step 3.2, which is harmonic on all of $\mathbb D$. Together with steps 2.1 and 3.2 this shows that $G$ is a logarithmic-pole candidate at $a$ in the sense of [F1]. [F1, step 2.1, step 3.2]

5.1 The kernel therefore has all the asserted properties: it is positive on $\mathbb D\setminus\{a\}$ by step 2.1, harmonic there with $G+\log|z-a|$ harmonic across $a$ by steps 3.2 and 4.2, symmetric by step 3.1 together with $g_{\mathbb D}=G$ from step 4.1, and it tends to zero at every boundary point of the unit circle by step 2.2; the logarithmic coefficient is one because $\log|z-a|$ is subtracted exactly once. No boundary datum was prescribed and no extension of $M$ beyond the disc was used, so irregular-boundary questions do not arise. [step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 4.2] ∎
