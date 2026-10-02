# Step 3a scope dispatch — `logarithmic-potential-capacity-and-riesz-decomposition`

- Run: `frontier-37-owner-30`; role alpha; label
  `step3a-pair-logarithmic-potential-capacity-and-riesz-decomposition-f1c74adc8d7c0910`.
- Pair: A `logarithmic-potential-capacity-and-riesz-decomposition` (order 833)
  / B `logarithmic-potential-capacity-and-riesz-decomposition-examples`
  (order 834), batch 24, category `complex-analysis`.
- Reviewed 2026-09-30. Owned pair only; no scaffold, manifest, item, coverage,
  plan or owner record was edited. This report and the scope-review receipt
  are the only artifacts written.
- Decision: **insufficient** — one material omission (F1 below). Everything
  else the A and B manifests plan matches the prose design, the pair's own
  source coverage and its role in the library.

## Evidence read

- **Prose design (controlling).** `research/plan-complex-analysis-track.md`
  §CA-PT-1 (L3638–3683): item table L3646–3663 (12 A items), companion list
  L3665–3666, sources/proof strategy L3668–3676, scope denial of
  Wiener/Kellogg/fine topology L3677–3678. Normative coverage harvest in the
  same file: L4717–4723 (Saff §§1–3 heading dispositions) and L5763–5768
  (M.2 binding CA-PT-1 B list); M.1 insertion L5426–5428. Summary-row
  statement of the pair's subject at L495–496.
- **Manifests/plan.** `research/frontier-37-owner-30-batch-24.pages.json`
  (A: 19 items with statements and deps; B: 6 items), `research/plan-spec.json`
  L833/834 (empty item lists, orders/companion/requires agree),
  `research/frontier-37-owner-30-scope-ledger.json` (both pages batch 24),
  `research/frontier-37-owner-30-batch-24.cross-batch-dependencies.json` (`[]`).
- **Source coverage.** `research/frontier-37-owner-30-batch-24.coverage.json`:
  61 harvested results over four verified full texts — Saff
  (arXiv:1010.3760, 36 pp.), Khoruzhenko (44 pp.), Kuehn (arXiv:0804.4689,
  38 pp.), Frerick–Müller–Thomaser (arXiv:2209.05439, 14 pp.); every URL has
  a `text-read` record and no source drop. I re-fetched Saff and Khoruzhenko
  and read the relevant passages directly (below), because the disposition of
  Saff §1 was the deciding question.
- **Owner decisions.** `research/frontier-37-owner-30-operator-record.md`
  (batch-24 escalation repairs; the owner recertified the compact/Fσ polar,
  domination and Green-uniqueness items); item receipts
  `research/frontier-37-owner-30-step1-{lem-compact-polar-sets-and-subharmonic-minus-infinity-loci,thm-principle-of-descent-and-domination,thm-green-function-from-equilibrium-potential}.json`
  are owner `ready`; the other 22 batch-24 receipts are `ready`. No owner or
  review scope receipt existed for this page before this review.
- **Spoken-with sources (independent check).** E. B. Saff, *Logarithmic
  Potential Theory with Applications to Approximation Theory*, §1, printed
  pp. 167–178 (PDF pp. 3–14), read in full for this review; Khoruzhenko,
  *Potential Theory* notes, §5 (PDF pp. 40–44). Corroborating statement of the
  classical triad in Mhaskar–Saff, "Weighted analogues of capacity, transfinite
  diameter and Chebyshev constant", *Constr. Approx.* 8 (1992), p. 105.

## What the planned pair covers (correct as scaffolded)

- The 12 designed A items (potentials/energy and conventions; capacity/Robin
  constant; lower semicontinuity and representative-independence; equilibrium
  existence and uniqueness; polar sets and quasi-everywhere; Frostman;
  descent and domination; Riesz measure; Riesz decomposition; Green function
  at infinity from the equilibrium potential; Fekete points/transfinite
  diameter; capacity = transfinite diameter) are all present in the manifest
  with the designed content.
- The design's one mandatory A insertion (M.1: zero-mass energy nonnegativity
  with equality only for the zero measure, before equilibrium uniqueness) is
  present as `lem-logarithmic-energy-strict-positivity-for-zero-mass-charges`,
  placed immediately before equilibrium uniqueness.
- Six further A items are local proof support added by the scaffold
  (strict positivity; potential maximum principle; Riesz measure is a positive
  Radon measure; distributional Laplacian of a potential; compact-polar
  equivalence; infinity-pole Green definition; Fekete monotonicity). Each has
  at least one consumer inside the pair (checked directly), and the design's
  proof strategy names these steps; no designed claim was dropped to make room.
- The six B examples cover the design companion list exactly in substance:
  disc capacity and circular equilibrium measure; interval capacity and
  arcsine measure; finite/countable polar sets; Cantor-set capacity contrast;
  Riesz measure of `log|f|` as the zero divisor; infinity-pole Green function
  of a circular conductor.
