---
id: lem-real-dirichlet-l-log-derivative-zero-kernel-bound
kind: lemma
title: Real log-derivative bound from zeros of a Dirichlet L-function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-zero-order-factorization-holomorphic-function
  - def-primitive-dirichlet-character-and-conductor
  - lem-real-dirichlet-character-has-real-primitive-ancestor
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - lem-primitive-dirichlet-l-theta-integral-representation
  - thm-hadamard-factorization-for-finite-order-entire-functions
  - thm-zero-exponent-is-bounded-by-entire-order
  - def-order-of-an-entire-function
  - thm-dirichlet-l-euler-product
  - thm-induced-dirichlet-l-finite-euler-factors
  - cor-gamma-function-has-no-zeros
  - thm-gamma-meromorphic-continuation
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-extreme-value-theorem-from-compactness
  - lem-dirichlet-character-values
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
  - def-dirichlet-l-function
  - thm-dirichlet-series-absolute-half-plane-holomorphy
  - def-weierstrass-elementary-factor
  - thm-fundamental-theorem-of-arithmetic
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-geometric-series
  - def-real-exponential-function-and-e
  - def-euler-gamma-function
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Sheng-Chi Liu, Lecture Notes in Analytic Number Theory
      url: https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf
      locator: Theorem 30.1.1 and proof, printed pp. 76–78; Hadamard log derivative and real zero kernels.
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Chapter 7 §1, printed pp. 55–56; order-one Hadamard factorization; Chapter 9, printed pp. 69–73.
---




## Statement

There is an absolute constant $C>0$ with the following property. Let $q\ge3$, let $\chi$ be a real nonprincipal Dirichlet character modulo $q$, and let $\chi^*$ be its primitive inducing character of conductor $d\mid q$. For every real $1<\sigma\le2$ and every finite multiset $B$ of real zeros $\beta\in(0,1)$ of $L(s,\chi^*)$, counted with multiplicity,
$$-\frac{L'}{L}(\sigma,\chi)\le C\log q-\sum_{\beta\in B}\frac1{\sigma-\beta}.$$

## Statement references

Sheng-Chi Liu, *Lecture Notes in Analytic Number Theory*, Theorem 30.1.1, printed pp. 76–78.

Ian Petrow, *Introduction to Analytic Number Theory*, Chapter 7 §1, printed pp. 55–56.

## Facts & Assumptions

**Given:** $q\ge3$, a real nonprincipal Dirichlet character $\chi$ modulo $q$, its primitive ancestor $\chi^*$ of conductor $d\mid q$, a real $\sigma\in(1,2]$, and a finite multiset $B$ of real zeros of $L(s,\chi^*)$ in $(0,1)$.

[F1] Every character has a unique primitive ancestor, and a real character has a real primitive ancestor; the ancestor of a nonprincipal character is nonprincipal ([[def-primitive-dirichlet-character-and-conductor]], [[lem-real-dirichlet-character-has-real-primitive-ancestor]]).

[F2] For primitive nonprincipal $\chi^*$ of parity $a\in\{0,1\}$, $\Lambda(s,\chi^*)=(d/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi^*)$ is entire and satisfies $\Lambda(s,\chi^*)=\varepsilon(\chi^*)\Lambda(1-s,\overline{\chi^*})$ with $|\varepsilon(\chi^*)|=1$ ([[def-completed-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]]).

[F3] For primitive nonprincipal $\chi^*$ of conductor $d$ and parity $a$, $2\Lambda(s,\chi^*)$ is the sum of the two entire Mellin integrals over $t\ge1$ with kernels $\Theta_{\chi^*}(t)t^{(s+a)/2-1}$ and $\Theta_{\overline{\chi^*}}(t)t^{(1-s+a)/2-1}$ ([[lem-primitive-dirichlet-l-theta-integral-representation]]).

[F4] A nonzero entire function of finite order factors as an exponential of a polynomial of degree at most its order times its canonical product over zeros ([[thm-hadamard-factorization-for-finite-order-entire-functions]]).

[F5] The exponent of convergence of the nonzero zeros of a finite-order entire function is at most its order; hence order at most one implies $\sum_{\alpha\ne0}|\alpha|^{-2}<\infty$ ([[thm-zero-exponent-is-bounded-by-entire-order]]).

[F6] The order of an entire function $f$ is $\limsup_{R\to\infty}\log\log M_f(R)/\log R$ ([[def-order-of-an-entire-function]]).

[F7] For $\operatorname{Re}s>1$, the Euler product is nonzero, and induction gives the finite Euler correction $L(s,\chi)=L(s,\chi^*)\prod_{p\mid q,\,p\nmid d}(1-\chi^*(p)p^{-s})$ ([[thm-dirichlet-l-euler-product]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

[F8] Gamma has no zeros and has only simple poles at the nonpositive integers ([[cor-gamma-function-has-no-zeros]], [[thm-gamma-meromorphic-continuation]]).

[F9] The natural logarithm is defined on positive reals; it is strictly increasing and satisfies $\log(xy)=\log x+\log y$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F10] Complex modulus is continuous, and a continuous real-valued function on a closed real interval is bounded ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-extreme-value-theorem-from-compactness]]).

