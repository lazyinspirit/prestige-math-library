---
id: lem-divisor-and-circle-largest-coefficient-sums
kind: lemma
title: "Largest divisor and two-square coefficients with their logarithmic powers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - thm-balasubramanian-ramachandra-multiplicative-coefficient-count
  - lem-divisor-function-subpower-bound
  - thm-fundamental-theorem-of-arithmetic
  - thm-two-square-representation-count
  - thm-dirichlet-l-nonzero-at-one
  - thm-dirichlet-l-euler-product
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-euler-product-for-riemann-zeta
  - lem-dirichlet-bounded-family-common-zero-free-region
  - lem-log-derivative-bound-from-disc-zero-factorization
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
  - thm-residue-theorem-null-homologous-cycle
  - thm-hankel-representation-for-reciprocal-gamma
  - def-euler-gamma-function
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No extra choice hypothesis; specified finite data, absolute numerical tails and proper Riemann integrals."
sources:
  references:
    - title: "Youness Lamzouri, Sharp Omega Results for the Divisor and Circle Problems"
      url: "https://arxiv.org/pdf/2605.21476v1"
      locator: "Lemmas3.1–3.2 and Proposition3.3, printedpp10–12. The circle Euler factor and fixed-character analytic continuation/desmoothing are proved locally rather than treated as a positive-g specialization of BR."
---

## Statement

Let $d(n)$ count positive divisors and $r_2(n)$ count ordered integer representations as two squares. Write $\kappa_d=2^{4/3}$ and $\kappa_c=2^{1/3}$. There are positive constants $c_d,c_c$ such that
$$\#\{n:nd(n)^{-4/3}\le x\}\sim c_dx(\log x)^{\kappa_d-1},$$
$$\#\{n:r_2(n)>0,\ nr_2(n)^{-4/3}\le x\}\sim c_cx(\log x)^{\kappa_c-1}.$$
The sums $S_d(M),S_c(M)$ of the largest $M$ positive coefficients $d(n)n^{-3/4}$ and $r_2(n)n^{-3/4}$ therefore satisfy
$$S_j(M)\asymp M^{1/4}(\log M)^{3(\kappa_j-1)/4}\qquad(M\to\infty,\ j=d,c).$$
They can be selected by finite decreasing sorting, with ties broken by the integer index; every selected index is at most $C M^3$ for one fixed $C$.

## Statement references

