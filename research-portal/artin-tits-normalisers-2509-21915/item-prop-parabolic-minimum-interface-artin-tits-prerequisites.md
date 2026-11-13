---
title: Parabolic root subsystems and unique coset minima
status: published
research_item: prop-parabolic-minimum-interface-artin-tits-prerequisites
dependency_level: 0
---

## Prerequisites

- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)
- [math:def-cg-parabolic-quotient-and-two-sided-minima](https://alphabetamath.cc/item/def-cg-parabolic-quotient-and-two-sided-minima)
- [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)
- [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)
- [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange)


## Statement

Let $(W,S)$ be a Coxeter system with finite $S$, presented by a Coxeter matrix, and let $\ell$ be word length in $S$. Let $\rho$ be its canonical real reflection representation on $V=\mathbb R^S$, with basis $(e_s)_{s\in S}$, root system $\Phi=\{\rho(w)e_s:w\in W,s\in S\}$ and positive roots $\Phi_+$, the roots with nonnegative basis coordinates. For $I,K\subseteq S$, write $W_I=\langle I\rangle$, $V_I=\operatorname{span}\{e_i:i\in I\}$, $\Phi_I=\{\rho(u)e_i:u\in W_I,i\in I\}$ and $\Phi_I^+=\Phi_I\cap\Phi_+$.

Then $\Phi_I=\Phi\cap V_I$ and $W_I\cap W_K=W_{I\cap K}$. Every set $xW_I=\{xu:u\in W_I\}$ has a unique element $d$ of minimum length, and $x=du$ with $u\in W_I$ and $\ell(x)=\ell(d)+\ell(u)$. For any $y\in W$, the following are equivalent: $y$ is the minimum of $yW_I$; $\ell(ys)>\ell(y)$ for every $s\in I$; and $\rho(y)\Phi_I^+\subseteq\Phi_+$. The inverted counterpart holds for $W_Ix$: its unique minimum $d$ satisfies $\ell(sd)>\ell(d)$ for every $s\in I$ and $\rho(d^{-1})\Phi_I^+\subseteq\Phi_+$, and the corresponding factorization is length additive.

## Statement references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)

[math:def-cg-parabolic-quotient-and-two-sided-minima](https://alphabetamath.cc/item/def-cg-parabolic-quotient-and-two-sided-minima)

[math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)

## Facts & Assumptions

[F1] The standard parabolic intersection and root-subsystem identities are $W_I\cap W_K=W_{I\cap K}$ and $\Phi_I=\Phi\cap V_I$ ([math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)).

[F2] Each $xW_I$ has a unique minimum $d$, characterized by $\ell(ds)>\ell(d)$ for all $s\in I$; for every $u\in W_I$, $\ell(du)=\ell(d)+\ell(u)$. The analogous assertions hold for $W_Ix$ with multiplication on the left ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity); [math:def-cg-parabolic-quotient-and-two-sided-minima](https://alphabetamath.cc/item/def-cg-parabolic-quotient-and-two-sided-minima)).

[F3] For $y\in W$ and $s\in S$, $\ell(ys)>\ell(y)$ if and only if $\rho(y)e_s\in\Phi_+$. Each $e_s$ is positive and roots have exactly one sign ([math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness); [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)).

[F4] For a reduced expression $w=s_1\cdots s_n$, the positive roots sent negative by $\rho(w^{-1})$ are exactly $\rho(s_1\cdots s_{j-1})e_{s_j}$ for $1\le j\le n$. Each root $\alpha$ has an associated reflection $t_\alpha$ satisfying $\rho(t_\alpha)\alpha=-\alpha$; if $\alpha\in\Phi_I$, then $t_\alpha\in W_I$ ([math:thm-cg-root-inversion-formulas-and-strong-exchange](https://alphabetamath.cc/item/thm-cg-root-inversion-formulas-and-strong-exchange); [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)).

[F5] Generators are involutions, $\ell(w^{-1})=\ell(w)$, and $\rho$ is a homomorphism ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length); [math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)).

## Proof
**Given:** the finite-rank Coxeter system, representation, roots and subsets in the statement.


**Given:** $x,y\in W$ and $I,K\subseteq S$, with the notation and hypotheses of the statement.

**Goal:** prove the subsystem and intersection identities, the coset factorizations, and the three equivalent minimum criteria.

1.1 The two displayed subsystem and intersection identities are exactly [F1]. By [F2], $xW_I$ has a unique minimum $d$, and writing $x=du$ with $u\in W_I$ gives $\ell(x)=\ell(d)+\ell(u)$. The first two criteria for a general $y$ are equivalent by the same fact. [F1, F2]

1.2 Suppose $y$ is the minimum of $yW_I$. For $\alpha\in\Phi_I^+$, put $t=t_\alpha\in W_I$. Choose a reduced expression $t=s_1\cdots s_n$ and a reduced expression for $y$. By [F2], $\ell(yt)=\ell(y)+\ell(t)$, so concatenating these expressions gives a reduced expression for $yt$. Since $\rho(t^{-1})\alpha=-\alpha$, [F4] expresses $\alpha$ as $\rho(s_1\cdots s_{j-1})e_{s_j}$ for some $j$. The prefix formula in [F4] applied to the concatenated expression shows that $\rho(y)\alpha$ is positive. Thus $\rho(y)\Phi_I^+\subseteq\Phi_+$. [F2, F4, F5]

1.3 Conversely, if $\rho(y)\Phi_I^+\subseteq\Phi_+$, then for every $s\in I$ the root $e_s$ lies in $\Phi_I^+$, so $\rho(y)e_s$ is positive. By [F3], $\ell(ys)>\ell(y)$ for every $s\in I$, and [F2] makes $y$ the unique minimum of $yW_I$. This completes the three-way equivalence. [F2, F3]

2.1 Inversion maps $W_Ix$ bijectively to $x^{-1}W_I$ and preserves length. Applying the established right-multiplication result to the latter set and inverting gives the unique minimum and length-additive factorization for $W_Ix$. Its descent criterion is $\ell(sd)>\ell(d)$, and its root criterion is $\rho(d^{-1})\Phi_I^+\subseteq\Phi_+$. Together with steps 1.1–1.3, this proves all assertions. [F5, step 1.1, step 1.2, step 1.3] ∎
