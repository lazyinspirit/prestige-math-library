---
id: prop-positive-compactly-supported-top-forms-have-positive-integral
title: "Positivity of the oriented integral"
kind: proposition
status: draft
origin: pipeline
deps: ["prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components", "thm-multidimensional-integral-properties"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lee Proposition 16.6(c), pp.407–408 (nonnegative version by the same proof)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$ implies $\int_M\omega>0$.

## Facts & Assumptions

[F1] [[prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components]]: For compactly supported smooth top forms $\omega,\eta$ on an oriented $M^n$ and $a,b\in\mathbb R$, $$\int_M(a\omega+b\eta)=a\int_M\omega+b\int_M\eta.$$ Also $\int_M\omega=\sum_C\int_C\omega|_C$, where $C$ ranges over connected components with their restricted orientations; only finitely many meet $\operatorname{supp}\omega$.

[F2] [[thm-multidimensional-integral-properties]]: Let $Q=\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable $f,g:Q\to\mathbb R$ and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable and its integral is $\alpha\int_Qf+\beta\int_Qg$. If $f\le g$, then $\int_Qf\le\int_Qg$. Also $|f|$ is integrable and $|\int_Qf|\le\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate hyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on $Q$ is equivalent to integrability on both restrictions, and their integral values add to the integral over $Q$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 In a signed chart, nonnegativity means $\sigma_\phi f\geq0$. Multiplying by nonnegative partition weights and using Riemann monotonicity shows every chart contribution is nonnegative, so their finite sum is nonnegative. [F1, F2]

2.1 If $n\geq1$ and $\omega_p\neq0$, some partition weight is positive at $p$. Its signed coefficient is continuous and positive there, hence at least $c>0$ on a sufficiently small rectangle, or on a half-rectangle at a face. Inside this neighborhood choose a nondegenerate rectangle of positive volume; monotonicity and rectangle additivity bound that chart integral below by $c$ times its positive volume. The other terms are nonnegative. [F2, step 1.1]

3.1 For $n=0$ every summand $\varepsilon(p)\omega(p)$ is nonnegative and a nonzero form has a strictly positive summand. The zero form and the empty manifold give zero. These observations prove all assertions. [F1, step 1.1, step 2.1] ∎
