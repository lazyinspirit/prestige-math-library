---
id: def-heterotic-leading-order-killing-spinor-system
kind: definition
title: Heterotic Leading Order Killing Spinor System
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
  - post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: physical-assumption
  post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation: physical-assumption
physical_scope: "Definition of the source-specific local heterotic fermion-variation system through the displayed second-order alpha-prime terms on a supplied spin bundle and smooth bosonic background. It asserts neither existence of a Killing spinor nor the equations of motion, a global solution, or Type-I equations; third-order terms are omitted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jock McOrist and Sebastien Picard, Stringy Corrections to Heterotic SU(3)-Geometry"
      url: "https://arxiv.org/pdf/2507.02388v1"
      locator: "§1.1 and §2.1, equation (1.10), printed p. 5, ten-dimensional spinor bundles, connection signs, P correction, and fermion variations."
      source_key: "R4:R4-SUGRA-15:S1"
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§2.2, printed pp. 11–12, ten-dimensional N=1 gravitino, dilatino, and gaugino representation content."
      source_key: "R4:R4-SUGRA-15:S2"
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $M$ be a smooth oriented ten-dimensional Lorentzian manifold with signature $(-,+,\ldots,+)$ and supplied spin structure, and let $U\subseteq M$ be a nonempty open set on which the bosonic fields below are smooth. Write $S_+$ and $S_-$ for the real Majorana–Weyl spinor bundles on $M$ and use their restrictions to $U$. Let $P_G\to M$ be the heterotic gauge bundle from the preceding postulate and set $E:=\operatorname{ad}P_G=P_G\times_{\mathrm{Ad}}\mathfrak g$. Its smooth connection $A$ restricts to $U$ with curvature $F_A\in\Omega^2(U,E)$. Take a smooth local bosonic heterotic field configuration $(g,\Phi,B_2,A)$ on $U$, with $B_2\in\Omega^2(U)$ and local $H_3\in\Omega^3(U)$ obeying the first-order source-free Bianchi convention. The smooth fermion fields have types $\psi\in\Gamma(S_+|_U\otimes T^*U)$, $\lambda\in\Gamma(S_-|_U)$, and $\chi\in\Gamma(S_+|_U\otimes E|_U)$; the supersymmetry parameter has positive chirality, with its formal section space and nonvanishing condition specified below. These are supplied bundle data; no spin-structure existence is asserted.

For a smooth vector field $V$ on $U$, define the tangent connections by $(\nabla^\pm_M V)^N=(\nabla^{\mathrm{LC}}_M V)^N\pm\tfrac12(H_3)_M{}^N{}_P V^P$, with the raised index formed using $g|_U$; $R_+$ is the curvature of $\nabla^+$ used in the Bianchi identity. Let $\nabla^-$ be the connection induced on every covariant tensor slot and on differential forms. For every smooth 4-form $K\in\Omega^4(U)$, define the pointwise source-convention divergence $\nabla_-^\dagger K\in\Omega^3(U)$ by $(\nabla_-^\dagger K)_{mnp}=-g^{qr}(\nabla^-_qK)_{r mnp}$, contracting the first form index. This pointwise definition also agrees with the source's formal-adjoint convention on compactly supported test forms; no compact-support assumption is imposed on its later argument. Define the 3-form

$$P=-\frac14e^{2\Phi}\nabla_-^\dagger(e^{-2\Phi}dH_3),$$

Use the Clifford multiplication $c:T^*U\to\operatorname{End}(S_+|_U\oplus S_-|_U)$ determined by $g$ and the supplied spin structure, with $c(\xi)c(\eta)+c(\eta)c(\xi)=2g^{-1}(\xi,\eta)I$. In a coordinate chart write $\gamma^m=c(dx^m)$ and $\gamma_m=g_{mn}\gamma^n$. For a smooth $p$-form $Q$, set $\operatorname{cl}(Q)=(1/p!)Q_{m_1\ldots m_p}\gamma^{m_1\ldots m_p}$, where $\gamma^{m_1\ldots m_p}=\gamma^{[m_1}\cdots\gamma^{m_p]}$ has unit-weight antisymmetrization, and set $\gamma_{mn}=\gamma_{[m}\gamma_{n]}$. The notation $\operatorname{cl}(Q)$ is the source's slash operation.

