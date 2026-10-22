---
id: def-qsmx-information-conventions
kind: definition
title: Dimensionless entropy, mutual and conditional information
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qc-density-operator
  - def-it-von-neumann-entropy
  - def-it-finite-dimensional-quantum-relative-entropy
  - def-qc-partial-trace
  - lem-it-partial-traces-of-a-state-are-states
dependency_roles:
  def-qc-density-operator: mathematical-premise
  def-it-von-neumann-entropy: mathematical-premise
  def-it-finite-dimensional-quantum-relative-entropy: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  lem-it-partial-traces-of-a-state-are-states: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2.1, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, Chapter 11, §§11.1 and 11.6, second-edition prepublication full text
      url: https://arxiv.org/pdf/1106.1445v8
verification:
  precheck: pass
---

## Definition

All Hilbert spaces in this item are nonzero and finite-dimensional over $\mathbb C$. A density operator $\rho$ on $H$ is a Hermitian positive semidefinite endomorphism with $\operatorname{Tr}\rho=1$. Its dimensionless von Neumann entropy, in nats, is

$$S(\rho):=-\operatorname{Tr}(\rho\log\rho)=-\sum_{j:\lambda_j>0}\lambda_j\log\lambda_j,$$

where $\lambda_j$ are the eigenvalues of $\rho$, the logarithm is natural, and $0\log0:=0$. For any positive semidefinite endomorphisms $X,Y$ on one finite-dimensional $H$, let $\operatorname{supp}X:=(\ker X)^\perp$. Define

$$D(X\|Y):=\operatorname{Tr}(X\log X)-\operatorname{Tr}(X\log Y)$$

when $\operatorname{supp}X\subseteq\operatorname{supp}Y$, taking each logarithm spectrally on its positive support and setting zero-eigenvalue contributions to zero; set $D(X\|Y):=+\infty$ otherwise. For density operators this is the finite-dimensional quantum relative entropy in nats.

For a density operator $\rho_{AB}$ on the ordered product $H_A\otimes H_B$, define $\rho_A:=\operatorname{Tr}_B\rho_{AB}$ and $\rho_B:=\operatorname{Tr}_A\rho_{AB}$, where in orthonormal product bases $\bigl(\operatorname{Tr}_B R\bigr)_{ii'}=\sum_jR_{(i,j),(i',j)}$ and the first factor is retained. Define

$$I(A:B)_\rho:=S(\rho_A)+S(\rho_B)-S(\rho_{AB}).$$

For a density operator $\rho_{ABC}$ on $H_A\otimes H_B\otimes H_C$, define

$$\rho_{AB}:=\operatorname{Tr}_C\rho_{ABC},\qquad \rho_{BC}:=\operatorname{Tr}_A\rho_{ABC},\qquad \rho_B:=\operatorname{Tr}_A(\operatorname{Tr}_C\rho_{ABC}),$$

where each partial trace contracts the indicated tensor factor and retains the other factors in their displayed order.

$$I(A:C\mid B)_\rho:=S(\rho_{AB})+S(\rho_{BC})-S(\rho_B)-S(\rho_{ABC}),$$

using the partial traces in the displayed factor order. For any fixed positive conversion factor $k_B$ with units J/K, the corresponding physical entropy is $S_{\mathrm{phys}}(\rho):=k_BS(\rho)$; no numerical value of $k_B$ is specified here.

## Definition references

[[def-qc-density-operator]]

[[def-it-von-neumann-entropy]]

[[def-it-finite-dimensional-quantum-relative-entropy]]

[[def-qc-partial-trace]]

[[lem-it-partial-traces-of-a-state-are-states]]

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H_A,H_B,H_C$ and density operators on the tensor products appearing in the Definition. Use the ordered tensor factors displayed there and natural logarithms.

[F1] [[def-qc-density-operator]]: a density operator is Hermitian positive semidefinite and has trace one.

[F2] [[def-it-von-neumann-entropy]]: for a finite density operator, $S(\rho)=-\operatorname{Tr}(\rho\log\rho)$ with zero eigenvalues contributing $0\log0:=0$.

[F3] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(X\|Y)$ uses support inclusion and support-restricted logarithms; it is $+\infty$ when support inclusion fails.

[F4] [[def-qc-partial-trace]]: the second tensor factor is contracted by summing its equal row and column indices in an ordered product basis.

[F5] [[lem-it-partial-traces-of-a-state-are-states]]: both marginals of a finite bipartite density operator are density operators.

## Proof

1.1 By [F1], the input is a positive trace-one endomorphism on its finite tensor product. Apply [F5] to each bipartite grouping of a finite multipartite density operator; this makes every one-factor and two-factor marginal used in the Definition a density operator. Repeated partial traces use [F4] to retain the stated tensor-factor order. [given, F1, F4, F5]

2.1 Each such density operator has finitely many eigenvalues in $[0,1]$, so the finite entropy sum in [F2] is a real number, including when some eigenvalues vanish. The relative entropy clause is defined on exactly the two support cases in [F3]. Therefore $I(A:B)$ and $I(A:C\mid B)$ are finite real-valued functions on the stated density operators, and $D$ has the extended-real domain specified in the Definition. [given, F2, F3, step 1.1, algebra] ∎
