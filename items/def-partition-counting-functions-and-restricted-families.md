---
id: def-partition-counting-functions-and-restricted-families
kind: definition
title: "The functions p(n), p_k(n), and the standard restricted partition families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partition-of-a-positive-integer,
       def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Definition

For integers $n$ and $k$, define:

- for $n>0$, a partition of $n$ is one from
  [[def-partition-of-a-positive-integer]], while for $n=0$ there is exactly one
  partition, the empty partition $\varnothing_{\mathrm{part}}:=()$;
- $p(n)$ is the number of partitions of $n$ when $n \ge 0$, with
  $p(0)=1$, and $p(n)=0$ for $n<0$;
- $p_k(n)$ is the number of partitions of $n$ into exactly $k$ positive parts
  when $n \ge 0$ and $k \ge 0$, and $p_k(n)=0$ if $n<0$ or $k<0$.

Thus $p_0(0)=1$, while $p_0(n)=0$ for $n \ne 0$.

For the empty partition, the number of parts is $0$ and the largest part is
defined to be $0$. The empty partition is regarded as having both distinct
parts and odd parts.

For a nonempty partition $\lambda=(\lambda_1,\dots,\lambda_r)$ of $n$:

- $\lambda$ has **at most $k$ parts** when $r \le k$;
- $\lambda$ has **largest part $k$** when $\lambda_1=k$;
- $\lambda$ has **parts at most $k$** when $\lambda_1 \le k$;
- $\lambda$ has **distinct parts** when $\lambda_1>\lambda_2>\cdots>\lambda_r$;
- $\lambda$ has **odd parts** when every $\lambda_i$ is odd.

Write $p_{\mathrm{dist}}(n)$ for the number of partitions of $n$ into distinct
parts and $p_{\mathrm{odd}}(n)$ for the number of partitions of $n$ into odd
parts.
