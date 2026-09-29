---
id: lem-fredholm-determinant-trace-norm-continuity-and-growth
kind: lemma
title: "Trace-norm continuity, growth and multiplicativity of the local determinant"
status: draft
origin: pipeline
deps:
  - cor-finite-dimensional-subspaces-are-closed
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-locally-uniformly-convergent-holomorphic-series
  - def-countable-choice
  - def-countable
  - def-hilbert-orthogonal-projection
  - def-infinite-product
  - def-separable-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-trace-class-operator
  - def-hilbert-exterior-power-and-induced-operator
  - lem-cauchy-estimates-on-concentric-subdiscs
  - lem-exponential-dominates-one-plus-x
  - lem-exponential-series-has-infinite-radius
  - lem-finite-rank-compressions-converge-in-trace-norm
  - lem-limit-preserves-order
  - lem-separable-trace-class-determinant-construction
  - lem-trace-norm-of-hilbert-exterior-powers
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-hilbert-space-fourier-expansion
  - thm-infinite-product-criterion
  - thm-mean-value-inequality
  - thm-operator-determinant-is-multiplicative
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-weierstrass-m-test-for-complex-function-series
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
    - title: "Kostenko, Trace Ideals with Applications, §3.4.3, Corollary 3.4.1, Theorem 3.4.4 and Corollary 3.4.2, printed pp. 38–40 (PDF pp. 47–49)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a, Lemmas 14.35–14.39, printed pp. 585–587 (PDF pp. 597–599)"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §§B.5.2–B.5.3, Propositions B.27 and B.29, PDF pp. 509–511"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a separable complex Hilbert
space and let $A,B:H\to H$ be trace-class operators. Write $D_T$ for the
locally constructed determinant of [[lem-separable-trace-class-determinant-construction]],
and let $(s_j(T))_{j\ge1}$ be the zero-padded singular-value sequence. Then:

1. For every $z\in\mathbb C$,
   $$|D_A(z)|\le\prod_{j\ge1}(1+|z|s_j(A))\le e^{|z|\|A\|_1}.$$
   Moreover, $D_A$ has minimal exponential type: for every $\varepsilon>0$
   there is $C_\varepsilon\ge0$ such that
   $$|D_A(z)|\le C_\varepsilon e^{\varepsilon|z|}\qquad(z\in\mathbb C).$$
2. For every $z\in\mathbb C$,
   $$|D_A(z)-D_B(z)|\le |z|\,\|A-B\|_1 e^{1+|z|\|A\|_1+|z|\|B\|_1}.$$
3. $A+B+AB$ is trace class and
   $$D_{A+B+AB}(1)=D_A(1)D_B(1).$$
4. If $(F_m)_{m\ge1}$ is any sequence of finite-rank operators with
   $\|F_m-A\|_1\to0$, then the ordinary determinants
   $\det_{\operatorname{ran}F_m}(I_{\operatorname{ran}F_m}+zF_m|_{\operatorname{ran}F_m})$
   converge locally uniformly to $D_A(z)$. Their limit is independent of
   the approximating sequence.

## Facts & Assumptions

**Given:** Countable Choice, a separable complex Hilbert space $H$, trace-class
$A,B$, and, when claim 4 is considered, a trace-norm convergent finite-rank
sequence $(F_m)$.

[A1] For trace-class $T$, the induced exterior powers are trace class and
$$\|\Lambda^nT\|_1=\sum_{j_1<\cdots<j_n}s_{j_1}(T)\cdots s_{j_n}(T) \le\frac{\|T\|_1^n}{n!}$$
for $n\ge1$; $\Lambda^0T=I_{\mathbb C}$ and its trace is $1$
([[lem-trace-norm-of-hilbert-exterior-powers]]).

