---
id: cex-temperley-lieb-zero-cell-form-does-not-detect-module-head
kind: counterexample
title: "A zero Temperley–Lieb cell form can have a nonzero simple module"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, lem-temperley-lieb-link-state-gram-form-is-invariant, def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references: []
---

## Statement refuted

For every Temperley–Lieb link-state module over a field, an identically zero cell form implies that the underlying module has no nonzero simple quotient.

## Facts & Assumptions

**Given:** A field $k$, the rank-two algebra $\mathrm{TL}_2(k,0)$, and the link-state module $W_{2,0}(k,0)$.

[F1] W_{n,t} has link states as a basis and the right action is defined by stacking a rank-n diagram below the state ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] The rank-$n$ algebra has as a basis all noncrossing pairings of its $2n$ boundary points; each removed loop contributes $\delta$ ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F3] The cell form is the loop-counting reflection/capping form ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

## Counterexample

**Proof technique:** direct.

1.1 There is exactly one rank-two link state with zero defects, namely the arc joining sites $1$ and $2$. Call it $x$. Thus $W_{2,0}(k,0)=kx$. The four cyclic boundary points have three pairings; the pairing with alternating endpoints is crossing, while the other two are the identity matching and $d_1$ with its top cap and bottom cup. Hence those two diagrams are the full basis of $\mathrm{TL}_2(k,0)$. [F1, F2, given, construct]

2.1 The identity acts as the identity on $x$. Stacking $x$ above $d_1$ closes the top cap of $d_1$ with the arc of $x$, producing one loop and leaving the same link state, so $x\cdot d_1=\delta x=0$. Since $1$ and $d_1$ span $\mathrm{TL}_2(k,0)$, every algebra element acts on the one-dimensional space $kx$ by a scalar. The module is nonzero and simple. [F1, F2, step 1.1]

3.1 Reflecting $x$ and gluing it to itself creates one loop, so $\phi_{2,0}(x,x)=\delta=0$. Since $x$ is the sole basis vector, bilinearity makes the cell form identically zero and its cell-form quotient $W_{2,0}/\operatorname{rad}(\phi_{2,0})$ is zero. But $W_{2,0}=kx$ is itself a nonzero simple module by step 2.1. This refutes the statement. [F3, step 1.1, step 2.1] ∎
