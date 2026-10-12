---
id: lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives
kind: lemma
title: Each coefficient field $X_j$ of the modified logarithm is a holomorphic symplectic field with a global holomorphic primitive $H_j$ on the star-shaped domain, and $X_1=X_{\tilde A+\tilde B}$
status: draft
origin: pipeline
domain: mathematics
dependency_level: 12
deps:
- def-cm-modified-log-coefficients-and-truncations
- lem-cm-truncated-log-coefficient-bounds
- lem-cm-binomial-pullback-family-and-its-log-are-derivations
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-holomorphic-map-calculus
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- def-cm-analytic-splitting-data-and-exact-splitting-map
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-phase-domain-and-standard-symplectic-two-form
- thm-poincare-lemma-for-star-shaped-domains
- def-star-shaped-open-subset-of-rn
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-matrix-product-and-identity-matrix
- def-transpose-of-a-matrix
- thm-heine-borel-rn
- def-metric-ball
- def-metric-topology
dependency_roles:
  def-cm-modified-log-coefficients-and-truncations: mathematical-premise
  lem-cm-truncated-log-coefficient-bounds: mathematical-premise
  lem-cm-binomial-pullback-family-and-its-log-are-derivations: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 2: existence of a local modified Hamiltonian for symplectic methods and its global existence on star-shaped domains, printed pages 5-6'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 1 ''Hamiltonian systems'', Section 3: symplectic transformations and the closedness of the contracted form, printed pages 5-7'
    url: https://www.unige.ch/~hairer/poly_geoint/week1.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data with $\tilde H:=\tilde A+\tilde B$, and let $X_j$, $j\ge1$, be the coefficient fields of [[def-cm-modified-log-coefficients-and-truncations]] (independent of the truncation order by [[lem-cm-truncated-log-coefficient-bounds]] clause 4), with the bound $\max_i\lvert(X_j)_i\rvert\le\beta_j:=\frac{8M}{3}\bigl(\frac{C_0Mj}{\rho}\bigr)^{j-1}$ of that lemma on the common retained domain $E:=D(\rho/4)$. In this item $D_j$ denotes $E$ for every $j\ge1$, including $j=1$, whose coefficient is extracted using any order $N\ge2$. Write $X_j=\sum_{k=1}^d u^{(j)}_k\partial_{z^k}+\sum_{k=1}^d v^{(j)}_k\partial_{w_k}$ in the coordinates $Z=(z,w)$ of [[def-cm-complex-phase-domains-and-holomorphic-maps]], and let $A_j:=\bigl(\partial_{Z_l}(X_j)_k\bigr)_{k,l}$ be its complex Jacobian. Then for every $j\ge1$:

1. $X_j$ is a holomorphic vector field on $D_j$: all $u^{(j)}_k,v^{(j)}_k$ are holomorphic on $D_j$ and real-valued on $D_j\cap\mathbb R^{2d}$.
2. $A_jJ+JA_j^{\mathsf T}=0$ on $D_j$; equivalently, the contraction one-form
 $$\alpha_j:=\iota_{X_j}\omega_{\mathbb C}=\sum_{k=1}^d u^{(j)}_k\,dw_k-\sum_{k=1}^d v^{(j)}_k\,dz^k$$
 is closed there.
3. There is a holomorphic $H_j:D_j\to\mathbb C$ with $dH_j=\alpha_j$, $H_j(0)=0$ and $H_j$ real-valued on $D_j\cap\mathbb R^{2d}$, and
 $$\lvert\nabla H_j\rvert\le\sqrt{2d}\,\beta_j,\qquad \lvert H_j(Z)\rvert\le\sqrt{2d}\,\beta_j\,\lvert Z\rvert\qquad(Z\in D_j).$$
4. $X_1=X_{\tilde H}=J\nabla\tilde H$; that is, for every holomorphic $f$ on the domain of $X_1$, $X_1f=d\!f(X_{\tilde H})$.

## Facts & Assumptions

**Given:** The analytic splitting data; the fields $X_j$ with components $(X_j)_k$; the bounds $\max_i\lvert(X_j)_i\rvert\le\beta_j$ on $D_j$ ([[lem-cm-truncated-log-coefficient-bounds]]); the matrix $J$ and the form $\omega_{\mathbb C}$ ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]).

[L1] Coordinate bracket matrix formula: for holomorphic $f,g$, $\{f,g\}=(\nabla f)^{\mathsf T}J\nabla g$, and the bracket is $\mathbb C$-bilinear and antisymmetric with $\{Z_k,Z_l\}=J_{kl}$ constant ([[lem-cm-holomorphic-map-calculus]] clause 2, [[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-matrix-product-and-identity-matrix]]).

[L2] Derivation of the bracket: for the coefficient operators $D_j$ of the logarithm, $D_j\{f,g\}=\{D_jf,g\}+\{f,D_jg\}$ for holomorphic $f,g$, and $X_j$ acts on $f$ as $X_jf=D_jf$ ([[lem-cm-binomial-pullback-family-and-its-log-are-derivations]] clause 3, [[def-cm-modified-log-coefficients-and-truncations]]).

