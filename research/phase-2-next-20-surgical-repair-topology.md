# Postfreeze surgical repair: topology consumers in batches 8 and 9

Date: 2026-09-11. Scope: group `e`, batches 8 and 9, limited to the five
active consumers named in the postfreeze audit. This is repair-author evidence,
not an independent audit. No published item was edited, no pair or page was
added, and no defect-ledger row was closed.

## Repairs

- `def-pullback-connection`: removed the load-bearing dependency on
  `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle`. The definition now
  gives the fibre product its subspace topology in `N x E`, writes both the
  pulled-back chart and its inverse, computes the overlap map, and establishes
  Hausdorffness and second countability from the product-manifold and hereditary
  suppliers before defining the pulled-back connection matrices.
- `def-vector-field-and-section-along-a-smooth-curve`: made the same construction
  for `gamma^*E` directly, including the explicit inverse chart, smooth overlap,
  the smooth-up-to-endpoint convention, Hausdorffness, and a two-basis proof of
  second countability. It no longer imports the affected pullback-bundle theorem.
- `ex-hopf-circle-fibration`: before using the quotient-circle homeomorphism,
  added the local calculation
  `sin(s-t)=0`, `cos(s-t)=1`, hence `s-t=m*pi` and
  `1=(-1)^m`, so `s-t` lies in `2*pi*Z`; the converse is periodicity.
- `ex-mobius-band-as-an-interval-bundle-with-monodromy`: added the scaled form
  of the same calculation, proving that the `2*pi` parametrization agrees
  exactly on integer-difference fibres before constructing the circle
  coordinate used by the numerating partition.
- `cex-a-surjective-map-need-not-be-a-fibration`: added that exact fibre proof
  before using it to force the unique positive-time lift
  `ell(s)=1-s/2`; subsequent proof steps and boundary references were renumbered.

The three batch-8 consumers now declare
`thm-sine-and-cosine-subtraction-formulas` and
`thm-sine-cosine-zero-sets-and-fundamental-period`. The two batch-9 definitions
now declare only the healthy product and hereditary topology suppliers used by
their local constructions. The exact entries in
`phase-2-next-20-batch-{8,9}.pages.json` were synchronized. The three changed
batch-8 proof contracts and the two batch-9 downstream contracts quoting
`def-pullback-connection` were regenerated with
`tools/regen-contract-entries.mjs`; existing boundary and risk-review records
were preserved, except for the counterexample's necessary step-number update.

## Focused verification

- `rendercheck` on all five item files: pass, five files, zero errors.
- `precheck` on all five paths: pass for all three proof-bearing items; the two
  definition files are non-proof-bearing and are covered by renderer/YAML,
  dependency, manifest, and citation checks.
- strict `proof-contract` on the three batch-8 targets: pass, 3/3.
- strict `proof-contract` on the two affected batch-9 downstream entries: pass,
  2/2.
- `citation-fidelity` on the complete batch-8 and batch-9 contracts: pass; 488
  citations checked, zero missing quotes or widening candidates.
- `content-policy` on both exact batch manifests: pass; 58 and 102 scoped items,
  zero errors and warnings.
- manifest/frontmatter dependency parity for the five target IDs: pass.
- `validate-plan research/plan-spec.json`: pass; declared order remains acyclic,
  with no unresolved IDs, forward references, or B-page dependencies in pages
  carrying item lists.
- `depcheck --quiet`: exit 0. It reports the existing repository-wide warning
  census but no cycle, unresolved reference, or draft item on a published page.
- `boundary-audit` over batches 8 and 9: completed; no contradicted
  dispositions or template reuse at or above three members.
- Active state was verified from `.autopilot/phase-2-next-20`: the run is paused
  at `8-receipt`, with nothing in flight.

## Exact SHA-256 after repair

| File | Before item hash from audit | After SHA-256 |
|---|---|---|
| `items/def-pullback-connection.md` | `c7f6db8bc324f7c4cd8cbee93d4f072db3ac9196dab2241cdb2bebd6fbd876f0` | `3d919179439d934b27c85df93bb0d71640b8f3f01d68c01fc8f648d63fc96503` |
| `items/def-vector-field-and-section-along-a-smooth-curve.md` | `334b52cf65e7ab873698deeeeb37e50c8cb78bdeac04fefd0c2aabe4cbd2353d` | `13a7dc5cabc2970f34e4c13afd837633cd693846c1ede5451f929a891abe713c` |
| `items/ex-hopf-circle-fibration.md` | `2e5dce6c620bc59f774b11eb53cce16793247e0fe646cb20fde3388a97a70aae` | `fade4f89a936bc7247eff4791c3b4ec266714b9b86a293a222a8e604fa2649db` |
| `items/ex-mobius-band-as-an-interval-bundle-with-monodromy.md` | `cff7d21a4b5434139f40f5a5895cfe6aeec259693699c334a3fa754a26ce55a3` | `e491a63e0fbeca54ba4416c2b1378f36f2433165407f5b161f52bc29b0e6ea80` |
| `items/cex-a-surjective-map-need-not-be-a-fibration.md` | `e95c1cfc7cdf09e77131b48d450f03257482598f4a56017594db79a5d2684417` | `e90f5f1b1cb0663a32d26ea4256fc39d214a07698e4324a057f9db9ba196b57d` |
| `research/phase-2-next-20-batch-8.pages.json` | — | `6f25df284db3459bb244773e0d207d2c9340122accf5a9f47aa40b6df39c4303` |
| `research/phase-2-next-20-batch-8.proof-contracts.json` | — | `b2716035380739101bf526defff9deb8dbe98c1c7d7f95aac7c2faddf4d7fd35` |
| `research/phase-2-next-20-batch-9.pages.json` | — | `d3a30ec73632af302f9f23eb9ef950e92e3bc8779bcb81fa2949a2a2e0d8ffd9` |
| `research/phase-2-next-20-batch-9.proof-contracts.json` | — | `28ff9406b574c072651cf3663138b12f421711a7ca478d44f927b9a16889b08d` |

The published supplier defects remain recorded for independent audit and later
published-item repair. These active consumers now contain local bypasses of the
affected clauses.
