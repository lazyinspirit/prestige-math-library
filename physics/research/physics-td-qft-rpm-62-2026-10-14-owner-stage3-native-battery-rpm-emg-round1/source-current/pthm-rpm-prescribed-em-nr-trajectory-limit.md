---
id: pthm-rpm-prescribed-em-nr-trajectory-limit
kind: physics-theorem
title: "Controlled prescribed-field trajectory limit"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-mechanical-momentum-and-observer-energy
  - post-sr-massive-particle-dynamics
  - post-em-minkowski-physical-model
  - post-em-lorentz-coupling
  - def-em-electromagnetic-tensor
  - def-em-fields
  - def-em-sources
  - def-em-si-conventions
  - def-em-lab-geometry
  - def-em-relativistic-worldlines-frames
  - pthm-em-relativistic-lorentz-force
  - pthm-rpm-inverse-momentum-and-work
  - lem-rpm-low-speed-remainders
  - def-vector-valued-derivative-and-integral
  - thm-componentwise-limits-and-continuity
  - thm-continuous-implies-integrable
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-gronwall-integral-inequality
  - def-cross-product-in-r3
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - cor-mean-value-theorem
dependency_roles:
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  post-sr-massive-particle-dynamics: physical-assumption
  post-em-minkowski-physical-model: physical-assumption
  post-em-lorentz-coupling: physical-assumption
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  pthm-em-relativistic-lorentz-force: physical-result
  pthm-rpm-inverse-momentum-and-work: physical-result
  lem-rpm-low-speed-remainders: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
physical_scope: "Conditional finite-time comparison of the adopted constant-mass relativistic Lorentz-force model with its formal Newtonian momentum-velocity replacement in prescribed SI electric and magnetic fields held fixed as the model parameter c tends to infinity. Both trajectories must exist on the same stated interval and stay in a common compact convex state region. This is not an empirical variation of nature's measured speed of light, a self-consistent Maxwell limit, a global-in-time claim, or a claim including self-field or radiation reaction."
empirical_premises: []
sources:
  references:
    - title: "OpenStax, University Physics Volume 2, complete textbook, §16.1"
      url: "https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves"
      locator: "§16.1: Maxwell's equations and the SI three-vector Lorentz-force equation, used as field-force context only."
    - title: "OpenStax, University Physics Volume 3, complete textbook, Chapter 5"
      url: "https://openstax.org/books/university-physics-volume-3/pages/5-8-relativistic-momentum"
      locator: "§§5.8–5.9, relativistic momentum and energy, used only for the inertial mass-shell kinematics that are stated exactly by the in-run supplier."
---

## Statement

Fix a reference speed $c_*>0$, mass $m>0$, charge $q\in\mathbb R$, cutoff $0<\delta<1$, finite time $T>0$, an open time interval $I\supseteq[0,T]$, and an open spatial region $\Omega\subseteq\mathbb R^3$. In a fixed inertial chart with $x^0=ct$, let $\mathbf E,\mathbf B:I\times\Omega\to\mathbb R^3$ be prescribed jointly $C^1$ fields in SI units, with $\mathbf E$ in volts per metre and $\mathbf B$ in teslas. The same fields, mass, and charge are held fixed in the following formal family of model equations indexed by $c>0$; no Maxwell equations or empirical premise are added.

Choose reference scales $L_*>0$ metres and $P_*>0$ kilogram metres per second and define the dimensionless state norm

$$\|(x,p)\|_*:=\frac{|x|}{L_*}+\frac{|p|}{P_*}.$$

Let $\pi_x:\Omega\times\mathbb R^3\to\Omega$ be the spatial projection $\pi_x(x,p):=x$, and let $K\ne\varnothing$ be a compact convex subset of $\Omega\times\mathbb R^3$. With $|\cdot|$ the Euclidean norm, put $P_{\max}:=\sup_{(x,p)\in K}|p|$, $E_{\max}:=\sup_{(t,x)\in[0,T]\times\pi_xK}|\mathbf E(t,x)|$, and $B_{\max}:=\sup_{(t,x)\in[0,T]\times\pi_xK}|\mathbf B(t,x)|$. These field suprema are finite by the $C^1$ hypothesis on a compact cylinder. Set

$$B_*:=\frac{P_{\max}}{mL_*}+\frac{|q|}{P_*}\left(E_{\max}+\frac{P_{\max}B_{\max}}m\right).$$

For $c>0$ with $c\ge P_{\max}/(m\delta)$, define the momentum-to-velocity map

$$V_c(p):=\frac{p}{m\sqrt{1+|p|^2/(m^2c^2)}}.$$

This is the velocity obtained from the massive mass shell and inverse momentum formula of [[pthm-rpm-inverse-momentum-and-work]]. Define the relativistic and Newtonian vector fields on $[0,T]\times K$ by

