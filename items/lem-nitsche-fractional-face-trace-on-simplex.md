---
id: lem-nitsche-fractional-face-trace-on-simplex
kind: lemma
title: Fractional Bessel-potential traces on simplex facets
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-nitsche-restriction-bessel-potential-sobolev-spaces,
    def-real-order-bessel-potential-sobolev-space,
    thm-plancherel,
    cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space,
    thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces,
    thm-riesz-fischer-completeness-of-l-p,
    thm-tonelli-and-fubini-for-completed-product-measures,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $K\subset\mathbb R^d$, $d\ge2$, be a nondegenerate affine simplex, let $F$ be one of its facets, and let $s>1/2$. Restriction of smooth functions has a unique bounded extension
$$T_F:H^s(K)\longrightarrow L^2(F),\qquad \|T_Fv\|_{L^2(F)}\le C_s\|v\|_{H^s(K)},$$
where $H^s(K)$ is the restriction space of [[def-nitsche-restriction-bessel-potential-sobolev-spaces]]. The constant depends only on $s$ and the Fourier normalization, not on the location or orientation of the supporting hyperplane. If $V\in H^s(\mathbb R^d)$ is an extension of $v$, then $T_Fv$ is the restriction to $F$ of the unique $L^2$ hyperplane trace of $V$; hence it is independent of the chosen extension.

## Facts & Assumptions

**Given:** Countable Choice; $s>1/2$; the Bessel-potential completion $H^s(\mathbb R^d)$; its quotient restriction space $H^s(K)$; the negative-sign $2\pi$-normalized Fourier transform; and a nondegenerate affine simplex facet $F$.

[F1] The Fourier transform extends to an isometry on $L^2(\mathbb R^n)$, and Fourier transformation maps Schwartz space onto itself ([[thm-plancherel]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F2] $H^s(\mathbb R^d)$ is the completion of Schwartz space in $\|U\|_{H^s}=\|\langle\xi\rangle^s\widehat U\|_2$ ([[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F3] $L^2(F)$ is complete, so every Cauchy sequence of smooth facet restrictions has a unique limit ([[thm-riesz-fischer-completeness-of-l-p]]).

[F4] Tonelli and Fubini apply to nonnegative or integrable functions on sigma-finite Lebesgue product spaces, including the products used for partial Fourier transforms and slices ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] A $C^1$ diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue integrands; the rigid coordinate changes below have Jacobian determinant of absolute value one, while scalar dilations contribute their usual Jacobian factor ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[A1] $s>1/2$, so $\int_{\mathbb R}(1+\eta^2)^{-s}\,d\eta<\infty$.

## Proof


**Given:** The hypotheses and conventions in the Statement and [F1]–[F5].



1.1 First consider the hyperplane $\mathbb R^{d-1}\times\{0\}$ and $U\in\mathcal S(\mathbb R^d)$. Write $G(x')=U(x',0)$. Fourier inversion in the last coordinate and Fubini on the absolutely integrable Schwartz integrands give $\widehat G(\xi')=\int_{\mathbb R}\widehat U(\xi',\eta)\,d\eta$. [F1, F4, given]

2.1 Apply Cauchy–Schwarz in $\eta$ with weights $\langle(\xi',\eta)\rangle^{s}$ and its reciprocal; this follows by expanding $0\le\|f-\lambda g\|_2^2$ and minimizing over the complex scalar $\lambda$. Both weighted factors lie in $L^2(\mathbb R)$ for fixed $\xi'$, the reciprocal factor by [A1] and the weighted Fourier transform because $U$ is Schwartz. The reciprocal-square integral is $\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^{-s}\,d\eta=C_s(1+|\xi'|^2)^{1/2-s}\le C_s,$ by the substitution $\eta=(1+|\xi'|^2)^{1/2}t$ and [A1, F5]. Therefore $|\widehat G(\xi')|^2\le C_s\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^s|\widehat U(\xi',\eta)|^2\,d\eta$. Tonelli [F4] and Plancherel [F1] give $\|G\|_{L^2(\mathbb R^{d-1})}\le C_s\|U\|_{H^s(\mathbb R^d)}$. [F1, F4, F5, A1, step 1.1, algebra]

3.1 Since Schwartz space is dense in the completion [F2], the estimate of step 2.1 makes the restrictions of every Cauchy representative a Cauchy sequence in $L^2$; completeness [F3] defines a bounded trace on the hyperplane. The same estimate applied to the difference of two representatives proves independence of the representative and linearity. [F2, F3, step 2.1]

4.1 This trace is local. For Schwartz $W$, let $W_t(x'):=W(x',t)$. Partial Plancherel in the tangential variables, Fubini [F4], and the weighted Cauchy--Schwarz estimate of step 2.1 give $\|W_t-W_0\|_{L^2(\mathbb R^{d-1})}^2\le\int_{\mathbb R^{d-1}}J_t(\xi')G(\xi')\,d\xi',$ where $J_t(\xi'):=\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^{-s}|e^{2\pi i\eta t}-1|^2\,d\eta$ and $G(\xi'):=\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^s|\widehat W(\xi',\eta)|^2\,d\eta$. Choose $0<\delta<\min\{1,2s-1\}$. Since $|e^{i\alpha}-1|^2\le C_\delta|\alpha|^\delta$, the substitution $\eta=(1+|\xi'|^2)^{1/2}r$ using [F5] gives $J_t(\xi')\le C_{s,\delta}|t|^\delta(1+|\xi'|^2)^{(1-2s+\delta)/2}\le C_{s,\delta}|t|^\delta$. Also $\int G(\xi')\,d\xi'=\|W\|_{H^s(\mathbb R^d)}^2$ by [F1, F4]. Hence $\|W_t-W_0\|_2^2\le C_{s,\delta}|t|^\delta\|W\|_{H^s}^2$. Applying this estimate to differences of two slice parameters, density of Schwartz space and completeness [F3] give every $W\in H^s(\mathbb R^d)$ a continuous $L^2(\mathbb R^{d-1})$ slice representative whose value at $t=0$ is the trace from step 3.1. It agrees with the ordinary sections for almost every $t$: choose Schwartz approximants with summable squared $L^2(\mathbb R^d)$ errors and apply Fubini [F4] to their squared slice errors. If two extensions agree on $K$, their difference vanishes on an interior prism beside every relatively compact patch $E$ of $F$. Fubini [F4] makes almost every interior slice zero on $E$; continuity then makes the trace zero there. A countable exhaustion covers $F$ up to its lower-dimensional boundary, which has surface measure zero, so the trace is independent of the extension. For a translation $b$ and orthogonal map $R$, $\widehat{W(R^{-1}(\cdot-b))}(\xi)=e^{-2\pi i b\cdot\xi}\widehat W(R^{-1}\xi)$ by change of variables [F5]; since $|\det R|=1$ and $\langle R\xi\rangle=\langle\xi\rangle$, the whole-space norm is invariant. Thus the hyperplane estimate from step 2.1 applies to the supporting plane of $F$ and then restricts to $F$. [F1, F2, F3, F4, F5, step 2.1, algebra] ∎
## Source notes

The proof uses the Fourier restriction estimate directly rather than invoking a $C^1$ boundary trace theorem. This matters for a simplex: its boundary has edges and vertices, so the bounded-$C^1$ trace interface does not apply to the whole polyhedral boundary.
