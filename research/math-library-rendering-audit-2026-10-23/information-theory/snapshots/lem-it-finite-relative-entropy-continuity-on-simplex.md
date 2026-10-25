---
id: lem-it-finite-relative-entropy-continuity-on-simplex
kind: lemma
title: "Finite relative entropy is continuous on a simplex with positive reference law"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-logarithm-derivative-and-integral]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof is a finite sum of coordinatewise limits."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.4.1 proof uses continuity of D(P||Q) on the finite simplex when Q is positive, printed pp. 362–363 (complete Chapter 11 PDF pp. 15–16)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Theorem 15.13 and Exercise III.23, finite-alphabet and full-support hypotheses, printed pp. 307–308 and 334–335"
---

## Statement

Let $\mathcal A$ be finite and let $p$ be a probability vector with $p(a)>0$ for every $a\in\mathcal A$. Then $q\mapsto D(q\|p)$ is finite and continuous on the probability simplex $\Delta(\mathcal A)$.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, a full-support probability vector $p$ on $\mathcal A$, and the finite relative entropy convention.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(q\|p)=\sum_{a:q(a)>0}q(a)\ln(q(a)/p(a))$, and $0\ln0=0$; if $q(a)>0=p(a)$ for some coordinate then $D(q\|p)=+\infty$.

[F2] [[thm-logarithm-derivative-and-integral]]: for $u>0$, $\ln u=\int_1^u ds/s$.

## Proof

1.1 For $0<t\le1$, put $u=1/t\ge1$. Then $|t\ln t|=(\ln u)/u$, and by [F2], $0\le(\ln u)/u=(1/u)\int_1^u ds/s\le(1/u)\int_1^u ds/\sqrt{s}\le2/\sqrt u\to0$. Thus $g(t)=t\ln t$ extends continuously to $t=0$ by $g(0)=0$. [F1, F2, algebra]

2.1 Since every $p(a)>0$, the number $\ln p(a)$ is finite, and $D(q\|p)=\sum_{a\in\mathcal A}g(q(a))-\sum_{a\in\mathcal A}q(a)\ln p(a)$. Each summand is continuous in $q(a)$ by step 1.1; the second sum is linear and has finitely many terms. Hence $D(q\|p)$ is finite and continuous on the whole simplex, including its boundary. [F1, F2, step 1.1, algebra] ∎

