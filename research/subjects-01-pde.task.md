# subjects-01 — `pde`

**You are an expert of partial differential equations.**

| | |
|---|---|
| track | `pde` |
| wave | 3 |
| file you own | `research/plan-pde-track.md` (**NEW**) |
| placement anchor | `probability-theory`'s last page |
| sibling tracks to read first | `research/plan-functional-analysis-track.md` (the finished `functional-analysis` track), `research/plan-measure-theory-track.md` (the finished `measure-theory` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- classification of second-order equations, characteristics, the method of characteristics for first-order and quasilinear equations, the Cauchy–Kovalevskaya theorem as a statement
- **harmonic functions in ℝⁿ**: the fundamental solution, the mean value property, the maximum principle, Harnack's inequality, Liouville in ℝⁿ, Green's functions, the Newtonian potential, Poisson's equation and interior estimates
- the heat equation: the fundamental solution, the Duhamel principle, the maximum principle, uniqueness and smoothing, backward ill-posedness
- the wave equation: d'Alembert, spherical means, Kirchhoff and Poisson formulas, finite propagation speed, energy methods, Huygens' principle
- **Sobolev spaces W^{k,p}** — you own these: weak derivatives, approximation by smooth functions, extension, traces, the Sobolev and Morrey embedding theorems, Poincaré inequalities, Rellich–Kondrachov compactness
- weak solutions of elliptic equations, the Lax–Milgram theorem, the Fredholm alternative for elliptic operators, existence and uniqueness
- elliptic regularity — interior and boundary — and the eigenvalue problem for symmetric elliptic operators
- variational methods: the direct method, minimisers, Euler–Lagrange equations, constrained problems
- semigroup theory for evolution equations if sourced: Hille–Yosida, analytic semigroups
- nonlinear first-order theory if sourced: Hamilton–Jacobi equations, viscosity solutions, scalar conservation laws, entropy conditions

## What you must NOT mint — cite it instead

- **`functional-analysis` owns distributions D′ and S′, the Fourier transform and Plancherel.** Read its finished file. You build Sobolev spaces ON its distributions; you do not re-mint the distributional framework or the Fourier transform.
- **`measure-theory` owns all of L^p**, including completeness and duality. Cite it.
- **`complex-analysis` owns the PLANE theory of harmonic functions** — the Poisson kernel on the disc, subharmonicity via holomorphic methods, Perron's method for plane domains, conformal invariance (its planned pages 327–330). You own the ℝⁿ theory. **Do not redo the 2-D theory**; cite it, and where the plane case is sharper say so and point there.
- Lax–Milgram may sit in either track — coordinate with `functional-analysis`'s finished file, take it only if that file did not, and say which you found.
- the published multivariable-calculus band is your classical foundation: the total derivative (229), mixed partials and Taylor (231), inverse and implicit function theorems (233), the Riemann integral in ℝⁿ and Jordan content (235), Fubini and change of variables (237), the fundamental theorems of calculus (239), line integrals and the gradient theorem (241). All authored — read them.

## Verified from disk by the orchestrator, 2026-08-13

- Definitional probes found exactly **one** published item mentioning "Sobolev" and none defining it. This track is greenfield.
- `inverse-and-implicit-function-theorems` at order 233 is authored with only **5 items**, which is thin for a page carrying two major theorems you will lean on. Open it and check what it actually proves before citing it; if it is genuinely thin, record an enrichment amendment.
- `the-fundamental-theorems-of-calculus` (239) carries 10 items and `line-integrals-and-the-gradient-theorem` (241) carries 31 — the divergence theorem and Stokes in ℝ³ may or may not be there. **Verify from disk** what vector calculus actually exists before assuming Green/Gauss/Stokes are available; the previous build found that no page homes Green's theorem in general form.
- Coordinate carefully with `differential-geometry` on Stokes: it owns the general Stokes theorem on manifolds. If your track needs the divergence theorem on a domain in ℝⁿ, decide with reference to its file whether you cite it or prove the elementary-region case locally, and say which.

## Source research

Evans *Partial Differential Equations* is the standard graduate primary. Hunter's UC Davis PDE notes and several full graduate lecture-note sets are openly available and harvestable. Gilbarg–Trudinger *Elliptic PDE of Second Order*, John *Partial Differential Equations*, Brezis (which doubles as your functional-analysis source) and Salsa are the further references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
partial differential equations, gather a rich corpus of lecture notes and other open-web sources,
and run the canonical-coverage harvest over the exact chapter ranges you read.
Where two sources disagree on a convention, record the disagreement and say which
the library adopts and why.

---

## Reminders that cost previous runs real time

- **`items[]` in `research/plan-spec.json` is the only honest signal** of what
  exists. A page with an empty `items` array is a plan, not a library page.
- **Absolute orders in the existing scaffold files are stale.** Use relative
  labels and page ids; the orchestrator computes orders at splice.
- **Check an id before coining it** — `ls items/ | grep -i '<name>'`. Ids are
  immutable on `main` and the unqualified name is often already taken by another
  category.
- **Never ask for a permission, and never let a subagent ask.** Record a blocker
  instead. You already hold every permission you need.
- **Write only the file you own.** Everything else goes in "Amendments owed".
