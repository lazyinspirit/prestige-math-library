---
id: lem-na-compact-support-hcurl-fourier-splitting
kind: lemma
title: A whole-space Fourier splitting for compactly supported H(curl) fields
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-na-hcurl-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Lemma 3 and Theorem 2, Step 2; the low-frequency scalar potential is constructed explicitly below.
---

## Statement

Assume AC. Let $U\in H(\operatorname{curl};\mathbb R^3)$ be real and supported in a fixed bounded measurable set $A$ of finite measure. There are real fields $w\in H^1(\mathbb R^3;\mathbb R^3)$ and $p\in H^1(\mathbb R^3)$ depending linearly on $U$ such that $U=w+\nabla p$, $\operatorname{div}w=0$, $\operatorname{curl}w=\operatorname{curl}U$, and
$$\|w\|_2\le\|U\|_2,\qquad \|\nabla w\|_2=\|\operatorname{curl}U\|_2,\qquad \|p\|_{H^1}\le C_A\|U\|_2.$$

## Facts & Assumptions


**Given:** AC and the real field $U$. Use the repository's Fourier normalization $\widehat{D_jf}=2\pi i\xi_j\widehat f$.

[F1] The Fourier transform is unitary on complex $L^2$ by [[thm-plancherel]], agrees with the integral transform on $L^1\cap L^2$ by [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], and realizes weak derivatives as multipliers by [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]. Weighted $L^2$ Fourier integrability characterizes $H^1$ by [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]. Their CC assumptions follow from AC.

## Proof


1.1 Since $U$ is supported in $A$, Holder gives $\|U\|_1\le |A|^{1/2}\|U\|_2$, and therefore $|\widehat U(\xi)|\le |A|^{1/2}\|U\|_2$. For $\xi\ne0$ define $\widehat p(\xi)=\frac{\xi\cdot\widehat U(\xi)}{2\pi i|\xi|^2},\qquad \widehat w(\xi)=\widehat U(\xi)-\frac{\xi(\xi\cdot\widehat U(\xi))}{|\xi|^2}.$ Set both values at zero arbitrarily, for instance zero. The multiplier defining $\widehat w$ is an orthogonal projection in $\mathbb C^3$, so $\|\widehat w\|_2\le\|\widehat U\|_2$, and $2\pi i\xi\widehat p$ is the complementary orthogonal projection of $\widehat U$. At $|\xi|<1$, $|\widehat p|^2\le (4\pi^2)^{-1}|A|\|U\|_2^2|\xi|^{-2}$, whose integral is finite in dimension three; at $|\xi|\ge1$ it is bounded by $(4\pi^2)^{-1}|\widehat U|^2$. Thus $p\in H^1$ and $\|p\|_{H^1}\le C_A\|U\|_2$ by [F1]. This is the essential low-frequency check; an arbitrary nonsupported $L^2$ field would not give it. [F1, given, construct, algebra]

2.1 The vector identity $|\xi|^2|\widehat w|^2=|\xi\times\widehat U|^2$ and the multiplier identity for curl give $\int4\pi^2|\xi|^2|\widehat w|^2=\|\operatorname{curl}U\|_2^2$. Hence $w\in H^1$, with the asserted derivative norm. The displayed Fourier definitions give $U=w+\nabla p$, $\xi\cdot\widehat w=0$, and $\xi\times\widehat w=\xi\times\widehat U$, so all asserted distributional identities follow by Fourier injectivity. Finally $\widehat U(-\xi)=\overline{\widehat U(\xi)}$ for real $U$. The two definitions have the corresponding conjugate symmetry (including the sign of $i$ in $\widehat p$); uniqueness of the inverse transform therefore gives real $p,w$. Every operation is linear, and [F1] supplies all norm claims. [F1, step 1.1, algebra] ∎
