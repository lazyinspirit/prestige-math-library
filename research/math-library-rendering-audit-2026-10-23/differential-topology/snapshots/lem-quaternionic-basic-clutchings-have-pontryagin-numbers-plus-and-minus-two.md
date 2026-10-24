---
id: lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two
kind: lemma
title: "Pontryagin calibration of the basic quaternionic clutchings"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternionic-clutching-bundles-xi-h-j-over-s-four, lem-euler-number-is-the-clutching-degree, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, lem-complex-orientation-of-underlying-real-bundles, prop-complexification-is-conjugation-invariant, def-pontryagin-classes-by-complexification, thm-naturality-normalization-and-whitney-sum-for-chern-classes, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 402, the two basic bundles with p_1 = +2 and -2 times the generator in the fixed orientation convention"
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 3.2 (complexification and Pontryagin classes)"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "p_i(E) = (-1)^i c_{2i}(E_C), Chern classes of conjugates and Whitney sums"
---

## Statement

Assume the Axiom of Choice as inherited from the Chern and Pontryagin
suppliers. Let $V_L$ be the oriented rank-four bundle over $S^4$ clutched by
$a\mapsto(v\mapsto av)$ and $V_R$ the one clutched by
$a\mapsto(v\mapsto va)$, with the base, fibre and Euler-degree conventions of
[[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]]. Then
$$e(V_L)=e(V_R)=u\in H^4(S^4;\mathbb Z),\qquad p_1(V_L)=2u,\qquad p_1(V_R)=-2u .$$

## Facts & Assumptions

**Given:** The basic bundles $V_L,V_R$ of [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]] with the generator $u\in H^4(S^4;\mathbb Z)$.

[A1] The Axiom of Choice is assumed as inherited from the Chern/Pontryagin suppliers ([[def-axiom-of-choice]]).

[L1] For the basic left and right quaternionic clutchings the Euler number is $+1$, so $e(V_L)=e(V_R)=u$ ([[lem-euler-number-is-the-clutching-degree]], [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]]).

[L2] The top Chern class of a complex rank-$n$ bundle equals the Euler class of its underlying real bundle in the complex orientation ([[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]).

[L3] A complex bundle $V$ has a canonical complex orientation of $V_{\mathbb R}$, natural under complex-linear isomorphisms; orientation reversal negates the Euler class ([[lem-complex-orientation-of-underlying-real-bundles]]).

[L4] For a complex bundle $V$, the conjugate satisfies $c_i(\overline V)=(-1)^ic_i(V)$, and the complexification of a real bundle is canonically isomorphic to its conjugate ([[prop-complexification-is-conjugation-invariant]], [[def-pontryagin-classes-by-complexification]]).

[L5] Total Chern classes multiply under Whitney sums and vanish in degrees above the rank ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

## Proof

**Proof technique:** direct.

1.1 Write $V=V_L$ or $V=V_R$ with its complex structure: for $V_L$ right multiplication by $i$ commutes with left multiplication by every quaternion and makes $V_L$ a complex rank-two bundle; for $V_R$ left multiplication by $i$ plays the same role for right multiplication. [L1, given]

2.1 The complexification $V_{\mathbb C}=V\otimes_{\mathbb R}\mathbb C$ carries the complexified complex structure $J_{\mathbb C}$; its $\pm i$ eigenspace projections are complex subbundles $E_+\cong V$ and $E_-\cong\overline V$ (locally over a trivializing chart they are the $\pm i$ eigenspaces of the constant matrix $J$), so $V_{\mathbb C}\cong V\oplus\overline V$ as complex bundles. [step 1.1, L4]

3.1 By [L5] and step 2.1, $c_2(V_{\mathbb C})=c_2(V)+c_2(\overline V)=c_2(V)+c_2(V)=2c_2(V)$ because $c_2$ is even in the conjugate sign of [L4], and $c_1$ terms do not contribute in degree four on $S^4$ as $H^2(S^4)=0$. [step 2.1, L4, L5]

4.1 By the Pontryagin convention $p_1(V_{\mathbb R})=-c_2(V_{\mathbb C})=-2c_2(V)$ (the sign is the one fixed in [L4]). [step 3.1, L4, A1]

5.1 The complex orientation of $V_L$ is opposite to the fibre orientation: the commuting complex structure is right multiplication by $i$, whose complex basis $(1,j)$ gives the real ordered basis $(1,i,j,-k)$, the negative of the fixed fibre basis $(1,i,j,k)$; hence by [L2] and [L3] $c_2(V_L)=e(V_{L,\mathbb R})$ in the complex orientation $=-e(V_{L,\mathbb R})$ in the fibre orientation $=-u$. [step 4.1, L1, L2, L3]

6.1 The complex orientation of $V_R$ agrees with the fibre orientation: the commuting complex structure is left multiplication by $i$, whose complex basis $(1,j)$ gives the real ordered basis $(1,i,j,k)$; hence $c_2(V_R)=+u$. [step 5.1, L2, L3]

7.1 Substituting steps 5.1 and 6.1 into step 4.1 gives $p_1(V_L)=-2(-u)=2u$ and $p_1(V_R)=-2u$, while step 1.1's Euler computation gives $e(V_L)=e(V_R)=u$, as asserted. [step 5.1, step 6.1] ∎
