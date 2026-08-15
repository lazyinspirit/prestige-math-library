---
id: def-orthogonal-complement
kind: definition
title: "The orthogonal complement $W^\\perp=\\{v:\\langle v,w\\rangle=0\\text{ for all }w\\in W\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-orthogonal-vectors-sets-and-orthonormal-bases, def-linear-subspace]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6C'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §5.2'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Definition

For a linear subspace $W$ ([[def-linear-subspace]]) of an inner product space $V$, using the preceding notion of orthogonality ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]), its **orthogonal complement** is

$$W^\perp:=\{v\in V:\langle v,w\rangle=0\text{ for every }w\in W\}.$$

This is a linear subspace: $0\in W^\perp$, and linearity in the first argument shows that $au+bv\in W^\perp$ whenever $u,v\in W^\perp$ and $a,b$ are scalars. One has $V^\perp=\{0\}$ by positive definiteness and $\{0\}^\perp=V$.
