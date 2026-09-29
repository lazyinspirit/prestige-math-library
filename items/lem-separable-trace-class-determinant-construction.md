---
id: lem-separable-trace-class-determinant-construction
kind: lemma
title: Local separable trace-class determinant construction
status: published
origin: pipeline
deps:
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-finite-dimensional-subspaces-are-closed
  - def-bounded-linear-operator
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-series-power-series-and-absolute-convergence
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-countable-choice
  - def-determinant-of-a-linear-operator
  - def-determinant-of-a-square-matrix
  - def-hilbert-exterior-power-and-induced-operator
  - def-hilbert-orthogonal-projection
  - def-hilbert-space
  - def-invariant-subspace-and-induced-quotient-operator
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - def-trace-class-operator
  - def-trace-of-a-square-matrix
  - def-trace-of-an-endomorphism
  - lem-exponential-series-has-infinite-radius
  - lem-finite-rank-operators-are-compact
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - lem-trace-norm-of-hilbert-exterior-powers
  - thm-complex-power-series-converge-locally-uniformly
  - thm-cyclicity-of-the-trace
  - thm-termwise-differentiation-of-complex-power-series
  - thm-trace-is-absolutely-convergent-and-basis-independent
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4.3, Proposition 3.4.3 and Corollary 3.4.1, printed pp. 38–39 (PDF pp. 47–48)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a, Definition 14.34 and Lemma 14.38, printed pp. 584–587 (PDF pp. 596–599)"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §B.5.2, finite-rank determinant reduction, PDF p. 508"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume Countable Choice. Let $K$ be a separable complex Hilbert space. For a
trace-class operator $T:K\to K$, define
$$D_T(z):=\sum_{n\ge0}z^n\operatorname{tr}(\Lambda^nT).$$
This series converges locally uniformly on $\mathbb C$, defines an entire
function, and satisfies $D_T(0)=1$ and $D_T'(0)=\operatorname{tr}(T)$. For
every bounded finite-rank operator $F:K\to K$ and every finite-dimensional
$F$-invariant subspace $E$ with $\operatorname{ran}F\subseteq E$,
$$D_F(z)=\det_E\bigl(I_E+z(F|_E)\bigr)\qquad(z\in\mathbb C).$$
The determinant on the zero-dimensional space is $1$.

## Facts & Assumptions

**Given:** Countable Choice, a separable complex Hilbert space $K$, a
trace-class operator $T:K\to K$, a bounded finite-rank operator $F:K\to K$,
and a finite-dimensional $F$-invariant subspace $E$ containing $\operatorname{ran}F$.

[A1] The exterior construction defines $\Lambda^0H=\mathbb C$ and $\Lambda^0S=I_{\mathbb C}$, gives the Gram determinant as the wedge inner product, realizes $\Lambda^nH$ as the antisymmetrizing-projection range, and makes the induced operator bounded and functorial with its stated wedge action. In degree one its antisymmetrizer is the identity, so $\Lambda^1S=S$. ([[def-hilbert-exterior-power-and-induced-operator]])

[A2] For trace-class $S$ and $n\ge1$, $\Lambda^nS$ is trace class and $\|\Lambda^nS\|_1\le\|S\|_1^n/n!$; the degree-zero exterior operator is the identity on $\mathbb C$. ([[lem-trace-norm-of-hilbert-exterior-powers]])

[A3] For trace-class $S$, $|\operatorname{tr}(S)|\le\|S\|_1$. ([[thm-trace-is-absolutely-convergent-and-basis-independent]])

[A4] The real exponential factorial series $\sum_{n\ge0}x^n/n!$ converges absolutely for every real $x$. ([[lem-exponential-series-has-infinite-radius]])

[A5] A complex power series converges absolutely and uniformly on every closed subdisc strictly inside its disc of convergence. ([[thm-complex-power-series-converge-locally-uniformly]])

[A6] Inside its disc of convergence a complex power series is holomorphic and its derivative is obtained term by term. ([[thm-termwise-differentiation-of-complex-power-series]])

[A7] A function holomorphic on all of $\mathbb C$ is entire. ([[def-complex-differentiability-holomorphic-and-entire]])

[A8] Every bounded finite-rank operator is compact, and every finite-rank operator is trace class. ([[lem-finite-rank-operators-are-compact]], [[def-trace-class-operator]])

