# Phase 2 wave 1 — Alpha group `e`, Step 3 scaffold review

This review covers consumer batches `4` and `5`. I independently read both
A/B manifests, both coverage records and notes, the assigned measure-theory
and functional-analysis designs, the current plan, the published prerequisite
statements used by the manifests, and the complete relevant source passages.
I did not edit either batch scaffold, the shared prose scaffold, the plan, or
published content.

## Verdicts

| Batch | A page | B page | Inventory | Verdict |
| ---: | --- | --- | ---: | --- |
| 4 | `complex-lp-spaces-and-test-function-conventions` | `complex-lp-spaces-and-test-function-conventions-examples` | 9 A + 3 B | `sufficient` |
| 5 | `norming-and-separation-under-hahn-banach` | `norming-and-separation-under-hahn-banach-examples` | 12 A + 2 B | `sufficient` |

Both pairs are below the 60-item A-page split limit. Every item has an explicit
`deps` array, every same-page edge points backward in proof order, and each B
page requires only its own A page. No repair, new prerequisite A/B pair, shared
scaffold edit, plan edit, or owner decision is required.

## Batch 4 — complex Lp interfaces

The pair occupies plan orders `288.0321` and `288.0322`, in the
`measure-theory` category, after `the-duality-of-lp-and-lq`. Its inventory
matches MT-16c in the controlling design.

The definitions keep all conventions that the later consumers need distinct:
complex measurability is componentwise; the spaces are a.e.-quotients; finite
simple support means finite-measure support; `C_c`, `C_0`, and
`C_c^infinity` are componentwise; the L2 pairing is
`integral f conjugate(g)` and is linear in the first variable; and the
finite-simple dual test is bilinear. The modulus-measurability argument uses
explicit real-coordinate threshold sets, so it does not import an unstated
Borel-functional-calculus or choice principle.

The proof routes preserve the exact hypotheses and endpoints:

- Complex Holder, Minkowski, quotient well-definedness, conjugation, and
  component estimates reduce to the published real inequalities and the
  integral triangle inequality. The `p=infinity` triangle inequality is
  proved directly from essential bounds; it does not use the defective
  published claim that an essential supremum is attained.
- Completeness and a.e.-subsequence extraction explicitly assume countable
  choice and reduce the two components to the published real Riesz--Fischer
  and subsequence results. The finite-simple, smooth compact-support, and
  `C_0` closure assertions likewise use their exact real suppliers
  componentwise and do not confuse finite-measure with compact support.
- The L2 form is checked for representative independence, positivity,
  conjugate symmetry, first-variable linearity, definiteness, and
  Cauchy--Schwarz. The convention agrees with both companion computations.
- `lem-complex-lq-norm-from-finite-simple-dual-tests` keeps the necessary
  cases separate: sigma-finiteness when test integrability is the hypothesis,
  arbitrary measure spaces for an already known finite-q member, and
  semifiniteness for the `q=infinity` endpoint. The phase
  `conjugate(g)/abs(g)` makes the bilinear product positive; finite-measure
  truncations and uniform finite-valued approximation prove the formula.
  Positivity of an almost-maximal level set follows from the definition of
  essential bound, not the defective attainment item.
- The Euclidean interface asserts translation norm continuity and
  approximate-identity convergence only for finite p, with the separate
  uniform `C_0` conclusion. It allows complex and sign-changing kernels,
  proves the sharp bound using `abs(K)*abs(f)`, handles Borel representatives
  and class independence for the full `L1*Lp` range, and invokes the smooth
  real mollifier results componentwise. No false general `L-infinity`
  continuity claim appears.

The B page is also adequate. On the three-atom example the conjugated phase
attains dual norm one, the real-test supremum is exactly `2/3`, and the
unconjugated choice gives zero. The two-step example correctly separates the
sesquilinear L2 pairing from the bilinear integral and verifies the chosen
scalar convention. The mollification example supplies both finite-p
convergence and the explicit `L-infinity` obstruction.

