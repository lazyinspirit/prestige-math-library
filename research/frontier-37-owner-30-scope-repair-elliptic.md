# Step 3a scope repair — Elliptic Functions and Complex Tori

Run: `frontier-37-owner-30`, batch 27, CA-EF-1.

## Disposition

The recorded Step 3a review found that the batch matched its short design table
but missed the plan’s normative harvest. I enriched only the assigned batch-27
manifest, coverage record, notes, and this repair report. The scope is now
carried in the manifest for the promised chord/tangent cubic group law and
uniformization homomorphism, rectangular inverse elliptic integrals, the
rank-one cotangent/conic comparison, and the canonical lattice basis.

The shared plan prose and `plan-spec.json` still describe the original twelve A
items and seven B examples. They were intentionally left untouched under the
assigned scope. The owner integrating this repair should update the CA-EF-1
design table, B companion paragraph, and reserved B-id list to match the
manifest. The B page also now requires the published
`harmonic-functions-and-the-poisson-integral` page for the Schwarz-reflection
step in the Jacobi inverse example, and
`mittag-leffler-and-runges-theorem` for the cotangent partial-fraction
expansion; add both prerequisites to the corresponding shared page plan. No
page order change is needed: both published pages precede CA-EF-1.

## Added scope and exact dependencies

| Added item | Level | Direct logical support |
|---|---:|---|
| `thm-elliptic-cubic-chord-tangent-group-law` | 7 | In-run: `def-complex-lattice-and-complex-torus`, `thm-weierstrass-p-addition-formula`, `thm-weierstrass-p-differential-equation`, `thm-complex-torus-weierstrass-cubic-isomorphism` |
| `ex-rectangular-weierstrass-function-and-elliptic-integral` | 5 | In-run: `def-complex-lattice-and-complex-torus`, `thm-weierstrass-p-normal-convergence-and-periodicity`, `thm-weierstrass-p-differential-equation`, `lem-weierstrass-p-degree-two-and-half-periods`; published: `thm-argument-principle-null-homologous-cycle`, `thm-harmonic-and-holomorphic-schwarz-reflection-principles` |
| `ex-rank-one-cotangent-uniformization` | 0 | Published: `def-complex-trigonometric-and-hyperbolic-functions`, `def-tangent-cotangent-secant-cosecant`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `thm-complex-sine-and-cosine-zero-sets`, `thm-mittag-leffler-expansion-of-pi-cotangent` |
| `ex-canonical-basis-of-complex-lattice` | 1 | In-run: `def-complex-lattice-and-complex-torus` |

The chord/tangent theorem defines the cubic operation by transport through the
existing biholomorphism, before using any cubic group law. For generic finite
nonvertical secants, the analytic addition identity gives the third
x-coordinate by Vieta; differentiation and the cubic differential equation
give the third y-coordinate as `−℘′(z+w)`. The third point is therefore
`R=Φ(−z−w)`, and the analytic involution `−Φ(s)=Φ(−s)` shows that the usual
reflected third point is `−R=Φ(z+w)=Φ(z)⊕Φ(w)`. This proves agreement of the
generic chord operation with the transported law directly. Letting `w→z`
gives the tangent divisor `2Φ(z)+Φ(−2z)`; if `3[z]=0`, the tangent has triple
intersection `3Φ(z)`. A vertical line gives `Φ(z)+Φ(−z)+O`; at a half-period
the finite point has multiplicity two, and `O` is simple. In the infinity
chart, `u=X/Y=−z/2+O(z⁵)` is a local coordinate and `v=Z/Y=−z³/2+O(z⁷)`, so
the line at infinity cuts `3O`. These are the nonvertical affine, vertical,
and infinity cases, and together prove the line-divisor sum with multiplicity
for every projective line. Associativity is then inherited from the torus.

The rectangular item records the real locus, conformal half-period rectangle,
inverse Weierstrass integral and period integrals, plus Stein–Shakarchi’s
Jacobi inverse map on a rectangle with horizontal side `2K` and vertical side
`K′`; successive reflections give periods `4K` and `2iK′`. Its reflection supplier is
published on `harmonic-functions-and-the-poisson-integral`. The B page retains
its A-page prerequisite, which already supplies the argument-principle page.
The rank-one item proves the `C/Z` exponential quotient and maps it to the
projective conic `YZ=X²+π²Z²` minus its two finite points over `x=±iπ`, including
the holomorphic extension at the cotangent pole and `−P′=P²+π²`. The canonical
basis item states Ahlfors’s reduced-region conditions and distinguishes the
hexagonal representative `e^(iπ/3)` from its excluded equivalent
`e^(2iπ/3)`. The cotangent item consumes its published partial-fraction
supplier on `mittag-leffler-and-runges-theorem`, now an explicit B-page
prerequisite.

