---
id: lem-tdmath-variational-flow-and-commutation
kind: lemma
title: "Variational equations and commuting local flows"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-tdmath-local-contraction-flow, thm-chain-rule-for-total-derivatives, thm-continuous-implies-integrable, thm-newton-leibniz-with-interior-derivative, thm-heine-borel-rn, thm-heine-cantor-metric, thm-euclidean-space-complete, thm-banach-fixed-point, thm-continuous-partial-derivatives-imply-total-differentiability]
dependency_roles:
  lem-tdmath-local-contraction-flow: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33.1, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Pavel Etingof, Lie groups and Lie algebras, arXiv:2201.09397v5, §10.1, Theorem 10.6 and proof, pp. 55–57"
      url: "https://arxiv.org/pdf/2201.09397v5"
verification:
  precheck: n/a
---

## Statement

Let $X$ be a $C^2$ vector field on an open subset of $\mathbb R^m$, where $C^2$ means that total derivatives through order two exist and are continuous. Its local flow $\phi_X^t(q)$ from [[lem-tdmath-local-contraction-flow]] is $C^2$ jointly in $(t,q)$, and $J(t,q):=D_q\phi_X^t(q)$ satisfies $\partial_tJ=DX(\phi_X^t(q))J$ and $J(0,q)=I$. For two such fields define their bracket by $[X,Y](q):=DY(q)X(q)-DX(q)Y(q)$. If $[X,Y]=0$ on a neighborhood and all local maps stay there, then $D_q\phi_X^t(q)Y(q)=Y(\phi_X^t(q))$ and their local flows commute: $\phi_X^t\circ\phi_Y^s=\phi_Y^s\circ\phi_X^t$ whenever both sides are defined.

## Facts & Assumptions

**Given:** The stated Euclidean domains and $C^2$ regularity; for $m\ge1$ use the local contraction flow of [[lem-tdmath-local-contraction-flow]], and for $m=0$ construct the flow directly in step 1.1.

[F1] [[lem-tdmath-local-contraction-flow]]: for $m\ge1$, a continuous-derivative vector field has a unique local flow, a Volterra integral equation, locally Lipschitz dependence on initial data, and the local flow law.

[F2] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps, $D(g\circ f)=Dg\circ Df$ at the corresponding point.

[F3] [[thm-continuous-implies-integrable]] and [[thm-newton-leibniz-with-interior-derivative]]: continuous coefficient functions are integrable on compact intervals, and an integrable interior derivative evaluates by its endpoint increment.

[F4] [[thm-heine-borel-rn]] and [[thm-heine-cantor-metric]]: a closed bounded Euclidean ball is compact, and continuous finite-dimensional derivative fields on it are uniformly continuous.

[F5] [[thm-euclidean-space-complete]]: every Euclidean Cauchy sequence in a finite-dimensional real coordinate space converges. Consequently, continuous curves into the finite-dimensional matrix and bilinear-map spaces below are complete in the supremum operator norm: a supremum-Cauchy sequence is coordinatewise uniformly Cauchy, its coordinate limits are continuous by uniform convergence, and the bounds $\|A\|_{\rm op}\le\sum_{i,j}|A_{ij}|$ and $\|B\|_{\rm op}\le\sum_{k,i,j}|B_{kij}|$ turn coordinatewise uniform convergence into uniform operator-norm convergence.

[F6] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space to itself has a unique fixed point.

[F7] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: if all first partial derivatives of a map exist on a neighborhood and are continuous at a point, the map is totally differentiable there with the Jacobian as derivative.

## Proof

**Given:** In the case $m\ge1$, choose a compact closed ball $K$ inside the field domain and a time interval $[-\delta,\delta]$ so all flow points and line segments used below remain in $K$. By [F4], $K$ is compact; continuity of $DX$ and $D^2X$ makes $L:=\sup_K\|DX\|$ and $M_2:=\sup_K\|D^2X\|$ finite. Shrink $\delta$ so $L\delta<1$. Write $M_m(\mathbb R)=\mathbb R^{m\times m}$ for real matrices acting as linear maps on $\mathbb R^m$, and write $\operatorname{Bil}(\mathbb R^m\times\mathbb R^m,\mathbb R^m)$ for bilinear maps. Matrix and bilinear-map norms are operator norms induced by the Euclidean norm; vector-valued integrals are componentwise Riemann integrals.

