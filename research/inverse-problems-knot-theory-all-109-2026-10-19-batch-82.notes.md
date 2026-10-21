# Batch 82 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `kauffman-bracket-state-sum-and-jones-polynomial`  
Current batch dependency level: 1; prerequisite batch: 58.

## Inventory and planned item levels

The KT-29 design section and prerequisite map give eight A-page items and two
B-page leaves. `plan-spec.json` and the generated page rows match the task on
page IDs, titles, category, order, companions, and page requirements. Their
initial `items: []` fields were unpopulated scaffold inventory. I drafted the
first three carriers before filling the batch inventory; the mistake was
corrected before writing the remaining carriers. The current manifest now
contains all ten IDs, logical dependencies, and computed levels.

The final item levels are: level 0, `def-kauffman-bracket-smoothing-and-loop-value`;
level 1, `alg-kauffman-bracket-state-sum` and
`lem-kauffman-bracket-r2-r3-identities`; level 2,
`thm-kauffman-bracket-state-sum-procedure-properties`,
`lem-kauffman-bracket-curl-and-writhe-correction`, and
`lem-hecke-bracket-trace-dictionary-and-local-descent`; level 3,
`thm-normalized-bracket-is-an-oriented-link-invariant` and
`cex-knot-kt-29-boundary-case`; level 4,
`thm-bracket-state-sum-matches-library-jones-specialization`; and level 5,
`ex-knot-kt-29-worked-cases`. These labels use only in-run dependency edges;
the batch-level prerequisite remains batch 58.

## Plan and convention decisions

- `research/plan-knot-theory-track.md` KT-29 controls the item's claims and
  crossing chart. The plan-spec pair metadata matches it; `items: []` in the
  generated page rows leaves authors to instantiate the item inventory.
- The KT-29 source chart assigns coefficient $A$ to the horizontal smoothing
  and $A^{-1}$ to the vertical smoothing for the pictured crossing. The labels
  belong to that chart and are not rotated as an orientation-free rule.
- In a braid box whose longitudinal parameter increases from bottom to top,
  the positive geometric half twist has the northwest-to-southeast over-branch
  in the $(t,x)$ viewing chart. The orientation-preserving quarter-turn into
  the KT-29 source chart sends its A-smoothing to the vertical through tangle
  $I$ and its B-smoothing to the cup-cap $e_i$. This fixes the operator
  $C_i=AI+A^{-1}e_i$ used in the formal trace proof and agrees with the
  published Hecke generator convention.
- Kauffman 1990 §III defines the bracket, state sum, loop value, curl factors,
  writhe correction and Jones substitution. Its R2/R3 proof points to earlier
  bracket work; the authored local algebra proofs do not rely on that citation.
- Roberts's 1999 lecture notes use a chart with vertical $A$ smoothing when the
  overpass is drawn bottom-left to top-right. This is a chart-convention
  difference; KT-29's Kauffman 1990 chart remains controlling. Funar's notes and
  Kauffman's 2022 lecture article are independent cross-checks, not substitutes
  for the local proofs.
- The prerequisite map lists HOMFLYPT/Hecke suppliers and full AC on several
  raw bracket claims. Direct dependencies were pruned where the authored proof
  is only finite diagram algebra. Raw state sum, R2/R3 algebra, curl
  calculation, and the fixed-braid trace dictionary use no choice. The
  normalized link-invariance theorem uses AC$_\omega$ through the oriented
  Reidemeister theorem. The library Jones comparison assumes full AC and
  explicitly derives AC$_\omega$ through the published implication theorem;
  these branches remain visible.
- The current published item
  `thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization`
  has a roots-of-unity hypothesis and proves only those specializations. It
  does not supply the generic formal $q,A,t$ trace dictionary required by
  KT-29. The local trace argument proves the generic case from the diagram
  closure trace and specialized Markov-trace uniqueness; it does not cite the
  root-of-unity theorem as a generic result.
- The plan map's procedure theorem mentions rejection of syntactic failures,
  but the KT-29 algorithm takes a typed finite regular diagram and declares no
  encoded-string parser or rejection cases. The separate procedure result
  therefore proves termination and exact output on the declared typed domain;
  no parser behavior is added.

## Cross-batch supplier check

The exact batch-58 supplier `def-oriented-crossing-sign-writhe-and-blackboard-framing`
and `thm-linking-number-is-invariant-and-writhe-is-not` are now present in
`items/`; the crossing-sign definition is on the current batch-58 A page and
the writhe theorem is still a draft. I inspected the actual definition and the
writhe theorem statement and proof. The definition fixes the positive viewing
normal, induced projection-plane orientation, determinant sign, positive
geometric half twist sign, and signed-sum writhe. The proof theorem states the
type-I writhe change and the type-II/type-III sign behavior. No carrier from
batch 58 was edited.

