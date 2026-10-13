---
id: pthm-em-larmor-nonrelativistic
kind: physics-theorem
title: "Instantaneous-rest Larmor power and uniform low-speed comparison for a prescribed point charge"
domain: physics
status: published
origin: pipeline
dependency_level: 21
deps: [pthm-em-lienard-wiechert, def-em-retarded-point-geometry, post-em-radiation-selection, lem-em-sphere-zonal-moments, def-em-vacuum-energy-flux, pthm-em-poynting-balance, thm-em-retarded-root-and-fields, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-integral-triangle-inequality, thm-dominated-convergence, def-em-fields, def-em-si-conventions, def-euclidean-inner-product, def-countable-choice, def-cross-product-in-r3, def-em-lab-geometry, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives, lem-derivative-of-a-power, cor-mean-value-theorem, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-cauchy-schwarz-finite, thm-intermediate-value]
dependency_roles:
  thm-intermediate-value: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  pthm-em-lienard-wiechert: physical-result
  def-em-retarded-point-geometry: formulation-prerequisite
  post-em-radiation-selection: physical-assumption
  lem-em-sphere-zonal-moments: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
  pthm-em-poynting-balance: physical-result
  thm-em-retarded-root-and-fields: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Exact rest-event radiation of the prescribed retarded point-source model (angular flux density, Larmor power and sin^2 pattern with the uniform velocity-field remainder) and a separately quantified general uniform low-speed power and angular comparison; no particle dynamics, self-force, radiation reaction, mass derivation or empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.2.2$ printed pp. 146-147 ('Power Radiated: Larmor Formula'): the Larmor formula for the time-averaged power of an oscillating dipole and the general Larmor statement; the framework's item states the exact instantaneous-rest point-charge version with its remainder bound."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Node 130 ('The Larmor formula') of chapter 10: the rest-frame emission power $P=q^2a^2/(6\\pi\\epsilon_0c^3)$ derived from the acceleration field; the framework replaces the source's informal velocity-neglect by the exact $\\beta_0=0$ hypothesis."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.17-11.19 (PDF pp. 137-139): momentarily resting charge fields and radiation derived explicitly; the emitted power per unit emission time appears there as the resting specialisation."
---

## Statement

Assume $\mathrm{AC}_\omega$ as carried by the cited point-source suppliers. Let the laboratory region, chart and units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], let $q\in\mathbb R$, let $z,v_*$ be a retarded point-geometry datum of [[def-em-retarded-point-geometry]] (prescribed $C^3$ uniformly subluminal worldline, $C:=q/(4\pi\varepsilon_0)$), let $s_0$ be an emission event with $z'(s_0)=0$ (the charge is momentarily at rest in the laboratory chart), and put $a:=z''(s_0)$ and, for $n\in S^2$, $x_r:=z(s_0)+rn$, $t_r:=s_0+r/c$. Let $E,B$ be the retarded fields of the charge given by [[pthm-em-lienard-wiechert]] and $S:=E\times B/\mu_0$ ([[def-em-vacuum-energy-flux]], [[pthm-em-poynting-balance]]). Then:

(a) [Field on the emitted sphere] For every $r>0$ and $n\in S^2$, $$E(x_r,t_r)=\frac{C\,n\times(n\times a)}{c^2r}+\rho_E(s_0,n,r),\qquad|\rho_E(s_0,n,r)|\le|C|\frac{1+v_*/c}{(1-v_*/c)^3}r^{-2},\qquad B(x_r,t_r)=\frac{n\times E(x_r,t_r)}{c}.$$

