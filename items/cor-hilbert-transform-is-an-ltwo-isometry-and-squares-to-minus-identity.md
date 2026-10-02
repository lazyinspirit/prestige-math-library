---
id: cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity
kind: corollary
title: "The Hilbert transform is an L2 isometry and squares to minus the identity"
status: draft
origin: pipeline
deps: [lem-hilbert-transform-has-signum-fourier-multiplier, lem-ltwo-fourier-multiplier-bound, thm-plancherel, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, equations (5.1.14)-(5.1.15), printed p. 317"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Definition 20.1 and following identities, printed pp. 113-114"
---

## Statement

Assume [[def-countable-choice|Countable Choice]], use the
$e^{-2\pi ix\xi}$ convention, and let $m(\xi)=-i\operatorname{sgn}(\xi)$ with
$\operatorname{sgn}(0)=0$. The Hilbert transform of
[[lem-hilbert-transform-has-signum-fourier-multiplier]] defines, on Schwartz
functions, the operator $Hf=(W*f)$ with $\mathcal F(Hf)=m\widehat f$. Then $H$
extends uniquely to a bounded operator on $L^2(\mathbb R;\mathbb C)$, still
denoted $H$, and for every $f\in L^2(\mathbb R;\mathbb C)$,

$$\|Hf\|_2=\|f\|_2,\qquad H^2f=-f.$$

In particular the single point $\xi=0$, where $m$ vanishes, is a Lebesgue-null
set and creates no zero-mode exception. Nonzero constant functions are not in
$L^2(\mathbb R)$, so there is no constant mode in the domain to transform.

## Facts & Assumptions

**Given:** Countable Choice and the multiplier $m(\xi)=-i\operatorname{sgn}(\xi)$ of the Schwartz Hilbert transform.

[F1] For Schwartz $f$ the principal-value Hilbert transform $Hf=W*f$ satisfies $\mathcal F(Hf)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$ as tempered distributions. [[lem-hilbert-transform-has-signum-fourier-multiplier]]

[F2] A measurable multiplier $m$ with finite essential supremum defines the bounded operator $T_m=\mathcal F_2^{-1}M_m\mathcal F_2$ on $L^2$; its Schwartz-core action extends uniquely to $L^2$, it depends only on the almost-everywhere class of $m$, and $\|T_m\|=\|m\|_\infty$. [[lem-ltwo-fourier-multiplier-bound]]

[F3] Plancherel: $\mathcal F_2$ is a surjective linear isometry of $L^2$, so $\|\mathcal F_2g\|_2=\|g\|_2$ and $\mathcal F_2^{-1}(-g)=-\mathcal F_2^{-1}g$ and $\mathcal F_2^{-1}(-\mathcal F_2g)=-g$. [[thm-plancherel]]

[F4] Fourier transformation is injective on tempered distributions. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]

## Proof

**Proof technique:** direct.

1.1 The symbol satisfies $|m(\xi)|=1$ for every $\xi\ne0$, $m(\xi)^2=-1$ for every $\xi\ne0$, and the exceptional set is the Lebesgue-null singleton $\{0\}$. [given, algebra]

2.1 For Schwartz $f$, [F2] identifies $T_mf$ with an $L^2$ class whose regular tempered distribution has Fourier transform $m\widehat f$. By [F1], the tempered distribution $Hf$ has the same transform. Injectivity [F4] gives equality of these distributions, so $Hf$ is represented by the $L^2$ class $T_mf$. Thus no $L^2$ membership of the principal value is assumed in this identification. [step 1.1, F1, F2, F4]

3.1 By [F2] the Schwartz-core action of $T_m$ extends uniquely to a bounded operator on $L^2$; by 2.1 the Schwartz action of $H$ is that core action, so $H=T_m$ on $L^2$, and for $g\in L^2$, $\|Hg\|_2=\|m\,\mathcal F_2g\|_2=\|\mathcal F_2g\|_2=\|g\|_2$ because $|m|=1$ almost everywhere by 1.1. [step 1.1, step 2.1, F2, F3]

4.1 Likewise, on the Schwartz core $H^2f=T_m^2f=\mathcal F_2^{-1}(m^2\mathcal F_2f)=\mathcal F_2^{-1}(-\mathcal F_2f)=-f$ by 1.1 and [F3]; both $H^2$ and $-I$ are bounded on $L^2$ and agree on the dense Schwartz core, so $H^2=-I$ on all of $L^2$. [step 1.1, step 2.1, F2, F3] ∎
