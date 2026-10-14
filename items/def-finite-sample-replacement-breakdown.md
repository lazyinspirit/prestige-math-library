---
id: def-finite-sample-replacement-breakdown
kind: definition
title: Finite-sample replacement breakdown
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 2–3, 11–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 22–23"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Definition

Let $n\ge1$, let $T_n:\mathbb R^n\to\mathbb R$ be a total statistic, and fix a sample $x=(x_1,\ldots,x_n)$. For $0\le m\le n$, define its maximum replacement displacement by

$$B_m(T_n,x):=\sup\bigl\{|T_n(y)-T_n(x)|:y\in\mathbb R^n,\ \#\{i:y_i\ne x_i\}\le m\bigr\}\in[0,+\infty].$$

When the set is nonempty, the finite-sample replacement breakdown fraction is

$$\epsilon_n^*(T_n,x):=\frac1n\min\{m\in\{1,\ldots,n\}:B_m(T_n,x)=+\infty\}.$$

Only coordinate replacements are counted, and the replacement values range over all of $\mathbb R$. This is a property of the statistic at the fixed sample; it is not a probability or contamination-neighborhood statement.

