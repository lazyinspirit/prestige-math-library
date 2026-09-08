# Batch 13 — finite automata and Turing-machine boundary interfaces

Date: 2026-09-08.

Status: **mathematical and source-reading closure complete; no batch-local
blocker remains.**

## Inventory and proof closure

The inventories remain 3/3 for finite automata and 1/2 for the Turing-machine
boundary, nine items total.

For an epsilon-NFA, finite saturation stabilizes by step `|Q|`: every
nonstationary stage strictly enlarges a subset of finite `Q`, and a stationary
stage stays stationary. Word transition is constructed by ordinary
natural-number recursion on `N x P(Q)`, carrying the input position and
freezing after the word length. The subset DFA starts at `ECl({q0})`;
induction proves `mu*(ECl(S),w)=widehat-delta(S,w)`. Starting at unclosed
`S` would fail for the empty word. The full power set is finite and nonempty,
and the empty subset is a legitimate absorbing state.

The Turing-machine interface is definitional and does not import the later
machine/configuration page. It fixes finite state/input/tape alphabets, distinct
start/accept/reject states, a total transition only on nonhalting states, a
right-infinite finite-support tape, and the clamped-left boundary at zero.
Because blank is excluded from the input alphabet, initial tape support equals
the input domain, including empty input.

## Sources read

- Gallier, complete §§3.3–3.5 through Definitions 3.5–3.7, epsilon
  saturation, determinisation, the invariant, and DFA embedding;
- Aho, complete Lecture 3 §§1–2 for an independent full-power-set route;
- Savage, §5.1 through Definition 5.1.1;
- Watrous, Lecture 12 §12.1 through Definition 12.2;
- Sipser/MIT 18.404J Lecture 5 slides 8–10.

Model differences—one versus two halting states, one- versus two-sided tapes,
whether halt-state transitions are syntactically present, and the left boundary
convention—are recorded as variants rather than imported equivalence theorems.

All five retained sources are fetch-verified. The former sole blocker is
resolved. The 127 inherited load-bearing interfaces were already read and the
current closure has no missing, recorded-only, B-page, or forward supplier. No
published content, central plan/ledger, workflow, or engine state was edited.

## Step-3 fix pass

### Stable findings and disposition

There is no batch-13 finding ID to repair or rebut.  The stable group review
`phase-2-wave-1-alpha-g-step3-scaffold-review.md` and the matching verdict
record each mark both owned A pages **sufficient**.  Its two batch-13 reviews
record the exact closure checks: 128 items/46 A pages for the finite-automata
pair and 67 items/45 A pages for the Turing-boundary pair, in each case with no
unresolved ID, cycle, B-page supplier, forward supplier, recorded-only supplier,
or same-frontier supplier.  The owned cross-batch input remains the already
present `[]`: neither pair consumes a different batch in this run.

The finite-automata dependency route remains adequate without a new pair.  The
definition constructs finite epsilon saturation from finite-cardinality
strictness, `thm-subset-of-a-finite-set`, natural-number recursion, and
induction; the subset theorem then uses the earlier total-DFA interface,
extended-DFA-transition theorem, and finite-power-set cardinality.  Its base
case is the required closed-set identity
`mu*(ECl(S), w) = widehat-delta(S, w)`, not the false unclosed-set variant.
The singleton construction is only DFA-to-epsilon-NFA.  The companion items
depend only on that earlier A-page machinery and their displayed finite
witnesses.

The Turing boundary definition uses only the earlier word, function,
natural-number, and finite-set interfaces.  In particular, blank exclusion
gives finite support of the initial tape exactly on the input domain, including
the empty input; distinct start/accept/reject states make the two predicates
disjoint and the initial configuration nonhalting.  The examples instantiate
the full transition domain and make no claim about reachability or computation.
Thus neither pair needs an added A/B prerequisite.

