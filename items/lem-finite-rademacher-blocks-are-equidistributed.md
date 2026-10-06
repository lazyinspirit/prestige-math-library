---
id: lem-finite-rademacher-blocks-are-equidistributed
kind: lemma
title: "Finite Rademacher blocks are equidistributed"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-rademacher-functions-on-the-unit-interval, def-integral-over-a-measurable-set, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-lebesgue-measure-of-a-box-of-every-kind, def-finite-sum, lem-finite-sum-laws, thm-arithmetic-and-lattice-operations-preserve-measurability, def-simple-function-and-canonical-representation, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integrable-real-and-complex-functions-and-their-integrals, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Appendix C.1, the one-to-one correspondence between sign patterns and dyadic intervals $I_k$ proving independence, printed p. 585"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§5.5, the independent uniform sign setup in Lemma 5.6 and the second-moment cancellation in its proof, printed pp. 24-25"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 5.1 and its proof, (5.2), printed pp. 15-16"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $j_1<\dots<j_m$ be nonnegative integers and let
$F:\{\pm1\}^m\to\mathbb C$ be any function. Then
$$\int_0^1F\bigl(\varepsilon_{j_1}(t),\dots,\varepsilon_{j_m}(t)\bigr)\,dt=2^{-m}\sum_{s\in\{\pm1\}^m}F(s).$$
Consequently, for all indices $l_1,\dots,l_N\ge0$ one has
$\int_0^1\prod_{i=1}^N\varepsilon_{l_i}(t)\,dt=1$ when every index $l$ occurs an
even number of times and $0$ otherwise; in particular
$\int_0^1\varepsilon_j\,dt=0$ and
$\int_0^1\varepsilon_j\varepsilon_k\,dt=\delta_{jk}$ for all $j,k\ge0$.

## Facts & Assumptions

**Given:** Countable Choice and the Rademacher functions $\varepsilon_j$ of [[def-rademacher-functions-on-the-unit-interval]], integers $m\ge1$, $0\le j_1<\dots<j_m$, and a function $F:\{\pm1\}^m\to\mathbb C$. Integrals over $I=[0,1)$ are written $\int_0^1$; $J:=j_m+1$ and $d_i:=j_m-j_i$ for $i=1,\dots,m$.

[F1] For every $j\ge0$ the function $\varepsilon_j$ is Borel measurable, $|\varepsilon_j|\equiv1$, and it is constant on each half-open dyadic interval $[k2^{-(j+1)},(k+1)2^{-(j+1)})$, $k=0,\dots,2^{j+1}-1$, where it equals $(-1)^k$ ([[def-rademacher-functions-on-the-unit-interval]]).

[F2] Every half-open box in $\mathbb R^n$ is Lebesgue measurable with measure equal to the product of its side lengths, in particular $\lambda([a,b))=b-a$ on $\mathbb R$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]); the integral over a measurable set and the fact that almost everywhere equal functions have equal integrals are the conventions of [[def-integral-over-a-measurable-set]] and [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]].