- Role in the library: all seven A-page `requires` pages are published
  (`subharmonic-functions-and-the-dirichlet-problem`, `product-measures-and-…`,
  `radon-measures-and-…`, `banach-alaoglu-…`, `distributions-…`,
  `fundamental-solutions-newtonian-potentials-and-green-functions`,
  `green-functions-harmonic-measure-and-conformal-invariance`); the two
  planned consumers (`extremal-length-and-planar-quasiconformality` §CA-QC-1,
  `quasisymmetry-welding-and-conformal-removability` §CA-QC-3) use capacity,
  polar-set and Green-function interfaces that the pair supplies; the design's
  R-2 cross-link to the PDE fundamental-solution items is present in
  `lem-logarithmic-potential-distributional-laplacian`'s dependencies. The
  design's explicit scope denials (Wiener criterion, Kellogg property, fine
  topology; no non-Borel polar equivalence) are respected by the statements.

## F1 (material) — the Chebyshev constant and Saff's fundamental theorem are not planned anywhere

The design's **normative** harvest assigns the whole of Saff §1 to this A page:

> **Saff, §§1–3.** "Transfinite diameter, logarithmic capacity, and Chebyshev
> constant" → `I(CA-PT-1)` (polynomial Chebyshev applications `B`);
> (`research/plan-complex-analysis-track.md` L4717–4719)

and the CA-PT-1 source sentence repeats the same section title (L3668–3670).
Saff §1 is printed pp. 167–178 and is titled "Transfinite Diameter, Capacity,
and Chebyshev Constant"; its abstract advertises Fekete points, capacity and
the Chebyshev constant as the three notions. Read in full for this review, it
contains, after the material the scaffold did harvest (up to Frostman,
Theorem 1.12, p. 174):

- Proposition 1.13 (reciprocity inequality `inf_{z∈E} U^σ(z) ≤ V_E`, p. 175);
- the monic extremal problem `t_n(E)=min_{p∈P_{n−1}}‖z^n+p(z)‖_E`, the
  extremal (Chebyshev) polynomials `T_n` of `E`, and the definition
  `cheb(E) = lim_n t_n(E)^{1/n} = inf_k t_k(E)^{1/k}` (1.18, p. 175);
- Lemma 1.14 (`‖p_n‖_E ≥ cheb(E)^n`, p. 175) and Examples 1.15–1.17
  (disc: `T_n=z^n`, `cheb=R`; `[−1,1]`: `T_n=2^{1−n}cos(n arccos x)`,
  `cheb=1/2`; Fekete polynomials `F_n=z^n−1` on the unit disc, asymptotic
  optimality), pp. 176;
- **Theorem 1.18 (Fundamental Theorem of Classical Potential Theory)**, p. 176:
  (a) `cap(E) = τ(E) = cheb(E)` for every compact `E`; (b) Fekete polynomials
  are asymptotically optimal for the Chebyshev problem; (c) Fekete points
  distribute as `µ_E`; (d) `|F_n(z)|^{1/n} → exp(−U^{µ_E}(z))` on compacta of
  the exterior — with the complete proof on pp. 176–178 using Proposition 1.13
  and Lemma 1.14.

The scaffold plans none of this. `thm-logarithmic-capacity-equals-transfinite-diameter`
states only `cap(K)=τ(K)` (plus Fekete-measure convergence, i.e. 1.18(c));
`def-fekete-points-and-transfinite-diameter` defines only `δ_n` and `τ`. There
is no definition of `t_n`, `T_n` or `cheb`, and no item combining capacity with
the Chebyshev constant. The omission is visible in the coverage record itself:
its Saff locator is "§1, **Lemma 1.1 through Theorem 1.12**, printed pp.
168–174" (`…-batch-24.coverage.json` source 1, `locator`), so the harvest
stopped before printed p. 175; no entry exists for Proposition 1.13, Lemma 1.14,
Examples 1.15–1.17 or Theorem 1.18. The only Chebyshev entry anywhere in the
coverage disposes Saff Example 1.3 (Chebyshev nodes for `[−1,1]`) as
"out-of-scope … belong to a separate approximation-theory page", which both
contradicts the harvest line's `B` assignment and names a home that does not
exist: `research/plan-spec.json` contains no approximation-theory/Chebyshev
capacity page (the only Chebyshev-titled planned page is the number-theoretic
`chebyshev-bounds-and-mertens-theorems`), and a repository search finds
"Chebyshev constant" / "transfinite diameter" only in
`research/plan-complex-analysis-track.md`. The published approximation items
(`thm-chebyshev-minimax-monic-polynomial`, etc.) treat monic minimax on
`[−1,1]` only and do not define `cheb(E)` or state Theorem 1.18. Khoruzhenko's
notes, the pair's other general source, never introduce the Chebyshev constant
(its §5 Theorem 59 is `cap = τ` only). So if this pair closes as scaffolded,
the third classical characterization of capacity, and the named fundamental
theorem that unifies the three, are lost from the library.

**Recommended owner action (enrichment of this pair; minimal form).**

