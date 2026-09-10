# Batch 11 — local finite-type scaffold repair

Root amendment, 2026-09-09: finite-type existence is now supplied by local
root-height descent and nonsingular indecomposable simplicity lemmas,
followed by commuting-component decomposition. The consumer no longer
imports DG-31's unpublished Serre theorem. Batch/canonical contracts,
coverage, Lie/DG prose and the consumer ledger agree; coverage passes
61 rows. These proposed proofs still require Step-3 review. The historical
missing-supplier statements below are superseded by this amendment.

Supervisor recovery, 2026-09-09: both active sources now pass genuine
fetch verification from a working network environment. The missing finite-type
Serre supplier and other mathematical/structural obligations remain open.
The original DNS failures below are historical, not current fetch state.

Run: `phase-2-catchup-24`; role beta; owned pair: `kac-moody-algebras-from-generalized-cartan-matrices` and its examples companion. This is a proposed scaffold, **not a readiness or publication certificate**. Only this notes file and the owned `.pages.json` and `.coverage.json` were written. The plan, published library, other batches and unified ledgers were not modified.

## Authority, design and scope

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `README.md`, `briefs/beta-scaffold.md`, the generated dispatch, `research/phase-2-catchup-24-beta-batch.task.md`, and `briefs/tasks/frontier-dependency-ledger.md`. Active-run evidence is `.autopilot/phase-2-catchup-24/state.json` (Step 1 scaffold), not a concluded RESUME file. Git publication checkpoint inspected: `209eaa2f1` (phase-2-wave-1). The workspace is shared and other batch manifests changed during this audit.

Both assigned design locations were read in context. `research/plan-quantum-groups-track.md` §0 and QG1 identify RL-12 as the classical GCM/Serre supplier. They do not supply its classical proof. The controlling mathematics is the complete RL-12 section of `research/plan-representation-theory-lie-track.md`, lines 1221–1282, together with its binding dependency audit, conventions, registry and holds. Its proof order is maximal-ideal quotient, invariant form, restricted Casimir, primitive vectors, relation module, residual-kernel argument, then symmetrizable Serre generation. Neither RL-14 nor formal characters supplies a step of that argument.

Current `research/plan-spec.json` controls placement: A order 510.023, B order 510.024, category lie-theory, A requires `harish-chandra-isomorphism-casimir-and-central-characters`. This agrees with the binding updated design audit but supersedes the old DG-only prerequisite matrix. The old design metrics claiming an A maximum of 21 are stale: RL-12 actually lists 25 A and 6 B rows. All 31 are retained; six proof joints bring this scaffold to 31 A and 6 B. The validator ceiling is 60 A items, so no split or new pair is required merely for size.

The design's introductory Kleshchev locators for realizations (1.3) and basic finite root degrees (5.1) were incorrect: corrected to 1.2.2/1.2.4 and 1.3.3/1.4 respectively. Real roots are treated in 5.1; 5.2 is their coordinate classification. Incorrect Perrin section numbers were replaced by Chapter 4 locators where read; unread later Perrin locators were removed as proof backing. These are evidence corrections, not changes to the retained mathematical scope.

## Exact changes and proof route

Every item has an explicit `deps` array, including empty arrays. Added these earlier A items:

- `def-kac-moody-root-lattice-height-and-positive-cone`: independent simple roots, Q, Q+, height and downward order.
- `lem-pbw-for-countably-presented-kac-moody-lie-algebras`: supplied countable ordered basis, finite rewriting and Jacobi overlap proof; compatible homogeneous bases by finite elimination. This is a proposed local repair for the finite-dimensional scope of published PBW; its remaining proof/source audit is recorded below.
- `lem-free-lie-construction-for-finite-kac-moody-generators`: abstract bracket-word quotient and tensor-algebra universal property using the preceding PBW result.
- `lem-kac-moody-opposite-simple-centralizer-vanishes`: maximality rules out a nonzero homogeneous vector commuting with all opposite simple generators.
- `lem-serre-elements-vanish-before-serre-generation`: rank-one commutator calculation followed by that centralizer lemma. Vanishing is not generation.
- `lem-strict-linear-alternative-for-gcm-trichotomy`: finite convex-hull minimum argument; its analytic supplier audit remains open below.

The realization proof uses independent row and column pivots, not an unproved nonsingular principal-minor assertion for nonsymmetric matrices. Cartan injectivity, triangular directness and free halves are proved using the tensor-word representation before the largest ideal is defined. Weight-component extraction uses finite interpolation; the sum of all ideals disjoint from h remains disjoint without Zorn's lemma. These discharge the construction's well-definedness obligations in the next local propositions rather than assuming them in the definition.

Conventions are complex scalars, rows indexed by coroots, alpha_j(h_i)=a_ij, finite nonempty index set, d_i>0 with DA symmetric, and minimal Cartan dimension 2n-rank A. Kleshchev uses A=diag(epsilon_i)B; therefore d_i=epsilon_i^{-1}. The form normalization is (h_i,h)=alpha_i(h)/d_i and (e_i,f_j)=delta_ij/d_i, giving (alpha_i,alpha_j)=d_i a_ij. A singular Cartan matrix does not license discarding the complementary Cartan directions.

The invariant-form strategy includes the height induction, bracket-expression independence by the four-term Jacobi calculation, the zero-degree case and radical argument. The Casimir is an operator on restricted modules, not an infinite element of U(g). Dual root tensors are finite-dimensional and its sum is pointwise finite. Category O means finite-dimensional weight spaces in finitely many downward cones; finite generation and finite length are not silently imposed. Primitive generation uses bounded-cone induction rather than a composition series.

The relation-module map uses associative last-letter coefficients in the free negative tensor algebra, not an assertion that every negative bracket has a unique adjoint expression. The augmentation-intersection lemma proves injectivity. Casimir zero on the target Verma modules constrains primitive weights; a height induction lifts generators from the relation abelianization. Weyl automorphisms on the Serre quotient are constructed directly from its locally nilpotent simple derivations before identifying that quotient with g(A). The residual-kernel contradiction uses a minimum-height weight. The final Serre theorem explicitly also depends on local PBW for its positive-half assertion.

The trichotomy retains all indecomposable GCMs, including nonsymmetrizable indefinite matrices. It includes positive-vector alternatives, cone conditions, affine corank and uniqueness, transpose invariance and the cycle proof of finite/affine symmetrizability. In the symmetrizable case a directly expanded sum-of-squares identity for a positive trichotomy vector proves the form signature; no unlisted spectral theorem is invoked.

All six B rows remain. The indefinite rank-two example exhibits degree (1,1), surviving the higher-degree positive Serre relations and having negative norm. The imaginary-multiplicity counterexample supplies an explicit untwisted sl3 loop model, its trace cocycle, degree derivation, generation and maximal-ideal recognition inline: each nonzero m-delta degree has dimension two. It does not cite the later RL-13 page to prove an earlier B example. This adaptation still needs independent proof review; it is not represented as a verbatim sl3 example in the source's sl2 discussion.

## Dependency audit and fatal findings

The final local topological scan passed for all 37 unique items. A simultaneous scan of the other current run manifests found no collisions with owned IDs. The only declared external item IDs are:

1. `def-universal-enveloping-algebra-as-a-tensor-quotient`: its published full definition was read. It defines the tensor quotient for a complex Lie algebra without a finite-dimensional restriction; its declared deps are empty. The proposed local arguments use its tensor quotient and universal factorization, not a finite-dimensional basis theorem. This syntactic leaf does not itself certify all background tensor/quotient constructions.
2. `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`: the full published statement and proof were read. Used only for finite-dimensional compactness and attainment of the squared norm on a finite convex hull in `lem-strict-linear-alternative-for-gcm-trichotomy`. The pseudocompactness equivalences are not used. The actual compactness/continuous-image prerequisites still require a complete transitive clause audit; reading the parent theorem is not enough. The alternative `thm-extreme-value-metric` was read but would not remove that obligation. This is **an unresolved semantic-audit blocker**, not an asserted defect in those published results. Exact affected path: finite-type recovery -> trichotomy -> strict linear alternative -> Euclidean compactness/attainment theorem -> its load-bearing compactness/continuous-image machinery.
3. `thm-serre-presentation-theorem`: **missing supplier**, neither a published item nor an item supplied by the current run. `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` uses its forward direction: the finite-type Chevalley–Serre algebra is finite-dimensional semisimple with the specified root system. Symmetrizable Serre presentation alone does not prove that assertion. Exact expected home is `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`, item `thm-serre-presentation-theorem` (file absent at inspection). This does not block the invariant-form/Casimir/Serre core by mathematical use, but blocks the retained finite-type recovery item and hence pair readiness.

