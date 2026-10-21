# Batch 88 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta; pair: KT-35  
Batch dependency level: 2; prerequisite batch: 87  
Task scheduling input: `bba46865d8c5cc10deb2f620eb009e7506a242311805020ba44de5de715e51b6`  
Dependency-level input metadata: `68252736dd60dac548ab9afca4cb887fa52a5673e9e4fa8529c113aa43f6a51b`

## Controlling design and conflicts

The controlling design is the complete KT-35 section at
`research/plan-knot-theory-track.md:1032` and `:1034–1059`. It is the current
plan explicitly named by the task. The owner-authoring direction supersedes
stale task/design material; `research/plan-spec.json` agrees on the two page
IDs, titles, category, orders, and page requirements, and its `items: []`
entries are placeholders rather than a competing item inventory.

The plan lists five A-page results and then six local prerequisite modules;
`lem-kz-connection-flatness-and-braid-relations` occurs in both lists. The
assigned manifest contains the five plan results, five distinct plan-listed
prerequisites, three locally required helpers (Morse-tangle composition, the
finite Morse-isotopy decomposition, and long-knot closure/connected-sum
compatibility), and two A-page Conway prerequisites. The
Conway items are necessary because the example uses the Conway coefficient
`a_2`, while no local Conway definition or proof supplier exists in the active
library.

The older `research/knot-theory-planning-2026-10-18/prerequisite-map.md` also
lists `def-completed-chord-kz-and-morse-knot-data`, which the current KT-35 plan
does not list as an A item or local prerequisite module. Its mathematical
notation is stated completely inside the plan-listed
`def-kontsevich-integral-on-parenthesized-braids`. A local
`lem-kontsevich-long-knot-closure-and-connected-sum` helper was added after
proof audit showed that vertical tangle composition alone does not provide the
closed-knot closure identity needed by hump normalization. The old map's
`lem-kontsevich-critical-point-normalization-and-associator`
and the plan-listed `lem-kontsevich-regularization-and-associator-coherence`
are retained as distinct modules: the former proves endpoint regularization and
hump normalization; the latter derives the pentagon and both hexagons directly
from KZ flatness and collision-collar paths. The coherence item has no edge to
the knot-isotopy or associated-graded items because those claims are independent.

The old prerequisite-map entry for `thm-kontsevich-universal-associated-graded-proof`
also bundles weight-system integration and filtered factorization through the
universal series. The current plan assigns the leading-symbol calculation,
finite-type truncation, and full universality to separate results; this carrier
therefore proves only that the degree-`n` singular derivative is the supplied
chord diagram. No rational-coefficient claim is imported.

The older map declares every A module as a direct dependency of both B items.
The current B counterexample uses the batch-87 framed self-linking weight-system
result and the 4T/1T quotient. The worked example uses the Conway coefficient
theorem and the universal truncation; its Conway calculations are explicitly
conditional on a skein function until the existence gap is reconciled. The
batch manifest records these direct claim dependencies; the B page itself still
requires the A page.

The dispatch says level 2 / prerequisite batch 87, matching the dependency
levels JSON row for batch 88 (`requires: ["87"]`). The task's scheduling-input
hash and the dependency-level file's `input_sha256` are different fields and
both are preserved above; neither shared input was edited.

## Item inventory, dependencies, and levels

The manifest item rows are ordered by their computed dependency levels before
carrier authoring. Levels count every supplier item in the active run; an
out-of-run published definition does not raise the level. The scoped closure
includes batch-87 suppliers. The full-run checker also scans unrelated manifests
and can fail on their empty inventories; that is recorded below.

