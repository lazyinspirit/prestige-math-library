# Batch 9 scaffold evidence — phase-2-catchup-24

Status: **LOCAL FINAL-FINDING REPAIRS INSTALLED — awaiting canonical synchronization and fresh independent recheck; not accepted or published.** Historical findings/checks below retain their dates. The latest bounded owner-authorized reconciliation is recorded at the end; no local mechanical check certifies the complete transitive mathematical closure.

## Authority and current state

Read CLAUDE.md in full as the repository entrypoint, SCHEMA.md, WORKFLOW.md, README.md, briefs/beta-scaffold.md, briefs/tasks/frontier-dependency-ledger.md, the beta-batch task and beta-9 task, both complete assigned design sections, current plan and owned manifests/coverage. Only the three authorized batch-9 files were written. No published content, plan, prose design, other batch, unified ledger, or driver state was modified. Temporary extraction/check artifacts live under /tmp/batch9-sources/ and are not durable handoff evidence.

The driver status command used was `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-catchup-24 --state-dir .autopilot/phase-2-catchup-24`. It reported an active running scaffold stage. Git log included 209eaa2f1 (wave publication), 92b292bfe (EVT repair), and 3a3ced783. No concluded RESUME file was used to infer active state. Other writers have numerous concurrent changes; the plan comparison was repeated against disk after scaffold edits.

## Inventories and design conflicts

The manifest contains 113 items: de Rham A 39/B 12, Riemannian A 50/B 12. Each has an explicit deps array, statement, provenance and references; proof-bearing items have a strategy. Definition well-definedness is linked with justified_by where appropriate (interval operator, musical inverse, density, Hodge star). Both A inventories remain below the 60-item limit. No additional prerequisite pair has yet been identified as necessary; this is not a completed closure certification.

The four page metadata records, including requires and order, match the current plan exactly. De Rham A/B orders are 471/472; Riemannian A/B orders are 477/478. The generated de Rham locator L3876 is within the B inventory, not the beginning of the controlling DG15 design; the complete DG15 section was read. Riemannian L4583 begins DG18, while L4741 is inside its B inventory. They are parts of one controlling design, not alternative designs.

DG15's historical warning that HA packages are unauthored is stale: the chain/cochain, chain-homotopy and long-exact-sequence suppliers are published. The current plan's HA edges control. DG18's final warning that arbitrary volume must await a measure seam conflicts with its item 36 and the current plan's measurable-densities-and-radon-volume-on-manifolds prerequisite. Item 36 is retained with the already published Radon-density suppliers, explicitly separating the Borel measure from its completion. No arbitrary measurable-volume claim is derived merely from smooth compact-support integration.

Scope corrections retained in the statements: local Poincare exactness is positive-degree only; the empty and zero-dimensional cases are explicit; Mayer–Vietoris uses beta minus alpha throughout; pullback is contravariant; the exterior metric is determinant-normalized, not the unnormalized tensor restriction; finite piecewise C1 paths may pause; distance is infinity across components; local-isometry differential equivalence is restricted to boundaryless manifolds; ordinary volume forms and Hodge star require orientation, with determinant-line signs in dimension zero. The design's partition-free Mayer–Vietoris false statement is expressed precisely as an invalid proof recipe omitting surjectivity, not the false assertion that every possible proof must name partitions.

## Source reading and recovery

Two independent treatments are recorded for each A page: Lee's textbook and Hitchin's full lecture notes for de Rham; Lee and Datar's full lecture notes for Riemannian geometry. Exact result locators and included/inline/deferred/out-of-scope dispositions are in coverage. The coverage has 145 harvested/canonical rows. Canonical-scope rows preserve the inventory but are not themselves independent source verification.

* Lee, Introduction to Smooth Manifolds, second edition: recovered complete HTML at https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html . A valid complete local second-edition PDF was extracted using mutool. Read Ch.17 pp.441–447 (definitions, functoriality, H0, interval homotopy and Poincare), pp.449–451 (Mayer–Vietoris and sphere calculation), pp.460–464 (complete MV proof, zigzag statement/sketch, explicit connector and selected problems). Lee's difference convention is the opposite of the local one; both lift signs and connector were changed consistently. Sphere induction locally uses the H0 difference map and does not import the fundamental group argument. Read Ch.13 pp.328–332 and pp.337–342 including the full compact comparison and distance proof and musical/gradient formulas; Ch.15 Props.15.29–15.33 and Cor.15.34 pp.389–391; Ch.16 pp.422–424 through Thm.16.32, pp.428–433 density construction/integration, Thm.16.48 pp.433–434, and Problems16-18–16-22 pp.437–439. Thm.16.48 is recorded out of scope. Intervening unread degree/fundamental-group material is not asserted read.
* Hitchin, Differentiable Manifolds: https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf . Browser returned the complete 94-page PDF. Read complete section6.6 printed pp.50–56, Definitions24–26, Prop.6.6, Thm.6.7, Prop.6.8, Ex.6.9, circle calculation and Thm.6.10. The coverage records the exact support and exclusions.
* Datar, Riemannian Geometry lectures: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf . Browser returned the complete 290-page notes. Read complete selected section8.1 pp.45–47, section9.3 pp.56–58, and the opening of section9.4 p.58 (stopping before its appendix). Norm uses the square root locally, angle includes 0 and pi, and the product metric is a sum of pullbacks: typographical slips in that treatment were not copied.

Recovery history: the original design Lee URL, https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf , failed browser opening (400/timeout). A subsequent web search recovered the same complete edition on dokumen.pub; recovery stopped after success. This is recovery of the same text, not an unavailable-source drop. Browser reconnaissance of Robbin–Salamon's ETH PDF returned403; it was not used as backing. A Lee Riemannian1997 PDF also opened but was not used as an active treatment because its relevant full selection was not harvested. No claim of open-web absence is made.

The mandatory source-fetch --stamp command was run, and recorded actual EAI_AGAIN initial/retry attempts in each active source record. The shell URL sweep independently returned curl error6 for all hosts. Browser access succeeds, so these failures indicate this environment's DNS failure, not mathematical unavailability. No fetch_verified stamp, source drop, invented retry, or certainty claim was manufactured. Reuse the recorded attempts; repeating six failed resolver calls is not six independent archive searches. The original historical URL is retained in coverage recovery notes and consequently is also collected by URL-sweep.

## Dependency evidence and precise local repairs

A temporary plan overlay replaced only the four owned inventories in the current plan. It passed resolve, same-page order, B-leaf, page/item acyclicity, requires closure, page order, prefix, companion and size checks. A separate declared-edge traversal through published deps, justified_by and forward_refs reached 1,844 item IDs including the 113 owned items, with no unresolved targets and no reached target from deferred-set-theory-beyond-choice. This is a declared-edge census; it does NOT certify the semantics of all 1,844 bodies or classify every implicit body reference. The complete actual transitive prerequisite audit is an open acceptance blocker.

The following exact mathematical uses were inspected, rather than inferred from co-residence:

* thm-a-chain-map-induces-a-well-defined-map-on-homology supplies de Rham induced maps via C_n=C^{-n}; the quotient universal property has the needed direction. thm-chain-homotopic-maps-induce-the-same-map-on-homology applies to real vector spaces, where its cycle-element proof is valid; no general categorical element argument is needed. K becomes degree +1. thm-long-exact-sequence-in-cohomology shifts connecting degree by +1 without changing the differential sign. prop-elementwise-formula-for-the-connecting-map-in-module-categories supplies independence of lifts and representatives. thm-naturality-of-the-homology-connecting-morphism gives the covered-map ladder after the same reindexing. The local lift is alpha=-rho_V omega, beta=rho_U omega, so eta=d rho_U wedge omega on the overlap.
* thm-differentiation-under-the-integral-sign-on-a-compact-rectangle is a compact-parameter differentiability statement. Repeated applications on relatively compact coordinate rectangles give all derivatives of K. Product smooth structure is now explicit in the interval definition and endpoint smoothing. Up-to-boundary forms are handled by local extensions, not an invalid claim that M times [0,1] is boundaryless.
* thm-relative-whitney-approximation-for-manifold-valued-maps is used only where the input is smooth on an open neighborhood of the specified closed set. The owned cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds supplies its own endpoint-relative smoothing: extend H(x,lambda(t)) to M times R, with lambda constant below1/3 and above2/3, and use CLOSED collars t<=1/4 and t>=3/4. These smaller collars have genuinely smooth open neighborhoods. Smooth the representatives and compose homotopies to treat continuous equivalences.
* thm-smooth-partitions-of-unity-exist-on-manifolds supplies the cutoff lift. Grouping its locally finite family by U/V retains supports closed and contained in the appropriate open member, permitting zero extension. The global partition and bundle-metric arguments make countably many choices; the relevant owned results explicitly assume countable choice. Boundary metric existence uses the boundary tangent bundle and boundary partition theorem, not a boundaryless tangent assertion.
* thm-extreme-value-metric requires a nonempty compact metric space. The local comparison proof applies it to compact K times the Euclidean unit sphere, adds thm-compactness-agrees-with-metric-compactness, and treats K empty and dimension0 separately. No continuity of eigenvalue functions is assumed. thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces is used only in its real positive-definite case. First exit from a compact coordinate ball supplies strict positivity of path distance; coordinate segments prove the reverse topology inclusion.
* thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure and thm-density-measure-integration-agrees-with-smooth-density-integration were read in full. They supply local/compact finiteness, sigma-finiteness, Borel regularity and agreement with smooth density integration under their countable-choice convention. Completion is not silently identified with the Borel domain. The local determinant formula is exactly the density transition law.
* prop-positive-compactly-supported-top-forms-have-positive-integral has the needed nonnegative, nonzero version (not the impossible requirement of an everywhere positive compactly supported coefficient on a noncompact space). It handles dimension0. It supplies positive definiteness of the form inner product and the sphere generator obstruction. The outward unit normal is locally minus the normalized gradient of an inward-positive boundary coordinate; explicit gradient and induced exterior metric deps were added. Stokes uses outward-normal-first orientation, including signed zero-dimensional boundaries.
* Sphere and punctured-space computations avoid circularity: complementary-pole charts have overlap S^(n-1) times R using the coordinate x_(n+1)/|x'|. The n=1 H0 difference map is (a,b) -> (b-a,b-a); higher induction does not use the later punctured-space item or pi1. The angular class is detected by its nonzero period. The standard sphere top form is constructed directly, not from the later Riemannian page.
* Möbius and torus examples include explicit quotient chart constructions instead of depending on earlier B-page examples. The shortest-curve counterexample proves nonattainment by a punctured-plane detour of length 2+(pi-2)epsilon, and nonuniqueness on the circle by finite angle-chart lifting. No geodesic, Hopf–Rinow, cut-locus or Hodge-decomposition assertion is used.

These checks settle the listed uses only. Remaining work includes a complete body-reference/axiom audit along actual paths beyond these inspected suppliers, and confirmation that every canonical-only coverage row has sufficiently explicit source support or a fully audited local derivation. Do not treat the 61 results named by source-backing as the whole 113-item source accountability audit.

## Published debt and frontier bookkeeping

