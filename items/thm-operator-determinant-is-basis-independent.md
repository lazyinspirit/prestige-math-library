---
id: thm-operator-determinant-is-basis-independent
kind: theorem
title: "The determinant of a linear operator is independent of the chosen ordered basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-linear-operator,
       thm-operator-determinant-scales-every-alternating-top-form]
justified_by: []
aliases: []
landmark: true
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
a field. If $\mathcal B$ and $\mathcal C$ are ordered bases of $V$, then

$$\det([T]_{\mathcal B})=\det([T]_{\mathcal C}).$$

Consequently [[def-determinant-of-a-linear-operator]] is well defined.

## Facts & Assumptions

**Given:** $T,V,\mathcal B,\mathcal C$ as in the statement.

[F1] The proposed value of $\det(T)$ in positive dimension is the determinant
of a representing matrix, while in dimension zero it is $1$
([[def-determinant-of-a-linear-operator]]).

[L1] In positive dimension the representing-matrix determinant is the unique
scalar by which $T$ scales every alternating top-degree form
([[thm-operator-determinant-scales-every-alternating-top-form]]).

## Proof

**Proof technique:** direct.

1.1 If $\dim V=0$, the only ordered basis is empty and the convention in [F1] gives the single value $1$. [F1]
1.2 Suppose $\dim V\geq 1$. Applying [L1] first with $\mathcal B$ and then with $\mathcal C$ characterises both $\det([T]_{\mathcal B})$ and $\det([T]_{\mathcal C})$ as the same unique basis-free scaling scalar. [L1]
2.1 The two matrix determinants are therefore equal; together with step 1.1, this proves the claim in every finite dimension. [step 1.1, step 1.2] ∎