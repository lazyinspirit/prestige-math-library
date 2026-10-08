# Step 3b authoring record — pair `coxeter-artin-and-hecke-interfaces`

Run `frontier-42-coxeter-32` · role alpha-high · pair label
`step3b-pair-coxeter-artin-and-hecke-interfaces-51ffee415432b5fc` · design label CG-11.

- A page: `coxeter-artin-and-hecke-interfaces` (batch 14, order 1744).
- B page: `coxeter-artin-and-hecke-interfaces-examples` (batch 14, order 1745).
- Previous attempts at this same dispatch (`...-9f9a78c72875666f`, `...-e6d7fb19d2e605fc`)
  were interrupted before recording any item decision; their item files and page prose are on
  disk and are audited here independently, not trusted from their summaries.

## Owned IDs (audit/author order by dependency level)

1. `def-cg-artin-monoid-and-group-presentations` (level 1, A)
2. `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` (level 2, A)
3. `thm-cg-reduced-positive-section-and-length-additive-products` (level 5, A)
4. `cex-cg-artin-positive-lift-is-not-a-homomorphism` (level 6, B)
5. `ex-cg-type-a-artin-projection-and-positive-lifts` (level 6, B)
6. `lem-cg-hecke-and-lie-seam-contract-compatibility` (level 10, A)
7. `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` (level 11, B)
8. `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` (level 11, B)

## Open obligations at entry

- Verify all eight items and both pages against current suppliers and sources; repair every
  confirmed defect; run the explicit-path precheck/render/layout/content-policy/proof-contract
  checks, the dependency-level check, `depcheck`/`fwdcheck`/`extcheck`, `validate-plan`,
  dependency-closure checks and the cross-batch ledger refresh.
- Step 3a scope: closed by the owner `proceed` receipt
  `research/frontier-42-coxeter-32-step3a-owner-coxeter-artin-and-hecke-interfaces.json`
  (enriched scope with the type-A application); `node tools/step3-decisions.mjs check
  --run frontier-42-coxeter-32 --phase scope` reports no work row for this pair.
- In-run suppliers (batches 2, 3, 4, 7) are now authored on disk; each named clause must be
  re-read against the actual proof use before the consumer decision is recorded.
- Record one `step3-decisions.mjs record-item` receipt per item (accept/repaired, confidence 1,
  examined dependency IDs) after the checks; escalate any item whose supplier use cannot be
  reconciled.

## Checkpoint log

(entries appended per item: exact claim/conventions, source locators, dependencies,
decisions, checks, open gaps, next action)

## Entry audit of the interrupted attempts

The previous attempts left all eight item files and both page files on disk but recorded **no**
item decisions and no decision receipts (`research/frontier-42-coxeter-32-step3b-review-<id>.json`
was absent for every owned id). Their report stopped at the checkpoint for item 5. Every item and
page file was therefore re-read independently against the current suppliers and sources; the
findings and repairs below are mine, not inherited from those summaries.

Confirmed defects found and repaired (details per item):

1. `thm-cg-reduced-positive-section-and-length-additive-products` — content-policy error
   `notation-iota-applied` (applied `\iota(2)` notation in F8); F8 rewritten without the applied
   embedding notation, keeping the claim $2:=1+1\ne0$ and adding the `def-natural-numbers` link
   (already a declared dep).