Exact published defect: items/thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic.md, proof step1.1, takes the full closed constant collars t<=1/3 and t>=2/3 and claims smoothness on their neighborhoods. An arbitrary continuous H need not become smooth immediately across those endpoints. The owned continuous-invariance corollary does not declare or use this theorem; it reroutes to relative Whitney approximation with the smaller collars described above. Suggested Phase3 repair: replace those closed collars by t<=1/4 and t>=3/4, preserving the same lambda plateaux. This is published-prerequisite debt avoided by a local proof, not a reason to block the adequately rerouted corollary by itself. The deeper transitive audit remains open independently.

Published axiom-tagging debt: items/thm-smooth-partitions-of-unity-exist-on-manifolds.md makes countably many local bump choices in its construction but its statement does not state that cost. items/thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric.md inherits the same construction. Owned global existence and MV statements carry countable choice explicitly. Suggested repair: reconcile these published statement/dependency axiom conventions with the countable-choice ledger; do not quietly regard them as choice-free suppliers.

A scan of published item text found no reference to any of the 113 new owned IDs, so no specific published-consumer defect supplied by this pair was identified. This is not a semantic audit of all co-resident published material. The debts above should be reconciled by the authorized ledger writer; batch9 has no ledger write authority.

Current run-manifest comparison found no declared cross-batch item or page prerequisite for these owned consumers: the prerequisite pages are already published, and no current other-batch item ID is directly used. Proposed consumer ledger input at this snapshot is `[]`, pending the remaining implicit/transitive audit. No cross-batch input or refresh was written/run: the Step1 task authorizes only manifest, coverage and notes; subsequent authorized Step3/repair writers must maintain the frontier ledger as instructed. No automatic verification of implicit edges is claimed.

## Executed checks and acceptance blockers

* coverage-checklist with --require-destination: PASS, 2 pages,145 harvested results,0 errors,0 warnings.
* Whole-run manifest-deps over phase-2-catchup-24-batch-*.pages.json: PASS,616 items,0 normalized,0 errors. Counts are the concurrent disk snapshot, not a guarantee other batches are finished.
* Manifest-only content-policy: PASS,113 scoped items,0 errors,0 warnings. Initial run found7 guessed dependency IDs; all were replaced with their inspected canonical IDs before the passing run.
* validate-plan on current research/plan-spec.json: exit0. validate-plan on the temporary owned-inventory overlay: exit0,3569 redundant-prerequisite warnings across the plan, no hard errors. Repeated after final dependency additions.
* extcheck --quiet: exit0,61 repository warnings concerning recorded-not-proved dependencies. No owned published files exist yet; this does not validate new scaffold body semantics.
* URL-sweep --coverage ... --out /tmp/batch9-sources/url-liveness.json --fail-on-dead: FAIL,0/4 URLs live in shell, all curl6 host-resolution failures (three active unique URLs plus the retained historical Lee URL).
* source-backing with that liveness evidence and --require-verified: FAIL,61 harvested authored results reported without verified/openable backing. Browser recovery does not fabricate the required tool stamps.
* source-fetch-check --coverage ... --stamp: FAIL,0/4 source records verified,0 new stamps,4 EAI_AGAIN failures;0 drops. Real retry records remain in coverage.

Fatal acceptance blockers: (1) source liveness/fetch/backing gates lack executable successful evidence despite browser-readable recovered text; (2) the complete actual transitive proof audit, including load-bearing body references and exact axiom strength beyond the explicitly inspected paths, is unfinished. Continue from the current files and actual source texts, not from a claim that this handoff certifies closure. No broader access was requested and no unproved readiness status was set.

## Step-3 fix pass

The Step-3 review and verdict records for group d were reread against the current
batch-9 manifest, coverage, notes, canonical plan, design, and source receipts.
The current plan still has empty `items` arrays for all four owned pages; this
dispatch may not edit the shared plan.

* **DG15-PLAN-REGISTRATION — remaining blocker.** The manifest's 39 A and 12 B
  de Rham records are mathematically ordered and carry their explicit `deps`,
  strategies, provenance, and sources, but
  `research/plan-spec.json` still records `items: []` for
  `the-de-rham-complex-homotopy-and-mayer-vietoris` and its companion. The
  required repair is an authorized shared-plan writer copying those exact two
  arrays, in order, into the matching canonical entries and then rerunning the
  whole-run plan and manifest gates. No new A/B pair is required. The consumer
  remains blocked solely by that registration defect, not by a missing proof
  supplier.
* **DG18-PLAN-REGISTRATION — remaining blocker.** The same defect persists for
  `riemannian-metrics-length-distance-and-volume` and its companion: their 50
  A and 12 B records are present only in this owned manifest while their two
  canonical plan entries have `items: []`. The required repair is installation
  of these exact, now-deduplicated arrays by an authorized shared-plan writer;
  it must preserve order, dependencies, strategies, provenance, and the page
  metadata already agreed with the plan. No new A/B pair is required.
* **DG18-SCOPE-DESTINATION — resolved in coverage.** The harvested Lee Problem
  16-22(a,c) row is now `out-of-scope`, with no fictitious destination. Its
  analytic codifferential/formal-adjoint package is neither stated nor used:
  `rem-the-codifferential-and-hodge-theory` depends only on
  `prop-hodge-star-squared-sign` and expressly says that no such result is
  assumed. The controlling DG-18 design stops at the algebraic Hodge star and
  reserves analytic Hodge theory for later work. Thus reclassification neither
  removes a needed result nor changes any proof dependency.
* **DG18-DUPLICATE-DEP — resolved in manifest.**
  `ex-the-product-riemannian-metric` now lists
  `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`
  once. The proof uses that supplier once to form the product smooth structure;
  `prop-coordinate-criterion-for-a-riemannian-metric` supplies the separate
  smooth positive-definiteness check. No dependency was removed from the proof
  route.

No same-frontier page or item is a proof supplier of either pair: all declared
requirements resolve to published pages, and the actual routes above do not
invoke another current-run item. The owned cross-batch input therefore remains
`[]`; the published continuous-homotopy collar and countable-choice tagging
defects remain Phase-3 debt only, because the owned proofs use the local
relative-Whitney route and state `def-countable-choice` where needed.

Checks run after the repair:

* `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-9.coverage.json --stamp --timeout-sec 12` — 4/4 sources fetch-verified; 0 newly stamped and 0 documented drops.
* `node tools/coverage-checklist.mjs --require-destination research/phase-2-catchup-24-batch-9.coverage.json` — 2 pages, 145 harvested results, 0 errors, 0 warnings.
* `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 691 items, 0 normalized, 0 errors.
* `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-9.pages.json` — 113 scoped items, 0 errors, 0 warnings.
* `node tools/validate-plan.mjs research/plan-spec.json` — exit 0: declared page order is acyclic and consistent; it reports that 663 planned pages, including the four identified above, have no item list and therefore does not waive their registration defect.
* `node tools/extcheck.mjs --quiet` — exit 0 with 57 pre-existing published recorded-not-proved warnings; none is an actual premise of these owned routes.
* `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24 --require-reviewed` — refreshed and deduplicated with every batch reviewed; batch 9 contributes no declared cross-batch edge, so its owned `[]` input remains correct.

Current batch status: **BLOCKED — awaiting only authorized installation of the
four exact manifest inventories into `research/plan-spec.json`.**

## Owner shared-plan reconciliation — 2026-09-09 12:00 UTC

Root installed all four exact current manifest item arrays into their matching
canonical page entries (39/12 de Rham and 50/12 Riemannian items), preserving
canonical page metadata and all item contracts. The two registration blockers
above are resolved. Whole-plan validation passes without forward edges or
cycles; whole-run manifest dependencies, batch-9 content policy and coverage
checks pass. No new pair or publication occurred. Beta's codifferential
out-of-scope disposition matches the existing DG-18 boundary and removes no
premise or commissioned result. Independent Step-3 recheck is still required;
this receipt is not a mathematical acceptance verdict.

## Final group-d adjudication — 2026-09-09

Outcome: **escalated / insufficient**. See research/phase-2-catchup-24-alpha-d-step3-scaffold-recheck.md for the current exact findings, source reading, proposed amendments and checks. Earlier pending-only or sole-registration-blocker summaries are superseded by this final adjudication. No published content was changed.

- DG15-FINAL-RELATIVE: Actual dependency path: cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds -> thm-relative-whitney-approximation-for-manifold-valued-maps -> thm-relative-whitney-approximation-for-euclidean-valued-maps. The last published proof, step 1.1, chooses A subset W compactly-contained V compactly-contained U for arbitrary closed A. The owned application uses A=M times ((-infinity,1/4] union [3/4,infinity)), which is noncompact even when M is a point. Under the usual compact-containment meaning these neighborhoods cannot exist. No alternate convention is stated there. The smaller-collar repair fixes the immediate smooth-neighborhood issue but not this deeper premise. The report gives an explicit cutoff/absolute-approximation replacement, which requires an amended corollary dependency/strategy record in the shared plan (and corresponding DG-15 prose route), outside this dispatch authority. Owner must install that reroute or resolve the published notation/proof issue; no new A/B pair is needed.
- DG18-FINAL-CHOICE: thm-riemannian-divergence-theorem declares and applies thm-general-stokes-theorem and thm-divergence-theorem-relative-to-a-volume-form. Both published statements explicitly assume AC_omega. The owned statement has no such hypothesis and its deps omit def-countable-choice. Other items on the page assume countable choice individually; that is not a page-wide assumption. Owner/shared-plan writer must synchronize an explicit inherited AC_omega contract and dependency in this item with plan/prose, or preserve a choice-free statement by installing a complete finite-localization proof that avoids these stronger premises. No published repair or new pair is necessary. The current proof cannot silently consume the stronger suppliers.

Published-debt reconciliation for the canonical ledger writer: thm-relative-whitney-approximation-for-euclidean-valued-maps step 1.1 uses compact-containment notation for neighborhoods of arbitrary closed A; the owned noncompact collar application exposes the issue. Replace it with closure-only shrinking or the smooth-cutoff/absolute-approximation proof detailed in the recheck report. lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood step 1.1 needs a finite positive radius also when the tubular neighborhood is all of Euclidean space: cap the radius at 1 and treat the empty complement by radius 1. All proposed primitive suppliers already exist as published items (smooth Urysohn, absolute Euclidean Whitney, proper embedding, Euclidean tubular neighborhood); no pending frontier supplier or new pair is required. These findings do not close the prior immediate collar defect and are not a whole-closure audit. Canonical ledger was read-only for this dispatch.

## Owner-authorized local final-finding repair — Astra-3, 2026-09-09

Read the complete Alpha-d final recheck and exact current contracts. Only
batch9 pages/coverage/notes and the two relevant DG15/DG18 prose clauses
were changed. No published item, canonical plan, ledger, owner acceptance,
engine or cross-batch file was written. Inventories remain 39/12 and 50/12.

DG15-FINAL-RELATIVE: the continuous-invariance corollary now contains the
full bounded-radius/absolute-approximation/cutoff/tubular-retraction proof.
For U with nonempty complement use min(1,dist(jF,U^c)/2), and for empty
complement use1; the triangle inequality proves Lipschitz continuity and
openness proves strict positivity. A tubular inverse followed by the normal
projection constructs the retraction. The blended approximation is smooth
on V and locally equals Q outside its cutoff support, stays in the prescribed
ball, and is fixed near A. Straight-line retraction supplies the relative
continuous homotopy. The slowed cylinder has open constant regions t<1/3,
t>2/3 and smaller closed collars t<=1/4,t>=3/4. The resulting homotopy is
smooth on M×R with exact endpoints. Taking A empty gives smooth representatives
of arbitrary continuous maps; composing and concatenating their homotopies
with the original equivalence homotopies and applying the endpoint result
gives inverse algebra maps. Representative independence and empty cases remain.

Root identified a further exact Urysohn supplier gap: its proof assumes a
two-function partition although its actual construction yields a refinement-
indexed family. Therefore the final local route does NOT import Urysohn.
It groups the actual partition functions assigned to V versus P\A, using
the prescribed two-case assignment. Each grouped support union is closed
because it is locally finite; the first is contained in V, the second is
disjoint from A. Their locally finite smooth sums add to1, giving chi=1
on a neighbourhood of A with support in V. No compact containment is needed.

Read the complete published partition, subordinate-partition definition,
countable-coordinate-cover and locally-finite-shrinking proofs. Their
countable-choice implementation is supplied explicitly: form the set of
ALL admissible coordinate-ball tuples instead of choosing at every point;
use second countability and CC for the countable representatives; use least
integer exhaustion indices; choose finite nested covers from the nonempty
sets of finite covers of each compact annulus by CC, then the countable bump
family. The local strategy retains this explanation rather than inferring
arbitrary choice from CC. This is a focused supplement of actual used clauses,
not certification of every embedding/tubular ancestor.

Final corollary deps: retain smooth-homotopy equality, smooth-homotopy
invariance, standard smooth step, homotopy composition, countable choice,
product smooth structure; add proper Whitney embedding, Euclidean tubular
neighbourhood, absolute Euclidean Whitney, smooth partitions, and the
subordinate partition definition. Remove relative-manifold Whitney and the
continuous-map smoothing corollary. No relative Euclidean, fine-radius or
Urysohn dependency remains in this direct local route, irrespective of their
separate published repair statuses. Parent reports the radius item now locally
repaired; that does not alter this independent local construction.

DG18-FINAL-CHOICE: the divergence theorem now explicitly assumes countable
choice in its statement, declares def-countable-choice, and identifies the
global Stokes/partition-localization use in its strategy. Full published
Stokes and volume-form divergence statements/proofs were read; both assume
AC_omega. The outward normal construction, contraction identity, dimension-one
signed convention, empty boundary, zero field and compact-M clause are
retained. This is an inherited sufficient assumption, not a necessity claim.

Source evidence: read the complete Lee 2nd-edition Theorem6.21 proof pp136–137
and Theorem6.26 proof p141 from the complete recovered
/tmp/batch9-sources/lee-all.txt. The retained active URL is the complete
dokumen.pub second-edition text already in coverage. The former proves the
closed-set approximation by extension/partition, not compact containment;
the latter explicitly caps its tubular radius. Coverage's existing matching
harvest rows now record those exact locators and the local proof. All relevant
divergence rows carry the inherited CC clause. No source/fetch stamp or
new theorem harvest was fabricated, and no result was dropped.

Checks: content-policy PASS (113 items, zero errors/warnings); coverage-
checklist PASS (2 pages,145 rows,zero errors/warnings); read-only source-fetch
check PASS (4/4 existing fetch-verified/resolved,zero drops); source-backing
with the retained live receipt PASS (61 authored results). Canonical direct
order/page-requires check passes for the changed contracts: the new smoothing
suppliers are A445/A455 before DG15 A471 and in its existing closure; CC is
A18, before both DG15 and DG18 A477. The two same-page de Rham suppliers
precede their corollary, as do the local Riemannian suppliers. Final exact
plan/manifest comparison shows ONLY the two intended item objects differ;
the temporary misplaced CC edge detected by that comparison was removed
before this receipt. Scoped whitespace check passes. No authored-item proof
precheck/render or independent judgment is claimed for these scaffold JSONs.

Safe handoff: root should copy the two exact changed objects into the canonical
plan, then arrange current independent recheck through the driver workflow.
The prose clauses are already synchronized. No new pair, inventory change,
boundary relaxation, or owner-accept decision is requested. Published
relative-Euclidean/Urysohn/partition-family debt remains separately classified
by root; this receipt does not blanket-clear that family or the full DG closure.


## Final adjudication — scaffold-final-d-db82e3cc12969225

The current final recheck is `research/phase-2-catchup-24-alpha-d-step3-scaffold-recheck.md`. It supersedes the older final missing lists; current plan/manifest contracts agree. No published or shared-plan repair was applied.

DG15-FINAL-NONCOMPACT-EMBEDDING: cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds -> thm-weak-whitney-proper-embedding-theorem -> thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space. The last item proves its noncompact conclusion solely by external Fact F1 and step 1.2; its sole local dependency proves only compact embedding. The owned smoothing construction needs a proper embedding of arbitrary, possibly noncompact N. Owner must authorize a complete local noncompact embedding construction and its prerequisites in the shared plan/prose, or separately repair the published prerequisite. Lee Theorem 6.15 pp.134–135 and Gualtieri 2008 Theorem 2.22 p.23 were read, but the exhaustion/regular-level/finite-dimensional gluing route has not been certified against a complete earlier local dependency inventory. Do not accept an external assertion as that proof.

DG18-FINAL-DENSITY-CHOICE: def-riemannian-volume-of-a-compactly-supported-smooth-density invokes def-integral-of-a-compactly-supported-smooth-density, whose definition explicitly assumes AC_omega. The owned definition omits this hypothesis, as does its consumer prop-riemannian-inner-product-of-compactly-supported-forms. Authorize shared-plan/prose synchronization of explicit countable-choice hypotheses and def-countable-choice deps on both owned items, identifying chart-partition selection as the inherited use, and propagate to any integral-consuming clauses. Alternatively install a complete finite compact-support localization argument avoiding the stronger supplier. Countable choice is sufficient for the declared route; its necessity for the mathematics is not asserted. The divergence theorem's previous missing assumption is already fixed.

Published-debt receipt for canonical-ledger reconciliation (pending Phase 3): `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` F1/1.2 has no local noncompact construction; no complete new supplier inventory is yet authorized, so no supplier is fabricated. Exact source routes and decisions needed are in the recheck. `thm-density-integration-is-defined-without-an-orientation` must propagate the AC_omega premise already present in `def-integral-of-a-compactly-supported-smooth-density`; the existing partition theorem is the supplier for that choice-dependent construction. The owned Riemannian integral/inner-product consumers need the corresponding explicit assumption. This is not a claim that choice is mathematically necessary for finite compact-support integration.

## Step-5 authoring

Authoring completed for the full assigned inventory. Historical Step-3 findings were checked against current suppliers. Current embedding theorem has a full compact-band projection/gluing proof; the current manifest includes the corrected smoothing route and integral choice hypotheses. No scope is dropped. Each receipt below records an authored local argument, not an independent judgment.

### Authored `def-de-rham-cochain-complex`

Claim/conventions: Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary. Its real **de Rham cochain complex** is $(\Omega^\bullet(M),d)$, where $\Omega^k(M)$ is the space of smooth $k$-forms for $0\le k\le\dim M$ and is $0$ otherwise; $d$ has degree $+1$.

These are the sections in [[def-smooth-differential-k-form]]. The identity $d^{k+1}d^k=0$ in [[thm-the-exterior-derivative-squares-to-zero]] makes this an instance of [[def-cochain-complex-in-an-abelian-category]]. On the empty manifold each section space is the zero vector space. Whenever a product with $[0,1]$ is used, forms mean smooth forms up to the endpoints, locally extendible across them.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-smooth-differential-k-form, thm-the-exterior-derivative-squares-to-zero, def-cochain-complex-in-an-abelian-category.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-closed-and-exact-differential-forms`

Claim/conventions: For the complex [[def-de-rham-cochain-complex]], put $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))$. A form is **closed** if it belongs to $Z^k$ and **exact** if it belongs to $B^k$.

If $\omega=d\eta$, then $d\omega=d^2\eta=0$ by [[thm-the-exterior-derivative-squares-to-zero]], so $B^k\subseteq Z^k$. In particular $B^0=0$, since $\Omega^{-1}=0$. The zero form is both closed and exact in every degree.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-de-rham-cochain-complex, thm-the-exterior-derivative-squares-to-zero.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-de-rham-cohomology`

Claim/conventions: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in [[def-closed-and-exact-differential-forms]].

This is [[def-cohomology-object-of-a-cochain-complex]] in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-closed-and-exact-differential-forms, def-cohomology-object-of-a-cochain-complex.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-zero-and-out-of-range-de-rham-cohomology`

Claim/conventions: $H^k_{\mathrm{dR}}(M)=0$ if $k<0$ or $k>\dim M$. If $M=\varnothing$, its cohomology vanishes in every degree.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-de-rham-cohomology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-zero-th-de-rham-cohomology-is-locally-constant-functions`

Claim/conventions: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-de-rham-cohomology, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-pullback-is-a-morphism-of-de-rham-complexes`

Claim/conventions: A smooth map $F:M\to N$ induces a degree-zero real cochain map $F^*:\Omega^\bullet(N)\to\Omega^\bullet(M)$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-de-rham-cochain-complex, thm-the-exterior-derivative-commutes-with-pullback, def-cochain-map.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology`

Claim/conventions: For a smooth $F:M\to N$, the formula $F^*[\omega]=[F^*\omega]$ defines a linear map $H^k_{\mathrm{dR}}(N)\to H^k_{\mathrm{dR}}(M)$ for every integer $k$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: def-de-rham-cohomology, prop-pullback-is-a-morphism-of-de-rham-complexes, thm-a-chain-map-induces-a-well-defined-map-on-homology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-de-rham-cohomology-is-a-contravariant-functor`

Claim/conventions: De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, prop-homology-respects-identities-and-composition.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-wedge-with-a-closed-form-preserves-exactness-classes`

Claim/conventions: If $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$ are closed, then $d\eta\wedge\beta=d(\eta\wedge\beta)$ for $\eta\in\Omega^{p-1}(M)$ and $\alpha\wedge d\theta=(-1)^p d(\alpha\wedge\theta)$ for $\theta\in\Omega^{q-1}(M)$.

Sources: Lee, Chapter 17, p.441 (closed/exact); graded Leibniz rule in the declared exterior-calculus supplier. The two primitive formulas are derived explicitly.

Dependencies: def-closed-and-exact-differential-forms, thm-the-exterior-derivative-is-a-graded-derivation.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-wedge-product-descends-to-de-rham-cohomology`

Claim/conventions: The formula $[\alpha][\beta]=[\alpha\wedge\beta]$ defines a bilinear, associative, graded-commutative product on $H^\bullet_{\mathrm{dR}}(M)$, with unit $[1]$.

