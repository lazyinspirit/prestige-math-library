---
id: lem-generic-theta-translate-pullback-is-degree-g-divisor
kind: lemma
title: A Generic Theta Translate Pulls Back to a Degree-g Divisor
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-pointed-abel-jacobi-map-of-curve
  - def-abelian-variety-over-a-field
  - thm-picard-zero-represented-by-jacobian
  - thm-effective-divisor-symmetric-power-projective
  - lem-generic-degree-g-divisor-has-unique-effective-representative
  - lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
  - thm-proper-quasi-finite-is-finite
  - lem-generic-freeness-finite-type-algebra-module
  - thm-full-riemann-roch-divisor
  - def-axiom-of-choice
  - cor-birational-smooth-proper-curves-isomorphic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§5–6, Lemma 6.7, printed pp. 103–106
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
---

## Statement

Assume the Axiom of Choice. Let $C/\bar k$ be a smooth, proper, geometrically connected curve of genus $g\ge1$, let $P\in C(\bar k)$, and write $u_P:C\to J_C$ for its Abel–Jacobi map. Let $\Theta_P$ be the reduced image of $C^{(g-1)}$ under $E\mapsto[\mathcal O_C(E-(g-1)P)]$. There is a dense open subset $U\subset J_C$ such that for every $a\in U(\bar k)$ the degree-$g$ Abel map has a unique representative $D(a)=P_1+\cdots+P_g$ with distinct points and, for the reflected translate $a-\Theta_P=\{a-z:z\in\Theta_P\}$, the pullback divisor $u_P^{-1}(a-\Theta_P)$ is exactly $D(a)$, with multiplicity one at each $P_i$.

## Statement references

[Milne, generic theta pullback, Lemma 6.7, pp. 103–106](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** AC, a pointed smooth proper curve $C/\bar k$, its Jacobian $J_C$, the pointed Abel–Jacobi map $u_P$, and the reduced theta image $\Theta_P$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] A general degree-$g$ class has a unique effective divisor representative, and the degree-$g$ Abel map $C^{(g)}\to J_C$ is birational. The locus of divisors with distinct support is dense. [[lem-generic-degree-g-divisor-has-unique-effective-representative]] [[thm-effective-divisor-symmetric-power-projective]]

[F2] If $g\ge2$, a general effective divisor of degree $g-1$ has a unique effective representative, and its Abel map is an isomorphism over dense open subsets of its reduced image $\Theta_P$. If $g=1$, $C^{(0)}=\operatorname{Spec}\bar k$ and $\Theta_P=\{0\}$. [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]] [[thm-effective-divisor-symmetric-power-projective]]

[F3] A birational morphism between smooth proper integral curves is an isomorphism. The incidence morphism $(Q,E)\mapsto u_P(Q)+[E-(g-1)P]$ from $C\times C^{(g-1)}$ to $J_C$ is proper. A proper quasi-finite morphism is finite; a finite module over an integral finite-type base is locally free of constant generic rank on a dense open. [[cor-birational-smooth-proper-curves-isomorphic]] [[def-abelian-variety-over-a-field]] [[thm-proper-quasi-finite-is-finite]] [[lem-generic-freeness-finite-type-algebra-module]]

[F4] Every degree-$g$ line bundle has an effective divisor representative by Riemann–Roch, since $h^0(L)-h^0(\omega_C\otimes L^{-1})=1$. [[thm-full-riemann-roch-divisor]]

## Proof

**Proof technique:** direct: use uniqueness of degree-$g$ representatives to identify the theta incidence fibers, then count their scheme-theoretic length through a finite flat incidence map.

1.1 If $g=1$, [F1] makes $u_P:C\to J_C$ birational, and both are smooth proper integral curves, so [F3] makes $u_P$ an isomorphism. Here $\Theta_P=\{0\}$ by [F2], and for every $a\in J_C(\bar k)$ the translate $a-\Theta_P=\{a\}$ pulls back to one reduced point $Q$; take $U=J_C$. The divisor $D(a)=Q$ has one point and is the unique effective degree-one representative. Hence the claim holds for $g=1$. Assume from now on $g\ge2$. By [F1], after shrinking to a dense open $U_0\subset J_C$, every $a\in U_0$ has a unique effective representative $D(a)$ of degree $g$. The distinct-support divisors form a dense open in $C^{(g)}$ (the complement is the image of the diagonals in $C^g$), so birationality in [F1] lets us shrink $U_0$ further until every $D(a)$ has $g$ distinct points. [A1, F1, F2, F3, given]

2.1 Let $V\subset C^{(g-1)}$ be a dense open where the degree-$(g-1)$ Abel map is an isomorphism onto an open subset of $\Theta_P$; it exists by [F2]. In $C^g$, requiring each of the finitely many degree-$(g-1)$ sub-divisors obtained by omitting one coordinate to lie in $V$ is a finite intersection of dense open conditions, hence dense and nonempty. Since $C^g\to C^{(g)}\to J_C$ is dominant by [F1] and [F4], and the map from $C^g$ is proper, we may shrink $U_0$ to a dense open $U$ such that all residual divisors $D(a)-P_i$ lie in $V$. [F1, F2, F4, step 1.1]

3.1 Define $\beta:C\times C^{(g-1)}\to J_C$ by $\beta(Q,E)=u_P(Q)+[E-(g-1)P]$. It is proper by [F3]. For $a\in U$, a geometric point $(Q,E)$ of $\beta^{-1}(a)$ gives the degree-$g$ effective divisor $Q+E$ with class $a$. Uniqueness of $D(a)$ forces $Q+E=D(a)$; conversely each of the $g$ points $P_i$ of $D(a)$ gives the pair $(P_i,D(a)-P_i)$, whose second coordinate is unique by [F2]. Thus every such fiber has exactly $g$ distinct geometric points. The morphism is generically quasi-finite; by [F3] it is finite on a dense open. Generic freeness shrinks that open further so it is finite flat of rank $g$. Hence each fiber over $U$ has scheme-theoretic length $g$, and its $g$ distinct points all have multiplicity one. [F2, F3, step 2.1]

4.1 A point $Q$ lies in $u_P^{-1}(a-\Theta_P)$ exactly when $a-u_P(Q)$ belongs to the image of $C^{(g-1)}$; the unique residual representative on $U$ is then $E=D(a)-Q$. The degree-$(g-1)$ Abel map is an isomorphism over $V$ by step 2.1, so forgetting $E$ identifies $\beta^{-1}(a)$ scheme-theoretically with $u_P^{-1}(a-\Theta_P)$ for $a\in U$. Step 3.1 shows that this pullback divisor consists of the distinct points $P_1,\ldots,P_g$, each with multiplicity one. [F2, step 2.1, step 3.1, construct] ∎

## Axiom use

The Axiom of Choice is assumed through [A1] and through the Riemann–Roch and generic-freeness suppliers; the shrinking steps use only finitely many dense open conditions.
