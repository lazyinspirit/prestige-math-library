---
id: prop-cm-hamiltonian-branch-identities
kind: proposition
title: "The Hamiltonian on an inverse Legendre branch: differential, equivalence with the Euler-Lagrange equation, and the energy identity"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-time-dependent-lagrangian-and-action, def-cm-legendre-map-in-a-time-dependent-chart, lem-cm-legendre-map-local-invertibility, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, cor-zero-derivative-implies-constant, def-interval, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-abs-value]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2 (Legendre Transformation between Lagrangian and Hamiltonian mechanics) and Section 8.3 (Hamilton's Equations of Motion)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.1.1-4.1.2 (the Legendre transform identities and Hamilton's equations), printed pages 82-84"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathcal L:J\times U\times\mathbb R^n\to\mathbb R$ be a fibre-full $C^2$ time-dependent
Lagrangian chart that is hyperregular, with inverse Legendre branch $v(t,q,p)$ and Hamiltonian
$H(t,q,p)=p\cdot v(t,q,p)-\mathcal L(t,q,v(t,q,p))$
([[def-cm-legendre-map-in-a-time-dependent-chart]]). Then:

1. **(differential)** for every $(t,q,p)\in J\times U\times\mathbb R^n$,

$$H_p(t,q,p)=v(t,q,p),\qquad H_q(t,q,p)=-\mathcal L_q\bigl(t,q,v(t,q,p)\bigr),\qquad H_t(t,q,p)=-\mathcal L_t\bigl(t,q,v(t,q,p)\bigr);$$

