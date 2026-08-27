---
id: fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment
kind: false-statement
title: "FALSE: every weight substitution collapses the pattern inventory to the plain orbit count"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-weighted-pattern-inventory-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: Pólya's Inventory Theorem"
      url: "https://theory.stanford.edu/~blynn/polya/polya.html"
pipeline_run: null
---

## Statement

**False claim:** no matter what weight function one chooses, the pattern
inventory always collapses to the plain number of colour-orbits.

## Facts & Assumptions

**Given:** the trivial action on the one-point set $X=\{\bullet\}$ with colour set $C=\{\text{blue},\text{red}\}$.

[L1] Weighted pattern inventory evaluates the cycle index at the power sums of the colour weights ([[thm-weighted-pattern-inventory-formula]]).

## Refutation

**Proof technique:** direct.

1.1 Give blue weight $1$ and red weight $u$. Because the action is trivial and $X$ has one point, there are exactly two colouring orbits, with weights $1$ and $u$. Hence the pattern inventory is $1+u$. [given]

2.1 By [L1], the same conclusion is the cycle-index substitution for this one-point action. Unless $u=1$, the polynomial $1+u$ is not the plain orbit count $2$. [step 1.1, L1]

3.1 Therefore the displayed claim is false: a nonconstant weight assignment retains extra colour-profile information instead of collapsing to a single total. [step 2.1] ∎
