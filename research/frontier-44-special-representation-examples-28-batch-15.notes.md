# Batch 15 Step-1 scaffold — `singular-and-parabolic-kazhdan-lusztig-theory`

Run `frontier-44-special-representation-examples-28`, batch 15 (orders 1786/1787),
category `special-topics-in-representation-theory`. Owned pair:

- A `singular-and-parabolic-kazhdan-lusztig-theory`
- B `singular-and-parabolic-kazhdan-lusztig-theory-examples`

Owned outputs written in this dispatch: `…-batch-15.pages.json` (18 items: 14 A + 4 B),
`…-batch-15.coverage.json` (8 source entries, all `fetch_verified`, 36 harvested results),
`…-batch-15.cross-batch-dependencies.json` (3 rows, all open), the 18
`…-step1-<item>.json` readiness records (16 ready, 2 escalated), this note, and the
owned "Batch 15 Step-1 scaffold" section appended to
`briefs/tasks/frontier-dependency-ledger.md`. No published item, shared plan, engine
state or verdict was edited.

## 1. Binding direction and plan reconciliation

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read in full before construction and is binding. The relevant clauses are the
Category O prerequisite/order decision (keep orders 1786–1793, suppliers before
consumers, exact supplier interfaces) and the regular-block transport / inverse-KL
correction (consume the corrected batch-14 interfaces, do not weaken them). Nothing in
the direction conflicts with this scaffold; the pair keeps orders 1786/1787 and every
approved KL-5 claim.

`research/plan-kazhdan-lusztig-track.md` KL-5 (line 149) is the inventory source. All
**11 design A items** are scaffolded under their exact design ids in the design's
prerequisite order, plus **3 local prerequisites** added on the same A page where the
design table leaves the corresponding proof joint unstated:

- `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars`
  (standard bases, right action, bar involution);
- `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis` (the triangular
  construction the polynomial definitions need);
- `lem-facet-tensor-weight-exclusion` (the facet case of tensor-weight exclusion used by
  wall translation).

The B companion carries 4 items (3 examples + 1 counterexample), all below the A page
and its published suppliers.

**Recorded conflict with `research/plan-spec.json`.** The plan carries the pair with
`requires` = {`the-kazhdan-lusztig-character-and-multiplicity-theorem`,
`root-systems-dynkin-diagrams-and-cartan-killing-classification`,
`projectives-standard-filtrations-and-bgg-reciprocity`} (B requires A). The manifest
declares two further page requirements, `coxeter-presentations-exchange-and-reduced-word-theorems`
and `parabolic-subgroups-and-double-coset-geometry`, because the items actually consume
that page's items (`def-cg-parabolic-quotient-and-two-sided-minima`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity`,
`thm-cg-parabolic-intersections-and-coset-factorization`, `def-symmetric-group`,
`def-weyl-group-and-length-for-finite-gl-n`). Declaring the actual supplier page is
required by the dispatch (verify actual transitive proof dependencies); the plan's
shorter list is the stale metadata. The plan controls all other conflicts and none was
found. `validate-plan` consequently reports four `redundant-prereq` advisories on this
page: the added `coxeter-presentations-…` requirement is already reachable through
`parabolic-subgroups-and-double-coset-geometry`, and the two plan requirements
`root-systems-…` and `projectives-standard-…` are already reachable through the KL-4
page. These are advisories, not errors; the declarations are retained as the actual
interfaces used.

## 2. Construction summary

18 items (14 A + 4 B) built once in prerequisite order. `dependency_level` labels are
computed from the whole-run graph with `tools/item-dependency-levels.mjs` (in-run
suppliers raise the level, published suppliers do not): the A chains are
0,1,2,3,4 (Hecke module) / 0,1,2,17 (singular block) / 0,1,2,18,19 (parabolic
category); the B items are 5, 18, 18, 5. The written labels equal the computed levels
for all 18 items, there is no cycle and no forward intra-page edge;
`item-dependency-levels check --run` reports no batch-15 row (the run-wide failures are
other batches' rows: eighteen empty scaffold inventories and two batch-8 level-label
mismatches).

