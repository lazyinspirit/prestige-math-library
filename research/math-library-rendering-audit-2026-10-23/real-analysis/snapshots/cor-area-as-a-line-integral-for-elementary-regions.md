---
id: cor-area-as-a-line-integral-for-elementary-regions
kind: corollary
title: "Area of an elementary Green region as a boundary line integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-greens-theorem-for-finite-unions-of-elementary-regions, def-riemann-integral-over-a-jordan-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

For a finite elementary Green region $D$ with positively oriented boundary,

$$\operatorname{cont}(D)=\frac12\int_{\partial D}(x\,dy-y\,dx)=\int_{\partial D}x\,dy=-\int_{\partial D}y\,dx.$$

## Facts & Assumptions

**Given:** The finite elementary Green region and positive orientation in the Statement.

[L1] Green's theorem gives $$\int_{\partial D}P\,dx+Q\,dy =\iint_D(\partial_xQ-\partial_yP)\,dA$$ for $C^1$ functions on a neighbourhood of $D$ ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]]).

[L2] For a Jordan set, $\iint_D1\,dA=\operatorname{cont}(D)$ ([[def-riemann-integral-over-a-jordan-set]]).

## Proof

**Proof technique:** direct.

1.1 Choose $P(x,y)=-y/2$ and $Q(x,y)=x/2$. Then $\partial_xQ-\partial_yP=1$, so [L1] and [L2] give $$\operatorname{cont}(D)=\frac12\int_{\partial D}(x\,dy-y\,dx).$$ [L1, L2, algebra]

1.2 Choose $P=0$ and $Q=x$. Again the scalar curl is $1$, so [L1] and [L2] give $\operatorname{cont}(D)=\int_{\partial D}x\,dy$. [L1, L2, algebra]

1.3 Choose $P=-y$ and $Q=0$. Its scalar curl is $1$, so [L1] and [L2] give $\operatorname{cont}(D)=-\int_{\partial D}y\,dx$. [L1, L2, algebra]

2.1 Steps 1.1 to 1.3 are the three asserted formulas. They include the one-piece case because [L1] includes every nonempty finite elementary decomposition. [step 1.1, step 1.2, step 1.3, L1] ∎
