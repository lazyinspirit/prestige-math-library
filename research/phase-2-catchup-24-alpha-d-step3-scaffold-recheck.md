# Group d — current final scaffold adjudication

Run: phase-2-catchup-24. Dispatch: scaffold-final-d-db82e3cc12969225. Batches: 8 and 9.

All three pairs are **escalated**, with ordinary verdict `insufficient`. No mathematical repair is claimed. The current manifests and plan agree; the earlier report's plan mismatch, compact-generation omissions, relative-smoothing route and divergence-choice finding are superseded. This report replaces that stale recheck. No owner decision file exists for these three A pages at this adjudication. No owner file, published proof, shared plan or prose design was edited.

The live `.autopilot/phase-2-catchup-24/state.json` identifies this run; HEAD observed was `76afd32f7`. Concluded RESUME files were not used to determine the run. Read the current reviews, repair notes, manifests, coverage, designs, plan and owned dependency inputs. Current inventories are AT10 34/6, DG15 39/12 and DG18 50/12. Every corresponding plan item object and page requires array agrees with its manifest. All A pages are below the 60-item limit.

## Terminal findings and exact decisions needed

### higher-homotopy-groups-and-cofiber-sequences — escalate

AT10-FINAL-SPHERE-HEP: thm-based-sphere-maps-are-classified-by-geometric-degree uses the higher-dimensional reflection clause of prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, whose proof 2.1 uses prop-suspension-preserves-sphere-map-degree. Proof 1.1 of the latter silently uses a vertex cofibration to discharge the well-pointed hypothesis of cor-suspension-isomorphism-in-reduced-singular-homology. The published general-CW HEP argument does not justify this by its collar-neighborhood argument. An adequate finite replacement already exists earlier locally: lem-finite-cw-basepoints-have-explicit-homotopy-extension. Authorize and synchronize an explicit dependency on that lemma and an inline replay of the well-pointedness/suspension/reflection argument in the degree-classification contract in manifest, canonical plan and AT-10 prose. It is not currently reachable through this theorem's local deps. No new pair is needed. This is a missing proof bridge, not a counterexample to sphere degree classification.

### the-de-rham-complex-homotopy-and-mayer-vietoris — escalate

DG15-FINAL-NONCOMPACT-EMBEDDING: cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds -> thm-weak-whitney-proper-embedding-theorem -> thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space. The last item proves its noncompact conclusion solely by external Fact F1 and step 1.2; its sole local dependency proves only compact embedding. The owned smoothing construction needs a proper embedding of arbitrary, possibly noncompact N. Owner must authorize a complete local noncompact embedding construction and its prerequisites in the shared plan/prose, or separately repair the published prerequisite. Lee Theorem 6.15 pp.134–135 and Gualtieri 2008 Theorem 2.22 p.23 were read, but the exhaustion/regular-level/finite-dimensional gluing route has not been certified against a complete earlier local dependency inventory. Do not accept an external assertion as that proof.

### riemannian-metrics-length-distance-and-volume — escalate

DG18-FINAL-DENSITY-CHOICE: def-riemannian-volume-of-a-compactly-supported-smooth-density invokes def-integral-of-a-compactly-supported-smooth-density, whose definition explicitly assumes AC_omega. The owned definition omits this hypothesis, as does its consumer prop-riemannian-inner-product-of-compactly-supported-forms. Authorize shared-plan/prose synchronization of explicit countable-choice hypotheses and def-countable-choice deps on both owned items, identifying chart-partition selection as the inherited use, and propagate to any integral-consuming clauses. Alternatively install a complete finite compact-support localization argument avoiding the stronger supplier. Countable choice is sufficient for the declared route; its necessity for the mathematics is not asserted. The divergence theorem's previous missing assumption is already fixed.

### AT10 evidence and repair boundary

The new compact-test helpers give the missing kification, cylinder, mapping-space, quotient-product and weak-Hausdorff closed-relation arguments. The point-set package no longer has the old open-obligation blocker. The finite disk-cylinder retraction also supplies the finite CW HEP needed here without using the published all-CW proof. The degree-d circle-cone example now has the local-degree argument and agrees with the plan.