- A-page route: (A1) parabolic Hecke modules and characters; (A2) standard bases, right
  action, bar; (A3) existence/uniqueness of the parabolic KL bases; (A4) the
  spherical/antispherical coefficients and Deodhar normalization; (A5) the
  alternating-sum and spherical-reduction formulas; (A6) the singular integral block and
  dot stabilizer; (A7) the facet tensor-weight exclusion lemma; (A8) translation to the
  wall on Verma, simple and projective objects; (A9) singular multiplicities are
  spherical parabolic KL values at one; (A10) standard parabolic/Levi subalgebras;
  (A11) parabolic category O; (A12) it is a highest weight category; (A13) parabolic
  multiplicities [escalated]; (A14) the parabolic character formula [escalated].
- B-page items: the S_3/S_2 tables (spherical and antispherical), the sl_2 and sl_3
  wall-translation example, the small parabolic character formula, and the
  spherical-versus-antispherical counterexample.

Choice: every item that uses the published translation/norm machinery declares
`def-axiom-of-choice` (A7, A8, A9, A13, A14, `ex-translation-to-a-singular-wall-in-type-a-two`,
`ex-a-small-parabolic-category-o-character-formula`); the Hecke-module chain, the
polynomial definitions and A6/A10–A12 are choice-free as scaffolded, and no new choice
principle is introduced.

## 3. Mathematical decisions and repairs recorded

1. **Two escalations, recorded honestly.** `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`
   is escalated: the missing local prerequisite is the wall-crossing identification of
   the parabolic standard/simple multiplicity matrix with the singular-block matrix
   (equivalently the categorification of the parabolic Hecke module: standards ↔ the
   standard basis under the longest-coset shift x↦w0^J x, projectives ↔ the self-dual
   KL–Deodhar basis, wall translation ↔ multiplication by C_s). The source treatment
   (Mazorchuk–Stroppel, complete text fetched: Lemma 7.6, Theorem 7.7, Theorem 3.1) and
   the Koszul duality invoked by Ko–Mazorchuk–Mrden 4.2 prove it, but neither the
   equivalence nor the duality is scaffolded locally. Proposed placement, owner decision
   required: one more item on this A page before A13 (page currently 18 items, cap 100),
   or a page split. `thm-parabolic-kazhdan-lusztig-character-formula` is escalated as
   inheriting A13's matrix; its inversion is elementary and choice-free.
2. **Post-review repair of the S_3 example and counterexample.** The first frozen text
   computed the antispherical coefficient as n_{e,s2s1}=1−v², using a wrong index
   (p_{s2s1,s2s1} instead of p_{e,s2s1}) and the impossible coefficient p_{w0,s2s1}=v
   (the support condition gives 0). Corrected: n_{e,s2s1}=p_{e,s2s1}−v·p_{s1,s2s1}=v²−v²=0,
   while the spherical coefficient is m_{e,s2s1}=p_{s1,w0}=v². A direct canonical-basis
   construction in H_v(S_3) from the module definitions and the published multiplicative
   bar convention (`lem-the-hecke-bar-involution-is-well-defined`, published, consistent
   with Libedinsky–Williamson §2.4–2.6) gives D_{s2s1}=n_{s2s1}+v n_{s2} (so
   n_{e,s2s1}=0, n_{s2,s2s1}=v) and C_{s2s1}=m_{s2s1}+v m_{s2}+v² m_e (so
   m_{e,s2s1}=v²), confirming the corrected tables. The counterexample's conclusion
   (the two normalizations differ; substituting the antispherical value 0 for the
   spherical value 1 would give a false multiplicity) is unchanged and now correctly
   supported. The tables in the example were already correct; its strategy arithmetic
   and the `and :` artifact were repaired.
