---
id: thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
kind: theorem
title: Direct integrals of measurable Hilbert fields are Hilbert spaces
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - cor-triangle-inequality-for-inner-product-norm
  - def-axiom-of-choice
  - def-calligraphic-l-p-on-a-measure-space
  - def-countable-choice
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-finite-sigma-finite-and-semifinite-measures
  - def-hilbert-space
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-real-and-complex-inner-product-space
  - def-standard-borel-space
  - lem-countable-iff-surjection-from-n
  - lem-complex-conjugation-and-modulus-laws
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-rat-embeds-dense
  - prop-measure-of-a-set-difference
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - thm-continuity-from-below-for-measures
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-dominated-convergence
  - thm-dynkin-pi-lambda
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-minkowski-inequality-for-integrals
  - thm-monotone-convergence-for-the-integral
  - thm-n-cross-n-countable
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-rationals-countable
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.G, printed pp. 59–60 (countable fundamental family, measurable sections, quotient, and direct-integral inner product)"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Chapter 10 §§1.3–1.5, printed pp. 94–96 (Riesz–Fischer completion discussion on p. 95; measurable fields and fibrewise Gram–Schmidt on pp. 95–96)"
verification:
  precheck: pass
  audited: 2026-09-30
axiom_use: "Assume AC. It selects measurable representatives of the countable subsequence of quotient classes and supplies the countable-choice hypothesis of Parseval. AC also supplies the standard-Borel coding and countable generating-algebra corollary used for scalar L² separability. The Cauchy thresholds and fibrewise Gram–Schmidt construction are canonical; no further choice is used."
---

## Statement

Assume AC. Let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure
space, and let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field
with a countable fundamental family. The direct integral
$$\mathcal H=\int_X^\oplus H_x\,d\mu(x)$$
of [[def-direct-integral-of-a-measurable-hilbert-field]] is complete and
separable. Hence, with its already-defined inner product, it is a separable
Hilbert space. Inner products are linear in their first variable.

## Facts & Assumptions

