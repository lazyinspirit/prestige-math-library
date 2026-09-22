# Terminal FA evidence: Thom isomorphism

Run: phase-2-remaining-27. Group b, queue position 1.
Disposition: escalated-to-owner. Source status: verified.

The exact queue declares this item published scope. The dispatch explicitly
requires escalation for a queued published item and forbids published edits.
The rejected item is unchanged: raw SHA-256
`3a2e10b9ce06e658571f6eaa85eddd62aa4add38d8c53debd372cb1151fb0283`.
No mathematical carrier, dependency, contract, page, or pass stamp was edited.

## Independent mathematical basis

The current theorem claims both an oriented cup-product isomorphism and an
unoriented isomorphism from cohomology with the orientation local system.
Its Step 1.2 invokes F2 for the latter. However,
`items/lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence.md`,
Statement and Given, explicitly assume an R-oriented bundle. Writing its E2
page in local-system notation does not remove that hypothesis. F3 identifies
the fiber cohomology system and defines its cohomology; neither assertion
constructs a convergent relative spectral sequence for an unoriented bundle.
Thus the Terra rejection is correct as a dependency-interface/proof gap, not
a counterexample to the classical twisted Thom theorem.

If a relative spectral sequence without the orientation hypothesis has been
established, its sole nonzero row is q=n, with E2 term H^p(B;O_R(xi)).
All differentials then have zero source or target, and convergence with a
single filtration quotient gives the claimed additive isomorphism. The gap
precedes that collapse. It cannot be filled by silently applying a theorem
outside its hypotheses. F2's proof 1.1 suggests how to construct the required
relative interface, but the current consumer neither proves that extension
nor cites a statement licensing it. The CW-type transport also needs to be
included in an authorized repair.

The rank-zero repair in current Step 4.1 is correct under the page's supplied
cohomological R-orientation convention: D(0)=B and S(0) is empty, so
normalization forces u=o and cup product is multiplication by the unit-valued
class o. Over a point with R=Z and o=-1 it is minus the identity. This does not
repair Step 1.2. The supplier's own Proof 5.1 still says u=1 at rank zero;
the owner should reconcile that boundary clause with its arbitrary supplied
orientation hypothesis as part of the supplier audit, rather than propagate
it back into the corrected consumer.

PUBLISHED-DEFECT thm-thom-isomorphism-for-oriented-vector-bundles: Proof 1.2 applies F2 to an unoriented bundle although F2's Statement and Given require an R-orientation; F3 does not supply the missing unoriented relative spectral sequence and convergence.

## Artifacts examined and history

- Current item, every direct dependency's relevant statement/definition, and
  the complete proof of the relative-Serre and finite-cover suppliers.
- The published A/B pair
  `library/algebraic-topology/leray-hirsch-thom-isomorphism-and-gysin-sequences{,-examples}.md`:
  arbitrary commutative R, supplied orientation, explicit AC for the general
  case, finite supplied-cover choice-free branch, and literal rank zero.
- `research/phase-2-next-18-batch-3.proof-contracts.json`, this item's
  citations, derivations, boundaries and risk_review. Its F2 quote includes
  the orientation hypothesis, yet assigns use 1.2 to it. The risk review's
  claim that the E2 statement licenses the unoriented clause does not resolve
  that mismatch. Its stored derivation 4.1 also predates the rank-zero repair.
  The current batch-10 contract does not own this inherited theorem.
- The current group-b rendered bundle and Alpha report do not contain an
  adjudication row for this inherited theorem. The relevant initial finding
  and Sol repair are in
  `research/phase-2-remaining-27-escalation-sol-3-rank-zero-euler.md` and
  `research/phase-2-remaining-27-step7-published-repairs.jsonl`.
- `research/phase-2-remaining-27-judge.jsonl` has one current-run judge row
  for this theorem, at 2026-09-21T03:52:50.176Z, rejecting Step 1.2; its
  item hash equals the raw hash above and context hash is
  `0ea8714b381956d1b06ae46df9dfe2bc420ff65198ff7b080d21633b80d67514`.
  The two earlier rejection rows belong to the found-via Euler naturality
  theorem (2026-09-19T09:00:08.411Z, graded sign;
  2026-09-19T18:51:24.846Z, rank-zero orientation), not to this item.
  They were inspected, but are not represented as two reviews of this theorem.
  The exact item closure JSON repeats the present unresolved rejection.

## Source verification

Read J. P. May, *A Concise Course in Algebraic Topology*, Chapter 23 section 5,
printed pp.194–196, complete section including the proof sketch:
https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
(PDF pages 202–204; browser text lines 11962–12090).
The section defines a Thom class by its fiber-generator restrictions and
states the cup-with-that-class isomorphism. Its proof sketch assumes the
class exists. This supports the chosen-generator normalization but does not
provide the missing unoriented interface. The rank-zero specialization above
is my direct calculation, not a quotation or a claim that May discusses this
particular boundary case. No full twisted proof is claimed from this source.
The attempted local PDF text extraction failed because pdftotext is absent;
the complete relevant text was instead read through the browser PDF parser.

## Focused checks and decision owed

- Queue status before recording: position 1 unrecorded, pending 1 of 1;
  no earlier positions to reseal.
- Raw item SHA-256 matches the Terra rejection exactly.
- `node tools/prosecheck.mjs items/thm-thom-isomorphism-for-oriented-vector-bundles.md`:
  0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-thom-isomorphism-for-oriented-vector-bundles.md`:
  PASS, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-next-18-batch-3.proof-contracts.json --strict --items thm-thom-isomorphism-for-oriented-vector-bundles`:
  0 errors, 0 warnings. This syntactic result does not validate the application
  of F2 or refresh the historical derivation.

The owner owes authorization and scheduling of a published mathematical
repair establishing the unoriented relative-Serre interface and its stated
base/convergence scope, or a complete independent twisted proof in the
consumer; retain the twisted claim and the corrected supplied-generator
rank-zero convention. Reconcile the owning historical contract and any
actually changed supplier boundary clause, then arrange the required paid
published-repair certification outside this lane. No third judge was run.
The published-defect ledger records the mathematical finding only.
No dependency was repaired in this lane, so the conditional consumer-batch
frontier-ledger update is not triggered; its instructions expressly forbid
expanding mathematical authority for bookkeeping.

Next action: record this unchanged item as escalated-to-owner through the
specified terminal recorder; this is the only queue position. The owner
obligation remains open, and this evidence is not a judge verdict or pass.