[A2] The trace is linear on trace-class operators and satisfies
$|\operatorname{tr}S|\le\|S\|_1$
([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A3] Trace class means $\sum_{j\ge1}s_j(T)<\infty$ and
$\|T\|_1=\sum_{j\ge1}s_j(T)$; its singular-value sequence is zero padded
([[def-trace-class-operator]]).

[A4] For a nonnegative sequence $(p_j)$, $\prod_j(1+p_j)$ converges exactly
when $\sum_jp_j$ converges ([[thm-infinite-product-criterion]],
[[def-infinite-product]]). Nonnegative sums are determined by suprema of their
finite subsums ([[def-square-summable-family-on-an-arbitrary-index-set]]), and
limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[A5] For every real $x$, $1+x\le e^x$
([[lem-exponential-dominates-one-plus-x]]); the real exponential is increasing
and satisfies $e^{u+v}=e^ue^v$
([[thm-exponential-is-strictly-increasing]],
[[thm-exponential-addition-formula]]); and $\sum_{n\ge0}x^n/n!$ converges
for every real $x$ ([[lem-exponential-series-has-infinite-radius]]).

[A6] The exterior construction realizes $\Lambda^nH$ as the antisymmetric
tensor subspace and gives its wedge action; the local determinant is
$D_T(z)=\sum_{n\ge0}z^n\operatorname{tr}(\Lambda^nT)$, entire, with
$D_T(0)=1$, and for finite-rank $F$ it satisfies
$D_F(z)=\det_E(I_E+zF|_E)$ for every finite-dimensional invariant
$E\supseteq\operatorname{ran}F$
([[def-hilbert-exterior-power-and-induced-operator]],
[[lem-separable-trace-class-determinant-construction]]).

[A7] Trace-class operators form a linear space, their trace norm is a norm,
$\|T\|\le\|T\|_1$, and
$\|STU\|_1\le\|S\|\,\|T\|_1\,\|U\|$ for bounded $S,U$
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A8] Every supplied sequence of finite-rank orthogonal projections
$P_n\to I$ strongly on separable $H$ satisfies
$\|P_nTP_n-T\|_1\to0$ for trace-class $T$; the initial projections of a
supplied countable orthonormal basis are an example
([[lem-finite-rank-compressions-converge-in-trace-norm]]).

[A9] A separable space has an at-most-countable dense subset
([[def-separable-space]], [[def-countable]]). If that subset is nonempty and
finite, choose a finite listing and repeat its first member periodically; if
it is countably infinite, choose a bijection from $\mathbb N$. In either case
it has a surjective sequence, with no choice beyond fixing the one listing
whose existence is asserted by countability. A dense sequence in a Hilbert
space yields a finite or countable orthonormal basis by the specified
Gram–Schmidt construction
([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]).

[A10] Finite-dimensional subspaces are closed; for a closed subspace its
Hilbert orthogonal projection is defined by the orthogonal decomposition
([[cor-finite-dimensional-subspaces-are-closed]],
[[def-hilbert-orthogonal-projection]]). The Fourier sums of a supplied
orthonormal basis converge in norm to each vector
([[thm-hilbert-space-fourier-expansion]]).

[A11] The determinant of a composition of endomorphisms of one
finite-dimensional vector space is the product of their determinants,
including dimension zero ([[thm-operator-determinant-is-multiplicative]]).

[A12] If a function is holomorphic on a disc of radius $S$, is bounded by
$M$ on the concentric circle of radius $R<S$, then on the centre its derivative
is bounded by $M/R$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[A13] A holomorphic function on an open subset of $\mathbb C$ is smooth as a
map of two real coordinates, with real derivative given by its complex
derivative ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).
A differentiable map $[a,b]\to\mathbb R^2$ whose derivative norm is at most
$M$ satisfies $\|f(b)-f(a)\|_2\le M(b-a)$
([[thm-mean-value-inequality]]).

[A14] A complex polynomial is entire
([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).
If complex-valued functions are bounded by a summable nonnegative majorant,
their series converges uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]);
a locally uniformly convergent series of holomorphic functions is holomorphic
([[cor-locally-uniformly-convergent-holomorphic-series]]).

[A15] A polynomial of degree at most $n$ is determined by its values at any
$n+1$ distinct complex numbers; the root bound for polynomials over an
integral domain proves uniqueness, and the Lagrange formula then expresses
each coefficient as a finite linear combination of those values
([[thm-root-bound-for-polynomials-over-a-domain]]).

