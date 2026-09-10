# Batch 16 — scaffold-fix-2-b16 checkpoint

Status: **BLOCKED, not ready for Step 3 approval or publication.** This checkpoint supersedes current-status claims in the historical fix-1 record below. Only the three authorized batch-16 files were edited. The current manifest contains **49 A contracts and 5 B contracts** (54 total), versus 22 A and 3 B at entry. The A inventory remains below the plan limit of 60; it has not been spliced into the shared plan.

## Repair and exact inventory

Added 27 A contracts and two B contracts, each with explicit deps, hypotheses, axiom strength, statement, proof strategy and source support. No old declared dependency was removed. `included` records the existence of a proposed contract; it is not an independent sufficiency verdict. Earlier determinacy contracts were retained, not reapproved.

- `lem-metric-borel-hierarchy-monotonicity-and-operations`
- `def-well-founded-borel-evaluation-codes`
- `lem-well-founded-borel-code-evaluation`
- `lem-cantor-and-baire-sequence-coding`
- `thm-universal-borel-sets-and-strict-hierarchy`
- `lem-natural-number-game-strategies-have-continuum-many-plays`
- `thm-choice-produces-an-undetermined-natural-number-game`
- `thm-ad-implies-countable-choice-for-baire-space`
- `lem-perfect-set-game-strategy-dichotomy`
- `thm-ad-implies-perfect-set-property-for-sequence-spaces`
- `lem-polish-closed-products-and-baire-parametrization`
- `lem-analytic-countable-operations-and-borel-inclusion`
- `thm-analytic-closed-projection-and-continuous-image-equivalence`
- `thm-disjoint-analytic-sets-have-borel-separators`
- `cor-borel-iff-analytic-and-coanalytic`
- `def-souslin-operation-on-set-schemes`
- `thm-analytic-sets-are-souslin-operations-on-closed-sets`
- `lem-uncountable-analytic-splitting`
- `thm-uncountable-analytic-sets-contain-cantor-copies`
- `cor-uncountable-polish-borel-hierarchy-is-strict`
- `def-descriptive-tree-rank`
- `lem-countable-tree-ranks-and-rank-monotonicity`
- `thm-analytic-families-of-well-founded-trees-have-bounded-rank`
- `thm-ill-founded-trees-are-analytic-non-borel`
- `def-property-of-baire-for-subsets`
- `lem-baire-property-sigma-algebra-and-borel-regularity`
- `lem-sequence-spaces-continuously-inject-into-the-real-line`
- `fs-every-set-of-reals-is-borel`
- `ex-well-founded-borel-code-for-a-closed-basic-complement`

The Borel repairs make metric-space monotonicity explicit; a general topological space does not receive that assertion. Code evaluation uses a total well-founded recursion rule and distinguishes a legal empty union from an illegal empty underlying code tree. Universality uses a cofinal lower-rank sequence with enough distinct slots to encode every countable union. Strictness on uncountable Polish spaces comes only after the local Cantor-copy theorem.

Analytic closure precedes normal forms: countable closed witnesses are tagged/paired explicitly; simultaneous analytic/coanalytic sets form a sigma algebra containing opens, which supplies Borel inclusion without invoking the normal-form theorem being proved. The Borel-image clause supplies the Borel graph argument locally. Separation maintains inseparability of cylinder images. Perfect-set construction splits uncountable images in disjoint target neighbourhoods and preserves witness cylinders.

Boundedness uses a direct alternate proof from the read Marker result: for continuous f:N^N -> A subset WF, form the countable tree S of equal-length pairs (s,t) for which some a extending s satisfies t in f(a). A branch (a,b) would, by continuity of each membership coordinate, give b in [f(a)]. Thus S is well-founded; t maps to (a restricted to length(t),t), bounding each f(a) by the rank of S. Rank(S)+1 bounds the family. This precedes IF non-Borelness and does not depend on it. Empty-tree/root rank conventions are explicit. No source-drop mechanism is invoked for this local alternate proof because the original full text is accessible.

The AC undetermined-game argument indexes strategies by the initial cardinal of N^N and chooses two fresh plays at each stage; cardinal absorption handles singular continuum. The AD countable-choice argument is restricted to families of nonempty subsets of N^N, not arbitrary sets or dependent choice. The perfect-set game preserves full play histories in the countable-barrier argument. Its AD conclusion currently concerns sequence spaces. The real-line embedding uses exactly the zero-based ternary bijection in `items/thm-cantor-set-ternary-description.md`, plus its geometric tail estimate. The false-statement witness pulls an alleged Borel e[A] back along an injection; it makes no unsupported claim that arbitrary continuous images preserve Borelness.

## Source evidence and dispositions

Active source records retain Marker, BLM, both Martin treatments, and add Lietz. Marker named locators in newly added rows use printed page numbers (PDF index plus one), correcting the one-page offset in historical locators. Complete relevant Marker Lemma 4.5 was reopened through its ending proof during the final pass. New full readings cover the named Borel-code/universality, analytic normal-form/separation/perfect-set and rank results listed precisely in coverage. Read Baire-envelope/Souslin-preservation and measurable-envelope/Souslin-preservation passages now have separate unresolved rows: none was silently dropped. The measure treatment leaves proofs as exercises; reading that statement does not provide the missing proof.

Lietz section 10.2, Definition 10.9/Theorem 10.10 p99 and complete Claims 10.11–10.12/Propositions 10.13–10.14 pp100–101 were read. Its perfect-set and countable-real-choice arguments support local contracts. The measurability/Baire clauses are stated without proof there and remain unresolved. Proposition 10.13's Bernstein argument was read but its local pathology contract remains unresolved. The erroneous meagreness footnote is not imported: the definition uses an open symmetric difference with a meagre set.

Additional recovered reading lead, not active proof backing: Hachtman–Palumbo, Notes on Determinacy, https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf, complete Theorem 1.6 proof in the opening pages and section 7 Banach–Mazur proof, Definition 7.7/Theorem 7.8 pp23–24. Dispositions: Theorem 1.6 is an independent comparison for the included `thm-choice-produces-an-undetermined-natural-number-game`; the category characterization and AD Baire theorem remain unresolved leads for the missing contracts. The proof requires a careful countable union of coded meagre witnesses under weak choice and the role switch after I's first move. No fetch/read stamp or complete-book harvest is claimed for this lead. The earlier Martin measure-game lead remains unresolved as described in the historical record.

Local source-fetch-check --stamp genuinely retained Marker/BLM stamps and failed for both Martin URLs and Lietz with EAI_AGAIN. Existing initial-plus-five recovery attempts were preserved/reused. Web recovery succeeded; therefore DNS failure is not evidence of open-web absence, no source was dropped, and no certain alternate-source resolution was fabricated. url-sweep failed locally for all five URLs. These failures remain gates even though relevant full text was readable through the web interface.

## Dependency evidence, ledger handoff and remaining obligations

Declared order and requires closure pass on a temporary overlay of the current canonical plan with exactly the owned inventory. No Foundations path to the deferred catalogue is reported by canonical or overlay extcheck. This does not certify every actual transitive proof use.

Additional full published bodies read for the new routes include `def-metric-space`, `thm-recursion-on-well-founded-setlike-relations`, `lem-compatible-well-founded-recursion-attempts`, `thm-well-ordering-theorem`, `cor-cardinal-absorption`, `def-rank-of-a-well-founded-relation`, `prop-ordinal-ranking-characterizes-well-foundedness`, `def-nowhere-dense-meagre-and-residual-subsets`, `def-dependent-choice`, `thm-cantor-set-ternary-description`, and the published measure/pathology candidates below. The lower ordinal, topology, series and function-construction transitive audit is still incomplete; the exact direct deps and load-bearing proof uses are in each owned contract. No merely co-resident published item is being used to block a supplier. No confirmed defective published consumer requiring a repair mapping was established in this repair.

Read `thm-borel-sets-are-lebesgue-measurable` and `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`: their countable-choice hypotheses cannot be silently erased in an AD argument. The latter's infinite-measure hull clause alone does not provide the minimal measurable envelope needed for a Souslin proof; a bounded-box reduction still needs a contract. Both Borel measure regularity and that exact interface remain unfinished.

Read `thm-bernstein-sets-exist-under-a-well-ordering-of-r`, `thm-vitali-sets-exist-under-choice-on-r-over-q`, and `lem-hamel-basis-exists`. The first two live on `non-measurable-sets-and-the-cost-of-choice`, which is not in the owned requires closure; importing them would require an authorized backward page edge or complete local proofs. The Hamel supplier's page is already in closure, but the owned pathology statement and its downstream consequences still need contracts and auditing. The Vitali nonmeasurability theorem itself has not been fully audited. These are missing interfaces, not findings that the published suppliers are defective.

Remaining binding groups: (1) Euclidean Borel measure regularity, (2) AD/DC conditional category and measure regularity, with exact weak-choice assumptions and real-line transfers, (3) Vitali/Bernstein/Hamel pathologies. Remaining source obligations also include the read Souslin regularity results. No theorem AD implies unrestricted DC has been inserted. No mathematical scope has been deferred or weakened to turn coverage green.

No necessary new A/B prerequisite pair has yet been established: existing earlier suppliers or local lemmas remain possible routes. If completing the exact contracts requires a split or new pair, the authorized shared writer must add its full specification to prose and plan before this consumer can clear. This dispatch has no shared-write authority.

A scan against all current other-batch manifests found no declared cross-batch page/item edges. The semantic audit of implicit uses remains open. For the ledger owner: the current declared-edge input would be `[]`; verify implicit closure before certifying it. The task permits only pages/coverage/notes, so no cross-batch input or shared refresh was written. No shared consumer-supplier ledger change is requested on the evidence presently established.

## Final checks actually run

- **coverage**: FAIL: corrected coverage-only invocation with --require-destination --json: 92 harvested rows, 7 unresolved dispositions, 0 warnings. Initial documented --manifests invocation also emitted a spurious missing-page error because this tool version treats every nonflag argument as a coverage file.
- **manifest_deps**: PASS: whole-run batch glob, 664 items, zero normalized/errors at concurrent snapshot.
- **content_policy**: PASS: --manifest-only --json, 54 owned items, zero errors/warnings.
- **validate_plan**: PASS: canonical 936 populated pages/683 page-only; temporary final owned-inventory overlay 938/681. Existing redundant-prerequisite warnings.
- **extcheck**: PASS: canonical and final owned-plan overlay; 15843 published items, 163 unproved, 61 consequences, zero errors, 61 warnings. Structural boundary check, not semantic audit.
- **source_fetch**: FAIL: --stamp retained 2/5 genuine fetch stamps, zero new stamps; Martin two URLs and Lietz EAI_AGAIN. Recorded attempts reused; no dropped source.
- **url_liveness**: FAIL: 0/5 local URLs live, all DNS failures.
- **source_backing**: FAIL: --require-verified with current liveness reports 53 authored results with transport-based backing-lost findings.
- **cross_batch_scan**: No declared cross-batch requires/deps/justified_by/forward_refs found against current other-batch manifests. Implicit mathematical dependency audit remains incomplete.

Final output files are `/tmp/b16-fix2-final-*.txt`; the corrected coverage result is `coverage-corrected.txt`. The owned overlay is `/tmp/b16-fix2-final-plan.json`; its extcheck repository contains read-only symlinks to published items/library. No precheck, rendercheck, independent judge, publication or semantic closure approval is claimed. All blocking findings remain active.

---

# Historical scaffold-fix-1 record (superseded where stated above)

# Batch 16 — scaffold-fix-1-b16 repair checkpoint

Run: phase-2-catchup-24. Role: beta. Date: 2026-09-09.
**BLOCKED: repaired determinacy contracts are proposed scaffolding, not a sufficient Step-1 verdict.**
This checkpoint supersedes the original worker's nine-A-item/seven-determinacy-gap
checkpoint. Historical fetch attempts and check outcomes remain in coverage JSON.

## Authority and current state

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, README.md, beta scaffold/task instructions,
frontier-dependency-ledger.md, SET-10, canonical A673/B674 plan entries, current
findings, owned evidence and supervisor source-recovery notes. After handoff,
reread the current manifest, coverage, notes and open obligations. The live run
was checked against .autopilot/phase-2-catchup-24/status.md and git log (HEAD
99c9b13eb at that check), not a concluded RESUME file.
Only this batch's pages.json, coverage.json and notes.md were edited. Temporary
plan overlays/check outputs are under /tmp; no shared plan, ledger, published
item/page, other batch, or workflow state was edited.

A673 retains its three authorized requires: well-founded-relations-rank-and-the-
cumulative-hierarchy, complete-metrizability-and-baire, and lebesgue-measure-on-
euclidean-space. B674 requires its partner only. No new pair is currently proved
necessary; unfinished inventory does not justify inventing one. The A limit is
60, and the current A has 22 items. The remaining inventory must be completed
before certifying whether a split is required.

## Exact repair

The manifest now contains 22 A contracts and 3 B items (25 total), up from 9+2.
The 13 added A items, in proof order, are:

1. def-countable-borel-hierarchy
2. lem-countable-borel-hierarchy-exhaustion-and-pullbacks
3. lem-terminal-reachability-and-residual-game-positions
4. lem-taboo-games-reduce-to-pruned-residual-games
5. thm-gale-stewart-open-determinacy
6. def-game-covering-and-k-covering
7. lem-game-covering-transfers-winning-strategies
8. lem-game-covering-composition-and-continuity
9. cor-unraveling-covers-give-determinacy
10. lem-stabilizing-game-coverings-have-inverse-limits
11. lem-closed-payoffs-admit-unraveling-covers
12. thm-borel-payoffs-admit-unraveling-covers
13. thm-borel-games-are-determined

Added B counterexample cex-taboo-winning-positions-need-not-contain-their-children.
The game definition now states its cylinder topology and explicitly depends on
def-topological-space. The taboo definition specifies maximal-play topology,
closedness of the infinite-play subspace, and fixed-history parity. No original
dependency was removed. Every added item has explicit deps, axiom strength,
source support and proposed/blocked review status.

Buffard–Levrel–Mayo (BLM) Lemma 1's claimed downward closure is false: I can win
at the root by choosing a terminal II-taboo child while the other child has a
unique infinite continuation and no terminal awards. Deleting all winning
positions then leaves that child without its root. The new reduction instead
keeps positions whose EVERY prefix avoids both terminal-reachability winning
sets. At an opponent's first exit, switch to the selected winning strategy.
The child equivalences, disjointness, pruning and strategy assembly are explicit.

Inverse-limit lifts are selected recursively through successive coverings,
not independently at each depth. Both infinite and eventually finite lift
cases are included, with the losing-short-lift exception and terminal reflection
in its original direction. Closed-payoff unraveling includes both player
simulations, original terminal cases, and fixed selectors on witness subsets
independent of the input strategy, to preserve finite-depth locality.

Borel induction is simultaneous over set alphabets and depths. Pull back each
lower-rank constituent, unravel successively at increasing depths, take the
stabilizing limit, then unravel the resulting OPEN union once more. The union
of clopen constituents is not incorrectly called clopen. Least-rank witness
collection bounds dependent selections by sets before AC is applied; no global
choice is invoked. This whole spine is ZFC and cannot supply the ZF+AD branch.

## Source readings and dispositions

Active source records in coverage give exact URLs, locators and result-to-item
mappings. The seven original unresolved BLM rows now map to the repaired
contracts; this is inclusion, not independent proof approval. Marker was
reharvested for Definition 2.4, Lemmas 2.5–2.6, Corollary 2.7, Exercise 2.8
(pp14–15) and Theorem 6.4 through Theorem 6.9, including Exercises 6.5–6.8
(pp54–55). Earlier targeted definition/tree readings are retained. Fixed-rank
closure and the AC-undetermined-game exercise remain unresolved. Arbitrary-space
cardinality or monotonicity is not imported from a second-countability/metric
argument. The hierarchy exhaustion/pullback contract works without that shortcut.

BLM https://arxiv.org/html/2401.09659v1 was read in full through Lemma 7,
including all proofs. Its false deletion argument is replaced as above; Lemma
4 lift coherence and Lemma 7's witness-selection choice are explicit repairs.

Martin, https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf:
ALL six scanned pages (printed 450–455) were read as local images, including
Lemmas 1–4, theorem, corollary and remarks/Curiosity. Reading files were
/tmp/prestige-martin-reading-66suY1/page-1.png through page-6.png. The earlier
claim that this paper was unread is superseded. Cover definitions/transfer and
composition: p451; closed construction: pp452–453; limit lifts: pp453–454;
Borel induction and choice remark: p454. The AD+uniformization Curiosity and
projective continuation are explicitly outside this design's proof scope.

