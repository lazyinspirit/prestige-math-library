# Step 3a scope review — Prikry forcing and Gitik's singular-cardinal model

Run: `phase-2-next-18`  
A page: `prikry-forcing-and-gitiks-singular-cardinal-model`  
B page: `prikry-forcing-and-gitiks-singular-cardinal-model-examples`

## Decision

**Sufficient.** The planned pair adequately covers its intended subject and
needs no enrichment or merger.

## Evidence

- The 20-item A page realizes every part of the controlling SET-26 prose
  design. Its ordinary-Prikry block defines the forcing and direct-extension
  order, supplies normal-measure finite-set homogeneity and the Prikry
  property, constructs the generic cofinal sequence, proves no new bounded
  subsets and cardinal preservation, distinguishes the actual
  `kappa-plus`-cc from ccc, and keeps Magidor/extender forcing as orientation.
- The Gitik block has the necessary subject-level spine rather than the vague
  phrase "iterated Prikry-style forcing": the strongly-compact filter system
  and class forcing; restriction, amalgamation and set-sized Prikry analysis;
  the expanded proper-class forcing theorem; `ZF` minus Power Set plus
  Collection in the intermediate extension; countability there; the supported
  symmetric model and approximation/homogenization mechanisms; explicit
  `ZF` axiom verification; cofinality omega for every nonzero limit ordinal;
  singularity of every uncountable cardinal; and the formal relative-
  consistency conclusion from a proper class of strongly compact cardinals.
  This is exactly the strong result needed to retire
  `rem-gitik-all-uncountable-cardinals-singular`, for which the retirement
  ledger names this A page as the candidate proof page.
- The three-item B page meets the SET-23--26 companion contract. It works out
  compatible and incompatible stems and the dense length/height requirements
  producing the Prikry sequence, gives the bounded-name direct-extension
  fusion, and refutes the tempting ccc claim by the singleton-stem antichain.
  A second theory treatment of Gitik's model is not required of a B page.
- The coverage has three fetch-verified, complementary sources. I reread the
  complete ordinary-Prikry argument in [Karagila, section
  9.2](https://karagila.org/files/Forcing-2023.pdf) (Definition 9.9, Theorem
  9.10 and Lemmas 9.11--9.12); the [complete 21-page Schuerz
  treatment](https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf),
  including its class forcing, intermediate extension and Power Set argument;
  and [Dimitriou, Chapter 2 section
  5.1](https://d-nb.info/1020630655/34) through Corollary 2.41, including the
  full bounded factorization/Prikry analysis and interval singularization.
  These sources support the chosen division of topics and confirm that the
  scaffold includes the mechanisms separating ordinary Prikry forcing from
  the Gitik construction.
- Dimitriou's later almost-Ramsey/Rowbottom residue, Chang-conjecture material,
  and a general survey of Magidor or extender forcing are properly outside
  this pair. Karagila's semiproper/not-proper observation and a generic-
  sequence characterization would be useful extensions, but they are not
  needed for the designed preservation package or the recorded-result
  retirement role.
- The current plan agrees on IDs, order, category, companion and the two page
  prerequisites. The drift review finds the normal-measure, forcing-truth,
  formal-transfer and symmetric-model interfaces in their backward closure,
  with no forbidden dependency on the Recorded catalogue. The only current-run
  page edge, to `symmetric-collapse-and-ultrafilter-free-models`, is explicitly
  methodological: all Gitik-specific support work remains local.
- The coverage file retains several pre-owner Gitik proof obligations and its
  old `complete-with-escalations` label. Current Step-1 owner receipts record
  all eight affected items as `ready` after expanding their strategies. That
  mismatch merits attention during the item audit, but it neither removes an
  intended definition/result/example nor creates a Step-3a scope omission. No
  current Step-3a owner receipt exists for this A page.

## Checks

- `coverage-checklist --require-destination` for batch 9: 2 pages, 36
  harvested results, 0 errors or warnings.
- `manifest-deps` for the run: 533 items, 0 errors.
- `content-policy --manifest-only` for the run: 533 scoped items, 0 errors or
  warnings.
- `validate-plan research/plan-spec.json`: success.

This is a scope determination only. It does not approve individual definitions
or proofs and does not replace the Step 3b mathematical audit.