The assigned proofs use the actual sign definition where needed. The curl
lemma and normalized-invariance theorem use the determinant/writhe clauses; the
Jones comparison proves $\operatorname{wr}(\widehat\beta)=e(\beta)$ directly
by summing the signs of the finitely many positive and reflected inverse
half-twist letters. It does not depend on
`thm-linking-number-is-invariant-and-writhe-is-not`. The generic fixed-braid
trace lemma uses the half-twist path and the declared crossing chart, not the
framing clause or the writhe theorem. Its algebraic branch remains
choice-free. Full AC implies AC$_\omega$ in the Jones comparison through the
published implication theorem; the normalized invariant separately retains
its explicit AC$_\omega$ hypothesis.

## Supplier audit

- The published Hecke page is available. Its `def-temperley-lieb-quotient-and-jones-specialization`, `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`, and `thm-the-homflypt-skein-relation` bodies were read, including their statements, assumptions and proofs. The Hecke invariant and its link-level Jones specialization explicitly assume AC.
- The published `def-temperley-lieb-quotient-and-jones-specialization` says the Ocneanu trace is not asserted to descend through the quotient. The separate published trace-descent item is only at roots of unity; it is not used for generic parameters.
- The published oriented-diagram, move, local-move realization, and Reidemeister suppliers were read. The Reidemeister-equivalence theorem assumes $\mathrm{AC}_\omega$; the local smoothing algebra does not.
- The Hecke trace, inverse-generator trace, tower-basis/free-decomposition, and Temperley–Lieb closure-trace suppliers were read for the generic trace argument. Their algebraic proofs are choice-free.

## Source retrieval and reading record

The complete relevant sections were read in the primary Kauffman 1990 paper,
Kauffman's complete 2022 lecture article, Justin Roberts's complete 1999
lecture notes, and François Funar's complete quantum-invariants lecture notes.
Locators and supported item IDs are in
`inverse-problems-knot-theory-all-109-2026-10-19-batch-82.coverage.json`; the
mechanical full-text fetch check passed for all four URLs and stamped all four
records.

A Springer Lickorish chapter page exposed only its abstract/preview, and the
Internet Archive text/PDF URLs were inaccessible through the retrieval tool.
That book was not cited or relied on; complete independent lecture-note
treatments by Roberts and Funar were recovered and read instead. No failed
retrieval is represented as a successful source read.

## Validation and handoff ledger

- coverage-checklist passed for both pair pages: 2 pages, 46 harvested
  results, 0 errors, 0 warnings.
- source-fetch-check --coverage ... --stamp verified all 8 page-source records
  (four unique full-text sources mirrored across A/B); no new stamp was needed.
- proof-contract.mjs --strict --json passed for all 10 items with 0 errors and
  0 warnings. The contracts contain 58 supplier citations, all numbered proof
  steps, eight boundary dispositions per item, and the applicable finite
  calculations.
- proof-layout.mjs on all 10 explicitly changed items reported 28 steps and
  0 defects. Scoped precheck passed 9 proof-bearing items; the state-sum
  algorithm has no phase proof and was not applicable. The item/manifest
  comparison found all 10 dependency lists and levels identical.
- The statement-boundary inspection found no hyperlinks inside any complete
  assigned definition, algorithm, statement, counterexample, or example; each
  has its required immediately following references section. Both page files
  remain frontmatter-only with empty bodies.
- The required run-wide item-dependency-levels.mjs check currently exits 1
  for 168 empty scaffold inventories outside batch 82 and prerequisite batch
  58. It reports no dependency-level or cycle error for any batch-82 item or
  batch-58 item. The count is the actual final command output, not the earlier
  count from the initial empty-manifest pass.
- The batch-82 cross-batch input contains the two page edges (Hecke page and
  batch-58 crossing-sign page) plus four item edges to the actual crossing-sign
  definition. All six rows have evidence and passed the local input-shape
  check. A read-only frontier-ledger collection was attempted but cannot
  complete because the existing batch-15 input
  inverse-problems-knot-theory-all-109-2026-10-19-batch-15.cross-batch-dependencies.json
  contains a review with invalid consumer ownership. No shared ledger or other
  batch input was edited.
