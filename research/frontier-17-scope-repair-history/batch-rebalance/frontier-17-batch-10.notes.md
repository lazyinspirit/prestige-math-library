# Frontier 17, batch 10 — Beta-10 scaffold notes

## Scope, artifact boundary, and current state

This batch owns `regular-surfaces-and-surface-integrals` at order 288.00015 and `regular-surfaces-and-surface-integrals-examples` at order 288.00016. The A page has 22 items and the B page has 12 items. The A page is below the 60-item ceiling, so no split is proposed.

The four namespaced artifacts are this file, `research/frontier-17-batch-10.pages.json`, `research/frontier-17-batch-10.coverage.json`, and `research/frontier-17-batch-10.proof-contracts.json`. The coverage artifact is required by the canonical step-2 source-harvest rule even though the dispatch's older write-list sentence names only three artifacts.

The worktree was already active and dirty when this dispatch began. `research/plan-spec.json`, all other batch artifacts, and the autopilot task/state files belong to the engine or other agents and were not edited here.

## Design/spec drift held for the engine

The design section `research/plan-realanalysis-completion-track.md`, RC-8, says:

```text
`requires`: `line-integrals-and-the-gradient-theorem`, RC-2, `arc-length-and-rectifiable-curves`.
```

The current `research/plan-spec.json` and dispatched skeleton say:

```json
"requires": [
  "line-integrals-and-the-gradient-theorem",
  "constant-rank-submersions-and-regular-level-sets"
]
```

I did not choose between them. The manifest retains the spec. The omitted page is already a declared prerequisite of `line-integrals-and-the-gradient-theorem`, so its mathematics remains in the transitive closure, but the direct-edge discrepancy is left to the stage-1 drift unit.

`SCHEMA.md` still describes a 100-item scaffold review ceiling, while `CLAUDE.md`, this dispatch, and the design use a hard 60-item ceiling. This A page is below both values and no normative-document edit is proposed.

## Applyable amendments to `research/plan-realanalysis-completion-track.md`

### Amendment RC8-1 — build the missing cross-product and patch prerequisites

Recommendation: approve. No published item defines the cross product in $\mathbb R^3$, yet the design uses it in its first definition and every integral formula. The compact-domain convention also needs a nonempty connected interior and an explicit content-zero boundary exception; otherwise regularity is vacuous on a Jordan set with empty interior, while the designed spherical, conical, cylindrical, and toroidal parametrizations fail injectivity or rank on their seams, poles, or apex.

Target: RC-8 `**DEFS.**`.

Exact old text:

```text
**DEFS.** A regular parametrised surface patch $\varphi : D \to \mathbb{R}^3$ with
$D$ compact Jordan and $\partial_u\varphi \times \partial_v\varphi \ne 0$; oriented
reparametrisation; the first fundamental form and the Gram determinant; surface
area; the scalar surface integral; a unit normal field and an orientation; flux.
```

Exact new text:

```text
**DEFS.** The right-handed cross product in $\mathbb R^3$, including bilinearity, alternation, orthogonality, and its two-vector Gram identity. A compact Jordan parameter region is the closure of its nonempty connected interior. A regular parametrised surface patch is the image of a $C^1$ map defined near that region, injective with nonzero parameter cross product on the interior; seam identifications and rank failures may occur only on the content-zero parameter boundary. Define its tangent plane, regular reparametrisations and their orientation sign, the first fundamental form and area density, surface area and scalar surface integrals, unit normals and flux, and compatible finite patch presentations whose overlap preimages have content zero.
```

If declined, the first authored definition cites a nonexistent operation, a one-dimensional or empty-interior parameter set satisfies the proposed regularity condition vacuously, and the standard sphere and cone computations contradict the all-points rank condition.

### Amendment RC8-2 — expose the reparametrization and finite-patch proof backbone

Recommendation: approve. The invariance claims require two independently auditable steps: the signed area-vector transformation and compact-Jordan change of variables. The finite-piece claim also needs an overlap convention; saying only that patches add does not prevent positive-area double counting.

Target: the first paragraph of RC-8 `**THMS.**`.

Exact old text:

```text
**THMS.** The area element is $\lVert\partial_u\varphi\times\partial_v\varphi\rVert
=\sqrt{\det G}$, and surface area and scalar surface integrals are invariant under
orientation-preserving and orientation-reversing reparametrisation alike. Flux
changes sign under an orientation reversal. A regular level set (RC-2) is locally a
regular patch, so the sphere, the cylinder and the torus are covered by finitely
many patches with content-zero overlaps, and the patch integrals add.
```

Exact new text:

```text
**THMS.** The cross-product norm equals the square root of the two-tangent Gram determinant. For a reparametrisation $\psi=\varphi\circ h$, the oriented area vector satisfies $\psi_s\times\psi_t=(\det Dh)(\varphi_u\times\varphi_v)\circ h$, so its norm acquires $|\det Dh|$. Compact-Jordan change of variables then proves that surface area and scalar surface integrals are invariant under either orientation sign, while flux is preserved for an orientation-preserving reparametrisation and negated for an orientation-reversing one. A Jordan parameter boundary has content zero, so changing bounded parameter integrands only there changes no integral. A compatible finite patch presentation requires every pairwise overlap to have content-zero preimage in both patches, and its integrals are the sums of the patch integrals. A regular scalar level in $\mathbb R^3$ has local regular patches whose tangent planes agree with the kernel tangent space defined on RC-2; compact regular levels have finite patch covers.
```

