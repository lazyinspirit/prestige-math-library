---
id: op-beilinson-bloch-kato-rank-equality-for-modular-motives
kind: open-problem
title: "Beilinson–Bloch–Kato Equality of Analytic and Algebraic Ranks"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-motivic-cohomology-of-a-modular-motive
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Open problem

For every central modular motive $M=M(f)(k/2)$ in the stated scope, prove
$$r_{\mathrm{alg}}(M)=r_{\mathrm{an}}(M),$$
where $r_{\mathrm{alg}}(M)=\dim_F H^1_{\mathrm{mot}}(\mathbb Q,M)$ when finite and $r_{\mathrm{an}}(M)=\operatorname{ord}_{s=0}L_S(M,s)$.

## Open problem references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** The source-defined modular motive and its realization data.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Status

This is the Beilinson–Bloch rank conjecture in the modular-motive normalization. It is open in general. The rank-zero and rank-one statements below are conditional results under the explicitly listed Abel–Jacobi and regulator hypotheses, not a general resolution.
