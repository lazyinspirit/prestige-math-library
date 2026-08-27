---
id: ex-pentagonal-recurrence-computes-p-ten
kind: example
title: "Euler's pentagonal recurrence computes p(10)=42"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [cor-pentagonal-recurrence-for-partition-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The generalized pentagonal offsets not exceeding $10$ are

$$1,\ 2,\ 5,\ 7.$$

So the recurrence gives

$$p(10)=p(9)+p(8)-p(5)-p(3).$$

Using

$$p(9)=30,\quad p(8)=22,\quad p(5)=7,\quad p(3)=3,$$

one gets

$$p(10)=30+22-7-3=42.$$
