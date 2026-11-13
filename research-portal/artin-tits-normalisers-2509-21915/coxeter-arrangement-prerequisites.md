---
title: Coxeter geometry and relative chambers
description: Connect Coxeter representations, root signs, parabolic minima,
  opposition and weak order with relative arrangements, chamber labels,
  galleries and wall crossings.
status: draft
dependency_level: 0
---

**Purpose:** Connect Coxeter representations, root signs, parabolic minima, opposition and weak order with relative arrangements, chamber labels, galleries and wall crossings.

## Real Coxeter representation and contragredient notation

[Open item](item-def-real-coxeter-interface-artin-tits-prerequisites) · level 0


### Definition

Let $S$ be a finite set and $m:S\times S\to\{1,2,3,\ldots\}\cup\{\infty\}$ a Coxeter matrix: $m(s,s)=1$ and, for $s\ne t$, $m(s,t)=m(t,s)\in\{2,3,\ldots\}\cup\{\infty\}$. Its presented Coxeter group is $W=\langle S\mid s^2=1,\ (st)^{m(s,t)}=1\text{ when }s\ne t\text{ and }m(s,t)<\infty\rangle$.

Let $V=\mathbb R^S$, the space of real-valued functions on $S$, and let $e_s$ be the function that is $1$ at $s$ and $0$ elsewhere. The Coxeter form $B$ is the symmetric bilinear form determined by $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for distinct $s,t$ with finite $m(s,t)$, and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$. Put $r_s(v)=v-2B(v,e_s)e_s$. The canonical real reflection representation is the homomorphism $\rho:W\to\mathrm{GL}(V)$ satisfying $\rho(s)=r_s$. Here $\mathrm{GL}(V)$ is the group of invertible linear maps from $V$ to itself. Write $wv$ for $\rho(w)v$, $\alpha_s=e_s$, and call the elements of $\Phi=\{we_s:w\in W,\ s\in S\}$ roots.

Let $\Theta=V^*$ be the algebraic dual, the space of all real-valued linear functionals on $V$. The contragredient action is $(w f)(v)=f(\rho(w)^{-1}v)$ for $w\in W$, $f\in\Theta$, and $v\in V$. The closed chamber is $C=\{f\in\Theta:f(e_s)\geq0\text{ for all }s\in S\}$, and the open chamber is $C^\circ=\{f\in\Theta:f(e_s)>0\text{ for all }s\in S\}$. For $I\subseteq S$, its face of type $I$ is $C_I=\{f\in\Theta:f(e_s)=0\text{ for }s\in I,\ f(e_s)>0\text{ for }s\notin I\}$. For $\alpha\in\Phi$, the root hyperplane is $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$.

No nondegeneracy of $B$ is assumed, and $V$ is not identified with $V^*$ using $B$. These conventions apply to finite $S$; no infinite-rank extension is asserted here.

### Definition references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection)

[math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)

[math:def-cg-dual-chambers-and-reflection-hyperplanes](https://alphabetamath.cc/item/def-cg-dual-chambers-and-reflection-hyperplanes)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

### Justification

The finite-dimensional form and the maps $r_s$ are defined by the specified basis values. The reflection representation descends uniquely from the presented group: its generators satisfy the defining relations, as established in [math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms). Thus each $\rho(w)$ is invertible and the displayed dual formula is meaningful. The latter is a left action by linear maps, and the indicated faces exist, by [math:lem-cg-dual-action-and-chamber-faces-exist](https://alphabetamath.cc/item/lem-cg-dual-action-and-chamber-faces-exist). The chamber, face, root and hyperplane expressions are consequently well-defined subsets of the spaces specified in the definition.


## Parabolic root subsystems and unique coset minima

[Open item](item-prop-parabolic-minimum-interface-artin-tits-prerequisites) · level 0


### Statement

Let $(W,S)$ be a Coxeter system with finite $S$, presented by a Coxeter matrix, and let $\ell$ be word length in $S$. Let $\rho$ be its canonical real reflection representation on $V=\mathbb R^S$, with basis $(e_s)_{s\in S}$, root system $\Phi=\{\rho(w)e_s:w\in W,s\in S\}$ and positive roots $\Phi_+$, the roots with nonnegative basis coordinates. For $I,K\subseteq S$, write $W_I=\langle I\rangle$, $V_I=\operatorname{span}\{e_i:i\in I\}$, $\Phi_I=\{\rho(u)e_i:u\in W_I,i\in I\}$ and $\Phi_I^+=\Phi_I\cap\Phi_+$.

Then $\Phi_I=\Phi\cap V_I$ and $W_I\cap W_K=W_{I\cap K}$. Every set $xW_I=\{xu:u\in W_I\}$ has a unique element $d$ of minimum length, and $x=du$ with $u\in W_I$ and $\ell(x)=\ell(d)+\ell(u)$. For any $y\in W$, the following are equivalent: $y$ is the minimum of $yW_I$; $\ell(ys)>\ell(y)$ for every $s\in I$; and $\rho(y)\Phi_I^+\subseteq\Phi_+$. The inverted counterpart holds for $W_Ix$: its unique minimum $d$ satisfies $\ell(sd)>\ell(d)$ for every $s\in I$ and $\rho(d^{-1})\Phi_I^+\subseteq\Phi_+$, and the corresponding factorization is length additive.

### Statement references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)

[math:def-cg-parabolic-quotient-and-two-sided-minima](https://alphabetamath.cc/item/def-cg-parabolic-quotient-and-two-sided-minima)

[math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)

### Facts & Assumptions

[F1] The standard parabolic intersection and root-subsystem identities are $W_I\cap W_K=W_{I\cap K}$ and $\Phi_I=\Phi\cap V_I$ ([math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)).

[F2] Each $xW_I$ has a unique minimum $d$, characterized by $\ell(ds)>\ell(d)$ for all $s\in I$; for every $u\in W_I$, $\ell(du)=\ell(d)+\ell(u)$. The analogous assertions hold for $W_Ix$ with multiplication on the left ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity); [math:def-cg-parabolic-quotient-and-two-sided-minima](https://alphabetamath.cc/item/def-cg-parabolic-quotient-and-two-sided-minima)).

[F3] For $y\in W$ and $s\in S$, $\ell(ys)>\ell(y)$ if and only if $\rho(y)e_s\in\Phi_+$. Each $e_s$ is positive and roots have exactly one sign ([math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness); [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)).

[F4] For a reduced expression $w=s_1\cdots s_n$, the positive roots sent negative by $\rho(w^{-1})$ are exactly $\rho(s_1\cdots s_{j-1})e_{s_j}$ for $1\le j\le n$. Each root $\alpha$ has an associated reflection $t_\alpha$ satisfying $\rho(t_\alpha)\alpha=-\alpha$; if $\alpha\in\Phi_I$, then $t_\alpha\in W_I$ ([math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange); [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)).

[F5] Generators are involutions, $\ell(w^{-1})=\ell(w)$, and $\rho$ is a homomorphism ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length); [math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)).

### Proof
**Given:** the finite-rank Coxeter system, representation, roots and subsets in the statement.


**Given:** $x,y\in W$ and $I,K\subseteq S$, with the notation and hypotheses of the statement.

**Goal:** prove the subsystem and intersection identities, the coset factorizations, and the three equivalent minimum criteria.

1.1 The two displayed subsystem and intersection identities are exactly [F1]. By [F2], $xW_I$ has a unique minimum $d$, and writing $x=du$ with $u\in W_I$ gives $\ell(x)=\ell(d)+\ell(u)$. The first two criteria for a general $y$ are equivalent by the same fact. [F1, F2]

1.2 Suppose $y$ is the minimum of $yW_I$. For $\alpha\in\Phi_I^+$, put $t=t_\alpha\in W_I$. Choose a reduced expression $t=s_1\cdots s_n$ and a reduced expression for $y$. By [F2], $\ell(yt)=\ell(y)+\ell(t)$, so concatenating these expressions gives a reduced expression for $yt$. Since $\rho(t^{-1})\alpha=-\alpha$, [F4] expresses $\alpha$ as $\rho(s_1\cdots s_{j-1})e_{s_j}$ for some $j$. The prefix formula in [F4] applied to the concatenated expression shows that $\rho(y)\alpha$ is positive. Thus $\rho(y)\Phi_I^+\subseteq\Phi_+$. [F2, F4, F5]

1.3 Conversely, if $\rho(y)\Phi_I^+\subseteq\Phi_+$, then for every $s\in I$ the root $e_s$ lies in $\Phi_I^+$, so $\rho(y)e_s$ is positive. By [F3], $\ell(ys)>\ell(y)$ for every $s\in I$, and [F2] makes $y$ the unique minimum of $yW_I$. This completes the three-way equivalence. [F2, F3]

2.1 Inversion maps $W_Ix$ bijectively to $x^{-1}W_I$ and preserves length. Applying the established right-multiplication result to the latter set and inverting gives the unique minimum and length-additive factorization for $W_Ix$. Its descent criterion is $\ell(sd)>\ell(d)$, and its root criterion is $\rho(d^{-1})\Phi_I^+\subseteq\Phi_+$. Together with steps 1.1–1.3, this proves all assertions. [F5, step 1.1, step 1.2, step 1.3] ∎



## Finite parabolic longest elements and disconnected factors

[Open item](item-prop-finite-opposition-interface-artin-tits-prerequisites) · level 0


### Statement

Let $(W,S)$ be a Coxeter system with $S$ finite and length function $\ell$. For $I\subseteq S$, write $W_I=\langle I\rangle$, $V_I=\operatorname{span}\{e_i:i\in I\}$ and $\Phi_I=\{w e_i:w\in W_I,\ i\in I\}$ in the canonical real reflection representation. Put $\Phi_I^+=\Phi_I\cap\Phi_+$ and $\Phi_I^-= -\Phi_I^+$.

If $W_I$ is finite, it has a unique element $w_I$ of maximum length, $w_I^2=1$, and $w_I\Phi_I^+=\Phi_I^-$. There is a permutation $\iota_I$ of $I$ such that $w_Ie_i=-e_{\iota_I(i)}$ for every $i\in I$.

For the connected components $I_1,\ldots,I_k$ of the Coxeter diagram induced on $I$, the factors $W_{I_j}$ commute elementwise, their multiplication map is an isomorphism from their direct product onto $W_I$, and their lengths add. If $W_I$ is finite, each factor is finite and $w_I=\prod_j w_{I_j}$, including the empty product when $I=\varnothing$.

In particular, let $a\in S\setminus I$, put $K=I\cup\{a\}$, and suppose $W_K$ is finite. If $H$ is a union of connected components common to the induced diagrams on $I$ and $K$, write $J=I\setminus H$ and $L=K\setminus H$. Then $w_Iw_K=w_Jw_L$. Thus common disconnected finite factors cancel.

### Facts & Assumptions

[F1] The Coxeter system $(W,S)$ is presented by its Coxeter matrix $m$, its length $\ell(w)$ is the least number of letters from $S$ representing $w$, and $W_I=\langle I\rangle$ is the standard parabolic subgroup ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)). For every $I\subseteq S$, $(W_I,I)$ is a Coxeter system for the restricted matrix $m|_{I\times I}$ and its intrinsic length is the restriction of $\ell$ ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), part 2).

[F2] A finite Coxeter system has a unique longest element, which is an involution, sends its positive roots to its negative roots and sends each simple root to the negative of a simple root according to a permutation of the generators ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), part 1).

