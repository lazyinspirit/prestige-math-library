---
id: thm-nrqmx-schur-weyl-exchange-blocks
kind: theorem
domain: mathematics
library: mathematics
title: "Unitary exchange blocks for collective spins"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - thm-schur-weyl-decomposition-with-length-cutoff
  - cor-schurs-lemma-for-irreducible-representations
  - cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
  - def-inner-product-space
  - thm-tensor-product-basis-from-bases
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-finite-dimensional-orthogonal-decomposition
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-symmetric-group
  - cor-symmetric-group-has-factorial-cardinality-again
  - def-trace-of-an-endomorphism
dependency_roles:
  def-commuting-symmetric-and-linear-actions-on-tensor-power: mathematical-premise
  thm-complex-irreducibles-of-symmetric-groups-are-specht-modules: mathematical-premise
  thm-schur-weyl-decomposition-with-length-cutoff: mathematical-premise
  cor-schurs-lemma-for-irreducible-representations: mathematical-premise
  cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars: mathematical-premise
  def-inner-product-space: mathematical-premise
  thm-tensor-product-basis-from-bases: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  thm-adjoint-exists-and-is-unique-in-finite-dimension: mathematical-premise
  thm-finite-dimensional-orthogonal-decomposition: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-symmetric-group: mathematical-premise
  cor-symmetric-group-has-factorial-cardinality-again: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Representation Theory, CT, Lent 2005, sections 23.14–24.9, complete course notes"
      url: "https://math.uchicago.edu/~margalit/repthy/RepThry.pdf"
    - title: "Caroline Gruson and Vera Serganova, A Sentimental Journey through Representation Theory: from Finite Groups to Quivers (via Algebras), chapter 6 section 2.2"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
---

## Statement

Let $d\geq1$ and $N\geq0$ be integers, let $V=\mathbb C^d$ with its standard
Hermitian inner product, and give $H_N:=V^{\otimes N}$ its standard
tensor-product inner product. For $\pi\in S_N$ use the left place action
$$\rho(\pi)(v_1\otimes\cdots\otimes v_N):=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(N)},$$
and for $U\in U(d):=\{A\in M_d(\mathbb C):A^*A=I\}$ use the diagonal action
$\Delta_N(U):=U^{\otimes N}$. For a partition $\lambda\vdash N$ with at most
$d$ rows, let $S^\lambda$ be the corresponding complex Specht module and put
$$M_\lambda:=\operatorname{Hom}_{S_N}(S^\lambda,H_N),\qquad d_\lambda:=\dim_{\mathbb C}S^\lambda.$$
Equip $S^\lambda$ with any $S_N$-invariant Hermitian inner product and equip
$M_\lambda$ with the normalized Hilbert-Schmidt inner product
$$\langle f,g\rangle_{M_\lambda}:=d_\lambda^{-1}\operatorname{Tr}(g^*f).$$
Equip each $S^\lambda\otimes M_\lambda$ with the product inner product,
defined on elementary tensors by
$\langle s\otimes f,s'\otimes g\rangle=
\langle s,s'\rangle\langle f,g\rangle$ and extended sesquilinearly, and give
the direct sum the orthogonal direct-sum inner product.
Then the evaluation map
$$\Phi:\bigoplus_{\lambda\vdash N,\ \ell(\lambda)\leq d}S^\lambda\otimes M_\lambda\longrightarrow H_N,\qquad \Phi(s\otimes f):=f(s),$$
is unitary. Under this decomposition every permutation acts on $S^\lambda$
and as the identity on $M_\lambda$, while every diagonal $U(d)$ action acts
as the identity on $S^\lambda$ and by postcomposition on $M_\lambda$. The
multiplicity spaces in the sum are nonzero; partitions with more than $d$
rows have zero multiplicity space.

## Statement references

[[def-commuting-symmetric-and-linear-actions-on-tensor-power]]

[[thm-schur-weyl-decomposition-with-length-cutoff]]

[[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]

## Facts & Assumptions

**Given:** $d\geq1$, $N\geq0$, the standard finite-dimensional Hilbert space
$H_N=(\mathbb C^d)^{\otimes N}$, the left place action of $S_N$, and the
diagonal action of $U(d)$.

[F1] [[def-commuting-symmetric-and-linear-actions-on-tensor-power]]:
on elementary tensors, $\pi$ acts by
$v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(N)}$ and $U\in GL(V)$ acts
by $Uv_1\otimes\cdots\otimes Uv_N$; the two actions commute.

