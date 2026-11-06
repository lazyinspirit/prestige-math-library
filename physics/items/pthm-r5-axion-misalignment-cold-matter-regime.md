---
id: pthm-r5-axion-misalignment-cold-matter-regime
kind: physics-theorem
title: A homogeneous harmonic axion has a controlled averaged cold-matter limit
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 4
deps:
  - def-r5-string-axion-data
  - pthm-r5-quadratic-modulus-averaged-dust
dependency_roles:
  def-r5-string-axion-data: formulation-prerequisite
  pthm-r5-quadratic-modulus-averaged-dust: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: Conditional leading-limit result for one homogeneous, canonically normalized axion in a prescribed expanding flat-FLRW background, under the time-independent-mass harmonic models and the explicit small-$H_n/m_{a,n}$, total-variation, and centered-window limits in the Statement. It predicts neither an unconditional relic abundance nor a global string compactification.
sources:
  references:
    - title: "D. J. E. Marsh, Axion Cosmology, arXiv:1510.07633v2"
      url: "https://arxiv.org/pdf/1510.07633v2"
      locator: "§4.1 and Eqs. (51)–(59), PDF pp. 26–27, for the canonical scalar action, homogeneous equation and energy density/pressure; §4.3.1, PDF pp. 27–29, for overdamped initial conditions and the oscillatory cold-matter regime."
    - title: "J. M. Cline, TASI Lectures on Early Universe Cosmology: Inflation, Baryogenesis and Dark Matter, arXiv:1807.08749v5"
      url: "https://arxiv.org/pdf/1807.08749v5"
      locator: "Complete 52-page lecture notes; §IV.6, especially Eqs. (206)–(209) and the discussion of the Hubble-to-mass transition and the post-inflationary defect caveat."
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§5.7.2, PDF pp. 114–116, for QCD-axion misalignment, nonstandard reheating and compactification-dependent abundance."
---

## Statement

Use natural units $\hbar=c=1$. Let $J\subseteq\mathbb R$ be an open time interval and let $I=[t_-,t_+]\subset J$ be a fixed nondegenerate compact interval. For each family index $n\ge1$, let $A_n\in C^\infty(J,(0,\infty))$ be the scale factor in a product chart of a prescribed expanding spatially flat FLRW background, with metric $ds^2=-dt^2+A_n(t)^2\delta_{ij}dx^idx^j$, and set $H_n=\dot A_n/A_n>0$ on $I$. For each $n$, supply a mass $m_{a,n}>0$ constant in time; it may vary across the family. The harmonic potential and cutoff regime are supplied for each family member, with no common finite cutoff asserted for the entire limiting family. Let $\theta_n\in C^\infty(J,\mathbb R/(2\pi\mathbb Z))$ be one homogeneous axion field with the convention of the earlier axion EFT datum, with $f>0$ constant on the model patch and homogeneous canonical field $\chi_n\in C^\infty(J,\mathbb R)$ given on the chosen harmonic branch by $\chi_n=f\widetilde\theta_n$, where $\widetilde\theta_n\in C^\infty(J,\mathbb R)$ is a specified real lift of $\theta_n$. Assume $\chi_n(J)$ lies in a selected harmonic branch on which $V_n(\chi)=\frac12m_{a,n}^2\chi^2$ up to an irrelevant additive constant, and assume the source-free model equation $\ddot\chi_n+3H_n\dot\chi_n+m_{a,n}^2\chi_n=0$ on $J$. This model includes no energy-transfer term or backreaction on the prescribed backgrounds. Define $\rho_{a,n}=\frac12\dot\chi_n^2+\frac12m_{a,n}^2\chi_n^2$ and $p_{a,n}=\frac12\dot\chi_n^2-\frac12m_{a,n}^2\chi_n^2$. For $Q_n\in\{\rho_{a,n},p_{a,n}\}$ and window lengths $\Delta_n>0$, define the centered uniform average $\bar Q_n(t)=\Delta_n^{-1}\int_{t-\Delta_n/2}^{t+\Delta_n/2}Q_n(s)\,ds$ whenever the window is contained in $I$. Put $W_n(t):=[t-\Delta_n/2,t+\Delta_n/2]$ and call $t$ an admissible center when $W_n(t)\subseteq I$. In natural units, $\chi_n,m_{a,n},H_n$ have mass dimension one, $t,\Delta_n$ have dimension minus one, and $\rho_{a,n},p_{a,n}$ have dimension four; $A_n$ follows the scale-factor unit convention of the declared FLRW chart.

Consider a controlled family of nonzero solutions with $\bar\rho_{a,n}(t)>0$ at admissible centers and

$$\sup_I(H_n/m_{a,n})\to0,\qquad \sup_I(|\dot H_n|/m_{a,n}^2)\to0,\qquad \sup_I(|\ddot H_n|/m_{a,n}^3)\to0,\qquad m_{a,n}^{-1}\int_I|\dot H_n(s)|\,ds\to0.$$

Use admissible windows satisfying

$$m_{a,n}\Delta_n\to\infty,\qquad \Delta_n\sup_I H_n\to0,\qquad \Delta_n\sup_I|\dot H_n|/m_{a,n}\to0,\qquad \Delta_n\sup_I|\ddot H_n|/m_{a,n}^2\to0.$$

