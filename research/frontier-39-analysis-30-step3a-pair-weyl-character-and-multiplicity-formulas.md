# Step 3a scope review — Weyl character and multiplicity formulas

- Run: `frontier-39-analysis-30` (role: alpha; batch 21; this pair only)
- A page: `weyl-character-and-multiplicity-formulas` (order 510.013, `lie-theory`; 21 items, dependency levels 0–7)
- B page: `weyl-character-and-multiplicity-formulas-examples` (order 510.014; 6 items, levels 4–8)
- Scope decision: **sufficient** — receipt
  `research/frontier-39-analysis-30-step3a-review-weyl-character-and-multiplicity-formulas.json`
  (recorded with `tools/step3-decisions.mjs record-scope`).
- Scope only: proof correctness is not certified here, nothing below is an item
  approval, and no scaffold, manifest, coverage, plan, page or owner record was
  edited. The "Non-scope notes" are for Step 3b/5 authors, not scope defects.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-21.pages.json` | Current scope carrier: A has 21 items with explicit `deps` and levels, B has 6; companion pointers pair the pages; A `requires` = `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `the-bgg-resolution`; B `requires` only the A page |
| `research/frontier-39-analysis-30-batch-21.coverage.json` | 5 A + 3 B sources, all fetch-verified; 61 harvested rows (42 `included`, 11 `inline`, 4 `already-published`, 4 `out-of-scope` with reasons) |
| `research/frontier-39-analysis-30-batch-21.notes.md` | Scaffolder record: design control, the two addenda (post-check statement fixes; Freudenthal termination defect repaired), choice accounting, checks |
| `research/frontier-39-analysis-30-batch-21.cross-batch-dependencies.json` | Empty list; the only run edge touching this pair is batch 22 (consumer) |
| `research/plan-representation-theory-lie-track.md` L1034–1075 (RL-7 A/B tables), L116 (`requires`), L788, L815–816, L1712 | Binding prose design: 17 A rows + 6 B rows, the proof route (BGG Euler → denominator → numerator → Weyl → Kostant → Freudenthal → dimension limit), the two warning points (formal quotient; singular numerators via the alternant), source matrix |
| `research/published-consumer-supplier-ledger.md` L13957–13958, L14380 | 2026-09-08 audit: RL-7 has 23 planned-only ids (17 A + 6 B) with zero published consumers |
| `research/four-track-cross-library-reconciliation-2026-09-08.md` L92 | RL-7 listed as a shared upstream pair; future scheduling obligation, no scope change |
| `research/plan-spec.json` orders 510.013/510.014 | Both pages present with the same `requires`; `items: []` (item contract is the design + audit) |
| `research/frontier-39-analysis-30-alpha-step1-drift.md` §weyl | Step-1 verdict `no-drift` for lines 1034–1074 |
| `items/*.md` for the 43 published suppliers; `research/frontier-39-analysis-30-batch-22.pages.json` | Prerequisite closure and consumer edges |
| Local `etingof.pdf` (sha256_16 `ffb09776bafa3fa5`, 4247073 bytes — byte-identical to the coverage stamp); local `items/thm-finite-dimensional-representations-of-sl-two.md`, `thm-root-sl-two-triple.md` etc. | Independent interface/source checks |

## Design conformance and role in the library

RL-7 is the finite-type Weyl-character pair of the Lie track: it proves the
denominator and character formulas from the RL-6 BGG Euler identity, extracts
Kostant multiplicities, derives Freudenthal recursion from the Casimir, and
takes the dimension limit. Its declared in-run consumer is RL-8
(`tensor-product-multiplicities-and-littlewood-richardson`).

* All 23 design ids (17 A + 6 B) are realized 1:1 in the batch manifest, with
  the design's kinds and routes. The four A-page items beyond the audit count
  are declared local prerequisite lemmas, each consumed:
  * `lem-weyl-length-parity-is-multiplicative` — consumed by
    `lem-weyl-alternants-are-skew-invariant` and by two RL-8 items;
  * `lem-geometric-series-invertibility-in-the-completed-character-ring` —
    supplies the formal inverse of the geometric product used by
    `thm-weyl-denominator-identity`, `lem-bgg-euler-character-gives-the-weyl-numerator`,
    `thm-weyl-character-formula`, `def-kostant-partition-function`,
    `thm-kostant-weight-multiplicity-formula` and RL-8;
  * `lem-rho-minus-w-rho-is-a-sum-of-positive-roots` and
    `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` — prove the
    strict decrease of the shifted norm away from the top weight, which is what
    the design's `cor-freudenthal-recursion-terminates-from-the-highest-weight`
    ("determines lower multiplicities whenever the denominator is nonzero")
    needs; that corollary and the B Freudenthal example consume them.
  These are proof-closure prerequisites inside the pair's subject, not new
  subject matter; they leave the page far below the item cap.
