# Batch 22 notes — `em-retarded-point-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **323**, B page order **324**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**1 A item + 1 B item**. No item file, page, plan, published item, engine state or
verdict was edited. Files written: this manifest
(`research/physics-em-sr-40-2026-10-08-batch-22.pages.json`), coverage, the
cross-batch dependency input, the `step1-*` readiness records for the two items,
this note, and the tool-refreshed unified ledger. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first;
its named corrections concern other pairs and none of them is contradicted here.

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1604–L1670
("Complete retarded point fields", quoting `proposed-inventory.json`). Compared with
`research/plan-spec.json` orders 323/324: page ids, kinds, orders, category, library
`mathematics`, titles, companion links and the declared `requires`
(`em-causal-wave-kernel-prerequisites`) agree exactly. **No page-metadata plan
conflict.** The design's A inventory (one theorem `thm-em-retarded-root-and-fields`,
reference `completed-expansion-arguments.md#R1-R2`) and B inventory (one example
`ex-em-wave-equation-prerequisites-hypothesis-boundaries`) are reproduced, with the
two dependency-list reconciliations recorded below; the design's own
`dependency_level` labels (5 and 6) equal the computed in-run levels.

## Inventory decisions (recorded)

1. **`thm-em-retarded-root-and-fields`** (design item; level 5). The design dep list
   is `{def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product,
   thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives,
   thm-em-wave-cauchy-kirchhoff, thm-parametrized-implicit-function-theorem-with-higher-regularity,
   lem-em-point-current-continuity, lem-em-point-retarded-potential-and-fields}`.
   The scaffold keeps seven of those eight and reconciles the rest to the actual
   proof uses:
   - **dropped `thm-em-wave-cauchy-kirchhoff` as a direct dep**: the design list is the
     pre-split M10 list (`prose-scaffold-previous-design.md` L481 and the
     audit-expansion baseline inventory both record exactly these seven items as
     `mathematical-prerequisites.md#M10`, state OPEN; the current design state adds
     `lem-em-point-retarded-potential-and-fields` after the R1/R2 split).
     In the split construction the convolution identification lives in
     `lem-em-retarded-wave-kernel` (page 321), which the theorem consumes through
     `lem-em-point-retarded-potential-and-fields`; the theorem's own proof never cites
     the wave theorem directly. The transitive closure still
     contains it (page 323 → 321 → kernel → wave theorem), so no consumer loses it.
     This is a dependency-graph correction, not a claim reduction.
   - **added the suppliers the proof genuinely uses**:
     `thm-intermediate-value` (existence), `thm-integral-triangle-inequality` and
     `def-vector-valued-derivative-and-integral` (the integral Lipschitz bound
     `|z(s2)-z(s1)| <= v_*(s2-s1)` that makes `f` strictly decreasing), plus
     `def-directional-and-partial-derivatives` and `def-jacobian-matrix-and-gradient`
     (`d_t s`, `grad_x s`), `def-cross-product-in-r3` and
     `lem-cross-product-is-bilinear-alternating-and-orthogonal` (the acceleration
     numerator and the `n x...` estimates), `def-em-potential-gauge-and-field-conventions`
     (the definitions of `E`, `B` from the potentials), `lem-em-retarded-wave-kernel`
     (the kernel notation `K circledast psi` restated in clause (b)) and
     `def-countable-choice` (see finding 4). All added suppliers are published imports
     or earlier in-run items on page 321 whose home pages lie
     inside the declared `requires` closure of page 323 (checked by
     `validate-plan`, which raises no `undeclared-prereq` error for this page).
   - **statement shape**: the theorem states the *complete* promised M10 content —
     (a) event-form unique retarded root with `d_t s = kappa^{-1}`,
     `grad_x s = -n/(c kappa)` and the emission-time Jacobian `1-n.beta`;
     (b) the delta-substitution pairing identity with exact weight `(kappa r)^{-1}`
     and the Lienard–Wiechert potentials `phi = C/(kappa r)`, `A = beta phi/c`;
     (c) the fields with the velocity/acceleration split and a uniform velocity-field
     bound; (d) the new uniform far-zone remainder with explicit constant
     `C(1+v_*/c)(1-v_*/c)^{-3}`. Nothing in `R1`-`R2` is weakened; the self-force,
     radiation-reaction and Maxwell-coupling caveats are retained verbatim in scope.