The assigned design and current `plan-spec.json` agree on order, IDs, titles,
categories, companions, and direct `requires` edges.  The plan deliberately
has empty item arrays for these unspliced pages; that is a page-level planning
form accepted by `validate-plan`, while the exact nine-item proof inventory is
held in this batch manifest.  It is not a design/plan conflict or a statement
that the pages have no items.

### Source evidence

The existing harvested source records remain adequate and have no drop or
uncertainty.  The cited source texts support the intended, not merely
name-matched, routes: Gallier §§3.3–3.5 gives epsilon saturation, the extended
set transition, and determinisation; Aho Lecture 3 §§1–2 independently gives
the full-power-set construction; Savage §5.1, Watrous Lecture 12 §12.1, and
MIT 18.404J Lecture 5 slides 8–10 give the raw Turing tuple and boundary
conventions.  The one-/two-sided tape, halting-state-transition, and left-edge
differences are documented source variants, not imported equivalences.

### Changed record and checks

No manifest or coverage repair was licensed because no batch-13 stable finding
exists; this note is the only Step-3 record changed.  The following checks were
run after the review:

- `source-fetch-check --coverage research/phase-2-wave-1-batch-13.coverage.json --stamp`:
  5/5 fetch-verified, 0 newly stamped, 0 drops.
- `coverage-checklist` on the owned coverage: 2 pages, 23 harvested results,
  0 errors and 0 warnings.
- whole-run `manifest-deps`: 434 items, 0 normalized, 0 errors.
- manifest-only `content-policy` on this manifest: 9 scoped items, 0 errors
  and 0 warnings.
- `validate-plan research/plan-spec.json`: exit 0; declared page order is
  acyclic and consistent, with no item cycle, forward reference, B-page
  dependency, or unresolved ID among itemized pages.
- `extcheck --quiet`: exit 0; no external-reference error.  Its 63 warnings are
  existing published recorded-result consequences outside this batch.

Remaining blocker: **none for batch 13**.

## Step-5 authoring

### Checkpoint: def-epsilon-nfa-word-transition

Authored the finite-saturation, leastness, path-equivalence (both directions),
closure-law, and frozen-index word-recursion arguments, including uniqueness
and prefix compatibility. Conventions: tagged epsilon, full subset input, empty
word returns closure. Sources reread via browser: Gallier §§3.3–3.5, printed
pp.27–36; Aho Lecture 3 §§1–2. Local curl could not resolve the hosts and
pdftotext was absent; browser full-text extraction supplied the passages.
Dependencies remain the manifest suppliers; foundational product/Separation
uses are inherited through those interfaces. No choice or later NFA result.
Proof provenance will be ai-altered, replacing the scaffold's not-applicable
because the definition now contains a Verification argument. Mathematical
argument complete; formatting and contracts pending. Next: subset theorem.

Current plan now contains the item arrays (the earlier Step-3 note describing
empty arrays is historical). All four page identities, orders, categories,
requires, companions, and nine promised claims agree with the assignment.
No plan edit is authorized or needed.

### Checkpoint: thm-subset-construction-reachability-invariant

Completed the total full-power-set DFA construction, exact cardinality,
closed-start invariant by length induction, both language inclusions, and
empty-state absorption. Gallier §3.5 pp.33–34 and Aho §2 were reread; the
full-power-set convention follows Aho. All six manifest dependencies are used
at their actual steps. No generated supplier or new dependency. No mathematical
gap; formatting/contracts pending. Next: singleton embedding.

### Checkpoint: prop-deterministic-automata-are-special-nondeterministic-automata

Completed DFA-to-NFA totality, identity epsilon closure, singleton identity by
length induction, and both acceptance implications. Gallier §3.5 p.34 is the
exact source observation, with the complete derivation local. Empty alphabet,
empty/full final set and one-state DFA included. Manifest dependencies retained;
no converse subset theorem used. No mathematical gap. Next: three B witnesses.

### Checkpoint: ex-epsilon-closure-and-word-transition-on-a-three-state-nfa

