---
id: ex-ip-38-scope-and-boundary-cases
kind: example
title: "Simple disk, trapped annulus, and conjugate-point cancellation"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-surface-and-geodesic-xray-transform
  - thm-ip-2d-simple-surface-xray-injectivity
  - def-jacobi-field
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-curvature-of-an-affine-connection
  - lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 2, §2.5, disk examples and the distinction between simple and trapped geometry; Chapter 4, §§4.1–4.4, simple-surface transform."
    - title: "Joonas Ilmavirta, Geometry of geodesics, full lecture notes"
      url: "https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf"
      locator: "Chapter 8, §§8.1–8.2, Jacobi fields and conjugate points; Chapter 13, §§13.1–13.4, the surface transform examples and proof."
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

**Simple disk.** Let $M=\{x\in\mathbb R^2:|x|\le1\}$ with the Euclidean metric and define
$$
f(x)=\begin{cases}\exp\!\left(-\dfrac{1}{1-4|x|^2}\right),&|x|<\tfrac12,\\[4pt]0,&|x|\ge\tfrac12.\end{cases}
$$
This is a nonzero smooth function compactly supported in $M^\circ$. The disk is simple: the outward normal is $\nu_{\rm out}(x)=x$ on the unit circle, so $g(\nabla_w\nu_{\rm out},w)=|w|^2>0$ for every nonzero tangent $w$; Euclidean Jacobi fields satisfy $J''=0$, so endpoint-zero fields vanish; and every straight geodesic in the compact disk exits in finite forward and backward time. Along the diameter entering at $((-1,0),(1,0))$,
$$
I_0f((-1,0),(1,0))=\int_{-1}^1 f(t,0)\,dt>0,
$$
so this nonzero compactly supported function is detected by the transform. The diagram locates the support and one measured chord; the integral calculation proves the claim.

```tikz
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) circle (1);
  \fill[blue!18] (0,0) circle (0.5);
  \draw[red,very thick,->] (-1,0) -- (0.65,0);
  \draw[red,very thick] (0.65,0) -- (1,0);
  \node[below] at (-1,0) {$(-1,0)$};
  \node[below] at (1,0) {exit};
  \node at (0,0.72) {$\mathrm{supp}\,f$};
\end{tikzpicture}
```

A diameter chord crosses the compact support of the bump.

**Trapped annulus.** Let $M=[0,2]\times(\mathbb R/2\pi\mathbb Z)$ and equip it with $g=dr^2+a(r)^2d\theta^2$, where $a(r)=2+\tfrac12\cos(2\pi r)>0$. Since $a'(1)=0$, the Christoffel symbols $\Gamma^r_{\theta\theta}=-aa'$ and $\Gamma^\theta_{r\theta}=a'/a$ vanish at $r=1$. Thus $\gamma(t)=(1,\theta_0+t/a(1))$ is a unit-speed closed geodesic of period $2\pi a(1)$, entirely in $M^\circ$. It never reaches the boundary, so this compact geometry fails the nontrapping condition in the theorem. This example makes no assertion about the boundary transform's nullspace.

```tikz
\begin{tikzpicture}[scale=1.4]
  \draw[thick] (0,0) circle (0.5);
  \draw[thick] (0,0) circle (1.25);
  \draw[thick] (0,0) circle (2);
  \draw[red,very thick,->] (30:1.25) arc[start angle=30,end angle=300,radius=1.25];
  \draw[gray,thin] (45:0.5) -- (2.4,1.7);
  \draw[gray,thin] (1.25,0) -- (2.4,0);
  \draw[gray,thin] (-45:2) -- (2.4,-1.7);
  \fill (45:0.5) circle (1pt);
  \fill (1.25,0) circle (1pt);
  \fill (-45:2) circle (1pt);
  \node[right] at (2.4,1.7) {$r=0$};
  \node[right] at (2.4,0) {$r=1$ trapped};
  \node[right] at (2.4,-1.7) {$r=2$};
\end{tikzpicture}
```