| Level | Item | Home | Direct in-run dependencies | Direct out-of-run dependencies |
|---:|---|---|---|---|
| 1 | `def-conway-polynomial` | A | `def-oriented-crossing-sign-writhe-and-blackboard-framing` (batch 58) | `def-oriented-link-in-s-three-and-ambient-isotopy` |
| 3 | `def-kontsevich-integral-on-parenthesized-braids` | A | `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `def-oriented-crossing-sign-writhe-and-blackboard-framing` (batch 58) | — |
| 4 | `lem-kontsevich-configuration-space-compactification-faces` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87) | — |
| 4 | `lem-kontsevich-morse-isotopy-decomposition` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88) | `def-oriented-link-in-s-three-and-ambient-isotopy`; `def-countable-choice`; `thm-parametric-transversality`; `thm-smooth-inverse-function-theorem-on-manifolds`; `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy` |
| 4 | `lem-kz-connection-flatness-and-braid-relations` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87) | — |
| 4 | `thm-conway-second-coefficient-is-type-two` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-conway-polynomial` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `def-oriented-crossing-sign-writhe-and-blackboard-framing` (batch 58) | — |
| 5 | `lem-kontsevich-configuration-integral-convergence-needle-estimates` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `lem-kontsevich-configuration-space-compactification-faces` (batch 88) | — |
| 6 | `lem-kontsevich-morse-tangle-composition` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `lem-kontsevich-configuration-integral-convergence-needle-estimates` (batch 88) | — |
| 7 | `lem-kontsevich-long-knot-closure-and-connected-sum` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `lem-kontsevich-configuration-space-compactification-faces` (batch 88); `lem-kontsevich-morse-tangle-composition` (batch 88); `def-framed-chord-diagram-and-four-term-relations` (batch 87) | — |
| 8 | `lem-kontsevich-critical-point-normalization-and-associator` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `lem-kontsevich-configuration-space-compactification-faces` (batch 88); `lem-kontsevich-long-knot-closure-and-connected-sum` (batch 88) | — |
| 9 | `cex-knot-kt-35-boundary-case` | B | `def-framed-chord-diagram-and-four-term-relations` (batch 87); `thm-vassiliev-invariant-induces-weight-system` (batch 87) | `def-countable-choice` |
| 9 | `lem-kontsevich-braid-and-knot-isotopy-invariance` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `lem-kz-connection-flatness-and-braid-relations` (batch 88); `lem-kontsevich-configuration-space-compactification-faces` (batch 88); `lem-kontsevich-configuration-integral-convergence-needle-estimates` (batch 88); `lem-kontsevich-critical-point-normalization-and-associator` (batch 88); `lem-kontsevich-morse-isotopy-decomposition` (batch 88); `lem-kontsevich-morse-tangle-composition` (batch 88) | `def-countable-choice`; `def-oriented-reidemeister-moves`; `thm-oriented-reidemeister-equivalence-theorem`; `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy`; `def-markov-conjugation-and-stabilization-moves`; `def-closure-of-a-geometric-braid`; `lem-markov-moves-preserve-oriented-closure-isotopy` |
| 9 | `lem-kontsevich-regularization-and-associator-coherence` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `lem-kz-connection-flatness-and-braid-relations` (batch 88); `lem-kontsevich-configuration-space-compactification-faces` (batch 88); `lem-kontsevich-morse-tangle-composition` (batch 88); `lem-kontsevich-critical-point-normalization-and-associator` (batch 88) | — |
| 10 | `thm-kontsevich-universal-associated-graded-proof` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `def-oriented-crossing-sign-writhe-and-blackboard-framing` (batch 58); `lem-kontsevich-configuration-integral-convergence-needle-estimates` (batch 88); `lem-kontsevich-braid-and-knot-isotopy-invariance` (batch 88) | `def-countable-choice` |
| 11 | `lem-kontsevich-integral-finite-type-truncation` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `lem-kontsevich-braid-and-knot-isotopy-invariance` (batch 88); `thm-kontsevich-universal-associated-graded-proof` (batch 88) | `def-countable-choice` |
| 12 | `thm-kontsevich-integral-is-universal` | A | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-singular-knot-and-vassiliev-derivative` (batch 87); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `thm-vassiliev-invariant-induces-weight-system` (batch 87); `thm-kontsevich-universal-associated-graded-proof` (batch 88); `lem-kontsevich-braid-and-knot-isotopy-invariance` (batch 88); `lem-kontsevich-integral-finite-type-truncation` (batch 88) | `def-countable-choice` |
| 13 | `ex-knot-kt-35-worked-cases` | B | `def-kontsevich-integral-on-parenthesized-braids` (batch 88); `def-conway-polynomial` (batch 88); `def-framed-chord-diagram-and-four-term-relations` (batch 87); `thm-conway-second-coefficient-is-type-two` (batch 88); `thm-kontsevich-integral-is-universal` (batch 88) | `def-countable-choice` |

Each fixed-degree configuration sum and the local leading-symbol calculation
are choice-free. The knot-type invariance, finite-type truncation on knot types,
universality, and framed self-linking witness explicitly carry $\mathrm{AC}_\omega$
through their suppliers. The B counterexample uses the batch-87 framed
self-linking weight-system theorem and does not assert knot separation.

## Supplier inspection and source reading

- Actual batch-87 A-page carrier `library/knot-theory/vassiliev-invariants-and-chord-diagrams.md` and its frontmatter-only examples companion were read. The A page requires `crossing-signs-writhe-and-linking-number`; KT-35's assigned page requirement is the actual A page `vassiliev-invariants-and-chord-diagrams`.
- Actual batch-87 supplier bodies `items/def-singular-knot-and-vassiliev-derivative.md`, `items/def-framed-chord-diagram-and-four-term-relations.md`, and `items/thm-vassiliev-invariant-induces-weight-system.md` were read. The singular-knot supplier defines the finite difference as the alternating resolution sum; its unframed clause is choice-free, while its framed normal-section clause is explicitly under `AC_\omega`. The chord-diagram supplier defines the common 4T quotient and adds 1T only in the unframed quotient. Its 4T convention fixes the moving endpoint and alternating signs. No KT-35 proof uses the batch-87 weight-system theorem as a premise for its own replacement.
- Also inspected actual published prerequisite `items/def-oriented-link-in-s-three-and-ambient-isotopy.md` for the smooth oriented link and ambient-isotopy conventions, and current-run supplier `items/def-oriented-crossing-sign-writhe-and-blackboard-framing.md` for the oriented projection-plane determinant and positive Artin half-twist sign. These conventions agree with the Kontsevich sign `(-1)^{\downarrow}` and the positive half-twist normalization in the sources.
- S. Chmutov, S. Duzhin, and J. Mostovoy, *Introduction to Vassiliev Knot Invariants*, full PDF `https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf`: read §2.3, printed pp. 35–37; §§8.2, 8.5–8.8, printed pp. 223–240; §10.1, printed pp. 269–277; §10.4, printed pp. 304–308; and §13.4.3, printed pp. 392–394. The complete arguments read include the iterated-integral definition, convergence estimate, Stokes/4T/Arnold-identity horizontal invariance, critical-point needle estimate and hump normalization, associated-graded local crossing calculation, filtered recovery, KZ endpoint regularization, and associator equations. Source proof details are rewritten locally; diagrams in the source are not used as proof.
- D. Bar-Natan and A. Stoimenow, “The Fundamental Theorem of Vassiliev Invariants,” full 30-page PDF `https://arxiv.org/pdf/q-alg/9702009v1`: read §2.3–2.6, PDF pp. 10–16. It supplies the algebra-valued connection/holonomy and KZ normalization and sketches convergence, needle estimates, normalization, and the leading-symbol argument. Its text labels the estimates as sketches; those sketches are not treated as completed proofs.
- T. Q. T. Le and J. Murakami, “The Universal Vassiliev–Kontsevich Invariant for Framed Oriented Links,” full 20-page PDF `https://letu.math.gatech.edu/Papers/UN_PAPER.pdf`: read the associator equations and rationality discussion, pp. 6–11. The paper states Drinfeld's existence of a rational associator as an external theorem and outlines, rather than completes, its second analytic proof of tangle invariance. No rational-coefficient assertion or citation-only proof is imported into KT-35.
- S. Chmutov, M. Cap Khoury, and A. Rossi, “Polyak–Viro Formulas for Coefficients of the Conway Polynomial,” full text `https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf`, §3.4–4.2, PDF pp. 4–8. Read the arrow-diagram definition, Conway skein matching, and descending-diagram induction. This proves the coefficient formula assuming the Conway polynomial is already defined; the source does not prove existence of the Conway polynomial from the skein axioms.
- T. Garaev, “Elementary proof of existence of the Alexander-Conway polynomial,” full 9-page PDF `https://arxiv.org/pdf/2012.03086`, §§1–4, PDF pp. 1–9. The complete coefficient-extension construction and its R1/R2/R3 discussion were read, including Figures 1–6. The source supplies a candidate local existence route, but I have not independently verified the R3 crossing-change correspondence in its coefficient-extension argument well enough to reproduce it as a local proof. It is retained as a retrieved alternative and no completed supplier or existence proof is claimed. No retrieval failed and no source is dropped.

