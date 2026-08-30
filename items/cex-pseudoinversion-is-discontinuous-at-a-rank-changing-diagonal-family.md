---
id: cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family
kind: counterexample
title: "The family $\\operatorname{diag}(1,t)$ shows that pseudoinversion is not continuous across rank loss"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-moore-penrose-pseudoinverse-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Statement refuted

**Refuted claim:** the Moore--Penrose pseudoinverse depends continuously on a
matrix everywhere in the full matrix space.

For $t\neq0$, let

$$
A_t=\operatorname{diag}(1,t).
$$

Then $A_t\to\operatorname{diag}(1,0)$ as $t\to0$, but
$A_t^+=\operatorname{diag}(1,t^{-1})$ does not converge.

## Facts & Assumptions

**Given:** The family $A_t=\operatorname{diag}(1,t)$ for $t\neq0$.

[L1] Every finite real or complex matrix has a unique Moore--Penrose
pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

## Counterexample

**Proof technique:** direct.

1.1 As $t\to0$, the matrices $A_t$ converge entrywise to $A_0=\operatorname{diag}(1,0)$. [algebra]
1.2 For every $t\neq0$, the inverse $A_t^{-1}=\operatorname{diag}(1,t^{-1})$ directly satisfies the four Penrose equations, so uniqueness in [L1] makes it $A_t^+$. Hence $\|A_t^+\|_2=\max(1,|t|^{-1})$. [L1, algebra]
2.1 Because $|t|^{-1}\to\infty$ as $t\to0$, the family $(A_t^+)$ is unbounded and therefore cannot converge to the finite matrix $A_0^+$. [step 1.2, algebra]
3.1 Thus a convergent matrix family can have a nonconvergent pseudoinverse family, refuting global continuity. [step 1.1, step 2.1] ∎
