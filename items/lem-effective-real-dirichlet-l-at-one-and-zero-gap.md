---
dependency_level: 1
id: lem-effective-real-dirichlet-l-at-one-and-zero-gap
kind: lemma
title: "Effective real Dirichlet L-values at one and strict real zero gaps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-primitive-real-dirichlet-character-is-a-unique-quadratic-discriminant-character
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-principal-dirichlet-character
  - lem-dirichlet-character-values
  - def-dirichlet-l-function
  - thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane
  - lem-real-dirichlet-l-nonzero-at-one
  - thm-dirichlet-l-euler-product
  - def-gauss-sum-dirichlet-character
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - cor-rational-algebraic-integers-are-integers
  - thm-chinese-remainder-theorem
  - thm-bezout-identity
  - thm-fundamental-theorem-of-arithmetic
  - def-unit-group-modulo-n-and-euler-totient
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-geometric-series
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-natural-logarithm
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
  - def-real-power
  - thm-real-power-laws
  - thm-kernel-and-fibres-of-complex-exponential
  - def-real-exponential-function-and-e
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "None. Only prescribed finite residues, finite algebra, compact Riemann integrals and explicit scalar tails are used."
sources:
  references:
    - title: "Ian Petrow, Introduction to Analytic Number Theory"
      url: "https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf"
      locator: "Proposition 10.1 and Remark 10.2, complete proof printed pp. 75–77, assert the effective L(1) bound. The proof here instead reconstructs finite Gauss/logarithm and integer-sum arguments; the source's Mellin proof is not a premise."
    - title: "Nickolas Andersen, Analytic Number Theory"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
      locator: "Section 16.2, Lemmas 16.3–16.4, finite Gauss identities used through their locally proved library interfaces. The finite unit/Ramanujan and zero-gap arguments are reconstructed here."
---

## Statement

Put $\ell_3=\log3$ and define the explicit positive constants
$$c_L=\min\{\log2,\pi/24\},\qquad C_D=e\left(1+\frac3{\ell_3}+\frac4{\ell_3^2}\right),\qquad c_R=\frac12\min\left\{\frac{c_L}{C_D},\frac{\sqrt3}{2}\ell_3^2,\sqrt3\ell_3\right\}.$$
For every primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$,
$$L(1,\chi)\ge\frac{c_L}{\sqrt q}.$$
For every real $\beta\in(0,1)$ such that $L(\beta,\chi)=0$,
$$1-\beta>\frac{c_R}{\sqrt q(\log q)^2}.$$
The constants are absolute and effectively computable from the displayed elementary constants. No simplicity, uniqueness, exceptional-strip or choice-axiom hypothesis is imposed. In particular the corresponding closed real interval $[1-c_R/(\sqrt q(\log q)^2),1)$ contains no real zero in $(0,1)$.

## Statement references

[Petrow, Proposition 10.1 and Remark 10.2](https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf). All displayed constants and both parity arguments are proved locally below.

## Facts & Assumptions

**Given:** The primitive real nonprincipal character and conductor in the Statement. Write $e(x)=\exp(2\pi ix)$, $\zeta=e(1/q)$ and $A=\{a:1\le a\le q,\ (a,q)=1\}$, with its increasing finite order.

[F1] A character is a unit-group homomorphism extended by zero on nonunits, is periodic and multiplicative, and has root-of-unity values on units. Nonprincipal means this homomorphism is nontrivial; primitive means no induction from a proper divisor. The unit group has $\varphi(q)$ elements. The accepted finite classification gives, for a primitive real character, an odd squarefree part of $q$ and $v_2(q)\in\{0,2,3\}$ ([[def-dirichlet-character-modulo-q]], [[def-principal-dirichlet-character]], [[def-primitive-dirichlet-character-and-conductor]], [[lem-dirichlet-character-values]], [[def-unit-group-modulo-n-and-euler-totient]], [[lem-primitive-real-dirichlet-character-is-a-unique-quadratic-discriminant-character]]).

