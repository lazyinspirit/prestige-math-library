---
id: thm-aqft-gapped-scalar-forward-positivity
kind: theorem
title: Forward positivity for a gapped identical scalar
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-aqft-scattering-amplitude-input
  - lem-aqft-crossing-even-forward-amplitude
  - thm-cauchy-integral-formula-circle
  - lem-cauchy-difference-quotient-exceptional-extension
  - thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain
  - def-star-shaped-open-subset-of-rn
  - def-improper-integral-at-infinity
  - thm-linearity-of-improper-integrals
  - thm-monotonicity-of-the-integral
  - thm-comparison-test-for-improper-integrals
dependency_roles:
  def-aqft-scattering-amplitude-input: mathematical-premise
  lem-aqft-crossing-even-forward-amplitude: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  lem-cauchy-difference-quotient-exceptional-extension: mathematical-premise
  thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  thm-linearity-of-improper-integrals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-comparison-test-for-improper-integrals: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: 'Allan Adams, Nima Arkani-Hamed, Sergei Dubovsky, Alberto Nicolis, and Riccardo Rattazzi, Causality, Analyticity and an IR Obstruction to UV Completion'
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: 'Section 4, PDF pp. 14–19: the forward contour, infrared mass gap, crossing, pole contributions, high-energy closure, and optical-theorem positivity.'
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3: two-subtracted dispersion relation, crossing variable, pole removal, and positive forward derivatives.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Full 303-page lecture-notes PDF; §§3.2.1–3.2.3 and 3.3.1, printed pp. 90–98: polynomial bound, contour deformation, subtractions, optical theorem, and the forward coefficient.'
---

## Statement

Let $m>0$, $\nu_0=2m^2$, and let $A(s)$, its real crossing-symmetric subtraction $P(s)$ of the specified isolated real subthreshold simple poles and their crossing partners, and $B(v)=A(2m^2+v)-P(2m^2+v)$ satisfy the gapped identical-scalar amplitude conditions defined above. In particular, all such variable poles are removed; $B$ is holomorphic on $\mathbb C\setminus(( -\infty,-\nu_0]\cup[\nu_0,\infty))$, real analytic, and crossing even; $B$ extends continuously from each half-plane onto every compact cut-bank segment away from the thresholds; $B(v)=o(|v|^2)$ uniformly on the closing arcs; and no massless pole or cut reaches $t=0$. Its forward absorptive density is $\rho(\nu)=\operatorname{Im}B(\nu+i0)$ for $\nu>\nu_0$, extended by the harmless convention $\rho(\nu_0)=0$ without asserting a threshold limit; it is nonnegative, locally Riemann integrable with the cut-boundary limits specified above, and has finite $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu$. Then for every integer $n\ge1$,

$$\frac{B^{(2n)}(0)}{(2n)!}=\frac{2}{\pi}\int_{\nu_0}^{\infty}\frac{\rho(\nu)}{\nu^{2n+1}}\,d\nu\ge0.$$

In particular, the first nonconstant even Taylor coefficient $B''(0)/2!$ is nonnegative. Equality is allowed; no strict bound or sign for an arbitrary off-shell operator coefficient is asserted.

## Statement references

[[def-aqft-scattering-amplitude-input]]

[[lem-aqft-crossing-even-forward-amplitude]]

[[thm-cauchy-integral-formula-circle]]

