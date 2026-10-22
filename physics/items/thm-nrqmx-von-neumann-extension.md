---
id: thm-nrqmx-von-neumann-extension
kind: theorem
title: Unitary deficiency parameterization at a reference scale
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-nrqmx-extension-data
  - def-deficiency-subspaces-and-deficiency-indices
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-axiom-of-choice
  - def-countable-choice
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-cayley-transform-of-a-self-adjoint-operator
  - thm-cayley-correspondence
  - def-injection-surjection-bijection
dependency_roles:
  def-nrqmx-extension-data: mathematical-premise
  def-deficiency-subspaces-and-deficiency-indices: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  def-cayley-transform-of-a-self-adjoint-operator: mathematical-premise
  thm-cayley-correspondence: mathematical-premise
  def-injection-surjection-bijection: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 2.6, Theorems 2.25–2.26, printed pp.81–83"
    - title: "Ovidiu Costin, Functional Analysis and Elements of Resurgence Theory"
      url: "https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf"
      locator: "Section 11.3, Theorems 11.3.6–11.3.7, printed pp.82–83"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H$ be a complex Hilbert
space and $S:D(S)\to H$ a densely defined, closed, symmetric linear operator.
Fix $E_*>0$ and let $N_\pm=N_\pm(S;E_*)$ and
$n_\pm=\dim N_\pm$ be the scaled deficiency spaces and indices. For every
unitary map $V:N_+\to N_-$, the operator
$$D(S_V)=D(S)\oplus\{u+Vu:u\in N_+\},\qquad S_V(f+u+Vu)=Sf+iE_*u-iE_*Vu$$
is a self-adjoint extension of $S$. Every self-adjoint extension of $S$ is
uniquely $S_V$ for one such $V$. Consequently $S$ has a self-adjoint
extension if and only if $n_+=n_-$.

## Statement references

[[def-nrqmx-extension-data]]

[[def-deficiency-subspaces-and-deficiency-indices]]

## Facts & Assumptions

**Given:** The Hilbert space, closed symmetric operator, reference scale,
deficiency spaces, and indices in the Statement. All inner products are
linear in the first argument.

[A1] The Axiom of Choice is the choice-function principle, and Countable Choice
is its countable-family restriction
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] At scale $E_*$,
$N_\pm=\ker(S^*\mp iE_*I)$ and $n_\pm=\dim N_\pm$; these are closed
Hilbert subspaces, and Hilbert dimension is the cardinality of an orthonormal
basis [[def-nrqmx-extension-data]]
[[def-deficiency-subspaces-and-deficiency-indices]].

[F2] For a densely defined operator $A$,
$\operatorname{ran}(A-z)^\perp=\ker(A^*-\overline z I)$; its adjoint is
closed and reverses densely defined operator inclusion
[[lem-unbounded-adjoint-is-well-defined-and-closed]].

[F3] Every closed linear subspace of a Hilbert space has an orthogonal
complement and gives the unique decomposition into that subspace and its
orthogonal complement
[[thm-orthogonal-decomposition-by-a-closed-subspace]].

[F4] The graph norm of a closed operator is complete; on $D(A)$ it is
$\|f\|_A^2=\|f\|^2+\|Af\|^2$
[[def-unbounded-linear-operator-domain-and-graph]].

[F5] For a self-adjoint operator, its Cayley transform
$C_R=(R-iI)(R+iI)^{-1}$ is unitary; the Cayley map is one-to-one and its
inverse sends a unitary $W$ with $\ker(I-W)=\{0\}$ to a self-adjoint
operator on $\operatorname{ran}(I-W)$
([[def-cayley-transform-of-a-self-adjoint-operator]],
[[thm-cayley-correspondence]]).

[F6] Equal Hilbert dimensions mean that orthonormal bases of the two spaces
have bijective index sets; under Choice each such Hilbert space has an
orthonormal basis and the dimension is independent of that basis
[[def-deficiency-subspaces-and-deficiency-indices]],
[[def-injection-surjection-bijection]].