Fix a reference center $t_0\in I$ with $W_n(t_0)\subseteq I$ for all sufficiently large $n$. For every such fixed reference center, uniformly over admissible centers $t$, the limits are $\bar p_{a,n}(t)/\bar\rho_{a,n}(t)\to0$ and $A_n(t)^3\bar\rho_{a,n}(t)/(A_n(t_0)^3\bar\rho_{a,n}(t_0))\to1$. These conclusions apply only to families satisfying the displayed limits. No finite-parameter averaging error, transition solution, string/domain-wall contribution, or relic abundance is asserted.

## Statement references

[[def-r5-string-axion-data]], [[pthm-r5-quadratic-modulus-averaged-dust]]

## Facts & Assumptions

**Given:** The natural-unit scalar EFT conventions, a periodic axion with a fixed local canonical chart, a positive time-independent mass $m_{a,n}$ for each family member, the prescribed interval/backgrounds, and the controlled family and admissible windows of the Statement.

[F1] [[def-r5-string-axion-data]]: on a fixed single-field patch the angle $\theta$ has period $2\pi$, $f>0$ is constant, and $\chi=f\theta$ is a local canonical scalar; a harmonic approximation is an additional range-restricted model input.

[F2] [[pthm-r5-quadratic-modulus-averaged-dust]]: the actual draft statement assumes a family of homogeneous canonical oscillators, centered windows, the stated pointwise background/window limits, and $m_n^{-1}\int_I|\dot H_n|\,ds\to0$. It concludes $\bar p_n/\bar\rho_n\to0$ and $a_n^3\bar\rho_n$ is constant relative to a reference center, uniformly over admissible centers. Its current Proof 4.2 establishes $R_n(t_0)>0$ from the assumed positive average using the comparison in Proof 3.1. Its Step 1 decision remains escalated for a separate transitive plan-interface issue; that status is not acceptance of the result.

[A1] The source-free homogeneous scalar equation in the statement is the adopted dynamical model on this patch; it is not inferred from the periodic identification alone.

## Proof

1.1 By [F1], each chosen angle map, with the specified real lift, has the local canonical scalar $\chi_n=f\widetilde\theta_n$ with the stated constant $f$. The harmonic-range assumption gives $V_n(\chi_n)=m_{a,n}^2\chi_n^2/2$ on every field value visited, and [A1] supplies exactly the oscillator equation used by [F2] after setting $\varphi_n=\chi_n$ and $m_n=m_{a,n}$. The energy and pressure definitions also coincide. [given, F1, F2, A1, algebra]

1.2 For each $n$, $A_n\in C^\infty(J,(0,\infty))$ makes $H_n=\dot A_n/A_n$ continuous. Put $y_n=(\chi_n,\dot\chi_n):J\to\mathbb R^2$ and $B_n(t)=\begin{pmatrix}0&1\\-m_{a,n}^2&-3H_n(t)\end{pmatrix}$, so $y_n'=B_ny_n$. If $y_n(t_0)=0$, choose any compact interval $K\subset J$ containing $t_0$ and let $M=\sup_{s\in K}\|B_n(s)\|<\infty$ for the Euclidean operator norm. For $u\in K$ with $u\ge t_0$, the integral equation gives $|y_n(u)|\le M\int_{t_0}^u|y_n(s)|\,ds$; setting $v(u)=\int_{t_0}^u|y_n(s)|\,ds$ gives $(e^{-M(u-t_0)}v(u))'\le0$ and $v(t_0)=0$, so $v=0$ and $y_n=0$ on $[t_0,\max K]$. For $u\in K$ with $u\le t_0$, set $v(u)=\int_u^{t_0}|y_n(s)|\,ds$; then $|y_n(u)|\le Mv(u)$ and $(e^{M(u-t_0)}v(u))'\ge0$, while $v(t_0)=0$, so nonnegativity gives $v=0$ and $y_n=0$ on $[\min K,t_0]$. Varying $K$ shows $y_n\equiv0$ on $J$, contrary to the assumed nonzero solution. Thus $(\chi_n(t),\dot\chi_n(t))\ne(0,0)$ for all $t\in J$. Since $m_{a,n}>0$, $\rho_{a,n}(t)=\tfrac12\dot\chi_n(t)^2+\tfrac12m_{a,n}^2\chi_n(t)^2>0$, in particular $A_n(t_0)^3\rho_{a,n}(t_0)>0$ before the reference ratio supplied by [F2] is used. [given, A1, algebra]

2.1 Set $a_n=A_n$, $\varphi_n=\chi_n$ and $m_n=m_{a,n}$ in [F2]. The smoothness assumptions now agree exactly. The total-variation limit is an explicit hypothesis; it is not inferred from pointwise derivative bounds when the mass varies with $n$. Step 1.2 gives nonzero pointwise and averaged energies, and the reference windows are admissible eventually. The prescribed background, source-free equation and all pointwise and window limits are precisely those of [F2]. [given, F2, step 1.1, step 1.2, algebra]

3.1 Under the full matched hypotheses in step 2.1, the actual conclusion of [F2] gives $\bar p_{a,n}(t)/\bar\rho_{a,n}(t)\to0$ and $A_n(t)^3\bar\rho_{a,n}(t)/(A_n(t_0)^3\bar\rho_{a,n}(t_0))\to1$, uniformly over admissible centers. This supplies no finite-parameter error bound. [given, F2, step 1.2, step 2.1] ∎
