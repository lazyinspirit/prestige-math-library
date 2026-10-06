---
id: ex-framed-links-represent-elements-of-pi-three-of-s-two
kind: example
title: "The framed unknot represents a generator of pi_3 of S^2"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
  - def-the-standard-smooth-step-function
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - thm-covering-space-lifting-criterion
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-higher-dimensional-spheres-are-simply-connected
  - cor-real-line-is-universal-cover-of-circle
  - lem-covering-homotopies-lift-by-finite-local-strips
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 5.35: the line map $S^3\\to\\mathbb CP^1$ is not null homotopic, printed p.43"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Example 6.20: framed knots in $S^3$ and the Hopf isomorphism $\\pi_3(S^2)\\cong\\mathbb Z$, electronic pp.115-116"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, framed 1-manifolds, printed pp.50-51"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used by the
numerable-bundle lifting theorem in step 1.2 and supplying the countable
choice ([[def-countable-choice]]) inherited by the regular-preimage and
collapse constructions and the Pontryagin–Thom correspondence. Let
$h:S^3\subseteq\mathbb C^2\to\mathbb{CP}^1\cong S^2$,
$$h(z_1,z_2)=[z_1:z_2],$$
be the Hopf map. The fibre over $y:=[1:0]$ is the standard unknot
$$U=\{z\in S^3:z_2=0\}\cong S^1,$$
and $y$ is a regular value of $h$; the differential of $h$ along $U$ frames the
normal bundle of $U$ in $S^3$, so for a positive basis $b$ of $T_yS^2$ the
pair $(U,h_*b)$ is a framed regular preimage
([[def-framed-regular-preimage-of-a-map-to-a-sphere]]). Then the
Pontryagin-Thom map of $(U,h_*b)$ is homotopic to $h$, and since the Hopf
fibration's long exact sequence gives $h_*:\pi_3(S^3)\to\pi_3(S^2)$ an
isomorphism while $\pi_3(S^3)\cong\mathbb Z$ by degree, the class of the
framed unknot is a generator of $\pi_3(S^2)\cong\mathbb Z$.

## Facts & Assumptions

**Given:** The Hopf map $h:S^3\to\mathbb{CP}^1\cong S^2$, $h(z_1,z_2)=[z_1:z_2]$, with $y=[1:0]$, the fibre $U=h^{-1}(y)=\{z_2=0\}\cong S^1$, and a positive basis $b$ of $T_yS^2$.

[F1] The Hopf map is a smooth surjection, $y$ is a regular value, $U$ is a closed embedded circle, and $h_*b$ is the framing of $\nu(U\subseteq S^3)$ induced by the differential ([[def-framed-regular-preimage-of-a-map-to-a-sphere]]).

[F2] The Pontryagin-Thom map of a framed regular preimage is smoothly homotopic to the original map ([[lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map]]).

[F3] The complex Hopf map is a numerable principal circle bundle over $\mathbb{CP}^1$; numerable fibre bundles are Hurewicz fibrations under AC ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F4] A based Serre fibration has a long exact sequence of homotopy groups ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F5] Based maps $S^k\to S^r$ are nullhomotopic for $0\le k<r$ ([[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]), and degree is an isomorphism $\pi_r(S^r)\to\mathbb Z$ ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F6] The universal cover of the circle is $\mathbb R$, so $\pi_k(S^1)=0$ for $k\ge2$: a map $S^k\to S^1$ with $k\ge2$ lifts along the covering projection because $S^k$ is simply connected, and $\mathbb R$ is contractible. The unit-circle and quotient-circle models agree by [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]; the lift exists by [[thm-covering-space-lifting-criterion]] because spheres are path-connected and locally path-connected and their fundamental group is trivial ([[cor-real-line-is-universal-cover-of-circle]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[lem-covering-homotopies-lift-by-finite-local-strips]]).

[F7] The Pontryagin-Thom correspondence identifies framed cobordism classes of closed framed $1$-submanifolds of $S^3$ with $\pi_3(S^2)$ ([[thm-pontryagin-thom-correspondence-in-fixed-codimension]], with $n=3$, $k=2$).

## Verification

1.1 In the affine chart $[1:w]$ the target coordinate is $w=z_2/z_1$. At $(z_1,0)\in U$, its transverse differential is $\delta z_2\mapsto\delta z_2/z_1$, an invertible complex map, hence of real rank two. Thus $y$ is regular, and its fibre is exactly $U=\{|z_1|=1,z_2=0\}$. This circle bounds the hemisphere disk $\{x_4=0,x_3\ge0\}$ in $S^3$, so it is the standard unknot. The target identification with $S^2$ is smooth: in the $w$ chart it is $(2\Re w,2\Im w,1-|w|^2)/(1+|w|^2)$, the inverse stereographic formula, with the analogous formula in the other chart. Both affine charts also give smooth bundle sections $(1,w)/\sqrt{1+|w|^2}$ and $(v,1)/\sqrt{1+|v|^2}$; multiplying by $S^1$ gives the bundle charts. To supply numerability, let $a=|z_1|^2$ on unit representatives, which is well defined on the base. Put $b_1=\sigma(4a-1)$, $b_2=\sigma(3-4a)$ and $\lambda_i=b_i/(b_1+b_2)$. Their denominator is positive for $0\le a\le1$, their sum is one, and the supports lie in $a\ge1/4\subset\{z_1\ne0\}$ and $a\le3/4\subset\{z_2\ne0\}$. This is a supplied finite support-subordinate partition of unity. The regular-preimage definition gives the framing $h_*b$. [F1, F3, given, construct, algebra]


1.2 (The Hopf map generates $\pi_3(S^2)$.) The Hopf map is a numerable circle bundle and hence a Hurewicz, in particular Serre, fibration by [F3]; its long exact sequence by [F4] contains $\pi_3(S^1)\to\pi_3(S^3)\xrightarrow{h_*}\pi_3(S^2)\to\pi_2(S^1)$. By [F6] the outer groups vanish ($k=3\ge2$ and $k-1=2\ge2$), so $h_*$ is an isomorphism; by [F5] $\pi_3(S^3)\cong\mathbb Z$. Hence $\pi_3(S^2)\cong\mathbb Z$, generated by the class of $h$. [F3, F4, F5, F6]

2.1 (Its Pontryagin-Thom map is the Hopf map up to homotopy.) By [F2] the Pontryagin-Thom map $f_{(U,h_*b)}:S^3\to S^2$ is smoothly homotopic to $h$; in particular their classes in $\pi_3(S^2)$ agree. [F2, step 1.1]

3.1 (Conclusion.) The framed unknot's Pontryagin-Thom class is the class of $h$ by step 2.1, which generates $\pi_3(S^2)\cong\mathbb Z$ by step 1.2, and the correspondence of [F7] identifies framed cobordism classes of framed links in $S^3$ with $\pi_3(S^2)$; so $(U,h_*b)$ represents a generator. Full AC supplies both the hypothesis of the numerable-bundle lifting theorem [F3] and the countable choice inherited by the regular-preimage and collapse constructions [F1, F2] and the correspondence [F7]; no Hopf invariant theory is developed. [F1, F2, F3, F7, step 2.1, step 1.2] ∎
