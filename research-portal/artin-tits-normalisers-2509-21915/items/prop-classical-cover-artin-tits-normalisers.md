---
id: prop-classical-cover-artin-tits-normalisers
kind: proposition
title: Classical free action and covering exact sequence
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-classical-complement-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - math:thm-cg-root-length-criterion-and-faithfulness
  - thm-reflection-artin-topology-input-artin-tits-prerequisites
  - math:thm-cg-root-sign-and-simple-reflection-positivity
  - math:lem-cg-reflection-representation-descends-and-root-norms
  - math:def-hh-coxeter-matrix-word-group-and-length
  - math:def-covering-map-and-evenly-covered-neighbourhoods
  - math:def-regular-covering
  - math:def-deck-transformation-and-deck-group
  - math:def-based-loops-and-fundamental-group
  - math:def-induced-homomorphism-on-fundamental-groups
  - math:def-lift-of-a-map-path-and-homotopy
  - math:def-split-extension-of-groups
dependency_roles:
  def-classical-complement-artin-tits-normalisers: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  math:thm-cg-root-length-criterion-and-faithfulness: mathematical-premise
  thm-reflection-artin-topology-input-artin-tits-prerequisites: mathematical-premise
  math:thm-cg-root-sign-and-simple-reflection-positivity: mathematical-premise
  math:lem-cg-reflection-representation-descends-and-root-norms: mathematical-premise
  math:def-hh-coxeter-matrix-word-group-and-length: mathematical-premise
  math:def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
  math:def-regular-covering: mathematical-premise
  math:def-deck-transformation-and-deck-group: mathematical-premise
  math:def-based-loops-and-fundamental-group: mathematical-premise
  math:def-induced-homomorphism-on-fundamental-groups: mathematical-premise
  math:def-lift-of-a-map-path-and-homotopy: mathematical-premise
  math:def-split-extension-of-groups: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 1, 5; (1.1); §2.2, (2.4)
      statement: The action on the classical complement is free and properly
        discontinuous, and the quotient gives the displayed fundamental-group
        exact sequence.
      hypotheses: The article's standing Coxeter-system and geometric conventions; the
        present formulation makes finite rank explicit.
      reading_limits: The frozen article extraction was consulted for attribution.
        This article citation is not used as a proof premise.
dependency_level: 5
formulation_deps:
  - math:def-hh-coxeter-matrix-word-group-and-length
  - def-classical-complement-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - thm-reflection-artin-topology-input-artin-tits-prerequisites
  - math:def-covering-map-and-evenly-covered-neighbourhoods
  - math:def-regular-covering
  - math:def-deck-transformation-and-deck-group
  - math:def-based-loops-and-fundamental-group
  - math:def-induced-homomorphism-on-fundamental-groups
  - math:def-lift-of-a-map-path-and-homotopy
  - math:def-split-extension-of-groups
argument_deps:
  - def-classical-complement-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - math:thm-cg-root-length-criterion-and-faithfulness
  - thm-reflection-artin-topology-input-artin-tits-prerequisites
  - math:thm-cg-root-sign-and-simple-reflection-positivity
  - math:lem-cg-reflection-representation-descends-and-root-norms
  - math:def-hh-coxeter-matrix-word-group-and-length
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite. Let $\Theta$ be the dual of its canonical real reflection representation, with the contragredient action, Tits cone $\mathrm{Cone}$, and set $\mathcal H$ of distinct root hyperplanes. Put $\mathcal X^{\mathbb C}=(\mathrm{Cone}^{\circ}\times\mathrm{Cone}^{\circ})\setminus\bigcup_{H\in\mathcal H}(H\times H)$, with its subspace topology and the diagonal $W$-action. For any $Z\in\mathcal X^{\mathbb C}$, write $\overline Z$ for its orbit.

