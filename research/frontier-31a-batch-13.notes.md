# frontier-31a · Beta · batch-13 notes

## Control and scope check

- Authorized artifacts: `research/frontier-31a-batch-13.pages.json`, this notes file, and `research/frontier-31a-batch-13.coverage.json`. No library pages, plan structure, workflow state, or other batch artifact was changed.
- Read `research/plan-algebraic-geometry-track.md` at AV-3 (line 210) and the matching `research/plan-spec.json` records. Both give order `366.045`, companion order `366.046`, and prerequisite `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`; there is no design/spec drift to adjudicate.
- Current owned artifacts were checked before historical material. No current projective item-id collision was found in the manifest or established item ledger. The unrelated, concluded `frontier-31` Batch 13 material was not reused.
- The A spine has 25 items and the B spine 7 (32 total). The design inventory lists 24 A items; `def-homogeneous-ideal-saturation` is added because the closure theorem's formula cannot honestly use `J:x_0^infinity` without defining it. This is a required proof interface, not padding. The A page is well below the 60-item split threshold; no split is proposed.

## Conventions and proof boundary

- Work over a fixed algebraically closed field `k`; projective points are nonzero coordinate tuples modulo `k^×`. The point-set definition of `P^n` itself also records the `n=0` convention.
- Use `x_0` as the closure coordinate: `A^n = D_+(x_0) subset P^n`, with hyperplane at infinity `V_+(x_0)`. Homogenization and dehomogenization are always relative to this chosen chart.
- The closure formula is deliberately scoped to `A = V(I)` with `I = I(A)`: `I_+(closure A) = (I^h : x_0^infinity)`. It does not make the false claim that raw homogenized generators always define the closure.
- A regular projective function is represented locally by equal-degree homogeneous fractions. The global-functions theorem is only for irreducible classical projective varieties and uses the homogeneous-fraction/no-poles route, not later properness or scheme theory.
- The degree definition is restricted to a reduced hypersurface given by a nonconstant homogeneous square-free equation, avoiding the ambiguity of replacing `F` by `F^r`.
- The cone example assumes characteristic not 2. It shows that the equation `XZ-Y^2` and all its partial derivatives vanish at the vertex, calling this an elementary hypersurface-derivative diagnostic only. It does not use or assert the later regular/singular-locus criterion.
- Segre and Veronese material is deferred to `products-segre-and-veronese-embeddings-and-grassmannians`; no `Proj`, schemes, properness, projective automorphism group, or base-change theory is silently imported.

## Source reading and harvest

`research/frontier-31a-batch-13.coverage.json` is the complete heading-by-heading disposition record. Both independent full lecture-note treatments were fetch-verified by opening the full live PDFs in the web reader, including their tables of contents.

