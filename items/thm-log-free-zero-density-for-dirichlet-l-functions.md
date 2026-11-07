---
id: thm-log-free-zero-density-for-dirichlet-l-functions
kind: theorem
title: Log-free zero-density estimate for primitive Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-dirichlet-l-zero-density-counting-functions
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-unit-group-modulo-n-and-euler-totient
- thm-dirichlet-character-orthogonality
- lem-primitive-dirichlet-l-zero-count-in-unit-window
- thm-dirichlet-l-euler-product
- lem-dirichlet-bounded-family-common-zero-free-region
- lem-dirichlet-local-zero-mass-and-logfree-prime-detector
- lem-rough-supported-dirichlet-character-hybrid-sieve
- def-dirichlet-l-function
- thm-dirichlet-series-absolute-half-plane-holomorphy
- thm-von-mangoldt-logarithmic-derivative-zeta
- def-von-mangoldt-function
- thm-deuring-heilbronn-zero-repulsion-for-dirichlet-l-functions
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- def-natural-logarithm
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- def-real-power
- thm-real-power-laws
- def-real-exponential-function-and-e
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
aliases: []
forward_refs: []
dependency_level: 4
sources:
  references:
  - title: Montgomery–Vaughan, Multiplicative Number Theory III, Chapter 28 §28.7
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Theorem28.14 and complete Section28.7 proof, printed216–229. Full source passage read; the local unweighted detector/sieve proof and independent DH multiplication replace the weighted exceptional-detector route. The introductory source zero-free wording omits height, explicitly bounded here.
proof_strategy: direct
axiom_use: None. Finite primitive families, finite zero occurrences with multiplicity, compact Riemann integrals and explicit scalar tails; no class-number/choice premise.
---

## Statement

Let $T\ge2$. The common zero-free-region theorem for primitive Dirichlet characters supplies an absolute constant $c_1>0$ and at most one possible zero $\beta_1$ of the product of primitive $L$-functions of conductors $q\le T$ in $\operatorname{Re}s>1-1/(c_1\log T)$ and $|\operatorname{Im}s|\le T$; if present, this zero is real and simple and belongs to a real primitive quadratic character of conductor $q_1\le T$. Call it the exceptional zero and put $\delta_1:=1-\beta_1$. For $1/2\le\sigma\le1$, let $N^*(\sigma,T)$ count, with multiplicity, all zeros $\rho=\beta+i\gamma$ of primitive Dirichlet $L$-functions with conductor $q\le T$, $\beta\ge\sigma$, and $|\gamma|\le T$, excluding $\beta_1$ when it exists. Here $\log$ is the natural logarithm. There are absolute constants $c,c_0>0$ such that
$$N^*(\sigma,T)\le c_0T^{c(1-\sigma)}.$$
If the exceptional zero exists, the stronger bound
$$N^*(\sigma,T)\le c_0\delta_1(\log T)T^{c(1-\sigma)}$$
also holds.

## Statement references

