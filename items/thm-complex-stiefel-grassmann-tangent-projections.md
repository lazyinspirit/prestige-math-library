---
id: thm-complex-stiefel-grassmann-tangent-projections
kind: theorem
title: Complex Stiefel and Grassmann tangent projections
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-complex-stiefel-grassmann-optimization-conventions
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Peter A. Absil, Robert Mahony, and Rodolphe Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3–3.6: real level-set, quotient-tangent, horizontal, and projection arguments; the local proof gives the complex adjoint version."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.1, 7.3 and 9.16: complex spaces as real Euclidean spaces and Stiefel/Grassmann tangent geometry."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§IV and VI"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§IV and VI: complex Stiefel tangent spaces and the unitary quotient defining complex Grassmann."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For $X\in\operatorname{St}_{\mathbb C}(n,r)$, as a real manifold, $T_X\operatorname{St}_{\mathbb C}(n,r)=\{Z:X^*Z+Z^*X=0\}$ and $\Pi_X^{\rm St}(G)=G-X\operatorname{Herm}(X^*G)$. The complex Grassmann tangent has the unique horizontal representative $X^*Z=0$, and its quotient-metric projection is $\Pi_X^{\rm Gr}(G)=(I-XX^*)G$.

## Facts & Assumptions

**Given:** $1\le r\le n$, $X^*X=I_r$, and the real Frobenius metrics of [[def-complex-stiefel-grassmann-optimization-conventions]].

[F1] The Stiefel frame set is the level set of $X\mapsto X^*X-I_r$, and the Grassmann space is its quotient by the right unitary action ([[def-complex-stiefel-grassmann-optimization-conventions]]).

[F2] The tangent of a regular level set is the kernel of the level-map differential ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[F3] The complex Grassmann quotient has graph charts, and its frame bundle has right unitary fibers ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

## Proof

**Proof technique:** differentiate the Hermitian constraint and orthogonally decompose into vertical, horizontal, and normal components.

1.1 Regard the Hermitian $r\times r$ matrices as a real vector space. The derivative of $F(X)=X^*X-I_r$ is $DF_X[Z]=X^*Z+Z^*X$. It is onto that space: for any Hermitian $H$, $Z=XH/2$ gives $DF_X[Z]=H$. Hence the level is regular, and [F2] gives the displayed tangent kernel. [F1, F2, given, algebra]

2.1 Set $S=\operatorname{Herm}(X^*G)$. Then $X^*(G-XS)+(G-XS)^*X=0$, so $G-XS$ is tangent. For tangent $Z$, put $K=X^*Z$, which is skew-Hermitian. For Hermitian $S$, $\overline{\operatorname{tr}(SK)}=-\operatorname{tr}(SK)$ by adjoint and cyclic-trace identities; thus $\operatorname{Re}\operatorname{tr}(SK)=0$. Therefore $XS$ is normal in the real Frobenius metric, and the stated formula is the Stiefel orthogonal projection. [given, step 1.1, algebra]

2.2 A curve $Q(t)$ in $\operatorname U(r)$ through $I_r$ has $\Omega=Q'(0)$ skew-Hermitian by differentiating $Q(t)^*Q(t)=I_r$. Conversely, for any skew-Hermitian $\Omega$, the Cayley curve $Q(t)=(I_r-\tfrac t2\Omega)^{-1}(I_r+\tfrac t2\Omega)$ is defined near zero, satisfies $Q(t)^*Q(t)=I_r$, and has $Q(t)=I_r+t\Omega+O(t^2)$; hence the vertical tangent directions are exactly $X\Omega$. Every Stiefel tangent decomposes as $Z=X\Omega+(I-XX^*)Z$ with $\Omega=X^*Z$. The second summand is horizontal. For any vertical $X\Omega$ and horizontal $W$, $\langle X\Omega,W\rangle_{\mathbb R}=\operatorname{Re}\operatorname{tr}(\Omega^*X^*W)=0$, so the summands are orthogonal. The decomposition is unique, and the graph-chart quotient identifies its horizontal component with the quotient tangent. [F1, F3, given, step 1.1, algebra]

3.1 The matrix $(I-XX^*)G$ is horizontal. For every horizontal $Z$, $\langle G-(I-XX^*)G,Z\rangle_{\mathbb R}=\operatorname{Re}\operatorname{tr}((XX^*G)^*Z)=\operatorname{Re}\operatorname{tr}(G^*XX^*Z)=0$ since $X^*Z=0$. Thus it is the horizontal orthogonal projection. Under $(X,G)\mapsto(XQ,GQ)$ for unitary $Q$, it transforms to $(I-XX^*)GQ$, the same tangent vector in the changed frame. [F1, given, step 2.2, algebra] ∎
