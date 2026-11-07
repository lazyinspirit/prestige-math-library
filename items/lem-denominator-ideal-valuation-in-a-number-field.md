---
id: lem-denominator-ideal-valuation-in-a-number-field
kind: lemma
title: Valuations of coordinate and denominator ideals in a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-prime-ideal-valuations-on-fractional-ideals
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - thm-dvr-element-normal-form
  - def-uniformising-parameter
  - thm-nonzero-ideals-in-dedekind-domains-are-invertible
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-clearing-denominators-for-an-algebraic-number
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §6"
      url: "https://arxiv.org/pdf/math/9204234"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 3"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $\mathcal O_K$ be its ring of integers, and let $x_0,\ldots,x_r\in K$ be a finite tuple not all zero. The generated fractional ideal $I=\sum_{i=0}^r\mathcal O_Kx_i$ satisfies
$$v_{\mathfrak p}(I)=\min_{0\le i\le r}v_{\mathfrak p}(x_i)$$
for every nonzero prime ideal $\mathfrak p$, where $v_{\mathfrak p}(0)=+\infty$ and $v_{\mathfrak p}(x_i):=v_{\mathfrak p}((x_i))$ for $x_i\ne0$. In particular, for $x\in K$, define
$$\operatorname{den}(x)=\{y\in K:y(\mathcal O_K+\mathcal O_Kx)\subseteq\mathcal O_K\}=(\mathcal O_K+\mathcal O_Kx)^{-1};$$
then $\operatorname{den}(x)$ is a nonzero integral ideal and
$$v_{\mathfrak p}(\operatorname{den}(x))=\max\{0,-v_{\mathfrak p}(x)\}$$
at every nonzero prime ideal $\mathfrak p$.

## Statement references

[Lenstra, §6](https://arxiv.org/pdf/math/9204234)

[Milne, Chapter 3](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, and an element $x\in K$.

[A1] Under Choice, $\mathcal O_K$ is a Dedekind domain, so its nonzero prime localizations are discrete valuation rings ([[def-axiom-of-choice]], [[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[F1] A fractional ideal is a nonzero $\mathcal O_K$-submodule of $K$ bounded by a nonzero denominator ([[def-fractional-ideal]]).

[F2] In a discrete valuation ring with uniformizer $\pi$, every nonzero fraction is uniquely $u\pi^m$ for a unit $u$ and integer $m$; the localized ideal valuation is the exponent of $\pi$ ([[def-prime-ideal-valuations-on-fractional-ideals]], [[thm-dvr-element-normal-form]], [[def-uniformising-parameter]]).

[F3] Every nonzero fractional ideal is invertible, its inverse is $I^{-1}=\{y:yI\subseteq\mathcal O_K\}$, and fractional-ideal valuations add under products with unique prime-ideal exponents ([[def-fractional-ideal]], [[thm-nonzero-ideals-in-dedekind-domains-are-invertible]], [[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-ideal-valuations-on-fractional-ideals]]).

[F4] Every element of a number field has a positive integer multiple in its ring of integers ([[thm-clearing-denominators-for-an-algebraic-number]]).

## Proof



1.1 Clear denominators of the finite tuple using [F4], so $I=\sum_i\mathcal O_Kx_i$ is a nonzero fractional ideal by [F1]. Fix a nonzero prime $\mathfrak p$. By [A1], $\mathcal O_{K,\mathfrak p}$ is a DVR with uniformizer $\pi$. For each nonzero $x_i$, write $x_i=u_i\pi^{m_i}$ by [F2], where $m_i=v_{\mathfrak p}(x_i)$; set $m_i=+\infty$ if $x_i=0$. Since the tuple is not all zero, the finite minimum $m=\min_i m_i$ is attained. Every localized summand $x_i\mathcal O_{K,\mathfrak p}$ is contained in $\pi^m\mathcal O_{K,\mathfrak p}$, and an index attaining $m$ gives equality. Therefore $I_{\mathfrak p}=\sum_i x_i\mathcal O_{K,\mathfrak p}=\pi^m\mathcal O_{K,\mathfrak p}$, which by the definition of ideal valuation proves $v_{\mathfrak p}(I)=m$. [A1, F1, F2, F4, given, choose]

2.1 Now take the tuple $(1,x)$, so $I=\mathcal O_K+\mathcal O_Kx$. The inverse $D=I^{-1}$ is a fractional ideal by [F3]. Since $\mathcal O_K\subseteq I$, every $y\in D$ satisfies $y=y\cdot1\in\mathcal O_K$; and a common denominator $d\ne0$ with $dI\subseteq\mathcal O_K$ lies in $D$, so $D$ is nonzero. Thus $D$ is a nonzero integral ideal and equals the set defining $\operatorname{den}(x)$. [F1, F3, F4, given, step 1.1, algebra]

3.1 By step 1.1, $v_{\mathfrak p}(I)=\min(0,v_{\mathfrak p}(x))$. Invertibility gives $II^{-1}=\mathcal O_K$; additivity of valuations [F3] therefore yields [F3, step 1.1, step 2.1]
$$v_{\mathfrak p}(\operatorname{den}(x))=v_{\mathfrak p}(I^{-1})=-v_{\mathfrak p}(I)=\max(0,-v_{\mathfrak p}(x)).$$
This holds for every nonzero prime $\mathfrak p$. [F3, step 1.1, step 2.1, algebra] ∎

