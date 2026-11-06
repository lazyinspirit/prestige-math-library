---
id: ex-r5-hidden-sector-relic-portals
kind: example
title: Hidden gauge-sector relic and portal model classes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 3
deps:
  - def-r5-hidden-sector-gauge-data
  - pthm-r5-sudden-decay-reheating-temperature
dependency_roles:
  def-r5-hidden-sector-gauge-data: formulation-prerequisite
  pthm-r5-sudden-decay-reheating-temperature: physical-result
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
physical_scope: An illustrative four-dimensional hidden-gauge EFT family with declared portals and conditional production mechanisms. No relic abundance, string realization, or observational constraint is calculated.
sources:
  references:
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§§5.5, 5.7.1 and 6.2.8, PDF pp. 92–103 and 129–130, for moduli-produced nonthermal relics, hidden-sector candidates and coupled dark-sector portals."
    - title: "J. M. Cline, TASI Lectures on Early Universe Cosmology: Inflation, Baryogenesis and Dark Matter, arXiv:1807.08749v5"
      url: "https://arxiv.org/pdf/1807.08749v5"
      locator: "Complete 52-page lecture notes; §§IV.2, IV.4 and IV.7, for freeze-out, freeze-in, and hidden-U(1) dark-matter examples."
---

## Example

Let $(\mathcal X,g)$ be a declared smooth four-dimensional Lorentzian spacetime with signature $(-,+,+,+)$, and let $U\subseteq\mathcal X$ be a coordinate patch and local trivialization of the hidden gauge bundle. The group is compact $U(1)_D$. The gauge potential is a real $C^1$ one-form $A_D=A_\mu^Ddx^\mu$ on $U$, and $F_D=dA_D$ is its $C^0$ curvature with components $F^D_{\mu\nu}=\partial_\mu A_\nu^D-\partial_\nu A_\mu^D$; $g_D>0$ is its dimensionless kinetic normalization. Let $S,\Phi\in C^2(U,\mathbb R)$ be real scalar fields of mass dimension one and singlets under $U(1)_D$ and the visible gauge group. Here $\Phi$ is called a modulus only if a separate compactification model identifies it as one. Let $H:U\to\mathbb C^2$ be a $C^2$ field in the visible Standard Model representation $(\mathbf 1,\mathbf 2)_{Y=1/2}$, using $Q=T_3+Y$, and a $U(1)_D$ singlet; thus $H^\dagger H$ is a visible and hidden gauge singlet. $F_D^{\mu\nu}:=g^{\mu\alpha}g^{\nu\beta}F^D_{\alpha\beta}$.

Choose a vacuum invariant under the exact $Z_2$ transformation $S\mapsto-S$, with $\langle S\rangle=0$, while $\Phi$, $H$ and all gauge fields are even. Assume the full EFT below cutoff $\Lambda$ preserves this symmetry and that $S$ is the lightest $Z_2$-odd excitation, with no lighter odd final state kinematically available. Include
$$\mathcal L\supset-\frac{1}{4g_D^2}F^D_{\mu\nu}F_D^{\mu\nu}-\frac12g^{\mu\nu}\partial_\mu S\,\partial_\nu S-\frac12m_S^2S^2-\frac{\lambda_S}{4!}S^4-\frac{\lambda_{HS}}{2}S^2H^\dagger H-\frac{\kappa}{2\Lambda^2}S^2F^D_{\mu\nu}F_D^{\mu\nu}-\frac12\mu_\Phi\Phi S^2.$$
Here $m_S>0$, $m_\Phi>0$, and $\mu_\Phi\ne0$; $\lambda_S,\lambda_{HS},\kappa,g_D$ are real dimensionless couplings, $\mu_\Phi$ and $\Lambda$ have mass dimension one, and $F_D$ has mass dimension two. The even scalar sector supplies a canonical kinetic term and a potential term $m_\Phi^2\Phi^2/2$. The parameters $m_S,m_\Phi$ are potential coefficients, not automatically excitation masses. The remaining interactions are chosen so the full smooth scalar potential $V$ is bounded below over the declared cutoff range; in particular take $\lambda_S>0$. The declared scalar range is contained in the open patch $\mathcal T_0=\{(S,\Phi,H):K(S)>0\}$, where $K(S)=g_D^{-2}+2\kappa S^2/\Lambda^2$ is the full coefficient in $-K(S)F_D^2/4$. If $\kappa\ge0$ this imposes no restriction on $S$; if $\kappa<0$ it requires $|S|<\Lambda/(g_D\sqrt{-2\kappa})$. This patch contains the stipulated $S=0$ vacuum and is invariant under the exact $Z_2$ and gauge actions.