If declined, the author would hide the determinant sign in an absolute-value substitution, leave the flux sign unproved, and define a patched integral that can double-count a two-dimensional overlap.

### Amendment RC8-3 — make the graph and revolution conclusions exact

Recommendation: approve.

Target: the final sentences of RC-8 `**THMS.**`.

Exact old text:

```text
Surface area
of a graph $z=g(x,y)$ is $\iint_D\sqrt{1+\lVert\nabla g\rVert^2}$. The surface of
revolution formula $2\pi\int f\sqrt{1+f'^2}$, and the lateral-surface half of
Gabriel's horn.
```

Exact new text:

```text
For a $C^1$ graph $z=g(x,y)$ over a compact Jordan region, compute the area density $\sqrt{1+\lVert\nabla g\rVert_2^2}$ and give the corresponding scalar-integral and upward or downward flux formulas. If a $C^1$ radius $r$ is positive on the interior of $[a,b]$ and may vanish only at its endpoints, rotation about the axis gives the scalar surface-integral formula with density $r\sqrt{1+r'^2}$ and hence area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$. Applying the formula to each compact truncation of $r(x)=1/x$ and comparing with the unbounded integral logarithm proves that Gabriel's horn has unbounded truncated lateral area.
```

If declined, the displayed revolution formula has no interval, positivity, endpoint, or compact-truncation hypotheses, and the horn would be treated as one compact patch although its parameter domain is noncompact.

### Amendment RC8-4 — replace the ambiguous continuity false statement and specify the B examples

Recommendation: approve. Modern theories assign generalized area to much rougher maps, so “has an area” is not a stable false proposition. The false statement needed here is specifically about applicability of this pair's regular-patch cross-product formula.

Target: RC-8 `**B page.**` and the second ledger row.

Exact old text:

```text
**B page.** The sphere's area $4\pi r^2$; the cylinder; the torus; a graph patch;
the lateral surface of a cone; a degenerate parametrisation whose image is a curve;
the same surface under two parametrisations with opposite orientation; **Schwarz's
lantern**, the inscribed-polyhedron sequence whose areas do not converge to the
cylinder's area, which is why surface area is *not* defined by inscribed polyhedra
the way arc length is defined by inscribed polygons.
```

Exact new text:

```text
**B page.** Compute the area and radial flux of a sphere together with scalar integrals on a hemisphere; present a closed cylinder by its side and two caps and compute its area and outward flux; compute the torus area $4\pi^2ab$; compute a downward flux on the graph $z=xy$ over the unit square; and prove the lateral cone formula $\pi R\sqrt{R^2+H^2}$. Give a two-parameter map whose image is only a line segment, and compute area and flux for two oppositely oriented parametrisations of the horizontal unit square. For Gabriel's horn, prove unboundedness of compact-truncation areas. For Schwarz's lantern, derive the exact triangulated area and choose the ring count as the cube of the polygon count so the mesh tends to zero while the areas diverge.
```

Exact old ledger row:

```text
- `fs-every-continuous-parametrised-surface-has-an-area` — FALSE without regularity.
```

Exact new ledger row:

```text
- `fs-continuity-alone-suffices-for-the-regular-surface-area-formula` — FALSE; the continuous injective cone graph $(u,v)\mapsto(u,v,\sqrt{u^2+v^2})$ has no partial derivative at the interior parameter point $(0,0)$, so the cross-product formula is unavailable for that parametrisation.
```

If declined, the false statement overclaims against generalized area theories and supplies no checkable witness for the precise regularity failure this page develops.

## Exact A-page summary for Step 5

`line-integrals-and-the-gradient-theorem` supplies parametrized integration, orientation-sensitive line integrals, and the compact-Jordan change-of-variables setting inherited through its declared prerequisites. `constant-rank-submersions-and-regular-level-sets` supplies local graph coordinates and kernel tangent spaces for regular scalar levels. Euclidean inner products and Gram determinants provide the linear-algebraic area scale, while compactness supplies finite subcovers of local patches.

The cross product, regular surface patches, tangent planes, reparametrizations, the first fundamental form, area density, scalar surface integrals, orientations, and flux are developed first. The signed area-vector transformation yields the scalar and flux reparametrization laws, and content-zero seams support compatible finite patch presentations. Regular level surfaces are reconciled with patch tangent planes. Graph and surface-of-revolution formulas then reduce geometric areas and fluxes to compact Jordan integrals.

The B page must have no authored summary body.

## Per-page item list

### `regular-surfaces-and-surface-integrals` — 22 items