[Lamzouri](https://arxiv.org/pdf/2605.21476v1)

## Facts & Assumptions

**Given:** The two specified arithmetic functions. All ordering statements concern positive coefficients.

[F1] [[lem-divisor-function-subpower-bound]] and [[thm-fundamental-theorem-of-arithmetic]] give $d(n)\ll_\epsilon n^\epsilon$ and $d(n)=\prod_{p^a\parallel n}(a+1)$.

[F2] [[thm-balasubramanian-ramachandra-multiplicative-coefficient-count]] supplies its full unqualified asymptotic for positive coprime-multiplicative $g$ with constant prime value and $g(n)\gg n^{-1/16}$.

[F3] [[thm-two-square-representation-count]] gives $r_2(n)=4\sum_{d\mid n}\chi_4(d)$, with $\chi_4$ the nonprincipal primitive character modulo4. Thus $0\le r_2(n)\le4d(n)$.

[F4] [[thm-dirichlet-l-euler-product]], [[thm-dirichlet-l-nonzero-at-one]], [[thm-euler-product-for-riemann-zeta]] and [[thm-riemann-zeta-continuation-to-the-right-half-plane]] supply respectively the Euler factors, $L(1,\chi_4)\ne0$, and the residue-one zeta pole. No choice hypothesis is assumed by these interfaces.

[F5] [[lem-dirichlet-bounded-family-common-zero-free-region]] is the unqualified bounded-family theorem at $Q=4$; only one real simple exceptional zero occurrence is possible. [[lem-log-derivative-bound-from-disc-zero-factorization]] gives the zero-free-disc logarithmic derivative bound.

[F6] [[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[thm-residue-theorem-null-homologous-cycle]], [[thm-hankel-representation-for-reciprocal-gamma]] and [[def-euler-gamma-function]] supply normalized analytic logarithms, finite contour deformation, the fixed-radius Hankel value $1/\Gamma(\kappa)$ and positivity of $\Gamma(\kappa)$ for $\kappa>0$.


## Proof

1.1 Take $g(n)=d(n)^{-4/3}$. It is positive and multiplicative by [F1], $g(p)=2^{-4/3}=1/\kappa_d$, and [F1] with exponent $3/64$ gives $g(n)\gg n^{-1/16}$. Thus [F2] proves the first asymptotic. This does NOT prove the circle assertion, where $r_2$ has zeros. We now supply its distinct Euler and analytic argument. [F1, F2, algebra]

2.1 Put $\rho(n)=r_2(n)/4$. The divisor-character identity [F3] gives a multiplicative nonnegative function with local values $\rho(2^a)=1$, $\rho(p^a)=a+1$ for $p\equiv1\pmod4$, and $\rho(p^a)=1$ or0 according as $a$ is even or odd for $p\equiv3\pmod4$. The positive generalized sequence $a_n=nr_2(n)^{-4/3}$ on $r_2(n)>0$ tends to infinity by [F1]–[F3], so its counting function is finite. For $\sigma>1$, its Euler product converges absolutely, as its prime linear terms are $O(p^{-\sigma})$ and all higher terms have absolutely summable prime tails. Explicitly, with $z(s)=2^{4s/3-1}$, [F1, F3, F4, step 1.1, algebra]
$$\Phi(s)=\sum_{r_2(n)>0}a_n^{-s} =4^{4s/3}(1-2^{-s})^{-1} \prod_{p\equiv3(4)}(1-p^{-2s})^{-1} \prod_{p\equiv1(4)}\sum_{a\ge0}(a+1)^{4s/3}p^{-as} =H(s)[\zeta(s)L(s,\chi_4)]^{z(s)}.$$
At $p\equiv1(4)$ the correction factor is $(1-p^{-s})^{2z(s)}\sum_a(a+1)^{4s/3}p^{-as}=1+O(p^{-2\sigma})$, since $2z(s)=2^{4s/3}$. At $p\equiv3(4)$ it is $(1-p^{-2s})^{z(s)-1}$, and at2 it is $(1-2^{-s})^{z(s)-1}$, in addition to $4^{4s/3}$. These explicit primary logarithms show that $H$ is holomorphic for $\sigma>1/2$ and uniformly bounded on $3/4\le\sigma\le2$, because $|z(s)|=2^{4\sigma/3-1}$ is bounded and the local series coefficients have fixed polynomial growth in $a$. Its product at1 is positive and nonzero. The Euler argument, not the insufficient bound $r_2(n)\ll_\epsilon n^\epsilon$ alone, proves convergence at every $\sigma>1$. [F1, F3, F4, step 1.1, algebra]

3.1 The periodic sums $A(u)=\sum_{n\le u}\chi_4(n)$ are bounded. Abel summation gives $L(s,\chi_4)=s\int_1^\infty A(u)u^{-s-1}du$ for $\sigma>0$, locally uniformly with derivatives, so $L$ is holomorphic there and $|L(s)|\ll |s|/\sigma$. It is positive on the real line $\sigma>1$ by its Euler product, hence $L(1,\chi_4)>0$ by continuity and [F4]. Fix a small zero-free disc at1. At height $Y$ use [F5] with $Q=4$ and take $d=c_*/\log(4(Y+6))$ with one sufficiently small fixed positive $c_*$. For large $Y$ its real interval $(1-10d,1]$ is inside that fixed disc. The possible real exceptional zero is consequently absent for $\chi_4$ in the rectangle $1-10d<\sigma<2$, $|t|<Y+2$; the principal conductor-one zeta factor has no exceptional zero. Both $L$ and $(s-1)\zeta(s)$ have normalized holomorphic logarithms there. [F4, F5, F6, step 2.1, algebra]
For $|t|\ge t_0>0$ the zero-free discs of radius $6d$ centred at $1+d+it$ have maximum $O_{t_0}(|t|+4)$ for both functions and central modulus at least $1/\zeta(1+d)\gg d$ by their Euler reciprocal products. The disc lemma bounds their logarithmic derivatives on the inner third by $C(\log(|t|+4)+\log d^{-1})/d$. Integrating horizontally at most $2d$ from the Euler branch gives $|\log\zeta|+|\log L|\ll1+\log(|t|+4)+\log d^{-1}$. For $|t|<t_0$ and $|s-1|\ge d$, use the nonzero local factors and the explicit pole logarithm instead. Thus for one fixed $K$, $|\Phi(s)|\ll d^{-K}(|t|+4)^K$ on the contour sides below. All constants are independent of $Y$; no AC/DC-qualified Dirichlet zero-free theorem or quadratic class-field theorem was used. [F4, F5, F6, step 2.1, algebra]

4.1 Choose an integer $r>K+3$ and put $P_r(s)=s(s+1)\cdots(s+r)$. Absolute convergence and residues at $0,-1,\ldots,-r$ give the exact identity [F6, step 2.1, step 3.1, algebra]
$$R_r(x):=\frac1{r!}\sum_{a_n\le x}(x-a_n)^r =\frac{x^r}{2\pi i}\int_{c-i\infty}^{c+i\infty}\Phi(s)x^s/P_r(s)\,ds,\qquad c>1.$$
Indeed the inverse of $u^s/P_r(s)$ is $(1-u^{-1})_+^r/r!$: move left for $u>1$, right for $u<1$, using degree $r+1$ to discard horizontal edges, then use continuity at $u=1$. Its integral absolute majorant is $\Phi(c)\int|P_r(c+it)|^{-1}dt$, so this applies also to noninteger or repeated $a_n$. Take $L_x=\log x$, $Y=e^{\sqrt{L_x}}$, $d$ as in step 3.1 and $c=1+2/L_x$. Shift to $\sigma=1-d$ leaving a slit Hankel contour at1 of radius $1/L_x$. The original tails, horizontal edges and left edge, before the external factor $x^r$, are respectively
$$O(xL_x^{\kappa_c+1}Y^{-r}),\quad O(xd^{-K}Y^{K-r-1}),\quad O(xe^{-dL_x}d^{-K}).$$
The last estimate integrates $(1+|t|)^{K-r-1}$, and $dL_x\asymp\sqrt{L_x}$, so all are $O(xe^{-c_1\sqrt{L_x}})$ for some $c_1>0$. The original bound $\Phi(c)=O(L_x^{\kappa_c+1})$ follows from the explicit real local pole expansion in step 2.1. [F6, step 2.1, step 3.1, algebra]

5.1 Locally write $w=s-1$, $\kappa_c=z(1)=2^{1/3}$, and $Z(s)=(s-1)\zeta(s)$. The nonzero local factors give [F4, F6, step 2.1, step 4.1, algebra]
$$\Phi(s)/P_r(s)=w^{-\kappa_c} \left[\frac{H(1)L(1,\chi_4)^{\kappa_c}}{(r+1)!} +O(|w|(1+|\log|w||))\right].$$
Here $z(s)-\kappa_c=O(|w|)$, $Z(1)=1$, and the varying exponent is absorbed as $\exp[-(z(s)-\kappa_c)\operatorname{Log}w]$; it contributes exactly the stated error. On the two rays its integral is $O(xL_x^{\kappa_c-2}(1+\log L_x))$, by substituting $v=L_x|w|$ in $\int_{1/L_x}^d e^{-L_xu}u^{1-\kappa_c}(1+|\log u|)du$. The radius-$1/L_x$ circle has the same bound. The main substitution makes its circular radius1; extending its negative rays to infinity has exponentially small error. The fixed-radius Hankel value [F6] is $1/\Gamma(\kappa_c)$. Therefore
$$R_r(x)\sim c_c\,x^{r+1}(\log x)^{\kappa_c-1}/(r+1)!,\qquad c_c=H(1)L(1,\chi_4)^{\kappa_c}/\Gamma(\kappa_c)>0.$$
No shrinking-circle absolute convergence is asserted when $\kappa_c>1$. [F4, F6, step 2.1, step 4.1, algebra]

6.1 Repeated finite proper integration of the truncated polynomials gives $\Delta_h^rR_r(t)=\int_{[0,h]^r}N(t+\sum u_i)\,du$, where $N(x)=\#\{a_n\le x\}$. Values at the finitely many endpoint hyperplanes do not change this proper Riemann integral. Thus [step 4.1, step 5.1, algebra]
$$h^{-r}\Delta_h^rR_r(x-rh)\le N(x)\le h^{-r}\Delta_h^rR_r(x).$$
Fix $h=\varepsilon x$, $0<\varepsilon<1/(2r)$, before taking $x\to\infty$. The finitely many arguments are fixed positive multiples of $x$, so step 5.1 applies at each and their logarithmic factors are asymptotically identical. The forward and backward finite differences of $x^{r+1}/(r+1)!$, divided by $h^r$, are exactly $x+rh/2$ and $x-rh/2$: its $r$th derivative is $x$, averaged over the cube. Hence $1-r\varepsilon/2\le\liminf N/[c_cx(\log x)^{\kappa_c-1}]\le\limsup N/[c_cx(\log x)^{\kappa_c-1}]\le1+r\varepsilon/2$. Let $\varepsilon\downarrow0$ to prove the second asymptotic, without assuming spacings or integrality of $a_n$. [step 4.1, step 5.1, algebra]

7.1 For either arithmetic function let $b_n=n^{3/4}/d(n)$ or $n^{3/4}/r_2(n)$ on the positive support. The two established counts give [step 1.1, step 6.1, algebra]
$$N_b(y):=\#\{b_n\le y\}\sim c'y^{4/3}(\log y)^\eta,\qquad \eta=\kappa_j-1>0.$$
Indeed $b_n\le y$ is the previous condition with $x=y^{4/3}$. Finite Abel summation gives $\sum_{b_n\le y}b_n^{-1}=N_b(y)/y+\int_0^yN_b(t)t^{-2}dt\asymp y^{1/3}(\log y)^\eta$. The lower bound is the first term; for the upper split into dyadic intervals and sum the geometric series $2^{-j/3}$, with $\log t\le\log y$ above a fixed cutoff. Choose a fixed $C_*>0$ so that $y_M=C_*M^{3/4}(\log M)^{-3\eta/4}$ satisfies $N_b(y_M)\sim M/2$. Then $N_b(2y_M)\sim2^{4/3}M/2>M$, while $N_b(y_M)<M$ eventually. The largest-$M$ sum is between the complete sums at these two thresholds, including arbitrary ties by finite sorting. Both are comparable to $y_M^{1/3}(\log y_M)^\eta=M^{1/4}(\log M)^{3\eta/4}$, proving the two asserted orders. [step 1.1, step 6.1, algebra]

8.1 The largest $M$ coefficients can in fact be selected inside one finite interval of indices. By [F1]–[F3], each is at most $C n^{-3/4+1/8}=Cn^{-5/8}$. For divisors the first $M$ integers already give $M$ coefficients at least $M^{-3/4}$. For two squares the integers $j^2$, $1\le j\le M$, give $M$ coefficients at least $4M^{-3/2}$ from the four axial representations. Any selected index therefore obeys $n\le C'M^{12/5}\le C'M^3$, covering both cases after increasing the constant for bounded $M$. Sorting that finite set by decreasing value and increasing integer index in a tie constructs the desired choice canonically. Zero circle coefficients are excluded. No countable choice of an ordering or an external Selberg–Delange statement has been assumed. [F1, F3, step 7.1, algebra] ∎
