# Binding owner direction — `frontier-38-owner-30`

This direction is authorized for the existing run only. Preserve its run ID,
workflow state, completed Step-1 review receipt, and unrelated work. Do not
start a second controller or create another run.

## Exact selected scope

Build exactly these 30 A/B pairs. In this plan, each B page ID is the listed A
page ID followed by `-examples`.

| Category | A-page ID | A/B orders |
|---|---|---:|
| algebraic-geometry | `normal-varieties-normalization-and-zariskis-main-theorem` | 366.061/.062 |
| scheme-theory | `blowups-exceptional-divisors-and-strict-transforms` | 366.091/.092 |
| pde | `the-heat-kernel-and-the-cauchy-problem` | 458.011/.012 |
| pde | `sobolev-traces-and-zero-boundary-values` | 458.023/.024 |
| fourier-analysis | `calderon-zygmund-decomposition-and-singular-integrals` | 458.02605/.02606 |
| fourier-analysis | `fourier-restriction-and-the-stein-tomas-theorem` | 458.02617/.02618 |
| lie-theory | `projectives-standard-filtrations-and-bgg-reciprocity` | 510.009/.010 |
| lie-theory | `the-bgg-resolution` | 510.011/.012 |
| representation-theory | `the-hook-length-formula-and-rsk-correspondence` | 510.051/.052 |
| fourier-analysis | `character-groups-and-elementary-lca-duals` | 510.06501/.06502 |
| representation-theory | `peter-weyl-theory-for-general-compact-groups` | 510.073/.074 |
| braid-groups | `the-artin-action-on-a-free-group` | 743/744 |
| braid-groups | `lawrence-krammer-bigelow-and-linearity` | 747/748 |
| braid-groups | `oriented-links-braid-closures-and-markov-equivalence` | 749/750 |
| representation-theory | `frobenius-characteristic-and-the-symmetric-group-character-dictionary` | 801/802 |
| representation-theory | `jucys-murphy-elements-and-seminormal-forms` | 807/808 |
| complex-analysis | `analytic-hardy-spaces-and-canonical-factorisation` | 837/838 |
| complex-analysis | `level-one-modular-forms-and-the-j-invariant` | 847/848 |
| scheme-theory | `group-schemes-of-finite-type-over-a-field` | 871/872 |
| algebraic-geometry | `classical-complex-algebraic-actions-and-affine-embeddings` | 879/880 |
| algebraic-geometry | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` | 885/886 |
| algebraic-geometry | `groups-of-multiplicative-type-and-arithmetic-tori` | 887/888 |
| algebraic-geometry | `intersection-products-on-smooth-projective-surfaces` | 895/896 |
| algebraic-geometry | `point-blowup-resolution-on-arbitrary-regular-surfaces` | 901/902 |
| algebraic-geometry | `coherent-duality-on-projective-cohen-macaulay-schemes` | 903/904 |
| scheme-theory | `hilbert-functors-and-projective-hilbert-schemes` | 905/906 |
| algebraic-geometry | `etale-covers-and-the-etale-fundamental-group` | 911/912 |
| differential-topology | `oriented-and-mod-two-intersection-numbers` | 529/530 |
| differential-topology | `smooth-cobordism-relations-groups-and-rings` | 545/546 |
| differential-topology | `thom-spaces-normal-data-and-collapse-maps` | 547/548 |

Counts are AG 8, scheme theory 3, PDE 2, Fourier 3, Lie 2, representation 4,
braid 3, complex 2, and differential topology 3. The only removed original
pairs are Mackey (510.077/.078), compact-Riemann-surface Hodge (851/852), and
extremal length (859/860). Do not add AG-873, AG-877, PDE suppliers, or any
other pair.

## Local prerequisite construction

Preserve every commissioned claim and its hypotheses. If a necessary result is
not available from a published selected or published external supplier, put a
complete local prerequisite item on the consuming A/B page. Do not rely on an
unbuilt or unselected pair, citation-only proof, forward reference, or missing
item. Keep each page below 100 items; this is a hard ceiling, not a target.
Add only necessary items, with unique IDs, exact statements, full proofs,
source URLs and precise locators, actual item `deps`, and a dependency-ordered
proof plan. B-page examples should use the A-page items instead of duplicating
their proofs.

The directly affected local packets include:

- **879/880:** locally prove the affine action/coaction, locally finite
  coordinate-ring representation, torus grading dictionary, and equivariant
  finite-dimensional closed embedding. The published 873 pair is not a
  dependency. Carry Choice and any Nullstellensatz assumptions where actually
  used.
- **885/886:** locally supply the exact quotient, affine-normal subgroup,
  Barsotti–Chevalley reduction/descent, and abelian-projectivity results needed
  for the commissioned field hypotheses. Distinguish perfect-field uniqueness
  from arbitrary-field existence and nonsmooth subgroup cases. Do not rely on
  873/877.
- **887/888:** locally prove the diagonalizable-character and Galois-descent
  interfaces needed for finite-type multiplicative groups and tori. Retain the
  torsion distinction, continuous Galois action, and non-smooth `mu_p` example.
  The selected 871 pair and published Galois pages may be used; 873 is not a
  dependency.
- **903/904, 905/906, 911/912, and 747/748:** close every missing duality,
  flattening/Hilbert-functor, finite-étale descent/fundamental-group, and
  equivariant two-complex/H2 prerequisite locally, respectively. Preserve the
  full contracts, exact base categories, and source obligations.
- **547/548:** use the verified Stanford 215B Lectures 14–15, pp. 44–46,
  Theorems 138–139, for collapse/Thom pullback-PD; use May Ch. 23 §5,
  pp. 194–196, and the published AT interfaces for remaining Thom claims.
  Tubular charts must preserve the specified normal identification (identity
  induced normal derivative); prove choice-independence for that exact normal
  data. Do not assert unrestricted-chart independence, which is false.

Before removing any page-level edge to 873 or 877, the local item inventory,
full proof/source plan, and item dependencies must be present on each affected
consumer and independently audited. Then reconcile the exact edges in
`research/plan-spec.json`, local item `deps`, coverage/source matrices,
manifests, and generated tasks together. No selected page may retain a
reference to an unbuilt/unselected pair as an external prerequisite.

Keep previously verified corrections and dependencies: the normal-variety
pair remains at order 366.061 and uses its seven proved same-page AV-7 bridges
for projectivity, relative integral closure, and the global Zariski Main
factorization. Preserve all original claims; do not import later AV-15/17/19
pages as forward prerequisites. AV-8 and later consumers remain after it.
The BGG projective-Verma claim uses a finite block
truncation with its exact hypotheses; the Stein–Tomas HLS kernel exponent is
`beta=(n-1)/(n+1)` and the HLS order is `a=1-beta=2/(n+1)`; and the arithmetic
tori Galois-descent edge already recorded in the current plan remains.

## Gate and file discipline

All ordinary source, dependency, item, mathematical review, judgment, proof
layout, readiness, and closeout gates remain in force. Local source evidence
must reflect retrieved and inspected full text. Record uncertainty as a
blocker; never manufacture source access, proof completion, or gate success.
Search for and verify authoritative alternative full texts. A missing second
source locator by itself is not a reason to drop or block a pair when one
verified authoritative treatment is fully reproduced locally with every
prerequisite proved. This does not waive any proof, item-dependency,
mathematical-review, or certification gate. Preserve source uncertainties in
the run record.
Do not edit `.autopilot` runtime state or publish, deploy, push, or change
credentials, security, purchases, global configuration, or model lineups.
