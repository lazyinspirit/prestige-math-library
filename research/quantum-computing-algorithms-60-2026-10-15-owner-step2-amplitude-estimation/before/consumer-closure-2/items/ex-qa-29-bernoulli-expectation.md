---
id: ex-qa-29-bernoulli-expectation
kind: example
title: "Bernoulli mean as a good-state probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - def-qa-29-expectation-estimation-task
  - def-qa-29-coherent-sampler
  - lem-qa-29-coherent-sampler-outcome-law
  - alg-qa-29-quantum-expectation-estimation
  - thm-qa-29-quantum-expectation-error-cost
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; this is a two-outcome finite probability law."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Theorem 3"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Theorem 12"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
verification:
  precheck: n/a
---

## Example

Let $X\in\{0,1\}$ have $\Pr(X=1)=p$ and use $g(X)=X$ on the range $[0,1]$. Suppose a coherent sampler for this law and its explicitly costed inverse/controlled operations are supplied.

## Facts & Assumptions

**Given:** The Bernoulli law, the observable $g(x)=x$, and a coherent sampler that prepares its finite law.

[F1] [[def-qa-29-expectation-estimation-task]]: $\mu=\sum_xp_xg(x)$.

[F2] [[def-qa-29-coherent-sampler]]: the specified finite unitary preparation is an explicit input, with inverse, controlled, and rotation costs declared.

[F3] [[lem-qa-29-coherent-sampler-outcome-law]]: measuring the sample register returns $x$ with probability $p_x$.

[F4] [[alg-qa-29-quantum-expectation-estimation]] uses the affine value $q(x)=(g(x)-a)/(b-a)$ and a good flag.

[F5] [[thm-qa-29-quantum-expectation-error-cost]] gives its success and query guarantee.

## Verification
1.1 Here $\mu=(1-p)\cdot0+p\cdot1=p$ by [F1] and the two-point law [F3]. The range is $[a,b]=[0,1]$, so [F4] gives $q(x)=x$. [given, F1, F3, F4, algebra]

2.1 Conditional on sample $x$, the controlled rotation places good probability $x$. Averaging over the sample law, the total good probability is $(1-p)\cdot0+p\cdot1=p=\mu$. [F3, F4, step 1.1, algebra]

3.1 Thus the QA13 amplitude estimator is estimating the Bernoulli mean itself; [F5] yields additive error $\varepsilon$ with confidence $1-\delta$ and $O(\varepsilon^{-1}(1+\ln(1/\delta)))$ controlled sampler/reflection rounds. The circuit costs remain those declared by the supplied sampler. [given, F2, F5, step 2.1] ∎