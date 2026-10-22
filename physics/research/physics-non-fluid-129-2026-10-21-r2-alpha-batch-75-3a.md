# Batch 75 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-75`. Scope: batch 75 only. Completed the generated order: definition and reverse-adjacent lemma at level 0, Hecke theorem at level 1, Coxeter proposition and channel example at level 2. Each risk review was recorded before proceeding higher. Both routed obligations are decided in the companion decisions JSON; there are no page-only obligations or reader findings.

## Decisions and repairs

- `refuter:75:1`: **confirmed_nonfatal**, confidence 1. The Definition assigned `E_s` both a projection-valued measure and a bundle fiber. Renamed all occurrences in the spectral-measure paragraph to `\mathsf{E}_s`; fibers retain `E_s`. No hypotheses or formulas otherwise changed. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-75-spectral-fiber-notation`.
- `touched:75:lem-qftx-anyonic-vacuum-reverse-adjacent-relation`: **accepted_repair**, confidence 1. Chen §2.2 Remark 2.2.3 states abstract Temperley–Lieb generator relations, rather than identifying the local anyonic projectors. The reader correctly distinguishes that source from the local proof. Current raw hash `829bb6d0241bf706a528773dff2ec8ad12c516ad6db6a06aea569fa504112a0b` matches the post snapshot. Replacing only its locator with the old locator retained in the pages manifest reproduced the exact pre hash `dd9f8e4453b57fd98fb9371ba6fd6498f074a4775e5184503498420f6451773c`; the statement and proof are unchanged. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-75-chen-generator-locator`.

Risk review discovered and completely repaired two further defects within this batch. They add no routed decisions:

- **Fatal endpoint omission**, confidence 1: `thm-qftx-tl-hecke-braid` formerly placed the square relation under the displayed range `1<=i<=n-2`, omitting the last generator. At n=2, V=C, q=1, delta=2 and U_1=I satisfy the vacuous old relations, while B_1=0 is not invertible. Added a separate explicit square-relation range `1<=i<n`. All subsequent proof steps already use precisely this hypothesis. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-75-square-index-endpoint`.
- **Nonfatal diagram notation**, confidence 1: the example's four crossing strand labels used undefined X instead of its repeated site charge a. Corrected those labels only. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-75-site-labels`.

All four rows are appended as fixed in `research/defect-ledger.jsonl`, owned at `3a-adjudicate`. The pages manifest now mirrors the changed Definition, theorem Statement and accepted source locator. Updated the two consumer contract quotations of the theorem. No dependencies, inventories, IDs or proof arguments changed; no judge record existed on the edited items.

## Mathematical review and consumer uses

Read all five current carriers, their direct supplier statements and proofs where supplied, the reader report/findings, refuter report, scope and native pre/post hashes. Read every cited direct dependency, including the published anyonic projection, duality and F-normalization suppliers and the Hecke/Coxeter presentation suppliers. Inspected additional unitary-fusion, fusion-category and absolute-simplicity definitions. These are published supplier inputs, not claims of a fresh audit of their entire transitive closure.

`def-qftx-braided-line-model`: its five proof steps correctly conjugate the local braiding by typed rebracketings, use coherence for the Artin relations, and apply Von Dyck to invertible morphisms. At n=2 both spectator units disappear. The finite-double paragraph preserves the actual supplier's H^{*op} tensor H convention; no semisimplicity or unitarity follows. The spectral data, propagator and approximation bound are supplied conditional data. Norm-continuous finite-rank projections have locally constant rank: projections at operator distance less than one restrict injectively between each other's finite-dimensional ranges, giving equal dimensions and local trivializations. Zero rank and interval endpoints cause no exception. The text claims no empirical or adiabatic theorem.

The only external item/reference consumer found by searching items and library is `def-qftx-wzw-conformal-block-interface`. Read its actual Definition, F5 and proof step 1.4: they use only the unchanged categorical braid-action interface. The spectral-measure rename requires no consumer repair or outside escalation.

`lem-qftx-anyonic-vacuum-reverse-adjacent-relation`: on a grouped triple, vacuum forces total charge a and gives one-dimensional vacuum subspaces in each fixed spectator/multiplicity copy. The supplied F entry has modulus 1/d_a; the fusion versus split conjugation convention leaves that modulus unchanged. Linear-first rank-one projections give P_f P_e P_f=d_a^{-2}P_f. Other total-charge blocks vanish. Signed scaling by delta_a=kappa_a d_a yields the stated reverse relation, including kappa_a=-1. Reparenthesization transports the identity. Empty global path spaces and n=3 are covered.

