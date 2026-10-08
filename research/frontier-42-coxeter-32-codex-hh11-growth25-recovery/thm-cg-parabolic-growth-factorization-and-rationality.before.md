---
id: thm-cg-parabolic-growth-factorization-and-rationality
kind: theorem
title: "Finite descent parabolics, parabolic factorization, the Steinberg inclusion-exclusion identity, and rational growth"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 18
deps: [cor-cardinality-of-the-power-set, def-cg-length-series-descent-generating-polynomial, def-cg-parabolic-quotient-and-two-sided-minima, def-finite-sum-in-a-commutative-monoid, def-formal-power-series-and-coefficient-extraction, def-hh-coxeter-matrix-word-group-and-length, def-rational-formal-power-series-and-reduced-denominator, lem-cg-diagram-products-and-invariant-form-comparison, lem-cg-full-descent-element-characterizes-finite-type, lem-finite-sum-reindexing-and-fubini, thm-cg-finite-parabolic-longest-element-and-opposition, thm-formal-power-series-ring-and-polynomial-embedding, thm-formal-power-series-unit-criterion, thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-induction-principle, thm-product-rule, thm-sum-rule]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 7.1, printed pp. 201-204: Lemma 7.1.1 (reducible factorization), Lemma 7.1.2 ($W(q)=W^J(q)W_J(q)$), Proposition 7.1.3 (the descent-class inclusion-exclusion for $D^J_I$), Corollary 7.1.4 (the Steinberg identity, finite and infinite cases); Chapter 2.3, printed pp. 36-37: Proposition 2.3.1(ii) (an element with all left descents forces finiteness and equals $w_0$); Chapter 3.2, printed pp. 71-72: Lemma 3.2.3 ($J$ has an upper bound in weak order if and only if $W_J$ is finite)."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Lemma 4.7.2, printed p. 53: $W_{\\operatorname{In}(w)}$ is finite for every $w$ (the finite-descent-parabolic lemma); Chapter 17.1, printed pp. 316-318: Lemma 17.1.2 (parabolic factorization), Lemmas 17.1.3-17.1.4 (Mobius inversion and the descent-class formula), Corollary 17.1.5 (the two cases of the Steinberg identity), Corollary 17.1.6 (rationality by induction on $\\operatorname{Card}(S)$)."
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite and length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), with $W_I$, $D_L$, $D_R$ as in [[def-cg-parabolic-quotient-and-two-sided-minima]] and the series $P_A$, $D^J_I$ of [[def-cg-length-series-descent-generating-polynomial]]. Put
$$W^J:=\{w\in W:\ell(ws)>\ell(w)\text{ for all }s\in J\},\qquad {}^JW:=\{w\in W:\ell(sw)>\ell(w)\text{ for all }s\in J\}.$$
Then:

**(1) Finite descent parabolics and the finite/infinite dichotomy.** If $J\subseteq D_L(w)$ for some $w\in W$ (equivalently, if $J\subseteq D_R(w)$ for some $w$), then $W_J$ is finite. In particular $W_{D_L(w)}$ and $W_{D_R(w)}$ are finite for every $w\in W$. Conversely, if $W_J$ is finite with longest element $w_0(J)$, then $D_L(w_0(J))=D_R(w_0(J))=J$. Consequently $W$ is finite if and only if some $x\in W$ satisfies $D_L(x)=S$, if and only if some $x$ satisfies $D_R(x)=S$; and if $W$ is infinite then no element has all descents. If $W$ is finite, then $D^S_S(t)=t^{\ell(w_0)}$, while if $W$ is infinite then $D^S_S(t)=0$.

