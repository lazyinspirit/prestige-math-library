---
id: cor-gautschi-inequality-for-the-real-gamma-function
kind: corollary
title: 'Gautschi''s inequality for the real Gamma function'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, thm-real-gamma-is-log-convex, thm-real-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.5(c)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

For $x>0$ and $0\le s\le1$, $x^{1-s}\le\Gamma(x+1)/\Gamma(x+s)\le(x+1)^{1-s}$.

For $0<s<1$ both inequalities are strict. At $s=0$ the lower inequality is equality, and at $s=1$ both are equalities.

## Facts & Assumptions

**Given:** A real $x>0$ and $0\le s\le1$.

[F1] The real Gamma function is strictly log-convex on $(0,\infty)$ ([[thm-real-gamma-is-log-convex]]).

[F2] For every $x>0$, $\Gamma(x+1)=x\Gamma(x)$ ([[thm-real-gamma-functional-equation]]).

## Proof

**Proof technique:** direct.

1.1 Log-convexity between $x$ and $x+1$ gives $\Gamma(x+s)\le\Gamma(x)^{1-s}\Gamma(x+1)^s=x^s\Gamma(x)$, strictly when $0<s<1$. [given, F1]

1.2 Since $x+1=s(x+s)+(1-s)(x+s+1)$, log-convexity gives $\Gamma(x+1)\le\Gamma(x+s)^s\Gamma(x+s+1)^{1-s}=(x+s)^{1-s}\Gamma(x+s)\le(x+1)^{1-s}\Gamma(x+s)$. [given, F1]

2.1 Divide the inequalities in steps 1.1 and 1.2 by positive Gamma values and use [F2]. This gives the displayed bounds and the stated strictness. Direct substitution shows the lower equality at $s=0$ and both equalities at $s=1$. [step 1.1, step 1.2, F2, algebra] ∎
