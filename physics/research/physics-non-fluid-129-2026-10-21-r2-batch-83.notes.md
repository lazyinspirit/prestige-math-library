# Batch 83 authoring and source notes

## Plan and inventory

Compared the complete design section in
research/plan-quantum-field-theory-frontier-expansion-track.md at L1786
with the batch-83 page pair in research/plan-spec.json. No conflict was
found: the A/B IDs, order, titles, category, library, companion relation, and
qft-mc02 requirement agree. The design supplies the detailed item inventory
because the pre-authoring plan-spec entry has empty items arrays:

- A: def-qftx-joint-spectrum-input, thm-qftx-spectral-tube-holomorphy,
  def-qftx-cpt-spin-statistics-interface.
- B: ex-qftx-positive-frequency-tube.

The batch dependency-level record sets batch 83 to level 0 with no in-run
batch prerequisites. The assigned item levels are 0, 1, 2, and 2 in the order
above. The A page keeps the design's warning that an assumed joint PVM is
additional data; the B page has only the positive-frequency example.

## Supplier inspection and interface

Read the current qft-mc02 page and its six items, including the complete
Statement and Proof of thm-qft-tempered-field-reconstruction. That theorem's
conditional spectrum clause establishes only Fourier support for each
translation matrix coefficient after the listed moment identities. Its
Statement expressly says it does not assert joint self-adjoint energy-momentum
generators or a joint spectral measure. The new definition therefore assumes a
joint PVM supported in the closed forward cone; it does not derive one from
qft-mc02. The page requirement remains an external prerequisite context.

The new definition also uses the published local def-qft-poincare-test-action
convention p·a=p^0a^0−p⃗·a⃗, the imported
def-projection-valued-measure, and thm-bounded-borel-pvm-integral. The last
supplier assumes Countable Choice, so the assumption is explicit in the
definition, theorem, and B example, and def-countable-choice is in each
applicable dependency chain. Its full Statement and Proof were inspected. The
holomorphy convention is the total complex-linear derivative from the current
local mathematics item def-cm-complex-phase-domains-and-holomorphic-maps;
the theorem proves that differentiability directly rather than relying on a
diagram, Hartogs, or an unlisted analytic continuation theorem.

The discrete-symmetry item is only a proof-interface definition. It fixes the
field types, spin-cover covariance data, common domain, vacuum, temperedness,
joint spectrum, locality/weak-locality data, tube sign, and required
continuation/uniqueness and conclusion work. It makes no general CPT or
spin-statistics claim. The free scalar and Dirac examples remain constructed
models and are not used as proof suppliers.

## Full-text reading and harvested results

1. Christopher J. Fewster and Kasia Rejzner, *Algebraic Quantum Field Theory—an
   introduction*, arXiv:1904.04051v2,
   https://arxiv.org/pdf/1904.04051. The complete 47-page PDF was opened and
   inspected at §5.1, printed pp. 24–25. The spectrum condition, Definition
   24, translation holomorphy, and the bounded-insertion part of the
   Theorem 26 proof support the joint-input definition and tube theorem. The
   proof's edge-of-the-wedge invocation supports recording that as a separate
   obligation; Theorem 26 is Reeh–Schlieder, not a CPT or spin-statistics
   theorem. Harvested item results are included for the A definition, A
   theorem, A proof-interface definition, and B exponential example. The
   local proofs supply the complete target argument.

2. Jens Mund, *General Aspects of Relativistic Quantum Field Theory*,
   incomplete lecture notes, DF-UFJF (2012),
   https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf. The complete 39-page PDF
   was opened and inspected at §1.3, PDF pp. 8–9, and §2.1, Theorems 2.6 and
   2.8, PDF pp. 15–19. Section 1.3 states the joint PVM and forward-cone
   convention. Theorem 2.8 states Fourier-support tube continuation in the
   backward tube for its transform convention, but its proof refers to
   Streater–Wightman and Reed–Simon rather than supplying the proof. The local
   theorem fixes the opposite exponential convention and proves bounded
   operator holomorphy completely. Theorem 2.6's hypotheses were compared
   with qft-mc02; its matrix-coefficient conclusion was not promoted to a
   joint PVM. Harvested results are included for the A definition, theorem,
   proof-interface definition, and B exponential example.

