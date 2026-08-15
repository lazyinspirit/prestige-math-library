# frontier-14 — group Alpha **a**, step-3 scaffold review

Batches 1, 2, 3 — five A/B pairs. Written by build Alpha (Claude Opus 5, `xhigh`,
1M window) per `briefs/alpha.md` and `research/frontier-14-alpha-a.task.md`.

Finding ids are stable and are never renumbered. The orchestrator routes from
**this file**, not from my closing message.

---

## Verdicts

| pair | verdict |
|---|---|
| `complex-power-series-and-analytic-functions` (305) | **insufficient** — A1 |
| `contour-integration` (307) | **insufficient** — B1, B2 |
| `ascoli-arzela` (285) | **insufficient** — C1, C2, C3 |
| `stone-weierstrass-general` (287) | **insufficient** — D1 |
| `complete-metrizability-and-baire` (277) | **sufficient** |
| `covering-spaces-and-lifting` (293) | **sufficient** |

None of the four `insufficient` verdicts is a thin-page verdict. Every A page in
this group is at or above its design's proposed inventory, and two are well
above it. The four are: one design-enumerated theorem silently dropped (A1), two
design-named B examples silently dropped (B1, B2), one decline resting on a
false claim about disk (C3), one single-treatment landmark plus an unreadable
second source (C1, C2), and one avoidable re-mint of a published construction
(D1). All are scaffold edits at step 3; all become rewrites after step 4.

---

## G. Cross-cutting — five `requires` edges the orchestrator must settle before step 4

**This is the blocking item.** I re-ran every scaffolded item's `deps` against
each page's declared `requires` closure computed from `plan-spec.json` and the
published `library/**` page manifests. **23 dependency edges in three of the six
pairs currently point outside their page's declared closure.** `validate-plan`
fails every one as `undeclared-prereq` the moment step 4 splices.

All 23 are covered by edges the owning Betas already recommended in their notes
(batch 1 F1; batch 3 findings 1 and 2). I verified each proposed edge is legal —
published, backward, no cycle — and re-ran the whole dependency check with the
proposed edges applied: **all six pairs come back clean.** So the recommendations
are correct and complete; they are simply not yet decided.
`research/frontier-14-step3-decisions.md` currently ends at D4.

| page | edge to add | target order | broken deps it fixes |
|---|---|---:|---:|
| `contour-integration` (307) | `line-integrals-and-the-gradient-theorem` | 241 | 7 |
| `complete-metrizability-and-baire` (277) | `tychonoff-embedding-and-stone-cech` | 271 | 6 |
| `complete-metrizability-and-baire` (277) | `approximation-and-compactness-in-ck` | 171 | 4 direct, +1 through its closure |
| `covering-spaces-and-lifting` (293) | `group-actions-and-cayleys-theorem` | 42 | 5 |

**G1. The batch-3 recommendation must be approved as a package, not in part.**
Batch 3's Beta asks to *replace* 277's `requires` with
`["metrization-theorems", "tychonoff-embedding-and-stone-cech", "approximation-and-compactness-in-ck"]`.
Approving only the Stone–Čech edge leaves five deps broken, and — a case the
Beta's own note does not mention — `def-simple-continued-fraction-coding`
depends on `thm-division-algorithm-in-z`, homed on `monoids-groups-and-subgroups`
(order 24). That page is **outside 277's current closure and inside the proposed
one**, reached through `approximation-and-compactness-in-ck`. So the approximation
edge is load-bearing for a second, unstated reason. Dropping
`compactness-in-metric-spaces` from the direct list is safe: I confirmed it stays
in the closure through both new edges, and `compactness` (255) — which carries
`def-baire-space` and `thm-baire-category-locally-compact-hausdorff`, both cited
by this scaffold — is in the closure before and after.

**G2. No id collisions anywhere in this group.** 203 scaffolded ids across the
three batches: 0 duplicates within the group, 0 collisions with `items/*.md`,
0 collisions with any id already in `plan-spec.json`, and 0 collisions with the
131 ids scaffolded by batches 4–6.

**G3. Gates are green on current disk, and not vacuously.** I re-ran, per batch:
`coverage-checklist` (2 pages / 89, 47, 116 harvested results, 0 errors,
0 warnings) and `content-policy --manifest-only` (69, 48, 86 scoped items,
0 errors). Non-zero check counts over non-empty scope in every case.

---

## A. `complex-power-series-and-analytic-functions` (305) — insufficient

28 A items against CA-2's proposed 20, and **19 of CA-2's 20 enumerated ids are
present** under equivalent names. CA-2's three traps are all respected: no
re-mint of Cauchy–Hadamard or the complex series definition (both correctly
dispositioned `already-published` against
`thm-cauchy-hadamard-for-complex-power-series` on
`the-complex-exponential-and-eulers-formula`, whose Statement I opened and which
does carry the divergence-outside clause CA-2 asks for); the ker-exp citation is
used for the zero sets; and "analytic" and "holomorphic" are kept as distinct
words with `thm-complex-analytic-functions-are-holomorphic` and no converse.

### A1. `thm-complex-sine-and-cosine-are-unbounded` is absent and undispositioned

CA-2 enumerates it as A-page item 19 of 20 and repeats it in the THMS prose
("$\lvert\sin\rvert$ and $\lvert\cos\rvert$ are unbounded on $\mathbb{C}$").
It is the twentieth-of-twenty design row that did not land. I grepped both
`frontier-14-batch-1.pages.json` and `frontier-14-batch-1.coverage.json`: the
scaffold has no such item, **and the coverage harvest has no row for it at all** —
so it is not a decline, it is a silent drop, the exact shape §A4 of
`PREVENTIONS` exists to stop.

It is cheap and fully in closure. `thm-complex-trigonometric-hyperbolic-dictionary`
is published on `the-complex-exponential-and-eulers-formula` (order 189, in 305's
closure) and states, verbatim from disk:

> $\cos z=\cosh(iz),\qquad \sin z=-i\sinh(iz),\qquad \cosh z=\cos(iz),\qquad \sinh z=-i\sin(iz).$

