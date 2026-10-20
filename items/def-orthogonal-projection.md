---
id: def-orthogonal-projection
kind: definition
title: "The orthogonal projection $P_Wv$ is the $W$-component in $V=W\\oplus W^\\perp$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finite-dimensional-orthogonal-decomposition]
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-orthogonal-projection.json
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., definition 6.55'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Definition 5.3.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Definition

Let $W$ be a subspace of a finite-dimensional inner product space $V$. The orthogonal-decomposition theorem (For a subspace $W$ of a finite-dimensional inner product space, $V=W\oplus W^\perp$) gives

$$V=W\oplus W^\perp$$

and associates to every $v\in V$ unique vectors $w\in W$ and $z\in W^\perp$ with $v=w+z$. The **orthogonal projection onto $W$** is the function

$$P_W:V\longrightarrow W,\qquad P_Wv=w.$$

Equivalently, $P_Wv$ is the unique vector of $W$ such that $v-P_Wv\in W^\perp$.

## Definition references

[[thm-finite-dimensional-orthogonal-decomposition]]

