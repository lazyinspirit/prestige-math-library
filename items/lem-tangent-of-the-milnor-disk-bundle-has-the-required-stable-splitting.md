---
id: lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting
kind: lemma
title: "Stable splitting of the tangent bundle of the Milnor disk bundle"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-sphere-bundle-m-h-j, thm-every-smooth-vector-bundle-admits-a-connection, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, lem-euler-and-first-pontryagin-classes-of-xi-h-j, def-axiom-of-choice, def-pontryagin-classes-by-complexification, thm-homotopy-invariance-of-vector-bundle-pullback]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
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
      locator: "printed p. 403, the tangent splitting of the disk bundle and p_1(W) = 2(h-j) pi^*u"
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 3.2 (the tangent bundle of a vector bundle and stability)"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "vertical tangent bundle and the splitting of the tangent sequence"
---

## Statement

Assume the Axiom of Choice as inherited from the connection and
Pontryagin-class suppliers. Let $\xi=\xi_{h,j}\to S^4$ be the quaternionic
clutching bundle, $W=D(\xi_{h,j})$ its disk bundle and $\pi:W\to S^4$ the
projection. Then
$$TW\oplus\varepsilon^1\cong\pi^*(\xi_{h,j}\oplus\varepsilon^5),\qquad p_1(TW)=2(h-j)\pi^*u\in H^4(W;\mathbb Z).$$

## Facts & Assumptions

**Given:** The clutchings $\xi=\xi_{h,j}$, the disk bundle $W=D(\xi)$ with projection $\pi$, and the generator $u\in H^4(S^4;\mathbb Z)$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] The vertical tangent bundle of a smooth vector bundle total space is the pullback of the bundle along the projection; restricting to the disk bundle and splitting the tangent sequence by a connection gives $TW\cong\pi^*(TS^4\oplus\xi)$ ([[thm-every-smooth-vector-bundle-admits-a-connection]], [[def-milnor-sphere-bundle-m-h-j]]).

[L2] The explicit map $(v,t)\mapsto v+tb$ at a base point of the unit sphere identifies $TS^4\oplus\varepsilon^1$ with the trivial rank-five bundle $\varepsilon^5$ (the unit sphere lies in $\mathbb R^5$ with outward normal $b$).

[L3] Assume AC. Pontryagin classes are natural and stable on CW bases ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]). On a CW-type base they are defined by transport along a homotopy equivalence ([[def-pontryagin-classes-by-complexification]]); homotopic pullbacks of numerable bundles are isomorphic ([[thm-homotopy-invariance-of-vector-bundle-pullback]]). Here the zero section $s:S^4\to W$ and projection $\pi$ are explicit homotopy inverses, using the fibre contraction. Thus $p_1(E)=\pi^*p_1(s^*E)$ for a bundle $E$ on $W$, and stability can be checked on $S^4$.

[L4] $p_1(\xi_{h,j})=2(h-j)u$ under the calibrated clutching conventions ([[lem-euler-and-first-pontryagin-classes-of-xi-h-j]]).

## Proof

**Proof technique:** direct.

1.1 The tangent sequence $0\to\pi^*\xi\to TW\to\pi^*TS^4\to0$ is split by the horizontal lifts of a smooth connection on $\xi$, so $TW\cong\pi^*(TS^4\oplus\xi)$. [L1, A1, given]

2.1 The map $(v,t)\mapsto v+tb$ identifies $TS^4\oplus\varepsilon^1$ with $\varepsilon^5$, so adding a trivial line to both sides of step 1.1 gives $TW\oplus\varepsilon^1\cong\pi^*(TS^4\oplus\xi)\oplus\varepsilon^1\cong\pi^*((TS^4\oplus\varepsilon^1)\oplus\xi)\cong\pi^*(\xi\oplus\varepsilon^5)$, the first assertion. [step 1.1, L2]

3.1 Pulling the stable splitting of step 2.1 back along the zero section gives $s^*TW\oplus\varepsilon^1\cong\xi\oplus\varepsilon^5$ on the actual CW sphere. By [L3] and [L4], $p_1(s^*TW)=p_1(\xi)=2(h-j)u$. Transporting back through the explicit homotopy equivalence gives $p_1(TW)=\pi^*p_1(s^*TW)=2(h-j)\pi^*u$. [step 2.1, L3, L4] ∎
