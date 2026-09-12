---
id: "thm-de-rham-integration-is-a-cochain-map"
kind: "theorem"
title: "De Rham integration is a cochain map"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-de-rham-integration-cochain-map","thm-stokes-theorem-for-smooth-singular-chains","def-smooth-singular-chain-and-cochain-complexes"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every smooth manifold $M$, possibly with boundary, integration is a real cochain map from its de Rham complex to its smooth singular cochain complex:
$$\delta I_M^k(\omega)=I_M^{k+1}(d\omega)\qquad(\omega\in\Omega^k(M)).$$
Both complexes are zero in negative degrees. The boundary convention for forms is the one in the definition of $I_M$.

## Facts & Assumptions

[F1] [[def-de-rham-integration-cochain-map]] defines $I_M$ by integration and proves its real linearity in each degree, including the zero-map conventions.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]] gives $\int_c d\omega=\int_{\partial c}\omega$ for a smooth $(k+1)$-chain and a $k$-form with $k\ge0$.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] defines $(\delta\varphi)(c)=\varphi(\partial c)$, without an extra sign.

## Proof

**Given:** A manifold $M$, $k\ge0$, a form $\omega\in\Omega^k(M)$ and an arbitrary finite smooth $(k+1)$-chain $c$.

1.1 The definition of the cochain differential, followed by integration and [F2], gives $$\bigl(\delta I_M^k(\omega)\bigr)(c)=I_M^k(\omega)(\partial c)=\int_{\partial c}\omega=\int_c d\omega=I_M^{k+1}(d\omega)(c).$$ The same coefficients and alternating boundary signs occur in [F2] and [F3], so no sign adjustment is required. [F1, F2, F3, given]

2.1 Since step 1.1 holds for every chain, the two linear functionals are equal. Together with the degreewise real linearity in [F1], this is precisely the cochain-map identity. For $k=0$ it is the fundamental-theorem formula for values at the two endpoints of each smooth one-simplex, including constant paths. For $k=\dim M$, the form $d\omega$ is zero, and the same equality proves $\delta I_M^k(\omega)=0$ without assuming there are no higher-dimensional singular simplices. [F1, F2, step 1.1]

3.1 If $k>\dim M$ or $k<0$, the form and all relevant source differentials are zero, so the identity is an equality of zero cochains; this includes the map out of degree minus one. If $M$ is empty, both complexes are zero. Zero chains and degenerate simplices were included in [F2], so they create no exception to step 1.1. Every evaluation uses a finite chain and a previously well-defined integral; no choice axiom enters. [F1, F2, F3, step 2.1] ∎
