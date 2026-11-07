---
dependency_level: 3
id: lem-dirichlet-character-hybrid-reflection-large-values
kind: lemma
title: Hybrid reflection bounds for ancestor and primitive character families
deps:
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-dirichlet-l-function
- lem-dirichlet-character-values
- thm-dirichlet-character-orthogonality
- thm-dirichlet-character-primitive-induction
- def-induced-dirichlet-character
- thm-primitive-dirichlet-l-analytic-continuation
- thm-primitive-dirichlet-l-functional-equation
- def-completed-dirichlet-l-function
- thm-primitive-gauss-sum-norm
- def-gauss-sum-dirichlet-character
- thm-gamma-functional-equation
- thm-gamma-meromorphic-continuation
- thm-gamma-weierstrass-product
- thm-stirling-formula-gamma
- thm-residue-theorem-null-homologous-cycle
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- thm-identity-theorem-holomorphic-functions
- def-divisor-counting-function
- thm-canonical-prime-factorisation
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-logarithm-derivative-and-integral
- thm-p-series-real-exponents
- lem-dirichlet-character-hybrid-mean-square-and-separated-sampling
- lem-density-mellin-inversion-for-exponential-kernel
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: None. Finite indexed character sums, compact Riemann and parametric contour
  integrals, and explicit absolute tails; no measure-space mean-value or choice premise.
sources:
  references:
  - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Section27.2, Lemmas27.8–27.12 and Theorems27.13–27.15, printed pp.157–175.
      Reflection is reconstructed with an exponential Mellin majorant, the actual
      primitive-ancestor family, and centered long-block sampling.
---

## Statement

Choose one of the following two finite families, with all label weights equal to one:

1. Labels are all characters $\chi$ modulo a positive integer $q$, evaluated at their unique primitive ancestors $\psi_\chi=\chi^*$; put $E=q$.
2. Labels are pairs $(d,\chi)$ with $1\le d\le Q$ and $\chi$ primitive modulo $d$, for a positive integer $Q$, evaluated at $\psi_{(d,\chi)}=\chi$; put $E=Q^2$.

Include the primitive character of conductor one. Let $U\ge2$ and $A\in\mathbb R$ be real, and let $N\ge1$ be an integer, and put $H=E(U+2)$ and $B=\log(2H)$. For each label $\ell$ take a finite index set $J_\ell$, possibly empty, and samples $s_{\ell,j}=\sigma_{\ell,j}+it_{\ell,j}$ satisfying
$$\sigma_{\ell,j}\ge0,\qquad A\le t_{\ell,j}\le A+U,\qquad |t_{\ell,j}-t_{\ell,k}|\ge1\quad(j\ne k).$$
For coefficients $a_1,\ldots,a_N\in\mathbb C$ independent of the sample indices, define
$$D(s,\psi)=\sum_{n\le N}a_n\psi(n)n^{-s},\quad G=\sum_{n\le N}|a_n|^2,\quad G_2=\sum_{n\le N}\tau(n)|a_n|^2,\quad R=\sum_\ell|J_\ell|,$$
where $\tau(n)$ is the positive-divisor count and $n^{-s}=\exp(-s\log n)$. There is an absolute constant $C>0$ such that
$$\sum_\ell\sum_{j\in J_\ell}|D(s_{\ell,j},\psi_\ell)|^2\le C\left(NG+R^{2/3}(NH)^{1/3}G^{2/3}G_2^{1/3}B\right).$$
The estimate holds for every $N$, with no restriction $N\le H$; real parts may vary arbitrarily. Times from different labels may coincide, and in the first family labels remain the actual characters modulo $q$.

## Statement references

[Montgomery–Vaughan, Theorems27.13–27.15](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf). The primitive-ancestor interface and long-block estimate are proved below, rather than inferred from the source's fixed-modulus character formulation.

## Facts & Assumptions

**Given:** The exact finite family, indexed samples and coefficients in the Statement. Below $r,s$ index samples, while $\psi_r$ denotes their evaluated primitive character.

