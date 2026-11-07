---
dependency_level: 1
id: lem-choice-free-dirichlet-classical-strip-and-reciprocal-bound
kind: lemma
title: Choice-free classical zero-free strip and exceptional reciprocal bound for Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-dirichlet-character-modulo-q
- def-dirichlet-l-function
- def-principal-dirichlet-character
- lem-dirichlet-character-values
- lem-nonprincipal-dirichlet-character-partial-sums
- thm-dirichlet-series-summatory-integral
- thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane
- thm-dirichlet-l-euler-product
- thm-euler-product-for-riemann-zeta
- thm-principal-dirichlet-l-factorization
- thm-riemann-zeta-continuation-to-the-right-half-plane
- lem-log-derivative-bound-from-disc-zero-factorization
- lem-dirichlet-three-four-one-logarithmic-derivative-inequality
- lem-real-dirichlet-l-nonzero-at-one
- thm-fundamental-theorem-of-arithmetic
- def-divisor-counting-function
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-real-power-laws
- def-complex-logarithms-principal-logarithm-and-complex-powers
- thm-algebra-of-complex-derivatives
- thm-weierstrass-convergence-holomorphic-functions
- thm-zero-order-factorization-holomorphic-function
- thm-identity-theorem-holomorphic-functions
- thm-local-maximum-modulus-principle
- thm-holomorphic-logarithms-homologically-simply-connected-domains
- prop-star-shaped-plane-domains-are-homologically-simply-connected
- thm-fundamental-theorem-for-complex-line-integrals
- cor-holomorphic-functions-are-real-analytic-and-smooth
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-dirichlet-character-primitive-induction
- def-induced-dirichlet-character
- thm-induced-dirichlet-l-finite-euler-factors
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Ian Petrow, Introduction to Analytic Number Theory
    url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
    locator: Printed/PDF71–73, quantitative zeta argument and complete Theorem9.3 proof. The finite-disc and normalized reciprocal extension are reconstructed locally, not quoted as an exact theorem.
  - title: Montgomery and Vaughan, Multiplicative Number Theory III, Chapter24
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Lemma24.17, printed p69, via the existing locally proved fixed-radius disc lemma; no external log-derivative theorem imported.
---

## Statement

There are absolute constants $b,c,C>0$ and an integer $K\ge1$, with $c<b/1000$, having the following properties. Let $q\ge1$ be an integer, let $\chi$ be a Dirichlet character modulo its actual modulus $q$, and put $\ell_q=\log(3q)$ and $\lambda_q(t)=\log(q(|t|+3))$.

A real nonprincipal $\chi$ has at most one zero occurrence in the real interval $(1-b/\ell_q,1)$, counted with multiplicity. Such a zero, when present, is simple; denote it by $\beta_\chi$. For a nonreal or principal character no exceptional zero is designated. The function $L(s,\chi)$ has no zeros in the closed region
$$\mathcal R_q=\left\{s=\sigma+it:\ \sigma\ge1-\frac c{\lambda_q(t)}\right\}$$
except possibly $\beta_\chi$. If no $\beta_\chi$ exists, throughout this region
$$|1/L(s,\chi)|\le C\lambda_q(t)^K.$$
If $\beta_\chi$ exists, then for $s\in\mathcal R_q\setminus\{\beta_\chi\}$,
$$|1/L(s,\chi)|\le C\lambda_q(t)^K\left(1+\frac1{\lambda_q(t)|s-\beta_\chi|}\right).$$
Equivalently, at points of $\mathcal R_q$ the removable extension satisfies
$$\left|\frac{s-\beta_\chi}{L(s,\chi)}\right|\le C\lambda_q(t)^K\left(|s-\beta_\chi|+\lambda_q(t)^{-1}\right).$$
The last bound includes $s=\beta_\chi$ only when that point lies in $\mathcal R_q$; no quantitative bound outside this narrower region is asserted. For principal $\chi$, the reciprocal at its simple pole $s=1$ means its holomorphic extension with value zero. These statements include $q=1$, all heights, and primitive or imprimitive characters. No choice axiom is assumed and no pole-uniform bound for $L'/L$ is asserted.

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ modulo the positive integer $q$. All constants below are absolute unless a fixed auxiliary constant is displayed as a subscript. No AC, CC or DC assumption is made.