1. `def-cross-product-in-r3` — definition — The cross product in $\mathbb R^3$
2. `lem-cross-product-is-bilinear-alternating-and-orthogonal` — lemma — The cross product is bilinear, alternating, and orthogonal to both factors
3. `thm-cross-product-norm-is-the-two-vector-gram-determinant` — theorem — The squared cross-product norm is the Gram determinant of two vectors
4. `def-admissible-regular-parametrized-surface-patch` — definition — Regular parametrized surface patches on compact Jordan parameter regions
5. `def-tangent-plane-of-a-regular-surface-patch` — definition — The tangent plane of a regular surface patch
6. `def-surface-reparametrization-and-orientation` — definition — Surface reparametrizations and their orientation sign
7. `prop-tangent-plane-is-invariant-under-regular-reparametrization` — proposition — The tangent plane is invariant under regular reparametrization
8. `cor-regular-surface-reparametrization-has-constant-orientation-sign` — corollary — A regular reparametrization of a connected parameter region has a constant orientation sign
9. `def-first-fundamental-form-and-surface-area-density` — definition — The first fundamental form, Gram matrix, and area density of a surface patch
10. `thm-surface-area-density-is-cross-product-norm` — theorem — The surface area density is the norm of the cross product of the parameter tangents
11. `lem-oriented-area-vector-under-surface-reparametrization` — lemma — The oriented area vector transforms by the parameter Jacobian determinant
12. `def-surface-area-and-scalar-surface-integral-of-a-patch` — definition — Surface area and scalar surface integrals on a regular patch
13. `thm-surface-area-and-scalar-integrals-are-reparametrization-invariant` — theorem — Surface area and scalar surface integrals are invariant under regular reparametrization
14. `def-oriented-unit-normal-and-flux-of-a-surface-patch` — definition — Unit normal fields, orientations, and flux through a regular surface patch
15. `thm-flux-under-surface-reparametrization` — theorem — Flux is invariant under orientation-preserving reparametrization and changes sign under reversal
16. `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals` — lemma — Content-zero parameter-boundary exceptions do not affect surface integrals
17. `def-finitely-patched-regular-surface-and-integrals` — definition — Finitely patched regular surfaces, their area, scalar integrals, and flux
18. `thm-regular-level-surfaces-have-local-regular-parametrizations` — theorem — Regular level surfaces have local regular parametrizations with the same tangent plane
19. `cor-compact-regular-level-surfaces-have-finite-patch-covers` — corollary — A compact regular level surface is covered by finitely many regular surface patches
20. `thm-surface-integrals-over-c-one-graphs` — theorem — Surface area, scalar integrals, and flux over a $C^1$ graph
21. `thm-scalar-surface-integrals-on-a-surface-of-revolution` — theorem — Scalar surface integrals on a surface of revolution
22. `cor-surface-area-of-revolution-formula` — corollary — The surface of revolution has area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$

### `regular-surfaces-and-surface-integrals-examples` — 12 items

1. `ex-sphere-and-hemisphere-surface-integrals` — example — Surface area and flux on a sphere, with scalar integrals on a hemisphere
2. `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` — example — A closed cylinder as a finitely patched oriented surface
3. `ex-torus-surface-area` — example — The surface area of a torus is $4\pi^2ab$
4. `ex-downward-flux-on-the-graph-z-equals-xy` — example — Downward flux through the graph $z=xy$ over the unit square
5. `ex-lateral-area-of-a-right-circular-cone` — example — The lateral area of a right circular cone is $\pi R\sqrt{R^2+H^2}$
6. `cex-degenerate-surface-parametrization-collapses-to-a-curve` — counterexample — A degenerate two-parameter map can collapse its image to a curve
7. `ex-orientation-reversal-preserves-area-and-negates-flux` — example — Opposite parametrizations preserve area and negate flux
8. `ex-gabriels-horn-has-unbounded-truncated-lateral-area` — example — Gabriel's horn has unbounded truncated lateral area
9. `cex-schwarz-lantern-polyhedral-areas-diverge` — counterexample — Schwarz lanterns can converge to a cylinder while their polyhedral areas diverge
10. `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` — false statement — FALSE: surface area is the supremum of inscribed polyhedral areas
11. `fs-continuity-alone-suffices-for-the-regular-surface-area-formula` — false statement — FALSE: continuity alone makes the regular-patch surface-area formula applicable
12. `fs-flux-is-independent-of-the-parametrization` — false statement — FALSE: flux is independent of the parametrization without an orientation condition

## Per-pair proof decomposition, corollary pass, and size review

Both required passes were performed for this A/B pair.

Long-proof decomposition:

- Cross-product machinery is separated into the coordinate definition, the bilinear/alternating/orthogonality lemma, and the norm/Gram theorem. This is the missing prerequisite for every later area-vector argument.
- Reparametrization invariance is decomposed into the orientation-sign definition, tangent-plane invariance, the constant-sign corollary, the signed area-vector lemma, scalar invariance, and the separate flux sign theorem.
- The passage from parameter patches to finite surfaces is decomposed through the content-zero boundary lemma before the finite-presentation definition, so patch addition does not hide a double-counting assumption.
- The regular-level seam is decomposed into a local parametrization theorem with an explicit $\mathbb R^2$-to-kernel linear isomorphism and exact tangent agreement, followed by a compact finite-cover corollary.
- Graph and surface-of-revolution formulas are separate. The latter splits the general scalar-integral formula from the area corollary, so the angular Fubini step is auditable.
- Schwarz's lantern carries its explicit triangle-area and asymptotic proof in its counterexample; the false supremum statement is a short consequence rather than a second monolithic calculation.

Useful corollaries added by the corollary pass:

- `cor-regular-surface-reparametrization-has-constant-orientation-sign` records the connected-domain sign dichotomy needed by flux.
- `cor-compact-regular-level-surfaces-have-finite-patch-covers` converts the local regular-level theorem into the finite-cover form used by compact examples.
- `cor-surface-area-of-revolution-formula` specializes the scalar surface-integral theorem and isolates the angular Fubini calculation.

No further immediate consequence was added: a separate area-invariance corollary would merely restate the scalar theorem at the field $1$, and a separate orientation-reversal corollary would duplicate the two-case flux theorem. No pruning was performed and no split is proposed.

## New-id and reuse report

