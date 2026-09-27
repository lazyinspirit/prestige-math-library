---
id: thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound
kind: theorem
title: "If $f,g \\in L^1(\\mathbb{R}^n)$, then $f*g$ exists almost everywhere, belongs to $L^1$, and $\\|f*g\\|_1 \\le \\|f\\|_1 \\|g\\|_1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-completion-measurable-functions-have-base-measurable-representatives, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, lem-convolution-is-independent-of-the-chosen-borel-representatives, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-integrals-are-invariant-under-measure-preserving-maps, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integral-triangle-inequality]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Assume countable choice $\mathrm{AC}_\omega$. If $f,g \in L^1(\mathbb{R}^n)$, then $f*g$ exists for almost every
$x \in \mathbb{R}^n$, belongs to $L^1(\mathbb{R}^n)$, and satisfies

$$ \|f*g\|_1 \le \|f\|_1\|g\|_1. $$

## Facts & Assumptions

**Given:** Countable choice and functions $f,g \in L^1(\mathbb{R}^n)$.

[L0] Under countable choice, completed-Lebesgue measurable functions have Borel representatives almost everywhere ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]], [[def-countable-choice]]). Apply this to real and imaginary parts for complex functions.

[L1] The Borel-representative integrand is measurable and representative independent ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]], [[lem-convolution-is-independent-of-the-chosen-borel-representatives]]).

[L2] Tonelli and Fubini apply on sigma-finite product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L3] The integral triangle inequality is available ([[thm-integral-triangle-inequality]]).

[L4] Lebesgue measure is translation invariant, and nonnegative integrals are invariant under measure-preserving maps ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

## Proof

**Proof technique:** direct.

1.1 Use the stated countable choice and [L0] to choose Borel representatives $\tilde f,\tilde g$ of $f,g$ and define [L0, L1, L2, L4, given, choose, algebra]
$$ H(x,y) := |\tilde f(x-y)|\,|\tilde g(y)|. $$ By [L1], $H$ is measurable on $\mathbb{R}^{2n}$. For each $y$, $$ \int_{\mathbb{R}^n} H(x,y)\,dx = |\tilde g(y)| \int_{\mathbb{R}^n} |\tilde f(x-y)|\,dx = \|\tilde f\|_1\,|\tilde g(y)| $$ by [L4]. [L1, L2, L4, given, algebra]

2.1 Integrating the identity from step 1.1 in $y$ and applying [L2] gives [L2, step 1.1, algebra]
$$ \iint_{\mathbb{R}^{2n}} H(x,y)\,dx\,dy = \|\tilde f\|_1\|\tilde g\|_1 < \infty. $$ Hence for almost every $x$, the section $y \mapsto \tilde f(x-y)\tilde g(y)$ is absolutely integrable, so $(f*g)(x)$ is defined there. [L2, step 1.1, algebra]

3.1 For those $x$, [L1, L2, L3, step 2.1, algebra]
$$ |(f*g)(x)| \le \int |\tilde f(x-y)\tilde g(y)|\,dy $$ by [L3]. Another application of [L2] then yields $$ \|f*g\|_1 \le \iint |\tilde f(x-y)|\,|\tilde g(y)|\,dy\,dx = \|f\|_1\|g\|_1. $$ By [L1], the resulting $L^1$ class is independent of the chosen Borel representatives. [L1, L2, L3, step 2.1, algebra] ∎