* Conventions match the design and the published library: $P$, $Q_+$,
  $\rho=\tfrac12\sum_{\alpha>0}\alpha$, the dot action
  $w\circ\lambda=w(\lambda+\rho)-\rho$, and $L(\lambda)$. The design's two
  warning points are visibly assigned: `thm-weyl-character-formula` states the
  quotient is taken in the completed character ring with no ordinary quotient
  intended before formal cancellation, and
  `lem-weyl-alternants-are-skew-invariant` contains the wall-fixed zero case
  (singular numerators).
* Consumer check: RL-8 A declares item-level edges to 9 items of this A page
  (including both added lemmas), which matches the design route; the pair has
  no in-run supplier edge (`research/frontier-39-analysis-30-batch-21.cross-batch-dependencies.json`
  is the empty list, and batch 22's review input is owed there).
* A word-boundary scan of `items/` finds no published item referencing any of
  the 27 planned ids, consistent with the ledger's zero-consumer audit: no
  published-to-draft edge waits on this pair.

## Source coverage

The A page cites Etingof 18.755 complete lectures §26, printed pp. 138–144;
Knapp, *Lie Groups Beyond an Introduction* 2nd ed., Ch. V §6, printed
pp. 318–324 (plus Ch. II §6, pp. 168–170); Moreau, M2 Paris-Saclay notes
§§11.2–11.3, 13.1–13.3; Weber, *Weyl Character Formula II* pp. 1–4; and
Borcherds' Berkeley 261 notes p. 146. The B page cites Etingof, Moreau and
Weber. All 8 sources are fetch-verified (I re-ran `source-fetch-check`: 8/8
fetch-verified, 8/8 resolved), and the coverage rows carry exact locators and
dispositions.

Independently: the local `etingof.pdf` is byte-identical to the coverage's
`fetch_verified` record (4247073 bytes, sha256_16 `ffb09776bafa3fa5`), and I
read its §26 pages directly — Proposition 26.3, Theorem 26.4, Corollary 26.5,
Exercise 26.7 (Kostant function and the sl3 values) and Proposition 26.8
(dimension formula) are present as harvested, and the strict inequality
$|\lambda+\rho|^2>|\mu|^2$ for dominant subweights at the end of the Theorem
26.4 proof (printed p. 141) is exactly the step the repair notes cite.

Recorded deviations (honest, owner-visible): the design's Humphreys §§22–24
and Elduque ch. 3 §5 locators could not be read in this dispatch's source work
(mirror bot walls); they were replaced by Knapp (a full book treatment) plus
Moreau and Borcherds, so the design's "two independent treatments including a
book" obligation is still met. Residual uncertainty: those two original
locators were not read, and no claim rests on them.

## Prerequisite audit

All 62 distinct referenced ids resolve: 19 are ids of this batch's own
scaffold, 43 are items with `status: published` (checked one by one). The three
paged `requires` suppliers are published pages under `library/lie-theory`.
Interfaces read and found to supply the needed claims include:

| Supplier | Claim used |
|---|---|
| `def-finite-weyl-root-system-lattice-and-chamber-conventions`, `lem-finite-weyl-positive-roots-and-simple-reflections`, `prop-weyl-length-equals-positive-root-inversion-number`, `lem-finite-weyl-strong-exchange-and-deletion`, `lem-finite-weyl-closed-chambers-and-stabilizers` | $P,Q_+,\le,\ell$, simple reflections generate $W$, inversion-count length, unique dominant representative of every orbit |
| `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`, `def-weight-and-weight-space-of-a-lie-algebra-representation`, `lem-simple-reflections-preserve-weight-multiplicities` | finite weight-space decomposition; $W$-invariance of multiplicities (hence of the weight set) |
| `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`, `lem-highest-weight-modules-have-weights-below-the-top-weight`, `prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`, `lem-dominant-weights-are-maxima-of-their-weyl-orbits` | highest-weight classification; every weight satisfies $\mu\le\lambda$; top weight space is 1-dimensional; dominant integral weights are maxima ($\lambda-w\mathbin\cdot\lambda\in Q_+$) |
| `cor-bgg-euler-character-identity`, `prop-formal-character-of-a-verma-module`, `def-grothendieck-group-and-character-of-category-o` | the $\sum_w(-1)^{\ell(w)}[M(w\circ\lambda)]$ Euler identity in the completed character ring and the Verma character form |
| `prop-casimir-eigenvalue-on-a-highest-weight-module`, `prop-opposite-root-spaces-bracket-to-the-killing-dual-line`, `prop-killing-form-pairs-only-opposite-root-spaces`, `lem-finite-semisimple-cartan-root-and-string-structure`, `thm-root-sl-two-triple`, `thm-finite-dimensional-representations-of-sl-two` | Casimir scalar $(\lambda,\lambda+2\rho)$, the Killing-dual normalization $\mu(H_\alpha)=(\mu,\alpha)$ (consistent with the trace identity $2\sum_{j\ge1}(\mu+j\alpha,\alpha)m(\mu+j\alpha)$), and the sl2 string structure |
| `lem-positive-root-pairings-of-a-dominant-integral-weight`, `prop-root-systems-of-the-classical-complex-lie-algebras`, `def-fundamental-weights`, `prop-the-adjoint-representation-has-highest-weight-the-highest-root` | $(\lambda+\rho,\alpha)>0$; the sl2/sl3 root realizations; fundamental weights; the adjoint module $L(\theta)$ |

No dependency points at another unscaffolded batch. Re-run checks:
`manifest-deps` 27 items / 0 errors; `content-policy --manifest-only`
27 scoped items / 0 errors / 0 warnings; `coverage-checklist
--require-destination` 2 pages, 61 harvested results, 0/0;
`item-dependency-levels check --run` reports no batch-21 error;
`step1-decisions check --run` 899/899 ready.

**Unmet prerequisites: none found.** Nothing the planned items need is absent
from both the published library and the current scaffold, including the two
ingredients the Freudenthal-termination repair relies on
(`lem-dominant-weights-are-maxima-of-their-weyl-orbits` and
`lem-finite-weyl-closed-chambers-and-stabilizers`).

## Non-scope notes for 3b/5 (reported, not scope defects)

1. **Circular-clause risk** in
   `lem-geometric-series-invertibility-in-the-completed-character-ring`: its
   final clause "A(ρ)=e^ρ∏(1−e^{−α}) is invertible with A(ρ)^{−1}=..." pre-states
   the equality proved by `thm-weyl-denominator-identity`, which depends on this
   lemma. The identity's proof only needs invertibility of the geometric-series
   product. Order the statements so the equality belongs to the theorem (or is
   used only after it), otherwise the lemma cannot be proved from its own deps.
2. **Undeclared but published suppliers** for the Freudenthal trace:
   `lem-positive-root-strings-sum-the-freudenthal-correction` needs the sl2
   string structure of the representation; `thm-root-sl-two-triple` and
   `thm-finite-dimensional-representations-of-sl-two` supply it, while the
   declared `lem-finite-semisimple-cartan-root-and-string-structure` covers
   adjoint root strings only. Add the declarations (or prove the trace identity
   directly) at authoring. Not an unmet prerequisite: the claims are published.
3. **Title/id near-duplicate for the splice**: the planned B item
   `ex-weyl-character-and-dimension-formulas-for-sl2` (via the Weyl formula) is
   mathematically the same example as the already published DG-32 B item
   `ex-weyl-character-and-dimension-formulas-for-sl-two` (same telescoping
   identity and dim $n+1$, derived there from weight strings). No id collision;
   note the overlap so the rendered library either records the intended
   route distinction or avoids two identically titled examples of one
   computation.

## Scope decision

The planned definitions, results, examples and counterexample adequately cover
the intended subject — formal character ring, alternation, denominator
identity, Weyl character formula, Kostant weight-multiplicity formula,
Freudenthal recursion with proved termination, and the Weyl dimension formula,
with the B-page finite checks. All 23 design ids are realized, the four added
items are consumed prerequisites rather than new subject matter, source
coverage is fetch-verified with its deviations recorded, and the prerequisite
closure resolves entirely to published items or this scaffold. **sufficient.**
