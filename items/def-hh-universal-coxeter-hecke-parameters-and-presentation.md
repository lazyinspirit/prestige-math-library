---
id: def-hh-universal-coxeter-hecke-parameters-and-presentation
kind: definition
title: "Universal parameters, the generic Coxeter Hecke algebra and generator conjugacy"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-coxeter-matrix-word-group-and-length, lem-hh-free-associative-ring-and-relations-descent, lem-hh-finite-polynomial-and-localization-constructions, def-algebra-over-a-commutative-ring, def-group-homomorphism, def-conjugacy-class-and-centralizer, thm-int-comm-ring]
justified_by: [lem-hh-reduced-word-independence-and-length-multiplication, thm-hh-generic-coxeter-hecke-standard-basis]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Sections 3.1-3.2, PDF p. 8: weight functions L, the constraint L(s)=L(s') for finite odd m(s,s'), the algebra H with relations (a)-(b), the reduced products T_w, the length-multiplication rules and the spanning of {T_w}"
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL course notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed/PDF pp. 6-7: parameter functions pi: W_1 -> R^x, their determination by the values pi(s) subject to pi(s)=pi(t) for conjugate s,t, and the multiplication rule T_sT_w = T_sw / (pi(s)T_sw + (pi(s)-1)T_w)"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), complete book PDF"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 6.1 'Review of background material', printed pp. 174-175 (PDF pp. 182-183): the Hecke algebra over Z[q^{1/2},q^{-1/2}] and the multiplication rule T_sT_w = qT_sw + (q-1)T_w for sw < w"
verification:
  precheck: pass
---

## Definition

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group and $\ell$ its length function ([[def-hh-coxeter-matrix-word-group-and-length]]). Write $s\sim t$ when there exist $s=s_0,s_1,\dots,s_k=t$ in $S$ with $m(s_i,s_{i+1})$ odd for every $i<k$; this is the connected-component relation of the graph on $S$ whose edges are the pairs with odd $m$, and it is an equivalence relation (1.1). Let $[s]$ denote the class of $s$ and let $c$ be the number of classes.

**Coefficient ring.** Put $R:=\mathbb Z[v_1^{\pm1},\dots,v_c^{\pm1}]=\Lambda_{\mathbb Z,c}$, the Laurent polynomial ring in $c$ variables ([[lem-hh-finite-polynomial-and-localization-constructions]], part 2): a commutative ring in which every $v_i$ is a unit. Identify the classes with $\{1,\dots,c\}$ and put $v_s:=v_{[s]}\in R^\times$ for $s\in S$.

**The generic Hecke algebra.** Let $F:=R\langle T_s:s\in S\rangle$ be the free associative $R$-algebra on $S$ and let $I\subseteq F$ be the two-sided ideal generated ([[lem-hh-free-associative-ring-and-relations-descent]], part 2) by the **quadratic relations**
$$(T_s-v_s)(T_s+v_s^{-1})\qquad(s\in S)$$
and the **braid relations**
$$T_sT_tT_s\cdots=T_tT_sT_t\cdots\qquad(s\ne t,\ m(s,t)<\infty),$$
both alternating products having $m(s,t)$ factors. Define $H:=H(W):=F/I$ and write $T_s$ for the image of the generator $T_s$. Then $H$ is a unital associative $R$-algebra ([[def-algebra-over-a-commutative-ring]]) with the following **universal property**: for every unital associative $R$-algebra $A$ and every family $(t_s)_{s\in S}$ in $A$ satisfying the same two families of relations, there is a unique unital $R$-algebra homomorphism $H\to A$ with $T_s\mapsto t_s$.

**Universal parameters.** For every commutative ring $A$ and units $u_1,\dots,u_c\in A^\times$ the assignment $v_i\mapsto u_i$ extends uniquely to a ring homomorphism $R\to A$ ([[lem-hh-finite-polynomial-and-localization-constructions]], part 2); via the universal property of $H$ this makes $R$ the universal coefficient ring for a unit-valued parameter that is constant on each class $[s]$.

**Generator conjugacy.** Two simple generators $s,t\in S$ are conjugate in $W$ if and only if $s\sim t$.

