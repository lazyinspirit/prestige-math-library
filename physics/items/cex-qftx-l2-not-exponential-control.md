---
id: cex-qftx-l2-not-exponential-control
kind: counterexample
title: L² convergence alone does not control exponential tilts
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 6
proof_strategy: direct
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-p-phi-two-construction-contract
  - thm-exponential-beats-every-polynomial
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-p-phi-two-construction-contract: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3.1"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF pp. 10–12: the finite-volume P(φ)₂ measure requires exponential integrability; this item gives a separate elementary counterexample to inferring it from L² convergence."
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: the Gaussian/Wick setup motivating the distinction between an L² Wick limit and a normalized exponential tilt; the counterexample is proved locally."
---

## Statement refuted

Under the Axiom of Choice and its countable-family consequence, on a probability space, if real random variables $U_n$ converge to $0$ in $L^2$, then their exponential normalizers $\mathbb E[e^{-U_n}]$ are uniformly bounded.

## Statement references

[[def-qftx-p-phi-two-construction-contract]]

## Facts & Assumptions

**Given:** The probability space $([0,1],\mathcal B,\ell)$ with Lebesgue probability measure $\ell$, the construction-contract meaning of an exponential normalizer, and integers $n\ge1$.

[A1] The Axiom of Choice and its countable-family consequence are inherited from the contract context; no selection is used in the explicit interval construction. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The proposed continuum interaction contract requires a finite positive exponential normalization as a separate proof obligation; it does not infer one from an $L^2$ limit. [[def-qftx-p-phi-two-construction-contract]]

[F2] For every fixed nonnegative integer power and positive scale, the exponential dominates that power at infinity. [[thm-exponential-beats-every-polynomial]]

## Counterexample

**Given:** [A1], [F1]–[F2], and $n\ge1$. Let $A_n=[0,e^{-n/2}]$ and set $U_n(x)=-n$ for $x\in A_n$, while $U_n(x)=0$ for $x\notin A_n$.

1.1 The set $A_n$ has Lebesgue measure $e^{-n/2}$, so $\|U_n\|_2^2=\int_{A_n}n^2\,d\ell=n^2e^{-n/2}$. By [F2] with power $2$ and scale $1/2$, this tends to $0$; hence $U_n\to0$ in $L^2$. [A1, F2, given, algebra]

2.1 On $A_n$, $e^{-U_n}=e^n$, and on its complement $e^{-U_n}=1$. Therefore $\mathbb E[e^{-U_n}]=e^n e^{-n/2}+1-e^{-n/2}=e^{n/2}+1-e^{-n/2}$, which tends to $+\infty$ by [F2]. Thus these $L^2$-convergent variables have unbounded exponential normalizers, contradicting the refuted implication. [F1, F2, step 1.1, given, algebra] ∎
