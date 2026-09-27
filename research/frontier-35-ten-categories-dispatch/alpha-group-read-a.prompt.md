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
label: a
covers: a

# Step 6 whole-group reading — group **a**, run `frontier-35-ten-categories`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 158 item(s).

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
| 6 | `diagonals-separated-morphisms-and-valuative-uniqueness` | A | scheme-theory | 366.067 | `schemes-subschemes-and-morphisms-locally-of-finite-type`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `valuation-rings-and-discrete-valuation-rings` |
| 6 | `diagonals-separated-morphisms-and-valuative-uniqueness-examples` | B | scheme-theory | 366.068 | `diagonals-separated-morphisms-and-valuative-uniqueness` |
| 6 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` | A | scheme-theory | 366.071 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `affine-schemes-and-the-structure-sheaf`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `tensor-products-of-modules`, `algebraic-differentials-separability-and-smooth-local-presentations`, `universal-coefficients-and-kunneth-theorems`, `the-fundamental-theorem-of-algebra` |
| 6 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples` | B | scheme-theory | 366.072 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` |
| 7 | `sheaf-cohomology-cech-cohomology-and-comparison` | A | scheme-theory | 366.081 | `presheaves-sheaves-stalks-and-sheafification`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `projective-and-injective-resolutions`, `derived-functors`, `dimension-constructible-images-and-dimensions-of-fibres`, `derived-categories`, `double-complexes-exact-couples-and-convergence` |
| 7 | `sheaf-cohomology-cech-cohomology-and-comparison-examples` | B | scheme-theory | 366.082 | `sheaf-cohomology-cech-cohomology-and-comparison`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `the-fundamental-group-of-the-circle` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `diagonals-separated-morphisms-and-valuative-uniqueness` — Diagonals Separated Morphisms and Valuative Uniqueness (29 item(s))

- `def-locally-closed-immersion` · definition — Immersion of schemes
- `def-separated-morphism-schemes` · definition — Separated morphism of schemes
- `lem-closed-immersion-local-on-target` · lemma — Closed immersions are local on the target
- `def-separated-scheme-over-base` · definition — Separated S-scheme
- `lem-diagonal-is-immersion` · lemma — Every scheme diagonal is an immersion
- `lem-affine-morphism-separated` · lemma — Affine morphisms are separated
- `cor-affine-schemes-separated` · corollary — Affine schemes and affine-base maps are separated
- `lem-separated-stable-under-base-change` · lemma — Separatedness survives base change
- `lem-separated-stable-under-composition` · lemma — Separated morphisms compose
- `lem-separated-local-on-base` · lemma — Separatedness is local on the base
- `lem-monomorphism-diagonal-isomorphism` · lemma — Monomorphisms and diagonals
- `lem-graph-closed-separated-target` · lemma — Closed graphs over separated targets
- `thm-morphisms-agree-closed-equalizer-separated-target` · theorem — Equalizers into separated schemes are closed
- `cor-morphisms-equal-on-dense-open-reduced-source` · corollary — Agreement on a schematically dense open
- `lem-diagonal-quasi-compact-iff-quasi-separated` · lemma — Quasi-separatedness and the diagonal
- `def-valuative-diagram-separatedness` · definition — Valuative uniqueness diagram
- `lem-separated-implies-valuative-uniqueness` · lemma — Separatedness implies valuative uniqueness
- `lem-quasi-compact-immersion-boundary-specialization` · lemma — A quasi-compact immersion has a boundary specialization
- `lem-local-domain-dominated-by-valuation-overring` · lemma — A local domain has a dominating valuation overring
- `lem-immersion-with-closed-image` · lemma — An immersion with closed image is a closed immersion
- `thm-valuative-criterion-separatedness` · theorem — Valuative uniqueness detects separatedness
- `thm-immersion-monomorphism-locally-finite-type` · theorem — Immersions are monomorphisms locally of finite type
- `lem-separatedness-of-open-and-closed-immersions` · lemma — Open and closed immersions are separated
- `thm-separatedness-gluing-overlap-criterion` · theorem — Affine-overlap criterion for separatedness
- `cor-doubled-origin-not-separated` · corollary — The affine line with doubled origin is not separated
- `def-relative-projective-space-standard-charts` · definition — Relative projective space from standard charts
- `lem-projective-space-diagonal-closed` · lemma — The relative projective-space diagonal is closed
- `rem-hausdorff-analogy-limited` · remark — Separated is not Zariski Hausdorff
- `rem-valuative-criterion-quantifies-all-valuation-rings` · remark — The valuative criterion quantifies over all valuation rings

### `diagonals-separated-morphisms-and-valuative-uniqueness-examples` — Diagonals Separated Morphisms and Valuative Uniqueness — Examples (8 item(s))

- `ex-affine-line-diagonal-ideal` · example — The diagonal of the affine line
- `ex-projective-line-diagonal-bihomogeneous-equation` · example — The projective-line diagonal from the bihomogeneous equation
- `cex-doubled-origin-diagonal-not-closed` · counterexample — The doubled-origin diagonal is not closed
- `cex-doubled-origin-valuative-nonuniqueness` · counterexample — Two DVR lifts of one diagram over the doubled-origin line
- `ex-graph-closed-polynomial-map-scheme` · example — The graph of a polynomial map as a closed subscheme
- `cex-zariski-space-nonhausdorff-yet-separated-scheme` · counterexample — A separated scheme whose point space is not Hausdorff
- `ex-open-immersion-valuative-uniqueness-not-existence` · example — An open immersion has valuative uniqueness but not existence
- `cex-dvr-only-test-unsafe-without-hypotheses` · counterexample — DVR uniqueness need not detect nonseparatedness

### `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` — Kahler Differentials Conormal Sequences and Infinitesimal Lifting (34 item(s))

- `def-derivation-algebra` · definition — Derivation of an algebra
- `def-kahler-differentials-algebra` · definition — Universal Kähler differential module
- `thm-kahler-differentials-existence-presentation` · theorem — Existence and generators of Kähler differentials
- `cor-derivations-represented-by-differentials` · corollary — Derivations are maps out of Ω
- `lem-differentials-polynomial-algebra-free` · lemma — Polynomial differentials are free
- `thm-conormal-exact-sequence-algebra` · theorem — Conormal exact sequence for an algebra quotient
- `cor-jacobian-presentation-differentials` · corollary — Jacobian presentation of Ω
- `thm-transitivity-exact-sequence-differentials` · theorem — Transitivity sequence for differential modules
- `lem-differentials-localization` · lemma — Kähler differentials commute with localization
- `lem-differentials-base-change` · lemma — Kähler differentials commute with scalar base change
- `def-sheaf-relative-differentials` · definition — Sheaf of relative Kähler differentials
- `thm-sheaf-differentials-universal-property` · theorem — Universal property of relative differential sheaves
- `lem-affine-module-sheaf-universal-property` · lemma — The sheaf attached to a module on an affine scheme
- `lem-sheaf-differentials-affine-compatibility` · lemma — Affine charts recover algebraic Ω
- `thm-conormal-sequence-closed-immersion` · theorem — Conormal sequence for a closed immersion
- `thm-transitivity-sequence-schemes` · theorem — Transitivity sequence for schemes
- `lem-differentials-commute-base-change-schemes` · lemma — Relative differentials commute with scheme base change
- `def-relative-cotangent-space` · definition — Relative cotangent and tangent spaces
- `thm-cotangent-space-maximal-ideal-quotient` · theorem — Cotangent space at a rational point
- `thm-tangent-vectors-dual-numbers` · theorem — Tangent vectors as dual-number points
- `lem-differential-of-morphism-via-cotangent-map` · lemma — Differential of an S-morphism
- `def-formally-unramified-morphism` · definition — Formally unramified morphism
- `def-formally-smooth-morphism` · definition — Formally smooth morphism
- `def-formally-etale-morphism` · definition — Formally étale morphism
- `lem-differentials-diagonal-ideal-square` · lemma — The diagonal ideal modulo its square is Ω
- `thm-formally-unramified-differentials-zero` · theorem — Formal unramifiedness iff Ω vanishes
- `def-unramified-morphism-finite-type` · definition — Unramified morphism
- `thm-unramified-diagonal-open-immersion` · theorem — An unramified morphism has an open diagonal
- `lem-field-is-noetherian` · lemma — A field has only the zero ideal and itself, hence is Noetherian
- `lem-finite-type-field-zero-differentials-finite-separable` · lemma — Finite-type field extensions with zero Ω
- `lem-etale-residue-extensions-finite-separable` · lemma — Unramified residue extensions are finite separable
- `def-smooth-relative-dimension-via-differentials` · definition — Relative differential-rank condition
- `rem-conormal-map-need-not-injective` · remark — The conormal sequence is only right exact
- `rem-differentials-detect-infinitesimals-not-all-singularities-alone` · remark — Differential rank alone does not prove smoothness

### `kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples` — Kahler Differentials Conormal Sequences and Infinitesimal Lifting — Examples (9 item(s))

- `ex-differentials-polynomial-ring` · example — Differentials of k[x,y]
- `ex-differentials-hypersurface` · example — Differentials of a plane hypersurface
- `ex-differentials-dual-numbers` · example — Differentials of dual numbers in both characteristics
- `ex-differentials-separable-field-extension-zero` · example — Finite separable extensions have zero Ω
- `cex-differentials-purely-inseparable-field-nonzero` · counterexample — A purely inseparable field has nonzero Ω
- `cex-conormal-left-map-not-injective` · counterexample — A conormal left map with nonzero kernel
- `ex-tangent-vectors-affine-space-dual-numbers` · example — Dual-number vectors in affine space
- `ex-unramified-closed-point-immersion` · example — A closed point immersion is unramified
- `cex-frobenius-zero-tangent-map-not-formally-etale` · counterexample — Zero Frobenius tangent map does not imply formal étaleness

### `sheaf-cohomology-cech-cohomology-and-comparison` — Sheaf Cohomology Cech Cohomology and Comparison (67 item(s))

- `def-global-sections-functor-sheaves` · definition — Global sections of an abelian sheaf
- `lem-abelian-sheaves-form-a-grothendieck-category` · lemma — Abelian sheaves form a Grothendieck category
- `thm-abelian-sheaves-have-enough-injectives` · theorem — Enough injective abelian sheaves
- `def-sheaf-cohomology-derived-global-sections` · definition — Sheaf cohomology as right derived global sections
- `thm-zero-sheaf-cohomology-global-sections` · theorem — Degree-zero sheaf cohomology is global sections
- `thm-long-exact-sequence-sheaf-cohomology` · theorem — Long exact sequence of sheaf cohomology
- `lem-comparison-map-from-an-exact-complex-into-an-injective-resolution` · lemma — Lifting a morphism from an exact complex into an injective resolution
- `lem-cohomology-functoriality-sheaf-and-space` · lemma — Variance of sheaf cohomology
- `def-acyclic-sheaf-global-sections` · definition — Γ-acyclic abelian sheaf
- `def-flasque-sheaf` · definition — Flasque sheaf
- `lem-injective-sheaves-flasque` · lemma — Injective abelian sheaves are flasque
- `lem-flasque-kernel-lifts-quotient-sections` · lemma — Flasque kernel lifts quotient sections
- `thm-flasque-sheaves-acyclic` · theorem — Flasque abelian sheaves are Γ-acyclic
- `def-godement-resolution` · definition — Godement resolution of an abelian sheaf
- `thm-godement-resolution-flasque` · theorem — Godement terms are flasque and compute cohomology
- `def-cech-cochain-complex-open-cover` · definition — Ordered Čech cochain complex of a cover
- `lem-cech-differential-squares-zero` · lemma — The Čech differential squares to zero
- `def-cech-cohomology-open-cover` · definition — Fixed-cover Čech cohomology
- `lem-cech-h0-global-sections` · lemma — Čech H0 equals global sections
- `lem-increasing-cech-complex-extends-to-alternating-tuples` · lemma — Ordered and alternating Čech complexes agree
- `def-refinement-open-cover` · definition — Refinement map of ordered open covers
- `thm-refinement-map-independent-on-cohomology` · theorem — Refinement choices induce the same Čech map
- `def-global-cech-cohomology-directed-limit` · definition — Refinement-colimit Čech cohomology
- `def-acyclic-cover-for-sheaf` · definition — Acyclic open cover for a sheaf
- `lem-acyclic-rows-and-columns-of-cech-double-complex` · lemma — Acyclic directions of the Čech–Godement double complex
- `thm-cech-to-sheaf-cohomology-comparison` · theorem — Canonical map from fixed-cover Čech to sheaf cohomology
- `thm-leray-acyclic-cover-theorem` · theorem — Leray acyclic-cover comparison
- `lem-two-open-cover-cech-complex` · lemma — Čech complex for a two-open cover
- `thm-mayer-vietoris-sheaf-cohomology` · theorem — Mayer–Vietoris sequence for sheaf cohomology
- `thm-cohomology-disjoint-union` · theorem — Cohomology of a finite disjoint union
- `thm-cohomology-one-point-space` · theorem — A point has no higher sheaf cohomology
- `def-cohomological-dimension-space` · definition — Cohomological dimension relative to a sheaf class
- `lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity` · lemma — Cofinal Čech vanishing implies derived acyclicity
- `lem-noetherian-subspaces-and-compact-opens` · lemma — Subspaces of a Noetherian space and its compact open subsets
- `lem-sections-on-compact-opens-commute-with-filtered-colimits` · lemma — Filtered colimits of sheaves and sections over compact opens
- `lem-filtered-colimits-of-abelian-groups-are-exact` · lemma — Filtered colimits of abelian groups are exact
- `lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces` · lemma — Filtered colimits and cohomology on Noetherian spaces
- `lem-subsheaf-generated-by-sections` · lemma — The subsheaf generated by a family of sections
- `lem-locally-constant-functions-form-a-sheaf` · lemma — Locally constant functions form a sheaf with constant stalks
- `lem-finite-filtration-of-generated-subsheaves-of-the-constant-integer-sheaf` · lemma — Finite filtration of a generated subsheaf of the constant integer sheaf
- `lem-extension-by-zero-vanishing-reduces-to-all-sheaves` · lemma — Extension-by-zero generators detect sheaf-cohomology vanishing
- `lem-closed-immersion-preserves-sheaf-cohomology` · lemma — Closed-immersion pushforward preserves sheaf cohomology
- `lem-irreducibility-criteria-and-open-subspaces` · lemma — Irreducibility via nonempty open subsets, connectedness and open subspaces
- `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions` · lemma — The constant sheaf is the sheaf of locally constant functions
- `lem-constant-sheaf-on-irreducible-space-is-flasque` · lemma — Constant sheaves on irreducible spaces are flasque
- `def-irreducible-component-of-a-topological-space` · definition — Irreducible components of a topological space
- `lem-irreducible-components-of-a-topological-space` · lemma — Existence and basic properties of irreducible components
- `lem-noetherian-space-has-finitely-many-irreducible-components` · lemma — A Noetherian space is a finite union of irreducible closed subsets
- `lem-extension-by-zero-short-exact-sequence` · lemma — Extension by zero and the closed complement: a short exact sequence
- `lem-sheaf-supported-on-a-closed-subset-is-a-pushforward` · lemma — A sheaf with no stalks off a closed subset is a pushforward
- `thm-noetherian-topological-space-dimension-vanishing` · theorem — Grothendieck vanishing on a Noetherian space
- `def-tensor-product-of-abelian-sheaves` · definition — Tensor product of abelian sheaves and its total complex
- `lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product` · lemma — Stalks, coproducts and right exactness of the abelian sheaf tensor product
- `def-flat-abelian-sheaf` · definition — Flat abelian sheaves
- `lem-flatness-criteria-and-flat-covers-for-abelian-sheaves` · lemma — Flatness criteria and canonical flat covers of abelian sheaves
- `def-k-flat-complex-of-abelian-sheaves` · definition — K-flat complexes of abelian sheaves in the bounded-above setting
- `lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms` · lemma — K-flat sheaf complexes preserve quasi-isomorphisms
- `lem-abelian-sheaves-admit-bounded-above-flat-resolutions` · lemma — Flat resolutions of abelian sheaves
- `lem-derived-tensor-product-of-abelian-sheaves` · lemma — Derived tensor product of abelian sheaves
- `lem-morphisms-from-the-constant-sheaf-are-global-sections` · lemma — Morphisms from the constant sheaf are global sections
- `lem-sheaf-cohomology-classes-as-derived-morphisms` · lemma — Sheaf cohomology classes as derived morphisms
- `lem-koszul-structure-of-the-abelian-sheaf-tensor-product` · lemma — Associator, symmetry and unitors of the abelian sheaf tensor product
- `lem-koszul-coherence-for-derived-sheaf-tensor` · lemma — Koszul coherence of derived sheaf tensor
- `def-cup-product-sheaf-cohomology` · definition — Cup product in sheaf cohomology
- `thm-cup-product-graded-associative-natural` · theorem — Cup-product laws
- `rem-cech-cohomology-cover-dependent-without-acyclicity` · remark — Fixed-cover Čech can miss derived cohomology
- `rem-spectral-sequence-belongs-homological-algebra` · remark — Spectral-sequence algebra is external to this pair

### `sheaf-cohomology-cech-cohomology-and-comparison-examples` — Sheaf Cohomology Cech Cohomology and Comparison — Examples (11 item(s))

- `cex-global-sections-epimorphism-fails-lift` · counterexample — An epimorphism of sheaves need not lift global sections
- `ex-cech-cohomology-two-arc-cover-circle` · example — Čech H1 of a two-arc circle cover
- `cex-bad-cover-circle-cech-misses-h1` · counterexample — A one-open cover misses circle H1
- `ex-skyscraper-sheaf-acyclic` · example — A skyscraper sheaf is acyclic
- `ex-flasque-sheaf-all-functions` · example — All functions form a flasque sheaf
- `cex-constant-sheaf-not-flasque` · counterexample — A constant sheaf need not be flasque
- `def-projective-line-two-affine-cover-and-twisting-sheaf` · definition — Two-affine projective line and its twists
- `ex-mayer-vietoris-projective-line-cover-preview` · example — Two-affine Mayer–Vietoris on the projective line
- `ex-cech-sign-degree-two-three-opens` · example — Three-open Čech sign cancellation
- `ex-empty-cover-empty-space-cohomology` · example — Cohomology of the empty space and empty cover
- `cex-cech-refinement-map-not-canonical-on-cochains` · counterexample — Refinement choices differ on cochains

## Your seams

Your pages depend on another group's:

- `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` requires `algebraic-differentials-separability-and-smooth-local-presentations` (group d, batch 3)

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
