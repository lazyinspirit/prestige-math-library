# Step 3a scope review — pair `uncertainty-principles-for-fourier-analysis`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-uncertainty-principles-for-fourier-analysis-5b2b01fddb34070f`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `uncertainty-principles-for-fourier-analysis` (batch 30, order
  510.06511, category `fourier-analysis`, 16 items: 1 definition, 7 lemmas,
  1 corollary, 4 theorems, 3 remarks)
- B page: `uncertainty-principles-for-fourier-analysis-examples` (batch 30,
  order 510.06512, `requires` only the A page; 5 items: 3 examples,
  2 counterexamples)
- Decision: **`sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
  --page uncertainty-principles-for-fourier-analysis --decision sufficient`
  (receipt `research/frontier-39-analysis-30-step3a-review-uncertainty-principles-for-fourier-analysis.json`)
- Date: 2026-10-05.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
plan or engine artifact was edited; the only writes are this report and the
scope receipt.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-fourier-analysis-track.md` FR-20 at
lines 1411–1453 — the A inventory at lines 1424–1437, the B leaves at lines
1443–1447, the declared requirements at lines 1413–1417, the sources-read
line at lines 1419–1420, the hard obligations at lines 1449–1453, the
source-table row at line 332, and the canonical crosswalk rows 52–55 at lines
1523–1526. Supporting records: the `requires` arrays and empty item lists of
`research/plan-spec.json` pages 510.06511/510.06512 (the plan controls and
adds no inventory), the batch-30 manifest and coverage
(`research/frontier-39-analysis-30-batch-30.pages.json`,
`…-batch-30.coverage.json`), the batch-30 notes
(`…-batch-30.notes.md`), and the 8 cross-batch rows in
`…-batch-30.cross-batch-dependencies.json`.

Intended subject, as the design defines it: the Euclidean uncertainty
principles that fit the Fourier track's seam — (i) the probability-normalised
spatial/frequency centres and variances with the translation–modulation
centring reduction; (ii) the Heisenberg inequality, whose sharp version and
equality classification remain owned by the published FA-23 theorem, with the
local coordinate core and the summed $n$-dimensional corollary; (iii) the
support-measure product bound $|E||F|\ge1$ and the qualitative compact-support
dichotomy through entire continuation and the identity theorem; (iv) Hardy's
Gaussian uncertainty theorem at the exact threshold $ab=1$ with its complex
growth rigidity lemma and subcritical-sharpness witnesses; (v) the finite
$\mathbb Z/N\mathbb Z$ support-product bound in the unitary normalisation;
and (vi) comparison remarks making the inequivalence of the variance,
support-measure and Gaussian-decay notions explicit.

Role in the library: the pair is the final Fourier-track pair (order
510.06511/.06512) after FR-18, and it is a leaf of the current architecture —
no other page in this run's 60 page manifests references any of its items, and
the published library's only uncertainty item is FA-23's
`thm-heisenberg-uncertainty-inequality`, which this pair cites and deliberately
does not re-mint. Its declared prerequisites are published FA-23
(`schwartz-space-and-the-plancherel-theorem`), published CA-6
(`the-identity-theorem-and-the-open-mapping-theorem`, which carries the
identity theorem and the boundary-and-infinity maximum principle the Hardy
route consumes) and the in-run FR-18 page.

## 2. Design coverage

Every id named by the FR-20 design is present in the batch-30 manifest under
the same id, with the same kind:

- A page, 14/14 designed ids (design rows lines 1424–1437):
  `def-spatial-and-frequency-centres-and-variances`,
  `lem-centering-by-translation-and-modulation-preserves-the-variance-product`,
  `lem-position-derivative-commutator-estimate`,
  `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`,
  `cor-dimensional-heisenberg-uncertainty-inequality`,
  `thm-support-measure-uncertainty-inequality`,
  `lem-compact-support-gives-an-entire-fourier-laplace-transform`,
  `thm-qualitative-compact-support-uncertainty-principle`,
  `lem-hardy-entire-growth-rigidity`,
  `thm-hardy-gaussian-uncertainty-principle`,
  `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`,
  `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`,
  `thm-finite-dft-support-product-uncertainty`,
  `rem-uncertainty-principles-measure-different-notions-of-localisation`.
- B page, 5/5 designed ids (design rows lines 1443–1447):
  `ex-gaussian-attains-heisenberg-equality`,
  `cex-finite-variance-is-not-the-same-as-compact-support`,
  `ex-hardy-critical-and-subcritical-gaussian-regimes`,
  `ex-finite-dft-delta-and-constant-extremisers`,
  `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one`.

Two non-design items are local additions, justified in the batch notes
(`…-batch-30.notes.md`, conflict note 5) and needed by the design's own rows:

1. `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform` — design
   row 7 covers only compact support, while item 10 complexifies the transform
   under a Gaussian bound (Sheagren Lemma 5.1; verified below).
2. `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` — used by the
   qualitative-support theorem and by the $n$-dimensional Hardy induction to
   pass from vanishing on a real slice to the zero function.

Total inventory: 16 A + 5 B = 21 items. The design's hard obligations (lines
1449–1453) are preserved by the scaffolded statements: the variance definition
requires a nonzero $f$ with finite second moments; the uncentred form is never
called a variance statement (the centring lemma item 2 precedes the corollary
and no variance-product identity is asserted before it); Hardy's equality and
supercritical cases use the exact $ab=1$ normalisation, whose equivalence to
Sheagren's $\alpha\beta=\pi^2$ and FM's $ab>1/4$ I re-derived from the two
transform conventions (section 3); and the finite theorem is stated for
$N\ge1$ with $N=1$ as an equality case, not an exception.

Recorded design deviations (all in the batch notes; none drops or weakens a
normative claim of the design except the item 3/5 domain, below):

- the FA-23 Heisenberg theorem is published only on a B page, so the design's
  declared supplier cannot receive a `deps` edge; the scaffold cites it in the
  remark and proves the local corollary itself (conflict 1; section 4);
- the design's crosswalk rows 52–55 misattribute Sheagren's sections and
  contents; the manifest re-sources the support-measure and finite items
  (conflict 2; section 3, verified);
- item 9's proof route is recorded `ai-altered` (Tao/Lindell sector argument)
  rather than the design's `literature-derived` (conflict 3);
- items 3 and 5 are stated on the Schwartz domain $\mathcal S(\mathbb R^n)$
  rather than the design's "stated Sobolev/moment domain"; the batch note
  records the reason (the published general-domain ACL route assumes AC,
  against the track's choice ledger; Schwartz suffices for the Gaussians and
  matches FA-23's domain) (conflict 4).

The item 3/5 domain narrowing is the one substantive statement deviation. It
does not remove any planned subject: the pair's declared Heisenberg owner
(FA-23's published theorem) is itself stated on $\mathcal S$, no consumer in
the run needs the wider domain, and the deviation is recorded rather than
silent. I flag it for the owner in section 5 as a possible enrichment, not as
a scope loss, since scope review compares planned subjects and results and the
planned subject (the variance/Heisenberg complex) is fully scaffolded.

## 3. Source coverage

The A page records 6 source rows and the B page 6 source rows, all
`fetch_verified` except the UPC thesis, which is a documented drop
(`source_resolution` with six recorded HTTP 418 attempts, alternative
treatment Tao arXiv:math/0308286, `confidence: certain`).

Dispositions over the 106 harvested results:

- A page, 55 harvested: 18 `included`, 8 `inline`, 14 `already-published`,
  15 `out-of-scope`.
- B page, 51 harvested: 17 `included`, 4 `inline`, 13 `already-published`,
  15 `out-of-scope`, 2 `deferred` (both to the in-run FR-18 page).

Every decline carries a source-specific reason; `coverage-checklist
--require-destination` reports 0 errors and only the two advisory
`coverage-low-yield` warnings (18/55 and 17/51), which I confirm are expected:
27 of the declines are `already-published` FA-23/CA-6 interface rows, and the
remaining declines are genuinely outside the pair's promised subject
(Morgan's $L^p$ rates, Cowling–Price integral-condition Hardy, the dynamical
Schrödinger versions and their heat-kernel proof, Benedicks' stronger
qualitative theorem, Nazarov's refinement — which the source states without
proof —, the abstract commutator/operator formulation, the torus variants,
Tao's prime-order additive-combinatorics refinement, and Tao's weak
non-sharp real-variable Hardy theorem). None of these is a design row and none
is needed by any consumer.

Independent source re-verification (fetched this session; hashes matching the
coverage's `fetch_verified.sha256_16`):

- Sheagren, `https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf`,
  sha256-16 `ebd60a7b0622f00f`. Contents are §1 transform, §2 Plancherel, §3
  Heisenberg, §4 complex analysis (Phragmén–Lindelöf), §5 Hardy and
  applications: §3 equations (3.3)–(3.7) are exactly the centring reduction
  and (3.8)–(3.12) the integration-by-parts core; §5 Lemma 5.1 is the entire
  transform under an exponential bound, Theorem 5.2 the $\pi$-normalised
  Hardy theorem and Corollary 5.3 the $\alpha\beta=\pi^2$/$\alpha\beta>\pi^2$
  statement. The paper contains **no** support-measure and **no** finite-DFT
  uncertainty section, so the design's crosswalk attribution of rows 52–55 to
  Sheagren is wrong and the manifest's re-sourcing (support measure from
  Laugesen ch. 24, finite from Tao §1 and Taylor §11) is correct.
- Laugesen, `https://arxiv.org/pdf/0903.3845`, sha256-16
  `b1ef00490b91e492`. Chapter 24 "Uncertainty principles" sits at printed pp.
  141–146 and contains Proposition 24.1 (qualitative principles, with the
  torus part 24.1(a) correctly declined), Theorem 24.2 (Benedicks, correctly
  declined as stronger than the retained product bound), Theorem 24.4/Example
  24.5 (commutator route, declined in favour of the direct coordinate proof)
  and Remark 24.6 (equality, direct proof, higher dimensions, torus). The
  design's "sources read ... L chs. 14–15, pp. 79–90" line conflicts with its
  own source-table row (L ch. 24, pp. 141–146); the coverage follows the
  source-table row, which is the chapter that actually carries the
  uncertainty content.
