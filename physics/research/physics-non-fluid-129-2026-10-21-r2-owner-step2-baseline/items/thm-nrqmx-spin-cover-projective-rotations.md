---
id: thm-nrqmx-spin-cover-projective-rotations
kind: theorem
domain: mathematics
title: "Spin rotations and projective $SO(3)$"
status: draft
origin: pipeline
dependency_level: 0
deps:
  - thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
  - ex-su-two-to-so-three-as-a-covering-homomorphism
  - def-countable-choice
  - def-strongly-continuous-unitary-representation
dependency_roles:
  thm-nrqm-orbital-and-spin-finite-spin-block-decomposition: mathematical-premise
  ex-su-two-to-so-three-as-a-covering-homomorphism: mathematical-premise
  def-countable-choice: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter Bongaarts, Quantum Theory: A Mathematical Approach, Chapter 24, §24.8.1–§24.8.5, pp. 385–388"
      url: "https://www.ndl.ethernet.edu.et/bitstream/123456789/75323/1/429.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7, §7.1, pp. 141–152"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9, §2, pp. 11–18"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume Countable Choice. Let $SU(2)=\{W\in M_2(\mathbb C):W^*W=I,\det W=1\}$, and let $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. For $i\in\{x,y,z\}$ put $A_i(t)=\cos(t/2)I-i\sin(t/2)\sigma_i$. Let $V\ne\{0\}$ be a finite-dimensional complex Hilbert space and let $D:SU(2)\to U(V)$ be a differentiable unitary representation. Define its self-adjoint infinitesimal generators $J_i$ by $\frac{d}{dt}D(A_i(t))|_{t=0}=-iJ_i$. Assume $[J_x,J_y]=iJ_z$, $[J_y,J_z]=iJ_x$, and $[J_z,J_x]=iJ_y$, and that the triple is irreducible (no nonzero proper subspace is invariant under all three). The spin label $s\in\{0,\tfrac12,1,\tfrac32,\ldots\}$ is its largest $J_z$ eigenvalue, as in the finite spin-block classification. Then

$$D(-I)=(-1)^{2s}I_V.$$

Let $\rho:SU(2)\to SO(3)$ be the standard two-sheeted covering homomorphism with kernel $\{I,-I\}$. The ray action $R\mapsto[D(W)]$ for any lift $W$ of $R$ is a well-defined continuous homomorphism $SO(3)\to PU(V)$, where $PU(V)=U(V)/\{zI:|z|=1\}$. For integer $s$, $D$ itself descends to an ordinary unitary representation of $SO(3)$; for half-integer $s$, its unitary representation does not descend, while its ray representation does. No classification of all projective representations of $SO(3)$ is asserted.

The projective descent is summarized by the following commutative diagram; $q$ is the quotient map $U(V)\to PU(V)$ and $\overline D$ is the ray representation just defined.

```tikzcd
\begin{tikzcd}
SU(2) \arrow[r,"D"] \arrow[d,"\rho"'] & U(V) \arrow[d,"q"]\\
SO(3) \arrow[r,"\overline D"'] & PU(V)
\end{tikzcd}
```

The proof below verifies that $q\circ D$ is constant on each $\rho$-fiber, which defines $\overline D$ and makes this diagram commute; no proof step relies on the diagram.

## Statement references

[[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]]

[[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[[def-countable-choice]]

[[def-strongly-continuous-unitary-representation]]

## Facts & Assumptions

**Given:** Countable Choice; the spin label $s$; a finite-dimensional complex Hilbert space $V$; a differentiable unitary representation $D$ with the single spin-$s$ generator block; and the standard cover $\rho:SU(2)\to SO(3)$.

[A1] Countable Choice (AC$_\omega$) is the choice-function principle for every countable family of nonempty sets. [[def-countable-choice]]

[F1] For a spin-$s$ irreducible self-adjoint generator triple, there is an orthonormal basis $v_k$ for $k=0,\ldots,2s$ with $J_zv_k=(s-k)v_k$; the raising and lowering operators connect successive basis vectors with their stated finite spin coefficients. [[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]]

[F2] Under AC$_\omega$, $\rho:SU(2)\to SO(3)$ is a surjective two-sheeted covering homomorphism with kernel $\{I,-I\}$. [[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[F3] A unitary representation is a homomorphism into bijective complex-linear isometries, and unitary equivalence means there is a unitary intertwiner. [[def-strongly-continuous-unitary-representation]]

## Proof

1.1 Each $\sigma_i$ is self-adjoint, satisfies $\sigma_i^2=I$, and has eigenvalues $1,-1$, so $A_i(t)=e^{-it\sigma_i/2}$ is unitary with determinant $1$ and obeys $A_i(t+u)=A_i(t)A_i(u)$; in particular $A_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2})$. For $U(t):=D(A_z(t))$, the generator convention gives $U'(0)=-iJ_z$. Since this one-parameter subgroup is abelian, $U(t+h)=U(t)U(h)=U(h)U(t)$; differentiating the two products at $h=0$ gives $U'(t)=U(t)(-iJ_z)=(-iJ_z)U(t)$. Differentiating $e^{itJ_z}U(t)$ now shows it is constant, hence $D(A_z(t))=e^{-itJ_z}$. [given, F3, algebra]

1.2 By [F1], choose the orthonormal spin-$s$ basis with $J_zv_k=(s-k)v_k$ for $k=0,\ldots,2s$. The matrix exponential power series acts on each eigenvector by its scalar exponential, so $e^{-i2\pi J_z}v_k=e^{-i2\pi(s-k)}v_k=(-1)^{2s}v_k$, since $e^{i2\pi k}=1$. [F1, algebra]

2.1 $A_z(2\pi)=-I$, so step 1.1 gives $D(-I)=e^{-i2\pi J_z}$. Step 1.2 evaluates this operator on an orthonormal basis and proves $D(-I)=(-1)^{2s}I_V$. [step 1.1, step 1.2, algebra]

3.1 By [F2], every $R\in SO(3)$ has exactly two lifts $W$ and $-W$. The representation law gives $D(-W)=D(-I)D(W)=(-1)^{2s}D(W)$ by step 2.1. The scalar is a phase, so the projective class $[D(W)]\in PU(V)$ is independent of the lift. If $R_1=\rho(W_1)$ and $R_2=\rho(W_2)$, then $W_1W_2$ lifts $R_1R_2$, and $[D(W_1W_2)]=[D(W_1)][D(W_2)]$; hence the ray map is a homomorphism. It is continuous because the covering has local inverse sections and $D$ is continuous. [A1, F2, F3, step 2.1, algebra]

4.1 If $s$ is integer, $(-1)^{2s}=1$, so $D(W)$ is independent of the lift; defining $\widetilde D(R)=D(W)$ gives a unitary representation because products of lifts lift the product, as in step 3.1, and it is continuous by the same local-section argument. If $s$ is half-integer, $(-1)^{2s}=-1$, so the two lifts $I$ and $-I$ of the identity have images $I_V$ and $-I_V$; these differ since $V\ne\{0\}$. Therefore $D$ cannot factor as a unitary representation through $\rho$, although its projective class from step 3.1 does factor. [A1, F2, step 2.1, step 3.1, algebra] ∎