1. A page, before or beside the Fekete material:
   `def-chebyshev-constant-compact-set` (definition) — `t_n(K)` as the infimum
   of the sup norm over monic degree-`n` polynomials, subadditivity of
   `log t_n`, `cheb(K):=lim t_n(K)^{1/n}=inf_k t_k(K)^{1/k}`. Saff asserts
   existence/uniqueness of the extremal monic `T_n` when `cap(K)>0`; an author
   must either prove that (e.g. by compactness plus uniqueness of best
   approximation) or define `cheb` from the infimum and leave uniqueness as an
   optional remark. Deps: `def-fekete-points-and-transfinite-diameter` and the
   real polynomial/sup-norm items.
2. A page: either extend
   `thm-logarithmic-capacity-equals-transfinite-diameter` to
   `cap(K)=τ(K)=cheb(K)` (keeping its Fekete-measure convergence), or add
   `thm-chebyshev-constant-capacity-and-transfinite-diameter-agree` covering
   Saff 1.18(a)–(b). Its route needs Proposition 1.13 (reciprocity) and
   Lemma 1.14 in addition to what the pair already proves; those should be
   stated as part of the item's proof or as one supporting lemma.
3. B page (the harvest's "polynomial Chebyshev applications `B`"), one example:
   `ex-chebyshev-polynomials-and-capacity` — disc of radius `R` (`cheb=R`),
   `[−1,1]` (`cheb=1/2`), and Fekete polynomials `F_n=z^n−1` on the unit disc
   with `‖F_n‖=2`, `lim‖F_n‖^{1/n}=1=cheb` (Saff Examples 1.15–1.17).
   Note this conflicts with the design's M.2 binding CA-PT-1 B list
   (L5763–5768), which has no Chebyshev item; the owner should amend the
   inventory explicitly rather than leave the harvest line un-homed.

The coverage record will also need the corresponding dispositions
(Proposition 1.13, Lemma 1.14, Examples 1.15–1.17, Theorem 1.18; corrected
§1 locator; corrected reason for Example 1.3) before Step 3b closes.

**Alternative owner disposition.** The design's per-page item table alone
(L3646–3663) omits the Chebyshev constant, so the owner may judge the item
table controlling and keep the current scope. That is a scope decision only
the owner can make; if taken, it must be recorded as `proceed` for the current
scope with a named future home for `cheb(E)` (none exists in the 1,624-page
plan today) and with the coverage reason corrected. I do not choose between
enrichment and exclusion here, but the omission itself is real and is currently
invisible in every record except the design's harvest line.

## Record observations (not the basis of the decision)

- **O1. B-page id drift.** Five of the six B item ids/titles differ from the
  design's M.2 binding list (L5763–5768): the design's disc+interval and
  circle items are re-partitioned as disc/circle and interval, and the polar,
  Cantor and Green ids are renamed; the mathematical content maps 6↔6.
  Splice-stage reconciliation, not scope loss.
- **O2. A-page inventory growth.** The manifest carries 19 A items against the
  design's binding 12 + 1; the six extra items are consumed inside the pair
  (O2's list above). No promised claim is missing or narrowed.
- **O3. Source backing.** The pair-backing matrix (L4962) requires Khoruzhenko
  §§1–5 and Saff §§1–3 for this pair; both were read in full-text and are the
  coverage's main sources. Schlag Ch. 9 and Bishop Ch. 1 §2 were not used, and
  Bishop's §2 is in any case unusable for `cap=e^{−V_K}` without translation:
  it defines `cap(E)=sup{‖µ‖ : U^µ ≤ 1 on E}` with
  `γ(E)=1/cap(E)−log 2`. No scope loss.
- **O4. Coverage-ledger gaps owned elsewhere.** Saff §2.1–2.3 (mean-value
  characterisation, max/min principle, superharmonic definition) are not
  listed in the coverage record, though the design disposes them to
  `I(CA-14/CA-PT-1)` and they are published on CA-14. Record-only.
- **O5. State checks.** Batch-24 cross-batch dependencies are `[]`; all seven
  prerequisite pages are published; the three formerly escalated batch-24
  items carry owner `ready` receipts made after the recorded repairs.

## Limits of this review

Scope only; I did not re-prove any manifest item and make no claim about proof
correctness. The insufficiency rests on the design's normative harvest
disposition plus the primary source: I read Saff printed pp. 167–178 (the
complete §1, including the full Theorem 1.18 proof) and Khoruzhenko §5 in
fetch, so Theorem 1.18(a)–(b) and the absence of `cheb` from the other sources
are verified, not inferred. If the owner reads the CA-PT-1 per-page item table
as exhaustive of the subject (i.e. treats approximation-theoretic capacity
quantities as out of scope), the correct closing record is an owner `proceed`
with a named home, not a `sufficient` review that leaves the harvest line
un-homed.

## Receipt

`node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30 --page
logarithmic-potential-capacity-and-riesz-decomposition --decision insufficient
--reason "…"` →
`research/frontier-37-owner-30-step3a-review-logarithmic-potential-capacity-and-riesz-decomposition.json`