The remaining issue is in the actual **higher-dimensional reflection clause**, not every item on a homology prerequisite page. In `items/prop-suspension-preserves-sphere-map-degree.md`, proof 1.1 says “use the vertex cofibration”; its declared facts provide suspension only for a well-pointed space. In `items/prop-relative-cw-inclusions-are-cofibrations.md`, proof 1.1 only invokes a retraction of a neighborhood, which does not itself extend a given map to the entire disk cylinder; step 2.1 also leaves the general weak-topology product issue untreated. The general result must not be silently imported here. Its finite replacement is already item 29 of the owned A page, earlier than the degree theorem. Traversing the degree theorem's current local dependencies does not reach that replacement.

Exact proposed amendment: add `lem-finite-cw-basepoints-have-explicit-homotopy-extension` to the degree theorem's deps; add a strategy paragraph choosing a finite CW structure with vertex at each chosen sphere basepoint, applying the local lemma, then replaying natural suspension and the iterated reflection computation. This makes the finite case self-contained without relying on the defective general proof. Synchronize this exact item contract in `research/plan-spec.json` and the AT-10 prose route. Those shared writes are outside this dispatch. No new lemma or pair is required. The circle-only cone example does not use the higher-dimensional suspension clause and is not separately blocked by it.

### DG15 evidence and repair boundary

The current corollary correctly replaces the earlier relative-Whitney route with absolute Euclidean approximation, a refinement-indexed cutoff, and a tubular retraction. Its collars are separated correctly; the construction deals with noncompact A and explains the countable-choice implementation of partitions. The old relative-neighborhood objection therefore no longer blocks this route.

However, `items/thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space.md` has only the compact coordinate-bump lemma as a dependency. Its F1 simply asserts that the source's noncompact construction produces `(G,rho)`, and proof 1.2 repeats this assertion. The proposed corollary actually consumes the noncompact clause through the weak proper embedding theorem when its target N is noncompact. This is not an unrelated published consumer defect.

A candidate owner amendment is a complete inline noncompact embedding construction before the smoothing step, synchronized in the corollary's manifest/plan/prose contract, or a separately authorized published prerequisite repair. Lee's route uses smooth proper exhaustion, regular-value shells, compact-domain embeddings of uniform finite dimension, and locally finite even/odd coordinate blocks. The owner must establish those exact earlier suppliers (including boundary and choice hypotheses), avoid a circular appeal to all-manifold Whitney embedding, and prove injectivity, immersion and properness. Boundedness of the non-exhaustion coordinates can be arranged by smooth compression only after an actual embedding is constructed. I have not certified that entire local prerequisite package, so this candidate route is not an applied repair or acceptance. No fictitious new pair is prescribed; if local closure needs one, its full inventory must first be authorized in shared scope.

### DG18 evidence and repair boundary

The repaired divergence theorem explicitly assumes countable choice and declares `def-countable-choice`. This resolves the previous divergence finding. It does not impose a page-wide hypothesis on the independent density integral and inner-product statements.

Read the entire published density definition: its opening is `Assume AC_omega`; its chart partition is the exact inherited use. `thm-density-integration-is-defined-without-an-orientation` repeats that definition in its facts, although its own headline statement does not propagate the assumption. The owned density definition directly imports this integral and the owned compactly supported form inner product imports that definition. The owner amendment should explicitly prepend “Under countable choice” and add `def-countable-choice` to each of those two owned contracts, explaining the partition selection, with corresponding plan/prose synchronization and propagation through integral-consuming clauses. Alternatively a fully proved finite compact-support construction could retain the current choice-free statements; compact support alone is not a supplied proof of that replacement. This finding does not impose choice on pointwise density, metric-dual or Hodge-star algebra.

## Source reading and provenance

Existing coverage records were retained. No source was dropped or replaced, and no failed attempts or new fetch stamps were invented. Full-text sources, not search abstracts, informed the adjudication:

