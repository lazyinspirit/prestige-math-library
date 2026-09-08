# Batch 3 — modular traces and low-degree group homology

## Current owner-authorized disposition — 2026-09-08

HOM-SECTION-CHOICE is repaired with the owner-approved explicit AC assumption in all six affected general classification/transgression items. Sections and arbitrary-Q eta choices are justified inside the proof routes; the exact final normal resolution is current. Earlier escalation statements below are historical.

Receipt: `research/phase-2-escalation-repairs-2026-09-08.md`.
Canonical published-consumer tracking remains in `research/published-consumer-supplier-ledger.md`.

Date: 2026-09-08.

Status: **batch-local mathematics and sources are complete, but transitive
dependency closure is blocked by inherited published choice-contract defects.**

## Inventory

The two A/B pairs retain inventories 7/3 and 21/3, for 34 items total. No item
was added or removed. All B items remain leaves.

## Resolved mathematical objections

1. **Complete-DVR root lifting.** Webb's Lemma 10.1.1 is stated in a splitting
   modular system and is not by itself a proof of the arbitrary complete-DVR
   formulation. The route is now closed by the Stacks Project, Definition
   10.153.1 and complete proofs of Lemmas 10.153.2 and 10.153.9. Apply
   Newton lifting to `T^m-1`; because `p` does not divide `m`, its
   derivative is a unit at every residue root. Uniqueness makes the lift
   multiplicative.
2. **Bar/derived comparison.** The manifest gives mutually inverse chain maps
   between `Bbar(G) tensor_ZG M` and diagonal coinvariants of
   `Bbar(G) tensor_Z M`, using `b*g=g^(-1)b`, and checks every face before
   composing with the published bar-resolution computation.
3. **Low-degree filtration.** The manifest no longer imports an unbuilt
   spectral-sequence page or leaves a chase “owed.” It specifies the finite
   filtration through total degree three, the obstruction in `E2_(2,0)`,
   the degree `(-2,1)` zigzag to `E2_(0,1)`, and the reverse obstruction
   calculations proving exactness.
4. **Free-presentation bicomplex.** With
   `C_q=(B_q(F))_R`, each `C_q` is a free `ZG`-module. Horizontal
   homology of `B^right(G) tensor_ZG C_q` vanishes above zero and its zero
   row is `(B_q(F))_F`; vertical homology is
   `B^right_p(G) tensor_ZG H_q(R;Z)`. This proves the abutment to
   `H_*(F;Z)` without a fictitious strict action on a bar complex of `R`.
5. **Transgression.** DHW §§2–5 and §10.2 were read through their complete
   pullback, coefficient-pushout, normalizer-quotient, exactness, and cocycle
   proofs. The Heisenberg sign is `-a*b'`; it is nonzero because
   trivial-action coboundaries on an abelian group are symmetric.

The modular trace route preserves the correction that a `p`-element need not
act trivially. The final independence argument uses a minimum-valuation
integral relation, reduction, and a trace-one matrix unit.

## Full sources read

- Webb, §10.1 Lemma 10.1.1 through the Brauer-character definition and
  §10.2 Theorem 10.2.2;
- Pound/Martin, complete Lemma 6.6;
- Yanqi Lake Lectures on Algebra I, §§11.1–11.2 through Theorem 11.2.2;
- Halle, complete §5.3;
- Stacks Project §10.153, complete Lemmas 10.153.2 and 10.153.9;
- Löh, Definition 1.7.13 through Theorem 1.7.15 and Theorem 3.2.18;
- Weibel, Chapter 6 §§6.4, 6.7, and 6.8.3–6.8.8;
- Dekimpe–Hartl–Wauters, complete §§2–5 and §10.2.

All eight sources, including the newly added Stacks HTML source, are
fetch-verified. The Stacks record separately carries exact proof-reading
evidence; the byte receipt is not treated as a substitute for that reading.

## Former protected blockers

At the time of the first fix pass, inherited paths still ran through the empty
Künneth pair and B example pages. The authorized central A-for-B cutovers
landed during the later Scaffold-fix round and removed those paths. The
Künneth pair is not treated as built or used by this batch. No published file
was edited here.

## Step-3 fix pass

Date: 2026-09-08. The stable findings are addressed by their immutable verdict
coordinates below; the verdict JSON assigns no separate numeric finding IDs.
The current manifest is unchanged: its two A pages have the exact binding
requirements from Group Theory §30.2/§30.7, all 34 items have explicit `deps`
arrays, and every B item is a leaf. Adding an item or a local page requirement
would not remove an inherited `requires` edge, so no definition, lemma,
theorem, backward item dependency, or new A/B pair is mathematically warranted
or authorized.

### `phase-2-wave-1-alpha-a-step3-verdicts.json`: batch `3`, modular-traces-and-brauer-character-independence, `missing[0]` — remains blocked

**Disposition.** The direct seven-item A argument and three B leaves remain
adequate, but the finding cannot be cured in this batch: it is a protected
upstream page-header defect. A fresh depth-first traversal of the current
`plan-spec.json` reaches 94 pages, has no missing page and no page-requirement
cycle, and still finds these seven B suppliers:

- `modular-representations-and-projective-covers` ->
  `induced-representations-and-frobenius-reciprocity-examples`;
- `valuation-rings-and-discrete-valuation-rings` ->
  `noether-normalisation-and-nullstellensatz-examples`;
- `inverse-limits-and-noetherian-completion` ->
  `flatness-and-faithful-flatness-examples`;
- `flatness-and-faithful-flatness` ->
  `rees-modules-artin-rees-and-hilbert-samuel-theory-examples`;
- `rees-modules-artin-rees-and-hilbert-samuel-theory` ->
  `krull-dimension-and-height-theorems-examples`;
- `krull-dimension-and-height-theorems` ->
  `dedekind-domains-and-ideal-classes-examples`; and
- `dedekind-domains-and-ideal-classes` ->
  `valuation-rings-and-discrete-valuation-rings-examples`.

The stable review reported eighteen B suppliers. Eleven are absent from the
current traversal after independent central-plan edits, but the seven above
remain fatal: §30.2 requires every B page to depend only on its own A page and
binds the modular-representations A page to its listed A-page prerequisites.
No B page is an adequate proof supplier. The coverage status/note now records
the current, narrower blocker; the manifest is deliberately unchanged.

### `phase-2-wave-1-alpha-a-step3-verdicts.json`: batch `3`, group-homology-transfer-and-low-degree-exact-sequences, `missing[0]` — remains blocked