2. **`ex-em-wave-equation-prerequisites-hypothesis-boundaries`** (design item;
   level 6). Three explicit checks: (i) the plane-wave transport solution
   `u = f(x_1-ct)` of `Wu = 0` with noncompact support and infinite spatial `L^2`
   norm, so the wave theorem's smooth-data clause carries no global finite-energy
   conclusion; (ii) the design's X8 curve `z(s) = (sqrt(c^2 s^2 + a^2),0,0)`,
   pointwise subluminal but with no uniform bound, for which the observation
   `(x,t) = (0,0)` has no root — the uniform speed hypothesis cannot be dropped;
   (iii) an event on the worldline (`x = z(t)`) has the root `s = t` and no root
   below `t`, so the exclusion of `Gamma` is a genuine hypothesis. The design deps
   are kept and completed with the published suppliers the three computations use
   (Tonelli, monotonicity, positivity of the integral of a continuous nonnegative
   nonzero function, `C^k` closure under composition, the derivative and Laplacian
   conventions). These are mathematical checks; no measurement or empirical claim is
   made. It is homed only on the B page and no A item depends on it.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`lem-em-point-current-continuity` (page 305, batch 13, level 0, ready),
`thm-em-wave-cauchy-kirchhoff` (page 311, batch 17, level 2, ready),
`lem-em-retarded-wave-kernel` (page 321, batch 21, level 3, ready),
`def-em-potential-gauge-and-field-conventions` (page 321, level 0, ready) and
`lem-em-point-retarded-potential-and-fields` (page 321, level 4, ready). Points
checked in particular (statements read on disk):

- `lem-em-point-retarded-potential-and-fields`: its hypotheses (`c>0`, `q` real,
  `eps_0>0`, `z` of class `C^3`, `|z'| <= v_* < c`) are identical to the consumer's;
  its clause (b) pairing identities and its clause (c) field formulas are consumed
  with the same `C = q/(4 pi eps_0)`, `beta = z'/c`, `betadot = z''/c`,
  `kappa = 1-n.beta` conventions. The consumer's root clause (a) supplies the root
  at which those formulas are evaluated.
- `lem-em-retarded-wave-kernel`: the kernel definition and the `K circledast psi`
  convention are exactly the ones the consumer restates.
- `lem-em-point-current-continuity`: stated for an open interval `I` and a `C^1`
  curve; `I = R`, `Omega = R^3 x R` and `C^3` `z` are instances.
- `def-em-potential-gauge-and-field-conventions`: `E = -grad phi - d_t A`,
  `B = curl A` verbatim.
- `thm-em-wave-cauchy-kirchhoff`: used by the B example only through its scope
  sentences (no finite-total-energy hypothesis; compact support is a hypothesis of
  clause (d)); the solution formula and cone clause are not used.
