# Current final scaffold adjudication — 0e052e93e6d98426

Run `phase-2-hg-prerequisite`, group a, batch 1, 2026-09-09.

**Outcome: repaired; ordinary verdict: sufficient.** The current A/B scaffold is sound with the inline supplements applied in this dispatch. No owner-decision file exists for this page. This section supersedes the historical adjudications below; it does not overrule an owner decision. The decision concerns this scaffold, not certification of every published item on its prerequisite pages.

## Applied repairs and previous findings

U8 is closed. `items/thm-reals-cauchy-complete.md` now defines each rational approximant by the unique least admissible natural triple (height, positive denominator, shifted numerator). Density gives a witness; positive-denominator representation and the natural embedding in the integers bound its coordinates; three applications of natural well-ordering give uniqueness. Separation on the natural-number/rational Cartesian product forms the graph. The rational Cauchy and limit estimates then prove completeness. This uses neither a choice of representatives for a sequence of real classes nor the later rational-countability theorem. Read the complete current proof and its rational-order/representation suppliers. The subsequent published bisection proof in `cor-cauchy-reals-lub-complete` has the required choice-free least-upper-bound conclusion. No edit to either published proof was made here.

The transitive route also uses the reciprocal construction at `items/lem-null-maximal.md`, proof 3.1. Its strict intermediate comparison is false when a_m=a_n, including m=n. Applied a complete local replacement **in `lem-bounded-real-ultralimits-and-free-tail-extension.strategy`**, before completeness is used: given a non-null rational Cauchy sequence, obtain delta>0 and N0 with |a_n|>delta eventually; set b_n=1 before N0 and b_n=1/a_n thereafter. At an index at least N0 and the Cauchy index for epsilon delta²,

`|b_m-b_n| = |a_m-a_n|/(|a_m||a_n|) <= |a_m-a_n|/delta² < epsilon`.

Thus b is Cauchy; ab−1 is eventually zero and hence null; the generated ideal contains 1=ab−(ab−1). The null ideal is proper, so this proves the exact maximality/reciprocal interface needed by `thm-reals-field`, without using `lem-null-maximal` to prove its replacement. Added the six actual earlier suppliers explicitly to the owned lemma's deps: `lem-cauchy-away-from-zero`, `thm-cauchy-ring`, `lem-null-ideal`, `lem-rat-triangle`, `def-null-sequence`, `thm-rat-ordered-field`. These already lie in the page prerequisite closure. The published real-field quotient operations and order proofs can consequently be used with this discharged reciprocal input. The false strict comparison itself is never used.

Also expanded `lem-triangle-extrema-and-real-tree-tripod-rules.strategy` to prove interval path separation directly. If a path avoids the cut point, the inverse images of one branch and the remaining branches partition [0,1] into two relatively open sets containing opposite endpoints. The supremum of the initial interval in the first set belongs to neither open set: one membership contradicts approach from the left, the other extends the initial interval. This uses the already declared least-upper-bound supplier and continuity interface, and removes an implicit appeal to a later connectedness theorem. It is an inline step of the existing lemma, not a new general theorem or pair.

F1–F7 remain resolved on the current input. The finite polygon lemma supplies separation, triangulation, prescribed-boundary PL disk extension, and disk-and-band neighborhoods locally. The fold uses a positive-width notch and two genuine polygonal disks; its explicit Q deforms the complement and is continuous at the seams. Loop endpoints are handled using temporary midpoints and distinct cyclic germs; closed-bigon deletion retains complete outside face-occurrence walks. Free-face peeling has separate monogon contraction and retained-arc retraction cases. Segment parameters use gamma_n(clamp(t,−a_n,b_n)/lambda_n), with a_n,b_n in rescaled units, and the projection inequality accounts for all represented side points. None of the earlier rejected recipes remains a premise.

## Item-level closure and mathematical checks

The pair retains 22 A items and 3 B items, with all explicit deps and mandatory exports. Its five A requires are earlier; B requires A only. The current plan and the temporary overlay containing the actual item inventories both pass. No new prerequisite pair, shared prose amendment, or changed mathematical scope is needed.

Checked the proof uses, not every result co-resident on a prerequisite page:

- Real arithmetic/completeness: Cauchy-ring and null-ideal estimates, eventual lower bound away from zero, rational field and order arithmetic, integer/rational representation and operation well-definedness, natural well-ordering, density, real order, deterministic rational approximation, and the least-upper-bound proof. Ordered-field interval estimates and the nonnegative square-root proof use that same completeness interface. The reciprocal correction above is upstream of all uses of it.
- Ultrafilters: the tail filter is proper, AC-based extension supplies a free ultrafilter, and maximality gives the set/complement alternative. Read the Zorn/Bourbaki–Witt route, including admissible-set existence, extremal-cut closure, successor and supremum steps, comparability, all-extremal argument and chain union of filters. Full AC is stated where a family of geodesics, witnesses or violating triangles is selected. Supplied-ultrafilter bisection and finite epsilon estimates require no additional Choice.
- Topology: Heine–Borel's deterministic bisection uses recursion and the nonempty nested-interval clause. Ambient/subspace compactness and compact images use only finite witness selection. Closed subsets, Hausdorff separation and the continuous-bijection closed-map criterion give the compact-to-Hausdorff interface. Only the epsilon-delta/preimage-open continuity clauses are used, not the sequential-continuity clause. Only the trace/subspace and restriction clauses are needed, not later pasting statements. The local supremum proof above supplies path separation. No recorded Jordan, general degree, or surface-classification theorem is a supplier.
- Group and diagram inputs: reduced-word equality and normal-closure products give the literal expression/reduction route. Algebraic area uses a least natural number of relator factors. The published Cayley theorem supplies vertex distances only; the owned proof constructs the unit-edge path metric and minimizing paths from finite endpoint candidates. Neither strict-disc van Kampen existence nor diagram-area equality supplies the construction.
- Cone chain: the quotient metric passes finite inequalities through bounded ultralimits; clamping yields finite intervals, rays and lines. The two-side control lemma uses maximal Hausdorff distance and the finite/infinite endpoint cases. The full converse uses a global triangle maximum, with the bounded and escaping third-side cases and the extension to C max(1,d). The sublinear hypothesis applies to every representative triangle; its coalescing minsize triple and the distance equality identify every cone segment. All basepoints and ordinary-null scales for one fixed free ultrafilter are retained.
- Filling chain: all bounded graph regions are occupied, each retained characteristic boundary is preserved, and thin edges are exterior bridges. Incidence gives E<=Lm+n; neighborhood triangulations give 8E vertex triangles, 8E band triangles and 4I cap triangles, plus the isolated-vertex case. Thus N<=20(L+1)(m+n+1), independently of conjugator lengths. Coordinate-distance maps and oriented crossing cancellation give square coverage; finite polygonal dissection gives area<=Nr². The discretization term remains: minsize<=2r sqrt(N)+2r+2e. The common square-root profile, then the metric wedge, prove the uniform K,L conclusion without asserting an explicit delta formula.
- B checks: line/tree cone identifications use the segment and tripod interfaces; the Euclidean triangle lower bound and scaling computation use the d2 metric and finite Cauchy–Schwarz/root arithmetic, not the unused general p-norm clauses. The examples do not supply A proofs.

