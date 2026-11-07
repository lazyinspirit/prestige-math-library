---
id: thm-sparse-generalized-von-neumann-theorem
kind: theorem
title: "Sparse generalized von Neumann bound for arithmetic progressions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-k-pseudorandom-measure
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - lem-gowers-cauchy-schwarz-inequality
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - def-prime
  - lem-prime-not-dividing-is-coprime
  - cor-extended-euclidean-bezout-coefficients
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§5, Proposition 5.3, Lemmas 5.4–5.5, and complete proof, printed pp. 497–503"
---

## Statement

Fix an integer $k\ge3$ and a constant $C>0$. Let $p\to\infty$ through primes and let $\nu=(\nu_p)$ be $k$-pseudorandom. For each $p$, let $f_0,\ldots,f_{k-1}:F_p\to\mathbb R$ satisfy $|f_j(x)|\le C(\nu_p(x)+1)$ for all $x$ and all $j$. Define

$$\Lambda_{k,p}(f_0,\ldots,f_{k-1})=\mathbb E_{x,r\in F_p}\prod_{j=0}^{k-1}f_j(x+jr).$$

There is a constant $A_{k,C}$, independent of $p$ and the functions, such that

$$|\Lambda_{k,p}(f_0,\ldots,f_{k-1})|\le A_{k,C}\min_{0\le j<k}\|f_j\|_{U^{k-1}(F_p)}+o(1).$$

The $o(1)$ is uniform over all functions satisfying the displayed pointwise bounds.

## Statement references

[[def-k-pseudorandom-measure|$k$-pseudorandom measure in the Green–Tao convention]]

[[def-gowers-uniformity-norm-on-finite-cyclic-groups|Gowers $U^d$ norm on finite cyclic groups]]

[[lem-gowers-cauchy-schwarz-inequality|Gowers Cauchy–Schwarz inequality]]

[[def-integers-modulo-n|The congruence class $[a]_n$ and the quotient set $\mathbb{Z}/n$]]

[[def-addition-and-multiplication-modulo-n|Addition and multiplication on $\mathbb{Z}/n$ by $[a]_n+[b]_n=[a+b]_n$ and $[a]_n[b]_n=[ab]_n$]]

[[thm-integers-modulo-n-basic-algebra|For every natural $n$, $(\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold]]

[[thm-standard-representatives-modulo-n|For $n\ge 1$, every class in $\mathbb{Z}/n$ has one representative $r$ with $0\le r<n$, so $\lvert\mathbb{Z}/n\rvert=n$; while $\mathbb{Z}/0$ is in bijection with $\mathbb{Z}$]]

[[def-prime|Prime and composite integers: $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$]]

[[lem-prime-not-dividing-is-coprime|For a prime $p$ and any integer $a$, $\gcd(p,a)$ is $p$ when $p \mid a$ and $1$ otherwise; so $p \nmid a$ makes $p$ and $a$ coprime]]

[[cor-extended-euclidean-bezout-coefficients|The extended Euclidean algorithm: the same descent produces integers $x, y$ with $ax + by = \gcd(a,b)$, so Bézout coefficients are computed and not merely shown to exist]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|The complex $L^2$ pairing is well-defined and satisfies Cauchy–Schwarz]]

[Green and Tao, §5, Proposition 5.3 and Lemmas 5.4–5.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

## Facts & Assumptions

**Given:** The fixed $k,C$, a $k$-pseudorandom sequence $\nu_p$, primes $p>2k$, and real-valued functions $f_0,\ldots,f_{k-1}$ satisfying the pointwise bounds in the Statement.

[F1] A $k$-pseudorandom sequence satisfies the $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition ([[def-k-pseudorandom-measure]]).

[F2] The $U^d$ norm is the nonnegative $2^d$-th root of the normalized alternating cube average ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F3] The absolute value of a $d$-dimensional Gowers inner product is at most the product of the $U^d$ norms at its vertices ([[lem-gowers-cauchy-schwarz-inequality]]).

