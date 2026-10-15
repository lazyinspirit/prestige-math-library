---
id: ex-discrete-elbo-equality-at-exact-posterior
kind: example
title: "Exact discrete variational family attains log evidence"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-variational-family-and-elbo
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\Omega=\{0,1\}$ with counting measure, $\gamma(0)=2$, and $\gamma(1)=1$. Then $Z=3$ and $\pi=(2/3,1/3)$. Taking $q=\pi$ attains $\operatorname{ELBO}(q)=\log3$. The distinct admissible density $q=(1/2,1/2)$ gives $\operatorname{ELBO}(q)=\tfrac32\log2<\log3$.

## Facts & Assumptions

**Given:** The two-point counting space, target weights $\gamma=(2,1)$, and ELBO convention.

[F1] [[def-variational-family-and-elbo]]: $Z=\int\gamma d\mu$, $\pi=\gamma/Z$, and $\operatorname{ELBO}(q)=\sum_xq(x)(\log\gamma(x)-\log q(x))$ for admissible $q$.

[F2] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log1=0$, and it satisfies the product and quotient laws on positive reals.


## Verification

**Given:** The data in the Example.

1.1 Counting measure gives $Z=2+1=3$ and $\pi=(2/3,1/3)$. For $q=\pi$, each positive coordinate has $\log q(x)=\log\gamma(x)-\log3$, so the defining sum is $\operatorname{ELBO}(\pi)=\log3$. Both terms are finite and $q$ is supported on $\pi$. [F1, algebra]

2.1 For $q=(1/2,1/2)$, the defining sum is $\tfrac12\log2+\log2=\tfrac32\log2$. Since $(2^{3/2})^2=8<9=3^2$ and both bases are positive, $2^{3/2}<3$. The log laws give $\log3-\tfrac32\log2=\tfrac12\log(9/8)>0$, because $9/8>1$ and [F2] makes $\log$ strictly increasing with $\log1=0$. This density is admissible because both target weights are positive and the space is finite. [F1, F2, step 1.1, algebra] ∎