3. **Index repair in the escalated character formula.** The displayed inverse
   coefficient was `S^{-1}_{x,y}` while the stated support and the 3×3 example require
   `S^{-1}_{y,x}`: with S=(m_{y,x}(1))_{y,x}, the transition matrix from standards to
   simples is the transpose (m_{x,y}(1))_{y,x}, supported on x≤y, and its inverse is
   supported on y≤x. The statement and strategy now use the correct index. The
   escalation record for this item was written before this repair and remains owner-held;
   a non-owner may not re-record an escalation, and the owner resolution must compute a
   fresh hash.
4. **Two stray empty parentheses removed** from A1's strategy and A9's statement
   (artifacts of an earlier link-stripping pass); no mathematical change. Both records
   were re-recorded, and the six items whose transitive input hash includes A1 or A9
   were re-recorded with refreshed reasons (text byte-identical).
5. **Normalization frozen.** Spherical = φ_+(H_s)=v^{-1} (trivial), antispherical =
   φ_-(H_s)=−v (sign); the Deodhar dictionary is M^J=P^J at u=−1 and N^J=P^J at u=q in
   the index convention of the anti-spherical reference. The singular-block multiplicity
   theorem is stated in the spherical normalization; the antispherical family governs the
   mirror (dominant-side, opposite parabolic) form. This is the interface used by batch
   16's KL-6 consumers of the parabolic polynomial basis.

## 4. Readiness records

16 ready / 2 escalated, all `owner: false`, recorded through
`node tools/step1-decisions.mjs record`; every reason names the examined dependency ids
and the evidence. `step1-decisions check --run …` lists exactly the two batch-15
escalation rows and no stale batch-15 row. No in-run supplier is treated as proved
merely because it is scaffolded: the two batch-14 item suppliers behind A9 and the
batch-14 page behind the manifest requirement are scaffolded and owner-ready but not
authored, and their edges stay open.

## 5. Coverage and sources

`…-batch-15.coverage.json` has 5 sources on the A page and 3 on the B page, every one
read in the recorded locator range and every one carrying a `fetch_verified` stamp:

- Libedinsky–Williamson, *The anti-spherical category* (author-hosted, complete PDF):
  §§2.4–2.7 for the modules, right action, bar and the Deodhar relations;
- Lin Chen, Lecture 9 (complete 7-page lecture): standard filtrations, BGG reciprocity,
  translation functors, facets, Examples 3.11/3.16/3.18;
- Mazorchuk–Stroppel, *Translation and shuffling …*, Trans. AMS 357 (2005) 2939–2973
  (author-hosted, 35 pp.): the properly stratified parabolic subcategory, Lemma 7.6,
  Theorem 7.7, Theorem 3.1;
- Ko–Mazorchuk–Mrden, Doc. Math. 26 (2021) (DiVA full text): §§3.1, 3.4, 4.1–4.2;
- Björner–Brenti, *Combinatorics of Coxeter Groups* (author-hosted 370-page book):
  §5.1 and §7.7 Exercise 7(a).

36 harvested results carry dispositions: A page 30 (20 included, 5 already-published,
5 out-of-scope with reasons); B page 6 (all included). No result is undisposed.
`source-backing` reports 16 authored results, every one backed.

## 6. Checks actually run (with results)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — 457 items, 0
  normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` — 457
  scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs …-batch-15.coverage.json --require-destination` —
  2 pages, 36 harvested results, 0 errors, 0 warnings.
- `frontier-item-gate --tool validate-plan` — FAIL run-wide; the only ERROR is the
  other-batch `balanced-triples-and-global-crystal-bases` intra-order edge
  (`thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` before
  `lem-lusztig-and-kashiwara-normalizations-match-by-root-color`). This page has only
  the four `redundant-prereq` advisories of §1.
- `node tools/source-fetch-check.mjs --coverage … --stamp` — 8/8 fetch-verified (0
  newly stamped), 8/8 resolved; check mode identical.
- `node tools/url-sweep.mjs --coverage … --out <temp> --recover --fail-on-dead` — 5/5
  live, 0 failed, 0 blocking, 5 citation decisions (0 documented drops).
- `node tools/source-backing.mjs --coverage … --liveness <temp>` — 16 authored results,
  every one backed.