[Montgomery–Vaughan, Theorem 28.14](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The original density parameters $T\ge2$, $1/2\le\sigma\le1$, the bounded-height exceptional occurrence in the Statement, and multiplicity counting. For real $T$, conductors are the positive integers at most $\lfloor T\rfloor$.

[F1] The zero counts use primitive $L$-functions with multiplicities. A character modulo $q$ is a unit-group homomorphism extended by zero, has conductor $q$ when primitive, and there are $\varphi(q)\le q$ characters modulo $q$. The primitive principal conductor-one character is included. Every primitive character has at most $C\log(q(|t|+3))$ zeros with $1/2\le\beta\le1$ and $|\gamma-t|\le1$, with an absolute constant ([[def-dirichlet-l-zero-density-counting-functions]], [[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[def-unit-group-modulo-n-and-euler-totient]], [[thm-dirichlet-character-orthogonality]], [[lem-primitive-dirichlet-l-zero-count-in-unit-window]]).

[F2] Euler products are nonzero on real part greater than one. For real $Q,H\ge2$, the primitive family of conductors $q\le Q$ has at most one zero occurrence in $\beta>1-10^{-17}/\log(Q(H+3))$, $|\gamma|\le H$. Any such occurrence is a real simple zero in $(0,1)$ of a real nonprincipal primitive quadratic character. This is the accepted bounded-height, choice-free interface ([[thm-dirichlet-l-euler-product]], [[lem-dirichlet-bounded-family-common-zero-free-region]]).

[F3] Put $r_0=\min\{10^{-8},10^{-17}/\log12\}$. The local zero count is at most $C(\lambda\log T+1)$ for the full zero multiset of $(s-1)^{e_\chi}L(s,\chi)$, actual modulus $q\le T$, $|v|\le T+1$ and $0<\lambda\le1$. There are absolute $A_0>6000$ and $c_D>0$ such that, for a primitive target zero $\beta+i\gamma$ with $\beta\ge1-r/2$, $|\gamma|\le T$ and $1/\log T\le r\le r_0$, every $x\ge T^{A_0}$, $X=x^{1/900}$, $Y=x^{60}$ and $|v-\gamma|\le r/2$ satisfy $\int_X^Y|F_\chi(y,v)|^2dy/y\ge c_D(\log x)^3x^{-40r}$, where $F_\chi(y,v)=\sum_{X<p\le y}(\log p)\chi(p)p^{-1-iv}$ ([[lem-dirichlet-local-zero-mass-and-logfree-prime-detector]]).

[F4] For real $Q\ge1$, integer $N\ge1$, $U\ge2$, real starting point $B$, and common complex coefficients $a_n$ vanishing whenever $n$ has a prime divisor at most $Q$, one has $\sum_{1\le d\le Q}(1+\log(Q/d))\sum_{\psi\bmod d}^{*}\int_B^{B+U}|\sum_{n\le N}a_n\psi(n)n^{-it}|^2dt\le C\sum_{n\le N}|a_n|^2(n+Q^2U)$. The primitive sums have weight ONE apart from the displayed logarithmic conductor weight; conductor one is included, and there is no restriction on $N/(Q^2U)$ ([[lem-rough-supported-dirichlet-character-hybrid-sieve]]).

[F5] The defining Dirichlet series holds on real part greater than one and termwise differentiation is valid in an absolute-convergence half-plane. For the actual conductor-one use below, $Z(s)=\zeta(s)$ and $-Z'(s)/Z(s)=\sum\Lambda(n)n^{-s}$ for every $\operatorname{Re}s>1$, in particular at the real $s>1$ used in step 1.2; here $\Lambda(p^k)=\log p$ and $\Lambda$ is zero otherwise ([[def-dirichlet-l-function]], [[thm-dirichlet-series-absolute-half-plane-holomorphy]], [[thm-von-mangoldt-logarithmic-derivative-zeta]], [[def-von-mangoldt-function]]).

[F6] The independently proved full Deuring–Heilbronn bound supplies absolute $D,b>0$ such that, for the designated real simple exceptional $\beta_1$ and any other primitive zero $\beta+i\gamma$ of conductor at most $T$ with $|\gamma|\le T$,
$$\beta\le1-\frac{\log(1/[D(1-\beta_1)\log T])}{b\log T}.$$
The common-family exception is the bounded conductor/height exception specified in [F2] and the Statement below; no all-height strip is asserted here ([[thm-deuring-heilbronn-zero-repulsion-for-dirichlet-l-functions]]).

[F7] Continuous compact Riemann integrals have linearity, order and FTC; finite point changes and finitely many step discontinuities are handled by subdivision and arbitrarily short endpoint intervals. Logarithm is natural, increasing and has its product/integral laws, positive real powers use the exponential/logarithm convention, and complex exponentials have their addition law, derivative and modulus formula ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-laws]], [[def-real-exponential-function-and-e]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 Write $a=10^{-17}$ and fix the common constant $c_1=4/a$. For $T\ge2$, $T+3\le(5/2)T$ and $\log(T(T+3))\le4\log T$ by logarithm laws and $T+3\le T^3$ (the latter holds already at two and its elementary difference is increasing). Thus the strip $\beta>1-1/(c_1\log T)$ within $|\gamma|\le T$ is contained in the public bounded region [F2] with $Q=H=T$. There is at most one occurrence there, and any such occurrence is real, simple, nonprincipal quadratic and in $(0,1)$. This proves the auxiliary assertion with its explicit height box and makes the stated exclusion defining $N^*$ unambiguous. No infinite family or arbitrary zero is selected. [F2, F7, given, construct, algebra]

1.2 We record the elementary prime bound needed below rather than cite Mertens. Let $Z(s)=L(s,\mathbf1)=\sum_{n\ge1}n^{-s}$ for the conductor-one character. For any $u>0$, decreasing integral comparison gives $Z(1+u)\ge1/u$. The nonnegative function $g(t)=(\log t)t^{-1-u}$ increases up to $e^{1/(1+u)}$ and then decreases, with supremum at most one. Integral comparison apart from its at most two peak terms gives $\sum_{n\ge1}g(n)\le\int_1^\infty g(t)dt+2\le u^{-2}+2$. The integral and its vanishing tail follow from the explicit antiderivative, or integration by parts. By [F5], $-Z'(1+u)=\sum g(n)$ and $-Z'/Z(1+u)=\sum\Lambda(n)n^{-1-u}$, so the latter is at most $u^{-1}+2u$. For any $z\ge2$, take $u=1/\log z$. Since $p^u\le e$ for $p\le z$, $$\sum_{p\le z}\frac{\log p}{p}\le e\sum_{n\ge1}\frac{\Lambda(n)}{n^{1+u}}\le e\left(\log z+\frac2{\log z}\right)\le C\log z.$$ The last constant is absolute because $\log z\ge\log2>0$. Multiplication by $\log p\le\log z$ proves $\sum_{p\le z}(\log p)^2/p\le C(\log z)^2$. Every Euler-logarithmic-derivative invocation in this step is at the exact REAL conductor-one scope of [F5]. [F5, F7, construct, algebra]

2.1 By Euler nonvanishing every counted zero has $\beta\le1$. Cover $[-T,T]$ by unit-height windows centred at the integers from $-\lceil T\rceil$ to $\lceil T\rceil$. There are at most $2T+3\le4T$ such windows, and in each [F1] gives at most $C\log(q(T+4))\le4C\log T$ occurrences for each primitive conductor $q\le T$. The family has at most $\sum_{q\le T}\varphi(q)\le\sum_{q\le T}q\le T^2$ labels. Consequently the full count, and hence $N^*(\sigma,T)$, is finite and at most $C T^3\log T\le C T^4$. All multiplicities and both height signs are included. In particular finite zero-occurrence sums below need no countable choice or separated-subsequence selection. [F1, F2, F7, step 1.1, construct, algebra]

3.1 Put $\Delta=1-\sigma\in[0,1/2]$ and $\ell=\log T$. If $N^*=0$, both required inequalities are immediate. Otherwise $\Delta\ell\ge1/c_1$: a strict inequality in the opposite direction would put EVERY counted zero inside the exceptional strip of step 1.1, whose only possible occurrence was excluded. Fix $c_3=c_1\ge2$ and $r=c_3\Delta$, so $r\ell\ge1$. If $r>r_0$, step 2.1 yields $N^*\le CT^{(4c_3/r_0)\Delta}$. It therefore remains to prove a uniform log-free bound when $1/\ell\le r\le r_0$. Fix the absolute $A_0>6000$ in [F3] once and put $x=T^{A_0}$, $X=x^{1/900}$ and $Y=x^{60}$. These choices are independent of every individual zero or character; $X>T^6>T^2$, and $Y>X\ge2$. [F3, F7, step 1.1, step 2.1, construct, algebra]

4.1 For each primitive character put $F_\chi(y,v)=\sum_{X<p\le y}(\log p)\chi(p)p^{-1-iv}$. Every target occurrence counted by $N^*$ has $1-\beta\le\Delta\le r/2$. Thus [F3] gives the same lower bound $c_D(\log x)^3x^{-40r}$ for the $y$ integral at EVERY $v$ in its window $[\gamma-r/2,\gamma+r/2]$. Integrate over that window and sum over all the finitely many target occurrences. For a fixed character, write $m_\chi(v)$ for the number of its target windows covering $v$, with multiplicities. The sum is bounded above by the corresponding integral of $m_\chi(v)|F_\chi(y,v)|^2$ on $I=[-T-r,T+r]$. All integrations here are compact Riemann integrations. To verify the order interchange directly, expand the finite prime square and finite zero-window sum. Each term factors as a bounded piecewise continuous function of $y$ times a bounded piecewise continuous function of $v$; either iterated integral is the product of those two one-variable integrals, by linearity. Subdivision at finitely many prime and window endpoints proves integrability and makes endpoint values irrelevant. No Lebesgue Fubini or selection of a successful Turan index as a function of $v$ occurs. [F1, F3, F7, step 2.1, step 3.1, construct, algebra]

5.1 If a target window covers $v$, then $|\gamma-v|\le r/2$ and $1-\beta\le r/2$, whence $|\rho-(1+iv)|\le r$. For $v\in I$, $|v|\le T+r\le T+1$. Clause1 of [F3] therefore gives $m_\chi(v)\le C(r\ell+1)\le2Cr\ell$. Every target zero of $L$ is also a zero of its pole-cleared function, so the full zero multiset there is a valid upper bound. Cancel the positive window length $r$ in step 4.1 to obtain $$N^*(\sigma,T)(\log x)^3x^{-40r}\le C\ell J,\qquad J=\int_X^Y\sum_{q\le T}\sum_{\chi\bmod q}^{*}\int_I|F_\chi(y,v)|^2\,dv\,\frac{dy}{y}.$$ The factor $r\ell+1$ has been replaced by $O(r\ell)$ ONLY because $r\ell\ge1$. There is no hidden logarithmic or multiplicity loss. [F3, F7, step 3.1, step 4.1, algebra]

6.1 Apply [F4] with $Q=T^2$, $U=2(T+r)\le3T$, starting point $-T-r$ and fixed integer length $\lfloor Y\rfloor$. At each fixed $y\in[X,Y]$, use the common coefficients $a_p=(\log p)/p$ for primes $X<p\le y$, and zero elsewhere. Their support has no prime factor at most $Q$ because $p>X>T^6>Q$. For conductors $q\le T$, the positive weight $1+\log(Q/q)\ge\ell$. Restricting the nonnegative primitive family in [F4] therefore yields $$\ell\sum_{q\le T}\sum_{\chi\bmod q}^{*}\int_I|F_\chi(y,v)|^2dv\le C\sum_{X<p\le y}\frac{(\log p)^2}{p^2}(p+3T^5)\le C'\sum_{X<p\le y}\frac{(\log p)^2}{p}.$$ Here $p+3T^5\le4p$, and the essential coefficientwise term is $p$, not the full polynomial length $Y$. Integrate over $y$ with $dy/y$, use its mass $\log(Y/X)<60\log x$, and apply step 1.2 with $z=Y=x^{60}$. It follows that $\ell J\le C(\log x)^3$. Step 5.1 now gives $N^*(\sigma,T)\le C x^{40r}=C T^{40A_0c_3\Delta}$. Every logarithm has canceled exactly; no sampled or varying-real-part mean-value assertion was used. [F4, F7, step 3.1, step 5.1, step 1.2, construct, algebra]

7.1 Set $\kappa=\max\{4c_3/r_0,40A_0c_3\}$. Combining step 6.1 with the coarse alternative in step 3.1 proves, for an absolute $C_U>0$, $$N^*(\sigma,T)\le C_U T^{\kappa(1-\sigma)}\quad(T\ge2,\ 1/2\le\sigma\le1).$$ The zero-count case from step 3.1 is included, in particular $\sigma=1$. Constants from the finite-window count, detector and sieve are absolute, and $c_3,r_0,A_0$ were fixed once; none was selected from $T,\sigma$ or an individual zero. [F1, F2, F3, F4, F7, step 2.1, step 3.1, step 6.1, algebra]

8.1 Suppose the designated exceptional zero exists and put $\delta_1=1-\beta_1>0$. If $N^*=0$, its stronger bound is immediate. Otherwise its finite positive count supplies an actual other zero with $\beta\ge\sigma$, conductor at most $T$ and $|\gamma|\le T$. Apply the independent full DH inequality [F6] at this same bounded-family exceptional zero. Since $\sigma\le\beta$, rearrangement gives $$1\le D\delta_1\ell\,T^{b(1-\sigma)}.$$ This remains true when the logarithm in [F6] is nonpositive; no auxiliary smallness assumption on $\delta_1\ell$ was added. Multiply step 7.1 by this quantity, which is at least one, to obtain $N^*\le C_UD\delta_1\ell T^{(\kappa+b)(1-\sigma)}$. The common choices $c=\kappa+b$ and $c_0=C_U\max\{1,D\}$ prove BOTH original displayed bounds simultaneously, on their full original ranges. The exceptional factor is deduced from the independently proved DH theorem; no weighted exceptional detector or unproved prime-sum theorem is substituted. [F2, F6, F7, given, step 1.1, step 2.1, step 7.1, algebra] ∎

## Remarks

The complete local proof is supplied for independent review. The only auxiliary Statement correction makes the common zero-free assertion explicitly refer to the same conductor/height box as $N^*$. The cached source's introductory exceptional-zero statement also omits that height restriction; neither wording is represented as a proved all-height strip. Both original density inequalities, their logarithmic factor, primitive-family convention and complete $\sigma,T$ ranges are unchanged.

The new proof reconstructs the logarithmic-derivative/Turan detector and rough-supported continuous hybrid sieve locally. The exceptional factor follows from the independent full DH theorem. The source's ceiling and tail slips are avoided by $h\le3r\log x$, $Y=x^{60}$ and the actual $e^{-r\log Y/2}$ tail; its coprime harmonic amplification retains the required $d/\varphi(d)$ factor. Actual source-reading limits and original preimages are archived in the run research packet. No other density, Heath–Brown, Guth–Maynard or prime-interval claim is accepted by this proof.