[F1] The direct integral is the quotient of square-integrable measurable
sections by equality off a measurable null set, and its inner product is the
integral of the fibre inner products
([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F2] Each fibre is a complete Hilbert space, and the specified fundamental
family has dense complex-linear span in that fibre
([[def-hilbert-space]],
[[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F3] Measurable sections have measurable pointwise norms and pairings, are
closed under measurable scalar combinations, and are closed under pointwise
norm limits
([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F4] The fibre inner products are linear in the first variable, and the
induced inner-product norm is absolutely homogeneous and satisfies the
triangle inequality
([[def-real-and-complex-inner-product-space]],
[[cor-triangle-inequality-for-inner-product-norm]]).

[F5] Real Minkowski bounds the scalar $L^2$ norm of a finite sum, and complex
$L^2(\mu;\mathbb C)$ has its quotient norm and satisfies Minkowski's inequality
([[thm-minkowski-inequality-for-integrals]],
[[def-calligraphic-l-p-on-a-measure-space]],
[[def-complex-lp-and-euclidean-test-function-conventions]],
[[thm-complex-holder-minkowski-and-the-quotient-norm]]).


[F6] Increasing nonnegative measurable functions satisfy monotone convergence
([[thm-monotone-convergence-for-the-integral]]).

[F7] Pointwise almost-everywhere convergence under one integrable majorant
implies convergence of the integrals
([[thm-dominated-convergence]]).

[F8] A nonnegative measurable function with finite integral is finite almost
everywhere ([[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]).

[F9] A sigma-finite measure has a countable cover by measurable finite-measure
sets ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F10] Finite and countable unions obey measure subadditivity
([[thm-finite-and-countable-subadditivity-of-measures]]).

[F11] Measures are continuous from below on increasing measurable sets
([[thm-continuity-from-below-for-measures]]), and when the smaller set has
finite measure, a set difference has the corresponding difference of measures
([[prop-measure-of-a-set-difference]]).

[F12] A standard-Borel space has a measurable structure presented by a Polish
space ([[def-standard-borel-space]]). Under AC it has a countable algebra
generating that structure ([[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]).
The corollary's construction uses a bimeasurable coding into a Borel subset of
$[0,1]$ ([[thm-standard-borel-spaces-admit-bimeasurable-real-codings]]).

[F13] A pi-system contained in a lambda-system has its generated sigma-algebra
contained in that lambda-system ([[thm-dynkin-pi-lambda]]).

[F14] Complex finite simple functions whose nonzero sets have finite measure
are dense in complex $L^p$ for finite $p$, in particular in complex $L^2$
([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]],
[[def-complex-lp-and-euclidean-test-function-conventions]]).

[F15] For a complete orthonormal family, Parseval's equality holds; the
published result assumes Countable Choice
([[thm-parseval-equivalences-for-a-complete-orthonormal-family]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[def-countable-choice]]).

[F16] AC gives a choice function on every family of nonempty sets, and hence
in particular supplies Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F17] There is a bijection between $\mathbb N^2$ and $\mathbb N$, a bijection
between $\mathbb Q$ and $\mathbb N$ ([[thm-n-cross-n-countable]],
[[thm-rationals-countable]]). From a fixed bijection $\beta:\mathbb N^2\to
\mathbb N$, define $c_0(())=0$ and
$c_{k+1}(a_0,\ldots,a_k)=\beta(a_0,c_k(a_1,\ldots,a_k))$; then
$c(a_0,\ldots,a_{k-1})=\beta(k,c_k(a_0,\ldots,a_{k-1}))$ is an injective
code for finite sequences. Every nonempty countable set can be enumerated by
a surjection from $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

[F18] Rational numbers are dense in $\mathbb R$, and complex modulus obeys
the triangle inequality; complex numbers have real and imaginary coordinates
([[lem-rat-embeds-dense]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F19] Measurable scalar functions are closed under finite arithmetic and
pointwise limits ([[thm-arithmetic-and-lattice-operations-preserve-measurability]],
[[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F20] Composition with a Borel map preserves measurability; continuous maps
have Borel preimages ([[thm-composition-with-borel-functions-preserves-measurability]],
[[thm-continuous-preimages-of-borel-sets-are-borel]],
[[def-measurable-function-between-measurable-spaces]]).

[F21] Inner-product Cauchy--Schwarz bounds a coefficient by the product of
the two vector norms ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F22] The nonnegative integral is monotone and positively homogeneous
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct summable-subsequence construction for completeness;
countable scalar simple functions and a measurable fibrewise orthonormal
family for separability.

**Given:** AC, the sigma-finite standard-Borel measure space, the measurable
Hilbert field and its countable fundamental family, and the direct-integral
inner-product space.

1.1 Given a Cauchy sequence $(z_n)$ in $\mathcal H$, for each $k\ge1$ let $N_k$ be the least index after which every pair of terms is less than $2^{-k}$ apart. [given, F1, F3, F16, construct]
Set $n_1=N_1$ and $n_{k+1}=\max(N_{k+1},n_k+1)$. Then $(n_k)$ is strictly
increasing and $\|z_{n_{k+1}}-z_{n_k}\|_{\mathcal H}<2^{-k}$. Each class
$z_{n_k}$ has a nonempty set of square-integrable measurable representatives;
AC [F16] selects one representative $\xi_k$ for each $k$. Put
$d_k=\xi_{k+1}-\xi_k$ and $h_k(x)=\|d_k(x)\|$. By [F1, F3, F16, construct],
$d_k$ is a square-integrable measurable section, $h_k$ is measurable, and
$$\|h_k\|_2=\|[d_k]\|_{\mathcal H}<2^{-k}.$$
[F1, F3, F16, construct]


1.2 By [F12, F16], fix a countable algebra $\mathcal A$ generating $\mathcal B$. [given, F9, F10, F12, F16]
The cited real coding identifies the standard-Borel structure with a Borel
subset of $[0,1]$, and the corollary takes the pullback algebra generated by
rational cuts. By sigma-finiteness [F9], choose a sequence $(E_j)$ of
finite-measure measurable sets covering $X$ and set
$X_m=\bigcup_{j\le m}E_j$. Subadditivity [F10] makes each $X_m$ finite
measure, and the sequence increases to $X$. [F9, F10, F12]


1.3 Recursively construct measurable fibrewise Gram--Schmidt sections. [given, F2, F3, F4, F20, construct]
Put $v_0=e_0$ and, for $n>0$,
$$v_n(x)=e_n(x)-\sum_{j<n}\langle e_n(x),u_j(x)\rangle u_j(x).$$
Set $u_n(x)=r(\|v_n(x)\|)v_n(x)$, where $r(0)=0$ and $r(t)=1/t$ for $t>0$.
By [F3] each $v_n$ is measurable and its norm is measurable. The scalar map
$r$ is Borel, being continuous on $(0,\infty)$ and defined separately on
the Borel singleton $\{0\}$; [F20] makes $u_n$ measurable. At each fibre the
nonzero $u_n(x)$ are orthonormal: for $\ell<n$ with $u_\ell(x)\ne0$, the
induction hypothesis gives
$$\langle v_n(x),u_\ell(x)\rangle=\langle e_n(x),u_\ell(x)\rangle-\sum_{j<n}\langle e_n(x),u_j(x)\rangle\langle u_j(x),u_\ell(x)\rangle=0;$$
when $u_\ell(x)=0$ the pairing vanishes directly. Normalizing a nonzero
$v_n$ preserves these orthogonality relations. Inductively, each $e_n(x)$ lies
in the span of $u_0(x),\ldots,u_n(x)$: when $v_n(x)=0$ it lies in the previous span,
and otherwise $v_n(x)=\|v_n(x)\|u_n(x)$. Their nonzero subfamily therefore
has dense span in $H_x$ by [F2]. This handles dependent vectors without ever
dividing by zero. [F2, F3, F4, F20, algebra]


2.1 For $N\ge1$ put $g_N=\sum_{k=1}^N h_k$. [step 1.1, F5]
These are nonnegative measurable functions increasing in $N$. Minkowski gives
$$\|g_N\|_2\le\sum_{k=1}^N\|h_k\|_2<\sum_{k=1}^N2^{-k}<1.$$
Let $g=\lim_Ng_N=\sup_Ng_N$. Scalar pointwise-limit measurability [F19]
makes $g$ measurable. Monotone convergence [F6] applied to $g_N^2$ gives
$$\int_Xg^2\,d\mu=\lim_N\int_Xg_N^2\,d\mu\le1.$$
Thus $g$ is finite outside the measurable null set
$E=\{x:g(x)=+\infty\}$ by [F8]. [step 1.1, F5, F6, F19, algebra]


2.2 Fix $m$. [step 1.2, F13]
$\mathcal A_m=\{A\cap X_m:A\in\mathcal A\}$ is a pi-system generating the
trace sigma-algebra on $X_m$. Let $\mathcal D_m$ consist of measurable
$B\subseteq X_m$ such that for every $\varepsilon>0$ some $A_m\in\mathcal A_m$
satisfies $\mu(B\triangle A_m)<\varepsilon$. It contains $\mathcal A_m$.
It is a lambda-system: relative complements preserve symmetric-difference
measure; for pairwise disjoint $B_j\in\mathcal D_m$, continuity from below
and finite measure of $X_m$ give
$\mu((\bigcup_jB_j)\setminus(\bigcup_{j\le J}B_j))<\varepsilon/2$
for some $J\ge1$. Approximate each of the first $J$ sets within
$\varepsilon/(2J)$ and take their finite union in $\mathcal A_m$; finite
subadditivity [F10] bounds the resulting symmetric difference by
$\varepsilon$. Dynkin's theorem [F13] now gives that every measurable subset
of $X_m$ belongs to $\mathcal D_m$. If $B$ has finite measure in $X$, then
$B\cap X_m\uparrow B$, so [F11] gives $\mu(B\setminus X_m)\to0$. It follows
that every finite-measure measurable $B$ is approximable in measure by some
$A\cap X_m$ with $A\in\mathcal A$: given $\varepsilon>0$, choose $m$ so that
$\mu(B\setminus X_m)<\varepsilon/2$, then apply $B\cap X_m\in\mathcal D_m$ to
choose $A_m=A\cap X_m$ with $\mu((B\cap X_m)\triangle A_m)<\varepsilon/2$.
The inequality
$\mu(B\triangle A_m)\le\mu(B\setminus X_m)+\mu((B\cap X_m)\triangle A_m)$
proves the required approximation. [step 1.2, F10, F11, F13, algebra]


2.3 At each $x$, let $I_x=\{n:u_n(x)\ne0\}$. [step 1.3, F15, F16]
It is an orthonormal family with dense span in $H_x$ by step 1.3, so
Parseval gives, for each
$w\in H_x$,
$$\|w\|^2=\sum_{n\in I_x}|\langle w,u_n(x)\rangle|^2,$$
where the sum is the increasing limit of finite partial sums. In particular,
for a measurable square-integrable section $\xi$, the functions
$a_n(x)=\langle\xi(x),u_n(x)\rangle$ are measurable by [F3] and lie in
complex scalar $L^2$ by Cauchy--Schwarz [F21] and monotonicity [F22]. The finite
coordinate sections $\xi_N=\sum_{n<N}a_nu_n$ are measurable. Finite
orthogonality gives
$$0\le\|\xi(x)-\xi_N(x)\|^2=\|\xi(x)\|^2-\sum_{n<N}|a_n(x)|^2\le\|\xi(x)\|^2.$$
The initial finite subsets $I_x\cap\{0,\ldots,N-1\}$ exhaust the finite
subsets of $I_x$, so Parseval
makes this residual tend pointwise to zero. Also
$\|\xi_N(x)\|^2=\sum_{n<N}|a_n(x)|^2\le\|\xi(x)\|^2$, so each $\xi_N$
is square-integrable. Dominated convergence [F7] proves
$\|[\xi]-[\xi_N]\|_{\mathcal H}\to0$. [step 1.3, F1, F3, F7, F15, F16, F21, F22, algebra]


3.1 For $x\notin E$, $\sum_k\|d_k(x)\|=g(x)<\infty$, so completeness of $H_x$ gives a limit of $\xi_1(x)+\sum_{k\ge1}d_k(x)$. [step 2.1, F2]
Define $\xi(x)$ to be
that limit off $E$ and $0$ on $E$. For each $N$ the section
$$\zeta_N=\mathbf1_{X\setminus E}\left(\xi_1+\sum_{k=1}^Nd_k\right)$$
is measurable by [F3, F20]. The sequence $\zeta_N(x)$ converges in norm to
$\xi(x)$ for every $x$, so $\xi$ is measurable by [F3]. Off $E$,
$\|\xi(x)\|\le\|\xi_1(x)\|+g(x)$, while on $E$ it is zero. Therefore
$$\|\xi(x)\|^2\le2\|\xi_1(x)\|^2+2g(x)^2$$
everywhere, and the right side has finite integral. Thus $\xi$ is square
integrable and $[\xi]\in\mathcal H$. [step 2.1, F1, F2, F3, F20, algebra]


3.2 The set $\mathcal T=\{A\cap X_m:A\in\mathcal A,\ m\in\mathbb N\}$ is countable and consists of finite-measure sets. [step 2.2, F17]
To see countability, enumerate the nonempty countable algebra and pair its indices
with $m$ using [F17]. Every $T\in\mathcal T$ has finite measure. Let
$\mathcal S$ be the scalar functions that are finite sums
$\sum_{r<N}q_r\mathbf1_{T_r}$ with $q_r\in\mathbb Q+i\mathbb Q$ and
$T_r\in\mathcal T$, including the empty sum. This family is countable by
pairing the natural indices for $T_r$ and the rational real and imaginary
parts, then using the finite-sequence code [F17]. Each member is measurable
and lies in $L^2$, since its support is a finite union of finite-measure sets.
To prove density, fix $f\in L^2(\mu;\mathbb C)$ and $\varepsilon>0$. By
[F14], choose a finite-measure-support simple function
$s=\sum_{r<N}c_r\mathbf1_{B_r}$ with $\mu(B_r)<\infty$ and
$\|f-s\|_2<\varepsilon/3$. If $N=0$, the empty sum belongs to $\mathcal S$
and already approximates $f$ within $\varepsilon$. Suppose $N\ge1$ and put
$\delta=\varepsilon/(3N)$. For each $r$, write $c_r=a_r+ib_r$. If
$\mu(B_r)=0$, take $q'_r=0$. Otherwise rational density [F18] gives
$p_r,q_r\in\mathbb Q$ such that, with $q'_r=p_r+iq_r$,
$|c_r-q'_r|\sqrt{\mu(B_r)}<\delta/2$; here
$|c_r-q'_r|\le|a_r-p_r|+|b_r-q_r|$ by [F18]. For these fixed $q'_r$,
approximate $B_r$ in measure by $T_r\in\mathcal T$ using step 2.2, choosing
$\mu(B_r\triangle T_r)<(\delta/(2(1+|q'_r|)))^2$. Minkowski [F5] gives
$$\|c_r\mathbf1_{B_r}-q'_r\mathbf1_{T_r}\|_2\le |c_r-q'_r|\sqrt{\mu(B_r)}+|q'_r|\sqrt{\mu(B_r\triangle T_r)}<\delta.$$
Thus $t=\sum_{r<N}q'_r\mathbf1_{T_r}\in\mathcal S$, and Minkowski gives
$\|s-t\|_2\le\sum_{r<N}\|c_r\mathbf1_{B_r}-q'_r\mathbf1_{T_r}\|_2
<N\delta=\varepsilon/3$. Hence $\|f-t\|_2<2\varepsilon/3<\varepsilon$,
so $\mathcal S$ is dense in scalar $L^2(\mu;\mathbb C)$.
[F5, F14, F17, F18, step 2.2, algebra]


4.1 For $x\notin E$, [step 1.1, step 3.1, F1, F4, F7]
$$\|\xi(x)-\xi_k(x)\|\le\sum_{j\ge k}h_j(x)\le g(x),$$
and the left side tends to zero as $k\to\infty$. Its square is measurable,
converges to zero almost everywhere, and is dominated by $g^2\in L^1(\mu)$.
Dominated convergence [F7] yields
$$\|[\xi]-z_{n_k}\|_{\mathcal H}^2=\int_X\|\xi(x)-\xi_k(x)\|^2\,d\mu(x)\longrightarrow0.$$
Since $(z_n)$ is Cauchy, for $\varepsilon>0$ choose $K$ so that
$\|z_n-z_m\|<\varepsilon/2$ for $n,m\ge K$, then choose $k$ with
$n_k\ge K$ and $\|z_{n_k}-[\xi]\|<\varepsilon/2$. The triangle inequality
[F4] gives $\|z_n-[\xi]\|<\varepsilon$ for every $n\ge K$. Thus the entire
sequence converges, proving completeness. [F1, F4, F7, step 1.1, step 3.1]


4.2 Define the countable candidate family $\mathcal Q=\{\sum_{n<N}s_nu_n:N\in\mathbb N,\ s_n\in\mathcal S\}$. [step 2.3, step 3.2, F17]
Its elements are coded by finite sequences from
the countable set of pairs $(n,s)$, using [F17]. Every member is a
square-integrable measurable section: pointwise triangle inequality and
complex $L^2$ Minkowski give
$\|\sum_{n<N}s_nu_n\|_{\mathcal H}\le\sum_{n<N}\|s_n\|_2<\infty$.
Given $[\xi]\in\mathcal H$ and $\varepsilon>0$, choose $N\ge1$ so that
$\|[\xi]-[\xi_N]\|<\varepsilon/2$ by step 2.3. For each $n<N$, density of
$\mathcal S$ [step 3.2] supplies $s_n$ with
$\|[a_n]-[s_n]\|_{L^2(\mu;\mathbb C)}<\varepsilon/(2\sqrt N)$. Put
$Y_n=\{x:u_n(x)\ne0\}$; it is measurable because $\|u_n(\cdot)\|$ is
measurable. Since $a_n=0$ off $Y_n$ and $u_n$ has norm one on $Y_n$,
pointwise orthogonality gives
$$\left\|[\xi_N]-\left[\sum_{n<N}s_nu_n\right]\right\|_{\mathcal H}^2=\sum_{n<N}\int_{Y_n}|a_n-s_n|^2\,d\mu\le\sum_{n<N}\|[a_n]-[s_n]\|_{L^2}^2<\varepsilon^2/4.$$
The triangle inequality proves that $\mathcal Q$ is dense in $\mathcal H$.
The only selections here are finitely many scalar approximants for a fixed
$\xi,N$; no choice principle is used in constructing the countable set
$\mathcal Q$. [F1, F3, F4, F5, F17, step 2.3, step 3.2, algebra]


5.1 Step 4.1 proves completeness, and step 4.2 provides a countable dense family. Together with the inner-product structure of [F1], this proves that $\mathcal H$ is a separable Hilbert space. [step 4.1, step 4.2, F1] ∎

## Boundary cases

If $X=\varnothing$, or all fibres are zero, the direct integral is the zero
Hilbert space and its singleton is countable and dense. On a null base every
square-integrable section represents zero, and the estimates above still apply.
For a one-dimensional fibre, Gram--Schmidt yields at most one nonzero frame
vector and Parseval is the one-coordinate identity. Dependent or zero
fundamental vectors give $v_n=0$ and are assigned $u_n=0$; finite-measure
exhaustions that stabilize and zero-measure pieces are included in the
finite-measure and null-set arguments. There is no interval endpoint
parameter. AC is used exactly as stated in the `axiom_use` field; least-index
subsequence selection and Gram--Schmidt are canonical. The theorem has no
iff assertion.

## Source qualifications

Bekka--de la Harpe, Chapter 1 §1.G, printed pp. 59–60, define a countable
fundamental family, measurable sections, the almost-everywhere quotient, and
the integrated inner product, then state that the resulting space is Hilbert
without proving completeness in that passage. Bruhat, Part III Chapter 10
§1.3, printed p. 95, explicitly says completeness follows by imitating the
Riesz--Fischer proof but leaves the argument to the reader; §1.5, printed
p. 96, gives fibrewise orthogonalization and zeroes a vector when its
orthogonal remainder vanishes. Bruhat's framework is a locally compact
topological/Lusin field, not this standard-Borel measurable convention. The
summable-subsequence proof, null-set modification, finite-measure
$\pi$--$\lambda$ approximation, and measurable Gram--Schmidt construction
above supply the details in the present setting; no unstated Bruhat hypothesis
is used.
