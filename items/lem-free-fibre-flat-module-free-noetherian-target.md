---
id: lem-free-fibre-flat-module-free-noetherian-target
kind: lemma
title: A finite module with free fibre and flat base is free over a Noetherian target
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-fibre-injective-map-flat-cokernel-noetherian-target
  - thm-nakayama-lemma
  - thm-flatness-criteria-by-injections-and-ideals
proof_strategy: direct
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
    - title: "The Stacks Project, Algebra, Lemma 10.99.4 (tag 00MH), free fibre and flatness"
      url: https://stacks.math.columbia.edu/tag/00MH
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a local
homomorphism of Noetherian local rings, with maximal ideal
$\mathfrak m\subset R$, and let $M$ be a nonzero finite
$S$-module. If $M$ is flat over $R$ and
$M/\mathfrak mM$ is free over $S/\mathfrak mS$, then $M$
is a finite free $S$-module and $S$ is flat over $R$.

## Facts & Assumptions

**Given:** The local Noetherian map, nonzero finite module, base-flatness, and free fibre.

[F1] A map from a finite $S$-module to an $R$-flat $S$-module whose reduction modulo $\mathfrak m$ is injective is itself injective ([[lem-fibre-injective-map-flat-cokernel-noetherian-target]]).

[F2] If $C$ is finite over local $S$ and $C/\mathfrak mSC=0$, then $C=0$ by Nakayama, since $\mathfrak mS$ lies in the maximal ideal of $S$ ([[thm-nakayama-lemma]]).

[F3] Direct summands of flat modules are flat, by the ideal-tensor criterion ([[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** lift a fibre basis, use fibrewise injection and Nakayama, and recover flatness of the middle ring as a summand.

1.1 Since $M$ is finite over $S$, its free $S/\mathfrak mS$-fibre has finite rank $r$. Choose a basis $\overline x_1,\ldots,\overline x_r$ and lifts $x_1,\ldots,x_r\in M$. They give an $S$-linear map $u:S^r\to M$ whose reduction modulo $\mathfrak m$ is an isomorphism. By [F1], $u$ is injective. [F1]

2.1 Its cokernel $C$ is a finite $S$-module with $C/\mathfrak mC=0$ because the fibre map is surjective. By [F2], $C=0$, hence $M\cong S^r$. Since $M\ne0$, the rank $r$ is positive. [F2, step 1.1]

3.1 The $R$-module $M\cong S^r$ is flat by hypothesis; as $r\ge1$, $S$ is a direct summand of it. By [F3], $S$ is flat over $R$. AC covers the basis selection and the cited fibre-injection boundary. [F1, F3, step 2.1] ∎
