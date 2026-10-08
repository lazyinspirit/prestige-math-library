---
id: lem-cg-weak-order-is-a-graded-partial-order
kind: lemma
title: "Weak order is a partial order with finite graded intervals; covers and the inversion-set criterion"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps:
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-weak-order-prefix-property-and-left-translation
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-length-criterion-and-faithfulness
  - def-cg-parabolic-quotient-and-two-sided-minima
  - def-graded-poset-and-rank
  - def-poset-interval-and-finiteness-conditions
  - def-partial-order
justified_by: []
proof_strategy: "length induction, covers, graded intervals, inversion criterion and the descent-root dictionary"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Proposition 3.1.2(ii),(iv),(vi), printed p. 66; Proposition 3.1.3 with proof and Corollary 3.1.4, printed pp. 68-69 (reflection-set criterion and rank-preserving embedding)"
    - title: "Nathan Reading and David E. Speyer, Cambrian fans (J. Eur. Math. Soc. 11 (2009) 407-447; arXiv:math/0606201v2)"
      url: "https://arxiv.org/pdf/math/0606201v2"
      locator: "Section 2, arXiv p. 6 (the finite-Coxeter-group weak order induced by inversion containment; corroborative only for the finite case)"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group with length
$\ell$, descent sets $D_L,D_R$, weak orders $\le_R,\le_L$ and intervals
$[u,v]_R,[u,v]_L$ as in [[def-cg-left-right-weak-order-and-descents]], with
inversion sets $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ and the
recursion of [[def-cg-geometric-inversion-set]] (2). Then:

**(1) Partial orders.** $\le_R$ and $\le_L$ are partial orders on $W$, both
with minimum $1$; $u\le_R v$ and $\ell(u)=\ell(v)$ imply $u=v$; and inversion
$w\mapsto w^{-1}$ is an order isomorphism $(W,\le_R)\to(W,\le_L)$, i.e.
$u\le_R v\iff u^{-1}\le_L v^{-1}$.

**(2) Covers.** For all $u,v\in W$,

$$u\lessdot_R v\iff v=us\text{ for some }s\in S\text{ with }\ell(v)=\ell(u)+1,\qquad u\lessdot_L v\iff v=su\text{ for some }s\in S\text{ with }\ell(v)=\ell(u)+1.$$

Moreover $u\le_R v$ if and only if there is a chain
$u=u_0\lessdot_R u_1\lessdot_R\cdots\lessdot_R u_m=v$, and then necessarily
$m=\ell(v)-\ell(u)$; the same holds in $\le_L$.

**(3) Intervals are finite and graded.** For every $k\ge0$ the ball
$\{w\in W:\ell(w)\le k\}$ is finite, with at most $1+|S|+\cdots+|S|^k$
elements. Consequently, whenever $u\le_R v$, the interval $[u,v]_R$ is finite
and $x\mapsto\ell(x)-\ell(u)$ is a rank function on it in the sense of
[[def-graded-poset-and-rank]]; in particular every maximal chain in $[u,v]_R$
has exactly $\ell(v)-\ell(u)+1$ elements, and if $u^{-1}v=s'_1\cdots s'_m$ is
a reduced expression then
$u\lessdot_R us'_1\lessdot_R\cdots\lessdot_R u s'_1\cdots s'_m=v$ is such a
maximal chain. The same statements hold for $\le_L$.

**(4) Inversion-set criterion.** For all $u,v\in W$,

$$u\le_R v\iff N(u^{-1})\subseteq N(v^{-1}),\qquad u\le_L v\iff N(u)\subseteq N(v);$$

moreover $|N(w^{-1})|=|N(w)|=\ell(w)$ for every $w$. Equivalently,
$w\mapsto N(w^{-1})$ embeds $(W,\le_R)$ into the lattice of subsets of
$\Phi_+$ as an order-preserving and length-preserving map. The criterion is
not the definition of $\le_R$; it is derived from
[[def-cg-left-right-weak-order-and-descents]].

**(5) Descents and roots.** For all $w\in W$ and $s\in S$,

$$s\in D_L(w)\iff e_s\in N(w^{-1})\iff\rho(w^{-1})e_s\in\Phi_-,\qquad s\in D_R(w)\iff e_s\in N(w)\iff\rho(w)e_s\in\Phi_-.$$

