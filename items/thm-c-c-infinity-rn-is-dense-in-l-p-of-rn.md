---
id: thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
kind: theorem
title: "$C_c^\\infty(\\mathbb{R}^n)$ is dense in $L^p(\\mathbb{R}^n)$ for $1 \\le p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c-c-rn-is-dense-in-l-p-of-rn, prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-l-one-approximate-identities-converge-in-l-p, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]
landmark: true
proof_strategy: "Approximate first by a compactly supported continuous function, then convolve with a mollifier. The previous two items give smoothness and $L^p$ convergence, while the compact-support theorem keeps the mollified functions inside $C_c^\\infty$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$. Then $C_c^\infty(\mathbb{R}^n)$ is dense in
$L^p(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$, $\varepsilon > 0$, and $f \in L^p(\mathbb{R}^n)$.

[L1] $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ ([[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

[L2] Mollifier families are $L^1$ approximate identities, and convolution with a mollifier is smooth ([[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[L3] Approximate identities converge in $L^p$, and for bounded continuous functions the convergence is uniform on compacta ([[thm-l-one-approximate-identities-converge-in-l-p]], [[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

[L4] The support of a convolution lies in the closure of the support sumset ([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $g \in C_c(\mathbb{R}^n)$ with $\|f-g\|_p < \varepsilon/2$. [L1, L2, given, choose] Let $(\varphi_\delta)$ be a mollifier family as in [L2]. [L1, L2, given, choose]

2.1 By [L3], choose $\delta > 0$ so small that [L2, L3, L4, step 1.1, choose] $\|g*\varphi_\delta-g\|_p < \varepsilon/2$. The function $g*\varphi_\delta$ is smooth by [L2]. Because $g$ has compact support and $\varphi_\delta$ has compact support, [L4] gives compact support for $g*\varphi_\delta$, so $g*\varphi_\delta \in C_c^\infty(\mathbb{R}^n)$. [L2, L3, L4, step 1.1, choose]

3.1 Therefore [step 1.1, step 2.1, algebra] $$ \|f-g*\varphi_\delta\|_p \le \|f-g\|_p + \|g-g*\varphi_\delta\|_p < \varepsilon. $$ Hence $C_c^\infty(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$. [step 1.1, step 2.1, algebra] ∎
