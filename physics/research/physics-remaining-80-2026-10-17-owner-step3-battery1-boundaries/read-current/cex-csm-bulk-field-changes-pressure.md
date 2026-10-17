---
id: cex-csm-bulk-field-changes-pressure
kind: counterexample
title: A uniform one-body energy changes fixed-activity ideal-gas pressure
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-qualified-continuum-equilibrium-limits
  - post-csm-interacting-equilibrium-gibbs
  - def-csm-gibbs-physical-parameters
  - def-axiom-of-choice
  - post-csm-counting-and-physical-observables
  - lem-csm-continuum-kernel-normalization
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - def-tdmath-poisson-configuration-reference
  - thm-tdmath-poisson-reference-count-properties
dependency_roles:
  pthm-csm-qualified-continuum-equilibrium-limits: physical-result
  post-csm-interacting-equilibrium-gibbs: physical-assumption
  def-csm-gibbs-physical-parameters: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  post-csm-counting-and-physical-observables: physical-assumption
  lem-csm-continuum-kernel-normalization: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sabine Jansen, Gibbsian Point Processes, complete author-hosted lecture notes"
      url: "https://www.math.lmu.de/~jansen/gibbspp.pdf"
      locator: "Sections 3.2–3.3, PDF pp.47–49: positional grand-canonical partition normalization."
    - title: "David Dereudre, Introduction to the theory of Gibbs point processes, complete author-hosted mini-course notes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.3, PDF pp.10–11: finite-volume grand-canonical partition functions and Poisson reference."
physical_scope: "Ideal positional gas of one operationally indistinguishable species in a bounded three-dimensional Euclidean cube, at fixed dimensionless activity, positive inverse-energy parameter and physical temperature, with a spatially uniform one-body energy c_SI>0 joules per particle. Pressure is the reduced log-partition rate converted by k_BT per physical volume. This is a conditional model calculation only; it reports no observation and is outside the square-count exterior-boundary hypothesis of the cited theorem."
empirical_premises: []
---

## Statement refuted

At fixed positive activity, adding a spatially uniform one-body energy to each particle never changes the thermodynamic grand pressure.

## Facts & Assumptions

**Given:** Assume AC. Let $d=3$, $\Lambda_L=[0,L)^3$ in numerical coordinates, one species with operationally indistinguishable particles, unit-intensity Poisson reference $Q_{\Lambda_L}$, reference scales $E_0>0$ joules and $\ell_0>0$ metres, temperature $T>0$ kelvin, Boltzmann constant $k_B>0$ J/K, reference action $h_{\rm ref}>0$ J s, particle mass $m_{\rm p}>0$ kg, chemical potential $\mu\in\mathbb R$ joules, and uniform one-body energy $c_{\rm SI}>0$ joules per particle. Set $\beta_{\rm SI}=(k_BT)^{-1}$, $\lambda_T=h_{\rm ref}/\sqrt{2\pi m_{\rm p}k_BT}$, physical activity $z_c=e^{\beta_{\rm SI}\mu}\lambda_T^{-3}$, $\alpha=\log(\ell_0^3z_c)$, and dimensionless $\beta=E_0\beta_{\rm SI}$, $z=e^\alpha=\ell_0^3z_c$, and $c=c_{\rm SI}/E_0$.

[A1] The current draft [[post-csm-interacting-equilibrium-gibbs]] adopts finite-region Gibbs conditional laws when normalizers are positive and finite; the current draft [[post-csm-counting-and-physical-observables]] supplies the $1/N!$ sector factor for operationally indistinguishable particles. For this model, identify its locally prescribed action reference with $h_{\rm ref}$ as required by the adopted thermal-wavelength convention of [[post-csm-interacting-equilibrium-gibbs]]; this equality is a declared common-reference choice, not a numerical value supplied by the counting postulate. These are an adopted postulate and reference convention, not proven claims.

[A2] The current draft [[def-csm-gibbs-physical-parameters]] defines $\beta_{\rm SI}=(k_BT)^{-1}$ and continuum activity $z_c=e^{\beta_{\rm SI}\mu}\lambda_T^{-3}$ with $\lambda_T=h_{\rm ref}/\sqrt{2\pi m_{\rm p}k_BT}$.

