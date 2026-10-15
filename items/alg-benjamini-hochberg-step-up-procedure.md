---
id: alg-benjamini-hochberg-step-up-procedure
kind: algorithm
title: "Benjamini–Hochberg step-up procedure"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
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
    date: 2026-10-15
sources:
  references:
    - title: "Yoav Benjamini and Yosef Hochberg, Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing, JRSS B 57(1) (1995), §3.1"
      url: "https://www.math.tau.ac.il/~yekutiel/eBayes/bh_1995.pdf"
    - title: "STATS 200: Introduction to Statistical Inference, Lecture 11: Testing Multiple Hypotheses, Stanford University, PDF pp. 28–29"
      url: "https://web.stanford.edu/class/archive/stats/stats200/stats200.1172/Lecture11.pdf"
---

## Definition

Input $m\ge1$ p-values $p_1,\ldots,p_m\in[0,1]$ and a level $q\in(0,1)$.
Order the hypotheses by the keys $(p_i,i)$, so equal p-values are ordered by
their original index, and write the ordered values as
$p_{(1)}\le\cdots\le p_{(m)}$. Set

$$R:=\max\bigl(\{k\in\{1,\ldots,m\}:p_{(k)}\le kq/m\}\cup\{0\}\bigr).$$

Reject exactly the hypotheses at ranks $1,\ldots,R$. If the set in the
maximum is empty, then $R=0$ and no hypothesis is rejected. This is a
deterministic step-up rule for the supplied p-values; its FDR guarantee is a
separate theorem.
