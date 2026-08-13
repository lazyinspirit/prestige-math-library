# subjects-01 — `homological-algebra`

**You are an expert of homological algebra.**

| | |
|---|---|
| track | `homological-algebra` |
| wave | 2 |
| file you own | `research/plan-homological-algebra-track.md` (**NEW**) |
| placement anchor | in place, within the planned 381–392 band |
| sibling tracks to read first | `research/plan-category-theory-track.md` (the finished `monoidal-abelian-categories` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- chain and cochain complexes, homology and cohomology, chain maps, chain homotopy, the homotopy category
- long exact sequences, the connecting homomorphism and its naturality, mapping cones and cylinders, the horseshoe lemma
- projective, injective and flat objects; projective and injective resolutions; enough projectives and enough injectives; the comparison theorem
- derived functors: construction, well-definedness relative to a supplied choice of resolution (see the settled owner decision below), left and right derived functors, δ-functors and universality
- **Ext and Tor**: both constructions, balancing, Ext and extensions (Yoneda), Tor and torsion, dimension and global dimension
- spectral sequences: filtered complexes, double complexes, exact couples, convergence, the Grothendieck spectral sequence, Künneth and universal coefficients
- **group cohomology H^n(G,M) as a derived functor** — `group-theory` cites you for it and owns the low-degree group-theoretic interpretations
- derived categories and triangulated categories if you can source them properly; say honestly if they are out of scope for this pass

## What you must NOT mint — cite it instead

- **abelian categories, additive categories, biproducts, exactness and the diagram lemmas belong to `monoidal-abelian-categories`.** Read its finished file first and build directly on it. You do not re-mint the abelian-category axioms or the snake lemma.
- the tensor product of modules is `abstract-algebra`'s (planned page 106); modules, free modules and exact sequences of modules are published (102, 104).
- the de Rham complex, the Poincaré lemma and the de Rham theorem belong to `differential-geometry`, which cites your machinery. You supply the algebra; it supplies the geometry.
- Koszul complexes, regular sequences and depth belong to `commutative-algebra`, placed after your block.

## Verified from disk by the orchestrator, 2026-08-13

- **Owner decision SE-D3 (2026-07-28) is settled and binds you directly**: global choice is NOT adopted, and "L_nF is well defined" is therefore stated in its DATA-SUPPLIED form — a choice of resolution for each object is structure the reader supplies, and the conclusion is relative to that choice. Do not state the unconditional form. `research/scaffold-expansion-2026-07-28.md` §SE-D3 has the reasoning.
- `research/plan-algebra-track-expansion.md` §9 is titled "What this file provides to the concurrent homological-algebra scaffold". Read it — it was written for you.
- The prior scaffold for this material is in `research/plan-combinatorics-and-categories.md`. Read it as input; you may not edit it.
- Planned and unauthored in your band: chain complexes and homology (381), long exact sequences and mapping cones (383), projective and injective resolutions (385), derived functors (387), Ext and Tor (389), spectral sequences (391). Definitional probes found **zero** published items defining "chain complex".

## Source research

Weibel *An Introduction to Homological Algebra* is the standard primary; the Stacks Project (free) covers the same ground and is fully open and harvestable. Rotman *An Introduction to Homological Algebra*, Cartan–Eilenberg, Gelfand–Manin *Methods of Homological Algebra* and Hilton–Stammbach are the further references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
homological algebra, gather a rich corpus of lecture notes and other open-web sources,
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
