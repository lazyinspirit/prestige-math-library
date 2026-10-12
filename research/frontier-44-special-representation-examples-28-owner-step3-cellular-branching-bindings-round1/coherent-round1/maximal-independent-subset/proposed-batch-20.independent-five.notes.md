# Batch 20 — Type-A Hecke Specht Modules and Cellular Bases

Run: `frontier-44-special-representation-examples-28`. Owned pair:
`type-a-hecke-specht-modules-and-cellular-bases` (A, order 1569) and
`type-a-hecke-specht-modules-and-cellular-bases-examples` (B, order 1575),
category `special-topics-in-representation-theory`. The stable scaffold holds
**29 A items and 5 B items**, all recorded `ready`, with in-run dependency
levels 0–7 on the A page and 5–8 on the B page (no cycle). Construction is
scaffold planning and readiness, not authored proof acceptance; Step 3 owns the
proofs and the full gate battery.

## Scope and governing texts

The owner direction
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before constructing any item: all 24 planned pairs in this category are
retained with their claims, sources and proof obligations, suppliers before
consumers, no new pairs, no publication. The pair keeps the design route of
`research/plan-symmetric-group-representations-track.md` (the SYMR-7 row at
L42, whose binding item inventory is the SYMR-7 section of
`research/symmetric-group-planning/proposed-inventory.md`): the Graham–Lehrer
cellular axioms and cell-form classification, the Murphy cellular basis of the
type-A Hecke algebra, the Hecke Specht module and its cell form, the
e-regular/e-restricted simple classification with dominance unitriangularity,
the Hecke Jucys–Murphy triangular action, the $e>n$ seminormal basis with the
exact Dipper–James generator formulas, the $q=1$ specialization back to group
Specht theory, the q-Schur algebra with its semistandard/Weyl modules, the
beta-sequence virtual symbols, the James–Mathas Gram determinant, the Jantzen
filtration and layer-valuation lemma, the q-Schaper virtual sum formula, the
open-problem boundary remark, and on the B companion the $S_3$ Murphy basis,
the rank-four JM computation, the $e\le n$ residue-collision counterexample,
the $(3,2)$ $e=2$ Schaper example and the degeneracy counterexample.

`research/plan-spec.json` carries only the planned page shells for this pair
(`"items": []` for orders 1569 and 1575), so there is **no plan-vs-design
inventory conflict at item level**; the design's proposed inventory is the item
source and the plan's page objects (title, companion, category, orders,
`requires`) are preserved verbatim in the manifest. The only plan-level output
for this page was the advisory `redundant-prereq` list of the shared canonical
`requires` chain (`artinian-rings-and-length`,
`euclidean-domains-pids-and-unique-factorisation` are already reached through
other prerequisites); the declared list was not edited here.

### Design/plan reconciliation recorded for the owner

1. **Inventory growth is local closure only.** The design proposed 25 A items
   and 5 B items. The scaffold has 29 A items: the four additions are local
   prerequisites that the design's own proof routes require but that the design
   either named under nonexisting IDs or omitted entirely —
   `lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra` (the $*$ used in
   $m_{st}=T_{d(s)}^{*}m_{\lambda}T_{d(t)}$),
   `def-e-regular-and-e-restricted-partitions` (the labels of the classification
   theorem), and the two central-idempotent lemmas of item 2 below. No useful
   claim was weakened and no inventory was padded.
2. **Missing design suppliers replaced, choice-free and in-closure.** The
   design's block item listed `lem-artinian-product-idempotents` and
   `cor-artinian-local-ring-only-idempotents-are-zero-and-one`, neither of which
   exists. The natural published replacements are unusable for dependency
   reasons: `lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions`
   is homed on `blocks-defect-groups-and-the-brauer-homomorphism`,
   `def-endomorphism-ring-of-a-module` and `def-center-of-a-ring` are homed on
   `morita-bicategories-and-projective-generators`, and neither page lies in the
   closure of this page's declared `requires` (validate-plan raised
   `undeclared-prereq` for all three, and the shared plan is not ours to edit).
   The scaffold therefore proves the needed facts locally:
   `lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents`
   (the dimension-descent argument applied to $Z(A)$) and
   `lem-central-idempotent-decompositions-of-one-are-unique` (uniqueness of the
   decomposition of $1$), and it defines $\mathrm{End}_H(M)$ inline in the
   q-Schur definition. This is also mathematically preferable: the Artinian
   structure theorem and the local-ring idempotent corollary both carry the
   Axiom of Choice, whereas the finite-dimensional route is choice-free, so the
   whole page stays choice-free.
