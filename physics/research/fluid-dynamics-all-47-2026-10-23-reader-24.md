# Reader report — batch 24

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: Step 3a reader  
Scope: batch `24`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-w02.md`
- `library/fluid-dynamics/fd-w02-examples.md`

Assigned items, reviewed in dependency order:

- `items/post-fd-no-slip-newtonian.md`
- `items/post-fd-periodic-newtonian.md`
- `items/pthm-fd-periodic-weak-continuation.md`
- `items/pthm-fd-smooth-consistency.md`
- `items/pthm-fd-bounded-weak-continuation.md`
- `items/pthm-fd-rectangular-weak-pressure.md`
- `items/rem-fd-thermal-coupling.md`

Page prerequisites opened for inventory and relevant context:

- `library/non-relativistic-classical-mechanics-mathematics/cm-math-fluid.md`
- `library/fluid-dynamics/fd-f01.md`
- `library/fluid-dynamics-mathematics/fd-w01.md`
- `library/thermodynamics/td-continuum-heat-model.md`

Direct in-run item suppliers opened before their assigned consumers included
the batch-3 `def-fd-quantity-and-frame-conventions`; batch-17
`lem-fd-rectangular-test-divergence-inverse`; and batch-22
`def-fd-periodic-solenoidal-spaces`, `def-fd-periodic-leray-hopf`,
`def-fd-weak-time-continuity`, `def-fd-bounded-solenoidal-spaces`,
`lem-fd-finite-mode-compactness`, `lem-fd-negative-space-nonlinear-bound`,
`lem-fd-bounded-solenoidal-basis`, `lem-fd-bounded-compactness`,
`lem-fd-no-slip-lsix`, `thm-fd-periodic-global-weak-existence`,
`thm-fd-weak-smooth-uniqueness`, `thm-fd-bounded-global-weak-existence`, and
`prop-fd-bounded-evolving-pressure`.

Other direct mathematical suppliers opened included the Axiom of Choice,
Countable Choice, Dependent Choice, the Picard–Lindelöf theorem, Tonelli's
theorem, the Fourier basis/Parseval theorem, distribution and derivative
definitions, and the test-function-space definitions used by the pressure
argument. Published fluid suppliers opened included
`thm-local-smooth-periodic-euler-viscous-solution` and
`lem-periodic-pressure-reconstruction`. For the thermal remark I opened
`def-td-rectangular-local-equilibrium-fields`, `post-td-local-energy-balance`,
`post-td-fourier-conductivity`, `pthm-td-fourier-entropy-production`, and
`pthm-td-neumann-heat-relaxation`.

## Repair

In `items/pthm-fd-smooth-consistency.md`, the proof had treated the smooth
mathematical supplier's torus as `(R/2πZ)^3`. Its exact dependency
`def-periodic-vector-sobolev-space-and-leray-projection` defines the torus as
`(R/Z)^3`, with characters `exp(2π i k·y)`. I corrected the local rescaling to
the unit torus:

\[
y=x/L,\qquad \tau=t/L^2,\qquad \widetilde u_0(y)=Lu_0(Ly),\qquad
v(t,x)=L^{-1}\widetilde v(t/L^2,x/L),\qquad
\pi_v(t,x)=L^{-2}\widetilde\pi(t/L^2,x/L).
\]

The period-`L` weights equal the unit-torus weights because
`L²|κ_k|²=4π²|k|²`; the time, transport, pressure-gradient, and viscous terms
all acquire the common factor `L⁻³`. I also corrected the supplier's visible
reference label to “unit torus” and updated the batch-24 proof contract's step
1.1, step 2.1, and rescaling calculation. The Statement and dependency graph
are unchanged. No `verification.judge` record was present.

Evidence: the exact period and Fourier convention in
`items/def-periodic-vector-sobolev-space-and-leray-projection.md`; the local
smooth theorem's domain and projected equation in
`items/thm-local-smooth-periodic-euler-viscous-solution.md`; and the period-`L`
convention in `items/def-fd-periodic-solenoidal-spaces.md`. The local smooth
existence source was also checked against Wiedemann/Skipper,
[Lecture Notes: Navier–Stokes Equations](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf),
§4.3, Theorem 4.14 (printed p. 31), and §4.4, Theorems 4.16–4.17 (printed
pp. 33–34). The repaired change is a proof normalization; it does not alter
the physical theorem's Statement.

## Remaining findings outside batch 24

`items/prop-fd-bounded-evolving-pressure.md` is a current-run draft supplier
owned by batch 22 and is not editable here. Its proof has two immediately
closable omissions, both routed to the assigned consumer
`pthm-fd-rectangular-weak-pressure`:

1. Proof step 1.1 constructs `π` on complex spacetime tests using `R`, while
   the actual divergence-inverse supplier
   `items/lem-fd-rectangular-test-divergence-inverse.md` defines `R` on real
   tests. No complex-linear extension is stated. Extend it by
   `R_C(f+ig)=Rf+iRg` and carry its continuity and support properties into the
   distribution construction.
2. Proof step 3.1 pairs a spacetime distribution `q` with the spatial test
   `θ(x)` alone. That is not a test function on `(0,∞)×Ω`. Define the temporal
   distribution `c(a)=⟨q,a(t)θ(x)⟩` and apply the normalization to `c` after
   decomposing an arbitrary spacetime test into its spatial mean-zero part and
   `a(t)θ(x)`.

Both omissions are nonfatal because the stated hypotheses give the direct
repairs above. The batch-22 producer changed after my initial observation, so I
reopened its current source. It now includes explicit fixed-support test
continuity for the distribution construction, while both omissions remain. The
current raw source SHA-256 is
`8d11856aebe51b5259c7a22eb570e19c8dc2551680f4f439ca173647ab81f8fe`; the
findings bind these current bytes. The JSON findings file records both as
`in-run-dependency` findings with the exact assigned consumer.

## Page verdicts

- `fd-w02`: pass. Draft physics A page; inventory matches the six assigned
  items; prerequisites and compact layout are consistent; body is empty.
- `fd-w02-examples`: pass. Draft physics B page; its example inventory contains
  `rem-fd-thermal-coupling`, it requires `fd-w02`, and its body is empty.

No TikZ or tikzcd diagrams occur in the assigned pages or items. No page or item
other than the authorized batch-24 repair was edited.

## Validation and coverage

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/pthm-fd-smooth-consistency.md` — passed; unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-fd-smooth-consistency.md` — passed (`1 checked, 0 failing`).
- `node tools/physics-support/proof-layout.mjs items/pthm-fd-smooth-consistency.md` — passed (`1 items, 4 steps, 0 defects`).

No blocker remains for this reader handoff. Coverage includes every assigned
page and item, every direct item supplier, and selected supporting mathematics
needed to check the arguments. I did not re-audit every transitive proof beneath
the extensive Sobolev, measure, and Fourier prerequisite chains; conclusions
about those suppliers are limited to the exact interfaces used in the inspected
items and the supporting results explicitly listed above.
