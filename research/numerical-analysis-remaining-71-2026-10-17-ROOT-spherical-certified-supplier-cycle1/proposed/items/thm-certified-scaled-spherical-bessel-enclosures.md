---
id: thm-certified-scaled-spherical-bessel-enclosures
kind: theorem
title: Soundness and eventual absolute precision for spherical Bessel enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [thm-algebra-of-derivatives, thm-chain-rule, alg-certified-scaled-spherical-bessel-evaluation, def-spherical-bessel-evaluation-contract, def-spherical-bessel-and-hankel-functions, def-sine-and-cosine-by-power-series, def-complex-exponential, thm-sine-and-cosine-derivatives, thm-eulers-formula, lem-cauchy-product-of-absolutely-convergent-complex-series, lem-binomial-theorem-over-complex-numbers, thm-ratio-test]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: NIST DLMF, spherical Bessel functions, explicit formulas
      url: https://dlmf.nist.gov/10.49
proof_strategy: direct
---

## Statement

Every `success` output of [[alg-certified-scaled-spherical-bessel-evaluation]] encloses its requested scaled or unscaled value, or the entire requested image for an interval input, and satisfies its absolute-radius test. Its relative flags satisfy [[def-spherical-bessel-evaluation-contract]]. Every capped execution terminates. For each fixed order, positive represented real point and positive absolute tolerance, some finite work, degree, interface-index and precision caps permit absolute success. The same holds for an exact positive dyadic point. Relative certification is eventually possible for a nonzero requested target, but is never promised at a zero. No uniform floating-point condition number, bit complexity bound, small fixed cap or scattering uniqueness follows.

## Facts & Assumptions

**Given:** The inputs and terminating certified real-input interface, when used, in [[def-spherical-bessel-evaluation-contract]].

[F1] [[def-spherical-bessel-and-hankel-functions]] defines $y_\ell=(-z)^\ell(z^{-1}d/dz)^\ell f$ with $f=\sin z/z$ or $f=-ie^{iz}/z$.

[F2] [[def-sine-and-cosine-by-power-series]] and [[def-complex-exponential]] give the absolutely convergent sine, cosine and exponential series, with $e^{iz}=\cos z+i\sin z$ for real $z$.

[F3] [[alg-certified-scaled-spherical-bessel-evaluation]] specifies exact rational interval arithmetic, the output grids, and the finite searches.

[F4] [[thm-sine-and-cosine-derivatives]] and [[thm-eulers-formula]] give the real-parameter derivatives $(\sin z)'=\cos z$, $(\cos z)'=-\sin z$ and, by componentwise differentiation, $(e^{iz})'=ie^{iz}$. [[thm-algebra-of-derivatives]] and [[thm-chain-rule]] are used on real components: for complex-valued $f=u+iv$, $g=a+ib$, expanding their product into $ua-vb$ and $ub+va$ proves $(fg)'=f'g+fg'$ by the real rules. All derivatives here use this real-parameter interpretation.

[F5] [[lem-cauchy-product-of-absolutely-convergent-complex-series]] identifies the absolutely convergent product series with the product of its sums. [[lem-binomial-theorem-over-complex-numbers]] evaluates each finite binomial coefficient sum used below.

[F6] [[thm-ratio-test]] applies to nonzero real absolute terms with eventual ratio tending to zero; zero-input series values are read directly.

## Proof

**Given:** The order and inputs in the Statement.