[F2] With $\tau=\sum_{a\bmod q}\chi(a)e(a/q)$, primitivity gives $\sum_{a\bmod q}\chi(a)e(an/q)=\overline{\chi(n)}\tau$ for EVERY integer $n$, including nonunits, and $|\tau|^2=q$ ([[def-gauss-sum-dirichlet-character]], [[lem-primitive-gauss-sum-twist]], [[thm-primitive-gauss-sum-norm]]).

[F3] The defining Dirichlet series holds on real part greater than one; for a nonprincipal character it converges and is holomorphic on real part greater than zero. Euler products are nonzero on real part greater than one, and every real nonprincipal character has $L(1,\chi)\ne0$ ([[def-dirichlet-l-function]], [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]], [[thm-dirichlet-l-euler-product]], [[lem-real-dirichlet-l-nonzero-at-one]]).

[F4] A complex number is an algebraic integer if it satisfies a monic integer polynomial; algebraic integers form a subring of $\mathbb C$, and a rational algebraic integer is an integer ([[def-integral-element-and-algebraic-integer]], [[cor-integral-elements-form-a-subring]], [[cor-rational-algebraic-integers-are-integers]]).

[F5] Positive integers have finite prime factorizations. CRT solves prescribed classes for finite coprime positive moduli, including modulus one. Bezout expresses the positive gcd of two integers not both zero as an integer linear combination ([[thm-fundamental-theorem-of-arithmetic]], [[thm-chinese-remainder-theorem]], [[thm-bezout-identity]]).

[F6] Continuous real functions have compact Riemann integrals, order, linearity and the supremum bound; FTC applies to their continuous derivatives, componentwise for complex integrals ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]]).

[F7] The real geometric series and its tails converge for ratio in $[0,1)$. Exponential has its addition law, derivative and Cartesian modulus formula, and kernel $2\pi i\mathbb Z$. Logarithm is its real inverse, is increasing, has product laws and satisfies $\log x=\int_1^xdt/t$. Positive real powers use this exponential/logarithm convention. Sine and cosine have their addition formulas and the usual signs on $(0,\pi)$. The constant $e$ has its ordinary exponential-series definition ([[thm-geometric-series]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-laws]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-real-exponential-function-and-e]]).

[F8] Principal $\operatorname{Log}$ on the slit plane is holomorphic, has derivative $1/z$, is zero at one and has imaginary part the principal argument ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]]).

[F9] Locally uniform limits of holomorphic functions are holomorphic with every fixed derivative converging locally uniformly. Holomorphic identity extends equality from a nonempty open subset of a connected domain ([[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]]).

## Proof

1.1 Every unit value of $\chi$ is $1$ or $-1$, since it is a real root of unity. Nonprincipality supplies a unit $b$ with $\chi(b)=-1$; take its least positive representative. Multiplication by $b$ permutes $A$, so $\sum_{a\in A}\chi(a)=-\sum_{a\in A}\chi(a)=0$. Thus the counts of its two signs are equal. Every full period sums to zero, and $|\chi(n)|\le1$, so $|A_\chi(x)|\le q$ for $A_\chi(x)=\sum_{n\le x}\chi(n)$. The ordinary series at one is the value of [F3]. It can also be identified directly from real $\sigma>1$: finite Abel summation gives tails at most $2q/(N+1)$ uniformly for $1\le\sigma\le2$, hence its finite-head limit as $\sigma$ decreases to one agrees with continuity of the analytic function there. All sums use the prescribed finite/natural order, with no enumeration choice. [F1, F3, F6, F7, given, construct, algebra]

1.2 The kernel assertion in [F7] shows that $\zeta$ has exact order $q$. In particular $1-\zeta^a\ne0$ for $a\in A$. Reality and the substitution $a\mapsto-a$ give $\overline\tau=\chi(-1)\tau$, while [F2] gives $|\tau|=\sqrt q>0$. Thus $\tau$ is real for even $\chi$ and purely imaginary for odd $\chi$; its sign is not needed. Taking the real or imaginary parts in [F2] yields the finite cosine or sine identities used below, including nonunit $n$ where $\chi(n)=0$. [F1, F2, F7, construct, algebra]

