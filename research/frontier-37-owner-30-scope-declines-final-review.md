# Frontier 37 / Owner 30 — source-scope decline review

## Scope and method

I read `tools/scope-decisions.mjs` in full and verified that
`frontier-37-owner-30` is the active `.autopilot/` run. The current 30 batch
manifests contain 817 approved items. The ten per-group decision files contain
322 current `deferred` or `out-of-scope` source rows: 225 out-of-scope and 97
deferred.

For the row review, I compared the current coverage rows with their batch
`pages.json` claim inventories, current proof routes where needed, and the
relevant entries in `research/plan-spec.json`. I reused the current source
retrieval and pair-audit records; I did not refetch sources. In particular, I
used the group-C and group-D source-disposition audits, the source-disposition
audit for batches 1, 9, 10, 14, and 16, and the scope-repair reports for batches
24, 26, 27, and 29. I also checked the current B21 split-extension items
against the two newly present B22 decline rows and checked the published
Type-A Soergel category, relation, and equivalence items against B19’s
diagrammatics decline.

I refreshed only the ten per-group `frontier-37-owner-30-alpha-*-scope-decisions.json`
inputs, preserving prior decisions only where their exact row and closure
hashes still matched. I filled the current missing or invalidated rows with
row-specific evidence. No manifest, coverage, proof-contract, item, owner,
shared ledger, gate, or baseline file was changed. I did not retry the failed
gate or run a whole-frontier check.

## Per-batch dispositions

“Owner” means the row is recorded as `owner-decision` for the root to resolve;
it does not assert a final scope choice. The remaining rows are recorded as
`stands` with evidence in their own group input file.

| Batch | Current declines | Stands | Owner | Scope review |
|---:|---:|---:|---:|---|
| 1 | 16 | 16 | 0 | Markov models and alternative methods remain outside the approved inventory. The source-range mismatch is recorded below. |
| 2 | 17 | 17 | 0 | Current Minkowski and class-group items do not claim the declined applications or class-field results. |
| 3 | 18 | 18 | 0 | Current unit/S-unit and regulator claims do not include the declined examples, function-field results, or alternative methods. |
| 4 | 2 | 2 | 0 | The two declined claims are outside the current cyclotomic and Frobenius inventory. |
| 5 | 14 | 14 | 0 | The existing current decisions remain exact; current divisor/Picard items do not absorb the declined source claims. |
| 6 | 39 | 39 | 0 | Deferred divisor, Riemann–Roch, and duality claims have current B5/B7/B8 routes; higher-dimensional, inseparable, K-theoretic, and moduli results are outside B6. |
| 7 | 32 | 32 | 0 | Deferred duality results route to B8; the remaining rows are outside the current Euler-form Riemann–Roch claims. |
| 8 | 8 | 8 | 0 | Two Euler-form results route to B7; the other six are not needed for the curve duality/Riemann–Roch claims. |
| 9 | 8 | 7 | 1 | The seven Schauder rows have an appropriate future route; the fractional-Laplacian integral row’s destination does not claim that result. |
| 10 | 4 | 4 | 0 | Three claims route to current/planned Sobolev inequality or weak-solution pages; the capacity example is outside this pair. |
| 11 | 8 | 5 | 3 | Three deferred source rows include conclusions not covered by the named future items; see owner cases. |
| 12 | 9 | 9 | 0 | The Stein–Tomas input has a planned future route; the remaining rows are unused alternative proofs or adjacent claims. |
| 13 | 3 | 3 | 0 | Annular comparison, splitting, and sphere-theorem results are outside the current comparison inventory. |
| 14 | 8 | 8 | 0 | The RSK deferral has a named route; the other representation-theory extensions exceed this pair’s current claims. |
| 15 | 16 | 16 | 0 | Existing exact decisions remain current for the compact-group claims. |
| 16 | 10 | 10 | 0 | The principal-series example has a named route; the other induction functoriality and model results are outside the current claims. |
| 17 | 2 | 2 | 0 | Nearest addition and pairwise-hashing are distinct from the current double-tree and conditional-expectation claims. |
| 18 | 6 | 5 | 1 | Five perfect-complex/K-theory extensions are excluded; the A_m Burau row has an unresolved future destination choice. |
| 19 | 13 | 11 | 2 | The Rouquier relation and bundled link/KR result need owner routing. The graphical presentation is separately represented by published Type-A Soergel items and remains out of scope for B19. |
| 20 | 4 | 4 | 0 | Existing exact decisions remain current for the mapping-class and point-pushing claims. |
| 21 | 7 | 7 | 0 | Existing exact decisions remain current for configuration spaces, pure-braid extensions, and asphericity. |
| 22 | 14 | 14 | 0 | Current Artin-combing claims do not assert the split extension; B21’s current section and semidirect-product items are the separate route. |
| 23 | 7 | 7 | 0 | Existing exact decisions remain current for integral and modular Specht claims. |
| 24 | 2 | 2 | 0 | The new Chebyshev/Fekete harvest does not claim the separate zero-distribution theorem or conformal-map representation. |
| 25 | 9 | 9 | 0 | The current harmonic Hardy/Fatou inventory does not assert the declined general growth, singular-measure, or conjugate-kernel results. |
| 26 | 11 | 11 | 0 | The punctured-disc repair does not expand the pair to the distinct annulus, Tsuji, or geometric source results. |
| 27 | 9 | 9 | 0 | The repaired elliptic inventory covers the approved group-law and examples; unrelated Abel/divisor and modular classification claims remain deferred. |
| 28 | 14 | 14 | 0 | The annulus-modulus claim has a named future route; the other covering, orbifold, and boundary claims are outside the current uniformization inventory. |
| 29 | 5 | 5 | 0 | The current bounded-domain Hörmander/Levi route excludes the alternative complete-manifold and broader-weight claims. |
| 30 | 7 | 7 | 0 | The current single-equation hypersurface and plane-curve contracts do not claim the general analytic-set results. |
| **Total** | **322** | **315** | **7** | **All ten current group checks pass with zero errors.** |

