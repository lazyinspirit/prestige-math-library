---
id: ex-integral-operator-trace-under-a-valid-diagonal-hypothesis
kind: example
title: Integral operator trace under a valid diagonal hypothesis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-l-two-kernels-give-hilbert-schmidt-operators, thm-completion-of-an-inner-product-space-is-hilbert, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, lem-nuclear-series-characterizes-trace-norm, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-tonelli-and-fubini-for-completed-product-measures, thm-compact-implies-complete-and-totally-bounded, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-finite-sigma-finite-and-semifinite-measures, def-completed-product-measure, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-counting-measure, def-axiom-of-choice, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-dense-top, def-countable, lem-subset-of-countable, thm-countable-union-of-countable, def-metric-convergence, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-banach-space, def-real-and-complex-inner-product-space, def-compact-linear-operator, def-orthogonality-and-orthogonal-complement, thm-cauchy-schwarz-in-an-inner-product-space, def-hilbert-schmidt-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
4. two boundaries are part of the statement. First, an **arbitrary** class in
   $L^2(X\times X,\mu\times\mu)$ has no pointwise diagonal: representatives may
   be changed on the diagonal, and when $\mu$ is nonatomic the diagonal is a
   $(\mu\times\mu)$-null set, so the displayed identity is a theorem under the
   continuity and positivity hypotheses and is not a definition of the trace.
   Second, continuity of $k$ alone does not imply trace class: it only gives
   Hilbert–Schmidt, and a continuous Hermitian kernel that is not positive
   semidefinite may fail to be trace class.

## Facts & Assumptions

**Given:** AC, the compact metric space $X$, the finite regular Borel measure $\mu$, the continuous Hermitian positive semidefinite kernel $k$, and the symbols $k_x:=k(\cdot,x)$.

[A1] **Kernel arithmetic.** $k$ is bounded and measurable on $X\times X$ with $\|k\|_2^2=\int_{X\times X}|k|^2\,d(\mu\times\mu)\le\mu(X)^2\sup|k|^2<+\infty$, the completed product measure is finite and Tonelli applies to nonnegative measurable functions ([[def-completed-product-measure]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-finite-sigma-finite-and-semifinite-measures]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[A2] **Kernel operators.** For $k$ of finite square norm the operator $T_k$ is bounded with $\|T_k\|\le\|k\|_2$, is Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_2$, and is compact; the complex space $L^2(X,\mu;\mathbb C)$ with $\langle f,g\rangle=\int f\overline g\,d\mu$ is a Hilbert space ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[def-hilbert-schmidt-operator]], [[def-bounded-linear-operator]], [[def-operator-norm]], [[def-hilbert-space]], [[def-banach-space]], [[def-compact-linear-operator]]).

[A3] **The reproducing-kernel space.** On the complex span $E_0$ of the functions $k_x$ put $\langle\sum_ia_ik_{x_i},\sum_jb_jk_{y_j}\rangle_0:=\sum_{i,j}a_i\overline{b_j}k(y_j,x_i)$. Positive semidefiniteness and Hermitian symmetry make this a positive semidefinite Hermitian form, so $|\langle h,g\rangle_0|^2\le\langle h,h\rangle_0\langle g,g\rangle_0$ and the null set $N:=\{h:\langle h,h\rangle_0=0\}$ is a subspace on which the form vanishes identically and whose elements are exactly the functions vanishing on $X$, because $|h(x)|=|\langle h,k_x\rangle_0|\le\|h\|_0\|k_x\|_0=\|h\|_0\sqrt{k(x,x)}$ for $h\in E_0$; the quotient $E_0/N$ with the induced inner product has a completion $H_k$, a Hilbert space ([[thm-completion-of-an-inner-product-space-is-hilbert]], [[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-orthogonality-and-orthogonal-complement]]). In $H_k$ the **reproducing identity** $h(x)=\langle h,k_x\rangle$ and the bound $|h(x)|\le\|h\|\sqrt{k(x,x)}$ hold, the inclusion $J:H_k\to L^2(X,\mu)$, $Jh:=h$, is a well-defined bounded linear map with $\|J\|\le\sqrt{\mu(X)\sup_xk(x,x)}$, and $T_k=JJ^*$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]]).

