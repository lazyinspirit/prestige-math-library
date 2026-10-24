---
id: def-limsup-and-liminf-of-nonnegative-extended-sequences
kind: definition
title: "Limit superior and limit inferior of a nonnegative extended-real sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 8"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $(a_n)_{n\in\mathbb N}$ be a sequence in $[0,+\infty]\subseteq\overline{\mathbb R}$ ([[def-extended-reals]]). For each $N\in\mathbb N$, completeness of $\overline{\mathbb R}$ ([[lem-extended-reals-complete]]) gives the tail bounds

$$u_N:=\sup_{k\ge N}a_k,\qquad \ell_N:=\inf_{k\ge N}a_k.$$

The **limit superior** and **limit inferior** of $(a_n)$ are

$$\limsup_{n\to\infty}a_n:=\inf_{N\in\mathbb N}u_N,\qquad \liminf_{n\to\infty}a_n:=\sup_{N\in\mathbb N}\ell_N.$$

All four suprema and infima exist in $\overline{\mathbb R}$, including when some terms are $+\infty$. This definition is therefore distinct from the real-sequence definition: it applies directly to sequences of measure values.

