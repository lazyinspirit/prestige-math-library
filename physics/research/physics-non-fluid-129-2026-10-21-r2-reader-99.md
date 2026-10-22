# Step 3a reader report — batch 99

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-99`)  
Scope: batch 99 only

## Inventory opened

Assigned pages:

- `qsmx-operator-algebra-prerequisites` — `library/quantum-statistical-mechanics/qsmx-operator-algebra-prerequisites.md`
- `qsmx-operator-algebra-prerequisites-examples` — `library/quantum-statistical-mechanics/qsmx-operator-algebra-prerequisites-examples.md`

Assigned items, read in the in-batch supplier order for the final mathematical review:

- `def-qsmx-von-neumann-algebra`
- `def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint`
- `lem-qsmx-trace-class-duality`
- `lem-qsmx-linear-closed-polar-decomposition`
- `lem-qsmx-bicommutant-and-commutant-cyclicity`
- `lem-qsmx-monotone-bounded-positive-net`
- `lem-qsmx-closed-antilinear-polar-calculus`
- `lem-qsmx-von-neumann-predual`
- `ex-qsmx-nonfaithful-gns-vector`

I also opened the batch manifest, reader brief, batch notes, coverage record,
and cross-batch dependency array, and inspected the proof-contract manifest and
its nine entry keys. The manifest
contains eight A-page items and one B-page example. Its A-page `requires` list
has eleven entries; the union of the two page lists has thirteen unique IDs
(including the A page required by its B companion). The authoring notes say
seven A-page prerequisites; I used the manifest and current carriers as the
scope evidence.

The thirteen required page carriers reviewed were `qsm-quasilocal-states`,
`unbounded-self-adjoint-operators-and-stones-theorem`,
`measurable-hilbert-fields-and-direct-integral-operators`,
`relations-functions-and-quotients`,
`direct-integral-decomposition-and-type-i-groups`,
`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`,
`banach-alaoglu-goldstine-and-krein-milman`,
`weak-and-weak-star-topologies`,
`peter-weyl-theory-for-general-compact-groups`,
`dual-spaces-adjoint-operators-and-annihilators`, `filters-and-ultrafilters`,
`square-integrable-kernels-and-hilbert-schmidt-compactness`, and the assigned
`qsmx-operator-algebra-prerequisites` A page. The eleven root mathematical
pages matched their current SHA-256 pins in `research/math-imports.json`.

The assigned items declare 47 unique direct item prerequisites: six other
batch-99 items, two local published QSM mathematical suppliers
(`lem-qsm-state-gns-construction` and `lem-qsm-matrix-state-calculus`), and
39 pinned mathematical imports. I opened the exact supplier statements and
the relevant proofs or definitions used by the assigned arguments. The
current `batch-99.cross-batch-dependencies.json` is `[]`.

## Review verdicts

| Subject | Verdict |
|---|---|
| `qsmx-operator-algebra-prerequisites` | Pass after the item repairs below. The page prose accurately describes the cyclic/separating, trace-class, polar, monotone-limit, and predual results. |
| `qsmx-operator-algebra-prerequisites-examples` | Pass. The finite-matrix example proves both representations and the vector-functional identity under its stated hypotheses. |

All nine assigned items were reviewed. `def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint`, `lem-qsmx-bicommutant-and-commutant-cyclicity`, `lem-qsmx-closed-antilinear-polar-calculus`, and `ex-qsmx-nonfaithful-gns-vector` required no source edit. The local bicommutant argument supplies its finite-amplification proof; the cyclic/separating direction uses the stated projection argument. The antilinear item correctly limits its Tomita claim to well-definedness, density, closability, and polar decomposition of the graph closure. The example correctly distinguishes the defining representation from the Hilbert–Schmidt left representation.

## Repairs and evidence

- `def-qsmx-von-neumann-algebra`, Definition: a positive complex functional now explicitly takes real values in `[0,+∞)`. The same section defines a net and its nonempty directed preorder before using nets in the strong/weak topology and normality clauses. These edits make the scalar order and indexing objects explicit without changing the intended interface. The adjoint identity, operator order, and topology suppliers were opened and checked.
- `lem-qsmx-trace-class-duality`, Statement: `Tr` is now explicitly the upper-case notation for the basis-independent `tr` supplied by `thm-trace-is-absolutely-convergent-and-basis-independent`. The trace definition and theorem were opened; the upper-case notation was previously used without an explicit identification.
- `lem-qsmx-linear-closed-polar-decomposition`, Statement and Proof 1.1, 3.1–5.1: the partial-isometry convention now includes zero Hilbert spaces; the zero-domain case is discharged; positivity and self-adjointness for unbounded operators are defined; the positive spectral measure support and resolvent cutoffs are justified; and the use of a range/kernel theorem is restricted to its actual bounded-operator scope. The unbounded self-adjoint range/kernel identity needed for `P` is proved locally from the adjoint definition, followed by the orthogonal decomposition. The spectral theorem’s nonzero-space hypothesis is separated from the zero-space case.
- `lem-qsmx-von-neumann-predual`, Statement, Facts & Assumptions, Proof 1.1, 2.2: the canonical injection `iota: Q → M*` is defined, positivity of a member of `Q` is defined through that injection with real nonnegative values, and the weak-operator matrix-coefficient neighborhood claim is tied to Riesz representation. The normality proof now writes evaluations through `iota` explicitly. The trace-class ideal, quotient, dual, Riesz, and monotone-net suppliers were opened and checked.
- `lem-qsmx-monotone-bounded-positive-net`, Proof 3.1: the zero-Hilbert-space case is discharged before taking the supremum over unit vectors.

The quotient trace-class construction is a local proof for arbitrary concrete
represented von Neumann algebras. The inspected Anantharaman–Popa theorem is
restricted to a tracial standard representation and is used only as an
independent comparison; no broader conclusion is attributed to that source.

## Consumer review after interface clarifications

I checked current uses of the clarified definitions/results before handoff.
The `def-qsmx-von-neumann-algebra` consumers in batches 99, 100, and 118 use
the concrete algebra, the positive cone, cyclic/separating vectors, or vector
functionals with the same meanings. The `lem-qsmx-linear-closed-polar-decomposition`
consumer `lem-qsmx-closed-antilinear-polar-calculus` remains valid with the
zero-space extension and explicitly continues to use the graph closure. The
`lem-qsmx-trace-class-duality` consumers use the same trace after the notation
alias. The batch-100 consumers of `lem-qsmx-von-neumann-predual`
(`def-qsmx-von-neumann-kms-state`, `lem-qsmx-modular-resolvent-core`, and
`thm-qsmx-tomita-takesaki`) use its predual and vector-normality results; the
added positive-functional identification does not alter their claims. No
consumer repair outside batch 99 was required.

The prerequisite page `qsm-quasilocal-states` contains a TikZ triangle for
nested local spin inclusions. Its objects, inclusion maps, directions, and
commuting composition agree with `lem-qsm-local-spin-inclusions-isometric`;
the supplier proves the identity algebraically. Neither assigned page contains
a TikZ or tikzcd diagram, and no diagram repair was needed.

## Sources checked

- F. Hiai, *Concise Lectures on Selected Topics of von Neumann Algebras*,
  https://arxiv.org/pdf/2004.02383: §1.1–1.3 (PDF pp. 3–4) for operator
  topologies, predual/normality context; §2.1 (PDF pp. 10–11) for the
  cyclic-separating Tomita operators and closability identity; Appendix A.1
  (PDF pp. 142–143) for the spectral measure of a positive self-adjoint
  operator, its square-root domain, and bounded resolvent multipliers.
- Bruce Blackadar, *Operator Algebras: Theory of C*-Algebras and von Neumann
  Algebras*, https://bruceblackadar.com/Mathematics/Cycr.pdf: Part I
  §§I.2.5.3–I.2.5.4 (PDF p. 17) for commutants and finite-tuple
  bicommutant approximation; §§I.8.5.3–I.8.5.6 (PDF pp. 43–45) for trace
  class, trace and ideal facts; §I.4.2 (PDF pp. 19–21) for bounded positive
  square roots; Part III §III.4.1.2 (PDF p. 319) for the cyclic-separating
  adjoint/closability calculation.
- Edward Witten, *Notes on Some Entanglement Properties of Quantum Field
  Theory*, https://arxiv.org/pdf/1803.04993: §3.1 (printed pp. 18–20, PDF
  pp. 19–20), equations (3.2)–(3.10) and footnote 15. The footnote limits
  the displayed identity to an extension relation; the assigned items do not
  claim equality with the adjoint or closure.
- Claire Anantharaman and Sorin Popa, *An Introduction to II1 Factors*,
  https://www.idpoisson.fr/anantharaman/publications/IIun.pdf: Chapter 7,
  §7.4, Theorem 7.4.5 (PDF pp. 119–121). Its statement and proof concern
  tracial standard form; the assigned general quotient theorem is established
  locally.

## Edits and validation

The current batch proof contract was regenerated for all nine assigned items
after the source repairs; no stale `verification.judge` record was present on
the changed items. Reflow and precheck passed for each of the five changed
items. The final `proof-layout` check covered five items and 24 proof steps
with zero defects.

## Unedited defects and blocker

No confirmed or suspected defect remained in an uneditable subject. No blocker.

Coverage limit: the initial opening of `def-qsmx-von-neumann-algebra` and its
GNS supplier preceded opening their direct supplier files; those suppliers
were subsequently opened and checked before the final verdicts. I opened every
assigned page/item, all 47 unique direct item
dependencies, and all 13 unique page IDs in the two manifest `requires` lists.
The eleven root mathematical page pins and the 39 imported direct item pins
matched. I did not recursively audit every transitive dependency below every
published supplier or every unrelated item placed on the prerequisite pages.