Use formal power series in $alpha'$ with no negative powers, not convergent families at a numerical value of $alpha'$. For a fixed smooth vector bundle $V\to U$, define $\Gamma(V)\lbrack\!\lbrack\alpha'\rbrack\!\rbrack:=\{\sum_{j\ge0}\alpha'^j s_j:s_j\in\Gamma(V)\}$, with addition and multiplication by scalar series defined coefficientwise and by the Cauchy product, respectively. All tensor fields have the corresponding formal section types with smooth coefficients; coefficient units compensate the powers of the length-squared parameter $\alpha'$. The metric has a nondegenerate Lorentzian constant term $g_0$, so its inverse is defined recursively as a formal series. Keep the gauge bundle and spin structure fixed, write $A=A_0+\sum_{j\ge1}\alpha'^j a_j$ with $A_0$ a smooth connection and $a_j\in\Omega^1(U,E)$, and supply bundle identifications with the reference spinor bundles of $g_0$ for the formal metric deformation. Using these identifications, interpret Clifford multiplication and the induced connections as formal operators on the fixed reference bundles, satisfying the displayed Clifford relation order-by-order. In particular, require $\epsilon=\sum_{j\ge0}\alpha'^j\epsilon_j\in\Gamma(S_+|_U)\lbrack\!\lbrack\alpha'\rbrack\!\rbrack$ with $\epsilon_0(x)\ne0$ for every $x\in U$. A parameter divisible by $\alpha'$ is inadmissible. Derivatives act coefficientwise; $e^{\pm2\Phi}$ is expanded about its smooth constant term $e^{\pm2\Phi_0}$, and $O(\alpha'^k)$ means that all coefficients of degrees below $k$ vanish. The Bianchi relation gives $dH_3=O(\alpha')$ and $\nabla^-=\nabla^-_0+O(\alpha')$, so $P=O(\alpha')$ and the displayed $\alpha'P$ corrections contribute at order $\alpha'^2$. Accordingly, these source transformations are retained through $O(\alpha'^2)$, with $O(\alpha'^3)$ omitted. Evaluate the variations on a bosonic background, meaning $\psi=\lambda=\chi=0$. Read each equality below modulo $O(\alpha'^3)$:

For the adjoint-valued curvature $F_A\in\Omega^2(U,E)$, define the bundle-valued Clifford contraction by

$$\bigl(\operatorname{cl}_E(F_A)\epsilon\bigr)(x)=\frac12\,\gamma^{mn}\epsilon(x)\otimes(F_A)_{mn}(x)\in S_{+,x}\otimes E_x.$$

$$\delta\psi_k=\nabla^{\mathrm{LC}}_k\epsilon-\frac18(H_3)_k{}^{mn}\gamma_{mn}\epsilon+\frac{\alpha'}4P_k{}^{mn}\gamma_{mn}\epsilon,$$

$$\delta\lambda=\left(\operatorname{cl}(d\Phi)-\frac12\operatorname{cl}(H_3)+\frac{3\alpha'}2\operatorname{cl}(P)\right)\epsilon,\qquad \delta\chi=\operatorname{cl}_E(F_A)\epsilon.$$

A bosonic formal background is locally supersymmetric in this definition exactly when there exists a parameter $\epsilon$ of the specified formal section type with nowhere-vanishing $\epsilon_0$ such that all three displayed variations have zero coefficients in degrees $0$, $1$, and $2$ on $U$. The equations are source-specific heterotic formulation data, not an all-orders system or a theorem that the background exists or solves the bosonic equations.

## Definition references

[Jock McOrist and Sebastien Picard, §2.1](https://arxiv.org/pdf/2507.02388v1)

[Washington Taylor, §2.2](https://arxiv.org/pdf/1104.2051v2)

[[def-supergravity-conventions-and-normalizations]]

[[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]]

[[post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation]]

## Remarks

McOrist–Picard's paper studies specialized $SU(3)$ geometry after stating these ten-dimensional equations. No $SU(3)$ consequence is imported here. Vanishing variations alone do not prove the full equations of motion. The Type-I system is not inferred from this heterotic definition by S-duality.

The convention input used here is Lorentzian signature $(-,+,\ldots,+)$, natural units, the named length-squared $\alpha'$ convention, a supplied spin structure, and one ten-dimensional $N=1$ Majorana–Weyl supersymmetry parameter. The full current definition of [[def-supergravity-conventions-and-normalizations]] was inspected, matches those conventions, and is now listed in batch 56's A-page manifest. This definition uses those adopted conventions and retains the source-specific transformations through second order in $\alpha'$, with third-order terms omitted. The linked action postulate supplies the separate heterotic field branch; the linked Bianchi postulate supplies the first-order $H_3$ convention.
