---
id: lem-knot-decomposing-sphere-systems-cut-and-paste
kind: lemma
title: "Cut and paste of decomposing sphere systems preserves prime factors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - lem-knot-decomposing-sphere-realizes-connected-sum
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-nontrivial-knot-exterior-irreducible-boundary-incompressible
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.14–7.18, printed pp.96–98; especially Lemma 7.17 and the full text accompanying Figures 7.7–7.8"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Chapter 11 §§11.4–11.5, printed pp.162–168; uniqueness explicitly deferred to Schubert"
---

## Statement

Let $K$ be a smooth oriented knot and let $\mathcal S$ and $\mathcal S'$ be finite systems of pairwise disjoint smooth spheres in $S^3$, each sphere meeting $K$ transversely in two points, such that every knot obtained by capping the arcs cut off by the system is prime. Put the systems in transverse general position. The standard innermost-disk replacements and the replacement of a maximal factor ball across a disjoint sphere preserve the unordered list of capped prime knot isotopy classes.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Connected sums and prime knots]]

## Facts & Assumptions

**Given:** A smooth oriented knot and two finite systems of pairwise disjoint decomposing spheres satisfying the stated primeness hypothesis.

[F1] Each sphere meeting the knot twice cuts off two oriented arcs, and capping those arcs defines connected-sum factors, once the smooth ball identification is established. ([[lem-knot-decomposing-sphere-realizes-connected-sum]])

[A1] The current batch-57 page manifest and workspace do not contain the planned item `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`. Its actual hypotheses and proof are unavailable. The prerequisite map only provides a planned interface; that interface cannot justify irreducibility or incompressibility claims.

[A2] Burde–Zieschang Lemma 7.17's prose uses nested factor-ball cases and Figures 7.7–7.8. The innermost-curve proof in §7.18 leaves the two-point intersection case to Figure 7.8 and says the other case is similar; the figure alone does not supply the required full local isotopy argument.

## Proof

**Given:** The two finite sphere systems and the stated prime-factor condition.

1.1 If one system has a maximal factor ball disjoint from the other system, the intended replacement is to substitute the other system's separating sphere and compare the four subarcs in the nested balls. Burde–Zieschang state this move in Lemma 7.17, but the full preservation of the oriented capped knot types in the nested and non-nested cases is not established by the inspected prose and figure. [given, F1, A2]

2.1 If no such ball is disjoint, the cited proof chooses an innermost intersection circle, removes it by an isotopy or a sphere surgery, and repeats. The needed ball/isotopy justification and complete two-point case analysis are not supplied by the available item bodies or source prose. This lemma therefore remains unproved; the missing exterior irreducibility supplier is an additional prerequisite named in [A1], not a substitute for the local cut-and-paste proof. [given, F1, A1, A2, step 1.1]

## Owner escalation

Provide a complete prose proof of the annulus/sphere-system replacement, including all marked-point and boundary cases, and supply the actual batch-57 irreducibility/boundary-incompressibility item body. The affected consumer is `thm-schubert-prime-decomposition-for-knots`.

## Proof references

[[lem-knot-decomposing-sphere-realizes-connected-sum]]

[[lem-nontrivial-knot-exterior-irreducible-boundary-incompressible]]