| Source | Exact range read and locator | Scaffold support |
| --- | --- | --- |
| J. S. Milne, *Algebraic Geometry*, Ch. 6, [AG.pdf](https://www.jmilne.org/math/CourseNotes/AG.pdf) | Contents PDF pp. 2–5; Chapter 6 PDF pp. 129–145, from the chapter heading through §i and before §j. | Projective zero loci/topology (Prop. 6.2), homogeneous ideals/irreducibility (Prop. 6.3), standard affine opens (Prop. 6.5), closure examples and raw-homogenization warning (6.7–6.10), regular functions (6.15–6.16), coordinate maps (6.18, 6.20), conic example (6.21), and hypersurface chart/degree material (6.22). |
| Michael Artin, *Algebraic Geometry* (MIT 18.721), Ch. 3, [ag-jan26-2022.pdf](https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf) | Contents PDF pp. 2–3; §§3.1–3.2 PDF pp. 66–70 and §3.4 PDF pp. 73–74. The live edition's PDF pagination differs from the design's printed-page shorthand, but its required section range agrees. | Projective points and homogeneous ideals (3.1–3.2), cones and the projective Nullstellensatz consequences (3.2.4–3.2.10), and degree-zero fractions/chart-independence (3.4.1–3.4.8). |

The coverage record names every source heading or named result in those exact ranges, including concrete destinations for the Segre/Veronese/twisted-cubic/product-function-field material and specific reasons for elliptic-curve, projective-linear, and base-change omissions. It contains manual `web-open` fetch receipts because this runner could not resolve external hosts for a local byte stamp; no unverified URL is retained.

## Dependency-closed item spine

All manifest item objects have an explicit `deps` array. Existing dependencies were checked in the established affine algebraic-set, coordinate-ring, graded-ring, and morphism/function-field interfaces.

| Item | Exact planned claim and direct dependencies |
| --- | --- |
| `def-projective-space-points` | Define `P^n(k)` as nonzero tuples modulo scalar multiplication; deps `[]`. |
| `def-homogeneous-polynomial-and-homogeneous-ideal` | Define total-degree homogeneous polynomials and componentwise homogeneous ideals; deps `def-polynomial-ring-over-a-commutative-ring`, `def-graded-ring-and-graded-module`. |
| `lem-homogeneous-polynomial-zero-locus-well-defined` | Prove homogeneous vanishing descends to projective points; deps `def-projective-space-points`, `def-homogeneous-polynomial-and-homogeneous-ideal`. |
| `def-projective-algebraic-set` | Define `V_+(S)` and `V_+(J)` with empty and irrelevant-ideal conventions; deps `def-projective-space-points`, `def-homogeneous-polynomial-and-homogeneous-ideal`, `lem-homogeneous-polynomial-zero-locus-well-defined`. |
| `thm-projective-zariski-topology` | Prove projective zero loci are the closed sets of a topology; deps `def-projective-algebraic-set`. |
| `lem-standard-projective-opens-are-affine-spaces` | Identify every `D_+(x_i)` with affine space by normalization; deps `def-projective-space-points`, `thm-projective-zariski-topology`, `def-affine-algebraic-set`. |
| `lem-homogenization-dehomogenization-correspondence` | Establish degree bookkeeping between homogenization and dehomogenization; deps `def-homogeneous-polynomial-and-homogeneous-ideal`. |
| `def-projective-closure-affine-set` | Define the closure of `A^n` embedded as `D_+(x_0)`; deps `def-affine-algebraic-set`, `def-projective-algebraic-set`, `lem-homogenization-dehomogenization-correspondence`. |
| `def-homogeneous-ideal-saturation` | Define `J:x_0^infinity` and record homogeneity; deps `def-homogeneous-polynomial-and-homogeneous-ideal`. |
| `thm-ideal-projective-closure-saturation` | Prove the saturated ideal formula for `A=V(I), I=I(A)`; deps `def-projective-closure-affine-set`, `def-homogeneous-ideal-saturation`, `lem-homogenization-dehomogenization-correspondence`, `thm-affine-nullstellensatz-correspondence`. |
| `def-homogeneous-coordinate-ring` | Define `S(X)=k[x_0,...,x_n]/I_+(X)` as a graded ring; deps `def-projective-algebraic-set`, `def-quotient-ring`. |
| `def-projective-variety-classical` | Define an irreducible projective algebraic set; deps `def-projective-algebraic-set`. |
| `lem-projective-irreducibility-homogeneous-prime` | Relate irreducibility to a proper homogeneous prime vanishing ideal via the cone; deps `def-projective-variety-classical`, `def-homogeneous-polynomial-and-homogeneous-ideal`, `thm-affine-nullstellensatz-correspondence`. |
| `def-regular-function-projective-variety` | Define local regularity through degree-zero homogeneous fractions; deps `def-projective-variety-classical`, `def-function-field-variety`, `def-regular-function-classical-variety`, `def-homogeneous-coordinate-ring`. |
| `lem-projective-regular-function-chart-compatibility` | Prove fraction/chart agreement on overlaps; deps `def-regular-function-projective-variety`, `lem-standard-projective-opens-are-affine-spaces`. |
| `thm-global-regular-functions-projective-variety` | Prove global regular functions are constant on an irreducible projective variety; deps `def-regular-function-projective-variety`, `lem-projective-regular-function-chart-compatibility`, `lem-projective-irreducibility-homogeneous-prime`. |
| `def-morphism-to-projective-space-homogeneous-coordinates` | Define projective coordinate morphisms by same-degree local coordinates with no common zero; deps `def-morphism-classical-varieties`, `def-projective-variety-classical`, `def-projective-space-points`, `def-regular-function-projective-variety`. |
| `lem-projective-coordinate-morphisms-well-defined` | Check scalar invariance and gluing of the coordinate formula; deps `def-morphism-to-projective-space-homogeneous-coordinates`, `lem-homogeneous-polynomial-zero-locus-well-defined`, `lem-projective-regular-function-chart-compatibility`. |
| `thm-closed-projective-embedding-by-homogeneous-generators` | For a radical homogeneous `J` with nonempty `V_+(J)`, identify `I_+(V_+(J))=J`; its inclusion in `P^n` is closed and has coordinate ring `k[x_0,...,x_n]/J`; deps `def-projective-algebraic-set`, `def-homogeneous-coordinate-ring`, `lem-projective-irreducibility-homogeneous-prime`. This deliberately avoids the false claim that an arbitrary same-degree tuple yields a closed embedding. |
| `def-affine-cone-projective-set` | Define `C(X)` from `I_+(X)`, including its vertex and scalar stability; deps `def-projective-algebraic-set`, `def-homogeneous-polynomial-and-homogeneous-ideal`. |
| `lem-projective-variety-cone-irreducible` | Prove a projective variety's affine cone irreducible; deps `def-affine-cone-projective-set`, `lem-projective-irreducibility-homogeneous-prime`, `thm-affine-variety-prime-coordinate-ring`. |
| `lem-projective-closure-dense-affine-chart` | Prove the chosen affine chart is dense in its projective closure; deps `def-projective-closure-affine-set`, `lem-standard-projective-opens-are-affine-spaces`. |
| `def-degree-projective-hypersurface` | Define degree in the reduced square-free hypersurface convention; deps `def-projective-algebraic-set`, `def-homogeneous-polynomial-and-homogeneous-ideal`. |
| `lem-projective-hypersurface-affine-pieces` | Identify every standard chart by dehomogenizing its equation; deps `def-degree-projective-hypersurface`, `lem-standard-projective-opens-are-affine-spaces`, `lem-homogenization-dehomogenization-correspondence`. |
| `rem-projective-coordinate-ring-not-function-ring` | Warn that a homogeneous coordinate ring differs from global regular functions; deps `def-homogeneous-coordinate-ring`, `thm-global-regular-functions-projective-variety`. |
| `ex-projective-line-two-affine-charts` | Compute the two `P^1` charts and `s=1/t` transition; deps `def-projective-space-points`, `lem-standard-projective-opens-are-affine-spaces`. |
| `ex-projective-closure-parabola` | Homogenize `y-x^2` to `yz-x^2` and find its point at infinity; deps `def-projective-closure-affine-set`, `thm-ideal-projective-closure-saturation`, `lem-projective-closure-dense-affine-chart`. |
| `cex-naive-homogenization-adds-component` | Show `(x-1,xy)` gains a spurious infinity point before saturation; deps `def-homogeneous-ideal-saturation`, `thm-ideal-projective-closure-saturation`. |
| `ex-projective-conic-standard-charts` | Dehomogenize `XZ-Y^2=0` on standard charts; deps `def-degree-projective-hypersurface`, `lem-projective-hypersurface-affine-pieces`, `lem-standard-projective-opens-are-affine-spaces`. |
| `ex-affine-cone-over-conic` | Compute the cone and its vertex derivative diagnostic in char. not 2; deps `def-affine-cone-projective-set`, `ex-projective-conic-standard-charts`, `lem-projective-variety-cone-irreducible`. |
| `cex-inhomogeneous-equation-not-projectively-well-defined` | Refute representative-independent vanishing for `x_0+1`; deps `def-projective-space-points`, `lem-homogeneous-polynomial-zero-locus-well-defined`. This is an author-generated counterexample and must carry the required counterexample generation provenance when written. |
| `ex-morphism-projective-line-power-map` | Verify `[X:Y] mapsto [X^d:Y^d]` and compute its chart formulas; deps `def-morphism-to-projective-space-homogeneous-coordinates`, `lem-projective-coordinate-morphisms-well-defined`, `ex-projective-line-two-affine-charts`. |

## Handoff state

- Next action: author the 25 A and 7 B items in manifest order, preserving the conventions, direct dependencies, source locators, and proof strategies above. The author must not turn the cone derivative calculation into a forward dependency on the later singular-locus material.
- Known limits are intentional, not unresolved blockers: projective Nullstellensatz is used only through the scaffolded homogeneous-prime consequences; the larger `Proj`/scheme/properness theory and the next page's product embeddings remain out of scope.
- Validation results:
  - JSON parse: pass for the pages manifest and coverage harvest.
  - `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-13.pages.json`: 32 scoped items, 0 errors, 0 warnings.
  - `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-13.coverage.json`: 1 page, 61 harvested results, 0 errors, 0 warnings.
  - `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-13.coverage.json`: 2/2 sources fetch-verified.
  - `node tools/validate-plan.mjs /tmp/frontier-31a-batch-13-plan-check.json --repo . --max-items 60`: pass after replacing only this pair in a temporary plan view; no item cycles, forward references, B-page dependencies, or unresolved ids. The validator's global note about 545 other unscaffolded pages is outside this batch.

## Step-3 fix pass

- Finding id: none supplied. The batch-13 paragraph in `research/frontier-31a-alpha-c-step3-scaffold-review.md` and its matching `batch: "13"` verdict in `research/frontier-31a-alpha-c-step3-verdicts.json` give the sole review conclusion, `sufficient`; they do not enumerate a repair finding. Disposition: applied with no manifest change. The review confirms the 25-A/7-B dependency spine and identifies `def-homogeneous-ideal-saturation` as the necessary backward definition for `J:x_0^infinity`, so removing, duplicating, or rerouting it would contradict the reviewed scaffold.
- Evidence: I reread the governing AV-3 design and the matching plan-spec records (orders 366.045/366.046 and the declared predecessor agree), checked all 32 manifest ids and explicit dependency arrays against the current item ledger, and found no duplicate, missing, or unresolved dependency. The coverage record's two existing fetch receipts pass `source-fetch-check` (2/2). A forced local receipt refresh hit the runner's DNS failure `EAI_AGAIN` for both hosts, so it did not replace those receipts; this is not a failed document URL, because direct full-PDF opens of the same official HTTPS URLs succeeded in the web reader. Those reads confirmed Milne Chapter 6's contents and Propositions 6.3, 6.15, and 6.22, plus Artin Chapter 3's contents, §3.2.7, §3.4.4, and §3.4.7--3.4.8. They continue to support the recorded projective-ideal, homogeneous-fraction, chart, and hypersurface portions of the spine.
- Changed scaffold record: none. `research/frontier-31a-batch-13.pages.json` and `research/frontier-31a-batch-13.coverage.json` are retained unchanged because the Step-3 review proposes no repair; this notes entry is the required explicit disposition. Post-fix validation passed: batch coverage checklist (1 A page, 61 harvest rows, 0 errors/warnings); source-fetch receipt check (2/2); whole-run manifest-only content policy (902 scoped items, 0 errors/warnings); and `validate-plan` on a temporary plan view with only this pair spliced in (no item cycles, forward references, B-page dependencies, or unresolved ids). Its repository-wide advisory that 545 future pages have no item lists is outside this batch and is not a validation failure.

## Step-5 authoring

- Authored all 32 manifest ids as draft items and wrote the two assigned pages under `library/algebraic-geometry/`. The A page contains the 25 infrastructure items; its examples companion contains the 7 declared leaves.
- The provenance remains literature-derived, with locally rewritten proofs marked ai-altered. `cex-inhomogeneous-equation-not-projectively-well-defined` is the sole author-generated statement and records `generation.role: counterexample`.
- Milne Chapter 6 and Artin Chapter 3 remain the sources, at the exact coverage locators already recorded above. The direct dependencies are exactly the manifest arrays; no forward or external dependency was added.
- Scope was retained: closure is saturated only for $A=V(I)$ with $I=I(A)$; degree is the reduced square-free convention; the cone derivative calculation remains an elementary characteristic-not-2 diagnostic. No planned claim was narrowed or dropped.
- Initial explicit-path precheck found phase numbering needing its canonical repair; those repairs were applied before the final validation pass. Remaining validation results and any blocker are recorded only after the required commands run.
- Final checks: `node tools/tsx-run.mjs tools/precheck.mts` with all 32 explicit batch paths passed (15 phase-format bodies checked, 0 failures); `node tools/content-policy.mjs research/frontier-31a-batch-13.pages.json` passed (32 scoped items, 0 errors, 0 warnings); and `node tools/proof-contract.mjs research/frontier-31a-batch-13.proof-contracts.json --strict` passed (15/15 proof-bearing items, 0 errors, 0 warnings).
- `node tools/validate-plan.mjs` without its required plan argument printed its usage. The complete invocation `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` then passed: it found no declared item-level cycles, forward references, B-page dependencies, or unresolved ids among the 800 pages with item lists. Its 493-page missing-item-list note is outside this batch.
- Blockers: none.
- A final arithmetic correction to the raw-homogenization counterexample records $I=(x-1,y)$, not $(x-1)$; its projective closure is consequently $V_+(X-Z,Y)$. The corrected counterexample precheck and the strict proof-contract check both pass. A focused renderer check of representative new item and page files also passed (5 files, valid YAML and KaTeX).
