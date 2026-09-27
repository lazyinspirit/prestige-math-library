# Batch 17 — Type-A Soergel scaffolds and owner resolution

Batch 17 retains its selected BG-16 A/B pair at orders 759–760. The A page now has 32 items and the B page has four. All 36 have current Step-1 `ready` receipts; the ten original escalations were resolved by owner receipts after the proof dependencies and page prerequisites were repaired. Readiness certifies a source-backed scaffold route, not an authored proof, publication, or independent mathematical approval.

## Mathematical repair

The original worker correctly escalated uses of `def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, and `def-split-grothendieck-group-of-an-additive-category`: those items belong to planned RG-13 and HA-19 pages, have no published files, and are absent from this selected run. The selected Soergel page now supplies exactly the local mathematics its own arguments need:

- `lem-type-a-reduced-words-are-connected-by-braid-moves` proves the type-A Matsumoto step from the published finite-Weyl strong-exchange theorem. For two different terminal descents, the rank-two inversion subsystem gives an additive longest-parabolic suffix; its two words differ by a commutation or three-term braid. Length induction finishes the comparison.
- `def-type-a-hecke-algebra-in-soergel-normalization` fixes $A=\mathbb Z[v,v^{-1}]$, $q=v^{-2}$, $(T_i-q)(T_i+1)=0$, and $H_i=v(T_i+1)$. `lem-type-a-hecke-standard-basis-for-soergel-comparison` proves $\{T_w\}$ is a free $A$-basis. Quadratic reduction spans; a right action on $\bigoplus_{w\in S_n}Ae_w$ has the required rank-two braid matrices and $e_eT_w=e_w$, proving independence. I checked the adjacent six-state and distant cases by exact polynomial arithmetic over $\mathbb Z[q]$ as a finite cross-check of this proof step.
- `def-split-grothendieck-rings-of-type-a-soergel-categories` defines split classes for the two categories actually used, on small skeletons. Tensor distributes over direct sum and EW's grading shift $(1)$ equals the library shift $\{-1\}$, so $v[X]=[X(1)]$. This local construction makes no claim about HA-19's general Grothendieck or Cartan theory.
- `lem-type-a-character-recursion-under-simple-soergel-tensoring` isolates exactly Soergel Propositions 5.7 and 5.9: $B_i$ acts on the $\Delta$ and $\nabla$ support characters by $H_i$. It supplies the earlier special Hom proof. The original full multiplicativity item is retained after the split-$K_0$ categorification theorem. Its proof now identifies the $\Delta$ character with the inverse of the categorification isomorphism, then obtains the semilinear $\nabla$ character through duality and the Hecke bar involution. Tensoring two graph layers alone does not prove generic Hecke multiplication; in particular $\Delta_s\otimes_R\Delta_s$ has one graph layer while $T_s^2$ has two standard-basis terms.

The revised dependency graph is acyclic. It preserves the complete Hom formula, double-leaves bases, diagrammatic/bimodule equivalence, categorification isomorphism, and all four examples. No claim or selected A/B pair was dropped. The 30 limit in `tools/autopilot/src/capacity.mjs` is a run *pair* limit; the A-page item ceiling in `tools/validate-plan.mjs` is 60, so no page split is required.

The BG-16 page prerequisite list in the batch manifest and `research/plan-spec.json` now names the actual published Bruhat-order, finite-Weyl strong-exchange, and additive-category supplier pages. It no longer presents unbuilt RG-13 or HA-19 pages as suppliers for this selected pair. The corresponding BG-16 and symmetric-group track prose was reconciled. RG-13 still owns the finite-field Hecke convolution/deformation and Tits results; HA-19 still owns general Grothendieck/Cartan theory. Batch 17's existing in-run dependency on the ready HA-18 graded-bimodule item remains recorded in `research/frontier-35-ten-categories-batch-17.cross-batch-dependencies.json`; the new suppliers are published items, not new in-run cross-batch edges. No published-item defect was found in the clauses actually used here, so the canonical published-consumer ledger did not gain a draft-only entry.

## Sources and checks

The worker fetched and stamped all eight sources in `research/frontier-35-ten-categories-batch-17.coverage.json`; those successful full-text attempts were reused. The repair read Elias–Williamson *Soergel Calculus* §§2.1, 3.4–3.5 and 6.6–6.7, Soergel's original paper §§5–6, and Libedinsky's full lecture notes §§3–5. The manifest proof routes identify the exact uses. Source coverage now disposes all 36 harvested results, including the five local preliminaries.

After repair, batch-17 coverage passes with 36 results and no errors or warnings; manifest dependencies are explicit for all 36; the owned item graph is acyclic; `validate-plan` passes; and a direct `step1Decision` check reports 36/36 current ready receipts. Whole-run `content-policy --manifest-only` still reports eight missing supplier IDs in other active batches (14–16) at the observed check. They are outside batch 17; this note does not certify their resolution. The engine's full Step-1 gate and later Step-3 mathematical review remain required.

## Step 3b checkpoint — authoring (alpha-high, dispatch c2ac8060)

Stage 3b audits the two ordered pages of this pair (A order 759, 32 items; B order 760, 4 items) and authors all 36. Batch 17 holds no sibling pair.

Item log (item → status):

- 0–18 `def-type-a-reflection-realization-and-polynomial-ring` … `lem-distant-soergel-generators-commute`: authored in the previous session; the eighteen definition/lemma/example items precheck clean. Definitions carry no `Facts & Assumptions` phase body, so precheck is not applicable to them.
- 19 `def-the-rank-two-longest-type-a-soergel-bimodule`: authored; definition plus Remarks (longest-element characterisation deferred to item 20; rank-six free rank; rank-one specialisation; degenerate `n≤2`). Open: needs a Remark stating the imported Libedinsky §4.4 facts verbatim, because item 20 cites them through this link (strict contract requires a quotable sentence in the linked item).
- 20 `thm-rank-two-type-a-soergel-bimodule-decompositions`: authored, four-map proof, precheck pass after adopting the canonical body.
- 21 `def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor`: authored. Open: needs Remarks quoting EW Theorem 6.11, §7 Proposition 7.6, Lemma 6.24, Theorem 6.25, EW §5.1 relation checks and EK §5.1, because items 23–25 cite them through this link.
- 22 `def-split-grothendieck-rings-of-type-a-soergel-categories`: authored.
- 23 `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules`: authored, precheck pass after `reflow.mts`.
- 24 `thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces`: authored, precheck pass after adopting the canonical body; defect sign corrected to `#U_0−#D_0 ∈ Z`.
- 25 `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts`: authored; step 1.3 rewritten to verify exactly the hypothesis set of the imported Krull–Schmidt lemma (complete local coefficient ring + `k`-linear idempotent complete + finite-dimensional degree-zero endomorphism spaces) instead of borrowing EW's proof-internal idempotent-lifting argument; precheck pass, repaired false (idempotent).

