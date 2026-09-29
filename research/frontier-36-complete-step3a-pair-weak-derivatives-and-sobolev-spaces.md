# Step 3a scope review — weak-derivatives-and-sobolev-spaces

- Run: `frontier-36-complete` (batch 30), role alpha, label
  `step3a-pair-weak-derivatives-and-sobolev-spaces-966f8e5fd68c7d11`.
- A page: `weak-derivatives-and-sobolev-spaces` (order 458.019, PDE, 19 items,
  dependency levels 0–7).
- B page: `weak-derivatives-and-sobolev-spaces-examples` (order 458.02, 7
  items, levels 4/5/8); companion pointers agree A↔B and the B page requires
  only its A page.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope`, bound to the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest, page or ledger edit.

## Evidence read

- `research/frontier-36-complete-batch-30.pages.json`: A = 19 items in the
  designed order (regular-distribution dictionary; weak derivative; null-set
  independence; uniqueness; classical agreement; linearity/locality/
  commutation; smooth-factor Leibniz; `W^{k,p}` definition and norm; norm
  well-definedness; Banach completeness; `H^k = W^{k,2}` and reserved
  `H^k_0`; Hilbert inner product; weak stability under local `L^p` limits;
  ACL representative definition; ACL characterisation of `W^{1,p}`; one-
  dimensional AC representatives; `C^1`/bounded-derivative chain rule;
  `u^\pm`, `|u|`, truncation calculus; distributional-derivative dictionary).
  B = the 7 designed examples (|x|; Heaviside step; sharp radial power;
  matching piecewise `C^1`; hypersurface jump; no point values; clipped affine
  zero region). Every item has an explicit `deps` array and
  `dependency_level`; `manifest-deps.mjs` reports 26 items, 0 errors.
- `research/frontier-36-complete-batch-30.coverage.json`: 2 pages, 70
  harvested rows; 5 page-source entries (3 on the A page: Kinnunen, Hunter,
  Brezis; 2 on the B page: Kinnunen, Hunter), each with `fetch_verified`
  stamps. `coverage-checklist.mjs`: 2 pages, 70 harvested results, 0 errors,
  0 warnings.
- `research/frontier-36-complete-batch-30.notes.md`: Step-1 evidence, the
  Countable-Choice/AC audit, the 33 published direct out-of-batch suppliers
  (I rechecked all 33 exist in `items/` with `status: published`; 0 missing,
  0 unpublished), and the 26/26 `ready` Step-1 records (verified; no missing
  or non-ready record).
- `research/frontier-36-complete-batch-30.cross-batch-dependencies.json`
  (owned content `[]`); a run-wide scan of all 30 batch manifests found
  exactly one cross-batch item edge into this pair: batch 13's
  `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`,
  whose `deps` name exactly `def-sobolev-space-wkp-and-its-norm`,
  `lem-weak-derivative-is-independent-of-lp-representatives`,
  `lem-weak-derivatives-are-unique-almost-everywhere`,
  `lem-sobolev-norm-is-well-defined-and-definite` — all present in the A
  inventory.
- Prose design: `research/plan-pde-track.md` §PDE-11 (lines 1288–1357:
  A list 1296–1318, B list 1320–1328, source architecture 1330–1357), track
  rows 46, 2515–2516, 2536, plus the downstream PDE-12/PDE-13/PDE-14 designs
  (lines 1345–1526) that consume this page. Plan rows
  `research/plan-spec.json` 458.019/458.02 (`requires` as in the manifest,
  canonical item arrays still empty).
- Drift: `research/frontier-36-complete-drift-evidence.json` entry for the A
  page (declared `requires` = manifest `requires` =
  `distributions-test-functions-and-differentiation`,
  `hilbert-space-geometry-and-riesz-representation`, both published);
  `research/frontier-36-complete-alpha-step1-drift.md` lines 82–90 record
  **no-drift** with the owner's post-review note that the wave-energy edge
  was only track order and is removed.
- Owner decisions: `research/frontier-36-complete-owner-authoring-direction.md`
  (batch 30 supplies weak derivatives, uniqueness on equivalence classes,
  `W^{k,p}` and `H^k = W^{k,2}` for the Bessel-potential and Fourier-
  multiplier consumers; no reliance on unbuilt wave-energy results) and
  `research/frontier-36-complete-operator-record.md` (the pair was added at
  Step 1; the owner then added its four exact item IDs to batch 13's
  integer-order theorem). `research/frontier-36-complete-batch-13.notes.md`
  records the same consumer chain; the batch-13 inputs show the four edges
  as open rows awaiting this supplier.

## Scope against the prose design

The manifest carries the design item-for-item: all 19 designed A rows and all
7 designed B rows, in the design's order, with the design's stated meanings
(definition of the general multi-index weak derivative; uniqueness as an
`L^1_loc` class before any notation denotes a class; `W^{k,p}` for
`k∈ℕ₀`, `1≤p≤∞` with the displayed finite-sum/max norm; `H^k` and the
reserved `H^k_0`; ACL with one simultaneous representative and transparent
exceptional-set quantifiers; `C^1`-with-bounded-derivative chain rule with
the global integrability condition; truncation identities including the
level-set zeros). No designed row is dropped, weakened, moved or duplicated,
and no undesigned subject matter was added. The design's own hard obligations
are local to the pair (completeness passes the weak identity to the
componentwise limit; ACL uses completed-product Fubini; the chain rule uses
the ACL representative rather than the later PDE-12 page; corner maps use
monotone smooth approximants with weak stability), so the pair is
self-contained over published suppliers and creates no forward reference.

One design/plan nuance, not a scope gap: the PDE-11 prose header lists broad
track names (`MT-8`, `MT-11`, `MT-14–MT-16`, `FA-1`, `FA-7`, `FA-10`,
`FA-24`, `mixed-partials-taylor-and-extrema`) and then says the single-frontier
build's direct requires are "named in `plan-spec.json`". The plan's page-level
`requires` is only the two published pages above. The binding item-level
dependencies resolve this: the 33 external IDs live on 12 published pages
(distributions; complex `L^p`; `L^p`/Hölder/Minkowski/Riesz–Fischer;
density/convolution/mollifiers; product measures/Fubini; Lebesgue measure;
the Lebesgue integral; absolute continuity and FTC; mixed partials; Hilbert
space geometry; countability; relations/quotients), which is the intended
published input set. The drift reviewer already recorded this as no-drift
with the owner's post-review note; I re-verified the individual suppliers are
published and that the ACL/mollifier/Fubini/CChoice interfaces the design
names are the ones actually depended on.

## Source coverage

I re-fetched all three primary treatments; byte sizes and SHA-256 prefixes
reproduce the coverage's Step-1 stamps exactly: Kinnunen 781,233 bytes /
`255f17a2dd431f95a188be5b…` (168 pp.); Hunter 1,597,256 bytes /
`0dbade1806f7a1ea…` (242 pp.); Brezis 2,608,077 bytes /
`1575d1bf37916451…` (614 pp.). I located (PDF page units) and read the cited
results:

- Kinnunen, *Sobolev Spaces*: Definition 1.2 (weak derivative), Definition
  1.8 (`W^{k,p}`), Lemma 1.14 (algebra, locality, commutation, smooth-factor
  Leibniz), Theorem 1.15 (Banach completeness, `1≤p≤∞`), Lemma 2.1 with
  Remarks 2.2 (chain rule for `f∈C¹`, `f'∈L^∞`; local and `p=∞` versions),
  Theorem 2.3 with Remarks 2.4 (positive/negative parts, level-set vanishing
  gradient), Theorem 2.34 and Theorem 2.36 (AC integral representation;
  Nikodym ACL characterisation with classical derivatives equal weak
  derivatives a.e.), Examples 1.7, 1.10, 1.13.
