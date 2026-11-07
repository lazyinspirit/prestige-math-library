---
dependency_level: 1
id: lem-dirichlet-global-zero-powers-and-square-mass
kind: lemma
title: "Exact Dirichlet zero powers and uniform reciprocal-square mass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - def-principal-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-completed-dirichlet-l-function
  - thm-dirichlet-character-primitive-induction
  - lem-dirichlet-character-values
  - lem-nonprincipal-dirichlet-character-partial-sums
  - thm-dirichlet-l-euler-product
  - thm-induced-dirichlet-l-finite-euler-factors
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - def-euler-gamma-function
  - thm-gamma-functional-equation
  - thm-gamma-weierstrass-product
  - thm-hadamard-factorization-for-finite-order-entire-functions
  - thm-zero-exponent-is-bounded-by-entire-order
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - cor-derivative-operators-are-continuous-for-local-uniform-convergence
  - thm-identity-theorem-holomorphic-functions
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - thm-logarithm-derivative-and-integral
  - thm-gamma-meromorphic-continuation
  - lem-riemann-integral-linearity
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
sources:
  references:
    - title: "Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their Applications"
      url: "https://www.math.toronto.edu/zaman/files/thesis.pdf"
      locator: "Section 6.3.1, printed pp. 146–148, quadratic-character repulsion and its full zero sums. The Dirichlet all-character continuation, exact Hadamard powers and uniform mass are reconstructed locally below, rather than importing the cited Hecke analytic lemmas."
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Chapter 28 §28.7, printed pp. 216–227; motivation for zero powers in logarithm-free density and repulsion. No density theorem is a premise here."
---

## Statement

Let $\chi$ be any Dirichlet character modulo its actual integer modulus $m\ge1$, and let $e_\chi$ equal one if $\chi$ is principal and zero otherwise. Then $F_\chi(s):=(s-1)^{e_\chi}L(s,\chi)$ is a nonzero entire function of order at most one. Let $Z_\chi$ be its full zero multiset, including trivial zeros and zeros of finite induction Euler factors, with all multiplicities. Every $\rho\in Z_\chi$ has $\operatorname{Re}\rho\le1$. For every real $t$ and integer $h\ge1$,
$$\frac{(-1)^h}{h!}\left(\frac{L'}L\right)^{(h)}(2+it,\chi)=\sum_{\rho\in Z_\chi}(2+it-\rho)^{-h-1}-e_\chi(1+it)^{-h-1}.$$
The zero series is absolutely convergent; the corresponding series in a complex variable $s$ is locally uniformly convergent away from $Z_\chi$. There is an absolute constant $C>0$ such that
$$\sum_{\rho\in Z_\chi}|2+it-\rho|^{-2}\le C\log\bigl(m(|t|+3)\bigr).$$
For the character modulo one, $-2\in Z_\chi$. The zero multisets admit specified natural indexing without a choice premise; the sums also equal their absolutely convergent limits over expanding finite zero multisets.

## Facts & Assumptions

**Given:** An actual character, its modulus, and the real height and derivative order in the Statement. Zeros are always counted with multiplicity.

[F1] Characters are multiplicative, have unit-modulus values on units and zero on nonunits, and have unique primitive ancestors of conductor dividing the actual modulus. Nonprincipal partial sums have modulus at most the modulus ([[def-dirichlet-character-modulo-q]], [[def-principal-dirichlet-character]], [[def-primitive-dirichlet-character-and-conductor]], [[thm-dirichlet-character-primitive-induction]], [[lem-dirichlet-character-values]], [[lem-nonprincipal-dirichlet-character-partial-sums]]).

[F2] Dirichlet series and nonvanishing Euler products hold on real part greater than one. Induction adds exactly the finite factors $1-\psi(p)p^{-s}$ for $p\mid m$, $p\nmid d$ ([[def-dirichlet-l-function]], [[thm-dirichlet-l-euler-product]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

[F3] Primitive nonprincipal $L$-functions continue to entire functions; conductor one is zeta with its unique simple pole at one. The primitive completion and its functional equation, including conductor one, have the stated parity and conjugate-character normalizations ([[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]], [[def-completed-dirichlet-l-function]]).

[F4] On real part greater than zero, $\zeta(s)=s/(s-1)-s\int_1^\infty\{x\}x^{-s-1}dx$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F5] Gamma has Euler's integral on the right half-plane, recurrence, simple poles precisely at the nonpositive integers, and its entire reciprocal has the locally uniform Weierstrass product ([[def-euler-gamma-function]], [[thm-gamma-functional-equation]], [[thm-gamma-meromorphic-continuation]], [[thm-gamma-weierstrass-product]]).

[F6] A nonzero finite-order entire function has the Hadamard factorization with polynomial degree and genus at most its integer order bound; its reciprocal zero-power sum converges at every exponent strictly greater than its order ([[thm-hadamard-factorization-for-finite-order-entire-functions]], [[thm-zero-exponent-is-bounded-by-entire-order]]).

[F7] Nonzero holomorphic functions have isolated finite-order zeros with their local power factorizations. Locally uniform holomorphic convergence permits every fixed derivative order, and holomorphic identity extends an equality from an open set ([[thm-isolated-zeros-holomorphic-function]], [[thm-zero-order-factorization-holomorphic-function]], [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]], [[thm-identity-theorem-holomorphic-functions]]).

[F8] For every primitive conductor $d\ge1$ and every real $v$, the number of zeros with $1/2\le\operatorname{Re}\rho\le1$ and $|\operatorname{Im}\rho-v|\le1$ is at most $C\log(d(|v|+3))$, with an absolute constant and multiplicities ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]]).

