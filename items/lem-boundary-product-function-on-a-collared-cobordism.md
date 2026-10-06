---
id: lem-boundary-product-function-on-a-collared-cobordism
kind: lemma
title: "Boundary product function on a collared cobordism"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-smooth-cobordism-triad-for-morse-theory, def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary, lem-manifold-bump-for-a-compact-set-inside-an-open-set, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "collars glued by a dominated partition of unity"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact collared triad with
fixed collar coordinates $t_0:M_0\times[0,1)\to W$ and
$t_1:M_1\times[0,1)\to W$ having disjoint images; in function formulas, $t_i$ denotes the second coordinate of the inverse collar map. There is a smooth
$h:W\to[0,1]$ with $h^{-1}(0)=M_0$, $h^{-1}(1)=M_1$, $h=t_0/3$ on a
neighbourhood of $M_0$, $h=1-t_1/3$ on a neighbourhood of $M_1$,
$1/3<h<2/3$ outside the two collar neighbourhoods, and no critical point in a
neighbourhood of $\partial W$.

## Facts & Assumptions

[F1] [[def-smooth-collar-of-a-manifold-boundary]]: A smooth collar is a smooth embedding $c:\partial M\times[0,\varepsilon)\to M$ such that $c(p,0)=p$ and whose image is an open neighbourhood of $\partial M$ in $M$.

[F2] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F3] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

[F5] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement: for every family $(X_n)_{n\in\mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n)\in X_n$ for every $n\in\mathbb{N}$.

[F6] [[def-smooth-cobordism-triad-for-morse-theory]]: A smooth cobordism triad $(W;M_0,M_1)$ consists of a compact smooth $n$-manifold with boundary $W$, for $n\ge1$ two closed embedded smooth $(n-1)$-submanifolds $M_0,M_1\subseteq\partial W$ with $\partial W=M_0\sqcup M_1$, and fixed collars of both faces in $W$. For $n=0$, both faces and collar domains are empty; no manifold of dimension $-1$ is introduced.

## Proof

**Given:** The triad $(W;M_0,M_1)$ and the two fixed collars $t_0,t_1$ with disjoint images.

1.1 Put $U_0:=t_0(M_0\times[0,1/4))$, $U_1:=t_1(M_1\times[0,1/4))$ and $U_2:=W\setminus\bigl(t_0(M_0\times[0,1/8])\cup t_1(M_1\times[0,1/8])\bigr)$. Each $U_i$ is open, and they cover $W$: a point outside the two closed strips lies in $U_2$, while a point of $t_0(M_0\times[0,1/8])$ lies in $U_0$ and a point of $t_1(M_1\times[0,1/8])$ lies in $U_1$. [F1, F6, algebra]

2.1 By [F3] choose a smooth partition of unity $(\psi_0,\psi_1,\psi_2)$ subordinate to $(U_0,U_1,U_2)$; choose a smooth scalar cutoff $b:[0,1)\to[0,1]$ equal to one for $t\le1/16$ and zero for $t\ge1/8$, obtained by integrating a nonnegative smooth bump in $(1/16,1/8)$ and taking its normalized complementary integral. Define $\beta=b(t_0)$ on the first collar and $\gamma=b(t_1)$ on the second, extending both by zero off their collar images; their supports lie in $U_0,U_1$ and they are smooth up to the faces. Set $\phi_0:=\beta+(1-\beta)(1-\gamma)\psi_0$, $\phi_1:=(1-\beta)\gamma+(1-\beta)(1-\gamma)\psi_1$ and $\phi_2:=(1-\beta)(1-\gamma)\psi_2$. Then $\phi_0+\phi_1+\phi_2=\beta+(1-\beta)[(1-\gamma)(\psi_0+\psi_1+\psi_2)+\gamma]=1$, each $\phi_i$ is supported in $U_i$, and $\phi_0=1$ on the neighbourhood $\{\beta=1\}$ of $M_0$ while $\phi_1=1$ on the neighbourhood $\{\gamma=1\}$ of $M_1$, because $\beta$ vanishes on $U_1$ and $\gamma$ vanishes on $U_0$. [F3, F5, step 1.1, construct]

3.1 Define the functions $g_0:=t_0/3$ on $U_0$ (where $t_0:M_0\times[0,1/4)\to W$ is inverted on its image), $g_1:=1-t_1/3$ on $U_1$, and $g_2:=1/2$ on $U_2$, and set $h:=\sum_i\phi_ig_i$, a smooth function on $W$ with values in $[0,1]$ because $0\le t_0/3<1/12$, $11/12<1-t_1/3\le1$ and $1/2$, and the $\phi_i$ form a partition of unity. [F2, F3, step 2.1, construct]

4.1 Values at the faces: near $M_0$ one has $\phi_0=1$ and $\phi_1=\phi_2=0$, so $h=t_0/3$, which vanishes exactly on $M_0$ and is positive elsewhere; near $M_1$ one has $\phi_1=1$, so $h=1-t_1/3$, which equals $1$ exactly on $M_1$. At every interior point all active collar values are strictly between zero and one, as is $g_2=1/2$; their convex combination is therefore strictly between zero and one. Hence the first equality gives $h^{-1}(0)=M_0$ and the second gives $h^{-1}(1)=M_1$. [step 2.1, step 3.1, algebra]

4.2 Outside the two collar neighbourhoods $U_0\cup U_1$ only the term with $\phi_2$ contributes, so $h=1/2$ there; in particular $1/3<h<2/3$ on $W\setminus(U_0\cup U_1)$. [step 1.1, step 3.1, algebra]

5.1 No critical point occurs in a neighbourhood of $\partial W$: in the coordinates $(p,t)\in M_0\times[0, 1/16)$ near $M_0$ one has $h=t/3$, whose differential is $\tfrac13dt\ne0$, so $dh$ has no zero there; the same computation with $h=1-t/3$ gives the statement near $M_1$. These two open collar strips give a neighbourhood of $\partial W=M_0\sqcup M_1$ that is free of critical points of $h$, as asserted. [step 4.1, algebra] ∎