Sources: Lee, Chapter 17, p.441 (quotient); the graded-algebra and graded-derivation identities are supplied by the declared local exterior-calculus results.

Dependencies: def-de-rham-cohomology, lem-wedge-with-a-closed-form-preserves-exactness-classes, prop-differential-forms-form-a-graded-commutative-algebra, thm-the-exterior-derivative-is-a-graded-derivation.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-de-rham-cohomology-ring`

Claim/conventions: The **de Rham cohomology ring** is $H^\bullet_{\mathrm{dR}}(M)=\bigoplus_{k\in\mathbb Z}H^k_{\mathrm{dR}}(M)$ with $[\alpha][\beta]=[\alpha\wedge\beta]$ and unit $[1]$.

By [[thm-wedge-product-descends-to-de-rham-cohomology]] it is a unital graded-commutative real algebra. On the empty manifold it is the zero algebra, with $1=0$; this convention allows the zero algebra among unital algebras.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: thm-wedge-product-descends-to-de-rham-cohomology.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras`

Claim/conventions: Smooth pullback induces a unital graded real algebra homomorphism $H^\bullet_{\mathrm{dR}}(N)\to H^\bullet_{\mathrm{dR}}(M)$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.

Dependencies: prop-de-rham-cohomology-is-a-contravariant-functor, def-de-rham-cohomology-ring, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-integration-along-the-unit-interval-for-a-differential-form`

Claim/conventions: Let $\omega\in\Omega^k(M\times[0,1])$ be smooth up to the endpoints. For $k\ge1$, its **interval integral** is the $(k-1)$-form $K\omega=\int_0^1\beta_t\,dt$, where $\omega=\alpha_t+dt\wedge\beta_t$ and both families are tangential to $M$. Set $K=0$ on degree zero and on zero terms.

Use the product structure of [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], restricted from $M\times\mathbb R$. The families are intrinsically $\alpha_t=i_t^*\omega$ and $\beta_t=i_t^*(\iota_{\partial_t}\omega)$, using [[def-interior-product-of-a-form-by-a-vector-field]]; evaluation on tangential tuples and on $(\partial_t,v_1,\ldots,v_{k-1})$ proves existence and uniqueness of the decomposition. The integral is in the fixed finite-dimensional fibre $\bigwedge^{k-1}T_x^*M$. Coefficients have smooth local extensions across endpoints. [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] supplies parameter differentiation; coordinate independence and full smoothness are proved in [[lem-the-interval-homotopy-operator-is-coordinate-independent]].

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.

Dependencies: def-smooth-differential-k-form, def-interior-product-of-a-form-by-a-vector-field, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-the-interval-homotopy-operator-is-coordinate-independent`

Claim/conventions: The interval operator $K:\Omega^k(M\times[0,1])\to\Omega^{k-1}(M)$ is coordinate independent and maps smooth forms to smooth forms.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.

Dependencies: def-integration-along-the-unit-interval-for-a-differential-form, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-de-rham-homotopy-formula-on-a-product`

Claim/conventions: For endpoint inclusions $i_t:M\to M\times[0,1]$, $i_1^*-i_0^*=dK+Kd$ on smooth forms of every degree.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.

Dependencies: lem-the-interval-homotopy-operator-is-coordinate-independent, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-de-rham-homotopy-formula-for-a-smooth-homotopy`

Claim/conventions: If $F:M\times[0,1]\to N$ is smooth up to the endpoints and $F_t(x)=F(x,t)$, then $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.

Dependencies: thm-de-rham-homotopy-formula-on-a-product, thm-the-exterior-derivative-commutes-with-pullback.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-smoothly-homotopic-maps-induce-the-same-de-rham-map`

Claim/conventions: Smoothly homotopic smooth maps induce equal maps on de Rham cohomology in every degree.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.

Dependencies: thm-de-rham-homotopy-formula-for-a-smooth-homotopy, thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology, thm-chain-homotopic-maps-induce-the-same-map-on-homology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-de-rham-cohomology-is-smooth-homotopy-invariant`

Claim/conventions: A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

Sources: Lee, Theorem 17.11, pp.445–446; this item assumes smooth homotopies explicitly, so does not use a continuous smoothing theorem.

Dependencies: cor-smoothly-homotopic-maps-induce-the-same-de-rham-map, prop-de-rham-cohomology-is-a-contravariant-functor, prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras, def-homotopy-equivalence.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds`

Claim/conventions: Assume countable choice $\mathrm{AC}_\omega$. Continuously homotopic smooth maps induce equal de Rham maps. Continuous homotopy equivalences between smooth manifolds induce inverse de Rham graded algebra maps via smooth representatives, independently of those representatives.

Sources: Lee, Theorem 6.21, pp.136–137; normal addition and tubular retraction, pp.137–141; Theorem 6.26, p.141; Theorem 17.11, pp.445–446. The bounded supremum tube proof and smaller closed collars are the explicit local construction here, supported by the declared normal-addition local inverse. The current published embedding and absolute approximation proofs, repaired 2026-09-09, were read in full; no historical relative-Whitney assertion is imported.

Dependencies: cor-smoothly-homotopic-maps-induce-the-same-de-rham-map, thm-de-rham-cohomology-is-smooth-homotopy-invariant, def-the-standard-smooth-step-function, thm-composition-respects-homotopy, def-countable-choice, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, thm-whitney-approximation-for-euclidean-valued-maps, thm-smooth-partitions-of-unity-exist-on-manifolds, def-smooth-partition-of-unity-subordinate-to-an-open-cover, def-normal-addition-map-for-a-euclidean-submanifold, lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-radial-contraction-of-a-star-shaped-domain`

Claim/conventions: For an open $U\subseteq\mathbb R^n$ star-shaped about a specified $c\in U$, the **radial contraction** is $F:U\times[0,1]\to U$, $F(x,t)=c+t(x-c)$.

[[def-star-shaped-open-subset-of-rn]] says exactly that each displayed value lies in $U$. The coordinate expression is polynomial, so its restriction is smooth up to both endpoints; $F(x,0)=c$ and $F(x,1)=x$. The centre is part of the data, so $U$ is nonempty. For $n=0$ the unique nonempty domain is a point and the formula is constant.

Sources: Lee, Theorem 17.14, p.447.

Dependencies: def-star-shaped-open-subset-of-rn.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains`

Claim/conventions: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

Sources: Lee, Theorem 17.14, p.447; the explicit primitive follows by evaluating the interval operator.

Dependencies: def-radial-contraction-of-a-star-shaped-domain, thm-de-rham-homotopy-formula-for-a-smooth-homotopy, def-de-rham-cohomology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-closed-differential-forms-are-locally-exact`

Claim/conventions: Every closed smooth differential form of positive degree is locally exact.

Sources: Lee, Corollary 17.15, p.447, restricted explicitly to positive degree.

Dependencies: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-the-exterior-derivative-commutes-with-pullback.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-de-rham-cohomology-of-a-contractible-smooth-manifold`

Claim/conventions: Assume countable choice. A nonempty contractible smooth manifold $M$ has $H^0_{\mathrm{dR}}(M)\cong\mathbb R$ and $H^k_{\mathrm{dR}}(M)=0$ for every $k>0$.

Sources: Lee, Theorem 17.13, pp.446–447; continuous smoothing is supplied by the preceding fully local corollary.

Dependencies: cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds, prop-zero-and-out-of-range-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, def-nullhomotopic-map-and-contractible-space.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-two-open-set-de-rham-mayer-vietoris-cochain-maps`

Claim/conventions: For an open cover $M=U\cup V$, put $W=U\cap V$. The two-open-set de Rham maps are $r:\Omega^\bullet(M)\to\Omega^\bullet(U)\oplus\Omega^\bullet(V)$, $r\omega=(\omega|_U,\omega|_V)$, and $s:\Omega^\bullet(U)\oplus\Omega^\bullet(V)\to\Omega^\bullet(W)$, $s(\alpha,\beta)=\beta|_W-\alpha|_W$.

The complexes are [[def-de-rham-cochain-complex]]. Restrictions are pullbacks along open inclusions, so [[prop-pullback-is-a-morphism-of-de-rham-complexes]] gives $dr=rd$ and $ds=sd$. Both maps are real linear. The middle differential acts componentwise. Empty opens have zero form spaces. The order **second minus first** fixes the sign of every connecting map below.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: def-de-rham-cochain-complex, prop-pullback-is-a-morphism-of-de-rham-complexes.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms`

Claim/conventions: The sequence $0\to\Omega^k(M)\xrightarrow{r}\Omega^k(U)\oplus\Omega^k(V)\xrightarrow{s}\Omega^k(U\cap V)$ is exact at the first two nonzero terms.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, def-smooth-differential-k-form.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-the-de-rham-mayer-vietoris-difference-map-is-surjective`

Claim/conventions: Assume countable choice. The difference map $s:\Omega^k(U)\oplus\Omega^k(V)\to\Omega^k(U\cap V)$ is surjective in every degree.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, thm-smooth-partitions-of-unity-exist-on-manifolds, def-countable-choice.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes`

Claim/conventions: Under countable choice, $0\to\Omega^\bullet(M)\xrightarrow r\Omega^\bullet(U)\oplus\Omega^\bullet(V)\xrightarrow s\Omega^\bullet(U\cap V)\to0$ is short exact as a sequence of real cochain complexes.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective, def-short-exact-sequence-of-complexes.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-mayer-vietoris-sequence-in-de-rham-cohomology`

Claim/conventions: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes, def-de-rham-cohomology, thm-long-exact-sequence-in-cohomology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-explicit-de-rham-mayer-vietoris-connecting-class`

Claim/conventions: Under countable choice, for a closed $k$-form $\omega$ on $U\cap V$, $\delta[\omega]=[\eta]$, where $\eta|_U=d(-\rho_V\omega)$ and $\eta|_V=d(\rho_U\omega)$, with products smoothly extended by zero as in the lift construction. This class is independent of partition, lift and representative.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: thm-mayer-vietoris-sequence-in-de-rham-cohomology, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective, prop-elementwise-formula-for-the-connecting-map-in-module-categories.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds`

Claim/conventions: Assume countable choice. For smooth $F:M\to N$ with $F(U)\subseteq U\prime$ and $F(V)\subseteq V\prime$, pullback gives a contravariant commutative ladder of the two Mayer–Vietoris sequences; in particular $\delta_M F_{U\cap V}^*=F^*\delta_N$.

Sources: Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.

Dependencies: thm-mayer-vietoris-sequence-in-de-rham-cohomology, prop-explicit-de-rham-mayer-vietoris-connecting-class, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-naturality-of-the-homology-connecting-morphism, prop-pullback-is-a-morphism-of-de-rham-complexes.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum`

Claim/conventions: For a finite disjoint union $M=\coprod_{j=1}^mM_j$, restrictions give $H^k_{\mathrm{dR}}(M)\cong\bigoplus_{j=1}^mH^k_{\mathrm{dR}}(M_j)$.

Sources: Lee, Proposition 17.5, pp.442–443; the local statement is finite only, where products and sums coincide and all witness selection is finite.

Dependencies: def-de-rham-cohomology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-de-rham-cohomology-of-spheres`

