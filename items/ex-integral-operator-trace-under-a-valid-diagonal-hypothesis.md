---
id: ex-integral-operator-trace-under-a-valid-diagonal-hypothesis
kind: example
title: Integral operator trace under a valid diagonal hypothesis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-schmidt-operators-are-compact, thm-l-two-kernels-give-hilbert-schmidt-operators, thm-completion-of-an-inner-product-space-is-hilbert, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, lem-nuclear-series-characterizes-trace-norm, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-tonelli-and-fubini-for-completed-product-measures, thm-compact-implies-complete-and-totally-bounded, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-finite-sigma-finite-and-semifinite-measures, def-completed-product-measure, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-counting-measure, def-axiom-of-choice, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-dense-top, def-countable, lem-subset-of-countable, thm-countable-union-of-countable, def-metric-convergence, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-banach-space, def-real-and-complex-inner-product-space, def-compact-linear-operator, def-orthogonality-and-orthogonal-complement, thm-cauchy-schwarz-in-an-inner-product-space, def-hilbert-schmidt-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §10.5, Lemma 10.26 and Theorem 10.27 (Mercer, printed pp. 304–306)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,d)$ be a compact
metric space, let $\mu$ be a finite regular Borel measure on $X$
([[def-finite-sigma-finite-and-semifinite-measures]],
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]) and let
$k:X\times X\to\mathbb C$ be continuous, **Hermitian**,
$k(y,x)=\overline{k(x,y)}$, and **positive semidefinite**, that is
$$\sum_{i,j=1}^nc_i\overline{c_j}\,k(x_i,x_j)\ge0$$
for all finite families $x_1,\dots,x_n\in X$ and scalars $c_1,\dots,c_n\in\mathbb C$.
Let $T_k$ be the integral operator on the complex Hilbert space
$L^2(X,\mu;\mathbb C)$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]])
$$T_kf(x):=\int_Xk(x,y)f(y)\,d\mu(y).$$
Then:

1. $T_k$ is a bounded Hilbert–Schmidt operator with
   $\|T_k\|_{HS}=\|k\|_{L^2(\mu\times\mu)}$ and
   $\|T_k\|\le\|k\|_{L^2(\mu\times\mu)}$, hence compact
   ([[thm-l-two-kernels-give-hilbert-schmidt-operators]],
   [[def-hilbert-schmidt-operator]], [[def-compact-linear-operator]]);
2. $T_k$ is self-adjoint and positive:
   $T_k^*=T_k$ and $\langle T_kf,f\rangle\ge0$ for all $f$
   ([[def-self-adjoint-positive-unitary-and-normal-operator]]);
3. $T_k$ is trace class and
   $$\operatorname{tr}(T_k)=\int_Xk(x,x)\,d\mu(x)$$
   ([[def-trace-class-operator]],
   [[thm-trace-is-absolutely-convergent-and-basis-independent]]);
4. two boundaries are part of the statement. First, a class in
   $L^2(X\times X,\mu\times\mu)$ does **not in general** determine diagonal
   values: when $\mu$ is nonzero and nonatomic, representatives may be changed
   on the product-null diagonal, changing their diagonal integrals.
   Thus the displayed identity is a theorem under the
   continuity and positivity hypotheses and is not a definition of the trace.
   Second, continuity of $k$ alone does not imply trace class: it only gives
   Hilbert–Schmidt, and a continuous Hermitian kernel that is not positive
   semidefinite may fail to be trace class.

## Facts & Assumptions

**Given:** AC, the compact metric space $X$, the finite regular Borel measure $\mu$, the continuous Hermitian positive semidefinite kernel $k$, and the symbols $k_x:=k(\cdot,x)$.

[A1] **Kernel arithmetic.** $k$ is bounded and measurable on $X\times X$ with $\|k\|_2^2=\int_{X\times X}|k|^2\,d(\mu\times\mu)\le\mu(X)^2\sup|k|^2<+\infty$, the completed product measure is finite and Tonelli applies to nonnegative measurable functions ([[def-completed-product-measure]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-finite-sigma-finite-and-semifinite-measures]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[A2] **Kernel operators.** For $k$ of finite square norm the operator $T_k$ is bounded with $\|T_k\|\le\|k\|_2$, is Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_2$, and is compact by [[thm-hilbert-schmidt-operators-are-compact]] applied to the Hilbert basis supplied under AC by the kernel theorem;  the complex space $L^2(X,\mu;\mathbb C)$ with $\langle f,g\rangle=\int f\overline g\,d\mu$ is a Hilbert space ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[def-hilbert-schmidt-operator]], [[def-bounded-linear-operator]], [[def-operator-norm]], [[def-hilbert-space]], [[def-banach-space]], [[def-compact-linear-operator]]).

