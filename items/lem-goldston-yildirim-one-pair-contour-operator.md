---
dependency_level: 1
id: lem-goldston-yildirim-one-pair-contour-operator
kind: lemma
title: "One-pair zeta contour identity and bounded holomorphic parameter operator"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-countable-choice
  - thm-riemann-zeta-classical-zero-free-region
  - thm-zeta-bounds-in-classical-zero-free-region
  - lem-riemann-zeta-truncated-sum-bound
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - def-riemann-zeta-function
  - thm-residue-theorem-null-homologous-cycle
  - def-complex-line-integral-over-a-rectifiable-path
  - thm-riemann-stieltjes-and-parametric-contour-integrals-agree
  - lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-cauchy-integral-formula-on-a-polydisc
  - thm-cauchy-estimates-on-a-polydisc
  - thm-power-series-expansion-in-several-complex-variables
  - thm-power-series-define-holomorphic-functions-in-several-variables
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "Appendix A, Lemmas A.2–A.3; locally reconstructed, with explicit bounded parameter operator and interior Cauchy bounds"
---

## Statement

Assume countable choice. Fix $0<\sigma<1/2$ and put $D_\sigma=\{(z,z'):-\sigma<\operatorname{Re}z,\operatorname{Re}z'<100\}$. There exist $\beta,\delta,C>0$, depending only on $\sigma$ and the supplied absolute zeta constants, with the following properties. Write $L=\log R$, $R\ge3$, $\Gamma_1(t)=L^{-1}+it$, $\Gamma_0(t)=-\beta/\log(|t|+2)+it$, all oriented upwards, and
$$K(z)=\frac1{\zeta(1+z)\zeta(1-z)z^4}.$$
For every bounded holomorphic $f:D_\sigma\to\mathbb C$, with $M=\sup_{D_\sigma}|f|$, the integrals below converge absolutely and
$$\frac1{(2\pi i)^2}\int_{\Gamma_1}\int_{\Gamma_1}f(z,z')\frac{\zeta(1+z+z')R^{z+z'}}{\zeta(1+z)\zeta(1+z')z^2(z')^2}\,dz'\,dz =L f(0,0)+Tf+E_R(f),$$
where
$$Tf=\partial_{z'}f(0,0)+\frac1{2\pi i}\int_{\Gamma_0}f(z,-z)K(z)\,dz,\qquad |Tf|\le CM,\qquad |E_R(f)|\le CM e^{-\delta\sqrt L}.$$
All three operations are linear in $f$. The absolute integral of the one-pair kernel on $\Gamma_1^2$, including the factor $(2\pi)^{-2}$, is at most $C(1+L)^3$. Absolutely convergent finite products of these parametrized contour integrals may be exchanged under the stated CC assumption.

More generally, for any open $\Omega\subseteq\mathbb C^q$ and bounded jointly holomorphic $F(u,z,z')$ on $\Omega\times D_\sigma$, applying $T$ in the last pair gives a bounded jointly holomorphic function on $\Omega$, with $\|TF\|_{C^0(\Omega)}\le C\|F\|_{C^0(\Omega\times D_\sigma)}$. External complex partial derivatives commute with $T$ whenever the relevant bounded derivatives exist. In particular,
$$\|TF\|_{C^j(\Omega)}\le C\|F\|_{C^{j+1}(\Omega\times D_\sigma)}\quad(j\ge0),$$
when the norm on the right is finite. Norms take all complex partial derivatives of total order at most the indicated order. The same one-pair error bound is uniform in $u$, using only the global supremum of $F$.

## Facts & Assumptions

**Given:** The functions and parameters in the Statement. Improper contour integrals mean limits of compact parametrized pieces; products are interpreted through absolute convergence.

[A1] [[def-countable-choice]] supplies countable choice, as required by the analytic suppliers below.

[F1] [[thm-riemann-zeta-classical-zero-free-region]] gives an absolute $c_0>0$ with no zeta zeros in $\operatorname{Re}s\ge1-c_0/\log(|\operatorname{Im}s|+2)$.

[F2] [[thm-zeta-bounds-in-classical-zero-free-region]] gives $0<c_2<c_0$ and $|1/\zeta(s)|\ll\log(|\operatorname{Im}s|+2)$ in the narrower high-height region; at bounded height it gives $1/\zeta(s)=O(|s-1|)$ in that region up to real part $2$.

[F3] [[lem-riemann-zeta-truncated-sum-bound]] gives, for $1/2\le a<1$, $X=\lfloor|v|\rfloor+2$, the estimate $|\zeta(a+iv)|\ll X^{1-a}(1+(1-a)^{-1}+|a+iv-1|^{-1})$.

[F4] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives the fractional-part integral formula on $\operatorname{Re}s>0$ and a residue-one simple pole at $1$. [[def-riemann-zeta-function]] gives the absolutely convergent Dirichlet series when $\operatorname{Re}s>1$.

[F5] [[thm-residue-theorem-null-homologous-cycle]] evaluates admissible finite contour cycles by the sum of their enclosed residues.

[F6] [[def-complex-line-integral-over-a-rectifiable-path]] and [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]] identify compact piecewise-$C^1$ contour integrals with their parametrized integrals. Under CC, [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] identifies continuous compact-box Riemann integrals with Lebesgue integrals. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] exchanges the resulting absolutely integrable real parameter integrals, and [[thm-dominated-convergence]] passes to their dominated limits.

[F7] [[thm-cauchy-integral-formula-on-a-polydisc]], [[thm-cauchy-estimates-on-a-polydisc]], and [[thm-power-series-expansion-in-several-complex-variables]] give local Cauchy formulas, mixed derivative bounds, and geometric bounds on Taylor coefficients on strictly interior polydiscs. [[thm-power-series-define-holomorphic-functions-in-several-variables]] makes a series with these bounds holomorphic, with termwise derivatives on smaller polydiscs.

## Proof

1.1 Choose $$0<\beta<\min(c_2/2,c_0/2,\sigma\log2/8,\log2/64,1/100).$$ Put $a(t)=\beta/\log(|t|+2)$ and $\Gamma_2(t)=1+it$. On $\Gamma_0$, $|z|\asymp_\beta 1+|t|$ and the piecewise-$C^1$ speed is bounded. Both $z$ and $-z$ have real parts of absolute value less than $\sigma/8$, so all evaluations below lie strictly inside $D_\sigma$. By [F1–F2], $1/\zeta(1+z)$ is holomorphic on the regions between $\Gamma_0$ and $\Gamma_2$, with its removable value zero at $z=0$, and is bounded there by $C\log(|\operatorname{Im}z|+2)$. The whole shifted region has $\operatorname{Re}(1+z)\le2$, as required by the low-height clause of [F2]. Thus on $\Gamma_0$, $|K(z)|\ll_\sigma \log^2(|t|+2)(1+|t|)^{-4}$, since $1-z$ is also in the narrower zero-free region. In particular $K\in L^1(\Gamma_0)$. [A1, F1, F2, given, algebra]

2.1 For each fixed $A>1$, $B\ge0$, splitting the parameter integral at $T=e^{\sqrt L}$ gives $$\int_{\Gamma_0}R^{\operatorname{Re}z}\log^B(|z|+2)|z|^{-A}|dz|\ll_{A,B,\sigma}e^{-d_{A,B,\sigma}\sqrt L}.$$ Indeed below $T$, $R^{-a(t)}\le\exp(-\beta L/\log(T+2))$, whereas the remaining weight has a bounded integral over the entire line. Above $T$, discard $R^{-a(t)}\le1$ and bound the tail by $C T^{1-A}(1+\log T)^B$. Reducing the positive decay constant absorbs this polynomial. On $\Gamma_1$, $R^{\operatorname{Re}z}=e$ and $$\int_{\Gamma_1}\log^B(|z|+2)|z|^{-2}|dz|\ll_B L,$$ by splitting at $|t|=L^{-1},1$. Also $|\zeta(1+z+z')|\le\zeta(1+2/L)\le1+L/2$ on $\Gamma_1^2$, by the series and integral comparison. These bounds and step 1.1 prove absolute convergence there, with total absolute kernel integral $O_\sigma((1+L)^3)$. The same argument proves absolute convergence on $\Gamma_1\times\Gamma_2$ and $\Gamma_0\times\Gamma_2$, since their numerator zeta arguments have real parts bounded away from $1$. [F2, F4, step 1.1, given, algebra]

3.1 We need a bound that also covers cancellation of large imaginary parts on $\Gamma_0^2$. Write $z=-a(t)+it$, $z'=-a(t')+it'$, $S=2+|t|+|t'|$, $u=t+t'$, and $b=a(t)+a(t')$. Then $2\beta/\log S\le b\le2\beta/\log2<1/32$, and $\operatorname{Re}(1+z+z')=1-b$. If $|u|\le1$, [F4] and the bounded fractional-part integral give $|\zeta(1-b+iu)|\ll1+b^{-1}\ll_\sigma\log S$. If $|u|>1$, apply [F3] with $X=\lfloor|u|\rfloor+2\ll S$. Since $b^{-1}\ll_\sigma\log S$ and $X^b\ll S^{2\beta/\log2}$, it gives $|\zeta(1+z+z')|\ll_\sigma S^{1/4}$. In the first case absorb $\log S$ into $S^{1/4}$ as well. Now $S^{1/4}\ll(1+|t|)^{1/4}(1+|t'|)^{1/4}$. The absolute double-contour integrand is therefore bounded by $$CM\prod_{v\in\{t,t'\}}R^{-a(v)}\log(|v|+2)(1+|v|)^{-7/4}.$$ Step 2.1 bounds its integral by $CM e^{-d\sqrt L}$. This proves both absolute convergence and the required smallness without assuming $t+t'$ is large. [F2, F3, F4, step 1.1, step 2.1, algebra]