[F7] The adjoint is characterized by
$\langle Af,g\rangle=\langle f,A^*g\rangle$ for every $f\in D(A)$ and
$g\in D(A^*)$
[[def-adjoint-of-a-densely-defined-unbounded-operator]].

## Proof

**Given:** The objects in the Statement. Put $A=E_*^{-1}S$ on $D(A)=D(S)$.

1.1 The graph of $A$ is the image of the graph of $S$ under the bounded
invertible map $(f,g)\mapsto(f,E_*^{-1}g)$ on $H\oplus H$, so it is closed;
real scaling preserves symmetry. If $g\in D(S^*)$, then for every
$f\in D(S)$,
$\langle Af,g\rangle=E_*^{-1}\langle Sf,g\rangle
=\langle f,E_*^{-1}S^*g\rangle$, so $g\in D(A^*)$ and
$A^*g=E_*^{-1}S^*g$. Conversely, if $g\in D(A^*)$, then
$\langle Sf,g\rangle=E_*\langle Af,g\rangle
=\langle f,E_*A^*g\rangle$, so $g\in D(S^*)$ and
$S^*g=E_*A^*g$. Therefore $D(A^*)=D(S^*)$ and
$A^*=E_*^{-1}S^*$. Since
$A^*\mp iI=E_*^{-1}(S^*\mp iE_*I)$, the ordinary deficiency spaces of
$A$ at $\pm i$ are exactly $N_\pm$. [F1, F7, algebra]

1.2 Suppose $n_+=n_-$. Choose orthonormal bases $(e_j)_{j\in J_+}$ of $N_+$
and $(f_j)_{j\in J_-}$ of $N_-$. By [F6], choose a bijection
$\pi:J_+\to J_-$. The map $V_0e_j=f_{\pi(j)}$ preserves norms on finite
linear combinations by orthonormality, so it extends continuously to an
isometry $V:N_+\to N_-$. Its range contains the finite span of the $f_j$,
which is dense; the range of an isometry from the complete space $N_+$ is
closed, so $V$ is onto and unitary. [A1, F6, construct]

2.1 For $f\in D(A)$, symmetry makes $\langle Af,f\rangle$ real; expanding the
two norms gives
$\|(A\pm iI)f\|^2=\|Af\|^2+\|f\|^2$. Thus $A\pm iI$ are injective. If
$(A\pm iI)f_k$ converges, the norm identity applied to differences makes
$(f_k)$ Cauchy and then $(Af_k)$ Cauchy; closedness of $A$ shows the limit is
in the range. Hence $M_\pm:=\operatorname{ran}(A\pm iI)$ are closed. By [F2]
and [F3], $H=M_+\oplus N_+=M_-\oplus N_-$, with orthogonal sums.
[step 1.1, F2, F3]

2.2 Equip $D(A^*)$ with the graph inner product
$\langle f,g\rangle_{A^*}=\langle f,g\rangle+\langle A^*f,A^*g\rangle$.
It is complete by [F2, F4], and $D(A)$ is a closed subspace because $A$ is
closed and $A^*f=Af$ there. If $z\in D(A^*)$ is graph-orthogonal to $D(A)$,
then for every $f\in D(A)$,
$\langle Af,A^*z\rangle=-\langle f,z\rangle$. By the adjoint definition,
this means $A^*z\in D(A^*)$ and $A^{*2}z=-z$. Therefore
$z_+=(z-iA^*z)/2$ and $z_-=(z+iA^*z)/2$ satisfy
$A^*z_+=iz_+$ and $A^*z_-=-iz_-$, and $z=z_++z_-$. Conversely,
$D(A)$ is graph-orthogonal to both kernels: for $u\in N_+$,
$\langle f,u\rangle+\langle Af,A^*u\rangle
=\langle f,u\rangle+\langle Af,iu\rangle=0$ by the adjoint identity and
conjugate-linearity in the second argument, and the same computation with
$A^*u=-iu$ holds for $u\in N_-$. If $u\in N_+$ and $v\in N_-$, then
$\langle u,v\rangle+\langle A^*u,A^*v\rangle
=\langle u,v\rangle+\langle iu,-iv\rangle=0$. Thus the two kernels are
graph-orthogonal to each other. Applying [F3] in the graph Hilbert space proves the orthogonal
decomposition
$D(A^*)=D(A)\oplus N_+\oplus N_-$. [step 1.1, F2, F3, F4, F7]