These source files were retrieved into `/tmp` and the relevant full-text passages were inspected. `source-fetch-check --stamp` remains to be run after the batch-88 source-coverage file is authored. No retrieval failure occurred and no source has been marked dropped.

## Current mathematical blocker and next actions

### Item checkpoint: `def-kontsevich-integral-on-parenthesized-braids`

Authored the complete interface for strict Morse presentations, the framed
4T-only strand/chord algebra, the unframed 4T+1T completion, the degreewise
configuration integral, parenthesized KZ holonomy, tangential endpoint
regularization, and hump normalization. It uses `def-singular-knot-and-vassiliev-derivative`
and `def-framed-chord-diagram-and-four-term-relations` as direct external
suppliers; both actual bodies were inspected, including the choice-free
unframed branch and the 4T/1T convention. The definition has
`dependency_level: 3` and declares the convergence lemma as its sole
`justified_by` result; hump invariance is proved as a property, not a condition
for defining the series. The positive Artin half-twist convention
was checked against the actual crossing-sign supplier. No proof or acceptance
is claimed for that convergence obligation yet. The statement is
hyperlink-free through the complete Definition section; references follow in
their own paragraphs. Its TikZ braid convention is spelled out in adjacent
prose and no later proof relies on it. Scoped render/proof-layout checks remain
pending final edits.