[F2] [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]:
the modules $S^\lambda$, for $\lambda\vdash N$, are a complete irredundant
list of finite-dimensional irreducible complex $S_N$-representations.

[F3] [[thm-schur-weyl-decomposition-with-length-cutoff]]: for finite-dimensional
complex $V$ of dimension $d$ and $N\geq0$, the commuting $S_N$ and $GL(V)$
actions give
$H_N\cong\bigoplus_{\lambda\vdash N,\ \ell(\lambda)\leq d}
S^\lambda\otimes\operatorname{Hom}_{S_N}(S^\lambda,H_N)$; $S_N$ acts on
$S^\lambda$ and $GL(V)$ acts on the multiplicity factor by postcomposition.
The multiplicity space is nonzero exactly for $\ell(\lambda)\leq d$.

[F4] [[cor-schurs-lemma-for-irreducible-representations]]: a nonzero
intertwiner between irreducible representations is an isomorphism.

[F5] [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]:
an endomorphism of an irreducible complex representation is a scalar.

[F6] [[def-inner-product-space]], [[thm-tensor-product-basis-from-bases]]:
the standard tensor words form a finite basis of $H_N$; for $N=0$ the empty
tensor is the one-element basis. Declaring those words orthonormal gives the
standard tensor-product inner product, linear in its first argument; more
generally, elementary tensors from finite bases form a basis of their
algebraic tensor product.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: for a
linear map $T$ between finite-dimensional inner-product spaces, its adjoint
$T^*$ satisfies $\langle Tv,w\rangle=\langle v,T^*w\rangle$; the inner
products here are linear in the first argument.

[F8] [[thm-finite-dimensional-orthogonal-decomposition]]: every subspace of
a finite-dimensional inner-product space has an orthogonal complement, and
the space is their direct sum.

[F9] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
every finite-dimensional inner-product space has an orthonormal basis,
including the empty basis in dimension zero.

[F10] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear
map between finite-dimensional inner-product spaces has a unique adjoint.

[F11] [[def-symmetric-group]],
[[cor-symmetric-group-has-factorial-cardinality-again]]: $S_N$ is a finite
group of order $N!$, with the trivial one-element group for $N=0$.

[F12] [[def-trace-of-an-endomorphism]]: the trace of a finite-dimensional
endomorphism is the sum of its diagonal coefficients in any basis and is
independent of the chosen basis.

## Proof

1.1 On elementary tensors, applying $\rho(\pi)$ after $\Delta_N(U)$ gives
$Uv_{\pi^{-1}(1)}\otimes\cdots\otimes Uv_{\pi^{-1}(N)}$, which is also the
result of applying $\Delta_N(U)$ after $\rho(\pi)$. The tensor-product inner
product makes both actions unitary: $\rho(\pi)$ permutes the factors, and
$U^{\otimes N}$ preserves the inner product of each factor because $U$ is
unitary. [given, F1, F6, algebra]

1.2 The normalized trace formula is an inner product on $M_\lambda$. Choose
an orthonormal basis $(s_k)_{k=1}^{d_\lambda}$ of $S^\lambda$ using [F9].
The adjoint identity [F7], conjugate symmetry, and the diagonal trace formula
[F12] give
$$d_\lambda^{-1}\operatorname{Tr}(g^*f) =d_\lambda^{-1}\sum_k\langle f(s_k),g(s_k)\rangle_{H_N}.$$
This expression is linear in $f$, conjugate-linear in $g$, conjugate
symmetric, and for $g=f$ is a sum of nonnegative squared norms. If it is
zero, every $f(s_k)=0$, hence $f=0$; so it is positive definite. The product
inner product on $S^\lambda\otimes M_\lambda$ is well-defined by its finite
product basis from [F6] and the tensor basis theorem, and is positive definite
by the same coordinate formula. [F6, F7, F9, F12, algebra]

1.3 By [F2] and [F3], the irreducible $S_N$-types occurring in $H_N$ are
exactly the modules $S^\lambda$ with $\lambda\vdash N$ and
$\ell(\lambda)\leq d$. Their multiplicity spaces are
$M_\lambda=\operatorname{Hom}_{S_N}(S^\lambda,H_N)$, and the algebraic
Schur–Weyl decomposition places $S_N$ on the Specht factor and $GL(V)$ on
the multiplicity factor. This gives the algebraic partition and factor-
placement inputs for the local evaluation argument. [F2, F3]

