---
id: cex-reversing-boundary-orientation-reverses-flux
kind: counterexample
title: The wrong normal gives the wrong sign
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12 Theorem 1.46, printed p. 17 (PDF p. 23), explicitly requires the outward normal. This sign counterexample is its ball specialization.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "ex-divergence-theorem-on-a-ball-in-rn"]
---

## Statement refuted

The claim that the divergence formula remains valid with the inward unit normal is false. A witness is $F(x)=x$ on $B_R(0)\subset\mathbb R^n$, $n\ge2$, $R>0$: the inward flux is $-n|B_R|$ but the divergence integral is $n|B_R|>0$. Use $\mathrm{AC}_\omega$ for the integration convention.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$, $R>0$. Take the ball $B_R(0)$, field $F(x)=x$, and the inward normal as the proposed witness.

[F1] For F=x the outward ball flux is n times its positive volume. ([[ex-divergence-theorem-on-a-ball-in-rn]]).

## Counterexample

1.1 The ball is bounded with smooth boundary, and F is a polynomial C1 field on its closure. Directly $\operatorname{div}F=\sum_{i=1}^n1=n$, so its integral is $n|B_R|$. This is positive: $(-R/(2\sqrt n),R/(2\sqrt n))^n\subset B_R$ has positive product volume. [given, algebra]

2.1 The inward unit normal is $-x/R$ on $|x|=R$. Consequently $F\cdot\nu_{\rm in}=-|x|^2/R=-R$ and its flux is $-R|\partial B_R|=-n|B_R|$ by F1. Step 1.1 proves this differs from the positive divergence integral, although every domain and field regularity hypothesis holds. It is exactly the orientation hypothesis that fails. [step 1.1, F1, algebra] ∎

## Source notes

Hunter §1.12 Theorem 1.46, printed p. 17 (PDF p. 23), explicitly requires the outward normal. This sign counterexample is its ball specialization.

