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
group work, `research/frontier-35-ten-categories-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-35-ten-categories
role: alpha-group-read
label: c
covers: c

# Step 6 whole-group reading — group **c**, run `frontier-35-ten-categories`

You are the group Alpha for batches **15**, **16**, **17**: 5 A/B pair(s), 10 page(s), 118 item(s).

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
| 15 | `geometric-braids-and-artin-generators` | A | braid-groups | 729 | `homotopy-and-homotopy-equivalence`, `subspaces-products-and-quotients`, `free-groups-and-presentations`, `braided-and-symmetric-monoidal-categories`, `the-total-derivative` |
| 15 | `geometric-braids-and-artin-generators-examples` | B | braid-groups | 730 | `geometric-braids-and-artin-generators`, `the-fundamental-group-of-the-circle` |
| 15 | `garside-structure-normal-forms-and-the-center` | A | braid-groups | 741 | `braided-and-symmetric-monoidal-categories` |
| 15 | `garside-structure-normal-forms-and-the-center-examples` | B | braid-groups | 742 | `garside-structure-normal-forms-and-the-center` |
| 16 | `ordered-and-unordered-configuration-spaces` | A | braid-groups | 731 | `the-fundamental-group`, `covering-spaces-and-lifting`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `classification-of-covering-spaces`, `partitions-of-unity-and-paracompactness`, `subspaces-products-and-quotients`, `manifolds-with-boundary-collars-and-orientations` |
| 16 | `ordered-and-unordered-configuration-spaces-examples` | B | braid-groups | 732 | `ordered-and-unordered-configuration-spaces` |
| 16 | `graded-quiver-algebras-and-derived-tensor-functors` | A | braid-groups | 755 | `graded-bimodules-and-tensor-functors`, `derived-categories`, `tensor-products-of-modules`, `chain-complexes-and-homology`, `modules-over-a-pid-and-canonical-forms` |
| 16 | `graded-quiver-algebras-and-derived-tensor-functors-examples` | B | braid-groups | 756 | `graded-quiver-algebras-and-derived-tensor-functors` |
| 17 | `type-a-soergel-bimodules-and-hecke-categorification` | A | braid-groups | 759 | `tensor-products-of-modules`, `symmetric-polynomials`, `graded-bimodules-and-tensor-functors`, `braided-and-symmetric-monoidal-categories`, `permutation-statistics-inversions-and-eulerian-numbers`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `preadditive-and-additive-categories-and-biproducts`, `garside-structure-normal-forms-and-the-center` |
| 17 | `type-a-soergel-bimodules-and-hecke-categorification-examples` | B | braid-groups | 760 | `type-a-soergel-bimodules-and-hecke-categorification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `geometric-braids-and-artin-generators` — Geometric Braids and Artin Generators (10 item(s))

- `def-geometric-braid-with-setwise-endpoints` · definition — Geometric braids in the disc with setwise endpoints
- `def-braid-isotopy-relative-top-and-bottom` · definition — Braid isotopy relative to the top and bottom endpoints
- `prop-stacking-of-geometric-braids-is-well-defined` · proposition — Stacking of geometric braids is a well-defined associative operation on isotopy classes
- `thm-geometric-braids-form-a-group` · theorem — The isotopy classes of geometric braids based at $Q$ form a group, and the endpoint permutation is a homomorphism
- `def-elementary-geometric-half-twist` · definition — The elementary geometric half twist, its support disc, and its opposite
- `lem-geometric-far-commutativity` · lemma — Far commutativity of elementary geometric half twists
- `lem-geometric-three-strand-braid-relation` · lemma — The geometric three strand braid relation
- `lem-geometric-braids-admit-generic-polygonal-representatives` · lemma — Geometric braids admit generic polygonal representatives
- `lem-every-geometric-braid-is-a-word-in-half-twists` · lemma — Every geometric braid is a stacking of signed elementary half twists
- `prop-the-artin-presentation-surjects-onto-geometric-braids` · proposition — The Artin presentation surjects onto the geometric braid group

### `geometric-braids-and-artin-generators-examples` — Geometric Braids and Artin Generators — Examples (4 item(s))