[A9] A finite-dimensional normed subspace, including the zero subspace, is closed. ([[cor-finite-dimensional-subspaces-are-closed]])

[A10] An invariant subspace $E$ satisfies $F(E)\subseteq E$ and the restriction $F|_E:E\to E$ is an endomorphism. ([[def-invariant-subspace-and-induced-quotient-operator]])

[A11] For a closed subspace $E$ of a Hilbert space, the orthogonal projection $P_E$ has $P_Ex\in E$ and $x-P_Ex\in E^\perp$; it is the identity on $E$ and zero on $E^\perp$. ([[def-hilbert-orthogonal-projection]])

[A12] If $R$ is trace class and $S$ is bounded, cyclicity gives $\operatorname{tr}(RS)=\operatorname{tr}(SR)$. ([[thm-cyclicity-of-the-trace]])

[A13] Every finite-dimensional inner-product space, including the zero space with its empty basis, has an orthonormal basis. ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]])

[A14] The trace of an endomorphism of a finite-dimensional vector space is the matrix trace in any ordered basis, and the matrix trace is the sum of its diagonal entries. ([[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]])

[A15] In an ordered basis $\mathcal B$, the matrix of an endomorphism has as its $j$-th column the coordinates of the image of the $j$-th basis vector. ([[def-coordinate-column-and-matrix-of-a-linear-map]])

[A16] In positive dimension, the determinant of a finite-dimensional endomorphism is the determinant of its matrix in an ordered basis; on the zero space it is $1$. ([[def-determinant-of-a-linear-operator]])

[A17] A square matrix determinant is the finite signed permutation sum in the Leibniz formula. ([[def-determinant-of-a-square-matrix]])

[A18] The inner product on a complex Hilbert space is linear in its first argument and conjugate-linear in its second. ([[def-real-and-complex-inner-product-space]])

[A19] A complex Hilbert space is an inner-product space complete in its induced norm. ([[def-hilbert-space]])

[A20] A topological space is separable when it has an at most countable dense subset. ([[def-separable-space]])

[A21] Countable Choice is the exact choice assumption declared in the statement. The proof uses its trace-class, trace, cyclicity, and Hilbert-projection suppliers; it selects no basis of the whole space. ([[def-countable-choice]])

[A22] The radius of a complex power series is the radius of the real power series formed from the absolute values of its coefficients. ([[def-complex-series-power-series-and-absolute-convergence]])

[A23] A bounded linear operator has an operator-norm bound $\|Tx\|\le\|T\|\,\|x\|$. ([[def-bounded-linear-operator]])

[A24] The Hilbert orthogonal projection is a bounded linear operator and is self-adjoint and idempotent. ([[lem-orthogonal-projection-is-linear-self-adjoint-contractive]])

[A25] The trace of a trace-class operator is computed by every nuclear representation $Sx=\sum_j\langle x,u_j\rangle v_j$, as $\operatorname{tr}(S)=\sum_j\langle v_j,u_j\rangle$. ([[thm-trace-is-absolutely-convergent-and-basis-independent]])

**Source audit:** Kostenko's Proposition 3.4.3 gives the exterior-power trace-norm estimate and Corollary 3.4.1 states the entire-function conclusion, but its proof refers to Exercise 3.4.3 for the exterior absolute-value identity. That exercise is not used here; [A2] is the previously proved local exterior-power lemma. Van Neerven's Definition 14.34 gives the same series and factorial bound. Lemma 14.38 proves finite-dimensional reduction only when $T=PTP$ for an orthogonal projection $P$; the present argument allows arbitrary invariant $E$ and proves the reduction by exterior projection and trace cyclicity. Dyatlov–Zworski §B.5.2 gives the finite-rank compression determinant by nonzero eigenvalues; it is contextual support, not a substitute for the coefficient calculation below.

## Proof

**Proof technique:** direct.

**Given:** The data in the statement; write $c_n:=\operatorname{tr}(\Lambda^nT)$.

