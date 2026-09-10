# Batch 5 scaffold — BLOCKED

Supervisor recovery, 2026-09-09: genuine source-fetch verification now
passes for all active sources after rerunning from a working network
environment. The original DNS failures below remain historical. Mathematical
and published-interface obligations are unchanged; fetching is not proof
certification. Root is reconciling the published findings item by item.

Supervisor local repair: `thm-over-a-pid-flat-is-equivalent-to-torsion-free`
now has a direct ideal-test proof, replacing filtered colimits and the
abelian-special-case dependency. Root read all new direct proof suppliers;
precheck/rendercheck and this batch's content policy pass. Published item,
plan and owned manifest dependencies agree. Its old finding below is
historical and is A-R in the canonical ledger; the separate abelian theorem
remains U-C. Preserve this repair during subsequent scaffold/author work.

Run `phase-2-catchup-24`, beta batch 5, 2026-09-09. This is a provisional scaffold, not a publication or completed mathematical review. Source-fetch evidence and the full transitive semantic audit remain open. Do not advance this batch on the strength of the passing structural checks below.

## Authorized output and controlling scope

The owned `.pages.json` contains four pages: 41 A + 8 B existing Tor items and 4 A + 2 B new PID Kunneth items. The owned `.coverage.json` records source harvests, local fetch failures, and provisional source status. The owned `.cross-batch-dependencies.json` is empty: the current frontier collector finds no edges from batch 5 to another batch. Earlier published suppliers are still proof prerequisites; empty same-run bookkeeping does not clear them. The unified ledger was refreshed through the required tool, not edited manually. No published item/page, global plan, design, or other batch was changed.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the scaffold contract, frontier-ledger instructions, assigned task, current plan, and the complete HA-10 and HA-11a design sections. The autopilot status command against `.autopilot/phase-2-catchup-24` reported the live run in Stage 1 scaffold. Historical frontier-31a and frontier-34 batch evidence was consulted as history, not accepted as current authority.

Current `plan-spec.json` controls. Its partial-pair instruction makes Tor a page-release-only pair, preserving all 49 published items and the published B page. HA-10's older 39-A-item inventory omits the current arbitrary-handed flatness definition and projective-flatness lemma; the current 41-item A inventory controls. No extra items from the failed historical frontier-34 expansion were imported. Neither A page exceeds the 60-item plan limit.

The assigned HA-10 line 2159 is within its B discussion, not an independent design. Both assigned Kunneth locations belong to HA-11a: line 2354 begins the pair and line 2455 begins its B subsection. Both control their respective parts, subject to the current plan. Kunneth's plan item lists were empty; the six design IDs are now specified in the owned manifest, with detailed statements and proof strategies. None of these six IDs already has an item file.

Design/source locator corrections: tom Dieck's relevant theorem is on printed pages 298–299, PDF zero-based pages 310–311; the design confuses these numbers. Friedman's §6.4.5 has the broader heading “Some technical stuff: the proof of Lemma 6.4.2”; the named algebra discussion is a subheading. Lemma 6.4.19 ends on printed page 320, so the harvest extends there. Sharifi's current version is 97 pages, with §3.5 on printed pages 73–77, not older-version locators.

Three plan/published dependency discrepancies are reconciled only in the owned Tor manifest: the left-variable Tor LES also declares `thm-horseshoe-lemma-for-projective-resolutions`; Tor symmetry also declares both left/right resolution definitions; the flat-dimension criterion also declares the left flatness criterion and left-variable LES. These match the actual proof routes. Global-plan reconciliation is left to the authorized serial step. Published title changes for the total-complex definition and augmented-columns lemma were observed; the manifest retains controlling plan titles. No scope is inferred from title differences.

## Proposed new proof interface

All six new contracts explicitly assume AC, a commutative PID, nonnegative free complexes of arbitrary rank, direct-sum totalization, and the Koszul sign. AC is used for arbitrary-rank submodule freeness and simultaneous choices of sections; it is stronger than the DC used by the earlier resolution comparison machinery.

