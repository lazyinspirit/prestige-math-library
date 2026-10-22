---
id: pthm-emx-transverse-radiation-data
kind: physics-theorem
title: "Transverse far field with a uniform remainder"
domain: physics
status: draft
origin: pipeline
dependency_level: 2
deps:
  - cor-mean-value-theorem
  - def-countable-choice
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-cross-product-in-r3
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-em-fields
  - def-em-lab-geometry
  - def-em-si-conventions
  - def-em-sources
  - def-em-vacuum-energy-flux
  - def-emx-radiation-data
  - def-euclidean-inner-product
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-jacobian-matrix-and-gradient
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - lem-em-parameter-integrals
  - lem-em-sphere-zonal-moments
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - pthm-emx-retarded-history-localization
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-cross-product-norm-is-the-two-vector-gram-determinant
  - thm-algebra-of-derivatives
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-extreme-value-metric
  - thm-heine-cantor-metric
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-heine-borel-rn
  - thm-borel-sets-are-lebesgue-measurable
  - prop-measure-monotonicity
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-emx-radiation-data: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-em-sphere-zonal-moments: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  pthm-emx-retarded-history-localization: physical-result
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-measure-monotonicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Uniform far-field limits and retarded-time Poynting flux for
  smooth conserved volume sources supported in one fixed spatial ball at every
  time. The source may have an arbitrary smooth time history; the estimates use
  only stated derivative suprema on bounded retarded-time intervals. The result
  asserts a conditional prediction of the selected classical vacuum Maxwell
  model, not an empirical measurement, point-source field, self-force or
  radiation-reaction law."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS,
        complete 176-page course script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.3, printed pp. 11.7–11.13 (PDF pp. 127–133): radiation-zone
        fields, the fixed-frequency far-field expansion, angular dipole power
        and the separate wavelength-versus-source-size assumption."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level
        course, University of Texas at Austin, complete author-hosted HTML
        lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node52.html"
      locator: "Chapter 4, node 52, “Retarded fields”: the retarded field integrals,
        transverse $1/R$ radiation terms, the continuity-equation cancellation
        and the near-zone/far-zone distinction; the uniform remainder here is
        proved independently."
---

## Statement

Assume Countable Choice. Use the SI laboratory chart and source conventions: $\rho:\mathbb R^3\times\mathbb R\to\mathbb R$ has units $\mathrm C\,\mathrm m^{-3}$ and $J:\mathbb R^3\times\mathbb R\to\mathbb R^3$ has units $\mathrm A\,\mathrm m^{-2}$. Let $a,c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$, and let $\rho,J$ be jointly $C^\infty$, vanish for $|y|>a$, and satisfy $\partial_t\rho+\operatorname{div}_yJ=0$. Let $K=[u_-,u_+]\subset\mathbb R$ be a nondegenerate compact interval, $u_-<u_+$, and put $K^\sharp=[u_--2a/c,u_++2a/c]$. For $j=0,1,2$, define

$$M_{\rho,j}:=\sup_{\overline B_a\times K^\sharp}|\partial_t^j\rho|,\qquad M_{J,j}:=\sup_{\overline B_a\times K^\sharp}|\partial_t^jJ|.$$

For $n\in S^2$ and $u\in K$, define the retarded current moment and its derivative by