For the decay branch, adopt weakly coupled, zero-temperature Minkowski-vacuum particle kinematics, neglecting curvature, medium and loop corrections. Fix constant vacuum values $\bar q=(0,v_\Phi,H_0)$ with vanishing gauge backgrounds and $dV(\bar q)=0$. Assume the canonically normalized fluctuations $s=S$ and $\varphi=\Phi-v_\Phi$ are mass eigenmodes: their quadratic kinetic terms have unit normalization and no mixing, and the Hessian of the complete potential has no mixed quadratic terms involving either mode. Define their positive tree-level excitation masses by $M_S^2:=\partial_S^2V(\bar q)$ and $M_\Phi^2:=\partial_\Phi^2V(\bar q)$, with $0<M_S,M_\Phi<\Lambda$. For the displayed $S$-dependent potential terms alone, $M_S^2=m_S^2+\lambda_{HS}H_0^\dagger H_0+\mu_\Phi v_\Phi$; any additional interactions contribute their own second derivatives. Define $g_{\varphi SS}:=\partial_\Phi\partial_S^2V(\bar q)$, of mass dimension one. Assume the complete cubic interaction with one $\varphi$ and two $s$ fields at this order is $-g_{\varphi SS}\varphi s^2/2$, with $g_{\varphi SS}\ne0$. The displayed trilinear contributes $\mu_\Phi$ to this coefficient; its nonzero value alone need not exclude cancellations from additional interactions. These are branch assumptions about the complete vacuum expansion, not consequences of $m_S,m_\Phi>0$.

For a thermal production branch, take a spatially flat FLRW chart on $I_t\times\Sigma$, where $I_t\subseteq\mathbb R$ is an open cosmic-time interval, $\Sigma$ is a spatial three-manifold with Euclidean metric $\delta_{ij}$ in the chart, $a\in C^2(I_t,(0,\infty))$, and $g=-dt^2+a(t)^2\delta_{ij}dx^i dx^j$. Specify radiation-bath fields $\rho_r,p_r,T_r\in C^1(I_t)$ with $\rho_r,T_r>0$ and $p_r=\rho_r/3$; in this example “radiation dominated” means this bath is the dominant energy-density component on the stated interval. Its expansion rate is $\mathcal H(t)=\dot a(t)/a(t)$. Let $\Gamma_{\rm chem}:I_t\to[0,\infty)$ be the number-changing interaction rate per $S$. If $\Gamma_{\rm chem}\gg\mathcal H$ for an interval so that chemical equilibrium is maintained and later becomes $\lesssim\mathcal H$, call the conditional production branch freeze-out. If bath reactions produce $S$ while chemical equilibrium is never attained, call it freeze-in. A distinct nonthermal branch is possible under the decay-branch assumptions above when $M_\Phi>2M_S$: the even excitation $\varphi$ then has an open $\varphi\to ss$ channel. Each branch needs its own rates, initial state and entropy history; none is calculated here. In a separate non-Abelian model, a confining sector means a specified gauge theory whose low-energy physical spectrum consists of gauge-invariant color-singlet states with a mass gap; a glueball is a color-singlet bound state made from its gauge fields. Its lightest state is a relic only if its portal-induced lifetime exceeds a stated cosmological interval. This illustrative EFT supplies no abundance, observed constraint or generic string-theory prediction.

## Facts & Assumptions

**Given:** Natural units, the stated four-dimensional EFT cutoff, the $(-,+,+,+)$ metric convention, positive full $U(1)_D$ gauge coefficient $K(S)$ on the declared scalar patch, the field domains and visible/hidden representations in the Example, $m_S,m_\Phi>0$, the unbroken exact $Z_2$ vacuum with $S$ the lightest odd excitation, a scalar potential bounded below over the cutoff range, the Higgs and dark-gauge portal operators, nonzero real $\mu_\Phi$, and a specified radiation/modulus-decay history. In the decay branch use the stated Minkowski-vacuum approximation, canonically normalized mass eigenmodes $s,\varphi$, complete-potential masses $M_S,M_\Phi$ and coupling $g_{\varphi SS}\ne0$. The fields $S,H,\Phi$ have mass dimension one; $F_D$ has dimension two; $\lambda_S,\lambda_{HS},\kappa,g_D$ are dimensionless; and $\mu_\Phi,\Lambda,m_S,m_\Phi,M_S,M_\Phi,g_{\varphi SS}$ have mass dimension one.