so $\sin(iy)=i\sinh y$ is one substitution, and unboundedness follows from the
real $\sinh$. **Source:** Ahlfors Ch. 2 does not carry it in the harvested range;
Stein–Shakarchi Ch. 1 §2.3 and the published dictionary do. Add it to the A page
after `cor-complex-trigonometric-and-hyperbolic-addition-formulas`, and add the
harvest row against Stein–Shakarchi.

### A2. Three design-named B/FS items are absent and undispositioned (lower)

- CA-2 FS: *"$\sin$ and $\cos$ are bounded on $\mathbb{C}$"* — the natural
  companion to A1 and free once A1 exists.
- CA-2 B: *"$\sin(iy) = i\sinh y$ computed"* — the worked identity behind A1.
- CA-2 B: the triple $\sum z^n$, $\sum z^n/n$, $\sum z^n/n^2$ *"with three
  different boundary behaviours on $|z|=1$"*. The scaffold has the first and
  third (`cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series`
  compares exactly those two); the middle case — convergent at every boundary
  point except $z=1$ — is the interesting one and is the only one absent.
  `ex-alternating-harmonic-power-series-at-the-boundary` is adjacent but is the
  alternating series evaluated at $z=1$, not the boundary dichotomy.

### A3. CA-2's $e^{-1/x^2}$ counterexample — a correct omission, record it (lowest)

CA-2 asks the page to cite the published
`cex-smooth-function-not-equal-to-its-maclaurin-series`. **I checked disk: it is
homed on `the-exponential-function-examples`, a B page, and that page is not in
305's closure.** A B item is a leaf and nothing may cite it, so the omission is
doubly correct. It should still get a coverage row saying so rather than nothing.

### A4. Two `already-published` rows name B-page items (lowest, hygiene)

`ex-complex-geometric-power-series` (homed on
`the-complex-exponential-and-eulers-formula-examples`) and
`fs-real-differentiability-implies-complex-differentiability` (homed on
`complex-differentiability-and-cauchy-riemann-examples`) are both B-page leaves.
As coverage dispositions they are honest — the material *is* published — and
`coverage-checklist` accepts them. Nothing in the scaffold cites either, which I
confirmed. Flagging only so a step-5 author does not read the harvest as a
licence to cite them.

**Not a defect:** the four uniform-convergence items
(`def-uniform-convergence-of-complex-valued-functions` and the Cauchy-criterion,
uniform-limit and M-test theorems) are **not** re-mints. I opened
`uniform-convergence-of-functions` on disk: every one of its items is stated for
**real**-valued functions (`thm-uniform-cauchy-criterion-real-functions`,
`thm-uniform-limit-continuous-real-functions`,
`thm-weierstrass-m-test-for-function-series`), and the metric-target general
versions live on `function-space-topologies`, which is not in 305's closure. The
complex extensions are needed, and each correctly cites its real counterpart
componentwise.

---

## B. `contour-integration` (307) — insufficient

21 A items against CA-3's 20; every enumerated CA-3 theorem is present or
correctly absorbed. CA-3's explicit requirement that
*"every continuous $f$ on a domain has a primitive"* sit **on the A page** is
honoured (`fs-every-continuous-complex-function-on-a-domain-has-a-primitive`).
`lem-complex-contour-integral-partition-independence` is legitimately absent: the
scaffold defines the integral as one Riemann–Stieltjes integral over $[a,b]$
rather than as a piecewise sum, so there is no subdivision to be independent of.
The Beta's choice to carry the **rectifiable** generality, which its task file
asked it to decide and record, is made explicitly and correctly — I checked that
`bounded-variation-and-riemann-stieltjes` publishes
`thm-riemann-stieltjes-existence-continuous-bv` and
`thm-riemann-stieltjes-c1-integrator-reduction`, which are exactly what
`thm-existence-of-complex-line-integrals-on-rectifiable-paths` and the agreement
theorem need.

### B1. $\int_{|z|=1} e^z/z\,dz$ is absent, undispositioned, and would be the only consumer of a scaffolded theorem

CA-3's B list names *"$\int_{\lvert z\rvert = 1} e^z/z\,dz$ computed by the
series"*. No item, no coverage row. It matters more than an ordinary missing
example because `thm-uniform-limit-interchanges-complex-line-integrals` is
scaffolded on the A page and **nothing in the pair cites it** — this is the
example that exercises it, and without it the theorem ships untested by its own
page.

I confirmed it is buildable inside 307's closure without touching page 305, which
307 may not cite: `def-complex-exponential` and
`lem-complex-exponential-series-converges-everywhere` are on
`the-complex-exponential-and-eulers-formula` (189) and
`thm-weierstrass-m-test-for-function-series` is on
`uniform-convergence-of-functions` — I verified all three are in 307's closure.
The scaffold's own interchange theorem already commits to stating uniform
convergence "by its epsilon quantifiers" rather than citing 305's dictionary, so
the example can do the same. **Source:** Ahlfors Ch. 4 §1.3 and
Howell–Mathews §6.2 both carry it; the harvested Ahlfors range already includes
the integer-monomial circle computation this reduces to.

### B2. CA-3's non-rectifiable-path counterexample is absent and undispositioned

CA-3's CEX list names *"the graph of $x\sin(1/x)$ as a continuous
non-rectifiable path, so 'contour' is not 'continuous curve' (agreement with the
item on `arc-length-and-rectifiable-curves` — cite, do not rebuild)."*

I checked disk: the item exists and is `cex-graph-of-x-sin-one-over-x-is-not-rectifiable`,
**homed on `arc-length-and-rectifiable-curves-examples` — a B page.** So CA-3's
"cite, do not rebuild" instruction is not executable: no item on 307 or 308 may
cite a B leaf. That makes the omission defensible, but it is currently silent on
a page whose entire definitional choice is rectifiability. The disposition to
record is `already-published` naming that exact id, with a one-line note that it
is not citable. If the orchestrator would rather the point be visible to a reader
of 307, a short B-page remark restating the fact under its own id is the
alternative — that is a judgement call, not something I should make here.

### B3. Watch at step 5 — four citations of `line-integrals-and-the-gradient-theorem` look like comparison, not support (lower)