Conventions in force for the remainder: external shift `M(k)=M{−k}`; internal shift `M{r}` has generator degree `r`; `deg x_i=2`; `B_i=R⊗_{R^{s_i}}R(1)=R⊗_{R^{s_i}}R{−1}`; `Hom(R_v(a),R_w(b)) ≅ R(b−a)`; rank-one square `B_s⊗B_s ≅ B_s{−1}⊕B_s{1}`; no AC anywhere; EW Conjecture 3.16 may not be used; multiplicativity must route through EW Props 5.7/5.9 plus the Hecke bar involution.

Next action: add the imported-statement Remarks to items 19 and 21, then author items 26–31 (A) and 32–35 (B) in prerequisite order, prechecking each.

## Step 3b completion (alpha-high, dispatch c2ac8060 — continuation checkpoint)

> **SUPERSEDED — pre-repair state.** The figures and dispositions in this
> section describe the pair as it stood at 2026-09-24 19:54, *before* the
> independent read-only audit
> (`research/frontier-35-ten-categories-step3b-soergel-independent-audit-20260924.md`)
> found real defects in the authored drafts. In particular "precheck 36/36
> clean", "145 citations / 177 steps", "the unified ledger has no unreviewed
> edge" as a *closing* claim, and "No published-item defect found or suspected"
> do not describe the current pair. The repair work and the current state are
> logged in the owner-repair sections below and in the final checkpoint at the
> end of this file.

