---
id: thm-csm-dk-global-lipschitz-vlasov
kind: theorem
title: Complete global bounded-Lipschitz mean-field characteristic evolution
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  - def-csm-dk-periodic-mean-field-model
  - lem-csm-dk-continuous-time-field-smooth-flow
  - thm-dominated-convergence
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - thm-monotone-convergence-for-the-integral
  - def-csm-dk-phase-space-wasserstein-one
  - lem-csm-dk-smooth-tests-determine-phase-probability
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  lem-csm-dk-continuous-time-field-smooth-flow: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-change-of-variables-for-oriented-manifold-diffeomorphisms: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-csm-dk-phase-space-wasserstein-one: mathematical-premise
  lem-csm-dk-smooth-tests-determine-phase-probability: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Sec. 1.1.1 and Part I, printed pp. 1-3 and 12-15: characteristic Vlasov formulation and the smooth-interaction mean-field limit.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§§1.1-1.2, printed pp. 3-5: weak Liouville and Vlasov formulations; their solution class and force hypotheses differ from the local result.'
---

## Statement

Let $Z=\mathbb T^d\times\mathbb R^d$ be the dimensionless phase space from
[[def-csm-dk-periodic-mean-field-model]], let $k$ be the odd, bounded, smooth,
Lipschitz force in that definition, and put $B=\|k\|_\infty$ and
$A=\|Dk\|_\infty$ using its stated operator norm. Let $\mu_0$ be any Borel
probability on $Z$ with finite first velocity moment
$\int_Z|v|\,d\mu_0(x,v)$. Then there is a unique global characteristic
evolution $(X_s,V_s)$ with

$$\dot X_s(z)=V_s(z),\qquad \dot V_s(z)=\int_Z k(X_s(z)-X_s(z'))\,d\mu_0(z'),\qquad (X_0,V_0)(x,v)=(x,v),$$

and $\mu_s$ is the push-forward of $\mu_0$ by $(X_s,V_s)$; it is narrowly
continuous with finite first velocity moment for every $s\in\mathbb R$. It
satisfies the weak Vlasov equation: for every time-dependent $C^1$ function
$\varphi(s,x,v)$ that is bounded with bounded first derivatives and periodic
in $x$,

$$\frac{d}{ds}\int_Z\varphi(s,z)\,d\mu_s(z) =\int_Z\bigl(\partial_s\varphi+v\cdot\nabla_x\varphi +F_{\mu_s}(x)\cdot\nabla_v\varphi\bigr)(s,z)\,d\mu_s(z),\qquad F_{\mu_s}(x):=\int_Z k(x-y)\,d\mu_s(y,w).$$

For the density clause, $dx$ is normalized Haar measure on $\mathbb T^d$ and
$dv$ is Lebesgue measure on $\mathbb R^d$. If $\mu_0$ has a smooth probability
density $\rho_0$ with respect to $dx\,dv$ and all velocity moments
$\int_Z(1+|v|^r)\rho_0(x,v)\,dx\,dv$ are finite for integers $r\ge1$, then
$F_{\mu_s}$ is jointly smooth in $(s,x)$ and the transported density is a
classical smooth solution of this Vlasov equation.

## Facts & Assumptions

**Given:** The dimensionless force $k$ and scales in
[[def-csm-dk-periodic-mean-field-model]], a Borel probability $\mu_0$ with
finite first velocity moment, and the differential and weak formulations in
the Statement.

[F1] [[def-csm-dk-periodic-mean-field-model]]: $k=-\nabla_x\Phi$ is smooth,
periodic and odd; $B=\|k\|_\infty<\infty$, $A=\|Dk\|_\infty<\infty$ in the
Euclidean operator norm, and $k(0)=0$.

[F2] [[lem-csm-dk-continuous-time-field-smooth-flow]]: a force continuous in
time, smooth in state with bounded derivatives, and bounded in magnitude gives
a unique complete characteristic flow on every finite interval, smooth in the
initial state; its first state derivative solves the variational equation.

[F3] [[thm-dominated-convergence]]: on an arbitrary measure space, pointwise almost-everywhere convergence under one common integrable majorant permits passage of limits through the integral.

[F4] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]: an
orientation-preserving diffeomorphism preserves integrals of compactly
supported smooth top forms on oriented manifolds.

[F5] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: for every
$n\ge1$ there is a smooth compactly supported radial cutoff equal to one on
the unit ball and zero outside the radius-two ball; its explicit radial
construction is nonincreasing in radius.

