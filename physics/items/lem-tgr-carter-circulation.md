---
id: lem-tgr-carter-circulation
kind: lemma
title: "Enthalpy vorticity and restricted material circulation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-tgr-perfect-fluid-projection
  - def-tgr-local-fluid-state
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
  - lem-tdmath-local-contraction-flow
  - lem-tdmath-variational-flow-and-commutation
dependency_roles:
  lem-tgr-perfect-fluid-projection: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-tdmath-local-contraction-flow: mathematical-premise
  lem-tdmath-variational-flow-and-commutation: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 20–24, §§6.1–6.3: Carter–Lichnerowicz identity, entropy per baryon, and isentropic reduction; PDF pp. 33–35, §7.5, equations (7.36)–(7.43): the integrated relativistic Kelvin circulation theorem."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 7–8, §3: relativistic stress and frame conventions; circulation is derived locally here."
---

## Statement

Use the state, signature, connection, and perfect-fluid data of
[[def-tgr-local-fluid-state]] and [[lem-tgr-perfect-fluid-projection]], with
$f=0$, $n>0$, and $T>0$. On their common open domain $O$, assume both
isolated balance equations

$$\nabla_aT^{ab}=0,\qquad \nabla_aJ^a=0,\qquad T^{ab}=\epsilon u^au^b+p\Delta^{ab},\qquad J^a=nu^a,$$

where $\Delta^{ab}=g^{ab}+u^au^b$. Put $v=1/n$, $H=(\epsilon+p)/n=e+pv$, and let
$c>0$ be the fixed speed-of-light normalization in the convention $x^0=ct$.
For the momentum one-form $P=(H/c)u^\flat$, consider a smooth closed curve
$\gamma_0:[0,1]\to O$ with equal endpoint values and a local flow
$\Phi_\lambda$ of $u$ in $O$ defined on a neighborhood of its compact image. Write
$\gamma_\lambda=\Phi_\lambda\circ\gamma_0$ and
$\mathcal C(\lambda)=\int_{\gamma_\lambda}P$. Then

$$\iota_u d(Hu^\flat)=T\,d\sigma_p,\qquad \frac{d\mathcal C}{d\lambda}=\frac1c\int_{\gamma_\lambda}T\,d\sigma_p.$$

Consequently, circulation is conserved if $\sigma_p$ is constant on the
region swept out by the loop. The local identity does not assert circulation
conservation merely from $D\sigma_p=0$, nor does it assume a global flow,
complete spacetime, or shock solution.

## Facts & Assumptions

**Given:** A nonempty open set $O$ in a smooth time-oriented Lorentzian
four-manifold $(M,g,N)$ of signature $(-,+,+,+)$, a smooth future unit field
$u$ on $O$, a $C^2$ state map into a nonempty open material-state domain, an
isolated perfect-fluid stress and particle balances
$\nabla_aT^{ab}=0$ and $\nabla_a(nu^a)=0$, a compact closed curve in $O$, and
$c>0$.

[A1] The geometric and tensor-bundle constructions use only Countable Choice
$\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[def-tgr-local-fluid-state]] (current batch-53 draft): on a nonempty open
set $O$, the observer field is smooth and future unit timelike; a local state
has a nonempty open domain $X\subset(0,\infty)\times\mathbb R$, a specified
$e\in C^2(X)$, and a $C^2$ state map $(v,\sigma_p):O\to X$. It defines
$n=v^{-1}$, $s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$,
$p=-e_v$, $H=e+pv$, $h=\epsilon+p=nH$, and $\mu=H-T\sigma_p$. The SI
convention has signature $(-,+,+,+)$ and $x^0=ct$; $c$ has units
$\mathrm{m\,s^{-1}}$, $u$ is dimensionless, $H$ has units
$\mathrm{J\,marker^{-1}}$, and the components of $(H/c)u^\flat$ have units
$\mathrm{kg\,m\,s^{-1}\,marker^{-1}}$. The circulation $\mathcal C$ has units
$\mathrm{kg\,m^2\,s^{-1}\,marker^{-1}}$. Here $H$ is enthalpy per marker and
$h$ is an energy density.

