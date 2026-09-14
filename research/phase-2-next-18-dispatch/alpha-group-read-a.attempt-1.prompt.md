# Alpha

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
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

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
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-18
role: alpha-group-read
label: a
covers: a

# Step 6 whole-group reading — group **a**, run `phase-2-next-18`

You are the group Alpha for batches **5**: 2 A/B pair(s), 4 page(s), 112 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `solvable-and-nilpotent-lie-algebras` | A | differential-geometry | 497 | `lie-algebra-representations-enveloping-algebras-and-pbw`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `linear-maps-rank-nullity-and-quotient-spaces` |
| 5 | `solvable-and-nilpotent-lie-algebras-examples` | B | differential-geometry | 498 | `solvable-and-nilpotent-lie-algebras` |
| 5 | `semisimple-lie-algebras-cohomology-and-levi-theory` | A | differential-geometry | 499 | `lie-subgroups-actions-and-homogeneous-spaces`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `solvable-and-nilpotent-lie-algebras`, `chain-complexes-and-homology`, `long-exact-sequences-in-homology`, `covering-spaces-and-lifting`, `noetherian-rings-and-hilbert-basis` |
| 5 | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | B | differential-geometry | 500 | `semisimple-lie-algebras-cohomology-and-levi-theory` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `solvable-and-nilpotent-lie-algebras` — Solvable and Nilpotent Lie Algebras (42 item(s))

- `def-derived-series-and-solvable-lie-algebra` · definition — Derived series and solvable Lie algebras
- `lem-derived-series-terms-are-characteristic-ideals` · lemma — Derived-series terms are characteristic ideals
- `def-solvable-length-of-a-lie-algebra` · definition — Solvable length
- `def-lower-central-series-and-nilpotent-lie-algebra` · definition — Lower central series and nilpotent Lie algebras
- `lem-lower-central-series-terms-are-characteristic-ideals` · lemma — Lower-central-series terms are characteristic ideals
- `def-nilpotency-class-of-a-lie-algebra` · definition — Nilpotency class
- `def-upper-central-series-of-a-lie-algebra` · definition — Upper central series
- `thm-lower-and-upper-central-series-characterize-nilpotence` · theorem — Lower and upper central series characterize nilpotence
- `prop-nilpotent-lie-algebras-are-solvable` · proposition — Nilpotent Lie algebras are solvable
- `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras` · proposition — Subalgebras, quotients, and extensions of solvable Lie algebras
- `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras` · proposition — Subalgebras, quotients, and finite products of nilpotent Lie algebras
- `prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent` · proposition — A central extension of a nilpotent Lie algebra is nilpotent
- `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center` · proposition — A nonzero nilpotent Lie algebra has nonzero center
- `def-nilpotent-linear-transformation-and-nil-representation` · definition — Nilpotent transformations and nil representations
- `lem-engel-common-zero-vector` · lemma — Engel's common-zero-vector lemma
- `thm-engels-triangularization-theorem` · theorem — Engel triangularization theorem
- `thm-engels-theorem` · theorem — Engel's theorem
- `cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series` · corollary — Nilpotent adjoint action yields a central series
- `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra` · corollary — Codimension-one ideals in nilpotent Lie algebras
- `lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field` · lemma — Codimension-one ideal in a nonzero solvable Lie algebra
- `thm-lies-theorem` · theorem — Lie's theorem
- `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations` · corollary — Simultaneous triangularization of solvable representations
- `cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional` · corollary — Irreducible representations of solvable complex Lie algebras are one-dimensional
- `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent` · theorem — Derived algebra of a solvable linear Lie algebra is nilpotent
- `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero` · corollary — The derived algebra of a solvable Lie algebra is nilpotent in characteristic zero
- `thm-lies-criterion-for-solvability-by-the-derived-algebra` · theorem — Solvability criterion via the derived algebra
- `def-radical-of-a-finite-dimensional-lie-algebra` · definition — Solvable radical
- `thm-sum-of-solvable-ideals-is-solvable` · theorem — The sum of solvable ideals is solvable
- `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical` · proposition — The radical is characteristic and its quotient is semisimple
- `def-nilradical-of-a-finite-dimensional-lie-algebra` · definition — Nilradical
- `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero` · theorem — Existence and characteristicity of the nilradical in characteristic zero
- `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical` · theorem — The commutator with the radical lies in the nilradical
- `cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical` · corollary — The derived algebra of the radical lies in the nilradical
- `prop-derivations-preserve-the-nilradical-in-characteristic-zero` · proposition — Derivations preserve the nilradical in characteristic zero
- `def-semisimple-lie-algebra-by-vanishing-radical` · definition — Semisimple Lie algebras
- `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center` · definition — Reductive Lie algebras
- `fs-every-solvable-lie-algebra-is-nilpotent` · false-statement — Every solvable Lie algebra is nilpotent
- `fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent` · false-statement — Nilpotent-by-nilpotent extensions are always nilpotent
- `fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem` · false-statement — A nilpotent acting basis suffices for Engel's theorem
- `fs-lies-theorem-holds-over-every-field-and-in-every-characteristic` · false-statement — Lie's theorem is field- and characteristic-free
- `fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional` · false-statement — Every irreducible real representation of a solvable Lie algebra is one-dimensional
- `fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements` · false-statement — The nilradical is the set of all ad-nilpotent elements