$$G_c(t,x,p):=\bigl(V_c(p),\,q[\mathbf E(t,x)+V_c(p)\times\mathbf B(t,x)]\bigr),\qquad G_N(t,x,p):=\bigl(p/m,\,q[\mathbf E(t,x)+(p/m)\times\mathbf B(t,x)]\bigr).$$

Suppose there is $L\ge0$, with units $\mathrm{s}^{-1}$, such that for all $t\in[0,T]$ and states $\zeta,\widetilde\zeta\in K$,

$$\|G_N(t,\zeta)-G_N(t,\widetilde\zeta)\|_*\le L\|\zeta-\widetilde\zeta\|_*.$$

For every $c>0$ in the family, $G_c$ and $G_N$ are bounded by $B_*$ in $\|\cdot\|_*$ on $[0,T]\times K$, since $|V_c(p)|\le P_{\max}/m$. For each $c>0$ with $c\ge P_{\max}/(m\delta)$, let $J\subseteq I$ be an open interval containing $[0,T]$ and let $x_c\in C^2(J,\Omega)$ satisfy $|\dot x_c(t)|<c$. Define the coordinate velocity $v_c(t):=\dot x_c(t)$ and Lorentz factor $\gamma_c(t):=(1-|v_c(t)|^2/c^2)^{-1/2}$. The curve $X_c(t)=(ct,x_c(t))$ is a future-timelike massive worldline with proper time $d\tau/dt=\sqrt{1-|v_c(t)|^2/c^2}$ and four-velocity $U_c=\gamma_c(c,v_c)$; its spatial momentum is $p_c=m\gamma_c v_c$. Assume $X_c$ satisfies the adopted covariant Lorentz coupling in the prescribed field. Define $z_c(t):=(x_c(t),p_c(t))$. Let $(x_N,p_N)$ be a $C^1$ solution on $[0,T]$ of $\dot z=G_N(t,z)$ and set $z_N(t):=(x_N(t),p_N(t))$. Require $z_c(0)=z_N(0)$ and both coordinate-state trajectories to remain in $K$. Then the relativistic coordinates satisfy $\dot z_c=G_c(t,z_c)$, and, with $\epsilon_c:=(c_*/c)^2$ and

$$C_*:=\frac{P_{\max}^3}{2m^3c_*^2}\left(\frac1{L_*}+\frac{|q|B_{\max}}{P_*}\right),$$

one has

$$\sup_{0\le t\le T}\|(x_c(t),p_c(t))-(x_N(t),p_N(t))\|_*\le C_*\epsilon_c T e^{LT}.$$

Here $C_*$ has units $\mathrm{s}^{-1}$. Consequently the state difference is $O(c^{-2})$ on this fixed interval as $c\to\infty$, provided the common containment and Lipschitz hypotheses hold for the family.

For every $t\in[0,T]$, the relativistic speed satisfies $|v_c(t)|/c\le\delta$. If $\mathcal E_c(t):=\sqrt{m^2c^4+c^2|p_c(t)|^2}$ is the particle energy from the same mass shell, then [[lem-rpm-low-speed-remainders]] also gives

$$|p_c-mv_c|\le\frac{m|v_c|^3}{2c^2(1-\delta^2)^{3/2}},\qquad 0\le\mathcal E_c-mc^2-\frac12m|v_c|^2\le\frac{3m|v_c|^4}{8c^2(1-\delta^2)^{5/2}}.$$

The limit is a formal comparison between model equations; it does not state that the SI value of $c$ varies in nature.

## Facts & Assumptions

**Given:** The prescribed field maps and their regularity and units, $m>0$, constant $q$, the reference scales, compact convex state set, $P_{\max}$, $B_{\max}$, Lipschitz constant $L$, and for each stated $c$ an existing future-timelike $C^2$ worldline satisfying the adopted coupling together with an existing Newtonian comparison solution, with common initial state and compact containment.

[A1] The adopted flat massive-particle model uses constant mass $m>0$, momentum $P=mU$, and the fixed flat inertial-frame conventions; it is a physical assumption, not an empirical finding ([[post-sr-massive-particle-dynamics]], [[post-em-minkowski-physical-model]]).

[A2] The prescribed external Lorentz coupling adopts $m\,dU/d\tau=q\Phi(U)$ with constant charge $q$, positive external rest mass, and no self-field ([[post-em-lorentz-coupling]]).