[L3] Realness of the extensions and their flows. By the distance-domain estimate in [[def-cm-complex-phase-domains-and-holomorphic-maps]], $D(\rho)$ is star-shaped about $0$. Fix $\xi\in D(\rho)\cap\mathbb R^{2d}$; the set of real $t$ for which $t\xi\in D(\rho)$ has a connected open interval containing $[0,1]$. The function $g_A(t):=\operatorname{Im}\tilde A(t\xi)$ is real analytic on that interval, since it is the restriction of a holomorphic function to a complex line. For $t$ in a neighborhood of $0$, $t\xi\in U$ because $0\in U$ and $U$ is open, so $g_A(t)=0$ as $\tilde A|_U=A$ and $A$ is real-valued. To justify continuation, let $S$ be the set of points where $g_A$ vanishes on a neighborhood. It is nonempty and open; if $t_j\in S$ converges to an interior point $t$, every derivative $g_A^{(k)}(t_j)$ is zero, so continuity of all derivatives gives $g_A^{(k)}(t)=0$ for every $k$, and the real-analytic Taylor expansion at $t$ makes $g_A$ zero near $t$. Thus $S$ is also closed in the interval and equals the whole interval. This proves $\tilde A(\xi)\in\mathbb R$; the identical argument applies to $\tilde B$. The restrictions of these extensions to the open real domain $D(\rho)\cap\mathbb R^{2d}$ are real-valued, so their real-coordinate partial derivatives are real; holomorphic differentiability identifies those derivatives with the complex coordinate derivatives. Hence $X_{\tilde A}=J\nabla\tilde A$ and $X_{\tilde B}=J\nabla\tilde B$ are real on the real locus.

For either field $F=X_{\tilde A}$ or $X_{\tilde B}$, the Picard iterates in [[lem-cm-complex-analytic-flow-existence-and-holomorphy]] starting from real $Z$ remain real when $t$ is real: the initial iterate is real, and each next iterate is $Z+t\int_0^1F(\gamma_m(\sigma t))\,d\sigma$, an integral of real vectors by induction. Their limit is real because $\mathbb R^{2d}$ is closed in $\mathbb C^{2d}$. Thus each local real-time flow preserves real points; uniqueness and the local gluing in that lemma preserve this property along every real continuation where the flow is defined. The three factors defining $\Psi_h$ therefore preserve real points for real $h$, as do all defined iterates $\Psi_h^m$.

[L4] Closed one-forms on star-shaped real domains have potentials, with the explicit radial potential $\phi(x)=\int_0^1\langle F(tx),x\rangle\,dt$ for centre $0$ ([[thm-poincare-lemma-for-star-shaped-domains]], [[def-star-shaped-open-subset-of-rn]]); the complex domain $D_j\subseteq\mathbb C^{2d}\cong\mathbb R^{4d}$ is open and star-shaped about $0$ ([[def-cm-complex-phase-domains-and-holomorphic-maps]]), and the real and imaginary parts of a closed complex one-form with $C^1$ coefficients are closed real one-forms.

