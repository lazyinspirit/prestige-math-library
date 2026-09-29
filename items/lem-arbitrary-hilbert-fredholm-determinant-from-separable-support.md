---
id: lem-arbitrary-hilbert-fredholm-determinant-from-separable-support
kind: lemma
title: Arbitrary-Hilbert Fredholm determinant from a separable reducing support
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-algebraic-multiplicity-for-compact-operators
  - def-bounded-linear-operator
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable
  - def-determinant-of-a-linear-operator
  - def-determinant-of-a-square-matrix
  - def-hilbert-orthogonal-projection
  - def-hilbert-space-adjoint
  - def-hilbert-space
  - def-metric-interior-closure-boundary
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - def-trace-class-operator
  - lem-countable-iff-surjection-from-n
  - lem-fredholm-determinant-spectral-product-from-power-traces
  - lem-nuclear-series-characterizes-trace-norm
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - lem-rat-embeds-dense
  - lem-separable-trace-class-determinant-construction
  - lem-span-is-the-set-of-linear-combinations
  - thm-banach-series-criterion
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-n-cross-n-countable
  - thm-operator-determinant-is-basis-independent
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-rationals-countable
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
justified_by: []
forward_refs: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be any complex
Hilbert space and let $T:H\to H$ be trace class
([[def-hilbert-space]], [[def-trace-class-operator]]). For a nuclear
representation
$$Tx=\sum_{j\ge1}\langle x,u_j\rangle v_j,\qquad \sum_{j\ge1}\|u_j\|\,\|v_j\|<\infty,$$
put
$$M=\overline{\operatorname{span}_{\mathbb C}\{u_j,v_j:j\ge1\}}.$$
Then $M$ is separable and reducing for $T$, and under
$H=M\oplus M^\perp$ one has $T=S\oplus0$, where $S=T|_M$ is trace class.
Let $D_S$ be the locally constructed separable determinant of
[[lem-separable-trace-class-determinant-construction]] and define
$$D_H(I+zT):=D_S(z).$$
This definition is independent of the nuclear representation and, more
generally, of any closed separable support $N$ satisfying
$T(H)\subseteq N$ and $T|_{N^\perp}=0$; such an $N$ reduces $T$. The
result is entire, has value $1$ at $z=0$, and satisfies the locally uniform
product
$$D_H(I+zT)=\prod_j(1+z\lambda_j(T)),$$
where the nonzero eigenvalues are repeated according to algebraic multiplicity
([[def-algebraic-multiplicity-for-compact-operators]]). If $T$ has finite rank,
then for every finite-dimensional $E\subseteq H$ containing $\operatorname{ran}T$,
$$D_H(I+zT)=\det_E\bigl(I_E+z(T|_E)\bigr),$$
with determinant on the zero-dimensional space equal to $1$
([[def-determinant-of-a-linear-operator]]).

## Facts & Assumptions

**Given:** AC, a complex Hilbert space $H$, a trace-class operator $T$, and a
nuclear representation as in the statement when one is fixed.

[A1] AC is the principle that every family of nonempty sets has a choice
function. It implies DC and Countable Choice, which are the exact choice
strengths used by the Hilbert projection and trace-class/determinant suppliers
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

[A2] Under Countable Choice, a trace-class $T$ has a nuclear representation
with operator-norm-convergent partial sums and finite sum
$\sum_j\|u_j\|\|v_j\|$; this is the nuclear-series characterization
([[lem-nuclear-series-characterizes-trace-norm]]).

[A3] The inner product is linear in its first argument. For a bounded
operator, the Hilbert adjoint satisfies
$\langle Tx,y\rangle=\langle x,T^*y\rangle$ and is uniquely determined by
this identity ([[def-real-and-complex-inner-product-space]],
[[def-hilbert-space-adjoint]]). Orthogonality to $M$ means
$\langle x,m\rangle=0$ for every $m\in M$.

