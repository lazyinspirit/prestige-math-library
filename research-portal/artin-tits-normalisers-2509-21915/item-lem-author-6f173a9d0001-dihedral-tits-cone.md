---
title: The infinite dihedral Tits cone is an open half-plane with its vertex
status: draft
research_item: lem-author-6f173a9d0001-dihedral-tits-cone
dependency_level: 2
---

## Prerequisites

- [lem-author-6f173a9d0001-dihedral-roots](item-lem-author-6f173a9d0001-dihedral-roots)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness)
- [math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)


## Statement

In the infinite dihedral real Coxeter representation with $S=\{s,t\}$ and $m(s,t)=\infty$, use dual coordinates $x=f(\alpha_s)$, $y=f(\alpha_t)$, $a=x+y$, $b=x$, and root hyperplanes $H_k=\{b+ka=0\}$ for $k\in\mathbb Z$. Equip the dual coordinate plane $(a,b)\in\mathbb R^2$ with its standard Euclidean topology. Define the closed fundamental chamber by $x,y\geq0$ and the Tits cone by the union of its $W$-translates under the contragredient action. The cone is $\{a>0\}\cup\{0\}$, and its interior in the dual plane is $I=\{a>0\}$. Give $I$ the subspace topology. The arrangement $\{H_k:k\in\mathbb Z\}$ is locally finite in $I$, meaning that every point of $I$ has a neighbourhood in $I$ meeting only finitely many of these hyperplanes, and every $H_k$ meets $I$.

## Statement references

[lem-author-6f173a9d0001-dihedral-roots](item-lem-author-6f173a9d0001-dihedral-roots)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness)

[math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

## Facts & Assumptions

[F1] **Given:** The infinite dihedral roots, dual coordinates and hyperplanes of [lem-author-6f173a9d0001-dihedral-roots](item-lem-author-6f173a9d0001-dihedral-roots). **Goal:** Compute the chamber translates, their interior and local finiteness.

[F2] The reflection representation and contragredient action are those of [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites): $r_u(v)=v-2B(v,\alpha_u)\alpha_u$ and $(wf)(v)=f(w^{-1}v)$, with $B(\alpha_s,\alpha_t)=-1$.

[F3] Interior has the metric meaning of [math:def-metric-interior-closure-boundary](https://alphabetamath.cc/item/def-metric-interior-closure-boundary), using the Euclidean distance $d((a,b),(a',b'))=\sqrt{(a-a')^2+(b-b')^2}$ in the dual plane. On $I$ use the subspace topology of [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top).

[F4] Local finiteness means the neighbourhood condition of [math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness), applied to the family $\{H_k\cap I:k\in\mathbb Z\}$ in $I$. Its members are distinct because $H_k\cap I=\{(a,-ka):a>0\}$.

## Proof

**Proof technique:** direct.

1.1 Since $s^{-1}=s$ and $t^{-1}=t$, the reflection and contragredient formulas give $s(x,y)=(-x,y+2x)$ and $t(x,y)=(x+2y,-y)$. In coordinates $(a,b)$ these preserve $a$ and send $b$ to $-b$ and $2a-b$, respectively. The closed chamber is $a\geq0$, $0\leq b\leq a$. [F1, F2, algebra]

2.1 For fixed $a>0$, these two reflections generate translations $b\mapsto b+2ma$ and their compositions with $b\mapsto-b$, for $m\in\mathbb Z$. Images of $[0,a]$ are exactly the consecutive intervals $[na,(n+1)a]$, so their union is the entire line. For $a=0$ the chamber contains only $(0,0)$, fixed by the group; no translate meets $a<0$. Thus the union is $\{a>0\}\cup\{0\}$. At any point with $a>0$, a Euclidean ball of radius less than $a$ stays in this union. Every ball about the origin meets $a<0$, so the origin is not interior. The interior is therefore $I=\{a>0\}$. [F3, step 1.1, algebra]

3.1 For any $(a_0,b_0)\in I$, choose $0<\varepsilon<a_0$ and $R>|b_0|$. The set $U=\{(a,b):a>\varepsilon,\ |b|<R\}$ is an open neighbourhood of $(a_0,b_0)$ in $I$. If it meets $H_k$, then $|k|=|b|/a<R/\varepsilon$ at a point of intersection. Only finitely many integers satisfy that bound, proving local finiteness. Each $H_k$ contains $p_k$ with $(a,b)=(1,-k)$, so it meets $I$. [F1, F3, F4, step 2.1, algebra] ∎
