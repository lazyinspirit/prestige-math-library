---
id: pthm-sr-newtonian-p-e-correspondence
kind: physics-theorem
domain: physics
title: 'Specified low-speed momentum-energy correspondence between the relativistic measured quantities and the Newtonian comparison quantities'
status: draft
origin: session
dependency_level: 16
deps: [post-sr-massive-particle-dynamics, def-sr-newtonian-comparison-quantities, def-sr-si-units-and-coordinate-conventions, def-sr-regular-causal-curve-and-worldline, def-sr-observed-energy-momentum-and-kinetic-energy, lem-sr-energy-momentum-observer-identities, thm-sr-proper-time-and-observer-decomposition, lem-sr-four-momentum-in-inertial-frame, lem-sr-uniform-low-speed-expansion-of-observer-quantities, lem-sr-uniform-low-speed-taylor-remainder, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-sr-affine-minkowski-model]
dependency_roles:
  post-sr-massive-particle-dynamics: physical-assumption
  def-sr-newtonian-comparison-quantities: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  lem-sr-uniform-low-speed-expansion-of-observer-quantities: mathematical-premise
  lem-sr-uniform-low-speed-taylor-remainder: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
aliases: []
landmark: false
proof_strategy: direct
physical_scope: 'Flat special-relativity massive classical particles (constant mass m>0, P=mU) with the measured energy, spatial momentum and kinetic energy identified as E_n, q_n, T_n by post-sr-massive-particle-dynamics, in inertial frames and in the bounded low-speed domain |w|^2 <= z_0 c^2 with z_0<1, in the SI conventions. The error bounds are uniform on that domain and depend on z_0; nothing is asserted uniformly as |w| -> c. Excludes massless particles, variable mass, forces, interactions and interaction mechanisms, accelerated observers, gravity, quantum and statistical descriptions, and every empirical claim, measurement value or precision statement.'
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
    - title: 'D. Tong, General Relativity (Cambridge Part III lecture notes, 2019), Section 1.2.2 pp. 14-16 (relativistic free-particle action and the Lorentz factor gamma = (1-|xdot|^2/c^2)^(-1/2)) and Section 1.2.3 pp. 16-19, in particular the Taylor expansion (1.22) on printed p. 17 (-mc^2 + (m/2)|xdot|^2 - m Phi(x) + ... obtained by expanding the square root) (author-hosted copy of the official Cambridge PDF)'
      url: 'https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf'
verification:
  precheck: pass
---

## Statement

Adopt [[post-sr-massive-particle-dynamics]] (massive-particle momentum, the identification of measured quantities and isolated collision balance) and the SI conventions of [[def-sr-si-units-and-coordinate-conventions]]. Let $(A,V,\eta,C^+)$ be the affine Minkowski model, $c>0$, let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with stationary observer $n:=e_0$, spatial Euclidean structure $(S,\delta,|\cdot|)$ and inertial chart $x$ ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]), and let a massive particle have constant mass $m>0$ and four-momentum $P=mU$ with $U$ future timelike, $\eta(U,U)=-c^2$. Let $y$ be a worldline of the particle whose inertial coordinate path is $t\mapsto(ct,r(t))$ and whose coordinate velocity $w(t)=r'(t)\in S$ of [[def-sr-newtonian-comparison-quantities]]\,(b) equals a fixed $w$ at the instant considered; then in this frame $P=m\gamma_w(c,w)$ with $\gamma_w=(1-|w|^2/c^2)^{-1/2}$ ([[lem-sr-four-momentum-in-inertial-frame]]\,(b), [[thm-sr-proper-time-and-observer-decomposition]]\,(e)).

Fix $z_0\in[0,1)$ and suppose $z:=|w|^2/c^2\le z_0$; put $K(z_0):=\tfrac38(1-z_0)^{-5/2}$, and let $N_p(m,w)=mw$ and $N_K(m,w)=\tfrac12m|w|^2$ be the Newtonian comparison quantities of [[def-sr-newtonian-comparison-quantities]]. With $E_n(P)$, $q_n(P)$ and $T_n(P)$ the measured energy, spatial momentum and kinetic energy identified in clause (ii) of the adopted postulate, $m(P)$ the invariant mass of [[def-sr-observed-energy-momentum-and-kinetic-energy]] and $R_E,R_q$ the remainders of [[lem-sr-uniform-low-speed-expansion-of-observer-quantities]]:

(a) [Energy] $E_n(P)=mc^2+N_K(m,w)+R_E$ and $E_n(P)-T_n(P)=mc^2$; $|R_E|\le K(z_0)\,z\,m|w|^2$. So the measured energy of the moving particle exceeds its rest energy by the Newtonian kinetic energy up to the displayed uniform bound of order $m|w|^4/c^2$.

(b) [Kinetic energy] $T_n(P)=N_K(m,w)+R_E$, hence $|T_n(P)-N_K(m,w)|\le 2K(z_0)\,z\,N_K(m,w)$: for $w\ne0$ the relative deviation from the Newtonian kinetic energy is at most $2K(z_0)z$.

(c) [Momentum] $q_n(P)=N_p(m,w)+R_q$, and $|R_q|\le\bigl(\tfrac12+K(z_0)z_0\bigr)z\,|N_p(m,w)|$; for $w\ne0$ the relative deviation from the Newtonian momentum is at most $(\tfrac12+K(z_0)z_0)z$.

(d) [Momentum-to-velocity inversion] $w=q_n(P)/(m\gamma_w)$ exactly, and $|w-q_n(P)/m|=(\gamma_w-1)|w|\le\bigl(\tfrac12+K(z_0)z_0\bigr)z\,|w|$; at $z=0$ one has $w=0$, $q_n(P)=0$, $E_n(P)=mc^2$ and $T_n(P)=0$, and $m(P)=m$ always.

(e) [Scope and uniformity] The constants $K(z_0)$ and $\tfrac12+K(z_0)z_0$ depend on $z_0$ alone, so the estimates hold uniformly over all masses $m>0$, all states, instants and inertial frames with $|w|^2\le z_0c^2$. The statement is a conditional correspondence between the model's adopted measured quantities and the comparison functionals of a named frame: it identifies no framework with another, asserts no convergence of trajectories, forces or interactions and no limit in which the constant $c$ varies, gives no bound uniform in $|w|<c$ (see [[rem-sr-newtonian-bridge-limits-and-failures]]) and makes no empirical claim.

## Facts & Assumptions

**Given:** The affine Minkowski model with a fixed $c>0$ and the SI conventions $x^0=ct$; an inertial frame with stationary observer $n=e_0$, spatial structure $(S,\delta,|\cdot|)$ and chart $x$; a massive particle state $P=mU$ with constant $m>0$, $U$ future timelike and $\eta(U,U)=-c^2$, realized as the momentum of a $C^{1}$ worldline with future timelike tangent ([[def-sr-regular-causal-curve-and-worldline]]) whose coordinate velocity at the instant considered is a fixed $w\in S$; a bound $z_0\in[0,1)$ with $z=|w|^2/c^2\le z_0$; and $K(z_0)=\tfrac38(1-z_0)^{-5/2}$.

[L1] The adopted postulate: $P=mU$ with constant $m>0$ and $\eta(U,U)=-c^2$ (clause (i)); the model identifies the measured energy, spatial momentum, kinetic energy and rest energy of the particle with $E_n(P)$, $q_n(P)$, $T_n(P)=E_n(P)-mc^2$ and $mc^2$ (clause (ii)); units as in [[def-sr-si-units-and-coordinate-conventions]] ([[post-sr-massive-particle-dynamics]]).

[L2] The comparison functionals: for $w\in S$ of the named frame, $N_p(m,w)=mw$ and $N_K(m,w)=\tfrac12m|w|^2$; the coordinate velocity of a chart path $t\mapsto(ct,r(t))$ is $w(t)=r'(t)$ where it exists ([[def-sr-newtonian-comparison-quantities]]).

[L3] The SI conventions fix $x^0=ct$ in every inertial chart and the units metre, kilogram, second, joule and kilogram metre per second for the quantities used here ([[def-sr-si-units-and-coordinate-conventions]]).

[L4] The observer quantities: $E_n(P)=-c\eta(P,n)$, $q_n(P)=h(P)$, $m(P)=\sqrt{-\eta(P,P)}/c$, and $T_n(P)=E_n(P)-mc^2$ after the constant $m>0$ is fixed ([[def-sr-observed-energy-momentum-and-kinetic-energy]]).