**State on disk.** All 36 items authored and closed: 32 A-page items plus the
four B-page examples. Both pages written
(`library/braid-groups/type-a-soergel-bimodules-and-hecke-categorification.md`
with the 32-item list and 3 prose paragraphs, `…-examples.md` with the 4-example
list and 3 prose paragraphs). Batch-17 contract regenerated at
`research/frontier-35-ten-categories-batch-17.proof-contracts.json`
(145 citations, 177 steps, 36 boundary worksheets). 36 `step3b-review` accept
receipts plus the refreshed pair scope receipt; `check --phase final` reports
batch-17 pending **0**. Cross-batch input has three `verified` rows
(page → `graded-bimodules-and-tensor-functors`;
`def-type-a-soergel-bimodule-for-a-simple-reflection` and
`def-type-a-standard-graph-bimodules-support-filtrations-and-character` →
`def-graded-ring-module-bimodule-and-internal-shift`), and the unified ledger has
no unreviewed edge.

**Checks actually run (final state).** precheck 36/36 clean; proof contract
strict 0 errors / 0 warnings; rendercheck OK on all 38 files; coverage-checklist
2 pages / 36 results / 0/0; content-policy 36 items 0/0; manifest-deps 0 errors;
depcheck and fwdcheck run-wide failures are pre-existing and none touch batch 17;
validate-plan exit 0.

**Repairs made in this continuation.** (i) 14 step-input collisions removed by
citing imported results through fact labels rather than source numbering, with
three trailing proof commentaries moved into `## Remark` sections; (ii) all 51
flagged boundary-evidence entries re-anchored to real steps or to the item's own
definition/statement; (iii) the `lem-type-a-reduced-words…` shotgun bracket
spread onto the steps that use each fact; (iv) 37 multi-line `$$` blocks in 17
items joined onto single source lines for `rendercheck`.

**Conventions in force (unchanged).** `M(k)=M\{-k\}`; `M{r}` raises generator
degree; `deg x_i=2`; `B_s=R\otimes_{R^s}R(1)=R\otimes_{R^s}R\{-1\}`;
`Δ_x(d)=R_x\{\ell(x)-d\}`; `∇_x(d)=R_x\{-\ell(x)-d\}`; `H_i=v(T_i+1)=\widetilde
T_i+v` with `H_i^2=(v+v^{-1})H_i`; no choice principle anywhere; Elias–Williamson
Conjecture 3.16 unused.

**Verified in this continuation.** The rank-one `Δ`/`∇` shifts against the
definitions, `h_Δ(B_s)=h_∇(B_s)=v+vT_s=H_s`, the quadratic relation
`H_i^2=(v+v^{-1})H_i`, the internal-shift interface
`M{r}_d=M_{d-r}`/`M{r}=M(-r)` of the batch-14 supplier, and the citation quotes
of the high-risk facts (`def-field`, `def-local-ring`, the two imported-statement
Remarks, the Soergel localization/duality facts).

**Open obligations (carried to Step 4, listed in the dispatch report).**
plan-spec lists 0 items for orders 759/760 (pre-splice); manifest per-item deps
are subsets of the authored deps for 27 items (extras genuinely cited); the
manifest's "Bruhat-ordered" wording for the Bott–Samelson filtration item
conflicts with the authored length-only statement; Elias–Williamson
arXiv-vs-published numbering drift; `H_s:=vT_s` normalization drift versus the
library's `H_i`; Soergel Theorem 5.15 `v^{μ−ν}` OCR artefact. No published-item
defect found or suspected.

Next action: none for this pair — handoff is complete; Step 4 splices the
plan/page prose and the listed reconciliation items, Step 5 reviews
independently.

## Step 3b owner repair log (alpha-high, dispatch c2ac8060afc3e4d2, continuing)

The completion checkpoint above is superseded. An independent read-only audit
(`research/frontier-35-ten-categories-step3b-soergel-independent-audit-20260924.md`)
plus the supervision entries of 07:54–09:11 UTC found real defects in the
authored drafts. The dispatch is being continued as owner repair of this pair:
each edited item is re-authored, re-checked, and its contract re-issued.

Repairs completed so far (item → defect → repair):