[F1] Characters are multiplicative and periodic, with modulus at most one; their values on units are roots of unity, and nonprincipal period sums vanish. Every character has a unique primitive ancestor, whose induction to a fixed multiple of its conductor is the specified unique zero-extended function. Orthogonality at the identity counts the characters modulo $d$ by $\varphi(d)\le d$ ([[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[def-induced-dirichlet-character]], [[thm-dirichlet-character-primitive-induction]], [[lem-dirichlet-character-values]], [[thm-dirichlet-character-orthogonality]]).

[F2] The defining Dirichlet series is valid on $\operatorname{Re}z>1$. Primitive nonprincipal $L$-functions are entire, and conductor one is zeta with its unique simple pole at one. With parity $a$, the completion is $(d/\pi)^{(z+a)/2}\Gamma((z+a)/2)L(z,\psi)$ and obeys the primitive functional equation with $\varepsilon_\psi=\tau(\psi)/(i^a\sqrt d)$ of modulus one. These public interfaces include conductor one, where $\varepsilon=1$. Holomorphic identity extends an equality from its open convergence half-plane ([[def-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]], [[def-completed-dirichlet-l-function]], [[def-gauss-sum-dirichlet-character]], [[thm-primitive-gauss-sum-norm]], [[thm-identity-theorem-holomorphic-functions]]).

[F3] Gamma satisfies recurrence and meromorphic continuation; its reciprocal is entire and has its real-coefficient product. Sector Stirling is uniform on a closed sector away from the negative real axis ([[thm-gamma-functional-equation]], [[thm-gamma-meromorphic-continuation]], [[thm-gamma-weierstrass-product]], [[thm-stirling-formula-gamma]]).

[F4] Compact continuous Riemann integrals are linear, monotone and satisfy FTC; the same endpoint formula applies componentwise to complex functions ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]]).

[F5] The ancestor continuous hybrid estimate has coefficient weight $qV+n$, and its sampled version gains $\delta^{-1}+\log(2N)$. The primitive-conductor continuous and sampled estimates have coefficient weight $Q^2V+n$ and positive label weight $d/\varphi(d)\ge1$, which may be dropped after application. They hold on every real interval of length $V\ge2$, for fixed coefficients and finite indexed separated samples ([[lem-dirichlet-character-hybrid-mean-square-and-separated-sampling]]).

[F6] For $x,c>0$, $e^{-x}=(2\pi i)^{-1}\int_{(c)}\Gamma(w)x^{-w}dw$, absolutely ([[lem-density-mellin-inversion-for-exponential-kernel]]).

[F7] The rectangular residue theorem applies when no pole lies on the contour. Piecewise-$C^1$ contour integrals equal their parametric Riemann integrals ([[thm-residue-theorem-null-homologous-cycle]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F8] Divisor counts and finite prime-power decompositions have their usual definitions ([[def-divisor-counting-function]], [[thm-canonical-prime-factorisation]]).

[F9] Exponential is entire with derivative itself and $|e^z|=e^{\operatorname{Re}z}$; $\log x=\int_1^xdt/t$, and $\sum n^{-p}$ converges for $p>1$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-logarithm-derivative-and-integral]], [[thm-p-series-real-exponents]]).

## Proof

1.1 Use Riemann integrals on compact intervals, componentwise for complex functions. Order and linearity give $|\int f|\le\int|f|$ by rotating the integral to the positive real axis. Expanding $\int(u-\lambda v)^2\ge0$ and its finite weighted-sum analogue proves both Cauchy–Schwarz inequalities, including a zero quadratic coefficient (then the linear coefficient is zero). Bounded functions continuous away from finitely many breaks are integrable: subdivide there, isolate the breakpoints in intervals of arbitrarily small total length, and use upper-minus-lower sums. Finite point changes do not affect the integral. Finite Abel summation follows by FTC on the intervals between consecutive integers and telescoping. Every improper passage below is a compact passage followed by its stated scalar absolute-tail bound. [F4, F9, construct, algebra]

1.2 There are at most $E$ labels: the first count is $\varphi(q)\le q$, and the second is at most $\sum_{d\le Q}\varphi(d)\le\sum_{d\le Q}d\le Q^2$. Same-label separation therefore gives $R\le E(\lfloor U\rfloor+1)\le H$. For a pair of evaluated primitive characters of conductors $d_r,d_s$, their arithmetic product $\xi=\psi_r\overline\psi_s$ is a character modulo $e=\operatorname{lcm}(d_r,d_s)$. In the ancestor family $e\mid q$, so $e\le E$; in the primitive family $e\le d_rd_s\le Q^2=E$. The product is principal exactly when the inductions of $\psi_r,\psi_s$ to $e$ agree; uniqueness of their primitive ancestor then gives equality of the primitive characters. In the first family equal ancestors induce the same actual character modulo $q$, so this is exactly equality of the actual labels. Thus principal pair terms are confined to same-label separated rows. [given, F1, construct, algebra]

