---
id: ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element
kind: example
title: "The right weak interval below the longest element of $A_2$ is not distributive"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-cg-labeled-word-heap-and-fully-commutative-element, thm-cg-fully-commutative-forbidden-chain-criterion, thm-cg-fully-commutative-weak-intervals-are-distributive, def-cg-left-right-weak-order-and-descents, lem-cg-weak-order-prefix-property-and-left-translation, lem-cg-weak-order-is-a-graded-partial-order, def-lattice-distributive-lattice-and-order-ideal, thm-hh-matsumoto-reduced-word-theorem, def-hh-coxeter-matrix-word-group-and-length]
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Proposition 1.1 and the proof of Theorem 2.2, PDF pp. 4-5 and 8-9; Figure 1(a) illustrates the dihedral case $m=4$, while the $A_2$ case $m=3$ is computed locally here"
    - title: "P. Nadeau, On the length of fully commutative elements, arXiv:1511.08788"
      url: "https://arxiv.org/pdf/1511.08788"
      locator: "§2.4, Proposition 2.6 condition (h2), PDF p. 6 (the distinct-label alternating chain obstruction in this $A_2$ example)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s_1,s_2\}$ with $m(s_1,s_2)=3$ (type $A_2$), let $W$ be the presented group, let $w_0:=s_1s_2s_1$, and let $\le_R$ be the right weak order ([[def-cg-left-right-weak-order-and-descents]]).

**(1)** $[1,w_0]_R=W=\{1,s_1,s_2,s_1s_2,s_2s_1,w_0\}$, with cover relations $1\lessdot s_1$, $1\lessdot s_2$, $s_1\lessdot s_1s_2$, $s_2\lessdot s_2s_1$, $s_1s_2\lessdot w_0$, $s_2s_1\lessdot w_0$; the middle elements $s_1s_2$ and $s_2s_1$ are incomparable, and so are $s_1,s_2s_1$ and $s_2,s_1s_2$.

**(2)** The subposet $\{1,\,s_1,\,s_1s_2,\,s_2s_1,\,w_0\}$ is a pentagon: $1<s_1<s_1s_2<w_0$ and $1<s_2s_1<w_0$, with $s_1,s_1s_2$ incomparable to $s_2s_1$.

**(3)** $[1,w_0]_R$ is not distributive: with $u=s_1$, $v=s_1s_2$ and $d=s_2s_1$ one has $u\vee d=w_0$ (the only common upper bound of $s_1$ and $s_2s_1$), hence $$v\wedge(u\vee d)=v\wedge w_0=v=s_1s_2,$$ while $$(v\wedge u)\vee(v\wedge d)=u\vee1=s_1,$$ and $s_1\ne s_1s_2$.

**(4)** The element $w_0$ is not fully commutative, since the reduced word $s_1s_2s_1$ contains the contiguous braid factor $\langle s_1,s_2\rangle_3$; so this interval is a non-distributive weak interval below a non-fully-commutative element. The example does not prove the converse of [[thm-cg-fully-commutative-weak-intervals-are-distributive]]; it verifies non-distributivity of this single interval directly.

## Facts & Assumptions

**Given:** The Coxeter matrix of type $A_2$ on $S=\{s_1,s_2\}$, the presented group $W$, the right weak order $\le_R$ and the element $w_0=s_1s_2s_1$.

[F1] The right weak order is defined by $u\le_R v$ if and only if $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$; intervals, covers $\lessdot_R$ and meets and joins of subsets are defined by their universal properties ([[def-cg-left-right-weak-order-and-descents]], clauses (1)-(3)); the relators of the presentation are $s^2$ and $(st)^{m(s,t)}$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] For all $u,v\in W$ one has $u\le_R v\iff\ell(v)=\ell(u)+\ell(u^{-1}v)$, so $u<_R v$ forces $\ell(u)<\ell(v)$; and $u\le_R v$ if and only if some reduced expression of $v$ has a reduced expression of $u$ as initial segment ([[lem-cg-weak-order-prefix-property-and-left-translation]], clauses (1)-(2)).

[F3] Covers in $\le_R$ are exactly the pairs $v=us$ with $s\in S$ and $\ell(v)=\ell(u)+1$ ([[lem-cg-weak-order-is-a-graded-partial-order]], clause (2)).

[F4] The subgroup $\langle s_1,s_2\rangle$ is dihedral of order $2m(s_1,s_2)=6$, any two reduced expressions of the same element are braid-equivalent, every element has a reduced expression with letters in $\{s_1,s_2\}$, and the alternating words of length $q\le3$ are reduced ([[thm-hh-matsumoto-reduced-word-theorem]], clauses (1) and (3)).

[F5] An element is fully commutative if and only if no reduced word of it contains $\langle u,v\rangle_{m(u,v)}$ as a contiguous factor for any distinct $u,v$ with $3\le m(u,v)<\infty$ ([[thm-cg-fully-commutative-forbidden-chain-criterion]], clause (1)).

[F6] A lattice is distributive when the distributive identity $x\wedge(y\vee z)=(x\wedge y)\vee(x\wedge z)$ holds for all $x,y,z$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F7] The interval theorem identifies only right weak intervals of fully commutative elements with lattices of order ideals; no claim is made about elements that are not fully commutative ([[thm-cg-fully-commutative-weak-intervals-are-distributive]], clause (4)).

## Verification

