---
id: def-complex-stiefel-grassmann-optimization-conventions
kind: definition
title: Complex Stiefel and Grassmann optimization conventions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-riemannian-metric-and-riemannian-manifold
  - def-euclidean-inner-product
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Peter A. Absil, Robert Mahony, and Rodolphe Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.4–3.6: real Stiefel/Grassmann quotient and induced-metric conventions; used only for the real case."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §3.1 treats complex coordinate spaces as real Euclidean spaces; §§7.3 and 9.16 give the Stiefel and Grassmann conventions."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§IV and VI"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§IV and VI: complex Stiefel frames, unitary equivalence, and the complex Grassmann quotient."
verification:
  precheck: n/a
---

## Definition

For $1\le r\le n$, set $\operatorname{St}_{\mathbb C}(n,r)=\{X\in\mathbb C^{n\times r}:X^*X=I_r\}$ and $\operatorname{Gr}_{\mathbb C}(r,n)=\operatorname{St}_{\mathbb C}(n,r)/\operatorname U(r)$.
The class $[X]$ represents the complex column space of $X$; two orthonormal
frames represent the same space exactly when they differ by right multiplication
by a unitary $r\times r$ matrix. Regard each complex matrix space as a real
vector space and use the real Frobenius inner product
$$\langle U,V\rangle_{\mathbb R}:=\operatorname{Re}\operatorname{tr}(U^*V).$$
Give the complex Stiefel manifold its induced metric. On the complex Grassmann
quotient, represent tangent vectors horizontally by matrices $Z$ with $X^*Z=0$
and pair these representatives by $\langle\cdot,\cdot\rangle_{\mathbb R}$.
For $A=A_0+iA_1\in\mathbb C^{n\times r}$, write
$$\rho(A):=\begin{pmatrix}A_0&-A_1\\A_1&A_0\end{pmatrix}\in\mathbb R^{2n\times2r}$$
for its realification, the real matrix acting on real/imaginary coordinates as
$A$ acts on complex coordinates. Write $\operatorname{Herm}(A)=(A+A^*)/2$.

## Facts & Assumptions

**Given:** Integers $1\le r\le n$ and complex matrix spaces with their usual real-coordinate topology.

[F1] A Riemannian metric is a smooth positive-definite real bilinear pairing on each tangent space ([[def-riemannian-metric-and-riemannian-manifold]]).

[F2] The coordinatewise product on a finite real coordinate space is its Euclidean inner product ([[def-euclidean-inner-product]]).

[F3] Complex Stiefel frames are quotiented by the right unitary action, and graph charts give the Grassmannian's local coordinates ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

## Proof

**Proof technique:** identify complex matrices with pairs of real matrices and verify the quotient pairing.

1.1 Write $U=A+iB$ and $V=C+iD$ with real matrices. For $z=x+iy$, $\rho(U)(x,y)=(Ax-By,Bx+Ay)$, the real and imaginary parts of $Uz$; hence $\rho(UV)=\rho(U)\rho(V)$, $\rho(U)^{\mathsf T}=\rho(U^*)$, and, when $U$ is invertible, $\rho(U^{-1})=\rho(U)^{-1}$. Also $\langle U,V\rangle_{\mathbb R}=\operatorname{tr}(A^{\mathsf T}C+B^{\mathsf T}D)$, the ordinary Euclidean inner product on the real and imaginary coordinates. It is real bilinear, symmetric, and positive on nonzero matrices by [F2]; its restriction to each real tangent space is positive definite, as required by [F1]. [F1, F2, given, algebra]

1.2 In a local complex Grassmann graph chart, choose a smooth orthonormal frame section $X(u)$ from the frame-bundle trivialization in [F3], and set $P(u)=X(u)X(u)^*$. For a chart tangent $v$, differentiating $X(u)^*X(u)=I$ makes $A=X(u)^*DX_u[v]$ skew-Hermitian. The first term $X(u)A$ is vertical: for every skew-Hermitian $A$, the Cayley curve $Q(t)=(I_r-\tfrac t2A)^{-1}(I_r+\tfrac t2A)$ satisfies $Q(t)^*Q(t)=I_r$ near zero and $Q(t)=I_r+tA+O(t^2)$. Thus the horizontal component $Z=(I-X(u)X(u)^*)DX_u[v]$ is the unique representative of $v$. Then $DP_u[v]=ZX(u)^*+X(u)Z^*$. For horizontal $Z,W$, direct expansion gives $\tfrac12\operatorname{Re}\operatorname{tr}((ZX^*+XZ^*)^*(WX^*+XW^*))=\operatorname{Re}\operatorname{tr}(Z^*W)$. Hence the quotient pairing has smooth coefficients in every graph chart. In a local product chart of the frame bundle, matrix entries vary smoothly, so the ambient real Frobenius pairing has smooth coefficients on the complex Stiefel space as well. [F1, F2, F3, given, algebra]

2.1 The complex frame quotient and its local graph charts are those of [F3]. For unitary $Q$, cyclicity of trace and $QQ^*=I$ give $\langle UQ,VQ\rangle_{\mathbb R}=\operatorname{Re}\operatorname{tr}(Q^*U^*VQ)=\operatorname{Re}\operatorname{tr}(U^*V)$. Thus the right unitary action is isometric, and the Frobenius pairing of horizontal representatives is independent of the chosen orthonormal frame. [F3, given, step 1.1, algebra] ∎
