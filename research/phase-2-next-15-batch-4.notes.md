# Batch 4 scaffold notes — `phase-2-next-15`

## Owned scope and outcome

Scaffolded the assigned A/B pair only:

- `grothendieck-spectral-sequences-and-computations` (38 items)
- `grothendieck-spectral-sequences-and-computations-examples` (9 items)

All 47 assigned items occur once, in prerequisite order. No page split, cross-batch supplier, new prerequisite pair, published-content edit, shared-plan edit, engine-state edit, or verdict edit is requested. The consumer-batch dependency input is therefore the empty array.

## Plan/design comparison

The current `research/plan-spec.json` controls. Its page IDs, order, category, companion relation, and six A-page `requires` entries agree with the assigned task. Its item arrays are empty scaffold placeholders; the 47-item inventory in `research/plan-homological-algebra-track.md` is the construction source, not a semantic conflict.

Two conflicts/refinements were found and recorded rather than silently copied:

1. The design heading calls the A page “Grothendieck Spectral Sequences and Derived Computations”, while the current plan and assigned task call it “Grothendieck Spectral Sequences and Computations”. The manifest uses the current-plan title.
2. The designed ID `lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f` calls `F(I^*)` a “resolution”. For merely left-exact `F`, `H^q(F(I^*))=R^qF(A)` and positive cohomology need not vanish, so `F(I^*)` is generally only a bounded-below **termwise `G`-acyclic complex**, not a resolution of `F(A)`. The assigned stable ID is retained, but the manifest title, statement, and strategy state the correct claim and exact failure mode.

The design’s first-quadrant language for a general bounded-below complex is implemented by translating its lower bound `b` to index `q-b`; this is a convention clarification, not a new hypothesis. The UCT statement likewise spells out the library convention `Hom_R(C,M)^n=Hom_R(C_n,M)` with `delta(f)=f d`, which is what makes the displayed `p+q` indexing correct.

## Dependency and proof audit

The actual statements and proofs used from all six required pages were read, not inferred from page membership. In particular:

- The row/column filtration theorems use the library’s signed double-complex convention and the finite-diagonal first-quadrant convergence theorem supplies an actual finite filtration of the abutment.
- Cartan-Eilenberg data must resolve terms, cycles, boundaries, and cohomology compatibly. Termwise injective resolutions alone are inadequate for `E_2^{p,q}=R^pF(H^qK)`.
- The Grothendieck proof explicitly uses `F(I)` being termwise `G`-acyclic to identify the total target with `R(GF)`; left exactness alone is inadequate.
- `(-)^G=(-)^Q o (-)^N` is proved by the quotient action. Exact inflation is left adjoint to `N`-invariants, so `N`-invariants send injective `G`-modules to injective and hence `Q`-acyclic modules. LHS therefore consumes the published derived-functor definition of group cohomology and does not define it.
- The UCT uses Ext from supplied projective resolution data and the Kunneth/Hyper-Tor items use Tor from supplied left-module projective resolution data. This preserves a supplied-data branch without silently importing the stronger balanced-functor choice contract.
- The PID comparisons match the published UCT and Kunneth short exact sequences. Collapse yields associated-graded quotients and a natural extension; it does not yield a natural splitting.
- The `E_2`-page counterexample is planned as two explicit finite filtered complexes differing only in a filtration-drop-two differential, so it cannot rely on the proposition it is meant to illustrate.

No dependency reaches `deferred-set-theory-beyond-choice`; no Recorded result is consumed to prove its replacement; no local dependency is circular or forward.

## Choice ledger

