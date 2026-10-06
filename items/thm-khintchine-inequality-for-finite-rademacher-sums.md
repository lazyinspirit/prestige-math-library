---
id: thm-khintchine-inequality-for-finite-rademacher-sums
kind: theorem
title: "Khintchine's inequality for finite Rademacher sums"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-finite-rademacher-blocks-are-equidistributed, def-rademacher-functions-on-the-unit-interval, thm-layer-cake-formula-for-l-p-powers, def-real-exponential-function-and-e, def-hyperbolic-functions, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-complex-holder-minkowski-and-the-quotient-norm, thm-arithmetic-and-lattice-operations-preserve-measurability, def-real-gamma-function-by-the-euler-integral, thm-real-gamma-euler-integral-convergence, def-countable-choice, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-substitution-for-improper-integrals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Lemma 5.6 (Khinchine's inequality for scalars) and the exponential-moment proof, printed pp. 24-25"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Appendix C.2-C.3, Khintchine's inequalities and the derivation from the distributional inequality, printed pp. 586-590"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 5.1 (Khintchine-type inequality) and proof, printed pp. 15-16"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For every finite sequence
$(a_j)_{j\in J}$ of complex numbers, indexed by a finite set
$J\subset\{0,1,2,\dots\}$, and every $0<p<\infty$ there are constants
$0<c_p\le C_p<\infty$, depending only on $p$, such that
$$c_p\Bigl(\sum_{j\in J}|a_j|^2\Bigr)^{1/2}\le\Bigl(\int_0^1\Bigl|\sum_{j\in J}\varepsilon_j(t)a_j\Bigr|^pdt\Bigr)^{1/p}\le C_p\Bigl(\sum_{j\in J}|a_j|^2\Bigr)^{1/2},$$
and the constants do not depend on the finite set $J$. For $p=2$ both
inequalities hold with constants $1$:
$$\int_0^1\Bigl|\sum_{j\in J}\varepsilon_j(t)a_j\Bigr|^2dt=\sum_{j\in J}|a_j|^2.$$
The empty sum is zero and the empty case is trivial.

## Facts & Assumptions

**Given:** Countable Choice, a nonempty finite set $J\subset\{0,1,2,\dots\}$, complex numbers $a_j$ $(j\in J)$, and $0<p<\infty$; write $S(t):=\sum_{j\in J}\varepsilon_j(t)a_j=A(t)+iB(t)$ with $A(t)=\sum_j\varepsilon_j(t)\operatorname{Re}a_j$ and $B(t)=\sum_j\varepsilon_j(t)\operatorname{Im}a_j$, and $s^2:=\sum_j|a_j|^2$, $u^2:=\sum_j(\operatorname{Re}a_j)^2$, $v^2:=\sum_j(\operatorname{Im}a_j)^2$, so $u^2+v^2=s^2$.

[F1] For a nonempty finite set $J$ of nonnegative indices and any function $F:\{\pm1\}^{J}\to\mathbb C$ one has $\int_0^1F(\varepsilon_j(t):j\in J)\,dt=2^{-|J|}\sum_{s\in\{\pm1\}^J}F(s)$; consequently $\int_0^1\varepsilon_j\,dt=0$ and $\int_0^1\varepsilon_j\varepsilon_k\,dt=\delta_{jk}$ ([[lem-finite-rademacher-blocks-are-equidistributed]]).

[F2] $\exp(x)=\sum_{n\ge0}x^n/n!$ for real $x$ and $\cosh y=(e^y+e^{-y})/2$ for real $y$; moreover $\cosh y=\sum_{k\ge0}y^{2k}/(2k)!$ and $\cosh y\ge0$ ([[def-real-exponential-function-and-e]], [[def-hyperbolic-functions]]). The addition law $e^{x+y}=e^xe^y$, positivity $e^x>0$ and strict increase follow from [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]].

[F3] For every real $y$ one has $0\le\cosh y\le e^{y^2/2}$: since $(2k)!=1\cdot2\cdots2k\ge2^kk!$ for every $k$ (pairing $2j-1,2j$), the nonnegative series $\sum_ky^{2k}/(2k)!$ is termwise dominated by $\sum_ky^{2k}/(2^kk!)=e^{y^2/2}$.

[F4] The nonnegative Lebesgue integral is monotone and scales constants: if $0\le f\le g$ then $\int f\le\int g$, and $\int c\,\mathbf 1_E=c\,\lambda(E)$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); the layer-cake formula $\int|h|^p=p\int_0^\infty\lambda(|h|>t)t^{p-1}dt$ holds for measurable complex $h$ and $0<p<\infty$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[F5] Holder's inequality for $L^p$ and $L^q$ with $1/p+1/q=1$, in particular Cauchy-Schwarz, and the triangle inequality for integrals ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-integral-triangle-inequality]]).

[F6] Applying real arithmetic closure to real and imaginary parts shows that sums and products of measurable complex functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F7] For every $s>0$ the Euler integral $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt$ converges, so it is a finite positive number ([[def-real-gamma-function-by-the-euler-integral]], [[thm-real-gamma-euler-integral-convergence]]). The monotone $C^1$ substitution $t=2s\sqrt{\tau}$ on $(0,\infty)$ is valid on compact truncations and at both improper ends by [[thm-substitution-for-improper-integrals]].

## Proof

**Proof technique:** direct.

