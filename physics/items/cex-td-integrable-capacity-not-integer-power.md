---
id: cex-td-integrable-capacity-not-integer-power
kind: counterexample
title: Finite entropy integral does not force a heat-capacity power bound of order one or higher
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A formal fixed-composition positive-temperature response chart used to refute an inference from integral convergence alone; it is not a measured material or a complete global bulk-family model.
deps:
  - def-td-response-functions
  - def-td-temperature-pressure-chemical-potential
  - def-td-si-quantities
  - post-td-concave-fundamental-entropy
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-newton-leibniz-with-interior-derivative
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - def-ordered-field
  - thm-reals-ordered-field
  - lem-of-add-order
  - def-convex-concave-and-midpoint-convex-functions
  - cor-second-derivative-characterises-convexity
  - thm-continuous-implies-integrable
dependency_roles:
  def-td-response-functions: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-ordered-field: mathematical-premise
  thm-reals-ordered-field: mathematical-premise
  lem-of-add-order: mathematical-premise
  def-convex-concave-and-midpoint-convex-functions: mathematical-premise
  cor-second-derivative-characterises-convexity: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.5
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.6.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 7
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement refuted

For a positive-temperature fixed-$V,n$ chart, write $\theta=T/T_*$. For a dimensionless real exponent $q\ge1$, the notation $C_V(T)=O(\theta^q)$ as $\theta\downarrow0$ means that there exist a constant $M>0$ measured in $\mathrm{J\,K^{-1}}$ and a dimensionless $\delta\in(0,1]$ such that $|C_V(T)|\le M\theta^q$ whenever $0<\theta<\delta$. Finite convergence of the entropy integral alone does not imply such a bound for any real $q\ge1$, even when the entropy has a finite limit and the local response-chart identities apply. The displayed branch is a formal chart calculation, not a claim that a particular substance realizes the chart.

The displayed entropy is $S^{\rm SI}$ in physical SI coordinates. Take one named species and the positive-amount open neighborhood specified here, and let $O_c$ be the numerical preimage of that product patch under $\Phi_c(\hat U,\hat V,\hat n)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$. For this formal state-domain model, let $E_c:=O_c$ be the set of preparation labels, designate each label as an equilibrium preparation, and let $\pi_c:E_c\to\mathbb R^3$ be the identity, so $D_c=O_c$. At each label $e=(\hat U,\hat V,\hat n)$ assign a one-point mechanical model of mass $m_*\hat n$ kilograms at the origin with zero center-of-mass velocity, where $m_*>0$ kilograms is the fixed mass assigned to one mole; this supplies the positive-mass and rest-frame data required by [[def-td-temperature-pressure-chemical-potential]]. Set $S_c=S^{\rm SI}\circ\Phi_c$. The derivatives below are those of $S^{\rm SI}=S_c\circ\Phi_c^{-1}$ on $\Phi_c(O_c)$, exactly as in [[def-td-temperature-pressure-chemical-potential]]. This supplies a numerical-to-SI chart and equilibrium-label realization for the formal witness, with no assertion of a measured material or a global constitutive extension.

## Facts & Assumptions

**Given:** A fixed-$V,n$ positive-temperature chart on $0<T<T_*$, with $T_*>0$ kelvins and finite limiting entropy as $T\downarrow0$.

[F1] [[def-td-response-functions]]: On a valid response chart $C_V=(\partial U/\partial T)_{V,n}$, in $\mathrm{J\,K^{-1}}$.

[F2] [[def-td-temperature-pressure-chemical-potential]]: On a smooth positive-temperature entropy chart $T=1/S_U$, with the other physical coordinates held fixed.

[F3] [[def-td-si-quantities]]: $U$ is in joules, $S$ in $\mathrm{J\,K^{-1}}$, $T$ in kelvins, and $C_V$ in $\mathrm{J\,K^{-1}}$.

[F4] [[post-td-concave-fundamental-entropy]]: On a designated open single-phase chart, $S$ is $C^2$, concave, and has finite $S_U>0$; these are adopted local model premises.

[L1] [[def-real-power]] and [[thm-real-power-continuity-and-derivatives]]: For $a>0$ and $x\in\mathbb R$, $a^x=\exp(x\log a)$; for $\alpha\in\mathbb R$, $(x^\alpha)'=\alpha x^{\alpha-1}$ on $x>0$.

[L2] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: The sum, scalar-multiple, and composition rules apply to the displayed differentiable real-valued functions of $T$ on their open positive-temperature interval.

[L3] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], and [[thm-exponential-is-strictly-increasing]]: $\log$ is strictly increasing with $\log 1=0$; $\exp(\log x)=x$ for $x>0$; and $\exp$ is strictly increasing on $\mathbb R$.

[L4] [[def-ordered-field]], [[thm-reals-ordered-field]], and [[lem-of-add-order]]: The real numbers form an ordered field; positive elements are closed under multiplication, the product of a positive and negative real is negative, and adding the same real preserves the order.

[L5] [[def-convex-concave-and-midpoint-convex-functions]]: A real function is concave on an interval exactly when its negative is convex, using the convex-combination inequality.

[L6] [[cor-second-derivative-characterises-convexity]]: For a twice-differentiable scalar function on an open interval, a nonnegative second derivative is equivalent to convexity.

[L7] [[thm-continuous-implies-integrable]]: Every continuous function on a nondegenerate closed interval is Riemann integrable there.

[L8] [[thm-newton-leibniz-with-interior-derivative]]: A Riemann-integrable function on a closed interval that agrees with the derivative of a continuous primitive on the interior integrates to the primitive's endpoint difference.

