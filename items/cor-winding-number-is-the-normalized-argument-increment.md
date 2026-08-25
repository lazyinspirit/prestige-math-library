---
id: cor-winding-number-is-the-normalized-argument-increment
kind: corollary
title: "The winding number is the increment of a continuous argument divided by $2\\pi$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-winding-number-is-integer, def-winding-number-closed-complex-contour, def-continuous-argument-and-holomorphic-logarithm-branches, thm-continuous-logarithms-exist-along-a-contour, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, def-natural-logarithm, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-contours-reversal-concatenation-and-closedness, def-integers, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a closed complex contour, let
$p\notin\gamma^\ast$, let $\lambda$ be a continuous logarithm of $\gamma-p$ along
$\gamma$ and let $\theta=\operatorname{Im}\lambda$ be the associated continuous
argument ([[def-continuous-argument-and-holomorphic-logarithm-branches]]). Then

$$\operatorname{Re}\lambda(t)=\log|\gamma(t)-p|\quad(a\le t\le b), \qquad n(\gamma,p)=\frac{\theta(b)-\theta(a)}{2\pi}.$$

In particular $\theta(b)-\theta(a)$ is an integer multiple of $2\pi$, and it is
the same for every continuous argument of $\gamma-p$ along $\gamma$.

## Facts & Assumptions

**Given:** A closed complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$, a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, and $\theta=\operatorname{Im}\lambda$.

[L1] For a closed complex contour and $p$ off its trace, $n(\gamma,p)\in\mathbb Z$ ([[thm-winding-number-is-integer]]), where $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L2] A continuous logarithm of $\gamma-p$ along $\gamma$ is a continuous $\lambda$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$, its continuous argument is $\theta=\operatorname{Im}\lambda$, and any two continuous logarithms differ by a constant in $2\pi i\mathbb Z$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]], [[thm-continuous-logarithms-exist-along-a-contour]]).

[L3] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] For a complex contour $\gamma$, $p\notin\gamma^\ast$ and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]]).

[L5] For $x>0$, $\log x$ is the unique real $y$ with $\exp y=x$ ([[def-natural-logarithm]]).

[L6] For $z=a+bi$ with $a,b$ real, $\operatorname{Re}z=a$ and $\operatorname{Im}z=b$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L7] A complex contour is closed when $\gamma(a)=\gamma(b)$ ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[L8] The integers form a commutative ring ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Writing $\lambda(t)=\operatorname{Re}\lambda(t)+i\theta(t)$ as in [L6], the identity $\exp(\lambda(t))=\gamma(t)-p$ of [L2] and the modulus formula [L3] give $|\gamma(t)-p|=e^{\operatorname{Re}\lambda(t)}$, so $\operatorname{Re}\lambda(t)=\log|\gamma(t)-p|$ by [L5]. [given, L2, L3, L5, L6]

1.2 Since $\gamma$ is closed, $\gamma(b)=\gamma(a)$ by [L7], so $|\gamma(b)-p|=|\gamma(a)-p|$. [given, L7]

2.1 Steps 1.1 and 1.2 give $\operatorname{Re}\lambda(b)=\operatorname{Re}\lambda(a)$, hence $\lambda(b)-\lambda(a)=i\bigl(\theta(b)-\theta(a)\bigr)$ by [L6]. [step 1.1, step 1.2, L6]

3.1 By [L1] and [L4], $2\pi i\,n(\gamma,p)=\lambda(b)-\lambda(a)$, which step 2.1 rewrites as $i(\theta(b)-\theta(a))$; dividing by $2\pi i$ gives $n(\gamma,p)=(\theta(b)-\theta(a))/(2\pi)$. [step 2.1, L1, L4]

4.1 Since $n(\gamma,p)$ is an integer by [L1] and [L8], step 3.1 makes $\theta(b)-\theta(a)=2\pi n(\gamma,p)$ an integer multiple of $2\pi$; and replacing $\lambda$ by another continuous logarithm changes it by a constant of $2\pi i\mathbb Z$ by [L2], which cancels in the increment, so the value is the same for every continuous argument. [step 3.1, L1, L2, L8] ∎
