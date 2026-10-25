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
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
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

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64, for one-plaquette reduction and non-Abelian group integrals](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

[Meyer, §1.4.1.1, printed pp. 22–24, for normalized link integration and the strong-coupling Wilson expansion](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\beta>0$, the defining representation of $SU(2)$, and the explicit round measure and weight.

[A1] $\mathrm{AC}_\omega$ is inherited through the supplied Lie-algebra and Lie-group constructions; this proof uses no further choice. [[def-countable-choice]]

[F1] [[def-qftx-su2-wilson-plaquette-measure]]: $SU(2)$ is the matrix set $\{U:U^*U=I_2,\det U=1\}$, $\tau(U)=\tfrac12\operatorname{Tr}_2(U)=x_0$, and $\mu_2$ is normalized round measure on the coordinate sphere $S^3$.

[F2] [[ex-unitary-and-special-unitary-lie-groups]]: $SU(2)$ with this matrix set and multiplication is a finite-dimensional real Lie group.

[F3] [[thm-heine-borel-rn]]: a closed bounded subset of $\mathbb R^8$ is compact; its proof is choice-free.

## Proof

**Proof technique:** direct coordinate integration.

1.1 In $M_2(\mathbb C)\cong\mathbb R^8$, the equations $U^*U=I_2$ and $\det U=1$ define a closed set, and $U^*U=I_2$ implies $\|U\|_F^2=\operatorname{Tr}(U^*U)=2$, so the set is bounded. By [F3] it is compact; [F2] gives the stated smooth Lie-group structure. It is noncommutative: $A=\operatorname{diag}(i,-i)$ and $B=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ lie in $SU(2)$, while $AB=-BA$ and $AB\ne0$. The set-theoretic premise inherited by the lattice definitions is $\mathrm{AC}_\omega$ [A1]. [A1, F1, F2, F3, algebra]

1.2 The coordinate density in [F1] has total mass $(2/\pi)(\int_0^\pi\sin^2\theta\,d\theta)=1$. For fixed $V\in SU(2)$, left and right multiplication on $M_2(\mathbb C)$ are real-linear Frobenius isometries: for every $X\in M_2(\mathbb C)$, $\|VX\|_F^2=\operatorname{Tr}(X^*V^*VX)=\|X\|_F^2$ and $\|XV\|_F^2=\operatorname{Tr}(V^*X^*XV)=\|X\|_F^2$, using $V^*V=VV^*=I_2$ and cyclicity of trace. Since multiplication maps $SU(2)$ onto itself, their restrictions preserve its induced round surface measure. Therefore $\mu_2$ is normalized and bi-invariant. [F1, F2, algebra]

2.1 In spherical coordinates $\tau(U)=\cos\theta$. Since $-\beta\leq\beta\tau(U)\leq\beta$, we have $e^{-\beta}\leq I_0(\beta)\leq e^\beta$, so $I_0(\beta)$ is finite and positive and $\nu_\beta$ is a probability. The angular vector $n\in S^2$ has mean zero by the measure-preserving symmetry $n\mapsto-n$. The matrix coordinates therefore give $\int Ue^{\beta\tau(U)}d\mu_2(U)=I_1(\beta)I_2$, which proves the matrix-average formula. [F1, step 1.2, algebra]

3.1 The transformation $U\mapsto-U$ preserves $\mu_2$ and sends $\tau$ to $-\tau$, so $I_1(\beta)=\int\tau(U)\sinh(\beta\tau(U))d\mu_2(U)>0$ for $\beta>0$: the integrand is nonnegative everywhere and strictly positive wherever $\tau\ne0$, a set of positive measure. Also $I_0-I_1=\int(1-\tau(U))e^{\beta\tau(U)}d\mu_2(U)>0$, since $\tau\leq1$ and equality holds only at the single identity matrix, which has round measure zero. Thus $0<\lambda<1$. [F1, step 1.2, step 2.1, algebra]

4.1 On $S^3$, symmetry of its four coordinates gives $\int x_0d\mu_2=0$; because $\sum_{j=0}^3x_j^2=1$ and each coordinate has the same squared integral, $\int x_0^2d\mu_2=1/4$. Taylor expansion of $e^{\beta x_0}$ is uniform for $|x_0|\leq1$ near $\beta=0$, and odd moments vanish under $x_0\mapsto-x_0$. Hence $I_0(\beta)=1+\beta^2/8+O(\beta^4)$ and $I_1(\beta)=\beta/4+O(\beta^3)$, so division gives $\lambda(\beta)=\beta/4+O(\beta^3)$. [F1, step 1.2, algebra] ∎
