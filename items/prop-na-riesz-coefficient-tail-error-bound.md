---
id: prop-na-riesz-coefficient-tail-error-bound
kind: proposition
title: Biorthogonal coefficient truncation error is controlled by Riesz bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-finite-riesz-synthesis-matrix, def-euclidean-inner-product]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 11"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/1bb693efeb7d2ea97f12ae72812f7522_Handout11.pdf"
---

## Statement

Let $V$ be a finite Riesz synthesis matrix with bounds $A,B$ as in [[def-na-finite-riesz-synthesis-matrix]], let $c=V^{-1}x$, and retain coefficients in $S\subseteq\{0,\ldots,N-1\}$. Define $S^c=\{0,\ldots,N-1\}\setminus S$, and define $(P_Sc)_i=c_i$ for $i\in S$ and $0$ otherwise. Then
$$A\sum_{i\notin S}|c_i|^2\le\|x-VP_Sc\|_2^2\le B\sum_{i\notin S}|c_i|^2.$$
Thus a biorthogonal transform has coefficient-tail error constants given by its Riesz bounds; an orthonormal identity with constant $1$ is the special case $A=B=1$.

## Facts & Assumptions

**Given:** An invertible synthesis matrix $V$, positive Riesz bounds $A,B$, a signal $x$, its coefficient vector $c=V^{-1}x$, and a retained index set $S$.

[F1] [[def-na-finite-riesz-synthesis-matrix]]: for every coefficient vector $z$, $A\|z\|_2^2\le\|Vz\|_2^2\le B\|z\|_2^2$.

[F2] [[def-euclidean-inner-product]]: for a real coordinate vector $z$, $\|z\|_2^2=\sum_i|z_i|^2$.

## Proof

1.1 Since $x=Vc$, the retained approximation is $VP_Sc$, so the residual is $V(c-P_Sc)=VP_{S^c}c$. [given, F1, algebra]

2.1 Apply [F1] to $z=P_{S^c}c$. By [F2], $\|P_{S^c}c\|_2^2=\sum_{i\notin S}|c_i|^2$. This gives both inequalities. If $S$ is the full index set, both sides are zero; if $S$ is empty, the same calculation uses $z=c$. [given, F1, F2, step 1.1, algebra] ∎
