---
id: fs-partitions-into-k-parts-are-counted-by-binomial-coefficients
kind: false-statement
title: "FALSE: $p_k(n)$ is counted by $\\binom{n-1}{k-1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-partitions-into-k-parts-recurrence,
       cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Alexander Hulpke, Combinatorics notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

**False claim:** for all positive integers $n$ and $k$,

$$p_k(n)=\binom{n-1}{k-1}.$$

## Facts & Assumptions

**Given:** the case $n=5$ and $k=3$.

[L1] The recurrence $p_k(n)=p_{k-1}(n-1)+p_k(n-k)$ holds for $k \ge 1$ ([[thm-partitions-into-k-parts-recurrence]]).

[L2] Compositions of $n$ into $k$ positive parts are counted by $\binom{n-1}{k-1}$ ([[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]]).

## Refutation

**Proof technique:** direct.

1.1 Using [L1], one gets $p_3(5)=p_2(4)+p_3(2)=2+0=2$, corresponding to the two partitions $3+1+1$ and $2+2+1$. [L1, algebra]

1.2 By [L2], one has $\binom{5-1}{3-1}=\binom{4}{2}=6$. [L2, algebra]

2.1 Steps 1.1 and 1.2 give $p_3(5)=2 \ne 6=\binom{4}{2}$, so the displayed claim is false. The binomial coefficient counts ordered compositions, not unordered partitions. [step 1.1, step 1.2] ∎
