---
id: def-r5-hidden-sector-gauge-data
kind: definition
title: Four-dimensional hidden-sector gauge and matter data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 1
deps:
  - def-r5-cosmology-4d-scalar-eft-data
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: Definition of four-dimensional hidden-sector EFT input data and the criterion for naming a candidate relic. It predicts no gauge group, portal, production mechanism, abundance, lifetime, or string compactification.
sources:
  references:
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§5.5, PDF pp. 92–100, for moduli-dominated histories and visible/hidden decay channels; §§5.7.1 and 5.7.4, PDF pp. 100–103 and 116–118, for conditional thermal and nonthermal dark-matter production; §6.2.8, PDF pp. 129–130, for coupled hidden-sector examples."
    - title: "J. M. Cline, TASI Lectures on Early Universe Cosmology: Inflation, Baryogenesis and Dark Matter, arXiv:1807.08749v5"
      url: "https://arxiv.org/pdf/1807.08749v5"
      locator: "Complete 52-page lecture notes; §§IV.2, IV.4 and IV.7, for thermal freeze-out, freeze-in, and hidden-U(1) dark-matter model examples."
---

## Definition

Fix the four-dimensional Einstein-frame and cosmological conventions of the earlier cosmology EFT datum. A hidden-sector EFT datum is the following specified collection on a declared spacetime and cutoff range:

1. A compact finite-dimensional Lie group $G_h$, meaning a finite-dimensional smooth group whose underlying manifold is compact. Choose Hermitian generators $T_a$ for unitary representations, with real structure constants fixed by the matrix identity $[T_b,T_c]=i f^a{}_{bc}T_a$. In this convention the real Hermitian-generator realization $\mathfrak g_{h,\mathrm H}:=\operatorname{span}_{\mathbb R}\{T_a\}$ has bracket $[X,Y]_{h,\mathrm H}:=-i(XY-YX)$, so $[T_b,T_c]_{h,\mathrm H}=f^a{}_{bc}T_a$. Let $\mathcal X$ be the spacetime of the earlier EFT datum, let $U\subseteq\mathcal X$ be a coordinate patch with a chosen local gauge-bundle trivialization, and set $A=A_\mu^aT_a\,dx^\mu\in C^1(U,T^*U\otimes\mathfrak g_{h,\mathrm H})$. Thus the components $A_\mu^a$ are $C^1$ functions and the curvature is the $C^0$ two-form $F=\frac12F_{\mu\nu}^aT_a\,dx^\mu\wedge dx^\nu$, with components
   $$F_{\mu\nu}^a=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a+g_h f^a{}_{bc}A_\mu^bA_\nu^c,$$
   where $g_h>0$ is the declared dimensionless gauge coupling. In any chosen unitary matrix representation, a smooth gauge map $u:U\to G_h$ acts by $A_\mu\mapsto uA_\mu u^{-1}+(i/g_h)u\partial_\mu u^{-1}$. A matter representation is a unitary group homomorphism $\rho_r:G_h\to U(V_r)$ on a finite-dimensional complex inner-product space $V_r$. A matter field is a $C^1$ map $\Psi_r:U\to V_r$ in this local trivialization; it transforms by $\Psi_r\mapsto\rho_r(u)\Psi_r$. Its Hermitian generators $T_a^{(r)}$ and covariant derivative $D_\mu\Psi_r=\partial_\mu\Psi_r-i g_h A_\mu^aT_a^{(r)}\Psi_r\in C^0(U,V_r)$ are part of the data.