The exact collision pass enumerated every final manifest id and ran fixed-string `rg` searches over `items/` and `research/plan-spec.json` for both frontmatter and JSON id forms. It returned no match for all 34 ids. A separate semantic `rg` pass for cross products, regular surface patches, tangent-plane invariance, first fundamental forms, surface area densities, scalar surface integrals, flux reparametrization, Gabriel's horn, and Schwarz's lantern also returned no existing equivalent item.

The semantic pass did find and reuse the published Gram determinant, compact-Jordan change of variables, Jordan boundary and content-zero modification results, the integral logarithm, and the one-variable surface-area prerequisites. No immutable id is re-minted.

## Forward references and cross-batch dependencies

There are no forward references and no `proved_here: false` external fallbacks.

This batch has two load-bearing cross-batch dependencies, both on the A page `constant-rank-submersions-and-regular-level-sets` at order 288.00003, owned by frontier-17 batch 4:

- `cor-regular-level-set-local-graph-theorem` — required clause: `Near each point, a regular level set is a $C^k$ graph over $\ker Df(a)$ of dimension $m-n$.`
- `def-tangent-space-to-a-regular-level-set` — required clause: `For $a\in f^{-1}(c)$ regular, $T_a(f^{-1}(c)):=\ker Df(a)$.`

These ids and clauses are already present in batch 4's manifest and proof contracts. They are earlier in plan order and their planned Statement provenance is `literature-derived`. The whole-run `content-policy --manifest-only` check sees both manifests and reports no errors; the batch-10-only invocation reports exactly these two ids as missing because isolated mode cannot see another batch.

The batches for `the-divergence-theorem-and-classical-stokes` and `trigonometric-and-oscillatory-examples-in-several-variables` declare this page as a prerequisite. They should reuse the surface orientation, flux, graph, and revolution ids above rather than duplicate them.

## Web research ledger and source conventions

### Core treatments

1. Michael E. Taylor, *Introduction to Analysis in Several Variables*: https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf
   - Read §3.2 printed pp. 119–123 through the graph formula and Exercises 15–17 printed pp. 143–144.
   - Supports regular charts, tangent planes, coordinate transitions, the first fundamental form, Gram density, scalar surface integrals and invariance, graph area, the torus, and surface-of-revolution scalar integrals and area.
   - Convention: Taylor works with open coordinate charts and smooth surfaces. This scaffold restricts charts to compact Jordan parameter regions for Riemann integration and records seam or pole failures only on the content-zero boundary.
2. University of Toronto MAT237, §5.3: https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html
   - Read the headings from “Surface Area and Surface Integrals” through “An Invariance Property,” plus the selected sphere and graph flux problems named in coverage.
   - Independently supports the zero-content exceptional-set convention, scalar and vector surface integrals, normal orientation, piecewise surfaces, graph formulas, the signed cross-product transformation, sphere and cylinder calculations, and both reparametrization laws.
   - Convention: Toronto permits failure on an arbitrary zero-content parameter set; this scaffold narrows new regular patches to failures on the parameter boundary, which is mechanically known to have content zero.
3. Reyer Sjamaar, *Manifolds and Differential Forms*: https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf
   - Read §8.1 printed pp. 101–104, Definition 8.1 through Corollary 8.6.
   - Independently supports nonnegative lower-dimensional volume as $\sqrt{\det(A^{\mathsf T}A)}$, including the dependent and orthogonal cases.
   - Convention: Sjamaar treats arbitrary $n$-volume in $\mathbb R^N$; this page uses only the two-dimensional tangent parallelogram in $\mathbb R^3$.

### Exact example sources

4. APEX Calculus II, archived exact text: https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf
   - Read §7.4, Example 216.
   - Supports the finite-volume and infinite-lateral-area conclusions for Gabriel's horn. The finite-volume half is assigned to `volumes-of-elementary-solids-and-solids-of-revolution` at order 288.00009; this pair proves the distinct surface-area half from compact truncations.
5. Santiago Cañez, Northwestern Math 320-3 notes: https://www.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-3.pdf
   - Read the cone example and the following “Smooth surfaces and normal vectors” subsection.
   - Supports the cone graph's failure to be $C^1$, the polar cone parametrization, and the normal-vector discussion.
   - Source defect/convention disagreement: the notes say the polar parametrization makes the whole cone a smooth surface, but its cross product vanishes at the apex. This scaffold does not adopt that claim; it treats the apex only as a permitted parameter-boundary exception for integration.
6. Hans Havlicek, TU Wien, “Schwarz Lanterns”: https://www.geometrie.tuwien.ac.at/vis/vis070.html
   - Read the construction and limiting-area paragraph.
   - Supports the staggered-ring triangulation and the fact that mesh refinement can yield cylinder area or divergence, including the cubic ring-count route.

The coverage file enumerates every heading and named result in these cited ranges with a disposition. Taylor Exercise 16's torus coordinate-square moments are deferred to `owner-decision`: they repeat one retained parametrization without adding a new theorem or boundary case. Abstract manifold integration is out of scope for this Euclidean pair and is not smuggled into a remark.

### Fetch verification record

The required command was run during scaffolding and again in the source-scouting round:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-10.coverage.json --stamp
```

The current coverage artifact carries genuine full-body stamps for Taylor, Toronto, Sjamaar, APEX, and Northwestern. Check mode therefore isolates one unstamped record: Hans Havlicek's TU Wien Schwarz-lantern page at `https://www.geometrie.tuwien.ac.at/vis/vis070.html`.

