---
id: ex-continuous-argument-along-a-spiralling-contour
kind: example
title: "A continuous argument computed along a spiralling contour"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-continuous-argument-and-holomorphic-logarithm-branches, thm-continuous-logarithms-exist-along-a-contour, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, def-complex-exponential, def-natural-logarithm, def-complex-contours-reversal-concatenation-and-closedness, cor-piecewise-c1-paths-have-additive-speed-integral-length, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-conjugate-real-imaginary-part-and-modulus, thm-sine-and-cosine-derivatives, thm-natural-logarithm-laws, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Let $\gamma(t)=(1+t)\exp(2\pi it)$ for $t\in[0,1]$ and let $p=0$. Then $\gamma$ is
a complex contour with $0\notin\gamma^\ast$, and

$$\lambda(t)=\log(1+t)+2\pi it$$

is a continuous logarithm of $\gamma-0$ along $\gamma$, with continuous argument
$\theta(t)=2\pi t$ increasing by $2\pi$. Consequently

$$\int_\gamma\frac{dz}{z}=\lambda(1)-\lambda(0)=\log2+2\pi i.$$

The contour is **not closed**: $\gamma(0)=1$ and $\gamma(1)=2$. So no winding
number is defined for it, and the increment $\log2+2\pi i$ is not an element of
$2\pi i\mathbb Z$. This is exactly the gap between the logarithm-increment
identity, which holds for every contour missing $p$, and the integrality
statement, which needs closedness.

## Facts & Assumptions

**Given:** The contour $\gamma(t)=(1+t)\exp(2\pi it)$ on $[0,1]$ and the point $p=0$.

[L1] A continuous logarithm of $\gamma-p$ along $\gamma$ is a continuous $\lambda$ with $\exp(\lambda(t))=\gamma(t)-p$ for every $t$, and its continuous argument is $\operatorname{Im}\lambda$ ([[def-continuous-argument-and-holomorphic-logarithm-branches]], [[def-complex-exponential]]).

[L2] For a complex contour $\gamma$ and $p\notin\gamma^\ast$ there is a continuous logarithm of $\gamma-p$ along $\gamma$, and any two differ by a constant in $2\pi i\mathbb Z$ ([[thm-continuous-logarithms-exist-along-a-contour]]).

[L3] For a complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$ and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]]).

[L4] For $x>0$, $\log x$ is the unique real $y$ with $\exp y=x$ ([[def-natural-logarithm]]); the natural logarithm is continuous and strictly increasing on $(0,\infty)$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).

[L5] A complex contour is a rectifiable path, and it is closed when its two endpoint values agree ([[def-complex-contours-reversal-concatenation-and-closedness]]); a continuous path differentiable with a continuous derivative on each piece of a partition is rectifiable ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L6] $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]), and for real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ with $|\exp(x+iy)|=e^x$; in particular $\exp(2\pi i)=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L7] For $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L8] $\cos$ and $\sin$ are differentiable with $\cos'=-\sin$ and $\sin'=\cos$ ([[thm-sine-and-cosine-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Writing $\gamma(t)=(1+t)\cos(2\pi t)+i(1+t)\sin(2\pi t)$ by [L6], the path is differentiable in $t$ with a continuous derivative by [L8], hence rectifiable by [L5]; and $|\gamma(t)|=(1+t)\,|\exp(2\pi it)|=1+t\ge1$ by [L6], so $0$ does not lie on the trace. [given, L5, L6, L8]

1.2 The map $\lambda(t)=\log(1+t)+2\pi it$ is continuous on $[0,1]$, and by [L4] and [L6], $\exp(\lambda(t))=e^{\log(1+t)}\exp(2\pi it)=(1+t)\exp(2\pi it)=\gamma(t)-0$; so $\lambda$ is a continuous logarithm of $\gamma-0$ along $\gamma$ in the sense of [L1], with continuous argument $\theta(t)=\operatorname{Im}\lambda(t)=2\pi t$ by [L7]. [given, L1, L4, L6, L7]

2.1 By [L3] and step 1.2, $\int_\gamma dz/z=\lambda(1)-\lambda(0)=\bigl(\log2+2\pi i\bigr)-\bigl(\log1+0\bigr)=\log2+2\pi i$ using [L4]; and $\theta(1)-\theta(0)=2\pi$. By [L2] the value does not depend on which continuous logarithm is taken. [step 1.1, step 1.2, L2, L3, L4]

3.1 The endpoint values are $\gamma(0)=1$ and $\gamma(1)=2\exp(2\pi i)=2$ by [L6], so $\gamma$ is not closed by [L5] and no winding number is defined for it; consistently, $\log2+2\pi i$ is not an element of $2\pi i\mathbb Z$ because $\log2\ne0$ by [L4]. [step 2.1, L4, L5, L6] ∎