3. **Beta-number convention.** The design's symbol definition mixes the row
   convention $b_i=\alpha_i+d-i$ (length $d$) with column-indexed hook
   displacements in the Gram-determinant and Schaper formulas. The manifest
   uses the source's column convention
   $\beta_i=\lambda'_i+n-i$ (length $n$), so that Lemma 5.26's identification
   (“$d(\beta_1,\dots,\beta_b-h,\dots)\ne0$ only for $h=h^{\lambda}_{ab}$, then
   unwrap the rim hook $R^{\lambda}_{ab}$”) and the displacements
   $+h^{\lambda}_{ab}$ at position $b$, $-h^{\lambda}_{ac}$ at position $c$ are
   literally the printed ones; the design's recovery formula reappears as the
   conjugate-parts recovery $\nu'_i=b_i-n+i$.
4. **Dependency repairs relative to the design table.** (a)
   `thm-standard-polytabloid-basis` was moved from the Murphy-basis theorem
   (whose source proof uses row-standard straightening, not polytabloids) to the
   $q=1$ specialization proposition, where the polytabloid/Murphy comparison is
   actually made. (b) The design's edge from
   `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras` to the
   block definition is not used by the corner/exactness argument and was
   dropped; the block definition remains on the page (it is the page's generic
   block-language supplier and is expected by the downstream cores/blocks page
   of batch 21). (c) Genuine dependencies were added where the proof route needs
   them: `cor-sum-of-squares-of-standard-tableau-numbers` (the count
   $\sum_\lambda|\mathrm{Std}(\lambda)|^2=n!$), the star map, the q-Schur
   anti-automorphism and cell axioms, `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`
   and `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads` for the
   cross-checks in the dominance corollary and the $q=1$ proposition,
   `def-composition-series-and-length-of-a-module` and
   `thm-jordan-holder-theorem-for-modules` for composition multiplicities.
5. **B-page leaf contract.** Both the page-level `requires` and every B item
   depend only on this pair's A page and on published items; no B item is a
   dependency of any other page, and no other page's B item is consumed.

## Mathematical closure and dependency verification

Every item was checked against the actual statements of its suppliers; published
items were read on disk, the in-run batch-19 suppliers were read in their
manifest form, and the three source treatments were read in full at the exact
locators recorded in the coverage file. Key verifications performed while
constructing this scaffold:

- **Cellular algebra core.** Mathas Definition 2.1, Corollary 2.3, (2.4)–(2.6),
  Propositions 2.7/2.9/2.10, Lemma 2.8, Theorem 2.13 and Corollary 2.14 were
  read at printed pp. 9–16; the statements of the manifest items match the
  printed hypotheses (field, finite-dimensional algebra, finite poset) and the
  dominance direction of the decomposition-matrix corollary was checked to be
  $d_{\lambda\mu}\ne0\Rightarrow\lambda\unrhd\mu$ in the source's cell order.
- **Murphy basis.** The $*$-map ($T_i^*=T_i$, $T_w^*=T_{w^{-1}}$, printed
  pp. 20–25), Lemma 3.2, Proposition 3.3, Corollary 3.4, Proposition 3.16,
  Corollary 3.17 and Theorem 3.18 were read; the printed Murphy definition
  $m_{st}=T_{d(s)}^*m_\lambda T_{d(t)}$ and the count of the basis match the
  manifest, and the $n!$ count is cross-checked with the published
  sum-of-squares item.
- **JM triangularity and seminormal form.** Theorem 3.30, Proposition 3.24,
  Corollary 3.25, Lemma 3.32, Proposition 3.33 and Theorem 3.34 were read at
  printed pp. 26–31; the four $T_i$ cases of Theorem 3.34 were reconstructed
  from the printed two-dimensional display (including the coefficients
  $q^{\rho}/[\rho]_q$ and $[\rho+1]_q[\rho-1]_q/[\rho]_q^{2}$) rather than
  quoted from memory. The $q=1$ limit of $L_k$ to $X_k$ was checked against the
  published JM definition.