- Definitions, both hypercohomology spectral sequences from supplied Cartan-Eilenberg data, the supplied-data Grothendieck theorem, finite first-quadrant convergence, and the explicit finite filtered counterexamples are ZF constructions.
- `thm-cartan-eilenberg-injective-resolutions-exist` has two branches: supplied compatible choices in ZF; for one fixed bounded-below complex, serial-relation DC produces the countable successor sequence. It directly declares `def-serial-relation-dependent-choice-principle-over-zf`, avoiding an accidental AC upgrade.
- A global simultaneous choice of resolutions for all objects would require a separately stated stronger choice hypothesis; it is not asserted by this scaffold.
- The arbitrary-vector-space splitting proposition and the PID splitting examples explicitly assume AC and depend on `def-axiom-of-choice`. AC is used to choose bases/projective complements. Finite-dimensional vector spaces retain the weaker finite-choice branch.
- The spectral-sequence collapse itself is choice-free; only reconstructing a direct-sum splitting uses complements.

## Published defects for the canonical ledger

The following published items each state “Assume the Axiom of Dependent Choice” in the body but omit any DC item from their frontmatter `deps`:

- `thm-horseshoe-lemma-for-injective-resolutions` — body line 26; published; actual scaffold prerequisite for Cartan-Eilenberg existence.
- `thm-injective-comparison-map-exists` — body line 26; published; actual scaffold prerequisite for existence, independence, and naturality.
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` — body line 26; published; actual scaffold prerequisite for independence and naturality.
- `thm-acyclic-resolution-theorem-for-right-derived-functors` — body line 28; published; actual scaffold prerequisite for the derived-composite comparison.
- `prop-positive-right-derived-functors-vanish-on-injective-objects` — body line 24; published; actual scaffold prerequisite for the LHS acyclicity lemma.
- `def-group-cohomology-as-a-derived-functor` — body line 27; published; actual scaffold prerequisite for LHS and its low-degree sequence.

Evidence: each frontmatter dependency list was inspected and contains no `def-dependent-choice` or pure serial-DC definition, while each cited body line explicitly asserts DC. Publication state was checked in the same frontmatter. This is a dependency-metadata/axiom-contract defect, not evidence that the mathematical conditional proofs are false. The planned repair is to add an exact DC dependency (preferably a pure ZF formulation rather than a definition whose explanatory graph imports AC), then re-audit downstream choice closure. Until repaired, new choice-bearing consumers state their own choice contract explicitly or use supplied-data branches. These published defects should be copied by the owner into the canonical ledger; this Beta did not edit the shared ledger.

## Source reading and dispositions

Full PDFs were downloaded and extracted with `mutool`; the complete relevant arguments were read:

- Weibel, Chapter 5, Sections 5.7-5.8, printed pp.145-152.
- Sharifi, Section 4.3. The current hosted PDF places it at printed pp.94-97; the design’s pp.83-86 locator is stale, so stable section and theorem numbers control.
- Stacks Project, *Derived Categories*, Sections 21-22, Tags 015H-015N, PDF pp.72-75.
- Weibel, Chapter 6, Section 6.8, printed pp.195-197.

Every named result harvested over those ranges has an `included`, `inline`, or reasoned `out-of-scope` disposition in the owned coverage file. Specialized sheaf/change-of-rings exercises and unbounded K-injective variants were not imported because they require later prerequisites and are unnecessary for the assigned bounded-below pair.

## Recorded outcomes and checks

Each item was recorded `ready` immediately after its ordered scaffold/dependency audit; there are 47 current readiness records and no Batch 4 escalation. Post-record validation against the unchanged manifest found all 47 records present with decision `ready`.

- `manifest-deps`: 47 items, 0 errors.
- `content-policy --manifest-only`: 47 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 1 A page, 22 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 4/4 complete sources fetched and stamped; the subsequent gate-mode check verified 4/4.
- `extcheck`: repository-wide check completed successfully; its existing recorded-not-proved warnings do not include this pair or any of its dependency paths.

The whole-run `step1-decisions check` and frontier-ledger `--require-reviewed` joins remain open because other assigned batches are still incomplete. This Batch 4 contribution supplies all of its own records and the required empty consumer input; no shared ledger was edited by this Beta.
