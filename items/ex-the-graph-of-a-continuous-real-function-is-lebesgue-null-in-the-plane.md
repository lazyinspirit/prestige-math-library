---
id: ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane
kind: example
title: "The graph of a continuous function $\\mathbb{R}\\to\\mathbb{R}$ is Lebesgue null in $\\mathbb{R}^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-null-agrees-with-elementary-nullity-in-rn,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-finite-and-countable-subadditivity-of-measures,
       def-continuity-real,
       thm-heine-cantor-r,
       thm-heine-borel-rn,
       cor-archimedean-reciprocal,
       thm-geometric-series,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.1.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice and let $f : \mathbb{R} \to \mathbb{R}$ be
continuous. Then its graph

$$\Gamma_f := \{\, (x,f(x)) : x \in \mathbb{R} \,\}$$

is Lebesgue null in $\mathbb{R}^2$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a continuous function $f : \mathbb{R} \to \mathbb{R}$.

[L1] A subset of $\mathbb R^m$ has Lebesgue outer measure zero if and only if it is null in the sense of countable closed-cube covers ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]]).

[L2] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F1] Let $\mu$ be a measure and let $(E_k)_{k \in \mathbb N}$ be measurable. Then $\mu(\bigcup_k E_k) \le \sum_k \mu(E_k)$ ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F2] Then $f$ is **continuous at $c$** when every neighbourhood of $f(c)$ contains the image of some neighbourhood of $c$ ([[def-continuity-real]]).

[F3] A subset $K \subseteq \mathbb{R}^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[L3] A continuous real function on a compact subset of $\mathbb{R}$ is uniformly continuous ([[thm-heine-cantor-r]]).

[F4] For every real $\delta > 0$ there is a natural number $N \ge 1$ with $1/N < \delta$ ([[cor-archimedean-reciprocal]]).

[F5] If $|r| < 1$ then the series $\sum r^k$ converges; in particular $\sum_{n=0}^{\infty} 2^{-n} = 2$ ([[thm-geometric-series]]).

## Verification

**Proof technique:** direct.

1.1 Fix a real $\eta > 0$. For each integer $m$, the interval $[m,m+1]$ is compact by [F3], so [L3] gives a real $\delta_m > 0$ such that $x,y \in [m,m+1]$ and $|x-y| < \delta_m$ imply $|f(x)-f(y)| < \eta 2^{-|m|-3}$. By [F4] choose a natural number $N_m \ge 1$ with $1/N_m < \delta_m$, and put $t_j := m + j/N_m$ for $0 \le j \le N_m$. Then for every $j$ with $1 \le j \le N_m$ and every $x \in [t_{j-1},t_j]$ one has $|x-t_{j-1}| \le 1/N_m < \delta_m$, hence $|f(x)-f(t_{j-1})| < \eta 2^{-|m|-3}$. [F2, F3, L3, F4]

2.1 For each such subinterval, the corresponding graph piece lies in the closed box $[t_{j-1},t_j] \times [f(t_{j-1}) - \eta 2^{-|m|-3},\, f(t_{j-1}) + \eta 2^{-|m|-3}]$, whose width is $t_j - t_{j-1}$ and whose height is $\eta 2^{-|m|-2}$. Therefore [L2] gives a box cover of $\Gamma_f \cap ([m,m+1] \times \mathbb{R})$ whose total area is $\sum_{j=1}^{N_m} (t_j-t_{j-1})\,\eta 2^{-|m|-2} = \eta 2^{-|m|-2}$. [step 1.1, L2, algebra]

3.1 Summing these covers over all integers $m$ and using [F1], the whole graph is covered by countably many closed boxes with total area at most $\eta \sum_{m \in \mathbb{Z}} 2^{-|m|-2} = \eta\big(2^{-2} + 2\sum_{n=1}^{\infty}2^{-n-2}\big) = 3\eta/4 < \eta$, the geometric-series identity coming from [F5]. Since $\eta > 0$ was arbitrary, [L1] gives that $\Gamma_f$ is Lebesgue null. [step 2.1, L1, F1, F5, algebra] ∎
