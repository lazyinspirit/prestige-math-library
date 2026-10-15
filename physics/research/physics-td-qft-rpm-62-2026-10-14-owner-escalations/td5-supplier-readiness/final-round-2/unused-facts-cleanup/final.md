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
deps: [lem-tdmath-integrable-horizontal-orbits-have-empty-interior, def-tdmath-one-form-and-horizontal-path, lem-tdmath-local-contraction-flow, lem-tdmath-variational-flow-and-commutation, thm-tdmath-codimension-one-frobenius, thm-tdmath-local-implicit-rank]
dependency_roles:
  lem-tdmath-integrable-horizontal-orbits-have-empty-interior: mathematical-premise
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  lem-tdmath-local-contraction-flow: mathematical-premise
  lem-tdmath-variational-flow-and-commutation: mathematical-premise
  thm-tdmath-codimension-one-frobenius: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33 and §33.2, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Pavel Etingof, 18.745 Lie Groups and Lie Algebras I, §8.3, full MIT lecture notes"
      url: "https://arxiv.org/html/2201.09397"
    - title: "David Tong, Statistical Physics, complete Chapter 4 in the official HTML edition"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S4"
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

[F4] [[thm-tdmath-codimension-one-frobenius]]: condition $\omega\wedge d\omega=0$ is equivalent locally to $dS=\mu\omega$ with $S\in C^2$ and nowhere-zero $\mu\in C^1$. Its assigned proof uses the same batch-4 rank carrier below, so this step is conditional while that carrier's precheck repair and Step1 record remain unresolved.

[L1] [[thm-tdmath-local-implicit-rank]] (the current carrier is `draft`, inventoried on the batch-4 A page, order 268): for $1\le q\le m$, $F:O\subseteq\mathbb R^m\to\mathbb R^q$ is $C^1$, $F(x_*)=0$, and some $q\times q$ minor of $DF(x_*)$ is invertible; if $q<m$, after permuting $x=(u,v)\in\mathbb R^{m-q}\times\mathbb R^q$, there are open neighborhoods and a unique $C^1$ graph $v=\varphi(u)$ equivalent to $F(u,v)=0$. Its inspected proof reduces to the published Euclidean implicit-function theorem in the $q<m$ case and to the published inverse-function theorem when $q=m$. In this use $m=2(n+1)$ and $q=n+1<m$, and the solved-coordinate minor is $D\Psi_t(0)$; the interface matches. The rank carrier's proof contract and dependencies pass scoped checks, but its phase-number precheck reports a canonical-label repair and its Step1 readiness record is missing, so this cross-batch use remains conditional.

[F8] [[lem-tdmath-integrable-horizontal-orbits-have-empty-interior]]: if every point has a local nowhere-zero integrating factor and first integral, then the horizontal reachability class of any $q$ fails to exhaust every nonempty open subset of $U$, without a global first integral or choice axiom.

## Proof

**Given:** Near each point permute coordinates to use $z$ for a coordinate with nonzero coefficient, and shrink to a ball where it remains nonzero.

1.1 Put $c_i=-a_i/b$ and $X_i=\partial_{x_i}+c_i\partial_z$. These $C^2$ fields form a basis of $\ker\omega$. Their bracket has only a vertical component, $[X_i,X_j]^z=\partial_i c_j+c_i\partial_zc_j-\partial_jc_i-c_j\partial_zc_i$. [F1, algebra]

