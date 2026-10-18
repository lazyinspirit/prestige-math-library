---
id: lem-it-quantum-entropy-maximized-at-maximally-mixed-state
kind: lemma
title: The maximally mixed state maximizes finite quantum entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-von-neumann-entropy
  - def-it-finite-dimensional-quantum-relative-entropy
  - thm-it-quantum-relative-entropy-nonnegative-equality
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof is a finite spectral calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Proposition 5.22 and §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Theorem 11.8.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space of dimension $d$, and let $\rho$ be a density operator on $H$. Then

$$S(\rho)\le\ln d,$$

with equality if and only if $\rho=I_H/d$.

## Facts & Assumptions

**Given:** The finite-dimensional state $\rho$ and nonzero space $H$ in the Statement.

[F1] [[def-it-von-neumann-entropy]]: $S(\rho)=-\operatorname{tr}(\rho\ln\rho)$, with zero-eigenvalue terms omitted.

[F2] [[def-it-finite-dimensional-quantum-relative-entropy]]: on support inclusion, $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$.

[F3] [[thm-it-quantum-relative-entropy-nonnegative-equality]]: for finite-dimensional density operators $\rho,\sigma$, $D(\rho\|\sigma)\ge0$, with equality exactly when $\rho=\sigma$.

[F4] [[def-qc-density-operator]] and [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: states are nonnegative trace-one operators and have finite orthonormal eigenbases.

[F5] [[def-trace-of-an-endomorphism]]: the trace of $I_H$ is $d$ and the trace is linear.

[F6] [[thm-natural-logarithm-laws]]: $\ln(1/d)=-\ln d$ for $d>0$.

## Proof

1.1 The operator $\tau:=I_H/d$ is a density operator: it is nonnegative and has trace $d/d=1$ by [F4]–[F5]. Its support is all of $H$, so $\operatorname{supp}(\rho)\subseteq\operatorname{supp}(\tau)$ and the finite formula in [F2] applies. [F2, F4, F5, given, algebra]

2.1 Spectral calculus gives $\ln\tau=\ln(1/d)I_H=-(\ln d)I_H$ by [F4], [F6]. Hence [F1]–[F2] yield $D(\rho\|\tau)=\operatorname{tr}(\rho\ln\rho)-\operatorname{tr}(\rho\ln\tau)=-S(\rho)+\ln d$, using $\operatorname{tr}(\rho)=1$ by [F4]. By [F3], this is nonnegative, so $S(\rho)\le\ln d$. [F1, F2, F3, F4, F6, step 1.1, algebra]

3.1 Equality $S(\rho)=\ln d$ is equivalent by step 2.1 to $D(\rho\|\tau)=0$. The equality case of [F3] then gives $\rho=\tau=I_H/d$. Conversely, substituting $\rho=I_H/d$ into [F1] gives $S(\rho)=\ln d$. [F1, F3, step 2.1, algebra] ∎
