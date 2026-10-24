---
id: def-colouring-action-weight-function-and-pattern-inventory
kind: definition
title: "Colourings, weight functions, and the pattern inventory"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action,
       def-fixed-point-sets-of-a-group-action,
       def-cycle-index-of-a-permutation-group,
       def-commutative-ring,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials]
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
    - title: "Ben Lynn, Polya Theory: Pólya's Inventory Theorem"
      url: "https://theory.stanford.edu/~blynn/polya/polya.html"
pipeline_run: null
---

## Definition

Let a finite group $G$ act on a finite set $X$, and let $C$ be a finite set of
colours. A **colouring** is a function $f:X \to C$.

The action of $G$ on $X$ induces an action on colourings by

$$(g \cdot f)(x):=f(g^{-1}x).$$

Now let $R$ be a commutative ring and let $w:C \to R$ be a weight function. The
**weight** of a colouring $f$ is

$$\operatorname{wt}(f):=\prod_{x \in X} w(f(x)).$$

Because the induced action only permutes the positions $x \in X$, every two
colourings in the same $G$-orbit have the same weight.

The **pattern inventory** is the orbit sum

$$\mathcal{I}_G(X,C;w):=\sum_{O \in C^X/G}\operatorname{wt}(O),$$

where $\operatorname{wt}(O)$ denotes the common weight of the colourings in the
orbit $O$. When every colour has weight $1$, this is just the number of
colouring orbits.
