# phase-2-wave-1 — Alpha group `d`, Step 3 scaffold review

This review covers batches `2` and `12`. I independently read both A/B
manifests, their coverage and notes, the assigned algebra and representation
designs, the current plan, all direct load-bearing published interfaces, and
the complete relevant source passages. I also traversed the complete current
page and item dependency closures. I did not edit either batch scaffold,
published content, the canonical plan, or a prose design.

## Verdicts

| Batch | A page | B page | Inventory | Verdict |
| ---: | --- | --- | ---: | --- |
| 2 | `finite-averaging-and-character-theory-prerequisites` | `finite-averaging-and-character-theory-prerequisites-examples` | 9 + 4 | `insufficient` |
| 12 | `galois-orbits-and-descent-of-simple-finite-group-modules` | `galois-orbits-and-descent-of-simple-finite-group-modules-examples` | 5 + 3 | `insufficient` |

The batch-local mathematics, proof order, hypotheses, conventions, item
dependencies, examples, and source dispositions are sufficient. Both pairs
are nevertheless unpublishable because their current transitive page
`requires` closures contain four B pages as suppliers. The shared defect is
outside both owned manifests and cannot be waived by a sound local proof.

## Fatal shared dependency finding

The current-plan page closure has 73 pages for each assigned A page. The
following forbidden B suppliers occur:

| Consumer | Exact shortest offending path |
| --- | --- |
| batch 2 A | `finite-averaging-and-character-theory-prerequisites -> the-group-algebra-and-representations -> the-fundamental-theorem-of-algebra -> solvability-by-radicals-and-kummer-theory -> finite-fields-and-cyclotomic-extensions-examples` |
| batch 2 A | the preceding path continues through `finite-fields-and-cyclotomic-extensions -> the-galois-correspondence-examples -> the-galois-correspondence -> algebraic-closure-embeddings-and-separability-examples -> algebraic-closure-embeddings-and-separability -> algebraic-extensions-degree-and-finite-fields-examples` |
| batch 12 A | `galois-orbits-and-descent-of-simple-finite-group-modules -> the-galois-correspondence -> algebraic-closure-embeddings-and-separability-examples -> algebraic-closure-embeddings-and-separability -> algebraic-extensions-degree-and-finite-fields-examples` |
| batch 12 A | `galois-orbits-and-descent-of-simple-finite-group-modules -> the-group-algebra-and-representations -> the-fundamental-theorem-of-algebra -> solvability-by-radicals-and-kummer-theory -> finite-fields-and-cyclotomic-extensions-examples -> finite-fields-and-cyclotomic-extensions -> the-galois-correspondence-examples` |

`research/plan-algebra-track.md` III.3 already gives the complete repair. One
authorized shared-plan writer must make these four substitutions in
`research/plan-spec.json` and then re-run closure validation:

| Consumer A page | Remove B supplier | Add A supplier |
| --- | --- | --- |
| `algebraic-closure-embeddings-and-separability` | `algebraic-extensions-degree-and-finite-fields-examples` | `algebraic-extensions-degree-and-finite-fields` |
| `the-galois-correspondence` | `algebraic-closure-embeddings-and-separability-examples` | `algebraic-closure-embeddings-and-separability` |
| `finite-fields-and-cyclotomic-extensions` | `the-galois-correspondence-examples` | `the-galois-correspondence` |
| `solvability-by-radicals-and-kummer-theory` | `finite-fields-and-cyclotomic-extensions-examples` | `finite-fields-and-cyclotomic-extensions` |

The A replacements contain the proof-bearing interfaces already used by the
consumers; this changes no item statement or item dependency. The prose
scaffold already contains the repair, so no new A/B prerequisite pair or prose
addition is needed. `research/plan-representation-theory-groups-track.md`
III.15.2 independently requires A-only page closures for its own track and
does not waive inherited algebra defects. This one repair should be routed
once to the shared plan writer; the batch 2 and batch 12 Betas should recheck
their closures afterward rather than making competing central edits.

The ordinary `validate-plan` success does not discharge this finding. Its
reported “B-page dependencies” check concerns item dependencies among pages
with item lists; it does not reject these declared page-level `requires`
edges. The assigned pages also still have empty item lists in the current plan,
as expected before splice.

## Batch 2 mathematical review

