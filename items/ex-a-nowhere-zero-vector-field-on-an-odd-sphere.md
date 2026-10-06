---
id: ex-a-nowhere-zero-vector-field-on-an-odd-sphere
kind: example
title: "A nowhere-zero vector field on an odd sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-converse-poincare-hopf-for-nowhere-zero-fields, cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic, def-euler-characteristic-of-a-compact-manifold, def-smooth-vector-field-as-a-tangent-bundle-section, def-induced-tangent-bundle-chart, lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses, thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors, cor-homology-of-spheres, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§5, printed pp. 30-31 (the explicit nowhere-zero tangent field on odd-dimensional spheres)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed p. 134 (existence for odd-dimensional spheres)"
dependency_level: 8
---

## Example

Let $m\ge1$ and identify $\mathbb R^{2m}$ with $\mathbb C^m$. The field
$$X(z):=iz=(iz_1,\dots,iz_m)$$
on the unit sphere $S^{2m-1}\subseteq\mathbb C^m$ is a smooth vector field
([[def-smooth-vector-field-as-a-tangent-bundle-section]]), tangent to the
sphere because $\operatorname{Re}\langle iz,z\rangle=
\operatorname{Re}(i|z|^2)=0$ on $|z|=1$, and nowhere zero because
$|iz|=1$. Hence $S^{2m-1}$ admits a nowhere-zero vector field, in agreement
with $\chi(S^{2m-1})=0$
([[cor-homology-of-spheres]]). Under the Axiom of Choice
([[def-axiom-of-choice]]), this also agrees with
[[cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic]] and
[[thm-converse-poincare-hopf-for-nowhere-zero-fields]]; for $m=1$ this is the
standard unit field on $S^1$.

## Facts & Assumptions

**Given:** The sphere $S^{2m-1}=\{z\in\mathbb C^m:|z|=1\}$, $m\ge1$, and the field $X(z)=iz$.

[F1] The real inner product on $\mathbb C^m\cong\mathbb R^{2m}$ is $\langle w,z\rangle=\operatorname{Re}\sum_jw_j\overline{z_j}$, so $\langle iz,z\rangle=\operatorname{Re}(i|z|^2)=0$ for every $z$.

[F2] Sphere homology gives rational Betti numbers $1$ in degrees $0$ and $2m-1$ and zero elsewhere, so $\chi(S^{2m-1})=1-1=0$ ([[cor-homology-of-spheres]], [[def-euler-characteristic-of-a-compact-manifold]]). The comparison with the general odd-dimensional and converse theorems is conditional on AC; the displayed sphere calculation uses no selection.

[F3] A smooth base chart induces tangent-bundle coordinates, whose transition maps are smooth with smooth inverses ([[def-induced-tangent-bundle-chart]], [[lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses]]). Here the sphere has an explicit finite atlas, so the canonical bundle structure can be constructed without the countable-choice assumption in the general smooth-vector-field interface.

[F4] A smooth curve through a point determines its tangent vector by its velocity ([[thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]]).
## Verification

1.1 The map $z\mapsto iz$ is $\mathbb R$-linear, hence smooth, with $|iz|=|z|=1$ on the sphere, so $X$ is a smooth nowhere-zero map of the sphere to itself. [F1, algebra]

1.2 Put $d=2m$. The $2d$ hemispheres $U_k^s=\{x\in S^{d-1}:sx_k>0\}$, $1\le k\le d$, $s\in\{-1,1\}$, have charts $\varphi_k^s$ deleting coordinate $k$, with image the open unit ball and inverse inserting $x_k=s\sqrt{1-|u|^2}$. They cover the sphere and have smooth transitions. Their induced bundle charts define a topology by pulling back Euclidean open sets; [F3] makes the definitions agree on overlaps. The bundle is Hausdorff: distinct base points are separated by inverse images of disjoint base neighbourhoods, and vectors over the same point are separated in one bundle chart. The inverse images of rational balls in these finitely many bundle charts give an explicitly countable basis. Thus [F3] supplies a smooth tangent-bundle structure without choice. Every other smooth base chart has compatible induced charts, so this is the canonical structure. [F3, construct]

2.1 For each $z$, the smooth curve $t\mapsto(z+tiz)/|z+tiz|$ lies in the sphere and has velocity $iz$ at zero by [F1], so [F4] makes $X(z)$ a tangent vector. In a hemisphere chart, its bundle coordinates are $(u,D\varphi_k^s(X((\varphi_k^s)^{-1}(u))))$: the fibre part simply deletes coordinate $k$ from $i(\varphi_k^s)^{-1}(u)$, hence is smooth. Therefore $z\mapsto(z,iz)$ is a smooth section of the canonical bundle constructed in step 1.2 and is nowhere zero by step 1.1. This proves the unconditional field claim, consistent with $\chi(S^{2m-1})=0$ by [F2] and, under AC, with the converse of Poincare-Hopf. [F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
