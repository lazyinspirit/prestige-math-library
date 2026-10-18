---
id: ex-it-bell-pair-negative-conditional-entropy
kind: example
title: A Bell pair has negative quantum conditional entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-quantum-information-measures, def-it-von-neumann-entropy, def-qc-density-operator, def-qc-partial-trace, def-qc-first-factor-partial-trace, def-qc-tensor-register-and-permutation, thm-non-negative-operator-characterisations, thm-natural-logarithm-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.7"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Example

Let $H_A=H_B=\mathbb C^2$ with computational bases $e_0,e_1$, let $\phi=(e_0\otimes e_0+e_1\otimes e_1)/\sqrt2$, and define the pure state $\rho_{AB}x:=\langle x,\phi\rangle\phi$. Then the conditional entropy is $S(A\mid B)_\rho=-\ln2$ nats.

## Facts & Assumptions

**Given:** The two-qubit vector $\phi$ and the rank-one state $\rho_{AB}$ in the Example.

[F1] [[def-it-finite-quantum-information-measures]]: $S(A\mid B)_\rho=S(\rho_{AB})-S(\rho_B)$.

[F2] [[def-it-von-neumann-entropy]]: $S(\rho)=-\sum_{\lambda>0}\lambda\ln\lambda$.

[F3] [[def-qc-density-operator]]: a state is non-negative with trace one.

[F4] [[def-qc-partial-trace]]: $\operatorname{Tr}_B$ sums the matching second-factor basis indices.

[F5] [[def-qc-first-factor-partial-trace]]: $\operatorname{Tr}_A$ sums the matching first-factor basis indices.

[F6] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing, $\ln1=0$, and $\ln(1/2)=\ln1-\ln2=-\ln2$.

## Verification

1.1 The vector $\phi$ is a unit vector by orthonormality of the product basis, so the rank-one projection $\rho_{AB}$ has eigenvalues $1,0,0,0$ and is a state by [F3]. Hence $S(\rho_{AB})=0$ by [F2]. [given, F2, F3, construct]

2.1 Expanding $\rho_{AB}$ gives diagonal terms $\tfrac12P_{e_0\otimes e_0}+\tfrac12P_{e_1\otimes e_1}$ and two off-diagonal cross terms. The partial traces [F4]–[F5] remove those cross terms because their traced basis indices differ, and leave $\rho_A=\rho_B=\tfrac12(P_{e_0}+P_{e_1})=I_2/2$. [given, F4, F5, step 1.1, algebra]

3.1 The eigenvalues of $I_2/2$ are $1/2,1/2$, so [F2] and [F6] give $S(\rho_B)=-2(\tfrac12\ln\tfrac12)=\ln2$. Since $2>1$, strict increase in [F6] gives $\ln2>\ln1=0$. Substitution into [F1] and step 1.1 yields $S(A\mid B)_\rho=0-\ln2=-\ln2<0$. [given, F1, F2, F6, step 1.1, step 2.1, algebra] ∎