1.3 For a character $\xi$ modulo $e$ let $\eta$ be its primitive ancestor of conductor $f\mid e$ and parity $a$. Finite exclusion of primes dividing $e$ in the absolutely convergent series gives $L(z,\xi)=L(z,\eta)\prod_{p\mid e,p\nmid f}(1-\eta(p)p^{-z})$ for $\operatorname{Re}z>1$, and hence meromorphically. Apply the primitive FE to obtain $$L(z,\xi)=\varepsilon_\eta C_a(z)P_\xi(z)L(1-z,\overline\xi),\quad C_a(z)=\pi^{z-1/2}\frac{\Gamma((1-z+a)/2)}{\Gamma((z+a)/2)},\quad P_\xi(z)=f^{1/2-z}\prod_{p\mid e,p\nmid f}\frac{1-\eta(p)p^{-z}}{1-\overline{\eta(p)}p^{z-1}}.$$ For real $u>1$, integral comparison gives $(u-1)^{-1}\le\zeta(u)\le1+(u-1)^{-1}$; since [F2] gives a simple pole, its residue is one. Thus the only pole of $L(z,\xi)$ is a possible principal pole at one, with residue $\prod_{p\mid e}(1-1/p)=\varphi(e)/e$. The finite Euler product also proves this residue for the principal conductor-one ancestor. [F1, F2, F4, F9, algebra]

2.1 Write $z=\sigma+it$. For $\sigma\le1/2$, set $r=p^{-\sigma}$, $u=p^{\sigma-1}$ and $v=\eta(p)p^{-it}$, of modulus one. Direct expansion gives $u|1-vr|^2-r|1-\overline v u|^2=(u-r)(1-ru)\le0$. Thus each Euler quotient has modulus at most $p^{1/2-\sigma}$, proving $|P_\xi(z)|\le e^{1/2-\sigma}$, since $f\prod_{p\mid e,p\nmid f}p$ divides $e$. The denominators are nonzero on $\operatorname{Re}z<1$. Gamma's numerator poles in $C_a$ are at $1+a+2j\ge1$; reciprocal Gamma is entire. On any fixed strip $-M\le\sigma\le1/2$, sector Stirling gives $|\Gamma((1-\sigma+a-it)/2)|\asymp_M (|t|/2)^{(a-\sigma)/2}e^{-\pi|t|/4}$ and $|1/\Gamma((\sigma+a+it)/2)|\asymp_M (|t|/2)^{(1-\sigma-a)/2}e^{\pi|t|/4}$ at large height. The exponents add to $1/2-\sigma$, so $|C_a(\sigma+it)|\le C_M(|t|+2)^{1/2-\sigma}$ at large height; compactness of the pole-free remainder handles bounded height, uniformly over the two parities. On the critical line numerator and denominator are conjugates, and the Euler quotient factors are conjugate pairs, so $|C_aP_\xi|=1$. In particular at $\sigma=-1/2$, $|C_aP_\xi|\le Ce(|t|+2)$ with an absolute constant. [F3, F9, step 1.3, algebra]

2.2 We need a block sampler without $\log V$. For coefficients supported on $V<n\le cV$, $c>1$ fixed, set $F_\psi(t)=V^{it}\sum c_n\psi(n)n^{-it}$. Its modulus is unchanged and its derivative has coefficients $-i\log(n/V)c_n$, bounded by $\log c$ times $|c_n|$. Center a length-one interval $I_r$ at each time. Interiors are disjoint within a label and lie in $[A-1,A+U+1]$. FTC and averaging give $|F(t_r)|^2\le\int_{I_r}|F|^2+2\int_{I_r}|FF'|$. Apply the CONTINUOUS estimate of [F5] on this enlarged interval of length $U+2\ge4$, to the polynomials after canceling the unit phase $V^{it}$. Use step 1.1 and the support bound on both coefficient forms. In the primitive branch retain $d/\varphi(d)\ge1$ until after applying the valid estimate, then drop it. We obtain $$\sum_r\left|\sum c_n\psi_r(n)n^{-it_r}\right|^2\le C_c(H+V)\sum|c_n|^2.\tag{1}$$ It holds for arbitrary real $V>0$, for truncated supports, and with different-label coincident times. [F5, F9, step 1.1, step 1.2, construct, algebra]

