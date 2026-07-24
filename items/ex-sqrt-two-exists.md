---
id: ex-sqrt-two-exists
kind: example
title: "$\\sqrt{2}$ exists in every complete ordered field, and is irrational"
status: published
origin: session
deps: [thm-of-square-roots, lem-of-q-embeds, def-complete-ordered-field, fs-sqrt2-rational]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21, Cor)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

In any complete ordered field $F$, the element $2 = 1 + 1$ is positive, so by
[[thm-of-square-roots]] applied to $a = 2$ it has a unique $s > 0$ with $s^2 = 2$:
this is $\sqrt{2}$. Moreover $s$ is not the image of any rational under the
embedding $\iota : \mathbb{Q} \to F$, because no rational squares to $2$. Thus
every complete ordered field contains $\sqrt{2}$, the canonical gap that
$\mathbb{Q}$ lacks, now filled by completeness.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]) with unit $1$; write $2 := 1 + 1$. In any ordered field $1 > 0$, hence $2 = 1 + 1 > 0$.

[L1] Every $a \ge 0$ in $F$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]]).

[L2] There is a unique field homomorphism $\iota : \mathbb{Q} \to F$; it is injective and order-preserving, and satisfies $\iota(1) = 1$ ([[lem-of-q-embeds]]).

[L3] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

## Verification

**Proof technique:** direct.

1.1 In $F$ we have $2 = 1 + 1 > 0$, so in particular $2 \ge 0$. [given]

2.1 Apply [[thm-of-square-roots]] [L1] with $a = 2$: there is a unique $s \ge 0$ with $s^2 = 2$, and $s \neq 0$ since $s^2 = 2 > 0$, so $s > 0$; write $\sqrt{2} := s$. [L1, step 1.1]

3.1 The element $s$ is not rational: if $s = \iota(q)$ for some $q \in \mathbb{Q}$, then $\iota(q^2) = \iota(q)^2 = s^2 = 2 = \iota(1) + \iota(1) = \iota(2)$, so injectivity of $\iota$ [L2] forces $q^2 = 2$, which is impossible by [L3]; hence $s$ lies outside $\iota(\mathbb{Q})$. [L2, L3, step 2.1]

4.1 Therefore every complete ordered field contains a unique positive $s = \sqrt{2}$ with $s^2 = 2$, and this $s$ is irrational: it is exactly the gap in $\mathbb{Q}$ that completeness fills. [step 2.1, step 3.1] ∎
