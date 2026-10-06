# Batch 20 scaffold notes

Run `frontier-40-geometry-braids-rep-27`, batch 20, pair orders 893/894,
category `algebraic-geometry`:

- A page `highest-weights-and-rational-representations-of-split-reductive-groups` (33 items);
- B page `highest-weights-and-rational-representations-of-split-reductive-groups-examples` (2 items).

Manifest: `research/frontier-40-geometry-braids-rep-27-batch-20.pages.json`.
Coverage: `research/frontier-40-geometry-braids-rep-27-batch-20.coverage.json`.
Consumer dependency input: `research/frontier-40-geometry-braids-rep-27-batch-20.cross-batch-dependencies.json`.

Outcome: 35 items recorded ready at the scaffold level (33 A + 2 B). No item
Markdown is authored here; Step 3 owns proof writing. The design's three A IDs
and two B IDs are preserved byte-identically, and the design's source gate is
closed over the ranges actually read (Milne Ch. 22 and Steinberg Ch. 12),
with the one source limitation recorded in section 3.

## 1. Inputs read before construction

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`.
- Binding owner direction `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27 selected pairs; lower-order in-run dependencies permitted; publication
  and pushing are owner actions). Batch 20 is one of the selected geometry
  pairs; the representation-theory deferral in the direction concerns
  `outer-products-skew-specht-modules-and-littlewood-richardson` only and does
  not touch AG-GRP-5.
- Design `research/plan-algebraic-geometry-expansion-track.md`, section
  **AG-GRP-5** at line 40 of the canonical future-page table, with the prose row
  "AG-GRP-5 — Highest weights and rational representations" in "Actions,
  quotients, and reductive structure".
- Plan rows `research/plan-spec.json` orders 893/894 (both with empty item
  lists before this batch).
- Precedents: batch-13, batch-14, batch-15, batch-18 and batch-19 manifests and
  notes, the batch-19 coverage and cross-batch input, and the published page
  front matter of the suppliers (affine group schemes, Lie algebras and
  infinitesimal group schemes, actions/quotients, unipotent/solvable groups,
  split reductive groups, and the published Lie-algebra and exterior-power
  items of the differential-geometry and linear-algebra tracks).

## 2. Design versus plan

The plan row and the design agree on page id, order, kind, category, companion
and the three-entry `requires` list. No design/plan conflict to record.
`manifest-integrity --run` reports "no scope drift". The design's warning not to
confuse group representations with Lie algebra representations is honoured:
the classification theorem is proved for rational representations of a split
reductive group, and the Lie-algebra Weyl theorem is not imported as a
substitute; the published complex highest-weight page is used nowhere.

The design's A inventory is preserved verbatim:

- `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups`,
- `thm-complete-reducibility-of-rational-modules-in-characteristic-zero`,
- `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic`.

The design's B inventory is preserved verbatim:

- `ex-fundamental-sl2-modules-in-characteristic-p`,
- `cex-rational-modules-need-not-be-semisimple-in-characteristic-p`.

The design's requirements are honoured: only split reductive groups are treated
on the classification side; the arbitrary-characteristic simple-module
classification is proved for all characteristics; complete reducibility is
proved only in characteristic zero (Milne 22.41-22.42); and the external proof
formerly hidden in Lemma 22.24 is isolated as
`lem-primitive-vectors-from-standard-maximal-parabolics` +
`lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples`
with a complete local proof from Chevalley's line-stabilizer theorem.

Local prerequisites added (30 A items, all `local_addition: true`):
`def-weight-and-dominant-weight-of-a-rational-representation`,
`def-primitive-vector-of-a-rational-representation`,
`lem-root-group-expansion-of-a-weight-vector`,
`lem-normalizer-action-permutes-weight-spaces`,
`prop-module-generated-by-a-primitive-vector`,
`thm-simple-rational-representations-have-a-highest-weight`,
`lem-simple-rational-representations-are-finite-dimensional`,
`thm-simple-modules-with-equal-highest-weight-are-isomorphic`,
`def-induced-coordinate-module-e-lambda`,
`prop-primitive-vectors-of-the-induced-coordinate-module`,
`lem-power-extension-over-a-normal-affine-domain`,
`lem-top-exterior-power-detects-subspace-stabilizers`,
`thm-chevalley-line-stabilizer-of-an-algebraic-subgroup`,
`lem-primitive-vectors-from-standard-maximal-parabolics`,
`lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples`,
`lem-tensor-products-of-primitive-vectors`,
`lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights`,
`def-contragredient-rational-representation`,
`lem-centre-central-characters-and-descent-along-central-isogenies`,
`lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights`,
`lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups`,
`lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces`,
`lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero`,
`lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple`,
`lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate`,
`lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters`,
`lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules`,
`lem-complete-reducibility-reduces-to-codimension-one-simple-submodules`,
`lem-semisimplicity-of-rational-representations-descends-along-field-extensions`,
`thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive`.

