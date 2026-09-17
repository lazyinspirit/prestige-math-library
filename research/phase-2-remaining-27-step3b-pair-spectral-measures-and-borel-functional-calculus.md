# Step 3b authoring — spectral measures and Borel functional calculus

- Run: `phase-2-remaining-27`; role alpha-high; batch 5; A page
  `spectral-measures-and-borel-functional-calculus`, B page
  `spectral-measures-and-borel-functional-calculus-examples`.
- Scope decision: `research/phase-2-remaining-27-step3a-review-spectral-measures-and-borel-functional-calculus.json`
  = `sufficient` (closed at the current scope hash). No owner scope receipt.
- Sibling pair in the same batch (`continuous-functional-calculus-…`, batch 5)
  was already authored by its own owner before this dispatch; its files are
  preserved untouched, and its completed claims were re-read where cited.

## Checkpoint (authoring progress, A page)

Authored and individually precheck-clean (precheck via `tools/precheck.mts`;
`tools/adopt-repair.mjs` used only for the canonical step stratification):

| # | Item | State |
|---|---|---|
| 1 | `def-projection-valued-measure` | written, precheck n/a (definition), rendercheck pass |
| 2 | `lem-weak-and-strong-additivity-of-orthogonal-projections` | written, precheck pass |
| 3 | `lem-scalar-and-complex-measures-from-a-pvm` | written, precheck pass |
| 4 | `def-integral-of-a-simple-function-against-a-pvm` | written, rendercheck pass |
| 5 | `lem-simple-pvm-integral-is-representation-independent` | written, precheck pass |
| 6 | `thm-bounded-borel-pvm-integral` | written, precheck pass |
| 7 | `thm-pvm-integral-is-a-star-homomorphism` | written, precheck pass |
| 8 | `lem-continuous-functional-calculus-produces-a-regular-pvm` | written, precheck pass |
| 9 | `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` | written, precheck pass |
| 10 | `def-borel-functional-calculus-for-a-bounded-normal-operator` | written, rendercheck pass |
| 11 | `thm-borel-functional-calculus-for-bounded-normal-operators` | written, precheck pass |
| 12 | `cor-spectral-projections-and-resolution-of-the-identity` | written, precheck pass |
| 13 | `thm-support-and-uniqueness-of-the-spectral-measure` | written, precheck pass |
| 14 | `def-cyclic-vector-and-cyclic-normal-operator` | written |
| 15 | `thm-cyclic-spectral-representation` | written, precheck pass |

Remaining A items: 16 `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`,
17 `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`,
18 `def-spectral-multiplicity-function-in-the-separable-case`,
19 `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`,
20 `thm-unitary-equivalence-classified-by-measure-class-and-multiplicity`,
21 `thm-stone-resolvent-formula-for-spectral-projections`.

## Key mathematical decisions recorded so far

- PVM convention: orthogonal projection = bounded $P^2=P=P^*$; strong
  countable additivity is the defining clause 4; regularity means every
  $E_x=\langle E(\cdot)x,x\rangle$ is a regular Borel measure.
- The construction of the spectral PVM (item 8) uses the published
  $C_0$-duality representation theorem
  (`thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`) for
  the bounded functionals $f\mapsto\langle\pi(f)x,y\rangle$; uniqueness of the
  representing regular complex measures is used exactly where the source
  (Williams, Theorem 5.6) uses "uniqueness of the $\mu_{\xi,\eta}$". No
  polarisation-factor-2 loss occurs because the variation bound
  $|\mu_{x,y}|(K)\le\|x\|\,\|y\|$ is inherited from $\|L_{x,y}\|$.
- Norm of the integral: $\|\Phi_E(f)\|=\|f\|_{E,\infty}$, the sup over unit
  vectors of the $E_x$-essential supremum; proved in item 6 with the nonzero
  projection $E(\{|f|>c\})$.
- Item 12: $E(\{\lambda\})H=\ker(T-\lambda I)$ by comparing $E_x$ with
  $\|x\|^2\delta_\lambda$; right continuity of $F(t)=E(\sigma(T)\cap(-\infty,t])$
  from continuity from above for the finite measure $E_x$.
