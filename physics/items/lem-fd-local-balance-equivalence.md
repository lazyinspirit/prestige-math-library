---
id: lem-fd-local-balance-equivalence
kind: lemma
title: Momentum, angular, kinetic/internal and total balance algebra
status: draft
origin: pipeline
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - lem-fd-transport-and-density
  - lem-fd-cauchy-contact
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-surface-integral-on-a-compact-c-one-hypersurface
dependency_roles:
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-cauchy-contact: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mechanics of Solids"
      url: "https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf"
      locator: "§3.3.4, printed pp. 40–41."
    - title: "A Short Course on Nonlinear Continuum Mechanics"
      url: "https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf"
      locator: "Chapter 4 §§4.1–4.2 and §4.4, printed pp. 26–31; Chapter 5 §5.1, printed pp. 32–34."
verification:
  precheck: pass
physical_scope: null
empirical_premises: []
---

## Statement

Assume $\mathrm{AC}_\omega$, meaning that every countable sequence of nonempty sets has a choice function. Let $I\subset\mathbb R$ be a nonempty open interval containing $0$, let $B\subset\mathbb R^3$ be a nonempty bounded open set with $C^1$ boundary, and let $U\subset\mathbb R^3$ be open with $\overline B\subset U$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have slices $\chi_t:U\to\chi_t(U)$ that are orientation-preserving bijections with $C^2$ inverses and $\det D_a\chi(t,a)>0$. Put $\Omega_t=\chi_t(B)$, $\mathcal W=\{(t,x):t\in I,\ x\in\chi_t(U)\}$, $u(t,x)=\partial_t\chi(t,\chi_t^{-1}(x))$ on $\mathcal W$, $D_t=\partial_t+u\cdot\nabla_x$, $k=|u|^2/2$, and $E=e+k$. For each nonempty bounded $C^1$ domain $V\Subset B$ with compact closure in $B$, set $P_t=\chi_t(V)$. A bounded $C^1$ domain means a nonempty bounded open set locally on one side of a $C^1$ boundary graph; its unit normal $\nu$ points outward. All fields below are continuously differentiable on open neighborhoods of the swept closures $\{(t,x):t\in I,\ x\in\chi_t(\overline V)\}$ for each such $V$, and $\rho>0$: let $\rho$ be scalar, $u,b,q$ vector-valued, $e,r$ scalar, and $\sigma$ a $3\times3$ matrix field. Define $L=\nabla_xu$ by $L_{ij}=\partial_{x_j}u_i$, $A:B=\sum_{i,j}A_{ij}B_{ij}$, $\operatorname{div}v=\sum_j\partial_{x_j}v_j$ for vector fields $v$, and $(\operatorname{div}M)_i=\sum_j\partial_{x_j}M_{ij}$ for $3\times3$ fields $M$; define $(u\otimes u)_{ij}=u_i u_j$. Interpret $\rho,u,b,\sigma,q,e,r$ as mass density, velocity, body acceleration, Cauchy stress, heat flux, specific internal energy, and specific energy supply rate. All cross products are the standard right-handed product in $\mathbb R^3$. In SI, $x,a$ are in metres, $t$ in seconds, $\rho$ in $\mathrm{kg\,m^{-3}}$, $u$ in $\mathrm{m\,s^{-1}}$, $b$ in $\mathrm{m\,s^{-2}}$, $\sigma$ in pascals, $q$ in $\mathrm{W\,m^{-2}}$, $e$ in $\mathrm{J\,kg^{-1}}$, and $r$ in $\mathrm{W\,kg^{-1}}$. The traction is $\sigma\nu$ on the outward boundary normal, and $q\cdot\nu$ is outward heat flux; thus $-\int_{\partial P_t}q\cdot\nu\,dS$ is heat entering $P_t$. Surface integrals use the chart measure with area density $\sqrt{\det(DX^TDX)}$.