A parallel circle at a critical radius is a closed trapped geodesic. The annulus is schematic: drawn radius $\rho=\tfrac12+\tfrac34r$ represents the coordinate $r$, rather than metric distance.

**Conjugate points and closed-geodesic visibility failure.** On the unit sphere $S^2\subset\mathbb R^3$ with its induced Riemannian metric, write $x_3$ for the third coordinate and define the closed-geodesic transform by $I_{\rm cl}f(c)=\int_0^{2\pi}f(c(t))\,dt$ for every unit-speed great circle $c(t)=a\cos t+b\sin t$ with orthonormal $a,b\in\mathbb R^3$. The nonzero function $f(x)=x_3$ is invisible to this transform, since $f(c(t))=a_3\cos t+b_3\sin t$ and both trigonometric integrals over $[0,2\pi]$ vanish. Also the antipodes $p=(1,0,0)$ and $-p$ are conjugate along $\gamma(t)=(\cos t,\sin t,0)$: for $\gamma_s(t)=\cos t(1,0,0)+\sin t(0,\cos s,\sin s)$, each $t$-curve is a unit-speed great circle and its variation field at $s=0$ is $J(t)=\sin t(0,0,1)$. Differentiating the geodesic equation in $s$ and using the curvature commutator gives $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$; the field is nonzero but vanishes at $t=0$ and $t=\pi$. The closed sphere has no boundary, so this closed-geodesic example is not a counterexample to the boundary-to-boundary theorem; it exhibits an exact invisible mode in a conjugate-point setting.

```tikz
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) circle (1.5);
  \draw[red,very thick,->] (0:1.5) arc[start angle=0,end angle=180,radius=1.5];
  \fill (1.5,0) circle (1.4pt) node[right] {$p$};
  \fill (-1.5,0) circle (1.4pt) node[left] {$-p$};
  \node at (0,-1.82) {great circle; antipodes are conjugate};
\end{tikzpicture}
```

A great semicircle joining a conjugate pair on $S^2$.

## Example references

[[def-ip-simple-surface-and-geodesic-xray-transform|Definition of the simple-surface boundary transform]]

[[thm-ip-2d-simple-surface-xray-injectivity|Injectivity theorem on simple surfaces]]

[[def-jacobi-field|Definition of a Jacobi field and conjugate points]]

[Paternain, Salo, and Uhlmann, *Geometric inverse problems, with emphasis on two dimensions*, Chapter 2, §2.5](https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf)

[Ilmavirta, *Geometry of geodesics*, Chapters 8 and 13](https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf)

## Facts & Assumptions

**Given:** The Euclidean unit disk with the displayed bump, the annulus with the displayed warped metric, and the unit sphere with the stated closed-geodesic transform.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: strict convexity means $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for nonzero boundary-tangent $w$; $I_0f$ integrates over unit-speed boundary-to-boundary geodesics.

[F2] [[def-ip-simple-surface-and-geodesic-xray-transform]]: no conjugate points means every endpoint-zero Jacobi field on a positive-length geodesic segment is zero; nontrapping means every maximal interior unit-speed geodesic exits in finite forward and backward time.

[F3] [[def-jacobi-field]]: a Jacobi field satisfies $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$; [[def-curvature-of-an-affine-connection]]: $R(A,B)C=\nabla_A\nabla_BC-\nabla_B\nabla_AC-\nabla_{[A,B]}C$.

[F4] [[lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation]]: $D_sD_tW-D_tD_sW=R(\partial_s\gamma,\partial_t\gamma)W$ in a smooth two-parameter variation.

[F5] [[def-riemannian-metric-and-riemannian-manifold]]: a Riemannian metric is a smooth positive-definite symmetric tensor.

[F6] [[def-levi-civita-connection]]: the Levi-Civita connection is metric-compatible and torsion-free; [[thm-fundamental-theorem-of-riemannian-geometry]]: it exists uniquely for every supplied smooth metric.

## Proof