[[thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, §4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §§3.2.1–3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Facts & Assumptions

**Given:** The amplitude data with $m>0$, gap $\nu_0=2m^2$, paired real subthreshold simple-pole subtraction, crossing, real analyticity, the exact $o(|v|^2)$ upper-half-plane condition, and the stated Riemann boundary and convergence hypotheses.

[F1] [[def-aqft-scattering-amplitude-input]]: $B$ is holomorphic on the two-cut domain, real analytic, and has $\rho(\nu)=\operatorname{Im}B(\nu+i0)\ge0$, locally Riemann integrable on $[\nu_0,\infty)$, with $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu<\infty$; all specified variable subthreshold poles are subtracted and the endpoint caps vanish. For each real $|v|<\nu_0$, the two cut-bank integrals of $[B(x)-B(0)]/[x^2(x-v)]$ exist as finite improper Riemann limits. In addition, $B$ has a continuous extension from each half-plane onto compact cut-bank segments away from the thresholds; this is an explicit extra admissibility premise.

[F2] [[lem-aqft-crossing-even-forward-amplitude]]: $B(-v)=B(v)$ and $B'(0)=0$.

[F3] [[thm-cauchy-integral-formula-circle]]: if $f$ is holomorphic on a disc and $\gamma$ is a positively oriented compactly contained circle, then $f(z)=(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta$ for interior $z$.

[F4] [[lem-cauchy-difference-quotient-exceptional-extension]]: for holomorphic $f$ near $z_0$, the quotient $(f(z)-f(z_0))/(z-z_0)$, filled by $f'(z_0)$, is continuous on the domain and holomorphic away from $z_0$.

[F5] [[thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain]]: a continuous function holomorphic away from one point in an open star-shaped domain has zero integral around every closed rectifiable contour in that domain.

[F6] [[def-star-shaped-open-subset-of-rn]]: $U$ is star-shaped with respect to $a\in U$ when $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$; an open half-plane has this property.

[F7] [[def-improper-integral-at-infinity]]: a right-unbounded Riemann integral is the finite limit of its truncation integrals.

[F8] [[thm-linearity-of-improper-integrals]]: convergent improper Riemann integrals on the same one-ended interval are linear under finite real combinations.

[F9] [[thm-monotonicity-of-the-integral]]: on a finite interval, a nonnegative Riemann-integrable function has nonnegative integral.

[F10] [[thm-comparison-test-for-improper-integrals]]: if $f$ and $g$ are locally Riemann integrable, $0\le f\le g$ eventually toward an improper end, and the improper integral of $g$ converges, then that of $f$ converges.

## Proof

1.1 Apply [F3] to $B$ on any circle centered at $0$ with radius $r<\nu_0$. Expanding $(\zeta-v)^{-1}=\sum_{j\ge0}v^j\zeta^{-j-1}$ uniformly on that circle for $|v|<r$ gives the Taylor series of $B$ near $0$. By [F2], every odd coefficient vanishes. Hence $H(v):=(B(v)-B(0))/v^2$ has a holomorphic extension through $v=0$ with $H(0)=B''(0)/2!$, and $H$ is real on the real gap. [F2, F3, given, algebra]

1.2 Fix a real $v\in(-\nu_0,\nu_0)$, $R>\nu_0+|v|$, $0<\eta<\min(1,(\nu_0-|v|)/3)$, and $\delta>0$. Choose $\epsilon>0$ so the closed radius-$\epsilon$ discs about $\pm\nu_0$ are disjoint, avoid the radius-$\eta$ disc about $v$, and lie strictly inside the radius-$R$ circle about $v$. Let $U_\delta=\{z:\operatorname{Im}z>-\delta/2\}$, which is star-shaped by [F6]. The contour $\Gamma_{R,\eta,\epsilon}$ follows the real line left-to-right from $v-R$ to $v+R$, replacing the intervals about $v$ and $\pm\nu_0$ by upper semicircles traversed left-to-right, and closes by the radius-$R$ upper semicircle traversed right-to-left. The filled function $G_\delta(z)=(H(z+i\delta)-H(v+i\delta))/(z-v)$ is continuous on $U_\delta$ and holomorphic away from $v$ by [F4]. [F4, F5, F6, given, construct]

2.1 Apply [F5] to $G_\delta$ on $\Gamma_{R,\eta,\epsilon}$. The integral of $dz/(z-v)$ over the contour without threshold detours is zero: the real-segment logarithms cancel, and the small and large semicircles contribute $-i\pi$ and $+i\pi$. Replacing a real interval about either threshold by its semicircle preserves that integral, because $1/(z-v)$ is holomorphic on a disc containing the interval and semicircle but not $v$; [F5] applied there gives equality of the two path integrals. Thus $\int_{\Gamma_{R,\eta,\epsilon}}dz/(z-v)=0$, and the definition of $G_\delta$ yields $\int_{\Gamma_{R,\eta,\epsilon}}H(z+i\delta)/(z-v)\,dz=0$. [step 1.2, F5, algebra]

3.1 First hold $R,\eta,\epsilon$ fixed and let $\delta\downarrow0$. The detoured contour avoids the threshold points and $v$. On each retained real cut segment $K$, the new continuous-bank hypothesis in [F1] gives uniform convergence of $H(x+i\delta)$ to $H_+(x)$. Explicitly, the integral error is at most $|K|\sup_K|H(x+i\delta)-H_+(x)|/\operatorname{dist}(K,v)$, which tends to zero. Compact gap segments and semicircles have the same uniform convergence by holomorphy, with their length and minimum distance from $v$ giving the analogous bound. Therefore the entire fixed contour integral converges to its boundary-contour value. Take imaginary parts at these fixed radii: every retained real-gap segment contributes zero because $H$ is real there. Now let $\epsilon\downarrow0$: the threshold semicircle contributions vanish by exactly the endpoint-arc hypothesis in [F1], and the retained imaginary cut integrals converge by the specified improper-bank limits. This step does not require convergence of separate real-part integrals on the gap side of a threshold. Finally let $R\to\infty$ and $\eta\downarrow0$. The outer integral has modulus at most $\pi\sup_{|z-v|=R,\,\operatorname{Im}z\ge0}|H(z)|\to0$ by the uniform high-energy bound. On the small semicircle the difference from $-i\pi H(v)$ is bounded by $\pi\sup_{|z-v|=\eta}|H(z)-H(v)|\to0$. Since $H(v)$ is real, the resulting imaginary-part identity is $H(v)=\pi^{-1}\int_{\mathbb R}\operatorname{Im}H_+(x)/(x-v)\,dx$, with the integrand set to zero throughout the gap, including at $x=v$. Only the cut integrals remain; a full complex real-line principal value is not asserted. No dominated-convergence theorem or unasserted interchange of pointwise boundary limits is used. [step 2.1, F1, given, algebra]

4.1 On the gap, $\operatorname{Im}H_+(x)=0$. For $\nu>\nu_0$ on the right cut, $\operatorname{Im}H_+(\nu)=\rho(\nu)/\nu^2$. On the left cut, evenness and real analyticity give $\operatorname{Im}H_+(-\nu)=-\rho(\nu)/\nu^2$. Substituting these boundary values into step 3.1 and changing variables $x=-\nu$ on the left cut gives $H(v)=\pi^{-1}\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-2}\bigl((\nu-v)^{-1}+(\nu+v)^{-1}\bigr)\,d\nu=(2/\pi)\int_{\nu_0}^{\infty}\rho(\nu)/[\nu(\nu^2-v^2)]\,d\nu$. Both integrals converge: on each compact interval, $\rho$ is Riemann integrable and each kernel is continuous, so their products are Riemann integrable. Explicitly, for bounded $f$ and continuous $g$, $\operatorname{osc}_J(fg)\le\|g\|_\infty\operatorname{osc}_J f+\|f\|_\infty\operatorname{osc}_J g$ on every subinterval $J$, where $\operatorname{osc}_J f:=\sup_Jf-\inf_Jf$. A Darboux-good partition for $f$, refined to small mesh using uniform continuity of $g$, proves this product claim. The kernels are bounded near threshold and at infinity they are bounded by a constant times $\nu^{-3}$; [F7, F10] apply. This same compact-interval argument applies to every continuous kernel multiplying $\rho$ below. This is the twice-subtracted forward dispersion relation, with subtraction constants $B(0)$ and $B'(0)=0$ and with all specified subthreshold poles removed. [step 3.1, F1, F2, F7, F10, algebra]

5.1 Fix an integer $N\ge1$. For real $|v|<\nu_0$, expand $1/(1-v^2/\nu^2)$ through order $N$; its remainder is bounded uniformly in $\nu\ge\nu_0$ by $q^{N+1}/(1-q)$, where $q=v^2/\nu_0^2<1$. Using [F8] for the finite sum and [F9, F10] for the nonnegative remainder gives $B(v)=B(0)+\sum_{n=1}^{N+1}\bigl((2/\pi)\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-2n-1}\,d\nu\bigr)v^{2n}+o(v^{2N+2})$ as $v\to0$ through real values: the integrated remainder is bounded by $(2/\pi)v^2q^{N+1}(1-q)^{-1}\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu=O(v^{2N+4})$. The Taylor series of $B$ from step 1.1 is unique: if a first coefficient differed, dividing the difference by its least differing power and taking $v\to0$ would give a nonzero constant equal to $0$. Since $N$ is arbitrary, $B^{(2n)}(0)/(2n)!=(2/\pi)\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-2n-1}\,d\nu$ for every $n\ge1$. [step 1.1, step 4.1, F8, F9, F10, algebra]

