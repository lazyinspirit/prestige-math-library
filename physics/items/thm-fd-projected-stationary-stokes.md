---
id: thm-fd-projected-stationary-stokes
kind: theorem
title: "Projected stationary weak Stokes solvability"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-projected-no-slip-stokes-space
  - lem-fd-zero-trace-directional-poincare
  - thm-riesz-representation-for-hilbert-space
  - def-axiom-of-choice
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  lem-fd-zero-trace-directional-poincare: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 4 §4.1, PDF p. 31: Riesz/Lax–Milgram formulation for the Dirichlet Laplacian; Chapter 6 §6.1, PDF pp. 55–56: Stokes variational formulation and pressure context."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Statement

Assume full AC. Let $d\ge2$, let $R>0$, let $\Omega\subset(-R,R)^d$ be nonempty bounded open, let $\mu>0$, and let $f\in L^2(\Omega;\mathbb R^d)$. There is a unique $u\in V$ such that
$$\mu\int_\Omega\nabla u:\nabla v=\int_\Omega f\cdot v\qquad(v\in V),$$
where $V$ is the distributionally divergence-free subspace of $H_0^1$ defined above. It satisfies $\|\nabla u\|_2\le2R\|f\|_2/\mu$. This is a projected variational velocity result; it asserts no pressure, $L^2$ pressure regularity, or classical boundary regularity.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: full AC is assumed; applying its choice function to a sequence of nonempty sets gives a selector for that sequence, hence Countable Choice.

[F2] [[def-fd-projected-no-slip-stokes-space]]: $V$ is the real Hilbert space of distributionally divergence-free $H_0^1$ vector fields.

[F3] [[lem-fd-zero-trace-directional-poincare]]: $\|v\|_2\le2R\|\nabla v\|_2$ for the specified domain.

[F4] [[thm-riesz-representation-for-hilbert-space]]: under its Countable Choice hypothesis, every bounded real linear functional on a real Hilbert space has a unique representing vector.

## Proof

**Given:** Full AC, $\mu>0$, $f\in L^2$, and $V$ on $\Omega\subset(-R,R)^d$.

1.1 By [F2], $V$ is complete in its $H^1$ norm. The estimate in [F3] shows $\|v\|_2\le2R\|\nabla v\|_2$, so the gradient norm is equivalent to the $H^1$ norm on $V$ and is complete. Thus $(v,w)_V=\int_\Omega\nabla v:\nabla w$ is a real Hilbert inner product. [given, F2, F3, F1]

2.1 The functional $F(v)=\int f\cdot v$ is linear and satisfies $|F(v)|\le\|f\|_2\|v\|_2\le2R\|f\|_2\|v\|_V$. To verify the Countable Choice hypothesis of [F4], take any sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets. Its range $\mathcal F=\{X_n:n\in\mathbb N\}$ is a family of nonempty sets, so full AC [F1] gives a choice function $g$ on $\mathcal F$; then $n\mapsto g(X_n)$ is a selector for the sequence. Riesz [F4] therefore applies to the real Hilbert space from step 1.1 and bounded functional $F$, giving a unique $z\in V$ with $(z,v)_V=F(v)$; set $u=z/\mu$. [given, F1, F4, step 1.1, algebra]

3.1 Taking $v=u$ in the variational identity gives $\mu\|\nabla u\|_2^2=\int f\cdot u\le2R\|f\|_2\|\nabla u\|_2$. If the gradient norm is zero, the desired bound is immediate; otherwise divide by $\mu\|\nabla u\|_2$. If $u_1,u_2$ both solve, their difference tested against itself has zero gradient norm, hence is zero by Poincaré. [given, F3, step 2.1, algebra] ∎

