---
id: ex-pe18-insufficient-damping-near-resonant-cavity
kind: example
title: A weakly damped truncated layer can produce a resonant cavity response
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe18-cartesian-complex-stretch-pml, thm-pe18-finite-pml-dirichlet-reflection]
proof_strategy: direct
generation:
  role: example
axiom_use: "No axiom is used; the Green function and its resonant limit are computed for a one-dimensional interval."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §2"
      url: "https://arxiv.org/pdf/2108.05348"
---

## Example

Consider the one-dimensional interval $0\le x\le L$ with Dirichlet endpoints, source point $x_0=L/2$, and a PML beginning at $x_0$, so $X(x_0)=x_0$ and $X(L)=L+iS$ with $S>0$. For $kL=(2m+1)\pi$, $m\in\mathbb N_0$, the Green function of $-d^2/dX^2-k^2$ at the source has magnitude
$$|G(x_0,x_0)|=\frac{\coth(kS)}{k}\sim\frac1{k^2S}\quad(S\downarrow0).$$
When $S=0$, $\sin(kx)$ is a nonzero homogeneous Dirichlet mode, so the real-frequency problem is resonant. This is a single interval example, not a universal stability claim about PMLs.

## Facts & Assumptions

**Given:** $L,k>0$, integer $m\ge0$, the stretched coordinate [F1], and the scalar Helmholtz Green equation [A1].

[F1] [[def-pe18-cartesian-complex-stretch-pml]]: the coordinate is $X=x+iS(x)$ with $S\ge0$ and $X(x_0)=x_0$.

[F2] [[thm-pe18-finite-pml-dirichlet-reflection]]: a finite Dirichlet-terminated layer has two-way reflected amplitude magnitude $e^{-2qS}$ for a propagating mode $q>0$.

[A1] On a stretched interval of endpoint $X_L$ with Dirichlet conditions, the Green function solves $(-d^2/dX^2-k^2)G(X,X')=\delta_{X'}$ and has derivative jump $\partial_XG(X'+,X')-\partial_XG(X'-,X')=-1$.

## Verification

**Given:** The interval data and [F1]–[F2], [A1].

1.1 Parameterize the stretched contour by the real physical coordinate $x\in[0,L]$. For a source at $x'$, set $x_<=\min(x,x')$, $x_>=\max(x,x')$, and $X_<=X(x_<)$, $X_>=X(x_>)$. The functions $y_1(X)=\sin(kX)$ and $y_2(X)=\sin(k(X_L-X))$ solve the homogeneous equation and vanish at the respective endpoints; their Wronskian in the order $y_1y_2'-y_1'y_2$ is the constant $-k\sin(kX_L)$. Thus $$G(x,x')=\frac{\sin(kX_<)\sin(k(X_L-X_>))}{k\sin(kX_L)}$$ has the endpoint conditions and solves the homogeneous equation away from $x=x'$. The real parameter orders the two sides of the contour, and the one-sided derivatives in the contour coordinate satisfy $\left.\partial_XG\right|_{x\to x'^+}-\left.\partial_XG\right|_{x\to x'^-}=-1$, as required by [A1]. [F1, A1, algebra]


2.1 At $X'=x_0=L/2$, $X_L=L+iS$, and $kL=(2m+1)\pi$, the numerator magnitude is $\cosh(kS)$ and the denominator magnitude is $k\sinh(kS)$; this follows from $\sin((m+1/2)\pi)=(-1)^m$ and $|\sin(n\pi+it)|=\sinh(t)$ for integer $n$ and $t>0$. Hence $|G(x_0,x_0)|=\coth(kS)/k$. Since $\sinh t\sim t$ and $\cosh t\to1$ as $t\downarrow0$, this is asymptotic to $1/(k^2S)$. At $S=0$, $\sin(kL)=0$ and $\sin(kx)$ satisfies both homogeneous Dirichlet conditions, proving resonance. The same damping parameter in [F2] gives round-trip reflected amplitude $e^{-2kS}\to1$, so the growing cavity response accompanies vanishing attenuation. [given, F2, step 1.1, algebra] ∎

