---
title: Coxeter-system, roots, length and weak-order conventions
status: draft
research_item: def-coxeter-data-artin-tits-normalisers
dependency_level: 1
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 4, §2.2
      statement: The article introduces the Coxeter diagram, its group and simple
        generators, spherical type, the geometric representation and roots,
        length, left divisors and the contragredient representation.
      hypotheses: The Coxeter-system conventions of §2.2; spherical type is imposed
        only where stated.
      reading_limits: The frozen extracted text of §2.2 was read for attribution. This
        reference is not used as proof of a prerequisite.
---

PDF p. 4: ` §2.2 `

## Prerequisites

- [math:def-arbitrary-rank-coxeter-system-and-bruhat-order](https://alphabetamath.cc/item/def-arbitrary-rank-coxeter-system-and-bruhat-order)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [prop-weak-order-interface-artin-tits-prerequisites](item-prop-weak-order-interface-artin-tits-prerequisites)


## Definition

Let $S=\{s_i:i\in\Gamma_0\}$ be indexed by a set $\Gamma_0$, possibly infinite, and let $m:S\times S\to\{1,2,3,\ldots\}\cup\{\infty\}$ be symmetric, with $m(s,s)=1$ and $m(s,t)\geq 2$ for distinct $s,t$. The Coxeter diagram $\Gamma$ has vertex set $\Gamma_0$: distinct vertices $i,j$ are joined when $m(s_i,s_j)\geq3$, with the edge labelled by $m(s_i,s_j)$ when that value is at least $4$ or infinity; an unlabelled edge denotes $3$, and no edge denotes $2$. The associated Coxeter group is $W=\langle S\mid s^2=1,\ (st)^{m(s,t)}=1\text{ for }s\ne t\text{ with }m(s,t)<\infty\rangle$. The pair $(W,S)$ is its Coxeter system. The diagram is spherical, or of finite type, precisely when $W$ is finite.

Let $V=\bigoplus_{i\in\Gamma_0}\mathbb R\alpha_i$, the real vector space of finite linear combinations of the basis vectors $\alpha_i$. Define the symmetric bilinear Coxeter form $B$ by $B(\alpha_i,\alpha_i)=1$, $B(\alpha_i,\alpha_j)=-\cos(\pi/m(s_i,s_j))$ for distinct $i,j$ with finite label, and $B(\alpha_i,\alpha_j)=-1$ when that label is infinity. For $s_i\in S$ put $r_i(v)=v-2B(v,\alpha_i)\alpha_i$. The standard geometric representation is the homomorphism $\rho:W\to\mathrm{GL}(V)$ with $\rho(s_i)=r_i$; write $w v$ for $\rho(w)v$. Its roots are $\Phi=\{w\alpha_i:w\in W,\ i\in\Gamma_0\}$. Put $V_+=\{\sum_i a_i\alpha_i:a_i\geq0\}$, with finite support, and define the positive and negative roots by $\Phi^+=\Phi\cap V_+$ and $\Phi^-=-\Phi^+$.

The length $\ell(w)$ is the least number of simple generators in a word representing $w$, with the empty word representing the identity. Define the prefix weak order by $u\leq w$ when $w=ux$ for some $x\in W$ and $\ell(w)=\ell(u)+\ell(x)$. Following the article, call such a $u$ a left divisor of $w$ and call this the left weak order; the finite-rank supplier calls the same prefix convention right weak order.

Let $\Theta=V^*=\operatorname{Hom}_{\mathbb R}(V,\mathbb R)$, the algebraic dual. Its contragredient action is $(wf)(v)=f(\rho(w)^{-1}v)$ for $w\in W$, $f\in\Theta$ and $v\in V$. No identification of $V$ with $V^*$ or nondegeneracy of $B$ is assumed.

## Justification

The presentation and length are defined for arbitrary $S$ by [math:def-arbitrary-rank-coxeter-system-and-bruhat-order](https://alphabetamath.cc/item/def-arbitrary-rank-coxeter-system-and-bruhat-order); in particular each group element has a finite word and the minimum length exists. The diagram simply records the matrix entries, and spherical type is a finiteness condition on this group.

The basis values extend uniquely to $B$ because vectors have finite support. For each finite $T\subseteq S$, the maps $r_s$ for $s\in T$ restrict to the finite-dimensional span of the corresponding basis vectors and are the simple reflections of [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites). To verify any defining relation on an arbitrary $v\in V$, choose a finite $T$ containing the generators in that relation and the support of $v$. The finite-rank representation supplier shows the relation holds on that finite-dimensional span. Thus all defining relations hold on $V$, and the presentation gives the unique homomorphism $\rho$; in particular each $\rho(w)$ is invertible. The displayed root sets and the dual action are consequently well-defined. The inverse in the dual formula makes it a left action: $(xy)f=x(yf)$.

The prefix relation is reflexive, using the identity. If $w=ux$ and $z=wy$ are length-additive, then $z=u(xy)$; subadditivity of word length and the two displayed equalities force $\ell(z)=\ell(u)+\ell(xy)$, proving transitivity. If $u\leq w$ and $w\leq u$, length additivity forces both factors to have length zero, hence $u=w$. Thus it is an order. In finite rank this is the prefix order of [prop-weak-order-interface-artin-tits-prerequisites](item-prop-weak-order-interface-artin-tits-prerequisites); no finite-rank lattice assertion is used here.
