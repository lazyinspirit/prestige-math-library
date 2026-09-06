# Frontier 32 — Step 6a reader 1 (Batch 1)

## Scope opened

- Manifest and authoring record: `research/frontier-32-batch-1.pages.json`,
  `research/frontier-32-batch-1.proof-contracts.json`,
  `research/frontier-32-batch-1.coverage.json`, and
  `research/frontier-32-batch-1.notes.md`.
- Assigned pages: the A/B pairs
  `boolean-circuits-and-nonuniform-complexity` and
  `counting-complexity-and-sharpp` (four current page files).
- Assigned items: all 39 current items: 16 + 3 on the circuit pair and 17 +
  3 on the counting pair.
- Direct dependency closure opened: `def-p`,
  `def-logspace-uniform-circuit-family`, `def-l-and-nl`,
  `thm-product-rule`, `thm-cardinality-of-a-set-of-functions`,
  `thm-cook-levin-sat-is-np-complete`,
  `def-polynomial-time-many-one-reduction`, `def-np-hard-and-np-complete`,
  `def-boolean-formula-cnf-and-sat`, `def-bounded-computation-tableau`,
  `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`,
  `lem-cook-levin-map-is-polynomial-time`, and
  `def-rp-corp-zpp-bpp-and-pp`.
- Current source records opened: Arora--Barak, *Computational Complexity: A
  Modern Approach* (489-page PDF); Fortnow, *Counting Complexity* (29-page
  PDF); and Katz, Lecture 10 (4-page PDF).  In particular, Katz pp. 1--2
  gives the gate-count and P/poly/advice context, and Fortnow pp. 3--4 gives
  the #P/GapP and nonnegative-FP context.  These sources support the intended
  standard results but do not supply a derivation inside an item.

## Confirmed in-flight defects

### Systematic fatal proof and contract failure

All 27 proof-bearing items are only a restatement template, not a proof,
refutation, or worked verification.  Their `## Proof`, `## Refutation`,
`## Verification` blocks have the same three lines: repeat the proposed route,
say to establish/verify it, then say “This proves the stated claim.”  The
corresponding entries in
`research/frontier-32-batch-1.proof-contracts.json` likewise contain the same
generic `route`, `preservation`, and `conclusion` obligations rather than the
actual construction, computation, quantifier argument, or cited fact.

This is fatal, not a routine omitted step: the unproved work includes the
tableau-to-circuit construction, both directions of the advice equivalence,
the NC1/L/NC2 simulations, circuit counting asymptotics, Cook--Levin
preservation, Karp--Lipton's quantified search-circuit argument, parsimonious
Cook--Levin bijection, the GapP sign conversion, the PP threshold reduction,
and the alleged concrete examples/counterexamples.  A competent reader cannot
recover these omitted proofs immediately from the displayed text.

Affected in-flight items:

- Circuits A: `thm-p-is-contained-in-p-poly`,
  `thm-p-poly-equals-p-with-polynomial-advice`,
  `thm-undecidable-languages-exist-in-p-poly`,
  `prop-nc-one-is-contained-in-l-and-l-in-nc-two`,
  `lem-counting-circuits-of-bounded-size`,
  `thm-shannon-almost-all-functions-require-exponential-circuits`,
  `thm-circuit-sat-is-np-complete`, `thm-karp-lipton-collapse`,
  `fs-polynomial-size-implies-uniform-generation`, and
  `fs-shannon-counting-gives-an-explicit-hard-function`.
- Circuits B: `ex-p-poly-equals-p-with-polynomial-advice`,
  `ex-karp-lipton-collapse`, and
  `cex-polynomial-size-implies-uniform-generation`.  These additionally fail
  as examples/counterexamples because no finite instance, candidate circuit,
  or concrete witness is displayed.
- Counting A: `prop-number-sat-is-in-sharpp`,
  `lem-cook-levin-can-be-made-parsimonious`,
  `thm-number-sat-is-sharpp-complete`, `prop-fp-is-contained-in-sharpp`,
  `prop-sharpp-is-closed-under-sum-and-product`,
  `thm-pp-is-sign-testing-gap-p`, `cor-majority-sat-is-pp-complete`,
  `thm-pp-is-closed-under-complement`, `prop-np-is-contained-in-p-sharpp`,
  `fs-sharpp-is-a-language-class`, and
  `fs-every-many-one-reduction-is-parsimonious`.
