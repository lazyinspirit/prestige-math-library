---
dependency_level: 3
id: lem-dirichlet-l-family-fourth-moment-and-separated-sampling
kind: lemma
title: Fourth moments and separated sampling for primitive Dirichlet L-families
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: None. Only finite sums, compact piecewise-continuous Riemann integrals and explicit Gaussian tails are used.
deps:
  - lem-uniform-smoothed-dirichlet-l-partial-sum-envelope
  - lem-dirichlet-character-hybrid-mean-square-and-separated-sampling
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-dirichlet-character-primitive-induction
  - def-induced-dirichlet-character
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - lem-dirichlet-character-values
  - thm-sum-of-totients-over-divisors
  - def-unit-group-modulo-n-and-euler-totient
  - def-divisor-counting-function
  - thm-canonical-prime-factorisation
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-riemann-stieltjes-and-parametric-contour-integrals-agree
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
sources:
  references:
    - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
      url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
      locator: Section26.5, Theorem26.29 and Corollaries26.30–26.31, Theorem26.32 and Corollaries26.33–26.34. Adaptation including conductor1, both signs, T at least1 and arbitrary positive sample spacing; all moment arguments are supplied locally.
---

## Statement

Choose either of the following two finite indexed character families $\mathcal F$, all with label weight $1$:

1. For an integer $q\ge1$, labels are all characters $\chi$ modulo $q$, with $\psi_\chi=\chi^*$ the unique primitive ancestor; put $K=q$.
2. For an integer $Q\ge1$, labels are pairs $(d,\chi)$ with $1\le d\le Q$ and $\chi$ primitive modulo $d$, with $\psi_{(d,\chi)}=\chi$; put $K=Q^2$.

Include the primitive principal character modulo $1$, with $L(s,\mathbf1)=\zeta(s)$. Let $T\ge1$, $H=K(T+4)$, $B=\log H$, and let a single real $\sigma$ satisfy $|\sigma-1/2|\le1/(64B)$. There is an absolute $C>0$, valid for either family, such that
$$\sum_{\ell\in\mathcal F}\int_{-T}^{T}|L(\sigma+it,\psi_\ell)|^4dt\le CHB^4,\tag{1}$$
$$\sum_{\ell\in\mathcal F}\int_{-T}^{T}\left|\left.\frac d{ds}L(s,\psi_\ell)^2\right|_{s=\sigma+it}\right|^2dt\le CHB^6.\tag{2}$$
The second bound is equivalently a bound $CHB^6$ for the integrals of $|LL'|^2$, after adjusting the absolute constant by $4$.

For any $\delta>0$, let each label have a finite index set $J_\ell$, allowed to be empty, and times $t_{\ell,j}\in[-T,T]$ such that $|t_{\ell,j}-t_{\ell,k}|\ge\delta$ for distinct indices of that same label. Then
$$\sum_{\ell\in\mathcal F}\sum_{j\in J_\ell}|L(\sigma+it_{\ell,j},\psi_\ell)|^4\le C(\delta^{-1}+B)HB^4.\tag{3}$$
Times at different labels may coincide. In the ancestor family labels remain the actual characters modulo $q$. The same $\sigma$ is used for all labels and samples; no sample-dependent real-part or conductor-weighted assertion is made. The constants are uniform in $q,Q,T,\delta,\sigma$ and the finite sample data. All integrals are finite Riemann integrals, including $q=Q=1$, $T=1$ and both height signs. No choice axiom is assumed.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[Montgomery–Vaughan, §26.5, fourth moments and sampling](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** One of the two exact weight-one families, $T,H,B$, the single $\sigma$ and the indexed sample data in the Statement.

[F1] For primitive $\chi$ of conductor $d\ge1$, write $\tau=|t|+4$ and $V(u,r)=e^{-u^2/(4r)}(u^2/r)^{1/8}/u$. On $1/4\le\sigma_0\le3/4$ and $|\sigma_0-1/2|\log(d\tau)\le1$, the fourth power of $L(\sigma_0+it,\chi)$ is at most an absolute constant times the $V(u,d\tau)$ integral of $|A(\sigma_0+it,\chi;u)|^4+|A(1-\sigma_0-it,\overline\chi;u)|^4$, plus $C\mathbf1_{d=1}\tau^{-5/2}$. Here $A(s,\chi;u)=\sum_{n\le u}\chi(n)n^{-s}$; both signs and bounded heights are included ([[lem-uniform-smoothed-dirichlet-l-partial-sum-envelope]]).

[F2] For actual characters modulo $d$, an interval $J$ of real times with length $S\ge2$ and a polynomial $D_\chi(t)=\sum_{n\le M}c_n\chi(n)n^{-it}$, the continuous mean-square bound is $C\frac{\varphi(d)}d\sum_{(n,d)=1}|c_n|^2(dS+n)$. This includes $d=1$ and arbitrary real interval location ([[lem-dirichlet-character-hybrid-mean-square-and-separated-sampling]]).

[F3] A character is a homomorphism on units and zero off them, with unit values of modulus one. Every character modulo $q$ has a unique primitive ancestor of conductor dividing $q$, and induction of a specified character to a specified multiple is unique. A trivial unit character is induced from modulus1, so a primitive character of conductor greater than1 is nonprincipal. The modulus-one principal character is primitive. Moreover $\sum_{d\mid q}\varphi(d)=q$, $\varphi(1)=1$ and $\varphi(d)\le d$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[thm-dirichlet-character-primitive-induction]], [[def-induced-dirichlet-character]], [[def-primitive-dirichlet-character-and-conductor]], [[thm-sum-of-totients-over-divisors]], [[def-unit-group-modulo-n-and-euler-totient]]).