2.3 First suppose the coefficients are supported on $V<n\le2V$, real $V\ge2$, and all $\sigma_r=0$. Put $b_r=\sum a_n\psi_r(n)n^{-it_r}$ and $S=\sum|b_r|^2$. The exact identity $S=\sum_n a_n\sum_r\overline b_r\psi_r(n)n^{-it_r}$ and finite Cauchy–Schwarz give $S^2\le G\sum_{V<n\le2V}|\sum_r\overline b_r\psi_r(n)n^{-it_r}|^2$. Let $k(x)=e^2x^2e^{-x}$ and $K(w)=e^2\Gamma(w+2)$. The nonnegative weight $k(x)\ge1$ on $1\le x\le2$, and $(2V/n)^{1/2}\ge1$ on the block. Majorize the square sum BEFORE expanding, then take absolute values of the pair sums, to bound it by $$\sqrt{2V}\sum_{r,s}|b_rb_s|\left|\sum_{n\ge1}k(n/V)\psi_r(n)\overline{\psi_s(n)}n^{-1/2-i(t_r-t_s)}\right|.\tag{2}$$ The new $n$ sum converges absolutely since $k$ has an exponential tail and the sample family is finite. [F1, F9, step 1.1, construct, algebra]

2.4 On the last indices $n=1,2$, trivially $n^{-\sigma_r}\le1$ and $|\psi_r(n)|\le1$, so the total squared sum is at most $2RG_{\rm small}$. Step 1.2 gives $R\le H$, and $G_{2,\rm small}\ge G_{\rm small}$. Thus $RG_{\rm small}\le R^{2/3}H^{1/3}G_{\rm small}^{2/3}G_{2,\rm small}^{1/3}$, including $R=0$ or zero coefficients. This is (4) with a fixed base size. [F1, F8, step 1.1, step 1.2, algebra]

3.1 The finite contour growth needed later is explicit. If $\xi$ is nonprincipal, complete periods give $|\sum_{n\le x}\xi(n)|\le e$; finite Abel summation gives $L(z,\xi)=z\int_1^\infty(\sum_{n\le x}\xi(n))x^{-z-1}dx$ and $|L(z,\xi)|\le e|z|/\operatorname{Re}z$ on $\operatorname{Re}z>0$. On compact subsets the derivative tails are bounded by $Ce x^{-1-\epsilon}(1+\log^j x)$; substitution $u=\log x$ and finite integration by parts prove convergence and identify the continuation. For a principal character subtract its mean $\varphi(e)x/e$ from the summatory function: the residual is bounded by $2e$, and the same formula gives $L(z,\xi)=\varphi(e)z/(e(z-1))+z\int_1^\infty R(x)x^{-z-1}dx$. These formulas give polynomial growth on $\operatorname{Re}z\ge1/4$ away from the displayed pole. On the remaining part of any fixed real strip use step 1.3, step 2.1 and the positive-half-plane formula at $1-z$, whose real part is at least $3/4$. At sufficiently large imaginary heights all reflected principal poles are avoided. This is fixed-parameter polynomial growth, not an unspecified conductor-uniform order bound. [F1, F2, F4, F9, step 1.1, step 1.3, step 2.1, algebra]

4.1 Exponential Mellin inversion with its line shifted by two gives $k(x)=(2\pi i)^{-1}\int_{(c)}K(w)x^{-w}dw$ for every $c>-2$. Write $\Delta=t_r-t_s$, $\xi=\psi_r\overline\psi_s$. On $c=1$, the pair sum in (2) is $(2\pi i)^{-1}\int_{(1)}L(1/2+i\Delta+w,\xi)K(w)V^w dw$. The exchange follows first for finite sums/vertical cutoffs, then from the product majorant $\sum n^{-3/2}\int|K(1+iv)|dv$. Use rectangles whose heights exceed $2(U+1)$ and shift to $\operatorname{Re}w=-1$. Since $|\Delta|\le U$, no principal pole lies on their sides. The only possible residue is $(\varphi(e)/e)K(1/2-i\Delta)V^{1/2-i\Delta}$ in the principal case; $K$ has no pole in this strip. Step 3.1 gives polynomial growth on the horizontal sides, killed by Gamma's bounded-strip exponential decay. On the left, step 2.1 bounds the reflected multiplier by $CE(U+|v|+2)\le CH(1+|v|)$, and the reflected series has real part $3/2$. Thus both vertical integrals and subsequent reflected-series exchanges have explicit product absolute-tail bounds. All finite contour sides are linear, with continuous integrand on their traces, so [F7] supplies their parametric Riemann identity. [F2, F3, F6, F7, F9, step 1.2, step 1.3, step 2.1, step 3.1, step 2.3, algebra]