- Counting B: `ex-cook-levin-can-be-made-parsimonious`,
  `ex-np-is-contained-in-p-sharpp`, and `cex-sharpp-is-a-language-class`.
  Again, the claimed examples are instructions to display an instance rather
  than an instance and its calculation.

### Specific statement, citation, and boundary defects

- `items/thm-karp-lipton-collapse.md`, Statement: the formal claim is only
  “The Karp--Lipton collapse.”  The actual conditional conclusion
  “if NP is contained in P/poly, then PH = Sigma_2^p” is requested in prose
  but never stated with definitions of PH or Sigma_2^p.  This is a fatal
  missing-hypothesis/ill-formed statement.
- `items/thm-p-is-contained-in-p-poly.md`, fact L1 attributes the tableau
  assertion to `def-boolean-circuit-size-depth-fanin-and-basis`, which only
  defines circuit syntax and measures.  It does not establish a tableau or
  local-update simulation.  Citation inaccurate.
- `items/thm-p-poly-equals-p-with-polynomial-advice.md`, fact L1 attributes a
  topologically ordered gate-list encoding to
  `def-circuit-family-and-p-poly`; that definition gives the family quantifier
  but no encoding construction.  Citation inaccurate.
- `items/prop-nc-one-is-contained-in-l-and-l-in-nc-two.md`, fact L1 attributes
  both NC1 and deterministic logarithmic workspace to
  `def-ac-zero-nc-one-and-nc`; the latter fact is in `def-l-and-nl`.  The
  displayed citation is incomplete/inaccurate.
- `items/lem-cook-levin-can-be-made-parsimonious.md`, fact L1 says a
  Cook--Levin formula represents a bounded tableau but cites only
  `def-parsimonious-reduction`, which merely defines exact-count equality.
  Citation inaccurate.
- `items/thm-number-sat-is-sharpp-complete.md`, fact L1 says parsimonious
  reductions preserve exact counts but cites `def-sharpp-and-gap-p-functions`,
  which contains no such definition.  Citation inaccurate.
- `items/fs-every-many-one-reduction-is-parsimonious.md`, fact L1 makes the
  same exact-count assertion but cites only
  `def-polynomial-time-many-one-reduction`.  Citation inaccurate.
- The contract boundary audit reports contradictions that the reader confirms:
  `thm-circuit-sat-is-np-complete` calls an unperformed proposed check a
  degenerate-case check; `fs-polynomial-size-implies-uniform-generation`
  declares the family axis not applicable despite quantifying over a family;
  and `cor-majority-sat-is-pp-complete` declares both iff axes not applicable
  although it states “exactly when.”  The contract must be rewritten with the
  repaired arguments.

## Page verdicts

| Page | Verdict | Reason |
| --- | --- | --- |
| `boolean-circuits-and-nonuniform-complexity` (A) | fail | Ten central results/refutations have no derivation; Karp--Lipton is not a stated conditional theorem. |
| `boolean-circuits-and-nonuniform-complexity-examples` (B) | fail | All three asserted examples/counterexamples lack their promised finite witness or calculation. |
| `counting-complexity-and-sharpp` (A) | fail | Eleven central results/refutations have no derivation; two fact citations are inaccurate. |
| `counting-complexity-and-sharpp-examples` (B) | fail | All three asserted examples/counterexamples lack their promised finite witness or calculation. |

## Edits and validation

No mathematical content was edited.  The defects are in-flight and therefore
editable, but repairing them requires substantive rewriting of all 27 affected
items and their contracts; this reader report records them for the authorised
repair/adjudication route rather than making a partial rewrite that could
interfere with the author’s batch.

Created this report and the requested findings artifact only.

Focused checks run against the current disk state:

- `precheck.mts` on all 27 proof-bearing items: 27 passed.
- `manifest-deps.mjs research/frontier-32-batch-1.pages.json`: 39 items,
  0 normalisations, 0 errors.
- `proof-contract.mjs ... --strict`: passed structurally (27/27), but this is
  not a mathematical verdict.
- `citation-fidelity.mjs`: all 27 stored quotes occur in their cited files;
  it does not test whether the quoted fact proves the asserted line.
- `boundary-audit.mjs`: reported the four contradicted dispositions recorded
  above and extensive boilerplate reuse.

## Blocker

No permissions or external-source blocker.  The batch is blocked from a pass
by the in-flight mathematical rewrites above.  No uneditable (published or
forbidden-page) finding remains, so the structured findings array is empty.
