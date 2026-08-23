---
id: thm-real-gamma-one-half-wallis-proof
kind: theorem
title: '$\Gamma(1/2)=\sqrt\pi$ by Wallis''s product'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, cor-gautschi-inequality-for-the-real-gamma-function, cor-central-binomial-coefficient-asymptotic-from-wallis, thm-binomial-closed-formula, thm-algebra-of-limits, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.3"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

$\Gamma(1/2)=\sqrt\pi$.

## Facts & Assumptions

**Given:** Positive integers $n$ tending to infinity.

[F1] For $x>0$ and $0\le s\le1$, $x^{1-s}\le\Gamma(x+1)/\Gamma(x+s)\le(x+1)^{1-s}$ ([[cor-gautschi-inequality-for-the-real-gamma-function]]).

[F2] If $a_n=\binom{2n}{n}/4^n$, then $\sqrt{\pi n}\,a_n\to1$ ([[cor-central-binomial-coefficient-asymptotic-from-wallis]]).

[F3] For naturals $k\le n$, $\binom nk\,k!\,(n-k)!=n!$ ([[thm-binomial-closed-formula]]).

[F4] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]).

## Proof

**Proof technique:** direct.

1.1 Iterating [F4] gives $\Gamma(n+1/2)=\Gamma(1/2)\prod_{k=0}^{n-1}(k+1/2)=((2n)!/(4^nn!))\Gamma(1/2)$, with the empty product valid at $n=0$. [F4, algebra]

1.2 Apply [F1] with $x=n$ and $s=1/2$. After inversion, $\sqrt{n/(n+1)}\le\sqrt n\,\Gamma(n+1/2)/n!\le1$, so this middle sequence tends to $1$. [F1]

2.1 By step 1.1 and [F3], the middle sequence is $\Gamma(1/2)\sqrt n\binom{2n}{n}/4^n$. Fact [F2] makes its limit $\Gamma(1/2)/\sqrt\pi$, while step 1.2 makes the same limit $1$. [step 1.1, step 1.2, F2, F3, algebra]

3.1 Positivity of Gamma and uniqueness of limits therefore give $\Gamma(1/2)=\sqrt\pi$. [step 2.1] ∎

## Remarks

This proof uses Gautschi and Wallis. The Gaussian-integral proof [[cor-real-gamma-one-half-is-root-pi]] is logically independent of it.
