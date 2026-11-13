---
title: Component opposition transports the retained simple roots
status: draft
research_item: lem-author-4ac39e6f1702-component-opposition
dependency_level: 4
---

## Prerequisites

- [prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites)
- [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)
- [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)
- [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)


## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, in its canonical real representation with simple roots $\alpha_s$, Coxeter form $B$ and contragredient action on $V^*$. For $H\subseteq S$, write $W_H=\langle H\rangle$ and $C_H=\{f\in V^*:f(\alpha_h)=0\text{ for }h\in H,\ f(\alpha_s)>0\text{ for }s\in S\setminus H\}$. When $W_H$ is finite, write $w_H$ for its longest element and $\iota_H$ for its opposition permutation.

Let $I\subseteq S$, $a\in S\setminus I$, $L=I+a:=I\cup\{a\}$, and $D=[I,a]$, the vertex set of the connected component containing $a$ in the Coxeter diagram induced on $L$. Suppose $W_D$ is finite. Put $A=D\setminus\{a\}$, $b=\iota_D(a)$, $K=L\setminus\{b\}$, and $v=w_Aw_D$. Then $v$ maps the set of simple roots indexed by $K$ bijectively to those indexed by $I$. It fixes $C_L$ pointwise. For every $f\in C_K$,
$$(vf)(\alpha_a)=-f(\alpha_b)<0.$$
No finiteness assumption on the other components of $L$ is required.

## Statement references

[prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites)

[prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)

[math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)

[math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)

## Facts & Assumptions

[F1] Finite longest elements are involutions, act on simple roots by negative opposition, and disconnected diagram factors commute, by [prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites).

[F2] The dual action and root-sign convention are those of [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites).

[F3] Standard parabolic root subsystems have exactly their supported roots, by [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization), part (2).

[F4] The finite-rank canonical representation has $s z=z-2B(z,\alpha_s)\alpha_s$ for $z\in V$, and its dual action satisfies $(wf)(z)=f(w^{-1}z)$. The faces $C_H$ have zero coordinates on $H$ and strictly positive coordinates outside $H$, by [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites).

[F5] The set $[I,a]$ is the component containing $a$ in the diagram induced on $I\cup\{a\}$; distinct components have no diagram edges between them, by [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers).

[F6] In a finite-rank Coxeter diagram, distinct vertices $s,t$ have an edge exactly when $m(s,t)\ge3$, including $m(s,t)=\infty$; no edge means $m(s,t)=2$. The induced diagram on $L$ is the diagram of the restricted Coxeter matrix, by [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type), Definition (1).

## Proof

**Given:** The finite-rank canonical Coxeter representation, root basis and dual action, with the notation and hypotheses in the Statement. **Goal:** prove the stated assertions.

**Proof technique:** direct.

1.1 Since $A\subseteq D$, the subgroup $W_A$ is finite. By [F1], $w_D^2=1$; applying it to each simple root gives $\iota_D^2=1$, so $\iota_D(b)=a$. For $k\in D\setminus\{b\}$, opposition gives $w_D\alpha_k=-\alpha_{\iota_D(k)}$, whose index lies in $A$. Applying $w_A$ gives $v\alpha_k=\alpha_{\iota_A(\iota_D(k))}$. These indices run bijectively through $A$, with the restricted root systems understood as in [F3]. Every simple root indexed by $L\setminus D$ is fixed by each generator in $D$: by [F5] these vertices lie in distinct diagram components, hence by [F6] their Coxeter exponent is two, their off-diagonal form is zero, and the reflection formula in [F4] fixes the root. These roots are fixed by $v$. Since $K=(D\setminus\{b\})\cup(L\setminus D)$ and $I=A\cup(L\setminus D)$, the claimed simple-root bijection follows. [F1, F3, F4, F5, F6]

1.2 Let $f\in C_L$ and $s\in L$. For every $z\in V$, the reflection and dual-action formulas give $(sf)(z)=f(sz)=f(z)-2B(z,\alpha_s)f(\alpha_s)=f(z)$, since $s^{-1}=s$ and $f(\alpha_s)=0$. Thus every generator indexed by $L$ fixes $f$, so every element of $W_L$, in particular $v$, fixes $C_L$ pointwise. [F2, F4]

2.1 By the reflection formula, a generator indexed in $A$ changes only its own root coordinate. Therefore $w_A\alpha_a$ has coefficient one at $a$ and all other nonzero coordinates in $A$. By [F1], $v^{-1}=w_Dw_A$. Apply $w_D$, which takes each simple root in $D$ to minus its opposition image. The result $v^{-1}\alpha_a=w_Dw_A\alpha_a$ is supported on $D$ and has coefficient minus one at $b$; its other coordinates are in $D\setminus\{b\}\subseteq K$. Since $f\in C_K$ vanishes on $K$ and has $f(\alpha_b)>0$ because $b\notin K$, dual evaluation yields $(vf)(\alpha_a)=f(v^{-1}\alpha_a)=-f(\alpha_b)<0$. This uses finiteness only of $W_D$ and its subgroup $W_A$. [F1, F2, F4, step 1.1] ∎
