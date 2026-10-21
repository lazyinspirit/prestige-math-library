# Batch 106 authoring notes — Open questions in knot polynomials and surgery

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `106` · scheduled dependency level `9` · prerequisite batches `82`, `87`, `99`  
Scheduling input SHA-256: `a027c237a267f58a993feefbeb574159b4021b36f4b477b433b88b801b2c6fdc`  
Owner direction: `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`  
Manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-106.pages.json`

## Scope and plan reconciliation

The owner direction controls draft-only authoring, complete statements followed
by reference sections, frontmatter-only A/B pages, and the nonlogical status
remark. The KT-51 design in `research/plan-knot-theory-track.md` at the assigned
locations (lines 1568 and 1570) controls the topic: record the Jones unknot-
detection history and the Carmi–Cohen v1 claim with its unverified proof scope;
do not duplicate A-polynomial questions owned by KT-20. The matching
`plan-spec.json` entry agrees on page IDs, titles, category, order, and page
prerequisites. Its empty item arrays are the pre-authoring scaffold, not a
conflicting deletion instruction.

The planning registration delta proposed lower levels for the two A-polynomial
definitions than the current batch-99 manifest: the active levels are 8 for
`def-knot-a-polynomial` and 9 for `def-enhanced-a-polynomial`. The status remark
therefore has level 10, one above its highest in-run supplier. The B item
originally drafted as a counterexample was a true methodological warning; the
final B counterexample instead refutes the false extension of the nontrivial-
knot coefficient claim to the unknot, and retains that warning separately.

The A page contains three items and the B page contains two, within the 100-item
page cap. Both page carriers contain YAML frontmatter only and have empty
Markdown bodies. The engine has not yet set `page_layout: compact-v1`.

## Item inventory, claims, dependencies, and proof routes

### `lem-jones-vassiliev-basis-decomposition` — level 0

For `p=x-x^{-1}`, every integer Laurent polynomial has a unique form
`a(p)+b(p)x`. The proof identifies `Z[p][X]/(X^2-pX-1)` with
`Z[x,x^{-1}]`; monic division by the quadratic gives the unique degree-at-most-
one representative. Its five direct suppliers are the polynomial-ring
construction, the polynomial-ring commutative-ring theorem, generated/principal
ideals, quotient rings, and monic polynomial division. These are published
algebra suppliers outside this run. The construction is choice-free. Sources:
Carmi–Cohen v1, Lemma 3.1 and Appendix B.1; Neil Donaldson, Math 120B Notes,
Section 22. Their URLs, locators, dispositions, and fetch stamps are in the
batch source-coverage file.

### `def-jones-vassiliev-coefficient-vectors` — level 5

Defines `f_q(K)=(a_q(K),b_q(K))^T` from the unique finite Laurent expansion in
`p=x-x^{-1}`, with `x=t^(1/2)` and library convention `t=A^-4`. It states the
link normalization and skein convention and does not assert that the
coordinates are finite-type invariants. Direct dependencies are full AC,
the choice-free unframed singular-knot/Vassiliev interface, the Jones
specialization definition, the level-0 Laurent-basis lemma, and the batch-82
level-4 bracket/Jones comparison. Full AC is inherited through Jones
invariance; the coefficient decomposition itself is finite and choice-free.
Sources: Carmi–Cohen v1 §1.3 and Lemma 3.1; Kauffman 2022 §2; Roberts,
*Knots Knotes* §§4.3–4.4; Bar-Natan–Stoimenow §1.1.

### `rem-jones-polynomial-unknot-detection-status` — level 10

A terminal nonlogical remark defines its knot, regular-diagram, crossing-number,
Jones normalization, and coefficient-vector notation. It records Roberts's
1999 historical conjecture and Carmi–Cohen v1's submitted 2026-06-21 claim that
every nontrivial knot has a nonzero `f_q` for some `2 <= q <= 3c(K)` and that
`V_K=1` implies the unknot. It explicitly asserts neither independent proof
validation nor definitive current open status. It records that the numerical
bound `B_aux <= B_host+12` agrees arithmetically with `kappa_mach=11` because
the descent uses `r+1`, while the exceptional-state collapse, smoothing proxy,
and two-machine locality in Proposition 5.12 still need diagram-level audit.

Direct dependencies: AC; AC_omega; crossing number; enhanced A-polynomial;
framed chord diagrams/four-term relation; coefficient-vector definition;
Kauffman bracket; ordinary A-polynomial; and unframed singular-knot
finite-difference definition. The current batch-99 ordinary and enhanced
A-polynomial definition bodies are present and were inspected. Their declared
hypothesis is full AC; the enhanced definition removes reducible characters and
recovers the ordinary polynomial by adjoining the abelian `L-1` factor. These
interfaces are draft definitions, not accepted results. Both are recorded in
the cross-batch input. The enhanced supplier's final reference line is
malformed: `items/def-enhanced-a-polynomial.md` ends its Ni–Zhang Markdown link
with `...1712.04012"` and lacks the closing `)`. This pair did not edit the
other batch's carrier; the defect is disclosed for owner reconciliation.