- `ex-geometric-two-strand-braids-are-integer-twists` · example — Geometric two strand braids are integer twists
- `ex-the-three-strand-geometric-braid-relation` · example — The three strand geometric braid relation
- `cex-setwise-endpoints-do-not-make-a-braid-pure` · counterexample — Setwise endpoints do not make a braid pure
- `cex-arbitrary-link-isotopy-need-not-be-braid-isotopy` · counterexample — An arbitrary isotopy of arcs need not be a braid isotopy

### `garside-structure-normal-forms-and-the-center` — Garside Structure, Normal Forms, and the Center (24 item(s))

- `def-positive-braid-monoid` · definition — Positive braid monoid
- `lem-positive-artin-relations-preserve-homogeneous-length` · lemma — Positive artin relations preserve homogeneous length
- `def-artin-right-complements-and-word-reversing` · definition — Artin right complements and word reversing
- `lem-artin-right-complements-satisfy-the-cube-condition` · lemma — Artin right complements satisfy the cube condition
- `lem-artin-positive-word-reversing-is-complete` · lemma — Artin positive word reversing is complete
- `lem-the-positive-braid-monoid-is-left-and-right-cancellative` · lemma — The positive braid monoid is left and right cancellative
- `def-left-and-right-divisibility-for-positive-braids` · definition — Left and right divisibility for positive braids
- `lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements` · lemma — Artin atoms have explicit left and right lcms and complements
- `def-garside-half-twist-and-simple-positive-braid` · definition — Garside half twist and simple positive braid
- `lem-conjugation-by-delta-reverses-artin-generators` · lemma — Conjugation by delta reverses artin generators
- `lem-each-artin-atom-divides-delta-on-both-sides` · lemma — Each artin atom divides delta on both sides
- `lem-every-positive-braid-divides-a-power-of-delta-on-both-sides` · lemma — Every positive braid divides a power of delta on both sides
- `thm-positive-braids-have-left-and-right-gcds-and-lcms` · theorem — Positive braids have left and right gcds and lcms
- `thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group` · theorem — The ore fraction group of positive braids is the artin braid group
- `thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group` · theorem — Left and right divisibility extend to lattice orders on the braid group
- `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts` · lemma — Reduced adjacent transposition words have well defined positive lifts
- `lem-simple-positive-braids-are-indexed-by-permutations` · lemma — Simple positive braids are indexed by permutations
- `lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors` · lemma — Delta is the lcm of the artin atoms and has the same left and right divisors
- `thm-left-garside-normal-form-is-unique` · theorem — Left garside normal form is unique
- `cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form` · corollary — The braid group word problem is decidable by garside normal form
- `thm-braid-groups-are-torsion-free-by-the-garside-lattice` · theorem — Braid groups are torsion free by the garside lattice
- `lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two` · lemma — A central positive braid is a power of delta squared for n greater than two
- `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two` · theorem — The center of b n is generated by the full twist for n greater than two
- `prop-the-center-of-b-two-is-all-of-b-two` · proposition — The center of b two is all of b two

### `garside-structure-normal-forms-and-the-center-examples` — Garside Structure, Normal Forms, and the Center — Examples (4 item(s))

- `ex-the-simple-braids-and-divisibility-lattice-for-b-three` · example — The simple braids and divisibility lattice for b three
- `ex-a-left-garside-normal-form-computation-in-b-three` · example — A left garside normal form computation in b three
- `ex-the-full-twist-in-b-three` · example — The full twist in b three
- `cex-exponent-sum-is-not-a-complete-braid-normal-form` · counterexample — Exponent sum is not a complete braid normal form

### `ordered-and-unordered-configuration-spaces` — Ordered and Unordered Configuration Spaces (14 item(s))