2. `lem-cg-hecke-and-lie-seam-contract-compatibility` — (a) the braid-relation preservation under
   the scaling substitutions was justified with a false intermediate claim ("the two alternating
   words contain the same letters with the same multiplicities"), which fails for odd $m$ in the
   multiparameter Hecke algebra; repaired to the correct argument (for even $m$ each letter occurs
   $m/2$ times; for odd $m$ the odd-edge parameter convention gives $v_s=v_t$); (b) the claim that
   the item "verifies the coefficient conversion" of the Kazhdan–Lusztig normalization was not
   proved anywhere and was replaced by an explicit "records the conversion as the interface
   convention" (the batch-14 notes already recorded the conversion as quoted); (c) the
   parenthetical "(equivalently, is constructed by Soergel's method)" was replaced by the sourced
   statement (Example 3.2(2) and the discussion after Definition 3.8 of Soergel calculus);
   (d) the trailing sentence of (1) was replaced by the precise compatibility
   $\Theta(b_ub_v)=T_uT_v$.
3. `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` — (a) step 1.4 claimed
   every $(st)^ks$ is a conjugate of $s$, which is false for odd $k$ (odd-index reflections are
   conjugate to $t$); replaced by the direct family $r^msr^{-m}=r^{2m}s\in T$ using
   $sr^{-1}=rs$ and the exact infinite order of $st$; (b) step 3.1 asserted the classification of
   $W$-fixed codimension-one subspaces without the necessary enumeration of $W$; completed with
   the reduction of words to alternating words and a full computation for the elements $r^ks$.
4. `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` — step 1.2 used the
   relators $s^2,(st)^m$ of $W$ through an uncited supplier; added fact F14
   (`def-hh-coxeter-matrix-word-group-and-length`) and cited it at 1.2.
5. Proof contract `research/frontier-42-coxeter-32-batch-14.proof-contracts.json` was written at
   the scaffold stage and no longer matched the completed items; it was regenerated for the
   completed arguments (F14 citation and d-1.2 input; the thm-cg F8 citations retargeted to the
   four facts actually linked, with uses {3.1,4.1} and the d-4.1 input fixed; the B4 F2 citation
   extended to use 3.1). `proof-contract --strict` now reports 0 errors, 0 warnings.
6. `library/coxeter-groups/coxeter-artin-and-hecke-interfaces-examples.md` — the prose called
   $m(s,t)=\infty$ "the rank-two Euclidean system"; changed to "the rank-two system
   $m(s,t)=\infty$ (the $\tilde A_1$ diagram)", which is the sourced form.

## Per-item checkpoints

### 1. `def-cg-artin-monoid-and-group-presentations` (level 1, A) — accept

- **Claim/conventions.** $S^{*}$, braid pairs (no pair for $m=\infty$), smallest congruence
  $\equiv^{+}$, $A^{+}=S^{*}/\!\equiv^{+}$ with $\sigma_s=[s]$, $A=F(S)/N$ with $N$ the normal
  closure of the $uv^{-1}$ and **no** $s^2=1$ relation, the comparison $\gamma:A^{+}\to A$, and
  the explicit abstentions (no injectivity, Ore, embedding, torsion-freeness, word problem,
  $K(\pi,1)$, no topological model). Well-definedness and the descent of multiplication are the
  delegated content of the recorded justifier item 2 (1).
- **Sources.** Davis note 11.6; Boyd §4.1 Def. 4.1.1; McCammond §1.1 Def. 1.1/Rem. 1.2 (coverage
  rows satisfied).
- **Dependencies examined.** All 11 direct deps (list in the recorded receipt): clause-level read
  of `def-hh-coxeter-matrix-word-group-and-length` plus the word/congruence/free-group/normal-
  closure/presentation/quotient vocabulary; all resolve, none is a later item.
- **Decision.** `accept`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-def-cg-artin-monoid-and-group-presentations.json`.
- **Checks.** precheck not-applicable; proof-layout; rendercheck; content-policy; depcheck /
  fwdcheck / extcheck clean for this id; `item-dependency-levels` 1 = declared 1.
- **Open gaps.** None. No published defect found.

### 2. `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` (level 2, A) — repaired

- **Claim/conventions.** (1) monoid universal property; (2) group universal property and the
  presented-group reading; (3) $\pi:A\to W$ surjective with $\pi\circ\gamma=\pi^{+}$; (4)
  $D=\langle\!\langle\sigma_s^2\rangle\!\rangle$, $A/D\cong W$ with explicit inverse pair, and
  $\ker\pi=D$; (5) AC-conditional type-A identification with the geometric braid group; (6) scope.
- **Sources.** Davis note 11.6 (type-A case); Boyd §4.1 Rem. 4.1.2; the published completeness
  theorem for the AC-conditional clause.
- **Dependencies examined.** All 22 direct deps. Clause-level reads: `def-hh-coxeter-matrix-...`
  (presentation, relators, universal property, generation), `thm-von-dyck` (surjectivity iff
  images generate), `thm-quotient-group-universal-property`, `thm-image-subgroup-and-kernel-normal`,
  `def-normal-closure`, `def-generated-subgroup`,
  `thm-the-artin-presentation-is-complete-for-geometric-braids` (statement assumes AC exactly as
  consumed in 3.1), `def-axiom-of-choice`, `def-braid-group-by-the-artin-presentation`.
- **Repair.** F14 added and cited at step 1.2 (see above); contract entry refreshed.
- **Decision.** `repaired`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-lem-cg-artin-presentation-universal-properties-and-coxeter-surjection.json`.
- **Checks.** precheck PASS (direct); proof-layout; rendercheck; content-policy 0/0;
  proof-contract strict 0 errors; depcheck clean for this id; level 2 verified.
- **AC.** Stated in (5) and F12/F13; used exactly once, in step 3.1. Dependency
  `def-axiom-of-choice` declared.
- **Open gaps.** None.

### 3. `thm-cg-reduced-positive-section-and-length-additive-products` (level 5, A) — repaired

- **Claim/conventions.** (1) $b_w$ independent of the reduced expression via Matsumoto (1),
  $b_1=[\varepsilon]$, $\pi^{+}(b_w)=w$; (2) $b$ injective set-section; (3) $L:A^{+}\to(\mathbb N,+,0)$
  and $\deg:A\to\mathbb Z$ with $\deg\circ\gamma=L$; (4) $b_ub_v=b_{uv}$ iff
  $\ell(uv)=\ell(u)+\ell(v)$, with the strict-inequality witness; (5) rank-one failure; (6) scope.
- **Sources.** Lusztig §1.6/§1.8/Thm 1.9; Boyd §4.2 Def. 4.2.1/Rem. 4.2.2; Davis for the
  presentation conventions.
- **Dependencies examined.** All 15 direct deps; clause-level reads of Matsumoto (1),
  `thm-hh-coxeter-exchange-deletion-and-faithfulness` (1) for $\ell(s)=1$, and the
  natural-number/integer suppliers used by $L$ and $\deg$.
- **Repair.** F8 no longer applies the $\iota$ notation (content-policy
  `notation-iota-applied`); the claim $2:=1+1\ne0$ is now derived from injectivity of the
  embedding plus $2\ne0$ in $\mathbb{N}$ with the link to `def-natural-numbers` (already a dep).
  Contract citations for F8 were retargeted to the four facts actually linked.
- **Decision.** `repaired`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-thm-cg-reduced-positive-section-and-length-additive-products.json`.
- **Checks.** precheck PASS; proof-layout; rendercheck; content-policy 0/0; proof-contract strict
  0 errors; depcheck clean for this id; level 5 verified.
- **Open gaps.** None.

### 4. `cex-cg-artin-positive-lift-is-not-a-homomorphism` (level 6, B) — accept

- **Claim refuted/refutation.** For $S=\{s\}$, $m(s,s)=1$: the braid-pair set is empty, so
  $A^{+}=S^{*}$; $b_1=[\varepsilon]$, $b_s=[s]$; $b_sb_s=[ss]\ne[\varepsilon]=b_{s^2}$ by $L$;
  the composite $\gamma\circ b$ fails via $\deg(\sigma_s^2)=2\ne0$; the general-$S$ clause uses
  that braid pairs never repeat a letter. The refuted statement is recovered by dropping length
  additivity (the theorem's (4)).
- **Dependencies examined.** All 7 direct deps; exact clauses read (see the receipt).
- **Decision.** `accept`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-cex-cg-artin-positive-lift-is-not-a-homomorphism.json`.
- **Checks.** precheck PASS (counterexample); proof-layout; rendercheck; content-policy;
  proof-contract strict; depcheck clean for this id; level 6 verified.
- **Open gaps.** None.

### 5. `ex-cg-type-a-artin-projection-and-positive-lifts` (level 6, B) — accept

- **Claim/conventions.** $\pi_n:G_n\to S_n$ with $\pi_n(\sigma_i)=(i\ i+1)$ and
  $\pi_n\circ\gamma=\pi^{+}_n$; the injective positive lift; the $S_3$ computations
  ($\ell(s_1s_2)=2$, $w_0=(1\ 3)$ via the braid move); and $G_n^{+}\cong B_n^{+}$ by the two
  monoid universal properties against `def-positive-braid-monoid` (F9 re-read against that
  definition's universal-property clause).
- **Dependencies examined.** All 11 direct deps; clause-level reads of
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4) ($\ell=\operatorname{inv}$),
  the symmetric-group presentation and generation items, and the inversion-number supplier.
- **Independent recomputation.** $(1\ 2)(2\ 3)=(1\ 2\ 3)$ with $\operatorname{inv}=2$ and
  $(1\ 2)(2\ 3)(1\ 2)=(1\ 3)$ with $\operatorname{inv}=3$ under the library's right-to-left
  convention.
- **Decision.** `accept`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-ex-cg-type-a-artin-projection-and-positive-lifts.json`.
- **Checks.** precheck PASS; proof-layout; rendercheck; content-policy; proof-contract strict;
  depcheck clean for this id; level 6 verified.
- **Open gaps.** None (no embedding, no geometric model claimed; statement (5)).

### 6. `lem-cg-hecke-and-lie-seam-contract-compatibility` (level 10, A) — repaired

- **Claim/conventions.** (1) $\Theta:A^{+}\to H$, $\Theta(b_w)=T_w$, $R$-basis and base-change
  interface; (2) four quadratic normalizations with the interconverting unit changes and the
  recorded (quoted, not proved) Kazhdan–Lusztig conversion; (3) the conditional root-length
  matching dictionary; (4) the reflection-faithfulness boundary, including (4b) $\operatorname{rad}(B)$
  fixed pointwise and (4c) the corank-one degeneracy; (5) no KL/Soergel construction.
- **Sources.** Lusztig §1.11, §§3.1–3.3, §§4.1–4.2; Elias–Williamson *Soergel calculus* §1.1,
  §3.1 (Definition 3.1, condition (3.3), Example 3.2(1)), §3.2 (Definition 3.8); Elias–Williamson
  *Hodge theory* §3.2/Remark 3.2; Davis Appendix C. The EW definitions were re-read in the
  fetched PDF (Definition 3.1 with the $\langle\alpha^\vee_s,\alpha_s\rangle=2$ clause and (3.3);
  Example 3.2(1) recording the canonical construction as a **symmetric realization** with the
  convention $\pi/\infty=0$; Definition 3.8 defining reflection faithfulness as the bijection
  between reflections and codimension-one fixed subspaces).
- **Dependencies examined.** All 22 direct deps; clause-level reads of the ten in-run suppliers
  (rows 8–18 of the cross-batch input, now `verified`).
- **Repairs.** See the list above (odd-$m$ parameter argument, KL honesty, Soergel parenthetical,
  precise product compatibility); contract untouched (no token change).
- **Decision.** `repaired`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-lem-cg-hecke-and-lie-seam-contract-compatibility.json`.
- **Checks.** precheck PASS; proof-layout; rendercheck; content-policy 0/0; proof-contract strict
  0 errors; depcheck clean for this id; level 10 verified.
- **Open gaps / escalations.** The Lie adaptor and the affine classification are deferred (see the
  design conflict below); (3) is a **conditional** normalization dictionary on supplied data and
  the item says so. Nothing in this pair claims that the published Lie suppliers satisfy the
  hypothesis.

### 7. `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` (level 11, B) — repaired

- **Claim refuted/refutation.** For $S=\{s,t\}$, $m(s,t)=\infty$: $\rho$ is faithful
  (`thm-cg-root-length-criterion-and-faithfulness` (3)); $\operatorname{rad}(B)=\mathbb R(e_s+e_t)$;
  every element of $W$ fixes $\operatorname{rad}(B)$; $r_s\ne r_t$ have the same fixed hyperplane;
  the classification of codimension-one fixed subspaces (completed in the repair) makes the family
  of reflections infinite and the correspondence reflection $\mapsto$ hyperplane non-injective, so
  the faithful canonical realization is not reflection faithful.
- **Dependencies examined.** All 15 direct deps; clause-level reads of the reflection-geometry
  suppliers (rows 27–33 of the cross-batch input, now `verified`).
- **Repairs.** Step 1.4 (false conjugacy claim) and step 3.1 (missing enumeration) as above; all
  2×2 computations re-derived.
- **Decision.** `repaired`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful.json`.
- **Checks.** precheck PASS; proof-layout; rendercheck; content-policy; proof-contract strict
  0 errors; depcheck clean for this id; level 11 verified.
- **Open gaps.** None.

### 8. `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` (level 11, B) — accept

- **Claim/conventions.** (1) the four relations and the four $R$-bases with the interconversions;
  (2) the single-parameter rank-two braid check and the diagonal standard-basis conversions;
  (3) the rank-one Kazhdan–Lusztig conversion with $H^{\mathrm{KL}}=qT^{\mathrm{KL}}=-T$.
- **Dependencies examined.** All 7 direct deps; all arithmetic re-derived; the single-parameter
  restriction is legitimate always and forced for odd $m$.
- **Decision.** `accept`, confidence 1, receipt
  `research/frontier-42-coxeter-32-step3b-review-ex-cg-quadratic-hecke-normalizations-s-equals-q-t.json`.
- **Checks.** precheck PASS; proof-layout; rendercheck; content-policy; proof-contract strict;
  depcheck clean for this id; level 11 verified.
- **Open gaps.** None (no canonical basis/positivity claim).

## Pages

- A page `coxeter-artin-and-hecke-interfaces`: `items` lists exactly the four A items, all now
  authored; `requires` matches `research/plan-spec.json` (order 1744) word for word; the body prose
  was re-read against the items and no claim exceeds them (including the AC-conditional type-A
  paragraph and the reflection-faithfulness boundary).
- B page `coxeter-artin-and-hecke-interfaces-examples`: four B items, `requires` only the A page;
  the prose was re-read, with the $\tilde A_1$ wording fix recorded above. The page remains a
  dependency leaf (no run item depends on a B item; checked in the batch-14 manifest and in
  `depcheck`).
- Scope: the Step 3a owner `proceed` receipt for the A page is current for the on-disk manifest
  (`step3-decisions check --phase scope` reports no work row for this pair).

## Checks actually run (final state)

| check | command | result |
|---|---|---|
| precheck (explicit paths, 8 items) | `node tools/tsx-run.mjs tools/precheck.mts items/<8 ids>.md` | 7 checked (the definition has no phase), 0 failing |
| rendering + math + YAML | `node tools/rendercheck.mjs items/<8 ids>.md library/coxeter-groups/coxeter-artin-and-hecke-interfaces{,-examples}.md --quiet` | OK, 10 files, no defect |
| proof layout (single batched command, after the last edit) | `node tools/proof-layout.mjs items/<8 ids>.md` | 8 items, 49 steps, 0 defects |
| content policy (batch 14) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-14.pages.json` | 8 scoped items, 0 errors, 0 warnings |
| strict proof contracts (batch 14, merged file) | `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-14.proof-contracts.json --strict` | ok, 0 errors, 0 warnings |
| contract supporting gates (batch 14 merged in `/tmp`) | `boundary-audit --fail-on-contradicted --fail-on-template`; `citation-fidelity --fail-on-missing-quote`; `finite-smoke`; `risk-report` | no template/contradicted boundary; every quote found; 0 smoke errors; risk-report 0 errors (8 items routed for later review) |
| manifest dependency fields | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-14.pages.json` | 8 items, 0 errors (whole run: 303 items, 0 errors) |
| coverage | `node tools/coverage-checklist.mjs ...batch-14.coverage.json --require-destination` | 1 page, 36 harvested results, 0 errors, 0 warnings |
| source fetch | `node tools/source-fetch-check.mjs --coverage ...batch-14.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64/64 pages, no scope drift |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error line names a batch-14 item (three sibling items fail elsewhere) |
| depcheck / fwdcheck / extcheck | `node tools/frontier-item-gate.mjs --run ... --tool {depcheck,fwdcheck,extcheck}` | no finding names a batch-14 item or page (siblings fail elsewhere) |
| validate-plan | `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` | 0 `undeclared-prereq` for this pair; only plan-level `redundant-prereq` warnings on the A page (see below) |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch-14 input carries 34 rows, all now `verified` with current uses; unified ledger lists batch 14 reviewed, no orphan |

## Pre-splice findings for Step 4 (reported, not hidden)

1. **Plan-inherent redundant prerequisites (warning only).** `validate-plan` reports 12
   `[redundant-prereq]` warnings for the A page (e.g. it requires
   `coxeter-presentations-exchange-and-reduced-word-theorems` directly while reaching it through
   `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`
   and `generic-coxeter-hecke-algebras-and-the-standard-basis`). The page's `requires` equals the
   owner plan-spec list word for word, so I did not alter it; Step 4/owner may collapse the list.
2. **Whole-run gates fail on sibling pages/items (not this pair).** Current failures include
   `validate-plan` `[undeclared-prereq]` rows for `finite-coxeter-diagrams-and-complete-classification`,
   `finite-reflection-length-and-orthogonal-moved-spaces`, `coxeter-descents-poincare-polynomials-and-growth`
   and others; `depcheck` `link-unresolved` / `b-leaf-content` rows for
   `thm-cg-large-metric-flag-short-loop-radial-contradiction`,
   `ex-cg-infinite-dihedral-growth`,
   `lem-cg-exceptional-parabolic-orbit-length-certificates`; and `item-dependency-levels` errors for
   three sibling items. None of these names a batch-14 id, page or contract row; they are sibling
   authoring debt for the owning pairs and Step 4.
3. **Step-1 readiness rows are stale post-authoring (expected).** `step1-decisions check` now lists
   "Item or dependency changed; record current readiness" for essentially every run item,
   including the eight here, because the item files were authored after the step-1 scaffold check.
   The 1-scaffold stage is stamped complete; the Step-3b item receipts (recorded here) are the
   current decisions. No action taken by this pair.
4. **Design notes retained.** (i) The genuine crystallographic Lie adaptor and the affine
   classification are deferred to `crystallographic-root-lattices-and-weyl-group-interfaces` and
   `affine-coxeter-diagrams-and-semidefinite-classification`; A4(3) is deliberately a conditional
   normalization dictionary. (ii) The batch-14 note that both deferral destinations were "recorded
   in the coverage file" remains slightly overstated for the crystallographic destination; the
   destination is recorded in the run's plan/manifest set. No mathematical claim depends on it.

## Handoff

- **Completed IDs (8/8 authored, repaired where recorded, decisions current):**
  `def-cg-artin-monoid-and-group-presentations` (accept),
  `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` (repaired),
  `thm-cg-reduced-positive-section-and-length-additive-products` (repaired),
  `cex-cg-artin-positive-lift-is-not-a-homomorphism` (accept),
  `ex-cg-type-a-artin-projection-and-positive-lifts` (accept),
  `lem-cg-hecke-and-lie-seam-contract-compatibility` (repaired),
  `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` (repaired),
  `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` (accept).
  Both assigned pages are authored and consistent with the items and the plan.
- **Added suppliers/pages:** none. All eight ids are original pre-author scaffold ids and received
  ordinary item decisions (no auditor-created certifications apply).
- **Sources:** all six batch-14 sources remain fetch-verified and resolved; the EW Soergel-calculus
  definitions quoted by the seam lemma were re-read in the fetched PDF during this audit.
- **Published concerns:** none found in any published item consumed (statements re-read at the
  clauses used; no suspicion recorded).
- **Open obligations:** none for this pair. The whole-run gates still fail on sibling pairs
  (listed above); the eight item decisions are current for the on-disk items and the cross-batch
  input rows are `verified` with the exact current uses. If a later authorized writer changes a
  supplier's statement, the affected decision and rows become stale by design and must be
  re-recorded.

## Post-record note (concurrent writer state)

The first pass of item receipts was recorded at 2026-10-07T10:22Z. Between that pass and the
final consistency check, sibling pairs under active Step-3b authoring revised the batch-2
suppliers in this pair's dependency closure (`thm-hh-matsumoto-reduced-word-theorem`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness`,
`lem-hh-dihedral-root-recurrence-and-root-sign`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity`, and the batch-2 manifest),
which changed the transitive-closure hash and made the eight receipts stale under
`step3-decisions check --phase final`. The four used clauses were re-read in the revised files
(Matsumoto (1) braid moves; exchange/deletion (1) sign character and distinct generators;
dihedral (4) exact order of `st`; parabolic (4) the type-A isomorphism and `l = inv`) and are
unchanged in the respects used, so all eight receipts were re-recorded against the current
bytes and the final check reports no unresolved row for this pair. Because sibling writers are
still active, the receipts can go stale again by design; the engine's Step-3 gate re-validates
hashes after writers drain (CLAUDE §21), and any later authorized supplier change invalidates
the affected receipt and the corresponding `verified` rows in
`research/frontier-42-coxeter-32-batch-14.cross-batch-dependencies.json`.
