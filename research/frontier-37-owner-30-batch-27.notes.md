# Batch 27 Step-1 scaffold notes — Elliptic Functions and Complex Tori

Run `frontier-37-owner-30`, role beta, pages 845–846 in `complex-analysis`. I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the current plan, drift evidence, the complete CA-EF-1 design section, the seven published prerequisite pages and the relevant item statements/proofs before construction. No `research/frontier-37-owner-30-owner-authoring-direction.md` existed at construction time. The run status was Step 1 scaffold; earlier `*RESUME.md` files were not treated as live evidence.

## Design and current-plan comparison

The design (`research/plan-complex-analysis-track.md` §CA-EF-1, lines 3832–3876) names CA-7, CA-8, CA-10, CA-18 and CA-RS-1 as `requires`. `research/plan-spec.json` and the assigned manifest have those five corresponding complex-analysis pages **plus** the published `subspaces-products-and-quotients` and `covering-spaces-and-lifting` topology pages. This is the sole design/spec discrepancy found; the current plan controls, and both topology pages remain required. Titles, orders, category, companions and the twelve named A targets agree. The plan's item inventories for both pages remain empty because this beta may not edit the shared plan. No selected pair or page prerequisite was changed.

## Inventory and proof order

The A page has fourteen items: all twelve named targets and two necessary local suppliers. `lem-weierstrass-p-degree-two-and-half-periods` proves the two-sheeted fibre and half-period facts before the field, discriminant and cubic arguments. `thm-weierstrass-zeta-sigma-quasi-periodicity` proves the convergence, zero, logarithmic derivative and full-period quasi-period claims stated with the ζ/σ definition. The B page has seven worked items: oriented bases, a translated boundary, square and hexagonal lattices, half-period values, addition/duplication, a simple sigma zero, and a discriminant-zero orientation example. The last is an `ai-generated` terminal example and is not a dependency target. There is no inventory padding or weakening of the design claims.

Every item has explicit `deps` and `dependency_level`. The A levels range from 0 to 6; B levels range from 2 to 7. The scaffold was constructed in prerequisite order, with a `ready` record immediately after each item. One local correction strengthened `thm-weierstrass-lattice-discriminant-is-nonzero` to prove projective smoothness at infinity as well as affine smoothness, using published `thm-holomorphic-implicit-function-theorem`; its record and the four affected dependent records were rechecked and refreshed. All 21 current batch-27 records are ready, and the run-wide Step-1 decision check reports **zero batch-27 work**. These records certify proof strategies and examined dependencies for Step 1, not independent mathematical approval.

## Mathematics and actual dependency audit

The lattice convention is an oriented basis with `Im(ω₂/ω₁)>0`; replacing it by another oriented basis uses `SL₂(Z)`. The rank-two lattice is discrete. Small disjoint translates give holomorphic covering charts, a closed fundamental parallelogram supplies compactness, and projected straight segments make the quotient path connected. A generic boundary shift avoids the finite torus divisor. The zero/pole count and residue sum are proved by integrating `f′/f` and `f` around opposite edges, whose integrals cancel by periodicity. No genus classification or Riemann–Roch theorem is consumed.

The ℘ summand has an `O_K(|ω|⁻³)` tail; explicit lattice point counts give absolute normal convergence. The derivative series is reindexed to prove its periods, and evenness fixes the constants for ℘. The Laurent expansion at zero gives `g₂=60Σω⁻⁴`, `g₃=140Σω⁻⁶` and the cubic differential equation by cancellation of principal and constant parts. The unique double pole makes the torus-to-sphere map degree two. Oddness gives the three half-period zeros of ℘′, the divisor law makes them simple, and degree two makes their ℘ values distinct. This proves `Δ=g₂³−27g₃²≠0` *before* the cubic is called smooth. In the infinity chart `Y=1`, with `u=X/Y`, `v=Z/Y`, the cubic equation is `v−4u³+g₂uv²+g₃v³=0`, whose `v` derivative at `(0,0)` is 1. Near the lattice origin, `u=℘/℘′=−z/2+O(z⁵)` and `v=1/℘′=−z³/2+O(z⁷)`. The resulting map is injective. Surjectivity is explicit: ℘ has degree two and is onto the sphere, so every finite cubic x-coordinate occurs; the preimages z and −z give the two opposite y-values, while a half-period covers each y=0 point. The origin maps to the sole point at infinity. The smooth cubic is connected as the surjective image of the connected torus. Bijective holomorphy and the local normal form give a holomorphic inverse. The addition proof first fixes a generic second variable, checks the only possible poles at `±w` and the constant at zero, then extends as a meromorphic identity. The function-field proof descends even germs through the degree-two map (at a branch point, only even Laurent powers occur), applies the published sphere rationality theorem, and divides the odd part by ℘′.

