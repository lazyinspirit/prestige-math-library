---
page: temperley-lieb-jones-wenzl-traces-and-quotients
title: "Temperley–Lieb Jones–Wenzl Projectors, Traces, and Quotients"
status: published
requires:
  - temperley-lieb-root-of-unity-and-modular-representation-theory
items:
  - thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization
examples: []
---

This page uses the supplier-first Jones–Wenzl, root-path and full rank-one tilting constructions on [[temperley-lieb-root-of-unity-and-modular-representation-theory]]. Their canonical carriers have a single home there; the full root-of-unity, fusion, trace-radical, centralizer and ribbon conclusions are retained here by reuse. The local result proves the exact Jones specialization of the Hecke Markov trace.

## Results

- [[thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization]] proves descent through the complete two-sided Hecke ideal, with $T_i\mapsto qU_i-1$ and $z_0=-1/(q^2+1)$.
- [[def-temperley-lieb-closure-trace-and-partial-trace]], [[lem-temperley-lieb-closure-trace-component-identities]], [[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]] and [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]] supply the exact unit-denominator recursion, unnormalized closure, projector uniqueness and partial traces.
- [[lem-temperley-lieb-general-theta-net-evaluation]] proves the general theta formula in the unit-denominator domain. At roots its retained labels have nonzero allowed-level pairings and zero forbidden-level pairings, with no undefined projector or boundary division.
- [[lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]], [[lem-temperley-lieb-boundary-tensor-ideal-has-the-embedded-components]] and [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]] give all-rank matrix blocks, the embedded boundary ideal, the trace radical and truncated fusion. The unreduced first-boundary algebra is semisimple although its closure trace is degenerate.
- [[def-temperley-lieb-rank-one-lusztig-tilting-category]], [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]], [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]] and [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]] establish the full toral-character category, filtration and extension arguments, all indecomposable tiltings, endomorphism negligibility and fusion, for every $\ell\ge3$.
- [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]] and [[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]] give the actual finite $R$ matrix, full semisimplified centralizer and signed-TL ribbon comparison. The self-dual cup/cap loop is $-\delta$; parity changes the pivotal closure to $+\delta$. The unreduced boundary projector has nonzero image and is killed only after the negligible quotient.

The trace-radical interface is [[def-negligible-morphism-in-a-pivotal-category]] and [[lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace]]. Companion: [[temperley-lieb-jones-wenzl-traces-and-quotients-examples]].
