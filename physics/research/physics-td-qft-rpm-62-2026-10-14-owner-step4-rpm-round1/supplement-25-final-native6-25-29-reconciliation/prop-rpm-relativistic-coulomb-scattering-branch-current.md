---
id: prop-rpm-relativistic-coulomb-scattering-branch
kind: proposition
title: "Exact repulsive relativistic Coulomb scattering branch"
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-relativistic-coulomb-phase-system
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-cm-compact-continuation-for-locally-lipschitz-odes
  - def-principal-inverse-tangent
  - lem-tangent-principal-branch-is-bijective
  - def-principal-inverse-sine-and-cosine
  - thm-ftc-first-part
  - thm-derivative-of-an-inverse
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-monotonicity-from-the-derivative
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-and-cosine-derivatives
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-quarter-turn-values-and-shift-formulas
  - thm-of-square-roots
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
  - lem-rpm-sine-over-angle-limit
dependency_roles:
  def-rpm-relativistic-coulomb-phase-system: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  lem-tangent-principal-branch-is-bijective: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-of-square-roots: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  lem-rpm-sine-over-angle-limit: mathematical-premise
physical_scope: "Exact mathematical scattering result for the defined one-body Hamiltonian phase system on a noncolliding repulsive branch. It asserts no electromagnetic derivation, recoil, radiation, measurement, or empirical applicability."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition, §39 and Problem 1"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/Landau_Lifshitz_T2.pdf"
    - title: "Timothy H. Boyer, “Unfamiliar trajectories for a relativistic particle in a Kepler or Coulomb potential,” Am. J. Phys. 72 (2004), arXiv:physics/0405090v1, complete paper"
      url: "https://arxiv.org/html/physics/0405090v1"
verification: {}
---

## Statement

Consider the phase system of [[def-rpm-relativistic-coulomb-phase-system]] with $m,c,\kappa>0$. Let a trajectory have conserved energy $W>mc^2$ and angular-momentum magnitude $J:=|x\times p|>\kappa/c$. Define

$$A:=\frac{W^2-m^2c^4}{c^2}>0,\qquad d:=\frac{W\kappa}{c^2}>0,\qquad C:=J^2-\frac{\kappa^2}{c^2}>0.$$

Then its squared radial momentum is

$$p_r^2=Q(u):=A-2du-Cu^2,\qquad u:=1/r.$$

There is a unique positive simple root

$$u_*:=\frac{\sqrt{d^2+CA}-d}{C},\qquad 0<u_*<\frac{W-mc^2}{\kappa}.$$

Every trajectory through the turning data $r_*=1/u_*$, $p_r=0$, and $|x\times p|=J$ has a unique maximal extension defined for all system times $t\in\mathbb R$, in the extension sense of [[def-rpm-relativistic-coulomb-phase-system]]. This extension has one noncollision periapsis and is asymptotically incoming and outgoing. Its impact parameter, defined as the limiting perpendicular distance of either asymptote from the force center, is

$$b=\frac{J}{\sqrt A}>0.$$

If $\Delta$ is the positive azimuthal change from either asymptote to periapsis, then

$$\Delta=\frac{J}{\sqrt C}\arctan\left(\frac{\sqrt{CA}}{d}\right),\qquad \theta:=\pi-2\Delta\in(0,\pi),$$

where $\theta$ is the angle between the incoming and outgoing asymptotic velocity vectors. This formula is for the repulsive branch $J>\kappa/c$; it does not cover $J\le\kappa/c$.

## Facts & Assumptions

**Given:** The phase system on $D$, fixed $m,c,\kappa>0$, a trajectory with $H=W>mc^2$ and $|J|>\kappa/c$, and the Euclidean norm and cross product of $\mathbb R^3$.

[F1] The system equations are $\dot x=c^2p/\mathcal E(p)$ and $\dot p=\kappa x/r^3$, with $H=\mathcal E(p)+\kappa/r$, $p_r=x\cdot p/r$, and $J=x\times p$ ([[def-rpm-relativistic-coulomb-phase-system]]).

[F2] A smooth vector field has a unique local solution through each initial state, and a solution staying in a compact subset of its open domain near a finite endpoint extends past that endpoint ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F3] The principal inverse tangent is strictly increasing and continuous, and the principal inverse sine is increasing with range $[-\pi/2,\pi/2]$ and derivative $1/\sqrt{1-y^2}$ on $(-1,1)$; sine and cosine have derivatives $\cos$ and $-\sin$, with $\sin0=0$, $\cos0=1$, $\sin x\ge0$ on $[0,\pi/2]$, $\sin^2x+\cos^2x=1$, and the quarter-turn shift identities ([[def-principal-inverse-tangent]], [[lem-tangent-principal-branch-is-bijective]], [[def-principal-inverse-sine-and-cosine]], [[thm-derivative-of-an-inverse]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-derivatives]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-of-square-roots]]).