- `def-type-a-reflection-realization-and-polynomial-ring` — balanced-root
  definition used `\Phi^+_{st}:=\Phi\cap\mathbb Q\beta_s+\mathbb Q\beta_t`
  (included negative roots, missing parentheses); now
  `\Phi^+_{st}:=\Phi^+\cap(\mathbb Q\beta_s+\mathbb Q\beta_t)` (line ~65). The
  two normalizations (length roots $\beta_i=x_i-x_{i+1}$, balanced roots
  $\alpha_i=\varepsilon_i\beta_i$), the left action $w\cdot x_i=x_{w(i)}$, the
  Demazure factor $\partial_i(\alpha_ih)=2h$, $\delta_i=\alpha_i/2$ and the
  balancedness check (`[3]_1=0`, `[2]_1=1`) were repaired in the previous
  session and re-verified here.
- `def-type-a-hecke-algebra-in-soergel-normalization` — the disproof of the
  group-algebra presentation claimed "2 is a unit of $A$", false in
  $A=\mathbb Z[v,v^{-1}]$; the quotient of $A[T]/(T^2-1)$ by the extra relation
  is $A/(2(1-q))\oplus A$ and the class of $(2,0)$ is nonzero because
  $2=2(1-q)a$ forces $1=(1-q)a$ in the domain $A$ with $1-q$ a non-unit.
  Statement, $H_i=v(T_i+1)$ normalization and the free-rank-two conclusion
  unchanged; precheck clean.
- `lem-type-a-soergel-generators-are-finite-free-on-both-sides` — right basis
  is $\{1\otimes1,\alpha_i\otimes1\}$ (not $\{1\otimes1,1\otimes\alpha_i\}$),
  averaging factor $\tfrac12$ restored. 19 transitive consumers to re-verify
  against this interface.
- `lem-distant-soergel-generators-commute` — step 1.1 no longer claims $s_i$
  fixes $R^{s_j}$ pointwise; the false slot-reversal map was replaced by an
  explicit rank-one block lemma (new step 2.2, two-sided inverse checked), the
  factorization $T\cong P\otimes_{\mathbb Q}Q\otimes_{\mathbb Q}C$ with its
  explicit inverse $\tau$ (new step 3.1) and the bimodule flip $\varphi=\tau'\circ\sigma\circ\tau^{-1}$
  (step 4.1). Canonical precheck numbering adopted: 1.1, 2.1, 2.2, 3.1, 4.1,
  5.1, 6.1; precheck pass. Boundary worksheet of the item updated accordingly.

### Owner repair log — session 3 (dispatch c2ac8060afc3e4d2, continuing)

The audit findings of `…-soergel-independent-audit-20260924.md` (priority 1 items
1–9 and the priority-2 local errors) were worked through item by item. Each edit
was prechecked, the contract regenerated and the strict checker re-run. The
repairs, in the order they were closed:

- **Support/character definition** `def-type-a-standard-graph-bimodules-support-filtrations-and-character`:
  γ-cutoffs are now Bruhat principal sets (`Γ_{≤y}=Γ_{{x:x≤y}}M`, with an S₄
  example showing they differ from the integer length cutoffs), `Γ_{≤y}∩Γ_{≥y}=Γ_y`;
  the twisted-tensor remark states that `1⊗1↦1` extends uniquely to the twisted
  map while the untwisted `a⊗b↦ab` fails balancedness; the two-line display of
  the four cutoffs was joined onto one source line for `rendercheck`.
- **Flag lemma** `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations`:
  Soergel's shifted `θ_s=R[1]⊗_{R^s}(−)` is identified with the library
  `B_s⊗_R−`, the unshifted functor is named `θ^0_s`, the one-letter Δ/∇ shifts
  are the corrected `R_s{1}`/`R{−1}` recursions, opposites preserve *each* flag
  category, and the source notation number no longer appears inside step 1.1.
- **Intrinsic multiplicities** `lem-type-a-support-filtration-multiplicities-are-intrinsic`:
  the circular uniqueness argument was replaced by uniqueness of the
  indecomposable graded graph standards plus extension vanishing, and the new
  [F6] supplies the reflection-length parity criterion from
  `lem-finite-weyl-strong-exchange-and-deletion` (added to deps).
