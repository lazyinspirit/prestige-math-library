---
id: cor-poisson-supremum-estimate-from-a-quadratic-barrier
kind: corollary
title: "Poisson supremum estimate from a quadratic barrier"
status: published
origin: pipeline
deps: [thm-comparison-principle-for-classical-subharmonic-functions]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§6 Corollary 11, p.9"
---

## Statement

Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open, with $\Omega\subset\{x:0<x_1<d\}$ for some $d>0$. If $u\in C^2(\Omega)\cap C(\overline\Omega)$ and $L=\sup_\Omega|\Delta u|<\infty$, then
$$\sup_{\overline\Omega}|u|\le\sup_{\partial\Omega}|u|+\frac{d^2}{2}L.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Classical comparison holds on bounded nonempty open sets for $C^2$ functions continuous on the closure. ([[thm-comparison-principle-for-classical-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Put $b=\max_{\partial\Omega}|u|$ and $v(x)=b+\frac{L}{2}(d^2-x_1^2)$. Since $0\le x_1\le d$ on the closure, $v\ge b$ there, and $\Delta v=-L\le\Delta u,\Delta(-u)$. [given, algebra]

2.1 Both $u$ and $-u$ are at most $v$ on the boundary, so comparison gives $|u|\le v\le b+Ld^2/2$ on the closure. [F1, step 1.1] ∎