[F4] The fundamental theorem of calculus, chain rule, and derivative algebra justify evaluating the displayed antiderivative and making the smooth substitution in step 4.1 ([[thm-ftc-first-part]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F5] The mean value theorem applies to a continuous function on a closed interval that is differentiable on its interior; differentiability implies continuity, and a differentiable function with nonpositive derivative on an interval is nonincreasing ([[cor-mean-value-theorem]], [[cor-differentiable-implies-continuous]], [[thm-monotonicity-from-the-derivative]]).

[F6] $\lim_{z\to0}\sin z/z=1$ ([[lem-rpm-sine-over-angle-limit]]).

## Proof

**Proof technique:** conserve the Hamiltonian and angular momentum, factor the radial polynomial, construct the global branch by ODE continuation, and integrate the exact polar equation.


1.1 Along any solution of [F1], $\dot H=\nabla_xH\cdot\dot x+\nabla_pH\cdot\dot p=\nabla_xH\cdot\nabla_pH-\nabla_pH\cdot\nabla_xH=0,$ and $\dot J=\dot x\times p+x\times\dot p=0$ because $\dot x$ is parallel to $p$ and $\dot p$ is parallel to $x$. Thus $W$ and $J$ are constant. With $u=1/r$, the energy relation gives $\mathcal E=W-\kappa u$, so $c^2|p|^2=(W-\kappa u)^2-m^2c^4,$ and $|p|^2=p_r^2+J^2/r^2$. Rearranging yields $p_r^2=A-2du-Cu^2=Q(u)$. [given, F1, algebra]

2.1 Since $Q(0)=A>0$ and $Q((W-mc^2)/\kappa)=-J^2((W-mc^2)/\kappa)^2<0$, continuity gives a positive root below $(W-mc^2)/\kappa$. The other root is negative because the product of the roots is $-A/C<0$, so the positive root is unique. The quadratic formula gives the displayed $u_*$; $Q'(u_*)=-2(d+Cu_*)<0$, hence the root is simple. At this root $\mathcal E=W-\kappa u_*>mc^2$, so the momentum is real and the point lies in $D$. [step 1.1, given, algebra]

3.1 At any turning state choose orthonormal axes $e_1=x/r_*$ and $e_2=p/|p|$, and translate its time to $0$; then $x=r_*e_1$ and $p=(J/r_*)e_2$. The root equation in 2.1 gives $H(x,p)=W$, and the smooth field in [F1] satisfies [F2], giving a local solution. By [F2], all solutions through this full initial state agree on their overlapping intervals; their union is a solution on the union interval, is locally a solution near every interior point, and is the unique maximal extension. Its interval is open, since local existence at an included finite endpoint would extend it. Every trajectory through the state is a restriction of this extension by uniqueness. Along it, direct differentiation gives $\dot p_r=c^2J^2/(\mathcal E r^3)+\kappa/r^2>0$ everywhere, so [F5] makes $p_r$ strictly increasing with its unique zero at $0$; consequently $r$ decreases before the turn and increases after it. On every allowed state $0<u\le u_*<(W-mc^2)/\kappa$, hence $r\ge r_*$ and $mc^2<\mathcal E=W-\kappa u<W$, which gives $|p|<\sqrt A$. Also $|\dot x|<c$, so near any finite interval endpoint $x$ remains bounded and $|x|\ge r_*$; together with the momentum bound this gives compact containment in $D$. Applying [F2] at a finite right endpoint, or to the reversed-time field at a finite left endpoint, would properly extend the maximal solution, a contradiction. Its interval is therefore $\mathbb R$. Each monotone radial tail must be unbounded: if it had a finite limit greater than $r_*$, then $Q(1/r)$ and $\mathcal E$ would give $|\dot r|$ a positive lower bound, contradicting that finite limit. Thus $r\to\infty$ on both tails and $\dot r=c^2p_r/\mathcal E\to\pm c^2\sqrt A/W$, so $r$ grows linearly there. Then $|\dot p|=\kappa/r^2$ is integrable, and $p$ converges to incoming and outgoing limits of magnitude $\sqrt A$. Since the tangential momentum has magnitude $J/r\to0$, the limiting momenta point along the limiting radial directions, giving the two asymptotic velocity directions. [step 1.1, step 2.1, F1, F2, F5, algebra]

3.2 Orient the orbital plane so its polar angle increases with $J=|x\times p|$. Then $\dot\varphi=c^2J/(\mathcal E r^2)$ and $\dot r=c^2p_r/\mathcal E$, so $|d\varphi/du|=J/\sqrt{Q(u)}$ and the half-angle is $\Delta=\int_0^{u_*}J\,du/\sqrt{A-2du-Cu^2}$. Completing the square gives $Q=(d^2+CA)/C-C(u+d/C)^2$. With $y=(Cu+d)/\sqrt{d^2+CA}$, the root relation in 2.1 makes the endpoints $d/\sqrt{d^2+CA}$ and $1$, and the integral becomes $(J/\sqrt C)\int dy/\sqrt{1-y^2}=(J/\sqrt C)[\arcsin y]_{d/\sqrt{d^2+CA}}^1$. Put $\alpha=\arctan(\sqrt{CA}/d)\in(0,\pi/2)$. Since $\tan\alpha=\sqrt{CA}/d$, the Pythagorean identity and positivity of sine and cosine in [F3] give $\cos\alpha=d/\sqrt{d^2+CA}$; the quarter-turn identity then gives $\arcsin(d/\sqrt{d^2+CA})=\pi/2-\alpha$ because both angles lie in $[0,\pi/2]$. The evaluated integral is therefore $\Delta=(J/\sqrt C)\arctan(\sqrt{CA}/d)$. [step 1.1, step 2.1, F1, F3, F4, algebra]

4.1 Put $\alpha=\kappa/(cJ)\in(0,1)$, $q=\sqrt{1-\alpha^2}\in(0,1)$, and $\beta=\sqrt{1-m^2c^4/W^2}\in(0,1)$. If $a=\arcsin q$, then [F3] gives $a\in(0,\pi/2)$, $\sin a=q$, and $\cos a=\sqrt{1-q^2}>0$; hence $\tan a=q/\sqrt{1-q^2}$ and the principal inverse identity gives $a=\arctan(q/\sqrt{1-q^2})$. The formula from 3.2 becomes $\Delta=q^{-1}\arctan(\beta q/\sqrt{1-q^2})$; since $0<\beta<1$ and $\arctan$ is strictly increasing, $0<\Delta<\arcsin(q)/q$. [step 3.2, F3, algebra]

5.1 Define $g(x)=\sin x-2x/\pi$ on $[0,\pi/2]$. By [F3], $g(0)=g(\pi/2)=0$ and $g''(x)=-\sin x\le0$. Since $g'$ is differentiable and $g''\le0$, [F5] makes $g'$ nonincreasing. For any $0<x<\pi/2$, [F5] applied to $g$ on $[0,x]$ and $[x,\pi/2]$ gives $g(x)/x=g'(\xi_1)$ and $-g(x)/(\pi/2-x)=g'(\xi_2)$ for some $0<\xi_1<x<\xi_2<\pi/2$. Thus $g(x)/x\ge-g(x)/(\pi/2-x)$; multiplying by the positive $x(\pi/2-x)$ yields $g(x)\ge0$. Taking $x=\arcsin q$ gives $\arcsin q\le\pi q/2$, hence step 4.1 gives $\Delta<\pi/2$. [step 4.1, F3, F5, algebra]

6.1 On either asymptotic tail, $|d\varphi/dr|=J/(r^2\sqrt{Q(1/r)})\sim J/(\sqrt A r^2)$. For every $0<\epsilon<1$, the definition of this limit bounds the integrand between $(1-\epsilon)J/(\sqrt A r^2)$ and $(1+\epsilon)J/(\sqrt A r^2)$ for all sufficiently large radii; integration from $r$ to infinity gives the angular gap $\delta(r)\sim J/(\sqrt A r)$. Step 3.1's asymptotic momentum and [F6] now give $r\sin\delta(r)\to J/\sqrt A$, the limiting perpendicular distance of each asymptotic line from the force center; this is $b$. The incoming momentum points opposite its limiting radial direction and the outgoing momentum along its own, so their angular separation is $\theta=\pi-2\Delta\in(0,\pi)$ by step 5.1. [step 3.1, step 4.1, step 5.1, F6, algebra]

7.1 The unique noncollision turning branch, impact parameter and exact deflection angle follow from steps 1.1–6.1 under the stated hypotheses $W>mc^2$ and $J>\kappa/c$. This proves the selected $C>0$ branch, without asserting that $J>\kappa/c$ is necessary for a positive turning root. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 6.1, given] ∎
## Remarks

- The potential is repulsive because $\kappa>0$; the formula is not an attractive Coulomb capture result.
- The exact angular scattering formula does not provide a closed time-parametrized orbit. A two-body treatment, recoil, radiation reaction, and finite-source effects are outside this phase system.
