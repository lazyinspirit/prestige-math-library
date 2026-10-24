---
id: def-resolvent-of-a-monotone-relation
kind: definition
title: "Resolvent of a monotone relation"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps: [def-maximal-monotone-relation-on-euclidean-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §§2–4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.4"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

For a relation $A\subseteq E\times E$ and $\rho>0$, define its resolvent as
the inverse relation
$$J_{\rho A}:=(I+\rho A)^{-1},\qquad J_{\rho A}(y)=\{x\in E:y-x\in\rho A(x)\},$$
where $\rho A(x)=\{\rho a:a\in A(x)\}$. Its domain is the set of $y$ for
which this value set is nonempty. At this point it may be partial and
set-valued; full domain and single-valuedness are separate conclusions of
[[thm-maximal-monotone-resolvent-is-firmly-nonexpansive]].

## Facts & Assumptions

**Given:** A relation $A$ on $E$ and a scalar $\rho>0$.

[A1] The relation is on $E$ and $\rho>0$.


[F1] [[def-maximal-monotone-relation-on-euclidean-space]]: $A(x)$ denotes the set of $a$ with $(x,a)\in A$.

## Proof


1.1 The equation $y-x\in\rho A(x)$ means that some $a\in A(x)$ satisfies $y=x+\rho a$; this is precisely the inverse graph of $I+\rho A$. [A1, given, F1, given]

2.1 The value $J_{\rho A}(y)$ is a set and may be empty until a theorem proves existence; the definition itself asserts no surjectivity or uniqueness. [A1, given, F1, given] ∎
