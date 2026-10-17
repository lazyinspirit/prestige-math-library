---
id: lem-emg-conformastatic-chart-is-lorentzian
kind: lemma
title: "The positive-scalar conformastatic chart tensor is Lorentzian"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps: [def-emg-conformastatic-chart-data]
dependency_roles:
  def-emg-conformastatic-chart-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2, metric signature and orthonormal bases; Ch. 3 curvature conventions"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "General Lorentzian metric and orthonormal-frame conventions; the signature check is performed by the displayed diagonal matrix."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §§3.2.2–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Levi-Civita and curvature coordinate conventions; the pointwise signature and frame calculations are local."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equation (1), PDF p. 2"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The static conformal coordinate ansatz; the arbitrary positive C3 chart domain is stated and checked locally."
verification:
  precheck: pass
---

## Statement

For every $D,H,g_H$ in [[def-emg-conformastatic-chart-data]], the coordinate tensor $g_H$ is a C3 nondegenerate Lorentzian metric of signature $(-,+,+,+)$. Its inverse components are $g^{00}=-H^2$ and $g^{ij}=H^{-2}\delta_{ij}$, its determinant is $-H^4$, and $\sqrt{|\det g|}=H^2$. The vector fields $n:=H\partial_0$ and $e_i:=H^{-1}\partial_i$ form a global orthonormal frame with $g(n,n)=-1$, $g(n,e_i)=0$, and $g(e_i,e_j)=\delta_{ij}$. The chosen time orientation makes $n$ future-directed, and the frame $(n,e_1,e_2,e_3)$ is positively oriented.

## Facts & Assumptions

**Given:** An open set $D\subseteq\mathbb R^3$, a positive C3 function $H$ independent of $x^0$, and the coordinate tensor $g_H$.

[F1] [[def-emg-conformastatic-chart-data]] defines the coordinate matrix $\operatorname{diag}(-H^{-2},H^2,H^2,H^2)$, with $H>0$. It fixes the coordinate orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ and the future timelike cone $C_p^+=\{v:g_H(v,v)<0,\ v^0>0\}$. Thus a timelike vector is future-directed exactly when its zeroth coordinate is positive; for $n=H\partial_0$, that coordinate is $H>0$.

## Proof

1.1 The coordinate matrix is diagonal and symmetric. Since $H>0$, all entries are nonzero, its inverse is $\operatorname{diag}(-H^2,H^{-2},H^{-2},H^{-2})$, and multiplying the two diagonal matrices gives the identity. The determinant is $(-H^{-2})(H^2)^3=-H^4<0$, so the matrix has exactly one negative and three positive diagonal entries and no zero eigenvalue. Thus it is nondegenerate of signature $(-,+,+,+)$ at every point. Its coefficients and inverse are C3 because $H$ is C3 and the reciprocal map $u\mapsto1/u$ is smooth on $(0,\infty)$. [given, F1, algebra]

2.1 With the frame fields defined in the Statement, direct contraction against the diagonal matrix gives $g(n,n)=H^2(-H^{-2})=-1$, $g(n,e_i)=0$, and $g(e_i,e_j)=H^{-2}H^2\delta_{ij}=\delta_{ij}$. Each frame vector is a nonzero multiple of a distinct coordinate vector, so the four vectors form a basis. Their coordinate change matrix is $\operatorname{diag}(H,H^{-1},H^{-1},H^{-1})$, with positive determinant $H^{-2}$; hence the frame is positively oriented. The time orientation is the one specified in [F1], so $n$ is future-directed. The already computed metric determinant gives $\sqrt{|\det g|}=H^2$. [given, F1, step 1.1, algebra] ∎

## Remarks

The result is pointwise and coordinate-local. It does not assert geodesic completeness, asymptotic flatness, or any Einstein–Maxwell equation.