2. **(equivalence)** for a $C^1$ curve $(q,p):I\to U\times\mathbb R^n$ on an open interval $I$
   ([[def-interval]], [[def-vector-valued-derivative-and-integral]]) the following are
   equivalent:
   (a) $q$ is $C^2$ and $E_{\mathcal L}(q)(t)=0$ for all $t\in I$, with
   $p(t)=\mathcal L_v\bigl(t,q(t),q'(t)\bigr)$;
   (b) $(q,p)$ satisfies Hamilton's equations
   $q'(t)=H_p\bigl(t,q(t),p(t)\bigr)$ and $p'(t)=-H_q\bigl(t,q(t),p(t)\bigr)$ for all $t\in I$;
3. **(energy)** along any curve satisfying (a) or (b), the function
   $e(t):=\mathcal L_v(t,q,q')\cdot q'(t)-\mathcal L(t,q(t),q'(t))$ equals $H(t,q(t),p(t))$ and
   satisfies $e'(t)=-\mathcal L_t(t,q(t),q'(t))$ on $I$; in particular, if $\mathcal L_t$ vanishes
   on the set $\{(s,q(s),q'(s)):s\in I\}$, then $e$ is constant on $I$.

## Facts & Assumptions

**Given:** The hyperregular chart data $\mathcal L$, its inverse branch $v$, the Hamiltonian $H$,
and a $C^1$ curve $(q,p):I\to U\times\mathbb R^n$.

[F1] Hyperregularity gives a $C^1$ map $v:J\times U\times\mathbb R^n\to\mathbb R^n$ with
$$\mathcal L_v\bigl(t,q,v(t,q,p)\bigr)=p\qquad\text{for all }(t,q,p)\in J\times U\times\mathbb R^n,$$
and $H$ is $C^1$; the chain rule computes derivatives of the composites
$(t,q,p)\mapsto\mathcal L(t,q,v(t,q,p))$ and $(t,q,p)\mapsto v_j(t,q,p)$
([[def-cm-legendre-map-in-a-time-dependent-chart]], [[thm-chain-rule-for-total-derivatives]],
[[thm-ck-euclidean-maps-closed-under-algebra-and-composition]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] The Euler–Lagrange expression and the meaning of its vanishing are those of
[[def-cm-time-dependent-lagrangian-and-action]]: $E_{\mathcal L}(q)=\mathcal L_q(t,q,q')-\frac{d}{dt}\bigl(\mathcal L_v(t,q,q')\bigr)$,
and $q$ is a $C^2$ curve in the extension sense used there. Partial derivatives in the first and
second slots are the entries of the gradient in the sense of
[[def-jacobian-matrix-and-gradient]] and [[def-directional-and-partial-derivatives]].

[F3] Newton--Leibniz calculus of curves ([[def-vector-valued-derivative-and-integral]],
[[def-interval]], [[def-euclidean-inner-product]], [[def-abs-value]]): a $C^1$ curve with
identically vanishing derivative on an interval is constant
([[cor-zero-derivative-implies-constant]] applied componentwise), and differentiating an identity
between $C^1$ curves is legitimate term by term.

## Proof

**Proof technique:** direct; differentiate $H$ along the inverse branch using the inverse
relation, then translate between the two systems of equations.

1.1 For fixed $(t,q,p)$ write $v:=v(t,q,p)$. Differentiating the identity $H(t,q,p)=\sum_jp_jv_j(t,q,p)-\mathcal L(t,q,v(t,q,p))$ with respect to $p_k$ by the product and chain rules [F1] gives $$H_{p_k}=v_k+\sum_j\bigl(p_j-\mathcal L_{v_j}(t,q,v)\bigr)\frac{\partial v_j}{\partial p_k}=v_k,$$ because $\mathcal L_{v_j}(t,q,v)=p_j$ for every $j$ by the inverse relation. Hence $H_p(t,q,p)=v(t,q,p)$. [F1, algebra]

1.2 Differentiating the same identity with respect to $q_k$ gives $$H_{q_k}=\sum_j\bigl(p_j-\mathcal L_{v_j}(t,q,v)\bigr)\frac{\partial v_j}{\partial q_k}-\mathcal L_{q_k}(t,q,v)=-\mathcal L_{q_k}(t,q,v),$$ and differentiating with respect to $t$ gives $H_t=\sum_j(p_j-\mathcal L_{v_j})\partial_tv_j-\mathcal L_t(t,q,v)=-\mathcal L_t(t,q,v)$. This proves clause 1. [F1, algebra]

2.1 Clause 2, (a)$\Rightarrow$(b): assume (a). Then $p(t)=\mathcal L_v(t,q(t),q'(t))$ is $C^1$ as a composite of $C^1$ maps, and applying the inverse relation of [F1] with $\bigl(t,q(t),\mathcal L_v(t,q(t),q'(t))\bigr)$ gives $v(t,q(t),p(t))=q'(t)$. Hence by clause 1 $$q'(t)=v(t,q(t),p(t))=H_p(t,q(t),p(t)),$$ and, differentiating the relation $p=\mathcal L_v(t,q,q')$ and using (a), $$p'(t)=\frac{d}{dt}\mathcal L_v(t,q,q')=\mathcal L_q(t,q,q')=-H_q(t,q(t),p(t)),$$ where the last equality is clause 1 with $v(t,q,p)=q'$. Thus (b) holds. [F1, F2, step 1.1, step 1.2, given]

2.2 Clause 2, (b)$\Rightarrow$(a): assume (b). By clause 1, $q'=H_p(t,q,p)=v(t,q,p)$ is a composite of $C^1$ maps, hence $C^1$ on $I$; a curve with $C^1$ derivative is $C^2$, so $q$ is $C^2$. Applying $\mathcal L_v(t,q,\cdot)$ to the identity $q'=v(t,q,p)$ and using the inverse relation gives $\mathcal L_v(t,q,q')=p$, so $p(t)=\mathcal L_v(t,q(t),q'(t))$. Now $p'=-H_q(t,q,p)=\mathcal L_q(t,q,q')$ by clause 1, while also $p'=\frac{d}{dt}\mathcal L_v(t,q,q')$; comparing gives $E_{\mathcal L}(q)(t)=0$ on $I$. Thus (a) holds, and clause 2 is proved. [F1, step 1.1, step 1.2, given]

3.1 Clause 3: for a curve satisfying (a) (equivalently (b)) put $v(t):=q'(t)$ and $p(t):=\mathcal L_v(t,q,q')$. Then $e(t)=p(t)\cdot v(t)-\mathcal L(t,q(t),v(t))=H(t,q(t),p(t))$ by the definition of $H$ and $v(t)=v(t,q(t),p(t))$. By clause 1 and the chain rule, $$e'(t)=H_t+H_q\cdot q'+H_p\cdot p'=-\mathcal L_t-\mathcal L_q\cdot q'+v\cdot p'.$$ Substituting $v=q'$ and $p'=\mathcal L_q(t,q,q')$ from (a) gives $e'=-\mathcal L_t-\mathcal L_q\cdot q'+q'\cdot\mathcal L_q=-\mathcal L_t$. [F1, step 1.1, step 1.2, step 2.1]

4.1 If $\mathcal L_t$ vanishes along the trajectory, then $e'=0$ identically on $I$; by [F3] $e$ is constant on $I$. [F3, step 3.1] ∎

## Remarks

- The identity $dH=-\mathcal L_t\,dt-\mathcal L_q\cdot dq+v\cdot dp$ is the coordinate expression
  of the displayed partial derivatives; it is the form in which the differential is usually
  quoted, and it makes manifest that the inverse-branch Hamiltonian is determined by $\mathcal L$
  and the branch alone.

- Only the fibre bijectivity and $C^1$ inverse of hyperregularity are used. When $\mathcal L$ is
  merely regular, [[lem-cm-legendre-map-local-invertibility]] supplies local branches and the
  same computations hold on each branch; the global statements above are then local, and the
  page keeps the two hypotheses separate.

- The energy $e$ need not be bounded below or above and is not asserted to be a minimum of
  anything; it is conserved exactly when $\mathcal L$ has no explicit time dependence along the
  trajectory, in which case $H$ is a first integral of the branch system.