The missing supplier is already authorized in DG-31, not a request for a duplicate new pair. Existing pair: “Root Systems Dynkin Diagrams and Cartan Killing Classification”, differential-geometry, A `root-systems-dynkin-diagrams-and-cartan-killing-classification` at 503 and its examples B at 504. Current plan prerequisites: `lie-algebra-representations-enveloping-algebras-and-pbw`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `inner-product-spaces-and-orthogonality`, `trees-forests-and-spanning-trees`. Its canonical item array is empty. The full proposed inventory is owned by `research/plan-differential-geometry-track.md` DG-31; load-bearing A sequence is free Lie definition, free Lie universal property, presented Lie definition, finite-type Serre algebra definition, `thm-serre-presentation-theorem`, isomorphism/existence and classification. Its B has explicit A1/A2/B2/G2 roots and `ex-serre-relations-for-a-two-recover-sl-three`. Remedy: its authorized owner supplies and reviews DG-31 with its prerequisites before clearing this consumer. No plan edits are authorized in this batch.

Published `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` was read and is explicitly finite-dimensional. It is not defective on that scope; it is inadequate for the free contragredient halves and relation ideals here. The local countable-basis PBW lemma proposes the necessary extension. Its confluence, basis-compatibility and source backing remain a **proof-review blocker**. Kleshchev's use of PBW for Verma modules does not by itself prove the extension. Do not mark this resolved merely because the new ID exists.

Structural closure is separately blocked. Exact shortest path is:

`kac-moody-algebras-from-generalized-cartan-matrices` -> `harish-chandra-isomorphism-casimir-and-central-characters` -> `real-forms-and-real-semisimple-lie-algebras-examples`.

The current HC prerequisite is that B page; it is inherited by this A page. The binding design calls its removal a later repair, but the dispatch does not waive structural gates and this batch cannot edit HC or the plan. At the last scan the page closure contained 246 pages and seven B pages. The additional inherited B targets are `the-baire-principles-of-functional-analysis-examples`, `finite-dimensional-normed-spaces-and-riesz-lemma-examples`, `geometric-hahn-banach-and-convex-separation-examples`, `bounded-linear-operators-and-quotient-spaces-examples`, `the-analytic-hahn-banach-theorem-examples`, and `normed-and-banach-spaces-examples`, through the real-forms -> compact-Lie-groups -> Hilbert-space -> functional-analysis chain. Many inherited pages are still unbuilt. A passing validator over canonical empty-item rows does not clear these publication obligations.

The page-requires scan found no `deferred-set-theory-beyond-choice` target. No owned page is Foundations and no owned item cites that ledger. A complete transitive item/body/justified_by/forward_refs Foundations boundary certificate is **not claimed**, because the analytic prerequisite audit above is unfinished. Any forbidden path discovered there would be fatal and must be replaced locally, never relabeled orientation.

## Published-consumer and cross-batch reconciliation

No unrelated co-resident published result was required to be semantically cleared. No published-consumer mathematical defect was established by this audit that depends on this frontier and needs a new ledger repair entry. The finite-dimensional PBW scope mismatch is an owned proof obligation, not Phase-3 debt. The inherited HC B edge is an explicit structural finding for authorized reconciliation; mathematical use of an HC theorem was not invented to justify it.

The missing DG-31 edge above is the exact supplier record to reconcile into frontier bookkeeping. Preserve the consumer item and its required direction/hypotheses. Batch 11 has no write authority for `research/published-consumer-supplier-ledger.md` or another batch. These owned notes are the handoff record; no cross-batch edge was silently removed. The deferred Kleshchev results in coverage point to existing RL-13, RL-14 and Weyl–Kac destinations, and none is used to prove an owned item.

## Sources, actual reading and recovery

Two independent full lecture-note treatments were located:

- Alexander Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*, https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. Complete locally cached PDF and extracted text were available at `/tmp/tmp.Lbe2JSWVOC/klesh.pdf` and `klesh.txt`. Relevant argument chunks read cover printed pp.10–42, 50–60, 68–76, 116–118 and 122–126; bounded re-reads recovered gaps in truncated broad output. Exact named results and item-specific support are in coverage. In particular 9.3.1–9.3.5 were read through the end of the proof, not from an abstract. The temporary cache is reading evidence, not a fabricated current remote fetch stamp.
- Nicolas Perrin, *Introduction to Kac-Moody groups and Lie algebras*, https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf. The web tool opened the complete 279-page PDF (18,120 extracted lines). Chapter 4, printed pp.29–38, was read through its end, covering realization, contragredient construction, maximal ideal, finite root degrees and preliminary Serre/centralizer results. Later independent invariant-form/Casimir chapters were not fully read and are not claimed as corroborating evidence. The two-treatment-per-page count is satisfied as located/read treatments for the construction, but this is not a claim that every advanced proof has independent corroboration.

Perrin typographical issues are not copied: rank/corank in the realization map discussion, det=0 at the end of Proposition 4.1.11's invertible case, and a strict rather than weak finite word-dimension bound. Kleshchev's reciprocal symmetrizer convention and associative coefficient interpretation are explained above. The local PBW extension and sl3 loop adaptation need further proof review rather than manufactured source confidence.

Actual searches included Kleshchev title/IDLALN3 and Perrin km-suite. Recovery requests included the original Kleshchev URL (web timeout), a repeated original request (timeout), `https://darkwing.uoregon.edu/~klesh/teaching/IDLALN.pdf` (safe-fetch failure), `https://pages.uoregon.edu/klesh/teaching/IDLALN3.pdf` (internal fetch failure), and original `?download=1` (internal fetch failure). The local complete text was recovered and used. Perrin was recovered through the web tool. Do not equate these failures with proof of open-web absence.

`source-fetch-check --stamp` nevertheless failed in the shell environment: both hosts returned `EAI_AGAIN`. Each source record retains its actual initial attempt plus five retries, timestamped 2026-09-09T06:38:12.794Z through .811Z by the tool. These machine-recorded attempts are preserved; they are not six independent author/archive searches. URL sweep also reports DNS failures. No source was dropped, no `source_resolution: dropped` was manufactured, and neither source had a successful remote fetch stamp at that initial check. This historical source-verification blocker was cleared by the supervisor receipts at 06:47:40.685Z and 06:47:44.093Z; policy-fix-1-b11 reused and checked both genuine receipts. Temporary DNS failure is not a basis for an unavailable-source waiver.

Coverage contains 59 harvested rows with included/inline item IDs and valid destinations or explicit out-of-scope reasons. Its syntactic pass does not establish complete semantic harvesting of unread sections. The Peterson–Kac conjugacy result is explicitly out of scope and not load-bearing. Original source records and actual recovery attempts remain in the owned coverage file.

## Checks actually run

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-11.coverage.json --require-destination`: PASS, 1 page, 59 harvested rows, zero errors/warnings (rerun after corrections).
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`: PASS, latest snapshot 564 items, zero errors. The changing count reflects concurrent batches; this check is not a published-supplier existence proof.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-11.pages.json --manifest-only`: FAIL, 37 items, exactly one error: missing `thm-serre-presentation-theorem` for the finite-type recovery proposition (rerun after corrections).
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; canonical snapshot reported 1624 pages, 936 populated and 683 empty. This command validates the current canonical plan, not an integration of the owned inventory; no integration pass is claimed.
- `node tools/extcheck.mjs --quiet`: exit 0, 61 warnings concerning existing recorded material, zero errors. No warning was repaired outside authority.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --stamp --timeout-sec 10`: FAIL, 0/2 verified, zero drops, DNS `EAI_AGAIN`; retained actual recovery_attempts.
- `node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --out /tmp/b11-url-liveness.json --fail-on-dead`: FAIL, 0/2 live, DNS failures.
- `node tools/source-backing.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --liveness /tmp/b11-url-liveness.json --require-verified`: FAIL, 36 authored results lacked an openable source under that liveness receipt. This is not a mathematical refutation of the locally read notes.
- Custom final Python scan: PASS, 37 unique owned IDs, all local deps earlier, no other-run-manifest ID collisions; exactly the three external item IDs listed above. Page closure scan reported 246 pages, seven B targets and no deferred-set-theory page. This did not inspect every transitive body reference.