1. `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`: the earlier cycle-boundary sequence is exact for these modules; the earlier freeness lemma applies under AC to both cycles and boundaries. Free projectivity supplies sections of C_n onto B_(n−1). The coordinate map is c ↦ (c−s(dc),dc); the differential sends (z,b) to (b,0). This splits the chain module over the preceding boundary module, not the generally nonsplit inclusion B_n into Z_n.
2. `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`: use the canonical zero-differential complexes Z_p=Z_pC and A_p=B_(p−1)C. Tensor the degreewise split exact sequence 0→Z→C→A→0 with D. Freeness identifies homology with finite diagonal sums. The fixed-p differential is (-1)^p d_D. Lift b⊗y, with y a cycle, to s(b)⊗y; its boundary is b⊗y, so the connecting map has positive inclusion sign. The free presentation of H_(p−1)C gives the kernel as Tor, while right exactness gives the cokernel as the tensor term. The declared direct-sum and right-exactness suppliers assume commutativity, satisfied here.
3. `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`: extract the short exact kernel/cokernel sequence from the LES and identify its injection on cycle representatives. Its quotient is exactly H(rho⊗1), corestricted and identified by the free presentation, as in `items/lem-the-kunneth-tor-map.md`, proof 3.1–5.1. This is not merely an abstract isomorphic quotient. Naturality follows from the canonical short exact sequence and comparison maps for the free presentations. At n=0 the Tor sum is empty.
4. `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`: the selected cycle retractions followed by homology quotients give chain maps pi_C, pi_D to zero-differential homology complexes. The induced map r retracts the cross product alpha. For beta the established quotient, beta restricted to ker(r) is an isomorphism: remove alpha(r(x)) from any lift x. Its inverse s satisfies beta s=id and s beta=id−alpha r. This uses no Kunneth theorem for possibly nonfree homology complexes and claims no natural choice of section.
5. `ex-pid-polynomial-ring-kunneth-tor-class`: polynomial degree, division over a field, and Euclidean-implies-PID suppliers establish k[t] is a domain/PID. In ordered degree-one basis (e1⊗e0,e0⊗e1), d1=(t,t), d2=(-t,t). The cycle (1,-1) generates H1=R/(t), H0=R/(t), H2=0; rho⊗1 maps it to t e0⊗[e0], the standard Tor generator under B0=tR≅R. The initial nonexistent shorthand Euclidean supplier ID was corrected to `thm-euclidean-domain-is-a-pid` before validation.
6. `ex-pid-kunneth-over-a-field-has-no-tor-correction`: explicitly list the four zero-differential tensor generators. Only the projectivity clause of `prop-modules-over-a-field-are-projective-flat-and-injective` is used: its AC basis argument yields a degree-zero projective resolution and zero positive Tor. The injectivity clause is not a mathematical prerequisite of this example. The cross product is then a natural isomorphism.

The existing general PID Kunneth theorem and its abelian splitting theorem are deliberately absent from all six dependency arrays. Their proofs are not used, so their defects cannot block the new supplier. The earlier Tor-map lemma is used and was reread in full: it constructs the required quotient locally and does not invoke either theorem.

## Dependency review and limits

Read the 49 owned published Tor items and key prerequisite statements/proofs: tensor right exactness/direct sums, free projectivity and projective characterizations, projective comparison existence/uniqueness, homology LES/naturality, cycle-boundary sequences and arbitrary-rank PID submodule freeness, the cross product and Tor-map interfaces, field projectivity, polynomial degree/division and the Euclidean PID theorem. Their applicable clauses and uses are described above and below. This is not a claim that every ancestor proof was read.

A fresh declared-`deps` traversal, using published metadata where present, reaches 662 items from the 55 owned items. It found no missing ID, dependency cycle, or owned direct dependency outside the page `requires` closure, and no remaining owned manifest/published deps mismatch. The traversal excludes `justified_by` and semantically unclassified `forward_refs`; an early exploratory traversal incorrectly treated orientation as proof edges and mutated list metadata in memory, and its output was discarded. No reported cycle finding is based on that exploratory output.

The 662-item closure contains 93 Foundations items and no item from the deferred-beyond-choice catalogue by `deps`. This is only a preliminary check, NOT the required all-carrier Foundations certificate. Actual load-bearing body references, well-definedness obligations, justified_by edges, and forward_refs remain to be classified through the ancestor closure. In particular, the arbitrary-rank PID submodule proof uses well-ordering and transfinite induction in its body, although its deps do not name `thm-well-ordering-theorem` and `thm-transfinite-induction`. The exact proof use is the well-ordered basis filtration and its limit-stage union. These earlier local results must be included in the semantic audit; AC is already explicit in every new consumer. No conclusion of absence of a forbidden all-carrier path is claimed.

Pending prerequisite audits include comparison-map extension and homotopy extension sublemmas, LES connecting-map/exactness sublemmas, and the ancestors of the algebra/Foundations interfaces. The machine traversal is an index for that work, not evidence of statement adequacy. This incompleteness is a fatal readiness finding even independently of source-fetch failure.

## Findings for canonical published-consumer ledger reconciliation

These are owned notes for the serial lead; the shared published-consumer ledger was not edited. Do not classify an unreviewed co-resident item as defective merely because its page is a prerequisite.

