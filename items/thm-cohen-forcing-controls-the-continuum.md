---
id: thm-cohen-forcing-controls-the-continuum
kind: theorem
title: Cohen forcing raises and, under a name count, fixes the continuum
status: published
origin: pipeline
deps: [thm-cohen-forcing-closure-and-chain-condition, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-nice-name-reduction-and-counting, thm-mutually-generic-cohen-coordinate-reals, def-cardinal-arithmetic, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 3.31 and Corollary 3.33", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, $\operatorname{Add}(\omega,\lambda)$ for infinite $\lambda$ preserves cardinals and forces $2^{\aleph_0}\ge\lambda$. If the ground model also satisfies $\lambda^{\aleph_0}=\lambda$ and $\lambda\ge2^{\aleph_0}$, then it forces $2^{\aleph_0}=\lambda$. In particular, over GCH, $\operatorname{Add}(\omega,\aleph_2)$ forces the continuum to be exactly $\aleph_2$.

## Facts & Assumptions

**Given:** AC and infinite $\lambda$.

[F1] [[thm-cohen-forcing-closure-and-chain-condition]] gives ccc.

[F2] [[thm-chain-condition-preserves-cofinalities-and-cardinals]] gives cardinal preservation.

[F3] [[thm-mutually-generic-cohen-coordinate-reals]] gives $\lambda$ distinct reals.

[F4] [[thm-nice-name-reduction-and-counting]] bounds real names.

[F5] [[def-cardinal-arithmetic]] supplies exponent calculations.

## Proof

1.1 By F1, F2 all cardinals are preserved. F3 supplies an injection $\lambda\hookrightarrow\mathcal P(\omega)$ in the extension, so $2^{\aleph_0}\ge\lambda$. [F1, F2, F3]

2.1 The forcing has size $\lambda$. Under the additional hypotheses F4 gives at most $\lambda^{\aleph_0}=\lambda$ nice names for reals. Every real has one, so $2^{\aleph_0}\le\lambda$; combine with step 1.1. [F4, F5, step 1.1]

3.1 Under GCH, the ground continuum is $\aleph_1$ and $(\aleph_2)^{\aleph_0}=\aleph_2$. Apply step 2.1 with $\lambda=\aleph_2$; preservation ensures that this remains the extension's $\aleph_2$. AC is used in F2, F4, and the cardinal computations. [F2, F5, step 2.1] ∎