- `def-ordered-configuration-space` · definition — Ordered configuration space
- `prop-the-symmetric-group-acts-freely-on-ordered-configurations` · proposition — Free coordinate-permutation action
- `def-unordered-configuration-space` · definition — Unordered configuration space
- `lem-path-conjugation-isomorphism-of-fundamental-groups` · lemma — Conjugating loop classes by a path is an isomorphism of fundamental groups
- `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent` · lemma — Closed-disk and interior-disk configuration equivalence
- `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations` · lemma — Evenly covered coordinate neighborhoods
- `thm-ordered-configurations-cover-unordered-configurations-regularly` · theorem — Regular configuration covering
- `lem-the-closed-disk-is-a-manifold-with-boundary` · lemma — The closed disk is a manifold with boundary
- `def-pure-braid-group-from-ordered-configurations` · definition — Pure configuration braid group
- `def-braid-group-from-unordered-configurations` · definition — Unordered configuration braid group
- `def-endpoint-monodromy-of-a-configuration-loop` · definition — Endpoint monodromy of a configuration loop
- `thm-configuration-braid-pure-braid-short-exact-sequence` · theorem — Configuration braid short exact sequence
- `lem-forgetting-configuration-points-is-locally-trivial` · lemma — Local triviality of forgetting configuration points
- `thm-fadell-neuwirth-forgetful-fibration` · theorem — Fadell–Neuwirth forgetful bundle and disk fibration

### `ordered-and-unordered-configuration-spaces-examples` — Ordered and Unordered Configuration Spaces — Examples (4 item(s))

- `ex-two-point-ordered-configurations-of-the-plane` · example — Two ordered points in the plane
- `ex-the-two-point-unordered-cover-and-its-monodromy` · example — The two-point quotient cover
- `cex-collisions-destroy-freeness-of-coordinate-permutation` · counterexample — Collisions destroy freeness
- `cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one` · counterexample — The natural two-point quotient is not injective

### `graded-quiver-algebras-and-derived-tensor-functors` — Graded Quiver Algebras and Derived Tensor Functors (18 item(s))

- `def-path-ring-of-a-finite-quiver-over-the-integers` · definition — Integral path ring of a finite quiver
- `def-khovanov-seidel-type-a-quiver-algebra` · definition — Khovanov–Seidel type A algebra
- `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis` · lemma — The 4m+1 path basis
- `def-graded-khovanov-seidel-module-category-and-projectives` · definition — Graded A_m-modules and vertex projectives
- `def-vertex-khovanov-seidel-modules` · definition — Vertex modules and prime quotients
- `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions` · lemma — Finite resolutions of the vertex modules
- `lem-finite-graded-projective-resolutions-are-extension-stable` · lemma — Finite graded projective resolutions are extension stable
- `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension` · theorem — Finite homological dimension of A_m
- `lem-bounded-finite-projective-model-for-khovanov-seidel-modules` · lemma — Bounded finite projective model for Khovanov-Seidel modules
- `def-bounded-projective-homotopy-category-for-a-m` · definition — Bounded projective homotopy category
- `def-two-sided-projective-khovanov-seidel-bimodule-functors` · definition — Two-sided projective U_i tensor functors
- `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` · theorem — Temperley–Lieb relations for U_i
- `def-khovanov-seidel-beta-and-gamma-bimodule-maps` · definition — Khovanov–Seidel beta and gamma maps
- `def-signed-totalization-of-graded-a-m-bimodule-actions` · definition — Signed totalization of graded A_m bimodule actions
- `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m` · lemma — Bounded two-sided projective bimodule complexes act on C_m
- `def-khovanov-seidel-positive-and-negative-twist-complexes` · definition — Positive and negative twist complexes
- `def-triangulated-k-zero-of-khovanov-seidel-projectives` · definition — Triangulated K-zero of the Khovanov-Seidel projective category
- `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero` · lemma — Homological and internal shifts on Khovanov-Seidel K-zero

### `graded-quiver-algebras-and-derived-tensor-functors-examples` — Graded Quiver Algebras and Derived Tensor Functors — Examples (4 item(s))

- `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives` · example — A₂ algebra and vertex projectives
- `ex-a-simple-module-projective-resolution-for-a-two` · example — A₂ vertex-module resolution
- `ex-totalizing-a-two-term-bimodule-action` · example — Signed total differential of a twist action
- `cex-internal-and-homological-shifts-are-not-interchangeable` · counterexample — Internal and homological shifts differ

### `type-a-soergel-bimodules-and-hecke-categorification` — Type-A Soergel Bimodules and Hecke Categorification (32 item(s))