[A3] **The reproducing-kernel space.** On the complex span $E_0$ of the functions $k_x$ put $\langle\sum_ia_ik_{x_i},\sum_jb_jk_{y_j}\rangle_0:=\sum_{i,j}a_i\overline{b_j}k(y_j,x_i)$. Positive semidefiniteness and Hermitian symmetry make this a positive semidefinite Hermitian form, so $|\langle h,g\rangle_0|^2\le\langle h,h\rangle_0\langle g,g\rangle_0$ and the null set $N:=\{h:\langle h,h\rangle_0=0\}$ is a subspace on which the form vanishes identically and whose elements are exactly the functions vanishing on $X$, because $|h(x)|=|\langle h,k_x\rangle_0|\le\|h\|_0\|k_x\|_0=\|h\|_0\sqrt{k(x,x)}$ for $h\in E_0$; the quotient $E_0/N$ with the induced inner product has a completion $H_k$, a Hilbert space ([[thm-completion-of-an-inner-product-space-is-hilbert]], [[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-orthogonality-and-orthogonal-complement]]). In $H_k$ the **reproducing identity** $h(x)=\langle h,k_x\rangle$ and the bound $|h(x)|\le\|h\|\sqrt{k(x,x)}$ hold, the inclusion $J:H_k\to L^2(X,\mu)$, $Jh:=h$, is a well-defined bounded linear map with $\|J\|\le\sqrt{\mu(X)\sup_xk(x,x)}$, and $T_k=JJ^*$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]]).

[A4] **A finite or countable orthonormal basis of $H_k$.** By compactness $X$ is totally bounded, so for each integer $n\ge1$ there is a finite $(1/n)$-net of $X$ ([[thm-compact-implies-complete-and-totally-bounded]]); AC chooses one net for each $n\ge1$, their union $D$ is at most countable and dense, and the $\mathbb Q(i)$-span of $\{k_d:d\in D\}$ is an at most countable dense subset of $H_k$, because $\|k_x-k_y\|^2=k(x,x)-k(x,y)-k(y,x)+k(y,y)\to0$ as $y\to x$ by continuity and Hermitian symmetry. The separable-basis theorem therefore provides a Hilbert basis $(e_i)_{i\in I}$ of $H_k$, where $I$ is empty, finite, or countably infinite ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-dense-top]], [[def-countable]], [[lem-subset-of-countable]], [[thm-countable-union-of-countable]], [[def-metric-convergence]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Using its canonical order, write the basis as $(e_1,\ldots,e_r)$ when it is finite and as $(e_j)_{j\ge1}$ when it is infinite, and define a positive-integer-indexed family $(h_j)_{j\ge1}$ by $h_j=e_j$ on the existing indices and $h_j=0$ after $r$ in the finite case (all terms are zero when $I=\varnothing$).

[A5] **Nuclear series, Parseval and Tonelli.** A positive-integer-indexed nuclear family whose shifted coefficient-norm series is summable has zero-based partial sums converging in operator norm and defines a trace-class operator, whose trace is the corresponding shifted sum $\sum_{j\ge1}\langle v_j,u_j\rangle$ with $\|T\|_1\le\sum_{j\ge1}\|u_j\|\|v_j\|$; and for the Hilbert basis $(e_i)_{i\in I}$ of $H_k$, Parseval gives $\sum_{i\in I}|e_i(x)|^2=\sum_{i\in I}|\langle k_x,e_i\rangle|^2=k(x,x)$ for every $x$, while Tonelli for this at most countable nonnegative family gives $\int_X\sum_{i\in I}|e_i(x)|^2d\mu(x)=\sum_{i\in I}\|Je_i\|^2$ ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-of-a-trace-class-operator]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the data above, the space $H_k$ with its basis $(e_i)_{i\in I}$, its zero-padded positive enumeration $(h_j)_{j\ge1}$, and the inclusion $J$.

1.1 **The operator and its factorization.** By [A1] the class of $k$ has finite square norm, so [A2] makes $T_k$ a bounded Hilbert–Schmidt compact operator with the stated norms. By [A3] the inclusion $J$ is bounded with $T_k=JJ^*$: for $f\in L^2$ and every $x$, $(JJ^*f)(x)=\langle J^*f,k_x\rangle=\langle f,Jk_x\rangle_{L^2}=\int_Xf(y)\overline{k(y,x)}\,d\mu(y)=\int_Xk(x,y)f(y)\,d\mu(y)=(T_kf)(x)$, using the reproducing identity and Hermitian symmetry. [A1, A2, A3]

1.2 **$J$ is Hilbert–Schmidt and $T_k$ is positive.** By [A4] the family $(e_i)_{i\in I}$ is a Hilbert basis of the domain $H_k$ of $J$, so $\sum_{i\in I}\|Je_i\|^2=\int_X\sum_{i\in I}|e_i(x)|^2d\mu(x)=\int_Xk(x,x)\,d\mu(x)$ by [A5], and the right-hand side is finite because $k(x,x)$ is continuous on the compact space $X$; hence $J$ is Hilbert–Schmidt relative to this supplied basis, including the finite and zero-dimensional cases. Moreover $T_k^*=(JJ^*)^*=JJ^*=T_k$ and $\langle T_kf,f\rangle=\langle J^*f,J^*f\rangle\ge0$ for all $f$ by [A3], so $T_k$ is self-adjoint and positive. [A1, A3, A4, A5]

