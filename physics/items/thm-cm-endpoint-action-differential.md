---
id: thm-cm-endpoint-action-differential
kind: theorem
title: "The endpoint action function of a smooth family of extremals has differential $dW=p\\,dq-H\\,dt$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-oriented-integral, thm-additivity-over-subintervals, thm-clairaut-schwarz-mixed-partials, def-cm-time-dependent-lagrangian-and-action, def-cm-legendre-map-in-a-time-dependent-chart, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, thm-ftc-first-part, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-darboux-integral, thm-continuous-implies-integrable, thm-linearity-of-the-integral, def-interval, def-euclidean-inner-product, def-jacobian-matrix-and-gradient]
dependency_roles:
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 9.2 (Hamilton's Principle of Stationary Action: the endpoint variation p dq - H dt) and Section 15.4 (Hamilton-Jacobi Theory)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 'The Hamilton-Jacobi Equation' (W as a function of the final configuration, with W_q^final = p^final), printed pages 121-123"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $J\subseteq\mathbb R$ and $U\subseteq\mathbb R^n$ be open and nonempty, and let
$\mathcal L:J\times U\times\mathbb R^n\to\mathbb R$ be a fibre-full $C^2$ time-dependent
Lagrangian chart that is hyperregular, with inverse Legendre branch $v$ and Hamiltonian
$H(t,q,p)=p\cdot v(t,q,p)-\mathcal L(t,q,v(t,q,p))$
([[def-cm-legendre-map-in-a-time-dependent-chart]],
[[def-cm-time-dependent-lagrangian-and-action]]). Fix $t_0\in J$ and $q_0\in U$, let $T\subseteq J\setminus\{t_0\}$ be open and nonempty, and let
$Q\subseteq U$ be open and nonempty, let $D\subseteq T\times Q\times J$ be open, and let
$X:D\to U$ be a $C^2$ map such that for every $(t,q)\in T\times Q$ the points $(t,q,t)$ and
$(t,q,t_0)$ lie in $D$, the closed interval with endpoints $t_0$ and $t$ is contained in the
$s$-section $D_{t,q}:=\{s\in J:(t,q,s)\in D\}$, which is required to be an open interval, and:

1. $X(t,q,t)=q$ and $X(t,q,t_0)=q_0$;
2. $s\mapsto X(t,q,s)$ is a solution of the Euler–Lagrange equation of $\mathcal L$ on the open
   interval $D_{t,q}$, i.e. $\bigl(s,X(t,q,s),\partial_sX(t,q,s)\bigr)\in J\times U\times\mathbb R^n$
   and $E_{\mathcal L}\bigl(X(t,q,\cdot)\bigr)=0$ on $D_{t,q}$.

Define

$$p(t,q):=\mathcal L_v\bigl(t,q,\partial_sX(t,q,t)\bigr),\qquad W(t,q):=\int_{t_0}^{t}\mathcal L\bigl(s,X(t,q,s),\partial_sX(t,q,s)\bigr)ds\qquad\bigl((t,q)\in T\times Q\bigr).$$

Then $W$ is of class $C^1$ on $T\times Q$ and

$$W_q(t,q)=p(t,q),\qquad W_t(t,q)=-H\bigl(t,q,p(t,q)\bigr)\qquad\bigl((t,q)\in T\times Q\bigr).$$

## Facts & Assumptions

**Given:** The chart data $\mathcal L$ with its inverse branch $v$ and Hamiltonian $H$, the fixed data $t_0,q_0$, the open set $D$ and the $C^2$ family $X$, and the functions $p$ and $W$ displayed in the Statement.

[F1] The integrand $G(t,q,s):=\mathcal L(s,X(t,q,s),\partial_sX(t,q,s))$ is of class $C^1$ on $D$, because $\mathcal L$ is $C^2$ and $X$ is $C^2$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]). Mixed second partial derivatives of $X$ commute by [[thm-clairaut-schwarz-mixed-partials]].

[F2] Integrals with reversed limits mean $\int_{t_0}^{u}G=-\int_u^{t_0}G$ ([[def-oriented-integral]]). Differentiation of an integral with a variable upper limit and parameters
([[thm-ftc-first-part]], [[thm-additivity-over-subintervals]], [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]],
[[thm-chain-rule-for-total-derivatives]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]]): for
$\Phi(u,v,q):=\int_{t_0}^{u}G(v,q,s)\,ds$ one has
$$\Phi_u=G(v,q,u),\qquad\Phi_v=\int_{t_0}^{u}\partial_vG(v,q,s)\,ds,\qquad \Phi_q=\int_{t_0}^{u}\partial_qG(v,q,s)\,ds,$$
locally on a parameter rectangle containing the integration segment. For the upper-limit derivative, additivity writes $\Phi(u,v,q)$ as a primitive with a fixed lower endpoint minus its value at $t_0$; for reversed limits the parameter derivatives follow by antisymmetry. The displayed partial derivatives are continuous because their integrands are continuous on a compact rectangle. Since $W(t,q)=\Phi(t,t,q)$, the chain rule gives that $W$ is $C^1$ and
$$W_t(t,q)=G(t,q,t)+\int_{t_0}^{t}\partial_tG(t,q,s)\,ds,\qquad W_q(t,q)=\int_{t_0}^{t}\partial_qG(t,q,s)\,ds .$$