**Disposition.** The direct page path
`group-homology-transfer-and-low-degree-exact-sequences` ->
`group-cohomology-as-a-derived-functor` ->
`kunneth-exactness-and-splittings-over-principal-ideal-domains-examples` is
still present. The terminal B page has zero plan items; so does its A
companion. It cannot supply the derived-functor page or this consumer's proof.
The binding HA-12 design instead requires exactly
`ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, and
`the-group-algebra-and-representations`. Installing that list is a central
plan/prose-scaffold repair, not a new prerequisite pair and not an edit this
batch may make. The current group-homology A manifest already has the exact
four A-page requirements prescribed by Group Theory §30.7, so adding another
local edge would neither repair HA-12 nor remove the empty B supplier.

### `phase-2-wave-1-alpha-a-step3-verdicts.json`: batch `3`, group-homology-transfer-and-low-degree-exact-sequences, `missing[1]` — remains blocked

**Disposition.** A current traversal reaches 166 pages, with no missing page
and no page-requirement cycle, but has the following 30 inherited B suppliers:

- `abelian-categories` -> `preadditive-and-additive-categories-and-biproducts-examples`; `preadditive-and-additive-categories-and-biproducts` -> `kan-extensions-density-and-the-free-cocompletion-examples`; `kan-extensions-density-and-the-free-cocompletion` -> `ends-coends-and-weighted-limits-examples`; `ends-coends-and-weighted-limits` -> `monadicity-and-becks-theorem-examples`; `monadicity-and-becks-theorem` -> `monads-comonads-and-their-algebras-examples`; `monads-comonads-and-their-algebras` -> `reflective-subcategories-and-the-adjoint-functor-theorems-examples`; `reflective-subcategories-and-the-adjoint-functor-theorems` -> `adjunctions-units-and-counits-examples`; and `adjunctions-units-and-counits` -> `limits-and-colimits-examples`.
- `subobject-lattices-generators-and-the-grothendieck-axioms` -> `abelian-categories-examples`; `group-cohomology-as-a-derived-functor` -> `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples`; `universal-coefficients-and-kunneth-theorems` -> `tor-flatness-and-global-dimension-examples`; `ext-and-balanced-resolutions` -> `delta-functors-and-universality-examples`; `delta-functors-and-universality` -> `derived-functors-examples`; `derived-functors` -> `projective-and-injective-resolutions-examples`; `projective-and-injective-resolutions` -> `long-exact-sequences-in-homology-examples`; `long-exact-sequences-in-homology` -> `mapping-cones-cylinders-and-chain-triangles-examples`; `mapping-cones-cylinders-and-chain-triangles` -> `chain-homotopy-and-the-homotopy-category-examples`; and `chain-homotopy-and-the-homotopy-category` -> `chain-complexes-and-homology-examples`.
- `the-diagram-lemmas-in-an-abelian-category` -> `exactness-and-the-member-calculus-examples`; `yoneda-extensions-and-homological-dimension` -> `ext-and-balanced-resolutions-examples`; `group-extensions-complements-and-schur-zassenhaus` -> `small-cancellation-and-dehn-algorithms-examples`; `small-cancellation-and-dehn-algorithms` -> `decision-problems-for-finitely-presented-groups-examples`; `decision-problems-for-finitely-presented-groups` -> `hnn-extensions-and-brittons-lemma-examples`; `hnn-extensions-and-brittons-lemma` -> `subgroups-of-free-groups-and-schreier-rewriting-examples`; `subgroups-of-free-groups-and-schreier-rewriting` -> `socles-and-the-onan-scott-landscape-examples`; `socles-and-the-onan-scott-landscape` -> `blocks-primitivity-and-multiple-transitivity-examples`; `blocks-primitivity-and-multiple-transitivity` -> `extraspecial-p-groups-and-central-products-examples`; `extraspecial-p-groups-and-central-products` -> `frattini-subgroups-and-the-burnside-basis-theorem-examples`; `frattini-subgroups-and-the-burnside-basis-theorem` -> `sylow-theorems-and-nilpotent-groups-examples`; and `primitive-roots-and-unit-groups-modulo-n` -> `splitting-fields-examples`.

The stable review reported 36 such edges; six are absent from the current
plan after independent central-plan edits. The residual 30 are still fatal.
The Group Theory portion must be replaced with the A-only table in §30.2, and
the remaining Homological Algebra, Category Theory, and Number Theory edges
must be reconciled by the authorized central writer against their controlling
designs. The 21-item local proof remains in proof order and does not claim the
missing page interfaces are adequate.

**Mathematical and source evidence.** The direct modular proof uses the
published semisimple quotient/Wedderburn interface, prime-to-`p` restriction,
complete-DVR simple-root lifting, and the minimum-valuation matrix-unit
argument. The direct low-degree proof fixes its bar/transversal handedness,
constructs the free-presentation bicomplex and its finite low-degree chase,
and proves the five-term extension sequence through crossed homomorphisms,
complements, pullbacks, and pushouts. Those exact local routes, hypotheses,
and source locators are unchanged in this manifest and coverage ledger. The
eight active sources have no source drop or replacement decision; no source
record was changed by this pass.

**Cross-batch and boundary record.** The current batch items have no direct
dependency on an item proposed in another batch; the owned
`phase-2-wave-1-batch-3.cross-batch-dependencies.json` correctly remains `[]`.
No local relation reaches `deferred-set-theory-beyond-choice`; this
group-theory batch has no Foundations page. The remaining blockers are the
three protected page-closure findings above. Changed records: this notes file
and `phase-2-wave-1-batch-3.coverage.json`; no manifest or shared plan file was
changed.

### Checks run after the repair

- Current depth-first `requires` audits: modular traces reaches 94 pages with
  seven B suppliers; low-degree group homology reaches 166 pages with 30 B
  suppliers. Both traversals have zero missing page IDs and zero cycles. These
  are fatal semantic closure findings, not waived by the graph's resolvability.
- `node tools/coverage-checklist.mjs --require-destination
  research/phase-2-wave-1-batch-3.coverage.json`: 2 pages, 51 harvested
  results, 0 errors, and 1 low-yield warning for modular traces (8/24). The
  stable group-a source review already adjudicated that decline set; no source
  result was removed or weakened here.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`:
  434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only
  research/phase-2-wave-1-batch-3.pages.json`: 34 scoped items, 0 errors,
  0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared
  ordering, listed item dependencies, and IDs are syntactically acyclic and
  resolvable. This does not make a B page an adequate mathematical supplier;
  the current B-supplier paths above remain the blocker.
- `node tools/extcheck.mjs --plan research/plan-spec.json`: exit 0; recorded
  results are structurally valid. It emitted 63 existing repository-wide
  published-item notices, none introduced by this batch repair.
- `node tools/source-fetch-check.mjs --coverage
  research/phase-2-wave-1-batch-3.coverage.json --stamp`: 8/8 active sources
  fetch-verified, 0 newly stamped; 8/8 resolved and 0 documented drops.

## Scaffold-fix round

Date: 2026-09-08. This round addresses the three batch-3 coordinates in
`research/phase-2-wave-1-scaffold-closure.json`. The closure entries have no
separate IDs, so the stable finding IDs below are their page and `missing[]`
coordinates. During this round the authorized central writer applied the
A-for-B plan repairs. The dispositions below use a fresh read of those current
bytes and supersede both the older 166-page/30-edge fix-pass count and the
intermediate 94/7 and 143/11 counts in the recheck evidence.

### `modular-traces-and-brauer-character-independence:missing[0]` — resolved

**Disposition.** The finding is resolved by the current central plan. The
transitive `requires` closure now has 87 pages, no missing page ID, no cycle,
and no A-to-B edge. In particular, the former modular-representation edge now
targets `induced-representations-and-frobenius-reciprocity`, and the six former
Commutative Algebra B targets now target their A companions:
`noether-normalisation-and-nullstellensatz`,
`flatness-and-faithful-flatness`,
`rees-modules-artin-rees-and-hilbert-samuel-theory`,
`krull-dimension-and-height-theorems`,
`dedekind-domains-and-ideal-classes`, and
`valuation-rings-and-discrete-valuation-rings`.

**Evidence.** This is the cutover prescribed by Group Theory §30.2 and
Commutative Algebra §11.3. The full current closure also reaches the exact
split-algebra, module, modular-system, valuation, and choice interfaces used by
the local proof. Traversing the owned manifest through the current published
item frontmatter reaches 279 items, with zero missing IDs, cycles,
out-of-closure homes, or recorded-not-proved suppliers. The direct interfaces
have the required direction and hypotheses: the radical quotient is
semisimple for a finite-dimensional algebra; Wedderburn--Artin and the column
classification supply all split simple factors; the representation is finite
dimensional; the modular system splits every subgroup; and the DVR convention
is the valuation-ring convention used by the lifting argument. The local
7-item A route then proves separation, trace isolation, prime-to-`p` reduction,
complete-DVR root lifting, and minimum-valuation independence. The three B
items remain leaves.

**Change and remaining blocker.** The batch manifest needs no change. The
coverage summary records the new 87/0 closure. No blocker remains for this
finding.

### `group-homology-transfer-and-low-degree-exact-sequences:missing[0]` — resolved

**Disposition.** The empty Künneth-B path is gone. The current
`group-cohomology-as-a-derived-functor.requires` is exactly
`ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, and
`the-group-algebra-and-representations`, as prescribed by Homological Algebra
§5 and HA-12. HA-11a remains a separate later Künneth repair and is not used
as a supplier here.

