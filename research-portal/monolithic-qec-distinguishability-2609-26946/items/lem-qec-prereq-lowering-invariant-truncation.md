---
id: lem-qec-prereq-lowering-invariant-truncation
kind: lemma
domain: mathematics
title: Invariant finite truncation for lowering generators
status: draft
origin: session
deps:
  - def-qec-prereq-finite-gksl-channel-interface
  - math:def-inner-product-space
  - math:def-orthogonal-projection
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-adjoint-of-a-linear-map-between-inner-product-spaces
  - math:thm-adjoint-exists-and-is-unique-in-finite-dimension
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
dependency_roles:
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-orthogonal-projection: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  math:thm-adjoint-exists-and-is-unique-in-finite-dimension: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  math:cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $V=\bigoplus_{j=0}^{J_*}V_j$ be a finite-dimensional complex inner product space expressed as an orthogonal direct sum, with $J_*$ a nonnegative integer. Let $H=H^\dagger$ preserve each $V_j$, and let a finite family of linear maps $L_a$ satisfy $L_aV_j\subseteq V_{j-1}$ for every $j$, where $V_{-1}=\{0\}$. Let $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $\mathcal N_t=e^{t\mathcal L}$ for $t\geq0$.

For any integer $0\leq J_0\leq J_*$, put $W=\bigoplus_{j=0}^{J_0}V_j$ and let $P$ be the orthogonal projection onto $W$. The operators supported on $W$, meaning those $X$ with $X=PXP$, are preserved by $\mathcal N_t$. Under the natural inclusion of operators on $W$ into operators on $V$, the restriction of $\mathcal N_t$ is exactly $e^{t\mathcal L_W}$, where $\mathcal L_W$ is the same GKSL formula on $W$ with $H_W=H|_W$ and $L_{a,W}=L_a|_W$. If $W=\{0\}$, this equality is understood on the zero operator space. The conclusion requires the stated lowering condition; a low-temperature heuristic alone does not establish it.

## Facts & Assumptions

[F1] In orthonormal coordinates on a nonzero finite-dimensional complex inner product space, a Hermitian $H$ and a finite family of jumps define the displayed finite GKSL generator and its channel as the operator-norm exponential series for $t\geq0$. [[def-qec-prereq-finite-gksl-channel-interface]]

[F2] An inner product is positive definite and Hermitian; orthogonality means that the inner product of vectors from different summands is zero. [[math:def-inner-product-space]]

[F3] The orthogonal projection onto a subspace sends a vector to its component in that subspace along its orthogonal complement. [[math:def-orthogonal-projection]]

[F4] The exponential series of a bounded operator on a real or complex Banach space converges in operator norm. [[math:lem-exponential-series-of-a-bounded-operator]]

[F5] The adjoint $T^\dagger$ is characterized by $\langle Tu,v\rangle=\langle u,T^\dagger v\rangle$; every linear map between finite-dimensional real or complex inner product spaces has a unique such adjoint, including zero-dimensional spaces. [[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]] [[math:thm-adjoint-exists-and-is-unique-in-finite-dimension]]

[F6] A real or complex normed space admitting an ordered basis of finite length is Banach. [[math:cor-finite-dimensional-normed-spaces-are-banach]]

[F7] Every linear map between normed spaces over the same scalar field is bounded if its domain admits an ordered basis of finite length. [[math:cor-linear-maps-with-finite-dimensional-domain-are-bounded]]