- `items/prop-tor-zero-is-the-tensor-product-in-either-construction.md` uses `thm-right-exactness-of-tensor-products`, whose statement assumes a commutative ring, for an arbitrary-handed ring claim. Repair by proving (M⊗N)/im(M⊗K) ≅ M⊗(N/K) from `thm-universal-property-of-module-tensor-products`, and the analogous first-variable quotient. This direct balanced-map argument is already the route in the published flatness criteria. No new pair is required for this local proof. Kunneth only needs the commutative specialization, so the inadequate arbitrary-ring clause is not on its proof path.
- `items/lem-projective-modules-are-flat-over-an-arbitrary-ring.md` invokes the commutative direct-sum tensor theorem for arbitrary handed modules. The proof route itself is repairable directly: map (r_i)⊗n to (r_i n), and inversely map a finitely supported tuple (n_i) to the sum e_i⊗n_i; verify balancing, finite support, and inverse composites. A projective summand remains a summand after tensoring. Use the tensor universal property and `thm-projective-module-characterizations`. This is an actual Tor-balance ancestor, but its applicable commutative clause suffices for the new PID items; do not assert its noncommutative declared supplier is adequate.
- `items/prop-torsion-free-abelian-groups-are-flat.md`, proof 1.1–3.1, and `items/thm-over-a-pid-flat-is-equivalent-to-torsion-free.md`, proof 2.1–3.1, have undeclared substantive finite-free/filtered-union steps. `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` is a published exact finite-generation supplier. Complete repair can prove the required directed-union tensor facts inline from the generators-and-relations presentation: a tensor and a finite witness to its being zero involve finitely many module elements, hence occur in one finitely generated submodule. Injectivity then follows from flatness at that finite-free stage; right exactness handles the remaining terms. This avoids assuming a general filtered-colimit exactness theorem. Neither result is used by any of the six new PID Kunneth items. Their declared cyclic-Tor/criterion edges cannot simply be dropped without replacing the proof and documenting this finite-witness argument. The general PID proof does not follow merely by citing the abelian special case.
- `items/thm-flat-dimension-at-most-n-iff-higher-tor-vanishes.md` states the all-i>n criterion; its syzygy argument also proves the design's degree-(n+1) criterion. Preserve the stronger useful equivalence in the eventual authorized statement repair. The scaffold follows the current published inventory and does not silently rewrite it.
- `items/thm-submodules-of-free-modules-over-a-pid-are-free.md`: metadata debt described above; its AC proof has the correct arbitrary-rank successor/limit route. Repair declarations to cover the well-ordering and transfinite-induction uses, then audit their actual closure. This ancestor is used by the new first lemma and therefore cannot be waved away as unrelated consumer debt.
- `items/thm-kunneth-theorem-for-free-complexes-over-a-pid.md` cites the external theorem in lieu of the required local proof and omits the AC assumption used by its free-boundary supplier. `items/thm-the-kunneth-sequence-splits-nonnaturally.md` has an external abelian splitting argument. The exact new suppliers are respectively `thm-pid-kunneth-exactness-from-cycle-boundary-presentations` and `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`, currently scaffolded and BLOCKED, not published. A later repair must respect order: these existing HA-11 consumers precede HA-11a, so blindly adding a backward prerequisite from HA-11 to HA-11a is illegal. Reprove the needed local argument at the earlier location or have the authorized planner rehome/reorder the interface, while retaining finite-diagonal scope beyond the new nonnegative specialization. This is Phase-3 debt; neither old theorem supplies the six new items.
- Planned `thm-topological-kunneth-short-exact-sequence-for-homology` and `prop-the-homology-kunneth-sequence-splits-nonnaturally`, home `singular-cohomology-and-coefficient-theorems`, require the two new exactness/splitting suppliers respectively, plus a separate earlier topological chain comparison. The design requires adding the HA-11a page prerequisite while retaining `homology-axioms-degree-and-classical-applications-examples`. Neither topological item has a file at this checkout; record these as PLANNED consumer interfaces, not confirmed published-proof defects. Do not introduce a reverse dependency from HA-11a to topology.

## Sources and recovery

Six active records cover two independent authors per A page: Weibel plus Sharifi for Tor; tom Dieck plus Friedman for PID Kunneth. The three Weibel chapter files count as one treatment, not three independent authors. Coverage `canonical` rows preserve the full intended inventory and are not invented source headings. Source contents are distinct result/locator harvests; included means intended backing, not verified publication permission. Several deferred enrichments are explicitly assigned `owner-decision` because no authorized addition is being made.

The browser served full PDFs with relevant extracted passages read in overlapping ranges: Weibel ch.2 §2.7 through the first-quadrant assembly proof; ch.3 pp.66–69 through Exercise 3.2.1; ch.4 pp.91–95 through its Tor-dimension proof and exercises; Sharifi §3.5.1–14; tom Dieck §11.10.1 and adjacent cochain statement; Friedman pp.314–320 through the end of Lemma 6.4.19. Displayed mathematical typography is damaged or omitted in some browser extractions, especially Weibel's exercises and tom Dieck's diagrams. PDF screenshot attempts for tom Dieck pages 310–311 returned Internal Error. No complete rendered-text/read stamp was manufactured.

