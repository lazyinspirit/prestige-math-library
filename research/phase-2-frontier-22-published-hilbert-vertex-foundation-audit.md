# Frontier-22 published Hilbert and vertex-foundation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-vertex-and-source-of-an-indecomposable-module` | `9b7f1d6567cad1a2c69dd08fc608ba6f56a9f46182377b2340f1145b763954eb` |
| `lem-leading-coefficient-ideals` | `b6a754d72b9377f669f68a4f86434ed86f73da5c86371bcdeb2f5572804204d7` |
| `lem-hilbert-basis-degree-cancellation` | `6f2f6060e4e918c5c9cac5750427ec933584c59def981b918cf68204991f6862` |
| `lem-polynomial-ideal-finite-generation` | `3a2055968a118e1c198cb64b6fef4f76525d1e346863cde5306665c172ae17b7` |
| `thm-hilbert-basis-theorem` | `477f7015a44a084bb9bad3dfc213a2e362bb4d1d697e0e64d6511a39d46ee895` |

All five complete targets and their exact relative-projectivity, stage-ideal,
polynomial-degree and Noetherian clauses were read. Every exact ID was searched
in the whole canonical ledger and in each classification section. Vertex/source
minimality, leading-coefficient ideals, degree cancellation, finite-stage
selection and Hilbert-basis mechanisms were also searched. None of the five
targets had a classification row or item-specific defect finding. The already
indexed Higman and Green existence theorems remain clear; the separate
Krull–Schmidt theorem remains A-P and was not duplicated or reclassified.

## Bounded dispositions

A vertex is precisely a minimal `p`-subgroup for relative projectivity, and a
source is an indecomposable summand of the restricted module whose induction
contains the original module as a summand. The definition asserts neither
existence nor uniqueness, leaving those to the separately indexed theorem, and
therefore does not consume its Krull–Schmidt proof gap.

For a polynomial ideal, adjoining zero to the exact-degree leading coefficients
makes every stage an ideal even over rings with zero divisors: if scalar
multiplication drops degree, its proposed leading coefficient is zero. Multiplying
by `x` makes the stages ascend. When a leading coefficient lies in a finitely
generated stage, a finite polynomial combination cancels the top term without
division and strictly lowers the degree unless it vanishes.

In a Noetherian coefficient ring, the ascending stage chain stabilizes and each
of the finitely many stages through the stabilization index has a finite
generating set. Choosing those finitely many sets and finitely many polynomial
realisers is finite choice, not an axiom-of-choice use. A least-degree element
outside their generated ideal contradicts the cancellation lemma. Hence every
polynomial ideal is finitely generated, and the ideal characterization gives
the Hilbert basis theorem, including the zero-ring and zero-divisor cases.

Classification: five new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies the five complete targets and their exact clauses. It does
not re-audit Green existence/conjugacy, repair Krull–Schmidt, or certify later
invariant-theory arguments beyond their use of polynomial Noetherianity. No
external source was newly consulted, no published item was edited, and no
independent judgment or exhaustive discovery claim is made.
