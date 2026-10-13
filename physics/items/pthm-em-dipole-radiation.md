---
id: pthm-em-dipole-radiation
kind: physics-theorem
title: "Controlled electric-dipole far field and retarded-time radiated power of a compact smooth source"
domain: physics
status: published
origin: pipeline
dependency_level: 20
deps: [pthm-em-retarded-potentials, thm-em-radiation-asymptotic-flux, post-em-radiation-selection, def-em-sources, def-em-electric-moments, def-em-vacuum-energy-flux, pthm-em-poynting-balance, lem-em-sphere-zonal-moments, def-em-lab-geometry, def-em-si-conventions, def-em-fields, cor-mean-value-theorem, thm-integral-triangle-inequality, lem-em-parameter-integrals, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-countable-choice, lem-cross-product-is-bilinear-alternating-and-orthogonal, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-cauchy-schwarz-finite, def-euclidean-inner-product, thm-heine-cantor-metric, thm-extreme-value-metric]
dependency_roles:
  thm-heine-cantor-metric: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  pthm-em-retarded-potentials: physical-result
  thm-em-radiation-asymptotic-flux: mathematical-premise
  post-em-radiation-selection: physical-assumption
  def-em-sources: formulation-prerequisite
  def-em-electric-moments: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  pthm-em-poynting-balance: physical-result
  lem-em-sphere-zonal-moments: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  cor-mean-value-theorem: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Far-zone electric-dipole radiation of a prescribed smooth conserved source of compact spatial support and compact time support: the dipole moment identities, the explicit absolute dipole-replacement error $D(u)$, the uniform leading far fields and the retarded-time radiated power with its absolute error. Excluded: point charges; sources without the compact smooth branch; claims that slowness alone controls $D(u)$; observation-time power and signal-speed readings; self-force, radiation reaction and every empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.2.1$ printed pp. 144-146 ('Electric Dipole Radiation'): the dipole moment $p(t)=\\int\\rho\\,r\\,dV$, the far-zone $1/r$ dipole fields and the long-wavelength condition on the source size; the framework's item keeps the source-variation error explicit through $D(u)$ instead of assuming a slowness regime."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 94-95 ('The Hertzian dipole', 'Electric dipole radiation') of chapter 9: the oscillating dipole source, the far-zone fields and the $\\sin^2\\theta$ angular pattern; the framework replaces the harmonic ansatz by the general source history with absolute error."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.3$ printed pp. 11.7-11.13 (PDF pp. 127-133): far/near zones, multipole radiation and averaging for a localized source, with the multipole error conditions stated explicitly."
---

## Statement

Assume the setting and hypotheses of [[thm-em-radiation-asymptotic-flux]] and $\mathrm{AC}_\omega$ as carried by its suppliers: $c>0$, $\mu_0>0$, $a>0$, $t_0<T$, jointly $C^\infty$ fields $\rho,J$ vanishing outside $\overline B_a(0)\times[t_0,T]$ and satisfying $\partial_t\rho+\operatorname{div}J=0$; let $\varphi,A$ be the retarded potentials and $E:=-\nabla\varphi-\partial_tA$, $B:=\nabla\times A$ the fields, with $S:=E\times B/\mu_0$ ([[def-em-vacuum-energy-flux]], [[pthm-em-poynting-balance]]). Adopt the causal selection [[post-em-radiation-selection]]: these retarded fields are the fields of the source model (the compact smooth instance established by [[pthm-em-retarded-potentials]]). Define the **time-dependent electric dipole moment**

$$p(u):=\int_{B_a}y\,\rho(y,u)\,dy\in\mathbb R^3$$

