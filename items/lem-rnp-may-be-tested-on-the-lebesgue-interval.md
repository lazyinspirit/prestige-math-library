---
id: lem-rnp-may-be-tested-on-the-lebesgue-interval
kind: lemma
title: "RNP may be tested on the Lebesgue interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, thm-rnp-dentability-characterization, lem-nondentability-produces-a-vector-measure-without-density]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Corollaries 2.9--2.10, printed p. 41"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. A Banach space $X$ has RNP if and only if every
bounded-variation $X$-valued vector measure on the Lebesgue sigma-algebra of
$[0,1]$ which is absolutely continuous with respect to Lebesgue measure has a
Bochner density.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] RNP requires the density property on every finite measure space
([[def-radon-nikodym-property]]).

[L2] Under AC, failure of RNP is equivalent to the presence of a nondentable
bounded closed convex set ([[thm-rnp-dentability-characterization]]).

[L3] Such nondentability yields an absolutely continuous bounded-variation
Lebesgue interval vector measure without a Bochner density
([[lem-nondentability-produces-a-vector-measure-without-density]]).

## Proof

**Proof technique:** direct.

**Given:** A Banach space $X$ and AC.

1.1 Prove the forward interval implication. If $X$ has RNP, apply [L1] to the finite measure space $([0,1],\mathcal L,\lambda)$. Every interval measure in the Statement then has a Bochner density. [given, A1, L1]

1.2 Prove the converse interval implication. Assume the stated interval test holds. If $X$ failed RNP, [L2] would supply a nondentable bounded closed convex set and [L3] would supply precisely an interval measure covered by the test but having no density, a contradiction. Thus $X$ has RNP. [given, A1, L1, L2, L3]

2.1 Combine both directions and record degenerate cases. [A1, step 1.1, step 1.2] The two implications prove the equivalence. For $X=\{0\}$ or the zero vector measure, the density is zero. Lebesgue measure is finite and includes the endpoints, whose singleton sets are null. The full-AC cost is exactly that of [L2]--[L3]. [A1, step 1.1, step 1.2] ∎