- Published suppliers checked for exact hypotheses: `thm-intermediate-value`,
  `thm-integral-triangle-inequality`, `def-vector-valued-derivative-and-integral`,
  `thm-parametrized-implicit-function-theorem-with-higher-regularity` (C^k),
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-monotonicity-of-the-integral`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `lem-euclidean-balls-have-positive-finite-lebesgue-measure`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
  (listed for context; the box computation avoids needing a translation-invariance
  statement about integrals).
- Axioms: `AC_omega` is declared in the A theorem's statement (used through the
  change-of-variables corollaries in the proof of the cited retarded-convolution
  identity), with `def-countable-choice` in `deps`. The B example is choice-free.
  No arbitrary-index choice, no DC-only claim, no
  `deferred-set-theory-beyond-choice` path.
- No missing, circular, forward or inadequate dependency was found;
  `content-policy --manifest-only` over all 40 manifests reports 0 errors and
  0 warnings for the 236 scoped items, and `item-dependency-levels check --run`
  computes 5 and 6 for the two items, matching the labels and the design.

## Findings for owner reconciliation

1. **Design/dependency reconciliation (this page, recorded decision).** The design's
   direct dep `thm-em-wave-cauchy-kirchhoff` is not a premise of this theorem's proof
   in the split construction; dropping it from the direct deps (while keeping it in
   the transitive closure through page 321) is exact-use bookkeeping. If the owner
   instead intends the theorem to assert that the retarded potentials *solve* the
   point-source wave equations (`W phi = rho/eps_0`, `W A = mu_0 J` distributionally),
   that clause — and the corresponding direct wave-theorem use — should be requested
   explicitly: it is mathematically sound but is not part of the M10 promise, and
   proving it needs a separate mollification/limit argument; it is therefore not
   added here.
2. **Supplier statement-shape observation (batch 16, page 310,
   `lem-em-global-retarded-root`).** Its uniqueness clause is stated for a fixed
   `x` with `x != z(t)` for **all** `t` (x off the whole worldline image), but the
   natural and consumed form is the event form: for every `(x,t)` with
   `x != z(t)` there is exactly one `s < t`. The two differ precisely at events
   whose spatial point lies on the worldline at another time: e.g. for the uniform
   worldline `z(s) = (v s,0,0)` and `n = e_1`, the ray point `x_r = z(s_0) + r n`
   equals `z(t_1)` at `t_1 = s_0 + r/v`, although `x_r != z(t_r)` at the observation
   time `t_r = s_0 + r/c`; the lemma's fixed-x hypothesis fails while the event-form
   conclusion still holds and is what the far-zone clause uses. Clause (a) of this
   theorem therefore restates the argument in event form (five lines of the same
   strict-decrease/IVT/IFT proof, whose own text already notes the Lipschitz
   estimate holds "even if x = z(s) somewhere"). Batch 21's finding on the same
   item (hypothesis `C^1` versus conclusion `C^3`; design R1 uses `C^3`) remains
   open and is unaffected by this batch: my theorem re-derives the root under its
   own `C^3` hypothesis and does not consume the lemma. Proposed minimal repair for
   the owner: state the lemma in event form (and with `C^3` data), or delegate the
   event form to this theorem and mark the lemma's fixed-x form as the special case.
3. **Supplier wording observation (batch 21, page 321,
   `lem-em-point-retarded-potential-and-fields`).** Its statement calls `phi` and
   `A` "the smooth functions" on `Omega \ Gamma` while its own strategy records
   only `C^2` (correct: `z` is `C^3`, so `kappa, r` are `C^2` and `phi, A` are
   `C^2`, `E, B` merely `C^1`). This theorem states `C^2`, which is what `C^3`
   data support; the supplier's wording should be corrected to `C^2` (or `z`
   strengthened to `C^infinity`) at reconciliation. No proof claim is affected.
4. **Supplier AC_omega observation (same item).** Its strategy assumes
   `AC_omega` through the `C^1` change-of-variables corollaries
   (`cor-c-one-change-of-variables-for-l-one-functions` and
   `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
   carry it in their statements), but its statement does not name `AC_omega`
   although `def-countable-choice` is in its deps. This theorem therefore declares
   `AC_omega` explicitly and identifies the use. Proposed repair: add the
   assumption to the supplier's statement, or replace the AC-carrying steps.
5. **Plan-metadata findings (not this page).** Running
   `frontier-item-gate --tool validate-plan` after this scaffold reports 6 errors
   and 13 `redundant-prereq` warnings. None names a batch-22 page or item. Three
   errors name page `em-causal-wave-kernel-prerequisites` (published homes
   `fubini-and-change-of-variables`, `the-topology-of-euclidean-space`,
   `density-separability-and-convolution-in-lp` induced by its items) — already
   recorded by batch 21's notes as finding 2; the other three name the SR pages
   `sr-proper-time-comparisons` and `sr-energy-momentum`. These are plan-level
   `requires` declaration findings for owner reconciliation, not mathematical
   prerequisite gaps of this pair; every supplier named by my items is inside
   page 323's declared closure.
6. **Published defects: none found** among the published suppliers used. No
   supplier statement was found false, mistyped or directionally wrong.

## Sources (three treatments, all full-text stamped 2026-10-09)

1. L. D. Landau, E. M. Lifshitz, *The Classical Theory of Fields*, Third Revised
   English Edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11 900 733
   bytes, sha256_16 `57de03326f8ebe4a`) at `http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf`.
   Read: §62 pp. 158–160 (retarded potentials (62.8)–(62.10)), §63 pp. 160–163
   (root equation (63.1) and its uniqueness footnote, implicit derivatives
   (63.6)–(63.7), potentials (63.5), fields (63.8)–(63.9) with the `1/R^2` and
   `1/R` split), §66 pp. 170–172 (fields at large distances, the `t-R'/c`
   combination), §47 pp. 110–113 (plane waves and the characteristic-variable
   reduction). Dispositions: root, derivatives, potentials, fields and large-distance
   behaviour are `included`; §62's representation is `deferred` to page 321; §38,
   §64–65 and the radiation chapters are `out-of-scope` with reasons in the coverage.
   This is a third-party mirror of the printed edition; the printed page numbers
   were verified against the extracted text's page headers.