[A4] The operator norm is the unit-ball supremum; scaling a nonzero vector to
the unit ball gives $\|Ux\|\le\|U\|\|x\|$ for each bounded $U$
([[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] Every closed subspace $N$ of a Hilbert space has the orthogonal
decomposition $H=N\oplus N^\perp$ under Countable Choice; its projection
$P_N$ is bounded with norm at most $1$
([[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[def-hilbert-orthogonal-projection]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A6] If $R$ is trace class and $A,B$ are bounded operators with compatible
Hilbert-space domains and ranges, then $ARB$ is trace class
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A7] The rationals are in bijection with $\mathbb N$
([[thm-rationals-countable]]), and there is a bijection
$\pi:\mathbb N^2\to\mathbb N$ ([[thm-n-cross-n-countable]]). Define
$c_0(())=0$ and
$c_{k+1}(a_0,\ldots,a_k)=\pi(a_0,c_k(a_1,\ldots,a_k))$. Then
$c(a_0,\ldots,a_{k-1})=\pi(k,c_k(a_0,\ldots,a_{k-1}))$ is injective on all
finite sequences: inverse pairing recovers the length and then every entry.

[A8] The rationals are dense in $\mathbb R$
([[lem-rat-embeds-dense]]). Each complex number has unique real and imaginary
coordinates $a+bi$ and modulus $\sqrt{a^2+b^2}$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]); hence
$\mathbb Q+i\mathbb Q$ is dense in $\mathbb C$.

[A9] A space is separable when it has an at most countable dense subset
([[def-separable-space]]).

[A10] In this library, countable means at most countable
([[def-countable]]); $\mathbb N\times\mathbb N$ is bijective with $\mathbb N$
([[thm-n-cross-n-countable]]). A nonempty set is at most countable exactly
when there is a surjection from $\mathbb N$ onto it
([[lem-countable-iff-surjection-from-n]]).

[A11] Every nonzero spectral value of a compact operator is an eigenvalue with
finite-dimensional generalized eigenspace, and
$m_{\rm alg}(\lambda;T)$ is the dimension of that stabilized generalized
eigenspace ([[def-trace-class-operator]],
[[thm-riesz-schauder-spectrum-of-a-compact-operator]],
[[def-algebraic-multiplicity-for-compact-operators]]).

[A12] On a separable complex Hilbert space, the local determinant construction
is entire and has $D_S(0)=1$. For finite-rank $F$ and finite-dimensional
$F$-invariant $E$ containing $\operatorname{ran}F$, it gives
$D_F(z)=\det_E(I_E+z(F|_E))$, including $\det_{\{0\}}=1$
([[lem-separable-trace-class-determinant-construction]]).

[A13] For a trace-class operator on a separable complex Hilbert space, the local
determinant equals the locally uniform product of the nonzero eigenvalues,
repeated by algebraic multiplicity; the empty product is $1$
([[lem-fredholm-determinant-spectral-product-from-power-traces]]).

[A14] The finite-dimensional operator determinant is the determinant of a
matrix in an ordered basis (and is $1$ on the zero space); its value is
basis-independent ([[def-determinant-of-a-linear-operator]],
[[thm-operator-determinant-is-basis-independent]]).

[A15] The matrix determinant is given by the finite signed permutation sum
(Leibniz formula) ([[def-determinant-of-a-square-matrix]]).

[A16] Cauchy--Schwarz gives $|\langle x,y\rangle|\le\|x\|\,\|y\|$
for vectors in a complex inner-product space
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A17] The induced inner-product norm satisfies the triangle inequality
$\|u+v\|\le\|u\|+\|v\|$ ([[cor-inner-product-induces-a-norm]]).

[A18] The Hilbert norm is complete, so $H$ is Banach; every absolutely
convergent series in a Banach space converges
([[def-hilbert-space]], [[thm-banach-series-criterion]]).

[A19] The linear span of a set is exactly its finite linear combinations,
including the empty sum ([[lem-span-is-the-set-of-linear-combinations]]).

[A20] In a metric space, $x$ is in the closure of $A$ exactly when every
positive-radius ball around $x$ meets $A$
([[def-metric-interior-closure-boundary]]).

[A21] The induced inner-product norm is homogeneous:
$\|\lambda v\|=|\lambda|\,\|v\|$ ([[cor-inner-product-induces-a-norm]]).

## Proof

