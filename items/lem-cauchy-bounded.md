---
id: lem-cauchy-bounded
kind: lemma
title: "Every Cauchy sequence of rationals is bounded"
status: draft
origin: session
deps: [def-rational-cauchy-sequence]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - "T. Tao, Analysis I, 3rd ed., §5.1"
pipeline_run: null
---

## Statement

Every Cauchy sequence $(a_n)_{n \ge 1}$ of rational numbers
([[def-rational-cauchy-sequence]]) is bounded: there exists a rational
$M \ge 0$ such that $|a_n| \le M$ for all $n \ge 1$.

## Proof

**Given:** A Cauchy sequence $(a_n)_{n \ge 1}$ of rational numbers.
**Facts:**
[A1] For every rational $\varepsilon > 0$ there exists $N \in \mathbb{N}$ with $|a_m - a_n| < \varepsilon$ for all $m, n \ge N$.
[L1] Triangle inequality on $\mathbb{Q}$: $|x| \le |x - y| + |y|$ for all $x, y \in \mathbb{Q}$.

1.1 Apply [A1] with $\varepsilon = 1$: fix $N \in \mathbb{N}$ such that $|a_m - a_n| < 1$ for all $m, n \ge N$. [A1]
1.2 For every $n \ge N$: $|a_n| \le |a_n - a_N| + |a_N|$. [L1]
2.1 For every $n \ge N$: $|a_n| < |a_N| + 1$. [step 1.1, step 1.2, algebra]
2.2 Define $M = \max\{|a_1|, |a_2|, \dots, |a_{N-1}|, |a_N| + 1\}$, a maximum of finitely many rationals, hence rational and $\ge 0$. [step 1.1, choose]
3.1 For every $n < N$: $|a_n| \le M$, since $|a_n|$ appears in the maximum. [step 2.2, algebra]
3.2 For every $n \ge N$: $|a_n| < |a_N| + 1 \le M$. [step 2.1, step 2.2, algebra]
4.1 For every $n \ge 1$: $|a_n| \le M$, so $(a_n)$ is bounded. [step 3.1, step 3.2] ∎
