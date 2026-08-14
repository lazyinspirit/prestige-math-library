# subjects-02 — orchestrator rulings on the reconciliation

Decided 2026-08-14 from `research/subjects-02-RECONCILIATION.md`. Priority order
is the standing one: mathematical accuracy first, then minimise forward
references, then preserve mathematical richness.

## S-1. The seven FR–FA ids go to **Fourier analysis**; FA-14 re-routes density

`def-dirichlet-and-fejer-kernels`, `lem-fejer-kernel-is-a-positive-approximate-identity`,
`thm-fejer-uniform-convergence-for-continuous-periodic-functions`,
`thm-dirichlet-jordan-pointwise-convergence`, `rem-gibbs-phenomenon`,
`cex-continuous-function-with-divergent-fourier-series-at-a-point`,
`ex-fourier-partial-sum-operators-and-uniform-boundedness`.

Seam §4 already assigns classical series convergence to `FR`. The complication
the reconciler found is real and is why this needed checking rather than
asserting: **FA-14 currently proves trigonometric density and completeness
*through* Fejér**, and says so explicitly. Moving Fejér later would make FA cite
forward.

The replacement route is verified available: complex self-adjoint
Stone–Weierstrass is already scaffolded in topology, and the trigonometric
algebra is unital, self-adjoint and separates points. **So FA-14 items 17–18 and
its proof plan are rewritten to obtain density from Stone–Weierstrass**, which is
independent of Fejér and creates no forward citation. `FR` mints the seven.

## S-2. The eight Calderón–Zygmund ids go to **FR-8**, and **FR moves below PDE**

`def-calderon-zygmund-kernel-and-principal-value-operator`,
`lem-calderon-zygmund-decomposition-at-height-lambda`,
`thm-calderon-zygmund-operator-has-weak-type-one-one`,
`lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`,
`thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`,
`rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`,
`cex-calderon-zygmund-strong-lone-bound-fails`,
`cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`.

Seam §4 puts singular-integral theory in `FR` and Sobolev/PDE consequences in
PDE. **But my own anchor choice made that unworkable**: I placed `FR` after PDE's
last page, so PDE-19 citing FR-8 would have been a forward reference — the
duplicate was masking an ordering error, not just an ownership one.

**`FR`'s anchor changes from PDE's last page to PROBABILITY's last page.** The
analysis band becomes measure theory → functional analysis → probability →
**Fourier** → PDE. `FR` needs only measure theory and functional analysis, both
below it; PDE-19 then cites FR-8 backwards.

The cost is one declared forward reference: `FR` cites PDE for Sobolev spaces and
Strichartz estimates, which PDE owns and which now sit above it. That is the
right trade — it is a single declared forward reference against homing all
general singular-integral theory inside a PDE elliptic-regularity page, where
complex analysis, probability and every later consumer would have had to reach
for it.

PDE-19 retains Hölder/Schauder theory, the Newtonian-potential Hessian and $L^2$
multiplier seed, the $W^{2,p}$ elliptic estimates, localisation and the
continuity method, its coefficient/boundary/modulus counterexamples, and the PDE
application of the FR theorem. It loses only the eight general objects.

## S-3. The 14 RL–DG ids rehome to **RL**; DG keeps its finite-dimensional boundary

Seven Verma ids and seven character ids. Seam §4 gives `RL` the
representation-theoretic superstructure — Verma modules, category $\mathcal O$,
the Weyl and Kostant formulas *proved* — and gives differential geometry the
finite-dimensional structure theory and classification. DG retains the three
finite-dimensional boundary results the reconciler identified as legitimately
its own.

## S-4. The 25 AT–DG ids are removed from DG; DG keeps the comparison

The whole ordinary singular chain/cochain apparatus: standard simplices and face
maps, the boundary operator and $\partial^2=0$, induced chain maps, the prism
operator and chain-homotopy formula, barycentric subdivision with its mesh lemma
and prism homotopy, cover-small chains, and the cohomology functoriality pair.
Seam §4 assigns singular homology and cohomology to `AT` and makes DG's 473/475
consumers.

**DG retains `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`
and `the-de-rham-theorem-and-degree` in full** — what it loses is the duplicated
construction of the singular apparatus, not the comparison theorem, which is
DG's own contribution and cites `AT`.

## S-5. The scope-expansion requests stay non-load-bearing

Six tracks asked whether to commission a new supplier. Default is **no**, and each
stays as its track already wrote it — a documented, sourced, non-load-bearing
leaf with the missing interface named:

- DT-32's $\Theta_7$ order computation (would need stable homotopy / stable stems)
- DT-24's simple-homotopy and Whitehead-group construction
- RL-9's Borel–Weil–Bott (would need `AV` flag-variety and equivariant line
  bundles)
- RL-10's Duflo theorem (would need a $\mathcal D$-module localisation engine)
- FR-13's Strichartz interface (would need a PDE dispersive page)
- RG-26's disintegration supplier

Each is recorded with `proved_here: false` discipline at build time rather than
dropped, and each becomes dischargeable when its supplier track is commissioned.
Commissioning any of them is a new scope decision, not a reconciliation outcome.

## S-6. Ordering fixes

- RG-28's forward reference to RG-29 is resolved by **reordering**, not by
  declaring it: swap the two so the property-(T) illustration follows its
  supplier.
- `AV` splices after `AT`'s last page; `RG` after `RL`'s last page — as §3 of the
  seam contract already specifies.