Completed all nine transition entries and calculations for epsilon, a, aa, ab,
b, aba, followed by the six actual final-set intersections. Gallier Definitions
3.6–3.7 pp.30–32 supplies the rules through the local NFA definition. This is
an ai-generated example statement, never a supplier. No gap. Next: subset table.

### Checkpoint: ex-subset-construction-for-an-epsilon-nfa

Independently restated the NFA; computed all eight reachable-table entries,
reaching words epsilon/a/ab/b, and the induction proving no other reachable
subset. Listed all eight power-set states and distinguished reachable finals
from unreachable final subsets. Aho §2 and the local subset theorem supply the
construction. An explicit induction dependency will be added for the all-words
argument; it is already in the earlier A-page closure. No scope change or gap.
Next: missing-closure counterexample.

### Checkpoint: cex-omitting-epsilon-closure-breaks-determinisation

Completed the four-entry two-state witness. The first variant wrongly rejects
epsilon; the second wrongly rejects a despite the displayed epsilon/a/epsilon
accepting path. Both defective maps remain total DFAs. Source Aho §2 through
the local interfaces. Generated counterexample statement, not a supplier.
No mathematical gap. Next: Turing boundary definition and two examples.

### Checkpoint: def-turing-machine-initial-and-halting-configuration-interface

Completed the raw tuple, set of tapes/configurations, unique piecewise initial
tape, exact support=m in both directions, empty/one-letter/end-cell checks,
disjoint machine-relative outcome predicates and nonhalting initial state.
Sources reread: Savage §5.1 pp.210–211 (through before §5.1.1), Watrous §12.1
pp.120–125 (through yields closure), MIT Lecture 5 slides 8–10. Browser text
recovery succeeded; MIT screenshot failed, so no visual-evidence claim is made.
The needed MIT assertions are legible in text extraction. Source variants,
including Watrous not requiring start distinct from halting states, are explicit.
Product/Separation prerequisites will be made direct in the owned drafts and
manifest for transparent set-formation citations; they already lie in the
existing earlier page closure. No choice, dynamics or equivalence theorem used.
No mathematical gap. Next: empty-input example.

### Checkpoint: ex-initial-configuration-on-empty-input

Completed the entire two-pair transition domain, pointwise all-blank tape
calculation at length zero, empty support, valid zero head coordinate and
nonhalting predicate. Watrous p.122 is compared with the local convention.
The example's statement is generated and never consumed. No gap. Next:
machine-relative predicates example.

### Checkpoint: ex-accepting-and-rejecting-configurations-are-machine-relative

Completed both raw tuples on their identical nonhalting domain; checked the
blank tape and common triple; evaluated all four outcome equalities. The
right-direction tag is typographically distinct from state R. Watrous
Definition 12.1 pp.121–123 supplies the comparison. No reachability asserted.
No mathematical gap. All nine bodies now exist; next: frontmatter, four pages,
exact contracts and required checks.

### Final authoring record

**Completed items (9):**

- `def-epsilon-nfa-word-transition`
- `thm-subset-construction-reachability-invariant`
- `prop-deterministic-automata-are-special-nondeterministic-automata`
- `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa`
- `ex-subset-construction-for-an-epsilon-nfa`
- `cex-omitting-epsilon-closure-breaks-determinisation`
- `def-turing-machine-initial-and-halting-configuration-interface`
- `ex-initial-configuration-on-empty-input`
- `ex-accepting-and-rejecting-configurations-are-machine-relative`

**Completed pages (4), all under `library/computability-theory/`:**

- `finite-automata-transition-and-determinisation-interfaces`
- `finite-automata-transition-and-determinisation-interfaces-examples`
- `turing-machine-configuration-boundary-interface`
- `turing-machine-configuration-boundary-interface-examples`

Every item and page is draft. Each promised construction, assertion and
calculation is included. The definition arguments are in Verification sections,
with actual derivations rather than scaffold strategies. The proof-contract
file was absent and has been created in the format of `tools/proof-contract.mjs`:
48 individually described derivations, 37 exact local-source citation mappings,
and 72 item-specific boundary records. Its inputs spell out the actual tuples,
transition entries and conventions, with the fact and previous-step inputs at
each row. Source excerpts are from the exact Definition or Statement sections
of the current supplier files. These contracts document the proofs; they do not
constitute an independent mathematical review.