- **Top support** `lem-type-a-top-support-layers-are-controlled-by-reflection-localization`:
  both natural maps now have images `p_y·Γ_{≤y}` and `p_y·Γ^y` with the exact
  Bruhat-cutoff intersection; the six facts were separated into paragraphs (the
  merged block made the contract reader see only [F1]) and [F2] is cited at
  step 1.2 where the intrinsic multiplicities are consumed.
- **Hom formula** `thm-the-type-a-soergel-hom-formula`: the false layerwise
  exactness induction was deleted in favour of Soergel's Lemma 6.13 through the
  definition anchor; the four facts were separated into paragraphs, the
  Bott–Samelson flag lemma added to deps, and the boundary worksheet re-anchored
  to steps 1.1–3.1.
- **Rank-two theorem** `thm-rank-two-type-a-soergel-bimodule-decompositions`:
  `e²=e` restored; the Given declares the coordinate-`β` normalization, the
  unscaled dot `Z_s`, the diagrammatic `Δ_s=½Z_s` and the `ε_sε_t=−1`
  translation; the forward wikilink to the diagrammatic definition was replaced
  by a page pointer, because that definition depends on this theorem and the
  in-run dependency graph must stay acyclic.
- **Diagrammatic definition** `def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor`:
  all three-colour type-A families (5.8)–(5.10) including `A₁×I₂(m)`; the
  half-scaled unit dot distinguished from `Z_s`; the degree example repaired to
  the honest witness `1⊗α_s⊗1 ↦ 2(1⊗1)`; the double-leaf order fixed to
  `\overline{LL}_{y,f}∘LL_{x,e}`; imported results re-recorded with the lower
  Bruhat character `ch(D_w)=\tilde T_w+Σ_{y<w}g_{y,w}\tilde T_y`.
- **Relation lemma** `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules`:
  imports EW Claim 5.13 with the complete relation families, withdraws the
  `∂_s(α_s)=2` needle inference, names the three-colour families in step 1.5
  instead of carrying source numbers inside the step text, and drops the
  duplicated citation of the rank-two theorem.
- **Split rings** `def-split-grothendieck-rings-of-type-a-soergel-categories`:
  the commutativity claim is gone (K₀ is non-commutative for n≥3), graph
  standards are no longer treated as Soergel-category objects, and the remark now
  states explicitly that the split-class relation gives only `[X]=[Y]−[Z]` for
  `Y≅X⊕Z`, so generation by the `[B_i]` is *not* read off the skeleton
  description. Generation is now derived in
  `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra`
  step 4.1 from the isomorphism `Φ` together with `T_i=v^{−1}H_i−1` and the
  Hecke presentation; the B example's [F2] no longer repeats the claim.
- **Character/K₀ items** `thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism`
  and its consumers: standard basis is `\tilde T_w=v^{ℓ(w)}T_w`, reduced-word
  products are written `H_{\underline w}`, and the false `D_w≅B_{\underline w}`
  step was replaced by the imported triangular character.
- **Rank-one and rank-two examples**: the rank-one square is stated as a
  shift-specific decomposition; the rank-one category example uses the right
  basis `{1⊗1,α⊗1}` and identifies `δg⁺`/`δ²g⁻` correctly; the rank-two example
  declares the `β`-normalization, keeps the `½` in the zig-zag and records the
  degrees `+1,+1,−1,−1`.
- **Simple-generator freeness** `lem-type-a-soergel-generators-are-finite-free-on-both-sides`:
  the Given now calls `α_i` *anti-invariant* (balanced normalization, with the
  coordinate-root alternative recorded) and the reflection realization is a
  declared dependency; the right basis is `{1⊗1,α_i⊗1}`.
- **Facts-block hygiene found by the strict checker**: the merged fact paragraphs
  of the two items above were split so that every `[Fn]` is an independent
  declared fact; two steps that carried source numbering (`Notation 5.6`,
  `Example 2.8`) now cite the fact labels instead; a self-citation in
  `lem-type-a-hecke-standard-basis-for-soergel-comparison` step 4.1 was corrected;
  the three `cited-not-in-deps` warnings on batch-17 items were cleared (two by
  declaring the genuine backward dependencies, one by removing a forward
  wikilink that would have created a cycle with the diagrammatic definition).