[F11] A Dirichlet character vanishes on nonunits and has modulus one on units, so $|\chi^*(n)|\le1$ for every integer $n$ and $\chi^*(p)\in\{-1,1\}$ whenever $p\nmid d$ ([[lem-dirichlet-character-values]]).

[F12] For $x>0$ and real $r$, $(x^r)'=r x^{r-1}$; sums, products and quotients of differentiable real functions obey the usual derivative rules ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]]).

[F13] For any real Dirichlet character $\psi$, on $\operatorname{Re}s>1$ its Dirichlet series and derivative series converge absolutely; hence $L(\sigma,\psi)$ and $L'(\sigma,\psi)$ are real when $\sigma>1$ ([[def-dirichlet-l-function]], [[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

[F14] For $p=0,1$ the Hadamard elementary factors are $E_p(z)=(1-z)\exp(\sum_{k=1}^{p}z^k/k)$, so $E_p(w/\alpha)E_p(-w/\alpha)=1-w^2/\alpha^2$ ([[def-weierstrass-elementary-factor]]).

[F15] Every positive integer factors uniquely into a finite product of prime powers; in particular the product of distinct primes dividing $q$ divides $q$ ([[thm-fundamental-theorem-of-arithmetic]]).

[F16] Complex differentiation obeys the chain, product, and quotient rules; for $c>0$, $\frac{d}{ds}c^s=(\log c)c^s$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F17] Locally uniform limits of holomorphic functions are holomorphic and their derivatives converge locally uniformly ([[thm-weierstrass-convergence-holomorphic-functions]]).

[F18] A geometric series with ratio of modulus less than one converges ([[thm-geometric-series]]).

[F19] For $x\ge0$, the real exponential power series gives $1+x\le e^x$ ([[def-real-exponential-function-and-e]]).

[F20] The real-coefficient Dirichlet series and the Gamma integral have conjugation symmetry on their initial domains; analytic continuation preserves it by the identity theorem. Positive-base complex powers also satisfy this symmetry ([[def-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]], [[def-euler-gamma-function]], [[thm-gamma-meromorphic-continuation]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-identity-theorem-holomorphic-functions]]).