3.2 Fix $z\in\Gamma_1$. Shift the $z'$ contour from $\Gamma_1$ to $\Gamma_2$. There are no poles: the numerator pole $z'=-z$ and the possible denominator pole $z'=0$ lie to the left. The horizontal pieces tend to zero, since the numerator is bounded by $\zeta(1+2/L)$ and their integrands are $O_{z,R}(M\log T/T^2)$ at heights $\pm T$. Next, for fixed $z'\in\Gamma_2$, shift $z$ from $\Gamma_1$ to $\Gamma_0$. Its numerator has real part at least $2-\beta/\log2>3/2$ throughout the shift. The only enclosed pole is $z=0$, simple because $1/\zeta(1+z)=z+O(z^2)$ from [F4]. Its residue is $f(0,z')R^{z'}/(z')^2$. The horizontal integrals again tend to zero by the $O(\log T/T^2)$ bound. The finite curved rectangles are admissible cycles inside the zero-free region; the corners of $\Gamma_0$ at height zero cause no difficulty. All the resulting double integrals are absolutely convergent by step 2.1, so [F6] permits integration of these fixed-parameter identities. Hence the original integral is $I_1+I_2$, where $$I_1=\frac1{2\pi i}\int_{\Gamma_2}f(0,z')\frac{R^{z'}}{(z')^2}\,dz',$$ and $I_2$ is the original double integrand integrated over $\Gamma_0\times\Gamma_2$. [F1, F2, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 Shift $I_1$ to $\Gamma_0$. Its double pole at zero has residue $L f(0,0)+\partial_{z'}f(0,0)$; its remaining integral has absolute value $\le CM e^{-d\sqrt L}$ by step 2.1 with $A=2$. For $I_2$, first fix $z\in\Gamma_0$, and only then shift $z'$ from $\Gamma_2$ to $\Gamma_0$, using heights $T>|\operatorname{Im}z|+1$ tending to infinity. The enclosed poles are $z'=0$ and $z'=-z$, with respective residues $$f(z,0)R^z/z^2,\qquad f(z,-z)K(z).$$ Here the first residue uses cancellation of $\zeta(1+z)$ against its reciprocal, and the second uses the residue one of zeta and $(-z)^2=z^2$. For this fixed $z$, the horizontal integrals vanish: for large $T$, the numerator has imaginary part of size $T$ and real part in a fixed positive strip, and [F3–F4] bound it by $O_{z,R}(T^{1/4}\log T)$ on the portion to the left of $1$, and by $O_{z,R}(\log T)$ on or to the right of $1$. The latter bound follows from the finite-sum identity in [F3], obtained directly from [F4], with $X=\lfloor T\rfloor+2$; for real part at least $1$, $\sum_{n\le X}n^{-s}=O(\log X)$, the pole term is bounded, and the tail is $O(1)$. The resulting $T^{-2}$ denominator makes these horizontal integrals vanish. Crucially this is a fixed-$z$ argument, not a uniform shift across the moving pole. Only after taking that limit do we integrate over $z\in\Gamma_0$. The three resulting pieces are absolutely integrable: step 2.1 bounds the first residue by $CM e^{-d\sqrt L}$, step 1.1 bounds the second by $CM$, and step 3.1 bounds the remaining double integral by $CM e^{-d\sqrt L}$. Thus [F6] justifies the integrated identity and gives the stated formula and linear error bound. [F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, step 3.2, algebra]