Local `curl` attempts to the Friedman, Weibel ch.3 and Sharifi URLs failed DNS. `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-5.coverage.json --stamp --timeout-sec 10` was run and failed on all six active URLs. The coverage records preserve its initial failure plus five actual retries per URL (EAI_AGAIN, timestamps around 06:35 UTC). These rapid same-host retries are recorded facts, not proof of open-web absence or a substitute for copy searches.

Browser recovery searched for author/institutional full copies. The uppercase Friedman `IHbook.pdf` timed out; HTTP, query and slash variants failed or were rejected as unsafe by the browser. The lowercase author-hosted `ihbook.pdf` recovered the complete 806-page July 24, 2019 manuscript; recovery retries stopped there. The original URL is retained in its record. For tom Dieck, the Edinburgh institutional copy served the book; the Göttingen author `algtop.pdf` is corrections rather than the textbook and was not used as proof backing. MIT's institutional chapter files and Sharifi's author-hosted complete notes served through the browser despite local DNS failures. This environment discrepancy rules out a “genuinely unavailable” finding. No source was dropped, and no source-count waiver is claimed.

Source cautions: Sharifi Lemma 3.5.7 mislabels the B modules' handedness; its alternate balance proof misnames the resolved module. The displayed finite-free resolution in Lemma 3.5.12 has an erroneous identity block; preserve the correct local cyclic resolution instead. Localization Lemma 3.5.14 needs a multiplicative-set witness for equality/zero of fractions; cancellation alone is invalid. Friedman's (6.13) discussion calls a tensor inclusion injective although its Tor kernel can be nonzero; our LES kernel calculation does not assume that. These observations are reasons to check the actual local argument, not to discard the intended results.

## Checks and next handoff

Executed checks:

- Source-fetch `--stamp --timeout-sec 10`: FAIL, six URLs, DNS failures, no stamps.
- `coverage-checklist.mjs …batch-5.coverage.json --require-destination`: PASS before final harvest-locator correction; final rerun also PASS: 2 pages, 98 combined source/canonical disposition rows, zero errors/warnings. Its success checks structure/dispositions, not full-text truth.
- `validate-plan.mjs /tmp/batch5-plan-overlay.json`: PASS with existing global advisories; overlay substitutes only these four owned pages into the current plan. Reports 938 pages with inventories and 681 empty planned inventories. Global plan was not written.
- Temporary Python declared-dependency traversal: 55 owned, 662 reachable; no missing/cyclic deps or owned direct page-closure errors. Six new IDs unused. Foundations preliminary deps-only test described above.
- Frontier ledger refresh: PASS; no batch-5 cross-batch edges currently collected.

Next authorized work: recover complete rendered formula evidence and valid fetch stamps; finish the actual semantic closure audit including all load-bearing carriers and the Foundations boundary; reconcile the recorded published-consumer findings and global-plan metadata in the serial owner stage. Do not request broader access or publish this provisional scaffold. No new prerequisite A/B pair has yet been proved necessary: the identified finite-witness and arbitrary-handed tensor repairs have local routes, but any newly discovered missing interface must be recorded with its full inventory and legal placement before this batch can clear.

Final read-only fetch-check rerun (`--coverage`, without `--stamp`): FAIL, 0/6 fetch-verified, six unstamped sources. The preliminary catalogue intersection was also checked against the actual 22-item published `library/not-proved-here/deferred-set-theory-beyond-choice.md` inventory, not only the empty plan inventory; no declared-deps intersection was found. All-carrier semantic review remains outstanding.

## Step-3 fix pass

The stable review/vote JSON does not assign a separate string `id` to each
finding.  The identifiers below therefore preserve its exact array paths:
`alpha-c-step3-scaffold-review.md:pair[tor-flatness-and-global-dimension].missing[0]`
and
`alpha-c-step3-scaffold-review.md:pair[kunneth-exactness-and-splittings-over-principal-ideal-domains].missing[0]`.
They are references to the stable findings, not a renumbering of them.

### `alpha-c-step3-scaffold-review.md:pair[tor-flatness-and-global-dimension].missing[0]` — PARTIALLY RESOLVED; pair remains BLOCKED

1. **Stale manifest contracts — resolved in the owned manifest.**
   `prop-tor-zero-is-the-tensor-product-in-either-construction` now declares
   `def-tor-by-resolving-the-left-module`,
   `def-tor-by-resolving-the-right-module`, and
   `thm-universal-property-of-module-tensor-products`, exactly as its
   published front matter and balanced-augmentation proof do.  Its strategy
   records the quotient/augmentation-lift proof.  Likewise,
   `lem-projective-modules-are-flat-over-an-arbitrary-ring` now declares
   `def-left-and-right-flat-modules-over-an-arbitrary-ring`,
   `thm-projective-module-characterizations`, and
   `thm-universal-property-of-module-tensor-products`, with the free-summand
   strategy used by the published proof.  Finally,
   `prop-torsion-free-abelian-groups-are-flat` now declares
   `def-left-and-right-flat-modules-over-an-arbitrary-ring`,
   `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`,
   `def-tensor-product-of-modules-by-generators-and-relations`, and
   `thm-right-exactness-of-tensor-products`; its strategy records the finite
   tensor-relation witness and finite-free subgroup route.  Changed record:
   `research/phase-2-catchup-24-batch-5.pages.json` only.  The published
   contracts were read but not edited.

