# Frontier 17, batch 5 — Beta-5 scaffold notes

## Continuity checkpoint

- Current substage: Step 2, after source harvest, first item/dependency design, collision scan, and manifest-only policy validation; proof-contract construction and the complete Step-3 report remain.
- Owned artifacts: `research/frontier-17-batch-5.pages.json`, `research/frontier-17-batch-5.notes.md`, `research/frontier-17-batch-5.proof-contracts.json`, and the separately mandated gated harvest `research/frontier-17-batch-5.coverage.json`.
- Completed checks: `CLAUDE.md`, `SCHEMA.md`, `README.md`, `QUALITY-CONTROLS.md`, the house exemplar, frontier-16 batch-1 pages and notes, both dispatched design sections, current plan entries, the relevant complex-Gamma seam, source bodies, exact-id and semantic collision searches, every currently declared published dependency's Definition/Statement/Example and component provenance, internal dependency order, and `content-policy --manifest-only`.
- Current manifest: 15/9 items for the volume pair and 25/7 for the real Gamma/Beta pair. Every internal edge is earlier on the same page or on a smaller-order page. All 88 distinct external dependency files exist, are `status: published`, and have eligible `literature-derived` or `ai-altered` Statement provenance; none is legacy-unclassified or `ai-generated`.
- Open mathematical/dependency constraints: record the three missing declared prerequisite edges (`improper-integrals` for Gabriel's horn; `pi-the-equivalent-characterizations` and the volume page for Gamma), finish exact same-batch source clauses, write all 51 proof-bearing contracts with eight specific boundary dispositions, and finish the provenance/richness/findings ledgers.
- Source gate: `coverage-checklist` reports 2 pages, 82 harvested headings, 0 errors, and 0 warnings. `source-fetch-check --stamp` attempted all seven entries and returned `EAI_AGAIN` for every host, so 0/7 are stamped. The browser channel fetched the complete bodies. No stamp was invented. Exact retry: `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-5.coverage.json --stamp`.
- Exact next action: complete this notes artifact's amendment, provenance, proof-obligation, dependency, and Step-3 report sections, then write the version-1 proof-contract file and run the scoped gates.

## Scope and artifact boundary

This batch owns `volumes-of-elementary-solids-and-solids-of-revolution` at order 288.00009 and its companion at 288.00010, followed by `the-real-gamma-and-beta-functions` at order 288.00013 and its companion at 288.00014. The A pages have 15 and 25 items, below both the current 60-item hard ceiling and the stale 100-item review ceiling still printed in `SCHEMA.md`; no split is proposed.

The dispatch's three-file write list omits `research/frontier-17-batch-5.coverage.json`, while the same dispatch and `QUALITY-CONTROLS.md` separately require and gate that exact file. As in the most recently completed batch-1 run, the explicit coverage mandate is treated as the controlling authorization. No other file is written.

The design and plan spec agree on both page orders and on the dispatched `requires` arrays. The three dependency edges found below are therefore mathematical omissions shared by design and spec, not design/spec drift that this Beta can settle silently.

## Source-fetch record

The canonical-harvest sources were read through the web channel at their recorded URLs. Taylor, Angenent, Axler, APEX Calculus II, Toronto MAT237, and the recovered TIFR monograph all exposed their mathematical bodies and exact locators. The old TIFR path returned 404; its current same-source path `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf` is recorded in `url`, with the old path retained in `original_url`.

The required local command was run after the coverage file was complete. Every request failed before HTTP with the same sandbox DNS error `EAI_AGAIN`, including hosts that the browser channel had just fetched. This is a transport-wide local failure, not evidence that seven unrelated sources moved simultaneously. Alternate URLs were considered: TIFR was already recovered to its current official path; the other entries are their author, university, or official publisher locations, and replacing them with different editions would require a new harvest without addressing the sandbox's DNS failure. The engine must retry the exact command in the checkpoint. No `fetch_verified` object is present.

## Web research ledger and conventions

### Volume pair

1. Michael E. Taylor, *Introduction to Analysis in Several Variables*, §3.1, Proposition 3.1.7 through Theorem 3.1.9: `https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf`.
   - Supports the compact-domain graph-null theorem and the arbitrary-dimensional region-between-graphs Fubini theorem.
   - Taylor says *nil* and *contented*; the library says *content zero* and *Jordan measurable*.
   - Taylor states strict graph separation in Theorem 3.1.9. The scaffold permits equality by proving the complete boundary decomposition, so coincident sections are handled rather than silently excluded.
2. Sigurd Angenent, Math 221 lecture notes, Chapter 8 §§3–5: `https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf`.
   - Supports slicing, Cavalieri, disc and washer computations, the exact parabolic-cap example, and cylindrical shells.
   - Its treatment begins geometrically from cross-sectional volume. The scaffold supplies the Jordan-measurability and Fubini hypotheses that make those formulas theorems in this library.
3. Sheldon Axler, *Measure, Integration & Real Analysis*, §5C: `https://measure.axler.net/MIRA.pdf`.
   - Supports ball dilation, the dimension recurrence, the first values, the zero limit, the maximizing dimension, and the Gamma closed form.
   - Axler uses Lebesgue measure and open balls. This library uses Jordan content of closed balls; the sphere boundary has content zero, and the scaffold proves measurability before computing volume.
4. *APEX Calculus II*, §7.4, Example 216: `https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf`.
   - Supports Gabriel's horn: finite improper volume and infinite surface area.
   - Only the volume half is built here. The surface half is assigned to `regular-surfaces-and-surface-integrals`, where the required surface-of-revolution formula is planned.

### Real Gamma/Beta pair

1. University of Toronto MAT237, *The Gamma Function and the Beta Function*, complete handout: `https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf`.
   - Supports convergence, the functional equation, factorial values, smoothness, endpoint behavior, strict/log convexity, Gautschi, Beta convergence and symmetry, the Beta--Gamma identity, Wallis connections, Stirling's constant, and ball volumes.
   - The handout presents several items as exercises. The scaffold treats their displayed claims as source-backed Statements and supplies complete local proofs.
2. K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lecture 6 §1 and Lecture 7 §§4,6: `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`.
   - Independently supports the Euler integral and convergence split, local uniformity, the functional equation, factorial values, Stirling up to and including its constant, the Beta--Gamma integral, the half-value, and the full Bohr--Mollerup factorial squeeze.
   - Its complex holomorphy, reflection formula, and complex Stirling expansion are deferred to `the-gamma-function` under the settled real/complex seam.
3. Sheldon Axler, *Measure, Integration & Real Analysis*, §5C: same URL above.
   - Independently supports the integer-dimensional ball formula, limit to zero, and maximizing dimension.

The real page defines log-convexity only for positive functions. Every positive log-convex function is convex because the exponential is increasing and convex; therefore the design's requested “log-convex function that is not convex” cannot exist. The companion instead gives the valid converse failure: a positive convex function that is not log-convex.

## Applyable amendments to `research/plan-realanalysis-completion-track.md`

### Amendment RC5-1 — reuse the published Euclidean-ball definition

Recommendation: approve.

Exact old text in RC-5 `**DEFS.**`:

```text
**DEFS.** The solid between two continuous graphs over a compact Jordan base in
$\mathbb{R}^m$; the solid of revolution of a nonnegative continuous $f$ about a
coordinate axis; the closed Euclidean ball as a set of $\mathbb{R}^3$ and of
$\mathbb{R}^n$.
```

Exact new text:

```text
**DEFS.** The solid between two continuous graphs over a compact Jordan base in
$\mathbb{R}^m$ and the solid of revolution of a nonnegative continuous function
about a coordinate axis. Reuse `def-euclidean-spheres-and-closed-balls` for
closed balls in $\mathbb R^3$ and $\mathbb R^n$; do not mint a second ball
definition. The volume theorems explicitly include the radius-zero set.
```

If declined, Step 5 would duplicate an immutable published definition or silently use two ball conventions.

### Amendment RC5-2 — place the Gamma closed form only where the order permits it

Recommendation: approve.

Exact old text in RC-5 `**Consequences:**`:

```text
the $n$-ball volume recursion $V_n(r) = V_{n-1}\!\int \dots$ with the closed form via RC-7's
$\Gamma$, delivering the volume RA-38 specified and never built.
```

Exact new text:

```text
the $n$-ball volume recursion by one-coordinate slicing. RC-7
`the-real-gamma-and-beta-functions`, at its own later order, combines this
recursion with the Beta--Gamma identity to prove the closed form. RC-5 may point
to that later result for orientation but may not use it as a proof input.
```

If declined, the volume page at 288.00009 would carry a load-bearing dependency on the Gamma page at 288.00013.

### Amendment RC5-3 — correct Gabriel's horn and the surface-area false statement

Recommendation: approve.

Exact old B-page excerpt:

```text
**Gabriel's horn**, finite volume with infinite lateral surface (the surface half deferred to RC-8's page and
cross-linked)
```

Exact new text:

```text
**Gabriel's horn**, with the truncated disc volumes tending to $\pi$. Its
infinite lateral surface is deferred to `regular-surfaces-and-surface-integrals`,
where the surface-of-revolution area formula is developed; this volume item does
not cite an unbuilt surface theorem as a proof input.
```

Exact old ledger row:

```text
- `fs-a-solid-of-revolution-of-a-bounded-region-has-finite-surface-area` — FALSE; Gabriel's horn.
```

Exact new row:

```text
- The proposed bounded-region false statement is withdrawn: Gabriel's horn is
  generated by the unbounded region $\{(x,y):x\ge1,0\le y\le1/x\}$ and does not
  refute it. At `regular-surfaces-and-surface-integrals`, state the correct
  false claim “finite volume implies finite lateral surface area” and refute it
  there after the surface-area formula exists.
```

If declined, the library would publish a witness that does not satisfy the false statement's boundedness hypothesis.

### Amendment RC5-4 — replace the inaccurate graph-volume false statement

Recommendation: approve.

Exact old ledger row:

```text
- `fs-the-volume-under-a-graph-is-the-iterated-integral-for-every-integrable-g` — FALSE without a Jordan base or without continuity; the published `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` is cited.
```

Exact new row:

```text
- `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`
  — FALSE; reproduce the source-backed rational/irrational section witness from
  the published counterexample without depending on that B-page item. Do not
  claim continuity is necessary for every subgraph formula: bounded
  Riemann-integrable nonnegative functions on a Jordan rectangle can have
  Jordan-measurable subgraphs even when discontinuous.
```

If declined, the page would call a broader statement false for reasons that do not refute it.

### Amendment RC5-5 — declare the improper-integral prerequisite used by Gabriel's horn

Recommendation: approve at the edge-adjudication stage.

Exact old text:

```text
`requires`: RC-4, `the-topology-of-euclidean-space`.
```

Exact new text:

```text
`requires`: RC-4, `the-topology-of-euclidean-space`, `improper-integrals`.
```

The pages manifest retains the current spec value; this note does not pre-empt the engine. If the edge is declined, `ex-gabriels-horn-has-finite-volume` has no declared route to the definition and $p$-test it actually uses.

### Amendment RC7-1 — declare the two earlier pages used by the Gamma development

Recommendation: approve at the edge-adjudication stage.

Exact old text:

```text
`requires`: RC-6, `the-logarithm-and-general-powers`, `convexity`.
```

Exact new text:

```text
`requires`: RC-6, `the-logarithm-and-general-powers`, `convexity`,
`pi-the-equivalent-characterizations`, and
`volumes-of-elementary-solids-and-solids-of-revolution`.
```

The Wallis proof of the half-value and the Stirling constant use the published Wallis consequences, while the ball closed form consumes RC-5's recursion. If declined, those dependencies remain mathematically earlier but undeclared by the page.

### Amendment RC7-2 — correct the impossible log-convex example

Recommendation: approve.

Exact old B-page excerpt:

```text
a log-convex function that is not convex;
```

Exact new text:

```text
a positive convex function that is not log-convex, for example the identity on
$(0,\infty)$; log-convex positive functions are automatically convex.
```

If declined, Step 5 would be asked to construct a mathematical impossibility.

## Exact A-page summaries for Step 5

### `volumes-of-elementary-solids-and-solids-of-revolution`

Jordan content and the multidimensional Riemann integral assign size and integrals to compact Jordan sets, while the boundary criterion reduces measurability to content-zero boundaries. Fubini and Cavalieri evaluate Jordan sets from their sections. The published plane-figure development supplies the Jordan content $\pi r^2$ of every closed disc, and Euclidean compactness controls closed balls and continuous graph functions.

A compact-domain graph-null theorem and a product-null lemma first control the boundary of a solid between continuous graphs. The resulting slicing theorem gives its Jordan measurability and iterated-integral formula, yielding volume under a graph. Disc, washer, and cylindrical-shell formulas then give cylinders, cones, and the three-ball; Cavalieri supplies an independent ball proof. Induction on dimension makes every closed Euclidean ball Jordan measurable and produces the slicing recursion later used by the real Gamma function.

### `the-real-gamma-and-beta-functions`

Improper integration supplies convergence, comparison, exhaustion, and dominated parameter differentiation, while logarithms and real powers control endpoint singularities and parameter derivatives. One-variable convexity supplies secant-slope inequalities, and the Gaussian integral and Wallis product give independent real routes to the constant $\sqrt\pi$. The earlier ball-volume recursion provides the geometric input for the dimension formula.

Euler's Gamma and Beta integrals are first shown to converge on their exact positive domains. The Gamma recurrence gives factorial values, dominated differentiation gives smoothness, and strict log-convexity leads through a factorial squeeze to Bohr--Mollerup uniqueness and Gautschi's inequality. A first-quadrant change of variables proves the Beta--Gamma identity. Gaussian and Wallis arguments separately evaluate $\Gamma(1/2)$, Wallis fixes the constant in Stirling's formula, and the Beta identity closes the unit-ball volume formula, its radius scaling, limiting behavior, and maximizing dimension.

Both companion pages must have no authored summary body.

## Per-pair richness and proof decomposition

Both required passes were performed separately for both pairs.

### Volume pair

Long proofs decomposed:

- The arbitrary-base slicing theorem is decomposed through `lem-product-of-content-zero-set-and-interval-has-content-zero`, `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`, and `lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero` before the main Fubini theorem.
- Solids of revolution are separated into disc, washer, and shell formulas; the shell proof receives its own annular Darboux-sum argument rather than being asserted from a picture.
- The three-ball formula has two genuinely different proofs: direct disc integration and Cavalieri comparison with a cylinder minus two cones. The authored items must cross-reference one another.
- The $n$-ball development proves measurability and the one-coordinate recursion by induction, leaving the Gamma closed form to the later pair.

Useful corollaries added:

- volume under a continuous graph over a Jordan base;
- the washer formula;
- cylinder and cone formulas;
- the direct three-ball volume formula.

The A page has 15 items. No pruning or split is proposed.

### Real Gamma/Beta pair

Long proofs decomposed:

- Gamma and Beta convergence are separate well-definedness theorems attached forward from their definitions.
- Smoothness is separated from log-convexity and from the endpoint/unique-minimum theorem.
- Bohr--Mollerup is decomposed through `lem-bohr-mollerup-factorial-squeeze`.
- The Beta--Gamma identity is preceded by convergence and the symmetry/trigonometric proposition.
- The half-value has independent Gaussian and Wallis proofs, the latter named by route and required to cross-reference the former.
- Stirling is decomposed into convergence up to a positive constant, determination of that constant from Wallis, and the final theorem.
- The ball closed form, radius scaling, zero limit, and maximizing-dimension results are separate consequences.

Useful corollaries added:

- positive-integer Gamma values;
- Gautschi's inequality;
- the elementary Beta recurrences;
- the Gaussian half-value;
- radius-$r$ ball volume;
- unit-ball volume tending to zero and attaining its unique maximum in dimension five.

The A page has 25 items. No pruning or split is proposed.

## Dependency closure and order findings

Every declared published dependency was opened from `items/`; all 88 distinct external targets are published and have eligible Statement provenance. The exact source section and domain/hypothesis direction were read. No load-bearing target is `ai-generated`, unclassified, or a B-page item. The initial B-page dependency on the published iterated-integral counterexample was removed: examples pages are leaves, so the new false statement reproduces the witness from A-page definitions and Fubini instead.

All same-batch dependencies are earlier on the same page or on a page of smaller order. There are no `planned-later` load-bearing dependencies and no external fallback. The Gamma page's use of the volume recursion is a cross-pair edge inside this batch, from 288.00013 to 288.00009. The only orientation toward later mathematics is Gabriel's horn's unproved surface-area half, which is deferred in coverage rather than used in `deps`.

Three prerequisite-ancestry exceptions remain intentionally visible pending Alpha/engine adjudication:

- `ex-gabriels-horn-has-finite-volume` uses `def-improper-integral-at-infinity` and `thm-improper-p-test-rational` from `improper-integrals`, which is earlier but absent from the volume page's declared ancestry.
- the Wallis half-value and Stirling-constant lemma use `cor-central-binomial-coefficient-asymptotic-from-wallis`, and the maximizing-dimension proof uses the Gregory--Leibniz remainder theorem, all on `pi-the-equivalent-characterizations`, earlier but absent from the Gamma page's declared ancestry;
- the unit-ball closed form and radius formula use `thm-volume-recursion-for-closed-euclidean-balls` from this batch's earlier volume page, which the Gamma page does not currently declare.

These are missing `requires` edges, not forward references. The manifest preserves the dispatched spec; Amendments RC5-5 and RC7-1 are the exact recommendations.

No published dependency contains an unambiguous load-bearing falsehood requiring the owner-delegated repair protocol. `thm-fubini-over-a-region-between-continuous-graphs` has a Fact that describes its graph-null dependency more generally than that dependency's actual rectangle-domain Statement, but its own proof uses only an interval, so the citation overstatement is nonfatal there and is not used to justify this batch's arbitrary compact-domain theorem.

## Component provenance plan

Every URL named here is present in the web ledger and is the URL Step 5 must place in `sources.references`. No theorem, proposition, definition, lemma, false statement, or mathematical remark has an `ai-generated` Statement. Generated constructions are confined to checkable examples and are never dependency targets.

### Volume A page

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| `def-solid-between-continuous-graphs-over-a-jordan-base` | literature-derived | not-applicable | Taylor Theorem 3.1.9, with equality and the library's compact Jordan vocabulary. |
| `def-solid-of-revolution-about-a-coordinate-axis` | literature-derived | not-applicable | Angenent §3.4, written as an actual Euclidean set. |
| `lem-product-of-content-zero-set-and-interval-has-content-zero` | ai-altered | ai-generated | Standard cover-product move extracted from Taylor's content arguments and adapted to the library's finite-cover definition. |
| `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero` | literature-derived | ai-altered | Taylor Proposition 3.1.7; proof recast in the library's cube-cover language. |
| `lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero` | ai-altered | ai-generated | Source proof decomposition of Taylor Theorem 3.1.9, with all three boundary pieces explicit. |
| `thm-solid-between-continuous-graphs-fubini-formula` | literature-derived | ai-altered | Taylor Theorem 3.1.9, extended faithfully from strict to weak graph order by the preceding boundary lemma. |
| `cor-volume-under-a-continuous-graph-over-a-jordan-base` | literature-derived | ai-altered | Angenent slicing formula and Taylor's theorem, specialized to integrand one. |
| `thm-volume-of-a-solid-of-revolution-by-discs` | literature-derived | ai-altered | Angenent §3.4, with Jordan measurability supplied locally. |
| `cor-washer-method-for-solids-of-revolution` | literature-derived | ai-altered | Angenent §4 annular sections. |
| `cor-volume-of-a-right-circular-cylinder` | literature-derived | ai-altered | Angenent §3 and the constant-profile specialization. |
| `cor-volume-of-a-right-circular-cone` | literature-derived | ai-altered | Angenent §3 and the linear-profile computation. |
| `cor-volume-of-a-closed-three-ball` | literature-derived | ai-altered | Angenent's sphere formula by slicing. |
| `thm-volume-of-a-closed-three-ball-cavalieri-proof` | literature-derived | ai-altered | Angenent §3.3; a second method, not a rearranged disc proof. |
| `thm-cylindrical-shell-formula-for-solids-of-revolution` | literature-derived | ai-altered | Angenent §5, with the annular Darboux squeeze made rigorous. |
| `thm-volume-recursion-for-closed-euclidean-balls` | literature-derived | ai-altered | Toronto §2.4 and Axler 5.44–5.45, adapted from Lebesgue/open to Jordan/closed balls. |

### Volume companion

| Item | Statement/construction | Proof | Rationale and truth-risk disposition |
|---|---|---|---|
| `ex-cylinder-and-cone-volume-computations` | ai-generated | ai-generated | Locally selected numeric instance; exact substitution verifies it. `generation.role: example`; no counterexample doubt remains. |
| `ex-torus-volume-by-washers` | ai-generated | ai-generated | Classical locally formulated washer construction; $R>r>0$ and direct integration make it checkable. `generation.role: example`; the boundary $R=r$ is deliberately excluded. |
| `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` | literature-derived | ai-altered | Exact Angenent §§4.1/5.1 example, verified by both source methods. |
| `ex-gabriels-horn-has-finite-volume` | literature-derived | ai-altered | APEX Example 216; only the volume component is stated. |
| `ex-unit-ball-volumes-through-five-from-slicing` | literature-derived | ai-altered | Axler's table and Toronto recurrence, calculated without Gamma. |
| `cex-compact-solid-without-jordan-volume` | ai-altered | ai-generated | Published Smith--Volterra witness lifted by a fully explicit three-dimensional cover lower bound; source-backed construction, not a generated dependency gap. |
| `fs-every-compact-solid-has-a-volume` | literature-derived | ai-altered | Standard false claim refuted by the preceding eligible source-adapted counterexample. |
| `fs-equal-cross-sections-force-congruence` | ai-altered | ai-generated | Angenent's Cavalieri discussion says section areas determine volume, not shape; explicit boxes certify the converse failure. |
| `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` | literature-derived | ai-altered | Exact published/Lebl false claim, with the witness repeated locally to respect the B-leaf rule. |

### Real Gamma/Beta A page

All statements below are literature-derived unless marked `ai-altered`; every proof is `ai-altered` except the two locally decomposed proof components marked `ai-generated`. Definitions have `not-applicable` proofs.

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-log-convex-positive-function` | literature-derived | not-applicable | Toronto §1.5 and TIFR §4. |
| `def-real-gamma-function-by-the-euler-integral` | literature-derived | not-applicable | Toronto §1 and TIFR Lecture 6 §1. |
| `thm-real-gamma-euler-integral-convergence` | literature-derived | ai-altered | TIFR §1(i), strengthened only by making divergence for nonpositive parameters explicit. |
| `def-real-beta-integral` | literature-derived | not-applicable | Toronto §2. |
| `thm-real-beta-integral-convergence` | literature-derived | ai-altered | Toronto 2.1 with both endpoint converses written. |
| `thm-real-gamma-functional-equation` | literature-derived | ai-altered | Toronto 1.2 and TIFR §1(iv). |
| `cor-real-gamma-positive-integer-values` | literature-derived | ai-altered | Same sources, with the natural zero index retained. |
| `thm-real-gamma-is-smooth` | literature-derived | ai-altered | Toronto 1.3(a), using the published dominated-improper theorem. |
| `thm-real-gamma-is-log-convex` | literature-derived | ai-altered | Toronto 1.5 and TIFR §4; strictness is supplied by the strict exponential inequality. |
| `thm-real-gamma-endpoint-behaviour-and-unique-minimum` | literature-derived | ai-altered | Toronto 1.3(c,d), with the unique-minimum deduction spelled out. |
| `cor-gautschi-inequality-for-the-real-gamma-function` | literature-derived | ai-altered | Toronto 1.5(c). |
| `lem-bohr-mollerup-factorial-squeeze` | literature-derived | ai-altered | Exact TIFR §4 squeeze, separated for auditability. |
| `thm-bohr-mollerup-characterisation-of-the-real-gamma-function` | literature-derived | ai-altered | TIFR §4 and Toronto's note. |
| `prop-real-beta-symmetry-and-trigonometric-form` | literature-derived | ai-altered | Toronto 2.2(a). |
| `thm-real-beta-gamma-identity` | literature-derived | ai-altered | Toronto 2.2(b) and TIFR §1(vi), adapted to exhaustion-based Riemann integrals. |
| `cor-real-beta-recurrences` | ai-altered | ai-generated | Standard recurrence extracted from the source identity and Gamma recurrence; source-based but separately formulated. |
| `cor-real-gamma-one-half-is-root-pi` | literature-derived | ai-altered | Toronto 1.4 and the published Gaussian integral. |
| `thm-real-gamma-one-half-wallis-proof` | literature-derived | ai-altered | Toronto 2.3 plus the published Wallis asymptotic; genuinely different from the Gaussian route. |
| `lem-stirling-formula-up-to-a-positive-constant` | literature-derived | ai-altered | TIFR §1(v), separated from constant identification. |
| `lem-stirling-constant-from-wallis` | literature-derived | ai-altered | Toronto 2.3(g) and TIFR §6. |
| `thm-real-stirling-formula` | literature-derived | ai-altered | TIFR §6 and Toronto 2.3(g). |
| `cor-volume-of-the-unit-n-ball` | literature-derived | ai-altered | Toronto 2.4(d), Axler 5.44/Exercise 13. |
| `cor-volume-of-a-radius-r-n-ball` | literature-derived | ai-altered | Toronto 2.4(a,e). |
| `cor-unit-n-ball-volume-tends-to-zero` | literature-derived | ai-altered | Axler Exercise 12(a). |
| `cor-unit-n-ball-volume-is-maximal-in-dimension-five` | literature-derived | ai-altered | Axler Exercise 12(b), with the comparison made exact from the Gregory--Leibniz remainder. |

`cor-real-beta-recurrences` is `ai-altered`, not `ai-generated`: the statement is a direct source-identity reformulation and remains eligible as a dependency. Its proof is locally generated but that does not affect eligibility.

### Real Gamma/Beta companion

| Item | Statement/construction | Proof | Rationale and truth-risk disposition |
|---|---|---|---|
| `ex-real-gamma-and-beta-special-values` | literature-derived | ai-altered | Toronto §§1.2,1.4,2.2–2.3. |
| `ex-unit-n-ball-volumes-through-eight-from-gamma` | literature-derived | ai-altered | Toronto 2.4 and Axler's table/formula. |
| `ex-positive-convex-function-that-is-not-log-convex` | ai-generated | ai-generated | Checkable identity-function witness. `generation.role: example`; the midpoint inequality was explicitly tested. |
| `ex-positive-non-log-convex-solution-of-gamma-functional-equation` | ai-altered | ai-generated | TIFR explicitly permits positive periodic multiples of Gamma; the amplitude is adapted to force a displayed midpoint violation. |
| `fs-the-functional-equation-determines-gamma` | literature-derived | ai-altered | TIFR §4 states the failure and the periodic-multiple family. |
| `fs-gamma-extends-to-the-nonpositive-integers` | literature-derived | ai-altered | TIFR §1(i) and the settled real-domain convention. |
| `fs-the-unit-n-ball-volume-increases-with-dimension` | literature-derived | ai-altered | Axler 5.44 and Exercise 12. |

The only AI-generated Statements/Constructions are the cylinder/cone numeric example, torus computation, and positive-convex/non-log-convex example. All are non-load-bearing and receive `generation.role: example`. Their witnesses have direct algebraic checks; no unresolved counterexample-search obligation remains.

## Exact same-batch clauses for Step 5

The authored source sections named by the proof contracts must contain these clauses verbatim so downstream citations remain exact:

- `def-solid-between-continuous-graphs-over-a-jordan-base`: `For a compact Jordan set $D\subseteq\mathbb R^m$ and continuous functions $\alpha,\beta:D\to\mathbb R$ with $\alpha\le\beta$, the solid between their graphs is $K=\{(u,t):u\in D,\ \alpha(u)\le t\le\beta(u)\}$.`
- `lem-product-of-content-zero-set-and-interval-has-content-zero`: `If $A\subseteq\mathbb R^m$ has content zero and $c\le d$, then $A\times[c,d]$ has content zero in $\mathbb R^{m+1}$.`
- `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`: `The graph of every continuous $f:C\to\mathbb R$ on a compact set $C\subseteq\mathbb R^m$ has content zero in $\mathbb R^{m+1}$.`
- `lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero`: `The boundary of $K$ has content zero.`
- `thm-solid-between-continuous-graphs-fubini-formula`: `The solid $K$ is compact and Jordan measurable, and every continuous $H:K\to\mathbb R$ satisfies $\int_KH=\int_D\left(\int_{\alpha(u)}^{\beta(u)}H(u,t)\,dt\right)du$.`
- `thm-volume-of-a-solid-of-revolution-by-discs`: `The solid of revolution is compact and Jordan measurable and has volume $\pi\int_a^b f(x)^2\,dx$.`
- `cor-washer-method-for-solids-of-revolution`: `Its volume is $\pi\int_a^b\bigl(f(x)^2-g(x)^2\bigr)\,dx$.`
- `thm-cylindrical-shell-formula-for-solids-of-revolution`: `Its volume is $2\pi\int_a^b x f(x)\,dx$.`
- `thm-volume-recursion-for-closed-euclidean-balls`: `For $n\ge2$ and $r\ge0$, $V_n(r)=V_{n-1}(1)\int_{-r}^{r}(r^2-t^2)^{(n-1)/2}\,dt$.`
- `def-log-convex-positive-function`: `A positive function $f:I\to(0,\infty)$ is log-convex when $\log\circ f$ is convex on $I$.`
- `def-real-gamma-function-by-the-euler-integral`: `For $s>0$, define $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt$.`
- `thm-real-gamma-euler-integral-convergence`: `The Euler integral $\int_0^\infty t^{s-1}e^{-t}\,dt$ converges if and only if $s>0$.`
- `def-real-beta-integral`: `For $p,q>0$, define $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt$.`
- `thm-real-gamma-functional-equation`: `For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$.`
- `thm-real-gamma-is-smooth`: `For every natural $k$ and every $s>0$, $\Gamma^{(k)}(s)=\int_0^\infty(\log t)^kt^{s-1}e^{-t}\,dt$.`
- `thm-real-gamma-is-log-convex`: `The real Gamma function is strictly log-convex on $(0,\infty)$.`
- `cor-gautschi-inequality-for-the-real-gamma-function`: `For $x>0$ and $0\le s\le1$, $x^{1-s}\le\Gamma(x+1)/\Gamma(x+s)\le(x+1)^{1-s}$.`
- `lem-bohr-mollerup-factorial-squeeze`: `Every positive log-convex $f$ with $f(1)=1$ and $f(x+1)=xf(x)$ lies between the Bohr--Mollerup factorial bounds, whose ratio is $(n+x)/n$ for $0<x\le1$.`
- `thm-bohr-mollerup-characterisation-of-the-real-gamma-function`: `Gamma is the unique positive log-convex function $f:(0,\infty)\to(0,\infty)$ with $f(1)=1$ and $f(x+1)=xf(x)$.`
- `prop-real-beta-symmetry-and-trigonometric-form`: `For $p,q>0$, $B(p,q)=B(q,p)=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,d\theta$.`
- `thm-real-beta-gamma-identity`: `For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$.`
- `cor-real-gamma-one-half-is-root-pi`: `$\Gamma(1/2)=\sqrt\pi$.`
- `thm-real-stirling-formula`: `$n!\sim\sqrt{2\pi n}(n/e)^n$ as the positive integer $n$ tends to infinity.`
- `cor-volume-of-the-unit-n-ball`: `For every $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$.`
- `cor-volume-of-a-radius-r-n-ball`: `For $n\ge1$ and $r\ge0$, $V_n(r)=\pi^{n/2}r^n/\Gamma(n/2+1)$.`
- `cor-unit-n-ball-volume-tends-to-zero`: `$V_n(1)\to0$ as $n\to\infty$.`
- `cor-unit-n-ball-volume-is-maximal-in-dimension-five`: `Among positive integer dimensions, the unit-ball volume is uniquely maximal at $n=5$.`

Additional exact clauses used by the contract:

- `cor-volume-of-a-right-circular-cylinder`: `A right circular cylinder of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h$.`
- `cor-volume-of-a-right-circular-cone`: `A right circular cone of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h/3$.`
- `cor-volume-of-a-closed-three-ball`: `A closed three-dimensional ball of radius $r\ge0$ has volume $4\pi r^3/3$.`
- `cex-compact-solid-without-jordan-volume`: `Every compact subset of $\mathbb R^3$ is Jordan measurable.`
- `thm-real-beta-integral-convergence`: `The Beta integral converges if and only if $p>0$ and $q>0$.`
- `lem-stirling-formula-up-to-a-positive-constant`: `There is a constant $C>0$ such that $n!\sim C\sqrt n(n/e)^n$.`
- `lem-stirling-constant-from-wallis`: `The constant $C$ in the preceding asymptotic is $\sqrt{2\pi}$.`
- `ex-positive-non-log-convex-solution-of-gamma-functional-equation`: `The function $F(s)=\Gamma(s)e^{A\sin(2\pi s)}$ is positive, satisfies $F(1)=1$ and $F(s+1)=sF(s)$, differs from Gamma, and is not log-convex.`

## Proof-obligation overview

The machine-readable file supplies the step-by-step maps. The nonroutine obligations that Step 5 must not compress are:

- graph-null cover count: empty compact domain, uniform continuity, cells meeting the domain, vertical-stack count, and total-volume limit;
- boundary containment: both graphs, the base boundary product, and no omitted vertical side when the base is not a rectangle;
- main solid theorem: closedness, boundedness, compactness, boundary criterion, integrability of $H$, all sections, and coincident graphs;
- shells: existence of radial extrema, annular content difference, upper/lower sums, uniform-continuity gap, $a=0$, and zeros of the profile;
- ball recursion: induction base $n=1$, radius zero, boundary sections, rational-power meaning, and the last-coordinate section identification;
- Gamma convergence: both improper endpoints and both directions of the exact domain;
- smoothness: a separate integrable dominator on each half-domain for every derivative order and compact parameter interval;
- strict log-convexity: strictness survives integration because the integrand inequality is strict on a nondegenerate interval;
- Bohr--Mollerup: integer values, secant inequalities, positive bounds, their ratio, the range $0<x\le1$, and recurrence extension;
- Beta--Gamma: compact change-of-variables hypotheses, Jacobian, cofinal exhaustion, nonnegative Fubini, and division by positive Gamma;
- both half-value proofs: singular substitution for Gaussian, and factorial/Gautschi/Wallis limit matching for the second route;
- Stirling: summable symmetric logarithmic errors, existence and positivity of the constant, and independent Wallis identification;
- ball closed form: the Beta substitution at both endpoints, induction base, radius zero, parity subsequences for the zero limit, and exact rational bounds on $\pi$ for the dimension-five comparison.

For the last obligation, use the signed remainder rather than a decimal assertion: the odd partial sum through $N=7$ is $33976/45045>3/4$, so $\pi>3$; the even partial sum through $N=18$ is $133330680156299/166966608033225<4/5$, so $\pi<16/5$. These are finite rational checks, and the signs of $R_7$ and $R_{18}$ give the correct lower and upper directions.

## New-id and reuse report

The exact scan read every proposed id against filenames in `items/` and exact `"id"` fields in `research/plan-spec.json`; all 56 final ids were `NEW`. The semantic scan searched solids between graphs, solids of revolution, shells, washers, ball volumes, log-convexity, Gamma/Beta, Bohr--Mollerup, Gautschi, and Stirling.

Reuse findings:

- `def-euclidean-spheres-and-closed-balls` replaces the design's duplicate ball definition;
- `thm-fubini-over-a-region-between-continuous-graphs` is reused for the one-dimensional base but is not inflated into the needed arbitrary compact-base theorem;
- `cor-cavalieri-principle-for-jordan-content`, `cor-disc-jordan-content-is-pi-r-squared`, and the Wallis trilogy are reused;
- the published B-page iterated-integral counterexample is not a dependency target; its source-backed witness is reproduced locally;
- the complex page's reserved ids remain untouched. All new Gamma/Beta ids are explicitly real-variable ids.

## Per-page item counts

- `volumes-of-elementary-solids-and-solids-of-revolution`: 15 items.
- `volumes-of-elementary-solids-and-solids-of-revolution-examples`: 9 items.
- `the-real-gamma-and-beta-functions`: 25 items.
- `the-real-gamma-and-beta-functions-examples`: 7 items.

### `volumes-of-elementary-solids-and-solids-of-revolution` — 15 items

1. `def-solid-between-continuous-graphs-over-a-jordan-base` — definition — A solid between continuous graphs over a compact Jordan base
2. `def-solid-of-revolution-about-a-coordinate-axis` — definition — Solids of revolution about a coordinate axis
3. `lem-product-of-content-zero-set-and-interval-has-content-zero` — lemma — The product of a content-zero set and a compact interval has content zero
4. `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero` — theorem — The graph of a continuous function on a compact Euclidean set has content zero
5. `lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero` — lemma — The boundary of a solid between continuous graphs over a compact Jordan base has content zero
6. `thm-solid-between-continuous-graphs-fubini-formula` — theorem — A solid between continuous graphs over a compact Jordan base is Jordan measurable and integrates by vertical sections
7. `cor-volume-under-a-continuous-graph-over-a-jordan-base` — corollary — The volume under a nonnegative continuous graph over a compact Jordan base is its integral
8. `thm-volume-of-a-solid-of-revolution-by-discs` — theorem — The disc formula for the volume of a solid of revolution
9. `cor-washer-method-for-solids-of-revolution` — corollary — The washer formula for a solid of revolution between two nonnegative profiles
10. `cor-volume-of-a-right-circular-cylinder` — corollary — A right circular cylinder of radius $R$ and height $h$ has volume $\pi R^2h$
11. `cor-volume-of-a-right-circular-cone` — corollary — A right circular cone of radius $R$ and height $h$ has volume $\pi R^2h/3$
12. `cor-volume-of-a-closed-three-ball` — corollary — A closed three-dimensional ball of radius $r\ge0$ has volume $4\pi r^3/3$
13. `thm-volume-of-a-closed-three-ball-cavalieri-proof` — theorem — The volume of a three-ball by Cavalieri's cylinder-minus-cones proof
14. `thm-cylindrical-shell-formula-for-solids-of-revolution` — theorem — The cylindrical-shell formula for a solid of revolution about the $y$-axis
15. `thm-volume-recursion-for-closed-euclidean-balls` — theorem — Closed Euclidean balls are Jordan measurable and their volumes satisfy the slicing recursion

### `volumes-of-elementary-solids-and-solids-of-revolution-examples` — 9 items

1. `ex-cylinder-and-cone-volume-computations` — example — A radius-$2$, height-$3$ cylinder and cone have volumes $12\pi$ and $4\pi$
2. `ex-torus-volume-by-washers` — example — A torus with major radius $R$ and minor radius $r$ has volume $2\pi^2Rr^2$
3. `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` — example — The shell and washer methods both give $8\pi/3$ for a rotated parabolic cap
4. `ex-gabriels-horn-has-finite-volume` — example — Gabriel's horn has finite improper volume $\pi$
5. `ex-unit-ball-volumes-through-five-from-slicing` — example — Slicing gives the unit-ball volumes through dimension five
6. `cex-compact-solid-without-jordan-volume` — counterexample — A compact solid in $\mathbb R^3$ need not be Jordan measurable
7. `fs-every-compact-solid-has-a-volume` — false statement — FALSE: every compact solid in $\mathbb R^3$ has Jordan volume
8. `fs-equal-cross-sections-force-congruence` — false statement — FALSE: solids with equal parallel cross-sectional areas are congruent
9. `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` — false statement — FALSE: one existing iterated integral guarantees multiple Riemann integrability

### `the-real-gamma-and-beta-functions` — 25 items

1. `def-log-convex-positive-function` — definition — Log-convex positive functions
2. `def-real-gamma-function-by-the-euler-integral` — definition — The real Gamma function by Euler's integral
3. `thm-real-gamma-euler-integral-convergence` — theorem — Euler's Gamma integral converges exactly for positive real parameters
4. `def-real-beta-integral` — definition — Euler's real Beta integral
5. `thm-real-beta-integral-convergence` — theorem — Euler's Beta integral converges exactly for two positive parameters
6. `thm-real-gamma-functional-equation` — theorem — The real Gamma functional equation $\Gamma(s+1)=s\Gamma(s)$
7. `cor-real-gamma-positive-integer-values` — corollary — $\Gamma(n+1)=n!$ for every natural number $n$
8. `thm-real-gamma-is-smooth` — theorem — The real Gamma function is smooth and its derivatives are logarithmic moments
9. `thm-real-gamma-is-log-convex` — theorem — The real Gamma function is strictly log-convex
10. `thm-real-gamma-endpoint-behaviour-and-unique-minimum` — theorem — The real Gamma function has one minimum and diverges at both ends of its domain
11. `cor-gautschi-inequality-for-the-real-gamma-function` — corollary — Gautschi's inequality for the real Gamma function
12. `lem-bohr-mollerup-factorial-squeeze` — lemma — Log-convex solutions of the Gamma recurrence obey the Bohr--Mollerup factorial squeeze
13. `thm-bohr-mollerup-characterisation-of-the-real-gamma-function` — theorem — Bohr--Mollerup characterisation of the real Gamma function
14. `prop-real-beta-symmetry-and-trigonometric-form` — proposition — Symmetry and the trigonometric form of the real Beta integral
15. `thm-real-beta-gamma-identity` — theorem — The real Beta--Gamma identity
16. `cor-real-beta-recurrences` — corollary — The elementary recurrences for the real Beta function
17. `cor-real-gamma-one-half-is-root-pi` — corollary — $\Gamma(1/2)=\sqrt\pi$ from the Gaussian integral
18. `thm-real-gamma-one-half-wallis-proof` — theorem — $\Gamma(1/2)=\sqrt\pi$ by Wallis's product
19. `lem-stirling-formula-up-to-a-positive-constant` — lemma — Stirling's factorial asymptotic holds up to a positive constant
20. `lem-stirling-constant-from-wallis` — lemma — Wallis's product determines the Stirling constant as $\sqrt{2\pi}$
21. `thm-real-stirling-formula` — theorem — Stirling's formula for factorials
22. `cor-volume-of-the-unit-n-ball` — corollary — The closed form for the volume of the unit $n$-ball
23. `cor-volume-of-a-radius-r-n-ball` — corollary — The volume of a radius-$r$ closed $n$-ball is $\pi^{n/2}r^n/\Gamma(n/2+1)$
24. `cor-unit-n-ball-volume-tends-to-zero` — corollary — The volume of the unit $n$-ball tends to zero with dimension
25. `cor-unit-n-ball-volume-is-maximal-in-dimension-five` — corollary — The unit-ball volume is maximal in dimension five

### `the-real-gamma-and-beta-functions-examples` — 7 items

1. `ex-real-gamma-and-beta-special-values` — example — Special values of the real Gamma and Beta functions
2. `ex-unit-n-ball-volumes-through-eight-from-gamma` — example — The unit-ball volumes through dimension eight from the Gamma formula
3. `ex-positive-convex-function-that-is-not-log-convex` — example — A positive convex function need not be log-convex
4. `ex-positive-non-log-convex-solution-of-gamma-functional-equation` — example — A positive non-log-convex solution of the Gamma functional equation
5. `fs-the-functional-equation-determines-gamma` — false statement — FALSE: normalization and the functional equation determine the real Gamma function
6. `fs-gamma-extends-to-the-nonpositive-integers` — false statement — FALSE: Euler's real Gamma integral converges at the nonpositive integers
7. `fs-the-unit-n-ball-volume-increases-with-dimension` — false statement — FALSE: unit-ball volume increases with dimension

## Forward references and cross-batch dependencies

There is no load-bearing forward reference. At Step 5, `ex-gabriels-horn-has-finite-volume` may mention the page id `regular-surfaces-and-surface-integrals` in prose for orientation, but it must not name an unbuilt surface theorem in `deps`, Facts, or Verification. The infinite-surface result remains a coverage deferral.

The Gamma pair depends on this batch's earlier `thm-volume-recursion-for-closed-euclidean-balls`. No item is needed from another frontier-17 batch. Other frontier-17 batches need nothing from this batch that their present manifests declare.

The later complex-analysis page `the-gamma-function` needs its design-promised `thm-complex-gamma-restricts-to-the-real-gamma-function`; this batch does not mint or depend on that later item.

## Findings for Step-3 Alpha

1. Approve RC7-2, reversing the impossible log-convex/nonconvex example. A positive log-convex function is automatically convex; declining asks Step 5 to author a false construction.
2. Approve RC5-3, correcting the Gabriel's-horn boundedness claim and moving the surface false statement to the surface page. Gabriel's generating region is unbounded; declining preserves a witness that misses its hypothesis.
3. Approve RC5-4, replacing the inaccurate universal graph-volume false statement with the exact one-iterated-integral failure. Declining risks publishing a false diagnosis of a theorem that is true under broader Riemann-integrable hypotheses than continuity.
4. Approve RC5-2, keeping the Gamma closed form off the earlier volume spine and proving it only on RC-7. Declining creates a load-bearing forward dependency.
5. Approve RC5-1, reusing the published closed-ball definition. Declining creates a duplicate convention and immutable-id problem.
6. Approve RC5-5, adding `improper-integrals` to the volume page's declared prerequisites. Declining leaves Gabriel's horn's actual proof inputs undeclared.
7. Approve RC7-1, adding the volume and pi-characterization pages to Gamma's declared prerequisites. Declining leaves the n-ball recursion and both Wallis-backed arguments outside declared ancestry.
8. Retain both proofs of $\Gamma(1/2)=\sqrt\pi` and both proofs of the three-ball volume. They are genuinely different methods with distinct route ids and reciprocal cross-references; declining removes source-requested mathematical richness rather than eliminating duplication.
9. Require an escalation-free engine retry of `source-fetch-check --stamp`. All source bodies were read through the browser channel, but the required local hashes are absent because every DNS lookup returned `EAI_AGAIN`; declining the retry leaves the liveness gate red.

## Gate and confidence statement

Completed:

- `coverage-checklist`: 2 pages, 82 harvested results, 0 errors, 0 warnings;
- `content-policy --manifest-only`: 56 scoped items, 0 errors, 0 warnings;
- exact id scan: all 56 ids new;
- published-dependency scan: 88 external items, all published, all with eligible Statement provenance;
- internal-order scan: 0 same-page or cross-page order violations;
- source fetch attempt: 0/7 stamped, seven uniform `EAI_AGAIN` failures.
- version-1 contract audit: 51 scoped proof-bearing ids, 51 contracts, every planned step covered once, every citation source declared, all published source quotes found in the exact source section, and all eight boundary cases present with item-specific evidence or reasons;
- `proof-contract --strict`: expected pre-authoring failure only, with one `item-missing` error for each of the 51 scoped ids and 0/51 authored items checked;
- `finite-smoke`: 0 applicable registered checks over this analysis scope; this is not evidence for any analytic statement;
- `validate-plan research/plan-spec.json`: current unspliced repository plan passes;
- `depsource`: current unspliced repository plan reports 0 unresolved dependencies. Neither current-plan result classifies this batch before Step 4.

Not yet authoritative: `validate-plan` and `depsource` cannot classify these ids until Step 4 splices them. The missing prerequisite edges are expected findings, not claimed passes. No Step-6 reader, Alpha risk review, judge, publication, or status change has occurred.

Mathematical confidence is high in the main boundary decomposition, shell squeeze, ball induction, Gamma endpoint analysis, Bohr--Mollerup squeeze, Beta--Gamma change of variables, independent half-value routes, Stirling constant comparison, and dimension-five maximum. The exact finite Gregory--Leibniz partial-sum arithmetic and every published contract quote were rechecked against the final artifacts. The only current blocker is the missing mechanical fetch stamps.

The proof-contract artifact and finite rational checks are now complete. The exact next action is an engine retry of the source-stamp command, followed by Step-3 Alpha adjudication of the findings above and the scaffold breadth represented by the coverage file.

## Step-3 Alpha direct repairs

The source-fetch status above is historical: all current source rows are
mechanically stamped. Alpha applied the verified backward prerequisite edge
from the volume pair to improper-integrals and synchronized the Gamma manifest
with the plan's earlier volume prerequisite.

Four proof routes were repaired before authoring. The Cavalieri proof of the
three-ball volume no longer depends on the preceding disc-proof theorem; it
uses the disc-section formula, finite additivity, the cylinder and cone
volumes, and Cavalieri, with the other proof mentioned only in a Remark. The
$n$-ball recursion now cites determinant scaling for its sectional dilation.
Gamma and Beta convergence use the logarithmic primitive at the zero-exponent
threshold instead of treating that case as a real-power primitive. Gamma
smoothness now declares induction for repeated dominated differentiation.
The matching batch proof-contract entries were updated in the same repair.

## Step-3 fix pass

- **B5-1 — already correct.** In `research/frontier-17-batch-5.pages.json`,
  `thm-volume-of-a-closed-three-ball-cavalieri-proof` does not depend on
  `cor-volume-of-a-closed-three-ball`; its declared inputs are the published
  Cavalieri, disc-content, and finite-additivity results together with the
  earlier same-page cylinder and cone corollaries and the closed-ball
  definition. Its proof contract cites exactly the first five proof inputs and
  contains no citation or derivation input from the disc proof of the ball
  formula.
- **B5-2 — already correct.**
  `thm-volume-recursion-for-closed-euclidean-balls` declares
  `thm-linear-images-scale-jordan-content-by-absolute-determinant`. Contract
  fact F2 quotes that theorem's content-scaling equation and step 2.2 applies
  it to the radius-$\rho$ dilation of the sectional $(n-1)$-ball.
- **B5-3 — already correct.** Both
  `thm-real-gamma-euler-integral-convergence` and
  `thm-real-beta-integral-convergence` declare
  `thm-logarithm-derivative-and-integral` and
  `thm-natural-logarithm-laws`. Their contracts treat $s=0$, $p=0$, and $q=0$
  separately with the logarithmic primitive and the unbounded range of
  $\log$, rather than using the nonzero-exponent real-power primitive.
- **B5-4 — already correct.** `thm-real-gamma-is-smooth` declares
  `thm-induction-principle`; contract fact F3 quotes its property form, and
  step 2.1 explicitly inducts on the derivative order while applying dominated
  differentiation at the successor stage.
- **B5-5 — already correct.** The volume A page declares
  `improper-integrals`, and the Gamma A page declares the earlier volume page.
  Those `requires` arrays agree exactly with the corresponding current entries
  in `research/plan-spec.json`; this fix pass did not edit the plan.

Gate rerun after the finding audit:

- `coverage-checklist.mjs`: exit 0; 2 pages, 82 harvested results, 0 errors,
  0 warnings.
- `content-policy.mjs --manifest-only`: exit 0; 56 scoped items, 0 errors,
  0 warnings.
- `validate-plan.mjs research/plan-spec.json`: exit 0; declared page order is
  acyclic and consistent, with no item-level cycle, forward reference, B-page
  dependency, or unresolved id among pages whose item lists are present.
- `prosecheck.mjs --warnings`: exit 0; 0 errors and 18 count warnings in these
  authoring notes. The warnings are the explicitly required item/page counts in
  the scaffold report, not reader-facing page prose; no positional claim
  contradicts the spec.

## Step-5 authoring

All four owned page files and all 56 scaffolded item files were authored as
`status: draft`, `origin: session`. The A-page summaries were written from the
final items: each has exactly two nonempty paragraphs below 150 words, and both
companion pages have no body. Coverage dispositions remain unchanged because
every `included` item was authored under its scaffold id; nothing was renamed,
merged, dropped, deferred, or moved between pages.

### Per-item completion and component-provenance ledger

The component values below are final. “Pass” means the item was included in the
51-file precheck invocation and actually passed; definitions have `n/a` because
they have no phase proof. The longer source locators and the original rationale
for each tag remain in `## Component provenance plan` above.

#### Volume A page

- `def-solid-between-continuous-graphs-over-a-jordan-base` — precheck `n/a`; Statement `literature-derived`, proof `not-applicable`; Taylor Theorem 3.1.9 supplies the construction, with equality retained.
- `def-solid-of-revolution-about-a-coordinate-axis` — precheck `n/a`; Statement `literature-derived`, proof `not-applicable`; Angenent §§3–5 supplies the coordinate-axis constructions.
- `lem-product-of-content-zero-set-and-interval-has-content-zero` — precheck pass; Statement `ai-altered`, proof `ai-generated`; Taylor's product-cover move was adapted to the library's finite cube-cover definition.
- `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Taylor Proposition 3.1.7 was recast as a finite Euclidean grid-stack proof.
- `lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero` — precheck pass; Statement `ai-altered`, proof `ai-generated`; the three boundary pieces implicit in Taylor 3.1.9 were separated and proved null.
- `thm-solid-between-continuous-graphs-fubini-formula` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Taylor 3.1.9 was written with weak graph order and degenerate sections.
- `cor-volume-under-a-continuous-graph-over-a-jordan-base` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent's slicing formula was specialized from the local solid theorem.
- `thm-volume-of-a-solid-of-revolution-by-discs` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent §3.4 was supplied with explicit Jordan measurability and square-root continuity.
- `cor-washer-method-for-solids-of-revolution` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent §4 was supplied with annular additivity and coordinate-permutation invariance.
- `cor-volume-of-a-right-circular-cylinder` — precheck pass; Statement `literature-derived`, proof `ai-altered`; this is Angenent's constant-profile specialization.
- `cor-volume-of-a-right-circular-cone` — precheck pass; Statement `literature-derived`, proof `ai-altered`; this is Angenent's linear-profile computation with zero height handled before division.
- `cor-volume-of-a-closed-three-ball` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent's disc-slicing calculation was written with the radius-zero singleton.
- `thm-volume-of-a-closed-three-ball-cavalieri-proof` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent §3.3 supplies the independent cylinder-minus-cones route.
- `thm-cylindrical-shell-formula-for-solids-of-revolution` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Angenent §5 was expanded to a Jordan annulus and Darboux-sum squeeze.
- `thm-volume-recursion-for-closed-euclidean-balls` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto §2.4 and Axler §5C were adapted to closed Jordan balls with determinant scaling.

#### Volume companion

- `ex-cylinder-and-cone-volume-computations` — precheck pass; construction `ai-generated`, verification `ai-generated`; the finite counterexample search was exact substitution at $R=2,h=3$, which returned $12\pi$ and $4\pi$ with no contrary case in that fixed scope. `generation.role: example`.
- `ex-torus-volume-by-washers` — precheck pass; construction `ai-generated`, verification `ai-generated`; the truth-risk check expanded both washer radii under $R>r>0$ and reduced the integral to half a proved disc area, yielding $2\pi^2Rr^2$. The excluded $R=r$ boundary was checked rather than silently included. `generation.role: example`.
- `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` — precheck pass; construction `literature-derived`, verification `ai-altered`; this is Angenent's parabolic-cap example by both source methods.
- `ex-gabriels-horn-has-finite-volume` — precheck pass; construction `literature-derived`, verification `ai-altered`; APEX Example 216 supplies the truncated volumes and only the finite-volume half is stated.
- `ex-unit-ball-volumes-through-five-from-slicing` — precheck pass; construction `literature-derived`, verification `ai-altered`; Axler's values and the Toronto recursion are evaluated without Gamma.
- `cex-compact-solid-without-jordan-volume` — precheck pass; construction `ai-altered`, verification `ai-generated`; the published Smith--Volterra cover lower bound was lifted to an explicit product-cover argument.
- `fs-every-compact-solid-has-a-volume` — precheck pass; Statement `literature-derived`, refutation `ai-altered`; the preceding eligible compact product witness refutes the universal claim.
- `fs-equal-cross-sections-force-congruence` — precheck pass; Statement `ai-altered`, refutation `ai-generated`; explicit boxes have equal section areas and unequal diameters.
- `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` — precheck pass; Statement `literature-derived`, refutation `ai-altered`; Lebl's rational/irrational section witness was reproduced locally to preserve the B-leaf rule.

#### Real Gamma/Beta A page

- `def-log-convex-positive-function` — precheck `n/a`; Statement `literature-derived`, proof `not-applicable`; Toronto §1.5 and TIFR §4 supply the definition.
- `def-real-gamma-function-by-the-euler-integral` — precheck `n/a`; Statement `literature-derived`, proof `not-applicable`; Toronto §1 and TIFR Lecture 6 §1 supply the integral, with `justified_by` pointing to its exact convergence theorem.
- `thm-real-gamma-euler-integral-convergence` — precheck pass; Statement `literature-derived`, proof `ai-altered`; TIFR §1(i) was expanded to both directions and both improper ends.
- `def-real-beta-integral` — precheck `n/a`; Statement `literature-derived`, proof `not-applicable`; Toronto §2 supplies the integral, with `justified_by` pointing to the endpoint convergence theorem.
- `thm-real-beta-integral-convergence` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.1 was expanded to both endpoint converses and the logarithmic thresholds.
- `thm-real-gamma-functional-equation` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.2 and TIFR §1(iv) support the truncated integration-by-parts proof.
- `cor-real-gamma-positive-integer-values` — precheck pass; Statement `literature-derived`, proof `ai-altered`; the same sources support the zero-indexed factorial induction.
- `thm-real-gamma-is-smooth` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.3(a) was written with separate endpoint dominators and explicit induction on derivative order.
- `thm-real-gamma-is-log-convex` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.5 and TIFR §4 support the endpoint-equalizing strict-convexity proof.
- `thm-real-gamma-endpoint-behaviour-and-unique-minimum` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.3(c,d) supports the two endpoint limits and unique-minimum calculus.
- `cor-gautschi-inequality-for-the-real-gamma-function` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.5(c) supplies the inequality, with its two endpoint equality patterns corrected explicitly.
- `lem-bohr-mollerup-factorial-squeeze` — precheck pass; Statement `literature-derived`, proof `ai-altered`; TIFR §4 supplies the common $G_n(x)$ bounds and ratio $(n+x)/n$.
- `thm-bohr-mollerup-characterisation-of-the-real-gamma-function` — precheck pass; Statement `literature-derived`, proof `ai-altered`; TIFR §4 supplies the uniqueness argument, with the integer-shift step explicit.
- `prop-real-beta-symmetry-and-trigonometric-form` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.2(a) supplies both substitutions.
- `thm-real-beta-gamma-identity` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.2(b) and TIFR §1(vi) were adapted to compact exhaustion and the map $(r,t)\mapsto(rt,r(1-t))$.
- `cor-real-beta-recurrences` — precheck pass; Statement `ai-altered`, proof `ai-generated`; the source identity and Gamma recurrence were algebraically reformulated, so the Statement remains source-based and dependency-eligible.
- `cor-real-gamma-one-half-is-root-pi` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 1.4 and the published Gaussian integral supply the square-substitution route.
- `thm-real-gamma-one-half-wallis-proof` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.3 and the published Wallis asymptotic supply a genuinely independent route.
- `lem-stirling-formula-up-to-a-positive-constant` — precheck pass; Statement `literature-derived`, proof `ai-altered`; TIFR §1(v) supplies the symmetric logarithmic-error argument.
- `lem-stirling-constant-from-wallis` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.3(g) and TIFR §6 supply the central-binomial comparison.
- `thm-real-stirling-formula` — precheck pass; Statement `literature-derived`, proof `ai-altered`; TIFR §6 and Toronto 2.3(g) supply the final constant and ratio form.
- `cor-volume-of-the-unit-n-ball` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.4(d) and Axler §5C supply the Beta-induction formula.
- `cor-volume-of-a-radius-r-n-ball` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Toronto 2.4(a,e) supplies scaling, here proved directly from the slicing recursion.
- `cor-unit-n-ball-volume-tends-to-zero` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Axler Exercise 12(a) supplies the parity-chain limit.
- `cor-unit-n-ball-volume-is-maximal-in-dimension-five` — precheck pass; Statement `literature-derived`, proof `ai-altered`; Axler Exercise 12(b) is made exact with signed Gregory--Leibniz remainders.

#### Real Gamma/Beta companion

- `ex-real-gamma-and-beta-special-values` — precheck pass; construction `literature-derived`, verification `ai-altered`; Toronto §§1.2, 1.4, and 2.2 supply the values.
- `ex-unit-n-ball-volumes-through-eight-from-gamma` — precheck pass; construction `literature-derived`, verification `ai-altered`; Toronto 2.4 and Axler §5C supply the table and formula.
- `ex-positive-convex-function-that-is-not-log-convex` — precheck pass; construction `ai-generated`, verification `ai-generated`; the counterexample search tested the identity on $(0,\infty)$ at the midpoint of $1$ and $4$, where strict monotonicity of log gives the required failure. `generation.role: example`.
- `ex-positive-non-log-convex-solution-of-gamma-functional-equation` — precheck pass; construction `ai-altered`, verification `ai-generated`; TIFR's periodic-multiple family was given an explicit amplitude that reverses the midpoint inequality.
- `fs-the-functional-equation-determines-gamma` — precheck pass; Statement `literature-derived`, refutation `ai-altered`; TIFR §4 supplies the nonuniqueness and the missing log-convexity hypothesis.
- `fs-gamma-extends-to-the-nonpositive-integers` — precheck pass; Statement `literature-derived`, refutation `ai-altered`; TIFR §1(i) and the exact convergence theorem supply divergence at zero.
- `fs-the-unit-n-ball-volume-increases-with-dimension` — precheck pass; Statement `literature-derived`, refutation `ai-altered`; Axler Exercise 12 supplies both the strict decrease after dimension five and the zero limit.

### Final scaffold-divergence ledger

No title changed. No scaffold item was dropped or renamed. The main Gautschi
inequality is unchanged, but its endpoint prose and contract were corrected:
at $s=0$ only the lower bound is equality, while at $s=1$ both bounds are.
The washer Statement now makes the scaffold's promised coordinate-axis
orientation explicit. The Gamma nonpositive-integer refutation was kept to the
real Euler integral and does not use an unbuilt analytic-continuation claim.

Final dependency differences from `research/frontier-17-batch-5.pages.json`:

- `lem-product-of-content-zero-set-and-interval-has-content-zero` added `lem-integer-part` to construct the finite interval subdivision required by the cube-cover definition.
- `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero` added `thm-extreme-value-metric` for the bounded vertical grid.
- `thm-solid-between-continuous-graphs-fubini-formula` added `thm-extreme-value-metric` for bounded graph values.
- `thm-volume-of-a-solid-of-revolution-by-discs` dropped the unused one-dimensional `thm-fubini-over-a-region-between-continuous-graphs` edge and added `lem-algebra-of-continuous-real-maps-on-a-space`, `thm-continuous-inverse`, and `thm-nth-roots-exist` for the square-root graph over the planar base.
- `cor-washer-method-for-solids-of-revolution` added determinant scaling for the coordinate-permutation clause.
- `cor-volume-of-a-right-circular-cone` dropped unused integral linearity; the proof uses its explicit cubic primitive and the FTC.
- `cor-volume-of-a-closed-three-ball` likewise dropped unused integral linearity.
- `thm-cylindrical-shell-formula-for-solids-of-revolution` added the boundary criterion, Euclidean-norm continuity, and continuous-composition lemma to establish the annular base and radial height function.
- `thm-volume-recursion-for-closed-euclidean-balls` replaced the one-variable `thm-algebra-of-continuous-functions` and unused `lem-power-monotone` with the domain-correct `lem-algebra-of-continuous-real-maps-on-a-space`.
- `thm-bohr-mollerup-characterisation-of-the-real-gamma-function` added `lem-integer-part` for the unique shift from an arbitrary positive real into $(0,1]$.
- `cor-real-beta-recurrences` dropped unused Beta symmetry because both recurrences are derived directly from Beta--Gamma and Gamma recurrence.
- `cor-volume-of-a-radius-r-n-ball` dropped unused induction; the final proof scales the slicing recursion directly by $t=ru$.
- `ex-real-gamma-and-beta-special-values` dropped the unused Beta-recurrence edge; all displayed Beta values use the Beta--Gamma identity directly.

The proof contract was synchronized to every final fact label, canonical step
number, end tag, citation use, and boundary anchor after these changes.

### Gates and audit handoff

- `reflow.mts`: all 56 item files unchanged after authoring; every numbered step is one physical line.
- `precheck.mts`: 51 proof-bearing items checked, 51 pass, 0 fail. The five definitions carry legitimate `precheck: n/a`.
- `proof-contract.mjs --strict`: 51/51 checked, 0 errors, 0 warnings.
- `citation-fidelity.mjs`: 147 exact citations after the final dependency pass, every quote found, no widening candidate.
- `boundary-audit.mjs --fail-on-contradicted`: 408 rows, no contradicted disposition, no template-reuse cluster.
- `finite-smoke.mjs`: 0 applicable registered checks over 0/51 items; this is not evidence for an analytic claim.
- `risk-report.mjs`: tiers computed for all 51 proof-bearing items. High and critical rows remain for Alpha's Step-6 `risk_review`; no author review was fabricated.
- `coverage-checklist.mjs`: 2 pages, 82 harvested results, 0 errors, 0 warnings.
- `content-policy.mjs`: 56 scoped items, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: pass after splice.
- Scoped `prosecheck.mjs --warnings`: 60 files, 0 errors, 0 warnings; both A summaries have two paragraphs of 56/73 and 52/79 words respectively.
- Scoped `rendercheck.mjs`: 60 files, valid YAML and KaTeX, no delimiter, multiline-display, or wikilink-in-math defect.
- Scoped `citecheck.mjs`: 56 items, no heuristic warning.
- Global `fwdcheck.mjs` and `extcheck.mjs`: pass. Global `depcheck.mjs` currently has one error outside batch 5: published `rem-sine-period-arc-length-integrand-is-nonelementary` lacks `verification.sources_checked`. No batch-5 item appears in the error list; this author did not edit another batch's in-flight file.

### Escalations and confidence

There is no mathematical or scope escalation for either owned pair. The only
red global gate is the unrelated `depcheck` row named above. No published
dependency repair was needed or attempted.

Confidence is high in the cube refinement, graph-null stack estimate, complete
boundary decomposition, annular shell squeeze, ball induction, exact endpoint
comparisons for Gamma and Beta, Bohr--Mollerup bounds, first-quadrant
Beta--Gamma substitution, independent half-value routes, Stirling constant, and
the dimension-five comparison. I rechecked the signed Gregory--Leibniz
directions and the rational arithmetic recorded in the proof. I did not run a
Step-6 independent reader, an Alpha risk review, either Step-7 judge, a
publication flip, or an owner audit. The finite-smoke registry has no applicable
analysis check, so its zero-error result supplies no independent mathematical
verification.