1.1 For $n=0$, $\Lambda^0T=I_{\mathbb C}$, so $c_0=1$. For $n\ge1$, [A2] makes $\Lambda^nT$ trace class and [A3] gives $|c_n|\le\|\Lambda^nT\|_1\le\|T\|_1^n/n!$. Hence for each real $R\ge0$, $$\sum_{n\ge0}|c_n|R^n\le\sum_{n\ge0}\frac{(R\|T\|_1)^n}{n!}<\infty$$ by [A4]. Since this holds at every radius, the complex power series has radius $+\infty$ by [A22]. The separability hypothesis is the dense-subset condition [A20] and is retained, though this estimate uses only trace-class membership. [A1, A2, A3, A4, A20, A22]

1.2 The finite-dimensional subspace $E$ is closed by [A9], so [A11] supplies its orthogonal projection $P_E$. It is bounded, linear and self-adjoint by [A24]. Its defining decomposition also gives $P_E^2=P_E$. Choose an orthonormal basis $e_0,\ldots,e_{d-1}$ of $E$ by [A13], where $d=\dim E$ and the list is empty if $d=0$. For each $n\ge0$, put $\mathcal H_n:=\Lambda^nK$, $G_n:=\Lambda^nE\subseteq\mathcal H_n$, and $Q_n:=\Lambda^nP_E$. The increasing wedges $e_{i_1}\wedge\cdots\wedge e_{i_n}$ with $i_1<\cdots<i_n$ are orthonormal by the Gram formula [A1]. They span $G_n$: every algebraic tensor in $E^{\otimes n}$ expands in the basis tensors from $(e_j)$, and antisymmetrizing sends a repeated-index tensor to zero and every other one to a multiple of an increasing wedge; the algebraic tensors are dense and the projection range is closed. Thus this is a finite orthonormal basis of $G_n$, empty for $n>d$; for $n=0$, $G_0=\mathbb C$ with basis $1$. It follows that $G_n$ is closed in $\mathcal H_n$ by [A9]. By functoriality in [A1], $Q_n^2=Q_n$. For $n=0$, [A1] gives $Q_0=I_{\mathbb C}$ and $G_0=\mathbb C$, so $Q_0$ is the orthogonal projection onto $G_0$. For $n\ge1$, on decomposable wedges the Gram identity and self-adjointness of $P_E$ give $$\langle Q_n(x_1\wedge\cdots\wedge x_n),y_1\wedge\cdots\wedge y_n\rangle=\det[\langle P_Ex_i,y_j\rangle]=\det[\langle x_i,P_Ey_j\rangle]=\langle x_1\wedge\cdots\wedge x_n,Q_n(y_1\wedge\cdots\wedge y_n)\rangle.$$ Density of decomposable wedges makes $Q_n$ self-adjoint. It maps decomposable wedges into $G_n$ and fixes every decomposable wedge in $G_n$; continuity and density therefore show that its range is exactly $G_n$. Thus $Q_n$ is the orthogonal projection onto $G_n$. [A1, A9, A11, A13, A18, A19, A24]

2.1 Let $d:=\dim E$ and use the basis $(e_j)$ chosen in step 1.2. By [A10], $A:=F|_E$ is an endomorphism; for $x\in E$, [A23] gives $\|Ax\|=\|Fx\|\le\|F\|\,\|x\|$, so $A$ is bounded. Write its matrix as $(a_{ij})$, so $Ae_j=\sum_{i<d}a_{ij}e_i$ by [A15]. For each $0\le n\le d$, the increasing wedges $e_I:=e_{i_1}\wedge\cdots\wedge e_{i_n}$, with $I=(i_1<\cdots<i_n)$, form the orthonormal basis of $G_n$ established in step 1.2. Expanding $\Lambda^nA(e_I)=Ae_{i_1}\wedge\cdots\wedge Ae_{i_n}$ by multilinearity and antisymmetry shows that its diagonal coefficient at $e_I$ is the principal minor $\det A[I,I]$. Thus [A14] yields $$\operatorname{tr}(\Lambda^nA)=\sum_{I\subseteq\{0,\ldots,d-1\},\ |I|=n}\det A[I,I],$$ with the $n=0$ term equal to $1$; for $n>d$, $G_n=\{0\}$ and the trace is $0$. When $d=0$ this says the sole coefficient is $1$ in degree zero and all positive-degree coefficients vanish. [A10, A14, A15, A23, step 1.2]

2.2 By [A5], the series converges uniformly on every closed disk of finite radius, and so locally uniformly on $\mathbb C$. Its infinite radius from step 1.1 and [A6] make its sum holomorphic on all of $\mathbb C$; therefore $D_T$ is entire by [A7]. [step 1.1, A5, A6, A7]

