---
id: thm-tdmath-local-caratheodory-inaccessibility
kind: theorem
title: "Local horizontal inaccessibility and Pfaff integrability"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tdmath-one-form-and-horizontal-path, lem-tdmath-local-contraction-flow, lem-tdmath-variational-flow-and-commutation, thm-tdmath-codimension-one-frobenius, thm-tdmath-local-implicit-rank, thm-chain-rule-for-total-derivatives, thm-newton-leibniz-with-interior-derivative, def-total-derivative-in-euclidean-space]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  lem-tdmath-local-contraction-flow: mathematical-premise
  lem-tdmath-variational-flow-and-commutation: mathematical-premise
  thm-tdmath-codimension-one-frobenius: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33 and §33.2, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Leonard Tomczak, notes for Jack Smith, Differential Geometry, §§6.2–6.3, Cambridge Part III Michaelmas 2022, full 44-page lecture notes"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
    - title: "David Tong, Statistical Physics, §4.3.4, complete Cambridge lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "E. H. Lieb and J. Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.G, complete monographic review"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
verification:
  precheck: n/a
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$, $n\ge1$, be open and let $\omega$ be a nowhere-zero $C^2$ one-form. Suppose horizontal paths and local reachability are as in [[def-tdmath-one-form-and-horizontal-path]]. The following are equivalent: (a) for every $q\in U$ and every open neighborhood $V$ of $q$ contained in $U$, some $p\in V$ is not horizontally reachable from $q$ by a path contained in $V$; (b) every $q\in U$ has a neighborhood $W$ and $\mu\in C^1(W)$ nowhere zero, $S\in C^2(W)$ with $dS=\mu\omega$. Both conditions are local. This is a mathematical theorem about the declared horizontal-path relation; identifying that relation with physical adiabatic processes is an additional modeling assumption.

## Facts & Assumptions

**Given:** The open domain, the nowhere-zero $C^2$ one-form, and the stated two-sided, finite-piece horizontal paths.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: after a coordinate permutation one may write $\omega=\sum_i a_i dx_i+b dz$ with $b\ne0$ locally; horizontal paths are piecewise $C^1$ curves with $\omega(\dot\gamma)=0$, and reachability is by finite concatenations within the chosen open set.

[F2] [[lem-tdmath-local-contraction-flow]]: local flows exist uniquely, are locally Lipschitz in initial data, and both signs of sufficiently small time are available.

[F3] [[lem-tdmath-variational-flow-and-commutation]]: $C^2$ local flows satisfy the variational equation and the bracket uses $[X,Y]=DY\,X-DX\,Y$.

[F4] [[thm-tdmath-codimension-one-frobenius]]: condition $\omega\wedge d\omega=0$ is equivalent locally to $dS=\mu\omega$ with $S\in C^2$ and nowhere-zero $\mu\in C^1$. Its current argument uses [L1] below and is conditional while that batch-4 carrier is absent.

[L1] [[thm-tdmath-local-implicit-rank]] (planned in batch 4; carrier absent at this authoring check): if $F:O\subseteq\mathbb R^N\to\mathbb R^q$ is $C^1$, $F(u_0)=0$ and $DF(u_0)$ has row rank $q$, then a choice of $q$ solved coordinates with invertible minor gives a unique local $C^1$ zero-set graph over the remaining $N-q$ coordinates. This is the exact planned interface used for local openness; it is not treated as a proved carrier.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of derivatives.

[F6] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function with integrable interior derivative has its endpoint increment equal to the derivative's interval integral.

[F7] [[def-total-derivative-in-euclidean-space]]: differentiability at $q$ means $S(q+h)=S(q)+DS_qh+o(\|h\|)$.

## Proof

**Given:** Near each point permute coordinates to use $z$ for a coordinate with nonzero coefficient, and shrink to a ball where it remains nonzero.

1.1 Put $c_i=-a_i/b$ and $X_i=\partial_{x_i}+c_i\partial_z$. These $C^2$ fields form a basis of $\ker\omega$. Their bracket has only a vertical component, $[X_i,X_j]^z=\partial_i c_j+c_i\partial_zc_j-\partial_jc_i-c_j\partial_zc_i$. [F1, algebra]