The nine A lemmas are in a valid proof order and use adequate earlier results.
The field-characteristic lemma keeps the `n > 0` and `0`-divides-no-positive-
integer conventions. Finite basis extension gives an explicit complement and
projection without infinite choice. For an idempotent, the image/kernel
decomposition gives diagonal entries `1` and `0`, so trace is the field scalar
image of the rank; the statement does not incorrectly recover an integer in
positive characteristic.

Orbit indicators give the invariant-function basis, including the empty
partition case. The normalized Hermitian form is restricted to a nonempty
finite set and its definiteness follows from the earlier finite-sum
nonnegativity criterion. The unit-circle equality proof uses the exact
identity

`sum_(i<j) |z_i-z_j|^2 = n^2 - |sum_i z_i|^2`,

including `n = 1`, and yields equality exactly when all summands agree. For a
conjugate of an average of roots of unity, the finite cyclotomic splitting
field is normal; the embedding between the generated subfields extends to the
splitting field, and its automorphism preserves exact root orders. No
algebraic-integrality premise is smuggled into this lemma. The direct-sum
kernel is the intersection of coordinate kernels, and the singleton-
conjugacy-class criterion is equivalent in both directions to commutativity.

All four B items are genuine leaves and depend only on the matching A lemmas:
the coordinate projection on `C^3`, the three conjugacy-class indicators of
`S_3`, the normalized three-point Hermitian form, and the strict unit-complex
sum witness. Their computations match the A-page conventions.

The owned 13 item roots reach 1,105 item IDs across the current published and
run manifests, with zero unresolved IDs. Direct statements were checked for
hypotheses and direction; no owned item uses `justified_by` or a load-bearing
`forward_refs` field, and no owned proof reaches a recorded-not-proved result.

## Batch 12 mathematical review

The semilinear convention is coherent: with scalar action pulled back by
`sigma^{-1}`, iterated twists satisfy
`{}^sigma({}^tau W) = {}^(sigma tau)W`, and transported representation
matrices are acted on by `sigma`. The finite-Galois fixed-point proof uses a
trace-dual basis and proves both the vector-space and algebra multiplication
claims. It therefore supplies, rather than assumes, descent of fixed orbit
sums of primitive central idempotents.

For primitivity, a nontrivial central splitting downstairs would base-change
to a nontrivial Galois-stable partition of a single orbit upstairs; the orbit
sum is consequently a primitive central idempotent, and Wedderburn–Artin gives
one simple-module class in its block. The classification theorem then matches
simple modules over the base field with Galois orbits after split scalar
extension. Twisting forces a common multiplicity, and the regular block makes
that multiplicity positive. The scaffold correctly does not claim it is one.

The B page checks both boundaries. For `C_3`, the rational degree-two matrix
diagonalizes over `Q(zeta_3)` into the two nontrivial conjugate characters. For
`Q_8`, `(1-z)/2` cuts out the Hamilton quaternion block; the rational norm
proves division and explicit matrices split it over `Q(i)`. Scalar extension
therefore yields two copies of the degree-two simple module, proving that a
Galois-stable character need not have Schur index one without importing the
later Schur-index theory.

The owned eight item roots reach 1,046 item IDs across the current published
and run manifests, with zero unresolved IDs. Every direct interface has the
needed finite-dimensionality, semisimplicity, splitting-field, finite-Galois,
and characteristic hypotheses in the correct direction. No owned item uses
`justified_by` or load-bearing `forward_refs`, and no owned proof reaches a
recorded-not-proved result.

## Source audit and dispositions

There is no `source_resolution` record in either coverage file and no dropped
source to adjudicate. All six active records serve complete relevant text and
were fetch-verified by `source-fetch-check --stamp`.

