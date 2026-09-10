---
id: "cor-closed-differential-forms-are-locally-exact"
kind: "corollary"
title: "Closed differential forms are locally exact"
deps: ["thm-poincare-lemma-for-differential-forms-on-star-shaped-domains", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges", "thm-the-exterior-derivative-commutes-with-pullback"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every closed smooth differential form of positive degree is locally exact.

## Facts & Assumptions

**Given:** A closed $k$-form $\omega$ on a smooth manifold, $k\ge1$, and a point $p$.

[F1] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

[F2] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

[F3] [[thm-the-exterior-derivative-commutes-with-pullback]]: For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$

## Proof

**Proof technique:** direct.

1.1 Choose a coordinate neighbourhood $W$ of $p$ mapped diffeomorphically by $x$ onto a Euclidean open ball. In those coordinates $\widetilde\omega=(x^{-1})^*(\omega|_W)$ is closed: naturality gives $d\widetilde\omega=(x^{-1})^*d(\omega|_W)=0$. The ball is star-shaped, so there is a smooth $(k-1)$-form $\eta$ there with $d\eta=\widetilde\omega$. [F1, F3, given]

2.1 Pulling back by $x$, naturality of the exterior derivative gives $d(x^*\eta)=x^*d\eta=x^*(x^{-1})^*(\omega|_W)=\omega|_W$. Thus $x^*\eta$ is the requested local primitive. If the form is forced to be zero by dimension, the zero primitive works; on an empty manifold the assertion over all points is vacuous. [F2, F3, step 1.1] ∎

## Source locator

Lee, Corollary 17.15, p.447, restricted explicitly to positive degree.