Claim/conventions: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

Sources: Lee, Theorem 17.21, pp.450–451. The local proof replaces Lee’s fundamental-group input by the explicit degree-zero Mayer–Vietoris maps and avoids any later punctured-space computation.

Dependencies: thm-mayer-vietoris-sequence-in-de-rham-cohomology, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, thm-de-rham-cohomology-is-smooth-homotopy-invariant, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-de-rham-cohomology-of-punctured-euclidean-space`

Claim/conventions: Under countable choice, $\mathbb R^n\setminus\{0\}$ has cohomology $\mathbb R$ in degrees $0,n-1$ only for $n\ge2$. For $n=1$ it has $\mathbb R^2$ in degree zero only, and for $n=0$ all groups vanish.

Sources: Lee, Corollary 17.23, p.451, with the low-dimensional cases computed explicitly.

Dependencies: thm-de-rham-cohomology-of-spheres, thm-de-rham-cohomology-is-smooth-homotopy-invariant, cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness`

Claim/conventions: False claim: every smooth differential form represents a de Rham cohomology class.

Sources: Lee, p.441, definition of the cycle quotient; the witness is calculated locally.

Dependencies: def-closed-and-exact-differential-forms, def-de-rham-cohomology, thm-local-coordinate-formula-for-the-exterior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-every-smooth-form-is-either-closed-or-exact`

Claim/conventions: False claim: every smooth form is either closed or exact.

Sources: Lee, p.441, exact forms are closed; the nonclosed witness is computed directly.

Dependencies: def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator`

Claim/conventions: False claim: an arbitrary continuous homotopy between smooth maps can be inserted directly into the differential-form homotopy operator.

Sources: Lee, Lemma 17.9 and Proposition 17.10, pp.444–445: the operator acts on smooth pullbacks; the cusp is a direct witness to the missing hypothesis.

Dependencies: def-integration-along-the-unit-interval-for-a-differential-form, thm-de-rham-homotopy-formula-for-a-smooth-homotopy.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-poincare-lemma-says-every-closed-form-is-globally-exact`

Claim/conventions: False claim: the Poincaré lemma makes every closed positive-degree form globally exact on every smooth manifold.

Sources: Lee, formula (17.1), p.441; direct coordinate differentiation and the fundamental theorem prove the obstruction without importing a later example.

Dependencies: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative, cor-a-nonzero-period-obstructs-exactness-and-bounding.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity`

Claim/conventions: Assume countable choice. Invalid proposed proof: restrictions alone establish full Mayer–Vietoris exactness, without a proof that the overlap difference map is surjective. In particular, extending an arbitrary overlap form unchanged to a prescribed cover member is not a valid general lift construction.

Sources: Lee, proof of Theorem 17.20, p.463, where the cutoff lift is constructed explicitly.

Dependencies: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-de-rham-cohomology-is-a-covariant-functor`

Claim/conventions: False claim: the pullback construction makes de Rham cohomology covariant.

Sources: Lee, Proposition 17.2(a) and Corollary 17.3, p.442; explicit noncommuting permutation pullbacks supply the witness.

Dependencies: prop-de-rham-cohomology-is-a-contravariant-functor.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-a-point`

Claim/conventions: The de Rham ring of a point is $\mathbb R$ in degree zero only.

Sources: Lee, p.441, the cycle quotient, and Proposition 17.6, p.443, degree zero; the point has no positive-degree forms.

Dependencies: prop-zero-and-out-of-range-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-euclidean-space`

Claim/conventions: For every $n\ge0$, $H^\bullet_{\mathrm{dR}}(\mathbb R^n)=\mathbb R$ in degree zero only.

Sources: Lee, Theorem 17.14, p.447, Poincaré lemma, and Proposition 17.6, p.443, degree zero.

Dependencies: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-a-finite-discrete-manifold`

Claim/conventions: An $m$-point discrete manifold has de Rham ring $\mathbb R^m$ in degree zero with componentwise multiplication and no other nonzero degrees, including $m=0$.

Sources: Lee, Proposition 17.6, p.443, and Proposition 17.5, pp.442–443, disjoint unions; here the union is finite.

Dependencies: cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris`

Claim/conventions: Under countable choice, $H^0(S^1)=H^1(S^1)=\mathbb R$ and all other de Rham groups vanish.

Sources: Lee, Theorems 17.20–17.21, pp.449–451; the two-component overlap map is calculated explicitly.

Dependencies: thm-mayer-vietoris-sequence-in-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle`

Claim/conventions: Under countable choice, $\alpha=(x\,dy-y\,dx)/(2\pi)|_{S^1}$ has period one and its class generates $H^1_{\mathrm{dR}}(S^1)$.

Sources: Lee, angular form (17.1), p.441, and Theorem 17.21, pp.450–451; the period is calculated explicitly.

Dependencies: thm-de-rham-cohomology-of-spheres, prop-explicit-de-rham-mayer-vietoris-connecting-class, cor-a-nonzero-period-obstructs-exactness-and-bounding.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-the-two-sphere`

Claim/conventions: Under countable choice, the sphere $S^2$ has $H^0=H^2=\mathbb R$ and $H^1=0$, with all other groups zero.

Sources: Lee, Theorem 17.21, pp.450–451; the degree groups and products are computed for dimension two.

Dependencies: thm-de-rham-cohomology-of-spheres.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere`

Claim/conventions: Under countable choice, for $n\ge1$ the form $\omega=\sum_{i=1}^{n+1}(-1)^{i-1}x_i\,dx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_{n+1}|_{S^n}$ generates $H^n(S^n)$.

Sources: Lee, Theorem 17.21, pp.450–451, and Proposition 16.28, p.422, positivity of volume integration; the proof verifies nonexactness by the stated Stokes supplier.

Dependencies: thm-de-rham-cohomology-of-spheres, cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-de-rham-cohomology-of-punctured-three-space`

Claim/conventions: Under countable choice, $\mathbb R^3\setminus\{0\}$ has de Rham cohomology $\mathbb R$ in degrees zero and two only.

Sources: Lee, Corollary 17.23, p.451; the radial maps and the degree-two generator are displayed in the verification.

Dependencies: cor-de-rham-cohomology-of-punctured-euclidean-space.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings`

Claim/conventions: Under countable choice, the annulus $A=\{x\in\mathbb R^2:a<|x|<b\}$, where $0<a<1<b$, and $S^1$ have isomorphic de Rham graded algebras.

Sources: Lee, Proposition 17.10 and Theorem 17.11, pp.445–446; the annulus retraction and its radial homotopy are explicit.

Dependencies: thm-de-rham-cohomology-is-smooth-homotopy-invariant, prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras, thm-de-rham-cohomology-of-spheres.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact`

Claim/conventions: Every closed smooth one-form on the punctured plane is exact.

Sources: Lee, angular form (17.1), p.441; the zero derivative and nonzero loop period are calculated above by Newton–Leibniz.

Dependencies: def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, cor-a-nonzero-period-obstructs-exactness-and-bounding, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cex-the-pullback-on-cohomology-reverses-composition-order`

Claim/conventions: Pullback composition can be treated as covariant, so $(G\circ F)^*=G^*F^*$.

Sources: Lee, Proposition 17.2(a) and Corollary 17.3, p.442; the noncommuting finite permutations are computed explicitly.

Dependencies: prop-de-rham-cohomology-is-a-contravariant-functor, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle`

Claim/conventions: Under countable choice the circle Mayer–Vietoris connector has a nonzero representative obtained from a locally constant overlap function.

Sources: Lee, Theorem 17.20, pp.449–450, proof pp.462–463; the sign here is second restriction minus first, and the connecting representative is calculated with that convention.

Dependencies: prop-explicit-de-rham-mayer-vietoris-connecting-class, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, thm-mayer-vietoris-sequence-in-de-rham-cohomology.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-metric-and-riemannian-manifold`

Claim/conventions: A **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero $v\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$.

This is a [[def-smooth-tensor-field]] giving a [[def-smooth-bundle-metric]] on $TM$. Dimension zero is allowed: its zero bilinear form is positive definite because there are no nonzero vectors. The empty manifold has its unique empty metric. Boundaries are allowed where stated, with smoothness understood up to the boundary.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-smooth-tensor-field, def-smooth-bundle-metric.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-coordinate-criterion-for-a-riemannian-metric`

Claim/conventions: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-every-smooth-manifold-admits-a-riemannian-metric`

Claim/conventions: Under countable choice, every smooth manifold, also with boundary, admits a Riemannian metric.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, def-countable-choice, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-pullback-riemannian-metric`

Claim/conventions: For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$, its **pullback tensor** is $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$.

This is [[def-pullback-of-a-covariant-tensor-field]] for the tensor in [[def-riemannian-metric-and-riemannian-manifold]]. It is always symmetric and positive semidefinite; the name does not assert positive definiteness. Smoothness and the precise immersion criterion are established next.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold, def-pullback-of-a-covariant-tensor-field.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions`

Claim/conventions: $F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-pullback-riemannian-metric, prop-pullback-of-covariant-tensors-is-smooth-and-functorial, def-immersion-submersion-and-constant-rank-map.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-isometry-and-local-isometry`

Claim/conventions: An **isometry** $F:(M,g)\to(N,h)$ is a diffeomorphism with $F^*h=g$. A **local isometry** is a smooth local diffeomorphism with $F^*h=g$. An **isometric immersion** is a smooth immersion satisfying that same pullback identity.

Use [[def-pullback-riemannian-metric]] and [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]. Positivity forces injective differential by [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]. In equal dimensions on boundaryless manifolds, the inverse function theorem as applied in the next proposition makes a metric-preserving smooth map a local isometry. At a boundary the definition retains the local-diffeomorphism requirement. An isometric immersion need not have equal source and target dimensions.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, def-diffeomorphism-and-local-diffeomorphism-of-manifolds.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms`

Claim/conventions: Isometries of a fixed Riemannian manifold form a group. A metric-preserving smooth map between equal-dimensional boundaryless Riemannian manifolds is a local diffeomorphism.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-isometry-and-local-isometry, prop-pullback-of-covariant-tensors-is-smooth-and-functorial, thm-smooth-inverse-function-theorem-on-manifolds.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-conformal-equivalence-of-riemannian-metrics`

Claim/conventions: Two Riemannian metrics are **conformally equivalent** if $\widetilde g=e^{2u}g$ for a smooth real function $u$ on $M$.

The positive smooth factor preserves the metric condition of [[def-riemannian-metric-and-riemannian-manifold]]. Equivalently $\widetilde g=fg$ for smooth $f>0$, since $u=\tfrac12\log f$. Reflexivity uses $u=0$, reversal uses $-u$, and composing rescalings adds their functions.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-pointwise-norm-and-angle-from-a-riemannian-metric`

Claim/conventions: The **pointwise norm** is $|v|_g=\sqrt{g(v,v)}$. For nonzero $v,w$ in the same tangent space, the **angle** is the unique $\theta\in[0,\pi]$ with $\cos\theta=g(v,w)/(|v|_g|w|_g)$.