2. **Missing DC in the Tor comparison/balance interface — unresolved fatal
   published-content blocker.**
   `prop-each-tor-construction-is-covariant-in-both-variables` and
   `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`
   use comparison maps.  Their supplied comparison-map route reaches
   `def-dependent-choice`, yet neither statement assumes DC.  The balance
   interface is load-bearing for `def-balanced-tor-bifunctor`, the right Tor
   long exact sequence, dimension shifting, the obstruction criterion, and
   Tor symmetry.  A manifest edge cannot repair a published statement.  The
   authorized repair is to propagate DC into each affected published statement
   and dependent interface, or to give a choice-free replacement comparison
   proof; until then this pair cannot clear.  This defect is recorded here as
   required batch-owned published-consumer/supplier evidence; the shared
   ledger is outside this batch's write authority.

3. **Missing AC and inadequate handedness/injectivity interface — unresolved
   fatal published-content blocker.**
   `thm-higher-tor-over-the-integers-vanishes` and
   `prop-the-integers-have-weak-and-global-dimension-one` use
   `thm-the-integers-have-global-dimension-one`, whose statement assumes AC,
   without carrying that hypothesis.  Also,
   `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` invokes the
   AC-qualified, left-hand-only
   `thm-equivalent-characterizations-of-semisimple-rings` to conclude all
   right modules are projective/injective.  A correct published repair must
   state AC and provide the required opposite/right and injectivity bridge; it
   may not be replaced by a weaker left-module claim.

4. **Choice-free torsion-free-flat claim — unresolved fatal published-content
   blocker.**  The currently declared finite-free supplier for
   `prop-torsion-free-abelian-groups-are-flat` reaches AC through the
   finite-generation/PID-invariant route (including simultaneous pivot
   choices), while the proposition says no choice is needed.  The source and
   proof currently establish only the displayed finite-witness route after the
   finite-free premise.  Clear this either by propagating AC into the published
   proposition and all consumers, or by adding and using an actually
   choice-free finite-rank-submodule lemma.  The dependency correction in (1)
   makes this real use visible; it does not cure it.

5. **B-premise gaps — unresolved fatal published-content blocker.**  The
   review's required premises remain absent from published B statements:
   `fs-flat-modules-have-projective-dimension-zero` and
   `ex-a-flat-nonprojective-module` need that Q is flat/nonprojective, that
   projective abelian groups are free, and Hom(Q,Z)=0;
   `fs-tor-one-vanishes-only-when-one-module-is-projective` needs the Q and
   nonprojective Z/2 facts; the R/I Tor-one fact needs a DC-qualified right
   Tor LES; its localization conclusion needs the direct free-resolution/
   dimension argument; and the weak/global-dimension field-and-Z example
   needs AC-qualified vector-space freeness and the integer global-dimension
   result.  These are statement/proof premises of published items and cannot
   be fixed in the batch manifest.  Each must be supplied explicitly by the
   serial published-item repair.

No new A/B pair is proposed for this Tor finding: every identified repair is
either a hypothesis propagation in a published item or a local prerequisite
whose placement belongs to the authorized published-item repair.  The exact
items and repair strategy above are the required ledger record.

### `alpha-c-step3-scaffold-review.md:pair[kunneth-exactness-and-splittings-over-principal-ideal-domains].missing[0]` — RESOLVED LOCALLY

The old route
`lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces` →
`lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` →
`thm-submodules-of-free-modules-over-a-pid-are-free`
would use the published final theorem's AC/well-order/transfinite proof while
its metadata omits `def-axiom-of-choice`, `thm-well-ordering-theorem`, and
`thm-transfinite-induction`.  That is a genuine supplier defect, not an
adequate dependency for the new page.

Changed record `research/phase-2-catchup-24-batch-5.pages.json` now inserts,
in proof order, the local prerequisite
`lem-pid-submodules-of-free-modules-are-free-with-choice` and reroutes the
two-term-decomposition lemma to it.  The new lemma has exactly these declared
dependencies: `def-principal-ideal-domain`,
`def-free-module-on-a-set-and-standard-basis`, `def-axiom-of-choice`,
`thm-well-ordering-theorem`, and `thm-transfinite-induction`.  Its statement
assumes AC and covers an arbitrary-rank free module over a commutative PID.
Its proof route is the well-ordered-coordinate construction: the alpha
coordinate image of the filtered submodule is a principal ideal; choose a
generator and a lift when nonzero; transfinite induction reduces finite
supports to show spanning; the greatest nonzero coordinate in a finite
relation proves independence.  Thus the new Künneth proof no longer uses the
defective published supplier, while retaining the necessary AC strength.