**Proof technique:** direct.
1.1 By [A1] and the nuclear characterization [A2], a nuclear representation exists. Fix any such representation and let $M$ be the closed complex linear span in the statement. The argument below applies to every representation; this initial choice only constructs one support. [A1, A2]
2.1 Let $w_{2j-2}=u_j$ and $w_{2j-1}=v_j$. Let $\mathbb Q+i\mathbb Q$ denote the Gaussian rationals. The finite sums $\sum_{k<r}c_kw_{n_k}$ with $c_k\in\mathbb Q+i\mathbb Q$ and $n_k\in\mathbb N$ form a subset $D$ of $M$. This set is at most countable: fix a bijection $\eta:\mathbb N\to\mathbb Q$ from [A7] and a bijection $\pi:\mathbb N\times\mathbb N\to\mathbb N$ from [A10]. Encode each tuple $(n_k,a_k,b_k)\in\mathbb N^3$ by $\pi(n_k,\pi(a_k,b_k))$, where $c_k=\eta(a_k)+i\eta(b_k)$. The injective finite-sequence code in [A7] therefore codes every finite list of such tuples by a natural number. Decode each valid sequence code as the corresponding sum and send a natural number that is not a valid code to $0$. This defines a surjection $\mathbb N\to D$; $D$ is nonempty because it contains the empty sum $0$. Thus [A10] makes $D$ at most countable. [A7, A10, A19, A20, step 1.1, construct]
2.2 Write $T_nx=\sum_{j\le n}\langle x,u_j\rangle v_j$ for the nuclear partial sums. For each $x\in H$, $T_nx\in M$, and $T_nx\to Tx$ by [A2]; operator-norm convergence implies pointwise convergence by the bound in [A4]. Since $M$ is closed, $Tx\in M$. For each $y\in H$, the series $$w_y:=\sum_{j\ge1}\langle y,v_j\rangle u_j$$ converges absolutely in $H$ by [A16] and therefore converges in $H$ by [A18], because $H$ is Banach. Its partial sums lie in $M$, so $w_y\in M$. Conjugate-linearity in the second argument, the adjoint identity [A3], and inner-product continuity from [A16] give $$\langle x,w_y\rangle=\lim_n\sum_{j\le n}\langle x,u_j\rangle\langle v_j,y\rangle=\lim_n\langle T_nx,y\rangle=\langle Tx,y\rangle.$$ Uniqueness of the adjoint in [A3] yields $T^*y=w_y$, so $T^*(H)\subseteq M$. If $x\in M^\perp$, then $\langle x,u_j\rangle=\langle x,v_j\rangle=0$ for every $j$, so the nuclear series for both $Tx$ and $T^*x$ vanish. Consequently $M$ and $M^\perp$ are invariant under both $T$ and $T^*$; therefore $M$ reduces $T$. The decomposition [A5] now gives $T=S\oplus0$ on $H=M\oplus M^\perp$, where $S=T|_M$. [A2, A3, A4, A5, A16, A18, A19, A20, A21, step 1.1]
3.1 The set $D$ is dense in $M$. Given $x\in M$ and $\varepsilon>0$, [A20] gives a point $y$ of the span of the listed vectors with $\|x-y\|<\varepsilon/2$; by [A19], write it as a finite complex linear combination $y=\sum_{k<r}c_kw_{n_k}$. By density of $\mathbb Q$ in $\mathbb R$ and the coordinate/modulus formula in [A8], each $c_k$ can be approximated by $q_k\in\mathbb Q+i\mathbb Q$ closely enough that $\sum_{k<r}|c_k-q_k|\|w_{n_k}\|<\varepsilon/2$; if a listed vector is zero its summand is already zero. Then $d=\sum_{k<r}q_kw_{n_k}\in D$ and $$\|x-d\|\le\|x-y\|+\sum_{k<r}|c_k-q_k|\|w_{n_k}\|<\varepsilon.$$ Consequently $D$ is a countable dense subset of $M$, so $M$ is separable by [A9]. This also covers an empty sequence, a finite list, and $M=\{0\}$. [A8, A9, A17, A19, A20, A21, step 2.1, construct]
3.2 More generally, call a closed separable subspace $N\subseteq H$ a support for $T$ when $T(H)\subseteq N$ and $T(N^\perp)=\{0\}$. By [A5], $H=N\oplus N^\perp$; hence $T=S_N\oplus0$ for $S_N:=T|_N$. The adjoint identity [A3] gives $T^*=S_N^*\oplus0$, so $N$ is reducing in the standard sense (invariant under both $T$ and $T^*$). Let $\iota_N:N\hookrightarrow H$ be inclusion and $P_N$ the projection of [A5]. Then $S_N=P_NT\iota_N$: on $N$, $T$ takes values in $N$ and $P_N$ is the identity. The inclusion is bounded with its inherited norm, and [A5] makes $P_N$ bounded. Thus [A6] shows that $S_N$ is trace class. This applies to the representation support $M$ of step 2.2 and to every support used below. [A3, A5, A6, step 2.2]
4.1 Let $N_1,N_2$ be two reducing supports. If either is zero, the closure of their sum is the other support and is separable. Otherwise choose nonempty dense sets $X_i\subseteq N_i$ by [A9]. They are countable, so by the surjection criterion in [A10] fix surjections $s_i:\mathbb N\to X_i$. Using the bijection $\pi$ from [A10] to reindex pairs, the map $(m,n)\mapsto s_1(m)+s_2(n)$ has countable image $X_1+X_2=\{x_1+x_2:x_i\in X_i\}$. It is dense in $N_1+N_2$: for $x_i\in N_i$ and any $\varepsilon>0$, choose $x_i'\in X_i$ with $\|x_i-x_i'\|<\varepsilon/2$, so $\|(x_1+x_2)-(x_1'+x_2')\|<\varepsilon$. Its closure $L:=\overline{N_1+N_2}$ is therefore separable. Also $T(H)\subseteq N_1\subseteq L$ and $L^\perp\subseteq N_1^\perp$, so $T(L^\perp)=\{0\}$. Hence $L$ is a reducing support. [A9, A10, A17, A20, step 3.2, given, construct]
4.2 For any reducing support $N$, the decomposition $H=N\oplus N^\perp$ gives, for every $\lambda\ne0$ and integer $k\ge1$, $$(T-\lambda I)^k=(S_N-\lambda I_N)^k\oplus(-\lambda)^kI_{N^\perp}.$$ Since $(-\lambda)^k\ne0$, $$\ker(T-\lambda I)^k=\ker(S_N-\lambda I_N)^k\oplus\{0\}.$$ Thus $T$ and $S_N$ have the same nonzero eigenvalues and the same stabilized generalized eigenspaces and algebraic multiplicities. Both are trace class and therefore compact; their nonzero spectral values are eigenvalues by [A11], and the multiplicity is the dimension of the stabilized kernel. [A11, step 2.2, step 3.2]
5.1 Let $N_1,N_2$ be arbitrary reducing supports and let $L=\overline{N_1+N_2}$ from step 4.1. Each of $S_{N_1}$, $S_{N_2}$ and $S_L$ is trace class by step 3.2 and acts on a separable Hilbert space. Step 4.2 gives the same nonzero eigenvalue list, including algebraic multiplicity, for all three restrictions. The local product theorem [A13] therefore gives $$D_{S_{N_1}}(z)=D_{S_L}(z)=D_{S_{N_2}}(z)\qquad(z\in\mathbb C).$$ Taking $N_1,N_2$ to be supports arising from any two nuclear representations proves representation independence as well as independence from every separable reducing support. [A13, step 3.2, step 4.1, step 4.2]
6.1 Define $D_H(I+zT):=D_{S_M}(z)$ using any support $M$. Step 5.1 makes this well-defined. By [A12], it is entire and equals $1$ at $z=0$. By [A13], $$D_{S_M}(z)=\prod_j(1+z\lambda_j(S_M))$$ locally uniformly. Step 4.2 identifies the nonzero eigenvalues and their algebraic multiplicities with those of $T$, so this is the asserted locally uniform product for $T$. If the eigenvalue list is empty, the product is $1$; finite lists are finite products, and the formula also holds for $H=\{0\}$ and $T=0$. [A12, A13, step 2.2, step 4.2, step 5.1]
7.1 Suppose $T$ has finite rank and write $R=\operatorname{ran}T$. Then $R\subseteq M$ by step 2.2, $R$ is finite dimensional, and $T(R)\subseteq R$. Apply the finite-rank clause of [A12] to $S_M$ and the invariant subspace $R\subseteq M$ to obtain $$D_H(I+zT)=D_{S_M}(z)=\det_R\bigl(I_R+z(T|_R)\bigr).$$ If $R=\{0\}$, this is $1=1$ by [A12] and the zero-dimensional determinant convention. [A12, step 2.2, step 6.1]
8.1 Let $E\subseteq H$ be any finite-dimensional subspace containing $R$. It is $T$-invariant because $T(E)\subseteq R\subseteq E$. For $R\ne\{0\}$, extend a basis of $R$ to a basis of $E$. Relative to the resulting decomposition $E=R\oplus F$, the matrix of $T|_E$ has block form $$\begin{pmatrix}A&B\\0&0\end{pmatrix},$$ where $A$ is the matrix of $T|_R$. Thus the matrix of $I_E+z(T|_E)$ is $$\begin{pmatrix}I_R+zA&zB\\0&I_F\end{pmatrix}.$$ In any nonzero term of the Leibniz formula [A15], each of the $\dim R$ columns from $R$ must use an $R$ row because the lower-left block is zero. Since there are exactly $\dim R$ such rows, they are all occupied, so no $F$ column can use an $R$ row. Each $F$ column must then use its matching identity entry in the $I_F$ block, and the remaining permutation sum is the Leibniz determinant of $I_R+zA$. Hence $$\det_E\bigl(I_E+z(T|_E)\bigr)=\det_R\bigl(I_R+z(T|_R)\bigr),$$ which with step 7.1 proves the formula for every such $E$. When $R=0$, both operators are identities and both determinants are $1$. Basis independence of these operator determinants is [A14]. [A14, A15, step 7.1, construct]
9.1 At $z=0$, [A12] gives determinant one and the finite-dimensional formula is the determinant of the identity. The empty nonzero-eigenvalue list has empty product one by step 6.1; a zero operator and a zero-dimensional $H$ are included there. A one-dimensional nonzero range is covered by step 7.1, where the finite-dimensional determinant is the corresponding single linear factor. The proof uses AC exactly as [A1] states: it supplies the Countable Choice needed to obtain the nuclear representation and the Hilbert projection, and AC-qualified spectral multiplicities; the explicit countable coding and the later comparison of supports make no further selections. The conclusion is a direct equality, not a biconditional. [A1, A11, A12, step 2.1, step 4.2, step 6.1, step 7.1] \qed
