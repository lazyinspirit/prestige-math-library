---
id: thm-principal-bundles-are-classified-by-maps-to-bg
kind: theorem
title: Numerable principal bundles are classified by maps to BG
status: draft
origin: pipeline
deps: ["thm-milnor-join-model-is-a-contractible-free-g-space", "prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-principal-g-bundle-and-associated-fiber-bundle", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Theorems 9.8--9.9 and Sections 12.1--12.5, printed pages 52--58
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 19, Theorem 19.1 and Proposition 19.2, printed pages 62--63
---

## Statement

Assume AC. For a well-pointed topological group $G$ of CW type and a CGWH base $X$, pullback of Milnor's bundle induces a bijection

$$ [X,BG]\xrightarrow{\ \cong\ }\operatorname{Bun}^{\mathrm{num}}_G(X),\qquad [f]\longmapsto[f^*EG], $$

where the right side consists of isomorphism classes of numerable right principal $G$-bundles. A locally trivial bundle over a paracompact base is covered only after a separate theorem supplies numerability.

## Facts & Assumptions

[F1] Milnor's $EG\to BG$ is a numerable principal bundle; $EG$ is contractible; the even and odd coordinate embeddings are equivariantly homotopic to its identity; and disjoint-support interpolation after those embeddings is a continuous equivariant homotopy ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F2] Pullback preserves principal-bundle charts ([[prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback]]), and the pullback of a support-subordinate partition is support-subordinate by inverse-image functoriality of support.

[F3] The lifting construction for a numerable bundle is made from chart transports and therefore commutes with a right principal action ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F4] A continuous equivariant map between principal $G$-bundles over the same base is a bundle isomorphism, as follows in principal charts from the torsor condition ([[def-principal-g-bundle-and-associated-fiber-bundle]]).

[A1] AC chooses members and chart data for arbitrary indexed families in the countabilization below. Finite supplied numerations do not require this use ([[def-axiom-of-choice]]).

## Proof

**Given:** $X,G$ and [A1] as in the statement.

1.1 First let $\pi:P\to X$ be numerable with an arbitrary indexed numeration $(\rho_i)_{i\in I}$ subordinate to principal charts $U_i$. For each nonempty finite $S\subseteq I$, define [A1]

$$ u_S(x)=\max\left(0,\min_{i\in S}\rho_i(x)-\sup_{j\notin S}\rho_j(x)\right), $$

where the supremum of an empty family is $0$. Near each point only finitely many $\rho_i$ can be nonzero, so the displayed supremum is locally a finite maximum and $u_S$ is continuous. At a point, let $S$ be the finite set of indices attaining the largest positive value; then $u_S>0$. If $S\ne S'$ have the same cardinality, their cozero sets are disjoint, since indices in $S\setminus S'$ and $S'\setminus S$ would otherwise have to be strictly larger than one another. [A1]

1.2 The assignment depends only on the homotopy class of $f$. If $H:X\times I\to BG$ joins $f_0$ to $f_1$, then $H^*EG$ is numerable by [F1, F2]. Apply the lifting function of [F3] to the paths $t\mapsto H(x,t)$. Holding the principal group coordinate in every chart makes endpoint transport an equivariant map from the restriction over $X\times\{0\}$ to that over $X\times\{1\}$. It is a bundle isomorphism by [F4]. Thus $f_0^*EG\cong f_1^*EG$. [F1, F2, F3, F4]

1.3 Conversely, suppose $f_0^*EG\cong f_1^*EG$ and identify both with one principal bundle $P$. Projection to the $EG$ coordinate gives equivariant maps $q_0,q_1:P\to EG$ covering $f_0,f_1$. By [F1], equivariantly deform $q_0$ to a map $q_0^{\mathrm{ev}}$ supported in even coordinates and $q_1$ to $q_1^{\mathrm{odd}}$ supported in odd coordinates. Their disjoint supports make [F1]

$$ K(p,t)=(1-t)q_0^{\mathrm{ev}}(p)+tq_1^{\mathrm{odd}}(p) $$

a well-defined continuous equivariant map $P\times I\to EG$. Passing to orbits gives a homotopy between the two deformed base maps. Concatenating with the orbit homotopies furnished by [F1] proves $f_0\simeq f_1$. [F1]

2.1 For $m\geq1$, set $w_m=\sum_{|S|=m}u_S$. These sums are locally finite, their cozero sets $V_m$ cover $X$, and $V_m$ is the disjoint union of the cozero sets of the $u_S$ with $|S|=m$. Each such piece lies in every $U_i$ with $i\in S$. Use [A1] to choose one $i(S)\in S$; restricting its section and patching over the disjoint pieces gives a section $s_m:V_m\to P$. Normalize the $w_m$, then apply the threshold construction of the Milnor theorem with positive numbers summing to less than one. We obtain a countable locally finite partition $(\lambda_m)_{m\geq1}$ with $\operatorname{supp}\lambda_m\subseteq V_m$. [A1, F1, step 1.1]

3.1 For $p\in P$ over $x$, whenever $\lambda_m(x)>0$ write uniquely $p=s_m(x)a_m(p)$. Define [F1, step 2.1]

$$ \Phi(p)=\sum_{m\geq1}\lambda_m(x)a_m(p)\in EG. $$

Only finitely many terms occur locally. Support containment makes the quotient formula continuous even where a label ceases to be defined, and on such a neighborhood it factors through one finite-join quotient. Thus $\Phi$ is continuous. It is equivariant because $a_m(pg)=a_m(p)g$, and it descends to a map $f:X\to BG$. [F1, step 2.1]

4.1 The map $p\mapsto(\pi(p),\Phi(p))$ is an equivariant map $P\to f^*EG$ over $X$. On each fiber it is a map of right $G$-torsors and is therefore bijective. In principal charts it has the form $(x,g)\mapsto(x,c(x)g)$, whose inverse is $(x,h)\mapsto(x,c(x)^{-1}h)$; hence [F4] makes it a bundle isomorphism. Every numerable bundle is therefore pulled back from Milnor's bundle. [F4, step 3.1]

5.1 Steps 1.2, 1.3, and 4.1 prove well-definedness, injectivity, and surjectivity of the displayed map. If $X=\varnothing$, both sides are singletons. If the given numeration is finite, its countabilization and all chart choices in Steps 1.1--3.1 are finite; for arbitrary index sets, [A1] is exactly the declared choice use. The theorem makes no claim that paracompactness implies numerability. $\square$ [A1, step 1.2, step 1.3, step 4.1]