Sources: Carmi–Cohen v1, Theorems 6.8–6.9 and Proposition 5.12; Roberts,
*Knots Knotes* §4.4.8; Kauffman 2022 §2. Their exact locators and dispositions
are recorded in source coverage. The reported theorem remains unvalidated; the
item's wording preserves that boundary.

### `ex-knot-kt-51-worked-cases` — level 6

For the positive closure of `sigma_1^3`, the eight-state bracket sum gives
`V_T(t)=t+t^3-t^4`. The recurrence from `x^2=px+1` gives
`f_2(T)=(-3,0)^T`. The proof groups states by number of B-smoothings, applies
the Temperley–Lieb local relation and closure, normalizes by writhe three, then
lists the recurrence rows needed for `x^2`, `x^6`, and `x^8`. It reports the
general Carmi–Cohen claims without using them as premises. Direct dependencies
include the bracket/Jones suppliers (levels 0 and 4), unframed singular-knot
interface (level 1), crossing-number supplier, crossing-sign supplier,
braid/smoothing suppliers, Temperley–Lieb closure/local-relation suppliers, and
the level-5 coefficient definition; hence level 6. Full AC and AC_omega are
recorded separately. The finite state and Laurent calculations are
choice-free. Sources: Carmi–Cohen v1 §§1.3, 3, 6.2–6.3; Kauffman 2022 §2;
Roberts §§4.3–4.4; Bar-Natan–Stoimenow §1.1.

### `cex-knot-kt-51-boundary-case` — level 6

The false universal extension asks for a nonzero `f_q` with
`2 <= q <= 3c(K)` for every knot, including the unknot. The crossing-free
unknot has `V_U=1`, all positive-order coefficient vectors zero, and `c(U)=0`,
so the interval is empty. The DOI/journal-metadata warning is retained in a
separate remark and is not used to evaluate the paper's mathematics. Direct
dependencies are AC; AC_omega; crossing number; coefficient-vector definition;
Kauffman bracket; and the choice-free unframed singular-knot interface. The
level-5 coefficient definition is the highest in-run dependency, so this item
is level 6. Its finite boundary computation is choice-free after the declared
Jones/crossing-number interfaces. Sources: Carmi–Cohen v1 Theorem 6.8 and
Roberts §4.4.8.

## Cross-batch evidence and source history

`batch-106.cross-batch-dependencies.json` contains 20 reviewed edges: 3 page
edges to batches 82, 87, and 99, and 17 item edges. Item suppliers span batches
82, 87, 99, 105, and 58. Each row records the current supplier path, status,
hash, and an excerpt from the actual current body or page inventory. A local
edge audit matched all 20 rows to the active page/item dependency declarations:
18 are verified and the two A-polynomial item edges to the status remark remain
open because their batch-99 dependency metadata fails the scoped backward-
justification check. The transitive chain also reaches
`def-sl-two-character-variety-and-peripheral-eigenvalues`, whose justification
edge is structurally backward.

The exact scoped `depcheck` findings are: (1)
`def-enhanced-a-polynomial` lists `def-knot-a-polynomial` in `justified_by`,
but the ordinary definition does not depend on the enhanced definition; (2)
`def-knot-a-polynomial` lists
`lem-knot-boundary-eigenvalue-locus-defined-over-q` in `justified_by`, but
that lemma does not depend on the definition; (3) the same failure holds for
`lem-laurent-algebraic-curve-has-principal-equation`; and (4)
`def-sl-two-character-variety-and-peripheral-eigenvalues` lists
`thm-invariant-ring-finite-generation-and-affine-categorical-quotient` in
`justified_by`, but that theorem does not depend on the definition. The
supplier bodies are present, but the required correction belongs to batch 99
and remains for owner reconciliation; this pair did not alter those carriers.

