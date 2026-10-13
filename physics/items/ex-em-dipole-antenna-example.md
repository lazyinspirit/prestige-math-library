---
id: ex-em-dipole-antenna-example
kind: example
title: "Harmonic dipole pattern and period-averaged power in the exact dipole law"
domain: physics
status: published
origin: pipeline
dependency_level: 21
deps: [pthm-em-dipole-radiation, lem-em-sphere-zonal-moments, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, def-em-electric-moments, def-em-si-conventions, def-euclidean-inner-product, def-cross-product-in-r3, thm-algebra-of-derivatives, def-countable-choice, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-test-function-cutoffs-and-euclidean-localization, thm-integration-by-parts, pthm-em-retarded-potentials, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-em-parameter-integrals, cor-c-one-change-of-variables-for-l-one-functions]
dependency_roles:
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  pthm-em-dipole-radiation: physical-result
  lem-em-sphere-zonal-moments: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-em-electric-moments: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  pthm-em-retarded-potentials: physical-result
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Deterministic model computation in the exact electric-dipole law for declared parameters: the $\\sin^2\\theta$ angular pattern and period-averaged power $\\mu_0\\omega^{4}p_0^{2}/(12\\pi c)$ of a prescribed harmonic dipole moment, together with an actual compact-window source realization carrying the dipole theorem's explicit finite-radius and flux errors. Excluded: antenna feed, material and matching models, radiation resistance, measurements and every empirical statement."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.2.1$ printed pp. 144-146: the oscillating electric dipole $p=p_0\\cos(\\omega t)e_z$, its $\\sin^2\\theta$ far-zone pattern and the time-averaged power; the framework computes the same quantities inside its exact dipole law with explicit error control."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 94-95 ('The Hertzian dipole', 'Electric dipole radiation') of chapter 9: the Hertzian dipole current element, its radiation pattern and the average radiated power, with the small-source condition stated."
---

## Example

Assume Countable Choice ([[def-countable-choice]]) for the surface and finite-source branches. Adopt the electric-dipole radiation-law idealization whose leading far fields and angular flux are the dipole expressions of [[pthm-em-dipole-radiation]], evaluated for the prescribed smooth waveform $p(u)=p_0\cos(\omega u)e_3$ with $\omega>0$ and $p_0\ne0$. This is an explicit ideal radiation-law model, not an eternal compact-time source claimed to satisfy that theorem with $D=0$. Here $r>0$, $u\in\mathbb R$, $p_0\in\mathbb R\setminus\{0\}$ carries C m, $\omega$ carries s$^{-1}$, and $e_1,e_2,e_3$ are the standard orthonormal spatial basis. The waveform is an explicitly prescribed time-dependent dipole moment as defined in [[pthm-em-dipole-radiation]], not measured data; [[def-em-electric-moments]] supplies only the static moment convention. All exact quantities below refer to that ideal leading radiation law. Then:

(a) [Fields] With $n=\sin\theta\cos\varphi\,e_1+\sin\theta\sin\varphi\,e_2+\cos\theta\,e_3$, $\theta\in[0,\pi]$, $\varphi\in[0,2\pi]$, the ideal leading far fields are $$E_{\mathrm{lead}}(rn,u+r/c)=-\frac{\mu_0\omega^{2}p_0\cos(\omega u)}{4\pi r}\,n\times(n\times e_3),\qquad B_{\mathrm{lead}}=\frac{n\times E_{\mathrm{lead}}}{c},$$ with $|n\times(n\times e_3)|=|\sin\theta|$, so the amplitude pattern is $\propto\sin\theta$ and vanishes on the dipole axis $\theta\in\{0,\pi\}$.

(b) [Angular power density] The retarded-time angular power density of [[pthm-em-dipole-radiation]] is $$\frac{dP}{d\sigma}(n,u)=\frac{\mu_0|n\times p''(u)|^{2}}{16\pi^{2}c}=\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{16\pi^{2}c}\,\sin^{2}\theta,$$ the $\sin^{2}\theta$ pattern with zeros along $\pm e_3$ and maximum in the equatorial plane when $\cos(\omega u)\ne0$; at times with $\cos(\omega u)=0$ the density vanishes in every direction; its integral over the sphere is $$\int_{S^2}\frac{dP}{d\sigma}d\sigma=\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{6\pi c},$$ using $\int_{S^2}\sin^{2}\theta\,d\sigma=8\pi/3$ from [[lem-em-sphere-zonal-moments]](a).

