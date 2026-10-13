---
id: prop-cm-coordinate-covariance-of-the-euler-lagrange-expression
kind: proposition
title: "Coordinate covariance of the Euler-Lagrange expression under time-dependent point transformations"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-time-dependent-lagrangian-and-action, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-total-derivative-in-euclidean-space, def-matrix-product-and-identity-matrix, def-invertible-euclidean-linear-map, def-linear-map, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.3 (Lagrange Equations from d'Alembert's Principle) and Section 5.8 (Generalized coordinates in Variational Calculus)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.2 'Changing Coordinate Systems' (Lagrange's equations hold in any coordinate system, with the rotating-coordinate example), printed pages 13-16"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R\times\mathbb R^n$ be open and nonempty, and let
$X:\Omega\to\mathbb R^n$ be of class $C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with
$X_q(t,q)$ invertible for every $(t,q)\in\Omega$
([[def-invertible-euclidean-linear-map]], [[def-linear-map]]). Let $O_x\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^n$
be open and let $L:O_x\to\mathbb R$ be of class $C^2$. Put

$$O:=\bigl\{(t,q,v)\in\Omega\times\mathbb R^n:\bigl(t,X(t,q),X_t(t,q)+X_q(t,q)v\bigr)\in O_x\bigr\},\qquad \widetilde L(t,q,v):=L\bigl(t,X(t,q),X_t(t,q)+X_q(t,q)v\bigr).$$

Then:

1. $O$ is open, $O\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^n$, and $\widetilde L$ is of
   class $C^2$ on $O$;
2. with $w:=X_t(t,q)+X_q(t,q)v$ one has
   $\widetilde L_v(t,q,v)=X_q(t,q)^{\mathsf T}L_v(t,X(t,q),w)$;
3. $\widetilde L_q(t,q,v)=X_q^{\mathsf T}L_x+\bigl(X_{tq}+X_{qq}[v]\bigr)^{\mathsf T}L_v$, where
   $X_{tq}$ is the $t$-derivative of $X_q$ and $X_{qq}[v]$ is the matrix with entries
   $\sum_j\partial_j\partial_iX_k(t,q)v_j$, all evaluated at $(t,q)$ and $L_x,L_v$ at
   $(t,X(t,q),w)$;
4. **(transport)** let $a<b$ be reals and let $q:[a,b]\to\mathbb R^n$ be a $C^2$ curve with
   $(t,q(t),q'(t))\in O$ for all $t\in[a,b]$, put $x(t):=X(t,q(t))$, and define
   $P(t):=\widetilde L_v(t,q(t),q'(t))$ and $p(t):=L_v(t,x(t),x'(t))$, which are $C^1$. Then

$$\frac{d}{dt}P(t)-\widetilde L_q\bigl(t,q(t),q'(t)\bigr) =X_q\bigl(t,q(t)\bigr)^{\mathsf T}\Bigl(\frac{d}{dt}p(t)-L_x\bigl(t,x(t),x'(t)\bigr)\Bigr) \qquad(t\in[a,b]);$$

   consequently, since $X_q(t,q(t))$ is invertible, the Euler–Lagrange expression of
   $\widetilde L$ vanishes along $q$ if and only if the Euler–Lagrange expression of $L$ vanishes
   along $x$.

## Facts & Assumptions

**Given:** The open sets $\Omega,O_x$, the $C^3$ map $X$ with everywhere invertible $X_q$, the $C^2$ Lagrangian $L$, a $C^2$ curve $q:[a,b]\to\mathbb R^n$ with $(t,q(t),q'(t))\in O$, and the shorthand $x(t):=X(t,q(t))$.

[F1] Compositions and finite products of $C^r$ maps are $C^r$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]]), and a map with continuous partial derivatives is totally differentiable with the Jacobian as derivative ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] The chain rule for total derivatives ([[thm-chain-rule-for-total-derivatives]]) gives the derivatives of all composites below; in particular $x'(t)=X_t(t,q(t))+X_q(t,q(t))q'(t)$, so that $x'(t)=w(t,q(t),q'(t))$, and $\frac{d}{dt}X_q(t,q(t))=X_{qt}(t,q(t))+X_{qq}(t,q(t))[q'(t)]$ as matrices.

[F3] Mixed second partials of a $C^2$ function commute ([[thm-clairaut-schwarz-mixed-partials]]): since $X$ is $C^3$, its mixed second partials are $C^1$ and satisfy $X_{qt}=X_{tq}$ and $\partial_j\partial_iX_k=\partial_i\partial_jX_k$.

[F4] If a square matrix $A$ is invertible, then $A^{\mathsf T}u=0$ implies $u=0$: indeed $A^{\mathsf T}u=0$ gives $u\cdot Aw=0$ for all $w$, and surjectivity of $A$ gives $u\cdot u=0$, hence $u=0$ ([[def-invertible-euclidean-linear-map]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[def-vector-valued-derivative-and-integral]], [[def-interval]]).

## Proof

**Proof technique:** direct; compute the transformed gradients and compare the two Euler–Lagrange expressions along a curve, using the equality of mixed partials of $X$.

1.1 $O$ is the preimage under the continuous map $(t,q,v)\mapsto(t,X(t,q),X_t(t,q)+X_q(t,q)v)$ of the open set $O_x$, hence open; and $\widetilde L$ is the composite of the $C^2$ map $L$ with that map, which is $C^2$ because $X$ is $C^3$ and $v$ enters linearly. This proves clause 1. [F1, F2, algebra]

1.2 Clause 2: by the chain rule and the definition of $w$, $$\frac{\partial\widetilde L}{\partial v_j}=\sum_kL_{v_k}\bigl(t,X,w\bigr)\frac{\partial w_k}{\partial v_j} =\sum_kL_{v_k}\bigl(t,X,w\bigr)X_{kj}(t,q),$$ which is the $j$-th entry of $X_q^{\mathsf T}L_v$. [F2, algebra]

1.3 Clause 3: differentiating $\widetilde L$ in $q_i$ gives $$\frac{\partial\widetilde L}{\partial q_i} =\sum_kL_{x_k}\frac{\partial X_k}{\partial q_i} +\sum_kL_{v_k}\Bigl(\partial_iX_{t,k}+\sum_j\partial_iX_{k,j}v_j\Bigr) =\bigl(X_q^{\mathsf T}L_x\bigr)_i+\bigl((X_{tq}+X_{qq}[v])^{\mathsf T}L_v\bigr)_i,$$ as displayed. [F2, F3, algebra]

2.1 Clause 4: by clause 2, $P(t)=X_q(t,q(t))^{\mathsf T}p(t)$. Differentiating by [F2] and using $X_{qt}=X_{tq}$ from [F3], $$\frac{d}{dt}P=\Bigl(X_{qt}(t,q)+X_{qq}(t,q)[q']\Bigr)^{\mathsf T}p+X_q^{\mathsf T}\frac{d}{dt}p =\Bigl(X_{tq}(t,q)+X_{qq}(t,q)[q']\Bigr)^{\mathsf T}p+X_q^{\mathsf T}\frac{d}{dt}p .$$ By clause 3 evaluated at $(t,q(t),q'(t))$, $$\widetilde L_q(t,q,q')=X_q^{\mathsf T}L_x+\Bigl(X_{tq}+X_{qq}[q']\Bigr)^{\mathsf T}L_v .$$ Subtracting and using $p=L_v(t,x,x')$ cancels the bracket terms and gives the displayed transport identity. [F2, F3, step 1.2, step 1.3, algebra]

3.1 Consequence: if $X_q(t,q(t))$ is invertible, then by [F4] the identity $X_q^{\mathsf T}u=0$ implies $u=0$; applying this to $u=\frac{d}{dt}p-L_x(t,x,x')$, the vanishing of $\frac{d}{dt}P-\widetilde L_q$ is equivalent to the vanishing of $\frac{d}{dt}p-L_x$. This proves clause 4. [F4, step 2.1, given] ∎

## Remarks

- The transformation is restricted to the configuration variables; no transformation of the time variable is performed here. The general point transformation that also changes time, together with the resulting Noether charge, is treated in [[thm-cm-point-noether-identity-with-time-reparametrization]].

- The $C^3$ hypothesis makes $(t,q,v)\mapsto(t,X,X_t+X_qv)$ a $C^2$ map and hence ensures the transformed Lagrangian is $C^2$. The mixed second derivatives used in transport already commute for $C^2$ $X$; that weaker assumption alone does not ensure the claimed $C^2$ transformed chart.