The source registries are `batch-106.coverage.json` and
`batch-106.source-coverage.json`. They preserve URLs, full-text locators,
supported items, and per-result dispositions. Included sources are Carmi–Cohen
v1; Roberts's complete lecture notes; Kauffman's complete paper;
Bar-Natan–Stoimenow; and Donaldson's Section 22 notes for the Laurent-basis
lemma. Baldwin–Sivek Questions 1.5, 1.6, and 1.8 are retained as excluded
context for KT-20, not Jones-detection evidence. Cha–Kim Remark 1.1 is retained
as excluded because it concerns satellite-operator filtrations, not this
question. The complete source bodies and relevant arguments were inspected;
the retrieval checker reports 12/12 source records fetch-verified and 0
unresolved drops. A browser PDF attempt for Donaldson returned 502; an
alternative-host attempt was inaccessible, then the canonical source URL was
successfully retrieved and stamped by `source-fetch-check`. No unresolved
source-resolution case remains.

## Validation and handoff state

The current recomputed `.autopilot/` status is `running`, stage `1-scaffold`,
101/109 covered, with no active workers; batch 106 is still listed missing
because its status remark is escalated. The run retains an owner repair and
recertification blocker recorded in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`;
this pair made no engine-state or owner-verdict edits.

Whole-run `item-dependency-levels.mjs check` reported no mismatch for any of
this batch's five items. It did report unrelated current-run findings:
`character-varieties-and-the-a-polynomial-examples` has an empty scaffold
inventory, and four batch-99 dependency labels are one below computed levels
(items `lem-property-p-instanton-surgery-triangle-and-rank-input`,
`thm-property-p-for-nontrivial-knots`,
`lem-s-three-filling-detects-the-meridian-slope`, and
`thm-gordon-luecke-knot-complement-determines-knot`). These findings are
outside batch 106 and were not changed.

Final scoped checks on the current carriers and evidence:

- `node tools/proof-contract.mjs ...batch-106.proof-contracts.json --strict
  --json`: **passed**, all five items, 0 errors and 0 warnings.
- `node tools/proof-layout.mjs` on the five changed items: **passed**, 5 items,
  10 steps, 0 defects.
- Scoped `precheck.mts` on the three proof-bearing items: **passed**, 3 checked,
  0 failures. The lemma and example use the checker-compatible layered steps.
- Scoped `rendercheck.mjs` on the five items and two page files: **passed**, 7
  files, 0 errors and 0 warnings. A separate statement-link audit found no
  hyperlinks inside any complete item statement, and both page bodies are empty.
- `content-policy.mjs` on the batch manifest: **passed**, 5 items, 0 errors and
  0 warnings.
- `source-fetch-check.mjs --stamp`: **passed**, 12/12 source records fetched and
  verified, 0 documented drops.
- Focused `depcheck.mjs --items-file` on the five item IDs: **failed with the
  four batch-99 justification-backward findings above**; no batch-106 carrier
  was changed in response.
- Whole-run `item-dependency-levels.mjs check`: **reported no mismatch for
  batch 106**; exit 1 for the unrelated findings listed above.
- Read-only `frontier-dependency-ledger.collect` could not complete the whole
  run because `inverse-problems-knot-theory-all-109-2026-10-19-batch-104.cross-batch-dependencies.json`
  contains an invalid review/consumer-ownership row. The local batch-106 edge
  audit passed and wrote no derived global ledger.
- The item-scoped Step 1 record check confirms four hash-current `ready`
  records; the remark record remains `escalated` with the exact dependency
  blocker above.

Step 1 records: the Laurent-basis lemma, coefficient-vector definition,
trefoil example, and unknot boundary counterexample are `ready`. The terminal
status remark is `escalated` because its batch-99 ordinary/enhanced
A-polynomial supplier dependency graph remains unresolved; its source claim is
accurately reported and explicitly unvalidated.
