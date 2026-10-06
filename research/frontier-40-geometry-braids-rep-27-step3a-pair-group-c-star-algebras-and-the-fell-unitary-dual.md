# Step 3a scope review — pair `group-c-star-algebras-and-the-fell-unitary-dual`

- Run `frontier-40-geometry-braids-rep-27` (stage `3a-scope`), dispatch label
  `step3a-pair-group-c-star-algebras-and-the-fell-unitary-dual-642fb94b7b3d8f9e`.
  A second identical task file `...-fa62fbb874037790.task.md` exists with no
  matching dispatch prompt, attempt log or result in
  `research/frontier-40-geometry-braids-rep-27-dispatch/`; it is treated as a
  duplicate dispatch and no separate artifact is owed for it.
- Role: alpha (scope reviewer only — not owner, not item author).
- A page `group-c-star-algebras-and-the-fell-unitary-dual` (batch 4, order
  510.079, 40 items: 8 definitions, 22 lemmas, 6 theorems, 2 corollaries,
  1 proposition, 1 remark).
- B page `group-c-star-algebras-and-the-fell-unitary-dual-examples` (order
  510.080, 4 items: 3 examples, 1 counterexample).
- Companion pointers agree A↔B; the B page requires only its A page.
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run
  frontier-40-geometry-braids-rep-27 --page
  group-c-star-algebras-and-the-fell-unitary-dual --decision sufficient`.
- Date 2026-10-05. Scope only: no item approval, no proof judgement, no owner
  record and no edit to any scaffold, manifest, coverage, plan, library or item
  file. No owner scope receipt exists for this pair.

## 1. Intended subject and role in the library

Controlling prose design: RG-25 in
`research/plan-representation-theory-groups-track.md` L1779–1831
(A-page table L1789–1808, hard proof plan L1810–1817, B-page table
L1821–1828); index row L56 ("integrated forms, full/reduced algebras, weak
containment, unitary dual"); harvest crosswalk L2487–2491 (RG-25/H1–H5);
source rows L2296–2297; convention row L2207 (Fell topology by compact-uniform
coefficient approximation; the primitive-ideal kernel map is not declared a
homeomorphism before the type-I hypotheses); binding page-requirements row
L2732 in §15.2 ("every B page requires only its own A page"). Registry
`research/plan-spec.json` rows 510.079/510.080 match the manifest's orders,
companions, kinds and `requires` lists. The pair is present in
`frontier-40-geometry-braids-rep-27-scope-ledger.json` at batch 4. Owner
direction (`frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`)
authorizes this pair (a representation-theory pair with published external
page prerequisites), permits lower-order dependencies on other selected pairs
of this run, and permits required local helper items. Step-1 drift verdict for
this pair: **no-drift** (`...-alpha-step1-drift.md` L23–27); in particular the
design's mention of `spectral-measures-and-borel-functional-calculus` is
already closed transitively through `unitary-representations-positive-type-and-gns`.

Intended subject: the integrated form $\pi(f)$ of a unitary representation and
the correspondence, for $L^1(G)$ and for $C^*(G)$, between unitary
representations and nondegenerate $*$-representations; the reduced and full
group $C^*$-algebras and the canonical surjection $C^*(G)\twoheadrightarrow
C^*_r(G)$; weak containment and its exact reformulation by $C^*$-kernel
inclusion and the norm inequality; the Fell topology on $\widehat G$ by
compact-uniform coefficient approximation, the closure of a set by weak
containment in its direct sum, and discreteness of a compact group's dual; the
primitive ideal space $\operatorname{Prim}(C^*(G))$ with the Jacobson topology
and the kernel map — continuous, surjective, with the induced map on
weak-equivalence classes a homeomorphism, and non-injective in general outside
the type-I regime (recorded caveat); the abelian seam $C^*(G)\cong
C_0(\widehat G)$ with Fell $=$ compact-open topology; plus four B-page
computations (finite groups, $\mathbb Z$, $\mathbb R$) and the affine-group
counterexample showing $\widehat G$ need not be Hausdorff.

Role: the pair supplies the $C^*$-algebraic and Fell-topology interfaces used
by the later planned pages RG-26 (type-I/direct-integral boundary, plan L1833),
RG-27 (Hulanicki amenability criterion, plan L1907), RG-28 (complementary
series convergence to the trivial class, plan L2003), RG-29 (property (T) as
isolation of the trivial representation, plan L1994) and RG-30 (explicit
$SL_2(\mathbb R)$ dual, plan L2051). Its B page is a leaf. There are no
cross-pair edges inside this run (`batch-4.cross-batch-dependencies.json` is
`[]`), and the manifest declares no external dependency except the single
recorded remark discussed in §4.

## 2. Design-to-manifest mapping

All **17 designed A ids** and all **4 designed B ids** are present, in design
order, with the designed kinds and claims; nothing was dropped, renamed to a
different claim or weakened. The 17 design rows are:
`def-integrated-form-of-a-unitary-representation`,
`lem-integrated-forms-are-nondegenerate-star-representations`,
`thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond`,
`def-full-group-c-star-algebra`,
`lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient`,
`thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g`,
`def-reduced-group-c-star-algebra`,
`thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra`,
`def-unitary-dual-of-a-locally-compact-group`,
`def-weak-containment-of-unitary-representations`,
`thm-weak-containment-is-equivalent-to-kernel-inclusion`,
`def-fell-topology-on-the-unitary-dual`,
`lem-fell-closure-is-characterized-by-weak-containment`,
`cor-the-unitary-dual-of-a-compact-group-is-fell-discrete`,
`def-primitive-ideal-space-of-a-group-c-star-algebra`,
`prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective`,
`cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality`;
the four B rows are `ex-full-and-reduced-group-c-star-algebras-of-a-finite-group`,
`ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers`,
`ex-fell-convergence-of-characters-of-the-real-line`,
`cex-the-unitary-dual-need-not-be-hausdorff`.

The remaining **23 A ids are net-new** dependency-ordered items: helpers for
the $L^1$/GNS correspondence and Raikov
`def-state-on-a-c-star-algebra`,
`lem-positive-type-functions-satisfy-translation-estimates`,
`lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation`,
`lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm`,
`thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions`;
Fell-neighbourhood/closure machinery
`lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure`,
`lem-fell-neighbourhoods-of-an-irreducible-representation-are-saturated-under-weak-equivalence`,
`lem-normalized-coefficient-approximation-for-irreducible-weak-containment`,
`lem-irreducible-weak-containment-in-a-family-selects-one-coefficient`,
`lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball`,
`lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors`;
the C\*-toolkit needed to close the kernel map locally
`lem-c-star-positive-calculus-and-order-estimates`,
`lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units`,
`lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra`,
`lem-the-norm-of-a-positive-element-is-the-supremum-of-state-values`,
`lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds`,
`lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states`;
the two halves and the completed kernel equivalence
`lem-weak-containment-implies-kernel-inclusion`,
`lem-kernel-inclusion-implies-the-norm-inequality`,
`lem-kernel-inclusion-implies-weak-containment`;
the commissioned closed form of the kernel map
`thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space`;
the multiplication helper for the counterexample
`lem-operators-commuting-with-a-point-separating-family-of-multiplications-are-multiplications`;
and the recorded caveat `rem-the-kernel-map-need-not-be-injective-outside-type-i`).
Of these, four are declared as new local helpers in the Step-1 repair receipt
(`...-owner-fell-lifting/review-report.json`, `new_helpers`:
`lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball`,
`lem-irreducible-weak-containment-in-a-family-selects-one-coefficient`,
`lem-c-star-positive-calculus-and-order-estimates`,
`lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units`).
Every addition is stated at a level below its consumers; the manifest's
`dependency_level` ordering runs 0–11 and
`dependencyLevels(batch4) = {"items":44,"pages":2,"max_level":11,"errors":[]}`.

The design's hard proof plan (integrated correspondence first; weak containment
in both directions through states, GNS and $C^*$-kernels; Fell topology defined
by coefficients for all groups with the primitive-ideal model carrying its
exact injectivity hypothesis; the zero representation excluded from
$\widehat G$) is realized structurally: the L¹ correspondence (items 1–10),
the dual/Fell layer (3–5, 12–13, 25–26, 39), the full/reduced layer (16–18,
34), the kernel-equivalence layer (19, 35–37, 40) and the three-level kernel
map layer (38, 39, 40). The commissioned homomorphism strengthens the design's
`prop-...` row; the Step-1 receipt records that the commission preserves the
weak-equivalence-class statement and the item interfaces
(`review-report.json`, `mathematical_changes`, `root_integration`). The plan
convention L2207 is respected: only the induced map on weak-equivalence
classes is called a homeomorphism; non-injectivity of $\kappa$ itself is the
recorded remark.

Page sizes 40 and 4 are far below the 100-item cap. Orders, companions, kinds,
categories and both `requires` lists match plan-spec and the scope ledger.

## 3. Source coverage

`frontier-40-geometry-braids-rep-27-batch-4.coverage.json` carries **6 source
entries over 4 distinct works** (A: Bekka–de la Harpe [BeH-19], Fell 1962,
Bekka–de la Harpe–Valette [BeHV-08], Shirbisheh; B: BeH-19, BeHV-08) and **74
harvested rows**, every one with an explicit disposition: 41 `included`, 4
`already-published`, 12 `inline`, 15 `out-of-scope` with written reasons, and 2
`deferred` to named destinations (`character-groups-and-elementary-lca-duals`,
a published page, for Propositions 1.D.6–1.D.7; and
`direct-integral-decomposition-and-type-i-groups`, the planned RG-26 page, for
Section F.5 direct integrals). The treated subjects are exactly the ones the
design promises: integrated forms and the two completions, weak containment
and its kernel/norm characterisations, the Fell basis and closure criterion,
the compact-dual discreteness, the primitive ideal space and the kernel map,
the abelian boundary, and the four examples/counterexample. The coverage
checklist passes (2 pages, 74 rows, 0 errors, 0 warnings) and
`source-fetch-check` reports 6/6 source entries fetch-verified.

Evidence for the load-bearing statements was independently re-read by this
review on 2026-10-05 in the complete recovered texts held in
`research/frontier-40-geometry-braids-rep-27-owner-fell-lifting/`
(`bdh.pdf/.txt` = BeH-19, sha256 `f478a69a…`; `bdhv.pdf/.txt` = BeHV-08,
sha256 `0281823…`; `cstar.pdf/.txt` = Shirbisheh, sha256 `50372d5…`, all three
hashes as recorded in `review-report.json.source_evidence`):

- BeH-19 §1.C, Proposition 1.C.7 (net criterion: $\pi_i\to\pi$ iff $\pi$ is
  weakly contained in the direct sum of every subnet) — the model for
  `lem-fell-closure-is-characterized-by-weak-containment`.
- BeH-19 §1.D, Proposition 1.D.8 and Remark 1.D.9 (the dual of a compact group
  is discrete in Fell's topology) — the model for
  `cor-the-unitary-dual-of-a-compact-group-is-fell-discrete`.
- BeH-19 §1.E, Definition 1.E.1 and Reformulation 1.E.3 (the primitive dual
  $\operatorname{Prim}(G)$ is the space of weak-equivalence classes with the
  quotient Fell topology; the map $\widehat G\to\operatorname{Prim}(G)$ is
  injective iff $G$ is type I for second-countable $G$) and §8.B, Proposition
  8.B.4 with Remark 8.B.6(1)–(2) — exactly the scaffold's
  `thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space`,
  `prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective`
  and `rem-the-kernel-map-need-not-be-injective-outside-type-i` statements.
- BeH-19 §7.F, Corollary 7.F.4 (a non-type-I factor representation of a
  second-countable locally compact group has uncountably many pairwise
  inequivalent irreducible weakly equivalent representations) — the recorded
  remark's exact external statement.
- BeH-19 §8.B, Proposition 8.B.3, Remark 8.B.5 and Example 8.B.7(1)–(2) —
  the full/reduced correspondence, the norm-inequality reformulation and the
  abelian/compact boundary.
- BeHV-08 Appendix F: Example F.2.5(i)–(iii), including the affine group
  $\mathbb R^*\ltimes\mathbb R$ with "$\widehat G$ is not a Hausdorff space"
  and the pointer to Fell 1962 §5, and Proposition F.2.7 (a representation is
  weakly equivalent to the direct sum of its support) — the models for
  `cex-the-unitary-dual-need-not-be-hausdorff` and
  `lem-fell-closure-is-characterized-by-weak-containment`.
- Shirbisheh, complete text: the numbering claimed by the coverage exists
  (Proposition 3.2.11, Corollary 3.2.13, Propositions 4.1.6/4.1.8, Theorem
  4.2.7, Proposition 4.3.4), backing the quotient, positivity/order,
  approximate-unit and norm/state helpers.

Two source-record caveats, disclosed rather than resolved:

1. **Fell 1962 attribution.** The coverage marks Fell 1962 §1 (Theorem 1.1,
   Lemmas 1.2, 1.6–1.12) and §5 Example 1 as `included` with page locators,
   while the Step-1 repair record states that the Fell texts were not read
   ("Fell 1960 remains unread"; "Fell 1962 remains historical/source coverage
   only") and that no final strategy imports them. A bounded refetch of the
   recorded Cambridge URL on 2026-10-05 returned an HTML page rather than the
   PDF, so I could not verify those locators directly. The two statements they
   back were independently confirmed above in the read BeH-19 §8.B and BeHV-08
   Example F.2.5(iii) passages. This is a coverage-record discrepancy for the
   Step-5 source review, not a scope omission.
2. **Design wording vs adopted counterexample.** The design's B row calls
   `cex-the-unitary-dual-need-not-be-hausdorff` "the source's non-type-I
   example with inseparable irreducible classes". The adopted example is the
   affine group, which is type I; the Step-1 notes record that the false
   non-type-I label was removed and that the source's different full affine
   enumeration ($a\in\mathbb R^*$) is not consumed, while the target claim
   (non-Hausdorff Fell topology; $\widehat G$ is not an ordinary parameter
   space) is preserved and proved locally. I verified the adapted example's
   ingredients in the scaffold (irreducibility via the multiplication lemma;
   the coefficient computation showing $\chi_t\prec\pi$; nonclosedness of
   $\{\pi\}$) and the source passage; the correction is sound and should not be
   reverted in Step 3b wording.

## 4. Prerequisite examination (unmet-prerequisite check)

A full recursive closure of the 44 manifest items' `deps` and `justified_by`
through the run manifests and the front matter of published item files reaches
**1,931 nodes: 36 in-run scaffold nodes (all of them on this pair's A page)
and 1,895 published item files**. There is **no missing target, no
planned-only (unscaffolded) supplier, and no node without published status or
published-page membership**, and no edge into any other pair of this run
(consistent with `batch-4.cross-batch-dependencies.json = []`). The five pages
in the pair's `requires` lists
(`the-modular-function-and-l1-group-algebras`,
`unitary-representations-positive-type-and-gns`,
`peter-weyl-theory-for-general-compact-groups`,
`banach-algebras-spectrum-and-holomorphic-functional-calculus`,
`gelfand-theory-and-commutative-c-star-algebras`) are all published with
nonempty item lists, and the consumed published items are homed on published
pages (additionally `character-groups-and-elementary-lca-duals`,
`continuous-functional-calculus-for-self-adjoint-and-normal-operators`,
`spectral-measures-and-borel-functional-calculus`,
`hilbert-space-geometry-and-riesz-representation`,
`banach-alaoglu-goldstine-and-krein-milman`, and other standard FA pages).
Step-1 readiness records are 44/44 `ready`
(`review-report.json.readiness`), and the pair's own `rem-...` item is
`proved_here: false` with `deps: []` by design and is consumed by nothing.

**Flagged prerequisite-hygiene finding (confirmed; not an absence and not a
scope insufficiency).** Two scaffold consumers declare a dependency on a
published item that is explicitly *not proved here*:

- consuming items: `cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality`
  and `ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers`, whose
  `deps` both contain `ex-gelfand-transform-of-l-one-of-an-lca-group`;
- required prerequisite claim: the LCA convolution algebra
  $L^1(G)$ facts, the unitisation character-space classification and the
  compact-open topology identification of the dual group, i.e.
  `items/ex-gelfand-transform-of-l-one-of-an-lca-group.md` and its supplier
  `items/rem-lca-group-algebra-and-character-space-external.md`;
- evidence: the example's body carries the banner "proof uses external results
  not yet established in this library" and declares the remark as its first
  dep; the remark has `proved_here: false`, `proof: not-supplied` and an
  `external_dependency` block (Williams, Example 3.10) whose
  `local_proof_attempt` states that no complete local proof of the general LCA
  convolution algebra, the character classification or the compact-open
  identification is available;
- why it is flagged: the scaffold's own strategies do not use the example
  (the corollary routes through Schur + the representation correspondence +
  Raikov + nonunital Gelfand–Naimark; the integers example routes through the
  corollary + the bilateral-shift functional calculus), so the dependency is
  declared but unnecessary, and if Step 3b used it as a proof input it would
  import an unproved external result;
- recommended owner/author action: drop the dep during authoring, or keep the
  example only as a non-proof pointer; Step-5 review should check that the
  corollary's authored text does not invoke the external remark.

No other unmet prerequisite was confirmed or is suspected; in particular the
recursive closure contains exactly one `proved_here: false` node (the external
remark above).

## 5. Uncertainty and observations for the owner (not scope findings)

1. **Definition wording.** `def-full-group-c-star-algebra` says $C^*(G)$ "is
   the completion of $L^1(G)$ in the norm induced by $\|\cdot\|_{C^*}$", while
   its `justified_by` companion proves the completion is of $L^1(G)/N$,
   $N$ the null ideal of the seminorm. Step 3b should state the quotient
   explicitly so the definition is well formed.
2. **Theorem title vs statement.** The title of
   `thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space`
   ("homeomorphism") is looser than its statement and than the plan convention
   L2207 / BeH-19 Remark 8.B.6(2): $\kappa$ itself is injective only in type-I
   cases; the homeomorphism is on weak-equivalence classes. Keep the body's
   precision.
3. **Four published dep files use the newer front-matter schema** without a
   `status:` field (`def-pontryagin-dual-and-compact-open-topology`,
   `lem-continuous-characters-of-the-real-line-are-exponentials`,
   `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely`,
   `thm-l2-peter-weyl-orthonormal-basis`); each is listed on its published
   `library/` page, so availability is not in doubt — bookkeeping only.
4. **Fell-1962 coverage attribution and the "non-type-I" design wording**
   (both in §3) should be carried forward to the Step-5 source review.
5. **Conventions to keep synchronised in Step 3b**: the left-Haar/modular
   convention of the modular/$L^1$ page, the sesquilinear convention of
   coefficients used by the Fell tests, nets (not sequences) for the Fell
   topology, and the zero representation excluded from $\widehat G$ but
   allowed in weak-containment comparisons.

## 6. Checks run

| Check | Result |
|---|---|
| `manifest-deps.mjs` on batch-4 manifest | exit 0: 44 items, 0 errors (`checks.json`) |
| `content-policy.mjs --manifest-only` on batch-4 | exit 0: 44 scoped items, 0 errors, 0 warnings |
| `coverage-checklist.mjs` on batch-4 coverage | exit 0: 2 pages, 74 harvested rows, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage` | exit 0: 6/6 sources fetch-verified, 6/6 resolved |
| dependency-level check (batch 4) | max level 11, 0 errors |
| Recursive dependency closure (this review) | 1,931 nodes = 36 in-run (this A page) + 1,895 published; 0 missing, 0 planned-only, 0 non-published, 1 `proved_here: false` (traced in §4) |
| Step-1 readiness records | 44/44 `ready` |
| Source texts re-read for load-bearing statements | BeH-19 §1.C/§1.D/§1.E/§7.F/§8.B; BeHV-08 F.2.5/F.2.7; Shirbisheh numbering spot-verified — see §3 |
| Design-to-manifest id diff (RG-25 tables) | 17/17 A and 4/4 B designed ids present; 23 net-new A ids, 0 drops |
| `step3-decisions.mjs check --phase scope` | 27 pairs / 892 items; this pair listed "current scope review required" before this decision; no owner receipt |