2.1 We will use the Abel sums $L_r=\sum_{n\ge1}\chi(n)r^n/n$ for $0\le r<1$. They converge absolutely. For the weights $b_n=r^n/n$, decreasing to zero for EVERY $0\le r\le1$, the interval partial sums $\sum_{N<n\le m}\chi(n)$ have modulus at most $2q$. Finite summation by parts therefore bounds every tail by $2qb_{N+1}\le2q/(N+1)$, uniformly in $r$, by telescoping the positive differences $b_n-b_{n+1}$. Passing to infinity proves convergence even at $r=1$. Taking a finite initial segment first and then this uniform tail gives $L_r\to L(1,\chi)$ as $r$ increases to one. Finite Abel summation itself follows from telescoping products, or from FTC on the intervals between consecutive integers. Piecewise continuous bounded functions with finitely many integer breaks are Riemann integrable: split there and isolate their finitely many point values in intervals of arbitrarily small total length. No such function is asserted globally continuous. [F6, F7, step 1.1, construct, algebra]

3.1 Suppose first that $\chi$ is even. For a fixed angle $\theta$ and $0\le r<1$, compact integration of the finite geometric series gives $$\log|1-re^{i\theta}|=-\sum_{n\ge1}\frac{r^n\cos(n\theta)}n.$$ Indeed the derivative of $\tfrac12\log(1-2r\cos\theta+r^2)$ is $\operatorname{Re}(-e^{i\theta}/(1-re^{i\theta}))$. On $[0,r_0]$, $r_0<1$, the geometric derivative-series tail is at most $r_0^N/(1-r_0)$; FTC and the supremum bound justify its integration. Both sides vanish at zero. Multiply by $\chi(a)$, sum finitely over $A$, and use $\sum_a\chi(a)\cos(2\pi an/q)=\tau\chi(n)$ from step 1.2. This gives $\sum_a\chi(a)\log|1-r\zeta^a|=-\tau L_r$. As $r$ increases to one, continuity on the finite left sum and step 2.1 give $$\tau L(1,\chi)=-\sum_{a\in A}\chi(a)\log|1-\zeta^a|.$$ Every limit is either finite or controlled by the stated scalar tail. [F2, F6, F7, step 2.1, step 1.2, construct, algebra]

4.1 Define the finite nonzero product $U=\prod_{a\in A}(1-\zeta^a)^{\chi(a)}$. Its exponents are the integers $1$ or $-1$, not branches of complex powers. Pair $a$ with $q-a$. This involution has no fixed unit because $q\ge3$, and evenness gives equal character values on the pair. Each paired product is $|1-\zeta^a|^{2\chi(a)}>0$. Hence $U>0$, $U=\prod_a|1-\zeta^a|^{\chi(a)}$ and $\log U=\sum_a\chi(a)\log|1-\zeta^a|$. Together with step 3.1 this proves $$\sqrt q\,|L(1,\chi)|=|\log U|.$$ Both products range over ALL units, so there is no extra factor two. [F1, F7, step 1.1, step 1.2, step 3.1, construct, algebra]

