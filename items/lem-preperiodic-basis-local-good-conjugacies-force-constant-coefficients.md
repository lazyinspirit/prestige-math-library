---
dependency_level: 7
id: lem-preperiodic-basis-local-good-conjugacies-force-constant-coefficients
kind: lemma
title: "A preperiodic basis and local good conjugacies force constant coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - def-good-and-potential-good-reduction-rational-map
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-binary-map-resultant-linear-conjugacy
  - def-algebraically-closed-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a74, determinant specialization of the filled-Julia argument"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field datum with exact constants, and let $F$ be a nondegenerate homogeneous degree-$d$ binary map over $K$, $d\ge2$, with $(1,0)$ and $(0,1)$ preperiodic as vectors under $F$. Suppose that, for every $v\in M_K$, a field embedding $K\hookrightarrow L_v$ into an algebraically closed nonarchimedean valued field extending $|\cdot|_v$ is supplied, and the rational map represented by $F$ has good reduction after a Möbius conjugacy over $L_v$. Then all coefficients of $F$ lie in $k$. No completeness is assumed of $L_v$, and existence of these valued extensions is a hypothesis, not a conclusion.

## Statement references

[[def-one-variable-function-field-with-constant-field]]

[[def-good-and-potential-good-reduction-rational-map]]

[[def-algebraically-closed-field]]

## Facts & Assumptions

**Given:** The function-field datum, homogeneous map with preperiodic basis, and supplied algebraically closed valued extensions and good conjugacies of the statement.

[F1] Local homogeneous heights characterize the filled Julia set by $H_F\le0$. For a good lift the filled Julia set is the unit polydisc. ([[lem-local-homogeneous-dynamical-height-and-filled-julia-set]])

[F2] $R_{M^{-1}FM}=\det(M)^{d(d-1)}R_F$. ([[lem-binary-map-resultant-linear-conjugacy]])

[F3] The absolute values of the function-field datum satisfy finite support and the product formula. The height of $[a:1]$ is zero exactly when $a\in k$: its defining map has degree zero in that case, and degree $[K:k(a)]>0$ otherwise. ([[def-one-variable-function-field-with-constant-field]], [[def-function-field-height-on-projective-line]], [[thm-function-field-projective-height-well-defined]])

[A1] The Axiom of Choice is assumed by the function-field and height suppliers; the finite algebraic calculations below use no further choice. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $v$. A good lift of a Möbius conjugate is $cM_0^{-1}FM_0$ for some $c\in L_v^\times$. Since $L_v$ is algebraically closed, choose $a$ with $a^{d-1}=c$ and put $M_v=aM_0$. Then $G_v=M_v^{-1}FM_v$ is this good lift. Linear conjugacy carries bounded orbits to bounded orbits: the norms of a fixed invertible linear map and its inverse are bounded by the maximum norms of their finitely many entries. Therefore $K_{F,v}=M_vB_v$, where $B_v=\{z\in L_v^2:\|z\|_v\le1\}$ by [F1]. Both basis vectors have finite orbits, so belong to $M_vB_v$; hence both columns of $M_v^{-1}$ have integral entries and $|\det M_v|_v\ge1$. [F1, given, algebra]

1.2 By [F2] and $|R_{G_v}|_v=1$, step 1.1 gives $|R_F|_v=|\det M_v|_v^{-d(d-1)}\le1$. This holds for every $v$, and [F3] forces $|R_F|_v=1$ for every $v$: a finite product of positive numbers at most $1$ can equal $1$ only if every factor is $1$. Thus $|\det M_v|_v=1$. The already integral matrix $M_v^{-1}$ has unit determinant, so its inverse $M_v$ is integral by the two-by-two adjugate formula. Both matrices preserve $B_v$, and consequently $K_{F,v}=B_v$. Since a bounded orbit remains bounded after deleting its first term, $F(B_v)\subset B_v$. [F2, F3, step 1.1, algebra]

2.1 The residue field of an algebraically closed valued field $L_v$ is algebraically closed. Indeed lift a monic residue polynomial to a monic polynomial with integral coefficients and factor it over $L_v$; every root has absolute value at most $1$, since for $|r|>1$ its leading term strictly dominates all lower terms. Reducing this factorization gives a factorization into linear factors in the residue field. Every algebraically closed field is infinite: if its elements were $b_1,\ldots,b_t$, the polynomial $1+\prod_i(T-b_i)$ would have no root. [given, algebra]

2.2 For either coordinate polynomial $A(X,Y)$ of $F$, let $m$ be the largest absolute value of its coefficients at $v$. If $m>1$, divide $A(T,1)$ by a coefficient of absolute value $m$. The resulting integral polynomial has a nonzero reduction. Over the infinite residue field of step 2.1 it is nonzero at some residue element: a nonzero degree-$r$ polynomial has at most $r$ roots, by successive division by $T-b$. Lift that element to $t\in\mathcal O_{L_v}$. Then $|A(t,1)|_v=m>1$, contradicting $F(B_v)\subset B_v$. Thus all coefficients of $F$ have absolute value at most $1$ at every $v$. [step 1.2, step 2.1, algebra]

3.1 For a coefficient $a\in K$, step 2.2 gives $h_K([a:1])=\sum_v\log\max(1,|a|_v)=0$. By [F3], $a\in k$. This applies to every coefficient, proving the claim. [F3, step 2.2, algebra] ∎
