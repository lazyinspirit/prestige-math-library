---
id: prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules
kind: proposition
title: "A residual threshold on a normalised approximate eigenpair is exactly a normwise backward-error stopping rule"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenpair-residual-and-normwise-backward-error,
       thm-eigenpair-residual-realises-the-minimum-norm-backward-error]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Netlib Templates, Numerical Stability and Conditioning"
      url: "https://www.netlib.org/utk/people/JackDongarra/etemplates/node189.html"
---

## Statement

Let $x$ be a unit vector and let $r=Ax-\mu x$. Then for every tolerance
$\varepsilon\ge0$,

$$ \|r\|_2\le\varepsilon \qquad\Longleftrightarrow\qquad \eta(A,\mu,x)\le\varepsilon. $$

So a residual stopping rule is exactly a normwise backward-error stopping rule.

## Facts & Assumptions

**Given:** A unit vector $x$, a scalar $\mu$, a matrix $A$, and the residual $r=Ax-\mu x$.

[L1] The residual and backward error are the quantities of [[def-eigenpair-residual-and-normwise-backward-error]].

[L2] For unit $x$, the backward error equals the residual norm: $\eta(A,\mu,x)=\|Ax-\mu x\|_2$ ([[thm-eigenpair-residual-realises-the-minimum-norm-backward-error]]).

## Proof

**Proof technique:** direct.

1.1 If $\|r\|_2\le\varepsilon$, then [L2] gives $\eta(A,\mu,x)=\|r\|_2\le\varepsilon$. [L2, algebra]
1.2 If $\eta(A,\mu,x)\le\varepsilon$, then [L2] again gives $\|r\|_2=\eta(A,\mu,x)\le\varepsilon$. [L2, algebra]
2.1 Steps 1.1 and 1.2 prove the equivalence, and [L1] identifies it as a backward-error stopping rule. [L1, step 1.1, step 1.2] ∎