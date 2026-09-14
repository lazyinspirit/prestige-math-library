# Phase 2 next 18 — Step 3a scope review

Run: `phase-2-next-18`  
Pair: `leray-hirsch-thom-isomorphism-and-gysin-sequences` / `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples`  
Role: scope review only; this report makes no item-level proof judgment.

## Evidence reviewed

I read the current batch-3 manifest, coverage and notes; the run scope ledger,
planning record, dependency records and Step-1 owner readiness decisions; the
current plan entries; the complete AT-18 prose design; and the downstream AT-19,
AT-20 and differential-topology interface descriptions. I also read the complete
relevant arguments in Miller, MIT 18.906, Lectures 33 and 35 (PDF pp. 122–124 and
130–133); May, *A Concise Course in Algebraic Topology*, Chapter 23 §5 (PDF
pp. 203–204, printed pp. 194–196); and Hatcher, *Vector Bundles and K-Theory*,
§3.2 (PDF pp. 92–95, printed pp. 88–91).

The manifest contains every named prose-design A and B item, plus the locally
needed Thom-defined Euler class. Its Leray–Hirsch branch, orientation/Thom-space
definitions, finite-cover Thom argument, naturality and product formulas,
sphere-bundle Gysin sequence, and six companion examples are well targeted.
The three harvested sources adequately cover those topics; omission of the
design's Milnor–Stasheff locator is not itself the reason for this decision.

## Decision

### `leray-hirsch-thom-isomorphism-and-gysin-sequences` — insufficient

The general Thom interface is missing. The current
`thm-thom-isomorphism-for-oriented-vector-bundles` assumes a **finite numerable
trivializing cover**, and its only gluing lemma is finite-cover induction. The
cited May and Miller results instead give the Thom isomorphism for a general
oriented vector bundle in the relevant CW/numerable setting, using CW or relative
Serre machinery. Hatcher then uses this general theorem for universal bundles over
the infinite Grassmannians.

This restriction leaves the pair short of its own intended scope in two concrete
ways:

- `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity`
  invokes the restricted theorem without a finite trivializing cover. In fact the
  universal line over `CP∞` cannot have such a cover: if it trivialized over `m`
  open sets, the standard relative-cup-product argument would force the `m`th
  power of its first Chern class to vanish, contrary to
  `H*(CP∞;Z) = Z[c_1]`.
- AT-19/AT-20 use this pair to construct classes from universal bundles, and the
  differential-topology plan consumes a general ordinary-cohomology Thom
  class/isomorphism interface. A finite-cover theorem does not supply those
  stated roles. The later naturality, Euler and Gysin statements are consequently
  broader than the only planned Thom theorem that supplies them.

Owner action recommended: enrich this pair, without merging it, with the Thom
isomorphism for all `R`-oriented numerable bundles over the selected CW or
paracompact-Hausdorff base class. A clean route is to add the relative Serre
spectral sequence for `(D(ξ),S(ξ))`, identify its single nonzero fiber-cohomology
row using the orientation local system, and derive existence, uniqueness and the
module isomorphism; an adequate locally finite/exhaustive gluing theorem would
also work. Retain the finite-cover lemma as a special case if useful, and propagate
the exact enlarged hypotheses through naturality, the `CP∞` example, Euler/Gysin
maps and the twisted statement. The pair remains blocked until this enrichment is
applied and the owner records `proceed` for the resulting scope.

The batch note's separate arbitrary-`R` supplier mismatch for
`def-r-oriented-vector-bundle-and-orientation-local-system` is an authorship/proof
obligation, not the basis of this scope decision; the Step-1 owner readiness record
did not alter the finite-cover scope described above.
