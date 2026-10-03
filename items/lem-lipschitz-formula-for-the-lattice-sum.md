---
id: lem-lipschitz-formula-for-the-lattice-sum
kind: lemma
title: "The Lipschitz formula for the reciprocal-power sums"
status: draft
origin: pipeline
deps:
  - thm-mittag-leffler-expansion-of-pi-cotangent
  - cor-locally-uniformly-convergent-holomorphic-series
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - def-complex-analytic-function
  - thm-geometric-series
  - lem-absolute-convergence-implies-convergence
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-complex-trigonometric-and-hyperbolic-functions
  - def-tangent-cotangent-secant-cosecant
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-series-power-series-and-absolute-convergence
  - def-complex-metric-convergence-and-continuity
  - thm-absolute-convergence-of-complex-series
  - thm-direct-comparison-test
  - thm-p-series-rational
  - lem-geometric-sequence-null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "The proof of Proposition 5, printed pp. 15-17: Euler's cotangent identity, Lipschitz's formula."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "The proof of Proposition 4.20, printed pp. 56–57: differentiated cotangent and reciprocal-power sums."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.2, printed pp. 91–92: cotangent as the singly periodic model; the Lipschitz identity is in Milne pp. 56–57."
proof_strategy: direct
---

## Statement

For every integer $k\ge2$ and every $\tau\in\mathfrak H$, with $q=e^{2\pi i\tau}$,
$$\sum_{n\in\mathbb Z}\frac{1}{(\tau+n)^k}=\frac{(-2\pi i)^k}{(k-1)!}\sum_{r=1}^{\infty}r^{k-1}q^r,$$
where the series on the left converges absolutely and the identity is independent of the order of summation.

## Facts & Assumptions

**Given:** An integer $k\ge2$, a point $\tau\in\mathfrak H$, and $q=e^{2\pi i\tau}$.

[F1] $\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\bigl(\frac1{z-n}+\frac1{z+n}\bigr)$, and the series converges locally uniformly on $\mathbb C\setminus\mathbb Z$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

[F2] If the partial sums of $\sum_j g_j$ of holomorphic functions converge locally uniformly to $g$, then $g$ is holomorphic and $g^{(m)}=\sum_j g_j^{(m)}$ for every $m$, the derivative series again converging locally uniformly ([[cor-locally-uniformly-convergent-holomorphic-series]], [[def-complex-analytic-function]]).

[F3] $\sin z=\frac{e^{iz}-e^{-iz}}{2i}$, $\cos z=\frac{e^{iz}+e^{-iz}}2$, and $\cot z=\cos z/\sin z$ wherever $\sin z\ne0$ ([[def-complex-trigonometric-and-hyperbolic-functions]], [[def-tangent-cotangent-secant-cosecant]]).

[F4] $\exp(w+w')=\exp(w)\exp(w')$, $\exp(2w)=\exp(w)^2$, $\exp(-w)=1/\exp(w)$, and $|\exp(x+iy)|=e^x$ for real $x,y$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] $\exp'=\exp$; the chain rule and the algebra of derivatives give $\frac{d^m}{dw^m}e^{aw}=a^me^{aw}$ and $\frac{d^m}{dw^m}\frac1{w+n}=\frac{(-1)^mm!}{(w+n)^{m+1}}$ on their domains ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F6] Convergence in $\mathbb C$ is convergence in the metric $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]); an absolutely convergent complex series converges, and every rearrangement of it has the same sum ([[thm-absolute-convergence-of-complex-series]], [[def-complex-series-power-series-and-absolute-convergence]]).

[F7] Let $k\ge2$. The real series $\sum_{n\ge1}n^{-k}$ converges ([[thm-p-series-rational]]), so $\sum_{n\ge1}|\tau+n|^{-k}$ converges by comparison ([[thm-direct-comparison-test]], [[lem-absolute-convergence-implies-convergence]]); for $|r|<1$ the real series $\sum_{m\ge0}r^m$ converges and $r^m\to0$ ([[thm-geometric-series]], [[lem-geometric-sequence-null]]).

