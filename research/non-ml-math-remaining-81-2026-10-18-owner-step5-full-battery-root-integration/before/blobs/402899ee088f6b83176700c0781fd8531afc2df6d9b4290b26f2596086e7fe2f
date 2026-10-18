---
id: thm-qc-tqc-fibonacci-single-qubit-density
kind: theorem
title: Fibonacci single-qubit projective density
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - ex-qc-tqc-fibonacci-qubit-matrices
  - lem-qc-irrational-rotation-dense-on-circle
  - thm-cartans-closed-subgroup-theorem
  - prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra
  - lem-qc-tqc-pu2-is-so3
  - ex-su-two-to-so-three-as-a-covering-homomorphism
  - def-countable-choice
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_level: 10
axiom_use: Assumes exactly ACω, inherited from Cartan's closed-subgroup theorem and the SU(2) to SO(3) supplier; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57; proof route in the present item
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21; cross-check only
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.16–9.17, PDF pp. 59–62; opposite chirality convention
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $B_1,B_2$ be the projective Fibonacci generators on the two-dimensional
three-$\tau$, total-$\tau$ fusion space from
[[ex-qc-tqc-fibonacci-qubit-matrices]]. The subgroup they generate is dense
in $PU(2)$.

## Facts & Assumptions

**Given:** $u=\phi^{-1}$, $v=\phi^{-1/2}$, $r=e^{-3\pi i/5}$, $F=\begin{pmatrix}u&v\\v&-u\end{pmatrix}$, $B_1=\operatorname{diag}(1,r)$, and $B_2=FB_1F$.

[F1] The matrix formulas, unitarity, Artin relation, and noncommutation are verified directly in [[ex-qc-tqc-fibonacci-qubit-matrices]].

[F5] A complex normal endomorphism of a finite-dimensional inner-product space has an orthonormal eigenbasis. [[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F2] If $\alpha/(2\pi)$ is irrational, the powers of the circle rotation $e^{i\alpha}$ are dense in the unit circle. [[lem-qc-irrational-rotation-dense-on-circle]]

[F3] A closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup under ACω; its tangent space is bracket closed. [[thm-cartans-closed-subgroup-theorem]] [[prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]]

[F4] The quotient map $q:SU(2)\to PU(2)$ is a two-sheeted covering, and $PU(2)$ is topologically isomorphic as a group to $SO(3)$. [[lem-qc-tqc-pu2-is-so3]]

[F6] Quaternionic conjugation $\rho:SU(2)\to SO(3)$ is a smooth local diffeomorphism, as shown by its explicit coordinate formula and differential. [[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[F7] A smooth map between manifolds whose differential is an isomorphism at a point is a diffeomorphism between neighborhoods of that point. [[thm-smooth-inverse-function-theorem-on-manifolds]]

[A1] Assume $\mathrm{AC}_\omega$, exactly the hypothesis of [F3] and [F4]. [[def-countable-choice]]

## Proof

1.1 Put $C=B_1B_2^{-1}$. Using $F^2=I$, $v^2=u$, and $r+r^{-1}=-u$, direct multiplication gives $\det C=1$ and $\operatorname{tr}C=r+r^{-1}+(2-r-r^{-1})u^2=u^2$; the last equality uses $u^2+u=1$, since $(2+u)u^2=1$. Thus the eigenvalues of the unitary $C$ are $e^{i\theta}$ and $e^{-i\theta}$, with $2\cos\theta=u^2=\phi^{-2}$. [F1, F5, algebra]

2.1 The number $\phi^{-2}$ has minimal polynomial $x^2-3x+1$, whose other root is $\phi^2>2$. If $e^{i\theta}$ were a root of unity, then $e^{i\theta}+e^{-i\theta}$ would have all algebraic conjugates of absolute value at most $2$, since every such conjugate is a sum of two roots of unity. The conjugate $\phi^2>2$ contradicts this. Hence $\theta/(2\pi)$ is irrational. [given, step 1.1, algebra]

3.1 Let $\bar\rho:PU(2)\to SO(3)$ be the topological group isomorphism supplied by [F4], and transport the standard smooth Lie-group structure of $SO(3)$ to $PU(2)$ along $\bar\rho$. This transported structure has exactly the quotient-metric topology. The covering map $\rho:SU(2)\to SO(3)$ from [F6] satisfies $\rho=\bar\rho\circ q$ and is a smooth local diffeomorphism; hence $q=\bar\rho^{-1}\circ\rho$ is a smooth local diffeomorphism too, so $dq_I$ is an isomorphism on tangent spaces. Since $\theta/\pi$ is irrational by step 2.1, [F2] shows that the projective powers of $C$ are dense in the smooth circle $T=\{[\operatorname{diag}(e^{it},e^{-it})]:t\in\mathbb R\}\subset PU(2)$ after choosing an eigenbasis; under $\bar\rho$ this is the ordinary rotation circle about an axis. Thus $T\subseteq H$, the closure of the projective braid image, and $H$ is closed in the transported Lie group. By [A1] and [F3], $H$ is an embedded Lie subgroup. In the eigenbasis, $C-C^{-1}=\operatorname{diag}(2i\sin\theta,-2i\sin\theta)$ is a nonzero tangent vector to the corresponding circle in $SU(2)$, so $dq_I(C-C^{-1})$ is a nonzero tangent to $T$ and lies in $\operatorname{Lie}(H)$. [A1, F2, F3, F4, F6, step 2.1, construct]

4.1 Write $X=dq(C-C^{-1})\in\operatorname{Lie}(H)$. Conjugation by $[B_1]$ sends $T$ to a circle with tangent $\operatorname{Ad}_{[B_1]}X$. If these circles had the same axis, the rotation in $SO(3)$ induced by $[B_1]$ would either preserve or reverse that axis. A reversing rotation is a half-turn, but this projective generator has angle $3\pi/5\ne\pi$. If it preserved the oriented axis, it would commute projectively with $C$. Choose a determinant-one lift of $[B_1]$ to $SU(2)$, using [F4]. Its conjugate of $C$ would then be either $C$ or $-C$, because the kernel of $q$ is $\{\pm I\}$. The second case contradicts invariance of trace and $\operatorname{tr}C=\phi^{-2}\ne0$, so $B_1$ would commute with $C$, and hence with $B_2$, contrary to [F1]. Therefore the two axes are nonparallel. The real Lie algebra $\mathfrak{so}(3)$ is the three-dimensional space of skew-symmetric $3\times3$ matrices. Under its standard identification with $\mathbb R^3$, the Lie bracket is the cross product up to a nonzero scalar; the bracket of two nonparallel axes is nonzero and independent of both. Thus $\operatorname{Lie}(H)=\mathfrak{so}(3)$ by [F3]. [A1, F1, F3, F4, step 3.1, algebra]

5.1 A connected coordinate neighborhood of the identity in the embedded Lie group $H$ lies in $H^0$; translating it shows that $H^0$ is open in $H$, so $\operatorname{Lie}(H^0)=\operatorname{Lie}(H)$. By step 4.1, the inclusion $H^0\hookrightarrow SO(3)$ has an isomorphism as its differential at the identity. The inverse-function theorem [F7] makes this inclusion a local diffeomorphism, so $H^0$ contains an open neighborhood of the identity and is an open subgroup of $SO(3)$. Since $SO(3)$ is connected, $H^0=SO(3)$ and $H=SO(3)$. By [F4], the projective braid image is dense in $PU(2)$. The only choice assumption is [A1], and the conclusion is projective; no efficient braid-length bound follows. [A1, F3, F4, F7, step 4.1, algebra] ∎