For ζ/σ the product and sum have the same cubic lattice tail. Termwise differentiation and the published normal-product logarithmic derivative yield `ζ′=−℘` and `σ′/σ=ζ`; pairing opposite factors proves oddness and simple lattice zeros. The constants are `η_j=2ζ(ω_j/2)` for **full** periods `ω_j`, so `ζ(z+ω_j)=ζ(z)+η_j` and `σ(z+ω_j)=−exp(η_j(z+ω_j/2))σ(z)`. A boundary-free contour for ζ gives `η₁ω₂−η₂ω₁=2πi`. This matches DLMF's half-period normalization after doubling its periods and quasi-periods.

I inspected the relevant published statements/proofs of `thm-argument-principle-null-homologous-cycle`, `thm-residue-theorem-null-homologous-cycle`, `thm-local-normal-form-holomorphic-map-riemann-surfaces`, `thm-proper-holomorphic-map-riemann-surfaces-has-degree`, `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-normal-convergence-of-holomorphic-products`, `cor-logarithmic-derivative-of-a-normally-convergent-product`, the quotient and covering interfaces, and `thm-meromorphic-functions-riemann-sphere-are-rational`. Their used clauses have the needed hypotheses and direction. The read-only simulated plan with these 21 items passes the plan validator with no undeclared item/page prerequisite. A dependency-only transitive scan over the 21 local and 962 published items found no missing ID, no cycle and no `proved_here: false` result on a proof path. There is no cross-batch item supplier or new prerequisite pair. All seven A-page `requires` pages are published, including CA-RS-1; no planned supplier is treated as published.

No new item proof uses AC. The static transitive metadata closure nevertheless reaches `def-axiom-of-choice` through broad published interfaces: for example `def-quotient-topology → def-initial-and-final-topology → def-standard-topologies → thm-countable-union-of-countable → def-countable-choice → def-axiom-of-choice`, and `thm-compactness-under-continuous-maps → lem-finite-choice → def-axiom-of-choice`. Those paths do **not** spend AC in the clauses consumed here: quotient/final topology, continuous image of a compact space, rational-disc second countability, finite selections and the analytic convergence proof are all choice free. The published metric-continuity interface similarly needs Countable Choice only for its sequential converse, which this pair does not use. The batch therefore does not declare AC as an assumption or collapse the choice-free branch into an AC claim. It has no route to `deferred-set-theory-beyond-choice`.

## Published defect for the canonical owner ledger

**Exact item:** published `def-standard-topologies`, reached as metadata through published `def-initial-and-final-topology` from published `def-quotient-topology`; its cocountable clause says the cocountable family is a topology on arbitrary `X` without an axiom hypothesis. In its proof, the finite-intersection step cites published `thm-countable-union-of-countable`, whose statement explicitly assumes Countable Choice via published `def-countable-choice`. That citation does not establish the unqualified cocountable claim. The actual two-set union is provable in ZF: take the two available enumerations and interleave them, using published `lem-countable-iff-surjection-from-n` and `lem-subset-of-countable`; replace this citation and remove the unnecessary `thm-countable-union-of-countable` dependency in an owner-led published repair. No new planned supplier is needed. The current batch consumes only the **discrete/indiscrete degenerate-case** use of `def-standard-topologies` through the final/quotient topology chain, so this published proof defect is not an actual prerequisite for a batch-27 ready claim. This beta did not edit published content or the canonical ledger; the owner should transfer this exact finding there.

## Sources and harvested results

