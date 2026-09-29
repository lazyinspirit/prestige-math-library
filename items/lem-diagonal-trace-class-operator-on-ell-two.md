---
id: lem-diagonal-trace-class-operator-on-ell-two
kind: lemma
title: Diagonal trace-class operators on $\ell^2(\mathbb N,\mathbb C)$
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-inner-product-induces-a-norm
  - def-algebraic-multiplicity-for-compact-operators
  - def-axiom-of-choice
  - def-banach-space
  - def-bounded-linear-operator
  - def-cauchy-in-metric
  - def-complete-metric-space
  - def-complex-metric-convergence-and-continuity
  - def-dimension
  - def-hilbert-space
  - def-linear-basis
  - def-linear-independence
  - def-metric-convergence
  - def-operator-norm
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-real-and-complex-inner-product-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - lem-finite-rank-operators-are-compact
  - lem-nuclear-series-characterizes-trace-norm
  - lem-of-square-monotone
  - lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums
  - lem-weyl-eigenvalue-singular-value-inequalities
  - thm-algebra-of-limits
  - thm-bessel-inequality-for-an-arbitrary-orthonormal-family
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complex-plane-is-complete
  - thm-hausdorff-iff-net-limits-are-unique
  - thm-hilbert-space-fourier-expansion
  - thm-norm-limit-of-compact-operators-is-compact
  - thm-trace-is-absolutely-convergent-and-basis-independent
justified_by: []
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5–§3.6, diagonal operators and Schatten classes"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$H:=\ell^2(\mathbb N,\mathbb C)$ be the space of square-summable complex
families with its pairing, norm and induced metric
([[def-square-summable-family-on-an-arbitrary-index-set]],
[[def-real-and-complex-inner-product-space]]), and for $n\in\mathbb N$ let
$u_n\in H$ be the family that is $1$ at $n$ and $0$ elsewhere. Then:

1. $H$ is a complex Hilbert space ([[def-hilbert-space]]) and
   $(u_n)_{n\in\mathbb N}$ is a complete orthonormal family in $H$
   ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
2. For every bounded complex sequence $c=(c_n)_{n\in\mathbb N}$ the series
   $$D_cx:=\sum_{n\in\mathbb N}c_n\langle x,u_n\rangle u_n$$
   converges in $H$ for every $x\in H$, and $D_c$ is a bounded linear operator
   with $D_cu_n=c_nu_n$ and $\|D_c\|\le\sup_n|c_n|$
   ([[def-bounded-linear-operator]], [[def-operator-norm]]). For bounded
   $c,c'$ and $\lambda\in\mathbb C$,
   $$D_c+D_{c'}=D_{c+c'},\qquad \lambda D_c=D_{\lambda c},\qquad D_cD_{c'}=D_{cc'},$$
   with $D_0=0$ and $D_{(1)}=I_H$ the zero and identity operators of $H$, and
   $D_c$ is boundedly invertible if and only if $\inf_n|c_n|>0$; in that
   case $D_c^{-1}=D_{c^{-1}}$.
3. If in addition $\sum_{n\in\mathbb N}|c_n|<+\infty$, then $D_c$ is trace
   class ([[def-trace-class-operator]]) with
   $\|D_c\|_1=\sum_{n\in\mathbb N}|c_n|$ and
   $\operatorname{tr}(D_c)=\sum_{n\in\mathbb N}c_n$
   ([[def-trace-of-a-trace-class-operator]]), and its nonzero eigenvalues,
   repeated according to algebraic multiplicity
   ([[def-algebraic-multiplicity-for-compact-operators]]), are exactly the
   nonzero scalars of the list $(c_n)_{n\in\mathbb N}$, each nonzero $\lambda$
   occurring exactly $\#\{n:c_n=\lambda\}$ times.

## Facts & Assumptions

**Given:** AC; the square-summable space $H=\ell^2(\mathbb N,\mathbb C)$ with
its coordinate vectors $u_n$; a bounded complex sequence $c$, and in the final
part a summable one with $\sum_n|c_n|<+\infty$.