Before continuation, reread the current owned files, current plan and actual suppliers: this is a changing shared workspace. Clear the missing DG-31 supplier, structural prerequisite gate and full transitive analytic/PBW audit before marking this batch ready; source-fetch verification has since passed as recorded below. No useful result has been deleted or weakened to obtain a green check.


## Policy-fix-1-b11 — current disposition (2026-09-09)

**Blocked: the reported `batch-dependency-missing` is confirmed, not repaired.**
Re-read the current owned manifest/coverage/notes, normative instructions,
RL-12 and QG-1 assigned designs, DG-31's supplier inventory and current plan.
The run state still identifies `phase-2-catchup-24`, stage `1-scaffold`;
latest Git checkpoint remains `209eaa2f1`. The policy check reports only
`prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` ->
`thm-serre-presentation-theorem`. The supplier file is absent and a current
scan of all run manifests finds no supplier declaration.

The repair makes the consumer strategy explicit: positive-definite
symmetrizability and invertibility eliminate extra Cartan directions;
identical generator relations then give inverse presentation maps. Across
components the zero-entry relations give commuting summands. The missing
premise is that the finite-type presentation is finite-dimensional semisimple
with the specified based root system over C, using coroot-indexed rows. Neither
symmetrizable Serre presentation alone nor recognition starting with an
already-existing semisimple algebra supplies this direction. Retained all
three dependencies and all 37 items. No claim was weakened or supplier ID
re-homed. Updated the matching coverage dispositions and source locators.

The existing supplier pair is already authorized, so no new pair is proposed:
DG-31, “Root Systems Dynkin Diagrams and Cartan Killing Classification”,
category **differential-geometry**, A order 503 and B order 504. Both canonical
item inventories are empty. Its five requires are listed above; its complete
A inventory is the 39 numbered entries in
`research/plan-differential-geometry-track.md` DG-31 “A-page items in dependency
order”, and its complete B inventory is the 12 entries under that section's
“B page”. In particular A items 28–32 supply free Lie construction,
universal property, presentations, the finite-type Serre algebra and the
missing theorem; 33–38 supply identification/classification consequences.
The authorized DG-31 writer must populate and prove this earlier pair and
audit its actual prerequisites, without using this later consumer to prove
its own theorem. Merely adding the missing ID to a manifest will not suffice.
Shared design/plan/items are outside this dispatch's write authority.

Source-direction evidence: reread complete Kleshchev Proposition 1.4.3
(pp.17–18), section 1.5 (pp.20–25) and section 4.2 (pp.58–61) from the existing
complete PDF text at `/tmp/tmp.Lbe2JSWVOC/klesh.txt`. Example 1.5.2's final
paragraph assumes the finite-dimensional semisimple algebra; it does not
prove existence for every finite-type matrix. The existing active source
records stay active; no drop or fresh read stamp was manufactured. A web
open of the original URL timed out during this repair, but the complete
cached text was recovered immediately and both prior genuine fetch receipts
remain valid. No further recovery retries were needed. Corrected stale
coverage text that had claimed those receipts were still absent.

Bookkeeping: the fresh declared-edge scan finds no owned page/item edge to
another batch in this run. DG-31 is outside this run, so the missing edge is
an earlier-frontier supplier obligation, not a same-frontier edge. The
previously documented actual-use and structural blockers remain open; no
new whole-closure semantic certification is claimed. The current page
closure still contains the inherited HC -> real-forms B edge. This dispatch
writes only the three named artifacts: the ledger input/refresh is outside
that authority and was not run. These notes supply the reconciliation record.

Checks run after the strategy/coverage edit:

- Coverage checklist with `--require-destination`: PASS, 59 rows, no warnings.
- Whole-run `manifest-deps`: PASS, 616 items, 0 normalized, 0 errors.
- Batch manifest-only content policy: FAIL, exactly the missing Serre supplier
  above (37 scoped items, 1 error, 0 warnings).
- `validate-plan research/plan-spec.json`: exit 0; 936 populated page
  inventories and 683 empty planned inventories. This does not integrate or
  certify the blocked batch.
- `extcheck --quiet`: exit 0, 61 existing warnings.
- `source-fetch-check --coverage ...batch-11.coverage.json --stamp`: PASS,
  2/2 verified, 0 newly stamped, 0 drops; reused genuine existing receipts.
- `source-backing --coverage ...batch-11.coverage.json --liveness
  research/phase-2-catchup-24-url-liveness.json --require-verified`: PASS,
  36 authored results. This uses the existing run liveness receipt dated
  2026-09-09T06:59:14.010Z, not a fresh URL sweep.

Next authorized action is DG-31 supplier completion and structural-plan
reconciliation by its owner, followed by semantic review of the retained
PBW/analytic obligations and this consumer's exact supplier interface.

## Policy-fix-2-b11 — unchanged fatal supplier, 2026-09-09

Rechecked the reported subject against the current manifest, coverage, RL-12,
QG-1 and DG-31 designs, canonical plan, all current run manifests and disk.
Active state remains `phase-2-catchup-24`, `1-scaffold`; current Git checkpoint
is `760136d3b`. The exact failure remains
`prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`
-> `thm-serre-presentation-theorem`. No supplier file or current-run declaration
exists. DG-31 A/B inventories remain empty at orders 503/504. Its required
forward finite-dimensional semisimple existence clause is still essential;
the existing consumer strategy already records the full interface and inverse
presentation maps. No mathematical edit to that strategy or its aligned source
coverage is warranted by unchanged evidence. All 37 items and dependencies
are retained. Only these notes were changed in this dispatch.

Clarification to the earlier inventory handoff: the complete DG-31 A design
includes its 39 numbered items **and six separately listed false-statement
items**, followed by the 12 B items. The preceding policy-fix-1 description of
39 numbered items as the complete A inventory omitted that separate block.
The authoritative full inventory is `research/plan-differential-geometry-track.md`
DG-31, lines 7576–7764; all six false-statement rows remain in scope there.
No duplicate supplier pair is needed. The existing DG-31 owner must supply
and review this earlier pair; merely registering its theorem ID is insufficient.

Source verification: searched the web for “Kleshchev Lectures Infinite
Dimensional Lie Algebras IDLALN3 Example 1.5.2”; results located the original
institutional IDLALN3 PDF and sibling institutional versions. Read the cached
complete relevant text of Proposition 1.5.1 and Example 1.5.2, printed pp.20–21,
through the final general semisimple paragraph, at
`/tmp/tmp.Lbe2JSWVOC/klesh.txt` lines 1905–2032. It recognizes an already-given
semisimple algebra; it does not construct one for every finite-type matrix.
Also reread Proposition 1.4.3 and Theorem 4.2.3 for the unchanged direct-sum
and symmetrizer uses. No new harvest, source drop, or remote fetch/read stamp
was asserted. The existing active source locators and dispositions still match
the unchanged consumer claim and proof route.

Fresh structural scan: 245 distinct strict prerequisite pages (246 including
the owned A page), the same seven inherited B targets listed above, and no
page path to the deferred-set-theory catalogue. No declared page, deps,
justified_by or forward_refs edge goes to another batch in this run. DG-31
remains an outside-run supplier obligation. No shared ledger or ledger input
was written/refreshed under the explicit three-file write restriction; these
notes are the reconciliation handoff. No new published-consumer defect was
established. The previously recorded analytic/PBW semantic obligations remain
open; this targeted recheck does not certify their transitive closure.

Checks actually rerun:

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-11.coverage.json --require-destination`: PASS, 59 harvested rows, 0 errors/warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`: PASS, 618 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-11.pages.json --manifest-only`: FAIL, 37 scoped items, exactly the missing supplier above, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, 1624 pages, 936 populated planned inventories and 683 empty planned inventories; no integration of this batch is claimed.
- `node tools/extcheck.mjs --quiet`: exit 0, 61 existing warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --stamp`: PASS, 2/2 verified, 0 newly stamped, 0 drops.
- `node tools/source-backing.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --liveness research/phase-2-catchup-24-url-liveness.json --require-verified`: PASS, 36 authored results; uses the existing liveness receipt, not a fresh URL sweep.