- `node tools/step1-decisions.mjs check --run …` — 457 items, 388 ready, 87 work rows
  run-wide; exactly 2 are batch-15 (the escalations). The other 85 are other batches
  (58 stale ready rows, 18 empty scaffold inventories, 3 missing records, 6 other-batch
  escalations).
- `node tools/item-dependency-levels.mjs check --run …` — no batch-15 row; the CLI
  fails on other batches' rows only: eighteen empty scaffold inventories (batches 9,
  10, 11, 16, 17, 18, 23, 24, 25) and two label mismatches inside batch 8
  (`thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type`,
  `lem-lusztig-and-kashiwara-normalizations-match-by-root-color`).
- `node tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed and
  deduplicated; 4 edges touch batch 15: the 3 owned rows of §7 (all `open`, with review
  text) and the batch-16 page edge (no review yet). `--require-reviewed` still fails
  pending batches 9, 10, 11, 16, 17, 18, 23, 24, 25.
- `fwdcheck`/`extcheck` via `frontier-item-gate` — attempted; both FAIL with
  `focus-item-unknown` because the focus items are scaffolded but have no `items/*.md`
  carrier before authoring (the engine defers external-reference checking to Step 3).
  `depsource` — attempted; it aborts in another batch's manifest (`Invalid or empty
  current page in …-batch-10.pages.json`). Recorded as not applicable / blocked at
  Step 1, not as passes.

## 7. Unresolved findings and cross-batch rows

`…-batch-15.cross-batch-dependencies.json` carries 3 rows, all `open`:

- item `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` ← batch-14
  `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values` (the
  single-term reduction in the regular block; exact statement and consumer use
  recorded);
- item `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` ← batch-14
  `def-regular-integral-dot-orbit-labelling-convention` (block conventions and the
  a↦a w0 relabelling);
- page `singular-and-parabolic-kazhdan-lusztig-theory` ← batch-14 page
  `the-kazhdan-lusztig-character-and-multiplicity-theorem` (manifest `requires`, plan
  KL-5; through it the batch-12/13 Soergel/coinvariant items).

Supplier direction owed by a sibling consumer batch (its owner writes the row): batch 16
page `parabolic-category-o-and-fock-space-bases` consumes this A page (plan KL-6), and
the unified ledger lists that page edge with no review yet. No other run manifest
declares a dependency on a batch-15 item.

No published item consumed by this batch was found defective. The published bar
convention (`lem-the-hecke-bar-involution-is-well-defined`) and the published S_3 KL
example (`ex-kazhdan-lusztig-bases-for-s-two-and-s-three`, all P_{y,w}=1) were read and
are consistent with the batch's computations; in particular the axis
"multiplicative bar versus anti-automorphism bar" is fixed by the published item, and
the counterexample repair follows that convention. The defects found were in this
batch's own scaffold text only and are repaired above.

The two escalations are the batch's only unclosable obligations; the owner must either
authorise the proposed local prerequisite (or page split) for A13, or withdraw
A13/A14. Readiness is scaffold-level: Step 3 authors the proofs and Steps 5–8 review;
this note is not a mathematical approval and no engine stage or verdict was stamped.

## Root serial metadata reconciliation

The native conflict in section1 is resolved by adding only `parabolic-subgroups-and-double-coset-geometry` to canonical15 and removing the redundant native direct Coxeter requirement. The task and attributed drift amendment match this minimal actual supplier closure. Orders1786/1787 and all18 native contracts are unchanged; original native text and current-before bytes remain separately archived. The two escalations and newly confirmed supplier proof defects remain owner-held; no readiness or whole-stage gate is asserted by this metadata repair.


## 8. Owner supplier-first local repair (2026-10-09)

This section supersedes the initial missing-equivalence and withdrawal/page-split
proposal in §§3,7; those native decisions/carriers18/4 and two genuine receipts
are preserved in the immutable native baseline. The owner retains all true
approved claims and all18 IDs. Root reconciled exactly one additional published
parabolic-subgroups prerequisite and removed native redundant direct Coxeter;
orders1786/1787 and canonical56 page identities are unchanged.

The complete owner proof note gives the local replacement route: semisimple
derived Levi plus its center, intrinsic Killing/Cartan proof, positive ζ grading,
finite PBW local finiteness; actual Serre closure/duality; finite-length
INTERSECTION reflector; finite truncated induced projectives representing
Hom_l(E,-), generalized-standard flags and canonical maximal-label/idempotent
peeling; generalized Hom/Ext1 proved locally; BGG from flags and simple duality.
No standard is falsely embedded in its costandard, and a right-exact reflector
is not presumed to preserve flags. All actual root1D/sl2/complete-reducibility
Weyl/Choice supplier hypotheses are recorded. The native choice-free narrative
for A10–A12 was wrong: these current contracts carry their inherited AC explicitly.

Finite Levi Weyl cancellation gives the full ordinary regular-parabolic
antispherical matrix: [Delta^J(yλ):L(xλ)]=sum_u(-1)^ell(u)P_{uy,x}(1)=n_yx(1)
for dominant regular λ and minimal LEFT labels. The matrix inverse is weighted,
with row-x support y>=x. Arbitrary integral parabolic highest-weight structure
is retained; the regular ordinary KL matrix is not falsely asserted in a
singular-parabolic block. Antidominant longest-left labels have explicit base
weight and convert by iota(y)=wJ y w0. The singular formula P_yw0,ww0(1) is
retained with the correct spherical k(w)=wJ w^-1 w0; changing positive systems
does not convert spherical singular matrices to antispherical parabolic ones.

Ready suppliers and actual consumers were repaired in dependency order. The
Hecke basis is obtained from H free over H_J, correct increasing-length action
gives the antispherical zero branch, and bar has leading H_x with Laurent
lower terms. Explicit C_J eigen-embedding proves spherical reduction; lower
antispherical terms are visibly in vZ[v]. Polynomial parity/degree
well-definedness is discharged by those reductions, declared in justified_by,
not a nonexistent earlier parity clause. Wall simple survival is proved through
translated standard/costandard maps. Only the big antidominant projective has
every distinct standard once; the false claim for every projective is corrected.
The singular B example reads projective flags from columns. The small-character
B item now includes the genuine regular parabolic matrix/inverse as approved,
while preserving the true singular comparison formula separately.

Actual fulltexts independently inspected distinguish the categories. Mazorchuk–
Stroppel's spherical/projectively-presentable properly-stratified theorem is
not a genuine parabolic O equivalence, so its former incorrect destinations
are honestly disposed as different-category source results. Ko§4.2's Koszul
duality is not imported. Moreau's current129-page author notes §§13.1–13.3
pp93–99 were inspected; §13.3 Equation18/Theorem13.11 anchors the already-proved
finite Weyl character supplier. Only that valid identity is used; unrelated
source assertions/exercises are not adopted wholesale. Native escalations and
current preimages remain untouched pending root stable guard authorization.
All owned JSON carriers are written through same-directory temporary files
and atomic replacement, and no canonical/sharedplan/engine mutation is made.

Final focused verification: the normalized Hecke quadratic/bar triangular
construction independently reproduces both S3 polynomial tables, the spherical
k dictionary, the two distinct category matrices and both products with their
integer inverses. Evidence is owner-category-o-batch15-finite-matrices.json.
Actual singular numeric KL statements are explicitly typeA as required by the
approved typeA track and actual batch14 supplier; generic singular structures,
translation and arbitrary integral parabolic highest-weight claims remain intact.
Root's final15 binding direction is atomically integrated and source writers
are drained. The normal itemInputPaths closure is4364 physical paths: protected
plan-spec and batches1–4,12–15, no quantum5–8 or future16 manifest.
The18 contracts have acyclic levels with maximum21. Focused manifest18,
content-policy12–15 (91subjects), coverage41 and source9 checks pass. The
15-only temporary current-item overlay validates18 subjects; its three
redundant-requires advisories are inherited retained canonical prerequisites.
These are scoped local checks, not a whole-run gate or an independent audit.
Readiness records remain untouched pending root stable guard authorization.
