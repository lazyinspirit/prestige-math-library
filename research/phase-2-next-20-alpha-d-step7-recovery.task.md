# Step 7 adjudication — group **d**, run `phase-2-next-20`

You are the group Alpha for batches **6**: 1 A/B pair(s), 2 page(s), 36 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `quantitative-hyperbolic-geometry-toolkit` | A | group-theory | 302.0042 | `asymptotic-cones-and-the-sublinear-triangle-criterion`, `filters-and-ultrafilters`, `cayley-graphs-word-metrics-and-quasi-isometry`, `geometric-actions-svarc-milnor-and-growth`, `small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations`, `the-logarithm-and-general-powers` |
| 6 | `quantitative-hyperbolic-geometry-toolkit-examples` | B | group-theory | 302.0044 | `quantitative-hyperbolic-geometry-toolkit` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantitative-hyperbolic-geometry-toolkit` — Quantitative Hyperbolic Geometry Toolkit (31 item(s))

- `def-hg-toolkit-slim-triangles-products-and-four-point-constants` · definition — Hg toolkit slim triangles products and four point constants
- `def-hg-toolkit-local-geodesics-and-hausdorff-control` · definition — Hg toolkit local geodesics and hausdorff control
- `def-hg-toolkit-hyperbolic-group-and-stable-length` · definition — Hg toolkit hyperbolic group and stable length
- `lem-geodesic-triangles-in-trees-are-tripods` · lemma — Geodesic triangles in trees are tripods
- `lem-slim-triangles-imply-the-gromov-product-inequality` · lemma — Slim triangles imply the gromov product inequality
- `lem-the-gromov-product-inequality-implies-the-four-point-condition` · lemma — The gromov product inequality implies the four point condition
- `lem-the-four-point-condition-implies-slim-triangles` · lemma — The four point condition implies slim triangles
- `lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh` · lemma — Halfspace separation for the local-geodesic mesh
- `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics` · lemma — Local geodesics in a hyperbolic space are uniform quasi geodesics
- `lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics` · lemma — Hg toolkit polygonal interpolation of quasi geodesics
- `lem-hg-toolkit-exponential-projection-contraction` · lemma — Exponential contraction of projection away from a quasiconvex set
- `thm-morse-stability-with-explicit-parameter-dependence` · theorem — Morse stability with explicit parameter dependence
- `lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse` · lemma — A quasi isometry of geodesic spaces has a controlled coarse inverse
- `lem-hyperbolicity-is-transported-by-a-quasi-isometry` · lemma — Hyperbolicity is transported by a quasi isometry
- `lem-short-loop-relators-give-a-finite-dehn-presentation` · lemma — Short loop relators give a finite dehn presentation
- `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons` · lemma — Linear isoperimetry implies uniformly thin geodesic bigons
- `lem-infinite-order-elements-have-positive-stable-translation-length` · lemma — Infinite order elements have positive stable translation length
- `lem-axis-fellow-travelling-controls-the-centralizer` · lemma — Axis fellow travelling controls the centralizer
- `def-hg-toolkit-gromov-sequences-and-boundary-product` · definition — Hg toolkit gromov sequences and boundary product
- `lem-asymptotic-gromov-sequences-form-an-equivalence-relation` · lemma — Asymptotic gromov sequences form an equivalence relation
- `lem-boundary-products-are-independent-of-representative-and-basepoint` · lemma — Boundary products are independent of representative and basepoint
- `lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison` · lemma — Hg toolkit proper ray compactness and sequence comparison
- `lem-quasi-isometries-extend-to-boundary-homeomorphisms` · lemma — Quasi isometries extend to boundary homeomorphisms
- `def-hg-toolkit-loxodromics-and-independent-poles` · definition — Hg toolkit loxodromics and independent poles
- `lem-hg-toolkit-finitely-many-cayley-cone-types` · lemma — Hg toolkit finitely many cayley cone types
- `lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements` · lemma — Hg toolkit infinite hyperbolic groups have infinite order elements
- `lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics` · lemma — Hg toolkit non elementary groups have independent loxodromics
- `lem-independent-loxodromics-have-disjoint-pole-neighbourhoods` · lemma — Independent loxodromics have disjoint pole neighbourhoods
- `lem-loxodromic-elements-have-north-south-boundary-dynamics` · lemma — Loxodromic elements have north south boundary dynamics
- `lem-hg-toolkit-free-cayley-tree-from-reduced-words` · lemma — Free Cayley trees from reduced-word normal form
- `thm-quantitative-hyperbolic-geometry-toolkit` · theorem — Quantitative hyperbolic geometry toolkit

### `quantitative-hyperbolic-geometry-toolkit-examples` — Quantitative Hyperbolic Geometry Toolkit: Examples (5 item(s))

- `ex-morse-stability-in-a-tree` · example — Morse stability in a tree
- `ex-a-local-geodesic-constant-in-a-cayley-graph` · example — A local geodesic constant in a cayley graph
- `ex-boundary-extension-of-a-tree-quasi-isometry` · example — Boundary extension of a tree quasi isometry
- `ex-ping-pong-for-two-loxodromics` · example — Ping pong for two loxodromics
- `cex-properness-is-needed-for-the-compact-boundary-package` · counterexample — Properness is needed for the compact boundary package

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-644c9cff8fb49bc30a6e86ac · `def-hg-toolkit-gromov-sequences-and-boundary-product`** (from group d, gap-a-reader-closes) — The boundary $\partial X$ is introduced as "the set of equivalence classes of Gromov sequences" while the equivalence relation is only proved in a separate item; that item (`lem-asymptotic-gromov-sequences-form-an-equivalence-relation`) is not named in the body and is not declared as `justified_by`, so the quotient and the supremal boundary product are formally conditional on a later item. The text does say "Once the equivalence relation has been proved", so a reader closes this in seconds, but the declaration convention is worth an explicit adjudication.
- **s8a-22d938ba168a232c474694e2 · `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics`** (from group d, gap-a-reader-closes) — Step 2.1 needs the terminal margin $d(x_0,x_n)-t_{n-1}\ge3\delta/2$, i.e. $\operatorname{dist}(x_n,H_{n-1})\ge3\delta/2$ for $H_{n-1}=D(x_n,x_{n-1})$. The cited halfspace-separation lemma displays only $\operatorname{dist}(x_0,D(x_1,x_0))$ and $\operatorname{dist}(x_2,D(x_1,x_2))$ (the two sets that contain the middle point), not the variant with the outer point as the closer one. The missing case is one triangle-inequality line (or the same argument on the reversed geodesic), so the gap closes immediately, but the citation as written does not literally cover it.
- **s8a-290a5c3080d8fe4bd3d635f0 · `lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics`** (from group d, gap-a-reader-closes) — Step 4.1 asserts that the infinite class of indices with one fixed value of $b_j=g^{-i(j)N}h^j$ is unbounded and that "step 3.1 gives a later occurrence $j_2>j_1$ with $i(j_2)>i(j_1)$". Existence of such a later occurrence needs the observation that two occurrences with equal $i$ would force $h^{j_2-j_1}=e$, contradicting infinite order (equivalently, $i$ cannot be bounded on an unbounded infinite class while $i(j)\to\infty$). This is reconstructible but not spelled out.
- **s8a-7360e0e2ff983661bd499a2d · `thm-morse-stability-with-explicit-parameter-dependence`** (from group d, gap-a-reader-closes) — Step 13.1 closes the induction with "Every finite $b-a$ is at most $nh_0$ for some integer $n$" - the Archimedean property of the complete ordered field - which is not among the local real facts assembled in step 1.4/F6; step 14.1 also passes an inequality to the limit $\rho\downarrow\kappa$ without a cited order-passage lemma. Both are elementary and the sister item `def-hg-toolkit-hyperbolic-group-and-stable-length` proves the Archimedean claim inline, so this is polish, but the two passages are the induction's formal entry and exit.
- **s8a-68de9ac1335feec2a9bdf477 · `lem-hg-toolkit-exponential-projection-contraction`** (from group d, presentation) — The second paragraph of the Statement says "For a specified geodesic segment $Y=H$, the sharper estimate holds with the additive $2K+8\rho$ term omitted and with $K=0$ in the exponential and distance hypothesis", but does not write the sharper formula; the reader must reconstruct it as $d(p_a,p_b)\le\max\{5\kappa,4\sqrt2\lambda(b-a)\exp(-(D-\varepsilon/2)\log2/(5\rho))\}$ for $D\ge15\rho/2+\varepsilon/2$. Steps 4.1-5.1 do prove that formula, so only the statement's explicitness is at issue.
- **s8a-3bf8b5b46c07f244c33bd543 · `quantitative-hyperbolic-geometry-toolkit-examples`** (from group d, presentation) — The B page prose says the examples "do not assert completion of the companion toolkit's open Morse and dynamics theorems". The substantive claim (the five dependency closures avoid `thm-morse-stability-with-explicit-parameter-dependence`, the loxodromic/pole items and the north-south item) holds: the examples use only definitions, the tripod lemma, the free Cayley-tree lemma, the boundary-product topology item and published suppliers. The word "open" describes an authoring state that no longer matches the A page, which now carries full draft proofs of those items.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-20`

Read `research/phase-2-next-20-judge-closure.json`,
`research/phase-2-next-20-judge.jsonl`,
`research/phase-2-next-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-20-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-20-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-20-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