[F4] If $p$ is prime and $p\nmid a$, then $\gcd(p,a)=1$ ([[lem-prime-not-dividing-is-coprime]]); the extended Euclidean descent supplies $u,v\in\mathbb Z$ with $au+pv=1$ ([[cor-extended-euclidean-bezout-coefficients]]).

[F5] Uniform averages on $F_p$ use $p$ representatives, and addition is an abelian group operation ([[thm-standard-representatives-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 Put $\nu'_p=(\nu_p+1)/2$. Expanding each product in a linear-forms test for $\nu'$ gives the average of the constant $1$ plus averages for subfamilies of the original pairwise nonproportional forms; every such average is $1+o(1)$ by [F1], uniformly in all shifts, so $\nu'$ satisfies the same linear-forms condition. For the correlation condition at order $m$, expand $\prod_i(\nu'_p(x+h_i))$; each term with at least two $\nu_p$ factors is bounded by the correlation condition at its number $s$ of factors, while the zero- and one-factor terms are $O(1)$. The function $\tau'_m=2+\sum_{s=2}^m\tau_{s,p}$ has bounded moments of every fixed order and is at least $1$ and every $\tau_{s,p}$, so the full product $\prod_{i<j}\tau'_m(h_i-h_j)$ dominates every expanded term. Hence $\nu'$ is $k$-pseudorandom and $\nu'_p\ge1/2$. [F1, given, algebra]

1.2 It is enough to prove a bound with $|g_j|\le\nu'_p$ because $g_j=f_j/(2C)$ has this property, $\Lambda(f)=(2C)^k\Lambda(g)$, and $\|f_j\|_{U^{k-1}}=2C\|g_j\|_{U^{k-1}}$. Fix an index $t$ at which the minimum norm is attained, relabel the remaining functions as $g_1,\ldots,g_{k-1}$, and shift the starting variable by $tr$. The progression coefficients become $c_0=0$ and distinct nonzero integers $c_1,\ldots,c_{k-1}$ with $|c_i|\le k-1$. Since $p>2k$, each $c_i$ and each difference $c_i-c_j$ is nonzero modulo $p$; [F4] therefore supplies each inverse $c_i^{-1}$ in $F_p$. [given, F2, F4, algebra]

2.1 For $y=(y_1,\ldots,y_{k-1})\in F_p^{k-1}$ set $x=\sum_jy_j$, $r=-\sum_jc_j^{-1}y_j$, and $\phi_i(y)=x+c_ir=\sum_j(1-c_ic_j^{-1})y_j$. The map $y\mapsto(x,r)$ is a uniform cover of $F_p^2$: choose two distinct coefficients $c_a,c_b$, fix the other $k-3$ coordinates, and solve the remaining two equations; their determinant is $c_a^{-1}-c_b^{-1}\ne0$. Thus $\Lambda(g_0,\ldots,g_{k-1})=J_0:=\mathbb E_y\prod_i g_i(\phi_i(y))$, and $\phi_i$ omits $y_i$ for $i\ge1$. [F5, step 1.2, algebra]

3.1 For $0\le d\le k-1$ let $T_d=\{k-d,\ldots,k-1\}$, with $T_0=\varnothing$, and let $y(S)$ replace $y_j$ by an independent $y'_j$ for $j\in S\subseteq T_d$. Define $J_d$ by averaging, over $y,y'$, the product over $S\subseteq T_d$ of $g_i(\phi_i(y(S)))$ for $0\le i\le k-d-1$ and $\nu'_p(\phi_i(y(S)))^{1/2}$ for $k-d\le i<k$. For $d<k-1$ define $P_d=\mathbb E_{y,y'}\prod_{S\subseteq T_d}\nu'_p(\phi_{k-d-1}(y(S)))$. In the Cauchy–Schwarz step in the variable $y_{k-d-1}$, the factor $g_{k-d-1}/(\nu'_p)^{1/2}$ occurs outside that average; $|g_{k-d-1}|\le\nu'_p$ bounds its squared contribution by $P_d$. Expanding the square of the remaining average introduces an independent copy $y'_{k-d-1}$ and gives exactly $J_{d+1}$. Therefore $|J_d|^2\le P_dJ_{d+1}$. [given, F2, F5, step 2.1, algebra]

