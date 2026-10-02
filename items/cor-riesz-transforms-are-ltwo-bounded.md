---
id: cor-riesz-transforms-are-ltwo-bounded
kind: corollary
title: "Riesz transforms are L2 contractions and square to minus the identity in sum"
status: draft
origin: pipeline
deps: [def-riesz-transforms-on-euclidean-space, lem-ltwo-fourier-multiplier-bound, thm-plancherel, def-countable-choice]
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
      locator: "Section 5.1.4, Proposition 5.1.16, printed p. 327"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, formulas following Definition 20.1, printed p. 114"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. For the Riesz
transforms $R_1,\dots,R_n$ of
[[def-riesz-transforms-on-euclidean-space|the multiplier definition]],

$$\|R_jf\|_2\le\|f\|_2\qquad(j=1,\dots,n,\ f\in L^2(\mathbb R^n;\mathbb C)),$$

and

$$\sum_{j=1}^nR_j^2f=-f\qquad(f\in L^2(\mathbb R^n;\mathbb C)).$$

Both statements are $L^2$ statements only; no $L^p$ bound for $p\ne2$ is
asserted, and the operators are the $L^2$ operators of the definition, so all
identities hold as classes (no pointwise statement is made).

## Facts & Assumptions

**Given:** Countable Choice, the dimension $n\ge1$, and the Riesz transforms $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ with symbols $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ and $m_j(0)=0$.

[F1] Each $R_j$ is defined as the bounded $L^2$ operator with multiplier $m_j$; the symbol is measurable with $|m_j(\xi)|\le1$ everywhere, the value at the origin is immaterial, and the definition asserts no more than the multiplier description. [[def-riesz-transforms-on-euclidean-space]]

[F2] A measurable multiplier $m$ with finite essential supremum defines the bounded operator $T_m=\mathcal F_2^{-1}M_m\mathcal F_2$ with $\|T_m\|_{L^2\to L^2}=\|m\|_\infty$, and $T_m$ depends only on the almost-everywhere class of $m$. [[lem-ltwo-fourier-multiplier-bound]]

[F3] Plancherel: $\mathcal F_2$ is a surjective complex-linear isometry of $L^2(\mathbb R^n;\mathbb C)$, so $\|\mathcal F_2g\|_2=\|g\|_2$. Its inverse is complex-linear, hence $\mathcal F_2^{-1}(-g)=-\mathcal F_2^{-1}g$ and $\mathcal F_2^{-1}(-\mathcal F_2g)=-g$ for every class $g$. [[thm-plancherel]]

## Proof

**Proof technique:** direct.

1.1 For every $\xi\ne0$ the symbol values satisfy $\sum_{j=1}^n m_j(\xi)^2=\sum_{j=1}^n(-\xi_j^2/|\xi|^2)=-1$, while $m_j(0)=0$; the single point $\{0\}$ is Lebesgue null. Hence the function $s(\xi):=\sum_{j=1}^n m_j(\xi)^2$ is measurable, bounded with $|s|\le1$, and equals the constant $-1$ almost everywhere. [F1, F2]

1.2 By [F2] applied to the bounded measurable symbol $m_j$ of [F1], $\|R_j\|=\|m_j\|_\infty\le1$; consequently, for $f\in L^2$ and using the isometry of [F3], $\|R_jf\|_2=\|m_j\,\mathcal F_2f\|_2\le\|\mathcal F_2f\|_2=\|f\|_2$. [F1, F2, F3]

2.1 Since $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$, composition gives $R_j^2=\mathcal F_2^{-1}M_{m_j^2}\mathcal F_2=T_{m_j^2}$ in the notation of [F2], and summing the finitely many bounded operators gives $\sum_{j=1}^nR_j^2=T_s$ for the almost-everywhere-$-1$ symbol $s$ of 1.1. [step 1.1, F2, F3]

3.1 By [F2] the operator $T_s$ depends only on the almost-everywhere class of $s$, which by 1.1 is the class of the constant $-1$; hence $T_s=T_{-1}$, and $T_{-1}f=\mathcal F_2^{-1}M_{-1}\mathcal F_2f=\mathcal F_2^{-1}(-\mathcal F_2f)=-f$ by the linearity and isometry of [F3]. Therefore $\sum_{j=1}^nR_j^2f=-f$ for every $f\in L^2(\mathbb R^n;\mathbb C)$. [step 1.1, step 2.1, F2, F3] ∎
