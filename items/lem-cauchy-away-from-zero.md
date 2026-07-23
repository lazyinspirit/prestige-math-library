---
id: lem-cauchy-away-from-zero
kind: lemma
title: "A non-null Cauchy sequence is eventually bounded away from zero, with constant sign"
status: draft
origin: session
deps: [def-null-sequence, def-rational-cauchy-sequence, lem-rat-triangle, thm-rat-ordered-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

If $(a_n)$ is Cauchy but not null, there are a rational $\delta > 0$ and an
index $N_0$ such that $|a_n| > \delta$ for all $n \ge N_0$; moreover
either $a_n > \delta$ for all $n \ge N_0$, or $a_n < -\delta$ for all
$n \ge N_0$.

## Facts & Assumptions

**Given:** A Cauchy sequence $(a_n)$ that is not null.

[A1] Negation of null ([[def-null-sequence]]): there is a rational $\varepsilon_0 > 0$ such that for every $N$ some $n \ge N$ has $|a_n| \ge \varepsilon_0$.

[A2] Cauchy ([[def-rational-cauchy-sequence]]).

[L1] Ordered-field arithmetic: $\varepsilon_0/3 > 0$, $\varepsilon_0 - \varepsilon_0/3 > \varepsilon_0/3$ ([[thm-rat-ordered-field]]).

[L2] Triangle inequality, in the form $|u| \ge |v| - |v - u|$ ([[lem-rat-triangle]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon_0 > 0$ witnessing that $(a_n)$ is not null. [A1]

1.2 Fix $N_0$ with $|a_m - a_n| < \varepsilon_0/3$ for all $m, n \ge N_0$. [A2, L1]

2.1 Pick $n_0 \ge N_0$ with $|a_{n_0}| \ge \varepsilon_0$. [step 1.1, step 1.2]

3.1 For every $n \ge N_0$: $|a_n| \ge |a_{n_0}| - |a_{n_0} - a_n| > \varepsilon_0 - \varepsilon_0/3 > \varepsilon_0/3 =: \delta$; so $|a_n| > \delta$ for all $n \ge N_0$. [step 2.1, step 1.2, L2, L1]

4.1 Sign stability: if some $a_m > \delta$ and some $a_n < -\delta$ with $m, n \ge N_0$, then $|a_m - a_n| > 2\delta = 2\varepsilon_0/3 > \varepsilon_0/3$, impossible by step 1.2; so beyond $N_0$ all terms have one sign, and by step 3.1 either $a_n > \delta$ for all $n \ge N_0$ or $a_n < -\delta$ for all $n \ge N_0$. [step 3.1, step 1.2, L1] ∎