Two complete, independent lecture-note treatments were read and recorded in
`research/phase-2-catchup-24-batch-5.coverage.json`: Paul Garrett, §6,
Theorem 6.0.1 and proof (printed pp.178–179/PDF pp.10–11), and Abhishek Goel,
Chapter 8 footnote 2 (PDF p.137).  They respectively supply the full
well-ordered-basis proof and an independent arbitrary-rank confirmation.  The
same coverage record retains tom Dieck and Friedman as the independent
textbook/monograph support for the Künneth exactness and splitting steps.  No
new A/B pair is necessary: this is one prerequisite lemma placed before the
existing first item of the already authorized Künneth A page.  Its source
receipts and structural closure are rechecked below.

The published `thm-submodules-of-free-modules-over-a-pid-are-free` remains
Phase-3 metadata debt, but it is not an actual dependency of the repaired
Künneth route.  No unused declared edge to it remains in the local consumer.

### Step-3 checks actually run

- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-5.coverage.json --require-destination` — PASS: 2 pages, 102 harvested results, 0 errors/warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — PASS: 696 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-5.pages.json` — PASS: 56 scoped items, 0 errors/warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS (exit 0): the current global plan is acyclic with no unresolved IDs among pages with item inventories; it reported its pre-existing global advisory set for pages without item inventories and redundant prerequisites.  No plan file was changed.
- `node tools/extcheck.mjs` — PASS (exit 0): 57 pre-existing library-wide recorded-not-proved warnings, with every consequence marked; no error was emitted.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` — PASS.  The owned `research/phase-2-catchup-24-batch-5.cross-batch-dependencies.json` remains `[]`.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-5.coverage.json --stamp --timeout-sec 30` — BLOCKED: 6/8 sources already fetch-verified, the two newly added full-text URLs returned `EAI_AGAIN`, and no new stamp was written.  The checker recorded actual attempts; five recovery reruns after the initial failure also returned `EAI_AGAIN`.  The full texts were nevertheless read through the browser URLs recorded above, so this is an environment/source-receipt blocker, not an unavailability claim or a source drop.

The batch status therefore remains `blocked`: the Künneth supplier defect is
locally repaired, but the published Tor defects and the two unresolved local
source-fetch receipts require work outside the authorized publication scope.

## Step-5 authoring

2026-09-10. Current scope: 49 published Tor items are read-only; its A page
is draft and its B page published. Seven new Kunneth items are to be authored.
Read complete CLAUDE/README/SCHEMA, assigned task, group-c Step-3 verdicts and
review, current HA-10 and amended HA-11a designs. Line numbers in the task
have drifted; HA-11a's named amended section controls, with 5 A / 2 B items.
The old insufficient verdicts are preserved; current design records later
Tor/source repairs, which do not constitute Step-5 acceptance.

Checkpoint: `lem-pid-submodules-of-free-modules-are-free-with-choice` authored.
Claim: AC, commutative PID, arbitrary-rank free ambient module; submodule free.
Dependencies unchanged: PID/free-module definitions, AC, well-ordering and
transfinite induction. Full Garrett §6 theorem/proof read in current browser
PDF indices 10–11, printed pp.177–178. Goel Chapter 8 footnote 2 is printed
p.137, PDF index 137 (not one-based PDF p.137). His displayed ker(p_i) union
identity needs restriction to F_i; local proof explicitly works inside
F_{<=a}. Choices are from nonzero coordinate-ideal generator/lift pairs;
spanning covers zero and limit supports, independence uses the largest
nonzero coefficient and the domain hypothesis. No math gap identified.
Checks pending after authoring. Next: cycle-boundary decomposition and its
explicit inverse maps, then kernel/cokernel calculation.

Checkpoint: `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`
authored. AC and nonnegative arbitrary-rank free PID hypotheses retained.
Steps 2.1–2.2 check both inverse composites and the actual differential;
step 3.1 distinguishes degreewise sections from chain sections. Free
presentations and canonical Z(C), A(C), rho are explicit. Dependencies unchanged.
Sources reread: tom Dieck 11.10.1 pp.298–299; Friedman (6.11) p.315 and
splitting/Remark 6.4.18 p.318. Browser extraction available; local curl DNS
failed and PDF screenshots returned cache miss, so no new fetch stamp claimed.
No local mathematical gap. Next: tensor homology and connecting-map computation.