The source-scout web reader opened that exact URL again on 2026-08-21 as a live `text/html` document containing the complete page. Its `Students' Work: Schwarz Lanterns` paragraph contains both harvested facts: the construction from $k$ rings with $2n$ congruent isosceles triangles per ring, and limiting areas ranging from the cylinder area to infinity, with $k=n$ and $k=n^3$ as the displayed routes. The run's liveness ledger independently records HTTP 200 and the same final URL. Thus this is not a dead link, partial capture, sign-in redirect, bot wall, or source-content mismatch.

Same-source scouting found the TU Wien sibling pages `vis069.html`, `vis101.html`, and `vis102.html`; the web reader opened `vis102.html` in full. They repeat the same construction and limiting-area paragraph and differ only in the pictured parameter choice, but they are served from the same hostname and therefore cannot bypass a hostname-resolution failure. Exact-title, filename, author-page, host-mirror, and archive searches found no preferable same-text copy on another live host and no complete archive replay URL that this session could verify. A different scholarly source is available if a network-enabled checker later establishes a source-specific body-length failure: Leo Brewin, *Curvature corrected estimates for geodesic arc-length*, arXiv:1512.03461, §3.2, gives the Schwarz-lantern construction and full area computation. That would be a re-harvest, so it is not substituted while the cited TU Wien source is live and complete.

Stamp mode still fails before receiving an HTTP response: the local Node transport returns `EAI_AGAIN` for the TU Wien URL. Direct control fetches to the already-stamped Cornell and Wayback hosts fail at DNS in the same way, and the session environment explicitly carries `CODEX_SANDBOX_NETWORK_DISABLED`. Because the failure is sandbox-wide outbound DNS rather than source-specific, changing among the verified same-source URLs cannot cure it. The coverage URL remains unchanged under recover-before-replace, no `original_url` is warranted, and no `fetch_verified` field was fabricated. Exact next action: rerun the same stamp command in the engine's escalation-free network-capable stage; if that run reaches the body and reports `fetch-check-not-full-text`, re-harvest Brewin §3.2 rather than retaining TU Wien's contents rows under a different source.

## Planned component provenance and Step-5 source rationale

No theorem, proposition, definition, lemma, false statement, or mathematical remark has an `ai-generated` Statement. Two checkable companion constructions are generated and non-load-bearing; they require `generation` frontmatter and the truth checks recorded below. All source-backed items must cite the exact relevant URLs above in `sources.references`.

