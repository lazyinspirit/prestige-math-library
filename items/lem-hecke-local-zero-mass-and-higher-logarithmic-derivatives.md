---
id: lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
kind: lemma
title: Uniform local Hecke zero mass and higher logarithmic derivatives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-primitive-hecke-canonical-product-and-real-zero-sum
- lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
- lem-ray-character-euler-product-positivity-inequalities
- thm-finite-order-hecke-l-euler-product
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- thm-gamma-weierstrass-product
- cor-gamma-function-has-no-zeros
- cor-derivative-operators-are-continuous-for-local-uniform-convergence
- thm-weierstrass-convergence-holomorphic-functions
- thm-exponential-beats-every-polynomial
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-logarithm-derivative-and-integral
- def-complex-exponential
- def-real-exponential-function-and-e
- thm-natural-logarithm-laws
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice retain the literal arithmetic/ray/Hecke interfaces;
  no class-field realization is used.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §2 Lemmas2.2,2.5,2.11–2.13 and §5C Lemma5.4, full cached text read. Exact
      local proofs below use the already accepted canonical-product/real-zero and
      finite ray inputs; no source theorem is imported.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n\ge1$ and absolute discriminant $D$, let $Q,T\ge1$, and let $\chi$ be a primitive finite-order Hecke character with $N\mathfrak f_{\chi,0}\le Q$. Set $\delta_\chi=1$ for the trivial character and zero otherwise. For any $\Theta\ge100$ put
$$\mathcal L=\log D+\tfrac12\log Q+(\tfrac12n+1)\log(T+3)+\Theta n.$$
Write $\mathcal Z_\chi$ for the zeros, with multiplicities, of the full pole-cleared completion $\Xi_\chi$, and $F=L'/L$. For $|t|\le T$, $0\le r\le1/16$ and $0<u\le3/4$,
$$\#\{\rho\in\mathcal Z_\chi:|1+r+it-\rho|\le u\}\le2u\mathcal L+4.$$
For $0<r\le1/16$, $z=1+r+it$ and integer $k\ge1$,
$$\left|\frac{(-1)^kF^{(k)}(z)}{k!}+\frac{\delta_\chi}{(z-1)^{k+1}}-\sum_{\substack{\rho\in\mathcal Z_\chi\\|1+it-\rho|<1/2}}\frac1{(z-\rho)^{k+1}}\right|\le32\,2^k\mathcal L.$$
Define $\Lambda_K(\mathfrak p^m)=\log N\mathfrak p$ for $m\ge1$ and zero on other integral ideals. With $E_k(v)=v^k/k!$, one also has the absolutely convergent identity
$$\frac{(-1)^{k+1}r^{k+1}F^{(k)}(z)}{k!}=r\sum_{\mathfrak a}\frac{\Lambda_K(\mathfrak a)\chi(\mathfrak a)}{(N\mathfrak a)^{1+r+it}}E_k(r\log N\mathfrak a),$$
and the prime bound
$$\sum_{N\mathfrak p\le w}\frac{\log N\mathfrak p}{N\mathfrak p}\le3(\log w+\mathcal L)\qquad(w\ge e).$$
All constants are uniform; no choice-free scope, zero-free region or residue lower bound is asserted.

## Facts & Assumptions

**Given:** The field, primitive character, uniform conductor/height bounds and normalization in the Statement.

[F1] The full pole-cleared Hecke completion has its genus-one canonical product, absolutely locally uniform logarithmic derivative, closed-strip zero multiset and exact real zero sum, with no residual real exponential constant. [[lem-primitive-hecke-canonical-product-and-real-zero-sum]]

[F2] For $1<\sigma\le2$, the real logarithmic derivative satisfies the exact field-uniform zero-sum upper inequality with error $\frac12\log(DN\mathfrak f_{\chi,0}(|t|+3)^n)+3n$. Euler logarithmic derivatives have their absolutely locally uniform prime-power series, and the trivial primitive function is $\zeta_K$. [[lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality]] [[lem-ray-character-euler-product-positivity-inequalities]] [[thm-finite-order-hecke-l-euler-product]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F3] Reciprocal gamma has its locally uniform Weierstrass product and gamma has no zeros. Locally uniform holomorphic convergence allows differentiation; the derivative operators are continuous on the corresponding holomorphic function space. [[thm-gamma-weierstrass-product]] [[cor-gamma-function-has-no-zeros]] [[thm-weierstrass-convergence-holomorphic-functions]] [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]]

[F4] Prime-ideal powers are uniquely indexed by finite ideal factorization and norm is multiplicative. Exponential decay beats every polynomial, so fixed logarithmic powers have absolutely summable ideal-series majorants inside a convergence half-plane. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[thm-exponential-beats-every-polynomial]]

[F5] Continuous compact Riemann integrals have linearity, order and FTC, and logarithms have their product and integral laws. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[thm-logarithm-derivative-and-integral]] The real exponential is its factorial series, giving $e<3$ by a finite geometric tail bound. [[thm-natural-logarithm-laws]] [[def-complex-exponential]] [[def-real-exponential-function-and-e]]