[F2] [[lem-tgr-perfect-fluid-projection]] (current batch-55 draft): for smooth
state fields, perfect stress and particle current, $\nabla_aT^{ab}=f^b$ and
$\nabla_aJ^a=0$ are equivalent to the stated parallel/spatial stress balances
and $Dn+n\theta=0$. With both balances, it states
$T\nabla_a(su^a)=-u_bf^b$ and $nT D\sigma_p=-u_bf^b$. Here
$D=u^a\nabla_a$, $\theta=\nabla_a u^a$, $a^b=u^a\nabla_a u^b$, and
$(\Delta\alpha)_b=\alpha_b+u_bu^a\alpha_a$ for a covector $\alpha$.
The supplier's smooth-state hypothesis is stronger than [F1]; step 1.2
proves the needed isolated identities directly at [F1]'s regularity.

[F3] [[def-gr-smooth-lorentzian-objects]]: the metric is smooth, nondegenerate,
time-oriented, and has signature $(-,+,+,+)$.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla g=0$,
the connection is torsion-free, and it obeys the tensor product rule.

[F5] [[lem-tdmath-local-contraction-flow]] supplies unique local flows for
$C^1$ coordinate vector fields, and
[[lem-tdmath-variational-flow-and-commutation]] supplies their joint $C^2$
dependence when the field is $C^2$. Both are published mathematical items; the
coordinate hypotheses are checked in the proof.

[A2] The given closed curve is smooth, $\gamma_0(0)=\gamma_0(1)$, and its image
is compact. The local flow is parameterized by $\partial_\lambda\Phi_\lambda=u$.
For a one-form $\alpha$, $d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y])$;
$\iota_u\omega=\omega(u,\cdot)$ and $u^\flat=g(u,\cdot)$.

## Proof

1.1 In each chart meeting $\gamma_0([0,1])$, the coordinate components of the
smooth field $u$ are $C^2$. The local-flow suppliers [F5] therefore give a
jointly $C^2$ flow on a neighborhood of each point of the curve. Compactness of
the curve image gives a finite subcover; taking the minimum of the finitely many
positive flow times gives a common interval about $\lambda=0$. Coordinate
changes carry solutions to solutions, and local uniqueness makes the chartwise
flows agree on overlaps. Thus $\gamma_\lambda$ is a $C^2$ closed-curve family
on a common local interval. [A1, A2, F3, F5, construct]

1.2 By [F1] and the chain rule, $n,s,\epsilon$ are $C^2$, while
$p,T,H$ are $C^1$; hence the stress and $P$ are $C^1$ and $J$ is $C^2$.
For these tensors use [F4]'s coordinate derivative formula: differentiate
the coefficients and add one Christoffel term for each upper index and
subtract one for each lower index. It defines an intrinsic derivative also
for $C^1$ coefficients, since differentiating their tensor transformation
law uses only the first-order chain rule and the same cancellation of
derivatives of the smooth coordinate changes. The product and contraction
rules follow from the ordinary product rule, and $\nabla g=0$ remains valid.
Thus all the following derivatives exist classically. From [F1],
$de=-p\,dv+T\,d\sigma_p$, so $dH=T\,d\sigma_p+v\,dp$ and, using
$dv=-n^{-2}dn$, $d\epsilon=H\,dn+nT\,d\sigma_p$.
Differentiating $g(u,u)=-1$ gives $u_ba^b=0$ and
$\nabla_a\Delta^{ab}=\theta u^b+a^b$. The product rule now gives
$$0=\nabla_aT^{ab}=(D\epsilon+h\theta)u^b+ha^b+\Delta^{ab}\nabla_a p,\qquad 0=\nabla_aJ^a=Dn+n\theta.$$
Contracting the stress equation with $u_b$ gives $D\epsilon+h\theta=0$;
applying $\Delta^c{}_b=\delta^c{}_b+u^cu_b$ gives
$ha^c+\Delta^{ca}\nabla_a p=0$. Since $h=nH$, the differential identity
for $\epsilon$ gives
$0=D\epsilon+h\theta=H(Dn+n\theta)+nT D\sigma_p=nT D\sigma_p$.
Positivity of $n,T$ yields $D\sigma_p=0$; lowering the projected stress
equation and dividing by $n$ yields $H a^\flat+v\Delta\,dp=0$.
No division by $H$ is used. [given, F1, F2, F3, F4, algebra]