No Choice is used.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$, length function $\ell$, descent sets $D_L,D_R$, weak orders $\le_R,\le_L$, reflection homomorphism $\rho$, roots $\Phi_\pm$ and inversion sets $N(w)$ as in [[def-cg-left-right-weak-order-and-descents]] and [[def-cg-geometric-inversion-set]]; $u,v,x,y,w\in W$, $s\in S$, $k\ge0$ and $m\ge0$ are arbitrary unless a clause specifies otherwise.

[F1] [[def-cg-left-right-weak-order-and-descents]]: $u\le_R v$ means that $v=ux$ for some $x\in W$ with $\ell(v)=\ell(u)+\ell(x)$, and $u\le_L v$ means that $v=xu$ with the same length condition; $u\le_R v\iff u^{-1}\le_L v^{-1}$; covers, intervals and bounded subsets are defined there.

[F2] [[lem-cg-weak-order-prefix-property-and-left-translation]] (1): the length identities for $\le_R$ and $\le_L$, and the resulting monotonicity of length along either relation.

[F3] [[def-hh-coxeter-matrix-word-group-and-length]]: for $w\in W$, $\ell(w)=\min\{k\in\mathbb{N}:\ \text{there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}$, and a reduced expression is a word realizing this minimum.

[F4] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1): for all $w$ and $s$, $\ell(sw)=\ell(w)\pm1$ and $\ell(ws)=\ell(w)\pm1$, with $\ell(sw)\equiv\ell(w)+1$ modulo $2$ and likewise on the right.

[F5] [[def-cg-geometric-inversion-set]] (2): for $u\in W$, $s\in S$ the recursions $N(us)=\{e_s\}\sqcup sN(u)$ when $\ell(us)>\ell(u)$ and $N(us)=s(N(u)\setminus\{e_s\})$ when $\ell(us)<\ell(u)$.

[F6] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (2): for every $w$, $|N(w)|=\ell(w)$, and for a reduced expression $w=s_1\cdots s_n$, $N(w)$ and $N(w^{-1})$ are the sets of suffix roots $\rho(s_{i+1}\cdots s_n)^{-1}e_{s_i}$ and prefix roots $\rho(s_1\cdots s_{i-1})e_{s_i}$ respectively, pairwise distinct. In particular, the prefix-root list has $\ell(w)$ distinct elements, so $|N(w^{-1})|=\ell(w)$; applying the cardinality formula to $w^{-1}$ gives $\ell(w^{-1})=|N(w^{-1})|=\ell(w)$.

[F7] [[thm-cg-root-length-criterion-and-faithfulness]] (1): for all $w$ and $s$, $\ell(ws)>\ell(w)\iff\rho(w)e_s\in\Phi_+$ and $\ell(ws)<\ell(w)\iff\rho(w)e_s\in\Phi_-$.

