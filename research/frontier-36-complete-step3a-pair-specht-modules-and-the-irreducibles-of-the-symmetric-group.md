# Step 3a scope review — specht-modules-and-the-irreducibles-of-the-symmetric-group

- Run: `frontier-36-complete` (batch 17), role alpha, label
  `step3a-pair-specht-modules-and-the-irreducibles-of-the-symmetric-group-cc2d2d80dc36be8a`.
- A page: `specht-modules-and-the-irreducibles-of-the-symmetric-group` (order
  510.047, category `representation-theory`, 17 items). B page:
  `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples` (order
  510.048, 4 items). Companion pointers A↔B agree; B `requires` only A.
- **Decision: `sufficient`** (non-owner scope review), recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-36-complete --page
  specht-modules-and-the-irreducibles-of-the-symmetric-group --decision
  sufficient --reason "Scope evidence and report path: <this file>"` at the
  current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-specht-modules-and-the-irreducibles-of-the-symmetric-group.json`.
- Scope only. This review decides whether the planned definitions, results and
  examples cover the intended subject, the pair's source coverage, and its role
  in the library. It is not proof or item approval, it edits no scaffold, item,
  plan row or owner record, and it does not certify the `ai-altered` proof
  strategies the Step-3b author and Step-5 reader must still check.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-17.pages.json` | Current A inventory (17 items) and B inventory (4 items): every statement, proof strategy, `deps`, `dependency_level`, provenance and source reference; page `requires`; companion pairing |
| `research/frontier-36-complete-batch-17.coverage.json` | 51 harvested rows over five fetch-stamped source entries (Chan ×2 pages, Craven, Wildon ×2 pages) with locators, dispositions, destinations and reasons |
| `research/frontier-36-complete-batch-17.notes.md` | Step-1 construction record: plan/design reconciliation, the three added Garnir-route suppliers, dependency audit, source dispositions, gate results |
| `research/frontier-36-complete-batch-17.cross-batch-dependencies.json` (`[]`) | No owned cross-batch supplier is requested by this pair |
| `research/plan-representation-theory-groups-track.md` §RG-9 (lines 592–641), harvest table lines 2370–2374, source list line 2288, item census line 2818 | Controlling prose design: A and B item tables, hard proof plan (Garnir bracket), design source backing, design inventory 18 = 14 A + 4 B |
| `research/plan-spec.json` rows 510.047/510.048 | Page identity, order, kind, category, companion and `requires` agree with the manifest; both plan `items` arrays are empty, so the manifest is the materialised design inventory |
| `research/frontier-36-complete-planning-notes.md` line 29; `research/frontier-36-complete-alpha-step1-drift.md` §`specht-modules-and-the-irreducibles-of-the-symmetric-group` | Batch assignment; drift verdict `no-drift` (Young-module, Maschke and character inputs match the declared closure) |
| `research/frontier-36-complete-owner-authoring-direction.md` | Owner direction carries no clause for this pair; no owner scope receipt exists for the page |
| Sources: Chan (`/tmp/chan.pdf`, 303971 bytes, sha256 prefix `8a3cac907770c66d`), Craven (`/tmp/craven.pdf`, 369993 bytes, `b2b190e9a1928b17`), Wildon (re-fetched for this review, 322040 bytes, `31e3817f5bd1f4d0`) | My own reading of the pivotal passages, below |
| Published suppliers named in the manifest (`items/*.md`) | 11 external dependency IDs checked on disk; all `status: published` |

## Scope against the prose design

- **A page.** All 14 design IDs are present with the designed kinds and in
  design order: `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `lem-polytabloid-covariance-and-column-sign`,
  `def-invariant-inner-product-on-a-tabloid-module`,
  `lem-column-collision-causes-antisymmetrizer-cancellation`,
  `lem-column-antisymmetrizer-detects-dominance`,
  `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional`,
  `thm-james-submodule-theorem-in-characteristic-zero`,
  `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`,
  `thm-complex-specht-modules-are-irreducible`,
  `thm-specht-to-permutation-homomorphism-dominance`,
  `cor-distinct-specht-modules-are-inequivalent`,
  `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`,
  `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`,
  `thm-standard-polytabloid-basis`.
- Three further A items are local suppliers of the standard-basis *spanning*
  step: `def-tabloid-and-column-orders-for-specht-straightening`,
  `lem-adjacent-column-garnir-relation`,
  `lem-garnir-straightening-of-polytabloids`. The design's hard proof plan
  authorises exactly this: "if the pages are built strictly in label order,
  prove spanning by Garnir/straightening as in Chan and use RG-11 later only as
  an agreement corollary. Thus no forward dependency is required." This run
  builds in label order (RG-11 is order 510.051), so these are the planned
  route, not inventory padding. No design result is dropped, narrowed or
  re-scoped; nothing in the design's RG-9/H1–H5 harvest rows
  (`included`) is missing.
- The statements match the design's intents: the construction is cyclic with
  the covariance and sign rule; `κ_tM^μ≠0 ⇒ λ⊵μ` and `κ_tM^λ=Ce_t` split the
  dominance and scalar alternatives; James's theorem plus the
  positive-definite Hermitian form gives irreducibility; Hom-dominance with
  `Hom(S^λ,M^λ)=C` gives inequivalence; the classification counts the
  constructed irreducibles against the published class-count theorem and the
  published cycle-type classification (no orthogonality re-minted); the basis
  theorem gives `dim_C S^λ = f^λ`. The empty partition and `S_0` are handled
  in every relevant statement, as the design's boundary plan requires.
- **B page.** All four design IDs are present: `ex-polytabloids-for-shape-two-one`,
  `ex-trivial-and-sign-specht-modules`, `ex-specht-modules-of-s3`,
  `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis`.
  I recomputed the `(2,1)` polytabloids (`e_t=v_3−v_1`, `e_u=v_2−v_1`, the six
  tableaux giving the three differences and their negatives), the `S_3` action
  matrices ((12)a=a−b, (12)b=−b, (23)a=b, (23)b=a), and the `F_2` shape-`(3,1)`
  witness (`S^(3,1)` = 3-dimensional augmentation subspace of `F_2^4`, with
  the proper invariant line spanned by the all-ones vector). Both extreme
  shapes and the modular boundary are covered; the design promises no further
  B content. The pair's job in the library — make the abstract classification
  visible in the smallest cases and fence the complex theorem off from
  modular coefficients — is met.

## Source coverage

- Structural re-run on the current disk state:
  `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-17.coverage.json`
  → 2 pages, 51 harvested results, 0 errors, 0 warnings; the same command with
  `--require-destination` also passes, and the single deferral (Young's rule,
  Craven p. 21) names the planned page `the-branching-rule-and-the-young-graph`.
  `node tools/manifest-deps.mjs research/frontier-36-complete-batch-17.pages.json`
  → 21 items, 0 errors.
- Disposition mix: 35 `included`, 8 `inline`, 2 `already-published` (Maschke;
  the sum-of-squares degree corollary), 5 `out-of-scope`, 1 `deferred`. Every
  `out-of-scope` row carries a specific reason consistent with the design
  boundary; all five are modular/integral items (Craven Cor. 2.4 quotient by
  the form radical, Wildon integral/arbitrary-field extensions, Wildon Ex. 4.5
  and Ex. 6.12, Wildon Ex. 5.2 self-pairing) that the plan assigns to the later
  modular Specht pages, not to this characteristic-zero classification.
- Fetch evidence: all five coverage entries carry `fetch_verified` stamps with
  byte counts and `sha256_16` prefixes. I re-fetched the Wildon notes myself
  and got byte-identical content (`31e3817f5bd1f4d0`), and the cached Chan and
  Craven PDFs match their stamps. Passages I read completely for this review:
  - Chan: Def. 3.8 and 3.12, Rem. 3.13, Thm. 4.1(a)/(b), Cor. 4.2, Thm. 4.3
    (Maschke), Thm. 4.4(a)–(c), Cor. 4.5, Rem. 4.6, Thm. 4.11, Rem. 4.13, and
    the Ch. 9 form material (Def. 9.1, Rem. 9.2, Lem. 9.3, Thm. 9.4, Prop. 9.9)
    used by the dominance/James arguments.
  - Craven §1.8 and §2.1, pp. 16–22: Prop. 1.22–1.23, the bilinear form and the
    column-collision computation, Thm. 2.3 (James), Cor. 2.4, Thm. 2.5, Thm. 2.6.
  - Wildon: Ex. 2.3, Ex. 2.6(A)–(C), Thm. 4.3 with the char-2 non-extension
    warning, Cor. 4.4, Ex. 4.5, Ex. 5.2, Def. 6.1/6.3/6.6/6.9, Thm. 6.2,
    Thm. 6.8, Lem. 6.10, Cor. 6.13, and the Ex. 6.7 `(2,1)` Garnir check.
  These confirm that each scaffolded result has a genuine full argument in at
  least one primary source: in particular the standard-basis spanning and
  terminating straightening come from Wildon's complete Thm. 6.8/Lem. 6.10
  proof, not from a citation, and the Hom-dominance statement's extension
  hypothesis is discharged over C by Maschke exactly as Chan's Thm. 4.4 proof
  and Cor. 4.4 do (Wildon Thm. 4.3 only becomes unconditional in char 0 for the
  same reason).

## Role in the library

- The three declared page prerequisites (`young-diagrams-tableaux-and-permutation-modules`,
  `maschkes-theorem-and-complete-reducibility`,
  `characters-and-the-orthogonality-relations`) and all 11 external dependency
  IDs are published. The batch's dependency levels recompute with 0 errors and
  maximum level 6.
- No other in-run batch references this pair's page or item IDs (checked
  mechanically across all 30 batch manifests), so it is a root supplier, not a
  consumer bottleneck, inside this frontier.
- Its planned consumers are `the-branching-rule-and-the-young-graph`
  (510.049), `the-hook-length-formula-and-rsk-correspondence` (510.051), and
  the later Frobenius-characteristic, Jucys–Murphy, integral/modular-Specht,
  Kronecker and Plancherel pages (801, 807, 809, 823, 829), which need the
  polytabloid construction, irreducibility, the dominance/Hom interface, the
  `f^λ` dimension and the modular warning. All of those interfaces are present
  in the planned A/B inventory; the hook formula and Young's rule themselves
  stay on RG-10/RG-11, where the design puts them.
- The published library has no Specht page or Specht item and no published item
  references a polytabloid, so this pair creates no dangling published
  consumer. The published `young-diagrams-...` page mentions Specht modules
  only as orientation ("later pages"), which is not a load-bearing forward
  reference. `research/published-consumer-supplier-ledger.md` contains no
  defect entry for this page (only a historical note that future consumer
  examples use the RG-9 A-page basis theorem instead of the B companion item).

## Honest observations (non-blocking; recorded for the owner, no action requested)

1. **Two design items have no coverage row.** `def-invariant-inner-product-on-a-tabloid-module`
   and `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`
   are not the `item` destination of any of the 51 harvested rows, although
   both are design items and the design's own harvest rows RG-9/H1 and RG-9/H2
   mark their source results as `included`. I verified the backing directly:
   Chan Def. 9.1/Rem. 9.2/Lem. 9.3 (orthonormal tabloid form, invariance,
   self-adjointness of `κ_t`) and Craven pp. 19–20 (the unique bilinear form and
   its use), so the items are source-backed; the gap is in the harvest ledger's
   granularity, not in the subject scope. The coverage gate does not require a
   row per item, and I did not edit the file.
2. **One Chan row is a pointer, not a proof.** The row "Remark 4.13, Garnir
   straightening alternative" cites Chan, but Chan's Rem. 4.13 only refers to
   James's book. The item `lem-garnir-straightening-of-polytabloids` is
   nevertheless genuinely backed by Wildon's complete Def. 6.9/Lem. 6.10 proof
   (and `lem-adjacent-column-garnir-relation` by Wildon Thm. 6.8). The Step-5
   fidelity reader may want the locator list to name Wildon as the carrier.
3. **Source-form strengthening, deliberate.** The scaffold states the tabloid
   form as a positive-definite Hermitian product, while Chan/Craven use the
   symmetric bilinear form and Craven's one-line irreducibility step
   ("the bilinear form is clearly non-degenerate") does not restrict
   nondegenerately to an arbitrary complex subspace. The Step-1 notes record
   the Hermitian form as a deliberate repair, and the design's nondegeneracy
   item is exactly about `S^λ∩(S^λ)^⊥={0}`. This is a proof-level decision —
   the scope is unchanged and adequate — and Step 3b/Step 5 own its audit.
4. **Design prose names Schur; plan `requires` does not.** RG-9's prose lists
   "Maschke, Schur and the number-of-irreducibles/class-functions
   consequences"; the plan row and the manifest name the Maschke and character
   pages, and the Step-1 drift review recorded `no-drift`. No scaffolded item
   uses a Schur's-lemma carrier: irreducibility, inequivalence and completeness
   are proved from James's theorem, the Hermitian form, dominance and the
   class-count theorem. I found no scope consequence.
5. **Etingof is absent from the harvest set.** The design lists Etingof
   §§4.12–4.13 as an independent construction check; the batch instead
   harvests Wildon, whose complete Garnir proof is the stronger choice for the
   in-label-order route. The design's hard proof plan permits this, and the
   design's RG-9/H4 results are covered.

## Uncertainty statement

I read the complete relevant arguments in Chan, Craven and Wildon for the
construction, dominance, James, irreducibility, classification, basis and
modular-boundary claims, and I recomputed the B-page `(2,1)`, `S_3` and `F_2`
witnesses. I have no unresolved doubt about the *scope* verdict. I have not
attempted to validate the `ai-altered` proof strategies or the numerics of
every proof step; that belongs to Step 3b authoring, Step 5a/5b review and
adjudication, and to the Step-6/Step-7 gates. If any later writer changes a
page `requires`, an item ID/kind/title/statement, this receipt goes stale by
construction (`scopeHash`) and must be re-recorded or the pair re-reviewed.
