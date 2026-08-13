# subjects-01 — `measure-theory`

**You are an expert of measure theory.**

| | |
|---|---|
| track | `measure-theory` |
| wave | 1 |
| file you own | `research/plan-measure-theory-track.md` (**NEW**) |
| placement anchor | `stone-weierstrass-general-examples` — the earliest legal anchor, and deliberately the most useful one |
| sibling tracks to read first | _none — you are in wave 1 and depend on no sibling track_ |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- σ-algebras, generated σ-algebras, Borel sets, monotone class and π-λ theorems
- outer measure, Carathéodory measurability and the extension theorem; premeasures on algebras
- Lebesgue measure on ℝⁿ: construction, translation invariance, regularity, the non-measurable set and its choice cost, Vitali
- measurable functions, simple approximation, convergence in measure, Egorov, Lusin
- the Lebesgue integral; MCT, Fatou, DCT; comparison with the Riemann integral and Lebesgue's criterion (the criterion itself is PUBLISHED — cite it)
- L^p spaces ENTIRE: Hölder, Minkowski, Riesz–Fischer completeness, separability, density of simple/continuous functions, and the duality (L^p)* ≅ L^q
- finite product measures, Fubini–Tonelli, completion subtleties
- signed and complex measures, Hahn and Jordan decompositions, total variation, Radon–Nikodym, Lebesgue decomposition
- differentiation: Hardy–Littlewood maximal function, Vitali covering, Lebesgue differentiation theorem, monotone differentiability, functions of bounded variation and absolute continuity, the SHARP FTC, Banach–Zarecki
- Radon measures on locally compact Hausdorff spaces and the Riesz–Markov–Kakutani representation theorem
- measure-preserving transformations, Poincaré recurrence, ergodicity, and the Birkhoff and von Neumann ergodic theorems

## What you must NOT mint — cite it instead

- the ELEMENTARY measure-zero vocabulary is already published (`cantor-set-baire-and-measure-zero`, order 133) — covering-sense null sets, a.e., Jordan content, Lebesgue's Riemann-integrability criterion. `DEFERRED.md` §0 lists it. Do not re-mint any of it; build the σ-additive theory on top and say explicitly where the elementary notion is subsumed
- the Riemann integral, bounded variation and Riemann–Stieltjes are published (159–165)
- locally compact Hausdorff topology, Urysohn, Tietze, partitions of unity, paracompactness, Stone–Čech are all published (267–275)
- Sobolev spaces belong to `pde`; the Fourier transform and distributions belong to `functional-analysis`

## Verified from disk by the orchestrator, 2026-08-13

- **`DEFERRED.md` §1 is your explicit backlog** and you are expected to discharge it. Go through it result by result and say which of your pairs supplies each: the Lebesgue integral and its convergence theorems, the sharp FTC for absolutely continuous functions (the placeholder item is `rem-ftc-absolutely-continuous` on the published FTC page), Lebesgue's differentiation theorem, Banach–Zarecki, Vitali covering, Egorov, Lusin, L^p and Riesz–Fischer. Anything you cannot supply stays deferred WITH a reason.
- Definitional probes over all 4172 published items found **zero** definitions of "Lebesgue measure", "countably additive" or "σ-algebra", and exactly one item mentioning "outer measure". This track is genuinely greenfield.
- The `deferred-measure-and-integration` catalogue page sits at plan order 1 with an empty item list. Record in your Amendments-owed section what should become of it once this track lands.

## Source research

Tao *An Introduction to Measure Theory* (author-hosted, free) and Bass *Real Analysis for Graduate Students* (free) are both fully open and make good primary backings. Folland *Real Analysis*, Rudin *Real and Complex Analysis*, Stein–Shakarchi *Real Analysis*, Cohn *Measure Theory* and Bogachev *Measure Theory* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
measure theory, gather a rich corpus of lecture notes and other open-web sources,
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
