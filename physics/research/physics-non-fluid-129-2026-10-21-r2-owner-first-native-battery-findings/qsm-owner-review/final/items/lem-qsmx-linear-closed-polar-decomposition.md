---
id: lem-qsmx-linear-closed-polar-decomposition
kind: lemma
title: Polar decomposition of a closed densely defined operator
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: null
deps:
  - def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-hilbert-orthogonal-projection
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-monotone-convergence-for-the-integral
  - lem-kernel-range-orthogonality-for-hilbert-adjoints
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-isometry-coisometry-and-partial-isometry
dependency_roles:
  def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-kernel-range-orthogonality-for-hilbert-adjoints: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-isometry-coisometry-and-partial-isometry: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "Appendix A.1, PDF pp. 142–149, positive self-adjoint operators; the closed-operator polar argument is proved here"
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §I.4.2, PDF pp. 19–21, positive square roots; the unbounded graph argument is proved here"
---

## Statement

Assume the Axiom of Choice. Let $H_1,H_2$ be complex Hilbert spaces and let
$A:D(A)\subseteq H_1\to H_2$ be a linear operator with dense domain and closed
graph. Define $A^*$ as in the local Hilbert-space adjoint convention. Then
$T:=A^*A$, on
$D(T)=\{x\in D(A):Ax\in D(A^*)\}$, is positive and self-adjoint. Its positive
square root $P:=T^{1/2}$ has domain $D(P)=D(A)$ and satisfies
$\|Px\|=\|Ax\|$ for every $x\in D(A)$. There is a unique partial isometry
$U:H_1\to H_2$ such that
$$A=UP,\qquad \ker U=\ker A.$$
Its initial space is $\overline{\operatorname{ran}P}=(\ker A)^\perp$ and its
final space is $\overline{\operatorname{ran}A}$. If $A$ is injective and has
dense range, then $U$ is unitary.

## Statement references