### Item checkpoint: `def-conway-polynomial`

Authored the exact normalization and skein interface on oriented link types,
including the coefficient notation used by the planned example. The direct
external interface is `def-oriented-link-in-s-three-and-ambient-isotopy`,
whose actual published body was inspected; the definition also depends on the in-run crossing-sign supplier, so its computed level is 1. The statement is
hyperlink-free and references follow it. The complete textbook passage at
Chmutov–Duzhin–Mostovoy §2.3, printed pp. 35–37, explicitly says that existence
of a Conway invariant from these axioms is nontrivial and does not prove it.
The Polyak–Viro paper's §4.2 uses the polynomial as already defined. Therefore
this definition has an unresolved well-definedness prerequisite and will be
recorded `escalated`; no existence or acceptance is claimed. Its proposed
supplier is `thm-conway-polynomial-skein-existence-and-uniqueness` on the A
page. No choice axiom has been introduced into this unframed definition.

At this checkpoint the next actions were to finish the configuration-face
module and author conditional Conway coefficient consequences. Those carriers
are now present; the Conway existence issue is recorded below.

### Item checkpoint: `lem-kz-connection-flatness-and-braid-relations`

Proved the flatness equations $d\Omega_q=0$ and $\Omega_q\wedge\Omega_q=0$.
The calculation groups the expansion by the support of two chord generators:
repeated pairs vanish by wedge antisymmetry, disjoint pairs commute, and each
three-strand contribution is a commutator multiple of Arnold's explicitly
verified 2-form identity. A degreewise homotopy-variation calculation then
proves path-transport invariance; disjoint-support motions and a collision-free
three-point half-turn give the braid relations. Direct dependencies are
`def-kontsevich-integral-on-parenthesized-braids` (in-run, level 3), plus the
actual inspected batch-87 singular-knot and framed-chord-diagram definitions;
the item is level 4. The proof remains choice-free and uses the fixed positive
Artin convention. Full source reasoning read: Chmutov–Duzhin–Mostovoy,
§10.1.1–10.1.4, printed pp. 269–273, and Bar-Natan–Stoimenow, §2.3–2.4, PDF
pp. 10–12. The precheck first proposed rephasing its steps; that canonical
rephase was adopted, the range citation was corrected to `steps 2.1–3.1`, and
the final scoped precheck passed (1 checked, 0 failed). The source-fetch stamp
and final proof-layout check remain pending. No unresolved mathematical gap
was found in this item.

