---
id: lem-author-3bf637a47abd-weighted-scale-covariance
kind: lemma
title: Covariance under a common positive rescaling of weights
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-vertex-hilbert-space
  - prop-expander-prereq-selfadjoint-order-and-norm
  - lem-author-3bf637a47abd-weighted-loop-calculus
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
  lem-author-3bf637a47abd-weighted-loop-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Let $A$ be a network on $n\ge1$ vertices, let $d_0>0$, $J$ the all-ones matrix, $I$ the identity, and $\Delta_A=A-(d_0/n)J$, $\Delta_L=L_A-d_0I+(d_0/n)J$. The norm is the induced vertex-space operator norm, and $B\preceq C$ means that $C-B$ has nonnegative quadratic form. Under $(A,d_0)\mapsto(\lambda A,\lambda d_0)$ for $\lambda>0$, the degrees, Laplacian, both centered matrices, energy and homogeneous rotating-frame vector field all multiply by $\lambda$. Consequently the inequalities $\|\Delta_A\|\le\alpha d_0$ and $c^-d_0I\preceq\Delta_L\preceq c^+d_0I$ hold before rescaling if and only if they hold afterward with the same $\alpha,c^-,c^+$. The network and calculus conventions are [[def-expander-prereq-loop-compatible-networks]] and [[lem-author-3bf637a47abd-weighted-loop-calculus]]; matrix conventions are [[def-expander-prereq-vertex-hilbert-space]] and [[prop-expander-prereq-selfadjoint-order-and-norm]].

## Facts & Assumptions

[F1] Row degrees and the Laplacian are computed from finite row sums ([[def-expander-prereq-loop-compatible-networks]]).

[F2] Matrices act on the finite vertex space, whose induced norm is homogeneous; matrix order is tested by quadratic forms ([[def-expander-prereq-vertex-hilbert-space]], [[prop-expander-prereq-selfadjoint-order-and-norm]]).

[F3] The weighted energy and rotating-frame vector field are finite sums linear in the entries of the network ([[lem-author-3bf637a47abd-weighted-loop-calculus]]).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Multiplying every entry by $\lambda$ multiplies every row sum by $\lambda$, hence also the degree matrix and its difference with the adjacency matrix. Substituting $\lambda A$ and $\lambda d_0$ in the definitions gives centered matrices $\lambda\Delta_A$ and $\lambda\Delta_L$. Linearity of the sums in [F3] similarly gives energy $\lambda E_A$ and vector field $\lambda F_A$. [F1, F3, algebra]

2.1 Norm homogeneity gives $\|\lambda\Delta_A\|=\lambda\|\Delta_A\|$. Each quadratic form in the two order differences also multiplies by the strictly positive number $\lambda$, which preserves and reflects nonnegativity. Dividing all bounds by $\lambda$ proves both directions, with the same dimensionless parameters. [F2, step 1.1, algebra] ∎