(componentwise, about the fixed chart origin of [[def-em-lab-geometry]]; it is the fixed-time analogue of the static source moment of [[def-em-electric-moments]]), and, as in the asymptotic theorem, $I(n,u):=\int_{B_a}J(y,u+n\cdot y/c)\,dy$, $V(n,u):=\partial_uI(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy$ and

$$D(u):=\frac{a}{c}\int_{B_a}\sup_{|v-u|\le a/c}|J_{tt}(y,v)|\,dy.$$

Then:

(a) [Moment identities] $p\in C^\infty(\mathbb R;\mathbb R^3)$, $p'(u)=\int_{B_a}J(y,u)\,dy$, $p''(u)=\int_{B_a}J_t(y,u)\,dy$, $\int_{B_a}\rho_t(y,u)\,dy=0$ and the total charge $\int_{B_a}\rho(y,u)\,dy$ vanishes for every $u$.

(b) [Dipole replacement error] $|V(n,u)-p''(u)|\le D(u)$ for every $n\in S^2$ and every $u\in[t_0,T]$: the explicit absolute error of the dipole approximation to the source's transverse current moment.

(c) [Leading fields] With $\Gamma_E$, $\Gamma_B$ the constants of [[thm-em-radiation-asymptotic-flux]](b) (depending only on $a,c,\mu_0$ and the listed source suprema), for every $n\in S^2$, $u\in[t_0,T]$, $r\ge2a$:

$$\Bigl|E\bigl(rn,u+\tfrac rc\bigr)-\frac{\mu_0}{4\pi r}n\times(n\times p''(u))\Bigr|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0D(u)}{4\pi r},\qquad \Bigl|B\bigl(rn,u+\tfrac rc\bigr)-\frac{n\times E(rn,u+\tfrac rc)}{c}\Bigr|\le\frac{\Gamma_B+\Gamma_E/c}{r^2}.$$

The displayed dipole field approximates the actual leading far field $E_{\rm lead}=\mu_0n\times(n\times V)/(4\pi r)$ with the stated absolute $D(u)/r$ error. Equality of these leading fields requires $n\times(n\times(V-p''))=0$; $V=p''$ and, in particular, $D(u)=0$ are sufficient. All errors are uniform in $n$ at fixed $u$.

(d) [Retarded-time radiated power] The limit of [[thm-em-radiation-asymptotic-flux]](c) equals $\mu_0|p''(u)|^2/(6\pi c)+R(u)$ with the explicit absolute error

$$|R(u)|\le\frac{\mu_0\bigl(2|p''(u)|D(u)+D(u)^2\bigr)}{4\pi c},\qquad\text{so}\qquad \lim_{r\to\infty}\int_{S^2}r^2n\cdot S\bigl(rn,u+\tfrac rc\bigr)d\sigma=\frac{\mu_0}{6\pi c}|p''(u)|^2\ \text{ whenever } D(u)=0.$$

The evaluation uses the sphere moment $\int_{S^2}|n\times p''|^2d\sigma=(8\pi/3)|p''|^2$ of [[lem-em-sphere-zonal-moments]](d). The limit is at fixed retarded time $u$, not at fixed observation time.

(e) [Scope] The compact smooth source branch only; the dipole error is absolute and explicitly controlled by $D(u)$, and no assertion is made that slow or 'nonrelativistic' source motion alone makes $D(u)$ small -- that is a hypothesis on the source's time variation. No point charge, no moving point source, no radiation reaction, no self-force and no empirical or measurement content; the failure of the correspondence with an oscillator for rapidly varying sources is retained through $D(u)$. Separately retain the sharper actual source estimate $|B(rn,u+r/c)-n\times E_{\rm lead}(n,u,r)/c|\le\Gamma_B/r^2$, with $E_{\rm lead}=\mu_0n\times(n\times V)/(4\pi r)$; the bound against the actual E uses the combined constant displayed in (c).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the hypotheses of [[thm-em-radiation-asymptotic-flux]]: constants $c>0$, $\mu_0>0$, $a>0$, $t_0<T$, jointly $C^\infty$ sources $(\rho,J)$ vanishing outside $\overline B_a(0)\times[t_0,T]$ and satisfying $\partial_t\rho+\operatorname{div}J=0$; the retarded potentials and fields with $S=E\times B/\mu_0$; the dipole moment $p$, the moments $I,V$ and the error coefficient $D$ of the Statement.