- Source retrieval history: a Springer Lickorish page supplied only an
  abstract/preview and the Internet Archive text/PDF retrieval was inaccessible.
  The complete Kauffman article and three full-text treatments (Kauffman 2022,
  Roberts, Funar) were fetched and inspected; their source entries, locators,
  fetched hashes, item-specific harvested dispositions, and supported items
  are in the coverage file. The unsuccessful candidates were not used as
  evidence or represented as successful fetches; the complete alternative
  proofs and dependencies are present in the items and proof contracts. No
  source was marked dropped and no mathematical coverage was waived.
- There were no pre-existing Step-1 decision files for the ten assigned items.
  All ten now have hash-current ready records with owner=false after the checks
  above; they assess author completeness and do not assert supplier approval,
  publication, or independent review.
- The earlier direct node tools/precheck.mts --help invocation was invalid
  because Node does not execute .mts directly. The scoped check used the
  repository wrapper node tools/tsx-run.mjs tools/precheck.mts.

## Item-by-item checkpoints

### `def-kauffman-bracket-smoothing-and-loop-value` — level 0

- Claim/convention: defines the raw bracket for nonempty unoriented regular
  diagrams using the KT-29 source chart (top/bottom A-smoothing with weight
  $A$, left/right B-smoothing with weight $A^{-1}$) and
  $\delta=-A^2-A^{-2}$. It excludes the empty link and proves finite-sum and
  planar-isotopy well-definedness.
- Dependencies: `def-regular-oriented-link-diagram`,
  `def-planar-isotopy-of-link-diagrams`. No in-run supplier; choice-free.
- Sources: Kauffman 1990 §III, pp. 430–432; Kauffman 2022 v2 §2; Roberts
  §§4.1, 4.3; Funar Chapter 3 §1.1. Full relevant sections were read.
- Readiness: the definition, supplier excerpts, strict contract, proof layout,
  coverage, and scoped precheck all pass. No unresolved mathematical
  prerequisite.

### `alg-kauffman-bracket-state-sum` — level 1

- Claim/convention: takes a typed nonempty finite diagram, visits every
  A/B-state exactly once, accumulates $A^{a-b}\delta^{|S|-1}$, and returns the
  polynomial. It defines no serialized-string parser or rejection behavior.
- Dependency: `def-kauffman-bracket-smoothing-and-loop-value`.
- Sources: Kauffman 1990 §III; Kauffman 2022 §2; Roberts §4.3; Funar Chapter 3
  §1.1. The finite traversal is choice-free.
- Readiness: statement, typed input/output contract, manifest placement,
  strict contract, proof layout, and coverage pass; phase precheck is not
  applicable to this algorithm-only carrier.

### `lem-kauffman-bracket-r2-r3-identities` — level 1

- Claim/convention: in the bottom-to-top TL braid box, positive NW–SE crossing
  is $C_i=AI+A^{-1}e_i$ and its opposite is
  $C_i^{-}=A^{-1}I+Ae_i$. The explicit multiplication proves R2 cancellation
  and the three-strand R3 identity for the KT-29 chart.
- Dependencies: bracket definition, TL diagram category and category laws,
  TL local generator relations, and oriented move variants.
- Sources: Kauffman 1990 §III; Kauffman 2022 §2; Roberts §4.1; Funar Chapter 3
  §1.2. The proof supplies the local algebra omitted or diagrammed in sources.
- Readiness: local proof, exact contracts, proof layout, scoped precheck, and
  coverage pass. The local calculation uses no choice.

### `thm-kauffman-bracket-state-sum-procedure-properties` — level 2

- Claim/convention: on the typed domain, the procedure visits exactly
  $2^{|C(D)|}$ states and returns the stated Laurent sum; no parser behavior is
  claimed.
- Dependency: `alg-kauffman-bracket-state-sum`.
- Sources: Kauffman 1990 §III; Kauffman 2022 §2; Roberts §4.3; Funar Chapter 3
  §1.1. Termination follows from the finite crossing set.
- Readiness: proof and finite state-count contract pass strict validation,
  proof layout, and scoped precheck; coverage also passes.

### `lem-kauffman-bracket-curl-and-writhe-correction` — level 2