The action is free and properly discontinuous; in particular every point has a neighbourhood disjoint from its nonidentity translates. The orbit map $p:\mathcal X^{\mathbb C}\to\mathcal X^{\mathbb C}/W$ is a normal, also called regular, covering with deck group $W$. With first-path-first multiplication on fundamental groups, it induces the exact sequence $1\to\pi_1(\mathcal X^{\mathbb C},Z)\xrightarrow{p_*}\pi_1(\mathcal X^{\mathbb C}/W,\overline Z)\to W\to1$. The last map records the unique group element carrying $Z$ to the endpoint of the lifted loop.

## Statement references

[[math:def-hh-coxeter-matrix-word-group-and-length]]

[[def-classical-complement-artin-tits-normalisers]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[thm-reflection-artin-topology-input-artin-tits-prerequisites]]

[[math:def-covering-map-and-evenly-covered-neighbourhoods]]

[[math:def-regular-covering]]

[[math:def-deck-transformation-and-deck-group]]

[[math:def-based-loops-and-fundamental-group]]

[[math:def-induced-homomorphism-on-fundamental-groups]]

[[math:def-lift-of-a-map-path-and-homotopy]]

[[math:def-split-extension-of-groups]]

## Facts & Assumptions

[F1] The closed chamber $\overline C$ in $\Theta$ is the nonnegative coordinate orthant for the simple-root basis, its interior $C$ is the strictly positive orthant, and $\mathrm{Cone}=\bigcup_{w\in W}w\overline C$. The root hyperplanes are the kernels of evaluation at roots $we_s$. [[def-coxeter-arrangement-artin-tits-normalisers]] [[def-real-coxeter-interface-artin-tits-prerequisites]]

[F2] The primal and dual actions are faithful, $wC\cap C=\varnothing$ for $w\ne1$, and $\ell(ws)<\ell(w)$ if and only if $\rho(w)e_s\in\Phi_-$. Here $\rho$ is the canonical representation on $V=\mathbb R^S$, and $\Phi_-$ denotes the negative roots. [[math:thm-cg-root-length-criterion-and-faithfulness]]

[F3] For a Vinberg system, meaning a finite-dimensional real representation generated by reflections in the walls of a closed convex polyhedral cone with nonempty interior $C$, with $wC\cap C=\varnothing$ for nonidentity $w$, the complement formed from the interior of the union of chamber translates and the fixed hyperplanes of all linear reflections in the acting group (order-two linear maps with a hyperplane as fixed space) has a free, properly discontinuous diagonal action. It is path connected; the orbit map is a regular covering with deck group the acting group and gives the endpoint-translate fundamental-group exact sequence. This is the explicitly imported topology input, whose proof is not reconstructed here. [[thm-reflection-artin-topology-input-artin-tits-prerequisites]]

[F4] The classical complement is the stated product complement with its subspace topology. [[def-classical-complement-artin-tits-normalisers]]

[F5] The canonical representation preserves the Coxeter form $B$, with $B(e_s,e_s)=1$. The negative roots are the negatives of the positive roots, and $s$ preserves $\Phi_-\setminus\{-e_s\}$. [[math:lem-cg-reflection-representation-descends-and-root-norms]] [[math:thm-cg-root-sign-and-simple-reflection-positivity]]

[F6] The word length $\ell(w)$ is the minimum length of a word in the involutory generators $S$ representing $w$; such a minimum exists. A word attaining it is a reduced expression. [[math:def-hh-coxeter-matrix-word-group-and-length]]

## Proof
**Given:** The finite-rank Coxeter system, complement, diagonal action and basepoint in the Statement.


**Proof technique:** direct.

**Goal:** Verify the Vinberg-system hypotheses, prove that every linear reflection in this dual action is conjugate to a simple reflection, and identify the complement before applying the imported covering result.

