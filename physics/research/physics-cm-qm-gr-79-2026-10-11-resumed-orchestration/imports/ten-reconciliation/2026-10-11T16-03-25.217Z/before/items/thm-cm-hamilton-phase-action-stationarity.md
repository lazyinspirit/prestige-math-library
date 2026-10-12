---
id: thm-cm-hamilton-phase-action-stationarity
kind: theorem
title: "Stationarity of the phase-space action is equivalent to Hamilton's equations, and hyperregular elimination recovers the Lagrangian action"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-time-dependent-lagrangian-and-action, def-cm-legendre-map-in-a-time-dependent-chart, prop-cm-hamiltonian-branch-identities, thm-cm-stationarity-iff-euler-lagrange, lem-cm-c2-bump-functions, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, thm-linearity-of-the-integral, thm-continuous-implies-integrable, def-darboux-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval, def-euclidean-inner-product, def-abs-value]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  lem-cm-c2-bump-functions: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 9.2-9.4 (Hamilton's Principle of Stationary Action; Lagrangian; Application of Hamilton's Action Principle to Mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.5 'The Principle of Least Action' (the variational principle in phase space), printed page 87"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $O_H\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^n$ be open and nonempty,
let $H:O_H\to\mathbb R$ be of class $C^2$, let $a<b$, and suppose that for a $C^1$ path
$\gamma(t)=(q(t),p(t))$ ([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-vector-valued-derivative-and-integral]]) with $(t,q(t),p(t))\in O_H$ for all $t\in[a,b]$
the **phase action**