[A16] Countable Choice is the exact declared choice assumption
([[def-countable-choice]]). It is used through the AC$_\omega$-qualified
singular-value definition and exterior trace, trace, ideal, and compression
and projection/Fourier suppliers [A1], [A2], [A3], [A7], [A8], and [A10]; the
trace-class definition records the concrete countable selections of finite
orthonormal bases in singular eigenspaces. The separable-space basis used
below is constructed from one dense sequence by the stated Gram–Schmidt
process, and the padded enumeration requires no choice by [A9].

**Source audit:** Kostenko, *Trace Ideals with Applications*, §3.4.3, Corollary 3.4.1, Theorem 3.4.4 and Corollary 3.4.2 (printed pp. 38–40; PDF pp. 47–49) gives the exterior-product growth, minimal-type, Cauchy continuity and multiplicativity route. The local proof below derives the affine-parameter entire function from its exterior-trace series rather than leaving that dependence implicit. Van Neerven, *Functional Analysis*, §14.5.a, Lemmas 14.35–14.39 (printed pp. 585–587; PDF pp. 597–599) gives the same bounds and product law; its Lemma 14.37 uses tensor-product trace-norm telescoping, and Lemma 14.38 assumes $T=PTP$, so neither argument is substituted for the local proof. Dyatlov–Zworski, Appendix B §§B.5.2–B.5.3, Propositions B.27 and B.29 (PDF pp. 509–511) records the continuous finite-rank extension and determinant estimates; that extension construction is contextual only. No source uncertainty remains for this item.