Of the seven deps that need the G-table edge, three are genuinely load-bearing
(the agreement theorem's citation of
`def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, and the
reversal/reparametrisation theorems' citations of their real counterparts).
But `thm-fundamental-theorem-for-complex-line-integrals` cites
`thm-gradient-theorem-for-line-integrals` while its own strategy describes a
complete self-contained proof by partition sums, and
`thm-path-independence-and-complex-primitive-criterion` cites
`thm-conservative-path-independent-and-zero-loop-equivalence` while likewise
describing a full proof. The Beta's note is honest that the published real
machinery is "the comparison target, not a replacement" — but an unused `deps`
edge is itself the defect CLAUDE.md names ("do not... add an unused edge"). Not a
step-3 blocker; at step 5 each of these must either carry a numbered step that
uses the cited item or be moved out of `deps`.

---

## C. `ascoli-arzela` (285) — insufficient

**The `compactness` edge question, answered.** I opened
`function-space-topologies` (283) on disk as instructed. It is published with a
strictly metric-domain foundation, and its own text says so in as many words —
`def-compact-open-topology` is titled "…for a metric domain $X$" and its body
reads *"The domain is metric, and the target is not… that is why $X$ carries a
metric here."* `def-equicontinuity` is "between metric spaces";
`thm-compact-open-equals-compact-convergence` is "For a metric domain and a
metric target".

**The scaffold took the best of the three legitimate routes: it built the missing
general machinery on its own page.** `def-compact-open-topology-for-topological-domains`
and `def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`
are new items resting only on general-topology dependencies, and two agreement
propositions bridge them to the published metric versions —
`prop-general-compact-open-topology-agrees-with-the-metric-definition` correctly
routing through `thm-compactness-agrees-with-metric-compactness`, which is
precisely the theorem the seam needs and is exactly what the new `compactness`
edge buys. `thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain`
is likewise built new rather than stretching 283's
`thm-evaluation-is-continuous-on-a-locally-compact-**metric**-domain`.

**I checked every one of the 18 A items and 5 B items for the forbidden outcome —
a `deps` entry citing a metric-domain published item for a general-domain claim —
and found none.** `thm-compact-open-equals-compact-convergence` is cited exactly
once, by `prop-compact-open-is-uniform-on-a-compact-metric-domain`, whose
hypotheses are a compact **metric** domain; that item also correctly retains the
nonempty-domain hypothesis that 283's `lem-uniform-metric-on-a-function-space`
requires. This part of the scaffold is right, and the batch notes' account of it
is accurate.

The insufficiency is elsewhere.

### C1. The page's entire general spine rests on **one** treatment

The pair has two sources. Bradley–Bryson–Terilla (textbook) and Shapiro's
three-page note. Reading the coverage rows: **every item in the general
topological-domain development is BBT-only** —
`def-compact-open-topology-for-topological-domains`,
`def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`,
`thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain`,
`thm-pointwise-compactness-criterion-for-function-families`,
`lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family`,
`lem-pointwise-closure-preserves-equicontinuity`,
`prop-compact-open-is-uniform-on-a-compact-metric-domain`, and the page's
landmark `thm-ascoli-arzela-general`. Shapiro backs only the compact-metric
scalar sequential form.

That satisfies the letter of the two-treatment rule (BBT is the textbook) while
leaving the landmark theorem with no independent check — and BBT is a
deliberately categorical treatment, so its conventions are the ones least likely
to match the library's. This is the pair where a convention slip is hardest to
catch, and it is the one with the thinnest backing in my group (19 harvested
headings against `stone-weierstrass-general`'s 22 from three sources and
`covering-spaces-and-lifting`'s 50 from five).

**Fix, and the exact source.** Add **Munkres, *Topology*, 2nd ed., §§45–47**
("Compactness in Metric Spaces", "Pointwise and Compact Convergence", "Ascoli's
Theorem") as a second independent treatment of the general form, and harvest its
headings. Munkres is already the convention authority this library uses for this
material — the published `def-equicontinuity` and `def-compact-open-topology`
both cite Munkres §45 and §46 in their `references`. Kelley, *General Topology*,
Ch. 7 is an acceptable alternative. Both carry the locally-compact-Hausdorff
Ascoli theorem and the evaluation-continuity theorem in the exact generality
scaffolded here.

### C2. The second source's URL is bot-walled; the archived copy exists and was not looked for

`https://users.math.msu.edu/users/shapiro/Pubvit/Downloads/ArzNotes/ArzNotes.pdf`
returns **HTTP 200 with a 212-byte Imperva/Incapsula challenge page**, not a PDF.
`research/frontier-14-url-liveness.json` row 136 records it as
`"status": 200, "ok": true` — the gate is doing what it does, and this is
`PREVENTIONS` §B4 in its purest form: a status code standing in for content. I
retried with a browser user-agent and got the same 212 bytes, so it is not a
`curl` artifact; a reader following the citation gets the wall.

**Recovery succeeds, and it succeeds only under the pre-move host** — the
`recover-before-replace` case exactly. Querying the Wayback CDX index under the
citation's own host returns nothing; under `www.mth.msu.edu/~shapiro/...` and
`www.math.msu.edu/~shapiro/...` it returns captures from 2005, 2006, 2007 and
2014, **all with the same digest `FCXCU3ENS63RSJJMG4HR4PT4GUIRN6AB`**. I fetched
the 2014 capture: a valid 3-page PDF, "Math 829, The Arzelà–Ascoli Theorem,
Spring 1999".

Recommended citation of record:
`https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf`

**Do not re-source.** I verified the harvest against the recovered text and it is
faithful (see the declines section), so a replacement would cost a re-harvest for
nothing.

### C3. The scalar Arzelà–Ascoli corollary is declined on a claim that is false of disk

`cor-compact-subsets-of-cx-for-a-proper-metric-target` ends its strategy:

> The real and complex scalar cases are applications **once their properness is
> available in a declared closure**.

For the complex case that is right — `field-extensions-and-the-complex-numbers`
is not in 285's closure. **For the real case it is false.** I checked disk:
`thm-heine-borel-rn` is homed on `compactness-in-metric-spaces`, which **is** in
`ascoli-arzela`'s declared closure, and its Statement carries both the clause for
$\mathbb{R}^n$ and a separate clause 3 for $\mathbb{R}$:

> A subset $K \subseteq \mathbb{R}$ is a compact subset of $(\mathbb{R}, d_{\mathbb{R}})$… if and only if $K$ is closed in $\mathbb{R}$ and bounded.

So $\mathbb{R}$ and $\mathbb{R}^n$ are proper in the scaffold's own sense, in
closure, today. The B page already cites `thm-heine-borel-rn` twice
(`ex-translated-tent-functions-converge-in-the-compact-open-topology`,
`ex-compact-affine-interpolation-family`), which proves the citation is available.

This is the `PREVENTIONS` §A5 shape — and the consequence is not cosmetic. The
form of Arzelà–Ascoli that essentially every downstream analysis page cites is
*"a uniformly bounded equicontinuous sequence of real-valued functions on a
compact metric space has a uniformly convergent subsequence"*, and as scaffolded
it exists only as an unstated specialisation of a proper-target corollary.

**Fix.** Add one corollary specialising
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` and
`cor-compact-subsets-of-cx-for-a-proper-metric-target` to $Y=\mathbb{R}$ (and
$\mathbb{R}^n$), citing `thm-heine-borel-rn` for properness, and correct the
strategy sentence so the complex case alone is recorded as blocked, naming what
blocks it. **Source:** Shapiro §1.1 and §1.2 are stated for exactly this scalar
case — this is the recovered text's own theorem, so it is the best-backed item on
the page, not a new claim.

### C4. Watch at step 5 — Shapiro's "bounded" is uniform, the scaffold's is pointwise (lower)

From the recovered text, Shapiro §1.1's hypothesis is
*"there exists a positive constant $M<\infty$ such that $|f(x)|\le M$ for each
$x\in X$ and each $f\in F$"* — a single $M$, uniform over both. Both
`cor-compact-subsets-of-cx-for-a-proper-metric-target` and
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` state
**pointwise** boundedness. On a compact domain with an equicontinuous family the
two are equivalent, but that equivalence is a proof step, not a restatement, and
`PREVENTIONS` §A1 is precisely about quantifier widening in a citation. Shapiro's
equicontinuity is also uniform (*"$\delta>0$ which depends only on $\varepsilon$"*).
Neither is a step-3 defect; both must appear as explicit steps at step 5.

---

## D. `stone-weierstrass-general` (287) — insufficient

19 A items, 6 B items. T10's asks are all met: the lattice form
(`thm-lattice-stone-weierstrass`), the real algebra form, the nowhere-vanishing
form, the complex form under a hypothesised — never inferred — self-adjointness
(`thm-complex-stone-weierstrass-self-adjoint`), the disc-algebra counterexample
on the B page, and the quotient representation theorem. Three sources, 22
headings, no `deferred`. The Gelfand-duality decline correctly names the concrete
page id `gelfand-theory-and-commutative-c-star-algebras` rather than "a
functional-analysis track", which is what T10 asked for and what §A4 requires.

### D1. The complex scalars are re-minted when two legal backward edges reach the published ones

The Beta found that `field-extensions-and-the-complex-numbers` is not in 287's
closure and resolved it by building complex scalars locally: three A items
(`def-complex-scalar-pairs-for-stone-weierstrass`,
`thm-complex-scalar-pair-field-and-conjugation-laws`,
`lem-dyadic-root-of-unity-filter`) plus
`def-self-adjoint-complex-function-algebra` resting on them. Its notes are candid
that this is "a deliberate closure-local re-mint". **It never offered the
orchestrator the third option, and that option is available and cheap.**

I checked disk. `field-extensions-and-the-complex-numbers` is **order 54,
published**, and its item list already contains everything the three re-minted
items prove:

| re-minted | published, order 54 |
|---|---|
| the field of coordinate pairs | `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field` |
| the $\mathbb{R}^2$ identification | `thm-complex-numbers-are-the-real-coordinate-plane` |
| conjugation, modulus, their laws | `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws` |
| the explicit unit-circle square root | `thm-every-complex-number-has-a-square-root` |

and `the-complex-exponential-and-eulers-formula` (**order 189, published**)
carries `thm-complex-nth-roots-and-roots-of-unity` and **`cor-sum-of-roots-of-unity`**,
whose Statement I read from disk — *"For $n\in\mathbb N$ with $n\ge2$, the sum of
all $n$th roots of unity is $0$"* — which is the whole content of
`lem-dyadic-root-of-unity-filter`, without the recursive dyadic construction.

Both edges are legal: 54 < 287 and 189 < 287, so both point backward and change
no page's `order`; I computed the `requires` closure of each and neither contains
`stone-weierstrass-general`, so neither introduces a cycle. This is the same
situation, and the same remedy, as D1 of the step-0 batching for
`ascoli-arzela → compactness`.

**Why this is not merely duplication.** The re-mint puts a *second, different*
$\mathbb{C}$ into the library. `ex-trigonometric-polynomials-are-dense-on-the-circle`
would then be a theorem about `def-complex-scalar-pairs-for-stone-weierstrass`,
not about the library's complex numbers, and a complex-analysis page wanting to
cite it would have to bridge the two definitions — through
`thm-complex-numbers-are-the-real-coordinate-plane`, which is the very item that
is out of closure. Batch 5's D3 ruling already set the principle: re-minting a
published result under a second id is duplication, not richness.

**Recommendation.** Add `field-extensions-and-the-complex-numbers` to 287's
`requires` (required), and `the-complex-exponential-and-eulers-formula`
(optional, and it removes `lem-dyadic-root-of-unity-filter` entirely). Then drop
`def-complex-scalar-pairs-for-stone-weierstrass` and
`thm-complex-scalar-pair-field-and-conjugation-laws`, and re-point
`def-self-adjoint-complex-function-algebra`,
`lem-real-part-of-a-self-adjoint-complex-function-algebra` and
`cex-disc-algebra-is-not-dense-without-self-adjointness` at the published items.
Net effect: the page loses 2–3 items of scalar plumbing and gains the library's
actual complex numbers. If the orchestrator declines both edges, the scaffold as
written is a legitimate fallback and I have no mathematical objection to it — the
dyadic root construction and the averaging argument in the disc-algebra
counterexample are both correct as described.

**Not a defect:** Carlen's real-codomain typo at Theorem 1.29 and the corrected
complex codomain are recorded in the notes and cross-checked against Erdman
21.2.14 and the Berkeley remark. That is the right handling.

---

## E. `complete-metrizability-and-baire` (277) — sufficient

40 A items, 6 B items. **T8c is covered completely.** I read T8c and checked it
row by row: `def-polish-space` with the stable id ✓, nowhere dense / meagre /
comeagre ✓, "do NOT re-mint completely metrizable" honoured — the scaffold
transfers it from the published `lem-complete-remetrisation` rather than coining
a second definition ✓, both Baire category theorems reused as published inputs
rather than re-minted (line ~1539 item 15's explicit instruction) ✓, Alexandrov
in both directions ✓, $\mathbb{N}^{\mathbb{N}}\cong\mathbb{R}\setminus\mathbb{Q}$ ✓,
Hilbert cube universality ✓, Cantor space surjecting onto every nonempty compact
metric space ✓, both `fs-` items ✓, and all four B-page topics ✓. On top of that
the pair closes the entire Čech-completeness band — definition, independence of
compactification, Frolík, the metrizable equivalence, locally compact Hausdorff,
Baire, closed subspaces, sums, countable products — which its task file left as
an honest open question. That is "build the machinery", done, and it is what
justifies the 40 items.

**`def-polish-space` is confirmed as my task file required:** present, on the **A**
page, `landmark: true`, id exactly `def-polish-space`, not deferred and not homed
on the B page. `research/plan-probability-track.md`'s PT-3/PT-7/PT-11/PT-18
consumers are safe.

**Not thin.** 40 items over 66 harvested headings from four sources, with a real
decomposition ratio rather than a transcribed table of contents.

### E1. The continued-fraction band collides with a planned number-theory page — record it now

Four items — `def-simple-continued-fraction-coding`,
`lem-simple-continued-fraction-convergents-and-cylinders`,
`thm-simple-continued-fractions-parametrise-the-irrationals`,
`cor-baire-sequence-space-is-homeomorphic-to-the-irrationals` — build simple
continued fractions from scratch on a topology page.

`research/plan-number-theory-track.md` §NT-7 is a planned A/B pair,
`regular-continued-fractions-and-diophantine-approximation`, **spec order 57.013,
`items: []`**, whose enumerated inventory includes
`def-regular-continued-fraction`, `def-convergents-of-regular-continued-fraction`,
`lem-continued-fraction-convergent-recurrence`,
**`lem-continued-fraction-determinant-identity`**,
`thm-continued-fraction-algorithm-for-real-numbers` and
`thm-rational-continued-fraction-termination` — which is, item for item, what the
scaffold's `lem-simple-continued-fraction-convergents-and-cylinders`
("convergents, **determinant identities**, and nested irrational cylinders") and
`thm-simple-continued-fractions-parametrise-the-irrationals` prove.

**Nothing is currently broken and nothing blocks step 4.** NT-7 is unbuilt, is
outside this campaign, and sits at order 57.013 — *earlier* in reading order than
277 — so 277 cannot cite it and must build what it needs. T8c mandates
$\mathbb{N}^{\mathbb{N}}\cong\mathbb{R}\setminus\mathbb{Q}$, so dropping the band
is not an option. The chosen ids do not collide with NT-7's (I checked all four
against the full plan). The action is to **record the collision explicitly** in
the batch notes and the coverage, naming the NT-7 ids above, so that when NT-7 is
built its Beta finds the record instead of rediscovering it, and so the eventual
duplication is an owner decision rather than a surprise. I would also keep the
band scoped to exactly what the homeomorphism needs, which it currently is.

### E2. Two declines name no licensing page — both verified true, both should say why more sharply

Both are honest "no page licenses this" cases rather than the prose-only
deferrals of §A4, and **I verified both against the actual sources** (see the
declines section). Recommend adding an explicit `license_page: null` with a
one-line "no planned page licenses this; reason" so the two are distinguishable
from an omission by anything reading the file mechanically.

### E3. `thm-hilbert-cube-universal-for-separable-metrizable-spaces` claims more than its harvested heading (lower)

The coverage maps Marker's Theorem 1.4 to it. I extracted Marker's text: his
theorem reads *"Every Polish space is homeomorphic to a subspace of $H$"*, while
the scaffolded item is stated for every **separable metrizable** space. The
generalisation is true and Marker's own proof carries it (it uses only $d<1$ and
a dense sequence), and I confirmed it is **not** a re-mint — `metrization-theorems`
publishes `cor-urysohn-metrization` ("every regular $T_1$ second-countable space
is metrizable") but no Hilbert-cube embedding, and the two published
`ex-hilbert-cube`-family items are both on B pages. The item's `provenance.statement`
is tagged `literature-derived`; if Kunzinger or another read source carries the
separable-metrizable form, name it in the notes, otherwise `ai-altered` is the
right tag. Step-5 note, not a scaffold change.

---

## F. `covering-spaces-and-lifting` (293) — sufficient

32 A items, 8 B items, designed from sources because there is no design block —
which my task file flagged as making the harvest load-bearing. Five sources, 50
harvested headings, Hatcher §1.3 and May Ch. 3 as the two textbook treatments
plus Gualtieri's handout as a third.

**The differential-geometry obligation at `plan-differential-geometry-track.md`
§9.3 is met in full.** I read §9.3 and grepped all thirteen mentions of this page
across the DG track. It owes stable definitions ✓, existence **and** uniqueness of
path lifts ✓ (`thm-path-lifting-for-covering-maps`), homotopy lifts ✓
(`thm-homotopy-lifting-for-covering-maps`), deck transformations ✓, and universal
covers under the printed hypotheses ✓.

**The hypotheses are on the items that need them**, which is what I was told to
check hardest. `thm-covering-space-lifting-criterion` carries "path-connected
locally path-connected" in its title; `lem-path-class-projection-is-a-covering-map`
and `thm-universal-cover-existence` both carry "path-connected locally
path-connected semilocally simply connected"; `cor-connected-cover-of-a-simply-connected-space-is-trivial`
carries "locally path-connected"; `thm-sheets-equal-fundamental-group-index`
carries "nonempty path-connected total space";
`thm-universal-covering-spaces-force-semilocal-simple-connectedness` correctly
records that **no** local path-connectedness is needed for the necessity
direction. `def-semilocally-simply-connected-space` is its own landmark item with
an explicit basepoint convention.

**The Hawaiian earring is present and is the right witness.**
`ex-the-hawaiian-earring-has-no-universal-cover` is titled "*is locally
path-connected* but has no universal cover" — which is the precise point (local
path-connectedness alone is not enough; semilocal simple connectedness is the
hypothesis that bites), and it is true of the shrinking wedge. It routes through
`ex-the-unit-loop-in-real-line-mod-integers-is-essential`, which proves
essentiality by lifting rather than by computing $\pi_1(S^1)$ — the correct move
given the scope boundary.