**(2) Parabolic factorization.** For every $J\subseteq S$ the multiplication maps $W^J\times W_J\to W$ and $W_J\times{}^JW\to W$ are bijections and $\ell$ is additive along them; consequently
$$P_W=P_{W^J}\,P_{W_J}=P_{{}^JW}\,P_{W_J}$$
in $\mathbb Z\llbracket t\rrbracket$. If the diagram of $(W,S)$ is disconnected with components on the nonempty pairwise disjoint sets $S_1,\dots,S_k$, then $W\cong W_{S_1}\times\cdots\times W_{S_k}$, $\ell(w_1\cdots w_k)=\sum_i\ell(w_i)$, and $P_W=\prod_iP_{W_{S_i}}$. When $S=\emptyset$, the presentation gives $W=\{1\}$ and this product over no components is $1$.

**(3) Descent inclusion-exclusion.** For all $I\subseteq J\subseteq S$,
$$D^J_I(t)=\sum_{J\setminus I\subseteq K\subseteq J}(-1)^{|J\setminus K|}P_{W^{S\setminus K}}(t),\qquad\text{where } W^{S\setminus K}=\{w\in W:D_R(w)\subseteq K\}.$$

**(4) Steinberg identity.** With formal inverses $1/P_{W_K}(t)\in\mathbb Z\llbracket t\rrbracket$ ([[thm-formal-power-series-unit-criterion]]), valid because $P_{W_K}(0)=1$,
$$\sum_{K\subseteq S}\frac{(-1)^{|K|}}{P_{W_K}(t)}=\begin{cases}\dfrac{t^{\ell(w_0)}}{P_W(t)},&W\text{ finite},\\[2mm] 0,&W\text{ infinite},\end{cases}$$
as an identity in $\mathbb Z\llbracket t\rrbracket$. If $W$ is finite, then $P_W$ is a polynomial and $t^{\ell(w_0)}P_W(t^{-1})=P_W(t)$ rewrites the identity, in the rational function field $\mathbb Q(t)$, as
$$\frac1{P_W(t^{-1})}=\sum_{K\subseteq S}\frac{(-1)^{|K|}}{P_{W_K}(t)}.$$

**(5) Rationality.** Every $P_{W_K}$ $(K\subseteq S)$ is a rational formal power series ([[def-rational-formal-power-series-and-reduced-denominator]]), by induction on $|S|$ using proper parabolics as the recursive inputs. For $S\ne\emptyset$, (4) yields the recursions
$$\frac1{P_W(t)}=(-1)^{|S|+1}\sum_{K\ne S}\frac{(-1)^{|K|}}{P_{W_K}(t)}\ \ (W\text{ infinite}),\qquad P_W(t)=\frac{t^{\ell(w_0)}-(-1)^{|S|}}{\sum_{K\ne S}(-1)^{|K|}/P_{W_K}(t)}\ \ (W\text{ finite}).$$
The denominator in the finite recursion has nonzero constant term. If $S=\emptyset$, then $W=\{1\}$ and $P_W=1$, so no recursion with an empty denominator is asserted. Hence $P_W\in\mathbb Q(t)$: the growth series of every finite-rank Coxeter system is rational. No choice principle is used.

## Facts & Assumptions

**Given:** A Coxeter system $(W,S)$ with $S$ finite and length function $\ell$, its standard parabolics $W_J=\langle s:s\in J\rangle$, the descent sets $D_L,D_R$, the quotient sets $W^J,{}^JW$, and the series $P_A$, $D^J_I$ of [[def-cg-length-series-descent-generating-polynomial]].

[F1] $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$ for $w\in W$, and $\ell(sw)-\ell(w),\ \ell(ws)-\ell(w)\in\{\pm1\}$ for all $s\in S$ ([[def-cg-parabolic-quotient-and-two-sided-minima]] (2), [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1)). Reversing a word for $w$ gives a word of the same length for $w^{-1}$, so $\ell(w^{-1})=\ell(w)$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] For every $J\subseteq S$ and every $w\in W$ there is a unique pair $u\in W_J$, $d\in{}^JW$ with $w=ud$ and $\ell(w)=\ell(u)+\ell(d)$, and then $\ell(ud')=\ell(u)+\ell(d')$ for all $u\in W_J$; likewise a unique pair $d\in W^J$, $v\in W_J$ with $w=dv$ and $\ell(w)=\ell(d)+\ell(v)$, and then $\ell(dv')=\ell(d)+\ell(v')$ for all $v'\in W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3)).