Disposition: **blocked, not repaired**. Next action is authorized DG-31 supplier
completion and structural-plan reconciliation, then current semantic review of
the actual prerequisites. Repeating this batch-only policy repair on unchanged
inputs cannot supply the missing earlier theorem within its write authority.

## content-policy-scaffold — prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras

Disposition: **blocked by outside-run finite-type existence supplier**. Read the exact recovery proposition, its two local prerequisite contracts (symmetrizable Serre presentation and finite/affine/indefinite trichotomy), RL-12, DG-31 items 28–38 and current canonical DG-31 entry. Read complete Kleshchev Proposition 1.5.1 and its proof, plus the type-A construction in Example 1.5.2, printed pp20–21, from the genuinely recovered local text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`; original https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf open timed out in this pass. Prior successful fetch receipts remain historical evidence, not a fresh remote fetch.

Proposition 1.5.1 recognizes an already-given Lie algebra satisfying the Cartan/generator/maximal-ideal conditions. It does not establish existence for every finite-type matrix, in particular the exceptional types. The missing forward direction is exactly `thm-serre-presentation-theorem`: finite-type Cartan matrix over C -> finite-dimensional semisimple presented algebra with that based root system. Rows index coroots. The proposed supplier is already owned by DG-31 `root-systems-dynkin-diagrams-and-cartan-killing-classification` at 503 (B 504), already a waiting Phase-2 pair, outside this run, empty canonical inventory and no item file. Its chain includes `def-free-lie-algebra-on-a-vector-space` -> `thm-universal-property-of-the-free-lie-algebra` -> `def-lie-algebra-presented-by-generators-and-relations` -> `def-serre-lie-algebra-of-a-finite-type-cartan-matrix` -> `thm-serre-presentation-theorem`, plus the preceding finite-root-system and Dynkin classification inventory. The local Kac–Moody theorem alone is inadequate.

No duplicate finite-type theorem or empty supplier was registered. Required scope decision: authorized outside-run build and review of the existing complete DG-31 pair and its actual prerequisites; keep this consumer blocked until the supplier is proved. The source and design do not justify deleting the edge. No new Phase-2 pair or classification count change. The inherited HC -> real-forms B prerequisite reported in batch notes also remains an unowned structural blocker, not permission to edit published pages. Changed batch-11 notes, RL-12/DG-31 reconciliation prose, existing supplier ledger and this report. Checks follow.


### Reconcile-3 final check checkpoint — 2026-09-09

See `research/phase-2-catchup-24-scaffold-repair-3.notes.md`, final verification receipt, for exact current checks, artifact hashes and all remaining obligations. Whole-run manifest-deps passes (667 items); content policy and full plan overlay retain the four missing theorem suppliers; coverage retains Haar and four SET-10 rows; fetch/liveness remain blocked. Scope identities and declared Foundations/Recorded boundaries pass. The A609 declared prerequisite was repaired but its six suppliers are draft, not published. No worker exit constitutes acceptance; preserve this batch's unresolved mathematics and historical dated evidence.

## Step-3 fix pass

Read the stable Alpha-e review and verdict records, the current batch manifest
and coverage, the current plan entries, RL-12 and QG-1, and the complete local
Kleshchev text for printed pp. 50--60. The exact controlling design remains
RL-12: QG-1 merely names this classical supplier, while RL-12 specifies the
construction, conventions, proof order and item inventory. The following are
the current dispositions; they supersede neither historical evidence nor a
shared writer's authority.

### B11-PLAN-REGISTRATION — blocked

The current canonical A entry has the 33 A items, but the companion's canonical
`items` array remains empty. The owned B manifest supplies, in proof order,
`ex-rank-one-gcm-recovers-sl2`, `ex-the-a2-serre-relations`,
`ex-the-affine-a1-gcm-has-singular-rank-one-realization-data`,
`ex-a-symmetrizable-indefinite-rank-two-gcm`,
`cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm`, and
`cex-imaginary-root-spaces-need-not-have-multiplicity-one`. Each has only
earlier A dependencies in the manifest. No owned mathematical claim was
weakened or removed. The required change is still an authorized shared-plan
writer copying this exact B inventory into the canonical companion entry and
then rerunning the whole-run plan gates. This dispatch cannot edit the shared
plan, so the pair remains blocked on that registration.

### B11-B-LEAF-CLOSURE — resolved on the current plan

The review's historical path was through the Harish--Chandra page to
`real-forms-and-real-semisimple-lie-algebras-examples`. On the current plan,
the owned A page requires Harish--Chandra and `the-topology-of-euclidean-space`,
but Harish--Chandra now has `requires: []`; the current transitive page closure
has no B page. Thus the alternative repair prescribed by the review has already
occurred in shared plan state, and no B-leaf violation remains to repair here.
This is a current-plan conflict with the generated dispatch's earlier
Harish--Chandra-only requirement: the plan controls, so the owned manifest was
updated to carry the additional earlier topology page.
No Kac--Moody proof strategy invokes a Harish--Chandra theorem. The batch
manifest was synchronized with the newly present topology prerequisite because
`lem-strict-linear-alternative-for-gcm-trichotomy` actually uses
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`: its exact
nonempty-Euclidean-subset extreme-value clause supplies minimization on the
finite convex hull. The topology edge is earlier and contains that supplier.

### B11-TRICHOTOMY-CONTRACT — repaired

Changed `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms` in
the owned manifest and its Kleshchev coverage row. Its statement now defines
the three types by the exact determinant/corank, positive-vector and cone
clauses; includes the affine positive null-ray conclusion, transpose invariance,
finite/affine symmetrizability, and the positive-definite,
positive-semidefinite-corank-one, and indefinite signatures of a symmetric
positive-diagonal symmetrisation. The proof strategy and dependencies remain
in proof order:
`def-generalized-cartan-matrix`,
`def-symmetrizable-generalized-cartan-matrix`, then
`lem-strict-linear-alternative-for-gcm-trichotomy`. Evidence is Kleshchev,
*Lectures on Infinite Dimensional Lie Algebras*, Definition 4.1.1,
Theorem 4.1.12, Proposition 4.2.1 and Theorem 4.2.3 (printed pp. 50--60),
https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf; the current coverage
has its verified complete-PDF receipt. No remaining blocker is created by this
finding.

### B11-FUTURE-MODEL-REFERENCE — repaired

Changed `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`
and both of its coverage supports. The statement and strategy now give only the
intrinsic universal Cartan--Serre presentation, finite dimensionality and the
componentwise direct sum of nonabelian simples; all DG-31 model language was
removed. Its four dependencies remain earlier local contracts:
`thm-serre-presentation-of-a-kac-moody-algebra`, the trichotomy theorem,
finite-root descent, and nonsingular indecomposable simplicity. Kleshchev
Proposition 1.4.3 (printed pp. 17--18) supports the generator-level direct-sum
interface, while Proposition 1.4.8(i) (pp. 19--20) and Proposition 4.3.2
(pp. 63--64) support the local simplicity and finite-type conclusions. DG-31
is no longer a named or load-bearing supplier. No remaining blocker is created
by this finding.

No declared or implicit same-frontier dependency was added or removed, so the
owned cross-batch input remains `[]`; no frontier-ledger refresh was required.
No published-consumer defect was found: the only inspected published supplier,
the Euclidean extreme-value theorem, is an actual local premise whose stated
hypotheses fit the finite nonempty convex hull and whose direction is exactly
the required attainment conclusion.