$$A(\gamma):=\int_a^b\bigl[p(t)\cdot q'(t)-H(t,q(t),p(t))\bigr]dt$$

is defined, the integrand being continuous ([[def-darboux-integral]],
[[thm-continuous-implies-integrable]], [[def-euclidean-inner-product]]). Then:

1. for every $C^1$ variation pair $(\delta q,\delta p)$ with $\delta q(a)=\delta q(b)=0$ and with
   $\gamma+s(\delta q,\delta p)$ in the domain of $A$ for small $|s|$,

$$\frac{d}{ds}\Big|_{s=0}A\bigl(\gamma+s(\delta q,\delta p)\bigr) =\int_a^b\Bigl[\bigl(q'-H_p\bigr)\cdot\delta p+\bigl(-p'-H_q\bigr)\cdot\delta q\Bigr]dt ;$$

2. $\gamma$ is **stationary** (the displayed derivative vanishes for every such variation) if and
   only if Hamilton's equations hold on $[a,b]$:

$$q'(t)=H_p\bigl(t,q(t),p(t)\bigr),\qquad p'(t)=-H_q\bigl(t,q(t),p(t)\bigr)\qquad(t\in[a,b]);$$

3. **(elimination)** let in addition $\mathcal L:J\times U\times\mathbb R^n\to\mathbb R$ be a
   hyperregular $C^2$ chart with inverse branch $v(t,q,p)$ and Hamiltonian
   $H(t,q,p)=p\cdot v(t,q,p)-\mathcal L(t,q,v(t,q,p))$
   ([[def-cm-legendre-map-in-a-time-dependent-chart]]), such that the phase domain of $H$ contains
   the points below. For every $C^2$ curve $q:[a,b]\to U$ with $(t,q(t),q'(t))$ in the domain of
   $\mathcal L$, put $p(t):=\mathcal L_v(t,q(t),q'(t))$. Then
   $A(q,p)=S(q)$, where $S$ is the action of $\mathcal L$; consequently $q$ is stationary for $S$
   if and only if $(q,p)$ is stationary for the phase action.

## Facts & Assumptions

**Given:** The $C^2$ phase function $H$, a $C^1$ path $\gamma=(q,p)$, the phase action $A$, and
admissible variation pairs $(\delta q,\delta p)$ with $\delta q(a)=\delta q(b)=0$.

[F1] Differentiation under the integral sign on a compact rectangle
([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]): the one-parameter
integrand has continuous partial derivative in the parameter, so the derivative passes through the
integral. Integration by parts ([[thm-integration-by-parts]]) applies to the term
$\int_a^bp\cdot\delta q'\,dt$ with $u=p\cdot\delta q$ and yields $-\int_a^bp'\cdot\delta q\,dt$,
because the boundary term $[p\cdot\delta q]_a^b$ vanishes by $\delta q(a)=\delta q(b)=0$; the
integral is linear ([[thm-linearity-of-the-integral]]). 

[F2] The bumps of [[lem-cm-c2-bump-functions]]: a continuous scalar coefficient $E$ on $(a,b)$
that is nonzero at some interior point admits a $C^2$ bump $\beta$ supported in $(a,b)$ with
$\int E\beta\ne0$. Such bumps, multiplied by the standard basis vectors of the $q$- and
$p$-components, give the admissible variations used below.

[F3] Hyperregular elimination ([[prop-cm-hamiltonian-branch-identities]]): on the inverse branch
$H_p(t,q,p)=v(t,q,p)$, $H_q=-\mathcal L_q(t,q,v)$, and $(q,p)$ solves Hamilton's equations iff
$q$ solves the Euler–Lagrange equation with $p=\mathcal L_v(t,q,q')$; in the replacement
$p=\mathcal L_v(t,q,q')$ the inverse relation gives $v(t,q,p)=q'$, so
$$p\cdot q'-H(t,q,p)=\mathcal L_v\cdot q'-\bigl(\mathcal L_v\cdot q'-\mathcal L\bigr)=\mathcal L(t,q,q').$$

[F4] Stationarity for the Lagrangian action is equivalent to the vanishing of the
Euler–Lagrange expression ([[thm-cm-stationarity-iff-euler-lagrange]],
[[def-cm-time-dependent-lagrangian-and-action]]); differentiability and integrability conventions
are those of [[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-abs-value]].

## Proof

**Proof technique:** direct; differentiate the phase action, integrate by parts, and use bumps in
the two components separately; then substitute the inverse Legendre branch.

1.1 Clause 1: the parameter derivative of the integrand is $\delta p\cdot q'+p\cdot\delta q'-H_q\cdot\delta q-H_p\cdot\delta p$, continuous in $(s,t)$; by [F1] the derivative of $A$ is the integral of this expression. Integrating the term $\int p\cdot\delta q'$ by parts and collecting the coefficients of $\delta q$ and $\delta p$ gives the displayed formula. [F1, given, algebra]

2.1 Clause 2, forward direction: if Hamilton's equations hold, then $q'-H_p=0$ and $-p'-H_q=0$ identically, so the integral of step 1.1 vanishes for every admissible variation; thus $\gamma$ is stationary. [step 1.1, given]

2.2 Clause 2, converse: assume $\gamma$ stationary. First take $\delta q=0$ and let $\delta p$ run through the bumps of [F2] in a single component. Step 1.1 gives $\int_a^b(q'-H_p)_j\beta\,dt=0$ for every such bump, hence the continuous function $(q'-H_p)_j$ vanishes on $(a,b)$ and, by continuity, on $[a,b]$; as $j$ was arbitrary, $q'=H_p$ on $[a,b]$. Now take $\delta p=0$ and let $\delta q$ run through bumps in a single component (admissible, since these vanish near the endpoints): step 1.1 gives $\int_a^b(-p'-H_q)_j\beta\,dt=0$, hence $p'=-H_q$ on $[a,b]$. This proves clause 2. [F2, step 1.1, algebra]

3.1 Clause 3: for a $C^2$ curve $q$ and $p(t)=\mathcal L_v(t,q,q')$, the path $(q,p)$ is $C^1$ and [F3] gives $A(q,p)=\int_a^b\mathcal L(t,q,q')dt=S(q)$. Therefore the phase action along this path equals the Lagrangian action, and the two stationarity notions correspond: by clause 2, $(q,p)$ is stationary for $A$ iff it solves Hamilton's equations; by [F3] this holds iff $q$ solves the Euler–Lagrange equation with $p=\mathcal L_v(t,q,q')$; and by [F4] this holds iff $q$ is stationary for $S$. [F3, F4, step 2.1, step 2.2] ∎

## Remarks

- The identification in clause 3 is made on the actual inverse branch: the path in phase space is
  the Legendre image of the Lagrangian path, so no dynamical assumption such as $p=q'$ is built
  into the statement; the elimination uses the inverse relation of the hyperregular chart, which
  is exactly the hypothesis under which the branch exists globally.

- The phase action has free $p$ endpoints and fixed $q$ endpoints. This is why the $p$-variations
  require no boundary condition and the $q$-variations do: the boundary term produced by
  integrating $\int p\cdot\delta q'$ vanishes precisely because $\delta q$ vanishes at the
  endpoints, while no corresponding term arises from $\delta p$.
