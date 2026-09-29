---
id: lem-invariant-polynomials-annihilate-covariant-commutators
kind: lemma
title: Invariant polynomials cancel connection commutators
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - thm-second-bianchi-identity-for-a-bundle-connection
  - def-product-connection-on-tensor-and-hom-bundles
  - thm-the-exterior-derivative-is-a-graded-derivation
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: Appendix C, Lemma 4, printed pp. 292–293 (author PDF pp. 287–288)
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: §II.4, induced exterior covariant derivative and Bianchi identity, printed pp. 86–87 (PDF pp. 86–87)
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. Let $G$ be a real or
complex matrix Lie group with Lie algebra $\mathfrak g$, and let
$P_k:\mathfrak g^k\to\mathbb K$ be the symmetric multilinear polarization of
a homogeneous $G$-invariant polynomial, where $\mathbb K=\mathbb R$ or
$\mathbb C$. Work in a supplied $G$-frame chart with a connection compatible
with that reduction, so its local connection form $\omega$ is
$\mathfrak g$-valued. For each homogeneous $\mathfrak g$-valued form
$A_j\in\Omega^{q_j}(U;\mathfrak g)$, extend $P_k$ by applying it to the
Lie-algebra coefficients and wedging the scalar-form coefficients in the
displayed argument order. Define
$$D^\nabla A=dA+\omega\wedge A-(-1)^qA\wedge\omega\quad(A\in\Omega^q(U;\mathfrak g)).$$
Then
$$dP_k(A_1,\ldots,A_k)=\sum_{j=1}^k(-1)^{q_1+\cdots+q_{j-1}}P_k(A_1,\ldots,D^\nabla A_j,\ldots,A_k).$$
In particular, the signed sum of the graded connection-commutator terms is
zero. For $k=0$, the assertion is $dP_0=0$. The identity is local and hence
also holds in boundary charts by restriction of the same coefficient
calculation.

## Facts & Assumptions

**Given:** A smooth $G$-frame chart, a compatible connection, the invariant
polarization $P_k$, and homogeneous $\mathfrak g$-valued forms $A_j$ with
degrees $q_j\geq0$.

[F1] A compatible connection has a $\mathfrak g$-valued local connection
form, and invariant-polynomial evaluation uses the listed-order wedge
extension ([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F2] The polarization is symmetric and satisfies
$$\sum_{j=1}^kP_k(Y_1,\ldots,[X,Y_j],\ldots,Y_k)=0\quad(X,Y_j\in\mathfrak g)$$
([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F3] The covariant exterior derivative of an $\operatorname{End}(E)$-valued
form is defined by alternating the induced covariant derivative
([[thm-second-bianchi-identity-for-a-bundle-connection]]).

[F4] The induced Hom connection satisfies
$(\nabla_XA)(s)=\nabla_X(A(s))-A(\nabla_Xs)$
([[def-product-connection-on-tensor-and-hom-bundles]]).

[F5] Exterior differentiation obeys the degree-one graded Leibniz rule
([[thm-the-exterior-derivative-is-a-graded-derivation]]).

[F6] On boundary charts, the exterior derivative is defined by locally
extendible half-space coefficients, independently of the extension, and the
graded Leibniz rule restricts to the boundary
([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

## Proof

**Proof technique:** expand the scalar-form extension of $P_k$ in one local
frame and use infinitesimal invariance coefficient by coefficient.

1.1 In a fixed basis write $A_j=\sum_\mu\alpha_{j\mu}Y_{j\mu}$ and extend $P_k$ by $P_k(A_1,\ldots,A_k)=\sum_{\mu_1,\ldots,\mu_k}P_k(Y_{1\mu_1},\ldots,Y_{k\mu_k})\,\alpha_{1\mu_1}\wedge\cdots\wedge\alpha_{k\mu_k}$; this finite tensor contraction is basis independent. Put $Q_{j-1}=q_1+\cdots+q_{j-1}$. The graded Leibniz rule [F5] gives $dP_k(A_1,\ldots,A_k)=\sum_{j=1}^k(-1)^{Q_{j-1}}P_k(A_1,\ldots,dA_j,\ldots,A_k)$. [F1, F5, algebra]

2.1 The covariant exterior derivative is the alternation of the induced End$(E)$ connection by [F3]. From [F4], in this frame $\nabla_X^{\operatorname{End}}B=X(B)+\omega(X)B-B\omega(X)$, so alternation yields $D^\nabla A_j=dA_j+[\omega,A_j]_{\mathrm{gr}}$, where $[\omega,A_j]_{\mathrm{gr}}=\omega\wedge A_j-(-1)^{q_j}A_j\wedge\omega$. Since $\omega$ and $A_j$ are $\mathfrak g$-valued and $\mathfrak g$ is closed under brackets, $D^\nabla A_j$ is $\mathfrak g$-valued. Substituting $dA_j=D^\nabla A_j-[\omega,A_j]_{\mathrm{gr}}$ into step 1.1 reduces the claim to $C=\sum_{j=1}^k(-1)^{Q_{j-1}}P_k(A_1,\ldots,[\omega,A_j]_{\mathrm{gr}},\ldots,A_k)=0$. [F1, F3, F4, step 1.1, algebra]

3.1 Write $\omega$ as a sum of scalar 1-forms times Lie-algebra elements and each $A_j$ as a sum of scalar $q_j$-forms times Lie-algebra elements; locally each scalar form is a sum of coefficient functions times coordinate wedges. Fix one resulting coefficient monomial. In the $j$th graded commutator, reordering the scalar $q_j$-form $\alpha_j\wedge\theta$ to $\theta\wedge\alpha_j$ contributes $(-1)^{q_j}$, canceling its commutator factor and leaving $[X,Y_j]$. Moving $\theta$ past the earlier scalar forms contributes $(-1)^{Q_{j-1}}$, canceling the prefactor in $C$. The common ordered coefficient is therefore $\sum_{j=1}^kP_k(Y_1,\ldots,[X,Y_j],\ldots,Y_k)=0$ by [F2], so every coefficient of $C$ vanishes. The same calculation holds in boundary charts by [F6]. For $k=0$ the form is the constant $P_0$ and its derivative is zero; no simultaneous choice is made. $\square$ [F2, F6, step 1.1, step 2.1, algebra]