These are exactly the interfaces the Milne proofs consume: the weight
decomposition and primitive-vector theory (22.13-22.19), the induced coordinate
module and the power-extension lemma (22.21-22.23), Chevalley's line stabilizer
(4.27-4.28), the Mostow/Steinberg argument for fundamental weights (22.24), the
product and central-isogeny reduction for general reductive groups (19.25,
22.11-22.12, 22.20), and the characteristic-zero Casimir argument with its Lie
interfaces (10.30-10.34, 22.39-22.42). Batch 19 already supplies the root
datum, root subgroups, Weyl group, Bruhat big cell, parabolics and standard
Levi subgroups; batch 18 supplies unipotent/diagonalizable/trigonalizable and
multiplicative-type representation facts; batch 13 supplies the Hopf/comodule
dictionary and finite-dimensional subcomodules; batch 14 supplies the Lie
algebra of a group scheme, the adjoint representation and Cartier smoothness in
characteristic zero; batch 15 supplies scheme-theoretic stabilizers and finite
locally free quotients.

## 3. Sources read, and the design's source gate

All coverage sources are fetch-stamped by `tools/source-fetch-check.mjs --stamp`
(4/4 fetch-verified; 2/2 distinct URLs live by `url-sweep.mjs`):

1. J. S. Milne, *Algebraic Groups* (corrected 2022 printing). URL
   `https://www.jmilne.org/math/Books/iAG2022.pdf`; 4,838,013 bytes
   (`f2ddd8fa4d263085`), 659 pp.
   Read at the ranges recorded in the coverage locator: Ch. 4 (4.15-4.19,
   4.26-4.30), Ch. 10 (10.30-10.34), Ch. 12 (12.30, 12.52-12.56), Ch. 19
   (19.10-19.25), Ch. 21 (21.7-21.9, 21.48-21.51) and Ch. 22 (22.1-22.47,
   i.e. sections 22a-22c). The exact results read are the 43 harvest rows for
   this source in the coverage file.
2. Robert Steinberg, *Lectures on Chevalley Groups* (Yale University, 1967;
   notes prepared by J. Faulkner and R. Wilson). URL
   `https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf`; 9,127,447 bytes
   (`5943b5571ab9815c`), 284 pp. Read: Ch. 12 (Representations), scan pp. 209-225: Lemma 70, Lemma 71,
   Lemma 72, Theorem 39(a)-(e) including both existence proofs (the lattice /
   reduction-mod-p proof and the intrinsic Mostow proof via Chevalley's
   Lemma 75), Lemmas 73-77, Theorems 40-42, the characteristic-zero complete
   reducibility paragraph on p. 225, and the characteristic-p paragraph after
   Theorem 39(e). An earlier attempt at the Melbourne mirror
   (`http://www.ms.unimelb.edu.au/~ram/Resources/YaleNotes.pdf`, redirected to
   `https://ms.unimelb.edu.au/...`) returned HTTP 403 from a Cloudflare
   challenge; the Arun Ram mirror was reachable and is the recorded source.

The design recorded this pair as source-gated on "Steinberg's exact lemma and
an independent treatment". Both halves are now closed:

- Steinberg's exact input is read: Ch. 12 contains the Mostow proof (Lemma 75 +
  the paragraph "We are indebted to G. D. Mostow for the proof just given",
  scan p. 217) that Milne 22.24 cites. The local packet re-proves the same step
  from Chevalley's line-stabilizer theorem, whose Milne proof (4.27-4.28) is
  also complete in the primary source, and records Steinberg's independent
  proof of Lemma 75.
