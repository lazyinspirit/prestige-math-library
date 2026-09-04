---
id: prop-related-complete-vector-fields-have-intertwined-flows
kind: proposition
title: "Related complete vector fields have intertwined flows"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-f-related-vector-fields, prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law, thm-fundamental-theorem-on-flows, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M\to N$ be smooth. If complete vector fields $X$ on $M$ and $Y$ on $N$
are $F$-related, then for every $t\in\mathbb R$,

$$ F\circ \Phi_t^X=\Phi_t^Y\circ F. $$

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, complete vector fields $X$ and $Y$, and their global flows $\Phi^X,\Phi^Y$.

[L1] $F$-relatedness is equivalent to the intertwining identity on smooth functions ([[prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law]]).

[L2] Complete vector fields have global flows ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the flows $\Phi^X$ and $\Phi^Y$ are defined for all real times. Fix $p\in M$ and define $$ \alpha(t):=F(\Phi_t^X(p)), \qquad \beta(t):=\Phi_t^Y(F(p)). $$ [L2, given]

2.1 The curve $\beta$ is a $Y$-integral curve through $F(p)$ by definition of the flow. For $\alpha$, the chain rule encoded in [L1] shows that for every smooth function $f$ on $N$, $$ \frac{d}{dt}f(\alpha(t))=X(f\circ F)(\Phi_t^X(p))=Yf(\alpha(t)), $$ so $\alpha$ is also a $Y$-integral curve through $F(p)$. [L1, step 1.1]

3.1 The two curves $\alpha$ and $\beta$ solve the same global initial-value problem for $Y$, so uniqueness gives $\alpha(t)=\beta(t)$ for every $t$. This is exactly $$ F(\Phi_t^X(p))=\Phi_t^Y(F(p)). $$ [step 2.1]

4.1 Therefore related complete vector fields have intertwined flows. [step 3.1] ∎
