---
id: thm-operator-determinant-is-multiplicative
kind: theorem
title: "For endomorphisms S and T of one finite-dimensional vector space, det(ST)=det(S)det(T)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-linear-operator,
       thm-operator-determinant-is-basis-independent,
       thm-operator-determinant-scales-every-alternating-top-form]
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

If $S,T:V\to V$ are linear operators on one finite-dimensional vector space
over a field, then

$$\det(S\circ T)=\det(S)\det(T).$$

## Facts & Assumptions

**Given:** $S,T,V$ as in the statement.

[L1] On a positive-dimensional space, an operator scales every alternating
top-degree form by its determinant, and that scalar is unique
([[thm-operator-determinant-scales-every-alternating-top-form]]).

[L2] The determinant is basis independent
([[thm-operator-determinant-is-basis-independent]]).

[F1] In dimension zero, the operator determinant is defined to be $1$
([[def-determinant-of-a-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 If $\dim V=0$, all three determinants in the formula are $1$. [F1]
1.2 Suppose $\dim V=n\geq 1$, and let $\omega$ be any alternating $n$-linear form. Applying [L1] to $S$ and then to $T$ gives $$ \omega(STv_0,\ldots,STv_{n-1}) =\det(S)\det(T)\omega(v_0,\ldots,v_{n-1}). $$ [L1]
2.1 The uniqueness clause of [L1], applied to $S\circ T$, identifies the scaling scalar in step 1.2 as $\det(S\circ T)$. Together with step 1.1, this proves the formula in every finite dimension. [step 1.1, step 1.2, L1, L2] ∎