2.1 Direct coordinate expansion gives $d\omega(X,Y)=X[\omega(Y)]-Y[\omega(X)]-\omega([X,Y])$ for $[X,Y]=DY\,X-DX\,Y$. Suppose for contradiction that $[X_i,X_j](q)\ne0$ at some $q$. For small $t$, let $Y_t=(\phi_i^t)_*X_j$, so $Y_t(q)=D\phi_i^t(\phi_i^{-t}(q))X_j(\phi_i^{-t}(q))$. The flow and variational equations give $\phi_i^{-t}(q)=q-tX_i(q)+o(t)$ and $D\phi_i^t(\phi_i^{-t}(q))=I+tDX_i(q)+o(t)$; differentiability of $X_j$ gives $X_j(\phi_i^{-t}(q))=X_j(q)-tDX_j(q)X_i(q)+o(t)$. Multiplying yields $Y_t(q)=X_j(q)-t[X_i,X_j](q)+o(t)$. Since $[X_i,X_j](q)=v\partial_z$ for some $v\ne0$ and $b(q)\ne0$, $\omega_q([X_i,X_j](q))=vb(q)\ne0$; hence $\omega_q(Y_t(q))=-tvb(q)+o(t)\ne0$ for all sufficiently small nonzero $t$, so $Y_t(q)$ is transverse to $\ker\omega_q$. Thus $X_1(q),\ldots,X_n(q),Y_t(q)$ are linearly independent. [F2, F3, step 1.1, algebra]

3.1 By continuity, choose an open Euclidean ball $B$ about $q$, contained in the coordinate neighborhood, on which $b$ and the vertical coefficient of the same bracket $[X_i,X_j]$ are both nonzero. For each $r\in B$, repeat step 2.1 at $r$ with a sufficiently small nonzero $t=t_r$. The flow of $Y_t$ is $\phi_i^t\circ\phi_j^s\circ\phi_i^{-t}$, a finite horizontal concatenation with both time signs available. Starting at $r$, compose this flow with those of $X_1,\ldots,X_n$ to obtain a $C^2$ endpoint map $\Psi_r$ near the zero duration vector. Then $\Psi_r(0)=r$ and its derivative has the independent columns $X_1(r),\ldots,X_n(r),Y_t(r)$. Choose $|t|$ and the duration neighborhood small enough that every intermediate segment stays inside $B$, using continuity of local flows and that $r$ is interior to $B$. [F1, F2, F3, step 2.1, construct]

4.1 At each $r\in B$, apply [L1] to $H_r(s,p)=\Psi_r(s)-p$ at $(0,r)$, with ambient dimension $2(n+1)$ and target dimension $n+1$, permuting the input to $(p,s)$ so $s$ is solved. Its solved derivative is invertible by step 3.1. Conditionally, some open neighborhood $O_r\subseteq B$ of $r$ consists of endpoints $\Psi_r(s(p))$, all reachable from $r$ by horizontal paths inside $B$. Reachability inside $B$ is an equivalence relation: constant paths give reflexivity, path reversal gives symmetry, and finite concatenation gives transitivity. Every equivalence class is open in $B$, since each of its points $r$ has $O_r$ in that same class. Two distinct classes would separate the connected Euclidean ball $B$ into one nonempty open class and its nonempty open complement, a union of other classes. Thus $B$ is one class: every point of $B$ is reachable from $q$ by a path inside $B$, contradicting (a) with $V=B$. [F1, F3, L1, step 3.1, algebra]

5.1 Thus every bracket $[X_i,X_j]$ vanishes by the contradiction at step 4.1. The coordinate identity from step 2.1 gives $d\omega(X_i,X_j)=-\omega([X_i,X_j])=0$, hence $(\omega\wedge d\omega)(\partial_z,X_i,X_j)=0$ for every pair. These evaluations determine the three-form: modulo the $n$-plane $\ker\omega$, the tangent space has dimension one, so every triple reduces by multilinearity and alternation to a multiple of one $\partial_z$ and two horizontal vectors. Therefore $\omega\wedge d\omega=0$. By [F4], condition (b) follows, conditionally on [L1]. [F1, F4, step 2.1, step 4.1, algebra]

6.1 Conversely suppose (b) holds at every point of $U$. The exact global reachability lemma [F8] applies to these local first integrals and the declared horizontal paths. For every $q\in U$ and every open neighborhood $V\subseteq U$ of $q$, it gives a point $p\in V$ not horizontally reachable from $q$ even by a path in $U$, and therefore not by a path in $V$. This proves (a), including neighborhoods larger than an individual first-integral chart, and completes the equivalence. [given, F1, F8] ∎
