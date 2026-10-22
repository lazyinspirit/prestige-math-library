# Step 3a adjudication — batch 82

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-82`.

## Scope and checkpoint

The scope routes one touched obligation, `touched:82:cex-qftx-euler-class-loses-extension-data`, no reader/refuter findings and no page obligations. All four items are HIGH (score 6) under the initial risk-report command. Definitions were reviewed first, in the dispatched order; their Alpha risk reviews are complete in the owning contract. The proposition was then completed before the counterexample, including their individual risk reviews; all four Alpha risk reviews are complete.

## Level 0 review

`def-qftx-categorified-line-model`: the current Definition matches its five actual imported suppliers: split Grothendieck ring, positive/negative Rouquier generator complexes, word complex, canonical homotopy comparison and coherent braid action. The grading convention is M(1)_d=M_{d+1}, with [M(1)]=v[M]. The empty word gives the unit R; n=2 and both generator endpoints are valid. Finite tensor totalization stays in SBim_n and its full homotopy subcategory. Canonical comparisons are unique in internal degree zero; finite signed words admit shortlex representatives without AC. A strong monoidal realization functor into an independently supplied defect category is additional data. No physical existence or empirical assertion is made. No defect found and no decision is owed for this untouched item.

`def-qftx-klr-defect-action-contract`: checked all idempotent, dot, mixed, quadratic, distant and braid-correction relations, degree assignments, functor weights, adjunction requirements and the explicit boundary on integrability/decategorification. The field hypothesis makes nonzero off-diagonal Q parameters non-zero-divisors. Polynomial divisibility of the braid numerator holds also when the dot variables coincide; the formula does not require division in a fraction field. Height zero gives k and height one has no crossing. This is a contract, not a theorem asserting an action or a physical realization. No defect found and no decision is owed for this untouched item.

## Sources actually checked

- [Gorsky–Kivinen–Simental, arXiv:2108.10356v1](https://arxiv.org/pdf/2108.10356), PDF pp. 6–8, Definition 3.3, Remark 3.7, Lemma 3.8, (3.3), Theorem 3.10 and the word construction. The source works over C; the imported local suppliers state and justify the Q setting and exact shift/scalar translation used here.
- [Rouquier, Categorification of the braid groups](https://arxiv.org/pdf/math/0409593), v1 PDF p. 10, §3.3.1, Theorem 3.5: normalized homotopy comparisons and coherent tensor action. The source's grading is read through the exact imported generator dictionary, not silently identified with it.
- [Rouquier, Quiver Hecke algebras and 2-Lie algebras](https://www.math.ucla.edu/~rouquier/papers/repquiv.pdf), printed pp. 13 and 26, §§3.2.2 and 4.3.1: checked relation signs, the polynomial correction quotient and the extra requirements on integrable 2-representations. The local contract deliberately does not claim the full representation from the positive KLR relations alone.

These are passage-level checks, not whole-paper audits. Required workspace rules, scope/order, reader report/findings, refuter report, pre/post inventories and current item/dependency carriers were consulted.

## Level 1 review and routed decision

`prop-qftx-categorified-braid-euler`: read every proof step and all six declared dependency carriers. The exact local generator proposition gives Phi(chi(F_i))=vT_i and Phi(chi(F_i^{-1}))=v^{-1}T_i^{-1}. Its inverse calculation follows from T_i^{-1}=v^2T_i-1+v^2 with q=v^{-2}. Multiplying the finite signed-word factors gives the stated power v^{e(beta)}. The Artin relations and insertion/deletion of inverse pairs preserve exponent sum, so it descends and adds under concatenation; homotopy invariance and tensor multiplicativity then justify stacking. Empty word, zero exponent, inverse letters, n=2 and generator endpoints were checked. In the last step the identity-differential complex is contractible via h^1=1_R but has nonzero graded terms, so is not degreewise isomorphic to zero. No defect found; no decision owed for this untouched carrier.

`cex-qftx-euler-class-loses-extension-data`: **amended_repair**, repair_confidence: **1**. Retain the reader's source changes exactly; the amendment synchronizes only its owning manifest title. The pre-reader bytes were recovered at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/cex-qftx-euler-class-loses-extension-data.md`, whose raw SHA256 is `f1abe1634827f56ff65599356b96825d3d566a434029b77cc7915a5b3a350db9`, exactly the frozen pre inventory. Current item raw SHA256 is `e5b0e980c65a7d00e3bfece9a2e3f58cc9c9454eb3151ec00005888fdc6890f6`, exactly the frozen post inventory. The complete diff consists of the title replacement, the explicit abelian ambient category in A1 and the new Remarks paragraph. The Statement refuted and all numbered proof paragraphs are unchanged. Historical delta is known.

