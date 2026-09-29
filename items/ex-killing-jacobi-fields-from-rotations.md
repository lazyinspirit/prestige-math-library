---
id: ex-killing-jacobi-fields-from-rotations
kind: example
title: Killing jacobi fields from rotations
status: draft
origin: pipeline
deps:
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-euclidean-inner-product
  - def-geodesic-of-an-affine-connection
  - def-lie-derivative-of-a-tensor-field
  - def-local-and-global-flow
  - def-riemannian-isometry-and-local-isometry
  - def-riemannian-metric-and-riemannian-manifold
  - ex-great-circles-as-round-sphere-geodesics
  - prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes
  - prop-killing-fields-restrict-to-jacobi-fields-along-geodesics
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - thm-sine-and-cosine-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10 and Chapter 8 collection of examples; rotational isometries of the round sphere and their Killing fields, cf. the sphere examples in Chapters 8 and 10."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 15 and Exercise collection; Killing fields and isometric flows, cf. §15.1–15.2."
---

## Example

Let $n\ge1$ and let
$$S^n=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=1\}$$
carry the round metric induced from the Euclidean inner product. Let $A$ be
the skew-symmetric linear map that rotates the first two coordinates,
$$Ae_1=e_2,\qquad Ae_2=-e_1,\qquad Ae_j=0\quad(j\ge3),$$
let $R_\theta=\exp(\theta A)$ be the rotation by the angle $\theta$ in the
first two coordinates, and let
$$X(x)=Ax$$
be its generating tangent field on $S^n$. Then $X$ is a Killing field, and for
every affinely parametrized geodesic $\gamma$ of $S^n$ the restriction
$$t\mapsto X(\gamma(t))$$
is a Jacobi field along $\gamma$. In particular, the rotational field restricts
to a Jacobi field along every great-circle geodesic of the round sphere.

## Facts & Assumptions

**Given:** The integer $n\ge1$, the unit round sphere $S^n$ with its induced metric, the rotation generator $A$ and the rotation matrices $R_\theta$, and the field $X(x)=Ax$.

[F1] The unit sphere $S^n$ is a regular level set of $x\mapsto\langle x,x\rangle$, hence a smooth boundaryless $n$-manifold; at each $x\in S^n$ its tangent space is the kernel $x^\perp$ of the derivative, the inclusion is an immersion, and the restricted Euclidean inner product is the round Riemannian metric ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]], [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]], [[def-riemannian-metric-and-riemannian-manifold]], [[def-euclidean-inner-product]]).

[F2] On the first two coordinates the map $A$ is the matrix $\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}$ and it annihilates the remaining coordinates, so $A^T=-A$, $A^2$ is the negative of the orthogonal projection onto $\operatorname{span}\{e_1,e_2\}$, and $A^3=-A$. Consequently $$R_\theta=I+\sin\theta\,A+(1-\cos\theta)A^2,\qquad R_\theta^T=R_{-\theta},\qquad R_{\theta+\varphi}=R_\theta R_\varphi,$$ the last because $A$ commutes with $A^2$ and the trigonometric addition formulas hold; moreover $$\frac{d}{d\theta}R_\theta=A R_\theta=R_\theta A,$$ since $A^3=-A$ gives $AR_\theta=A+\sin\theta A^2-(1-\cos\theta)A=\cos\theta A+\sin\theta A^2$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], algebra).

[F3] Each $R_\theta$ preserves the Euclidean inner product: $\langle R_\theta u,R_\theta v\rangle=\langle u,v\rangle$ for all $u,v\in\mathbb R^{n+1}$, because $R_\theta^TR_\theta=R_{-\theta}R_\theta=R_0=I$ by [F2]. In particular $|R_\theta x|=|x|$, so $R_\theta$ maps $S^n$ to itself ([[def-euclidean-inner-product]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F4] The curve $\theta\mapsto R_\theta x$ is the maximal integral curve of the field $X$ through $x$, so the local flow of $X$ is $\Phi(\theta,x)=R_\theta x$ ([[def-local-and-global-flow]], [[thm-sine-and-cosine-derivatives]]).

[F5] A smooth local diffeomorphism $F$ of a Riemannian manifold is a (local) isometry when $F^*g=g$; for the sphere this means $g_{F(x)}(dF_xu,dF_xv)=g_x(u,v)$ for tangent vectors $u,v$ ([[def-riemannian-isometry-and-local-isometry]]).

[F6] The Lie derivative of the metric along a vector field with flow $\Phi$ is $\mathcal L_Xg=\frac{d}{d\theta}\big|_{\theta=0}\Phi_\theta^*g$, and a tensor field is flow-invariant exactly when its Lie derivative vanishes ([[def-lie-derivative-of-a-tensor-field]], [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]]).

