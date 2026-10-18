---
id: cex-it-non-full-support-quantum-kl-is-infinite
kind: counterexample
title: Normalized states can have infinite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, def-qc-density-operator, def-qc-register-and-computational-basis, thm-non-negative-operator-characterisations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement refuted

Every pair of density operators on the same finite-dimensional space has finite quantum relative entropy.

## Facts & Assumptions

**Given:** A two-dimensional register $H=\mathbb C^2$ with computational orthonormal basis $e_0,e_1$.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(\rho\|\sigma)=+\infty$ whenever $\operatorname{supp}(\rho)\nsubseteq\operatorname{supp}(\sigma)$.

[F2] [[def-qc-density-operator]]: a density operator is a non-negative endomorphism of trace one.

[F3] [[def-qc-register-and-computational-basis]]: $e_0,e_1$ are orthonormal.

[F4] [[thm-non-negative-operator-characterisations]]: an orthogonal rank-one projection is non-negative.

## Counterexample

1.1 Define $P_jx:=\langle x,e_j\rangle e_j$ for $j=0,1$, and set $\rho=P_0$, $\sigma=P_1$. Each is an orthogonal rank-one projection, hence non-negative by [F4]; in the basis $e_0,e_1$ each has trace one, so both are density operators by [F2]. [given, F2, F3, F4, construct]

2.1 The range/support of $P_0$ is $\mathbb C e_0$, while the support of $P_1$ is $\mathbb C e_1$; these are orthogonal by [F3]. Thus $\operatorname{supp}(\rho)\nsubseteq\operatorname{supp}(\sigma)$, and [F1] gives $D(\rho\|\sigma)=+\infty$. This contradicts the asserted finiteness. [given, F1, F3, step 1.1, algebra] ∎

