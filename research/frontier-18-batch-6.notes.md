# frontier-18 — Beta-6 batch notes

Run `frontier-18`, batch `6`. One A/B pair, real-analysis:
`the-divergence-theorem-and-classical-stokes` (order 288.00017) and its companion
`the-divergence-theorem-and-classical-stokes-examples` (order 288.00018).
Design section: `research/plan-realanalysis-completion-track.md` L487 (RC-9).

Artifacts owned by this batch and written by it:
`research/frontier-18-batch-6.pages.json`,
`research/frontier-18-batch-6.notes.md`,
`research/frontier-18-batch-6.coverage.json`,
`research/frontier-18-batch-6.proof-contracts.json`. All four exist on disk.

---

## Continuity checkpoint

- **Substage:** steps 1-2 complete. All four artifacts written; batch-scoped gates
  run. The proof contract was written in a **second dispatch** of Beta-6, after
  the first produced the manifest, the coverage file and these notes and stopped
  before `research/frontier-18-batch-6.proof-contracts.json` existed. That second
  pass also found four defects in the first pass's own manifest, listed as
  findings 13-16 below and **already applied to the manifest**.
- **Gates actually run here, with their output:**
  - `node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-6.coverage.json --stamp` -> `3/3 source(s) fetch-verified`.
  - `node tools/coverage-checklist.mjs research/frontier-18-batch-6.coverage.json` -> `1 page(s), 92 harvested result(s), 0 error(s), 0 warning(s)`. Re-run after the manifest edits: unchanged.
  - `node tools/content-policy.mjs research/frontier-18-batch-6.pages.json --manifest-only` -> `60 scoped item(s), 0 error(s), 0 warning(s)`, re-run after the manifest edits.
  - `node tools/url-sweep.mjs --coverage research/frontier-18-batch-6.coverage.json --out ... --recover --fail-on-dead` -> `3/3 live; 0 failed`. Its `--out` artifact was deleted again, because the namespaced write protocol gives this batch three files and a sweep receipt is the engine's to keep.
  - `node tools/merge-proof-contracts.mjs --level frontier-18 <tmp> research/frontier-18-batch-*.proof-contracts.json` -> `wrote ... with 381 scoped item(s) from 7 batch contract(s)`; this batch's 50 ids merge with no `duplicate-item`. The merged file was written to a temporary path and discarded: the level-wide merge is the engine's artifact, not this batch's.
  - `node tools/proof-contract.mjs research/frontier-18-batch-6.proof-contracts.json` -> `50 error(s), 0 warning(s), 0/50 item(s) checked`, **every error `item-missing`**. That is the correct state at step 2: the gate validates a contract against authored items on disk and nothing is authored until step 5. `research/frontier-18-batch-7.proof-contracts.json` reports the same shape (`60 error(s)`, all `item-missing`). `risk-report` likewise reports `50 error(s), 0 item(s) routed` for the same reason, and `finite-smoke` reports `0 error(s), 0 check(s) over 0/50 item(s) carrying obligations`, which is a genuine absence (see boundary note 9) and not an unread registry.
  - `node tools/validate-plan.mjs research/plan-spec.json` and `node tools/depsource.mjs` are **not** run here: this batch's items are not in the spec until `tools/splice-plan.mjs` runs at step 4. Expectations are recorded under "Gate expectations" below.
- **Contract shape:** 50 scoped items (every proof-bearing item on both pages; the
  9 definitions and the 1 remark are out of scope by the `QUALITY-CONTROLS.md`
  rule), 464 citation entries, 312 numbered-step entries, 400 boundary rows
  (8 per item, none templated), `finite_smoke: []` throughout, no `risk_review`
  (Alpha writes those at step 6).
- **Next action if this batch is resumed:** nothing is outstanding at steps 1-2.
  At step 5 the author is Beta-6 again; read "Authoring notes for step 5" below
  and the proof contract before opening any item file.

## Design-vs-spec drift (recorded, not adjudicated here)

`research/plan-spec.json` gives the A page `requires: ["regular-surfaces-and-surface-integrals"]`.
The design section RC-9 says ``requires``: RC-8, `fubini-and-change-of-variables`.
**The spec is what this scaffold is built against**, per the dispatch. The
difference is not load-bearing for the mathematics: `regular-surfaces-and-surface-integrals`
declares `improper-and-parameter-dependent-multiple-integrals`, which declares
`fubini-and-change-of-variables`, so every change-of-variables and Fubini item
used here is inside the declared closure. Stage 1's `drift` unit owns the
adjudication; this batch changed nothing.

---

## The design decision this pair turns on

RC-9 asks for the divergence theorem "on a finite gluing of elementary solid
regions, proved coordinate direction by coordinate direction exactly as the
published Green's theorem is proved on elementary plane regions". Following that
literally exposes one problem which had to be solved before any item could be
written, and the solution shapes the whole A page.

**The problem.** A $z$-simple solid is $E=\{(x,y,z):(x,y)\in D,\ \gamma_1\le z\le\gamma_2\}$.
The volume side of the identity needs only continuous $\gamma_i$: the published
`thm-solid-between-continuous-graphs-fubini-formula` supplies it. The flux side
needs the top and bottom faces to be *regular surface patches* in the sense of the
published `def-admissible-regular-parametrized-surface-patch`, whose parametrization
must be $C^1$ **on an open neighbourhood of the closed parameter region**. If the
faces are required to be graph patches $(x,y)\mapsto(x,y,\gamma_i(x,y))$, that
forces $\gamma_i$ to be $C^1$ up to and past $\partial D$ — and then

- the closed **ball** is not a $z$-simple region ($\sqrt{R^2-x^2-y^2}$ has
  unbounded gradient at the equator),
- the **cylinder** is not an $x$-simple region ($\pm\sqrt{R^2-y^2}$ likewise), and
- **no finite decomposition repairs either**: the obstruction is that the surface
  is vertical at the equator, which no cut removes.

The class would have been boxes and mild deformations of boxes, and the design's
own B page — the ball's volume from its boundary flux, the inverse-square flux
through a sphere — would have been out of scope.

**The solution, and it is the reason for four otherwise unexpected items.** Do not
require the graph faces to be graph *patches*. Require only that each upper face
patch $\varphi_j$ has its image in the graph and has $\det D(\pi_k\circ\varphi_j)>0$
on the interior of its parameter region, where $\pi_k$ is the cyclic coordinate
projection. Then the flux integrand is exactly the change-of-variables integrand
for $\pi_k\circ\varphi_j$, and the face contributes $\int_{V_j}R(\cdot,\gamma_2)$
over the projected open image $V_j$. With the eight spherical octants, the ball
satisfies this in all three directions at once; so does the cylinder with two caps
and four side quarters.

What that costs is a change-of-variables theorem the library does not have: the
published `thm-change-of-variables-for-compact-jordan-sets` needs injectivity and
an invertible derivative on an **open** set containing the compact one, and a
spherical octant has vanishing projected Jacobian on its parameter boundary. So
this page builds

- `lem-c-one-images-of-content-zero-compact-sets-have-content-zero`, and
- `lem-change-of-variables-with-a-degenerate-parameter-boundary`,

the second being change of variables for a $C^1$ map injective and regular only on
the *interior* of a compact Jordan set. This is exactly the "build the missing
prerequisite" case of the self-contained-scope rule: without it the ball is
undeliverable, and the alternative — dropping the ball — is not a permitted
disposition. It is also the theorem that makes polar coordinates on a *full* disc
legitimate, which the library currently reaches only through annular exhaustions
(`lem-plane-gaussian-integral-in-polar-coordinates`).

Two further consequences, both deliberate:

- **The boundary presentation is supplied data, exactly as on the Green page.**
  `def-type-i-type-ii-and-elementary-green-regions` says in so many words: "This
  supplied decomposition is part of the data; it is not inferred from an arbitrary
  closed curve." The same convention is used here for the boundary presentation of
  a simple solid region and for the gluing data. Nothing is asserted for a solid
  presented without them, and `rem-the-reach-of-the-classical-divergence-and-stokes-theorems`
  says so to the reader.
- **"Adapted" is stated by the sign of a coordinate of the oriented area vector,
  not by outwardness.** Outwardness is then *proved* for those faces
  (`prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`), and
  `cor-every-face-of-an-elementary-solid-region-is-outward-oriented` observes that
  no patch can be lateral in all three directions, because a unit vector cannot be
  orthogonal to all three axes. That is what earns the phrase "outward boundary
  presentation" instead of assuming it.

### The index convention, stated once because it is a citation trap

The library indexes $\mathbb R^n$ from $0$ (`def-euclidean-inner-product`), and
`def-closed-and-exact-c1-vector-fields` writes $F=(F_0,\ldots,F_{n-1})$ with
$\partial_jF_i=\partial_iF_j$ for $i,j<n$. The published
`def-cross-product-in-r3` instead names its coordinates $(u_x,u_y,u_z)$. This page
follows the cross-product item and names the three coordinates $x,y,z$
throughout, saying once in `def-divergence-and-curl-of-a-c1-vector-field` that
these name the coordinates indexed $0,1,2$. `cor-curl-vanishes-exactly-when-a-field-is-closed`
is the item where the two conventions meet and it must show the index matching
explicitly rather than assert it.

