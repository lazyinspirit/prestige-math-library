---
id: pthm-nrqm-interference-continuity-and-local-probability-balance
aliases: [nrqm-interference-continuity-and-local-probability-balance]
kind: physics-theorem
domain: physics
title: "Continuity equation and local balance for the massive-model position density"
status: published
origin: session
dependency_level: 9
deps: [def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-autonomous-dynamics-framework-evolution, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, def-nrqm-framework-quantities-and-units, def-laplacian-of-a-c2-function, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-derivatives, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-differentiation-under-the-integral-sign, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, cor-mean-value-theorem, cor-differentiable-implies-continuous, thm-heine-borel-rn, thm-monotone-convergence-for-the-integral, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-laplacian-of-a-c2-function: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The local squared-amplitude balance of the massive spin-s model in its smooth solution regime: for a componentwise C1-in-time, C2-in-space function satisfying the displayed local Schroedinger equation almost everywhere with the real bounded measurable P5 potential on an open spatial region, its squared-amplitude density and current satisfy the pointwise continuity equation and integrated balance over bounded C1 regions. On an open time interval, its finite total squared-amplitude integral is conserved under explicit domination and surface-flux hypotheses; if normalized at one time, it remains a position probability density. Separately, the P4 unitary flow preserves the norm of every state and the P2 position probability of every unit preparation has total mass one. The statement is conditional on P1, P2, P4, P5 and P6 and the cited published mathematics. It does not assert that the flow of an arbitrary L2 initial vector has a C1-in-time, C2-in-space representative, identify a screen record rate with surface flux, or record an empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2, printed pages 9-13 (PDF pages 12-16): the Schroedinger equation and conservation of total probability; Section 1.3 printed pages 14-18: the probability current"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3 printed pages 32-33 (PDF pages 40-41): the probability current, the continuity equation and the surface-flux balance"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5 with its internal-factor postulate P6,
read through [[def-nrqm-kinematics-framework-massive-spin-s-model]] and
[[def-nrqm-autonomous-dynamics-framework-evolution]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Assume Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $V_0\in L^\infty(\mathbb R^3;\mathbb R)$ be the
real bounded measurable P5 potential and choose a bounded real measurable
representative $V:\mathbb R^3\to\mathbb R$; on $\Omega\subseteq\mathbb R^3$
use its restriction. Fix the P5 constants $\hbar>0$ and $m>0$, a spin label
$s$ with $r=2s+1$, a nonempty
open spatial region $\Omega$, and a nonempty open time interval
$I\subseteq\mathbb R$. Let $\psi:\Omega\times I\to\mathbb C^r$ have
components $\psi_l$, $\partial_t\psi_l$, $\partial_j\psi_l$ and
$\partial_k\partial_j\psi_l$ continuous on $\Omega\times I$ for all
$j,k\in\{1,2,3\}$, and suppose the **model equation** holds for Lebesgue
almost every $(x,t)\in\Omega\times I$:
$$i\hbar\,\partial_t\psi_l(x,t)=-\frac{\hbar^2}{2m}\Delta\psi_l(x,t)+V(x)\psi_l(x,t)\qquad(l=1,\dots,r).$$
The displayed equation is the local differential expression assigned by
P5/P4; it is a hypothesis here, and $\psi$ is not required to be a global P4
domain vector. P5 assigns $H_{\mathrm{op}}=-\hbar^2\Delta/(2m)+V(Q)$ on the
componentwise $W^{2,2}(\mathbb R^3;\mathbb C^r)$ domain, and P4 asserts the
norm-differentiable equation for vectors in that domain. Existence of a smooth
representative for such a global solution is a separate regularity hypothesis
([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]
clause (iv), [[post-nrqm-framework-autonomous-dynamics]] clause (iii)).

Define the **squared-amplitude density** and its associated **current** by
$$n(x,t):=\sum_{l=1}^r|\psi_l(x,t)|^2=\|\psi(x,t)\|_{\mathbb C^r}^2,\qquad j(x,t):=\frac{\hbar}{m}\sum_{l=1}^r\operatorname{Im}(\overline{\psi_l(x,t)}\,\nabla\psi_l(x,t))=-\frac{\hbar}{m}\operatorname{Im}\langle\psi(x,t),\nabla\psi(x,t)\rangle_{\mathbb C^r}.$$
For $\Omega=\mathbb R^3$, when $\psi(\cdot,t)$ is a unit vector of $H_s$,
$n(\cdot,t)$ is the model's position probability density. Under the local
hypotheses stated here, no global normalization or $H_s$ membership is assumed;
$n$ is the squared-amplitude density and the same balance equations apply.
Accordingly, $j$ is the probability current for a normalized state and the
corresponding squared-amplitude current otherwise.
The minus sign in the pairing expression follows from the convention that the
$L^2$ pairing is linear in its first argument. For each component put
$j_l=(\hbar/m)\operatorname{Im}(\overline{\psi_l}\nabla\psi_l)$.
Then:

(a) *Pointwise continuity.* For every $(x,t)\in\Omega\times I$,
$$\partial_{t}n(x,t)+\operatorname{div}j(x,t)=0 .$$

(b) *Integrated balance.* If $D\subseteq\Omega$ is a bounded open set with
$C^{1}$ boundary and $\overline D\subseteq\Omega$
([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]), then
$t\mapsto\int_Dn(x,t)dx$ is differentiable on $I$ with
$$\frac{d}{dt}\int_{D}n(x,t)\,dx=-\int_{\partial D}j(x,t)\cdot\nu(x)\,dS ,$$
$\nu$ the outward unit normal.

(c) *Global conservation under domination.* If $\Omega=\mathbb R^{3}$, if for
each $l$ there is a nonnegative measurable $g_l\in L^{1}(\mathbb R^{3})$ with
$|\psi_{l}(x,t)|^{2}\le g_{l}(x)$ for almost every $x$ and every $t\in I$, and
if
$$\lim_{R\to\infty}\sup_{t\in I}\int_{\{|x|=R\}}|j_l(x,t)|\,dS=0$$
for each $l$, then $t\mapsto\int_{\mathbb R^3}n(x,t)dx$ is finite and
constant on $I$. In particular, if this integral is $1$ at one time, it is
$1$ throughout $I$ and $n(\cdot,t)$ is a position probability density at every
time.

(d) *Flow conservation.* For the model's assigned unitary flow
$U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ on the model's state space and every
$\psi_{0}\in H_{s}$, one has $\|U(t)\psi_{0}\|=\|\psi_{0}\|$ for every
$t\in\mathbb R$; consequently the model's position probability of a unit
preparation integrates to one at every time, without the regularity hypotheses
of (a)-(c), because P4 assigns a unitary group
([[post-nrqm-framework-autonomous-dynamics]],
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)).

(e) *Units, reading and scope.* In the SI conventions of
[[def-nrqm-framework-quantities-and-units]] the position wave function has
unit $\mathrm m^{-3/2}$, the density $n$ has unit
$\mathrm m^{-3}$ and the current $j$ has unit $\mathrm m^{-2}\mathrm s^{-1}$;
the display of (a) is the local balance of the model's squared-amplitude density
in its smooth regime, and (b) reads the rate of change of its integral over a
region as minus the outward current flux across its boundary. When $\psi$ is a
normalized full-space state, these are the position probability density and
probability flux, respectively. The
statement does not assert that the flow of an arbitrary $L^{2}$ initial vector
has a representative obeying the regularity hypotheses of (a)-(c), does not
identify a recorded screen rate or any detection law with the surface flux (the
detection model of this page is the declared effect and bin model), and records
no empirical result.

## Facts & Assumptions

**Given:** P1, P2, P4, P5 and P6 as cited; Countable Choice and the Axiom of Choice; $\hbar>0$, $m>0$, $r=2s+1$, open $\Omega\subseteq\mathbb R^3$, open time interval $I$, the real bounded measurable P5 potential $V$, a componentwise $C^1$-in-time and $C^2$-in-space solution of the equation almost everywhere, the density $n$ and current $j$, and, in (d), $\psi_0\in H_s$ and P4's flow $U(t)$.

[F1] **P4/P5 equation and its regularity premise.** P5 assigns the componentwise Hamiltonian $H_{\mathrm{op}}=-\frac{\hbar^2}{2m}\Delta+V(Q)$ on the $W^{2,2}$ domain for bounded real measurable $V$; P4 asserts the equation in the norm-differentiable sense for domain vectors. The Statement separately assumes a function with the displayed classical derivatives and local equation almost everywhere; this local PDE premise does not assert that every such function is a global P4 domain vector. The extra regularity is not inferred for arbitrary $L^2$ initial data ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv), [[post-nrqm-framework-autonomous-dynamics]] clause (iii)).