5.1 For each $a\in A$ let $b_a$ be its least positive inverse modulo $q$, and put $E_a(X)=\sum_{j=0}^{a-1}X^j$, $I_a(X)=\sum_{j=0}^{b_a-1}X^{aj}$ in $\mathbb Z[X]$. At ANY primitive $q$th root $\omega$, the finite geometric identity gives $$E_a(\omega)=\frac{1-\omega^a}{1-\omega},\qquad I_a(\omega)=\frac{1-\omega}{1-\omega^a}.$$ The denominators are nonzero, and $ab_a\equiv1\pmod q$ gives the second formula. Define $P=\prod_{\chi(a)=1}E_a\prod_{\chi(a)=-1}I_a$ and $Q=\prod_{\chi(a)=1}I_a\prod_{\chi(a)=-1}E_a$. Equal sign counts cancel all factors $1-\omega$, so $P(\zeta)=U$, $Q(\zeta)=U^{-1}$. Since $\zeta$ satisfies the monic polynomial $X^q-1$, [F4] makes $U,U^{-1}$ and $V:=U+U^{-1}$ algebraic integers. For any unit $b$, the same polynomial evaluations at $\omega=\zeta^b$ and the permutation $a\mapsto ab$ give $P(\zeta^b)=U^{\chi(b)}$ and $Q(\zeta^b)=U^{-\chi(b)}$. Consequently $(P+Q)(\zeta^b)=V$ for every such $b$. No Galois automorphism or fixed-field theorem has been used. [F1, F4, F7, step 1.1, step 1.2, step 4.1, construct, algebra]

6.1 For every integer $m\ge0$, the finite sum $C_q(m)=\sum_{b\in A}\zeta^{bm}$ is an integer. Apply inclusion–exclusion to the finitely many primes dividing $q$. For a subset of these primes, write $d$ for its product. The complete residue sum over the classes divisible by $d$ is $\sum_{j=0}^{q/d-1}\zeta^{djm}$, equal to $q/d$ if $q/d\mid m$ and zero otherwise, by the finite geometric identity and exact order $q$. Thus $C_q(m)$ is an integer combination of these integers, also when $m=0$. Expand the actual finite integer polynomial $P+Q=\sum_m c_mX^m$. Step 5.1 gives $$\varphi(q)V=\sum_{b\in A}(P+Q)(\zeta^b)=\sum_m c_mC_q(m)\in\mathbb Z.$$ Since $\varphi(q)>0$, $V$ is rational. It is integral by step 5.1, so [F4] implies $V\in\mathbb Z$. This is finite polynomial averaging, with no algebraic closure, norm or class-number hypothesis. [F1, F4, F5, F7, step 1.2, step 5.1, construct, algebra]

7.1 The exact real-character nonvanishing in [F3] and step 4.1 imply $U\ne1$. Hence $V-2=(U-1)^2/U>0$, and the integer $V$ is at least three. Put $W=\max(U,U^{-1})>1$. If $W\le2$, then $W+W^{-1}\le5/2$, because $(5/2)-(W+W^{-1})=(2-W)(2W-1)/(2W)\ge0$. This contradicts $V\ge3$. Therefore $W>2$, and $|\log U|=\log W>\log2$. The even case satisfies $$|L(1,\chi)|>\frac{\log2}{\sqrt q}.$$ This argument uses neither a sign evaluation of the quadratic Gauss sum nor any number-field unit theorem. [F3, F7, step 4.1, step 6.1, algebra]

8.1 With the even case established in step 7.1, now suppose $\chi$ is odd. For $0\le r<1$ define $H_r(\theta)=\sum_{n\ge1}r^n\sin(n\theta)/n$. Uniform geometric integration on each $[0,r_0]$, as in step 3.1, gives $$\sum_{n\ge1}\frac{r^ne^{in\theta}}n=\int_0^r\frac{e^{i\theta}}{1-ue^{i\theta}}\,du=-\operatorname{Log}(1-re^{i\theta}).$$ Along this path the real part is positive, so [F8] and componentwise FTC justify the last equality and its value zero at $r=0$. For $0<\theta<2\pi$, $$1-e^{i\theta}=2\sin(\theta/2)e^{i(\theta/2-\pi/2)},$$ where $\sin(\theta/2)>0$ and the indicated argument lies in $(-\pi/2,\pi/2)$. Continuity of [F8] at this nonzero point gives $H_r(\theta)\to(\pi-\theta)/2$. At integer multiples of $2\pi$ every sine term is zero. This proves the needed endpoint convention directly, with no Fourier convergence theorem. [F6, F7, F8, step 2.1, step 3.1, step 7.1, construct, algebra]