**Evidence.** The current group-homology closure has 123 pages, zero B-page
suppliers, zero missing pages, and zero cycles. Its item traversal reaches 441
items with zero missing IDs, cycles, out-of-closure homes, or
recorded-not-proved suppliers. It includes the actual Dependent Choice and
supplied-resolution interfaces inherited by the derived-functor definition;
neither the plan nor item closure reaches
`deferred-set-theory-beyond-choice`.

**Change and remaining blocker.** No owned page requirement changed: the
group-homology A page already has the exact four requirements in Group Theory
§30.7. The coverage summary records the repaired HA-12 closure. No blocker
remains for this finding.

### `group-homology-transfer-and-low-degree-exact-sequences:missing[1]` — resolved

**Disposition.** All ten residual B suppliers named by the finding have been
replaced by adequate earlier A pages. The current edges use
`tor-flatness-and-global-dimension`, `delta-functors-and-universality`,
`derived-functors`, `projective-and-injective-resolutions`,
`long-exact-sequences-in-homology`,
`mapping-cones-cylinders-and-chain-triangles`,
`chain-homotopy-and-the-homotopy-category`,
`exactness-and-the-member-calculus`, `ext-and-balanced-resolutions`, and, for
the group-extension page, `semidirect-products-and-automorphism-groups` plus
`sylow-theorems-and-nilpotent-groups`. This agrees with the A-only supplier
routes in Homological Algebra §5, Category Theory's binding B-leaf cutover,
and Group Theory §30.2.

**Evidence.** The direct 21-item proof order is unchanged and remains
semantically adequate. The diagonal-bar comparison carries the left-module,
right-resolution and Dependent Choice conventions explicitly; transfer uses
right cosets and checks the end faces; the finite row-filtration argument
constructs its low-degree obstruction and reverse exactness chase locally;
the free-presentation bicomplex has the stated `ZG`-free rows and
abelianisation edge maps; and the cohomological sequence uses the printed
crossed-homomorphism, complement, pullback and coefficient-pushout directions.
Löh Definition 1.7.12--Theorem 1.7.15 and Theorem 3.2.18, Weibel Definition
6.4.1--Theorem 6.4.5 and §6.8.3--6.8.8, and
Dekimpe--Hartl--Wauters §§2--5 and §10.2 remain the independent full-text
evidence recorded in coverage. The three B examples are leaves.

**Change and remaining blocker.** No manifest dependency changed. The owned
frontier input remains `[]`: no batch-3 page `requires`, item `deps`,
`justified_by`, or load-bearing `forward_refs` edge consumes another
wave-1 batch. No blocker remains for this finding.

### Round summary

No definition, lemma, theorem, dependency, source record, source drop, or new
A/B pair was added. The coverage status and note now record the current
central repairs and completed recheck. Source locators and dispositions are
unchanged; all 34 manifest items retain explicit `deps` arrays. The three
closure findings are resolved and batch 3 has no remaining scaffold blocker.

### Checks run in this round

- Fresh current-plan `requires` traversal: modular traces 87 pages, zero B
  suppliers, missing pages, or cycles; group homology 123 pages, zero B
  suppliers, missing pages, or cycles.
- Fresh traversal of owned manifest items through current published
  frontmatter: modular traces 279 items and group homology 441 items; both
  have zero missing IDs, dependency cycles, out-of-closure homes, or
  recorded-not-proved suppliers. The direct owned inventory check found 34
  items and 70 declared edges, with zero missing, forward, B-item, or
  out-of-closure edges.
- `node tools/coverage-checklist.mjs --require-destination
  research/phase-2-wave-1-batch-3.coverage.json`: 2 pages, 51 harvested
  results, 0 errors, and 1 low-yield warning for modular traces (8/24). The
  Group-a scope review already confirms those declines; no result was removed.
- `node tools/manifest-deps.mjs
  research/phase-2-wave-1-batch-*.pages.json`: 434 items, 0 normalized, 0
  errors.
- `node tools/content-policy.mjs --manifest-only
  research/phase-2-wave-1-batch-3.pages.json`: 34 scoped items, 0 errors, 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared
  page order is acyclic and consistent, with no item-level cycle, forward
  reference, B-page dependency, or unresolved ID among the 892 populated
  planned pages. It notes 719 empty planned page inventories.
- `node tools/extcheck.mjs --plan research/plan-spec.json`: exit 0; every
  recorded-not-proved item is structurally valid. The existing repository-wide
  published consequences remain reported; neither batch-3 closure reaches a
  recorded supplier or the deferred Set Theory catalogue.
- `node tools/source-fetch-check.mjs --coverage
  research/phase-2-wave-1-batch-3.coverage.json --stamp`: 8/8 sources
  fetch-verified, 0 newly stamped; 8/8 resolved and 0 documented drops.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  refreshed and deduplicated successfully; the batch-3 input remains `[]`.

### Local owner repair after the round-2 writer completed

The current coverage status supersedes the historical page-wide blocking
conclusions above; independent verdicts are unchanged. The separation lemma
now proves finite simultaneous density from Schur and finite complements,
without a radical/composition-series supplier. Coverage declines the unused
radical quotient and unqualified matrix-product assertion. The homology
comparison now includes the augmented tensor-bicomplex argument, projective
retract argument and explicit DC dependency; it does not assume the later
Tor-balance theorem. The planned HA-12 -> Tor page edge remains a Phase-2
obligation before its Phase-3 cutover, not a claim of Tor publication today.

Checks: coverage has zero errors and one low-yield warning for review;
all run manifests have explicit dependency arrays and pass content policy.
Exact repairs and preserved published-consumer debts are recorded under
“Local Step-3 blocker repairs” in published-consumer-supplier-ledger.md.

## Scaffold-fix round

Date: 2026-09-08. This round uses the current two batch-3 entries in
`research/phase-2-wave-1-scaffold-closure.json`, which supersede the earlier
A-for-B findings addressed above. The current central plan still has the
successful A-only cutovers: the modular-traces and group-homology page closures
contain respectively 87 and 123 pages, with no B-page supplier, missing page,
or page cycle. The new findings concern published items in those otherwise
structurally closed prerequisite pages.

### `group-homology-transfer-and-low-degree-exact-sequences:missing[0]` — fatal, blocked outside batch authority

**Disposition and evidence.** The finding stands. The current plan reaches the
three named published consumers along these exact paths:

- `group-homology-transfer-and-low-degree-exact-sequences` ->
  `group-cohomology-as-a-derived-functor` ->
  `tor-flatness-and-global-dimension` ->
  `chain-conditions-and-semisimple-modules`, which homes
  `thm-chain-conditions-in-short-exact-sequences` and
  `thm-composition-series-iff-noetherian-and-artinian`;
- `group-homology-transfer-and-low-degree-exact-sequences` ->
  `chain-complexes-and-homology` -> `abelian-categories` ->
  `modules-over-a-pid-and-canonical-forms`, which homes
  `thm-principal-ideal-domains-are-unique-factorisation-domains`.

The defects are visible in the current item text. The short-exact-sequence
proof establishes ACC for the middle module and then uses
`thm-equivalent-characterizations-of-noetherian-modules` to recover the
finite-generation definition, although that reverse route passes through the
DC-qualified ACC-to-maximal implication. The composition-series theorem says
that its converse assumes DC but omits `def-dependent-choice` from `deps`; its
recursion chooses a maximal proper successor only while the current term is
nonzero, so the relation supplied to DC is not entire after zero is reached.
The PID-to-UFD theorem chooses a maximal bad principal ideal through that same
DC-qualified maximal condition while its Statement, Given, and `deps` remain
unconditional.