[F1] Characters are periodic, multiplicative, zero on nonunits and of modulus one on units; the principal character is $1$ on units. The Dirichlet series defines $L(s,\chi)$ for $\operatorname{Re}s>1$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[def-principal-dirichlet-character]], [[def-dirichlet-l-function]]).

[F2] For nonprincipal $\chi$, $A_\chi(u)=\sum_{n\le u}\chi(n)$ satisfies $|A_\chi(u)|\le q$. Finite Abel summation and its improper-integral limit hold, and $L(s,\chi)$ is holomorphic for $\operatorname{Re}s>0$ ([[lem-nonprincipal-dirichlet-character-partial-sums]], [[thm-dirichlet-series-summatory-integral]], [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]]).

[F3] Dirichlet and zeta Euler products are absolutely convergent and nonzero to the right of 1. A principal character satisfies $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})$, with simple pole1 of residue $\varphi(q)/q$ ([[thm-dirichlet-l-euler-product]], [[thm-euler-product-for-riemann-zeta]], [[thm-principal-dirichlet-l-factorization]]).

[F4] For $\operatorname{Re}s>0$, the fractional-part formula $\zeta(s)=s/(s-1)-s\int_1^\infty\{u\}u^{-s-1}du$ gives meromorphic continuation with sole pole1 and residue1; its tail integral is holomorphic ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F5] For a holomorphic $f$ near a closed disc of radius $R$ centered at $z_0$, with $f(z_0)\ne0$ and boundary maximum $M$, the logarithmic derivative after subtracting zeros in the $R/2$-disc has absolute remainder at most $C R^{-1}\log(M/|f(z_0)|)$ on the $R/3$-disc ([[lem-log-derivative-bound-from-disc-zero-factorization]]).

[F6] For every character modulo $q$, $\sigma>1$ and real $t$, $0\le-3\zeta'/\zeta(\sigma)-4\operatorname{Re}L'/L(\sigma+it,\chi)-\operatorname{Re}L'/L(\sigma+2it,\chi^2)$, where $\chi^2$ is taken at the same modulus $q$ ([[lem-dirichlet-three-four-one-logarithmic-derivative-inequality]]).

[F7] Every real nonprincipal Dirichlet character satisfies $L(1,\chi)\ne0$ ([[lem-real-dirichlet-l-nonzero-at-one]]).

[F8] Prime factorization is unique, positive divisors of $q$ lie in $[1,q]$, logarithms obey their product and derivative/integral laws, and positive powers have their usual algebra. For $u>0$, $u^{-s}=\exp(-s\log u)$; complex derivatives obey the algebra rules, and locally uniform holomorphic limits have locally uniformly convergent derivatives ([[thm-fundamental-theorem-of-arithmetic]], [[def-divisor-counting-function]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-real-power-laws]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-algebra-of-complex-derivatives]], [[thm-weierstrass-convergence-holomorphic-functions]]).

