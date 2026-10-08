---
id: lem-cg-fundamental-weight-orbit-and-schreier-distance
kind: lemma
title: "The orbit of a dual fundamental functional: stabilizer, minimal coset length, Schreier distance, and the quotient formula"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [def-cg-canonical-reflection-homomorphism, def-cg-dual-chambers-and-reflection-hyperplanes, def-cg-length-series-descent-generating-polynomial, def-cg-parabolic-quotient-and-two-sided-minima, def-cg-real-coxeter-form-and-reflection, def-cg-tits-cone-and-fundamental-chamber, def-coset, def-dual-family-associated-to-a-basis, def-generated-subgroup, def-group-action, def-hh-coxeter-matrix-word-group-and-length, def-index, lem-cg-dual-action-and-chamber-faces-exist, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-dual-chamber-intersections-and-point-stabilizers, thm-dual-family-is-a-basis-in-finite-dimension, thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-well-ordering-principle]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 4.7, printed pp. 53-54, Lemmas 4.7.2-4.7.3: the right descent parabolic is finite, and the stated longest/shortest coset properties; Chapter 17.1, printed pp. 318-319, Lemma 17.1.7: longest representatives for spherical $W_T$ satisfy $B'_T=\\{w:T\\subseteq\\operatorname{In}(w)\\}$. Davis explicitly treats nonspherical $T$ by setting $B'_T=\\emptyset$; this does not cover the item's possibly infinite $W_T$, for which the minimal-coset argument is proved locally from the length-additive representative theorem."
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2.4, printed pp. 39-40: Proposition 2.4.4 and Corollary 2.4.5 give the unique length-additive decomposition $w=w^Jw_J$, the descent-free characterization of $W^J$, and the unique minimal representative of each coset $wW_J$."
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, $V=\mathbb R^S$ with Coxeter form $B$ and canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[lem-cg-reflection-representation-descends-and-root-norms]] (1), [[def-hh-coxeter-matrix-word-group-and-length]]), with the dual (contragredient) left action on $V^*$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[lem-cg-dual-action-and-chamber-faces-exist]] (1)), the closed chamber $C=\{f\in V^*:f(e_s)\ge0\text{ for all }s\in S\}$ and the Tits cone $U=\bigcup_{w\in W}wC$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[def-cg-tits-cone-and-fundamental-chamber]]). Fix $s_0\in S$, put $T:=S\setminus\{s_0\}$, and let $f_0\in V^*$ be the dual fundamental functional $f_0(e_s)=\delta_{s,s_0}$ ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]]); then $f_0\in C\subseteq U$. Then:

**(1) Stabilizer and orbit.** With $S(f):=\{s\in S:f(e_s)=0\}$ one has $S(f_0)=T$ and $\operatorname{Stab}_W(f_0)=W_T$ ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (4)). Hence the orbit map
$$\Phi:W/W_T\longrightarrow W\cdot f_0,\qquad \Phi(wW_T)=w\cdot f_0,$$
is a well-defined $W$-equivariant bijection ([[def-group-action]], [[def-coset]], [[def-generated-subgroup]]). If $W/W_T$ is finite, this bijection gives $|W\cdot f_0|=[W:W_T]$ ([[def-index]]); no finite-cardinality notation is used for an infinite orbit.

**(2) Distance equals minimal coset length.** For $v\in W\cdot f_0$ put
$$d(v):=\min\{\ell(x):x\in W,\ x\cdot f_0=v\},$$
the minimum being attained because $\{\ell(x):x\cdot f_0=v\}$ is a nonempty subset of $\mathbb N$ ([[thm-well-ordering-principle]]). For every $w$ with $w\cdot f_0=v$ one has $\{x\in W:x\cdot f_0=v\}=wW_T$, and $d(v)=\ell(d_w)$, where $d_w$ is the unique minimal-length element of the left coset $wW_T$, characterized by $\ell(d_ws)>\ell(d_w)$ for all $s\in T$ and satisfying $\ell(d_wu)=\ell(d_w)+\ell(u)$ for all $u\in W_T$ ([[def-coset]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3) with [[def-cg-parabolic-quotient-and-two-sided-minima]] (2)).

**(3) Schreier graph and unit step bound.** Let $\Gamma$ be the graph with vertex set $W\cdot f_0$ and an undirected edge between $v$ and $s\cdot v$ for every $s\in S$ and every $v$ (self-loops omitted). Then $d(v)$ is the graph distance in $\Gamma$ from $f_0$ to $v$; in particular $d(f_0)=0$ and
$$|d(s\cdot v)-d(v)|\le1\qquad\text{for all }s\in S,\ v\in W\cdot f_0.$$