[L5] The observer identities: for $P=mU$ with $m>0$ constant, $U$ future timelike with $\eta(U,U)=-c^2$, relative velocity $w$ and Lorentz factor $\gamma$ of [[thm-sr-proper-time-and-observer-decomposition]]\,(d): $E_n(P)=mc^2\gamma$, $T_n(P)=mc^2(\gamma-1)$, $q_n(P)=m\gamma w$ and $m(P)=m$ ([[lem-sr-energy-momentum-observer-identities]]\,(b)).

[L6] The frame's stationary observer and the chart coordinate velocity: for $n=e_0$ the relative velocity of clause (d) is the chart coordinate velocity $w(t)=r'(t)$ of the worldline, with $|w|<c$ and $\gamma_w=(1-|w|^2/c^2)^{-1/2}$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(e)).

[L7] Frame components of the four-momentum: for $P=mU$ with $m>0$ constant the components in the frame are $P=m\gamma_w(c,w)$, that is $E_n(P)=m\gamma_wc^2$ and $q_n(P)=m\gamma_ww$ ([[lem-sr-four-momentum-in-inertial-frame]]\,(b)).

[L8] The uniform low-speed expansion of the observer quantities: with $\gamma=\gamma_w$ and $z=|w|^2/c^2\le z_0$, $E_n(P)=mc^2+\tfrac12m|w|^2+R_E$, $T_n(P)=\tfrac12m|w|^2+R_E$ and $q_n(P)=mw+R_q$ for $R_E=mc^2R(z)$, $R_q=m(\gamma_w-1)w$, with $|R_E|\le K(z_0)zm|w|^2=K(z_0)m|w|^4/c^2$, $\bigl|T_n(P)-\tfrac12m|w|^2\bigr|\le2K(z_0)z\,\tfrac12m|w|^2$ and $|R_q|\le(\tfrac12+K(z_0)z_0)z\,m|w|$; the constants depend only on $z_0$, and at $z=0$ the remainders vanish ([[lem-sr-uniform-low-speed-expansion-of-observer-quantities]]\,(a)-(c)).

[L9] The Taylor remainder: $\gamma_w=1+\tfrac z2+R(z)$ with $|R(z)|\le K(z_0)z^2$ for $0\le z\le z_0$ ([[lem-sr-uniform-low-speed-taylor-remainder]]\,(b)).

[L10] The model and frame structure: $(A,V,\eta,C^+)$ is the oriented time-oriented affine Minkowski model and the frame is an inertial frame with chart $x$ and spatial structure $(S,\delta,|\cdot|)$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]).



## Proof

**Proof technique:** direct.

1.1 Identification of the state's data in the frame. By [L6], for the frame's stationary observer $n=e_0$ the relative velocity of [L5] coincides with the chart coordinate velocity $w(t)=r'(t)$ and $\gamma=\gamma_w=(1-|w|^2/c^2)^{-1/2}$; by the hypothesis of the statement the value at the instant considered is the fixed $w$, so the state $P=mU$ of the postulate has relative velocity $w$ and Lorentz factor $\gamma_w$ in this frame, with $|w|<c$. [given, L6, L10, algebra]

1.2 The comparison quantities. By [L2], $N_p(m,w)=mw$ and $N_K(m,w)=\tfrac12m|w|^2$; the momenta $N_p,q_n$ have unit kilogram metre per second, the energies $N_K,E_n,T_n$ have unit joule, and $m$ has unit kilogram by [L3]. [L2, L3]

2.1 The measured quantities at the state. By [L5] applied with $\gamma=\gamma_w$, $E_n(P)=mc^2\gamma_w$, $T_n(P)=mc^2(\gamma_w-1)$, $q_n(P)=m\gamma_ww$ and $m(P)=m$; by [L7] the frame components are $P=m\gamma_w(c,w)$, i.e. $E_n(P)=m\gamma_wc^2$ and $q_n(P)=m\gamma_ww$, consistently. By [L1], $E_n(P)$, $q_n(P)$ and $T_n(P)$ are the model's measured energy, spatial momentum and kinetic energy; its rest energy is $mc^2$. [step 1.1, L1, L5, L7, algebra]