### Item checkpoint: `lem-kontsevich-configuration-space-compactification-faces`

The statement gives the finite-degree compactified cell, its exhaustive face
types, branch-map extension, and face-orientation convention. The proof first
partitions by critical levels into products of simplices, then resolves
endpoint collision diagonals by real oriented blow-up with nested-cluster
coordinates; no diagram is used as proof. Direct dependencies are the
Kontsevich integral definition and the actual batch-87 smooth-knot and
chord-endpoint definitions; its in-run level is 4. Full-text source passages
read: Chmutov–Duzhin–Mostovoy §8.2, printed pp. 223–225, for the chambered
ordered simplex, and Bar-Natan–Stoimenow §2.5–2.5.2, PDF pp. 12–14, for the
pairing domain and boundary strata. The latter's convergence estimates remain
source sketches and are not used here. Scoped precheck passed (1 checked, 0
failed). Final proof-layout, source-fetch stamp, and contract generation remain
pending. No missing supplier or axiom branch was found.

### Item checkpoint: `lem-kontsevich-configuration-integral-convergence-needle-estimates`

The statement covers absolute convergence in each fixed degree and the
uniform $O(\varepsilon)$ bound for fixed-degree terms meeting a critical
needle. The proof uses the Morse expansion $z_+(s)-z_-(s)=2as+O(s^2)$,
isolated-chord 1T vanishing, and an explicit nested integral bound
$\int_0^\varepsilon(d\delta_1/\delta_1)\cdots(d\delta_k/\delta_k)\delta_k
=\varepsilon$; long endpoint choices on a narrow needle cancel with opposite
orientation signs. Its direct suppliers are the K integral definition,
batch-87 singular-knot and framed-chord definitions, and the level-cell
compactification lemma; computed in-run level is 5 after extending the claim to Morse tangles. The source passages read in
full are Chmutov–Duzhin–Mostovoy §8.5, printed pp. 230–232, and
Bar-Natan–Stoimenow §§2.5.1 and 2.5.3, PDF pp. 13–15. The latter's estimate is
only a sketch; the local proof supplies the nested integral bound explicitly.
The scoped precheck initially proposed a rephase; the phase numbering was
repaired to one tagged paragraph per phase and the final check passed (1
checked, 0 failed). The final proof-layout and source-fetch stamp remain
pending. No choice axiom or missing mathematical supplier was found for this
unframed estimate.

At this checkpoint the next supplier was the Morse-tangle composition lemma. It was subsequently authored at computed level 6; see the current inventory and item update below.

The Conway polynomial is not yet established as a well-defined object in the active local library. Chmutov–Duzhin–Mostovoy §2.3 says existence from the skein axioms is nontrivial and does not prove it; Polyak–Viro §4.2 assumes the polynomial exists. Garaev's full 9-page construction was retrieved and read, but its R3 local correspondence in the recursive coefficient-extension proof remains unverified in this authoring pass. I therefore do not claim that `thm-conway-polynomial-skein-existence-and-uniqueness` has been supplied. The exact interface `def-conway-polynomial`, the conditional coefficient theorem, and the conditional worked example remain in the inventory; the definition and its planned consumers will be escalated with the unresolved supplier ID, required hypotheses and exact source locators. No source is classified as unavailable or dropped.

The active `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19/status.md` records the run at `1-scaffold`, with batch 88 in flight and the global owner repair/recertification blocker. The dispatched `status` command produced no stdout; the on-disk recomputed status was read. No runtime state, shared plan, verdict, or published content was changed.

Next: finish source coverage, proof contracts, cross-batch evidence and Step-1 readiness records; run the final scoped validators and proof-layout on every explicitly changed item. The unresolved Conway existence obligation remains escalated.

