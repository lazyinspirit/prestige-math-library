---
id: ex-cm12-regular-not-surjective
kind: example
title: "Regular but not hyperregular: the Lagrangian $e^{v}$, its branch $H(p)=p\\ln p-p$ on $p>0$ and the absent inverse at nonpositive momenta"
status: draft
origin: session
domain: mathematics
dependency_level: 4
deps: [def-cm-legendre-map-in-a-time-dependent-chart, def-cm-time-dependent-lagrangian-and-action, lem-cm-legendre-map-local-invertibility, prop-cm-hamiltonian-branch-identities, thm-derivative-of-exponential, def-real-exponential-function-and-e, cor-exponential-is-a-bijection-onto-positive-reals, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, def-linear-map, def-invertible-euclidean-linear-map, def-vector-valued-derivative-and-integral, def-derivative]
dependency_roles:
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.1, printed pages 82-83 (PDF pages 88-89): the inverse Legendre transform requires inverting the velocity-momentum relation, and the convexity picture for the existence of the inverse"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 3.1.1: the Legendre transform cannot be implemented in general because it requires the functional inverse of the velocity derivative"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Example

Take $n=1$, $J=U=\mathbb R$, and consider the fibre-full $C^{2}$ chart
Lagrangian

$$\mathcal L:\mathbb R\times\mathbb R\times\mathbb R\longrightarrow\mathbb R,\qquad \mathcal L(t,q,v):=e^{v}$$

([[def-cm-legendre-map-in-a-time-dependent-chart]],
[[def-cm-time-dependent-lagrangian-and-action]]). Then:

1. $\mathcal L$ is regular on the chart: $\mathcal L_{v}(t,q,v)=e^{v}$ and
   $\mathcal L_{vv}(t,q,v)=e^{v}>0$ for every $(t,q,v)$, so the velocity
   Hessian is nonsingular at every state and the Legendre map is a local
   $C^{1}$ diffeomorphism at every state
   ([[lem-cm-legendre-map-local-invertibility]]).
2. $\mathcal L$ is **not** hyperregular on the chart: the fibre velocity map
   $v\mapsto e^{v}$ has image $(0,\infty)$ and is not a bijection of
   $\mathbb R$ onto $\mathbb R$, so there is no inverse branch defined on the
   whole momentum line; a momentum $p\le0$ is not the fibre derivative of any
   velocity, and no Hamiltonian of a branch is defined there
   ([[def-cm-legendre-map-in-a-time-dependent-chart]]).
3. on the momentum half-line $p>0$ the inverse branch is
   $v(p)=\ln p$, the **unique** real number with $e^{v(p)}=p$
   ([[cor-exponential-is-a-bijection-onto-positive-reals]]), and the
   Hamiltonian of that branch is

$$H:(0,\infty)\longrightarrow\mathbb R,\qquad H(p)=p\,v(p)-e^{v(p)}=p\ln p-p,$$

   with $H'(p)=\ln p=v(p)$ for every $p>0$; in particular the differential
   identity $H_{p}=v$ of [[prop-cm-hamiltonian-branch-identities]] clause 1
   holds on this branch even though the chart is not hyperregular.
4. for every nonempty open interval $I$ and every $C^{2}$ curve
   $q:I\to\mathbb R$ with $p(t):=e^{q'(t)}$ one has:
   $\dot q=H'(p)$ and $\dot p=0$ hold for all $t\in I$ if and only if the
   Euler-Lagrange expression of $\mathcal L$ vanishes,
   $E_{\mathcal L}(q)(t)=0$, for all $t\in I$.

The example is a pure chart computation: $\mathcal L=e^{v}$ is not of the
natural mechanical form $\tfrac12v^{\mathsf T}Gv+A\cdot v-V$, and no physical
interpretation of it is claimed.

## Facts & Assumptions

**Given:** The fibre-full $C^{2}$ chart Lagrangian $\mathcal L(t,q,v)=e^{v}$ on $\mathbb R\times\mathbb R\times\mathbb R$, its Legendre map and velocity Hessian, the momentum half-line $p>0$, and a $C^{2}$ curve $q:I\to\mathbb R$ with $p(t)=e^{q'(t)}$.

[F1] Legendre map and regularity ([[def-cm-legendre-map-in-a-time-dependent-chart]], [[lem-cm-legendre-map-local-invertibility]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-linear-map]], [[def-invertible-euclidean-linear-map]]): the Legendre map of a fibre-full $C^{2}$ chart is $\mathbb F(t,q,v)=(t,q,\mathcal L_{v}(t,q,v))$, it is regular at a state exactly when the velocity Hessian there is nonsingular, and a nonsingular velocity Hessian then yields a local $C^{1}$ diffeomorphism onto the image.

[F2] Exponential calculus ([[thm-derivative-of-exponential]], [[def-real-exponential-function-and-e]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-vector-valued-derivative-and-integral]]): $\exp'=\exp$ and $\exp>0$, compositions of differentiable maps are differentiated by the chain rule, and finite sums and products obey the usual derivative rules.