(b) [Angular flux density] The limits $$\frac{dP}{d\sigma}(n):=\lim_{r\to\infty}r^2\,n\cdot S(x_r,t_r)=\frac{C^{2}\,|n\times(n\times a)|^{2}}{\mu_0c^{5}},\qquad P_{\mathrm{em}}(s_0):=\int_{S^2}\frac{dP}{d\sigma}(n)\,d\sigma(n),$$ exist with the convergence uniform in $n\in S^2$; $d\sigma$ is the polar surface measure of the unit sphere (equal to the chart surface measure by [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

(c) [Total power] $$P_{\mathrm{em}}(s_0)=\frac{C^{2}}{\mu_0c^{5}}\cdot\frac{8\pi}{3}|a|^{2}=\frac{q^2|a|^2}{6\pi\varepsilon_0c^{3}},$$ the Larmor power of the momentarily resting prescribed charge.

(d) [Angular distribution] For $a\ne0$, define $\theta\in[0,\pi]$ by $\cos\theta=(n\cdot a)/|a|$; this angle exists uniquely because the quotient is in $[-1,1]$ and cosine is continuous and strictly decreasing from $1$ to $-1$ on $[0,\pi]$. When $a=0$ the angle is undefined and $dP/d\sigma\equiv0$. Then $$\frac{dP}{d\sigma}(n)=\frac{q^2|a|^2}{16\pi^2\varepsilon_0c^{3}}\sin^2\theta:$$ when $q\ne0$ and $a\ne0$ the radiation pattern vanishes exactly along the instantaneous acceleration axis and is maximal in the perpendicular plane; when $q=0$ it vanishes in every direction; $\int_{S^2}dP/d\sigma\,d\sigma=P_{\mathrm{em}}(s_0)$. If $a=0$ all displayed radiation quantities vanish.

(e) [Scope and conventions] The result is exact at an emission event at which the charge is instantaneously at rest in the laboratory chart: then $\kappa_0(n)=1$ for every $n$, so no retarded-time conversion factor appears and the displayed limits are simultaneously the fixed-sphere flux and the emitted power per unit emission time. The item uses only the prescribed worldline and the retarded model fields -- it is not a mechanical evolution law, does not assert a self-force or radiation reaction, derives no mass, and makes no empirical or measurement claim. For a general emission event the exact formula and its low-speed comparison are supplied by clause (f); 'slow' motion alone is never substituted for an error bound. The prescribed curve, the uniform subluminal bound and $z'(s_0)=0$ are hypotheses; for a varying-velocity worldline the instantaneous rest event is a single parameter value, not an interval.

(f) [General low-speed branch] At any emission event, without imposing $z'(s_0)=0$ for this clause, define emitted power by the weighted far-zone flux integral $\kappa_0(n)\,r^2\,n\cdot S$ on the emitted spheres, with $\kappa_0(n)=1-n\cdot\beta_0$, $\beta_0=z'(s_0)/c$, $|\beta_0|\le v_*/c$ and $\gamma_0:=(1-|\beta_0|^2)^{-1/2}$. The same field formula and angular computation give $$P_{\mathrm{em}}=\gamma_0^{6}\bigl(|a|^{2}-|\beta_0\times a|^{2}\bigr)\frac{q^{2}}{6\pi\varepsilon_0c^{3}}.$$ Put $P_{\mathrm L}=q^{2}|a|^{2}/(6\pi\varepsilon_0c^{3})$. For $|\beta_0|\le\delta<1$, $$P_{\mathrm L}\le P_{\mathrm{em}}\le(1-\delta^{2})^{-3}P_{\mathrm L},\qquad |P_{\mathrm{em}}-P_{\mathrm L}|\le3\delta^{2}(1-\delta^{2})^{-3}P_{\mathrm L}.$$ This includes $q=0$ or $a=0$ without division by $P_{\mathrm L}$. Uniform angular comparison is also explicit: if $N_\beta=n\times((n-\beta_0)\times a)$, $N_0=n\times(n\times a)$ and $H_\beta=q^{2}|N_\beta|^{2}/(16\pi^{2}\varepsilon_0c^{3}\kappa_0^{5})$, $H_0=q^{2}|N_0|^{2}/(16\pi^{2}\varepsilon_0c^{3})$, then $$|H_\beta-H_0|\le\frac{q^2|a|^2}{16\pi^2\varepsilon_0c^3}\,\delta\left[\frac{2+\delta}{(1-\delta)^5}+\frac{5}{(1-\delta)^6}\right]$$ for all $n$. The exact rest-event clauses (a)-(e) retain their hypotheses; this additional branch supplies the general low-speed comparison, not a mechanical loss law.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the laboratory chart, units and constants of [[def-em-lab-geometry]] and [[def-em-si-conventions]]; a retarded point-geometry datum with the off-worldline retarded data $s,r,n,\beta,\kappa,\dot\beta$ of [[def-em-retarded-point-geometry]] and the point charge parameter $q$, $C=q/(4\pi\varepsilon_0)$; the retarded fields $E,B$ of [[pthm-em-lienard-wiechert]] with $S=E\times B/\mu_0$; the rest event $s_0$ with $z'(s_0)=0$, $a=z''(s_0)$, and in clause (f) a general emission event with $\beta_0=z'(s_0)/c$, $|\beta_0|\le v_*/c$, $\kappa_0(n)=1-n\cdot\beta_0$.

[F1] Lienard-Wiechert point fields: off the worldline $E=E_{\mathrm{vel}}+E_{\mathrm{acc}}$ with $E_{\mathrm{vel}}=C(1-|\beta|^{2})(n-\beta)/(\kappa^{3}r^{2})$, $E_{\mathrm{acc}}=C\,n\times((n-\beta)\times\dot\beta)/(c\kappa^{3}r)$, $B=n\times E/c$, $|E_{\mathrm{vel}}|\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$; at an emission event $(x_r,t_r)=(z(s_0)+rn,s_0+r/c)$ the retarded data are $\beta_0,\dot\beta_0=a/c,\kappa_0$ and $r$, and the same formulas and remainder bound hold there. ([[pthm-em-lienard-wiechert]] (b),(c))

[F2] Retarded emission geometry: $(x_r,t_r)$ lies off the worldline, $s(x_r,t_r)=s_0$, $r>0$, $\kappa_0=1-n\cdot\beta_0\in[1-v_*/c,1+v_*/c]$. ([[def-em-retarded-point-geometry]] (b),(c))

[F3] Sphere moments of the polar measure $\sigma$: $\int_{S^2}F(n_3)d\sigma=2\pi\int_{-1}^1F(u)du$, $\int_{S^2}(n\cdot a)f(n_3)d\sigma=2\pi a_3\int_{-1}^1uf(u)du$, $\int_{S^2}(n\cdot a)^2f(n_3)d\sigma=2\pi a_3^2\int_{-1}^1u^2f+\pi(a_1^2+a_2^2)\int_{-1}^1(1-u^2)f$, and $\int_{S^2}(n\cdot a)^2d\sigma=(4\pi/3)|a|^2$, $\int_{S^2}|n\times a|^2d\sigma=(8\pi/3)|a|^2$, $\sigma(S^2)=4\pi$. ([[lem-em-sphere-zonal-moments]] (a)-(d))

[F4] Cross-product and inner-product identities: $u\times v$ is bilinear and alternating, $u\times(v\times w)=(u\cdot w)v-(u\cdot v)w$, $|n\times(n\times w)|=|n\times w|\le|w|$ for $|n|=1$, $|u\times v|^2=|u|^2|v|^2-(u\cdot v)^2$, and $n\cdot(E\times F)=(n\times E)\cdot F$ for $|n|=1$; the Euclidean norm is that of [[def-euclidean-inner-product]]. ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]])

