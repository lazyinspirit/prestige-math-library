# Frontier 15 — independent reader 5 report

Run: `frontier-15`  
Role: Step 6a independent reader  
Batch: 5  
Scope: `the-fundamental-group-of-the-circle` and
`the-fundamental-group-of-the-circle-examples`

## Scope and method

I opened all 28 scoped items (21 A-page items and 7 B-page items), both page
files, every on-disk target of a direct `[F#]`/`[A#]`/`[L#]` citation, and the
two published examples named by the quotient-model Remark. In total this was
68 unique item files: 28 scoped items, 38 external dependency items, and 2
additional published examples. I checked every title and mathematical-content
section against its proof, all 24 numbered proofs step by step, 120 contracted
citations against their source clauses, all 192 boundary rows, and component
provenance. Finding ids below are stable and will not be renumbered.

## Findings

### Fatal

#### R5-1 — `rem-circle-quotient-model-agrees-with-published-examples`

- **Location:** prose at lines 23–31, specifically the former claim that the
  published examples use the projection `p(x)=[x]`.
- **Defect:** the cross-page agreement claim was literally false about the map
  name. Both published items use `q` for the projection
  `\mathbb R\to\mathbb R/\mathbb Z`; in `ex-circle-as-r-mod-z`, `p` instead
  denotes the projection from `[0,1]` to the endpoint-glued interval quotient.
- **Evidence:** `ex-circle-as-r-mod-z` defines the canonical projection as `q`
  in its Example and Given sections, and
  `ex-real-line-mod-integer-translations-is-a-covering` likewise states
  `q:\mathbb R\to\mathbb R/\mathbb Z`. Thus a symbol-by-symbol assertion that
  their `p` agrees with this page's `p` inaccurately described both published
  examples.
- **Severity:** **fatal** — concrete false assertion about the referenced
  published content.
- **Disposition:** repaired the Remark to state the symbol-independent fact:
  each canonical projection sends `x` to `[x]`, and each target carries the
  quotient topology induced by that projection.

#### R5-2 — `lem-circle-loops-of-equal-degree-are-path-homotopic`

- **Location:** Fact `[L2]`, line 36, and its proof-contract citation row.
- **Defect:** the former restatement omitted the source theorem's hypothesis
  `n\ge1`, thereby presenting the straight-line-homotopy result with a wider
  domain than the cited item licenses.
- **Evidence:** the Statement of
  `lem-straight-line-homotopies-are-continuous` begins `Let n\ge1` before
  defining convexity in `\mathbb R^n`. The application uses `n=1`, but the
  cited Fact itself was still an inflated restatement.
- **Severity:** **fatal** — inaccurate, wider `[L2]` restatement.
- **Disposition:** added `n\ge1` to `[L2]` and replaced the contract quote with
  the complete source clause, including the ambient-space and subspace-topology
  hypotheses.

#### R5-3 — `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`

- **Location:** Fact `[L4]`, line 48, and its proof-contract citation row.
- **Defect:** the former restatement said vector-valued continuity is
  componentwise without preserving the source's conditions `m\ge1`, metric
  domain `(X,d)`, subspace `A\subseteq X`, and codomain `\mathbb R^m`.
- **Evidence:** clause 1 of `thm-componentwise-limits-and-continuity` states all
  those hypotheses before its iff. The proof applies the result in the valid
  case `m=2`, but the Fact as written asserted a materially wider theorem.
- **Severity:** **fatal** — inaccurate, wider `[L4]` restatement.
- **Disposition:** restored all omitted hypotheses in `[L4]` and replaced the
  contract quote with the full exact continuity clause.

#### R5-4 — `cor-geometric-unit-circle-has-fundamental-group-z`

- **Location:** Fact `[L3]`, line 46, and proof step 1.1, line 56.
- **Defect:** the former Fact restated only the identity and composition
  equations for induced maps. Step 1.1 also inferred that `h_*` and
  `(h^{-1})_*` are group homomorphisms, which that shortened restatement did not
  license.
- **Evidence:** the cited Statement
  `thm-induced-fundamental-group-map-functoriality` separately says that each
  pointed continuous map induces a *well-defined group homomorphism*, then gives
  the functorial equations. Both clauses are used in step 1.1.
- **Severity:** **fatal** — an inference required an omitted clause of the
  cited dependency.
- **Disposition:** expanded `[L3]` and its proof-contract quote to include the
  well-defined-group-homomorphism clause as well as both functorial equations.

### Nonfatal

#### R5-5 — `lem-open-quotient-arcs-in-real-line-mod-integers`

