---
id: thm-nrqmx-interval-unitary-boundaries
kind: theorem
title: All self-adjoint interval Laplacian boundary conditions
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-nrqmx-extension-data
  - lem-nrqmx-minimal-maximal-interval-laplacian-domains
  - thm-nrqmx-von-neumann-extension
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-endpoint-trace-and-half-line-decay
  - lem-nrqm-intervals-integration-by-parts
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - def-function
  - def-injection-surjection-bijection
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-nrqmx-extension-data: mathematical-premise
  lem-nrqmx-minimal-maximal-interval-laplacian-domains: mathematical-premise
  thm-nrqmx-von-neumann-extension: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  def-function: mathematical-premise
  def-injection-surjection-bijection: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 9.1, Lagrange identity and regular endpoint realizations, printed pp.181–186"
    - title: "Ovidiu Costin, Functional Analysis and Elements of Resurgence Theory"
      url: "https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf"
      locator: "Section 11.3, von Neumann extension theorem, printed pp.82–83"
    - title: "Manuel Asorey, Alberto Ibort, and Giuseppe Marmo, Global Theory of Quantum Boundary Conditions and Topology Change"
      url: "https://arxiv.org/pdf/hep-th/0403048"
      locator: "Section 2, printed pp.4–6; Appendix A, printed pp.19–20, interval Laplacian and U(2) boundary data"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let
$0<L<\infty$, let $H=L^2(0,L;\mathbb C)$, and let $T_{\min}$ and
$T_{\max}=T_{\min}^*$ be the minimal and maximal realizations of
$-D^2$ from the preceding interval-domain lemma. Fix a positive reference
length $\ell$. For $f\in H^2(0,L)$ define
$\Gamma_0f=(f(0),f(L))$ and
$\Gamma_1f=(f'(0),-f'(L))$. Let
$U(2)=\{U\in M_2(\mathbb C):U^*U=UU^*=I_2\}$, where $U^*$ is conjugate
transpose. For each $U\in U(2)$ define
$$D(T_U)=\{f\in H^2(0,L):(U-I_2)\Gamma_0f+i\ell(U+I_2)\Gamma_1f=0\},\qquad T_Uf=-D^2f.$$
Then $T_{\min}\subseteq T_U\subseteq T_{\max}$, each $T_U$ is self-adjoint,
and every self-adjoint realization between $T_{\min}$ and $T_{\max}$ equals
exactly one $T_U$. The reference length makes the value and scaled derivative
boundary vectors have the same units if the interval coordinate is assigned
units; in the dimensionless mathematical model they are numerical vectors.

## Statement references

[[def-nrqmx-extension-data]]

[[lem-nrqmx-minimal-maximal-interval-laplacian-domains]]

[[thm-nrqmx-von-neumann-extension]]

[[def-function]]

[[def-injection-surjection-bijection]]

## Facts & Assumptions

**Given:** $L>0$, the interval Hilbert space, the positive scale $\ell$, and
the operators in the Statement. Inner products are linear in the first
argument.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are the
hypotheses of the interval Sobolev trace and integration-by-parts suppliers.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] $T_{\min}$ has domain consisting of the $H^2$ functions with both value
and derivative traces zero at both endpoints; $T_{\max}$ is $-D^2$ on
$H^2(0,L)$, and the four-coordinate trace map is onto
[[lem-nrqmx-minimal-maximal-interval-laplacian-domains]].

[F2] For $f,g\in H^2(0,L)$,
$$\langle -D^2f,g\rangle-\langle f,-D^2g\rangle=\langle\Gamma_1f,\Gamma_0g\rangle-\langle\Gamma_0f,\Gamma_1g\rangle$$
([[lem-nrqm-intervals-integration-by-parts]]).