**The scope boundary is declined correctly and with page ids.** All eleven
covering deferrals name `classification-of-covering-spaces` or
`the-fundamental-group-of-the-circle` in their reason text — the Galois
correspondence, subgroup realisation, regular covers, the normalizer quotient,
the graph-cover catalogue and $\pi_1(S^1)$. That is exactly the "correct kind of
decline" my task file described. See F2 on their structured form.

**Not thin at 32.** Against Hatcher §1.3 the page carries everything up to but
excluding classification, plus material Hatcher leaves as exercises (the
composition theorem, compactness invariance, pullbacks) and the monodromy action,
which Hatcher does not develop at all.

### F1. Two titles state less than their proofs assume

`thm-universal-cover-uniqueness-and-dominating-property` — "Universal covers are
uniquely isomorphic over the base and lift to every connected covering" — and
`thm-deck-group-of-a-universal-cover-is-the-fundamental-group` both carry
*unqualified* titles, while their strategies open with "Let the base be
path-connected and locally path-connected" and "For a path-connected locally
path-connected semilocally simply connected base". Every other hypothesis-bearing
item on this page prints its hypotheses in the title; these two do not.

This is `PREVENTIONS` §A2 in miniature and the judges structurally cannot catch
it — they read Statements, not titles. At step 3 it costs two title edits.

