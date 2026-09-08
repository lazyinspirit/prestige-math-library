---
id: thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
kind: theorem
title: "Convolution with a mollifier is smooth, and derivatives pass under the integral sign"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, thm-lebesgue-measure-is-a-complete-measure]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized measurable-input and derivative-continuity repair; local checks only, no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f : \mathbb{R}^n \to \mathbb{C}$ be locally integrable, let
$\varphi \in C_c^\infty(\mathbb{R}^n)$ have mass $1$, and let
$\varphi_\varepsilon$ be the associated mollifier. Then for every
$\varepsilon > 0$, the convolution

$$ (f*\varphi_\varepsilon)(x) := \int_{\mathbb{R}^n} f(y)\varphi_\varepsilon(x-y)\,dy $$

is smooth, and for every multi-index $\alpha$,

$$ \partial^\alpha(f*\varphi_\varepsilon) = f*(\partial^\alpha \varphi_\varepsilon). $$

## Facts & Assumptions

**Given:** Countable Choice, a locally integrable function $f$, a unit-mass smooth bump, and $\varepsilon > 0$.

[L1] The mollifier family is defined in [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]].

[L2] Differentiation under the integral sign is available ([[thm-differentiation-under-the-integral-sign]]).

[L3] Multi-index notation and Euclidean smoothness are fixed in [[def-ck-and-multi-index-notation-in-several-variables]].

[L4] Products and sums of finite measurable real functions are measurable; applying this to real and imaginary parts gives the complex version ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[L5] Dominated convergence passes pointwise limits through integrals under an integrable absolute majorant ([[thm-dominated-convergence]]).

[L6] Under Countable Choice, Lebesgue measure is a complete measure, so the integral theorems apply on its measure space ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$ and $x_0\in\mathbb R^n$. Choose $R>0$ with $\operatorname{supp}\varphi_\varepsilon\subseteq\overline B_R(0)$ and put $K=\overline B_{R+1}(x_0)$. Every derivative of $\varphi_\varepsilon$ vanishes off its support. Thus, for $x\in B_1(x_0)$, all translated kernel derivatives vanish when $y\notin K$. Each derivative $\partial^\alpha\varphi_\varepsilon$ is bounded by a finite constant $C_\alpha$, since it is continuous with compact support. [L1, L3, given, choose]

2.1 For each multi-index $\alpha$ define $F_\alpha(x)=\int f(y)\partial^\alpha\varphi_\varepsilon(x-y)\,dy$. At fixed $x$, the integrand is Lebesgue measurable by [L4], because $f$ is measurable and the translated kernel derivative is continuous. On $B_1(x_0)$ its absolute value is bounded by $C_\alpha|f|\mathbf1_K$, which is integrable by local integrability. Consequently every $F_\alpha$ is well-defined. If $x_m\to x$ in $B_1(x_0)$, continuity of the kernel gives pointwise convergence of the integrands; [L5] with this same majorant gives $F_\alpha(x_m)\to F_\alpha(x)$. Thus every $F_\alpha$ is continuous locally, hence globally since $x_0$ was arbitrary. [L4, L5, step 1.1]

3.1 Fix $x\in B_{1/2}(x_0)$ and a coordinate $j$. For $|t|<1/2$, the integrand $G(y,t)=f(y)\partial^\alpha\varphi_\varepsilon(x+te_j-y)$ is integrable, differentiable in $t$, and has measurable derivative. The derivative is bounded by $C_{\alpha+e_j}|f|\mathbf1_K$ on this interval. Therefore [L2] yields $\partial_jF_\alpha(x)=F_{\alpha+e_j}(x)$. This identity holds for every $\alpha,j,x$. [L2, L4, step 1.1, step 2.1]

4.1 Since $F_0=f*\varphi_\varepsilon$, repeated use of step 3.1 gives every ordered iterated derivative of $F_0$ as the integral of $f$ against the corresponding derivative of the smooth kernel. All these integrals are continuous by step 2.1. Hence $F_0\in C^\infty$ by [L3], and in particular $\partial^\alpha F_0=F_\alpha=f*(\partial^\alpha\varphi_\varepsilon)$ for every multi-index $\alpha$. [L3, step 2.1, step 3.1] ∎
