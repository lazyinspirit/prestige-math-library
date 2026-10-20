---
id: alg-finite-pool-version-space-query
kind: algorithm
title: "Finite-pool version-space query procedure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pool-based-realizable-active-learning
justified_by:
  - thm-active-version-space-invariant-and-query-bound
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steve Hanneke, Theory of Active Learning, version 1.1, §5.1"
      url: "https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf"
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2 §§2.1–2.2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Definition

Input a finite pool-based realizable active-learning instance with ordered pool $U=(u_1,\ldots,u_m)$ and a nonnegative integer query budget $b$. Initialize the current version space $V=\mathcal H$, query count $q=0$, pool index $i=1$, an empty query log, and an empty status record for each pool index. While $i\le m$, first check whether every $h\in V$ gives the same label at $u_i$. If so, record that unanimous label as a prediction and set $i\leftarrow i+1$, even when $q=b$. Otherwise, if $q=b$, mark indices $i,i+1,\ldots,m$ as abstentions and return the current $V$, records, and query log. If instead $q<b$, query $y=\mathcal O(u_i)$, append $(i,y)$ to the query log, record the queried label, replace $V$ by $\{h\in V:h(u_i)=y\}$, set $q\leftarrow q+1$ and $i\leftarrow i+1$, and, if now $q=b$, mark all remaining indices $i,\ldots,m$ as abstentions and return. If the scan reaches $i=m+1$, return the current $V$, records, and query log. The query budget limits oracle calls; the procedure scans each pool index at most once and reports unresolved suffix entries as abstentions when it stops at the budget.

## Definition references

[[def-pool-based-realizable-active-learning]]: fixes the measurable binary classifier class, finite ordered pool, pointwise exact target oracle, version spaces, and disagreement region used by this procedure.

[Steve Hanneke, *Theory of Active Learning*, version 1.1, §5.1](https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf)

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 2 §§2.1–2.2](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)