2.1 Torsion freedom and the product rule yield, in any chart,
$$\bigl(\iota_u d(Hu^\flat)\bigr)_b=u^a\nabla_a(Hu_b)-u^a\nabla_b(Hu_a)=(DH)u_b+Ha_b+\nabla_bH=Ha_b+\Delta_b{}^a\nabla_aH.$$
Here $u^a\nabla_bu_a=\tfrac12\nabla_b(u^au_a)=0$, and the last equality is
the definition of the spatial covector projection. Substituting the expression
for $dH$ from step 1.2 and using $\Delta\,d\sigma_p=d\sigma_p$ from
$D\sigma_p=0$ gives
$\iota_u d(Hu^\flat)=H a^\flat+T d\sigma_p+v\Delta\,dp=T d\sigma_p$.
[step 1.2, F3, F4, algebra]

3.1 Subdivide $[0,1]$ into finitely many closed subintervals whose curve images
lie in coordinate charts; compactness gives such a subdivision, and endpoint
terms will telescope. On each chart subarc put
$F(\lambda,s)=P_a(\gamma_\lambda(s))\partial_s\gamma_\lambda^a(s)$.
It is $C^1$ on each compact parameter rectangle. The one-variable fundamental
theorem of calculus gives
$[F(\lambda+h,s)-F(\lambda,s)]/h
=h^{-1}\int_\lambda^{\lambda+h}\partial_rF(r,s)\,dr$; uniform continuity of
$\partial_\lambda F$ on the compact rectangle makes this quotient converge
uniformly in $s$ to $\partial_\lambda F(\lambda,s)$. Integrating that uniform
limit proves differentiation under the line integral. Since
$\partial_\lambda\gamma=u$,
$$\partial_\lambda F=\bigl(u^b\partial_bP_a+P_b\partial_au^b\bigr)\partial_s\gamma_\lambda^a.$$
Thus $\mathcal C'=\int_{\gamma_\lambda}\mathcal L_uP$, where in coordinates
$(\mathcal L_uP)_a=u^b\partial_bP_a+P_b\partial_au^b$. Direct expansion gives
$(\iota_udP+d(P(u)))_a=u^b(\partial_bP_a-\partial_aP_b)+\partial_a(u^bP_b)$,
so direct expansion proves $\mathcal L_uP=\iota_udP+d(P(u))$. The exact
one-form integrates on each subarc to its endpoint difference, and these
differences telescope to zero because $\gamma_\lambda(0)=\gamma_\lambda(1)$.
Since $dP=(1/c)d(Hu^\flat)$, step 2.1 yields
$\mathcal C'=c^{-1}\int_{\gamma_\lambda}T\,d\sigma_p$. If $\sigma_p$ is
constant throughout the swept region, then for each fixed $\lambda$ the
composition $s\mapsto\sigma_p(\gamma_\lambda(s))$ is constant. The chain
rule therefore gives $d\sigma_p(\partial_s\gamma_\lambda)
=\partial_s(\sigma_p\circ\gamma_\lambda)=0$, so the displayed line integral
and hence $\mathcal C'$ vanish. No vanishing of the ambient covector
$d\sigma_p$ transverse to the swept image is needed. [A2, F4, F5, step 2.1, algebra] ∎