**The cyclic projection is not optional.** Write $\pi_x(p)=(p_y,p_z)$,
$\pi_y(p)=(p_z,p_x)$, $\pi_z(p)=(p_x,p_y)$. With those, and only with those,
$(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$ holds for all three $k$;
taking the surviving coordinates in increasing order reverses the sign in the $y$
case. `lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians`
must verify all three, and the author must not shorten it to "similarly".

---

## Scaffold amendments to the prose design (applyable edits)

These are recommendations for the lead Alpha to apply to
`research/plan-realanalysis-completion-track.md`; this batch did not edit that
file. Each is also a numbered finding below.

### Edit 1 — RC-9 `requires` line

- **File / section:** `research/plan-realanalysis-completion-track.md`, §RC-9 (L489).
- **Exact old text:** `` `requires`: RC-8, `fubini-and-change-of-variables`. ``
- **Exact new text:** `` `requires`: RC-8. (`plan-spec.json` declares RC-8 alone; `fubini-and-change-of-variables` is reached through RC-8's declared `improper-and-parameter-dependent-multiple-integrals`.) ``

### Edit 2 — RC-9 DEFS, the divergence's dimension

- **Exact old text:** `**DEFS.** Divergence and curl of a $C^1$ field on an open subset of $\mathbb{R}^3$;`
- **Exact new text:** `**DEFS.** Divergence of a $C^1$ field on an open subset of $\mathbb{R}^n$ and curl on an open subset of $\mathbb{R}^3$;`
- **Why:** the planar flux form of Green's theorem, which the same section asks
  for, is a statement about the divergence of a field on an open subset of
  $\mathbb R^2$. Defining the divergence only in $\mathbb R^3$ would make that
  corollary unstatable, and defining it in $\mathbb R^n$ costs nothing.

### Edit 3 — RC-9 Ledger, first row

- **Exact old text:** `` - `fs-a-closed-surface-bounds-a-region-to-which-the-divergence-theorem-applies` — FALSE in the generality stated; the elementary-region hypothesis is not removable here. ``
- **Exact new text:** `` - `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface` — FALSE; the inverse-square field has vanishing divergence wherever it is defined and outward flux $4\pi$ through the unit sphere. This is the refutable form of the hypothesis-removal claim. ``
- **Why:** the original wording quantifies over surfaces and asserts the
  non-existence of *some* region presentation, which cannot be refuted by
  exhibiting one field: nothing in this page's machinery proves that a given
  closed surface bounds no finite gluing of elementary solid regions. The field
  form is refuted by an explicit computation and isolates exactly the hypothesis
  that is not removable — that the field be $C^1$ on an open set containing the
  whole solid, not merely where it happens to be defined.

### Edit 4 — RC-9 Ledger, fourth row

- **Exact old text:** `` - `fs-every-surface-is-orientable` — FALSE; the Möbius band, stated with the classical patch language only. ``
- **Exact new text:** `` - `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly` — FALSE; the two-patch Möbius presentation, whose two overlap components force opposite relative signs, so all four orientation choices fail. ``
- **Why:** "every surface is orientable" is refuted only by showing that *no*
  presentation of the band is compatible, which needs a global argument this page
  does not have. The presentation-level statement is refuted by a finite check
  over four sign choices and is the mathematical content of non-orientability at
  the level of `def-finitely-patched-regular-surface-and-integrals`.

### Edit 5 — RC-9 remark id

- **Exact old text:** `` `rem-what-classical-stokes-does-not-cover`, naming the Jordan-domain limitation ``
- **Exact new text:** `` `rem-the-reach-of-the-classical-divergence-and-stokes-theorems`, naming the Jordan-domain limitation ``
- **Why:** the remark carries the limitations of both theorems on the page, not
  only Stokes'; the id should say what the item is.

### Edit 6 — RC-9 THMS, additions

- **Exact old text:** `$\operatorname{curl}\circ\operatorname{grad}=0$ and $\operatorname{div}\circ\operatorname{curl}=0$.`
- **Exact new text:** `$\operatorname{curl}\circ\operatorname{grad}=0$, $\operatorname{div}\circ\operatorname{curl}=0$, and $\operatorname{curl}\circ\operatorname{curl}=\operatorname{grad}\circ\operatorname{div}-\Delta$; the converse of the second, that a divergence-free $C^1$ field on a star-shaped open set has a vector potential; Green's first and second identities; the vector forms $\iiint\nabla f=\iint fn$ and $\iiint\operatorname{curl}F=\iint n\times F$; and the divergence and the normal curl as limiting flux per unit volume and circulation per unit area.`
- **Why:** findings 6–10 below.

---

## Per-page item list

### A page `the-divergence-theorem-and-classical-stokes` — 45 items, in reading order

The list is `research/frontier-18-batch-6.pages.json`; recount it there.

**Block 1, the operators (12 items).**
1. `def-divergence-and-curl-of-a-c1-vector-field` — definition — Divergence and curl of a $C^1$ vector field
2. `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules` — lemma
3. `lem-the-divergence-and-curl-of-a-cross-product` — lemma
4. `cor-curl-vanishes-exactly-when-a-field-is-closed` — corollary
5. `thm-the-curl-of-a-gradient-vanishes` — theorem
6. `thm-the-divergence-of-a-curl-vanishes` — theorem
7. `def-laplacian-of-a-c2-function` — definition
8. `cor-the-curl-of-a-curl-of-a-c2-field` — corollary
9. `cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative` — corollary
10. `def-vector-potential-of-a-c1-vector-field` — definition
11. `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential` — theorem
12. `lem-curl-is-the-antisymmetric-part-of-the-total-derivative` — lemma

**Block 2, the integration machinery this page had to build (4 items).**
13. `lem-c-one-images-of-content-zero-compact-sets-have-content-zero` — lemma
14. `lem-integral-additivity-over-a-content-zero-almost-partition` — lemma
15. `lem-change-of-variables-with-a-degenerate-parameter-boundary` — lemma
16. `lem-cyclic-coordinate-permutations-preserve-integrals-in-r3` — lemma

**Block 3, solid regions and the divergence theorem (20 items).**
17. `def-simple-solid-region-in-a-coordinate-direction` — definition
18. `lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians` — lemma
19. `def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid` — definition
20. `def-adapted-outward-boundary-presentation-of-a-simple-solid-region` — definition
21. `lem-flux-of-a-single-component-field-through-an-oriented-graph-face` — lemma
22. `lem-the-coordinate-flux-identity-for-a-simple-solid-region` — lemma
23. `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal` — proposition
24. `def-elementary-solid-region` — definition
25. `cor-every-face-of-an-elementary-solid-region-is-outward-oriented` — corollary
26. `thm-the-divergence-theorem-for-an-elementary-solid-region` — theorem
27. `def-finite-gluing-of-elementary-solid-regions` — definition
28. `lem-internal-faces-cancel-when-elementary-solid-regions-are-glued` — lemma
29. `thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions` — theorem
30. `cor-vector-forms-of-the-divergence-theorem` — corollary
31. `cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux` — corollary
32. `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid` — corollary
33. `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes` — corollary
34. `cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume` — corollary
35. `cor-greens-first-identity-for-glued-elementary-solid-regions` — corollary
36. `cor-greens-second-identity-for-glued-elementary-solid-regions` — corollary

**Block 4, classical Stokes and the planar dictionary (9 items).**
37. `def-the-induced-boundary-chain-of-a-c2-surface-patch` — definition
38. `lem-a-vector-line-integral-pulls-back-to-the-parameter-region` — lemma
39. `lem-the-stokes-integrand-identity-on-a-c2-patch` — lemma
40. `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` — theorem
41. `cor-stokes-gives-zero-circulation-for-a-curl-free-field` — corollary
42. `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` — corollary
43. `cor-greens-theorem-in-circulation-form` — corollary
44. `cor-the-planar-divergence-theorem-flux-form-of-greens-theorem` — corollary
45. `rem-the-reach-of-the-classical-divergence-and-stokes-theorems` — remark

**Landmarks proposed** (for the birds-eye flowchart, set `landmark: true` at step 5):
items 1, 5, 6, 9, 11, 15, 17, 20, 22, 24, 26, 27, 29, 31, 34, 35, 37, 40, 42, 44.

### B page `the-divergence-theorem-and-classical-stokes-examples` — 16 items, in reading order

1. `ex-the-closed-unit-box-is-an-elementary-solid-region`
2. `ex-the-divergence-theorem-on-the-closed-unit-box`
3. `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`
4. `ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field`
5. `ex-the-right-circular-cylinder-is-an-elementary-solid-region`
6. `ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin`
7. `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`
8. `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`
9. `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes`
10. `ex-the-planar-divergence-theorem-on-a-rectangle`
11. `ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes`
12. `ex-stokes-on-two-patches-spanning-the-same-circle`
13. `fs-stokes-needs-the-surface-to-be-a-graph`
14. `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`
15. `ex-the-mobius-band-presented-by-two-regular-patches`
16. `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly`

---

## Per-pair richness report

**Both passes were performed on this pair, and both found work.**

**Long proofs decomposed.** The divergence theorem is not one proof here. It is
`lem-c-one-images-of-content-zero-compact-sets-have-content-zero` →
`lem-change-of-variables-with-a-degenerate-parameter-boundary` →
`lem-flux-of-a-single-component-field-through-an-oriented-graph-face` →
`lem-the-coordinate-flux-identity-for-a-simple-solid-region` →
`thm-the-divergence-theorem-for-an-elementary-solid-region` →
`lem-internal-faces-cancel-when-elementary-solid-regions-are-glued` →
`thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions`, with
`lem-integral-additivity-over-a-content-zero-almost-partition`,
`lem-cyclic-coordinate-permutations-preserve-integrals-in-r3` and
`lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians`
factored out because each is used more than once and each is independently
checkable. The three-directions-at-once step is isolated in
`thm-the-divergence-theorem-for-an-elementary-solid-region` so that the
single-direction analysis can be audited without it.

Classical Stokes is split into `lem-curl-is-the-antisymmetric-part-of-the-total-derivative`
(pure linear algebra of the derivative), `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`
(chain rule only) and `lem-the-stokes-integrand-identity-on-a-c2-patch`
(the Clairaut cancellation that is the whole use of $C^2$), so that
`thm-the-classical-stokes-theorem-for-a-c2-surface-patch` is three citations and
one appeal to the published Green theorem. The $C^2$ hypothesis enters at exactly
one step, which is worth being able to point at.

The outwardness claim is split from the machinery:
`prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal` and
`cor-every-face-of-an-elementary-solid-region-is-outward-oriented` are the only
items that mention the outward normal, and no theorem's proof depends on them.

**Corollary pass.** It added `cor-the-curl-of-a-curl-of-a-c2-field`,
`cor-vector-forms-of-the-divergence-theorem`,
`cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux`,
`cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`,
`cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume`,
`cor-greens-first-identity-for-glued-elementary-solid-regions`,
`cor-greens-second-identity-for-glued-elementary-solid-regions`,
`cor-stokes-gives-zero-circulation-for-a-curl-free-field`,
`cor-the-normal-curl-is-the-limiting-circulation-per-unit-area`,
`cor-greens-theorem-in-circulation-form` and
`cor-the-planar-divergence-theorem-flux-form-of-greens-theorem`, and it added the
theorem `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`,
which is not a corollary but is the converse the pass surfaced.

**No second proof of a published theorem is proposed on this pair.** The
owner's 2026-08-20 licence for a genuinely different route was considered for
Green's theorem — Stokes specialised to a plane patch would reprove it — and
declined, because Stokes here is *proved from* Green and the route would be
circular. `cor-greens-theorem-in-circulation-form` records the dictionary instead.

**Page ceiling.** The A page carries 45 items and the B page 16, against the hard
`validate-plan` error at 60. No split is proposed. If the step-3 Alpha declines
findings 6–10 the A page loses items and stays well inside the ceiling; if it
accepts everything the count is unchanged, since those items are already in the
manifest. The step-3 fix pass added one item under B6-1, which is counted here.

---

## Findings, ordered by severity

Each is one recommendation to approve or decline.

### Finding 1 (design conflict; mathematical accuracy). Graph faces are patches over the projection, not graph patches.

- **What is wrong.** RC-9's route, read literally, needs the top and bottom faces
  of a simple solid to be graphs of $C^1$ functions. `def-admissible-regular-parametrized-surface-patch`
  requires the parametrization to be $C^1$ on an open neighbourhood of the closed
  parameter region, so that reading excludes the closed ball and the right
  circular cylinder, and no finite gluing repairs either. The design's own B page
  then cannot be built.
- **Proposal.** `def-adapted-outward-boundary-presentation-of-a-simple-solid-region`
  asks only that an upper face patch have its image in the graph and satisfy
  $\det D(\pi_k\circ\varphi)>0$ on the parameter interior. Approve the definition
  as scaffolded.
- **What breaks if declined.** The ball and the cylinder leave scope, and with
  them B-page items 3, 4, 5, 6 and the design's stated B page. The page reduces
  to boxes.

### Finding 2 (new machinery; follows from finding 1). Two change-of-variables lemmas are built on this page.

- **What is wrong.** `thm-change-of-variables-for-compact-jordan-sets` requires
  injectivity and invertible derivative on an **open** set containing the compact
  domain. A spherical octant's projected Jacobian vanishes on the parameter
  boundary, so the published theorem does not apply to it.
- **Proposal.** Approve `lem-c-one-images-of-content-zero-compact-sets-have-content-zero`
  and `lem-change-of-variables-with-a-degenerate-parameter-boundary`. The second
  is proved from the published compact theorem by a grid exhaustion of the
  interior, using `lem-bounded-open-jordan-sets-have-compact-grid-exhaustions`
  twice — once on the parameter side and once on the image side.
- **What breaks if declined.** Finding 1 falls with it. The natural home for both
  lemmas is the published `fubini-and-change-of-variables` page (order 237),
  which cannot take new items; that is why they are here, and the step-3 Alpha
  may prefer to record that placement rather than change it.

### Finding 3 (design ledger; refutability). Replace `fs-a-closed-surface-bounds-a-region-to-which-the-divergence-theorem-applies`.

- See Edit 3. As worded it asserts that some closed surface bounds no finite
  gluing of elementary solid regions, which no item on this page can establish;
  a false statement whose refutation cannot be written is not a false statement
  the library can carry.
- **Proposal.** `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`.
- **If declined.** The ledger row has no honest refutation and must be dropped
  rather than authored.

### Finding 4 (design ledger; refutability). Replace `fs-every-surface-is-orientable`.

- See Edit 4. **Proposal.** `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly`,
  refuted by `ex-the-mobius-band-presented-by-two-regular-patches` and a check of
  all four sign choices.
- **If declined.** The band example survives, but the ledger row does not, for
  want of a proof that no presentation of the band is compatible.

### Finding 5 (design ledger; addition). Add a three-dimensional curl-free non-conservative witness.

- RC-9 says the published `fs-every-closed-c1-field-on-a-connected-open-set-is-exact`
  is cited rather than re-minted, and this scaffold mints no such false statement.
  It does add `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`,
  the vortex field lifted off the $z$ axis, which is a **counterexample** and not
  the same item: the published witness is planar, and the star-shaped corollary on
  this page is a statement about open subsets of $\mathbb R^3$ whose hypothesis
  deserves a three-dimensional witness. The item names the planar one in prose.
- **If declined.** `cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative`
  ships with no witness that its star-shaped hypothesis is doing work.

### Finding 6 (addition beyond the design). The vector potential theorem.

- **Proposal.** Add `def-vector-potential-of-a-c1-vector-field` and
  `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`,
  the converse of `thm-the-divergence-of-a-curl-vanishes`, proved by the same
  radial-integral method the published `thm-poincare-lemma-for-star-shaped-domains`
  uses, with $A(x)=\int_0^1 t\,B(a+t(x-a))\times(x-a)\,dt$.
- **Why.** Without it the page proves that a gradient is curl-free and gets the
  converse on a star-shaped set, but proves that a curl is divergence-free and
  gets no converse at all. Both are CLP-4 named results (Theorems 4.1.12 and
  4.1.16) and both were harvested.
- **What breaks if declined.** Nothing else on the page; the two items are used
  by no other item.

### Finding 7 (addition beyond the design). Green's first and second identities.

- **Proposal.** Add `def-laplacian-of-a-c2-function`,
  `cor-greens-first-identity-for-glued-elementary-solid-regions` and
  `cor-greens-second-identity-for-glued-elementary-solid-regions`.
- **Why.** They are two-step consequences of the divergence theorem and the scalar
  product rule, and they are the standard consumers of it. The Laplacian is
  defined nowhere in the library today; `thm-c2-holomorphic-components-are-harmonic`
  (order 303, later) states the planar equation inline without naming the operator.
- **What breaks if declined.** `def-laplacian-of-a-c2-function` also supports
  `cor-the-curl-of-a-curl-of-a-c2-field`, so declining finding 7 forces declining
  finding 8 as well, and B-page item 11 goes with them.

### Finding 8 (addition beyond the design). The third degree-two identity.

- **Proposal.** Add `cor-the-curl-of-a-curl-of-a-c2-field`. CLP-4's Theorem 4.1.7
  is a single named result carrying all three degree-two identities; harvesting it
  faithfully means not stopping at two.
- **What breaks if declined.** The harvest row for Theorem 4.1.7 becomes a partial
  disposition and Alpha's step-6 faithfulness check has a gap to record.

### Finding 9 (addition beyond the design). The vector forms of the divergence theorem.

- **Proposal.** Add `cor-vector-forms-of-the-divergence-theorem`
  ($\iiint_E\nabla f=\iint_{\partial E}fn$ and $\iiint_E\operatorname{curl}F=\iint_{\partial E}n\times F$),
  CLP-4 Theorem 4.2.9. Each is the scalar theorem applied to a field paired with a
  constant vector, read off coordinate by coordinate.

### Finding 10 (addition beyond the design). The two limit interpretations.

- **Proposal.** Add `cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume`
  and `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area`
  (CLP-4 Lemmas 4.1.20 and 4.1.25, OpenStax "Interpretation of Curl").
- **Note on the second.** It needs a concrete disc patch, so it carries a short
  construction: an orthonormal pair $a,b$ with $a\times b=n$ (existence from
  `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, sign fixed
  by replacing $b$ with $-b$), and the polar patch $p+\rho\cos\theta\,a+\rho\sin\theta\,b$
  over a rectangle, whose oriented area vector is exactly $\rho\,n$. If the
  step-3 Alpha judges the construction out of proportion, decline this half alone;
  the divergence half needs no construction at all.

### Finding 12 (seam already recorded in the corpus; no action requested now).

`rem-de-rham-and-stokes-on-manifolds`, on the **draft** page
`library/not-proved-here/deferred-algebraic-topology.md`, records the general
Stokes theorem as not proved here and says in its own Remarks: "Its classical
corollaries, Green's theorem in the plane, the divergence theorem and the
classical Stokes theorem for a parametrised surface, are all in scope as well and
should be proved, not deferred." **This pair is what discharges that sentence.**
`rem-simple-connectedness`, on the same page, is the notion convention
disagreement 4 declines to use.

The right seam is an `external_refs` entry from
`rem-the-reach-of-the-classical-divergence-and-stokes-theorems` to
`rem-de-rham-and-stokes-on-manifolds`, and one from
`cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative` to
`rem-simple-connectedness`. **Neither is scaffolded, deliberately.** That page and
all seventeen of its items are `status: draft`, and the corpus has no precedent
for a published item linking a draft one — every existing `external_refs` target
(`rem-godel-constructible-universe`, `rem-cohen-forcing-ac-independent` and the
rest) sits on the **published** `deferred-set-theory-beyond-choice`. Adding the
links now would put a wikilink to owner-only content in a public page. If
`deferred-algebraic-topology` is published before this run's step 10, the two
`external_refs` entries should be added then; the step-3 Alpha may prefer to
record that as a step-9 check rather than a scaffold change. The remark as
scaffolded says what is unavailable without naming any other page, which is
correct either way.

### Finding 11 (dependency status, for the record; CLOSED at the step-3 fix pass).

**Closed 2026-08-24.** All seventy-seven external dependencies of this batch are
`status: published` on disk, checked item by item; the paragraph below records the
state at step 2 and no longer describes disk. `depsource.mjs` now classifies every
one of them `published`, and the step-9 constraint it warned about is discharged.
Alpha's B6-3 reaches the same conclusion from the same fact.

Fourteen of the seventy-seven external dependencies used by this batch are
`status: draft` on disk, all authored by run `frontier-17` and all on pages at
strictly lower plan order: `regular-surfaces-and-surface-integrals` (288.00015)
and `volumes-of-elementary-solids-and-solids-of-revolution` (288.00009). They are
listed under "Dependency-closure statement" below. `depsource.mjs` will classify
them `draft-page`, not `unresolved`. This is the run's inherited state and not
something this batch can change; it is recorded so that the step-3 Alpha does not
have to rediscover it, and so that step 9 knows this pair cannot publish before
those two pages do.

---

### Findings 13-17 were found by the contract pass, and 13-16 are ALREADY APPLIED to the manifest.

Writing `research/frontier-18-batch-6.proof-contracts.json` meant assigning every
planned step an input and every fact an exact quote, and that is what surfaced
these. Findings 13-16 are corrections to this batch's own `.pages.json`, which is
this batch's file; they are applied, and the step-3 Alpha is asked to confirm them
rather than to authorise them. Finding 17 is an authoring trap with no manifest
edit.

### Finding 13 (mathematical accuracy; APPLIED). The planar-divergence example's edge values were wrong.

- **What was wrong.** The strategy for `ex-the-planar-divergence-theorem-on-a-rectangle`
  said "the two horizontal edges contribute $0$ and $-1/2$, the two vertical edges
  $1$ and $0$". Those four values sum to $1/2$, not to the area integral $3/2$ that
  the same strategy line computes. The top edge, traversed from right to left, gives
  $\int_1^0(-x)\,dx=+1/2$, not $-1/2$.
- **Applied.** The strategy now reads "the bottom edge contributes $0$, the right
  edge $1$, the top edge $1/2$ and the left edge $0$, so the four add to $3/2$".
- **What breaks if declined.** The step-5 author copies a sign error into a
  worked example whose whole purpose is that both sides agree, and the judge
  catches it as a false computation.

### Finding 14 (mathematical accuracy; APPLIED). The U-shaped prism's shared faces do not match, and the bar's face must be subdivided.

- **What was wrong.** The strategy for `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes`
  said the three boxes "meet in two full rectangular faces, each carried by the two
  pieces with opposite orientations, so the gluing data is exactly the definition's".
  They do not. The bar is $[0,3]\times[0,1]\times[0,1]$ and its face on the plane
  $y=1$ is $[0,3]\times[0,1]$ in the remaining coordinates, while the two uprights
  present only $[0,1]\times[0,1]$ and $[2,3]\times[0,1]$ there. `def-finite-gluing-of-elementary-solid-regions`
  pairs each internal patch with an internal patch of another piece that is an
  orientation-reversing **reparametrization** of it, and a patch cannot reparametrize
  a patch of a different image.
- **Applied.** The strategy now instructs the author to present the bar's $y=1$ face
  as three patches cut at $x=1$ and $x=2$, declare two of them internal and pair
  them, and leave the third outer. Subdividing a face preserves adaptation in every
  direction, because the three projections are disjoint and fill it; the contract's
  step 1.2 for that item carries the same obligation.
- **What breaks if declined.** The example asserts gluing data that does not exist,
  and the divergence-theorem check that follows it rests on nothing.

### Finding 15 (mathematical accuracy; APPLIED). The non-graph Stokes example named the wrong circle as reversed, and named no field.

- **What was wrong.** The strategy for `fs-stokes-needs-the-surface-to-be-a-graph`
  said the induced boundary chain "is the top circle together with the reversed
  bottom circle". Reading the published `def-positive-orientation-for-elementary-region-boundaries`
  on the parameter rectangle of azimuth against height gives the opposite: the
  bottom circle is traversed with increasing azimuth and the **top** circle is the
  reversed one. The strategy also said "an explicit field" without naming one, and
  the obvious candidate $(-y,x,0)$ makes both sides zero, so it verifies nothing.
- **Applied.** The strategy now names $F(x,y,z)=(-yz,xz,0)$, whose curl is
  $(-x,-y,2z)$, gives both sides as $-2\pi$, and tells the author to read the four
  edges off the published positive boundary rather than assume which circle is
  reversed.
- **What breaks if declined.** A published item states a boundary orientation
  backwards, and the false statement it is meant to refute is refuted by a
  computation in which both sides vanish.

### Finding 16 (dependency closure; APPLIED). Four dependency-list entries, three distinct ids, that two proofs need were not declared.

- **What was wrong.** `depsource` cannot see a dependency nobody declared, and two
  proofs needed one.
  1. `lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians`
     expands a two-by-two Jacobian determinant. Its home is
     `def-determinant-of-a-square-matrix` (the Leibniz sum over $S_n$, whose two
     terms at $n=2$ give the expansion), which the item did not declare.
  2. `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` needed an
     orthonormal pair $a,b$ with $a\times b=n$. The strategy reached it by "an
     orthonormal basis extension", which is not something the declared deps supply:
     `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` produces
     a basis but not one beginning at a prescribed vector, and the published
     `thm-every-independent-set-extends-to-a-basis` **assumes the Axiom of Choice**,
     which is a disproportionate hammer for extending one unit vector in $\mathbb R^3$.
- **Applied.** `def-determinant-of-a-square-matrix` added to the first item's `deps`;
  `thm-cross-product-norm-is-the-two-vector-gram-determinant`,
  `def-determinant-of-a-square-matrix` and `lem-standard-basis-of-f-n` added to the
  second's. The contract replaces the abstract extension with an explicit,
  choice-free construction, and this is the route the step-5 author must follow:
  some coordinate of $n$ has square at most $1/3$, so $n$ and that standard basis
  vector are independent; $a$ is their normalised cross product; $b=n\times a$ has
  norm one by the Gram identity; $\langle a\times b,n\rangle=\det[a\ b\ n]=\det[n\ a\ b]=\langle n\times a,b\rangle=1$
  by the even column cycle; and $\lVert a\times b-n\rVert_2^2=1-2+1=0$ gives
  $a\times b=n$ by positive definiteness. No choice principle and no Gram-Schmidt.
- **What breaks if declined.** `citecheck` flags the determinant expansion, and the
  orthonormal-pair construction either imports the Axiom of Choice for a statement
  about $\mathbb R^3$ or leaves the sign of $a\times b$ unproved, which is exactly
  the hypothesis the corollary's conclusion depends on.
- **Note for finding 11.** `thm-cross-product-norm-is-the-two-vector-gram-determinant`
  is the fourteenth `status: draft` dependency, also on `regular-surfaces-and-surface-integrals`
  at order 288.00015. It changes the closure's shape not at all.

### Finding 17 (citation trap; no manifest edit, obligation on step 5).

`lem-c-one-images-of-content-zero-compact-sets-have-content-zero` declares
`lem-content-zero-implies-null` in its `deps`, and that item's Statement is about
**$A\subseteq\mathbb R$**: "If $A \subseteq \mathbb{R}$ has content zero then $A$
has measure zero", citing the one-dimensional `def-measure-zero-and-content-zero`.
The step here is $m$-dimensional. Citing it for the $\mathbb R^m$ implication would
be exactly the inaccurate-citation defect class. The $\mathbb R^m$ implication is
available from `def-null-and-content-zero-in-rn` itself, whose Definition says
"Padding a finite cover with degenerate zero-volume cubes proves that content zero
implies null", and that is what the contract cites at step 1.2.

The same item's `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
must be cited **only for its subset clause**, which is choice-free; its countable-union
clause is stated "Assuming countable choice", and the union here is finite. The
contract's step 5.1 derives the finite union from the definition by concatenating
finitely many covers and says so, so the lemma is not made to carry a choice
hypothesis this proof does not need.

### Finding 18 (cross-batch observation, for the lead Alpha; nothing for this batch to do).

Two other batch contracts of this run will not validate as written, and both are
outside this batch's write boundary. Recorded because the merge at the contract
group's gate zero will pass and the failure will surface only after step 5.

- `research/frontier-18-batch-7.proof-contracts.json` uses the fact labels `P#`,
  `T#`, `E#`, `C#` and `X#`. `tools/facts-block.mjs` parses a Facts entry only when
  its label matches `[FAL]\d+`, so every citation carrying one of those labels
  resolves to `citation-fact-missing` at step 5 unless the authored items use
  `F#`/`A#`/`L#` and the contract is relabelled. `C#` is additionally the
  diagram-cell tag in the proof grammar, which is a separate collision.
- `research/frontier-18-batch-5.proof-contracts.json` carries **zero citation
  entries across all 96 scoped items**, and its step entries name item ids directly
  as `inputs` rather than fact labels. At step 5 that yields
  `citation-fact-uncontracted` for every `[F#] -> [[id]]` link the authored items
  carry, and `step-entry-input-omitted` for every fact token a step cites.

This batch uses `F#` and `L#` only, and every step input is a fact label, a
`step n.m` reference, or one of `given`, `algebra`, `construct`.

## Forward references kept

**One**, and it is orientation only, in a `## Remarks` section where
`fwdcheck.mjs` permits it.

- In `def-laplacian-of-a-c2-function`, `forward_refs: [thm-c2-holomorphic-components-are-harmonic]`
  (page `complex-differentiability-and-cauchy-riemann`, order 303, strictly later
  than 288.00017). It records that the equation $u_{xx}+u_{yy}=0$ appearing there
  is $\Delta u=0$ for the operator defined here, so a reader meeting "harmonic"
  in either place meets one notion. It is not in `deps`, is not load-bearing, and
  appears in no Statement or Facts section.

No other forward reference is kept. In particular
`rem-the-reach-of-the-classical-divergence-and-stokes-theorems` does **not**
forward-reference the manifold theory: the page
`integration-of-forms-and-the-general-stokes-theorem` (order 469) has an empty
item list in `plan-spec.json`, so there is no item id to point at, and a forward
reference must name one. The remark instead says, without naming any other page,
that no differential form, exterior derivative or manifold is available among
this page's declared prerequisites — a scope statement about this page's
prerequisites, which is the only kind permitted.

---

## New ids proposed, with the grep that confirms each is free

All sixty-one ids in `research/frontier-18-batch-6.pages.json` are new. The check run
was, for the whole list at once:

```
for id in <every id in the manifest>; do
  test -e "items/$id.md" && echo "ON DISK: $id"
  grep -q "\"$id\"" research/plan-spec.json && echo "IN SPEC: $id"
done
```

It printed nothing: no id is a file under `items/` and no id occurs in
`research/plan-spec.json`. A second, weaker check searched the whole published
pool for the *statements* rather than the ids, to catch a result already present
under another name:

- `grep -rl 'operatorname{div}\|operatorname{curl}' items/` returns **nothing**.
  **No divergence, curl, Laplacian or vector potential of a vector field is
  defined anywhere in the corpus today.**
- `ls items | grep -E 'laplac|harmonic'` returns sixteen ids, every one of them
  about the harmonic series, harmonic sums, the harmonic oscillator, or Laplace's
  cofactor expansion, except `thm-c2-holomorphic-components-are-harmonic`, which
  states $u_{xx}+u_{yy}=0$ inline and calls its solutions harmonic without naming
  an operator (see the forward reference above). **No item defines the Laplacian.**
- `ls items | grep -E 'divergence'` returns `def-divergence-to-infinity`,
  `thm-absolute-divergence-from-uniform-tail-mass`, `thm-dirichlet-divergence-transfer`
  — all about divergent series and sequences, not vector fields. The id
  `def-divergence-and-curl-of-a-c1-vector-field` is deliberately explicit so the
  two senses of the word cannot be confused in a wikilink.
- `ls items | grep -E 'green|stokes|gauss'` returns the published Green cluster on
  `line-integrals-and-the-gradient-theorem`, the Gauss items of number theory and
  linear algebra, the Gaussian-integral items — and one Stokes item,
  `rem-de-rham-and-stokes-on-manifolds`, which is a `proved_here: false` record on
  the draft page `library/not-proved-here/deferred-algebraic-topology.md`. It
  states the manifold theorem and de Rham's theorem, not a classical one. **No
  classical Stokes theorem and no divergence theorem exists in the corpus.** See
  finding 12.
- `ls items | grep -E 'change-of-variables'` returns the published
  `thm-change-of-variables-for-compact-jordan-sets`,
  `cor-change-of-variables-on-bounded-open-jordan-sets`,
  `cor-change-of-variables-for-compactly-supported-functions`,
  `cor-one-dimensional-change-of-variables-with-absolute-derivative`,
  `cex-noninjective-change-of-variables-double-counts` and
  `fs-substitution-holds-for-every-integrable-integrand`. **None of them covers a
  map that is injective and regular only on the interior**, which is what
  `lem-change-of-variables-with-a-degenerate-parameter-boundary` supplies; the
  closest published statement, `cor-change-of-variables-on-bounded-open-jordan-sets`,
  requires the derivative to be invertible throughout an open set whose closure
  contains the domain.
- `ls items | grep -E 'content-zero|null'` was read in full for a Lipschitz or
  $C^1$ image statement. The corpus has `thm-lipschitz-images-of-null-sets-in-rn-are-null`,
  for a Lipschitz map defined on **all** of $\mathbb R^m$; it does not cover a
  $C^1$ map on an open set, which is why
  `lem-c-one-images-of-content-zero-compact-sets-have-content-zero` exists and why
  its proof goes through a clamping retraction onto a cube in order to *use* the
  published theorem rather than reprove it.

---

## Cross-batch dependencies within run `frontier-18`

**None in either direction.** The other nine batches of this run cover
number theory, group theory, abstract algebra, commutative algebra,
combinatorics, measure theory, complex analysis and category theory
(`research/frontier-18-step0-notes.md`). No item scaffolded here cites anything
planned in another batch of this run, and no page of this run at a higher order
declares this pair among its prerequisites. Batch 7's
`lebesgue-measure-on-euclidean-space` (order 288.007) sits at a **lower** order
than this pair and is not cited here either; nothing on this page uses measure
theory, and the `rem-` limitation item must not claim otherwise.

---

## Component provenance, per planned item, with the rationale

The rule that decides eligibility is the target's `provenance.statement`; no item
below is a `deps` target of anything with an `ai-generated` statement, and none of
the seventy-six external dependencies has one (checked mechanically against every
`items/<id>.md` frontmatter).

### A page

**`literature-derived` statement, `ai-altered` proof** — the classical theorems,
stated as the sources state them, proved locally from published dependencies:
`thm-the-curl-of-a-gradient-vanishes`, `thm-the-divergence-of-a-curl-vanishes`,
`thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`,
`thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions`,
`thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
`cor-greens-first-identity-for-glued-elementary-solid-regions`,
`cor-greens-second-identity-for-glued-elementary-solid-regions`,
`cor-vector-forms-of-the-divergence-theorem`,
`cor-the-curl-of-a-curl-of-a-c2-field`,
`lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
`lem-the-divergence-and-curl-of-a-cross-product`,
`cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume`,
`cor-the-normal-curl-is-the-limiting-circulation-per-unit-area`,
`lem-c-one-images-of-content-zero-compact-sets-have-content-zero`.
*Rationale:* each statement is a named result in at least one harvested source
(CLP-4 Definition 4.1.1 and Theorems 4.1.4–4.1.7, 4.1.16, 4.2.2, 4.2.9, 4.4.1 and
Lemmas 4.1.20, 4.1.25; Corral Theorems 4.15, 4.17; OpenStax Theorems 6.19, 6.20),
and the proof is written here from library dependencies rather than transcribed.

**`literature-derived` statement, `not-applicable` proof** — the definitions that
follow the sources: `def-divergence-and-curl-of-a-c1-vector-field`,
`def-laplacian-of-a-c2-function`, `def-vector-potential-of-a-c1-vector-field`,
`def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid`.

**`ai-altered` statement, `ai-altered` proof** — statements that are classical in
substance but materially reformulated to fit this library's published patch and
Jordan machinery, which is the definition of `ai-altered` in SCHEMA §3:
`lem-change-of-variables-with-a-degenerate-parameter-boundary`,
`lem-integral-additivity-over-a-content-zero-almost-partition`,
`lem-cyclic-coordinate-permutations-preserve-integrals-in-r3`,
`lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians`,
`lem-flux-of-a-single-component-field-through-an-oriented-graph-face`,
`lem-the-coordinate-flux-identity-for-a-simple-solid-region`,
`prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`,
`cor-every-face-of-an-elementary-solid-region-is-outward-oriented`,
`thm-the-divergence-theorem-for-an-elementary-solid-region`,
`lem-internal-faces-cancel-when-elementary-solid-regions-are-glued`,
`lem-curl-is-the-antisymmetric-part-of-the-total-derivative`,
`lem-a-vector-line-integral-pulls-back-to-the-parameter-region`,
`lem-the-stokes-integrand-identity-on-a-c2-patch`,
`cor-curl-vanishes-exactly-when-a-field-is-closed`,
`cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative`,
`cor-stokes-gives-zero-circulation-for-a-curl-free-field`,
`cor-greens-theorem-in-circulation-form`,
`cor-the-planar-divergence-theorem-flux-form-of-greens-theorem`,
`cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux`,
`cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`,
`cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`.
*Rationale:* every one of these is a step in a classical proof that the sources
carry, but the sources state them for "a bounded solid with a piecewise smooth
surface" (CLP-4 Theorem 4.2.2) or for "a closed surface which bounds a solid"
(Corral), and this library has no such notion. The hypotheses here are written
against `def-admissible-regular-parametrized-surface-patch` and
`def-finitely-patched-regular-surface-and-integrals`, which is a material
reformulation and must be labelled as one. `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`
is the same case in the sharpest form: Corral's Corollary 4.18 states it for "any
closed surface", which is not a notion available among this page's declared
prerequisites, and the statement here is
that same claim carried by the boundary presentation of a glued elementary solid
region, with $C^2$ replacing Corral's "smooth" because $C^2$ is exactly what the
argument uses.

**`ai-altered` statement, `not-applicable` proof** — the definitions that are
adaptations rather than transcriptions:
`def-simple-solid-region-in-a-coordinate-direction`,
`def-adapted-outward-boundary-presentation-of-a-simple-solid-region`,
`def-elementary-solid-region`, `def-finite-gluing-of-elementary-solid-regions`,
`def-the-induced-boundary-chain-of-a-c2-surface-patch`,
and the remark `rem-the-reach-of-the-classical-divergence-and-stokes-theorems`.

### B page

`literature-derived` statement with `ai-altered` verification:
`ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`,
`ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin`
(OpenStax Theorem 6.21 and Example 6.80),
`ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field`
(Corral Example 4.2), `ex-the-mobius-band-presented-by-two-regular-patches`
(the standard Möbius parametrization),
`cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`
(the classical vortex field lifted off the axis),
`ex-stokes-on-two-patches-spanning-the-same-circle` (CLP-4 Examples 4.4.2–4.4.4,
Corral Example 4.5.3).

`ai-altered` statement with `ai-altered` verification — the constructions that
verify *this page's* definitions on standard solids, so the solid is classical
and the thing verified is not: `ex-the-closed-unit-box-is-an-elementary-solid-region`,
`ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`,
`ex-the-right-circular-cylinder-is-an-elementary-solid-region`,
`ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes`,
`ex-the-divergence-theorem-on-the-closed-unit-box`,
`ex-the-planar-divergence-theorem-on-a-rectangle`,
`ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes`,
`fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`,
`fs-stokes-needs-the-surface-to-be-a-graph`,
`fs-a-finite-patch-presentation-can-always-be-oriented-compatibly`.

**No item on this pair is planned `ai-generated` in either component.** There is
therefore no `generation:` frontmatter to write anywhere in this batch, and no
truth-risk counterexample search is owed under the 2026-08-01 rule.

**No external fallback is planned.** No item on this pair carries
`proved_here: false`, so no `external_dependency` record is owed. Every
load-bearing dependency is either an earlier item on the pair or an item on a
page at strictly lower plan order.

### Source URL that step 5 will place in `sources.references`

Every item on both pages takes at least one of the three fetch-verified URLs
recorded in `research/frontier-18-batch-6.coverage.json`:

- `https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html` — the operators
  and their identities, the vector potential, the divergence theorem and its
  variations, Stokes, and the two limit interpretations.
- `https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals`
  — the Laplacian, the degree-two identities, the vanishing of the flux of a curl
  through a closed boundary (Corollary 4.18), and the flux and surface-integral
  conventions.
- `https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem`
  — the coordinate-direction proof of the divergence theorem, the pull-back proof
  of Stokes, and the inverse-square flux dichotomy.

Items whose statement is `ai-altered` still carry a reference: the reformulation
is of a statement one of these sources makes, and SCHEMA §3 requires a URL for a
source-backed statement or proof.

---

## Web research ledger and convention disagreements

**Every URL below was fetched in this dispatch**, stamped by
`tools/source-fetch-check.mjs --stamp`, and re-checked live by
`tools/url-sweep.mjs --recover --fail-on-dead` (`3/3 live`).

| source | kind | range read | what it backs |
|---|---|---|---|
| CLP-4 Vector Calculus (Feldman, Rechnitzer, Yeager), UBC | textbook | ch. 4, §4.1–4.4 | definitions of divergence, curl and Laplacian; the four identity theorems; vector potentials and their existence; the divergence theorem and its vector variations; Green's theorem and its area corollary; Stokes; the divergence and curl limit formulas |
| M. Corral, Vector Calculus (GNU FDL), LibreTexts | textbook | ch. 4, §4.4–4.6 | the surface integral and flux conventions; the divergence theorem; Stokes with the $n$-positive boundary convention; the Laplacian; curl grad and div curl |
| G. Strang and E. Herman, Calculus Volume 3 (OpenStax) | textbook | ch. 6, §6.7–6.8 | Stokes proved by pulling back to the parameter domain; the divergence theorem proved one coordinate direction at a time; the inverse-square flux dichotomy |

Wikipedia and encyclopedia entries were not used, as backing or as tiebreakers.

**Convention disagreements found, and what this page does.**

1. **What the divergence theorem's solid is.** CLP-4 says "a bounded solid with a
   piecewise smooth surface"; OpenStax says "a piecewise smooth closed surface
   that encloses a solid"; Corral gives no hypothesis on the region at all. None
   of the three is a definition this library can consume, and the two that look
   like one rest on an unstated Jordan-curve-theorem-style fact that a closed
   surface bounds something. This page follows the *published Green page's*
   convention instead — the decomposition is supplied data — and says so in the
   remark. This is the single largest reformulation on the page and it is why so
   many statements are labelled `ai-altered`.
2. **The orientation of the boundary curve in Stokes.** Corral says "traversed
   $n$-positively", OpenStax says "walking along $C$ with your head pointing
   toward $n$, the surface is on your left", CLP-4 says "oriented consistently
   with $n$ by the right-hand rule". All three are informal. This page defines the
   induced boundary chain *mechanically*, as the image under $\varphi$ of the
   published positive boundary chain of the parameter region
   (`def-positive-orientation-for-elementary-region-boundaries`), and derives the
   sign agreement from Green's theorem rather than from a hand rule. The three
   informal descriptions agree with it, and none of them is quoted as if it were a
   definition.
3. **The sign convention in the curl's coordinates.** CLP-4 writes the middle
   coordinate of the curl as $-(\partial_xF_3-\partial_zF_1)$ and Corral writes it
   as $+(\partial_zF_1-\partial_xF_3)$. These agree; the two presentations differ
   only in where the minus sign is placed. This page writes the second form, which
   is the one that matches `def-cross-product-in-r3`'s coordinate formula term for
   term, and the author must check it against that item rather than against a
   source.
4. **Simple connectedness versus star-shapedness.** Corral states the equivalence
   of a potential, path independence, zero circulation and vanishing curl on a
   *simply connected* region. No homotopy of paths is available among this page's
   declared prerequisites, so this page proves the star-shaped case only, citing
   the published `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains`.
   The harvest records that decline as `deferred` to
   `the-de-rham-complex-homotopy-and-mayer-vietoris`, and
   `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`
   shows the gap is real rather than an artefact of the weaker hypothesis.
5. **The Laplacian on a vector field.** Corral defines the Laplacian only for a
   scalar. The curl-of-a-curl identity needs it componentwise on a field, so
   `def-laplacian-of-a-c2-function` defines both and says explicitly that the
   vector case is the componentwise one — the convention CLP-4's Theorem 4.1.7
   uses without stating.

---

## Dependency-closure statement

**Every published item proposed as a dependency was opened from disk and read**,
not read about: its `status`, its `provenance`, and the exact Definition or
Statement it will be cited for. There are seventy-seven external dependencies
across both pages (seventy-six before finding 16 added
`thm-cross-product-norm-is-the-two-vector-gram-determinant`).

- **Sixty-three are `status: published`.** (Sixty-three of seventy-seven after finding 16's additions.)
- **Thirteen are `status: draft`**, all from run `frontier-17`, all on pages at
  strictly lower plan order, and all inside the declared prerequisite closure:
  from `regular-surfaces-and-surface-integrals` (order 288.00015) —
  `def-cross-product-in-r3`,
  `lem-cross-product-is-bilinear-alternating-and-orthogonal`,
  `def-admissible-regular-parametrized-surface-patch`,
  `def-tangent-plane-of-a-regular-surface-patch`,
  `def-surface-reparametrization-and-orientation`,
  `cor-regular-surface-reparametrization-has-constant-orientation-sign`,
  `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
  `thm-flux-under-surface-reparametrization`,
  `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`,
  `def-finitely-patched-regular-surface-and-integrals`; and from
  `volumes-of-elementary-solids-and-solids-of-revolution` (order 288.00009) —
  `def-solid-between-continuous-graphs-over-a-jordan-base`,
  `thm-solid-between-continuous-graphs-fubini-formula`,
  `cor-volume-of-a-closed-three-ball`.
  This is finding 11.
- **No dependency has `provenance.statement: ai-generated`.** Checked
  mechanically over every one of the seventy-seven frontmatter blocks.
- **No dependency is legacy-unclassified.** Every one carries a component
  `provenance` block, so no `established-from-knowledge` / `source-checked`
  confidence route had to be recorded for any of them. Two were nevertheless
  verified against literature because their exact conventions are load-bearing
  here: `def-oriented-unit-normal-and-flux-of-a-surface-patch` (flux is
  $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$, the *unnormalised*
  oriented area vector, which is what makes the graph-face lemma a change of
  variables rather than an area computation) and
  `def-type-i-type-ii-and-elementary-green-regions` (whose $\alpha,\beta$ are
  continuous **piecewise-$C^1$** on $[a,b]$, so a closed disc is **not** an
  elementary Green region and no example on this pair may use one as a Stokes
  parameter region; every parameter region used here is a rectangle).
- **Every load-bearing dependency is internal to the pair or on a page at
  strictly lower plan order. There is no exception**, no forward reference on the
  spine, and no external fallback.
- **No unstated dependency.** The proof-obligation map in
  `research/frontier-18-batch-6.proof-contracts.json` assigns every planned step
  an input, and the deps lists in the manifest were built from that map rather
  than from the item titles. The two places where a proof would otherwise have
  silently rebuilt library machinery are both scaffolded: the change of variables
  with a degenerate boundary (finding 2), and the additivity of an integral over
  finitely many Jordan pieces filling a set up to content zero, which
  `lem-green-boundary-cancellation-under-finite-gluing` derives inline and which
  is used four times here, so it is `lem-integral-additivity-over-a-content-zero-almost-partition`.

---

## Obvious published-dependency falsehoods found

**None.** Every published item read for this batch states what it was cited for.
One near miss is recorded because it will look like an error to the next reader:
`ex-sphere-and-hemisphere-surface-integrals` (draft, RC-8 B page) computes with
$\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi$ and calls it outward, which
is **correct** for the parameter order $(\phi,\theta)$ that its Facts section
fixes; the opposite order $(\theta,\phi)$ gives the inward vector. The strategy
line in `research/frontier-17-batch-4.pages.json` wrote the parameter rectangle in
the other order, and the authored item did not follow it. Every patch on this pair
uses $(\phi,\theta)$, and the author must recompute rather than copy a sign.

---

## Boundary and proof-obligation notes that have no scaffold anchor

These must reach the step-5 author.

1. **$N\ge1$ everywhere.** Every finite family on this page — the pieces of a
   gluing, the patches of a presentation, the sublists of an adapted presentation —
   is indexed by a nonempty finite set, exactly as
   `def-type-i-type-ii-and-elementary-green-regions` requires a *nonempty* finite
   union. The lateral sublist $\Sigma^0$ **may** be empty (the ball has no lateral
   face in any direction); the upper and lower sublists may not, because their
   projected images must fill the base up to content zero and the base has nonempty
   interior.
2. **The degenerate slice.** In `lem-the-coordinate-flux-identity-for-a-simple-solid-region`
   the inner integral runs from $\gamma_1(u)$ to $\gamma_2(u)$, and on $\partial D$
   these may coincide. `thm-ftc-second-part` requires $a<b$, so the case
   $\gamma_1(u)=\gamma_2(u)$ needs its own line: both the inner integral and the
   endpoint increment are zero. Do not fold it into the main step.
3. **Where a lateral patch's integrand vanishes.** It vanishes on the *interior*
   of the parameter region by hypothesis. The integrand is continuous on the whole
   compact parameter region, and a compact Jordan parameter region is the closure
   of its interior (`def-admissible-regular-parametrized-surface-patch` says so),
   so it vanishes identically. Use that, not
   `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`, which
   would also work but is a heavier citation for a continuity argument.
4. **Both signs, every time.** `lem-flux-of-a-single-component-field-through-an-oriented-graph-face`
   has an upper and a lower case and the lower one is not "similarly": the
   change-of-variables lemma produces $|\det D\psi|$, and turning that into
   $-\det D\psi$ is where the lower case's sign comes from.
5. **Both directions of every iff.** Only two items are biconditional —
   `cor-curl-vanishes-exactly-when-a-field-is-closed` and, inside
   `lem-change-of-variables-with-a-degenerate-parameter-boundary`, the
   integrability equivalence inherited from the published compact theorem. Write
   both directions of each.
6. **`lim` notation.** `cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume`
   and `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` state
   limits. Under the owner's 2026-07-27 instruction, new content writes `\lim`
   once well-definedness is settled, not the arrow form.
7. **No applied $\iota$.** No natural number on this pair is ever wrapped in the
   canonical embedding. The index $N$ of a gluing, the $n$ of $\mathbb R^n$ and
   the counts inside a finite sum are written as numbers.
8. **No wikilink inside `$…$`.** Several statements name a published item next to
   a formula (`def-cross-product-in-r3` beside $u\times v$, for instance). Keep
   every `[[id]]` outside the maths delimiters.
9. **Finite smoke tests.** `node tools/finite-smoke.mjs --self-test` lists ten
   checks; all ten are graph-, group-, poset-, arithmetic- or polynomial-shaped.
   Nothing on this pair is a finite combinatorial claim — the whole page is about
   integrals of continuous functions over Jordan sets — so every contract carries
   `finite_smoke: []`. That is a genuine absence and not an unread list; the
   registry was run, not assumed.
10. **The two-paragraph summary.** Paragraph 1 names the published dependencies
    the development uses: the patch, flux and finite-presentation machinery of
    `regular-surfaces-and-surface-integrals`; the solids between continuous graphs
    of `volumes-of-elementary-solids-and-solids-of-revolution`; Jordan content,
    Fubini and change of variables; and the line integrals, positive boundary
    chains and Green's theorem of `line-integrals-and-the-gradient-theorem`.
    Paragraph 2 names the divergence and curl, the simple and elementary solid
    regions with their adapted presentations, the divergence theorem and its
    corollaries, and the classical Stokes theorem with the planar dictionary.
    **No count, no ranking, no claim about another page, no "later".**

---

## The proof contract, and how to read it at step 5

`research/frontier-18-batch-6.proof-contracts.json` is version 1 in the shape
`QUALITY-CONTROLS.md` fixes. Its `scope` is the 51 proof-bearing items of the pair:
the A page's 45 items less its 9 definitions and 1 remark, plus all 16 B-page items.
Definitions and remarks are out of scope because they carry no phase-format body.

Four things about it bind the step-5 author.

1. **A citation's `quote` for a published or draft dependency is an exact
   substring of that item's real `Statement`, `Definition`, `Example` or
   `Statement refuted`, verified against disk in this dispatch.** Do not
   paraphrase it into the Facts block and do not shorten it further: the gate
   compares whitespace-normalised text, and the fidelity rule is stricter than
   the gate. Where a fact needs a shorter restatement in the item, keep the
   contract's quote as the clause the restatement must preserve.
2. **A citation's `quote` for a dependency inside this pair is a PLANNED quote**,
   because that item does not exist yet. It is the sentence the item's Statement
   or Definition must eventually contain. Either author the item so it does, or
   update the contract at step 5 — the contract is Beta's to keep current, and a
   stale quote is a `citation-quote-mismatch` at the whole-level gate.
3. **`uses` and `inputs` were generated from one source, so they cannot disagree.**
   Each fact's `uses` is exactly the list of steps whose `inputs` name it. When the
   authored step numbering differs from the plan, renumber both together.
4. **Every one of the 400 boundary rows is specific to its item.** None is a
   templated `not_applicable`, which `boundary-audit.mjs` exists to catch. Where a
   row is `checked` it names the step that discharges the case; where it is
   `not_applicable` the reason says what would have degenerated and why it cannot.
   The rows that carry real mathematics are worth reading before authoring:
   `lem-the-coordinate-flux-identity-for-a-simple-solid-region`'s `endpoints` row
   (the degenerate slice where the two graphs meet, which the second fundamental
   theorem cannot take), `lem-change-of-variables-with-a-degenerate-parameter-boundary`'s
   `degenerate` row (invertibility on the interior only, which is the whole point
   of the lemma), `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`'s
   `degenerate` row (the projection landing on the base boundary, where the claim
   is false and is excluded by hypothesis), and
   `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes`'s `degenerate` row
   (finding 14's face subdivision).

**`finite_smoke` is `[]` on all 50.** `node tools/finite-smoke.mjs --self-test`
lists ten checks and every one is graph-, group-, poset-, arithmetic- or
polynomial-shaped. This pair is integrals of continuous functions over Jordan sets
and cross products in $\mathbb R^3$; no bounded finite model is a countermodel
search for any of it. That is a read registry and a genuine absence, not an
unexamined field. `finite-smoke` accordingly reports `0 check(s)`, which per
`QUALITY-CONTROLS.md` must be read as the count and not as a green gate.

**No `risk_review` is written.** Only Alpha writes one, and only at step 6;
`--require-reviewed` at step 5 could never pass. `risk-report` will route the
high-scoring items once they are authored — expect
`lem-change-of-variables-with-a-degenerate-parameter-boundary`,
`lem-the-coordinate-flux-identity-for-a-simple-solid-region`,
`prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`,
`thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`
and `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` among them,
on step count, boundary language and limiting language alike.

## Gate expectations for the engine (claims, not results)

Not run here, because this batch's items reach `research/plan-spec.json` only at
step 4:

- `node tools/validate-plan.mjs research/plan-spec.json` — expected clean. Both
  pages are under the 60-item `size` ceiling (44 and 16); every item's `deps` are
  earlier on the same page or on a page of strictly lower order.
- `node tools/proof-contract.mjs research/<run>-proof-contracts.json --strict`,
  `finite-smoke` and `risk-report` — these read authored items, so at step 2 they
  can only report `item-missing`, and they did (50 of 50). They are meaningful for
  this batch from step 5 onward; nothing in the contract has been checked against
  authored text, because there is none.
- `node tools/depsource.mjs` — expected `0 unresolved`. Expected classifications:
  `published` for sixty-three external deps, `draft-page` for the thirteen listed
  under finding 11, `planned-earlier` for every within-pair edge. **No
  `planned-later` and no `homeless` is expected**; if `depsource` reports either,
  it is a real defect in this scaffold and not a gate artefact.

---

## Confidence statement

**High confidence, checked mechanically in this dispatch.**

- Every dependency edge in the manifest resolves and points backwards: 369
  `disk-earlier-page`, 99 `same-page-earlier`, 45 `batch-earlier-page`, and zero
  edges pointing later, homeless or unresolved, computed against
  `research/plan-spec.json` and `items/` rather than assumed.
- All 77 external dependencies exist on disk; none has
  `provenance.statement: ai-generated`; none is legacy-unclassified; 14 are
  `status: draft` and all 14 sit on pages of strictly lower plan order.
- All 326 contract citations that name an item already on disk quote text that
  really occurs in that item's named section, checked with the repository's own
  `tools/facts-block.mjs` parser under the same whitespace normalisation
  `proof-contract.mjs` uses. The other 138 quotes name items this pair will
  author and are planned text, flagged as such above.
- All 50 contracts carry all 8 boundary cases, every `checked` row anchored to a
  step that exists, every `not_applicable` row carrying its own reason; every
  numbered step is claimed exactly once; every fact label is inside the
  `[FAL]\d+` grammar and is used by at least one step.
- The four mathematical computations behind findings 13 to 16 were done by hand
  in this dispatch, not inherited: the four edge integrals of the rectangle
  example, the three box faces of the U-shaped prism, the four edges of the
  cylinder's parameter rectangle under the published positive-boundary rule, and
  the explicit orthonormal-pair construction with its determinant cycle.

**Verified by reading, not mechanically.**

- The octant presentation of the ball and the cap-and-quarters presentation of
  the cylinder were checked direction by direction, including the sign of every
  coordinate of the oriented area vector on each parameter interior and the
  content-zero residue of each projected image. They are correct as scaffolded.
- The cross-product curl identity applied in the vector-potential proof was
  expanded in full and the resulting integrand recognised as an exact $t$
  derivative; the two endpoint values were checked.

**What I did NOT verify.**

- **No gate was run against authored text**, because none exists. `proof-contract`,
  `finite-smoke` and `risk-report` all report `item-missing` on all 50 items, and
  every claim in the contract about how a proof will run is a plan, not a
  checked fact. The routing predictions above are guesses at what `risk-report`
  will score.
- **`validate-plan` and `depsource` were not run**, because this batch's items
  reach the spec only at step 4. The dependency classification above is my own
  reimplementation of the same question and is not the gate.
- **The faithfulness of the coverage harvest to its three sources was not
  re-checked in this dispatch.** `coverage-checklist` reports it structurally
  complete, and the first Beta-6 dispatch fetched and harvested the sources; I
  read the harvest, not the sources. Alpha's step-6 faithfulness check is the
  first real test of it.
- **The Mobius band's regularity was not computed.** The contract records the
  obligation (the width factor stays at least a half, so the two parameter
  derivatives are never parallel) and the step-5 author must carry it out; I
  checked the half-turn identity that makes the two overlap components have
  opposite relative sign, which is the part the false statement turns on.
- **I did not re-open all 77 dependency items in this dispatch.** I opened the
  Statement or Definition of every one that the contract cites, which is most of
  them, and took the first dispatch's record for the rest.

## Authoring notes for step 5 (Beta-6 reads this before writing anything)

- The house style to copy is `items/lem-cauchy-bounded.md` and, for anything on
  this page, the published Green cluster: `lem-green-type-i-boundary-identity`
  for a Facts-and-Proof shape with a boundary case, and
  `lem-green-boundary-cancellation-under-finite-gluing` for a content-zero
  cancellation argument. This page is deliberately their analogue and should read
  like them.
- The `**Given:**` paragraph carries the supplied data — the decomposition, the
  presentation, the gluing pairs. That is where "part of the data" is said, once,
  per item.
- Where a proof reasons about the three coordinate directions, write all three.
  The cyclic projection is exactly the place where "and similarly" is wrong.
- `precheck` stratifies phases: a step citing phase-$k$ steps sits in phase $k+1$.
  Several proofs here have a long single chain (the exhaustion argument in
  `lem-change-of-variables-with-a-degenerate-parameter-boundary` especially);
  expect a REPAIR pass and adopt the printed canonical stratification.

## Continuity checkpoint

- **Substage:** step 5 authoring, before the missing-B-page-item write pass.
- **Owned artifacts:** `research/frontier-18-batch-6.pages.json`,
  `research/frontier-18-batch-6.notes.md`,
  `research/frontier-18-batch-6.coverage.json`,
  `research/frontier-18-batch-6.proof-contracts.json`,
  `library/real-analysis/the-divergence-theorem-and-classical-stokes.md`,
  `library/real-analysis/the-divergence-theorem-and-classical-stokes-examples.md`,
  and all batch-6 item ids under `items/`.
- **Disk state verified:** 47 of 61 scoped item files already exist, all on this
  pair's A page plus `ex-the-closed-unit-box-is-an-elementary-solid-region` and
  `ex-the-divergence-theorem-on-the-closed-unit-box`; the remaining 14 scoped
  item files are the B-page items still to be authored. Both page files are still
  absent.
- **Completed gates before this checkpoint:** the step-2 manifest and source
  gates recorded above; no step-5 gate has yet been run on the authored pair.
- **Frozen-text state:** Alpha step-3 findings B6-1 and B6-2 are already applied
  in the scaffold artifacts; the A page count is 45, including
  `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`.
- **Open mathematical constraints:** keep the ball and cylinder examples within
  the adapted-presentation route; state the $C^2$ hypothesis exactly where
  $\operatorname{curl}F$ must be $C^1$; write all three coordinate directions
  explicitly where the proof uses them; and preserve the supplied-data convention
  in every `**Given:**` paragraph.
- **Exact next action:** author the 14 missing B-page item files from the
  scaffold strategies and proof-contract entries, then create the two page files
  and run the step-5 gates.

---

## Step-3 fix pass

Findings taken from `research/frontier-18-alpha-a-step3-scaffold-review.md`, the
group-`a` Alpha that reviewed batches 6, 7 and 8. Ids are that report's; none is
renumbered. Batch 6's verdict there is **insufficient** on B6-1 and B6-2.

### B6-1 — `applied` (major; blocked `sufficient`)

Corral's Corollary 4.18 was misdescribed in the harvest, and its actual content
was carried by no item.

**Verified before applying.** I re-fetched
`https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals/4.06%3A_Gradient_Divergence_Curl_and_Laplacian`
in this dispatch and enumerated its own numbered items. Corollary 4.18 reads, in
the source's words:

> The flux of the curl of a smooth vector field \(f(x, y, z)\) through any closed
> surface is zero.

That is not "a field that is a curl has vanishing divergence", which is Corral's
Theorem 4.17 and which the row immediately above already disposes to
`thm-the-divergence-of-a-curl-vanishes`. Alpha's premise is exact.

Two changes:

1. The row's `name` in `research/frontier-18-batch-6.coverage.json` is now
   `Corollary 4.18 (the flux of the curl of a smooth vector field through any
   closed surface is zero)`, and its `item` points at the new corollary rather
   than repeating Theorem 4.17's.
2. `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`
   is added to the A page at position **33**, directly after
   `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`,
   with a proof contract in
   `research/frontier-18-batch-6.proof-contracts.json` and a provenance row
   (`ai-altered` statement, `ai-altered` proof — the reformulation reason is the
   one the whole block carries: Corral's "any closed surface" is not a notion this
   library has).

The route, checked before scaffolding it: for $F$ of class $C^2$ on an open set
containing the solid, each component of $\operatorname{curl}F$ is a difference of
first partials of components of $F$, so its own first partials are second partials
of components of $F$ and are continuous — $\operatorname{curl}F$ is $C^1$. Then
`thm-the-divergence-of-a-curl-vanishes` gives
$\operatorname{div}(\operatorname{curl}F)=0$, and
`cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`
applies to it. **$C^2$ is stated where it is used, at the step that makes
$\operatorname{curl}F$ a $C^1$ field**, not inherited silently from the identity:
with $F$ only $C^1$ the divergence of $\operatorname{curl}F$ need not exist and
neither cited result has a hypothesis to consume. The contract's `degenerate` and
`iff-reverse` boundary rows carry that and the false converse respectively.

The A page is now **45 items**, fifteen under the `size` ceiling. Deps checked
individually: five are earlier on this page (positions 1, 6, 27, 29, 32) and three
are published on disk (`def-finitely-patched-regular-surface-and-integrals`,
`def-ck-and-multi-index-notation-in-several-variables`,
`def-euclidean-inner-product`), whose home pages are already in this page's
`requires` closure because other items already cite them. No forward reference is
introduced. The three published quotes in the new contract entry were checked to
occur verbatim in the items on disk.

### B6-2 — `applied` (minor; blocked `sufficient`)

CLP-4 Lemma 4.1.13 carried no disposition.

**Verified before applying.** I fetched
`https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/sec_graadDivCurl.html` and
enumerated its numbered items. Lemma 4.1.13 is there, between Theorem 4.1.12 and
Theorem 4.1.16, and states that if $B$ has a vector potential then it has one
whose third component vanishes. It is inside the claimed locator (§4.1) and was
absent from the harvest. The omission is real.

The row is added with disposition `out-of-scope`, as Alpha proposed and for the
reason Alpha gave: CLP-4 reaches Theorem 4.1.16 by normalising a component and
integrating the remaining two, while this page reaches the vector potential by the
homotopy formula, which produces its potential directly and normalises nothing. It
is a step of a route this page does not take, not a result declined for want of a
prerequisite — the raised bar for a decline does not bite, because there is no
missing definition or lemma standing in the way.

### B6-3 — `applied`, with one row `pushed back` in part (minor)

Five rows deferred to `regular-surfaces-and-surface-integrals` / `-examples` with
reasons reading "authored and awaiting the owner's publish action". That state no
longer holds: both pages and every item named are `status: published` on disk,
checked individually. Four rows are now `already-published` naming the item:

| source heading | item |
|---|---|
| CLP-4 Definition 4.2.1 (smooth and piecewise smooth surfaces) | `def-finitely-patched-regular-surface-and-integrals` |
| Corral, the scalar surface integral | `def-surface-area-and-scalar-surface-integral-of-a-patch` |
| Corral, the surface integral of a vector field | `def-oriented-unit-normal-and-flux-of-a-surface-patch` |
| Corral Example 4.9 (the surface area of a torus) | `ex-torus-surface-area` |

**The fifth row I did not convert, and this is a partial push-back.** CLP-4's
Lemma 4.1.8 is one heading carrying two formulas, which CLP-4 itself cites
separately as 4.1.8.a and 4.1.8.b:

- **4.1.8.a**, $\langle a,b\times c\rangle=\langle a\times b,c\rangle$;
- **4.1.8.b**, $a\times(b\times c)=\langle c,a\rangle b-\langle b,a\rangle c$.

Marking the row `already-published` against
`lem-cross-product-is-bilinear-alternating-and-orthogonal` would be the **same
defect B6-1 just corrected one source down**: that published item states
bilinearity, the alternating law, $\langle u\times v,w\rangle=\det[u\ v\ w]$ and
orthogonality — I opened it — and part (b), the vector triple product expansion,
is not in it and is on no item in the corpus. So the row is split on the source's
own sub-labels, which is enumeration and not invention:

- **4.1.8.a → `inline`**, absorbed by `cor-vector-forms-of-the-divergence-theorem`,
  whose contract already derives $\langle F\times c,n\rangle=\langle c,n\times F\rangle$
  by cycling the columns of the determinant. That is the honest disposition: the
  identity is used here, from the published determinant identity, and is not
  restated as an item.
- **4.1.8.b → `deferred`, destination `owner-decision`.** No route on this page
  uses it: `lem-the-divergence-and-curl-of-a-cross-product`,
  `cor-the-curl-of-a-curl-of-a-c2-field` and
  `lem-curl-is-the-antisymmetric-part-of-the-total-derivative` are each proved by
  direct coordinate expansion. Its natural home is the published cross-product
  material on `regular-surfaces-and-surface-integrals`, and published pages are
  not retrofitted, so it has a real statement and genuinely nowhere to go — which
  is what `owner-decision` is for. I did not scaffold it here: with no consumer on
  this page it would be padding, which the scaffold-richness rule forbids.

Alpha's Finding-11 closure is recorded at Finding 11 above: all seventy-seven
external dependencies are `status: published` on disk today, checked individually,
so `depsource.mjs` classifies none of them `draft-page`.

### B6-4 — `already correct` (record only)

Alpha confirms the deferral of the `external_refs` entries from
`rem-the-reach-of-the-classical-divergence-and-stokes-theorems` and the curl-free
counterexample, because `library/not-proved-here/deferred-algebraic-topology.md`
and its items are `status: draft` and a published item may not wikilink to
owner-only content. No scaffold change is requested and none is made. It stays a
step-9 check: if that page publishes before step 10, add the two entries then.

### Gates re-run after these edits

| gate | result |
|---|---|
| `coverage-checklist.mjs research/frontier-18-batch-6.coverage.json` | **pass** — 1 page, 94 harvested results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json` | **pass** — 786 scoped items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | **pass** — acyclic and consistent, `redundant-prereq` advisories only, none on this pair |
| `depsource.mjs` | **pass** — 0 unresolved across the spec |
| `boundary-audit.mjs` on this batch's contracts | the new entry raises neither `template` nor `contradicted` |
| `proof-contract.mjs` on this batch's contracts | 51 errors, **all `item-missing`** — nothing is authored yet; this gate belongs to step 5 |

The manifest is not yet spliced into `research/plan-spec.json`, so `validate-plan`
has not yet seen the new item; `splice-plan.mjs` does that at step 4 and the engine
runs the authoritative gate then.

---

## Continuity checkpoint — step 5 authoring in progress

- **Substage:** step 5. Authoring the A page in reading order. Items 1-23 of the A
  page are written to `items/` and each passes
  `node tools/tsx-run.mjs tools/precheck.mts` individually. Nothing on the B page
  is authored yet; neither page file exists yet.
- **Owned artifacts:** `items/<id>.md` for the 61 ids of
  `research/frontier-18-batch-6.pages.json`; `library/real-analysis/the-divergence-theorem-and-classical-stokes.md`
  and its `-examples` companion; this notes file; the batch coverage and
  proof-contract files.
- **Frozen-text state:** nothing frozen; step 7 has not run.
- **Known contract drift to repair before reporting:** precheck's canonical
  stratification renumbered steps in several items away from the step labels the
  step-2 contract planned (`cor-the-curl-of-a-curl-of-a-c2-field`,
  `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`,
  `lem-change-of-variables-with-a-degenerate-parameter-boundary`, and most items
  whose facts were relabelled while authoring). The contract's `citations[].uses`,
  `derivations[].step` and `boundaries[].evidence` must be regenerated from the
  authored files before `proof-contract.mjs --strict` can pass.
- **Deps dropped from the scaffold while authoring, with reasons:**
  `cor-jordan-content-finite-additivity` and
  `thm-continuous-functions-on-compact-jordan-sets-are-integrable` from
  `lem-integral-additivity-over-a-content-zero-almost-partition` (the finite-union
  content-zero step concatenates covers directly and integrability is a
  hypothesis); `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`
  from `lem-the-coordinate-flux-identity-for-a-simple-solid-region` (the lateral
  integrand vanishes by continuity on the closure of the interior, which is the
  lighter and exact citation).
- **Deps added while authoring, with reasons:** `thm-heine-cantor-metric`,
  `lem-uniform-integral-error-bound`, `thm-heine-borel-rn`,
  `thm-continuous-implies-integrable` to the vector-potential theorem (continuity
  of the differentiated parameter integral, which Leibniz's rule alone does not
  give); `def-inversions-inversion-number-and-sign` to the cyclic-permutation and
  projected-Jacobian lemmas (the sign of the contributing permutation in the
  Leibniz determinant sum); `lem-jordan-set-integral-well-defined` and
  `lem-riemann-integral-unchanged-by-content-zero-modification` to the additivity
  and change-of-variables lemmas; `def-derivative`,
  `lem-sign-preservation-near-a-limit`, `thm-chain-rule-for-total-derivatives`,
  `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
  `def-jacobian-determinant-of-a-c-one-map` to the outward-normal proposition.
- **One statement narrowed:** `def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid`
  defines outwardness as a condition on a unit vector and does **not** claim
  uniqueness, because it is false: for the closed unit ball every unit $\nu$ with
  $\langle p,\nu\rangle>0$ satisfies it. Uniqueness is recovered only once a
  tangent plane is supplied, and
  `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`
  accordingly proves that $N$ is outward and $-N$ is not, which is what makes "the
  outward unit normal to $T$" a definite object.
- **Exact next action:** author
  `def-elementary-solid-region`, then items 25-45 of the A page, then the 16 B-page
  items, then the two page files, then regenerate the proof contract, then run the
  batch gates.

## Step-5 authoring

Authoring completed on Monday, August 24, 2026. This pass wrote the 14 missing
B-page item files, created the two page files
`library/real-analysis/the-divergence-theorem-and-classical-stokes.md` and
`library/real-analysis/the-divergence-theorem-and-classical-stokes-examples.md`,
and kept the scaffold's final A-page count at 45 and B-page count at 16.

### Per-item list

#### the-divergence-theorem-and-classical-stokes

- `def-divergence-and-curl-of-a-c1-vector-field` — `n/a`
- `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules` — `pass`
- `lem-the-divergence-and-curl-of-a-cross-product` — `pass`
- `cor-curl-vanishes-exactly-when-a-field-is-closed` — `pass`
- `thm-the-curl-of-a-gradient-vanishes` — `pass`
- `thm-the-divergence-of-a-curl-vanishes` — `pass`
- `def-laplacian-of-a-c2-function` — `n/a`
- `cor-the-curl-of-a-curl-of-a-c2-field` — `pass`
- `cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative` — `pass`
- `def-vector-potential-of-a-c1-vector-field` — `n/a`
- `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential` — `pass`
- `lem-curl-is-the-antisymmetric-part-of-the-total-derivative` — `pass`
- `lem-c-one-images-of-content-zero-compact-sets-have-content-zero` — `pass`
- `lem-integral-additivity-over-a-content-zero-almost-partition` — `pass`
- `lem-change-of-variables-with-a-degenerate-parameter-boundary` — `pass`
- `lem-cyclic-coordinate-permutations-preserve-integrals-in-r3` — `pass`
- `def-simple-solid-region-in-a-coordinate-direction` — `n/a`
- `lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians` — `pass`
- `def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid` — `n/a`
- `def-adapted-outward-boundary-presentation-of-a-simple-solid-region` — `n/a`
- `lem-flux-of-a-single-component-field-through-an-oriented-graph-face` — `pass`
- `lem-the-coordinate-flux-identity-for-a-simple-solid-region` — `pass`
- `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal` — `pass`
- `def-elementary-solid-region` — `n/a`
- `cor-every-face-of-an-elementary-solid-region-is-outward-oriented` — `pass`
- `thm-the-divergence-theorem-for-an-elementary-solid-region` — `pass`
- `def-finite-gluing-of-elementary-solid-regions` — `n/a`
- `lem-internal-faces-cancel-when-elementary-solid-regions-are-glued` — `pass`
- `thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions` — `pass`
- `cor-vector-forms-of-the-divergence-theorem` — `pass`
- `cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux` — `pass`
- `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid` — `pass`
- `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes` — `pass`
- `cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume` — `pass`
- `cor-greens-first-identity-for-glued-elementary-solid-regions` — `pass`
- `cor-greens-second-identity-for-glued-elementary-solid-regions` — `pass`
- `def-the-induced-boundary-chain-of-a-c2-surface-patch` — `n/a`
- `lem-a-vector-line-integral-pulls-back-to-the-parameter-region` — `pass`
- `lem-the-stokes-integrand-identity-on-a-c2-patch` — `pass`
- `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` — `pass`
- `cor-stokes-gives-zero-circulation-for-a-curl-free-field` — `pass`
- `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` — `pass`
- `cor-greens-theorem-in-circulation-form` — `pass`
- `cor-the-planar-divergence-theorem-flux-form-of-greens-theorem` — `pass`
- `rem-the-reach-of-the-classical-divergence-and-stokes-theorems` — `n/a`

#### the-divergence-theorem-and-classical-stokes-examples

- `ex-the-closed-unit-box-is-an-elementary-solid-region` — `pass`
- `ex-the-divergence-theorem-on-the-closed-unit-box` — `pass`
- `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation` — `pass`
- `ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field` — `pass`
- `ex-the-right-circular-cylinder-is-an-elementary-solid-region` — `pass`
- `ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin` — `pass`
- `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin` — `pass`
- `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface` — `pass`
- `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes` — `pass`
- `ex-the-planar-divergence-theorem-on-a-rectangle` — `pass`
- `ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes` — `pass`
- `ex-stokes-on-two-patches-spanning-the-same-circle` — `pass`
- `fs-stokes-needs-the-surface-to-be-a-graph` — `pass`
- `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative` — `pass`
- `ex-the-mobius-band-presented-by-two-regular-patches` — `pass`
- `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly` — `pass`

### Ledger

- No item id, title, statement, or dependency list changed from the final
  scaffold in `research/frontier-18-batch-6.pages.json`.
- No planned item was dropped, merged, or narrowed. The step-3 additions B6-1
  and B6-2 remained in scope exactly as applied in the scaffold artifacts.
- One authored wording repair was applied after item writing:
  `lem-a-vector-line-integral-pulls-back-to-the-parameter-region` now writes
  `\varphi(\sigma([a,b]))` instead of the accidental `\varphi[\sigma[[a,b]]]`,
  which had created an unresolved wikilink `[[a,b]]`. This changes notation
  only, not the mathematical claim.
- All A-page items keep the grouped provenance assignments recorded in
  `## Component provenance, per planned item, with the rationale`, except one
  final refinement:
  `ex-the-mobius-band-presented-by-two-regular-patches` was authored
  `provenance.statement: ai-altered`, `provenance.proof: ai-altered`, not the
  provisional `literature-derived` / `ai-altered` row from the step-2 notes.
  The reason is that the exact two-rectangle overlap-sign witness written on
  disk is a local construction assembled from the published regular-surface and
  orientation conventions, not a harvested textbook statement copied verbatim.
- The B-page provenance classes on disk are therefore:
  `literature-derived` / `ai-altered` for
  `ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field`,
  `ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin`,
  `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`,
  `ex-stokes-on-two-patches-spanning-the-same-circle`,
  `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`;
  `ai-altered` / `ai-altered` for
  `ex-the-closed-unit-box-is-an-elementary-solid-region`,
  `ex-the-divergence-theorem-on-the-closed-unit-box`,
  `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`,
  `ex-the-right-circular-cylinder-is-an-elementary-solid-region`,
  `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`,
  `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes`,
  `ex-the-planar-divergence-theorem-on-a-rectangle`,
  `ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes`,
  `fs-stokes-needs-the-surface-to-be-a-graph`,
  `ex-the-mobius-band-presented-by-two-regular-patches`,
  `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly`.
- No item on this pair is `ai-generated` in either component. No item uses the
  external-fallback route, and no item is `proved_here: false`.
- `research/frontier-18-batch-6.proof-contracts.json` was regenerated from the
  final on-disk facts and numbered steps for all 51 scoped proof-bearing items.
  The citation and derivation entries are therefore current to the authored
  files, and the stale boundary-step references created by canonical precheck
  renumbering were re-anchored to the relevant `Statement` / `Example` /
  `Counterexample` section text where needed.

### Gates

- `node tools/tsx-run.mjs tools/reflow.mts items/<all 61 scoped ids>` —
  completed; later reruns were `unchanged` after local repairs.
- `node tools/tsx-run.mjs tools/precheck.mts items/<all 61 scoped ids>` —
  clean, `51 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-18-batch-6.proof-contracts.json --strict`
  — `0 error(s), 0 warning(s), 51/51 item(s) checked`.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-6.coverage.json`
  — `1 page(s), 94 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-18-batch-6.pages.json`
  — `61 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/prosecheck.mjs library/real-analysis/the-divergence-theorem-and-classical-stokes.md library/real-analysis/the-divergence-theorem-and-classical-stokes-examples.md --warnings`
  — `2 file(s) checked. 0 error(s), 0 warning(s).`
- `node tools/validate-plan.mjs research/plan-spec.json`
  — passes; only `redundant-prereq` advisories outside this batch.
- `node tools/extcheck.mjs`
  — passes.
- `node tools/citecheck.mjs`
  — warning-only, 40 repository-wide warnings. A targeted scan of that output on
  August 24, 2026 named no batch-6 item.
- `node tools/depcheck.mjs`
  — still red, but not on batch 6. After the batch-local fix to
  `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`, the
  remaining hard error is the unrelated page cycle
  `lattice-paths-and-catalan-numbers-examples -> lattice-paths-and-catalan-numbers -> lattice-paths-and-catalan-numbers-examples`.
- `node tools/fwdcheck.mjs`
  — still red, but not on batch 6. After removing the A-to-B remark wikilinks
  from this pair, the remaining hard error is the unrelated undeclared forward
  reference in `items/rem-the-two-forms-of-rodls-theorem.md` pointing at
  `cex-weak-sparsity-does-not-imply-sparsity`.

### Escalations

- No batch-local blocker remains on the authored pair.
- The two remaining repo-gate failures named above are outside batch 6's
  ownership and were left untouched.

### Confidence

Confidence is high on the batch-local mathematics and medium on the surrounding
repository state. I verified the authored pair with `precheck`, strict proof
contracts, manifest policy, coverage, prose, and targeted repo-gate triage, and
I repaired the only batch-local `depcheck` / `fwdcheck` defects that those runs
exposed. I did not run a renderer preview, a judge sweep, or any step-6
independent-reader audit, and I did not repair the unrelated run-wide `depcheck`
or `fwdcheck` failures outside batch 6.