Positive definiteness in [[def-riemannian-metric-and-riemannian-manifold]] makes both denominators positive. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] places the quotient in $[-1,1]$, on which the inverse of cosine restricted to $[0,\pi]$ is defined. Angles $0$ and $\pi$ are included. The norm of zero is zero; no angle is assigned when either vector is zero.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-musical-isomorphisms`

Claim/conventions: The **musical maps** for $g$ are $v^\flat=g(v,\cdot)$ and its pointwise inverse $\alpha^\sharp$, characterized by $g(\alpha^\sharp,v)=\alpha(v)$ for all $v$.

For the metric in [[def-riemannian-metric-and-riemannian-manifold]], $v^\flat=0$ forces $g(v,v)=0$ and hence $v=0$. Thus $\flat$ is injective between equal-dimensional fibres and bijective; this gives the pointwise inverse. Smooth inverse bundle maps are proved in [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]. On a zero fibre both are the unique map.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-metric-and-riemannian-manifold.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms`

Claim/conventions: $\flat:TM\to T^*M$ and $\sharp:T^*M\to TM$ are smooth inverse bundle isomorphisms.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-musical-isomorphisms, prop-coordinate-criterion-for-a-riemannian-metric, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-gradient`

Claim/conventions: For a smooth real function $f$, its **Riemannian gradient** is $\operatorname{grad}_g f=(df)^\sharp$.

[[prop-exterior-derivative-of-a-function-is-its-differential]] identifies $df(X)=Xf$. The smooth bundle isomorphism in [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]] therefore makes the gradient a smooth vector field. In coordinates $(\operatorname{grad}_g f)^i=\sum_jg^{ij}\partial_jf$. Constants, and all functions in dimension zero, have zero gradient.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, prop-exterior-derivative-of-a-function-is-its-differential.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-the-gradient-is-characterized-by-inner-products`

Claim/conventions: The gradient is the unique smooth vector field $Y$ satisfying $g(Y,X)=Xf$ for every smooth vector field $X$.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.

Dependencies: def-riemannian-gradient.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles`

Claim/conventions: A Riemannian metric induces smooth metrics on dual, tensor and exterior bundles. On decomposable covectors, $\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle=\det(\langle\alpha_i,\beta_j\rangle)$; increasing orthonormal wedge monomials have norm one.

Sources: Lee, pp.330 and 341–342, local orthonormal frames and dual metrics; Problem 16-18(a), pp.437–438, determinant pairing on exterior powers. Tensor existence and product bases use the two declared algebra theorems over the field of real numbers.

Dependencies: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, thm-universal-property-of-the-finite-dimensional-exterior-power, lem-wedge-monomials-in-a-dual-basis-form-a-basis, thm-universal-property-of-module-tensor-products, thm-tensor-product-basis-from-bases.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-piecewise-c-one-curve-on-a-manifold`

Claim/conventions: A **piecewise $C^1$ curve** in $M$ is a continuous map $\gamma:[a,b]\to M$ with a finite subdivision such that its restriction to each closed piece is $C^1$ in local charts, with one-sided derivatives at piece endpoints.

Use the chartwise regularity convention of [[def-c-r-and-smooth-maps-between-smooth-manifolds]] and the finite path operations of [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]. Refining a piece into finitely many chart pieces is allowed. No nonzero-velocity hypothesis is imposed: constant segments and pauses are admissible. A singleton parameter interval is interpreted as a constant curve of length zero.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-c-r-and-smooth-maps-between-smooth-manifolds.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-speed-and-length`

Claim/conventions: The **Riemannian speed** on a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}$. Its **length** is $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$.

The curve convention is [[def-piecewise-c-one-curve-on-a-manifold]] and the norm is [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established next.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-piecewise-c-one-curve-on-a-manifold, def-pointwise-norm-and-angle-from-a-riemannian-metric.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision`

Claim/conventions: Riemannian length is independent of admissible finite subdivision and of corner derivative conventions.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-speed-and-length, lem-line-integrals-are-independent-of-the-piecewise-c1-partition.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization`

Claim/conventions: If $\varphi:[c,d]\to[a,b]$ is a continuous nondecreasing surjection, piecewise $C^1$, and $\gamma$ is piecewise $C^1$, then $\gamma\circ\varphi$ is piecewise $C^1$ and $L_g(\gamma\circ\varphi)=L_g(\gamma)$. Constant intervals of $\varphi$ are allowed.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision, thm-substitution-with-riemann-integrable-inner-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-length-is-additive-under-concatenation-and-invariant-under-reversal`

Claim/conventions: Length adds under finite concatenation and is unchanged by reversal.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision, thm-line-integrals-under-reversal-and-concatenation.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric`

Claim/conventions: For a compact set $K$ contained in one coordinate chart of an $n$-dimensional Riemannian manifold, there are $0<c\le C<\infty$ such that $c|v|^2\le g_x(v,v)\le C|v|^2$ for $x\in K$. The dimension-zero assertion is vacuous.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric, def-pointwise-norm-and-angle-from-a-riemannian-metric, thm-finite-products-of-compact-spaces, cor-heine-borel-in-the-product-topology, thm-extreme-value-metric, thm-compactness-agrees-with-metric-compactness.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve`

Claim/conventions: Any two points in a nonempty connected smooth manifold can be joined by a finite piecewise $C^1$ curve.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-piecewise-c-one-curve-on-a-manifold, def-connected-space.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-distance-on-a-connected-manifold`

Claim/conventions: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$.

Lengths are those of [[def-riemannian-speed-and-length]]. For each pair $p,q$, [[lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve]] supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property [[cor-cauchy-reals-lub-complete]] to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-speed-and-length, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve, cor-cauchy-reals-lub-complete.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-riemannian-distance-is-a-metric`

Claim/conventions: $d_g$ is a finite metric on a connected Riemannian manifold.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-distance-on-a-connected-manifold, prop-length-is-additive-under-concatenation-and-invariant-under-reversal, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, thm-scalar-and-vector-line-integral-estimates, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-the-riemannian-distance-topology-is-the-manifold-topology`

Claim/conventions: The topology of $d_g$ is the manifold topology on every connected Riemannian manifold.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: thm-riemannian-distance-is-a-metric, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-length-dominates-endpoint-distance`

Claim/conventions: For every piecewise $C^1$ curve $\gamma:[a,b]\to M$, $d_g(\gamma(a),\gamma(b))\le L_g(\gamma)$.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-distance-on-a-connected-manifold.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance`

Claim/conventions: Let $M,N$ be connected Riemannian manifolds. If smooth $F:M\to N$ satisfies $|dF_pv|_h\le c|v|_g$ for a finite $c\ge0$ and all $p,v$, then $d_h(Fp,Fq)\le c\,d_g(p,q)$.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-distance-on-a-connected-manifold, def-riemannian-speed-and-length, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cor-riemannian-isometries-preserve-length-and-distance`

Claim/conventions: Riemannian isometries preserve curve lengths and distances on connected components.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-riemannian-isometry-and-local-isometry, prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance, def-riemannian-speed-and-length.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-extended-riemannian-distance-on-a-disconnected-manifold`

Claim/conventions: The **extended Riemannian distance** on arbitrary $M$ is the componentwise Riemannian distance when two points are in the same component, and $+\infty$ otherwise.

Within each component use [[thm-riemannian-distance-is-a-metric]]. Components are open, since small coordinate balls are connected. A continuous curve cannot meet two components because its connected interval image is connected, so the cross-component curve family is empty, with $\inf\varnothing=+\infty$. This is an extended metric: if two endpoints are in different components, any third point is in a different component from at least one of them, so the triangle inequality has infinite right side. It is a finite metric precisely when there are no distinct components. Empty and singleton manifolds retain their unique distances.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: thm-riemannian-distance-is-a-metric.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-distance-from-a-point-to-a-subset`

Claim/conventions: For $A\subseteq M$, define the **distance to the subset** by $d_g(x,A)=\inf_{a\in A}d_g(x,a)$, with $\inf\varnothing=+\infty$.

Use [[def-extended-riemannian-distance-on-a-disconnected-manifold]]. If the component $C$ of $x$ meets $A$, all cross-component terms are infinite and may be discarded, so $d_g(x,A)=\inf_{a\in A\cap C}d_g(x,a)<\infty$. If $A\cap C=\varnothing$, every term is infinite and the value is $+\infty$. In particular $d_g(x,A)=0$ for $x\in A$, and $d_g(x,\{a\})=d_g(x,a)$.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-extended-riemannian-distance-on-a-disconnected-manifold.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-distance-to-a-nonempty-subset-is-one-lipschitz`

Claim/conventions: For nonempty $A$ in connected $M$, $x\mapsto d_g(x,A)$ is finite and $1$-Lipschitz. More generally this holds on a component $C$ with $A\cap C\ne\varnothing$.

Sources: Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.

Dependencies: def-distance-from-a-point-to-a-subset, thm-riemannian-distance-is-a-metric.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-volume-density`

Claim/conventions: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates.

The matrix is that of [[prop-coordinate-criterion-for-a-riemannian-metric]], so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are [[def-density-bundle-and-smooth-density]]. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in [[lem-the-riemannian-volume-density-is-coordinate-independent]].

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric, def-density-bundle-and-smooth-density.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `lem-the-riemannian-volume-density-is-coordinate-independent`

Claim/conventions: The local Riemannian volume densities glue to a positive smooth density independent of coordinates.

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.

Dependencies: def-riemannian-volume-density, prop-coordinate-criterion-for-a-riemannian-metric.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-volume-form-on-an-oriented-manifold`

Claim/conventions: On an oriented Riemannian $n$-manifold, the **Riemannian volume form** is $\operatorname{vol}_g=\sqrt{\det G_x}\,dx^1\wedge\cdots\wedge dx^n$ in positively oriented charts for $n\ge1$. For $n=0$ it is the supplied orientation sign $\varepsilon(p)\in\{1,-1\}$ at each point.

[[def-oriented-smooth-manifold-and-oriented-chart]] supplies the orientation. On positive-chart overlaps the Jacobian determinant is positive, so the density calculation in [[lem-the-riemannian-volume-density-is-coordinate-independent]] is also the top-form transformation law. Thus the formula glues, and $|\operatorname{vol}_g|=\mu_g$. Reversing orientation negates the form but leaves the density unchanged, also in dimension zero.

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.

Dependencies: lem-the-riemannian-volume-density-is-coordinate-independent, def-oriented-smooth-manifold-and-oriented-chart.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form`

Claim/conventions: The Riemannian volume form is the unique positive unit section of $\bigwedge^nT^*M$ for the specified orientation and normalized exterior metric.

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.