[F1] The supplier fields are $\mathbf E_s,\mathbf B_s:\Omega\times I\to\mathbb R^3$, of class $C^1$, with units V m$^{-1}$ and T ([[def-em-fields]], [[def-em-lab-geometry]], [[def-em-si-conventions]]). The Statement's time-first notation means $\mathbf E(t,x):=\mathbf E_s(x,t)$ and $\mathbf B(t,x):=\mathbf B_s(x,t)$; it is an argument swap, not a different field. Since $\Omega$ is open, $\mathcal U:=\Omega\times\mathbb R^3$ is an open state domain in $\mathbb R^6$. The formulas for $G_c,G_N$ in the Statement define $C^1$ maps on $[0,T]\times\mathcal U$, whose restrictions are the fields used on $[0,T]\times K$; thus $K$ may be compact without being open. In SI, $c,c_*$ are m s$^{-1}$, $m$ is kg, $q$ is C, $t,T$ are seconds, $x,L_*$ are metres, $p,P_*$ are kg m s$^{-1}$, and particle energy is J ([[def-em-si-conventions]], [[def-em-sources]], [[def-em-lab-geometry]]). Thus $\|\cdot\|_*$ and $\epsilon_c$ are dimensionless; $B_*,L,C_*$ have units s$^{-1}$, while $E_{\max}$ and $B_{\max}$ have units V m$^{-1}$ and T. The remaining SI component dictionary is $F^{0i}=E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, $x^0=ct$ ([[def-em-electromagnetic-tensor]], [[def-em-relativistic-worldlines-frames]]).

[L1] Under [A1]–[A2] and the $C^1$ prescribed-field hypotheses, the published EM result gives $dp/dt=q(\mathbf E+v\times\mathbf B)$ with $p=m\gamma v$ on every $C^2$ worldline; it excludes self-field and radiation reaction ([[pthm-em-relativistic-lorentz-force]]).

[L2] For the constant-mass massive inertial branch, $p=m\gamma v$, $\mathcal E=\gamma mc^2$, $\mathcal E^2=m^2c^4+c^2|p|^2$, and $v=c^2p/\mathcal E$; the current in-run supplier has draft status and its exact statement is used conditionally ([[pthm-rpm-inverse-momentum-and-work]]).

[L3] For $|v|/c\le\delta<1$, the exact pointwise momentum and energy remainder inequalities of [[lem-rpm-low-speed-remainders]] hold.

[F4] Vector-valued differentiation and integration are componentwise; a continuous $\mathbb R^6$-valued function on a compact interval has integrable components, and for a $C^1$ curve $z$ its derivative integrates to $z(t)-z(0)$ ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]], [[thm-continuous-implies-integrable]], [[cor-vector-valued-ftc-and-lipschitz-bound]]). For each integrable $h:[0,t]\to\mathbb R^3$, $\|\int_0^t h(s)\,ds\|_2\le\int_0^t\|h(s)\|_2\,ds$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] If continuous $u,a,b$ on $[0,T]$ satisfy $u,b\ge0$, $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$, and $a$ is nondecreasing, then $u(t)\le a(t)\exp(\int_0^t b(s)\,ds)$ ([[thm-gronwall-integral-inequality]]).

[F2] For $u\ge0$, $h(u)=1-(1+u)^{-1/2}$ satisfies $h(0)=0$ and $h'(u)=\frac12(1+u)^{-3/2}$ by the real-power derivative and chain rule; the mean value theorem applies to $h$ on every $[0,u]$ ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[cor-mean-value-theorem]]).

[F3] In the Euclidean oriented space $\mathbb R^3$, the cross product is the alternating bilinear operation with components $(a_2b_3-a_3b_2,a_3b_1-a_1b_3,a_1b_2-a_2b_1)$ ([[def-cross-product-in-r3]]).

## Proof

**Proof technique:** invert the relativistic mass shell, bound the relativistic-to-Newtonian vector-field difference uniformly, then prove the weighted-norm comparison by blockwise integration and Gronwall.

1.1 The stated future-timelike $C^2$ worldline has four-velocity $U_c=\gamma_c(c,\dot x_c)$ and mechanical momentum $p_c=m\gamma_c\dot x_c$. By [L1], its spatial momentum obeys $\dot p_c=q[\mathbf E(t,x_c)+\dot x_c\times\mathbf B(t,x_c)]$. By [L2], $\mathcal E_c=c\sqrt{m^2c^2+|p_c|^2}$ and $\dot x_c=c^2p_c/\mathcal E_c=p_c/[m\sqrt{1+|p_c|^2/(m^2c^2)}]=V_c(p_c)$. Thus the relativistic worldline coordinates satisfy $\dot z_c=G_c(t,z_c)$, while $z_N$ satisfies the declared Newtonian comparison equation by hypothesis. [given, A1, A2, F1, L1, L2, algebra]