(c) [Period average] The mean of the total power over one retarded-time period $u\in[0,2\pi/\omega]$ is $$\frac{\omega}{2\pi}\int_0^{2\pi/\omega}\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{6\pi c}\,du=\frac{\mu_0\omega^{4}p_0^{2}}{12\pi c}.$$

(d) [Scope] The computation is the exact dipole law of the model; a finite prescribed source realizes it only within the absolute error bound of [[pthm-em-dipole-radiation]] with its $D(u)$, and a physical antenna's feed, current distribution and material realization are additional source models not supplied here. The average in (c) is taken in the retarded-time variable, not in observation time; no measurement, radiation resistance, matching condition or effective area is reported, and no empirical claim is made.

(e) [Actual compact-window realization] Choose a compact smooth time cutoff $\eta\equiv1$ near one selected period, a nonnegative $C^\infty$ bump $\sigma$ supported in $B_a$ with integral $1$, and $p_\eta(u)=\eta(u)p_0\cos(\omega u)e_3$. Define $\rho(y,u)=-p_\eta(u)\cdot\nabla\sigma(y)$, $J(y,u)=p_\eta'(u)\sigma(y)$. These are smooth compact spacetime sources, satisfy continuity, carry zero total charge and have moment $p_\eta$. On the chosen period the moment equals the harmonic waveform, while the actual retarded field has the full $D(u)$, $\Gamma_E/r^{2}$ and $(\Gamma_B+\Gamma_E/c)/r^{2}$ errors of the dipole theorem. Its asymptotic total-power deviation from the ideal law is bounded by that theorem's explicit $R(u)$; its period-averaged deviation is bounded by the average of $|R(u)|$. The condition $V=p''$ is a sufficient ideal transverse-moment condition; it is not equivalent to $D=0$. No eternal nonzero harmonic moment is asserted for a compact-time source.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the dipole theorem [[pthm-em-dipole-radiation]] with its source class and constants; the waveform $p(u)=p_0\cos(\omega u)e_3$, $\omega>0$, $p_0\ne0$; the construction data $\eta,\sigma,p_\eta,\rho,J$ of clause (e).

[L1] Dipole theorem: for a source of the compact smooth conserved class, $p\in C^\infty$ with $p''(u)=\int J_t(y,u)dy$, $|V(n,u)-p''(u)|\le D(u)$ with $D(u)=\frac{a}{c}\int_{B_a}\sup_{|v-u|\le a/c}|J_{tt}(y,v)|dy$; the leading far fields are $E_{\mathrm{lead}}=\mu_0n\times(n\times V)/(4\pi r)$, with errors $\Gamma_E/r^{2}$ and $(\Gamma_B+\Gamma_E/c)/r^{2}$, and the angular power density limit is $\mu_0|n\times V|^{2}/(16\pi^{2}c)$ with total error $|R(u)|\le\mu_0(2|p''|D+D^{2})/(4\pi c)$. ([[pthm-em-dipole-radiation]] (a)-(d))

[L2] Sphere integrals: $\int_{S^2}F(n_3)d\sigma=2\pi\int_{-1}^{1}F(u)du$, so $\int_{S^2}\sin^{2}\theta\,d\sigma=\int_{S^2}(1-n_3^{2})\,d\sigma=2\pi\int_{-1}^{1}(1-u^{2})du=\frac{8\pi}{3}$, and $\int_{S^2}|n\times a|^{2}d\sigma=\frac{8\pi}{3}|a|^{2}$. ([[lem-em-sphere-zonal-moments]] (a),(d))

[L3] Sine and cosine derivatives and identities: $(\cos)'=-\sin$, $(\sin)'=\cos$, parity, $\sin^{2}+\cos^{2}=1$, and the addition formulas imply $\cos^{2}t=\frac{1+\cos 2t}{2}$; $\sin(4\pi)=0$, sine is nonnegative on $[0,\pi]$, and its zeros there are exactly $0,\pi$, while $\sin(\pi/2)=1$. ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]])