Dependencies: def-riemannian-volume-form-on-an-oriented-manifold, prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-volume-of-a-compactly-supported-smooth-density`

Claim/conventions: Assume countable choice. For smooth compactly supported $f$, define $\int_M f\mu_g$ by the intrinsic smooth density integral. More generally every compactly supported signed smooth density $\sigma$ has its existing intrinsic integral, independently of a Riemannian metric.

[[lem-the-riemannian-volume-density-is-coordinate-independent]] makes $f\mu_g$ a smooth compactly supported density. Apply [[def-integral-of-a-compactly-supported-smooth-density]] and [[thm-density-integration-is-defined-without-an-orientation]]; [[def-countable-choice]] is inherited precisely at chart-partition selection. In a chart the summand is the integral of the partition-weighted coefficient $f\sqrt{\det G}$. On a zero-manifold it is the finite sum of scalar density values, and empty support gives zero. No orientation is required.

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.

Dependencies: lem-the-riemannian-volume-density-is-coordinate-independent, def-integral-of-a-compactly-supported-smooth-density, thm-density-integration-is-defined-without-an-orientation, def-countable-choice.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density`

Claim/conventions: Under countable choice, the density $\mu_g$ defines a compact-finite, locally finite, sigma-finite Radon Borel measure $\operatorname{vol}_g$. Its completion has a separately specified completed domain. Smooth compact-support integrals agree with smooth density integration, and finite-radius metric balls are Borel.

Sources: Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433. The two exact Radon-density suppliers, including their Borel/completed distinction, provide the measurable extension.

Dependencies: lem-the-riemannian-volume-density-is-coordinate-independent, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-riemannian-volume-of-a-compactly-supported-smooth-density, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-density-measure-integration-agrees-with-smooth-density-integration, def-countable-choice.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-divergence`

Claim/conventions: The **Riemannian divergence** is defined in a local orientation by $\mathcal L_X\operatorname{vol}_g=(\operatorname{div}_gX)\operatorname{vol}_g$.

Use [[def-divergence-relative-to-a-volume-form]] with the local form of [[def-riemannian-volume-form-on-an-oriented-manifold]]. On overlaps, changing orientation multiplies the nonvanishing form by a locally constant sign. The Lie derivative multiplies by that same sign, so its scalar quotient is unchanged and glues even on nonorientable manifolds. Equivalently this differentiates the positive density of [[lem-the-riemannian-volume-density-is-coordinate-independent]] and divides by it; the equivalence is local in a density frame. At a boundary use local smooth extensions. In dimension zero every vector field, and hence divergence, is zero.

Sources: Lee, pp.423–424, definition and Exercise 16.31.

Dependencies: def-riemannian-volume-form-on-an-oriented-manifold, lem-the-riemannian-volume-density-is-coordinate-independent, def-divergence-relative-to-a-volume-form.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-coordinate-formula-for-riemannian-divergence`

Claim/conventions: In coordinates, $\operatorname{div}_gX=(\det G)^{-1/2}\sum_{i=1}^n\partial_i((\det G)^{1/2}X^i)$.

Sources: Lee, definition pp.423–424; local volume-divergence coordinate formula from the declared supplier.

Dependencies: def-riemannian-divergence, prop-divergence-is-well-defined-and-has-the-coordinate-formula.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-riemannian-divergence-theorem`

Claim/conventions: Assume countable choice. On an oriented Riemannian manifold with boundary, $n\ge1$, a smooth compactly supported vector field satisfies $\int_M(\operatorname{div}_gX)\operatorname{vol}_g=\int_{\partial M}g(X,\nu)\operatorname{vol}_{\partial g}$, with outward unit normal $\nu$ and outward-normal-first boundary orientation.

Sources: Lee, Propositions 15.32–15.33, pp.390–391, Lemma 16.30 and Theorem 16.32, pp.423–424; boundary and choice hypotheses are checked explicitly.

Dependencies: prop-coordinate-formula-for-riemannian-divergence, prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, thm-general-stokes-theorem, thm-divergence-theorem-relative-to-a-volume-form, def-induced-boundary-orientation, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane, prop-the-gradient-is-characterized-by-inner-products, prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, def-countable-choice.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `def-riemannian-hodge-star`

Claim/conventions: On an oriented Riemannian $n$-manifold, for $0\le k\le n$ the **Hodge star** is the fibrewise map $*:\bigwedge^kT^*M\to\bigwedge^{n-k}T^*M$ characterized by $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ for every pair of $k$-covectors.

The pairing is the determinant-normalized one of [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]], and the positive unit volume form is [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]]. This is the ordinary, orientation-dependent star, with no orientation-line twist. Existence, uniqueness and smoothness are proved in [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]. For $n=k=0$, it multiplies by the chosen orientation sign.

Sources: Lee, Chapter 16, Problem 16-18(c–e), pp.437–438; the local construction is proved in the following theorem.

Dependencies: prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `thm-hodge-star-is-a-smooth-bundle-isomorphism`

Claim/conventions: The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

Sources: Lee, Chapter 16, Problem 16-18(c–e), pp.437–438; existence is supplied here by the full complementary-wedge calculation, not by treating the exercise as a proof.

Dependencies: def-riemannian-hodge-star, lem-wedge-monomials-in-a-dual-basis-form-a-basis.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-hodge-star-squared-sign`

Claim/conventions: On real $k$-forms, $*^2=(-1)^{k(n-k)}\operatorname{id}$.

Sources: Lee, Problem 16-18(c–e), pp.437–438; block-transposition calculation above fixes the sign.

Dependencies: thm-hodge-star-is-a-smooth-bundle-isomorphism.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `prop-riemannian-inner-product-of-compactly-supported-forms`

Claim/conventions: Under countable choice, on an oriented Riemannian manifold the formula $(\alpha,\beta)=\int_M\alpha\wedge*\beta$ is a positive-definite real inner product on compactly supported smooth $k$-forms, $0\le k\le n$.

Sources: Lee, Proposition 16.28, p.422, and Problem 16-22(b), p.439. Lee states the pairing on compact manifolds; the proof here uses compact supports and the explicitly assumed integration prerequisites on a possibly noncompact manifold.

Dependencies: thm-hodge-star-is-a-smooth-bundle-isomorphism, def-riemannian-volume-of-a-compactly-supported-smooth-density, prop-positive-compactly-supported-top-forms-have-positive-integral, def-countable-choice.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `rem-the-codifferential-and-hodge-theory`

Claim/conventions: The algebraic Hodge star and its square sign [[prop-hodge-star-squared-sign]] are established here. The codifferential, its analytic adjoint interpretation, the Laplacian, harmonic forms and Hodge decomposition require later Hodge/PDE work. None of these analytic results is a premise of this page.

Sources: Lee, Problem 16-22, pp.438–439, codifferential and formal adjoint identities; analytic adjoint and Hodge-theory conclusions are not asserted here.

Dependencies: prop-hodge-star-squared-sign.

Decision: local argument written; definition with explicit conventions. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-pullback-of-a-riemannian-metric-by-every-smooth-map-is-a-riemannian-metric`

Claim/conventions: Every smooth map pulls a Riemannian metric back to a Riemannian metric.

Sources: Lee, Introduction to Smooth Manifolds, 2nd ed., pp. 330–331, pullback metrics and Proposition 13.9; the constant-map computation above is explicit.

Dependencies: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-every-riemannian-manifold-has-finite-distance-between-points-in-different-components`

Claim/conventions: Every Riemannian manifold has finite distance between points in different connected components.

Sources: Lee, pp. 337–338, length and connected-manifold distance; the disconnected extension here is the declared infimum-empty convention.

Dependencies: def-extended-riemannian-distance-on-a-disconnected-manifold.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve`

Claim/conventions: Riemannian distance is the length of a unique shortest curve. In fact both attainment and uniqueness can fail.

Sources: Lee, pp. 337–338, Riemannian length and distance. The nonattainment and antipodal calculations, including the finite angle-lift construction, are supplied above; no geodesic existence theorem is used.

Dependencies: def-riemannian-distance-on-a-connected-manifold, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, prop-length-is-additive-under-concatenation-and-invariant-under-reversal, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-riemannian-volume-form-exists-on-every-riemannian-manifold`

Claim/conventions: Every Riemannian manifold admits an ordinary nowhere-vanishing Riemannian volume form.

Sources: Lee, pp. 389–391, orientations and nonvanishing top forms, and pp. 422–423, Riemannian volume. The quotient atlas, metric descent, and sign obstruction are proved here without an orientability existence theorem or a choice assumption.

Dependencies: def-riemannian-volume-form-on-an-oriented-manifold, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-distance-function-is-smooth-on-all-of-m-times-m`

Claim/conventions: The Riemannian distance function is smooth everywhere on $M\times M$.

Sources: Lee, p. 338, Euclidean Riemannian distance; the nonsmoothness is the displayed absolute-value difference quotient.

Dependencies: def-riemannian-distance-on-a-connected-manifold, thm-scalar-and-vector-line-integral-estimates, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `fs-the-hodge-star-is-defined-without-an-orientation`

Claim/conventions: The ordinary Hodge star is determined by the Riemannian metric without any orientation.

Sources: Lee, Problem 16-18(a–c), pp. 437–438, Hodge star on oriented inner-product spaces; the one-dimensional orientation reversal is calculated above.

Dependencies: def-riemannian-hodge-star, thm-hodge-star-is-a-smooth-bundle-isomorphism.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-euclidean-metric-and-its-musical-maps`

Claim/conventions: On Euclidean $\mathbb R^n$, $v^\flat=\sum_i v^i dx^i$, $\alpha^\sharp=\sum_i\alpha_i\partial_i$, and $\operatorname{grad}f=\sum_i(\partial_i f)\partial_i$.

Sources: Lee, Example 13.1, p.328; musical isomorphisms and gradient, p.342. The quadratic-function instance is calculated above.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric, thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, prop-the-gradient-is-characterized-by-inner-products.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-round-metric-on-the-sphere-as-an-induced-metric`

Claim/conventions: The Euclidean inclusion of $S^n$ induces its round metric. In spherical coordinates on $S^2$, $g=d\theta^2+\sin^2\theta\,d\varphi^2$.

Sources: Lee, Proposition 13.9, p.331, and Example 13.16, p.333, round metric. The spherical-coordinate dot products are displayed above.

Dependencies: prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, prop-coordinate-criterion-for-a-riemannian-metric.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-product-riemannian-metric`

Claim/conventions: The product metric on $(M,g)\times(N,h)$ is $\pi_M^*g+\pi_N^*h$, with block matrix $\operatorname{diag}(G,H)$.

Sources: Lee, Example 13.2 and equation (13.1), p.329, product metrics.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-a-conformal-metric-on-the-plane`

Claim/conventions: For $g=e^{2u}(dx^2+dy^2)$ on $\mathbb R^2$, $\operatorname{grad}_g f=e^{-2u}(f_x\partial_x+f_y\partial_y)$ and $\mu_g=e^{2u}|dx\,dy|$.

Sources: Lee, p.328, coordinate metric criterion; p.342, gradient characterization; Proposition 15.31, p.390, coordinate volume coefficient. The conformal instance and its determinant are derived above.

Dependencies: def-conformal-equivalence-of-riemannian-metrics, def-riemannian-gradient, def-riemannian-volume-density.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-hyperbolic-upper-half-space-metric`

Claim/conventions: For $n\ge1$, on $\{(x_1,\ldots,x_{n-1},y):y>0\}$ the metric $g=y^{-2}(\sum_{i<n}dx_i^2+dy^2)$ has density $y^{-n}|dx_1\cdots dx_{n-1}dy|$.

