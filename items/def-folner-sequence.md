---
id: def-folner-sequence
kind: definition
title: "Folner sequences for enumerated groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-folner-set-and-folner-condition]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Definition

Let $G=\{g_1,g_2,\dots\}$ be an enumerated countable group. A sequence
$(F_n)_{n\ge1}$ of finite nonempty subsets of $G$ is a **Folner sequence** if

$$\lim_{n\to\infty}\frac{|g_iF_n\triangle F_n|}{|F_n|}=0\qquad\text{for every fixed }i\ge1.$$

Equivalently, for every finite subset $S\subseteq G$ and every $\varepsilon>0$,
all sufficiently large $F_n$ are $(S,\varepsilon)$-Folner sets.
