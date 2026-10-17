---
id: alg-baoab-underdamped-langevin-splitting
kind: algorithm
title: "BAOAB underdamped Langevin splitting"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
axiom_base: Full AC
axiom_use: "AC is inherited through the stated Gaussian vector law and model definition; the five-step procedure makes no further choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2, pp. 85–87"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
---

## Definition

Use the equation and conventions of [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]. Given a valid state $(q_n,p_n)\in\mathbb R^{2d}$, a step $h>0$, and a fresh independent vector $\xi_n\sim N_d(0,I_d)$, put $a=e^{-\gamma h}$ and execute exactly these five substeps in order:

1. **B half kick:** $p^{(1)}=p_n-\tfrac h2\nabla V(q_n)$.
2. **A half drift:** $q^{(1)}=q_n+\tfrac h2M^{-1}p^{(1)}$.
3. **O full thermostat:** $p^{(2)}=a p^{(1)}+\sqrt{\beta^{-1}(1-a^2)}M^{1/2}\xi_n$.
4. **A half drift:** $q_{n+1}=q^{(1)}+\tfrac h2M^{-1}p^{(2)}$.
5. **B half kick:** $p_{n+1}=p^{(2)}-\tfrac h2\nabla V(q_{n+1})$.

The output is $(q_{n+1},p_{n+1})$. If any required gradient is undefined or any input violates $h>0$, $\beta>0$, $\gamma>0$, or positive definiteness of $M$, return `failure` without an updated state. For a differentiable $V:\mathbb R^d\to\mathbb R$ and finite valid state, both gradient calls are defined; reusing the stored value $\nabla V(q_{n+1})$ as the next step's first force means one new force evaluation per subsequent step. The random-vector cost is one fresh $d$-dimensional standard normal per step.

## Remarks

The O step is the exact momentum Ornstein–Uhlenbeck transition proved in [[lem-exact-ornstein-uhlenbeck-momentum-substep]]. When each $\xi_n$ is independent of the current state and all earlier draws, the conditional law of the output given the current state depends only on that state; this is the Markov transition defined by the algorithm. Its procedure definition makes no claim of general invariant-law existence, uniqueness, or bias order.

A probability $\pi_h$ is invariant for this transition when one update from a state with law $\pi_h$, using an independent fresh normal vector, again has law $\pi_h$. For such an invariant probability $\pi_h$ and target Gibbs probability $\pi$, **invariant-distribution bias** means the difference between expectations under $\pi_h$ and $\pi$ for a specified observable. **Burn-in error** is the difference between the law at a finite simulation time and $\pi_h$. **Correlation error** is the effect of dependence among successive outputs on the variance of a sample average, and **sampling error** is the random deviation of that sample average from its expectation under the simulation law. These are separate quantities: the present method gives no general bound for any of them. The Gaussian draws are mathematical exact-normal inputs. **Finite-bit random-number generation error** means the discrepancy between the implemented finite-precision draw law and the exact normal law specified here; it is a separate implementation error and is not covered by this algorithm.
