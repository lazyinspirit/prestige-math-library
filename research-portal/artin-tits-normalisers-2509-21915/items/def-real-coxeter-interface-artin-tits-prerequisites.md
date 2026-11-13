---
id: def-real-coxeter-interface-artin-tits-prerequisites
kind: definition
title: Real Coxeter representation and contragredient notation
status: published
domain: mathematics
origin: pipeline
deps:
  - math:def-hh-coxeter-matrix-word-group-and-length
  - math:def-cg-real-coxeter-form-and-reflection
  - math:def-cg-canonical-reflection-homomorphism
  - math:lem-cg-reflection-representation-descends-and-root-norms
  - math:def-cg-dual-chambers-and-reflection-hyperplanes
  - math:lem-cg-dual-action-and-chamber-faces-exist
  - math:def-algebraic-dual-and-linear-functional
dependency_roles:
  math:def-hh-coxeter-matrix-word-group-and-length: mathematical-premise
  math:def-cg-real-coxeter-form-and-reflection: mathematical-premise
  math:def-cg-canonical-reflection-homomorphism: mathematical-premise
  math:lem-cg-reflection-representation-descends-and-root-norms: mathematical-premise
  math:def-cg-dual-chambers-and-reflection-hyperplanes: mathematical-premise
  math:lem-cg-dual-action-and-chamber-faces-exist: mathematical-premise
  math:def-algebraic-dual-and-linear-functional: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
proof_strategy: definition
dependency_level: 0
---

## Definition

Let $S$ be a finite set and $m:S\times S\to\{1,2,3,\ldots\}\cup\{\infty\}$ a Coxeter matrix: $m(s,s)=1$ and, for $s\ne t$, $m(s,t)=m(t,s)\in\{2,3,\ldots\}\cup\{\infty\}$. Its presented Coxeter group is $W=\langle S\mid s^2=1,\ (st)^{m(s,t)}=1\text{ when }s\ne t\text{ and }m(s,t)<\infty\rangle$.

Let $V=\mathbb R^S$, the space of real-valued functions on $S$, and let $e_s$ be the function that is $1$ at $s$ and $0$ elsewhere. The Coxeter form $B$ is the symmetric bilinear form determined by $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for distinct $s,t$ with finite $m(s,t)$, and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$. Put $r_s(v)=v-2B(v,e_s)e_s$. The canonical real reflection representation is the homomorphism $\rho:W\to\mathrm{GL}(V)$ satisfying $\rho(s)=r_s$. Here $\mathrm{GL}(V)$ is the group of invertible linear maps from $V$ to itself. Write $wv$ for $\rho(w)v$, $\alpha_s=e_s$, and call the elements of $\Phi=\{we_s:w\in W,\ s\in S\}$ roots.

Let $\Theta=V^*$ be the algebraic dual, the space of all real-valued linear functionals on $V$. The contragredient action is $(w f)(v)=f(\rho(w)^{-1}v)$ for $w\in W$, $f\in\Theta$, and $v\in V$. The closed chamber is $C=\{f\in\Theta:f(e_s)\geq0\text{ for all }s\in S\}$, and the open chamber is $C^\circ=\{f\in\Theta:f(e_s)>0\text{ for all }s\in S\}$. For $I\subseteq S$, its face of type $I$ is $C_I=\{f\in\Theta:f(e_s)=0\text{ for }s\in I,\ f(e_s)>0\text{ for }s\notin I\}$. For $\alpha\in\Phi$, the root hyperplane is $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$.

No nondegeneracy of $B$ is assumed, and $V$ is not identified with $V^*$ using $B$. These conventions apply to finite $S$; no infinite-rank extension is asserted here.

## Definition references

[[math:def-hh-coxeter-matrix-word-group-and-length]]

[[math:def-cg-real-coxeter-form-and-reflection]]

[[math:def-cg-canonical-reflection-homomorphism]]

[[math:def-cg-dual-chambers-and-reflection-hyperplanes]]

[[math:def-algebraic-dual-and-linear-functional]]

## Justification

The finite-dimensional form and the maps $r_s$ are defined by the specified basis values. The reflection representation descends uniquely from the presented group: its generators satisfy the defining relations, as established in [[math:lem-cg-reflection-representation-descends-and-root-norms]]. Thus each $\rho(w)$ is invertible and the displayed dual formula is meaningful. The latter is a left action by linear maps, and the indicated faces exist, by [[math:lem-cg-dual-action-and-chamber-faces-exist]]. The chamber, face, root and hyperplane expressions are consequently well-defined subsets of the spaces specified in the definition.
