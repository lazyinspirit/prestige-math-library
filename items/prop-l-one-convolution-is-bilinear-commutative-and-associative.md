---
id: prop-l-one-convolution-is-bilinear-commutative-and-associative
kind: proposition
title: "Convolution on $L^1(\\mathbb{R}^n)$ is bilinear, commutative, and associative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections, thm-integrals-are-invariant-under-measure-preserving-maps, def-convolution-of-two-functions-on-rn, def-countable-choice]
landmark: false
proof_strategy: "Bilinearity is pointwise linearity of the integral once absolute convergence is known. Commutativity is the change of variables $y \\mapsto x-y$, and associativity is a three-variable Fubini rearrangement justified by absolute integrability."
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (prop-l-one-convolution-is-bilinear-commutative-and-associative). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice. Convolution on $L^1(\mathbb{R}^n)$, for $n\ge1$, is bilinear, commutative, and associative.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, and functions in $L^1(\mathbb{R}^n)$ for which the displayed algebra laws are to be checked.

[L1] $L^1$ convolution exists almost everywhere and obeys the $L^1$ bound ([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

[L2] Tonelli and Fubini justify rearranging absolutely integrable iterated integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L3] Convolution is the integral from [[def-convolution-of-two-functions-on-rn]].

[L4] Translation and reflection preserve Lebesgue measure, and integrals are invariant under measure-preserving maps ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

## Proof

**Proof technique:** direct.

1.1 Bilinearity follows from linearity of the integral in [L3] once [L1]
guarantees absolute convergence for almost every $x$. [L1, L3, given, algebra]

1.2 For commutativity, fix $x$ where convolution is defined and use the measure-preserving substitution $u=x-y$ from [L4]: $$ (f*g)(x) = \int f(x-y)g(y)\,dy = \int g(x-u)f(u)\,du = (g*f)(x). $$ The change of variables also preserves absolute integrability, so the two sides agree almost everywhere as $L^1$ classes. [L1, L3, L4, algebra]

1.3 For associativity, Tonelli and translation invariance give $$\iiint |f(x-y-z)g(z)h(y)|\,dx\,dy\,dz=\|f\|_1\|g\|_1\|h\|_1<\infty.$$ Thus for almost every $x$ the double integral is absolutely convergent; [L2] permits interchange of $y,z$, and the two orders yield $((f*g)*h)(x)$ and $(f*(g*h))(x)$ respectively. Representative independence follows from [L1]. [L1, L2, L4, algebra]

2.1 Therefore convolution is bilinear, commutative, and associative on $L^1(\mathbb{R}^n)$ under the stated Countable Choice. [step 1.1, step 1.2, step 1.3] ∎