Checks run after the manifest, coverage and prerequisite synchronization:

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-11.coverage.json --require-destination` — 1 page, 61 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 694 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-11.pages.json --manifest-only` — 39 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; plan order acyclic and consistent, no item cycle, forward reference, B-page dependency or unresolved ID among 960 itemized pages. The 659 currently empty canonical inventories include this B companion and remain a registration limitation, not a pass waiver.
- `node tools/extcheck.mjs --quiet` — exit 0 with 57 pre-existing published recorded-result warnings and no errors.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-11.coverage.json --stamp --timeout-sec 20` — 2/2 sources fetch-verified, 0 newly stamped, 0 documented drops.

Current remaining blocker: B11-PLAN-REGISTRATION only. The batch must not be
marked sufficient until an authorized writer adds the six companion items to
the canonical plan and the resulting current inputs are rechecked.

## Final group-e adjudication, 2026-09-09

See `research/phase-2-catchup-24-alpha-e-step3-scaffold-recheck.md`. Repaired the false ordered-PBW spanning step in `lem-enveloping-quotient-kernels-and-augmentation-intersections` by the left U(r)-module decomposition and abelianization proof; theorem and full scope retained. Coverage support is aligned. Perrin connectivity/nonsingular simplicity is now harvested inline; only the remaining singular/general ideal clauses are deferred. The current plan has the exact 33/6 inventories and the former Harish–Chandra B-leaf path is absent. No future DG model is consumed.

Source caution for the deferred Coxeter development: Kleshchev section 3.3 prints exponent 5 for a_ij*a_ji=3; the displayed rank-two characteristic polynomial gives order 6. This unused source typo is not a blocker on the current supplier. The original broader published-consumer debt in these notes remains for canonical reconciliation; this adjudication does not certify those consumers.


## Current final adjudication — scaffold-final-e-cb253ba06dcda0cb

2026-09-09: all owned A/B pairs accepted with confidence 1. See `research/phase-2-catchup-24-alpha-e-step3-scaffold-recheck.md`, current section, for exact proof checks, applied earlier repair closure, full-text evidence and current validator counts. Old blockers and verdicts above are historical. Mathematical inventories/dependencies were not changed in this dispatch; stale status metadata was reconciled. Both batch dependency inputs remain empty after declared and actual-use review. Published-consumer debt recorded above remains Phase-3 debt with its exact suppliers and repair routes; it is not silently cleared by scaffold acceptance. No published file or shared plan/prose was edited.

## Step-5 authoring

Started 2026-09-10. Current inputs: 33 A and 6 B items, all missing on disk at start; latest Alpha-e verdict sufficient. Current manifest and plan control over stale DG-model language in RL-12 and historical notes. No published content, plan, or workflow changes authorized. Full cached Kleshchev text is available at `/tmp/tmp.Lbe2JSWVOC/klesh.txt`; web search located the author-hosted original, whose direct open timed out. Prior fetch receipts are preserved, not claimed as fresh downloads. Current source reading and item checkpoints follow. No cross-batch edge is declared in the current consumer input.

### Authored checkpoint: `def-generalized-cartan-matrix`

Claim/conventions: A **generalized Cartan matrix** (GCM) is an integer matrix $A=(a_{ij})_{i,j\in I}$, where $I=\{1,\ldots,n\}$ and $n\ge1$, such that $a_{ii}=2$, $a_{ij}\le0$ for $i\ne j$, and $a_{ij}=0\iff a_{ji}=0$. It is **indecomposable** if there is no partition $I=J\sqcup K$ into nonempty sets with all entries between $J$ and $K$ zero.

Source locator: §1.2, p.10. Dependencies: . Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-symmetrizable-generalized-cartan-matrix`

Claim/conventions: A GCM $A$ is **symmetrizable** if there is a diagonal matrix $D=\operatorname{diag}(d_1,\ldots,d_n)$ with real $d_i>0$ such that $B=DA$ is symmetric, equivalently $d_i a_{ij}=d_j a_{ji}$ for all $i,j$. We fix one such $D$ when using a form.

Source locator: §2.1, pp.26–27. Dependencies: def-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-realization-of-a-generalized-cartan-matrix`

Claim/conventions: A **minimal realization** of a GCM $A$ of rank $r$ is a complex vector space $\mathfrak h$ with indexed linearly independent families $h_1,\ldots,h_n\in\mathfrak h$ and $\alpha_1,\ldots,\alpha_n\in\mathfrak h^*$ such that $\alpha_j(h_i)=a_{ij}$ and $\dim\mathfrak h=2n-r$. An isomorphism $T$ of realizations satisfies $T(h_i)=h_i^\prime$ and $\alpha_j^\prime T=\alpha_j$ for every index.

Source locator: Definition 1.2.2 and Proposition 1.2.4, pp.10–12. Dependencies: def-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`

Claim/conventions: Every finite GCM has a minimal complex realization. Any two are isomorphic preserving all indexed roots and coroots. The dimension $2n-\operatorname{rank}A$ is the smallest possible dimension with both families independent.

Source locator: Proposition 1.2.4, pp.11–12; independent row-image construction replaces a principal-minor assumption. Dependencies: def-realization-of-a-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-kac-moody-root-lattice-height-and-positive-cone`

Claim/conventions: For a realization as in [[def-realization-of-a-generalized-cartan-matrix]], set $Q=\bigoplus_{i=1}^n\mathbb Z\alpha_i$ and $Q^+=\bigoplus_{i=1}^n\mathbb Z_{\ge0}\alpha_i$. Define $\operatorname{ht}(\sum_i k_i\alpha_i)=\sum_i k_i$. For $\lambda,\mu\in\mathfrak h^*$ write $\mu\le\lambda$ if $\lambda-\mu\in Q^+$.

Source locator: end of §1.2, pp.12–13. Dependencies: def-realization-of-a-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-pbw-for-countably-presented-kac-moody-lie-algebras`

Claim/conventions: Let $L$ be a complex Lie algebra with a supplied finite or countable ordered basis $(x_i)$. The products $x_{i_1}\cdots x_{i_m}$ with $i_1\le\cdots\le i_m$, including $1$ for $m=0$, form a basis of $U(L)$. Consequently $L\to U(L)$ is injective. For the finite-word graded algebras here, compatible homogeneous bases of subalgebras and quotients can be obtained without AC.

Source locator: local PBW reduction supporting §1.3 and §9.3 (the finite-dimensional PBW theorem is not imported). Dependencies: def-universal-enveloping-algebra-as-a-tensor-quotient. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-free-lie-construction-for-finite-kac-moody-generators`

Claim/conventions: For a finite-dimensional complex space $V$ with specified basis, the quotient $F(V)$ of formal bracket words by bilinearity, antisymmetry and Jacobi is the free Lie algebra on $V$. Its natural map into $T(V)$ is injective, with image the Lie subalgebra generated by $V$, and $U(F(V))\cong T(V)$.

Source locator: §1.3, Theorem 1.3.3(ii), pp.14–16; explicit universal-property construction. Dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`