- Item 13: support $E(U)\ne0$ on nonempty relatively open $U$ by testing a tent
  function $q$ vanishing off $U$; the uniqueness clause is proved first for
  PVMs on a compact $\Lambda$ whose coordinate integral is $T$, using the
  density of $\ast$-polynomials in $C(\Lambda)$ and the distance function to
  $\sigma(T)$.

## Planned proofs for items 18–20 (to verify before writing)

- Item 18 defines the standard separable model $L^2(\mu,m)$ (fibres
  $\operatorname{span}\{e_1,\dots,e_{m(z)}\}$, `m` the number of active
  Radon–Nikodym densities) for a chosen countable cyclic decomposition and a
  common dominating finite measure $\mu=\sum_j2^{-j}\mu_j/(1+\mu_j(\sigma(T)))$.
- Item 19: from $UM_z=M_zU$ one gets $UM_h=M_hU$ for all bounded Borel $h$ by
  testing continuous $h$ against the coordinate densities
  $\sigma_{p,q}=\sum_kp_k\overline{q_k}\in L^1(\mu)$; the measure class
  $[\mu]=[\nu]$ follows from the vector $e_1$; localising to a set where $m,m'$
  are constant reduces the multiplicity statement to the constant-fibre case,
  where the commutant of the multiplication algebra on
  $\bigoplus_{j\le k}L^2(\mu_B)$ is the matrix algebra of multiplications and a
  unitary intertwiner forces $k=k'$ (a.e.-defined unitary fibre map).
- Item 20: $\Leftarrow$ by the canonical identification of
  $L^2(\mu,m)$-models with equal multiplicity function (Radon–Nikodym factor);
  $\Rightarrow$ by applying item 19 to the composite of the two model
  unitaries. No change of spectral coordinate is allowed.

## Completed items

All 29 assigned items are written and closed with `accept`, confidence 1
(receipts `research/phase-2-remaining-27-step3b-review-<id>.json`), in
prerequisite order:

A page (21): `def-projection-valued-measure`,
`lem-weak-and-strong-additivity-of-orthogonal-projections`,
`lem-scalar-and-complex-measures-from-a-pvm`,
`def-integral-of-a-simple-function-against-a-pvm`,
`lem-simple-pvm-integral-is-representation-independent`,
`thm-bounded-borel-pvm-integral`, `thm-pvm-integral-is-a-star-homomorphism`,
`lem-continuous-functional-calculus-produces-a-regular-pvm`,
`thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
`def-borel-functional-calculus-for-a-bounded-normal-operator`,
`thm-borel-functional-calculus-for-bounded-normal-operators`,
`cor-spectral-projections-and-resolution-of-the-identity`,
`thm-support-and-uniqueness-of-the-spectral-measure`,
`def-cyclic-vector-and-cyclic-normal-operator`,
`thm-cyclic-spectral-representation`,
`lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`,
`thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`,
`def-spectral-multiplicity-function-in-the-separable-case`,
`lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`,
`thm-unitary-equivalence-classified-by-measure-class-and-multiplicity`,
`thm-stone-resolvent-formula-for-spectral-projections`.

B page (8): `ex-pvm-of-a-diagonal-normal-operator`,
`ex-pvm-of-a-multiplication-operator`,
`ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`,
`ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator`,
`ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function`,
`cex-continuous-functional-calculus-cannot-produce-every-spectral-projection`,
`cex-a-normal-operator-need-not-have-any-eigenvectors`,
`rem-direct-integrals-and-general-multiplicity-theory`.

Both pages are written:
`library/functional-analysis/spectral-measures-and-borel-functional-calculus.md`
and `…-examples.md`. No item IDs, titles or promised claims were changed, and
no pair was added.

## Checks actually run

| Check | Result |
|---|---|
| `tools/precheck.mts` on the 29 owned item paths | 23 proof-bearing items checked, 0 failing; 6 definitions/remark have no phase body |
| `tools/rendercheck.mjs` on the 29 items and both pages | 31 files, OK (no wikilink in math, no multiline display, all math parses) |
| `tools/proof-contract.mjs --strict` on `…-batch-5.proof-contracts.json` | 62/62 items, 0 errors; 2 non-fatal `shotgun-bracket` warnings, both on the sibling pair's items |
| `tools/content-policy.mjs` on `…-batch-5.pages.json` | 62 scoped items, 0 errors, 0 warnings |
| `tools/manifest-deps.mjs` on `…-batch-5.pages.json` | 62 items, 0 normalized, 0 errors |
| `tools/validate-plan.mjs research/plan-spec.json` | exit 0; no item cycle, forward reference, B-page dependency or unresolved id; 481 planned pages still carry empty item lists |
| `tools/coverage-checklist.mjs …-batch-5.coverage.json` | 2 pages, 43 harvested results, 0 errors, 0 warnings |
| `tools/depcheck.mjs` | no cycles, all references resolve, no draft item on a published page; no warning attributed to an owned item |
| `tools/step3-decisions.mjs check --phase final` | all 29 owned items closed (`accept`, confidence 1); other open items belong to the other in-flight pair dispatches |
| `tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed and deduplicated |
| JSON parse of the owned JSON artifacts, `git diff --check` on owned paths | clean |

