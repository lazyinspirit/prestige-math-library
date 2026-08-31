---
id: prop-l-one-convolution-is-bilinear-commutative-and-associative
kind: proposition
title: "Convolution on $L^1(\\mathbb{R}^n)$ is bilinear, commutative, and associative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-convolution-of-two-functions-on-rn]
landmark: false
proof_strategy: "Bilinearity is pointwise linearity of the integral once absolute convergence is known. Commutativity is the change of variables $y \\mapsto x-y$, and associativity is a three-variable Fubini rearrangement justified by absolute integrability."
verification:
  audited: 2026-09-01
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

Convolution on $L^1(\mathbb{R}^n)$ is bilinear, commutative, and associative.

## Facts & Assumptions

**Given:** Functions in $L^1(\mathbb{R}^n)$ for which the displayed algebra laws
are to be checked.

[L1] $L^1$ convolution exists almost everywhere and obeys the $L^1$ bound
([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

[L2] Tonelli and Fubini justify rearranging absolutely integrable iterated
integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L3] Convolution is the integral from [[def-convolution-of-two-functions-on-rn]].

## Proof

**Proof technique:** direct.

1.1 Bilinearity follows from linearity of the integral in [L3] once [L1]
guarantees absolute convergence for almost every $x$. [L1, L3, given, algebra]

1.2 For commutativity, fix $x$ where convolution is defined and change [L1, L2, L3, algebra]
variables $u := x-y$:
$$ (f*g)(x) = \int f(x-y)g(y)\,dy = \int g(x-u)f(u)\,du = (g*f)(x). $$
Associativity is similar: [L2] applies to
$|f(x-y-z)g(z)h(y)|$, so one may reorder the three integrations and obtain
$((f*g)*h)(x)=(f*(g*h))(x)$ almost everywhere. [L1, L2, L3, algebra]

2.1 Therefore convolution is bilinear, commutative, and associative on [step 1.1, step 1.2]
$L^1(\mathbb{R}^n)$. [step 1.1, step 1.2] ∎