[F1] Far-zone expansion of [[thm-em-radiation-asymptotic-flux]] (b): with $\mathbf I(n,u)=\int_{B_a}J(y,u+n\cdot y/c)dy$, $\mathbf V=\partial_u\mathbf I$, $\mathbf E_{\mathrm{lead}}(n,u,r)=\frac{\mu_0}{4\pi r}n\times(n\times\mathbf V(n,u))$ and $\Gamma_E,\Gamma_B$ constants depending only on $a,c,\mu_0$ and the source suprema, for all $n\in S^2$, $u\in[t_0,T]$, $r\ge2a$ one has $|\mathbf E(rn,u+r/c)-\mathbf E_{\mathrm{lead}}(n,u,r)|\le\Gamma_E/r^2$ and $|\mathbf B(rn,u+r/c)-n\times\mathbf E_{\mathrm{lead}}(n,u,r)/c|\le\Gamma_B/r^2$. ([[thm-em-radiation-asymptotic-flux]] (b))

[F2] Retarded-time flux limit of [[thm-em-radiation-asymptotic-flux]] (c): for every $u\in[t_0,T]$, $\lim_{r\to\infty}\int_{S^2}r^2n\cdot S(rn,u+\tfrac rc)\,d\Omega(n)=\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times\mathbf V(n,u)|^2\,d\Omega(n)$, a limit at fixed retarded time; $d\Omega$ is the sphere surface measure, which equals the polar measure $\sigma$ on $S^2$. ([[thm-em-radiation-asymptotic-flux]] (c))

[F3] Energy flux reading: $S=E\times B/\mu_0$ is the Poynting energy-flux density of [[def-em-vacuum-energy-flux]], and the fixed-volume Poynting balance of [[pthm-em-poynting-balance]] contains $-\oint S\cdot n\,dS$, the negative of the outward field-energy flux, in the field-energy rate. ([[def-em-vacuum-energy-flux]], [[pthm-em-poynting-balance]])

[F4] Source moments: the static dipole moment and total charge of a compactly supported charge distribution about the chart origin are those of [[def-em-electric-moments]](a); the present $p(u)$ is the fixed-time analogue for the moving source. ([[def-em-electric-moments]])

[F5] Parameter integrals over a fixed compact set: if $f,\partial_tf$ are continuous on a neighbourhood of $K\times J$ with $K$ compact measurable of finite measure, then $t\mapsto\int_Kf$ is differentiable with derivative $\int_K\partial_tf$; iterating gives $C^\infty$ dependence for $C^\infty$ integrands. ([[lem-em-parameter-integrals]])

[F6] Divergence theorem on a bounded $C^1$ domain: $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu\,dS$ for $F\in C^1(\overline\Omega;\mathbb R^3)$. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F7] Mean value theorem: if $f:[s_1,s_2]\to\mathbb R$ is continuous and differentiable in the interior, then $f(s_2)-f(s_1)=f'(s_*)(s_2-s_1)$ for some interior $s_*$. ([[cor-mean-value-theorem]])

[F8] Cauchy-Schwarz: $|e\cdot w|\le|e||w|$ for $e,w\in\mathbb R^3$. ([[thm-cauchy-schwarz-finite]], [[def-euclidean-inner-product]])

[F9] Integral triangle inequality and monotonicity: $|\int f|\le\int|f|$ for integrable $f$, and $0\le f\le g$ gives $\int f\le\int g$ for the nonnegative integral. ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F10] Cross product identities: $u\times v$ is bilinear and alternating, $n\cdot(u\times v)=\det(n,u,v)$, and for $|n|=1$ one has $n\cdot(n\times w)=0$, $n\times(n\times w)=n(n\cdot w)-w$, $|n\times(n\times w)|=|n\times w|\le|w|$; and for $a_\perp:=a-(n\cdot a)n$ one has $a\cdot b-(n\cdot a)(n\cdot b)=a_\perp\cdot b_\perp$. ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-euclidean-inner-product]])

[F11] Shifted source moments: $V(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)dy=\partial_uI(n,u)$. ([[thm-em-radiation-asymptotic-flux]] (a),(b))

[F12] Sphere moment: $\int_{S^2}|n\times a|^2\,d\sigma(n)=\frac{8\pi}{3}|a|^2$ for every $a\in\mathbb R^3$, and $\sigma(S^2)=4\pi$. ([[lem-em-sphere-zonal-moments]] (d))

[F13] Compact smooth branch: for the same source class the retarded fields satisfy the smooth vacuum Maxwell equations and the total charge vanishes: $\int_{B_a}\rho(y,u)dy=0$ for every $u$, and the retarded pair is the adopted selected branch. ([[pthm-em-retarded-potentials]] (b),(f), [[post-em-radiation-selection]])

