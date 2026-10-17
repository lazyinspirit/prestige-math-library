---
id: lem-density-mixing-preserves-domain-but-not-projectors
kind: lemma
title: Density mixing preserves admissibility but need not preserve idempotence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-admissible-hermitian-density-domain, def-self-consistent-projector-response-map, def-rank-r-orthogonal-projector-domain, lem-projector-is-admissible-density, lem-gapped-projector-map-well-defined]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §4.4 and Appendix Lemma 4.1
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
---

## Statement

If $D\in\mathcal D_r$ and the gapped map $\Phi(D)$ of
[[def-self-consistent-projector-response-map]] is defined, then for every
$\alpha\in[0,1]$,
$$D^+=(1-\alpha)D+\alpha\Phi(D)$$
belongs to $\mathcal D_r$. The conclusion does not assert $D^+\in\mathcal P_r$.

## Facts & Assumptions
**Given:** $D\in\mathcal D_r$, a defined occupied projector $\Phi(D)$ of rank $r$, and $0\le\alpha\le1$.

[F1] $\mathcal D_r$ is the set of Hermitian positive contractions of trace $r$ ([[def-admissible-hermitian-density-domain]]).

[F2] The gapped response construction gives a unique orthogonal projector $\Phi(D)\in\mathcal P_r$ ([[def-self-consistent-projector-response-map]], [[lem-gapped-projector-map-well-defined]]).

[F4] Every rank-$r$ orthogonal projector is an admissible density ([[lem-projector-is-admissible-density]]).

## Proof


1.1 Since $D$ and $\Phi(D)$ are Hermitian, $D^+$ is Hermitian. For every $x$, $x^*D^+x=(1-\alpha)x^*Dx+\alpha x^*\Phi(D)x\ge0$. Likewise $x^*(I-D^+)x=(1-\alpha)x^*(I-D)x+\alpha x^*(I-\Phi(D))x\ge0$, since $D\in\mathcal D_r$ and $\Phi(D)\in\mathcal D_r$ by [F1], [F2], [F4]. [F1, F2, F4, given, algebra]

2.1 The trace is linear, so $\operatorname{tr}D^+=(1-\alpha)r+\alpha r=r$. The two positive-semidefinite inequalities and this trace identity give $D^+\in\mathcal D_r$. [step 1.1, F1, F2, algebra]

3.1 To verify that idempotence need not be preserved, take $n=2$, $r=1$, the constant Hermitian response $F(X)=\operatorname{diag}(0,1)$ on $U=\mathbb H_2$, $D=\operatorname{diag}(0,1)$, and $\alpha=1/2$. Directly, $D$ is Hermitian, lies between $0$ and $I_2$, and has trace $1$, so $D\in\mathcal D_1$. The response matrix has gap $1$, so [F2] gives $\Phi(D)=\operatorname{diag}(1,0)$. Then $D^+=\tfrac12I_2$ and $(D^+)^2=\tfrac14I_2\ne D^+$. Thus the update belongs to $\mathcal D_1$ by step 2.1 but is not an orthogonal projector. [step 2.1, F2, given, algebra] ∎
