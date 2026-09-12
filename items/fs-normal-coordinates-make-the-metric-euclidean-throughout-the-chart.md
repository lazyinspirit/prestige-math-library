---
id: "fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart"
kind: "false-statement"
title: "Normal coordinates make the metric Euclidean throughout the chart"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice", "thm-existence-uniqueness-and-smooth-dependence-of-geodesics", "thm-existence-of-normal-neighborhoods", "def-normal-neighborhood-and-normal-coordinate-chart", "prop-properties-of-normal-coordinates-at-the-center", "def-affine-connection-on-a-smooth-manifold", "def-covariant-derivative-along-a-curve", "thm-fundamental-theorem-of-riemannian-geometry", "thm-a-regular-level-set-is-an-embedded-submanifold", "prop-tangent-space-of-a-regular-level-set-is-the-kernel", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "def-riemannian-metric-and-riemannian-manifold", "thm-sine-cosine-signs-monotonicity-and-ranges", "thm-sine-and-cosine-derivatives", "cor-mean-value-theorem"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 17.1.3, Definition 17.2.1 and Proposition 17.2.2, pp. 128, 130--131
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** normal coordinates centred at a point make the Riemannian
metric Euclidean at every point of their coordinate domain.

The library's current normal-coordinate interface assumes
$\mathrm{AC}_\omega$; that background assumption is retained below and its
exact use is identified, although the spherical calculation itself is
explicit and choice-free.

## Facts & Assumptions

**Given:** The smooth sphere $S^2=\{q\in\mathbb R^3:q\mathbin{\boldsymbol\cdot}q=1\}$, its round metric induced by the Euclidean dot product, the north pole $N=(0,0,1)$, and the orthonormal basis $e_1=(1,0,0)$, $e_2=(0,1,0)$ of $T_NS^2$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] For $F(q)=q\mathbin{\boldsymbol\cdot}q$, $dF_q(v)=2q\mathbin{\boldsymbol\cdot}v$ is nonzero on $S^2$. Thus [[thm-a-regular-level-set-is-an-embedded-submanifold]] makes it a smooth boundaryless surface and [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] identifies $T_qS^2=q^\perp$. Its inclusion is an immersion, so [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]] and [[def-riemannian-metric-and-riemannian-manifold]] make the restricted Euclidean dot product its round Riemannian metric.

[F2] [[def-affine-connection-on-a-smooth-manifold]] gives the connection axioms, [[thm-fundamental-theorem-of-riemannian-geometry]] characterizes the unique Levi--Civita connection, and [[def-covariant-derivative-along-a-curve]] supplies differentiation along a curve.

[F3] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] identifies a geodesic from its initial data, [[thm-existence-of-normal-neighborhoods]] and [[def-normal-neighborhood-and-normal-coordinate-chart]] supply the normal chart, and [[prop-properties-of-normal-coordinates-at-the-center]] gives $g_{ij}(N)=\delta_{ij}$ and $\partial_k g_{ij}(N)=0$ at its centre.

[F4] Sine is strictly increasing on $[0,\pi/2]$, cosine is strictly decreasing on $[0,\pi]$, $\sin0=0$, $\cos0=1$, and the mean value theorem applies to sine on a nondegenerate closed interval ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-derivatives]], [[cor-mean-value-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 Differentiating the equation $q\mathbin{\boldsymbol\cdot}q=1$ gives $T_qS^2=q^\perp$, consistently with the round metric in [F1]. Put $P_q(z)=z-(z\mathbin{\boldsymbol\cdot}q)q$. For smooth tangent vector fields $X,Y:S^2\to\mathbb R^3$, define $\nabla_XY=P(dY(X))$. The displayed formula is smooth and tangent-valued; pointwise linearity of $P$ and the ordinary directional-derivative product rule give real linearity in $Y$, function linearity in $X$, and $\nabla_X(fY)=X(f)Y+f\nabla_XY$. Thus [F2] makes $\nabla$ an affine connection. Moreover, for tangent $Y,Z$, projection does not alter the dot product with either field, so the ordinary dot-product rule gives $$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ).$$ Finally $dY(X)-dX(Y)=[X,Y]$ is tangent, whence $\nabla_XY-\nabla_YX=[X,Y]$. Thus the connection is metric compatible and torsion free, and uniqueness in [F2] identifies it with the round Levi--Civita connection. [F1, F2, given, algebra]

2.1 For $v\in T_NS^2$ with $r=|v|>0$, put $\gamma_v(t)=\cos(tr)N+\sin(tr)v/r$. Then $|\gamma_v(t)|=1$, $\gamma_v(0)=N$, $\dot\gamma_v(0)=v$, and $\ddot\gamma_v=-r^2\gamma_v$ is normal to the sphere. Applying the along-curve definition in [F2] to the projected connection of step 1.1 gives $D_t\dot\gamma_v=P_{\gamma_v}(\ddot\gamma_v)=0$, so $\gamma_v$ is a geodesic. Its formula extends at $v=0$ by the constant curve, and uniqueness in [F3] yields $\exp_N(v)=\cos r\,N+(\sin r/r)v$. [F2, F3, step 1.1, algebra]

3.1 By [F3], restrict $\exp_N$ to a sufficiently small ball $B_\rho(0)\subseteq T_NS^2$ on which it is a diffeomorphism, and use the supplied basis to form normal coordinates. Choose $0<r<\min\{\rho,\pi/2\}$ and set $x=re_1$, $w=e_2$. Since $x\mathbin{\boldsymbol\cdot}w=0$, differentiating the formula of step 2.1 in the direction $w$ gives $d(\exp_N)_x(w)=(\sin r/r)e_2$. This vector is exactly the second coordinate vector at $q=\exp_N(x)$ because the inverse normal-coordinate chart is $\exp_N\circ E_e$. By [F4], $\sin r>\sin0=0$; and the mean value theorem gives $c\in(0,r)$ with $\sin r-\sin0=r\cos c$. Strict decrease of cosine on $[0,\pi]$ gives $\cos c<\cos0=1$, hence $0<\sin r<r$. Therefore the second coordinate vector has squared round length $$g_{22}(q)=\left(\frac{\sin r}{r}\right)^2<1.$$ [F3, F4, step 2.1, algebra]

4.1 The metric coefficient in step 3.1 is not the Euclidean value $1$, even though [F3] gives $g_{22}(N)=1$ and vanishing first metric derivatives at the centre. This is the exact failure: normal coordinates normalize the metric's value and first derivatives at their centre, not its values throughout the chart. The witness is two-dimensional and uses an interior point with $r>0$; $r=0$ is precisely the normalized centre, while empty and zero-dimensional manifolds cannot supply this counterexample. Assumption [A1] is used only through the library interfaces collected in [F3]; every construction and calculation in steps 1.1--3.1 is explicit and makes no choice. [A1, F3, step 3.1] ∎
