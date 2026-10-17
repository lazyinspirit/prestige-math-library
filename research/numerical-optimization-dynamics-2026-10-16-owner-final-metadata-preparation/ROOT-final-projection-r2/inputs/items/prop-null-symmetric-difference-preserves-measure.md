---
id: prop-null-symmetric-difference-preserves-measure
kind: proposition
title: "Sets whose symmetric difference is null have the same measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-measure-monotonicity, prop-two-set-measure-identity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 12(a)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

If $A$ and $B$ are measurable and $\mu(A\mathbin\triangle B)=0$, where $A\mathbin\triangle B=(A\setminus B)\cup(B\setminus A)$, then $\mu(A)=\mu(B)$.

## Facts & Assumptions

**Given:** Measurable sets $A,B$ with $\mu(A\mathbin\triangle B)=0$.

[L1] Measures are monotone: $C\subseteq D$ implies $\mu(C)\le\mu(D)$ ([[prop-measure-monotonicity]]).

[L2] For measurable $C,D$, $\mu(C\cup D)+\mu(C\cap D)=\mu(C)+\mu(D)$ ([[prop-two-set-measure-identity]]).

## Proof

**Proof technique:** direct.

1.1 Monotonicity gives $\mu(A\setminus B)=\mu(B\setminus A)=0$, since both sets lie in $A\mathbin\triangle B$. [given, L1]

2.1 Applying the two-set identity to $A\cap B$ and $A\setminus B$, which are disjoint and have union $A$, gives $\mu(A)=\mu(A\cap B)+0$; the same argument gives $\mu(B)=\mu(A\cap B)+0$. [step 1.1, L2]

3.1 Hence $\mu(A)=\mu(B)$, including when the common value $\mu(A\cap B)$ is $+\infty$. [step 2.1] ∎
