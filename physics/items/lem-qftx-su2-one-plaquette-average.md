---
id: lem-qftx-su2-one-plaquette-average
kind: lemma
title: SU(2) one-plaquette matrix average at strong coupling
status: draft
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega inherited through the finite lattice supplier and imported Lie-group example; the integral argument is choice-free."
deps:
  - def-countable-choice
  - def-qftx-su2-wilson-plaquette-measure
  - ex-unitary-and-special-unitary-lie-groups
  - thm-heine-borel-rn
  - def-borel-sigma-algebra
  - def-measure
  - def-measure-space
  - def-probability-measure
  - def-left-right-and-bi-invariant-borel-measure-on-a-lie-group
  - def-polar-surface-measure-on-the-unit-sphere
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-left-right-and-bi-invariant-borel-measure-on-a-lie-group: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.4.1.1, printed pp. 22–24, for Haar link integrals and the leading strong-coupling coefficient; the exact SU(2) integral is computed locally."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§4.1 and 4.2.2, printed pp. 59–64, for the one-plaquette matrix average and non-Abelian unitary-group integrals; the explicit SU(2) coordinate integration is computed locally."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and use the finite $SU(2)$ Wilson plaquette measure with $\beta>0$ defined above. Put

$$
I_0(\beta):=\int_{SU(2)}e^{\beta\tau(U)}d\mu_2(U),\qquad I_1(\beta):=\int_{SU(2)}\tau(U)e^{\beta\tau(U)}d\mu_2(U),\qquad \lambda(\beta):=I_1(\beta)/I_0(\beta).
$$

Then $\mu_2$ is a normalized bi-invariant Borel probability, $I_0(\beta)>0$, $0<\lambda(\beta)<1$, and the defining-representation matrix expectation is

$$
\int_{SU(2)}U\,d\nu_\beta(U)=\lambda(\beta)I_2.
$$

As $\beta\downarrow0$, $\lambda(\beta)=\beta/4+O(\beta^3)$. The parameter $\beta$ and the one-plaquette expectation are dimensionless.

## Statement references

[[def-qftx-su2-wilson-plaquette-measure|Explicit SU(2) coordinates, round measure, plaquette weight, and trace convention]]

[[ex-unitary-and-special-unitary-lie-groups|Real Lie-group structure of $SU(2)$]]

[[thm-heine-borel-rn|Compactness criterion in $\mathbb R^8$]]

[[def-borel-sigma-algebra|Borel sets on $SU(2)$ and on the coordinate sphere]]

[[def-polar-surface-measure-on-the-unit-sphere|Euclidean round surface measure]]

[[lem-euclidean-chart-measure-agrees-with-polar-surface-measure|Chart-area measure equals the cone-defined sphere measure and is orthogonally invariant]]

[[def-probability-measure|Normalized probability measure]]

[[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group|Bi-invariance of a Borel measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra for the spherical coordinates]]

[[def-product-measure-on-sigma-finite-spaces|Product measure]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Product measure existence and rectangle formula]]

[[def-tdmath-measure-integral|Measure integral]]

