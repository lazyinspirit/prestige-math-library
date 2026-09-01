---
id: ex-finite-flat-module-over-a-local-ring
kind: example
title: "A residue-field basis lifts to a basis of a finite flat module over a local ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-finite-flat-modules-over-local-rings-are-free]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
---

## Example

Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat
$R$-module. If $\bar x_1,\ldots,\bar x_r$ is a basis of the residue vector space
$M/\mathfrak mM$, then any lifts $x_1,\ldots,x_r\in M$ form an $R$-basis of $M$.

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$, a finite flat $R$-module
$M$, a basis $\bar x_1,\ldots,\bar x_r$ of $M/\mathfrak mM$, and lifts
$x_1,\ldots,x_r\in M$.

[L1] A finite flat module over a Noetherian local ring is free
([[thm-finite-flat-modules-over-local-rings-are-free]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], the module $M$ is free of rank $r$, because the residue vector-space dimension equals the rank of a free module. [L1, given]


1.2 The chosen lifts generate $M$ by Nakayama, and a generating set of size equal to the rank of a free module is automatically a basis. Therefore $x_1,\ldots,x_r$ is an $R$-basis of $M$. [algebra]


2.1 So residue-field bases lift to actual bases in the finite flat local case. [algebra] ∎
