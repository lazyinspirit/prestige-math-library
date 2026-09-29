---
id: lem-weyl-eigenvalue-singular-value-inequalities
kind: lemma
title: Weyl product and sum inequalities for compact operators
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-algebraic-multiplicity-for-compact-operators
  - def-absolute-value-and-singular-values-of-a-compact-operator
  - def-compact-linear-operator
  - def-determinant-of-a-square-matrix
  - def-derivative
  - def-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
  - def-limits-at-infinity
  - def-max-min
  - def-natural-logarithm
  - def-operator-norm
  - def-real-exponential-function-and-e
  - def-trace-class-operator
  - def-series
  - def-jordan-block-and-jordan-string
  - lem-finite-set-has-max
  - cor-exponential-reciprocal-and-positivity
  - cor-archimedean-reciprocal
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - lem-integral-elementary-bounds
  - lem-of-abs-value
  - thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors
  - thm-additivity-over-subintervals
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-continuous-implies-integrable
  - thm-countable-union-of-countable
  - thm-derivative-of-exponential
  - thm-determinant-of-a-triangular-matrix
  - thm-exponential-addition-formula
  - thm-exponential-beats-every-polynomial
  - thm-exponential-is-strictly-increasing
  - thm-ftc-second-part
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-natural-logarithm-laws
  - thm-nilpotent-jordan-string-basis
  - thm-nonnegative-series-bounded-partial-sums
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - thm-singular-value-decomposition-for-compact-operators
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
    - title: "Kostenko, Trace Ideals with Applications, §3.4.2, Theorem 3.4.2 and proof, printed pp. 36–37 (PDF pp. 45–46)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §B.5.1, Proposition B.23, Lemma B.24, and Proposition B.25, PDF pp. 506–508"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a complex
Hilbert space and let $T:H\to H$ be compact
([[def-hilbert-space]], [[def-compact-linear-operator]]). List the nonzero
eigenvalues of $T$, repeated according to algebraic multiplicity
([[def-algebraic-multiplicity-for-compact-operators]]) and ordered so that
$|\lambda_1(T)|\ge |\lambda_2(T)|\ge\cdots$; if this list is finite, pad it
with zeros. Let $s_1(T)\ge s_2(T)\ge\cdots$ be the zero-padded singular-value
sequence ([[def-absolute-value-and-singular-values-of-a-compact-operator]]).
For every integer $N\ge0$, with an empty product equal to $1$ when $N=0$,
$$\prod_{j=1}^{N}|\lambda_j(T)|\le\prod_{j=1}^{N}s_j(T).$$
If $T$ is trace class ([[def-trace-class-operator]]), then
$$\sum_{j\ge1}|\lambda_j(T)|\le\sum_{j\ge1}s_j(T)=\|T\|_1.$$

## Facts & Assumptions

**Given:** AC, a complex Hilbert space $H$, a compact operator $T:H\to H$,
its eigenvalue list with algebraic multiplicity, and its singular-value list.