1.1 Using [F4], differentiating [F1] by the product rule gives $y_{r+1}=r y_r/z-y_r'$. If $y_r=A_r\cos z+B_r\sin z$, its derivative is $(A_r'+B_r)\cos z+(B_r'-A_r)\sin z$. The recurrence therefore gives exactly the algorithm's formulas for $A_{r+1},B_{r+1}$. The base case is $j_0=\sin z/z$. If $y_r=C_r e^{iz}$, its derivative is $(C_r'+iC_r)e^{iz}$ and the same recurrence gives $C_{r+1}$, with base $h_0^{(1)}=-ie^{iz}/z$. Induction identifies all four unscaled expression graphs with the required functions and derivatives. By [F5], the absolutely convergent Cauchy product of $e^{-iz}$ and $e^{iz}$ has coefficient $\sum_{r=0}^n(-1)^r/(r!(n-r)!)$, which is $1$ for $n=0$ and $0$ otherwise by the binomial theorem in [F5]; hence $e^{-iz}e^{iz}=1$. Multiplication by the explicit scales in the contract therefore proves all four scaled identities. In particular $C_r$ has exponents among $-1,\ldots,-r-1$, by its recurrence, so $z^{r+1}C_r$ is a polynomial. Its derivative expression may have exponent $-r-2$, so the scaled derivative can retain a $z^{-1}$ term; the domain $z>0$ permits it. All these constructions are finite. [F1, F2, F3, F4, F5, algebra]

1.2 For $0<z\le b$, the absolute exponential-series terms past degree $M$ have successive ratio at most $b/(M+2)\le1/2$. Their sum is at most $E_M$. Consequently the real and imaginary parts of $T_M(z)$, enlarged by $[-E_M,E_M]$, enclose $\cos z$ and $\sin z$. Rational interval addition and multiplication enclose pointwise addition and multiplication because the extrema of a bilinear function on a rectangle occur at its corners; inversion of a positive interval is exactly $[1/b,1/a]$. Induction over the finite expression graph therefore encloses every admissible argument in the input box. Outward rounding preserves inclusion. Step 1.1 identifies the exact targets, and the explicit output tests prove every asserted absolute and relative bound. [F2, F3, step 1.1, algebra]

2.1 All Laurent graphs have finite size for fixed $\ell$. At any stage each factorial, power and rational endpoint operation is finite integer arithmetic, and each interface call terminates by hypothesis. There are finitely many stages under the caps, with explicit exits on cap or representational failure. Thus every execution terminates; this includes executions that never find a strictly positive box or adequate precision. [given, F3, step 1.1]

2.2 Fix a positive represented point $z_0$. Since $z_0\in I_q$ and $\operatorname{width}(I_q)\le2^{-q}$, every sufficiently late box lies in one fixed rational compact interval $[a,B]\subset(0,\infty)$. Its upper endpoint $b_q\le B$. For large $q$, $M=q$ in the algorithm, and $E_M\le2B^{M+1}/(M+1)!\to0$: the successive ratios are eventually at most $1/2$. The natural real/imaginary interval evaluation of $(iI_q)^m$ is a signed real or imaginary copy of $I_q^m$. For positive boxes of width $\delta$, its nonzero component has width $b_q^m-a_q^m\le m B^{m-1}\delta$, by factoring the difference of powers. Therefore each component of $T_M(I_q)$ has width at most $\delta\sum_{m=1}^M B^{m-1}/(m-1)!\le C_B\delta$, where $C_B<\infty$ by [F6]. Adding the Taylor error makes both trigonometric interval widths tend to zero, while their endpoints remain bounded. [given, F2, F3, F6, algebra]

2.3 The remaining expression graph has fixed finite size independent of $q$. On $[a,B]$, powers of $z^{-1}$ remain bounded and their interval widths tend to zero, since inversion has width $\delta/(a_q b_q)\le\delta/a^2$. Sums of bounded intervals with vanishing widths have vanishing width; products do too, since $\operatorname{width}(XY)\le\sup|X|\operatorname{width}(Y)+\sup|Y|\operatorname{width}(X)$. Induction over the fixed graph and step 2.2 show that every requested component's interval width tends to zero. Endpoint rounding adds at most $2^{1-p}$ to each real component's width, with $p=q$. Thus every output radius tends to zero. At some finite stage all absolute tests pass, and the finite work actually used through that stage supplies finite sufficient caps. An exact dyadic point is a constant interface, so it is included. [F3, step 2.2, algebra]

3.1 For a target value $v\ne0$, the containing rectangles of vanishing diameter from step 2.3 eventually have $d(B,0)\ge|v|/2>0$, and their radius divided by that distance tends to zero. Any positive relative tolerance therefore eventually passes if the search is continued to that precision, or is rerun with a sufficiently small absolute tolerance. A zero target belongs to every sound enclosure, so no zero-excluding flag is available. For a fixed interval input its exact image may have positive diameter, and no point-mode limit argument applies. The proof counts finite exact rational operations and establishes their finite operands at each stage; it makes no bound on integer bit lengths or floating-point cancellation. [step 1.2, step 2.3, algebra] ∎