- **Location:** proof-contract boundary row `zero`.
- **Defect:** the former evidence treated every displayed length-zero interval
  convention as a singleton. At equal endpoints, the closed interval is a
  singleton, while the open and half-open variants are empty.
- **Evidence:** direct substitution `a=b` in the four interval definitions.
  The proof handles both empty and singleton cases, so the theorem itself was
  not false.
- **Severity:** **nonfatal** — inaccurate boundary disposition.
- **Disposition:** rewrote the row to record the closed singleton and the three
  empty variants separately.

#### R5-6 — `lem-lifts-of-circle-loop-concatenation-and-reversal`

- **Location:** proof-contract boundary row `degenerate`.
- **Defect:** the former evidence said concatenation with a constant loop
  literally reduces to the other lift. With the displayed half-interval
  parametrisation it instead has a constant half and a reparametrised other
  half; only its endpoint formula reduces to the other degree.
- **Evidence:** substitute a constant lift into the two-piece formula in proof
  step 1.1.
- **Severity:** **nonfatal** — inaccurate boundary evidence; the proof formula
  and endpoint conclusion are correct.
- **Disposition:** recorded the constant-half behaviour and the correct
  endpoint reduction.

#### R5-7 — `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers`

- **Location:** proof-contract boundary row `nonempty-choice`.
- **Defect:** the row cited step 2.1 for the unique representative in `[0,1)`,
  but that choice is made in step 1.1.
- **Evidence:** step 1.1 uses the floor representative to prove surjectivity;
  step 2.1 is the openness counterexample.
- **Severity:** **nonfatal** — wrong boundary-evidence step number.
- **Disposition:** changed the evidence reference from step 2.1 to step 1.1.

#### R5-8 — `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop`

- **Location:** proof-contract boundary row `zero`.
- **Defect:** the former row cited step 2.1 for preservation of the initial
  endpoint throughout the homotopy, but the endpoint-fixed homotopy is verified
  in step 3.1.
- **Evidence:** step 2.1 only compares degrees; step 3.1 evaluates the
  straight-line homotopy at both endpoints.
- **Severity:** **nonfatal** — wrong boundary-evidence step number.
- **Disposition:** changed the homotopy endpoint reference to step 3.1.

#### R5-9 — `ex-a-surjective-circle-loop-of-degree-zero`

- **Location:** proof-contract rows `iff-forward` and `iff-reverse`.
- **Defect:** the contract assigned proof step 4.1 to the wrong direction of
  `nullhomotopic exactly when degree is zero`.
- **Evidence:** step 2.1 computes degree zero and step 4.1 concludes
  nullhomotopy. Relative to the cited Statement's textual order, this is the
  reverse implication, not the forward implication.
- **Severity:** **nonfatal** — swapped boundary-direction disposition.
- **Disposition:** marked `iff-forward` not applicable to the proof and checked
  `iff-reverse` with step 4.1 as evidence.

#### R5-10 — `ex-trigonometric-circle-loops-have-their-integer-degrees`

- **Location:** proof-contract boundary row `endpoints`.
- **Defect:** the former rationale credited proof step 1.1 with a periodicity
  endpoint check that the step does not perform.
- **Evidence:** step 1.1 identifies the geometric loop as the image of the
  based loop `\omega_n`; `[L1]` sends its common endpoint `[0]=[n]` to `(1,0)`.
  That is the actual endpoint justification.
- **Severity:** **nonfatal** — inaccurate boundary rationale, with the
  underlying endpoint claim still true.
- **Disposition:** replaced the row with the actual dictionary-based endpoint
  argument.

### Polish

#### R5-11 — `prop-real-line-mod-integers-is-hausdorff`

- **Location:** proof step 1.1, line 44.
- **Defect:** the second class was written as the literal text `eta` in math
  mode rather than `\eta`.
- **Evidence:** the Given section names the two classes `\xi,\eta`.
- **Severity:** **polish** — notation typo only.
- **Disposition:** corrected the symbol to `\eta`.

#### R5-12 — `lem-lifts-of-circle-loop-concatenation-and-reversal`

- **Location:** proof steps 1.1 and 1.2, lines 58 and 60.
- **Defect:** continuity of the affine reparametrisations of the supplied lifts
  is compressed into `[L6]`, whose displayed Fact only restates algebra of
  real-valued continuous functions; composition with the continuous affine
  maps is implicit.
- **Evidence:** continuity follows immediately by composing each lift with
  `t\mapsto2t`, `t\mapsto2t-1`, or `t\mapsto1-t`, then applying the cited
  algebra and pasting facts.
- **Severity:** **polish** — a competent reader closes the bridge in under 30
  seconds.
