# Step 3a scope review — Choice Strength in Baire, Urysohn, Stone, and Tychonoff

- Run: `phase-2-remaining-27` — role `alpha`, this pair only (batch 14).
- A page: `choice-strength-in-baire-urysohn-stone-and-tychonoff`
  (plan order 697, `foundations`).
- B page: `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples`
  (order 698; `requires` only its A companion, as required).
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope` (receipt
  `research/phase-2-remaining-27-step3a-review-choice-strength-in-baire-urysohn-stone-and-tychonoff.json`).
- Scope only: no item approval, owner record, or edit to any scaffold, manifest,
  coverage, plan, item or page. Non-blocking authoring obligations are listed at
  the end; none makes the scope inadequate.

## Artifacts read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-14.pages.json` | Live A inventory (39 items, order 697) and B inventory (5 items); page `requires` |
| `research/phase-2-remaining-27-batch-14.coverage.json` | 11 sources, 71 harvested rows with dispositions, reading evidence and fetch stamps for the A page |
| `research/phase-2-remaining-27-batch-14.cross-batch-dependencies.json` | One row, for the sibling pair; no cross-batch item edge for this pair |
| `research/phase-2-remaining-27-batch-14.notes.md` | Step-1 construction evidence, source-recovery record, the DMC/DC wording repair |
| `research/phase-2-remaining-27-beta-14.task.md` | Batch contract, design locator `research/plan-set-theory-completion-track.md` L754 |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction; "Choice, inner models, and set-theoretic topology" section |
| `research/phase-2-remaining-27-alpha-step1-drift.md` | `no-drift`; declared edges backward and closed |
| `research/plan-set-theory-completion-track.md` | SET-22 design (L754–L776), B-companion contract (L134), target-clause table (L1144–L1147), §7.9 binding cut (L1565–L1640), L1177 source-correction note |
| `research/plan-spec.json` | Live page objects 697/698: id, title, kind, category, companion, exact `requires`, and the 39+5 item lists |
| `research/phase-2-remaining-27-alpha-groups.json` | Group `e` covers batches 14, 15, 3; foundations stayed atomic |
| `research/published-consumer-supplier-ledger.md` (11647, 11909–11923) | SET-22 published consumers (`rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`, via the equivalence theorem) and the recorded debt note |
| `items/rem-baire-category-choice-strength.md`, `rem-urysohn-lemma-not-a-zf-theorem.md`, `rem-stone-theorem-choice-strength.md`, `rem-schechter-kelley-tychonoff.md` | The four catalogue remarks this pair must retrofit with proofs |
| `items/` dependency statements read directly: `def-countable`, `lem-countable-iff-surjection-from-n`, `def-paracompact-space`, `def-cover-refinement-and-local-finiteness`, `thm-urysohn-lemma`, `thm-stone-metric-spaces-are-paracompact`, `ex-blair-sequence-space-for-a-serial-relation`, `thm-tietze-extension-theorem` | Suppliers that carry clauses the design attributes to this page |
| `library/not-proved-here/deferred-set-theory-beyond-choice.md` | Boundary list (22 items), used for the direct/transitive exclusion check |
| Owned-item Step-1 receipts (`phase-2-remaining-27-step1-<item>.json`) | 39/39 A and 5/5 B current `ready` |