### F2. The eleven covering deferrals name their licensing page in prose but not in the field (lower)

Every one names `classification-of-covering-spaces` or
`the-fundamental-group-of-the-circle` inside `reason`, so the §A4 requirement is
met in substance and `coverage-checklist` passes. But batch 2's rows use a
structured `license_page` field for the same purpose and batch 3's do not, so the
run's coverage files are not uniformly machine-readable on the one field that
distinguishes a licensed deferral from a silent drop. Recommend adding
`license_page` to the eleven rows to match batch 2's shape. Cosmetic; do it now
because it is free now.

### F3. `ex-the-hawaiian-earring-has-no-universal-cover` asserts local path-connectedness without proving it (lower)

The title asserts it, the strategy never establishes it. It is true and the proof
is short (every basic neighbourhood of the wedge point contains all sufficiently
small circles entire and arcs of the finitely many larger ones, all through the
wedge point, hence is path-connected), but a title that asserts a property the
strategy does not reach is the §A2 shape again. Add the clause to the strategy.

---

## Declines checked against disk and against the sources

This is the check my task file called the cheapest high-value one, and it turned
up one false claim (C3) and confirmed four others as correct. Where the decline
was about a *source*, I verified by **extracting the PDF text**, never by
fetching a URL — `pypdf` in a `/tmp` venv, which installed cleanly here.

