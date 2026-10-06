---
id: lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator
kind: lemma
title: "The Thom class of a disk bundle pairs with the base generator to one"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-thom-isomorphism-for-oriented-vector-bundles, def-euler-class-by-zero-section-pullback-of-the-thom-class, lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, lem-collared-gluing-has-relative-excision-and-evaluation-maps, lem-relative-cap-evaluation-identity, def-relative-fundamental-class-and-boundary-orientation, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
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
      locator: "printed p. 403, the relative evaluation <U x, [W,M]> = 1 for the Thom generator"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, Thom class, Euler class and Poincare duality for vector bundles"
---

## Statement

Assume the Axiom of Choice as inherited from the Thom, normal-Thom and duality
suppliers. Let $\xi\to S^4$ be an oriented rank-four real bundle with Euler
number $\varepsilon=\pm1$ with respect to the base generator
$u\in H^4(S^4;\mathbb Z)$, let $W=D(\xi)$, $M=S(\xi)=\partial W$,
$x=\pi^*u$ and let $U\in H^4(W,M;\mathbb Z)$ be the oriented Thom generator in
the normalization of [[thm-thom-isomorphism-for-oriented-vector-bundles]].
With the total orientation base followed by fibre and the induced boundary
orientation, the relative evaluation satisfies
$$\langle U\smile x,[W,M]\rangle=1 .$$

## Facts & Assumptions

**Given:** The oriented rank-four bundle $\xi$ over $S^4$ with Euler number $\varepsilon=\pm1$, its disk and sphere bundles $W=D(\xi)$, $M=S(\xi)$, the projection $\pi$, the zero section $s$, the base generator $u$, the class $x=\pi^*u$, and the normalized Thom generator $U$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] The Thom isomorphism gives $H^4(W,M;\mathbb Z)=\mathbb Z\cdot U$ and $H^4(W;\mathbb Z)=\mathbb Z\cdot x$ with the stated normalization ([[thm-thom-isomorphism-for-oriented-vector-bundles]]).

[L2] The Euler class is $e(\xi)=s^*j^*(U)$; since $e(\xi)=\varepsilon u$ and $s^*\pi^*=\mathrm{id}$, the absolute class $j(U)$ satisfies $j(U)=\varepsilon x$ ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[L3] Assume AC. For a closed embedded oriented four-manifold $Z$ in a closed oriented eight-manifold $N$, with its normal bundle $\nu$ oriented in tangent-first order, the absolute image of the normal Thom class under tubular excision is the Poincare dual of $[Z]$: the supplier's shuffle sign is $(-1)^{4\cdot4}=+1$ ([[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]).

[L4] Assume $\mathrm{AC}_\omega$. For fillings $W,W'$ glued along an orientation-preserving boundary identification into $N=W\cup_M(-W')$, there are excision isomorphisms and evaluation comparisons carrying $[N]$ to $[W,M]$ on the first side and to $-[W',M]$ on the second ([[lem-collared-gluing-has-relative-excision-and-evaluation-maps]]).

[L5] Relative cap and cup evaluation satisfy $\langle a\smile y,[W,M]\rangle=\langle y,a\cap[W,M]\rangle$ ([[lem-relative-cap-evaluation-identity]]).

## Proof

**Proof technique:** direct.

1.1 Double $W$ along its collar and write $N=W\cup_M(-W)$; by [L4] with $W'=W$ there are the excision isomorphisms and the evaluation comparison for $N$, and the zero section $Z=s(S^4)$ is a closed oriented embedded four-sphere in $N$ with normal bundle $\xi$. [L4, A1, given]

2.1 Let $E_W:H^4(W,M;\mathbb Z)\to H^4(N,V;\mathbb Z)$ be the inverse of the first excision isomorphism of [L4]; by [L3] the absolute image of $E_W(U)$ in $H^4(N;\mathbb Z)$ is the Poincare dual of $Z$, and the evaluation comparison of [L4] identifies $\langle j_VE_W(U)\smile Y,[N]\rangle$ with $\langle U\smile y,[W,M]\rangle$ whenever $Y$ restricts to $y$ on the first side. [step 1.1, L3, L4]

3.1 By [L2] the class $j(U)=\varepsilon x$ with $\varepsilon=\pm1$; because [L1] says $j$ is an isomorphism of infinite cyclic groups up to the sign $\varepsilon$, the class $x$ has the unique relative lift $\varepsilon U$, whose restriction to the zero section is $u$: indeed $s^*\pi^*u=u$ and $s^*j^*(\varepsilon U)=\varepsilon\cdot\varepsilon u=u$. [step 2.1, L1, L2]

4.1 Let $X$ be the absolute class on $N$ obtained by extending $x$ from the first side and zero from the second side via the inverse excision map, as in [L4]; its restriction to the zero section is $u$, and the closed cap/evaluation identity of [L5] applied to $N$ and the Poincare-dual identification of step 2.1 give $\langle j_VE_W(U)\smile X,[N]\rangle=\langle s^*X,[S^4]\rangle=\langle u,[S^4]\rangle=1$. [step 2.1, step 3.1, L3, L5]

5.1 The evaluation comparison of step 2.1 identifies the left-hand side with $\langle U\smile x,[W,M]\rangle$, because $X$ restricts to $x$ on the first side; hence $\langle U\smile x,[W,M]\rangle=1$, with the orientation signs checked by the rank-four base/fibre block swap being positive and by the induced boundary orientation of $M$. [step 4.1, L4, L5] ∎
