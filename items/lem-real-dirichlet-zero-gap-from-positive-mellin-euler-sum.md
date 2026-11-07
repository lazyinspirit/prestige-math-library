---
dependency_level: 0
id: lem-real-dirichlet-zero-gap-from-positive-mellin-euler-sum
kind: lemma
title: A real Dirichlet zero gap from positive Mellin coefficients and a finite Euler
  sum
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- def-dirichlet-character-modulo-q
- def-principal-dirichlet-character
- def-dirichlet-l-function
- lem-nonprincipal-dirichlet-character-partial-sums
- thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane
- thm-dirichlet-series-summatory-integral
- thm-dirichlet-l-euler-product
- thm-riemann-zeta-continuation-to-the-right-half-plane
- def-euler-gamma-function
- thm-gamma-functional-equation
- thm-gamma-meromorphic-continuation
- cor-gamma-factorial-values
- thm-residue-theorem-null-homologous-cycle
- thm-weierstrass-convergence-holomorphic-functions
- thm-uniform-limit-interchanges-complex-line-integrals
- def-real-exponential-function-and-e
- lem-exponential-series-has-infinite-radius
- def-complex-exponential
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-natural-logarithm
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- thm-additivity-over-subintervals
- thm-geometric-series
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-dependent-choice
justified_by: []
axiom_use: FullAC+CCretained at the actual selected supplier context. The scalar proof
  makes explicit finite/recursive choices only, but current complex/norm/metric prerequisite
  conventions reach DC-bearing compactness interfaces; fullACsuppliesDC. No unproved
  ZF refinement or unrelated provider repair is claimed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Haneke, Über die reellen Nullstellen der Dirichletschen L-Reihen
    url: https://www.impan.pl/shop/publication/transaction/download/product/98676?download.pdf
    locator: Acta Arithmetica22(1973),391–421, complete scanned article visually read.
      Arithmetic reduced-form counts and positive Mellin/Euler estimates reconstructed
      locally; no theorem imported.
  - title: W. Haneke, Corrigendum
    url: https://www.impan.pl/shop/publication/transaction/download/product/101046?download.pdf
    locator: Acta Arithmetica31(1976),99–100, full two-page correction visually read;
      the ramified-prime reciprocal sum is retained.
---

## Statement

Assume AC and Countable Choice. Let $q\ge3$ be an integer, let $\chi$ be any real nonprincipal Dirichlet character modulo $q$, not necessarily primitive, and assume $L(1,\chi)>0$, using its holomorphic continuation on $\operatorname{Re}s>0$. Put
$$S(\chi,q)=\sum_{p\le q^{16}}\frac{1+\chi(p)}p,\qquad C_G=121(25/6)^6,\qquad C_A=1000+100C_G.$$
For every real $\beta\in(0,1)$ with $L(\beta,\chi)=0$, irrespective of multiplicity,
$$1-\beta\ge C_A^{-1}\min\{1/\log q,\ L(1,\chi)e^{-S(\chi,q)}\}.$$
If $0<1-\beta<1/(100\log q)$, the sharper intermediate bound is $L(1,\chi)/(1-\beta)\le C_A e^{S(\chi,q)}$. The constants are explicit; no zero-free, Siegel, Stark or class-field theorem is assumed.

## Facts & Assumptions

**Given:** The data and AC+CC hypotheses in the Statement.

[F1] A real character takes values in $\{0,1,-1\}$, is periodic and completely multiplicative; a nonprincipal character has complete-period sum zero and partial sums bounded by $q$. Its summatory integral gives $L(s,\chi)=s\int_1^\infty A_\chi(x)x^{-s-1}dx$ for $\operatorname{Re}s>0$, where $|A_\chi(x)|\le q$. Its Euler product converges absolutely on $\operatorname{Re}s>1$. [[def-dirichlet-character-modulo-q]] [[def-principal-dirichlet-character]] [[def-dirichlet-l-function]] [[lem-nonprincipal-dirichlet-character-partial-sums]] [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]] [[thm-dirichlet-series-summatory-integral]] [[thm-dirichlet-l-euler-product]]