[F3] If $x\in W_J$ satisfies $\ell(sx)<\ell(x)$ for every $s\in J$, then $W_J$ is finite and $x=w_0(J)$ is its longest element ([[lem-cg-full-descent-element-characterizes-finite-type]] (2)).

[F4] If $W_J$ is finite, its longest element $w_0(J)$ is unique and satisfies $w_0(J)^2=1$, $\ell(w_0(J)w)=\ell(w_0(J))-\ell(w)$ and $\ell(ww_0(J))=\ell(w_0(J))-\ell(w)$ for all $w\in W_J$, and $w_0(J)Jw_0(J)^{-1}=J$; if $W$ is finite then $w_0=w_0(S)$ satisfies $\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w\in W$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(iii),(2)).

[F5] $W_J=\{w\in W:S(w)\subseteq J\}$ for the support $S(w)$ of any reduced expression of $w$, $W_J\cap S=J$, and $(W_J,J)$ is a Coxeter system whose intrinsic length function is the restriction of $\ell$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1),(2)).

[F6] If the diagram of $(W,S)$ is disconnected with components on the nonempty pairwise disjoint sets $S_1,\dots,S_k$, then $W\cong W_{S_1}\times\cdots\times W_{S_k}$ and $\ell(w_1\cdots w_k)=\sum_i\ell(w_i)$ for all $w_i\in W_{S_i}$ ([[lem-cg-diagram-products-and-invariant-form-comparison]] (1)).

[F7] For every $A\subseteq W$, each length fiber is finite and $P_A=\sum_{w\in A}t^{\ell(w)}$ is a well-defined element of $\mathbb Z\llbracket t\rrbracket$, with $P_A(0)=1$ if $1\in A$ and $P_A(0)=0$ otherwise ([[def-cg-length-series-descent-generating-polynomial]] (1)).

[F8] The coefficientwise sum and Cauchy product make $\mathbb Z\llbracket t\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[F9] A formal series is a unit if and only if its constant coefficient is a unit; in particular every $P_{W_K}$ is a unit because $P_{W_K}(0)=1$ ([[thm-formal-power-series-unit-criterion]]).

[F10] In the additive commutative monoid of $\mathbb Z\llbracket t\rrbracket$, finite sums over finite sets are independent of enumeration, invariant under bijective reindexing and split over finite disjoint unions ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[F11] Since $S$ is finite, its power set $\mathcal P(S)$ is finite ([[cor-cardinality-of-the-power-set]]).

[F12] For a field $K$, a series $F\in K\llbracket t\rrbracket$ is rational when $F=P/Q$ for polynomials $P,Q\in K[t]$ with $Q(0)$ a unit of $K$; then $F(0)=P(0)Q(0)^{-1}$ ([[def-rational-formal-power-series-and-reduced-denominator]]).

[F13] If $w=s_1\cdots s_k$ is a reduced expression and $s\in S$ satisfies $\ell(sw)=k-1$, then $sw=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$; if instead $\ell(ws)=k-1$ then $ws=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (2)).

[F14] Induction on a natural number is valid ([[thm-induction-principle]]).

[F15] A finite product of finite sets is finite with cardinality the product of their cardinalities, and a finite disjoint union of finite sets is finite with cardinality the sum of their cardinalities ([[thm-product-rule]], [[thm-sum-rule]]).

## Proof

**Proof technique:** direct.