- The independent treatment of the classification is Steinberg Ch. 12
  (Chevalley groups, algebraically closed field first, then extension to
  infinite fields by density, scan p. 220) versus Milne Ch. 22 (split reductive
  groups over an arbitrary field, via E(lambda) and the product/central-isogeny
  reduction). Steinberg's *first* proof of 39(e) (lattice and reduction mod p)
  is a different argument from Milne's, so the two treatments are independent
  in the strong sense, not merely two presentations of the same computation.
- The characteristic-zero complete-reducibility statement has Milne's Casimir
  proof (22.41-22.42, local) and, independently, Steinberg's compact-form
  averaging sketch on scan p. 225, which is recorded in the strategy of
  `thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive` as a
  comparison route (the local proof does not depend on compact real forms).

Residual limitations, recorded honestly (not escalated as a source failure):

- Steinberg's Ch. 12 is written for Chevalley groups over an algebraically
  closed field, with the passage to infinite fields via Zariski density and a
  universal-cover argument (scan pp. 219-220). It does not by itself cover
  split reductive groups with a nonsemisimple centre; that part of the scope is
  supplied by Milne 19.25 and 22.20 and is localised in
  `lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights`
  and `lem-centre-central-characters-and-descent-along-central-isogenies`.
- Milne 22.8 equation (139) asserts that every dominant character of a split
  reductive group admits a decomposition lambda = sum m_i omega_i + lambda_0
  with sum m_i omega_i in X and lambda_0 in X_0. The scaffold found a
  counterexample in a legitimate reductive root datum:
  X = {(p,q) in Z^2 : p congruent to q mod 2} (realised by
  (SL_2 x G_m)/mu_2), alpha = 2 omega, X_0 = Z(0,2). Then
  lambda = omega + delta is dominant in X (pairing 1 with alpha^vee) but
  m omega is in X only for even m, while lambda_0 = lambda - m omega lies in
  X_0 only for m = 1, so no decomposition exists. The local packet therefore
  does **not** use (139); the general existence proof follows Milne's own
  22.20 route through Z(G)^0 x G_der and the central isogeny, where the torus
  factor carries the central part. This is recorded as a source limitation in
  the coverage file (row "22.8 equation (139)") and not as a library defect.
- Milne Example 22.33's SL_2 simplicity statement for m < p is cited to
  Springer 1977, Ch. 3, which was not read; the pair therefore does not claim
  the general simplicity of S^m(k^2) for m < p. The B-page example only uses
  facts proved locally from the classification plus the explicit two-dimensional
  Frobenius-twist submodule of S^p(k^2).

## 4. Dependency structure and readiness

Dependency levels were recomputed with `tools/item-dependency-levels.mjs`
after every dependency change and written into all 35 items. The minimum level
is 5 (`def-weight-and-dominant-weight-of-a-rational-representation`), the
maximum is 38 on the A page
(`thm-complete-reducibility-of-rational-modules-in-characteristic-zero`) and 39
on the B page (`cex-rational-modules-need-not-be-semisimple-in-characteristic-p`),
through the in-run chain 13/14/15/18/19 and the char-0 Lie block. No cycle
exists in the batch; `item-dependency-levels.mjs check --run` names no batch-20
item.

Item construction order follows the levels: weights and primitive vectors;
root-group expansion and normalizer action; generated modules and highest
weights; finite-dimensionality; uniqueness; the induced coordinate module and
its primitive vectors; the power-extension lemma; Chevalley's line stabilizer;
maximal-parabolic primitive vectors; fundamental-weight multiples; tensor
products; the semisimple existence lemma; the contragredient; central
characters and central-isogeny descent; the product and reductive existence
lemmas; the classification theorem; the characteristic-zero Lie interfaces
(stabilizers, ideals and normal subgroups, semisimplicity of Lie(G), trace
forms, perfectness); the Casimir endomorphism; the codimension-one reduction;
descent of semisimplicity; semisimple linear reductivity; the complete
reducibility theorem; and the positive-characteristic remark. The B page then
applies the classification to SL_2 and exhibits the nonsemisimple symmetric
power.

Each readiness record lists the examined dependency IDs and a reason naming the
source route. No item was escalated and no source drop was needed.