$$I(n,u):=\int_{B_a}J(y,u+n\cdot y/c)\,dy,\qquad V(n,u):=\partial_u I(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy.$$

Let $E,B$ be the selected retarded fields of the preceding theorem, set $S=E\times B/\mu_0$, and define

$$\Gamma_E:=\frac{\mu_0\lambda_3(B_a)}{4\pi}\left(4c^2M_{\rho,0}+13caM_{\rho,1}+a^2M_{\rho,2}+3aM_{J,1}+\frac{a^2}{c}M_{J,2}\right),$$

$$\Gamma_B:=\frac{\mu_0\lambda_3(B_a)}{4\pi}\left(4M_{J,0}+\frac{13a}{c}M_{J,1}+\frac{a^2}{c^2}M_{J,2}\right).$$

Then for every $n\in S^2$, $u\in K$ and $r\ge2a$, with $E_{\mathrm{lead}}(n,u,r):=\frac{\mu_0}{4\pi r}n\times(n\times V(n,u))$,

$$\left|E(rn,u+r/c)-E_{\mathrm{lead}}(n,u,r)\right|\le\frac{\Gamma_E}{r^2},\qquad \left|B(rn,u+r/c)-\frac{n\times E_{\mathrm{lead}}(n,u,r)}{c}\right|\le\frac{\Gamma_B}{r^2}.$$

Consequently the radiation data of the preceding definition exist uniformly on $S^2\times K$ and equal

$$E_{\mathrm{rad}}(n,u)=\frac{\mu_0}{4\pi}n\times(n\times V(n,u)),\qquad B_{\mathrm{rad}}(n,u)=\frac{n\times E_{\mathrm{rad}}(n,u)}{c}.$$

For each fixed retarded time $u$, the outward retarded-time flux has the exact limit

$$\lim_{r\to\infty}\int_{S^2}r^2n\cdot S(rn,u+r/c)\,d\Omega(n)=\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times V(n,u)|^2\,d\Omega(n).$$

## Statement references

[[def-emx-radiation-data]]

[[pthm-emx-retarded-history-localization]]

[[def-em-vacuum-energy-flux]]

[[def-em-si-conventions]]

## Facts & Assumptions

**Given:** Countable Choice; the constants and source hypotheses in the Statement; the retarded potentials of the preceding theorem; and the fixed compact retarded-time interval $K$ with its enlargement $K^\sharp$.

[A1] Countable Choice is the measure convention used by the source integrals, divergence theorem and surface measure. ([[def-countable-choice]])

[F1] The source maps are smooth volume density and current density in the fixed laboratory frame; $C^\infty$ means all iterated coordinate derivatives exist and are continuous, and their spatial support is in $\overline B_a$ at every time. ([[def-em-sources]], [[def-em-lab-geometry]], [[def-ck-euclidean-maps-and-diffeomorphisms]])

[F2] For these sources the retarded potentials are smooth, satisfy the wave equations and Lorenz gauge, and generate fields satisfying the smooth vacuum Maxwell system. ([[pthm-emx-retarded-history-localization]])

[F3] The field and energy-flux definitions are $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$, and $S=E\times B/\mu_0$; $\nabla,\operatorname{div},\operatorname{curl}$ are the spatial coordinate operators at fixed time; the constants obey $\varepsilon_0=(\mu_0c^2)^{-1}$. ([[def-em-fields]], [[def-em-vacuum-energy-flux]], [[def-jacobian-matrix-and-gradient]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-em-si-conventions]])

[F4] For a continuous integrand and its continuous time derivative on a neighborhood of a fixed compact set of finite measure, differentiation may be passed under the integral. ([[lem-em-parameter-integrals]])

[F5] The total-derivative chain rule and algebra of derivatives apply to $R$, $1/R$ and the retarded source compositions. The cross product is bilinear and alternating, $n\cdot(n\times w)=0$, $n\times(n\times w)=n(n\cdot w)-w$, and $|n\times w|^2=|n|^2|w|^2-(n\cdot w)^2$; the Euclidean norm satisfies the triangle and Cauchy–Schwarz inequalities. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]])

[F6] The mean value theorem bounds a time-shift difference by a derivative supremum; the divergence theorem applies to a $C^1$ vector field on a bounded $C^1$ ball. ([[cor-mean-value-theorem]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F7] On the finite-measure ball, continuous integrands are integrable; the Lebesgue integral is linear and satisfies the integral triangle inequality; the nonnegative integral is monotone. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F8] The polar surface measure on $S^2$ is the finite surface measure used in the surface-integral definition, and $\int_{S^2}1\,d\Omega=4\pi$. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-em-sphere-zonal-moments]] (d))

