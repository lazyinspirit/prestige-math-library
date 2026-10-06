# Step 3a scope review — hecke-markov-traces-and-polynomial-link-invariants

- Run `frontier-40-geometry-braids-rep-27` (batch 6), role alpha, label
  `step3a-pair-hecke-markov-traces-and-polynomial-link-invariants-cbd063df65a0bb61`,
  covers `hecke-markov-traces-and-polynomial-link-invariants`.
- A page `hecke-markov-traces-and-polynomial-link-invariants` (order 751,
  category `braid-groups`, 23 items: 9 definitions, 8 lemmas, 5 theorems,
  1 proposition, levels 0–9). B page
  `hecke-markov-traces-and-polynomial-link-invariants-examples` (order 752,
  4 items: 3 examples, 1 counterexample, levels 7–11). Companion pointers agree A↔B; the B
  page requires only its A page and no other page requires the B page.
- Decision: **sufficient** (scope only; non-owner review). Receipt:
  `research/frontier-40-geometry-braids-rep-27-step3a-review-hecke-markov-traces-and-polynomial-link-invariants.json`.
  This review approves no item, decides no proof question, edits no scaffold,
  item, plan row, coverage row or owner record, and writes no owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-6.pages.json` | Full A inventory (23 items) and B inventory (4 items): every statement, kind, `deps`, `sources`, page `requires`, companion pairing |
| `research/frontier-40-geometry-braids-rep-27-batch-6.coverage.json` | Six source records with locators and fetch stamps; 44 harvested rows and their dispositions |
| `research/frontier-40-geometry-braids-rep-27-batch-6.notes.md` | Step-1 record: design control, six recorded reconciliations, dependency levels, the three pre-record example repairs, authoring caveats |
| `research/frontier-40-geometry-braids-rep-27-batch-6.cross-batch-dependencies.json` | 24 open edges: 2 page edges and 22 item edges into batches 2 (Hecke) and 5 (Burau/Laurent ring) |
| `research/plan-braid-groups-track.md` L609–L636 | Controlling prose design BG-12: nine A rows and four B rows with routes and locators |
| `research/plan-spec.json` rows 751/752 | Identity, order, category, companion and `requires`; item lists empty (manifest controls items) |
| `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` | Binding direction: preserve each pair's promised scope; local helpers under ordinary rules; new pairs or scope changes need owner resolution |
| `research/frontier-40-geometry-braids-rep-27-alpha-step1-drift.md` (pair section) | Drift verdict for this pair |
| 27 `research/frontier-40-geometry-braids-rep-27-step1-<id>.json` readiness records | Item readiness and dependency lists |
| Published items `items/<id>.md` (every external dep and every consumed supplier) | Presence and statement-level interface |
| Batch-2 and batch-5 manifests (in-run suppliers) | Statements of `def-generic-type-a-hecke-algebra`, `thm-standard-basis-…`, and the Burau/Laurent-ring suppliers |
| Batch-10 and batch-11 manifests (consumers) | The two planned consumers of this pair's HOMFLYPT interface |
| Re-downloaded sources this session | Independent byte/sha re-verification (below) |

## Scope against the prose design

All nine designed A rows are present with the designed ids and kinds:
`def-markov-trace-on-the-type-a-hecke-tower`,
`thm-the-ocneanu-markov-trace-exists-and-is-unique`,
`def-homflypt-polynomial-from-the-hecke-markov-trace`,
`thm-the-hecke-trace-construction-is-an-oriented-link-invariant`,
`def-temperley-lieb-quotient-and-jones-specialization`,
`def-one-variable-alexander-module-of-an-oriented-link`,
`def-alexander-polynomial-from-the-first-elementary-ideal`,
`thm-the-alexander-polynomial-is-an-oriented-link-invariant`,
`prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid`.
All four designed B rows are present with the designed ids and kinds. The A page
adds 14 local-prerequisite items inside the commissioned route (the free-tower
lemma, inverse Hecke generator, exponent sum, braid-to-Hecke homomorphism,
coefficient ring, skein relation, link-complement regularity, finite
presentation, Laurent-ring Noetherian/UFD, elementary ideals and independence,
coloured Burau matrix, Fox-calculus rule, Burau determinant formula); none
broadens the subject, and the page stays far below the item cap. The design's
parameter mismatch (`q` in the design vs the frozen in-run supplier `v`), the
removal of the two unused design deps of the trace definition, and the removal
of Markov's theorem from the Burau–Alexander proposition are recorded
reconciliations that do not reduce promised content: the page still delivers
the Ocneanu trace, the HOMFLYPT invariant with skein relation and normalization,
the Jones specialization, and the Alexander/Burau comparison.

One design reinterpretation is recorded (batch-6 notes §2.4, item
`def-temperley-lieb-quotient-and-jones-specialization`): the design asked for
the TL quotient together with the one-variable trace normalization, and the
scaffold states that the Ocneanu trace does **not** descend to the quotient and
realizes the Jones invariant as a specialization of the HOMFLYPT invariant
instead. The construction delivered (a quotient realizing Jones' TL relations,
and a Jones specialization with the Jones skein relation and unknot value 1) is
present and adequate; the descent denial and its witness are separately
reported below as statement-level defects, not as a scope omission.

## Source coverage

Six sources, 44 harvested rows, all disposed (15 `included`, 5 `inline`,
2 `deferred` to batches 2/5, 22 `out-of-scope` with reasons);
`coverage-checklist --require-destination` gives 0 errors and 0 warnings.
I re-downloaded all six sources this session and reproduced the coverage stamps
byte-for-byte:

| Source | bytes | sha256_16 |
|---|---:|---|
| Birman–Brendle, *Braids: A Survey* (author manuscript, 91 pp.) | 809077 | `22f52d9961a3f0fc` |
| Morton, *The Multivariable Alexander Polynomial for a Closed Braid*, arXiv:math/9803138v1 (6 pp.) | 114546 | `623f39403005b828` |
| Conway, *Burau maps and twisted Alexander polynomials*, arXiv:1510.06678v2 (20 pp.) | 261839 | `4f3701bcb597ec3f` |
| Johnson-Freyd, MATH 448 notes, 2016-01-15 (4 pp.) | 212848 | `be00e75fecc78462` |
| Jones, *The Jones Polynomial* (survey, 21 pp.) | 220842 | `e70cbb78cec9f372` |
| Stacks Project §15.8 (Tag 07Z6, HTML) | 36562 | `ab8b0c48bef43dd7` |

Claims read directly at the cited locators this session: BB §1.4.2 relations
(7) (the Jones algebra is the Hecke quotient by the six-term relation
`1+g_i+g_{i+1}+g_ig_{i+1}+g_{i+1}g_i+g_ig_{i+1}g_i=0`), Remark 4.1 at the
§4.2/§4.3 boundary (printed pp. 47–48; the map `ξ: H_n(t)→J_n(t)`),
§4.3 Theorem 12 (Ocneanu existence/uniqueness),
Example 4.1 (`tr(σ_1^3)=(t^2-t+1)z+t(t-1)`), property 2 (disjoint unions,
below) and property 6 (Jones specialization `V_K(t)=P(t,√t-1/√t)`); Morton §2.1
(labels and matrices `C_i(a)`), Theorem 1 (`det(I-xB_β)` with `t_{π(j)}=t_j`)
and Remark (2) (`D_L=det(I-B_β)/(1-t_1⋯t_n)`); Johnson-Freyd Theorem 2.2 and
its induction; Jones' survey p. 7 (TL relations `e_i^2=e_i`,
`e_ie_{i±1}e_i=τe_i`) and p. 9 (the TL Markov trace property
`tr(xe_{n+1})=τtr(x)`); Stacks Lemma 15.8.2 and Definition 15.8.3 (Fitting
ideals). The B-page computations were re-checked numerically under the frozen
conventions: `A-vB=(v-1)C` from `T_i=vT_i^{-1}+(v-1)`, the Hopf-link
identification of `σ_1σ_2σ_1` (conjugate to the stabilization `σ_1^2σ_2` of
`σ_1^2`), the Jones values `-s^8+s^6+s^2` and `-s^5-s` (equal on both braid
representatives), the two-strand Burau values for `m=1,3,-3`, and the
counterexample's stabilization factors `uαz` and `u^{-1}αz_-`. All check out.

## Prerequisites, consumers and role

- Every one of the 27 items' `deps` resolves: 81 distinct dep targets, of which
  30 are in-run scaffold items of batches 2 and 5 (including
  `def-the-laurent-polynomial-ring`, which is not published) and 51 are
  published `items/<id>.md` files, all with frontmatter `status: published`
  (load-bearing ones checked at statement level: closure/Markov moves and Markov's theorem,
  covering classification, Alexander duality, Hurewicz, Van Kampen, tubular
  neighbourhood, elementary-ideal and localisation/UFD suppliers). No dep is
  missing, no dep points at an unbuilt page, and no batch-6 id collides with a
  published item. `manifest-deps` reports 27 items, 0 errors.
- The four page-level `requires` resolve: `the-burau-representations` (batch 5)
  and `principal-series-representations-of-gl-n-over-a-finite-field` (batch 2)
  are in this run; `oriented-links-braid-closures-and-markov-equivalence` and
  `modules-over-a-pid-and-canonical-forms` are published.
- Intended consumers: the batch-10 page
  `matrix-factorizations-and-khovanov-rozansky-link-homology` (requires this
  page; its `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`
  consumes `def-homflypt-polynomial-from-the-hecke-markov-trace`,
  `def-the-homflypt-coefficient-ring` and `thm-the-homflypt-skein-relation`),
  and the batch-11 page `hochschild-homology-and-triply-graded-link-homology`
  (its `cor-the-graded-euler-characteristic-of-hhh-is-homflypt` refers to the
  same multiplicative function). The consumer's ring map
  `v↦q^{-2}, s↦q^{-1}, u↦t^{-1}q, z↦(q^2-1)t^2/(q^2(1-t^2))` satisfies the
  supplier's two defining relations and uses the supplier's skein relation
  `l^{-1}P_+-lP_-=mP_0` exactly; the interface is compatible.

## Unmet prerequisites and findings for the owner

Findings are prerequisites absent from both the published library and the
current scaffold. They are recorded here rather than as an insufficient-scope
decision because no design-promised topic is omitted.

1. **Confirmed gap — split-union multiplicativity of the Hecke–Markov
   invariant.** The consuming item
   `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`
   (batch 10) uses "the split-union rule
   `P(L_1\sqcup L_2)=\alpha P(L_1)P(L_2)` of the trace tower" in its proof
   strategy, and `cor-the-graded-euler-characteristic-of-hhh-is-homflypt`
   (batch 11) states that the multiplicative function is "recorded there". No
   item of any batch-6 manifest states or proves the rule, and the published
   library has no item containing "skein", "split-union", or a HOMFLYPT
   multiplicativity claim (grep over `items/*.md`). The claim itself is true
   and follows from iterating `(M2)`/`(M4)` to get
   `tr_{m+n}(x\otimes y)=tr_m(x)tr_n(y)` and then the normalization factor
   `\alpha`; the cited source states it as BB §4.3 property 2
   (`P_{K_1\coprod K_2}=((l^{-1}-l)/m)P_{K_1}P_{K_2}`, verified in the fetched
   manuscript). Recommended owner action: authorize a scaffold addition on the
   A page — a clause on `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`
   or a new lemma (tensor factorization of the Ocneanu trace plus the
   `\alpha` factor) — so that the consumers have a supplier claim of record.
2. **Candidate gap (uncertain) — uniqueness of the skein characterization.**
   `def-temperley-lieb-quotient-and-jones-specialization`(3) concludes "hence
   `V` is the Jones polynomial" from the skein relation and `V(unknot)=1`, and
   the batch-10 strategy invokes "the standard uniqueness of the HOMFLYPT skein
   invariant … the classical descending-diagram induction". No item in the run
   manifests and no published item states any uniqueness theorem for skein
   invariants (grep: zero published items mention "skein"). This is a standard
   result that the author can prove inline; recommended owner action: either
   record the obligation in the item's strategy or add a small scaffold lemma
   (oriented-link invariant with the HOMFLYPT relation and `P(unknot)=1` is
   determined by descending diagrams). Not confirmed as blocking.

## Statement-level defects to route (owner action; scope unchanged)

1. **`def-temperley-lieb-quotient-and-jones-specialization`(1) — the rescaled
   TL relations are false as written.** Exact evidence: expanding in `H(3)`
   with `E=\sum_{w\in S_3}T_w` and `\lambda=v/(v+1)^2` gives the identity
   `(v+1)^3(e_1e_2e_1-\lambda e_1)=E`, so `e_1e_2e_1=\lambda e_1` in
   `H(3)/J(3)`; hence for `f_i:=\lambda^{-1}e_i` one gets
   `f_if_{i+1}f_i=\lambda^{-1}f_i=\delta f_i`, **not** `f_i` (and
   `\lambda^{-1}=(v+1)^2/v\ne1` for generic `v`). The standard TL presentation
   (Jones' survey p. 7: `e_i^2=e_i`, `e_ie_{i\pm1}e_i=\tau e_i`; equivalently
   `g_i^2=\delta g_i`, `g_ig_{i+1}g_i=g_i` after rescaling) is reached with
   `f_i:=\lambda^{-1/2}e_i` and `\delta:=\lambda^{-1/2}=(v+1)/v^{1/2}` (after
   adjoining `v^{1/2}`), or by keeping the item's own `e_i` relations — which
   are correct and are exactly Jones' `TL(n,\tau)` with `\tau=\lambda` — and
   dropping/correcting the final rescaling clause. The item's own `e_i`
   relations and the rest of (2)–(3) are unaffected.
2. **Same item, caveat — the non-descent claim and its witness are wrong.**
   Exact evidence: `E\cdot T_1=vE` (direct expansion; checked numerically at
   `v=2,3`), so
   `tr_3(E^{(1)}_3T_1)=v\,tr_3(E^{(1)}_3)=v+v(v+2)z+v(v+1)z^2`, not
   `v+(3v-1)z+(v^2+2v-1)z^2`, and it **vanishes** at `z_0=-1/(v+1)` exactly as
   `tr_3(E^{(1)}_3)=1+z(v+2)+z^2(v+1)` does. A direct computation of the
   Ocneanu trace for `n=4` (recursion from the free-basis lemma, `z=z_0`,
   `v=2` — a generic point; the identities are polynomial in `v`) gives
   `tr_4=0` on every spanning element
   `T_uE^{(i)}_4T_w` (`i=1,2`) of the TL ideal. Thus the specialized trace
   (with `tr(e_i)=\lambda`, the TL Markov normalization) appears to descend to
   `TL(n)`, consistent with the classical picture (BB §1.4.2: the Jones algebra
   carries the Markov trace; BB §4.3 property 6: `P` specializes to the Jones
   polynomial). Recommended repair: state the descent at `z_0` (the Jones
   trace), or, if a denial is intended in a different precise sense (e.g. only
   for generic `z`), state that sense and supply a correct witness.
3. **`def-the-homflypt-coefficient-ring`(3) — the universal property requires
   a unit that the presentation does not force.** `R` inverts only `v` and `z`;
   `u^2=(z+1-v)/(vz)` does not force `u` to be a unit. Example:
   `v_0=2, z_0=1, s_0=\sqrt2, u_0=0` in a field containing `\sqrt2` satisfies
   `s_0^2=v_0` and `v_0z_0u_0^2=z_0+1-v_0`, with `u_0\notin T^\times`, so the
   clause "exactly a choice of units `v_0,z_0,u_0,s_0`" is false as written
   (`s_0` is automatically a unit, `u_0` is not). Recommended repair: require
   `v_0,z_0` units and `s_0,u_0` elements satisfying the two relations, or
   invert `u` in `R` (the known consumer map has `u` a unit, so no consumer is
   affected either way).
4. **`def-elementary-ideals-of-a-finitely-presented-module` — Stacks
   cross-index.** Stacks `Fit_k(M)` is generated by the `(n-k)\times(n-k)`
   minors for a presentation `\bigoplus_J R\to R^{\oplus n}\to M\to0`
   (Lemma 15.8.2, Definition 15.8.3, read this session); the item's `E_k` is
   therefore `Fit_k`, not `Fitt_{n-k-1}`. The parenthetical should be fixed.
5. **`def-exponent-sum-of-a-braid` — wording.** Well-definedness by von Dyck
   holds because every defining relator has exponent sum `0`; the statement's
   "homogeneous of degree 2 and 3 in the exponents" is not the correct
   justification (the item's own strategy gives the correct check).
6. **Locator, not scope — Conway.** The stamped arXiv v2 fetch has the twisted
   Burau–Alexander computation as **Theorem 3.15** (pages 16–17), not
   "Theorem 3.19"; there is no 3.19 in the PDF. The content matches the
   scaffold's use (the short exact sequence
   `0\to H^\rho_1(X_{\hat\beta\cup\partial D_c})\to H^\rho_1(X_{\hat\beta})\to0`
   and the determinant identity with `\pm dh`). The coverage locator and the
   two item strategies should be realigned at Step 3b.
7. **Uncertainty, source fidelity — Morton labelling direction.**
   `def-coloured-reduced-burau-matrix` says the crossing label is "read from
   the bottom of the braid"; Morton §2.1 assigns labels by the string's bottom
   starting point and then says `a_r` is "counted from the top of the braid"
   (Theorem 1's `t_{\pi(j)}=t_j` fixes the identification). The page's
   load-bearing uses (equal-label specialization, characteristic polynomials,
   the two-strand example) are insensitive to the direction, but the definition
   should be reconciled with the source at authoring.

## Checks run

| Check | Actual result |
|---|---|
| `manifest-deps` on the batch-6 manifest | 27 items, 0 normalized, 0 errors |
| Dependency resolution scan (all 27 items, all batch files + `items/`) | 0 missing; no batch-6 id collides with a published item |
| `coverage-checklist --require-destination` | 1 page, 44 rows, 0 errors, 0 warnings |
| `source-fetch-check --coverage` (gate mode) | 6/6 fetch-verified, exit 0 |
| Six sources re-downloaded this session, bytes and sha256_16 vs stamps | 6/6 exact match |
| `step1-decisions check --run` | closed (all batch-6 records ready) |
| `step3-decisions check --run --phase scope` before this decision | this pair listed `current scope review required` |
| `item-dependency-levels check --run` | exit 0; 892 items, no batch-6 error |
| Design-to-manifest diff (BG-12 L609–636) | 9/9 A and 4/4 B designed ids present, kinds match; 14 A local additions |
| B-example and strategy re-computations | all stated values reproduced under the frozen conventions |

Limitations: this is a scope review, not a proof audit. All 27 items are
unauthored scaffolds, so every proof obligation stands for Step 3b; I did not
re-audit published proofs behind the suppliers beyond their statements and
hypotheses; and the two numerical/symbolic checks reported above were made
with purpose-built exact-rational computations on the scaffold's own relations
for `n\le4`, not as a general proof.

## Scope decision

**sufficient** for `hecke-markov-traces-and-polynomial-link-invariants` at the
current pair scope hash: the 23 A and 4 B items realize the BG-12 design
item-for-item (all thirteen designed ids present with designed kinds) plus
exactly the local prerequisites the proof routes require; the six coverage
sources are byte-verified and read at the statements carrying the pair's
claims; every item dependency and page `requires` resolves to a published item
or an in-run supplier earlier in the run; and both intended consumer pages
(batch 10 and batch 11) draw on interfaces this pair provides. No topic or
result promised by the design is omitted, so no enrichment of subject matter,
no pair merger and no split is requested. Three items need owner attention
before or during Step 3b: the confirmed split-union prerequisite (finding 1)
should be added to this A page as a supplier clause for the two consuming
items; the TL item's rescaled-relation and non-descent claims (defects 1–2) are
false as written and need an owner-authorized statement repair; and the
coefficient-ring universal property, the Stacks index and the two wording
items (defects 3–5) are minor statement repairs. Any scaffold edit changes the
scope hash, so the owner should record `proceed`/apply the repairs and the
scope decision must then be refreshed. Step 3b authoring of the remaining
items may proceed under this scope; nothing here is item approval.