[[def-measure-with-density|Probability measure with density $z_\beta^{-1}e^{\beta\tau}$]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces|Tonelli's theorem]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for bounded integrands on probability spaces]]

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64, for one-plaquette reduction and non-Abelian group integrals](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

[Meyer, §1.4.1.1, printed pp. 22–24, for normalized link integration and the strong-coupling Wilson expansion](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\beta>0$, the defining representation of $SU(2)$, and the explicit round measure and weight.

[A1] $\mathrm{AC}_\omega$ is inherited through the supplied Lie-algebra and Lie-group constructions; this proof uses no further choice. [[def-countable-choice]]

[F1] [[def-qftx-su2-wilson-plaquette-measure]]: $SU(2)$ is the matrix set $\{U:U^*U=I_2,\det U=1\}$, $\tau(U)=\tfrac12\operatorname{Tr}_2(U)=x_0$, and $\mu_2$ is the pushforward of normalized round surface measure $\sigma_3$ on $S^3$; explicitly, for every Borel $A\subseteq SU(2)$, $\mu_2(A)=\sigma_3(\{x\in S^3:U(x)\in A\})$. The same definition states the spherical-coordinate density that step 1.2 establishes locally before using.

[F2] [[ex-unitary-and-special-unitary-lie-groups]]: $SU(2)$ with this matrix set and multiplication is a finite-dimensional real Lie group.

[F3] [[thm-heine-borel-rn]]: a closed bounded subset of $\mathbb R^8$ is compact; its proof is choice-free.

[F4] Here $\sigma_3$ means Euclidean surface area on the coordinate sphere, normalized by its total area; the chart-area measure is the cone-defined polar surface measure, and orthogonal transformations preserve it. In a smooth parametrization its density is the square root of the Gram determinant of the coordinate tangent vectors. [[def-polar-surface-measure-on-the-unit-sphere]] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]

[F5] The coordinate integrands are continuous and bounded on finite-measure coordinate domains; therefore their absolute integrals are finite. The finite product-coordinate integrations obey Tonelli for nonnegative functions and Fubini for $L^1$ functions. [[def-tdmath-measure-integral]] [[def-integrable-real-and-complex-functions-and-their-integrals]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] Writing $X(a,b)=\begin{pmatrix}a&b\\-\bar b&\bar a\end{pmatrix}$, matrix multiplication satisfies $X(c,d)X(a,b)=X(ca-d\bar b,\,cb+d\bar a)$ and $X(a,b)X(c,d)=X(ac-b\bar d,\,ad+b\bar c)$. Thus left and right multiplication preserve this real four-dimensional matrix subspace and are real-linear in the coordinates of $S^3$.

## Proof

**Proof technique:** direct coordinate integration.

1.1 In $M_2(\mathbb C)\cong\mathbb R^8$, the equations $U^*U=I_2$ and $\det U=1$ define a closed set, and $U^*U=I_2$ implies $\|U\|_F^2=\operatorname{Tr}(U^*U)=2$, so the set is bounded. By [F3] it is compact; [F2] gives the stated smooth Lie-group structure. It is noncommutative: $A=\operatorname{diag}(i,-i)$ and $B=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ lie in $SU(2)$, while $AB=-BA$ and $AB\ne0$. The set-theoretic premise inherited by the lattice definitions is $\mathrm{AC}_\omega$ [A1]. [A1, F1, F2, F3, algebra]

1.2 The coordinate map $\Xi:S^3\to SU(2)$, $x\mapsto U(x)$, is a bijection. Indeed, for $U=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SU(2)$, $U^{-1}=U^*=\begin{pmatrix}\bar a&\bar c\\\bar b&\bar d\end{pmatrix}$ while the adjugate formula gives $U^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$, so $d=\bar a$ and $c=-\bar b$; unitarity gives $|a|^2+|b|^2=1$. Writing $a=x_0+ix_3$ and $b=x_2+ix_1$ recovers a unique $x\in S^3$, and direct multiplication shows every such $x$ gives an element of $SU(2)$. The map and its inverse are smooth coordinate maps. For round measure, use $x=q(\theta,\varphi,\psi)=(\cos\theta,\sin\theta\sin\varphi\cos\psi,\sin\theta\sin\varphi\sin\psi,\sin\theta\cos\varphi)$ on $0<\theta,\varphi<\pi$, $0<\psi<2\pi$. Its three coordinate tangent vectors are pairwise orthogonal with squared lengths $1$, $\sin^2\theta$, and $\sin^2\theta\sin^2\varphi$, so the induced surface-area density is $\sin^2\theta\sin\varphi\,d\theta\,d\varphi\,d\psi$. The chart boundary is a finite union of lower-dimensional smooth pieces and has zero three-dimensional surface area. Integration gives total area $(\int_0^\pi\sin^2\theta\,d\theta)(\int_0^\pi\sin\varphi\,d\varphi)(\int_0^{2\pi}d\psi)=2\pi^2$. Normalizing therefore gives $d\mu_2=(2/\pi)\sin^2\theta\,d\theta\,d\omega_2$ with $d\omega_2=(1/(4\pi))\sin\varphi\,d\varphi\,d\psi$, exactly the density stated in [F1], and total mass one. For $V\in SU(2)$, the maps $x\mapsto\Xi^{-1}(V\Xi(x))$ and $x\mapsto\Xi^{-1}(\Xi(x)V)$ are real-linear by [F6] and preserve $|x|$, since $\|\Xi(x)\|_F^2=2|x|^2$ and left and right multiplication by a unitary matrix preserve Frobenius norm. Their restrictions to $S^3$ are orthogonal transformations, which preserve round measure. Thus the pushforward formula [F1] makes $\mu_2$ a normalized bi-invariant Borel probability. [F1, F2, F4, F6, algebra]

2.1 In the coordinates established in step 1.2, $\tau(U)=\cos\theta$. Because $\mu_2$ is a probability and $-\beta\leq\beta\tau(U)\leq\beta$, the continuous factor $e^{\beta\tau}$ is bounded between $e^{-\beta}$ and $e^\beta$; hence $e^{-\beta}\leq I_0(\beta)\leq e^\beta$ and $I_0(\beta)$ is finite and positive. The density $z_\beta^{-1}e^{\beta\tau}$ therefore defines the probability $\nu_\beta$ [F5]. The angular vector $n\in S^2$ has mean zero by the measure-preserving symmetry $n\mapsto-n$. The coordinate integrands are continuous and bounded on the finite product-coordinate probability domain, so they are $L^1$ by [F5]; Fubini separates the angular and radial integrals. The matrix coordinates then give $\int Ue^{\beta\tau(U)}d\mu_2(U)=I_1(\beta)I_2$, proving $\int U\,d\nu_\beta(U)=\lambda(\beta)I_2$. [F1, F5, step 1.2, algebra]

3.1 The transformation $U\mapsto-U$ corresponds to the orthogonal map $x\mapsto-x$, so it preserves $\mu_2$ and sends $\tau$ to $-\tau$. Consequently $I_1(\beta)=\int\tau(U)\sinh(\beta\tau(U))d\mu_2(U)>0$ for $\beta>0$: the integrand is nonnegative everywhere and strictly positive on, for example, the coordinate region $0<\theta<\pi/3$, which has positive measure by the density in step 1.2. Also $I_0-I_1=\int(1-\tau(U))e^{\beta\tau(U)}d\mu_2(U)>0$, since $\tau\leq1$ and equality holds only at the identity matrix, whose singleton has zero round measure by the coordinate density. Thus $0<\lambda<1$. [F1, step 1.2, step 2.1, algebra]

4.1 The measure from step 1.2 is invariant under every orthogonal transformation of $\mathbb R^4$. Coordinate sign changes give $\int x_0d\mu_2=0$ and permutation symmetry makes all four squared-coordinate integrals equal; integrating $\sum_{j=0}^3x_j^2=1$ therefore gives $\int x_0^2d\mu_2=1/4$. Taylor's formula for $e^{\beta x_0}$ has a remainder uniform for $|x_0|\leq1$ on a neighborhood of $\beta=0$; its integrals are finite because $\mu_2$ is a probability. Odd moments vanish under $x_0\mapsto-x_0$. Thus $I_0(\beta)=1+\beta^2/8+O(\beta^4)$ and $I_1(\beta)=\beta/4+O(\beta^3)$, so division gives $\lambda(\beta)=\beta/4+O(\beta^3)$. [F1, F5, step 1.2, algebra] ∎
