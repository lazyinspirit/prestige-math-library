---
id: lem-bem-helmholtz-double-layer-conormal-jump
kind: lemma
title: The Helmholtz double layer has a common weak conormal
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-bem-smooth-helmholtz-combined-field-operator,
    lem-bem-smooth-trace-and-helmholtz-layer-extension,
    def-axiom-of-choice
  ]
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed; it supplies Countable Choice for
  Fourier, variational and harmonic regularity suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sayas, First Steps in the Boundary Element Method; local proof of the C2
        extension below"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. On the $C^2$ surface of [[def-bem-smooth-helmholtz-combined-field-operator]], the extensions of [[lem-bem-smooth-trace-and-helmholtz-layer-extension]] satisfy, for $\phi\in H^{1/2}(\Gamma)$ and $\lambda\in H^{-1/2}(\Gamma)$,
$$\gamma^-D_k\phi-\gamma^+D_k\phi=-\phi,\qquad \partial_n^-D_k\phi-\partial_n^+D_k\phi=0,$$
$$\gamma^-S_k\lambda-\gamma^+S_k\lambda=0,\qquad \partial_n^-S_k\lambda-\partial_n^+S_k\lambda=\lambda.$$
Trace and conormal equalities hold in $H^{1/2}(\Gamma)$ and $H^{-1/2}(\Gamma)$, respectively; both conormals use the same normal $n$ pointing out of $\Omega^-$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the densities in the Statement.

[F1] The layers have bounded piecewise $H^1$ restrictions, weak conormals, common single-layer trace and double-layer trace jump $-\phi$, with their distributional source representations proved in [[lem-bem-smooth-trace-and-helmholtz-layer-extension]].

## Proof

1.1 For any piecewise $H^1$ Helmholtz solution $u$ with jumps $[\gamma u]=\gamma^-u-\gamma^+u$ and $[q]=q^- -q^+$, apply the two weak Green identities of [F1] to a compactly supported smooth test $v$. The outer artificial boundary contributes zero, and the opposite orientations of the inner boundary give $\langle P_ku,v\rangle=\langle[q],v|_\Gamma\rangle_{\rm bil}-\int_\Gamma[\gamma u]\partial_nv\,dS$. The subscript indicates the complex-bilinear version of weak duality; conjugating the test converts this to the sesquilinear convention. For $u=D_k\phi$, the differentiated kernel source identity is $\langle P_kD_k\phi,v\rangle=\int_\Gamma\phi\partial_nv\,dS$. Substituting $[\gamma u]=-\phi$ from [F1] cancels these terms, leaving $\langle[q],v|_\Gamma\rangle_{\rm bil}=0$. Traces of smooth ambient tests are dense in $H^{1/2}(\Gamma)$ by the chart lift/approximation construction in [F1], so $[q]=0$ in $H^{-1/2}$. [F1, given, algebra]

2.1 For $u=S_k\lambda$, [F1] gives zero trace jump and $\langle P_kS_k\lambda,v\rangle=\lambda(v|_\Gamma)$. The identity of step 1.1 reduces to $\langle[q]-\lambda,v|_\Gamma\rangle_{\rm bil}=0$. The same density and boundedness give $[q]=\lambda$. Together with the trace assertions of [F1], this proves all four identities. [F1, step 1.1, given, algebra] ∎