**Dependency decisions:** Added `def-cartesian-product` and
`def-axiom-schema-of-separation` to each of the two definition drafts and the
owned manifest, with explicit uses at set-formation steps. Added
`thm-induction-principle` to the reachable-subset example and the owned manifest,
with its use at the all-words induction. The two set suppliers live on
`the-zfc-axioms-and-basic-set-constructions`, already in the relevant prerequisite
closures. Induction's published home is
`library/foundations/construction-of-the-natural-numbers.md`; that page is in
all four prerequisite closures. A plan-only item-home lookup cannot find it
because that published page's plan item array is empty; the actual page was
read to verify the home. All three suppliers are published, earlier, nongenerated
statements, and outside this run. No added page prerequisite or cross-batch edge
is needed. The owned consumer input
`phase-2-wave-1-batch-13.cross-batch-dependencies.json` was atomically maintained
as `[]` after the edits. The unified ledger and central plan were not edited,
in accordance with this dispatch's consumer-input-only authority; aggregate
refresh belongs to the serial lead. No prerequisite closure was expanded.

**Checks actually run:**

- Explicit nine-path `node tools/tsx-run.mjs tools/precheck.mts items/ID.md ...`:
  first run reported 9 failing items (canonical phase repairs, plus the two
  induction proofs requiring their final discharge tags). Adopted the normative
  checker's canonical phase numbering and ordering without changing any
  mathematical argument, added the required final tags, and reran with the same
  nine explicit paths: **9 checked, 0 failing**. The first Python wrapper did not
  propagate the child exit code; its printed failures, not the wrapper's zero,
  were the result. The successful rerun did propagate the exit code. The
  `verification.precheck: pass` fields record this successful local check only.
- Bare `node tools/validate-plan.mjs`: **usage exit 2**, because this tool requires
  an explicit plan path. Corrected invocation
  `node tools/validate-plan.mjs research/plan-spec.json`: **exit 0**; declared
  order acyclic and consistent, with no item-level cycles, forward references,
  B-page dependencies or unresolved IDs among itemized pages. It also printed
  repository-wide redundant-prerequisite warnings and noted unitemized planned
  pages. No plan repairs were made.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-13.pages.json`:
  **9 scoped items, 0 errors, 0 warnings**, including the rerun after canonical
  proof repairs.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-13.proof-contracts.json --strict`:
  **9/9 checked, 0 errors, 0 warnings**, rerun after the inputs were made explicit.
- Additional `node tools/rendercheck.mjs` with the nine explicit item paths and
  four explicit page paths: **13 files pass**, including real KaTeX parsing and
  the renderer's YAML parser.

**Provenance decisions:** The four A-page statements remain `ai-altered` because
these interfaces adapt source models and quantifiers. The four example
statements and the counterexample remain `ai-generated`, with their required
`generation.role`, and none is a dependency target. All nine completed local
arguments are `ai-altered`; the two definitions therefore replace the scaffold's
`proof: not-applicable` with `proof: ai-altered`. No source was dropped, no
recorded-without-proof fallback was used, and no later forward reference was
introduced. All five retained source passages were reread with exact locators
recorded above and in the source-convention sections. No judge, owner audit or
delegated-verification stamp was written; these new items had no stale stamps.

**Unresolved mathematics or scope obligations:** none for this authoring batch.
No promised item, theorem clause, example calculation or page was narrowed or
removed. The pre-existing source-coverage deferrals remain those already
accepted in Step 3. No scope change is proposed to Alpha. The checks above are
structural and citation-accounting evidence, not a claim of independent proof
judgment. Next action is the build driver's ordinary review of these completed
drafts; Step 5 has not advanced workflow state or changed published content.
