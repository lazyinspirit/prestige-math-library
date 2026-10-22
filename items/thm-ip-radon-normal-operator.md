---
id: thm-ip-radon-normal-operator
kind: theorem
title: The Euclidean Radon normal operator and inversion formula
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
aliases: []
deps:
  - thm-ftc-second-part
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - def-ip-2d-radon-transform
  - thm-ip-fourier-slice-identity
  - def-countable-choice
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - lem-riemann-lebesgue-comparison-for-distribution-test-integrands
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-integrals-are-invariant-under-measure-preserving-maps
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, RICAM lecture notes v1, §2.1: Radon transform in R²"
      url: "https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–7: normal operator, polar-coordinate calculation, and filtered-backprojection formula."
    - title: "Frank Natterer, X-ray Tomography, in Inverse Problems and Imaging"
      url: "https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf"
      locator: "§2.1, pp. 18–20, Theorems 2.1–2.2 and formula (7): slice theorem and two-dimensional inversion formula."
---

## Statement

Assume Countable Choice. Let $\mu$ be the polar surface measure on $S^1$, defined on Borel $E\subseteq S^1$ by
$$\mu(E):=2\lambda_2\bigl(\{r\theta:\theta\in E,\ 0<r\le1\}\bigr),$$
where $\lambda_2$ is Lebesgue measure on $\mathbb R^2$. For continuous $g:S^1\times\mathbb R\to\mathbb C$ for which the integral exists, define its **backprojection** by
$$R^*g(x):=\int_{S^1}g(\theta,x\cdot\theta)\,d\mu(\theta).$$
For every $f\in C_c^\infty(\mathbb R^2;\mathbb C)$ and every $x\in\mathbb R^2$, the normal-operator and filtered-backprojection identities hold:
$$R^*Rf(x)=4\pi|D|^{-1}f(x),\qquad f(x)=\frac1{4\pi}R^*|D_s|Rf(x),$$
with $|D|^{-1}$ and $|D_s|$ as defined for the compact-support Fourier convention in the Euclidean Radon transform definition.

## Statement references

[[def-ip-2d-radon-transform]]

[[def-countable-choice]]

[[def-polar-surface-measure-on-the-unit-sphere]]

[Mikko Salo, RICAM lecture notes v1, §2.1](https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf)

[Frank Natterer, “X-ray Tomography,” §§2.1–2.2](https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $f\in C_c^\infty(\mathbb R^2;\mathbb C)$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, means every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

[F1] [[def-ip-2d-radon-transform]]: $Rf$ is the line integral of $f$ in the $\theta^\perp$ direction; $|D_s|$ has multiplier $2\pi|\sigma|$ and $|D|^{-1}$ has multiplier $(2\pi|\xi|)^{-1}$ in the inverse Fourier integral.

[F2] [[thm-ip-fourier-slice-identity]]: for compactly supported smooth $f$, $\widehat{Rf}(\theta,\sigma)=\widehat f(\sigma\theta)$ for every $\theta\in S^1$ and $\sigma\in\mathbb R$.

[F3] [[def-polar-surface-measure-on-the-unit-sphere]]: under Countable Choice, the polar surface set function on $S^1$ is $\mu(E)=2\lambda_2(\{r\theta:\theta\in E,\ 0<r\le1\})$ for Borel $E$.

[F4] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: under Countable Choice, $\mu$ is a finite Borel measure and $\int_{\mathbb R^2}h(\xi)\,d\lambda_2(\xi)=\int_0^\infty\int_{S^1}h(r\theta)r\,d\mu(\theta)\,dr$ for every nonnegative Borel $h$.

[F5] [[thm-linear-change-of-variables-for-lebesgue-measure]]: under Countable Choice, for every $n\ge1$ an invertible linear map $T:\mathbb R^n\to\mathbb R^n$ satisfies $\lambda_n(T[E])=|\det T|\lambda_n(E)$ for every Lebesgue measurable $E$.

[F6] [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]: under Countable Choice, the negative-sign $2\pi$ Fourier transform maps $\mathcal S(\mathbb R^n)$ continuously to itself.

[F7] [[thm-fourier-inversion-on-schwartz-space]]: under Countable Choice, $u(x)=\int_{\mathbb R^n}\widehat u(\xi)e^{2\pi i x\cdot\xi}\,d\xi$ for every $u\in\mathcal S(\mathbb R^n)$, with absolute convergence.

[F8] [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]: under Countable Choice, the compact-support Riemann and Lebesgue integrals agree for smooth compactly supported test integrands and their bounded Borel zero extensions.

[F9] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable complex functions on sigma-finite product measure spaces have equal product and iterated integrals.

[F10] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the Lebesgue integral is complex-linear on $L^1$.

[F11] [[thm-ftc-second-part]]: for a real differentiable $G$ on $[a,b]$ with integrable derivative, including one-sided endpoint derivatives, $\int_a^bG'=G(b)-G(a)$.

[F12] [[thm-chain-rule-for-total-derivatives]]: totally differentiable finite-dimensional real maps satisfy $D(g\circ T)=Dg(T)\circ DT$. For a linear $T$, its derivative is constant; repeated application to the real and imaginary parts of a smooth function gives all directional derivatives of their compositions.

[F13] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set, in particular $[0,1]$, is Riemann integrable.

[F14] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]: under Countable Choice, Lebesgue measure on $\mathbb R$ is sigma-finite.

