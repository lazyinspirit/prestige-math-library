---
id: lem-reidemeister-schreier-relators-are-independent-of-word-representatives
kind: lemma
title: "Reidemeister-Schreier relators are independent of word representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-closure, lem-schreier-rewriting-is-invariant-under-free-reduction, thm-reidemeister-schreier-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

In the Reidemeister-Schreier theorem, replacing a defining relator by a freely
equivalent word does not change the resulting subgroup presentation.

## Facts & Assumptions

**Given:** A Reidemeister-Schreier presentation with Schreier system
$\mathcal T$, and two freely equivalent relator words $r,r'$.

[L1] The normal closure of a set is the smallest normal subgroup containing it
([[def-normal-closure]]).

[L2] Schreier rewriting is unchanged by free reduction
([[lem-schreier-rewriting-is-invariant-under-free-reduction]]).

[L3] The subgroup presentation is obtained from the rewritten conjugates
$\tau(trt^{-1})$ ([[thm-reidemeister-schreier-presentation]]).

## Proof

**Proof technique:** direct.

1.1 If $r'$ is obtained from $r$ by one elementary cancellation or reverse insertion, then for every transversal element $t$ the word $tr't^{-1}$ is obtained from $trt^{-1}$ by the same local free reduction inside the middle block. Therefore [L2] gives $\tau(trt^{-1})=\tau(tr't^{-1})$. [L2, given]

2.1 Any freely equivalent pair $r,r'$ is connected by finitely many such moves, so the equality from step 1.1 persists through the whole chain. Thus every rewritten relator produced from $r$ is identical to the one produced from $r'$. [L2, step 1.1]

3.1 By [L1], replacing a generator of a normal closure by the same group element does not change that normal closure. Hence the presentation described in [L3] is independent of which freely equivalent word is chosen to represent each ambient relator. [L1, L3, step 2.1] ∎