Checkpoint: `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`
authored. Steps 1.1 supplies AC=>DC by successor selection and thm-recursion,
and actual length-one projective resolutions for both homology modules.
Added exact dependencies thm-recursion, def-dependent-choice and free-projectivity
supplier to owned manifest/item. Step 2.1 proves homology/free tensor compatibility
coordinatewise, including finite preimages; 3.1 computes the positive connecting
sign; 4.1 computes kernel/cokernel without assuming tensor inclusions injective;
5.1 matches the existing Tor-map construction and cross product. Current
lem-the-kunneth-tor-map proof read fully, including its precise quotient definition.
Friedman §6.4.5 pp.314–320 now read through the end of Lemma 6.4.19 in overlapping
complete browser text ranges. Source's inclusion terminology after (6.13) is not
used to assert injectivity. Tor notation and supplied-resolution/DC convention
read from current def-balanced-tor-bifunctor. Frontier refresh passed; consumer
input remains [] (all new dependency edges are earlier published suppliers).
No scope narrowing; shared plan synchronization of the three explicit dependency
additions is for Alpha c. Next: exactness, naturality and section construction.

Checkpoint: `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`
authored. Steps 1.1–1.2 prove injectivity, kernel=image, surjectivity for the
particular cross product and existing Tor quotient. Steps 2.1–2.2 construct
maps of canonical sequences and actual two-term resolutions, identifying
both naturality squares. n=0/1, zero complexes and finite diagonals explicit.
Deps unchanged; source locators tom Dieck 11.10.1 pp.298–299 and Friedman
(6.12)–(6.13) pp.316–317. No appeal to the earlier general Kunneth theorem.
No gap identified; checks pending. Next: section via a retraction.

Checkpoint: `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`
authored. Steps 1.1–2.1 define actual chain maps to zero-differential homology
and compute r alpha=id without a Kunneth theorem for nonfree homology modules.
Steps 3.1–4.1 prove beta restricted to ker r is bijective and linear, then
compute beta s=id and s beta=id-alpha r and the two direct-sum inverse maps.
AC selects the original retractions; the unique inverse adds no choice.
No blanket impossibility of natural splittings is asserted. Added the direct
Koszul differential definition edge; manifest synchronized and frontier refreshed
successfully ([] unchanged). Sources: tom Dieck final proof paragraph p.299;
Friedman Splitting p.318. No local gap; checks pending. Next: polynomial and
field examples, pages, and contracts from the completed arguments.

Checkpoint: `ex-pid-polynomial-ring-kunneth-tor-class` authored. Explicit
R=k[t], C=D=(R--t-->R); d1=(t,t), d2=(-t,t), kernel R(1,-1), image
tR(1,-1), H2=0. rho maps u-v to t e0 tensor [f0], the positive generator
under R≅tR; degree-one inverse [a]↦[a(u-v)] supplied. Characteristic two
included. Polynomial domain/Euclidean hypotheses derived from the named
current polynomial suppliers. Added direct kernel/cokernel lemma dependency
for the actual quotient and AC/DC identification; manifest synchronization
will accompany the field example. Statement ai-generated (generation.role
example), proof ai-altered: this chosen polynomial instance is calculated
locally, not attributed verbatim to Friedman. Source locator: Lemma 6.4.19
pp.318–320 for representative method; all exact arithmetic appears in proof.
No gap identified. Next: field instance and final synchronization/checks.

Checkpoint: `ex-pid-kunneth-over-a-field-has-no-tor-correction` authored.
The four tensors are actual bases via scalar-product inverse maps, all
Koszul differentials zero, H in degrees 0,1,2 computed. Identity resolutions
of projective field modules compute positive Tor=0; exactness yields cross
product bijectivity and explicit inverse on the four bases. Step 3.1 proves
naturality of that inverse. Only free/projective clauses of the field supplier
are used; injectivity is not a premise. AC is retained for arbitrary field
modules and balanced comparison. Source: tom Dieck 11.10.1 pp.298–299, as
specialized to a field. Generated worked instance, generation.role example;
proof ai-altered. All seven owned item/manifest deps synchronized. Both examples
add the local kernel/cokernel lemma; these and the earlier additions need
Alpha c to synchronize the read-only plan. Frontier refresh passed and []
remains valid. No mathematical gap identified. Next: pages, contracts, required
checks and any owned canonical repairs.

### Final Step-5 checkpoint (2026-09-10)

**Completed new item IDs (all draft):**

- `lem-pid-submodules-of-free-modules-are-free-with-choice`
- `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`
- `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`
- `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`
- `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`
- `ex-pid-polynomial-ring-kunneth-tor-class`
- `ex-pid-kunneth-over-a-field-has-no-tor-correction`

**Completed draft page IDs:**

- `tor-flatness-and-global-dimension`: retained all 41 published item homes and
  completed its draft summary with the current choice/handedness conventions.
- `kunneth-exactness-and-splittings-over-principal-ideal-domains`: new A page,
  all five proof-bearing items in dependency order.
- `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples`: new
  B page, both calculated examples.

