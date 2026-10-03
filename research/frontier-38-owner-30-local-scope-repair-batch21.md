# Batch 21 independent scope review and repair

Run `frontier-38-owner-30`; pair `level-one-modular-forms-and-the-j-invariant`.
This is a scaffold scope repair and proof plan, not authored-item certification.
The engine scope writer's attempt-1 receipt ended successfully at
2026-10-02T18:55:30.950Z; its process was absent before editing. The parent
confirmed all scope writers drained and the controller paused at the owner hold.

## Finding and resolution

The exact historical flag is
`frontier-38-owner-30-step3a-review-level-one-modular-forms-and-the-j-invariant.json`,
with report `frontier-38-owner-30-step3a-pair-level-one-modular-forms-and-the-j-invariant.md`.
Its product/integrality omission is correct. Milne's promised Ch.4 range ends
with Theorems 4.21–4.22, not Proposition4.20. Merely changing the two misleading
coverage dispositions would lose promised results. Both results now have exact
local A-page carriers; the commissioned theta-product harvest also has its own
proved carrier. Original claims and hypotheses are retained except the explicitly
approved correction of the false quadrilateral image; the quotient and covering
claims remain intact. No item file, page file, owner receipt, global plan/ledger,
runtime state or configuration was changed.

| New A ID | Level | Exact result and local proof route |
|---|---:|---|
| `thm-jacobi-theta-triple-product` | 0 | Full two-variable triple product, its simple zeros, theta-constant nonvanishing; normal convergence, entire doubly periodic quotient, Liouville, then c(τ)=c(4τ) and cusp limit |
| `lem-jacobi-product-formula-for-the-discriminant` | 12 | Δ=q∏(1−qⁿ)²⁴, holomorphy/nonvanishing, integral coefficients; E₂ logarithmic derivative, generator constants, dim S₁₂=1 and coefficient stabilization |
| `cor-integrality-of-the-j-invariant-fourier-coefficients` | 13 | Integer coefficients throughout the convergent j Laurent series; integer coefficients of E₄³ and P, integer inverse recursion, explicit first three coefficient calculations |

Existing `lem-e2-transformation-law` moves from B to A unchanged in statement
and ID, at level3. Its proof plan now reproduces the entire regularisation
argument. Its previous unspecified sum-minus-integral limit was insufficient as
a local proof. The independent calculation uses the auxiliary half-normalised
H=(π²/6)E₂, not the manifest's full lattice Gₖ; shell bounds prove absolute
convergence, row derivatives bound the summable differences uniformly for
ε∈[−1/4,1/4], and a dominated tail calculation gives I′(0)=−π. Integral
comparison proves Σm^(−1−2ε)=1/(2ε)+O(1). Consequently the correction is
−π/(2 Im τ) and rescaling gives exactly −6ic(cτ+d)/π. ζ(2)=π²/6 is proved
locally by cotangent versus sine/cosine series; this E₂ argument needs no added
choice hypothesis. The existing Eisenstein/Δ/j chain retains its existing
countable-choice inheritance from the special-zeta-value supplier.

`def-level-one-eisenstein-series` changes only its scope-description clause:
“is not used in any proof on this page except the counterexample item of the
companion page” becomes “used in the discriminant product proof and in the
counterexample item of the companion page”. Its definitions and hypotheses do
not change. A-page items never consume a B-page item.

## Lambda defect and complete correction

`ex-modular-lambda-biholomorphism-onto-the-slit-plane` formerly identified the
interior of the standard ideal quadrilateral with C\{0,1}. This is false:
λ(i)=1/2 and the T law give λ(1+i)=−1, on the quadrilateral's vertical boundary.
Its Γ(2) orbit has no interior representative. The corrected interior image is
C\((−∞,0]∪[1,∞)). The same item keeps Y(2)≅C\{0,1} and the regular covering
with deck group Γ(2)/{±I}.