### `solvable-and-nilpotent-lie-algebras-examples` — Solvable and Nilpotent Lie Algebras — Examples (12 item(s))

- `ex-abelian-lie-algebras-are-nilpotent-of-class-one` · example — Abelian Lie algebras are nilpotent of class one
- `ex-the-heisenberg-lie-algebra-is-two-step-nilpotent` · example — The Heisenberg Lie algebra is two-step nilpotent
- `ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra` · example — Strictly upper triangular matrices form a nilpotent Lie algebra
- `ex-upper-triangular-matrices-form-a-solvable-nonnilpotent-lie-algebra` · example — Upper triangular matrices are solvable but not nilpotent
- `ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent` · example — The two-dimensional affine Lie algebra is solvable, not nilpotent
- `ex-the-euclidean-motion-lie-algebra-is-solvable-in-dimension-two` · example — The plane Euclidean-motion Lie algebra is solvable
- `ex-derived-and-lower-central-series-of-a-filiform-lie-algebra` · example — Series of a standard filiform Lie algebra
- `ex-radical-and-nilradical-of-the-affine-lie-algebra` · example — Radical and nilradical of the affine Lie algebra
- `cex-a-nilpotent-by-nilpotent-extension-that-is-not-nilpotent` · counterexample — A nilpotent-by-nilpotent extension need not be nilpotent
- `cex-a-two-dimensional-irreducible-real-representation-of-an-abelian-lie-algebra` · counterexample — A two-dimensional irreducible real representation of an abelian Lie algebra
- `cex-positive-characteristic-failure-of-lies-theorem` · counterexample — Positive-characteristic failure of Lie's theorem
- `ex-engels-theorem-on-strictly-upper-triangular-matrices` · example — Engel's theorem for strictly upper triangular matrices

### `semisimple-lie-algebras-cohomology-and-levi-theory` — Semisimple Lie Algebras Cohomology and Levi Theory (46 item(s))