[A1] AC is the axiom of choice, and it implies Dependent Choice and Countable
Choice ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

[A2] On $\ell^2(\mathbb N,\mathbb C)$ the vector operations are pointwise,
$Q(a):=\sum_n|a_n|^2$ is the supremum of the finite subsums and $\|a\|^2=Q(a)$
for $a\in H$, the pairing is $\langle a,b\rangle=\sum_na_n\overline{b_n}$,
linear in the first and conjugate-linear in the second argument with
$\langle a,a\rangle=\|a\|^2$; for nonnegative families
$\sum_nc_n=\sum_{n\in F}c_n+\sum_{n\notin F}c_n$ for every finite $F$; if
$\sum_nc_n<+\infty$ then for every real $\varepsilon>0$ there is a finite $F$
with $\sum_{n\notin F}c_n<\varepsilon$; and $u_n$ is the family that is $1$ at
$n$ and $0$ elsewhere
([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A3] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\,\|y\|$, and squaring
is monotone on the nonnegative reals: $0\le u\le v$ implies $u^2\le v^2$
([[thm-cauchy-schwarz-in-an-inner-product-space]],
[[lem-of-square-monotone]]).

[A4] The induced length of an inner-product space is a norm, so it satisfies
the triangle inequality and vanishes only at $0$; its metric is the metric of
convergence used below ([[cor-inner-product-induces-a-norm]],
[[def-metric-convergence]], [[def-real-and-complex-inner-product-space]]).

[A5] Bessel's inequality: for an orthonormal family $(e_i)_{i\in I}$ and every
$x$, $\sum_i|\langle x,e_i\rangle|^2\le\|x\|^2$, so the coefficient family lies
in $\ell^2(I,\mathbb C)$
([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]).

[A6] Summation theorem: for an orthogonal family $(x_i)$ with
$\sum_i\|x_i\|^2<+\infty$ the finite-subset net $\sum_{i\in F}x_i$ converges
to a vector $s$ with $\|s\|^2=\sum_i\|x_i\|^2$; in particular, for an
orthonormal family $(e_i)$ and $a\in\ell^2(I,\mathbb C)$ the net
$\sum_{i\in F}a_ie_i$ converges to $s$ with $\|s\|^2=\sum_i|a_i|^2$ and
$\langle s,e_j\rangle=a_j$ for every $j$
([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]]).

[A7] Fourier expansion: in a complete orthonormal family $(e_i)$ every $x$
equals the norm limit of the net $\sum_{i\in F}\langle x,e_i\rangle e_i$, and
the coefficients are unique
([[thm-hilbert-space-fourier-expansion]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A8] Orthonormal means $\langle e_i,e_j\rangle=\delta_{ij}$; every finite
subfamily of an orthonormal family is linearly independent and coefficients in
a finite expansion are unique; the span of a family is the set of its finite
linear combinations and is a linear subspace, and the family is complete when
that span is dense
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[def-linear-independence]]).

[A9] A bounded linear operator satisfies $\|Sx\|\le\|S\|\,\|x\|$ with
$\|S\|$ the unit-ball supremum; a bounded operator on a normed space is
continuous on convergent nets
([[def-bounded-linear-operator]], [[def-operator-norm]]).

[A10] Convergence in a metric space means $d(x_k,x)\to0$, a Cauchy sequence
converges in a complete metric space, the complex plane $\mathbb C$ is
complete, and convergence in $\mathbb C$ is convergence of real and imaginary
parts ([[def-metric-convergence]], [[def-cauchy-in-metric]],
[[def-complete-metric-space]], [[thm-complex-plane-is-complete]],
[[def-complex-metric-convergence-and-continuity]]).

[A11] Algebra of limits: sums, scalar multiples and products of finitely many
convergent real sequences converge to the corresponding combinations of the
limits; with componentwise convergence in $\mathbb C$ this gives the same
statements for finitely many convergent complex sequences
([[thm-algebra-of-limits]], [[thm-complex-plane-is-complete]]).

[A12] A Hilbert space is a complete inner-product space, hence a Banach space:
every Cauchy sequence converges ([[def-hilbert-space]], [[def-banach-space]],
[[def-complete-metric-space]]).

