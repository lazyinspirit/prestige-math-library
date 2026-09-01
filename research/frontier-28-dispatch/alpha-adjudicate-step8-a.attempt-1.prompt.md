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
role: alpha-adjudicate
label: step8-a
covers: 2, 3, 8

# Step 8 — group **a**, run `frontier-28`

You are the group Alpha for batches **2**, **3**, **8**: 4 A/B pair(s), 8 page(s), 134 item(s), 92 open rejection(s) over 92 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-category-with-enough-injectives-but-not-enough-projectives` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `4d3b36386e307f3a92876a409dd2694eb2ae1962f83abfe059bb13cba2d1e025` |
| `cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence` | `projective-and-injective-resolutions` | gpt-5.6-terra | `a85dd8231ad3521948e0f9ae0f8388a6f675b63bec19fee6c1ca25a21c6f5e26` |
| `cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `65e00600191b7e7a6756f113f2d0a5a284aa2c2f2b64b3a772a92976a8a877ba` |
| `cor-completion-commutes-with-finite-quotients-and-submodules` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `6ebb2d3bb454728880fddbd5f7e423437d24cc5de04439a84da408069118649c` |
| `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `d86c82e1f004e2a7bc06b902eb43d16e4e9346e041a0a50bbd14a5e55a42a339` |
| `cor-every-module-admits-an-injective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `333e77ae50a6ab8a101fd26d0e6b87f4dac18f0a1d03a3e1e24a5c1bcbfbf881` |
| `cor-faithfully-flat-descent-of-finite-generation` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `305c5e8c28b3bb9516f8c9b8c848cbdb5775d8c8799c96a896ac8755ed074fa2` |
| `cor-faithfully-flat-ring-maps-are-injective` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `1cbec297e0e33cd2061115235b08da302994eddeb3ce689a6807fd9d80ef96c1` |
| `cor-finite-flat-noetherian-modules-are-projective` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `7a2b80a2c4b70a9388c64d1a178ce029c80cd2c0fae97bf879ed33405a7e6dfc` |
| `cor-flat-quotients-and-idempotent-ideals` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `e8b5b95e285c510e7b8009b53e618b9d74ac4d0bff4db407e57bc7046df159fd` |
| `cor-parameter-ideal-multiplicity-positive` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `0d3a1946c5e462a8cb7df789fd3f15e15a1f365d5883322a98fc24b55f158def` |
| `cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic` | `projective-and-injective-resolutions` | gpt-5.6-terra | `753540a3c34dd889fa098daab783be6a46ac02a0e02afe109402ec2ebbc043a2` |
| `def-adic-completion-of-a-module` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `7f3c50875f7b0dccfc2548d6c0ec49fdd7043fe2c41090ac352e8c70d6a5a0e8` |
| `def-functorial-one-step-generator-extension` | `projective-and-injective-resolutions` | gpt-5.6-terra | `fec60214efd5a58de649905dd7dfa2fad580aea72199dedeff84d968b711401e` |
| `def-graded-ring-and-graded-module` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `23a92589cf88cbb8a1d5eb56f225c8c79575d29502c9f0eb035690415d4ff7dc` |
| `def-hilbert-function-and-hilbert-series` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `83eabec980b78ba7b601fc7201a30a5937c80db84c75927b0783e4107df7c0f5` |
| `def-hilbert-samuel-function-and-polynomial` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `4aff1aaaacd1eb0c86b8c56fb619e9aa2f197ac8c5310ea5c3198e19b335282b` |
| `def-hilbert-samuel-multiplicity` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `b72ccc5cdb741f7ac0697f3ccfa733103aa10702b5bc87e402768a049db37b47` |
| `def-inverse-system-and-inverse-limit-of-modules` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `b41696f90e569f8ab8fdca9e6d273fc6440222195da18ef7bc6eb7c8e5a967e0` |
| `def-rees-algebra-and-rees-module` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `85a12755e41a08beaf3d7af1454cd3e42188152c5ca8c092dd311903fe2f6c59` |
| `def-separated-and-complete-filtered-module` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `f5cee9052135ae1cf1f94246014c99e805910283c5bbbd179006b9dff5da821e` |
| `ex-an-explicit-comparison-homotopy` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `e153c8d449e21276db683d985a5369494221fe6d74842edbeccd96ac75c11446` |
| `ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `128c39db1474f6de87bcf755e684d3105ac995d837a615fee5f0b3c989bb57bd` |
| `ex-comparison-maps-between-two-resolutions-of-a-cyclic-group` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `026935c2bf555de755f119f772f598c7d5df59c0fb77157b0509d15eea1773b4` |
| `ex-completion-not-exact-without-finiteness` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `bf74e1384c536522fedad8b0524eefeb4fa1bba77c9e0c482ee2f560e5e7c5d3` |
| `ex-completion-of-a-domain-not-a-domain` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `48548d1ef8463b658066c94ddeaa4f0c6e6a32648e77d72605e37bf5b4477dfc` |
| `ex-equivalent-adic-filtrations` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `82126ae8f437dac64bec3fd2081242381db4e74be8eb74c2cc58202150bb727a` |
| `ex-faithfully-flat-principal-open-cover` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `4c4be5c10d492eae156f6594e2a403fa9db99f7a96223e5a11424eb218d94302` |
| `ex-finite-flat-module-over-a-local-ring` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `5cdf8366b3c5c083c57171ee776868f3a49a321e4609d4d230db7f4380cfe5b4` |
| `ex-fraction-field-flat-not-projective` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `2667855b29af8d366ee19e491e1fa18c279d3360a65ba47ea37e2f6f0234b33d` |
| `ex-iterated-adic-completions` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `238ebedd0689295f6fa8fbe095a0f598c538e6cfe42ed8511246c6084b5c273d` |
| `ex-krull-intersection-in-a-local-domain` | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` | gpt-5.6-terra | `2f53ac3c0b1c1cb8a3b3c4efe902cc47103fcfb3a9ac5284c3f7b9a9e578b8c2` |
| `ex-localisations-not-faithfully-flat` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `15fc815fe62d34fce5abeb6e794e02eede3a13e9f74eff8b8699a62b0644a13a` |
| `ex-polynomial-algebras-are-faithfully-flat` | `flatness-and-faithful-flatness-examples` | gpt-5.6-terra | `2a3883d49c0128adc1c93654603b148bfb2c31a183f78c75015884e957c30056` |
| `ex-schanuel-lemma-for-two-presentations-of-a-module` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `3ae32ef724f47d44bf3912d69a1fb3bd28a571a6d2ac11c9a543f17e9d71808f` |
| `ex-semilocal-adic-completion` | `inverse-limits-and-noetherian-completion-examples` | gpt-5.6-terra | `34c245373f5fa187ca80147b6d2418e1293e0d14af125b5cb06a5641cd435ecf` |
| `ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups` | `projective-and-injective-resolutions-examples` | gpt-5.6-terra | `b8e3349d8c56b9ef61507aaf2c7e3094e9310c98e49aaac6bbec2618f33ad0b3` |
| `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map` | `projective-and-injective-resolutions` | gpt-5.6-terra | `3e2f766bf21ed7ed2a8b699a7120e7d440e7d5a9f52dc4afa2874b533bd933f5` |
| `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects` | `projective-and-injective-resolutions` | gpt-5.6-terra | `5177dd6dda0b2dc8482bf4483990d085357fa467ffd9c00aebdd9c462f2278d0` |
| `fs-every-abelian-category-has-enough-projectives-and-enough-injectives` | `projective-and-injective-resolutions` | gpt-5.6-terra | `3c838f42405c57464792272fd2dfaeeeab899e7cee959cedca717ff7dd42a022` |
| `fs-the-horseshoe-middle-resolution-is-canonical` | `projective-and-injective-resolutions` | gpt-5.6-terra | `a63fd6226077c6268fbb6cbb0bf1aead3ea5e7a407f4166c2740f38200570789` |
| `lem-a-sufficiently-long-generator-extension-iteration-is-injective` | `projective-and-injective-resolutions` | gpt-5.6-terra | `468d607c76b0e99f3336a00a42f320fcc9a7563b631427bebcd372baa1ede2e6` |
| `lem-degree-zero-horseshoe-lift` | `projective-and-injective-resolutions` | gpt-5.6-terra | `9355e75214d3e33dc36f885e13ab7ce66323459f08c05522f7615c22b54a1a48` |
| `lem-extend-a-partial-comparison-homotopy-by-one-degree` | `projective-and-injective-resolutions` | gpt-5.6-terra | `961f705fc1da4ee04f6cb2d55d9b8a59d421d1ae9fdb6ddf80504489eb707334` |
| `lem-extension-from-subobjects-of-a-generator-detects-injectivity` | `projective-and-injective-resolutions` | gpt-5.6-terra | `bff35c3e530d8e0caa7c9b187e4309b1d29ede6c29055da6d29437b1cd1970b7` |
| `lem-one-step-extension-of-a-partial-injective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `35f3283432516ca844d1b43912f722cc043dd44756e741142fe895437ebcc8a7` |
| `lem-one-step-extension-of-a-partial-projective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `826f89dc75b42c9f11808cc312e28d193b1dacace80ece0762f8c03bc786e549` |
| `lem-rees-module-finiteness-and-stable-filtrations` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `8a85d4755e070e835cd436c89625709f8590361b5cbb63fd296e34ba262d33c7` |
| `lem-the-horseshoe-kernel-fits-a-short-exact-sequence` | `projective-and-injective-resolutions` | gpt-5.6-terra | `4db08e7cd4534eb80994fa4662538225987caaba793d77704df62f1662318e48` |
| `lem-the-one-step-generator-map-is-a-functorial-monomorphism` | `projective-and-injective-resolutions` | gpt-5.6-terra | `aa641a3c85ed2f6b913ebdf35a3f582c109a543f6aafa76f26a3b660ee3e4f40` |
| `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` | `projective-and-injective-resolutions` | gpt-5.6-terra | `33dd092d01983647001665021c206f13ccfac827742d0b50ea2d68d177037583` |
| `prop-a-projective-object-has-a-length-zero-projective-resolution` | `projective-and-injective-resolutions` | gpt-5.6-terra | `e50da4762493de3ad893ba1dffa73645ebe46fef586a2f33dd2e0e9743a58780` |
| `prop-comparison-maps-respect-composition-up-to-homotopy` | `projective-and-injective-resolutions` | gpt-5.6-terra | `90040ceb64cd8007450c0fa29a025c7f156c27477355da3222869598c712d313` |
| `prop-comparison-of-the-identity-is-homotopic-to-the-identity` | `projective-and-injective-resolutions` | gpt-5.6-terra | `36bfa32734cd12ab265b34d8eb06393268cfc3e0e40674eeda030f43cccc85c5` |
| `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy` | `projective-and-injective-resolutions` | gpt-5.6-terra | `c433f728f13b07040aff77135b5dc56643b7ab72d06e12d8c691af5f5e10c524` |
| `prop-the-iterated-free-module-resolution-is-canonical-in-zf` | `projective-and-injective-resolutions` | gpt-5.6-terra | `85151277c32f357dc2826928da1a7b02c1804f3524228e02dd700792d575e15e` |
| `prop-units-in-an-adically-complete-ring` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `52df9f5365cbcccffa7d714cb795f7a948ad3f727b1cff4b97ffb6085d94a65d` |
| `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` | `projective-and-injective-resolutions` | gpt-5.6-terra | `b4e17b4c149f540f9e306340bd3159aa2e2058854498870a25f486af781c12f9` |
| `thm-additivity-of-hilbert-samuel-multiplicity` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `fb757385eca419e896a60c2b0ec3c4f69872715b500e4db9d949ce4cb494fcf5` |
| `thm-artin-rees-lemma` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `a8d971b567d64f5d382b5223484eaa79cbd5de4d117c49582fdb56f8152a3b9b` |
| `thm-complete-nakayama-lemma` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `e5b162ed28b672ad2f536479bc45f65302316b4d36a5c00cd48d01fd52c398a4` |
| `thm-completion-as-extension-of-scalars` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `af58622a50dff3186928bb9ad5d86e3c1c17374f8cb55be7b147218c7c368d96` |
| `thm-completion-is-exact-on-finite-modules` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `ae9cf6933d7a70c39693f288bd8273fe702ba7b1e115f335f7e64f0d0c7f4a24` |
| `thm-completion-of-a-noetherian-local-ring` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `26a628c24149aa84d893b8790d7b6a3d370112844f3c1dca0911975d9a8810d1` |
| `thm-completion-preserves-dimension-and-hilbert-samuel-data` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `11f418a9591ea6516f8bc6736d93a1ab359f58d4af32e781196cc06a30179437` |
| `thm-dimension-and-parameters-for-modules` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `09518d328564286835cfe86c52782242621beb2e2b0ccb0087b97aa20dda3df9` |
| `thm-direct-sums-and-direct-summands-preserve-flatness` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `c5ce286751b8ceb6a1811efc3e5b3f5b4a687acfe62cac8e940daa7016bca142` |
| `thm-dual-schanuel-lemma-for-injective-copresentations` | `projective-and-injective-resolutions` | gpt-5.6-terra | `96ba3bdee50eae18b0dd3d7b4da94761e5e599475c7f6fd64b769099e3301453` |
| `thm-enough-projectives-gives-projective-resolutions` | `projective-and-injective-resolutions` | gpt-5.6-terra | `c8ce3781651d184263fb884c161b43a0fada466ed65d93f00fa2df0ecb9a1582` |
| `thm-existence-of-hilbert-samuel-polynomial` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `218e30abb49ba8bac3e9314cf980c75ec13de79f0ea984d70b9e97872da80ce6` |
| `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `f6b6541189098d33d323781ce41b12a5c307c417cd3265efc53cd2c973c6497e` |
| `thm-faithful-flatness-of-jacobson-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `4449a8368767721233144e3fb12d975b5164bff2cc9123b7ef6e111fab8562e0` |
| `thm-finite-flat-modules-over-local-rings-are-free` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `0fc678bbd38a1e13e39e41f33c666f5527e82317dffc8703462f00a0f6352f22` |
| `thm-finite-modules-over-complete-noetherian-rings-are-complete` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `52af9a761fb328c7cb664c6249e68e428d7c1c3c2a41f849e0d5efac965a21dc` |
| `thm-flat-going-down` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `fe004b6475d036d59a8bd7b0732e48a9965c5e4695ab2800d35f6fb26e218de3` |
| `thm-flatness-is-local` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `ab8df110978638de79c478b229d512ffc00ecc839ef7e218e5752fa4922bdbde` |
| `thm-flatness-of-noetherian-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `2d62e308014b8da851f5d21a958bb4e2d29a520caaae911ccb6d5cd8eba8a45b` |
| `thm-hilbert-samuel-dimension-theorem` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `0d47e21ec3ee5c8c83502bc28f9cd22a45962d13931888e895d740d9cd61bb47` |
| `thm-hilbert-serre-theorem` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `a03c1a75170bd27fa4295e85f87391e8418b9d8b73bcec1ccb315c73d333addf` |
| `thm-horseshoe-lemma-for-injective-resolutions` | `projective-and-injective-resolutions` | gpt-5.6-terra | `34c1f5c0004aec5e1ec2ea868c0ae9fd10899ef4835b57fc1ecb67bd4f904506` |
| `thm-horseshoe-lemma-for-projective-resolutions` | `projective-and-injective-resolutions` | gpt-5.6-terra | `c0c17fa88773c054c05fd8169f026792528ee1cabc8c6e775fb51c081df9973b` |
| `thm-injective-comparison-map-exists` | `projective-and-injective-resolutions` | gpt-5.6-terra | `59c222915314e13908badbc8d1fb76e732a3d8e70f331552bb6559036a99f318` |
| `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` | `projective-and-injective-resolutions` | gpt-5.6-terra | `65ddddeca965faf794a0f19220991a7ee4f6b47ac407c2a250188962bb55c6f8` |
| `thm-inverse-limits-are-left-exact` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `d306db5b964a2ebcf92c72f4bdf1e032586dde9c7d42311acf5a508db34ffb8d` |
| `thm-kernel-and-universal-property-of-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `931d79e83981e3ea54d7f9d97aa46757fc74c3f4d46b288967a7e42dbb02b0e3` |
| `thm-krull-intersection-theorem` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `d1828b5f5c7bc9e213d0c71169978957e4f2ccdfac2a62e9550b1eca60fd3dd0` |
| `thm-local-criterion-for-flatness-ideal-form` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `13832b59bac0381c0bb23616fc002444c1ff84fc09879bacbda680f750ee7619` |
| `thm-localisations-are-flat` | `flatness-and-faithful-flatness` | gpt-5.6-terra | `30e247e3efe09950f916506060366a20d286ee4d6b4940f8542527fb6b407b7a` |
| `thm-multiplicity-under-reduction-by-a-parameter` | `rees-modules-artin-rees-and-hilbert-samuel-theory` | gpt-5.6-terra | `fc14ab8407bd265ae3d3024c0db74291acd50e942e61b8e5d83ba47e0408aabc` |
| `thm-noetherianity-of-adic-completion` | `inverse-limits-and-noetherian-completion` | gpt-5.6-terra | `b3b89030551ed8aa72fe60c7e133d10b71d1650a0011ef670dc5effc98c369cb` |
| `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` | `projective-and-injective-resolutions` | gpt-5.6-terra | `3076f820cfb0919e1323b0c956faa49bf893b5743448de10e1164d42753902d3` |
| `thm-schanuel-lemma-in-an-abelian-category` | `projective-and-injective-resolutions` | gpt-5.6-terra | `771066dde418e3f2f9d8e69937f2144699b0bb6d0d5835930fd271b914b82be8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-28`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-28-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-28-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-28-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-28-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
