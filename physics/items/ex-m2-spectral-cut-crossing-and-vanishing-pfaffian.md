---
id: ex-m2-spectral-cut-crossing-and-vanishing-pfaffian
kind: example
title: M2 Spectral Cut Crossing And Vanishing Pfaffian
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
proof_strategy: direct
axiom_strength: ZF
deps: []
dependency_roles: {}
physical_scope: >-
  Finite-dimensional mathematical spectral model only. No geometric M2
  operator or physical membrane is asserted.
proof_status: finite model proved under the explicit eta convention; no geometric family theorem is used
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§1.3, Propositions 1.26–1.31 and Remark 1.32, PDF pp. 12–14: quaternionic cut signs, Pfaffian sections, and the eta-quarter convention."
---

## Statement

For a finite quaternionic eigenvalue crossing, calculate the reciprocal Pfaffian/electric phase changes and the zero of the Pfaffian section. This shows why dividing by the amplitude is not a global phase construction. The matrix family below is not a geometric M2 Dirac family.

## Construction

Let $V=\mathbb C^2$ with its standard Hermitian metric and quaternionic structure
$$J(z_1,z_2)=(-\overline{z_2},\overline{z_1}).$$
Use the fixed complex-bilinear skew form $\omega_0(v,w)=v_1w_2-v_2w_1$. For $t\in\mathbb R$, set $D_t=tI_V$ and $K_t=t\omega_0$, whose matrix in the standard basis is
$$K_t=\begin{pmatrix}0&t\\-t&0\end{pmatrix}.$$
The eta family $D_t$ and Pfaffian form $K_t$ are explicitly paired finite data with the same one-pair crossing parameter; no infinite-dimensional identification is asserted. The finite Pfaffian line is the fixed one-dimensional space $L=\Lambda^2V^*$ with unit basis $\omega_0$, and its section is $K_t=t\omega_0$. The electric line in this model is $L^*$ with dual unit basis $\omega_0^*$; its coefficient for $t\ne0$ is defined to be the reciprocal eta-quarter phase. Thus both line fibres exist also at $t=0$, independently of whether a section vanishes.
The horizontal coordinate in the sketch is the real parameter $t$; the vertical coordinate is an eigenvalue. The two coincident eigenvalues cross zero together. No proof below relies on the drawing.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1.6,0) -- (1.6,0) node[right] {$t$};
  \draw[->] (0,-1.4) -- (0,1.4) node[above] {$\lambda$};
  \draw[thick] (-1.25,-1.1) -- (1.25,1.1);
  \node at (0.95,0.42) {$\lambda_1=\lambda_2=t$};
  \fill (0,0) circle (1.5pt);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite-dimensional family in the Construction and the source convention $\tau_D^{1/4}=\exp(2\pi i\eta_D(0)/8)$ on invertible cut charts.


## Proof

1.1 The map $J$ is antiunitary and $J^2=-I$, while $D_t$ commutes with $J$. The matrix $K_t$ is skew-symmetric, and its Pfaffian is its upper-right entry $t$. For $t\ne0$, $D_t$ has two eigenvalues equal to $t$, so $\eta_t(s)=2\operatorname{sgn}(t)|t|^{-s}$ and $\eta_t(0)=2\operatorname{sgn}(t)$. Here $|t|^{-s}=\exp(-s\log|t|)$ is entire in $s$ for each fixed $t\ne0$, so evaluation at zero requires no infinite-dimensional analytic continuation. The electric eta-quarter phase is therefore $\exp(-2\pi i\eta_t(0)/8)=-i\operatorname{sgn}(t)$. [given, algebra]

2.1 For $t\ne0$, the normalized Pfaffian section is $\operatorname{sgn}(t)$; multiplying by the eta-quarter phase gives $-i$ on both sides. Thus each phase changes by $-1$ across the one-pair crossing and the tensor transition is $+1$, in the fixed finite tensor product $L\otimes L^*\cong\mathbb C$. At $t=0$ the Pfaffian section equals zero, so its magnitude-normalized phase is undefined although the determinant/Pfaffian line itself remains defined. Division by the section therefore cannot define a global phase through the crossing. [given, step 1.1, algebra] ∎

## Scope and context

The finite calculation uses only the displayed matrices and eta convention. The separate smooth Euclidean family pairing theorem remains an unresolved analytic and gauge-descent obligation; no part of that theorem is assumed or proved here. The two constant finite lines in this example do not supply a geometric family construction, connection-compatible trivialization, or physical operator.

## Sources

- [Freed–Moore, *Setting the Quantum Integrand of M-Theory*, §1.3](https://arxiv.org/pdf/hep-th/0409135v3): source sign and eta-quarter conventions; the finite matrix calculation is supplied locally.