[F14] Source support and regularity conventions: $(\rho,J)$ are the smooth source fields of [[def-em-sources]], with the support hypothesis of the Given. ([[def-em-sources]])

[F15] A continuous function on a nonempty compact set attains finite extrema and is uniformly continuous. ([[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

## Proof

**Proof technique:** direct; obtain the moment identities by differentiating the dipole integral and integrating the continuity equation by parts, bound the moment replacement by the mean value theorem, transfer the far-zone expansion of [F1] to the dipole fields, and evaluate the flux limit of [F2] using the exact sphere moment [F12] and the pointwise replacement bound.

1.1 Moment identities (a). The moment $p(u)=\int_{B_a}y\,\rho(y,u)dy$ is the fixed-time analogue of the static source moment of [F4], a convention about which moment is computed and not a dynamical identity. Since $\rho$ is jointly $C^\infty$ and supported in the fixed compact set $\overline B_a(0)\times[t_0,T]$, repeated application of [F5] to $u\mapsto p(u)$ shows $p\in C^\infty$ with $p'(u)=\int_{B_a}y\,\rho_t(y,u)dy$ and $p''(u)=\int_{B_a}y\,\rho_{tt}(y,u)dy$ [F14]. For the first derivative, fix $u$ and $R>a$: the continuity equation gives $\int_{B_a}y_i\rho_t(y,u)dy=-\int_{B_a}y_i\operatorname{div}J(y,u)dy$, and since $\operatorname{div}(y_iJ)=J_i+y_i\operatorname{div}J$, the divergence theorem [F6] on $B_R$ gives $\int_{B_R}\operatorname{div}(y_iJ)dy=\int_{\partial B_R}y_iJ\cdot\nu\,dS=0$ because $J$ vanishes on $\partial B_R$; hence $\int_{B_a}y_i\operatorname{div}J\,dy=-\int_{B_a}J_i\,dy$ and $p_i'(u)=\int_{B_a}J_i(y,u)dy$ [F9]. Differentiating this identity once more with [F5] gives $p''(u)=\int_{B_a}J_t(y,u)dy$, the displayed second moment identity. The same divergence theorem with weight $1$ gives $\int_{B_a}\rho_t(y,u)dy=-\int_{B_a}\operatorname{div}J(y,u)dy=0$, and the vanishing of the total charge is clause (f) of [F13] for this source class. This is (a). [F4, F5, F6, F9, F13, F14, algebra]

2.1 Dipole replacement error (b). First $D(u)$ is well defined and finite. For fixed $u$, the function $g_u(y):=\max_{|v-u|\le a/c}|J_{tt}(y,v)|$ attains its maximum by [F15]. Moreover $|g_u(y)-g_u(y')|\le\sup_{|v-u|\le a/c}\bigl||J_{tt}(y,v)|-|J_{tt}(y',v)|\bigr|$, so uniform continuity on $\overline B_a\times[u-a/c,u+a/c]$ makes $g_u$ continuous and bounded on $\overline B_a$. It is therefore measurable and integrable on the finite-measure ball, giving the claimed finite coefficient; the same estimate after writing $v=u+w$ also makes $D$ continuous on compact time intervals. Fix $n\in S^2$, $u\in[t_0,T]$ and $y\in B_a$, and put $s_1:=u$, $s_2:=u+n\cdot y/c$, so $|s_2-s_1|\le a/c$; the map $s\mapsto J_t(y,s)$ is $C^1$ [F14]. If $\Delta:=J_t(y,s_2)-J_t(y,s_1)\ne0$, apply [F7] on the closed interval between $s_1$ and $s_2$ to the scalar function $s\mapsto e\cdot J_t(y,s)$ with $e:=\Delta/|\Delta|$: there is $s_*$ between $s_1$ and $s_2$ with $e\cdot\Delta=(e\cdot J_{tt}(y,s_*))(s_2-s_1)$; if $\Delta=0$ the same bound holds trivially. By [F8], $|e\cdot J_{tt}(y,s_*)|\le|J_{tt}(y,s_*)|$, so $|\Delta|\le(a/c)\sup_{|v-u|\le a/c}|J_{tt}(y,v)|$ (the point $s_*$ lies within $a/c$ of $u$). Integrating over $B_a$ with the integral triangle inequality and monotonicity [F9], and using $V(n,u)-p''(u)=\int_{B_a}\bigl[J_t(y,u+n\cdot y/c)-J_t(y,u)\bigr]dy$ from step 1.1 and [F11], gives $|V(n,u)-p''(u)|\le D(u)$. This is (b). [step 1.1, F7, F8, F9, F11, F14, F15, algebra]

3.1 Leading fields (c). By [F1], for $n\in S^2$, $u\in[t_0,T]$, $r\ge2a$ write $E(rn,u+\tfrac rc)=E_{\rm lead}(n,u,r)+\rho_E$ with $|\rho_E|\le\Gamma_E/r^2$ and $E_{\rm lead}=\mu_0\,n\times(n\times V(n,u))/(4\pi r)$. Substituting $V=p''+(V-p'')$ and using the identity $|n\times(n\times w)|=|n\times w|\le|w|$ of [F10] together with the bound of step 2.1, $$\Bigl|E\bigl(rn,u+\tfrac rc\bigr)-\frac{\mu_0}{4\pi r}n\times(n\times p''(u))\Bigr|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0}{4\pi r}|V(n,u)-p''(u)|\le\frac{\Gamma_E}{r^2}+\frac{\mu_0D(u)}{4\pi r},$$ which is the first displayed bound. For the magnetic field, [F1] gives $|B(rn,u+\tfrac rc)-n\times E_{\rm lead}/c|\le\Gamma_B/r^2$, and $|n\times(E-E_{\rm lead})|/c\le|E-E_{\rm lead}|/c\le\Gamma_E/(cr^2)$ by [F10], so the triangle inequality [F9] gives the second displayed bound $(\Gamma_B+\Gamma_E/c)/r^2$; the sharper source estimate against $n\times E_{\rm lead}/c$ is the supplier's own $\Gamma_B/r^2$ bound retained in (e). This is (c), uniformly in $n$ at fixed $u$. [step 2.1, F1, F9, F10, algebra]

4.1 Retarded-time radiated power (d). By [F2], the limit of $\int_{S^2}r^2n\cdot S(rn,u+\tfrac rc)d\sigma$ as $r\to\infty$ equals $\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times V(n,u)|^2d\sigma$ at fixed $u$; here the polar measure and the sphere surface measure coincide, and [F3] identifies the surface flux with the field-energy flux. For the replacement $V\mapsto p''$ put $a_\pm:=V\pm p''$; by [F10] the pointwise difference satisfies $|n\times V|^2-|n\times p''|^2=a_+\cdot a_--(n\cdot a_+)(n\cdot a_-)=(a_+)_\perp\cdot(a_-)_\perp$, so its absolute value is at most $|a_+||a_-|\le(|V|+|p''|)|V-p''|\le(2|p''|+D)D=2|p''|D+D^2$, using [F8], the bound of step 2.1 and monotonicity of the norm. Since $\sigma(S^2)=4\pi$ [F12], the integral changes by at most $4\pi(2|p''|D+D^2)$ in absolute value [F9], so the limit equals $\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times p''(u)|^2d\sigma+R(u)$ with $|R(u)|\le\frac{\mu_0(2|p''|D+D^2)}{4\pi c}$. The exact integral is $\int_{S^2}|n\times p''(u)|^2d\sigma=\frac{8\pi}{3}|p''(u)|^2$ by [F12], so the exact term is $\frac{\mu_0}{16\pi^2c}\cdot\frac{8\pi}{3}|p''(u)|^2=\frac{\mu_0}{6\pi c}|p''(u)|^2$; whenever $D(u)=0$ the error vanishes by the displayed bound. This is (d). The scope clause (e) is bookkeeping: the limit is at fixed retarded time, the error is controlled by the source's time variation through $D(u)$ alone, and no point source, no observer-time power, no radiation reaction, no self-force and no measurement claim is introduced; the only choice assumption is $\mathrm{AC}_\omega$, inherited from the supplier. [step 2.1, F2, F3, F8, F9, F10, F12, algebra] ∎