[F9] Continuous real functions have compact Riemann integrals, the supremum bound, order and FTC; $\log x=\int_1^xdu/u$ ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-logarithm-derivative-and-integral]]). Complex integrals mean componentwise real integrals.

## Proof

1.1 For a primitive nonprincipal $\psi$ of conductor $d$, finite Abel summation and [F1] give $$L(s,\psi)=s\int_1^\infty A_\psi(x)x^{-s-1}dx,\quad |A_\psi(x)|\le d,\quad |L(s,\psi)|\le d|s|/\operatorname{Re}s\quad(\operatorname{Re}s>0).$$ Here Abel summation follows by FTC on each interval between consecutive integers and telescoping. Such integrands have finitely many jumps on any compact interval: split at those integers and isolate their values in intervals of arbitrarily small total length to justify Riemann integrability and invariance under those finite point changes. On a compact subset of real part at least $\epsilon>0$, the tail of every fixed differentiated integrand is bounded by $C d x^{-1-\epsilon}(1+\log^j x)$. Substitution $x=e^u$ and repeated finite integration by parts give an explicit vanishing exponential-polynomial tail. Finite holomorphic sums followed by these locally uniform tails identify the continuation by [F7]. In particular $|L(s,\psi)|\le2d|s|$ for real part at least $1/2$. [F1, F2, F7, F9, construct, algebra]

1.2 The product in [F5] gives an elementary global reciprocal-Gamma bound $$\max_{|z|\le R}|1/\Gamma(z)|\le\exp(C(R+1)\log(R+3)).$$ To prove it, take $R\ge1$ and split the product at $n=\lceil2R\rceil$. Initial factors have modulus at most $(1+R/n)e^{R/n}$, whose total logarithm is $O(R\log(R+3))$, including the prefactor $ze^{\gamma z}$. For the tail put $w=z/n$, so $|w|<1/2$. The real function $g(t)=\log|1+tw|-t\operatorname{Re}w$ on $[0,1]$ has derivative $\operatorname{Re}(-tw^2/(1+tw))$, of modulus at most $2t|w|^2$. FTC gives $|(1+w)e^{-w}|\le e^{|w|^2}$. Thus the tail logarithmic modulus is at most $R^2\sum_{n>2R}n^{-2}=O(R)$ by the decreasing integral comparison, itself obtained by bounding each term on its unit interval. The bound at a product zero follows directly from zero modulus. The locally uniform limit in [F5] proves the assertion, also on $R<1$ by enlargement. [F5, F9, construct, algebra]

2.1 For $\operatorname{Re}s\le1/2$, the primitive FE gives $$L(s,\psi)=\varepsilon_\psi(d/\pi)^{1/2-s}\frac{\Gamma((1-s+a)/2)}{\Gamma((s+a)/2)}L(1-s,\overline\psi).$$ The constant is nonzero: otherwise the completion would vanish identically, contrary to the nonzero series on real part greater than one. On $|s|\le R$, the numerator Gamma has real part at least $1/4$ and at most $C(R+1)$. Euler's integral bounds its modulus by Gamma of that real part. Splitting that positive integral at one bounds it by $4+\lceil C(R+1)\rceil!$, since on $[1,\infty)$ its power is bounded by the chosen integer power, whose integral is the factorial by recurrence. This is at most $\exp(C'(R+1)\log(R+3))$. Step 1.2 bounds reciprocal Gamma; step 1.1 bounds the reflected $L$. The conductor power and $\varepsilon_\psi$ have fixed-character logarithmic growth $O_\psi(R+1)$. Together with step 1.1 on the other half-plane this proves that primitive nonprincipal $L$ is a nonzero entire function of order at most one. Only this qualitative order assertion uses character-dependent constants. [F2, F3, F5, F9, step 1.1, step 1.2, algebra]