1.1 Let $J\subseteq S$ and $w\in W$ with $J\subseteq D_R(w)$. Write $w=dv$ with $d\in W^J$, $v\in W_J$ as in [F2], so $\ell(ws)=\ell(d)+\ell(vs)$ for every $s\in J$; since $\ell(ws)<\ell(w)=\ell(d)+\ell(v)$ by [F1], we get $\ell(vs)<\ell(v)$ for all $s\in J$. Now $D_L(x)=D_R(x^{-1})$ for every $x\in W$, because $\ell(x^{-1})=\ell(x)$ and $(xs)^{-1}=sx^{-1}$ turn $\ell(xs)<\ell(x)$ into $\ell(sx^{-1})<\ell(x^{-1})$; hence $D_L(v^{-1})=D_R(v)\supseteq J$, and [F3] applied to $v^{-1}\in W_J$ gives that $W_J$ is finite and $v^{-1}=w_0(J)$; since $w_0(J)^2=1$ by [F4], $v=w_0(J)$. Symmetrically, if $J\subseteq D_L(w)$, write $w=ud$ with $u\in W_J$, $d\in{}^JW$ as in [F2]; then $sw=(su)d$ for $s\in J$, so $\ell(sw)=\ell(su)+\ell(d)<\ell(u)+\ell(d)=\ell(w)$ gives $\ell(su)<\ell(u)$ for all $s\in J$, and [F3] applied to $u$ shows that $W_J$ is finite. In particular $W_{D_L(w)}$ and $W_{D_R(w)}$ are finite for every $w$, and taking $J=S$ shows that if some $x$ has $D_L(x)=S$ or $D_R(x)=S$ then $W=W_S$ is finite. [F1, F2, F3, F4]

1.2 Let $W_J$ be finite with longest element $w_0(J)$ as in [F4]. For $s\in J$ the element $s$ lies in $W_J$, so $\ell(sw_0(J))=\ell(w_0(J))-\ell(s)=\ell(w_0(J))-1<\ell(w_0(J))$ and likewise $\ell(w_0(J)s)<\ell(w_0(J))$: thus $J\subseteq D_L(w_0(J))\cap D_R(w_0(J))$. Conversely let $s\in S\setminus J$ and suppose $\ell(sw_0(J))<\ell(w_0(J))$. Fix a reduced expression $w_0(J)=s_1\cdots s_k$ with all $s_i\in J$ (possible by [F5], since $W_J=\langle J\rangle$); by [F13] $sw_0(J)=s_1\cdots\widehat{s_i}\cdots s_k$ is a product of elements of $J$, hence lies in $W_J$, so $s=w_0(J)\cdot(sw_0(J))^{-1}\in W_J$ and therefore $s\in W_J\cap S=J$ by [F5], a contradiction. Since $\ell(sw_0(J))-\ell(w_0(J))\in\{\pm1\}$ by [F1], it follows that $\ell(sw_0(J))>\ell(w_0(J))$, i.e. $s\notin D_L(w_0(J))$. The right-handed version uses the right form of [F13] with the same computation; hence $D_L(w_0(J))=D_R(w_0(J))=J$. In particular, if $W$ is finite then $D_L(w_0)=D_R(w_0)=S$ for $w_0=w_0(S)$. [F1, F4, F5, F13]

1.3 Fix $J\subseteq S$. By [F2] the maps $W^J\times W_J\to W$, $(d,v)\mapsto dv$, and $W_J\times{}^JW\to W$, $(u,d)\mapsto ud$, are bijections along which $\ell$ is additive. For each $n\in\mathbb N$, the map $(d,v)\mapsto dv$ restricts to a bijection from the finite disjoint union $\bigsqcup_{i=0}^{n}\{d\in W^J:\ell(d)=i\}\times\{v\in W_J:\ell(v)=n-i\}$ onto $\{w\in W:\ell(w)=n\}$; finiteness follows from [F7, F15]. Its cardinality is exactly the Cauchy-product coefficient $[t^n](P_{W^J}P_{W_J})$, so coefficientwise equality gives $P_W=P_{W^J}P_{W_J}$. The same argument with the factorization $w=ud$ gives $P_W=P_{{}^JW}P_{W_J}$. If $S=\emptyset$, then $W=\{1\}$ and both series and the empty product are $1$. Otherwise, in the disconnected case [F6] gives an isomorphism $W\to W_{S_1}\times\cdots\times W_{S_k}$ carrying $(w_1,\dots,w_k)$ to $w_1\cdots w_k$ with additive length. Iterating the same coefficient argument over the finite set of components gives $P_W=\prod_iP_{W_{S_i}}$. [F2, F6, F7, F8, F15]

