---
id: lem-solovay-inner-model-is-closed-under-ambient-omega-sequences
kind: lemma
title: The Solovay inner model is closed under ambient omega-sequences
status: published
origin: pipeline
deps: [thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: coding
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part III, Lemma 2.6; Unger 2015, Claims 4–5", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

If $f\in V[G]$ maps $\omega$ into $M$, then $f\in M$.

## Facts & Assumptions

**Given:** An ambient function $f:\omega\to M$.

[F1] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]]: $M=HOD(S)$ is transitive ZF.

[F2] [[def-axiom-of-choice]]: ambient AC permits simultaneous selection from nonempty coding fibres.

## Proof

1.1 Formula, rank and finite ordinal codes together with $s\in S$ give a definable surjection $F:\mathrm{Ord}\times S\twoheadrightarrow M$: for a code, return the uniquely defined object, and return $\varnothing$ for an invalid code. [F1]

2.1 By ambient AC choose for each $n$ a pair $(\alpha_n,s_n)$ with $F(\alpha_n,s_n)=f(n)$. A fixed pairing $\omega^2\cong\omega$ interleaves the $s_n$ into one $s\in S$, while the countable ordinal sequence $n\mapsto\alpha_n$ is also a member of $S$; interleave these two sequences once more. This is the sole new use of Choice. [F2, step 1.1]

3.1 The graph of $f$ is definable from that one $S$-parameter and the fixed definition of $F$, and every value has hereditary $OD(S)$ transitive closure. Hence the graph and $f$ belong to $M$. The empty-domain restriction and constant sequences use the same code and require no selection. [F1, step 2.1] ∎