Claim/conventions: Fix a minimal realization of $A$ using [[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]. The **universal contragredient algebra** $\widetilde{\mathfrak g}(A)$ is the free Lie algebra on a basis of $\mathfrak h$ and symbols $e_i,f_i$, modulo $[h,h^\prime]=0$, $[h,e_i]=\alpha_i(h)e_i$, $[h,f_i]=-\alpha_i(h)f_i$ and $[e_i,f_j]=\delta_{ij}h_i$, for all $h,h^\prime\in\mathfrak h$.

Source locator: Definition 1.3.1, p.13. Dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, lem-free-lie-construction-for-finite-kac-moody-generators, def-kac-moody-root-lattice-height-and-positive-cone. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-contragredient-algebra-has-a-triangular-decomposition`

Claim/conventions: The Cartan map is injective and $\widetilde{\mathfrak g}=\widetilde{\mathfrak n}^-\oplus\mathfrak h\oplus\widetilde{\mathfrak n}^+$. Each half is free on its indicated generators. This is a $Q$-graded weight decomposition with zero part $\mathfrak h$ and all other degrees in $\pm(Q^+\setminus\{0\})$.

Source locator: Theorem 1.3.3, pp.13–16; full tensor-module argument. Dependencies: def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, lem-free-lie-construction-for-finite-kac-moody-generators. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h`

Claim/conventions: Every ideal $J$ of $\widetilde{\mathfrak g}(A)$ is $Q$-graded. The sum $\mathfrak r$ of all ideals with $J\cap\mathfrak h=0$ also has zero intersection with $\mathfrak h$, is the unique largest such ideal, and decomposes as $\mathfrak r=\mathfrak r^-\oplus\mathfrak r^+$, where $\mathfrak r^\pm=\mathfrak r\cap\widetilde{\mathfrak n}^\pm$ are separate ideals.

Source locator: Lemma 1.3.2 and Theorem 1.3.3(v), pp.13–16. Dependencies: prop-contragredient-algebra-has-a-triangular-decomposition. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-kac-moody-algebra-associated-to-a-gcm`

Claim/conventions: The **Kac–Moody algebra** of $A$ is $\mathfrak g(A)=\widetilde{\mathfrak g}(A)/\mathfrak r$, using the largest Cartan-disjoint ideal constructed in [[lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h]]. We retain the names $h,e_i,f_i$ for their images and put $\mathfrak n^\pm=\widetilde{\mathfrak n}^\pm/\mathfrak r^\pm$.

Source locator: Definition 1.4.1, p.16. Dependencies: lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-kac-moody-root-spaces-are-finite-dimensional`

Claim/conventions: Let $\Delta=\{\beta\in Q\setminus\{0\}:\mathfrak g_\beta\ne0\}$. Then $\mathfrak g=\mathfrak h\oplus\bigoplus_{\beta\in\Delta}\mathfrak g_\beta$, every root has one sign, and $\dim\mathfrak g_\beta\le n^{|\operatorname{ht}\beta|}$. The only roots on the line $\mathbb C\alpha_i$ are $\pm\alpha_i$, and their spaces are $\mathbb Ce_i$ and $\mathbb Cf_i$.

Source locator: Theorem 1.3.3(iv), §1.4, pp.14–19. Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-contragredient-algebra-has-a-triangular-decomposition. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-kac-moody-opposite-simple-centralizer-vanishes`

Claim/conventions: If $x\in\mathfrak n^+$ satisfies $[f_i,x]=0$ for every $i$, then $x=0$. Likewise $x\in\mathfrak n^-$ with $[e_i,x]=0$ for every $i$ is zero.

Source locator: Perrin Lemma 4.2.8, p.36; maximal-ideal argument as in Kleshchev §1.4. Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-serre-elements-vanish-before-serre-generation`

Claim/conventions: For every finite GCM and $i\ne j$, the maximal-ideal quotient satisfies $(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0$ and $(\operatorname{ad}f_i)^{1-a_{ij}}f_j=0$. This asserts vanishing, without yet asserting generation of the defining ideal.

Source locator: §1.4 Serre vanishing and Lemma 3.1.1; Perrin Propositions 4.2.6–4.2.7, pp.35–37. Dependencies: lem-kac-moody-opposite-simple-centralizer-vanishes, prop-kac-moody-root-spaces-are-finite-dimensional. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-simple-reflections-and-the-kac-moody-weyl-group`

Claim/conventions: For a minimal realization, put $s_i(\lambda)=\lambda-\lambda(h_i)\alpha_i$ on $\mathfrak h^*$. The **Weyl group** is $W=\langle s_1,\ldots,s_n\rangle\subset\operatorname{GL}(\mathfrak h^*)$. Its dual action is $s_i(h)=h-\alpha_i(h)h_i$.

Source locator: §3.2, pp.39–42. Dependencies: def-realization-of-a-generalized-cartan-matrix, def-kac-moody-root-lattice-height-and-positive-cone. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-the-weyl-group-preserves-roots-and-root-multiplicities`

Claim/conventions: For every finite GCM, $W$ permutes $\Delta$, and $\dim\mathfrak g_{w\beta}=\dim\mathfrak g_\beta$. Each simple reflection is implemented on root spaces by a Lie automorphism of $\mathfrak g$. For a symmetrizer $D$, the form on the root span with $(\alpha_i,\alpha_j)=d_i a_{ij}$ is $W$-invariant.

Source locator: Lemma 3.1.2 and §3.2, pp.37–42. Dependencies: def-simple-reflections-and-the-kac-moody-weyl-group, lem-serre-elements-vanish-before-serre-generation, prop-kac-moody-root-spaces-are-finite-dimensional. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`

Claim/conventions: Let $A$ be symmetrizable with $D=\operatorname{diag}(d_i)>0$ and $DA$ symmetric. Fix a complement $\mathfrak h^{\prime\prime}$ to $H=\operatorname{span}(h_i)$ in the minimal Cartan. There is a unique symmetric invariant nondegenerate bilinear form on $\mathfrak g(A)$ whose Cartan restriction satisfies $(h_i,h)=\alpha_i(h)/d_i$ and $(\mathfrak h^{\prime\prime},\mathfrak h^{\prime\prime})=0$. It satisfies $(e_i,f_j)=\delta_{ij}/d_i$ and $(\mathfrak g_\alpha,\mathfrak g_\beta)=0$ if $\alpha+\beta\ne0$. Opposite root spaces pair perfectly. For $\nu(h)=(h,\cdot)$, one has $(\alpha_i,\alpha_j)=d_i a_{ij}$ on $\mathfrak h^*$ and $[x,y]=(x,y)\nu^{-1}(\alpha)$ for $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_{-\alpha}$.

Source locator: Lemma 2.2.1 and Theorem 2.2.3, pp.28–32; complete height induction and zero-height invariance. Dependencies: def-symmetrizable-generalized-cartan-matrix, prop-kac-moody-root-spaces-are-finite-dimensional, lem-kac-moody-opposite-simple-centralizer-vanishes. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-kac-moody-category-o`

Claim/conventions: A $\mathfrak g(A)$-module is a **weight module** if $V=\bigoplus_{\mu\in\mathfrak h^*}V_\mu$, where $V_\mu=\{v:hv=\mu(h)v\text{ for every }h\in\mathfrak h\}$. The category $\mathcal O$ consists of weight modules with finite-dimensional weight spaces and support in a finite union $\bigcup_{j=1}^s(\lambda_j-Q^+)$. Morphisms are $\mathfrak g$-linear maps. No finite generation or finite length is included in this convention.

Source locator: §9.1, pp.116–118. Dependencies: prop-kac-moody-root-spaces-are-finite-dimensional, def-kac-moody-root-lattice-height-and-positive-cone. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-kac-moody-verma-module`

Claim/conventions: For $\lambda\in\mathfrak h^*$ let $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ and let $\mathbb C_\lambda$ be the one-dimensional $\mathfrak b$-module with $hv=\lambda(h)v$ and $\mathfrak n^+v=0$. Define $M_A(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$. Define $\widetilde M(\lambda)$ in the same way for $\widetilde{\mathfrak g}$ and its positive Borel.

Source locator: §9.1, pp.116–117; local countable PBW verification. Dependencies: def-kac-moody-category-o, lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-generalized-casimir-on-restricted-kac-moody-modules`

Claim/conventions: Assume $A$ is symmetrizable and fix the invariant form and $\nu:\mathfrak h\to\mathfrak h^*$ of [[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]. A module $V$ is **restricted** if, for every $v\in V$, $\mathfrak g_\alpha v=0$ for all but finitely many positive roots $\alpha$. Fix $\rho\in\mathfrak h^*$ with $\rho(h_i)=1$. For dual Cartan bases $(u_a),(u^a)$ and opposite-root dual bases $(x_{\alpha,s}),(y_{\alpha,s})$, with $x$ positive and $y$ negative, define on $V$ the operator $\Omega=2\nu^{-1}(\rho)+\sum_a u_a u^a+2\sum_{\alpha>0,s}y_{\alpha,s}x_{\alpha,s}$.

Source locator: Definition 2.3.3 and equations (2.18)–(2.20), pp.33–34. Dependencies: thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-kac-moody-root-spaces-are-finite-dimensional, def-universal-enveloping-algebra-as-a-tensor-quotient. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules`

Claim/conventions: On every restricted module for a symmetrizable $\mathfrak g(A)$, $\Omega$ commutes with the action of $\mathfrak g$. If $v$ is a highest vector of weight $\lambda$, then $\Omega v=(\lambda+2\rho,\lambda)v$. If $v$ generates the module, $\Omega$ is this scalar on the whole module.

Source locator: Lemma 2.3.1, Theorem 2.3.5 and Corollary 2.3.6, pp.32–36. Dependencies: def-generalized-casimir-on-restricted-kac-moody-modules, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors`

Claim/conventions: A nonzero weight vector $v\in V$ is **primitive** if its class is a nonzero highest vector in $V/N$ for some submodule $N$. Every $V\in\mathcal O$ is spanned by $U(\mathfrak n^-)$ applied to its primitive vectors. For a nonzero weight vector, failure of primitivity is equivalent to $v\in U(\mathfrak n^-)U_0(\mathfrak n^+)v$, where $U_0$ denotes the augmentation ideal.

Source locator: Lemma 9.1.3 and preceding primitive-vector definition, pp.117–118. Dependencies: def-kac-moody-category-o, def-kac-moody-verma-module, lem-pbw-for-countably-presented-kac-moody-lie-algebras. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-enveloping-quotient-kernels-and-augmentation-intersections`

Claim/conventions: For countably based complex Lie algebras with supplied compatible bases, a surjection $\theta:L\to L/R$ with ideal kernel $R$ induces $\ker U(\theta)=RU(L)$. For any subalgebra $R\subset L$ with such a compatible basis, $R\cap RU_0(L)=[R,R]$. Here $U_0(L)$ is the kernel of the augmentation $U(L)\to\mathbb C$. These hypotheses hold for the homogeneous subalgebras used in this page by finite-degree elimination.

Source locator: Lemmas 9.3.1–9.3.3, pp.122–124; corrected left U(R)-module proof for Lemma 9.3.3. Dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint`

Claim/conventions: For symmetrizable $A$, the adjoint relation module $\mathfrak r^-/[\mathfrak r^-,\mathfrak r^-]$ embeds as a $\mathfrak g$-module in $\bigoplus_i M_A(-\alpha_i)$. Each $\mathfrak r^\pm$ is generated as an ideal of $\widetilde{\mathfrak n}^\pm$ by its homogeneous spaces of degrees $\pm\alpha$, where $\alpha\in Q^+\setminus(\{0\}\cup\Pi)$ and $(\alpha,\alpha)=2(\rho,\alpha)$.

Source locator: Proposition 9.3.4, pp.124–125; corrected associative last-letter coefficients and augmentation proof. Dependencies: lem-enveloping-quotient-kernels-and-augmentation-intersections, lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors, thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules, prop-contragredient-algebra-has-a-triangular-decomposition, def-kac-moody-verma-module. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel`

Claim/conventions: For symmetrizable $A$, let $\overline{\mathfrak g}$ be the quotient of $\widetilde{\mathfrak g}$ by the ideal generated by both families of Serre elements. The natural surjection $\overline{\mathfrak g}\to\mathfrak g(A)$ has zero kernel. Before this identification, finite adjoint exponentials on $\overline{\mathfrak g}$ implement simple reflections and preserve the root multiplicities of its kernel.

Source locator: Theorem 9.3.5, pp.125–126; direct Serre-quotient exponential construction from §3.2. Dependencies: lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint, lem-serre-elements-vanish-before-serre-generation, def-simple-reflections-and-the-kac-moody-weyl-group, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `thm-serre-presentation-of-a-kac-moody-algebra`

Claim/conventions: For a finite symmetrizable GCM over $\mathbb C$, $\mathfrak r^\pm$ is the ideal of the free half $\widetilde{\mathfrak n}^\pm$ generated by $(\operatorname{ad}e_i)^{1-a_{ij}}e_j$ or $(\operatorname{ad}f_i)^{1-a_{ij}}f_j$, respectively, for $i\ne j$. Hence $\mathfrak g(A)$ has exactly the Cartan relations and both Serre families as a presentation. Its halves have the corresponding separate Serre presentations, and multiplication gives the vector-space isomorphism $U(\mathfrak n^-)\otimes U(\mathfrak h)\otimes U(\mathfrak n^+)\cong U(\mathfrak g)$.

Source locator: Theorem 9.3.5, pp.125–126; half-ideal and PBW consequences. Dependencies: lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel, lem-pbw-for-countably-presented-kac-moody-lie-algebras. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `def-real-and-imaginary-kac-moody-roots`

Claim/conventions: For the root system of $\mathfrak g(A)$, define $\Delta^{\mathrm{re}}=W\Pi$, where $\Pi=\{\alpha_1,\ldots,\alpha_n\}$. Define $\Delta^{\mathrm{im}}=\Delta\setminus\Delta^{\mathrm{re}}$. These are the **real** and **imaginary** roots. Each inherits its positive or negative sign from $\Delta\subset Q^+\cup(-Q^+)$.

Source locator: §5.1, pp.68–69, and §5.3, pp.73–74. Dependencies: prop-the-weyl-group-preserves-roots-and-root-multiplicities. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-real-root-spaces-are-one-dimensional-sl2-roots`

Claim/conventions: Every real root $\alpha$ has a one-dimensional root space and an $\mathfrak{sl}_2$ triple $(e_\alpha,h_\alpha,f_\alpha)$ in degrees $\alpha,0,-\alpha$. The only roots on $\mathbb C\alpha$ are $\pm\alpha$. The coroot $h_\alpha$ is independent of the transporting Weyl word and simple root when normalized by $\alpha(h_\alpha)=2$.

Source locator: §5.1, pp.68–69, with §3.2 transport. Dependencies: def-real-and-imaginary-kac-moody-roots, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-strict-linear-alternative-for-gcm-trichotomy`

Claim/conventions: For a finite list $v_1,\ldots,v_m\in\mathbb R^n$, there exists $x$ with $v_i\cdot x>0$ for every $i$ if and only if $\sum_i t_i v_i=0$, $t_i\ge0$, implies all $t_i=0$. Consequently, if a real $m\times n$ matrix $C$ satisfies $u\ge0$ and $C^tu\ge0\Rightarrow u=0$, then there is $v>0$ with $Cv<0$. Coordinatewise strict inequalities on an empty coordinate list are vacuous.

Source locator: Lemma 4.1.4 and Proposition 4.1.5, pp.51–52; minimum taken directly on the coefficient simplex. Dependencies: thm-euclidean-heine-borel-pseudocompactness-and-extreme-values. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`

Claim/conventions: For an indecomposable GCM $A$, exactly one of the following clauses holds and defines its type (inequalities are coordinatewise over $\mathbb R$):

- **Finite:** $\det A\ne0$, some $u>0$ has $Au>0$, and $Ax\ge0$ implies $x>0$ or $x=0$.
- **Affine:** $\operatorname{corank}A=1$, some $u>0$ has $Au=0$, and $Ax\ge0$ implies $Ax=0$. Equivalently $K_A=\{x:Ax\ge0\}=\ker A=\mathbb Ru$; its positive null ray is unique.
- **Indefinite:** some $u>0$ has $Au<0$, and $x\ge0$, $Ax\ge0$ imply $x=0$.

Each type is equivalently characterized by its displayed positive-vector condition alone. The matrices $A$ and $A^t$ have the same type. Finite and affine GCMs are symmetrizable. If $B=DA$ is a symmetric positive-diagonal symmetrization, finite type is equivalent to $B$ being positive definite, affine type to $B$ being positive semidefinite of corank one, and indefinite type to $B$ taking both positive and negative quadratic values. For a decomposable matrix, “finite type” means every indecomposable block is finite type.

Source locator: Definition 4.1.1, Lemmas 4.1.6–4.1.7, Theorem 4.1.12, Lemma 4.1.13, Lemma 4.2.2 and Theorem 4.2.3, pp.50–60; direct quadratic expansion replaces spectral theory. Dependencies: def-generalized-cartan-matrix, def-symmetrizable-generalized-cartan-matrix, lem-strict-linear-alternative-for-gcm-trichotomy. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-finite-type-kac-moody-roots-descend-to-simple-roots`

Claim/conventions: For a finite-type GCM (all indecomposable blocks finite), every root is Weyl-conjugate to a simple root. There are finitely many roots, every root space is one-dimensional, and $\dim\mathfrak g(A)=n+|\Delta|<\infty$.

Source locator: Proposition 4.3.2, pp.63–64; local height descent and explicit dual-basis lattice bound. Dependencies: thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional, prop-real-root-spaces-are-one-dimensional-sl2-roots. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `lem-nonsingular-indecomposable-kac-moody-algebras-are-simple`

Claim/conventions: If $A$ is an indecomposable GCM with $\det A\ne0$, then $\mathfrak g(A)$ is nonabelian and has no nonzero proper Lie ideal. Thus every indecomposable finite-type component is simple. Here an ideal $J$ is a linear subspace with $[\mathfrak g,J]\subset J$, and “simple” includes nonabelianity.

Source locator: Proposition 1.4.8(i), pp.19–20; direct ideal propagation. Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional, prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, def-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`

Claim/conventions: For a finite-type GCM $A$ over $\mathbb C$, $\mathfrak g(A)$ is finite-dimensional and is a direct sum of nonabelian simple Lie algebras, one for each indecomposable component (thus semisimple). Its simple-root/coroot matrix is $A$, with rows indexing coroots. Intrinsically it is the universal Lie algebra on its minimal Cartan and Chevalley generators subject to the Cartan relations and both Serre families. No external Dynkin classification or separately constructed finite-type model is assumed.

Source locator: Propositions 1.4.3, 1.4.8(i), 4.3.2, pp.17–20 and 63–64; local inverse generator maps. Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, lem-finite-type-kac-moody-roots-descend-to-simple-roots, lem-nonsingular-indecomposable-kac-moody-algebras-are-simple. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `ex-rank-one-gcm-recovers-sl2`

Claim/conventions: For $A=(2)$, the minimal Cartan is $\mathbb Ch$ with $\alpha(h)=2$, and $\mathfrak g(A)\cong\mathfrak{sl}_2(\mathbb C)$.

Source locator: Example 1.5.2, pp.20–21; explicit 2×2 computation. Dependencies: thm-serre-presentation-of-a-kac-moody-algebra. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `ex-the-a2-serre-relations`

Claim/conventions: For $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, the positive Serre relations are $[e_1,[e_1,e_2]]=0$ and $[e_2,[e_2,e_1]]=0$, with the two analogous negative relations. The algebra is $\mathfrak{sl}_3(\mathbb C)$ and its six roots are $\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)$.

Source locator: Example 1.5.2, pp.20–21; complete A2 matrix calculation. Dependencies: thm-serre-presentation-of-a-kac-moody-algebra. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data`

Claim/conventions: The GCM $A=\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$ has rank one and requires a three-dimensional minimal Cartan. On a basis $h_0,h_1,d$, take simple-root coordinates $\alpha_0=(2,-2,1)$ and $\alpha_1=(-2,2,0)$.

Source locator: Example 1.2.3 and Proposition 1.2.4, pp.10–12; affine A1 data in Example 1.5.4, pp.23–24. Dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `ex-a-symmetrizable-indefinite-rank-two-gcm`

Claim/conventions: The symmetric GCM $A=\begin{pmatrix}2&-3\\-3&2\end{pmatrix}$ is indefinite. The nonzero vector $[e_1,e_2]$ has imaginary root $\beta=\alpha_1+\alpha_2$ with squared length $-2$ for $D=I$.

Source locator: §4.1 and Theorem 9.3.5, pp.50–57 and 125–126; local degree-(1,1) calculation. Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm`

Claim/conventions: False claim: every integer matrix with diagonal entries 2 and nonpositive off-diagonal entries is a GCM.

Source locator: . Dependencies: def-generalized-cartan-matrix. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Authored checkpoint: `cex-imaginary-root-spaces-need-not-have-multiplicity-one`

Claim/conventions: False claim: every root space of a Kac–Moody algebra has dimension one. For the affine matrix $A=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$, each $m\delta$, $m\in\mathbb Z\setminus\{0\}$, is an imaginary root of multiplicity two, where $\delta=\alpha_0+\alpha_1+\alpha_2$.

Source locator: Proposition 1.5.1, Lemma 1.5.3 and Example 1.5.4, pp.20–25; fully computed loop-sl3 adaptation. Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Completed argument and step-specific contract written; structural checks pending. No scope change. Next: next manifest item and final required checks.

### Final Step-5 checkpoint

All 39 assigned items and both pages are authored. The per-item checkpoints above record the exact claims, conventions, source locators and inputs; their pending-check/next-item statements are superseded by this checkpoint. Canonical phase numbering and independent-step ordering have been applied, with all contract uses, inputs and boundary evidence mapped to the resulting steps. Nested Lie brackets were spaced to avoid accidental wikilinks. The invariant-form radical argument explicitly treats both signs using the two centralizer clauses.

Completed page IDs:
- `kac-moody-algebras-from-generalized-cartan-matrices` at `library/lie-theory/kac-moody-algebras-from-generalized-cartan-matrices.md`.
- `kac-moody-algebras-from-generalized-cartan-matrices-examples` at `library/lie-theory/kac-moody-algebras-from-generalized-cartan-matrices-examples.md`.

Completed item IDs:
- `def-generalized-cartan-matrix`
- `def-symmetrizable-generalized-cartan-matrix`
- `def-realization-of-a-generalized-cartan-matrix`
- `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`
- `def-kac-moody-root-lattice-height-and-positive-cone`
- `lem-pbw-for-countably-presented-kac-moody-lie-algebras`
- `lem-free-lie-construction-for-finite-kac-moody-generators`
- `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`
- `prop-contragredient-algebra-has-a-triangular-decomposition`
- `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h`
- `def-kac-moody-algebra-associated-to-a-gcm`
- `prop-kac-moody-root-spaces-are-finite-dimensional`
- `lem-kac-moody-opposite-simple-centralizer-vanishes`
- `lem-serre-elements-vanish-before-serre-generation`
- `def-simple-reflections-and-the-kac-moody-weyl-group`
- `prop-the-weyl-group-preserves-roots-and-root-multiplicities`
- `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`
- `def-kac-moody-category-o`
- `def-kac-moody-verma-module`
- `def-generalized-casimir-on-restricted-kac-moody-modules`
- `thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules`
- `lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors`
- `lem-enveloping-quotient-kernels-and-augmentation-intersections`
- `lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint`
- `lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel`
- `thm-serre-presentation-of-a-kac-moody-algebra`
- `def-real-and-imaginary-kac-moody-roots`
- `prop-real-root-spaces-are-one-dimensional-sl2-roots`
- `lem-strict-linear-alternative-for-gcm-trichotomy`
- `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`
- `lem-finite-type-kac-moody-roots-descend-to-simple-roots`
- `lem-nonsingular-indecomposable-kac-moody-algebras-are-simple`
- `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`
- `ex-rank-one-gcm-recovers-sl2`
- `ex-the-a2-serre-relations`
- `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data`
- `ex-a-symmetrizable-indefinite-rank-two-gcm`
- `cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm`
- `cex-imaginary-root-spaces-need-not-have-multiplicity-one`

Checks actually run:
- `node tools/tsx-run.mjs tools/precheck.mts` with every explicit manifest item path: canonical repairs applied and rerun; 28 proof-bearing items checked, 0 failing. Eleven definitions have no proof-strategy check.
- Bare `node tools/validate-plan.mjs`: printed usage because a plan argument is required. Correct invocation `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; no item cycles, unresolved IDs or ordering errors in item-listed pages. Global redundant-prerequisite advisories remain; no plans were edited.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-11.pages.json`: 39 scoped items, 0 errors, 0 warnings, after block-YAML provenance repair.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-11.proof-contracts.json --strict`: 39/39 checked, 0 errors, 0 warnings after canonical reference repair.
- `node tools/rendercheck.mjs` with the explicit 39 item and 2 page paths: all 41 pass, including real KaTeX and renderer YAML parsing.
- Consumer dependency input revalidated: no other-batch page prerequisites or item uses in this run, so the existing empty array remains accurate. The Casimir definition proves well-definedness locally; its subsequent centrality result is an ordinary same-page reference in Remarks, not a well-definedness justification. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` after that metadata repair; refresh succeeded.

Provenance: 38 literature-derived statements retain their source attribution; definition proofs are not-applicable and authored arguments ai-altered. The asymmetric-zero matrix counterexample is a generated statement/proof with generation role counterexample, and is not used as a dependency target. Its blank source locator in the earlier checkpoint means no external existence claim was borrowed: its explicit matrix calculation supplies the witness. Kleshchev passages were read from the recovered complete PDF text in bounded sections and compared at the numbered locators recorded above; the author-hosted URL was searched but a fresh direct open timed out. Perrin section 4.2 was checked against the institutional PDF, and its source URL is recorded on the two items comparing his centralizer/Serre arguments.

Mathematical/scope obligations: no unfinished proof or proposed narrowing remains in this batch. The intrinsic finite-type result follows the latest assigned manifest and Step-3 adjudication; it does not claim an unprovided external Dynkin-classification/model equivalence. Singular Cartan forms, both Serre families, the augmentation intersection, the relation-module Casimir constraint, trichotomy, and the full affine multiplicity-two witness are retained. Structural and rendering checks are not mathematical certification; the completed arguments and evidence contracts are ready for the independent next stage. No judge or publication stamps were written.