## Proof
1.1 Put $c_n(T):=\operatorname{tr}(\Lambda^nT)$ and $e_n(T,r):=\sum_{j_1<\cdots<j_n}s_{j_1}(T)\cdots s_{j_n}(T)r^n$ for $n\ge1$, with $e_0(T,r)=1$. By [A1] and [A2], $|c_n(T)|r^n\le e_n(T,r)$ for $n\ge1$, while $c_0(T)=1$. For each finite $N$, distributive expansion gives $$\prod_{j=1}^N(1+rs_j(T))=\sum_{n=0}^N\sum_{1\le j_1<\cdots<j_n\le N} r^n s_{j_1}(T)\cdots s_{j_n}(T).$$ All terms are nonnegative; increasing $N$ exhausts the finite subsets of the singular-value index set, so [A4] identifies the limit of these products with $\sum_{n\ge0}e_n(T,r)$. Since [A3] gives $\sum_js_j(T)=\|T\|_1$, [A4] ensures the product exists. This proves $$|D_T(z)|\le\sum_{n\ge0}|c_n(T)|r^n\le\prod_{j\ge1}(1+rs_j(T)),\qquad r=|z|.$$ For finite $N$, [A5] and the exponential addition law give $$\prod_{j=1}^N(1+rs_j(T))\le e^{r\sum_{j=1}^Ns_j(T)}\le e^{r\|T\|_1}.$$ Passing to the product limit and using order preservation proves the second bound. [A1, A2, A3, A4, A5, A6]
1.2 Suppose $z\ne0$ and $A\ne B$. Since the trace norm is a norm by [A7], $\|A-B\|_1>0$. Put $C=(A+B)/2$, $G=A-B$, and $F(t)=D_{C+tG}(z)$ for $t\in\mathbb C$. Trace class is a linear space by [A7], so $C+tG$ is trace class. For each $n$, the tensor-power definition in [A6] shows that $t\mapsto\Lambda^n(C+tG)$ is an operator-valued polynomial of degree at most $n$: expand $(C+tG)^{\otimes n}$ by the tensor factors. For each power $t^k$, its coefficient is the sum over all $k$-element subsets of factors in which $G$ is used, with $C$ in the other factors. This sum commutes with every permutation of tensor slots and hence preserves the antisymmetric subspace, so its restriction is a bounded coefficient operator on $\Lambda^nH$. Write the bounded coefficient operators as $Q_k$, and choose distinct $t_0,\ldots,t_n\in\mathbb C$. Define $L_j(t):=\prod_{k\ne j}(t-t_k)/(t_j-t_k)$. For every $m=0,\ldots,n$, the scalar polynomials $t^m$ and $\sum_{j=0}^n t_j^mL_j(t)$ agree at all $t_k$; their difference has degree at most $n$ and $n+1$ roots, so [A15] makes the difference zero. Multiplying these identities by $Q_m$ and summing gives $\Lambda^n(C+tG)=\sum_{j=0}^n\Lambda^n(C+t_jG)L_j(t)$. Expanding the $L_j$ shows each coefficient operator is a finite linear combination of the values $\Lambda^n(C+t_jG)$. Those values are trace class by [A1], so all coefficient operators are trace class by [A7]. Hence $p_n(t):=\operatorname{tr}(\Lambda^n(C+tG))$ is a scalar polynomial. For $|t|\le M$, [A1], [A2], and [A7] give $$|z|^n|p_n(t)|\le \frac{\bigl(|z|(\|C\|_1+M\|G\|_1)\bigr)^n}{n!}.$$ The majorant series converges by the exponential-series supplier [A5]. Each $z^np_n(t)$ is holomorphic by [A14]; the Weierstrass M-test and holomorphic-series theorem [A14] therefore show that $F(t)=\sum_{n\ge0}z^np_n(t)$ is entire in $t$. [A1, A2, A6, A7, A14, A15]
2.1 Fix $\varepsilon>0$. Choose $N\ge0$ so that $\sum_{j>N}s_j(T)<\varepsilon/2$, possible by [A3]. The tail product is at most $e^{r\sum_{j>N}s_j(T)}\le e^{\varepsilon r/2}$ because every finite tail product is bounded by the exponential of the corresponding partial tail sum using [A5]; taking its product limit preserves the inequality by [A4]. If $N=0$, this already gives $|D_T(z)|\le e^{\varepsilon r}$ with $C_\varepsilon:=1$. If $N\ge1$, then for $j\le N$ and $r\ge0$, $$1+rs_j(T)\le\left(1+\frac{2Ns_j(T)}{\varepsilon}\right) \left(1+\frac{\varepsilon r}{2N}\right) \le\left(1+\frac{2Ns_j(T)}{\varepsilon}\right)e^{\varepsilon r/(2N)}$$ by [A5]. Multiplying the first $N$ bounds and the tail estimate, and using step 1.1, gives $$|D_T(z)|\le C_\varepsilon e^{\varepsilon r},\qquad C_\varepsilon:=\prod_{j=1}^N\left(1+\frac{2Ns_j(T)}{\varepsilon}\right).$$ This is minimal exponential type, including finite-rank and zero operators. [A3, A5, step 1.1]
2.2 Set $\delta=|z|\|A-B\|_1>0$ and $R=1/\delta$. For $t\in[-1/2,1/2]$ and $|w-t|=R$, one has $|w|\le R+1/2$. By step 1.1 and [A7], $$|F(w)|\le e^{|z|\|C+wG\|_1} \le e^{|z|\|C\|_1+|z|(R+1/2)\|G\|_1} \le e^{1+|z|\|A\|_1+|z|\|B\|_1}.$$ For the last inequality, the triangle inequality gives $\|C\|_1\le(\|A\|_1+\|B\|_1)/2$ and $\delta=|z|\|A-B\|_1\le |z|(\|A\|_1+\|B\|_1)$; also $|z|R\|G\|_1=1$ and $|z|\|G\|_1/2=\delta/2$. Apply [A12] to the radius-$R$ circle about $t$ to get $|F'(t)|\le R^{-1}e^{1+|z|\|A\|_1+|z|\|B\|_1} =\delta e^{1+|z|\|A\|_1+|z|\|B\|_1}$. By [A13] the coordinate map of $F$ on $[-1/2,1/2]$ is differentiable with real derivative norm $|F'(t)|$. The mean-value inequality in [A13] yields $$|D_A(z)-D_B(z)|=|F(1/2)-F(-1/2)| \le\delta e^{1+|z|\|A\|_1+|z|\|B\|_1},$$ since $C+G/2=A$ and $C-G/2=B$. If $z=0$, both determinants equal $1$ by [A6]; if $A=B$, their difference is zero. This proves the continuity bound in all cases. [A6, A7, A12, A13, step 1.1, step 1.2]
3.1 Let $F_m$ be finite rank and $\|F_m-A\|_1\to0$. With $E_m=\operatorname{ran}F_m$, the range is finite dimensional and invariant because $F_m(H)\subseteq E_m$; [A6] identifies the ordinary determinant on $E_m$ with $D_{F_m}(z)$. The same identity holds for every other permitted $E_m$, so the finite-dimensional determinant value is independent of that choice. For any compact $K\subset\mathbb C$, choose $R_K$ with $|z|\le R_K$ on $K$. The trace norms $\|F_m\|_1$ are bounded by [A7] and convergence, so step 2.2 gives $$\sup_{z\in K}|D_{F_m}(z)-D_A(z)| \le R_K\|F_m-A\|_1 e^{1+R_K(\|F_m\|_1+\|A\|_1)}\longrightarrow0.$$ The limit is $D_A$ for every such sequence, hence does not depend on the approximation. [A6, A7, step 2.2]
3.2 If $H=\{0\}$, all determinants in claim 3 are $1$. Otherwise choose an at-most-countable dense subset of $H$ using [A9]; it is nonempty, so [A9] provides a dense sequence. The Gram–Schmidt supplier in [A9] gives an orthonormal basis that is finite or countably infinite. In the finite case set $P_n=I_H$, which is finite rank and converges strongly to $I_H$. In the countably infinite case let $P_n$ be the orthogonal projection, defined by [A10], onto the span of the first $n$ basis vectors; that span is closed by [A10], and the Fourier expansion in [A10] gives $P_nx\to x$. Thus in either case $(P_n)$ is a supplied sequence of finite-rank orthogonal projections converging strongly to $I_H$. Put $A_n=P_nAP_n$ and $B_n=P_nBP_n$. By [A8], $A_n\to A$ and $B_n\to B$ in trace norm. Also, $AB$ is trace class by the ideal property in [A7], so $C:=A+B+AB$ is trace class by linearity. The ideal estimate [A7] gives $$\|A_nB_n-AB\|_1\le \|A_n-A\|_1\|B_n\|+\|A\|\|B_n-B\|_1\longrightarrow0,$$ where $\|B_n\|$ is bounded because $\|B_n\|\le\|B_n\|_1$ and $\|B_n\|_1\le\|B\|_1+\|B_n-B\|_1$. Hence $C_n:=A_n+B_n+A_nB_n\to C:=A+B+AB$ in trace norm. All three compressed operators have range in the finite-dimensional space $P_nH$, which they leave invariant. By [A6] and [A11], $$D_{C_n}(1)=\det_{P_nH}(I+C_n|_{P_nH}) =\det_{P_nH}((I+A_n|_{P_nH})(I+B_n|_{P_nH})) =D_{A_n}(1)D_{B_n}(1).$$ Applying step 2.2 at $z=1$ to $A_n\to A$, $B_n\to B$, and $C_n\to C$ and passing to the limit proves $D_{A+B+AB}(1)=D_A(1)D_B(1)$. [A6, A7, A8, A9, A10, A11, step 2.2, algebra]
4.1 If $A=0$, then $D_A=1$ and its singular-value product is empty or all factors are $1$; if $z=0$, $D_A(0)=1$. When $H=\mathbb C$ and $A=aI$, $D_A(z)=1+za$, so the product and exponential bounds reduce to $|1+za|\le1+|z||a|\le e^{|z||a|}$, the scalar determinant difference is $|z||a-b|$, which is at most the stated continuity bound by [A5], and multiplicativity is $1+(a+b+ab)=(1+a)(1+b)$. For finite-rank $A$, the product has only finitely many nontrivial factors and the tail in step 2.1 is zero after its rank. The Cauchy argument includes both segment endpoints $t=\pm1/2$; the special branches $z=0$ and $A=B$ avoid a zero Cauchy radius denominator. Countable Choice is the exact declared assumption [A16], used through the named trace-class, trace, ideal, compression, and projection/Fourier suppliers; the orthonormal basis used for compressions is built from one dense sequence by Gram–Schmidt. No equivalence is asserted, so both iff directions are inapplicable. [A1, A3, A5, A6, A7, A8, A9, A10, A11, A12, A13, A16, step 1.1, step 2.1, step 2.2, step 3.2]
\qed