5.1 The disk $|z'|<\sigma/2$ with $z=0$ is strictly inside the supplied strip. Cauchy's estimate on its interior circle $|z'|=\sigma/4$ gives $|\partial_{z'}f(0,0)|\le4M/\sigma$. Combining this with the $L^1$ kernel bound proves $|Tf|\le CM$. This uses a genuinely available smaller domain and no bound on the global derivative of $f$. The same argument works uniformly in external parameters $u$. [F7, step 1.1, step 4.1, given, algebra]

6.1 To verify joint holomorphy rather than assume an interchange of derivatives and an improper contour, fix $u_0\in\Omega$ and a polydisc whose closure lies inside a larger polydisc in $\Omega$. For each $z\in\Gamma_0$, expand $F(u,z,-z)$ in $u-u_0$ by [F7], choosing coefficient circles on the larger polydisc. The coefficient bound is $M\prod r_i^{-\alpha_i}$ uniformly in $z$. Integrating these coefficients against $K(z)\,dz/(2\pi i)$ gives coefficients bounded by $CM\prod r_i^{-\alpha_i}$. On every smaller polydisc the geometric series of these bounds is summable, so [F6] exchanges the series and the absolutely convergent contour integral. By [F7] the resulting series defines a jointly holomorphic function. The derivative-at-zero part of $TF$ has the same argument with a Cauchy circle of radius $\sigma/4$ in the consumed $z'$ variable; its coefficient bound is $4M\sigma^{-1}\prod r_i^{-\alpha_i}$. These same Cauchy coefficient formulas identify external derivatives with applying $T$ to the corresponding derivatives of $F$. If the latter are bounded through order $j+1$, their derivative-at-zero terms are bounded by $\|F\|_{C^{j+1}}$, and their contour terms by $C\|F\|_{C^j}$. This proves the asserted $C^{j+1}$-to-$C^j$ estimate. The case $q=0$ is step 5.1. Uniformity and linearity of the error follow directly from the three remainder integrals in step 4.1, completing every assertion. [F6, F7, step 1.1, step 4.1, step 5.1, algebra] ∎