[F5] Flux and power reading: $S=E\times B/\mu_0$ is the Poynting energy-flux density and the boundary flux term of the Poynting balance is the field energy leaving a volume. ([[def-em-vacuum-energy-flux]] (a), [[pthm-em-poynting-balance]] (a),(c))

[F6] Integral inequalities: $|\int f|\le\int|f|$; monotonicity for the nonnegative integral; $\sigma(S^2)<\infty$. ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[lem-em-sphere-zonal-moments]] (d))

[F7] Dominated convergence on a finite measure space. ([[thm-dominated-convergence]], [[lem-em-sphere-zonal-moments]] (d))

[F8] SI relations: $C=q/(4\pi\varepsilon_0)$, $C^2/(\mu_0c^5)=q^2/(16\pi^2\varepsilon_0c^3)$, since $\varepsilon_0\mu_0c^2=1$. ([[def-em-si-conventions]])

[F9] One-variable calculus: the second fundamental theorem for continuous derivatives, the chain and power rules and the derivative of $y^m$ for integers $m$, and the mean value theorem; together with the continuity of the power functions on their domains. ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[cor-mean-value-theorem]])

[F10] The polar measure equals the chart surface measure on $S^2$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F11] $|n\cdot a|\le|a|$ for $|n|=1$; cosine has range $[-1,1]$ and is strictly decreasing on $[0,\pi]$, with $\cos0=1$, $\cos\pi=-1$ and $\cos(\pi/2)=0$; $\sin^2\theta+\cos^2\theta=1$ and sine vanishes on $[0,\pi]$ exactly at its endpoints. ([[thm-cauchy-schwarz-finite]], [[thm-intermediate-value]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]])