- Strickland, *The category of CGWH spaces*, pp.1–10, including the full compact-test/exponential/closed-relation development through Proposition 2.35: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf . Read the relevant complete arguments, including the continuation of the quotient-relation proof. Supports the repaired finite point-set package; general filtered colimits and beta-epimorphisms are unused.
- May, *A Concise Course in Algebraic Topology*, Chapter 6 pp.43–46 and Chapter 8 pp.57–60: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf . Read the cofibration/retraction and based constructions relevant to the current finite-cell and cofiber routes. These support the proposed finite HEP bridge, not a certification of the published infinite-CW proof.
- Hatcher, *Algebraic Topology*, Chapter 2, Proposition 2.30, Examples 2.31–2.32 and Proposition 2.33, pp.136–137: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf . Read the complete local-degree, cone and suspension arguments. Distinguish the circle degree computation from the iterated suspension clause needed by the owned general sphere theorem.
- Lee, *Introduction to Smooth Manifolds*, second edition, Theorem 6.15 and complete proof, pp.134–135: https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html . The full text exposes the noncompact exhaustion/gluing argument missing from the published F1 invocation. Reading the textbook proof does not install its local prerequisite package.
- Gualtieri, *MAT1300 Lecture Notes* (2008), Theorem 2.22, printed p.23 and preceding compact projection argument: https://www.math.toronto.edu/mgualt/MAT1300/1300%20Lecture%20notes.pdf . Read the complete theorem proof as an independent noncompact route. The shorter 2017 Part 11 notes, https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf , supply compact embedding/tubular discussion; they do not fill the missing noncompact local proof by citation alone.
- Datar, *Riemannian Geometry*, §§9.3–9.4, printed pp.56–58: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf . Read metric duality, volume and partition-based integration. This supports the integration route, but the exact inherited choice assumption is determined by the published local definition, not by an unstated foundational convention in the notes.

The existing two-treatment coverage for each A page remains in place. These readings are defect-focused evidence, not a claim that every page in the broad structural closure received a new semantic audit.

## Dependency and published-debt reconciliation

Both owned cross-batch input arrays remain empty. The declared frontier reconciliation, including required review rows, passes. The findings above use earlier published suppliers or an earlier item within batch 8, not another catchup batch. No new cross-batch dependency was introduced. The deferred Foundations catalogue was not introduced as a supplier.

Batch notes carry the published-debt receipts for canonical-ledger reconciliation by its authorized writer. The finite-CW lemma is a pending Phase-2 supplier for the general CW proof's finite step and the sphere suspension proof's well-pointedness step; it is not itself a consumer of the defective all-CW theorem. The density integration theorem needs inherited-axiom propagation review. The noncompact embedding item needs a real local construction, not merely a citation. These records do not claim the published proofs were repaired. Other unrelated published debts remain Phase 3 and are not reasons to reject their suppliers.

## Checks actually run

- `manifest-deps` on all run batch manifests: pass, 735 items, zero normalizations/errors.
- `content-policy --manifest-only` on batches 8 and 9: pass, 153 items, zero errors/warnings.
- `coverage-checklist --require-destination` on owned coverage: pass, 3 A pages, 215 harvested results, zero errors/warnings.
- `source-fetch-check --stamp --timeout-sec 12` on owned coverage: pass, 8/8 sources verified, zero newly stamped sources and zero drops. Existing full-text receipts were reused.
- `source-backing --require-verified`, using the current run URL-liveness file: pass, 83 authored items backed. This was not a new full-run URL sweep.
- `validate-plan`: exit 0; 973 populated pages and 646 empty planned pages; no hard cycles, forward dependencies, B dependencies or unresolved requirements. Log: `/tmp/group-d-final-plan.log`.
- `extcheck --quiet`: exit 0; existing published warnings remain; final recorded-result check passes. Log: `/tmp/group-d-final-extcheck.log`.
- Exact manifest/plan comparison: all six item inventories and requires arrays match.
- `scope-decisions refresh --run phase-2-catchup-24 --group d`, then resolved the new Strickland decline and ran `check`: 11 current declines, zero errors. The ten other current decisions remain stands; no scope was weakened to remove a prerequisite.
- `frontier-dependency-ledger refresh --run phase-2-catchup-24 --require-reviewed`: pass. The derived ledger is refreshed again after terminal recording.

Mechanical success does not discharge the three mathematical/interface findings. Ordinary verdicts remain insufficient, with nonempty current missing lists. Terminal escalation records bind the unchanged current scaffold hashes. No pair is edited after its terminal decision.
