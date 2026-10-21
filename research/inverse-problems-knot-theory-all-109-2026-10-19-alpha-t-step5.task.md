# Step 5 adjudication — group **t**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 58, 59, 60: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **58**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 58 | `crossing-signs-writhe-and-linking-number` | A | knot-theory | 3112 | `geometric-braids-and-artin-generators`, `oriented-links-braid-closures-and-markov-equivalence`, `oriented-and-mod-two-intersection-numbers`, `hecke-markov-traces-and-polynomial-link-invariants`, `isotopy-extension-and-embedding-theory-beyond-whitney` |
| 58 | `crossing-signs-writhe-and-linking-number-examples` | B | knot-theory | 3113 | `crossing-signs-writhe-and-linking-number` |
| 59 | `seifert-surfaces-and-knot-genus` | A | knot-theory | 3114 | `codimension-one-foliations-and-secondary-classes`, `crossing-signs-writhe-and-linking-number`, `smooth-surgery-traces-and-handle-trading` |
| 59 | `seifert-surfaces-and-knot-genus-examples` | B | knot-theory | 3115 | `seifert-surfaces-and-knot-genus` |
| 60 | `connected-sums-and-prime-decomposition` | A | knot-theory | 3116 | `knot-exteriors-and-peripheral-systems`, `seifert-surfaces-and-knot-genus`, `vanishing-cycles-novikov-and-taut-foliations`, `isotopy-extension-and-embedding-theory-beyond-whitney` |
| 60 | `connected-sums-and-prime-decomposition-examples` | B | knot-theory | 3117 | `connected-sums-and-prime-decomposition` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `crossing-signs-writhe-and-linking-number` — Crossing signs, writhe, and linking number (10 item(s))

- `def-oriented-crossing-sign-writhe-and-blackboard-framing` · definition — Oriented crossing signs, diagram writhe, and blackboard framing
- `lem-linking-number-even-sum-and-reidemeister-invariance` · lemma — The mixed crossing sum is even and defines linking number
- `alg-oriented-linking-number-from-diagram` · algorithm — Compute oriented linking number from a diagram
- `thm-oriented-linking-number-scan-terminates-and-is-correct` · theorem — The diagram linking-number scan terminates and returns the stated integer
- `thm-linking-number-equals-signed-intersection` · theorem — Linking number equals signed intersection with a spanning surface
- `lem-framed-knot-push-off-self-linking-well-defined` · lemma — Small framed push-offs define a well-defined self-linking number
- `def-framed-knot-self-linking-and-seifert-framing` · definition — Framed knots, self-linking, and the Seifert framing
- `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing` · lemma — A blackboard push-off doubles each crossing into mixed crossings
- `thm-blackboard-framing-self-linking-is-writhe` · theorem — Blackboard self-linking equals diagram self-writhe
- `thm-linking-number-is-invariant-and-writhe-is-not` · theorem — Linking number is invariant and writhe changes under a kink

### `crossing-signs-writhe-and-linking-number-examples` — Crossing signs, writhe, and linking number — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-03-worked-cases` · example — Hopf and Whitehead link linking-number computations
- `cex-knot-kt-03-boundary-case` · counterexample — Writhe is not an invariant of an unframed knot

### `seifert-surfaces-and-knot-genus` — Seifert surfaces and knot genus (10 item(s))

- `alg-seifert-surface-from-diagram` · algorithm — Seifert disk-and-band construction from an oriented knot diagram
- `def-oriented-seifert-surface` · definition — Oriented Seifert surfaces in the three-sphere
- `lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms` · lemma — Smooth Jordan disks and extension of prescribed boundary collars
- `thm-oriented-knot-framing-classes-form-z-torsor` · theorem — Normal framing classes relative to a spanning surface are classified by winding
- `lem-seifert-bands-embedded-orientable-boundary-correct` · lemma — Seifert disks and bands form an embedded oriented spanning surface
- `thm-seifert-surface-from-diagram-procedure-properties` · theorem — Termination and finite output of the Seifert diagram procedure
- `thm-every-oriented-knot-bounds-a-seifert-surface` · theorem — Every smooth oriented knot in $S^3$ bounds a Seifert surface
- `def-oriented-seifert-surface-and-knot-genus` · definition — Seifert surfaces and smooth knot genus
- `thm-seifert-algorithm-boundary-euler-and-genus` · theorem — Euler characteristic and genus of a Seifert disk-and-band surface
- `thm-seifert-zero-framing-and-framing-integer` · theorem — A Seifert framing has zero self-linking

