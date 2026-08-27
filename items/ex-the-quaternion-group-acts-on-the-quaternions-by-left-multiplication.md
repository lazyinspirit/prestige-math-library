---
id: ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication
kind: example
title: "The quaternion group $Q_8$ acts on $\\mathbb H$ by left multiplication"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-quaternion-group-of-order-eight, def-quaternions, thm-quaternions-form-a-division-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Exercise 12"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

The quaternion group $Q_8$ acts on the real vector space $\mathbb H$ by left
multiplication:
$$q \cdot x:=qx\qquad(q \in Q_8,\ x \in \mathbb H).$$
This is a $4$-dimensional real representation of $Q_8$.

## Facts & Assumptions

**Given:** The quaternion group $Q_8$ and the quaternions $\mathbb H$.

[L1] The group $Q_8$ is the subset $\{\pm 1,\pm i,\pm j,\pm k\}$ of the nonzero quaternions ([[def-quaternion-group-of-order-eight]]).

[L2] The quaternions form a division ring, so multiplication is associative and every nonzero quaternion is invertible ([[thm-quaternions-form-a-division-ring]]).

[L3] The quaternions are the real vector space $\mathbb R^4$ with basis $1,i,j,k$ ([[def-quaternions]]).

## Verification

**Proof technique:** direct.

1.1 For each $q \in Q_8$, define $L_q:\mathbb H \to \mathbb H$ by $L_q(x)=qx$. By [L2], quaternion multiplication is distributive and real scalars commute with every quaternion, so $L_q$ is $\mathbb R$-linear. By [L3], the underlying vector space is $4$-dimensional. [L2, L3, given]

1.2 Because each $q \in Q_8$ is nonzero by [L1], [L2] gives an inverse $q^{-1}$ in $\mathbb H$, and $L_{q^{-1}}$ is the inverse of $L_q$. So every $L_q$ is an invertible linear map. [L1, L2]

2.1 The action laws hold: $1 \cdot x=x$, and $(pq) \cdot x=(pq)x=p(qx)=p \cdot (q \cdot x)$ by associativity from [L2]. Therefore left multiplication is a finite-dimensional real representation of $Q_8$. [step 1.1, step 1.2, L2] ∎
