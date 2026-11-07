---
id: lem-smith-diagonal-spin-split-local-identity
kind: lemma
title: "The split local trace identity for diagonal spin"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-axiom-of-choice, def-dependent-choice, thm-local-hilbert-symbol-cup-product-norm-criterion, thm-local-artin-reciprocity-and-norm-index]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and DC are inherited from the local Hilbert-symbol norm criterion and
  local reciprocity interface.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, local factors in the involution-spin calculation"
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field of characteristic zero with finite residue field, and write $H_2$ for its quadratic Hilbert symbol. For $x,y\in F^\times$ with $x+y\ne0$,
$$H_2(x+y,-xy)=H_2(x,y).$$
This identity applies in the split quadratic algebra $F\times F$, where $x+y$ and $xy$ are the trace and norm. It includes residue characteristic $2$; it does not establish the nonsplit dyadic or global spin identities.

## Statement references

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[thm-local-artin-reciprocity-and-norm-index]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, DC, the local field, and nonzero $x,y,x+y$ in the Statement.

[F1] The quadratic Hilbert symbol is symmetric and bilinear on square classes by its cup-product description, and its norm criterion holds under the local Artin theorem. [[thm-local-hilbert-symbol-cup-product-norm-criterion]] [[thm-local-artin-reciprocity-and-norm-index]]

## Proof

1.1 For every $x\in F^\times$, $H_2(x,-x)=1$. If $x$ is a square this is immediate; otherwise $-x=N_{F(\sqrt x)/F}(\sqrt x)$, and the quadratic norm criterion in [F1], together with the symmetry of the quadratic symbol, gives the result. [F1, given, algebra]

2.1 If $-xy$ is a square, then $y$ and $-x$ have the same square class, so both sides are $1$ by step 1.1. Otherwise, in $F(\sqrt{-xy})$ the nonzero element $x+\sqrt{-xy}$ has norm $x(x+y)$. The norm criterion and bilinearity give $$1=H_2(x(x+y),-xy)=H_2(x,-xy)H_2(x+y,-xy).$$ Since quadratic symbol values are their own inverses, $H_2(x+y,-xy)=H_2(x,-xy)=H_2(x,-x)H_2(x,y)=H_2(x,y)$ by step 1.1. This proves the identity also at residue characteristic $2$. [F1, step 1.1, given, algebra] ∎