Commands run for this review (this pair's batch, read-only):

- `node tools/validate-plan.mjs research/plan-spec.json` → OK, exit 0; declared
  order acyclic and consistent over 1138 pages with item lists.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-14.pages.json`
  → 73 items, 0 missing, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-remaining-27-batch-14.pages.json`
  → 73 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-14.coverage.json`
  → 2 pages, 71 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-14.coverage.json`
  → 23/23 sources resolved, 20/23 fetch-verified (3 documented drops; none on
  this pair's A page — all 11 of its sources carry fetch stamps).
- `node tools/depcheck.mjs research/phase-2-remaining-27-batch-14.pages.json`
  → OK, no cycles, all references resolve (the reported `cited-not-in-deps`
  warnings are pre-existing published-item notes unrelated to these 73 items).
- Owned dependency resolution: 0 of the 44 declared dependencies missing; no
  Step-3a owner receipt exists for this page.

## Independent source verification performed

I re-fetched and read the primary sources behind the delicate rows rather than
relying on the coverage summaries. Downloads were compared byte-for-byte with
the coverage fetch stamps; every byte count below matches exactly.

| Source | Local check | Result |
|---|---|---|
| Morillon, *Axiom of Choice* (`mem-HDR.pdf`), 359134 bytes = coverage stamp | §2.1 definitions, Theorem 4, Question 1 | Confirms DMC as "every pruned tree has a pruned subtree whose levels are finite", `DMC ⇒ BC` as easy, `BC ⇒ DMC` as Theorem 4 (scattered compact spaces suffice), and Question 1 as open; the source contains no ZFA strictness claim, so the scaffold's separate ZFA qualification must (and on the owner's direction does) come from elsewhere |
| Herrlich–Keremedis, *Products, the Baire category theorem, and the axiom of dependent choice* (`CommentatMathUnivCarolRetro_40-1999-4_13.pdf`), 176613 bytes = stamp | Abstract, Definitions, Theorem 3, Theorem 4 and its proof | Confirms the exact form used by the scaffold: countable products of compact Hausdorff spaces are Baire iff DC, and Theorem 4 extends this to arbitrary products of compact Hausdorff spaces (and to pseudocompact, countably compact regular, regular-closed, Čech-complete and pseudo-complete products); the empty-product case is handled as Case 1 |
| Keremedis–Tachtsis, *Wallman Compactifications and Tychonoff's Compactness Theorem in ZF* (`tp42021.pdf`), 234552 bytes = stamp | Proposition 2.13 and its proof | Confirms "BPI iff the Tychonoff product of spaces each endowed with the cofinite topology is compact", matching `thm-products-of-cofinite-spaces-compact-iff-bpi` |
| Good–Tree–Watson, *On Stone's theorem and the axiom of choice* (`stone.pdf`), 169055 bytes = stamp | Introduction, Theorem 3, Proposition 5 | Confirms DC holds in the model while Stone's theorem fails, and Proposition 5's exact quantifier structure (per cover there exists a point-finite refinement together with a refinement map) yielding multiple choice and hence AC |
| Corson, *The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem* (`2001.06513`), 120848 bytes = stamp | Theorem 1 and Lemma 5 | Confirms the ZFA permutation model with BPIT and a rational-valued metric space that is not metacompact, and the ordinal-boundability bound used for transfer |
| Schechter, *Urysohn's lemma and the axiom of choice* (`urysohn.pdf`), 38795 bytes = stamp | Theorems 4–5 | Confirms that the AC proof can be run with DC and that "DC may be replaced by DMC": Theorem 5 is `DMC ⇒ Urysohn's lemma` with the finite-menu family used by the scaffold |
| Dodu–Morillon (`dodu.pdf`, cited in the run's drift review) | §7 DMC discussion | Confirms the owner-directed DMC/DC status verbatim: DC implies DMC, DMC does not imply DC in ZFA (Fraenkel's second model), and whether DMC implies DC in ZF is open |

Sources I could not read in full myself, stated honestly: the Fremlin note is a
PostScript file I did not convert (the coverage records a complete read of
Proposition 2, Lemma 3 and Theorems 4–5); Brunner's scanned German paper and
KPT/Nešetřil/Blass/Tachtsis were read by the scaffolders (the NDR shows the
Brunner support calculation and Tachtsis Theorem 5.5 rows were checked in
detail) but not re-read by me; the Cambridge landing page for Fossy–Morillon
exposes only the abstract, so the forward direction rests on Morillon §2.3, the
Fremlin transcription and the local reconstruction recorded in the notes. None
of these gaps bears on the scope question below.

## Inventory against the design and the binding direction

The SET-22 design inventory (L754–L765) resolves onto the live pair item-for-item,
with nothing designed missing and nothing added beyond it:

| Design item | Where it lives | Present |
|---|---|---|
| Choice-free Baire for separable complete metric spaces | `lem-nonempty-countable-set-has-a-padded-enumeration`, `thm-separable-complete-metric-baire-in-zf` | yes |
| `DC ⇒` complete-metric Baire and Blair's converse | published upstream supplier `dependent-choice-and-the-complete-metric-baire-theorem` (+ published `ex-blair-sequence-space-for-a-serial-relation`, `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf`) | yes |
| DMC tree formulation | `def-dependent-multiple-choice-finite-level-tree`, `thm-dmc-tree-and-successor-menu-formulations` | yes |
| Compact-Hausdorff Baire equivalent to DMC | `thm-dmc-implies-compact-hausdorff-baire`, `thm-compact-hausdorff-baire-implies-dmc`, `thm-compact-hausdorff-baire-iff-dmc` | yes |
| Products-of-compact-Hausdorff Baire distinguished from individual spaces | `thm-dc-iff-products-compact-hausdorff-are-baire` plus the DMC equivalences and the ledger remark | yes |
| Dyadic Urysohn construction under DC and DMC | DC: published `thm-urysohn-lemma`; DMC: `thm-dmc-implies-urysohn-lemma` (Schechter Theorem 5) | yes |
| Läuchli countermodel and transfer | `def-brunner-ordered-lauchli-permutation-models`, `lem-brunner-choice-and-urysohn-obstructions`, `lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable`, `lem-brunner-urysohn-obstruction-is-injectively-boundable`, `thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions` | yes |
| Tachtsis `AC_omega + not URY` model and erratum | supplied by the same Brunner pair: `thm-relative-consistency-countable-choice-without-urysohn` (family support calculation from §3.4(b) plus Pincus's exceptional `AC_omega` clause); the inaccessible Tachtsis row is retained as a documented non-load-bearing historical drop, as the notes record | yes (substituted route) |
| BPI-not-URY model and transfer | `thm-relative-consistency-bpi-without-urysohn` | yes |
| Stone's metric paracompactness theorem under AC | published supplier `thm-stone-metric-spaces-are-paracompact` | yes |
| Good–Tree–Watson `ZF+DC` countermodel | `def-good-tree-watson-symmetric-stone-model`, `lem-good-tree-watson-omega-sequence-closure`, `lem-good-tree-watson-selector-obstruction`, `thm-relative-consistency-dc-without-stone` | yes |
| Corson BPI countermodel | `def-corson-ordered-rational-permutation-model`, `lem-corson-rational-metric-not-metacompact`, `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable`, `lem-corson-stone-obstruction-is-ordinal-boundable`, `thm-relative-consistency-bpi-without-stone` | yes |
| Effective-metacompactness implication to multiple choice/AC | `thm-effective-metacompact-discrete-metrics-implies-ac` (Good–Tree–Watson Proposition 5 with its per-cover existential pair) | yes |
| Kelley's cofinite argument failure; Schechter's exact BPI result; isolated-point repair | `thm-products-of-cofinite-spaces-compact-iff-bpi`, `lem-isolated-point-kelley-repair`, B-page `cex-kelley-cofinite-set-is-not-closed` | yes |
| Compact-Hausdorff products iff BPI; compact `T_1` products iff AC | `thm-products-of-cofinite-spaces-compact-iff-bpi` (Keremedis–Tachtsis Proposition 2.13); `thm-compact-t1-product-theorem-iff-ac` | yes |
| Open-status items for `URY → DMC?` and Stone-versus-AC strength | `rem-urysohn-implies-dmc-open-status`, `rem-stone-exact-choice-strength-open-status` | yes |
| DC implies DMC; BPI does not imply DMC; DMC is not a ZF theorem; DMC/MC/AC and ZFA qualifications | `rem-dmc-versus-dc-over-zf-is-open` (implication + open ZF reversal), `cor-bpi-does-not-imply-dmc`, `cor-dmc-is-not-provable-in-zf`, `rem-dmc-mc-ac-zfa-qualification` | yes |
| Arbitrary compact products iff AC | `thm-arbitrary-compact-product-theorem-iff-ac` | yes |

Mapping to the four catalogue remarks the plan names as targets
(L1144–L1147), so that no consumer clause is left homeless:

- `rem-baire-category-choice-strength`: metric BCT iff DC (published upstream
  supplier); separable complete BCT in ZF; compact-Hausdorff BCT iff DMC; the
  separations (DC countermodel, BPI countermodel, DMC not a ZF theorem); the
  DMC/DC status with ZFA strictness and open ZF reversal.
- `rem-urysohn-lemma-not-a-zf-theorem`: failure in ZF + `AC_omega` (Countable
  Choice model, above); failure with BPI held; DC and DMC sufficiency;
  bounded-Tietze corollary; `URY → DMC?` status only.
- `rem-stone-theorem-choice-strength`: Stone under AC; failure with DC; failure
  with BPI (the space is not metacompact, hence not paracompact); the effective
  per-cover strengthening implies multiple choice and AC; exact-strength status
  only.
- `rem-schechter-kelley-tychonoff`: Kelley's closedness error; cofinite-product
  compactness iff BPI; isolated-point repair; compact `T_1` products iff AC.

The two owner-directed hard constraints are honoured in the scaffold text:
`rem-dmc-versus-dc-over-zf-is-open` and `rem-dmc-mc-ac-zfa-qualification` assert
only "DC implies DMC; strictness is known in ZFA; DMC-to-DC in ZF is open", which
matches Dodu–Morillon §7 exactly, and `thm-relative-consistency-dc-without-stone`
uses Good–Tree–Watson's explicit regular-`lambda` construction rather than the
finite-support `omega`-indexed presentation. The stronger DMC-versus-MC claim in
the published catalogue remark is deliberately not restated.

## B-page contract

The plan's contract (L134) asks for "one worked proof/countermodel interface for
every Baire/Urysohn/Stone/Tychonoff strength row". Row coverage:

| Row | B items | Adequate as a contract minimum? |
|---|---|---|
| Baire | `ex-canonical-least-ball-selection-in-separable-baire-proof` (definability of the least-ball selection, repeated dense-sequence entries allowed) | yes |
| Urysohn | `ex-dmc-urysohn-finite-menu-intersection` (finite intersections preserve every closure inclusion in the dyadic construction) | yes |
| Stone | `fs-bpi-proves-stone-for-metric-spaces` (the false statement refuted by the Corson transfer) | yes |
| Tychonoff | `cex-kelley-cofinite-set-is-not-closed`, `ex-isolated-point-repair-recovers-choice-function` | yes |

## Source coverage

The A page is backed by 11 sources with complete reading evidence and 71
harvested rows, all disposed: the Morillon memoir supplies the DMC/Baire core;
Herrlich–Keremedis the product-Baire/DC equivalence; the Fremlin note the
complete compact/noncompact `K` dichotomy for the converse; Brunner the Läuchli
models; Blass plus Kechris–Pestov–Todorcevic plus Nešetřil the extreme-amenability
route to BPI in the permutation models; Tachtsis the Pincus transfer clauses;
Good–Tree–Watson and Jech Lemma 8.5 the `ZF+DC` Stone countermodel and the
`<lambda`-closure lemma; Corson the BPI Stone countermodel; Keremedis–Tachtsis
the cofinite-product compactness; Schechter the DMC Urysohn construction. Fetch
stamps cover every source on this page, and I verified the byte counts and the
decisive statements of the seven sources listed above against fresh downloads.
The only non-fetch-verified row on this page is Tachtsis's Urysohn erratum, which
the scaffold deliberately treats as a non-load-bearing historical drop because
the claim is recovered through Brunner; the plan itself records that fallback at
L1177.

## Prerequisites, consumers and the Foundations boundary

- Prereq closure: the 39 A items declare only resolvable dependencies (0 missing,
  0 errors under `manifest-deps`), and the transitive closure is 87 items, all
  published or in-pair. `plan-spec.json` and the batch manifest agree on page
  `requires` (`halpern-lauchli-and-bpi-without-choice`,
  `dependent-choice-and-the-complete-metric-baire-theorem`,
  `countability-axioms-and-cardinal-functions`, `separation-axioms`,
  `partitions-of-unity-and-paracompactness`), and all five are published, earlier
  in order, and outside the deferred catalogue.
- Boundary check (CLAUDE.md rule 10): none of the 44 owned items declares a
  dependency, `justified_by`, `forward_refs` or `external_refs` entry naming any
  of the 22 items of `deferred-set-theory-beyond-choice`, including the four
  catalogue remarks this page supersedes; the same scan over the full 87-item
  dependency closure found no such reference either. No item of the pair is on
  the catalogue page and no consumer of this pair is a Foundations page that
  would introduce such a path (the consumer `normal-moore-spaces-pmea-and-consistency-strength`
  likewise declares no catalogue edge in its batch-14 cross-batch file).
- Consumers: the pair is the declared supplier for the later
  `normal-moore-spaces-pmea-and-consistency-strength` pair (order 709) and for the
  Phase-3 cutover of the four catalogue remarks; both interfaces are wholly
  contained in the items above.

## Limits of this review

This is a scope determination only. I did not audit statement precision, proof
correctness, choice accounting, dependency-edge minimality, or source-pulling
mechanics; those remain Step 3b and Step 5 work. In particular I accepted the
proof strategies as plausible skeletons after checking their source alignment,
not as verified proofs. My independent reading was bounded to the sources and
statements tabulated above; the Brunner, KPT, Nešetřil, Blass and Tachtsis texts
rest on the scaffolders' recorded reads, which the coverage states were complete
and continuous.

## Non-blocking observations (carried to the owner, not scope defects)

1. "Metacompact" appears in three own-item contracts
   (`lem-corson-rational-metric-not-metacompact`,
   `thm-relative-consistency-bpi-without-stone`,
   `rem-stone-exact-choice-strength-open-status`) but no `def-metacompact-space`
   exists in the library; only `def-paracompact-space` and the published
   point-finite machinery of `partitions-of-unity-and-paracompactness` are
   available. The claims are correctly expressed as "no point-finite refinement",
   so this is a definitional-naming gap for Step 3b to state precisely (and
   optionally supply a local definition), not a scope omission.
2. The catalogue target's standalone clause "(a) UL is not a theorem of ZF" has
   no separate item; it is covered by the two stronger relative-consistency
   results (`ZF+Countable Choice+¬URY` and `ZF+BPI+¬URY`), both of which have ZF
   models among their models. Both clauses are therefore proved, but the
   corollary "¬URY holds in ZF alone" is worth stating explicitly in Step 3b.
3. The "strictness is known in ZFA" clause is supported by the owner's direction
   and Dodu–Morillon §7 (as read in the run-26/27 drift reviews), but the ZFA
   separation is not a harvested row of this page's coverage; the page's own
   sources (Morillon, Fossy–Morillon, Fremlin) establish the ZF-side implication
   and the openness of the reversal only. The scaffold states the claim exactly
   as directed, so no action is required, but the provenance is narrower than
   the rest of the pair's.
4. The B page is thin (5 items against 39) even though it satisfies the plan's
   per-row contract. If the owner wants a richer illustration of the separation
   arguments (for example an explicit dyadic-level computation or a worked facet
   of a countermodel), that is an optional enrichment, not a scope gap.

## Decision

`sufficient`: the pair realizes the SET-22 design inventory item-for-item with no
omission and no addition; every clause of the four catalogue remarks it is meant
to retrofit has a proof-bearing home; the B page satisfies the plan's per-row
worked-interface contract; all 11 A-page sources carry fetch stamps and the
decisive rows were re-verified against the literature; the 87-item dependency
closure is fully resolved and free of any path to the deferred catalogue; and
both owner-directed status constraints are stated exactly as directed. The four
observations above are authoring obligations and optional enrichment for Step 3b,
not grounds for insufficiency, merger or scaffold change.
