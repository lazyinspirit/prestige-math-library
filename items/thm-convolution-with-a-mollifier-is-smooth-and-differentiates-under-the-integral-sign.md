---
id: thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
kind: theorem
title: "Convolution with a mollifier is smooth, and derivatives pass under the integral sign"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, thm-differentiation-under-the-integral-sign, def-ck-and-multi-index-notation-in-several-variables]
landmark: false
proof_strategy: "Fix $f \\in L^1_{\\mathrm{loc}}$ and differentiate the kernel variable under the integral sign. Every derivative of the mollifier remains integrable and compactly supported, so the integral-sign differentiation theorem applies repeatedly."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Let $f : \mathbb{R}^n \to \mathbb{C}$ be locally integrable, let
$\varphi \in C_c^\infty(\mathbb{R}^n)$ have mass $1$, and let
$\varphi_\varepsilon$ be the associated mollifier. Then for every
$\varepsilon > 0$, the convolution

$$ (f*\varphi_\varepsilon)(x) := \int_{\mathbb{R}^n} f(y)\varphi_\varepsilon(x-y)\,dy $$

is smooth, and for every multi-index $\alpha$,

$$ \partial^\alpha(f*\varphi_\varepsilon) = f*(\partial^\alpha \varphi_\varepsilon). $$

## Facts & Assumptions

**Given:** A locally integrable function $f$, a unit-mass smooth bump, and $\varepsilon > 0$.

[L1] The mollifier family is defined in [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]].

[L2] Differentiation under the integral sign is available ([[thm-differentiation-under-the-integral-sign]]).

[L3] Multi-index notation and Euclidean smoothness are fixed in [[def-ck-and-multi-index-notation-in-several-variables]].

## Proof

**Proof technique:** direct.

1.1 Fix $x_0 \in \mathbb{R}^n$. Because $\varphi_\varepsilon$ has compact [L1, L3, given, choose, algebra] support, there are $r>0$ and a compact set $K$ such that $\varphi_\varepsilon(x-y)=0$ and $\partial^\alpha\varphi_\varepsilon(x-y)=0$ whenever $|x-x_0|<r$ and $y \notin K$. Local integrability of $f$ therefore makes $|f|\,\mathbf{1}_K$ integrable, so $y \mapsto f(y)\varphi_\varepsilon(x-y)$ and $y \mapsto f(y)\partial^\alpha\varphi_\varepsilon(x-y)$ are integrable for $|x-x_0|<r$. [L1, L3, given, choose, algebra]

2.1 Fix a coordinate index $j$ and a point $x$ with $|x-x_0|<r/2$. For [L2, step 1.1, algebra] $|t|<r/2$, the point $x+te_j$ still satisfies $|x+te_j-x_0|<r$, so $$ G(y,t):=f(y)\varphi_\varepsilon(x+te_j-y) $$ is integrable in $y$. Because $\partial_j\varphi_\varepsilon$ is continuous with compact support, some constant $C_j$ satisfies $$ |\partial_j\varphi_\varepsilon(x+te_j-y)| \le C_j\,\mathbf{1}_K(y) \qquad (|t|<r/2). $$ Hence $$ |\partial_t G(y,t)| = |f(y)\partial_j\varphi_\varepsilon(x+te_j-y)| \le C_j |f(y)|\,\mathbf{1}_K(y), $$ and the right-hand side is integrable by step 1.1. Applying [L2] on the interval $(-r/2,r/2)$ gives $$ \partial_j(f*\varphi_\varepsilon)(x) = \int f(y)\,\partial_j\varphi_\varepsilon(x-y)\,dy = \bigl(f*(\partial_j\varphi_\varepsilon)\bigr)(x). $$ Since $x_0$ was arbitrary, this holds for every $x$. [L2, step 1.1, algebra]

3.1 Repeating step 2.1 for higher derivatives and using [L3] yields the general [L2, L3, step 2.1, induction] multi-index formula $\partial^\alpha(f*\varphi_\varepsilon)=f*(\partial^\alpha\varphi_\varepsilon)$. Hence $f*\varphi_\varepsilon$ is smooth. [L2, L3, step 2.1, induction] ∎