`tools/adopt-repair.mjs` was used only to reformat already-written steps into
the canonical precheck stratification (renumbering and reordering of steps
that were fully written first); it never generated mathematics. Display
formulas were reformatted to single source lines with a line-joining script
after `rendercheck` flagged them.

## Local suppliers added

None. The two constructions that the scaffold left implicit are fully authored
inside the existing items, so the promised 21+8 inventory is unchanged:

- the regular PVM of a unital star-representation and its uniqueness are
  proved inside `lem-continuous-functional-calculus-produces-a-regular-pvm`;
- the multiplicity invariance and classification are proved inside
  `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension` and
  `thm-unitary-equivalence-classified-by-measure-class-and-multiplicity`,
  including the localised constant-fibre rigidity argument, the density
  regularity argument for `L^1`-densities against a regular measure, and the
  measurable rank enumeration inside
  `def-spectral-multiplicity-function-in-the-separable-case`.

## Scaffold repairs (claims preserved)

1. `dep` arrays were rewritten to match the actually cited facts in every
   item; the manifest rows for the pair mirror the item files exactly, and
   `depcheck` reports no undeclared citation for any owned item.
2. `lem-continuous-functional-calculus-produces-a-regular-pvm` additionally
   declares the four definitional suppliers it cites in its facts:
   `def-total-variation-of-a-signed-or-complex-measure`,
   `def-projection-valued-measure`,
   `def-integration-against-a-signed-or-complex-measure` and
   `def-complex-measure`.
3. `thm-stone-resolvent-formula-for-spectral-projections` step for the scalar
   kernel cites the real-spectrum fact so that every step carries a declared
   input.

## Source and confidence record

