# Batch 15 Step 5a adjudication

Run: `frontier-38-owner-30`; group: `batch-15`. Scope: batch 15 only. Review follows the generated dependency order. Reader/refuter reports and pre/post item/contract hashes were read; all 28 initial current items match post-reader raw hashes. No reader findings; one refuter title finding. No judge, stamp, dispatch or stage transition is authorized.

## Completed level 0 review

- `def-standard-meridians-of-a-punctured-disk`: Checked finite positive minimum (including n=0 and n=1), disjoint closed disks, tether contact, radial independence and positive meridian convention against the four declared definitions. Ordinary function composition agrees with the mapping-class supplier. Reader clarified composition prose; no map, hypothesis or convention changes.

- `lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies`: Reviewed all five steps and all six supplier statements. Continuous square-root lift produces a Jordan double; homology naturality excludes preserving a complementary disk; prescribed equivariant disk extensions descend through z squared. Compactly supported small translations are homeomorphisms by Banach and avoid the slit; restoring infinity and extending the inverse parameter gives the asserted plane map. Endpoint modulus convergence and AC at the relative Schoenflies extensions are explicit. Thomassen Theorem 3.1 consulted; the arc derivation is local, not attributed to that theorem.

- `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`: Reviewed all five steps and eight exact supplier statements. On the compact moving core the track embedding extends its velocity; AC_omega supplies field extension and cutoff, supported away from boundary, P and C. Stationary endpoint collars have zero track velocity, including interior marked endpoints. Compact support supplies global flow and uniqueness realizes the given parametrized arcs and fixes required sets. Contract-only reader correction replaces obsolete endpoint-segment evidence with actual velocity construction; current item is byte-identical pre/post.

All dependency levels and the page obligation are now complete. Final results and limitations are recorded below.

## `def-peripheral-boundary-preserving-automorphism-of-f-n`

Pre/post raw hashes differ and current equals post. Reviewed definition and all four suppliers. The abelianized basis permutation is forced by invertibility; centralizer of a basis letter follows directly from reduced words. The rank>=2 qualification is necessary: rank1 peripheral implies boundary fixing. Transposition preserves positive conjugacy classes but changes the noncommuting product; the displayed involution squares to identity, fixes x1x2 and has negative first abelianized image. Both independence directions are sound; definition and downstream characterization use unchanged conditions.

Verdict: accepted_repair.

## `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`

Reviewed every proof step and all fourteen supplier statements. Radial puncture evacuation fixes the compact flower; finite straight-tether/circular-hole polygonization supplies a compact cut disk without general Schoenflies. Retraction fixes all paired shores and descends via a compact quotient. Tether-tree collapse is based, giving actual wedge generators; the locally finite reduced-word covering tree contracts and sphere lifting proves higher homotopy vanishes. n=0 contracts the disk to d; no arbitrary choice is consumed.

Verdict: risk review complete; no routed decision.

## `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk`

Reviewed six proof steps and all four supplier statements. Collapsing the zero-radius rectangle edge produces each compact slit tip; finite disks attached along boundary intervals give a disk with n+1 basepoint sectors. The quotient fills precisely Q_n and deleting tips restores the punctured surface. Boundary-fixed orientation preserves each slit side, continuity extends the lift at tips, and compact product quotients descend isotopies uniformly at tips. n=0 is the uncut disk; AC is declared for relative Schoenflies.

Verdict: risk review complete; no routed decision.

## `lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity`

Reviewed three steps and all eight declared supplier statements. Based deformation retraction plus based tether-tree collapse gives inverse equivalences a,b to a genuine finite wedge. g=afb fixes each generator, and finitely many endpoint-fixed loop homotopies paste on the finite wedge. Composing with ba gives f homotopic to identity rel d. n=0 is based contraction; no extension to puncture ends is claimed and finite choice suffices.

Verdict: risk review complete; no routed decision.

## `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`

