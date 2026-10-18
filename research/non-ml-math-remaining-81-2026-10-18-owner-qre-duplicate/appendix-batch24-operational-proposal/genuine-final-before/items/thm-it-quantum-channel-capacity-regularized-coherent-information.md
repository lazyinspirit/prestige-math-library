---
id: thm-it-quantum-channel-capacity-regularized-coherent-information
kind: theorem
title: Regularized coherent-information formula for quantum capacity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-and-private-information-product-additivity
  - lem-it-finite-superadditive-sequence-limit
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - thm-qc-finite-stinespring-dilation
  - thm-qc-purification-existence-and-unitary-equivalence
  - def-it-von-neumann-entropy
  - thm-natural-logarithm-laws
  - thm-qc-channels-compose-and-tensor
  - thm-qc-schmidt-decomposition
  - lem-qc-tensor-product-basis-and-dimension
  - lem-it-quantum-coherent-information-complement-identity
  - def-qc-density-operator
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorems 8.53–8.55"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, Theorem 5 and Proposition 7"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §§24.4 and 24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional memoryless quantum channel. For $n\ge1$, put

$$q_n(\mathcal N):=\sup_{\rho\in\mathcal D(A^{\otimes n})}I_c(\rho,\mathcal N^{\otimes n}).$$

Under the subspace entanglement-transmission convention in [[def-it-quantum-channel-operational-capacities]],

$$Q(\mathcal N)=\lim_{n\to\infty}\frac{q_n(\mathcal N)}n=\sup_{n\ge1}\frac{q_n(\mathcal N)}n.$$

No general single-letter or additivity assertion is made.

## Facts & Assumptions

**Given:** The finite-dimensional memoryless channel and quantum-capacity convention in the Statement.

[F7] [[def-qc-density-operator]]: a rank-one projection onto a unit vector is a density operator.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]]: $I_c(\rho,\mathcal N)=S(B)-S(RB)$ for a finite purification.

[F2] [[lem-it-quantum-and-private-information-product-additivity]]: coherent information is additive on product input states for product channels.

[F3] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]] and [[def-it-von-neumann-entropy]]: every state has $S\ge0$ by the eigenvalue formula and $S\le\ln D$ on a $D$-dimensional register.

[F4] [[lem-it-finite-superadditive-sequence-limit]]: a linearly bounded superadditive sequence has normalized limit equal to its supremum.

[F5] [[lem-it-quantum-coherent-information-complement-identity]] and [[thm-qc-schmidt-decomposition]]: a pure input has zero coherent information because its receiver and environment outputs are the two marginals of a pure Stinespring output.

[F6] [[lem-qc-tensor-product-basis-and-dimension]] and [[thm-natural-logarithm-laws]]: $\dim(B^{\otimes n})=(\dim B)^n$ and $\ln(\dim(B^{\otimes n}))=n\ln(\dim B)$.

## Proof

**Proved subclaim:** The information sequence $q_n$ is nonnegative, linearly bounded, and its normalized limit exists with value $\sup_n q_n/n$.

1.1 Set $q_0=0$. A unit vector in the nonzero space $A^{\otimes n}$ defines a pure input state by [F7]. Its Stinespring output on receiver and environment is pure; its two marginals have equal entropy by the Schmidt decomposition in [F5], so the coherent-information/complement identity in [F5] gives zero. For every input state, [F1] gives $I_c=S(B^n)-S(RB^n)\le S(B^n)$ because entropy is nonnegative by [F3]. The state $B^n$ lies on a space of dimension $(\dim B)^n$ by [F6], so [F3] gives $S(B^n)\le n\ln\dim B$. Thus $0\le q_n\le n\ln\dim B$. [F1, F3, F5, F6, F7, given, algebra]

2.1 For positive $m,n$, choose states within $\delta>0$ of the respective suprema $q_m$ and $q_n$. Their product is an admissible input for $\mathcal N^{\otimes(m+n)}$, and [F2] makes its coherent information the sum of the two values. Letting $\delta\downarrow0$ gives $q_{m+n}\ge q_m+q_n$. The linear bound in step 1.1 and [F4] show that $q_n/n$ converges to $\sup_{n\ge1}q_n/n$. [F2, F4, step 1.1, algebra, choose] ∎

## Authoring status

The information-sequence limit is established, but the identification of that limit with the operational capacity $Q(\mathcal N)$ is not. The missing argument is the full quantum channel coding theorem: a coherent-information achievability proof for arbitrary input states plus the converse from entanglement fidelity to coherent information, including typical-subspace construction, recovery, and finite-dimensional fidelity/entropy continuity estimates. Watrous Theorems 8.53–8.55 and Devetak’s Theorem 5 and Proposition 7 give complete routes, but those operational coding steps are not proved in this carrier. The full Statement is therefore escalated.