- Claim/convention: the positive and negative curls have factors $-A^3$ and
  $-A^{-3}$; $(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$ is unchanged
  under each local Reidemeister move and planar isotopy.
- Dependencies: bracket definition, R2/R3 lemma, actual batch-58 crossing-sign
  definition, and oriented Reidemeister-move definition. The supplier's
  AC$_\omega$ framing clause is separate; the local determinant/sign and curl
  calculation are choice-free.
- Sources: Kauffman 1990 §§III, VI; Kauffman 2022 §2; Roberts §§4.1, 4.3;
  Funar Chapter 3 §1.1. The positive/negative factor assignment was checked
  against the source crossing-sign convention.
- Readiness: the exact draft supplier body was inspected; local proof,
  strict contract, proof layout, scoped precheck, and coverage pass. This is
  not supplier approval.

### `lem-hecke-bracket-trace-dictionary-and-local-descent` — level 2

- Claim/convention: over $R_A=\mathbb Z[A^{\pm1},(A^{-4}+1)^{-1}]$, with
  $q=A^{-2}$, $t=q^2$, $\delta=-(q+q^{-1})$, and
  $z_0=-1/(t+1)$, the braid-closure bracket equals
  $\delta^{n-1}(-A)^{e(\beta)}\operatorname{tr}_n(\pi_n(\beta))$ after
  $v=t,z=z_0$. It proves normalized closure trace descent at generic formal
  parameters by specialized Markov uniqueness from the free tower
  decomposition; it does not use the separate root-of-unity theorem.
- Dependencies: bracket chart; geometric and Artin braid generators; TL
  diagram category, local relations, closure trace and component identities;
  Hecke Markov trace and uniqueness; Hecke braid map; free tower decomposition;
  braid exponent and closure; R2/R3 chart conversion.
- Sources: Kauffman 1990 §III; Kauffman 2022 §2; Roberts §§4.1–4.4; Funar
  Chapter 3 §§1.1–2.3. Source statements provide conventions; the full generic
  trace proof is local.
- Readiness: algebraic proof, exact contracts, proof layout, scoped precheck,
  and coverage pass. Choice-free branch.

### `thm-normalized-bracket-is-an-oriented-link-invariant` — level 3

- Claim/convention: defines $f_D=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$;
  the local move theorem plus the oriented Reidemeister equivalence theorem
  yields an oriented-link invariant for nonempty links.
- Dependencies: bracket definition, local R2/R3 and curl lemmas, actual
  crossing-sign and link conventions, oriented move/equivalence theorem, and
  regular projection existence.
- Axiom: assumes AC$_\omega$ exactly through the oriented Reidemeister and
  regular-projection suppliers; local polynomial identities are choice-free.
- Readiness: complete statement and proof, strict contract, proof layout,
  scoped precheck, and coverage pass.

### `thm-bracket-state-sum-matches-library-jones-specialization` — level 4

- Claim/convention: compares the bracket invariant with the current Hecke
  Jones value using $s=A^{-2}$, $t=s^2=A^{-4}$, and
  $\alpha=-(s^2+1)/s=\delta$. It proves $\operatorname{wr}(\widehat\beta)=e(\beta)$
  for braid closures and verifies equality in the Jones coefficient ring.
- Dependencies: actual sign and half-twist definitions, trace dictionary,
  normalized-bracket theorem, Hecke Jones specialization and invariance,
  Alexander closed-braid theorem, braid/closure conventions, and the AC to
  AC$_\omega$ implication.
- Axiom: full AC for the library Hecke link invariant; AC$_\omega$ is derived
  explicitly for the normalized bracket branch.
- Readiness: generic trace and sign normalization have complete local proofs;
  strict contract, proof layout, scoped precheck, and coverage pass.

### `cex-knot-kt-29-boundary-case` — level 3

- Claim/convention: the crossing-free unknot has bracket $1$ and one positive
  type-I kink has bracket $-A^3$, although the two diagrams represent the
  same unframed oriented knot.
- Dependencies: bracket definition, curl factor lemma, oriented R1 move, and
  its local ambient-isotopy realization.
- Readiness: self-contained finite counterexample; strict contract, proof
  layout, scoped precheck, and coverage pass.

### `ex-knot-kt-29-worked-cases` — level 5

- Claim/convention: all eight states of the positive two-strand braid closure
  are grouped by the number $k$ of B-smoothings. Their contributions are
  $A^3\delta,3A,3A^{-1}\delta,A^{-3}\delta^2$, giving raw bracket
  $A^{-7}-A^{-3}-A^5$ and normalized Jones value $t+t^3-t^4$; reflection
  gives $t^{-1}+t^{-3}-t^{-4}$, and the unknot gives $1$.
- Dependencies: bracket definition and algorithm, TL diagram/closure relations,
  actual sign and half-twist conventions, closure, trace dictionary, and Jones
  comparison.
- Axiom: the state enumeration is choice-free; full AC is used only through
  the library Jones invariant comparison.
- Readiness: the complete eight-state table, mirror argument, exact contracts,
  proof layout, scoped precheck, and coverage pass.
