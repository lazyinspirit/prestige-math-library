---
id: lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three
kind: lemma
title: "Standard and reflected two-sphere immersions have homotopic formal data in R^3"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-the-second-homotopy-group-of-so-three-vanishes, lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration, prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle, lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension, def-formal-immersion-between-smooth-manifolds, def-immersion-submersion-and-constant-rank-map, def-stiefel-space-grassmannian-and-tautological-bundle, def-homotopy-relative-and-path-homotopy, def-higher-homotopy-group-by-based-cubes, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; $\\pi_2(\\mathrm{SO}(3))=0$ is the algebraic content of the eversion and all formal framings of $S^2$ in $\\mathbb R^3$ are homotopic"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; difference classes in $\\pi_2(V_2(\\mathbb R^3))$ and the spherical case"
dependency_level: 4
---

## Statement

Let $\iota:S^2\hookrightarrow\mathbb R^3$ be the standard inclusion of the unit
sphere and let $a:S^2\to S^2$, $a(x)=-x$, be the antipodal map; equivalently
replace $\iota$ by $r\circ\iota$ for a reflection $r$ of $\mathbb R^3$, which
differs from $\iota\circ a$ by an orientation-preserving rotation of the
target. Then the formal immersions $(\iota,d\iota)$ and
$(\iota\circ a,d(\iota\circ a))$ lie in the same path component of
$\operatorname{FImm}(S^2,\mathbb R^3)$. More precisely, after moving their sections to a common basepoint value,
the characteristic-disk model and transport in the evaluation lemma give
based maps into $V_2(\mathbb R^3)\cong\mathrm{SO}(3)$. Their difference class
in $\pi_2(\mathrm{SO}(3))$ vanishes. This vanishing is the algebraic content
of eversion.

## Facts & Assumptions

**Given:** The unit sphere $S^2\subseteq\mathbb R^3$, the standard inclusion $\iota$, the antipodal map $a$, and the Stiefel bundle $E=V(TS^2,\varepsilon^3)\to S^2$ with fibre $V_2(\mathbb R^3)$.

[F1] $\iota$ is an immersion (its differential is injective at every point), and $a$ is a diffeomorphism, so $\iota\circ a$ is an immersion with derivative $d(\iota\circ a)=d\iota\circ da$; the pairs $(\iota,d\iota)$ and $(\iota\circ a,d(\iota\circ a))$ are formal immersions $S^2\to\mathbb R^3$. [[def-immersion-submersion-and-constant-rank-map]], [[def-formal-immersion-between-smooth-manifolds]]

[F2] For $M=S^2$, $n=3$: $E$ has fibre $V_2(\mathbb R^3)$; bundle monomorphisms over the identity correspond to sections; $\operatorname{FImm}(S^2,\mathbb R^3)$ is homotopy equivalent to $C^\infty(S^2,\mathbb R^3)\times\Gamma(E)$ via fibrewise polar normalization and the projection forgetting $f$ is a homotopy equivalence, so path components of $\operatorname{FImm}$ correspond to path components of $\Gamma(E)$. [[prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]]

[F3] The basepoint-evaluation lemma: for $E=V(TS^m,\varepsilon^n)$, evaluation at $x_0$ is a Hurewicz fibration on the section space; if the fibre is path connected, has $\pi_m=0$ and the section space is nonempty, then the section space is path connected. [[lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration]]

[F4] $\pi_2(\mathrm{SO}(3))=0$ and $\pi_2(O(3))=0$; $\pi_2$ is computed by based cubes, and $V_2(\mathbb R^3)$ is homeomorphic to $\mathrm{SO}(3)$ while $O(3)$ is the disjoint union of its two cosets of $\mathrm{SO}(3)$. [[lem-the-second-homotopy-group-of-so-three-vanishes]], [[def-higher-homotopy-group-by-based-cubes]]

[F5] $V_2(\mathbb R^3)$ is path connected, since $3\ge2+1$. [[lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F6] Path components are the equivalence classes of the relation "joined by a continuous path", and a homotopy of formal data is a path in $\operatorname{FImm}$. [[def-homotopy-relative-and-path-homotopy]]

## Proof

1.1 $E$ has a section: the differential $d\iota$ of the standard inclusion is a bundle monomorphism $TS^2\to\varepsilon^3$ over $\iota$, hence a section $s_\iota$ of $E$ by [F2]: for the standard metrics $d\iota_x(v)=v$ is already isometric. Thus $\Gamma(E)\ne\varnothing$. The fibre $V_2(\mathbb R^3)$ is path connected by [F5] and $\pi_2(V_2(\mathbb R^3))=0$ by [F4]. [F1, F2, F4, F5]

2.1 The section space $\Gamma(E)$ is path connected: by the evaluation-fibration lemma [F3] applied with $m=2$, $n=3$, the long exact sequence makes $\pi_0\Gamma(E)$ a quotient of $\pi_2(V_2(\mathbb R^3))$ as soon as $\Gamma(E)\ne\varnothing$, and that group is trivial by [F4]; equivalently the evaluation fibration is surjective on path components and its based section space has $\pi_0\cong\pi_2(V_2(\mathbb R^3))=0$. Hence any two sections of $E$ are joined by a path of sections. [F3, F4, step 1.1]

3.1 Consequently any two formal immersions $S^2\to\mathbb R^3$ lie in the same path component of $\operatorname{FImm}(S^2,\mathbb R^3)$: path components are the classes of the relation "joined by a continuous path" and a homotopy of formal data is a path in $\operatorname{FImm}$ [F6], so it suffices that by [F2] the space is homotopy equivalent to $C^\infty(S^2,\mathbb R^3)\times\Gamma(E)$ via fibrewise polar normalization and the first factor is contractible, so its path components are exactly those of $\Gamma(E)$, a single point by step 2.1. Applying this to the two formal immersions of [F1] gives that $(\iota,d\iota)$ and $(\iota\circ a,d(\iota\circ a))$ are homotopic through formal immersions. [F1, F2, F6, step 2.1]

4.1 For the difference-class description, first move both frame sections to one prescribed basepoint value by evaluation path lifting, using the path-connected fibre in [F5]. The evaluation lemma [F3] pulls them to the closed characteristic disk with the same, possibly nonconstant boundary map, and transports both disk models along a contraction supplied by a reference section. They then descend to based maps into $V_2(\mathbb R^3)\cong\mathrm{SO}(3)$; subtracting their classes in $\pi_2$ gives the difference obstruction. By [F4] this group vanishes, so the difference map is nullhomotopic and the two sections are homotopic, as already established in step 3.1. The two components of $O(3)$ are homeomorphic to $\mathrm{SO}(3)$, so their second homotopy groups vanish too. Replacing $\iota$ by $r\circ\iota$ for a reflection changes the target by a rotation relative to $\iota\circ a$: for $r(x,y,z)=(x,y,-z)$ take $A=\operatorname{diag}(-1,-1,1)\in\mathrm{SO}(3)$, and for any reflection $A=-r$ is likewise a rotation. A path of target rotations from $I$ to $A$ gives a homotopy of the corresponding formal data. Hence the reflected embedding has the same formal component as $\iota\circ a$. [F1, F2, F3, F4, F5, step 3.1] ∎
