---
id: rem-universal-cayley-graph-artin-tits-normalisers
kind: remark
title: Universal wall graph as a groupoid Cayley graph
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-universal-wall-groupoid-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
  - rem-empty-j-wall-crossing-artin-tits-normalisers
  - def-small-groupoid-interface-artin-tits-prerequisites
  - def-brink-howlett-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - thm-finite-wall-crossing-input-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-labelled-directed-graph-and-labelled-graph-isomorphism
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
dependency_roles:
  def-universal-wall-groupoid-artin-tits-normalisers: mathematical-premise
  thm-universal-brink-howlett-cover-artin-tits-normalisers: mathematical-premise
  rem-empty-j-wall-crossing-artin-tits-normalisers: mathematical-premise
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  def-brink-howlett-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  thm-finite-wall-crossing-input-artin-tits-prerequisites: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  math:def-labelled-directed-graph-and-labelled-graph-isomorphism: mathematical-premise
  lem-normaliser-chamber-action-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 30, §7.2.1, final paragraph
      statement: The universal generating graph is a right Cayley graph for the
        Brink–Howlett groupoid on its crossing generators. For J empty the
        arrangement is the Coxeter arrangement and the generating graph is the
        Cayley graph of W on the simple generators s_a=v_{a,empty}.
      hypotheses: The article's Coxeter-system and relative-chamber conventions; the
        local argument below uses the finite-rank geometric convention of its
        suppliers, with arbitrary Coxeter type.
      reading_limits: In this pass, read the frozen extracted final paragraph of
        §7.2.1 and visually inspected original PDF p. 30. This is attribution
        only. The local proof uses the declared mathematical suppliers, not the
        article assertion as a premise.
formulation_deps:
  - def-universal-wall-groupoid-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
  - rem-empty-j-wall-crossing-artin-tits-normalisers
  - def-small-groupoid-interface-artin-tits-prerequisites
  - def-brink-howlett-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-labelled-directed-graph-and-labelled-graph-isomorphism
  - def-simple-wall-crossing-artin-tits-normalisers
argument_deps:
  - def-universal-wall-groupoid-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
  - rem-empty-j-wall-crossing-artin-tits-normalisers
  - def-small-groupoid-interface-artin-tits-prerequisites
  - def-brink-howlett-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - thm-finite-wall-crossing-input-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-labelled-directed-graph-and-labelled-graph-isomorphism
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
dependency_level: 18
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system, with simple generators $s_a$ indexed by $a\in\Gamma_0$, and fix $J\subseteq\Gamma_0$. Let $\Theta$ be the real dual reflection space, $\Theta_J=\{f\in\Theta:f(\alpha_j)=0\ (j\in J)\}$, and $(T_J,\mathcal H^J)=(\mathrm{Cone}(J)^\circ,\mathcal H^J)$ the relative arrangement, with interior taken in $\Theta_J$. Relative chambers are the connected components of $T_J\setminus\bigcup_{H\in\mathcal H^J}H$; walls and adjacency use chamber closures in $\Theta_J$ and the codimension-one wall convention. Identify these chambers with the algebraic labels $A=(x,I)\in\mathrm{Cham}(J)$. Write $\mathcal{BH}(J)$ for the Brink–Howlett groupoid, $\widetilde{\mathcal{BH}}(J)$ for its universal wall groupoid, and $\mathcal F$ for the covering that sends $(x,I)$ to $I$ and an arrow to its label. Composition is read from left to right.

Let $L$ be the set of tagged base arrows $\sigma=v_{a,I}:I\to K$ realized as images under $\mathcal F$ of adjacent wall crossings upstairs. The crossing element and its target subset depend only on $I,a$. Define two labelled directed graphs with the same label set $L$. The universal generating graph has vertex set $\mathrm{Cham}(J)$ and arc set consisting of $(A,\sigma,B)$ whenever $A,B$ are adjacent and their unique upstairs arrow maps to $\sigma$. The right Cayley graph of $\mathcal{BH}(J)$ based at $J$ has vertices all tagged arrows $g:J\to I$, for all base objects $I$, and arcs $(g,\sigma,g\sigma)$ for every $\sigma:I\to K$ in $L$ and every such $g:J\to I$. A label-preserving directed graph isomorphism is a vertex bijection that preserves and reflects these labelled arc triples.

These graphs are isomorphic: the isomorphism sends $A$ to the image under $\mathcal F$ of the unique arrow $(1,J)\to A$.