Assume the continuity equation $\partial_t\rho+\operatorname{div}(\rho u)=0$, and suppose the following integral balances hold for every such $V$ and every $t\in I$:
$$\frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\rho b\,dx+\int_{\partial P_t}\sigma\nu\,dS,$$
$$\frac{d}{dt}\int_{P_t}x\times(\rho u)\,dx=\int_{P_t}x\times(\rho b)\,dx+\int_{\partial P_t}x\times(\sigma\nu)\,dS,$$
$$\frac{d}{dt}\int_{P_t}\rho E\,dx=\int_{P_t}\rho b\cdot u\,dx+\int_{\partial P_t}(\sigma\nu)\cdot u\,dS-\int_{\partial P_t}q\cdot\nu\,dS+\int_{P_t}\rho r\,dx.$$
Assume the Cauchy contact result supplies the pointwise traction $\tau=\sigma\nu$, and that its unique matrix field $\sigma$ has the stated $C^1$ regularity; the pointwise contact result alone does not imply this regularity. Then the linear momentum balance is equivalent to
$$\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u-\sigma)=\rho b.$$
Together with the angular-momentum balance, it is equivalent to this momentum equation and $\sigma=\sigma^T$. The kinetic-energy identity is
$$\partial_t(\rho k)+\operatorname{div}(\rho k u-\sigma^T u)=\rho b\cdot u-\sigma:L.$$
The total-energy balance is equivalent to
$$\partial_t(\rho E)+\operatorname{div}(\rho E u-\sigma^T u+q)=\rho b\cdot u+\rho r,$$
and, after subtracting the kinetic identity, to the internal-energy equation
$$\partial_t(\rho e)+\operatorname{div}(\rho e u+q)=\sigma:L+\rho r,\qquad \rho D_t e=\sigma:L-\operatorname{div}q+\rho r.$$
Conversely, adding the kinetic and internal-energy equations recovers the total-energy equation. These are conditional identities for smooth fields; no balance postulate is derived.

## Statement references

[[lem-fd-transport-and-density]]