[F4] Primitive nonprincipal $L$-functions are entire; the principal primitive conductor-one function is zeta with its unique simple pole at1. We use only this qualitative holomorphy, without extracting any quantitative growth constant ([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F5] Cauchy's higher-derivative formula holds on a compact circle strictly inside a holomorphy disc; its contour integral agrees with the circle's parametric Riemann integral ([[thm-cauchy-integral-formula-higher-derivatives]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F6] Compact FTC evaluates an integrable derivative. Continuous compact functions are Riemann integrable with linearity and order, and continuous compact-rectangle functions have agreeing multiple and iterated Riemann integrals ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-riemann-fubini-on-product-rectangles]]).

[F7] The positive-divisor count and the unique finite prime factorization determine all its prime-power factors ([[def-divisor-counting-function]], [[thm-canonical-prime-factorisation]]).

[F8] The logarithm has derivative $1/x$ and equals $\int_1^xdt/t$; the complex exponential has derivative itself and modulus $|e^{x+iy}|=e^x$ ([[thm-logarithm-derivative-and-integral]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 All integral inequalities below are compact Riemann inequalities. For piecewise-continuous bounded functions with finitely many breakpoints, subdivide there and isolate the endpoints in intervals of arbitrarily small total length; integrability, linearity, order and invariance under finite point changes follow from [F6]. Integrating $(f-\lambda g)^2\ge0$ gives Cauchy–Schwarz by its discriminant, including the zero quadratic-coefficient case, whose linear coefficient is then zero. The same argument proves finite weighted-sum Cauchy–Schwarz. Rotating the value of a complex integral to the positive real axis gives its modulus bound. Since $H\ge5$, $B>1$; for example $\log4=2\log2>1$ by [F8]. We will prove the stronger integrated fourth-moment bound on $[-T-2,T+2]$ for each fixed $\sigma_0$ with $|\sigma_0-1/2|\le1/(16B)$. This is inside the quarter strip. Each relevant conductor satisfies $d\le K$ and $d(|t|+4)\le K(T+6)\le7H/5$ there, so $|\sigma_0-1/2|\log(d(|t|+4))<1$. Thus the exact hypotheses of [F1] hold throughout this enlarged region. [F1, F6, F8, given, construct, algebra]

2.1 Define $D_4(n)=\#\{(a,b,c,e)\in\mathbb N_{>0}^4:abce=n\}$ and denote the positive-divisor count by $d(n)$. At a prime power $p^v$, unique factorization gives $d(p^v)=v+1$ and $D_4(p^v)=\binom{v+3}3$: distribute the exponent among four ordered nonnegative exponents. The inequality $(v+1)^2\le\binom{v+3}3$ follows from $v(v-1)\ge0$ for integer $v\ge0$. Multiplying the finite prime-power inequalities gives $d(n)^2\le D_4(n)$. Counting ordered factorizations and comparing the harmonic sum with its logarithmic integral therefore prove, for $x\ge1$, $$\sum_{n\le x}\frac{d(n)^2}{n}\le\sum_{abce\le x}\frac1{abce}\le\left(\sum_{j\le x}\frac1j\right)^4\le C(\log(2x))^4.$$ No divisor asymptotic or maximal-order estimate is used. [F7, F8, step 1.1, algebra]

3.1 For $u\ge1$, put $c_u(n)=\#\{(a,b):1\le a,b\le u,ab=n\}\le d(n)$. Complete multiplicativity, including zero values on nonunits, gives $A(s,\chi;u)^2=\sum_{n\le u^2}c_u(n)\chi(n)n^{-s}$. Indeed a product is a unit only when both factors are units, so zero extension preserves the unit-group multiplicative identity. Put $\eta=|\sigma_0-1/2|$. For $n\le u^2$, both $n^{-2\sigma_0}$ and $n^{-2+2\sigma_0}$ are at most $u^{4\eta}/n$. Apply [F2] to this squared polynomial on a time interval $J$ of length $S\ge2$ with $S\le2U$, where $U\ge2$, padding missing coefficients with zero up to an integer at most $\lfloor u^2\rfloor$. Enlarge only the nonnegative primitive-character sum to all ACTUAL characters modulo $d$. Step 2.1 then gives $$\sum_{\chi\bmod d}^{*}\int_J|A(\sigma_0+it,\chi;u)|^4dt\le C\frac{\varphi(d)}d(dU+u^2)u^{4\eta}(\log(2u))^4.\tag{4}$$ Conjugation permutes primitive characters, and time reflection gives an interval of the same length, so the same bound holds for the dual term of [F1]. The asterisk denotes primitive characters. For $u<1$ both partial sums vanish. Crucially the factor $\varphi(d)/d$ has been retained. [F2, F3, F7, F8, step 2.1, algebra]

4.1 For a dyadic interval $U\le|t|\le2U$, $U\ge2$, intersect the actual $L$-integral with $[-T-2,T+2]$. On it $U\le|t|+4\le4U$, so its envelope weight is bounded by $C V(u,r)$ with $r=4dU$. For bounded height $|t|\le2$, use the interval $[-2,2]$ of length4, $U=2$ and $r=8d$; the same comparison holds. Apply [F1] there, but enlarge only the nonnegative POLYNOMIAL integral to the full dyadic interval when using (4); this never applies the envelope outside the height range of step 1.1. With $v=u^2/r$, $$V(u,r)du=\tfrac12e^{-v/4}v^{1/8-1}dv,\qquad (dU+u^2)u^{4\eta}\le Cr^{1+2\eta}(1+v)v^{2\eta},$$ and on $u\ge1$, $(\log(2u))^4\le C[(\log(2r))^4+|\log v|^4]$. The resulting positive majorant is integrable uniformly: near0 use $v^{-7/8}(1+|\log v|^4)$, and at infinity exponential decay dominates all the fixed powers. Here $\eta\le1/(16\log5)$ and $r\le4H$, so $r^{2\eta}$ is bounded absolutely. Thus (4) integrated against the envelope is at most $C\varphi(d)U(\log(2dU))^4$. The conductor-one error integrates to $CU$ and is absorbed in its $\varphi(1)=1$ instance. [F1, F3, F6, F8, step 1.1, step 3.1, algebra]

5.1 Every exchange in step 4.1 is justified as follows. On a bounded $u$ range subdivide at its finitely many INTEGER cutoff jumps. On each remaining piece the partial-sum functions and the $t$ variable give continuous compact-rectangle integrands after assigning harmless one-sided endpoint values; [F6] exchanges their Riemann integrals. Sum the finitely many pieces, using step 1.1 for endpoint changes. For $u\ge1$, $|\chi(n)|\le1$ and $1/4\le\sigma_0\le3/4$ give $|A(\sigma_0+it,\chi;u)|^4+|A(1-\sigma_0-it,\overline\chi;u)|^4\le Cu^3$, uniformly in $t$, by comparison of the two coefficient sums with their power integrals. Thus their tail integrand is bounded by $Cu^3V(u,r)$, an explicit Gaussian times a fixed power. This proves the improper passages uniformly on a compact time interval and its finite character family, without generic Riemann dominated convergence or Lebesgue Fubini. Now cover the two signs of heights by the bounded piece and dyadic pieces, intersecting the last $L$-piece with the target interval. Their $U$ values sum to $C(T+2)\le3CT$, while $\log(2dU)\le CB$. Consequently $$\sum_{\chi\bmod d}^{*}\int_{-T-2}^{T+2}|L(\sigma_0+it,\chi)|^4dt\le C\varphi(d)TB^4.\tag{5}$$ This includes $T=1$: its bounded piece has length4 and every polynomial interval in (4) has length at least2, as [F2] requires. [F1, F2, F3, F6, F8, step 1.1, step 4.1, algebra]

6.1 For the ancestor family, primitive induction and uniqueness of the induced arithmetic function give a bijection between the actual characters modulo $q$ and the disjoint union of primitive characters of conductors $d\mid q$. Thus (5) and $\sum_{d\mid q}\varphi(d)=q$ give $CqTB^4\le CHB^4$. For the primitive conductor family, sum (5) over $d\le Q$ and use $\sum_{d\le Q}\varphi(d)\le\sum_{d\le Q}d\le Q^2$, giving $CQ^2TB^4\le CHB^4$. No primitive ancestor is omitted or duplicated. This proves the stronger fourth-moment bound on $[-T-2,T+2]$ for the internal fixed-$\sigma_0$ strip of step 1.1, hence proves (1). Obtaining $\varphi(d)U$ BEFORE conductor summation prevents an extra conductor logarithm; we did not apply a $qT$ ancestor bound separately to each conductor block. All label weights are1. [F3, step 1.1, step 5.1, algebra]

7.1 For the public $\sigma$ put $\rho=1/(64B)$. If $|t|\le T+1$, every point of the circle centered at $\sigma+it$ with radius $\rho$ has real part within $1/(32B)$ of $1/2$, strictly inside the internal $1/(16B)$ strip, and height at most $T+2$. The primitive $L$-functions are holomorphic there by [F4]; for conductor1 the zeta pole at1 lies outside these discs. In fact a radius-$1/8$ disc around each center remains away from that pole and inside the quarter strip, so the smaller circle satisfies the strict interior-circle hypothesis of [F5]. We use only qualitative holomorphy, without any conductor-uniform growth inference from [F4]. The enlarged fourth-moment estimate of step 6.1 therefore applies uniformly at each fixed circle angle and its shifted time interval, with the SAME original $H,B$. [F4, F5, F6, step 1.1, step 6.1, construct, algebra]

8.1 Set $F_\ell(s)=L(s,\psi_\ell)^2$. Cauchy's derivative formula, its compact parametric bridge and the compact Cauchy–Schwarz inequality from step 1.1 give $$|F'_\ell(\sigma+it)|^2\le\frac{\rho^{-2}}{2\pi}\int_0^{2\pi}|L(\sigma+it+\rho e^{i\theta},\psi_\ell)|^4d\theta.$$ Sum over the exact finite label family and integrate for $|t|\le T+1$. The $\theta,t$ integrand is continuous on a compact rectangle, so [F6] exchanges its finite integrals. For each angle, its real part is fixed in the internal strip and the shifted time interval lies in $[-T-2,T+2]$. Steps 6.1 and 7.1 therefore bound the result by $C\rho^{-2}HB^4=CHB^6$. This proves (2) and also its enlarged $[-T-1,T+1]$ version. The derivative is $(L^2)'=2LL'$, so the equivalent formulation has exactly the factor4 stated above. No Gamma derivative estimate is needed. [F4, F5, F6, F8, step 1.1, step 6.1, step 7.1, algebra]

9.1 For arbitrary $\delta>0$ put $h=\min(\delta,1)$. Center a length-$h$ interval $I_{\ell,j}$ at each sample. They have disjoint interiors for each actual label, including equality of consecutive gaps, and all lie inside $[-T-1,T+1]$. FTC for $|F_\ell(\sigma+it)|^2$ and averaging the comparison with its value at every point of $I_{\ell,j}$ give $$|F_\ell(\sigma+it_{\ell,j})|^2\le h^{-1}\int_{I_{\ell,j}}|F_\ell(\sigma+it)|^2dt+2\int_{I_{\ell,j}}|F_\ell(\sigma+it)||F'_\ell(\sigma+it)|dt.$$ The vertical derivative of $F_\ell$ is $iF'_\ell$, of the same modulus. Sum over samples and labels; disjointness is needed only within a label. Integral and finite Cauchy–Schwarz from step 1.1, with the enlarged bounds in steps 6.1 and 8.1, make the right side at most $C[h^{-1}HB^4+\sqrt{(HB^4)(HB^6)}]=C(h^{-1}+B)HB^4$. Every function integrated here is continuous on a compact interval. [F6, F8, step 1.1, step 6.1, step 8.1, construct, algebra]

10.1 Since $B>1$, $h^{-1}=\max(\delta^{-1},1)\le\delta^{-1}+B$, proving (3). This includes $\delta>1$ and $\delta>2T$ without any $T+\delta$ enlargement. Empty sample families give zero, and different-label coincident times retain all their indices. The conductor-one contributions and both height signs were included in steps 4.1 and 5.1; $q=Q=1$, $T=1$ and fixed real parts at the inclusive public-strip endpoints are therefore covered. All real-part enlargements were the explicit compact-circle ones of step 7.1. No sample-dependent $\sigma$, conductor weight, zero detector or density conclusion has been used or deduced, and no choice axiom entered any step. [F1, F3, F6, step 1.1, step 4.1, step 5.1, step 7.1, step 9.1, algebra] ∎

## Remarks

The complete relevant source moment/sampling passages were read. The local proof retains $\varphi(d)/d$ at the actual-modulus polynomial stage, then sums $\varphi(d)$ over conductors; this avoids an extra logarithm in the ancestor family. Sample spacing is handled with $\min(\delta,1)$, and only the polynomial integral is enlarged on a final dyadic block. These estimates do not supply N1/N2 zero detection, Huxley large values, log-free density, repulsion, Heath–Brown density or any Guth–Maynard conclusion. Those remain separate local proof and review obligations.