**Required published repairs.** Preserve the unconditional short-exact
theorem by generating a submodule from finite generators of its intersection
with the submodule and finitely many lifts of generators of its quotient
image. For composition series, add `def-dependent-choice`, make zero a
self-successor in the recursive relation, and use the repaired short-exact
argument; prove the simple forward factors finitely generated directly from a
nonzero generator. For PID factorisation, either add the explicit DC contract
used by the present maximal-bad-ideal proof or supply a fully audited
choice-free existence proof. These are the exact strategies in the canonical
published-consumer ledger.

**Change and remaining blocker.** No batch manifest edit can repair a proof or
dependency header on an inherited published item, and this dispatch forbids
published-content edits. Coverage is therefore marked blocked. No new A/B pair
is required: all repairs are local to existing published items. Re-audit the
123-page closure after the authorized owner changes land.

### `modular-traces-and-brauer-character-independence:missing[0]` — fatal, blocked outside batch authority

**Disposition and evidence.** The finding stands. The modular page directly
requires `chain-conditions-and-semisimple-modules`, so it reaches the same
short-exact and composition-series defects. It reaches the PID-to-UFD defect
through
`modular-representations-and-projective-covers` ->
`valuation-rings-and-discrete-valuation-rings` ->
`noether-normalisation-and-nullstellensatz` ->
`integral-extensions-and-going-up` ->
`associated-primes-and-primary-decomposition` ->
`artinian-rings-and-length` -> `prime-spectra-and-radicals` ->
`localisation-of-modules-and-support` ->
`noetherian-rings-and-hilbert-basis` ->
`modules-over-a-pid-and-canonical-forms`.

The same Commutative Algebra spine reaches the three additional consumers.
`thm-noetherian-ring-ideal-characterisations` invokes the repaired module
theorem's DC-qualified ACC-to-maximal implication but does not declare
`def-dependent-choice`. `thm-prime-filtration-of-a-finite-module` chooses a
maximal prime-filtered submodule through that maximal condition without a DC
hypothesis or dependency. `thm-existence-of-associated-primes` directly
depends on `lem-noetherian-ring-maximal-element-annihilator-exists`, whose
Statement assumes DC and whose `deps` includes `def-dependent-choice`, but the
consumer neither assumes nor declares DC. The canonical ledger's Stacks
10.63.7/10.62.1 comparison does not turn these particular local
maximal-annihilator/maximal-filtration proofs into choice-free proofs.

**Required published repairs.** Add and propagate the exact DC contract to the
Noetherian-ring maximal-condition implication, prime filtration, and
associated-prime existence when retaining their current routes, or replace
each route by a complete audited choice-free proof. Apply the three common
repairs above as well.

**Change and remaining blocker.** The owned 7/3 modular inventory is unchanged
and remains source-backed, but it cannot certify an unsound inherited page
closure. Coverage is marked blocked. No new A/B pair is needed; the six
repairs are to existing published items. Re-audit the 87-page closure after an
authorized published-content owner applies them.

### Additional closure finding: `thm-equivalent-characterizations-of-artinian-modules` — fatal, routed to published owner

Both assigned A pages reach `chain-conditions-and-semisimple-modules`. That
published A page also homes
`thm-equivalent-characterizations-of-artinian-modules`. Its Statement says
that DCC implies the minimal condition using Dependent Choice, its Given says
DC is assumed for that direction, and proof step 1.1 spends it, but its sole
declared dependency is `def-artinian-module`; the body even says DC “is not
cited as a forward dependency.” This conflicts with the current explicit
dependency contract. An authorized published-content repair must add
`def-dependent-choice` and print the entire strict-successor relation and
starting member, paralleling the verified Noetherian characterization. This is
an existing-item repair, not a new prerequisite pair. The batch remains
blocked until it too is repaired and the affected consumers are re-audited.

### Round summary and boundaries

The manifest still matches the binding Group Theory designs: 34 items, every
`deps` array explicit, proof order unchanged, and B items remaining leaves.
The eight active source records and all harvested dispositions are unchanged;
there is no source drop or owner escalation. The owned frontier input remains
`[]`, because no batch-3 `requires`, `deps`, `justified_by`, or load-bearing
`forward_refs` edge consumes another Wave-1 batch. No owned relation reaches
`deferred-set-theory-beyond-choice` or an item recorded there. This round
changes only the owned coverage status/note and this notes record; it does not
edit the plan, another batch, an item, or a published page.

### Checks run in this round

- Focused current-plan breadth-first traversal: modular traces reaches 87
  pages and group homology reaches 123 pages. The exact paths to all six named
  closure consumers resolve; both closures have zero B-page suppliers,
  missing page IDs, or page cycles.
- Direct current-text audit of the seven choice findings: each published
  Statement, Given, `deps`, cited supplier statement, and load-bearing proof
  step was read; all seven mismatches described above remain on disk.
- `node tools/coverage-checklist.mjs --require-destination
  research/phase-2-wave-1-batch-3.coverage.json`: 2 pages, 51 harvested
  results, 0 errors, and the existing modular-traces low-yield warning (8/24).
- `node tools/manifest-deps.mjs
  research/phase-2-wave-1-batch-*.pages.json`: 434 items, 0 normalized, 0
  errors.
- `node tools/content-policy.mjs --manifest-only
  research/phase-2-wave-1-batch-3.pages.json`: 34 scoped items, 0 errors, 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the declared
  plan is acyclic and consistent for all 892 populated planned pages, while
  719 page-level-only inventories remain noted by the tool. This structural
  pass does not cure the published semantic defects above.
- `node tools/extcheck.mjs --plan research/plan-spec.json`: exit 0 with 63
  existing repository-wide recorded-result warnings and no hard error.
- `node tools/source-fetch-check.mjs --coverage
  research/phase-2-wave-1-batch-3.coverage.json --stamp`: 8/8 sources
  fetch-verified, 0 newly stamped; 8/8 resolved and 0 documented drops.
- `node tools/source-backing.mjs --coverage
  research/phase-2-wave-1-batch-3.coverage.json --liveness
  research/phase-2-wave-1-url-liveness.json --require-verified`: all 16
  authored results counted by the backing gate remain backed by an openable
  source or documented alternative.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  refreshed and deduplicated successfully; the batch-3 input remains `[]`.


## Final adjudication — scaffold-final-a-dd56d4fd02dbb1cd

BR repaired and accepted: direct nilpotent-trace proof with exact finite-linear-algebra/Bézout dependencies, deterministic Newton lift, explicit S_3 completeness and trivial/sign lattices. Homology escalated on HOM-SECTION-CHOICE; its manifest was not changed. The complete current proof-use audit, source locators, exact owner decisions needed, checks, and Phase-3 supplier/consumer repair strategies are in research/phase-2-wave-1-alpha-a-recheck.md. This supersedes earlier page-wide blocking conclusions. Published consumer debt remains open; no published proof was edited. Current owned cross-batch input remains [] after declared and implicit proof-use reconciliation.

## Step-5 authoring

Current Step-5 result (2026-09-08): **all 34 assigned items and all four pages authored as drafts**. The detailed checkpoints below record the claims and conventions; the final evidence record at the end supersedes their provisional “format checks pending” language. This is an authoring result, not an independent judgment or publication approval.


2026-09-08. Current dispatch starts with all 34 assigned item files and the proof contract absent. Current Step-3 verdicts have BR sufficient and HOM-SECTION-CHOICE insufficient; the binding owner-approved AC correction in §30.7 and current manifest supplies the previously missing choice contract. No scope is removed. The binding manifest adds the explicit intermediate lemmas to the design's shorter list; its precise injection is the filtration transgression, not an inclusion-induced H2 map. Earlier broad closure claims are historical; published consumer debt is not certification of this batch.

Read SCHEMA, current task, manifest, design BR and §30.7, Step-3 verdicts, and direct dependency statements. Source PDFs open through the web tool; shell downloads fail DNS, and Webb/Yanqi screenshot fetches fail, so complete relevant text passages are read through bounded web opens. Sources are mathematical inputs, not completion receipts. All new content stays draft without judge stamps.