1.1 For $m=0$, define $\mathbb R^0$ as the singleton consisting of the empty coordinate tuple, denoted $0$, with its unique vector-space structure and norm $\|0\|=0$. Its open subsets are empty or the singleton; the empty domain has no initial point and all assertions there are vacuous. On the singleton both fields necessarily equal zero. Define $\phi_X^t(0)=\phi_Y^t(0)=0$ for every real $t$. These are the unique solution curves and satisfy the flow law. Every map into this zero vector space has the unique zero linear map as total derivative, since its differentiability remainder is identically zero; iterating gives continuous derivatives through order two. Thus the flows are jointly $C^2$, $J$ is the unique endomorphism of $\mathbb R^0$, which is also its identity $I_0$, and $\partial_tJ=DX(\phi_X)J=0$. The bracket and both transport expressions are zero, and both flow compositions are the identity. This proves every assertion for $m=0$ without invoking the positive-dimensional suppliers. In the remaining steps assume $m\ge1$. [given, construct, algebra]

1.2 For $p$ near $q$ put $\Delta_h(t):=\phi_X^t(p+h)-\phi_X^t(p)$. The integral equations from [F1] and the one-variable fundamental theorem applied to $\theta\mapsto X(\phi_X^s(p)+\theta\Delta_h(s))$ give $$\Delta_h(t)=h+\int_0^t A_h(s)\Delta_h(s)\,ds,\quad A_h(s):=\int_0^1DX(\phi_X^s(p)+\theta\Delta_h(s))\,d\theta.$$ The segments lie in $K$ after shrinking the initial ball and time interval. The local Lipschitz estimate in [F1] gives $\sup_t\|\Delta_h(t)\|=O(\|h\|)$. Uniform continuity of $DX$ on $K$ from [F4] makes $A_h(s)$ converge uniformly to $DX(\phi_X^s(p))$ as $h\to0$. [F1, F2, F3, F4]

2.1 Let $\mathcal I=[-\delta,\delta]$ and let $\mathcal C_1=C(\mathcal I,M_m(\mathbb R))$ with the supremum operator norm. This space is complete: for a supremum-Cauchy sequence $(J_k)$, each matrix entry at each $s$ is Cauchy because $|A_{ij}|\le\|A\|_{\mathrm{op}}$; [F5] applied to the $m^2$ entries gives a pointwise matrix limit $J(s)$, and the uniform Cauchy estimate passed to each entry gives uniform convergence of all entries. Each limit entry is continuous by the $\varepsilon/3$ argument for uniform limits of continuous functions. The finite-coordinate bound $\|A\|_{\mathrm{op}}\le\sum_{i,j}|A_{ij}|$ then gives uniform operator-norm convergence, so $J\in\mathcal C_1$. The space is nonempty because it contains the constant zero matrix curve. Put $A_0(s):=DX(\phi_X^s(p))$ and define $T(J)(t):=I_m+\int_0^t A_0(s)J(s)\,ds$. It maps $\mathcal C_1$ into itself and is a contraction with constant at most $L\delta<1$. By [F6], it has a unique fixed point $J$. Define $R_h(t):=\Delta_h(t)-J(t)h$. Subtracting the integral equations and writing the integrand difference as $(A_h-A_0)\Delta_h+A_0R_h$ gives $\|R_h\|_\infty\le L\delta\|R_h\|_\infty+\delta\|A_h-A_0\|_\infty\|\Delta_h\|_\infty=o(\|h\|)$, by step 1.2 and uniform continuity of $DX$ on $K$. Thus $D_q\phi_X^t(p)=J(t,p)$. The continuous integrand in the equation for $J$ has average over $[t,t+h]$ tending to its value at $t$: the quotient error is at most $\sup_{|s-t|\le|h|}\|DX(\phi_X^s(p))J(s,p)-DX(\phi_X^t(p))J(t,p)\|$, which tends to zero. Thus $\partial_tJ=DX(\phi_X^t(p))J$ and $J(0,p)=I_m$. [step 1.2, F1, F3, F4, F5, F6, algebra]