[L4] Fundamental theorem and derivative algebra for the one-variable computations below. ([[thm-ftc-second-part]], [[thm-algebra-of-derivatives]])

[L5] Constructions and integration by parts in Euclidean space: a nonnegative $C^\infty$ bump of unit mass supported in a prescribed ball exists; a smooth compact time cutoff equal to $1$ near a chosen period exists; for compactly supported $C^1$ fields the divergence theorem gives $\int_{\mathbb R^3}\partial_jF\,dy=0$, hence $\int_{\mathbb R^3}y_i\partial_j\sigma\,dy=-\delta_{ij}\int_{\mathbb R^3}\sigma\,dy$. ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[lem-test-function-cutoffs-and-euclidean-localization]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[thm-integration-by-parts]])

[L6] Conventions: $e_3$ is a unit vector, the moment convention is that of [[def-em-electric-moments]], $\varepsilon_0\mu_0c^{2}=1$ and the dipole theorem's source class is the compact smooth conserved one whose retarded fields are constructed by [[pthm-em-retarded-potentials]]. ([[def-em-electric-moments]], [[def-em-si-conventions]], [[pthm-em-retarded-potentials]])

[L7] The integral triangle inequality and nonnegative integral order rules bound an averaged difference by the average of its absolute value; fixed compact parameter integrals of smooth functions are continuous, so the source flux and $D$ are finite and continuous on the selected period. ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[lem-em-parameter-integrals]], [[cor-c-one-change-of-variables-for-l-one-functions]])

## Verification

**Proof technique:** direct substitution in the exact dipole law, followed by explicit constructions.

1.1 Leading fields (a). By [L3], $\frac{d}{du}\cos(\omega u)=-\omega\sin(\omega u)$ and $\frac{d^{2}}{du^{2}}\cos(\omega u)=-\omega^{2}\cos(\omega u)$; hence $p'(u)=-p_0\omega\sin(\omega u)e_3$ and $p''(u)=-\omega^{2}p_0\cos(\omega u)e_3$ [L4]. Substituting into the leading field of [L1] with $V=p''$ gives $E_{\mathrm{lead}}=\mu_0n\times(n\times p'')/(4\pi r)=-\frac{\mu_0\omega^{2}p_0\cos(\omega u)}{4\pi r}n\times(n\times e_3)$ and $B_{\mathrm{lead}}=n\times E_{\mathrm{lead}}/c$. For a unit vector $n$, $|n\times(n\times e_3)|=|n\times e_3|=(1-(n\cdot e_3)^{2})^{1/2}=\sin\theta$, which vanishes exactly when $n=\pm e_3$, i.e. $\theta\in\{0,\pi\}$, and is maximal for $\theta=\pi/2$ [L3, L6]. This is (a). [given, L1, L3, L4, L6, algebra]

2.1 Angular power density (b). By [L1] the angular density limit of the dipole law is $\mu_0|n\times V|^{2}/(16\pi^{2}c)$; substituting $V=p''=-\omega^{2}p_0\cos(\omega u)e_3$ gives $|n\times V|^{2}=\omega^{4}p_0^{2}\cos^{2}(\omega u)|n\times e_3|^{2}=\omega^{4}p_0^{2}\cos^{2}(\omega u)\sin^{2}\theta$ [step 1.1, L3]. Hence $\frac{dP}{d\sigma}=\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{16\pi^{2}c}\sin^{2}\theta$, which vanishes on the axis and is maximal in the equatorial plane. Integrating with [L2], $\int_{S^2}\sin^{2}\theta\,d\sigma=\frac{8\pi}{3}$, so $\int_{S^2}\frac{dP}{d\sigma}d\sigma=\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{16\pi^{2}c}\cdot\frac{8\pi}{3}=\frac{\mu_0\omega^{4}p_0^{2}\cos^{2}(\omega u)}{6\pi c}$. This is (b). [step 1.1, L1, L2, L3, algebra]