### `seifert-surfaces-and-knot-genus-examples` — Seifert surfaces and knot genus — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-04-worked-cases` · example — Worked Seifert-algorithm counts for the trefoil, figure-eight, and kinked unknot
- `cex-knot-kt-04-boundary-case` · counterexample — A genus-one spanning surface for the unknot is not minimal

### `connected-sums-and-prime-decomposition` — Connected sums and prime decomposition (37 item(s))

- `def-knot-connected-sum-and-prime-knot` · definition — Oriented connected sum and prime knot
- `lem-relative-transversality-for-embedded-surfaces` · lemma — Relative transversality for an embedded surface with fixed boundary
- `lem-smooth-ball-windows-and-boundary-disk-absorption` · lemma — Smooth ball windows and absorption along a boundary disk
- `lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model` · lemma — A bounded Euclidean homeomorphism has a compactly supported local model
- `lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods` · lemma — Compact manifold neighborhoods of a finite subpolyhedron
- `lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold` · lemma — The finite covering-tower endpoint has spherical boundary
- `lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk` · lemma — Eliminating double curves of a two-sheeted polygonal disk
- `lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products` · lemma — Finite polyhedral slabs without vertex levels have piecewise linear product parameters
- `lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings` · lemma — Regular polyhedral surface cones have height-preserving piecewise linear straightenings
- `def-pl-embedding-and-subpolyhedron` · definition — PL embeddings and subpolyhedra
- `lem-knot-connected-sum-well-defined` · lemma — The oriented connected sum is independent of its local choices
- `lem-capped-elementary-height-spheres-bound-smooth-balls` · lemma — Capped elementary height pieces bound smooth balls
- `lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation` · lemma — A PL embedded polyhedron becomes a subcomplex after subdivision
- `lem-mirroring-preserves-primality-of-a-knot` · lemma — Mirroring preserves primeness of an oriented knot
- `thm-oriented-knot-connected-sum-is-a-commutative-monoid` · theorem — Oriented knot connected sum is a commutative monoid
- `lem-knot-reverse-mirror-connected-sum-is-ribbon` · lemma — The trefoil sum with its reverse mirror is ribbon
- `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three` · theorem — Smooth Schoenflies for an embedded two-sphere in the three-sphere
- `lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar` · lemma — A compact locally collared polyhedron has a piecewise linear collar
- `lem-knot-decomposing-sphere-realizes-connected-sum` · lemma — A decomposing sphere realizes a connected sum of knots
- `thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds` · theorem — The loop theorem for finitely triangulated orientable PL three-manifolds
- `lem-parametrized-pl-balls-absorb-standard-boundary-windows` · lemma — Parametrized piecewise linear balls absorb standard boundary windows
- `lem-finite-pl-level-collars-give-global-band-products` · lemma — Finite piecewise linear level collars give global band products
- `lem-knot-genus-invariant-under-mirror-and-reversal` · lemma — Knot genus is invariant under mirroring and reversal
- `lem-knot-genus-zero-iff-unknot` · lemma — A knot has genus zero exactly when it is the unknot
- `thm-knot-genus-additive-under-connected-sum` · theorem — Knot genus is additive under connected sum
- `lem-simply-connected-pl-end-has-spherical-compact-neighborhoods` · lemma — A simply connected PL end has compact cores with one spherical frontier
- `lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls` · lemma — Polyhedral two-spheres without height saddles bound parametrized piecewise linear balls
- `lem-three-disk-pl-severing-reassembles-parametrized-balls` · lemma — Three-disk piecewise linear severing reassembles parametrized balls
- `lem-knot-decomposing-sphere-systems-cut-and-paste` · lemma — Cut and paste of decomposing sphere systems preserves prime factors
- `lem-right-trefoil-has-genus-one` · lemma — The right trefoil has genus one
- `lem-pl-height-product-caps-replace-by-one-extremum` · lemma — Piecewise linear height-product caps can be replaced by one extremum
- `lem-pointed-flat-pl-caps-admit-saddle-free-replacements` · lemma — Pointed flat piecewise linear caps admit saddle-free replacements
- `thm-schubert-prime-decomposition-for-knots` · theorem — Existence and uniqueness of prime decomposition for oriented knots
- `lem-right-trefoil-is-prime` · lemma — The right trefoil is prime
- `lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction` · lemma — Innermost critical height loops admit strict piecewise linear cap reduction
- `thm-finite-pl-schoenflies-in-dimension-three` · theorem — Finite piecewise linear Schoenflies in dimension three
- `thm-prime-decomposition-of-compact-orientable-three-manifold` · theorem — Prime decomposition of compact connected orientable three-manifolds