## Proof

**Proof technique:** direct; evaluate the rest-case field on the emitted sphere, convert the flux to the angular power density with the uniform remainder, integrate it with the sphere moments for the Larmor power and the $\sin^2$ pattern, and then repeat the computation for a general emission event with the weighted flux integral and explicit low-speed comparisons.

1.1 Field on the emitted sphere (a). At the rest event $z'(s_0)=0$, so at the emitted sphere the retarded data are $\beta=0$, $\kappa=1$, $\dot\beta=a/c$ [F2]; [F1] then gives $E_{\mathrm{vel}}=C(1-0)(n-0)/(1\cdot r^{2})=Cn/r^{2}$ and $E_{\mathrm{acc}}=C\,n\times((n-0)\times a/c)/(c\cdot1\cdot r)=C\,n\times(n\times a)/(c^{2}r)$, together with $B=n\times E/c$. Writing $\rho_E:=Cn/r^{2}$ gives $E(x_r,t_r)=C\,n\times(n\times a)/(c^{2}r)+\rho_E$ and $|\rho_E|=|C|/r^{2}\le|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$, because both factors in the last expression are at least $1$. This is (a). [F1, F2, F8, algebra]

2.1 Angular flux limit (b). At the rest event the remainder is exactly $\rho_E=Cn/r^2$ by step 1.1, so $n\times\rho_E=0$ for either sign of $C$. The identity $n\cdot(E\times(n\times E))=|n\times E|^2$ and $B=n\times E/c$ give $n\cdot S=|n\times E|^2/(\mu_0c)$. Thus $|n\times E|=|C|\,|n\times a|/(c^2r)$ and, for every $r>0$, $$r^2n\cdot S(x_r,t_r)=\frac{C^2|n\times a|^2}{\mu_0c^5}=\frac{C^2|n\times(n\times a)|^2}{\mu_0c^5}.$$ The expression is independent of $r$ and continuous in $n$, so its limit is uniform, and its sphere integral is finite by [F3, F6]. In particular the integral limit equals the integral of this density without a sign-dependent remainder estimate. The measures agree by [F10]. This proves (b) for all real charges, including $q=0$. [step 1.1, F3, F4, F6, F10, algebra]

3.1 Total power (c). By [F4], $|n\times(n\times a)|^{2}=|n\times a|^{2}=|a|^{2}-(n\cdot a)^{2}$; integrating over $S^2$ with [F3] gives $\int_{S^2}|n\times(n\times a)|^{2}d\sigma=4\pi|a|^{2}-(4\pi/3)|a|^{2}=(8\pi/3)|a|^{2}$. Substituting into step 2.1, $P_{\mathrm{em}}=\frac{C^{2}}{\mu_0c^{5}}\cdot\frac{8\pi}{3}|a|^{2}$; and $\frac{C^{2}}{\mu_0c^{5}}=\frac{q^{2}}{16\pi^{2}\varepsilon_0^{2}\mu_0c^{5}}=\frac{q^{2}}{16\pi^{2}\varepsilon_0c^{3}}$ by [F8] (using $\varepsilon_0\mu_0c^{2}=1$), so $P_{\mathrm{em}}=\frac{q^{2}|a|^{2}}{6\pi\varepsilon_0c^{3}}$. This is (c). [step 2.1, F3, F4, F8, algebra]