| decline | verdict |
|---|---|
| batch 3: Kunzinger Prop. 11.3.5, *"every $\sigma$-compact metrizable space is Polish"*, declined as **false** | **Correct, and I can name the missing hypothesis.** The printed statement is verbatim as quoted (PDF page 105). The Beta's counterexample holds: $\mathbb{Q}$ is countable hence $\sigma$-compact, metrizable, and not completely metrizable. I went further and read the source's own proof, which invokes its 7.2.7 — and 7.2.7 (PDF page 68) opens *"Let $X$ be **locally compact**. TFAE…"*. So 11.3.5's proof silently uses a local-compactness hypothesis its statement omits. Recommend the reason record that, since it turns "this source is wrong" into "this source dropped a hypothesis", which is both fairer and more useful. |
| batch 3: MFF *"Theorem 75, arbitrary products of Čech-complete spaces are Baire"*, deferred because *"the source explicitly omits its proof"* | **Correct, verbatim.** Located as **Věta 75** (PDF page 19): *"The product of arbitrarily many Čech-complete spaces is Baire. Důkaz. Proof was omitted and will not be a part of the exam."* Also confirmed Věta 71 = Frolík's internal characterisation and Věta 73 = Baire for Čech-complete, both harvested. **Note:** this source is in Czech (`Věta`, `Důkaz`), so its results are not labelled "Theorem 75" as the coverage row and the batch notes write them. Not a fidelity failure — the numbering is right — but the locator should say so, since a later reader searching for "Theorem 75" will find nothing. |
| batch 2: BBT's Arzelà theorem, declined as **false as printed** | **Correct, verbatim.** PDF page 18: *"Let $X$ be compact, $(Y,d)$ be a metric space and $\{f_n\}$ … If $\{f_n\}$ is equicontinuous and if for each $x\in X$ the set $\{f_n x\}$ is **bounded**, then $\{f_n\}$ has a subsequence that converges uniformly."* The Beta's counterexample is right: constant maps into an infinite diameter-one discrete target are equicontinuous and bounded with no uniformly convergent subsequence. The corrected proper-target version is scaffolded and the counterexample is on the B page. Also verified BBT's **Ascoli's** theorem is stated for locally compact Hausdorff $X$ and metric $Y$ exactly as `thm-ascoli-arzela-general` restates it, and that BBT's Theorem 5.8 is for Hausdorff $Y$ — the scaffold narrows to metric $Y$, which is safe, and adds the Choice charge BBT leaves implicit. |
| batch 2: Gelfand duality, declined to `gelfand-theory-and-commutative-c-star-algebras` | **Correct.** A concrete page id from `plan-functional-analysis-track.md`, not "a functional-analysis track". |
| batch 5's `lem-integer-part` decline (recorded as D4, outside my group) | Noted only because it is the inverse case my task file cited; I did not re-check it. |
| batch 2: **`cor-compact-subsets-of-cx-for-a-proper-metric-target`'s scalar hedge** | **FALSE for the real case — finding C3.** `thm-heine-borel-rn` is published, is in `ascoli-arzela`'s closure, and its clause 3 covers $\mathbb{R}$ directly. The pair's own B page already cites it twice. Only the complex case is genuinely blocked. |
| batch 1: CA-2's $e^{-1/x^2}$ counterexample, silently absent | **Omission is correct, but undispositioned — finding A3.** `cex-smooth-function-not-equal-to-its-maclaurin-series` is published on `the-exponential-function-examples`, a B page, and that page is not in 305's closure. Twice uncitable. |
| batch 1: CA-3's $x\sin(1/x)$ counterexample, silently absent | **Omission is defensible, but undispositioned — finding B2.** `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` is published on `arc-length-and-rectifiable-curves-examples`, a B page, so CA-3's "cite, do not rebuild" is not executable. |
| batch 1: no `307 → 305` cross-pair edge needed | **Correct.** I re-derived it: CA-2's development never uses a contour integral and CA-3's never uses a power series. No item on either page depends on the other. |