[F15] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: if $T$ preserves a measure $\nu$, then integrals of integrable real or complex functions are invariant under composition with $T$.

## Proof

1.1 Since $f\in C_c^\infty(\mathbb R^2)$, it is a Schwartz function. Choose $R>0$ with $\operatorname{supp}f\subset B_R(0)$. For every $\theta\in S^1$ and $s\in\mathbb R$, the integrand $f(s\theta+t\theta^\perp)$ vanishes for $|t|>R$, because $|s\theta+t\theta^\perp|^2=s^2+t^2$. Thus the line integral is over the fixed interval $[-R,R]$. On every bounded $s$-interval, $(\theta,s,t)\mapsto f(s\theta+t\theta^\perp)$ is uniformly continuous on the compact parameter product with $S^1$ and $[-R,R]$, so its integral is jointly continuous in $(\theta,s)$. For fixed $\theta$, write $f=f_{\mathrm R}+if_{\mathrm I}$ and $F_\nu(s,t)=f_\nu(s\theta+t\theta^\perp)$ for $\nu\in\{\mathrm R,\mathrm I\}$. The inner coordinate map is linear with constant derivative, so repeated use of [F12] gives $\partial_s^kF_\nu(s,t)=(\theta\cdot\nabla)^k f_\nu(s\theta+t\theta^\perp)$ for every $k$. Apply [F11] on $[0,1]$ to each real function $u\mapsto\partial_s^kF_\nu(s+uh,t)$: by [F12] its derivative is $h\,\partial_s^{k+1}F_\nu(s+uh,t)$, which is continuous and Riemann integrable by [F13], including at the endpoints. Dividing the resulting identity by any nonzero $h$ gives the difference quotient as the $u$-integral of $\partial_s^{k+1}F_\nu(s+uh,t)$. Uniform continuity on each compact $(s,t)$ rectangle makes this converge uniformly in $t\in[-R,R]$; integrating and recombining the two real components therefore gives $\partial_s^k Rf(\theta,s)=\int_{-R}^{R}(\theta\cdot\nabla)^k f(s\theta+t\theta^\perp)\,dt$ for every $k\ge0$, with each derivative continuous. Also $Rf(\theta,s)=0$ for $|s|>R$, so $Rf(\theta,\cdot)\in C_c^\infty(\mathbb R;\mathbb C)$ and is Schwartz. For every $x$, joint continuity makes $\theta\mapsto Rf(\theta,x\cdot\theta)$ continuous; [F4] makes $\mu$ finite, so the defining backprojection integral exists. By [F6] and [F7], the Lebesgue Fourier transforms of $f$ and $Rf(\theta,\cdot)$ are Schwartz and satisfy pointwise inversion; [F8] identifies them with the compact-support Riemann transforms in [F1]. Also $|\widehat f(\xi)|\le\int|f|$, and [F4] shows $|\xi|^{-1}\widehat f(\xi)$ is integrable near $0$; outside the unit disk it is dominated by the integrable Schwartz function $|\widehat f|$. Rapid decay of $\widehat f$ and finiteness of $\mu$ make the later signed-frequency integrals absolutely convergent. [given, A1, F1, F4, F6, F7, F8, F11, F12, F13, choose]