[F9] Zeros of a nonzero holomorphic function have their finite-order local factorization; identities extend by the identity theorem. The maximum-modulus principle holds, and holomorphic functions are smooth ([[thm-zero-order-factorization-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]], [[thm-local-maximum-modulus-principle]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F10] An open disc is homologically simply connected and a nowhere-zero holomorphic function on it has a holomorphic logarithm. The finite complex-line fundamental theorem gives endpoint differences of primitives, and $|\exp z|=e^{\operatorname{Re}z}$ ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[thm-fundamental-theorem-for-complex-line-integrals]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F11] Every character has its unique primitive ancestor. Induction agrees on units, and on $\operatorname{Re}s>1$ gives $L(s,\chi)=L(s,\chi^*)\prod_{p\mid q,\,p\nmid d}(1-\chi^*(p)p^{-s})$, where $d$ is the ancestor conductor ([[thm-dirichlet-character-primitive-induction]], [[def-induced-dirichlet-character]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

## Proof

**Proof technique:** finite-disc zero kernels, Euler positivity, explicit low-height pole removal and normalized empty-zero discs.

1.1 For nonprincipal $\chi$, [F2] gives, for every integer $N\ge1$ and $\sigma>0$, $$L(s,\chi)=\sum_{n\le N}\chi(n)n^{-s}-A_\chi(N)N^{-s}+s\int_N^\infty A_\chi(u)u^{-s-1}du.$$ Its tail has modulus at most $q(1+|s|/\sigma)N^{-\sigma}$, and the full integral from 1 gives $|L(s,\chi)|\le q|s|/\sigma$. All these improper limits are locally uniform: on $\sigma\ge\epsilon>0$, $|s|\le B$, their tails are at most $q(1+B/\epsilon)N^{-\epsilon}$. This is the actual Abel continuation, not an absolutely-convergent-series claim inside the critical strip. [F1, F2, F8, given, algebra]

1.2 Put $I(s)=\int_1^\infty\{u\}u^{-s-1}du$ and $h(s)=(s-1)\zeta(s)=s-s(s-1)I(s)$. These are holomorphic for $\operatorname{Re}s>0$, with $h(1)=1$, by [F4]. Splitting at an integer $N$ and integrating the step function $\lfloor u\rfloor$ on each unit interval gives $$\zeta(s)=\sum_{n\le N}n^{-s}+\frac{N^{1-s}}{s-1}-s\int_N^\infty\{u\}u^{-s-1}du.$$ The identity is meromorphic, with its displayed pole term retained. For real $1<\sigma\le3/2$, $0\le I(\sigma)\le1/\sigma$ and $|I'(\sigma)|\le1/\sigma^2$, so $h(\sigma)\ge1$ and $|h'(\sigma)|\le4$; hence $-\zeta'/\zeta(\sigma)=1/(\sigma-1)+O(1)$. To justify the differentiation without a measure-theoretic interchange, first split $[1,M]$ at its finitely many integer discontinuities and use the continuous interior extension on each unit subinterval; changing finitely many endpoint values does not alter a Riemann integral. Each resulting continuous integrand and its parameter derivatives have uniformly convergent Riemann sums on compact $s$-sets, and the finite sum of those integrals is holomorphic. The integral and derivative tails are bounded explicitly by $M^{-\epsilon}/\epsilon$ and $M^{-\epsilon}(\log M/\epsilon+\epsilon^{-2})$ on $\sigma\ge\epsilon>0$. They tend uniformly to zero, and [F8] passes the derivative to the limit. The latter tail formula follows by differentiating the explicit primitive $-u^{-\epsilon}(\log u/\epsilon+\epsilon^{-2})$, applying the finite fundamental theorem and letting the upper endpoint tend to infinity; $u^{-\epsilon}\log u\to0$. [F4, F8, F9, F10, given, algebra]

1.3 On $\operatorname{Re}s\ge1+\epsilon$, the Euler logarithm $\sum_{p,m}\chi(p)^m/(mp^{ms})$ and its derivative converge locally uniformly: the latter is dominated by a constant times $\sum_{n\ge2}(\log n)n^{-1-\epsilon}$, whose integral tail converges. Thus [F3] and [F8] give $-L'/L(s,\chi)=\sum_{p,m}\chi(p)^m(\log p)p^{-ms}$. This uses the explicit Euler series, not a chosen logarithm for a family of functions. Also $$1/|L(\sigma+it,\chi)|\le\prod_p(1+p^{-\sigma})\le\zeta(\sigma)\le1+(\sigma-1)^{-1}\quad(\sigma>1).$$ On units $\chi^2=\chi_0$ exactly when all values of $\chi$ are $\pm1$, equivalently $\chi$ is real. [F1, F3, F8, given, algebra]

2.1 Fix real $t$, put $z_0=5/4+it$ and apply [F5] with radius $3/4$. For nonprincipal $\chi$, step 1.1 bounds the maximum by $Cq(|t|+3)$ and step 1.3 gives $|L(z_0,\chi)|\ge1/5$. For principal $\chi_0$, apply [F5] to $f(s)=(s-1)L(s,\chi_0)$ instead. The formula in step 1.2 bounds $|(s-1)\zeta(s)|$ by $C(|t|+3)^2$ on this disc, while its finite Euler product has modulus at most $2^{\omega(q)}\le\tau(q)\le q$ by [F8]. At the center $|f(z_0)|\ge1/20$ by step 1.3. Therefore, for $1<\sigma\le3/2$, with zeros counted with multiplicity, $$\frac{L'}L(\sigma+it,\chi)=\sum_{|\rho-z_0|\le3/8}\frac1{\sigma+it-\rho}+O(\log(q(|t|+3)))$$ for nonprincipal $\chi$, and the principal formula has the additional term $-1/(\sigma-1+it)$. The finite sums in the principal case are zeros of $f$; $f(1)=\varphi(q)/q\ne0$. Every selected zero has real part at most1, by [F3]. [F3, F5, F8, F9, step 1.1, step 1.2, step 1.3, algebra]

2.2 The function $h$ from step 1.2 is nonzero on $|s-1|\le1/10$: there $|h(s)-1|\le|s-1|(1+|s|/\operatorname{Re}s)<1/2$. Thus zeta has no zero there and its pole at 1 is not treated as a zero. [F4, step 1.2, algebra]

2.3 Fix temporarily $0<\eta\le10^{-4}$, put $\lambda=\log(q(|t|+3))$, $s_0=1+\eta/\lambda+it$ and $N=\lceil q(|t|+3)\rceil$. On $|s-s_0|\le72\eta/\lambda$ one has $\sigma\ge1-71\eta/\lambda>1/2$, $\log N\le2\lambda$, and $q(1+|s|/\sigma)\le CN$. Step 1.1 therefore bounds the nonprincipal tail by $CN^{1-\sigma}\le C$. The initial sum is at most $1+\log N\max(1,N^{1-\sigma})\le C\lambda$. Consequently $|L(s,\chi)|\le C\lambda$ throughout this disc for nonprincipal $\chi$, uniformly in all its parameters. No fixed-conductor growth constant is used as a uniform bound. [F1, F2, F8, step 1.1, algebra]

2.4 With the same parameters, set $H(s)=[(s-1)/(s_0-1)]\zeta(s)$. On the closed $12\eta/\lambda$-disc the ratio $|s-1|/|s_0-1|$ is at most13 and $|s_0-1|\ge\eta/\lambda$. The finite formula in step 1.2 bounds $H$ by $C_\eta\lambda$: its initial segment costs $C\lambda$, its pole term costs $C/|s_0-1|$, and its normalized tail costs $C$. If $P_q(s)=\prod_{p\mid q}(1-p^{-s})$, then $$|P_q(s)|\le\prod_{p\mid q}(1+p^{-\sigma})\le C\prod_{p\mid q}(1+1/p)\le C(1+\log q).$$ Indeed the real logarithmic derivative of each positive factor $1+p^{-u}$ has magnitude at most $\log p$; integrating from $\sigma$ to1 costs at most $|1-\sigma|\sum_{p\mid q}\log p\le12\eta$. The product at 1 expands as $\sum_{d\mid\operatorname{rad}(q)}1/d\le\sum_{d\le q}1/d\le1+\log q$. For $\sigma\ge1$ the same comparison is immediate. Thus the holomorphic normalized principal function $[(s-1)/(s_0-1)]L(s,\chi_0)$ has maximum at most $C_\eta\lambda^2$ on this disc, including a disc containing1. [F3, F4, F8, step 1.2, step 1.3, algebra]

3.1 The real parts of all zero kernels in step 2.1 are positive at $\sigma>1$. In particular, retaining a nonprincipal zero $\beta+i\gamma$ with $\beta$ sufficiently close to1 gives $$-\operatorname{Re}\frac{L'}L(\sigma+i\gamma,\chi)\le-\frac1{\sigma-\beta}+C\log(q(|\gamma|+3)).$$ Dropping all kernels gives the same upper bound without its negative term. For a principal character the upper bound is instead $\operatorname{Re}(\sigma-1+it)^{-1}+C\log(q(|t|+3))$. These pole terms are not bounded uniformly as $s\to1$. [F3, step 2.1, algebra]

3.2 Let $\chi$ be real and nonprincipal and put $L_0=\log(3q)$. Euler differentiation from step 1.3 gives $0\le-\zeta'/\zeta(\sigma)-L'/L(\sigma,\chi)$, since its prime-power coefficients are $(\log p)(1+\chi(p)^m)\ge0$. Suppose two zero occurrences satisfy $\beta_j>1-b_0/L_0$ and $|\gamma_j|\le d/L_0$. They belong to the selected disc in step 2.1 once the constants below are small. At $\sigma=1+a_0/L_0$, each real kernel is at least $a_0L_0/((a_0+b_0)^2+d^2)$. Steps 1.2 and2.1 imply $$\frac{2a_0}{(a_0+b_0)^2+d^2}\le\frac1{a_0}+C_0.$$ Choose $a_0\le\min(10^{-2},[100(C_0+1)]^{-1})$, $d=a_0/10$ and $b_0\le a_0/100$. The left side is at least $1.94/a_0$ and the right side at most $1.01/a_0$, a contradiction. Conjugation symmetry of the real series extends by [F9], so a nonreal zero would occur with its distinct conjugate in this box. Multiplicities are counted, so the possible remaining occurrence is real and simple; [F7] excludes the endpoint1. [F1, F3, F7, F8, F9, step 1.2, step 1.3, step 2.1, algebra]

4.1 Put $L=\log(q(|\gamma|+3))$ and suppose $\beta+i\gamma$ is a nonprincipal zero near 1. If $\chi^2$ is nonprincipal, [F6] and step 3.1 give $4/(\sigma-\beta)\le3/(\sigma-1)+C_1L$. If $\chi$ is real and $|\gamma|\ge d/\log(3q)$, then $|\gamma|L\ge d$ and the retained principal term for $\chi^2$ is at most $(\sigma-1)/(4\gamma^2)$. Thus setting $\sigma=1+a_1/L$ and assuming $\beta>1-b_1/L$ yields $$\frac4{a_1+b_1}\le\frac3{a_1}+C_1+\frac{a_1}{4d^2};$$ in the nonprincipal-square case omit the last term. Choose $a_1\le\min(d/100,[100(C_1+1)]^{-1})$ and $b_1\le a_1/100$. After multiplication by $a_1$ the left side is at least $4/1.01$ and the right at most $3+.01+1/40000$, impossible. A nonreal character has nonprincipal square by step 1.3, so it has no exceptional case at any height, including zero. [F6, F8, step 1.2, step 1.3, step 3.1, step 3.2, algebra]

5.1 For zeta use [F6] with the character modulo 1. Step 2.2 excludes zeros with $\beta>1-b_z/L$, $|\gamma|\le d_z/L$, where $L=\log(|\gamma|+3)$, $d_z=10^{-2}$ and initially $0<b_z\le10^{-2}$. At the other heights step 2.1 gives the target kernel plus the pole $\operatorname{Re}(\sigma-1+i\gamma)^{-1}$. The other zeta term has pole at height $2\gamma$. With $\sigma=1+a_z/L$, their total contribution to the 3–4–1 inequality is at most $(4+1/4)a_zL/d_z^2$, so a hypothetical zero with $\beta>1-b_z/L$ gives $$\frac4{a_z+b_z}\le\frac3{a_z}+C_z+(4+1/4)\frac{a_z}{d_z^2}.$$ Choose $a_z\le\min(d_z/100,[100(C_z+1)]^{-1})$ and reduce $b_z\le a_z/100$. This contradicts the inequality, exactly as the numerical comparison in step 4.1. Zeta therefore has its choice-free classical strip, with no exception and its pole retained as a pole. [F3, F4, F6, F8, step 1.2, step 2.1, step 2.2, step 3.1, algebra]

6.1 Fix $b>0$ smaller than $b_0,b_1,b_z$ and small enough that every region used below lies in $\operatorname{Re}s>1/2$. Steps 3.2 and 4.1 show that every nonprincipal zero with $\beta>1-b/\log(q(|\gamma|+3))$ must be the real simple zero $\beta_\chi\in(1-b/\log(3q),1)$ of a real character. Indeed in the remaining low-height case $|\gamma|<d/\log(3q)$ the bound $\log(q(|\gamma|+3))\ge\log(3q)$ puts it in the box of step 3.2. For principal characters [F3] shows that finite Euler factors have zeros only on $\operatorname{Re}s=0$; step 5.1 excludes all other zeros in their narrower actual-modulus strip. A possible $\beta_\chi$ is unique, so naming it is unique specification, not a selection from an arbitrary family. [F1, F3, F8, F9, step 3.2, step 4.1, step 5.1, algebra]

7.1 Now fix $0<\eta\le\min(b/10000,\log3/10000,10^{-4})$, take $c=\eta$, and put $\lambda=\log(q(|t|+3))$, $s_0=1+\eta/\lambda+it$ and $R=12\eta/\lambda$. For any point on the closed $2R$-disc, its local logarithm is at most $2\lambda$, because its height changes by less than1. The left edge is $1-23\eta/\lambda>1-b/(2\lambda)$; hence this larger disc lies strictly in the wider region of step 6.1. Every nonprincipal zero in it is the possible $\beta_\chi$, and principal pole removal leaves no zero. The discs and all their growth neighborhoods lie in $\operatorname{Re}s>1/2$. [F8, step 2.3, step 2.4, step 6.1, construct, algebra]

8.1 For nonprincipal $\chi$ without $\beta_\chi$ set $G=L$. If $\beta_\chi$ exists set $G(s)=(s_0-\beta_\chi)L(s,\chi)/(s-\beta_\chi)$, extending holomorphically at that zero by [F9]. Then $G(s_0)=L(s_0,\chi)$ and $G$ is nowhere zero on the closed $2R$-disc by steps 6.1 and 7.1. Its maximum on the $R$-disc is $O(\lambda)$: if $|s_0-\beta_\chi|\ge2R$, the quotient factor is at most 2 there. Otherwise the circle $|s-\beta_\chi|=4R$ lies within $6R=72\eta/\lambda$ of $s_0$, so step 2.3 bounds $|L(s,\chi)/(s-\beta_\chi)|$ on it by $C\lambda/(4R)$. The maximum-modulus principle [F9] gives the same bound inside, and multiplication by $|s_0-\beta_\chi|<2R$ proves the assertion on the $R$-disc. For principal $\chi_0$ instead set $G(s)=[(s-1)/(s_0-1)]L(s,\chi_0)$; step 2.4 gives maximum $O_\eta(\lambda^2)$, and step 7.1 gives nonvanishing. [F3, F8, F9, step 2.3, step 2.4, step 6.1, step 7.1, construct, algebra]

9.1 Euler's lower bound in step 1.3 gives $1/|G(s_0)|=1/|L(s_0,\chi)|\le1+\lambda/\eta$. Step 8.1 therefore bounds $\log(\max_R|G|/|G(s_0)|)$ by $C_\eta\log(2\lambda)$. Apply [F5] with its empty zero sum. Throughout the inner $R/3$-disc, $|G'/G|\le C_\eta\lambda\log(2\lambda)$. The segment from $s_0$ to $s=\sigma+it$ with $1-c/\lambda\le\sigma\le1+\eta/\lambda$ has length at most $2\eta/\lambda<R/3$. Choose one holomorphic logarithm $H$ on this disc using [F10]. Differentiating $\exp H=G$ gives $H'=G'/G$; the finite complex-line FTC identifies its endpoint change with that segment integral. Parametrize this one straight segment: the triangle inequality for every finite parametric Riemann sum bounds the integral by segment length times $\sup|H\prime|$, and passage to its Riemann limit preserves this bound. Thus $\operatorname{Re}H=\log|G|$ bounds the real endpoint change by $C_\eta\log(2\lambda)$. Hence $|1/G(s)|\le C_\eta\lambda^{K_\eta}$ for some fixed exponent. Since $\eta$ was fixed from absolute constants, increase an absolute integer $K$ and an absolute $C$ to obtain $|1/G(s)|\le C\lambda^K$. Only one logarithm for a fixed disc was used, not a family choice function. [F3, F5, F8, F10, step 1.3, step 7.1, step 8.1, algebra]

10.1 Without an exception, the bound in step 9.1 is the desired nonprincipal reciprocal bound. With one, $$|1/L(s,\chi)|=\frac{|s_0-\beta_\chi|}{|s-\beta_\chi|}|1/G(s)|\le C\lambda^K\left(1+\frac{2\eta}{\lambda|s-\beta_\chi|}\right).$$ Finite zero-order factorization gives the removable extension of $(s-\beta_\chi)/L(s,\chi)$, and continuity gives its stated bound at $\beta_\chi$ if that point belongs to the narrower closed strip; no bound outside that strip is inferred. For principal characters $|1/L(s,\chi_0)|=|s-1|\,|1/G(s)|/|s_0-1|\le3C\lambda^K$, with removable value zero at 1. If $\sigma\ge1+\eta/\lambda$, step 1.3 directly gives $1/|L(s,\chi)|\le1+\lambda/\eta$. Together these estimates cover the entire closed strip and preserve its possible real simple exception. [F3, F8, F9, step 1.3, step 6.1, step 9.1, algebra]

11.1 For completeness the estimate used the actual modulus throughout, including imprimitive characters. If $\chi$ is induced by $\chi^*$, [F11] and the identity theorem [F9] extend the finite Euler identity to $\operatorname{Re}s>0$ (multiply by $s-1$ in the principal case). Its additional factors have zeros only on $\operatorname{Re}s=0$, so every near-one zero comes from the primitive ancestor. A real induced character has a real ancestor: conjugating gives the conjugate primitive ancestor, and uniqueness in [F11] identifies it with the original one; conjugation preserves primitivity because a smaller inducing character would conjugate back to one for $\chi^*$. Principal ancestors have conductor 1 and the preceding principal branch applies. Thus no conductor substitution, missing principal term or class-field input is hidden in the statement. [F1, F2, F3, F8, F9, F11, step 6.1, step 10.1, algebra] ∎

## Source notes

This is a separate choice-free construction. The accepted classical119 theorem using the analytic Hecke core retains its original AC/CC/DC assumptions and entire source unchanged. The finite-disc kernel replaces the global zero formula in Petrow's complete Theorem9.3 argument; the explicit normalized reciprocal extension is proved here rather than attributed verbatim to that source. The proof uses only finite complex Riemann calculus and explicit improper tails, with no global zero enumeration, completed-function parameter classification, external theorem import or numerical computation. The possible exceptional zero is defined on a wider strip than the reciprocal estimate; quantitative removable bounds are asserted only at points of the latter region. No Möbius, coefficient-family SW, density or full Weiss/Stark proof is established by this carrier.