Item bytes equal both pre and post; only contract evidence changed. Reviewed all seven steps and twelve supplier statements, Primer pp31-38 including complete Lemma1.8 and both bigon proofs. Finite relative graph straightening and diffeomorphic representatives avoid an assumed topological isotopy-extension theorem; endpoint polar normalization stays compactly continuous. Innermost ordinary bigons use actual covering points; endpoint-sector bigons fill only that endpoint before applying Brouwer. No half-bigon between different fixed boundary endpoints is removed. Each move reduces the finite intersection number; final puncture-free disk and interval reparametrization give isotopy. Coincident endpoints assert only unoriented images, with orientation counterexample explicit. AC covers plane-arc/Schoenflies and smooth-motion suppliers.

Verdict: reviewed_no_defect.

## `lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians`

Reviewed three steps and six supplier statements. In compact cut disk, complementary paths A and P with the same endpoints are homotopic. P runs opposite the inner-boundary orientation, yielding positive circles, and left-to-right tether order gives x1...xn. Compact quotient gives a based homotopy in X. Empty product contracts for n=0; annulus sign agrees for n=1. Finite choice only, using choice-free flower cut.

Verdict: risk review complete; no routed decision.

## `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`

Reviewed five steps and all six suppliers. Based flower retraction induces inverse fundamental-group isomorphisms; finite tree collapse gives a free basis. Universal property identifies the map with the basis isomorphism, including the empty free group and disk contraction at n=0. No extra asphericity or AC premise is used.

Verdict: risk review complete; no routed decision.

## `def-artin-automorphisms-of-the-free-group`

Current equals post and differs from pre by reader composition-order clarification. Reviewed definition and four supplier statements; substituting both displayed inverses gives identity on every free generator. Ordinary function composition is consistent with fundamental-group functoriality. Artin printed p113 has inverse generator convention; the subgroup is unchanged by inversion. Empty/singleton ranks have no adjacent generators. No mathematical map or condition changed.

Verdict: reviewed_no_defect.

## `lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy`

Current equals post and differs from pre; reader repaired step3.1 domain. Reviewed seven steps and all eight suppliers. Completed earlier tips are boundary points of Y and cannot map into X; deleting them gives Y0, with boundary collar pushes inducing a based pi1 isomorphism. Remaining lassos map to the independent subgroup generated by xk,...,xn, so peripheral path equality transports across the partial cut. Compact radial tail interpolation absorbs endpoint winding. Ambient bigon moves fix earlier shores and descend; final paired-shore interval interpolation corrects every parametrization. AC is carried; n=0 is vacuous. Statement unchanged, so no consumer statement propagation.

Verdict: accepted_repair.

## `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`

Confirmed refuter title mismatch. Statement and proof4.1 promise only compact relative-endpoint homotopy without AC; title said isotopy. Renamed title to homotopy, retaining stable ID, Statement and proof. Reviewed all five steps and five suppliers: abelianization fixes punctures; reduced-word centralizer forces peripheral tether power; polar interpolation kills that power only at the filled endpoint with uniform radial convergence. No meridian is contracted in X. General arc-isotopy remains separate under AC. Only title changes, so actual homotopy consumers retain their claims and hypotheses.

Verdict: confirmed_fatal.

## `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity`

Item bytes unchanged pre/post; contract-only anchoring enrichment. Reviewed all five steps and eleven supplier statements. Purity follows from meridian abelianization. Filling last puncture surjects on pi1; explicit order-preserving configuration transport makes induction apply to the actual truncation. Point-pushing kernel supplies inverse endpoint k; its compact tether square in Z has boundary s gamma (ks)^-1. Compact endpoint homotopy ks~s makes gamma null, and collar compression returns the nullhomotopy to the interior. n=0 Alexander and n=1 contractible configuration establish bases. AC is carried through mapping-class and point-motion suppliers; no general arc-isotopy premise is used.

Verdict: reviewed_no_defect.

## `lem-artin-automorphisms-satisfy-the-braid-relations`

