---
id: lem-na-diagonal-diffusion-stencil-is-monotone
kind: lemma
title: Nonnegative row weights for the diagonal-diffusion HJB stencil
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-explicit-diagonal-diffusion-hjb-grid-step]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; the result is a finite coefficient calculation.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§1.2 and §1.6, degenerate ellipticity and controlled second-order operators, printed pp. 4–7."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2 monotonicity requirement for second-order approximation schemes, printed pp. 274–276."
verification:
  precheck: pass
---

## Statement

Under the two inequalities in [[alg-na-explicit-diagonal-diffusion-hjb-grid-step]],
every fixed-control row of its explicit update is an affine combination of the
center and the two coordinate neighbors with nonnegative coefficients summing
to one, plus $\tau f^a$. Therefore the max over controls is order-preserving.

## Facts & Assumptions

**Given:** Positive diagonal coefficients $\alpha_j^a$, drift coefficients
$b_j^a$, mesh widths $h_j$, and time step $\tau$ satisfying the diffusion-
dominance and explicit CFL conditions.

[F1] The scheme uses $D_{jj}^h$, the sign-selected $D_{j,a}^{up}$, and the two
inequalities $|b_j^a|h_j\le\alpha_j^a$ and
$\tau\sum_j(2\alpha_j^a/h_j^2+|b_j^a|/h_j)\le1$
([[alg-na-explicit-diagonal-diffusion-hjb-grid-step]]).

## Proof

1.1 Fix $i,a,j$ and abbreviate $\alpha=\alpha_j^a(x_i,t_n)$, $b=b_j^a(x_i,t_n)$, and $h=h_j$. If $b\ge0$, the coefficient of $U_{i-e_j}$ in the update is $\tau(\alpha/h^2-b/h)$ and that of $U_{i+e_j}$ is $\tau\alpha/h^2$. If $b<0$, the coefficient of $U_{i+e_j}$ is $\tau(\alpha/h^2-|b|/h)$ and that of $U_{i-e_j}$ is $\tau\alpha/h^2$. Each is nonnegative by $|b|h\le\alpha$ in [F1]. [F1, given, algebra]

2.1 The center coefficient is $$1-\tau\sum_j\left(\frac{2\alpha_j^a}{h_j^2}-\frac{|b_j^a|}{h_j}\right).$$ It is at least $1-\tau\sum_j(2\alpha_j^a/h_j^2+|b_j^a|/h_j)\ge0$ by [F1]. For each coordinate, the two neighbor coefficients sum to $\tau(2\alpha_j^a/h_j^2-|b_j^a|/h_j)$; adding the center coefficient therefore gives one. Hence each fixed-control update is a convex combination plus its constant forcing. [F1, step 1.1, algebra]

3.1 A convex combination is order-preserving in its nodal inputs. The maximum of finitely many order-preserving control maps is order-preserving, proving the claim. [step 2.1, algebra] ∎