[L5] Holomorphy criterion: a real $C^1$ function $H$ with $\partial_{\bar Z_l}H=0$ for all $l$ is holomorphic, since then $dH$ is $\mathbb C$-linear; and $H$ is real-valued on the real subspace if its differential is real there ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[lem-cm-holomorphic-map-calculus]] clause 2, [[def-directional-and-partial-derivatives]], [[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** direct; read the bracket derivation rule on coordinate pairs to get closedness, integrate the closed form on the star-shaped domain, and identify the first coefficient by the differential of $\Psi_h$ at $h=0$.

1.1 Holomorphy and realness of the components. By [[def-cm-modified-log-coefficients-and-truncations]], $(X_j)_i$ is a coefficient in $h$ of the holomorphic function $h\mapsto(L_N(h)z_i)(Z)/h$ (for any $N\ge j$), so it is holomorphic in $Z$ by [[lem-cm-holomorphic-map-calculus]] clause 3; this is clause 1's first assertion. For real $Z$ and real $h$, $\Psi_h^m(Z)$ is real by [L3], so each $\Delta_h^kz_i$, hence $L_N(h)z_i$, is real-valued there, and its Taylor coefficient in the real variable $h$ at $0$ is real; this gives the realness assertion. [given, L3, algebra]

1.2 Closedness. Fix $j$ and apply the bracket derivation rule [L2] to the constant bracket $\{Z_k,Z_l\}=J_{kl}$: $$0=D_j\{Z_k,Z_l\}=\{D_jZ_k,Z_l\}+\{Z_k,D_jZ_l\}=\{(X_j)_k,Z_l\}+\{Z_k,(X_j)_l\}.$$ Writing $A:=A_j=\bigl(\partial_{Z_l}(X_j)_k\bigr)$ and using [L1], $(X_j)_k$-component $k$ of the field, $\{(X_j)_k,Z_l\}=\bigl(\nabla(X_j)_k\bigr)^{\mathsf T}Je_l$ and $\{Z_k,(X_j)_l\}=e_k^{\mathsf T}J\nabla(X_j)_l$, so, using $e_l^{\mathsf T}J^{\mathsf T}\nabla a_k=(AJ)_{kl}$ and $e_k^{\mathsf T}J\nabla a_l=(JA^{\mathsf T})_{kl}$ for $a_k:=(X_j)_k$, the identity reads $(AJ)_{kl}+(JA^{\mathsf T})_{kl}=0$ for all $k,l$, that is $AJ+JA^{\mathsf T}=0$. Equivalently, write $\alpha_j=\sum_lb_l\,dZ_l$, so that $b=(-v,u)$ and $db_l=\sum_k\partial_{Z_k}b_l\,dZ_k$; then $d\alpha_j=\sum_{k<l}(\partial_{Z_k}b_l-\partial_{Z_l}b_k)dZ_k\wedge dZ_l$, and comparing block entries shows that $AJ+JA^{\mathsf T}=0$ is precisely the symmetry of the Jacobian $(\partial_{Z_k}b_l)$, i.e. the closedness $d\alpha_j=0$. [given, L1, L2, algebra]

1.3 The first coefficient. Since $L(h)=\Delta_h+O(h^2)$ and $\Delta_hf=h\,d\!f(X_{\tilde A}+X_{\tilde B})+O(h^2)$, the coefficient of $h$ in $L(h)z_i$ is $d z_i(X_{\tilde H})=(J\nabla\tilde H)_i$; here the derivative of $\Psi_h$ at $h=0$ is $X_{\tilde A}+X_{\tilde B}$: differentiating $\Psi_h=\varphi_{\tilde A}^{h/2}\circ\varphi_{\tilde B}^h\circ\varphi_{\tilde A}^{h/2}$ at $h=0$ and using $\frac{d}{dt}\varphi_F^t|_{t=0}=X_F$ and $D\varphi_F^0=I$ gives $\frac12X_{\tilde A}+X_{\tilde B}+\frac12X_{\tilde A}$. Hence $X_1=X_{\tilde H}$, which is clause 4. [given, L2, algebra]

2.1 Primitive. Let $\alpha_j^{(\mathbb R)}$ and $\alpha_j^{(\mathbb I)}$ be the real and imaginary parts of $\alpha_j$, viewed as real $C^1$ one-forms on the open star-shaped set $D_j\subseteq\mathbb R^{4d}$; both are closed because $d\alpha_j=0$. By [L4] there are $C^2$ potentials $\phi_1,\phi_2$ with $d\phi_1=\alpha_j^{(\mathbb R)}$, $d\phi_2=\alpha_j^{(\mathbb I)}$; subtracting constants we may assume $\phi_1(0)=\phi_2(0)=0$. Set $H_j:=\phi_1+i\phi_2$. Then $dH_j=\alpha_j$, and $\partial_{\bar Z_l}H_j=dH_j(\partial_{\bar Z_l})=\alpha_j(\partial_{\bar Z_l})=0$ because $\alpha_j$ is a $(1,0)$-form; hence $H_j$ is holomorphic by [L5]. At real points and for real tangent vectors $w$, $\alpha_j(w)$ is real by the realness of the coefficients from step 1.1, so $d\phi_2$ vanishes on real directions at real points; the real part of $D_j$ is star-shaped and connected, so $\phi_2\equiv0$ there and $H_j$ is real-valued on $D_j\cap\mathbb R^{2d}$. The gradient bound follows from $\nabla H_j=(-v^{(j)},u^{(j)})=-JX_j$ and $\lVert X_j\rVert\le\sqrt{2d}\max_k\lvert(X_j)_k\rvert\le\sqrt{2d}\beta_j$, and $\lvert H_j(Z)\rvert=\lvert\int_0^1\alpha_j(tZ)(Z)\,dt\rvert\le\sqrt{2d}\beta_j\lvert Z\rvert$ by the radial form of the potential and the norm inequality. [given, step 1.1, L4, L5, algebra]

3.1 Conclusion. Clause 1 is step 1.1, clause 2 is step 1.2, clause 3 is step 2.1 and clause 4 is step 1.3. [step 1.1, step 1.2, step 2.1, step 1.3] ∎

## Remarks

- The star-shapedness of $U$ (and hence of $U_\rho$ and every $D(r)$) is used exactly here: it produces global holomorphic primitives $H_j$ on the working domain. On a domain with nonvanishing first de Rham cohomology the closed form $\alpha_j$ would only be locally exact, and this is the step the design records as requiring the star-shaped hypothesis.
- The primitive $H_j$ is unique up to an additive constant on the connected domain $D_j$; the normalization $H_j(0)=0$ fixes it. The modified Hamiltonian of [[lem-cm-optimal-truncation-gives-exponential-local-defect]] is built from these normalized primitives.
