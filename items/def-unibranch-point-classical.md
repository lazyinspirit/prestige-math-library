---
id: def-unibranch-point-classical
kind: definition
title: Unibranch points of a classical variety
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
justified_by: []
aliases: []
deps: [def-normalization-affine-variety, thm-normalization-glues-variety, thm-normalization-finite-birational-surjective, lem-normalization-isomorphism-over-normal-locus, def-regular-map-image-and-fibre-classical, def-normal-point-and-normal-variety, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: branches of a curve and the normalization"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry (November 18, 2017 public draft), §29.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Assume the Axiom of Choice. Let $X$ be an irreducible classical variety over an
algebraically closed field with normalization $\nu\colon X^{\nu}\to X$
([[thm-normalization-glues-variety]]). A point $x\in X$ is **unibranch** when
the fibre $\nu^{-1}(x)$ is a single point
([[def-regular-map-image-and-fibre-classical]]).

The fibre is finite because $\nu$ is a finite morphism
([[thm-normalization-finite-birational-surjective]]), so unibranchness is the
statement that this finite fibre has exactly one element. In the curve case the
points of $\nu^{-1}(x)$ correspond to the local branches of $X$ at $x$, so a
unibranch point is one with a single branch in this normalization sense; over an arbitrary algebraically closed field this wording makes no reference to complex analytic topology.

**Recorded properties.** Every normal point is unibranch: over the normal locus
the normalization restricts to an isomorphism
([[lem-normalization-isomorphism-over-normal-locus]]), so the fibre over a
normal point is a single point, and a point of $X$ is normal exactly when its
local ring is an integrally closed domain
([[def-normal-point-and-normal-variety]]). The converse fails: the cusp on the
companion page is unibranch but not normal, and the node is not unibranch.
Unibranchness is a property of the point alone, read in the normalization; for
a reducible reduced variety one uses the full disjoint-union normalization of [[thm-normalization-glues-variety]], counting preimages on every component through $x$. A point on two distinct components therefore cannot be unibranch.