1.2 Put $u=|p|^2/(m^2c^2)\ge0$ and $h(u)=1-(1+u)^{-1/2}$. By [F2], $h(0)=0$ and $h'(s)=\frac12(1+s)^{-3/2}\le\frac12$ for $s\ge0$; if $u>0$, the mean value theorem gives $0\le h(u)\le u/2$, and for $u=0$ the same holds by equality. Hence, for every $(x,p)\in K$, $|V_c(p)-p/m|=(|p|/m)h(u)\le P_{\max}^3/(2m^3c^2)$. Expanding the component definition in [F3] gives $|a\times b|^2=|a|^2|b|^2-(a\cdot b)^2\le|a|^2|b|^2$, so $\|G_c(t,x,p)-G_N(t,x,p)\|_* = |V_c-p/m|/L_*+|q|\,|(V_c-p/m)\times\mathbf B(t,x)|/P_*\le\frac{P_{\max}^3}{2m^3c^2}\left(\frac1{L_*}+\frac{|q|B_{\max}}{P_*}\right)=C_*\epsilon_c$. [given, L2, F2, F3, algebra]

1.3 Since $x_c$ is $C^2$, its speed stays strictly below $c$, and the mass-shell map is smooth, $p_c$ and $z_c$ are $C^1$; $z_N$ is $C^1$ by hypothesis. Let $H(s)=(H_x(s),H_p(s)):=G_c(s,z_c(s))-G_N(s,z_N(s))$, where each block is in $\mathbb R^3$. The fields on the open state domain and the solution curves are continuous, so $H$ has integrable components. By [F4], the vector-valued fundamental theorem gives $$z_c(t)-z_N(t)=z_c(0)-z_N(0)+\int_0^tH(s)\,ds.$$ Applying the Euclidean integral norm inequality of [F4] separately to the two blocks yields $$\Bigl\|\int_0^tH(s)\,ds\Bigr\|_*:=\frac{\bigl|\int_0^tH_x(s)\,ds\bigr|}{L_*}+\frac{\bigl|\int_0^tH_p(s)\,ds\bigr|}{P_*}\le\int_0^t\left(\frac{|H_x(s)|}{L_*}+\frac{|H_p(s)|}{P_*}\right)ds=\int_0^t\|H(s)\|_*\,ds.$$ For $t=0$ the same inequality holds with both sides zero. [given, F4, algebra]

2.1 Since $|V_c(p)|\le |p|/m\le P_{\max}/m$ and $|p|/m\le P_{\max}/m$ on $K$, the definitions of $G_c,G_N$, the cross-product bound proved in step 1.2, and the field suprema give $\|G_c(t,x,p)\|_*,\|G_N(t,x,p)\|_*\le B_*$. This proves the stated uniform field bound; stability will follow from the weighted-norm argument below. [given, step 1.1, step 1.2, algebra]

2.2 Splitting $H(s)$ by adding and subtracting $G_N(s,z_c(s))$, the triangle inequality, step 1.2, and the assumed $L$-Lipschitz bound for $G_N$ on $K$ give $$d(t):=\|z_c(t)-z_N(t)\|_*\le d(0)+C_*\epsilon_c t+L\int_0^t d(s)\,ds.$$ The norm and Lipschitz constant here are exactly the weighted ones in the Statement; the estimate follows from the blockwise inequality of step 1.3, without applying the Euclidean comparison lemma to this norm. [given, step 1.2, step 1.3, algebra]

3.1 Set $a(t)=d(0)+C_*\epsilon_c t$ and $b(t)=L$. These functions are continuous, $a$ is nondecreasing and $b,d\ge0$, so [F5] gives $d(t)\le(d(0)+C_*\epsilon_c t)e^{Lt}$. The initial states agree, hence $d(0)=0$, and $t\le T$ gives $\sup_{0\le t\le T}d(t)\le C_*\epsilon_c T e^{LT}$. Since $\epsilon_c=c_*^2/c^2$ and the other quantities are fixed, this is $O(c^{-2})$ on the specified interval. [given, step 2.2, F5, algebra]

4.1 The inversion formula and $|p_c|\le P_{\max}$ imply $|\dot x_c|=|V_c(p_c)|\le P_{\max}/m$ and hence $|\dot x_c|/c\le P_{\max}/(mc)\le\delta$. Apply [L3] pointwise to the worldline speed $\dot x_c$ to obtain the two stated kinetic remainders. This only adds kinematic estimates; it does not derive a trajectory comparison from them. [given, step 1.1, L2, L3, algebra] ∎

## Remarks

The field and vector-field estimates are in a named inertial chart and use a formal model parameter $c$. Electric and magnetic fields are prescribed and held fixed, not solved self-consistently as $c$ varies. The common-interval solution and compact-containment assumptions are essential: neither bounded field values alone nor the pointwise low-speed estimates establish finite-time trajectory convergence.