[A1] AC and CC retain the actual Hecke/canonical-product branch. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Write $D_\chi(\sigma,t)=-\operatorname{Re}(L'/L)(\sigma+it,\chi)$ and let $D_0$ denote the full trivial primitive function. The Euler series [F2] gives $D_\chi\ge-D_0(\sigma,0)$ term by term, because each real character-phase value is at least minus one. The trivial zero-sum upper inequality gives $D_0(1+v,0)\le v^{-1}+\tfrac12\log D+4n$ for $0<v\le1$, using $\log3<2$ and discarding only positive zero terms. Substituting this lower bound for $D_\chi$ into its upper zero-sum inequality yields $$\sum_{\rho\in\mathcal Z_\chi}\operatorname{Re}\frac1{\sigma+it-\rho}\le\mathcal L+\frac{\delta_\chi+1}{\sigma-1}\qquad(1<\sigma\le2,\ |t|\le T),$$ since the two discriminant half-terms add to $\log D$, and $\Theta\ge100$ absorbs the explicit $n$ errors. At $2+it$ the same calculation, keeping its bounded pole terms, gives a bound at most $\mathcal L$. Since $2-\operatorname{Re}\rho\ge1$, this also gives $\sum_\rho|2+it-\rho|^{-2}\le\mathcal L$. Every sum is the normally convergent accepted real zero sum, with multiplicities. [A1, F1, F2, F5, given, algebra]

2.1 For a zero in $|1+r+it-\rho|\le u$, write $1+r+it-\rho=a+iv$; then $a\ge r\ge0$ and $a^2+v^2\le u^2$. At the evaluation point $1+r+u+it$, its real reciprocal kernel is $(a+u)/[(a+u)^2+v^2]\ge1/(2u)$. The evaluation real part is at most $1+1/16+3/4<2$, so step 1.1 applies. Multiplying by $2u$ gives the count at most $2u\mathcal L+2u(\delta_\chi+1)/(r+u)\le2u\mathcal L+4$. Finite-submultiset bounds imply finiteness and the full occurrence count, without selecting an infinite set of zeros. [F1, step 1.1, algebra]

2.2 Differentiating the genus-one logarithmic derivative $k\ge1$ times kills its unspecified exponential constant and yields the exact completed zero-power sum. The full completion identity gives $$\frac{(-1)^kF^{(k)}(z)}{k!}+\frac{\delta_\chi}{(z-1)^{k+1}}=\sum_\rho(z-\rho)^{-k-1}+G_k(z),$$ where $G_k$ consists only of the $-\delta_\chi/z$ term and the negative logarithmic derivative of the standard gamma product, differentiated and normalized. The Weierstrass gamma product [F3], differentiated with its square-summable tails on compact right half-planes, gives $\psi^{(k)}(w)=(-1)^{k+1}k!\sum_{j\ge0}(j+w)^{-k-1}$. For $\operatorname{Re}z\ge1$, a real gamma factor has the normalized derivative bound $2^{-k-1}(2^{k+1}+2^k/k)\le3/2$, and a complex gamma factor at most $1+1/k\le2$, by decreasing integral comparison. Since $r_1+2r_2=n$, the gamma total is at most $3n/2$; adding the pole-clearing $z$ term gives $|G_k|\le3n$. All derivative series converge normally; their tails are dominated by the accepted square sum and a fixed right-half-plane power series. No field-dependent entire-order constant has entered. [F1, F3, F5, step 1.1, algebra]

3.1 If $|1+it-\rho|\ge1/2$, then $|z-\rho|\ge|1+it-\rho|\ge1/2$, since every zero has real part at most one and $r>0$. Also $|2+it-\rho|\le|z-\rho|+1-r\le3|z-\rho|$. Step 1.1 therefore bounds the omitted square mass by $9\mathcal L$, and its $(k+1)$st absolute power sum by $9\,2^{k-1}\mathcal L$. Combine this with step 2.2 and $3n\le3\mathcal L$; it is less than $32\,2^k\mathcal L$. The remaining local zero sum is finite by step 2.1 with $u=1/2$ and centre $1+it$, and includes every boundary occurrence with its actual multiplicity. [F1, step 1.1, step 2.1, step 2.2, algebra]

4.1 The Euler logarithmic series is absolutely locally uniformly convergent above one. For any fixed derivative order, its differentiated absolute terms are dominated by an ideal series at a slightly smaller exponent: $\log^{k+1}x\le C_{k,\varepsilon}x^\varepsilon$ follows from [F4]. Prime powers have unique factorization, so each is counted once and $\Lambda_K(\mathfrak p^m)=\log N\mathfrak p$. Differentiate $k$ times and multiply by $(-1)^{k+1}r^{k+1}/k!$; this gives exactly the asserted $rE_k(r\log N\mathfrak a)$ identity, with absolute convergence. Lastly, for $w\ge e$ choose $v=1/\log w\le1$. Since $(N\mathfrak p)^v\le e$ for $N\mathfrak p\le w$, the positive Euler series gives $$\sum_{N\mathfrak p\le w}\frac{\log N\mathfrak p}{N\mathfrak p}\le eD_0(1+v,0)\le e(\log w+\tfrac12\log D+4n)\le3(\log w+\mathcal L).$$ Here $e<3$ follows from its factorial series, and $\tfrac12\log D+4n\le\mathcal L$. Every limit is a stated absolute ideal-series or elementary scalar tail. [F2, F3, F4, F5, step 1.1, algebra] ∎
