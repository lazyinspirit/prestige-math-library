---
id: lem-fibrewise-exact-flat-complex-lifts-noetherian-target
kind: lemma
title: Fibrewise exact finite flat complexes lift over a Noetherian target
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-fibre-injective-map-flat-cokernel-noetherian-target
  - thm-right-exactness-of-tensor-products
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.99.5 (tag 00MI), exact complexes and flat cokernels"
      url: https://stacks.math.columbia.edu/tag/00MI
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a local
homomorphism of Noetherian local rings, with maximal ideal
$\mathfrak m\subset R$. Let
$$0\longrightarrow F_e\longrightarrow F_{e-1}\longrightarrow\cdots\longrightarrow F_0$$
be a complex with $e\ge1$, each $F_i$ a finite $S$-module
flat over $R$. If its reduction modulo $\mathfrak m$ is exact
at every term except possibly $F_0/\mathfrak mF_0$, then the
original complex is exact at every term except possibly $F_0$,
and $\operatorname{coker}(F_1\to F_0)$ is flat over $R$.

## Facts & Assumptions

**Given:** The local Noetherian map, finite flat complex, and its exact reduced complex.

[F1] An injective reduced map from a finite $S$-module into an $R$-flat $S$-module lifts to an injection with $R$-flat cokernel ([[lem-fibre-injective-map-flat-cokernel-noetherian-target]]).

[F2] Tensor with $R/\mathfrak m$ is right exact, so the reduction of the cokernel of a map is the cokernel of its reduction ([[thm-right-exactness-of-tensor-products]]).

## Proof

**Proof technique:** induct on the number of arrows, replacing the top injective pair by its flat cokernel.

1.1 [base] If $e=1$, the reduced map $F_1/\mathfrak mF_1\to F_0/\mathfrak mF_0$ is injective by hypothesis. Apply [F1] with source $F_1$ and target $F_0$. It makes $F_1\to F_0$ injective and its cokernel flat over $R$, proving the assertion. [F1]

1.2 [IH] Suppose $e>1$ and the assertion holds for complexes with $e-1$ arrows. The reduced top arrow $F_e/\mathfrak mF_e\to F_{e-1}/\mathfrak mF_{e-1}$ is injective. By [F1] its lift is injective and $C=\operatorname{coker}(F_e\to F_{e-1})$ is a finite $S$-module flat over $R$. The map $F_{e-1}\to F_{e-2}$ factors through $C$, giving a shorter complex $0\to C\to F_{e-2}\to\cdots\to F_0$. [F1]

2.1 [induction] By [F2], the reduction $C/\mathfrak mC$ is the cokernel of the reduced top arrow. Exactness of the original reduced complex therefore makes the shorter reduced complex exact at every term except possibly its last. The induction hypothesis applies, making the shorter complex exact and its final cokernel $R$-flat. Combining this with the injection $F_e\to F_{e-1}$ from step 1.2 restores exactness of the original complex; its final cokernel is the same one. [F2, step 1.2]

3.1 [discharge-induction: step 2.1] The base and induction steps prove the result for all $e\ge1$. The Axiom of Choice is inherited through [F1]; all other selections are finite. [F1, step 1.1, step 2.1] ∎