1.1 Setup and second moment. The functions $S,A,B$ are finite sums of products of constants with the measurable functions $\varepsilon_j$, hence measurable by [F6], and $|S|^2=A^2+B^2$. By [F1] the mean of $S$ vanishes, $\int_0^1S\,dt=0$, and expanding $|S|^2=\sum_{j,k}\varepsilon_j\varepsilon_ka_j\bar a_k$ and integrating termwise with $\int\varepsilon_j\varepsilon_k=\delta_{jk}$ gives $\int_0^1|S|^2dt=\sum_j|a_j|^2=s^2$. [F1, F6, algebra]

2.1 Exponential moments. For real $\rho$ the function $t\mapsto e^{\rho A(t)}$ is a finite product $\prod_{j\in J}e^{\rho\varepsilon_j(t)\operatorname{Re}a_j}$ of functions of the individual signs, so [F1] applied to $F(s)=\prod_je^{\rho s_j\operatorname{Re}a_j}$ gives $\int_0^1e^{\rho A}dt=\prod_{j\in J}\frac{e^{\rho\operatorname{Re}a_j}+e^{-\rho\operatorname{Re}a_j}}2=\prod_j\cosh(\rho\operatorname{Re}a_j)\le\prod_je^{(\rho\operatorname{Re}a_j)^2/2}=e^{\rho^2u^2/2}$, where [F2] and [F3] were used termwise and the product of exponentials was combined. [F1, F2, F3, step 1.1, algebra]

3.1 Tail bounds. Let $\lambda>0$. If $u>0$, take $\rho=\lambda/u^2$ in step 2.1 and use monotonicity of the integral on $\{A>\lambda\}$ to get $\lambda(\{A>\lambda\})\le e^{-\rho\lambda}\int e^{\rho A}\le e^{-\lambda^2/(2u^2)}$; applying the same argument to $-A$ gives $\lambda(\{|A|>\lambda\})\le2e^{-\lambda^2/(2u^2)}$. If $u=0$, then $A=0$ and this tail measure is $0$. The same bounds hold for $B$ with $v$. If $s=0$, then $S=0$ and the tail measure is $0$. Otherwise $s>0$, and $\{|S|>\lambda\}\subset\{|A|>\lambda/\sqrt2\}\cup\{|B|>\lambda/\sqrt2\}$ because if both component moduli are at most $\lambda/\sqrt2$, then $|S|^2=A^2+B^2\le\lambda^2$. Applying the component bound at threshold $\lambda/\sqrt2$ separately to the labeled $A$- and $B$-tails, and omitting a contribution when its variance is zero, gives
$$\lambda(\{|S|>\lambda\})\le\begin{cases}2e^{-\lambda^2/(4u^2)},&u>0,\\0,&u=0\end{cases}+\begin{cases}2e^{-\lambda^2/(4v^2)},&v>0,\\0,&v=0\end{cases}\le4e^{-\lambda^2/(4s^2)},$$
because each positive variance among $u,v$ is at most $s$ and the two labeled contributions are each at most $2e^{-\lambda^2/(4s^2)}$. Equal positive variances still contribute twice, as required by the union bound. [F2, F4, step 2.1, algebra]

4.1 Upper bound. For $s>0$ the layer-cake formula [F4] applied to $S$ and step 3.1 give $\int_0^1|S|^pdt=p\int_0^\infty\lambda(\{|S|>t\})t^{p-1}dt\le4p\int_0^\infty e^{-t^2/(4s^2)}t^{p-1}dt$; substituting $t=2s\sqrt{\tau}$, $dt=s\tau^{-1/2}d\tau$, turns the last integral into $4p\,2^{p-1}s^p\int_0^\infty\tau^{p/2-1}e^{-\tau}d\tau=4p\,2^{p-1}\Gamma(p/2)\,s^p$, which is finite by [F7]. Hence $\|S\|_p\le C_ps$ with $C_p:=\bigl(4p\,2^{p-1}\Gamma(p/2)\bigr)^{1/p}<\infty$ and, for $s=0$, $\|S\|_p=0$. [F4, F7, step 3.1, algebra]

5.1 Lower bound. Let $s>0$. Step 4.1 with $p=4$ gives $\int_0^1|S|^4dt\le C_4^4s^4$; splitting the integral of $|S|^2$ over $\{|S|\le s/2\}$ and $\{|S|>s/2\}$ and applying Cauchy-Schwarz [F5] to the second piece, $\int_0^1|S|^2dt\le(s/2)^2+\bigl(\int|S|^4\bigr)^{1/2}\lambda(\{|S|>s/2\})^{1/2}\le s^2/4+C_4^2s^2\lambda(\{|S|>s/2\})^{1/2}$; with $\int|S|^2=s^2$ from step 1.1 this gives $\lambda(\{|S|>s/2\})\ge(3/(4C_4^2))^2=9/(16C_4^4)$. Consequently, for every $p>0$, $\int_0^1|S|^pdt\ge\int_{\{|S|>s/2\}}|S|^pdt\ge(s/2)^p\cdot9/(16C_4^4)=c_p^ps^p$ with $c_p:=\bigl(9/(16C_4^4)\bigr)^{1/p}/2>0$. [F5, step 1.1, step 4.1, algebra]

6.1 Conclusion. For a nonempty $J$ and $s>0$, steps 4.1 and 5.1 give the two-sided inequality with constants $c_p,C_p$ that are explicit functions of $p$ alone, in particular independent of $J$ and of the coefficients; for $s=0$ all quantities vanish and the inequality is trivial, and for the empty set $J=\varnothing$ both sides are $0$. The case $p=2$ is step 1.1, where the identity $\int|S|^2=s^2$ gives both inequalities with constants $1$. [step 1.1, step 4.1, step 5.1, algebra] ∎