The witness has C^0=C^1=R with unshifted grading and zero differentials. It is a bounded Soergel complex and chi(C)=[R]-[R]=0. In graded R^e-modules its cohomology is R in degrees 0 and 1 and zero otherwise. Independently, the degree-zero contracting-homotopy equation would require 1_R=0 because both adjacent differentials vanish; evaluation on 1 contradicts this. Thus every step proves the stated counterexample for all n>=2. The witness is not identified with a braid-indexed F(beta). The original title was ambiguous about this restricted family, and the old cohomology phrase omitted its ambient category; both are nonfatal because the unchanged refuted statement already quantifies over general bounded complexes and the contracting-homotopy contradiction is independent of cohomology. These are the two historical defects now closed in the ledger, not claims that the original witness was false.

Closed defect IDs:

- `physics-non-fluid-129-2026-10-21-r2-3a-batch-82-counterexample-title-scope` — polish: title/scope ambiguity; retained the precise reader title and Remarks qualification.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-82-counterexample-cohomology-ambient` — nonfatal: unspecified abelian ambient category for the auxiliary cohomology calculation; retained the graded-bimodule/R^e-module specification.

The manifest title is now the current source title. The existing contract's reader scope qualification is retained and all four risk_review records now identify this Alpha review. No source item was changed by this adjudication; no verification/judge stamp was added or removed. No Statement or Definition changed between pre and post, so no supplier-interface propagation is triggered. The two pages have draft frontmatter-only bodies and unchanged placement; neither owes a page decision.

## Diagrams, dependencies and published context

Both TikZ crossings were checked directly. In the braid-line definition the strand from bottom right passes over the strand from bottom left, time points upward, and strand labels follow their endpoints. In the KLR definition the lower order (i,j) becomes upper order (j,i), matching the natural-transformation source and target. The caption explicitly gives no invertibility relation. The proofs stand independently of these drawings, and no additional diagram is needed.

All direct mathematical suppliers were read in the local imported `items/` carriers. In particular the Euler-invariance supplier uses idempotent splittings and a contractible cone; it does not assume SBim_n abelian. Its boundedness, additive tensor product, grading and full-subcategory hypotheses match both consumers. The comparison/action supplier proofs use degree-zero uniqueness of normalized comparisons, not equality of raw complexes. No defective published supplier was found, so no published-ledger entry or lock was needed; all imports and mathematical originals remain unchanged. No AC is used in the owned arguments.

The sole cross-batch edge is page `qftx-categorified-line-operators` -> `qftx-ribbon-braid-representations`. The current supplier page declares all five previously missing prerequisite pages. Updated the consumer-owned row to verified for this current context/placement use, preserving the entire historical Step-1 hold in its evidence. No batch-75 item supplies a logical premise in these four items, and this disposition does not certify its proofs or invent readiness records. Refreshed the derived frontier ledger through its prescribed tool; did not edit the unified ledger manually. There is no unresolved scoped dependency or owner escalation.

Additional source passages checked: [Stroppel](https://ems.press/content/book-chapter-files/33157), Remark 3.14 and (3.7), PDF p. 16: split Grothendieck decategorification, with its normalization translated by the exact imported proposition. [Khovanov–Lauda](https://arxiv.org/pdf/0807.3250), §3.1 Definition 3.1 and generating degrees (PDF pp. 20–21), §3.4 (PDF pp. 38–39), and §3.6 (PDF pp. 42–43): graded 2-category/2-representation and split K0 context. No theorem from these passages is silently applied to arbitrary exact K0 of abelian categories.

## Local checks and handoff

All commands ran from the physics workspace and exited 0:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-82.proof-contracts.json` — four HIGH items, score 6 each; 0 errors. After individual review, the same command with `--require-reviewed` — 0 errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/prop-qftx-categorified-braid-euler.md items/cex-qftx-euler-class-loses-extension-data.md` — 2 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/cex-qftx-euler-class-loses-extension-data.md` — 1 item, 3 steps, 0 defects; run after final content decisions. No formatter or source edit followed.
- `node tools/physics-support/rendercheck.mjs` with the four explicit item paths and two explicit page paths — 6 files, YAML and KaTeX pass. This tool does not claim a TeX compilation of TikZ; the diagrams received the mathematical source review above.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2` — refreshed and deduplicated.
- Raw SHA256 comparison of all four current item files against the frozen post inventory — all exact matches.

There are no empirical observations, measured inputs or statistical-inference claims in this mathematics-only batch. No blockers, proposed withdrawals or outside repairs remain. The decisions file contains exactly the one owed obligation. Decision stamping and the engine's gate battery remain engine-owned; no judge cycle or certification was initiated.

Final bookkeeping checks: defect-ledger append succeeded (2 fixed rows) and regenerated its view. Local handoff consistency confirmed exact obligation coverage, unique closed ledger references, all four complete Alpha risk reviews and unchanged post-reader item bytes.
