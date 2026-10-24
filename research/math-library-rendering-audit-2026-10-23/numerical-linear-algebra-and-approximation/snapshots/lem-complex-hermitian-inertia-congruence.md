---
id: lem-complex-hermitian-inertia-congruence
kind: lemma
title: Complex Hermitian inertia is invariant under nonsingular congruence
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [lem-complex-hermitian-realification-identities, thm-sylvesters-law-of-inertia]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

For a Hermitian $H\in\mathbb C^{n\times n}$, define its inertia as $(n_+(H),n_-(H),n_0(H))$, the counts with multiplicity of positive, negative, and zero eigenvalues. If $S\in\mathbb C^{n\times n}$ is nonsingular, then
$$
\operatorname{inertia}(S^*HS)=\operatorname{inertia}(H).
$$

## Facts & Assumptions

**Given:** Hermitian $H$ and nonsingular $S$ as stated.

[F1] Realification of a Hermitian matrix duplicates each real eigenvalue, and realification of $S^*HS$ is the real congruence $\mathcal R(S)^{\mathsf T}\mathcal R(H)\mathcal R(S)$; $\mathcal R(S)$ is nonsingular ([[lem-complex-hermitian-realification-identities]]).

[F2] For real symmetric matrices, nonsingular congruence preserves positive, negative, and zero inertia counts ([[thm-sylvesters-law-of-inertia]]).

## Proof

1.1 By [F1], $\mathcal R(H)$ and $\mathcal R(S^*HS)$ are real symmetric and the latter equals $\mathcal R(S)^{\mathsf T}\mathcal R(H)\mathcal R(S)$ with $\mathcal R(S)$ nonsingular. [given, F1, algebra]

2.1 Apply [F2] to the realification congruence in step 1.1. The real positive, negative, and zero counts agree; by [F1] each is twice the corresponding complex count, so division by $2$ gives the asserted complex inertia equality. [step 1.1, F1, F2, algebra] ∎

