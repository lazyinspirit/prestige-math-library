---
id: lem-anti-excedances-become-descents-under-foata-fundamental-transformation
kind: lemma
title: "Under Foata's fundamental transformation, anti-excedances become descents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-standard-cycle-form-and-foata-fundamental-transformation, def-descent-set-major-index-excedance-and-fixed-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Statement

Let $\sigma \in S_n$ and let $w=\mathcal{F}(\sigma)$ be Foata's fundamental
transformation. Then a position $j$ is a descent of $w$ if and only if the entry
$w(j)$ is an anti-excedance of $\sigma$. In particular,

$$\operatorname{des}(w)=|\operatorname{AExc}(\sigma)|.$$

## Facts & Assumptions

**Given:** A permutation $\sigma \in S_n$, its standard cycle form

$$(a_{1,0}\,a_{1,1}\,\dots\,a_{1,r_1-1})\cdots(a_{s,0}\,a_{s,1}\,\dots\,a_{s,r_s-1}),$$

with each first entry $a_{t,0}$ the largest in its cycle and $a_{1,0}<\cdots<a_{s,0}$, and the one-line word $w=\mathcal{F}(\sigma)$ obtained by deleting the parentheses.

## Proof

**Proof technique:** direct.

1.1 For every cycle and every $0 \le j < r_t-1$, the cycle notation means $\sigma(a_{t,j})=a_{t,j+1}$. Therefore $a_{t,j}$ is an anti-excedance of $\sigma$ exactly when $a_{t,j+1}<a_{t,j}$, which is exactly the condition that the adjacent pair $(a_{t,j},a_{t,j+1})$ contributes a descent in the stripped word $w$. [given]

1.2 Across cycle boundaries, the stripped word has no descent: the last entry of cycle $t$ is followed by the first entry $a_{t+1,0}$ of cycle $t+1$, and the standard cycle form orders these first entries increasingly, so $a_{t,r_t-1}<a_{t+1,0}$. [given]

2.1 The last entry $a_{t,r_t-1}$ of a cycle is never an anti-excedance, because $\sigma(a_{t,r_t-1})=a_{t,0}$ and $a_{t,0}$ is the largest element of the cycle. [step 1.1, given]

3.1 By steps 1.1, 2.1 and 1.2, the descents of $w$ occur exactly at the entries of $w$ that are anti-excedances of $\sigma$. Counting them gives $\operatorname{des}(w)=|\operatorname{AExc}(\sigma)|$. [step 1.1, step 2.1, step 1.2] ∎