2.3 The constant coefficient in step 1.1 gives $D_T(0)=1$. The derivative formula in [A6] gives $D_T'(0)=c_1=\operatorname{tr}(\Lambda^1T)=\operatorname{tr}(T)$ by [A1]. [step 1.1, A1, A6]

3.1 Let $F$ be bounded and finite rank. By [A8], it is trace class, so the series defining $D_F$ is well-defined and the entire-function conclusion of steps 1.1 and 2.2 applies. Its restriction $A:=F|_E$ is the bounded endomorphism established in step 2.1. [A8, step 1.1, step 2.1, step 2.2]

4.1 Since $\operatorname{ran}F\subseteq E$, the wedge action in [A1] gives $\operatorname{ran}(\Lambda^nF)\subseteq G_n$, hence $Q_n\Lambda^nF=\Lambda^nF$. Each $\Lambda^nF$ is trace class by [A2] for $n\ge1$; for $n=0$ it is the finite-rank identity on $\mathbb C$, trace class by [A8]. Cyclicity [A12] therefore gives $$\operatorname{tr}(\Lambda^nF)=\operatorname{tr}((\Lambda^nF)Q_n).$$ [A1, A2, A8, A12, step 1.2, step 3.1]

5.1 Let $\iota_n:G_n\hookrightarrow\mathcal H_n$ be inclusion and let $A_n:=\Lambda^n(F|_E)$. Use the finite orthonormal basis of $G_n$ from step 1.2. Because $Q_n$ is its orthogonal projection, $Q_nx=\sum_j\langle x,g_j\rangle g_j$. On $G_n$, functoriality gives $(\Lambda^nF)\iota_n=\iota_nA_n$, and therefore $$((\Lambda^nF)Q_n)x=\sum_j\langle x,g_j\rangle\,\iota_n(A_ng_j).$$ This is a finite nuclear representation. By [A25] its trace is $$\operatorname{tr}((\Lambda^nF)Q_n)=\sum_j\langle\iota_n(A_ng_j),g_j\rangle=\operatorname{tr}_{G_n}(A_n),$$ where the last equality is the finite-dimensional trace formula [A14]. This includes $G_n=\{0\}$, when both traces are zero. Together with step 4.1, it proves $\operatorname{tr}(\Lambda^nF)=\operatorname{tr}(\Lambda^n(F|_E))$ for every $n\ge0$. [A14, A18, A25, step 1.2, step 4.1]

6.1 In the basis $(e_j)$, [A16] identifies $\det_E(I_E+zA)$ with the determinant of the matrix $(\delta_{ij}+za_{ij})$. Expanding its Leibniz formula [A17] and choosing the $zA$ entry in precisely the columns indexed by a subset $I$ forces the permutation to fix every column outside $I$; the remaining signed sum is $z^{|I|}\det A[I,I]$. Grouping by $|I|=n$ and using step 2.1 gives $$\det_E(I_E+zA)=\sum_{n=0}^d z^n\operatorname{tr}(\Lambda^nA).$$ By step 5.1, these coefficients equal $\operatorname{tr}(\Lambda^nF)$, and they vanish for $n>d$. Therefore the right side is exactly the series defining $D_F(z)$, proving the finite-rank identity for every $z\in\mathbb C$. If $d=0$, step 2.1 makes this identity $1=1$. The proof permits any finite-dimensional invariant $E$ containing $\operatorname{ran}F$; it never assumes that $E$ reduces $F$. [A16, A17, step 2.1, step 5.1]

7.1 The empty exterior degree and $z=0$ are covered by steps 1.1 and 2.2. If $F=0$, then every positive-degree exterior power vanishes and the determinant is $1$. A zero-dimensional $E$ is handled in step 6.1. When $\dim E=1$, step 2.1 gives coefficients $1$ and $\operatorname{tr}(F|_E)$ and all higher coefficients vanish, matching the linear determinant; for every $n>d$, $G_n=\{0\}$ and the trace coefficient vanishes. Countable Choice is the exact declared assumption [A21]; the only bases chosen locally are finite-dimensional orthonormal bases [A13], and no full AC or DC is used. [A13, A21, step 1.1, step 2.1, step 2.3, step 6.1] ∎
