---
id: def-mean-on-bounded-functions-on-a-group
kind: definition
title: "Means on bounded functions on a group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: false
verification:
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

Let $G$ be a group. Write $\ell^\infty(G)$ for the real vector space of bounded
functions $f:G\to\mathbb R$.

A **mean** on $\ell^\infty(G)$ is a linear map

$$m:\ell^\infty(G)\to\mathbb R$$

such that:

1. $f\ge0$ pointwise implies $m(f)\ge0$;
2. $m(\mathbf 1_G)=1$, where $\mathbf 1_G$ is the constant function $1$.

Positivity and normalization imply $|m(f)|\le\|f\|_\infty$, so a mean is
automatically bounded of norm $1$.
