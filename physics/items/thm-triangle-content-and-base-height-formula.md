---
id: thm-triangle-content-and-base-height-formula
kind: theorem
title: "A triangle has content $\\tfrac12|\\det[B-A\\ C-A]|$, equal to half base times height when the chosen side is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-parallelogram-and-triangle-in-r2, def-base-and-height-for-plane-figures, thm-jordan-content-is-translation-invariant, thm-linear-images-scale-jordan-content-by-absolute-determinant, prop-riemann-graph-area-equals-jordan-content, thm-ftc-second-part, lem-derivative-of-a-power, thm-linearity-of-the-integral, lem-determinant-base-height-identity-in-r2]
justified_by: []
aliases: []
landmark: true
short: "Triangle content"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Proposition 3.1.10"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Every triangle $T(A,B,C)$ is Jordan measurable and has content $\tfrac12|\det[B-A\ C-A]|$.

If $A\ne B$, then in the convention of [[def-base-and-height-for-plane-figures]],

$$\operatorname{cont}(T(A,B,C))=\tfrac12\lVert B-A\rVert_2d(C-A,\mathbb R(B-A)).$$

## Facts & Assumptions

**Given:** Vertices $A,B,C\in\mathbb R^2$ and the triangle of [[def-parallelogram-and-triangle-in-r2]].

[L1] A region between continuous graphs is compact and Jordan measurable, and its content equals its graph area ([[prop-riemann-graph-area-equals-jordan-content]]).

[L2] A linear map with matrix $M$ sends a bounded Jordan set $E$ to a bounded Jordan set with content $|\det M|\operatorname{cont}(E)$, including singular $M$ ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L3] For bounded $E\subseteq\mathbb R^2$ and $a\in\mathbb R^2$, $E+a$ and $E$ have equal inner and outer contents ([[thm-jordan-content-is-translation-invariant]]).

[L4] For $v\ne0$, $\lVert v\rVert_2d(w,\mathbb Rv)=|\det[v\ w]|$ ([[lem-determinant-base-height-identity-in-r2]]).

[L5] If $G'=f$ on $[a,b]$ and $f$ is integrable, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] The function $x\mapsto x^2$ has derivative $x\mapsto2x$ ([[lem-derivative-of-a-power]]).

[L7] The Riemann integral is linear ([[thm-linearity-of-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 The standard triangle $S=T((0,0),(1,0),(0,1))$ is the region $0\le x\le1$, $0\le y\le1-x$; [L1], [L5], [L6], and [L7] give $\operatorname{cont}(S)=\int_0^1(1-x)\,dx=1/2$. [L1, L5, L6, L7]

2.1 Let $M$ have columns $B-A$ and $C-A$. Then $T(A,B,C)=A+M(S)$, so [L2], [L3], and step 1.1 give $\operatorname{cont}(T(A,B,C))=|\det M|/2=\tfrac12|\det[B-A\ C-A]|$, with the singular cases included. [step 1.1, L2, L3]

3.1 If $A\ne B$, apply [L4] with $v=B-A$ and $w=C-A$ in step 2.1 to obtain the half-base-times-height formula. [step 2.1, L4] ∎