6.1 For each finite $R>\nu_0$, the integrand $\rho(\nu)/\nu^{2n+1}$ is locally Riemann integrable by the compact-kernel argument in step 4.1 and is nonnegative, so [F9] gives $\int_{\nu_0}^{R}\rho(\nu)\nu^{-2n-1}d\nu\ge0$. Its improper limit is finite by [F10], since $0\le\rho(\nu)\nu^{-2n-1}\le\nu_0^{-2n+2}\rho(\nu)\nu^{-3}$. Taking that limit and multiplying by $2/\pi>0$ proves the asserted nonnegativity. If $\rho$ vanishes, equality can occur; strict positivity is not concluded. [F1, F9, F10, step 4.1, step 5.1, algebra] ∎

## Remarks

The compact-bank continuity assumption is explicit additional data. Finite pointwise boundary values alone did not justify the former shifted-segment limit. The contour identity separates the two physical cuts only after the crossing-even pole subtraction and the explicit two-subtraction high-energy condition. A massless pole or cut at $t=0$, a nonvanishing outer contribution, or a nonpositive absorptive input invalidates this proof route. The result constrains forward on-shell amplitude combinations; it does not assign a universal sign to all Wilson coefficients.

The diagram is a schematic of the real $z$-plane contour $\Gamma_{R,\eta,\epsilon}$ used in step 1.2, with $R>|v|+\nu_0$, $0<\eta<\min(1,(\nu_0-|v|)/3)$, and $\epsilon$ chosen as there. The drawing suppresses the fixed small upper detours about the two threshold points. These detours are essential to the compact boundary-limit argument; the integrand before $\delta\downarrow0$ is $H(z+i\delta)$. The small upper semicircle is traversed left-to-right and the large one right-to-left. The proof uses the stated contour integrals and orientations, not the drawing.

