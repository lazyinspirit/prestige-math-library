---
id: cex-logarithm-not-uniformly-continuous-on-positive-reals
kind: counterexample
title: "The logarithm is not uniformly continuous on the positive half-line"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-natural-logarithm, thm-natural-logarithm-laws, def-uniform-continuity-real, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement refuted

The natural logarithm is uniformly continuous on $(0,\infty)$.

## Facts & Assumptions

**Given:** The positive half-line and the natural logarithm.

[L1] Uniform continuity has one $\delta>0$ for all pairs in the domain ([[def-uniform-continuity-real]]).

[L2] $\log(xy)=\log x+\log y$ and $\log2>0$ ([[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).

[L3] For every $\delta>0$, some natural $n\ge1$ satisfies $1/n<\delta$ ([[cor-archimedean-reciprocal]]).



## Counterexample

**Proof technique:** direct.

1.1 For $n\ge1$, put $x_n=1/n$ and $y_n=2/n$. Then $|x_n-y_n|=1/n$. [given, algebra]

2.1 The logarithm gap is $|\log y_n-\log x_n|=|\log2|=\log2$. [step 1.1, L2]

3.1 With $\varepsilon=\log2/2$, every $\delta>0$ admits an $n$ from [L3] for which the pair in step 1.1 is within $\delta$ but its image gap exceeds $\varepsilon$. [step 1.1, step 2.1, L3]

4.1 This contradicts [L1], so $\log$ is not uniformly continuous on $(0,\infty)$. [step 3.1, L1] ∎