**Proof technique:** direct.

1.1 The group and its elements. Since $S=\{s_1,s_2\}$, the subgroup $\langle s_1,s_2\rangle$ is all of $W$, so by [F4] $W$ is dihedral of order $2\cdot3=6$; its elements are the six distinct elements $(s_1s_2)^k$ and $(s_1s_2)^ks_1$ for $k=0,1,2$. With $(s_1s_2)^3=1$ from the relator of [F1] these are $1$, $s_1s_2$, $(s_1s_2)^2=s_2s_1$, $s_1$, $(s_1s_2)s_1=s_1s_2s_1=w_0$ and $(s_1s_2)^2s_1=s_2$; hence $W=\{1,s_1,s_2,s_1s_2,s_2s_1,w_0\}$ and, since the displayed words are the reduced expressions by [F4], the lengths are $0,1,1,2,2,3$ respectively, in particular $\ell(w_0)=3$. The reduced words of $w_0$ are exactly $s_1s_2s_1$ and $s_2s_1s_2$: both are reduced of length $3$ and represent $w_0$ by the braid relation of [F1], and by [F4](1) every reduced word of $w_0$ is braid-equivalent to $s_1s_2s_1$, while the only braid move applicable to a length-three word in the two letters replaces the whole alternating word by the other. [given, F1, F4]

2.1 The interval and the covers. By the prefix property [F2](2), the elements of $[1,w_0]_R$ are the products of the prefixes of the reduced words $s_1s_2s_1$ and $s_2s_1s_2$ of $w_0$ established in step 1.1, namely $1,s_1,s_1s_2,w_0$ and $1,s_2,s_2s_1,w_0$; these are all six elements of $W$ by 1.1, so $[1,w_0]_R=W$. By [F3] every cover in $\le_R$ is of the form $v=us$ with $s\in S$ and $\ell(v)=\ell(u)+1$; running over the six elements $u$ and the two generators and using the length table of 1.1, the products with length increase one are exactly $1\cdot s_1=s_1$, $1\cdot s_2=s_2$, $s_1\cdot s_2=s_1s_2$, $s_2\cdot s_1=s_2s_1$, $s_1s_2\cdot s_1=w_0$ and $s_2s_1\cdot s_2=w_0$, while $s_1s_2\cdot s_2=s_1$, $s_2s_1\cdot s_1=s_2$ and the products $w_0s$ (of length $2$) do not raise the length. Hence these six pairs are exactly the covers. The elements $s_1s_2$ and $s_2s_1$ are distinct of equal length $2$, so neither is below the other by the strict length increase in [F2](1), and they are incomparable; likewise $s_2s_1\not\le_R s_1$ and $s_1s_2\not\le_R s_2$ by length, while $s_1\le_R s_2s_1$ would force $\ell(s_2s_1)=\ell(s_1)+\ell(s_1^{-1}s_2s_1)=1+\ell(w_0)=4$ by [F2](1), which is false; so $s_1,s_2s_1$ are incomparable, and symmetrically $s_2,s_1s_2$ are incomparable. Consequently the subposet $\{1,s_1,s_1s_2,s_2s_1,w_0\}$ has the chains $1<s_1<s_1s_2<w_0$ and $1<s_2s_1<w_0$ together with the incomparabilities just listed, that is, it is the pentagon. [given, F2, F3, step 1.1]

3.1 Failure of distributivity. Put $u=s_1$, $v=s_1s_2$ and $d=s_2s_1$. The upper bounds of $\{u,d\}$ are the elements above both: above $s_1$ lie $s_1,s_1s_2,w_0$ and above $s_2s_1$ lie $s_2s_1,w_0$, so the only common upper bound is $w_0$ and $u\vee d=w_0$. Since $v=s_1s_2\le_R w_0$, one has $v\wedge(u\vee d)=v\wedge w_0=v=s_1s_2$. The only reduced word of $v=s_1s_2$ is $(s_1,s_2)$: the only length-two words are $s_1s_1,s_1s_2,s_2s_1,s_2s_2$, the equal-letter words represent $1$, and $s_1s_2$ and $s_2s_1$ are distinct by the element list in 1.1. The only reduced word of $d=s_2s_1$ is likewise $(s_2,s_1)$. Therefore the elements below $v$ are $1,s_1,s_1s_2$, while those below $u=s_1$ are $1,s_1$, so $v\wedge u=s_1$; the elements below $d$ are $1,s_2,s_2s_1$, whose intersection with the elements below $v$ is just $1$, so $v\wedge d=1$. Hence $(v\wedge u)\vee(v\wedge d)=s_1\vee1=s_1$, while $v\wedge(u\vee d)=s_1s_2\ne s_1$; the distributive identity of [F6] fails for the triple $(u,v,d)$, so $[1,w_0]_R$ is not distributive. [given, F1, F2, F4, F6, step 1.1, step 2.1]

4.1 By step 1.1, $s_1s_2s_1$ is a reduced word of $w_0$ containing the contiguous factor $\langle s_1,s_2\rangle_3$, so by [F5] the element $w_0$ is not fully commutative; this exhibits a non-distributive right weak interval below a non-fully-commutative element. The interval theorem [F7] concerns only fully commutative elements, so no contradiction arises, and the example verifies only the failure of distributivity for this single interval; it does not prove the converse implication. [given, F5, F7, step 1.1, step 3.1] ∎