[A1] Choose $T_*>0$ kelvins, $C_*>0$ measured in $\mathrm{J\,K^{-1}}$, a finite $S_0$ in $\mathrm{J\,K^{-1}}$, $U_0>0$ joules, $V_0>0$ cubic metres, and $n_0>0$ moles. On the open chart $ U_0<U<U_0+\frac23 C_*T_*,\qquad V_0/2<V<3V_0/2,\qquad n_0/2<n<3n_0/2, $ define $\theta(U):=[3(U-U_0)/(2C_*T_*)]^{2/3}\in(0,1)$ and $ S_c(U,V,n):=S_0+2C_*\theta(U)^{1/2}. $ This finite function is $C^2$, independent of $V,n$, and has $S_U=1/(T_*\theta)>0$ and $S_{UU}=-1/(C_*T_*^2\theta^{5/2})=-1/(T^2C_V)<0$ throughout the chart. Thus it satisfies the local smoothness, positive-temperature, and concavity conditions used here. Put $T:=T_*\theta(U)$ and $\theta:=T/T_*$; solving for $U$ gives the fixed-$V,n$ response branch $ U(T)=U_0+\frac23 C_*T_*\theta^{3/2},\qquad S(T)=S_0+2C_*\theta^{1/2},\qquad 0<T<T_*. $ Equivalently, the corresponding entropy-coordinate energy chart is $ U_c(s,V,n)=U_0+\frac23 C_*T_*\left(\frac{s-S_0}{2C_*}\right)^3, \quad S_0<s<S_0+2C_*. $ It has $T=\partial_sU_c=T_*[(s-S_0)/(2C_*)]^2$, whose explicit inverse is $s=S_0+2C_*\sqrt{T/T_*}$ for $0<T<T_*$. Hence the $(T,V,n)$ natural-coordinate chart is open and valid on the stated patch; its inverse is given explicitly by the branch formulas. The constructed chart is a formal local response model only; it reports no material data and asserts no global extension.

## Counterexample

On the branch in [A1], the displayed maps $U(T)$ and $T(U)$ are mutually inverse $C^1$ maps on the stated open intervals, so they give a valid local fixed-$V,n$ response chart. The entropy chart uses the absolute-temperature definition $T=1/S_U$; the response identity needed below follows directly from the explicit branch formulas.

1.1 Repeated use of the power derivative [L1] and scalar chain, sum, and product rules [L2] shows that $S_c$ is $C^2$ on the positive open chart. Differentiating $\theta(U)$ gives $\theta_U=(C_*T_*)^{-1}\theta^{-1/2}$, so $S_U=C_*\theta^{-1/2}\theta_U=1/(T_*\theta)$ and $S_{UU}=-(C_*T_*^2)^{-1}\theta^{-5/2}<0$. At fixed $V,n$, [L6] applied to $-S_c$ shows that $S_c$ is concave as a function of $U$; because $S_c$ is independent of $V,n$, the same convex-combination inequality holds on the full product chart. Thus the entropy is concave there and $S_U$ is finite and positive, as required by [F4]. By [F2], the absolute temperature is $T=1/S_U=T_*\theta$. Differentiating the explicit branch functions $U(T),S(T)$ in [A1] by [L1,L2] gives
$$U_T=C_*\theta^{1/2},\qquad S_T=\frac{C_*}{T_*}\theta^{-1/2}.$$
The response definition [F1] now gives $C_V=U_T=C_*\theta^{1/2}=T S_T$. The displayed inverse branch and these continuous derivatives give a valid local response chart. [given, A1, F1, F2, F3, F4, L1, L2, L5, L6, algebra]

2.1 For $0<\epsilon<T$, the integrand $C_V(t)/t$ is continuous on $[\epsilon,T]$ and is Riemann integrable there by [L7]; it agrees on its interior with the derivative of $2C_*\sqrt{t/T_*}$. By [L8],
$$\int_\epsilon^T\frac{C_V(t)}{t}\,dt=2C_*\left(\sqrt{T/T_*}-\sqrt{\epsilon/T_*}\right).$$
As $\epsilon\downarrow0$, this tends to $2C_*\sqrt{\theta}=S(T)-S_0$, so the improper entropy integral converges and the entropy has the finite limit $S_0$. [given, A1, step 1.1, L8, algebra]

3.1 Fix any dimensionless real exponent $q\ge1$, any proposed $M>0$ in $\mathrm{J\,K^{-1}}$, and any dimensionless $\delta\in(0,1]$. Since $0<\theta<1$ implies $\log\theta<0$ by [L3], ordered-field arithmetic [L4] gives $(q-1)\log\theta\le0$ and hence $q\log\theta\le\log\theta$. Thus $\theta^q=\exp(q\log\theta)\le\exp(\log\theta)=\theta$ by [L1,L3]. Choose $0<\theta<\min\{\delta,(C_*/M)^2,1\}$. Then $M\theta^q\le M\theta<C_*\sqrt{\theta}=C_V(T)$, so the proposed bound fails at this temperature. As $M$ and $\delta$ were arbitrary, no constants in the stated big-$O$ definition work for this $q$; since $q\ge1$ was arbitrary, the assertion fails for every real exponent $q\ge1$. [given, A1, L1, L3, L4, step 1.1, algebra, choose] ∎

## Remarks

Tong's §4.5 says that finite entropy-integral convergence entails a low-temperature heat-capacity power $T^n$ for some $n\ge1$ or faster, without specifying an integer exponent. This branch refutes that general power-bound inference from integrability alone, while its own heat capacity still tends to zero. It does not refute a separate physical model theorem with additional low-temperature spectral or constitutive hypotheses, and it is not an empirical statement about any material.