**(4) Parabolic quotient formula.** $P_W(t)=P_{W_T}(t)\cdot\sum_{v\in W\cdot f_0}t^{d(v)}$ in $\mathbb Z\llbracket t\rrbracket$ ([[def-cg-length-series-descent-generating-polynomial]]).

**(5) Conventions.** The statement requires $s_0\in S$, so $T=S$ does not occur here; the parabolic $W_T$ need not be finite. Nothing is asserted about primitive vectors, minuscule weights or the general classification of orbits. No choice principle is used.

## Facts & Assumptions

**Given:** A Coxeter system $(W,S)$ with $S$ finite and length function $\ell$; the reflection representation $\rho$ on $V=\mathbb R^S$ with Coxeter form $B$; the dual action on $V^*$, the closed chamber $C$, its open part and the Tits cone $U$; a fixed $s_0\in S$, $T=S\setminus\{s_0\}$, and the dual fundamental functional $f_0=e_{s_0}^*$ with $f_0(e_s)=\delta_{s,s_0}$.

[F1] The canonical map $\rho:W\to\mathrm{GL}(V)$ is a group homomorphism with $\rho(s)=r_s$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (1)); consequently the formula $(w\cdot f)(v)=f(\rho(w)^{-1}v)$ defines a left action by linear maps ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[lem-cg-dual-action-and-chamber-faces-exist]] (1), [[def-group-action]]). The closed chamber is $C=\{f\in V^*:f(e_s)\ge0\text{ for all }s\}$ and the Tits cone is $U=\bigcup_{w\in W}wC$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[def-cg-tits-cone-and-fundamental-chamber]]).

[F2] $W_T=\langle s:s\in T\rangle$ is the standard parabolic, $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$, and the set $wW_T$, a left coset by [[def-coset]], has a unique element $d$ of minimal length, characterized by $\ell(ds)>\ell(d)$ for all $s\in T$ and satisfying $\ell(du)=\ell(d)+\ell(u)$ for all $u\in W_T$ ([[def-cg-parabolic-quotient-and-two-sided-minima]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3), [[def-generated-subgroup]]).

[F3] For every $f\in C$ the point stabilizer is $\operatorname{Stab}_W(f)=W_{S(f)}$, where $S(f)=\{s\in S:f(e_s)=0\}$ ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (4)).

[F4] For all $w\in W$ and $s\in S$ one has $\ell(sw)=\ell(w)\pm1$ and $\ell(ws)=\ell(w)\pm1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1)).

[F5] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F6] $f_0$ is the coordinate functional $e_{s_0}^*$ of the basis element $e_{s_0}$, so $f_0(e_s)=\delta_{s,s_0}$; and for every $A\subseteq W$ the series $P_A=\sum_{w\in A}t^{\ell(w)}$ is a well-defined element of $\mathbb Z\llbracket t\rrbracket$ with finite length fibers ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]], [[def-cg-length-series-descent-generating-polynomial]] (1)).

[F7] $[W:W_T]=|W/W_T|$ when $W/W_T$ is finite; otherwise $[W:W_T]=\infty$ is a symbol, not a cardinality ([[def-index]]).

[F8] Every simple generator satisfies $s^2=1$ in $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

## Proof

**Proof technique:** direct.

1.1 The functional $f_0$ vanishes exactly on $T$: $\{s\in S:f_0(e_s)=0\}=S\setminus\{s_0\}=T$, and all values $f_0(e_s)=\delta_{s,s_0}$ are $\ge0$, so $f_0\in C$. By [F3] the point stabilizer is $\operatorname{Stab}_W(f_0)=W_{S(f_0)}=W_T$. [F3, F6, given]

2.1 For $u\in W_T$ one has $u\cdot f_0=f_0$ by step 1.1, so $w'\in wW_T$ (that is, $w'=wu$ with $u\in W_T$) implies $w'\cdot f_0=w\cdot(u\cdot f_0)=w\cdot f_0$: the orbit map $\Phi$ is well defined. If $w\cdot f_0=w'\cdot f_0$, then applying $w^{-1}$ gives $w^{-1}w'\cdot f_0=f_0$, so $w^{-1}w'\in\operatorname{Stab}_W(f_0)=W_T$ and $wW_T=w'W_T$: $\Phi$ is injective. It is surjective onto $W\cdot f_0$ by definition, and $\Phi(w''wW_T)=w''\cdot\Phi(wW_T)$ for all $w''$, so it is $W$-equivariant. Hence $\Phi$ is a bijection. If $W/W_T$ is finite, [F7] and this bijection give $|W\cdot f_0|=[W:W_T]$; in the infinite case the equality of sets remains the assertion, without finite-cardinality notation. [step 1.1, F1, F7, given]