## Final checkpoint (step 3b owner-repair handoff)

**State on disk.** All 36 items of the pair are authored, repaired and closed;
both library pages are written (`library/braid-groups/type-a-soergel-bimodules-and-hecke-categorification.md`,
32 items; `…-examples.md`, 4 items). The batch contract at
`research/frontier-35-ten-categories-batch-17.proof-contracts.json` was
regenerated after the last edit (**153 citations, 179 mapped steps, 36 boundary
worksheets**), and 36 `step3b-review` `accept` receipts with confidence 1 and
examined dependency lists were re-issued for the changed items
(`python3 /tmp/record17b.py`, 36/36 recorded, 0 failures).

**Checks actually run (final state).**

- `node tools/tsx-run.mjs tools/precheck.mts <36 explicit paths>` — **27
  checked, 0 failing** (the nine definition items carry no
  `Facts & Assumptions` proof body; precheck is not applicable to them).
- `node tools/rendercheck.mjs <36 items + 2 pages>` — **OK**, 38 files: no
  wikilink inside math, no nested/unbalanced delimiters, no multiline display,
  every math span parses under KaTeX, both page frontmatters parse. Also
  `grep -rl '\$\$\$\$' items/` — empty.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-17.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 36/36 items checked**.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-17.coverage.json`
  — 2 pages, 36 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-17.pages.json`
  — 36 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-17.pages.json`
  — 36 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; acyclic and
  consistent; 431 planned pages still carry no item list (pre-splice state).
- `node tools/depcheck.mjs` — repo-wide **353 errors / 261 warnings**, all
  pre-existing and outside batch 17; after this session's repairs **no** batch-17
  item appears in the output (the three `cited-not-in-deps` warnings on
  `lem-type-a-soergel-generators-…`, `thm-rank-two-…` and
  `ex-the-type-a-two-rank-two-…` are cleared).
- `node tools/fwdcheck.mjs --json` — 53 errors run-wide, 0 open forward
  references, **0** touching batch 17.
- `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final`
  — batch-17 pending items **0**; the phase-scope check shows the pair's scope
  decision current.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  — refreshed and deduplicated; the unified ledger carries exactly the three
  batch-17 edges (page → `graded-bimodules-and-tensor-functors`;
  `def-type-a-soergel-bimodule-for-a-simple-reflection` and
  `def-type-a-standard-graph-bimodules-support-filtrations-and-character` →
  `def-graded-ring-module-bimodule-and-internal-shift`), all with `verified`
  review rows; the two row evidences still match the current consumer text.

**Local suppliers added or retained on the assigned page.**
`lem-type-a-reduced-words-are-connected-by-braid-moves` (Matsumoto from the
published strong-exchange lemma), `lem-type-a-hecke-standard-basis-for-soergel-comparison`,
`def-split-grothendieck-rings-of-type-a-soergel-categories`,
`def-type-a-reflection-realization-and-polynomial-ring` (both root
normalizations and the Demazure normalizations) and the imported-statement
Remarks of `def-type-a-standard-graph-bimodules-…` (Soergel) and
`def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor`
(Elias–Williamson, Libedinsky, Elias–Khovanov). No published item was edited.

**Uncertainty / open obligations.** No published-item defect is *confirmed*; the
published clauses consumed here were re-read at clause level and the only
residual doubts are textual, not mathematical: the arXiv-vs-published numbering
drift of Elias–Williamson, the `H_s:=vT_s` normalization drift between EW (2.5)
and the library's `H_i=v(T_i+1)`, and the Soergel Theorem 5.15 exponent artefact
`v^{μ−ν}` (the library states `v^{d−e}`, which reproduces the checked cases).
Step-4 reconciliation items: plan-spec orders 759/760 still list 0 items; the
manifest's per-item deps are a subset of the authored deps for most items; the
manifest still writes `α_i=x_i−x_{i+1}` where the authored items now use the
length root `β_i=x_i−x_{i+1}` and the balanced root `α_i=ε_iβ_i`; and the
manifest describes the Bott–Samelson filtration item as "Bruhat-ordered"
whereas the authored statement filters by length only. Next action: hand off to
Step 4 (splice the plan/page prose and the manifest wording), then Step 5 review.