5.1 The principal residue contributes to (2) at most $CV\sum_{r,s\text{ same label}}|b_rb_s|(1+|t_r-t_s|)^C e^{-\pi|t_r-t_s|/2}$: use $\varphi(e)/e\le1$, and the principal-pair identification of step 1.2. For fixed $r$, same-label separation bounds the row sum by a fixed convergent exponential series. The inequality $2|b_rb_s|\le|b_r|^2+|b_s|^2$ therefore bounds this contribution by $CVS$, including conductor-one and repeated-label diagonal pairs. [F3, step 1.1, step 1.2, step 2.3, step 4.1, algebra]

5.2 Suppose $V\le H$ and put $M=\lceil H/V\rceil$, so $H\le MV\le2H$. Split the reflected series on the left line in step 4.1 into $m\le M$ and its dyadic tail; call the resulting integrals $I_1,I_2$. For $I_1$ move the line from $-1$ to $0$. The finite polynomial, $K$ and reflected multiplier are holomorphic throughout; Gamma decay kills the horizontal sides, and the multiplier has modulus one on the final line by step 2.1. Hence $$|I_1(r,s)|\le C\int_{\mathbb R}\left|\sum_{m\le M}\overline{\psi_r(m)}\psi_s(m)m^{-1/2+i(t_r-t_s)+iv}\right||K(iv)|dv.$$ For fixed $s,v$, multiply $b_r$ by the CONJUGATE of the inner polynomial, preserving the product of moduli. Its sample factor becomes $\psi_r(k)k^{-it_r}$ and its coefficients are $c_k=\sum_{mn=k,m\le M,V<n\le2V}a_n m^{-1/2+it_s-iv}\overline{\psi_s(m)}$, independent of $r$. [F1, F3, F7, F9, step 1.3, step 2.1, step 4.1, construct, algebra]

6.1 Finite Cauchy–Schwarz over factorizations and $\tau(mn)\le\tau(m)\tau(n)$ give $\sum_k|c_k|^2\le G_2\sum_{m\le M}\tau(m)/m\le CG_2B^2$. The divisor inequality follows at a prime power from $a+b+1\le(a+1)(b+1)$; the harmonic divisor sum is at most $(\sum_{j\le M}1/j)^2\le(1+\log M)^2$. Support lies below $2MV\le4H$. Apply the SAMPLED estimate [F5] with zero real parts and separation one: its coefficient form is at most $CH\sum|c_k|^2$, and its sample factor is $1+\log(2\lfloor4H\rfloor)\le CB$. As before drop primitive weights only after applying it. Therefore $\sum_r|C(it_r,\psi_r)|^2\le CHB^3G_2$. Finite CS, followed by the finite absolute integral of $K(iv)$ and $\sum_s|b_s|\le\sqrt{RS}$, bounds the $I_1$ contribution to (2) by $$CR(VHG_2)^{1/2}B^{3/2}S^{1/2}.\tag{3}$$ [F3, F5, F8, F9, step 1.1, step 2.3, step 5.2, algebra]

7.1 For $M_j=2^jM$, $j\ge1$, partition the reflected tail into $M_j/2<m\le M_j$. On its original left line the exponent is $-3/2$, and the analogous convolution coefficient norm is at most $G_2\sum_{M_j/2<m\le M_j}\tau(m)m^{-3}\le CG_2M_j^{-2}\log(2M_j)$. Here $\sum_{m\le x}\tau(m)\le x(1+\log x)$ follows by counting ordered pairs and summing the second variable first. Its convolution support lies in $(VM_j/2,2VM_j]$, a fixed ratio-four interval. Since $VM_j\ge2H$, use the centered sampler (1) to obtain $$\sum_r|C_j(it_r,\psi_r)|^2\le CVG_2M_j^{-1}\log(2M_j).$$ The coefficients may depend on $s,v$ but not on the sampled index $r$; their norms are uniform in $s,v$. [F1, F8, F9, step 2.2, step 5.2, step 6.1, algebra]

