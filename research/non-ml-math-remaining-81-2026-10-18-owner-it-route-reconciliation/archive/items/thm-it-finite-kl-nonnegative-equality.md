---
id: thm-it-finite-kl-nonnegative-equality
kind: theorem
title: "Finite KL divergence is nonnegative with equality exactly at equal laws"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [lem-it-finite-log-sum-inequality, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument is entirely finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.3, printed pp. 21–23, Theorem 2.3.1; finite divergence inequality and equality."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 2, §2.2, printed pp. 24–25, Theorem 2.3; information inequality and equality."
---

## Statement

For finite probability vectors $p,q$ on the same alphabet, $D(p\|q)\ge0$, and $D(p\|q)=0$ if and only if $p=q$. If $p_i>0=q_i$ for some coordinate, then $D(p\|q)=+\infty$.

## Facts & Assumptions

**Given:** Finite probability vectors $p,q$ on a common alphabet.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(p\|q)=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$, with $+\infty$ if $p_i>0=q_i$ for some $i$.

[F2] [[lem-it-finite-log-sum-inequality]]: for nonnegative vectors $a,b$ with positive sums $A,B$, $\sum_{a_i>0}a_i\ln(a_i/b_i)\ge A\ln(A/B)$, with equality exactly when $a_i=(A/B)b_i$ at every coordinate.

## Proof

1.1 If $p_i>0=q_i$ for some $i$, [F1] gives $D(p\|q)=+\infty$, so nonnegativity holds and equality to zero is impossible. Otherwise $p_i=0$ whenever $q_i=0$; apply [F2] to $a_i=p_i$, $b_i=q_i$. Both sums equal $1$, and its left side is $D(p\|q)$, so $D(p\|q)\ge0$. [given, F1, F2]

2.1 In the absolutely continuous case, [F2] says equality holds exactly when $p_i=(1/1)q_i=q_i$ for every coordinate. Conversely, if $p=q$, every positive-support term in [F1] is $p_i\ln1=0$, so $D(p\|q)=0$. Together with step 1.1 this proves the iff statement, including zero coordinates. [F1, F2, step 1.1, algebra] ∎
