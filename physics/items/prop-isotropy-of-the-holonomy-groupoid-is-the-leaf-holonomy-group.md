---
id: prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group
kind: proposition
title: "The isotropy of the holonomy groupoid is the leaf holonomy group"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
  - lem-holonomy-classes-form-a-groupoid-congruence
  - def-holonomy-groupoid-of-a-foliation
  - def-monodromy-groupoid-of-a-foliation
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - lem-holonomy-respects-path-concatenation-and-reversal
  - lem-germs-of-local-diffeomorphisms-form-a-group
  - def-based-loops-and-fundamental-group
  - def-local-transversal-to-a-regular-foliation
  - def-leaf-of-a-regular-foliation
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation, $x\in M$, $L$ the leaf through $x$, $T$ a local
transversal at $x$ and
$\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ the holonomy representation
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Then the
isotropy group $\operatorname{Hol}(F)(x,x)$ of the holonomy groupoid
([[def-holonomy-groupoid-of-a-foliation]]) is canonically isomorphic to the
holonomy group $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$: the map sending the
holonomy class of a leaf loop at $x$ to its holonomy germ is a group
isomorphism. In particular the isotropy is trivial if and only if the holonomy
representation is trivial.

## Facts & Assumptions

**Given:** A regular foliation $F$, a point $x\in M$ with leaf $L$, a local transversal $T$ at $x$, the holonomy representation $\rho_x$, and the holonomy groupoid $\operatorname{Hol}(F)$.

[F1] Arrows $x\to x$ of $\operatorname{Hol}(F)$ are the holonomy classes of leaf loops at $x$, where two leaf loops are holonomy-equivalent exactly when their holonomy germs agree; the isotropy group consists of these arrows with composition induced by concatenation and identity the class of the constant loop ([[def-holonomy-groupoid-of-a-foliation]], [[def-based-loops-and-fundamental-group]]).

[F2] The holonomy germ $h_a(T,T)$ of a leaf loop $a$ at $x$ is well defined and invariant under leafwise homotopy relative to endpoints; the holonomy representation is $\rho_x([a])=h_{a^{-1}}(T,T)$, it is a homomorphism, and $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]], [[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]]).

[F3] Holonomy germs satisfy $h_{a*b}=h_b\circ h_a$; the germs of local diffeomorphisms of $T$ at $x$ form a group under composition, so equal germs compose to equal germs ([[lem-holonomy-respects-path-concatenation-and-reversal]], [[lem-germs-of-local-diffeomorphisms-form-a-group]]).

## Proof

**Proof technique:** direct.

1.1 **The map is well defined and injective.** Define $\Theta:\operatorname{Hol}(F)(x,x)\to\operatorname{Diff}_x(T)$ by $\Theta(\text{class of }a):=h_a(T,T)$. If $a,a'$ are holonomy-equivalent leaf loops, then by definition their holonomy germs agree, $h_a(T,T)=h_{a'}(T,T)$, so $\Theta$ is well defined; conversely if the germs agree then the loops are holonomy-equivalent, so $\Theta$ is injective. [F1, F2]

1.2 **The map is a homomorphism.** The isotropy product is induced by concatenation, so for classes of leaf loops $a,b$ at $x$, $$\Theta([b]\cdot[a])=\Theta(\text{class of }a*b)=h_{a*b}(T,T)=h_b(T,T)\circ h_a(T,T)=\Theta([b])\circ\Theta([a]),$$ using multiplicativity of holonomy germs [F3]. The identity class is that of the constant loop, whose germ is the identity germ of $T$, so $\Theta$ preserves identities as well, and inverses are preserved because reversal inverts the germ. [F1, F3]

2.1 **The image is the holonomy group.** Every holonomy class of a leaf loop at $x$ is represented by a leaf loop $a$, and $\Theta$ of its class is $h_a(T,T)=\rho_x([a]^{-1})$ by [F2]; hence the image of $\Theta$ is exactly $\rho_x(\pi_1(L,x))=\operatorname{Hol}(L,x)$. Since $\Theta$ is an injective homomorphism onto this subgroup, it is a group isomorphism onto the holonomy group. [F2, step 1.1, step 1.2]

3.1 **Triviality criterion.** The isotropy group is trivial exactly when its isomorphic image $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$ is trivial, that is, exactly when $\rho_x$ is the trivial homomorphism. This proves the proposition and the stated criterion. [step 2.1] ∎