| Pair | Full treatment and exact locator | Support checked |
| --- | --- | --- |
| batch 2 | [Etingof et al., *Introduction to Representation Theory*](https://math.mit.edu/~etingof/reprbook.pdf), §§4.1–4.6, printed pp. 61–72, and Lemma 5.4.5, pp. 100–101 | averaging projection, class functions, Hermitian pairing, equality step, cyclotomic-conjugate step, and downstream character/Maschke boundaries |
| batch 2 | [Axler, *Linear Algebra Done Right*, 4e](https://linear.axler.net/LADR4e.pdf), 2.32–2.33, 6.2–6.3, 8.49–8.51 | finite complements, inner products, trace conventions |
| batch 2 | [Milne, *Fields and Galois Theory*](https://www.jmilne.org/math/CourseNotes/FT.pdf), characteristic pp. 8–9, Proposition 2.12 and Corollary 2.13 pp. 29–30, Definition 3.7 p. 37 | characteristic, embedding extension, splitting fields, normality |
| batch 2 | [Judson, *Abstract Algebra*, §14.2](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) | complete class-equation section and the `S_3` conjugacy classes |
| batch 12 | [Zheng, *Lectures on Algebra*](https://server.mcm.ac.cn/~zheng/algebra.pdf), §§3.2–3.3 pp. 117–118, Example 3.7.4(3) p. 125, Theorem 3.8.1 pp. 132–133, Proposition 4.3.2 pp. 145–146 | Wedderburn–Artin, quaternion norm, complete descent proof, orbit constituents and common multiplicity |
| batch 12 | [Wiese, *Galois Representations*](https://math.uni.lu/wiese/notes/GalRep.pdf), Definition 2.2.7–Corollary 2.2.12 pp. 28–30, §2.5 pp. 37–41, Exercise 14 p. 70 | twist convention, equal multiplicities, realizability/Schur-index boundary, quaternion check |

Each harvested result has an included, inline, already-published, deferred, or
out-of-scope disposition. The 24 declined rows were independently compared
with the source text and owned proof routes. All now stand: deferred results
have existing later destinations, and the out-of-scope results are used by no
owned statement or dependency. Batch 12's `12/40` coverage-yield warning is
therefore reviewed and nonfatal; it reflects deliberate deferral of the wider
Schur-index theory, not a lost prerequisite.

## Closure, Foundations boundary, and frontier bookkeeping

Whole-run manifest traversal found no missing item ID, cycle, forward
dependency, or inadequate direct interface among the 434 proposed items. The
current-plan validator also passed its Foundations set-theory boundary check;
neither assigned page is in Foundations, and their audited item closures do
not use the deferred Set Theory catalogue or its recorded items.

Neither batch 2 nor batch 12 has a page or item edge to a different batch in
this run, whether declared in `requires`, `deps`, `justified_by`, or
`forward_refs`, or implicitly used by its proof routes. Their consumer-owned
frontier inputs are consequently the required empty arrays. The unified
frontier ledger was refreshed; at this review point it lists batches `2` and
`12` as reviewed with no orphaned review from them. Unreviewed other batches
remain work for their owners and do not alter these two findings.

## Scope and validation receipt

- `scope-decisions refresh --run phase-2-wave-1 --group d` found 24 declines
  and initially 24 pending decisions. After review, all 24 are `stands`;
  `scope-decisions check` reports 24 current declines and 0 errors.
- `coverage-checklist --require-destination` reports 41 harvested results,
  0 errors, and 0 warnings for batch 2; and 40 harvested results, 0 errors,
  and the reviewed `12/40` low-yield warning for batch 12.
- `source-fetch-check --stamp` reports 6/6 sources fetch-verified and 6/6
  resolved, with 0 documented drops.
- The corrected `content-policy --manifest-only` invocation reports 21 scoped
  items, 0 errors, and 0 warnings.
- Whole-run `manifest-deps` reports 434 items, 0 normalized, and 0 errors.
- Whole-run `validate-plan` exits successfully: 892 pages have item lists and
  719 planned pages do not yet have them. It emits 3,565 informational
  redundant-prerequisite notices. Its page-level B-supplier blind spot is the
  fatal manual finding above.
- Whole-repository `extcheck` exits successfully and reports that every
  recorded-not-proved statement is a cited remark with no proof and every
  consequence is marked. Its 63 `unproved-on-published` notices are existing
  repository-wide records; none is reachable from an owned proof.
- `frontier-dependency-ledger refresh --run phase-2-wave-1` completes with no
  orphaned review; the owned batch inputs are present and empty.
- JSON parsing of the scope and owned frontier inputs passed before this report
  was written.

The required disposition is therefore `insufficient` for both pairs until the
single shared plan repair lands. After that repair, rerun page closure,
whole-run plan validation, both owned manifest checks, and this Step-3 review;
no additional mathematical or source repair is currently indicated.
