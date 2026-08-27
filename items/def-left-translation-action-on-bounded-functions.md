---
id: def-left-translation-action-on-bounded-functions
kind: definition
title: "Left translation on bounded functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-mean-on-bounded-functions-on-a-group]
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

Let $G$ be a group and $f\in\ell^\infty(G)$. For $g\in G$, the
**left translate** of $f$ by $g$ is the bounded function

$$(g\cdot f)(x):=f(g^{-1}x)\qquad (x\in G).$$

This defines a left action of $G$ on $\ell^\infty(G)$ because
$e\cdot f=f$ and $(gh)\cdot f=g\cdot(h\cdot f)$.
