---
id: thm-cg-fully-commutative-weak-intervals-are-distributive
kind: theorem
title: "The right weak order interval below a fully commutative element is the lattice of order ideals of its heap"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-cg-labeled-word-heap-and-fully-commutative-element, lem-cg-finite-poset-linear-extensions-and-connectivity, thm-cg-heaps-classify-commutation-classes, def-cg-left-right-weak-order-and-descents, lem-cg-weak-order-prefix-property-and-left-translation, lem-cg-weak-order-is-a-graded-partial-order, lem-order-ideals-form-a-distributive-lattice, def-lattice-distributive-lattice-and-order-ideal, def-hh-coxeter-matrix-word-group-and-length, def-cg-linear-extension-of-a-finite-poset]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Lemma 2.1 and Theorem 2.2 (a) if and only if (c), PDF pp. 7-8; the interval-translation Proposition 1.3 is used only through the prefix property of the in-run weak-order items"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3, PDF pp. 4-5 (linear extensions and words)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$, $W$, $\ell$ be as in [[def-hh-coxeter-matrix-word-group-and-length]], let $\le_R$ be the right weak order with intervals $[u,v]_R$ and covers $\lessdot_R$ ([[def-cg-left-right-weak-order-and-descents]], [[lem-cg-weak-order-is-a-graded-partial-order]]), and let fully commutative elements, reduced words and heaps be as in [[def-cg-labeled-word-heap-and-fully-commutative-element]] and [[thm-cg-heaps-classify-commutation-classes]]. Let $w\in W$ be fully commutative, let $s=(s_1,\dots,s_k)\in\mathcal R(w)$, and let $P:=P_s$ be the heap of $w$, with lattice of order ideals $J(P)$ ([[def-lattice-distributive-lattice-and-order-ideal]], [[lem-order-ideals-form-a-distributive-lattice]]).