- **Disposition:** recorded only; no repair cycle opened under the 30-second
  rule.

#### R5-13 — `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop`

- **Location:** proof step 3.1, line 62.
- **Defect:** after proving `K` continuous, the step says that postcomposition
  with `p` gives `H=p\circ K` without explicitly invoking composition of
  continuous maps.
- **Evidence:** `[L7]` supplies the continuous quotient projection and ordinary
  composition closes the inference immediately.
- **Severity:** **polish** — sub-30-second proof-step bridge.
- **Disposition:** recorded only under the 30-second rule.

#### R5-14 — `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`

- **Location:** proof steps 1.1–3.1, lines 55–59.
- **Defect:** the proof leaves three elementary continuity bridges implicit:
  reversing the time variable in `H`, taking the final-time slice to obtain
  `s`, and composing `s` with `\omega_1`.
- **Evidence:** each is an immediate restriction or composition of continuous
  maps; no mathematical claim or hypothesis changes.
- **Severity:** **polish** — each bridge is comfortably within the 30-second
  rule.
- **Disposition:** recorded only; no repair cycle opened.

## Changes made

- Repaired the false cross-page symbol claim in
  `rem-circle-quotient-model-agrees-with-published-examples`.
- Repaired Facts, citations, or proof notation in
  `lem-circle-loops-of-equal-degree-are-path-homotopic`,
  `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`,
  `cor-geometric-unit-circle-has-fundamental-group-z`, and
  `prop-real-line-mod-integers-is-hausdorff`.
- Updated every affected citation and boundary disposition in
  `research/frontier-15-batch-5.proof-contracts.json`.
- No lemma, corollary, example, or counterexample was added or deleted, so no
  batch-manifest change was required.
- No changed item contained a `verification.judge` block to delete. I did not
  run a judge, edit `research/plan-spec.json`, touch another batch, or edit a
  published dependency.

## Verification after repair

- `tools/reflow.mts` left all five changed scoped item files unchanged.
- Scoped `tools/precheck.mts` passed all changed proof-bearing items: 4 checked,
  0 failing.
- Strict proof-contract validation passed: 24/24 items, 0 errors, 0 warnings.
- Citation-fidelity validation checked 120 citations and found no missing quote
  or remaining widening candidate.
- Boundary audit checked 192 rows, including 88 `not_applicable` dispositions,
  with no contradicted disposition or reportable template repetition.
- Content policy checked all 28 scoped items with 0 errors and 0 warnings. No
  `ai-generated` Statement is load-bearing.
- Scoped render checks passed all 28 items. Strict prose checks passed all 28
  items and both page files. Citation checks passed all 28 items.
- The coverage checklist harvested 57 results for the authored A-page artifact
  with 0 errors and 0 warnings; the B-page items were covered by the direct
  item-by-item read.
- `finite-smoke` found no registered finite obligation in this contract (0
  checks over 24 proof-bearing items); this is a recorded non-run, not positive
  mathematical evidence.
- I independently instantiated the three `ai-generated` constructions: the
  length-one interval counterexample, the paused loop, and the surjective
  degree-zero loop. Their witnesses, endpoints, degree calculations, and stated
  conclusions are valid.

## Provenance and source pass

All 28 mathematical-content items have separate Statement and proof
provenance, and no item depends on an `ai-generated` Statement. The supplied
Hatcher, May, Wise, and DLMF sources support the subject matter attributed to
them; in particular, Wise's quotient-circle presentation also uses `q`, which
agrees with the on-disk published examples and confirms R5-1's repair.

## Coverage and per-page verdicts

- **`the-fundamental-group-of-the-circle` — 21/21 items opened.** R5-1 through
  R5-6 and R5-11 through R5-12 affected this page or its contract rows. All four
  fatal defects were repaired, the mathematical boundary rows now state the
  cases actually checked, and the remaining continuity compression in R5-12 is
  polish under the 30-second rule. Every other item on the page had no concrete
  defect. **Verdict: clean after licensed repairs; one recorded polish bridge.**
- **`the-fundamental-group-of-the-circle-examples` — 7/7 items opened.** No
  fatal mathematical defect was found. R5-7 through R5-10 repaired inaccurate
  contract evidence, while R5-13 and R5-14 record sub-30-second continuity
  bridges. The explicit examples and counterexamples are valid. **Verdict:
  clean after licensed contract repairs; two recorded polish findings.**

**Actual scoped item count opened: 28/28 (21 A-page + 7 B-page), including all
24 proof-bearing items. Total unique item files opened, including dependencies
and named published examples: 68. No blocker remains.**