[F8] Every finite-dimensional real or complex inner product space has an orthonormal basis, with the empty basis in dimension zero. [[math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

## Proof

**Given:** The finite orthogonal grading, Hermitian $H$, lowering maps, cutoff $J_0$, and nonnegative $t$ of the statement.

**Goal:** Prove support invariance and equality with the compressed exponential.

1.1 By [F8], choose an ordered orthonormal basis in each of the finitely many blocks $V_j$. Concatenation in increasing block order gives an ordered orthonormal basis of $V$ whose initial segment is a basis of $W$. All daggers exist by [F5]. If $A$ has entries $a_{ij}$ in orthonormal bases, the identity in [F5] evaluated on basis vectors says that the entry of $A^\dagger$ in row $j$, column $i$ is $\overline{a_{ij}}$. Thus the abstract daggers are the conjugate transposes used by [F1], and on every nonzero space the abstract GKSL formula identifies with that finite matrix interface. [given, F1, F2, F5, F8, choose, algebra]

1.2 For $u\in V_j$ and $v\in V_k$, the adjoint identity and conjugate symmetry give $\langle L_a^\dagger L_a u,v\rangle=\langle L_a u,L_a v\rangle$. When $j\ne k$, the latter is zero because the two images lie in distinct orthogonal summands, with the zero image allowed. Thus $L_a^\dagger L_a$ preserves every $V_j$. The block-preserving $H$ therefore commutes with $P$, as does each $L_a^\dagger L_a$. Moreover $L_aW\subseteq W$, so $L_aP=PL_aP$. [given, F2, F3, F5, algebra]

2.1 Let $\iota(Y)$ denote extension by zero to $W^\perp$ of an operator $Y$ on $W$. In the adapted basis from step 1.1, this has diagonal blocks $Y$ and zero. Since $L_aW\subseteq W$, the lower-left block of $L_a$ is zero; block multiplication gives $L_a\iota(Y)L_a^\dagger=\iota(L_{a,W}YL_{a,W}^\dagger)$. The upper-left block of $L_a^\dagger L_a$ is $L_{a,W}^\dagger L_{a,W}$, and step 1.2 makes its off-diagonal blocks zero. The same block property holds for $H$, and $H_W$ is Hermitian by the adjoint identity. Hence the commutator and anticommutator terms also compress exactly, proving $\mathcal L(\iota(Y))=\iota(\mathcal L_W(Y))$. Induction gives $\mathcal L^n\iota(Y)=\iota(\mathcal L_W^n(Y))$ for every nonnegative integer $n$. The restricted jumps form a finite family, so the compressed formula has the finite GKSL form whenever $W$ is nonzero. [given, F1, F3, F5, step 1.1, step 1.2, algebra]

2.2 Suppose $W\ne\{0\}$. Equip each of the complex spaces of operators on $V$ and on $W$ with the coordinate norm $\|X\|_{\mathrm{ent},1}=\sum_{i,j}|X_{ij}|$ in its basis from step 1.1. This is a norm: definiteness and absolute homogeneity follow entrywise, and summing $|X_{ij}+Y_{ij}|\leq|X_{ij}|+|Y_{ij}|$ proves its triangle inequality. The matrix units, ordered lexicographically by $(i,j)$, are finite ordered bases. Thus [F6] makes both normed operator spaces Banach. The displayed formulas are complex-linear, so [F7] makes $\mathcal L$ and $\mathcal L_W$ bounded. With the induced norm $\|S\|=\sup_{X\ne0}\|S(X)\|_{\mathrm{ent},1}/\|X\|_{\mathrm{ent},1}$, [F4] therefore applies and gives operator-norm convergence of both exponential series. [given, F4, F6, F7, step 1.1, algebra]

3.1 In these adapted coordinates $\|\iota(Y)\|_{\mathrm{ent},1}=\|Y\|_{\mathrm{ent},1}$ because extension only adds zero entries. Applying step 2.1 to finite exponential partial sums and using this isometry to pass to their limits from step 2.2 gives $\mathcal N_t(\iota(Y))=\iota(e^{t\mathcal L_W}Y)$. An operator is supported on $W$ exactly when it is such an extension, proving invariance and exact compressed evolution. If $W=\{0\}$, the only supported operator is zero; its image under any linear map is zero, and the exponential on the zero operator space is its unique map. If also $V=\{0\}$, the same convention defines the ambient exponential, so the equality still holds. [given, F1, F3, step 2.1, step 2.2, algebra] ∎