[F3] Integration by parts along the $s$-variable ([[thm-integration-by-parts]], [[thm-linearity-of-the-integral]], [[def-darboux-integral]], [[thm-continuous-implies-integrable]], [[def-vector-valued-derivative-and-integral]], [[def-interval]]): for $C^1$ functions $u,w$ on the relevant open $s$-interval, $\int_{t_0}^{t}u\,\partial_sw\,ds=[uw]_{t_0}^{t}-\int_{t_0}^{t}(\partial_su)w\,ds$.

[F4] The Euler–Lagrange equation along $s\mapsto X(t,q,s)$ says $\partial_s\bigl(\mathcal L_v(s,X,\partial_sX)\bigr)=\mathcal L_q(s,X,\partial_sX)$ for every $(t,q,s)\in D$ ([[def-cm-time-dependent-lagrangian-and-action]]); the notation $\mathcal L_q,\mathcal L_v$ is that of [[def-jacobian-matrix-and-gradient]] and [[def-euclidean-inner-product]].

[F5] Endpoint differentiation ([[thm-chain-rule-for-total-derivatives]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]): the identities
$X(t,q,t)=q$ and $X(t,q,t_0)=q_0$ hold for every $(t,q)\in T\times Q$, and $X$ is $C^2$, so they
may be differentiated in $q$ and in $t$; this gives
$$\partial_qX(t,q,t)=I_n,\qquad \partial_qX(t,q,t_0)=0,\qquad \partial_tX(t,q,t_0)=0,\qquad \partial_tX(t,q,t)+\partial_sX(t,q,t)=0 .$$

## Proof

**Proof technique:** direct; differentiate the endpoint integral in $q$ and in $t$ and use the Euler–Lagrange equation to remove the interior terms.

1.1 At each $(t,q)\in T\times Q$, the compact integration segment lies in open $D$. A finite cover by product neighbourhoods yields a common parameter neighbourhood and an open $s$-interval containing that segment where $G$ is $C^1$; shrinking the parameter neighbourhood also covers nearby upper limits. Thus [F2] applies locally, with the integral oriented if $t<t_0$, and $W$ is $C^1$. Put $J_q:=\partial_qX$ and $P(s):=\mathcal L_v(s,X,\partial_sX)$, both evaluated at fixed $(t,q)$. Using column gradients, $$W_q=\int_{t_0}^{t}\bigl[J_q^{\mathsf T}\mathcal L_q+(\partial_sJ_q)^{\mathsf T}P\bigr]ds=[J_q^{\mathsf T}P]_{t_0}^{t}+\int_{t_0}^{t}J_q^{\mathsf T}(\mathcal L_q-\partial_sP)ds=[J_q^{\mathsf T}P]_{t_0}^{t}.$$ The middle identity is componentwise integration by parts [F3], and the last uses [F4]. [F1, F2, F3, F4, algebra]

1.2 For $W_t$, [F2] gives $$W_t(t,q)=G(t,q,t)+\int_{t_0}^{t}\Bigl[\mathcal L_q\cdot\partial_tX +\mathcal L_v\cdot\partial_s\partial_tX\Bigr]ds=\mathcal L\bigl(t,q,\partial_sX(t,q,t)\bigr) +\Bigl[\mathcal L_v\cdot\partial_tX\Bigr]_{s=t_0}^{s=t},$$ where the integral was integrated by parts and cancelled by [F4]. [F1, F2, F3, F4, algebra]

2.1 The boundary terms of step 1.1: differentiating $X(t,q,t)=q$ with respect to $q$ gives $\partial_qX(t,q,t)=I_n$, so the first term is $p(t,q)$; and differentiating $X(t,q,t_0)=q_0$ with respect to $q$ gives $\partial_qX(t,q,t_0)=0$, so the second term vanishes. Thus $W_q(t,q)=p(t,q)$. [F5, step 1.1, given, algebra]

3.1 The boundary terms of step 1.2: differentiating $X(t,q,t_0)=q_0$ with respect to $t$ gives $\partial_tX(t,q,t_0)=0$, so the lower term vanishes; and differentiating the identity $X(t,q,t)=q$ with respect to $t$ gives $\partial_tX(t,q,t)+\partial_sX(t,q,t)=0$. Hence $$W_t(t,q)=\mathcal L(t,q,v(t,q))-p(t,q)\cdot v(t,q)=-H\bigl(t,q,p(t,q)\bigr),$$ with $v(t,q):=\partial_sX(t,q,t)$ and $p(t,q)=\mathcal L_v(t,q,v(t,q))$, using $H(t,q,p)=p\cdot v(t,q,p)-\mathcal L(t,q,v(t,q,p))$ and the inverse relation $v(t,q,\mathcal L_v(t,q,v(t,q)))=v(t,q)$. [F5, step 1.2, given, algebra] ∎

## Remarks

- The two identity clauses determine the first variation of $W$ completely: $dW=p\,dq-H\,dt$ at every point of $T\times Q$, where $p$ is the momentum of the selected extremal. This is a conditional statement: it presumes the $C^2$ family $X$ of extremals with the endpoint property, and its proof never asserts that such a family exists.

- The existence of families with the required endpoint property is the subject of [[prop-cm-local-action-family-exists]], where the hypothesis used is invertibility of the derivative of the endpoint map with respect to the initial momentum. Several extremals may share the same endpoint data while a selected branch still forms a single-valued $C^2$ family. A singular derivative of the endpoint map prevents applying that inverse-function argument, but does not by itself prove that no such family exists. The present theorem applies to every given family satisfying its hypotheses.

- The identities $W_q=p$ and $W_t=-H(t,q,W_q)$ are the Hamilton–Jacobi relations for the endpoint action on the chart. The second follows from the first by substitution, since $p=W_q$; the theorem proves the pair directly.
