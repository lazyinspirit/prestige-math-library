---
id: lem-finite-constant-cdh-sections
kind: lemma
title: Finite constant cdh sections
status: draft
domain: mathematics
deps:
  - prop-cdh-representable-seminormalization
  - lem-clopen-finite-constant-maps
  - def-cdh-topology-interface
  - def-scheme-sites-and-sheafification
  - def-seminormal-scheme-interface
  - math:def-axiom-of-choice
dependency_roles:
  prop-cdh-representable-seminormalization: mathematical-premise
  lem-clopen-finite-constant-maps: mathematical-premise
  def-cdh-topology-interface: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-seminormal-scheme-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF page 5, proof of Lemma 2.4, displays preceding and including
        equation (2.5)
      reading_limits: The article text at this location was inspected; the argument
        below also spells out the constant-sheaf identification.
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field, $X$ a separated seminormal scheme of finite type over $k$, and $A$ a finite set. Put $Y_A=\coprod_{a\in A}\operatorname{Spec}k$. On the big cdh site of separated finite-type $k$-schemes, the constant cdh sheaf associated to $A$ is canonically isomorphic to $h_{Y_A}^{\mathrm{cdh}}$, the cdh sheafification of $T\mapsto\operatorname{Hom}_k(T,Y_A)$. Consequently there are natural bijections
$$\Gamma_{\mathrm{cdh}}(X,A)\cong\operatorname{Hom}_k(X,Y_A)\cong\operatorname{Map}(\pi_0(X),A).$$
These assertions include the empty set and empty scheme cases.

Here the constant cdh sheaf associated to $A$ is the sheafification of the constant presheaf with value $A$ and identity restriction maps. Sections $\Gamma_{\mathrm{cdh}}(X,A)$ mean its value at $X$. The set $\pi_0(X)$ consists of the connected components of the underlying topological space; a connected component is a maximal subset that cannot be partitioned into two nonempty relatively open subsets. A finite-type $k$-scheme has a finite affine cover by spectra of finitely generated $k$-algebras; separated means that its diagonal is a closed immersion. Seminormal means that every point has an affine neighbourhood with coordinate ring $R$ such that each pair $x,y\in R$ satisfying $x^3=y^2$ has a unique $a\in R$ with $a^2=x$ and $a^3=y$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, a separated seminormal finite-type $k$-scheme $X$, and a finite set $A$.

**Goal:** Identify the constant cdh sheaf with $h_{Y_A}^{\mathrm{cdh}}$ and obtain the displayed natural bijections.

[F1] The big cdh site has separated finite-type $k$-schemes as objects, and its coverings include Nisnevich coverings. In particular, an open cover is a cdh covering family: open immersions are étale and each point has a lift with unchanged residue field. [[def-cdh-topology-interface]]

[F2] Sheafification is left adjoint to the inclusion of sheaves into presheaves. A sheaf assigns a unique amalgamation to every compatible family on a covering sieve. [[def-scheme-sites-and-sheafification]]

[F3] For a perfect field $k$ and separated finite-type $k$-schemes $T,Y$, the cdh sheafification of $h_Y$ evaluated at a seminormal $T$ is naturally $\operatorname{Hom}_k(T,Y)$. A field is perfect when every algebraic extension is separable. [[prop-cdh-representable-seminormalization]] [[def-seminormal-scheme-interface]]

[F4] Under the Axiom of Choice, if $T$ is a Noetherian $k$-scheme, morphisms $T\to Y_A$ correspond naturally to functions $\pi_0(T)\to A$. A Noetherian scheme has a Noetherian underlying space, meaning that descending chains of closed subsets stabilize. [[lem-clopen-finite-constant-maps]] [[math:def-axiom-of-choice]]

## Proof

**Proof technique:** Use the universal property of sheafification and the open decomposition induced by a map to the finite disjoint union, then apply the two stated suppliers.

1.1 Let $C_A$ be the constant presheaf. There is a natural map $C_A\to h_{Y_A}$ sending $a\in A$ to the composite $T\to\operatorname{Spec}k\to Y_A$ through the summand labelled $a$. The same definition covers $A=\varnothing$, when the map has empty domain at each object. [given, construct]

2.1 For any cdh sheaf $F$, restriction along this map gives a function $\operatorname{Hom}(h_{Y_A},F)\to\operatorname{Hom}(C_A,F)$. It is bijective. Indeed, given a presheaf map $u:C_A\to F$ and a morphism $f:T\to Y_A$, write $T_a$ for the inverse image of the $a$-summand. The $T_a$ are pairwise disjoint open-and-closed subschemes covering $T$; because $A$ is finite, they are objects of the site. On $T_a$ take $u_{T_a}(a)$. These sections agree on all overlaps: the overlaps are empty, and the sheaf axiom for the empty open cover gives $F(\varnothing)$ exactly one element. By the sheaf axiom they glue uniquely to an element of $F(T)$. Pullback of this decomposition and uniqueness of gluing show that the construction is natural in $T$, hence defines a presheaf map $h_{Y_A}\to F$. If $A$ is empty, a map $T\to Y_A=\varnothing$ exists only for $T=\varnothing$, and the same empty-cover argument applies. [F1, F2, step 1.1, construct]

3.1 The construction in step 2.1 restricts to $u$: the constant morphism labelled $a$ has $T_a=T$ and all other inverse images empty. Conversely, any presheaf map $h_{Y_A}\to F$ must take $f$ to the glued section in step 2.1, since its restriction to each $T_a$ is determined by naturality and the constant map labelled $a$. Thus the two operations are inverse. By [F2], the induced map $a_{\mathrm{cdh}}C_A\to a_{\mathrm{cdh}}h_{Y_A}$ is an isomorphism: both sheaves represent the same natural functor of cdh sheaves. This proves the asserted canonical identification of sheaves. [F2, step 1.1, step 2.1]

4.1 The finite disjoint union $Y_A$ is separated and of finite type over $k$, including when it is empty. An algebraically closed field is perfect, since every algebraic extension is the field itself. Thus [F3] applies to the given $X$ and $Y_A$, and the seminormality hypothesis gives $h_{Y_A}^{\mathrm{cdh}}(X)\cong\operatorname{Hom}_k(X,Y_A)$. Together with step 3.1 this yields the first displayed bijection. [F3, given, step 3.1]

5.1 A finite-type scheme over a field is Noetherian: its finite affine cover has finitely generated coordinate algebras, which are Noetherian by the Hilbert basis theorem, and a finite union of Noetherian open subspaces is Noetherian. Applying [F4] to $X$ gives the second displayed bijection. The two bijections are natural in $X$ and $A$: the first is induced by natural sheaf maps and the natural comparison in [F3], and the second is natural by [F4]. [F4, given, step 4.1]

6.1 Steps 3.1, 4.1 and 5.1 prove the sheaf identification and both claimed bijections, including the empty cases covered by the constructions and [F4]. [F4, step 3.1, step 4.1, step 5.1] ∎