1.4 Fix $I\subseteq J\subseteq S$ and for $L\subseteq S$ put $E_L:=\{w\in W:D_R(w)=L\}$, a set partition of $W$ indexed by the finite power set $\mathcal P(S)$ by [F11], so that $P_{W^{S\setminus K}}=\sum_{L\subseteq K}P_{E_L}$ for every $K\subseteq S$ by [F7] and the definition of $W^{S\setminus K}$ in [F1]'s notation, while $D^J_I=\sum_{I\subseteq L\subseteq J}P_{E_L}$. Substituting the first display into the sum of the statement gives $\sum_{J\setminus I\subseteq K\subseteq J}(-1)^{|J\setminus K|}\sum_{L\subseteq K}P_{E_L}=\sum_{L\subseteq J}P_{E_L}\,c(L)$ with $c(L):=\sum_{K:\,(J\setminus I)\cup L\subseteq K\subseteq J}(-1)^{|J\setminus K|}$, a finite interchange licensed by [F8, F10]. Writing $K=J\setminus N$ with $N\subseteq J$, the condition $K\supseteq(J\setminus I)\cup L$ becomes $N\subseteq M:=J\setminus((J\setminus I)\cup L)$ and $|J\setminus K|=|N|$, so $c(L)=\sum_{N\subseteq M}(-1)^{|N|}$; when $M\ne\emptyset$ fix $a\in M$ and the map $N\mapsto N\triangle\{a\}$ is a fixed-point-free involution of the subsets of $M$ that negates $(-1)^{|N|}$, so $c(L)=0$, and when $M=\emptyset$ the sum is the single term $1$. Now $M=\emptyset$ means $(J\setminus I)\cup L=J$, and since $L\subseteq J$ this holds exactly when $I\subseteq L$: each $x\in I$ lies in $J=(J\setminus I)\cup L$ but not in $J\setminus I$, hence in $L$, while $I\subseteq L$ gives $(J\setminus I)\cup L\supseteq(J\setminus I)\cup I=J$. Together with $L\subseteq J$ this is exactly $I\subseteq L\subseteq J$, so the whole sum equals $\sum_{I\subseteq L\subseteq J}P_{E_L}=D^J_I$, which is the asserted identity. [F1, F7, F8, F10, F11, algebra]

2.1 By step 1.2, if $W$ is finite then some element (namely $w_0$) has all left descents and all right descents; by step 1.1, if some element has all descents then $W$ is finite. Hence $W$ is finite if and only if some $x$ satisfies $D_L(x)=S$, if and only if some $x$ satisfies $D_R(x)=S$; so if $W$ is infinite then no element has all descents. Now $D^S_S(t)=\sum_{\{w:D_R(w)=S\}}t^{\ell(w)}$. If $W$ is infinite the index set is empty, so $D^S_S=0$. If $W$ is finite and $D_R(w)=S$, apply the right-coset argument of step 1.1 with $J=S$: the factorization $w=dv$ has $d\in W^S$ of minimal length in $wW_S=W$, so $d=1$ and $v=w$, and the argument yields $v^{-1}=w_0$, so $w=v=w_0$; conversely $D_R(w_0)=S$ by step 1.2. Hence $D^S_S(t)=t^{\ell(w_0)}$ in the finite case. [step 1.1, step 1.2, F4, F7]