Axiom of Choice inventory: 22 of the 33 A items and both B items declare
"Assume the Axiom of Choice inherited from the named suppliers" and carry
`def-axiom-of-choice`; these are exactly the non-definition, non-remark items
whose transitive closure reaches an in-run or published supplier that declares
Choice (the geometric suppliers of batches 13/15/18/19 and the published
`thm-regular-local-rings-are-normal`). Definitions never declare Choice. The
choice-free A items are
`def-weight-and-dominant-weight-of-a-rational-representation`,
`def-primitive-vector-of-a-rational-representation`,
`lem-simple-rational-representations-are-finite-dimensional`,
`def-induced-coordinate-module-e-lambda`,
`lem-power-extension-over-a-normal-affine-domain`,
`lem-top-exterior-power-detects-subspace-stabilizers`,
`def-contragredient-rational-representation`,
`lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate`,
`lem-complete-reducibility-reduces-to-codimension-one-simple-submodules`,
`lem-semisimplicity-of-rational-representations-descends-along-field-extensions`,
and the remark. The remark links to the B-page counterexample through
`forward_refs`.

## 5. Cross-batch dependencies

`research/frontier-40-geometry-braids-rep-27-batch-20.cross-batch-dependencies.json`
contains 111 consumer-owned rows, all status `open`: two page rows (the A page
requires the in-run pages of batches 13 and 19; the published `groups-of-multiplicative-type-and-arithmetic-tori`
and the published affine and root-system infrastructure need no in-run edge)
and 109 item rows (21 into batch 13, 8 into batch 14, 4 into batch 15, 18 into
batch 18, 58 into batch 19).
`frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
reports "refreshed and deduplicated"; every consumer row is owned by batch 20.
Batches 13, 14, 15, 18 and 19 must be authored and certified before this
page's Step-3 closure.

## 6. Checks actually run and their results

- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-20.pages.json`
  -> `35 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  -> the only four errors are the empty scaffold inventories of the two
  out-of-scope units `deformation-theory-of-schemes-and-obstruction-spaces`
  (batch 24) and `higher-dimensional-resolution-of-singularities` (batch 26);
  no error names a batch-20 item, and no cycle is reported.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-20.coverage.json --require-destination`
  -> `2 page(s), 67 harvested result(s), 0 error(s), 1 warning(s)`. The warning
  is `coverage-low-yield` on the examples page (3/10 harvested results
  scaffolded), expected for a two-item examples page; the declines are the
  recorded out-of-scope rows.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` -> `4/4 source(s)
  fetch-verified (4 newly stamped)`; check mode -> `4/4 source(s) fetch-verified`,
  `4/4 resolved`.
- `node tools/url-sweep.mjs --coverage ... --out ...` -> `2/2 live; 0 failed;
  0 blocking`.
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json`
  (whole run) -> `801 scoped item(s), 0 error(s), 0 warning(s)`. Run against the
  batch-20 manifest alone the same checker reports 109
  `batch-dependency-missing` rows, all of the approved in-run class (suppliers
  scaffolded in batches 13/14/15/18/19 but not yet authored); this is the
  expected scaffold-time state recorded by batches 14-19 and resolves when the
  suppliers are authored. One early whole-run error
  (`batch-b-leaf-target`: the SL_2 example depended on a B-page item of batch
  19) was repaired during construction; see section 8.
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27`
  -> `54 page(s) owed, 54 in the manifests; no scope drift`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> OK; the declared
  page order is acyclic and consistent.
- `node tools/extcheck.mjs` (repo-wide) -> OK; only pre-existing
  `unproved-on-published` warnings on unrelated pages.
- `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27`
  -> **zero** batch-20 rows in the work list: all 35 readiness records are
  present and current. Run-wide counts move while other units record decisions;
  the observed run-wide state was `items 801, ready 800, closed false, work 5`,
  all five rows outside batch 20 (owner-held items and the empty inventories of
  batches 24 and 26).

## 7. Published-material observations

The published items consumed by this batch were read at their statements and
recorded uses: `def-algebraic-dual-and-linear-functional`,
`def-integral-closure-and-integrally-closed-domain`,
`def-kth-exterior-power-by-quotient`, `def-kth-exterior-power-of-a-linear-map`,
`cor-dimension-of-the-kth-exterior-power`,
`cor-the-top-exterior-power-acts-by-the-determinant`,
`thm-universal-property-and-uniqueness-of-exterior-powers`,
`thm-cartans-solvability-criterion`,
`prop-trace-forms-are-symmetric-and-invariant`,
`lem-orthogonal-complements-under-invariant-forms-are-ideals`,
`prop-ideals-and-quotients-of-semisimple-lie-algebras`,
`def-trace-form-of-a-finite-dimensional-representation`,
`def-radical-of-a-finite-dimensional-lie-algebra`,
`def-casimir-operator-relative-to-an-invariant-form`,
`lem-the-casimir-operator-is-basis-independent-and-intertwining`,
`cor-schurs-lemma-for-irreducible-lie-algebra-representations`,
`def-group-of-multiplicative-type-and-torus`,
`thm-multiplicative-type-groups-and-galois-character-modules`,
`lem-diagonalizable-character-antiequivalence`,
`def-smooth-morphism-schemes`, `thm-regular-local-rings-are-normal`,
`def-affine-scheme`, `thm-global-sections-affine-scheme` and
`thm-gauss-jordan-elimination-produces-reduced-row-echelon-form`.
Their statements match the recorded uses, including the algebraically closed
hypothesis of the Lie Schur lemma (handled by the descent lemma) and the
characteristic-zero hypotheses of the Cartan and Casimir items. No published
item was found defective in the consumed interfaces. The published item
`def-fundamental-weights` is stated for Euclidean crystallographic root
systems; the lattice version needed here is defined locally in
`def-weight-and-dominant-weight-of-a-rational-representation` through the
abstract root datum of batch 19, and the published Euclidean item is used only
as background, not as a dependency.

## 8. Repairs made during construction

- The first whole-run `content-policy` pass reported one error: the B-page
  example `ex-fundamental-sl2-modules-in-characteristic-p` depended on the
  batch-19 B-page item `ex-root-groups-and-bruhat-cells-for-sl2`, which the
  schema forbids for a B-page supplier. The dependency and its wikilink were
  removed; the example now depends only on the batch-19 A-page items
  `def-root-datum-of-a-split-reductive-group` and
  `lem-sl2-structure-and-root-coordinates`, and the whole-run check is clean.
- Milne 22.8 equation (139) was found false for a general reductive root datum
  (counterexample in section 3). The scaffold's existence route was rewritten
  to follow Milne 22.20's product/central-isogeny argument literarily, so no
  item depends on (139); the limitation is recorded in the coverage file.
  Dependency levels and readiness records were recomputed after that change.
- The direct "twist by lambda_0 in X_0" shortcut for a reductive group was
  discarded for exactly that reason: lambda_0 need not lie in X, as the
  counterexample shows.

## 9. Limitations and open items

- This is a scaffold readiness record, not a proof audit. Step 3, Step 5 and
  the engine gates remain open; the readiness records are not independent
  mathematical approval.
- The in-run suppliers of batches 13, 14, 15, 18 and 19 are scaffolded but not
  yet authored or published; the dependency ledger records 111 open edges.
- Steinberg's treatment is for Chevalley groups, first over an algebraically
  closed field; the split-reductive-with-central-torus scope is closed locally
  through Milne 19.25 and 22.20 rather than by Steinberg alone.
- The SL_2 simplicity of S^m(k^2) for all m < p (Milne 22.33, citing Springer
  1977) was not read and is not claimed.
- The run-wide `1-scaffold` hold belongs to the units with empty inventories
  (batches 24 and 26) and any other unfinished units; those are outside this
  batch's write scope.

## 10. Post-scaffold dependency review (second pass)

A second read of the five design-promised items against their statements and
recorded strategies found five dependency/evidence/statement issues. All are confined to
this batch's write scope; the promised IDs, statements' mathematical content
and the design's scope are unchanged.

- `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup` states the Lie-clause
  `Lie(H) = {x in Lie(G) : xv in kv}` for `H = Stab_G(kv)`. Its strategy cited
  "a companion item" without listing it. The clause is part (a) of
  `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces`
  (Milne 10.30-10.32, printed pp. 195-196). That local item is now a recorded
  dependency and is named in the strategy; the theorem's level is unchanged
  (5).
- `ex-fundamental-sl2-modules-in-characteristic-p` claims, for every `m` in
  every characteristic, that `L(m)_m` is one-dimensional, that the remaining
  weights lie in `{m-2, ..., -m}` with multiplicity at most one, and hence that
  `dim_k L(m) <= m+1`. The earlier strategy asserted the weight-string fact
  without proof and did not record the needed items. The claim is true and is
  now derived from local items: the highest-weight theorem gives a primitive
  vector `v` generating `L(m)`; `prop-module-generated-by-a-primitive-vector`
  gives that every weight is `m-2j` and that `L(m)` is spanned by the orbit
  `U_{-alpha} v`; the normalizer lemma applies `w_0 = -1` to bound weights by
  `-m`; the root-group expansion writes
  `u_{-alpha}(c)v = v + sum_{i>=1} c^i v_i` with `v_i` in `V_{m-2i}`, and the
  nonzero `v_i` lie in distinct weight spaces and span `L(m)`, so each weight
  space is at most one-dimensional. The four A-page items are now recorded
  dependencies (levels 27-32, all below the example's level 38, so no level
  change), and the strategy records the argument. The statement now also says
  that the two-dimensional submodule is isomorphic to `L(p)` realised as the
  Frobenius twist of `L(1)` via `g.e_i^p = (g.e_i)^p`, replacing an unclear
  "`L(p) <= S^p(k^2)`-submodule" phrasing. The strategy previously deferred the
  simplicity of `W` to the B-page counterexample, which is this example's own
  consumer; that temporal ordering cannot supply a dependency, so the strategy
  now proves directly that `W = k e_1^p + k e_2^p` is a submodule, that its
  only `T`-stable lines are the two weight lines, that neither is `G`-stable
  (the negative root group and the reflection move them), and hence that `W` is
  simple of highest weight `p`, so `W = L(p)` by the classification theorem.
- Both B-page items use the symmetric power `S^p(k^2)`; the published
  `def-symmetric-algebra-of-a-vector-space` is now recorded as the
  well-definedness dependency for the vector space (the explicit action is
  computed in the items).
- Three notation/well-definedness dependencies linked in statements but absent
  from the dep arrays were added: `def-rational-representation-and-comodule-of-an-affine-group-scheme`
  to `def-primitive-vector-of-a-rational-representation` and to
  `thm-complete-reducibility-of-rational-modules-in-characteristic-zero`, and
  `def-radical-and-unipotent-radical-of-an-algebraic-group` to
  `lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters`.
- Coverage honesty: the row "22.33 simplicity of homogeneous polynomial
  representations for m < p" was recorded `inline` although the pair claims no
  such statement (Milne cites Springer 1977, Ch. 3, not read). It is now
  `out-of-scope` with that reason, matching section 3's limitation. The count
  stays 67 harvested rows.
- `lem-centre-central-characters-and-descent-along-central-isogenies` stated the
  descent criterion with the hypothesis `lambda in X(T)`, which makes its
  "if and only if" vacuous in the "only if" direction. The intended (and
  Milne 22.12) statement is: for `lambda in X(T')` and `V'` the simple
  `G'`-module of highest weight `lambda`, `V'` factors through `G` if and only
  if `lambda in X(T)`. The hypothesis is now `lambda in X(T')`; the recorded
  strategy already proves the stronger form (`Z(G')` acts through `lambda + Q`,
  and `N` acts trivially exactly when `lambda` vanishes on `N`, i.e. lies in
  `X(T)`). The downstream use in
  `lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups`
  pulls `lambda` back from `X(T)`, so its application is unchanged and still
  valid.

After the edits: levels recomputed (A max 38, B max 39; no cycle, no
label mismatch), readiness records refreshed for every touched item and its
transitive dependents (21 after the dependency repairs, 6 after the
central-isogeny statement correction, 3 again after the example's self-contained
`S^p` proof; the last six carry the combined reason) so that all 35 records are
current, the batch cross-batch input regenerated (114 open rows: 23 into batch
13, 8 into 14, 4 into 15, 18 into 18, 59 into 19, plus the two page rows) and
the frontier ledger refreshed. Re-run results:
`manifest-deps` 35 items 0 errors; `item-dependency-levels check --run` names
no batch-20 item (only the two out-of-scope empty inventories); whole-run
`content-policy --manifest-only` 802 scoped items, 0 errors, 0 warnings;
`coverage-checklist --require-destination` 2 pages, 67 rows, 0 errors, the same
one low-yield warning; `step1-decisions check --run` has zero batch-20 rows;
`fwdcheck`, `extcheck`, `validate-plan`, `manifest-integrity` ("54/54, no scope
drift") and `source-fetch-check` (4/4 fetch-verified, 4/4 resolved) all pass.
The engine's Step-1 gate and Step 3 authoring remain open; these records are
readiness evidence, not mathematical approval.
