# Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-43-complex-representation-15-alpha-groups.json` is the assignment: it permits at
most ten groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-43-complex-representation-15
role: alpha-group-read
label: f
covers: f

# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **6**, **7**, **8**: 3 A/B pair(s), 6 page(s), 71 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `quantized-enveloping-algebras-and-quantum-serre-relations` | A | special-topics-in-representation-theory | 1524 | `kac-moody-algebras-from-generalized-cartan-matrices`, `tensor-products-of-modules`, `permutation-statistics-inversions-and-eulerian-numbers`, `harish-chandra-isomorphism-casimir-and-central-characters`, `free-groups-and-presentations`, `the-burau-representations` |
| 6 | `quantized-enveloping-algebras-and-quantum-serre-relations-examples` | B | special-topics-in-representation-theory | 1525 | `quantized-enveloping-algebras-and-quantum-serre-relations` |
| 7 | `kazhdan-lusztig-bases-polynomials-and-cells` | A | special-topics-in-representation-theory | 1540 | `principal-series-representations-of-gl-n-over-a-finite-field`, `bruhat-decomposition-and-flags-over-finite-fields`, `permutation-statistics-inversions-and-eulerian-numbers`, `the-hook-length-formula-and-rsk-correspondence` |
| 7 | `kazhdan-lusztig-bases-polynomials-and-cells-examples` | B | special-topics-in-representation-theory | 1541 | `kazhdan-lusztig-bases-polynomials-and-cells` |
| 8 | `outer-products-skew-specht-modules-and-littlewood-richardson` | A | special-topics-in-representation-theory | 1562 | `frobenius-characteristic-and-the-symmetric-group-character-dictionary`, `the-branching-rule-and-the-young-graph`, `tensor-product-multiplicities-and-littlewood-richardson`, `tensor-products-of-modules` |
| 8 | `outer-products-skew-specht-modules-and-littlewood-richardson-examples` | B | special-topics-in-representation-theory | 1565 | `outer-products-skew-specht-modules-and-littlewood-richardson` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantized-enveloping-algebras-and-quantum-serre-relations` — Quantized Enveloping Algebras and Quantum Serre Relations (23 item(s))

- `def-bialgebra-counit-and-antipode` · definition — Bialgebras, counits and antipodes over a commutative ring
- `def-lie-bialgebra-and-root-graded-manin-triple` · definition — Lie bialgebras, degreewise duality, and root-graded Manin triples
- `def-symmetrizable-cartan-datum-for-a-quantum-group` · definition — Symmetrizable Cartan data for quantum groups
- `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix` · lemma — A nonsingular principal minor of the symmetrized Cartan matrix of size the rank
- `def-quantum-integers-factorials-and-divided-powers-at-q-i` · definition — Quantum integers, factorials, Gaussian binomials and divided powers at $q_i$
- `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` · lemma — An augmented coideal ideal of an enveloping algebra is generated by its primitive part
- `lem-an-antipode-is-unique` · lemma — Uniqueness of the antipode
- `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` · theorem — A root-graded Manin triple gives dual Lie bialgebras
- `def-drinfeld-jimbo-quantized-enveloping-algebra` · definition — The Drinfeld-Jimbo quantized enveloping algebra by generators and relations
- `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` · lemma — The opposite Borels of a symmetrizable Kac–Moody algebra are root-degreewise dual Lie bialgebras
- `lem-quantum-pascal-recurrence-and-gaussian-integrality` · lemma — The quantum Pascal recurrences, the Gauss product formula and Gaussian integrality
- `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum` · definition — The formal quantum shuffle Borel and its Cartan crossed product
- `def-positive-negative-and-toral-quantum-subalgebras` · definition — Positive, negative and toral quantum subalgebras and their root gradings
- `lem-q-binomial-expansion-for-q-commuting-elements` · lemma — The quantum binomial expansion for $q$-commuting elements
- `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions` · lemma — The Chevalley involution, the bar involution and the contravariant anti-involution preserve the defining ideal
- `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals` · lemma — The coproduct preserves the positive and negative quantum Serre ideals
- `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` · lemma — The quantum Serre sums vanish in the shuffle algebra, and the opposite Serre ideal annihilates the shuffle half
- `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double` · lemma — The generic quantum halves form a Drinfeld–Jimbo crossed double
- `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra` · theorem — The Drinfeld–Jimbo formulas define a Hopf algebra
- `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` · theorem — The formal quantum Serre half embeds in the shuffle algebra and is degreewise free
- `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` · theorem — Generic quantum Serre halves have classical PBW ranks and a nondegenerate Hopf pairing
- `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` · theorem — Triangular decomposition of a quantized enveloping algebra
- `thm-quantized-sl-two-string-formulas` · theorem — Divided-power commutation and the simple $U_{q_i}(\mathfrak{sl}_2)$ string modules

### `quantized-enveloping-algebras-and-quantum-serre-relations-examples` — Quantized Enveloping Algebras and Quantum Serre Relations — Examples (4 item(s))

- `cex-unsymmetrized-q-parameters-break-the-cartan-normalization` · counterexample — Unsymmetrized parameters break the coproduct of the Serre ideal
- `ex-quantum-serre-calculation-in-type-a-two` · example — The quasiprimitive Serre element in type $A_2$
- `ex-the-double-edge-quantum-serre-relation-for-affine-a-one` · example — The double-edge Serre relation for the cyclic affine type $A_1^{(1)}$
- `ex-quantized-sl-two-relations-coproduct-and-antipode` · example — Coproduct, antipode and $q$-binomial expansion in $U_q(\mathfrak{sl}_2)$

### `kazhdan-lusztig-bases-polynomials-and-cells` — Kazhdan–Lusztig Bases, Polynomials, and Cells (22 item(s))

- `def-normalized-type-a-hecke-algebra-and-its-bar-involution` · definition — The normalized type-A Hecke algebra and its bar involution
- `lem-the-hecke-bar-involution-is-well-defined` · lemma — The Hecke bar involution is well defined
- `lem-bruhat-order-basic-properties-for-permutations` · lemma — Basic properties of the Bruhat order on $S_n$
- `def-bruhat-interval-and-r-polynomials` · definition — Bruhat intervals and the $R$-coefficients
- `lem-reversal-anti-involution-commutes-with-hecke-bar` · lemma — Reversal anti-involution commutes with the Hecke bar
- `thm-r-polynomial-recursion-and-degree-bounds` · theorem — The $R$-coefficient recursion, support, degree bounds and inversion
- `lem-verma-sign-sum-over-bruhat-intervals` · lemma — Verma's sign identity over Bruhat intervals
- `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` · theorem — Existence and uniqueness of the Kazhdan–Lusztig basis
- `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization` · definition — Kazhdan–Lusztig polynomials in the classical $q$-normalization
- `thm-kazhdan-lusztig-basis-multiplication-formula` · theorem — Multiplication by a generator in the Kazhdan–Lusztig basis
- `thm-kazhdan-lusztig-polynomial-recursion` · theorem — The Kazhdan–Lusztig polynomial descent recursion
- `def-inverse-kazhdan-lusztig-polynomials` · definition — Inverse Kazhdan–Lusztig polynomials
- `thm-kazhdan-lusztig-inversion-formula` · theorem — The Kazhdan–Lusztig inversion formula
- `def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells` · definition — $L$-, $R$- and two-sided Kazhdan–Lusztig preorders and cells
- `def-knuth-and-dual-knuth-equivalence-for-permutations` · definition — Knuth and dual Knuth equivalence for permutations
- `thm-knuth-equivalence-classes-are-insertion-tableau-fibers` · theorem — Knuth classes are the fibers of the insertion tableau
- `def-star-operations-on-the-symmetric-group` · definition — Star operations on strings of adjacent simple reflections
- `lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges` · lemma — Star operations are Knuth moves and preserve the relevant cells
- `lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations` · lemma — $\mu$-edges and left equivalence are transported by star operations
- `prop-same-insertion-or-recording-tableaux-imply-cell-equivalence` · proposition — Equal insertion or recording tableaux imply right or left equivalence
- `lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a` · lemma — Left equivalence forces equality of recording tableaux in type A
- `thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux` · theorem — Kazhdan–Lusztig cells of type A are classified by RSK tableaux

### `kazhdan-lusztig-bases-polynomials-and-cells-examples` — Kazhdan–Lusztig Bases, Polynomials, and Cells — Examples (3 item(s))

- `ex-kazhdan-lusztig-bases-for-s-two-and-s-three` · example — The Kazhdan–Lusztig bases of $S_2$ and $S_3$
- `ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval` · example — The $R$- and Kazhdan–Lusztig recursions on a small singular interval
- `ex-rsk-left-right-and-two-sided-cells-in-s-three` · example — RSK cells in $S_3$ and $S_4$

### `outer-products-skew-specht-modules-and-littlewood-richardson` — Outer Products, Skew Specht Modules, and Littlewood–Richardson Coefficients (15 item(s))

- `def-graded-bialgebra-and-hopf-algebra` · definition — Graded coalgebras, bialgebras and Hopf algebras over a commutative ring
- `lem-character-ring-of-a-direct-product-is-the-tensor-product` · lemma — The character ring of a direct product is the tensor product of the factor character rings
- `lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation` · lemma — Induction is invariant under conjugation of the subgroup and the representation
- `lem-induction-commutes-with-an-external-tensor-factor` · lemma — Induction commutes with an external tensor factor
- `thm-littlewood-richardson-schur-product-expansion` · theorem — The Littlewood–Richardson rule for products of Schur functions, by the Littlewood–Robinson bijection
- `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring` · theorem — Outer induction makes the graded symmetric-group representation group a commutative graded ring
- `def-restriction-coproduct-on-the-graded-symmetric-group-character-ring` · definition — The restriction coproduct on the graded symmetric-group character ring
- `lem-connected-graded-bialgebra-has-a-recursive-antipode` · lemma — A connected graded bialgebra has a unique antipode, given by the reduced-coproduct recursion
- `thm-outer-littlewood-richardson-rule` · theorem — The outer Littlewood–Richardson rule
- `prop-restriction-coproduct-is-schur-skewing` · proposition — The restriction coproduct is Schur skewing
- `cor-outer-pieri-rules-for-trivial-and-sign-factors` · corollary — Outer Pieri rules for a trivial or sign factor
- `cor-littlewood-richardson-coefficients-have-conjugation-symmetry` · corollary — Conjugation and exchange symmetries of the Littlewood–Richardson coefficients
- `def-skew-multiplicity-module-over-c` · definition — The skew multiplicity module $K^{\lambda/\mu}$ over $\mathbb C$
- `thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c` · theorem — The skew multiplicity module decomposes with Littlewood–Richardson multiplicities over $\mathbb C$
- `thm-outer-induction-and-restriction-form-a-graded-hopf-algebra` · theorem — Outer induction and restriction make the symmetric-group character ring a graded Hopf algebra

### `outer-products-skew-specht-modules-and-littlewood-richardson-examples` — Outer Products, Skew Specht Modules, and Littlewood–Richardson Coefficients — Examples (4 item(s))

- `ex-outer-product-s32-with-s2` · example — The outer product of $S^{(3,2)}$ and $S^{(2)}$
- `ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction` · example — An outer-induction multiplicity greater than one
- `cex-outer-multiplicity-is-not-the-semistandard-tableau-count` · counterexample — The outer multiplicity is not the number of semistandard skew tableaux
- `ex-restriction-coproduct-for-s-three-one` · example — The restriction coproduct of the character $\chi^{(3,1)}$ of $S_4$

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