`tor-flatness-and-global-dimension-examples` is already published and was
preserved. All 49 published Tor items were likewise preserved. Their item IDs,
page placement, and exact current dependency arrays agree with the owned
manifest. This authoring does not claim a new proof audit or publication
certification of those existing items. Contracts were absent initially; the
new contract file explicitly scopes the seven new proofs, not the read-only
page-release-only Tor proofs. It contains 42 distinct, item-specific derivation
rows, exact local source-statement excerpts with actual uses, and all eight
boundary dispositions per item. No scaffold strategy was converted into a proof
or accepted as evidence. A formatter serialized the individually written
contract claims and inputs from the completed arguments.

**Canonical numbering:** the required precheck requested topological phase
reordering of the seven new proofs. Its canonical form was adopted and all
step references were reread. Earlier item checkpoints above describe their
initial numbering; the current item files and contracts are authoritative.
In particular: submodule independence is now 3.2 and spanning 4.1;
decomposition inverse maps are 3.1 and the differential 4.1; tensor homology
is 1.3, presentations 2.2, connecting sign 3.1 and map matching 5.1;
exactness is 1.1/2.1 and naturality 1.2/2.2; splitting identities are 6.1;
polynomial quotient generator is 3.1; field inverse naturality is 4.1.
Canonical reordering changed no mathematical claim.

**Checks actually run:**

- `node tools/tsx-run.mjs tools/precheck.mts` with all **56 explicit manifest
  item paths**: initial run checked 47 proof-bearing items and requested seven
  canonical repairs. After adopting them, the rerun and final rerun both passed:
  **47 checked, 0 failing**. The other nine manifest items have no proof-like
  section and are skipped by this checker. No published item was repaired.
- `node tools/validate-plan.mjs`: the exact requested no-argument command
  returned usage (this checkout requires the plan argument). Then
  `node tools/validate-plan.mjs research/plan-spec.json` passed: 978 itemized
  pages structurally consistent; 641 unitemized planned pages and existing
  prerequisite advisories remain. No plan file was edited.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-5.pages.json`:
  final PASS, **56 scoped items, 0 errors, 0 warnings**, after manifest statement
  synchronization to the completed seven items.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-5.proof-contracts.json --strict`:
  final PASS, **7/7 new items, 0 errors, 0 warnings**.
- `node tools/rendercheck.mjs` with the same 56 item paths and all four explicit
  `library/homological-algebra/PAGE_ID.md` paths: PASS, **60 files**, renderer
  YAML and real KaTeX parsing clean.
- Current manifest/item dependency comparison: all 56 dependency sets agree.
- Frontier refresh after dependency edits and final reconciliation: PASS.
  The owned consumer input remains `[]`: every outside supplier is on an
  earlier published page, and no same-run other-batch supplier is used.

Passing these checks is format/consistency evidence, not proof certification.
No judge, audit, publication, or source-fetch stamp was added. The new items
had no old judge stamps to remove. Current browser source readings succeeded;
local DNS and PDF screenshot failures were not represented as source absence
or as mathematical evidence. No new source-fetch verification was claimed.

**Provenance decisions:** all five new A statements are literature-derived;
their expanded local proofs are ai-altered. The two selected worked instances
are ai-generated statements with `generation.role: example`, with ai-altered
calculations, and are not dependency targets. Reference URLs and exact locators
are in each item. Local statement excerpts in the contracts support the named
facts; their usage notes identify why the current hypotheses suffice, including
AC/free projectivity, supplied resolutions, commutativity and finite diagonals.
The field example uses only the field supplier's free/projective clauses.

**Open obligations for owning Alpha c (shared plan only):** no promised claim,
item, page, rank scope or PID scope was dropped or narrowed. No unresolved
local mathematical gap was found in these seven completed arguments. To match
the now explicit proof inputs, synchronize these additional edges in the
read-only `research/plan-spec.json` and any corresponding design dependency
lists; the owned manifest and item metadata already contain them:

1. `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel` adds
   `def-dependent-choice`, `thm-recursion`, and
   `thm-free-modules-are-projective-with-choice-boundary`: proof 1.1 derives DC
   by successor recursion and makes the supplied free presentations projective.
2. `thm-pid-kunneth-splitting-from-cycle-boundary-presentations` adds
   `def-tensor-product-total-complex-of-chain-complexes`: proof 2.1 directly
   uses the Koszul formula to verify the tensor map is a chain map.
3. Each new example adds
   `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel` for
   the explicit balanced interpretation and, in the polynomial example, the
   actual quotient map. These are same-page prerequisite-closure edges,
   not new pairs or later dependencies.

The existing independent Step-3 decisions remain untouched. Old Tor/source
findings in the historical scaffold sections should be reconciled by the
owning Alpha against the current design and repair evidence, not treated as
newly certified or silently erased here. The already-recorded future
algebraic-topology consumer migration remains outside this batch; the new
supplier's authored status is draft, not published.

Next action: Alpha c can review the completed items/contracts and synchronize
those six explicit plan edges. No further Step-5 proof-writing is outstanding
within the authorized draft scope.