## Authoring updates after the initial checkpoint

- `lem-kontsevich-regularization-and-associator-coherence` now states the
  pentagon, both positive hexagons, and their inverse equations. The proof
  identifies all five parenthesizations and derives the identities from flatness
  and tangential endpoint limits. Direct dependencies are the KZ definition,
  framed 4T diagrams, KZ flatness, compactification faces, tangle composition,
  and the critical-point normalization result; computed level 9. Full source
  passages inspected: Chmutov–Duzhin–Mostovoy §§10.1.5–10.1.7 and 10.4.1,
  printed pp. 273–277 and 304–308; Le–Murakami §4, PDF pp. 6–7. The cited source
  lists the identities but does not prove them; the local path argument supplies
  the proof. Scoped precheck passes. Final `proof-layout` and contract generation
  remain pending.
- `lem-kontsevich-integral-finite-type-truncation` projects the
  associated-graded theorem at orders `n+1` and `n`. The first projection proves
  type at most `n`; the second proves identity symbol in degree `n`. It assumes
  $\\mathrm{AC}_\\omega$ only through knot-isotopy invariance. Direct item
  dependencies are the integral definition, singular-knot and chord-diagram
  definitions, countable choice, knot-isotopy invariance, and the
  associated-graded theorem; computed level 11. Full supporting sections read:
  Chmutov–Duzhin–Mostovoy §8.8.1 and Bar–Natan–Stoimenow §2.6. Scoped precheck
  passes; proof-layout and contract remain pending.
- `thm-kontsevich-integral-is-universal` gives a descending induction through
  the finite-type filtration and constructs the recovery functional on degrees
  `0..n`; its top-degree component is the symbol weight system. It also proves
  surjectivity from complex-valued finite-type invariants onto the complexified
  weight-system space, hence lifts every rational weight system to a
  complex-valued invariant. It does **not** assert that such lifts are
  rational-valued, because no rationality theorem for the KZ coefficients is
  included in KT-35. This is the explicit interpretation of the plan's
  “surjective over Q” language as a Q-linear map with complex output. If the
  controlling phrase requires rational-valued lifts, the rational-associator
  supplier and proof remain missing, so this theorem is escalated for owner
  reconciliation. Direct dependencies
  include the batch-87 weight-system theorem, the leading-symbol and
  finite-type-truncation carriers, and knot-isotopy invariance; computed level
  12. Scoped precheck passes; proof-layout and contract remain pending.
- `cex-knot-kt-35-boundary-case` proves the framed degree-one self-linking
  weight system has value `2` on the isolated one-chord diagram, while 1T kills
  that diagram in the unframed quotient. Its axiom branch is
  $\\mathrm{AC}_\\omega$ through batch-87's self-linking theorem. Its direct
  batch-87 suppliers are the framed chord definition and weight-system theorem;
  computed level 9. The algebraic contradiction is complete and scoped precheck
  passes.
- `ex-knot-kt-35-worked-cases` computes the two-component unlink to zero from a
  kink skein triple, the positive Hopf link to `z`, and the positive trefoil to
  `1+z^2`; it then identifies the universal recovery functional as the degree-2
  symbol plus the degree-zero correction fixed by the unknot. Its claim is
  conditional on a Conway skein function; computed level 13. Scoped precheck's
  canonical phase reindexing was adopted, and the final precheck passes.
- Frontmatter-only A/B pages were created in `library/knot-theory/`; no page
  summary was added. The A inventory follows ascending item levels, and the B
  page lists the two leaf items as examples. The batch-88 manifest rows now
  match direct item dependencies and computed levels. The scoped closure contains
  30 items and has no dependency-level errors.

## Unresolved Conway well-definedness obligation