1.3 **Trace class and the trace formula.** Expanding $J^*$ in the Hilbert basis and then using the zero-padded enumeration of [A4] gives
$$J^*f=\sum_{i\in I}\langle J^*f,e_i\rangle e_i =\sum_{j\ge1}\langle f,Jh_j\rangle h_j,$$
where the first expression is a finite-subset net and the second is its ordinary positive-indexed enumeration (eventually zero in finite dimension). Applying $J$ gives the positive-indexed nuclear representation
$$T_k=JJ^*=\sum_{j\ge1}\langle\cdot,Jh_j\rangle Jh_j.$$
Its zero-based partial sums converge in operator norm by [A5], and its shifted coefficient-norm series satisfies $\sum_{j\ge1}\|Jh_j\|^2=\sum_{i\in I}\|Je_i\|^2=\int_Xk(x,x)\,d\mu(x)<+\infty$ by [step 1.2]. Hence [A5] makes $T_k$ trace class with $\|T_k\|_1\le\int_Xk(x,x)d\mu(x)$ and $\operatorname{tr}(T_k)=\sum_{j\ge1}\langle Jh_j,Jh_j\rangle=\sum_{i\in I}\|Je_i\|^2=\int_Xk(x,x)\,d\mu(x)$. [step 1.2, A4, A5]

2.1 **Conclusion and both boundaries.** Claims 1–3 are [step 1.1], [step 1.2] and [step 1.3]. For the first boundary, the diagonal $\Delta$ is closed and product-measurable (a compact metric space has a countable base). If $\mu$ is nonatomic, Tonelli in [A1] gives $(\mu\times\mu)(\Delta)=\int_X\mu(\{x\})\,d\mu(x)=0$. For nonzero $\mu$, the representatives $k$ and $k+\mathbf1_\Delta$ therefore give the same $L^2$ class but their diagonal integrals differ by $\mu(X)>0$. This is a failure in general, not in every measure space: on a singleton with unit mass the kernel class does determine its diagonal value. For the second boundary, here is a continuous Hermitian kernel whose operator is not trace class. For each $n\ge1$ put $N_n=2^{4n}$ and choose the explicit finite cluster $$X_n=\left\{2^{-n}\left(1+\frac{j}{2N_n}\right):0\le j<N_n\right\},\qquad X=\{0\}\cup\bigcup_{n\ge1}X_n.$$ The clusters are disjoint, all their points are isolated, and their only accumulation point is $0$, so $X$ is compact. Give each point of $X_n$ mass $2^{-n}/N_n$ and give $0$ mass zero. This defines a finite Borel measure of total mass $1$, regular because finite subsets approximate the mass of any set from inside, and complements of finite subsets of its complement approximate it from outside. Index $X_n$ by binary vectors $u\in\{0,1\}^{4n}$ in lexicographic order, and set $$H_n(u,v)=(-1)^{u\cdot v},\qquad k(x_u,x_v)=2^{-n}H_n(u,v)\quad(x_u,x_v\in X_n),$$ with $k=0$ on different clusters and whenever either coordinate is $0$. The dot product in the exponent is taken modulo $2$. This real symmetric kernel is continuous: away from $0$ points are isolated; near $(0,0)$ nonzero block values have modulus $2^{-n}\to0$; near $(0,x)$ or $(x,0)$ with $x\ne0$ the kernel is eventually zero. A vector $u$ of odd parity gives $k(x_u,x_u)=-2^{-n}$, so the kernel is not positive semidefinite. Pairing binary vectors differing in a coordinate where $u\ne w$ shows $\sum_v(-1)^{(u+w)\cdot v}=0$; for $u=w$ the sum is $N_n$. Thus $H_n^2=N_nI$. The normalized singleton indicators form a complete orthonormal basis of this atomic $L^2$ space (truncating a square-summable atomic integral proves completeness). On its $X_n$ block the operator matrix is $2^{-n}(2^{-n}/N_n)H_n=2^{-6n}H_n$. Consequently $T_k^*T_k$ is $2^{-8n}I$ on that block and $|T_k|$ is $2^{-4n}I$. The block singular values are $2^{-4n}$, repeated $N_n=2^{4n}$ times. Their squared sum is $\sum_{n\ge1}2^{-4n}<\infty$; their sum is $\sum_{n\ge1}1=\infty$, so $T_k$ is not trace class by [[def-trace-class-operator]]. Compactness follows from [A2], or directly because the block norms tend to zero and finite block truncations have finite rank. This proves the second boundary while retaining the positive-kernel conclusion: positivity supplies trace-class membership here; continuity alone does not. [step 1.1, step 1.2, step 1.3, A1, A2, algebra] ∎
