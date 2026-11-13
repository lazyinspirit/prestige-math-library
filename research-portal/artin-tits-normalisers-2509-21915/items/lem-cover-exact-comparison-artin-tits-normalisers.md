---
id: lem-cover-exact-comparison-artin-tits-normalisers
kind: lemma
title: Intermediate exact sequences and deck morphism in Theorem 6.7
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - cor-deligne-normal-cover-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - prop-cover-exact-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - lem-normaliser-exact-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - def-deligne-ribbon-mapping-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - lem-ribbon-generator-lift-artin-tits-normalisers
  - math:def-morphism-of-group-extensions
  - math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient
  - def-coxeter-data-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - lem-finite-wall-path-artin-tits-normalisers
  - math:def-axiom-of-choice
dependency_roles:
  lem-equivariant-topological-equivalence-artin-tits-normalisers: mathematical-premise
  cor-deligne-normal-cover-artin-tits-normalisers: mathematical-premise
  thm-artin-normaliser-splitting-artin-tits-normalisers: mathematical-premise
  prop-cover-exact-artin-tits-normalisers: mathematical-premise
  lem-normaliser-chamber-action-artin-tits-normalisers: mathematical-premise
  lem-normaliser-exact-artin-tits-normalisers: mathematical-premise
  prop-relative-cover-artin-tits-normalisers: mathematical-premise
  def-deligne-ribbon-mapping-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  lem-ribbon-generator-lift-artin-tits-normalisers: mathematical-premise
  math:def-morphism-of-group-extensions: mathematical-premise
  math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-artin-pure-lifts-artin-tits-normalisers: mathematical-premise
  lem-finite-wall-path-artin-tits-normalisers: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 26, proof of Theorem 6.7, equations (6.9)–(6.11)
      statement: The groupoid covering sequence is identified with the topological
        covering sequence and with the ribbon vertex-group sequence; the latter
        deck map agrees with the Artin–Coxeter normaliser quotient map.
      hypotheses: A finite-rank spherical Coxeter system and a fixed subset J of its
        simple generators, with the constructions of Section 6.
      reading_limits: Frozen article text at Theorem 6.7 and equations (6.9)–(6.11)
        was read for attribution only. The current local proof and the
        applicable equivariant-equivalence, normal-cover, ribbon-splitting and
        extension interfaces were read. The displayed comparison components
        expose the maps calculated in the local proof; their composite is
        derived locally. No visual PDF inspection or reconstruction of the
        gallery theorem is claimed.
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - def-deligne-ribbon-mapping-artin-tits-normalisers
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - cor-deligne-normal-cover-artin-tits-normalisers
  - prop-cover-exact-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - lem-normaliser-exact-artin-tits-normalisers
  - math:def-morphism-of-group-extensions
  - math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient
  - math:def-axiom-of-choice
argument_deps:
  - lem-equivariant-topological-equivalence-artin-tits-normalisers
  - cor-deligne-normal-cover-artin-tits-normalisers
  - thm-artin-normaliser-splitting-artin-tits-normalisers
  - prop-cover-exact-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - lem-normaliser-exact-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - def-deligne-ribbon-mapping-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - lem-ribbon-generator-lift-artin-tits-normalisers
  - math:def-morphism-of-group-extensions
  - math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient
  - def-artin-pure-lifts-artin-tits-normalisers
  - lem-finite-wall-path-artin-tits-normalisers
  - math:def-axiom-of-choice
dependency_level: 24
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be a finite-rank spherical Coxeter system, so $W$ is finite, and let $J\subseteq S$. Let $A$ be its Artin–Tits group, $\pi:A\to W$ the standard projection, and $W_J,A_J$ the standard parabolic subgroups generated by $J$. Put $N=N(W,J)=\operatorname{Norm}_W(W_J)/W_J$ and $N(A,J)=\operatorname{Norm}_A(A_J)/A_J$. Let $\mathcal D$ be the relative arrangement groupoid, $\mathcal R$ the reduced ribbon groupoid, $\mathcal G:\mathcal D\to\mathcal R$ the crossing-to-ribbon functor and $\mathcal Q:\mathcal D\to\mathcal D/N$ the orbit functor. A vertex group is the group of arrows from a specified object to itself. Write $d=(e,J)$, $\mathcal D_J=\mathcal D_d$ and $\mathcal R_J$ for the vertex group of $\mathcal R$ at $J$.

Let $X$ be the relative complexified arrangement complement, $p:\mathcal D\to\Pi_1(X)$ the equivariant equivalence, $x=p(d)$ and $\bar x$ the image of $x$ in $X/N$. With first-path-first products and ordinary composition of deck transformations, the exact sequence $1\to\mathcal D_J\xrightarrow{\mathcal Q}(\mathcal D/N)_{\mathcal Qd}\to N\to1$ is isomorphic, with identity on $N$, to the topological covering sequence $1\to\pi_1(X,x)\to\pi_1(X/N,\bar x)\to N\to1$. It is also isomorphic, with identity on $\mathcal D_J$ and $N$, to $1\to\mathcal D_J\xrightarrow{\mathcal G}\mathcal R_J\xrightarrow{\psi}N\to1$.

