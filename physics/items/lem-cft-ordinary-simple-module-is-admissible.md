---
id: lem-cft-ordinary-simple-module-is-admissible
kind: lemma
title: A simple ordinary module admits a nonnegative grading
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-admissible-vertex-algebra-module
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "§2, the ordinary-module convention and the statement that every ordinary module is admissible."
    - title: "Abe, Buhl, and Dong, Rationality, regularity, and C2-cofiniteness"
      url: "https://arxiv.org/pdf/math/0204021"
      locator: "§2, ordinary and admissible module definitions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and let $S$ be a nonzero simple ordinary $V$-module. Then $S$ admits a grading $S=\bigoplus_{n\geq0}S(n)$ satisfying the admissible mode-shift rule; hence $S$ is an admissible module.

## Statement references

[[def-admissible-vertex-algebra-module]]

[[def-ordinary-vertex-module]]

## Facts & Assumptions

**Given:** $V$ is a conformal vertex algebra of CFT type and $S$ is a nonzero simple ordinary $V$-module.

[F1] [[def-conformal-vertex-algebra]]: $V=\bigoplus_{r\geq0}V_r$ and $L(0)a=ra$ for $a\in V_r$.

[F2] [[def-vertex-algebra-module]]: the module Jacobi identity supplies the conformal mode commutator, and a simple module is nonzero with no proper nonzero submodule; hence any nonzero vector generates $S$.

[F3] [[def-ordinary-vertex-module]]: $S$ is a direct sum of finite-dimensional $L(0)$-eigenspaces whose occurring weights have real parts bounded below.

[F4] [[def-admissible-vertex-algebra-module]]: an admissible grading must satisfy $a^M_{(m)}S(n)\subseteq S(n+r-m-1)$ for $a\in V_r$, with negative grades interpreted as zero.

## Proof

1.1 For homogeneous $a\in V_r$, the module Jacobi identity gives $[L_S(0),a^S_{(m)}]=(r-m-1)a^S_{(m)}$. Indeed, the commutator formula at the conformal mode $\omega_{(1)}=L(0)$ has only the terms $(\omega_{(0)}a)_{(m+1)}+(\omega_{(1)}a)_{(m)}$; these equal $-(m+1)a^S_{(m)}+r a^S_{(m)}$ because $\omega_{(0)}a=L(-1)a=Ta$. Thus each mode shifts an $L(0)$-eigenvalue by the integer $r-m-1$. [given, F1, F2, algebra]

2.1 Choose a nonzero eigenvector $s\in S_{[h]}$. By [F2], the submodule it generates is all of $S$; each homogeneous mode shifts the eigenvalue by an integer by step 1.1. Thus every occurring eigenvalue lies in $h+\mathbb Z$. By [F3], the integer indices of nonzero eigenspaces are bounded below; choose their least value $k_0$ and set $S(n)=S_{h+k_0+n}$ for $n\geq0$. The ordinary eigenspace decomposition makes $S=\bigoplus_{n\geq0}S(n)$. [given, F2, F3, step 1.1, choose]

3.1 For $a\in V_r$, step 1.1 gives $a^S_{(m)}S(n)\subseteq S(n+r-m-1)$; if the index is negative, minimality of $k_0$ makes that eigenspace zero. This is exactly [F4], so the constructed grading is admissible. [given, F1, F4, step 2.1, algebra] ∎

## Proof status

This is a local mode-shift proof. It establishes that each simple ordinary summand is admissible; it does not show that a weak-module decomposition supplied by regularity respects a separately specified admissible grading.