### A page

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-cross-product-in-r3` | literature-derived | not-applicable | Standard right-handed coordinate definition in Taylor, Toronto, and Sjamaar; cite Taylor and Toronto. |
| `lem-cross-product-is-bilinear-alternating-and-orthogonal` | literature-derived | ai-altered | Toronto's normal-vector discussion and Taylor's cross-product surface formula; coordinate proof adapted to zero-based library coordinates; cite both. |
| `thm-cross-product-norm-is-the-two-vector-gram-determinant` | literature-derived | ai-altered | Taylor formulas (3.2.19)–(3.2.20) and Sjamaar Theorem 8.4; cite Taylor and Sjamaar. |
| `def-admissible-regular-parametrized-surface-patch` | ai-altered | not-applicable | Taylor's chart convention combined with Toronto's zero-content exception and the library's compact Jordan integral; cite Taylor and Toronto. |
| `def-tangent-plane-of-a-regular-surface-patch` | literature-derived | not-applicable | Taylor formula (3.2.1) and Toronto's tangent-span discussion; cite both. |
| `def-surface-reparametrization-and-orientation` | literature-derived | not-applicable | Taylor coordinate transitions and Toronto's “An Invariance Property”; cite both. |
| `prop-tangent-plane-is-invariant-under-regular-reparametrization` | literature-derived | ai-altered | Taylor explicitly proves independence of the range of the chart derivative under coordinate change; cite Taylor. |
| `cor-regular-surface-reparametrization-has-constant-orientation-sign` | literature-derived | ai-altered | Standard sign dichotomy explicit in Toronto and proved from the published Jacobian-sign theorem; cite Toronto. |
| `def-first-fundamental-form-and-surface-area-density` | literature-derived | not-applicable | Taylor formulas (3.2.7)–(3.2.13) and Sjamaar §8.1; cite both. |
| `thm-surface-area-density-is-cross-product-norm` | literature-derived | ai-altered | Taylor formulas (3.2.18)–(3.2.20) and Sjamaar Theorem 8.4; cite both. |
| `lem-oriented-area-vector-under-surface-reparametrization` | literature-derived | ai-altered | Toronto's displayed determinant transformation; local chain-rule proof supplied; cite Toronto. |
| `def-surface-area-and-scalar-surface-integral-of-a-patch` | literature-derived | not-applicable | Taylor (3.2.12) and Toronto's opening definition; cite both. |
| `thm-surface-area-and-scalar-integrals-are-reparametrization-invariant` | literature-derived | ai-altered | Taylor's chart-independence calculation and Toronto's invariance section; cite both. |
| `def-oriented-unit-normal-and-flux-of-a-surface-patch` | literature-derived | not-applicable | Toronto's unit-normal and vector surface-integral definitions; cite Toronto. |
| `thm-flux-under-surface-reparametrization` | literature-derived | ai-altered | Toronto's signed invariance formula; proof separated by determinant sign; cite Toronto. |
| `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals` | literature-derived | ai-altered | Toronto explicitly permits zero-content exceptions; proof uses the published content-zero modification lemma; cite Toronto. |
| `def-finitely-patched-regular-surface-and-integrals` | ai-altered | not-applicable | Toronto's piecewise-smooth cylinder convention made exact by two-sided zero-content overlap preimages; cite Toronto. |
| `thm-regular-level-surfaces-have-local-regular-parametrizations` | ai-altered | ai-altered | Taylor's local-chart route and batch 4's source-backed regular-level graph theorem, joined with an explicit tangent dictionary; cite Taylor and the sources carried by the two batch-4 items. |
| `cor-compact-regular-level-surfaces-have-finite-patch-covers` | ai-altered | ai-generated | Standard compact-atlas consequence of the local chart theorem, specialized to compact Euclidean levels; cite Taylor. |
| `thm-surface-integrals-over-c-one-graphs` | literature-derived | ai-altered | Taylor (3.2.21)–(3.2.23) and Toronto “Special Cases”; cite both. |
| `thm-scalar-surface-integrals-on-a-surface-of-revolution` | literature-derived | ai-altered | Taylor Exercise 17; boundary-degeneracy convention made explicit; cite Taylor. |
| `cor-surface-area-of-revolution-formula` | literature-derived | ai-altered | Taylor Exercise 17 and APEX's one-variable formula; cite Taylor and APEX. |

### Companion page

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `ex-sphere-and-hemisphere-surface-integrals` | literature-derived | ai-altered | Toronto Example 1 and Basic Problem 3; radius-generalized and recomputed; cite Toronto. |
| `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` | literature-derived | ai-altered | Toronto Example 2; generalized radius and height and includes area; cite Toronto. |
| `ex-torus-surface-area` | literature-derived | ai-altered | Taylor Exercise 15; cite Taylor. |
| `ex-downward-flux-on-the-graph-z-equals-xy` | literature-derived | ai-altered | Exact Toronto Basic Problem 3 construction; cite Toronto. |
| `ex-lateral-area-of-a-right-circular-cone` | literature-derived | ai-altered | Northwestern cone example and Toronto's cone exercise, evaluated through the retained revolution formula; cite Northwestern and Toronto. |
| `cex-degenerate-surface-parametrization-collapses-to-a-curve` | ai-generated | ai-generated | Explicit locally formulated witness; set `generation.role: counterexample`; it is non-load-bearing. |
| `ex-orientation-reversal-preserves-area-and-negates-flux` | ai-generated | ai-generated | Explicit coordinate-swap computation of the source-backed invariance laws; set `generation.role: example`; it is non-load-bearing. |
| `ex-gabriels-horn-has-unbounded-truncated-lateral-area` | literature-derived | ai-altered | APEX Example 216; proof recast through the published integral logarithm; cite APEX. |
| `cex-schwarz-lantern-polyhedral-areas-diverge` | literature-derived | ai-altered | TU Wien construction and limiting behavior; exact area and asymptotics supplied locally; cite TU Wien. |
| `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` | literature-derived | ai-altered | Classical conclusion of the Schwarz lantern source; cite TU Wien. |
| `fs-continuity-alone-suffices-for-the-regular-surface-area-formula` | literature-derived | ai-altered | Northwestern's exact non-$C^1$ cone graph, stated against the Taylor/Toronto regularity convention; cite Northwestern and Toronto. |
| `fs-flux-is-independent-of-the-parametrization` | literature-derived | ai-altered | Toronto explicitly gives the orientation-reversal sign; cite Toronto. |

### Generated-construction truth-risk obligations

- `cex-degenerate-surface-parametrization-collapses-to-a-curve`: set `generation.role: counterexample`. Step 5 must recompute both partial derivatives, the cross product, the Gram determinant, and the exact image. Search for a hidden injectivity or boundary qualification; none can rescue interior rank zero.
- `ex-orientation-reversal-preserves-area-and-negates-flux`: set `generation.role: example`. Step 5 must recompute the coordinate-swap determinant, both area vectors, and both fluxes, and confirm that neither parametrization is degenerate. It may not become a dependency target.

No other Statement or construction is generated. There is no generated theorem, definition, lemma, proposition, false statement, or remark.

## Exact Step-5 clauses bound by proof contracts

The following clauses must occur verbatim in the authored source section named by the proof contract:

- `def-cross-product-in-r3`: `For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, define $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$.`
- `lem-cross-product-is-bilinear-alternating-and-orthogonal`: `For all $u,v,w\in\mathbb R^3$, the cross product is bilinear and alternating, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to both $u$ and $v$.`
- `thm-cross-product-norm-is-the-two-vector-gram-determinant`: `For $u,v\in\mathbb R^3$, $\|u\times v\|_2^2=\det G(u,v)$, and this value is positive exactly when $u$ and $v$ are linearly independent.`
- `def-admissible-regular-parametrized-surface-patch`: `A regular parametrized surface patch is the image of a $C^1$ map from a compact Jordan parameter region that is injective and has nonzero parameter cross product on the region's interior; seam identifications and rank failures may occur only on its boundary.`
- `def-tangent-plane-of-a-regular-surface-patch`: `At an interior parameter point, the tangent plane is $\operatorname{span}\{\varphi_u,\varphi_v\}$.`
- `def-surface-reparametrization-and-orientation`: `A regular reparametrization from $\psi$ to $\varphi$ is a $C^1$ diffeomorphism $h$ between neighbourhoods of their compact Jordan parameter regions with $\psi=\varphi\circ h$.` and `A regular surface reparametrization is orientation-preserving when its parameter Jacobian determinant is positive and orientation-reversing when it is negative.`
- `prop-tangent-plane-is-invariant-under-regular-reparametrization`: `Regular reparametrizations preserve the tangent plane at corresponding interior parameter points.`
- `cor-regular-surface-reparametrization-has-constant-orientation-sign`: `Every regular reparametrization of a connected parameter region is either orientation-preserving everywhere or orientation-reversing everywhere.`
- `def-first-fundamental-form-and-surface-area-density`: `The surface area density is $J_\varphi=\sqrt{\det G_\varphi}$, where $G_\varphi$ is the Gram matrix of $\varphi_u$ and $\varphi_v$.`
- `thm-surface-area-density-is-cross-product-norm`: `For every parameter point, $J_\varphi=\|\varphi_u\times\varphi_v\|_2$.`
- `lem-oriented-area-vector-under-surface-reparametrization`: `If $\psi=\varphi\circ h$, then $\psi_s\times\psi_t=(\det Dh)(\varphi_u\times\varphi_v)\circ h$.` and `If $\psi=\varphi\circ h$, then $J_\psi=(J_\varphi\circ h)|\det Dh|$.`
- `def-surface-area-and-scalar-surface-integral-of-a-patch`: `For a continuous scalar field $q$ on the patch image, $\int_Sq\,dS:=\int_D(q\circ\varphi)J_\varphi$, and $\operatorname{Area}(S):=\int_DJ_\varphi$.`
- `thm-surface-area-and-scalar-integrals-are-reparametrization-invariant`: `Surface area and scalar surface integrals are unchanged by every regular reparametrization, regardless of orientation sign.`
- `def-oriented-unit-normal-and-flux-of-a-surface-patch`: `For a continuous vector field $F$, the flux in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$.`
- `thm-flux-under-surface-reparametrization`: `An orientation-preserving reparametrization preserves flux and an orientation-reversing reparametrization negates it.`
- `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`: `Changing a bounded scalar or flux parameter integrand only on the content-zero boundary of a compact Jordan parameter region preserves integrability and its integral.`
- `def-finitely-patched-regular-surface-and-integrals`: `For a compatible finite patch presentation, area, scalar surface integrals, and oriented flux are the sums of the corresponding patch values; pairwise overlap preimages have content zero.`
- `thm-regular-level-surfaces-have-local-regular-parametrizations`: `Every point of a regular level surface in $\mathbb R^3$ lies in the relative interior of a regular surface patch, and the patch tangent plane is the level-set tangent space.`
- `thm-surface-integrals-over-c-one-graphs`: `For the graph of $g$ over $D$, the downward flux is the negative of $\int_DF(x,y,g(x,y))\cdot(-g_x,-g_y,1)$.`
- `thm-scalar-surface-integrals-on-a-surface-of-revolution`: `For $\varphi(s,t)=(s,r(s)\cos t,r(s)\sin t)$, the scalar surface integral is $\int_0^{2\pi}\int_a^b q(\varphi(s,t))r(s)\sqrt{1+r'(s)^2}\,ds\,dt$.`
- `cor-surface-area-of-revolution-formula`: `The surface obtained by rotating $r$ about the axis has area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$.`
- `cex-schwarz-lantern-polyhedral-areas-diverge`: `Inscribed triangulated surfaces with mesh tending to zero need not have areas tending to the surface-integral area of the cylinder; their areas can diverge to infinity.`