[F7] For a smooth vector field $X$ with $\mathcal L_Xg=0$ (a Killing field in the sense of that proposition) and an affinely parametrized geodesic $\gamma$, the restriction $J(t)=X(\gamma(t))$ is a Jacobi field along $\gamma$ ([[prop-killing-fields-restrict-to-jacobi-fields-along-geodesics]], [[def-geodesic-of-an-affine-connection]]).

[F8] Every constant-speed parametrization of a great circle of the round sphere is a geodesic ([[ex-great-circles-as-round-sphere-geodesics]]).

## Verification

**Proof technique:** exhibit the rotation flow, check it preserves the round metric by orthogonality of the rotation matrices, and invoke the Killing-field proposition.

1.1 By [F1] the unit sphere is a boundaryless Riemannian $n$-manifold whose round metric is the ambient inner product on tangent vectors. The map $X(x)=Ax$ is linear, hence smooth, and it is tangent to the sphere: differentiating $|R_\theta x|^2=1$ in $\theta$ at $0$, or directly $\langle Ax,x\rangle=x^TA^Tx=-x^TAx=-\langle Ax,x\rangle$, gives $X(x)\in T_xS^n=x^\perp$. [F1, F2, F3]

1.2 By [F2] the explicit matrices satisfy $R_\theta^T=R_{-\theta}$, $R_{\theta+\varphi}=R_\theta R_\varphi$, and $\frac{d}{d\theta}R_\theta=AR_\theta$. Hence by [F3] each $R_\theta$ is orthogonal and preserves $S^n$, and the curve $\theta\mapsto R_\theta x$ is defined for all real $\theta$ with derivative $\frac{d}{d\theta}R_\theta x=AR_\theta x=X(R_\theta x)$ and value $x$ at $\theta=0$. [F2, F3, F4]

2.1 The flow $\Phi(\theta,x)=R_\theta x$ of step 1.2 consists of isometries of the round sphere: for $x\in S^n$ and $u,v\in T_xS^n$, the pushforward is $d(R_\theta)_xu=R_\theta u$ and $$g_{R_\theta x}(R_\theta u,R_\theta v)=\langle R_\theta u,R_\theta v\rangle=\langle u,v\rangle=g_x(u,v)$$ by [F1] and [F3]. So $\Phi_\theta^*g=g$ for every $\theta$. [F1, F3, F5, step 1.2]

3.1 By [F6] the Lie derivative of the round metric along $X$ is $\mathcal L_Xg=\frac{d}{d\theta}\big|_{\theta=0}\Phi_\theta^*g$, and by step 2.1 every term equals $g$, so $\mathcal L_Xg=0$: the rotational field $X$ is a Killing field. [F6, step 2.1]

4.1 Now let $\gamma$ be an affinely parametrized geodesic of the round sphere. By [F7], applied to the Killing field $X$ of step 3.1, the restricted field $J(t)=X(\gamma(t))$ is a Jacobi field along $\gamma$. By [F8] every great-circle geodesic is among these affinely parametrized geodesics, and the rotational field restricts to a Jacobi field along it. [F7, F8, step 3.1]

5.1 Boundary and choice audit. The sphere is nonempty for every $n\ge1$; the rotation angle is a real parameter and the first two coordinates exist because $n\ge1$, so $X$ is nonzero; the flow is global, so no local-domain restriction or completeness hypothesis enters. No choice principle is used: the generator $A$, the matrices $R_\theta$, and the field $X$ are all supplied explicitly, and the cited suppliers are choice-free. The example asserts the Jacobi property for every affinely parametrized geodesic; it makes no if-and-only-if claim. [F1, F7, step 1.1, step 4.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapters 8 and 10, treats the round sphere as the basic example of a space of constant curvature and includes the rotational isometries; Datar, *Lectures on Riemannian Geometry*, Lectures 15, 22 and 24, discusses Killing fields and their Jacobi restrictions. The coordinate computation of the rotation flow and the verification that the round metric is invariant under it are carried out above rather than quoted.