[F3] A nonnegative simple measurable function has nonnegative integral equal to its simple integral, and the complex integral is $\int h=\int\operatorname{Re}h+i\int\operatorname{Im}h$ ([[def-simple-function-and-canonical-representation]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F4] Finite sums are the recursion of [[def-finite-sum]] and satisfy additivity, scaling, splitting and monotonicity ([[lem-finite-sum-laws]]).

[F5] Applying real arithmetic closure to real and imaginary parts shows that sums and products of measurable complex functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

## Proof

**Proof technique:** direct.

1.1 Binary counting. Set $J:=j_m+1\ge1$ and $d_i:=j_m-j_i$, so $0=d_m<d_{m-1}<\dots<d_1<J$. Successive division by $2$ gives a unique remainder in $\{0,1\}$ and a quotient less than $2^{J-1}$; induction on $J$, starting with $J=0$ and $k=0$, therefore gives every integer $k$ with $0\le k<2^J$ a unique binary expansion $k=\sum_{r=0}^{J-1}\beta_r(k)2^r$ with digits $\beta_r(k)\in\{0,1\}$. For every integer $d$ with $0\le d<J$ one has $\lfloor k/2^d\rfloor=\sum_{r=d}^{J-1}\beta_r(k)2^{r-d}$, whose parity is $\beta_d(k)$ because all terms with $r>d$ are even multiples of $2$; hence $(-1)^{\lfloor k/2^d\rfloor}=(-1)^{\beta_d(k)}$. The map $k\mapsto(\beta_{d_1}(k),\dots,\beta_{d_m}(k))$ from $\{0,\dots,2^J-1\}$ onto $\{0,1\}^m$ has every fiber of cardinality exactly $2^{J-m}$: for prescribed digits $b_1,\dots,b_m$ the solutions are precisely $k=\sum_{i=1}^mb_i2^{d_i}+\sum_{r\notin\{d_1,\dots,d_m\},\,r<J}c_r2^r$ with $c_r\in\{0,1\}$, and distinct choices of the free digits $c_r$ give distinct $k$ by uniqueness of the binary expansion, while there are $J-m$ free digits. [given, F4, algebra]

2.1 Constant values on the dyadic intervals. Let $I_k:=[k2^{-J},(k+1)2^{-J})$ for $k=0,\dots,2^J-1$; these intervals partition $I$ exactly. If $t\in I_k$ then $2^{j_i+1}t\in[k/2^{d_i},(k+1)/2^{d_i})\subset[\lfloor k/2^{d_i}\rfloor,\lfloor k/2^{d_i}\rfloor+1)$, because $k=2^{d_i}\lfloor k/2^{d_i}\rfloor+r$ with $0\le r<2^{d_i}$ gives $(k+1)/2^{d_i}=\lfloor k/2^{d_i}\rfloor+(r+1)/2^{d_i}\le\lfloor k/2^{d_i}\rfloor+1$; hence $\lfloor2^{j_i+1}t\rfloor=\lfloor k/2^{d_i}\rfloor$ and, by [F1], $\varepsilon_{j_i}(t)=(-1)^{\lfloor k/2^{d_i}\rfloor}=(-1)^{\beta_{d_i}(k)}$. Therefore the sign vector $(\varepsilon_{j_1}(t),\dots,\varepsilon_{j_m}(t))$ equals $s(k):=\bigl((-1)^{\beta_{d_1}(k)},\dots,(-1)^{\beta_{d_m}(k)}\bigr)$ on all of $I_k$. [F1, step 1.1, algebra]

3.1 The level sets have measure $2^{-m}$. For a sign pattern $s\in\{\pm1\}^m$ put $E_s:=\{t\in I:(\varepsilon_{j_1}(t),\dots,\varepsilon_{j_m}(t))=s\}$ and let $N_s:=\#\{k<2^J:s(k)=s\}$. By step 2.1 the set $E_s$ equals the union of the intervals $I_k$ over those $k$; the intervals are pairwise disjoint, each has measure $2^{-J}$ by [F2], and the defining map $s(\cdot)$ is a bijection between sign patterns and digit vectors, so by step 1.1 $N_s=2^{J-m}$; hence $\lambda(E_s)=N_s2^{-J}=2^{-m}$. [F2, step 1.1, step 2.1, algebra]

4.1 The identity for $F\ge0$. Suppose first that $F\ge0$. The composition $F\circ\Phi$, $\Phi:=(\varepsilon_{j_1},\dots,\varepsilon_{j_m})$, is a nonnegative simple measurable function constant on the finitely many measurable sets $E_s$: it equals $F(s)$ on $E_s$, the union of the $E_s$ is all of $I$, and measurability follows from [F5]. Hence, by [F3], $\int_0^1F\circ\Phi\,d\lambda$ equals its simple integral $\sum_{y\ge0}y\,\lambda(\{F\circ\Phi=y\})=\sum_{s}F(s)\lambda(E_s)=2^{-m}\sum_sF(s)$ by step 3.1, where the last sum groups the $s$ with equal value $F(s)$. For a real-valued $F$ write $F=F^+-F^-$; then $(F\circ\Phi)^\pm=F^\pm\circ\Phi$ and the real integral is the difference of the two nonnegative integrals, so the identity holds; for complex-valued $F$ apply this to $\operatorname{Re}F$ and $\operatorname{Im}F$ and combine with the definition of the complex integral in [F3]. [F3, F5, step 3.1, algebra]

5.1 The monomial and orthonormality formulas. If $N=0$, the empty product is $1$ and its integral is $1$. For $N\ge1$, let $l_1,\dots,l_N\ge0$ have distinct values $j_1<\dots<j_m$ with multiplicities $e_1,\dots,e_m\ge1$. Apply step 4.1 to the function $F(s_1,\dots,s_m):=\prod_{i=1}^ms_i^{e_i}$: since $s^{e}=1$ for even $e$ and $s^{e}=s$ for odd $e$, the average factorises as $2^{-m}\sum_s\prod_is_i^{e_i}=\prod_{i=1}^m\bigl(\tfrac12\sum_{u=\pm1}u^{e_i}\bigr)$, and each factor is $1$ for even $e_i$ and $\tfrac12(1-1)=0$ for odd $e_i$. Hence the integral is $1$ when every index occurs an even number of times and $0$ otherwise. Taking $m=1$ gives $\int_0^1\varepsilon_j=0$; taking $N=2$ gives $\int_0^1\varepsilon_j\varepsilon_k=1$ for $j=k$ and $=0$ for $j\ne k$, that is $\delta_{jk}$. [step 4.1, F4, algebra] ∎