2.2 Fix $v\in W\cdot f_0$ and any $w$ with $w\cdot f_0=v$. For $x\in W$ one has $x\cdot f_0=w\cdot f_0$ if and only if $w^{-1}\cdot(x\cdot f_0)=f_0$, i.e. $(w^{-1}x)\cdot f_0=f_0$, i.e. $w^{-1}x\in\operatorname{Stab}_W(f_0)=W_T$, i.e. $x\in wW_T$. Thus $\{x\in W:x\cdot f_0=v\}=wW_T$. [step 1.1, F1, algebra]

3.1 The set $\{\ell(x):x\in wW_T\}$ is a nonempty subset of $\mathbb N$, so it has a least element by [F5]; by step 2.2 that least element is $d(v)$. By [F2] the left coset $wW_T$ has a unique element $d_w$ of minimal length, characterized by $\ell(d_ws)>\ell(d_w)$ for all $s\in T$, and then $\ell(d_wu)=\ell(d_w)+\ell(u)$ for all $u\in W_T$. Hence $d(v)=\ell(d_w)$. [step 2.2, F2, F5]

4.1 Let $f_0=v_0,v_1,\dots,v_m=v$ be a walk in $\Gamma$; an undirected edge may be traversed in reverse; the same generator still sends the preceding vertex to the next because its square is the identity by [F8], so there are $s_1,\dots,s_m\in S$ with $v_i=s_i\cdot v_{i-1}$, so $v=s_m\cdots s_1\cdot f_0$ and $x:=s_m\cdots s_1$ satisfies $x\cdot f_0=v$ and $\ell(x)\le m$. Therefore $d(v)\le\ell(x)\le m$; taking the least such $m$ gives $d(v)\le\operatorname{dist}_\Gamma(f_0,v)$. [given, F1, F8, step 3.1]

4.2 Let $v\in W\cdot f_0$ and $s\in S$, and choose $x$ with $x\cdot f_0=v$ and $\ell(x)=d(v)$ by step 3.1. Then $(sx)\cdot f_0=s\cdot v$, so $d(s\cdot v)\le\ell(sx)\le\ell(x)+1=d(v)+1$ by [F4]. Applying the same estimate to $s\cdot v$ in place of $v$ and using $s\cdot(s\cdot v)=(s^2)\cdot v=v$ gives $d(v)\le d(s\cdot v)+1$. Hence $|d(s\cdot v)-d(v)|\le1$ for all $s,v$. [step 3.1, F1, F4, F8, algebra]

5.1 Conversely let $x=s_1\cdots s_m$ be a reduced expression with $x\cdot f_0=v$ and $m=d(v)$, which exists by step 3.1. The sequence $f_0,\ s_m\cdot f_0,\ s_{m-1}s_m\cdot f_0,\ \dots,\ s_1\cdots s_m\cdot f_0=v$ is obtained by successively prepending letters. No consecutive vertices agree: if $s_i$ fixed the current suffix image $s_{i+1}\cdots s_m\cdot f_0$, deleting $s_i$ would still send $f_0$ to $v$ and give a representative of length at most $m-1$, contrary to $m=d(v)$. Thus every consecutive pair is an edge (self-loops are omitted), and $\operatorname{dist}_\Gamma(f_0,v)\le m=d(v)$. With step 4.1 this gives $\operatorname{dist}_\Gamma(f_0,v)=d(v)$; in particular $d(f_0)=0$ because $1\cdot f_0=f_0$ and $\ell(1)=0$. [step 3.1, step 4.1, F1, algebra]

6.1 By [F2] every $w\in W$ has a unique factorization $w=d_wu$ with $u\in W_T$ and $d_w$ the minimal element of the left coset $wW_T$, and $\ell(w)=\ell(d_w)+\ell(u)$. By steps 2.1, 2.2 and 3.1 the assignment $w\mapsto d_w\cdot f_0$ is a map of $W$ onto $W\cdot f_0$ whose fibers are exactly the cosets $wW_T$, and $d(d_w\cdot f_0)=\ell(d_w)$. Summing $t^{\ell(w)}=t^{d(d_w\cdot f_0)}t^{\ell(u)}$ over the unique pairs $(d_w,u)$ therefore gives $P_W(t)=\sum_{v\in W\cdot f_0}\sum_{u\in W_T}t^{d(v)+\ell(u)}=\bigl(\sum_{v\in W\cdot f_0}t^{d(v)}\bigr)P_{W_T}(t)$ in $\mathbb Z\llbracket t\rrbracket$. Both factors are well-defined series by [F6]: for each $n$ the set $\{v:d(v)=n\}$ is contained in the image of the finite fiber $\{x:\ell(x)=n\}$ under $x\mapsto x\cdot f_0$, hence finite. [step 2.1, step 2.2, step 3.1, F2, F6, algebra] ∎