3. Luis Álvarez-Gaumé and Miguel A. Vázquez-Mozo, *General properties of
   noncommutative field theories*, arXiv:hep-th/0305093,
   https://arxiv.org/pdf/hep-th/0305093. The complete
   40-page PDF was opened and inspected at §4, PDF pp. 12–19. Its scalar CPT
   proof uses adapted noncommutative axioms with O(1,1)×SO(2) symmetry;
   §4.3 warns that spin-statistics has additional representation and
   microcausality constraints. It is used only as a scoped comparison of the
   analytic proof route and its limitations. Both harvested results for the
   A proof-interface definition are included, with this scope stated.

An exploratory author-hosted Schottenloher chapter URL returned 404 and was
not retained as a source. The initial source-fetch-check for the CERN route to
the Alvarez-Gaumé/Vázquez-Mozo paper returned only 1556 HTML text characters,
below the checker floor. A targeted search found the official arXiv full-text
route for the same paper. The complete 40-page arXiv PDF was inspected at the
same §4 locators; the unsuccessful CERN route, search, alternate URL, and per-
item disposition are recorded in the batch coverage file. No mathematical
result was dropped and no claim relies on the failed route.

## Cross-batch and readiness disposition

The only external page prerequisite is published qft-mc02; it is not an
in-run batch edge and is recorded here as context rather than as a
cross-batch-review row. The page companion edge and all authored item edges
are within batch 83. Thus
research/physics-non-fluid-129-2026-10-21-r2-batch-83.cross-batch-dependencies.json
is the required empty array.

## Scoped verification and readiness

- proof-contract.mjs --strict: 4/4 items, 0 errors, 0 warnings.
- proof-layout.mjs: all 4 changed items, 9 proof steps, 0 defects.
- precheck.mts through the repository TSX wrapper: both proof-bearing items pass; 2 checked, 0 failing. Definitions are not applicable.
- rendercheck.mjs: 6 item/page files pass, including KaTeX and YAML parsing.
- content-policy.mjs: 4 assigned items, 0 errors, 0 warnings.
- Focused depcheck.mjs: 4 assigned items pass; prerequisite cycle checks cover 984 items and 277 pages.
- manifest-deps.mjs: 4 items, no missing or normalized dependency arrays.
- coverage-checklist.mjs: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- source-fetch-check.mjs: 5/6 routes fetch-stamped; all 6/6 resolved, with the failed CERN route documented as one source route drop and the same paper recovered through its official arXiv PDF.
- To keep the positive-frequency example inside the joint input while retaining an invariant cyclic vacuum, B uses a two-dimensional representation with a zero mode and one nonzero mode. The decay and growth claim is restricted to the nonzero eigenspace; the full operator norm stays at 1.
- Scoped dependency-level recomputation over the two batch-83 pages found no errors or cycles: levels are 0 for the joint-spectrum definition, 1 for the tube theorem, and 2 for the proof-interface definition and B example. Batch 83 has no in-run batch prerequisites, so its computed batch level is 0.
- The run-wide batch-dependency-levels.mjs check reports the shared record stale after the assigned manifest update. Its recorded batch-83 value remains level 0 with requires: []; the shared run-wide record was left to the owner.
- The full-run item-level audit is blocked by unfinished inventories outside this assignment: 204 empty page inventories and 9 bare-ID placeholder rows. The assigned pages and their four item levels pass the scoped check.
- loadStep1Record and step1Decision report current, hash-valid ready records for all four assigned items. Each direct dependency list matches its carrier and manifest; no unresolved mathematical prerequisite remains.

Readiness records describe completed Step 1 authoring and do not claim independent approval.