[F3] For the connected components of a finite Coxeter diagram, the corresponding standard parabolic subgroups form a direct product by multiplication, commute elementwise, and their lengths add ([math:lem-cg-diagram-products-and-invariant-form-comparison](https://alphabetamath.cc/item/lem-cg-diagram-products-and-invariant-form-comparison), part 1).

[F4] On the simple-root basis of $V=\mathbb R^S$, the Coxeter form satisfies $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for distinct $s,t$ with $m(s,t)<\infty$, and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$; the reflection with normal $e_s$ is $r_{e_s}(v)=v-2B(v,e_s)e_s$ ([math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection), parts 1–3). The canonical homomorphism satisfies $\rho(s)=r_{e_s}$, and $w v$ denotes $\rho(w)v$ ([math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism), part 1). Moreover $\Phi_I=\Phi\cap V_I$ and its positive and negative roots are the intersections with the ambient positive and negative roots ([math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization), part 2).

[F5] The Coxeter diagram has vertex set $S$ and an edge between distinct $s,t$ exactly when $m(s,t)\ge3$, with the Coxeter label on that edge. Its induced diagram on $I$ is the diagram of the restricted matrix $m|_{I\times I}$, and its components are the connected components of the underlying graph ([math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type), parts 1 and 2).

[F6] In the canonical representation put $\Phi=\{w e_s:w\in W,\ s\in S\}$ and $V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\ge0\}$. The ambient sign convention is $\Phi_+=\Phi\cap V_+$ and $\Phi_-=\Phi\cap(-V_+)=-\Phi_+$, with $\Phi=\Phi_+\sqcup\Phi_-$ ([math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity), part 2).

### Proof
**Given:** The finite-rank Coxeter system, canonical representation and subsets in the statement. A connected component means a maximal connected vertex set in the indicated induced Coxeter diagram; distinct components have no diagram edges between them.

**Goal:** Establish the longest-element, product and cancellation assertions in the statement.


1.1 By [F1], $(W_I,I)$ is a Coxeter system with the ambient length restricted to $W_I$. The entries of $B|_{V_I\times V_I}$ in [F4] depend only on $m|_{I\times I}$, so this restricted form is the Coxeter form of $(W_I,I)$. For $i\in I$ and $v\in V_I$, the formula $r_{e_i}(v)=v-2B(v,e_i)e_i$ stays in $V_I$ and is exactly the reflection for that restricted form. Thus the restricted ambient action and the intrinsic canonical action agree on each generator in $I$, hence on every word representing an element of $W_I$ by [F1]. Consequently its canonical representation is the restriction to $V_I$. The nonnegative-coordinate convention in [F6] agrees on $V_I$ with the intrinsic convention, so its positive and negative roots are $\Phi_I^+$ and $\Phi_I^-$. When $W_I$ is finite, applying [F2] to this system gives the unique maximum-length element $w_I$, its involution and root-sign properties, and the permutation $\iota_I$ with $w_Ie_i=-e_{\iota_I(i)}$. This includes $I=\varnothing$, for which the group and permutation are trivial and the root assertions are vacuous. [F1, F2, F4, F6]

2.1 By [F5], the diagram induced on $I$ is the diagram of the restricted Coxeter matrix. Apply [F3] to the Coxeter system $(W_I,I)$ from [F1] with this diagram. The component subgroups commute and multiply isomorphically onto $W_I$, with additive intrinsic lengths; [F1] identifies these lengths with ambient lengths. If $W_I$ is finite, each subgroup $W_{I_j}$ is finite. Every element of $W_I$ has a unique product decomposition, and its length is the sum of the component lengths. The product of the component longest elements therefore has maximum length in $W_I$; uniqueness from step 1.1 identifies it with $w_I$. The empty-component case gives the identity. [F1, F3, F5, step 1.1]

3.1 By [F5], since $H$ is a union of components in both induced diagrams, there are no diagram edges between $H$ and $J$, or between $H$ and $L$. The component formula of step 2.1 gives $w_I=w_Hw_J$ and $w_K=w_Hw_L$, with $w_H$ commuting with both $w_J$ and $w_L$. All these parabolics are finite because they are subgroups of finite $W_K$. Hence $w_Iw_K=w_Hw_Jw_Hw_L=w_H^2w_Jw_L=w_Jw_L$, using $w_H^2=1$ from step 1.1. This proves the stated cancellation and completes the proof. [F5, step 1.1, step 2.1, algebra] ∎


## Tits cone geometry with its exact interior boundary

[Open item](item-prop-tits-domain-interface-artin-tits-prerequisites) · level 0


### Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, in its canonical real reflection representation on $V=\mathbb R^S$, with basis $(e_s)_{s\in S}$, root system $\Phi$ and positive roots $\Phi_+$. Let $\Theta=V^*$ carry the contragredient action. Put $\overline C=\{f\in\Theta:f(e_s)\geq 0\text{ for all }s\in S\}$ and $U=\bigcup_{w\in W}w\overline C$. For $I\subseteq S$, let $C_I$ be the set of points of $\overline C$ whose zero coordinates are exactly those indexed by $I$, and let $W_I$ be the subgroup generated by $I$. The root hyperplane of $\alpha\in\Phi$ is $H_\alpha=\{f:f(\alpha)=0\}$; interiors and neighborhoods use the ordinary finite-dimensional topology on $\Theta$.

A functional $f$ belongs to $U$ exactly when $\{\alpha\in\Phi_+:f(\alpha)<0\}$ is finite. The cone $U$ is convex, and $\overline C$ meets each $W$-orbit in $U$ exactly once. The stabilizer of $f\in C_I$ is $W_I$. A point of $C_I$ belongs to $U^\circ$ exactly when $W_I$ is finite; the family of distinct root hyperplanes is locally finite on $U^\circ$. Moreover $U=\Theta$ exactly when $W$ is finite. In general local finiteness of chambers does not extend to boundary points: if $W$ is infinite, every neighborhood of $0$ meets infinitely many distinct chambers $w\overline C$.

### Statement references

[math:def-cg-tits-cone-and-fundamental-chamber](https://alphabetamath.cc/item/def-cg-tits-cone-and-fundamental-chamber)

[math:def-cg-dual-chambers-and-reflection-hyperplanes](https://alphabetamath.cc/item/def-cg-dual-chambers-and-reflection-hyperplanes)

[math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)

### Facts & Assumptions

[F1] The definition of the Tits cone gives $U=\bigcup_{w\in W}w\overline C$ and $0\in U$; its interior is taken in the ordinary finite-dimensional topology. The dual action, coordinate faces and root hyperplanes are as defined in [math:def-cg-tits-cone-and-fundamental-chamber](https://alphabetamath.cc/item/def-cg-tits-cone-and-fundamental-chamber) and [math:def-cg-dual-chambers-and-reflection-hyperplanes](https://alphabetamath.cc/item/def-cg-dual-chambers-and-reflection-hyperplanes).

[F2] The finite-negativity criterion holds, and $U$ is closed under convex combinations and nonnegative scalar multiplication. ([math:thm-cg-tits-cone-finite-negativity-and-convexity](https://alphabetamath.cc/item/thm-cg-tits-cone-finite-negativity-and-convexity), clauses (1) and (4).)

[F3] Each orbit in $U$ meets $\overline C$ once; the stabilizer of $f\in\overline C$ is $W_{\{s:f(e_s)=0\}}$; and the walls of the chamber system are exactly the root hyperplanes. ([math:thm-cg-dual-chamber-intersections-and-point-stabilizers](https://alphabetamath.cc/item/thm-cg-dual-chamber-intersections-and-point-stabilizers), clauses (1), (4), and (6).)

[F4] For $f\in\overline C$, membership in $U^\circ$ is equivalent to finiteness of its coordinate-zero subgroup. Every point of $U^\circ$ has a neighborhood meeting finitely many walls. Also $0\in U^\circ$ exactly when $W$ is finite, and if $W$ is infinite every neighborhood of $0$ meets infinitely many distinct chambers. ([math:thm-cg-tits-cone-interior-and-local-finiteness](https://alphabetamath.cc/item/thm-cg-tits-cone-interior-and-local-finiteness), clauses (1), (3), (4), and (5).)

[F5] In the metric topology on $\Theta$ specified in [F1], the closure $\operatorname{cl}(A)$ consists of points whose every open ball meets $A$, and $\partial A=\operatorname{cl}(A)\setminus\operatorname{int}(A)$. In particular $A\subseteq\operatorname{cl}(A)$ for every $A\subseteq\Theta$. ([math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary), Definition.)

### Proof
**Given:** The finite-rank Coxeter system and notation in the statement. **Goal:** Establish the listed properties of $U$.


1.1 The finite-negativity criterion and convexity are precisely the first and fourth assertions of [F2]. The orbit and stabilizer assertions follow from [F3], since the zero-coordinate set of a point of $C_I$ is $I$. [F2, F3]

1.2 The interior criterion for $C_I$ follows from [F4] and the same identification of the zero-coordinate set. By [F4], each interior point has a neighborhood meeting finitely many walls; by [F3], the distinct walls are exactly the distinct root hyperplanes. Hence those hyperplanes are locally finite on $U^\circ$. [F3, F4]

1.3 If $U=\Theta$, then $0\in U^\circ$, so $W$ is finite by [F4]. Conversely, if $W$ is finite, [F4] gives an open neighborhood of $0$ contained in $U$. For any $f\in\Theta$, a sufficiently small positive multiple $tf$ lies in that neighborhood; closure under nonnegative scalar multiplication then gives $f=t^{-1}(tf)\in U$. Thus $U=\Theta$. [F2, F4, algebra]

2.1 If $W$ is infinite, [F4] says that every neighborhood of $0$ meets infinitely many distinct chambers. Here $0\in U\subseteq\operatorname{cl}(U)$ by [F1] and [F5], while $0\notin U^\circ$ by [F4]. Hence $0\in\operatorname{cl}(U)\setminus U^\circ=\partial U$ by [F5], so $0$ is a boundary point of $U$. This proves the stated boundary qualification and completes the proof. [F1, F4, F5, step 1.3] ∎


## Annihilators, relative hyperplanes and complexification

[Open item](item-prop-relative-linear-interface-artin-tits-prerequisites) · level 0


### Statement

Let $V$ be a real vector space with finite basis $(e_s)_{s\in S}$, let $J\subseteq S$, and let $E=\{f\in V^*:f(e_j)=0\text{ for every }j\in J\}$. For $\alpha\in V$, write $r_\alpha:E\to\mathbb R$ for the restricted evaluation $r_\alpha(f)=f(\alpha)$. Then $r_\alpha$ is zero exactly when $\alpha\in\operatorname{span}\{e_j:j\in J\}$; otherwise its kernel is a linear hyperplane of $E$, meaning that its quotient in $E$ has dimension one. Two nonzero restricted evaluations have the same kernel exactly when one is a nonzero real scalar multiple of the other.

Identify the complexification $E\otimes_{\mathbb R}\mathbb C$ with $E\oplus iE$ by $f\otimes(a+bi)\mapsto af+i bf$. For a real hyperplane $H\subseteq E$, its complexification, understood as the image of $H\otimes_{\mathbb R}\mathbb C$ under the inclusion into $E\otimes_{\mathbb R}\mathbb C$, is $H\oplus iH$.

For subsets of $E$, relative interior and closure mean interior and closure computed in $E$ with the metric induced by the coordinate Euclidean metric on $V^*$ associated to the basis $(e_s)$. Thus balls used in these operations are balls in $E$.

### Statement references

[math:def-dual-family-associated-to-a-basis](https://alphabetamath.cc/item/def-dual-family-associated-to-a-basis)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)

[math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)

[math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)

[math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)

[math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)

[math:def-isometry-and-metric-embedding](https://alphabetamath.cc/item/def-isometry-and-metric-embedding)

[math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

[math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)

[math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)

[math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

### Facts & Assumptions

[F1] The coordinate functional $e_s^*$ has $e_s^*(e_t)=\delta_{st}$; a functional is determined by its values on the basis, and $V^*$ has pointwise linear operations ([math:def-dual-family-associated-to-a-basis](https://alphabetamath.cc/item/def-dual-family-associated-to-a-basis), [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)).

[F2] The kernel of a linear map is its zero fibre. A linear hyperplane is a subspace whose quotient has dimension one ([math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map), [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)).

[F3] For a real vector space $X$, the tensor and direct-sum models of complexification are canonically isomorphic by $\Phi_X:\mathbb C\otimes_{\mathbb R}X\to X\oplus iX$, with $z\otimes x$ corresponding to $z(x+i0)$ ([math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)).

[F4] In a metric space, the interior consists of points having a ball contained in the set, and the closure consists of points whose every ball meets the set ([math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)).

[F5] Over the commutative ring $\mathbb R$, tensor symmetry is an isomorphism $\sigma_{X,Y}:X\otimes_{\mathbb R}Y\to Y\otimes_{\mathbb R}X$ sending $x\otimes y$ to $y\otimes x$ ([math:thm-symmetry-and-associativity-over-a-commutative-ring](https://alphabetamath.cc/item/thm-symmetry-and-associativity-over-a-commutative-ring)). Real-linear maps $u:X\to X^\prime$ and $v:Y\to Y^\prime$ induce $u\otimes v$, sending $x\otimes y$ to $u(x)\otimes v(y)$ ([math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)).

[F6] If $(X,d_X)$ is a metric space and $A\subseteq X$, then $d_A=d_X|_{A\times A}$ is a metric on $A$ and $B_A(a,r)=B_X(a,r)\cap A$ for $a\in A$ and $r>0$ ([math:def-isometry-and-metric-embedding](https://alphabetamath.cc/item/def-isometry-and-metric-embedding)).

[F7] For every integer $n\ge1$, the function $d_2(x,y)=(\sum_{k<n}(x_k-y_k)^2)^{1/2}$ is a metric on $\mathbb R^n$ ([math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)).

[F8] A basis is a linearly independent spanning subset; the empty basis is a basis exactly of the zero space ([math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)). The span is the smallest linear subspace containing the given subset, and consists exactly of its finite linear combinations, including the empty combination ([math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), [math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)).

[F9] For a vector space $X$ and a linear subspace $K$, the quotient $X/K$ has classes $x+K$ and operations $(x+K)+(y+K)=(x+y)+K$ and $a(x+K)=ax+K$ ([math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)). These operations are well-defined and make $X/K$ a vector space; the projection $x\mapsto x+K$ is linear and surjective with kernel $K$ ([math:prop-quotient-vector-space-operations-and-projection](https://alphabetamath.cc/item/prop-quotient-vector-space-operations-and-projection)).

[F10] A vector space with a finite basis has dimension equal to the number of elements of that basis ([math:def-dimension](https://alphabetamath.cc/item/def-dimension)).

[F11] A linear subspace contains zero and is closed under addition and scalar multiplication; with the restricted operations it is a vector space ([math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)). A map between vector spaces over the same field is linear when $T(au+bv)=aT(u)+bT(v)$ for all vectors $u,v$ and scalars $a,b$ ([math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)).

### Proof

**Given:** The finite real basis, subset $J$, set $E$, and restricted evaluations in the statement. Define $d(f,g)=(\sum_{s\in S}|f(e_s)-g(e_s)|^2)^{1/2}$ on $V^*$.

**Goal:** Prove the assertions about restricted evaluations, their kernels, and complexification, and specify the relative operations.


1.1 The zero functional belongs to $E$. For $f,g\in E$ and $a,b\in\mathbb R$, pointwise operations give $(af+bg)(e_j)=af(e_j)+bg(e_j)=0$ for every $j\in J$. Thus $E$ is a real linear subspace of $V^*$ and inherits its vector-space operations. For every $\alpha\in V$, those same operations give $r_\alpha(af+bg)=a r_\alpha(f)+b r_\alpha(g)$, so $r_\alpha$ is real-linear and $r_\alpha(0)=0$. Put $K_\alpha=\ker r_\alpha$. It contains zero, and if $f,g\in K_\alpha$ then $r_\alpha(af+bg)=0$ for all $a,b\in\mathbb R$. Hence $K_\alpha$ is a real linear subspace of $E$. These checks apply also when $J$ is empty or $E=\{0\}$. [given, F1, F2, F11, algebra]

1.2 Write $\alpha=\sum_{s\in S}a_s e_s$. For $f\in E$, linearity gives $r_\alpha(f)=\sum_{s\notin J}a_s f(e_s)$. If $\alpha$ is in the indicated span this is zero for all $f\in E$. Conversely, if $r_\alpha=0$, then $e_s^*\in E$ for each $s\notin J$, so evaluation at $e_s^*$ gives $a_s=0$ for every such $s$. This proves the equivalence. [given, F1, F8, algebra]

1.3 Put $n=|S|$. If $n\ge1$, enumerate $S=\{s_0,\ldots,s_{n-1}\}$ and define $C:V^*\to\mathbb R^n$ by $C(f)_k=f(e_{s_k})$. By [F1], $C$ is injective because a functional is determined by its basis values, and it is surjective because $x\in\mathbb R^n$ is the image of $\sum_{k<n}x_k e_{s_k}^*$. The coordinate formula gives $d(f,g)=d_2(C(f),C(g))$. By [F7], $d$ is nonnegative, symmetric and satisfies the triangle inequality; also $d(f,g)=0$ exactly when $C(f)=C(g)$, which by injectivity is exactly when $f=g$. If $n=0$, then $V=\{0\}$ and $V^*=\{0\}$, and the empty-sum formula gives the unique distance $d(0,0)=0$; separation and symmetry hold, and the only triangle inequality is $0\le0+0$. Thus $d$ is a metric in every case. [given, F1, F7, F8, choose, algebra]

2.1 Suppose $r_\alpha$ is nonzero. Choose $u\in E$ with $r_\alpha(u)=1$, by rescaling a vector on which it is nonzero. Every $f\in E$ has the unique decomposition $f=(f-r_\alpha(f)u)+r_\alpha(f)u$, with the first term in $\ker r_\alpha$. Hence the quotient $E/\ker r_\alpha$ is spanned by the nonzero class of $u$ and has dimension one; its kernel is therefore a hyperplane. [given, F2, F8, F9, F10, step 1.1, choose, algebra]

2.2 A real hyperplane $H\subseteq E$ is a linear subspace by [F2], hence a real vector space by [F11]. For $X=E$ and $X=H$, compose the tensor symmetry in [F5] with $\Phi_X$ in [F3] to obtain the isomorphism $T_X=\Phi_X\circ\sigma_{X,\mathbb C}:X\otimes_{\mathbb R}\mathbb C\to X\oplus iX$. It sends $x\otimes(a+bi)$ to $ax+i bx$ and has inverse $x+iy\mapsto x\otimes1+y\otimes i$. Thus $T_E$ gives the stated identification. [given, F2, F3, F5, F11, step 1.1, algebra]

3.1 Let $r$ and $q$ be nonzero restricted evaluations with the same kernel, and choose $u$ with $r(u)=1$. The decomposition in step 2.1 gives $q(f)=r(f)q(u)$ for every $f\in E$. Since $q$ is nonzero, $q(u)\ne0$, so $q$ is a nonzero scalar multiple of $r$. Conversely, multiplying a functional by a nonzero scalar does not change its zero fibre. [step 2.1, step 1.1, F2, choose, algebra]

3.2 Let $j:H\to E$ be the inclusion. Since $H$ has the restricted operations, $j(ah+bk)=aj(h)+bj(k)$ for $h,k\in H$ and $a,b\in\mathbb R$, so $j$ is real-linear; the identity on $\mathbb C$ is real-linear by the same criterion. By [F5] it induces $j_{\mathbb C}=j\otimes\operatorname{id}_{\mathbb C}:H\otimes_{\mathbb R}\mathbb C\to E\otimes_{\mathbb R}\mathbb C$. For $h,k\in H$, the inverse formula in step 2.2 gives $T_E(j_{\mathbb C}(T_H^{-1}(h+ik)))=T_E(j(h)\otimes1+j(k)\otimes i)=j(h)+i j(k)$. Hence, under these isomorphisms, $j_{\mathbb C}$ is the componentwise inclusion $H\oplus iH\to E\oplus iE$. This inclusion is injective because its value is zero only when both $h=0$ and $k=0$, and its image is exactly $H\oplus iH$. This proves the complexification assertion. [given, F5, F11, step 2.2, algebra]

4.1 Apply [F6] with $X=V^*$, its coordinate Euclidean metric $d$ established in step 1.3, and $A=E$. The restriction $d_E=d|_{E\times E}$ is a metric on $E$, and its balls are $B_E(f,r)=B_{V^*}(f,r)\cap E$ for $f\in E$ and $r>0$. Applying [F4] to $(E,d_E)$ gives exactly the stated relative interior and closure, with all balls taken in $E$. Together with steps 1.2, 2.1, 3.1, 2.2 and 3.2, this proves every assertion. [given, F4, F6, step 1.3, step 1.2, step 2.1, step 3.1, step 2.2, step 3.2] ∎


## Locally finite arrangements and relative face terminology

[Open item](item-def-arrangement-topology-interface-artin-tits-prerequisites) · level 0


### Definition

Let $E$ be a finite-dimensional real vector space, let $n=\dim_{\mathbb R}E$, and choose a linear coordinate isomorphism $c:E\to\mathbb R^n$. On $\mathbb R^n$ use the Euclidean metric $d_2(u,v)=(\sum_{i=0}^{n-1}(u_i-v_i)^2)^{1/2}$. Give $E$ the metric $d_E(x,y)=d_2(c(x),c(y))$ and its metric topology: $O\subseteq E$ is open if for each $x\in O$ there is $r>0$ such that $\{y\in E:d_E(x,y)<r\}\subseteq O$. For $n=0$, $\mathbb R^0$ and $E$ are singletons, the sum is empty and the metric is zero; the topology is $\{\varnothing,E\}$. This specifies the transported Euclidean topology. A subset $T\subseteq E$ is convex if $(1-t)x+ty\in T$ whenever $x,y\in T$ and $0\leq t\leq1$. Give $T$ the subspace topology: its open sets are the intersections of $T$ with open subsets of $E$. A neighbourhood of $x\in T$ is a subset of $T$ containing an open subset of $T$ that contains $x$.

An arrangement $(T,\mathcal A)$ consists of such a convex $T$ and a set $\mathcal A$ of linear hyperplanes $H\subseteq E$, each meeting $T$. A linear hyperplane is a linear subspace of codimension one. The arrangement is locally finite in $T$ if every $x\in T$ has a neighbourhood meeting only finitely many distinct members of $\mathcal A$. For a convex $T'\subseteq T$, its restriction has hyperplane set $\{H\in\mathcal A:H\cap T'\ne\varnothing\}$.

A chamber is a connected component of $T\setminus\bigcup_{H\in\mathcal A}H$, with the subspace topology. For a chamber $C$, write $\overline C$ for its closure in $E$: the points whose every open neighbourhood in $E$ meets $C$. An affine subspace of $E$ is a translate $a+U$ of a linear subspace $U\subseteq E$. Its direction space is $U=(a+U)-a$, and its affine dimension is $\dim_{\mathbb R}U$. For a nonempty set $A\subseteq E$, its affine hull $\operatorname{aff}(A)$ is the intersection of all affine subspaces containing $A$; its affine dimension is the affine dimension of $\operatorname{aff}(A)$. A wall of $C$ is a nonempty set $\overline C\cap H$ of affine dimension $\dim_{\mathbb R}E-1$, where $H\in\mathcal A$. No affine dimension is assigned to an empty intersection here. The wall is the intersection, while $H$ is its defining arrangement hyperplane; these are different kinds of objects. Two distinct chambers are adjacent if they share a wall. A gallery is a finite sequence of chambers in which consecutive chambers are adjacent; its length is the number of consecutive pairs.

A basis of a vector space is a linearly independent spanning set. An open simplicial cone in a finite-dimensional real vector space $F$ is a set $\{\sum_{i=1}^k t_i v_i:t_i>0\}$ for a basis $v_1,\ldots,v_k$ of $F$; for $k=0$ the empty sum is $0$. For an arrangement with $T=E$, put $L=\bigcap_{H\in\mathcal A}H$, taking $L=E$ when $\mathcal A$ is empty. The quotient vector space $E/L$ consists of cosets $x+L$ with operations $(x+L)+(y+L)=(x+y)+L$ and $t(x+L)=tx+L$; its canonical projection is $q:E\to E/L$, $q(x)=x+L$. The arrangement is simplicial if every chamber is of the form $L+\{\sum_{i=1}^k t_i v_i:t_i>0\}$, where $q(v_1),\ldots,q(v_k)$ form a basis of $E/L$. Thus the common linear factor is retained in $E$ and removed for the simplicial test.

### Definition references

[math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)

[math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)

[math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-affine-subspace-of-a-vector-space](https://alphabetamath.cc/item/def-affine-subspace-of-a-vector-space)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)

[math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

[math:def-metric-space](https://alphabetamath.cc/item/def-metric-space)

[math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)

### Justification

For $n\geq1$, the Euclidean metric supplier establishes that $d_2$ is a metric; transporting its distances along the bijection $c$ gives the metric axioms for $d_E$. For $n=0$, the zero metric on the singleton satisfies these axioms directly. Thus the metric topology and the coordinate isomorphism specify the topology used in all closure and neighbourhood statements. The subspace topology makes the stated relative neighbourhoods meaningful. Local finiteness applies the usual neighbourhood condition to the hyperplanes indexed by the distinct members of $\mathcal A$; it does not identify different hyperplanes merely because their traces on $T$ coincide. Connected components supply the chambers. The direction space of an affine subspace is independent of its chosen point: if $b\in a+U$, then $(a+U)-b=U$. For a nonempty $A$, fix $a\in A$; every affine subspace containing $A$ is $a+U$, so their intersection is $a+\bigcap U$, an affine subspace containing $A$ and contained in every such subspace. This proves that the stated affine hull is the smallest one. Its direction space is a subspace of the finite-dimensional $E$, so the finite-dimensional dimension applies. The wall definition selects a nonempty set by its specified intersection and affine dimension, so it makes no assertion that every arrangement hyperplane supports a wall. The gallery condition is a finite condition on already defined chambers and walls. Finally, $L$ is a linear subspace, since intersections preserve zero, addition and scalar multiplication. Hence the quotient construction applies, and the displayed criterion specifies simpliciality using the canonical images $q(v_i)$ in $E/L$.

For the empty arrangement with $T=E$, the complement is $E$. If $n\geq1$, [math:cor-rn-is-polygonally-connected-and-locally-path-connected](https://alphabetamath.cc/item/cor-rn-is-polygonally-connected-and-locally-path-connected) gives connectedness of $\mathbb R^n$ with its Euclidean topology. For each $x\in E$ and $r>0$, the bijection $c$ takes $\{y\in E:d_E(x,y)<r\}$ exactly onto $\{v\in\mathbb R^n:d_2(c(x),v)<r\}$. The ball criterion for openness therefore sends every open subset of $E$ to an open subset of $\mathbb R^n$. A separation of $E$ into two disjoint nonempty open sets would be carried by $c$ to such a separation of $\mathbb R^n$, contradicting connectedness ([math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)). If $n=0$, $E$ is a singleton and cannot be partitioned into two nonempty sets, so it is connected as well. Thus in every dimension $E$ is connected, and it is the sole chamber by the connected-component definition: the union of all connected subsets containing any given point already includes $E$ itself ([math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)). Here $L=E$, $E/L$ is the zero space with empty basis, and $L+\{0\}=E$, so this chamber satisfies the stated simpliciality criterion.


## Reduced-word lifts and the prefix-order convention

[Open item](item-prop-positive-lift-interface-artin-tits-prerequisites) · level 0


### Statement

Let $(W,S)$ be a finite-rank Coxeter system, with length $\ell(w)$ equal to the least length of a word in $S$ representing $w$. Let $A$ be its Artin group, generated by $\sigma_s$ for $s\in S$ with the braid relations, and let $\pi:A\to W$ send $\sigma_s$ to $s$. For a reduced expression $w=s_1\cdots s_r$, meaning one of length $r=\ell(w)$, put $\sigma_w=\sigma_{s_1}\cdots\sigma_{s_r}$, with the empty product equal to the identity. This element is independent of the reduced expression and satisfies $\pi(\sigma_w)=w$. If $\ell(uv)=\ell(u)+\ell(v)$, then $\sigma_{uv}=\sigma_u\sigma_v$.

For this interface, a left divisor of $v$ means a Coxeter prefix: an element $u$ such that $v=ux$ and $\ell(v)=\ell(u)+\ell(x)$ for some $x\in W$. The relation thus defined is the right weak order $u\le_R v$. The map $w\mapsto\sigma_w$ is a set-theoretic section of $\pi$; it is not asserted to be a homomorphism.

### Statement references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection)

[math:thm-hh-matsumoto-reduced-word-theorem](https://alphabetamath.cc/item/thm-hh-matsumoto-reduced-word-theorem)

[math:def-cg-left-right-weak-order-and-descents](https://alphabetamath.cc/item/def-cg-left-right-weak-order-and-descents)

### Facts & Assumptions

[F1] A reduced expression for $w\in W$ is a word in $S$ of length $\ell(w)$ representing $w$. ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length))

[F2] Any two reduced expressions for the same element of $W$ are connected by finitely many braid moves, each replacing one alternating braid word by the other. ([math:thm-hh-matsumoto-reduced-word-theorem](https://alphabetamath.cc/item/thm-hh-matsumoto-reduced-word-theorem))

[F3] The corresponding alternating words in the generators $\sigma_s$ are equal in $A$, and $\pi:A\to W$ is a homomorphism with $\pi(\sigma_s)=s$. ([math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations), [math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection))

[F4] Right weak order is defined by $u\le_R v$ exactly when $v=ux$ and $\ell(v)=\ell(u)+\ell(x)$ for some $x\in W$. ([math:def-cg-left-right-weak-order-and-descents](https://alphabetamath.cc/item/def-cg-left-right-weak-order-and-descents))

### Proof



**Given:** A finite-rank Coxeter system and its Artin group and projection as in the statement.

**Goal:** Establish the lift, its length-additive multiplication property, and the stated weak-order convention.

1.1 Choose two reduced expressions of $w$. By [F2] one passes from one to the other by finitely many braid moves. Each move preserves the corresponding product in $A$ by [F3], including when the alternating block occurs inside a longer word. Thus the product $\sigma_w$ is well defined; the empty expression gives the identity. Applying the homomorphism $\pi$ to any such product gives the product of its letters in $W$, namely $w$. [F1, F2, F3]

2.1 Choose reduced expressions for $u$ and $v$. Their concatenation represents $uv$ and has length $\ell(u)+\ell(v)$; under the displayed length equality it is reduced by [F1]. Its Artin product is $\sigma_u\sigma_v$, so step 1.1 identifies it with $\sigma_{uv}$. The definition in [F4] is exactly the stated Coxeter-prefix condition. Finally, $\pi(\sigma_w)=w$ makes the resulting map a set-theoretic section; the argument asserts multiplication only under the displayed length condition. [F1, F4, step 1.1] ∎



## Bounded weak-order joins and finite parabolic criteria

[Open item](item-prop-weak-order-interface-artin-tits-prerequisites) · level 0


### Statement

Let $(S,m)$ be a Coxeter matrix on a finite set, $W$ its presented Coxeter group, and $\ell(w)$ the minimum length of a word in $S$ representing $w$. The prefix order on $W$ is $u\preceq v$ exactly when $v=ux$ for some $x\in W$ with $\ell(v)=\ell(u)+\ell(x)$. An upper bound of $A\subseteq W$ is an element above every member of $A$; a join is an upper bound lying below every upper bound. Dually, a meet is a lower bound lying above every lower bound.

Every nonempty subset of $W$ has a meet, and a subset has a join exactly when it has an upper bound. If $W$ is finite, this order is a lattice, meaning that every pair has a meet and join, with top element $w_S$, the unique element of maximum length in $W$.

For $I\subseteq S$, put $W_I=\langle s:s\in I\rangle$. The set $I$ has a join exactly when $W_I$ is finite; then its join is $w_I$, the unique element of maximum length in $W_I$. This includes $I=\varnothing$, for which $w_I=1$. Thus a join in an infinite system is asserted only when its set is bounded above.

### Statement references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-cg-left-right-weak-order-and-descents](https://alphabetamath.cc/item/def-cg-left-right-weak-order-and-descents)

[math:thm-cg-weak-order-meet-semilattice-and-finite-lattice](https://alphabetamath.cc/item/thm-cg-weak-order-meet-semilattice-and-finite-lattice)

### Facts & Assumptions

[F1] [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length) defines $W$, its length, and $W_I=\langle s:s\in I\rangle$.

[F2] [math:def-cg-left-right-weak-order-and-descents](https://alphabetamath.cc/item/def-cg-left-right-weak-order-and-descents) defines right weak order by length-additive factorizations $v=ux$, and defines bounds, meets, and joins in that order.

[F3] [math:thm-cg-weak-order-meet-semilattice-and-finite-lattice](https://alphabetamath.cc/item/thm-cg-weak-order-meet-semilattice-and-finite-lattice) (1) says that every nonempty subset has a meet and has a join exactly when it is bounded above in right weak order. Its part (2) gives a lattice with maximum $w_S$ when $W$ is finite.

[F4] [math:thm-cg-weak-order-meet-semilattice-and-finite-lattice](https://alphabetamath.cc/item/thm-cg-weak-order-meet-semilattice-and-finite-lattice) (3) says that $I$ has an upper bound, equivalently a join, precisely when $W_I$ is finite; the join is its longest element $w_I$. For $I=\varnothing$, the join is $1$.

### Proof
**Given:** A Coxeter matrix $(S,m)$ on a finite set, its presented group $W$ with length $\ell$, a subset $A\subseteq W$, and a subset $I\subseteq S$.

**Goal:** Establish the stated meet, join, finite-group, and parabolic assertions for the prefix order.


1.1 The displayed prefix relation is the right weak order by [F2]. For nonempty $A$, [F3] therefore supplies its meet and the equivalence between existence of its join and existence of an upper bound. If $A=\varnothing$, every element is an upper bound, and [F4] supplies the join $1$ of the empty set. Hence the join equivalence holds for every $A\subseteq W$. [F2, F3, F4, given]

2.1 If $W$ is finite, [F3] gives the lattice and maximum $w_S$. For any $I\subseteq S$, [F1] identifies its standard parabolic subgroup, and [F4] gives the stated finiteness criterion and join value, including the empty case. The final boundedness qualification follows from step 1.1. [F1, F3, F4, step 1.1, given] ∎



## Nonnegative inverse matrices preserve extremal basis rays

[Open item](item-lem-nonnegative-inverse-interface-artin-tits-prerequisites) · level 0


### Statement

Let $A$ be an invertible $n\times n$ real matrix such that $A$ and $A^{-1}$ are entrywise nonnegative. Then $A=PD$, where $P$ is a permutation matrix and $D$ is a diagonal matrix with strictly positive diagonal entries. Here a permutation matrix has exactly one entry $1$ in each row and each column and all other entries zero.

Suppose in addition that $A$ is the change-of-basis matrix from an ordered basis $\mathcal B=(b_1,\ldots,b_n)$ to an ordered basis $\mathcal C=(c_1,\ldots,c_n)$ of the canonical Coxeter representation, and that all these basis vectors are roots. Then $D=I_n$, so $A$ is a permutation matrix. The case $n=0$ is allowed.

### Statement references

[math:def-invertible-matrix-and-general-linear-group](https://alphabetamath.cc/item/def-invertible-matrix-and-general-linear-group)

[math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-change-of-basis-matrix](https://alphabetamath.cc/item/def-change-of-basis-matrix)

[math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection)

[math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)

[math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)

### Facts & Assumptions

[F1] Invertibility gives $AB=BA=I_n$ for $B=A^{-1}$; the entries of a matrix product are finite sums of products, and $I_n$ has diagonal entries $1$ and off-diagonal entries $0$. The unique $0\times0$ matrix is $I_0$ ([math:def-invertible-matrix-and-general-linear-group](https://alphabetamath.cc/item/def-invertible-matrix-and-general-linear-group), [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)).

[F2] In the ordered field of real numbers, products and finite sums of nonnegative numbers are nonnegative; a finite sum of nonnegative numbers equal to zero has every summand zero, and a positive factor in a zero product forces the other factor to be zero ([math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field)).

[F3] The $j$-th column of the change-of-basis matrix from $\mathcal B$ to $\mathcal C$ consists of the coefficients of $b_j$ in the basis $\mathcal C$ ([math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis), [math:def-change-of-basis-matrix](https://alphabetamath.cc/item/def-change-of-basis-matrix)).

[F4] The canonical Coxeter form $Q$ is bilinear, and every root $v$ in its canonical representation satisfies $Q(v,v)=1$; no positive-definiteness of $Q$ is assumed ([math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection), [math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism), [math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)).

### Proof



**Given:** $A$ and $B=A^{-1}$ are entrywise nonnegative, with the additional basis hypotheses in the second assertion.

**Goal:** Show $A=PD$ with $P$ a permutation matrix and $D$ positive diagonal, and show $D=I_n$ under the basis hypotheses.

1.1 Suppose $n>0$. For each row $i$, the diagonal equation $1=(AB)_{ii}=\sum_k a_{ik}b_{ki}$ gives an index $k$ with $a_{ik}>0$ and $b_{ki}>0$. If also $a_{i\ell}>0$ for some $\ell\ne k$, then the off-diagonal equation $0=(BA)_{k\ell}=\sum_r b_{kr}a_{r\ell}$ has the strictly positive summand $b_{ki}a_{i\ell}$, a contradiction. Thus each row of $A$ has exactly one positive entry and all its other entries are zero. [given, F1, F2]

2.1 Let $k(i)$ be the column of the positive entry in row $i$. If distinct rows $i,j$ had $k(i)=k(j)=k$, then 1.1 supplies $b_{ki}>0$, while $0=(AB)_{ji}=\sum_r a_{jr}b_{ri}$ contains the positive summand $a_{jk}b_{ki}$, a contradiction. Hence the $n$ indices $k(i)$ are distinct and cover all $n$ columns. Define $P$ to have entry $1$ at each $(i,k(i))$ and zero elsewhere, and let $D_{kk}$ be the unique positive entry of $A$ in column $k$. Then $P$ is a permutation matrix, $D$ is positive diagonal, and $A=PD$. For $n=0$, the unique empty matrices satisfy the same conclusion with $P=D=I_0$. [F1, F2, step 1.1, construct]

3.1 Under the basis hypotheses, column $j$ of $A=PD$ gives $b_j=d_jc_{\pi(j)}$ for a permutation $\pi$ and $d_j=D_{jj}>0$. By bilinearity and the unit root identities, $1=Q(b_j,b_j)=d_j^2Q(c_{\pi(j)},c_{\pi(j)})=d_j^2$. Positivity gives $d_j=1$ for every $j$; this is also vacuous for $n=0$. Therefore $D=I_n$ and $A=P$. [given, F2, F3, F4, step 2.1, algebra] ∎


## Normalizer quotients, kernels and conditional surjectivity

[Open item](item-prop-normaliser-quotient-interface-artin-tits-prerequisites) · level 0


### Statement

Let $H$ be a subgroup of a group $G$. Its normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$. Then $H$ is normal in $N_G(H)$, so the quotient group $N_G(H)/H$ exists.

Let $p:G\to Q$ be a group homomorphism and put $K=p(H)$. The rule $\bar p(gH)=p(g)K$ defines a homomorphism from $N_G(H)/H$ to $N_Q(K)/K$. Its kernel is $\{aH:a\in\ker p\cap N_G(H)\}$, and its image is $p(N_G(H))/K$. In particular, $\bar p$ is surjective if and only if $p(N_G(H))=N_Q(K)$.

More generally, if $\pi:E\to B$ is a surjective group homomorphism with kernel $M$ and $C\leq E$, then $\pi|_C:C\to B$ is an isomorphism exactly when $E=MC$ and $M\cap C=\{1\}$. Under these conditions $E$ is isomorphic to $M\rtimes B$ by a map compatible with the inclusion of $M$ and the quotient map, with action induced by conjugation through $(\pi|_C)^{-1}$.

### Statement references

[math:def-normalizer-of-a-subgroup](https://alphabetamath.cc/item/def-normalizer-of-a-subgroup)

[math:lem-centralizers-and-normalizers-are-subgroups](https://alphabetamath.cc/item/lem-centralizers-and-normalizers-are-subgroups)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:thm-first-isomorphism-theorem-groups](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-groups)

[math:thm-splitting-lemma-for-group-extensions](https://alphabetamath.cc/item/thm-splitting-lemma-for-group-extensions)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)

[math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

[math:def-external-semidirect-product](https://alphabetamath.cc/item/def-external-semidirect-product)

[math:def-split-extension-of-groups](https://alphabetamath.cc/item/def-split-extension-of-groups)

[math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism)

[math:def-coset](https://alphabetamath.cc/item/def-coset)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-action-by-automorphisms](https://alphabetamath.cc/item/def-action-by-automorphisms)

### Facts & Assumptions

[F1] The normalizer consists of precisely the elements that conjugate the subgroup onto itself; it is a subgroup. ([math:def-normalizer-of-a-subgroup](https://alphabetamath.cc/item/def-normalizer-of-a-subgroup), [math:lem-centralizers-and-normalizers-are-subgroups](https://alphabetamath.cc/item/lem-centralizers-and-normalizers-are-subgroups))

[F2] A left coset is $gH=\{gh:h\in H\}$. For a normal subgroup, quotient elements are cosets and their product is $(gH)(hH)=ghH$. ([math:def-coset](https://alphabetamath.cc/item/def-coset), [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group))

[F3] A group homomorphism induces an isomorphism from its quotient by its kernel onto its image. ([math:thm-first-isomorphism-theorem-groups](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-groups))

[F4] For a surjective group homomorphism, a complement to its kernel yields a compatible semidirect-product decomposition, with the quotient acting by conjugation through the corresponding section. A complement $C$ satisfies $E=MC$ and $M\cap C=\{1\}$. ([math:thm-splitting-lemma-for-group-extensions](https://alphabetamath.cc/item/thm-splitting-lemma-for-group-extensions))

[F5] A group homomorphism preserves products, the identity and inverses. Its restriction to a subgroup is a homomorphism because the same product identity holds on the subgroup. ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties))

[F6] For a homomorphism $f:X\to Y$, its kernel is $\{x\in X:f(x)=1_Y\}$ and its image is $\{f(x):x\in X\}$; it is surjective precisely when its image is $Y$. ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection))

[F7] A subgroup $L\leq X$ is normal in $X$ precisely when $xLx^{-1}=L$ for every $x\in X$. ([math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup))

[F8] The image of a group homomorphism is a subgroup of its codomain, and its kernel is normal in its domain. ([math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal))

[F9] Groups obey associativity, identity and inverse laws. A subgroup contains the identity and is closed under products and inverses, with the inherited group structure. ([math:def-group](https://alphabetamath.cc/item/def-group), [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup))

[F10] A map is injective if equal images imply equal inputs, surjective if every target element has a preimage, and bijective if both conditions hold. An isomorphism is a bijective group homomorphism, and its inverse is a group homomorphism. ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism), [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism))

[F11] A short exact sequence consists of an injective homomorphism followed by a surjective homomorphism whose kernel is the image of the first. A section $s:B\to E$ is a homomorphism with $\pi\circ s=\operatorname{id}_B$; a complement $C$ satisfies $E=(\ker\pi)C$ and $(\ker\pi)\cap C=\{1\}$. ([math:def-split-extension-of-groups](https://alphabetamath.cc/item/def-split-extension-of-groups), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection))

[F12] An action by automorphisms is a homomorphism $\alpha:B\to\operatorname{Aut}(M)$. For such an action, the external semidirect product $M\rtimes_\alpha B$ has underlying set $M\times B$ and product $(m,b)(m^{\prime},b^{\prime})=(m\alpha_b(m^{\prime}),bb^{\prime})$. ([math:def-action-by-automorphisms](https://alphabetamath.cc/item/def-action-by-automorphisms), [math:def-external-semidirect-product](https://alphabetamath.cc/item/def-external-semidirect-product))

### Proof
**Given:** Groups $G,Q$, a subgroup $H\leq G$, and a homomorphism $p:G\to Q$, with $K=p(H)$. Also given are a surjective homomorphism $\pi:E\to B$, its kernel $M$, and a subgroup $C\leq E$.

**Goal:** Establish the quotient map, its kernel and image, and the stated splitting criterion.


1.1 By [F5], $p|_H:H\to Q$ is a homomorphism, so [F8] gives $K=p(H)\leq Q$. Every $h\in H$ conjugates $H$ onto itself, so $H\leq N_G(H)$. By [F1], every element of $N_G(H)$ conjugates $H$ onto itself; hence $H$ is normal there by [F7]. The same reasoning applies to the subgroup $K\leq Q$, so both quotient groups exist by [F2]. For $g\in N_G(H)$, preservation of products and inverses in [F5] gives $p(g)Kp(g)^{-1}=p(gHg^{-1})=K$, and therefore $p(g)\in N_Q(K)$. [given, F1, F2, F5, F7, F8, F9]

1.2 The restriction $\pi|_C$ is a homomorphism by [F5]; its kernel is $M\cap C$, and its image is $\pi(C)$ by [F6]. By [F3], the restriction is an isomorphism onto $B$ exactly when $M\cap C=\{1\}$ and $\pi(C)=B$. The latter equality is equivalent to $E=MC$: if $\pi(C)=B$, then for each $e\in E$ choose $c\in C$ with $\pi(c)=\pi(e)$; [F5] gives $\pi(ec^{-1})=1_B$, so $ec^{-1}\in M$ and $e\in MC$. Conversely, applying $\pi$ to $E=MC$ gives $B=\pi(E)=\pi(C)$ because $\pi(M)=\{1_B\}$. [given, F3, F5, F6, F9, F10]

2.1 Define $\bar p(gH)=p(g)K$. If $gH=g'H$, then $g'=gh$ for some $h\in H$, and $p(g')K=p(g)p(h)K=p(g)K$ by [F5]. Thus the rule is well defined; the coset product in [F2] and preservation of products show that it is a homomorphism. By [F5] and [F8] applied to $p|_{N_G(H)}$, the image $p(N_G(H))$ is a subgroup of $N_Q(K)$. Since $K=p(H)\leq p(N_G(H))$ and $K$ is normal in $N_Q(K)$, it is normal in this image subgroup by [F7]. The image of $\bar p$ is therefore the quotient group $p(N_G(H))/K$. [step 1.1, F2, F5, F6, F7, F8, given]

3.1 If $a\in\ker p\cap N_G(H)$, then $aH\in\ker\bar p$ by [F6]. Conversely, if $gH\in\ker\bar p$, then $p(g)\in K=p(H)$; choose $h\in H$ with $p(h)=p(g)$. By [F5], $a=gh^{-1}$ has $p(a)=1_Q$ and lies in $\ker p\cap N_G(H)$, with $aH=gH$. This proves the kernel formula. Since $K\leq p(N_G(H))\leq N_Q(K)$, equality of the two quotient groups $p(N_G(H))/K$ and $N_Q(K)/K$ is equivalent to equality of their numerator subgroups: if their coset sets agree, every $n\in N_Q(K)$ has $nK=xK$ for some $x\in p(N_G(H))$, and then $n\in xK\subseteq p(N_G(H))$. The image calculation and [F6] therefore give the stated equivalence for surjectivity. [step 1.1, step 2.1, given, F2, F5, F6]

4.1 Under the equivalent conditions of step 1.2, $C$ is a complement to $M$ in the sense of [F11]. By [F8], $M=\ker\pi$ is normal in $E$. The inclusion $M\hookrightarrow E$ is an injective homomorphism with image $\ker\pi$, and $\pi$ is surjective, so these maps form a short exact sequence by [F11]. By [F10], $(\pi|_C)^{-1}:B\to C$ is a homomorphism; composing it with the subgroup inclusion gives a homomorphism $s:B\to E$ by [F5]. Since $\pi\circ s=\operatorname{id}_B$, it is a section by [F11]. Applying [F4] gives the compatible isomorphism $M\rtimes B\cong E$, using the external product of [F12] with action $\alpha_b(m)=s(b)ms(b)^{-1}$. This completes the proof. [step 1.2, F4, F5, F8, F9, F10, F11, F12, given] ∎

### Remarks

Surjectivity of the original map $p$ alone does not assert the normalizer-lifting equality. Its verification in any particular Artin–Coxeter application requires the hypotheses of that application.


## Root signs, inversions and descent translation

[Open item](item-prop-root-inversion-interface-artin-tits-prerequisites) · level 1


### Statement

Let $S$ be finite and let $(W,S)$, $V$, its basis $(e_s)_{s\in S}$, the Coxeter form $B$, the canonical representation, the root set $\Phi$, the dual action, and the open chamber $C^\circ$ be as in the canonical real Coxeter interface. Let $\ell(w)$ be the minimum length of a word in $S$ representing $w$. Put $V_+=\{\sum_{s\in S}a_se_s:a_s\geq0\}$ and $\Phi_+=\Phi\cap V_+$. A root in $-\Phi_+$ is called negative.

Every root has exactly one sign: $\Phi=\Phi_+\sqcup(-\Phi_+)$. For $N(w)=\{\alpha\in\Phi_+:w\alpha\in-\Phi_+\}$ one has $|N(w)|=\ell(w)=\ell(w^{-1})$. For $s\in S$, the chamber $wC^\circ$ lies in $\{f:f(e_s)<0\}$ exactly when $\ell(sw)<\ell(w)$, equivalently when $w^{-1}e_s$ is negative.

For a root $\alpha$, write $H_\alpha=\{f\in V^*:f(\alpha)=0\}$. Distinct positive roots have distinct full hyperplanes $H_\alpha$. The map $\alpha\mapsto H_\alpha\cap U$ need not be injective when restricted to a real linear subspace $U\subseteq V^*$.

### Statement references

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)

[math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange)

[math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:lem-cg-dual-action-and-chamber-faces-exist](https://alphabetamath.cc/item/lem-cg-dual-action-and-chamber-faces-exist)

[math:def-function-space](https://alphabetamath.cc/item/def-function-space)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

### Facts & Assumptions

[F1] Roots split disjointly into $\Phi_+$ and $-\Phi_+$; a positive root is evaluated positively, and a negative root negatively, by every member of $C^\circ$. [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)

[F2] For every $w\in W$, $|N(w)|=\ell(w)$. [math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange)

[F3] For $x\in W$ and $s\in S$, $xe_s$ is negative if and only if $\ell(xs)<\ell(x)$. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F4] Every root $\alpha$ satisfies $B(\alpha,\alpha)=1$. [math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)

[F5] Each $s\in S$ is an involution, and $\ell(x)$ is the least length of a representing word. [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[F6] The dual action satisfies $(wf)(v)=f(w^{-1}v)$, and $e_s$ are basis vectors and roots. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F7] The chamber $C^\circ$ is nonempty, by statement (2) of [math:lem-cg-dual-action-and-chamber-faces-exist](https://alphabetamath.cc/item/lem-cg-dual-action-and-chamber-faces-exist), applied to this finite $S$ and its canonical real representation.

[F8] A real linear subspace contains zero and is closed under addition and real scalar multiplication; in particular $\{0\}$ is a real linear subspace of $V^*$. [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[F9] In the function space $V=\mathbb R^S$, operations are pointwise and vectors are equal exactly when all their values agree. The full algebraic dual $V^*$ consists of all real linear functionals on $V$, with pointwise operations. [math:def-function-space](https://alphabetamath.cc/item/def-function-space) [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

### Proof
**Given:** the finite Coxeter system and the representation and notation in the Statement.


**Proof technique:** direct.

**Goal:** establish the sign, inversion, side and hyperplane assertions in the Statement.

1.1 **Signs and inversion counts.** The sign decomposition is [F1], and the first equality $|N(w)|=\ell(w)$ is [F2]. Reversing any word in the involutive generators represents the inverse element and has the same length. Applying this observation to reduced words for $w$ and $w^{-1}$ gives both inequalities and hence $\ell(w)=\ell(w^{-1})$. [F1, F2, F5, given]

1.2 **Coordinate separation.** For $s\in S$ define $\varepsilon_s(v)=v(s)$ on the supplied function space $V=\mathbb R^S$. Pointwise operations give $\varepsilon_s(av+bz)=a\varepsilon_s(v)+b\varepsilon_s(z)$, so $\varepsilon_s\in V^*$. If $v\ne0$, some $s$ satisfies $v(s)\ne0$, and then $f_0=\varepsilon_s/v(s)$ satisfies $f_0(v)=1$. Moreover, if $f(v)=f(z)$ for every $f\in V^*$, applying each $\varepsilon_s$ gives $v(s)=z(s)$ for every $s$, hence $v=z$. Thus the explicitly constructed coordinate functionals separate vectors; no basis extension or choice principle is used. [F6, F9, given, construct]

2.1 **Full hyperplanes.** Suppose $H_\alpha=H_\beta$ for positive roots. By [F4] both roots are nonzero. Step 1.2 gives $f_0\in V^*$ with $f_0(\alpha)=1$. Put $c=f_0(\beta)$. For any $f\in V^*$ the functional $g=f-f(\alpha)f_0$ belongs to $V^*$ by [F9] and satisfies $g(\alpha)=0$. Equality of the hyperplanes implies $g(\beta)=0$, so $f(\beta)=c f(\alpha)=f(c\alpha)$ for every $f\in V^*$. Coordinate separation from 1.2 gives $\beta=c\alpha$, and $c\ne0$ because $\beta\ne0$. A positive root $\alpha$ has some strictly positive coordinate, and $\beta=c\alpha$ has only nonnegative coordinates; hence $c>0$. By [F4], $1=B(\beta,\beta)=c^2B(\alpha,\alpha)=c^2$, so $c=1$ and $\alpha=\beta$. [F4, F6, F9, step 1.2, given, algebra]

2.2 **Translate the side condition.** By [F6], for $f\in C^\circ$ one has $(wf)(e_s)=f(w^{-1}e_s)$. If $w^{-1}e_s$ is negative, [F1] makes every such value negative. Conversely, if all these values are negative, the root cannot be positive because [F7] supplies a member of $C^\circ$ and positive roots evaluate positively there; the sign decomposition makes it negative. By [F3], applied to $x=w^{-1}$, this is equivalent to $\ell(w^{-1}s)<\ell(w^{-1})$. The length equality from 1.1, applied also to $w^{-1}s$, converts this to $\ell(sw)<\ell(w)$. [F1, F3, F6, F7, step 1.1]

3.1 **Restriction can identify hyperplanes.** Take $S=\{s,t\}$ with $m(s,t)=2$. The distinct basis roots $e_s,e_t$ are positive. For the real linear subspace $U=\{0\}\subseteq V^*$ supplied by [F8], both $H_{e_s}\cap U$ and $H_{e_t}\cap U$ equal $\{0\}$. Thus restriction need not preserve injectivity. Together with steps 1.1, 2.1 and 2.2 this proves all assertions. [F1, F6, F8, step 1.1, step 2.1, step 2.2] ∎


## Sign cells and local finite-arrangement reductions

[Open item](item-prop-sign-chamber-interface-artin-tits-prerequisites) · level 1


### Statement

Let $E$ be a finite-dimensional real vector space with its Euclidean topology, and let $T\subseteq E$ be open and convex. Let $\mathcal A$ be a set of distinct linear hyperplanes, each meeting $T$, locally finite in $T$: each point of $T$ has a neighbourhood meeting only finitely many members. For each $H\in\mathcal A$, choose a nonzero linear functional $a_H:E\to\mathbb R$ with kernel $H$. A chamber is a connected component of $T\setminus\bigcup_{H\in\mathcal A}H$.

For any assignment $\epsilon_H\in\{1,-1\}$, the corresponding strict sign cell is $C_\epsilon=\{x\in T:\epsilon_Ha_H(x)>0\text{ for every }H\in\mathcal A\}$. Every nonempty sign cell is a convex chamber, and every chamber is a sign cell.

For a chamber $C=C_\epsilon$ and a point $p\in\overline C\cap T$, there is an open convex neighbourhood $U$ of $p$ contained in $T$ that meets $C$ and only finitely many hyperplanes. For every such $U$, writing $\mathcal A_U=\{H\in\mathcal A:H\cap U\ne\varnothing\}$, one has $\overline C\cap U=\{x\in U:\epsilon_Ha_H(x)\geq0\text{ for all }H\in\mathcal A_U\}$. Here $\overline C$ denotes closure in $E$. In particular, if a wall is an intersection $\overline C\cap H_0$ of affine dimension $\dim E-1$ for $H_0\in\mathcal A$, its intersection with $U$ is described by these finitely many weak inequalities together with $a_{H_0}=0$; it is empty if $H_0$ does not meet $U$. No neighbourhood assertion at a boundary point outside $T$ is made.

### Statement references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)

[math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)

[math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)

### Facts & Assumptions

[F1] The arrangement terminology, chamber as a connected component, closure in $E$, and wall as the specified hyperplane intersection are defined in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites).

[F2] A defining functional is linear, so $a_H((1-t)x+ty)=(1-t)a_H(x)+ta_H(y)$; see [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional). A set is convex when it contains every segment between its points, as in [math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space).

[F3] Connectedness means absence of a separation into two nonempty disjoint relatively open sets; singletons are connected, as in [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space). The connected component of a point is the largest connected subset containing that point, as established in [math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent).

[F4] Every convex subset of $\mathbb R^n$ for $n\geq1$, with its usual topology, is connected, by claim 1 of [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected).

[F5] For a linear map $L:\mathbb R^m\to\mathbb R^k$, there is a constant $K\geq0$ such that $\|Lh\|_2\leq K\|h\|_2$ for every $h$, by [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded).

### Proof
**Given:** The space, open convex domain, locally finite hyperplanes, defining functionals and signs in the statement.

**Goal:** Identify the chambers with the nonempty sign cells and establish the stated finite local description.


1.1 Write $n=\dim E$ and let $\phi:E\to\mathbb R^n$ be the chosen linear coordinates transporting the Euclidean topology, as in [F1]. If $n\geq1$, apply [F5] to the linear map $a_H\circ\phi^{-1}:\mathbb R^n\to\mathbb R$ to obtain $|a_H(x)-a_H(y)|\leq K_H\|\phi(x)-\phi(y)\|_2$. For each $\eta>0$, taking $\delta=\eta/(K_H+1)$ shows that coordinate distance less than $\delta$ implies $|a_H(x)-a_H(y)|<\eta$; thus each defining functional is continuous. Also, a separation of a convex subset of $E$ would transport under $\phi$ to a separation of its convex coordinate image, contrary to [F4]; hence every convex subset of $E$ is connected. If $n=0$, every subset of $E=\{0\}$ is empty or a singleton and is connected by [F3]; there are no nonzero linear functionals and no linear hyperplanes, so the functional assertions are vacuous. These arguments establish the needed continuity and connectedness in all dimensions. [F1, F2, F3, F4, F5, given]

2.1 For two points in a sign cell, the linearity in [F2] makes every prescribed signed value strictly positive along their connecting segment; convexity of $T$ keeps that segment in $T$. Thus the cell is convex and is connected by step 1.1. Conversely, on any connected subset of the arrangement complement, each $a_H$ has a constant strict sign: by step 1.1 its positive and negative inverse images are disjoint relatively open sets whose union is the subset, and if both were nonempty they would give a separation forbidden by [F3]. Each nonempty sign cell is therefore a connected subset containing every connected subset of the complement that meets it. For a point in the cell, its component contains the cell and is contained in it by [F3] and this constant-sign property. Thus the cell is a chamber, and every chamber is obtained in this way. [F1, F2, F3, step 1.1, given]

3.1 Let $p\in\overline C\cap T$. Local finiteness and openness of $T$ allow an open coordinate ball $U$ around $p$ contained in $T$ and meeting only finitely many hyperplanes. It is convex, and it meets $C$ because $p\in\overline C$. Now let $U$ be any open convex neighbourhood with these properties and choose $q\in C\cap U$. If $H$ misses $U$, the continuous function $a_H$ has constant nonzero sign on the connected set $U$, so its sign there is $\epsilon_H$. If $x\in\overline C\cap U$, continuity gives $\epsilon_Ha_H(x)\geq0$ for each $H\in\mathcal A_U$. Conversely, suppose $x\in U$ satisfies those finitely many weak inequalities. The preceding observation gives strict signed positivity at $x$ for every other hyperplane. For $0<t\leq1$, the point $x_t=(1-t)x+tq$ lies in $U\subseteq T$, and linearity gives $\epsilon_Ha_H(x_t)>0$ for every $H\in\mathcal A$, including those whose signed value at $x$ is zero. Hence $x_t\in C$ by step 2.1, and $x_t\to x$, proving the closure formula. Intersecting that formula with $H_0=\ker a_{H_0}$ gives the wall description; if $H_0$ misses $U$ the intersection is empty. This proves the claims within $T$. [F1, F2, step 1.1, step 2.1, given] ∎


## Finite galleries and separating hyperplanes

[Open item](item-prop-gallery-separation-interface-artin-tits-prerequisites) · level 1


### Statement

Let $T$ be an open convex subset of a finite-dimensional real vector space $E$, and let $\mathcal A$ be a locally finite arrangement of linear hyperplanes in $T$. A hyperplane separates two chambers if the chambers lie in opposite open half-spaces bounded by it. Each adjacency in a gallery has a unique defining hyperplane; say the gallery crosses that hyperplane at the adjacency. Any two chambers are joined by a finite gallery. A gallery between them has minimum length if and only if it crosses each separating hyperplane exactly once and crosses no other hyperplane. The minimum length is the number of distinct separating hyperplanes; coincident hyperplanes are counted once.

### Statement references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

### Facts & Assumptions

[F1] The arrangement interface defines local finiteness, chambers as connected components, walls using closures in $E$, adjacency as a shared wall, and finite galleries ([def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)).

[F2] Convexity puts every segment between points of $T$ in $T$ ([math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)).

[F3] A linear hyperplane is a linear subspace with one-dimensional quotient ([math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)). Step 2.1 constructs its continuous defining form in the coordinate Euclidean topology and proves its closedness.

[F4] Compactness of a subset is defined intrinsically in its metric subspace ([math:def-metric-compactness](https://alphabetamath.cc/item/def-metric-compactness)). For $n\geq1$, a closed bounded subset of $\mathbb R^n$ is compact ([math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), assertion 2). A compact subset of a metric space has a finite subcover from every cover by ambient open sets ([math:lem-compactness-is-intrinsic](https://alphabetamath.cc/item/lem-compactness-is-intrinsic), assertion 2).

[F5] A finite-dimensional vector space over an infinite field is not a finite union of proper linear subspaces ([math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces](https://alphabetamath.cc/item/lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces)).

[F6] The real interval $[0,1]$ is connected, since it is order-convex ([math:thm-connected-subsets-of-r-are-intervals](https://alphabetamath.cc/item/thm-connected-subsets-of-r-are-intervals)).

[F7] The image of a connected subset under a continuous map is connected in the subspace topology ([math:thm-continuous-image-of-a-connected-space](https://alphabetamath.cc/item/thm-continuous-image-of-a-connected-space), assertion 1).

### Proof

**Given:** An open convex $T\subseteq E$ and a locally finite arrangement $\mathcal A$ as stated, with the coordinate Euclidean topology specified by [F1].

**Goal:** Establish the gallery and minimum-length assertions.

1.1 If $T$ is empty there are no chambers, so the assertions about chambers and galleries are vacuous. If $\dim E=0$ and $T$ is nonempty, then $T=E=\{0\}$, there are no hyperplanes, and there is just one chamber. Its one-chamber gallery has length zero, and no adjacency of distinct chambers is possible. All conclusions follow. Henceforth assume $T\ne\varnothing$ and $n=\dim E\geq1$, and use the coordinate Euclidean norm $\|\cdot\|$ on $E$. [F1, F3, given]

1.2 We will use the following interpolation fact, proved here. If $V\subseteq E$ is nonempty, open and convex, $z\in\overline V$, $b\in V$ and $0<t\leq1$, then $(1-t)z+tb\in V$. The case $t=1$ is immediate. For $0<t<1$, take $r>0$ with $B(b,r)\subseteq V$ and, by the definition of closure, take $v\in V$ with $\|v-z\|<tr/(1-t)$. Then $b'=b+(1-t)(z-v)/t$ lies in $B(b,r)$, and $(1-t)z+tb=(1-t)v+tb'\in V$ by convexity. As $t$ tends to zero these points approach $z$, since their distance from $z$ is $t\|b-z\|$. [F1, F2, choose, algebra]

2.1 Let $e_1,\ldots,e_n$ be the coordinate basis. For each hyperplane $H$, let $j$ be the least index for which $e_j\notin H$. Since $E/H$ is one-dimensional, every $z\in E$ has a unique expression $z=h+t e_j$ with $h\in H$ and $t\in\mathbb R$. Set $\alpha_H(z)=t$. Uniqueness gives linearity, $\alpha_H(e_j)=1$, and $\ker\alpha_H=H$. With $a_i=\alpha_H(e_i)$ and $z=\sum_i z_i e_i$, we have $\alpha_H(z)=\sum_i a_i z_i$ and $|\alpha_H(z)-\alpha_H(w)|\leq(\sum_i|a_i|)\|z-w\|$. The positive constant $\sum_i|a_i|$ therefore gives continuity. The preimage of $\{0\}$ is closed, and the two strict sign sets are open half-spaces: for a nonzero value, a ball of radius less than $|\alpha_H(z)|/(\sum_i|a_i|)$ preserves its sign. Thus $H$ is closed. The least-index rule specifies these forms without an arbitrary family of choices. [F1, F3, step 1.1, construct, algebra]

2.2 Every convex subset $S\subseteq E$ is connected. Indeed, for $u,v\in S$ the segment map $\gamma:[0,1]\to E$, $\gamma(t)=(1-t)u+tv$, has image in $S$, and $\|\gamma(t)-\gamma(s)\|=|t-s|\|v-u\|$ proves continuity. Its image is connected by [F6] and [F7]. If $S$ had a separation into two nonempty relatively open parts, choosing $u$ and $v$ in different parts would give a separation of this segment by their traces, a contradiction. Empty sets and singletons have no such separation. This applies in particular to balls, half-balls, and the convex sign sets below. [F2, F6, F7, step 1.1, choose]

3.1 Local finiteness and closedness of the hyperplanes show that their union is relatively closed in $T$: near a point outside the union, take an open neighbourhood meeting only finitely many hyperplanes and remove those closed sets. The complement is therefore open in $E$, since $T$ is open. Any connected subset of the complement has a constant sign for every $\alpha_H$, since the two open half-spaces would otherwise separate it. Conversely, every realizable sign set in $T$ is convex, hence connected by step 2.2, and lies in the complement. Thus chambers are exactly these sign sets and are convex. Each point of the complement has a ball inside it; that ball is connected and hence lies in the point's chamber. Consequently chambers are open. [F1, F2, step 2.1, step 2.2]

4.1 Choose $x\in C$ and $y_0\in D$ for any two chambers $C,D$. Their closed bounded segment $K=[x,y_0]$ lies in $T$. In coordinates it is compact by [F4], with $n\geq1$ by step 1.1; transporting a cover along the coordinate isometry gives compactness in $E$. Local finiteness and openness of $T$ cover $K$ by open subsets of $E$, contained in $T$, each meeting only finitely many arrangement hyperplanes. The ambient-cover assertion of [F4] gives a finite subcover. Its union is an open neighbourhood $U\subseteq T$ of $K$ meeting only finitely many hyperplanes. Cover $K$ also by all balls $B(p,r/2)$ with $p\in K$, $r>0$, and $B(p,r)\subseteq U$. The same ambient-cover assertion yields finitely many such balls. The minimum $\varepsilon>0$ of their half-radii ensures that every point at distance less than $\varepsilon$ from some point of $K$ lies in $U$, by the triangle inequality. Since $\|(1-t)x+ty-((1-t)x+ty_0)\|\leq\|y-y_0\|$ for $0\leq t\leq1$, every $y\in D$ sufficiently close to $y_0$ has its whole segment from $x$ inside $U$. [F1, F2, F4, step 1.1, step 3.1, choose]

4.2 Suppose distinct chambers $C,D$ share a wall $W=\overline C\cap H=\overline D\cap K$. Since $W$ has affine dimension $n-1$ and is contained in both hyperplanes, its affine hull is both $H$ and $K$, so $H=K$. The set $\overline C$ is convex: given $u,v\in\overline C$, $0\leq s\leq1$ and $\delta>0$, choose $c,d\in C$ within $\delta$ of $u,v$, respectively. Then $(1-s)c+sd\in C$ by step 3.1 and is within $\delta$ of $(1-s)u+sv$, proving that this last point is in $\overline C$. Hence $W$ is convex. Put $d=n-1$. Starting with $w_0\in W$, repeatedly choose a point of $W$ outside the affine span of the points already chosen until it is $H$; this gives $w_0,\ldots,w_d\in W$ with $w_i-w_0$ a basis of $H$. For $d>0$, the set $O=\{w_0+\sum_{i=1}^d\lambda_i(w_i-w_0):\lambda_i>0,\ \sum_{i=1}^d\lambda_i<1\}$ is contained in $W$ by repeated convex combinations. The coefficient functions $\lambda_i$ on $H$ are continuous: extend the basis of $H$ to one of $E$; each coefficient of $z-w_0$ is a linear combination of its Euclidean coordinates, hence an affine function of $z$ whose continuity follows from the finite-sum bound of step 2.1. Thus the strict inequalities define a relatively open subset of $H$, nonempty because it contains the barycentre of $w_0,\ldots,w_d$. For $d=0$, take $O=W=H=\{0\}$. This proves locally that $W$ contains a nonempty relatively open subset $O$ of $H$. [F1, F2, F3, step 2.1, step 3.1, choose, algebra]

5.1 Choose $q\in H\cap T$, which exists because $H$ is an arrangement hyperplane. For every $z\in W$, we have $z\in\overline T$, so step 1.2 with $V=T$ and $b=q$ gives $(1-t)z+tq\in H\cap T$ for $0<t\leq1$. These points approach $z$. Therefore $W$ is contained in the closure in $H$ of $H\cap T$. In particular the nonempty relatively open set $O\subseteq W$ of step 4.2 meets $H\cap T$ by the definition of closure. Thus $O\cap T$ is nonempty and relatively open in $H$. Choose $a\in O\cap T$ and an open neighbourhood $N\subseteq T$ of $a$ meeting only finitely many arrangement hyperplanes. Each such hyperplane other than $H$ intersects $H$ in a proper linear subspace. If there are any, [F5] gives a direction in $H$ outside their union; a sufficiently short line through $a$ in this direction stays in $O\cap N$ and meets each excluded subspace in at most one parameter, so choose a parameter avoiding them all. If there are none, use $a$ itself. This yields $p\in O\cap T$ lying on no arrangement hyperplane other than $H$. When $\dim H=0$, there is no other distinct linear hyperplane in $E$, so this is precisely the latter case. Shrinking inside $N$ and avoiding its finitely many other closed hyperplanes gives a ball about $p$ contained in $T$ and meeting no arrangement hyperplane except $H$. [F1, F3, F5, step 2.1, step 1.2, step 4.2, choose]

5.2 Let $\mathcal B$ be the finite set of hyperplanes meeting $U$. For every distinct pair $H,K\in\mathcal B$, their intersection has codimension two. Since $x$ is in no arrangement hyperplane, the affine span of $x$ and $H\cap K$ is a proper affine hyperplane. Avoid the finitely many such affine hyperplanes when choosing $y$ close to $y_0$ in $D$; this is possible by applying [F5] to their direction subspaces and moving on a short line in a direction outside their union, avoiding finitely many intersection parameters. In dimension less than two there are no distinct pairs to avoid. The segment from $x$ to $y$ then meets no two distinct arrangement hyperplanes simultaneously. It meets each member of $\mathcal B$ at most once, because its endpoints avoid that hyperplane and a nonzero affine linear function on a segment has at most one zero. [step 2.1, step 4.1, F3, F5, choose]

6.1 The ball from step 5.1 meets both $C$ and $D$, since $p\in W$. Each of its two half-balls is connected by step 2.2 and lies in the complement, hence is contained in a single chamber. Each chamber lies on one side of $H$ by step 3.1, so the distinct chambers $C,D$ occupy opposite half-balls. Every other arrangement hyperplane misses the entire ball and has constant sign on it. Their signs therefore differ at $H$ and agree at every other hyperplane. The argument applies to any shared wall, so its defining hyperplane is the only sign change and is unique for this adjacency. [F1, step 2.1, step 2.2, step 3.1, step 4.2, step 5.1]

6.2 List the finitely many crossing points in order. Between successive crossing points the segment lies in a chamber by step 3.1. At a crossing point $p\in H$, local finiteness and the absence of a simultaneous crossing give a ball in $T$ meeting no arrangement hyperplane except $H$. Its two half-balls are connected by step 2.2, and contain the two neighbouring segment pieces, so each is contained in the corresponding chamber, say $A$ and $B$. These chambers are distinct because they lie on opposite sides of $H$. Their signs agree at every other arrangement hyperplane, which misses the entire ball. The entire slice of the ball by $H$ lies in both chamber closures. [F1, F3, step 2.1, step 2.2, step 3.1, step 5.2]

7.1 To prove equality of the full wall intersections, take $z\in\overline A\cap H$ and $b\in B$. Then $z\in\overline T$, and step 1.2 puts $z_t=(1-t)z+tb$ in $T$ for $0<t\leq1$. For each arrangement hyperplane other than $H$, continuity of its defining form gives at $z$ the weak sign of $A$, which is the weak sign of $B$ by step 6.2; its value at $b$ has the strict sign of $B$. Linearity therefore gives the strict sign of $B$ at $z_t$. For $H$ the value at $z$ is zero, so its value at $z_t$ also has the strict sign of $B$. Thus $z_t\in B$ by step 3.1, and $z_t\to z$ proves $z\in\overline B\cap H$. Interchanging $A,B$ proves $\overline A\cap H=\overline B\cap H$. This intersection contains the relatively open ball slice of step 6.2, so its affine dimension is $n-1$: the slice contains $n$ affinely independent points in $H$ (one point when $n=1$), and the intersection is contained in $H$. Consequently it is a wall of both chambers under [F1]. The successive chambers therefore form a finite gallery. A hyperplane is crossed by this segment exactly when its endpoint signs differ, and then it is crossed once by the affine linearity from step 5.2. Thus this gallery crosses precisely the hyperplanes separating $C$ and $D$, once each; in particular their number is finite. [F1, F3, step 2.1, step 3.1, step 1.2, step 5.2, step 6.2, choose, algebra]

8.1 For any finite gallery from $C$ to $D$, step 6.1 shows that each adjacency changes exactly the sign of its defining hyperplane. Hence every separating hyperplane must be crossed an odd, and therefore positive, number of times, while every other hyperplane is crossed an even number of times. Every gallery has length at least the number of separating hyperplanes. The gallery of step 7.1 attains that bound. Equality holds exactly when each separating hyperplane is crossed once and no other hyperplane is crossed. Since $\mathcal A$ is a set of hyperplanes, coincident hyperplanes contribute only once. [step 6.1, step 7.1, F1] ∎


## Coordinate faces span their annihilator subspaces

[Open item](item-lem-author-9b7c42e8f103-coordinate-faces) · level 1


### Statement

Let $V$ be a real vector space with finite basis $(\alpha_s)_{s\in S}$, let $I\subseteq S$, and put $E_I=\{f\in V^*:f(\alpha_i)=0\ (i\in I)\}$, $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Then $C_I$ is nonempty, relatively open in $E_I$, and spans $E_I$. For any linear automorphism $x$ of $V^*$, $xC_I$ is relatively open in $xE_I$ and spans $xE_I$. These assertions include $I=S$, where $C_S=E_S=\{0\}$.

### Statement references

[prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

[math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

### Facts & Assumptions

[F1] Coordinate dual functionals and the coordinate Euclidean metric on $V^*$, restricted to subspaces for relative topology, are supplied by [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites). Write $f_s=f(\alpha_s)$ and $\|f\|_2=(\sum_{s\in S}|f_s|^2)^{1/2}$.

[F2] The span of a subset is the smallest linear subspace containing it; a subset spans a space when that span is the whole space ([math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)).

[F3] A linear automorphism is an invertible linear self-map; its inverse is linear and satisfies both inverse equations ([math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)).

[F4] A subset of a metric space is open precisely when each of its points has a positive-radius ball contained in the subset ([math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)). Here the metrics on $E_I$ and $xE_I$ are restrictions of the coordinate Euclidean metric in [F1].

### Proof

**Given:** The objects and hypotheses of the statement, with the coordinate metrics in [F1]. **Goal:** Establish all the stated conclusions.

1.1 If $I=S$, then $C_I=E_I=\{0\}$, which is nonempty, open in itself and spans itself; also $xC_I=xE_I=\{0\}$ by linearity. All conclusions hold in this case, including $S=\varnothing$. Henceforth suppose $S\setminus I\ne\varnothing$. In dual coordinates $E_I$ is the subspace with coordinates zero on $I$, and $v=\sum_{s\notin I}\alpha_s^*$ belongs to $C_I$. For each $s\notin I$, both $v$ and $v+\alpha_s^*$ belong to $C_I$, so every subspace containing $C_I$ contains their difference $\alpha_s^*$. Every $f\in E_I$ equals $\sum_{s\notin I}f_s\alpha_s^*$; thus $C_I$ spans $E_I$. [F1, F2, F3, F4, algebra]

2.1 For $f\in C_I$ put $r_f=\frac12\min_{s\notin I}f_s>0$. If $g\in E_I$ and $\|g-f\|_2<r_f$, then $|g_s-f_s|\le\|g-f\|_2<r_f\le f_s/2$ for each $s\notin I$, so $g_s>0$. Thus the ball of radius $r_f$ about $f$ in $E_I$ lies in $C_I$. This proves relative openness. [F1, F4, step 1.1, algebra]

3.1 Let $(b_{st})_{s,t\in S}$ be the coordinate matrix of the linear inverse $x^{-1}$ and put $L=1+\sum_{s,t\in S}|b_{st}|>0$. For any $h\in V^*$ and $s\in S$, linearity and $|h_t|\le\|h\|_2$ give $|(x^{-1}h)_s|\le\sum_t|b_{st}||h_t|\le L\|h\|_2$. Fix $f\in C_I$ and $y=xf$. If $z\in xE_I$ and $\|z-y\|_2<r_f/L$, then $g=x^{-1}z\in E_I$ and $|g_s-f_s|=|(x^{-1}(z-y))_s|<r_f\le f_s/2$ for every $s\notin I$. Hence $g\in C_I$ and $z\in xC_I$. This supplies a positive-radius ball in $xE_I$ about every $y\in xC_I$, proving relative openness directly. Finally every subspace containing $xC_I$ contains $x(v+\alpha_s^*)-xv=x\alpha_s^*$ for $s\notin I$, and these vectors span $xE_I$ by applying $x$ to the coordinate expansion in step 1.1. Since $xC_I\subseteq xE_I$, it spans $xE_I$. Together with step 1.1 this also covers the zero-dimensional case. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎


## The relative root deletion set is the restricted-hyperplane union

[Open item](item-lem-author-9b7c42e8f103-restricted-root-traces) · level 1


### Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. Write $H_\alpha=\{f:f(\alpha)=0\}$, $\Phi^J=\{\alpha\in\Phi:E\not\subseteq H_\alpha\}$ and $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi^J\}$. Every member of $\mathcal A$ is a hyperplane in $E$, and $T\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha=T\setminus\bigcup_{K\in\mathcal A}K$. The analogous equality holds with $T^\circ$ in place of $T$.

### Statement references

[prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

### Facts & Assumptions

[F1] The Coxeter representation, root hyperplanes and cone are those of [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites).

[F2] Nonzero restricted evaluations have hyperplane kernels by [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites).

### Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


1.1 The definition of $\Phi^J$ says exactly that evaluation at $\alpha$ is nonzero on $E$. Its kernel there is $E\cap H_\alpha$, which is a hyperplane by [F2]. [F1, F2, given]

2.1 Both $T$ and $T^\circ$ are subsets of $E$. For any such subset $B$, membership in $B\cap H_\alpha$ equals membership in $B\cap(E\cap H_\alpha)$. Taking unions over $\Phi^J$ proves both equalities; repeated traces do not change a union. If $E=\{0\}$, the index set is empty and the same argument applies. [step 1.1, given, algebra] ∎



## Full-dimensional J-chambers lie in the relative interior

[Open item](item-lem-author-9b7c42e8f103-open-j-chambers) · level 2


### Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. If $x\in W$, $I\subseteq S$, $xC_I\subseteq E$ and $|I|=|J|$, then $xE_I=E$, the set $xC_I$ is open in $E$, and $xC_I\subseteq T^\circ$. In particular every Iyama–Wemyss $J$-chamber lies in $T^\circ$.

### Statement references

[lem-author-9b7c42e8f103-coordinate-faces](item-lem-author-9b7c42e8f103-coordinate-faces)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

### External input

Iyama–Wemyss, Definition 1.6(1), calls $xC_I$ a $J$-chamber precisely when $xC_I\subseteq E_J$ and $|I|=|J|$, with $x$ representing a coset in $W/W_I$.

### Facts & Assumptions

[F1] Coordinate faces and their translates span their annihilator spaces and are relatively open by [lem-author-9b7c42e8f103-coordinate-faces](item-lem-author-9b7c42e8f103-coordinate-faces).

[F2] The dual Coxeter action is invertible and $U$ contains every $xC_I$ by [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites).

### Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, Definition 1.6(1), calls $xC_I$ a $J$-chamber precisely when $xC_I\subseteq E_J$ and $|I|=|J|$, with $x$ representing a coset in $W/W_I$.


1.1 By [F1], the inclusion $xC_I\subseteq E$ implies $xE_I\subseteq E$. Both spaces have dimension $|S|-|J|$, because $x$ is invertible and $|I|=|J|$. Hence $xE_I=E$, and [F1] makes $xC_I$ open in $E$. [F1, F2, given, algebra]

2.1 By [F2], $xC_I\subseteq U\cap E=T$. An open subset of $E$ contained in $T$ lies in $\operatorname{int}_E T$. The external definition identifies all source $J$-chambers with sets satisfying these hypotheses, giving the final assertion. [step 1.1, F2, given] ∎

### Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local topology and linear-algebra argument is authored here; the source proof has not been reviewed.


## Deleting relative root hyperplanes removes all cone-boundary points

[Open item](item-lem-author-9b7c42e8f103-interior-complement) · level 3


### Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. With $\Phi^J$ and $\mathcal A$ as in the restricted-root-trace lemma, put $D=\bigcup_{K\in\mathcal A}K$. Then $T\setminus D=T^\circ\setminus D$.

### Statement references

[lem-author-9b7c42e8f103-restricted-root-traces](item-lem-author-9b7c42e8f103-restricted-root-traces)

[lem-author-9b7c42e8f103-open-j-chambers](item-lem-author-9b7c42e8f103-open-j-chambers)

[math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

### External input

Iyama–Wemyss, the sentence immediately after Definition 1.6, states that the $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$ are the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.

### Facts & Assumptions

[F1] The restricted deletion set agrees with the root deletion set by [lem-author-9b7c42e8f103-restricted-root-traces](item-lem-author-9b7c42e8f103-restricted-root-traces).

[F2] Every source $J$-chamber is contained in $T^\circ$ by [lem-author-9b7c42e8f103-open-j-chambers](item-lem-author-9b7c42e8f103-open-j-chambers).

[F3] Every point of a topological space belongs to its connected component, including when that space is a subspace, as defined and justified in [math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent).

[F4] In the topological space $E$, the interior of $T$ is the union of open subsets of $E$ contained in $T$; in particular $T^\circ\subseteq T$, by [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top).

### Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, the sentence immediately after Definition 1.6, states that the $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$ are the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.


1.1 By [F3], every point $p\in T\setminus D$ belongs to a connected component of that space. By [F1] and the external input, that component is a source $J$-chamber. By [F2] it is contained in $T^\circ$, so $p\in T^\circ\setminus D$. [F1, F2, F3, given]

2.1 Conversely $T^\circ\subseteq T$ by the definition of interior in [F4], so $T^\circ\setminus D\subseteq T\setminus D$. Together with the first inclusion this proves equality, also for the zero-dimensional case. [F4, step 1.1, given] ∎

### Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local topology and linear-algebra argument is authored here; the source proof has not been reviewed.


## The full-cone and interior arrangements have identical chambers

[Open item](item-lem-author-9b7c42e8f103-chamber-topology) · level 4


### Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$, the set of points admitting an open ball in $E$ contained in $T$. Write $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$ and $\Phi^J=\{\alpha\in\Phi:E\not\subseteq H_\alpha\}$. Let $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi^J\}$, $D=\bigcup_{K\in\mathcal A}K$, and $\mathcal A^\circ=\{K\in\mathcal A:K\cap T^\circ\ne\varnothing\}$. Give $E$ its Euclidean topology and all its subsets their induced subspace topologies.

The identity identifies $T\setminus D$ and $T^\circ\setminus D$ as topological spaces, and hence identifies their connected components. Thus Iyama–Wemyss $J$-chambers, the sets $xC_I\subseteq E_J$ with $|I|=|J|$, are exactly the chambers of the restricted arrangement $(T^\circ,\mathcal A^\circ)$. Traces missing $T^\circ$ may be discarded without changing this conclusion.

### Statement references

[lem-author-9b7c42e8f103-interior-complement](item-lem-author-9b7c42e8f103-interior-complement)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[lem-author-9b7c42e8f103-restricted-root-traces](item-lem-author-9b7c42e8f103-restricted-root-traces)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

### External input

Iyama–Wemyss, [Definition 1.6 and its following sentence](https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf#page=30), supplies this premise: Under the statement's hypotheses, the sets $xC_I\subseteq E_J$ with $|I|=|J|$ are precisely the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.

### Facts & Assumptions

[F1] The two complements are equal by [lem-author-9b7c42e8f103-interior-complement](item-lem-author-9b7c42e8f103-interior-complement).

[F2] Chambers are connected components with the subspace topology, as defined in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites). An arrangement has a convex domain and linear hyperplanes meeting it; restriction keeps precisely those meeting the smaller convex domain.

[F3] Each member of $\mathcal A$ is a hyperplane in $E$, and $T\setminus D=T\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$, by [lem-author-9b7c42e8f103-restricted-root-traces](item-lem-author-9b7c42e8f103-restricted-root-traces).

[F4] The cone $U$ is convex and contains $0$, with the representation and root-hyperplane conventions of [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites).

[F5] The chamber-component identification recorded in External input is imported directly from Iyama–Wemyss, Definition 1.6 and its following sentence.

### Proof

**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.

1.1 By [F4], $T=U\cap E$ is convex: a convex combination of two points lies in both $U$ and the linear subspace $E$. Also $0\in T$. By [F3], the members of $\mathcal A$ are linear hyperplanes in $E$; each meets $T$ at $0$. Thus $(T,\mathcal A)$ is an arrangement in the sense of [F2]. [F2, F3, F4, given]

1.2 Both complements inherit their topology from $E$. Successive subspace topologies agree with the direct subspace topology: if $B\subseteq A\subseteq E$, an open set of $B$ induced through $A$ has the form $B\cap(A\cap O)=B\cap O$ for an open $O\subseteq E$, and conversely. By [F1], the two complements are the same subset of $E$, hence the same topological space. [F1, F2, algebra]

2.1 Use a coordinate Euclidean norm $\|\cdot\|$ on $E$ and write $B_E(x,r)=\{u\in E:\|u-x\|<r\}$. The interior $T^\circ$ is convex. Indeed, for $x,y\in T^\circ$, choose $r>0$ such that both $E$-balls $B_E(x,r)$ and $B_E(y,r)$ lie in $T$. For $0\leq t\leq1$ and $z\in E$ with $\|z\|<r$, convexity of $T$ gives $(1-t)(x+z)+t(y+z)=(1-t)x+ty+z\in T$. Hence $B_E((1-t)x+ty,r)\subseteq T$ and $(1-t)x+ty\in T^\circ$. The assertion is vacuous if the interior is empty. Every member of $\mathcal A^\circ$ meets $T^\circ$ by its definition, so $(T^\circ,\mathcal A^\circ)$ is precisely the restriction defined in [F2]. [F2, step 1.1, given, algebra]

3.1 By [F3], the full-cone complement is exactly the complement in [F5], so its connected components are the source $J$-chambers. Connectedness and maximal connected subsets are preserved by the identity in step 1.2, so the components of $T^\circ\setminus D$ are the same subsets. A trace missing $T^\circ$ deletes no point there, and consequently $T^\circ\setminus D=T^\circ\setminus\bigcup_{K\in\mathcal A^\circ}K$. By [F2] and step 2.1, the components of this last space are the chambers of the restricted arrangement. This proves both assertions. [F2, F3, F5, step 2.1, step 1.2] ∎


## Independent relative chamber labelling input

[Open item](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites) · level 5


### Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. Let $W_I=\langle I\rangle$ and let $\ell$ denote Coxeter length. The pairs $(x,I)$, with $x\in W$ and $I\subseteq S$, satisfying $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ label the $J$-chambers bijectively by $(x,I)\mapsto xC_I$. These are exactly the chambers of $(T^\circ,\mathcal A)$, where $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi,\ E\not\subseteq H_\alpha\}$, with traces missing $T^\circ$ omitted. No sphericity assumption on $J$ is imposed.

### Statement references

[lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology)

[prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

### External input

Iyama–Wemyss, Definition 1.8 and Theorem 1.12, states that the pairs $(x,I)$ with $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ are in bijection with their $J$-chambers, under $(x,I)\mapsto xC_I$.

### Facts & Assumptions

[F1] The source and interior-arrangement chamber sets coincide by [lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology).

[F2] The standard parabolics and the unique minimum of each right coset are those supplied by [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites).

[F3] The bijection from the displayed labels to source $J$-chambers is the independent theorem recorded in External input (Iyama–Wemyss, Definition 1.8 and Theorem 1.12).

### Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, Definition 1.8 and Theorem 1.12, states that the pairs $(x,I)$ with $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ are in bijection with their $J$-chambers, under $(x,I)\mapsto xC_I$.


1.1 Using the parabolic and length conventions of [F2], the external input [F3] gives a bijection from exactly the displayed pairs to the source $J$-chambers, with value $xC_I$. This uses the independent theorem as an imported premise, not a locally reconstructed proof. [F2, F3, given]

2.1 By [F1], those same subsets are exactly the chambers in the relative-interior arrangement, with the same topology. Composing the first bijection with this identification proves the asserted labelling and its applicability to $(T^\circ,\mathcal A)$. Neither input restricts $J$ to spherical type. [step 1.1, F1] ∎

### Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local proof composes that imported bijection with the chamber-topology supplier; it does not reconstruct the source theorem. Root hyperplanes and geometric formulation conventions are supplied by the chamber-topology lemma, whose Statement defines $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$. The source proof has not been reviewed.


## Independent finite local wall-crossing formula

[Open item](item-thm-finite-wall-crossing-input-artin-tits-prerequisites) · level 6


### Statement

Let $(W,S)$ be a finite-rank Coxeter system, with canonical real reflection representation, dual action and Tits cone $U$, and fix $J\subseteq S$. For $I\subseteq S$, write $W_I=\langle I\rangle$, put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$, and let $C_I$ consist of the vectors in $E_I$ positive on the simple roots indexed by $S\setminus I$. Set $E=E_J$, with its Euclidean topology, $T=U\cap E$ and $T^\circ=\operatorname{int}_E T$. A $J$-chamber label is a pair $(x,I)$ with $W_Jx=xW_I$ such that $x$ has minimum Coxeter length in $xW_I$; it labels the $J$-chamber $xC_I$ in the relative-interior arrangement. For a root $\alpha$ put $H_\alpha=\{f:f(\alpha)=0\}$. The arrangement hyperplanes are the proper traces $E\cap H_\alpha$ meeting $T^\circ$. A wall is a nonempty intersection of a chamber's closure in $E$ with an arrangement hyperplane, of affine dimension $\dim E-1$.

Let $(x,I)$ be a $J$-chamber label, let $a\in S\setminus I$, and put $K=I\cup\{a\}$. Suppose $W_K$ is finite. For a finite standard parabolic $W_L$, write $w_L$ for its longest element and $\iota_L$ for the permutation of $L$ determined by $w_L\alpha_s=-\alpha_{\iota_L(s)}$. Define $b=\iota_K(a)$ and $(y,I')=(xw_Iw_K,K\setminus\{b\})$. Then $(y,I')$ is a $J$-chamber label, its chamber is adjacent to $xC_I$ through the common wall $\overline{xC_K}$, and crossing back at $b$ returns $(x,I)$. Here the bar denotes closure in $E$, and $xC_K$ is the relative interior of that wall in its affine hull.

Call $J$ strongly Dynkin if $J$ is a proper subset of $S$ and $W_{J\cup\{s\}}$ is finite for every $s\in S\setminus J$. If $J$ is strongly Dynkin, any two $J$-chamber labels are connected by a finite sequence of the crossings just described.

### Statement references

[thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)

[prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites)

[lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

### External input

Iyama–Wemyss, Definitions 1.8, 1.16 and 1.19 and Theorem 1.20(1)(a),(c),(d) and (2)(a), supplies the displayed crossing label, the inverse crossing, adjacency at the face $xC_K$, and finite crossing connectivity under the strongly Dynkin hypothesis. The source's fixed and variable subsets are denoted $J$ and $I$ here. These assertions are imported; their source proof is not reproduced or independently reviewed. The local proof below identifies the closed wall and its relative interior under the stated portal conventions.

### Facts & Assumptions

[F1] The canonical representation, dual action, coordinate faces, minimum-length labels and their bijection with the relative-interior arrangement chambers are supplied by [thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites).

[F2] Finite parabolics have the longest elements and opposition permutations stated above, including the empty-parabolic case, by [prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites).

[F3] These chambers are the source $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$, with the same Euclidean subspace topology. Their arrangement consists of proper root-hyperplane traces meeting $T^\circ$. [lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology)

[F4] The Tits cone is the union of the translates of the closed fundamental chamber. The stabilizer of every $f\in C_L$ is $W_L$, and $C_L\subseteq U^\circ$ when $W_L$ is finite. [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

[F5] Closures are in $E$; a wall is a nonempty chamber-closure intersection with an arrangement hyperplane having affine dimension $\dim E-1$. Distinct chambers sharing a wall are adjacent. [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[F6] The crossing-label, inverse-crossing, adjacency and strongly Dynkin connectivity assertions are the independent input recorded in External input.

### Proof

**Given:** The system, label and subsets in the Statement, with $W_K$ finite for the local crossing. **Goal:** Establish the claimed crossing assertions, with the closed-wall convention.

1.1 With the longest elements interpreted by [F2], apply [F6] to the label of [F1]. It gives the label $(y,I')$, the inverse crossing at $b$, and distinct adjacent source chambers; it also gives the asserted finite crossing connectivity when $J$ is strongly Dynkin. By [F1] and [F3] the same labelled subsets are the relative-interior arrangement chambers. It remains to identify their common wall in the convention of [F5]. [F1, F2, F3, F5, F6, given]

2.1 For any $L\subseteq S$, let $D_L=\{f\in E_L:f(\alpha_s)\geq0\ (s\notin L)\}$. In dual coordinates, $C_L$ spans $E_L$: the vector with coordinates $1$ off $L$ and $0$ on $L$, and its sums with each dual basis vector off $L$, lie in $C_L$, and their differences give that basis. The inequalities defining $D_L$ are closed; adding $\varepsilon$ to each coordinate off $L$ shows every point of $D_L$ is a limit of points of $C_L$. Thus $D_L$ is the closure of $C_L$ in the full dual space, and these assertions include $L=S$. By [F3], $xC_I\subseteq E$ and $|I|=|J|$, so spanning and equality of dimensions give $xE_I=E$; likewise $yE_{I'}=E$. Finite-dimensional linear automorphisms and their inverses are continuous, so closures commute with $x$ and $y$. Consequently $\overline{xC_I}=xD_I$ and $\overline{yC_{I'}}=yD_{I'}$. Put $H=xE_K$. Since $K=I\cup\{a\}$, the dual action gives $H=E\cap H_{x\alpha_a}$, a codimension-one subspace of $E$. [F1, F3, step 1.1, algebra]

3.1 Put $q=w_Iw_K\in W_K$, so $y=xq$. By [F4], $W_K$ fixes every point of $C_K$; the spanning argument in step 2.1 shows that it fixes $E_K$ pointwise. Hence $yE_K=xE_K=H$ and $yD_K=xD_K$. Since $K=I'\cup\{b\}$ as well as $K=I\cup\{a\}$, the coordinate descriptions give $xD_I\cap H=xD_K=yD_K=yD_{I'}\cap H$. Thus both chamber closures meet $H$ in $F=xD_K=\overline{xC_K}$. The affine hull of $D_K$ is $E_K$, because it contains $0$ and spans $E_K$. In its free coordinates the relative interior of the nonnegative orthant $D_K$ is exactly the strictly positive orthant $C_K$: positive coordinates persist in a sufficiently small ball, whereas a zero free coordinate can be perturbed negatively in every ball. If there are no free coordinates, both sets are $\{0\}$ in the zero space. Transporting by $x$ gives $\operatorname{aff}(F)=H$, $\dim F=\dim E-1$, and relative interior $xC_K$. [F4, step 2.1, algebra]

4.1 By [F4] and finiteness of $W_K$, $C_K\subseteq U^\circ$. Also $xU=U$, since left multiplication by $x$ permutes the translates defining $U$. As $x$ is a linear homeomorphism, $xC_K\subseteq U^\circ$. Step 3.1 places this nonempty set in $E\cap H$, so it lies in $T^\circ$ and $H$ meets $T^\circ$. Since $x\alpha_a$ is a root and $H$ is proper in $E$, [F3] makes $H$ an arrangement hyperplane. Step 3.1 and [F5] now identify $F$ as a common wall of the two distinct chambers. Its relative interior and all remaining assertions were established in steps 3.1 and 1.1. [F1, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎

### Source notes

The crossing and connectivity assertions are imported from the independent Iyama–Wemyss source. The coordinate argument is locally authored and adapts the wall terminology; it makes no claim to reconstruct that source theorem. The local hypothesis remains finiteness of the whole parabolic $W_K$; no componentwise weakening or weaker connectivity hypothesis is asserted.
