---
id: cor-p-adic-field-is-locally-compact-and-totally-disconnected
kind: corollary
title: "Q_p is locally compact and totally disconnected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, lem-p-adic-balls-are-clopen, thm-p-adic-digit-expansion, thm-complete-and-totally-bounded-implies-compact, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 7.46 and Remark 7.49(b)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ of
[[def-countable-choice]]. Then the field $\mathbb Q_p$ is locally compact and totally disconnected. In
particular, $\mathbb Z_p$ is a compact open subring.

## Facts & Assumptions

**Given:** The p-adic field $\mathbb Q_p$ and $\mathrm{AC}_\omega$.

[L1] $\mathbb Z_p = \{x : |x|_p \le 1\}$, and $p$-adic balls are clopen
([[cor-zp-is-the-valuation-ring-of-qp]], [[lem-p-adic-balls-are-clopen]]).

[L2] Every element of $\mathbb Z_p$ has a digit expansion
([[thm-p-adic-digit-expansion]]).

[L3] Assuming $\mathrm{AC}_\omega$, a complete totally bounded metric space is compact
([[thm-complete-and-totally-bounded-implies-compact]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mathbb Z_p$ is the closed unit ball, and by the clopen-ball lemma it is open. To prove compactness, note first that $\mathbb Z_p$ is complete as a closed subset of the complete field $\mathbb Q_p$. It is totally bounded because for each $N \ge 1$, every element of $\mathbb Z_p$ differs by at most $p^{-N}$ from one of the finitely many truncations $$a_0 + a_1 p + \cdots + a_{N-1} p^{N-1}$$ with digits $a_i \in \{0,\dots,p-1\}$, by [L2]. Hence [L3] makes $\mathbb Z_p$ compact. [L1, L2, L3, given, algebra]

2.1 Every point of $\mathbb Q_p$ has a compact open neighborhood, namely a scalar multiple of $\mathbb Z_p$, so $\mathbb Q_p$ is locally compact. If $x \ne y$, choose a ball around $x$ whose radius is smaller than $|x-y|_p$; by [L1] this ball is clopen and does not contain $y$. Therefore points are separated by clopen sets, so $\mathbb Q_p$ is totally disconnected. [L1, step 1.1, algebra] ∎