4.1 Each $P_d=1+o(1)$ by [F1]: it is a product of $2^d$ linear forms in at most $k-1+d\le2k-3\le3k-4$ variables, with coefficient numerators and denominators at most $k$. The forms are nonzero and pairwise nonproportional: if $k-d-1>1$ they all share the same nonzero coefficient on $y_1$, forcing any proportionality factor to be $1$, and distinct subsets $S$ place a nonzero coefficient on different variables $y_j$ or $y'_j$; if $k-d-1=1$, their nonzero supports themselves distinguish the subsets. The test uses at most $2^{k-2}\le k2^{k-1}$ forms. Iterating step 3.1 yields $|J_0|^{2^{k-1}}\le(1+o(1))J_{k-1}$. [F1, step 1.1, step 3.1, algebra]

5.1 In $J_{k-1}$ only $g_0$ remains at the cube vertices. Reparameterize its arguments as $x+\omega\cdot h$, where $h_j=y'_j-y_j$, and call the average of the remaining $\nu'_p$ factors $W(x,h)$. For $q=0,1,2$, expansion of $W^q\prod_\omega\nu'_p(x+\omega\cdot h)$ gives at most $k2^{k-1}$ forms in at most $3k-4$ variables. In the nonzero progression coefficients $c_1,\ldots,c_{k-1}$ choose one equal to $1$ or $-1$ (such a coefficient exists because they are a consecutive set around zero), relabel it $c_{k-1}$, and eliminate its variable by $y_{k-1}=x-\sum_{j<k-1}y_j$. Write $a_{ij}=1-c_i/c_j$. The coefficient of $y_j$ in $\phi_i(y+\omega h)$ is $a_{ij}-a_{i,k-1}=c_i(c_j-c_{k-1})/(c_jc_{k-1})$. For $j<k-1$, make the invertible change $y_j=(c_jc_{k-1}/(c_j-c_{k-1}))z_j$, and the same change for the independent copy $y'_j$. It is invertible over $F_p$ for $p>2k$, since all numerator and denominator factors are nonzero and have absolute value below $p$. After the change, the $z_j$ coefficient is $c_i$; the $x$ coefficient is $(c_{k-1}-c_i)/c_{k-1}$; and the $h_j$ coefficients are $(c_j-c_i)/c_j$ (or $0$). The cube forms $x+\omega\cdot h$ have coefficients $0,1$. Every coefficient has numerator and positive denominator at most $k$. The forms are nonzero and pairwise nonproportional: cube forms have no $z$-coordinates while each $\phi_i$ has a nonzero $z$-coordinate; within one $y$ copy the ratio of a $z_j$ coefficient to the $x$ coefficient is $c_ic_{k-1}/(c_{k-1}-c_i)$, which is injective in the distinct coefficient $c_i$; for fixed $i$, the nonzero $h$ coefficients recover $\omega$; and the independent $y'$ copy has disjoint $z'$-coordinates. Thus every expanded average is a permitted test in [F1], and equals $1+o(1)$. Consequently $\mathbb E (W-1)^2\prod_\omega\nu'_p(x+\omega\cdot h)=o(1)$ and $\mathbb E\prod_\omega\nu'_p(x+\omega\cdot h)=1+o(1)$. Cauchy–Schwarz and $|g_0|\le\nu'_p$ show that $J_{k-1}=\|g_0\|_{U^{k-1}}^{2^{k-1}}+o(1)$. [F1, F2, step 1.1, step 4.1, algebra]

6.1 Steps 4.1–5.1 give $|\Lambda(g)|^{2^{k-1}}\le\|g_t\|_{U^{k-1}}^{2^{k-1}}+o(1)$. Taking nonnegative roots and using $|g_t|\le\nu'_p$ bounds the left side by $O_k(\|g_t\|_{U^{k-1}})+o(1)$. The index $t$ was any index attaining the minimum, so rescaling in step 1.2 proves the stated estimate. [given, step 1.2, step 4.1, step 5.1, algebra] ∎