3.1 Write $J_h(s)=D_q\phi_X^s(p+h)$ and $J_0(s)=D_q\phi_X^s(p)$. Subtracting their integral equations gives $J_h-J_0=\int_0^t A_0(J_h-J_0)\,ds+\int_0^t(A_h-A_0)J_h\,ds$, where $A_h=DX(\phi_h)$, $A_0=DX(\phi_0)$, $\phi_h=\phi_X^s(p+h)$, and $\phi_0=\phi_X^s(p)$. The line-segment chain rule and Newton–Leibniz supplier claims in [F2]–[F3], applied entrywise to $DX$ along the segment from $\phi_0$ to $\phi_h$, give the exact formula $A_h-A_0=\int_0^1D^2X(\phi_0+\theta(\phi_h-\phi_0))[\phi_h-\phi_0,\cdot]\,d\theta$ and therefore $\|A_h-A_0\|_\infty\le M_2\|\phi_h-\phi_0\|_\infty$. By [F1], $\|\phi_h-\phi_0\|_\infty=O(\|h\|)$; the integral equation gives $\|J_h\|_\infty\le(1-L\delta)^{-1}$. Absorbing the first integral using $L\delta<1$ yields $J_h-J_0=O(\|h\|)$ uniformly in time. Uniform continuity of $D^2X$ on $K$, the same line-segment formula, and $\phi_h-\phi_0=J_0h+o(\|h\|)$ from step 2.1 now give $A_h-A_0=D^2X(\phi_0)[J_0h,\cdot]+o(\|h\|)$ uniformly, and hence $(A_h-A_0)J_h=D^2X(\phi_0)[J_0h,J_0(\cdot)]+o(\|h\|)$. For each base point $p$, define $\mathcal C_2=C(\mathcal I,\operatorname{Bil}(\mathbb R^m\times\mathbb R^m,\mathbb R^m))$ with the supremum bilinear-operator norm. The coordinatewise completeness proof of step 2.1 applies with $m^3$ coefficients, so $\mathcal C_2$ is complete; it is nonempty because it contains the zero bilinear-map curve. The map $(\mathcal T K)(t)[u,v]:=\int_0^t\big(A_0(s)K(s)[u,v]+D^2X(\phi_0(s))[J_0(s)u,J_0(s)v]\big)\,ds$ is a contraction with constant at most $L\delta$ on $\mathcal C_2$. By [F6] it has a unique fixed point $K_p$. Subtracting its equation evaluated at $(h,v)$ from the equation for $J_h-J_0$ gives $R_h:=J_h-J_0-K_p[h,\cdot]$ with $\|R_h\|_\infty\le L\delta\|R_h\|_\infty+o(\|h\|)$, so $R_h=o(\|h\|)$. Therefore $D_pJ[h](v)=K_p[h,v]$, and $K_p$ is the second derivative $D_q^2\phi_X$. Its equation makes it bilinear. The coefficients, forcing, $\phi_p$, and $J_p$ vary continuously in $p$ uniformly for $s\in\mathcal I$; for fixed-point maps $T_p$ with contraction constant $L\delta$, $\|K_p-K_{p'}\|_\infty\le(1-L\delta)^{-1}\|T_p(K_{p'})-T_{p'}(K_{p'})\|_\infty\to0$. The integral equation gives continuity in $t$ as well. Thus the second derivatives in $q$ are continuous. [step 2.1, F1, F2, F3, F4, F5, F6, algebra]

3.2 Let $V(t):=Y(\phi_X^t(q))$ and $W(t):=D_q\phi_X^t(q)Y(q)$. By [F2] and the variational equation, $V'=DY(\phi_X^t)X(\phi_X^t)$ and $W'=DX(\phi_X^t)W$. The identity $[X,Y]=0$ makes $V$ solve this same linear equation with $V(0)=W(0)=Y(q)$; uniqueness from the contraction argument gives $D_q\phi_X^t(q)Y(q)=Y(\phi_X^t(q))$. [F1, F2, step 2.1]

4.1 On the open interior of the chosen time and initial-point neighborhood, step 2.1 gives $D_q\phi_X=J$ and $\partial_tJ=DX(\phi_X)J$, while step 3.1 gives the continuous second derivative $D_qJ=K$. The chain rule [F2] applied to $\partial_t\phi_X=X(\phi_X)$ gives $\partial_{q_i}\partial_t\phi_X=DX(\phi_X)Je_i$, and the variational equation gives $\partial_t\partial_{q_i}\phi_X=DX(\phi_X)Je_i$; also $\partial_t^2\phi_X=DX(\phi_X)X(\phi_X)$. Hence all first- and second-order coordinate partial derivatives of $\phi_X$ exist and are continuous there. Apply [F7] pointwise first to $\phi_X$ and then to its first-derivative map: its Jacobian is the matrix of first partials, and the Jacobian of that map is the continuous array of second partials. Thus $\phi_X$ is jointly $C^2$. [F2, F7, step 2.1, step 3.1]

5.1 For fixed $t$, the curve $s\mapsto\phi_X^t(\phi_Y^s(q))$ has derivative $D\phi_X^t\,Y(\phi_Y^s(q))=Y(\phi_X^t(\phi_Y^s(q)))$ by step 3.2, and starts at $\phi_X^t(q)$. It is therefore the $Y$-flow from that initial point; IVP uniqueness from [F1] yields $\phi_X^t\phi_Y^s(q)=\phi_Y^s\phi_X^t(q)$. [step 3.2, F1, F2] ∎