[F6] [[thm-monotone-convergence-for-the-integral]]: for nonnegative measurable
$f_n\uparrow f$, $\int f_n\uparrow\int f$ on any measure space.

[F7] [[lem-csm-dk-smooth-tests-determine-phase-probability]]: two Borel
probabilities on $Z$ that agree on smooth compactly supported tests are equal.

[F8] [[def-csm-dk-phase-space-wasserstein-one]]: $Z$ has the metric
$d_Z((x,v),(y,w))=d_{\mathbb T^d}(x,y)+|v-w|$, which generates its Borel
sigma-algebra.

## Proof

1.1 Choose $h>0$ with $Ah^2<1$; when $A=0$ any finite $h$ is allowed. For a bounded continuous displacement $u(s,x,v)$ in $\mathbb R^d$ on $[0,h]\times Z$, periodic in $x$ and with $u(0,\cdot)=0$, set $(Tu)(s,x,v):=\int_0^s(s-r)\int_Z k\bigl(x+rv+u(r,x,v)-y-rw-u(r,y,w)\bigr)\,d\mu_0(y,w)\,dr.$ with torus arguments understood modulo $\mathbb Z^d$. On the closed set $\sup|u|\le Bh^2/2$, the map has the same bound because $|k|\le B$. For every convergent sequence of $(s,x,v)$, the integrand is pointwise continuous in those variables and bounded by $B$ on $(Z,\mathcal B(Z),\mu_0)$; [F3] therefore gives joint continuity of $Tu$. Uniform limits preserve continuity, periodicity and the initial condition, so this closed function space is complete in the supremum norm. [F1, F3, construct]

2.1 For any two displacements $u,\widetilde u$, the force arguments change by at most $2\sup|u-\widetilde u|$. The Lipschitz bound $A$ and $\int_0^s(s-r)\,dr=s^2/2$ give $\sup|Tu-T\widetilde u|\le Ah^2\sup|u-\widetilde u|$. Starting with $u_0=0$ and iterating $u_{n+1}=Tu_n$, successive differences are bounded by a geometric sequence with ratio $Ah^2<1$; hence $(u_n)$ is uniformly Cauchy. Its limit $u$ belongs to the closed complete set, and the Lipschitz estimate gives $Tu=u$. The same estimate makes this fixed point unique. [F1, step 1.1, construct, algebra]

3.1 Put $X_s(x,v)=x+sv+u(s,x,v)$ modulo the torus and $V_s(x,v)=v+\partial_su(s,x,v)$. The Volterra formula and continuity of the integrand imply $\partial_s^2X_s=\int_Zk(X_s(x,v)-X_s(y,w))\,d\mu_0(y,w)$, with $X_0=x$ and $\dot X_0=v$; thus $(X_s,V_s)$ solves the displayed characteristic system. The bound $|V_s-v|\le B|s|$ gives a finite first moment for every finite $s$. For bounded continuous $\psi$, the integrand $\psi(X_s,V_s)$ is pointwise continuous in $s$ and bounded by $\|\psi\|_\infty$, so [F3] gives narrow continuity of $\mu_s$. [F1, F3, step 2.1]

4.1 The force $F_{\mu_s}(x)$ is continuous in $(s,x)$: for $(s_n,x_n)\to(s,x)$, its integrand converges pointwise and is bounded by $B$, so [F3] applies on $(Z,\mu_0)$. Along each characteristic, the chain rule gives $\frac{d}{ds}\varphi(s,X_s,V_s) =\bigl(\partial_s\varphi+V_s\cdot\nabla_x\varphi +F_{\mu_s}(X_s)\cdot\nabla_v\varphi\bigr)(s,X_s,V_s).$ On any bounded time interval the right side is bounded by $C(1+|v|)$, which is integrable by the assumed first moment. Difference quotients have the same common bound; [F3] therefore permits differentiation under the $\mu_0$ integral and gives exactly the weak identity in the Statement. [F1, F3, step 3.1, algebra]