[A13] A net in a Hausdorff space has at most one limit; and if two nets in a
normed space converge, then the net of termwise sums converges to the sum of
the limits by the triangle inequality
([[thm-hausdorff-iff-net-limits-are-unique]],
[[cor-inner-product-induces-a-norm]]).

[A14] Bounded finite-rank operators are compact, and a norm limit of compact
operators is compact ([[lem-finite-rank-operators-are-compact]],
[[thm-norm-limit-of-compact-operators-is-compact]]).

[A15] Nuclear series: a compact operator is trace class exactly when it has a
nuclear representation, and then $\|T\|_1$ is the infimum of the nuclear sums,
attained by the singular-value series
([[lem-nuclear-series-characterizes-trace-norm]],
[[def-trace-class-operator]]).

[A16] Trace: for a supplied Hilbert basis $E$ of $H$ the family
$(\langle Te,e\rangle)_{e\in E}$ is absolutely summable, and
$\operatorname{tr}_E(T)=\sum_{e\in E}\langle Te,e\rangle$ agrees with the
basis-independent $\operatorname{tr}(T)$
([[def-trace-of-a-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A17] Algebraic multiplicity: for a compact operator and a nonzero spectral
value $\lambda$, the generalized eigenspace is the stabilized kernel
$\ker(T-\lambda I)^{m}$ and $m_{\mathrm{alg}}(\lambda;T)$ is its dimension
([[def-algebraic-multiplicity-for-compact-operators]]).

[A18] Weyl's inequality: for a compact operator on a complex Hilbert space,
whose nonzero eigenvalues are listed with algebraic multiplicity and ordered
by decreasing modulus, $\sum_j|\lambda_j|\le\|T\|_1$ whenever $T$ is trace
class ([[lem-weyl-eigenvalue-singular-value-inequalities]]).

[A19] A finite-dimensional space has a well-defined dimension, the common
cardinality of all its bases, and the span of $k$ linearly independent vectors
has dimension $k$ ([[def-dimension]], [[def-linear-basis]]).

## Proof

**Proof technique:** direct.

**Given:** AC; the space $H=\ell^2(\mathbb N,\mathbb C)$ with coordinate vectors $u_n$; bounded complex sequences $c$, $c'$; a scalar $\lambda$; and, from step 7.2 on, $\sum_n|c_n|<+\infty$.

1.1 By [A2] every family in $H$ has pointwise coordinates, and for the coordinate vectors the finite-subset description of the pairing gives $\langle u_n,u_m\rangle=\sum_ku_n(k)\overline{u_m(k)}=u_n(n)\overline{u_m(n)}=\delta_{nm}$, all other terms being $0$; in particular $\|u_n\|=1$ and $u_n\ne0$. [A2, A8, algebra]

2.1 For $x\in H$ and $n\in\mathbb N$ the pairing with $u_n$ picks out the $n$-th coordinate, $\langle x,u_n\rangle=\sum_kx_k\overline{u_n(k)}=x_n$, so by Cauchy–Schwarz and step 1.1 $|x_n|=|\langle x,u_n\rangle|\le\|x\|\,\|u_n\|=\|x\|$. [A2, A3, step 1.1]

2.2 The span of $(u_n)$ is dense in $H$: given $x\in H$ and a real $\varepsilon>0$, the finite sum $\sum_n|x_n|^2=\|x\|^2$ is finite, so by the small-tail property [A2] there is a finite $F$ with $\sum_{n\notin F}|x_n|^2<\varepsilon^2$. The vector $s:=\sum_{n\in F}x_nu_n$ lies in the span [A8], and the difference $x-s$ has coordinates $0$ on $F$ and $x_n$ off $F$, so the splitting identity gives $\|x-s\|^2=\sum_{n\notin F}|x_n|^2<\varepsilon^2$ and therefore $\|x-s\|<\varepsilon$ by [A3]. Hence $(u_n)$ is a complete orthonormal family in $H$. [A2, A3, A7, A8, step 1.1, algebra]

3.1 Let $(a^{(m)})_{m\in\mathbb N}$ be a Cauchy sequence in $H$; for every $n$ step 2.1 applied to the differences $a^{(m)}-a^{(p)}\in H$ (pointwise operations, [A2]) gives $|a^{(m)}_n-a^{(p)}_n|\le\|a^{(m)}-a^{(p)}\|$, so each coordinate sequence is Cauchy in $\mathbb C$ and converges to a scalar $a_n$ by [A10]. Fix a real $\varepsilon>0$ and $M$ with $\|a^{(m)}-a^{(p)}\|\le\varepsilon$ for all $m,p\ge M$. For a finite $F\subseteq\mathbb N$ the sum $\sum_{n\in F}|a^{(p)}_n-a^{(M)}_n|^2$ tends, as $p\to\infty$, to $\sum_{n\in F}|a_n-a^{(M)}_n|^2$ by [A11] applied to the finitely many coordinates, while every finite subsum of a square sum is at most that square sum [A2], so each value is at most $\|a^{(p)}-a^{(M)}\|^2\le\varepsilon^2$; hence $\sum_{n\in F}|a_n-a^{(M)}_n|^2\le\varepsilon^2$. Taking the supremum over finite $F$ gives $Q(a-a^{(M)})\le\varepsilon^2<+\infty$, so $a-a^{(M)}\in H$ with $\|a-a^{(M)}\|\le\varepsilon$ by [A3], and $a=a^{(M)}+(a-a^{(M)})\in H$; then for every $m\ge M$ the triangle inequality [A4] gives $\|a^{(m)}-a\|\le\|a^{(m)}-a^{(M)}\|+\|a^{(M)}-a\|\le2\varepsilon$. Thus $a^{(m)}\to a$ and $H$ is complete, hence a complex Hilbert space. [A2, A3, A4, A10, A11, A12, step 2.1, algebra]

4.1 Let $c$ be bounded with $C:=\sup_n|c_n|$, and let $x\in H$. The coefficients $b_n:=c_n\langle x,u_n\rangle$ satisfy $\sum_n|b_n|^2\le C^2\sum_n|\langle x,u_n\rangle|^2\le C^2\|x\|^2<+\infty$ by Bessel [A5], so by the summation theorem [A6] applied to the orthonormal family $(u_n)$ in the Hilbert space $H$ the net $\sum_{n\in F}b_nu_n$ converges to a vector $D_cx\in H$ with $\|D_cx\|^2=\sum_n|b_n|^2\le C^2\|x\|^2$. Thus $D_c$ is a well-defined map $H\to H$ satisfying $\|D_cx\|\le C\|x\|$ for every $x$. [A2, A5, A6, A9, step 3.1, step 2.2]

5.1 Additivity and homogeneity: for $x,y\in H$ and finite $F$, additivity of the pairing in its first argument [A2] gives $\sum_{n\in F}c_n\langle x+y,u_n\rangle u_n=\sum_{n\in F}c_n\langle x,u_n\rangle u_n+\sum_{n\in F}c_n\langle y,u_n\rangle u_n$; the two nets on the right converge to $D_cx$ and $D_cy$, so by [A13] the left net converges to $D_cx+D_cy$, and uniqueness of limits [A13] together with the defining series of step 4.1 gives $D_c(x+y)=D_cx+D_cy$. The same computation with $\lambda x$ in place of $x+y$ gives $D_c(\lambda x)=\lambda D_cx$, so $D_c$ is linear and therefore bounded with $\|D_c\|\le C$ by step 4.1. For a coordinate vector the coefficient family of $u_m$ is supported at $m$ with value $c_m$ (unique coefficients, [A8]), so its finite-subset net is eventually constant at $c_mu_m$ and $D_cu_m=c_mu_m$; in particular $D_{(1)}$ is the identity of $H$ by the Fourier expansion [A7], the constant sequence $1$ being bounded. [A2, A7, A8, A13, step 4.1]

6.1 Operator identities: fix $x\in H$ and a bounded $c'$. Applying the coefficient clause of [A6] to the vector $D_{c'}x$ gives $\langle D_{c'}x,u_n\rangle=c'_n\langle x,u_n\rangle$ for every $n$, so by step 4.1 the coefficient family of $D_{c'}x$ for the operator $D_c$ is $c_nc'_n\langle x,u_n\rangle$ and $D_cD_{c'}x=\sum_nc_nc'_n\langle x,u_n\rangle u_n=D_{cc'}x$. Likewise the finite sums for $D_{c+c'}$ and for $D_c+D_{c'}$ have equal terms, since $(c_n+c'_n)\langle x,u_n\rangle=c_n\langle x,u_n\rangle+c'_n\langle x,u_n\rangle$, so $D_c+D_{c'}=D_{c+c'}$; and $D_{\lambda c}x=\lambda D_cx$ by homogeneity of the coefficients. As $x$, $c$ and $c'$ were arbitrary, $D_cD_{c'}=D_{cc'}$, $D_c+D_{c'}=D_{c+c'}$ and $\lambda D_c=D_{\lambda c}$. [A2, A6, step 4.1, step 5.1]

7.1 Invertibility criterion: suppose $\inf_n|c_n|>0$. Then no $c_n$ vanishes, the reciprocal sequence $c^{-1}=(c_n^{-1})$ is bounded with $\sup_n|c_n^{-1}|=(\inf_n|c_n|)^{-1}$, and step 6.1 gives $D_{c^{-1}}D_c=D_{c^{-1}c}=D_{(1)}=I$ and $D_cD_{c^{-1}}=I$ by step 5.1, so $D_c$ is boundedly invertible with inverse $D_{c^{-1}}$. Conversely let $S$ be a bounded two-sided inverse of $D_c$. If $\|S\|=0$ then $S=0$ and $I=SD_c=0$, contradicting $u_0=Iu_0\ne0$ from step 1.1; hence $\|S\|>0$, and for every $n$ the operator bound [A9] gives $1=\|u_n\|=\|SD_cu_n\|\le\|S\|\,\|c_nu_n\|=\|S\|\,|c_n|$, so $|c_n|\ge\|S\|^{-1}>0$ for all $n$ and $\inf_n|c_n|>0$. [A2, A4, A9, step 1.1, step 5.1, step 6.1, algebra]

7.2 Now assume $\sum_n|c_n|<+\infty$. Put $c^{(m)}_n:=c_n$ for $n<m$ and $c^{(m)}_n:=0$ for $n\ge m$, and $R_m:=D_{c^{(m)}}$, so that $R_mx=\sum_{n<m}c_n\langle x,u_n\rangle u_n$ lies in the span of $u_0,\dots,u_{m-1}$ and $R_m$ has finite rank and is compact [A8, A14]. By step 6.1 applied to the bounded sequences $c^{(m)}$ and $c-c^{(m)}$ one has $D_c-R_m=D_{c-c^{(m)}}$, so step 4.1 bounds $\|D_c-R_m\|\le\sup_{n\ge m}|c_n|\le\sum_{n\ge m}|c_n|$, and this tail tends to $0$ by the small-tail property [A2] of the summable family $(|c_n|)$; therefore $D_c$ is a norm limit of compact operators and is compact. Indexing the same finite-rank sums by the positive integers, $R_m=\sum_{j=1}^m\langle\cdot,u_{j-1}\rangle\,c_{j-1}u_{j-1}$ with $\sum_{j\ge1}\|u_{j-1}\|\,\|c_{j-1}u_{j-1}\|=\sum_n|c_n|<+\infty$, so the nuclear-series characterization [A15] makes $D_c$ trace class with $\|D_c\|_1\le\sum_n|c_n|$. [A2, A8, A14, A15, step 4.1, step 6.1]

8.1 Eigenvalues and multiplicities: let $b$ be any bounded sequence and let $\lambda\in\mathbb C$. By steps 5.1 and 6.1, $D_b-\lambda I=D_{b-\lambda}$ and $(D_b-\lambda I)^k=D_{(b-\lambda)^k}$ for every $k\ge1$. For $x\in H$ the norm identity of [A6] applied to the coefficient family $\bigl((b_n-\lambda)^k\langle x,u_n\rangle\bigr)_n$ gives $\|(D_b-\lambda I)^kx\|^2=\sum_n|(b_n-\lambda)^k\langle x,u_n\rangle|^2$, so $(D_b-\lambda I)^kx=0$ exactly when $\langle x,u_n\rangle=0$ for every $n$ with $b_n\ne\lambda$; by the Fourier expansion [A7] these are exactly the vectors of the closed span of $\{u_n:b_n=\lambda\}$, and conversely every vector of that closed span is killed by $D_{(b-\lambda)^k}$, because each such $u_n$ is and bounded operators are continuous [A9]. Now take $b=c$ summable and $\lambda\ne0$. The index set $\{n:c_n=\lambda\}$ is finite: it is contained in $\{n:|c_n|\ge|\lambda|\}$, and if the latter were infinite the finite subsums of the nonnegative family $(|c_n|)$ would be unbounded, contradicting $\sum_n|c_n|<+\infty$ [A2]. Hence its closed span is the algebraic span of finitely many orthonormal vectors, of dimension $\#\{n:c_n=\lambda\}$ by [A8] and [A19], and since this kernel is the same for every $k\ge1$ it is the stabilized kernel of [A17], so $m_{\mathrm{alg}}(\lambda;D_c)=\#\{n:c_n=\lambda\}$. These are all the nonzero eigenvalues: if $D_cx=\lambda x$ with $x\ne0$ and $\lambda\ne0$, then some coefficient $\langle x,u_n\rangle$ is nonzero by [A7], and the identity above forces $c_n=\lambda$. [A2, A6, A7, A8, A9, A17, A19, step 5.1, step 6.1, step 7.2]

9.1 Trace norm and trace: by step 7.2 the operator $D_c$ is compact and trace class with $\|D_c\|_1\le\sum_n|c_n|$, and step 8.1 identifies its nonzero eigenvalues with algebraic multiplicity, so their moduli are the terms $|c_n|$ over the indices with $c_n\ne0$. Weyl's inequality [A18] therefore gives $\sum_n|c_n|=\sum_j|\lambda_j|\le\|D_c\|_1$, and with step 7.2 $\|D_c\|_1=\sum_n|c_n|$. Since $(u_n)$ is a supplied Hilbert basis of the Hilbert space $H$ by steps 3.1 and 2.2, the trace theorem [A16] identifies $\operatorname{tr}(D_c)=\operatorname{tr}_{(u_n)}(D_c)=\sum_n\langle D_cu_n,u_n\rangle=\sum_nc_n$, the family $(c_n)$ being absolutely summable by hypothesis. [A2, A16, A18, step 7.2, step 8.1]

10.1 Collecting the parts: claim 1 is steps 3.1 and 2.2, claim 2 is steps 4.1–7.1, and claim 3 is steps 7.2–9.1. The zero sequence $c=0$ gives $D_0=0$ with $\|D_0\|_1=0=\sum_n|c_n|$, $\operatorname{tr}(D_0)=0$ and an empty list of nonzero eigenvalues, so the conventions hold there; the finite-support and one-dimensional cases are instances of the general argument, and $H\ne\{0\}$ because $u_0\ne0$. AC is consumed only through the declared hypotheses of the cited suppliers: the Countable Choice clause of the summation theorem [A6], of the Fourier expansion [A7] and of the norm-limit clause of [A14], the Countable Choice hypotheses of the nuclear-series characterization [A15] and of the trace theorem [A16], and the AC hypotheses of the algebraic-multiplicity definition [A17] and of Weyl's inequality [A18]; the coordinate family $(u_n)$ is explicit and the argument selects nothing further. Both directions of the invertibility criterion are proved in step 7.1, and the equality of the trace norm is obtained from the two inequalities of steps 7.2 and 9.1. No interval, endpoint or degenerate parameter occurs in the statement. [A1, A2, A6, A7, A14, A15, A16, A17, A18, step 1.1, step 2.2, step 3.1, step 4.1, step 7.1, step 7.2, step 8.1, step 9.1] ∎