Current equals post and differs from pre. Reader's former far-composite claim of fixing every basis letter is false; disjoint supports instead make both composites agree on the moved pairs. All displayed adjacent triple images independently substituted and reduced; the corrected middle-letter explanation is exact, and the false outer-letter-swap remark is gone. Reviewed all five steps and three suppliers. Relations and substitutions unchanged; no choice or consumer statement impact.

Verdict: accepted_repair.

## `lem-artins-product-cancellation-dichotomy`

Current equals post and differs from pre. Reviewed three steps and four suppliers plus Artin printed p114 complete cancellation split. Until first middle deletion each original reduced factor retains a nonempty interval, so first deletion must occur at original neighboring junction; other-side deletions cannot reach through the surviving middle. No-middle case forces all conjugators empty from the left end and permutation identity. At selected least junction actual deletion, rather than exposure, yields reduced V=RaU or U=Rb^-1V; positive middles cannot cancel each other. Includes n=0,1. Statement repairs are used exactly by the shortening supplier and induction theorem, both owned; outside consumers will be checked.

Verdict: accepted_repair.

## `ex-the-artin-action-of-the-b-three-generators`

Item bytes unchanged pre/post; contract-only evidence update. Reviewed its four proof steps and sole substitution supplier. Table and both rightmost-first triple composites freely reduce to (x1x2x3x2^-1x1^-1,x1x2x1^-1,x1), proving equality on the basis. No mathematical correction needed.

Verdict: reviewed_no_defect.

## `lem-an-extremal-cancellation-shortens-an-artin-substitution`

Current equals post and differs from pre. Reviewed all three proof steps and all three suppliers, plus Artin pp114-115 both length reductions. For V=RaU, A circ s changes images to TiTi+1Ti^-1,Ti, whose conjugators red(RU),U save at least one letter. For U=Rb^-1V, A circ s^-1 gives Ti+1,Ti+1^-1TiTi+1, with V,red(RV) saving at least one letter. Source-basis composition, rather than applying a substitution to all target words, is essential in both branches. Positive peripheral classes swap, exact adjacent product stays fixed, and inverse recovery has the opposite sign. Minimal total length strictly decreases; choice-free and no later supplier is presumed.

Verdict: accepted_repair.

## `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word`

Item bytes unchanged pre/post. Reviewed four steps and six suppliers. Each generator and inverse carries positive meridian classes to positive meridian classes and fixes adjacent product; composition preserves both. Inverse permutation follows from abelianization invertibility and the rearranged conjugator formula. Finite word induction, empty words and n=0,1 are sound; boundary-word interpretation uses the choice-free compact-cut lemma. Contract enrichment adds exact evidence only.

Verdict: reviewed_no_defect.

## `prop-the-geometric-action-on-meridians-is-the-artin-representation`

Item bytes unchanged pre/post. Reviewed six steps and eleven suppliers, including actual supported anticlockwise half-rotation formula. Downward straight slit read-off contracts segments in the cut holed disk. Right upper tether has angle in (0,pi/2); adding pi chi prevents crossing the right downward slit, so its lasso maps to xi regardless of xi-power tether winding. Other stems miss support by distance >=3h*4/sqrt17>3h/2. Exact boundary-product invariance then forces left image xi xi+1 xi^-1. Functoriality and generation identify the two homomorphisms, including vacuous small ranks. AC declared; contract evidence alone changed.

Verdict: reviewed_no_defect.

## `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`

Current equals post and differs from pre. Reviewed all six steps and eight suppliers plus Artin complete pp114-115 argument and Gonzalez-Meneses Theorem1.3. Minimal total conjugator length exists in nonnegative integers; minimal conjugators make each displayed conjugacy internally reduced. Positive length forces a qualifying junction, shortening gives ell(A')<=ell(A)-1, and inverse recovery gives A=rho(beta' sigma_i^epsilon). Empty and singleton cases yield identity. Updated F2/F3 and induction now consume precisely the corrected two-case source-basis reductions; subset remark requires generators corresponding to retained ends. Main Statement unchanged and no AC used.

