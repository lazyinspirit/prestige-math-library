---
id: prop-tgrx-finite-modular-balance
kind: proposition
title: Finite relative entropy equals modular energy minus entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - def-it-von-neumann-entropy
  - def-trace-of-an-endomorphism
  - def-qc-partial-trace
  - thm-it-quantum-relative-entropy-partial-trace-data-processing
dependency_roles:
  def-it-finite-dimensional-quantum-relative-entropy: mathematical-premise
  def-it-von-neumann-entropy: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-it-quantum-relative-entropy-partial-trace-data-processing: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, author-hosted complete book manuscript, §§5.2.1–5.2.3
      url: https://jhwatrous.github.io/TQI.pdf
    - title: Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, §2.5
      url: https://arxiv.org/pdf/1105.3445
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, complete book manuscript, §§11.1 and 11.8
      url: https://arxiv.org/pdf/1106.1445v8
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space. Let $\rho,\sigma:H\to H$ be self-adjoint linear maps with nonnegative eigenvalues and trace one, and suppose every eigenvalue of $\sigma$ is strictly positive. Define $K_\sigma:=-\log\sigma$ by spectral calculus, and for any self-adjoint $\tau:H\to H$ with nonnegative eigenvalues and trace one define $s(\tau):=-\operatorname{tr}(\tau\log\tau)=-\sum_{\lambda_j(\tau)>0}\lambda_j(\tau)\log\lambda_j(\tau)$, with the zero-eigenvalue term $0\log0:=0$ and natural logarithms, so the entropy is in nats. Define the modular-energy difference relative to $\sigma$ by $\Delta_K(\rho,\sigma):=\operatorname{tr}((\rho-\sigma)K_\sigma)$. Then

$$D(\rho\|\sigma)=\Delta_K(\rho,\sigma)-(s(\rho)-s(\sigma)).$$

For any nonzero finite-dimensional complex inner-product spaces $H_A,H_B$ with $H=H_A\otimes H_B$, partial tracing both states over $H_B$ cannot increase relative entropy:

$$D(\operatorname{Tr}_{B}\rho\|\operatorname{Tr}_{B}\sigma)\le D(\rho\|\sigma).$$

The identity and inequality are finite-dimensional mathematical statements; no Hamiltonian, physical energy, physical units, continuum limit, or gravitational entropy is assumed.

## Statement references

[[def-it-finite-dimensional-quantum-relative-entropy]]

[[def-it-von-neumann-entropy]]

[[def-trace-of-an-endomorphism]]

[[def-qc-partial-trace]]

[[thm-it-quantum-relative-entropy-partial-trace-data-processing]]

[John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.3](https://jhwatrous.github.io/TQI.pdf)

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, §2.5](https://arxiv.org/pdf/1105.3445)

[Mark M. Wilde, From Classical to Quantum Shannon Theory, §§11.1 and 11.8](https://arxiv.org/pdf/1106.1445v8)

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex inner-product space $H$ and self-adjoint $\rho,\sigma:H\to H$ with nonnegative eigenvalues and trace one, with $\sigma$ having strictly positive eigenvalues.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: for nonnegative endomorphisms $A,B$, if $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$ then $D(A\|B)=\operatorname{tr}(A\log A)-\operatorname{tr}(A\log B)$ using spectral logarithms on positive supports; otherwise $D(A\|B)=+\infty$.

[F2] [[def-it-von-neumann-entropy]] defines the von Neumann entropy $S(\tau)=-\operatorname{tr}(\tau\log\tau)$ for a finite-dimensional density endomorphism using the natural logarithm. The function $s$ in the Statement is the same finite spectral sum, written with lowercase $s$ and the convention $0\log0:=0$.

[F3] [[def-trace-of-an-endomorphism]]: $\operatorname{tr}(T)$ is the basis-independent trace of a finite-dimensional endomorphism, given by the sum of diagonal matrix entries in any basis; it is linear by this finite-sum definition.

[F4] [[def-qc-partial-trace]]: for nonnegative $R$ on $H_A\otimes H_B$, the partial trace $\operatorname{Tr}_B R$ is the endomorphism of $H_A$ whose product-basis entries are $(\operatorname{Tr}_B R)_{ii'}=\sum_j R_{(i,j),(i',j)}$.

[F5] [[thm-it-quantum-relative-entropy-partial-trace-data-processing]]: for nonnegative $A,B$ on a finite tensor product $H_A\otimes H_B$, $D(\operatorname{Tr}_{B}A\|\operatorname{Tr}_{B}B)\le D(A\|B)$.

## Proof

1.1 Since $\sigma$ has only positive eigenvalues, $\operatorname{supp}(\sigma)=H$ and hence $\operatorname{supp}(\rho)\subseteq\operatorname{supp}(\sigma)$. By [F1], $D(\rho\|\sigma)$ is finite and equals $\operatorname{tr}(\rho\log\rho)-\operatorname{tr}(\rho\log\sigma)=-s(\rho)+\operatorname{tr}(\rho K_\sigma)$. [given, F1, F2, algebra]

2.1 By [F2] and $K_\sigma=-\log\sigma$, $s(\sigma)=\operatorname{tr}(\sigma K_\sigma)$. Linearity of trace [F3] then gives $\Delta_K(\rho,\sigma)-(s(\rho)-s(\sigma))=\operatorname{tr}(\rho K_\sigma)-\operatorname{tr}(\sigma K_\sigma)-s(\rho)+s(\sigma)=\operatorname{tr}(\rho K_\sigma)-s(\rho)=D(\rho\|\sigma)$ by step 1.1. This proves the finite modular-energy identity. [F2, F3, step 1.1, algebra]

3.1 With the finite identity established in step 2.1, apply [F5] for the separate partial-trace claim to the nonnegative endomorphisms $\rho,\sigma$ on $H_A\otimes H_B$, with the partial trace defined in [F4], to obtain the displayed inequality. [given, F4, F5, step 2.1, algebra] ∎