9.1 Put $S=\sum_{a=1}^q a\chi(a)\in\mathbb Z$. The finite Gauss sine identity is $$\sum_{a=1}^q\chi(a)\sin(2\pi na/q)=\frac{\tau\chi(n)}i,$$ since $\chi(-n)=-\chi(n)$, including nonunits. Multiply by $-r^n/(\pi n)$ and sum; absolute convergence for $r<1$ permits the finite residue interchange. On passing to $r=1$, step 8.1 makes the left side $\sum_{a=1}^{q-1}\chi(a)(a/q-1/2)=S/q$, since the period sum is zero and $\chi(q)=0$. The right side tends to $i\tau L(1,\chi)/\pi$ by step 2.1. Thus $$\frac S q=\frac{i\tau L(1,\chi)}\pi,\qquad |L(1,\chi)|=\frac{\pi|S|}{q\sqrt q}.$$ By [F3] and $\tau\ne0$, $S$ is NONZERO. All limiting residue sums are finite; the endpoint at $a=q$ has zero coefficient, rather than an omitted half-value contribution. [F1, F2, F3, step 1.1, step 2.1, step 1.2, step 8.1, construct, algebra]

10.1 For any $b\in A$, let $r_b(a)$ be the representative in $\{1,\ldots,q\}$ of $ba$ modulo $q$. It permutes that full finite set and $\chi(r_b(a))=\chi(b)\chi(a)$. Therefore $\chi(b)S=\sum_a r_b(a)\chi(a)\equiv bS\pmod q$, and $$q\mid(b-\chi(b))S.$$ Let $g$ be the positive gcd of $q$ and all the finitely many integers $b-\chi(b)$, $b\in A$. Repeated [F5] expresses $g$ as an integer linear combination of those integers and $q$. Multiplying by $S$ gives $q\mid gS$, hence $q/g\mid S$ by integer cancellation. This remains valid if some differences are zero; the gcd is positive because its list includes $q>0$. [F1, F5, step 9.1, construct, algebra]

11.1 Use ONLY the conductor shape in [F1]. For each prime $p\ge5$ dividing $q$, its exponent is one, so $p$ and $q/p$ are coprime. CRT in [F5], including $q/p=1$, supplies a unit $b$ with $b\equiv2\pmod p$, $b\equiv1\pmod{q/p}$. Then $b-\chi(b)$ is one or three modulo $p$, and is not divisible by $p$. Thus $p\nmid g$. Since $g\mid q$, the only possible prime factors of $g$ are two and three, with exponents at most three and one respectively. Hence $g\mid24$. The nonzero integer $S$ is a multiple of $q/g$, so $|S|\ge q/g\ge q/24$. Step 9.1 proves $$|L(1,\chi)|\ge\frac{\pi}{24\sqrt q}.$$ The assertion $q/24\mid S$ is NOT needed or made, since $q/24$ need not be an integer. The exact divisibility was $q/g\mid S$. [F1, F5, step 9.1, step 10.1, algebra]

12.1 For real $\sigma>1$, every Euler factor in [F3] is positive. The convergent product is nonzero, so $L(\sigma,\chi)>0$. Continuity at one and [F3] imply $L(1,\chi)>0$. Combining the even and odd bounds proves $L(1,\chi)\ge c_L/\sqrt q$ with the displayed $c_L$. The two parities exhaust the possibilities because $\chi(-1)\in\{1,-1\}$. The modulus-one/two cases have no real nonprincipal primitive character and are outside $q\ge3$. [F1, F3, F7, step 7.1, step 11.1, algebra]