The two batch-4 clauses in the cross-batch section are also exact authoring obligations. The fragment clauses above must sit in complete grammatical Definitions or Statements; they are not licences to author fragments.

## Proof-obligation and boundary summary

The version-1 proof-contract artifact covers all 26 proof-bearing items. Each contract maps every planned numbered step exactly once, includes all direct fact citations, disposes of empty, zero, one, degenerate, endpoint, nonempty-choice, iff-forward, and iff-reverse cases, and records an empty `finite_smoke` array because no registered bounded model matches these analytic claims.

The highest-risk obligations are:

- prove the signed area-vector transformation before either invariance theorem, without replacing $\det Dh$ by its absolute value until norms are taken;
- state the reparametrization as a neighbourhood diffeomorphism so the published compact-Jordan change-of-variables theorem has its exact hypotheses;
- require a nonempty connected parameter interior so the orientation sign is constant and regularity is not vacuous;
- keep all seam, pole, and apex failures on the content-zero parameter boundary, never at an interior point;
- require pairwise overlap preimages to have content zero in both patches before adding finite-patch integrals;
- use the batch-4 graph theorem only at a regular scalar level, identify its two-dimensional kernel with $\mathbb R^2$ through the published equal-dimension isomorphism, and prove tangent-plane agreement with the kernel definition;
- keep the surface-of-revolution radius positive on the open interval and treat endpoint zeros separately;
- treat Gabriel's horn only through compact truncations;
- index Schwarz lanterns by positive polygon and ring counts, verify mesh convergence independently of area divergence, and derive the $m=n^3$ asymptotics from the sine-over-angle limit;
- check both orientation cases and both directions of the two integrability equivalences in the boundary and change-of-variables citations.

No planned proof relies on an unstated manifold, Hausdorff-measure, differential-form, or divergence-theorem result.

## Findings for Step-3 Alpha