The proof plan establishes the full corrected interface. Maximal height in a
Γ(2) orbit exists by finite lattice denominators. T² and the matrices with bottom
rows (2,±1) reduce to |Re τ|≤1 and |2τ±1|≥1. Every other Γ(2) isometric disc has
c even, d odd; its rational centre cannot be −1,0,1. A centre inside (−1,0) or
(0,1) is at least its radius from both endpoints, so its disc lies in one of the
excluded semicircles. A centre outside the strip is at least its radius away.
Thus the height inequalities for a map and its inverse prove interior uniqueness
and exclude boundary/interior identification. Boundary images from T±¹(iy)
and (1 0;±1 1)(iy) are respectively negative and >1. Conjugation of the ℘ series
gives λ(−bar τ)=overline{λ(τ)}; an interior real value forces τ on the imaginary
axis and hence gives a value in (0,1). Surjectivity follows by reduction of a
preimage to the closed quadrilateral. The global surjectivity argument is also
repaired to justify exceptional sixfold Legendre fibres by polynomial
factorisation continued from generic values, rather than assuming generic
transitivity at the exceptional points. Holomorphy in τ is supplied by the
normal ℘ half-period series. All of this is in the exact same-item proof plan.

A search of every current run manifest and all items/library files found **no
consumer of this example ID**. No outside-consumer propagation is required.

## Full-text source evidence

All four complete PDFs were retrieved in this repair and extracted using PyMuPDF;
no access was inferred from URLs or page counts. Complete relevant arguments
were read, including the estimates omitted by the earlier scaffold.

| Source | Relevant complete arguments read | Bytes | SHA-256 |
|---|---|---:|---|
| Milne, MF v1.31 | printed pp.57–58, Thms4.21–4.22; normalisation and integrality | 1010364 | `977f06a4e838c43c77a7c9398c090789e60d67f64e013e1dcd9bcce0e0c27b8d` |
| Zagier, Elliptic Modular Forms | printed pp.19–22, Prop6 full Hecke limit and Prop7 full product proof, eqs18–24 | 1234019 | `95a76c0978676f85833317a553aaa0df91f4dd3545139bf89647b272fe83e33b` |
| McMullen, Math213a | printed p.96, Thms5.29–5.31/Cor5.32 and the λ quotient/triangle arguments | 768782 | `60f8ccafc4084b83e6973faad001eb50ebf73da47f652301011db81cb45f5b9f` |
| Stein–Shakarchi, Complex Analysis | printed pp.284–291, Props1.1–1.2, Thm1.3 and Cors1.4–1.5; §1.1 Thm1.6/Cors1.7–1.8 for disposition | 3076736 | `90bad53e84112adbb5fcb73e31feb64ff7dd142b2e5c35822227cac046db99b4` |

URLs and locators are in the manifest and coverage. Milne's product proof refers
the logarithmic derivative calculation to Serre; that missing step is supplied
locally by the complete Zagier route, not treated as proved by citation. The
Stein–Shakarchi product uses Q=e^(πiτ), whereas the modular form product uses
q=Q². No eta multiplier or half-weight branch enters the local proof. The
§1.1 half-weight transformations are explicitly disposed as an unused alternative
route to the retained E₂/℘ proofs, rather than claimed as supplied. Cor1.5 is
absorbed by differentiating the locally proved theta shift laws. No product
promise is deferred.

The removed X(2)≅P1 and abstract free-deck-group add-ons were not commissioned:
the twelve CA-MF-1 table rows (plan lines3927–3938) concern X(1), and the
companion lines3940–3944 promise λ and its slit-domain map. The normative Milne
harvest lines4784–4797 explicitly defers general congruence-subgroup theory to
number theory/modular curves. The historical scope report independently labels
these two clauses uncommissioned. Their earlier removal leaves no missing
promised result in this packet.

## Exact suppliers and recursive closure

- `thm-normal-convergence-of-holomorphic-products`: locally summable sup|fₙ−1|
  and eventual zero-free factors; used for Π and P, with explicit geometric
  majorants and their exact factors/zeros checked.
