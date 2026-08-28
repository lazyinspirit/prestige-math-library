---
id: cex-abelian-groups-do-not-satisfy-ab5-star
kind: counterexample
title: "Abelian groups do not satisfy AB5*"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-axioms-ab5-and-ab5-star]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-22
---

## Statement refuted

The abelian category $\mathbf{Ab}$ satisfies AB5*.

## Facts & Assumptions

**Given:** The abelian group $A=\prod_{n\ge1}\mathbb Z$, the tail subgroups
$T_n=\{(a_k):a_1=\cdots=a_n=0\}$, and the direct sum
$B=\bigoplus_{n\ge1}\mathbb Z\le A$.

[L1] AB5* is the decreasing-family identity
$\left(\bigwedge_i B_i\right)\vee C=\bigwedge_i(B_i\vee C)$
([[def-the-axioms-ab5-and-ab5-star]]).

## Counterexample

1.1 The family $(T_n)$ is decreasing, and $\bigcap_{n\ge1} T_n=0$ because a sequence whose every coordinate eventually vanishes from the front has all coordinates zero. Also $B\ne A$, since the constant sequence $(1,1,1,\dots)$ lies in $A$ but not in the direct sum $B$. [given, algebra]
2.1 For every $n$, the subgroup $T_n+B$ is all of $A$: given $a=(a_k)_{k\ge1}\in A$, write $a=b+t$ where $b$ has the same first $n$ coordinates as $a$ and all later coordinates $0$, while $t$ has first $n$ coordinates $0$ and later coordinates equal to those of $a$. Then $b\in B$ and $t\in T_n$. Hence $$ \left(\bigcap_{n\ge1}T_n\right)+B=B\ne A=\bigcap_{n\ge1}(T_n+B). $$ So the AB5* identity [L1] fails in $\mathbf{Ab}$. [L1, step 1.1] ∎