[F1] [[def-r5-hidden-sector-gauge-data]]: the group, typed local gauge and matter fields, representations, positive gauge kinetic matrix, matter masses, portals, cutoff, thermal history and exact stability criterion are specified data; none follows from the label hidden sector.

[F2] [[pthm-r5-sudden-decay-reheating-temperature]] applies only to its separately specified smooth spatially flat FLRW model $M=J\times\Sigma$, $g=-dt^2+a(t)^2\gamma$, homogeneous canonical quadratic scalar, and homogeneous smooth comoving radiation-fluid data $(\rho_r,p_r,n)$ with $\rho_r\ge0$, $p_r=\rho_r/3$ and $n=\partial_t$. These additive scalar-plus-fluid stresses are the only Einstein sources, with zero cosmological term. With $H(t_d^-)=\Gamma_\Phi$, complete sudden transfer and immediate thermalization, its total-density matching gives the stated temperature relation. No averaged-dust limit is needed for that algebra. The hidden-sector EFT above is not automatically such a background: using this branch additionally requires this entire model datum and prescription. The theorem supplies no hidden-sector branching fraction or abundance.

[F3] Source-backed thermal treatments distinguish freeze-out after equilibrium from freeze-in without equilibration, and string-cosmology reviews describe nonthermal relic production through moduli decay, dark glueballs and model-dependent hidden-sector portals (Cline, arXiv:1807.08749v5, §§IV.2, IV.4, IV.7; Cicoli et al., arXiv:2303.04819v2, §§5.5, 5.7.1, 6.2.8).

## Verification

1.1 The declared $U(1)_D$ is compact and has full kinetic coefficient $K(S)=g_D^{-2}+2\kappa S^2/\Lambda^2>0$ on the declared patch, after combining the two displayed $F_D^2$ terms. All scalar fields are hidden singlets, so the hidden scalar action is trivial and preserves the metric, potential and $K$; the visible action on $H$ also preserves this patch. The real scalar $S$ is a singlet under both gauge groups, while $H$ is a visible doublet and a hidden singlet, so $S^2H^\dagger H$ is gauge invariant; $S^2F_D^2/\Lambda^2$ has dimension six with the displayed inverse-square coefficient. Since the vacuum is $Z_2$-invariant and every EFT operator below the cutoff preserves $Z_2$, a decay of one odd $S$ must have an odd final state. The lightest-odd and kinematic assumptions exclude such a final state, so the one-particle $S$ excitation is stable within this EFT. These data instantiate [F1]. [given, F1, algebra]

2.1 The rate conditions in the Example distinguish the freeze-out and freeze-in branches without assigning either a rate or yield. In the decay branch, expansion of the complete $V$ at $\bar q$ gives the stipulated masses and cubic coefficient. In particular, twice differentiating the displayed Higgs and modulus portals in $S$ gives the shifts $\lambda_{HS}H_0^\dagger H_0$ and $\mu_\Phi v_\Phi$, so the coefficient $m_S$ cannot replace $M_S$ in a threshold. In the adopted Minkowski approximation, choose an orthonormal basis with metric matrix $\operatorname{diag}(-1,1,1,1)$ and parent four-momentum $(M_\Phi,\mathbf0)$. The daughter momenta $(M_\Phi/2,\pm\mathbf p)$ conserve four-momentum and satisfy $E^2-|\mathbf p|^2=M_S^2$ precisely when $|\mathbf p|=\sqrt{M_\Phi^2/4-M_S^2}$. Thus $M_\Phi>2M_S$ gives positive two-body phase space, and the nonzero complete cubic coefficient supplies the tree-level $\varphi ss$ vertex; the channel is open under these branch assumptions. At equality the two-body phase space vanishes, and below threshold it is closed. Only when all of [F2]'s smooth flat-FLRW scalar-plus-comoving-radiation-fluid data and $H(t_d^-)=\Gamma_\Phi$, complete sudden transfer and thermalization assumptions hold does it supply a conditional temperature after total-energy matching. No collision integral, branching fraction or Boltzmann solution is supplied, so none of these branches determines a relic abundance here. [given, F2, F3, step 1.1, algebra]

3.1 A confining alternative would require a different non-Abelian group, confinement scale, bound-state spectrum and lifetime analysis. Those inputs are absent from this $U(1)_D$ model, so the statement treats glueballs only as a separate conditional class, not as a consequence of this example. [given, F1, step 2.1] ∎