- FM survey, `https://arxiv.org/pdf/2210.03369`, sha256-16
  `6164ac87e32fe4a9`. Equation (1) (Heisenberg, $d^2/4$) and Theorem 1
  ($ab>1/4$ forces $f=0$, $ab=1/4$ forces $ce^{-a|x|^2}$) are stated under
  the $(2\pi)^{-d/2}$ transform convention; the manifest's $\pi$-normalised
  threshold $ab=1$ and constant $n/(4\pi)$ are the correct translation under
  $e^{-2\pi ix\cdot\xi}$ (the $\pi$-rescaling of both rates gives
  $ab_{\mathrm{FM}}=ab_{\mathrm{here}}/4$).

The remaining sources (Lindell thesis, Tao blog, Tao paper, Taylor §11) were
hash-verified but not re-read in full this session; their roles are
corroborative and their load-bearing contributions are also carried by the
Sheagren/Laugesen/FM locators above and by the batch-28 FR-18 suppliers.

## 4. Prerequisites and dependency audit

The pair declares 69 distinct dependency ids: **52 published item files on
disk** and **17 in-run scaffold rows** (13 items of batch 30 and the four
FR-18 rows `def-unitary-discrete-fourier-transform-on-z-mod-n`,
`def-counting-inner-product-on-complex-functions-on-z-mod-n`,
`lem-orthogonality-of-characters-on-a-finite-cyclic-group`,
`thm-finite-parseval-and-plancherel`), with **0 unresolved ids**. Every
`[[…]]` reference occurring in the statements and strategies of the 21 items
resolves to a published item or to a scaffold row; `manifest-deps` reports
`21 item(s), 0 normalized, 0 error(s)`.