2.1 Apply [F7] to $Rf(\theta,\cdot)$ at $s=x\cdot\theta$, then substitute the slice identity [F2] to get $Rf(\theta,x\cdot\theta)=\int_{\mathbb R}\widehat f(\sigma\theta)e^{2\pi i\sigma x\cdot\theta}\,d\sigma$. By [F4], $\mu$ is finite, and by [F14] Lebesgue measure on $\mathbb R$ is sigma-finite, so the measure spaces in [F9] are sigma-finite. The integrand is continuous; since $\widehat f$ is Schwartz, $|\widehat f(\sigma\theta)|\le C_N(1+|\sigma|)^{-N}$ uniformly in $\theta$, and choosing $N>1$ shows it is absolutely integrable on their product. Thus [F9] permits either order of integration and gives $R^*Rf(x)=\int_{S^1}\int_{\mathbb R}\widehat f(\sigma\theta)e^{2\pi i\sigma x\cdot\theta}\,d\sigma\,d\mu(\theta)$. [F2, F4, F7, F9, F14, step 1.1]

3.1 The polar definition [F3] and change of variables [F5] imply $\mu(-E)=\mu(E)$ for every Borel $E\subseteq S^1$, since the cone of $-E$ is the image under $-I$ of the cone of $E$ and $|\det(-I)|=1$. Thus $\theta\mapsto-\theta$ preserves $\mu$. The reflection $\sigma\mapsto-\sigma$ preserves Lebesgue measure by [F5] in dimension one. Both maps are Borel, so [F15] permits these substitutions in the integrable angular and frequency integrands. Split the $\sigma$-integral in step 2.1 at zero and use $r=-\sigma$ and $\theta\mapsto-\theta$ on its negative half to obtain twice the positive-half integral. Apply [F4] to $h(\xi)=\widehat f(\xi)e^{2\pi i x\cdot\xi}/|\xi|$, set to zero at $\xi=0$; for complex $h$, apply the nonnegative formula to positive and negative real and imaginary parts and use [F10]. Thus $R^*Rf(x)=2\int_{\mathbb R^2}\widehat f(\xi)e^{2\pi i x\cdot\xi}|\xi|^{-1}d\lambda_2(\xi)=4\pi|D|^{-1}f(x)$. [F1, F3, F4, F5, F10, F15, step 2.1]

4.1 By [F1] and [F2], $|D_s|Rf(\theta,s)=\int_{\mathbb R}2\pi|\sigma|\widehat f(\sigma\theta)e^{2\pi i s\sigma}\,d\sigma$. Schwartz decay gives a bound $|\widehat f(\sigma\theta)|\le C_N(1+|\sigma|)^{-N}$ uniform in $\theta$. On each compact parameter set $S^1\times[-A,A]$, the truncated integrals over bounded $\sigma$-intervals are continuous in $(\theta,s)$, while the displayed bound makes their tails uniformly tend to zero; hence the filtered data are jointly continuous. The same bound gives absolute convergence and boundedness, so finiteness of $\mu$ makes the backprojection integral exist. For fixed $x$, the product integrand $2\pi|\sigma|\widehat f(\sigma\theta)e^{2\pi i\sigma x\cdot\theta}$ is continuous and absolutely integrable by the same bound with $N>2$. The measure spaces are sigma-finite as established in step 2.1; Fubini [F9], the signed-frequency split in step 3.1, and [F4] give $R^*|D_s|Rf(x)=4\pi\int_{\mathbb R^2}\widehat f(\xi)e^{2\pi i x\cdot\xi}d\lambda_2(\xi)=4\pi f(x)$ by [F7]. [F1, F2, F4, F7, F9, F10, step 1.1, step 2.1, step 3.1]

5.1 Step 3.1 is the normal-operator identity, and dividing step 4.1 by $4\pi$ gives the filtered-backprojection identity. Both hold pointwise for every $x\in\mathbb R^2$. [step 3.1, step 4.1, algebra] ∎

## Remarks

The only choice principle used is Countable Choice, through the stated Fourier, polar-measure, and compact Riemann/Lebesgue suppliers. The proof does not use the stronger AC+DC hypotheses of the general LCA inversion and Plancherel theorems.