[F3] Adjoint inclusion reverses operator inclusion: if $A\subseteq B$, then
$B^*\subseteq A^*$, including their domains
([[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[F4] Every self-adjoint extension of a densely defined closed symmetric
operator is uniquely parameterized by a unitary map between its two
deficiency subspaces, using the graph-domain formula of
[[thm-nrqmx-von-neumann-extension]].

[F5] A function is single-valued on its declared domain, and a bijection is
an injective and surjective function
([[def-function]], [[def-injection-surjection-bijection]]).

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 Let $T$ be any linear operator with $T_{\min}\subseteq T\subseteq T_{\max}$.
For this proof write $\gamma_b f=(\Gamma_0f,\Gamma_1f)\in
\mathbb C^2\times\mathbb C^2$. This is the four-coordinate trace map of
[F1] with the last coordinate sign reversed, so it is onto and has kernel
$D(T_{\min})$. Its image $M:=\gamma_b(D(T))$ is a linear subspace. Since
$\ker\gamma_b=D(T_{\min})\subseteq D(T)$, every $f\in H^2$ whose trace lies
in $M$ differs from a member of $D(T)$ by an element of $D(T_{\min})$; thus
$D(T)=\gamma_b^{-1}(M)$. Conversely, every linear subspace $M$ gives such a
domain because $\gamma_b$ is onto. [A1, F1, construct]

1.2 Define
$B((a,b),(a',b'))=\langle b,a'\rangle-\langle a,b'\rangle$ and
$M^\omega=\{z:B(m,z)=0\text{ for every }m\in M\}$. By [F2], integration by
parts gives $T^*=T_{\gamma_b^{-1}(M^\omega)}$: indeed, since
$T_{\min}\subseteq T$, adjoint inclusion reversal puts $D(T^*)$ inside
$D(T_{\min}^*)=H^2$, and for $g\in H^2$ the adjoint identity for every
$f\in D(T)$ is exactly $B(\gamma_b f,\gamma_b g)=0$. Hence $T$ is self-adjoint
if and only if $M=M^\omega$. [A1, F1, F2, F3]

2.1 Put $\gamma_\ell f=(a,b):=(\Gamma_0f,\ell\Gamma_1f)$ and let
$\widehat M=\gamma_\ell(D(T))$. Equivalently,
$\widehat M=\{(a,b):(a,b/\ell)\in M\}$, where $M$ is the unscaled trace
image from step 1.1. Define
$\widehat B((a,b),(a',b'))=\langle b,a'\rangle-\langle a,b'\rangle$ and
$\widehat M^{\widehat\omega}:=\{z:\widehat B(m,z)=0\text{ for all }m\in
\widehat M\}$.
Since $\widehat B=\ell B$ after undoing the derivative scaling and
$\ell>0$, step 1.2 gives $\widehat M=\widehat M^{\widehat\omega}$ exactly
when $T$ is self-adjoint. The map $\gamma_\ell$ is onto because the trace map
in [F1] is onto and multiplying its derivative coordinates by $\ell>0$ is
invertible. For $x=a+ib$ and $y=a-ib$, direct expansion using
the first-variable-linear inner product gives
$$\widehat B((a,b),(a',b'))=\frac{\langle x,x'\rangle-\langle y,y'\rangle}{2i}.$$
Thus $\widehat M=\widehat M^{\widehat\omega}$ implies that
$(a,b)\mapsto(x,y)$ sends $\widehat M$ to the graph of an
inner-product-preserving linear map $R:X\to\mathbb C^2$, where
$X=\{a+ib:(a,b)\in\widehat M\}$. It is well defined: if a member of
$\widehat M$ has $x=0$, isotropy gives $\|y\|^2=\|x\|^2=0$, so $y=0$.
Maximality forces
$X=\mathbb C^2$. Indeed, define $X^\perp=\{z:\langle x,z\rangle=0\text{ for every }x\in X\}$ with $\langle x,z\rangle=x_1\overline{z_1}+x_2\overline{z_2}$. Every proper complex linear subspace $X$ has a nonzero vector in $X^\perp$, by the following coordinate argument. If $X=\{0\}$, take $x_0=(1,0)$. Otherwise take $0\ne v=(v_1,v_2)\in X$. Every $w\in X$ is a multiple of $v$: if $v_1w_2-v_2w_1\ne0$, the inverse of the two-column matrix $(v,w)$ expresses both standard coordinate vectors as linear combinations of $v,w$, implying $X=\mathbb C^2$; if this determinant is zero, solving in a nonzero coordinate of $v$ gives $w=cv$. Thus for proper $X$ one has $X=\operatorname{span}\{v\}$, and $x_0=(-\overline{v_2},\overline{v_1})\ne0$ satisfies $\langle cv,x_0\rangle=c(-v_1v_2+v_2v_1)=0$. No closed-subspace decomposition or additional choice principle is used. If $X$ were proper, take this $x_0$ and set
$a=x_0/2$, $b=x_0/(2i)$, so $(x,y)=(x_0,0)$. The displayed identity makes
this boundary pair orthogonal for $\widehat B$ to all of $\widehat M$, hence it
lies in $\widehat M^{\widehat\omega}=\widehat M$; then
$x_0\in X\cap X^\perp$, a contradiction. Therefore
$R$ is a linear isometry from $\mathbb C^2$ into $\mathbb C^2$. Let
$e_1,e_2$ be the standard basis and write $Re_1=(\alpha_1,\beta_1)$ and
$Re_2=(\alpha_2,\beta_2)$. Isometry gives
$$|\alpha_1|^2+|\beta_1|^2=|\alpha_2|^2+|\beta_2|^2=1,\qquad
\alpha_1\overline{\alpha_2}+\beta_1\overline{\beta_2}=0.$$
Direct expansion gives
$$|\alpha_1\beta_2-\alpha_2\beta_1|^2=(|\alpha_1|^2+|\beta_1|^2)(|\alpha_2|^2+|\beta_2|^2)-|\alpha_1\overline{\alpha_2}+\beta_1\overline{\beta_2}|^2=1.$$
Thus the matrix $U$ with columns $Re_1,Re_2$ is invertible, so these vectors
span $\mathbb C^2$ and $R$ is onto. Their orthonormality gives
$U^*U=I_2$; since $U$ is invertible, this implies $U^*=U^{-1}$ and hence
$UU^*=I_2$. Thus $U\in U(2)$, and its graph condition is
$U(a+ib)=a-ib$, equivalently
$(U-I_2)a+i(U+I_2)b=0$. This $U$ is unique because its value is fixed for
every $x\in\mathbb C^2$. [A1, F1, F2, step 1.1, step 1.2, algebra]

3.1 Conversely, let $U\in U(2)$ and set
$\widehat M_U=\{(a,b):U(a+ib)=a-ib\}$ in the scaled boundary coordinates.
Every $x\in\mathbb C^2$ occurs, by taking
$a=(x+Ux)/2$ and $b=(x-Ux)/(2i)$. Unitarity gives
$\langle x,x'\rangle=\langle Ux,Ux'\rangle$ for every pair, so the
displayed formula in step 2.1 makes $\widehat M_U$ isotropic. If
$(a,b)\in\widehat M_U^{\widehat\omega}$,
then for every $x'\in\mathbb C^2$ that formula gives
$\langle x',x\rangle=\langle Ux',y\rangle=\langle x',U^*y\rangle$, hence
$x=U^*y$ and $y=Ux$; therefore $(a,b)\in\widehat M_U$. Thus
$\widehat M_U=\widehat M_U^{\widehat\omega}$. Since $\gamma_\ell$ is onto,
the restriction to $\gamma_\ell^{-1}(\widehat M_U)$ is self-adjoint by the
criterion in step 1.2 and the scaling equivalence in step 2.1. Its boundary equation is exactly
the Statement's equation, and its domain lies between $T_{\min}$ and
$T_{\max}$ because it is a restriction of $T_{\max}$ whose domain contains
the zero-trace domain. [step 1.2, step 2.1, algebra]

4.1 The preceding steps give a bijection from $U(2)$ to the entire set of
self-adjoint extensions between $T_{\min}$ and $T_{\max}$. By [F4], that same
extension set is uniquely parameterized by the abstract unitaries between
the deficiency subspaces. Composing the two bijections identifies the
boundary-matrix labels with the abstract deficiency labels and proves that
the displayed boundary family is exhaustive. [A1, F4, F5, step 2.1, step 3.1] ∎
## Remarks

For $U=-I_2$ the condition is $\Gamma_0f=0$, the Dirichlet realization; for
$U=I_2$ it is $\Gamma_1f=0$, the Neumann realization. The parameterization
allows coupled endpoint conditions as well. It is a classification of
mathematical self-adjoint domains and does not select a physical boundary
condition.

