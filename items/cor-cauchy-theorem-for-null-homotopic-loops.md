---
id: cor-cauchy-theorem-for-null-homotopic-loops
kind: corollary
title: "A closed contour path-homotopic to a constant loop has zero integral against every holomorphic function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-homotopy-invariance-of-holomorphic-line-integrals,
       def-homotopy-relative-and-path-homotopy,
       cor-contour-integral-of-a-constant-is-an-endpoint-increment,
       def-complex-contours-reversal-concatenation-and-closedness]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §5"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be
holomorphic, and let $\gamma:[0,1]\to\Omega$ be a closed rectifiable contour. If
$\gamma$ is path-homotopic relative to the endpoints to a constant loop in
$\Omega$, then

$$\int_\gamma f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** An open set $\Omega$, a holomorphic function $f:\Omega\to\mathbb C$, a closed rectifiable contour $\gamma:[0,1]\to\Omega$, and a constant loop $c:[0,1]\to\Omega$ to which $\gamma$ is path-homotopic relative to the endpoints.

[L1] A path homotopy relative to the endpoints keeps the two endpoint values fixed throughout the homotopy ([[def-homotopy-relative-and-path-homotopy]]).

[L2] Endpoint-fixed homotopic rectifiable paths have equal holomorphic line integrals ([[thm-homotopy-invariance-of-holomorphic-line-integrals]]).

[L3] The contour integral of a constant integrand over any contour is that constant times the endpoint displacement ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

[L4] A closed contour has the same initial and terminal point, and constant paths are legitimate contours ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Proof

**Proof technique:** direct.

1.1 The Given and [L1] place $\gamma$ and the constant loop $c$ under the hypotheses of [L2]. Therefore $$\int_\gamma f(z)\,dz=\int_c f(z)\,dz.$$ [given, L1, L2]

2.1 Because $c$ is constant, one has $f(c(t))=f(c(0))$ for every $t$. Since [L4] makes $c$ a closed contour, [L3] gives $$\int_c f(z)\,dz=\int_c f(c(0))\,dz=f(c(0))\bigl(c(1)-c(0)\bigr)=0.$$ Combining this with step 1.1 proves $\int_\gamma f(z)\,dz=0$. [step 1.1, L3, L4, algebra] ∎