3.1 For conductor one set $F_1(s)=(s-1)\zeta(s)$, entire by [F3]. On real part at least $1/2$, [F4] gives $$F_1(s)=s-s(s-1)\int_1^\infty\{x\}x^{-s-1}dx=O((|s|+1)^2).$$ On real part at most $1/2$ and $|s|\ge2$, use the SAME public FE [F3] at conductor one. Its reflected zeta value is at real part at least $1/2$; [F4] bounds it by $C(|s|+1)$ since the reflected pole would require $s=0$, excluded here. The Gamma estimates of steps 1.2 and 2.1 give the same order-at-most-one bound. The remaining compact region is bounded by continuity of the entire $F_1$. Also [F4] gives $F_1(1)=1$, so the removed pole has residue one. This argument uses no separate conductor-greater-than-one order theorem at conductor one. [F3, F4, F5, F9, step 1.2, step 2.1, algebra]

4.1 For any actual $\chi$ modulo $m$, let $\psi$ be its primitive ancestor of conductor $d$. By [F2] and holomorphic identity, $$L(s,\chi)=L(s,\psi)\prod_{p\mid m,\ p\nmid d}(1-\psi(p)p^{-s})$$ holds meromorphically. The ancestor is principal exactly when $\chi$ is principal; a principal ancestor has conductor one. Each extra finite factor is entire with maximum logarithmic modulus $O_m(R+1)$ on $|s|\le R$. Steps 2.1 and 3.1 therefore show that $F_\chi=(s-1)^{e_\chi}L(s,\chi)$ is entire of order at most one. It is nonzero because $L(s,\chi)\to1$ as real $s\to\infty$, by its absolutely convergent series. In the principal case $F_\chi(1)=\prod_{p\mid m}(1-1/p)>0$, so pole removal introduces no zero. Euler nonvanishing excludes zeros of $F_\chi$ with real part greater than one. [F1, F2, F3, F7, step 2.1, step 3.1, algebra]

5.1 The full zero multiset admits a canonical specified natural indexing. Enumerate rational-centred positive rational-radius discs once. For each distinct zero assign the least disc containing it and no other zero; isolation in [F7] supplies such a disc. Different zeros receive different discs. Pair this natural index with its finite multiplicity indices, using a fixed injection $\mathbb N^2\to\mathbb N$. This defines a subset of $\mathbb N$ and its labelled zero family without choosing from countably many arbitrary sets. An infinite subset has its increasing enumeration by successive least unused indices; no finite accumulation follows from isolation and compactness. The zero-exponent assertion in [F6] supplies the finite reciprocal-square sum outside any neighbourhood of zero. Local finiteness takes care of the remaining finitely many zeros. [F6, F7, step 4.1, construct, algebra]

5.2 We now prove uniform square mass independently of the character-dependent order constants. First take primitive $\psi$. For $0<\operatorname{Re}\rho<1/2$, [F3] reflects a zero with its multiplicity to $1-\rho$ of $\overline\psi$, since both Gamma factors are finite and nonzero in this open strip. The latter nonvanishing follows also directly from [F5]: the entire reciprocal rules out Gamma zeros, and its stated poles are the only singularities. For real part zero away from zero, the same argument reflects to real part one, INCLUDED in [F8]. At zero for nonprincipal $\psi$, the FE shows a possible extra single zero from reciprocal Gamma (only for even parity), in addition to the multiplicity at one of the reflected $L$. For conductor one the reflected simple zeta pole cancels that reciprocal-Gamma zero, so zeta is nonzero at zero. The simple-pole assertion in [F5] justifies these multiplicities. Thus [F8] bounds ALL primitive zeros with $0\le\operatorname{Re}\rho\le1$ in every unit-height window by $C\log(d(|v|+3))$, including the boundary and with an absolute constant. No nonvanishing-on-the-one-line premise is needed. [F3, F5, F8, step 4.1, algebra]