- `def-simple-semisimple-and-reductive-lie-algebras` · definition — Simple, semisimple, and reductive Lie algebras
- `def-trace-form-of-a-finite-dimensional-representation` · definition — Trace form of a representation
- `def-killing-form-of-a-finite-dimensional-lie-algebra` · definition — Killing form
- `prop-trace-forms-are-symmetric-and-invariant` · proposition — Trace forms are symmetric and invariant
- `lem-orthogonal-complements-under-invariant-forms-are-ideals` · lemma — Orthogonal complements under invariant forms are ideals
- `thm-cartans-solvability-criterion` · theorem — Cartan's solvability criterion
- `thm-cartans-semisimplicity-criterion` · theorem — Cartan's semisimplicity criterion
- `cor-semisimple-lie-algebras-are-centerless-and-perfect` · corollary — Semisimple Lie algebras are centerless and perfect
- `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals` · theorem — Semisimple Lie algebras decompose into simple ideals
- `prop-ideals-and-quotients-of-semisimple-lie-algebras` · proposition — Ideals and quotients of semisimple Lie algebras
- `def-casimir-operator-relative-to-an-invariant-form` · definition — Casimir operator relative to an invariant form
- `lem-the-casimir-operator-is-basis-independent-and-intertwining` · lemma — The Casimir operator is basis-independent and intertwining
- `thm-weyls-complete-reducibility-theorem` · theorem — Weyl's complete reducibility theorem
- `thm-equivalent-characterizations-of-reductive-lie-algebras` · theorem — Equivalent characterizations of reductive Lie algebras
- `cor-the-adjoint-representation-splits-into-simple-ideals` · corollary — The adjoint representation splits into simple ideals
- `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner` · theorem — Derivations of semisimple Lie algebras are inner
- `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra` · corollary — Lie algebra of the automorphism group
- `def-chevalley-eilenberg-cochains` · definition — Chevalley–Eilenberg cochains
- `def-chevalley-eilenberg-differential` · definition — Chevalley–Eilenberg differential
- `thm-the-chevalley-eilenberg-differential-squares-to-zero` · theorem — The Chevalley–Eilenberg differential squares to zero
- `def-lie-algebra-cohomology` · definition — Lie algebra cohomology
- `prop-zero-th-lie-algebra-cohomology-is-invariants` · proposition — Zeroth Lie algebra cohomology is invariants
- `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations` · proposition — First cohomology is derivations modulo inner derivations
- `thm-second-lie-algebra-cohomology-classifies-abelian-extensions` · theorem — Second cohomology classifies abelian extensions
- `thm-first-whitehead-lemma` · theorem — First Whitehead lemma
- `thm-second-whitehead-lemma` · theorem — Second Whitehead lemma
- `thm-long-exact-sequence-in-lie-algebra-cohomology` · theorem — Long exact sequence in Lie algebra cohomology
- `def-levi-subalgebra-and-levi-decomposition` · definition — Levi subalgebras and Levi decompositions
- `thm-levi-decomposition` · theorem — Levi decomposition theorem
- `thm-malcev-conjugacy-of-levi-subalgebras` · theorem — Malcev conjugacy of Levi subalgebras
- `cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy` · corollary — Levi factors are noncanonical but conjugate
- `thm-ado-faithful-representation-with-nilpotent-nilradical-action` · theorem — Ado's theorem with nilpotent nilradical action
- `cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra` · corollary — Every finite-dimensional characteristic-zero Lie algebra is a matrix Lie algebra
- `thm-lie-second-fundamental-theorem` · theorem — Lie's second fundamental theorem
- `thm-lie-third-fundamental-theorem` · theorem — Lie's third fundamental theorem
- `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras` · theorem — Equivalence of simply connected Lie groups and real Lie algebras
- `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations` · theorem — Connected Lie groups are central quotients of simply connected integrations
- `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism` · theorem — Exponential diffeomorphism for simply connected nilpotent Lie groups
- `cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups` · corollary — Connected nilpotent Lie groups are central quotients of BCH groups
- `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups` · corollary — Lie algebras determine connected Lie groups only locally
- `fs-centerless-implies-semisimple` · false-statement — Centerless implies semisimple
- `fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra` · false-statement — The Killing form is nondegenerate on every reductive Lie algebra
- `fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible` · false-statement — Every finite-dimensional representation of a reductive Lie algebra is completely reducible
- `fs-second-cohomology-classifies-all-nonabelian-extensions` · false-statement — Second cohomology classifies all nonabelian extensions
- `fs-levi-subalgebras-are-literally-unique` · false-statement — Levi subalgebras are literally unique
- `fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups` · false-statement — Isomorphic Lie algebras determine isomorphic connected Lie groups

### `semisimple-lie-algebras-cohomology-and-levi-theory-examples` — Semisimple Lie Algebras Cohomology and Levi Theory — Examples (12 item(s))

- `ex-killing-form-of-sl-two` · example — Killing form of sl_2
- `ex-classical-simple-lie-algebras-and-their-killing-forms` · example — Classical simple Lie algebras and their Killing forms
- `ex-a-reductive-algebra-with-degenerate-killing-form` · example — A reductive algebra with degenerate Killing form
- `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra` · example — Direct-sum decomposition of a semisimple Lie algebra
- `ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization` · example — First cohomology with trivial coefficients
- `ex-an-abelian-extension-from-a-two-cocycle` · example — The Heisenberg algebra from a two-cocycle
- `ex-a-levi-decomposition-of-the-euclidean-motion-algebra` · example — A Levi decomposition of the Euclidean-motion algebra of R^3
- `ex-distinct-conjugate-levi-subalgebras` · example — Distinct conjugate Levi subalgebras
- `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` · example — SU(2) and SO(3): same local Lie theory, different groups
- `ex-the-bch-group-of-a-nilpotent-lie-algebra` · example — The BCH group of a nilpotent Lie algebra
- `cex-centerless-does-not-imply-semisimple` · counterexample — Centerless does not imply semisimple
- `cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups` · counterexample — The circle and line have the same Lie algebra but different Lie groups

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-18`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


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