- **Simple classification.** Lemmas 3.35/3.37/3.38, Theorem 3.39 and Corollary
  3.40 (printed pp. 32–34) were read, including the $[e]_q$-divisibility
  argument that makes the cell form vanish for non-$e$-restricted labels; the
  translation to the Dipper–James $e$-regular labelling uses Kleshchev's
  Remark 5.5 ($D^{\mu}\cong D(\mu^{\mathrm{t}})\otimes\operatorname{sgn}$),
  read at printed p. 24, and the direction of the dominance corollary was
  cross-checked against the published group-side theorem.
- **q-Schur and Schur functor.** Chapter 4 (4.1), Theorems 4.8/4.10/4.14/4.15/4.16,
  Corollaries 4.9/4.11/4.12/4.18 and Proposition 4.19 were read at printed
  pp. 36–44; the manifest items state $M^{\mu}=m_\mu H$, $S(d,n)=\mathrm{End}_H(M)$,
  the semistandard cellular basis, the Weyl cell modules and the exact corner
  $eSe\cong H$ of the Schur idempotent, and the Schur-functor theorem records
  both the source normalization and the conjugate-dual restatement used on this
  page.
- **Beta numbers, Gram determinant, Jantzen, Schaper.** (5.21)–(5.22),
  Theorem 5.18, Corollary 5.19, Lemmas 5.22–5.26, Theorem 5.27, Lemma 5.29,
  Lemma 5.30, Theorem 5.31, Corollary 5.32 and Examples 5.28/5.33 were read at
  printed pp. 52–60. In particular the exponent of the Gram determinant and of
  the Jantzen sum formula was checked against the printed display
  (displacements $+h^{\lambda}_{ab}$ at column $b$, $-h^{\lambda}_{ac}$ at
  column $c$), the coefficient
  $\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})$
  and the hypothesis $[n]!_{\hat q}\ne0$ are stated exactly, and the $(3,2)$
  $e=2$ example's intermediate bound $d\in\{1,2\}$ and final $d=1$ were verified
  in the printed text.
- **$q=1$ direction and axiom use.** The specialization proposition imports the
  published group-side classification and dictionary; no group-side item
  depends on the Hecke theory, so the SYMR-6-to-SYMR-7 seam is acyclic. Every
  item on both pages is choice-free and no item reaches
  `deferred-set-theory-beyond-choice`; the two item statements that could have
  imported AC (blocks and local-ring idempotents) were rewritten locally to
  avoid it, as recorded above.
- **In-run transitive closure.** The only suppliers of this batch that live in
  another batch of this run are the batch-19 rim-hook items
  `def-removable-border-strip-and-height` and
  `lem-hooks-correspond-to-removable-border-strips`, consumed by the
  Gram-determinant theorem and the q-Schaper theorem and declared both in the
  item `deps` arrays and in the cross-batch input file. No other in-run item is
  consumed.

## Convention repair and scaffolder self-review (2026-10-08)

A self-review of the pair's statements against the sources and against the algebra itself found four defects, three of them mathematical. All were repaired in the manifest before the affected readiness records were re-recorded.