3.1 Period average (c). By [L3], $\cos^{2}(\omega u)=\frac{1+\cos(2\omega u)}{2}$, whose antiderivative $\frac u2+\frac{\sin(2\omega u)}{4\omega}$ has endpoint increment $\pi/\omega$ over $[0,2\pi/\omega]$; hence $\int_0^{2\pi/\omega}\cos^{2}(\omega u)du=\frac12\cdot\frac{2\pi}{\omega}=\frac{\pi}{\omega}$ by [L4]. Multiplying the total power of step 2.1 by $\omega/(2\pi)$ gives the period mean $\frac{\mu_0\omega^{4}p_0^{2}}{6\pi c}\cdot\frac12=\frac{\mu_0\omega^{4}p_0^{2}}{12\pi c}$, the average being taken in the retarded-time variable as stated. This is (c). [step 2.1, L3, L4, algebra]

4.1 Realization, scope and error control (d),(e). Choose $\eta$ by the compact cutoff lemma of [L5], and choose a nonnegative spatial cutoff equal to one near the origin and supported in $B_a$. Its integral is positive (it is one on a ball) and finite (it is bounded with compact support); dividing by that integral gives the smooth unit-mass $\sigma$ of [L5]. With these $\eta,\sigma$, the functions $\rho(y,u)=-p_\eta(u)\cdot\nabla\sigma(y)$ and $J(y,u)=p_\eta'(u)\sigma(y)$ are $C^\infty$ and compactly supported in a set $B_a\times[t_0,T]$, and $\partial_u\rho+\operatorname{div}J=-p_\eta'\cdot\nabla\sigma+p_\eta'\cdot\nabla\sigma=0$; the total charge is $\int\rho\,dy=-p_\eta\cdot\int\nabla\sigma\,dy=0$, and the moment is $p_i(u)=\int y_i\rho\,dy=-\sum_jp_{\eta,j}(u)\int y_i\partial_j\sigma\,dy=-p_{\eta,i}(u)(-\int\sigma\,dy)=p_{\eta,i}(u)$ by [L5]. On the selected period $p_\eta=p_0\cos(\omega u)e_3$, so that source realizes the harmonic moment there, while by [L1] its actual retarded fields are those of the compact smooth branch constructed in [L6] and carry the full $D(u)$, $\Gamma_E/r^{2}$ and $(\Gamma_B+\Gamma_E/c)/r^{2}$ errors around the ideal dipole expressions; the asymptotic total-power deviation from the ideal law is bounded by $R(u)$ of [L1] and its period-averaged absolute deviation is at most the average of $|R(u)|$, by the integral triangle inequality [L7]. To prove the non-equivalence in (e), use a separate compact-source witness. Choose a nonnegative even smooth unit-mass bump $\sigma$ supported in $B_a$: symmetrize any such bump as $(\sigma_0(y)+\sigma_0(-y))/2$, so substitution $y\mapsto-y$ gives $\int y\sigma(y)dy=0$. Choose a compact time cutoff $\chi=1$ on a neighbourhood of $[-a/c,a/c]$, vectors $b,d\in\mathbb R^3$ with $d\ne0$ (in C m s$^{-2}$ and C m s$^{-3}$ respectively), and $\widetilde p(v)=\chi(v)(bv^2/2+dv^3/6)$. Set $\widetilde\rho=-\widetilde p\cdot\nabla\sigma$ and $\widetilde J=\widetilde p'\sigma$. The same continuity and integration-by-parts computation gives moment $\widetilde p$. At $u=0$, on the whole retarded window, $\widetilde J_t(y,v)=(b+dv)\sigma(y)$ and $\widetilde J_{tt}(y,v)=d\sigma(y)$. Hence for every $n\in S^2$, $$\widetilde V(n,0)=\int[b+d(n\cdot y)/c]\sigma(y)dy=b=\widetilde p''(0),\qquad\widetilde D(0)=\frac ac|d|\int\sigma(y)dy=\frac ac|d|>0.$$ This is a compact smooth conserved counterexample to $V=p''\Rightarrow D=0$, independent of the harmonic realization. Conversely $D=0\Rightarrow V=p''$ follows from [L1]. Clause (d) records the scope: no feed, matching, radiation-resistance, measurement or observation-time power statement is made, and no eternal nonzero harmonic moment is asserted for the compact-time source. [step 3.1, L1, L2, L5, L6, L7, algebra] ∎
