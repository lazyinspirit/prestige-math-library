---
id: thm-winding-number-is-integer
kind: theorem
title: "The winding number of a closed contour is an integer"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, thm-continuous-logarithms-exist-along-a-contour, def-continuous-argument-and-holomorphic-logarithm-branches, thm-kernel-and-fibres-of-complex-exponential, def-complex-contours-reversal-concatenation-and-closedness, def-integers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1, Lemma 1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a closed complex contour and let
$p\in\mathbb C$ with $p\notin\gamma^\ast$. Then

$$n(\gamma,p)=\frac1{2\pi i}\int_\gamma\frac{dz}{z-p}\in\mathbb Z.$$

No differentiability of $\gamma$ is used: the contour is only assumed
rectifiable.

## Facts & Assumptions

**Given:** A closed complex contour $\gamma:[a,b]\to\mathbb C$ and a point $p\notin\gamma^\ast$.

[L1] For a closed complex contour $\gamma$ and $p\notin\gamma^\ast$, $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L2] For a complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$ and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]]).

[L3] For a complex contour $\gamma$ and $p\notin\gamma^\ast$ there is a continuous logarithm of $\gamma-p$ along $\gamma$ ([[thm-continuous-logarithms-exist-along-a-contour]]), namely a continuous $\lambda:[a,b]\to\mathbb C$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L4] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L5] A complex contour is closed when $\gamma(a)=\gamma(b)$ ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[L6] $\mathbb Z$ is the ring of integers ([[def-integers]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] fix a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$; then [L1] and [L2] give $2\pi i\,n(\gamma,p)=\lambda(b)-\lambda(a)$. [given, L1, L2, L3]

1.2 Since $\gamma$ is closed, $\gamma(b)=\gamma(a)$ by [L5], so $\exp(\lambda(b))=\gamma(b)-p=\gamma(a)-p=\exp(\lambda(a))$. [given, L3, L5]

2.1 By [L4] the equality of exponentials in step 1.2 gives $\lambda(b)-\lambda(a)\in2\pi i\mathbb Z$, so step 1.1 makes $2\pi i\,n(\gamma,p)$ an element of $2\pi i\mathbb Z$. [step 1.1, step 1.2, L4]

3.1 Dividing by $2\pi i$ in step 2.1 puts $n(\gamma,p)$ in $\mathbb Z$ by [L6]. The argument used only the rectifiability of $\gamma$, through [L2] and [L3], and never a derivative of $\gamma$. [step 2.1, L2, L3, L6] ∎