Verdict: accepted_repair.

## `cex-the-induced-permutation-does-not-determine-a-braid`

Item bytes unchanged pre/post. Reviewed four steps and six suppliers. sigma1 squared acts on x1 by reduced length-five word x1x2x1x2^-1x1^-1, different from x1. A well-defined homomorphism alone implies braid nonidentity; faithfulness is unnecessary. Transposition squared is identity, so both braids have identical endpoint permutation. Choice-free; contract enrichment only.

Verdict: reviewed_no_defect.

## `ex-the-full-twist-acts-by-boundary-conjugation`

Item bytes unchanged pre/post. Reviewed five steps and six suppliers. Rightmost-first U cycles generator indices with common conjugation by x1, and U(delta_m)=delta_(m+1)x1^-1 for m<n. Substitution in induction gives U^m(xk)=delta_m x_(k plus m) delta_m^-1, so U^n is conjugation by delta with the displayed positive sign. n=1 reduces to identity conjugation; n=0 conclusion has no generators and no modular index is evaluated. Contract-only anchoring update; all algebra is choice-free.

Verdict: reviewed_no_defect.

## `thm-the-artin-representation-is-faithful`

Reviewed five steps and all eight supplier statements. Identity Artin action becomes identity based pi1 action under geometric identification; the point-pushing homeomorphism lemma gives identity mapping class. Injectivity of mapping-class identification and independent geometric-presentation completeness then give trivial abstract braid. n=1 is a trivial presented group; n=0 excluded in this supplier and handled directly by consumers. AC hypotheses are present at each geometric input; no circular reliance on Artin faithfulness in the completeness supplier was asserted.

Verdict: risk review complete; no routed decision.

## `cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin`

Reviewed four steps and five suppliers. Basis transposition is an involutive free-group automorphism, preserves positive peripheral classes, and changes the reduced ordered product at every n>=2. Necessity excludes it from braid image without faithfulness or AC. For n=2 the changed product is conjugate but not equal; at n>=3 its cyclic word is not the original one. The separate reverse independence witness is explicitly available in the cited peripheral definition. No edit required.

Verdict: risk review complete; no routed decision.

## `cor-the-artin-action-solves-the-braid-word-problem`

Item bytes unchanged pre/post. Reviewed three steps and seven suppliers. Forward implication is well-definedness; reverse implication uses equality on a free basis then faithfulness of rho(beta1 beta2^-1). Finite substitutions and stack free-reduction halt, allowing comparison of 2n images. At n=0,1 both braid groups are trivial directly, so no out-of-range faithfulness premise is needed. AC only through faithfulness; actual computation uses none. Contract-only update.

Verdict: reviewed_no_defect.

## `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`

Current equals post and differs from pre. Reviewed five steps and six suppliers: choice-free necessity and sufficiency give image equality; AC faithfulness gives uniqueness of a braid element, not uniqueness of a spelling. n=0,1 conditions force identity and trivial braid group directly. Reader's rank>=2 restriction repairs the formerly unqualified independence remark, matching definition's witnesses and excluding rank1 where the two conditions coincide. Main statement unchanged; contract correctly charges uniqueness to AC.

Verdict: accepted_repair.

## Page obligation

Reviewed complete current A-page prose and all 24 placed item claims. Pre/post page hashes differ; current equals post. Reader replaces stale general arc/smoothing faithfulness descriptions with actual point-pushing induction and compact tether-square argument, charges its AC correctly, and separates choice-free basis/boundary/cancellation arguments from general arc lemmas. Ordinary composition, positive half-twist inverse source convention, source-basis shortening and full-twist positive conjugation agree with current carriers. Placement, requires and IDs unchanged. Verdict: accepted_repair.

## Dependency impact and publication