1. **The Murphy cell-module basis.** `def-type-a-hecke-specht-module-and-cell-form` had described the basis of the cell module as `{m_t = m_{tt}}`, acting by `m_{tt}h ≡ Σ_v r_v m_{tv}`. The cellular rule transforms the *second* index and fixes the first, so the classes of the diagonal elements `m_{tt}` are not closed under right multiplication: at q = 1 the element `m_{uu} = 1 + (13)` is not in `m_{(2,1)}·Z[S_3]` (that right ideal is spanned by `1+(12)`, `(23)+(123)`, `(132)+(13)`), while the classes of `m_{t^λ t} = m_λT_{d(t)}` are a basis. The item now defines the module basis as `{m_t := m_{t^λ t}}` and records the dictionary to the Dipper–James module. The same correction is applied where the JM/seminormal items use those basis vectors.
2. **The axial distance.** `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` had defined `ρ` as the *difference of q-numbers* `[content_s(i)]_q − [content_s(i+1)]_q`, so that `[ρ]_q` and `q^ρ` in its formulas were undefined. The sources define ρ as the integer residue difference (manuscript: `res(x) = j − i` for the node (i,j); Hu–Mathas arXiv:1304.0906, equation (3.8): `ρ_r(t) = c_r(t) − c_{r+1}(t)`). The item now takes `ρ := content_s(i) − content_s(i+1) ∈ Z`.
3. **The generator formula in the case t ⊳ s.** The 1998 prepublication manuscript prints, for `f_sT_i` with `t = s(i,i+1)` standard and `t ⊳ s`, the coefficients `q^ρ/[ρ]_q` and `[ρ+1]_q[ρ−1]_q/[ρ]_q²` with `ρ = res_s(i) − res_t(i) < 0`. That display is inconsistent with the manuscript's own case `s ⊳ t` (`−1/[ρ]_q f_s + f_t`) together with the Hecke relations: the diagonal coefficient of `T_i` on `f_s` is forced to be `−1/[ρ]_q` in both middle cases, and the quadratic relation then forces the off-diagonal coefficient to be the other branch of the Mathas–Murphy seminormal coefficient system (Hu–Mathas, Example 3.11 with Lemma 3.12 and Proposition 3.17), namely `[1+ρ]_q[1−ρ]_q/([ρ]_q[−ρ]_q)`. The item now states the uniform formula `f_sT_i = α_i(s)f_t − (1/[ρ]_q)f_s` with α = 1 if `s ⊳ t` and `[1+ρ]_q[1−ρ]_q/([ρ]_q[−ρ]_q)` if `t ⊳ s`.
   Direct verification (scaffolder, 2026-10-08; scratch scripts under `/tmp`, not repo deliverables): the Hecke algebras `H(S_3)` and `H(S_4)` were built from the T-basis multiplication rules, the Murphy cell modules realised as `m_λH/(m_λH ∩ R m_{(n)})`, and the seminormal basis computed as `f_t = m_tF_t` from the spectral projectors of `L_2, L_3` (resp. `L_2, L_3, L_4`), with the module relations re-checked at every step. The computed generator action gives, for λ=(2,1) at q = 3,5,7: `f_sT_2 = −(1/[2]_q)f_s + f_u` and `f_uT_2 = (q[3]_q/[2]_q²)f_s + (q²/[2]_q)f_u`; for λ=(3,1) at q = 2: `f_0T_3 = −(1/[3]_q)f_0 + f_1` and `f_1T_3 = (90/49)f_0 + (8/7)f_1`. The manuscript's displayed case `t ⊳ s` would instead give `(13/16, −1/4)` and `(45/49, −1/7)` at those parameters, which fail the quadratic relation `T_i² = (q−1)T_i + q`; the manifest uses the verified coefficients. (The 1999 AMS edition is an edition boundary for this run, so the correction is sourced independently from the published Hu–Mathas coefficient system rather than from the unseen edition.) A second pass (2026-10-08, same scratch scripts) re-ran the computation for λ=(3,1) at q = 2 and q = 3 and for λ=(2,1) at q = 1; every coefficient of the stated two-branch formula was reproduced exactly (e.g. λ=(3,1), q = 3: `f_2T_2 = (39/16)f_1 + (9/4)f_2` with α = [−1][3]/([−2][2]) = 39/16 and −1/[−2] = 9/4; `f_1T_3 = (480/169)f_0 + (27/13)f_1` with α = [−2][4]/([−3][3]) = 480/169 and −1/[−3] = 27/13).
4. **Convention split between the page and the sources.** The page's `S^λ` is the Dipper–James Specht module (locked by the owner authoring direction), which is the dual of the source's Murphy cell module of conjugate shape. The Jucys–Murphy triangularity and the seminormal form are source statements about the cell modules, so `thm-hecke-jucys-murphy-action-is-dominance-triangular` and `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` are now stated for the Murphy cell module `S^λ_M` (defined in the corrected definition item), while `def-alternating-weyl-and-specht-symbols-from-beta-sequences` and `thm-q-schaper-virtual-radical-layer-formula` now say explicitly that their Specht symbols and identities are in the source's normalisation, with the Dipper–James translation by conjugating partitions. `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` part 2 now says "the page's Hecke Specht module" instead of "the Hecke cell module" and no longer claims that the polytabloid basis matches the specialization of the Murphy basis; part (b) of `cex-cellularity-does-not-make-every-cell-module-simple` now names the page's Specht module (noting the sign/trivial identification in characteristic 2).

