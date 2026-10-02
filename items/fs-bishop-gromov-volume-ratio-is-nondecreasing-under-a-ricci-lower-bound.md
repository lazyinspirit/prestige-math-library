---
id: fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound
kind: false-statement
title: Bishop gromov volume ratio is nondecreasing under a ricci lower bound
status: draft
origin: pipeline
deps:
  - thm-bishop-gromov-volume-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-countable-choice
  - def-comparison-sine-cosine-and-cotangent-functions
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - prop-round-sphere-model-geometry
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-ricci-curvature
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - def-riemannian-volume-density
  - def-metric-bounded-diameter
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: monotonicity of the Bishop–Gromov ratio in the correct direction"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the model comparison for the volume ratio"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. **False
claim:** if $(M,g)$ is a complete, connected, boundaryless Riemannian manifold
of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number
$k$, $p\in M$ and $V^\star_k$ is the saturated model ball volume, then the
Bishop–Gromov ratio
$$R_p(r)=\frac{\operatorname{vol}_g\bigl(B(p,r)\bigr)}{V^\star_k(r)},\qquad r>0,$$
is nondecreasing on $(0,\infty)$. The claim is refuted below by an explicit
manifold satisfying the Ricci lower bound on which the ratio strictly
decreases; the correct statement is the opposite monotonicity, as asserted by
[[thm-bishop-gromov-volume-comparison]].

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the unit round sphere
$S^n_1\subseteq\mathbb R^{n+1}$ of dimension $n\ge2$ with the induced
Riemannian metric $g$; a point $p\in S^n_1$; the constant $k=0$ and the
saturated model volume $V^\star_0$; and the Bishop–Gromov ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_0(r)$ of the false claim.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the sphere, cut-locus and
Bishop–Gromov suppliers below.

[F1] Round sphere ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]],
[[prop-round-sphere-model-geometry]],
[[prop-curvature-tensor-of-constant-sectional-curvature]],
[[def-ricci-curvature]]): for $k=1$ and radius $R=1$ the sphere $S^n_1$ has
constant sectional curvature $1$, so the curvature four-tensor is
$\operatorname{Rm}(X,Y,Z,W)=g(Y,Z)g(X,W)-g(X,Z)g(Y,W)$; tracing
$\operatorname{Ric}(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$ in an
orthonormal basis $(e_1,\dots,e_n)$ gives
$\operatorname{Ric}(X,Y)=\sum_i\bigl(g(X,Y)g(e_i,e_i)-g(e_i,Y)g(X,e_i)\bigr)
=(n-1)g(X,Y)$, that is $\operatorname{Ric}=(n-1)g$. By
the round-sphere model proposition the sphere $S^n_1$ is complete, connected
and boundaryless of dimension $n\ge2$, with diameter $\pi$. In particular
$\operatorname{Ric}=(n-1)g\ge0=(n-1)\cdot0\cdot g$, so the Ricci lower bound
of the false claim holds with $k=0$, and the centre $p$ is unrestricted.

[F2] Diameter and large balls ([[def-metric-bounded-diameter]]): every $q\in S^n_1$
satisfies $d_g(p,q)\le\operatorname{diam}(S^n_1,g)=\pi$, and therefore
$B(p,r)=S^n_1$ for every $r>\pi$.

[F3] Finite volume ([[cor-euclidean-closed-balls-and-spheres-are-compact]],
[[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]],
[[def-riemannian-volume-density]]): $S^n_1$ is a closed and bounded subset of
$\mathbb R^{n+1}$, hence compact; the Riemannian volume $\operatorname{vol}_g$
is compact-finite, so $\operatorname{vol}_g(S^n_1)<+\infty$. Consequently
$\operatorname{vol}_g(B(p,r))\le\operatorname{vol}_g(S^n_1)<+\infty$ for every
$r>0$.

[F4] Bishop–Gromov with $k=0$ ([[thm-bishop-gromov-volume-comparison]]): on
$S^n_1$, which satisfies $\operatorname{Ric}\ge0$, the ratio $R_p$ is well
defined on $(0,\infty)$, is nonincreasing there, and
$\lim_{r\downarrow0}R_p(r)=1$.

[F5] Model volume for $k=0$
([[def-model-space-radial-area-and-ball-volume]],
[[def-comparison-sine-cosine-and-cotangent-functions]]):
$V^\star_0(r)=V_0(r)=\omega_{n-1}\int_0^r\operatorname{sn}_0(t)^{n-1}\,dt
=\omega_{n-1}\int_0^rt^{n-1}\,dt$ with $\omega_{n-1}>0$ the total surface
measure of the unit sphere; for $r\ge1$ the integrand satisfies $t^{n-1}\ge1$,
so $V^\star_0(r)\ge\omega_{n-1}(r-1)$ and $V^\star_0(r)\to+\infty$ as
$r\to+\infty$.

## Refutation

**Proof technique:** direct: take the unit round sphere with $k=0$, where the
Ricci lower bound holds; the ratio tends to one at the origin but to zero at
infinity because the ball volume saturates at the finite total volume while
the Euclidean model volume grows without bound; two such radii violate
monotonicity.

1.1 The witness satisfies the hypothesis. [F1]
The unit sphere $S^n_1$ is complete, connected, boundaryless and of dimension
$n\ge2$, and its Ricci curvature is $\operatorname{Ric}=(n-1)g\ge0$, which is
the lower bound $\operatorname{Ric}\ge(n-1)kg$ at $k=0$ [F1]. The ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_0(r)$ is defined for every $r>0$
because $V^\star_0(r)>0$ [F5] and the ball volume is finite [F3].
[F1, F3, F5]

1.2 The ratio tends to $1$ at the origin and to $0$ at infinity. [F2, F3, F4, F5]
Near the origin, $\lim_{r\downarrow0}R_p(r)=1$ by [F4]. At infinity, [F2]
gives $B(p,r)=S^n_1$ for every $r>\pi$, so
$$R_p(r)=\frac{\operatorname{vol}_g(S^n_1)}{V^\star_0(r)}\qquad(r>\pi);$$
here the numerator is finite by [F3] and the denominator satisfies
$V^\star_0(r)\ge\omega_{n-1}(r-1)\to+\infty$ by [F5], whence
$\lim_{r\to+\infty}R_p(r)=0$. [F2, F3, F4, F5]

2.1 The ratio is not nondecreasing. [step 1.2]
Choose $r_1>0$ with $R_p(r_1)>\tfrac12$, possible because
$\lim_{r\downarrow0}R_p(r)=1$; then choose $r_2>\max\{r_1,\pi\}$ with
$R_p(r_2)<\tfrac12$, possible because $\lim_{r\to+\infty}R_p(r)=0$. Then
$0<r_1<r_2$ while $R_p(r_1)>R_p(r_2)$, so the ratio is not nondecreasing on
$(0,\infty)$. The manifold satisfies every hypothesis of the false claim
(step 1.1), so the claim is false; the correct monotonicity is the
nonincreasing one asserted by [F4], and the failure here is precisely the
saturation of the ball volume at the finite total volume of the compact
sphere against the unbounded Euclidean model volume. No direction or radius
family beyond the two explicit radii $r_1,r_2$ is selected, so the inherited
$\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration.
[F4, step 1.1, step 1.2] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, and Eschenburg §§4–5, pp.15–20, prove that
the Bishop–Gromov ratio is nonincreasing, with value one at the origin and
saturation once the ball exhausts the manifold. The witness is the unit round
sphere at $k=0$, read off from the published round-sphere curvature and
the round-sphere model proposition recording completeness and diameter $\pi$;
the Ricci trace is computed above from the constant-curvature tensor
identity.
