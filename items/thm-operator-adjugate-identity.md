---
id: thm-operator-adjugate-identity
kind: theorem
title: "For a positive-dimensional finite-dimensional operator, T adj(T)=adj(T)T=det(T) I"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjugate-of-a-linear-operator,
       thm-adjugate-identity-over-a-commutative-ring,
       thm-operator-determinant-is-basis-independent,
       thm-matrix-of-a-composite-is-the-product,
       thm-matrix-representation-is-a-vector-space-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to V$ be a linear operator on a finite-dimensional vector space over
a field, with $\dim V\geq1$. Then

$$T\circ\operatorname{adj}(T) =\operatorname{adj}(T)\circ T =\det(T)I_V.$$

## Facts & Assumptions

**Given:** $T,V$ as in the statement and an ordered basis $\mathcal B$.

[F1] $[\operatorname{adj}(T)]_{\mathcal B}
=\operatorname{adj}([T]_{\mathcal B})$
([[def-adjugate-of-a-linear-operator]]).

[L1] For a positive-sized square matrix $A$,
$A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I$
([[thm-adjugate-identity-over-a-commutative-ring]]).

[L2] The matrix of a composite is the product of the representing matrices
([[thm-matrix-of-a-composite-is-the-product]]).

[L3] $\det(T)=\det([T]_{\mathcal B})$
([[thm-operator-determinant-is-basis-independent]]).

[L4] The matrix-representation map is injective
([[thm-matrix-representation-is-a-vector-space-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=[T]_{\mathcal B}$. By [F1] and [L2], the matrices of $T\circ\operatorname{adj}(T)$ and $\operatorname{adj}(T)\circ T$ are respectively $A\operatorname{adj}(A)$ and $\operatorname{adj}(A)A$. [F1, L2]
2.1 By [L1], both matrices in step 1.1 equal $\det(A)I_n$, which equals $\det(T)I_n$ by [L3]. [step 1.1, L1, L3]
3.1 Equality of representing matrices gives both asserted operator identities. [step 2.1, L4] ∎
