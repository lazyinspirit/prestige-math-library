---
title: Root signs, inversions and descent translation
status: published
research_item: prop-root-inversion-interface-artin-tits-prerequisites
dependency_level: 1
---

## Prerequisites

- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)
- [math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)
- [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)
- [math:lem-cg-dual-action-and-chamber-faces-exist](https://alphabetamath.cc/item/lem-cg-dual-action-and-chamber-faces-exist)
- [math:def-function-space](https://alphabetamath.cc/item/def-function-space)
- [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)


## Statement

Let $S$ be finite and let $(W,S)$, $V$, its basis $(e_s)_{s\in S}$, the Coxeter form $B$, the canonical representation, the root set $\Phi$, the dual action, and the open chamber $C^\circ$ be as in the canonical real Coxeter interface. Let $\ell(w)$ be the minimum length of a word in $S$ representing $w$. Put $V_+=\{\sum_{s\in S}a_se_s:a_s\geq0\}$ and $\Phi_+=\Phi\cap V_+$. A root in $-\Phi_+$ is called negative.

Every root has exactly one sign: $\Phi=\Phi_+\sqcup(-\Phi_+)$. For $N(w)=\{\alpha\in\Phi_+:w\alpha\in-\Phi_+\}$ one has $|N(w)|=\ell(w)=\ell(w^{-1})$. For $s\in S$, the chamber $wC^\circ$ lies in $\{f:f(e_s)<0\}$ exactly when $\ell(sw)<\ell(w)$, equivalently when $w^{-1}e_s$ is negative.

For a root $\alpha$, write $H_\alpha=\{f\in V^*:f(\alpha)=0\}$. Distinct positive roots have distinct full hyperplanes $H_\alpha$. The map $\alpha\mapsto H_\alpha\cap U$ need not be injective when restricted to a real linear subspace $U\subseteq V^*$.

## Statement references

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

## Facts & Assumptions

[F1] Roots split disjointly into $\Phi_+$ and $-\Phi_+$; a positive root is evaluated positively, and a negative root negatively, by every member of $C^\circ$. [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)

[F2] For every $w\in W$, $|N(w)|=\ell(w)$. [math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange)

[F3] For $x\in W$ and $s\in S$, $xe_s$ is negative if and only if $\ell(xs)<\ell(x)$. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F4] Every root $\alpha$ satisfies $B(\alpha,\alpha)=1$. [math:lem-cg-reflection-representation-descends-and-root-norms](https://alphabetamath.cc/item/lem-cg-reflection-representation-descends-and-root-norms)

[F5] Each $s\in S$ is an involution, and $\ell(x)$ is the least length of a representing word. [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[F6] The dual action satisfies $(wf)(v)=f(w^{-1}v)$, and $e_s$ are basis vectors and roots. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F7] The chamber $C^\circ$ is nonempty, by statement (2) of [math:lem-cg-dual-action-and-chamber-faces-exist](https://alphabetamath.cc/item/lem-cg-dual-action-and-chamber-faces-exist), applied to this finite $S$ and its canonical real representation.

[F8] A real linear subspace contains zero and is closed under addition and real scalar multiplication; in particular $\{0\}$ is a real linear subspace of $V^*$. [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[F9] In the function space $V=\mathbb R^S$, operations are pointwise and vectors are equal exactly when all their values agree. The full algebraic dual $V^*$ consists of all real linear functionals on $V$, with pointwise operations. [math:def-function-space](https://alphabetamath.cc/item/def-function-space) [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

## Proof
**Given:** the finite Coxeter system and the representation and notation in the Statement.


**Proof technique:** direct.

**Goal:** establish the sign, inversion, side and hyperplane assertions in the Statement.

1.1 **Signs and inversion counts.** The sign decomposition is [F1], and the first equality $|N(w)|=\ell(w)$ is [F2]. Reversing any word in the involutive generators represents the inverse element and has the same length. Applying this observation to reduced words for $w$ and $w^{-1}$ gives both inequalities and hence $\ell(w)=\ell(w^{-1})$. [F1, F2, F5, given]

1.2 **Coordinate separation.** For $s\in S$ define $\varepsilon_s(v)=v(s)$ on the supplied function space $V=\mathbb R^S$. Pointwise operations give $\varepsilon_s(av+bz)=a\varepsilon_s(v)+b\varepsilon_s(z)$, so $\varepsilon_s\in V^*$. If $v\ne0$, some $s$ satisfies $v(s)\ne0$, and then $f_0=\varepsilon_s/v(s)$ satisfies $f_0(v)=1$. Moreover, if $f(v)=f(z)$ for every $f\in V^*$, applying each $\varepsilon_s$ gives $v(s)=z(s)$ for every $s$, hence $v=z$. Thus the explicitly constructed coordinate functionals separate vectors; no basis extension or choice principle is used. [F6, F9, given, construct]

2.1 **Full hyperplanes.** Suppose $H_\alpha=H_\beta$ for positive roots. By [F4] both roots are nonzero. Step 1.2 gives $f_0\in V^*$ with $f_0(\alpha)=1$. Put $c=f_0(\beta)$. For any $f\in V^*$ the functional $g=f-f(\alpha)f_0$ belongs to $V^*$ by [F9] and satisfies $g(\alpha)=0$. Equality of the hyperplanes implies $g(\beta)=0$, so $f(\beta)=c f(\alpha)=f(c\alpha)$ for every $f\in V^*$. Coordinate separation from 1.2 gives $\beta=c\alpha$, and $c\ne0$ because $\beta\ne0$. A positive root $\alpha$ has some strictly positive coordinate, and $\beta=c\alpha$ has only nonnegative coordinates; hence $c>0$. By [F4], $1=B(\beta,\beta)=c^2B(\alpha,\alpha)=c^2$, so $c=1$ and $\alpha=\beta$. [F4, F6, F9, step 1.2, given, algebra]

2.2 **Translate the side condition.** By [F6], for $f\in C^\circ$ one has $(wf)(e_s)=f(w^{-1}e_s)$. If $w^{-1}e_s$ is negative, [F1] makes every such value negative. Conversely, if all these values are negative, the root cannot be positive because [F7] supplies a member of $C^\circ$ and positive roots evaluate positively there; the sign decomposition makes it negative. By [F3], applied to $x=w^{-1}$, this is equivalent to $\ell(w^{-1}s)<\ell(w^{-1})$. The length equality from 1.1, applied also to $w^{-1}s$, converts this to $\ell(sw)<\ell(w)$. [F1, F3, F6, F7, step 1.1]

3.1 **Restriction can identify hyperplanes.** Take $S=\{s,t\}$ with $m(s,t)=2$. The distinct basis roots $e_s,e_t$ are positive. For the real linear subspace $U=\{0\}\subseteq V^*$ supplied by [F8], both $H_{e_s}\cap U$ and $H_{e_t}\cap U$ equal $\{0\}$. Thus restriction need not preserve injectivity. Together with steps 1.1, 2.1 and 2.2 this proves all assertions. [F1, F6, F8, step 1.1, step 2.1, step 2.2] ∎