## Rows requiring the root’s scope judgment

These exact rows are recorded as `owner-decision`; their current source rows
and hashes remain unchanged.

| Batch / decline ID | Source result | Why an owner choice is needed |
|---|---|---|
| 9 / `d27086314b87e103da0c09772e41aa40cb7f8c0bf982987ae0974c97c3a042bb` | Schikorra, Exercise 2.12: symmetric-difference integrability for the fractional Laplacian | The Bessel-potential destination has eight current items, including a weighted Fourier characterization, but no symmetric-difference integral representation or integrability estimate. Batch 9’s example is only the plane-wave computation. Decide whether to add an exact future claim route or retain this result outside the approved scope. |
| 11 / `0216d01f100c0140ba98c07f7336f4c579fe9a1676e1419c12bbdcfc65ab29b7` | Laugesen, Chapter 12, Theorem 12.1: periodic weak `(1,1)` | The named future Calderón–Zygmund item is Euclidean and does not cover the periodic endpoint. Decide whether to add a periodic claim/proof or retain it outside this pair. |
| 11 / `f369c87d6c25ac7e19c8bea7931b4e9a876259aabddab0f804e0d2ed7d1a9d4e` | Grafakos, §5.1.2, Remark 5.1.6: Poisson/conjugate limits | The future hard-truncation item covers only the a.e. truncation clause; the source remark also asserts Poisson-convolution boundary and strong `L^p` convergence. Decide whether to split/expand the future claims or exclude the remaining clauses. |
| 11 / `815870d90ef9ba8076b5e8a5fe2771b8bbdd250651dfbc2d78b2e73da8e94d68` | Grafakos, §5.1.3, Theorem 5.1.12: maximal Hilbert estimate | The planned maximal bounds and a.e. convergence do not state `L^p` convergence of the truncations. Decide whether to add the norm-convergence result and proof route or narrow the deferral. |
| 18 / `a4399fe8984c9a13ff684cdf59f7e0496ebeee3649f24ceb8068684a0142338e` | Khovanov–Seidel, Proposition 2.8: Burau representation for the specific A_m braid functors | B18 has no such claim. The plan names future categorical-braid and Burau pages, but both have empty current item arrays. Decide whether the row remains out of scope or is routed to a future approved claim. |
| 19 / `061eee4b44b6c1aa9cdda90ab8629009118cb5c7fe7702455c50b64b54ce3151` | Khovanov, Proposition 1: Rouquier complexes depend on the braid element | B19 is an abstract Hochschild/cyclicity pair. The planned Rouquier-relation page has no current item inventory. Decide whether to route the result there or retain the exclusion. |
| 19 / `01a81b5083b0b4e8e15c6fc139abf748e1c4cf302cc4f5320f8e5adc3e26ece1` | Khovanov, Theorem 1: closure-link invariant and reduced KR comparison | The source row bundles two claims assigned in the plan to separate future pages, both with empty current item arrays. Decide whether to split the future route or keep the bundle outside current scope. |

## Source-record followups, separate from the 322 decisions

- Batch 1’s plan-listed source-reading range includes Durrett §§5.7 and 6.1–6.3,
  while the current coverage source entries record a narrower read range. The
  batch-1 declines themselves stand, but the root should reconcile that plan
  source-range promise against the coverage catalogue or add a decision row
  for any retained read result.
- Batch 11’s Grafakos Theorem 5.1.5 reason describes the periodic square-identity
  context, while the source theorem is a real-line regularized boundary result;
  its out-of-scope disposition stands because no current item claims the general
  result, but the reason should be corrected if coverage metadata is later
  released for editing.
- Batch 11’s Example 5.1.11 coverage name calls it a “maximal transform of
  log-plus”; the cited example is the maximal transform of an interval
  indicator, with an absolute-logarithm value. Its out-of-scope disposition
  stands; the source-row label needs correction if coverage metadata is later
  released for editing.

## Narrow validation

I ran `node tools/scope-decisions.mjs check --run frontier-37-owner-30
--group <label>` separately for labels a through j. Each reported the expected
current row count and zero errors (322 current declines total). No whole-run
gate, broad validator, baseline operation, or Autopilot retry was run. The
seven `owner-decision` rows are mechanically valid inputs but remain for root
judgment as listed above.