A conservative traversal of declared deps, justified_by and pre-Remarks body references now has 32 external roots and 492 candidates, with no unresolved ID, B-page candidate or forbidden-catalogue candidate. The page closure has 60 pages and does not reach `deferred-set-theory-beyond-choice`. These broad scans are structural safeguards, not an assertion that all 492 candidates are actual proof uses or that all their optional clauses were semantically audited. The actual clauses and local replacements are specified above. No declared dependency was removed; optional published body references were not silently turned into premises. There is no actual missing, forward or circular supplier in the owned proof route.

## Full-text evidence and scope

Fresh complete relevant reading, alongside the source records and previous fix evidence:

- [Druţu–Kapovich, Geometric Group Theory](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf): Lemma 10.25, PDF p.358; Lemma 11.168 and Proposition 11.167, PDF pp.442–445; Definition 11.175, Proposition 11.176 and Lemma 11.177, PDF pp.448–449; Definitions 9.101–9.102 and Propositions 9.103–9.104, PDF pp.350–352. Checked the full relevant proofs, cone quantifiers and the local discretization correction. Other coverage locators retain their earlier full-text evidence; no whole-book reading is claimed.
- [Frigerio–Sisto](https://arxiv.org/pdf/0810.1526): complete Lemma 11, PDF pp.7–8, for path containment; cone conventions remain as recorded in §1.1/§1.3. The owned tree argument now has its own interval separation proof.
- [Bridson, The geometry of the word problem](https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf): PDF pp.21–24, Proposition 4.1.2, Lemmas 4.2.3/4.2.6, Remark 4.2.5 and final existence proof. Read the complete recovered local PDF argument; PyMuPDF extraction has broken font spacing and image-resource warnings. Its SHA-256 is `2b6bd046a17ef5c779f362b7d9809810b11c04695b028b8bc268954360973ba2`, matching the existing receipt.
- [Erickson, Simple Polygons](https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf): §1.2 separation, §1.4 diagonal/triangulation, §1.6 Theorem 1.10, complete relevant text. [Planar Graphs](https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html): Topological graphs, Planar graphs and planar maps, Rotation systems, including the complete dart/successor conventions. Prescribed-boundary extension, notch construction and occurrence checks are local arguments in the scaffold.
- Additional review evidence: [Aitken, Constructing the Real Numbers, Chapter 9](https://public.csusm.edu/aitken_html/m378_S2016/Ch9RealNumbers.pdf), §6 Lemmas 17–18, PDF pp.9–10, and §8 Lemma 30/Theorem 31/footnote 3, PDF p.13. Read the full reciprocal estimate and deterministic-approximation argument. Their disposition is inline prerequisite support for `lem-bounded-real-ultralimits-and-free-tail-extension`; they are not external proof suppliers or replacement source records. The local proof above uses the exact library rational/Cauchy dependencies.

All five active sources remain backed by existing complete-text receipts. `source-fetch-check --stamp` reused five and made zero new stamps; no source was dropped and no open-web absence or five-retry exhaustion is asserted. A DK indexed open failed transiently and the original URL recovered; complete relevant text was accessible. No new liveness sweep is claimed.

All 36 existing harvested dispositions remain. All six declines were refreshed and resolved as stands. Exact-area converses retain destination `small-cancellation-disc-diagrams-and-torsion-toolkit`; forward centroid/general coarse subquadratic filling results retain `quantitative-hyperbolic-geometry-toolkit`. Conjugator diameter and the alternative fixed-scaling quantifier package are unused by this proof. The two inline supplements do not consume any declined result.

## Frontier and published-consumer debt

Batch 1 is the sole batch; its owned dependency input is correctly `[]`. There are no same-run cross-batch suppliers.

For canonical-ledger reconciliation, the new bounded published finding is `items/lem-null-maximal.md: proof 3.1`, the false strict comparison when the numerator vanishes. Actual use path: owned bounded-real lemma → `cor-cauchy-reals-lub-complete` → `thm-reals-cauchy-complete` → real field/ordered-field interface → `lem-null-maximal`. The complete local rational argument installed above discharges that input; Phase-3 repair of the published line remains debt. Exact earlier suppliers are the six new deps, and the repair is replacing the first comparison by <= while taking the maximum of the tail and Cauchy indices. There is no pending new Phase-2 supplier pair for this correction. No canonical ledger edit is made by this batch writer.

The existing strict-disc consumers `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, and `thm-diagram-area-agrees-with-algebraic-relator-area` remain Phase-3 debt. Their recorded suppliers are `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`; their publication does not itself rewrite the consumers. None supplies the owned construction. HG-CONE-CONVERSE remains assigned this pair's `thm-linear-relator-area-implies-slim-geodesic-triangles` and `lem-uniform-filling-data-give-a-uniform-slimness-bound`, with the quantitative toolkit, for subsequent consumer repair.

## Checks and changed artifacts

Changed only the owned manifest strategies/deps, coverage support/audit status, notes, group report, ordinary verdict and scope evidence, plus prescribed tool-owned resolution/derived bookkeeping. No published proof, shared plan/prose or owner-decision file was edited. The 22/3 inventory is unchanged.

After the mathematical edits, ran successfully: manifest-deps (25 items, zero errors); content-policy --manifest-only (zero errors/warnings); coverage-checklist --require-destination (36 results, zero errors/warnings); source-fetch-check --stamp (5/5 existing receipts); source-backing --require-verified (25 backed results, existing run liveness and `/tmp/hgp-0e05-reharvest.json`); validate-plan on the current shared plan and `/tmp/hgp-0e05-overlay.json` containing current inventories; extcheck --quiet (exit 0 with existing published-reference warnings); scope-decisions refresh and check (six declines, zero errors). Logs: `/tmp/hgp-0e05-final-{manifest,policy,coverage,plan,overlay,ext,scope,graph}.log`. The earlier same-dispatch checks are superseded by these post-edit results.

Autopilot status was recomputed with the installed tsx wrapper and explicit run/state-directory arguments; no RESUME assertion was used. Git log was checked, latest `209eaa2f1`. Final bookkeeping and hashes are recorded below after execution. The terminal repaired decision is recorded only after all pair edits; only the prescribed derived frontier refresh follows it.

Final bookkeeping: git diff --check exited 0; scaffold-verdicts --require-sufficient reports 1/1 reviewed, zero insufficient and zero unreviewed; scope check reports six current declines and zero errors. Frontier refresh --require-reviewed exited 0, with reviewed batch 1, zero edges, zero unreviewed batches and zero orphaned reviews. Current manifest SHA-256: `cecc5dbfb63b912586cd4f0d59ad58c35f69fd3f9d7f64406272ad2e9f1bf3ba`; coverage SHA-256: `0753040a8b2e0e9d1a29e168e072a3a168f20886f25ce9ab39fb9659d224715f`. No owner decision exists at final recording.

---

# Historical adjudications (superseded)

# Current final scaffold adjudication — 07258ae1146c6857

Run `phase-2-hg-prerequisite`, group a, batch 1, 2026-09-09.

**Outcome: escalate; ordinary verdict: insufficient.** No owner-decision file exists for this pair. The owner repair-progress document describes proposed repairs, not a terminal ruling. No mathematical manifest repair was applied in this dispatch. This section supersedes earlier verdicts; their evidence remains historical.

## Resolved objections

F6 is resolved by the current separate monogon contraction. Its characteristic disk meets the remainder only at the marked vertex; affine contraction to that vertex fixes the intersection and descends to the carrier. For two or more occurrences the retained abstract boundary is an arc, and the relative triangle homotopy fixes all its identifications. Geometric corners do not add labelled occurrences.

F7 is resolved: original endpoints are alpha_n,beta_n, scaled endpoints are a_n=lambda_n alpha_n,b_n=lambda_n beta_n, and evaluation is gamma_n(clamp(t,-a_n,b_n)/lambda_n). The exact scaled-distance identity and interval projection inequality prove isometry and capture every represented point, including finite and escaping endpoints. Neither former objection is retained as a blocker.

## U8 — prerequisite certification remains incomplete

This is an adjudicator uncertainty about the complete local proof interface, **not a counterexample to real completeness and not a claim that it requires Choice**. Exact published location: `items/thm-reals-cauchy-complete.md`, proof 1.1, which picks a rational q_k for each real x_k with error less than 1/k. Its declared density lemma establishes each individual approximation; the proof does not state a deterministic simultaneous selection rule. The earlier batch notes already suggest enumeration. That suggestion is not a completed audit of its exact earlier dependencies.

Actual load-bearing path: `lem-bounded-real-ultralimits-and-free-tail-extension` → `cor-cauchy-reals-lub-complete` → `thm-reals-cauchy-complete` (1.1). Least-upper-bound completeness supplies the nested-interval intersection for bounded real ultralimits, whose supplied-ultrafilter part promises no new Choice. The same corollary directly supplies `lem-triangle-extrema-and-real-tree-tripod-rules` and `lem-polygonal-boundary-crossing-for-affine-disk-maps`. Thus this is an actual prerequisite interface, not a co-resident-page audit or unrelated published consumer debt. Merely adding AC to the existence-of-free-ultrafilter clause would not certify the separate choice-free clause.

Read both completeness proofs in full, including the rational-epsilon convention, Cauchy class construction, eventual order bound, and bisection proof of least upper bounds; also read `thm-rationals-countable`, `lem-rat-embeds-dense`, the real field/ordered-field interface, and the relevant definitions. A deterministic route is available mathematically: fix a surjection e:N→Q, take the least index j with |x_k-e(j)|<1/k, and then use the displayed rational Cauchy and limit estimates. The exact potential suppliers are `thm-rationals-countable`, `thm-well-ordering-principle`, and `lem-rat-embeds-dense`, together with the original ordered-field and rational-sequence dependencies. However, I have not completed verification of that entire transitive route or supplied a checked local replacement interface in the owned manifest. The closure inspection below is not a substitute. I cannot certify every required dependency with the confidence demanded by this dispatch.

Owner decision needed: settle the choice-free completeness interface against its exact earlier proof prerequisites, or supply a local completeness/least-upper-bound route before the bounded-real lemma and reroute its three direct completeness consumers. A local route must retain the Cauchy-real conventions, rational-epsilon estimates and choice-free conclusion, without using the affected completeness clause to prove its replacement. No new A/B pair or shared plan amendment is presently shown necessary. No published edit is requested or made. The enumeration paragraph is a proposed route, not an applied repair or success. Mathematical work on this pair stops here; no further Beta/review or repeat repair is requested.

For canonical-ledger reconciliation, classify this as an **incomplete prerequisite audit / potential issue (U-P)** at `thm-reals-cauchy-complete`, not a confirmed defect or repaired result. Candidate supplier/support IDs and strategy are given above. No pending Phase-2 supplier is asserted for this foundational interface, and no canonical ledger entry was changed by this batch adjudicator.

## Sources and evidence actually read

Read the current 22 A and 3 B contracts and strategies, prior reviews/rechecks and fix evidence, binding HG-P design, current plan entries, all 36 coverage dispositions, scope decisions, and batch dependency records. The five A requires precede the pair; B requires only A and supplies no owned proof. No inventory exceeds the 60-item cap.

Fresh authoritative full-text reading in this dispatch:

- [Aitken, Constructing the Real Numbers, Chapter 9](https://public.csusm.edu/aitken_html/m378_S2016/Ch9RealNumbers.pdf), §8, PDF p.13: complete Lemma 30, Theorem 31 and footnote 3. The footnote gives a deterministic least-denominator/least-numerator selection. This supports the proposed route; it is review evidence, not an installed replacement source or local proof supplier. The source is fully accessible. A Krapp construction PDF was also opened, but no complete relevant proof reading there is claimed.
- [Druţu–Kapovich, Geometric Group Theory](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), complete Lemma 11.168 and Proposition 11.167 with both fat-triangle cases (PDF pp.442–445); Definition 11.175, Proposition 11.176 and Lemma 11.177 (pp.448–449); Lemma 10.48 (p.366). Checked ordinary-null scaling, fixed-ultrafilter quantifiers, global maxima, and the equality identifying arbitrary cone segments. Remaining coverage locators retain prior reading evidence; no fresh whole-chapter reading is claimed.
- [Bridson, The geometry of the word problem](https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf), complete relevant §4.1–4.2 passages, Proposition 4.1.2, Lemmas 4.2.3/4.2.6, Remark 4.2.5 and final existence proof, PDF pp.21–24. Reused `/tmp/hgp-bridson-bfs.pdf` and extracted the complete argument text; extraction has broken font spacing and image-resource warnings. Compared exterior folding/deletion and spur insertion with the owned occurrence construction.
- [Erickson, Simple Polygons](https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf), §1.2 separation proof, §1.4 diagonal/triangulation arguments, §1.6 Theorem 1.10. The matched-fan prescribed-boundary extension and positive-width notch are local constructions. No general recorded Jordan theorem supplies the scaffold.
- [Erickson, Planar Graphs](https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html), Topological graphs, Planar graphs and planar maps, Rotation systems. Compared distinct loop germs and boundary successors with the local occurrence argument.
- [Frigerio–Sisto](https://arxiv.org/pdf/0810.1526), §1.1, §1.3 and complete Lemma 11, PDF pp.1–3 and 7–8: cone conventions and the tree path-containment argument.

The five active original sources remain accessible through recorded receipts and recovered text; no drop or replacement-source resolution was made. Fresh shell downloads of DK, Erickson's polygons and Frigerio–Sisto failed with temporary DNS errors; browser original texts were accessible. Targeted DK screenshot requests failed with cache misses, while complete relevant text was readable through browser opens. These are extraction/network failures, not evidence of open-web absence. `source-fetch-check --stamp` reused five existing receipts and wrote zero new stamps. No five-retry exhaustion or new URL sweep is claimed.

Published proof reading additionally covered the ultrafilter extension/characterization and Zorn/Bourbaki–Witt route (the admissible-set subgraph is not fully certified), normal-closure products and reduced words, word-metric vertex distances, algebraic-area definition and least natural number, compact-image/homeomorphism interface, Heine–Borel, metric separation/continuity, and Euclidean/real-line metric interfaces. Only actual clauses used were examined: e.g. vertex distances do not prove metric-realization geodesicity; the latter is constructed locally. Sequential-continuity choice claims and unrelated co-resident results are not imported as premises.

A conservative traversal of declared deps, justified_by and pre-Remarks linked body references has 26 external roots and 492 candidates, with no unresolved ID, B-page candidate or forbidden-catalogue candidate. These are structural observations only. The traversal includes optional clauses; it is an audit queue, not a certificate of 492 actual proof uses. Complete transitive semantic certification remains unfinished. No unused declared dependency was removed.

## Scope and consumer ledger

All six scope declines stand with refreshed evidence. Exact-area converses remain at `small-cancellation-disc-diagrams-and-torsion-toolkit`; the forward centroid/general coarse-isoperimetric results remain at `quantitative-hyperbolic-geometry-toolkit`. Conjugator diameter and the alternative cone quantifier package are unused by this route.

Batch 1 is the only batch and its dependency input is correctly `[]`; there are no same-run cross-batch suppliers. The canonical ledger's strict-disc consumers `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, and `thm-diagram-area-agrees-with-algebraic-relator-area` remain Phase-3 debt and do not supply this scaffold. Their recorded suppliers `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` are published; that publication does not repair the consumers. HG-CONE-CONVERSE still needs this pair's linear-area/uniform-slimness suppliers and the quantitative toolkit. No unrelated debt was converted into a supplier blocker.

## Checks and changes

Changed only this report, the ordinary verdict, group scope evidence and owned notes, plus tool-owned resolution/derived bookkeeping. No manifest, source disposition, published content, plan, prose design or owner-decision file was edited. Source stamping made no receipt changes.

Ran successfully: `manifest-deps` (25 items, zero errors); `content-policy --manifest-only` (25 items, zero errors/warnings); `coverage-checklist --require-destination` (36 results, zero errors/warnings); `source-fetch-check --stamp` (5/5 existing receipts); `source-backing --require-verified` (25 results backed using existing run liveness and `/tmp/hgp-0725-reharvest.json`); `validate-plan` on the current plan and `/tmp/hgp-0725-overlay.json` containing current A/B inventories; `extcheck --quiet` (pass with existing published-reference warnings); `scope-decisions refresh` (six declines, zero pending). Logs are `/tmp/hgp-0725-{manifest,policy,coverage,backing,plan,overlay,ext}.log`.

Plain Node could not load the autopilot `.mts` entrypoint, and its strip-types flag failed because this Node lacks TypeScript support. The installed tsx loader runs it successfully; the default state directory belonged to frontier-23, so its fallback report was rejected as evidence. Status was then successfully recomputed with explicit `--run phase-2-hg-prerequisite --state-dir .autopilot/phase-2-hg-prerequisite`. Git log was checked (latest `209eaa2f1`); no RESUME assertion was used. No authoring, judge, publication or complete semantic certificate is claimed. Final bookkeeping checks are recorded below after execution.

Final bookkeeping checks: scope-decisions check (6 declines, zero errors), coverage-checklist (36 results), source-fetch-check (5/5 existing receipts, zero new stamps), and git diff --check all exited 0. Frontier refresh exited 0; the derived ledger has reviewed batch 1, zero edges, zero unreviewed batches and zero orphaned reviews. Current manifest SHA-256: `129fef4eb72d9120aae1c34497a6259773f108cc96bd041932586278180c8e15`; coverage SHA-256: `c1abcb502c12af597afc1360b8bd067b1e3064020d935bc59cef09be641e07f6`. The terminal escalation is recorded after these edits; only the prescribed derived-ledger refresh follows it.

---

# Historical adjudications (superseded)

# Current final scaffold adjudication — edf8bd74588a7360

Run `phase-2-hg-prerequisite`, group a, batch 1, 2026-09-09.

**Outcome: escalate. Ordinary verdict: insufficient.** No owner-decision file exists. The owner-requested progress document records proposed repairs, not an overriding ruling. No mathematical manifest repair was applied. This section supersedes earlier adjudications for the current inputs; earlier sections are history.

## Current findings and decision needed

**F6 — the relative peeling argument does not cover a monogon.** Exact location: `research/phase-2-hg-prerequisite-batch-1.pages.json`, `lem-relator-expressions-give-controlled-singular-planar-diagrams.strategy`, paragraph beginning “Contractibility follows”. It maps a unique free face side to the top side of T0 and the remaining characteristic boundary to the other two sides, then applies H_t(x,y)=(x,(1-t)y+t|x|).

For a face with one side occurrence, the complement of the open free side in the characteristic boundary is a single marked vertex. It cannot be sent by a boundary homeomorphism to the nontrivial two-side arc of T0. Equivalently, the closure of the unique side is the entire characteristic boundary circle, not a proper closed arc with distinct endpoints. Such faces are explicitly permitted: the one-face lollipop for the length-one relator a in the presentation <a|a> is already a witness, without any subtle folding. Subdividing its geometric polygon does not change the fact that the one original free occurrence covers all but one point of its boundary. This refutes the prescribed construction in this case, not the existence theorem or contractibility of the disk.

The new occupied-side/cyclic-germ reasoning addresses the former F5 deletion uncertainty: at the intermediate vertex all non-circle germs are inside, at the base vertex deletion removes one contiguous inside block, and a retained open face cannot cross the circle. For a characteristic face with at least two side occurrences, the proposed homotopy fixes the retained boundary pointwise, so repeated identifications there are respected. The monogon is an additional necessary case; the new paragraph does not prove it.

Actual obligation/path: contractibility promised in this owned construction and the binding HG-P design; the diagram construction supplies `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`, then `lem-relator-disks-give-area-controlled-coarse-fillings`, `thm-linear-relator-area-implies-slim-geodesic-triangles`, and `lem-uniform-filling-data-give-a-uniform-slimness-bound`. The thickening has its own disk-topology proof and does not infer a disk from contractibility; that distinction does not authorize dropping the construction's required contractibility claim.

Proposed amendment for the owner: separate the one-occurrence face and construct its disk contraction to its attaching vertex, fixing that vertex and the rest of the carrier; give the characteristic-disk model and explain why its attachment to the remainder is exactly that point. For the other faces retain the relative arc retraction, with explicit geometric subdivision independent of the original labelled occurrences. A convex-disk contraction is a plausible local route. I have not completed a certification of this amendment together with every required characteristic-cell/topological prerequisite, and am not 100% confident of repairing and certifying every remaining obligation. The owner must settle that complete interface; no proposed argument is recorded as an applied repair. No new A/B pair or shared-plan change is currently proposed.

**F7 — inconsistent parameter units in the segment-limit construction.** Exact location: the same manifest, `lem-geodesic-segments-have-isometric-ultralimits.strategy`, “the rescaled parameter intervals have endpoints -a_n,b_n” followed by “clamp t/lambda_n to [-a_n,b_n]”. The published `def-geodesic-and-geodesic-metric-space` parameterizes a segment by original metric distance. As literally written, on the original segment [0,n] with lambda_n=1/n and origin 0 the rescaled interval is [0,1]; the rule evaluates at min(nt,1), whose rescaled distance from 0 tends to 0 for every fixed t in (0,1]. It does not give an isometry of [0,1]. This is a defect in the specified proof recipe, not a counterexample to the standard theorem.

Exact proposed correction: write original endpoints as -alpha_n,beta_n, set a_n=lambda_n alpha_n and b_n=lambda_n beta_n, and evaluate gamma_n(clamp(t,-a_n,b_n)/lambda_n). For finite t in the limiting interval the clamped rescaled parameters tend to t; the rescaled distance between evaluations is the absolute difference of those parameters. Propagate this convention to finite endpoints, rays, lines, and represented side points. The required inputs are already declared: the geodesic definition, bounded-real ultralimit calculus and explicit AC selections. This correction is proposed, not applied in a pair whose full repair I cannot certify. It affects both tree-cone lemmas/theorems, the sublinear-minsize criterion, and the line/tree B example through their declared segment-limit dependency.

## Evidence and audit limits

Read the current 22 A and 3 B contracts/strategies, initial review, successive recheck findings, fix/owner-progress evidence, binding HG-P design, corresponding current plan entries, all source dispositions, scope decisions and batch dependency inputs. The five A requires are earlier and the A inventory is below the 60-item limit. The actual-inventory temporary plan overlay passes. No owner ruling was overwritten and no published file or shared plan/prose was edited.

Fresh source reading:

- [Bridson, The geometry of the word problem](https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf), PDF pp.21–24, including complete Proposition 4.1.2, Lemmas 4.2.3/4.2.6, Remark 4.2.5 and the final existence proof. Reused `/tmp/hgp-bridson-bfs.pdf`; its extraction has broken font spacing and image-resource warnings, but the relevant argument text is present. The proof supports fold/deletion and spur insertion; it does not provide the scaffold's asserted monogon-to-triangle boundary map.
- [Erickson, Simple Polygons](https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf), complete §1.2, §1.4 and §1.6 through Theorem 1.10 (PDF pp.4–9 and 12–14). These prove separation, triangulation and PL disk parametrization for embedded simple polygons. A marked monogon boundary is not a single straight side of such a polygon. The matched-fan extension remains local.
- [Erickson, Planar Graphs, 2023](https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html), Abstract graphs, Topological graphs, Planar graphs and planar maps, Rotation systems; also compared the 2020 treatment. Distinct darts at loops and boundary successors support the new bookkeeping. The general Jordan appeal is not imported as a library supplier.
- [Druţu–Kapovich, Geometric Group Theory](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), full Lemmas 10.48/10.51 and Definition 10.50 (PDF pp.366–367), and Lemma 11.168/Proposition 11.167 with both proof cases (PDF pp.442–445). These support distance-preserving limit maps and the fat-triangle route, conditional on the corrected local parameter construction. The selected violating scales tend to zero ordinarily. Corrected the coverage's misnomer “Example 10.49” to “Exercise 10.49”; no result was added or dropped.
- [Frigerio–Sisto](https://arxiv.org/pdf/0810.1526), §1.1, §1.3 and complete §3 Lemma 11 (PDF pp.1–3, 7–8). These supply an independent definition and tree path-containment treatment. No alternate theorem was silently substituted.

Recovery: DK direct browser open failed (cache miss), query-suffixed recovery failed, then the indexed original recovered the complete 837-page text after the search `Kapovich Drutu ggt.pdf Geometric Group Theory full book`. An Oxford copy attempted alongside recovery failed; the original was already recovered, so further retries were unnecessary. One Frigerio–Sisto targeted open failed; reopening its original at the relevant lines recovered the complete proof. Earlier recorded attempts were reused; no source was declared unavailable or dropped and no new read/fetch stamp was manufactured.

Fresh bounded published-proof reading included the normal-closure product proof, reduced-word stack proof, compact-image/homeomorphism theorem, algebraic-area definition, well-ordering principle, geodesic definition and vertex word-metric theorem. The normal-closure direction supplies an expression, while local well-ordering supplies its minimum length. The word-metric theorem supplies vertex distances; the owned filling item constructs the metric realization separately. The compact-to-Hausdorff theorem only supplies an inverse for an already constructed continuous bijection and cannot establish F6's impossible boundary identification.

A current conservative traversal of deps, justified_by and pre-Remarks linked body references has 26 external roots and 492 candidate items, with no unresolved ID, B-page or forbidden-catalogue candidate. This is an audit queue, not classification of every co-resident result as a used premise, and not complete transitive semantic certification. That certification remains incomplete after the required escalation stop. No unused declared edge was removed. No new published defect was asserted.

## Scope, consumer debt and checks

The six declined source results still stand: conjugator-diameter control and the alternate cone-quantifier package are unused; exact area converses, the forward centroid bound and the general coarse-isoperimetric theorem have existing destinations. The local F6/F7 repairs do not require them. The group scope decisions were refreshed and their evidence updated for these inputs.

Batch 1 is the sole batch, its owned dependency input is correctly `[]`, and there is no same-frontier cross-batch supplier. The canonical ledger's three strict-disc consumer entries remain Phase-3 debt: `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, `thm-diagram-area-agrees-with-algebraic-relator-area`. None supplies the owned construction. Their existing repair strategies use the published `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`; supplier publication does not close those consumers. HG-CONE-CONVERSE still waits on HG-P's scaffold-only linear-area and uniform-slimness items, then the quantitative toolkit. No canonical-ledger edit is required by this bounded review.

Checks actually run, all exit 0 before the evidence-only edits above:

- `manifest-deps` batch 1: 25 items, zero normalized/errors.
- `content-policy --manifest-only` batch 1: 25 items, zero errors/warnings.
- `coverage-checklist --require-destination`: 36 dispositions, zero errors/warnings.
- `source-fetch-check --stamp`: 5/5 existing receipts, zero newly stamped, zero drops.
- `source-backing --require-verified`: 25/25 backed, using existing run liveness and `/tmp/hgp-edf8-reharvest.json`; no new URL sweep claimed.
- `validate-plan research/plan-spec.json` and `/tmp/hgp-edf8-overlay.json`: pass with existing warnings; the latter overlays both current manifest inventories.
- `extcheck --quiet`: pass with existing published-reference warnings.
- `scope-decisions refresh --run phase-2-hg-prerequisite --group a`: six declines, zero pending.

Check logs: `/tmp/hgp-edf8-{manifest,policy,coverage,backing,plan,overlay,ext}.log`. The live status was recomputed from `.autopilot/phase-2-hg-prerequisite` and git history checked; no RESUME file was used. No authoring/judge/publication checks or complete semantic certificate are claimed. Post-evidence scope/source checks and ledger refresh are recorded below after execution.

Post-evidence checks: scope-decisions check (6 declines, 0 errors), coverage-checklist (36 dispositions), source-fetch-check (5/5 receipts), source-backing (25/25) and git diff --check all exited 0. Frontier refresh exited 0 with batch 1 reviewed, no edges, no unreviewed batches and no orphaned reviews. The manifest was not modified. Current manifest SHA-256: `dc46f02a5e17a2d435ffa97f2b11ac3b2a66adda29cd39fcc72b8b65c4542985`; current coverage SHA-256: `5bf2f7c74c3d0f954b6313f4b541c11d6c0dd351a3c0ede0c78b0bf514f11e63`. The terminal escalation is recorded after these evidence edits; only the prescribed derived-ledger refresh follows it.

---

# Historical adjudications

# Current final scaffold adjudication — 3c62ad827e62de2b

Run `phase-2-hg-prerequisite`, group a, batch 1, 2026-09-09.

**Outcome: escalate. Ordinary verdict: insufficient.** No mathematical repair was applied. No owner-decision file exists for this pair. The owner-requested repair-progress document records proposed repairs, not a terminal owner ruling. This section is the current adjudication; the earlier report below is retained as history.

## Revised F4 is resolved

The current `lem-finite-polygonal-disk-and-collar-surgery` extends a prescribed PL boundary map by matched fans on convex polygons. Its finite triangle refinements justify PL composition and inverse control. The folding consumer now constructs a positive-width notch and glues maps of two embedded polygonal disks inside a containing disk. It no longer consumes a slit-annulus parametrization or an ambient extension. The previous F4 objection does not apply to these changed inputs. The shared compactness prerequisite is present, and the actual-inventory plan overlay passes. The compatible 4d/8/4k count still gives 16E+4I+4 and the stated 20(L+1) bound, conditional on the diagram incidence invariants.

## F5 — remaining adjudicator uncertainty: occurrence-level loop deletion

Exact location: `research/phase-2-hg-prerequisite-batch-1.pages.json`, `lem-relator-expressions-give-controlled-singular-planar-diagrams.strategy`, from “To handle loop edges” through the closed-bigon deletion and subsequent contractibility paragraph.

The proposed procedure first folds M-B-N, then treats A-(M=N)-C, deleting the bounded lobe when A=C. I have not established with full confidence that, for every permitted loop/repeated-face occurrence configuration after the first fold, the stated sector assertions suffice to preserve the literal remaining outer walk, all retained relator face-occurrence walks, and the filled-bounded-region invariant. The later peeling argument also requires those retained characteristic-face attachments to support its relative retractions. This is an unverified proof obligation in the local construction, **not a counterexample to the lemma or an assertion that the revised construction is false**. The general PL disk-extension result alone does not settle this occurrence bookkeeping.

Exact load-bearing path:

`lem-relator-expressions-give-controlled-singular-planar-diagrams`
→ `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`
→ `lem-relator-disks-give-area-controlled-coarse-fillings`
→ `thm-linear-relator-area-implies-slim-geodesic-triangles`
→ `lem-uniform-filling-data-give-a-uniform-slimness-bound`.

Owner decision needed: adjudicate the existing loop/bigon induction, or supply an explicit rotation/occurrence argument for its retained outer walk and face attachments, including the two-loop and repeated-face cases and the relative peeling step. Such a clarification could fit in this existing lemma before thickening; no new A/B pair or shared-plan amendment is proposed. I am not 100% confident of completing every remaining obligation, so mathematical work on this pair stops with escalation. No further Beta or review was requested. Full transitive semantic certification remains incomplete and is not inferred from the checks below.

## Evidence read and source recovery

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the frontier-ledger brief, initial review, previous recheck, current fix notes and owner-requested repair progress; all 22 A and 3 B manifest contracts/strategies; all 35 coverage dispositions and source records; the binding HG-P design, corresponding current plan entries, scope records and batch dependency inputs. The A inventory is below the 60-item limit.

Read [Erickson, Simple Polygons](https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf), complete §1.2 polygon-separation argument, §1.4 diagonal/triangulation arguments, and §1.6 through Theorem 1.10 (PDF pp.4–9, 12–14). This supports the polygonal disk construction; the matched-boundary fan and notch are the scaffold's local arguments. Read [Druţu–Kapovich](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), complete Lemma 11.168 and Proposition 11.167 proofs, PDF pp.442–445, including the bounded/unbounded third-side cases and both quantifier versions. The owned proof uses only the fixed-ultrafilter/all-null-scales route. Frigerio–Sisto's PDF opened, but no complete new reading of its targeted proofs is claimed in this dispatch. Earlier readings remain historical evidence.

Attempted to reread Bridson §4.2 at https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf. Initial browser open failed. Recovery attempts, in order: shell urllib to original URL (DNS failure); browser query `?fulltext=1` (internal error); same query retried (internal error); indexed original PDF opened after searching `Bridson geometry word problem bfs.pdf` (timeout); HTTP original URL (timeout). Additional attempts at the Oxford www host path and `?download=1` were rejected as unsafe by the browser. A local PDF-name search found no Bridson copy. No complete Bridson reread is claimed. These failures do not establish open-web absence; no source drop, replacement-source claim, or read/fetch stamp was manufactured. The uncertainty concerns the exact local proof, not failure of the mechanical source gate.

## Dependency and scope reconciliation

Read the actual normal-closure and reduced-word proofs; the algebraic-area definition and the local minimum reroute through `thm-well-ordering-principle`; the vertex-only word-metric theorem and the owned realization argument; the geodesic definition, ultrafilter extension/characterization, compact-image theorem, Heine–Borel, real-line and Euclidean metric proofs, square roots, Cauchy-real LUB/completeness and Zorn proofs. This is a bounded prerequisite review, not a claim to have certified every transitive published proof. A conservative traversal of deps, justified_by and pre-Remarks body links found 26 external roots and 492 candidate items, with no missing ID, B-page home or forbidden-catalogue home. It does not classify all candidates as actual dependencies or prove their adequacy. In particular the general Minkowski clause co-resident with the d2 proof is not needed by these Euclidean examples.

The six source declines still stand for their existing item-specific reasons: no conjugator-length bound, exact-area converse, forward centroid implication, general coarse-isoperimetric theorem, or alternate cone-quantifier package is used. Both destination pages exist. The refreshed scope file records current evidence.

Batch 1 is the sole run batch; its input remains `[]`. No cross-batch supplier is used. The canonical ledger's HG-CONE-CONVERSE entry and the three strict-disc consumer rows remain Phase-3 debt. Exact published IDs are `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, and `thm-diagram-area-agrees-with-algebraic-relator-area`; none supplies this local construction. Their planned repair uses the now-published `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`. HG-P's two linear-area/uniform-slimness suppliers remain scaffold-only. No new published defect is asserted or published content edited.

## Checks actually run

All following commands exited 0:

- `manifest-deps` on batch 1: 25 items, zero normalization/errors.
- `content-policy --manifest-only` on batch 1: 25 items, zero errors/warnings.
- `coverage-checklist --require-destination`: 35 dispositions, zero errors/warnings.
- `source-fetch-check --stamp`: 4/4 existing fetch receipts, zero newly stamped, zero drops.
- `source-backing --require-verified`, using existing run liveness and `/tmp/hgp3-reharvest.json`: 25/25 backed; no new URL sweep claimed.
- `validate-plan research/plan-spec.json` and `/tmp/hgp3-overlay.json` with both current manifest pages overlaid: pass with existing warnings.
- `extcheck --quiet`: pass with existing published warnings.
- `scope-decisions refresh --run phase-2-hg-prerequisite --group a`: six declines, zero pending before evidence refresh.

Read-only check logs: `/tmp/hgp3-{manifest,policy,coverage,plan,overlay,ext}.log`. Status was recomputed from `.autopilot/phase-2-hg-prerequisite`, and current git history checked; no concluded RESUME file was used as run state. No authoring, judge, publication or full-closure certification is claimed. Final evidence consistency and ledger checks are recorded below after execution.

Final evidence checks: scope-decisions check (six declines), coverage-checklist (35 dispositions), source-backing (25/25), frontier-dependency-ledger refresh and git diff --check all exited 0. The derived ledger has no edges, unreviewed batches or orphaned reviews. The manifest was not modified by this dispatch. The terminal escalation is recorded only after these final evidence edits/checks; the final derived-ledger refresh follows it.

---

# Historical report — superseded by the current adjudication above

# Group a final scaffold adjudication

Run `phase-2-hg-prerequisite`, batch 1, dispatch `scaffold-final-a-5f927b6eb7e8485f`, 2026-09-09.

Outcome: **escalate** for `asymptotic-cones-and-the-sublinear-triangle-criterion` and its B companion. Ordinary verdict: **insufficient**. No mathematical repair applied. No owner-decision file existed at entry; the owner-requested repair progress file explicitly describes proposed constructions pending adjudication, not a final owner ruling.

This report supersedes the earlier recheck for the changed scaffold. The old identity-outside collapse and old numerical triangle budget are no longer the current strategies. The shared compactness amendment is present. Do not keep those stale formulations as current blockers.

## Current evidence and resolved portions

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the frontier-ledger brief, initial review, previous recheck, batch fix notes, owner-requested repair progress, all current A/B manifest statements and strategies, coverage and its 35 dispositions, group scope records, corresponding authoritative plan entries, and the full HG-P binding design. The inventory is 22 A and 3 B items, below the 60-item A limit. Read the four direct published interfaces declared by the new polygon/collar lemma, including the full compact-image theorem proof. That theorem's compact-to-Hausdorff clause supplies an inverse only after a continuous bijection is constructed; it supplies neither a cut-annulus parametrization nor PL control.

The new Q formula agrees across y=0, y=1 and |x|=y, collapses T to the vertical segment and is injective off T. It no longer claims the complement is fixed. This resolves the previously exhibited discontinuity of that particular formula; it does not establish the preceding coordinate normalization.

The compatible vertex-disk/band/cap count is now explicit: degree-d vertex disks have 4d boundary segments, each edge band has eight, and a k-occurrence cap has 4k. Summing gives 8E+8E+4I, with four triangles for the isolated-vertex case. Conditional on the required polygonal neighbourhood/disk constructions, 16E+4I+4 <= 20(L+1)(m+n+1) is adequate. The former 4E+2Lm+4 objection is retired. Disk topology and occurrence-sensitive folds still depend on the new lemma below.

The authoritative plan and an exact actual-inventory temporary overlay both pass. In particular compactness is now in the A requires and binding prose; the B requires only A. Previous F3 is resolved structurally.

## F4 — unresolved cut-annulus and relative PL extension

Exact location: `research/phase-2-hg-prerequisite-batch-1.pages.json`, `lem-finite-polygonal-disk-and-collar-surgery.strategy`, the paragraph beginning “For an ambient extension”. It cuts the region between a polygon and a containing rectangle along a bridge and then applies disk parametrizations with matching values on the two bridge copies.

The preceding disk parametrization is proved for an embedded simple polygon. A zero-width bridge cut has two boundary occurrences with the same plane image, so it is not such a polygon. For example, take concentric squares and a straight bridge between their right edges: the slit boundary traverses that same segment twice. If one instead means an abstract surface obtained by splitting the bridge, one must construct that surface and establish its disk parametrization without assuming the very annular extension under proof. A positive-width collar cut is a possible route, but the present strategy does not construct the gluing maps recovering the slit surface with the specified two shore parameters. This is an unverified proof obligation, not a counterexample to the classical extension theorem.

There is an additional interface issue in the same use: the lemma exports a homeomorphism, whereas `lem-relator-expressions-give-controlled-singular-planar-diagrams.strategy` concludes that the carrier remains polygonal because Q is PL on y<=1. A general homeomorphism used to normalize the carrier does not preserve its finite polygonal structure. The extension must be proved PL on the relevant compact region (with finite subdivisions and the prescribed folding-edge parameters), or a separate adequate polygonal straightening argument must be supplied. The statement and annular construction currently do not discharge that stronger relative conclusion.

Exact load-bearing path:

`lem-finite-polygonal-disk-and-collar-surgery`
→ `lem-relator-expressions-give-controlled-singular-planar-diagrams`
→ `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`
→ `lem-relator-disks-give-area-controlled-coarse-fillings`
→ `thm-linear-relator-area-implies-slim-geodesic-triangles`
→ `lem-uniform-filling-data-give-a-uniform-slimness-bound`.

The disk/collar lemma is also a direct dependency of thickening. This is an actual local supplier obligation, not contamination from a co-resident published consumer.

Owner decision needed: resolve the relative polygonal extension obligation, including a proved disk model for the cut annulus and finite PL extension respecting prescribed boundary subdivisions; then justify its application to N and T and to the successive midpoint folds. A possible amendment is to strengthen the existing local lemma to export this relative PL extension and give the collar-cut/gluing construction before the folding consumer. No new pair is presently proposed. I am not 100% confident of completing every relative-extension and loop-fold obligation, so I stop mathematical work on this pair and escalate. No Beta, further reviewer, or repeated repair is requested. No complete transitive semantic audit is claimed after this stop.

## Source reading and recovery

Read the complete relevant separation and triangulation arguments in [Erickson, Simple Polygons](https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf), §1.2 (PDF pp.4–6) and §1.4, Lemma 1.4/Theorem 1.5 (PDF pp.7–9). They establish the embedded-polygon route. They do not by themselves provide the proposed cut-annulus relative extension. The coverage already distinguishes these additional local obligations from quoted source claims. No new source result was harvested or declined.

Attempted to reread [Bridson, The geometry of the word problem](https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf), §4.2 Lemma 4.2.3 and Remark 4.2.5. Initial browser open failed; five recovery attempts were: repeated direct browser open (internal error); shell curl to the same URL (DNS failure); browser query-suffixed PDF after searching `Bridson "geometry of the word problem" pdf Lemma 4.2.3` (internal error); opening the indexed original PDF search result (timeout); following the PDF link from the successfully opened author landing page (timeout). The search found the official author copy and publisher abstract, not a newly recovered complete proof. No complete Bridson reread is claimed in this dispatch. Earlier successful full-text receipts remain history; these temporary failures do not establish open-web absence. No source is dropped and no fetch/read stamp is invented. The current unresolved mathematical obligation is recorded independently of these fetch failures.

All four existing machine receipts pass source-fetch-check; it fetched no new text. Source-backing used the existing run liveness receipt, not a new URL sweep. Prior reviews' DK/Frigerio–Sisto readings are historical evidence, not readings performed by this dispatch.

## Scope, dependencies and published consumers

All six current source declines stand with item-specific evidence in the refreshed group scope file. The revised local topology route still uses no exact diagram-area converse, conjugator length bound, forward centroid implication, general coarse isoperimetric theorem, or alternate cone quantifier package. Both deferred destination pages exist in the current plan.

Batch 1 is the only run batch; its current dependency input is correctly `[]`. There is no cross-batch supplier to import or remove. Refresh the derived ledger after the final decision; it must remain free of unreviewed batches, edges and orphaned reviews. The structural validators pass; that is not a semantic certificate for every transitive item. The owned category is Group theory. No recorded catalogue supplier was introduced, and the extcheck Foundations gate passed.

Read the canonical ledger's HG-CONE-CONVERSE entry and the three existing strict-disc debt rows. The published `def-van-kampen-diagram-boundary-label-and-area`, `thm-van-kampen-lemma`, and `thm-diagram-area-agrees-with-algebraic-relator-area` are not consumed by this proposed local diagram construction. Their existing Phase-3 repair strategies use `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, and `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`; the ledger records these suppliers as published and the consumer repairs pending. No new published defect is asserted here. The HG-P linear-area and uniform-slimness suppliers remain scaffold-only and blocked; their later HG consumers must still wait. No published content, shared plan/prose or canonical consumer ledger was edited.

## Checks actually run

All exits below are 0. Logs for the seven parallel read-only checks are `/tmp/hgp-adjudication-{manifest,policy,coverage,backing,plan,overlay,extcheck}.log`.

| Command | Observed result |
|---|---|
| `node tools/source-fetch-check.mjs --coverage research/phase-2-hg-prerequisite-batch-1.coverage.json --stamp` | 4/4 existing receipts; zero newly stamped, zero drops. |
| `node tools/manifest-deps.mjs research/phase-2-hg-prerequisite-batch-1.pages.json` | 25 items; zero normalization/errors. |
| `node tools/content-policy.mjs --manifest-only research/phase-2-hg-prerequisite-batch-1.pages.json` | 25 items; zero errors/warnings. |
| `node tools/coverage-checklist.mjs research/phase-2-hg-prerequisite-batch-1.coverage.json --require-destination` | 35 dispositions; zero errors/warnings. |
| `node tools/source-backing.mjs --coverage research/phase-2-hg-prerequisite-batch-1.coverage.json --liveness research/phase-2-hg-prerequisite-url-liveness.json --reharvest-plan /tmp/hgp-adjudication-reharvest.json --require-verified` | 25/25 backed using existing liveness. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Pass with existing warnings; HG-P inventories still empty in this authoritative file. |
| `node tools/validate-plan.mjs /tmp/hgp-adjudication-overlay.json` | Pass with both current manifest inventories overlaid; no F3 error. |
| `node tools/extcheck.mjs --quiet` | Pass with existing published unproved-reference warnings. |

Scope refresh ran twice, each initially showing six pending rows. The final scope/dependency and post-evidence-edit checks are recorded below after execution. No authoring, judge, publication or whole-closure semantic certification is claimed.

Final post-edit checks: `scope-decisions check --run phase-2-hg-prerequisite --group a` exited 0 (six current declines, zero errors); `frontier-dependency-ledger refresh --run phase-2-hg-prerequisite` exited 0 and the derived ledger still has no edges or unreviewed batches. Coverage-checklist and source-backing were rerun after the coverage audit-status edit and both exited 0 (35 dispositions and 25/25 backed respectively). `git diff --check` exited 0. The mathematical manifest was not edited. The ordinary verdict contains only current F4, with a nonempty missing list; terminal escalation is recorded against these current inputs. No acceptance is implied by the passing mechanical checks.