No new edge points to another batch, so
`frontier-37-owner-30-batch-27.cross-batch-dependencies.json` remains `[]`.
The listed dependency levels are the checker-computed in-run levels: 7, 5, 0,
and 1.

## Coverage repair

- Milne Ch. 3 p. 47’s statement that the addition formula makes the torus/cubic
  map a homomorphism now maps to the new A theorem.
- McMullen 2010 Theorems 5.11–5.14 move from `out-of-scope` to `included` in the
  rectangular B example.
- The erroneous McMullen 2010 row that assigned Theorem 5.16 and Corollaries
  5.17–5.20 to the duplication-only B example now maps to the new A group-law
  theorem, with printed pages corrected to pp. 89–90. The B example remains
  responsible only for the analytic duplication computation it actually states.
- McMullen 2025 §§5.2–5.4 now map the addition law, rectangular real case, and
  rank-one conic to their new items.
- Ahlfors Ch. 7 §2.3 Theorem 2 now maps the canonical-basis harvest to its new B
  item.
- Stein–Shakarchi Ch. 8 §4.5 now maps the elliptic-integral rectangle and Jacobi
  inverse/period result to the rectangular B item.

No promised harvest claim was left as an unrecorded deferral. The existing
unrelated deferrals and out-of-scope rows remain unchanged.

## Structural checks

- Both JSON manifests parse.
- `coverage-checklist --require-destination`: 50 harvested results, 0 errors,
  0 warnings.
- `manifest-deps`: 25 batch items, 0 missing dependency arrays, 0 errors.
- `content-policy --manifest-only`: 25 scoped items, 0 errors, 0 warnings.
- Batch-27 dependency-level check: 25 items, 0 errors, maximum level 7; all
  four additions have the listed levels. The current whole-run check reports
  20 stale labels in sibling batch 9 only; no batch-27 level errors occur.
- `source-fetch-check`: all 6 coverage sources fetch-verified and resolved.

## Retrieval evidence

Selected passages were read from complete texts and their fetched files are
recorded in the batch coverage JSON. Retrieval details:

- McMullen, current 2025 Harvard notes: 181 pages, 2,018,310 bytes, SHA-256
  `d2d50d6112bcb0fc0d6eff4d5e4dc502fb414b6d1a5051ca8b222650064892a5`; §§5.2–5.4
  read. McMullen 2010 edition was also re-fetched and read at printed pp. 89–90:
  106 pages, 768,782 bytes, SHA-256
  `60f8ccafc4084b83e6973faad001eb50ebf73da47f652301011db81cb45f5b9f`.
- Milne, complete 134-page PDF, p. 47 re-read: 1,010,364 bytes, SHA-256
  `977f06a4e838c43c77a7c9398c090789e60d67f64e013e1dcd9bcce0e0c27b8d`.
- Ahlfors, complete 347-page Georgia Tech PDF, Ch. 7 §2.3 pp. 268–269 read:
  6,624,662 bytes, SHA-256
  `8aa98a45a8c074b96c4afc80e108cbfefe4c12f4a27f26fc07cfe5dbb8381265`.
- Stein–Shakarchi, complete 398-page McGill copy, Ch. 8 §4.5 pp. 245–247 read:
  3,086,881 bytes, SHA-256
  `7593f7d36e04422cf0a146d9331677b0b07fc0b6caba4d67cb0291ffb8138f71`. The
  plan-listed University of Naples URL yielded only five pages of front matter
  and contents (121,077 bytes; SHA-256
  `91d3b392fc16ee875c87c25ea91ad9b80edd5c37ac487368923aeeb6d1130685`); that
  response was not treated as chapter text.

## Remaining work and limits

This is a scope repair, not a proof-body authoring or review result. Step 3b
must write complete facts and arguments for the new items and satisfy the item
contract. The present batch still has only the original run readiness records;
no new ready receipt, scope decision, review certification, or mathematical
approval is claimed.