[[lem-fd-cauchy-contact]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[[def-countable-choice]]

[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]

[[def-surface-integral-on-a-compact-c-one-hypersurface]]

[Pamies, *Mechanics of Solids*, §3.3.4](https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf).

[Oden, *A Short Course on Nonlinear Continuum Mechanics*, Chapter 4 §§4.1–4.2, §4.4, and Chapter 5 §5.1](https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf).

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the stated $C^2$ motion, $C^1$ positive density and fields, continuity equation, linear/angular momentum integral balances, total-energy integral balance, and the stated regularity of the stress field.

[L1] [[lem-fd-transport-and-density]]: a compact Jordan set is a compact set whose boundary is coverable by finitely many axis-parallel boxes of arbitrarily small total volume. For a $C^2$ orientation-preserving motion, every such $K$ in the reference domain, and every scalar $f\in C^1$ on the swept open set, the supplier states $\frac{d}{dt}\int_{\chi_t(K)}f=\int_{\chi_t(K)}(D_tf+f\theta)=\int_{\chi_t(K)}(\partial_tf+\operatorname{div}(fu))$. The motion convention uses $C^r$ for coordinate partial derivatives through total order $r$, all continuous, and has positive Jacobian. Apply the transport identity componentwise to vector fields. Here the integral-balance domains are open $P_t$; step 1.1 proves the boundary-null and local-restriction facts needed to use the supplier with $K=\overline V$.

[F1] [[lem-fd-cauchy-contact]]: under orientation-local continuous traction and local resultant balance, a unique pointwise matrix satisfies $\tau(x,n)=\sigma(x)n$; this result alone does not provide $C^1$ regularity of $\sigma$.

[F2] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under $\mathrm{AC}_\omega$, dimension $n\ge2$, a bounded $C^1$ domain and $F\in C^1(\overline\Omega;\mathbb R^n)$ with continuous interior derivatives, $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu$.

[F3] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is choice for a countable family of nonempty sets; this is the only choice strength assumed through [F2].

[F4] [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]: a bounded $C^1$ domain is locally one side of a $C^1$ boundary graph; its unit normal points outward.

[F5] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: surface integrals use regular charts with area density $\sqrt{\det(DX^TDX)}$.

[A1] The continuity equation is assumed as the pointwise identity in the Statement.

[A2] The linear- and angular-momentum integral balances are hypotheses, not conclusions from a physical postulate.

[A3] The total-energy integral balance is a separate hypothesis; no weak-energy equality follows from momentum balance alone.

## Proof

1.1 Fix $V$ and $t_0\in I$. Its compact boundary is covered by finitely many relatively compact $C^1$ graph charts. On smaller compact chart pieces the graph functions have bounded derivative. Cover each two-dimensional base by squares of side $\delta$; the graph over each square has Euclidean diameter at most $C\delta$, hence lies in an axis-parallel cube of side $C'\delta$. There are $O(\delta^{-2})$ such squares, so the total cube volume is $O(\delta)$ and tends to zero. Thus for every positive bound the boundary has a finite axis-parallel box cover of smaller total volume, so $K=\overline V$ is compact Jordan in the sense of [L1]. The map $\chi_{t_0}$ is a diffeomorphism on a neighborhood of $K$, so $\chi_{t_0}(K)=\overline{P_{t_0}}$ and $\partial P_{t_0}=\chi_{t_0}(\partial V)$. Its derivative is bounded on finitely many compact chart neighborhoods of $\partial V$, so it is Lipschitz there. The image of each graph-covering square has diameter at most a constant times $\delta$, so it lies in an axis-parallel cube with volume $O(\delta^3)$; summing over $O(\delta^{-2})$ squares gives arbitrarily small finite cube covers of $\partial P_{t_0}$. Thus $\chi_{t_0}(K)$ is also compact Jordan. In particular, the volume integral over $P_{t_0}$ equals the corresponding integral over $\chi_{t_0}(K)$ for every continuous integrand because their difference is on the volume-null boundary. The fields are $C^1$ on neighborhoods of the swept closures. Pulling a common such neighborhood back by the continuous map $(t,a)\mapsto(t,\chi(t,a))$ gives an open set containing $\{t_0\}\times K$; compactness supplies an interval around $t_0$ and an open reference neighborhood $U_0$ of $K$ on whose product the fields are defined. Restrict the motion to that neighborhood and interval, with reference body $V$ and reference domain $U_0$, translate time so that $t_0$ is zero, and apply [L1] to $K$ and each component of $f=\rho u$. The transport formula gives $\frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\left(\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u)\right)dx$ at $t_0$. Componentwise product differentiation and [A1] give $\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u)=\rho D_tu$. The linear-momentum balance [A2], traction representation [F1], and divergence theorem [F2] now give $\int_{P_{t_0}}(\rho D_tu-\rho b-\operatorname{div}\sigma)\,dx=0$. Every sufficiently small open spatial ball $Q$ with compact closure in $\Omega_{t_0}$ is a material image $P_{t_0}$: its inverse image under $\chi_{t_0}$ is a bounded $C^1$ domain compactly contained in $B$. If a component of this continuous residual were positive or negative at an interior point, it would retain that strict sign on a small ball and have a nonzero integral, a contradiction. Hence $\rho D_tu=\rho b+\operatorname{div}\sigma$ pointwise. [given, L1, F1, F2, F3, F4, F5, A1, A2]

2.1 For each component $i$, expand the left side using the product rule: $\partial_t(\rho u_i)+\sum_j\partial_{x_j}(\rho u_i u_j)=\rho(\partial_tu_i+u\cdot\nabla_xu_i)+u_i(\partial_t\rho+\operatorname{div}(\rho u)).$ The last term vanishes by [A1], and the remaining term is $\rho D_tu_i$. Substitution of step 1.1 gives the displayed conservative momentum equation. Conversely, if that equation holds, the same expansion and [A1] give $\rho D_tu=\rho b+\operatorname{div}\sigma$. Integrate this identity over $P_t$, use [F2] rowwise on $\sigma$, and use [L1] componentwise on $\rho u$; the transport derivative turns its left side into $\frac{d}{dt}\int_{P_t}\rho u\,dx$, recovering the linear-momentum integral balance in [A2]. [step 1.1, given, A1, L1, F2, F3, F4, F5, algebra]

2.2 Apply [L1] componentwise to the angular-momentum density $\rho(x\times u)$. Since $D_tx=u$ and $u\times u=0$, $D_t(x\times u)=x\times D_tu$, so step 1.1 makes its time derivative $\int_{P_t}\rho x\times D_tu$. By [A2] the same derivative is $\int_{P_t}x\times(\rho b)+\int_{\partial P_t}x\times(\sigma\nu)$. The flux matrix for $x\times(\sigma\nu)$ has entries $M_{ij}=\sum_{k,l}\epsilon_{ikl}x_k\sigma_{lj}$; applying [F2] rowwise changes the boundary integral to $\int_{P_t}\operatorname{div}(x\times\sigma)$. Substituting $\rho D_tu=\rho b+\operatorname{div}\sigma$ from step 1.1 and cancelling the body-force terms gives zero integral of $\operatorname{div}(x\times\sigma)-x\times\operatorname{div}\sigma$ over every material subdomain. The same fixed-sign-ball argument as in step 1.1 makes this continuous residual zero pointwise. Componentwise differentiation gives $\sum_j\partial_{x_j}M_{ij}=\sum_{j,l}\epsilon_{ijl}\sigma_{lj}+(x\times\operatorname{div}\sigma)_i$. Thus $\sum_{j,l}\epsilon_{ijl}\sigma_{lj}=0$ for every $i$. For $i=1,2,3$ these equations are respectively $\sigma_{32}=\sigma_{23}$, $\sigma_{13}=\sigma_{31}$, and $\sigma_{21}=\sigma_{12}$, so $\sigma=\sigma^T$. [given, L1, F1, F2, F3, F4, F5, A2, step 1.1]

2.3 Dot $\rho D_tu=\rho b+\operatorname{div}\sigma$ from step 1.1 with $u$. The component product rule gives $u\cdot\operatorname{div}\sigma=\operatorname{div}(\sigma^T u)-\sigma:L$, and differentiation of $k=|u|^2/2$ gives $D_tk=u\cdot D_tu$. By the product rule and continuity equation [A1], $\partial_t(\rho k)+\operatorname{div}(\rho ku)=\rho D_tk$. Substitution yields $\partial_t(\rho k)+\operatorname{div}(\rho ku-\sigma^Tu)=\rho b\cdot u-\sigma:L$. [step 1.1, given, A1, algebra]

2.4 Apply [L1] to $f=\rho E$ in [A3]. Rewrite the boundary power as $(\sigma\nu)\cdot u=(\sigma^Tu)\cdot\nu$, then use [F2] on $\sigma^Tu$ and $q$. The integral balance becomes the integral of the continuous residual $\partial_t(\rho E)+\operatorname{div}(\rho Eu-\sigma^Tu+q)-\rho b\cdot u-\rho r$ over every $P_t$; the fixed-sign-ball argument from step 1.1 makes this residual zero pointwise. This is the conservative total-energy equation. Conversely, integrating that equation over $P_t$ and using [F2] and [L1] recovers [A3]. [given, L1, F2, F3, F4, F5, A3, step 1.1]

3.1 Conversely, suppose the conservative momentum equation holds and $\sigma=\sigma^T$. Then $\sum_{j,l}\epsilon_{ijl}\sigma_{lj}=0$, so the component calculation in step 2.2 gives $\operatorname{div}(x\times\sigma)=x\times\operatorname{div}\sigma$. The product rule, continuity equation [A1], and $u\times u=0$ give $\partial_t(\rho x\times u)+\operatorname{div}(\rho(x\times u)\otimes u)=x\times(\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u))$. Substituting the momentum equation and stress-divergence identity yields $\partial_t(\rho x\times u)+\operatorname{div}(\rho(x\times u)\otimes u)=x\times(\rho b)+\operatorname{div}(x\times\sigma)$. Integrate this local angular identity over $P_t$, use [F2] on the flux matrix $x\times\sigma$, whose boundary flux is $x\times(\sigma\nu)$, and use [L1] on the material density $\rho(x\times u)$. This recovers the angular-momentum integral balance in [A2]; the linear-momentum integral balance has already been recovered in step 2.1. [step 2.1, step 2.2, L1, F2, F3, F4, F5, A1, A2]

4.1 Subtract the kinetic equation in step 2.3 from the total-energy equation in step 2.4 and use $E=e+k$. The body-work terms cancel, leaving $\partial_t(\rho e)+\operatorname{div}(\rho eu+q)=\sigma:L+\rho r$. The product rule and continuity equation [A1] give $\partial_t(\rho e)+\operatorname{div}(\rho eu)=\rho D_te$, so rearrangement yields $\rho D_te=\sigma:L-\operatorname{div}q+\rho r$. Conversely, adding this internal-energy equation to the kinetic equation in step 2.3 recovers the total-energy equation in step 2.4. [step 2.3, step 2.4, A1, algebra] ∎
