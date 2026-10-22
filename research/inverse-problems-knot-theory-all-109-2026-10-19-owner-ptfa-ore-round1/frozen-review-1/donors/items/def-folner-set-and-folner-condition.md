---
id: def-folner-set-and-folner-condition
kind: definition
title: "Folner sets and the Folner condition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a group, let $S\subseteq G$ be finite, and let $\varepsilon>0$. A
finite nonempty subset $F\subseteq G$ is an **$(S,\varepsilon)$-Folner set** if

$$|sF\triangle F|<\varepsilon|F|\qquad\text{for every }s\in S.$$

The group $G$ satisfies the **Folner condition** if for every finite
$S\subseteq G$ and every $\varepsilon>0$ there exists an $(S,\varepsilon)$-Folner
set.