2. A smooth real symmetric gauge-kinetic matrix $K_{ab}(\phi)$ on a declared scalar-field patch $\phi:U\to\mathcal T_0$ of the earlier EFT datum. Equivalently, $K$ is a $C^\infty$ family $K_\phi$ of symmetric bilinear forms on $\mathfrak g_{h,\mathrm H}$, and each $K_\phi$ is positive definite on the declared field patch. Specify a smooth $G_h$ action $R:G_h\times\mathcal T_0\to\mathcal T_0$ on the $G_h$-invariant scalar patch used by $K$; the trivial action is allowed for gauge-singlet scalars. Gauge invariance means
   $$K_{R_g\phi}(\operatorname{Ad}_gX,\operatorname{Ad}_gY)=K_\phi(X,Y)$$
   for every $g\in G_h$, scalar value $\phi$, and $X,Y\in\mathfrak g_{h,\mathrm H}$, where $\operatorname{Ad}_gX:=gXg^{-1}$ in the chosen unitary representation. Here $R$ is a left action, $R_e=\mathrm{id}$ and $R_g\circ R_h=R_{gh}$, and it must preserve the scalar metric and potential: $R_g^*G=G$ and $V\circ R_g=V$. For a local gauge map $u:U\to G_h$, set $\phi'(x)=R_{u(x)}(\phi(x))$. Define the smooth fundamental vector fields $k_a(q):=\left.\frac{d}{ds}\right|_{s=0}R_{\exp(i sT_a)}(q)\in T_q\mathcal T_0$ and the scalar covariant derivative
   $$D_\mu\phi^i:=\partial_\mu\phi^i-g_h A_\mu^a k_a^i(\phi).$$
   The exponent is the matrix-group exponential in the same generator convention as clause 1. Use the scalar kinetic term $-\frac12G_{ij}(\phi)g^{\mu\nu}D_\mu\phi^iD_\nu\phi^j$. In the earlier EFT datum this is implemented by including the explicit correction $-\frac12G_{ij}(\phi)g^{\mu\nu}(D_\mu\phi^iD_\nu\phi^j-\partial_\mu\phi^i\partial_\nu\phi^j)$ in $\mathcal L_{\rm other}$, with the additional gauge fields and local rules declared there. Thus the ungauged supplier's ordinary-derivative term is replaced in the total density. The chain rule and the transformation of $A_\mu$ give $D_\mu\phi'=(dR_{u(x)})_{\phi(x)}D_\mu\phi$; metric and potential invariance then make the scalar terms invariant. The trivial action gives $k_a=0$ and recovers the ordinary derivatives. The gauge kinetic term is $-\frac14K_{ab}(\phi)F_{\mu\nu}^aF^{b\mu\nu}$, with the displayed equivariance imposed pointwise at $g=u(x)$. If a supersymmetric convention uses a complex symmetric matrix $f_{ab}$, its real part is the physical kinetic matrix $K_{ab}=\operatorname{Re}f_{ab}$ and must be positive definite. Any topological $\theta$-angle term is listed separately, and every additional matter or interaction term in the total density must be invariant under the declared local transformations.
3. The hidden matter fields, their representations and mass terms, all interactions among them, and every exact or approximate symmetry. A proposed relic species $X$ is called stable in this datum only if a stated exact symmetry or conserved charge forbids every kinematically allowed decay channel below the cutoff. It is called long-lived only relative to an explicit lifetime threshold $\tau_{\min}$ and a stated cosmological interval.
4. Every visible-hidden portal as an explicit local operator invariant under the stated local gauge transformations and visible gauge symmetries. For example, if $\mathcal O_\alpha$ has total mass dimension $d_\alpha$, its coefficient in $c_\alpha\Lambda^{4-d_\alpha}\mathcal O_\alpha$ has dimension $4-d_\alpha$; the operator, coefficient, scale $\Lambda$, and symmetries permitting it are specified. “Hidden sector” means the declared hidden field set has no direct visible coupling other than these listed portals.
5. The EFT cutoff, its validity range, initial state, and cosmological history. If thermal production or decay is considered, give the visible and hidden temperatures, expansion history, reheating process, entropy transfer, couplings and relevant rate data. These are inputs; thermal equilibrium, freeze-out, freeze-in, confinement, or a particular relic abundance is not implied by the field-content label.

In natural units, a four-dimensional gauge field has mass dimension one, $F_{\mu\nu}^a$ dimension two, $K_{ab}$ and $g_h$ dimension zero, and the Lagrangian density dimension four. This definition introduces EFT data only; it asserts no particular compactification realization or universal hidden gauge group.

## Definition references

[[def-r5-cosmology-4d-scalar-eft-data]]