6.1 Apply Hadamard [F6] to $F_\chi$. Its exponent polynomial has degree at most one, and its elementary factors have genus zero or one. For genus one the first logarithmic derivative of a factor at a nonzero zero $\rho$ is $1/(s-\rho)+1/\rho$; on a fixed compact set its tail is $O_K(|\rho|^{-2})$. For genus zero, order is less than one and [F6] gives the summable reciprocal first power, so its derivative tails also converge. A zero at zero contributes its explicit multiplicity term divided by $s$. Finite-product differentiation followed by these locally uniform tails and [F7] gives, for every integer $h\ge1$, $$\frac{(-1)^h}{h!}(F_\chi'/F_\chi)^{(h)}(s)=\sum_{\rho\in Z_\chi}(s-\rho)^{-h-1}.$$ More explicitly the first logarithmic derivatives converge because the finite products converge with their derivatives, their limit is nonzero off the zero set, and the stated tails are summable; every subsequent fixed derivative converges by [F7]. The polynomial's first derivative is constant and disappears after $h\ge1$. For large $|\rho|$, $|s-\rho|\ge|\rho|/2$ uniformly on a compact set, proving normal absolute convergence of the displayed series. Since $L'/L=F_\chi'/F_\chi-e_\chi/(s-1)$, this proves the exact identity in the Statement at $s=2+it$, with the NEGATIVE principal-pole term and no analytic remainder. [F6, F7, step 4.1, step 5.1, algebra]

6.2 For such a strip zero, $|2+it-\rho|^2\ge1+(t-\operatorname{Im}\rho)^2$. In each of the two bands $n\le|t-\operatorname{Im}\rho|<n+1$, unit-window counts from step 5.2 are at most $C[\log(d(|t|+3))+\log(n+1)]$, because $|v|+3\le(|t|+3)(n+3)$ after a harmless fixed-factor enlargement. Assign integer endpoints to half-open bands. It follows that the strip contribution to square mass is at most $$C\sum_{n\ge0}\frac{\log(d(|t|+3))+\log(n+1)}{1+n^2}\le C'\log(d(|t|+3)).$$ For explicit convergence, FTC gives $\log x\le2\sqrt x$ for $x\ge1$, so the logarithmic summand is bounded by $C(n+1)^{-3/2}$. Decreasing integral comparison bounds its sum and its vanishing tail, as well as those of $(1+n^2)^{-1}$. This proves the uniform strip estimate by positive scalar tails, not by an order constant or an unstated exchange theorem. [F8, F9, step 5.2, algebra]

7.1 For primitive zeros with negative real part, the reflected $L$ in [F3] has real part greater than one and is nonzero by [F2]. The numerator Gamma is finite and nonzero there. Consequently the only such zeros are the simple reciprocal-Gamma zeros $-a-2j$ that are strictly negative; for conductor one these are the negative even integers. Their square mass at $2+it$ is at most $\sum_{j\ge0}(2+j)^{-2}$, uniformly in $t$, using the same integral comparison as in step 6.2. At $s=-2$ for conductor one, reciprocal Gamma has a simple zero, the numerator Gamma is finite and nonzero, and the reflected $\zeta(3)$ is nonzero. Therefore $\zeta(-2)=0$, proving the fixed anchor in the Statement. The functional-equation scalar is nonzero, as noted in step 2.1. [F2, F3, F5, F9, step 2.1, step 6.2, algebra]

8.1 Finally each additional Euler factor in step 4.1 has simple zeros $$\rho_{p,k}=i\frac{\arg\psi(p)+2\pi k}{\log p},\qquad k\in\mathbb Z,$$ with harmless reindexing of the sign of $k$. They lie on real part zero and have spacing $2\pi/\log p$; a unit-height window therefore contains at most $C(1+\log p)$ occurrences. Applying the same band estimate as step 6.2 bounds their square mass by $C(1+\log p)$, independently of $t$. Finite sums over $p\mid m$ give at most $C\log(3m)$ since $\sum_{p\mid m}\log p\le\log m$ and the number of these primes is at most $\log m/\log2$ for $m>1$; for $m=1$ the sum is empty. Coincident primitive or Euler zeros have their ADDED multiplicities because their holomorphic factors multiply. The principal pole was removed with nonzero value at one in step 4.1. Combining steps 6.2 and 7.1 with $d\mid m$ proves the asserted absolute-constant square mass for every actual character. Step 6.1 proves all derivative identities and convergence; step 5.1 supplies their specified indexing. Every infinite passage used an explicit scalar absolute tail, so no choice, Lebesgue or conductor-uniform global-order premise has been introduced. [F1, F2, F7, F9, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, algebra] ∎

## Remarks

The full local proof is supplied for independent review. The character-dependent growth bound establishes only the qualitative Hadamard order. Uniform square mass is proved separately from the accepted unit-window Jensen bound, reflection, trivial progressions and the finite induction Euler factors. No density or exceptional-zero uniqueness theorem is used.
