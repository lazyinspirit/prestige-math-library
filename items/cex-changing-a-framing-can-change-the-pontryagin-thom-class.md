---
id: cex-changing-a-framing-can-change-the-pontryagin-thom-class
kind: counterexample
title: "A framing, not just the submanifold, determines the Pontryagin-Thom class"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
  - def-the-standard-smooth-step-function
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - thm-covering-space-lifting-criterion
  - cor-real-line-is-universal-cover-of-circle
  - def-axiom-of-choice
  - def-framed-cobordism-of-embedded-submanifolds
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
  - lem-covering-homotopies-lift-by-finite-local-strips
  - lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Example 6.20 and Remark 5.26 on twists of framings, electronic pp.115-116 and p.25"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "(5.25)-(5.26) twists of framings and Exercise 5.35, printed pp.42-43"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, a framing is part of the data of a framed submanifold, printed pp.42-44"
---

## Statement refuted

The Pontryagin-Thom class of a framed submanifold depends only on the
underlying submanifold, not on the framing.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the standard unknot $U\subseteq S^3$, and two framings of its normal bundle.

[F1] The Hopf framing: the differential of the Hopf map along $U=h^{-1}([1:0])$ frames $U$, and the Pontryagin-Thom map of the framed unknot $(U,h_*b)$ is homotopic to the Hopf map, whose class generates $\pi_3(S^2)\cong\mathbb Z$ (computed below).

[F2] The bounding framing: $U$ bounds a smoothly embedded disk $D\subseteq S^3$; a normal line field of $D$ together with the inward normal of $U$ in $D$ trivialises $\nu(U\subseteq S^3)$, giving a framing $\varphi_D$ of $U$ which extends across a compact neat disk in $S^3\times I$ with a rank-two normal framing, constructed in step 1.2; the Pontryagin-Thom map of $(U,\varphi_D)$ is therefore nullhomotopic ([[def-framed-cobordism-of-embedded-submanifolds]], [[thm-pontryagin-thom-correspondence-in-fixed-codimension]]).

[F3] A framed submanifold is null-cobordant if and only if its Pontryagin-Thom map is nullhomotopic: the fixed-codimension correspondence is a bijection, and the empty framed submanifold has the constant Pontryagin-Thom map ([[thm-pontryagin-thom-correspondence-in-fixed-codimension]]).

[F4] Framed-cobordant submanifolds have based homotopic Pontryagin-Thom maps ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]]).

## Counterexample

1.1 The Hopf map $h(z_1,z_2)=[z_1:z_2]$ has fibre $U=\{z_2=0\}$. The two affine charts give smooth local sections $(1,w)/\sqrt{1+|w|^2}$ and $(v,1)/\sqrt{1+|v|^2}$; circle multiplication supplies bundle charts. With $a=|z_1|^2$ on unit representatives, the functions $\sigma(4a-1)$ and $\sigma(3-4a)$, divided by their positive sum, give a finite support-subordinate partition on these charts. Thus under AC the supplied numerable circle bundle is a Hurewicz fibration. In the $w=z_2/z_1$ chart the normal differential along $U$ is multiplication by $1/z_1$, of real rank two, so $[1:0]$ is regular and a positive basis gives the Hopf framing. The regular-preimage collapse lemma makes its Pontryagin–Thom map homotopic to $h$. [given, construct, algebra]


1.2 In real coordinates, $U=\{x_3=x_4=0\}\subset S^3$ bounds $D=\{x_4=0,x_3\ge0\}$. Let $h(t)=2t\sigma(8t-1)$ and put $W=\{(x,t):x\in S^3,\ x_4=0,\ x_3=h(t),\ 0\le t\le1/2\}$. It has the literal collar $U\times[0,1/8)$ and no end at time one. At the cap $x_3=1,t=1/2$, $h'=2$, so it is the smooth graph $t=x_3/2$ in the sphere $x_4=0$; elsewhere the height gradient there is nonzero. Thus it is a compact neat disk with boundary only $U\times\{0\}$. Its normal quotient is framed by the ordered classes of $e_4$ and $(\nabla_{S^2}x_3,-h')$, which are smooth, nonzero and independent everywhere. On the product collar this pair is $(e_4,e_3)$: the normal of $D$ and the inward normal of $U$ within $D$. Taking the dual trivialization defines precisely $\varphi_D$, constant throughout that collar. Hence this framing is framed null-cobordant, and its collapse is nullhomotopic by [F3]. [F2, F3, construct]


1.3 (The two framed submanifolds have the same underlying manifold.) The Hopf framing $(U,h_*b)$ and the bounding framing $(U,\varphi_D)$ are framings of the normal bundle of the same standard unknot $U\subseteq S^3$: the underlying closed $1$-submanifold is $U$ in both cases. [F1, F2, given]

2.1 The unit circle agrees with the quotient-circle model of the supplied universal cover by [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]. For $j\ge2$, $S^j$ is path-connected, locally path-connected (small chart balls suffice), and simply connected. The subgroup criterion [[thm-covering-space-lifting-criterion]] therefore lifts each based map $S^j\to S^1$ to $\mathbb R$. Linear contraction of the based lift gives $\pi_j(S^1)=0$. The long exact sequence of the Hopf bundle consequently makes $h_*:\pi_3(S^3)\to\pi_3(S^2)$ an isomorphism, since the adjacent groups $\pi_3(S^1)$ and $\pi_2(S^1)$ vanish. Degree identifies $\pi_3(S^3)$ with $\mathbb Z$ and its identity with $1$, so $[h]=h_*[\mathrm{id}]$ generates $\pi_3(S^2)$ and is nonzero. [step 1.1, algebra]


3.1 (Their Pontryagin-Thom classes differ.) By [F1] the Pontryagin-Thom class of $(U,h_*b)$ is the generator of $\pi_3(S^2)\cong\mathbb Z$, computed in steps 1.1 and 2.1. By [F2] the Pontryagin-Thom map of $(U,\varphi_D)$ is nullhomotopic, so by [F3] the framed submanifold $(U,\varphi_D)$ is framed null-cobordant and its Pontryagin-Thom class is the zero element of $\pi_3(S^2)$. In the isomorphism $\pi_3(S^2)\cong\mathbb Z$ of [F1] the generator is not zero, so the two classes differ. [F1, F2, F3, step 1.1, step 1.3, step 2.1]

4.1 (Conclusion.) The two framings of the same underlying submanifold $U$ have different Pontryagin-Thom classes; equivalently, by [F4], the two framed submanifolds are not framed cobordant. Hence the Pontryagin-Thom class is not determined by the underlying submanifold alone, and the framing is load-bearing data; the statement refuted is false. [F1, F2, F4, step 3.1] ∎
