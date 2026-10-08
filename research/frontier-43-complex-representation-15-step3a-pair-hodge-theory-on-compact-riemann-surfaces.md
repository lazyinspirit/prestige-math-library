# Step 3a dispatch report — `hodge-theory-on-compact-riemann-surfaces`

- Run: `frontier-43-complex-representation-15` (batch 9, orders 1610/1611, `complex-analysis`).
- Pair: A `hodge-theory-on-compact-riemann-surfaces` (12 items) / B
  `hodge-theory-on-compact-riemann-surfaces-examples` (5 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the pair's promised scope (all design ids present id-for-id,
  source coverage adequate and re-verified, no unmet prerequisite found). Non-blocking owner
  observations are in §6.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-9.pages.json` (both pages, all
  17 items with statements, strategies, kinds, deps, levels), `...-batch-9.coverage.json` (source
  stamps and dispositions), `...-batch-9.notes.md` (Step-1 design reconciliation and corrections),
  `...-batch-9.cross-batch-dependencies.json` (`[]`), `...-scope-ledger.json` (both pages owed),
  `...-covers.json`.
- Design/prose: `research/plan-complex-analysis-track.md` §E pair **CA-RS-H** (its A inventory is
  the 12 rows in proof order, its B inventory the 5 named illustrations, its justification is that
  SC-5's local Dolbeault lemma plus partitions of unity do **not** prove finite-dimensional
  cohomology or Hodge decomposition, and its move instruction relocates
  `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` into this page);
  `research/plan-spec.json` rows 1610/1611 (ids, orders, requires, companion; both `items` arrays
  are empty, so the scaffold inventory is new and displaces nothing).
- Owner/run records: `...-owner-authoring-direction.md` (no batch-9 provision),
  `...-alpha-step1-drift-native.md` (this page: VERDICT `no-drift`; the line-bundle move
  introduces no gap or cycle).
- Sibling availability (read for the role audit only): batch-10 and batch-11 manifests.
- Sources: all three documents re-fetched live and the cited regions read in the extracted text
  (§3).

## 2. Design ∶ scaffold comparison (scope only)

Every design id is present with the same id and kind, in the design's proof order:

| design row (CA-RS-H, proof order) | batch-9 item |
|---|---|
| 1. line-bundle/meromorphic-section definition (moved from CA-RS-2) | `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` (definition) |
| 2. Hermitian metric and $L^2$ pairing | `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface` (definition) |
| 3. Chern connection | `thm-chern-connection-of-a-hermitian-holomorphic-line-bundle` (theorem) |
| 4. maximal $\bar\partial$ operator and Hilbert adjoint | `def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface` (definition) |
| 5. local adjoint/Laplacian formulas including ellipticity | `lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas` (lemma) |
| 6. Gårding estimate | `thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface` (theorem) |
| 7. compact Green boundary operator | `lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel` (lemma) |
| 8. finite-dimensional kernel and closed range | `thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range` (theorem) |
| 9. elliptic regularity | `thm-elliptic-regularity-for-dolbeault-harmonic-forms` (theorem) |
| 10. Hodge decomposition | `thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface` (theorem) |
| 11. finite-dimensional Dolbeault cohomology | `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional` (corollary) |
| 12. harmonic star duality | `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology` (theorem) |

The five B items are exactly the design's B inventory: flat torus harmonic representatives
(`ex-flat-torus-dolbeault-harmonic-representatives`), the sphere's vanishing
$H^{0,1}$ (`ex-dolbeault-h-zero-one-of-the-riemann-sphere-vanishes`), metric independence of
cohomology (`ex-dolbeault-cohomology-is-independent-of-hermitian-metric`), a non-harmonic exact
$\bar\partial$-form (`ex-nonharmonic-exact-dbar-form`), and the one-dimensional constant zero mode
(`ex-one-dimensional-constant-zero-mode-of-dolbeault-laplacian`).

Page metadata matches `plan-spec.json` exactly (orders 1610/1611, titles, kinds, category,
companions), and the 12 `requires` entries equal the design's "exact direct A requirements after
external suppliers exist" set (CA-RS-1 = `riemann-surfaces-branched-maps-and-differentials`,
SC-5 = `the-dbar-complex-and-integral-solutions`). Counts are 12 A + 5 B (cap 100). Reading the
statements: item 12 prints the duality $H^{0,1}(X,E)^*\cong H^0(X,K\otimes E^*)$ with the
conjugations forced by the first-variable-linear $L^2$ convention, exactly as the design demands;
items 4–10 assemble the global elliptic chain the design says SC-5 cannot supply; no promised claim
is dropped or weakened and nothing beyond the design's subject is asserted.

## 3. Source coverage

Three source rows on A (Demailly, Looijenga, McMullen) and two on B (Demailly, McMullen), all
stamped fetch-verified. I re-fetched all three documents on 2026-10-07 and reproduced the stamps
byte-for-byte:

- Demailly, *Complex Analytic and Differential Geometry*, 3 557 990 B, sha256_16
  `d7c7654a7417e832`, 455 pp. Read: Ch. V (12.2)–(12.3) Chern connection with $D''=d''$ and
  $D'\simeq_\theta H^{-1}d'(H\bullet)$ (PDF p. 269); Ch. VI (2.1) Sobolev lemma, (2.2) Rellich,
  (2.3) Gårding (PDF pp. 289–290); (3.5)–(3.6) the conjugate-linear $\#$ operator with
  $s\wedge\#t=\langle s,t\rangle\mathrm dV$ (PDF p. 292); (3.13)–(3.17) formal adjoint, harmonic
  forms, orthogonal decomposition and Hodge isomorphism (PDF pp. 294–295); (7.1) Dolbeault
  decomposition and (7.3)–(7.4) Serre duality with $\Delta''_{E^\star}(\#s)=\#\Delta''_Es$
  (PDF pp. 309–310). Every cited locator is present and supports the item it is attached to.
- Looijenga, *Riemann Surfaces*, 443 320 B, sha256_16 `0e56ac4ff91be48e`, 63 pp. Read: 3.25 star
  properties ($\star dz=i\,d\bar z$, $\star d\bar z=-i\,dz$, $\star^2=-1$), Prop.-Def. 3.27
  (harmonic iff holomorphic/anti-holomorphic parts closed), Prop. 3.28 (inner product complex
  linear in the first variable), Thm. 3.31 (Hodge–Weyl decomposition, stated without proof)
  at PDF pp. 37–39.
- McMullen, *Riemann Surfaces* (Harvard 213b), 1 128 808 B, sha256_16 `1442374a6f3a389a`, 183 pp.
  Read: Ch. 6 Hodge star/Hodge norm/harmonic 1-forms and Thm. 6.11 (printed pp. 60–61), Ch. 9
  printed p. 88 (Hodge theorem Thm. 9.12 and the smooth $E^1$ splitting), Ch. 14 printed p. 119
  (line bundles, canonical transition law $s_i=(dz_j/dz_i)s_j$, Thm. 14.1).

`coverage-checklist ... --require-destination` → `2 page(s), 34 harvested result(s), 0 error(s),
0 warning(s)`; every harvested row is disposed and each `included`/`inline` row names an existing
item. Two attribution nuances, recorded as reading rather than scope loss: (i) Looijenga Thm. 3.31
is disposed `included` against item 10, but the pair proves the Dolbeault/$\bar\partial$
decomposition, not the de Rham complex-1-form statement nor Cor. 3.32 ($\dim\Omega(S)=g$); the
row's own proof_mapping says so ("this pair proves the $\bar\partial$-form of it by the Demailly
route"), the de Rham side is parked with the divisors pair (McMullen Ch. 9 Thm. 9.12–9.13 recorded
`deferred`), and $\dim\Omega=g$ is owned by batch 11's
`lem-holomorphic-differentials-form-a-g-dimensional-space`; (ii) Looijenga Ch. 6 Thm. 6.7
(residue Serre duality) is mapped `included` on item 12 only as a shape cross-check, while the
residue-pairing duality is batch 10's (`thm-residue-pairing-for-line-bundle-cohomology`,
`thm-serre-duality-compact-riemann-surfaces`).

## 4. Prerequisite audit (unmet-prerequisite duty)

- The 17 items declare 139 distinct dependency ids: **127 resolve to published item files, every
  one carrying `status: published`**, and 12 are items of this same batch (the pair's own A items).
  0 missing; 0 resolving to another batch; `...-batch-9.cross-batch-dependencies.json` is `[]`.
- All 12 `requires` pages exist in `library/` with `status: published`
  (`riemann-surfaces-branched-maps-and-differentials` and
  `the-dbar-complex-and-integral-solutions` included).
- All 145 statement/strategy wikilinks resolve to a declared dep, a pair item, or a published item
  (script check: 0 unresolved). Dependency levels have 0 mismatches against
  `1 + max(level of in-batch deps)`; no cycle.
- No published item or page references any of the 17 new ids (checked `items/` and `library/`), so
  the move of the line-bundle definition into this page creates no dangling published consumer;
  this agrees with the design's zero-published-consumer note and the Step-1 no-drift verdict.
- Load-bearing published suppliers whose statements I read and matched against their declared use:
  `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles` (determinant
  convention, giving $\langle d\bar z,d\bar z\rangle_g=2/\rho$ for $g=\rho(dx^2+dy^2)$, which is
  what item 5's factor $2/\rho$ and item 2's pairing presuppose),
  `def-uniformly-elliptic-divergence-form-operator`,
  `thm-interior-h-two-regularity-for-divergence-form-equations`,
  `thm-interior-h-k-plus-two-elliptic-regularity`,
  `thm-local-lp-compactness-of-w-one-p-bounded-sequences`,
  `thm-fredholm-alternative-for-identity-minus-compact`,
  `thm-extension-theorem-for-bounded-smooth-domains`, `thm-higher-order-sobolev-embedding`,
  `def-dolbeault-cohomology-domain` (the published bundle-valued Dolbeault interface from SC-5),
  `def-riemannian-hodge-star`, `thm-hodge-star-is-a-smooth-bundle-isomorphism`.
- **Finding: no confirmed unmet prerequisite and no material uncertainty.** All suppliers exist
  with the needed hypotheses (smooth coefficients give the $W^{k+1,\infty}$ hypotheses of the
  interior-regularity items; the manifold Sobolev norms used by items 5–9 are defined inside item 4
  from the published Euclidean items plus partitions of unity). The only unread material is the
  long published proofs of the PDE suppliers, where I checked statements/hypotheses only —
  assembling them chartwise is the authors' burden at Step 3b, not a scope defect.

## 5. Intended role in the library

- The pair is the CA-RS-H station of the Riemann-surface track: it supplies exactly the global
  elliptic machinery that SC-5's local $\bar\partial$ lemma and partitions of unity cannot give,
  and the two structural consequences (finite-dimensional Dolbeault cohomology, harmonic-star
  duality) that the divisor/period theory consumes.
- Later pairs of this run declare **23 item-level dependencies on this pair's items**: batch 10
  (`divisors-riemann-roch-and-duality`) 16 deps, and batch 11
  (`periods-jacobians-and-abel-jacobi-theory`) 7 deps. Every consumer dep lands on an item present
  in this inventory (`def-holomorphic-line-bundle-...`, `def-hermitian-metric-...`,
  `def-maximal-dbar-operator-...`, `thm-hodge-decomposition-...`,
  `cor-dolbeault-cohomology-...-finite-dimensional`, `thm-harmonic-star-duality-...`). The B page
  is a leaf requiring only its A page.
- The design's deferrals are matched by the consumers: de Rham Hodge theory / sheaf-theoretic
  Serre duality / Riemann–Roch go to batch 10, and $\dim\Omega=g$ / periods to batch 11, so the
  pair does not pre-empt or starve those pages.

## 6. Non-blocking owner notes

1. Coverage attribution granularity (§3): optionally relabel the Looijenga 3.31 and 6.7 rows to
   `inline`/`deferred`; no scope action is needed.
2. Choice bookkeeping: items 4–12 and all five B examples assume AC (carried by the published
   Sobolev-localisation/compactness suppliers), item 2 assumes only CC, items 1 and 3 are
   choice-free. Batch 10/11 consumers inherit the assumptions through their item deps; no hidden
   use of a stronger principle was found.
3. The B page has no higher-genus example; the design's five illustrations deliberately use the
   torus and sphere, and genus-$\ge2$ computations would consume later pairs (periods,
   hyperbolic/uniformization). The example set does illustrate each A-page consequence: harmonic
   representatives, vanishing, metric independence, the exact summand, and the constant zero mode.

## 7. Decision and receipt

`sufficient`: the planned definitions, results and examples cover the design's intended subject
with verified sources, all prerequisites present, and every promised claim kept. Receipt:
`research/frontier-43-complex-representation-15-step3a-review-hodge-theory-on-compact-riemann-surfaces.json`
(recorded with `tools/step3-decisions.mjs record-scope`).