[A1] AC is the choice-function axiom and supplies the prescribed-initial-point
form of Dependent Choice used in the Riesz–Schauder supplier
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A2] AC implies Countable Choice, which supplies the narrower hypotheses of
the SVD, singular-value, trace-class, and orthogonal-decomposition suppliers
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A3] Every nonzero spectral value of a compact operator is an eigenvalue with
finite-dimensional generalized eigenspace, and only finitely many spectral
values have modulus at least any fixed $\varepsilon>0$
([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A4] For each nonzero eigenvalue $\lambda$, its generalized eigenspace is
$G_\lambda(T)=\ker(T-\lambda I)^{m_\lambda}$ for a stabilized exponent
$m_\lambda$, is finite-dimensional, and has dimension equal to its algebraic
multiplicity ([[def-algebraic-multiplicity-for-compact-operators]]). Thus
$(T-\lambda I)|_{G_\lambda(T)}$ is nilpotent.

[A5] Every nilpotent endomorphism of a finite-dimensional vector space has a
basis arranged in Jordan strings; each string has an initial invariant segment
of every length from zero through its full length by the definition of a Jordan
string ([[thm-nilpotent-jordan-string-basis]],
[[def-jordan-block-and-jordan-string]]).

[A6] Under Countable Choice, the singular values of $T$ have a finite or
countably infinite positive list $(s_j)_{j\in J_T}$, with orthonormal families
$(e_j)$, $(f_j)$, SVD expansion
$Tx=\sum_{j\in J_T}s_j\langle x,e_j\rangle f_j$, and partial isometry $U$
such that $T=U|T|$ and $U^*U$ is the orthogonal projection onto
$(\ker T)^\perp$; the singular values are nonincreasing and
$s_1(T)=\|T\|$ ([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A7] The exterior space is the alternating range in the Hilbert tensor power;
its wedges have Gram-determinant inner product, the induced map obeys
$(\Lambda^NT)(x_1\wedge\cdots\wedge x_N)=Tx_1\wedge\cdots\wedge Tx_N$,
is bounded, and is functorial ([[def-hilbert-exterior-power-and-induced-operator]]).

[A8] The determinant is the signed permutation sum and the determinant of a
triangular matrix is the product of its diagonal entries
([[def-determinant-of-a-square-matrix]],
[[thm-determinant-of-a-triangular-matrix]]).

[A9] The operator norm bounds the norm of every image vector:
$\|Sx\|\le\|S\|\|x\|$ ([[def-operator-norm]]).

[A10] For trace-class $T$, the singular-value series converges and its sum is
$\|T\|_1$ ([[def-trace-class-operator]]).

[A11] Every closed subspace of a Hilbert space has an orthogonal complement
that gives a direct-sum decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A12] Under Countable Choice, a countable union of at most countable sets is
at most countable; in particular this applies to a sequence of finite sets
([[thm-countable-union-of-countable]]).

[A13] For a complete orthonormal family, Parseval's identity holds and the
finite-subset coefficient net converges in norm to each vector
([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[A14] A decomposable wedge in a finite-dimensional vector space is nonzero
exactly when its factors are linearly independent
([[thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]]).

[A15] The positive part $r_+:=\max\{r,0\}$ is continuous when $r$ is a
continuous real function; the exponential is continuous and strictly positive
([[def-max-min]], [[def-real-exponential-function-and-e]],
[[thm-algebra-of-continuous-functions]],
[[thm-exponential-is-strictly-increasing]],
[[cor-exponential-reciprocal-and-positivity]]).

[A16] Continuous real functions on a compact interval are Riemann integrable;
the integral preserves pointwise order, is linear on a common interval, and
is additive over subintervals. The integral of the zero function is zero
([[thm-continuous-implies-integrable]],
[[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]],
[[thm-additivity-over-subintervals]], [[lem-integral-elementary-bounds]]).

[A17] The product rule and $(\exp)'=\exp$ hold, and the second fundamental
theorem evaluates an integral of a continuous derivative on a compact interval
([[def-derivative]], [[thm-algebra-of-derivatives]],
[[thm-derivative-of-exponential]], [[thm-ftc-second-part]]).

[A18] For every fixed real $c$, as $R\to+\infty$,
$(R+c)\exp(c-R)\to0$: use the exponential addition and reciprocal laws to
write $\exp(c-R)=\exp(c)/\exp(R)$, then bound $|R+c|$ by $2R$ for sufficiently
large $R$ and apply $R/\exp(R)\to0$. The latter is the case $m=1$, $a=1$ of
the exponential-beats-polynomials theorem
([[def-limits-at-infinity]], [[thm-exponential-addition-formula]],
[[cor-exponential-reciprocal-and-positivity]],
[[thm-exponential-beats-every-polynomial]]).

[A19] For every $q>0$, $\exp(\log q)=q$ by the inverse definition of the
natural logarithm ([[def-natural-logarithm]]).

[A20] The natural logarithm is strictly increasing and satisfies
$\log(ab)=\log a+\log b$ for $a,b>0$
([[thm-natural-logarithm-laws]]).

[A21] For a nonnegative real series, convergence is equivalent to bounded
partial sums, and its sum is the supremum of those partial sums
([[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[A22] Every nonempty finite set of real numbers has a maximum and a minimum
([[def-max-min]], [[lem-finite-set-has-max]]).

[A23] For every positive real $\varepsilon$ there is $m\ge1$ with
$1/m<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A24] A real $x$ is nonzero exactly when $|x|>0$
([[lem-of-abs-value]]).

**Choice accounting:** The exact statement assumes AC. The Riesz–Schauder and
algebraic-multiplicity suppliers are AC-qualified; AC supplies the dependent
choice used by the former [A1]. Countable Choice follows from AC by [A2] and is
used by the countable-union theorem [A12], Parseval [A13], the SVD, the
singular-value and trace-class suppliers, and orthogonal decomposition; SVD
uses it to select bases in the countable family of finite-dimensional
singular eigenspaces. The Jordan-string choices are finite and local to each
prefix. No basis of all of $H$ is selected.

## Proof

**Proof technique:** direct.

**Given:** The data in the statement, and for a fixed finite positive-eigenvalue
prefix the stabilized exponents $m_\lambda$ from [A4].

1.1 By [A1, A3, A4], the nonzero spectral values are eigenvalues of finite algebraic multiplicity, and there are only finitely many above any positive modulus threshold. Every nonzero spectral value lies in the threshold set $\{\lambda:|\lambda|\ge1/m\}$ for some $m\ge1$ by [A23, A24]. Each threshold set is finite by [A3], so Countable Choice [A2] and [A12] make their union at most countable. Repeating each value according to its finite algebraic multiplicity still gives a countable list by another application of [A12]. If that list is infinite, after choosing any remaining value only finitely many remaining values have at least its modulus; that finite nonempty set has a maximum modulus by [A22], which is then maximal among all remaining values. Finite ties can be ordered arbitrarily. AC permits iterating this selection to obtain a sequence ordered by decreasing modulus. If $N=0$, both products are the empty product $1$. If $N\ge1$ and the zero-padded eigenvalue list has $\lambda_N(T)=0$, its first $N$-term product is zero and the asserted inequality follows from nonnegativity of singular values. It remains to prove the claim when $N\ge1$ and all of $\lambda_1(T),\ldots,\lambda_N(T)$ are nonzero. [A1, A2, A3, A4, A12, A22, A23, A24]

1.2 For each distinct eigenvalue $\lambda$ among this prefix, let $r_\lambda$ be its number of occurrences. Then $r_\lambda\le\dim G_\lambda(T)$ by [A4]. Apply [A5] to $(T-\lambda I)|_{G_\lambda(T)}$ and list the resulting finite Jordan-string lengths as $\ell_1,\ldots,\ell_q$. In that order, take an initial segment of length $k_i:=\min(\ell_i,r_\lambda-\sum_{h<i}k_h)$ from string $i$ while the residual is positive, and take length zero thereafter. Since $\sum_i\ell_i=\dim G_\lambda(T)\ge r_\lambda$, these lengths sum to $r_\lambda$. The definition in [A5] makes each selected initial segment invariant under $T$, so their direct sum $F_\lambda$ is $T$-invariant, has dimension $r_\lambda$, and the restriction of $T$ to it is triangular with diagonal entry $\lambda$ repeated $r_\lambda$ times. [A4, A5]

1.3 Put $S:=\Lambda^NT$, $K:=(\ker T)^\perp$, and $P:=U^*U$, the orthogonal projection onto $K$ from [A6]. For every increasing $N$-tuple $J=(j_1<\cdots<j_N)$ in $J_T$, set $\eta_J:=e_{j_1}\wedge\cdots\wedge e_{j_N}$, $\theta_J:=f_{j_1}\wedge\cdots\wedge f_{j_N}$, and $\mu_J:=\prod_{k=1}^Ns_{j_k}(T)$. By the Gram formula [A7], both wedge families are orthonormal. The $e_j$ span $K$: if their closed span were proper, [A11] would give a nonzero $x\in K$ orthogonal to all $e_j$, while the SVD expansion [A6] would imply $Tx=0$, contradicting $K\cap\ker T=\{0\}$. Since decomposable wedges are dense by the exterior construction, approximating each factor by finite $e_j$-sums and expanding by multilinearity shows that the $\eta_J$ span $\Lambda^NK$. The tensor projection $P^{\otimes N}$ is self-adjoint and idempotent and commutes with permutations; its restriction to the alternating range is $\Lambda^NP$, the orthogonal projection onto $M:=\overline{\operatorname{span}}\{\eta_J\}$. Since $T=TP$, functoriality [A7] gives $S=S\Lambda^NP$, so $S$ vanishes on $M^\perp$. On each $\eta_J$, $S\eta_J=\mu_J\theta_J$. If there are at least $N$ positive singular values, the family $(\eta_J)$ is a complete orthonormal family in $M$. For $x\in M$, Parseval and net convergence [A13] give $x_F:=\sum_{J\in F}c_J\eta_J\to x$ over finite subsets $F$, with $c_J=\langle x,\eta_J\rangle$. Orthonormality of both wedge families gives $\|Sx_F\|^2=\sum_{J\in F}\mu_J^2|c_J|^2\le(\sup_J\mu_J)^2\sum_{J\in F}|c_J|^2=(\sup_J\mu_J)^2\|x_F\|^2$. Since $S$ is bounded [A7], passing to the norm limit yields $\|Sx\|\le(\sup_J\mu_J)\|x\|$. The unit vector $\eta_{(1,\ldots,N)}$ attains $\sup_J\mu_J=\prod_{j=1}^Ns_j(T)$, because every increasing tuple has $s_{j_k}(T)\le s_k(T)$. If there are fewer than $N$ positive singular values, $K$ is finite-dimensional of dimension less than $N$, so every decomposable $N$-wedge in $K$ vanishes by [A14]; density gives $\Lambda^NK=\{0\}$ and $S=0$, the same norm formula holding with $s_N(T)=0$. [A2, A6, A7, A11, A13, A14]

2.1 The spaces $G_\lambda(T)$ for the finitely many distinct prefix values form a direct sum: if $\sum_\nu x_\nu=0$ with $x_\nu\in G_\nu(T)$, fix $\lambda$ and apply $Q_\lambda:=\prod_{\nu\ne\lambda}(T-\nu I)^{m_\nu}$. It kills every $x_\nu$ for $\nu\ne\lambda$. On $G_\lambda(T)$ each factor is $(\lambda-\nu)I+N_\lambda$, where $N_\lambda=(T-\lambda I)|_{G_\lambda}$ is nilpotent, so that factor is invertible by its finite geometric-series inverse. Thus $Q_\lambda|_{G_\lambda}$ is invertible and $x_\lambda=0$. Consequently $E_N:=\bigoplus_\lambda F_\lambda$ is a $T$-invariant $N$-dimensional subspace. [A4, step 1.2]

3.1 Choose the concatenated Jordan-segment basis $v_1,\ldots,v_N$ of $E_N$ and put $w:=v_1\wedge\cdots\wedge v_N$. The vectors are linearly independent by their being a basis, so [A14] gives $w\ne0$. If $A$ is the triangular matrix of $T|_{E_N}$ in this basis, multilinearity and alternation [A7] expand $(Tv_1)\wedge\cdots\wedge(Tv_N)=\det(A)w$. By [A8], $\det(A)=\prod_{j=1}^N\lambda_j(T)$. Hence $(\Lambda^NT)w=(\prod_{j=1}^N\lambda_j(T))w$. [A7, A8, A14, step 2.1]

4.1 In the nonzero-prefix case of step 1.1, step 3.1 gives an eigenvector of $S$ with eigenvalue $\prod_{j=1}^N\lambda_j(T)$. The operator-norm bound [A9] and norm identity [step 1.3] yield $\prod_{j=1}^N|\lambda_j(T)|\le\|S\|=\prod_{j=1}^Ns_j(T)$. Together with step 1.1 this proves the product inequality for every $N\ge0$. [A9, step 1.1, step 3.1, step 1.3]

5.1 Fix $N\ge1$ with $\lambda_1(T),\ldots,\lambda_N(T)$ all nonzero. For each $k\le N$, step 4.1 gives the product inequality for the first $k$ terms. Its left side is positive, hence $s_k(T)>0$. The eigenvalue moduli are positive by [A24], so set $x_j:=\log|\lambda_j(T)|$ and $y_j:=\log s_j(T)$ for $j\le N$. Both sequences are nonincreasing because modulus, singular values and logarithm preserve the indicated order; taking logarithms in the product inequalities and using the logarithm product law [A20] gives $\sum_{j=1}^kx_j\le\sum_{j=1}^ky_j$ for every $k\le N$. [A6, A20, A24, step 4.1]

6.1 For a nonincreasing real list $x_1,\ldots,x_N$ and real $t$, $\sum_{j=1}^N(x_j-t)_+=\max_{0\le k\le N}(\sum_{j=1}^kx_j-kt)$, where the $k=0$ sum is zero: the positive terms form an initial segment, and adding any nonpositive later term cannot increase the prefix sum. This finite maximum exists by [A22]. Applying the identity to the lists in step 5.1 and their prefix-sum inequalities gives $\sum_{j=1}^N(x_j-t)_+\le\sum_{j=1}^N(y_j-t)_+$ for every $t\in\mathbb R$. Put $c:=\min\{x_N,y_N\}-1$ and $b:=\max\{x_1,y_1\}+1$, so $c<x_j,y_j<b$ for every $j$, and for $R\ge0$ put $a_R:=c-R$ and $\phi_u(t):=(u-t)_+\exp(t)$. By [A15, A16], these functions and their finite sums are continuous and integrable on $[a_R,b]$; since $\exp(t)>0$, the positive-part inequality remains true after multiplication by $\exp(t)$. Monotonicity and linearity of the integral [A16] give $\sum_j\int_{a_R}^b\phi_{x_j}(t)\,dt\le\sum_j\int_{a_R}^b\phi_{y_j}(t)\,dt$. Fix any $u$ among these finitely many $x_j,y_j$. On $[a_R,u]$, $\phi_u(t)=(u-t)\exp(t)$, whose primitive is $G_u(t):=(u-t+1)\exp(t)$: directly from the derivative definition [A17], $(u-t+1)'=-1$, and the product rule and $ (\exp)'=\exp$ give $G'_u(t)=(u-t)\exp(t)$. On $[u,b]$, $\phi_u=0$. Applying the fundamental theorem, the zero-integral case and interval additivity [A16, A17] yields $\int_{a_R}^b\phi_u(t)\,dt=\exp(u)-(u-a_R+1)\exp(a_R)$. The error $E_{u,R}:=(u-a_R+1)\exp(a_R)=(R+u-c+1)\exp(c-R)$ is nonnegative and tends to zero: for sufficiently large $R$, it is at most $2\exp(c)R/\exp(R)$, which tends to zero by [A18]. Because there are finitely many $x_j$, for every $\varepsilon>0$ one common sufficiently large $R$ makes $\sum_jE_{x_j,R}<\varepsilon$. The integral inequality then gives $\sum_j\exp(x_j)\le\sum_j\exp(y_j)+\varepsilon$, since $E_{y_j,R}\ge0$. As $\varepsilon$ was arbitrary, [A19] gives $\sum_{j=1}^N|\lambda_j(T)|\le\sum_{j=1}^Ns_j(T)$. [A15, A16, A17, A18, A19, A22, step 5.1, algebra]

7.1 If the nonzero eigenvalue list is finite with length $m>0$, step 6.1 at $N=m$ bounds its full absolute sum; for $m=0$ that sum is zero. If the list is infinite, step 6.1 bounds every eigenvalue partial sum by the corresponding singular-value partial sum, which is at most $\|T\|_1$ by trace class [A10]. The eigenvalue terms are nonnegative, so [A21] gives convergence of their series and bounds its sum, the supremum of its partial sums, by $\|T\|_1$. Zero padding changes neither sum, and [A10] identifies the singular-value sum with $\|T\|_1$. This proves the sum conclusion, including finite-rank and zero operators. [A10, A21, step 6.1] ∎
