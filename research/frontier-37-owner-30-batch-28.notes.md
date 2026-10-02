# Batch 28 Step 1 scaffold notes — Hyperbolic Riemann Surfaces and Uniformization

Run `frontier-37-owner-30`, role beta. The owned pair is the A page
`hyperbolic-riemann-surfaces-and-uniformization` (order 857) and its B companion.
I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task,
the complete CA-RS-4 design section at `research/plan-complex-analysis-track.md`
lines 4040–4066, both current `research/plan-spec.json` entries, run status and
planning evidence, the relevant published prerequisite statements and proofs,
and the full relevant source arguments. The run was in Step 1 scaffold. The
binding owner-direction file did not exist before construction and remained
absent at the final check. Earlier `research/*RESUME.md` files were not used as
run-status evidence.

## Current plan and design

The design describes CA-RS-1, CA-RS-2, CA-12, CA-16, topology universal
covering, PDE Weyl/Dirichlet machinery, and functional-analysis Hilbert methods
as its prerequisite interfaces. The current plan specifies **seven direct page
prerequisites**: `conformal-mapping-branches-and-the-schwarz-lemma`,
`the-riemann-mapping-theorem`, `covering-spaces-and-lifting`,
`classification-of-covering-spaces`, `harmonic-functions-and-mean-values-in-rn`,
`riemann-surfaces-branched-maps-and-differentials`, and
`green-functions-harmonic-measure-and-conformal-invariance`. This is the
plan/design prerequisite-list difference. The current plan controls. The
Perron/Green route reaches the needed published Weyl, Poisson, Harnack and
covering items through that closure and requires no Hilbert-space theorem.
The title, category, order, companion, six named A results, five B topics,
and the warning against treating plane-domain Riemann mapping as abstract
uniformization are retained. The shared plan was not edited.

## Inventory and proof route

The manifest has **21 A items and five B items**, all with explicit `deps`
and `dependency_level` labels (range 0–10). All six design-named A targets
are present. Local suppliers precede their consumers: lifted holomorphic
covering structure; chartwise harmonicity, conjugates and logarithmic-pole
monodromy; smooth exhaustion and Dirichlet/Perron; the canonical Green
envelope, pole correction, punctured-surface Green kernel and a chartwise
Green identity; symmetry; weak harmonic limits; Greenian and non-Greenian
simply connected cases; model inequivalence; then universal-cover type,
Poincaré metric, deck isometries and compact genus classification. The B
page works out disc/half-plane geometry, annulus and punctured-disc covers,
a complex torus, a genus-two cocompact Fuchsian quotient, and the three
inequivalent models.

The Greenian branch constructs `f` with `|f|=exp(-g)` and uses Green-kernel
symmetry to prove injectivity. The negative exponential convention is
explicit: a term `-m log|z|` yields a zero of order `m`, while `+m log|z|`
yields a pole. The Riemann mapping theorem is used only after the abstract
surface has been injected into a proper plane domain. The non-Greenian
branch uses a bounded dipole Green function, exponentiates its integral
periods, and rules out a bounded nonconstant holomorphic function before
separating points. The dipole strategy records the Harnack bounds whose
unknown additive constants cancel by symmetry, as in Marshall's Lemma 5.
The weak-limit supplier cites the published Weyl lemma explicitly.

The first read-only plan overlay exposed two B-page example dependencies and
a general Gauss–Bonnet dependency outside this pair's declared page closure.
They were removed before final readiness: the torus and genus-two examples
now construct their charts and genus calculations directly using published A
interfaces, and compact genus classification uses a local affine-plane
lattice lemma plus the centralizer of a fixed-point-free disc automorphism.
The surface Green identity is proved locally by finite chartwise planar
integration, so it does not import the out-of-plan Stokes page. The design
asks for a cocompact genus-two Fuchsian example, which is retained; a
numerical hyperbolic-area add-on was outside that target and was omitted
because it would require the general Gauss–Bonnet page. No design claim was
weakened, no A/B pair or shared prerequisite was changed, and no page split
was required.

Every item was first appended and given an outcome before the next item;
the later plan-overlay and sign repairs refreshed only affected records in
prerequisite order. All **26/26** owned Step 1 records are current and
`ready`. A direct level recomputation found zero mismatch or local cycle.
The 36 distinct direct external supplier IDs are published. A dependency-only
transitive walk from the 26 owned roots reached 2,187 external published items,
with no missing, unpublished, Recorded, or cyclic proof dependency. The
published statements and pertinent arguments were checked for the actual
uses of covering/deck actions, genus and Riemann–Hurwitz, disc automorphisms,
Riemann mapping, Harnack, Poisson modification, Weyl regularity and Green
potential theory. No defective actual published prerequisite was established.
The model inequivalence and elementary metric examples remain choice free.
Countable Choice is stated where exhaustion, compactness or Perron sequences
need it; the uniformization, classification and genus items state full AC
where inherited from Riemann mapping or compact-surface classification.
There is no proof path to a Recorded result or to
`deferred-set-theory-beyond-choice`.

