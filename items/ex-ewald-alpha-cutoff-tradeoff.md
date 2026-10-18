---
id: ex-ewald-alpha-cutoff-tradeoff
kind: example
title: "Opposite real and reciprocal cutoff trends in the Ewald parameter"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-countable-choice, def-ewald-three-dimensional-periodic-source-data, lem-ewald-lattice-shell-gaussian-tail-controllers, thm-ewald-real-reciprocal-cutoff-error-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Fix the unit cell, a neutral dipole with nonzero total absolute charge $Q$, and
real and reciprocal cutoffs $R,K_c\ge1$. The real-space potential-tail bound
decreases strictly with $\alpha$, while the reciprocal-space potential-tail
bound increases strictly with $\alpha$. Thus choosing $\alpha$ at fixed
cutoffs and target tolerance balances two opposing certified contributions.

## Facts & Assumptions

**Given:** A fixed neutral configuration with $Q>0$, fixed cutoffs $R,K_c\ge1$,
and a positive parameter $\alpha$.

[A1] The Ewald formulas use Countable Choice ([[def-countable-choice]]).

[F1] The real and reciprocal potential-tail bounds are $B_R^U=QC_R(\sqrt\pi\alpha)^{-1}T_3(\alpha^2,\lfloor R\rfloor)$ and $B_K^U=4\pi QC_KV^{-1}T_3((4\alpha^2)^{-1},\lfloor K_c\rfloor)$ ([[thm-ewald-real-reciprocal-cutoff-error-bounds]]).

[F2] $T_3(\beta,M)=\sum_{m=M}^\infty(m+1)^3e^{-\beta m^2}$ is finite for $\beta>0$, and each term is positive ([[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

## Verification

**Proof technique:** direct.

1.1 For $\alpha>0$ set $\mathcal R(\alpha)=\frac{QC_R}{\sqrt\pi\alpha}\sum_{m=M_R}^\infty(m+1)^3e^{-\alpha^2m^2}$ and $\mathcal K(\alpha)=\frac{4\pi QC_K}{V}\sum_{m=M_K}^\infty(m+1)^3e^{-m^2/(4\alpha^2)}$, where $M_R=\lfloor R\rfloor$ and $M_K=\lfloor K_c\rfloor$. These are exactly the two bounds in [F1], and they are finite by [F2]. [given, A1, F1, F2, construct]

1.2 If $0<\alpha_1<\alpha_2$, then for every $m\ge M_R\ge1$, $e^{-\alpha_2^2m^2}/\alpha_2<e^{-\alpha_1^2m^2}/\alpha_1$ because both positive factors strictly decrease. The positive convergent sum therefore gives $\mathcal R(\alpha_2)<\mathcal R(\alpha_1)$. [F1, F2, algebra]

2.1 For every $m\ge M_K\ge1$, $e^{-m^2/(4\alpha_2^2)}>e^{-m^2/(4\alpha_1^2)}$, since $\alpha_2>\alpha_1$ makes the negative exponent less negative. Summing positive terms gives $\mathcal K(\alpha_2)>\mathcal K(\alpha_1)$. Hence a fixed-tolerance certificate must balance the real and reciprocal tails; the theorem does not infer an optimal parameter from FFT work or RMS data. [F1, F2, algebra] ∎