8.1 For a finite dyadic tail, weighted CS with weights $j^{-2}$ gives $\sum_{r,j}|C_j(it_r,\psi_r)|\le C\sqrt R(\sum_j j^2\sum_r|C_j|^2)^{1/2}\le C(RVG_2/M)^{1/2}B^{1/2}$, using $\log(2M_j)\le C(B+j)$ and $\sum j^22^{-j}(B+j)\le CB$. The same geometric sum beginning at a large index tends explicitly to zero. Thus the infinite-tail passages are justified uniformly before integrating. Multiply by $H/V$ from the left reflected line and integrate $(1+|v|)|K(-1+iv)|$, a finite absolute integral. Since $VM\ge H$, this gives $\sum_r|b_r||I_2(r,s)|\le C(RHG_2)^{1/2}B^{1/2}$. Its contribution to (2), after summing $|b_s|\le\sqrt{RS}$ and its outer $\sqrt{2V}$, is no larger than (3). These are explicit scalar geometric and Gamma tail bounds, not an unbounded Fubini premise. [F3, F9, step 1.1, step 2.3, step 4.1, step 5.2, step 6.1, step 7.1, algebra]

9.1 Substitute steps 5.1, 6.1 and 8.1 into the initial CS inequality. It gives $S^2\le CG\{VS+R(VHG_2)^{1/2}B^{3/2}S^{1/2}\}$. If $S=0$ the desired bound is immediate. Otherwise either the first term dominates, giving $S\le CVG$, or the second does, giving $S^{3/2}\le CR(VH)^{1/2}GG_2^{1/2}B^{3/2}$. For positive arguments, monotonicity of these powers follows from the logarithm/exponential derivatives in [F9]; thus raising to $2/3$ proves $$S\le C\left(VG+R^{2/3}(VH)^{1/3}G^{2/3}G_2^{1/3}B\right).\tag{4}$$ This includes zero-energy coefficients without division by $G$ or $G_2$. [F9, step 2.3, step 5.1, step 6.1, step 8.1, algebra]

10.1 If $V\ge H$, the centered sampler (1) instead gives $S\le CVG$ directly, so (4) also holds for this whole range, without $\log V$. Thus (4) is established on every block $V<n\le2V$ with $V\ge2$ for zero sample real parts. [step 2.2, step 9.1, algebra]

11.1 To allow arbitrary $\sigma_r\ge0$, put $S_r(u)=\sum_{V<n\le u}a_n\psi_r(n)n^{-it_r}$. Finite Abel summation gives $D(\sigma_r+it_r)=S_r(2V)(2V)^{-\sigma_r}+\sigma_r\int_V^{2V}S_r(u)u^{-\sigma_r-1}du$. The scalar maximum $\sup_{\sigma\ge0}\sigma V^{-\sigma}=1/(e\log V)$ follows by differentiating. Squaring and compact CS therefore bound its squared modulus by $C[|S_r(2V)|^2+(V\log^2V)^{-1}\int_V^{2V}|S_r(u)|^2du]$. For fixed $u$, use (4) on the truncated common coefficients, with no larger $G,G_2$. Sum over the finite samples, then integrate on the finitely many integer pieces; step 1.1 handles their endpoint values. The length $V$ cancels $1/V$, and $(\log V)^{-2}$ is bounded for $V\ge2$. Hence (4) holds unchanged for varying nonnegative real parts. [F4, F9, step 1.1, step 10.1, algebra]

12.1 If $N\le2$, step 2.4 finishes the proof. Otherwise use the unique integer $J\ge1$ with $2^J<N\le2^{J+1}$; take the truncated top block $(2^J,N]$, the full blocks $(2^j,2^{j+1}]$ for $1\le j<J$, and exactly the last indices $1,2$. Ordered from the top, block bases are within fixed factors of $N2^{-j}$. Weighted CS with weights $\delta^j$, $\delta=9/10$, bounds the squared full sum by $C\sum_j\delta^{-j}$ times each block's square. Apply step 11.1 and step 2.4, bounding $G_j\le G$ and $G_{2,j}\le G_2$. The two geometric sums converge since $2\delta>1$ and $2^{1/3}\delta>1$, yielding exactly $C[NG+R^{2/3}(NH)^{1/3}G^{2/3}G_2^{1/3}B]$. The finite last block obeys the same bound since its index has $2^j$ comparable to $N$. All arguments used the original labels and only differences $|t_r-t_s|\le U$, or the arbitrary interval of [F5]; hence constants are independent of $A$, of every sample real part and of all family parameters. Empty sample families give zero. This proves the whole Statement, including conductor one and every $N\ge1$. [F9, step 1.1, step 11.1, step 2.4, algebra] ∎