**(1) The ideal of an element of the interval.** For $u\in S$ write $C_u=\{i:s_i=u\}$, a chain in $P$, with elements $u(1)\prec u(2)\prec\cdots\prec u(n_u)$, and for a word $s'$ let $\nu(u,s')$ be the number of occurrences of $u$ in $s'$. If $x\le_R w$ and $s'\in\mathcal R(x)$, then $\nu(u,s')\le n_u$ for all $u$, and $$I(s'):=\{u(1),\dots,u(\nu(u,s')):u\in S\}\subseteq P$$ is an order ideal of $P$; it does not depend on the choice of $s'\in\mathcal R(x)$. Writing $I(x)$ for this common ideal, one has $\ell(x)=|I(x)|$, $I(1)=\varnothing$ and $I(w)=P$.

**(2) Order isomorphism.** The map $x\mapsto I(x)$ is an order isomorphism from $[1,w]_R$ onto $J(P)$ ordered by inclusion.

**(3) Lattice structure.** Consequently $[1,w]_R$, as a subposet of $(W,\le_R)$, is a finite distributive lattice: for all $x,y\le_R w$ the meet $x\wedge y$ and the join $x\vee y$ exist in $[1,w]_R$ and satisfy $$I(x\wedge y)=I(x)\cap I(y),\qquad I(x\vee y)=I(x)\cup I(y);$$ the least element is $1$ and the greatest element is $w$.

**(4) Caveats.** This identifies the right weak order interval $[1,w]_R$ with $J(P)$, for a fully commutative $w$; no identification of the Bruhat order interval below $w$ with $J(P)$ is made, and no claim is made about the intervals of elements that are not fully commutative.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the presented group $W$ with length $\ell$, a fully commutative element $w\in W$, a reduced word $s=(s_1,\dots,s_k)\in\mathcal R(w)$ with heap $P=P_s$, and the right weak order $\le_R$.

[F1] The group $W$ is presented with relators $s^2$ and $(st)^{m(s,t)}$; $\mathcal R(x)$ is the set of reduced words of $x$, of common length $\ell(x)$, and concatenation of words represents the product of the represented elements ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] The right weak order is defined by $u\le_R v$ if and only if $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$; intervals are $[u,v]_R=\{z:u\le_R z\le_R v\}$, and $u\lessdot_R v$ means that $u<_R v$ with no element strictly between ([[def-cg-left-right-weak-order-and-descents]], clauses (1)-(2)).

[F3] For all $u,v\in W$ one has $u\le_R v\iff\ell(v)=\ell(u)+\ell(u^{-1}v)$ (length identity), and $u\le_R v$ if and only if some reduced expression of $v$ has a reduced expression of $u$ as its initial segment (prefix property) ([[lem-cg-weak-order-prefix-property-and-left-translation]], clauses (1)-(2)).

[F4] Covers in $\le_R$ are exactly the pairs $v=us$ with $s\in S$ and $\ell(v)=\ell(u)+1$, and every $u\le_R v$ is joined by a chain of covers $u=u_0\lessdot_R u_1\lessdot_R\cdots\lessdot_R u_r=v$ ([[lem-cg-weak-order-is-a-graded-partial-order]], clause (2)).

[F5] In the heap $P_s$, any two positions with equal or noncommuting labels are comparable by the defining relation, so each same-label set $C_u=\{i:s_i=u\}$ is a chain; an element $w$ is fully commutative when $\mathcal R(w)=C(s)$ for one (equivalently every) $s\in\mathcal R(w)$ ([[def-cg-labeled-word-heap-and-fully-commutative-element]], clauses (2), (6)).

[F6] For every word $q$ one has $L(P_q,q)=C(q)$, the set of labeled words of linear extensions of $P_q$ ([[thm-cg-heaps-classify-commutation-classes]], clause (1)).

[F7] Every finite poset $Q$ has a linear extension; for every order ideal $I$ of $Q$ and every linear extension of the induced poset on $I$, there is a linear extension of $Q$ whose first $|I|$ entries are exactly the elements of $I$. A linear extension is as in [[def-cg-linear-extension-of-a-finite-poset]] ([[lem-cg-finite-poset-linear-extensions-and-connectivity]], clause (2)).

[F8] An order ideal of a poset $P$ is a subset closed downward under $\preceq$, and $J(P)$ denotes the set of order ideals ordered by inclusion ([[def-lattice-distributive-lattice-and-order-ideal]]). Here an **order isomorphism** means an order-preserving bijection whose inverse is order-preserving.

[F9] For a finite poset $P$, $J(P)$ is a finite distributive lattice under inclusion, with meet intersection, join union, least element $\varnothing$ and greatest element $P$ ([[lem-order-ideals-form-a-distributive-lattice]]).

## Proof

**Given:** A fully commutative element $w\in W$, a reduced word $s\in\mathcal R(w)$ and its heap $P=P_s$.

**Proof technique:** direct.

1.1 Clause (1), construction of the ideal. Let $x\le_R w$, in the right weak order of [F2], and let $s'\in\mathcal R(x)$. By the length identity [F3](1), $\ell(w)=\ell(x)+\ell(x^{-1}w)$; fix a reduced word $u'$ of $x^{-1}w$. Then $s'u'$ represents $x\cdot x^{-1}w=w$ and has length $\ell(x)+\ell(x^{-1}w)=\ell(w)$, so $s'u'\in\mathcal R(w)$. Since $w$ is fully commutative, $\mathcal R(w)=C(s)=L(P,s)$ by [F5] and [F6], so $s'u'$ is the labeled word of a linear extension $\pi$ of $P$. In any linear extension the elements of the chain $C_u$ occur in increasing order $u(1)\prec\cdots\prec u(n_u)$, so the first $|s'|=\ell(x)$ letters of $s'u'$, namely the letters of $s'$, are exactly $u(1),\dots,u(\nu(u,s'))$ for each $u$. Hence $\nu(u,s')\le n_u$, and $I(s')$ is the set of the first $\ell(x)$ entries of $\pi$, an initial segment of a linear extension; a prefix of a linear extension is downward closed, so $I(s')$ is an order ideal of $P$. [given, F1, F2, F3, F5, F6, F8]

1.2 Clause (2), the heap of an ideal. Let $I\in J(P)$. By [F7], choose a linear extension $\pi$ of $P$ whose initial block $\pi_I=(a_1,\dots,a_m)$ lists exactly $I$, where $m=|I|$. Let $s_I$ be the word of labels on this block, let $x_I$ be its product in $W$, and define $\varphi:[m]\to I$ by $\varphi(j)=a_j$. This bijection preserves labels. For any strict relation $a\prec_P b$ with $a,b\in I$, choose a chain $a=z_0\prec z_1\prec\cdots\prec z_r=b$ of maximal length between $a$ and $b$ (such a chain exists because $P$ is finite). Every $z_i$ lies in $I$, since $z_i\preceq b$ and $b\in I$. Each consecutive pair is a cover in $P$; it must be a generating pair of the heap, because a generating path with an intermediate element would contradict the cover property. Since $\pi_I$ is a linear extension, each such pair occurs in the same order in $s_I$, and its labels are equal or noncommuting. Thus the corresponding positions are related in $P_{s_I}$, and transitivity shows that $a\prec_P b$ in $I$ implies $\varphi^{-1}(a)\prec_{P_{s_I}}\varphi^{-1}(b)$. [given, F5, F7]

2.1 Clause (1), well-definedness and basic properties. If $s''\in\mathcal R(x)$ is a second reduced word, then with the same suffix $u'$ the word $s''u'$ also has length $\ell(w)$ and represents $w$, so $s''u'\in\mathcal R(w)=L(P,s)$; a word in $L(P,s)$ is the labeled word of a linear extension of $P$, hence contains each $u\in S$ exactly $n_u$ times, and this holds for $s'u'$ as well. Subtracting the common multiplicity $\nu(u,u')$ of the suffix gives $\nu(u,s')=\nu(u,s'')$ for every $u$, so $I(x):=I(s')$ is well defined. Moreover $\ell(x)=|s'|=\sum_{u}\nu(u,s')=|I(x)|$ because the sets $\{u(1),\dots,u(\nu(u,s'))\}$ are disjoint; $I(1)=\varnothing$ because the empty word has $\nu(u,(\ ))=0$; and $I(w)=P$ because for $s'=s$ one has $\nu(u,s)=n_u$. [given, F1, F5, F6, step 1.1]

2.2 Conversely, each generating relation of $P_{s_I}$ joins positions with equal or noncommuting labels. Their corresponding elements of $I$ are comparable in $P$ by [F5], and the order is the one in $\pi_I$, so every generating relation of $P_{s_I}$ respects the induced order on $I$. Together with 1.2, this proves that $\varphi$ is a labeled poset isomorphism. If a different linear extension of $I$ is used, transport its listing through $\varphi^{-1}$ to a linear extension of $P_{s_I}$; the labels are unchanged, so its labeled word lies in $L(P_{s_I},s_I)$ and [F6] makes it commutation-equivalent to $s_I$, and [F1] says these interchanges preserve the product. Therefore $x_I$ depends only on $I$, and $\psi(I):=x_I$ is well defined. [given, F1, F5, F6, step 1.2]

2.3 Clause (2), $\psi$ is order-preserving. Let $I\subseteq J$ be order ideals of $P$. Apply [F7] twice: extend a linear extension of $I$ (with first $|I|$ entries $I$) to a linear extension of the induced poset on $J$, which therefore has first $|I|$ entries $I$ and first $|J|$ entries $J$, and extend that in turn to a linear extension $\pi$ of $P$; then the first $|I|$ entries of $\pi$ are $I$ and its first $|J|$ entries are $J$. The full labeled word of $\pi$ lies in $L(P,s)=C(s)=\mathcal R(w)$ by [F5] and [F6]. The word $s_I$ constructed in 1.2 is a prefix of the word $s_J$, and both are reduced: replacing either prefix by a shorter word for its product would shorten the full reduced word of $w$; by the prefix property [F3](2) applied to $s_I$ and $s_J$ we get $\psi(I)\le_R\psi(J)$. [given, F1, F3, F5, F6, F7, step 1.2]

3.1 Clause (2), monotonicity of $x\mapsto I(x)$. If $x\lessdot_R y$, then by [F4] $y=xs$ with $s\in S$ and $\ell(y)=\ell(x)+1$; for $s'\in\mathcal R(x)$ the word $s's$ represents $y$ and has length $\ell(x)+1=\ell(y)$, hence lies in $\mathcal R(y)$, and $\nu(u,s's)=\nu(u,s')+[u=s]\ge\nu(u,s')$ for all $u$. By the well-definedness 2.1 the ideals may be computed from these words, so $I(x)\subseteq I(y)$. For arbitrary $x\le_R y\le_R w$, [F4] joins $x$ to $y$ by a chain of covers and inclusion is transitive along that chain; hence $x\le_R y$ implies $I(x)\subseteq I(y)$. [given, F4, step 2.1]

3.2 The full labeled word $q$ of $\pi$ belongs to $L(P,s)$ by definition. By [F6] and full commutativity [F5], $L(P,s)=C(s)=\mathcal R(w)$, so $q$ represents $w$ and is reduced of length $k=\ell(w)$. Its prefix $s_I$ is also reduced, since a shorter expression for that prefix would shorten $q$ as an expression of $w$. The prefix property [F3](2) gives $\psi(I)=x_I\le_R w$. Conversely, for any $x\le_R w$, step 1.1 gives a reduced word of $x$ as the initial segment of a linear extension of $P$ with initial ideal $I(x)$; using that extension in the definition of $\psi$ gives $\psi(I(x))=x$. Finally, because $I$ is an order ideal and each $C_u$ is a chain, $I\cap C_u$ is an initial segment of $C_u$ with exactly $\nu(u,s_I)$ elements; hence $I(x_I)=I$. Thus $\psi:J(P)\to[1,w]_R$ is a two-sided inverse of $x\mapsto I(x)$. [given, F1, F3, F5, F6, F8, step 1.1, step 2.1, step 2.2]

4.1 Clauses (3) and (4). By steps 3.1 and 3.2, $x\mapsto I(x)$ is an order-preserving bijection with inverse $\psi$, and by step 2.3 the inverse is order-preserving; hence this is an order isomorphism $[1,w]_R\to J(P)$. For $x,y\le_R w$, put $m_0:=\psi(I(x)\cap I(y))$ and $j_0:=\psi(I(x)\cup I(y))$. Since $\psi$ preserves order and is inverse to $I$, $m_0\le_R x,y$ and $x,y\le_R j_0$. If $z\in[1,w]_R$ satisfies $z\le_R x,y$, then monotonicity of $I$ gives $I(z)\subseteq I(x)\cap I(y)$, so $z=\psi(I(z))\le_R m_0$; therefore $m_0=x\wedge y$. Dually, if $z\in[1,w]_R$ is a common upper bound, then $I(x)\cup I(y)\subseteq I(z)$, so $j_0\le_R z$ and $j_0=x\vee y$. Applying $I$ gives the displayed intersection and union formulas. By [F9], $J(P)$ is a finite distributive lattice with least element $\varnothing$ and greatest element $P$, so the order isomorphism transports this structure to $[1,w]_R$, whose least and greatest elements are $1$ and $w$. Clause (4) holds because the argument uses only the right weak order and its prefix property, and it assumes that $w$ is fully commutative; no Bruhat-interval or non-fully-commutative claim is made. [given, F9, step 3.1, step 3.2, step 2.3] ∎
