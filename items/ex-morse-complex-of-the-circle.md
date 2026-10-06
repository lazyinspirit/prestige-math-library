---
id: ex-morse-complex-of-the-circle
kind: example
title: "The Morse complex of the circle"
status: draft
origin: pipeline
deps: [cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, def-orientation-line-of-a-morse-critical-point, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-unparametrized-morse-trajectory-moduli-space, cor-index-one-trajectory-moduli-spaces-are-finite, def-morse-smale-pair, def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex, def-downward-gradient-like-vector-field, lem-smooth-bump-between-concentric-euclidean-balls, thm-integral-morse-differential-squares-to-zero]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1.c and Sec. 3.3, printed pp. 58-59 and 70-71 (worked one-dimensional case and signs)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19 Sec. 6.1 (the circle as first computation)"
dependency_level: 8
---

## Example

Assume AC. Let $f:S^1\to\mathbb R$ be the height function on the round circle and let $X=\mu(\theta)\sin\theta\,\partial_\theta$ be the normalized positive multiple of its downward round gradient constructed below, where $f(\theta)=\cos\theta$. It has exactly the same two orbit arcs as the round gradient. Then $(f,X)$ is Morse--Smale with a single maximum $p$ of index $1$, a single minimum $q$ of index $0$ and no other critical points ([[def-morse-smale-pair]], [[def-morse-function-and-excellent-morse-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]). The two open arcs from $p$ to $q$ are exactly the two elements $\gamma_1,\gamma_2$ of $\mathcal M(p,q)$ ([[def-unparametrized-morse-trajectory-moduli-space]]), so the space is finite ([[cor-index-one-trajectory-moduli-spaces-are-finite]]). Modulo two, [[def-mod-two-morse-differential]] gives $\partial p=q+q=0$ and $\partial q=0$. For the signed differential, choose orientations of $W^u(p)$ and of the zero-dimensional $W^u(q)$; the flow traverses the two components of $W^u(p)\cap W^s(q)$ in opposite directions relative to that orientation, so the comparison signs satisfy $\epsilon(\gamma_1)=-\epsilon(\gamma_2)$ and [[def-signed-morse-differential-over-the-integers]] gives $\partial p=\epsilon(\gamma_1)q+\epsilon(\gamma_2)q=0$. Thus both the mod-two and the integral Morse complexes of $(f,X)$ have homology $\mathbb Z/2$ in degrees $0,1$ (respectively $\mathbb Z$ in degrees $0,1$).

## Facts & Assumptions

**Given:** AC, the circle with $f(\theta)=\cos\theta$, the normalized field $X$ constructed in step 1.1, and orientations of both unstable manifolds.

[F1] The height function on the round circle is Morse with exactly two nondegenerate critical points: a maximum $p$ of index $1$ and a minimum $q$ of index $0$ ([[def-morse-function-and-excellent-morse-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-morse-smale-pair]]).

[F2] Smooth cutoffs exist, and a normalized downward gradient-like field has the prescribed linear local model ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-downward-gradient-like-vector-field]]). Under AC, a smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

[F3] Under the Axiom of Choice, for index drop one the unparametrized moduli space is finite and its cardinality may be reduced modulo two ([[cor-index-one-trajectory-moduli-spaces-are-finite]], [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] On a basis element of the mod-two chain group the differential counts the index-one moduli space modulo two, and the signed differential sums the comparison signs over the same finite sets ([[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]]).

[F5] The orientation of $W^u(p)$ and the chosen normal-quotient orientation of $W^s(q)$ orient the two intersection arcs. The comparison sign is $+1$ or $-1$ according to agreement with positive flow; reversing the orientation at $q$ reverses both arc signs together ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-orientation-line-of-a-morse-critical-point]]).

## Verification

**Proof technique:** direct, by explicit enumeration.

1.1 Choose smooth positive periodic $\mu$ equal to $4/(1+\cos\theta)$ near $p=0$ and $4/(1-\cos\theta)$ near $q=\pi$, using disjoint cutoff neighbourhoods and the positive constant $2$ elsewhere. In the signed Morse coordinates $\sqrt{1-\cos\theta}$ near $p$ and $\sqrt{1+\cos\theta}$ near $q$, with signs chosen across each pole, $X=\mu\sin\theta\,\partial_\theta$ is respectively $2w\partial_w$ and $-2w\partial_w$. Also $df(X)=-\mu\sin^2\theta<0$ off the poles, and the Hessians are $-1$ and $+1$. The smooth field is complete by [F2]. Stable and unstable sets are the poles and their complementary open intervals, whose nonempty intersections are transverse. On each of the two arcs $X$ never vanishes, so $\int d\theta/(\mu\sin\theta)$ gives a time coordinate onto $\mathbb R$, with endpoints $p$ backward and $q$ forward. Thus each arc is exactly one orbit class, and $\mathcal M(p,q)=\{\gamma_1,\gamma_2\}$. [F1, F2, F3, given, construct, algebra]

2.1 Modulo two, [F4] gives $\partial p=n_2(p,q)q$ with $n_2(p,q)=\#\mathcal M(p,q)\bmod2=2\bmod2=0$, so $\partial p=0$; and $\partial q=0$ because there is no critical point of index $-1$. [F4, step 1.1]

2.2 For the signed differential, [F5] says that the single orientation of $W^u(p)\cong\mathbb R$ orients both arcs, and the flow direction along the two arcs is opposite with respect to it: traversing $S^1$ from $p$ to $q$ along one arc and back along the other reverses the direction. Hence $\epsilon(\gamma_1)=-\epsilon(\gamma_2)$, and [F4] gives $\partial p=(\epsilon(\gamma_1)+\epsilon(\gamma_2))q=0$, while $\partial q=0$. [F4, F5, step 1.1]

3.1 Both complexes therefore have zero differentials with one generator in degree $1$ and one in degree $0$; their homology is $\mathbb Z/2$ in degrees $0$ and $1$ for the mod-two complex and $\mathbb Z$ in degrees $0$ and $1$ for the integral complex, with all other graded pieces zero. The integral differential is a chain complex differential by [[thm-integral-morse-differential-squares-to-zero]], consistent with the computation $\partial p=0$. [F4, step 2.1, step 2.2] ∎