## 7. Scope decision

The planned definitions, results and examples adequately cover the intended
subject of RG-25. All 17 designed A ids and all 4 designed B ids are present
with their intended claims and kinds; the 23 net-new A ids are
dependency-ordered local prerequisites/enrichment permitted by the owner
direction and by the Step-1 repair receipt, including the commissioned
closed form of the kernel map, which I verified against the read source
passages; source coverage is complete at the row level with an explained
disposition for every harvested result and one disclosed Fell-1962 attribution
caveat; every page-level and item-level prerequisite resolves to a published
item, the in-run A page, or a published page, with a single flagged
dependency-hygiene item (§4) that has a self-contained local route and does
not reduce the promised scope. No promised claim is missing or weakened and no
enrichment or pair merger is needed. Decision: **`sufficient`** for
`group-c-star-algebras-and-the-fell-unitary-dual`. No owner `proceed` record is
required for the current scope; the §4 flagged dependency and the §5
observations are for the owner and the Step-3b author.

## Appendix — inventory bound to this decision

A page (40 items, manifest order):
`def-integrated-form-of-a-unitary-representation` (definition),
`def-reduced-group-c-star-algebra` (definition),
`def-unitary-dual-of-a-locally-compact-group` (definition),
`def-weak-containment-of-unitary-representations` (definition),
`def-fell-topology-on-the-unitary-dual` (definition),
`def-state-on-a-c-star-algebra` (definition),
`lem-integrated-forms-are-nondegenerate-star-representations` (lemma),
`lem-positive-type-functions-satisfy-translation-estimates` (lemma),
`lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation` (lemma),
`thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond` (theorem),
`lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm` (lemma),
`thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions` (theorem),
`lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure` (lemma),
`lem-operators-commuting-with-a-point-separating-family-of-multiplications-are-multiplications` (lemma),
`rem-the-kernel-map-need-not-be-injective-outside-type-i` (remark),
`def-full-group-c-star-algebra` (definition),
`lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient` (lemma),
`thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g` (theorem),
`lem-weak-containment-implies-kernel-inclusion` (lemma),
`cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality` (corollary),
`def-primitive-ideal-space-of-a-group-c-star-algebra` (definition),
`lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball` (lemma),
`lem-irreducible-weak-containment-in-a-family-selects-one-coefficient` (lemma),
`lem-normalized-coefficient-approximation-for-irreducible-weak-containment` (lemma),
`lem-fell-neighbourhoods-of-an-irreducible-representation-are-saturated-under-weak-equivalence` (lemma),
`cor-the-unitary-dual-of-a-compact-group-is-fell-discrete` (corollary),
`lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors` (lemma),
`lem-c-star-positive-calculus-and-order-estimates` (lemma),
`lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units` (lemma),
`lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra` (lemma),
`lem-the-norm-of-a-positive-element-is-the-supremum-of-state-values` (lemma),
`lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds` (lemma),
`lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states` (lemma),
`thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra` (theorem),
`lem-kernel-inclusion-implies-the-norm-inequality` (lemma),
`lem-kernel-inclusion-implies-weak-containment` (lemma),
`thm-weak-containment-is-equivalent-to-kernel-inclusion` (theorem),
`thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space` (theorem),
`lem-fell-closure-is-characterized-by-weak-containment` (lemma),
`prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective` (proposition).

B page (4 items, manifest order):
`ex-full-and-reduced-group-c-star-algebras-of-a-finite-group` (example),
`ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers` (example),
`ex-fell-convergence-of-characters-of-the-real-line` (example),
`cex-the-unitary-dual-need-not-be-hausdorff` (counterexample).

The scope receipt
`research/frontier-40-geometry-braids-rep-27-step3a-review-group-c-star-algebras-and-the-fell-unitary-dual.json`
is hash-bound to the current manifest pages. Next action: Step 3b may author
this pair under this scope; the owner and the author should read §4–§5 first.
