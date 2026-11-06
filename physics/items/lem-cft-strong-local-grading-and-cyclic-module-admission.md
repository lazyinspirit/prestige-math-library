---
id: lem-cft-strong-local-grading-and-cyclic-module-admission
kind: lemma
title: Strong local grading and admission of transported coefficient modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 4
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-hlz-strongly-graded-generalized-module
  - def-cft-pz-compatibility-subspace
dependency_roles:
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
  def-cft-pz-compatibility-subspace: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Huang, Lepowsky and Zhang, Logarithmic tensor category theory, VI
      url: https://arxiv.org/pdf/1012.4202v3
      locator: Section 9, local grading conditions and Theorems 9.17 and 9.27; the present lemma isolates the explicit cyclic category-admission clause and does not import those theorems.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a strongly $A$-graded Möbius or conformal vertex algebra, $W_1,W_2$ strongly $\widetilde A$-graded generalized modules and $z\ne0$. On $(W_1\otimes W_2)^*$ use the explicitly transported fields and three Möbius operators. Write $D=L'_{P(z)}(0)$. Let $\lambda_n$, $n$ in an arbitrary subset of $\mathbb R$, be finite sums of auxiliary-homogeneous generalized $D$-eigenvectors of weight $n$, with $(D-n)^K\lambda_n=0$ for one integer $K\ge1$. Let $E_n$ be the smallest doubly graded subspace containing $\lambda_n$ and stable under all transported modes and the three Möbius operators. Suppose, exactly as in the category-admission clause of the expansion condition, that for each $n$ there is a strongly graded generalized module $X_n$ and an injective linear map $e_n:E_n\to X_n$ preserving both gradings and intertwining every transported mode and every Möbius operator. Suppose the smallest such doubly graded stable space $M$ containing all the $\lambda_n$ has finite-dimensional components and is lower truncated in each fixed auxiliary-degree integer weight string. Then $M$ with the transported actions is a strongly graded generalized module, all its generalized weights are real, and $(D-D_s)^K=0$ on $M$. In particular its vertex Jacobi identity is an actual finite coefficient identity. No finiteness of the set of weight cosets modulo integers, no CFT-type condition and no global lower bound is required. This lemma does not assert full $P(z)$-compatibility from the module Jacobi identity; that is a separate condition.

## Statement references

[[def-cft-hlz-strongly-graded-generalized-module]]

[[def-cft-pz-compatibility-subspace]]

## Facts & Assumptions

**Given:** The transported actions, the generalized eigenvectors, the explicit injective mode-intertwining maps, and the local grading bounds of the Statement.

[F1] The strong grading in [[def-cft-hlz-strongly-graded-generalized-module]] means finite-dimensional $(\beta,h)$-components and a lower bound in each fixed $(\beta,h+\mathbb Z)$ string; it does not require finitely many strings or a bound uniform in auxiliary degree.

[F2] The transported formulas in [[def-cft-pz-compatibility-subspace]] are linear maps on the algebraic dual coefficient by coefficient. Their rational residue derivation gives $[D,v'_m]=(r-m-1)v'_m$ for a state of weight $r$, auxiliary shift $\alpha$ for a state of auxiliary degree $\alpha$, and $[D,L'(j)]=-jL'(j)$. These identities also follow on each $E_n$ by injecting it into $X_n$ and using the corresponding identities there; thus their use here does not assume a separate unproved compatibility-module theorem.

## Proof

1.1 On $E_n$, the injective map $e_n$ transports the action to its stable image in the actual module $X_n$. Hence lower truncation, vacuum, the three Möbius brackets and commutators, and the full vertex Jacobi identity hold on $E_n$. For Jacobi this can be checked one coefficient at a time: every coefficient is a finite sum because the inner modes truncate and the state products truncate; its image under $e_n$ is the identical coefficient in $X_n$, which is zero. Injectivity makes the original coefficient zero. No infinite weight sum is involved in this argument. [given, F1, F2, algebra]

2.1 Each finite word in transported modes and Möbius operators shifts the generalized weight of its input by an integer and its auxiliary degree by a finite sum in $A$. By the commutators in [F2], if the input has generalized weight $n$ and nilpotence exponent at most $K$, the output has generalized weight $n+d$, $d\in\mathbb Z$, and the same exponent bound: for one mode this is $(D-n-r+m+1)^Kv'_m\lambda=v'_m(D-n)^K\lambda=0$, and the Möbius case is identical. Induction on word length proves it for every generated vector. Since $E_n$ includes the finite auxiliary-homogeneous components of $\lambda_n$, these words already span a doubly graded stable subspace. Therefore $M=\sum_n E_n$, where an algebraic sum consists only of finite sums of vectors. Its weights are real and the bound $(D-D_s)^K=0$ holds on all of $M$. This does not restrict the number of distinct real weight cosets. [given, F2, step 1.1, induction]

3.1 Lower truncation of the field action on $M$ follows both from the finite sum in Step 2.1 and from the given local grading restriction. Explicitly, if $\lambda$ is in component $(\beta,h)$ and $v$ has degree $(\alpha,r)$, then $v'_m\lambda$ lies in $(\beta+\alpha,h+r-m-1)$. As $m\to+\infty$ these weights go down the single fixed integer string with auxiliary degree $\beta+\alpha$; that string vanishes sufficiently far below by [F1]. A vector has only finitely many components, so taking the maximum of its finitely many bounds gives lower truncation for every vector. No bound over all auxiliary degrees is needed. [given, F1, F2, step 2.1, algebra]

4.1 Vacuum, Jacobi and all Möbius identities on $M$ now follow by linearity from their identities on each $E_n$, since every vector of $M$ is a finite sum from such spaces. Its finite-dimensional components and lower truncation in each weight string are precisely the assumed all-terms grading bounds. Together with the generalized-eigenspace decomposition and auxiliary-degree preservation established above, these are all the strongly graded generalized-module axioms. The conclusion is an actual module construction under the explicit cyclic admission hypothesis, rather than an inference from a rational-current Lie bracket. Full $P(z)$-compatibility is not among these deductions and must still be proved for the coefficient vectors by the analytic compatibility argument. [given, F1, step 1.1, step 2.1, step 3.1, algebra] ∎
