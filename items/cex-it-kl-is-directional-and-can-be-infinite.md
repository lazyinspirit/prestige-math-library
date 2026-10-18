---
id: cex-it-kl-is-directional-and-can-be-infinite
kind: counterexample
title: "Finite KL divergence is directional and may be infinite"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [thm-it-finite-kl-nonnegative-equality, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.3, printed pp. 21–23; directed divergence and the support convention."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 2, §2.1, printed pp. 21–22, equation (2.1); discrete KL support convention."
---

## Statement refuted

For every pair of finite probability vectors $p,q$ on the same alphabet, $D(p\|q)=D(q\|p)$.

## Facts & Assumptions

**Given:** The finite KL convention and $0<\varepsilon<1$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(p\|q)=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$, with $+\infty$ if $p_i>0=q_i$ for some coordinate.

[F2] [[thm-it-finite-kl-nonnegative-equality]]: finite KL is nonnegative and is zero exactly for equal probability vectors.

## Counterexample

**Given:** Take the alphabet $\{0,1\}$, $p=\delta_0$, $q=(\varepsilon,1-\varepsilon)$, and $0<\varepsilon<1$.

1.1 The support of $p$ is contained in that of $q$ because $q_0=\varepsilon>0$. By [F1], $D(p\|q)=1\cdot\ln(1/\varepsilon)=-\ln\varepsilon$, a finite real number. Since $p\ne q$, [F2] makes this value strictly positive, consistent with the formula. [given, F1, F2, algebra]

2.1 The second coordinate has $q_1=1-\varepsilon>0=p_1$. Thus [F1] gives $D(q\|p)=+\infty$. The two directions are unequal, which refutes the statement. [given, F1, step 1.1, cases]

3.1 For the separate disjoint point masses $p=\delta_0$ and $q=\delta_1$, coordinate $0$ has $p_0>0=q_0$ and coordinate $1$ has $q_1>0=p_1$; applying [F1] in each direction gives $D(p\|q)=D(q\|p)=+\infty$. This records the disjoint-support boundary. [F1, construct] ∎