4.2 The fixed-point estimate and force bounds do not depend on the starting time or probability. Repeating the construction on successive intervals of length $h$ therefore gives a unique characteristic solution on every bounded positive interval. For negative times let $R(x,v)=(x,-v)$ and solve the same positive-time problem from $R_\#\mu_0$. If its characteristics are $(\widetilde X_r,\widetilde V_r)$, define, for $s\le0$, $X_s(x,v)=\widetilde X_{-s}(x,-v)$ and $V_s(x,v)=-\widetilde V_{-s}(x,-v)$. Then $X_0=x$, $V_0=v$, $\dot X_s=V_s$, and $\dot V_s=F_{\mu_s}(X_s)$: the transformed law has the same position marginal as $\mu_s$, and the force depends only on position. Thus these are characteristics from $\mu_0$ for negative times. Uniqueness on overlapping intervals follows from step 2.1 and continuation, so the positive and negative solutions form one global family. [F1, step 2.1, step 3.1]

5.1 Suppose $\mu_0$ has the smooth density and all moments in the Statement. Its characteristic field is $b(s,x,v)=(v,F_{\mu_s}(x))$. Every state derivative of $F_{\mu_s}$ is bounded on a finite time slab because it is an integral of a bounded derivative of $k$. Step 4.1 makes $b$ continuous in time; [F2] gives a smooth state flow $S_{s,0}$ and its smooth backward inverse. Its state derivative $J_s=D S_{s,0}$ solves $\dot J_s=D b(s,S_{s,0})J_s$, $J_0=I$, by [F2]. The divergence of $b$ is zero: $\nabla_x\cdot v=0$ and $F_{\mu_s}$ is independent of $v$. Since the inverse flow makes $J_s$ invertible, multilinear differentiation of its determinant gives $\frac d{ds}\det J_s=\det J_s\,\operatorname{tr}(J_s^{-1}D b\,J_s) =\det J_s\,\operatorname{tr}(D b)=0$; with $\det J_0=1$ this yields $\det J_s=1$. Define $\rho_s=\rho_0\circ S_{0,s}$ relative to $dx\,dv$. It is smooth in state, and the chain rule gives the classical transport equation. [F1, F2, given, step 4.1, algebra]

6.1 Orient $Z$ by its standard translation-chart volume form $\mathrm{vol}=dx^1\wedge\cdots\wedge dx^d\wedge dv^1\wedge\cdots\wedge dv^d$. Since $\det J_s=1$, $S_{s,0}$ preserves this orientation. For $g\in C_c^\infty(Z)$ the top form $g\rho_s\,\mathrm{vol}$ has compact support, so [F4] and step 5.1 give $\int_Zg(z)\rho_s(z)\,dx\,dv =\int_Zg(S_{s,0}z)\rho_s(S_{s,0}z)\,dx\,dv =\int_Zg(S_{s,0}z)\rho_0(z)\,dx\,dv.$ Take the radial cutoff $\chi$ of [F5], nonincreasing in radius, and put $\chi_R(v)=\chi(v/R)$. Then $\chi_R\uparrow1$. Applying the identity to $g(x,v)=\chi_R(v)$ gives integrals that increase to $\int_Z\rho_s\,dx\,dv$ by [F6]. On the right, $\chi_R(V_s(z))\rho_0(z)\to\rho_0(z)$ pointwise and is dominated by $\rho_0(z)$; [F3] makes its integral tend to $1$. Thus $\rho_s\,dx\,dv$ is a probability. The identity also says $\rho_s\,dx\,dv$ and the characteristic law $\mu_s$ agree on all smooth compactly supported tests. Apply [F7] to conclude $\rho_s\,dx\,dv=\mu_s$, so $\rho_s$ is the density of $\mu_s$. [F3, F4, F5, F6, F7, F8, step 5.1, construct, algebra]

7.1 For every time-derivative order $r$, differentiating $F_{\mu_s}(x)=\int k(x-X_s(z))\rho_0(z)\,dz$ gives finite sums of bounded derivatives of $k$ times products of characteristic time derivatives. The base bounds $|V_s-v|\le B|s|$ and $|\dot V_s|\le B$, followed by induction in the differentiated characteristic equation, bound each order-$r$ integrand by $C(r,T)(1+|v|^r)$ on $|s|\le T$. Every such envelope is integrable by the all-moment assumption. Dominated convergence [F3] therefore justifies each time differentiation under the integral, so $F_{\mu_s}$ is jointly smooth in $(s,x)$. The joint-smooth-time clause of [F2] then makes $S_{s,0}$ and $\rho_s$ jointly smooth, proving the classical branch. [F2, F3, step 3.1, step 4.1, step 5.1, algebra, induction] ∎
