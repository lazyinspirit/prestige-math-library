---
id: ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus
kind: example
title: "Why the Khovanov-Rozansky II invariance proof stays in the braid-diagram calculus"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift, thm-markovs-closed-braid-equivalence-theorem, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, the IIb obstruction and the Markov move list, printed pp. 8-9; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), the Markov moves (18)-(19) and their discussion, printed p. 1397"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
---

## Example

Assume AC ([[def-axiom-of-choice]]) for the sourced Markov comparison of
ambient-isotopic closures. Tabulate the moves actually used in the invariance proof of
[[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]]:

(i) the braid-like Reidemeister IIa move and far commutations;
(ii) the braid-like Reidemeister III move with coherent orientations;
(iii) conjugation of braid words;
(iv) the two oriented stabilizations/destabilizations via the type IA and IB
kink computations;
(v) Markov's equivalence theorem [[thm-markovs-closed-braid-equivalence-theorem]].

The oriented Reidemeister IIb move is not in the list, and Khovanov-Rozansky
II, printed p. 9 states explicitly that the authors did not prove IIb
invariance and restricted to braid diagrams to avoid it; for closed braids the
IIb move is never needed, because Markov's theorem accounts for all isotopies
of the closures. This example illustrates proof scope only; it makes no claim
that the complex fails to be invariant under IIb, and it does not claim IIb
invariance. Caveat: the type IA and IB pictures must be the source's oriented
pictures, since the stabilizations carry different shifts.

## Facts & Assumptions

**Given:** AC, the invariance theorem's proof, its list of Markov moves, and the source's statement of the IIb obstruction.

[F1] The braid-homology invariance theorem reduces the proof to the three Markov moves and obtains the invariance from the IIa move, the coherent-orientation III move, conjugation, the two oriented kink computations and Markov's theorem; the Axiom of Choice enters only through Markov's theorem ([[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]]).

[F2] Markov's theorem for braid closures: two closed braids are ambient-isotopic oriented links if and only if the braids are related by conjugation and stabilization/destabilization moves; in particular no Reidemeister move outside the braid-diagram calculus is needed for the comparison of closures ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F3] AC is the choice-function principle, assumed for the Markov theorem used here ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** comparison of the proof's move list with the source's stated scope; no new mathematics.

1.1 *The moves used, with their roles.* In the proof of [F1] far commutations $\sigma_i\sigma_j\leftrightarrow\sigma_j\sigma_i$ are the signed tensor flips of disjoint crossing factors, the braid-like IIa move covers inverse cancellations $\sigma_i\sigma_i^{-1}$, $\sigma_i^{-1}\sigma_i$; the coherent-orientation III move covers the braid relation; conjugation covers the change of cyclic order; the kink computations cover the two oriented stabilizations/destabilizations with their shifts $\{1,1\}[1]$ and none; and marking changes are absorbed by the marking-independence theorem. These are the source's Markov moves (a)-(c), with marking independence supplying the auxiliary marking changes. The separate six defining properties of $F$ include a skein relation and an unknot normalization, so they are not a move list. [F1, F2]

1.2 *Why IIb is absent and why this is not a gap.* The source restricts the construction to braid diagrams because the oriented IIb move lies outside the braid-diagram calculus and its invariance is not proved there. By [F2], an ambient isotopy between two braid closures can be replaced by a finite Markov sequence, so IIb is never invoked in the invariance argument; conversely the example claims no invariance under IIb and no failure of it, only that the proof's scope is the braid-diagram calculus. The only choice-theoretic input is Markov's theorem inside [F1], as recorded there. [F1, F2, F3]

2.1 *Conclusion.* The tabulation of step 1.1 is complete: every move used in the invariance proof is one of far commutation, braid-like IIa cancellation, coherent-orientation III, conjugation, the two oriented stabilizations, or a marking change composed along a Markov sequence, and the IIb move is neither used nor claimed. This is a scope illustration, not a counterexample or a failure statement. [F1, F2, step 1.1] ∎