[A4] **A countable orthonormal basis of $H_k$.** By compactness $X$ is totally bounded, so for each $n$ there is a finite $(1/n)$-net of $X$ ([[thm-compact-implies-complete-and-totally-bounded]]); AC chooses one net for each $n$, their union $D$ is at most countable and dense, and the $\mathbb Q(i)$-span of $\{k_d:d\in D\}$ is an at most countable dense subset of $H_k$, because $\|k_x-k_y\|^2=k(x,x)-k(x,y)-k(y,x)+k(y,y)\to0$ as $y\to x$ by continuity and Hermitian symmetry; the separable-basis theorem therefore provides a finite or countable Hilbert basis $(e_n)_{n\in N}$ of $H_k$ ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-dense-top]], [[def-countable]], [[lem-subset-of-countable]], [[thm-countable-union-of-countable]], [[def-metric-convergence]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A5] **Nuclear series, Parseval and Tonelli.** A series $\sum_n\langle\cdot,u_n\rangle v_n$ whose coefficient norms are summable converges in operator norm and defines a trace-class operator, whose trace is $\sum_n\langle v_n,u_n\rangle$ with $\|T\|_1\le\sum_n\|u_n\|\|v_n\|$; and for the Hilbert basis $(e_n)$ of $H_k$, Parseval gives $\sum_n|e_n(x)|^2=\sum_n|\langle k_x,e_n\rangle|^2=k(x,x)$ for every $x$, while Tonelli for the countable nonnegative family $(x,n)\mapsto|e_n(x)|^2$ gives $\int_X\sum_n|e_n(x)|^2d\mu(x)=\sum_n\|Je_n\|^2$ ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-of-a-trace-class-operator]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the data above, the space $H_k$ with its basis $(e_n)_{n\in N}$ and the inclusion $J$.

1.1 **The operator and its factorization.** By [A1] the class of $k$ has finite square norm, so [A2] makes $T_k$ a bounded Hilbert–Schmidt compact operator with the stated norms. By [A3] the inclusion $J$ is bounded with $T_k=JJ^*$: for $f\in L^2$ and every $x$, $(JJ^*f)(x)=\langle J^*f,k_x\rangle=\langle f,Jk_x\rangle_{L^2}=\int_Xf(y)\overline{k(y,x)}\,d\mu(y)=\int_Xk(x,y)f(y)\,d\mu(y)=(T_kf)(x)$, using the reproducing identity and Hermitian symmetry. [A1, A2, A3]

1.2 **$J$ is Hilbert–Schmidt and $T_k$ is positive.** By [A4] the family $(e_n)$ is a Hilbert basis of the domain $H_k$ of $J$, so $\sum_n\|Je_n\|^2=\int_X\sum_n|e_n(x)|^2d\mu(x)=\int_Xk(x,x)\,d\mu(x)$ by [A5], and the right-hand side is finite because $k(x,x)$ is continuous on the compact space $X$; hence $J$ is Hilbert–Schmidt relative to $(e_n)$. Moreover $T_k^*=(JJ^*)^*=JJ^*=T_k$ and $\langle T_kf,f\rangle=\langle J^*f,J^*f\rangle\ge0$ for all $f$ by [A3], so $T_k$ is self-adjoint and positive. [A1, A3, A4, A5]

2.1 **Trace class and the trace formula.** Expanding $J^*$ in the Hilbert basis $(e_n)$ of its range gives $J^*f=\sum_n\langle J^*f,e_n\rangle e_n=\sum_n\langle f,Je_n\rangle e_n$, hence $T_k=JJ^*=\sum_n\langle\cdot,Je_n\rangle Je_n$, a nuclear series with summable coefficient norms $\sum_n\|Je_n\|\,\|Je_n\|=\sum_n\|Je_n\|^2=\int_Xk(x,x)\,d\mu(x)<+\infty$ by [step 1.2]. By [A5] $T_k$ is trace class with $\|T_k\|_1\le\int_Xk(x,x)d\mu(x)$ and $\operatorname{tr}(T_k)=\sum_n\langle Je_n,Je_n\rangle=\sum_n\|Je_n\|^2=\int_Xk(x,x)\,d\mu(x)$. [step 1.2, A5]

3.1 **Conclusion.** Claims 1–3 are [step 1.1], [step 1.2] and [step 2.1]. For claim 4: an $L^2$-class has values determined only up to null sets, the diagonal $\{(x,x)\}$ is $(\mu\times\mu)$-measurable and is null whenever $\mu$ is nonatomic, so no pointwise diagonal can be read off an arbitrary kernel class; and continuity without positive semidefiniteness gives only the Hilbert–Schmidt property of [step 1.1], not the nuclear series of [step 2.1], so the trace formula genuinely uses positivity. [step 1.1, step 1.2, step 2.1, A1, A3] ∎