4.1 Angular distribution (d). For $a\ne0$ use the uniquely defined angle of (d), whose existence follows from the intermediate value theorem between the stated cosine endpoints and whose uniqueness follows from strict monotonicity [F11]. By [F4], $|n\times(n\times a)|^{2}=|a|^{2}-(n\cdot a)^{2}=|a|^{2}(1-\cos^{2}\theta)=|a|^{2}\sin^{2}\theta$; since $\sin^{2}\theta=0$ exactly for $\theta\in\{0,\pi\}$ [F11], when $q\ne0$ the pattern vanishes precisely along $\pm a$ and is maximal where $\sin^{2}\theta=1$, i.e. in the plane perpendicular to $a$; its coefficient is $\frac{C^{2}}{\mu_0c^{5}}=\frac{q^{2}}{16\pi^{2}\varepsilon_0c^{3}}$ [F8]. If $a=0$ or $q=0$, the displayed density is zero for every $n$, so $dP/d\sigma\equiv0$ and $P_{\mathrm{em}}=0$ by (c). Finally $\int_{S^2}\frac{dP}{d\sigma}d\sigma=P_{\mathrm{em}}(s_0)$ is (c). This is (d). [step 2.1, step 3.1, F3, F4, F8, F11, algebra]

5.1 General far-zone limit and weighted power (f, first part). Now let $s_0$ be an arbitrary emission event with $\beta_0:=z'(s_0)/c$, $|\beta_0|\le v_*/c$, and $a:=z''(s_0)$; the same computation as steps 1.1-2.1 applies with $\beta_0$ in place of $0$ and $\kappa_0$ in place of $1$ [F2]. By [F1], $E_{\mathrm{lead}}:=C\,n\times((n-\beta_0)\times a)/(c^{2}\kappa_0^{3}r)$ is the acceleration part and $E_{\mathrm{vel}}$ is the remainder with $|E_{\mathrm{vel}}|\le D_Er^{-2}$; writing $N_\beta:=n\times((n-\beta_0)\times a)$ and repeating the flux identity of step 2.1, $r^{2}n\cdot S=\frac{C^{2}|N_\beta|^{2}}{\mu_0c^{5}\kappa_0^{6}}+R_r(n)$ with $|R_r(n)|\le K'r^{-1}$ for $r\ge1$, uniformly in $n$ and with $K'$ independent of $n$; here $1-v_*/c\le\kappa_0\le1+v_*/c$ keeps every power of $\kappa_0$ bounded on the compact $S^2$ [F2, F6]. Hence $\kappa_0(n)\,r^{2}n\cdot S\to H_\beta(n):=\frac{C^{2}|N_\beta|^{2}}{\mu_0c^{5}\kappa_0^{5}}$ uniformly, and the weighted emitted power $P_{\mathrm{em}}:=\int_{S^2}\kappa_0\lim_{r\to\infty}(r^{2}n\cdot S)\,d\sigma=\frac{C^{2}}{\mu_0c^{5}}\int_{S^2}\frac{|N_\beta|^{2}}{\kappa_0^{5}}\,d\sigma$ is the dominated-convergence limit of the weighted fluxes, the weight $\kappa_0$ being bounded and continuous [F6, F7]. [step 2.1, step 4.1, F1, F2, F6, F7, algebra]

