# subjects-01 — `complex-analysis`

**You are an expert of complex analysis.**

| | |
|---|---|
| track | `complex-analysis` |
| wave | 4 |
| file you own | `research/plan-complex-analysis-track.md` (**ENRICH**) |
| placement anchor | in place, within the existing 303–356 band |
| sibling tracks to read first | `research/plan-measure-theory-track.md` (the finished `measure-theory` track), `research/plan-functional-analysis-track.md` (the finished `functional-analysis` track), `research/plan-pde-track.md` (the finished `pde` track), `research/plan-number-theory-track.md` (the finished `number-theory` track) |

This file already exists and is substantial. **Enrich it — do not restart it.** Read it fully first, reconcile every claim in it against `research/plan-spec.json` and the actual item files, and extend. Where you find a stale claim, correct it in place and say so in your summary.

---

## Your remit — what you mint

- the existing CA-1…CA-23 and SC-1… development — enrich it, do not restart it
- **the plane theory of harmonic functions**: the Poisson kernel and integral on the disc, Harnack in the plane, subharmonic functions via holomorphic methods, Perron's method and the Dirichlet problem for plane domains, conformal invariance, harmonic measure if sourced
- the Riemann zeta function and the Γ-function as function-theoretic objects — analytic continuation, the functional equation, the product formulas
- enrichment targets to research and judge on their merits: elliptic functions and modular forms, Riemann surfaces beyond the planned monodromy page, Hardy spaces and boundary behaviour, Fatou's theorem, the Nevanlinna theory or value distribution, potential theory in the plane, quasiconformal maps, and the further several-complex-variables material beyond the four planned pages

## What you must NOT mint — cite it instead

- **You run LAST precisely so that four finished tracks are available to you.** Read the finished `plan-measure-theory-track.md`, `plan-functional-analysis-track.md`, `plan-pde-track.md` and `plan-number-theory-track.md` before scaffolding your enrichment.
- `measure-theory` and `functional-analysis` land BELOW you in reading order. That is deliberate and it is your opportunity: L^p, the Lebesgue integral, Radon measures, Hilbert spaces and the Fourier transform are all citable, so Hardy spaces, boundary values and Fatou's theorem can be done properly instead of being deferred. Take that opportunity.
- `pde` owns the ℝⁿ theory of harmonic functions and cites YOU for the plane theory. Keep the plane theory sharp and complete; do not generalise into ℝⁿ.
- `number-theory` cites you for ζ's continuation and functional equation and owns the arithmetic consequences — PNT, Dirichlet's theorem, L-functions. Make sure your ζ page actually supplies what its file says it needs.

## Verified from disk by the orchestrator, 2026-08-13

- Only **one** page of this track is authored: `complex-differentiability-and-cauchy-riemann` (303, 28 items). CA-2 onward — power series, contour integration, Goursat, Liouville, the identity and open mapping theorems, winding numbers, singularities, residues, Rouché, Möbius, conformal mapping, harmonic and subharmonic functions, normal families, Riemann mapping, Weierstrass factorisation, Mittag-Leffler, monodromy, Γ, ζ, Picard, and all four several-variables pages — are planned and unauthored (305–356).
- Your file quotes STALE absolute orders throughout: it says CA-1 is order 243, and it is actually 303. Every order in that file is wrong by the same kind of drift. Do not propagate them; convert to relative labels and page ids where you touch a section.
- The file already carries an "Un-deferral ledger" and an "Amendments to existing scaffolds" section. Extend them rather than starting new ones, and record there anything you want changed in another track's file.
- Because you run last, you are also the natural place to notice a seam the other twelve missed. If you find one, record it in Amendments owed — the orchestrator reconciles all thirteen tracks after you finish.

## Source research

Ahlfors *Complex Analysis* and Stein–Shakarchi *Complex Analysis* are the standard primaries; Rudin *Real and Complex Analysis* bridges to the measure track. Conway, Remmert *Theory of Complex Functions*, Garnett *Bounded Analytic Functions* (for Hardy spaces), Forster *Riemann Surfaces* and Krantz *Function Theory of Several Complex Variables* (free AMS reprint) are the further references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
complex analysis, gather a rich corpus of lecture notes and other open-web sources,
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
