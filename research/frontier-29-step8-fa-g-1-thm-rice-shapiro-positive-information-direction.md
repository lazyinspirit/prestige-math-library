# Final-adjudicator terminal evidence

- Run: `frontier-29`
- Group: `g`
- Item: `thm-rice-shapiro-positive-information-direction`
- Disposition: `accepted-after-review`
- Final item SHA-256: `55f2cd6e882b1231c8a8a54e0d823bacda546abbbce5735353e2c0874c5fb539`
- Final judge-context SHA-256: `2b9e5dee3901902e766bbaa38b4390e664d41b76b10d8bcb20f2b4c04a6d6f99`

## Scope and evidence reviewed

I independently read the current statement and proof; all six declared
dependencies; the A page `computable-reductions-and-rices-theorem` and its B
page `computable-reductions-and-rices-theorem-examples`; the batch-18 pages,
coverage notes, coverage record, and proof contract; the contract's completed
risk review; the group-g Step-7 context; both frozen judge rejections; both
exact Alpha fatal adjudications and defect rows; and the initial and recovery
Alpha repair reports.

The first frozen rejection, at context
`891e8d84e2beaa35bf459f8ce32deef4ead6d3d719abb5509a43c41d97b5a2b3`,
correctly rejected the former inference from recognizability of the language
index set to recognizability of a restricted partial-function index class.
Alpha removed that inference and supplied a direct two-stage reduction. The
second frozen rejection, at context
`2e1967f45e53c7a16d50f922276c304d9e2a7cc04711166588baded9e5aa5dcc`,
correctly observed that the new proof enumerated only binary words even though
the theorem permits an arbitrary finite input alphabet. Alpha's second repair
fixes the input alphabet of the chosen recognizer for `A` as `Sigma` and
enumerates all of `Sigma*` in length-lexicographic order.

## Independent mathematical check

The repaired proof is correct.

1. The cited acceptance results imply that `A_TM` is recognizable and
   undecidable. The cited complement criterion therefore implies that its
   binary complement is not recognizable.
2. Dovetailing the fixed recognizer for `A` over every word of its own finite
   input alphabet gives finite, increasing stages `F_s` whose union is exactly
   `A`. This is the precise point repaired after the second rejection. If the
   `A_TM` simulation never accepts, `N_x` consequently recognizes all of `A`;
   if it accepts, `N_x` freezes after admitting only one finite stage. A tie at
   the stopping stage can change which finite stage is obtained but cannot
   affect the argument.
3. Under the contrary assumption that no finite subset of `A` is in
   `mathcal P`, the uniform effective map from `x` to the code of `N_x`
   satisfies
   `x in complement(A_TM)` if and only if `code(N_x) in I_mathcalP`.
   The assumed recognizer for the index set would therefore recognize the
   nonrecognizable complement, a contradiction. Hence some finite
   `F subseteq A` lies in `mathcal P`.
4. For an arbitrary recognizable `B` containing `F`, suppose that `B` is not
   in `mathcal P`. The machine `K_x` recognizes `F` when the `A_TM` simulation
   does not accept and recognizes `F union B = B` when it does. Thus the same
   effective preimage argument would again recognize `complement(A_TM)`.
   Therefore every recognizable extension of `F` belongs to `mathcal P`.

The parameterized machines use the finite input alphabet of `A` in the first
construction and that of `B` in the second, consistently with the cited
finite-alphabet and effective-code interfaces and with the neighboring Rice
witness-machine construction. No invalid partial-function-class inference
remains. The result is only the positive-information direction, as required by
the page plan and coverage notes; it does not assert the converse effective
characterization. The proof contract faithfully records all cited interfaces,
all four substantive derivations, the finite-witness boundary, and the repaired
risk. No item, dependency, page, metadata, or contract edit is needed.

## Authoritative source verification

- Aidan Backus, *Logic*, Theorem 3.8 and Lemmas 3.9-3.10, pp. 28-29:
  <https://www.ocf.berkeley.edu/~abackus/logic.pdf>
  This gives the c.e.-set form directly: a class with a c.e. index set is
  upward closed under inclusion, and every member contains a finite member of
  the class. These are exactly the two conclusions proved locally.
- Kevin Kelly, Carnegie Mellon University, *Many-one Reduction*, “The
  Rice-Shapiro Theorem,” Lemma 6 and Proposition 7:
  <https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html>
  This verifies the reduction mechanism used here: while waiting for a halting
  signal, reveal progressively more positive information, so nonhalting yields
  the full object and halting yields a finite fragment; an index-set recognizer
  would otherwise recognize the complement of the halting set.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rice-shapiro-positive-information-direction.md`
  passed: 1 checked, 0 failing, stored `direct` strategy.
- `node tools/rendercheck.mjs items/thm-rice-shapiro-positive-information-direction.md`
  passed for YAML, delimiters, wikilinks in math, and KaTeX.
- `node tools/proof-contract.mjs research/frontier-29-batch-18.proof-contracts.json --strict --items thm-rice-shapiro-positive-information-direction`
  passed: 0 errors, 0 warnings, 1/1 checked.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-18.proof-contracts.json --fail-on-missing-quote`
  passed over the batch: all 72 quotes found and no widening candidate.
- `node tools/depcheck.mjs --quiet` exited successfully with no cycles,
  unresolved references, or draft items on published pages; it retained 375
  pre-existing advisory warnings outside this decision.
- The repository judge hash command reproduced the final item and context
  hashes recorded above.

## Decision

`accepted-after-review`. Alpha's second repair closes the confirmed alphabet
defect, and the current proof is mathematically complete, properly scoped, and
consistent with the local library contracts. The theorem and its dependencies
remain unchanged by the final adjudicator.