[F2] On the right half-plane, $\zeta(s)=s/(s-1)-s\int_1^\infty\{x\}x^{-s-1}dx$, with residue one at its sole pole $1$. [[thm-riemann-zeta-continuation-to-the-right-half-plane]]

[F3] Euler's integral defines Gamma on the right half-plane; $\Gamma(z+1)=z\Gamma(z)$, its continued poles are $-j$ with residues $(-1)^j/j!$, and $\Gamma(j+1)=j!$. [[def-euler-gamma-function]] [[thm-gamma-functional-equation]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-factorial-values]]

[F4] Rectangular contour residues, locally uniform holomorphic limits and uniform passage through finite line integrals are available at their actual local interfaces. The estimates below also directly majorize the improper vertical tails. [[thm-residue-theorem-null-homologous-cycle]] [[thm-weierstrass-convergence-holomorphic-functions]] [[thm-uniform-limit-interchanges-complex-line-integrals]]

[F5] Exponentials have the convergent series, their complex modulus is $|e^{u+iv}|=e^u$, and logarithms have their product/integral laws. Monotone additive integration and geometric series justify the positive elementary majorants below. [[def-real-exponential-function-and-e]] [[lem-exponential-series-has-infinite-radius]] [[def-complex-exponential]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[def-natural-logarithm]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]] [[thm-additivity-over-subintervals]] [[thm-geometric-series]]

[A1] Full AC and CC are retained at the literal local supplier interfaces. AC implies DC and hence covers inherited DC requirements; no necessity or choice-free refinement is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 Put $\delta=1-\beta$. If $\delta\ge1/(100\log q)$ the final minimum bound follows since $C_A>100$. Otherwise $0<\delta<1/(100\log q)\le1/50$ by $\log q\ge\log2\ge1/2$, so $\beta>49/50$. Write $a_n=\sum_{d\mid n}\chi(d)$. Its prime-power values are $j+1$ for $\chi(p)=1$, one for $\chi(p)=0$, and one or zero according as $j$ is even or odd for $\chi(p)=-1$. Thus $0\le a_n\le d(n)\le n$ and $Z(s)=\zeta(s)L(s,\chi)=\sum a_nn^{-s}$ on $\operatorname{Re}s>1$. In particular $\sum a_nn^{-2}\le(\sum n^{-2})^2<\infty$. [F1, F2, F5, A1, given, algebra]

1.2 We prove the needed kernel inversion locally. On any fixed bounded interval of real parts, shift Gamma by a sufficiently large integer $m$ in [F3]. Euler's integral bounds the numerator by $\Gamma(\sigma+m)$, bounded on that fixed positive interval, and each denominator has modulus at least $|t|$ for $|t|\ge1$. Thus $\Gamma(\sigma+it)=O((1+|t|)^{-m})$ uniformly there away from bounded-height poles. In particular $\int_{\mathbb R}|\Gamma(1/2+it)|dt<\infty$, and the same holds on any fixed positive line. For $x,c>0$, shift the contour of $\Gamma(z)x^{-z}$ from $c$ to $-N-1/2$, taking height to infinity first. The horizontal integrals vanish by that fixed-strip bound. The enclosed residues are $(-1)^jx^j/j!$, $0\le j\le N$. Repeated recurrence bounds the left-line integral by a fixed constant times $x^{N+1/2}/\prod_{j=0}^N(j+1/2)$, because its numerator is $|\Gamma(1/2+it)|$ and every denominator modulus is at least $j+1/2$. This tends to zero for fixed $x$, by the factorial growth of the denominator. Letting $N\to\infty$ and using the exponential series proves $e^{-x}=(2\pi i)^{-1}\int_{(c)}\Gamma(z)x^{-z}dz$, absolutely convergently. This uses no separate Mellin supplier or effective Stirling constant. [F3, F4, F5, construct, algebra]