The reader changed the cancellation dichotomy and shortening Statements. Searches across current item and page files found only the owned shortening lemma and sufficiency theorem as item consumers; their exact F1-F3 and induction uses have been reviewed above. The sufficiency theorem's Statement is unchanged, so propagation stops there. Definition composition clarifications preserve the actual maps; peripheral independence repairs concern Remarks only. The Alpha title correction leaves Statement and Definition unchanged and keeps its stable ID. No affected outside-batch consumer, proposed withdrawal, or defective published supplier was identified in this review; no published carrier was edited. The owned cross-batch input is empty and remains valid.

## Sources and review limits

Read the complete relevant source arguments: [Artin, Theory of Braids](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf), printed pp. 113-115, generator equations (14)-(15), complete cancellation cases and Theorem 16; [Gonzalez-Meneses](https://arxiv.org/pdf/1010.0321), sections 1.6-1.6.1, printed pp. 8-10, basis/action, exact positive-generator and ordered-product characterization, and effective basis-image comparison; [Farb-Margalit author draft](https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf), printed pp. 31-38, complete Lemma 1.8, both bigon proofs, Proposition 1.10 proof, smooth extension discussion and arc/half-bigon qualifications; [Thomassen](https://people.math.wisc.edu/~dymarz/751/thomass.pdf), Theorem 3.1 and complete proof, printed pp. 123-125, visually read from the scanned PDF. Artin, Primer and Thomassen were directly fetched after web-tool PDF failures for Artin and Thomassen. Failed retrievals supplied no mathematical evidence.

All 28 current batch items and all declared external supplier statements were reviewed; selected supplier proof clauses were checked for the supported half rotation and local geometric constructions. This is not an exhaustive re-audit of published transitive suppliers. The pre/post snapshots contain hashes rather than full text; accepted deltas are identified by those hashes, the reader's exact descriptions and the reviewed post-content, without claiming access to an unavailable historical full carrier. Metadata/audit-enrichment verdicts do not close any mathematical finding. No owner resolution, escalation, judge, hash stamp, independent certification or engine gate is claimed.

## Final local validation and handoff

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy.md`: exit 0.
- The same explicit path passed `tools/precheck.mts`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy.md`: exit 0; valid YAML and KaTeX.
- After final item edits and formatter, `node tools/proof-layout.mjs items/lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy.md`: exit 0; 1 item, 5 steps, 0 defects. This is the complete batch of Alpha-changed item paths.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json --strict`: exit 0; 28/28 items, 0 errors and 0 warnings, including a final check after reflow.
- `node tools/boundary-audit.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json --fail-on-contradicted`: exit 0; 224 rows, no detector contradictions or template clusters.
- Initial `node tools/risk-report.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json` and final run with `--require-reviewed`: both exit 0. All 25 HIGH/CRITICAL carriers have item-specific complete risk reviews.
- Exact obligation comparison: 20 entries, no missing, duplicate or extra obligations; all 9 referenced mathematical defect rows are closed at `5a-adjudicate`. Metadata and audit-enrichment entries use empty defect IDs. Batch and consolidated contracts agree for all 28 owned entries. The title is synchronized in the owning batch manifest.

The only Alpha-changed item is the title carrier, with current raw SHA256 `069ef58ffc2e6d161bfa05c7c7fce8666152c823a05c479fb74815127a1c38b7`. Other item bytes still equal post-reader snapshots. The A-page remains at post-reader raw SHA256 `6d741223f8dd6b6a493fe7a92adea365867972c2f676c1af6ffd8bd3e2e26589`. These are recorded file observations, not engine decision stamps.

Blockers: none identified. No further local repair or cross-group alert is pending. Handoff: the engine owns decision hash stamping, the gate battery and Step 5b routing.

Live status was recomputed from `.autopilot/frontier-38-owner-30` at handoff: run running in Step 5a. It reports a separate `5a-split` failure for batch 26 (three attempts), outside this dispatch; no intervention or transition was initiated. This does not block the completed batch-15 review.