### Authored checkpoint: `lem-a-finite-dimensional-algebra-separates-its-simple-modules`

Claim/conventions: Let $A$ be a finite-dimensional unital $k$-algebra and $(S_i)_{i\in I}$ a family of pairwise nonisomorphic simple left $A$-modules satisfying $\operatorname{End}_A(S_i)=k\operatorname{id}_{S_i}$. Then $I$ is finite, every $S_i$ is finite-dimensional, and the action map $A\to\prod_{i\in I}\operatorname{End}_k(S_i)$ is surjective. The empty product is the zero algebra.

Sources: Yanqi Lake Lectures on Algebra I, Theorems 11.1.5 and 11.2.2, pp.128 and 130 (https://www.wwli.asia/downloads/YAlg1.pdf). Dependencies: thm-schurs-lemma-for-modules, def-direct-sum-of-a-family-of-modules, def-linear-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-modular-trace-functions-of-simple-modules-are-linearly-independent`

Claim/conventions: For $A$ and $S_i$ as in the separation lemma, the functions $\tau_i:A\to k$, $\tau_i(a)=\operatorname{tr}(a|S_i)$, are linearly independent. If $A=kG$ for a finite group, their restrictions to $G$ are linearly independent.

Sources: Yanqi Lake Lectures on Algebra I, Theorems 11.1.5 and 11.2.2, pp.128 and 130 (https://www.wwli.asia/downloads/YAlg1.pdf). Dependencies: lem-a-finite-dimensional-algebra-separates-its-simple-modules.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-modular-trace-depends-only-on-the-p-regular-part`

Claim/conventions: Let $G$ be finite, $k$ have characteristic $p>0$, and $V$ be a finite-dimensional representation. Each $g\in G$ has commuting factors $g=su$, with $s$ of order prime to $p$ and $u$ of $p$-power order, and $\operatorname{tr}(g|V)=\operatorname{tr}(s|V)$.

Sources: Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18 (https://ep455.user.srcf.net/pdfs/MRTnotes.pdf). Dependencies: def-finite-dimensional-representation-of-a-group-over-a-field, thm-bezout-identity, def-linear-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring`

Claim/conventions: Let $\mathcal O$ be a complete DVR with residue field $k$ of characteristic $p$, and $m\ge1$ with $p\nmid m$. Reduction is a group isomorphism $\mu_m(\mathcal O)\to\mu_m(k)$. Write $\widehat\lambda$ for its inverse. Lifts for different exponents agree whenever both are defined.

Sources: Stacks Project, Lemmas 10.153.2 and 10.153.9 (https://stacks.math.columbia.edu/tag/04GE). Dependencies: def-splitting-p-modular-system-for-a-finite-group, def-discrete-valuation-ring.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-lifted-modular-trace-on-p-regular-elements`

Claim/conventions: Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$. For a finite-dimensional $kG$-module $V$ and $g\in G$ of order $m$ prime to $p$, let $\lambda_1,\ldots,\lambda_d$ be the eigenvalues of $g$ with multiplicities. Its lifted modular trace (Brauer character for this system) is $\varphi_V(g)=\sum_{j=1}^d\widehat{\lambda_j}\in\mathcal O$. This defines a class function on the $p$-regular elements.

Sources: Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176 (https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf); Halle, Galois actions on Neron models of Jacobians, Section 5.3, p.875 (https://aif.centre-mersenne.org/item/10.5802/aif.2541.pdf). Dependencies: lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring, def-splitting-p-modular-system-for-a-finite-group.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces`

Claim/conventions: In the fixed splitting system, $\overline{\varphi_V(g)}=\operatorname{tr}(g|V)$ for every finite-dimensional $V$ and every $p$-regular $g$.

Sources: Halle, Galois actions on Neron models of Jacobians, Section 5.3, p.875 (https://aif.centre-mersenne.org/item/10.5802/aif.2541.pdf). Dependencies: def-lifted-modular-trace-on-p-regular-elements.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements`

Claim/conventions: Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$. Brauer characters of pairwise nonisomorphic simple $kG$-modules are linearly independent over $K$ as functions on the $p$-regular elements, and remain so over every field extension of $K$. Their values also give independent complex functions under any fixed embedding of their cyclotomic value field into $\mathbb C$.

Sources: Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18 (https://ep455.user.srcf.net/pdfs/MRTnotes.pdf); Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176 (https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf). Dependencies: lem-modular-trace-functions-of-simple-modules-are-linearly-independent, lem-modular-trace-depends-only-on-the-p-regular-part, lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces, def-discrete-valuation-ring.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `ex-modular-traces-for-a-cyclic-p-prime-group`

Claim/conventions: Let $C_m=\langle g\rangle$, $m\ge1$, $p\nmid m$, in a splitting system. Choose a primitive $m$th root $\lambda\in k$ and write $\zeta=\widehat\lambda$. The simple modules $S_i$ for $0\le i<m$ have $g$ acting by $\lambda^i$; their Brauer table is $(\zeta^{ij})_{0\le i,j<m}$.

Sources: Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18 (https://ep455.user.srcf.net/pdfs/MRTnotes.pdf). Dependencies: thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements, def-lifted-modular-trace-on-p-regular-elements.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `ex-brauer-character-independence-for-s-three-in-characteristic-two`

Claim/conventions: In a splitting $2$-modular system for $S_3$, the trivial module and the natural two-dimensional module have Brauer rows $(1,1)$ and $(2,-1)$ on the classes of $1$ and $(123)$; these exhaust the simple modules.

Sources: Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176 (https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf). Dependencies: thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements, lem-modular-trace-depends-only-on-the-p-regular-part, def-lifted-modular-trace-on-p-regular-elements.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters`

Claim/conventions: False claim: the reduction of an integral representation determines its characteristic-zero character on every group element, including p-singular elements. Also false: equality of modular traces at g and its p-regular part implies equality of their operators.

Sources: Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176 (https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf). Dependencies: lem-modular-trace-depends-only-on-the-p-regular-part, def-lifted-modular-trace-on-p-regular-elements.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-diagonal-bar-coinvariants-compute-group-homology`

Claim/conventions: Assume DC and the supplied projective-resolution convention for derived group homology. For every left $G$-module $M$, $H_n(G;M)$ is naturally the homology of $C_n(G;M)=(\overline B_n(G)\otimes_{\mathbb Z}M)_G$, with diagonal left action and alternating vertex-deletion differential. Equivalently it is computed by $\overline B^{\rm right}(G)\otimes_{\mathbb ZG}M$, where $b\cdot g=g^{-1}b$.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: def-group-homology-as-a-derived-functor, thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module, thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent, def-projective-object, def-dependent-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-finite-index-transfer-on-normalized-bar-chains`

Claim/conventions: Use diagonal bar chains $C_*(G;M)$ for a left $G$-module $M$, with the DC and supplied-resolution convention when identifying their homology with derived homology. Let $H\le G$ have finite index. Choose representatives $T$ of the right cosets $Ht$, with $1\in T$. Write $x=r(x)t(x)$ with $r(x)\in H$ and $t(x)\in T$. Transfer is
$$\operatorname{Tr}_T[(g_0,\ldots,g_n)\otimes m]=\sum_{t\in T}[(r(tg_0),\ldots,r(tg_n))\otimes tm].$$
For trivial coefficients, in inhomogeneous coordinates set $t_0=t$, $t_i=t(t_{i-1}g_i)$ and $h_i=t_{i-1}g_it_i^{-1}\in H$. Then
$$\operatorname{Tr}_T[g_1|\cdots|g_n]=\sum_{t\in T}[h_1|\cdots|h_n].$$
A tuple with an identity entry in inhomogeneous coordinates is zero. Well-definedness and the chain-map property are supplied by the following lemma.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf). Dependencies: lem-diagonal-bar-coinvariants-compute-group-homology, def-normalized-bar-resolution.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy`

Claim/conventions: The transfer formula is well-defined on normalized diagonal coinvariants and is a chain map. Any two finite right transversals yield chain-homotopic transfer maps. Hence transfer on homology is independent of the transversal, with the inherited derived-homology conventions.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf). Dependencies: def-finite-index-transfer-on-normalized-bar-chains.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`

Claim/conventions: Let $H\le G$ have finite index and M be a left G-module. For every $n\ge0$, the composite $H_n(G;M)\xrightarrow{\operatorname{Tr}}H_n(H;M)\xrightarrow{i_*}H_n(G;M)$ is multiplication by $[G:H]$. Here corestriction means the covariant inclusion map in homology; the derived identification retains DC and supplied resolutions.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order`

Claim/conventions: For a finite group G and $n>0$, $|G|H_n(G;\mathbb Z)=0$, with trivial integral coefficients. Derived homology uses the inherited DC and supplied-resolution convention.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology, lem-diagonal-bar-coinvariants-compute-group-homology.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-bar-first-integral-homology-is-the-abelianization`

Claim/conventions: Naturally $H_1(G;\mathbb Z)\cong G_{\rm ab}$. If $R\triangleleft F$, conjugation induces an $F/R$-action on $H_1(R;\mathbb Z)$ and $H_1(R;\mathbb Z)_{F/R}\cong R/[F,R]$, where $[F,R]$ is generated by $frf^{-1}r^{-1}$. Derived homology carries the inherited DC and supplied-resolution convention.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: lem-diagonal-bar-coinvariants-compute-group-homology, def-normalized-bar-resolution.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`

Claim/conventions: If F is free on an arbitrary set X, then
$$0\longrightarrow\bigoplus_{x\in X}\mathbb ZF e_x\xrightarrow{\partial}\mathbb ZF\xrightarrow{\epsilon}\mathbb Z\longrightarrow0,\qquad\partial(e_x)=x-1,$$
is a free resolution. Consequently $H_q(F;\mathbb Z)=0$ for $q>1$ and $H_1(F;\mathbb Z)=\bigoplus_X\mathbb Z$. The derived identification uses DC and supplied resolutions.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: thm-reduced-words-form-the-free-group, lem-diagonal-bar-coinvariants-compute-group-homology.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex`

Claim/conventions: Let $D_{pq}$, $p,q\ge0$, be a bicomplex with $h:D_{pq}\to D_{p-1,q}$, $v:D_{pq}\to D_{p,q-1}$, $h^2=v^2=hv+vh=0$. Set $T_n=\bigoplus_{p+q=n}D_{pq}$, $d=h+v$, and $E^2_{pq}=H_p(H_q(D_{\bullet,*},v),h)$. Then there is a natural exact sequence
$$H_2(T)\xrightarrow{e_2}E^2_{20}\xrightarrow{d_2}E^2_{01}\xrightarrow{j}H_1(T)\xrightarrow{e_1}E^2_{10}\longrightarrow0.$$
The filtration is $F_rT_n=\bigoplus_{p\le r,p+q=n}D_{pq}$. This holds for module bicomplexes, and with the same kernel/image constructions in an abelian category. No general spectral-sequence convergence theorem is assumed.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: def-chain-complex-in-an-abelian-category, def-homology-object-of-a-chain-complex.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`

Claim/conventions: Let $1\to R\to F\xrightarrow{\pi}G\to1$ be a free presentation (here R denotes the normal subgroup, not a ring). Under the DC and supplied-resolution homology convention put $C_q=(\overline B_q(F))_R$, a left $\mathbb ZG$-module, and
$$D_{pq}=\overline B_p^{\rm right}(G)\otimes_{\mathbb ZG}C_q,\qquad h=d_B\otimes1,\quad v=(-1)^p1\otimes d_C.$$
Then $E^2_{pq}=H_p(G;H_q(R;\mathbb Z))$ for the p-filtration, and $H_*(\operatorname{Tot}D)=H_*(F;\mathbb Z)$. The degree-one edge maps are inclusion $R/[F,R]\to F_{\rm ab}$ and quotient $F_{\rm ab}\to G_{\rm ab}$.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: lem-diagonal-bar-coinvariants-compute-group-homology, lem-bar-first-integral-homology-is-the-abelianization, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex, def-group-presentation.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree`

Claim/conventions: For the free-presentation bicomplex, $H_n(\operatorname{Tot}D)=0$ for $n>1$, $H_1(\operatorname{Tot}D)=F_{\rm ab}$, $E^2_{01}=R/[F,R]$, and $E^2_{p0}=H_p(G;\mathbb Z)$. The degree-one maps are inclusion and quotient on abelianizations. This does not assert vanishing of every positive-degree E2 term. Retain DC and supplied-resolution conventions.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: def-free-presentation-lyndon-bar-bicomplex-and-edge-maps, lem-free-group-augmentation-ideal-has-the-generator-difference-basis, lem-bar-first-integral-homology-is-the-abelianization, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `thm-free-presentation-homology-five-term-sequence`

Claim/conventions: For a free presentation $1\to R\to F\to G\to1$ there is a natural exact sequence
$$0\longrightarrow H_2(G;\mathbb Z)\xrightarrow{d_2}R/[F,R]\longrightarrow F_{\rm ab}\longrightarrow G_{\rm ab}\longrightarrow0.$$
The last two nonzero arrows are induced by inclusion and quotient; d2 is the filtration transgression defined by $hx=-vy\mapsto[hy]$. Retain DC and supplied-resolution homology conventions.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology`

Claim/conventions: For a left G-module A (written additively), put
$$Z^1_{\rm cr}(G,A)=\{d:G\to A:d(gh)=d(g)+g d(h)\},\qquad B^1_{\rm cr}(G,A)=\{\delta a:g\mapsto ga-a\}.$$
Define $H^1_{\rm cr}=Z^1_{\rm cr}/B^1_{\rm cr}$. It agrees with normalized bar $H^1(G,A)$; comparison to derived cohomology retains the inherited DC and supplied-resolution convention. The crossed-homomorphism and bar quotient statements themselves require no choice axiom.

Sources: Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf); Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-inhomogeneous-group-cochains, cor-normalized-cochains-compute-group-cohomology.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-degree-one-restriction-inflation-and-quotient-action`

Claim/conventions: For $1\to N\to G\xrightarrow{\pi}Q\to1$ and a left G-module A, let $A^N=\{a:na=a\text{ for all }n\in N\}$, with action $q a=ga$ for any lift g of q. Define
$$\operatorname{res}(d)=d|_N,\qquad\operatorname{inf}(c)(g)=c(\pi(g)),\qquad(g\cdot d)(n)=g d(g^{-1}ng).$$
Inflation starts with crossed maps $Q\to A^N$. The last formula is a G-action on crossed maps $N\to A$; it is its induced action on H1 that factors through Q. All H1 symbols first denote the explicit bar quotient; the derived interpretation uses its inherited conventions. The next lemma supplies well-definedness on the quotient.

Sources: Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf); Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-degree-one-maps-and-quotient-action-are-well-defined`

Claim/conventions: The formulas define homomorphisms $\operatorname{inf}:H^1(Q,A^N)\to H^1(G,A)$, $\operatorname{res}:H^1(G,A)\to H^1(N,A)^Q$, and a Q-action on $H^1(N,A)$. Here H1 is the bar quotient, with the inherited convention for its derived interpretation.

Sources: Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf); Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-degree-one-restriction-inflation-and-quotient-action.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `thm-degree-one-inflation-restriction-exact-sequence`

Claim/conventions: For every extension $1\to N\to G\to Q\to1$ and left G-module A, the bar-cohomology sequence
$$0\longrightarrow H^1(Q,A^N)\xrightarrow{\operatorname{inf}}H^1(G,A)\xrightarrow{\operatorname{res}}H^1(N,A)^Q$$
is exact. This crossed-map proof is choice-free; the derived interpretation retains its inherited comparison convention. No surjectivity of restriction is asserted.

Sources: Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf); Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: lem-degree-one-maps-and-quotient-action-are-well-defined.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-bar-two-cocycles-classify-abelian-kernel-extensions`

Claim/conventions: Assume AC. For a group G and a fixed left G-module A, normalized bar $H^2(G,A)$ is in bijection with equivalence classes of extensions $0\to A\to E\to G\to1$ inducing the fixed action on A. The zero class corresponds exactly to extensions with a homomorphic section. The derived interpretation of bar cohomology retains its supplied-resolution comparison convention.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: def-inhomogeneous-group-cochains, cor-normalized-cochains-compute-group-cohomology, def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps`

Claim/conventions: Assume AC. Pulling back an abelian-kernel extension along $\alpha:H\to G$ represents $\alpha^*:H^2(G,A)\to H^2(H,A)$. Pushing it out along a G-module map $u:A\to B$ represents $u_*:H^2(G,A)\to H^2(G,B)$. These are the abelian-kernel constructions, with the fixed actions. H2 denotes normalized bar cohomology, with its inherited derived interpretation.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: lem-bar-two-cocycles-classify-abelian-kernel-extensions, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `def-low-degree-transgression-for-a-group-extension`

Claim/conventions: Assume AC. For $1\to N\to G\xrightarrow{\pi}Q\to1$, a left G-module A and $[d]\in H^1(N,A)^Q$, put $D_d=\{(d(n),n):n\in N\}\le A\rtimes G$ and $L_d=N_{A\rtimes G}(D_d)$. Define $\operatorname{Tra}[d]$ to be the class of
$$0\longrightarrow A^N\longrightarrow L_d/D_d\longrightarrow Q\longrightarrow1.$$
It is a well-defined homomorphism to normalized bar $H^2(Q,A^N)$. Explicitly choose normalized $\alpha:Q\to G$ and $\eta:Q\to A$ with $(\alpha(q)\cdot d-d)(n)=n\eta(q)-\eta(q)$; put $f(q,r)=\alpha(q)\alpha(r)\alpha(qr)^{-1}$. Then Tra is represented by
$$F(q,r)=\eta(q)+\alpha(q)\eta(r)-f(q,r)\eta(qr)-d(f(q,r)).$$
This fixes the DHW sign convention. The derived interpretation of bar cohomology retains its comparison convention.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: lem-degree-one-maps-and-quotient-action-are-well-defined, lem-bar-two-cocycles-classify-abelian-kernel-extensions, lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-transgression-kernel-is-the-image-of-restriction`

Claim/conventions: Assume AC. With the displayed crossed-map and transgression conventions,
$$\ker(\operatorname{Tra}:H^1(N,A)^Q\to H^2(Q,A^N))=\operatorname{im}(\operatorname{res}:H^1(G,A)\to H^1(N,A)^Q).$$
Cohomology is the normalized bar theory, with its inherited derived interpretation.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-low-degree-transgression-for-a-group-extension, thm-degree-one-inflation-restriction-exact-sequence, lem-bar-two-cocycles-classify-abelian-kernel-extensions, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `lem-kernel-of-degree-two-inflation-is-the-transgression-image`

Claim/conventions: Assume AC. The map $\operatorname{inf}:H^2(Q,A^N)\to H^2(G,A)$ is pullback along $\pi:G\to Q$ followed by coefficient inclusion $A^N\hookrightarrow A$. Then $\ker\operatorname{inf}=\operatorname{im}\operatorname{Tra}$. H2 denotes normalized bar cohomology, with its inherited derived interpretation.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-low-degree-transgression-for-a-group-extension, lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `thm-inflation-restriction-transgression-five-term-sequence`

Claim/conventions: Assume AC. For every group extension $1\to N\to G\to Q\to1$ and left G-module A, the sequence
$$0\longrightarrow H^1(Q,A^N)\xrightarrow{\operatorname{inf}}H^1(G,A)\xrightarrow{\operatorname{res}}H^1(N,A)^Q\xrightarrow{\operatorname{Tra}}H^2(Q,A^N)\xrightarrow{\operatorname{inf}}H^2(G,A)$$
is exact at every term having a following displayed arrow. Tra uses the normalizer quotient and its printed DHW cocycle sign; degree-two inflation includes coefficient inclusion. Cohomology is normalized bar cohomology, with its inherited derived interpretation. No exactness assertion at the last term is intended.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: thm-degree-one-inflation-restriction-exact-sequence, lem-transgression-kernel-is-the-image-of-restriction, lem-kernel-of-degree-two-inflation-is-the-transgression-image, def-axiom-of-choice.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `ex-transfer-annihilation-for-a-cyclic-group`

Claim/conventions: For $C_m=\langle g\mid g^m=1\rangle$, $m\geq1$, with trivial integral coefficients, $H_0(C_m;\mathbb Z)=\mathbb Z$, $H_{2j+1}(C_m;\mathbb Z)=\mathbb Z/m\mathbb Z$ for $j\geq0$, and $H_{2j}(C_m;\mathbb Z)=0$ for $j\geq1$. In particular multiplication by $m$ kills positive homology.

Sources: Weibel, An Introduction to Homological Algebra, Calculation 6.2.1, Theorem 6.2.2 and Example 6.2.3, pp.167–168 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order, lem-diagonal-bar-coinvariants-compute-group-homology.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `ex-free-presentation-five-term-sequence-for-a-cyclic-group`

Claim/conventions: For $m\geq1$, the presentation $F=\mathbb Z\twoheadrightarrow C_m=\mathbb Z/m\mathbb Z$ has kernel $R=m\mathbb Z$, and its five-term sequence is $0\to0\to m\mathbb Z\hookrightarrow\mathbb Z\twoheadrightarrow\mathbb Z/m\mathbb Z\to0$. Thus $H_2(C_m;\mathbb Z)=0$.

Sources: Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132 (https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf); Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8 (https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf). Dependencies: thm-free-presentation-homology-five-term-sequence.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Authored checkpoint: `ex-transgression-for-the-integral-heisenberg-extension`

Claim/conventions: Give $E=\mathbb Z^3$ the product $(a,b,c)(u,v,w)=(a+u,b+v,c+w+av)$. For the central extension $0\to\mathbb Z\to E\to\mathbb Z^2\to0$ and trivial coefficients $A=\mathbb Z$, the transgression of $d:\mathbb Z\to\mathbb Z$, $d(c)=c$, is represented by $F((a,b),(u,v))=-av$ and is nonzero. The displayed section and cochains suffice for this concrete calculation.

Sources: Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21 (https://arxiv.org/pdf/1103.4052). Dependencies: def-low-degree-transgression-for-a-group-extension, lem-bar-two-cocycles-classify-abelian-kernel-extensions.

Decision: complete local argument and step contract written; format checks pending. No mathematical gap identified in this item. Next: continue manifest order and run batch checks.

### Step-5 final evidence and handoff

Completed inventory (stable IDs; no item or promised result removed):

- Page `modular-traces-and-brauer-character-independence` at `library/group-theory/modular-traces-and-brauer-character-independence.md`:
  - `lem-a-finite-dimensional-algebra-separates-its-simple-modules`
  - `lem-modular-trace-functions-of-simple-modules-are-linearly-independent`
  - `lem-modular-trace-depends-only-on-the-p-regular-part`
  - `lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring`
  - `def-lifted-modular-trace-on-p-regular-elements`
  - `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces`
  - `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements`

- Page `modular-traces-and-brauer-character-independence-examples` at `library/group-theory/modular-traces-and-brauer-character-independence-examples.md`:
  - `ex-modular-traces-for-a-cyclic-p-prime-group`
  - `ex-brauer-character-independence-for-s-three-in-characteristic-two`
  - `cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters`

- Page `group-homology-transfer-and-low-degree-exact-sequences` at `library/group-theory/group-homology-transfer-and-low-degree-exact-sequences.md`:
  - `lem-diagonal-bar-coinvariants-compute-group-homology`
  - `def-finite-index-transfer-on-normalized-bar-chains`
  - `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy`
  - `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`
  - `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order`
  - `lem-bar-first-integral-homology-is-the-abelianization`
  - `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`
  - `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex`
  - `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`
  - `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree`
  - `thm-free-presentation-homology-five-term-sequence`
  - `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology`
  - `def-degree-one-restriction-inflation-and-quotient-action`
  - `lem-degree-one-maps-and-quotient-action-are-well-defined`
  - `thm-degree-one-inflation-restriction-exact-sequence`
  - `lem-bar-two-cocycles-classify-abelian-kernel-extensions`
  - `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps`
  - `def-low-degree-transgression-for-a-group-extension`
  - `lem-transgression-kernel-is-the-image-of-restriction`
  - `lem-kernel-of-degree-two-inflation-is-the-transgression-image`
  - `thm-inflation-restriction-transgression-five-term-sequence`

- Page `group-homology-transfer-and-low-degree-exact-sequences-examples` at `library/group-theory/group-homology-transfer-and-low-degree-exact-sequences-examples.md`:
  - `ex-transfer-annihilation-for-a-cyclic-group`
  - `ex-free-presentation-five-term-sequence-for-a-cyclic-group`
  - `ex-transgression-for-the-integral-heisenberg-extension`


Provenance decisions: all 28 A-item statements are literature-derived. The five worked-example statements are ai-altered applications of the cited mathematics; the ordinary-trace counterexample statement is ai-generated with `generation.role: counterexample` and remains a dependency leaf. All 32 written arguments are ai-altered, reflecting the explicit local derivations rather than a verbatim source proof. The two definition-only items have proof provenance `not-applicable` and name their following well-definedness lemmas in `justified_by`. No item was promoted to published; no judge or audit stamp was added. Bibliographic source locators and source dispositions remain intact.

Mathematical evidence: finite simultaneous density supplies matrix-unit isolation without a radical theorem; the nilpotent kernel flag proves the p-regular trace identity; deterministic Newton iteration proves complete-DVR root lifting. Valuation scaling and a nonzero minor prove Brauer independence and extension of scalars. The homological comparison includes free-tensor exactness and finite cone elimination. Transfer includes diagonal reindexing, all deletion faces, normalization and both prism endpoints. The low-degree filtration proof gives each map, its independence of representatives, and both image/kernel inclusions. Restricting F-bars to R uses finite orbit support, avoiding a global transversal and an extra choice assumption. The two degree-one edge maps are inclusion and quotient, with the explicit inverse-bar sign calculated. The cohomological proofs construct the extensions, their inverses, pullbacks, abelian coefficient pushouts, normalizer quotients, and both exactness recoveries. The cyclic examples compute all positive parity degrees and the actual multiplication-by-m inclusion; the Heisenberg example calculates the cocycle and its nonsymmetric witness.

Source reading in this authoring turn used the complete named passages, not snippets as substitutes for missing arguments: Yanqi Lecture 11 §§11.1–11.2, printed pp.128–131; Webb Lemma 10.1.1, its following definition and Example 10.1.2, p.170, and Theorem 10.2.2 with proof, p.176; Pound/Martin Lemma 6.6 with proof, p.18; Halle §5.3 through Notation 1, p.875; Stacks 04GE Definition 10.153.1 and Lemmas 10.153.2 and 10.153.9 with proofs; Löh Definitions 1.7.12–13 and Theorem 1.7.15 with the homological proof, pp.63–65, and the full Theorem 3.2.18 argument, pp.129–132; Weibel Definition 6.4.1 through Corollary 6.4.6, pp.174–175, the transfer passage 6.7.16–17, pp.194–195, Low Degree Terms 6.8.3, p.196, and Presentations/Hopf 6.8.7–8, p.198; DHW complete §§2–5, pp.2–11, and §10.2, p.21. Additional explicit-example evidence is Weibel Calculation 6.2.1, Theorem 6.2.2 and Example 6.2.3, pp.167–168; the generator-difference calculation matches Proposition 6.2.6 and Corollary 6.2.7, p.169. Exact URLs are in the item references and individual checkpoints. The source's general spectral-sequence construction and later spanning assertions are not substituted for the local arguments. No source was dropped. Prior fetch hashes were preserved and were not restamped or represented as new fetches.

Contracts: every numbered step has one derivation row containing its completed claim, Given inputs and cited fact/step inputs. Every F citation has the exact current supplier Statement/Definition excerpt and all actual uses. Where the finite comparison construction itself is reused, `supporting_argument` additionally records the exact completed supplier proof. All eight standard boundary cases are recorded per item, with specific supporting steps or item-specific inapplicability reasons. Canonical phase repairs were applied together with the corresponding contract and boundary-reference changes; QED uses the supported terminal glyph. Definitions have no invented proof rows.

Dependency decisions: the cyclic homology example now directly declares `lem-diagonal-bar-coinvariants-compute-group-homology`, whose finite augmented comparison it actually uses. The transfer definition and degree-one map definition declare their already assigned well-definedness lemmas in `justified_by`. The owned manifest agrees with these edits. The consumer input `research/phase-2-wave-1-batch-3.cross-batch-dependencies.json` remains `[]`: all these suppliers are in this batch, and all external suppliers are earlier published inputs, not another batch in this run. The mandated ledger refresh was run and reported “refreshed and deduplicated.” No plan or workflow state was edited.

Checks actually run:

- Precheck was invoked with all 34 explicit manifest `items/ID.md` paths. Initial run found 32 format failures (including canonical repairs). After canonical numbering/reordering and QED repairs, the final run reports **32 checked, 0 failing**; the two definition-only items correctly have no phase proof to check.
- The requested bare `node tools/validate-plan.mjs` exits 2 with usage: this tool requires a plan spec. Passing the batch array is also not its accepted wrapper shape. The correct `node tools/validate-plan.mjs research/plan-spec.json` exits **0**, reporting acyclic/resolved declared order and no item-level cycles, forward references, or B-page dependencies among pages with item lists. Its repository-wide redundant-prerequisite warnings and 683 still-empty planned pages are not proof evidence and were not edited.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-3.pages.json`: final **34 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-3.proof-contracts.json --strict`: final **34/34 items checked, 0 errors, 0 warnings**.
- Supplemental `rendercheck.mjs`, with all 34 items and four page paths: **38 files pass**, including actual KaTeX parsing and renderer YAML parsing.
- Supplemental repository-wide `depcheck.mjs --json`: initial owned Unicode title-escape diagnostics were repaired with literal Unicode. Final run exits 1 on **78 errors and 474 warnings elsewhere**, with **zero errors and zero warnings naming any owned item/page**. This repository-wide failure is not represented as a batch or global pass.

Unresolved mathematics/scope: no unfinished local argument or proposed narrowing/removal remains in the 34 assigned items. HOM-SECTION-CHOICE is addressed under the already authorized §30.7 contract: AC is explicit for all six general classification/transgression items, including both arbitrary-family selections of alpha and eta. The homology comparison separately retains DC and supplied resolutions. The concrete Heisenberg section and eta are explicit and require no new arbitrary choices. This does not assert that AC is necessary for the abstract five-term theorem.

Outside this dispatch, published-consumer debt remains owned by the Phase-3/Alpha process: the Brauer basis consumer must still prove spanning separately and adopt the new independence supplier; the Schur/Hopf and inflation-restriction consumers must adopt the appropriate five-term suppliers with their stated conventions. The independent Step-3/recheck reports and protected published content have been preserved. No new prerequisite or change of promised scope is proposed. Next action for the build driver: consume the completed draft manifest and evidence in its normal transition; no transition was performed here.