[F2] **Componentwise calculus.** For a scalar $C^1$-in-time, $C^2$-in-space
component $u$, product differentiation gives
$\partial_t|u|^2=2\operatorname{Re}(\overline u\partial_tu)$ and
$$\operatorname{div}\left(\frac{\hbar}{m}\operatorname{Im}(\overline u\nabla u)\right)=\frac{\hbar}{m}\operatorname{Im}(\nabla\overline u\cdot\nabla u+\overline u\Delta u)=\frac{\hbar}{m}\operatorname{Im}(\overline u\Delta u),$$
because $\nabla\overline u\cdot\nabla u=\sum_j|\partial_ju|^2$ is real
([[thm-algebra-of-derivatives]], [[def-laplacian-of-a-c2-function]],
[[def-jacobian-matrix-and-gradient]],
[[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F3] **Divergence theorem.** For a bounded $C^1$ domain $D$ and a $C^1$ vector field $F$ on $\overline D$, $\int_D\operatorname{div}F\,dx=\int_{\partial D}F\cdot\nu\,dS$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F4] **Differentiation under the integral.** On each compact time interval inside $I$, continuity of $\partial_t n$ on the compact set $\overline D\times J$ gives an integrable constant majorant on bounded $D$; the differentiation-under-the-integral theorem then yields $\frac{d}{dt}\int_Dn=\int_D\partial_tn$ ([[thm-differentiation-under-the-integral-sign]]).

[F5] **Limits and interval connectedness.** Monotone convergence gives $\int_{B_R}n\to\int_{\mathbb R^3}n$ as $R\to\infty$ for nonnegative $n$, and the mean value theorem bounds a change by the interval length times the supremum of the derivative ([[thm-monotone-convergence-for-the-integral]], [[cor-mean-value-theorem]]). Differentiability implies continuity ([[cor-differentiable-implies-continuous]]). The hypothesis that $I$ is an interval ensures every pair $s<t$ in $I$ is joined by a compact interval in $I$.

[F6] **P4 flow.** The assigned $U(t)$ is unitary for each real $t$ by P4 and the evolution definition, so it preserves the Hilbert norm ([[post-nrqm-framework-autonomous-dynamics]], [[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)).

[F7] **Units.** The position wave function has unit $\mathrm m^{-3/2}$, so $n$ has unit $\mathrm m^{-3}$; $\hbar/m$ has unit $\mathrm m^2\mathrm s^{-1}$, and hence $j$ has unit $\mathrm m^{-2}\mathrm s^{-1}$ ([[def-nrqm-framework-quantities-and-units]]).

## Proof

**Proof technique:** direct; derive the continuity identity componentwise from the P4/P5 equation, integrate it over bounded regions and expanding balls under the stated regularity and flux assumptions, and read norm conservation directly from P4 unitarity.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Pointwise continuity] For each $l$, the model equation holds almost everywhere and gives [given, F1, F2, algebra]
$$\partial_t\psi_l=\frac{i\hbar}{2m}\Delta\psi_l-\frac{i}{\hbar}V\psi_l.$$
By [F2],
$$\partial_t|\psi_l|^2=2\operatorname{Re}(\overline{\psi_l}\partial_t\psi_l)=-\frac{\hbar}{m}\operatorname{Im}(\overline{\psi_l}\Delta\psi_l),$$
because $V|\psi_l|^2$ is real almost everywhere. The product calculation in
[F2] also gives
$$\operatorname{div}j_l=\frac{\hbar}{m}\operatorname{Im}(\overline{\psi_l}\Delta\psi_l),$$
so $\partial_t|\psi_l|^2+\operatorname{div}j_l=0$ almost everywhere. This
left side is continuous on $\Omega\times I$ by the assumed regularity; if it
were nonzero at a point, continuity would make it nonzero on an open ball of
positive Lebesgue measure. It therefore vanishes everywhere. Summing the
finite number of component identities proves (a) and gives
$\partial_tn=-\operatorname{div}j$. [given, F1, F2, algebra]

1.2 [Flow conservation] By [F6], $U(t)$ is unitary for every $t$, hence [given, F6, algebra]
$\|U(t)\psi_0\|=\|\psi_0\|$. For a unit vector the P2 position law therefore has total mass $\|U(t)\psi_0\|^2=1$ at every time. This proves (d). [given, F6, algebra]

2.1 [Integrated balance] Fix $t_0\in I$ and choose an open interval [given, step 1.1, F3, F4]
$J_0\subset I$ containing $t_0$ whose closure $J$ is a compact subset of $I$. Since $\overline D\times J$ is compact and $\partial_tn$ is continuous, it is bounded there; the constant bound on bounded $D$ is an integrable majorant. Applying [F4] on $J_0$ gives $\frac{d}{dt}\int_Dn=\int_D\partial_tn$ near $t_0$. By step 1.1 and [F3], this is $-\int_D\operatorname{div}j=-\int_{\partial D}j\cdot\nu\,dS$. Since $t_0$ was arbitrary, (b) holds on $I$. [given, step 1.1, F3, F4]

3.1 [Global conservation] Assume the hypotheses of (c), and fix $s<t$ in [given, step 2.1, F5, algebra]
$I$. Since $I$ is an interval, $[s,t]\subset I$. For $R>0$ let
$B_R=\{x:|x|<R\}$ and $F_R(\tau)=\int_{B_R}n(x,\tau)dx$. By (b),
$$|F_R'(\tau)|=\left|\int_{\partial B_R}j\cdot\nu\,dS\right|\le\sum_{l=1}^r\int_{\partial B_R}|j_l|\,dS.$$
The mean value theorem in [F5] gives
$$|F_R(t)-F_R(s)|\le(t-s)\sum_{l=1}^r\sup_{\tau\in I}\int_{\partial B_R}|j_l(x,\tau)|dS,$$
whose right side tends to zero as $R\to\infty$. For each $\tau\in\{s,t\}$,
the balls increase to $\mathbb R^3$, so [F5] yields
$F_R(\tau)\to\int_{\mathbb R^3}n(x,\tau)dx$. The domination hypothesis makes
both limits finite. Letting $R\to\infty$ proves equality of the total
squared-amplitude integrals at $s$ and $t$. Since $s<t$ were arbitrary in $I$,
this integral is constant on $I$, proving (c). [given, step 2.1, F5, algebra]

4.1 [Conclusion and units] Steps 1.1, 2.1, 1.2 and 3.1 establish (a)-(d). [step 1.1, step 2.1, step 1.2, step 3.1, F7, algebra]
The units in (e) follow from [F7]; its remaining sentences state the scope, and no detection law is identified with the flux. [step 1.1, step 2.1, step 1.2, step 3.1, F7, algebra] ∎

## Remarks

- **The smooth regime is an added hypothesis.** The theorem concerns a componentwise $C^{1}$-in-time, $C^{2}$-in-space solution of the equation almost everywhere for the bounded measurable P5 potential. The model's assigned flow preserves every state norm by P4, but existence of a representative with the stated regularity is not derived here.
- **Normalization controls the probability reading.** The local equation and its global conservation conclusion concern the squared-amplitude density. Under the hypotheses of (c), normalization at one time makes it a probability density throughout the interval; (d) gives this conclusion directly for the unitary flow of a unit preparation.
- **The current is not a detection rate.** The current $j$ describes the local balance of the model's squared-amplitude density (or probability density when normalized); it is not by itself the recorded rate of a detector. The pair's recorded-outcome model assigns probabilities through the declared effects of the recorded detector.