The assigned `def-conway-polynomial` statement specifies the conventional
normalization and skein relation, but no locally verified existence/uniqueness
proof is present in the active library. Chmutov–Duzhin–Mostovoy §2.3, printed
pp. 35–37, says existence is nontrivial and does not prove it; the Polyak–Viro
paper §4.2, PDF pp. 6–8, assumes the polynomial is already defined. I searched
for a construction and retrieved T. Garaev's complete 9-page paper,
`https://arxiv.org/pdf/2012.03086`, §§1–4. I read the coefficient-extension
construction and the R1/R2/R3 invariance section, including the local figures.
The paper's recursive construction is a plausible supplier, but I could not
independently verify the R3 crossing-correspondence argument well enough to
reproduce it without a gap. No claim of source failure or of a defective
published theorem is made. Proposed local supplier and placement:
`thm-conway-polynomial-skein-existence-and-uniqueness` on the assigned A page,
with a complete proof of coefficient extension, choice handling, and all three
Reidemeister cases. The affected consumers are `def-conway-polynomial`,
`thm-conway-second-coefficient-is-type-two`, and
`ex-knot-kt-35-worked-cases`; the latter two remain explicitly conditional on a
Conway skein function. These items will be marked `escalated` until the supplier
is locally proved or an owner-provided proof interface is reconciled.

## Final authoring checkpoint: normalization and evidence

The hump convention is the one in the controlling source: `H` is the
four-critical-point unknot with two local maxima, obtained by inserting one
maximum-minimum pair into the two-critical-point unknot `U`. The complete
Chmutov–Duzhin–Mostovoy passages at §8.2.2, printed pp. 225–226, and §8.7.2,
pp. 238–239, explicitly use one factor `Z(H)` per maximum. The proof in
`lem-kontsevich-critical-point-normalization-and-associator` uses the explicit
one-in one-out tangle closure and connected-sum supplier to derive the hump
factor. A full-source recheck confirmed the original four-critical definition
of `H`; the earlier isolated-chord objection was based on an incorrect reading
of the source's `H`. A separate audit then found that vertical tangle
composition alone did not justify the closed-knot identity, so
`lem-kontsevich-long-knot-closure-and-connected-sum` was added and its proof
states the missing closure map, cap terms, far-return-strand estimate, and
stacking-to-connected-sum argument. The critical-point item now directly
depends on the KZ definition, compactification faces, and this closure result.
Both items remain drafts pending their final scoped checks and Step-1 decisions.

The associated-graded proof now cites the batch-87 chord-diagram definition in
its final degree step when passing the local diagram to the unframed 4T+1T
quotient. Proof-contract exact supplier excerpts were regenerated for the
assigned batch after the final KZ definition text; all 17 items are in scope.
The batch-88 source-coverage inventory contains six full-text sources, 36
harvested results with dispositions, and no retrieval failures or drops.
`source-fetch-check --stamp` returned 6/6 verified and resolved, exit 0; the
coverage checklist with required destinations returned 0 errors and 0 warnings.

The Conway existence/uniqueness item remains unresolved. The full Garaev paper,
§§1–4, PDF pp. 1–9, was fetched and read, but the R3 crossing-correspondence
argument has not been independently reconstructed. The source remains
`deferred` to `owner-decision`, not dropped; the proposed supplier and affected
items are recorded in the preceding blocker section. The Le–Murakami rationality
discussion invokes Drinfeld's rational-associator existence theorem externally;
the current universality carrier claims complex-valued lifts and makes no
rational-coefficient claim, consistent with the explicit scope recorded above.



## Item checkpoint: `lem-kontsevich-long-knot-closure-and-connected-sum`

Added this A-page helper after auditing the hump-normalization proof. Its
statement defines the one-in one-out tangle closure, the circle-diagram closure
map, and connected-sum multiplication. The proof establishes horizontal
deformation invariance by Stokes on compactified chambers, 4T cancellation,
and Arnold's three-form identity; kills the two isolated-cap contributions by 1T; sends
all terms meeting the far return strand to zero with an explicit $O(R^{-1})$
bound; and identifies closure of a stack with connected-sum multiplication.
The item is level 7 with direct suppliers the Kontsevich integral definition,
configuration-space compactification, tangle composition, and the batch-87
4T/1T definition. Full supporting source passages are CDM §§8.4.1–8.4.2 and
8.7.1, BNS §2.5.2, and Le–Murakami §3. Final proof-layout, proof-contract,
render, precheck, and scoped dependency checks pass for the final version.

