# Step 3a scope review — Symmetric collapse and ultrafilter-free models

Run: `phase-2-next-18`  
A page: `symmetric-collapse-and-ultrafilter-free-models`  
B page: `symmetric-collapse-and-ultrafilter-free-models-examples`  
Role: scope review only; this report makes no item-level proof judgment.

## Decision

**Sufficient.** The planned pair adequately covers the intended SET-20 subject
and needs no enrichment or merger.

## Scope evidence

- The current manifest contains all of the binding prose inventory. Its 28 A
  items specify the Feferman--Levy collapse, bounded-layer Boolean and real-name
  analysis, countability of each real layer, the uncountable union, the
  `omega_1=aleph_omega^V` and cofinality consequences, and semantic/formal
  relative-consistency interfaces. They separately specify Feferman's
  finite-parameter model, the required tail-complement correction, principality
  on `P(omega)`, failure of UFL/BPI, and Blass's parameter-HOD construction,
  arbitrary-set theorem, and consistency conclusion.
- The six B items meet the companion contract: concrete collapse layers, the two
  ZF false statements exposed by the model, the infinite tail flip, the warning
  that finite modification cannot defeat a free ultrafilter, and Blass's paired
  finite-modification/Russell-set witness. These are appropriate examples and
  failure modes rather than a second theory page.
- The page has the designed SET-19/SET-15 prerequisites and does not reach the
  recorded-results catalogue. The later SET-21 page consumes
  `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` for strict
  placement; SET-24 and SET-26 retain the designed page-level prerequisite.
  The Blass arbitrary-set result is also the exact retirement endpoint for
  `rem-blass-model-without-ultrafilters`. No B item is a dependency target, and
  the pair has no current-run cross-batch item input.
- The current plan agrees on page ids, titles, category, companion relation,
  order, and page prerequisites. There is no current Step-3a owner scope receipt.

## Source coverage and uncertainty

I checked the complete relevant arguments in Jech, *The Axiom of Choice*,
Theorem 10.6, Lemmas 10.7--10.9 and Problems 2--3 (printed pp. 142--144,
148); Feferman, *Some applications of the notions of forcing and generic
sets*, the finite-parameter construction, Theorems 4.9 and 4.12 (printed
pp. 336--344); Tachtsis, *On the Existence of Free Ultrafilters on omega and on
Russell-sets in ZF*, Theorem 4 (pp. 5--7); and Hayut--Karagila, *Spectra of
uniformity*, Proposition 2.3 and Corollary 2.4 (printed pp. 288--289). Those
sources cover the two principal branches and confirm that the finite-bit-flip
warning belongs in the companion page.

One source risk remains and must not be hidden. The original three-page Blass
paper was not recovered, and Tachtsis explicitly cites Blass rather than proving
the arbitrary-set ultrafilter theorem. The prose design and the original batch
note therefore call that endpoint blocked. The newer coverage record documents
an owner-approved source drop, and the three current owner readiness records
mark the Blass theorem, its finite formalization, and its consistency corollary
ready after adding a composite route: Hayut--Karagila's least-ordinal/measurable
reduction plus local `HOD(S)=W` and well-ordered-union rank inductions. That is
not a missing scope topic: all required definitions and results are planned.
It is, however, a nontrivial proof/source obligation for Step 3b, especially the
claims that `HOD(S)=W` and that set forcing over `L` supplies the required
no-inner-measurable conclusion. This scope decision does not certify them.

The three published retirement targets also contain the known defects recorded
by the batch audit: `rem-feferman-levy-model` obscures bounded initial-layer
supports; `rem-feferman-no-free-ultrafilter-in-zf` needs Feferman's cofinite-tail
rather than finite-bit argument; and `rem-blass-model-without-ultrafilters` is
method-free and links no readable primary proof. The planned A items address all
three defects without using the published remarks as suppliers.

## Checks

- `manifest-deps` on batch 7: 42 items, 0 errors.
- `content-policy --manifest-only` on batch 7: 42 items, 0 errors or warnings.
- `coverage-checklist` on batch 7: 2 pages, 34 harvested results, 0 errors or
  warnings.
- `source-fetch-check` on batch 7: 6/7 sources fetch-verified and 7/7 resolved,
  with the Blass paper recorded as the one documented drop.
- `validate-plan research/plan-spec.json --repo .`: success; declared order is
  acyclic and consistent.

This is a scope determination only. It does not approve individual arguments or
replace the Step 3b mathematical audit.