There is no cross-batch supplier in this consumer batch. Its owned
`research/frontier-37-owner-30-batch-28.cross-batch-dependencies.json` is
`[]`; a read-only ledger collection found zero batch-28 edges and zero
orphan reviews. The unified derived ledger was not rewritten because this
dispatch permits only owned consumer-batch input edits.

## Full-text sources and recovery history

The coverage file records **38 harvested headings**, with exact locators,
supported item IDs and individual included, inline, already-published,
deferred or out-of-scope dispositions. Its three active sources were fetched
as complete PDFs and stamped by `source-fetch-check`:

| Source | Full text inspected | Fetch stamp |
|---|---|---|
| [Marshall, *The Uniformization Theorem*](https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf) | Complete 15 pages, including Perron setup, Lemmas 1–5, Theorem 4, Corollary 6, both uniformization cases and comments. The finite-domain symmetry proof here uses his stated Green-theorem alternative instead of his stronger covering-fibre identity. | 15 pages; SHA-256 prefix `d6f78ff79f5fdf7e` |
| [Lyubich, *Dynamics of Quadratic Polynomials*, Vol. I](https://www.math.stonybrook.edu/~mlyubich/book.pdf) | Complete 702-page book available; read the full relevant Ch. 1 §§2.4.1–2.4.4 and 5.1–5.9 arguments. It is an independent exhaustion/annulus treatment of uniformization, not the local Green proof. | 702 pages; SHA-256 prefix `291912b9e5206cf2` |
| [McMullen, *Riemann Surfaces*](https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf) | Complete 183-page notes available; read Ch. 2 Theorem 2.6 and the relevant Chs. 16–17 passages. Chapter 17 **states** uniformization but does not prove it; it is not counted as a proof treatment. | 183 pages; SHA-256 prefix `1442374a6f3a389a` |

The design also suggests Schlag Ch. 11 §§1–3. The initial Purdue PDF URL
returned HTTP 404. Five recovery retries were made at the indexed CiteSeerX
URL (HTTP 404, and its search hit proved to be **Langley's**, not Schlag's,
notes), Chicago's former `bookweb.pdf` (HTTP 404), Yale's indexed
`complex.pdf` (expired TLS certificate), the same Yale URL with certificate
verification disabled (an HTML biography page, not a PDF), and the Wayback
archive URL for Chicago's file (HTTP 404). The unrecovered design suggestion
remains in coverage as a **documented dropped source**, with the six genuine
attempts, search outcomes and item-level alternative arguments/dependencies
in `source_resolution`. It has no harvested headings because no full text was
read, and no fetch stamp or reading claim. Marshall and Lyubich supply the
complete independent mathematical arguments for the assigned route;
McMullen supplies geometry and the compact plane-quotient check. The source
drop does not waive mathematical coverage or dependency checks; three
accessible full treatments already meet the source count.

## Checks and remaining run work

- `coverage-checklist --require-destination`: pass, one A page, 38 headings,
  zero errors and warnings. `source-fetch-check --stamp` verified the three
  complete active PDFs; final check: 3/4 fetched and 4/4 resolved, including
  one documented original-source drop.
- Whole-run `manifest-deps`: pass, 552 scoped items, zero errors. Whole-run
  `content-policy --manifest-only`: pass, 552 scoped items, zero errors or
  warnings. Canonical `validate-plan`: pass on the current plan, whose two
  owned item lists remain empty; the read-only `/tmp` overlay inserting these
  26 items also passes, with no unresolved ID, undeclared prerequisite,
  forward reference, cycle or B-page dependency. The overlay reports 317
  other planned pages with empty lists.
- `extcheck`: exit 0 with 40 pre-existing published consumers of Recorded
  material; none occurs in the owned proof dependency closure. `fwdcheck`:
  pass. The owned ledger collection has no edge.
- `item-dependency-levels check --run frontier-37-owner-30`: exit 1 solely
  because **14 pages in other batches** still had empty scaffold inventories
  at this check; it reported no owned label error. The independent local
  recomputation checks all 26 labels. Whole-run `step1-decisions check`:
  exit 1 with 30 global work rows during concurrent scaffolding; its
  batch-28 subset is 26/26 current and closed.

These are Step 1 scaffold outcomes, not independent mathematical approval.
Step 3 must write and review the full proofs. No published item, library
page, shared plan, engine state, verdict or other batch file was edited.
