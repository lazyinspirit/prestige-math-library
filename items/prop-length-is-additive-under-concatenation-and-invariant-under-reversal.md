---
id: "prop-length-is-additive-under-concatenation-and-invariant-under-reversal"
kind: "proposition"
title: "Length is additive under concatenation and invariant under reversal"
deps: ["lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision", "thm-line-integrals-under-reversal-and-concatenation"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Length adds under finite concatenation and is unchanged by reversal.

## Facts & Assumptions

**Given:** Piecewise $C^1$ curves, with matching endpoints for concatenation.

[F1] [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]]: Riemannian length is independent of admissible finite subdivision and of corner derivative conventions.

[F2] [[thm-line-integrals-under-reversal-and-concatenation]]: Let $\gamma$ be a piecewise-$C^1$ path, and let $f$ be a continuous scalar field and $F$ a continuous vector field on a set containing its trace. Then $$\int_{\gamma^-}f\,ds=\int_\gamma f\,ds,\qquad \int_{\gamma^-}F\cdot d\mathbf r=-\int_\gamma F\cdot d\mathbf r.$$ If piecewise-$C^1$ paths $\alpha,\beta:[0,1]\to\mathbb R^n$ satisfy $\alpha(1)=\beta(0)$, and $f$ and $F$ are continuous on a set containing both traces, then $$\int_{\alpha*\beta}f\,ds=\int_\alpha f\,ds+\int_\beta f\,ds,$$ $$\int_{\alpha*\beta}F\cdot d\mathbf r=\int_\alpha F\cdot d\mathbf r+\int_\beta F\cdot d\mathbf r.$$

## Proof

**Proof technique:** direct.

1.1 For curves $\alpha,\beta$ on $[0,1]$, their concatenation has derivatives $2\dot\alpha(2t)$ on the first half and $2\dot\beta(2t-1)$ on the second. Substitution gives the two contributions $L_g(\alpha)$ and $L_g(\beta)$, hence their sum. The same finite integral calculation as for scalar line integrals applies to these scalar speeds. [F1, F2, given]

2.1 The reversed curve $\gamma^-(t)=\gamma(a+b-t)$ has velocity $-\dot\gamma(a+b-t)$ and therefore the same norm at the reversed time. Substitution reverses the integration limits and cancels the minus sign, giving $L_g(\gamma^-)=L_g(\gamma)$. Repeating the first calculation proves finite concatenation; constant pieces and zero-length intervals contribute zero. [F1, F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