Two independent full lecture-note treatments were downloaded and inspected: [Milne, *Modular Functions and Modular Forms* Ch. 3 pp. 41–47](https://www.jmilne.org/math/CourseNotes/MF.pdf), complete 134-page PDF, 1,010,364 fetched bytes, stamp `977f06a4e838c43c`; and [McMullen, *Advanced Complex Analysis* Ch. 5 §5.1 pp. 79–90](https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf), complete 106-page PDF, 768,782 fetched bytes, stamp `60f8ccafc4084b83`. [NIST DLMF §23.2(i)–(iii)](https://dlmf.nist.gov/23.2) supplied an independent official notation/formula check, 161,433 fetched HTML bytes, stamp `c4799cff40944291`; the entire live section and equations 23.2.1–17 were inspected. Milne Prop. 3.12 abbreviates its first proof and appeals to later modular theory for the converse; the scaffold instead supplies the half-period/discriminant and infinity-chart arguments explicitly. No source retrieval failed, so no retry or `source_resolution` disposition is needed. McMullen Theorem 5.3 prints `C[x,y]/(F)` where it calls the object a function field; this quotient is an affine coordinate ring, not a field. Its Theorem 5.15 and the local field proof use the fraction field `C(x,y)` with the cubic relation, so the printed shorthand is not imported as a claim. The coverage file lists 43 source/canonical headings: 26 included, 7 inline, 7 deferred with valid destinations, and 3 out of scope with specific reasons. The original sources and all dispositions are retained.

## Checks and remaining run work

- `coverage-checklist --require-destination`: pass, 1 A page, 43 harvested rows, 0 errors/warnings.
- `source-fetch-check --stamp` and follow-up check: 3/3 complete sources fetch-verified and resolved.
- Whole-run `manifest-deps`: pass, 551 scoped items, 0 errors at the latest check. Whole-run `content-policy --manifest-only`: pass, 551 scoped items, 0 errors/warnings.
- `validate-plan research/plan-spec.json`: pass, but canonical plan still has this pair's empty item inventories and 319 planned pages without items at that check time. A read-only `/tmp` simulation inserting only batch 27's manifest items into the current plan: pass, no undeclared prerequisite, cycle or B-page dependency; 317 planned pages remain empty. Existing redundant-prerequisite warnings for this pair are already present in the plan and were not edited by this beta.
- `extcheck`: pass with 40 global warnings about unrelated published recorded-result consumers; `fwdcheck`: pass.
- `item-dependency-levels check --run frontier-37-owner-30`: exit 1 at the final check because 14 sibling pages still had empty inventories (batches 3, 6–8, 21–22 and 29). The three sibling example-label mismatches seen on an earlier check had been resolved by their owners. There were **zero batch-27 label errors**. The whole-run check must be repeated after the remaining sibling scaffolds finish.
- `step1-decisions check --run frontier-37-owner-30`: batch 27 has zero open/stale records; the whole run had 69 outstanding rows during concurrent scaffolding at the final check. Re-run after other batches finish.
- `research/frontier-37-owner-30-batch-27.cross-batch-dependencies.json` is `[]`; the derived frontier ledger was refreshed after writing the input. There are no cross-batch item or page uses to review for this consumer batch.

No item body, published page, shared plan, engine state or verdict was edited in this dispatch. Step 3 will still author complete arguments, and independent Step-3/Step-5 review must assess them.

## Step 3a scope repair — elliptic curves, inverse integrals, and canonical bases

The Step 3a scope review found that the manifest matched the short CA-EF-1 design
but missed four normative harvest promises and overstated one row. I repaired the
batch-27 scope carrier and coverage record without changing the shared plan,
engine state, readiness decisions, published items, or another batch.

- Added A item `thm-elliptic-cubic-chord-tangent-group-law` (level 7). Its direct
  in-run suppliers are `def-complex-lattice-and-complex-torus`,
  `thm-weierstrass-p-addition-formula`,
  `thm-weierstrass-p-differential-equation`, and
  `thm-complex-torus-weierstrass-cubic-isomorphism`. Its proof route transports
  the torus operation first, derives the third point of a generic secant from
  the analytic addition formula and cubic equation, then treats tangent,
  vertical, half-period, and infinity intersections with multiplicity. This
  proves the chord law agrees with the transported operation; associativity is
  inherited from the torus only after that agreement is established.
- Added B item `ex-rectangular-weierstrass-function-and-elliptic-integral`
  (level 5), supported by the lattice definition, ℘ periodicity, the cubic
  differential equation, the degree-two/half-period lemma, the published
  argument principle, and the published holomorphic Schwarz reflection
  theorem. It covers the rectangular real locus, conformal rectangle, inverse
  integral and period integrals, and the Stein–Shakarchi Jacobi inverse on a
  rectangle with horizontal side `2K` and vertical side `K′`; successive
  reflections give periods `4K` and `2iK′`. The B page now requires the published
  `harmonic-functions-and-the-poisson-integral` page for Schwarz reflection;
  its existing A-page requirement supplies the argument-principle page.
- Added B item `ex-rank-one-cotangent-uniformization` (level 0), using the
  published complex-trigonometric definitions/derivatives, sine zero set and
  cotangent Mittag–Leffler expansion. Its new direct published item dependency
  is supplied by `mittag-leffler-and-runges-theorem`, now explicitly included
  in the B page's `requires` closure. The cotangent pair is recorded on the
  projective conic, including the extension at its point at infinity; the
  image omits the two finite points over `x=±iπ`.
- Added B item `ex-canonical-basis-of-complex-lattice` (level 1), using the
  lattice definition and Ahlfors’s complete canonical-basis proof. With the
  selected region `−1/2<Reτ≤1/2`, the hexagonal representative is `e^(iπ/3)`;
  `e^(2iπ/3)` is its equivalent on the excluded left boundary.

The old McMullen 2010 coverage row for Theorems 5.11–5.14 is now `included` in
`ex-rectangular-weierstrass-function-and-elliptic-integral`. The row that had
claimed the chord/tangent group law was `inline` in a duplication-only example
is now an `included` group-law theorem row; the source locator is corrected to
printed pp. 89–90 (PDF pp. 90–91). Milne’s p. 47 homomorphism sentence is now
an explicit included row. The new 2025 McMullen source covers §§5.2–5.4, and new
Ahlfors and Stein–Shakarchi records map their promised results to B items. No
promised item is silently deferred. The cross-batch dependency file remains
empty: all new logical suppliers are either published or in batch 27.

### Full-text retrieval evidence added

- McMullen, 2025 Math 213a notes: complete Harvard PDF, 181 pages, 2,018,310
  bytes, SHA-256 `d2d50d6112bcb0fc0d6eff4d5e4dc502fb414b6d1a5051ca8b222650064892a5`;
  §§5.2–5.4 and proofs read. The old 2010 PDF was also re-fetched: 106 pages,
  768,782 bytes, SHA-256
  `60f8ccafc4084b83e6973faad001eb50ebf73da47f652301011db81cb45f5b9f`; Theorem
  5.16 and Corollaries 5.17–5.20 read at printed pp. 89–90.
- Milne, *Modular Functions and Modular Forms*: complete 134-page PDF,
  1,010,364 bytes, SHA-256
  `977f06a4e838c43c77a7c9398c090789e60d67f64e013e1dcd9bcce0e0c27b8d`; p. 47
  re-read, including “The addition formula shows that the map in the proposition
  is a homomorphism.” This matches the prior coverage stamp prefix.
- Ahlfors, *Complex Analysis*, 3rd ed.: complete Georgia Tech PDF, 347 pages,
  6,624,662 bytes, SHA-256
  `8aa98a45a8c074b96c4afc80e108cbfefe4c12f4a27f26fc07cfe5dbb8381265`; Ch. 7
  §2.3, Theorem 2 and its proof read at printed pp. 268–269.
- Stein–Shakarchi, *Complex Analysis*: the plan-listed University of Naples URL
  returned HTTP success but only a five-page front matter/contents PDF (121,077
  bytes; SHA-256
  `91d3b392fc16ee875c87c25ea91ad9b80edd5c37ac487368923aeeb6d1130685`), so that
  response was not treated as full text. The full 398-page McGill-hosted copy
  listed elsewhere in the plan was fetched instead: 3,086,881 bytes, SHA-256
  `7593f7d36e04422cf0a146d9331677b0b07fc0b6caba4d67cb0291ffb8138f71`; Ch. 8
  §4.5 was read at printed pp. 245–247.

These entries record scope and proof routes only. Step 3b must still author the
complete item bodies and establish every proof obligation; no mathematical
judgment or readiness receipt is claimed here.