- `thm-weierstrass-convergence-holomorphic-functions`: locally uniform
  holomorphic limits and all derivative limits; used only after compact
  majorants for products, the theta series, ℘ series and coefficient limits.
- `thm-weierstrass-m-test-for-complex-function-series`: summable uniform real
  majorants, used for the Gaussian theta tail and ε-dependent row differences.
- `thm-mittag-leffler-expansion-of-pi-cotangent` plus
  `thm-complex-trigonometric-and-hyperbolic-power-series`: normally convergent
  paired cotangent expansion and sine/cosine Taylor series, used to compute
  ζ(2) without assuming the conditionally convergent two-dimensional sum is
  rearrangeable.
- `thm-ftc-second-part`: differentiable real primitive on a compact interval,
  integrable derivative; applied separately to real/imaginary parts. Improper
  limits are justified by explicit integrable tails, not an unproved interchange.
- `thm-double-series-fubini`: its statement is for real absolutely summable
  arrays; applied to complex arrays componentwise after absolute bounds.
- `thm-zero-complex-derivative-on-a-domain-implies-constant`: holomorphic quotient
  with zero derivative on the connected half-plane; no global log is assumed.
- `thm-liouville-bounded-entire-function` and
  `thm-zero-order-factorization-holomorphic-function`: entire quotient extended
  through each simple denominator zero, bounded by double periodicity on a
  compact parallelogram; neither premise is omitted.
- `thm-kernel-and-fibres-of-complex-exponential`: exact 2πiZ kernel identifies
  Π zeros and uniqueness of lattice representations.
- `lem-binomial-theorem-over-complex-numbers`,
  `lem-cauchy-product-of-absolutely-convergent-complex-series`,
  `thm-taylor-expansion-holomorphic-function`: finite integer coefficients,
  absolute analytic coefficient products and Taylor expansion on the full
  zero-free disc. Inversion is proved locally by recursion.
- In-run suppliers E₂, dim S₁₂, Δ nonvanishing, E₄ coefficients, Γ(2), λ
  transformation/fibre, Legendre j and local charts are used with exactly their
  stated weights, domains and normalisations; the scaffold proof plans were
  inspected and the new steps above close the identified missing bridges.

The recursive `deps` availability audit covers 39 local items and 133 distinct
direct published suppliers, 1786 dependency nodes in total. Every external node
has a published item file; no unresolved or draft external supplier exists.
This is an availability closure, **not a claim to reprove all 1786 published
items**. The exact used additional supplier proofs/interfaces listed above were
read; no defect requiring a published interface repair was found. No cross-batch
in-run edge or A-to-B edge exists. Scoped `research/frontier-38-owner-30-batch-21.scope-repair-contracts.json` contracts carry full local proof plans,
item dependency lists and current hashes. The three new items and changed E₂/λ
items are scaffold-ready; the parent owns current Step3 scope resolution and
later item certification.

## Validation and limitations

Local checks on the repaired carriers: manifest-deps 39 items/0 errors;
content-policy 39 items/0 errors/0 warnings; coverage-checklist 2 pages/69 harvested
results/0 errors/0 warnings; source-fetch-check 7/7 fetch-verified. The final whole-run
`item-dependency-levels` check passes: 815 items across 60 pages, maximum level16,
with no other-batch or batch21 errors. Every label agrees with
its computed level; additions are levels0,12,13. The pair has A26/B13 items.
Twenty missing/invalidated readiness records were refreshed in supplier-first
order; nineteen unchanged ready records were retained. All39 are current.
Exact lists and hashes are in the scoped contract file. No engine gate, source recertification of unrelated batches,
final mathematical acceptance or authored proof-layout check is claimed.

This is a small inventory enrichment (three items, no new pair), with substantive
local proof-plan repairs to E₂ regularisation and the λ example. The exact
historical insufficient scope receipt remains untouched for parent integration;
its old hash is intentionally stale after enrichment. Parent must record the
new inventory/scope resolution and refresh any current central evidence before
releasing the gate. No known unresolved mathematical uncertainty remains in the
repaired routes; final authoring/review still must realize these complete plans.
