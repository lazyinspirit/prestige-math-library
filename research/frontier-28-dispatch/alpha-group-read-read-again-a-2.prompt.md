# Alpha

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
group work, `research/frontier-28-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
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

run: frontier-28
role: alpha-group-read
label: read-again-a-2

# Step 8 — group **a**, run `frontier-28`

You are the group Alpha for batches **2**, **3**, **8**: 4 A/B pair(s), 8 page(s), 134 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

**No step-7 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `rees-modules-artin-rees-and-hilbert-samuel-theory` | A | commutative-algebra | 111.021 | `krull-dimension-and-height-theorems-examples` |
| 2 | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` | B | commutative-algebra | 111.022 | `rees-modules-artin-rees-and-hilbert-samuel-theory` |
| 2 | `flatness-and-faithful-flatness` | A | commutative-algebra | 111.023 | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` |
| 2 | `flatness-and-faithful-flatness-examples` | B | commutative-algebra | 111.024 | `flatness-and-faithful-flatness` |
| 3 | `inverse-limits-and-noetherian-completion` | A | commutative-algebra | 111.025 | `flatness-and-faithful-flatness-examples` |
| 3 | `inverse-limits-and-noetherian-completion-examples` | B | commutative-algebra | 111.026 | `inverse-limits-and-noetherian-completion` |
| 8 | `projective-and-injective-resolutions` | A | homological-algebra | 365.045 | `long-exact-sequences-in-homology-examples` |
| 8 | `projective-and-injective-resolutions-examples` | B | homological-algebra | 365.046 | `projective-and-injective-resolutions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rees-modules-artin-rees-and-hilbert-samuel-theory` — Rees Modules Artin Rees and Hilbert Samuel Theory (17 item(s))

- `def-graded-ring-and-graded-module` · definition — Nonnegatively graded rings and modules, homogeneous elements, and twists
- `def-hilbert-function-and-hilbert-series` · definition — The Hilbert function and formal Hilbert series of a graded module with finite-length pieces
- `thm-hilbert-serre-theorem` · theorem — A finite graded module over a standard graded algebra has rational Hilbert series and eventual polynomial growth
- `def-associated-graded-ring-and-module` · definition — The associated graded ring and associated graded module of an ideal-adic filtration
- `def-rees-algebra-and-rees-module` · definition — The Rees algebra of an ideal and the Rees module of a filtered module
- `lem-rees-module-finiteness-and-stable-filtrations` · lemma — Over a Noetherian ring, an ideal filtration is stable exactly when its Rees module is finite, and the Rees algebra is Noetherian
- `thm-artin-rees-lemma` · theorem — Artin-Rees controls intersections of submodules with high ideal powers
- `cor-induced-and-intrinsic-adic-filtrations-are-equivalent` · corollary — The filtration induced on a submodule is equivalent to its intrinsic ideal-adic filtration
- `thm-krull-intersection-theorem` · theorem — The Krull intersection is the $(1-a)$-torsion submodule, and it vanishes in the Jacobson-radical case
- `def-hilbert-samuel-function-and-polynomial` · definition — The Hilbert-Samuel function and eventual Hilbert-Samuel polynomial of a finite local module
- `thm-existence-of-hilbert-samuel-polynomial` · theorem — The Hilbert-Samuel function agrees eventually with a rational polynomial in binomial form
- `def-hilbert-samuel-multiplicity` · definition — Hilbert-Samuel multiplicity as the factorial-scaled leading coefficient
- `thm-hilbert-samuel-dimension-theorem` · theorem — The degree of the Hilbert-Samuel polynomial equals the dimension of the support
- `thm-dimension-and-parameters-for-modules` · theorem — For a finite module, the dimension is the least size of an ideal of definition, and such tuples are systems of parameters
- `thm-additivity-of-hilbert-samuel-multiplicity` · theorem — Hilbert-Samuel multiplicity is additive on short exact sequences at the top dimension
- `thm-multiplicity-under-reduction-by-a-parameter` · theorem — Modulo a parameter preserves the top Hilbert-Samuel multiplicity up to the finite-annihilator correction
- `cor-parameter-ideal-multiplicity-positive` · corollary — For a nonzero finite module and an ideal of definition, Hilbert-Samuel multiplicity is a positive integer

### `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` — Rees Modules Artin Rees and Hilbert Samuel Theory — Examples (7 item(s))

- `ex-hilbert-series-of-a-polynomial-ring` · example — The polynomial ring and a homogeneous quotient have the expected Hilbert series and Hilbert polynomial
- `ex-associated-graded-of-a-local-ring` · example — The associated graded ring of a regular local ring and of a cusp local ring can be computed explicitly
- `ex-artin-rees-intersection` · example — An explicit Artin-Rees number can be computed for a submodule inside a finite module
- `ex-krull-intersection-in-a-local-domain` · example — In a Noetherian local domain, the intersection of the powers of the maximal ideal is zero
- `ex-hilbert-samuel-polynomial-of-a-dvr` · example — A DVR has Hilbert-Samuel polynomial $n+1$ and multiplicity one
- `ex-hilbert-samuel-multiplicity-of-a-plane-curve` · example — The Hilbert-Samuel multiplicity of a plane-curve singularity is read from its associated graded ring
- `ex-hilbert-samuel-finite-length-case` · example — In dimension zero the Hilbert-Samuel polynomial is constant and equals the module length

### `flatness-and-faithful-flatness` — Flatness and Faithful Flatness (15 item(s))

- `thm-direct-sums-and-direct-summands-preserve-flatness` · theorem — Direct sums and direct summands of flat modules are flat
- `thm-localisations-are-flat` · theorem — Every localization is flat, and localizing a flat module preserves flatness
- `thm-flatness-is-local` · theorem — A module is flat if and only if all prime localizations are flat, equivalently all maximal localizations are flat
- `thm-equational-criterion-for-flatness` · theorem — The equational criterion characterizes flat modules by lifting finite relations on generators
- `cor-flat-quotients-and-idempotent-ideals` · corollary — If $R/I$ is flat then $I = I^2$, and for finitely generated $I$ this is equivalent to generation by an idempotent
- `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres` · theorem — For a flat module, faithful flatness is equivalent to detecting nonzero modules and residue fields
- `thm-faithfully-flat-ring-map-characterisations` · theorem — A flat ring map is faithfully flat exactly when it detects proper ideals and is surjective on spectra
- `cor-faithfully-flat-ring-maps-are-injective` · corollary — Every faithfully flat ring map is injective
- `thm-faithfully-flat-descent-of-flatness` · theorem — Flatness descends along faithfully flat base change
- `cor-faithfully-flat-descent-of-finite-generation` · corollary — Finite generation descends along faithfully flat ring maps
- `thm-local-criterion-for-flatness-ideal-form` · theorem — For an $R$-finite module over a local map, flatness modulo $I$ and injectivity of $I \\otimes M \\to M$ imply flatness
- `thm-local-criterion-for-flatness-closed-fibre-form` · theorem — For an $R$-finite module over a local map, flatness on the closed fibre plus the multiplication-map condition implies flatness
- `thm-finite-flat-modules-over-local-rings-are-free` · theorem — A finite flat module over a local ring is free
- `cor-finite-flat-noetherian-modules-are-projective` · corollary — A finite flat module over a Noetherian ring is finite projective
- `thm-flat-going-down` · theorem — Every flat ring map satisfies going down

### `flatness-and-faithful-flatness-examples` — Flatness and Faithful Flatness — Examples (7 item(s))

- `ex-polynomial-algebras-are-faithfully-flat` · example — A polynomial algebra is free and therefore faithfully flat over its coefficient ring
- `ex-localisations-not-faithfully-flat` · example — A proper localization is flat but need not be faithfully flat
- `ex-fraction-field-flat-not-projective` · example — A fraction field is flat over its domain and may fail to be projective
- `ex-flat-idempotent-quotient` · example — A quotient by an idempotent ideal is flat
- `ex-nonflat-quotient-module` · example — The quotient by a nonidempotent ideal is not flat
- `ex-faithfully-flat-principal-open-cover` · example — A finite product of principal localizations covering the spectrum is faithfully flat
- `ex-finite-flat-module-over-a-local-ring` · example — A residue-field basis lifts to a basis of a finite flat module over a local ring

### `inverse-limits-and-noetherian-completion` — Inverse Limits and Noetherian Completion (21 item(s))

- `def-filtration-and-adic-filtration` · definition — Filtered modules and the $I$-adic filtration
- `def-adic-topology-on-a-module` · definition — The $I$-adic topology on a module
- `def-inverse-system-and-inverse-limit-of-modules` · definition — Inverse systems and inverse limits of modules
- `thm-universal-property-of-an-inverse-limit-of-modules` · theorem — Universal property of an inverse limit of modules
- `thm-inverse-limits-are-left-exact` · theorem — Inverse limits preserve kernels
- `def-mittag-leffler-inverse-system` · definition — Mittag-Leffler inverse systems
- `thm-exactness-of-inverse-limits-under-mittag-leffler` · theorem — Countable Mittag-Leffler systems preserve short exactness on inverse limits
- `def-separated-and-complete-filtered-module` · definition — Separated and complete filtered modules
- `def-adic-completion-of-a-module` · definition — The $I$-adic completion of a module
- `thm-kernel-and-universal-property-of-adic-completion` · theorem — Kernel and universal property of adic completion
- `prop-units-in-an-adically-complete-ring` · proposition — Elements congruent to $1$ modulo a defining ideal are units
- `thm-completion-is-exact-on-finite-modules` · theorem — Adic completion is exact on finite modules over a Noetherian ring
- `thm-completion-as-extension-of-scalars` · theorem — Completion of a finite module is extension of scalars
- `cor-completion-commutes-with-finite-quotients-and-submodules` · corollary — Completion commutes with finite quotients and induced submodules
- `thm-flatness-of-noetherian-completion` · theorem — The completion of a Noetherian ring is flat
- `thm-faithful-flatness-of-jacobson-adic-completion` · theorem — Jacobson-adic completion is faithfully flat
- `thm-noetherianity-of-adic-completion` · theorem — Completion of a Noetherian ring is Noetherian
- `thm-completion-of-a-noetherian-local-ring` · theorem — Completion of a Noetherian local ring is local with the same residue field
- `thm-finite-modules-over-complete-noetherian-rings-are-complete` · theorem — Finite modules over complete Noetherian rings are complete
- `thm-complete-nakayama-lemma` · theorem — Complete Nakayama lemma
- `thm-completion-preserves-dimension-and-hilbert-samuel-data` · theorem — Completion preserves dimension and Hilbert-Samuel data

### `inverse-limits-and-noetherian-completion-examples` — Inverse Limits and Noetherian Completion — Examples (7 item(s))

- `ex-p-adic-integers-as-an-inverse-limit` · example — The $p$-adic integers as an inverse limit and as a completion
- `ex-adic-completion-of-the-integers` · example — The $p$-adic completion map of the integers
- `ex-equivalent-adic-filtrations` · example — Equivalent adic filtrations have canonically isomorphic completions
- `ex-completion-not-exact-without-finiteness` · example — Completion need not be exact without a finiteness hypothesis
- `ex-completion-of-a-domain-not-a-domain` · example — A Noetherian domain can have a completion that is not a domain
- `ex-iterated-adic-completions` · example — Powers of an ideal give the same one-step adic completion
- `ex-semilocal-adic-completion` · example — Semilocal completion decomposes into completed local factors

### `projective-and-injective-resolutions` — Projective and Injective Resolutions (51 item(s))

- `def-augmented-chain-complex-over-an-object` · definition — Augmented chain complexes over an object
- `def-coaugmented-cochain-complex-under-an-object` · definition — Coaugmented cochain complexes under an object
- `def-projective-resolution-in-an-abelian-category` · definition — Projective resolutions in an abelian category
- `def-injective-resolution-in-an-abelian-category` · definition — Injective resolutions in an abelian category
- `def-deleted-resolution` · definition — Deleted resolutions
- `def-length-of-a-resolution` · definition — The length of a resolution
- `def-syzygy-and-cosyzygy-relative-to-a-resolution` · definition — Syzygies and cosyzygies relative to a chosen resolution
- `lem-one-step-extension-of-a-partial-projective-resolution` · lemma — One-step extension of a partial projective resolution
- `lem-one-step-extension-of-a-partial-injective-resolution` · lemma — One-step extension of a partial injective resolution
- `thm-enough-projectives-gives-projective-resolutions` · theorem — A chosen chain of projective covers gives a projective resolution
- `thm-enough-injectives-gives-injective-resolutions` · theorem — A chosen chain of injective embeddings gives an injective resolution
- `cor-every-module-admits-a-projective-resolution` · corollary — Under the Axiom of Choice, every module admits a projective resolution
- `cor-every-module-admits-an-injective-resolution` · corollary — Every module admits an injective resolution
- `prop-the-iterated-free-module-resolution-is-canonical-in-zf` · proposition — The iterated free-module resolution is canonical in ZF
- `def-augmentation-preserving-map-of-projective-resolutions` · definition — Augmentation-preserving maps of projective resolutions
- `lem-lift-a-map-through-degree-zero-of-a-projective-resolution` · lemma — Lifting a map through degree zero of a projective resolution
- `lem-extend-a-partial-comparison-map-by-one-degree` · lemma — Extending a partial comparison map by one degree
- `thm-projective-comparison-map-exists` · theorem — Projective comparison maps exist
- `lem-extend-a-partial-comparison-homotopy-by-one-degree` · lemma — Extending a partial comparison homotopy by one degree
- `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy` · theorem — Projective comparison maps are unique up to chain homotopy
- `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` · theorem — Projective resolutions of the same object are homotopy equivalent over that object
- `thm-injective-comparison-map-exists` · theorem — Injective comparison maps exist
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` · theorem — Injective comparison maps are unique up to cochain homotopy
- `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object` · theorem — Injective resolutions of the same object are homotopy equivalent under that object
- `cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence` · corollary — A projective or injective resolution is unique up to nonunique homotopy equivalence
- `prop-comparison-maps-respect-composition-up-to-homotopy` · proposition — Comparison maps respect composition up to homotopy
- `prop-comparison-of-the-identity-is-homotopic-to-the-identity` · proposition — Comparison of the identity is homotopic to the identity
- `lem-degree-zero-horseshoe-lift` · lemma — The degree-zero horseshoe lift
- `lem-the-horseshoe-kernel-fits-a-short-exact-sequence` · lemma — The horseshoe kernel fits into a short exact sequence
- `lem-inductive-horseshoe-step` · lemma — The inductive horseshoe step
- `thm-horseshoe-lemma-for-projective-resolutions` · theorem — The horseshoe lemma for projective resolutions
- `thm-horseshoe-lemma-for-injective-resolutions` · theorem — The horseshoe lemma for injective resolutions
- `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy` · proposition — Horseshoe resolutions are compatible with morphisms of short exact sequences up to homotopy
- `cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution` · corollary — A split short exact sequence admits the direct-sum resolution
- `thm-schanuel-lemma-in-an-abelian-category` · theorem — Schanuel's lemma in an abelian category
- `cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic` · corollary — Syzygies from two projective resolutions are stably isomorphic
- `thm-dual-schanuel-lemma-for-injective-copresentations` · theorem — The dual Schanuel lemma for injective copresentations
- `prop-a-projective-object-has-a-length-zero-projective-resolution` · proposition — A projective object has a length-zero projective resolution
- `lem-extension-from-subobjects-of-a-generator-detects-injectivity` · lemma — Extension from subobjects of a generator detects injectivity
- `def-functorial-one-step-generator-extension` · definition — The one-step generator extension functor
- `lem-the-one-step-generator-map-is-a-functorial-monomorphism` · lemma — The one-step generator map is a functorial monomorphism
- `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` · lemma — Transfinite iteration of the generator extension preserves monomorphisms and factorizes small-source maps
- `lem-a-sufficiently-long-generator-extension-iteration-is-injective` · lemma — A sufficiently long generator-extension iteration is injective
- `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` · theorem — Grothendieck abelian categories have functorial injective embeddings
- `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution` · corollary — Every Grothendieck category has enough injectives, and every object admits an injective resolution
- `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects` · false-statement — FALSE: enough projectives selects a projective resolution functor on all objects
- `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map` · false-statement — FALSE: a comparison map between resolutions is unique as a chain map
- `fs-two-syzygies-of-an-object-are-canonically-isomorphic` · false-statement — FALSE: two syzygies of an object are canonically isomorphic
- `fs-the-horseshoe-middle-resolution-is-canonical` · false-statement — FALSE: the horseshoe middle resolution is canonical
- `fs-every-abelian-category-has-enough-projectives-and-enough-injectives` · false-statement — FALSE: every abelian category has enough projectives and enough injectives
- `fs-every-acyclic-complex-of-projective-objects-is-contractible` · false-statement — FALSE: every acyclic complex of projective objects is contractible

### `projective-and-injective-resolutions-examples` — Projective and Injective Resolutions — Examples (9 item(s))

- `ex-a-projective-resolution-of-a-cyclic-abelian-group` · example — A projective resolution of a cyclic abelian group
- `ex-the-canonical-iterated-free-resolution-of-a-module` · example — The canonical iterated free resolution of a module
- `ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope` · example — An injective resolution of an abelian group beginning with a divisible envelope
- `ex-comparison-maps-between-two-resolutions-of-a-cyclic-group` · example — Comparison maps between two resolutions of a cyclic group
- `ex-an-explicit-comparison-homotopy` · example — An explicit comparison homotopy
- `ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups` · example — The horseshoe resolution of an extension of cyclic groups
- `ex-schanuel-lemma-for-two-presentations-of-a-module` · example — Schanuel's lemma for two presentations of a module
- `cex-two-projective-resolutions-with-nonisomorphic-first-syzygies` · counterexample — Two projective resolutions with nonisomorphic first syzygies
- `cex-a-category-with-enough-injectives-but-not-enough-projectives` · counterexample — A category with enough injectives but not enough projectives

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-28-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-28`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