2.2 The uniform expansion at the state. Since $z=|w|^2/c^2\le z_0$, [L8] gives $$E_n(P)=mc^2+\tfrac12m|w|^2+R_E,\quad T_n(P)=\tfrac12m|w|^2+R_E,\quad q_n(P)=mw+R_q,$$ with $R_E=mc^2R(z)$, $R_q=m(\gamma_w-1)w$ and the bounds $|R_E|\le K(z_0)zm|w|^2$, $\bigl|T_n(P)-\tfrac12m|w|^2\bigr|\le2K(z_0)z\,\tfrac12m|w|^2$ and $|R_q|\le(\tfrac12+K(z_0)z_0)z\,m|w|$; if $z=0$ then $w=0$, $R_E=R_q=0$, $E_n(P)=mc^2$, $q_n(P)=0$ and $T_n(P)=0$. [step 1.1, L8, algebra]

3.1 Clause (a). By steps 1.1 and 2.2, $E_n(P)=mc^2+N_K(m,w)+R_E$ with $|R_E|\le K(z_0)zm|w|^2=K(z_0)m|w|^4/c^2$, and $E_n(P)-T_n(P)=mc^2$ by the definition of $T_n$ in [L4]; this is the displayed energy correspondence and its uniform bound. [step 2.1, step 2.2, step 1.2, L4, algebra]

3.2 Clause (b). By step 2.2, $T_n(P)=N_K(m,w)+R_E$ with $|R_E|\le K(z_0)zm|w|^2=2K(z_0)z\,N_K(m,w)$; for $w\ne0$ the comparison value $N_K(m,w)>0$ and division gives the relative bound $2K(z_0)z$, while at $w=0$ both sides vanish by step 2.2. [step 2.2, step 1.2, algebra]

3.3 Clause (c). By steps 2.2 and 1.2, $q_n(P)=N_p(m,w)+R_q$ with $$|R_q|\le\bigl(\tfrac12+K(z_0)z_0\bigr)z\,m|w|=\bigl(\tfrac12+K(z_0)z_0\bigr)z\,|N_p(m,w)|;$$ for $w\ne0$, $|N_p(m,w)|=m|w|>0$ and division gives the relative bound $(\tfrac12+K(z_0)z_0)z$. [step 2.2, step 1.2, algebra]

3.4 Clause (d). From $q_n(P)=m\gamma_ww$ of step 2.1, $w=q_n(P)/(m\gamma_w)$ exactly, and $w-q_n(P)/m=(1-\gamma_w)w$, so $|w-q_n(P)/m|=(\gamma_w-1)|w|$; by $\gamma_w-1=\tfrac z2+R(z)$ with $|R(z)|\le K(z_0)z^2$ from [L9] and $z\le z_0$, this is at most $(\tfrac12+K(z_0)z_0)z|w|$. At $z=0$ the state is $w=0$, and step 2.2 gives $q_n(P)=0$, $E_n(P)=mc^2$, $T_n(P)=0$, while $m(P)=m$ by step 2.1 always. [step 2.1, step 2.2, L9, algebra]

4.1 Clause (e). Every constant used above is $K(z_0)$ or $\tfrac12+K(z_0)z_0$, functions of $z_0$ alone, while $m>0$, $n$ and the state enter only through their displayed occurrences; hence the estimates hold uniformly over all masses and all states, instants and inertial frames satisfying $|w|^2\le z_0c^2$, as stated in [L8]\,(c). The proof used the postulate only through clauses (i) and (ii), so the conclusion is a conditional correspondence between the model's measured quantities and the comparison functionals of the named frame; it asserts no identification of frameworks, no trajectory or force convergence and no variation of $c$, and no empirical claim. [step 3.1, step 3.2, step 3.3, step 3.4, L1, L8, algebra]

5.1 Conclusion. Steps 3.1 to 3.4 are clauses (a) to (d) with their stated bounds and the $w=0$ case, and step 4.1 is clause (e); all hypotheses were used as stated, and nothing beyond the adopted postulate, the SI conventions and the model's mathematics is assumed. [step 3.1, step 3.2, step 3.3, step 3.4, step 4.1] ∎