Dependency and labelling consequences of the repair: `thm-hecke-jucys-murphy-action-is-dominance-triangular` gained a dependency on the corrected definition item (level 3 → 4), `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` (4 → 5), `def-alternating-weyl-and-specht-symbols-from-beta-sequences` (3 → 4), `thm-q-schur-weyl-weight-space-gram-determinant-hook-product` (4 → 5), and on the B page `ex-hecke-jucys-murphy-elements-through-rank-four` (4 → 5) and `cex-residue-sequences-need-not-separate-when-e-is-at-most-n` (5 → 6). `node tools/item-dependency-levels.mjs check` reports no label mismatch inside this batch. All 34 readiness records were re-verified: 21 were stale after the repair (the five edited items together with their transitive consumers) and were re-recorded `ready` with their current dependency lists; the other 13 closed records were left untouched. `node tools/step1-decisions.mjs check` shows no stale batch-20 record. These records remain scaffold readiness, not mathematical approval.

New source added to the coverage and fetch-stamped: Jun Hu and Andrew Mathas, *Seminormal forms and cyclotomic quiver Hecke algebras of type A*, arXiv:1304.0906, complete 51-page preprint, SHA-256 `54b11286…cf520`; locators: Section 3.1 equation (3.8), Examples 3.10–3.11, Lemma 3.12, Theorem 3.13, Proposition 3.17 at arXiv pp. 15–18, with Sections 2.2–2.4 read for the presentation. Dispositions: three results absorbed inline into `thm-separated-…`, the cyclotomic/quiver sections declined out-of-scope with a reason. The paper is the peer-reviewed treatment by the same author whose coefficient system is the corrected Murphy-basis form of Theorem 3.34(ii); the item cites both the manuscript and this paper.

## Sources and fetch evidence

Four complete treatments back the pair (the three below plus the Hu–Mathas paper
added by the scaffolder's self-review), and each page entry in the coverage file
names at least one primary-kind source:

1. Andrew Mathas, *Hecke algebras and Schur algebras of the symmetric group*,
   complete prepublication manuscript (1998; the 1999 AMS edition is recorded as
   an edition boundary, and no statement from its unseen Chapter 6 is used).
   Complete 79-page manuscript, SHA-256 `8cfeb611…997e0`.
   URL: https://web.math.ucsb.edu/~bigelow/books/mathas.pdf. Locators: printed
   pp. 1–65 (Chapters 1–5), with the named results listed per disposition in the
   coverage file.
2. Andrew Mathas and Marcos Soriano, *Seminormal forms and Gram determinants for
   cellular algebras*, arXiv:math/0604108 (J. reine angew. Math. 619 (2008)
   141–173). Complete 29-page preprint, SHA-256 `a2cd21ce…64698a1`.
   URL: https://arxiv.org/pdf/math/0604108. Locators: §§2.8–2.15 (pp. 4–7),
   §§3.1–3.7 (pp. 9–11), Theorem 3.16/Corollary 3.17 (pp. 16–18), Proposition
   4.13 (pp. 20–21), appendix (pp. 22–29).
3. Alexander Kleshchev, *Representation theory of symmetric groups and related
   Hecke algebras*, arXiv:0909.4844 (Bull. AMS 47 (2010) 419–481). Complete
   66-page survey, SHA-256 `86851996…c6f2cab`.
   URL: https://arxiv.org/pdf/0909.4844. Locators: §5.3 (pp. 23–25, Theorem 5.4
   and Remark 5.5), §5.4 (pp. 25–26), and the deferred destinations for
   modular branching and KLR/Ariki material.

4. Jun Hu and Andrew Mathas, *Seminormal forms and cyclotomic quiver Hecke
   algebras of type A*, arXiv:1304.0906 (published in Math. Ann.). Complete
   51-page preprint, SHA-256 `54b11286…cf520`.
   URL: https://arxiv.org/pdf/1304.0906. Locators: Section 3.1 equation (3.8),
   Examples 3.10–3.11, Lemma 3.12, Theorem 3.13 and Proposition 3.17 (arXiv
   pp. 15–18), plus Sections 2.2–2.4 (arXiv pp. 6–13) for the Hecke-algebra
   presentation and its Jucys–Murphy elements; dispositions in the coverage
   file.

