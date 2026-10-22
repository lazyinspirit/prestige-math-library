---
id: def-qftx-local-wavefront-set
kind: definition
title: Local Fourier definition of a wavefront set
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-distributions-on-smooth-manifolds
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A.5–A.6, localized Fourier rapid-decay definition of the wavefront set.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–8, Section 2.1, local Fourier definition.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $\Omega\subseteq\mathbb R^n$ be open and let $u\in\mathcal D'(\Omega)$, using the local distribution convention of [[def-qftx-distributions-on-smooth-manifolds]]. For $p\in\Omega$ and $\xi\in\mathbb R^n\setminus\{0\}$, call $(p,\xi)$ regular for $u$ if there are $\chi\in C_c^\infty(\Omega)$ with $\chi=1$ near $p$ and an open cone $\Gamma\subseteq\mathbb R^n\setminus\{0\}$ containing $\xi$ such that for every integer $N\ge0$,
$$ \sup_{\eta\in\Gamma}(1+|\eta|)^N\left|\left\langle u,\chi(x)e^{-2\pi i x\cdot\eta}|dx^1\cdots dx^n|\right\rangle\right|<\infty. $$
The local wavefront set $\operatorname{WF}_\Omega(u)$ is the complement of these regular pairs in $T^*\Omega\setminus0$, with the standard cotangent coordinates $(p,\xi)$. A cone is invariant under multiplication by positive scalars. This is a chart-level definition; this item makes no assertion about its behavior under a change of coordinates.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]