```tikz
\begin{tikzpicture}[x=1cm,y=0.65cm,>=stealth]
  \draw[->] (-4.4,0) -- (4.5,0) node[right] {$\mathrm{Re}z$};
  \draw[very thick] (-4.0,0) -- (-2.0,0);
  \draw[very thick] (2.0,0) -- (4.0,0);
  \node[below] at (-2.0,0) {$-\nu_0$};
  \node[below] at (2.0,0) {$\nu_0$};
  \node[below] at (0.45,0) {$v$};
  \draw[thick] (-2.85,0) -- (-0.10,0);
  \draw[->,thick] (-1.65,0) -- (-1.20,0);
  \draw[thick] (1.00,0) -- (3.75,0);
  \draw[->,thick] (2.20,0) -- (2.65,0);
  \draw[thick] (-0.10,0) arc (180:0:0.55);
  \draw[->,thick] (0.30,0.36) -- (0.60,0.36);
  \draw[thick] (3.75,0) arc (0:180:3.30);
  \draw[->,thick] (0.75,2.15) -- (0.35,2.15);
  \node[above] at (0.45,0.55) {$\eta$};
  \node[above] at (0.45,3.35) {$R$};
  \node[above right] at (3.2,2.2) {$\Gamma_{R,\eta,\epsilon}$};
\end{tikzpicture}
```