1.2 Direct coordinate expansion gives $d\omega(X,Y)=X[\omega(Y)]-Y[\omega(X)]-\omega([X,Y])$ for $[X,Y]=DY\,X-DX\,Y$. Suppose for contradiction that $[X_i,X_j](q)\ne0$ at some $q$. For small $t$, let $Y_t=(\phi_i^t)_*X_j$, so $Y_t(q)=D\phi_i^t(\phi_i^{-t}(q))X_j(\phi_i^{-t}(q))$. The flow and variational equations give $\phi_i^{-t}(q)=q-tX_i(q)+o(t)$ and $D\phi_i^t(\phi_i^{-t}(q))=I+tDX_i(q)+o(t)$; differentiability of $X_j$ gives $X_j(\phi_i^{-t}(q))=X_j(q)-tDX_j(q)X_i(q)+o(t)$. Multiplying yields $Y_t(q)=X_j(q)-t[X_i,X_j](q)+o(t)$. Since $[X_i,X_j](q)=v\partial_z$ for some $v\ne0$ and $b(q)\ne0$, $\omega_q([X_i,X_j](q))=vb(q)\ne0$; hence $\omega_q(Y_t(q))=-tvb(q)+o(t)\ne0$ for all sufficiently small nonzero $t$, so $Y_t(q)$ is transverse to $\ker\omega_q$. Thus $X_1(q),\ldots,X_n(q),Y_t(q)$ are linearly independent. [F2, F3, step 1.1, algebra]

2.1 Suppose $[X_i,X_j](q)\ne0$. By continuity, choose an open Euclidean ball $B$ about $q$, with closure inside the coordinate neighborhood, on which the vertical coefficient of this same bracket and $b$ are both nonzero. For every $r\in B$, repeat step 1.2 at $r$ with a sufficiently small nonzero $t=t_r$. The flow of $Y_t$ is $\phi_i^t\circ\phi_j^s\circ\phi_i^{-t}$, a finite concatenation of horizontal flows with both time signs available. Compose the flows of $X_1,\ldots,X_n$ and this conjugated flow, starting at $r$, to obtain $\Psi_r$ on duration parameters near $0$. Then $\Psi_r(0)=r$ and $D\Psi_r(0)$ has the independent columns $X_1(r),\ldots,X_n(r),Y_t(r)$. Choose $|t|$ and then the duration parameter neighborhood small enough that all intermediate segments stay inside $B$; this is possible because $r$ is an interior point of $B$ and local flows depend continuously on times and initial points. [F1, F2, F3, step 1.2, construct]

2.2 For each $r\in B$, apply [L1] to $H_r(s,p)=\Psi_r(s)-p$ at $(0,r)$, taking $s$ as solved coordinates and $p$ as free coordinates. Its solved derivative is invertible by step 2.1. Conditional on [L1], an open neighborhood $O_r\subseteq B$ of $r$ consists of endpoints $\Psi_r(s(p))$, each reachable from $r$ by the horizontal concatenations inside $B$. Reachability by the declared finite-piece horizontal paths inside $B$ is an equivalence relation: the constant path gives reflexivity, path reversal gives symmetry, and finite concatenation gives transitivity. Each equivalence class is open in $B$, since every point $r$ of a class has $O_r$ in that same class. If there were two classes, any one class and its complement (a union of other open classes) would separate the connected Euclidean ball $B$ into two nonempty open sets. Hence $B$ is a single reachability class. Every point of $B$ is therefore reachable from $q$ by a path inside $B$, contradicting (a) applied to the neighborhood $V=B$. [L1, F1, step 2.1, algebra]

3.1 Thus every bracket $[X_i,X_j]$ vanishes. The coordinate identity from step 1.2 gives $d\omega(X_i,X_j)=-\omega([X_i,X_j])=0$, hence $(\omega\wedge d\omega)(\partial_z,X_i,X_j)=0$ for every pair. These evaluations determine the three-form: modulo the $n$-plane $\ker\omega$, the tangent space has dimension one, so every triple reduces by multilinearity and alternation to a multiple of one $\partial_z$ and two horizontal vectors. Therefore $\omega\wedge d\omega=0$. By [F4], condition (b) follows, conditionally on [L1]. [F1, F4, step 1.2, step 2.2, algebra]

4.1 Conversely suppose (b) holds near $q$, with $dS=\mu\omega$. Since $\mu(q)\ne0$ and $\omega_q\ne0$, $dS_q\ne0$. For each smooth piece of a horizontal path $\gamma$, [F5] gives $(S\circ\gamma)'=dS(\dot\gamma)=\mu\omega(\dot\gamma)=0$. By [F6] the value of $S$ is constant on that piece, and hence on the finite concatenation. Choose $v$ with $dS_q(v)\ne0$; [F7] gives $S(q+tv)=S(q)+t\,dS_q(v)+o(t)$, so for every neighborhood $V$ of $q$ some sufficiently small nonzero $t$ has $q+tv\in V$ and $S(q+tv)\ne S(q)$. That point cannot be horizontally reachable from $q$ inside $V$, proving (a). [F5, F6, F7, algebra] ∎