1. Approve Amendment RC8-1. The cross product is absent from the published corpus and the design's all-points rank condition contradicts its standard seam, pole, and apex examples. Declining leaves the page undefined and makes the cone computation violate its own definition.
2. Approve Amendment RC8-2. Signed reparametrization and zero-overlap patch addition need the decomposed determinant and content-zero lemmas. Declining leaves flux orientation and finite-patch well-definedness unproved.
3. Approve Amendment RC8-4's replacement of the continuity false statement. “Has an area” is ambiguous across generalized theories; the replacement is a precise, source-backed failure of the regular-patch formula. Declining publishes an overbroad title with no exact refutation target.
4. Approve Amendment RC8-3. The graph, revolution, and horn statements need explicit compactness, positivity, endpoint, and truncation hypotheses. Declining leaves the displayed formula overstrong at an interior radius zero and treats a noncompact horn as one compact patch.
5. Retain the two batch-4 dependencies exactly as recorded. Declining either edge forces this batch to duplicate the regular-level graph theorem or silently identify two tangent notions without proof.
6. Let the stage-1 drift unit adjudicate the direct `arc-length-and-rectifiable-curves` requires edge. This batch follows the spec; changing it independently risks divergent manifests even though the transitive mathematics is already available.
7. Retry source fetch stamping in the engine's network-capable stage. Five source records have genuine full-body stamps; only the live TU Wien Schwarz-lantern page remains unstamped because this sandbox returns `EAI_AGAIN` before HTTP. Declining the retry leaves the mandatory fetch gate red.

These are independent recommendations ordered by mathematical correctness, dependency closure, statement precision, plan consistency, and gate mechanics. No finding proposes a page split, forward reference, external fallback, or published-item repair.

## Dependency closure and confidence statement

Every proposed published dependency was opened from disk and its actual Definition or Statement, status, domain, hypotheses, conclusion, and Statement provenance were checked. Every published dependency has `status: published`, eligible `literature-derived` or `ai-altered` Statement provenance, and a home on a smaller-order page. The only non-disk dependencies are the two explicitly planned batch-4 items at order 288.00003. There is no legacy-unclassified dependency, no AI-generated dependency target, no unresolved id, and no load-bearing external result.

The exact order audit found no planned-later or forward dependency. The logarithm page at order 178.1 is used for the horn lower bound; `lem-riemann-integral-unchanged-by-content-zero-modification` is published at order 288.00011; the batch-4 targets are at order 288.00003; all are smaller than 288.00015. Every internal dependency is earlier on its own page or, for companion items, on the A page or earlier on the B page.

No published dependency was found to contain an unambiguous load-bearing falsehood. The Northwestern source itself contains an overstrong whole-cone smoothness sentence, but it is an external convention defect, not a library dependency; the coverage row explicitly declines it and the scaffold does not repeat it.

Mathematical confidence is high in the cross-product identities, tangent-plane and determinant-sign transformations, compact-Jordan substitutions, graph and revolution formulas, the sphere/cylinder/torus/cone computations, the logarithmic horn lower bound, and the exact Schwarz-lantern asymptotics. I did not run Step-5 precheck or a proof-contract strict pass against authored items, because the 26 proof-bearing item files do not yet exist; the strict tool therefore reports the expected pre-authoring `item-missing` class and nothing was represented as a pass. The current unspliced `validate-plan` and `depsource` commands were run and passed the existing spec, but this page still has an empty `items` array there, so those results do not classify this batch and are not represented as authoritative Step-4 results. I did not run a Step-6 independent reading, either Step-7 judge, or any publication action.

## Mechanical checks at close of Step 2

- Both manifest JSON pages parse as 22 A items and 12 B items.
- The exact-id `rg` collision scan reports all 34 ids new.
- Whole-run `content-policy --manifest-only` reports 437 scoped items, 0 errors, and 0 warnings. Batch-only mode reports the two declared batch-4 edges because it cannot see that manifest.
- The proof-contract JSON parses as 26 scoped proof-bearing ids and 26 contracts. A local structural audit finds all eight boundary rows in every contract, no duplicate input-map step, and 34 exact published-source citation quotes with no substring miss. Same-batch and cross-batch clauses are bound above for Step 5.
- `coverage-checklist` reports 1 page, 44 harvested results, 0 errors, and 0 warnings after the source-kind and Gabriel-volume dispositions were corrected.
- `source-fetch-check --stamp` reports 5/6 sources stamped; the sole TU Wien request fails before HTTP with sandbox `EAI_AGAIN`. The same-source search and exact retry are recorded above.
- The current unspliced `validate-plan research/plan-spec.json` reports the existing plan acyclic and consistent, and `depsource` reports 0 unresolved among the already listed pages. Neither command sees the 34 batch-10 ids before Step 4.
- `prosecheck --warnings` reports 0 errors; its count warnings are all in this required scaffold report, and it reports no positional contradiction. The two-paragraph A-page summary contains no count, rank, survey, or reading-position claim.
- No applied canonical embedding notation occurs in any owned artifact.

## Continuity checkpoint

- Current substage: source-scouting repair complete; the mandatory TU Wien full-body source stamp remains mechanically blocked.
- Owned artifacts: `research/frontier-17-batch-10.pages.json`, `.coverage.json`, `.proof-contracts.json`, and this `.notes.md`.
- Completed checks: normative reading, design/spec comparison, full source harvest, exact-id and semantic collision searches, all published dependency Statements, cross-batch clauses, proof decomposition, corollary pass, boundary map, JSON parsing, coverage checklist, whole-run manifest policy, published-quote substring audit, dependency-order audit, prose check, notation scan, and whitespace check.
- Open constraint: the live, complete TU Wien source remains unstamped because local Node DNS returns `EAI_AGAIN`; do not fabricate its bytes or hash.
- Exact next action: in the engine's network-capable stage, run `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-10.coverage.json --stamp`; if the reached body is mechanically too short, replace the source only after re-harvesting Brewin §3.2.
