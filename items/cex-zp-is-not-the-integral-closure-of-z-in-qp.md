---
id: cex-zp-is-not-the-integral-closure-of-z-in-qp
kind: counterexample
title: "Z_p is not the integral closure of Z in Q_p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-p-adic-completion-agrees-with-the-fraction-field-of-zp, cor-zp-is-the-valuation-ring-of-qp, thm-p-adic-digit-expansion, def-integral-element-and-algebraic-integer]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Remark 8.2"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
pipeline_run: null
---

## Statement refuted

The ring $\mathbb Z_p$ is the integral closure of $\mathbb Z$ inside
$\mathbb Q_p$.

## Facts & Assumptions

**Given:** The ring $\mathbb Z_p \subseteq \mathbb Q_p$.

[L1] $\mathbb Z_p$ sits inside $\mathbb Q_p$ and every element of $\mathbb Z_p$
has a unique digit expansion ([[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]],
[[cor-zp-is-the-valuation-ring-of-qp]], [[thm-p-adic-digit-expansion]]).

[L2] Being integral over $\mathbb Z$ means satisfying a monic polynomial with
integer coefficients ([[def-integral-element-and-algebraic-integer]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $$(\varepsilon_n)_{n \ge 0} \longmapsto \sum_{n=0}^{\infty} \varepsilon_n p^n$$ from $\{0,1\}^{\mathbb N}$ to $\mathbb Z_p$ is injective by uniqueness of digit expansions in [L1]. Therefore $\mathbb Z_p$ is uncountable. [L1, given, algebra]

1.2 The subset of $\mathbb Q_p$ consisting of elements integral over $\mathbb Z$ is countable: there are only countably many monic polynomials with integer coefficients, and each has only finitely many roots in the field $\mathbb Q_p$. [L2, algebra]

2.1 Hence some element of $\mathbb Z_p$ is not integral over $\mathbb Z$. That element lies in $\mathbb Z_p \subseteq \mathbb Q_p$ by [L1], so $\mathbb Z_p$ cannot equal the integral closure of $\mathbb Z$ in $\mathbb Q_p$. [step 1.1, step 1.2, L1, L2] ∎
