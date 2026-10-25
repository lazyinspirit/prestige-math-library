---
id: lem-degree-four-characteristic-numbers-add-under-clutching-product
kind: lemma
title: "Degree-four characteristic evaluations add under the clutching product"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternionic-clutching-bundles-xi-h-j-over-s-four, thm-oriented-clutching-classifies-oriented-bundles-over-spheres, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, def-kronecker-evaluation-pairing, def-axiom-of-choice, thm-based-sphere-maps-are-classified-by-geometric-degree]
justified_by: []
landmark: false
dependency_level: 1
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
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 1.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "clutching functions and the group structure on bundles over a sphere, printed pp. 21-24"
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 402, the additive behaviour of the Euler and Pontryagin numbers in the parameters (h,j)"
---

## Statement

Assume the Axiom of Choice as inherited from the characteristic-class
suppliers. Let $g,g':S^3\to SO(4)$ be smooth based maps with pointwise product
$gg'$, and let $E_g,E_{g'},E_{gg'}$ be the oriented rank-four bundles over
$S^4$ clutched by them. Then
$$\langle e(E_{gg'}),[S^4]\rangle=\langle e(E_g),[S^4]\rangle+\langle e(E_{g'}),[S^4]\rangle,$$
and the same additivity holds with $e$ replaced by $p_1$. For the inverse
clutching $g^{-1}$ the evaluations satisfy
$\langle e(E_{g^{-1}}),[S^4]\rangle=-\langle e(E_g),[S^4]\rangle$ and likewise
for $p_1$.

## Facts & Assumptions

**Given:** Smooth based maps $g,g':S^3\to SO(4)$ and the clutched oriented bundles $E_g,E_{g'},E_{gg'}$ with the upper-to-lower convention of [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]].

[L1] For a based clutching map $\varphi:S^3\to SO(4)$, $E_\varphi$ is the quotient bundle over $S^4=D^4_+\cup_{S^3}D^4_-$ with transition $\varphi$ ([[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]]).

[L2] For $n\ge1$, oriented isomorphism classes of oriented rank-$n$ bundles over $S^n$ are in bijection with $[S^{n-1},SO(n)]$ via the clutching construction, so two oriented bundles with the same clutching map are isomorphic ([[thm-oriented-clutching-classifies-oriented-bundles-over-spheres]]).

[L3] Assume AC. The Euler class is natural under orientation-preserving pullbacks ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[L4] Assume AC. The first Pontryagin class is natural under pullbacks over path-connected paracompact Hausdorff CW bases ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).

[L5] Evaluation of a degree-four class on the fundamental class is additive and natural ([[def-kronecker-evaluation-pairing]]).

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L6] A degree-one based sphere self-map is based homotopic to the identity ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

## Proof

**Proof technique:** direct.

1.1 Choose two disjoint oriented closed balls $B_1,B_2$ in $S^3$, avoiding the basepoint. Let $c_i:S^3\to B_i/\partial B_i\cong S^3$ collapse the complement of the interior of $B_i$, using an orientation-preserving identification with the target sphere. Each $c_i$ has degree one and is based homotopic to the identity by [L6]. Consequently $g_i=g\circ c_1$ and $g'_i=g'\circ c_2$ are based homotopic to $g,g'$; the map $g_i g'_i$ is homotopic to $gg'$, is identity outside $B_1\cup B_2$, and equals the appropriate factor on each ball. Thus pointwise multiplication represents the oriented pinch sum of the two clutching classes. Only continuous representatives are needed for clutching classification. [L1, L2, L6, given, construct]

2.1 Suspend the pinch $S^3\to S^3\vee S^3$ to obtain the oriented pinch $p:S^4\to S^4\vee S^4$. Identify the two fibres over the wedge point by their based trivializations, giving a bundle $E_g\vee E_{g'}$ on the wedge. Over the suspended pinch each cone has a product trivialization, and the equatorial transition on $B_1$ is $g\circ c_1$, on $B_2$ is $g'\circ c_2$, and elsewhere is identity. Its clutching class is therefore that of $gg'$ by step 1.1; [L2] gives $E_{gg'}\cong p^*(E_g\vee E_{g'})$. This uses the suspended pinch, not a claim that a nontrivial hemispherical quotient pullback is trivial on its source hemisphere. [step 1.1, L1, L2, construct]

3.1 In degree four the wedge cohomology is the direct sum of its two summand cohomologies. By naturality [L3], [L4], the characteristic class $c=e$ or $p_1$ on the wedge has restrictions $c(E_g),c(E_{g'})$, and $c(E_{gg'})=p^*c$. The oriented pinch sends $[S^4]$ to the sum of the two fundamental classes, since its two quotient sphere maps have local degree $+1$. Naturality and additivity of evaluation [L5] give $\langle c(E_{gg'}),[S^4]\rangle=\langle c(E_g),[S^4]\rangle+\langle c(E_{g'}),[S^4]\rangle$. [step 2.1, L3, L4, L5, A1]

4.1 The constant identity clutching gives a trivial bundle, with zero Euler evaluation (a constant nowhere-zero section) and zero first Pontryagin class. Applying step 3.1 to $g,g^{-1}$, whose pointwise product is identity, shows that inversion negates both evaluations. This proves all assertions. [step 3.1, L1, L3, L4] ∎