`node tools/source-fetch-check.mjs --coverage research/frontier-44-special-representation-examples-28-batch-20.coverage.json --stamp`
returns `7/7 source(s) fetch-verified`; check mode without network returns
`7/7 source(s) fetch-verified` and `7/7 source(s) resolved`.
`node tools/url-sweep.mjs` reports `4/4 live; 0 failed` and
`node tools/source-backing.mjs` reports `28 authored result(s) … every one
still backed by an openable source`. The coverage file disposes **78 harvested
source results** (A page: 33 included, 13 inline, 5 deferred with destinations,
6 out-of-scope with reasons; B page: 5 included, 13 inline, 1 deferred, 2
out-of-scope) with **0 errors** and one advisory `coverage-low-yield` warning on
the B page (5/21 results `included`, the rest absorbed inline into the worked
examples or declined with reasons) — recorded here for Alpha's Step-5 reading.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-20.cross-batch-dependencies.json`
holds five open rows: the page edge
`type-a-hecke-specht-modules-and-cellular-bases →
rim-hooks-and-the-murnaghan-nakayama-rule` (batch 19), and item edges from
`thm-q-schur-weyl-weight-space-gram-determinant-hook-product` and
`thm-q-schaper-virtual-radical-layer-formula` to
`def-removable-border-strip-and-height` and
`lem-hooks-correspond-to-removable-border-strips`, with the exact required
claims and uses (the Lemma 5.26 hook/rim-hook identification and the
displacements of the Jantzen sum formula). The unified ledger was refreshed with
`node tools/frontier-dependency-ledger.mjs refresh --run
frontier-44-special-representation-examples-28`; the remaining unreviewed
batches are run state, not findings of this batch. All other suppliers of this
pair (RG-13, SYMR-4/5/6 pages, `artinian-rings-and-length`, the PID and
Grothendieck pages, and the published symmetric-group modular items) are
published content, so no further consumer rows are owed.

## Checks run (exact results)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 283 items, 0 normalized, **0 errors** (final re-run 2026-10-08, after the repair) |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 283 scoped items, **0 errors, 0 warnings** (final re-run 2026-10-08) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` | after the repair **0 non-shell errors** (only other batches' `empty scaffold inventory` rows remain); this batch's labels recomputed and matching (max level 8) |
| coverage | `node tools/coverage-checklist.mjs <batch coverage> --require-destination` | 2 pages, 78 harvested results, **0 errors**, 1 warning (`coverage-low-yield` on the B page) |
| source fetch | `node tools/source-fetch-check.mjs --coverage <batch coverage> --stamp`, then check mode | **7/7 fetch-verified**, 0 drops |
| url liveness | `node tools/url-sweep.mjs --coverage <batch coverage> --out /tmp/b20/urls3.json --recover --fail-on-dead` | **4/4 live**, 0 failed, 4 citation decisions |
| source backing | `node tools/source-backing.mjs --coverage <batch coverage> --liveness /tmp/b20/urls.json --reharvest-plan /tmp/b20/reharvest.json` | 28 authored results, every one backed by an openable source |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-…` | **OK** at the final re-run (acyclic and consistent; no item-level cycles, no undeclared prerequisites); only shared-plan `redundant-prereq` advisories remain. A re-run during construction once showed a transient `intra-order` error on another batch's page (`divided-powers-integral-forms-and-quantum-highest-weights`), not in this batch's scope |
| scope | `node tools/manifest-integrity.mjs --run frontier-44-…` | 56 pages owed, 56 in manifests, **no scope drift** |
| readiness | `node tools/step1-decisions.mjs check --run frontier-44-…` | all **34 batch-20 records closed** (ready, non-owner; 21 re-recorded after the 2026-10-08 repair); the run is not closed because other batches are still scaffolding |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-…` | refreshed and deduplicated; batch-20 input accepted |
| depcheck / extcheck | `node tools/depcheck.mjs --items-file <34 ids>` / `extcheck` | fail with `focus-item-unknown` because Step-1 item files are deliberately absent; the engine runs these after authoring (Step 3). Not a batch finding. |

Two `undeclared-prereq` errors raised by `validate-plan` during construction
(`morita-bicategories-and-projective-generators` and
`blocks-defect-groups-and-the-brauer-homomorphism` reached through the design's
block and End dependencies) were repaired as recorded above, after which the
plan check passes. The concurrent batch-27 page briefly reported a similar
error (`integral-specht-modules-and-modular-simple-modules`); it was not ours
to fix and had disappeared from the plan output by the final run.

## Published defects and open obligations

