---
id: thm-hausdorff-young-for-the-euclidean-fourier-transform
kind: theorem
title: Hausdorff–Young for the Euclidean Fourier transform
status: draft
origin: pipeline
deps:
  - lem-l-one-fourier-transform-is-well-defined
  - thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - thm-plancherel
  - thm-l-one-l-two-agreement-of-fourier-transform
  - cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
  - cor-complex-interpolation-extensions-agree-on-intersections
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
landmark: false
proof_strategy: interpolation between the L1-to-Linfinity and Plancherel bounds
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.2, Proposition 2.2.16 and its proof, printed pp. 113-114"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: https://arxiv.org/pdf/0903.3845
      locator: "Chapter 17, Theorem 17.4 and proof, printed pp. 99-100; the source normalization is converted to the repository 2 pi convention"
---

## Statement

Assume Countable Choice, let $n\ge1$, and let
$\widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi ix\cdot\xi}\,dx$ be the
integral Fourier transform on $L^1(\mathbb R^n;\mathbb C)$. For $1\le p\le2$
with conjugate exponent $p'$, the transform extends compatibly to a
complex-linear bounded map
$$\mathcal F_p:L^p(\mathbb R^n;\mathbb C)\longrightarrow L^{p'}(\mathbb R^n;\mathbb C),\qquad \|\mathcal F_pf\|_{p'}\le\|f\|_p .$$
At $p=1$ this map is the integral transform of
[[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]],
at $p=2$ it is the unitary Plancherel transform of [[thm-plancherel]], and on
$L^1\cap L^2$ the two interpretations agree almost everywhere
([[thm-l-one-l-two-agreement-of-fourier-transform]]). For $1<p<2$ the
extension agrees almost everywhere with the integral transform on its
intersection with $L^1$ and with the Plancherel transform on its intersection
with $L^2$. No statement for $p>2$ and no pointwise representative identity is
claimed.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, an exponent $1\le p\le2$, and, where required, $f\in L^p(\mathbb R^n;\mathbb C)$.

[A1] Countable Choice is carried by the Plancherel and interpolation interfaces cited below ([[def-countable-choice]]).

[F1] For $f\in L^1(\mathbb R^n;\mathbb C)$ the integral $\widehat f(\xi)$ converges absolutely for every $\xi$, is unchanged by null-set modifications, and satisfies $|\widehat f(\xi)|\le\|f\|_1$ ([[lem-l-one-fourier-transform-is-well-defined]]).

[F2] The integral transform is a complex-linear map $L^1(\mathbb R^n;\mathbb C)\to BUC(\mathbb R^n;\mathbb C)$ with $\sup_\xi|\widehat f(\xi)|\le\|f\|_1$, so its classes are bounded measurable classes on the sigma-finite Lebesgue space ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F3] Plancherel extends the Schwartz transform to a surjective complex-linear isometry $\mathcal F_2:L^2\to L^2$ ([[thm-plancherel]]).

[F4] If $f\in L^1\cap L^2$, the bounded continuous integral transform $\widehat f$ represents $\mathcal F_2f$ almost everywhere ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F5] On sigma-finite measure spaces a complex-linear finite-simple-core operator with $\|Tg\|_\infty\le A\|g\|_1$ and $\|Tg\|_2\le B\|g\|_2$ satisfies, for $1<p<2$, $\|Tg\|_{p'}\le A^{2/p-1}B^{2-2/p}\|g\|_p$, retains the endpoint estimates at $p=1,2$, and has unique compatible bounded extensions to the full $L^p$ spaces under countable choice ([[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]]).

[F6] Every two extensions of the same finite-simple core operator agree as measurable almost-everywhere classes on their domain intersection ([[cor-complex-interpolation-extensions-agree-on-intersections]]).

[F7] Complex finite simple functions with finite-measure nonzero sets are dense in $L^q(\mathbb R^n;\mathbb C)$ for $1\le q<\infty$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F8] Complex $L^p$ classes, their norms and almost-everywhere equality are those of [[def-complex-lp-and-euclidean-test-function-conventions]].

## Proof

**Proof technique:** interpolate the L1 and L2 endpoint bounds on the finite-simple core and identify the extensions with the two known transforms.

1.1 Let $T$ send the almost-everywhere class of a complex finite simple function $s$ with finite-measure nonzero set on $\mathbb R^n$ to the class of its integral transform $\widehat s$. The class is well defined and $T$ is complex-linear by [F1], [F2] and [F8]. [F1, F2, F8, given]

2.1 For such an $s$ one has $\|Ts\|_\infty=\sup_\xi|\widehat s(\xi)|\le\|s\|_1$, the L^1-to-L-infinity endpoint bound with $A=1$. [F1, F2, step 1.1]

2.2 Such an $s$ lies in $L^1\cap L^2$, so [F4] identifies $\widehat s$ with $\mathcal F_2s$ almost everywhere; [F3] then gives $\|Ts\|_2=\|\mathcal F_2s\|_2=\|s\|_2$, the L^2-to-L^2 endpoint bound with $B=1$. [F3, F4, step 1.1]

3.1 Applying [F5] to $T$ with the endpoints $(p_0,q_0)=(1,\infty)$, $A=1$ and $(p_1,q_1)=(2,2)$, $B=1$ on the sigma-finite Lebesgue space $\mathbb R^n$ gives, for every $1<p<2$, a unique compatible bounded extension $\mathcal F_p:L^p\to L^{p'}$ with $\|\mathcal F_pf\|_{p'}\le\|f\|_p$, while the endpoint estimates of steps 2.1 and 2.2 hold at $p=1$ and $p=2$. [F5, step 2.1, step 2.2]

3.2 The $L^1$-extension of $T$ is the integral transform: by [F1] and [F2] the transform is a bounded linear map $L^1\to L^\infty$ agreeing with $T$ on the core, and the core is dense in $L^1$ by [F7]. Likewise the $L^2$-extension of $T$ is $\mathcal F_2$, since by step 2.2 $\mathcal F_2$ agrees with the core map on that dense core. [F2, F3, F7, step 2.2]

4.1 Fix $1<p<2$ and $f\in L^p$. By [F6] the extension $\mathcal F_pf$ agrees almost everywhere with the $L^1$-extension on $L^p\cap L^1$ and with the $L^2$-extension on $L^p\cap L^2$; by step 3.2 these are the integral transform and the Plancherel transform respectively. [F6, step 3.1, step 3.2]

5.1 The claims at $p=1$ and $p=2$ are steps 2.1 and 2.2 together with step 3.2, while for $1<p<2$ steps 3.1 and 4.1 give the bounded compatible extension and its agreement with the integral and Plancherel transforms on the respective intersections; the case $f\in L^1\cap L^2$ is [F4]. Countable Choice is used only through [F3] and [F5]. [A1, F3, F4, F5, step 3.1, step 4.1] ∎