[F8] [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $D_L(w)=\{s\in S: \ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$.

[F9] [[def-graded-poset-and-rank]]: a rank function on a finite poset $P$ is a map $\rho:P\to\mathbb N$ with every minimal element of rank $0$ and $\rho(y)=\rho(x)+1$ whenever $y$ covers $x$; a poset admitting one is graded.

[F10] [[def-poset-interval-and-finiteness-conditions]]: $[x,y]=\{z:x\le z\le y\}$ for comparable elements, and a poset is locally finite when all its intervals are finite.

[F11] [[def-partial-order]]: a partial order is reflexive, antisymmetric and transitive.

[F12] [[def-hh-coxeter-matrix-word-group-and-length]]: each defining generator satisfies $s^2=1$ in $W$.

[F13] [[def-cg-geometric-inversion-set]] (1): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$.

[F14] [[lem-cg-weak-order-prefix-property-and-left-translation]] (2): the reduced-word prefix property: $u\le_R v$ exactly when some reduced expression of $v$ has a reduced expression of $u$ as its initial segment.

[F15] [[lem-cg-weak-order-prefix-property-and-left-translation]] (3): if $s\in D_L(u)\cap D_L(v)$, then $u\le_R v\iff su\le_R sv$.

[A1] Consequences of [F3] used throughout: $\ell(1)=0$; $\ell(a)=0$ implies $a=1$; and $\ell(ab)\le\ell(a)+\ell(b)$. Also $\ell(s)=1$ for every $s\in S$: applying [F4] (1) at $w=1$ gives $\ell(s)=\ell(1)\pm1$, and nonnegativity of length forces $\ell(s)=1$.

## Proof

1.1 Reflexivity and minimum: for every $v\in W$ one has $v=v\cdot1$ with $\ell(v)=\ell(v)+\ell(1)=\ell(v)+0$, so $v\le_R v$, and $1\cdot v=v$ with $\ell(v)=\ell(1)+\ell(v)$, so $1\le_R v$; reading the same products in the other order gives $v\le_L v$ and $1\le_L v$. Hence both relations are reflexive and $1$ is below every element in both orders. [F1, F3, A1, given, algebra]

1.2 Transitivity: if $u\le_R y$ and $y\le_R v$, write $y=ux$ and $v=yx'$ with $\ell(y)=\ell(u)+\ell(x)$ and $\ell(v)=\ell(y)+\ell(x')$. Then $v=u(xx')$, and $\ell(v)=\ell(u)+\ell(x)+\ell(x')\ge\ell(u)+\ell(xx')\ge\ell(v)$ by subadditivity together with the word bound $v=u(xx')$; hence $\ell(v)=\ell(u)+\ell(xx')$ and $u\le_R v$. The same computation with the products in the other order shows that $\le_L$ is transitive. [F1, A1, given, algebra]

1.3 Inversion: the map $w\mapsto w^{-1}$ is a bijection of $W$ with inverse itself, and $u\le_R v\iff u^{-1}\le_L v^{-1}$ for all $u,v$; hence it is an order isomorphism $(W,\le_R)\to(W,\le_L)$. This completes clause (1). [F1, given, algebra]

1.4 Ball finiteness: every $w$ with $\ell(w)\le k$ has a reduced expression of length $\ell(w)\le k$, so the ball $\{w:\ell(w)\le k\}$ is the set of values of the finitely many words in $S$ of lengths $0,1,\dots,k$; those words number $1+|S|+\cdots+|S|^k$, and listing their values exhibits the ball as the image of a finite list, hence finite with at most that many elements. [F3, A1, given, algebra]

1.5 The criterion, forward direction, and cardinalities: if $u\le_R v$, then $N(u^{-1})\subseteq N(v^{-1})$. By the prefix property there are reduced expressions $u=s_1\cdots s_k$ and $v=s_1\cdots s_k s'_1\cdots s'_q$. By the prefix-root formula, $N(u^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le k\}$ and $N(v^{-1})=\{\rho(s_1\cdots s_{j-1})e_{s_j}:1\le j\le k+q\}$, so the first is contained in the second. The same formula gives $|N(w)|=\ell(w)$ and $|N(w^{-1})|=\ell(w)$ for every $w$. [F6, F14, given, algebra]

2.1 Antisymmetry and equal-length uniqueness: if $u\le_R v$ and $v\le_R u$ then $\ell(u)\le\ell(v)\le\ell(u)$, so $\ell(u)=\ell(v)$; then $\ell(u^{-1}v)=\ell(v)-\ell(u)=0$ by the length identity, so $u^{-1}v=1$ and $v=u$. In particular $u\le_R v$ together with $\ell(u)=\ell(v)$ forces $u=v$; the same argument in $\le_L$ gives antisymmetry there. Together with steps 1.1 and 1.2 this shows that $\le_R$ and $\le_L$ are partial orders with minimum $1$. [F1, F2, A1, F11, step 1.1, step 1.2, given, algebra]

2.2 The criterion, converse direction, by induction on $\ell(u)$: assume $N(u^{-1})\subseteq N(v^{-1})$; then $u\le_R v$. If $\ell(u)=0$ then $u=1$ and $1\le_R v$ by step 1.1. Otherwise choose a reduced expression $u=s t_2\cdots t_k$ with $k=\ell(u)\ge1$. By [F12], $su=t_2\cdots t_k$, so $\ell(su)\le k-1=\ell(u)-1$; by the length-change property [F4] this forces $\ell(su)=\ell(u)-1$, hence $s\in D_L(u)$ by [F8]. The root-length criterion applied to $u^{-1}$ and the definition of $N$ give $e_s\in N(u^{-1})\subseteq N(v^{-1})$, and the same criterion for $v^{-1}$ gives $s\in D_L(v)$. By the left-translation property [F15] it suffices to prove $su\le_R sv$; the induction hypothesis applies to the shorter element $su$ once $N((su)^{-1})\subseteq N((sv)^{-1})$ is shown. Now $(su)^{-1}=u^{-1}s$ and $(sv)^{-1}=v^{-1}s$. By [F6], $\ell((su)^{-1})=\ell(su)=\ell(u)-1<\ell(u^{-1})$; likewise $\ell((sv)^{-1})<\ell(v^{-1})$, so the descent case of the recursion [F5] gives $N(u^{-1}s)=s(N(u^{-1})\setminus\{e_s\})$ and $N(v^{-1}s)=s(N(v^{-1})\setminus\{e_s\})$. Since $e_s$ lies in both $N(u^{-1})$ and $N(v^{-1})$, the inclusion remains true after removing $e_s$, and applying the map $\rho(s)$ to both sets preserves inclusion; hence $N((su)^{-1})\subseteq N((sv)^{-1})$. Thus $su\le_R sv$ by induction and $u\le_R v$ by left translation. [F3, F4, F5, F6, F7, F8, F12, F13, F15, A1, step 1.1, step 1.5, given, algebra]

3.1 Cover characterization: $u\lessdot_R v$ if and only if $v=us$ for some $s\in S$ with $\ell(v)=\ell(u)+1$. For the forward direction assume $u\lessdot_R v$; then $u\le_R v$ with $u\ne v$, so $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$ and $x\ne1$. Write a reduced expression $x=s_1\cdots s_k$, $k=\ell(x)\ge1$, and put $u_i:=us_1\cdots s_i$ for $0\le i\le k$. For each $i$, subadditivity gives $\ell(u_i)\le\ell(u)+i$. Put $y_i:=s_{i+1}\cdots s_k$ (the empty word when $i=k$); its displayed word gives $\ell(y_i)\le k-i$, and $v=u_i y_i$. Hence $\ell(v)\le\ell(u_i)+\ell(y_i)\le\ell(u_i)+k-i$, so $\ell(u_i)\ge\ell(u)+i$ and therefore $\ell(u_i)=\ell(u)+i$. Since $\ell(v)=\ell(u)+k$ and $\ell(u_i)=\ell(u)+i$, subadditivity in $v=u_i y_i$ also gives $\ell(y_i)\ge k-i$; together with the displayed-word bound this yields $\ell(y_i)=k-i$ for every $i$. If $k\ge2$, then $u_1=us_1$ and $\ell(s_1)=1$ by [A1], so $u<_R u_1$. Since $v=u_1y_1$ and $\ell(y_1)=k-1$, one has $u_1\le_R v$; also $\ell(u_1)<\ell(v)$, giving $u<_R u_1<_R v$, contrary to the cover. Thus $k=1$, $v=us_1$ and $\ell(v)=\ell(u)+1$. For the converse assume $v=us$ and $\ell(v)=\ell(u)+1$; by [A1], $\ell(s)=1$, so $u\le_R v$. If $u\le_R w\le_R v$, the length identity [F2] gives $\ell(u)\le\ell(w)\le\ell(u)+1$. If $\ell(w)=\ell(u)$ then $w=u$ by step 2.1; if $\ell(w)=\ell(v)$ then $w=v$ by step 2.1. Hence no element lies strictly between $u$ and $v$, and $u\ne v$, so $u\lessdot_R v$. For the left-handed version, $u\lessdot_L v$ is equivalent under the inversion isomorphism [F1] to $u^{-1}\lessdot_R v^{-1}$; the right-handed result and length invariance [F6] give $v^{-1}=u^{-1}s$ with a one-length rise, hence $v=su$ with $\ell(v)=\ell(u)+1$, and conversely. [F1, F2, F3, F6, A1, step 2.1, given, algebra]

3.2 The left criterion and the embedding: by [F1], $u\le_L v\iff u^{-1}\le_R v^{-1}$, and applying steps 1.5 and 2.2 to the pair $(u^{-1},v^{-1})$ gives $u\le_L v\iff N(u)\subseteq N(v)$. Hence $w\mapsto N(w^{-1})$ preserves and reflects $\le_R$ and is injective, since $N(u^{-1})=N(v^{-1})$ yields $u\le_R v$ and $v\le_R u$, hence $u=v$ by antisymmetry; it is length-preserving by $|N(w^{-1})|=\ell(w)$. This completes clause (4). [F1, step 2.1, step 1.5, step 2.2, given, algebra]

4.1 Chains of covers: $u\le_R v$ if and only if there is a chain $u=u_0\lessdot_R u_1\lessdot_R\cdots\lessdot_R u_m=v$, and then $m=\ell(v)-\ell(u)$. If $u\le_R v$, put $x:=u^{-1}v$, so $\ell(x)=\ell(v)-\ell(u)$; choose a reduced expression $x=s_1\cdots s_m$ and set $u_i:=us_1\cdots s_i$. The estimates in step 3.1 give $\ell(u_i)=\ell(u)+i$ and $\ell(s_{i+1}\cdots s_m)=m-i$, so $u\le_R u_i\le_R v$ for every $i$. Since $u_{i+1}=u_i s_{i+1}$ and $\ell(u_{i+1})=\ell(u_i)+1$, each consecutive pair is a cover by step 3.1's converse, giving a chain of $m=\ell(v)-\ell(u)$ covers. Conversely, if $u=u_0\lessdot_R\cdots\lessdot_R u_m=v$, then repeated transitivity from step 1.2 gives $u\le_R v$, and each cover adds exactly one to the length by step 3.1's forward direction, so $\ell(v)=\ell(u)+m$ and $m=\ell(v)-\ell(u)$. For left order, apply the right-hand result to $u^{-1}\le_R v^{-1}$ and invert each element of the chain; inversion preserves covers by [F1] and lengths by [F6]. [F1, F2, F6, step 1.2, step 3.1, given, algebra]

5.1 Graded intervals: if $u\le_R v$, then $[u,v]_R\subseteq\{w:\ell(w)\le\ell(v)\}$ by the length identity, so $[u,v]_R$ is finite by step 1.4 and is a finite poset with least element $u$; its unique minimal element is $u$, because every $x\in[u,v]_R$ satisfies $u\le_R x$. The map $x\mapsto\ell(x)-\ell(u)$ takes values in $\mathbb N$ on $[u,v]_R$ and has value $0$ at $u$. If $x\lessdot y$ in the interval poset, then $x<_R y$ and no $z$ with $x<_R z<_R y$ lies in $[u,v]_R$; an intermediate $z$ in $W$ would satisfy $u\le_R x<_R z<_R y\le_R v$, hence lie in $[u,v]_R$, so $x\lessdot_R y$ in $W$ as well, and step 3.1's forward direction gives $\ell(y)=\ell(x)+1$. Thus $x\mapsto\ell(x)-\ell(u)$ is a rank function, so $[u,v]_R$ is graded. A maximal chain $u=x_0<\cdots<x_t=v$ in it consists of covers, so its ranks increase by one at each step from $0$ to $\ell(v)-\ell(u)$: it has exactly $\ell(v)-\ell(u)+1$ elements. Finally, for a reduced expression $u^{-1}v=s'_1\cdots s'_m$, the chain of step 4.1, $u\lessdot_R us'_1\lessdot_R\cdots\lessdot_R us'_1\cdots s'_m=v$, is a chain of covers in $W$ between elements of $[u,v]_R$, hence a maximal chain in $[u,v]_R$. For left order, inversion identifies $[u,v]_L$ with $[u^{-1},v^{-1}]_R$ and [F6] shows that the length shift is preserved; the same rank and maximal-chain conclusions follow. [F1, F2, F3, F6, F9, F10, A1, step 3.1, step 4.1, step 1.4, given, algebra]

6.1 The descent-root dictionary: for $w\in W$ and $s\in S$, $s\in D_L(w)$ means $\ell(sw)<\ell(w)$; since $\ell(sw)=\ell((sw)^{-1})=\ell(w^{-1}s)$ and [F6] gives $\ell(w^{-1})=\ell(w)$, the root-length criterion applied to $w^{-1}$ gives $s\in D_L(w)\iff\rho(w^{-1})e_s\in\Phi_-$, which by [F13] is equivalent to $e_s\in N(w^{-1})$. Similarly, $s\in D_R(w)$ means $\ell(ws)<\ell(w)$, which by the root-length criterion applied to $w$ is equivalent to $\rho(w)e_s\in\Phi_-$, that is to $e_s\in N(w)$. No Choice was used anywhere in this proof. [F6, F7, F8, F13, given, algebra] ∎