The batch note records a published Phase-3 proof defect in
`prop-closure-properties-of-measurable-functions-used-by-the-integral`: its
displayed formula for an infimum level set is false although the proposition's
statement is true. I traced the assigned routes through the complete closure.
They use valid measurability interfaces and never use that false displayed
identity as a proof step, so the debt remains protected but does not block
this scaffold.

## Batch 5 — relative Hahn--Banach norming and separation

The pair occupies plan orders `288.0541` and `288.0542`, in the
`functional-analysis` category, after `the-analytic-hahn-banach-theorem`. The
manifest expands the controlling design's six headline A results into twelve
proof-ordered items by exposing the relative principle, the bidual contraction,
the normed-convexity conventions, the open-set gauge, its properties, the
point-separation lemma, and the compact/closed distance lemma. These are needed
local ingredients, not padding or a new page, and the resulting A page remains
well below the split limit.

The axiom strength is stated correctly. `HB` is defined over ZF as an explicit
additional dominated-extension principle; the page never infers it from ZF.
The norm-preserving real extension follows by domination by the norm. In the
complex case the real-part reconstruction and phase choice give complex
linearity and exact norm preservation. Point norming then yields dual
separation and the canonical bidual isometry, while the prior contraction
lemma supplies the reverse inequality. Surjectivity of the canonical embedding
is not claimed.

The geometric branch is complete. The gauge of a nonempty open convex
neighbourhood of zero is finite, nonnegative, positively homogeneous,
subadditive, has `U={p_U<1}`, and is Lipschitz once a norm ball is contained in
`U`; symmetry is deliberately not asserted. The line functional on the span
of the exterior vector is dominated for both positive and negative scalars.
Relative HB therefore supplies continuous strict point-versus-open-convex
separation, with the complex functional recovered from its real part.

For two convex sets, the proof uses the open difference set and the exact
supremum argument. The compact-versus-closed case first proves a positive
distance gap by a finite compact cover and a finite minimum, then thickens the
closed set and obtains a uniform margin from
`sup_{norm(h)<rho} u(h)=rho norm(u)`. It assumes neither a nearest point nor
norm attainment. The finite selection step uses only the published finite
choice lemma; the page does not smuggle in countable or arbitrary choice.

Both B examples are supported. The finite-dimensional norming functional uses
the least maximizing coordinate and works over both real and complex scalars.
The ball/exterior-point example applies point norming with the correct phase
and realizes the separation margin explicitly.

## Dependency-closure audit

I resolved dependencies against the current plan, all fifteen run manifests,
and published items, then followed `deps`, `justified_by`, and load-bearing
`forward_refs` transitively. The deps-only closures contain `897` resolved
items for batch 4 and `305` for batch 5. The broader audit contains `1,165`
items across `93` pages for batch 4 and `745` items across `65` pages for batch
5. There is no unresolved ID, recorded-not-proved supplier, item cycle,
forward item edge, B-page dependency, or hypothesis/direction mismatch in
either assigned closure.

Representative load-bearing paths were checked statement by statement:

- complex completeness -> real Riesz--Fischer/a.e.-subsequence machinery ->
  the stated countable-choice and measure interfaces;
- complex density -> real finite-simple, smooth `C_c^infinity`, and
  `L-infinity`-closure suppliers -> componentwise reduction;
- complex dual tests -> conjugate-exponent, sigma-finite/semifinite,
  monotone-convergence, and essential-bound interfaces;
- complex approximate identities -> translation continuity, Young,
  Minkowski-integral, representative, mollifier, and support interfaces;
- relative norming -> relative norm-preserving extension -> the explicitly
  assumed relative dominated-extension principle;
- geometric separation -> gauge point separation plus compact/closed distance
  -> only finite choice and real supremum/infimum interfaces.

