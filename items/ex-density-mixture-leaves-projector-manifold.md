---
id: ex-density-mixture-leaves-projector-manifold
kind: example
title: A convex density mixture can be admissible without being a projector
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-admissible-hermitian-density-domain, def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-projector-is-admissible-density, lem-density-mixing-preserves-domain-but-not-projectors]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §4.4
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

In dimension $2$ with particle number $r=1$, let $F(X)=\operatorname{diag}(0,1)$
on $U=\mathbb H_2$ and start from $P_0=\operatorname{diag}(0,1)$. Its response
projector is $P_1=\operatorname{diag}(1,0)$, and mix with $\alpha=1/2$.

## Facts & Assumptions
**Given:** The constant Hermitian response $F(X)=\operatorname{diag}(0,1)$, $P_0=\operatorname{diag}(0,1)$, and $\alpha=1/2$.

[F1] Every rank-$r$ orthogonal projector is an admissible density ([[lem-projector-is-admissible-density]]).

[F2] A strict gap defines a unique occupied response projector ([[def-self-consistent-projector-response-map]], [[lem-gapped-projector-map-well-defined]]).

[F3] Mixing an admissible density with the defined rank-$r$ response projector remains in $\mathcal D_r$ ([[lem-density-mixing-preserves-domain-but-not-projectors]]).

## Verification


1.1 The matrix $P_0$ is a Hermitian idempotent of trace $1$, so $P_0\in\mathcal P_1$ and $P_0\in\mathcal D_1$ by [F1]. The constant response matrix has eigenvalues $0<1$, so [F2] gives $\Phi(P_0)=P_1=\operatorname{diag}(1,0)$. [given, F1, F2, algebra]

2.1 Direct calculation gives $D=(1-\alpha)P_0+\alpha\Phi(P_0)=\tfrac12 I_2$. By [F3], $D\in\mathcal D_1$; explicitly it is Hermitian, satisfies $0\preceq D\preceq I_2$, and has trace $1$. [step 1.1, given, F3, algebra]

3.1 But $D^2=\tfrac14 I_2\ne D$, so $D$ is not idempotent and hence $D\notin\mathcal P_1$. This verifies that relaxed density iterates must not be silently identified with projectors. [step 2.1, algebra] ∎
