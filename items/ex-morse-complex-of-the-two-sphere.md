---
id: ex-morse-complex-of-the-two-sphere
kind: example
title: "The Morse complex of the two-sphere"
status: published
origin: pipeline
deps: [cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, def-axiom-of-choice, lem-smooth-bump-between-concentric-euclidean-balls, def-downward-gradient-like-vector-field, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex, def-morse-smale-pair, def-mod-two-morse-chain-group]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1.c, printed pp. 58-59 (height on the sphere)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19 Sec. 6.1 (degree reasons)"
dependency_level: 7
---

## Example

Assume AC. Let $f:S^2\to\mathbb R$ be the height function of the round two-sphere and let $X$ be the normalized positive multiple of its round downward gradient constructed below; this preserves its meridian orbits. Then $(f,X)$ is Morse--Smale with exactly two critical points: a maximum $N$ of index $2$ and a minimum $S$ of index $0$ ([[def-morse-function-and-excellent-morse-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]). Consequently $CM_1(f,X;\mathbb Z/2)=0$ and $CM_1(f,X;\mathbb Z)=0$, and every differential vanishes for degree reasons: $\partial_2$ has target $CM_1=0$ and $\partial_1$ has source $CM_1=0$ ([[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]]). The only nonempty trajectory moduli space between distinct critical points is $\mathcal M(N,S)$; by [[cor-no-morse-smale-trajectories-for-nonpositive-index-drop]] no moduli space with nonpositive index drop is nonempty, so no index-one differential can receive a contribution. Both complexes have homology $\mathbb Z/2$ in degrees $0$ and $2$ (respectively $\mathbb Z$ in degrees $0$ and $2$).

## Facts & Assumptions

**Given:** AC and the round sphere with $f=z$, using the normalized field of step 1.1; choose either orientation of each unstable manifold for the integral complex.

[F1] The height function on the round two-sphere is Morse with exactly two nondegenerate critical points, the poles $N$ of index $2$ and $S$ of index $0$, and it is Morse--Smale for the round metric ([[def-morse-function-and-excellent-morse-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-morse-smale-pair]]).

[F2] The chain groups are free modules on the critical points of each index, so they vanish when there are no critical points of that index, and the differentials have the degrees $-1$ of [[def-mod-two-morse-differential]] and [[def-signed-morse-differential-over-the-integers]] ([[def-mod-two-morse-chain-group]]).

[F3] Smooth cutoffs exist and the normalized local field is required by the downward gradient-like convention ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-downward-gradient-like-vector-field]]). The differential suppliers carry AC ([[def-axiom-of-choice]]). Under AC, a smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

## Verification

**Proof technique:** direct, by degree reasons.

1.1 In polar coordinates $f=\cos\theta$ and the round downward gradient is $\sin\theta\,\partial_\theta$. Multiply it by a smooth positive function of $f$ equal to $4/(1+f)$ near $N$ and $4/(1-f)$ near $S$, using cutoffs from [F3] and the positive constant $2$ elsewhere. In the Cartesian radial Morse coordinates of radius $\sqrt{1-f}$ at $N$ and $\sqrt{1+f}$ at $S$, the resulting field is $2w$ and $-2w$, respectively; explicitly they are $w=(x,y)/\sqrt{1+z}$ near $N$ and $w=(x,y)/\sqrt{1-z}$ near $S$, hence smooth local Cartesian coordinates with nonsingular derivative at the pole. Thus $X$ satisfies the normalized local model and strictly decreases $f$ elsewhere. The only critical points are $N,S$, with Hessians negative and positive definite and hence indices $2,0$. The unstable set of $N$ and stable set of $S$ are the complementary-pole open disks; the other two sets are single points, so all nonempty stable--unstable intersections are transverse. The smooth field is complete by [F3], so the pair is Morse--Smale. The chain groups in degree one are free on the empty set and are zero. [F1, F2, F3, given, construct, algebra]

2.1 The differentials out of and into degree one vanish identically: $\partial_2:CM_2\to CM_1$ has zero target and $\partial_1:CM_1\to CM_0$ has zero source. The remaining differentials $\partial_0$ and $\partial_3$ have zero target and zero source respectively. So all differentials are zero. [F2, step 1.1]

3.1 Although every meridian from $N$ to $S$ is a connecting trajectory, its index drop is two. The differential definition in [F2] counts index drop one only, so these trajectories supply no coefficient. [F2, step 1.1, step 2.1]

4.1 With zero differentials and one generator in degree $2$ and one in degree $0$, the mod-two complex has homology $\mathbb Z/2$ in degrees $0$ and $2$ and zero elsewhere, and the integral complex has homology $\mathbb Z$ in degrees $0$ and $2$ and zero elsewhere. [step 2.1, step 3.1] ∎