3.1 Define $C_A:M_+\to M_-$ by
$C_A((A+iI)f)=(A-iI)f$. Injectivity of $A+iI$ makes this well defined, the
norm identity in step 2.1 makes it an isometry, and it is onto $M_-$. Define
$W(m+u)=C_Am-Vu$ for $m\in M_+$ and $u\in N_+$. The decompositions from
step 2.1 make $W$ well defined; it is unitary because its two orthogonal summands
are mapped isometrically onto $M_-$ and $N_-$. For $f\in D(A)$,
$(I-W)(A+iI)f=2if$, so $\operatorname{ran}(I-W)$ is dense. If $Wz=z$, then
$z$ is orthogonal to $\operatorname{ran}(I-W)$ by unitarity, hence to the
dense domain $D(A)$, so $z=0$. The Cayley correspondence [F5] therefore gives
a self-adjoint operator $A_V$ with Cayley transform $W$. [F2, F3, F5, step 2.1]

4.1 For $m=(A+iI)f$ and $u\in N_+$, direct calculation gives
$(I-W)(m+u)=2if+u+Vu$ and
$i(I+W)(m+u)=2iAf+iu-iVu$. The Cayley inverse is
$A_V=i(I+W)(I-W)^{-1}$ on $\operatorname{ran}(I-W)$, so
$D(A_V)=\operatorname{ran}(I-W)=D(A)+\{u+Vu:u\in N_+\}$ and
$A_V(2if+u+Vu)=2iAf+iu-iVu$. Equivalently, after renaming $2if$ as $f$,
$A_V(f+u+Vu)=Af+iu-iVu$. The sum is direct: if $f=u+Vu\in D(A)$, then
$(I-W)(A+iI)f=2if=(I-W)(2iu)$; injectivity of $I-W$ gives
$(A+iI)f=2iu$. Its left side lies in $M_+$ and its right side in $N_+$,
whose intersection is zero, so $u=f=0$. Multiplication by $E_*$ gives the
displayed domain and action for $S_V=E_*A_V$. The two-way scalar-adjoint
calculation in step 1.1 applies to $A_V$ as well, so
$S_V^*=E_*A_V^*=S_V$. Thus $S_V$ is a self-adjoint
extension of $S$. [F5, step 1.1, step 2.1, step 3.1, algebra]

4.2 Conversely, let $T$ be any self-adjoint extension of $S$ and put
$R=E_*^{-1}T$. The two-way scalar-adjoint calculation in step 1.1 gives
$R^*=E_*^{-1}T^*=R$, so $R$ is a self-adjoint extension of $A$. Its Cayley transform $C_R$
is unitary by [F5] and agrees with $C_A$ on $M_+$, since $R$ equals $A$ on
$D(A)$. A unitary carrying $M_+$ onto $M_-$ carries their orthogonal
complements $N_+$ onto $N_-$ by step 2.1 and [F2]; hence
$C_R(N_+)=N_-$. Put $V=-C_R|_{N_+}$; this is unitary. The
unitary $W$ constructed from this $V$ agrees with $C_R$ on both orthogonal
summands of $H$, so uniqueness in [F5] gives $R=A_V$. This determines $V$
uniquely from $T$ and proves that every self-adjoint extension of $S$ is
uniquely $S_V$. [F2, F5, step 1.1, step 2.1, step 3.1]

5.1 If $n_+=n_-$, step 1.2 supplies a unitary and step 4.1 supplies a
self-adjoint extension. If an extension exists, step 4.2 supplies a unitary
$N_+\to N_-$, so its orthonormal bases have bijective index sets and
$n_+=n_-$. This proves the existence equivalence and the complete
parameterization. [A1, F6, step 1.2, step 4.1, step 4.2] ∎
