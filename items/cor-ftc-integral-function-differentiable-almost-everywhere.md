---
id: cor-ftc-integral-function-differentiable-almost-everywhere
kind: corollary
title: "Assuming Countable Choice, the integral function of a Riemann-integrable function is Lipschitz and differentiable almost everywhere, with derivative equal to the integrand there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-integral-function-is-lipschitz, thm-lebesgue-criterion, thm-ftc-first-part]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I & II, Section 5.3"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$, let $f:[a,b]\to\mathbb R$ be Riemann integrable, and let

$$F(x):=\int_a^x f.$$

Then $F$ is Lipschitz on $[a,b]$. If $D$ is the set of discontinuities of $f$, then $D$ has measure zero and

$$F'(x)=f(x)\qquad(x\in[a,b]\setminus D).$$

Thus the set of points where $F'$ fails to exist or differs from $f$ is contained in a set of measure zero. At $a$ and $b$, the displayed derivative is the relative one-sided derivative on $[a,b]$.

## Facts & Assumptions

**Given:** Reals $a<b$, an integrable $f:[a,b]\to\mathbb R$, its integral function $F$, and Countable Choice.

[L1] An integrable $f$ is bounded, and if $|f|\le K$ then its integral function satisfies $|F(y)-F(x)|\le K|y-x|$ ([[thm-the-integral-function-is-lipschitz]]).

[L2] Assuming Countable Choice, a bounded function is Riemann integrable if and only if its discontinuity set has measure zero ([[thm-lebesgue-criterion]]).

[L3] If $f$ is integrable and continuous at $c\in[a,b]$, then its integral function is differentiable at $c$ and $F'(c)=f(c)$, with relative endpoint derivatives ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** direct.

1.1 Integrability supplies a bound $|f|\le K$, so $F$ is Lipschitz by [L1]. [given, L1]

1.2 The discontinuity set $D$ has measure zero by the forward implication of [L2], whose stated proof is the sole use of Countable Choice. [given, L2]

2.1 Every $x\in[a,b]\setminus D$ is a continuity point of $f$, so [L3] gives $F'(x)=f(x)$ there, including the relative derivative at an endpoint outside $D$. [step 1.2, L3]

3.1 Hence every point at which the derivative conclusion fails lies in $D$, and that containing set has measure zero. [step 1.2, step 2.1] ∎
