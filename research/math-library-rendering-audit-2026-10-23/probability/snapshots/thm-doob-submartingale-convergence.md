---
id: thm-doob-submartingale-convergence
kind: theorem
title: Doob submartingale convergence theorem
status: published
origin: pipeline
deps: [lem-doob-upcrossing-inequality, thm-monotone-convergence-for-the-integral, thm-fatou-lemma, thm-finite-and-countable-subadditivity-of-measures, lem-q-and-irrationals-dense-r, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.2.11 (martingale convergence theorem) with proof", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. If $X$ is a submartingale with $C:=\sup_n\mathbb E[X_n^+]<\infty$, then there is an integrable finite random variable $X_\infty$ such that $X_n\to X_\infty$ almost surely.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-doob-upcrossing-inequality]] bounds every finite-horizon rational upcrossing count.

[F2] [[thm-monotone-convergence-for-the-integral]] and [[thm-fatou-lemma]] pass respectively to the total crossing count and to the limiting positive and negative parts.

[F3] [[lem-q-and-irrationals-dense-r]] supplies a rational interval strictly between unequal finite liminf and limsup values.

[F4] [[thm-finite-and-countable-subadditivity-of-measures]] makes the intersection over rational pairs a full-measure event.

[F5] [[def-axiom-of-choice]] is inherited from F1's conditional-expectation construction; the rational family itself is explicitly countable.

## Proof

1.1 Fix rationals $a<b$. By F1, $$(b-a)\mathbb E U_N[a,b] \le \mathbb E(X_N-a)^+ \le C+|a|.$$ As $U_N\uparrow U_\infty$, F2 gives $\mathbb E U_\infty[a,b]<\infty$. Hence $U_\infty[a,b]<\infty$ almost surely. [F1, F2]

2.1 Intersect these probability-one events over the countable set $\{(a,b)\in\mathbb Q^2:a<b\}$. F4 makes the intersection have probability one. On it, if $\liminf X_n<\limsup X_n$, density supplies rationals $a<b$ strictly between them; the path then completes infinitely many upcrossings of $[a,b]$, contradicting step 1.1. Thus $X_n$ has an extended-real limit. [F3, F4, step 1.1]

3.1 The submartingale property gives $\mathbb EX_n\ge\mathbb EX_0$. Therefore $$\mathbb EX_n^- =\mathbb EX_n^+-\mathbb EX_n \le C-\mathbb EX_0.$$ Fatou applied separately to $X_n^+$ and $X_n^-$ shows that neither $+\infty$ nor $-\infty$ can occur on a positive-measure set and that $$\mathbb E|X_\infty|\le C+(C-\mathbb EX_0)<\infty.$$ Taking the limit on the full-measure event and defining it arbitrarily on its null complement yields the claimed finite integrable random variable. AC has only the inherited use in F5. [F2, F5, step 2.1] ∎
