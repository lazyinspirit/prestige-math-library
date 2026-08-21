---
id: lem-completed-measure-is-well-defined
kind: lemma
title: "The completed measure is independent of the representing measurable set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completion-of-a-measure-space, prop-null-symmetric-difference-preserves-measure, prop-null-sets-form-a-sigma-ideal-in-a-complete-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.9"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

If $E=A\cup N=B\cup M$ are two representations in the completion domain, with $N\subseteq Z$, $M\subseteq W$, and $Z,W$ measurable null sets, then $\mu(A)=\mu(B)$. Consequently $\overline\mu(E):=\mu(A)$ is well defined.

## Facts & Assumptions

**Given:** Representations $E=A\cup N=B\cup M$ as in the Statement.

[L1] A completed set is represented by a measurable core together with a subset of a measurable null set ([[def-completion-of-a-measure-space]]).

[L2] Measurable sets whose symmetric difference is null have equal measure, including at $+\infty$ ([[prop-null-symmetric-difference-preserves-measure]]).

[L3] In every measure space, a countable union of measurable null sets is measurable and null, and every measurable subset of a null set is null ([[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in A\setminus B$, then $x\in E=B\cup M$ forces $x\in M\subseteq W$; similarly $B\setminus A\subseteq Z$. Hence $A\mathbin\triangle B\subseteq Z\cup W$. [given, L1]

1.2 The measurable set $Z\cup W$ is null, and the measurable subset $A\mathbin\triangle B$ is therefore null. [given, L3]

2.1 By [L2], $\mu(A)=\mu(B)$; this also covers empty null envelopes and the case in which the common value is $+\infty$, so the proposed value $\overline\mu(E)$ is independent of every representation. [step 1.1, step 1.2, L2] ∎