[A3] Set the pair potential to $\phi\equiv0$. For each uniform energy $c_{\rm SI}\geq0$, additionally adopt the ideal positional grand-sector weight $z^Ne^{-\beta cN}$ at fixed physical activity $z_c$. Numerical coordinates satisfy $x_{\rm SI}=\ell_0 q$, so $z_c^N d^{3N}x_{\rm SI}=z^N d^{3N}q$ and $\beta_{\rm SI}c_{\rm SI}=\beta c$. Define its standard positional grand partition by $\Xi_L^c=\sum_{N\geq0}(z^N/N!)\int_{\Lambda_L^N}e^{-\beta cN}\,dq_1\cdots dq_N$. Define its reduced pressure as $p(c)=\lim_{L\to\infty}L^{-3}\log\Xi_L^c$ and SI pressure by $P_{\rm SI}(c)=(k_BT/\ell_0^3)p(c)$. Here $\alpha,z,\beta,c$ are dimensionless. This is an explicit ideal-gas model and pressure convention, conditional on [A1] and [A2], not an empirical claim.

[A4] Assume the Axiom of Choice [[def-axiom-of-choice]], as required by the unit-Poisson reference and its count-properties theorem.

[F1] [[pthm-csm-qualified-continuum-equilibrium-limits]] restricts its uniform exterior-pressure conclusion to the stated square-count exterior class. A one-body term $cN$ throughout the volume is not an exterior boundary configuration in that class.

[F2] [[def-tdmath-poisson-configuration-reference]] defines the unit-intensity Poisson reference $Q$ and its bounded-region restrictions $Q_D$.

[F3] [[lem-csm-continuum-kernel-normalization]] states that for bounded Borel $D$ and $N\geq0$, the $N$-point sector of $Q_D$ is the pushforward of $e^{-|D|}/N!$ times product Lebesgue measure on ordered simple tuples.

[F4] [[thm-tdmath-poisson-reference-count-properties]] gives $N_{\Lambda_L}\sim\mathrm{Poisson}(L^3)$ and the exact exponential moment $E_Qe^{sN_{\Lambda_L}}=\exp(L^3(e^s-1))$.

[F5] [[def-real-exponential-function-and-e]] defines $\exp$ by its real power series; [[thm-exponential-addition-formula]] gives $\exp(x+y)=\exp(x)\exp(y)$, and [[thm-exponential-is-strictly-increasing]] gives strict monotonicity.

[F6] [[def-natural-logarithm]] defines $\log$ as the inverse of the real exponential, so $\exp(\log x)=x$ for $x>0$.

## Counterexample

1.1 Under [A3], an $N$-particle configuration has numerical positional energy $H_N^c=cN$. Its unit-Poisson normalized grand partition is
$$Z_{Q,L}^c=E_{Q_{\Lambda_L}}\!\left[e^{\alpha N_{\Lambda_L}}e^{-\beta cN_{\Lambda_L}}\right] =E_{Q_{\Lambda_L}}e^{(\alpha-\beta c)N_{\Lambda_L}} =\exp\!\left(L^3(e^{\alpha-\beta c}-1)\right)$$
by [F4] and the exponential addition law [F5]. [given, A1, A2, A3, A4, F2, F4, F5, F6, algebra]

2.1 By [F3], the $N$-point sector of $Q_{\Lambda_L}$ contributes $e^{-L^3}/N!$ times the positional integral in [A3]. Summing sectors therefore gives $Z_{Q,L}^c=e^{-L^3}\Xi_L^c$, so [A3] yields $\Xi_L^c=\exp(L^3e^{\alpha-\beta c})$. Its reduced pressure is $p(c)=\lim_{L\to\infty}L^{-3}\log\Xi_L^c=e^{\alpha-\beta c}$ by [F6]. The SI conversion in [A3] is $P_{\rm SI}(c)=E_0p(c)/(\beta\ell_0^3)$ pascals. [A3, A4, F2, F3, F6, step 1.1, algebra]

3.1 Repeating steps 1.1–2.1 in the $c_{\rm SI}=0$ member of [A3]'s model family gives $p(0)=e^\alpha$. For the selected $c_{\rm SI}>0$, $\beta c=\beta_{\rm SI}c_{\rm SI}>0$, so strict monotonicity [F5] yields $p(c)=e^{\alpha-\beta c}<e^\alpha=p(0)$. The fixed-activity SI pressures differ by the same positive factor $E_0/(\beta\ell_0^3)$, while the volume term is not covered by the restricted exterior-boundary theorem in [F1]. Thus the stated universal claim is false. [A3, F1, F5, step 2.1, algebra] ∎
