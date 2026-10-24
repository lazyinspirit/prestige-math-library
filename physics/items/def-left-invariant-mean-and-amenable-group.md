---
id: def-left-invariant-mean-and-amenable-group
kind: definition
title: "Left-invariant means and amenable groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-translation-action-on-bounded-functions, def-mean-on-bounded-functions-on-a-group]
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

A mean $m$ on $\ell^\infty(G)$ is **left invariant** if

$$m(g\cdot f)=m(f)\qquad\text{for all }g\in G,\ f\in\ell^\infty(G).$$

The group $G$ is **amenable** if it admits a left-invariant mean on
$\ell^\infty(G)$.