2.1 Set $y=q^{-8}$, $X=q^{16}$ and $M=\sum_{n\ge1}a_nn^{-\beta}e^{-ny}$. Apply step 1.2 with $c=2-\beta$ and $x=ny$ and sum. The integral of $|\Gamma(2-\beta+it)|$ times $y^{\beta-2}\sum a_nn^{-2}$ is finite, so finite-sum interchanges followed by this absolute tail majorant give $M=(2\pi i)^{-1}\int_{(2)}\Gamma(s-\beta)y^{\beta-s}Z(s)ds$. Shift to $\operatorname{Re}s=1/2$. By [F1]–[F3], the Gamma pole at $s=\beta$ is cancelled by the actual $L$ zero, even if multiple; no other Gamma pole is crossed. The sole remaining pole is at one, of residue $\Gamma(\delta)y^{-\delta}L(1,\chi)$. On the strip the integral formulas [F1] and [F2] give polynomial growth of $Z$ at large height, while the fixed recurrence bound of step 1.2 gives arbitrary fixed polynomial decay of Gamma, so the horizontal integrals tend to zero. It follows that $M=\Gamma(\delta)y^{-\delta}L(1,\chi)+R$, where $R$ is the integral on the half line. [F1, F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 On that line, [F1] gives $|L(1/2+it,\chi)|\le2q(1+|t|)$, and [F2] gives $|\zeta(1/2+it)|\le4(1+|t|)$. For $z=1/2-\beta+it$, its real part lies in $(-1/2,-12/25)$. In $\Gamma(z)=\Gamma(z+6)/\prod_{j=0}^5(z+j)$, Euler's integral bounds the numerator by $1+5!=121$: integrate on $(0,1)$ with exponent greater than four and on $(1,\infty)$ with exponent less than five. Every denominator is at least $(6/25)(1+|t|)$, since its real part has modulus at least $12/25$ and $\max(12/25,|t|)\ge(6/25)(1+|t|)$. Hence $|\Gamma(z)|\le C_G(1+|t|)^{-6}$. Integrating the resulting $(1+|t|)^{-4}$ bound yields $|R|\le8C_G qy^{\beta-1/2}/(3\pi)\le8C_G$: here $\beta>49/50$ makes $qy^{\beta-1/2}=q^{1-8(\beta-1/2)}<1$. All bounds are independent of $q$ and $\beta$ in this branch. [F1, F2, F3, F5, step 1.1, step 2.1, algebra]

3.2 For the sum $M$ from step 2.1 and $n\le X$ one has $n^\delta\le e^{16/100}<2$, so the prefix of $M$ is at most $2\sum_{n\le X}a_n/n$. For its tail use $a_nn^{-\beta}\le n$. Put $a=q^8$, so $X=a^2$, and $r=e^{-1/a}$. The exact differentiated geometric sum is $\sum_{n>X}nr^n=r^{X+1}((X+1)/(1-r)+r/(1-r)^2)$. Since $1-r\ge1/(3a)$, it is at most $15a^3e^{-a}\le90$; the latter follows from $e^a\ge a^3/6$. Positivity and prime-power multiplicativity give $$\sum_{n\le X}\frac{a_n}n\le\prod_{p\le X}(1-1/p)^{-1}(1-\chi(p)/p)^{-1}\le e^{S(\chi,q)+2}.$$ Indeed the logarithmic terms of degree one give precisely $S$, including the ramified primes, and the higher terms are bounded by $2\sum_{n\ge2}1/[n(n-1)]=2$. Thus $M\le(2e^2+90)e^S$; here $S\ge0$. [F1, F5, step 1.1, step 2.1, algebra]

4.1 Euler's integral on $[1,2]$ gives $\Gamma(\delta)=\Gamma(1+\delta)/\delta\ge e^{-2}/\delta$ and $y^{-\delta}\ge1$. Combining steps 2.1–3.2 therefore gives $L(1,\chi)/\delta\le e^2(2e^2+90+8C_G)e^S<C_Ae^S$, since the exponential series gives $e<3$ and $9(18+90+8C_G)=972+72C_G<1000+100C_G$. This proves the sharper branch. Combining it with the large-gap branch of step 1.1 proves the stated minimum bound for every real zero, without a restriction on multiplicity. [F3, F5, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎
