---
id: ex-mollifying-the-unit-interval-indicator-at-two-scales
kind: example
title: "Mollifying $\\mathbf{1}_{[0,1]}$ at two scales"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]
landmark: false
proof_strategy: "Write the convolution with a fixed compactly supported bump at two values of $\\varepsilon$ and describe the rounded boundary layers explicitly. This is the concrete picture behind the abstract $L^p$ convergence theorem."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Example

Let $\varphi \in C_c^\infty(\mathbb{R})$ satisfy $\int \varphi = 1$ and
$\operatorname{supp}(\varphi) \subseteq [-1,1]$. For
$f := \mathbf{1}_{[0,1]}$ and $\varepsilon > 0$,

$$ (f*\varphi_\varepsilon)(x) = \int_0^1 \varphi_\varepsilon(x-y)\,dy = \int_{(x-1)/\varepsilon}^{x/\varepsilon}\varphi(u)\,du. $$

For $\varepsilon = 1/4$ and $\varepsilon = 1/8$, the graph is $0$ outside
$[-\varepsilon,1+\varepsilon]$, equals $1$ on $[\varepsilon,1-\varepsilon]$, and
has only the two rounded boundary layers of width $\varepsilon$.

## Facts & Assumptions

**Given:** A compactly supported unit-mass bump $\varphi$ and
$f=\mathbf{1}_{[0,1]}$.

[L1] Mollifier families are approximate identities
([[prop-mollifier-families-are-l-one-approximate-identities]]).

[L2] Convolution with a mollifier is smooth
([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[L3] Approximate identities converge uniformly on compacta for bounded
continuous functions; on the interior plateau here the integral is exactly one
by direct support control
([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

## Verification

**Proof technique:** direct.

1.1 The change of variables $u=(x-y)/\varepsilon$ gives the displayed formula. [L1, given, algebra]
Because $\operatorname{supp}(\varphi_\varepsilon)\subseteq[-\varepsilon,\varepsilon]$,
the convolution vanishes unless the interval $[0,1]$ meets
$[x-\varepsilon,x+\varepsilon]$, namely unless $x \in [-\varepsilon,1+\varepsilon]$. [L1, given, algebra]

2.1 If $x \in [\varepsilon,1-\varepsilon]$, then the whole support of [L1, step 1.1, algebra]
$\varphi_\varepsilon(x-\cdot)$ lies inside $[0,1]$, so
$$ (f*\varphi_\varepsilon)(x)=\int \varphi_\varepsilon = 1. $$
Near $x=0$ and $x=1$, only part of the kernel fits inside $[0,1]$, producing
the two smooth transition layers. [L1, step 1.1, algebra]

3.1 By [L2], every $f*\varphi_\varepsilon$ is smooth; the cases [L2, L3, step 2.1]
$\varepsilon=1/4$ and $\varepsilon=1/8$ differ only in the width of the two
boundary layers, with the smaller $\varepsilon$ giving the sharper transition. [L2, L3, step 2.1] ∎