- Hunter, *Notes on PDE*: Definitions 3.1–3.2, Examples 3.3–3.5 (corner;
  step derivative has no `L¹_loc` representative; Cantor function),
  Propositions 3.16–3.17, Theorems 3.19–3.20 (stability under `L¹_loc`
  limits), Definition 3.23 (`W^{k,p}`, `H^k`, Banach claim, Hilbert inner
  product).
- Brezis, *Functional Analysis, Sobolev Spaces and PDE*: Proposition 8.1
  (`W^{1,p}` Banach for `1≤p≤∞`; reflexivity `1<p<∞`; separability
  `1≤p<∞`), Lemmas 8.1–8.2, Theorem 8.2 (unique continuous/AC
  representative with `u(x)−u(y)=∫_y^x u'`).

The three declined source rows are reasoned and I agree with the
dispositions: Hunter Example 3.5 (Cantor function) is a genuinely different
obstruction (a.e.-differentiable, non-AC; BV side of the line, and the
published `bounded-variation-and-riemann-stieltjes` page owns that
comparison); Brezis Proposition 8.1(b)–(c) reflexivity/separability are
separate structural results — I checked the selected consumers, and none
needs them (batch 13 uses smooth density, not separability of `W^{k,2}`; the
planned PDE-18 difference-quotient theorem uses weak compactness in `L^p`
for the difference quotients, not reflexivity of `W^{1,p}`); Hunter
Proposition 3.16 is already the A-page smooth-factor Leibniz item, so its
B-page exclusion is correct.

