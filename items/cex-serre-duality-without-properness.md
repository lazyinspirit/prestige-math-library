---
id: cex-serre-duality-without-properness
kind: counterexample
title: "The affine line disproves the proper duality formula without properness"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "thm-qc-sheaf-affine-higher-cohomology-vanishes"]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 48.27.1: properness in global duality"
      url: https://stacks.math.columbia.edu/tag/0FVV
    - title: "Vakil 2025, 29.1: projectivity hypothesis in the coherent pairing"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement refuted

The coherent formula $\operatorname{Ext}^{d-i}_X(F,\omega_X)=H^i(X,F)^\vee$ from [[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]] holds for every smooth pure-dimensional finite-type scheme over a field, without requiring properness.

## Facts & Assumptions

**Given:** AC, a field $k$, the smooth affine line $X=\operatorname{Spec}k[t]$, $d=1$, $F=\mathcal O_X$, and $\omega_X=\Omega^1_{X/k}=\mathcal O_X\,dt$.

[F1] Quasi-coherent sheaves on an affine scheme have no positive cohomology ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]]).

## Counterexample

1.1 The scheme is smooth and pure of dimension one; its local rings are regular and hence CM. It is not proper: after base change to $\mathbb A^1_x$, the closed subscheme $V(xt-1)\subset\mathbb A^1_x\times\mathbb A^1_t$ has image $D(x)$ under projection, which is not closed. Thus the structure map is not universally closed. [given, algebra]

2.1 By [F1], $H^1(X,F)=0$, whereas $\operatorname{Ext}_X^0(F,\omega_X)=\Gamma(X,\omega_X)=k[t]dt\ne0$. The asserted formula in degree $i=1$ would equate these nonzero and zero spaces. This refutes it while retaining smoothness and CM. On an affine nonproper scheme a local dualizing complex still exists; it does not carry the proper global trace-duality representation of the A theorem. The counterexample uses the precise pairing refuted, with ordinary cohomology rather than a compact-support replacement. [F1, step 1.1, algebra] ∎
