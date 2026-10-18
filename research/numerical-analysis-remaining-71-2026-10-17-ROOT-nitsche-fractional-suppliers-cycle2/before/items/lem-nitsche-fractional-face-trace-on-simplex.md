---
id: lem-nitsche-fractional-face-trace-on-simplex
kind: lemma
title: Fractional Bessel-potential traces on simplex facets
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-plancherel, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, thm-riesz-fischer-completeness-of-l-p, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
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

[A1] $s>1/2$, so $\int_{\mathbb R}(1+\eta^2)^{-s}\,d\eta<\infty$.

## Proof


**Given:** The hypotheses and conventions in the Statement and [F1]–[F3].



1.1 First consider the hyperplane $\mathbb R^{d-1}\times\{0\}$ and $U\in\mathcal S(\mathbb R^d)$. Write $G(x')=U(x',0)$. Fourier inversion in the last coordinate and Fubini give $\widehat G(\xi')=\int_{\mathbb R}\widehat U(\xi',\eta)\,d\eta$. [F1, given]

2.1 Apply Cauchy–Schwarz with weights $\langle(\xi',\eta)\rangle^{s}$ and its reciprocal. The integral of the reciprocal square is $\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^{-s}\,d\eta=C_s(1+|\xi'|^2)^{1/2-s}\le C_s,$ by the substitution $\eta=(1+|\xi'|^2)^{1/2}t$ and [A1]. Therefore $|\widehat G(\xi')|^2\le C_s\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^s|\widehat U(\xi',\eta)|^2\,d\eta$. Integrating in $\xi'$ and applying [F1] proves $\|G\|_{L^2(\mathbb R^{d-1})}\le C_s\|U\|_{H^s(\mathbb R^d)}$. [F1, A1, step 1.1, algebra]

3.1 Since Schwartz space is dense in the completion [F2], the estimate of step 2.1 makes the restrictions of every Cauchy representative a Cauchy sequence in $L^2$; completeness [F3] defines a bounded trace on the hyperplane. The same estimate applied to the difference of two representatives proves independence of the representative and linearity. [F2, F3, step 2.1]

4.1 This trace is local. For $W\in H^s(\mathbb R^d)$, Fourier transformation in tangential variables and the weighted Cauchy--Schwarz estimate of step 2.1 give $\|W(\cdot,t)-W(\cdot,0)\|_{L^2(\mathbb R^{d-1})}^2\le\int_{\mathbb R^{d-1}}J_t(\xi')G(\xi')\,d\xi',$ where $J_t(\xi'):=\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^{-s}|e^{2\pi i\eta t}-1|^2\,d\eta$ and $G(\xi'):=\int_{\mathbb R}(1+|\xi'|^2+\eta^2)^s|\widehat W(\xi',\eta)|^2\,d\eta$. For each $\xi'$, dominated convergence gives $J_t(\xi')\to0$ as $t\to0$, and $J_t(\xi')\le4C_s$ by step 2.1; $G$ is integrable by the definition of the $H^s$ norm. A second dominated-convergence argument therefore shows that the slices converge continuously in tangential $L^2$. If two extensions agree on $K$, their difference vanishes on an interior prism beside every relatively compact patch of $F$; taking a sequence $t_n\downarrow0$ from the full-measure set of zero interior slices shows their traces agree on that patch. A countable exhaustion covers $F$ up to its lower-dimensional boundary, which has surface measure zero. Hence the trace is independent of the extension. Translation and orthogonal changes of coordinates preserve both norms, so the hyperplane estimate from step 2.1 applies to the supporting plane of $F$ and then restricts to $F$. [F1, F2, F3, step 2.1, algebra] ∎
## Source notes

The proof uses the Fourier restriction estimate directly rather than invoking a $C^1$ boundary trace theorem. This matters for a simplex: its boundary has edges and vertices, so the bounded-$C^1$ trace interface does not apply to the whole polyhedral boundary.