[[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]

[[def-axiom-of-choice]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

## Facts & Assumptions

**Given:** Choice, complex Hilbert spaces $H_1,H_2$, and a densely defined
linear $A:D(A)\subseteq H_1\to H_2$ whose graph is closed.

[F1] The graph is a closed linear subspace of the Hilbert direct sum
$H_1\oplus H_2$. Every closed subspace has an orthogonal projection under
Countable Choice
([[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]],
[[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[def-hilbert-orthogonal-projection]]).

[F2] For densely defined $A$, $y\in D(A^*)$ exactly when
$x\mapsto\langle Ax,y\rangle$ is bounded in the $H_1$ norm; then
$\langle Ax,y\rangle=\langle x,A^*y\rangle$
([[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]).

[F3] The unbounded spectral theorem for a positive self-adjoint $T$ supplies
its spectral measure, the domain calculus for $T^{1/2}$, and bounded spectral
cutoffs ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F4] For a positive spectral measure $\mu$, nonnegative measurable functions
$g_n\uparrow g$ satisfy $\int g_n\,d\mu\uparrow\int g\,d\mu$
([[thm-monotone-convergence-for-the-integral]]).

[F5] For a densely defined operator, the closure of its range is the
orthogonal complement of the kernel of its adjoint
([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[F6] A partial isometry is an isometry on its initial space and zero on its
orthogonal complement; its final space is the closure of its range
([[def-isometry-coisometry-and-partial-isometry]]).

[A1] Choice implies Countable Choice, the hypothesis for the graph projection
and Hilbert orthogonal decompositions
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** [A1], $H_1,H_2$, and $A$ as in the Statement.

1.1 If $H_1=\{0\}$, density forces $D(A)=\{0\}$ and $A=0$; take $T=P=U=0$.
Otherwise let $y\in H_1$. Project $(y,0)$ orthogonally onto the closed graph
$\Gamma(A)$ to obtain $(x,Ax)$. Orthogonality against every $(z,Az)$ with
$z\in D(A)$ gives
$\langle Az,Ax\rangle=\langle z,y-x\rangle$. By [F2], $Ax\in D(A^*)$ and
$A^*Ax=y-x$, so $(I+T)x=y$. Thus $I+T$ is onto; it is injective because
$\langle (I+T)x,x\rangle=\|x\|^2+\|Ax\|^2$, which vanishes only for $x=0$.
[A1, F1, F2, construct]

2.1 Let $R=(I+T)^{-1}$. If $x=Ry$, the preceding identity and
Cauchy–Schwarz give $\|Ry\|\le\|y\|$, so $R$ is bounded. For $x=Ry$ and
$w=Rz$, the graph-projection identity applied with test vectors $w$ and $x$
gives $\langle y-x,w\rangle=\langle Ax,Aw\rangle$ and
$\langle z-w,x\rangle=\langle Aw,Ax\rangle$. Conjugating the second equality
and comparing shows $\langle Ry,z\rangle=\langle y,Rz\rangle$; hence $R$ is
self-adjoint. It is injective and its range is exactly $D(T)$, so [F5] gives
$\overline{D(T)}=\overline{\operatorname{ran}R}=H_1$. The operator $T$ is
symmetric, because for $x,y\in D(T)$,
$\langle Tx,y\rangle=\langle Ax,Ay\rangle=\langle x,Ty\rangle$, and positive,
because $\langle Tx,x\rangle=\|Ax\|^2$. Finally let $y\in D(T^*)$ and choose
$x\in D(T)$ with $(I+T)x=(I+T^*)y$, possible by step 1.1. Then
$(I+T^*)(y-x)=0$. If $v$ lies in this kernel, then
$\langle (I+T)z,v\rangle=0$ for every $z\in D(T)$; surjectivity of $I+T$
forces $v=0$. Thus $y=x\in D(T)$ and $T^*y=Ty$. Therefore $T$ is
self-adjoint. [A1, F2, F5, step 1.1, algebra]

3.1 Let $E$ be the spectral measure of the positive self-adjoint $T$, and set
$P=T^{1/2}$. For $x\in D(T)$, the spectral calculus and the adjoint identity
give $\|Px\|^2=\langle Tx,x\rangle=\|Ax\|^2$. Now take any $x\in D(A)$ and,
for each integer $n\ge1$, put $x_n=n(n+T)^{-1}x$. Then $x_n\in D(T)$ and
$Tx_n=n(x-x_n)$. For $z\in D(A)$, write $d=z-x_n$. The adjoint identity gives
$\langle Ad,Ax_n\rangle=\langle d,Tx_n\rangle
=-n\langle d,x_n-x\rangle$. Expanding squared norms therefore yields
$$\|Az\|^2+n\|z-x\|^2 =\|Ax_n\|^2+n\|x_n-x\|^2+\|Ad\|^2+n\|d\|^2.$$
Taking $z=x$ shows $\|Ax_n\|^2\le\|Ax\|^2$. If $\mu_x(B)=\langle E(B)x,x\rangle$,
then
$\|Px_n\|^2=\int_{[0,\infty)}\lambda\bigl(n/(n+\lambda)\bigr)^2\,d\mu_x(\lambda)$.
The integrands increase pointwise to $\lambda$, so [F4] gives
$\int\lambda\,d\mu_x\le\|Ax\|^2$. Hence $x\in D(P)$ and
$\|Px\|\le\|Ax\|$. [F2, F3, F4, step 2.1, algebra]

4.1 Conversely, if $x\in D(P)$, let $x_n=E([0,n])x$. The spectral theorem
gives $x_n\in D(T)$, $x_n\to x$, and $Px_n\to Px$. Step 3.1 applied to
$x_n-x_m\in D(T)$ shows that $Ax_n$ is Cauchy and
$\|Ax_n-Ax_m\|=\|P(x_n-x_m)\|$. Closedness of $A$ then gives $x\in D(A)$
and $Ax=\lim_n Ax_n$; taking norms yields $\|Ax\|=\|Px\|$. Together with
step 3.1 this proves $D(P)=D(A)$ and the asserted norm identity. [F1, F3,
step 3.1]

5.1 On $\operatorname{ran}P$, define $V(Px)=Ax$. If $Px=Py$, then
$\|A(x-y)\|=\|P(x-y)\|=0$, so $V$ is well defined; the norm identity makes it
an isometry. Extend it continuously to $\overline{\operatorname{ran}P}$ and
set it to zero on $\ker P$. Since $P$ is self-adjoint,
$H_1=\overline{\operatorname{ran}P}\oplus\ker P$; also
$\ker P=\ker A$. The resulting $U$ is a partial isometry,
$A=UP$, and its final space is $\overline{\operatorname{ran}A}$. If $A$ is
injective with dense range, its initial and final spaces are all of $H_1$ and
$H_2$, respectively, so $U$ is unitary. Any partial isometry with the stated
factorization and kernel agrees with $U$ on $\operatorname{ran}P$ and vanishes
on $\ker P$; continuity gives uniqueness. [F1, F5, F6, step 4.1, algebra]

6.1 Steps 1.1–5.1 prove positivity and self-adjointness of $A^*A$, the domain
and norm identity for its positive square root, the polar factorization, and
the asserted initial/final spaces and uniqueness. [step 1.1, step 2.1,
step 3.1, step 4.1, step 5.1] ∎
