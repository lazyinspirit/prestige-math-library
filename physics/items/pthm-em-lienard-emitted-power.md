---
id: pthm-em-lienard-emitted-power
kind: physics-theorem
title: "Relativistic emitted power of a prescribed point charge at a general emission event"
domain: physics
status: draft
origin: pipeline
dependency_level: 22
deps: [pthm-em-lienard-wiechert, def-em-retarded-point-geometry, thm-em-retarded-root-and-fields, lem-em-sphere-zonal-moments, pthm-em-poynting-balance, def-em-vacuum-energy-flux, thm-sr-proper-time-and-observer-decomposition, def-em-fields, def-em-si-conventions, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-integral-triangle-inequality, thm-dominated-convergence, thm-ftc-second-part, lem-derivative-of-a-power, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-euclidean-inner-product, def-countable-choice, def-cross-product-in-r3, def-em-lab-geometry, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, pthm-em-larmor-nonrelativistic, prop-order-and-scalar-rules-for-the-nonnegative-integral]
dependency_roles:
  pthm-em-lienard-wiechert: physical-result
  def-em-retarded-point-geometry: formulation-prerequisite
  thm-em-retarded-root-and-fields: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  pthm-em-poynting-balance: physical-result
  def-em-vacuum-energy-flux: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  pthm-em-larmor-nonrelativistic: physical-result
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Emitted power per unit emission time of a prescribed point charge at a general emission event on a uniformly subluminal $C^3$ worldline: the $\\kappa$-weighted far-zone flux, the closed form $q^2\\gamma^6(|a|^2-|\\beta\\times a|^2)/(6\\pi\\varepsilon_0c^3)=q^2\\eta(A,A)/(6\\pi\\varepsilon_0c^3)$ and the uniform $\\delta$-comparison with the instantaneous-rest Larmor value. Excluded: dynamical evolution, self-force, radiation reaction, mass derivation, coordinate-time loss rates, uniformity in the emission event and every empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.5$ printed p. 169, 'Power Radiated Again: Relativistic Larmor Formula', equations (6.55)-(6.56): the relativistic radiated power and emission-time/observation-time factor; the framework's item makes the conversion factor an explicit part of the definition of emitted power."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 129-131 ('Accelerated charges', 'The Larmor formula', 'Radiation losses') of chapter 10: the acceleration field, rest Larmor power and relativistic radiation loss, with the emission-versus-reception time discussion."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.19-11.21 (PDF pp. 139-141): covariant radiation expressions and the emission-time conversion; the framework's positive-weight definition keeps the two power notions separate."
---

## Statement

Assume $\mathrm{AC}_\omega$ as carried by the cited point-source suppliers. Let the setting be that of [[pthm-em-lienard-wiechert]]: a charge $q\in\mathbb R$ ($C:=q/(4\pi\varepsilon_0)$) on a prescribed $C^3$ uniformly subluminal worldline $z$ in the laboratory chart of [[def-em-lab-geometry]] with the units of [[def-em-si-conventions]], with retarded fields $E,B$ off the worldline and the uniform far-zone remainder of that item; let $S:=E\times B/\mu_0$ ([[def-em-vacuum-energy-flux]]). Let $s_0$ be an emission event, $\beta_0:=z'(s_0)/c$, $\gamma_0:=(1-|\beta_0|^2)^{-1/2}$, $a:=z''(s_0)$, and for $n\in S^2$ put $x_r:=z(s_0)+rn$, $t_r:=s_0+r/c$, $\kappa_0(n):=1-n\cdot\beta_0$. Define the **emitted power at the emission event $s_0$** by the $\kappa_0$-weighted far-zone flux

$$P_{\mathrm{em}}(s_0):=\lim_{r\to\infty}\int_{S^2}\kappa_0(n)\,r^{2}\,n\cdot S(x_r,t_r)\,d\sigma(n),$$