No defect was confirmed in any consumed published item. The interfaces read
were: the RG-13 generic Hecke items (`def-generic-type-a-hecke-algebra`,
`thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
`prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`),
the published q-integer, tableau, stabilizer, Young-subgroup, dominance and
content items, the JM items (`def-jucys-murphy-elements-of-the-symmetric-group-algebra`,
`cor-jucys-murphy-elements-commute-pairwise`),
the integral/modular Specht items (`def-p-regular-and-p-restricted-partitions`,
`def-modular-specht-form-and-radical-quotient`,
`thm-james-submodule-theorem-over-an-arbitrary-field`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`), and the
Grothendieck/PID/Smith items; all statements matched the uses. Five
defects were found by the scaffolder's own self-review and repaired inside this
batch's manifest (never in a published item): the Murphy cell-module basis, the
axial-distance convention and the generator formula of the seminormal theorem,
together with two convention-wording repairs; the exact findings, the
verification computation and the new Hu-Mathas source are recorded in the
"Convention repair" section above. One source-level discrepancy is reported
rather than repaired: the displayed case `t ⊳ s` of Theorem 3.34(ii) in the
1998 prepublication manuscript is inconsistent with the Hecke relations, and
this page uses the independently published Mathas-Murphy coefficient system
instead. No published carrier was edited, no `Recorded` result is consumed to
prove its replacement, and no AC branch is introduced. The only open judgments are the ones this
scaffold cannot make: the batch-19 rim-hook suppliers must be authored and
reviewed before this page's Gram-determinant and Schaper items are authorable
(tracked as five open cross-batch rows), and the coverage `coverage-low-yield`
warning above is for Alpha's reading. Owner/operator reconciliation, the Step-3
authoring review and the full engine gate still follow; a readiness record is
not independent mathematical approval.


## One-time owner-authorized cellular consumer repair and actual proof instantiation

Original source20 escalation remains recorded at exhausted round 2 of 2. The owner authorized one bounded exceptional repair, including necessary affected consumers; no counter reset or new round occurs. The earlier guarded phrase deletion and frozen source20/source21 proof instantiation are preserved.

The actual NEW50 supplier research/frontier-44-special-representation-examples-28-batch-50.pages.json (SHA-256 a7e48637134b9eede4b257ebc4ccb2f09fe072be7efb0ea06c4a37a0fc882224) independently proves the arbitrary-ring ordinary polytabloid to signed-conjugate Murphy module isomorphism and exact Laurent-unit self-form comparison. Its factor is q^{N(lambda-prime)-length(w_lambda)}, hence exactly 1 at q=1 over every field. This supplies the ordinary module/form and PID Jantzen prerequisite; it is not a citation to an inaccessible primary proof. Same-shape contragredient duality is distinct from signed conjugation. Future authoring must use thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell and cor-dj-bridge-specialization-and-composition-multiplicity-dictionary through the corrected Definition. The printed p25 untwisted convention warning is not accepted as a proof premise.

The q=1 specialization proposition retains all-field polytabloid module and standard-form equality and the regular-label classification. Only its false inference from a zero form quotient to a non-simple Specht module is removed. At F2,n2 both Spechts are one-dimensional simple despite the column form being zero.

Historical source-reading and retrieval attempts are unchanged. No new full reading or retry is claimed. Guarded construction and affected-consumer evidence are in research/frontier-44-special-representation-examples-28-owner-cell-head-classification-repair/owner-authorized-phrase-deletion-exception/complete-one-time-consumer-extension. Root alone owns native integration, records and gates; same reviewer actual after-binding acceptance remains required.


## Current Step3 independent five-subject proof instantiation

This guarded partial integration covers only the corrected q-Schur Definition, the weight idempotent/exact corner Definition, the alternating beta-symbol Definition, the weight-dimension detection lemma and the rank-four JM example. Their exact full proof carriers are bound in guarded-eight-independent-subset-final2-examples.json. The Definitions use actual p_nu weight projections and normalized semistandard maps; the determinant-one Kostka inversion detects virtual Weyl classes. Murphy-basis corrections in the JM example do not vanish merely because the algebra is semisimple. The classifier final2 proof remains INSUFFICIENT_FINAL2_HOLD; its complete ladder-boundary dominance lemma is unproved. All classifier/K-dependent candidate changes are excluded from this partial integration and no proof completion/readiness is claimed for them. Original source20 two-round plus one owner-exception history remains unchanged.