[F9] Continuous source derivatives on the compact product $\overline B_a\times K^\sharp$ are bounded and uniformly continuous. ([[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

[F10] Radiation data, when they exist, are the uniform limits of $rE(rn,u+r/c)$ and $rB(rn,u+r/c)$ on compact retarded-time intervals. ([[def-emx-radiation-data]])

[F11] A closed bounded subset of Euclidean $\mathbb R^3$ is compact; the Borel sigma-algebra contains open sets and their complements, and under Countable Choice every Borel subset is Lebesgue measurable, in particular every closed set. For a measure $\mu$ and measurable $A\subseteq B$, one has $\mu(A)\le\mu(B)$. ([[thm-heine-borel-rn]] (2), [[thm-borel-sets-are-lebesgue-measurable]], [[prop-measure-monotonicity]])

## Proof

**Proof technique:** direct; differentiate the retarded potentials, use conservation to remove the longitudinal scalar-potential term, estimate each geometric and time-shift remainder uniformly, and pass the resulting uniform flux limit through the finite sphere integral.

1.1 Geometry of the observation point. Fix $n\in S^2$, $u\in K$, $r\ge2a$, and $y\in B_a$. Put $\sigma=n\cdot y$, $R=|rn-y|$, $N=(rn-y)/R$, $v=u+\sigma/c$, and $\delta=(r-\sigma-R)/c$, so $u+r/c-R/c=v+\delta$. Since $r-\sigma\ge r-a\ge r/2$, the identity $R^2=(r-\sigma)^2+|y|^2-\sigma^2$ gives $|R-(r-\sigma)|=(|y|^2-\sigma^2)/(R+r-\sigma)\le a^2/r$; hence $|\delta|\le a^2/(rc)\le a/(2c)$. Also $|r-R|\le|\sigma|+a^2/r\le3a/2$, so $R\ge r/2$, $|N-n|\le|(r-R)n-y|/R\le5a/r$, $|R^{-1}-r^{-1}|=|r-R|/(rR)\le3a/r^2$, and $|N/R-n/r|\le|N-n|/R+|R^{-1}-r^{-1}|\le13a/r^2$. Thus all retarded source arguments and the intervals between them lie in $K^\sharp$. [given, F5, algebra, A1]

1.2 Retarded-field integrals. Put $C_a:=\overline B_a=\{y:|y|\le a\}$. If $|z|>a$, the ball of radius $(|z|-a)/2$ around $z$ is disjoint from $C_a$: the triangle inequality gives $|y|\ge|z|-|y-z|>a$ on that ball. Thus $C_a$ is closed. Also $C_a\subset B_{2a}$ since $a>0$, so it is bounded and hence compact by [F11]. A closed set is Borel, because its complement is open and the Borel sigma-algebra is closed under complements; under [A1], [F11] therefore makes $C_a$ Lebesgue measurable. The open ball $B_{2a}$ is measurable and has finite measure by [F7]. Applying measure monotonicity [F11] to $C_a\subset B_{2a}$ gives $\lambda_3(C_a)\le\lambda_3(B_{2a})<\infty$. These are exactly the compactness, measurability and finite-measure hypotheses needed for the set form of [F4]. Since $\rho,J$ are jointly smooth and vanish for $|y|>a$, their values and their time derivatives vanish on $\partial B_a$; hence the potential integrals and the integrals obtained by one $x$- or $t$-derivative have the same values over $B_a$ and $\overline B_a$. Fix an observation event with $|x|>a$ and a product neighborhood with compact closure in the exterior region $|x|>a$. For each observation coordinate $x_i$ and $t$, hold the other coordinates fixed and apply the set form of [F4] on $\overline B_a$ with that coordinate as parameter. The retarded integrands and their parameter derivatives are continuous on a neighborhood of $\overline B_a$ times the chosen parameter interval, since $R=|x-y|>0$ there. Apply this argument to $\rho$ and separately to each component of $J$, for each spatial-coordinate and time derivative needed in $\nabla\varphi$, $\partial_tA$ and $\operatorname{curl}A$. The chain rule and algebra of derivatives give $\nabla_xR=N$, $\nabla_x(t-R/c)=-N/c$, and $\nabla_x(R^{-1})=-N/R^2$. Substitution in $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ therefore gives, at $x=rn$, $t=u+r/c$, $\displaystyle E=\frac{\mu_0}{4\pi}\int_{B_a}\left(\frac{c^2N\rho_{\mathrm{ret}}}{R^2}+\frac{cN\rho_{t,\mathrm{ret}}}{R}-\frac{J_{t,\mathrm{ret}}}{R}\right)dy,\qquad B=-\frac{\mu_0}{4\pi}\int_{B_a}N\times\left(\frac{J_{\mathrm{ret}}}{R^2}+\frac{J_{t,\mathrm{ret}}}{cR}\right)dy,$ where the subscript “ret” means evaluation at $v+\delta$. Here $R\ge r-a>0$ for $r\ge2a$. [F2, F3, F4, F5, F7, F11, algebra, A1]

1.3 Differentiation of the retarded current moment. Choose a bounded open interval $U$ containing $K$ and a compact interval $K_0$ whose interior contains $U$. Since $J$ and $J_t$ vanish on $\partial B_a$ by the smooth spatial-support hypothesis, the integral over $B_a$ agrees with that over the compact measurable finite-measure set $\overline B_a$ established in step 1.2. For fixed $n\in S^2$, the map $(y,u)\mapsto J(y,u+n\cdot y/c)$ and its $u$ derivative $J_t(y,u+n\cdot y/c)$ are continuous on a neighborhood of $\overline B_a\times K_0$. Apply the set form of [F4] separately to each of the three vector components with integration set $\overline B_a$ and parameter $u$. Thus $\partial_u I(n,u)=\int_{B_a}J_t(y,u+n\cdot y/c)\,dy$ for every $u\in U$, so the definition of $V$ in the Statement is well-defined on a neighborhood of $K$. [given, F1, F4, F7, step 1.2, algebra, A1]

1.4 Continuity identity for the shifted source. Fix $n,u$ and choose $R_0>a$. The $C^1$ vector field $y\mapsto J(y,u+n\cdot y/c)$ is zero near $\partial B_{R_0}$. Its divergence is $\operatorname{div}_yJ(y,v)+(n/c)\cdot J_t(y,v)=-\rho_t(y,v)+(n/c)\cdot J_t(y,v)$ by the chain rule and continuity. The divergence theorem gives zero for its integral over $B_{R_0}$, and the integrand is zero outside $B_a$; therefore $\int_{B_a}\rho_t(y,v)\,dy=(1/c)n\cdot\int_{B_a}J_t(y,v)\,dy=(1/c)n\cdot V(n,u)$. [given, F1, F6, F7, algebra, A1]

2.1 Electric leading field and its remainder. Put $F_{\mathrm{lead}}:=r^{-1}(cn\rho_t(y,v)-J_t(y,v))$ inside the integrand of step 1.2. By step 1.4, its integral is $r^{-1}(n(n\cdot V)-V)=r^{-1}n\times(n\times V)$. For the first term of the exact integrand, $c^2|N\rho_{\mathrm{ret}}/R^2|\le4c^2M_{\rho,0}/r^2$. For its second term, split $\displaystyle \frac{cN\rho_{t,\mathrm{ret}}}{R}-\frac{cn\rho_t(y,v)}r=c\left(\frac NR-\frac nr\right)\rho_{t,\mathrm{ret}}+\frac{cn}{r}\bigl(\rho_{t,\mathrm{ret}}-\rho_t(y,v)\bigr);$ the first summand is bounded by $13caM_{\rho,1}/r^2$, while the scalar mean value theorem and step 1.1 bound the second by $a^2M_{\rho,2}/r^2$. For the third term, set $\Delta:=J_{t,\mathrm{ret}}-J_t(y,v)$. If $\Delta\ne0$, put $e=\Delta/|\Delta|$ and apply the scalar mean value theorem to $s\mapsto e\cdot J_t(y,s)$ between $v$ and $v+\delta$; Cauchy–Schwarz then gives $|\Delta|=|e\cdot\Delta|\le M_{J,2}|\delta|$. The same bound is trivial for $\Delta=0$. Hence $\displaystyle \left|\frac{J_{t,\mathrm{ret}}}{R}-\frac{J_t(y,v)}r\right|\le\left|\frac1R-\frac1r\right|M_{J,1}+\frac1rM_{J,2}|\delta|\le\frac{3aM_{J,1}+a^2M_{J,2}/c}{r^2}.$ Integrating these bounds with [F7] and multiplying by $\mu_0/(4\pi)$ proves the stated $\Gamma_E/r^2$ estimate. [step 1.1, step 1.2, step 1.4, F5, F6, F7, algebra, A1]

3.1 Magnetic leading field and its remainder. By $n\times(n\times V)=n(n\cdot V)-V$, one has $n\times E_{\mathrm{lead}}/c=-\mu_0(4\pi cr)^{-1}n\times V$, which is the leading part of the magnetic integral in step 1.2. The $J_{\mathrm{ret}}/R^2$ term has norm at most $4M_{J,0}/r^2$. For the $J_t$ term, split its coefficient as $N/(cR)-n/(cr)$ plus the time shift $n/(cr)$. The geometric coefficient is bounded by $13a/(cr^2)$. For the time shift, the vector mean value argument of step 2.1 gives $|J_{t,\mathrm{ret}}-J_t(y,v)|\le M_{J,2}|\delta|$, so its contribution is at most $a^2M_{J,2}/(c^2r^2)$. The cross product with a unit vector does not increase norm by [F5], so [F7] gives the stated $\Gamma_B/r^2$ estimate. [step 1.1, step 1.2, step 2.1, F5, F6, F7, algebra, A1]

4.1 Radiation-data limits. Multiplying the electric estimate of step 2.1 by $r$ gives a uniform error at most $\Gamma_E/r$ on $S^2\times K$, which tends to zero; thus the uniform limit in [F10] is $E_{\mathrm{rad}}=\mu_0 n\times(n\times V)/(4\pi)$. Multiplying the magnetic estimate of step 3.1 by $r$ likewise gives the uniform limit $B_{\mathrm{rad}}=n\times E_{\mathrm{rad}}/c$. Since $n\cdot(n\times(n\times V))=0$, the leading electric field is transverse. [step 2.1, step 3.1, F5, F10, algebra, A1]

5.1 Retarded-time flux. The map $(n,u)\mapsto V(n,u)$ is continuous on $S^2\times K$: its integrand is continuous on the compact product $\overline B_a\times S^2\times K^\sharp$, hence uniformly continuous by [F9], and the integral difference is bounded by $\lambda_3(B_a)$ times the uniform integrand difference, using linearity and the integral triangle inequality [F7]. It is also bounded there by $\lambda_3(B_a)M_{J,1}$. The field estimates of steps 2.1 and 3.1 yield $E=E_{\mathrm{rad}}/r+e$ and $B=B_{\mathrm{rad}}/r+b$, where $|e|\le\Gamma_E/r^2$ and $|b|\le\Gamma_B/r^2$ uniformly on $S^2\times K$. Put $C_E:=\mu_0\lambda_3(B_a)M_{J,1}/(4\pi)$ and $C_B:=C_E/c$; then $|E_{\mathrm{rad}}|\le C_E$ and $|B_{\mathrm{rad}}|\le C_B$. Bilinearity and the cross-product norm bound [F5] give $\displaystyle \left|r^2n\cdot S(rn,u+r/c)-\frac1{\mu_0}n\cdot(E_{\mathrm{rad}}\times B_{\mathrm{rad}})\right|\le\frac{C_E\Gamma_B+C_B\Gamma_E}{\mu_0r}+\frac{\Gamma_E\Gamma_B}{\mu_0r^2},$ which tends to zero uniformly for $r\ge2a$. Bilinearity of the cross product gives $\displaystyle r^2n\cdot S(rn,u+r/c)=\frac1{\mu_0}n\cdot(E_{\mathrm{rad}}\times B_{\mathrm{rad}})+R(n,u,r)=\frac{|E_{\mathrm{rad}}|^2}{\mu_0c}+R(n,u,r),$ uniformly, where $|R(n,u,r)|$ is bounded by the preceding display. Since $B_{\mathrm{rad}}=n\times E_{\mathrm{rad}}/c$ and $n\cdot E_{\mathrm{rad}}=0$, the determinant formula for the cross product gives $\displaystyle n\cdot(E_{\mathrm{rad}}\times(n\times E_{\mathrm{rad}}))=\det[E_{\mathrm{rad}},n\times E_{\mathrm{rad}},n]=\det[n,E_{\mathrm{rad}},n\times E_{\mathrm{rad}}]=|n\times E_{\mathrm{rad}}|^2=|E_{\mathrm{rad}}|^2,$ where the middle equality is a cyclic permutation and the last follows from [F5]. The sphere has finite area $4\pi$ by [F8], so integrating the explicit uniform remainder makes it tend to zero. Finally $|E_{\mathrm{rad}}|^2=\mu_0^2|n\times V|^2/(16\pi^2)$ by [F5], which gives the asserted flux limit at fixed retarded time. [step 2.1, step 3.1, step 4.1, F5, F7, F8, F9, algebra, A1] ∎
