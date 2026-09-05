---
id: ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere
kind: example
title: "A pure jump function can have dense discontinuities and derivative 0 almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, thm-jump-functions-have-derivative-zero-almost-everywhere, thm-rationals-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Choose an
enumeration $(q_n)_{n \ge 1}$ of $\mathbb{Q} \cap (0,1]$ without repetitions
and define

$$
J(x) := \sum_{q_n \le x} 2^{-n}, \qquad x \in [0,1].
$$

Then $J$ is increasing, it is discontinuous exactly at the rationals in
$(0,1]$, those discontinuities are dense in $[0,1]$, and $J'(x)=0$ almost
everywhere.

## Facts & Assumptions

**Given:** Countable Choice and an enumeration $(q_n)$ without repetitions of
$\mathbb{Q} \cap (0,1]$.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 Every summand $x \mapsto \mathbf 1_{\{q_n \le x\}}2^{-n}$ is nondecreasing, so $J$ is nondecreasing. If $x<y$, choose $q_m \in \mathbb{Q} \cap (x,y]$; then the $m$th summand contributes $0$ at $x$ and $2^{-m}$ at $y$, so $J(y)-J(x) \ge 2^{-m} > 0$. Hence $J$ is increasing. At a rational point $q_m$, the value of the $m$th summand jumps by $2^{-m}$, so $J$ is discontinuous at $q_m$. Thus the discontinuity set contains $\mathbb{Q} \cap (0,1]$, hence is dense in $[0,1]$. [given]

2.1 Let $x \in [0,1)$ be irrational. Given $\varepsilon > 0$, choose $N$ so large that $\sum_{n>N}2^{-n}<\varepsilon/3$. Because $x \neq q_n$ for $n \le N$, there is a neighborhood of $x$ containing none of the finitely many rationals $q_1,\dots,q_N$, so the first $N$ partial sums are constant on that neighborhood. The tail contributes less than $\varepsilon/3$ on either side, so $J$ is continuous at $x$. Also $J(0)=0$ because every $q_n$ is positive. Therefore the discontinuity set is exactly $\mathbb{Q} \cap (0,1]$. [step 1.1]

3.1 The function $J$ has no endpoint defect at $0$, and because the enumeration has no repetitions, at each $q_n$ its jump size is exactly $2^{-n}$. Therefore claim 2 of [[thm-increasing-functions-split-uniquely-as-jump-plus-continuous]] identifies the jump function of $J$ with $J$ itself. Countable Choice is assumed, so the jump-function theorem [[thm-jump-functions-have-derivative-zero-almost-everywhere]] gives $J'=0$ almost everywhere. [step 1.1, step 2.1]

4.1 Steps 1.1 through 3.1 prove the example. [step 1.1, step 2.1, step 3.1] ∎