3.1 Take $I=J=S$ in step 1.4; since $S\setminus S=\emptyset$, this gives $D^S_S(t)=\sum_{K\subseteq S}(-1)^{|S\setminus K|}P_{W^{S\setminus K}}(t)=\sum_{K\subseteq S}(-1)^{|K|}P_{W^K}(t)$ after the substitution $K\mapsto S\setminus K$. By step 1.3 $P_W=P_{W^K}P_{W_K}$ for every $K\subseteq S$, and $P_{W_K}(0)=1$ because $W_K$ contains the identity, so [F7, F9] gives $P_{W^K}=P_W/P_{W_K}$ in $\mathbb Z\llbracket t\rrbracket$. Substituting and dividing the resulting identity by the unit $P_W$ yields $\sum_{K\subseteq S}\frac{(-1)^{|K|}}{P_{W_K}(t)}=\frac{D^S_S(t)}{P_W(t)}$, and step 2.1 evaluates the right side as $t^{\ell(w_0)}/P_W(t)$ when $W$ is finite and as $0$ when $W$ is infinite, which is the asserted two-case identity. In the finite case, $w\mapsto w_0w$ is a bijection of $W$ with $\ell(w_0w)=\ell(w_0)-\ell(w)$ by [F4], so summing over $w$ gives $P_W(t)=\sum_{w}t^{\ell(w_0)-\ell(w)}=t^{N}P_W(t^{-1})$ for $N=\ell(w_0)$, i.e. $t^{N}P_W(t^{-1})=P_W(t)$ as polynomials; hence $t^{N}/P_W(t)=1/P_W(t^{-1})$ as rational functions and the identity rewrites as $1/P_W(t^{-1})=\sum_{K\subseteq S}(-1)^{|K|}/P_{W_K}(t)$. [step 1.3, step 1.4, step 2.1, F4, F7, F8, F9, F10, F11, algebra]

4.1 By [F14], prove by induction on $n\in\mathbb N$ that every Coxeter system of rank at most $n$ has rational growth. For $n=0$, $S=\emptyset$, $W=\{1\}$ and $P_W=1$, rational with denominator $1$. Assume the assertion through rank $n$ and consider a system with $|S|=n+1$. Every $P_{W_K}$ with $K\subsetneq S$ is the series of the Coxeter system $(W_K,K)$, whose intrinsic length is $\ell|_{W_K}$ by [F5]; since $|K|\le n$, it is rational by the induction hypothesis. In the infinite case step 3.1 gives $\frac1{P_W}=(-1)^{|S|+1}\sum_{K\ne S}\frac{(-1)^{|K|}}{P_{W_K}}$; a finite sum of rational series is rational, since each term $R_i$ has a presentation $U_i/V_i$ with $U_i(0),V_i(0)\ne0$ (its constant term is $\pm1$), and then $\sum_iR_i=\bigl(\sum_iU_i\prod_{j\ne i}V_j\bigr)/\prod_jV_j$ has denominator with nonzero constant term. Also $1/P_{W_K}=V_K/U_K$ is rational if $P_{W_K}=U_K/V_K$, since $U_K(0)\ne0$; the resulting series $R=1/P_W$ has $R(0)=1$, so if $R=U/V$ then $U(0)=V(0)\ne0$ and $P_W=V/U$ is rational as well. In the finite case step 3.1 gives $P_W\cdot D=t^{N}-(-1)^{|S|}$ with $D:=\sum_{K\ne S}(-1)^{|K|}/P_{W_K}$, a rational series with $D(0)=\sum_{K\ne S}(-1)^{|K|}=-(-1)^{|S|}\ne0$ because each $1/P_{W_K}$ has constant term $1$; writing $D=V/U$ with $U(0),V(0)\ne0$ gives $P_W=(t^{N}-(-1)^{|S|})U/V$ with $V(0)=D(0)U(0)\ne0$, so $P_W$ is rational by [F12]. This proves the induction step. No choice is used: the induction is on natural numbers, and every specific element invoked is determined by uniqueness (the longest elements by [F4], the coset representatives by [F2]). [step 3.1, F2, F4, F5, F7, F8, F9, F10, F11, F12, F14, algebra] ∎