## Proof

1.1 The function $z\mapsto\pi\cot(\pi z)$ is holomorphic on the open set $\mathfrak H\subseteq\mathbb C\setminus\mathbb Z$, and by [F1] the partial sums of $z^{-1}+\sum_{n\ge1}\bigl((z-n)^{-1}+(z+n)^{-1}\bigr)$ converge locally uniformly on $\mathfrak H$ to it. Fix $w$ with $|w|<1$: the telescoping identity $(1-w)\sum_{m=0}^{N}w^m=1-w^{N+1}$, the convergence $|w|^{N+1}\to0$ of [F7] and the metric description [F6] give $|(1-w)\sum_{m\le N}w^m-1|\to0$; dividing by the nonzero $|1-w|$ proves $\sum_{m\ge0}w^m=1/(1-w)$. Now put $u=e^{i\pi z}$ and $Q=u^2=e^{2\pi iz}$ by [F4]; then [F3] and [F4] give $\sin(\pi z)=(u-u^{-1})/(2i)=(Q-1)/(2iu)$ and $\cos(\pi z)=(u+u^{-1})/2=(Q+1)/(2u)$, so $\pi\cot(\pi z)=\pi i\frac{Q+1}{Q-1}=-\pi i\Bigl(1+2\sum_{r\ge1}Q^r\Bigr)$, because $|Q|=e^{-2\pi\operatorname{Im}z}<1$ for $z\in\mathfrak H$ by [F4] and $\frac{1+Q}{1-Q}=1+2\sum_{r\ge1}Q^r$. [F1, F3, F4, F6, F7, given, algebra]

2.1 The series in 1.1 has holomorphic terms and locally uniformly convergent partial sums on $\mathfrak H$, so [F2] applies and, for $m=k-1$, differentiating termwise gives $\frac{d^{k-1}}{dz^{k-1}}\pi\cot(\pi z)=(-1)^{k-1}(k-1)!\sum_{n\in\mathbb Z}(z+n)^{-k}$ on $\mathfrak H$, the displayed sum being understood through the absolutely convergent paired series of [F1] together with the term $z^{-k}$ differentiated from $z^{-1}$; here $\frac{d^m}{dz^m}(z+n)^{-1}=(-1)^mm!(z+n)^{-m-1}$ by [F5]. On the other side the $Q$-series of 1.1 consists of entire terms with locally uniformly convergent partial sums, so differentiating it $k-1$ times termwise by [F2] and [F5] gives $-2\pi i(2\pi i)^{k-1}\sum_{r\ge1}r^{k-1}Q^r$ as functions of $z$. [F2, F5, step 1.1, algebra]

3.1 Evaluating the two expressions of 2.1 at $z=\tau$, where $Q=e^{2\pi i\tau}=q$, gives $(-1)^{k-1}(k-1)!\sum_{n\in\mathbb Z}(\tau+n)^{-k}=-2\pi i(2\pi i)^{k-1}\sum_{r\ge1}r^{k-1}q^r$. Dividing by the nonzero real number $(-1)^{k-1}(k-1)!$ yields the stated identity, since $-2\pi i(2\pi i)^{k-1}/(-1)^{k-1}=(-2\pi i)^k$. Finally, for $n\ge2|\tau|$ one has $|\tau\pm n|\ge n-|\tau|\ge n/2$, so $\sum_{n\ge1}|\tau\pm n|^{-k}\le C_\tau+2^{k+1}\sum_{n\ge1}n^{-k}<\infty$ by [F7]; hence the family $((\tau+n)^{-k})_{n\in\mathbb Z}$ is absolutely summable and, by [F6], every enumeration of it converges to the same sum, which is the order-independence asserted in the Statement. [F6, F7, step 2.1, given, algebra] ∎
