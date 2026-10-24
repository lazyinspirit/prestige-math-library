---
id: ex-weak-nullstellensatz-over-real-numbers
kind: example
title: "Over R, not every maximal ideal is an evaluation ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-evaluation-ideal-is-maximal, lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary (15.5)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

In $\mathbb R[x]$, the ideal $(x^2+1)$ is maximal but is not an evaluation
ideal $(x-a)$ for any $a\in\mathbb R$.

## Facts & Assumptions

**Given:** The polynomial ring $\mathbb R[x]$.

[L1] Evaluation at $a\in\mathbb R$ has kernel $(x-a)$ ([[lem-evaluation-ideal-is-maximal]]).

[L2] A maximal ideal of a finite-type algebra has finite residue field over the base field ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]).

## Verification

**Proof technique:** direct.

1.1 The quotient $\mathbb R[x]/(x^2+1)$ is isomorphic to $\mathbb C$ by sending the class of $x$ to $i$. Since $\mathbb C$ is a field, $(x^2+1)$ is maximal. [L2, given]

2.1 For every $a\in\mathbb R$, [L1] says the evaluation ideal at $a$ is $(x-a)$, and no such ideal equals $(x^2+1)$ because $x^2+1$ has no real root. So weak Nullstellensatz fails in point form over $\mathbb R$. The residue field extension here is $\mathbb C/\mathbb R$, which is finite of degree $2$, as [L2] allows. [L1, L2, step 1.1] ∎
