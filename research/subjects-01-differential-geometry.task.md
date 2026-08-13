# subjects-01 — `differential-geometry`

**You are an expert of differential geometry.**

| | |
|---|---|
| track | `differential-geometry` |
| wave | 3 |
| file you own | `research/plan-differential-geometry-track.md` (**NEW**) |
| placement anchor | `spectral-sequences-examples` — high, because the de Rham block needs the homological machinery |
| sibling tracks to read first | `research/plan-homological-algebra-track.md` (the finished `homological-algebra` track), `research/plan-measure-theory-track.md` (the finished `measure-theory` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- smooth manifolds: charts, atlases, smooth structures, smooth maps, partitions of unity on manifolds, submanifolds, embeddings and immersions, Sard's theorem and Whitney embedding as statements honestly sourced
- tangent and cotangent spaces, the tangent bundle, vector bundles, sections, the differential of a smooth map, rank theorems
- vector fields, integral curves and flows, the Lie bracket, Lie derivatives, the Frobenius theorem and distributions
- differential forms: the exterior algebra, pullback, the exterior derivative, interior product, orientation, manifolds with boundary, integration on manifolds and **Stokes' theorem in its general form**
- **the de Rham complex**, the Poincaré lemma, homotopy invariance, Mayer–Vietoris, and the de Rham theorem — citing `homological-algebra` for the machinery
- Riemannian metrics, the Levi-Civita connection, parallel transport, geodesics, the exponential map, completeness and Hopf–Rinow
- curvature: the Riemann curvature tensor, sectional, Ricci and scalar curvature, Jacobi fields, comparison theorems if sourced, and the **Gauss–Bonnet theorem**
- **Lie theory in full — the whole block is yours**: Lie groups, the Lie algebra of a Lie group, the exponential map, the adjoint representation, homogeneous spaces, AND the abstract structure theory of Lie algebras (solvable, nilpotent, semisimple, the Killing form, Cartan's criteria, root systems and the Cartan–Killing classification)
- symplectic manifolds and Hamiltonian mechanics if you can source them properly, or an honest scope denial

## What you must NOT mint — cite it instead

- **`homological-algebra` owns chain complexes, cohomology and the long exact sequence machinery.** Read its finished file and cite it; you supply the de Rham complex, not the general theory of complexes.
- `measure-theory` owns integration theory; coordinate on what integration on a manifold rests on and say explicitly whether your integral is the Riemann/Jordan one already published (235) or the Lebesgue one from that track.
- the published topology band is deep and directly usable: topological spaces (249), subspaces/products/quotients (251), connectedness (253), compactness (255), the topology of Euclidean space (257), separation axioms (261–265), **partitions of unity and paracompactness (269)**, metrization (275), homotopy and homotopy equivalence (289), the fundamental group (291). Read what you need rather than assuming.
- the published multivariable band supplies your classical calculus: the total derivative (229), inverse and implicit function theorems (233), Fubini and change of variables (237), line integrals (241).
- `pde` owns the ℝⁿ theory of harmonic functions; if you reach the Laplace–Beltrami operator or Hodge theory, coordinate rather than duplicating.

## Verified from disk by the orchestrator, 2026-08-13

- Definitional probes found **one** published item mentioning "smooth manifold", **zero** defining a chart, and **two** mentioning "differential form". This track is greenfield on top of a genuinely strong topology and calculus base.
- **You own Lie theory entirely, including the abstract structure theory of Lie algebras.** The seam contract routes it here rather than to `abstract-algebra` or `group-theory` deliberately: it is always developed as one block and half of it is inseparable from the smooth structure. Neither of those tracks will scaffold it, so if you drop it, nobody has it.
- `inverse-and-implicit-function-theorems` (233) is authored with only **5 items** and you will lean on it hard for the rank theorems. Open it and verify what it actually proves; record an enrichment amendment if it is thin.
- Your anchor is high, which is generous — everything in the library is below you. Use that: prefer citing published topology and calculus over rebuilding it, and flag anywhere the published statement is not quite the one you need.

## Source research

Lee *Introduction to Smooth Manifolds* and Lee *Riemannian Manifolds* are the standard graduate primaries. Hitchin's and Merry's differential-geometry notes are openly available with harvestable contents. Tu *An Introduction to Manifolds*, Warner *Foundations of Differentiable Manifolds and Lie Groups*, do Carmo *Riemannian Geometry*, Spivak, and Humphreys *Introduction to Lie Algebras and Representation Theory* are the further references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
differential geometry, gather a rich corpus of lecture notes and other open-web sources,
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