13.1 To convert step 12.1 into a zero gap, we prove an EXPLICIT derivative estimate without any unknown Pólya–Vinogradov constant. Finite Abel summation and $|A_\chi(x)|\le q$ give locally uniform tails for $\sum\chi(n)n^{-s}$ on $\operatorname{Re}s\ge\epsilon>0$, $|s|\le M$, bounded by $qN^{-\epsilon}(1+M/\epsilon)$. This is the endpoint bound plus $q|s|\int_N^\infty x^{-\operatorname{Re}s-1}dx$, using the integer-piece integrals justified in step 2.1. The finite sums are entire; [F9] gives local uniform derivative convergence. Their limit is the function of [F3], or is identified with it by holomorphic identity from real part greater than one. Consequently $$L'(\sigma,\chi)=-\sum_{n\ge1}\chi(n)\log n\,n^{-\sigma}\quad(\sigma>0).$$ The derivative-series tails can also be bounded directly by finite Abel summation and the vanishing elementary tails $N^{-\epsilon}(1+\log N)$. This justifies each subsequent finite/tail split at its actual real argument. [F3, F6, F7, F9, step 1.1, step 2.1, step 12.1, construct, algebra]

14.1 Write $\ell=\log q$ and $a_q=\max(1/2,1-1/\ell)$. For $a_q\le\sigma\le1$, $q^{1-\sigma}\le e$. The part $n\le q$ of step 13.1 has modulus at most $e\ell\sum_{n\le q}1/n\le e\ell(1+\ell)$ by decreasing integral comparison. For the tail put $g(x)=\log x\,x^{-\sigma}$. Its derivative obeys $|g'(x)|\le x^{-\sigma-1}(1+\sigma\log x)$. Finite Abel summation and $|A_\chi|\le q$ bound the infinite tail by $$qg(q)+q\int_q^\infty x^{-\sigma-1}(1+\sigma\log x)\,dx=q^{1-\sigma}(2\ell+2/\sigma)\le e(2\ell+4).$$ The endpoint at infinity vanishes, and the integral is $q^{-\sigma}(\ell+2/\sigma)$ by FTC/integration by parts; all terms have the explicit vanishing logarithmic-power tails. Thus $$|L'(\sigma,\chi)|\le e(\ell^2+3\ell+4)\le C_D\ell^2,$$ since $\ell\ge\ell_3>0$. No implicit conductor-dependent or ineffective constant entered this estimate. [F6, F7, step 1.1, step 13.1, construct, algebra]

15.1 Let $\beta\in(0,1)$ be any real zero. If $\beta\ge a_q$, compact componentwise FTC on $[\beta,1]$ and step 14.1 give $L(1,\chi)\le(1-\beta)C_D\ell^2$. Step 12.1 therefore yields $(1-\beta)\sqrt q\ell^2\ge c_L/C_D$. If $\beta<a_q$, then $$ (1-\beta)\sqrt q\ell^2>\min\{(\sqrt q/2)\ell^2,\sqrt q\ell\}\ge\min\{(\sqrt3/2)\ell_3^2,\sqrt3\ell_3\}.$$ Positive square roots and logarithms are increasing on $q\ge3$. Taking HALF the minimum of these three positive explicit quantities gives exactly the strict bound with $c_R$ in the Statement, including $\beta=a_q$ in the first case and every conductor endpoint. These constants use only ordinary effectively computable $e,\pi$, logarithms of two and three and $\sqrt3$, with no hidden existential constant. The strict inequality excludes the stated closed zero-free endpoint. All zero multiplicities are allowed; no simplicity or uniqueness premise was used. [F6, F7, given, step 12.1, step 14.1, algebra] ∎

## Remarks

The complete local proof is supplied for independent review. The arithmetic is finite polynomial/integer arithmetic; the only use of the accepted real-character classification is its conductor shape. No class-number formula, field realization, Galois fixed-field theorem, Hecke/CFT, Mellin/Gamma estimate or choice axiom is a premise. The primitive Gauss identities and real nonvanishing-at-one are used at their literal local public scopes. This does not establish log-free density or its separate exceptional-delta detector/mean-value argument.
