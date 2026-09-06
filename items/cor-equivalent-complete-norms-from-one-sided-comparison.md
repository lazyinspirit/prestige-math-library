---
id: cor-equivalent-complete-norms-from-one-sided-comparison
kind: corollary
title: "A one-sided comparison of two complete norms makes them equivalent"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-banach-space, def-equivalent-norms, def-bounded-linear-operator, thm-bounded-inverse-theorem]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources: {references: [{title: "Teschl, Topics in Real and Functional Analysis, Theorem 4.6", url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}
---
## Statement
Assume DC. Let $p,q$ be complete norms on one vector space $V$. If $q(v)\le Cp(v)$ for all $v$ and some $C>0$, then $p$ and $q$ are equivalent norms ([[def-equivalent-norms]]).
## Facts & Assumptions
**Given:** DC, complete norms $p,q$ on $V$, and $q\le Cp$.
## Proof
**Proof technique:** direct.

1.1 The identity $I:(V,p)\to(V,q)$ is a bounded linear bijection by the assumed inequality. [given]

2.1 Both spaces are Banach ([[def-banach-space]]), so [[thm-bounded-inverse-theorem]] makes $I^{-1}$ bounded: $p(v)\le C'q(v)$ for some $C'>0$. [step 1.1]

3.1 The two inequalities are precisely equivalence of $p$ and $q$. [step 2.1] ∎