6.1 Evaluation of the weighted angular integral (f, second part). By [F4], $N_\beta=(n\cdot a)(n-\beta_0)-(1-n\cdot\beta_0)a$, so with $b:=|\beta_0|\in[0,v_*/c]$ and $u:=n\cdot\beta_0/b$ (any unit vector $e_3$ along $\beta_0$ when $b>0$; the case $b=0$ is step 3.1) one gets $$|N_\beta|^{2}=-(1-b^{2})(n\cdot a)^{2}+2(1-bu)b\,a_\parallel(n\cdot a)+(1-bu)^{2}|a|^{2},$$ where $a_\parallel$ is the component of $a$ along $\beta_0$. Choose orthonormal spatial coordinates with third unit vector $\beta_0/b$ when $b>0$ (when $b=0$, choose any standard unit vector), and put $a_\parallel=a\cdot e_3$ and $a_\perp=a-a_\parallel e_3$; this coordinate change preserves the polar measure by [F10], and $a_\perp^2$ below abbreviates $|a_\perp|^2$. Averaging the $\varphi$-dependence over the sphere with [F3] (the linear term in the tangential component of $n$ integrates to $0$, and the square of that component integrates to $\pi\int(1-u^{2})f$), the parallel coefficient of $|N_\beta|^{2}/(1-bu)^{5}$ reduces to $1-u^{2}$ and the perpendicular coefficient to $(1-bu)^{2}-\tfrac{1-b^{2}}{2}(1-u^{2})$. Hence, with $J_5:=\int_{-1}^{1}(1-u^{2})(1-bu)^{-5}du$ and $J_3:=\int_{-1}^{1}(1-bu)^{-3}du$, $$\int_{S^2}\frac{|N_\beta|^{2}}{\kappa_0^{5}}d\sigma=2\pi a_\parallel^{2}J_5+2\pi a_\perp^{2}\Bigl[J_3-\frac{1-b^{2}}{2}J_5\Bigr].$$ The substitution $y=1-bu$ (for $b>0$, with $du=-dy/b$) and the second fundamental theorem [F9], with the antiderivatives $-y^{-2}/2$ and $b^{-3}\bigl[(1-b^{2})y^{-4}/4-2y^{-3}/3+y^{-2}/2\bigr]$, give $J_3=2/(1-b^{2})^{2}$ and $J_5=4/(3(1-b^{2})^{3})$; at $b=0$ the same formulas follow by direct integration ($J_3=2$, $J_5=4/3$) and all expressions are continuous in $b$, so no division by $b$ is needed in the conclusion. Therefore $$\int_{S^2}\frac{|N_\beta|^{2}}{\kappa_0^{5}}d\sigma=\frac{8\pi}{3}\Bigl[a_\parallel^{2}(1-b^{2})^{-3}+a_\perp^{2}(1-b^{2})^{-2}\Bigr]=\frac{8\pi}{3}\gamma_0^{6}\bigl(|a|^{2}-|\beta_0\times a|^{2}\bigr),$$ because $(1-b^{2})^{-1}=\gamma_0^{2}$, $(1-b^{2})^{-3}=\gamma_0^{6}$ and $|a|^{2}-|\beta_0\times a|^{2}=a_\parallel^{2}+(1-b^{2})a_\perp^{2}$ by [F4]. Substituting into step 5.1 and converting the constant with [F8] gives $P_{\mathrm{em}}=\gamma_0^{6}(|a|^{2}-|\beta_0\times a|^{2})\frac{q^{2}}{6\pi\varepsilon_0c^{3}}$, the displayed general formula. [step 5.1, F3, F4, F8, F9, F10, algebra]