- `def-type-a-reflection-realization-and-polynomial-ring` · definition — type a reflection realization and polynomial ring
- `lem-type-a-reduced-words-are-connected-by-braid-moves` · lemma — type a reduced words and the Coxeter presentation
- `def-type-a-hecke-algebra-in-soergel-normalization` · definition — type a Hecke algebra in Soergel normalization
- `lem-type-a-hecke-standard-basis-for-soergel-comparison` · lemma — type a Hecke standard basis for Soergel comparison
- `def-type-a-soergel-bimodule-for-a-simple-reflection` · definition — type a soergel bimodule for a simple reflection
- `lem-type-a-soergel-generators-are-finite-free-on-both-sides` · lemma — type a soergel generators are finite free on both sides
- `def-bott-samelson-bimodule-of-a-word` · definition — bott samelson bimodule of a word
- `def-the-type-a-soergel-category` · definition — the type a soergel category
- `def-type-a-standard-graph-bimodules-support-filtrations-and-character` · definition — type a standard graph bimodules support filtrations and character
- `lem-type-a-graph-bimodule-extension-vanishing` · lemma — Type-A graph-bimodule extension vanishing
- `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations` · lemma — bott samelson bimodules have delta and nabla support filtrations
- `lem-type-a-support-filtration-multiplicities-are-intrinsic` · lemma — type a support filtration multiplicities are intrinsic
- `lem-type-a-soergel-frobenius-biadjunction` · lemma — Frobenius biadjunction for type-A Soergel generators
- `lem-type-a-character-recursion-under-simple-soergel-tensoring` · lemma — type a character recursion under simple Soergel tensoring
- `lem-type-a-soergel-special-hom-formula` · lemma — Special Bott–Samelson Hom formula before reflection localization
- `lem-type-a-top-support-layers-are-controlled-by-reflection-localization` · lemma — type a top support layers are controlled by reflection localization
- `thm-the-type-a-soergel-hom-formula` · theorem — the type a soergel hom formula
- `lem-the-rank-one-soergel-bimodule-square-splits` · lemma — the rank one soergel bimodule square splits
- `lem-distant-soergel-generators-commute` · lemma — distant soergel generators commute
- `def-the-rank-two-longest-type-a-soergel-bimodule` · definition — the rank two longest type a soergel bimodule
- `thm-rank-two-type-a-soergel-bimodule-decompositions` · theorem — rank two type a soergel bimodule decompositions
- `def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor` · definition — type a diagrammatic soergel category and its bimodule functor
- `def-split-grothendieck-rings-of-type-a-soergel-categories` · definition — split Grothendieck rings of type a Soergel categories
- `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules` · lemma — the type a diagrammatic relations hold for soergel bimodules
- `thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces` · theorem — double leaves form graded r bases of type a diagrammatic hom spaces
- `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts` · theorem — indecomposable type a diagrammatic soergel objects are indexed by permutations and shifts
- `thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism` · theorem — the diagrammatic character is the split k zero hecke isomorphism
- `thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit` · theorem — light leaf maps form bases of type a soergel homs to the unit
- `thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs` · theorem — evaluated double leaves form bases of type a soergel bimodule homs
- `thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent` · theorem — type a diagrammatic and bimodule soergel categories are equivalent
- `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra` · theorem — split grothendieck group of the soergel category is the type a hecke algebra
- `lem-the-type-a-standard-character-is-multiplicative` · lemma — the type a standard character is multiplicative

### `type-a-soergel-bimodules-and-hecke-categorification-examples` — Type-A Soergel Bimodules and Hecke Categorification — Examples (4 item(s))

- `ex-the-rank-one-soergel-category` · example — the rank one soergel category
- `ex-the-type-a-two-rank-two-soergel-decomposition` · example — the type a two rank two soergel decomposition
- `ex-hecke-quadratic-relation-from-the-soergel-square` · example — hecke quadratic relation from the soergel square
- `cex-bott-samelson-words-related-by-a-braid-need-not-be-isomorphic-bimodules` · counterexample — bott samelson words related by a braid need not be isomorphic bimodules

## Your seams

Your pages depend on another group's:

- `graded-quiver-algebras-and-derived-tensor-functors` requires `graded-bimodules-and-tensor-functors` (group f, batch 14)
- `type-a-soergel-bimodules-and-hecke-categorification` requires `graded-bimodules-and-tensor-functors` (group f, batch 14)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `frontier-35-ten-categories`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

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