Two coverage-label precision notes, not scope losses: the B radial-power
example extends Kinnunen Example 1.10 (stated for `n≥2`) to `n≥1`; the
`n=1` threshold `p(a+1)<1` follows from the declared one-dimensional
AC/FTC route and is elementary. The matching-piece example generalises
Kinnunen Example 1.7 / Hunter Example 3.3 (one-dimensional corner) to
piecewise `C¹` pieces meeting along a coordinate hyperplane in `n≥2`; the
n-dimensional statement is standard and its Fubini and classical-agreement
inputs are declared. Neither affects the scope decision; statement-level
fidelity remains Step 3b's obligation.

## Role in the library

Within the run the pair is a supplier only: the single consumer is batch 13's
integer-order Fourier/Sobolev comparison, which uses exactly the
`W^{k,2}`/uniqueness/norm interface named above. The B page is a leaf
requiring only its A companion, matching the binding leaf invariant, and no
other in-run pair requires either page. Outside the run the A page is the
planned supplier for PDE-12 (approximation/extension), PDE-13 (traces) and
PDE-14 (inequalities), and for the Fourier FR-6 and complex-analysis
CA-QC-1/2, SC-6 pages; each of those designs builds its own approximation,
trace, embedding or multiplier layer on the definitions and calculus proved
here, and none of the designed consumptions needs a claim this pair omits.
In the published corpus, the distributions page's published remark
`rem-sobolev-weak-derivatives-belong-to-pde` explicitly hands the Sobolev
track to PDE and asserts nothing itself; no published item references the 26
new IDs, the canonical ledger has no entry for this pair, and the only
pre-existing "weak derivative" items (`def-periodic-ltwo-weak-derivative` and
its Fourier-coefficient consequence on `absolute-convergence-and-the-wiener-
algebra`) are an independent circle definition, so there is neither
duplication nor a stale consumer to repair from this pair.

## Uncertainty and observations for the owner

1. **Design "Requires" prose vs plan.** The PDE-11 prose header is broader
   than the two-page `requires` on the plan row (see above). The mathematics
   needed is present at item level and the drift gate passed no-drift; if the
   owner wants the prose reconciled to the plan wording, that is a
   documentation edit, not an enrichment.
2. **Declined structural results.** Reflexivity/separability of `W^{k,p}` and
   the Cantor-function example are recorded out-of-scope with reasons that I
   checked against the selected consumers. Should the owner want them in the
   library, they are enrichment, a new pair or a later page's local work —
   not an adequacy gap here; the published refinement machinery
   (`thm-closed-subspaces-of-reflexive-spaces-are-reflexive`,
   `ex-reflexivity-of-ell-p-and-lp`) would let a later PDE page derive
   `W^{k,p}` reflexivity from a closed-subspace argument. My reading of the
   planned PDE-18 difference-quotient item is that it uses weak compactness of
   the `L^p`-bounded difference quotients rather than reflexivity of
   `W^{1,p}`; I did not verify that future page. Likewise, the
   `n`-dimensional "`Du=0` a.e. on a connected domain implies constant"
   corollary and the `W^{1,p}∩L^∞` product rule are neither designed nor
   consumed; PDE-14's Poincaré–Wirtinger item carries its own connectedness
   argument.
3. **Coverage-label precision.** The two example generalisations in the
   previous section should not be re-advertised in later reviews as
   verbatim source statements; the sources back the 1-D corner and the
   `n≥2` radial power respectively.
4. Proof correctness, statement-by-statement source fidelity, dependency
   minimality, choice accounting and item hash decisions were not judged
   here; those belong to Step 3b and Step 5. No potentially defective
   published item surfaced in the load-bearing supplier set inspected.

## Scope decision

The planned definitions, results and examples cover the intended subject
adequately: the weak derivative on `L¹_loc` with its uniqueness, classical
agreement and full smooth-factor algebra; `W^{k,p}` with a well-defined norm,
Banach completeness and the `H^k` Hilbert structure; the ACL/one-dimensional
AC characterisation; the chain and truncation calculus; and the
distributional dictionary — with a companion page of sharp positive and
negative examples. Every designed row is present, the source backing is
fetch-verified and independently re-read at the cited results, all 26 Step-1
records are `ready`, all 33 external dependencies are published, the single
in-run consumer edge is satisfied by four present items, and the B page is a
proper leaf. Recorded: **sufficient**.
