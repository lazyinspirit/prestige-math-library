---
id: ex-finite-flat-module-over-a-local-ring
kind: example
title: "A residue-field basis lifts to a basis of a finite flat module over a local ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, thm-finite-flat-modules-over-local-rings-are-free, thm-local-ring-unit-characterisations]
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat
$R$-module. If $\bar x_1,\ldots,\bar x_r$ is a basis of the residue vector space
$M/\mathfrak mM$, then any lifts $x_1,\ldots,x_r\in M$ form an $R$-basis of $M$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring $(R,\mathfrak m)$, a finite flat $R$-module $M$, a basis $\bar x_1,\ldots,\bar x_r$ of $M/\mathfrak mM$, and lifts $x_1,\ldots,x_r\in M$.

[L1] Under the assumed Axiom of Choice, a finite flat module over a Noetherian local ring is free ([[thm-finite-flat-modules-over-local-rings-are-free]]).

[L2] Under the same assumption, every element outside the unique maximal ideal of a local ring is a unit ([[thm-local-ring-unit-characterisations]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], the module $M$ is free of rank $r$, because reducing a free basis modulo $\mathfrak m$ gives a basis of $M/\mathfrak mM$. Fix a free basis $e_1,\ldots,e_r$ of $M$. [L1, given, choose]


2.1 Let $B\in M_r(R)$ be the coordinate matrix whose columns are the $x_i$ in the basis $e_j$. Reducing modulo $\mathfrak m$ gives an invertible matrix because the $\bar x_i$ form a residue basis, so $\det B\notin\mathfrak m$. By [L2], $\det B$ is a unit. The adjugate identity $B\operatorname{adj}(B)=(\det B)I_r$ therefore makes $B$ invertible over $R$. Thus its columns $x_1,\ldots,x_r$ are a basis. For $r=0$, both bases are empty and the conclusion is immediate. [L2, step 1.1, algebra]


3.1 So residue-field bases lift to actual bases in the finite flat local case under the stated Choice assumption. [step 2.1] ∎
