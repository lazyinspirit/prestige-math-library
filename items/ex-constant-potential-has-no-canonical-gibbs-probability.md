---
id: ex-constant-potential-has-no-canonical-gibbs-probability
kind: example
title: "A constant potential has no canonical Gibbs probability on the line"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - def-axiom-of-choice
justified_by: []
axiom_base: Full AC
axiom_use: "AC is inherited through the cited model and invariant-law suppliers; the example arithmetic uses no further choice."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §4.1 and §5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Assyr Abdulle, Gilles Vilmart, and Konstantinos C. Zygalakis, Long time accuracy of Lie-Trotter splitting methods for Langevin dynamics, §2.1"
      url: "https://www.unige.ch/~vilmart/paper_langevin_splitting.pdf"
---

## Example

On $\mathbb R$, take $V(q)=0$, any fixed mass $m>0$, friction $\gamma>0$, and inverse temperature $\beta>0$. The configurational partition integral diverges, so the canonical Gibbs expression does not define a probability. The momentum factor is normalizable but cannot repair the infinite configurational factor.

## Facts & Assumptions

**Given:** $V(q)=0$ for every $q\in\mathbb R$, $m>0$, $\gamma>0$, $\beta>0$, and the canonical normalizer in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]].

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: a canonical Gibbs probability requires a finite positive normalizing integral $Z=\int e^{-\beta H(q,p)}dq\,dp$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the model-definition interface [F1]; the finite-rectangle lower bound uses no further choice.

## Verification

**Given:** $V(q)=0$ for every $q\in\mathbb R$, $m>0$, $\gamma>0$, $\beta>0$, and the canonical normalizer in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]].

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: a canonical Gibbs probability requires a finite positive normalizing integral $Z=\int e^{-\beta H(q,p)}dq\,dp$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the model-definition interface [F1]; the finite-rectangle lower bound uses no further choice.



**Given:** The data in the Example.

1.1 For every $R>0$, $\int_{-R}^{R}e^{-\beta V(q)}dq=\int_{-R}^{R}1\,dq=2R$. These integrals are unbounded as $R\to\infty$, so $\int_{\mathbb R}e^{-\beta V(q)}dq=\infty$. [given, algebra]

2.1 On the finite rectangle $[-R,R]\times[-1,1]$ the phase-space integrand is at least $e^{-\beta/(2m)}$, so its integral is at least $4R e^{-\beta/(2m)}$. These lower bounds diverge as $R\to\infty$, hence the full normalizer $Z$ is infinite and the expression cannot be normalized to a probability. [A1, F1, given, algebra] ∎
