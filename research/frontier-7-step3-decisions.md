# Frontier 7 — Step 3 scaffold adjudication

**Decision maker:** orchestrator, 2026-08-01.  This log was made from the
batch manifests, contracts, notes, and cited published items on disk.  It is a
scaffold decision record; it does not certify prose that has not yet been
written.  The four approved manifests contain 185 item declarations and pass
`node tools/content-policy.mjs --manifest-only research/frontier-7-batch-*.pages.json`.

## Batch 1 — normal subgroups; Eulerian/Hamiltonian graphs

| recommendation | decision | rationale |
|---|---|---|
| Replace the stale normal-subgroup prose with the expanded AA-3 scaffold, including the quotient construction and its well-definedness iff. | approved | The proposed dependencies are published or earlier on the same A page.  The iff is central to the definition, and the planned contract explicitly retains both directions. |
| Put the proved identification of `Z/n` with `(Z,+)/nZ` on the A spine, covering the library's `n=0` and `n=1` conventions. | approved | This avoids a B-leaf dependency and requires agreement with the published congruence construction rather than an unlicensed isomorphism claim. |
| Correct Euler-trail existence from “exactly two odd vertices” to “zero or two,” reserving exactly two for an open trail. | approved — fatal pre-authoring falsehood removed | A closed Euler circuit is an Euler trail and has zero odd-degree vertices.  The old assertion was false. |
| Correct the direction between Dirac and Ore conditions. | approved — fatal pre-authoring falsehood removed | Dirac's minimum-degree condition implies Ore's degree-sum condition; the converse need not hold. |
| Drop the proposed false-statement prompts and the Petersen item; use explicit bounded witnesses instead. | approved | The proposed prompts were false assertions rather than safely scoped refutation items.  No short dependency-closed Petersen proof was supplied, so deferral is preferable to an opaque case check. |
| State Camion only for tournaments of order at least three and lock the directed/undirected loop conventions. | approved | This matches the existing local cycle convention and prevents singleton/loop ambiguity. |

## Batch 2 — logarithm/powers; sine/cosine/pi

| recommendation | decision | rationale |
|---|---|---|
| Restrict the rational-supremum construction to `a>1`, define subunit bases reciprocally, and treat `a=1` separately. | approved — fatal pre-authoring falsehood removed | If `0<a<1`, then `a^q` is unbounded above as rational `q` tends to negative infinity. |
| Replace `2^n(x^(1/n)-1)` by the dyadic-root limit `2^n(x^(1/2^n)-1)`. | approved — fatal pre-authoring falsehood removed | For `x != 1`, `x^(1/n)-1` is asymptotic to `log(x)/n`, so the former displayed expression diverges in magnitude. |
| Keep finite initial zero factors in the signed infinite-product criterion; take logarithms only on the eventually positive tail. | approved | This matches the library's existing product convention and removes an unjustified global nonzero-factor hypothesis. |
| Prove the two-point exponential inequality directly rather than importing the in-flight convexity page. | approved | The direct one-variable calculus route is dependency-closed and avoids an unnecessary cross-batch edge. |
| Bind the analytic construction of pi to the cosine-zero proof order; retain sector area only as a scoped refutation. | approved | The order prevents a circular geometric calibration of angle measure and keeps the first-sine-zero assertion downstream of the shift formulas. |
| Update the published oscillator orientation remark to add later sine examples. | deferred until a publish-authorized scope change | The newly built items remain drafts in this run, so the old published wording is not yet false.  It is not an in-flight or published-dependency repair authorized at Step 3.  Preserve the exact proposed amendment in the batch notes for the publication-time scope-denial pass. |

## Batch 3 — convexity; total derivative

| recommendation | decision | rationale |
|---|---|---|
| Introduce the source-backed Euclidean special-case definition of a linear map and the matrix/boundedness lemma. | approved | The planned general linear-map page is not built.  Without this local definition, the target of the total derivative is undefined.  The future-agreement remark must remain non-load-bearing. |
| Replace the connected-open-set zero-derivative theorem with the convex-open-set form. | approved — fatal forward-use avoided | The general connectedness and Euclidean polygonal-connectedness items are later in plan order.  The convex-open statement follows from the mean-value inequality without a hidden topology dependency. |
| Remove duplicated B-page examples and retain only nonduplicative witnesses. | approved | Re-minting existing B-page claims would either duplicate public content or tempt a prohibited B-to-B dependency. |
| Use the elementary disconnected-domain locally constant map for the nonconvex global-Lipschitz failure, marked `ai-generated` and non-load-bearing. | approved with heightened audit requirement | The witness is directly checkable: points on opposite sides of zero can approach while the map values remain separated.  Step 5 must include the required generation record and Step 6 must test the exact quantifiers/counterexample. |
| Use `x^2y/(x^2+y^2)` for directional derivatives without total differentiability. | approved | This is the cleaner source-backed witness, and total differentiability would force the directional-derivative map to be linear. |

## Batch 4 — Tychonoff/Stone–Čech; metrization

| recommendation | decision | rationale |
|---|---|---|
| Split the Tychonoff embedding, compactification, and Stone–Čech universal-property obligations explicitly and state the available choice hypotheses. | approved, with a declared prerequisite addition | The evaluation construction, cube compactness under the ultrafilter lemma, and the compact-Hausdorff-to-Tychonoff route under DC are distinct dependencies on disk. The full validator found that the productive/hereditary separation lemmas require the published `hereditary-and-productive-separation` page, so that page was added to `requires` in both the manifest and plan. The plan must not call the universal property a mere consequence of cube compactness. |
| Replace the terse metrization block with compatible-normal-sequence, sigma-base, and locally finite merger lemmas. | approved | The hard directions of Nagata–Smirnov, Bing, and Smirnov need named proof obligations.  Each theorem retains regularity and `T_1` as separate hypotheses, matching the library convention. |
| Retain Choice as a stated sufficient assumption for the supplied metrization proofs. | approved | This avoids falsely asserting an exact ZF strength while matching the intended well-ordering/cover constructions. |
| Correct three false-statement B-page dependencies that cited B-page witnesses. | approved — fatal leaf-rule violation removed | The first manifest had three B-to-B edges.  The corrected manifest makes each refutation self-contained from A/published premises; the persistent manifest-only gate now passes. |

## Global Step-3 conditions for Step 4/5

1. Alpha applies every approved prose amendment exactly once and records any
   source-text mismatch rather than silently generalising it.
2. No batch may add an unapproved cross-batch dependency.  The current approved
   scope has none.
3. Every authored mathematical item gets the planned provenance label and source
   URL; the generated disconnected-domain witness receives the required
   `generation` record and no consumer outside its own exposition.
4. Step 5 treats the contracts as obligations to reconcile against actual prose;
   their current `risk_review` values are intentionally pending until independent
   Step-6 reading.