Neither assigned page is in `foundations`, and neither closure reaches
`deferred-set-theory-beyond-choice` or any item recorded there through a page
requirement, item dependency, well-definedness justification, or load-bearing
forward reference. Choice-ledger `external_refs` encountered in older
published definitions are orientation only and do not enter these proofs.

The frontier dependency audit found no page or item edge from either consumer
batch to another `phase-2-wave-1` batch, explicit or implicit. Accordingly
`research/phase-2-wave-1-batch-4.cross-batch-dependencies.json` and
`research/phase-2-wave-1-batch-5.cross-batch-dependencies.json` are empty
arrays. The refreshed unified ledger lists both batches as reviewed and has no
edge or orphaned review attributable to them.

## Source and scope audit

Batch 4 uses two independent full treatments:

- Gerald Teschl, *Topics in Real and Functional Analysis*, §§10.1--10.4,
  printed pp.281--298 (in particular Theorem 10.4, Lemma 10.6, Theorem 10.12,
  Theorem 10.16, and Lemmas 10.18--10.19), at
  <https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf>.
- Richard S. Laugesen, *Harmonic Analysis Lecture Notes*, arXiv:0903.3845v2,
  Chapter 1 pp.9--11, Theorem 2.6 pp.21--22, Lemma 14.6 p.81, Chapters 14--15
  pp.85--92, and Appendix C pp.169--172, at
  <https://arxiv.org/pdf/0903.3845>.

Batch 5 uses two independent full treatments:

- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, §§1.1--1.2 and the opening of §1.3, printed pp.1--9/PDF pp.16--24
  (Theorem 1.1, Corollaries 1.2--1.4, Lemmas 1.2--1.3, Theorems 1.6--1.7, and
  the bidual evaluation paragraph), at
  <https://www.math.utoronto.ca/almut/Brezis.pdf>.
- Teschl, Theorems 4.13--4.20, printed pp.112--116, and complete §5.1,
  pp.137--141 including Problems 5.1--5.4, at the URL above.

I checked the actual mathematical passages, conventions, hypotheses, proof
directions, and examples rather than relying on the fetch receipts. The active
coverage records have no `source_resolution` or dropped-source decision to
adjudicate. Every harvested result has an item-linked included/inline
disposition, a valid later deferred destination, or a specific out-of-scope
reason. All 23 current declines stand; none removes a result used by an
assigned proof. The refreshed group scope file reports `23` declines, `0`
pending, and its check reports `0` errors.

## Validation receipts

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group e`
  reports `23` declines and `0` pending; the matching `check` reports `23`
  current declines and `0` errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`
  completes and deduplicates the unified ledger.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-4.coverage.json,research/phase-2-wave-1-batch-5.coverage.json --stamp`
  reports `4/4` sources fetch-verified, `4/4` resolved, no new stamp, and no
  documented drop.
- `node tools/coverage-checklist.mjs --require-destination` on both owned
  coverage files reports `2` pages, `101` harvested results, `0` errors, and
  `0` warnings.
- `node tools/source-backing.mjs --coverage ... --liveness
  research/phase-2-wave-1-url-liveness.json --require-verified` reports all
  `19` authored results across the two coverage files still backed by an
  openable source or documented alternative argument.
- Whole-run `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  reports `434` items, `0` normalized, and `0` errors.
- Whole-run `node tools/validate-plan.mjs research/plan-spec.json` succeeds:
  declared page order is acyclic and consistent, with no item cycle, forward
  reference, B-page dependency, or unresolved ID among the `892` pages that
  currently carry item lists. Its `719` page-level-only entries and redundant
  prerequisite notices are informational and do not identify an owned defect.
- Whole-library `node tools/extcheck.mjs` succeeds for `15,416` items and `161`
  recorded-not-proved items. It reports `63` already-published consequences
  resting on recorded material, all marked as required; none is an assigned
  batch-4 or batch-5 supplier.

There are no blockers. Both A/B pairs are ready for the engine-owned Step-3
closure.