For $\mu\in\mathcal R_J$, its unique $\mathcal G$-lift from $d$ ends at $(\pi(\mu),J)$; in particular $\pi(\mu)$ is the minimum-length representative of its right $W_J$-coset and $\psi(\mu)=\pi(\mu)W_J$. Under the isomorphism $\mathcal R_J\cong N(A,J)$ induced by quotienting by $A_J$, $\psi$ agrees with the map $\overline\pi:N(A,J)\to N$ induced by $\pi$.

More explicitly, let $q_J:\mathcal R_J\to N(A,J)$ be the quotient isomorphism, let $\mathcal G':\mathcal D/N\to\mathcal R$ be the isomorphism with $\mathcal G=\mathcal G'\mathcal Q$, and let $\bar p:\mathcal D/N\to\Pi_1(X/N)$ be induced by $p$. Write $p_d$, $\bar p_{\mathcal Qd}$ and $\mathcal G'_{\mathcal Qd}$ for the induced vertex-group maps. The comparison from the $\mathcal Q$-sequence to the topological sequence has components $(p_d,\bar p_{\mathcal Qd},\mathrm{id}_N)$; the comparison from the $\mathcal Q$-sequence to the ribbon sequence has components $(\mathrm{id}_{\mathcal D_J},\mathcal G'_{\mathcal Qd},\mathrm{id}_N)$. Consequently the resulting algebraic-to-topological comparison has middle map $\Phi=\bar p_{\mathcal Qd}\circ(\mathcal G'_{\mathcal Qd})^{-1}\circ q_J^{-1}:N(A,J)\to\pi_1(X/N,\bar x)$.

## Statement references

[[math:def-axiom-of-choice]]

[[def-coxeter-data-artin-tits-normalisers]]

[[def-artin-pure-lifts-artin-tits-normalisers]]

[[def-deligne-ribbon-mapping-artin-tits-normalisers]]

[[lem-equivariant-topological-equivalence-artin-tits-normalisers]]

[[prop-relative-cover-artin-tits-normalisers]]

[[cor-deligne-normal-cover-artin-tits-normalisers]]

[[thm-artin-normaliser-splitting-artin-tits-normalisers]]

[[lem-normaliser-exact-artin-tits-normalisers]]

[[math:def-morphism-of-group-extensions]]

[[math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]

## Facts & Assumptions

[F1] $\pi:A\to W$ is a group homomorphism. The groupoid $\mathcal D$ has chamber labels $(y,I)$ as objects. A simple crossing of index $a$ sends $(y,I)$ to $(yv_{a,I},K)$, and $\mathcal G$ sends it to the elementary ribbon $\mu_{a,I}$ from $I$ to $K$. The groupoid is generated by these crossings and their inverses; $\pi(\mu_{a,I})=v_{a,I}$. [[def-deligne-ribbon-mapping-artin-tits-normalisers]] [[def-simple-wall-crossing-artin-tits-normalisers]] [[lem-ribbon-generator-lift-artin-tits-normalisers]] [[def-artin-pure-lifts-artin-tits-normalisers]]

[F2] The functor $\mathcal G$ factors as $\mathcal G'\mathcal Q$, where $\mathcal G':\mathcal D/N\to\mathcal R$ is an isomorphism; $\mathcal Q$ and $\mathcal G$ are normal coverings with deck group identified with $N$ through its action on $\mathcal D$. [[cor-deligne-normal-cover-artin-tits-normalisers]]

[F3] A normal covering of connected groupoids gives an exact vertex-group sequence whose last map sends a loop to the deck transformation carrying the chosen source to the endpoint of its unique lift. [[prop-cover-exact-artin-tits-normalisers]]

[F4] Under the Axiom of Choice, the equivariant equivalence $p$ induces an equivalence $\bar p:\mathcal D/N\to\Pi_1(X/N)$ with $\bar p\mathcal Q=q_*p$, where $q:X\to X/N$ is the orbit map. The $N$-action on $X$ is free and has the disjoint-neighbourhood property; $q$ is a normal covering and gives the topological exact sequence in the Statement. With first-path-first products, its last map sends a loop to the unique element of $N$ carrying its lift's initial point to its endpoint. [[lem-equivariant-topological-equivalence-artin-tits-normalisers]] [[prop-relative-cover-artin-tits-normalisers]] Choice is used in that supplier to choose connecting paths for all objects when constructing quasi-inverses; no further choice is used in the vertex-group comparison below. [[math:def-axiom-of-choice]]

[F5] For $g\in\operatorname{Norm}_W(W_J)$, its class acts on $(e,J)$ as $(y,J)$, where $y$ is the minimum-length element of $gW_J$. This action on chamber labels is free. [[lem-normaliser-chamber-action-artin-tits-normalisers]]

[F6] The quotient map restricts to an isomorphism $\mathcal R_J\to N(A,J)$, and $\pi$ induces $\overline\pi:N(A,J)\to N$. [[thm-artin-normaliser-splitting-artin-tits-normalisers]] [[lem-normaliser-exact-artin-tits-normalisers]]

[F7] A morphism of extensions is a commutative diagram of the three group homomorphisms; an equivalence with fixed end groups has isomorphisms on the middle groups and identity maps on those end groups. [[math:def-morphism-of-group-extensions]] [[math:def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]

[F8] Any two relative chambers are joined by a finite sequence of simple wall crossings. [[lem-finite-wall-path-artin-tits-normalisers]]

## Proof
**Given:** The spherical Coxeter system, subset $J$, constructions and basepoints in the Statement, with the Axiom of Choice.


**Proof technique:** direct.

**Goal:** Compare the three exact sequences and calculate the ribbon deck map.

1.1 The chamber label $d=(e,J)$ exists, so $\mathcal D$ is nonempty. By [F1] and [F8], any two objects are joined by an arrow, so $\mathcal D$ is connected. It is small because its chamber labels form a set and its arrows are equivalence classes of finite words in the generating crossings and their inverses. The orbit functor $\mathcal Q$ is surjective on objects, hence its target is also nonempty and connected; the isomorphism $\mathcal G'$ in [F2] gives the same properties for $\mathcal R$. By [F2] and [F3], $\mathcal Q$ yields the first exact sequence, and $\mathcal G$ yields the ribbon sequence. Since $\mathcal G=\mathcal G'\mathcal Q$, the vertex-group isomorphism induced by $\mathcal G'$ commutes with the injections from $\mathcal D_J$. A lift through $\mathcal G$ is the same arrow as the lift through $\mathcal Q$ of its $\mathcal G'$-preimage. Consequently the two endpoint maps agree under the common deck-group identification with $N$. This gives the asserted isomorphism of extensions. [F1, F2, F3, F7, F8, given]

1.2 Write the unique lift of $\mu$ from $d$ as a finite composite of crossings and inverse crossings. At a positive crossing, [F1] multiplies the first chamber coordinate on the right by the projection of its ribbon. For an inverse crossing, reversing the same formula multiplies it by the inverse projection. Induction over the composite therefore shows that its endpoint is $(\pi(\mu),J)$, since $\mu$ is a loop at $J$. This is a chamber label, so its first coordinate is the minimum-length representative of its right $W_J$-coset. [F1, F2, given]

2.1 The Choice assumption permits the quasi-inverses in [F4]. An equivalence of groupoids is fully faithful, so $p$ and $\bar p$ induce isomorphisms on the indicated vertex groups. The square in [F4] makes these isomorphisms commute with the injections. If a quotient-groupoid loop lifts from $d$ to $n d$, its image under $p$ is a path class from $x$ to $n x$ by equivariance. Thus the topological endpoint map sends its image to the same $n$. The topological sequence is exact by [F4], and the resulting diagram is the claimed isomorphism of exact sequences. [F3, F4, F7, step 1.1]

3.1 By [F6], $\pi(\mu)$ normalises $W_J$. By [F5] and the minimality in step 1.2, the class $\pi(\mu)W_J$ carries $d$ to $(\pi(\mu),J)$. The action is free, so [F3] identifies this class with $\psi(\mu)$. Finally, the isomorphism in [F6] sends $\mu$ to $\mu A_J$, and the induced map $\overline\pi$ sends that coset to $\pi(\mu)W_J$. Hence $\psi=\overline\pi$ under this isomorphism. In step 1.1 the comparison from the $\mathcal Q$-sequence to the ribbon sequence has middle map $\mathcal G'_{\mathcal Qd}$, and in step 2.1 the comparison to the topological sequence has middle map $\bar p_{\mathcal Qd}$. Transport the ribbon middle group to $N(A,J)$ by $q_J$ from [F6]. Composing the inverse ribbon comparison with the topological comparison therefore gives $\Phi=\bar p_{\mathcal Qd}\circ(\mathcal G'_{\mathcal Qd})^{-1}\circ q_J^{-1}$. Each comparison commutes with the endpoint maps, so $\Phi$ commutes with the maps to $N$ and identifies their kernels; restricting $\Phi$ identifies the algebraic kernel with the topological kernel. This proves the stated components and completes all comparisons. [F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1] ∎

## Source notes

The article reference attributes the intermediate claims. The explicit Choice qualification records the hypothesis of the current equivalence supplier and does not attribute a defect to the original article. The proof uses the completed suppliers and does not take the article's comparison as a premise.
