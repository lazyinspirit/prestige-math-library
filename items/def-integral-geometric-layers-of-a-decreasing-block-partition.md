---
id: def-integral-geometric-layers-of-a-decreasing-block-partition
kind: definition
title: "Integral geometric layers of a decreasing block partition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-blockade-length-and-width, thm-real-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, proof of Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Definition

Let $(A_1,\ldots,A_t)$ be a partition into nonempty blocks with
$|A_1|\ge\cdots\ge|A_t|$, where $t\ge\ell\ge4$. For each integer $r\ge1$,
put
$$m_r:=\max\{n\in\mathbb N:1\le n\le t\text{ and }n\le\ell^{r/2}\}.$$
The set is nonempty because $1\le\ell^{r/2}$, and finite, so this maximum is
an integer. Let $q$ be the least $r\ge1$ for which $m_r=t$. The **integral
geometric layers** are
$$C_1:=(A_1,\ldots,A_{m_1}),\qquad C_r:=(A_{m_{r-1}+1},\ldots,A_{m_r})\quad(2\le r\le q).$$

Thus every index used here is integral; the layers are consecutive portions of
the original ordered partition. Real powers are those in
[[thm-real-power-laws]], and a block has the nonempty meaning of
[[def-blockade-length-and-width]].