2. D. J. Griffiths, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall
   1999 (textbook). Full-text scanned PDF (596 pp., 13 484 424 bytes, sha256_16
   `ab7b67a3f6d60049`) at the `hlevkin.com` mirror. Read: §10.2.1 pp. 422–426
   (retarded potentials), §10.3.1 pp. 429–434 (retarded-time equation (10.33), the
   single-retarded-point argument, the factor `(1-n.v/c)^{-1}` of (10.37)–(10.38),
   the potentials (10.39)–(10.40)), §10.3.2 pp. 435–441 (fields (10.65)–(10.66) and
   the velocity/acceleration-field discussion on p. 438) and §9.1.1 pp. 364–366
   (travelling-wave solutions). The copy is a scan; it was read as OCR text with the
   key formulas cross-checked against the two other treatments. Dispositions per
   the coverage; the Jefimenko and radiation chapters are `out-of-scope` with reasons.
3. D. Tong, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Author-hosted full-text PDF (236 pp., 1 882 418 bytes,
   sha256_16 `b99b41156dfe6cd9`, byte-identical to the copy stamped by batch 21) at
   `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`. Read:
   §6.1.2 pp. 138–142 (Green's function for the wave equation; the retarded Green's function), §6.4–§6.4.1 pp. 157–159 (point
   sources (6.30)–(6.31), delta substitution (6.33)–(6.34) with
   `df/dt' = 1 - R.v/c`, potentials (6.34)–(6.36)), §6.4.3 pp. 161–164
   (`kappa`, the Jacobian, fields (6.42), (6.44)–(6.45)). Dispositions per the
   coverage; §6.4.2 and §6.4.4–§6.4.5 are `out-of-scope` with reasons.

No retrieval failure occurred: all six source rows (three sources × two pages)
stamped on the first fetch attempt; `source-fetch-check` check mode passes 6/6.
The full texts were read locally (downloaded copies, text extraction by `mutool`);
the equation identities used by the items were read in the text and, for the two
key field formulas, cross-checked between treatments (Tong (6.42)/(6.45) in SI,
Landau–Lifshitz (63.8)/(63.9) in Gaussian units, Griffiths' (10.65)/(10.66)
structure and terminology).

## Checks run (actual results)

- `manifest-deps` on batch 22: 2 items, 0 missing, 0 errors.
- `item-dependency-levels check --run`: my two items compute level 5 and 6,
  matching their labels; no error names a batch-22 page or item. The 44 reported
  errors are `empty scaffold inventory` rows for pages of batches still in flight.
- `content-policy --manifest-only` over all 40 manifests: 236 scoped items,
  0 errors, 0 warnings.
- `coverage-checklist --require-destination` on batch 22: 2 pages, 32 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check --coverage … --stamp`, then check mode: 6/6 fetch-verified,
  6/6 resolved (stamps in the coverage file).
- `step1-decisions record` + `check --run`: both batch-22 items recorded `ready`
  with their examined dependency lists; 236/236 run items ready; the remaining
  44 work rows are the empty-inventory rows of in-flight batches.
- `frontier-dependency-ledger refresh --run`: refreshed; all six batch-22 rows
  (one page row and five item rows) merged into the unified ledger with one `open`
  review each; batch 22 appears in `reviewed_batches`; the two orphaned reviews
  reported by the tool belong to batch 19, not to this batch.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges;
  52 same-category requires edges checked, every owed page strictly above 95%
  published-or-earlier-in-run.
- `frontier-item-gate --tool validate-plan`: FAIL with the 6 errors and 13 warnings
  of finding 5 — none names a batch-22 page or item. Item selectors
  (`extcheck --manifest-only`, `fwdcheck`) cannot run at all while any run manifest
  page is empty (currently batch 10 and the still-empty batches); this is run-level
  state, exactly as batch 21 recorded.

## Honest uncertainty

- The items are scaffolded with complete proof strategies and exact cited uses,
  but they are not authored item files and have not received independent review;
  Step 3 provides that. In particular the far-zone remainder's uniform constant
  and the event-form root argument must be checked line by line at authoring time,
  and the pairing identities of clause (b) must be checked against the published
  distribution suppliers then.
- The Landau–Lifshitz and Griffiths full texts were read from third-party mirrors
  of the printed editions; the locators are the printed page numbers of those
  editions as shown by the documents themselves, and the section/equation numbers
  were verified against the extracted text. The Griffiths copy is a scan whose OCR
  mangles some symbols; every formula cited from it was cross-checked against at
  least one of the other two treatments before being used.
- Findings 1–4 concern other batches' scaffolds (or a design revision decision for
  this page) and are reported, not repaired: this scaffolder owns only batch 22.
  Until the owner reconciles finding 2, this theorem stands on its own event-form
  clause (a) and does not consume `lem-em-global-retarded-root`; until finding 4 is
  reconciled, the theorem carries `AC_omega` explicitly rather than relying on the
  supplier's unnamed assumption.
