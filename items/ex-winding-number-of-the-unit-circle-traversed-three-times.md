---
id: ex-winding-number-of-the-unit-circle-traversed-three-times
kind: example
title: "The unit circle traversed three times has index $3$ at every interior point"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-winding-number-circle-traversed-k-times, cor-winding-number-is-the-normalized-argument-increment, def-winding-number-closed-complex-contour, def-continuous-argument-and-holomorphic-logarithm-branches, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

Let $\gamma(t)=\exp(3it)$ for $t\in[0,2\pi]$. Then $\gamma$ is a closed complex
contour with trace the unit circle $\{|z|=1\}$, and

$$n(\gamma,z)=3\ \ \text{for }|z|<1,\qquad n(\gamma,z)=0\ \ \text{for }|z|>1.$$

The function $\lambda(t)=3it$ is a continuous logarithm of $\gamma-0$ along
$\gamma$, its imaginary part $\theta(t)=3t$ is a continuous argument running from
$0$ to $6\pi$, and $(\theta(2\pi)-\theta(0))/(2\pi)=3$ recovers the index at the
origin.

## Facts & Assumptions

**Given:** The contour $\gamma(t)=\exp(3it)$ on $[0,2\pi]$.

[L1] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $\gamma_k(t)=a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with $n(\gamma_k,z)=k$ for $|z-a|<r$ and $n(\gamma_k,z)=0$ for $|z-a|>r$; for $k\ne0$ its trace is $\{z:|z-a|=r\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L2] For a closed complex contour $\gamma$, a point $p$ off its trace and a continuous argument $\theta$ of $\gamma-p$ along $\gamma$, $n(\gamma,p)=(\theta(b)-\theta(a))/(2\pi)$ ([[cor-winding-number-is-the-normalized-argument-increment]]).

[L3] $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L4] A continuous logarithm of $\gamma-p$ along $\gamma$ is a continuous $\lambda$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$, and its continuous argument is $\operatorname{Im}\lambda$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L5] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); for $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $a=0$, $r=1$ and $k=3$: the contour is $\gamma$, it is a closed complex contour with trace $\{|z|=1\}$, and $n(\gamma,z)=3$ for $|z|<1$ while $n(\gamma,z)=0$ for $|z|>1$. [given, L1, L3]

1.2 The map $\lambda(t)=3it$ is continuous on $[0,2\pi]$ and satisfies $\exp(\lambda(t))=\exp(3it)=\gamma(t)-0$, so it is a continuous logarithm of $\gamma-0$ along $\gamma$ in the sense of [L4], with continuous argument $\theta(t)=\operatorname{Im}(3it)=3t$ by [L5]. [given, L4, L5]

2.1 The argument increment is $\theta(2\pi)-\theta(0)=6\pi-0=6\pi$, so [L2] gives $n(\gamma,0)=6\pi/(2\pi)=3$, the same value step 1.1 assigns at the interior point $0$. [step 1.1, step 1.2, L2] ∎