1.1 The coordinate description in [F1] makes $\overline C$ a closed convex polyhedral cone with nonempty interior $C$. For each $s\in S$, the dual action of $s$ has order two and fixes pointwise the wall $H_{e_s}$: indeed $(sf)(v)=f(v)-2B(v,e_s)f(e_s)$. Its fixed space is exactly $H_{e_s}$, since evaluation at $e_s$ changes sign. These walls are precisely the coordinate walls of $\overline C$. The faithful dual action identifies $W$ with the group generated by these wall reflections, and [F2] supplies the required disjointness of $C$ and its nonidentity translates. Thus this is a Vinberg system in the sense of [F3]. [F1, F2, F3, given]


1.2 Let $r\in W$ act on $\Theta$ as any linear reflection. Choose $u$ of minimum word length among all conjugates of $r$, possible by [F6]. Its dual action is again a linear reflection. By faithfulness, $u^2=1$ and $u\ne1$. Put $A=\rho(u)$. Then $A^2=I$, and the dual action has matrix $(A^{-1})^{\mathsf T}=A^{\mathsf T}$ in dual bases. Transposition preserves rank, so the hyperplane fixed space of the dual action gives $\operatorname{rank}(A-I)=1$. Also, reversing a word in the involutions $S$ represents its inverse with the same length; doing this in both directions gives $\ell(v^{-1})=\ell(v)$ for every $v\in W$. [F1, F2, F6, algebra]

2.1 Let $s$ be the last letter of a reduced expression of $u$. Deleting it gives $\ell(us)=\ell(u)-1$: the remaining word gives the upper bound, and a shorter word for $us$, followed by $s$, would contradict the minimal length of $u$. Since $u=u^{-1}$, inversion invariance gives $\ell(su)=\ell(us)=\ell(u)-1$. By [F2], $Ae_s\in\Phi_-$. If $Ae_s\ne-e_s$, [F5] gives $\rho(su)e_s=s(Ae_s)\in\Phi_-$. Applying [F2] to $su$ then gives $\ell(sus)<\ell(su)<\ell(u)$, contradicting the choice of $u$ among conjugates of $r$. Therefore $Ae_s=-e_s$. [F2, F5, F6, step 1.2]

3.1 Since $(A-I)e_s=-2e_s$ and $A-I$ has rank one, every $v\in V$ satisfies $Av=v+\lambda(v)e_s$ for some scalar $\lambda(v)$. Form preservation and $Ae_s=-e_s$ give $B(v,e_s)=B(Av,Ae_s)=-B(v,e_s)-\lambda(v)$, because $B(e_s,e_s)=1$. Thus $Av=v-2B(v,e_s)e_s=\rho(s)v$ for every $v$. Faithfulness gives $u=s$. Since $u$ is conjugate to $r$, every linear reflection in the dual action is conjugate to a simple reflection. This argument does not assume nondegeneracy of $B$. [F1, F2, F5, step 1.2, step 2.1, algebra]

4.1 By step 3.1, every reflection used in [F3] is $wsw^{-1}$ for some $w\in W$ and $s\in S$. Its fixed hyperplane is $wH_{e_s}=H_{we_s}$ by the contragredient action. Conversely, each root is $we_s$, and $wsw^{-1}$ is an order-two linear map whose fixed space is $H_{we_s}$. Thus the fixed hyperplanes of all linear reflections in [F3] are exactly the members of $\mathcal H$. The open cone in [F3] is $\operatorname{int}(\bigcup_w w\overline C)=\mathrm{Cone}^{\circ}$ by [F1]. Consequently its product complement is exactly $\mathcal X^{\mathbb C}$, with the same topology and diagonal action by [F4]. [F1, F3, F4, step 1.1, step 3.1]

5.1 Apply [F3] to the Vinberg system identified in step 1.1 and the complement identified in step 4.1. It gives freeness, proper discontinuity and the disjoint-neighbourhood condition, as well as the regular covering with deck group $W$. Its endpoint-translate sequence at $Z$ is the exact sequence displayed in the Statement; regular and normal have the stated meaning here. This proves all assertions. [F3, step 1.1, step 4.1] ∎