$d\sigma$ the polar surface measure (equal to the chart surface measure). The weight $\kappa_0$ is the emission-time/observation-time conversion factor of the retarded root, $\partial_ts=1/\kappa$, equivalently the moving-boundary correction $S\cdot n-(z'\cdot n)u$ at leading radiation order, where $u=|S|/c$ for the transverse far field. Then:

(a) [Weighted flux limit] The limit exists and $$P_{\mathrm{em}}(s_0)=\frac{C^{2}}{\mu_0c^{5}}\int_{S^2}\frac{\bigl|n\times\bigl((n-\beta_0)\times a\bigr)\bigr|^{2}}{\kappa_0(n)^{5}}\,d\sigma(n).$$

(b) [Closed form and four-acceleration form] If $b:=|\beta_0|<1$ and $a=a_\parallel e_3+a_\perp$ is decomposed along $\beta_0=|\beta_0|e_3$ and perpendicular to it, then $$P_{\mathrm{em}}(s_0)=\frac{q^{2}\gamma_0^{6}}{6\pi\varepsilon_0c^{3}}\bigl(|a|^{2}-|\beta_0\times a|^{2}\bigr)=\frac{q^{2}}{6\pi\varepsilon_0c^{3}}\,\eta(A,A),$$ where $A$ is the four-acceleration of the worldline at $s_0$ and $\eta(A,A)=\gamma_0^{4}|a|^{2}+\gamma_0^{6}(\beta_0\cdot a)^{2}=\gamma_0^{6}(|a|^{2}-|\beta_0\times a|^{2})$ ([[thm-sr-proper-time-and-observer-decomposition]](e)). At $\beta_0=0$ the weight is $1$ and (b) reduces to the instantaneous-rest Larmor power of [[pthm-em-larmor-nonrelativistic]].

(c) [Low-speed comparison] For every $\delta\in(0,1)$ and every emission event with $|\beta_0|\le\delta$, $$\frac{q^{2}|a|^{2}}{6\pi\varepsilon_0c^{3}}\le P_{\mathrm{em}}(s_0)\le\frac{(1-\delta^{2})^{-3}q^{2}|a|^{2}}{6\pi\varepsilon_0c^{3}},\qquad\text{hence}\qquad \Bigl|P_{\mathrm{em}}(s_0)-\frac{q^{2}|a|^{2}}{6\pi\varepsilon_0c^{3}}\Bigr|\le\frac{3\delta^{2}}{(1-\delta^{2})^{3}}\frac{q^{2}|a|^{2}}{6\pi\varepsilon_0c^{3}},$$ a comparison uniform over the events with $|\beta_0|\le\delta$. In particular the instantaneous-rest formula is the exact $\delta=0$ case, and no term of the comparison is asserted to be small without the explicit hypothesis $|\beta_0|\le\delta$.

(d) [Scope] $P_{\mathrm{em}}(s_0)$ is the power emitted at the single retarded event $s_0$ per unit emission time, defined by the weighted far-zone flux; it is not a coordinate-time loss rate of a dynamical particle, and no dynamics (self-force, radiation reaction, mass), no uniformity in $s_0$, and no empirical or measurement claim is made. The near fields are $O(r^{-2})$ with their uniform remainder as in [[pthm-em-lienard-wiechert]](c), so their contribution to the weighted $r^2$ flux vanishes; the $\kappa_0$-weighting is part of the definition of emitted power and is not an additional physical assumption.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the setting of [[pthm-em-lienard-wiechert]]: charge $q$, constant $C$, prescribed uniformly subluminal $C^3$ worldline $z$, retarded fields $E,B$ and $S=E\times B/\mu_0$; an emission event $s_0$ with $\beta_0=z'(s_0)/c$, $\gamma_0$, $a=z''(s_0)$, and the emission spheres $x_r=z(s_0)+rn$, $t_r=s_0+r/c$, $\kappa_0(n)=1-n\cdot\beta_0$.

[F1] Emitted-power branch: for a general emission event the $\kappa_0$-weighted far-zone flux has the limit $P_{\mathrm{em}}(s_0)=\frac{C^{2}}{\mu_0c^{5}}\int_{S^2}|n\times((n-\beta_0)\times a)|^{2}\kappa_0^{-5}d\sigma$ (the uniform pointwise convergence and the interchange of limit and integral being established in its proof), and this equals $\gamma_0^{6}(|a|^{2}-|\beta_0\times a|^{2})q^{2}/(6\pi\varepsilon_0c^{3})$; for $|\beta_0|\le\delta<1$ it satisfies $P_{\mathrm L}\le P_{\mathrm{em}}\le(1-\delta^{2})^{-3}P_{\mathrm L}$ and $|P_{\mathrm{em}}-P_{\mathrm L}|\le3\delta^{2}(1-\delta^{2})^{-3}P_{\mathrm L}$ with $P_{\mathrm L}=q^{2}|a|^{2}/(6\pi\varepsilon_0c^{3})$, and at $\beta_0=0$ it reduces to the exact rest-event Larmor power. ([[pthm-em-larmor-nonrelativistic]] (a)-(d),(f))

[F2] Point fields and remainder: on $\Omega\setminus\Gamma$, $E=E_{\mathrm{vel}}+E_{\mathrm{acc}}$, $B=n\times E/c$, with the velocity part $O(r^{-2})$ bounded by $|C|(1+v_*/c)(1-v_*/c)^{-3}r^{-2}$ and the acceleration part the leading term; at $(x_r,t_r)$ the retarded data are those of the emission event and $s(x_r,t_r)=s_0$. ([[pthm-em-lienard-wiechert]] (b),(c), [[thm-em-retarded-root-and-fields]] (c),(d))

[F3] Four-acceleration identity: for a $C^2$ chart worldline $t\mapsto(ct,r(t))$ with coordinate velocity $w(t)=r'(t)$ and acceleration $a(t)=w'(t)$, the four-acceleration satisfies $\eta(A,A)=\gamma_w^{4}|a|^{2}+\gamma_w^{6}(w\cdot a)^{2}/c^{2}\ge0$, vanishing exactly when $a=0$. ([[thm-sr-proper-time-and-observer-decomposition]] (e))

[F4] Retarded root: $\partial_ts=1/\kappa$ off the worldline, and $\kappa_0(n)=1-n\cdot\beta_0\in[1-v_*/c,1+v_*/c]$. ([[def-em-retarded-point-geometry]] (a),(b))

[F5] Conventions: $|u\times v|^{2}=|u|^{2}|v|^{2}-(u\cdot v)^{2}$ with the Euclidean inner product; the polar measure equals the chart surface measure; $\varepsilon_0\mu_0c^{2}=1$ and $C=q/(4\pi\varepsilon_0)$. ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-em-si-conventions]])