2.1 By [F6], $H_N$ is finite-dimensional. In any nonzero invariant subspace
of the current remainder, choose an invariant subspace $W$ of least positive
dimension; it is irreducible. Its orthogonal complement in that remainder is
invariant: for $x\perp W$ and $w\in W$,
$\langle\rho(\pi)x,w\rangle=\langle x,\rho(\pi)^{-1}w\rangle=0$ because
$W$ is invariant under $\rho(\pi)^{-1}$ and the action is unitary. [F8]
gives the orthogonal splitting at each stage. Repeating in the complement,
whose dimension strictly decreases, yields a finite orthogonal decomposition
of all $H_N$ into irreducible copies. By [F2], each copy has a unique Specht
type. The orthogonal projection onto one copy commutes with $S_N$, since that
copy and the sum of the other invariant copies are invariant. Its restriction
to an inequivalent irreducible copy is an intertwiner, so [F4] forces it to
vanish. Hence copies of distinct Specht types are orthogonal.
[F2, F4, F6, F8, step 1.1, algebra]

3.1 Since $S_N$ is finite by [F11], choose a basis $(v_j)$ of the finite-
dimensional $S^\lambda$ and define its coordinate product
$\langle\sum a_jv_j,\sum b_jv_j\rangle_0:=\sum a_j\overline{b_j}$.
Average this product over $S_N$ by
$\langle v,w\rangle:=|S_N|^{-1}\sum_{\pi\in S_N}
\langle\rho(\pi)v,\rho(\pi)w\rangle_0$. Each summand on $(v,v)$ is
nonnegative and the identity term is positive for $v\ne0$, while right
multiplication reindexes the finite sum; hence this is a positive definite
invariant Hermitian product. This proves existence; now use the invariant
product fixed in the Statement. For each irreducible copy $K_a$ of type
$S^\lambda$, choose an equivariant isomorphism $j_a:S^\lambda\to K_a$.
Its adjoint exists by [F10], and $j_a^*j_a$ commutes with $S_N$: the
adjoint identity [F7], equivariance of $j_a$, and unitarity of both
representations give $\rho(\pi)^{-1}j_a^*j_a\rho(\pi)=j_a^*j_a$. By [F5]
this is $c_aI$; injectivity gives $c_a>0$, so replacing $j_a$ by
$c_a^{-1/2}j_a$ makes it unitary. For any $f\in M_\lambda$, decompose
$f=\sum_b P_bf$ using the orthogonal projections onto all irreducible copies
in $H_N$; each $P_bf$ is an intertwiner because $P_b$ commutes with $S_N$ by
step 2.1. If $K_b$ has type different from $S^\lambda$, then $P_bf=0$ by
[F4] and [F2]. If $K_b$ has type $S^\lambda$, then
$j_b^{-1}P_bf:S^\lambda\to S^\lambda$ is an intertwiner, hence is a scalar
by [F5]. Thus the maps $j_a$ span $M_\lambda$. Their ranges are orthogonal,
so $d_\lambda^{-1}\operatorname{Tr}(j_b^*j_a)=\delta_{ab}$; they are an
orthonormal basis in the stated normalized Hilbert-Schmidt inner product.
By [F9], take an orthonormal basis of each $S^\lambda$; evaluation sends the tensor
product basis to the union of the corresponding orthonormal bases of all
copies $K_a$. This union is an orthonormal basis of $H_N$, so $\Phi$ is
unitary. [F2, F4, F5, F7, F9, F10, F11, step 2.1, algebra]

4.1 For $\pi\in S_N$, evaluation gives
$\Phi(\rho_\lambda(\pi)s\otimes f)=f(\rho_\lambda(\pi)s)
=\rho(\pi)f(s)=\rho(\pi)\Phi(s\otimes f)$ because $f$ is an intertwiner.
For $U\in U(d)$, $\Delta_N(U)\circ f$ is again an intertwiner by [F1], and
evaluation gives
$\Phi(s\otimes(\Delta_N(U)\circ f))=\Delta_N(U)f(s)
=\Delta_N(U)\Phi(s\otimes f)$. Thus the actions have the asserted factor
placement. Since $\Delta_N(U)$ is unitary and $\Phi$ is unitary, the
postcomposition action is unitary on each multiplicity factor: on the
orthogonal summand $S^\lambda\otimes M_\lambda$ the operator is
$I\otimes T_U$, and evaluating on any unit vector of the nonzero
$S^\lambda$ factor shows that $T_U$ preserves inner products; $T_{U^{-1}}$
is its inverse. [F1, step 3.1, algebra] ∎