**Conventions and scope.** (i) $m(s,t)=\infty$ imposes no relation between $T_s$ and $T_t$; if $c=1$ we write $v$ for $v_1$. (ii) The quadratic relation is equivalent to $T_s^2-(v_s-v_s^{-1})T_s-1=0$, equivalently $(T_s+v_s^{-1})(T_s-v_s)=0$, and it depends on $v_s$ only through the difference $v_s-v_s^{-1}$ (1.6). (iii) No freeness, torsion-freeness, specialisation or basis property of $H$ is asserted here: the elements $T_w$ are introduced in [[lem-hh-reduced-word-independence-and-length-multiplication]], their independence is proved in [[thm-hh-generic-coxeter-hecke-standard-basis]], and the invertibility and bar properties are recorded in [[lem-hh-hecke-anti-involution-bar-and-normalization]]; consumers may not use those features before those items.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the presented group $W$ with its length function $\ell$, and the odd-edge relation $\sim$ on $S$.

[F1] The free associative $R$-algebra $F=R\langle T_s:s\in S\rangle$ on a set $S$ exists over any commutative ring $R$, with product concatenating words and central coefficients; its two-sided ideals are the finite sums $\sum_ia_ie_ib_i$ over generators, and a homomorphism out of $F$ that kills the generators of an ideal factors uniquely through the quotient. ([[lem-hh-free-associative-ring-and-relations-descent]])

[F2] The integers form a commutative ring ([[thm-int-comm-ring]]). The Laurent polynomial ring $\Lambda_{R,c}$ is a commutative $R$-algebra with monomials $x^\alpha$ ($\alpha\in\mathbb Z^c$) as an $R$-basis, in which each $x_i$ is a unit, and for every commutative $R$-algebra $A$ and units $u_1,\dots,u_c\in A^\times$ there is a unique $R$-algebra homomorphism $\Lambda_{R,c}\to A$ with $x_i\mapsto u_i$. ([[lem-hh-finite-polynomial-and-localization-constructions]])

[F3] An $R$-algebra is a unital ring $A$ with a unital ring homomorphism $R\to A$ whose image is central, and an $R$-algebra homomorphism is a unital ring homomorphism compatible with these structure maps. ([[def-algebra-over-a-commutative-ring]])

[F4] $W$ is the quotient of the free group on $S$ by the normal closure of the relators $s^2$ ($s\in S$) and $(st)^{m(s,t)}$ ($s\ne t$, $m(s,t)<\infty$); consequently a map from the generator set $S$ into a group that kills every listed relator extends uniquely to a group homomorphism $W\to G$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F5] Two elements $g,h$ of a group are conjugate when $g=xhx^{-1}$ for some $x$ in the group, and conjugacy is an equivalence relation. ([[def-conjugacy-class-and-centralizer]])

[F6] A group homomorphism is a map $f$ with $f(xy)=f(x)f(y)$; such an $f$ satisfies $f(e)=e'$ and $f(x^{-1})=f(x)^{-1}$, hence $f(xhx^{-1})=f(x)f(h)f(x)^{-1}$ already lies in the image. ([[def-group-homomorphism]])

## Verification

**Proof technique:** direct.

1.1 The relation is reflexive (the one-term chain with $k=0$), symmetric (a chain $s=s_0,\dots,s_k=t$ with all $m(s_i,s_{i+1})$ odd reverses to a chain from $t$ to $s$, because $m$ is symmetric) and transitive (two chains are concatenated at their common endpoint). It is therefore the connected-component relation of the graph on $S$ whose edges are the unordered pairs $\{s,t\}$, $s\ne t$, with $m(s,t)$ odd; its classes are the components, so $0\le c\le|S|<\infty$, with $c=0$ exactly when $S=\varnothing$ (then $W$ is trivial and $R=\mathbb Z$). [given]

1.2 Since $\mathbb Z$ is a commutative ring, applying the Laurent construction of [F2] gives that $R$ is a commutative ring in which each $v_i$ is a unit; $F$ is a unital associative $R$-algebra with central $R$-image and $I$ is the two-sided ideal generated by the displayed finitely many relations ([F1], [F3]). The quotient $H=F/I$ is a unital associative $R$-algebra ([F1], [F3]); an $R$-algebra homomorphism $F\to A$ is exactly an assignment of the generators $T_s$, and by the quotient universal property ([F1]) it factors uniquely through $H$ precisely when it kills the relations, which is the stated universal property. [F1, F2, F3]