`thm-qftx-tl-hecke-braid`: after the endpoint correction, checked both inverse orders, adjacent difference coefficient -(q^2-q delta+1), distant commutation, Hecke quadratic and T=qB specialization v=q^2. Base change of the tower sends z to zero. Self-adjointness and |q|=1 give B*=B^{-1}; the explicit inverse supplies surjectivity. Zero V and delta=0 are allowed, with no diagonalizability assertion. Its only item/reference consumers are the following two assigned items; the page merely places it.

`prop-qftx-coxeter-specialization`: already assumes every available square relation, so the supplier repair needs no item edit. At q=1, delta=2 gives involutions; Artin relations and the transported Coxeter presentation give the S_n action. Equality on generators proves the quotient factorization. Roots coincide precisely at q^2=-1. U_i=0, q=2, delta=5/2 on C supplies the asserted noninvolutive example.

`ex-qftx-vacuum-channel-exchange`: orthogonal projectors already supply every square required by the corrected theorem. On range and kernel, B_i acts by -q^{-1} and q respectively. These subspaces exhaust V; an absent subspace contributes no eigenvalue. The signed loop datum and physical interpretation limits are preserved. No consumer item repair was necessary. Frontier-dependency ledger updated; no withdrawals.

All three assigned diagram blocks were checked: the definition's composition diagram follows rho, local crossing, then rho inverse; its upward crossing has right input over left. The example uses the same crossing and q times through-strands minus the formal cup-cap U_i. Corrected charge labels as above. The two pages have empty bodies and no diagrams; their inventories and A/B requirement agree. No missing diagram is required for these algebraic proofs. No choice axiom or empirical premise is used.

## Sources actually inspected

Used existing primary-source extracts in `research/physics-non-fluid-129-2026-10-21-r2-batch-75-sources/text/`:

- `egnotensor-categories.txt`: Definition 4.1.1 (lines 4975–5015), Definition 8.1.1 and its hexagon passage (13075–13170), Remark 8.2.5, Exercise 8.2.7 and the start of §8.3 (13380–13420). The book takes k algebraically closed in §4.1; the local categorical argument uses its explicitly supplied structure over a field and does not infer additional classification results.
- `kytola-hopf-lecture-notes.txt`: Proposition 4.6 and quasitriangular definitions (4400–4510), Theorem 4.18 through Exercise 41 (5135–5345). The source uses a different double factor convention and leaves two identities as an exercise. The local published finite-double supplier supplies the exact full convention and proof used here; the source alone is not represented as completing it.
- `chen-temperley-lieb-thesis.txt`: §2.2, Figure 2.5 and Remark 2.2.3 (410–465). These concern abstract diagram generators. The anyonic identity is proved locally from the F-coefficient, not attributed to this remark.
- `black-hecke-braid-temperley-lieb-dissertation.txt`: Definition II.2.3 (550–600), Definition II.3.1 and Theorem II.3.3 through the beginning of II.3.4 (650–750). Some displayed equations are missing from the OCR; the surrounding proof explicitly expands (v-U_i)(v-U_j)(v-U_i). All claimed operator formulas were independently checked algebraically, and no missing OCR equation is treated as read evidence.

No new web retrieval or full-book reading is claimed. Published/imported content stayed read-only; no defective published supplier was identified in these actual uses. The existing cross-batch page verification remains contextual evidence, not a newly certified transitive proof audit.

## Focused checks and handoff

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-75.proof-contracts.json --strict`: final pass, 5/5, zero errors/warnings. Its first run found stale theorem excerpts in two consumer contracts; updated those exact quotations and reran successfully.
- Risk report run before reviews and after completion with `--require-reviewed`: zero errors, all five HIGH/CRITICAL reviews complete in the owning contract.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the five explicit batch items: all five pass. An exploratory direct Node invocation of the .mts checker failed because Node lacks a TypeScript loader; the actual scoped check used the documented wrapper successfully.
- `node tools/physics-support/rendercheck.mjs` on the five items and two pages: seven files pass YAML and real KaTeX checks.
- After final item edits, `node tools/physics-support/proof-layout.mjs` batched the definition, reader-touched lemma, Hecke theorem and example: four items, 20 steps, zero defects.

No blockers or open risk reviews. No judgment, stamping, dispatch, gate battery or self-certification performed. The engine owns hash stamping and final gates.