When $J=\varnothing$, the relative arrangement is the Coxeter arrangement: $(T_\varnothing,\mathcal H^\varnothing)=(\mathrm{Cone}^\circ,\mathcal H)$. Moreover $\mathcal{BH}(\varnothing)$ has one object and arrow group $W$. The generating graph is the ordinary right Cayley graph of $W$ on the simple generators: its vertices are $x\in W$ and its arcs are $(x,s_a,xs_a)$. In particular $v_{a,\varnothing}=s_a$.

## Statement references

[[def-relative-cone-artin-tits-normalisers]]

[[def-chambers-walls-artin-tits-normalisers]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[def-chamber-labels-artin-tits-normalisers]]

[[def-universal-wall-groupoid-artin-tits-normalisers]]

[[def-brink-howlett-artin-tits-normalisers]]

[[thm-universal-brink-howlett-cover-artin-tits-normalisers]]

[[def-small-groupoid-interface-artin-tits-prerequisites]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

[[math:def-labelled-directed-graph-and-labelled-graph-isomorphism]]

[[rem-empty-j-wall-crossing-artin-tits-normalisers]]

## Facts & Assumptions

[F1] The universal wall groupoid has objects $(x,I)\in\mathrm{Cham}(J)$, including $(1,J)$, and exactly one arrow from $(x,I)$ to $(y,K)$, labelled $x^{-1}y$. Its composition multiplies labels in order. For an adjacent pair its arrow has the crossing label $v_{a,I}$ for some $a\notin I$. [[def-universal-wall-groupoid-artin-tits-normalisers]] [[def-small-groupoid-interface-artin-tits-prerequisites]]

[F2] The covering $\mathcal F$ maps $(x,I)$ to $I$ and an arrow to its label. It is bijective on arrows with any prescribed source; adjacent crossings map to the corresponding Brink–Howlett generators. Its upstairs objects are the relative chambers in the finite-rank convention used here. [[thm-universal-brink-howlett-cover-artin-tits-normalisers]]

[F3] The Brink–Howlett objects are the associates of $J$; its arrows $I\to K$ are the tagged elements of $W$ carrying the simple-root set of $K$ onto that of $I$, with composition given by multiplication. [[def-brink-howlett-artin-tits-normalisers]]

[F4] The label set consists of pairs $(x,I)$ with $W_Jx=xW_I$ and $x$ minimal in $xW_I$. [[def-chamber-labels-artin-tits-normalisers]]

[F5] For $J=\varnothing$, its only associate is $\varnothing$, $W_\varnothing=\{1\}$, $W_{\{a\}}$ has order two, and $v_{a,\varnothing}=s_a$. [[rem-empty-j-wall-crossing-artin-tits-normalisers]]

[F6] For a label $(x,I)$ and $a\notin I$, if $W_{I\cup\{a\}}$ is finite, the finite wall-crossing theorem gives an adjacent chamber with first coordinate $xw_Iw_{I\cup\{a\}}$, where $w_Q$ denotes the longest element of the finite standard parabolic $W_Q$. In particular, for $I=\varnothing$ this is $xs_a$, with target subset again empty. [[thm-finite-wall-crossing-input-artin-tits-prerequisites]] [[rem-empty-j-wall-crossing-artin-tits-normalisers]]

[F7] The normaliser action is transitive on the labels with any fixed second component. It preserves adjacency and transports a crossing at index $a$ to the crossing at the same index. The element $v_{a,I}$ and target subset depend only on $I,a$. [[lem-normaliser-chamber-action-artin-tits-normalisers]] [[def-simple-wall-crossing-artin-tits-normalisers]]

[F8] The relative definitions give $\Theta_J=\{f:f(\alpha_j)=0\ (j\in J)\}$, $\mathrm{Cone}(J)=\mathrm{Cone}\cap\Theta_J$ and $\mathcal H^J=\{H\cap\Theta_J:H\in\mathcal H,\ \Theta_J\not\subseteq H\}$. Every $H\in\mathcal H$ is a proper hyperplane of $\Theta$. Relative interiors are taken in $\Theta_J$; Coxeter-cone interiors are taken in $\Theta$. Chambers are connected components of the complement, and distinct chambers are adjacent when they share a wall of codimension one in the chamber's affine hull, with closure taken in the ambient space. [[def-relative-cone-artin-tits-normalisers]] [[def-coxeter-arrangement-artin-tits-normalisers]] [[def-chambers-walls-artin-tits-normalisers]]

[F9] A labelled directed graph with label set $L$ has arc set contained in $V\times L\times V$. An isomorphism is a vertex bijection preserving and reflecting membership of every labelled arc triple. [[math:def-labelled-directed-graph-and-labelled-graph-isomorphism]]

## Proof

**Given:** The finite-rank Coxeter system and subset $J$ in the Statement, with arbitrary Coxeter type. Composition is read from left to right.

**Proof technique:** direct.

**Goal:** Construct the labelled graph isomorphism and establish both empty-subset specializations.

1.1 For each upstairs object $A=(x,I)$ let $u_A$ be the unique arrow $(1,J)\to A$, and set $\varphi(A)=\mathcal F(u_A):J\to I$. Given any base arrow $g$ with source $J$, source-star bijectivity lifts it uniquely from $(1,J)$; its target is an object $A$ and its arrow is $u_A$. Thus $\varphi$ is surjective. If $\varphi(A)=\varphi(B)$ as tagged arrows, uniqueness of that lift gives $u_A=u_B$, hence $A=B$. Therefore $\varphi$ is a vertex bijection. [F1, F2]

1.2 If $J=\varnothing$, the coordinate conditions defining $\Theta_J$ are vacuous, so $\Theta_\varnothing=\Theta$. Hence $\mathrm{Cone}(\varnothing)=\mathrm{Cone}$, and their interiors agree because they are taken in the same space. Every $H\in\mathcal H$ is proper in $\Theta$, so the condition $\Theta_\varnothing\not\subseteq H$ retains all of them, and $H\cap\Theta_\varnothing=H$. Thus $\mathcal H^\varnothing=\mathcal H$, proving the equality of the two arrangement pairs. These arguments also include the empty vertex set. [F8]

2.1 If $(A,\sigma,B)$ is an upstairs arc, write $h:A\to B$ for its crossing arrow. The singleton hom-set gives $u_B=u_Ah$. Functoriality yields $\varphi(B)=\varphi(A)\sigma$, so $(\varphi(A),\sigma,\varphi(B))$ is a Cayley arc. [F1, F2, step 1.1]

3.1 Conversely, take a Cayley arc $(g,\sigma,g\sigma)$ with $g:J\to I$ and $\sigma=v_{a,I}:I\to K$. By the definition of $L$, choose an adjacent crossing $A_0\to B_0$ realizing $\sigma$, where $A_0$ has second component $I$. Let $A=\varphi^{-1}(g)$, also with second component $I$. By [F7], an element of the normaliser action takes $A_0$ to $A$ and takes $B_0$ to a chamber $B$ adjacent to $A$, with the same crossing index and projected label $\sigma$. Thus $(A,\sigma,B)$ is an upstairs arc. Step 2.1 gives $\varphi(B)=g\sigma$; step 1.1 makes this target unique. Consequently every Cayley arc lifts to an adjacent crossing. With step 2.1 and [F9], this proves that $\varphi$ is the claimed label-preserving directed graph isomorphism. [F1, F2, F7, F9, step 1.1, step 2.1]

4.1 For $J=\varnothing$, [F5] and [F3] give one base object and all elements of $W$ as its arrows, since both simple-root sets in the arrow condition are empty; composition is multiplication. By [F4] and [F5], every $x\in W$ gives the label $(x,\varnothing)$, and these are all labels because any second component is a base object by [F2]. For every vertex $a$, [F5] makes $W_{\{a\}}$ finite, and [F6] supplies the adjacent crossing $(x,\varnothing)\to(xs_a,\varnothing)$. Conversely, [F1] gives some wall index $a$ for every adjacent pair, and [F5] makes its projected label $s_a$; the upstairs label formula in [F1] then forces its target to be $(xs_a,\varnothing)$. Therefore $L$ consists exactly of the simple generators as arrows of this one-object groupoid, and the arc triples are exactly $(x,s_a,xs_a)$. Together with steps 3.1 and 1.2 this proves all assertions. [F1, F2, F3, F4, F5, F6, step 3.1, step 1.2] ∎

## Source notes

The article's final paragraph of §7.2.1 supplies attribution for the graph interpretation and both empty-subset claims. The proof uses the covering, the normaliser action on adjacent crossings, the arrangement definitions and the finite rank-one crossing input. No article assertion is used as its own proof. The finite-rank qualification is the geometric convention of the suppliers; neither $W$ nor $W_J$ is required to be finite.