7.1 Uniform low-speed comparisons (f, third part). Write $P_{\mathrm L}=q^{2}|a|^{2}/(6\pi\varepsilon_0c^{3})$ and $P_{\mathrm{em}}=\gamma_0^{6}(a_\parallel^{2}+\gamma_0^{-2}a_\perp^{2})\frac{q^{2}}{6\pi\varepsilon_0c^{3}}$ [step 6.1]. Since $\gamma_0\ge1$, one has $\gamma_0^{6}a_\parallel^{2}\ge a_\parallel^{2}$ and $\gamma_0^{4}a_\perp^{2}\ge a_\perp^{2}$, so $P_{\mathrm{em}}\ge P_{\mathrm L}$; and $\gamma_0^{6}a_\parallel^{2}+\gamma_0^{4}a_\perp^{2}\le\gamma_0^{6}|a|^{2}$, so $P_{\mathrm{em}}\le\gamma_0^{6}P_{\mathrm L}$. If $b=|\beta_0|\le\delta<1$ then $\gamma_0^{2}=(1-b^{2})^{-1}\le(1-\delta^{2})^{-1}$, hence $P_{\mathrm L}\le P_{\mathrm{em}}\le(1-\delta^{2})^{-3}P_{\mathrm L}$. Moreover $P_{\mathrm{em}}-P_{\mathrm L}=\bigl[(\gamma_0^{6}-1)a_\parallel^{2}+(\gamma_0^{4}-1)a_\perp^{2}\bigr]\frac{q^{2}}{6\pi\varepsilon_0c^{3}}\le(\gamma_0^{6}-1)P_{\mathrm L}\le\bigl[(1-\delta^{2})^{-3}-1\bigr]P_{\mathrm L}\le3\delta^{2}(1-\delta^{2})^{-3}P_{\mathrm L}$, where the last step is the elementary inequality $(1-t)^{-3}-1\le3t(1-t)^{-3}$ at $t=\delta^{2}$; all these inequalities are valid also when $a=0$ or $q=0$, with both sides zero, and no division by $P_{\mathrm L}$ is performed. For $\delta=0$ the angular densities coincide identically. For $0<\delta<1$, fix $n$ and use coordinates with $n=e_3$: writing $p=(a_1,a_2)$, $h=(\beta_{0,1},\beta_{0,2})$, $t=a_3$ and $\beta_{0,3}$, one has $N_0=-p$ and $N_\beta=-(\kappa_0p+th)$ by [F4], so with $D:=|N_\beta|^{2}\kappa_0^{-5}-|N_0|^{2}$, $$D=|p|^{2}(\kappa_0^{-3}-1)+2\kappa_0^{-4}t(p\cdot h)+\kappa_0^{-5}t^{2}|h|^{2}.$$ Since $1-\delta\le\kappa_0\le1+\delta$, the mean value theorem [F9] gives $|\kappa_0^{-3}-1|\le3\delta(1-\delta)^{-4}$ and $|\kappa_0^{-4}|\le(1-\delta)^{-4}$, $\kappa_0^{-5}\le(1-\delta)^{-5}$; also $|h|\le\delta$ and $|p|,|t|\le|a|$, and $2|t||p|\le|t|^{2}+|p|^{2}$. Hence $|D|\le|a|^{2}\bigl[4\delta(1-\delta)^{-4}+\delta^{2}(1-\delta)^{-5}\bigr]$, and this is at most $|a|^{2}\delta\bigl[(2+\delta)(1-\delta)^{-5}+5(1-\delta)^{-6}\bigr]$ because, after dividing by $\delta(1-\delta)^{-4}$, the inequality reduces to $4-3\delta\le2+\delta+5(1-\delta)^{-1}$, whose left side is at most $4$ and whose right side exceeds $5$. Multiplying by $\frac{q^{2}}{16\pi^{2}\varepsilon_0c^{3}}$ gives the displayed bound on $|H_\beta-H_0|$. [step 6.1, F2, F4, F9, algebra]

8.1 Scope and conclusion (e). At a rest event $z'(s_0)=0$ one has $\kappa_0(n)=1-n\cdot 0=1$ for every $n\in S^2$ [F2], so the emission-time Jacobian is identically $1$ and no retarded-time conversion factor appears: the limits of (b) are simultaneously the fixed-sphere flux and the emitted power per unit emission time, and the angular and total powers of (c)-(d) are the emitted quantities of the rest event. The computation used only the prescribed worldline, the retarded model fields and the adopted causal selection of [[pthm-em-lienard-wiechert]] and [[post-em-radiation-selection]]; it forms no product of distributions, asserts no self-force, radiation reaction, mass derivation or mechanical evolution law, and makes no empirical or measurement claim, while clause (f) records the general low-speed comparison as a separate quantified statement rather than a loss law. Steps 1.1-7.1 together with this clause prove (a)-(f). [step 1.1, step 3.1, step 5.1, step 7.1, F2, F5, F10, algebra] ∎