1.3 Suppose $s\ne t$ and $m:=m(s,t)$ is finite odd, say $m=2k+1$ with $k\ge1$. In the free group on $S$ one has $(st)^{2k+1}=(st)^ks\cdot t(st)^k$, and the two words $t(st)^k$ and $(ts)^kt$ coincide. Since $s^2=t^2=1$ and $(st)^m=1$ are relators of $W$ ([F4]), the product $(st)^ks\cdot t(st)^k=(st)^{2k+1}$ is trivial in $W$, so $(st)^ks=(t(st)^k)^{-1}=(st)^{-k}t=(ts)^kt=t(st)^k$ there; thus the elements $x:=(st)^k$ and $t$ satisfy $xs=tx$ in $W$, so $xsx^{-1}=t$: the generators joined by an odd edge are conjugate ([F5]). [F4, F5, algebra]

1.4 Fix a class $C$ of $\sim$ and define $\varphi_C:S\to\{\pm1\}$ by $\varphi_C(u)=-1$ for $u\in C$ and $\varphi_C(u)=1$ for $u\in S\setminus C$. Then $\varphi_C(u)^2=1$, and for $u\ne v$ with $m(u,v)<\infty$ one has $\varphi_C\bigl((uv)^{m(u,v)}\bigr)=(-1)^{m(u,v)(\delta_u+\delta_v)}$, where $\delta_w=1$ for $w\in C$ and $0$ otherwise: if exactly one of $u,v$ lies in $C$ then $m(u,v)$ is even, because odd $m(u,v)$ would make $u$ and $v$ odd-connected and hence place them in the same class $C$, a contradiction. So every relator of the presentation ([F4]) is killed and $\varphi_C$ extends to a group homomorphism $W\to\{\pm1\}$ ([F4]). If $s=xtx^{-1}$ in $W$, then $\varphi_C(s)=\varphi_C(x)\varphi_C(t)\varphi_C(x)^{-1}=\varphi_C(t)$ because $\{\pm1\}$ is abelian ([F6]); hence conjugate generators lie in one class: for $s\nsim t$, the class $C=[s]$ gives $\varphi_C(s)=-1\ne1=\varphi_C(t)$, so $s$ and $t$ are not conjugate. [F4, F6, algebra]

1.5 By the universal property of the Laurent ring ([F2]) the assignment $v_i\mapsto u_i$ extends uniquely to a ring homomorphism $R\to A$ for every commutative ring $A$ and units $u_1,\dots,u_c\in A^\times$; combining it with the universal property of $H$ established in 1.2 ([F3], [F1]) exhibits $R$ as the universal coefficient ring for a unit-valued parameter that is constant on each class. [F1, F2, F3, 1.2]

1.6 Expanding in the free algebra, using that the coefficients $v_s$ and $v_s^{-1}$ are central ([F1]), gives $(T_s-v_s)(T_s+v_s^{-1})=T_s^2-(v_s-v_s^{-1})T_s-1$, and the reverse product $(T_s+v_s^{-1})(T_s-v_s)$ is the same element; replacing $v_s$ by the unit $-v_s^{-1}$ leaves $v_s-v_s^{-1}$ unchanged, so the quadratic relation depends on $v_s$ only through that difference. [F1, F2, algebra]

2.1 By 1.3 an odd edge joins conjugate generators, so transitivity of conjugacy ([F5]) gives that $s\sim t$ implies conjugacy of $s$ and $t$ in $W$; by 1.4 a pair with $s\nsim t$ is separated by the homomorphism $\varphi_{[s]}$, so it is not conjugate. This proves the generator-conjugacy criterion, and with 1.1, 1.2, 1.5, 1.6 all the assertions of the definition are established; every construction and every separating homomorphism above is explicit, so no choice is used. [F5, step 1.1, step 1.3, step 1.4] ∎
