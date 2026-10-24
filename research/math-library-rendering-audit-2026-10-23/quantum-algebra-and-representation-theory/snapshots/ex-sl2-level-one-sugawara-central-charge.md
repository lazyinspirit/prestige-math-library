---
id: ex-sl2-level-one-sugawara-central-charge
kind: example
title: The level-one sl2 Sugawara central charge
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-sugawara-modes-satisfy-virasoro
  - def-sugawara-modes
  - def-dual-coxeter-number-for-normalized-form
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Pavel Ginsparg, Applied Conformal Field Theory, §9.2, equations (9.17)–(9.18)
      url: https://arxiv.org/pdf/hep-th/9108028
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
---

## Example

Let $\mathfrak{sl}_2$ have basis $e,f,h$ with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, and use the invariant form normalized by $B(h,h)=2$, $B(e,f)=B(f,e)=1$. Then $\dim\mathfrak{sl}_2=3$ and $h^\vee=2$. Substituting level $k=1$ into the Sugawara formula gives central charge $c=1$. Consequently every level-one module satisfying the hypotheses of [[thm-sugawara-modes-satisfy-virasoro]] carries the normalized Virasoro action with that central charge.

## Facts & Assumptions

**Given:** The displayed $\mathfrak{sl}_2$ basis and form normalization, and a level-one module satisfying the theorem's restricted-module hypotheses.

[F1] [[def-sugawara-modes]]: the central-charge denominator is $k+h^\vee$, with critical level $k=-h^\vee$ excluded.

[F2] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee$ is half the adjoint Casimir scalar.

[F3] [[def-dual-coxeter-number-for-normalized-form]]: the adjoint Casimir acts by a scalar $\gamma_B I$.

[F4] [[thm-sugawara-modes-satisfy-virasoro]]: under the stated module hypotheses, $c=k\dim(\mathfrak g)/(k+h^\vee)$.

## Verification

1.1 The given brackets make $\mathfrak{sl}_2$ simple: $\operatorname{ad}(h)$ has the three distinct eigenspaces $\mathbb Ce,\mathbb Cf,\mathbb Ch$; polynomial projections in $\operatorname{ad}(h)$ show any nonzero ideal contains one of $e,f,h$, and bracketing that vector with the other basis vectors yields all three. The $B$-dual basis to $(h,e,f)$ is $(h/2,f,e)$, so $\Omega_B=h^2/2+ef+fe$. In the adjoint representation, $\operatorname{ad}(\Omega_B)e=\tfrac12[h,[h,e]]+[e,[f,e]]+[f,[e,e]]=2e+2e+0=4e.$ By [F2]–[F3], $2h^\vee=4$, hence $h^\vee=2$. [F2, F3, algebra]

2.1 The dimension is three. [F1] and [F4] therefore give $c=1\cdot3/(1+2)=1$. The denominator is nonzero, so the example lies away from the critical level $k=-2$. This is a conditional module example: it computes the central charge for every level-one module meeting the theorem hypotheses with no unitarity or integrability requirement. [F1, F4, step 1.1, algebra] ∎
