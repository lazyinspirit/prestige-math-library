---
id: thm-spectral-radius-is-bounded-by-average-and-maximum-degree
kind: theorem
title: "The adjacency spectral radius lies between the average degree and the maximum degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-spectrum-spectral-radius-and-cospectrality, def-rayleigh-quotient, cor-rayleigh-quotient-extreme-eigenvalue-characterisation, thm-gershgorin-disk-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Section 14.1"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Statement

Let $G$ be a finite simple graph on $n\ge1$ vertices, let

$$\bar d(G):=\frac1n\sum_{v\in V(G)}\deg(v)$$

be its average degree, and let $\Delta(G)$ be its maximum degree. Then its
adjacency spectral radius satisfies

$$\bar d(G)\le\rho(G)\le\Delta(G).$$

## Facts & Assumptions

**Given:** A finite simple graph $G$ on $n\ge1$ vertices, with adjacency matrix $A$.

[F1] The degree of a vertex is the number of $1$'s in the corresponding row of $A$, and $\Delta(G)$ is the maximum of those row sums ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L1] For a real symmetric matrix, the largest eigenvalue is the maximum of the Rayleigh quotient ([[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]], [[def-rayleigh-quotient]]).

[L2] Every eigenvalue of a matrix lies in one of its Gershgorin disks ([[thm-gershgorin-disk-theorem]]).

[F2] The spectral radius is the maximum absolute value of the adjacency eigenvalues ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathbf 1$ be the all-ones vector. Then $R_A(\mathbf 1)=\frac{\mathbf 1^{\mathsf T}A\mathbf 1}{\mathbf 1^{\mathsf T}\mathbf 1}=\frac{\sum_{v\in V(G)}\deg(v)}{n}=\bar d(G)$, because $\mathbf 1^{\mathsf T}A\mathbf 1$ adds all row sums of $A$. By [L1], the largest adjacency eigenvalue is at least this Rayleigh quotient, so $\lambda_1(G)\ge\bar d(G)$. Hence $\rho(G)\ge\bar d(G)$ by [F2]. [F1, L1, F2, algebra]

1.2 Every Gershgorin disk of $A$ is centered at $0$, because the diagonal of an adjacency matrix is zero, and its radius is the corresponding row sum, hence at most $\Delta(G)$ by [F1]. Therefore [L2] implies $|\lambda|\le\Delta(G)$ for every adjacency eigenvalue $\lambda$, so [F2] gives $\rho(G)\le\Delta(G)$. [F1, L2, F2]

2.1 Combining steps 1.1 and 1.2 yields the stated bounds. [step 1.1, step 1.2] ∎