Published load-bearing suppliers were opened and checked against their
declared uses this session: `thm-plancherel` (surjective unitary $L^2$
isometry, countable choice), `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`
($t^{-n/2}e^{-\pi|\xi|^2/t}$), `thm-l-one-l-two-agreement-of-fourier-transform`,
`cor-uniqueness-of-the-l-one-fourier-transform`,
`thm-fourier-translation-modulation-dilation-and-reflection-laws`,
`lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
`lem-schwartz-functions-and-all-derivatives-are-integrable`,
`thm-maximum-modulus-principle-with-boundary-and-infinity-control` (the
local-boundary-plus-infinity-control form the $h_M$ sector argument needs),
`thm-identity-theorem-holomorphic-functions`,
`thm-liouville-bounded-entire-function`, and the CA-6 page home of the last
two claims. All match their declared uses.

The four FR-18 suppliers exist in the batch-28 scaffold with exactly the
clauses the batch-30 cross-batch rows consume: the unitary
$N^{-1/2}e^{-2\pi ikx/N}$ transform, the counting inner product, character
orthogonality including the $N=1$ clause, and finite Parseval. The 8
cross-batch rows (1 page edge + 7 item edges) are filed `open` into batch 28,
which is the normal Step-1 state; no batch-30 proof consumes an unscaffolded
row.

**Unmet prerequisites: none confirmed.** Every prerequisite exists either in
the published library or in the current scaffold, and the load-bearing
statements were checked.

One structural, non-blocking finding is worth the owner's attention (already
recorded as batch-note conflict 1, reproduced here because the design calls
the theorem a hard requirement): the design's declared supplier
`thm-heisenberg-uncertainty-inequality` is published but homed **only** on the
B page `library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples.md`
(a run-wide grep finds the id in no other library page). `depcheck`'s
`b-leaf-content` rule therefore forbids a `deps` edge from this A page, and
the scaffold instead cites the theorem inside the remark
`rem-heisenberg-uncertainty-is-owned-by-functional-analysis` while proving
`cor-dimensional-heisenberg-uncertainty-inequality` from the local coordinate
core. This is not an unmet prerequisite — the mathematical content is present
in the published library and the pair's own items do not depend on it — but if
the owner wants the design's supplier edge to be expressible, the correct
action is a page-membership change for the published theorem (move it to the
FA-23 A page). That is an owner decision; no scaffold edit was made here.

## 5. Findings for the owner (no scope change requested)

1. **FA-23 Heisenberg homing** (section 4): optional page-membership change,
   not required for this pair's scope.
2. **Item 3/5 domain** (section 2): the design's Sobolev/moment-domain
   wording is delivered on $\mathcal S(\mathbb R^n)$ with the reason recorded;
   optional enrichment if the owner wants the wider statement, but no consumer
   needs it and the declared owner of the general theorem (FA-23) is also
   stated on $\mathcal S$.
3. **Coverage warnings**: the two `coverage-low-yield` advisories are
   confirmed legitimate; the declines are the already-published FA-23/CA-6
   interface plus explicitly non-promised refinements.
4. **Plan-text repairs owed by the owner** (not scaffold edits): the FR-20
   sources-read line should say L ch. 24 (matching the source-table row), and
   crosswalk rows 52–55 should not attribute support-measure/finite content to
   Sheagren.

## 6. Honest limits

I did not verify any proof (scope review only) and did not re-read the
Lindell, Tao-blog, Tao-paper and Taylor sources in full this session; their
hash-verified coverage rows are corroborative and their load-bearing content
is duplicated by the sources I did read. I did not independently audit all 52
published suppliers; the ones a proof strategy actually leans on were read,
and the remainder were checked for existence and, where cheap, for statement
match. No unresolved mathematical uncertainty affects the scope verdict.

## 7. Decision and recording

Scope is **sufficient**: the pair delivers every designed definition, result
and example for the intended subject (variance/Heisenberg, support-measure and
compact-support, Hardy with sharpness, finite DFT), its two local additions
are justified, its source coverage is complete with all declines reasoned and
re-verified, and no prerequisite is missing from the published library and the
current scaffold. Recorded with `record-scope --decision sufficient`; the
receipt carries the current pair scope hash.

## Owner amendment after Step 3b (2026-10-05)

The owner retains the planned Sobolev/moment domain. Step 3b restored both
`lem-position-derivative-commutator-estimate` and
`cor-dimensional-heisenberg-uncertainty-inequality` to
$f\in H^1(\mathbb R^n)$ with $xf\in L^2(\mathbb R^n;\mathbb C^n)$, equivalently
finite spatial and Plancherel-frequency second moments. The cutoff
integration-by-parts route supports this domain without a substantial rebuild.
The published sharp equality classification remains quoted only on its
Schwartz domain. The owner-proceeded scope hash is
`daf38548b2c3189b80ca20cbb6c2c854840e8424bd6b8ee3bc909e2754b245e5`; all **21/21**
B30 item decisions are currently closed. This final owner decision supersedes
the earlier optional-enrichment recommendation while preserving the historical
Step 3a account above.