Sources: Lee, p.328, coordinate positive-definiteness criterion; Proposition 15.31, p.390, volume coefficient; pp.430–431, Riemannian density. The upper-half-space coefficients are computed above; no curvature or completeness statement is asserted.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric, def-riemannian-volume-density.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-the-flat-torus-metric-from-periodic-euclidean-coordinates`

Claim/conventions: The periodic Euclidean coordinates on $\mathbb R^n/\mathbb Z^n=(\mathbb R/\mathbb Z)^n$ define a metric locally equal to $\sum_i dx_i^2$, called the flat torus metric.

Sources: Lee, p.332, definition of flatness as local Euclidean isometry and Theorem 13.14(b). The particular torus quotient atlas and metric descent are proved above.

Dependencies: prop-coordinate-criterion-for-a-riemannian-metric.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-length-and-distance-on-the-circle`

Claim/conventions: On the unit circle with induced metric, $d(e^{ia},e^{ib})=\min_{k\in\mathbb Z}|b-a+2\pi k|$. Antipodes have two distinct minimizing semicircles.

Sources: Lee, pp. 331 and 337–338, induced metric and distance; the finite angle lift and minimization over integers are proved above.

Dependencies: def-riemannian-speed-and-length, def-riemannian-distance-on-a-connected-manifold, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-a-riemannian-distance-with-no-cross-component-finite-value`

Claim/conventions: On $M=\mathbb R\times\{0,1\}$ with metric $dx^2$ on each component, $d((x,i),(y,i))=|x-y|$ and $d((x,0),(y,1))=+\infty$.

Sources: Lee, pp. 337–338, connected distance and Euclidean calculation; cross-component infinity follows from the declared extended-distance convention.

Dependencies: def-extended-riemannian-distance-on-a-disconnected-manifold, thm-newton-leibniz-with-interior-derivative.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-volume-density-in-polar-coordinates`

Claim/conventions: In a polar chart of the Euclidean plane, the density is $r|dr\,d\theta|$ and the positive-oriented volume form is $r\,dr\wedge d\theta$.

Sources: Lee, Example 13.12, p.332, polar metric; Proposition 15.31, p.390, coordinate volume formula; pp.430–431, Riemannian density.

Dependencies: def-riemannian-volume-density, lem-the-riemannian-volume-density-is-coordinate-independent.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-hodge-star-on-euclidean-three-space`

Claim/conventions: In standard oriented Euclidean $\mathbb R^3$, $*1=dx\wedge dy\wedge dz$, $*dx=dy\wedge dz$, $*dy=dz\wedge dx$, $*dz=dx\wedge dy$, and $*^2=\mathrm{id}$ in every degree.

Sources: Lee, Problem 16-18(a–e), pp. 437–438, and Problem 16-19, p. 438, Euclidean Hodge-star computations.

Dependencies: thm-hodge-star-is-a-smooth-bundle-isomorphism, prop-hodge-star-squared-sign.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `ex-divergence-in-polar-coordinates`

Claim/conventions: For the Euclidean metric in polar coordinates, $\operatorname{div}(X^r\partial_r+X^\theta\partial_\theta)=r^{-1}\partial_r(rX^r)+\partial_\theta X^\theta$.

Sources: Lee, p.423, definition of divergence and Exercise 16.31; Example 13.12, p.332, polar metric. The coordinate divergence theorem declared as F1 supplies the local coefficient formula used above.

Dependencies: prop-coordinate-formula-for-riemannian-divergence.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Authored `cex-a-degenerate-pullback-metric-under-a-constant-map`

Claim/conventions: A constant smooth map always pulls a Riemannian metric back to a Riemannian metric.

Sources: Lee, pp. 330–331, pullback metrics and Proposition 13.9; the empty-manifold convention is that of the cited library definitions.

Dependencies: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, def-smooth-manifold, def-topological-manifold-without-boundary.

Decision: local argument written; all numbered steps and eight boundary cases mapped in the contract. Checks: included in the final explicit-path checks recorded below. Open gaps: none identified in this local argument; no transitive-closure certification. Next action: owning Alpha’s subsequent review.

### Final Step-5 receipt

Completed all 113 assigned item IDs listed individually above and all four pages, with stable IDs and the manifest’s exact 39/12/50/12 inventory. This consists of 24 definitions, 19 propositions, 19 theorems, 8 lemmas, 6 corollaries, 12 false statements, 21 examples, 3 counterexamples, and 1 remark. All 88 proof-bearing items have completed arguments and strict contracts; the contracts map each numbered step exactly once, its actual claim and inputs, every fact’s exact supplier excerpt and uses, and eight item-specific boundary dispositions.

Pages completed:

- `library/differential-geometry/the-de-rham-complex-homotopy-and-mayer-vietoris.md` — 39 assigned items.
- `library/differential-geometry/the-de-rham-complex-homotopy-and-mayer-vietoris-examples.md` — 12 assigned items.
- `library/differential-geometry/riemannian-metrics-length-distance-and-volume.md` — 50 assigned items.
- `library/differential-geometry/riemannian-metrics-length-distance-and-volume-examples.md` — 12 assigned items.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with every one of the manifest’s 113 explicit `items/ID.md` arguments: final exit 0, **88 checked, 0 failing**. Definitions and the remark have no proof body. Initial passes exposed canonical phase repairs; those were adopted, with step references and contract boundary evidence remapped, and the complete scoped command was rerun to a clean result.
- Bare `node tools/validate-plan.mjs`: exit 2, usage requires a plan-spec argument. Correct invocation `node tools/validate-plan.mjs research/plan-spec.json`: final exit 0. It reports 3,609 redundant-prerequisite warnings, 978 pages with item lists, and 641 other planned pages without item lists. All four batch-9 pages now have their full inventories in the current plan. This is the real plan check, not a claim that its stored dependency arrays already include the Step-5 additions below.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-9.pages.json`: final exit 0, **113 items, 0 errors, 0 warnings**. Initial source-reference parser failures were repaired by writing block-style YAML reference lists while retaining the source URLs.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-9.proof-contracts.json --strict`: final exit 0, **88/88 checked, 0 errors, 0 warnings**. Added fact declarations and changed step numbering were synchronized with exact citation/derivation evidence before the final run.
- Additional `node tools/rendercheck.mjs` with all 113 explicit item paths and four explicit page paths: exit 0, **117 files**, all math parsed by real KaTeX and all frontmatter parsed by the renderer’s YAML parser. Accidental control characters in the Mayer–Vietoris source-locator strings were removed before this pass.
- Read-only consistency checks: all 113 authored dependency lists equal the manifest; no control characters remain; inventory counts and IDs agree with the current plan. Every newly added external supplier lies within the consumer page’s existing prerequisite closure. These checks do not prove mathematics.
- Recomputed same-frontier page/item/dependency/justification/forward-reference edges against the other current-run batch manifests: none. The owned consumer input remains the explicitly maintained empty array `research/phase-2-catchup-24-batch-9.cross-batch-dependencies.json`. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` after dependency/input edits; final refresh succeeded.

Provenance and source decisions:

All statements retain the manifest’s `ai-altered` provenance. The 88 supplied arguments retain `ai-altered` proof provenance; definitions and the remark retain `not-applicable`. No item has generated-statement provenance or generation metadata, and no generated statement is used as a target. No judge, publication, audit, or verification stamp was added. Source excerpts in contracts are excerpts of the exact current supplier Statement/Definition, not invented source theorems.

The mathematical authoring used the complete relevant Lee second-edition passages at the locators recorded per item, including the local tube/approximation route, de Rham operator and Mayer–Vietoris passages, metric/length/distance passages, volume/density and boundary passages, and Hodge exercises. The exercises are prompts for constructions proved here, not cited as completed existence proofs. Hodge locators were corrected to Problem **16-18(a–e), pp.437–438**, Euclidean computations to **16-19, p.438**, and the integral pairing to **16-22(b), p.439**. Other corrected locators include degree zero **Proposition 17.6, p.443**, product metrics **Example 13.2, p.329**, polar metrics **Example 13.12, p.332**, and the round sphere **Example 13.16, p.333**. The verified Lee reference was added where an item previously listed only Hitchin or Datar but its authored locator used Lee. Historical full-text recovery and independent scaffold evidence in the coverage/review files remain intact; no retrieval attempts or independent reviews were fabricated.

The current DG-15 and DG-18 design sections control; generated task line numbers have shifted and the earlier indicated Riemannian location now falls in an adjacent section. The current design’s explicit local smoothing route, countable-choice accounting, monotone pauses, empty-source constant pullback, dimension-one boundary sign, Radon measure supplier, both shortest-curve failures, and normalized exterior/Hodge conventions are all retained. The historical coverage status `blocked-pending-plan-registration` and historical empty-plan notes are stale: current plan inspection found all four exact inventories registered. Those independent historical artifacts were not overwritten.

Scope and owning-Alpha handoff:

No promised item, page, or mathematical conclusion was dropped. No unresolved mathematical gap was identified in the authored local arguments. No expansion or narrowing of the assigned scope is proposed. This is an authoring receipt, not an independent judgment or a transitive audit of published suppliers. The current proper embedding and Euclidean approximation suppliers were read in full and are used under their stated countable-choice assumptions; historical defects are not silently treated as current facts.

Alpha group d must reconcile the following explicit dependency additions from the completed manifest into the authoritative plan’s item arrays. They use existing earlier suppliers, fit the existing page-prerequisite closures, and require no new item or page. Step 5 has not edited the plan:

- `thm-wedge-product-descends-to-de-rham-cohomology`: add `thm-the-exterior-derivative-is-a-graded-derivation`.
- `cor-closed-differential-forms-are-locally-exact`: add `thm-the-exterior-derivative-commutes-with-pullback`.
- `thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds`: add `prop-pullback-is-a-morphism-of-de-rham-complexes`.
- `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact`: add `thm-newton-leibniz-with-interior-derivative`.
- `ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle`: add `thm-mayer-vietoris-sequence-in-de-rham-cohomology`.
- `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles`: add `thm-universal-property-of-module-tensor-products`, `thm-tensor-product-basis-from-bases`.
- `thm-riemannian-distance-is-a-metric`: add `thm-newton-leibniz-with-interior-derivative`.
- `fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve`: add `thm-newton-leibniz-with-interior-derivative`.
- `fs-the-distance-function-is-smooth-on-all-of-m-times-m`: add `thm-newton-leibniz-with-interior-derivative`.
- `ex-length-and-distance-on-the-circle`: add `thm-newton-leibniz-with-interior-derivative`.
- `ex-a-riemannian-distance-with-no-cross-component-finite-value`: add `thm-newton-leibniz-with-interior-derivative`.

The fundamental-theorem additions justify endpoint integral evaluations; exterior-derivative additions justify closedness, product closedness and pullback naturality; tensor additions justify bilinear descent and product bases; the explicit Mayer–Vietoris example now cites exactness directly at the nonzero-connector step. Next action is owning Alpha’s review and authorized plan synchronization. All owned content remains draft.