1.1 The function $s\mapsto e^{-1/s}$ for $s>0$, extended by $0$ for $s\le0$, is smooth and flat at $0$: each derivative for $s>0$ is a polynomial in $1/s$ times $e^{-1/s}$, which tends to $0$ as $s\downarrow0$. Composing it with $s=1-4|x|^2$ proves the displayed $f$ is smooth and vanishes outside the closed radius-$1/2$ disk, a compact subset of $M^\circ$. It is positive inside that disk, so it is nonzero. [given, algebra]

1.2 On $\partial M$, $\nu_{\rm out}(x)=x$, and its Euclidean derivative on tangent $w$ is $w$, so $g(\nabla_w\nu_{\rm out},w)=|w|^2>0$. This verifies strict convexity. [F1, given, algebra]

1.3 Cartesian metric coefficients are constant, so their Levi-Civita Christoffel symbols vanish; the curvature definition [F3] gives $R=0$. Along any Euclidean geodesic the Jacobi equation from [F3] is then $J''=0$, and an affine field vanishing at two distinct endpoints is identically zero, verifying absence of conjugate points. [F2, F3, F5, F6, given, algebra]

1.4 For $g_{rr}=1$, $g_{\theta\theta}=a^2$, $g_{r\theta}=0$, the Levi-Civita coordinate formula gives $\Gamma^r_{\theta\theta}=-\tfrac12\partial_r(a^2)=-aa'$ and $\Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=\tfrac12a^{-2}\partial_r(a^2)=a'/a$. At $r=1$, $a'=0$, so the geodesic equations are satisfied by $r(t)=1$ and $\theta(t)=\theta_0+t/a(1)$. Its speed is $\sqrt{a(1)^2(1/a(1))^2}=1$, and its periodic angular coordinate keeps it in the interior for every real $t$. Thus it is trapped. [F6, given, algebra]

1.5 For any orthonormal $a,b\in\mathbb R^3$, $c'(t)=-a\sin t+b\cos t$ has norm one in the induced sphere metric. Direct integration gives $I_{\rm cl}f(c)=a_3\int_0^{2\pi}\cos t\,dt+b_3\int_0^{2\pi}\sin t\,dt=0$. Since $f(0,0,1)=1$, this is a nonzero invisible function for the explicitly defined closed-geodesic transform. [F5, given, algebra]

2.1 A Euclidean line intersects the compact convex disk in a closed segment of length at most $2$, so every interior unit geodesic exits in finite positive and negative time. This verifies nontrapping and, with steps 1.2–1.3, proves the disk is simple. [F2, step 1.2, step 1.3, algebra]

3.1 The diameter transform is the integral of a continuous nonnegative function which is strictly positive for $|t|<1/2$; therefore its value is strictly positive, proving the disk detects this $f$. The geodesic is entering at $(-1,0)$ and exits at $(1,0)$, as required by the stated incoming convention. [F1, given, step 1.1, step 2.1]

4.1 The vectors $p=(1,0,0)$ and $v_s=(0,\cos s,\sin s)$ are orthonormal for every $s$, so $\gamma_s(t)=p\cos t+v_s\sin t$ is a unit-speed great circle: its ambient acceleration is $-\gamma_s(t)$, which is normal to $S^2$, and its tangential covariant acceleration is zero. Its variation field at $s=0$ is $J(t)=\partial_s\gamma_s(t)|_{s=0}=\sin t(0,0,1)$. For each fixed $s$, the $t$-curve is geodesic, so $D_t\partial_t\gamma_s=0$; torsion-freeness gives $D_s\partial_t\gamma_s=D_t\partial_s\gamma_s$, and the curvature identity [F4] then yields $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$. The field is nonzero at $t=\pi/2$ and vanishes at $0$ and $\pi$, proving those antipodes conjugate by [F2]. This conclusion concerns the closed sphere and its closed-geodesic transform only. [F2, F3, F4, F5, F6, given, step 1.5] ∎

## Source locator

The source comparisons and item-specific dispositions are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38.coverage.json` and the batch notes.