- Bühler–Salamon (sha256_16 `8ffd5f868b480006`), Williams
  (`12aa6e2ceb0a4f8c`), Conway (`c224068060b13865`), Kriegl
  (`15cd59d338f30278`) and Teschl (`8dc8de0b58aa0a3f`) were re-fetched in this
  dispatch; every hash reproduces the Step-1 coverage record and the Step-3a
  re-check. I read the load-bearing results again: Bühler–Salamon Definition
  5.72, Theorems 5.73–5.75 and 5.81–5.84; Williams Definition 5.1, Remark 5.5
  and Theorem 5.6; Conway Theorem 10.21 with the multiplicity discussion
  preceding it; Kriegl §8.61–8.66; Teschl Theorem 4.3 (Stone's formula,
  formula (4.17), with the resolvent convention `R_A(λ ± iε) =
  ((λ ± iε) - A)^{-1}`, matching this page's `(T - (t ± iε))^{-1}`).
- Conway and Kriegl leave the uniqueness of the multiplicity decomposition
  "to the reader". This page does not: the intertwiner lemma and the
  classification theorem contain complete proofs, using the published
  `C_0`-duality representation theorem for uniqueness of regular complex
  measures and a localised constant-fibre matrix argument for the equality of
  fibre dimensions.
- Honest qualification: the constant-fibre rigidity step uses the standard
  fact that a bounded operator on `L^2` of a finite measure that commutes with
  every multiplication is itself a multiplication; that fact is proved inside
  the step from `L^∞`-density and the identity `T(1)`, not quoted.
- All statements remain `ai-altered`; the cited sources are the backing
  treatments, not proof substitutes.

## Published concerns (for the owner / serial reconciler)

(a) **Sibling-owned, non-fatal.** Two items of the sibling pair in this batch
carry `shotgun-bracket` warnings in the strict contract check:
`lem-spectral-permanence-for-unital-c-star-subalgebras` (step 1.3 cites 4 of 7
facts while 2 steps cite none) and `thm-partial-isometry-characterizations`
(4 of 6). Confidence: cosmetic contract shape, mathematical content not
implicated. Repair strategy: cite each fact at the step that uses it; owner of
that pair.

(b) **Naming hazard, published item, no defect claimed.**
`lem-basic-properties-of-total-variation` (published) states properties of
functions of bounded variation, while the neighbouring measure-theoretic items
`def-total-variation-of-a-signed-or-complex-measure` and
`thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`
concern measures. Nothing on this page cites the former; I record the
ambiguity for the canonical ledger as a *suspicion* about discoverability, not
a confirmed defect. Confidence: high that the two notions are conflated by the
shared name; repair strategy: none required unless a consumer mis-cites it.

(c) No published item on any owned prerequisite path was found mathematically
defective. The Step-3a review already reported the FA-19 B counterexample
near-duplicate (`cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections`
versus `cex-continuous-functional-calculus-cannot-produce-every-spectral-projection`);
both are design-mandated and both are now authored, so this remains a
redundancy observation for Step 4 prose, not a defect.

## Choice audit

Items 1–7 declare Countable Choice and consume it only through the Hilbert
projection, adjoint and completeness suppliers (`def-hilbert-space`,
`thm-hilbert-adjoint-properties`,
`lem-orthogonal-projection-is-linear-self-adjoint-contractive`,
`thm-riesz-representation-for-hilbert-space`); no maximality or
arbitrary-index selection occurs there. From
`lem-continuous-functional-calculus-produces-a-regular-pvm` onward the page
declares AC, whose exact uses are: the regular-measure representation theorem
for bounded functionals on `C(K)` (construction of the spectral PVM), Zorn's
lemma in `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`, and the
Radon–Nikodym selection in the multiplicity construction. The separable
dense-sequence alternative to Zorn is stated separately and used for the
separable classification. Every item from the construction onwards declares
`def-axiom-of-choice` as a dependency, and the assumption is propagated to all
consumers through the page's item statements.

## Open obligations and pre-splice notes

- **Step 4:** the plan entries for both owned pages still carry `items: []`,
  and the batch-5 manifest carries the 21+8 inventory; splice that inventory.
  No other pre-splice plan mismatch was found. `validate-plan` reports 481
  planned pages with empty item lists, which is the normal pre-splice state.
- **Cross-batch input:** the batch-5 input now carries 323 reviewed rows (141
  preserved sibling rows plus 182 new rows for this pair's direct item
  dependencies); the unified ledger was refreshed with the repository tool.
  The page edge to the sibling pair is same-batch and therefore not a
  cross-batch row.
- **Consumers:** batch-6 (FA-21) consumes
  `def-projection-valued-measure`, `thm-pvm-integral-is-a-star-homomorphism`,
  `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
  `thm-support-and-uniqueness-of-the-spectral-measure` and
  `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`
  exactly as the scaffold declared; all five are authored A-page items, so the
  batch-6 dependency interface is unchanged and its owner must re-check the
  completed claims, not the scaffold.
- **No escalations** are owned by this dispatch. Nothing in the pair was left
  unresolved, and no owner-held escalation was overridden.