Two source locators I additionally spot-checked and found faithful: **Ahlfors
Ch. 2 §§2.1–2.5, printed pp. 33–42** — the Stolz-angle remark is at printed page
41 per the book's own index and appears in the extracted text at the end of the
Abel proof, inside the claimed range; and **Marker DST Theorem 1.4** — present as
claimed at the head of §1 (see E3 for the one place the scaffold states more than
Marker does).

---

## Split recommendation

**No split anywhere in this group, and none is close.** Largest A page is
`complete-metrizability-and-baire` at 40 against the 60 ceiling. Sizes:
305 → 28, 307 → 21, 285 → 18, 287 → 19, 277 → 40, 293 → 32. `validate-plan`'s
`size` check cannot fire.

On the opposite question my task file asked — is either batch-3 page *thin* for
its remit — **no, both are the richest pages in my group.** 277 covers every T8c
row and adds a complete Čech-completeness band; 293 covers every §9.3 obligation
and adds monodromy, pullbacks and the composition theorem that Hatcher leaves as
exercises. The genuinely thin pair is `ascoli-arzela` — not in item count, which
is right for the subject, but in source backing (C1).

---

## What I could not check, stated plainly

1. **Whether batch 2's Beta actually read Shapiro's notes at the live URL.** The
   host serves an Incapsula challenge to me under both a default and a browser
   user-agent. The Beta reports reading it through browser PDF text extraction,
   which is plausible — a real browser session may clear the challenge. I read
   the archived copy instead and the harvest is faithful to it, so the question
   is moot for correctness; it is not moot for C2, because a *reader* of the
   published page hits the same wall.
2. **Erdman, Berkeley 205B and Carlen (batch 2), Peterson and Hatcher/May/Gualtieri
   (batch 3), Stein–Shakarchi and Howell–Mathews (batch 1) were not text-verified.**
   I extracted and checked Kunzinger, BBT, MFF, Marker and Ahlfors. The five I
   checked were faithful in every row I looked at, which is why I stopped; a
   different sample could still turn something up, and the step-6 faithfulness
   pass should not treat this as a completed check.
3. **Proofs.** None exist yet and I reviewed none, per the brief. Every judgement
   above about a proof is a judgement about a `strategy` field.
4. **Provenance beyond the load-bearing rule.** Only **batch 3** declares
   provenance in its manifest (86 of 86 items); batches 1 and 2 declare none in
   `pages.json` and carry it in their notes tables instead. That is not a defect
   — SCHEMA puts provenance in item frontmatter, which step 5 writes — but it
   means my check had two different evidence bases. On the one rule that binds
   now: **no `ai-generated` Statement is load-bearing in any of the five pairs.**
   Batch 3's manifest has zero `ai-generated` statements. Batch 2's notes declare
   three (`cex-boundedness-does-not-replace-pointwise-relative-compactness`,
   `ex-compact-affine-interpolation-family`,
   `ex-finite-space-function-algebras-interpolate-exactly`), all B-page leaves,
   and I confirmed from the manifests that nothing cites any of them. Batch 1
   declares no provenance in either artifact at item level, so for batch 1 this
   rests on its notes prose alone and should be re-checked at step 5.
5. **The DG track's thirteen references to this page** were read at their
   grep locations, not in full context. I am confident about §9.3, which is
   explicit; I am less confident that no individual DG deferral wants something
   from 293 that is now routed to 299 by batch 3's finding #5. That routing looks
   right to me and I have no counterexample, but it deserves the orchestrator's
   eye when it settles that finding.

---

## Re-check before step 4

Per the brief I re-check after the orchestrator routes these to the owning Betas.
The three things I will re-run mechanically are: the full `deps`-versus-closure
sweep with whatever `requires` edges are approved (it must come back at 0 broken
edges, not fewer); the id-collision sweep against `items/`, `plan-spec.json` and
batches 4–6; and `coverage-checklist` plus `content-policy --manifest-only` on
all three batches. The findings needing a mathematical re-read rather than a
gate are A1, C1, C3 and D1.

---

# ADDENDUM — re-dispatch verification, 2026-08-16

This section was appended by a **second dispatch of the identical step-3 review
brief** (`--label step3-a`; the first ran as `--label alpha-step3-a` and its
result landed at `alpha-alpha-step3-a.result.json`). Nothing above is altered and
**no finding is renumbered.** Two blockers found below are new and are process,
not mathematics.

## Everything above reproduces from disk

The batch scaffolds have not changed since the review was written
(`batch-1/2/3.pages.json` last written 01:37, 01:37, 02:39; the review at 03:15).
I re-ran the mechanical claims independently rather than trusting them:

| claim | re-verified |
|---|---|
| §G — 23 `deps` outside their page's declared closure | **23**, and the same four pages, from an independently written sweep |
| §G — the four recommended edges close it | **0 broken**, not merely fewer |
| §G1 — the batch-3 pair must be approved as a package | confirmed: `monoids-groups-and-subgroups` enters 277's closure under the **approximation** edge and **not** under the Stone–Čech edge, so `thm-division-algorithm-in-z` stays broken if only the latter is approved |
| §G2 — no id collisions | 203 ids, 0 internal dupes, 0 against `items/*.md`, 0 against `plan-spec.json`, 0 against batches 4–6 (131 ids) |
| §G3 — gates green, non-vacuously | coverage-checklist 89 / 47 / 116 harvested, content-policy 69 / 48 / 86 scoped, 0 errors |
| §C3 — the decline is false for the real case | confirmed: `thm-heine-borel-rn` is homed on `compactness-in-metric-spaces`, **in** 285's closure, and clause 3 states the $\mathbb{R}$ case verbatim. `field-extensions-and-the-complex-numbers` is genuinely **not** in 285's closure, so the complex half of the hedge is correct — the finding's split is exact |
| §D1 — the ℂ re-mint is avoidable | confirmed: page 54 `status: published`, not in 287's closure, and 287 not in **its** closure, so the edge is backward and acyclic. `cor-sum-of-roots-of-unity` reads verbatim as quoted |
| §E — `def-polish-space` | on the **A** page `complete-metrizability-and-baire`, `landmark: true`, id exact |
| §A1 — silent drop | confirmed: zero occurrences of "unbounded" in either `batch-1.pages.json` or `batch-1.coverage.json` |

## BLOCKER 1 — the batch 1–3 fix briefs route to finding ids that do not exist

`research/frontier-14-beta-{1,2,3}-fix.task.md` each tell their Beta:

> Your findings are the ones numbered `B1-*` / `B2-*` / `B3-*` in its report

**This report contains no finding under any of those prefixes.** Group Alpha *b*
numbered its findings `B4-1, B4-2, …` and the fix-task template was built around
that scheme; this report numbers by **page section**. Literal match counts against
this file are `B1-` → 0, `B2-` → 0, `B3-` → 0.

The failure is not a near-miss. `B1`, `B2` and `B3` **are** real finding ids here,
and all three belong to **batch 1's page 307** — so a Beta matching loosely gets
another batch's work. And the brief supplies the escape hatch that makes it
silent:

> If the report contains no `B1-*` findings, say so in your notes and exit; a
> clean batch is a valid outcome and costs nothing.

Left alone, all three Betas write an honest "clean batch" note and **17 of 18
findings are dropped**, including C3 (a decline that is false of disk), D1 (a
second $\mathbb{C}$ entering the library) and A1 (a design theorem silently
dropped). That is `PREVENTIONS` §B2 reproduced one layer up — at routing rather
than at summarisation.

### The routing map — `B1-*` `B2-*` `B3-*`

Placed here deliberately, carrying the literal prefixes, so that a Beta searching
this file for its stated prefix lands on this table instead of on nothing.

| batch | pages | its finding ids in this report | severity |
|---|---|---|---|
| **1** | 305, 307 | **A1** | blocks `sufficient` |
| | | **B1** | blocks `sufficient` |
| | | **A2**, **B2** | should fix now — undispositioned design rows |
| | | **A3**, **A4** | record-only hygiene |
| | | **B3** | step-5 watch, no scaffold edit |
| **2** | 285, 287 | **C3** | blocks `sufficient` — false decline |
| | | **D1** | blocks `sufficient` — pending the orchestrator's edge decision |
| | | **C1**, **C2** | blocks `sufficient` — single-treatment landmark; bot-walled source |
| | | **C4** | step-5 watch, no scaffold edit |
| **3** | 277, 293 | **F1** | should fix now — two titles under-state hypotheses |
| | | **E1**, **E2**, **F2** | record-only; free at step 3, not later |
| | | **E3**, **F3** | step-5 watch / one-line strategy edit |
| **all** | — | **G1**, **G2**, **G3** | orchestrator-owned, not Beta work |

Both batch-3 pairs are `sufficient`; F1 is still worth the two title edits while
they are free. The fix briefs also promise "the report's severity table" — there
was none, so the column above supplies it.

## BLOCKER 2 — the run is at `4-splice` with none of this applied

`run-supervisor.mjs --run frontier-14 --state` reports `3-review` **done**
("6/6 units covered by 2 dispatches") and `current: 4-splice`, 0/6 splice
receipts. But on disk:

- **No `## Step-3 fix pass` section exists in `batch-1`, `batch-2` or `batch-3`
  notes.** Batches 4–6 have theirs and their fix dispatches ran
  (`beta-fix-batch-{4,5,6}.result.json`); **there is no `beta-fix-batch-{1,2,3}`
  dispatch at all.** Group a's fix pass has not run.
- **`research/frontier-14-step3-decisions.md` ends at D4.** None of the four
  `requires` edges in §G is approved.

So splicing now fails `validate-plan` with the **23 `undeclared-prereq` errors I
reproduced above**, and carries A1, C1, C2, C3 and D1 into authoring, where every
one of them stops being a scaffold edit and becomes a rewrite. The stage is
`done` because the review dispatches returned, which is not the same as the
review having been acted on.

**Order of operations before step 4:** settle the four §G edges in
`step3-decisions.md` (batch 3's two as a package, per G1) → re-issue the three fix
briefs with the ids above → run the batch 1–3 fix pass → re-check. The re-check
must come back at **0 broken edges, not fewer**.

## What I did not do

I did not edit `research/frontier-14-beta-{1,2,3}-fix.task.md`, `plan-spec.json`,
`items/`, `library/` or any Beta file — the brief forbids all of them, and
rewriting another role's dispatch brief is a decision to surface, not to take
silently. The correction is placed in this file because it is the file all three
fix briefs already point at. If the orchestrator would rather fix the briefs
directly, the ids are in the table above and the fix is mechanical.