### `connected-sums-and-prime-decomposition-examples` — Connected sums and prime decomposition — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-05-worked-cases` · example — Connected-sum genus and ribbon examples
- `cex-knot-kt-05-boundary-case` · counterexample — The Alexander polynomial does not determine the prime knot summands

## Your seams

Your pages depend on another group's:

- `connected-sums-and-prime-decomposition` requires `knot-exteriors-and-peripheral-systems` (group s, batch 57)

Another group's pages depend on yours:

- `seifert-matrices-and-the-alexander-module` (group u) requires your `crossing-signs-writhe-and-linking-number`
- `seifert-matrices-and-the-alexander-module` (group u) requires your `seifert-surfaces-and-knot-genus`
- `alexander-polynomial-from-seifert-matrices` (group u) requires your `connected-sums-and-prime-decomposition`
- `fox-colorings-and-quandle-invariants` (group u) requires your `crossing-signs-writhe-and-linking-number`
- `multivariable-alexander-modules-and-chain-models` (group v) requires your `crossing-signs-writhe-and-linking-number`
- `dehn-surgery-on-knots-and-homology` (group w) requires your `crossing-signs-writhe-and-linking-number`
- `torus-knots-and-seifert-fibered-exteriors` (group x) requires your `connected-sums-and-prime-decomposition`
- `satellite-knots-and-jsj-tori` (group x) requires your `connected-sums-and-prime-decomposition`
- `smooth-and-topological-knot-concordance` (group y) requires your `seifert-surfaces-and-knot-genus`
- `smooth-and-topological-knot-concordance` (group y) requires your `connected-sums-and-prime-decomposition`
- `smooth-and-topological-knot-concordance` (group y) requires your `crossing-signs-writhe-and-linking-number`
- `kauffman-bracket-state-sum-and-jones-polynomial` (group ab) requires your `crossing-signs-writhe-and-linking-number`
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (group ab) requires your `crossing-signs-writhe-and-linking-number`
- `vassiliev-invariants-and-chord-diagrams` (group ac) requires your `crossing-signs-writhe-and-linking-number`
- `grid-homology-and-combinatorial-knot-floer-theory` (group ae) requires your `seifert-surfaces-and-knot-genus`
- `khovanov-homology-detects-the-unknot` (group ag) requires your `connected-sums-and-prime-decomposition`
- `planar-diagram-codes-and-knot-table-enumeration` (group ah) requires your `crossing-signs-writhe-and-linking-number`
- `planar-diagram-codes-and-knot-table-enumeration` (group ah) requires your `seifert-surfaces-and-knot-genus`
- `normal-surface-unknot-recognition` (group ai) requires your `connected-sums-and-prime-decomposition`
- `alternating-diagrams-and-crossing-number-minimality` (group ai) requires your `crossing-signs-writhe-and-linking-number`
- `bridge-presentations-and-unknotting-number` (group aj) requires your `crossing-signs-writhe-and-linking-number`
- `bridge-presentations-and-unknotting-number` (group aj) requires your `connected-sums-and-prime-decomposition`
- `milnor-invariants-and-link-peripheral-nilpotent-quotients` (group aj) requires your `crossing-signs-writhe-and-linking-number`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