## Final scoped validation and readiness handoff

- `node tools/proof-layout.mjs` on all 17 assigned carriers: 17 items, 76
  proof steps, 0 defects.
- Scoped `tools/precheck.mts`: 15 proof-bearing items checked, 0 failures.
- Scoped `rendercheck.mjs`: all 17 item carriers and both YAML-only page files
  parsed; no rendering errors.
- Strict batch-88 proof contracts: all 17 items checked, 0 errors, 0 warnings.
- Coverage checklist with required destinations: 1 A page, 36 harvested
  results, 0 errors, 0 warnings. Final `source-fetch-check --stamp` recheck:
  6/6 sources verified and resolved, 0 newly stamped, 0 drops.
- Scoped dependency closure: 30 transitive items, including all 17 batch-88
  items; 0 dependency errors and 0 declared/computed level mismatches.

The full-run item-dependency check cannot close the global snapshot: other
owners' manifests include empty A/B inventories, repeated inverse-problem item
IDs, stale inverse-problem levels, `cex-knot-kt-21-boundary-case` without a
level, and stale KT-40/KT-50 levels. The full batch-dependency check stops at
the repeated item `cex-ip-continuous-time-frequency-aliasing`. These are outside
batch 88 and were left untouched.

The only unresolved mathematical items for this pair are the Conway
well-definedness chain and the possible rational-valued interpretation of the
plan's “surjective over Q” statement. Proposed Step-1 outcomes, pending native
recording, are:

| Decision | Items | Evidence or exact blocker |
|---|---|---|
| Ready | `def-kontsevich-integral-on-parenthesized-braids`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-morse-isotopy-decomposition`, `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-morse-tangle-composition`, `lem-kontsevich-long-knot-closure-and-connected-sum`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `lem-kontsevich-regularization-and-associator-coherence`, `thm-kontsevich-universal-associated-graded-proof`, `lem-kontsevich-integral-finite-type-truncation`, `cex-knot-kt-35-boundary-case` | Direct suppliers inspected; proofs, placement, exact contracts, page inventory, scoped layout and rendering checks complete. No acceptance or publication is claimed. |
| Escalated | `def-conway-polynomial`, `thm-conway-second-coefficient-is-type-two`, `ex-knot-kt-35-worked-cases` | Missing local `thm-conway-polynomial-skein-existence-and-uniqueness`; Garaev §§1–4, PDF pp. 1–9 was fully read, but its R3 crossing-correspondence argument is not reconstructed without a gap. The two consumers remain conditional. |
| Escalated | `thm-kontsevich-integral-is-universal`, `ex-knot-kt-35-worked-cases` | The current theorem proves surjectivity as a Q-linear map with complex output. If the plan requires rational-valued lifts, the local supplier `lem-kontsevich-rational-associator-existence-and-rationality` is missing; Le–Murakami §8 states Drinfeld's theorem as an external input. |

The proposed rationality supplier belongs on the assigned A page before the
universality theorem; it must supply rational-associator existence and prove
that the normalized knot series has rational coefficients. The open plan
interpretation affects `thm-kontsevich-integral-is-universal` and its worked
example consumer, not the already-proved complex-valued recovery argument.

No batch-88 Step-1 JSON records were written. The required command
`node tools/step1-decisions.mjs record` was attempted without `--owner` for
`def-kontsevich-integral-on-parenthesized-braids`, but `loadStep3` fails before
item scope with `Duplicate item cex-ip-continuous-time-frequency-aliasing` in
another run manifest. The duplicate belongs outside batch 88, so it was not
repaired here and no readiness record was synthesized around the failed
snapshot.

The fresh autopilot status recomputation reports the run at `1-scaffold`, 53/109
pages covered, nothing currently running, and the existing global owner repair
and recertification blocker. The checked-out HEAD is
`50139bdcb6` (`Defer compact construction artifact scans until author drain`).
The on-disk `status.md` is older and was not used as current evidence. No
autopilot state, verdict, shared plan, or published content was edited.
