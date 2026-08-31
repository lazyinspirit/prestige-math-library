---
id: cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity
kind: corollary
title: "If $1 < p < \\infty$ and $q$ is conjugate to $p$, then $f*g$ is continuous and vanishes at infinity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-young-convolution-inequality, thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, thm-c-c-rn-is-dense-in-l-p-of-rn, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]
landmark: false
proof_strategy: "In the conjugate case Young puts $f*g$ in $L^\\infty$, and the translation-continuity theorem makes the convolution map continuous under shifts. Vanishing at infinity follows by first proving it for compactly supported continuous data and then approximating by the density results already built."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 < p < \infty$ and let $q$ be the conjugate exponent. If
$f \in L^p(\mathbb{R}^n)$ and $g \in L^q(\mathbb{R}^n)$, then the convolution
$f*g$ has a continuous representative in $C_0(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 < p < \infty$, its conjugate exponent $q$, and functions $f \in L^p(\mathbb{R}^n)$ and $g \in L^q(\mathbb{R}^n)$.

[L1] Translation is continuous in finite $L^p$ ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

[L2] Young's inequality gives the $L^\infty$ bound in the conjugate case ([[thm-young-convolution-inequality]]).

[L3] $L^1$ convolution is defined almost everywhere, and $C_c(\mathbb{R}^n)$ is dense in finite $L^p$ ([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]], [[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

[L4] The support of a convolution lies in the closure of the support sumset ([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]).

## Proof

**Proof technique:** direct.

1.1 For every $x,h\in\mathbb{R}^n$, [L1, L2, given, algebra] $$ |(f*g)(x-h)-(f*g)(x)| \le \int |f(x-h-y)-f(x-y)|\,|g(y)|\,dy \le \|\tau_h f-f\|_p\,\|g\|_q. $$ By [L1], the right-hand side tends to $0$ as $h\to0$, uniformly in $x$. So the pointwise-defined convolution is uniformly continuous. [L1, L2, given, algebra]

2.1 By [L3], choose $u,v \in C_c(\mathbb{R}^n)$ with [L2, L3, L4, step 1.1, choose, algebra] $\|f-u\|_p + \|g-v\|_q$ arbitrarily small. Applying [L2] twice gives $$ \|f*g-u*v\|_\infty \le \|f-u\|_p\|g\|_q + \|u\|_p\|g-v\|_q. $$ The function $u*v$ is continuous by step 1.1 and compactly supported by [L4], so $u*v \in C_0(\mathbb{R}^n)$. [L2, L3, L4, step 1.1, choose, algebra]

3.1 Therefore $f*g$ is a uniform limit of $C_0$ functions, hence itself belongs [step 1.1, step 2.1] to $C_0(\mathbb{R}^n)$. Together with step 1.1, this proves that $f*g$ has a continuous representative vanishing at infinity. [step 1.1, step 2.1] ∎