Martin, https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf:
497-page author-hosted draft. Read the full relevant text at p64 (residual
quasistrategy reduction), pp65–77 (definitions, Lemmas 2.1.3–2.1.7, Theorems
2.1.8–2.1.9, through every proof's end). Its specified-lift quadruple convention
is distinguished from the local existential-lift triple convention. No unrelated
Chapter 1 theorem listed in Lemma 2.1.2 is silently imported.

Additional AD reconnaissance, NOT active proof backing for any current item:
Martin, https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf,
“A Simple Proof That Determinacy Implies Lebesgue Measurability,” pp393–397:
read the complete mathematical text. Lemma 1 (winning I implies inner measure
at least v), Lemma 2 (winning II implies outer measure at most v), and the
final rational-move coding/measurability deduction all have disposition
UNRESOLVED for the required measure-game/AD-measurability contracts below.
Exact remaining obligations: define the fair-coin measure locally; justify its
transfer to completed Lebesgue measure; supply the legal nonnegative near-infimum
response construction and countable selections under the stated weak choice;
code rational moves as natural-number games. This reading does not yet settle
those interfaces or warrant importing an AC theorem into the AD branch.
The lecture notes at https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
were opened only at their contents/introductory pages; section 10.2 is an UNREAD
lead, not harvested backing. Searches for AD and dependent choice found the
special L(R) theorem, not a justification for unrestricted AD implies DC or
DC_R. No such implication has been inserted. Separate AD+DC hypotheses remain
an available route, still requiring the exact local regularity proofs.

## Fetch evidence

Supervisor recovery previously produced genuine Marker and BLM fetch_verified
stamps, retained unchanged. The current real source-fetch-check --stamp run
accepted those two stamps but recorded initial failure plus five real EAI_AGAIN
retries for EACH new Martin active URL (2026-09-09T09:20:00Z). Local curl also
failed DNS for the Martin draft; url-sweep failed DNS for all four active URLs.
These are transport failures, not open-web absence: complete relevant text was
recovered through web text or the six local images. Recovery stopped on that
recovery, not on a fabricated absence conclusion. No source was dropped, no
source_resolution.confidence was manufactured, and no read/fetch stamp invented.
The new URLs still need genuine fetch stamps from functioning transport.

## Dependency audit and its limits

The temporary canonical-plan overlay containing exactly this batch's current
inventory passes validate-plan: resolving IDs (including published aliases),
prefixes, A/B leaves, same-page proof order, backward order, and declared page
closure. A matching temporary extcheck repo uses read-only symlinks to published
items/pages and the overlay plan: no deps/justified_by/forward_refs path from
these Foundations contracts to the prohibited catalogue was found. This is a
structural boundary result, not a complete semantic proof audit.

The new actual determinacy path is Borel-game theorem -> unraveling theorem ->
closed construction + stabilizing limits + continuous pullbacks + transfinite
induction; transfer uses the covering definition and the locally supplied open
and taboo-reduction proofs. It never uses recorded Borel determinacy, AD
regularity, or a theorem on a B page. The rank-selection use is exactly
items/prop-minimum-rank-selection-and-collection.md: collecting nonempty sets
of least-rank witnesses over a set of possible inputs. Its membership-rank and
hierarchy/exhaustion suppliers, relation recursion, compatible recursion
attempts, well-founded induction, predecessor/transitive-closure construction,
transfinite recursion and induction were read to check that use. The countable
ordinal bound is items/thm-countable-subsets-of-omega-one-are-bounded.md, under
AC; items/def-first-uncountable-ordinal.md and items/thm-hartogs.md were read.
AC/default strategy selections use items/def-axiom-of-choice.md and
items/def-choice-function.md, not a recorded choice-strength theorem.

Also read the full bodies of def-baire-sequence-space, def-polish-space,
def-product-topology, def-initial-and-final-topology, lem-complete-remetrisation,
def-the-set-of-functions-from-one-set-to-another, and
lem-the-set-of-functions-between-two-sets-is-a-set. The analytic definition
uses only the definition of completely metrizable, not all remetrization
clauses. Product topology's defining clause does not consume its arbitrary
nonempty-product AC claim. No permission to erase published edges is inferred.

The ACTUAL TRANSITIVE semantic audit remains incomplete at lower ordinal,
function-construction and topology prerequisites; reading these listed bodies
is not a receipt for every supplier recursively. In particular the new
continuous/subspace interfaces and all future measure/category/AD interfaces
need full closure checks. This is an explicit audit blocker, not an allegation
that a published result is false. No unrelated co-resident defect was used to
block a supplier. No confirmed published defect or consumer repair was found
in the completed portion, so no exact published repair is asserted. No current
owned contract declares a same-frontier supplier; their external deps resolve
to published items. The frontier input/shared consumer ledger is not writable
for this dispatch; future confirmed consumer/supplier mappings must be recorded
here for reconciliation, never silently written to another batch.

## Binding unfinished inventory

Five grouped mandatory SET-10 obligations are deliberately unresolved canonical
coverage rows: Borel codes/universality/strictness; analytic normal forms,
Souslin/separation/boundedness; analytic PSP and Borel regularity; AD/DC
conditional regularity; and choice pathologies plus fs-every-set-of-reals-is-borel.
The two extra unresolved Marker rows are fixed-rank closure and an AC
undetermined game. Nothing has been deferred merely to make coverage pass.

The following original candidate inventory is retained for scope accounting.
Rows now implemented under the IDs above are completed PROPOSALS, not new work;
other candidate IDs remain unreserved until checked. In particular the hierarchy
exhaustion candidate is now lem-countable-borel-hierarchy-exhaustion-and-pullbacks.

| Required contract or proof component | Candidate ID / next proof obligation |
| --- | --- |
| Cantor space compactness, completeness, and perfectness | `thm-cantor-sequence-space-is-compact-perfect-and-polish`; establish compactness by a finite-cylinder argument, avoiding an unnecessary arbitrary Tychonoff theorem |
| Borel hierarchy and its conventions | `def-countable-borel-hierarchy`; Sigma_1=open, Pi_alpha=complement, higher Sigma_alpha=countable unions of lower Pi levels, including limit conventions |
| Borel codes | `def-well-founded-borel-evaluation-codes`; labelled well-founded trees, complement/union/leaf arities, invalid-code exclusion |
| Evaluation existence and uniqueness | `lem-well-founded-borel-code-evaluation`; recursion on reverse extension, with a total set-valued rule |
| Hierarchy exhaustion and closure | `thm-countable-borel-hierarchy-exhausts-borel-sets`; countable ordinal supremum and the precise countable-choice hypothesis |
| Universal sets / proper hierarchy | `thm-universal-borel-sets-and-strict-hierarchy`; constructive coding and diagonal argument, not a citation to the recorded hierarchy remark |
| Analytic normal forms | `thm-analytic-closed-projection-and-continuous-image-equivalence`; empty case and arbitrary Polish ambient space; the Borel-image direction requires an additional Borel parametrization proof |
| Closure properties | `lem-analytic-countable-operations-and-continuous-preimages`; arrange all witness coordinates and state exact choice costs |
| Souslin operation | `def-souslin-operation-on-set-schemes`; normalizing finite intersections, empty prefix, and closed-scheme normal form |
| Closed Souslin schemes | `thm-analytic-sets-are-souslin-operations-on-closed-sets`; witness convergence, not merely a projection slogan |
| Separation | `thm-disjoint-analytic-sets-have-borel-separators`; recursively maintain nonseparability; complete limit-point argument |
| Suslin characterization | `cor-borel-iff-analytic-and-coanalytic`; both directions need their own actual suppliers |
| Tree ranks | `def-descriptive-tree-rank`; reconcile empty tree, terminal node and root rank conventions with earlier relation ranks |
| Boundedness | `thm-analytic-families-of-well-founded-trees-have-bounded-rank`; an analytic family, not arbitrary family, bounded below omega_1 |
| Universal ill-founded trees | `thm-ill-founded-trees-are-analytic-non-borel`; universal tree plus diagonalization or boundedness route, in legal order |
| Analytic perfect-set theorem | `lem-uncountable-analytic-splitting` then `thm-uncountable-analytic-sets-contain-cantor-copies`; split images, preserve incompatible witnesses and limits in A |
| Baire property | `def-property-of-baire-for-subsets`; open symmetric difference meagre, then sigma-algebra closure |
| Borel regularity | `thm-borel-category-and-measure-regularity`; restrict Lebesgue claim to Euclidean spaces, audit exact published Borel-measurability and regularity interfaces |
| Analytic regularity | `lem-souslin-operation-preserves-baire-property` and measure analogue; needed if later regularity proofs consume these clauses |
| Open determinacy | `thm-gale-stewart-open-determinacy`; terminal/attractor rank construction, alphabet and axiom strength explicit |
| Borel determinacy rank spine | `def-game-covering-and-k-covering`, `lem-game-covering-transfers-winning-strategies`, `lem-stabilizing-game-coverings-have-inverse-limits`, `lem-closed-payoffs-admit-unraveling-covers`, `thm-borel-payoffs-admit-unraveling-covers`, `thm-borel-games-are-determined`; full proof repair needed below |
| AD and DC | `def-dependent-choice-for-real-relations`, `thm-ad-implies-countable-choice-for-reals` / exact justified DC_R result; do not claim unrestricted AD implies DC; read an authoritative treatment before fixing the scope of that implication |
| AD perfect-set property | `lem-perfect-set-game-strategy-dichotomy`, `thm-ad-implies-perfect-set-property`; countability versus Cantor-copy, with real coding |
| AD Baire property | `lem-banach-mazur-game-category-characterization`, `thm-ad-implies-baire-property`; illegal move conventions and local-to-global category argument |
| AD Lebesgue measurability | `lem-determinacy-measure-game-inner-outer-comparison`, `thm-ad-and-dc-imply-lebesgue-measurability`; exact game, interval coding, measure prerequisites and DC uses still unverified |
| Choice pathologies | `thm-choice-vitali-transversal-pathology`, `thm-choice-bernstein-set-pathology`, `thm-choice-hamel-basis-pathology`; separate quotient transversal, recursion against perfect sets, and Q-linear basis arguments; state AC and its actual uses |
| B companion | `fs-every-set-of-reals-is-borel`; explicit analytic non-Borel or Bernstein witness and transfer to the line; add worked Borel-code examples, empty/rank boundary cases, and an AC-undetermined-game example |


Projective determinacy and Woodin strength remain outside SET-10; the deferred
catalogue is only a target ledger, never a supplier.

## Checks actually run in scaffold-fix-1

| Command/check | Observed result |
| --- | --- |
| coverage-checklist with --require-destination --json | FAIL: 58 harvested rows, seven errors (five mandatory scope groups and two Marker rows); zero warnings. |
| whole-run manifest-deps | PASS: 633 manifest items at the concurrent snapshot, zero normalized/errors. This checks explicit dependency arrays, not semantic sufficiency. |
| content-policy --manifest-only --json on owned manifest | PASS: 25 items, zero errors/warnings. |
| validate-plan research/plan-spec.json | PASS: 936 populated pages, 683 page-only, existing redundant-prerequisite warnings; canonical plan has not been spliced. |
| validate-plan /tmp/b16-fix-overlay-plan.json | PASS: 938 populated pages, 681 page-only; batch's new inventory structurally checked. |
| extcheck --json | PASS: 15,843 published items, 163 unproved, 61 consequences, zero errors, 61 warnings. |
| extcheck --repo /tmp/b16-fix-overlay-repo --json | PASS: zero errors, same 61 warnings; includes new plan edges for Foundations boundary. |
| source-fetch-check --coverage ... --stamp | FAIL: 2/4 fetch-verified (retained Marker/BLM), zero new stamps, two Martin DNS failures with six attempts each. |
| url-sweep --coverage ... --out /tmp/b16-fix-url-liveness.json --fail-on-dead | FAIL: 0/4 locally live, all curl DNS failures. |
| source-backing --coverage ... --liveness /tmp/b16-fix-url-liveness.json --require-verified | FAIL: 24 authored-result backing-lost findings from local transport failures. No finding establishes open-web absence. |

Outputs are /tmp/b16-fix-*.txt; durable results are here and coverage.checks.
No precheck, rendercheck, independent judge, source-drop adjudication or
publication receipt is claimed. Keep the batch blocked until the remaining
contracts, transitive semantic audit, source stamps and all required gates are
resolved. The determinacy repair does not authorize advancement by itself.

## coverage-16 — partial mathematical repair, still blocked

Read SET-10, current batch notes, all seven unresolved coverage rows, current Souslin/Baire contracts, and full published Borel-measurability, measurable-hull and complete-measure proofs and measure/Carathéodory definitions. Reread complete Marker Lemma 4.21/Theorem 4.22/Corollary 4.23 and Exercise 4.24/Theorem 4.25 (printed pp39–41), https://homepages.math.uic.edu/~marker/math512/dst.pdf. Added `thm-souslin-operation-preserves-the-baire-property` and `thm-souslin-operation-preserves-lebesgue-measurability`: complete envelope and branch arguments are in manifests and SET-10 prose, with exact dependency arrays. The finite-box argument proves the minimal envelope property missing from the infinite-measure hull clause. The source's Exercise 4.24 containment typo is not imported. Both contracts state AC, including its use to select countably many hulls/witnesses; they do not supply AD regularity.

Split the composite perfect-set/Borel row into its three real obligations: existing analytic perfect-set and Baire contracts, plus `already-published` Borel measurability under countable choice. This preserves all mathematics without reminting a supplier. Two actual source rows now map to the new complete proposed arguments. Changed batch-16 manifest/coverage/notes, SET-10 prose, canonical plan, this report. Canonical inventory is 51 A + 5 B; pair identity, order and requires unchanged. No Phase-2 pair-count change. Checks pending final pass.

Remaining live rows: AD/DC conditional regularity, AD measurability/Baire source clauses, and Vitali/Bernstein/Hamel pathologies including the Bernstein source row. Read Lietz Proposition 10.13 in full at printed p101 and the published Bernstein existence proof: wellordering and continuum-sized perfect sets supply a transfinite fresh-point construction. The supplier is published at `non-measurable-sets-and-the-cost-of-choice`, outside the current SET-10 requires closure. The broad pathology contract is not yet discharged by existence alone; its consequences and weak-choice closure remain to be checked. No published defect established by this interface review.

## Remaining coverage-16 rows — individual dispositions (2026-09-09)

- **AD, DC and conditional regularity: blocked.** Reread the exact AD definition and the existing ZF countable-real-choice and perfect-set-game interfaces, current candidate inventory and prior complete-source recovery notes. The ZFC open/Borel determinacy and newly repaired Souslin theorems have explicit AC and cannot be consumed as AD suppliers. The unresolved chain is `def-dependent-choice-for-real-relations` (a separate assumption, not an AD consequence) -> coded countable meagre witnesses / `lem-banach-mazur-game-category-characterization` -> `thm-ad-implies-baire-property`, and a weak-choice measure interface -> `lem-determinacy-measure-game-inner-outer-comparison` -> `thm-ad-and-dc-imply-lebesgue-measurability`. These candidate IDs remain unregistered, not proved. The exact scope of any stronger DC_R implication remains uncertain.
- **AD implies measurability and the Baire property (Lietz): blocked.** Reopened the actual Theorem 10.10 and complete proof of the perfect-set clause, printed pp99–101, https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf. Clauses ii–iii are not proved there. Reuse the prior complete reading of Martin's measure-game paper and Hachtman–Palumbo's category-game proof as genuine recovery work. Outstanding obligations are fair-coin measure construction and transfer to completed Lebesgue measure, nonnegative near-infimum legal responses, rational move coding, and all countable witness/strategy selections under the stated weak choice; the category route additionally needs local-to-global role switching. No source disposition is changed on the strength of a theorem quotation or an incompatible AC proof.
- **Bernstein set under a wellorder of the reals: blocked at the full pathology interface.** Reread complete Lietz Proposition 10.13 and the published real-line Bernstein definition, existence proof and perfect-set-continuum proof. `thm-bernstein-sets-exist-under-a-well-ordering-of-r` is genuinely published; it constructs least fresh points using the given wellorder, with no assumption that continuum is regular. `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` uses least rational intervals in a nested binary tree and is ZF. These real-line suppliers avoid a new duplicate sequence-space construction. The selected page still needs a deliberate dependency and pathology consequence contract; no proof of all required consequences follows from merely mapping an existence source row. Read the published nonmeasurability corollary and counterexample: both require countable choice, so a bare wellorder hypothesis must not silently consume them. Keep the row unresolved pending exact consequence closure.
- **Choice pathologies and non-Borel false assertion: partially supplied, remaining group blocked.** The current `fs-every-set-of-reals-is-borel` has its AC undetermined-payoff and continuous-injection proof. Separate required proposed IDs `thm-choice-vitali-transversal-pathology`, `thm-choice-bernstein-set-pathology`, `thm-choice-hamel-basis-pathology` are not replaced by that witness. Existing suppliers are `thm-vitali-sets-exist-under-choice-on-r-over-q`, `thm-a-vitali-set-is-not-lebesgue-measurable`, the Bernstein IDs above, and `lem-hamel-basis-exists`. Their published/draft states must be read from item frontmatter, and their full consequence contracts and explicit choice uses reconciled before adding imports. Prior batch notes contain genuine reads of the existence statements; they do not certify nonmeasurability or additive-function consequences. No new published defect has been established and no published edit is authorized.

This follow-up changes only these notes and the repair report. The three earlier repaired rows stay repaired; the four rows above remain live and blocking. No source, pair or mathematical requirement was removed.

## Source gates — current recovery receipt, 2026-09-09

Subjects: `url-liveness`, `source-fetch-check` and source-backing overlaps. Read current batch-12 coverage/notes, exact original and prior root recovery attempts; read batch-16 source locators and prior complete-reading receipts. New browser open of https://cgi.cse.unsw.edu.au/~cs4141/19s1/lectures/lecture07.pdf returned HTTP 403. Reuse historical successful complete slides 10–11 reading and genuine alternate-host/version/download-query/archive/search attempts recorded in batch-12 notes. This does not prove open-web absence and does not justify removing the independent source. No mathematics or source disposition changed.

Ran the real `source-fetch-check.mjs --stamp --timeout-sec 12` on batch12 and16 coverage. Result: 4/8 already verified, 0 newly stamped, four EAI_AGAIN failures (UNSW; Martin purely_inductive.pdf; Martin Determinacy draft; Lietz Lecture_Notes.pdf). The two Martin URLs and Lietz opened in the browser; the 6-page scanned Martin source is identified by prior full screenshot-reading receipts, not new text extraction. Browser access is not a checker-produced stamp. This environment's DNS failures supersede neither historical HTTP403 evidence nor prior full mathematical reading. Preserve all existing stamps; no fabricated receipt. Haar's owner escalation remains as recorded separately. Current mechanical source gates remain blocked.

Changed files: owning batch12/16 notes and the repair report only for this receipt. Next action requires successful actual fetch-check access for the unstamped sources; source unavailability cannot settle the unresolved mathematical contracts.


### Reconcile-3 final check checkpoint — 2026-09-09

See `research/phase-2-catchup-24-scaffold-repair-3.notes.md`, final verification receipt, for exact current checks, artifact hashes and all remaining obligations. Whole-run manifest-deps passes (667 items); content policy and full plan overlay retain the four missing theorem suppliers; coverage retains Haar and four SET-10 rows; fetch/liveness remain blocked. Scope identities and declared Foundations/Recorded boundaries pass. The A609 declared prerequisite was repaired but its six suppliers are draft, not published. No worker exit constitutes acceptance; preserve this batch's unresolved mathematics and historical dated evidence.


## coverage-16 / AD, DC and conditional regularity — category repaired, measure blocked

Read SET-10, current canonical/manifest contracts, batch-16 notes including genuine prior source attempts; full Hachtman–Palumbo Proposition 7.1, Definition 7.7 and all three subsequent claims, Theorem 7.8 (printed pp21,23–24), https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf. Read actual AD, countable-choice-for-Baire-space and Baire-property contracts; full published category/Baire-space definitions, rational density/countability and nested-interval theorem proof. The unrelated published Baire theorem is not assumed with a silently stronger choice contract.

Completed proposed items, in order: `def-banach-mazur-category-game`, `lem-banach-mazur-game-category-characterization`, `thm-ad-implies-baire-property`. Exact contracts, full arguments and dependency IDs are in the changed batch-16 manifest, SET-10 prose and canonical plan. Games on N^N/2^N use strict finite-prefix extension; R uses rational open intervals with nested closures and length <1/(n+1). First illegal move loses. The response-open construction explicitly produces nowhere dense witnesses; local-to-global uses only AD's countable choice for real codes. No AC or DC is consumed. The existing AD perfect-set and countable-choice items are retained. Full transitive semantic certification is still pending; no sufficient verdict is claimed.

Changed files: batch-16 pages/coverage/notes, plan-set-theory-completion-track.md, plan-spec.json, this report. A inventory 54; B 5; pair identity and all selected pairs retained. Checks pending final pass, including whether every new published prerequisite is already in page closure. No cross-batch item supplier is newly used. DC remains a separate assumption using the existing `def-dependent-choice` definition; no claim AD implies unrestricted DC or DC_R. The AD/DC measure clause remains a binding unresolved obligation, not an out-of-scope/deferred result. Next: process the pathology row and its precise published suppliers, then the separate measure source clause, then UNSW source gates.

## coverage-16 / Choice pathologies — repaired proposals; Bernstein source row reconciled

2026-09-09. Read complete actual Vitali selector and current nonmeasurability proofs; Bernstein definition, wellordered construction, continuum-cardinality perfect-set proof, compact-subset/countability lemma, inner/outer-measure theorem and nonmeasurability corollary; full Hamel coefficient lemma and B-page example; measure/translation/measurable-function definitions and proofs. Read complete Ciesielski Theorems 6.3.6–6.3.8 pp102–103 and Proposition 7.3.1/Theorem 7.3.2/Corollary 7.3.3 pp111–112 at https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf. Read complete Lietz Proposition 10.13 p101 at its active URL. The inaccessible Cichoń BOOK.pdf was only a recovery lead from published references, not a new active source or a dropped source.

Reuse the existing published Vitali IDs: `thm-vitali-sets-exist-under-choice-on-r-over-q` -> `thm-a-vitali-set-is-not-lebesgue-measurable`. Explicit AC supplies the quotient selector and countable choice for measure. The old composite row is split by actual obligation, preserving the selected false statement and all three pathologies. New `thm-choice-bernstein-set-pathology` adds the missing no-Baire/no-perfect-set consequences by a full least-coded binary interval construction. Exact published real-line existence is reused; no duplicate sequence-space transfer. The separate existence-only Lietz row is `already-published`, mapped to `thm-bernstein-sets-exist-under-a-well-ordering-of-r`. Only the given wellorder is needed there; no stronger measure consequence is inferred from it.

New `thm-choice-hamel-basis-pathology` consumes the published A-page `lem-hamel-basis-exists`, not `ex-hamel-basis-additive-function`. It proves dense graph/discontinuity using rational cosets of the kernel; nonmeasurability is proved by disjoint bounded rational translates and countable additivity, avoiding a missing Steinhaus supplier. AC supplies the basis and measure's countable choice. There is no assertion that all Hamel bases themselves are nonmeasurable. Exact deps and complete proofs are in manifest and prose; no recorded-not-proved result consumed.

Changed batch-16 pages/coverage/notes, SET-10 prose, canonical plan and this report. Added the existing earlier published non-measurable-sets page requirement. A56/B5, no new pair or Phase-2 count change, no selected pair removed. No new same-frontier supplier. Checks pending final pass. These are scaffold repairs only; complete transitive semantic audit and independent Step-3 sufficiency remain pending. No new confirmed published defect found in this targeted interface audit, hence no published repair classification changed. Next: finish review of the independent AD measure row and record its actual unresolved supplier obligations, then source gates.

## coverage-16 / AD measurability source clause — local proof supplied, review pending

2026-09-09. Reused prior genuine Martin paper reading and reopened its complete mathematical text, pp393–396, plus ending/references p397: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. The EMIS mirror returned 403; the original Polito full text recovered, so no source drop or further absence retries justified. The newer Martin November-2020 draft, Theorems 2.4.28–2.4.29 pp121–122, was a comparison lead only; its omitted comparisons are not used as proofs. Read full actual continuity-from-below/above, measure, Borel and measurable-map contracts, DC definition, and previously read Lebesgue completeness/translation/box suppliers. Distinguish current translation theorem's ZF statement from historical weaker countable-choice descriptions.

Completed, one after another in manifest order: `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`, `def-rational-determinacy-measure-game`, `lem-determinacy-measure-game-inner-outer-comparison`, `thm-ad-and-dc-imply-lebesgue-measurability`. Exact definitions, assumptions, dependencies and full proofs are in batch-16 manifest, SET-10 prose and canonical plan. DC -> countable choice is proved by finite-selection chains; it is not borrowed from a recorded remark. Coin probability is the image of actual Lebesgue measure under the injective half-open dyadic code; all cylinder inverse images are computed. Equality of closed/open envelopes transfers via a Borel sandwich and completeness, avoiding an unproved completed-product-measure interface. The II comparison uses nonnegative rational approximations, with zero infimum coordinates assigned zero, and least codes for near-infimum responses. This resolves the printed negative-coordinate risk and all new move selections without arbitrary AC. Dyadic endpoint nonuniqueness is not ignored: only pi(b(x))=x and injectivity of b are used.

All four original coverage diagnostics now have proposed dispositions, preserving all selected contracts. Coverage inclusion is not semantic certification. The A inventory reaches 60 exactly, B remains 5. No new pair or Phase-2 count change. Full transitive semantic and independent Step-3 review remain pending. Changed batch-16 manifest/coverage/notes, SET-10 prose, canonical plan and report. The existing sequence-space AD perfect-set theorem explicitly left transfer to the real line as a separate obligation; the new dyadic interface supplies the construction for that remaining transfer, which must be reconciled before claiming complete SET-10 scope. Next action: reconcile that clause, check exact page closure and source gates, and process UNSW liveness/fetch findings.

### Real-line perfect-set clause reconciled — 2026-09-09

Extended the existing `thm-ad-implies-perfect-set-property-for-sequence-spaces`, preserving its ID and original claims, and placed it after the dyadic interface. The interface now distinguishes ZF binary coding/compact-copy transfer from the DC measure clauses. A countable unit-interval cover and AD choice for codes of countable binary enumerations prove the real-line alternative in ZF+AD. Exact added proof/deps are synchronized in manifest/prose/canonical plan. No new item, no weakening to AD+AC or AD+DC for this clause. A60/B5 unchanged. Full scope is now proposed; checks and independent review still pending.

## Reconcile-4 source findings — 2026-09-09

Gate `url-liveness`, subject UNSW Lecture 7: BLOCKED. Read the exact batch-12 stay-put interface, right-then-left macro proof and simulation theorem, and the actual published deterministic one-tape machine/configuration contracts. Preserve the existing right-infinite tape, left-clamp, tagged nonhalting intermediate states and acceptance/rejection/divergence conventions. Dependencies remain `def-deterministic-one-tape-turing-machine`, `def-one-step-configuration-relation` and the explicit dependency arrays of `def-stay-put-one-tape-machine-and-run-interface`, `lem-stay-put-right-left-macro-simulation`, `thm-stay-put-elimination-with-explicit-simulation-interface`; no outside-run supplier requested. Reused genuine prior initial/five-retry, alternate-version/host/query/archive attempts and complete slides 10–11 reading recorded in batch-12 notes. This dispatch's browser open of https://cgi.cse.unsw.edu.au/~cs4141/19s1/lectures/lecture07.pdf returned 403. Search indexing is not a complete fetched source. Existing Checkoway/Savage backing and local proof remain; neither temporary 403 nor local DNS failure proves open-web absence. No source was dropped and no owner-escalation or waiver was invented.

Gate `source-fetch-check`, same UNSW subject: BLOCKED. The actual command `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-16.coverage.json --stamp --timeout-sec 12` returned 7/11 fetch-verified, zero new stamps, four EAI_AGAIN failures: UNSW, Hachtman–Palumbo, Ciesielski and Martin's 2003 paper. Genuine checker-generated recovery_attempts are retained in the two coverage files. The latter three were read through the browser, as located above, but browser readings do not replace fetch stamps. All other live mathematical findings were processed despite these source failures. Next required action is an actual successful source verification or a justified recovery/disposition under the brief; this worker cannot certify either from the current transport failures.

Fresh affected URL sweep (`node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-16.coverage.json --out /tmp/reconcile4-url-liveness.json --timeout-sec 5 --fail-on-dead`) returned 0/11 live, all curl code 6 host-resolution failures. Note: this tool accepts `--timeout-ms`, not `--timeout-sec`; the supplied unrecognized timeout option did not change its default, and all requests failed immediately. No recovery receipt is inferred from that option. `source-backing.mjs --coverage` with those same two files, this fresh liveness file and `--require-verified` reports 68 authored results without mechanically verified open backing. This is a transport-based blocker, not a finding that their mathematics or browser-read sources vanished. Frozen run liveness evidence was not overwritten.

Changed files for these source findings: batch-12/16 coverage recovery records and notes, plus this report. Mathematics and supplier IDs in batch12 remain unchanged. Historical round-3 failures/counts remain explicitly historical.

## Reconcile-4 final validation checkpoint — 2026-09-09T11:20:39.815883+00:00

- `coverage`: PASS: affected12/16: 126 harvested rows, 0 errors/warnings; whole16 with --require-destination: 24 pages,1193 rows,0 errors,2 low-yield warnings in batches2/13.
- `manifest_deps`: PASS: whole16 manifests,690 items,0 normalized/errors.
- `content_policy`: PASS: whole16 manifests --manifest-only,690 items,0 errors/warnings.
- `validate_plan`: PASS: canonical and full16-manifest overlay /tmp/reconcile4-plan-overlay.json with --max-items60. Existing redundant-prerequisite warnings; page-only inventories remain uncertified at item level.
- `extcheck`: PASS: canonical and full16 overlay repository;0 errors,61 existing published-consequence warnings. Declared Foundations boundary passes; no semantic certification.
- `source_fetch`: BLOCKED: affected12/16 --stamp --timeout-sec12:7/11 verified,0 new stamps,4 EAI_AGAIN failures (UNSW,Hachtman,Ciesielski,Martin2003).
- `url_liveness`: BLOCKED: fresh affected sweep0/11,all DNS failures; browser UNSW403 separately observed.
- `source_backing`: BLOCKED: fresh affected liveness --require-verified:68 results without mechanically open backing.
- `cross_batch_scan`: PASS: frontier-dependency-ledger refresh --run phase-2-catchup-24 --require-reviewed. Batch16 input remains empty; new suppliers local or earlier published, not another batch.
- `scope`: PASS:48pages/24pairs retain exact batch and kind against frozen scope ledger; canonical/manifest order,category,companion agree. No added pair or Phase2 count change.

Canonical validation initially exposed the missing earlier `measurable-functions-and-simple-approximation` page edge for the Hamel conclusion; that edge was repaired in manifest, prose and canonical plan before the passing checks above. Final SET-10 inventory is A60/B5, nine added local items; no new pair, no empty supplier, no Phase-2 scope expansion. Supplier ledger retains every classification count and distinguishes published inputs from scaffolded conclusions. Full mathematical contracts and prerequisite lists are in the manifest and SET-10 prose. Existing pair and batch identities are unchanged. Cross-batch merged ledger was refreshed by its prescribed tool, not hand-edited.

All live packet findings have outcomes recorded. The four coverage diagnostics have complete proposed local contracts and proof arguments; source gates remain blocked. These structural checks do not complete the transitive semantic audit or independent Step 3. No engine transition, published edit, build, agent, waiver or gate acceptance is claimed. Next action belongs to source recovery and the engine's independent full gate/review battery.

Final formatting check: `git diff --check` on authorized changed paths passes after removing eleven whitespace-only lines introduced in the SET-10 prose. Final affected coverage recheck passes 126 rows with zero errors/warnings. Batch16 and canonical inventories agree exactly after normalizing the pre-existing B-page absent `forwardRefs` field to an empty array; the raw-object comparison initially flagged that representation difference only. No mathematics changed during this cleanup.

## Step-3 fix pass

**Stable-finding disposition — none.** The current Group-G review records batch
16 as sufficient, and the corresponding verdict entry for
`borel-analytic-sets-perfect-sets-and-determinacy` has `missing: []`.
Consequently there is no numbered or unnumbered batch-16 finding to repair,
rebut, renumber, or convert into a new prerequisite pair. The reviewed current
inventory remains 60 A items and 5 B items; the owned same-frontier dependency
input remains the empty array because no proposed proof uses an item supplied by
another batch.

**Evidence checked in this pass.** The Group-G review's batch-16 section
describes the exact proof order and separate ZF/AC/AD/DC contracts. The current
coverage record has eight active sources, each with a `fetch_verified` receipt;
`source-fetch-check --stamp` revalidated all 8/8 without adding a receipt. No
source was dropped and no source-resolution or published-consumer finding is
introduced here.

**Changed record.** Only this notes entry was added. The manifest, coverage,
plan, published pages, and dependency input did not need a change because the
stable verdict identifies no defect.

**Checks run in this pass.** `coverage-checklist` on this batch: 112 harvested,
0 errors, 0 warnings. Whole-run `manifest-deps`: 691 items, 0 normalized,
0 errors. Manifest-only `content-policy`: 65 scoped items, 0 errors,
0 warnings. `validate-plan research/plan-spec.json --max-items 60`: pass
(with its pre-existing page-level and redundant-prerequisite notices).
`extcheck --quiet`: pass with 57 existing published-item warnings, none an
owned proposed supplier. `source-fetch-check --coverage ...batch-16... --stamp
--timeout-sec 90`: 8/8 fetch-verified and 8/8 resolved, 0 newly stamped.

**Remaining blocker.** None from the stable Step-3 findings. This is not a
publication decision and does not waive the later materialization, authoring,
or independent-judgment gates.


## Final group-g adjudication — 2026-09-09

The A60/B5 pair is accepted. Borel determinacy is explicitly ZFC; the previous review description of it as ZF was incorrect. The AD branches use their separate countable games and stated ZF/AD/DC hypotheses. No manifest change was needed.

Current evidence, exact dependency uses, scope dispositions and executed checks: [group final recheck](phase-2-catchup-24-alpha-g-recheck.md). All current owned cross-batch input arrays remain empty after declared-edge and proof-use reconciliation. Terminal records bind the current scaffold bytes. This receipt supersedes conflicting prior proposed repair instructions; published files were not edited.


## Current final adjudication — scaffold-final-g-7d70f31f45c71ce5

The current decision and executed-check evidence are in `research/phase-2-catchup-24-alpha-g-recheck.md`. Earlier missing-inventory and missing-construction findings are superseded for the current bytes. The pair is accepted; no mathematical edit in this dispatch.

## Step-5 authoring

In progress. Entry inventory: all 65 item files absent; no proof-contract file. Read SCHEMA.md, current manifest opening, assigned SET-10 and Group-G verdict/review; latest notes correct the review's Borel-determinacy axiom description to ZFC. Source browser retrieval succeeds for Marker and BLM; local Marker urllib retrieval failed once with DNS resolution. This is not a source drop. Bounded source readings: Marker Definition 1.7, Lemma 1.14 through Definition 1.15 and proof, pp4–5; Definitions 4.1/4.4 and Lemma 4.2 p34; Definition 5.1/Exercise 5.2 and tree-section paragraph p43; BLM opening definitions through taboo topology. Exact independent arguments are authored below; strategy text is not mechanically promoted into proofs.

### Authored checkpoint: `def-cantor-sequence-space-for-descriptive-set-theory`

Current completed claim/conventions (copied from the authored section):

Work in ZF. Write $\mathcal N=\mathbb N^{\mathbb N}$ for [[def-baire-sequence-space]]. **Cantor sequence space** is the subspace

$$\mathcal C=\{x\in\mathcal N:(\forall n\in\mathbb N)\ x(n)\in\{0,1\}\}.$$

For $s\in\{0,1\}^n$, let $N_s^{\mathcal C}=\{x\in\mathcal C:x\upharpoonright n=s\}$. Its topology consists of unions of these cylinders. Indeed $N_s^{\mathcal C}=N_s^{\mathcal N}\cap\mathcal C$, while a Baire cylinder with a nonbinary coordinate has empty intersection with $\mathcal C$. Thus this is exactly the inherited cylinder topology. The cylinder of the empty word is $\mathcal C$. The constant-zero function is a point, so no product-nonemptiness axiom is used. The constants zero and one are distinct points.

Dependency inputs: `def-baire-sequence-space`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 1.7

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-trees-and-bodies-on-discrete-alphabets`

Current completed claim/conventions (copied from the authored section):

Work in ZF. For a set $E$, use the function sets of [[def-the-set-of-functions-from-one-set-to-another]] to put $E^{<\omega}=\bigcup_{n\in\mathbb N}E^n$. Replacement followed by Union forms this set. Write $\varnothing$ for the empty word, $|s|$ for the domain length of $s$, and $s^\frown e$ for appending $e\in E$.

A **tree on $E$** is a subset $T\subseteq E^{<\omega}$ such that $s\upharpoonright m\in T$ whenever $s\in T$ and $m\leq |s|$. The empty tree is permitted. Every nonempty tree contains $\varnothing$. Its **body** is

$$[T]=\{x\in E^{\mathbb N}:(\forall n\in\mathbb N)\ x\upharpoonright n\in T\}.$$

A tree is **pruned** when every node has a proper extension in $T$. Equivalently, every $s\in T$ has a child $s^\frown e\in T$: restrict a proper extension to length $|s|+1$ for the forward implication; a child itself is a proper extension for the reverse implication. This is not a claim that branches exist through nodes of arbitrary-alphabet pruned trees in ZF.

The empty tree is vacuously pruned and has empty body, because every branch would require its empty prefix to belong to the tree. The root-only tree $\{\varnothing\}$ has empty body and is not pruned. If $E=\varnothing$, these are the only two trees, since $E^0=\{\varnothing\}$ and $E^n=\varnothing$ for $n>0$.

Dependency inputs: `def-the-set-of-functions-from-one-set-to-another`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 1.14 and Definition 1.15; general-alphabet extension also in Buffard–Levrel–Mayo opening definitions

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-closed-subsets-of-baire-space-are-tree-bodies`

Current completed claim/conventions (copied from the authored section):

In ZF, $F\subseteq\mathcal N=\mathbb N^{\mathbb N}$ is closed if and only if $F=[T]$ for a tree $T$ on $\mathbb N$. When $F$ is closed, its prefix tree

$$T_F=\{s\in\mathbb N^{<\omega}:(\exists y\in F)\ s\subseteq y\}$$

has body $F$. If $F$ is nonempty, $T_F$ is nonempty and pruned; if $F$ is empty, $T_F$ is empty.

Dependency inputs: `def-baire-sequence-space`, `def-trees-and-bodies-on-discrete-alphabets`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 1.14(ii), Definition 1.15

Completed argument decisions: 1.1: Every tree body has open complement. 1.2: The prefix set is a tree and contains every prefix of each F point. 2.1: Every branch of the prefix tree belongs to closed F. 3.1: The empty case and pruning follow from individual witnesses.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-analytic-and-coanalytic-by-closed-projection`

Current completed claim/conventions (copied from the authored section):

Let $X$ be a Polish space ([[def-polish-space]]), and let $\mathcal N$ denote [[def-baire-sequence-space]]. Use the binary product topology ([[def-product-topology]]) on $X\times\mathcal N$.

A set $A\subseteq X$ is **analytic** if there is a closed $F\subseteq X\times\mathcal N$ such that

$$A=\{x\in X:(\exists y\in\mathcal N)\ (x,y)\in F\}.$$

A set $B\subseteq X$ is **coanalytic** if $X\setminus B$ is analytic. Complements are always relative to this specified $X$. The empty closed witness makes $\varnothing$ analytic. The witness $X\times\mathcal N$ makes $X$ analytic: the constant-zero sequence witnesses the projection at each $x$. Hence both $\varnothing$ and $X$ are also coanalytic, including when $X=\varnothing$.

These definitions use only ZF. No nonemptiness principle for arbitrary products is being invoked. Continuous-image and Borel-image characterizations require separate proofs; they are not part of this definition. This convention uses the closed-projection characterization in Marker Lemma 4.2(iii), rather than importing the other characterizations from its statement.

Dependency inputs: `def-polish-space`, `def-baire-sequence-space`, `def-product-topology`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 4.1, Lemma 4.2(iii), Definition 4.4

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-synchronous-trees-and-projection-bodies`

Current completed claim/conventions (copied from the authored section):

Work in ZF, using [[def-trees-and-bodies-on-discrete-alphabets]] and [[def-baire-sequence-space]]. A **synchronous tree** is

$$T\subseteq\bigcup_{n\in\mathbb N}(\mathbb N^n\times\mathbb N^n)$$

such that $(s\upharpoonright m,t\upharpoonright m)\in T$ whenever $(s,t)\in T$ and $m\leq |s|=|t|$. Its body and projection body are

$$[T]=\{(x,y)\in\mathcal N\times\mathcal N:(\forall n)\ (x\upharpoonright n,y\upharpoonright n)\in T\},\qquad p[T]=\{x\in\mathcal N:(\exists y\in\mathcal N)\ (x,y)\in[T]\}.$$

Both coordinates are restricted to the same length, including length zero. For $x\in\mathcal N$ its **section tree** is $T_x=\{t:(x\upharpoonright |t|,t)\in T\}$. Restricting a pair proves that $T_x$ is a tree on $\mathbb N$. Direct substitution gives $y\in[T_x]$ exactly when $(x,y)\in[T]$. Thus $x\in p[T]$ exactly when $[T_x]\ne\varnothing$. This is an existential equivalence, not a selection of branches. An empty tree has empty body and projection; a root-only synchronous tree has the same empty body and projection.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`, `def-baire-sequence-space`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 5.1

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-analytic-subsets-of-baire-space-have-tree-projections`

Current completed claim/conventions (copied from the authored section):

In ZF, $A\subseteq\mathcal N$ is analytic in the closed-projection convention if and only if $A=p[T]$ for a synchronous tree $T$. For this representation and each $x\in\mathcal N$,

$$x\in A\quad\Longleftrightarrow\quad[T_x]\ne\varnothing,\qquad T_x=\{t:(x\upharpoonright |t|,t)\in T\}.$$

Dependency inputs: `def-synchronous-trees-and-projection-bodies`, `def-analytic-and-coanalytic-by-closed-projection`, `lem-closed-subsets-of-baire-space-are-tree-bodies`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 5.2 and the paragraph preceding Theorem 5.3

Completed argument decisions: 1.1: Equal-length product cylinders form a basis and exclude each nonbranch locally. 2.1: The paired-prefix tree of closed F has body F. 3.1: Closed witnesses and tree witnesses give both implications. 4.1: A point is in the projection exactly when its section has a branch.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-gale-stewart-games-on-pruned-trees`

Current completed claim/conventions (copied from the authored section):

Let $E$ be a nonempty set, $T\subseteq E^{<\omega}$ a nonempty pruned tree ([[def-trees-and-bodies-on-discrete-alphabets]]), and $A\subseteq[T]$. In $G(A;T)$, player I moves at even-length positions and player II at odd-length positions. A legal move at $s$ is $e\in E$ such that $s^\frown e\in T$. A full play is a branch $x\in[T]$. Player I wins it when $x\in A$; otherwise player II wins.

A **strategy for player $P$** assigns a legal move to every position at which $P$ moves, including positions inconsistent with its earlier prescriptions. A branch $x$ is consistent with $\sigma$ when $x(n)=\sigma(x\upharpoonright n)$ at each coordinate of that player's parity. The strategy is **winning** if every consistent branch is won by that player. The game is **determined** if at least one player has a winning strategy. These are definitions in ZF; a legal move exists individually at each position, but no simultaneous strategy-existence assertion for arbitrary $E$ is implicit.

For $s\in T$ put $[T]_s=\{x\in[T]:s\subseteq x\}$. These cylinders, including $[T]_\varnothing=[T]$, form a basis: two cylinders intersect in the longer one when the words are comparable, and are disjoint otherwise. Unions of cylinders therefore satisfy the topology axioms in [[def-topological-space]]. Moreover

$$[T]\setminus[T]_s=\bigcup\{[T]_t:t\in T,\ |t|=|s|,\ t\ne s\},$$

so cylinders are clopen. Empty cylinders are permitted. Neither this topology nor the winning-strategy definition asserts nonemptiness of $[T]$ in ZF for arbitrary $E$.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`, `def-topological-space`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Opening definitions, before Lemma 1; compare Marker Definitions 6.1–6.3

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-axiom-of-determinacy-for-natural-number-games`

Current completed claim/conventions (copied from the authored section):

Using [[def-baire-sequence-space]] and the full-position strategy convention of [[def-gale-stewart-games-on-pruned-trees]], the **Axiom of Determinacy (AD)** is the assertion

$$ (\forall A\subseteq\mathbb N^{\mathbb N})\ G(A;\mathbb N^{<\omega})\text{ is determined}. $$

Every position allows every natural-number move. Player I moves first. The axiom concerns all payoff sets on this one countable alphabet, including the empty payoff and the whole space; it is not an assertion of determinacy for games on arbitrary sets of moves. For the empty payoff the constant-zero II strategy wins; for the whole-space payoff the constant-zero I strategy wins, directly from the winning condition. The definition itself does not assume AD. Any theorem using it states the assumption. In particular this definition neither asserts unrestricted dependent choice nor asserts compatibility with AC.

Dependency inputs: `def-gale-stewart-games-on-pruned-trees`, `def-baire-sequence-space`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Definition of determined games, specialized to all natural-number payoffs

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-game-trees-with-terminal-taboos`

Current completed claim/conventions (copied from the authored section):

Let $T$ be a nonempty tree as in [[def-trees-and-bodies-on-discrete-alphabets]], now allowing terminal nodes. Partition its terminal nodes into $\mathcal T_I$ and $\mathcal T_{II}$. A node in $\mathcal T_P$ is **taboo for $P$**: reaching it loses for $P$, irrespective of whose turn would have come next. The partition is part of the data, not determined by parity.

The maximal plays are $\lceil T\rceil=[T]\cup\mathcal T_I\cup\mathcal T_{II}$. For a payoff $A\subseteq[T]$, player I wins exactly the members of $A\cup\mathcal T_{II}$ and player II wins all other maximal plays. At nonterminal nodes, parity, legal moves, consistency and strategies are as in [[def-gale-stewart-games-on-pruned-trees]]. A strategy is defined at every nonterminal node of its player's parity and nowhere needs a move at a terminal node. Thus a terminal root already decides the game.

Give $\lceil T\rceil$ the cylinder topology, with cylinder $\{x\in\lceil T\rceil:s\subseteq x\}$ at $s$. Comparable words give the longer cylinder as intersection; incomparable words give empty intersection, and the root cylinder covers the space. A terminal cylinder is its singleton. The complement of $[T]$ is the union of these terminal singleton cylinders, so $[T]$ is a closed subspace. **Payoff complexity** means complexity of $A$ in this infinite-play subspace. It is not silently measured in $\lceil T\rceil$.

For a position $p\in T$, the fixed-history tree is $T_p=\{s\in T:s\subseteq p\text{ or }p\subseteq s\}$. Its taboos are the original taboos in this tree. Earlier moves are forced and all lengths retain their original parity. No player-name interchange is built into this subgame convention. These definitions use ZF only; when all branches are terminal the infinite-play subspace is empty.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`, `def-gale-stewart-games-on-pruned-trees`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Definitions preceding Lemma 1

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-countable-borel-hierarchy`

Current completed claim/conventions (copied from the authored section):

Work in ZF. Let $(X,\tau)$ be a topological space ([[def-topological-space]]) and let $\omega_1$ have the meaning in [[def-first-uncountable-ordinal]]. Define, for $1\leq\alpha<\omega_1$,

$$\Sigma^0_1(X)=\tau,\qquad\Pi^0_\alpha(X)=\{X\setminus A:A\in\Sigma^0_\alpha(X)\},\qquad\Delta^0_\alpha(X)=\Sigma^0_\alpha(X)\cap\Pi^0_\alpha(X).$$

For $1<\alpha<\omega_1$, set

$$\Sigma^0_\alpha(X)=\left\{\bigcup_{n\in\mathbb N}A_n:(A_n)_{n\in\mathbb N}\in\left(\bigcup_{1\leq\beta<\alpha}\Pi^0_\beta(X)\right)^{\mathbb N}\right\}.$$

Thus the summands may have different lower positive ranks, at successors as well as at limits. There is no rank-zero class. A countable union here is an actual sequence, with repetitions allowed.

For existence apply [[thm-transfinite-recursion]] to the well-order of positive ordinals below $\omega_1$, forming the pair $(\Sigma^0_\alpha,\Pi^0_\alpha)$ at each stage. The formulas use only power sets, the set of sequences, Union and complements in the fixed $X$, so each value is a set. On histories not consisting of the required pairs of subfamilies of $\mathcal P(X)$, assign the fixed pair $(\varnothing,\varnothing)$; this makes the recursion rule total. Actual histories have the required type by its construction. This defines all classes uniquely without choice.

The **Borel sigma-algebra** $\mathcal B(X)$ is the intersection of all families of subsets of $X$ containing $\tau$ and closed under complements and unions of sequences. This indexing family is nonempty, since it contains $\mathcal P(X)$. Intersections preserve each of the stated closure requirements, so it is the least such family. This definition asserts neither hierarchy exhaustion in ZF nor fixed-rank monotonicity in arbitrary spaces. Empty sets and $X$ occur in every class: they are open and closed at rank one, and constant sequences of them supply all subsequent ranks.

Dependency inputs: `def-topological-space`, `def-first-uncountable-ordinal`, `thm-transfinite-recursion`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 2.4, printed p14; Martin 1985 p451 (same positive-rank convention)

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-well-founded-borel-evaluation-codes`

Current completed claim/conventions (copied from the authored section):

Fix a topological space $X$ and an enumerated basis $(U_n)_{n\in\mathbb N}$. Use the tree convention of [[def-trees-and-bodies-on-discrete-alphabets]] and the Borel sigma-algebra of [[def-countable-borel-hierarchy]]. A **Borel evaluation code** is a nonempty tree $T\subseteq\mathbb N^{<\omega}$ with a label at each node, subject to the following rules:

- A node labelled $\operatorname{leaf}(n)$ has no children, with $n\in\mathbb N$.
- A node labelled $\operatorname{complement}$ has exactly the child $s^\frown0$.
- A node labelled $\operatorname{union}$ has any set of children $s^\frown k$ indexed by a subset of $\mathbb N$, including no children.

Require the immediate-child relation $tRs$ (meaning $t=s^\frown k\in T$ for some $k$) to be well-founded in the sense of [[def-well-founded-setlike-relations]]: every nonempty subset of $T$ has a member with no child in that subset. This is part of validity. Absence of a branch is not being substituted for it. The relation is setlike since its domain is a set.

The intended operations are a basis open at a leaf, complement relative to $X$, and union of child values. An empty union is intended to evaluate to $\varnothing$, not to $X$. Existence and uniqueness of evaluation are a separate result. The empty underlying tree is invalid, whereas a one-node union code is valid: its child relation is empty and well-founded. A complement of that one-node union is also valid. All labelled trees under consideration form a set (labels are drawn from a fixed countable set), so no proper-class collection of codes is needed. No choice assumption occurs in this definition.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`, `def-countable-borel-hierarchy`, `def-well-founded-setlike-relations`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definitions 7.1–7.2, printed pp62–63; nodewise labels and empty union made explicit

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `ex-empty-and-single-branch-tree-bodies`

Current completed claim/conventions (copied from the authored section):

In ZF, the empty tree has empty body. For each $x\in\mathbb N^{\mathbb N}$ the prefix tree $T_x=\{x\upharpoonright n:n\in\mathbb N\}$ has body $\{x\}$. In particular, for $z(n)=0$, the tree $\{\varnothing,(0),(0,0),\ldots\}$ has body exactly the constant-zero sequence. These bodies are closed in the cylinder topology.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Application of Lemma 1.14(ii)

Completed argument decisions: 1.1: The empty tree has no branch because it lacks the empty prefix. 1.2: The prefix tree is a tree with exactly x as its branch. 2.1: The zero-tree calculation and complement cylinders verify the example.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `ex-first-move-clopen-game`

Current completed claim/conventions (copied from the authored section):

On $T=\mathbb N^{<\omega}$ let $A=\{x:x(0)=0\}$. Player I wins by the strategy $\sigma(s)=0$ at every even-length position $s$. The payoff is clopen.

Dependency inputs: `def-gale-stewart-games-on-pruned-trees`, `def-baire-sequence-space`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Opening definitions of games and strategies

Completed argument decisions: 1.1: The constant-zero strategy is legal and the payoff and complement are open. 2.1: Every consistent branch has first coordinate zero and hence wins.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `cex-taboo-winning-positions-need-not-contain-their-children`

Current completed claim/conventions (copied from the authored section):

In a game with terminal taboos, a position from which a player can force a terminal taboo for the opponent need not have only such winning children. In particular, deleting all positions from which either player can force an opponent taboo need not leave a prefix-closed tree. Here infinite play does not count as successful terminal reachability for either player.

Dependency inputs: `def-game-trees-with-terminal-taboos`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 1 proof, downward-closure assertion (claim refuted by the displayed local tree)

Completed argument decisions: 1.1: The displayed set is a tree with exactly one terminal node. 2.1: I forces a taboo from the root, but neither player forces one from child (1). 3.1: Deletion retains a child while removing its root, violating prefix closure.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-well-founded-borel-code-evaluation`

Current completed claim/conventions (copied from the authored section):

In ZF, each valid code $T$ for a space $X$ with enumerated basis $(U_n)$ has a unique evaluation $E:T\to\mathcal P(X)$ satisfying

$$E(s)=U_n\text{ at leaf}(n),\qquad E(s)=X\setminus E(s^\frown0)\text{ at a complement},\qquad E(s)=\bigcup_{s^\frown k\in T}E(s^\frown k)\text{ at a union}.$$

Every value, in particular the root value, is Borel. Assuming AC in addition, every Borel subset of $X$ is the root value of some code. The first assertions do not use AC.

Dependency inputs: `def-well-founded-borel-evaluation-codes`, `thm-recursion-on-well-founded-setlike-relations`, `thm-induction-on-well-founded-relations`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definitions 7.1–7.2 and Exercise 7.3, printed pp62–63; full local recursion proof supplies the exercise

Completed argument decisions: 1.1: Totalized relation recursion produces the required subset-valued evaluation. 2.1: Progressiveness proves uniqueness and Borelness at every node. 2.2: An explicit shallow union code represents every open set. 2.3: Grafting constructs complement and union codes, selecting constituents under AC. 3.1: The grafted relations are well-founded and the codable values equal the Borel sigma-algebra.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `ex-well-founded-borel-code-for-a-closed-basic-complement`

Current completed claim/conventions (copied from the authored section):

Fix a space $X$ with enumerated basis $(U_n)$ and $n\in\mathbb N$. The leaf$(n)$ code evaluates to $U_n$; a complement above that leaf evaluates to $X\setminus U_n$; an empty union evaluates to $\varnothing$; and a complement above an empty union evaluates to $X$. These calculations hold in ZF.

Dependency inputs: `def-well-founded-borel-evaluation-codes`, `lem-well-founded-borel-code-evaluation`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definitions 7.1–7.2, pp62–63; examples derived directly from the local labelled-code convention

Completed argument decisions: 1.1: The first two valid codes evaluate to U_n and its closed complement. 1.2: The other two codes evaluate to empty and X. 2.1: Finite child relations satisfy well-foundedness and the empty underlying tree is invalid.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-metric-borel-hierarchy-monotonicity-and-operations`

Current completed claim/conventions (copied from the authored section):

Assume ZFC and let $X$ be metrizable. For $1\leq\alpha<\beta<\omega_1$,

$$\Sigma^0_\alpha(X)\cup\Pi^0_\alpha(X)\subseteq\Delta^0_\beta(X).$$

At each positive rank, $\Sigma^0_\alpha$ is closed under countable unions and finite intersections; $\Pi^0_\alpha$ under countable intersections and finite unions; and $\Delta^0_\alpha$ under complements, finite unions and finite intersections. The finite operations include the empty family. No countable basis is assumed.

Dependency inputs: `def-countable-borel-hierarchy`, `def-metric-space`, `thm-transfinite-induction`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 2.5(i) and Lemma 2.6(i–iii), printed pp15–16 (PDF pages 15–16); source numbering in previous notes was one page low

Completed argument decisions: 1.1: Every metric open is a countable union of the displayed closed sets. 2.1: All four lower-to-higher pointclass inclusions hold. 1.2: Countable unions flatten at rank alpha after selecting representations. 3.1: Finite intersections distribute into lower-Pi intersections. 4.1: Complementation proves the dual operations and Delta closure.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-cantor-and-baire-sequence-coding`

Current completed claim/conventions (copied from the authored section):

In ZF, $\mathcal C=2^{\mathbb N}$ and $\mathcal N=\mathbb N^{\mathbb N}$ are Polish under the metric $d(x,x)=0$ and $d(x,y)=2^{-m-1}$ when $m$ is the first coordinate at which $x$ and $y$ differ. Cantor space is compact and has no isolated points. Coordinate pairing gives homeomorphisms $\mathcal N\cong\mathcal N^{\mathbb N}$ and $\mathcal C\cong\mathcal C^{\mathbb N}$. The map

$$h(x)=0^{x(0)}1\,0^{x(1)}1\,0^{x(2)}1\cdots$$

is a homeomorphism of $\mathcal N$ onto $D=\{z\in\mathcal C:z\text{ has infinitely many }1\text{s}\}$, and $\mathcal C\setminus D$ is at most countable.

Dependency inputs: `def-cantor-sequence-space-for-descriptive-set-theory`, `def-polish-space`, `def-metric-space`, `def-compact-space`, `def-continuous-map-top`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 1.7 and Exercise 1.11, printed pp4–5; compare Lietz Theorem 10.10 proof, p100. Compactness uses a local binary-cylinder proof instead of arbitrary Tychonoff

Completed argument decisions: 1.1: The common-prefix metric induces the topology and is complete. 2.1: Eventually-zero points give separability, and a later bit flip prevents isolation. 1.2: A hypothetical uncovered cylinder branch contradicts that the family covers. 1.3: Coordinate pairing is a homeomorphism with the displayed inverse. 1.4: Block coding and least-separator decoding are continuous inverses. 3.1: Finite supports encode injectively into natural numbers.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-terminal-reachability-and-residual-game-positions`

Current completed claim/conventions (copied from the authored section):

Assume ZFC. In a tree with terminal taboos, let $W_P$ be the set of positions from which $P$ has a strategy forcing a terminal taboo for the other player; infinite play is not a success. Then $W_I\cap W_{II}=\varnothing$. For nonterminal $p$, membership in $W_P$ is equivalent to some child belonging to $W_P$ when $P$ moves at $p$, and to every child belonging to $W_P$ when the opponent moves. Winning reachability strategies can be fixed simultaneously for all positions in $W_P$.

Dependency inputs: `def-game-trees-with-terminal-taboos`, `def-axiom-of-choice`, `thm-transfinite-recursion`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 1, corrected local reachability argument; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — paragraph preceding Lemma 2.1.2, printed p64 (independent residual-game comparison)

Completed argument decisions: 1.1: Set-sized strategy families admit fixed selectors under AC; terminal winners are determined by labels. 2.1: At own turns winning reachability is equivalent to one winning child. 2.2: At opponent turns winning reachability is equivalent to all children winning. 3.1: Opposite winning strategies would produce one maximal play with incompatible terminal labels.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-taboo-games-reduce-to-pruned-residual-games`

Current completed claim/conventions (copied from the authored section):

In ZFC, either the root of a taboo tree $T$ belongs to $W_I\cup W_{II}$, or

$$S=\{p\in T:(\forall q\subseteq p)\ q\notin W_I\cup W_{II}\}$$

is a nonempty pruned subtree. In the latter case every winning strategy for $G(A\cap[S];S)$ extends to a winning strategy for $G(A;T)$, for any $A\subseteq[T]$. Restriction to $[S]$ preserves every positive Borel level. Consequently determinacy at each such level for pruned set trees is equivalent to determinacy at that level for set trees with taboos.

Dependency inputs: `lem-terminal-reachability-and-residual-game-positions`, `def-game-trees-with-terminal-taboos`, `def-axiom-of-choice`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 1 (conclusion retained, erroneous downward-closure step replaced); https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — printed p64, residual-quasistrategy reduction

Completed argument decisions: 1.1: Either the root already wins or S contains the root and no original terminal. 2.1: Every residual node has a residual child. 3.1: An opponent first exit enters the extending player’s reachability set. 4.1: The extended strategy wins both exit and no-exit plays. 5.1: Cylinder restriction preserves Borel expressions and proves both determinacy implications.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-gale-stewart-open-determinacy`

Current completed claim/conventions (copied from the authored section):

In ZFC, an open or closed payoff on a nonempty pruned tree over a set alphabet gives a determined game. Either player may move first at a fixed history. The result also holds for terminal-taboo games, with open or closed measured in the infinite-play subspace.

Dependency inputs: `def-gale-stewart-games-on-pruned-trees`, `lem-taboo-games-reduce-to-pruned-residual-games`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Theorem 6.4 and Exercise 6.5, printed pp54–55 (general-alphabet pasting made explicit); https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — recalled Gale–Stewart result and Lemma 1, printed p451

Completed argument decisions: 1.1: Open-payoff membership implies a finite visit to U and strategy witnesses can be selected. 2.1: Restriction and pasting give the two reachability child conditions. 3.1: Reachability wins for P inside W; avoiding W wins for Q outside. 4.1: Open complement and residual restriction yield the closed and taboo cases.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-game-covering-and-k-covering`

Current completed claim/conventions (copied from the authored section):

Let $T,S$ be trees with terminal taboos in the sense of [[def-game-trees-with-terminal-taboos]]. A **covering of $T$** is a triple $(S,\pi,\phi)$ with the following data and requirements, formulated in ZF.

The position map $\pi:S\to T$ preserves lengths and prefixes. It **reflects target taboos**: if $\pi(s)$ is taboo for $P$ in $T$, then $s$ is taboo for $P$ in $S$. For $y\in[S]$, define $\pi(y)=\bigcup_n\pi(y\upharpoonright n)$. Prefix and length preservation make this a branch of $T$ with those specified restrictions. For a finite maximal play use the position map.

The strategy map $\phi$ sends every total strategy on $S$ to a total strategy for the same player on $T$. Regard strategies as tagged by their player, even if the underlying functions happen to coincide. **Finite-depth locality** means: if two input strategies for the same player agree at all positions of length $<n$, their images agree at all target positions of length $<n$.

**Lifting requirement.** For each strategy $\sigma$ for player $P$ on $S$ and each maximal play $x$ on $T$ consistent with $\phi(\sigma)$, there exists a maximal play $y$ on $S$ consistent with $\sigma$ such that $\pi(y)\subseteq x$ and either $\pi(y)=x$ or $y$ is taboo for $P$. Thus a lift may end early only as a loss for its strategy's player. No specified lift function is part of the data, and independent existential lifts are not asserted to be coherent.

For $k\in\mathbb N$, this is a **$k$-covering** if $S,T$ have identical nodes and taboo labels at lengths $\leq k$, $\pi$ is the identity on those nodes, and $\phi(\sigma)$ equals $\sigma$ at positions of length $<k$. In particular a zero-covering identifies the roots and their taboo labels; its strategy-identity condition is vacuous.

A covering **unravels** $A\subseteq[T]$ if $\pi^{-1}(A)$ is clopen in $[S]$. This preimage uses infinite branches only. The branch map is continuous: for a cylinder $[T]_p$ its preimage is $\bigcup\{[S]_s:|s|=|p|,\ \pi(s)=p\}$. A finite maximal lifted play can project to a nonterminal target position; taboo reflection is not being reversed in that situation.

Dependency inputs: `def-game-trees-with-terminal-taboos`

Source locators:

- https://arxiv.org/html/2401.09659v1 — covering definition before Lemma 2 and k-covering definition before Lemma 4; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — definitions printed pp65–68, triple variant p66

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-game-covering-transfers-winning-strategies`

Current completed claim/conventions (copied from the authored section):

In ZF, if $(S,\pi,\phi)$ covers a taboo tree $T$ and $\sigma$ wins $G(\pi^{-1}(A);S)$ for player $P$, then $\phi(\sigma)$ wins $G(A;T)$ for the same player, for every $A\subseteq[T]$.

Dependency inputs: `def-game-covering-and-k-covering`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 2; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Lemmas 2.1.3–2.1.4, printed pp67–68

Completed argument decisions: 1.1: A lift of a target play cannot be a losing short lift of a winning strategy. 2.1: For an infinite lift the payoff preimage transfers the winner for both players. 3.1: A finite target terminal cannot have the strategy-player taboo label.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-game-covering-composition-and-continuity`

Current completed claim/conventions (copied from the authored section):

In ZF, identity maps give a covering of any taboo tree. If $(S,\pi_1,\phi_1)$ covers $T$ and $(R,\pi_2,\phi_2)$ covers $S$, then $(R,\pi_1\circ\pi_2,\phi_1\circ\phi_2)$ covers $T$. A $k_1$-covering composed with a $k_2$-covering is a $\min(k_1,k_2)$-covering. Every covering's branch map is continuous, so its preimages preserve clopen subsets of the target branch space.

Dependency inputs: `def-game-covering-and-k-covering`

Source locators:

- https://arxiv.org/html/2401.09659v1 — composition paragraph before Lemma 4; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Lemma 2.1.5, printed p68; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Lemma 2, printed p451

Completed argument decisions: 1.1: Identity works and the structural, taboo, and locality requirements compose. 1.2: Successive existential lifts satisfy the composite short-lift exception. 2.1: All identity restrictions hold through the minimum depth. 3.1: Cylinder preimages are unions of cylinders and clopen preimages remain clopen.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `cor-unraveling-covers-give-determinacy`

Current completed claim/conventions (copied from the authored section):

Assume ZFC. If a game covering unravels $A\subseteq[T]$, then $G(A;T)$ is determined, with the given terminal taboos.

Dependency inputs: `lem-game-covering-transfers-winning-strategies`, `thm-gale-stewart-open-determinacy`, `def-axiom-of-choice`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Corollary 3; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Lemma 1, printed p451

Completed argument decisions: 1.1: The clopen lifted payoff meets the open taboo-determinacy theorem hypotheses. 2.1: The source winning strategy descends and proves target determinacy.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-stabilizing-game-coverings-have-inverse-limits`

Current completed claim/conventions (copied from the authored section):

Assume ZFC. Let $(T_i)_{i\in\mathbb N}$ be taboo trees with coherent $k$-coverings $C_{j,i}=(T_j,\pi_{j,i},\phi_{j,i})$ for $i\leq j$, identity on the diagonal. Coherent means that both maps compose according to $C_{l,i}=C_{j,i}\circ C_{l,j}$ for $i\leq j\leq l$. Suppose for every $n$ there is $i_n$ such that $C_{j,l}$ is an $n$-covering whenever $j\geq l\geq i_n$. Then a taboo tree $T_\infty$ has $k$-coverings $C_{\infty,i}$ to all $T_i$ with $C_{\infty,i}=C_{j,i}\circ C_{\infty,j}$. The conclusion concerns existential lifts, not specified lift functions.

Dependency inputs: `def-game-covering-and-k-covering`, `lem-game-covering-composition-and-continuity`, `def-axiom-of-choice`, `thm-transfinite-recursion`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 4, replacing independent lifts by successive coherent lifts; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Lemma 4, printed pp453–454; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Lemma 2.1.6, printed pp68–70 (specified-lift formulation)

Completed argument decisions: 1.1: Stabilized finite-depth restrictions define a set tree with exactly the assigned terminal labels. 2.1: Finite-depth maps are independent of stage and strategy extension. 3.1: The defined maps commute and satisfy k-identity and locality. 4.1: Set-sized AC and recursion give successive compatible maximal lifts. 5.1: When all lifts are infinite their eventual prefixes form an exact limit lift. 6.1: Finite lift lengths stabilize and the terminal label verifies any proper-short exception.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-closed-payoffs-admit-unraveling-covers`

Current completed claim/conventions (copied from the authored section):

In ZFC, for every taboo tree $T$, each open or closed $A\subseteq[T]$ and every $k\in\mathbb N$, there is a $k$-covering unraveling $A$. Its alphabet is a set but need not be countable.

Dependency inputs: `def-game-covering-and-k-covering`, `def-axiom-of-choice`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Lemma 7, complete proof; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Lemma 2.1.7, printed pp70–76; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Lemma 3, printed pp452–453 (independent pruned/quasistrategy construction)

Completed argument decisions: 1.1: Set-sized decorated moves encode a proposed set of minimal disjoint-cylinder positions. 2.1: Acceptance and challenge rules define a taboo tree whose erasure map reflects target taboos. 3.1: The lifted payoff equals the accepting infinite plays and is clopen. 3.2: The I simulation has an exact or correctly losing short lift for every consistent target play. 4.1: The II nonchallenge set forces acceptance and supplies challenge witnesses for all excluded r. 5.1: Fixed selectors and depth-bounded simulation make the strategies total and local. 6.1: Complementation gives the open-payoff case from the closed construction.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-countable-borel-hierarchy-exhaustion-and-pullbacks`

Current completed claim/conventions (copied from the authored section):

In ZFC, for every topological space $X$,

$$\mathcal B(X)=\bigcup_{1\leq\alpha<\omega_1}\Sigma^0_\alpha(X).$$

Continuous inverse images preserve $\Sigma^0_\alpha$, $\Pi^0_\alpha$ and $\Delta^0_\alpha$ at every positive countable rank. If $Y\subseteq X$ has the subspace topology, its $\Sigma^0_\alpha$ and $\Pi^0_\alpha$ sets are exactly the traces of the corresponding classes on $X$. No trace assertion for $\Delta$ is made. The inverse-image proof uses no choice beyond the supplied representations.

Dependency inputs: `def-countable-borel-hierarchy`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-axiom-of-choice`, `thm-transfinite-induction`, `def-continuous-map-top`, `def-subspace-topology-top`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 2.5(i–ii), Lemma 2.6(iv), Exercise 2.8(a), printed pp14–15; local exhaustion argument fills the abbreviated sigma-algebra step

Completed argument decisions: 1.1: Every rank is Borel and the union of ranks is complement closed. 2.1: Bounded ranks give countable-union closure and exhaustion. 1.2: Preimages preserve each positive rank and its dual. 3.1: Both trace inclusions follow by pullback and inductive lift selection.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-universal-borel-sets-and-strict-hierarchy`

Current completed claim/conventions (copied from the authored section):

In ZFC, if $X$ is separable metrizable and $1\leq\alpha<\omega_1$, there are universal sets $U_\alpha\in\Sigma^0_\alpha(\mathcal C\times X)$ and $V_\alpha\in\Pi^0_\alpha(\mathcal C\times X)$: their sections at parameters in $\mathcal C=2^{\mathbb N}$ exhaust the respective classes on $X$. For each such rank both $\Pi^0_\alpha(\mathcal C)\setminus\Sigma^0_\alpha(\mathcal C)$ and its dual difference are nonempty. The same holds on any metrizable space containing a subspace homeomorphic to $\mathcal C$.

Dependency inputs: `lem-metric-borel-hierarchy-monotonicity-and-operations`, `lem-countable-borel-hierarchy-exhaustion-and-pullbacks`, `lem-cantor-and-baire-sequence-coding`, `def-product-topology`, `thm-transfinite-recursion`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 2.36, Lemma 2.37 and Corollary 2.38, printed pp23–24; correct source typos and supply the cofinal-index placement step

Completed argument decisions: 1.1: The countable metric basis yields universal open and closed sets. 1.2: Countable cofinal rank sequences define universal candidates of the required rank. 2.1: Increasing index placement and parameter selection give every section required. 3.1: Diagonal complementation exhibits each proper pointclass difference on Cantor space. 4.1: Trace lifting transfers the proper differences to every containing metric space.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-borel-payoffs-admit-unraveling-covers`

Current completed claim/conventions (copied from the authored section):

In ZFC, for every set-sized game tree with terminal taboos $T$, every Borel $A\subseteq[T]$ and every $k\in\mathbb N$, there is a $k$-covering of $T$ whose inverse image of $A$ is clopen.

Dependency inputs: `lem-countable-borel-hierarchy-exhaustion-and-pullbacks`, `lem-closed-payoffs-admit-unraveling-covers`, `lem-stabilizing-game-coverings-have-inverse-limits`, `lem-game-covering-composition-and-continuity`, `thm-transfinite-induction`, `def-axiom-of-choice`, `prop-minimum-rank-selection-and-collection`, `thm-transfinite-recursion`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Theorem 5; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Theorem 2.1.8, printed pp76–77; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Theorem, printed p454

Completed argument decisions: 1.1: Open/closed base and complementation reduce the progressive step to lower-Pi unions. 2.1: Every valid partial tower has a nonempty set of least-rank successor witnesses. 3.1: A set closed under successor witnesses supports AC selection and coherent omega recursion. 4.1: The stabilizing tower has a limit on which every B_n pulls back to clopen. 5.1: One more open-payoff unraveling makes the union clopen and completes ordinal induction.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-borel-games-are-determined`

Current completed claim/conventions (copied from the authored section):

In ZFC every Borel payoff game on a set-sized tree with terminal taboos is determined. In particular every Borel Gale–Stewart game on $\mathbb N$ is determined. This theorem uses AC and is not a ZF supplier for the AD implications.

Dependency inputs: `thm-borel-payoffs-admit-unraveling-covers`, `cor-unraveling-covers-give-determinacy`, `def-axiom-of-choice`

Source locators:

- https://arxiv.org/html/2401.09659v1 — Corollary 6; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf — Theorem 2.1.9, printed p77; https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf — Corollary, printed p454

Completed argument decisions: 1.1: The depth-zero unraveling and transfer corollary determine G(A;T). 2.1: The ordinary natural-number game is the no-taboo special case.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-natural-number-game-strategies-have-continuum-many-plays`

Current completed claim/conventions (copied from the authored section):

In ZF, on the full natural-number game tree, the strategies of either fixed player are in bijection with $\mathcal N=\mathbb N^{\mathbb N}$. For each fixed strategy its compatible infinite plays are also in bijection with $\mathcal N$.

Dependency inputs: `def-gale-stewart-games-on-pruned-trees`, `lem-cantor-and-baire-sequence-coding`, `thm-schroder-bernstein`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 6.8, printed p55, supplies the diagonalization problem; this is its explicit strategy/branch coding prerequisite

Completed argument decisions: 1.1: An explicit enumeration of parity positions identifies strategy tables with Baire sequences. 2.1: Recursion and opponent-subsequence extraction are inverse maps for compatible plays.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-choice-produces-an-undetermined-natural-number-game`

Current completed claim/conventions (copied from the authored section):

Assuming AC, some $A\subseteq\mathbb N^{\mathbb N}$ has no winning strategy for either player. Consequently AD is incompatible with AC.

Dependency inputs: `lem-natural-number-game-strategies-have-continuum-many-plays`, `thm-well-ordering-theorem`, `lem-cardinality-of-a-well-orderable-set`, `cor-cardinal-absorption`, `thm-transfinite-recursion`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 6.8, printed p55

Completed argument decisions: 1.1: An initial-cardinal indexing enumerates both strategy families and fixes a play well-order. 2.1: At every alpha<kappa fewer than kappa plays have been used, even after one extra selection. 3.1: Least eligible recursion constructs pairwise distinct compatible plays. 4.1: The y-set defeats every I and every II strategy using their indexed witnesses.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-ad-implies-countable-choice-for-baire-space`

Current completed claim/conventions (copied from the authored section):

In ZF+AD, every sequence $(A_n)_{n\in\mathbb N}$ of nonempty subsets of $\mathbb N^{\mathbb N}$ has a sequence $(a_n)_n$ with $a_n\in A_n$. This asserts countable choice for Baire reals, not unrestricted dependent choice.

Dependency inputs: `def-axiom-of-determinacy-for-natural-number-games`

Source locators:

- https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf — Proposition 10.14, printed p101; full proof read

Completed argument decisions: 1.1: Every fixed I strategy is defeated using a member of its single indexed A_n. 2.1: A winning II strategy yields all choices by uniquely defined zero-opponent simulations.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-perfect-set-game-strategy-dichotomy`

Current completed claim/conventions (copied from the authored section):

In ZF let $A\subseteq\mathcal C=2^{\mathbb N}$. In each round I plays a finite binary block (possibly empty), then II plays a bit. I wins iff the concatenated sequence is in $A$. An I winning strategy yields a continuous injection $\mathcal C\to A$ with compact closed image having no isolated points. A II winning strategy yields an injection $A\to\mathbb N$. Fixed block codes turn this into a natural-number game, with an illegal II bit losing immediately.

Dependency inputs: `lem-cantor-and-baire-sequence-coding`, `def-gale-stewart-games-on-pruned-trees`

Source locators:

- https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf — Theorem 10.10(i), Claims 10.11–10.12 and their complete proofs, printed pp100–101

Completed argument decisions: 1.1: Block codes define a total natural-number payoff and every legal play has an infinite concatenation. 1.2: Outcome against an I winning strategy is a continuous injection of Cantor space into A. 2.1: Compactness and metric separation make the image a closed perfect Cantor copy. 1.3: Absence of a barrier would recursively build a winning-II play inside A. 3.1: Each full barrier history uniquely determines x, making least barrier codes injective.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-polish-closed-products-and-baire-parametrization`

Current completed claim/conventions (copied from the authored section):

In ZFC, finite products and closed subspaces of Polish spaces are Polish. Every nonempty Polish space is a continuous image of $\mathcal N=\mathbb N^{\mathbb N}$. No surjection from $\mathcal N$ onto the empty space is asserted.

Dependency inputs: `def-polish-space`, `lem-cantor-and-baire-sequence-coding`, `def-product-topology`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Example 1.3 p3 (finite-product specialization), Lemmas 1.5–1.6 pp3–4, Theorem 1.17 p6 and closed-subspace paragraph p9; full corresponding proofs read

Completed argument decisions: 1.1: The sum metric is complete and compatible and the product dense set is countable. 1.2: Closed subspaces inherit completeness and acquire a countable dense set by trace selection. 1.3: Enumerated small balls construct nested nonempty open covers with shrinking diameter. 2.1: Unique branch limits define a continuous surjection, with least-child paths proving onto.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-analytic-countable-operations-and-borel-inclusion`

Current completed claim/conventions (copied from the authored section):

In ZFC analytic subsets of a Polish space are closed under countable unions and countable intersections, and under continuous inverse images between Polish spaces. Every Borel set is analytic and coanalytic.

Dependency inputs: `def-analytic-and-coanalytic-by-closed-projection`, `lem-cantor-and-baire-sequence-coding`, `lem-polish-closed-products-and-baire-parametrization`, `lem-metric-borel-hierarchy-monotonicity-and-operations`, `def-continuous-map-top`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 4.5(i) pp34–35 and discussion after Definition 4.4 p34; local closed-witness proof replaces dependence on Borel parametrization

Completed argument decisions: 1.1: A first-coordinate tag makes a closed witness for the countable union. 2.1: Paired witness coordinates make a closed witness for the intersection; AC supplies the reverse implication. 1.2: Pullback of a closed witness under g times identity proves continuous-preimage closure. 3.1: Sets analytic on both sides form an open-containing sigma-algebra.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-analytic-closed-projection-and-continuous-image-equivalence`

Current completed claim/conventions (copied from the authored section):

In ZFC, for $A$ in a Polish $X$, these conditions are equivalent: $A$ is analytic in the closed-projection convention; $A$ is empty or a continuous image of $\mathcal N$; $A$ is a continuous image of a Borel subset of a Polish space; $A$ is the projection of a Borel subset of $Y\times X$ for some Polish $Y$. Analytic sets are preserved by Borel measurable images and inverse images between Polish spaces; coanalytic sets are preserved by such inverse images. A map is Borel measurable if its open preimages are Borel.

Dependency inputs: `lem-polish-closed-products-and-baire-parametrization`, `lem-analytic-countable-operations-and-borel-inclusion`, `def-analytic-and-coanalytic-by-closed-projection`, `def-countable-borel-hierarchy`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 4.1, Lemma 4.2 p34 and Lemma 4.5(ii–iii) pp34–35; graph argument supplied locally instead of importing Theorem 2.27

Completed argument decisions: 1.1: Closed-witness parametrization and the closed graph give the first equivalence including empty A. 2.1: Continuous images of analytic sets are analytic, yielding the remaining two equivalent normal forms. 1.2: A shrinking-basis rectangle formula proves the graph of every Borel map Borel. 3.1: Graph intersections and projections give Borel image and inverse-image closure; complementation gives coanalytic pullbacks.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-disjoint-analytic-sets-have-borel-separators`

Current completed claim/conventions (copied from the authored section):

In ZFC, if $A,B$ are disjoint analytic subsets of a Polish space $X$, a Borel $C\subseteq X$ satisfies $A\subseteq C$ and $C\cap B=\varnothing$.

Dependency inputs: `thm-analytic-closed-projection-and-continuous-image-equivalence`, `def-countable-borel-hierarchy`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Theorem 4.13, printed p37, complete proof

Completed argument decisions: 1.1: Empty pairs have explicit separators and nonempty pairs have continuous Baire parametrizations. 1.2: The union-of-intersections separator of all child pairs separates the parent pair. 2.1: Least inseparable-child recursion contradicts metric separation of the two branch images.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `cor-borel-iff-analytic-and-coanalytic`

Current completed claim/conventions (copied from the authored section):

In ZFC, a subset of a Polish space is Borel if and only if it is analytic and coanalytic.

Dependency inputs: `thm-disjoint-analytic-sets-have-borel-separators`, `lem-analytic-countable-operations-and-borel-inclusion`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Corollary 4.14, printed p37

Completed argument decisions: 1.1: Borel inclusion proves the forward implication. 2.1: Separation from the analytic complement forces the Borel separator to equal A.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-souslin-operation-on-set-schemes`

Current completed claim/conventions (copied from the authored section):

Work in ZF. For a set $X$ and a scheme $(A_s)_{s\in\mathbb N^{<\omega}}$ of subsets of $X$, with finite prefixes as in [[def-trees-and-bodies-on-discrete-alphabets]] and branches in [[def-baire-sequence-space]], the **Souslin operation** is

$$\mathsf S(A)=\bigcup_{f\in\mathbb N^{\mathbb N}}\bigcap_{n\in\mathbb N}A_{f\upharpoonright n}.$$

The intersection includes $n=0$, so $\mathsf S(A)\subseteq A_\varnothing$. Setting $A_\varnothing=X$ makes that term neutral; setting it empty makes the result empty. All unions and intersections are indexed by sets, so Separation and Union define a subset of $X$.

One may normalize to a decreasing scheme by putting $B_s=\bigcap_{t\subseteq s}A_t$, where prefixes include $s$ itself. If $s\subseteq u$, its prefix family is included in that of $u$, so $B_u\subseteq B_s$. For each fixed branch $f$, membership in every $B_{f\upharpoonright n}$ implies membership in $A_{f\upharpoonright n}$ by taking that prefix itself. Conversely membership in all $A_{f\upharpoonright j}$ implies membership in every $B_{f\upharpoonright n}$, since each prefix of $f\upharpoonright n$ is $f\upharpoonright j$ for some $j\leq n$. The branch intersections, and hence the two Souslin results, are equal. This also covers the empty ambient set and uses no choice.

Dependency inputs: `def-baire-sequence-space`, `def-trees-and-bodies-on-discrete-alphabets`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 4.19 p39 and normalization at the start of Theorem 4.22 p40

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-analytic-sets-are-souslin-operations-on-closed-sets`

Current completed claim/conventions (copied from the authored section):

In ZFC, $A$ in a Polish space $X$ is analytic if and only if $A=\mathsf S(F)$ for a scheme of closed subsets of $X$. Such a scheme may be chosen decreasing along extensions.

Dependency inputs: `def-souslin-operation-on-set-schemes`, `thm-analytic-closed-projection-and-continuous-image-equivalence`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 4.19 and Exercise 4.20, printed p39; complete local exercise proof with closures

Completed argument decisions: 1.1: Failure at one prefix proves the branch-witness set closed and its projection is S(F). 2.1: Closures of parametrized cylinders have singleton branch intersections and union A.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-uncountable-analytic-splitting`

Current completed claim/conventions (copied from the authored section):

In ZFC every uncountable subset $A$ of a Polish space has two disjoint open neighbourhoods each meeting $A$ uncountably. They may be chosen in a countable metric basis with arbitrarily small positive diameter bounds. Analyticity of $A$ is not required.

Dependency inputs: `def-polish-space`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 4.16, printed p38

Completed argument decisions: 1.1: The countably many countable basis intersections have countable union M. 2.1: Two points outside M admit arbitrarily small disjoint basis neighbourhoods meeting A uncountably.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-uncountable-analytic-sets-contain-cantor-copies`

Current completed claim/conventions (copied from the authored section):

In ZFC every uncountable analytic subset $A$ of a Polish space $X$ contains a compact subspace homeomorphic to $\mathcal C$. In particular it contains a nonempty perfect closed subset of $X$. This includes uncountable Borel subsets and uncountable Polish spaces.

Dependency inputs: `thm-analytic-closed-projection-and-continuous-image-equivalence`, `lem-uncountable-analytic-splitting`, `lem-cantor-and-baire-sequence-coding`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Theorem 4.17 and full proof, printed pp38–39; local argument completes the source final extra-care remark

Completed argument decisions: 1.1: Every uncountable cylinder image has two strict child cylinders with disjoint uncountable images. 2.1: The union of selected words is continuous and its composite with f is injective into A. 3.1: Compactness and finite metric separation make the image a closed perfect Cantor copy, also for Borel A.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `cor-uncountable-polish-borel-hierarchy-is-strict`

Current completed claim/conventions (copied from the authored section):

In ZFC, for every uncountable Polish $X$ and $1\leq\alpha<\beta<\omega_1$, $\Sigma^0_\alpha(X)$ is a proper subset of $\Sigma^0_\beta(X)$, and $\Pi^0_\alpha(X)$ is a proper subset of $\Pi^0_\beta(X)$.

Dependency inputs: `thm-universal-borel-sets-and-strict-hierarchy`, `thm-uncountable-analytic-sets-contain-cantor-copies`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Corollary 2.38, printed p24; its perfect-set supplier is now local

Completed argument decisions: 1.1: A Cantor copy in X gives a Pi_alpha set outside Sigma_alpha. 2.1: Direct rank inclusions and the constant D sequence make both hierarchies strictly increase.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-descriptive-tree-rank`

Current completed claim/conventions (copied from the authored section):

Assume ZFC, with [[def-axiom-of-choice]] supplying the hypothesis of the closed-subspace Polishness result below. Enumerate $\mathbb N^{<\omega}$ by increasing length plus sum of entries, then by length and lexicographically within each finite stratum. This is a bijection with $\mathbb N$. Identify subsets of finite words with their characteristic binary sequences, and let $\mathrm{Tr}$ consist of the prefix-closed subsets, including the empty tree, as in [[def-trees-and-bodies-on-discrete-alphabets]]. Give it the inherited Cantor topology from [[lem-cantor-and-baire-sequence-coding]].

The space $\mathrm{Tr}$ is closed: failure of prefix closure is witnessed by two words $t\in T$, $s\subseteq t$ with $s\notin T$, and fixing these two characteristic coordinates gives an open neighbourhood of non-trees. It is therefore Polish by [[lem-polish-closed-products-and-baire-parametrization]].

Let $\mathrm{WF}\subseteq\mathrm{Tr}$ consist of trees whose immediate-child relation, with a child related to its parent, is well-founded. This relation is setlike. For $T\in\mathrm{WF}$, [[def-rank-of-a-well-founded-relation]] defines

$$r_T(s)=\sup\{r_T(s^\frown n)+1:s^\frown n\in T\}.$$

Its supplier proves existence and ordinal-valuedness with a total recursion rule; the empty supremum is zero. Put $r(T)=r_T(\varnothing)$ for nonempty T and $r(\varnothing)=0$ for the empty tree. Thus both an empty tree and a root-only tree have rank zero. The rank does not distinguish those trees. We do not assign a negative ordinal rank to the empty tree. Write $\mathrm{IF}=\mathrm{Tr}\setminus\mathrm{WF}$; its identification with trees having infinite branches is proved separately.

Dependency inputs: `def-trees-and-bodies-on-discrete-alphabets`, `lem-cantor-and-baire-sequence-coding`, `lem-polish-closed-products-and-baire-parametrization`, `def-rank-of-a-well-founded-relation`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definitions 5.5 and 5.7 pp44–45; local root-rank convention explicit

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-countable-tree-ranks-and-rank-monotonicity`

Current completed claim/conventions (copied from the authored section):

In ZFC a tree on a countable alphabet is well-founded if and only if it has no infinite branch; every well-founded such tree has rank below $\omega_1$. If $f:S\to T$ between nonempty well-founded trees preserves proper extensions, then $r_S(s)\leq r_T(f(s))$ for every node s. For every $\alpha<\omega_1$ there is a nonempty tree on $\mathbb N$ of root rank $\alpha$.

Dependency inputs: `def-descriptive-tree-rank`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-induction-on-well-founded-relations`, `thm-transfinite-induction`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 5.8, Exercise 5.9(b) and forward direction of Lemma 5.11, printed pp44–45

Completed argument decisions: 1.1: A branch violates well-foundedness and a failure of minimality constructs a branch by least children. 1.2: Well-founded induction and countable ordinal boundedness make each node rank countable. 1.3: Proper-extension preservation bounds child successor ranks and hence the parent rank. 2.1: Decreasing ordinal-sequence trees realize every countable root rank.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-analytic-families-of-well-founded-trees-have-bounded-rank`

Current completed claim/conventions (copied from the authored section):

In ZFC, if $A\subseteq\mathrm{Tr}$ is analytic and $A\subseteq\mathrm{WF}$, there is $\gamma<\omega_1$ with $r(T)<\gamma$ for every $T\in A$.

Dependency inputs: `def-descriptive-tree-rank`, `lem-countable-tree-ranks-and-rank-monotonicity`, `thm-analytic-closed-projection-and-continuous-image-equivalence`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Corollary 5.16, printed p46 (statement); local combined-tree proof replaces the source rank-comparison/non-analyticity proof

Completed argument decisions: 1.1: Continuous parametrization defines a countable synchronous witness tree S. 2.1: A branch of S would, by continuity of each tree coordinate, give a branch of f(a). 3.1: Extension embeddings bound each family rank by r(S), whose successor is countable.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-ill-founded-trees-are-analytic-non-borel`

Current completed claim/conventions (copied from the authored section):

In ZFC, $\mathrm{IF}=\mathrm{Tr}\setminus\mathrm{WF}$ is analytic and not Borel; $\mathrm{WF}$ is coanalytic and not analytic.

Dependency inputs: `def-descriptive-tree-rank`, `lem-countable-tree-ranks-and-rank-monotonicity`, `thm-analytic-families-of-well-founded-trees-have-bounded-rank`, `lem-analytic-countable-operations-and-borel-inclusion`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Example 4.7 pp35–36 and Theorem 5.3/Corollary 5.4 p44 (non-Borel conclusion); alternative proof from local direct boundedness

Completed argument decisions: 1.1: The branch relation is closed and projects exactly to IF, making its complement coanalytic. 2.1: Realization of every countable rank contradicts analytic boundedness of WF and hence Borelness of IF.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-property-of-baire-for-subsets`

Current completed claim/conventions (copied from the authored section):

A subset $A$ of a topological space $X$ has the **property of Baire** if there is an open $U\subseteq X$ such that

$$A\mathbin\triangle U=(A\setminus U)\cup(U\setminus A)$$

is meagre in X, in the sense of [[def-nowhere-dense-meagre-and-residual-subsets]]. Meagre and comeagre refer to the ambient space X unless a relative space is explicitly named. No choice axiom or Baire-space hypothesis is part of this definition.

Every meagre set qualifies using $U=\varnothing$, and every open set qualifies using itself, since the error is empty. In particular the empty set and the whole space qualify even if X is empty. If $M\subseteq\bigcup_n N_n$ with each $N_n$ nowhere dense, its complement contains $\bigcap_n(X\setminus\overline{N_n})$, a countable intersection of dense open sets. It need not contain a single dense open set. This definition uses the actual sequence of nowhere dense witnesses.

Dependency inputs: `def-nowhere-dense-meagre-and-residual-subsets`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 2.55 p26; correct the dense-open gloss in Lietz footnote 24

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-baire-property-sigma-algebra-and-borel-regularity`

Current completed claim/conventions (copied from the authored section):

In ZFC, in every topological space X the sets with the Baire property form a sigma-algebra containing all Borel sets. Every meagre subset has the Baire property. Every Baire-property set differs from both an $F_\sigma$ set and a $G_\delta$ set by a meagre set.

Dependency inputs: `def-property-of-baire-for-subsets`, `def-countable-borel-hierarchy`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definitions 2.46/2.53/2.55, Exercises 2.48–2.50/2.54 and Lemmas 2.51/2.56, Corollary 2.57 and Exercise 2.58, printed pp26–27

Completed argument decisions: 1.1: Meagre sets are hereditary and countable-union closed using selected witness sequences. 1.2: Closed sets have nowhere dense boundary errors from their interiors. 2.1: Complement and union errors prove the Baire-property sigma-algebra and Borel inclusion. 3.1: Explicit G_delta lower and F_sigma upper envelopes differ from A by meagre sets.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-sequence-spaces-continuously-inject-into-the-real-line`

Current completed claim/conventions (copied from the authored section):

In ZF the map

$$j:2^{\mathbb N}\to\mathbb R,\qquad j(b)=\sum_{k=0}^\infty2b(k)3^{-k-1}$$

is a continuous injection. If $h:\mathbb N^{\mathbb N}\to2^{\mathbb N}$ is the block-coding map, then $e=j\circ h$ is a continuous injection of Baire space into $\mathbb R$.

Dependency inputs: `lem-cantor-and-baire-sequence-coding`, `thm-cantor-set-ternary-description`, `def-continuous-map-top`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Definition 1.7 and Exercise 1.11, pp4–5, sequence-space coding context; ternary-series calculation is the explicit local argument from thm-cantor-set-ternary-description, not a claimed Marker theorem

Completed argument decisions: 1.1: Convergence and the geometric tail estimate prove j well-defined, injective and continuous. 2.1: Composition preserves injectivity and continuity, and geometric sums give endpoint values.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-souslin-operation-preserves-the-baire-property`

Current completed claim/conventions (copied from the authored section):

In ZFC, in a topological space X with a specified countable basis, every subset E has a Baire-property envelope H containing E such that $H\setminus D$ is meagre for every Baire-property D containing E. The Souslin operation preserves the Baire property. Consequently every analytic subset of a Polish space has the Baire property.

Dependency inputs: `lem-baire-property-sigma-algebra-and-borel-regularity`, `def-souslin-operation-on-set-schemes`, `thm-analytic-sets-are-souslin-operations-on-closed-sets`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 4.21, Theorem 4.22 and Corollary 4.23, printed pp39–40; complete proofs reread 2026-09-09.

Completed argument decisions: 1.1: The closed complement of locally meagre basis pieces yields a minimal-mod-meagre envelope. 2.1: Finite prefix intersections give decreasing Baire-property envelopes B_s of the tail sets E_s. 3.1: Envelope defects are meagre and least-child recursion covers the root outside their union. 4.1: Closed schemes on a countably based Polish space give the analytic consequence.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-souslin-operation-preserves-lebesgue-measurability`

Current completed claim/conventions (copied from the authored section):

Assume ZFC and $d\geq1$. Every $E\subseteq\mathbb R^d$ has a Lebesgue measurable envelope H containing E such that $H\setminus D$ is null for every Lebesgue measurable D containing E. The Souslin operation preserves Lebesgue measurability on $\mathbb R^d$. Every analytic subset of $\mathbb R^d$ is therefore Lebesgue measurable.

Dependency inputs: `def-souslin-operation-on-set-schemes`, `thm-analytic-sets-are-souslin-operations-on-closed-sets`, `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, `def-caratheodory-measurable-set`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 4.24 and Theorem 4.25, printed pp40–41; complete relevant text reread 2026-09-09. The source leaves the proof as an exercise; the finite-box envelope and full branch argument here are supplied locally. Correct the printed containment typo: D contains A.

Completed argument decisions: 1.1: Disjointization gives subadditivity and the complete null ideal. 2.1: Finite-box equal-measure hulls have null excess over every measurable superset. 3.1: Normalized tail envelopes have countably many null child defects. 4.1: Least-child branches put the Souslin set between a measurable envelope and its null deficit; closed schemes give the analytic case.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-banach-mazur-category-game`

Current completed claim/conventions (copied from the authored section):

Work in ZF. Let X be Baire space ([[def-baire-sequence-space]]), Cantor space ([[def-cantor-sequence-space-for-descriptive-set-theory]]) or $\mathbb R$, and let $A\subseteq X$. In the **category game** I and II alternate basic-open moves $V_0,V_1,\ldots$, I first, with full-history strategies as in [[def-gale-stewart-games-on-pruned-trees]].

In either sequence space moves are cylinders determined by finite words: the first word is nonempty and each subsequent word properly extends its predecessor. In $\mathbb R$ moves are nonempty bounded rational open intervals satisfying $\overline{V_{n+1}}\subseteq V_n$ and $\operatorname{length}(V_n)<1/(n+1)$. A relative game on a fixed nonempty basic open V requires $V_0\subseteq V$ for cylinders, or $\overline{V_0}\subseteq V$ for intervals. All later rules remain the same.

Each legal full play determines one point. In sequence spaces it is the union of the strictly extending words. For intervals apply [[thm-nested-interval-property]] to their nonempty bounded nested closures, whose lengths tend to zero: the intersection is a singleton x. Because the next closure lies inside each V_n, this x belongs to every V_n. I wins precisely when x belongs to A.

For natural-number coding, code a finite word by its length and iterated pairing $\langle i,j\rangle=(i+j)(i+j+1)/2+j$; the intervals are coded by pairs in a fixed enumeration of the rationals from [[thm-rationals-countable]]. Allow unused numbers as illegal codes. In sequence spaces one can always append a digit. In the real case [[lem-rat-embeds-dense]] supplies a rational interval with closure inside any prescribed nonempty open and as small as the next bound requires. Thus legal continuation sets are nonempty subsets of $\mathbb N$ and have least codes, without choice.

In the full coded natural-number game the first illegal move loses, regardless of later moves. More formally, I's payoff contains the plays with first illegal move by II, together with all wholly legal plays whose resulting point is in A. This is a subset of $\mathbb N^{\mathbb N}$. A winning coded strategy, restricted to its legal consistent histories, cannot make the first illegal move: a legal opponent continuation exists by least codes and would defeat it. Complete its values at inconsistent legal histories by least legal defaults. This gives a legal winning strategy. Neither determinacy nor AC is assumed by the definition.

Dependency inputs: `def-baire-sequence-space`, `def-cantor-sequence-space-for-descriptive-set-theory`, `def-gale-stewart-games-on-pruned-trees`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-nested-interval-property`

Source locators:

- https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — Definition 7.7, printed p23; natural-number coding in Theorem 7.8, p24; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-banach-mazur-game-category-characterization`

Current completed claim/conventions (copied from the authored section):

In ZF, for $X=\mathbb N^{\mathbb N},2^{\mathbb N}$ or $\mathbb R$, II has a winning category-game strategy with target A iff A is meagre in X. I has a winning strategy iff A is comeagre in some nonempty basic open. Both assertions hold relative to a fixed nonempty basic open. Each winning strategy gives a specified sequence of closed nowhere dense witnesses for the asserted meagre set. No nonempty basic open is meagre in itself. No determinacy, AC or DC is assumed.

Dependency inputs: `def-banach-mazur-category-game`, `def-nowhere-dense-meagre-and-residual-subsets`, `thm-recursion`

Source locators:

- https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — complete three claims following Definition 7.7, pp23–24; Proposition 7.1 p21; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

Completed argument decisions: 1.1: Least refinements avoiding successive closed witnesses give a winning II strategy. 1.2: Response-open unions D_p are dense open at every consistent even history. 2.1: Least response choices reconstruct every point outside the specified F_p cover as a losing-A play. 3.1: Nowhere denseness and meagreness transfer between an open subspace and its ambient space. 4.1: Reversing players after the first move and avoiding witnesses proves the I iff characterization. 5.1: Least nested refinements construct a point in any basic open outside a prescribed meagre cover.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-ad-implies-baire-property`

Current completed claim/conventions (copied from the authored section):

In ZF+AD every subset of $\mathbb N^{\mathbb N}$, $2^{\mathbb N}$ or $\mathbb R$ has the Baire property. Only countable choice for sets of Baire-real codes, obtained from AD, is used; neither AC nor unrestricted DC is assumed.

Dependency inputs: `lem-banach-mazur-game-category-characterization`, `thm-ad-implies-countable-choice-for-baire-space`, `def-property-of-baire-for-subsets`, `def-axiom-of-determinacy-for-natural-number-games`

Source locators:

- https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — Theorem 7.8 and its preceding local-to-global claim, p24; weak-choice witness selection supplied explicitly here; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

Completed argument decisions: 1.1: Countable-real-choice selects coded ambient witness sequences whose interleaving covers U minus A. 1.2: I cannot win the game for A minus U, so AD and II characterization supply a meagre witness sequence. 2.1: Interleaving two specified sequences witnesses meagreness of A symmetric-difference U.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-choice-bernstein-set-pathology`

Current completed claim/conventions (copied from the authored section):

Assume AC. There is a Bernstein $B\subseteq\mathbb R$. Both B and its complement are uncountable, contain no nonempty perfect subset, lack the Baire property, are not Lebesgue measurable and are not Borel. Moreover $\lambda_*(B)=0$ and $\lambda^*(B\cap I)=\lambda(I)$ for every nondegenerate bounded interval I. Existence alone needs only a well-order of $\mathbb R$; the measure conclusions here use the stronger AC assumption.

Dependency inputs: `def-axiom-of-choice`, `thm-well-ordering-theorem`, `thm-bernstein-sets-exist-under-a-well-ordering-of-r`, `def-bernstein-set-on-r`, `cor-a-bernstein-set-is-not-lebesgue-measurable`, `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval`, `lem-baire-property-sigma-algebra-and-borel-regularity`, `thm-nested-interval-property`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `def-perfect-set-r`, `cor-archimedean-reciprocal`, `thm-recursion`

Source locators:

- https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf — complete Theorems 6.3.6–6.3.8, printed pp102–103, read 2026-09-09; the shrinking rational-interval proof here supplies category closure directly.
- https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf — Proposition 10.13 p101; use existing real-line supplier rather than duplicate its existence proof.

Completed argument decisions: 1.1: A real well-order supplies B and the Bernstein condition excludes perfect subsets on either side. 1.2: Least rational interval choices construct a closed binary limit set avoiding the prescribed witnesses. 2.1: Nested interval points and arbitrarily late sibling changes prove the limit set nonempty perfect. 3.1: The avoidance set refutes meagreness and the Baire property on either Bernstein side, hence countability and Borelness. 4.1: AC supplies the exact countable-choice hypotheses for both published Bernstein measure conclusions.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-choice-hamel-basis-pathology`

Current completed claim/conventions (copied from the authored section):

Assume AC. Fix a Hamel basis B of $\mathbb R$ over $\mathbb Q$ and $b\in B$. Its coefficient map $f=\Lambda_b:\mathbb R\to\mathbb Q\subseteq\mathbb R$ is additive, has dense graph, is unbounded above and below on every nondegenerate interval, and is continuous nowhere. Its kernel W is not Lebesgue measurable, so f is not Lebesgue measurable. No claim that every Hamel basis itself is nonmeasurable is made.

Dependency inputs: `lem-hamel-basis-exists`, `def-axiom-of-choice`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `thm-of-archimedean`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-measure`, `def-borel-and-lebesgue-measurable-function-on-rn`, `def-borel-sigma-algebra`, `def-linear-subspace`, `def-continuity-real`

Source locators:

- https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf — full Proposition 7.3.1, Theorem 7.3.2, Corollary 7.3.3, printed pp111–112, read 2026-09-09. Nonmeasurable-kernel consequence is a local disjoint-translate argument from the explicit published measure dependencies.

Completed argument decisions: 1.1: Rational kernel multiples are dense and each rational fiber is a kernel coset. 2.1: Dense fibers give graph density, both unboundedness directions and an epsilon-one discontinuity witness at every point. 2.2: Disjoint small rational translates force each bounded kernel slice to have measure zero. 3.1: Countably many null kernel cosets would make the real line null; the Borel singleton preimage refutes measurability of f.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`

Current completed claim/conventions (copied from the authored section):

In ZF there is an injection $b:[0,1)\to\mathcal C$ whose cylinder preimages are dyadic half-open intervals. Under DC, $\nu(D)=\lambda(b^{-1}[D])$ on Borel $D\subseteq\mathcal C$ is a probability measure with $\nu(N_s)=2^{-|s|}$. For arbitrary $E\subseteq\mathcal C$ put

$$\nu_{\rm in}(E)=\sup\{\nu(K):K\subseteq E\text{ closed}\},\qquad \nu_{\rm out}(E)=\inf\{\nu(O):E\subseteq O\text{ open}\}.$$

Then $0\leq\nu_{\rm in}(E)\leq\nu_{\rm out}(E)\leq1$ and $\nu_{\rm out}(E)=1-\nu_{\rm in}(\mathcal C\setminus E)$. Equality of the two bounds implies $b^{-1}[E]$ Lebesgue measurable. Continuity from above and below holds for $\nu$. Already in ZF, any compact Cantor copy in $b[A]$, for $A\subseteq[0,1)$, transfers to a compact Cantor copy in A. The ZF clauses do not use DC.

Dependency inputs: `def-dependent-choice`, `def-countable-choice`, `lem-cantor-and-baire-sequence-coding`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `def-borel-sigma-algebra`, `def-measure`, `thm-recursion`, `cor-archimedean-reciprocal`, `thm-nested-interval-property`, `def-continuous-map-top`, `def-compact-space`

Source locators:

- https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — opening coin-measure convention p393; local construction supplies its previously missing prerequisites; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

Completed argument decisions: 1.1: Half-open dyadic partitions define an injection with exactly the prescribed cylinder preimages. 2.1: A sigma-algebra preimage argument makes every Borel cylinder-space set have a real Borel preimage. 1.2: DC on finite selections with prescribed empty start implies countable choice. 3.1: Pushforward along b is a probability measure with cylinder values and both monotone continuity properties. 4.1: Monotonicity and complement bijection establish the envelope inequalities and complement identity. 5.1: Countably selected envelope pairs sandwich b-preimage E between Borel sets with null difference. 2.2: Nested interval evaluation is continuous and satisfies pi composed with b equals identity in ZF. 6.1: Restricted evaluation carries a compact Cantor copy homeomorphically into A.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `def-rational-determinacy-measure-game`

Current completed claim/conventions (copied from the authored section):

Work in ZF, with $\mathcal C$ as in [[def-cantor-sequence-space-for-descriptive-set-theory]]. For $E\subseteq\mathcal C$ and rational $0<v\leq1$, the **rational measure game** starts with current bound v. On each I turn the move is a rational pair $(h_0,h_1)\in[0,1]^2$ satisfying $(h_0+h_1)/2\geq v_{\rm current}$. II then chooses a bit e with $h_e>0$, and the next current bound is h_e. I wins exactly when II's infinite bit sequence belongs to E. Strategies remember the full sequence of pairs and bits, according to [[def-gale-stewart-games-on-pruned-trees]].

Using [[thm-rationals-countable]], fix an enumeration of rational numbers and code pairs by $\langle i,j\rangle=(i+j)(i+j+1)/2+j$. This encodes I moves by naturals; II's legal bit codes are zero and one. The first illegal move loses immediately, regardless of later moves. Thus the payoff on $\mathbb N^{\mathbb N}$ is the union of plays with first illegal II move and wholly legal plays with bit outcome in E.

Every legal position has a legal continuation. I can choose (1,1), and every legal pair has a positive coordinate because the current bound is positive. II can take the least positive coordinate. The next bound remains rational in (0,1], including when it equals one. Thus legal full histories exist by least-code recursion; zero selected coordinates are illegal. A winning coded strategy cannot prescribe a first illegal move on a legal consistent history, since the opponent can always continue legally. Restrict it there and fill inconsistent legal histories with least legal defaults to obtain a legal winning strategy. This definition assumes neither AD nor AC, and asserts no measure exists.

Dependency inputs: `def-cantor-sequence-space-for-descriptive-set-theory`, `def-gale-stewart-games-on-pruned-trees`, `thm-rationals-countable`

Source locators:

- https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — game definition pp393–394 and rational-move paragraph p396; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

Completed argument decisions: Definition and its displayed conventions are complete; no theorem is inferred solely from the definition.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-ad-implies-perfect-set-property-for-sequence-spaces`

Current completed claim/conventions (copied from the authored section):

In ZF+AD every subset of $\mathcal C$, $\mathcal N$ or $\mathbb R$ is at most countable (admits an injection into $\mathbb N$) or contains a compact subspace homeomorphic to $\mathcal C$. In particular every uncountable such set has a nonempty perfect closed subset. No DC is assumed.

Dependency inputs: `def-axiom-of-determinacy-for-natural-number-games`, `lem-perfect-set-game-strategy-dichotomy`, `lem-cantor-and-baire-sequence-coding`, `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`, `thm-ad-implies-countable-choice-for-baire-space`, `thm-of-archimedean`

Source locators:

- https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf — Theorem 10.10(i) and Claims 10.11–10.12, printed pp100–101

Completed argument decisions: 1.1: AD and the coded block-game dichotomy give the alternative on Cantor space. 2.1: Block homeomorphism transfers both alternatives into Baire space and compactness implies closedness. 3.1: A Cantor copy in one coded unit-interval piece transfers into the real set using only ZF coding. 4.1: If all pieces are countable, AD countable-real-choice selects enumeration codes and interleaving enumerates A.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `lem-determinacy-measure-game-inner-outer-comparison`

Current completed claim/conventions (copied from the authored section):

In ZF+DC, for every $E\subseteq\mathcal C$ and rational $0<v\leq1$, a winning I strategy in the rational measure game implies $\nu_{\rm in}(E)\geq v$, and a winning II strategy implies $\nu_{\rm out}(E)\leq v$. The two values are the closed and open envelope values from the dyadic coding lemma.

Dependency inputs: `def-rational-determinacy-measure-game`, `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-recursion`

Source locators:

- https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — complete Lemmas 1–2 pp394–396; nonnegative rational approximation and least-code selection expanded locally; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

Completed argument decisions: 1.1: An I strategy gives nonnegative binary weights with child average at least parent and level sums at least v. 2.1: Decreasing acceptable cylinders give a closed subset of E of measure at least v. 3.1: Nonnegative rational approximation proves the response infima have average at most the current bound. 4.1: Least rational witnesses recursively define consistent II histories for every retained child. 5.1: Weights set to one on excluded nodes bound their level measures by v plus a summable error. 6.1: Increasing excluded cylinders cover E with measure at most v+delta, and rational density removes delta.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `thm-ad-and-dc-imply-lebesgue-measurability`

Current completed claim/conventions (copied from the authored section):

In ZF+AD+DC every subset of $\mathbb R$ is Lebesgue measurable. DC is separately assumed, not deduced from AD; no AC-based determinacy or analytic regularity theorem is used.

Dependency inputs: `def-axiom-of-determinacy-for-natural-number-games`, `def-dependent-choice`, `lem-determinacy-measure-game-inner-outer-comparison`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-of-archimedean`, `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`, `lem-rat-embeds-dense`

Source locators:

- https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — rational-move and AD conclusion p396; complete local real-line transfer from the new dyadic interface; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

Completed argument decisions: 1.1: A rational gap between envelope values contradicts either determined strategy, so dyadic transfer applies. 2.1: Injectivity gives b inverse of b[A] equal A for every unit-interval subset. 3.1: Defined translated unit pieces and sigma-algebra closure give all real subsets measurable.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Authored checkpoint: `fs-every-set-of-reals-is-borel`

Current completed claim/conventions (copied from the authored section):

False assertion: every subset of $\mathbb R$ is Borel.

In ZFC, take an undetermined payoff $A\subseteq\mathbb N^{\mathbb N}$ and the continuous injection $e:\mathbb N^{\mathbb N}\to\mathbb R$ supplied below. The set e[A] is a witness that the assertion fails.

Dependency inputs: `thm-choice-produces-an-undetermined-natural-number-game`, `thm-borel-games-are-determined`, `lem-sequence-spaces-continuously-inject-into-the-real-line`, `lem-countable-borel-hierarchy-exhaustion-and-pullbacks`, `def-axiom-of-choice`

Source locators:

- https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 6.8, p55, and Borel determinacy Theorem 6.9, p56; the continuous injection transfer is proved locally. This is a derived false-statement witness, not an attributed source claim

Completed argument decisions: 1.1: Borelness of the witness image would imply Borelness of its exactly equal preimage A. 2.1: Borel determinacy contradicts the supplied undetermined payoff.

Evidence: the item-specific contract records exact supplier excerpts, their actual uses, every numbered step once, and all eight boundary dispositions. Final structural checks are recorded below; they are not mathematical certification. No outstanding local proof gap identified in this authoring pass. Next action: owning Alpha’s independent authored-content review.

### Step-5 closeout — 2026-09-10

Completed draft authoring for every ID in `phase-2-catchup-24-batch-16.pages.json`: 60 A-page items and 5 B-page items. The per-item checkpoints above are the completed-ID register and record the actual statements, conventions, source locators, dependency inputs and completed derivations. Wrote both pages at `library/foundations/borel-analytic-sets-perfect-sets-and-determinacy.md` and `library/foundations/borel-analytic-sets-perfect-sets-and-determinacy-examples.md`. The main page explicitly connects the promised Vitali scope to the existing published construction and nonmeasurability proof, as required by the reconciled design; no duplicate or narrower replacement theorem was introduced.

**Inputs and scope.** Used this run's manifest, notes, coverage, beta-16 task, Alpha-group mapping (g, covers 14–16), Step-3 verdicts and scaffold review, and current SET-10 design. The task's historical line-number pointer is stale: SET-10 currently starts at line 432. The current reconciled inventory A60/B5 controls, including the real-line perfect-set clause. No missing assigned input remains. Earlier scaffold-status paragraphs above and independent reviews are preserved as historical evidence; they are not Step-5 authoring receipts.

**Mathematical decisions and source evidence.** Borel determinacy uses the taboo-tree construction with total strategy locality, terminal reflection and explicit lifts. The local reachability proof replaces the faulty downward-closure inference; the generated B-page witness is never a supplier. Inverse limits use successive coherent lifts, not unrelated choices at each level. The Borel induction selects from set-sized witness collections, rather than assuming dependent choice on a proper class. Rechecked Martin's author-hosted *Determinacy of Infinitely Long Games*, complete relevant text printed pp64–77 (residual paragraph, covering definitions, Lemmas 2.1.3–2.1.7 and Theorems 2.1.8–2.1.9), and the complete six-page scan of *A Purely Inductive Proof of Borel Determinacy*, pp450–455. The latter's pp451–454 supply the parallel pruned-game construction and successive-lift argument; it is not silently identified with the taboo-game definition. The BLM source's named Lemmas 1–7 and Theorem 5 are recorded per item with the local corrections identified.

Marker's author-hosted notes supply the named hierarchy, coding, analytic, separation, perfect-set, rank and Souslin passages. The local measurable-envelope proof fills the exercise's actual mathematical obligation using finite boxes; merely quoting that exercise was not used as a proof. Hachtman–Palumbo Definition 7.7 and the complete three claims and Theorem 7.8, pp23–24, supply the category-game comparison; Proposition 7.1, p21, supplies context for the explicit least-refinement argument. Lietz Claims 10.11–10.12, pp100–101, support the full-history perfect-set-game proof. Ciesielski Theorems 6.3.6–6.3.8, pp102–103, and Proposition 7.3.1, Theorem 7.3.2 and Corollary 7.3.3, p112, support the Bernstein/Hamel comparison. Martin's measure-game paper was read through its complete mathematical text, pp393–396, with the end/reference page 397. Its rational-move reduction and near-infimum construction are expanded locally; zero infima are handled without proposing negative legal moves. Exact URLs and individual locators are in the item frontmatter and checkpoints.

AD consequences do not consume the AC-based analytic regularity or Borel determinacy theorems. AD supplies only countable choice for Baire-real codes in the category and real-line perfect-set arguments. DC is separately assumed for the measure construction and its completed Lebesgue transfer. The Hamel conclusion concerns the coefficient map and its kernel, not a claim that every Hamel basis is nonmeasurable. Empty/root-only rank zero, code well-foundedness, dyadic endpoints, both strategy bounds, all equivalence directions, and actual nonempty selections are addressed in the completed proofs and boundary worksheets.

**Dependency edits.** Added direct `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` and `lem-rat-embeds-dense` inputs to `thm-ad-and-dc-imply-lebesgue-measurability`; added direct `def-axiom-of-determinacy-for-natural-number-games` to `thm-ad-implies-baire-property`. Updated the owned manifest and item declarations together. These are existing earlier/same-page suppliers, not a scope change. Consumer input `phase-2-catchup-24-batch-16.cross-batch-dependencies.json` remains the accurate empty array: no same-run other-batch supplier is introduced. Ran `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24` after the dependency edits; it refreshed and deduplicated successfully. No plan or workflow-state edits were made.

**Provenance.** Preserved 64 `ai-altered` statements and the one `ai-generated` terminal-taboo counterexample with its counterexample generation role. Proof-bearing arguments are `ai-altered`; definitions retain proof `not-applicable`. No generated statement is a dependency target. Draft files contain no judge or verification stamps after authoring. Proof contracts were written from the actual completed calculations and arguments, then exact supplier excerpts and step numbers were synchronized; scripts did not generate mathematical proofs from strategies.

**Checks actually executed.**

- Explicit-item precheck: `node tools/tsx-run.mjs tools/precheck.mts`, followed by all 65 `items/ID.md` paths from this manifest. Initial full pass found 22 canonical repairs and one untagged step. Adopted canonical numbering, synchronized citations/derivations/boundaries, fixed the display-paragraph tag, and reran after final proof edits: exit 0, **50 checked, 0 failing**. The other 15 entries are definitions without proof bodies.
- `node tools/validate-plan.mjs` alone returned usage, exit 2: this version requires a plan argument. Executed the supported `node tools/validate-plan.mjs research/plan-spec.json` and reran after final dependency edits: exit 0, acyclic consistent page order and no reported item-cycle, forward-reference, B-page-dependency or unresolved-ID errors. It reports advisory redundant-prerequisite warnings, including three for this A page, and notes that 641 repository-wide planned pages have no item lists. No plan was changed to remove those advisories.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-16.pages.json`: final exit 0, **65 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-16.proof-contracts.json --strict`: final exit 0, **65/65 items checked, 0 errors, 0 warnings**. Earlier missing citation-use and stale boundary-reference errors were repaired and the full check rerun.

**Remaining obligations.** No unfinished local argument, missing prerequisite, scope narrowing or removal is proposed in this authoring pass. Independent mathematical review remains the owning Alpha's responsibility; passing format checks is not evidence of mathematical correctness or publication approval. All content remains draft. The next action is review of these authored arguments and their contracts under the existing workflow, without treating this closeout as a judge verdict.