[F3] Exponential range ([[cor-exponential-is-a-bijection-onto-positive-reals]]): the exponential is a bijection of $\mathbb R$ onto $(0,\infty)$; consequently every $p>0$ has exactly one logarithm $v(p)\in\mathbb R$ and no real $v$ satisfies $e^{v}=p$ for $p\le0$.

[F4] Branch identities ([[prop-cm-hamiltonian-branch-identities]], [[def-cm-legendre-map-in-a-time-dependent-chart]]): on a hyperregular chart the branch Hamiltonian satisfies $H_{p}=v$, $H_{q}=-\mathcal L_{q}$ and $H_{t}=-\mathcal L_{t}$, while hyperregularity is the global-in-the-fibre condition of the cited definition, requiring the fibre map to be a bijection onto the whole momentum fibre; the local computations of step 1.3 therefore do not presuppose it.

[F5] Euler-Lagrange data ([[def-cm-time-dependent-lagrangian-and-action]], [[def-interval]]): the Euler-Lagrange expression of a chart Lagrangian is $E_{\mathcal L}(q)=\mathcal L_{q}(t,q,q')-\frac{d}{dt}\bigl(\mathcal L_{v}(t,q,q')\bigr)$, and $C^{2}$ curves on an open interval are differentiated in the usual sense.



## Verification

**Proof technique:** direct; differentiate $e^{v}$, identify the image of the fibre map from the range of the exponential, invert on the positive half-line, and compare the two evolution equations.

1.1 The velocity derivatives are $\mathcal L_{v}(t,q,v)=e^{v}$ and $\mathcal L_{vv}(t,q,v)=e^{v}$ by [F2], and $e^{v}>0$ at every state by [F2]; hence $\det\mathcal L_{vv}\neq0$ everywhere and [F1] makes $\mathcal L$ regular on the chart with a local $C^{1}$ inverse at every state, which is clause 1. [F1, F2, algebra]

1.2 By [F3] the map $v\mapsto e^{v}$ has image $(0,\infty)$ and is injective, so it is not a bijection of $\mathbb R$ onto $\mathbb R$; by [F1] the chart is hyperregular only if each fibre velocity map is a bijection onto the whole momentum fibre, hence $\mathcal L$ is not hyperregular, no inverse branch exists over $p\le0$, and over $p>0$ the inverse is the unique $v(p)$ with $e^{v(p)}=p$; this is clause 2. [F1, F3]

1.3 For $p>0$ set $v(p):=\ln p$, the unique inverse of $e$ at $p$ by [F3]; differentiating the identity $e^{v(p)}=p$ by the chain rule gives $e^{v(p)}v'(p)=1$, so $v'(p)=1/p>0$; the branch Hamiltonian is $H(p)=p\,v(p)-e^{v(p)}=p\ln p-p$ and its derivative is $H'(p)=v(p)+p\,v'(p)-e^{v(p)}v'(p)=v(p)+(p-p)v'(p)=\ln p$, using $e^{v(p)}=p$ and the product rule of [F2]. [F2, F3, algebra]

1.4 Clause 4: with $p(t)=e^{q'(t)}$ the inverse relation gives $q'(t)=v(p(t))=\ln p(t)=H'(p(t))$, so the first Hamilton equation is automatic; the second, $\dot p=0$, is equivalent to $\frac{d}{dt}e^{q'}=e^{q'}q''=0$, i.e. to $q''=0$ because $e^{q'}>0$; by [F5] the Euler-Lagrange expression of $\mathcal L$ is $E_{\mathcal L}(q)=-\frac{d}{dt}e^{q'}=-e^{q'}q''$, so $\dot p=0$ is equivalent to $E_{\mathcal L}(q)=0$; this is clause 4 in both directions. [F2, F3, F5, algebra]

2.1 Collecting steps 1.1-1.4 proves clauses 1-4; by [F4] the branch identity used in clause 3 is the local instance of the general differential identity, while clause 2 shows that the global hypothesis of that proposition fails here, so no global Hamiltonian on the whole momentum line is asserted. [F4, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

- **Where the global structure stops.** The failure is exactly surjectivity of
  the fibre map: injectivity of $v\mapsto e^{v}$ holds and gives the unique
  branch $v(p)=\ln p$ over the image, but momentum zero and negative momenta
  are not fibre derivatives of any velocity of the chart. The example thus
  separates the two hypotheses of [[def-cm-legendre-map-in-a-time-dependent-chart]]
  — nonsingular velocity Hessian and bijectivity onto the momentum fibre —
  and shows that a local branch at every state need not assemble into a global
  one.

- **Not a natural mechanical Lagrangian.** The chart Lagrangian $e^{v}$ is
  not of the form $\tfrac12v^{\mathsf T}Gv+A\cdot v-V$ with positive definite
  $G$; the regular non-hyperregular separation exhibited here therefore does
  not contradict the hyperregularity of natural mechanical charts, which
  rests on the positivity of the kinetic matrix.