[F21] A nonzero holomorphic function on a connected domain has isolated zeros of finite order: Taylor factorization gives the finite order, and the identity theorem excludes a zero of infinite order ([[thm-zero-order-factorization-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Given:** The data and hypotheses in [F1]–[F21].

1.1 Write $\Theta_{\chi^*}(t)=\sum_{n\in\mathbb Z\setminus\{0\}}\chi^*(n)n^a e^{-\pi n^2t/d}$. For $t\ge1$ and $n\ne0$, $n^2t\ge(t+n^2)/2$, so [F11] gives $|\Theta_{\chi^*}(t)|\le C_d e^{-\pi t/(2d)}$, where $C_d=\sum_{n\ne0}|n|^a e^{-\pi n^2/(2d)}<\infty$: for positive $n$, the ratio of consecutive summands is $(1+1/n)^a\exp(-\pi(2n+1)/(2d))\to0$, and [F18] bounds the tail by a geometric series. By [F3], on $|s|\le R$ each of the two Mellin integrals is bounded by $C_d\int_1^\infty e^{-ct}t^{R/2+C}\,dt$ for fixed $c,C>0$. If $B_R=R/2+C$, then $t^{B_R}e^{-ct/2}\le\max\{1,(2B_R/(ce))^{B_R}\}$ for $t\ge1$, so this integral is at most $\exp(C_d'(R+1)\log(R+2))$. Therefore $\log M_{\Lambda}(R)\le C_d'(R+1)\log(R+2)$ and [F6] gives order at most one. [F1, F2, F3, F6, F11, F18, given, algebra]

2.1 The functional equation in [F2] makes the zero multiset of $g(w):=\Lambda(\tfrac12+w,\chi^*)$ invariant under $w\mapsto-w$. By [F20] and the reality in [F1], it is also invariant under complex conjugation. The Euler product in [F7] excludes zeros for $\operatorname{Re}s>1$, and the functional equation excludes zeros of the completed function for $\operatorname{Re}s<0$. Thus its zeros lie in $0\le\operatorname{Re}s\le1$. Every real zero of $L(s,\chi^*)$ in $(0,1)$ is also a zero of its completion, since the gamma factor is finite and nonzero there by [F8]. [F1, F2, F7, F8, F20, step 1.1]

3.1 The function $g$ is nonzero by [F7]. Enumerate all open discs with rational real and imaginary centre coordinates and positive rational radius in a fixed arithmetic order. By [F21], for every zero there is such a disc containing it and no other zero; assign to that zero the first such disc. Distinct zeros receive distinct discs. Ordering the assigned disc indices and adjoining the finite orders from [F21] lists the zero multiset without any choice axiom (a finite zero set is handled by a finite list). Apply [F4] to $g$ with this listing. Let $m$ be its order of vanishing at $0$. In each pair of nonzero zeros $\{\alpha,-\alpha\}$ use the unique representative with $\operatorname{Re}\alpha>0$, or with $\operatorname{Re}\alpha=0$ and $\operatorname{Im}\alpha>0$; this explicit rule uses no choice axiom. Since the order is at most one, [F14] makes the paired canonical factor $1-w^2/\alpha^2$. By [F5], for each $R$ the tail sum $\sum_{|\alpha|>2R}|w^2/\alpha^2|$ tends uniformly to zero on $|w|\le R$. Expanding finite products and applying [F19] shows their tails differ from $1$ by at most $\exp(\sum|w^2/\alpha^2|)-1$, so the paired products converge locally uniformly to an even entire function $P$. Thus Hadamard's factorization has the form $g(w)=w^m e^{A+Bw}P(w)$. By [F17], derivatives of finite paired products converge locally uniformly. On compact sets disjoint from the zero set, the products stay bounded away from zero; their logarithmic derivatives therefore converge locally uniformly to $\sum_\alpha 2w/(w^2-\alpha^2)$, since the tail terms are bounded by $8R/|\alpha|^2$. The functional equation gives $g(w)=\varepsilon(\chi^*)g(-w)$; at points outside the zero set this forces $e^{2Bw}=\varepsilon(\chi^*)(-1)^m$. Differentiating this identity using [F16] gives $B=0$. Logarithmic differentiation therefore yields $$\frac{g'(w)}{g(w)}=\frac m w+\sum_\alpha \frac{2w}{w^2-\alpha^2}=\sum_\rho\frac1{w-(\rho-\tfrac12)},$$ where $\rho$ ranges over zeros of $\Lambda(s,\chi^*)$ with multiplicity. The paired sum is absolutely convergent by [F5]. [F1, F2, F4, F5, F14, F16, F17, F19, F21, step 2.1, given, algebra]

4.1 Put $w=\sigma-\tfrac12>0$ in step 3.1. Differentiating the completion in [F2] by [F16] and taking real parts gives $$-\frac{L'}{L}(\sigma,\chi^*)=\frac12\log(d/\pi)+\frac12\operatorname{Re}\frac{\Gamma'}{\Gamma}\!\left(\frac{\sigma+a}{2}\right)-\sum_{\rho}\operatorname{Re}\frac1{\sigma-\rho}.$$ By [F13] the left side is real. The gamma logarithmic derivative is continuous on $[1/2,3/2]$ by [F8], so its modulus is bounded there by [F10]. Also $|\log(d/\pi)|\le C\log(d+2)$ by [F9]. Every zero term is positive because $\operatorname{Re}\rho\le1<\sigma$. Retaining the terms for the finite multiset $B$ and dropping the rest proves the claimed bound for $\chi^*$ with an absolute multiple of $\log(d+2)$. [F2, F7, F8, F9, F10, F13, F16, step 3.1, algebra]

5.1 For real $\sigma>1$, [F7] is an identity of positive differentiable real functions. Differentiating its finite product by [F12] gives $$\frac{L'}{L}(\sigma,\chi)-\frac{L'}{L}(\sigma,\chi^*)=\sum_{p\mid q,\,p\nmid d}\frac{\chi^*(p)p^{-\sigma}\log p}{1-\chi^*(p)p^{-\sigma}}.$$ By [F11], each summand has absolute value at most $\log p/(p^\sigma-1)\le\log p$. The product of the distinct primes dividing $q$ divides $q$ by unique factorization [F15], so [F9] gives $\sum_{p\mid q}\log p\le\log q$. Since $d\le q$ and $q\ge3$, the constants from step 4.1 and this correction are absorbed into an absolute multiple of $\log q$. The finite multiset $B$ is contained in the primitive zero multiset in step 4.1, so retaining its kernels proves the claimed inequality. [F7, F9, F11, F12, F15, step 4.1, algebra] ∎

