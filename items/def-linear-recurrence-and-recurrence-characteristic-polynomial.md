---
id: def-linear-recurrence-and-recurrence-characteristic-polynomial
kind: definition
title: "Constant-coefficient linear recurrences, their starting index and their characteristic polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-formal-power-series-and-coefficient-extraction, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Sections 4.1-4.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Section 3.7"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slides 5-18"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field, let $a=(a_n)_{n\ge0}$ be a sequence in $K$, and let $d\ge1$. A **constant-coefficient linear recurrence of order $d$ starting at $N$** is an identity

$$a_{n+d}+c_1a_{n+d-1}+\cdots+c_da_n=0\qquad(n\ge N),$$

where $c_1,\ldots,c_d\in K$ and $c_d\ne0$. Its **characteristic polynomial** and **reciprocal denominator** are

$$\chi(t)=t^d+c_1t^{d-1}+\cdots+c_d,\qquad Q(x)=1+c_1x+\cdots+c_dx^d.$$

The recurrence holds **from the start** when $N=0$, and it is **eventual** when such an $N$ exists. An order-zero recurrence starting at $N$ means $a_n=0$ for every $n\ge N$; its characteristic polynomial and reciprocal denominator are both $1$. This convention makes finitely supported sequences precisely the sequences of eventual order zero.

For a bi-infinite sequence $a:\mathbb Z\to K$, the same displayed identity is a recurrence of order $d$ when it holds for every $n\in\mathbb Z$. The condition $c_d\ne0$ then lets the identity be solved both forward and backward.

