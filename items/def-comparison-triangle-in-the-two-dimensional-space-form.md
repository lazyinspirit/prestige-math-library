---
id: def-comparison-triangle-in-the-two-dimensional-space-form
kind: definition
title: Comparison triangle in the two dimensional space form
status: published
origin: pipeline
deps:
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-constant-sectional-curvature-and-space-form
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Lemma 5.1 (law of cosines in the model plane) and Remark 5.4 (existence of comparison triples)"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, pp.21–25: model triangles and the spherical cosine law"
---

## Definition

Fix $k\in\mathbb R$ and let $M^2_k$ denote the complete, simply connected
two-dimensional Riemannian manifold of constant sectional curvature $k$, the
**two-dimensional space form**: the round sphere of radius $1/\sqrt k$ when
$k>0$, the Euclidean plane when $k=0$, and the hyperbolic plane of curvature
$k$ when $k<0$ ([[def-constant-sectional-curvature-and-space-form]]). Write
$d_k$ for its Riemannian distance.

A **comparison triangle** with side lengths $(a,b,c)$ is a triple of points
$(\bar x,\bar y,\bar z)$ of $M^2_k$ together with the three minimizing geodesic
segments joining them, such that
$$d_k(\bar y,\bar z)=a,\qquad d_k(\bar z,\bar x)=b,\qquad d_k(\bar x,\bar y)=c.$$
The **comparison angles** $\bar\alpha,\bar\beta,\bar\gamma$ are the Riemannian
angles at $\bar x,\bar y,\bar z$ between the two comparison sides meeting there
([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

The side lengths are part of the data and are required to be positive:
$a,b,c>0$, satisfying the strict triangle inequalities
$$a<b+c,\qquad b<c+a,\qquad c<a+b.$$
When $k>0$ the following two further restrictions are part of the definition:
$$a,b,c<\frac{\pi}{\sqrt k},\qquad a+b+c<\frac{2\pi}{\sqrt k}.$$
The first keeps every side shorter than a diameter of the sphere, so that no
two comparison vertices are antipodal; the second rules out the degenerate
configuration in which the three sides already exhaust two half-circles. No
upper restriction is imposed when $k\le0$, where the positive comparison sine
$\operatorname{sn}_k$ has no positive zero
([[def-comparison-sine-cosine-and-cotangent-functions]]).

The defining angle at $\bar x$ is the unique $\bar\alpha\in(0,\pi)$ determined
by the model cosine law, namely
$$\cos\bar\alpha=\frac{\cos(\sqrt k\,a)-\cos(\sqrt k\,b)\cos(\sqrt k\,c)}{\sin(\sqrt k\,b)\sin(\sqrt k\,c)}$$
for $k>0$, by
$$\cos\bar\alpha=\frac{b^2+c^2-a^2}{2bc}$$
for $k=0$, and by
$$\cos\bar\alpha=\frac{\cosh(\sqrt{-k}\,b)\cosh(\sqrt{-k}\,c)-\cosh(\sqrt{-k}\,a)}{\sinh(\sqrt{-k}\,b)\sinh(\sqrt{-k}\,c)}$$
for $k<0$; the two further angles are given by the same formulas with the roles
of the sides cycled, and the three angles always sum to more than $\pi$, equal
to $\pi$, or less than $\pi$ according as $k>0$, $k=0$ or $k<0$. The stated
side hypotheses make the right-hand sides lie in $(-1,1)$, so the model angle
exists and is unique in $(0,\pi)$. For $k>0$ the displayed identity is the
spherical law of cosines for the angular side lengths
$\sqrt k\,a,\sqrt k\,b,\sqrt k\,c\in(0,\pi)$, whose sum is less than $2\pi$.

Uniqueness is asserted **up to isometry of $M^2_k$**, including
orientation-reversing isometries: if $(\bar x,\bar y,\bar z)$ and
$(\bar x',\bar y',\bar z')$ are two comparison triangles with the same side
lengths, then there is an isometry of $M^2_k$ carrying one labelled triple onto
the other. Existence is part of this definition as a supplied model
configuration; the comparison theorems that use it only invoke the displayed
side lengths, the angle bounds $0<\bar\alpha,\bar\beta,\bar\gamma<\pi$ and this
uniqueness. For $k>0$ a side length equal to $\pi/\sqrt k$ or a perimeter equal
to $2\pi/\sqrt k$ gives a different, degenerate spherical configuration and is
excluded here; the terminal model endpoint is likewise excluded from the domain
of the comparison cotangent.
