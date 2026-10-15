---
id: cex-qft-zero-dimensional-perturbation-radius-zero
kind: counterexample
title: An existing interacting measure has zero-radius perturbation series
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-euclidean-interacting-measure
  - thm-qft-finite-asymptotic-wick-expansion
  - lem-qft-finite-gaussian-wick-moments
  - def-axiom-of-choice
dependency_roles:
  def-qft-finite-euclidean-interacting-measure: mathematical-premise
  thm-qft-finite-asymptotic-wick-expansion: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-axiom-of-choice: mathematical-premise
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement refuted

Every finite-dimensional Euclidean quartic partition function with nonnegative coupling has a perturbation Taylor series at zero coupling with positive radius of convergence.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. Let $Q\sim N(0,1)$ be the one-dimensional centered Gaussian and put $U(q)=q^4/4!$.

[A1] The Axiom of Choice is the explicit hypothesis of the finite-dimensional Gaussian-law suppliers. [[def-axiom-of-choice]]

[F1] [[def-qft-finite-euclidean-interacting-measure]] defines the Borel Gaussian reference law $\gamma_C$ and the partition integral $Z(\lambda)=\mathbb E_{\gamma_C}[e^{-\lambda U}]$.

[F2] For a finite Gaussian covariance, polynomial insertions have all Wick-pairing moments. In one dimension with variance one, $\mathbb E[Q^{2m}]=(2m-1)!!$ and odd moments vanish. [[lem-qft-finite-gaussian-wick-moments]]

[F3] The finite Euclidean partition integral is positive and finite for every $\lambda\ge0$, and its order-$M$ coefficients are $(-1)^k\mathbb E[U^k]/k!$. [[thm-qft-finite-asymptotic-wick-expansion]]

## Counterexample

**Given:** Use the measure and coefficients of [F1]–[F3] with $N=1$, covariance $C=1$, and $U(q)=q^4/4!$.

1.1 By [F1], $Z(0)=\int1\,d\gamma_1=1$. For $\lambda>0$, [F3] gives $0<Z(\lambda)<\infty$ and identifies the formal coefficients as $(-1)^n\mathbb E[U^n]/n!$. [A1, F1, F3, algebra]

1.2 With $U(q)=q^4/4!$, [F2] gives $$a_n=\frac{\mathbb E[Q^{4n}]}{(4!)^n n!}=\frac{(4n-1)!!}{(4!)^n n!}=\frac{(4n)!}{(4!)^n n!\,2^{2n}(2n)!}.$$ The pairing count follows by pairing the first of $4n$ factors with any of the other $4n-1$ factors and repeating on the remaining factors. [F2, algebra]

2.1 Dividing successive coefficients from step 1.2 yields $$\frac{a_{n+1}}{a_n}=\frac{(4n+1)(4n+3)}{24(n+1)}\longrightarrow\infty.$$ Hence for each $\lambda>0$ the absolute term ratio $\lambda a_{n+1}/a_n$ eventually exceeds $2$, so the terms do not tend to zero and the formal series diverges at every nonzero $\lambda$; its radius of convergence is zero. [step 1.2, algebra]

3.1 The exact probability measure still exists for all $\lambda\ge0$ by step 1.1, while its perturbation series has zero radius by step 2.1. This refutes the Statement without asserting Borel summability or any continuum-field result. [step 1.1, step 2.1] ∎