[F6] Flux reading and integral rules: $S$ is the Poynting energy-flux density; $|\int f|\le\int|f|$, monotonicity holds, and dominated convergence applies on the finite-measure sphere. ([[def-em-vacuum-energy-flux]], [[pthm-em-poynting-balance]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-dominated-convergence]])

## Proof

**Proof technique:** direct translation of the emitted-power branch already proved on this page, together with the four-acceleration identity and the scope reading of the weighted definition.

1.1 Weighted flux limit (a). The definition of $P_{\mathrm{em}}(s_0)$ in the Statement is the limit of the $\kappa_0$-weighted far-zone fluxes, and the corresponding limit and its value $\frac{C^{2}}{\mu_0c^{5}}\int_{S^2}|n\times((n-\beta_0)\times a)|^{2}\kappa_0^{-5}d\sigma$ are exactly clause (f) of [F1], whose proof establishes the uniform pointwise convergence of $\kappa_0r^{2}n\cdot S$ to the displayed integrand and the domination needed to pass the limit through the sphere integral [F6]; the same clause uses $\kappa_0=1-n\cdot\beta_0$ and $r=c(t_r-s_0)$ on the emitted spheres [F2]. The interpretation of the weight as the emission-time/observation-time factor is $\partial_ts=1/\kappa$ of [F4], evaluated at the emission event, and the boundary-corrected reading of $S\cdot n-(z'\cdot n)u$ is the leading-order form of that factor. This is (a). [F1, F2, F4, F6, algebra]

2.1 Closed form and four-acceleration form (b). Clause (f) of [F1] evaluates the integral as $\gamma_0^{6}(|a|^{2}-|\beta_0\times a|^{2})q^{2}/(6\pi\varepsilon_0c^{3})$, which is the first displayed equality; at $\beta_0=0$ the weight is $1$ and the formula reduces to the rest-event Larmor statement of [F1]. For the four-acceleration form, apply [F3] to the chart worldline $t\mapsto(z(t),t)$: its coordinate velocity is $w=z'(s_0)=c\beta_0$, its Lorentz factor is $\gamma_w=\gamma_0$, and its coordinate acceleration is $a=z''(s_0)$, so $\eta(A,A)=\gamma_0^{4}|a|^{2}+\gamma_0^{6}(c\beta_0\cdot a)^{2}/c^{2}=\gamma_0^{4}|a|^{2}+\gamma_0^{6}(\beta_0\cdot a)^{2}$. By [F5], $\gamma_0^{4}|a|^{2}+\gamma_0^{6}(\beta_0\cdot a)^{2}=\gamma_0^{6}\bigl[(1-|\beta_0|^{2})|a|^{2}+(\beta_0\cdot a)^{2}\bigr]=\gamma_0^{6}\bigl(|a|^{2}-|\beta_0\times a|^{2}\bigr)$, since $|\beta_0\times a|^{2}=|\beta_0|^{2}|a|^{2}-(\beta_0\cdot a)^{2}$. Hence $P_{\mathrm{em}}=q^{2}\eta(A,A)/(6\pi\varepsilon_0c^{3})$. This is (b). [step 1.1, F1, F3, F5, algebra]

3.1 Low-speed comparison (c). The eventwise inequalities $P_{\mathrm L}\le P_{\mathrm{em}}\le\gamma_0^{6}P_{\mathrm L}$ and the uniform bounds $P_{\mathrm L}\le P_{\mathrm{em}}\le(1-\delta^{2})^{-3}P_{\mathrm L}$, $|P_{\mathrm{em}}-P_{\mathrm L}|\le3\delta^{2}(1-\delta^{2})^{-3}P_{\mathrm L}$ for $|\beta_0|\le\delta<1$ are clause (f) of [F1], transported verbatim to this setting; the case $|\beta_0|=0$ gives the exact rest formula and is the $\delta=0$ endpoint of the comparison. The statement adds no smallness assertion beyond the explicit hypothesis $|\beta_0|\le\delta$. This is (c). [step 2.1, F1, algebra]

4.1 Scope (d). The definition is per unit emission time at the single event $s_0$: the weight is the retarded Jacobian of [F4], not a dynamical rate, and no worldline evolution, self-force, radiation reaction or mass is introduced anywhere in steps 1.1-3.1. The near (velocity) part of the fields is $O(r^{-2})$ with the uniform remainder of [F2], so its product contributions to $S$ are $O(r^{-3})$ and $O(r^{-4})$, and after multiplication by $r^{2}$ and integration over the compact sphere they contribute $O(r^{-1})$ and $O(r^{-2})$ respectively, vanishing in the limit; this is why the weighted definition isolates the acceleration-field radiation. The $\kappa_0$-weighting is declared as part of the definition of emitted power, not inferred as a physical law, and no empirical or measurement content is added. This is (d). [step 1.1, step 3.1, F2, F4, F6, algebra] ∎
